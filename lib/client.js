// src/client/index.ts
import { createElement } from "react";

// src/client/MoleculeView.tsx
import { useEffect, useRef, useState } from "react";

// src/client/threeDmol.ts
var CDN_URLS = [
  "https://cdn.jsdelivr.net/npm/3dmol@2.4.2/build/3Dmol-min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/3Dmol/2.4.2/3Dmol-min.js"
];
var loadPromise;
function findLoaded() {
  if (typeof window === "undefined") return void 0;
  const candidates = [
    window["3Dmol"],
    window.$3Dmol,
    window._$3Dmol
  ];
  return candidates.find((m) => m !== void 0 && typeof m.createViewer === "function");
}
function load3Dmol() {
  if (loadPromise !== void 0) return loadPromise;
  loadPromise = (async () => {
    if (typeof window === "undefined") {
      throw new Error("3Dmol.js requires a browser environment");
    }
    const preloaded = findLoaded();
    if (preloaded !== void 0) return preloaded;
    let lastError = void 0;
    for (const url of CDN_URLS) {
      try {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = url;
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`failed to load ${url}`));
          document.head.appendChild(script);
        });
        const loaded = findLoaded();
        if (loaded !== void 0) return loaded;
        lastError = new Error(`${url} loaded but no usable global namespace (3Dmol / $3Dmol / _$3Dmol) with createViewer was found`);
      } catch (error) {
        lastError = error;
      }
    }
    throw new Error(`3Dmol.js could not be loaded from any CDN (${CDN_URLS.join(", ")}): ${lastError instanceof Error ? lastError.message : String(lastError)}`);
  })();
  return loadPromise;
}

// src/client/MoleculeView.tsx
var STYLE_OPTIONS = [
  { value: "stick", label: "Stick" },
  { value: "line", label: "Line" },
  { value: "sphere", label: "Sphere" },
  { value: "cartoon", label: "Cartoon" }
];
function colorSpec(mode) {
  if (mode.kind === "spectrum") return { color: "spectrum" };
  if (mode.kind === "custom") return { color: mode.color };
  return {};
}
function reprSpec(style, mode) {
  const c = colorSpec(mode);
  switch (style) {
    case "stick":
      return { stick: c };
    case "line":
      return { line: c };
    case "sphere":
      return { sphere: { ...c, scale: 0.3 } };
    case "cartoon":
      return { cartoon: c };
    default:
      return { stick: c };
  }
}
function isHetero(atom) {
  return atom !== null && typeof atom === "object" && atom.hetflag === true;
}
function applyStyle(viewer, style, mode) {
  if (style === "cartoon") {
    viewer.setStyle({}, { cartoon: colorSpec(mode) });
    viewer.setStyle({ predicate: isHetero }, { stick: colorSpec(mode) });
  } else {
    viewer.setStyle({}, reprSpec(style, mode));
  }
}
var BG_PRESETS = ["#ffffff", "#f0f0f5", "#808080", "#1a1a2e", "#000000"];
var DEFAULT_BG = "#1a1a2e";
var S = {
  viewer: { display: "flex", flexDirection: "column", width: "100%", border: "1px solid #383856", borderRadius: "8px", overflow: "hidden", background: "#16213e" },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "#16213e", borderBottom: "1px solid #383856", gap: "8px" },
  toolbar: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "6px 12px", padding: "6px 12px", background: "#131a30", borderBottom: "1px solid #383856" },
  titleRow: { display: "flex", alignItems: "center", minWidth: 0 },
  title: { fontSize: "13px", fontWeight: 600, color: "#e0e0e0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  meta: { fontSize: "11px", color: "#8888aa", marginLeft: "8px", flexShrink: 0 },
  controls: { display: "flex", gap: "4px", flexShrink: 0 },
  btn: { padding: "3px 8px", fontSize: "11px", border: "1px solid #444466", borderRadius: "4px", background: "transparent", color: "#8888aa", cursor: "pointer" },
  btnActive: { background: "#4D6BFE", color: "#ffffff", borderColor: "#4D6BFE" },
  group: { display: "flex", alignItems: "center", gap: "5px" },
  groupLabel: { fontSize: "11px", color: "#8888aa", userSelect: "none" },
  swatch: { width: "18px", height: "18px", borderRadius: "4px", border: "2px solid transparent", cursor: "pointer", padding: 0 },
  swatchActive: { borderColor: "#4D6BFE" },
  colorInput: { width: "22px", height: "20px", padding: 0, border: "1px solid #444466", borderRadius: "4px", background: "transparent", cursor: "pointer" },
  canvas: { width: "100%", height: "400px", position: "relative" },
  msg: { padding: "24px", textAlign: "center", color: "#8888aa", fontSize: "13px" },
  err: { padding: "24px", textAlign: "center", color: "#e74c3c", fontSize: "13px" }
};
function btnStyle(active, disabled) {
  return { ...S.btn, ...active ? S.btnActive : {}, ...disabled ? { opacity: 0.5, cursor: "not-allowed" } : {} };
}
function MoleculeView({ data, format, name, atomCount, initialStyle }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [style, setStyle] = useState(initialStyle);
  const [colorMode, setColorMode] = useState({ kind: "element" });
  const [bg, setBg] = useState(DEFAULT_BG);
  const [status, setStatus] = useState("loading");
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    if (containerRef.current === null) return;
    setStatus("loading");
    let cancelled = false;
    void (async () => {
      try {
        const m = await load3Dmol();
        if (cancelled) return;
        if (viewerRef.current !== null) {
          try {
            viewerRef.current.clear();
          } catch {
          }
        }
        const v = m.createViewer(containerRef.current, { backgroundColor: bg, antialias: true });
        viewerRef.current = v;
        v.addModel(data, format);
        applyStyle(v, style, colorMode);
        v.zoomTo();
        v.render();
        v.zoom(1.2, 800);
        if (!cancelled) setStatus("ready");
      } catch (e) {
        if (!cancelled) {
          setStatus("error");
          setErrorMsg(e instanceof Error ? e.message : String(e));
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [data, format]);
  useEffect(() => {
    const v = viewerRef.current;
    if (v === null || status !== "ready") return;
    try {
      applyStyle(v, style, colorMode);
      v.render();
    } catch {
    }
  }, [style, colorMode, status]);
  useEffect(() => {
    const v = viewerRef.current;
    if (v === null || status !== "ready") return;
    try {
      v.setBackgroundColor(bg);
      v.render();
    } catch {
    }
  }, [bg, status]);
  useEffect(() => {
    return () => {
      const v = viewerRef.current;
      if (v !== null) {
        try {
          v.clear();
        } catch {
        }
      }
      viewerRef.current = null;
    };
  }, []);
  const title = name ?? `Molecule (${format.toUpperCase()})`;
  const meta = atomCount !== void 0 ? `${atomCount} atoms` : format.toUpperCase();
  const busy = status !== "ready";
  return /* @__PURE__ */ React.createElement("div", { style: S.viewer }, /* @__PURE__ */ React.createElement("div", { style: S.header }, /* @__PURE__ */ React.createElement("div", { style: S.titleRow }, /* @__PURE__ */ React.createElement("span", { style: S.title }, title), /* @__PURE__ */ React.createElement("span", { style: S.meta }, meta)), /* @__PURE__ */ React.createElement("div", { style: S.controls }, STYLE_OPTIONS.map((o) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: o.value,
      type: "button",
      style: btnStyle(style === o.value, busy),
      onClick: () => setStyle(o.value),
      disabled: busy
    },
    o.label
  )))), /* @__PURE__ */ React.createElement("div", { style: S.toolbar }, /* @__PURE__ */ React.createElement("div", { style: S.group }, /* @__PURE__ */ React.createElement("span", { style: S.groupLabel }, "\u80CC\u666F"), BG_PRESETS.map((c) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: c,
      type: "button",
      "aria-label": `\u80CC\u666F ${c}`,
      style: { ...S.swatch, background: c, ...bg.toLowerCase() === c ? S.swatchActive : {} },
      onClick: () => setBg(c),
      disabled: busy
    }
  )), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "color",
      value: bg,
      "aria-label": "\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",
      style: S.colorInput,
      onChange: (e) => setBg(e.target.value),
      disabled: busy
    }
  )), /* @__PURE__ */ React.createElement("div", { style: S.group }, /* @__PURE__ */ React.createElement("span", { style: S.groupLabel }, "\u5206\u5B50\u989C\u8272"), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      style: btnStyle(colorMode.kind === "element", busy),
      onClick: () => setColorMode({ kind: "element" }),
      disabled: busy
    },
    "\u5143\u7D20"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      style: btnStyle(colorMode.kind === "spectrum", busy),
      onClick: () => setColorMode({ kind: "spectrum" }),
      disabled: busy
    },
    "\u5F69\u8679"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      style: btnStyle(colorMode.kind === "custom", busy),
      onClick: () => setColorMode({ kind: "custom", color: "#4D6BFE" }),
      disabled: busy
    },
    "\u81EA\u9009"
  ), colorMode.kind === "custom" && /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "color",
      value: colorMode.color,
      "aria-label": "\u81EA\u5B9A\u4E49\u5206\u5B50\u989C\u8272",
      style: S.colorInput,
      onChange: (e) => setColorMode({ kind: "custom", color: e.target.value }),
      disabled: busy
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: { ...S.canvas, background: bg }, ref: containerRef }), status === "loading" && /* @__PURE__ */ React.createElement("div", { style: S.msg }, "Loading 3D viewer\u2026"), status === "error" && /* @__PURE__ */ React.createElement("div", { style: S.err }, "Failed to render: ", errorMsg));
}

// src/client/molecule-definition.ts
function locationOf(context) {
  return context.start?.location ?? context.matches[0]?.location ?? { kind: "unresolved" };
}
function viewData(state) {
  return {
    viewerEventId: state.viewerEventId,
    format: state.format,
    data: state.data,
    ...state.name !== void 0 ? { name: state.name } : {},
    atomCount: state.atomCount,
    style: state.style
  };
}
var moleculeViewDefinition = {
  kind: "molecule-view",
  target: "chat",
  match: (event) => {
    if (event.type === "molecule/view") {
      return { id: String(event.data.viewerEventId), role: "start" };
    }
    return null;
  },
  start: (_context, match) => {
    if (match.event.type !== "molecule/view") {
      throw new Error("molecule-view start requires molecule/view event");
    }
    const data = match.event.data;
    return {
      viewerEventId: data.viewerEventId,
      format: data.format,
      data: data.data,
      ...data.name !== void 0 ? { name: data.name } : {},
      atomCount: 0,
      style: data.style,
      turn: data.turn,
      step: data.step
    };
  },
  // No update handler needed: single-event Context. Return state unchanged.
  update: (context) => context.state,
  publication: () => "immediate",
  buildViewNode: (context) => {
    if (context.state === void 0) return null;
    return {
      key: context.key,
      kind: "molecule-view",
      id: context.id,
      target: "chat",
      anchorSeq: context.start?.event.seq ?? context.matches[0]?.event.seq ?? 0,
      location: locationOf(context),
      visibility: "visible",
      data: viewData(context.state)
    };
  }
};

// src/client/index.ts
var inject = ["conversationEvents", "slots"];
function MoleculeViewNode({ node }) {
  return createElement(MoleculeView, {
    data: node.data.data,
    format: node.data.format,
    ...node.data.name !== void 0 ? { name: node.data.name } : {},
    atomCount: node.data.atomCount,
    initialStyle: node.data.style
  });
}
function apply(ctx) {
  ctx.conversationEvents.register(moleculeViewDefinition);
  ctx.slots.inject("conversation.chat.node", () => ctx.slots.register({
    name: "conversation.chat.node",
    key: "molecule-view",
    locale: "conversation",
    inject: () => ({})
  }, MoleculeViewNode));
}
export {
  apply,
  inject
};
