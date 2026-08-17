/**
 * Repair dsh session logs written by dsh-molecule-viewer <= 0.1.x.
 *
 * Old plugin versions appended a custom `molecule/view` event to the session
 * log. Stock dsh harnesses refuse to replay logs containing an event type
 * outside KNOWN_SESSION_EVENT_TYPES unless the event carries the envelope's
 * `ignorable: true` marker (SessionFormatUnsupportedError), so affected
 * sessions fail to load their history. `Session.append()` cannot set that
 * marker, which is why the plugin moved to the `tool/result` `meta` channel
 * in 0.2.0.
 *
 * The JSONL log is a concatenation of independently decodable Zstandard
 * frames — the first frame holds exactly the header line, each later frame
 * one durable event batch. Rewriting the whole file as a single frame breaks
 * that contract ("first frame is not exactly one header line"), so this
 * script preserves the frame layout: every frame is decompressed, edited at
 * line granularity, and only frames whose bytes actually changed are
 * re-encoded (with the harness's own checksummed compressor). Untouched
 * frames keep their original bytes; seq numbers never move (the reader
 * requires a strictly contiguous decoded sequence, so rows are never
 * deleted).
 *
 * Edits per affected session:
 * 1. `molecule/view` rows gain `"ignorable": true` — readers that do not
 *    know the type skip them, so the log loads on stock harnesses.
 * 2. The matching `tool/result` row (located by `meta.viewerEventId`) has its
 *    `meta` rewritten into the 0.2.0 `MoleculeViewMeta` wire shape
 *    (`kind: 'molecule-view'` + raw `data`, `style`, `name`, `atomCount`), so
 *    the installed client renderer shows the molecule again instead of the
 *    degraded "older call" summary.
 *
 * Usage (needs a deepseek-harness checkout for the zstd frame helpers):
 *   DSH_ROOT=/path/to/deepseek-harness tsx scripts/repair-molecule-view-events.mts \
 *       [--dry-run] <session-dir-or-log>...
 * Backs up to session.jsonl.zstd.bak before the first rewrite of each log.
 */

import { copyFileSync, existsSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs'
import { basename, join } from 'node:path'

/** Harness checkout supplying the zstd frame helpers (override with DSH_ROOT). */
const DSH_ROOT = process.env.DSH_ROOT ?? '/mnt/d/agent/deepseek-harness'
const { compressZstdFrame, decompressZstdFrame, scanZstdFrames } =
  await import(`${DSH_ROOT}/packages/session/session-persistence-jsonl/lib/types/zstd.js`) as {
    compressZstdFrame: (input: Buffer | string) => Promise<Buffer>
    decompressZstdFrame: (input: Buffer) => Promise<Buffer>
    scanZstdFrames: (buffer: Buffer, maxFrames?: number) => { frames: { start: number, end: number }[], tornStart?: number }
  }

const STYLES = new Set(['stick', 'line', 'sphere', 'cartoon'])
const MAX_INLINE_BYTES = 2 * 1024 * 1024

interface ViewEvent {
  vid: string
  data: Record<string, unknown>
}

function findLog(target: string): string {
  const st = existsSync(target) ? statSync(target) : undefined
  if (st?.isDirectory()) {
    const candidate = join(target, 'session.jsonl.zstd')
    if (existsSync(candidate)) return candidate
    throw new Error(`no session.jsonl.zstd under ${target}`)
  }
  if (st?.isFile()) return target
  throw new Error(`not found: ${target}`)
}

/** Serialize a parsed row back to its log line (compact, key order kept). */
function dumps(row: Record<string, unknown>): string {
  return JSON.stringify(row)
}

async function repair(log: string, dryRun: boolean): Promise<void> {
  const raw = readFileSync(log)
  const { frames, tornStart } = scanZstdFrames(raw)
  if (frames.length === 0) throw new Error(`${log}: no complete frames`)

  // Pass 1: decode all frames, collect molecule/view payloads by viewerEventId.
  const frameTexts: string[] = []
  const views = new Map<string, Record<string, unknown>>()
  for (const f of frames) {
    const text = (await decompressZstdFrame(raw.subarray(f.start, f.end))).toString('utf8')
    frameTexts.push(text)
    for (const line of text.split('\n')) {
      if (!line.includes('"molecule/view"')) continue
      const row = JSON.parse(line) as { data?: { viewerEventId?: unknown } }
      const vid = row.data?.viewerEventId
      if (typeof vid === 'string') views.set(vid, row.data ?? {})
    }
  }
  if (views.size === 0) {
    console.log(`${log}: no molecule/view events, skipped`)
    return
  }

  // Pass 2: rewrite rows in place; keep original frame bytes when unchanged.
  let marked = 0
  let merged = 0
  let reencoded = 0
  const outFrames: Buffer[] = []
  for (let i = 0; i < frames.length; i++) {
    const lines = frameTexts[i]!.split('\n')
    let changed = false
    const rebuilt = lines.map((line): string => {
      if (line === '') return line
      if (line.includes('"molecule/view"')) {
        const row = JSON.parse(line) as Record<string, unknown>
        if (row['type'] !== 'molecule/view') return line
        row['ignorable'] = true
        marked++
        changed = true
        return dumps(row)
      }
      if (line.includes('"tool/result"')) {
        const row = JSON.parse(line) as { data?: { meta?: { viewerEventId?: unknown } } }
        const vid = row.data?.meta?.viewerEventId
        if (typeof vid !== 'string' || !views.has(vid)) return line
        const view = views.get(vid)!
        const meta = row.data!.meta as Record<string, unknown>
        const raw2 = view['data']
        const style = view['style']
        const next: Record<string, unknown> = {
          kind: 'molecule-view',
          ok: meta['ok'] === true || meta['ok'] === undefined,
          format: (view['format'] as string) ?? (meta['format'] as string) ?? 'pdb',
          atomCount: typeof meta['atomCount'] === 'number' ? meta['atomCount'] : 0,
          style: typeof style === 'string' && STYLES.has(style) ? style : 'stick',
        }
        if (typeof view['name'] === 'string') next['name'] = view['name']
        if (next['ok'] !== true) next['error'] = (meta['error'] as string) ?? 'parse failed'
        if (typeof raw2 === 'string' && Buffer.byteLength(raw2, 'utf8') <= MAX_INLINE_BYTES) {
          next['data'] = raw2
        } else {
          next['truncated'] = true
        }
        row.data!.meta = next
        merged++
        changed = true
        return dumps(row)
      }
      return line
    })
    if (!changed) {
      outFrames.push(raw.subarray(frames[i]!.start, frames[i]!.end))
    } else {
      const text = rebuilt.join('\n')
      outFrames.push(await compressZstdFrame(text))
      reencoded++
    }
  }

  console.log(`${log}: mark ${marked} molecule/view row(s) ignorable, rewrite ${merged} tool/result meta(s)`
    + ` | frames: ${frames.length} (${reencoded} re-encoded)`
    + (tornStart !== undefined ? `, torn tail kept at byte ${tornStart}` : ''))
  if (dryRun) return

  const backup = `${log}.bak`
  if (!existsSync(backup)) copyFileSync(log, backup)
  const tmp = `${log}.tmp`
  writeFileSync(tmp, Buffer.concat([...outFrames, ...(tornStart !== undefined ? [raw.subarray(tornStart)] : [])]))
  renameSync(tmp, log)
  console.log(`  rewrote ${basename(log)} (backup: ${basename(backup)})`)
}

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const targets = args.filter(a => a !== '--dry-run')
if (targets.length === 0) {
  console.error('usage: tsx repair-molecule-view-events.mts [--dry-run] <session-dir-or-log>...')
  process.exit(2)
}
for (const t of targets) {
  try {
    await repair(findLog(t), dryRun)
  } catch (e) {
    console.error(`${t}: ${(e as Error).message}`)
    process.exitCode = 1
  }
}
