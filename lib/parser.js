/**
 * Lightweight molecular file parser.
 *
 * This does NOT do full chemistry parsing — it validates the format and
 * counts atoms so the tool result gives the model useful metadata. The
 * actual 3D rendering happens client-side via 3Dmol.js, which has its own
 * robust parsers for each format.
 * @module @dsh-plugins/dsh-tool-molecule-viewer/parser
 */
/**
 * Count ATOM / HETATM records in PDB content.
 * PDB line prefixes "ATOM  " and "HETATM" are fixed-column.
 */
function parsePdb(data) {
    const lines = data.split('\n');
    let atomCount = 0;
    let hasValidRecord = false;
    for (const line of lines) {
        const record = line.slice(0, 6).trim();
        if (record === 'ATOM' || record === 'HETATM') {
            atomCount++;
            hasValidRecord = true;
        }
    }
    if (!hasValidRecord) {
        return { atomCount: 0, ok: false, error: 'No ATOM or HETATM records found in PDB data' };
    }
    return { atomCount, ok: true };
}
/**
 * Parse MOL/SDF V2000 format: the counts line is line 4 (0-indexed 3) and
 * starts with the atom count. SDF may contain multiple molecules separated
 * by `$$$$`; this counts atoms across all molecules.
 */
function parseMolFormat(data) {
    const blocks = data.split('$$$$');
    let totalAtoms = 0;
    let parsedAny = false;
    for (const block of blocks) {
        const trimmed = block.trim();
        if (trimmed === '')
            continue;
        const lines = trimmed.split('\n');
        // V2000: header (3 lines) + counts line; V3000 begins with a counts
        // line containing "V3000".
        if (lines.length < 4) {
            return { atomCount: 0, ok: false, error: 'MOL/SDF block too short: expected at least 4 header lines' };
        }
        const countsLine = lines[3] ?? '';
        if (countsLine.includes('V3000')) {
            // V3000: count atoms in the atom block between "BEGIN ATOM" and "END ATOM"
            let inAtomBlock = false;
            let v3000Atoms = 0;
            for (const line of lines) {
                const content = line.trim();
                if (content.startsWith('BEGIN ATOM')) {
                    inAtomBlock = true;
                    continue;
                }
                if (content.startsWith('END ATOM')) {
                    inAtomBlock = false;
                    continue;
                }
                if (inAtomBlock && content.length > 0)
                    v3000Atoms++;
            }
            totalAtoms += v3000Atoms;
            parsedAny = true;
        }
        else {
            // V2000: atom count is the first integer on the counts line.
            const match = /^\s*(\d+)/.exec(countsLine);
            if (match?.[1] === undefined) {
                return { atomCount: 0, ok: false, error: 'Invalid V2000 counts line: missing atom count' };
            }
            totalAtoms += Number.parseInt(match[1], 10);
            parsedAny = true;
        }
    }
    if (!parsedAny) {
        return { atomCount: 0, ok: false, error: 'No valid molecule block found' };
    }
    return { atomCount: totalAtoms, ok: true };
}
/**
 * Count atoms in MOL2 format by looking for @<TRIPOS>ATOM sections.
 */
function parseMol2(data) {
    const lines = data.split('\n');
    let inAtomSection = false;
    let atomCount = 0;
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('@<TRIPOS>ATOM')) {
            inAtomSection = true;
            continue;
        }
        // Any other TRIPOS section ends the atom block.
        if (trimmed.startsWith('@<TRIPOS>')) {
            inAtomSection = false;
            continue;
        }
        if (inAtomSection && trimmed.length > 0 && !trimmed.startsWith('#')) {
            atomCount++;
        }
    }
    if (atomCount === 0) {
        return { atomCount: 0, ok: false, error: 'No @<TRIPOS>ATOM section found in MOL2 data' };
    }
    return { atomCount, ok: true };
}
/**
 * Dispatch to the format-specific lightweight parser.
 * @param format - the declared file format.
 * @param data - raw file content.
 * @returns atom count and validity.
 */
export function parseMolecule(format, data) {
    const trimmed = data.trim();
    if (trimmed === '') {
        return { atomCount: 0, ok: false, error: 'Empty molecular data' };
    }
    switch (format) {
        case 'pdb':
            return parsePdb(data);
        case 'sdf':
        case 'mol':
            return parseMolFormat(data);
        case 'mol2':
            return parseMol2(data);
        default: {
            const exhaustive = format;
            return { atomCount: 0, ok: false, error: `Unsupported format: ${String(exhaustive)}` };
        }
    }
}
//# sourceMappingURL=parser.js.map