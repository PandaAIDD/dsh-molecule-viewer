window.__ModuleLoader__.load({ id: '@dsh-plugins/dsh-molecule-viewer', factory: (require) => { var module = { exports: {} }; var exports = module.exports;
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// vendor/3Dmol-min.cjs
var require_Dmol_min = __commonJS({
  "vendor/3Dmol-min.cjs"(exports, module) {
    "use strict";
    !(function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["3Dmol"] = e() : t["3Dmol"] = e();
    })(exports, (() => (() => {
      var __webpack_modules__ = { 620: function() {
        "use strict";
        !(function(t) {
          if (t.TextEncoder && t.TextDecoder) return false;
          function e(t2 = "utf-8") {
            if ("utf-8" !== t2) throw new RangeError(`Failed to construct 'TextEncoder': The encoding label provided ('${t2}') is invalid.`);
          }
          function i(t2 = "utf-8", e2 = { fatal: false }) {
            if ("utf-8" !== t2) throw new RangeError(`Failed to construct 'TextDecoder': The encoding label provided ('${t2}') is invalid.`);
            if (e2.fatal) throw new Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
          }
          Object.defineProperty(e.prototype, "encoding", { value: "utf-8" }), e.prototype.encode = function(t2, e2 = { stream: false }) {
            if (e2.stream) throw new Error("Failed to encode: the 'stream' option is unsupported.");
            let i2 = 0;
            const r = t2.length;
            let s = 0, n = Math.max(32, r + (r >> 1) + 7), a = new Uint8Array(n >> 3 << 3);
            for (; i2 < r; ) {
              let e3 = t2.charCodeAt(i2++);
              if (e3 >= 55296 && e3 <= 56319) {
                if (i2 < r) {
                  const r2 = t2.charCodeAt(i2);
                  56320 == (64512 & r2) && (++i2, e3 = ((1023 & e3) << 10) + (1023 & r2) + 65536);
                }
                if (e3 >= 55296 && e3 <= 56319) continue;
              }
              if (s + 4 > a.length) {
                n += 8, n *= 1 + i2 / t2.length * 2, n = n >> 3 << 3;
                const e4 = new Uint8Array(n);
                e4.set(a), a = e4;
              }
              if (4294967168 & e3) {
                if (4294965248 & e3) if (4294901760 & e3) {
                  if (4292870144 & e3) continue;
                  a[s++] = e3 >> 18 & 7 | 240, a[s++] = e3 >> 12 & 63 | 128, a[s++] = e3 >> 6 & 63 | 128;
                } else a[s++] = e3 >> 12 & 15 | 224, a[s++] = e3 >> 6 & 63 | 128;
                else a[s++] = e3 >> 6 & 31 | 192;
                a[s++] = 63 & e3 | 128;
              } else a[s++] = e3;
            }
            return a.slice(0, s);
          }, Object.defineProperty(i.prototype, "encoding", { value: "utf-8" }), Object.defineProperty(i.prototype, "fatal", { value: false }), Object.defineProperty(i.prototype, "ignoreBOM", { value: false }), i.prototype.decode = function(t2, e2 = { stream: false }) {
            if (e2.stream) throw new Error("Failed to decode: the 'stream' option is unsupported.");
            const i2 = new Uint8Array(t2);
            let r = 0;
            const s = i2.length, n = [];
            for (; r < s; ) {
              const t3 = i2[r++];
              if (0 === t3) break;
              if (128 & t3) {
                if (192 == (224 & t3)) {
                  const e3 = 63 & i2[r++];
                  n.push((31 & t3) << 6 | e3);
                } else if (224 == (240 & t3)) {
                  const e3 = 63 & i2[r++], s2 = 63 & i2[r++];
                  n.push((31 & t3) << 12 | e3 << 6 | s2);
                } else if (240 == (248 & t3)) {
                  let e3 = (7 & t3) << 18 | (63 & i2[r++]) << 12 | (63 & i2[r++]) << 6 | 63 & i2[r++];
                  e3 > 65535 && (e3 -= 65536, n.push(e3 >>> 10 & 1023 | 55296), e3 = 56320 | 1023 & e3), n.push(e3);
                }
              } else n.push(t3);
            }
            return String.fromCharCode.apply(null, n);
          }, t.TextEncoder = e, t.TextDecoder = i;
        })("undefined" != typeof window ? window : "undefined" != typeof self ? self : this);
      }, 546: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { CustomLinear: () => CustomLinear, Gradient: () => Gradient, GradientType: () => GradientType, ROYGB: () => ROYGB, RWB: () => RWB, Sinebow: () => Sinebow, builtinGradients: () => a, getGradient: () => n, normalizeValue: () => s });
        var r = i(222);
        class GradientType {
        }
        function s(t2, e2, i2) {
          return e2 >= t2 ? (i2 < t2 && (i2 = t2), i2 > e2 && (i2 = e2), { lo: t2, hi: e2, val: i2 }) : (i2 > t2 && (i2 = t2), i2 < e2 && (i2 = e2), { lo: e2, hi: t2, val: i2 = t2 - i2 + e2 });
        }
        function n(t2) {
          if (t2 instanceof GradientType) return t2;
          if (void 0 !== t2.gradient && a[t2.gradient]) {
            let e2 = void 0 === t2.min ? -1 : t2.min, i2 = void 0 === t2.max ? 1 : t2.max;
            return void 0 === t2.mid ? void 0 === t2.colors ? new a[t2.gradient](e2, i2) : new a[t2.gradient](e2, i2, t2.colors) : new a[t2.gradient](e2, i2, t2.mid);
          }
          if ("string" == typeof t2.gradient && t2.gradient.startsWith("linear_")) {
            let e2 = t2.gradient.split("_");
            e2.shift();
            let i2 = void 0 === t2.min ? -1 : t2.min, r2 = void 0 === t2.max ? 1 : t2.max;
            return new CustomLinear(i2, r2, e2);
          }
          return t2;
        }
        class RWB extends GradientType {
          constructor(t2, e2, i2) {
            super(), this.gradient = "RWB", this.mult = 1, this.mid = i2, this.min = t2, this.max = e2, void 0 === e2 && Array.isArray(t2) && t2.length >= 2 ? (this.max = t2[1], this.min = t2[0]) : t2 && e2 && !Array.isArray(t2) && (this.min = t2, this.max = e2);
          }
          range() {
            return void 0 !== this.min && void 0 !== this.max ? [this.min, this.max] : null;
          }
          valueToHex(t2, e2) {
            var i2, r2;
            if (t2 = this.mult * t2, e2 ? (i2 = e2[0], r2 = e2[1]) : (i2 = this.min, r2 = this.max), void 0 === t2) return 16777215;
            var n2 = s(i2, r2, t2);
            i2 = n2.lo;
            var a2, o = ((r2 = n2.hi) + i2) / 2;
            return (t2 = n2.val) < (o = e2 && void 0 !== e2[2] ? e2[2] : void 0 !== this.mid ? this.mid : (i2 + r2) / 2) ? 16711680 + 256 * (a2 = Math.floor(255 * Math.sqrt((t2 - i2) / (o - i2)))) + a2 : t2 > o ? 65536 * (a2 = Math.floor(255 * Math.sqrt(1 - (t2 - o) / (r2 - o)))) + 256 * a2 + 255 : 16777215;
          }
        }
        class ROYGB extends GradientType {
          constructor(t2, e2) {
            super(), this.gradient = "ROYGB", this.mult = 1, this.min = t2, this.max = e2, void 0 === e2 && Array.isArray(t2) && t2.length >= 2 ? (this.max = t2[1], this.min = t2[0]) : t2 && e2 && !Array.isArray(t2) && (this.min = t2, this.max = e2);
          }
          valueToHex(t2, e2) {
            var i2, r2;
            if (t2 = this.mult * t2, e2 ? (i2 = e2[0], r2 = e2[1]) : (i2 = this.min, r2 = this.max), void 0 === t2) return 16777215;
            var n2 = s(i2, r2, t2), a2 = ((i2 = n2.lo) + (r2 = n2.hi)) / 2, o = (i2 + a2) / 2, l = (a2 + r2) / 2;
            return (t2 = n2.val) < o ? 16711680 + 256 * Math.floor(255 * Math.sqrt((t2 - i2) / (o - i2))) + 0 : t2 < a2 ? 65536 * Math.floor(255 * Math.sqrt(1 - (t2 - o) / (a2 - o))) + 65280 + 0 : t2 < l ? 65280 + 1 * Math.floor(255 * Math.sqrt((t2 - a2) / (l - a2))) : 0 + 256 * Math.floor(255 * Math.sqrt(1 - (t2 - l) / (r2 - l))) + 255;
          }
          range() {
            return void 0 !== this.min && void 0 !== this.max ? [this.min, this.max] : null;
          }
        }
        class Sinebow extends GradientType {
          constructor(t2, e2) {
            super(), this.gradient = "Sinebow", this.mult = 1, this.min = t2, this.max = e2, void 0 === e2 && Array.isArray(t2) && t2.length >= 2 && (this.max = t2[1], this.min = t2[0]), e2 < t2 && (this.mult = -1, this.min *= -1, this.max *= -1);
          }
          valueToHex(t2, e2) {
            var i2, r2;
            if (t2 = this.mult * t2, e2 ? (i2 = e2[0], r2 = e2[1]) : (i2 = this.min, r2 = this.max), void 0 === t2) return 16777215;
            var s2 = Gradient.normalizeValue(i2, r2, t2);
            i2 = s2.lo, r2 = s2.hi;
            var n2 = 5 * (((t2 = s2.val) - i2) / (r2 - i2)) / 6 + 0.5, a2 = Math.sin(Math.PI * n2);
            a2 *= 255 * a2;
            var o = Math.sin(Math.PI * (n2 + 1 / 3));
            o *= 255 * o;
            var l = Math.sin(Math.PI * (n2 + 2 / 3));
            return l *= 255 * l, 65536 * Math.floor(a2) + 256 * Math.floor(l) + 1 * Math.floor(o);
          }
          range() {
            return void 0 !== this.min && void 0 !== this.max ? [this.min, this.max] : null;
          }
        }
        class CustomLinear extends GradientType {
          constructor(t2, e2, i2) {
            var s2;
            if (super(), this.gradient = "linear", this.colors = new Array(), Array.isArray(t2) && t2.length >= 2 ? (this.max = t2[1], this.min = t2[0], s2 = e2) : (this.min = t2, this.max = e2, s2 = i2), s2) for (let t3 of s2) this.colors.push(r.CC.color(t3));
            else this.colors.push(r.CC.color(0));
          }
          range() {
            return void 0 !== this.min && void 0 !== this.max ? [this.min, this.max] : null;
          }
          valueToHex(t2, e2) {
            var i2, n2;
            if (e2 ? (i2 = e2[0], n2 = e2[1]) : (i2 = this.min, n2 = this.max), void 0 === t2) return 16777215;
            var a2 = s(i2, n2, t2);
            i2 = a2.lo, n2 = a2.hi, t2 = a2.val;
            let o = this.colors.length, l = (n2 - i2) / o, h = Math.min(Math.floor((t2 - i2) / l), o - 1), c = Math.min(h + 1, o - 1), d = (t2 - i2 - h * l) / l, u = this.colors[h], f = this.colors[c];
            return new r.Color(u.r + d * (f.r - u.r), u.g + d * (f.g - u.g), u.b + d * (f.b - u.b)).getHex();
          }
        }
        const a = { rwb: RWB, RWB, roygb: ROYGB, ROYGB, sinebow: Sinebow, linear: CustomLinear };
        class Gradient extends GradientType {
          valueToHex(t2, e2) {
            return 0;
          }
          range() {
            return null;
          }
        }
        Gradient.RWB = RWB, Gradient.ROYGB = ROYGB, Gradient.Sinebow = Sinebow, Gradient.CustomLinear = CustomLinear, Gradient.builtinGradients = a, Gradient.normalizeValue = s, Gradient.getGradient = n;
      }, 848: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { VolumeData: () => VolumeData });
        var r = i(864), s = i(529), n = i(797), a = i(865), o = i(75);
        class VolumeData {
          constructor(t2, e2, i2) {
            if (this.unit = { x: 1, y: 1, z: 1 }, this.origin = { x: 0, y: 0, z: 0 }, this.size = { x: 0, y: 0, z: 0 }, this.data = new Float32Array([]), this.matrix = null, this.inversematrix = null, this.isbinary = /* @__PURE__ */ new Set(["ccp4", "CCP4"]), this.getCoordinates = function(t3) {
              var e3 = t3 / (this.size.y * this.size.z), i3 = t3 % (this.size.y * this.size.z), r2 = t3 % this.size.z;
              return e3 *= this.unit.x, i3 *= this.unit.y, r2 *= this.unit.z, { x: e3 += this.origin.x, y: i3 += this.origin.y, z: r2 += this.origin.z };
            }, this.vasp = function(t3) {
              var e3 = t3.replace(/^\s+/, "").split(/[\n\r]/), i3 = (0, n.VASP)(t3)[0].length;
              if (0 == i3) return console.warn("No good formating of CHG or CHGCAR file, not atomic information provided in the file."), void (this.data = []);
              var r2, a3 = 1.889725992, o2 = parseFloat(e3[1]);
              r2 = e3[2].replace(/^\s+/, "").split(/\s+/);
              var l2 = new s.Vector3(parseFloat(r2[0]), parseFloat(r2[1]), parseFloat(r2[2])).multiplyScalar(o2 * a3);
              r2 = e3[3].replace(/^\s+/, "").split(/\s+/);
              var h2 = new s.Vector3(parseFloat(r2[0]), parseFloat(r2[1]), parseFloat(r2[2])).multiplyScalar(o2 * a3);
              r2 = e3[4].replace(/^\s+/, "").split(/\s+/);
              var c2 = new s.Vector3(parseFloat(r2[0]), parseFloat(r2[1]), parseFloat(r2[2])).multiplyScalar(o2 * a3), d = l2.x * (h2.y * c2.z - c2.y * h2.z) - h2.x * (l2.y * c2.z - c2.y * l2.z) + c2.x * (l2.y * h2.z - h2.y * l2.z), u = 1 / (d = Math.abs(d) / Math.pow(a3, 3));
              e3.splice(0, 8 + i3 + 1);
              var f = e3[0].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "), p = Math.abs(parseFloat(f[0])), g = Math.abs(parseFloat(f[1])), m = Math.abs(parseFloat(f[2])), v = this.origin = new s.Vector3(0, 0, 0);
              this.size = { x: p, y: g, z: m }, this.unit = new s.Vector3(l2.x, h2.y, c2.z), l2 = l2.multiplyScalar(1 / (a3 * p)), h2 = h2.multiplyScalar(1 / (a3 * g)), c2 = c2.multiplyScalar(1 / (a3 * m)), 0 == l2.y && 0 == l2.z && 0 == h2.x && 0 == h2.z && 0 == c2.x && 0 == c2.y || (this.matrix = new s.Matrix4(l2.x, h2.x, c2.x, 0, l2.y, h2.y, c2.y, 0, l2.z, h2.z, c2.z, 0, 0, 0, 0, 1), this.matrix = this.matrix.multiplyMatrices(this.matrix, new s.Matrix4().makeTranslation(v.x, v.y, v.z)), this.origin = new s.Vector3(0, 0, 0), this.unit = new s.Vector3(1, 1, 1)), e3.splice(0, 1);
              var _ = e3.join(" "), y = (_ = _.replace(/^\s+/, "")).split(/[\s\r]+/);
              y.splice(p * g * m + 1);
              for (var b = Float32Array.from(y, parseFloat), x = 0; x < b.length; x++) b[x] = b[x] * u * 0.036749309;
              this.data = b;
            }, this.dx = function(t3) {
              var e3, i3 = t3.split(/[\n\r]+/), r2 = /gridpositions\s+counts\s+(\d+)\s+(\d+)\s+(\d+)/, n2 = /^origin\s+(\S+)\s+(\S+)\s+(\S+)/, a3 = /^delta\s+(\S+)\s+(\S+)\s+(\S+)/, o2 = /data follows/, l2 = 0;
              for (l2 = 0; l2 < i3.length; l2++) {
                var h2 = i3[l2];
                if (e3 = r2.exec(h2)) {
                  var c2 = parseInt(e3[1]), d = parseInt(e3[2]), u = parseInt(e3[3]);
                  this.size = { x: c2, y: d, z: u };
                } else if (e3 = a3.exec(h2)) {
                  var f = parseFloat(e3[1]);
                  if (0 == parseFloat(e3[2]) && 0 == parseFloat(e3[3]) || console.warn("Non-orthogonal delta matrix not currently supported in dx format"), h2 = i3[l2 += 1], null == (e3 = a3.exec(h2))) return void console.error("Parse error in dx delta matrix");
                  var p = parseFloat(e3[2]);
                  if (0 == parseFloat(e3[1]) && 0 == parseFloat(e3[3]) || console.warn("Non-orthogonal delta matrix not currently supported in dx format"), h2 = i3[l2 += 1], null == (e3 = a3.exec(h2))) return void console.error("Parse error in dx delta matrix");
                  var g = parseFloat(e3[3]);
                  0 == parseFloat(e3[1]) && 0 == parseFloat(e3[2]) || console.warn("Non-orthogonal delta matrix not currently supported in dx format"), this.unit = new s.Vector3(f, p, g);
                } else if (e3 = n2.exec(h2)) {
                  var m = parseFloat(e3[1]), v = parseFloat(e3[2]), _ = parseFloat(e3[3]);
                  this.origin = new s.Vector3(m, v, _);
                } else if (e3 = o2.exec(h2)) break;
              }
              if (l2 += 1, this.size && this.origin && this.unit && this.size) {
                var y = i3.splice(l2).join(" ").split(/[\s\r]+/);
                this.data = Float32Array.from(y, parseFloat);
              } else console.error("Error parsing dx format");
            }, e2 = e2.toLowerCase(), /\.gz$/.test(e2)) {
              e2 = e2.replace(/\.gz$/, "");
              try {
                this[e2] && this.isbinary.has(e2) ? ("string" == typeof t2 && (t2 = (0, r.base64ToArray)(t2)), t2 = (0, o.inflate)(t2)) : t2 = new TextDecoder("utf-8").decode((0, o.inflate)(t2));
              } catch (t3) {
                console.error(t3);
              }
            }
            if (this[e2] && (this.isbinary.has(e2) && "string" == typeof t2 && (t2 = (0, r.base64ToArray)(t2)), this[e2](t2)), i2) {
              if (i2.negate) for (let t3 = 0, e3 = this.data.length; t3 < e3; t3++) this.data[t3] = -this.data[t3];
              if (i2.normalize) {
                var a2 = 0;
                for (let t3 = 0, e3 = this.data.length; t3 < e3; t3++) a2 += this.data[t3];
                var l = a2 / this.data.length;
                a2 = 0;
                for (let t3 = 0, e3 = this.data.length; t3 < e3; t3++) {
                  var h = this.data[t3] - l;
                  a2 += h * h;
                }
                var c = a2 / this.data.length;
                for (let t3 = 0, e3 = this.data.length; t3 < e3; t3++) this.data[t3] = (this.data[t3] - l) / c;
              }
            }
          }
          getIndex(t2, e2, i2) {
            if (this.matrix) {
              null == this.inversematrix && (this.inversematrix = new s.Matrix4().getInverse(this.matrix));
              var r2 = new s.Vector3(t2, e2, i2);
              t2 = (r2 = r2.applyMatrix4(this.inversematrix)).x, e2 = r2.y, i2 = r2.z;
            } else t2 -= this.origin.x, e2 -= this.origin.y, i2 -= this.origin.z, t2 /= this.unit.x, e2 /= this.unit.y, i2 /= this.unit.z;
            return t2 = Math.round(t2), e2 = Math.round(e2), i2 = Math.round(i2), t2 < 0 || t2 >= this.size.x || e2 < 0 || e2 >= this.size.y || i2 < 0 || i2 >= this.size.z ? -1 : t2 * this.size.y * this.size.z + e2 * this.size.z + i2;
          }
          getVal(t2, e2, i2) {
            let r2 = this.getIndex(t2, e2, i2);
            return r2 < 0 ? 0 : this.data[r2];
          }
          cube(t2) {
            var e2 = t2.split(/\r?\n/);
            if (!(e2.length < 6)) {
              var i2 = (0, a.CUBE)(t2, {}).modelData[0].cryst, r2 = e2[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "), s2 = parseFloat(r2[0]), n2 = Math.abs(s2);
              this.origin = i2.origin, this.size = i2.size, this.unit = i2.unit, this.matrix = i2.matrix4;
              var o2 = 6;
              s2 < 0 && o2++;
              var l = e2.splice(n2 + o2).join(" "), h = (l = l.replace(/^\s+/, "")).split(/[\s\r]+/);
              this.data = Float32Array.from(h, parseFloat);
            }
          }
          ccp4(t2) {
            var e2 = {};
            t2 = new Int8Array(t2);
            var i2 = new Int32Array(t2.buffer, 0, 56), r2 = new Float32Array(t2.buffer, 0, 56), n2 = new DataView(t2.buffer);
            if (e2.MAP = String.fromCharCode(n2.getUint8(208), n2.getUint8(209), n2.getUint8(210), n2.getUint8(211)), e2.MACHST = [n2.getUint8(212), n2.getUint8(213)], 17 === e2.MACHST[0] && 17 === e2.MACHST[1]) for (var a2 = t2.byteLength, o2 = 0; o2 < a2; o2 += 4) n2.setFloat32(o2, n2.getFloat32(o2), true);
            e2.NX = i2[0], e2.NY = i2[1], e2.NZ = i2[2], e2.MODE = i2[3], e2.NXSTART = i2[4], e2.NYSTART = i2[5], e2.NZSTART = i2[6], e2.MX = i2[7], e2.MY = i2[8], e2.MZ = i2[9], e2.xlen = r2[10], e2.ylen = r2[11], e2.zlen = r2[12], e2.alpha = r2[13], e2.beta = r2[14], e2.gamma = r2[15], e2.MAPC = i2[16], e2.MAPR = i2[17], e2.MAPS = i2[18], e2.DMIN = r2[19], e2.DMAX = r2[20], e2.DMEAN = r2[21], e2.ISPG = i2[22], e2.NSYMBT = i2[23], e2.LSKFLG = i2[24], e2.originX = r2[49], e2.originY = r2[50], e2.originZ = r2[51], e2.ARMS = r2[54];
            var l = e2, h = [l.xlen, 0, 0], c = [l.ylen * Math.cos(Math.PI / 180 * l.gamma), l.ylen * Math.sin(Math.PI / 180 * l.gamma), 0], d = [l.zlen * Math.cos(Math.PI / 180 * l.beta), l.zlen * (Math.cos(Math.PI / 180 * l.alpha) - Math.cos(Math.PI / 180 * l.gamma) * Math.cos(Math.PI / 180 * l.beta)) / Math.sin(Math.PI / 180 * l.gamma), 0];
            d[2] = Math.sqrt(l.zlen * l.zlen * Math.sin(Math.PI / 180 * l.beta) * Math.sin(Math.PI / 180 * l.beta) - d[1] * d[1]);
            var u = [0, h, c, d], f = [0, l.MX, l.MY, l.MZ], p = [0, l.MAPC, l.MAPR, l.MAPS];
            this.matrix = new s.Matrix4(), this.matrix.set(u[p[1]][0] / f[p[1]], u[p[2]][0] / f[p[2]], u[p[3]][0] / f[p[3]], 0, u[p[1]][1] / f[p[1]], u[p[2]][1] / f[p[2]], u[p[3]][1] / f[p[3]], 0, u[p[1]][2] / f[p[1]], u[p[2]][2] / f[p[2]], u[p[3]][2] / f[p[3]], 0, 0, 0, 0, 1), this.matrix = this.matrix.multiplyMatrices(this.matrix, new s.Matrix4().makeTranslation(l.NXSTART + l.originX, l.NYSTART + l.originY, l.NZSTART + l.originZ)), this.origin = new s.Vector3(0, 0, 0), this.unit = new s.Vector3(1, 1, 1), this.size = { x: e2.NX, y: e2.NY, z: e2.NZ }, this.dimensionorder = [e2.MAPC, e2.MAPR, e2.MAPS];
            var g = new Float32Array(t2.buffer, 1024 + e2.NSYMBT), m = e2.NX, v = e2.NY, _ = e2.NZ;
            this.data = new Float32Array(m * v * _);
            for (let t3 = 0; t3 < m; t3++) for (let e3 = 0; e3 < v; e3++) for (let i3 = 0; i3 < _; i3++) this.data[(t3 * v + e3) * _ + i3] = g[(i3 * v + e3) * m + t3];
          }
        }
      }, 638: (t, e, i) => {
        "use strict";
        var r;
        i.r(e), i.d(e, { BackSide: () => n, Camera: () => Camera, ClampToEdgeWrapping: () => c, Coloring: () => r, Cylinder: () => M.Cylinder, DoubleSide: () => a, EventDispatcher: () => EventDispatcher, FloatType: () => g, Fog: () => Fog, FrontSide: () => s, Geometry: () => Geometry, GeometryGroup: () => GeometryGroup, GeometryIDCount: () => A, ImposterMaterial: () => ImposterMaterial, InstancedMaterial: () => InstancedMaterial, Light: () => Light, Line: () => Line, LineBasicMaterial: () => LineBasicMaterial, LineStyle: () => N, LinearFilter: () => d, LinearMipMapLinearFilter: () => f, Material: () => Material, MaterialIdCount: () => x, Matrix3: () => l.Matrix3, Matrix4: () => l.Matrix4, Mesh: () => Mesh, MeshDoubleLambertMaterial: () => MeshDoubleLambertMaterial, MeshLambertMaterial: () => MeshLambertMaterial, MeshOutlineMaterial: () => MeshOutlineMaterial, NearestFilter: () => u, Object3D: () => Object3D, Object3DIDCount: () => C, Projector: () => Projector, Quaternion: () => l.Quaternion, R32Format: () => _, RFormat: () => v, RGBAFormat: () => m, Ray: () => l.Ray, Raycaster: () => Raycaster, Renderer: () => Renderer, Scene: () => Scene, ShaderLib: () => ct, ShaderUtils: () => ut, Shading: () => o, Sphere: () => M.Sphere, SphereImposterMaterial: () => SphereImposterMaterial, SphereImposterOutlineMaterial: () => SphereImposterOutlineMaterial, Sprite: () => Sprite, SpriteAlignment: () => h, SpriteMaterial: () => SpriteMaterial, SpritePlugin: () => SpritePlugin, StickImposterMaterial: () => StickImposterMaterial, StickImposterOutlineMaterial: () => StickImposterOutlineMaterial, Texture: () => Texture, TextureIdCount: () => B, TextureOperations: () => y, Triangle: () => M.Triangle, UVMapping: () => UVMapping, UnsignedByteType: () => p, Vector2: () => l.Vector2, Vector3: () => l.Vector3, VolumetricMaterial: () => VolumetricMaterial, basic: () => V, clamp: () => l.clamp, clone: () => dt, conversionMatrix3: () => l.conversionMatrix3, degToRad: () => l.degToRad, instanced: () => H, intersectObject: () => U, lambert: () => q, lambertdouble: () => Z, outline: () => K, screen: () => Q, screenaa: () => $, sphereimposter: () => tt, sphereimposteroutline: () => it, sprite: () => rt, stickimposter: () => at, stickimposteroutline: () => ot, volumetric: () => ht }), (function(t2) {
          t2[t2.NoColors = 0] = "NoColors", t2[t2.FaceColors = 1] = "FaceColors", t2[t2.VertexColors = 2] = "VertexColors";
        })(r || (r = {}));
        const s = 0, n = 1, a = 2;
        var o;
        !(function(t2) {
          t2[t2.NoShading = 0] = "NoShading", t2[t2.FlatShading = 1] = "FlatShading", t2[t2.SmoothShading = 2] = "SmoothShading";
        })(o || (o = {}));
        var l = i(529);
        const h = { topLeft: new l.Vector2(1, -1), topCenter: new l.Vector2(0, -1), topRight: new l.Vector2(-1, -1), centerLeft: new l.Vector2(1, 0), center: new l.Vector2(0, 0), centerRight: new l.Vector2(-1, 0), bottomLeft: new l.Vector2(1, 1), bottomCenter: new l.Vector2(0, 1), bottomRight: new l.Vector2(-1, 1) }, c = 1001, d = 1006, u = 1007, f = 1008, p = 1009, g = 1010, m = 1021, v = 1022, _ = 1023;
        var y;
        !(function(t2) {
          t2[t2.MultiplyOperation = 0] = "MultiplyOperation", t2[t2.MixOperation = 1] = "MixOperation", t2[t2.AddOperation = 2] = "AddOperation";
        })(y || (y = {}));
        class EventDispatcher {
          constructor() {
            this.listeners = {};
          }
          dispatchEvent(t2) {
            var e2 = this.listeners[t2.type];
            if (void 0 !== e2) {
              t2.target = this;
              for (var i2 = 0, r2 = e2.length; i2 < r2; i2++) e2[i2].call(this, t2);
            }
          }
          removeEventListener(t2, e2) {
            if (e2) {
              var i2 = this.listeners[t2].indexOf(e2);
              -1 !== i2 && this.listeners[t2].splice(i2, 1);
            } else this.listeners[t2] = [];
          }
          addEventListener(t2, e2) {
            void 0 === this.listeners[t2] && (this.listeners[t2] = []), -1 === this.listeners[t2].indexOf(e2) && this.listeners[t2].push(e2);
          }
        }
        var b = i(222);
        class Material extends EventDispatcher {
          constructor() {
            super(...arguments), this.id = x++, this.name = "", this.side = s, this.opacity = 1, this.transparent = false, this.depthTest = true, this.depthWrite = true, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.visible = true, this.needsUpdate = true, this.outline = false, this.wireframe = false, this.shaded = false;
          }
          setValues(t2 = {}) {
            if (void 0 !== t2) for (var e2 in t2) {
              var i2 = t2[e2];
              if (void 0 !== i2) {
                if (e2 in this) {
                  var r2 = this[e2];
                  r2 instanceof b.Color && i2 instanceof b.Color ? r2.copy(i2) : r2 instanceof b.Color ? r2.set(i2) : r2 instanceof l.Vector3 && i2 instanceof l.Vector3 ? r2.copy(i2) : this[e2] = i2;
                }
              } else console.warn("$3Dmol.Material: '" + e2 + "' parameter is undefined.");
            }
          }
          clone(t2 = new Material()) {
            return t2.name = this.name, t2.side = this.side, t2.opacity = this.opacity, t2.transparent = this.transparent, t2.depthTest = this.depthTest, t2.depthWrite = this.depthWrite, t2.polygonOffset = this.polygonOffset, t2.polygonOffsetFactor = this.polygonOffsetFactor, t2.polygonOffsetUnits = this.polygonOffsetUnits, t2.alphaTest = this.alphaTest, t2.overdraw = this.overdraw, t2.visible = this.visible, t2;
          }
          makeShaded(t2) {
            this.shaded = true, this.uniforms && (this.uniforms.shading = { type: "i", value: t2 }, this.uniforms.vWidth = { type: "f", value: 1 }, this.uniforms.vHeight = { type: "f", value: 1 });
          }
          dispose() {
            this.dispatchEvent({ type: "dispose" });
          }
        }
        let x = 0;
        class LineBasicMaterial extends Material {
          constructor(t2) {
            super(), this.color = new b.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = false, this.fog = true, this.shaderID = "basic", this.setValues(t2);
          }
          clone(t2 = new LineBasicMaterial()) {
            return super.clone.call(this, t2), t2.color.copy(this.color), t2;
          }
        }
        const w = 65535;
        class GeometryGroup {
          constructor(t2 = 0) {
            this.vertexArray = null, this.colorArray = null, this.normalArray = null, this.radiusArray = null, this.faceArray = null, this.lineArray = null, this.atomArray = Array(), this.vertices = 0, this.faceidx = 0, this.lineidx = 0, this.__inittedArrays = false, this.id = t2;
          }
          setColor(t2) {
            var e2 = this.vertexArray, i2 = this.colorArray;
            if (!e2) throw new Error("vertex array not initialized");
            if (!i2) throw new Error("color array not initialized");
            let r2 = b.CC.color(t2);
            for (var s2 = 0; s2 < e2.length; s2 += 3) i2[s2] = r2.r, i2[s2 + 1] = r2.g, i2[s2 + 2] = r2.b;
          }
          setColors(t2) {
            var e2 = this.vertexArray, i2 = this.colorArray;
            if (!e2) throw new Error("vertex array not initialized");
            if (!i2) throw new Error("color array not initialized");
            if (e2.length == i2.length) for (var r2 = 0; r2 < e2.length; r2 += 3) {
              var s2 = t2(e2[r2], e2[r2 + 1], e2[r2 + 2]);
              s2 instanceof b.Color || (s2 = b.CC.color(s2)), i2[r2] = s2.r, i2[r2 + 1] = s2.g, i2[r2 + 2] = s2.b;
            }
            else console.log("Cannot re-color geometry group due to mismatched lengths.");
          }
          getNumVertices() {
            return this.vertices;
          }
          getVertices() {
            return this.vertexArray;
          }
          getCentroid() {
            if (!this.vertexArray) throw new Error("vertex array not initialized");
            for (var t2, e2, i2, r2, s2 = new l.Vector3(), n2 = 0; n2 < this.vertices; ++n2) t2 = 3 * n2, e2 = this.vertexArray[t2], i2 = this.vertexArray[t2 + 1], r2 = this.vertexArray[t2 + 2], s2.x += e2, s2.y += i2, s2.z += r2;
            return s2.divideScalar(this.vertices), s2;
          }
          setNormals() {
            var t2 = this.faceArray, e2 = this.vertexArray, i2 = this.normalArray;
            if (this.vertices && this.faceidx) {
              if (!t2) throw new Error("face array not initialized");
              if (!e2) throw new Error("vertex array not initialized");
              if (!i2) throw new Error("normal array not initialized");
              for (var r2, s2, n2, a2, o2, h2, c2, d2 = 0; d2 < t2.length / 3; ++d2) r2 = 3 * t2[3 * d2], s2 = 3 * t2[3 * d2 + 1], n2 = 3 * t2[3 * d2 + 2], a2 = new l.Vector3(e2[r2], e2[r2 + 1], e2[r2 + 2]), o2 = new l.Vector3(e2[s2], e2[s2 + 1], e2[s2 + 2]), h2 = new l.Vector3(e2[n2], e2[n2 + 1], e2[n2 + 2]), a2.subVectors(a2, o2), h2.subVectors(h2, o2), h2.cross(a2), (c2 = h2).normalize(), i2[r2] += c2.x, i2[s2] += c2.x, i2[n2] += c2.x, i2[r2 + 1] += c2.y, i2[s2 + 1] += c2.y, i2[n2 + 1] += c2.y, i2[r2 + 2] += c2.z, i2[s2 + 2] += c2.z, i2[n2 + 2] += c2.z;
            }
          }
          setLineIndices() {
            if (this.faceidx && (!this.lineArray || this.lineArray.length != 2 * this.faceidx || this.lineidx != 2 * this.faceidx)) {
              var t2 = this.faceArray, e2 = this.lineArray = new Uint16Array(2 * this.faceidx);
              if (this.lineidx = 2 * this.faceidx, !t2) throw new Error("face array not initialized");
              for (var i2 = 0; i2 < this.faceidx / 3; ++i2) {
                var r2 = 3 * i2, s2 = 2 * r2, n2 = t2[r2], a2 = t2[r2 + 1], o2 = t2[r2 + 2];
                e2[s2] = n2, e2[s2 + 1] = a2, e2[s2 + 2] = n2, e2[s2 + 3] = o2, e2[s2 + 4] = a2, e2[s2 + 5] = o2;
              }
            }
          }
          vrml(t2, e2) {
            var i2, r2, s2, n2, a2, o2, l2, h2, c2, d2, u2, f2, p2, g2, m2, v2, _2, y2, b2 = "";
            if (b2 += t2 + "Shape {\n" + t2 + " appearance Appearance {\n" + t2 + "  material Material {\n" + t2 + "   diffuseColor " + (null === (i2 = null == e2 ? void 0 : e2.color) || void 0 === i2 ? void 0 : i2.r) + " " + (null === (r2 = null == e2 ? void 0 : e2.color) || void 0 === r2 ? void 0 : r2.g) + " " + (null === (s2 = null == e2 ? void 0 : e2.color) || void 0 === s2 ? void 0 : s2.b) + "\n", e2.wireframe && this.colorArray) {
              let e3 = this.colorArray;
              b2 += t2 + "    emissiveColor " + e3[0] + " " + e3[1] + " " + e3[2] + "\n";
            }
            (null == e2 ? void 0 : e2.transparent) && (b2 += t2 + "   transparency " + (1 - e2.opacity) + "\n"), b2 += t2 + "  }\n", b2 += t2 + " }\n";
            var x2 = t2;
            if (t2 += " ", e2 instanceof LineBasicMaterial || e2.wireframe) {
              let i3, r3, s3;
              b2 += t2 + "geometry IndexedLineSet {\n" + t2 + " colorPerVertex TRUE\n" + t2 + " coord Coordinate {\n" + t2 + "  point [\n";
              for (let e3 = 0; e3 < this.vertices; ++e3) {
                let l3 = 3 * e3;
                i3 = null === (n2 = this.vertexArray) || void 0 === n2 ? void 0 : n2[l3], r3 = null === (a2 = this.vertexArray) || void 0 === a2 ? void 0 : a2[l3 + 1], s3 = null === (o2 = this.vertexArray) || void 0 === o2 ? void 0 : o2[l3 + 2], b2 += t2 + "   " + i3 + " " + r3 + " " + s3 + ",\n";
              }
              if (b2 += t2 + "  ]\n", b2 += t2 + " }\n", this.colorArray && !e2.wireframe) {
                b2 += t2 + " color Color {\n" + t2 + "  color [\n";
                for (let e3 = 0; e3 < this.vertices; ++e3) {
                  let n3 = 3 * e3;
                  i3 = this.colorArray[n3], r3 = this.colorArray[n3 + 1], s3 = this.colorArray[n3 + 2], b2 += t2 + "   " + i3 + " " + r3 + " " + s3 + ",\n";
                }
                b2 += t2 + "  ]\n", b2 += t2 + " }\n";
              }
              if (b2 += t2 + " coordIndex [\n", e2.wireframe && this.faceArray) for (let e3 = 0; e3 < this.faceidx; e3 += 3) i3 = null === (l2 = this.faceArray) || void 0 === l2 ? void 0 : l2[e3], r3 = null === (h2 = this.faceArray) || void 0 === h2 ? void 0 : h2[e3 + 1], s3 = null === (c2 = this.faceArray) || void 0 === c2 ? void 0 : c2[e3 + 2], b2 += t2 + "  " + i3 + ", " + r3 + ", " + s3 + ", -1,\n";
              else for (let e3 = 0; e3 < this.vertices - 1; e3 += 2) b2 += t2 + "  " + e3 + ", " + (e3 + 1) + ", -1,\n";
              b2 += t2 + " ]\n", b2 += t2 + "}\n";
            } else {
              let e3, i3, r3;
              b2 += t2 + "geometry IndexedFaceSet {\n" + t2 + " colorPerVertex TRUE\n" + t2 + " normalPerVertex TRUE\n" + t2 + " solid FALSE\n", b2 += t2 + " coord Coordinate {\n" + t2 + "  point [\n";
              for (let s3 = 0; s3 < this.vertices; ++s3) {
                let n3 = 3 * s3;
                e3 = null === (d2 = this.vertexArray) || void 0 === d2 ? void 0 : d2[n3], i3 = null === (u2 = this.vertexArray) || void 0 === u2 ? void 0 : u2[n3 + 1], r3 = null === (f2 = this.vertexArray) || void 0 === f2 ? void 0 : f2[n3 + 2], b2 += t2 + "   " + e3 + " " + i3 + " " + r3 + ",\n";
              }
              b2 += t2 + "  ]\n", b2 += t2 + " }\n", b2 += t2 + " normal Normal {\n" + t2 + "  vector [\n";
              for (let s3 = 0; s3 < this.vertices; ++s3) {
                let n3 = 3 * s3;
                e3 = null === (p2 = this.normalArray) || void 0 === p2 ? void 0 : p2[n3], i3 = null === (g2 = this.normalArray) || void 0 === g2 ? void 0 : g2[n3 + 1], r3 = null === (m2 = this.normalArray) || void 0 === m2 ? void 0 : m2[n3 + 2], b2 += t2 + "   " + e3 + " " + i3 + " " + r3 + ",\n";
              }
              if (b2 += t2 + "  ]\n", b2 += t2 + " }\n", this.colorArray) {
                b2 += t2 + " color Color {\n" + t2 + "  color [\n";
                for (let s3 = 0; s3 < this.vertices; ++s3) {
                  let n3 = 3 * s3;
                  e3 = this.colorArray[n3], i3 = this.colorArray[n3 + 1], r3 = this.colorArray[n3 + 2], b2 += t2 + "   " + e3 + " " + i3 + " " + r3 + ",\n";
                }
                b2 += t2 + "  ]\n", b2 += t2 + " }\n";
              }
              b2 += t2 + " coordIndex [\n";
              for (let s3 = 0; s3 < this.faceidx; s3 += 3) e3 = null === (v2 = this.faceArray) || void 0 === v2 ? void 0 : v2[s3], i3 = null === (_2 = this.faceArray) || void 0 === _2 ? void 0 : _2[s3 + 1], r3 = null === (y2 = this.faceArray) || void 0 === y2 ? void 0 : y2[s3 + 2], b2 += t2 + "  " + e3 + ", " + i3 + ", " + r3 + ", -1,\n";
              b2 += t2 + " ]\n", b2 += t2 + "}\n";
            }
            return b2 += x2 + "}";
          }
          truncateArrayBuffers(t2 = true, e2 = false) {
            var i2 = this.vertexArray, r2 = this.colorArray, s2 = this.normalArray, n2 = this.faceArray, a2 = this.lineArray, o2 = this.radiusArray;
            this.vertexArray = (null == i2 ? void 0 : i2.subarray(0, 3 * this.vertices)) || null, this.colorArray = (null == r2 ? void 0 : r2.subarray(0, 3 * this.vertices)) || null, t2 ? (this.normalArray = (null == s2 ? void 0 : s2.subarray(0, 3 * this.vertices)) || null, this.faceArray = (null == n2 ? void 0 : n2.subarray(0, this.faceidx)) || null, this.lineidx > 0 ? this.lineArray = (null == a2 ? void 0 : a2.subarray(0, this.lineidx)) || null : this.lineArray = new Uint16Array(0)) : (this.normalArray = new Float32Array(0), this.faceArray = new Uint16Array(0), this.lineArray = new Uint16Array(0)), o2 && (this.radiusArray = o2.subarray(0, this.vertices)), e2 && (this.normalArray && (this.normalArray = new Float32Array(this.normalArray)), this.faceArray && (this.faceArray = new Uint16Array(this.faceArray)), this.lineArray && (this.lineArray = new Uint16Array(this.lineArray)), this.vertexArray && (this.vertexArray = new Float32Array(this.vertexArray)), this.colorArray && (this.colorArray = new Float32Array(this.colorArray)), this.radiusArray && (this.radiusArray = new Float32Array(this.radiusArray))), this.__inittedArrays = true;
          }
        }
        class Geometry extends EventDispatcher {
          constructor(t2 = false, e2 = false, i2 = false) {
            super(), this.name = "", this.hasTangents = false, this.dynamic = true, this.verticesNeedUpdate = false, this.elementsNeedUpdate = false, this.normalsNeedUpdate = false, this.colorsNeedUpdate = false, this.buffersNeedUpdate = false, this.imposter = false, this.instanced = false, this.geometryGroups = [], this.groups = 0, this.id = A++, this.mesh = t2, this.radii = e2, this.offset = i2;
          }
          updateGeoGroup(t2 = 0) {
            var e2, i2 = this.groups > 0 ? this.geometryGroups[this.groups - 1] : null;
            return (!i2 || i2.vertices + t2 > ((null === (e2 = null == i2 ? void 0 : i2.vertexArray) || void 0 === e2 ? void 0 : e2.length) || 0) / 3) && (i2 = this.addGeoGroup()), i2;
          }
          vrml(t2, e2) {
            for (var i2 = "", r2 = this.geometryGroups.length, s2 = 0; s2 < r2; s2++) {
              i2 += this.geometryGroups[s2].vrml(t2, e2) + ",\n";
            }
            return i2;
          }
          addGeoGroup() {
            var t2 = new GeometryGroup(this.geometryGroups.length);
            return this.geometryGroups.push(t2), this.groups = this.geometryGroups.length, t2.vertexArray = new Float32Array(196605), t2.colorArray = new Float32Array(196605), this.mesh && (t2.normalArray = new Float32Array(196605), t2.faceArray = new Uint16Array(393210), t2.lineArray = new Uint16Array(393210)), this.radii && (t2.radiusArray = new Float32Array(w)), t2.useOffset = this.offset, t2;
          }
          setUpNormals(...t2) {
            for (var e2 = 0; e2 < this.groups; e2++) {
              this.geometryGroups[e2].setNormals(...t2);
            }
          }
          setColors(...t2) {
            for (var e2 = this.geometryGroups.length, i2 = 0; i2 < e2; i2++) {
              this.geometryGroups[i2].setColors(...t2);
            }
          }
          setColor(...t2) {
            for (var e2 = this.geometryGroups.length, i2 = 0; i2 < e2; i2++) {
              this.geometryGroups[i2].setColor(...t2);
            }
          }
          setUpWireframe(...t2) {
            for (var e2 = 0; e2 < this.groups; e2++) {
              this.geometryGroups[e2].setLineIndices(...t2);
            }
          }
          initTypedArrays() {
            for (var t2 = 0; t2 < this.groups; t2++) {
              var e2 = this.geometryGroups[t2];
              true !== e2.__inittedArrays && e2.truncateArrayBuffers(this.mesh, false);
            }
          }
          dispose() {
            this.dispatchEvent({ type: "dispose" });
          }
          get vertices() {
            for (var t2 = 0, e2 = 0; e2 < this.groups; e2++) t2 += this.geometryGroups[e2].vertices;
            return t2;
          }
        }
        let A = 0, C = 0;
        class Object3D {
          constructor() {
            this.id = C++, this.name = "", this.children = [], this.position = new l.Vector3(), this.rotation = new l.Vector3(), this.matrix = new l.Matrix4(), this.matrixWorld = new l.Matrix4(), this.quaternion = new l.Quaternion(), this.eulerOrder = "XYZ", this.up = new l.Vector3(0, 1, 0), this.scale = new l.Vector3(1, 1, 1), this.matrixAutoUpdate = true, this.matrixWorldNeedsUpdate = true, this.rotationAutoUpdate = true, this.useQuaternion = false, this.visible = true;
          }
          lookAt(t2) {
            this.matrix.lookAt(t2, this.position, this.up), this.rotationAutoUpdate && (true === this.useQuaternion ? console.error("Unimplemented math operation.") : this.rotation instanceof l.Vector3 && this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder));
          }
          add(t2) {
            if (t2 !== this) {
              t2.parent = this, this.children.push(t2);
              for (var e2 = this; void 0 !== e2.parent; ) e2 = e2.parent;
              void 0 !== e2 && e2 instanceof Scene && e2.__addObject(t2);
            } else console.error("Can't add $3Dmol.Object3D to itself");
          }
          remove(t2) {
            var e2 = this.children.indexOf(t2);
            if (-1 !== e2) {
              t2.parent = void 0, this.children.splice(e2, 1);
              for (var i2 = this; void 0 !== i2.parent; ) i2 = i2.parent;
              void 0 !== i2 && i2 instanceof Scene && i2.__removeObject(t2);
            }
          }
          vrml(t2) {
            t2 || (t2 = " ");
            var e2 = 2 * Math.atan2(this.quaternion.lengthxyz(), this.quaternion.w), i2 = 0, r2 = 0, s2 = 0;
            if (0 != e2) {
              let t3 = Math.sin(e2 / 2);
              i2 = this.quaternion.x / t3, r2 = this.quaternion.y / t3, s2 = this.quaternion.z / t3;
            }
            var n2 = t2 + "Transform {\n" + t2 + " center " + this.position.x + " " + this.position.y + " " + this.position.z + "\n" + t2 + " rotation " + i2 + " " + r2 + " " + s2 + " " + e2 + "\n" + t2 + " children [\n";
            this.geometry && (n2 += this.geometry.vrml(t2, this.material));
            for (var a2 = 0; a2 < this.children.length; a2++) n2 += this.children[a2].vrml(t2 + " ") + ",\n";
            return n2 += " ]\n", n2 += "}";
          }
          updateMatrix() {
            this.matrix.setPosition(this.position), false === this.useQuaternion && this.rotation instanceof l.Vector3 ? this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder) : this.matrix.setRotationFromQuaternion(this.quaternion), 1 === this.scale.x && 1 === this.scale.y && 1 === this.scale.z || this.matrix.scale(this.scale), this.matrixWorldNeedsUpdate = true;
          }
          updateMatrixWorld(t2) {
            true === this.matrixAutoUpdate && this.updateMatrix(), true !== this.matrixWorldNeedsUpdate && true !== t2 || (void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false;
            for (var e2 = 0; e2 < this.children.length; e2++) this.children[e2].updateMatrixWorld(true);
          }
          clone(t2) {
            void 0 === t2 && (t2 = new Object3D()), t2.name = this.name, t2.up.copy(this.up), t2.position.copy(this.position), t2.rotation instanceof l.Vector3 && this.rotation instanceof l.Vector3 ? t2.rotation.copy(this.rotation) : t2.rotation = this.rotation, t2.eulerOrder = this.eulerOrder, t2.scale.copy(this.scale), t2.rotationAutoUpdate = this.rotationAutoUpdate, t2.matrix.copy(this.matrix), t2.matrixWorld.copy(this.matrixWorld), t2.quaternion.copy(this.quaternion), t2.matrixAutoUpdate = this.matrixAutoUpdate, t2.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, t2.useQuaternion = this.useQuaternion, t2.visible = this.visible;
            for (var e2 = 0; e2 < this.children.length; e2++) {
              var i2 = this.children[e2];
              t2.add(i2.clone());
            }
            return t2;
          }
          setVisible(t2) {
            this.visible = t2;
            for (var e2 = 0; e2 < this.children.length; e2++) {
              this.children[e2].setVisible(t2);
            }
          }
        }
        class Scene extends Object3D {
          constructor() {
            super(...arguments), this.fog = null, this.overrideMaterial = null, this.matrixAutoUpdate = false, this.__objects = [], this.__lights = [], this.__objectsAdded = [], this.__objectsRemoved = [];
          }
          __addObject(t2) {
            if (t2 instanceof Light) -1 === this.__lights.indexOf(t2) && this.__lights.push(t2), t2.target && void 0 === t2.target.parent && this.add(t2.target);
            else if (-1 === this.__objects.indexOf(t2)) {
              this.__objects.push(t2), this.__objectsAdded.push(t2);
              var e2 = this.__objectsRemoved.indexOf(t2);
              -1 !== e2 && this.__objectsRemoved.splice(e2, 1);
            }
            for (var i2 = 0; i2 < t2.children.length; i2++) this.__addObject(t2.children[i2]);
          }
          __removeObject(t2) {
            var e2;
            t2 instanceof Light ? -1 !== (e2 = this.__lights.indexOf(t2)) && this.__lights.splice(e2, 1) : -1 !== (e2 = this.__objects.indexOf(t2)) && (this.__objects.splice(e2, 1), this.__objectsRemoved.push(t2), -1 !== this.__objectsAdded.indexOf(t2) && this.__objectsAdded.splice(e2, 1));
            for (var i2 = 0; i2 < t2.children.length; i2++) this.__removeObject(t2.children[i2]);
          }
        }
        class Light extends Object3D {
          constructor(t2, e2 = 1) {
            super(), this.position = new l.Vector3(0, 1, 0), this.target = new Object3D(), this.castShadow = false, this.onlyShadow = false, this.color = new b.Color(t2), this.intensity = e2;
          }
        }
        const S3 = new l.Matrix4();
        class Projector {
          static unprojectVector(t2, e2) {
            return e2.projectionMatrixInverse.getInverse(e2.projectionMatrix), S3.multiplyMatrices(e2.matrixWorld, e2.projectionMatrixInverse), t2.applyProjection(S3);
          }
          static projectVector(t2, e2) {
            return e2.matrixWorldInverse.getInverse(e2.matrixWorld), S3.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), t2.applyProjection(S3);
          }
          projectVector(t2, e2) {
            return Projector.projectVector(t2, e2);
          }
          unprojectVector(t2, e2) {
            return Projector.unprojectVector(t2, e2);
          }
        }
        var M = i(99);
        const z = (t2, e2) => t2.distance - e2.distance, T = new l.Matrix4();
        class Raycaster {
          constructor(t2, e2, i2, r2) {
            this.precision = 1e-4, this.linePrecision = 0.2, this.ray = new l.Ray(t2, e2), this.ray.direction.lengthSq() > 0 && this.ray.direction.normalize(), this.near = r2 || 0, this.far = i2 || 1 / 0;
          }
          set(t2, e2) {
            this.ray.set(t2, e2);
          }
          setFromCamera(t2, e2) {
            e2.ortho ? (this.ray.origin.set(t2.x, t2.y, (e2.near + e2.far) / (e2.near - e2.far)).unproject(e2), this.ray.direction.set(0, 0, -1).transformDirection(e2.matrixWorld)) : (this.ray.origin.setFromMatrixPosition(e2.matrixWorld), this.ray.direction.set(t2.x, t2.y, t2.z), e2.projectionMatrixInverse.getInverse(e2.projectionMatrix), T.multiplyMatrices(e2.matrixWorld, e2.projectionMatrixInverse), this.ray.direction.applyProjection(T), this.ray.direction.sub(this.ray.origin).normalize());
          }
          intersectObjects(t2, e2) {
            for (var i2 = [], r2 = 0, s2 = e2.length; r2 < s2; r2++) U(t2, e2[r2], this, i2);
            return i2.sort(z), i2;
          }
        }
        const E = (t2) => Math.min(Math.max(t2, -1), 1);
        var L = new M.Sphere(), F = new M.Cylinder(), I = new M.Triangle(), O = new l.Vector3(), D = new l.Vector3(), k = new l.Vector3(), R = new l.Vector3(), P = new l.Vector3();
        function U(t2, e2, i2, r2) {
          if (P.getPositionFromMatrix(t2.matrixWorld), void 0 === e2.intersectionShape) return r2;
          var s2, n2, a2, o2, l2, h2, c2, d2, u2, f2, p2, g2, m2, v2, _2 = e2.intersectionShape, y2 = i2.linePrecision, b2 = (y2 *= t2.matrixWorld.getMaxScaleOnAxis()) * y2;
          if (void 0 !== e2.boundingSphere && e2.boundingSphere instanceof M.Sphere && (L.copy(e2.boundingSphere), L.applyMatrix4(t2.matrixWorld), !i2.ray.isIntersectionSphere(L))) return r2;
          for (s2 = 0, n2 = _2.triangle.length; s2 < n2; s2++) if (_2.triangle[s2] instanceof M.Triangle) {
            if (I.copy(_2.triangle[s2]), I.applyMatrix4(t2.matrixWorld), a2 = I.getNormal(), (o2 = i2.ray.direction.dot(a2)) >= 0) continue;
            if (O.subVectors(I.a, i2.ray.origin), (c2 = a2.dot(O) / o2) < 0) continue;
            D.copy(i2.ray.direction).multiplyScalar(c2).add(i2.ray.origin), D.sub(I.a), k.copy(I.b).sub(I.a), R.copy(I.c).sub(I.a);
            var x2 = k.dot(R), w2 = k.lengthSq(), A2 = R.lengthSq();
            if ((g2 = (w2 * D.dot(R) - x2 * D.dot(k)) / (w2 * A2 - x2 * x2)) < 0 || g2 > 1) continue;
            if ((p2 = (D.dot(k) - g2 * x2) / w2) < 0 || p2 > 1 || p2 + g2 > 1) continue;
            r2.push({ clickable: e2, distance: c2 });
          }
          for (s2 = 0, n2 = _2.cylinder.length; s2 < n2; s2++) if (_2.cylinder[s2] instanceof M.Cylinder) {
            if (F.copy(_2.cylinder[s2]), F.applyMatrix4(t2.matrixWorld), O.subVectors(F.c1, i2.ray.origin), l2 = O.dot(F.direction), h2 = O.dot(i2.ray.direction), 0 === (u2 = 1 - (o2 = E(i2.ray.direction.dot(F.direction))) * o2)) continue;
            m2 = (o2 * h2 - l2) / u2, v2 = (h2 - o2 * l2) / u2, D.copy(F.direction).multiplyScalar(m2).add(F.c1), k.copy(i2.ray.direction).multiplyScalar(v2).add(i2.ray.origin), d2 = R.subVectors(D, k).lengthSq();
            var C2 = F.radius * F.radius;
            if (d2 <= C2) {
              if ((p2 = o2 * (g2 = c2 = (f2 = (o2 * l2 - h2) * (o2 * l2 - h2) - u2 * (O.lengthSq() - l2 * l2 - C2)) <= 0 ? Math.sqrt(d2) : (h2 - o2 * l2 - Math.sqrt(f2)) / u2) - l2) < 0 || p2 * p2 > F.lengthSq() || g2 < 0) continue;
              r2.push({ clickable: e2, distance: c2 });
            }
          }
          for (s2 = 0, n2 = _2.line.length; s2 < n2; s2 += 2) {
            D.copy(_2.line[s2]), D.applyMatrix4(t2.matrixWorld), k.copy(_2.line[s2 + 1]), k.applyMatrix4(t2.matrixWorld), R.subVectors(k, D);
            var S4 = R.lengthSq();
            R.normalize(), O.subVectors(D, i2.ray.origin);
            var z2 = O.dot(R);
            h2 = O.dot(i2.ray.direction), 0 !== (u2 = 1 - (o2 = E(i2.ray.direction.dot(R))) * o2) && (m2 = (o2 * h2 - z2) / u2, v2 = (h2 - o2 * z2) / u2, D.add(R.multiplyScalar(m2)), k.copy(i2.ray.direction).multiplyScalar(v2).add(i2.ray.origin), (d2 = R.subVectors(k, D).lengthSq()) < b2 && m2 * m2 < S4 && r2.push({ clickable: e2, distance: v2 }));
          }
          for (s2 = 0, n2 = _2.sphere.length; s2 < n2; s2++) if (_2.sphere[s2] instanceof M.Sphere && (L.copy(_2.sphere[s2]), L.applyMatrix4(t2.matrixWorld), i2.ray.isIntersectionSphere(L))) {
            D.subVectors(L.center, i2.ray.origin);
            var T2 = D.dot(i2.ray.direction);
            if (f2 = T2 * T2 - (D.lengthSq() - L.radius * L.radius), T2 < 0) return r2;
            c2 = f2 <= 0 ? T2 : T2 - Math.sqrt(f2), r2.push({ clickable: e2, distance: c2 });
          }
          return r2;
        }
        class UVMapping {
        }
        class Texture extends EventDispatcher {
          constructor(t2, e2) {
            super(), this.id = B++, this.name = "", this.image = t2, this.mapping = new UVMapping(), this.wrapS = c, this.wrapT = c, this.anisotropy = 1, e2 ? (this.format = v, this.type = g, this.premultiplyAlpha = false, this.flipY = false, this.unpackAlignment = 1, this.magFilter = u, this.minFilter = u) : (this.format = m, this.type = p, this.offset = new l.Vector2(0, 0), this.repeat = new l.Vector2(1, 1), this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.magFilter = d, this.minFilter = f), this.needsUpdate = false, this.onUpdate = null;
          }
          clone(t2 = new Texture()) {
            return t2.image = this.image, t2.mapping = this.mapping, t2.wrapS = this.wrapS, t2.wrapT = this.wrapT, t2.magFilter = this.magFilter, t2.minFilter = this.minFilter, t2.anisotropy = this.anisotropy, t2.format = this.format, t2.type = this.type, t2.offset.copy(this.offset), t2.repeat.copy(this.repeat), t2.premultiplyAlpha = this.premultiplyAlpha, t2.flipY = this.flipY, t2.unpackAlignment = this.unpackAlignment, t2;
          }
          dispose() {
            this.dispatchEvent({ type: "dispose" });
          }
        }
        let B = 0;
        class ImposterMaterial extends Material {
          constructor(t2) {
            super(), this.color = new b.Color(16777215), this.ambient = new b.Color(1048575), this.emissive = new b.Color(0), this.imposter = true, this.wrapAround = false, this.wrapRGB = new l.Vector3(1, 1, 1), this.map = void 0, this.lightMap = null, this.specularMap = null, this.envMap = null, this.reflectivity = 1, this.refractionRatio = 0.98, this.fog = true, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.shading = o.SmoothShading, this.shaderID = null, this.vertexColors = r.NoColors, this.skinning = false, this.setValues(t2);
          }
          clone(t2 = new ImposterMaterial()) {
            return super.clone.call(this, t2), t2.color.copy(this.color), t2.ambient.copy(this.ambient), t2.emissive.copy(this.emissive), t2.wrapAround = this.wrapAround, t2.wrapRGB.copy(this.wrapRGB), t2.map = this.map, t2.lightMap = this.lightMap, t2.specularMap = this.specularMap, t2.envMap = this.envMap, t2.combine = this.combine, t2.reflectivity = this.reflectivity, t2.refractionRatio = this.refractionRatio, t2.fog = this.fog, t2.shading = this.shading, t2.shaderID = this.shaderID, t2.vertexColors = this.vertexColors, t2.skinning = this.skinning, t2.morphTargets = this.morphTargets, t2.morphNormals = this.morphNormals, t2;
          }
        }
        class InstancedMaterial extends Material {
          constructor(t2) {
            super(), this.color = new b.Color(16777215), this.ambient = new b.Color(1048575), this.emissive = new b.Color(0), this.wrapAround = false, this.wrapRGB = new l.Vector3(1, 1, 1), this.map = void 0, this.lightMap = null, this.specularMap = null, this.envMap = null, this.reflectivity = 1, this.refractionRatio = 0.98, this.fog = true, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.shading = o.SmoothShading, this.shaderID = "instanced", this.vertexColors = r.NoColors, this.skinning = false, this.sphere = null, this.setValues(t2);
          }
          clone(t2 = new InstancedMaterial()) {
            return super.clone.call(this, t2), t2.color.copy(this.color), t2.ambient.copy(this.ambient), t2.emissive.copy(this.emissive), t2.wrapAround = this.wrapAround, t2.wrapRGB.copy(this.wrapRGB), t2.map = this.map, t2.lightMap = this.lightMap, t2.specularMap = this.specularMap, t2.envMap = this.envMap, t2.combine = this.combine, t2.reflectivity = this.reflectivity, t2.refractionRatio = this.refractionRatio, t2.fog = this.fog, t2.shading = this.shading, t2.shaderID = this.shaderID, t2.vertexColors = this.vertexColors, t2.skinning = this.skinning, t2.morphTargets = this.morphTargets, t2.morphNormals = this.morphNormals, t2.sphere = this.sphere, t2;
          }
        }
        class MeshLambertMaterial extends Material {
          constructor(t2) {
            super(), this.color = new b.Color(16777215), this.ambient = new b.Color(1048575), this.emissive = new b.Color(0), this.wrapAround = false, this.wrapRGB = new l.Vector3(1, 1, 1), this.map = void 0, this.lightMap = null, this.specularMap = null, this.envMap = null, this.reflectivity = 1, this.refractionRatio = 0.98, this.fog = true, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.shading = o.SmoothShading, this.shaderID = "lambert", this.vertexColors = r.NoColors, this.skinning = false, this.setValues(t2);
          }
          clone(t2 = new MeshLambertMaterial()) {
            return super.clone.call(this, t2), t2.color.copy(this.color), t2.ambient.copy(this.ambient), t2.emissive.copy(this.emissive), t2.wrapAround = this.wrapAround, t2.wrapRGB.copy(this.wrapRGB), t2.map = this.map, t2.lightMap = this.lightMap, t2.specularMap = this.specularMap, t2.envMap = this.envMap, t2.combine = this.combine, t2.reflectivity = this.reflectivity, t2.refractionRatio = this.refractionRatio, t2.fog = this.fog, t2.shading = this.shading, t2.shaderID = this.shaderID, t2.vertexColors = this.vertexColors, t2.skinning = this.skinning, t2.morphTargets = this.morphTargets, t2.morphNormals = this.morphNormals, t2;
          }
        }
        class MeshDoubleLambertMaterial extends MeshLambertMaterial {
          constructor(t2) {
            super(t2), this.shaderID = "lambertdouble", this.side = a, this.outline = false;
          }
          clone(t2 = new MeshDoubleLambertMaterial()) {
            return super.clone.call(this, t2), t2;
          }
        }
        class MeshOutlineMaterial extends Material {
          constructor(t2) {
            super(), t2 = t2 || {}, this.fog = true, this.shaderID = "outline", this.wireframe = false, this.outlineColor = b.CC.color(t2.color || new b.Color(0, 0, 0)), this.outlineWidth = t2.width || 0.1, this.outlinePushback = t2.pushback || 1, this.outlineMaxPixels = t2.maxpixels || 0;
          }
          clone(t2 = new MeshOutlineMaterial()) {
            return super.clone.call(this, t2), t2.fog = this.fog, t2.shaderID = this.shaderID, t2.wireframe = this.wireframe, t2.outlineColor = this.outlineColor, t2.outlineWidth = this.outlineWidth, t2.outlinePushback = this.outlinePushback, t2.outlineMaxPixels = this.outlineMaxPixels, t2;
          }
        }
        class SphereImposterMaterial extends ImposterMaterial {
          constructor(t2) {
            super(t2), this.shaderID = "sphereimposter", this.setValues(t2);
          }
          clone(t2 = new SphereImposterMaterial()) {
            return super.clone.call(this, t2), t2;
          }
        }
        class SphereImposterOutlineMaterial extends ImposterMaterial {
          constructor(t2) {
            super(t2), t2 = t2 || {}, this.shaderID = "sphereimposteroutline", this.outlineColor = b.CC.color(t2.color || new b.Color(0, 0, 0)), this.outlineWidth = t2.width || 0.1, this.outlinePushback = t2.pushback || 1, this.outlineMaxPixels = t2.maxpixels || 0, this.setValues(t2);
          }
          clone(t2 = new SphereImposterOutlineMaterial()) {
            return super.clone.call(this, t2), t2.outlineColor = this.outlineColor, t2.outlineWidth = this.outlineWidth, t2.outlinePushback = this.outlinePushback, t2.outlineMaxPixels = this.outlineMaxPixels, t2;
          }
        }
        class SpriteMaterial extends Material {
          constructor(t2) {
            super(), this.color = new b.Color(16777215), this.map = new Texture(), this.useScreenCoordinates = true, this.fog = false, this.uvOffset = new l.Vector2(0, 0), this.uvScale = new l.Vector2(1, 1), this.depthTest = !this.useScreenCoordinates, this.sizeAttenuation = !this.useScreenCoordinates, this.screenOffset = this.screenOffset, this.scaleByViewPort = !this.sizeAttenuation, this.alignment = h.center.clone(), this.setValues(t2), void 0 === (t2 = t2 || {}).depthTest && (this.depthTest = !this.useScreenCoordinates), void 0 === t2.sizeAttenuation && (this.sizeAttenuation = !this.useScreenCoordinates), void 0 === t2.scaleByViewPort && (this.scaleByViewPort = !this.sizeAttenuation);
          }
          clone(t2 = new SpriteMaterial()) {
            return super.clone.call(this, t2), t2.color.copy(this.color), t2.map = this.map, t2.useScreenCoordinates = this.useScreenCoordinates, t2.screenOffset = this.screenOffset, t2.sizeAttenuation = this.sizeAttenuation, t2.scaleByViewport = this.scaleByViewPort, t2.alignment.copy(this.alignment), t2.uvOffset.copy(this.uvOffset), t2;
          }
        }
        class StickImposterMaterial extends ImposterMaterial {
          constructor(t2) {
            super(t2), this.shaderID = "stickimposter", this.setValues(t2);
          }
          clone(t2 = new StickImposterMaterial()) {
            return super.clone.call(this, t2), t2;
          }
        }
        class StickImposterOutlineMaterial extends ImposterMaterial {
          constructor(t2 = {}) {
            super(t2), this.shaderID = "stickimposteroutline", this.outlineColor = new b.Color(0, 0, 0), this.outlineWidth = 0.1, this.outlinePushback = 1, this.outlineMaxPixels = 0, t2.color && (this.outlineColor = b.CC.color(t2.color)), t2.width && (this.outlineWidth = t2.width), t2.pushback && (this.outlinePushback = t2.pushback), t2.maxpixels && (this.outlineMaxPixels = t2.maxpixels), this.setValues(t2);
          }
          clone(t2 = new StickImposterOutlineMaterial()) {
            return super.clone.call(this, t2), t2.outlineColor = this.outlineColor, t2.outlineWidth = this.outlineWidth, t2.outlinePushback = this.outlinePushback, t2.outlineMaxPixels = this.outlineMaxPixels, t2;
          }
        }
        class VolumetricMaterial extends Material {
          constructor(t2) {
            super(), this.transparent = false, this.volumetric = true, this.color = new b.Color(16777215), this.transferfn = null, this.map = void 0, this.extent = [], this.maxdepth = 100, this.unit = 0, this.texmatrix = null, this.transfermin = -1, this.transfermax = 1, this.subsamples = 5, this.shaderID = "volumetric", this.side = s, this.setValues(t2);
          }
          clone(t2 = new VolumetricMaterial()) {
            return super.clone.call(this, t2), t2.transparent = this.transparent, t2.volumetric = this.volumetric, t2.color = this.color, t2.transferfn = this.transferfn, t2.map = this.map, t2.extent = this.extent, t2.maxdepth = this.maxdepth, t2.unit = this.unit, t2.texmatrix = this.texmatrix, t2.transfermin = this.transfermin, t2.transfermax = this.transfermax, t2.subsamples = this.subsamples, t2.shaderID = this.shaderID, t2.side = this.side, t2;
          }
        }
        var N;
        !(function(t2) {
          t2[t2.LineStrip = 0] = "LineStrip", t2[t2.LinePieces = 1] = "LinePieces";
        })(N || (N = {}));
        class Line extends Object3D {
          constructor(t2, e2 = new LineBasicMaterial({ color: 16777215 * Math.random() }), i2 = N.LineStrip) {
            super(), this.geometry = t2, this.material = e2, this.type = i2;
          }
          clone(t2 = new Line(this.geometry, this.material, this.type)) {
            return super.clone.call(this, t2), t2;
          }
        }
        class Mesh extends Object3D {
          constructor(t2, e2) {
            super(), this.geometry = t2, this.material = e2;
          }
          clone(t2) {
            return void 0 === t2 && (t2 = new Mesh(this.geometry, this.material)), super.clone.call(this, t2), t2;
          }
        }
        class Sprite extends Object3D {
          constructor(t2 = new SpriteMaterial()) {
            super(), this.material = t2, this.rotation3d = this.rotation, this.rotation = 0;
          }
          updateMatrix() {
            this.matrix.setPosition(this.position), this.rotation3d.set(0, 0, this.rotation), this.matrix.setRotationFromEuler(this.rotation3d), 1 === this.scale.x && 1 === this.scale.y || this.matrix.scale(this.scale), this.matrixWorldNeedsUpdate = true;
          }
          clone(t2 = new Sprite(this.material)) {
            return Object3D.prototype.clone.call(this, t2), t2;
          }
        }
        const G = { opacity: { type: "f", value: 1 }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 } }, V = { vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\n\nattribute vec3 position;\nattribute vec3 color;\n\nvarying vec3 vColor;\n\nvoid main() {\n\n    vColor = color;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_Position = projectionMatrix * mvPosition;\n\n}".replace("#define GLSLIFY 1", ""), fragmentShader: "uniform mat4 viewMatrix;\nuniform float opacity;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vColor;\n//DEFINEFRAGCOLOR\nvoid main() {\n    gl_FragColor = vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}".replace("#define GLSLIFY 1", ""), uniforms: G }, j = { opacity: { type: "f", value: 1 }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, directionalLightColor: { type: "fv", value: [] }, directionalLightDirection: { type: "fv", value: [] } }, H = { fragmentShader: "uniform mat4 viewMatrix;\nuniform float opacity;\n\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\n#ifdef SHADED\nuniform highp sampler2D shading;\n#endif\nvarying vec3 vLightFront;\nvarying vec3 vColor;\n//DEFINEFRAGCOLOR\n\nvoid main() {\n\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\n\n    #ifndef WIREFRAME\n    gl_FragColor.xyz *= vLightFront;\n    #endif\n\n#ifdef SHADED\n    ivec2 dim = textureSize(shading,0);\n    float shadowFactor = texture2D(shading,vec2(gl_FragCoord.x/float(dim.x),gl_FragCoord.y/float(dim.y))).r;\n    vColor *= shadowFactor;\n#endif\n    gl_FragColor = gl_FragColor * vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n\n\n".replace("#define GLSLIFY 1", ""), vertexShader: "\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\n\nattribute vec3 offset;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute float radius;\n\nvarying vec3 vColor;\nvarying vec3 vLightFront;\n\nvoid main() {\n\n    vColor = color;\n\n    vec3 objectNormal = normal;\n    vec3 transformedNormal = normalMatrix * objectNormal;\n    vec4 mvPosition = modelViewMatrix * vec4( position * radius + offset, 1.0 );\n\n    vLightFront = vec3( 0.0 );\n\n    transformedNormal = normalize( transformedNormal );\n\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vec3 dirVector = normalize( lDirection.xyz );\n    float dotProduct = dot( transformedNormal, dirVector );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;\n\n    gl_Position = projectionMatrix * mvPosition;\n}\n\n".replace("#define GLSLIFY 1", ""), uniforms: j }, W = { opacity: { type: "f", value: 1 }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, directionalLightColor: { type: "fv", value: [] }, directionalLightDirection: { type: "fv", value: [] } }, q = { fragmentShader: "uniform mat4 viewMatrix;\nuniform float opacity;\n\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\n#ifdef SHADED\nuniform highp sampler2D shading;\n#endif\nvarying vec3 vLightFront;\nvarying vec3 vColor;\n//DEFINEFRAGCOLOR\n\nvoid main() {\n\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\n\n    #ifndef WIREFRAME\n    gl_FragColor.xyz *= vLightFront;\n    #endif\n#ifdef SHADED\n    ivec2 dim = textureSize(shading,0);\n    float shadowFactor = texture2D(shading,vec2(gl_FragCoord.x/float(dim.x),gl_FragCoord.y/float(dim.y))).r;\n    vColor *= shadowFactor;\n#endif\n    gl_FragColor = gl_FragColor * vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}".replace("#define GLSLIFY 1", ""), vertexShader: "\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\n\nvarying vec3 vColor;\nvarying vec3 vLightFront;\n\nvoid main() {\n\n    vColor = color;\n\n    vec3 objectNormal = normal;\n    vec3 transformedNormal = normalMatrix * objectNormal;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n    vLightFront = vec3( 0.0 );\n\n    transformedNormal = normalize( transformedNormal );\n\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vec3 dirVector = normalize( lDirection.xyz );\n    float dotProduct = dot( transformedNormal, dirVector );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;\n\n    gl_Position = projectionMatrix * mvPosition;\n}".replace("#define GLSLIFY 1", ""), uniforms: W }, Y = { opacity: { type: "f", value: 1 }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, directionalLightColor: { type: "fv", value: [] }, directionalLightDirection: { type: "fv", value: [] } }, Z = { fragmentShader: "\n#ifdef SHADED\nuniform highp sampler2D shading;\n#endif\n\nuniform mat4 viewMatrix;\nuniform float opacity;\n\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\n\nvarying vec3 vLightFront;\nvarying vec3 vLightBack;\n\nvarying vec3 vColor;\n\n\n//DEFINEFRAGCOLOR\n\nvoid main() {\n\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\n\n    #ifndef WIREFRAME\n    if ( gl_FrontFacing )\n       gl_FragColor.xyz *= vLightFront;\n    else\n       gl_FragColor.xyz *= vLightBack;\n    #endif\n\n    vec3 color = vColor;\n#ifdef SHADED\n    ivec2 dim = textureSize(shading,0);\n    float shadowFactor = texture2D(shading,vec2(gl_FragCoord.x/float(dim.x),gl_FragCoord.y/float(dim.y))).r;\n    color *= shadowFactor;\n#endif\n    gl_FragColor = gl_FragColor * vec4( color, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n\n\n".replace("#define GLSLIFY 1", ""), vertexShader: "\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\n\nvarying vec3 vColor;\nvarying vec3 vLightFront;\nvarying vec3 vLightBack;\n\nvoid main() {\n\n    vColor = color;\n\n    vec3 objectNormal = normal;\n    vec3 transformedNormal = normalMatrix * objectNormal;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n    vLightFront = vec3( 0.0 );\n    vLightBack = vec3( 0.0 );\n\n    transformedNormal = normalize( transformedNormal );\n\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vec3 dirVector = normalize( lDirection.xyz );\n    float dotProduct = dot( transformedNormal, dirVector );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;\n    vLightBack += directionalLightColor[ 0 ] * directionalLightWeightingBack;\n\n    gl_Position = projectionMatrix * mvPosition;\n}\n\n".replace("#define GLSLIFY 1", ""), uniforms: Y }, X = { opacity: { type: "f", value: 1 }, outlineColor: { type: "c", value: new b.Color(0, 0, 0) }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, outlineWidth: { type: "f", value: 0.1 }, outlinePushback: { type: "f", value: 1 }, outlineMaxPixels: { type: "f", value: 0 } }, K = { fragmentShader: "\n\nuniform float opacity;\nuniform vec3 outlineColor;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\n//DEFINEFRAGCOLOR\n\nvoid main() {\n    gl_FragColor = vec4( outlineColor, 1 );\n\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );    \n}\n\n\n".replace("#define GLSLIFY 1", ""), vertexShader: "\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float outlineWidth;\nuniform float outlinePushback;\nuniform float vWidth;\nuniform float vHeight;\nuniform float outlineMaxPixels;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\n\nvoid main() {\n\n    vec4 norm = modelViewMatrix*vec4(normalize(normal),0.0);\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    mvPosition.xy += norm.xy*outlineWidth;\n    vec4 outpos = projectionMatrix * mvPosition;\n\n    if(outlineMaxPixels > 0.0) {\n        vec4 unadjusted = projectionMatrix*modelViewMatrix * vec4( position, 1.0 );\n        float w = outpos.w;\n        //normalize homogeneous coords\n        unadjusted /= unadjusted.w;\n        outpos /= outpos.w;\n        vec2 diff = outpos.xy-unadjusted.xy;\n        //put into pixels\n        diff.x *= vWidth;\n        diff.y *= vHeight;\n        if ( length(diff) > outlineMaxPixels) {\n            vec2 ndiff = normalize(diff)*outlineMaxPixels;\n            ndiff.x /= vWidth;\n            ndiff.y /= vHeight;\n            outpos.xy = unadjusted.xy;\n            outpos.xy += ndiff;\n        }\n        outpos *= w; //if I don't do this things blow up\n    }\n    gl_Position = outpos;\n    mvPosition.z -= outlinePushback; //go backwards in model space\n    vec4 pushpos = projectionMatrix*mvPosition; //project to get z in projection space, I'm probably missing some simple math to do the same thing..\n    gl_Position.z = gl_Position.w*pushpos.z/pushpos.w;\n}\n\n".replace("#define GLSLIFY 1", ""), uniforms: X }, Q = { fragmentShader: "uniform sampler2D colormap;\nvarying highp vec2 vTexCoords;\nuniform vec2 dimensions;\n//DEFINEFRAGCOLOR\nvoid main (void) {\n   gl_FragColor = texture2D(colormap, vTexCoords);\n\n   //gl_FragColor.g = gl_FragColor.b =  gl_FragColor.r; //debug shading \n}\n        ".replace("#define GLSLIFY 1", ""), vertexShader: "attribute vec2 vertexPosition;\nvarying highp vec2 vTexCoords;\nconst vec2 scale = vec2(0.5, 0.5);\n\nvoid main() {\n   vTexCoords  = vertexPosition * scale + scale; // scale vertex attribute to [0,1] range\n   gl_Position = vec4(vertexPosition, 0.0, 1.0);\n}\n        ".replace("#define GLSLIFY 1", ""), uniforms: {} }, $ = { fragmentShader: "uniform highp sampler2D colormap;\nvarying highp vec2 vTexCoords;\n\n\n// Basic FXAA implementation based on the code on geeks3d.com \n#define FXAA_REDUCE_MIN (1.0/ 128.0)\n#define FXAA_REDUCE_MUL (1.0 / 8.0)\n#define FXAA_SPAN_MAX 8.0\n\n\nvec4 applyFXAA(vec2 fragCoord, highp sampler2D tex)\n{\n    vec4 color;\n    ivec2 dim = textureSize(tex,0);\n    vec2 dimensions = vec2(float(dim.x),float(dim.y));\n    vec2 inverseVP = vec2(1.0 / dimensions.x, 1.0 / dimensions.y);\n    vec4 rgbNW = texture2D(tex, fragCoord + vec2(-1.0, -1.0) * inverseVP);\n    vec4 rgbNE = texture2D(tex, fragCoord + vec2(1.0, -1.0) * inverseVP);\n    vec4 rgbSW = texture2D(tex, fragCoord + vec2(-1.0, 1.0) * inverseVP);\n    vec4 rgbSE = texture2D(tex, fragCoord + vec2(1.0, 1.0) * inverseVP);\n    vec4 rgbM  = texture2D(tex, fragCoord );\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW.xyz, luma);\n    float lumaNE = dot(rgbNE.xyz, luma);\n    float lumaSW = dot(rgbSW.xyz, luma);\n    float lumaSE = dot(rgbSE.xyz, luma);\n    float lumaM  = dot(rgbM.xyz,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                        (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n            max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n            dir * rcpDirMin)) * inverseVP;\n\n    vec4 rgbA = 0.5 * (\n        texture2D(tex, fragCoord + dir * (1.0 / 3.0 - 0.5)) +\n        texture2D(tex, fragCoord  + dir * (2.0 / 3.0 - 0.5)));\n    vec4 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord  + dir * -0.5) +\n        texture2D(tex, fragCoord  + dir * 0.5));\n\n    float lumaB = dot(rgbB.xyz, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = rgbA;\n    else\n        color = rgbB;\n\n    return color;\n}\n\n\n//DEFINEFRAGCOLOR\nvoid main (void) {\n    ivec2 dim = textureSize(colormap,0);\n\n  gl_FragColor = applyFXAA(vTexCoords, colormap);\n}\n        ".replace("#define GLSLIFY 1", ""), vertexShader: "attribute vec2 vertexPosition;\nvarying highp vec2 vTexCoords;\nconst vec2 scale = vec2(0.5, 0.5);\n\nvoid main() {\n   vTexCoords  = vertexPosition * scale + scale; // scale vertex attribute to [0,1] range\n   gl_Position = vec4(vertexPosition, 0.0, 1.0);\n}\n        ".replace("#define GLSLIFY 1", ""), uniforms: {} }, J = { opacity: { type: "f", value: 1 }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, directionalLightColor: { type: "fv", value: [] }, directionalLightDirection: { type: "fv", value: [] } }, tt = { vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\n\nvarying vec2 mapping;\nvarying vec3 vColor;\nvarying float rval;\nvarying vec3 vLight;\nvarying vec3 center;\n\nvoid main() {\n\n    vColor = color;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    center = mvPosition.xyz;\n    vec4 projPosition = projectionMatrix * mvPosition;\n    vec4 adjust = projectionMatrix* vec4(normal,0.0); adjust.z = 0.0; adjust.w = 0.0;\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vLight = normalize( lDirection.xyz );\n    mapping = normal.xy;\n    rval = abs(normal.x);\n    gl_Position = projPosition+adjust;\n\n}\n".replace("#define GLSLIFY 1", ""), fragmentShader: "\nuniform mat4 viewMatrix;\nuniform float opacity;\nuniform mat4 projectionMatrix;\n\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform float uDepth;\nuniform vec3 directionalLightColor[ 1 ];\n\nvarying vec3 vColor;\nvarying vec2 mapping;\nvarying float rval;\nvarying vec3 vLight;\nvarying vec3 center;\n\n#ifdef SHADED\nuniform highp sampler2D shading;\n#endif\n\n//DEFINEFRAGCOLOR\n\nvoid main() {\n    float lensqr = dot(mapping,mapping);\n    float rsqr = rval*rval;\n    if(lensqr > rsqr)\n       discard;\n    float z = sqrt(rsqr-lensqr);\n    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z);\n    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);\n    float ndcDepth = clipPos.z / clipPos.w;\n    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n    vec3 norm = normalize(vec3(mapping.x,mapping.y,z));\n    float dotProduct = dot( norm, vLight );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vec3 vLight = directionalLightColor[ 0 ] * directionalLightWeighting;\n    vec3 color = vLight*vColor;\n#ifdef SHADED\n    ivec2 dim = textureSize(shading,0);\n    float shadowFactor = texture2D(shading,vec2(gl_FragCoord.x/float(dim.x),gl_FragCoord.y/float(dim.y))).r;\n    color *= shadowFactor;\n#endif    \n    gl_FragColor = vec4(color, opacity*opacity );\n    float fogFactor = smoothstep( fogNear, fogFar, gl_FragDepthEXT/gl_FragCoord.w );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n\n".replace("#define GLSLIFY 1", ""), uniforms: J }, et = { opacity: { type: "f", value: 1 }, outlineColor: { type: "c", value: new b.Color(0, 0, 0) }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, outlineWidth: { type: "f", value: 0.1 }, outlinePushback: { type: "f", value: 1 }, outlineMaxPixels: { type: "f", value: 0 } }, it = { fragmentShader: "\n\nuniform float opacity;\nuniform vec3 outlineColor;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform mat4 projectionMatrix;\nvarying vec2 mapping;\nvarying float rval;\nvarying vec3 center;\n\nuniform float outlinePushback;\n\n//DEFINEFRAGCOLOR\n\nvoid main() {\n    float lensqr = dot(mapping,mapping);\n    float rsqr = rval*rval;\n    if(lensqr > rsqr)\n       discard;\n    float z = sqrt(rsqr-lensqr);\n    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z-outlinePushback);\n    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);\n    float ndcDepth = clipPos.z / clipPos.w;\n    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n    gl_FragColor = vec4(outlineColor, 1 );\n}\n\n\n".replace("#define GLSLIFY 1", ""), vertexShader: "\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float outlineWidth;\nuniform float outlinePushback;\nuniform float outlineMaxPixels;\nuniform float vWidth;\nuniform float vHeight;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\n\nvarying vec2 mapping;\nvarying float rval;\nvarying vec3 center;\n\nvoid main() {\n\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    center = mvPosition.xyz;\n    vec4 projPosition = projectionMatrix * mvPosition;\n    vec2 norm = normal.xy + vec2(sign(normal.x)*outlineWidth,sign(normal.y)*outlineWidth);\n\n    vec4 adjust = projectionMatrix* vec4(norm,normal.z,1.0); \n    mapping = norm.xy;\n    rval = abs(norm.x);\n    gl_Position = projPosition+vec4(adjust.xy,0.0,0.0);\n\n    if(outlineMaxPixels > 0.0) {\n        vec4 unadjusted = projectionMatrix*vec4(center.x+normal.x, center.y,center.z,1.0); \n        vec4 ccoord = projectionMatrix*vec4(center.xyz,1.0);\n        adjust = projectionMatrix* vec4(center.x+norm.x,center.y,center.z,1.0); \n        //subtract center \n        unadjusted.xyz -= ccoord.xyz;\n        adjust.xyz -= ccoord.xyz;\n        unadjusted /= unadjusted.w;\n        adjust /= adjust.w;\n        float diff = abs(adjust.x-unadjusted.x);\n        diff *= vWidth;\n        if(diff > outlineMaxPixels) {\n            \n            float fixlen = abs(unadjusted.x) + outlineMaxPixels/vWidth;\n            //adjsut reval by ratio of lengths\n            rval *= fixlen/abs(adjust.x);\n        }\n\n    }\n}\n\n".replace("#define GLSLIFY 1", ""), uniforms: et }, rt = { fragmentShader: "\n\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\n\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\n\nvarying vec2 vUV;\n//DEFINEFRAGCOLOR\n\nvoid main() {\n\n    vec4 texture = texture2D(map, vUV);\n\n    if (texture.a <= alphaTest) discard;\n\n    gl_FragColor = vec4(color * texture.xyz, texture.a * opacity);\n\n    if (fogType > 0) {\n\n        float depth = gl_FragCoord.z / gl_FragCoord.w;\n        float fogFactor = 0.0;\n\n        if (fogType == 1) {\n            fogFactor = smoothstep(fogNear, fogFar, depth);\n        }\n\n        else {\n            const float LOG2 = 1.442695;\n            float fogFactor = exp2(- fogDensity * fogDensity * depth * depth * LOG2);\n            fogFactor = 1.0 - clamp(fogFactor, 0.0, 1.0);\n        }\n\n        gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);\n\n    }\n}\n\n".replace("#define GLSLIFY 1", ""), vertexShader: "\n\nuniform int useScreenCoordinates;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\n\nattribute vec2 position;\nattribute vec2 uv;\n\nvarying vec2 vUV;\n\nvoid main() {\n\n    vUV = uvOffset + uv * uvScale;\n\n    vec2 alignedPosition = position + alignment;\n\n    vec2 rotatedPosition;\n    rotatedPosition.x = ( cos(rotation) * alignedPosition.x - sin(rotation) * alignedPosition.y ) * scale.x;\n    rotatedPosition.y = ( sin(rotation) * alignedPosition.x + cos(rotation) * alignedPosition.y ) * scale.y;\n\n    vec4 finalPosition;\n\n    if(useScreenCoordinates != 0) {\n        finalPosition = vec4(screenPosition.xy + rotatedPosition, screenPosition.z, 1.0);\n    }\n\n    else {\n        finalPosition = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); finalPosition /= finalPosition.w;\n        finalPosition.xy += rotatedPosition; \n    }\n\n    gl_Position = finalPosition;\n\n}\n\n".replace("#define GLSLIFY 1", ""), uniforms: {} }, st = { opacity: { type: "f", value: 1 }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, directionalLightColor: { type: "fv", value: [] }, directionalLightDirection: { type: "fv", value: [] } }, nt = "uniform float opacity;\nuniform mat4 projectionMatrix;\n\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\n\nvarying vec3 vLight;\nvarying vec3 vColor;\nvarying vec3 cposition;\nvarying vec3 p1;\nvarying vec3 p2;\nvarying float r;\n\n#ifdef SHADED\nuniform highp sampler2D shading;\n#endif\n\n//DEFINEFRAGCOLOR\n\n//cylinder-ray intersection testing taken from http://mrl.nyu.edu/~dzorin/cg05/lecture12.pdf\n//also useful: http://stackoverflow.com/questions/9595300/cylinder-impostor-in-glsl\n//with a bit more care (caps) this could be a general cylinder imposter (see also outline)\nvoid main() {\n    vec3 color = abs(vColor);\n    vec3 pos = cposition;\n    vec3 p = pos; //ray point\n    vec3 v = vec3(0.0,0.0,-1.0); //ray normal - orthographic\n    if(projectionMatrix[3][3] == 0.0) v = normalize(pos); //ray normal - perspective\n    vec3 pa = p1; //cyl start\n    vec3 va = normalize(p2-p1); //cyl norm\n    vec3 tmp1 = v-(dot(v,va)*va);\n    vec3 deltap = p-pa;\n    float A = dot(tmp1,tmp1);\n    if(A == 0.0) discard;\n    vec3 tmp2 = deltap-(dot(deltap,va)*va);\n    float B = 2.0*dot(tmp1, tmp2);\n    float C = dot(tmp2,tmp2)-r*r;\n//quadratic equation!\n    float det = (B*B) - (4.0*A*C);\n    if(det < 0.0) discard;\n    float sqrtDet = sqrt(det);\n    float posT = (-B+sqrtDet)/(2.0*A);\n    float negT = (-B-sqrtDet)/(2.0*A);\n    float intersectionT = min(posT,negT);\n    vec3 qi = p+v*intersectionT;\n    float dotp1 = dot(va,qi-p1);\n    float dotp2 = dot(va,qi-p2);\n    vec3 norm;\n    if( dotp1 < 0.0 || dotp2 > 0.0) { //(p-c)^2 + 2(p-c)vt +v^2+t^2 - r^2 = 0\n       vec3 cp;\n       if( dotp1 < 0.0) {  \n//        if(vColor.x < 0.0 ) discard; //color sign bit indicates if we should cap or not\n        cp = p1;\n       } else {\n//          if(vColor.y < 0.0 ) discard;\n          cp = p2;\n       }\n       vec3 diff = p-cp;\n       A = dot(v,v);\n       B = dot(diff,v)*2.0;\n       C = dot(diff,diff)-r*r;\n       det = (B*B) - (4.0*C);\n       if(det < 0.0) discard;\n       sqrtDet = sqrt(det);\n       posT = (-B+sqrtDet)/(2.0);\n       negT = (-B-sqrtDet)/(2.0);\n       float t = min(posT,negT);\n       qi = p+v*t; \n       norm = normalize(qi-cp); \n    } else {\n       norm = normalize(qi-(dotp1*va + p1));\n    }\n    vec4 clipPos = projectionMatrix * vec4(qi, 1.0);\n    float ndcDepth = clipPos.z / clipPos.w;\n    float depth = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n    gl_FragDepthEXT = depth;", at = { fragmentShader: [nt, "    float dotProduct = dot( norm, vLight );\n    vec3 light = vec3( max( dotProduct, 0.0 ) );\n    color *= light;\n#ifdef SHADED\n    ivec2 dim = textureSize(shading,0);\n    float shadowFactor = texture2D(shading,vec2(gl_FragCoord.x/float(dim.x),gl_FragCoord.y/float(dim.y))).r;\n    color *= shadowFactor;\n#endif    \n    gl_FragColor = vec4(color, opacity*opacity );\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}"].join("\n"), vertexShader: "\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute float radius;\n\nvarying vec3 vColor;\nvarying vec3 vLight;\nvarying vec3 cposition;\nvarying vec3 p1;\nvarying vec3 p2;\nvarying float r;\n\nvoid main() {\n\n    vColor = color; vColor.z = abs(vColor.z); //z indicates which vertex and so would vary\n    r = abs(radius);\n    vec4 to = modelViewMatrix*vec4(normal, 1.0); //normal is other point of cylinder\n    vec4 pt = modelViewMatrix*vec4(position, 1.0);\n    vec4 mvPosition = pt;\n    p1 = pt.xyz; p2 = to.xyz;\n    vec3 norm = to.xyz-pt.xyz;\n    float mult = 1.1; //slop to account for perspective of sphere\n    if(length(p1) > length(p2)) { //billboard at level of closest point\n       mvPosition = to;\n    }\n    vec3 n = normalize(mvPosition.xyz);\n    bool isperspective = (projectionMatrix[3][3] == 0.0);\n//intersect with the plane defined by the camera looking at the billboard point\n    if(color.z >= 0.0) { //p1\n       if(isperspective) { //perspective\n         vec3 pnorm = normalize(p1);\n         float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);\n         mvPosition.xyz = p1+t*pnorm; \n       } else { //orthographic\n         mvPosition.xyz = p1;\n       }\n    } else {\n      if(isperspective) { //perspective\n         vec3 pnorm = normalize(p2);\n         float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);\n         mvPosition.xyz = p2+t*pnorm;\n       } else { //orthographic\n         mvPosition.xyz = p2;\n       } \n       mult *= -1.0;\n    }\n\n    if(isperspective) { //perspective\n      vec3 cr = normalize(cross(mvPosition.xyz,norm))*radius;\n      vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*radius;\n      mvPosition.xyz +=  mult*(cr + doublecr).xyz;\n    } else {\n      vec3 cr = normalize(cross(vec3(0.0,0.0,-1.0),norm))*radius;\n      vec3 doublecr = normalize(cross(vec3(0.0,0.0,-1.0),cr))*radius;\n      mvPosition.xyz +=  mult*(cr + doublecr).xyz;     \n    }\n\n    cposition = mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vLight = normalize( lDirection.xyz )*directionalLightColor[0]; //not really sure this is right, but color is always white so..\n}\n\n", uniforms: st }, ot = { fragmentShader: nt + "gl_FragColor = vec4(color,1.0);}", vertexShader: "\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nuniform vec3 outlineColor;\nuniform float outlineWidth;\nuniform float outlinePushback;\nuniform float outlineMaxPixels;\nuniform float vWidth;\nuniform mat4 projinv;\n\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute float radius;\n\nvarying vec3 vColor;\nvarying vec3 vLight;\nvarying vec3 cposition;\nvarying vec3 p1;\nvarying vec3 p2;\nvarying float r;\n\nvoid main() {\n\n    vColor = outlineColor;\n    float rad = radius+sign(radius)*outlineWidth;\n    r = abs(rad);\n\n    vec4 to = modelViewMatrix*vec4(normal, 1.0); //normal is other point of cylinder\n    vec4 pt = modelViewMatrix*vec4(position, 1.0);\n//pushback\n    float scale = 1.0;\n    if(projectionMatrix[3][3] != 0.0) { //orthographic\n        to.z -= outlinePushback;\n        pt.z -= outlinePushback;\n    } else { //perspective\n        vec4 midbefore = pt;\n        if(length(to.xyz) < length(pt)) {\n            midbefore = to;\n        }\n        vec4 midafter = midbefore;\n        midafter.xyz += normalize(midbefore.xyz)*outlinePushback;\n\n        to.xyz += normalize(to.xyz)*outlinePushback;\n        pt.xyz += normalize(pt.xyz)*outlinePushback;\n\n        //figure out a scaling factor for radius to account for perspective setback\n        vec4 midbeforer = vec4(midbefore.x+rad,midbefore.y, midbefore.z, midbefore.w);\n        vec4 midafterr = vec4(midafter.x+rad,midafter.y, midafter.z, midafter.w);\n\n        vec4 mb = projectionMatrix*midbefore;\n        vec4 mbr = projectionMatrix*midbeforer;\n        vec4 ma = projectionMatrix*midafter;\n        vec4 mar = projectionMatrix*midafterr;\n        mb /= mb.w;\n        mbr /= mbr.w;\n        ma /= ma.w;\n        mar /= mar.w;\n        scale = abs((mbr.x-mb.x)/(mar.x-ma.x));\n        rad *= scale;\n        r = abs(rad);\n    }\n    vec4 mvPosition = pt;\n    p1 = pt.xyz; p2 = to.xyz;\n    vec3 norm = to.xyz-pt.xyz;\n    float mult = 1.1; //slop to account for perspective of sphere\n    if(length(p1) > length(p2)) { //billboard at level of closest point\n       mvPosition = to;\n    }\n\n    vec3 n = normalize(mvPosition.xyz);\n//intersect with the plane defined by the camera looking at the billboard point\n    if(color.z >= 0.0) { //p1\n       vec3 pnorm = normalize(p1);\n       float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);\n       mvPosition.xyz = p1+t*pnorm;\n    } else {\n       vec3 pnorm = normalize(p2);\n       float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);\n       mvPosition.xyz = p2+t*pnorm;\n       mult *= -1.0;\n    }\n\n    if(outlineMaxPixels > 0.0) {\n        vec4 cpos = mvPosition;\n        vec4 unadjusted = projectionMatrix*vec4(cpos.x+abs(scale*radius), cpos.y,cpos.z,cpos.w); \n        vec4 ccoord = projectionMatrix*cpos;\n        vec4 adjust = projectionMatrix*vec4(cpos.x+r,cpos.y,cpos.z,cpos.w); \n        unadjusted /= unadjusted.w;\n        adjust /= adjust.w;\n        unadjusted.xyz -= ccoord.xyz/ccoord.w;\n        adjust.xyz -= ccoord.xyz/ccoord.w;\n        float diff = abs(adjust.x-unadjusted.x);\n        diff *= vWidth; //this should now be in pixels\n        if(diff > outlineMaxPixels) {\n            float fixlen = abs(unadjusted.x) + outlineMaxPixels/vWidth; \n            vec4 pcoord = ccoord;\n            pcoord.x += fixlen*pcoord.w;\n            vec4 altc = projinv*pcoord;\n            r= abs(altc.x-cpos.x);\n        }\n    }\n\n    vec3 cr = normalize(cross(mvPosition.xyz,norm))*rad;\n    vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*rad;\n    mvPosition.xy +=  mult*(cr + doublecr).xy;\n    cposition = mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n    vLight = vec3(1.0,1.0,1.0);\n}\n\n", uniforms: { opacity: { type: "f", value: 1 }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, outlineColor: { type: "c", value: new b.Color(0, 0, 0) }, outlineWidth: { type: "f", value: 0.1 }, outlinePushback: { type: "f", value: 1 }, outlineMaxPixels: { type: "f", value: 0 }, projinv: { type: "mat4", value: [] } } }, lt = { opacity: { type: "f", value: 1 }, fogColor: { type: "c", value: new b.Color(1, 1, 1) }, fogNear: { type: "f", value: 1 }, fogFar: { type: "f", value: 2e3 }, data: { type: "i", value: 3 }, colormap: { type: "i", value: 4 }, depthmap: { type: "i", value: 5 }, step: { type: "f", value: 1 }, maxdepth: { type: "f", value: 100 }, subsamples: { type: "f", value: 5 }, textmat: { type: "mat4", value: [] }, projinv: { type: "mat4", value: [] }, transfermin: { type: "f", value: -0.2 }, transfermax: { type: "f", value: 0.2 } }, ht = { fragmentShader: "\nuniform highp sampler3D data;\nuniform highp sampler2D colormap;\nuniform highp sampler2D depthmap;\n\n\nuniform mat4 textmat;\nuniform mat4 projinv;\nuniform mat4 projectionMatrix;\n\nuniform float step;\nuniform float subsamples;\nuniform float maxdepth;\nuniform float transfermin;\nuniform float transfermax;\nin  vec4 mvPosition;\nout vec4 color;\nvoid main(void) {\n\n   vec4 pos = mvPosition;\n   bool seengood = false;\n   float i = 0.0;\n   color = vec4(1,1,1,0);\n   float increment = 1.0/subsamples;\n   float maxsteps = (maxdepth*subsamples/step);\n//there's probably a better way to do this..\n//calculate farthest possible point in model coordinates\n   vec4 maxpos = vec4(pos.x,pos.y,pos.z-maxdepth,1.0);\n// convert to projection\n   maxpos = projectionMatrix*maxpos;\n   vec4 startp = projectionMatrix*pos;\n// homogonize\n   maxpos /= maxpos.w;\n   startp /= startp.w;\n//take x,y from start and z from max\n   maxpos = vec4(startp.x,startp.y,maxpos.z,1.0);\n//convert back to model space\n   maxpos = projinv*maxpos;\n   maxpos /= maxpos.w;\n   float incr = step/subsamples;\n//get depth from depthmap\n//startp is apparently [-1,1]\n   vec2 tpos = startp.xy/2.0+0.5;\n   float depth = texture(depthmap, tpos).r;\n//compute vector between start and end\n   vec4 direction = maxpos-pos;\n   for( i = 0.0; i <= maxsteps; i++) {\n      vec4 pt = (pos+(i/maxsteps)*direction);\n      vec4 ppt = projectionMatrix*pt;\n      float ptdepth = ppt.z/ppt.w;\n      ptdepth = ((gl_DepthRange.diff * ptdepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n      if(ptdepth > depth) break;\n      pt = textmat*pt;\n//       pt /= pt.w;\n      if(pt.x >= -0.01 && pt.y >= -0.01 && pt.z >= -0.01 && pt.x <= 1.01 && pt.y <= 1.01 && pt.z <= 1.01) {\n         seengood = true;\n      } else if(seengood) {\n         break;\n      }\n      if( pt.x < -0.01 || pt.x > 1.01 || pt.y < -0.01 || pt.y > 1.01 || pt.z < -0.01 || pt.z > 1.01  ){\n          color.a = 0.0;\n          continue;\n      }\n      else {\n         float val = texture(data, pt.zyx).r;\n         if(isinf(val)) continue; //masked out\n         float cval = (val-transfermin)/(transfermax-transfermin); //scale to texture 0-1 range\n         vec4 val_color = texture(colormap, vec2(cval,0.5));\n         color.rgb = color.rgb*color.a + (1.0-color.a)*val_color.a*val_color.rgb;\n         color.a += (1.0 - color.a) * val_color.a; \n         if(color.a > 0.0) color.rgb /= color.a;\n//          color = vec4(pt.x, pt.y, pt.z, 1.0);\n      }\n//       color = vec4(pt.x, pt.y, pt.z, 0.0)\n    }\n}\n\n        ".replace("#define GLSLIFY 1", ""), vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\n\nin vec3 position;\nout vec4 mvPosition;\nvoid main() {\n\n    mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_Position = projectionMatrix*mvPosition;\n}\n".replace("#define GLSLIFY 1", ""), uniforms: lt }, ct = { basic: V, blur: { fragmentShader: "const float INV_TOTAL_SAMPLES_FACTOR = 1.0 / 9.0;\nuniform highp sampler2D inTex;\nvarying highp vec2 vTexCoords;\n    \nvoid main() {\n \n vec2 texelSize = 1.0 / vec2(textureSize(inTex,0));\n float blurred_visibility_factor = 0.0f;\n for (int t = -1; t <= 1; ++t) {\n  for (int s = -1; s <= 1; ++s) {\n   vec2 offset = vec2(float(s), float(t)) * texelSize;\n   blurred_visibility_factor += texture2D(inTex, vTexCoords + offset).r;\n  }\n }\n    \n gl_FragDepthEXT = blurred_visibility_factor * INV_TOTAL_SAMPLES_FACTOR;\n \n}", vertexShader: "attribute vec2 vertexPosition;\nvarying highp vec2 vTexCoords;\nconst vec2 scale = vec2(0.5, 0.5);\n\nvoid main() {\n   vTexCoords  = vertexPosition * scale + scale; // scale vertex attribute to [0,1] range\n   gl_Position = vec4(vertexPosition, 0.0, 1.0);\n}\n        ", uniforms: {} }, instanced: H, lambert: q, lambertdouble: Z, outline: K, screen: Q, screenaa: $, ssao: { fragmentShader: "uniform sampler2D depthmap;\nvarying highp vec2 vTexCoords;\nuniform float vWidth;\nuniform float vHeight;\nuniform float total_strength;\nuniform float radius;\nuniform mat4 projinv;\nuniform mat4 projectionMatrix;\n\n//code for pseudorandom vector from chatgpt\nfloat hash(vec3 p) {\n    p = fract(p * vec3(0.1031, 0.1030, 0.0973));\n    p += dot(p, p.yzx + 33.33);\n    return fract((p.x + p.y) * p.z);\n}\n\n// Generate a pseudorandom vec3 from a seed vec3\nvec3 pseudorandomVec3(vec3 seed) {\n    vec3 randomVec;\n    randomVec.x = hash(seed);\n    randomVec.y = hash(seed + vec3(1.0, 0.0, 17.1));\n    randomVec.z = hash(seed + vec3(0.0, 13.23, 0.0));\n    return randomVec;\n}\n\nvoid main(void)\n{   \n   const float base = 0.2;\n   const float area = 0.75;\n   const int cycles = 1;\n\n   const int samples = 64;\n   vec3 sample_sphere[64] = vec3[](\n      vec3(0.091258,-0.510164,0.000000),\n      vec3(-0.204347,-0.872967,0.187199),\n      vec3(0.009690,-0.263696,-0.110414),\n      vec3(0.175208,-0.563987,0.228527),\n      vec3(-0.001824,-0.003113,-0.000323),\n      vec3(0.411134,-0.719869,-0.261530),\n      vec3(-0.074272,-0.377368,0.276290),\n      vec3(-0.147773,-0.381587,-0.284529),\n      vec3(0.173317,-0.199635,0.063295),\n      vec3(-0.186452,-0.199460,0.076965),\n      vec3(0.143985,-0.308160,-0.307687),\n      vec3(0.053194,-0.148286,0.169589),\n      vec3(-0.547656,-0.486476,-0.317378),\n      vec3(0.020804,-0.015092,-0.004574),\n      vec3(-0.038006,-0.043165,0.054059),\n      vec3(-0.094795,-0.443908,-0.731525),\n      vec3(0.547552,-0.396466,0.461477),\n      vec3(-0.176886,-0.089989,0.007315),\n      vec3(0.074401,-0.048840,-0.074039),\n      vec3(-0.008240,-0.075697,0.178197),\n      vec3(-0.307880,-0.185053,-0.368943),\n      vec3(0.309520,-0.108483,0.041646),\n      vec3(-0.773478,-0.292946,0.538166),\n      vec3(0.184487,-0.231594,-0.820065),\n      vec3(0.207318,-0.100531,0.361797),\n      vec3(-0.173306,-0.037737,-0.055289),\n      vec3(0.548102,-0.105342,-0.253237),\n      vec3(-0.119342,-0.043907,0.285162),\n      vec3(-0.270247,-0.087861,-0.751357),\n      vec3(0.449312,-0.039777,0.236146),\n      vec3(-0.743773,-0.036095,0.196056),\n      vec3(0.148819,-0.004300,-0.231448),\n      vec3(0.008773,0.000809,0.051047),\n      vec3(-0.461467,0.027390,-0.357386),\n      vec3(0.169626,0.013338,-0.014053),\n      vec3(-0.043786,0.007095,0.047331),\n      vec3(0.004821,0.140371,-0.988260),\n      vec3(0.092402,0.023994,0.101860),\n      vec3(-0.295335,0.061530,-0.027372),\n      vec3(0.024903,0.007537,-0.018901),\n      vec3(-0.081463,0.125402,0.447794),\n      vec3(-0.397119,0.231805,-0.631062),\n      vec3(0.163853,0.059014,0.044905),\n      vec3(-0.495220,0.214357,0.254139),\n      vec3(0.306123,0.373687,-0.825715),\n      vec3(0.021665,0.026737,0.053220),\n      vec3(-0.208231,0.117129,-0.098685),\n      vec3(0.139749,0.080968,-0.043086),\n      vec3(-0.153599,0.182814,0.262090),\n      vec3(-0.159673,0.496777,-0.743568),\n      vec3(0.134797,0.117152,0.095753),\n      vec3(-0.155626,0.120533,0.019395),\n      vec3(0.042311,0.054462,-0.049709),\n      vec3(0.001257,0.031288,0.034468),\n      vec3(-0.002271,0.003199,-0.002304),\n      vec3(0.662104,0.717307,0.033854),\n      vec3(-0.373100,0.576021,0.308274),\n      vec3(0.024233,0.231316,-0.173688),\n      vec3(0.161311,0.420217,0.234273),\n      vec3(-0.045248,0.078031,-0.010411),\n      vec3(0.167453,0.376942,-0.094872),\n      vec3(-0.056194,0.433247,0.173218),\n      vec3(-0.016224,0.123149,-0.035569),\n      vec3(0.067127,0.407641,0.028479)\n   );\n\n   float depth = texture2D(depthmap, vTexCoords).r;\n   if(depth == 1.0) {\n      discard;\n   }\n\n   vec4 screen_position = vec4(vTexCoords, depth,1.0);\n   vec4 pos = projinv*screen_position;\n   pos /= pos.w;\n   vec3 position = pos.xyz;\n\n   //approximate the normal from the depth map; I find this simpler\n   //than trying to recompute the exact normal within every possible object shader\n\n   //pixel offset positions in screen space\n   ivec2 dim = textureSize(depthmap,0);\n   vec2 offset1 = vec2(0.0,1.0/float(dim.y));\n   vec2 offset2 = vec2(1.0/float(dim.x),0.0);\n   float depth1 = texture2D(depthmap, vTexCoords + offset1).r;\n   float depth2 = texture2D(depthmap, vTexCoords + offset2).r;\n   \n   vec3 p1 = vec3(screen_position.xy+offset1, depth1 - depth);\n   vec3 p2 = vec3(screen_position.xy+offset2, depth2 - depth);\n\n   //convert to model space\n   vec4 pos1 = projinv*vec4(p1,1);\n   pos1 /= pos1.w;\n   vec4 pos2 = projinv*vec4(p2,1);\n   pos2 /= pos2.w;\n\n   vec3 normal = normalize(cross(pos1.xyz-position, pos2.xyz-position)); //model normal, important we normalize in model space\n\n   //pseudo random number\n\n   float occlusion = 0.0;\n   for(int c = 0; c < cycles; c++) {\n   vec3 random = normalize(pseudorandomVec3(position+float(c)));\n   for(int i=0; i < samples; i++) {\n\n      vec3 ray = radius * reflect(sample_sphere[i],random);\n      vec3 hemi_ray = position + sign(dot(ray,normal)) * ray; //model space\n      vec4 hemi_screen = projectionMatrix*vec4(hemi_ray,1.0);\n      hemi_screen /= hemi_screen.w;\n      \n      float occ_depth = texture2D(depthmap, clamp(hemi_screen.xy,0.0,1.0)).r;\n      float difference = hemi_screen.z - occ_depth;\n      \n      occlusion += step(0.0, difference) * (1.0-smoothstep(0.0, area, difference));\n   }\n   }\n   float ao = 1.0 - total_strength * occlusion * (1.0 / float(cycles*samples));\n   gl_FragDepthEXT = clamp(ao+base,0.0,1.0);\n\n}", vertexShader: "attribute vec2 vertexPosition;\nvarying highp vec2 vTexCoords;\nconst vec2 scale = vec2(0.5, 0.5);\n\nvoid main() {\n   vTexCoords  = vertexPosition * scale + scale; // scale vertex attribute to [0,1] range\n   gl_Position = vec4(vertexPosition, 0.0, 1.0);\n}\n        ", uniforms: { total_strength: { type: "f", value: 1 }, radius: { type: "f", value: 5 }, projinv: { type: "mat4", value: [] } } }, sphereimposter: tt, sphereimposteroutline: it, sprite: rt, stickimposter: at, stickimposteroutline: ot, volumetric: ht };
        function dt(t2) {
          let e2 = {};
          for (const r2 in t2) {
            e2[r2] = {}, e2[r2].type = t2[r2].type;
            var i2 = t2[r2].value;
            i2 instanceof b.Color ? e2[r2].value = i2.clone() : "number" == typeof i2 ? e2[r2].value = i2 : i2 instanceof Array ? e2[r2].value = [] : console.error("Error copying shader uniforms from ShaderLib: unknown type for uniform");
          }
          return e2;
        }
        const ut = { clone: dt };
        class Camera extends Object3D {
          constructor(t2 = 50, e2 = 1, i2 = 0.1, r2 = 2e3, s2 = false) {
            super(), this.projectionMatrix = new l.Matrix4(), this.projectionMatrixInverse = new l.Matrix4(), this.matrixWorldInverse = new l.Matrix4(), this.fov = t2, this.aspect = e2, this.near = i2, this.far = r2;
            var n2 = this.position.z;
            this.right = n2 * Math.tan(Math.PI / 180 * t2), this.left = -this.right, this.top = this.right / this.aspect, this.bottom = -this.top, this.ortho = !!s2, this.updateProjectionMatrix();
          }
          lookAt(t2) {
            this.matrix.lookAt(this.position, t2, this.up), this.rotationAutoUpdate && (false === this.useQuaternion && this.rotation instanceof l.Vector3 ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : console.error("Unimplemented math operation."));
          }
          updateProjectionMatrix() {
            this.ortho ? this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far) : this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
          }
        }
        class Fog {
          constructor(t2, e2 = 1, i2 = 1e3) {
            this.name = "", this.color = new b.Color(t2), this.near = e2, this.far = i2;
          }
          clone() {
            return new Fog(this.color.getHex(), this.near, this.far);
          }
        }
        class SpritePlugin {
          constructor() {
            this.sprite = { vertices: null, faces: null, vertexBuffer: null, elementBuffer: null, program: null, attributes: {}, uniforms: null };
          }
          init(t2) {
            this.gl = t2.context, this.renderer = t2, this.precision = t2.getPrecision(), this.sprite.vertices = new Float32Array(16), this.sprite.faces = new Uint16Array(6);
            var e2 = 0;
            this.sprite.vertices[e2++] = -1, this.sprite.vertices[e2++] = -1, this.sprite.vertices[e2++] = 0, this.sprite.vertices[e2++] = 0, this.sprite.vertices[e2++] = 1, this.sprite.vertices[e2++] = -1, this.sprite.vertices[e2++] = 1, this.sprite.vertices[e2++] = 0, this.sprite.vertices[e2++] = 1, this.sprite.vertices[e2++] = 1, this.sprite.vertices[e2++] = 1, this.sprite.vertices[e2++] = 1, this.sprite.vertices[e2++] = -1, this.sprite.vertices[e2++] = 1, this.sprite.vertices[e2++] = 0, this.sprite.vertices[e2++] = 1, e2 = 0, this.sprite.faces[e2++] = 0, this.sprite.faces[e2++] = 1, this.sprite.faces[e2++] = 2, this.sprite.faces[e2++] = 0, this.sprite.faces[e2++] = 2, this.sprite.faces[e2++] = 3, this.sprite.vertexBuffer = this.gl.createBuffer(), this.sprite.elementBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.sprite.vertexBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, this.sprite.vertices, this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.sprite.elementBuffer), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.sprite.faces, this.gl.STATIC_DRAW), this.sprite.program = this.createProgram(ct.sprite, this.precision || 1), this.sprite.attributes = {};
            const i2 = {};
            this.sprite.attributes.position = this.gl.getAttribLocation(this.sprite.program, "position"), this.sprite.attributes.uv = this.gl.getAttribLocation(this.sprite.program, "uv"), i2.uvOffset = this.gl.getUniformLocation(this.sprite.program, "uvOffset"), i2.uvScale = this.gl.getUniformLocation(this.sprite.program, "uvScale"), i2.rotation = this.gl.getUniformLocation(this.sprite.program, "rotation"), i2.scale = this.gl.getUniformLocation(this.sprite.program, "scale"), i2.alignment = this.gl.getUniformLocation(this.sprite.program, "alignment"), i2.color = this.gl.getUniformLocation(this.sprite.program, "color"), i2.map = this.gl.getUniformLocation(this.sprite.program, "map"), i2.opacity = this.gl.getUniformLocation(this.sprite.program, "opacity"), i2.useScreenCoordinates = this.gl.getUniformLocation(this.sprite.program, "useScreenCoordinates"), i2.screenPosition = this.gl.getUniformLocation(this.sprite.program, "screenPosition"), i2.modelViewMatrix = this.gl.getUniformLocation(this.sprite.program, "modelViewMatrix"), i2.projectionMatrix = this.gl.getUniformLocation(this.sprite.program, "projectionMatrix"), i2.fogType = this.gl.getUniformLocation(this.sprite.program, "fogType"), i2.fogDensity = this.gl.getUniformLocation(this.sprite.program, "fogDensity"), i2.fogNear = this.gl.getUniformLocation(this.sprite.program, "fogNear"), i2.fogFar = this.gl.getUniformLocation(this.sprite.program, "fogFar"), i2.fogColor = this.gl.getUniformLocation(this.sprite.program, "fogColor"), i2.alphaTest = this.gl.getUniformLocation(this.sprite.program, "alphaTest"), this.sprite.uniforms = i2;
          }
          render(t2, e2, i2, r2, s2) {
            var n2, a2, o2, l2, h2, c2, d2, u2, f2, p2;
            if (!this.gl) throw new Error("WebGLRenderer not initialized");
            let g2 = [];
            null === (n2 = null == t2 ? void 0 : t2.__webglSprites) || void 0 === n2 || n2.forEach(((t3) => {
              (s2 && 0 == t3.material.depthTest || !s2 && t3.material.depthTest) && g2.push(t3);
            }));
            let m2 = g2.length;
            if (!m2) return;
            const v2 = this.sprite.attributes, _2 = this.sprite.uniforms;
            if (!_2) throw new Error("Uniforms not defined");
            var y2 = 0.5 * i2, b2 = 0.5 * r2;
            this.gl.useProgram(this.sprite.program), this.gl.enableVertexAttribArray(v2.position), this.gl.enableVertexAttribArray(v2.uv), this.gl.disable(this.gl.CULL_FACE), this.gl.enable(this.gl.BLEND), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.sprite.vertexBuffer), this.gl.vertexAttribPointer(v2.position, 2, this.gl.FLOAT, false, 16, 0), this.gl.vertexAttribPointer(v2.uv, 2, this.gl.FLOAT, false, 16, 8), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.sprite.elementBuffer), this.gl.uniformMatrix4fv(_2.projectionMatrix, false, e2.projectionMatrix.elements), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.uniform1i(_2.map, 0);
            var x2, w2 = 0, A2 = 0, C2 = t2.fog;
            let S4, M2, z2, T2;
            C2 ? (this.gl.uniform3f(_2.fogColor, C2.color.r, C2.color.g, C2.color.b), this.gl.uniform1f(_2.fogNear, C2.near), this.gl.uniform1f(_2.fogFar, C2.far), this.gl.uniform1i(_2.fogType, 1), w2 = 1, A2 = 1) : (this.gl.uniform1i(_2.fogType, 0), w2 = 0, A2 = 0);
            let E2 = [];
            for (x2 = 0; x2 < m2; x2++) S4 = g2[x2], M2 = S4.material, M2 && (0 != M2.depthTest || s2) && S4.visible && 0 !== M2.opacity && (M2.useScreenCoordinates ? S4.z = -S4.position.z : (S4._modelViewMatrix.multiplyMatrices(e2.matrixWorldInverse, S4.matrixWorld), S4.z = -S4._modelViewMatrix.elements[14]));
            for (g2.sort(ft), x2 = 0; x2 < m2; x2++) if (S4 = g2[x2], M2 = S4.material, M2 && S4.visible && 0 !== M2.opacity && M2.map && M2.map.image && M2.map.image.width) {
              this.gl.uniform1f((null == _2 ? void 0 : _2.alphaTest) || null, M2.alphaTest);
              var L2 = M2.map.image.width, F2 = M2.map.image.height;
              E2[0] = L2 * this.renderer.devicePixelRatio / i2, E2[1] = F2 * this.renderer.devicePixelRatio / r2, true === M2.useScreenCoordinates ? (this.gl.uniform1i(_2.useScreenCoordinates, 1), this.gl.uniform3f(_2.screenPosition, (S4.position.x * this.renderer.devicePixelRatio - y2) / y2, (b2 - S4.position.y * this.renderer.devicePixelRatio) / b2, Math.max(0, Math.min(1, S4.position.z)))) : (this.gl.uniform1i(_2.useScreenCoordinates, 0), this.gl.uniformMatrix4fv(_2.modelViewMatrix, false, S4._modelViewMatrix.elements)), T2 = t2.fog && M2.fog ? A2 : 0, w2 !== T2 && (this.gl.uniform1i(_2.fogType, T2), w2 = T2), z2 = 1 / (M2.scaleByViewport ? r2 : 1), E2[0] *= z2 * S4.scale.x, E2[1] *= z2 * S4.scale.y;
              let e3 = null === (a2 = null == M2 ? void 0 : M2.alignment) || void 0 === a2 ? void 0 : a2.x, s3 = null === (o2 = null == M2 ? void 0 : M2.alignment) || void 0 === o2 ? void 0 : o2.y;
              M2.screenOffset && (e3 = (e3 || 0) + 2 * M2.screenOffset.x / L2, s3 = (s3 || 0) + 2 * M2.screenOffset.y / F2), this.gl.uniform2f(_2.uvScale, (null === (l2 = null == M2 ? void 0 : M2.uvScale) || void 0 === l2 ? void 0 : l2.x) || 1, (null === (h2 = null == M2 ? void 0 : M2.uvScale) || void 0 === h2 ? void 0 : h2.y) || 1), this.gl.uniform2f(_2.uvOffset, (null === (c2 = null == M2 ? void 0 : M2.uvOffset) || void 0 === c2 ? void 0 : c2.x) || 0, (null === (d2 = null == M2 ? void 0 : M2.uvOffset) || void 0 === d2 ? void 0 : d2.y) || 0), this.gl.uniform2f(_2.alignment, e3 || 0, s3 || 0), this.gl.uniform1f(_2.opacity, M2.opacity), this.gl.uniform3f(_2.color, (null === (u2 = null == M2 ? void 0 : M2.color) || void 0 === u2 ? void 0 : u2.r) || 0, (null === (f2 = null == M2 ? void 0 : M2.color) || void 0 === f2 ? void 0 : f2.g) || 0, (null === (p2 = null == M2 ? void 0 : M2.color) || void 0 === p2 ? void 0 : p2.b) || 0), this.gl.uniform1f(_2.rotation, S4.rotation), this.gl.uniform2fv(_2.scale, E2), this.renderer.setDepthTest(M2.depthTest), this.renderer.setDepthWrite(M2.depthWrite), this.renderer.setTexture(M2.map, 0), this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0);
            }
            this.gl.enable(this.gl.CULL_FACE);
          }
          createProgram(t2, e2) {
            if (!this.gl) throw new Error("WebGL Rendering context not found");
            var i2 = this.gl.createProgram();
            if (!i2) throw new Error("Error creating webgl program");
            var r2 = this.gl.createShader(this.gl.FRAGMENT_SHADER), s2 = this.gl.createShader(this.gl.VERTEX_SHADER);
            if (!r2) throw new Error("Unable to create fragment shader SpritePlugin.createProgram");
            if (!s2) throw new Error("Unable to create vertex shader SpritePlugin.createProgram");
            var n2 = "precision " + e2 + " float;\n";
            if (this.gl.shaderSource(r2, n2 + t2.fragmentShader), this.gl.shaderSource(s2, n2 + t2.vertexShader), this.gl.compileShader(r2), this.gl.compileShader(s2), !this.gl.getShaderParameter(r2, this.gl.COMPILE_STATUS) || !this.gl.getShaderParameter(s2, this.gl.COMPILE_STATUS)) throw new Error(`Error compiling shader: 
      ${this.gl.getShaderInfoLog(r2)} 
      ${this.gl.getShaderInfoLog(s2)}`);
            return this.gl.attachShader(i2, r2), this.gl.attachShader(i2, s2), this.gl.linkProgram(i2), this.gl.getProgramParameter(i2, this.gl.LINK_STATUS) || console.error("Could not initialize shader"), i2;
          }
        }
        function ft(t2, e2) {
          return t2.z !== e2.z ? e2.z - t2.z : e2.id - t2.id;
        }
        var pt = null, gt = null;
        class Renderer {
          constructor(t2) {
            this.context = null, this.devicePixelRatio = 1, this.sortObjects = true, this.autoUpdateObjects = true, this.autoUpdateScene = true, this.info = { memory: { programs: 0, geometries: 0, textures: 0 }, render: { calls: 0, vertices: 0, faces: 0, points: 0 } }, this._offscreen = null, this._bitmap = null, this._programs = [], this._programs_counter = 0, this._webglversion = 1, this._currentProgram = null, this._currentMaterialId = -1, this._currentGeometryGroupHash = null, this._currentCamera = null, this._geometryGroupCounter = 0, this._oldDoubleSided = -1, this._oldFlipSided = -1, this._oldDepthTest = -1, this._oldDepthWrite = -1, this._oldPolygonOffset = null, this._oldLineWidth = null, this._viewportWidth = 0, this._viewportHeight = 0, this._currentWidth = 0, this._currentHeight = 0, this._enabledAttributes = {}, this._vector3 = new l.Vector3(), this._worldInverse = new l.Matrix4(), this._projInverse = new l.Matrix4(), this._textureMatrix = new l.Matrix4(), this._fullProjModelMatrix = new l.Matrix4(), this._fullProjModelMatrixInv = new l.Matrix4(), this._direction = new l.Vector3(), this._lightsNeedUpdate = true, this._lights = { ambient: [0, 0, 0], directional: { length: 0, colors: [], positions: [] }, point: { length: 0, colors: [], positions: [], distances: [] }, spot: { length: 0, colors: [], positions: [], distances: [], directions: [], anglesCos: [], exponents: [] }, hemi: { length: 0, skyColors: [], groundColors: [], positions: [] } }, this.sprites = new SpritePlugin(), this._screenshader = null, this._AOshader = null, this._blurshader = null, this._vertexattribpos = null, this._aovertexattribpos = null, this._blurvertexattribpos = null, this._screenQuadVBO = null, this._fb = null, this._targetTexture = null, this._depthTexture = null, this._shadingTexture = null, this._scratchTexture = null, this._AOstrength = 1, this._AOradius = 5, this.SHADE_TEXTURE = 3, t2 = t2 || {}, this.row = t2.row, this.col = t2.col, this.rows = t2.rows, this.cols = t2.cols, this._canvas = void 0 !== t2.canvas ? t2.canvas : document.createElement("canvas"), this._precision = void 0 !== t2.precision ? t2.precision : "highp", this._alpha = void 0 === t2.alpha || t2.alpha, this._premultipliedAlpha = void 0 === t2.premultipliedAlpha || t2.premultipliedAlpha, this._antialias = void 0 !== t2.antialias && t2.antialias, this._preserveDrawingBuffer = void 0 !== t2.preserveDrawingBuffer && t2.preserveDrawingBuffer, this._clearColor = void 0 !== t2.clearColor ? new b.Color(t2.clearColor) : new b.Color(0), this._clearAlpha = void 0 !== t2.clearAlpha ? t2.clearAlpha : 0, this._outlineMaterial = new MeshOutlineMaterial(t2.outline), this._outlineSphereImposterMaterial = new SphereImposterOutlineMaterial(t2.outline), this._outlineStickImposterMaterial = new StickImposterOutlineMaterial(t2.outline), this._outlineEnabled = !!t2.outline, this._AOEnabled = !!t2.ambientOcclusion, t2.ambientOcclusion && void 0 !== t2.ambientOcclusion.strength && (this._AOstrength = parseFloat(t2.ambientOcclusion.strength)), 0 == this._AOstrength && (this._AOEnabled = false), t2.ambientOcclusion && void 0 !== t2.ambientOcclusion.radius && (this._AOradius = parseFloat(t2.ambientOcclusion.radius)), this.domElement = this._canvas, this._canvas.id = t2.id, 0 != t2.containerWidth && 0 != t2.containerHeight && (this.initGL(), this.setDefaultGLState(), this.context = this._gl, this.isWebGL1() ? this._extInstanced = this._gl.getExtension("ANGLE_instanced_arrays") : this._extInstanced = { vertexAttribDivisorANGLE: this._gl.vertexAttribDivisor.bind(this._gl), drawElementsInstancedANGLE: this._gl.drawElementsInstanced.bind(this._gl) }, this._extFragDepth = this._gl.getExtension("EXT_frag_depth"), this._extFloatLinear = this._gl.getExtension("OES_texture_float_linear"), this._extColorBufferFloat = this._gl.getExtension("EXT_color_buffer_float"), this.sprites.init(this));
          }
          supportedExtensions() {
            return { supportsAIA: Boolean(this._extInstanced), supportsImposters: Boolean(this._extFragDepth) || !this.isWebGL1(), regen: false };
          }
          getContext() {
            return this._gl;
          }
          getCanvas() {
            return this._canvas;
          }
          isLost() {
            return null == this._gl || this._gl.isContextLost();
          }
          getPrecision() {
            return this._precision;
          }
          setClearColorHex(t2, e2) {
            this._clearColor.setHex(t2), this._clearAlpha = e2, this.isLost() || this._gl.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearAlpha);
          }
          enableOutline(t2) {
            this._outlineMaterial = new MeshOutlineMaterial(t2), this._outlineSphereImposterMaterial = new SphereImposterOutlineMaterial(t2), this._outlineStickImposterMaterial = new StickImposterOutlineMaterial(t2), this._outlineEnabled = true;
          }
          disableOutline() {
            this._outlineEnabled = false;
          }
          enableAmbientOcclusion(t2) {
            t2 && (t2.strength && (this._AOstrength = t2.strength), t2.scale && (this._AOradius = t2.scale)), this._AOEnabled = this._AOstrength > 0;
          }
          disableAmbientOcclusion() {
            this._AOEnabled = false;
          }
          setViewport() {
            if (this._offscreen && (this._offscreen.width = this._canvas.width, this._offscreen.height = this._canvas.height), null != this.rows && null != this.cols && null != this.row && null != this.col) {
              var t2 = this._canvas.width / this.cols, e2 = this._canvas.height / this.rows;
              this._viewportWidth = t2, this._viewportHeight = e2, this.isLost() || (this._gl.enable(this._gl.SCISSOR_TEST), this._gl.scissor(t2 * this.col, e2 * this.row, t2, e2), this._gl.viewport(t2 * this.col, e2 * this.row, t2, e2));
            }
          }
          setSize(t2, e2) {
            if (this.devicePixelRatio = void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1, this._antialias && this.devicePixelRatio < 2 && (this.devicePixelRatio *= 2), null != this.rows && null != this.cols && null != this.row && null != this.col) {
              var i2 = t2 / this.cols, r2 = e2 / this.rows;
              this._canvas.width = t2 * this.devicePixelRatio, this._canvas.height = e2 * this.devicePixelRatio, this._viewportWidth = i2 * this.devicePixelRatio, this._viewportHeight = r2 * this.devicePixelRatio, this._canvas.style.width = t2 + "px", this._canvas.style.height = e2 + "px", this.setViewport();
            } else this._viewportWidth = this._canvas.width = t2 * this.devicePixelRatio, this._viewportHeight = this._canvas.height = e2 * this.devicePixelRatio, this._canvas.style.width = t2 + "px", this._canvas.style.height = e2 + "px", this.isLost() || this._gl.viewport(0, 0, this._gl.drawingBufferWidth, this._gl.drawingBufferHeight);
            this.initFrameBuffer();
          }
          clear(t2, e2, i2) {
            var r2 = 0;
            (void 0 === t2 || t2) && (r2 |= this._gl.COLOR_BUFFER_BIT), (void 0 === e2 || e2) && (r2 |= this._gl.DEPTH_BUFFER_BIT), (void 0 === i2 || i2) && (r2 |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(r2);
          }
          setMaterialFaces(t2, e2) {
            var i2 = t2.side === a, r2 = t2.side === n;
            t2.imposter || (r2 = e2 ? !r2 : r2), this._oldDoubleSided !== i2 && (i2 ? this._gl.disable(this._gl.CULL_FACE) : this._gl.enable(this._gl.CULL_FACE), this._oldDoubleSided = i2), this._oldFlipSided !== r2 && (r2 ? this._gl.frontFace(this._gl.CW) : this._gl.frontFace(this._gl.CCW), this._oldFlipSided = r2), this._gl.cullFace(this._gl.BACK);
          }
          setDepthTest(t2) {
            this._oldDepthTest !== t2 && (t2 ? this._gl.enable(this._gl.DEPTH_TEST) : this._gl.disable(this._gl.DEPTH_TEST), this._oldDepthTest = t2);
          }
          setDepthWrite(t2) {
            this._oldDepthWrite !== t2 && (this._gl.depthMask(t2), this._oldDepthWrite = t2);
          }
          setBlending(t2) {
            t2 ? (this._gl.enable(this._gl.BLEND), this._gl.blendEquationSeparate(this._gl.FUNC_ADD, this._gl.FUNC_ADD), this._gl.blendFuncSeparate(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE_MINUS_SRC_ALPHA)) : this._gl.disable(this._gl.BLEND);
          }
          initMaterial(t2, e2, i2, r2) {
            var s2, n2;
            if (t2.addEventListener("dispose", this.onMaterialDispose.bind(this)), n2 = t2.shaderID) {
              var a2 = ct[n2];
              t2.vertexShader = a2.vertexShader, t2.fragmentShader = a2.fragmentShader, t2.uniforms = ut.clone(a2.uniforms), t2.shaded && t2.makeShaded(this.SHADE_TEXTURE);
            }
            s2 = { wireframe: t2.wireframe, fragdepth: t2.imposter, volumetric: t2.volumetric, shaded: t2.shaded }, t2.program = this.buildProgram(t2.fragmentShader, t2.vertexShader, t2.uniforms, s2);
          }
          renderBuffer(t2, e2, i2, r2, s2, n2) {
            var a2, o2;
            if (r2.visible && (a2 = this.setProgram(t2, e2, i2, r2, n2, this))) {
              o2 = a2.attributes;
              var l2, h2, c2 = false, d2 = r2.wireframe ? 1 : 0, u2 = 16777215 * s2.id + 2 * a2.id + d2;
              if (u2 !== this._currentGeometryGroupHash && (this._currentGeometryGroupHash = u2, c2 = true), c2 && (this.disableAttributes(), o2.position >= 0 && (this._gl.bindBuffer(this._gl.ARRAY_BUFFER, s2.__webglVertexBuffer), this.enableAttribute(o2.position), this._gl.vertexAttribPointer(o2.position, 3, this._gl.FLOAT, false, 0, 0)), o2.color >= 0 && (this._gl.bindBuffer(this._gl.ARRAY_BUFFER, s2.__webglColorBuffer), this.enableAttribute(o2.color), this._gl.vertexAttribPointer(o2.color, 3, this._gl.FLOAT, false, 0, 0)), o2.normal >= 0 && (this._gl.bindBuffer(this._gl.ARRAY_BUFFER, s2.__webglNormalBuffer), this.enableAttribute(o2.normal), this._gl.vertexAttribPointer(o2.normal, 3, this._gl.FLOAT, false, 0, 0)), o2.offset >= 0 && (this._gl.bindBuffer(this._gl.ARRAY_BUFFER, s2.__webglOffsetBuffer), this.enableAttribute(o2.offset), this._gl.vertexAttribPointer(o2.offset, 3, this._gl.FLOAT, false, 0, 0)), o2.radius >= 0 && (this._gl.bindBuffer(this._gl.ARRAY_BUFFER, s2.__webglRadiusBuffer), this.enableAttribute(o2.radius), this._gl.vertexAttribPointer(o2.radius, 1, this._gl.FLOAT, false, 0, 0))), n2 instanceof Mesh) {
                if ("instanced" === r2.shaderID) {
                  var f2 = r2.sphere.geometryGroups[0];
                  c2 && (this._gl.bindBuffer(this._gl.ARRAY_BUFFER, s2.__webglVertexBuffer), this._gl.bufferData(this._gl.ARRAY_BUFFER, f2.vertexArray, this._gl.STATIC_DRAW), this._gl.bindBuffer(this._gl.ARRAY_BUFFER, s2.__webglNormalBuffer), this._gl.bufferData(this._gl.ARRAY_BUFFER, f2.normalArray, this._gl.STATIC_DRAW), this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, s2.__webglFaceBuffer), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, f2.faceArray, this._gl.STATIC_DRAW)), l2 = f2.faceidx, this._extInstanced.vertexAttribDivisorANGLE(o2.offset, 1), this._extInstanced.vertexAttribDivisorANGLE(o2.radius, 1), this._extInstanced.vertexAttribDivisorANGLE(o2.color, 1), this._extInstanced.drawElementsInstancedANGLE(this._gl.TRIANGLES, l2, this._gl.UNSIGNED_SHORT, 0, s2.radiusArray.length), this._extInstanced.vertexAttribDivisorANGLE(o2.offset, 0), this._extInstanced.vertexAttribDivisorANGLE(o2.radius, 0), this._extInstanced.vertexAttribDivisorANGLE(o2.color, 0);
                } else r2.wireframe ? (h2 = s2.lineidx, this.setLineWidth(r2.wireframeLinewidth), c2 && this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, s2.__webglLineBuffer), this._gl.drawElements(this._gl.LINES, h2, this._gl.UNSIGNED_SHORT, 0)) : (l2 = s2.faceidx, c2 && this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, s2.__webglFaceBuffer), this._gl.drawElements(this._gl.TRIANGLES, l2, this._gl.UNSIGNED_SHORT, 0));
                this.info.render.calls++, this.info.render.vertices += l2, this.info.render.faces += l2 / 3;
              } else n2 instanceof Line && (h2 = s2.vertices, this.setLineWidth(r2.linewidth), this._gl.drawArrays(this._gl.LINES, 0, h2), this.info.render.calls++);
            }
          }
          clearShading() {
            this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.TEXTURE_2D, this._shadingTexture, 0), this.clear(false, true, false), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.TEXTURE_2D, this._depthTexture, 0);
          }
          setShading(t2, e2, i2) {
            let r2 = t2.__lights, s2 = t2.fog, n2 = [];
            for (let e3 = 0, r3 = t2.__webglObjects.length; e3 < r3; e3++) {
              let r4 = t2.__webglObjects[e3];
              r4.render && r4[i2] && n2.push(r4);
            }
            if (0 == n2.length) return;
            this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.TEXTURE_2D, this._shadingTexture, 0), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, null, 0), this.renderObjects(t2.__webglObjects, true, i2 + "Depth", e2, r2, s2, false), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.TEXTURE_2D, this._scratchTexture, 0), this.clear(false, true, false), this._gl.useProgram(this._AOshader), this._currentProgram = this._AOshader, this.setDepthTest(-1), this.setDepthWrite(-1);
            let a2 = this._AOshader.uniforms;
            this._gl.uniform1f(a2.total_strength, this._AOstrength), this._gl.uniform1f(a2.radius, this._AOradius), this._fullProjModelMatrix = new l.Matrix4(), this._fullProjModelMatrixInv = new l.Matrix4();
            let o2 = n2[0].object;
            this._fullProjModelMatrix.multiplyMatrices(e2.projectionMatrix, o2._modelViewMatrix), this._fullProjModelMatrixInv.getInverse(this._fullProjModelMatrix), this._gl.uniformMatrix4fv(a2.projectionMatrix, false, this._fullProjModelMatrix.elements), this._gl.uniformMatrix4fv(a2.projinv, false, this._fullProjModelMatrixInv.elements), this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._screenQuadVBO), this._gl.enableVertexAttribArray(this._aovertexattribpos), this._gl.vertexAttribPointer(this._aovertexattribpos, 2, this._gl.FLOAT, false, 0, 0), this._gl.activeTexture(this._gl.TEXTURE0), this._gl.bindTexture(this._gl.TEXTURE_2D, this._shadingTexture), this._gl.drawArrays(this._gl.TRIANGLES, 0, 6), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.TEXTURE_2D, this._shadingTexture, 0), this.clear(false, true, false), this._gl.useProgram(this._blurshader), this._currentProgram = this._blurshader, this.setDepthTest(-1), this.setDepthWrite(-1), this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._screenQuadVBO), this._gl.enableVertexAttribArray(this._blurvertexattribpos), this._gl.vertexAttribPointer(this._blurvertexattribpos, 2, this._gl.FLOAT, false, 0, 0), this._gl.activeTexture(this._gl.TEXTURE0), this._gl.bindTexture(this._gl.TEXTURE_2D, this._scratchTexture), this._gl.drawArrays(this._gl.TRIANGLES, 0, 6), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, this._targetTexture, 0), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.TEXTURE_2D, this._depthTexture, 0);
          }
          render(t2, e2) {
            if (e2 instanceof Camera == false) return void console.error("Renderer.render: camera is not an instance of Camera.");
            var i2, r2, s2, n2, a2, o2 = t2.__lights, l2 = t2.fog;
            if (this._currentMaterialId = -1, this._lightsNeedUpdate = true, this.autoUpdateScene && t2.updateMatrixWorld(), void 0 === e2.parent && e2.updateMatrixWorld(), e2.matrixWorldInverse.getInverse(e2.matrixWorld), this.isLost()) return;
            this.autoUpdateObjects && this.initWebGLObjects(t2), this.info.render.calls = 0, this.info.render.vertices = 0, this.info.render.faces = 0, this.info.render.points = 0, this._currentWidth = this._viewportWidth, this._currentHeight = this._viewportHeight, this.setViewport(), this.setFrameBuffer(), this._gl.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearAlpha), this.clear(true, true, true), a2 = t2.__webglObjects;
            let h2 = false, c2 = this._AOEnabled;
            for (i2 = 0, r2 = a2.length; i2 < r2; i2++) n2 = (s2 = a2[i2]).object, s2.render = false, n2.visible && (this.setupMatrices(n2, e2), this.unrollBufferMaterial(s2), s2.render = true, s2.volumetric && (h2 = true), s2.hasAO && (c2 = true));
            if (this.setBlending(false), c2 && this.setShading(t2, e2, "opaque"), this.renderObjects(t2.__webglObjects, true, "opaque", e2, o2, l2, false), c2 && this.clearShading(), this.renderSprites(t2, e2, false), this.renderObjects(t2.__webglObjects, true, "transparentDepth", e2, o2, l2, true), this.renderObjects(t2.__webglObjects, false, "transparent", e2, o2, l2, true), h2 && this._fb && (this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.TEXTURE_2D, null, 0), this.renderObjects(t2.__webglObjects, false, "volumetric", e2, o2, l2, true)), this.renderFrameBuffertoScreen(), this.setDepthTest(true), this.setDepthWrite(true), this.renderSprites(t2, e2, true), this._bitmap) {
              const t3 = this._offscreen.transferToImageBitmap();
              this._bitmap.transferFromImageBitmap(t3), t3.close();
            }
          }
          setFrameBuffer() {
            if (this.isWebGL1() || !this._fb) return;
            let t2 = this._viewportWidth, e2 = this._viewportHeight;
            this._gl.enable(this._gl.SCISSOR_TEST), this._gl.scissor(0, 0, t2, e2), this._gl.viewport(0, 0, t2, e2), this._gl.bindTexture(this._gl.TEXTURE_2D, this._targetTexture), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, t2, e2, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, null), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE), this._gl.bindTexture(this._gl.TEXTURE_2D, this._depthTexture), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.DEPTH_COMPONENT32F, t2, e2, 0, this._gl.DEPTH_COMPONENT, this._gl.FLOAT, null), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.NEAREST), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.NEAREST), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE), this._shadingTexture && (this._gl.deleteTexture(this._shadingTexture), this._shadingTexture = this._gl.createTexture(), this._gl.bindTexture(this._gl.TEXTURE_2D, this._shadingTexture), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.DEPTH_COMPONENT32F, t2, e2, 0, this._gl.DEPTH_COMPONENT, this._gl.FLOAT, null), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.NEAREST), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.NEAREST), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE), this._gl.deleteTexture(this._scratchTexture), this._scratchTexture = this._gl.createTexture(), this._gl.bindTexture(this._gl.TEXTURE_2D, this._scratchTexture), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.DEPTH_COMPONENT32F, t2, e2, 0, this._gl.DEPTH_COMPONENT, this._gl.FLOAT, null), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.NEAREST), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.NEAREST), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE)), this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._fb), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, this._targetTexture, 0), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.TEXTURE_2D, this._shadingTexture, 0), this._gl.clearDepth(1), this._gl.clear(this._gl.DEPTH_BUFFER_BIT), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.TEXTURE_2D, this._depthTexture, 0);
          }
          initFrameBuffer() {
            if (this.isWebGL1()) return;
            let t2 = this._viewportWidth, e2 = this._viewportHeight;
            this._gl.enable(this._gl.SCISSOR_TEST), this._gl.scissor(0, 0, t2, e2), this._gl.viewport(0, 0, t2, e2), this._targetTexture = this._gl.createTexture(), this._depthTexture = this._gl.createTexture(), this._shadingTexture = this._gl.createTexture(), this._scratchTexture = this._gl.createTexture(), this._fb = this._gl.createFramebuffer();
            var i2 = this._antialias ? ct.screenaa : ct.screen;
            this._screenshader = this.buildProgram(i2.fragmentShader, i2.vertexShader, i2.uniforms, {}), this._vertexattribpos = this._gl.getAttribLocation(this._screenshader, "vertexPosition");
            this._screenQuadVBO = this._gl.createBuffer(), this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._screenQuadVBO), this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1]), this._gl.STATIC_DRAW);
            let r2 = ct.ssao;
            this._AOshader = this.buildProgram(r2.fragmentShader, r2.vertexShader, r2.uniforms, {}), this._aovertexattribpos = this._gl.getAttribLocation(this._AOshader, "vertexPosition");
            let s2 = ct.blur;
            this._blurshader = this.buildProgram(s2.fragmentShader, s2.vertexShader, s2.uniforms, {}), this._blurvertexattribpos = this._gl.getAttribLocation(this._blurshader, "vertexPosition");
          }
          renderFrameBuffertoScreen() {
            this.isWebGL1() || null === this._fb || (this.setViewport(), this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), this._gl.frontFace(this._gl.CCW), this._gl.cullFace(this._gl.BACK), this._gl.useProgram(this._screenshader), this._currentProgram = this._screenshader, this.setDepthTest(-1), this.setDepthWrite(-1), this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._screenQuadVBO), this._gl.enableVertexAttribArray(this._vertexattribpos), this._gl.vertexAttribPointer(this._vertexattribpos, 2, this._gl.FLOAT, false, 0, 0), this._gl.activeTexture(this._gl.TEXTURE0), this._gl.bindTexture(this._gl.TEXTURE_2D, this._targetTexture), this._gl.drawArrays(this._gl.TRIANGLES, 0, 6));
          }
          initWebGLObjects(t2) {
            if (t2.__webglObjects || (t2.__webglObjects = [], t2.__webglObjectsImmediate = [], t2.__webglSprites = [], t2.__webglFlares = []), t2.__objectsAdded.length) {
              for (; t2.__objectsAdded.length; ) this.addObject(t2.__objectsAdded[0], t2), t2.__objectsAdded.splice(0, 1);
              this._currentGeometryGroupHash = -1;
            }
            for (; t2.__objectsRemoved.length; ) this.removeObject(t2.__objectsRemoved[0], t2), t2.__objectsRemoved.splice(0, 1);
            for (var e2 = 0, i2 = t2.__webglObjects.length; e2 < i2; e2++) this.updateObject(t2.__webglObjects[e2].object);
          }
          getYRatio() {
            return void 0 !== this.rows && void 0 !== this.row ? this.rows : 1;
          }
          getXRatio() {
            return void 0 !== this.cols && void 0 !== this.col ? this.cols : 1;
          }
          getAspect(t2, e2) {
            null != t2 && null != e2 || (t2 = this._canvas.width, e2 = this._canvas.height);
            var i2 = t2 / e2;
            null != this.rows && null != this.cols && null != this.row && null != this.col && (i2 = t2 / this.cols / (e2 / this.rows));
            return i2;
          }
          setTexture(t2, e2, i2) {
            if (t2.needsUpdate) {
              t2.__webglInit || (t2.__webglInit = true, t2.addEventListener("dispose", this.onTextureDispose.bind(this)), t2.__webglTexture = this._gl.createTexture(), this.info.memory.textures++), this._gl.activeTexture(this._gl.TEXTURE0 + e2);
              var r2 = i2 ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D;
              this._gl.bindTexture(r2, t2.__webglTexture), this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, t2.flipY), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t2.premultiplyAlpha), this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, t2.unpackAlignment), this._gl.pixelStorei(this._gl.PACK_ALIGNMENT, t2.unpackAlignment);
              var s2 = this.paramToGL(t2.format), n2 = this.paramToGL(t2.type);
              if (i2) this.setTextureParameters(this._gl.TEXTURE_3D, t2), this._gl.texImage3D(this._gl.TEXTURE_3D, 0, this._gl.R32F, t2.image.size.z, t2.image.size.y, t2.image.size.x, 0, this._gl.RED, this._gl.FLOAT, t2.image.data);
              else {
                var a2 = t2.image, o2 = a2.width, l2 = a2.height;
                void 0 === o2 && (o2 = a2.length, s2 == this._gl.RGBA && (o2 /= 4), l2 = 1), this.setTextureParameters(this._gl.TEXTURE_2D, t2), this.isWebGL1() ? this._gl.texImage2D(this._gl.TEXTURE_2D, 0, s2, s2, n2, t2.image) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, s2, o2, l2, 0, s2, n2, t2.image);
              }
              t2.needsUpdate = false, t2.onUpdate && t2.onUpdate();
            } else this._gl.activeTexture(this._gl.TEXTURE0 + e2), i2 ? this._gl.bindTexture(this._gl.TEXTURE_3D, t2.__webglTexture) : this._gl.bindTexture(this._gl.TEXTURE_2D, t2.__webglTexture);
          }
          supportsVolumetric() {
            return !this.isWebGL1();
          }
          enableAttribute(t2) {
            this._enabledAttributes[t2] || (this._gl.enableVertexAttribArray(t2), this._enabledAttributes[t2] = true);
          }
          disableAttributes() {
            for (let t2 in this._enabledAttributes) this._enabledAttributes[t2] && (this._gl.disableVertexAttribArray(t2), this._enabledAttributes[t2] = false);
          }
          setPolygonOffset(t2, e2, i2) {
            this._oldPolygonOffset !== t2 && (t2 ? this._gl.enable(this._gl.POLYGON_OFFSET_FILL) : this._gl.disable(this._gl.POLYGON_OFFSET_FILL));
          }
          setLineWidth(t2) {
            t2 !== this._oldLineWidth && (this._gl.lineWidth(t2), this._oldLineWidth = t2);
          }
          deallocateGeometry(t2) {
            if (t2.__webglInit = void 0, void 0 !== t2.__webglVertexBuffer && this._gl.deleteBuffer(t2.__webglVertexBuffer), void 0 !== t2.__webglColorBuffer && this._gl.deleteBuffer(t2.__webglColorBuffer), void 0 !== t2.geometryGroups) for (var e2 = 0, i2 = t2.groups; e2 < i2; e2++) {
              var r2 = t2.geometryGroups[e2];
              void 0 !== r2.__webglVertexBuffer && this._gl.deleteBuffer(r2.__webglVertexBuffer), void 0 !== r2.__webglColorBuffer && this._gl.deleteBuffer(r2.__webglColorBuffer), void 0 !== r2.__webglNormalBuffer && this._gl.deleteBuffer(r2.__webglNormalBuffer), void 0 !== r2.__webglFaceBuffer && this._gl.deleteBuffer(r2.__webglFaceBuffer), void 0 !== r2.__webglLineBuffer && this._gl.deleteBuffer(r2.__webglLineBuffer);
            }
          }
          deallocateMaterial(t2) {
            var e2 = t2.program;
            if (void 0 !== e2) {
              var i2, r2, s2;
              t2.program = void 0;
              var n2 = false;
              for (i2 = 0, r2 = this._programs.length; i2 < r2; i2++) if ((s2 = this._programs[i2]).program === e2) {
                s2.usedTimes--, 0 === s2.usedTimes && (n2 = true);
                break;
              }
              if (true === n2) {
                var a2 = [];
                for (i2 = 0, r2 = this._programs.length; i2 < r2; i2++) (s2 = this._programs[i2]).program !== e2 && a2.push(s2);
                this._programs = a2, this._gl.deleteProgram(e2), this.info.memory.programs--;
              }
            }
          }
          deallocateTexture(t2) {
            if (t2.image && t2.image.__webglTextureCube) this._gl.deleteTexture(t2.image.__webglTextureCube);
            else {
              if (!t2.__webglInit) return;
              t2.__webglInit = false, this._gl.deleteTexture(t2.__webglTexture);
            }
          }
          onGeometryDispose(t2) {
            var e2 = t2.target;
            e2.removeEventListener("dispose", this.onGeometryDispose), this.deallocateGeometry(e2), this.info.memory.geometries--;
          }
          onTextureDispose(t2) {
            var e2 = t2.target;
            e2.removeEventListener("dispose", this.onTextureDispose), this.deallocateTexture(e2), this.info.memory.textures--;
          }
          onMaterialDispose(t2) {
            var e2 = t2.target;
            e2.removeEventListener("dispose", this.onMaterialDispose), this.deallocateMaterial(e2);
          }
          getShader(t2, e2) {
            var i2;
            return this.isWebGL1() || e2.startsWith("#version") || (e2 = e2.replace(/gl_FragDepthEXT/g, "gl_FragDepth"), e2 = "#version 300 es\n" + (e2 = (e2 = (e2 = (e2 = (e2 = "fragment" == t2 ? e2.replace(/varying/g, "in") : e2.replace(/varying/g, "out")).replace(/attribute/g, "in")).replace(/texture2D/g, "texture")).replace(/\/\/DEFINEFRAGCOLOR/g, "out vec4 glFragColor;")).replace(/gl_FragColor/g, "glFragColor"))), "fragment" === t2 ? i2 = this._gl.createShader(this._gl.FRAGMENT_SHADER) : "vertex" === t2 && (i2 = this._gl.createShader(this._gl.VERTEX_SHADER)), null == i2 ? null : (this._gl.shaderSource(i2, e2), this._gl.compileShader(i2), this._gl.getShaderParameter(i2, this._gl.COMPILE_STATUS) ? i2 : (console.error(this._gl.getShaderInfoLog(i2)), console.error("could not initialize shader"), null));
          }
          buildProgram(t2, e2, i2, r2) {
            var s2, n2, a2, o2, l2 = [];
            for (s2 in l2.push(t2), l2.push(e2), r2) l2.push(s2), l2.push(r2[s2]);
            for (o2 = l2.join(), s2 = 0, n2 = this._programs.length; s2 < n2; s2++) {
              var h2 = this._programs[s2];
              if (h2.code === o2) return h2.usedTimes++, h2.program;
            }
            if (this.isWebGL1() && r2.volumetric) throw new Error("Volumetric rendering requires webgl2 which is not supported by your hardware.");
            if (null == (a2 = this._gl.createProgram())) return null;
            var c2, d2, u2, f2 = "precision " + this._precision + " float;", p2 = [r2.volumetric ? "#version 300 es" : "", f2].join("\n"), g2 = [r2.volumetric ? "#version 300 es" : "", r2.fragdepth && this.isWebGL1() ? "#extension GL_EXT_frag_depth: enable" : "", r2.shaded ? "#define SHADED 1" : "", r2.wireframe ? "#define WIREFRAME 1" : "", f2].join("\n"), m2 = this.getShader("fragment", g2 + t2), v2 = this.getShader("vertex", p2 + e2);
            for (d2 in null != v2 && this._gl.attachShader(a2, v2), null != m2 && this._gl.attachShader(a2, m2), this._gl.linkProgram(a2), this._gl.getProgramParameter(a2, this._gl.LINK_STATUS) || console.error("Could not initialize shader"), a2.uniforms = {}, a2.attributes = {}, c2 = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "vWidth", "vHeight"], i2) c2.push(d2);
            for (u2 = 0; u2 < c2.length; u2++) {
              var _2 = c2[u2];
              a2.uniforms[_2] = this._gl.getUniformLocation(a2, _2);
            }
            for (c2 = ["position", "normal", "color", "lineDistance", "offset", "radius"], u2 = 0; u2 < c2.length; u2++) {
              var y2 = c2[u2];
              a2.attributes[y2] = this._gl.getAttribLocation(a2, y2);
            }
            return a2.id = this._programs_counter++, this._programs.push({ program: a2, code: o2, usedTimes: 1 }), this.info.memory.programs = this._programs.length, a2;
          }
          setProgram(t2, e2, i2, r2, s2, n2) {
            if (r2.needsUpdate && (r2.program && this.deallocateMaterial(r2), this.initMaterial(r2, e2, i2, s2), r2.needsUpdate = false), null == r2.program) return null;
            var a2 = false, o2 = r2.program, l2 = o2.uniforms, h2 = r2.uniforms;
            if (o2 != this._currentProgram && (this._gl.useProgram(o2), this._currentProgram = o2, a2 = true), r2.id != this._currentMaterialId && (this._currentMaterialId = r2.id, a2 = true), t2 != this._currentCamera && (this._currentCamera = t2, a2 = true), l2.projectionMatrix && this._gl.uniformMatrix4fv(l2.projectionMatrix, false, t2.projectionMatrix.elements), l2.modelViewMatrix && this._gl.uniformMatrix4fv(l2.modelViewMatrix, false, s2._modelViewMatrix.elements), l2.normalMatrix && this._gl.uniformMatrix3fv(l2.normalMatrix, false, s2._normalMatrix.elements), l2.projinv && (this._projInverse.getInverse(t2.projectionMatrix), this._gl.uniformMatrix4fv(l2.projinv, false, this._projInverse.elements)), l2.viewMatrix && this._gl.uniformMatrix4fv(l2.viewMatrix, false, t2.matrixWorldInverse.elements), l2.vWidth && this._gl.uniform1f(l2.vWidth, this._viewportWidth), l2.vHeight && this._gl.uniform1f(l2.vHeight, this._viewportHeight), a2) {
              if (h2.fogColor.value = i2.color, h2.fogNear.value = i2.near, h2.fogFar.value = i2.far, r2.shaderID.startsWith("lambert") || "instanced" === r2.shaderID || r2.shaderID.endsWith("imposter")) this._lightsNeedUpdate && (this.setupLights(o2, e2), this._lightsNeedUpdate = false), h2.directionalLightColor.value = this._lights.directional.colors, h2.directionalLightDirection.value = this._lights.directional.positions;
              else if (r2.shaderID.endsWith("outline")) h2.outlineColor.value = r2.outlineColor, h2.outlineWidth.value = r2.outlineWidth, h2.outlinePushback.value = r2.outlinePushback, h2.outlineMaxPixels.value = r2.outlineMaxPixels * this.devicePixelRatio;
              else if ("volumetric" === r2.shaderID) {
                s2._modelViewMatrix.getScale(this._direction), this._worldInverse.getInverse(s2._modelViewMatrix), this._projInverse.getInverse(t2.projectionMatrix), this._textureMatrix.multiplyMatrices(s2.material.texmatrix, this._worldInverse), this._gl.uniformMatrix4fv(l2.textmat, false, this._textureMatrix.elements), this._gl.uniformMatrix4fv(l2.projinv, false, this._projInverse.elements);
                let e3 = Math.min(Math.min(this._direction.x, this._direction.y), this._direction.z);
                h2.step.value = s2.material.unit * e3, h2.maxdepth.value = s2.material.maxdepth * e3, h2.transfermax.value = s2.material.transfermax, h2.transfermin.value = s2.material.transfermin, h2.subsamples.value = s2.material.subsamples, n2.setTexture(s2.material.transferfn, 4, false), n2.setTexture(s2.material.map, 3, true), this._gl.activeTexture(this._gl.TEXTURE5), this._gl.bindTexture(this._gl.TEXTURE_2D, this._depthTexture);
              }
              h2.opacity.value = r2.opacity, this.loadMaterialUniforms(l2, h2);
            }
            return h2.shading && (3 == h2.shading.value ? (this._gl.activeTexture(this._gl.TEXTURE0 + this.SHADE_TEXTURE), this._gl.bindTexture(this._gl.TEXTURE_2D, this._shadingTexture)) : console.error("Invalid shading textures.")), o2;
          }
          loadMaterialUniforms(t2, e2) {
            var i2, r2, s2, n2;
            for (i2 in e2) t2[i2] && (r2 = e2[i2].type, s2 = e2[i2].value, n2 = t2[i2], "f" === r2 ? this._gl.uniform1f(n2, s2) : "i" === r2 ? this._gl.uniform1i(n2, s2) : "fv" === r2 ? this._gl.uniform3fv(n2, s2) : "c" === r2 ? this._gl.uniform3f(n2, s2.r, s2.g, s2.b) : "f4" === r2 && this._gl.uniform4f(n2, s2[0], s2[1], s2[2], s2[3]));
          }
          addObject(t2, e2) {
            var i2, r2, s2, n2;
            if (!t2.__webglInit && (t2.__webglInit = true, t2._modelViewMatrix = new l.Matrix4(), t2._normalMatrix = new l.Matrix3(), void 0 !== t2.geometry && void 0 === t2.geometry.__webglInit && (t2.geometry.__webglInit = true, t2.geometry.addEventListener("dispose", this.onGeometryDispose.bind(this))), t2 instanceof Mesh || t2 instanceof Line)) for (i2 = 0, r2 = (s2 = t2.geometry).geometryGroups.length; i2 < r2; i2++) (n2 = s2.geometryGroups[i2]).id = this._geometryGroupCounter++, n2.__webglVertexBuffer || (t2 instanceof Mesh ? (this.createMeshBuffers(n2), s2.elementsNeedUpdate = true, s2.normalsNeedUpdate = true) : t2 instanceof Line && this.createLineBuffers(n2), s2.verticesNeedUpdate = true, s2.colorsNeedUpdate = true);
            if (!t2.__webglActive) {
              if (t2 instanceof Mesh || t2 instanceof Line) for (i2 = 0, r2 = (s2 = t2.geometry).geometryGroups.length; i2 < r2; i2++) n2 = s2.geometryGroups[i2], this.addBuffer(e2.__webglObjects, n2, t2);
              else t2 instanceof Sprite && e2.__webglSprites.push(t2);
              t2.__webglActive = true;
            }
          }
          updateObject(t2) {
            var e2, i2 = t2.geometry;
            if (t2 instanceof Mesh || t2 instanceof Line) {
              for (var r2 = 0, s2 = i2.geometryGroups.length; r2 < s2; r2++) e2 = i2.geometryGroups[r2], (i2.verticesNeedUpdate || i2.elementsNeedUpdate || i2.colorsNeedUpdate || i2.normalsNeedUpdate) && this.setBuffers(e2, this._gl.STATIC_DRAW);
              i2.verticesNeedUpdate = false, i2.elementsNeedUpdate = false, i2.normalsNeedUpdate = false, i2.colorsNeedUpdate = false, i2.buffersNeedUpdate = false;
            }
          }
          removeObject(t2, e2) {
            t2 instanceof Mesh || t2 instanceof Line ? this.removeInstances(e2.__webglObjects, t2) : t2 instanceof Sprite && this.removeInstancesDirect(e2.__webglSprites, t2), t2.__webglActive = false;
          }
          removeInstances(t2, e2) {
            for (var i2 = t2.length - 1; i2 >= 0; --i2) t2[i2].object === e2 && t2.splice(i2, 1);
          }
          removeInstancesDirect(t2, e2) {
            for (var i2 = t2.length - 1; i2 >= 0; --i2) t2[i2] === e2 && t2.splice(i2, 1);
          }
          unrollBufferMaterial(t2) {
            var e2 = t2.object.material;
            if (e2.volumetric) t2.opaque = null, t2.transparent = null, t2.volumetric = e2;
            else if (e2.transparent) {
              if (t2.opaque = null, t2.volumetric = null, t2.transparent = e2, !e2.wireframe) {
                let i2 = e2.clone();
                i2.opacity = 0, t2.transparentDepth = i2;
              }
            } else {
              if (t2.opaque = e2, t2.transparent = null, t2.volumetric = null, !e2.wireframe) {
                let i2 = e2.clone();
                i2.opacity = 0, t2.opaqueDepth = i2;
              }
              e2.hasAO && (t2.hasAO = true), (this._AOEnabled || t2.hasAO) && (t2.opaqueShaded = e2.clone(), t2.opaqueShaded.shaded = true);
            }
          }
          setBuffers(t2, e2) {
            var i2 = t2.vertexArray, r2 = t2.colorArray;
            if (void 0 !== t2.__webglOffsetBuffer ? (this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t2.__webglOffsetBuffer), this._gl.bufferData(this._gl.ARRAY_BUFFER, i2, e2)) : (this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t2.__webglVertexBuffer), this._gl.bufferData(this._gl.ARRAY_BUFFER, i2, e2)), this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t2.__webglColorBuffer), this._gl.bufferData(this._gl.ARRAY_BUFFER, r2, e2), t2.normalArray && void 0 !== t2.__webglNormalBuffer) {
              var s2 = t2.normalArray;
              this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t2.__webglNormalBuffer), this._gl.bufferData(this._gl.ARRAY_BUFFER, s2, e2);
            }
            if (t2.radiusArray && void 0 !== t2.__webglRadiusBuffer && (this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t2.__webglRadiusBuffer), this._gl.bufferData(this._gl.ARRAY_BUFFER, t2.radiusArray, e2)), t2.faceArray && void 0 !== t2.__webglFaceBuffer) {
              var n2 = t2.faceArray;
              this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, t2.__webglFaceBuffer), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, n2, e2);
            }
            if (t2.lineArray && void 0 !== t2.__webglLineBuffer) {
              var a2 = t2.lineArray;
              this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, t2.__webglLineBuffer), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, a2, e2);
            }
          }
          createMeshBuffers(t2) {
            t2.radiusArray && (t2.__webglRadiusBuffer = this._gl.createBuffer()), t2.useOffset && (t2.__webglOffsetBuffer = this._gl.createBuffer()), t2.__webglVertexBuffer = this._gl.createBuffer(), t2.__webglNormalBuffer = this._gl.createBuffer(), t2.__webglColorBuffer = this._gl.createBuffer(), t2.__webglFaceBuffer = this._gl.createBuffer(), t2.__webglLineBuffer = this._gl.createBuffer(), this.info.memory.geometries++;
          }
          createLineBuffers(t2) {
            t2.__webglVertexBuffer = this._gl.createBuffer(), t2.__webglColorBuffer = this._gl.createBuffer(), this.info.memory.geometries++;
          }
          addBuffer(t2, e2, i2) {
            t2.push({ buffer: e2, object: i2, opaque: null, transparent: null });
          }
          setupMatrices(t2, e2) {
            t2._modelViewMatrix.multiplyMatrices(e2.matrixWorldInverse, t2.matrixWorld), t2._normalMatrix.getInverse(t2._modelViewMatrix), t2._normalMatrix.transpose();
          }
          filterFallback(t2) {
            return this._gl.LINEAR;
          }
          setTextureParameters(t2, e2) {
            t2 == this._gl.TEXTURE_2D ? (this._gl.texParameteri(t2, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(t2, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(t2, this._gl.TEXTURE_MAG_FILTER, this.filterFallback(e2.magFilter)), this._gl.texParameteri(t2, this._gl.TEXTURE_MIN_FILTER, this.filterFallback(e2.minFilter))) : (this._gl.texParameteri(t2, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(t2, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(t2, this._gl.TEXTURE_WRAP_R, this._gl.CLAMP_TO_EDGE), this._extColorBufferFloat && this._extFloatLinear ? (this._gl.texParameteri(t2, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(t2, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR)) : (this._gl.texParameteri(t2, this._gl.TEXTURE_MAG_FILTER, this._gl.NEAREST), this._gl.texParameteri(t2, this._gl.TEXTURE_MIN_FILTER, this._gl.NEAREST)));
          }
          paramToGL(t2) {
            return t2 === p ? this._gl.UNSIGNED_BYTE : t2 === m ? this._gl.RGBA : t2 === u ? this._gl.NEAREST : 0;
          }
          setupLights(t2, e2) {
            var i2, r2, s2, n2, a2, o2 = this._lights, l2 = o2.directional.colors, h2 = o2.directional.positions, c2 = 0, d2 = 0;
            for (i2 = 0, r2 = e2.length; i2 < r2; i2++) if (n2 = (s2 = e2[i2]).color, a2 = s2.intensity, s2 instanceof Light) {
              if (this._direction.getPositionFromMatrix(s2.matrixWorld), this._vector3.getPositionFromMatrix(s2.target.matrixWorld), this._direction.sub(this._vector3), this._direction.normalize(), 0 === this._direction.x && 0 === this._direction.y && 0 === this._direction.z) continue;
              h2[d2] = this._direction.x, h2[d2 + 1] = this._direction.y, h2[d2 + 2] = this._direction.z, l2[d2] = n2.r * a2, l2[d2 + 1] = n2.g * a2, l2[d2 + 2] = n2.b * a2, d2 += 3, c2++;
            }
            o2.ambient[0] = 0, o2.ambient[1] = 0, o2.ambient[2] = 0, o2.directional.length = c2;
          }
          initGL() {
            try {
              if (!OffscreenCanvas || null != this.rows && null != this.cols && null != this.row && null != this.col) {
                if (!(this._gl = this._canvas.getContext("webgl2", { alpha: this._alpha, premultipliedAlpha: this._premultipliedAlpha, antialias: this._antialias, preserveDrawingBuffer: this._preserveDrawingBuffer })) && !(this._gl = this._canvas.getContext("experimental-webgl", { alpha: this._alpha, premultipliedAlpha: this._premultipliedAlpha, antialias: this._antialias, preserveDrawingBuffer: this._preserveDrawingBuffer })) && !(this._gl = this._canvas.getContext("webgl", { alpha: this._alpha, premultipliedAlpha: this._premultipliedAlpha, antialias: this._antialias, preserveDrawingBuffer: this._preserveDrawingBuffer }))) throw "Error creating WebGL context.";
              } else (null == gt || gt.isContextLost()) && (pt = new OffscreenCanvas(this._canvas.width, this._canvas.height), gt = pt.getContext("webgl2", { alpha: true, premultipliedAlpha: this._premultipliedAlpha, antialias: this._antialias, preserveDrawingBuffer: this._preserveDrawingBuffer })), this._offscreen = pt, this._gl = gt, this._bitmap = this._canvas.getContext("bitmaprenderer", { alpha: true });
              var t2 = this._gl.getParameter(this._gl.VERSION);
              this._webglversion = parseInt(t2[6]);
            } catch (t3) {
              console.error(t3);
            }
          }
          isWebGL1() {
            return 1 == this._webglversion;
          }
          setDefaultGLState() {
            this._gl.clearDepth(1), this._gl.clearStencil(0), this._gl.enable(this._gl.DEPTH_TEST), this._gl.depthFunc(this._gl.LEQUAL), this._gl.frontFace(this._gl.CCW), this._gl.cullFace(this._gl.BACK), this._gl.enable(this._gl.CULL_FACE), this._gl.enable(this._gl.BLEND), this._gl.blendEquation(this._gl.FUNC_ADD), this._gl.blendFunc(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA), this._gl.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearAlpha);
          }
          renderObjects(t2, e2, i2, r2, s2, n2, a2) {
            var o2, l2, h2, c2, d2, u2, f2;
            e2 ? (d2 = t2.length - 1, u2 = -1, f2 = -1) : (d2 = 0, u2 = t2.length, f2 = 1);
            for (var p2 = d2; p2 !== u2; p2 += f2) if ((o2 = t2[p2]).render) {
              if (l2 = o2.object, h2 = o2.buffer, c2 = o2[i2], (o2.hasAO || this._AOEnabled) && o2[i2 + "Shaded"] && (c2 = o2[i2 + "Shaded"]), !c2) continue;
              this.setBlending(a2), this.setDepthTest(c2.depthTest), this.setDepthWrite(c2.depthWrite), this.setPolygonOffset(c2.polygonOffset, c2.polygonOffsetFactor, c2.polygonOffsetUnits);
              var g2 = l2._modelViewMatrix.isReflected();
              if (this.setMaterialFaces(c2, g2), this.renderBuffer(r2, s2, n2, c2, h2, l2), (this._outlineEnabled || c2.outline) && !c2.wireframe && "basic" !== c2.shaderID && 0 !== c2.opacity) {
                let t3 = this._outlineMaterial;
                "sphereimposter" == c2.shaderID ? t3 = this._outlineSphereImposterMaterial : "stickimposter" == c2.shaderID && (t3 = this._outlineStickImposterMaterial), this.renderBuffer(r2, s2, n2, t3, h2, l2);
              }
            }
          }
          renderSprites(t2, e2, i2) {
            this._currentGeometryGroupHash = -1, this._currentProgram = null, this._currentCamera = null, this._oldDepthWrite = -1, this._oldDepthTest = -1, this._oldDoubleSided = -1, this._currentMaterialId = -1, this._oldFlipSided = -1, this._lightsNeedUpdate = true, this.sprites.render(t2, e2, this._currentWidth, this._currentHeight, i2), this._currentGeometryGroupHash = -1, this._currentProgram = null, this._currentCamera = null, this._oldDepthWrite = -1, this._oldDepthTest = -1, this._oldDoubleSided = -1, this._currentMaterialId = -1, this._oldFlipSided = -1;
          }
        }
      }, 529: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { Matrix3: () => Matrix3, Matrix4: () => Matrix4, Quaternion: () => Quaternion, Ray: () => Ray, Vector2: () => Vector2, Vector3: () => Vector3, clamp: () => r, conversionMatrix3: () => d, degToRad: () => n });
        class Quaternion {
          constructor(t2, e2, i2, r2) {
            this.x = t2 || 0, this.y = e2 || 0, this.z = i2 || 0, this.w = void 0 !== r2 ? r2 : 1;
          }
          set(t2, e2, i2, r2) {
            return this.x = t2, this.y = e2, this.z = i2, this.w = r2, this;
          }
          copy(t2) {
            return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = t2.w, this;
          }
          conjugate() {
            return this.x *= -1, this.y *= -1, this.z *= -1, this;
          }
          inverse() {
            return this.conjugate().normalize();
          }
          length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
          }
          lengthxyz() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
          }
          normalize() {
            let t2 = this.length();
            return 0 === t2 ? (this.x = 0, this.y = 0, this.z = 0, this.w = 1) : (t2 = 1 / t2, this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2), this;
          }
          multiply(t2) {
            return this.multiplyQuaternions(this, t2);
          }
          multiplyScalar(t2) {
            return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
          }
          multiplyQuaternions(t2, e2) {
            const i2 = t2.x, r2 = t2.y, s2 = t2.z, n2 = t2.w, a2 = e2.x, o2 = e2.y, l2 = e2.z, h2 = e2.w;
            return this.x = i2 * h2 + n2 * a2 + r2 * l2 - s2 * o2, this.y = r2 * h2 + n2 * o2 + s2 * a2 - i2 * l2, this.z = s2 * h2 + n2 * l2 + i2 * o2 - r2 * a2, this.w = n2 * h2 - i2 * a2 - r2 * o2 - s2 * l2, this;
          }
          sub(t2) {
            return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
          }
          clone() {
            return new Quaternion(this.x, this.y, this.z, this.w);
          }
          setFromEuler(t2) {
            const e2 = Math.cos(t2.x / 2), i2 = Math.cos(t2.y / 2), r2 = Math.cos(t2.z / 2), s2 = Math.sin(t2.x / 2), n2 = Math.sin(t2.y / 2), a2 = Math.sin(t2.z / 2);
            return this.x = s2 * i2 * r2 + e2 * n2 * a2, this.y = e2 * n2 * r2 - s2 * i2 * a2, this.z = e2 * i2 * a2 + s2 * n2 * r2, this.w = e2 * i2 * r2 - s2 * n2 * a2, this;
          }
        }
        class Vector2 {
          constructor(t2, e2) {
            this.x = t2 || 0, this.y = e2 || 0;
          }
          set(t2, e2) {
            return this.x = t2, this.y = e2, this;
          }
          subVectors(t2, e2) {
            return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this;
          }
          copy(t2) {
            return this.x = t2.x, this.y = t2.y, this;
          }
          clone() {
            return new Vector2(this.x, this.y);
          }
        }
        function r(t2, e2, i2) {
          return Math.min(Math.max(t2, e2), i2);
        }
        const s = Math.PI / 180;
        function n(t2) {
          return t2 * s;
        }
        var a, o, l, h, c;
        class Matrix4 {
          constructor(t2 = 1, e2 = 0, i2 = 0, r2 = 0, s2 = 0, n2 = 1, a2 = 0, o2 = 0, l2 = 0, h2 = 0, c2 = 1, d2 = 0, u = 0, f = 0, p = 0, g = 1) {
            void 0 !== t2 && "number" != typeof t2 ? this.elements = new Float32Array(t2) : (this.elements = new Float32Array(16), this.elements[0] = t2, this.elements[4] = e2, this.elements[8] = i2, this.elements[12] = r2, this.elements[1] = s2, this.elements[5] = n2, this.elements[9] = a2, this.elements[13] = o2, this.elements[2] = l2, this.elements[6] = h2, this.elements[10] = c2, this.elements[14] = d2, this.elements[3] = u, this.elements[7] = f, this.elements[11] = p, this.elements[15] = g);
          }
          makeScale(t2, e2, i2) {
            throw new Error("Method not implemented.");
          }
          set(t2, e2, i2, r2, s2, n2, a2, o2, l2, h2, c2, d2, u, f, p, g) {
            const m = this.elements;
            return m[0] = t2, m[4] = e2, m[8] = i2, m[12] = r2, m[1] = s2, m[5] = n2, m[9] = a2, m[13] = o2, m[2] = l2, m[6] = h2, m[10] = c2, m[14] = d2, m[3] = u, m[7] = f, m[11] = p, m[15] = g, this;
          }
          identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
          }
          copy(t2) {
            const e2 = t2.elements;
            return this.set(e2[0], e2[4], e2[8], e2[12], e2[1], e2[5], e2[9], e2[13], e2[2], e2[6], e2[10], e2[14], e2[3], e2[7], e2[11], e2[15]), this;
          }
          matrix3FromTopLeft() {
            const t2 = this.elements;
            return new Matrix3(t2[0], t2[4], t2[8], t2[1], t2[5], t2[9], t2[2], t2[6], t2[10]);
          }
          setRotationFromEuler(t2, e2) {
            const i2 = this.elements, { x: r2, y: s2, z: n2 } = t2, a2 = Math.cos(r2), o2 = Math.sin(r2), l2 = Math.cos(s2), h2 = Math.sin(s2), c2 = Math.cos(n2), d2 = Math.sin(n2);
            if (void 0 === e2 || "XYZ" === e2) {
              const t3 = a2 * c2, e3 = a2 * d2, r3 = o2 * c2, s3 = o2 * d2;
              i2[0] = l2 * c2, i2[4] = -l2 * d2, i2[8] = h2, i2[1] = e3 + r3 * h2, i2[5] = t3 - s3 * h2, i2[9] = -o2 * l2, i2[2] = s3 - t3 * h2, i2[6] = r3 + e3 * h2, i2[10] = a2 * l2;
            } else console.error(`Error with matrix4 setRotationFromEuler. Order: ${e2}`);
            return this;
          }
          setRotationFromQuaternion(t2) {
            const e2 = this.elements, { x: i2, y: r2, z: s2, w: n2 } = t2, a2 = i2 + i2, o2 = r2 + r2, l2 = s2 + s2, h2 = i2 * a2, c2 = i2 * o2, d2 = i2 * l2, u = r2 * o2, f = r2 * l2, p = s2 * l2, g = n2 * a2, m = n2 * o2, v = n2 * l2;
            return e2[0] = 1 - (u + p), e2[4] = c2 - v, e2[8] = d2 + m, e2[1] = c2 + v, e2[5] = 1 - (h2 + p), e2[9] = f - g, e2[2] = d2 - m, e2[6] = f + g, e2[10] = 1 - (h2 + u), this;
          }
          multiplyMatrices(t2, e2) {
            const i2 = t2.elements, r2 = e2.elements, s2 = this.elements, n2 = i2[0], a2 = i2[4], o2 = i2[8], l2 = i2[12], h2 = i2[1], c2 = i2[5], d2 = i2[9], u = i2[13], f = i2[2], p = i2[6], g = i2[10], m = i2[14], v = i2[3], _ = i2[7], y = i2[11], b = i2[15], x = r2[0], w = r2[4], A = r2[8], C = r2[12], S3 = r2[1], M = r2[5], z = r2[9], T = r2[13], E = r2[2], L = r2[6], F = r2[10], I = r2[14], O = r2[3], D = r2[7], k = r2[11], R = r2[15];
            return s2[0] = n2 * x + a2 * S3 + o2 * E + l2 * O, s2[4] = n2 * w + a2 * M + o2 * L + l2 * D, s2[8] = n2 * A + a2 * z + o2 * F + l2 * k, s2[12] = n2 * C + a2 * T + o2 * I + l2 * R, s2[1] = h2 * x + c2 * S3 + d2 * E + u * O, s2[5] = h2 * w + c2 * M + d2 * L + u * D, s2[9] = h2 * A + c2 * z + d2 * F + u * k, s2[13] = h2 * C + c2 * T + d2 * I + u * R, s2[2] = f * x + p * S3 + g * E + m * O, s2[6] = f * w + p * M + g * L + m * D, s2[10] = f * A + p * z + g * F + m * k, s2[14] = f * C + p * T + g * I + m * R, s2[3] = v * x + _ * S3 + y * E + b * O, s2[7] = v * w + _ * M + y * L + b * D, s2[11] = v * A + _ * z + y * F + b * k, s2[15] = v * C + _ * T + y * I + b * R, this;
          }
          multiplyScalar(t2) {
            const e2 = this.elements;
            return e2[0] *= t2, e2[4] *= t2, e2[8] *= t2, e2[12] *= t2, e2[1] *= t2, e2[5] *= t2, e2[9] *= t2, e2[13] *= t2, e2[2] *= t2, e2[6] *= t2, e2[10] *= t2, e2[14] *= t2, e2[3] *= t2, e2[7] *= t2, e2[11] *= t2, e2[15] *= t2, this;
          }
          makeTranslation(t2, e2, i2) {
            return this.set(1, 0, 0, t2, 0, 1, 0, e2, 0, 0, 1, i2, 0, 0, 0, 1), this;
          }
          snap(t2) {
            t2 || (t2 = 4);
            const e2 = Math.pow(10, 4), i2 = this.elements;
            for (let t3 = 0; t3 < 16; t3++) {
              const r2 = Math.round(i2[t3]);
              r2 === Math.round(i2[t3] * e2) / e2 && (i2[t3] = r2);
            }
            return this;
          }
          transpose() {
            const t2 = this.elements;
            let e2;
            return e2 = t2[1], t2[1] = t2[4], t2[4] = e2, e2 = t2[2], t2[2] = t2[8], t2[8] = e2, e2 = t2[6], t2[6] = t2[9], t2[9] = e2, e2 = t2[3], t2[3] = t2[12], t2[12] = e2, e2 = t2[7], t2[7] = t2[13], t2[13] = e2, e2 = t2[11], t2[11] = t2[14], t2[14] = e2, this;
          }
          setPosition(t2) {
            const e2 = this.elements;
            return e2[12] = t2.x, e2[13] = t2.y, e2[14] = t2.z, this;
          }
          translate(t2) {
            const e2 = this.elements;
            return e2[12] += t2.x, e2[13] += t2.y, e2[14] += t2.z, this;
          }
          getInverse(t2, e2) {
            const i2 = this.elements, r2 = t2.elements, s2 = r2[0], n2 = r2[4], a2 = r2[8], o2 = r2[12], l2 = r2[1], h2 = r2[5], c2 = r2[9], d2 = r2[13], u = r2[2], f = r2[6], p = r2[10], g = r2[14], m = r2[3], v = r2[7], _ = r2[11], y = r2[15];
            i2[0] = c2 * g * v - d2 * p * v + d2 * f * _ - h2 * g * _ - c2 * f * y + h2 * p * y, i2[4] = o2 * p * v - a2 * g * v - o2 * f * _ + n2 * g * _ + a2 * f * y - n2 * p * y, i2[8] = a2 * d2 * v - o2 * c2 * v + o2 * h2 * _ - n2 * d2 * _ - a2 * h2 * y + n2 * c2 * y, i2[12] = o2 * c2 * f - a2 * d2 * f - o2 * h2 * p + n2 * d2 * p + a2 * h2 * g - n2 * c2 * g, i2[1] = d2 * p * m - c2 * g * m - d2 * u * _ + l2 * g * _ + c2 * u * y - l2 * p * y, i2[5] = a2 * g * m - o2 * p * m + o2 * u * _ - s2 * g * _ - a2 * u * y + s2 * p * y, i2[9] = o2 * c2 * m - a2 * d2 * m - o2 * l2 * _ + s2 * d2 * _ + a2 * l2 * y - s2 * c2 * y, i2[13] = a2 * d2 * u - o2 * c2 * u + o2 * l2 * p - s2 * d2 * p - a2 * l2 * g + s2 * c2 * g, i2[2] = h2 * g * m - d2 * f * m + d2 * u * v - l2 * g * v - h2 * u * y + l2 * f * y, i2[6] = o2 * f * m - n2 * g * m - o2 * u * v + s2 * g * v + n2 * u * y - s2 * f * y, i2[10] = n2 * d2 * m - o2 * h2 * m + o2 * l2 * v - s2 * d2 * v - n2 * l2 * y + s2 * h2 * y, i2[14] = o2 * h2 * u - n2 * d2 * u - o2 * l2 * f + s2 * d2 * f + n2 * l2 * g - s2 * h2 * g, i2[3] = c2 * f * m - h2 * p * m - c2 * u * v + l2 * p * v + h2 * u * _ - l2 * f * _, i2[7] = n2 * p * m - a2 * f * m + a2 * u * v - s2 * p * v - n2 * u * _ + s2 * f * _, i2[11] = a2 * h2 * m - n2 * c2 * m - a2 * l2 * v + s2 * c2 * v + n2 * l2 * _ - s2 * h2 * _, i2[15] = n2 * c2 * u - a2 * h2 * u + a2 * l2 * f - s2 * c2 * f - n2 * l2 * p + s2 * h2 * p;
            const b = s2 * i2[0] + l2 * i2[4] + u * i2[8] + m * i2[12];
            if (0 === b) {
              const t3 = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
              if (e2) throw new Error(t3);
              return console.warn(t3), this.identity(), this;
            }
            return this.multiplyScalar(1 / b), this;
          }
          isReflected() {
            const t2 = this.elements, e2 = t2[0], i2 = t2[4], r2 = t2[8], s2 = t2[1], n2 = t2[5], a2 = t2[9], o2 = t2[2], l2 = t2[6], h2 = t2[10];
            return e2 * n2 * h2 + s2 * l2 * r2 + o2 * i2 * a2 - o2 * n2 * r2 - s2 * i2 * h2 - e2 * l2 * a2 < 0;
          }
          scale(t2) {
            const e2 = this.elements, { x: i2 } = t2, { y: r2 } = t2, { z: s2 } = t2;
            return e2[0] *= i2, e2[4] *= r2, e2[8] *= s2, e2[1] *= i2, e2[5] *= r2, e2[9] *= s2, e2[2] *= i2, e2[6] *= r2, e2[10] *= s2, e2[3] *= i2, e2[7] *= r2, e2[11] *= s2, this;
          }
          getMaxScaleOnAxis() {
            const t2 = this.elements, e2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], i2 = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], r2 = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
            return Math.sqrt(Math.max(e2, Math.max(i2, r2)));
          }
          makeFrustum(t2, e2, i2, r2, s2, n2) {
            const a2 = this.elements, o2 = 2 * s2 / (e2 - t2), l2 = 2 * s2 / (r2 - i2), h2 = (e2 + t2) / (e2 - t2), c2 = (r2 + i2) / (r2 - i2), d2 = -(n2 + s2) / (n2 - s2), u = -2 * n2 * s2 / (n2 - s2);
            return a2[0] = o2, a2[4] = 0, a2[8] = h2, a2[12] = 0, a2[1] = 0, a2[5] = l2, a2[9] = c2, a2[13] = 0, a2[2] = 0, a2[6] = 0, a2[10] = d2, a2[14] = u, a2[3] = 0, a2[7] = 0, a2[11] = -1, a2[15] = 0, this;
          }
          makePerspective(t2, e2, i2, r2) {
            const s2 = i2 * Math.tan(n(0.5 * t2)), a2 = -s2, o2 = a2 * e2, l2 = s2 * e2;
            return this.makeFrustum(o2, l2, a2, s2, i2, r2);
          }
          makeOrthographic(t2, e2, i2, r2, s2, n2) {
            const a2 = this.elements, o2 = 1 / (e2 - t2), l2 = 1 / (i2 - r2), h2 = 1 / (n2 - s2), c2 = (e2 + t2) * o2, d2 = (i2 + r2) * l2, u = (n2 + s2) * h2;
            return a2[0] = 2 * o2, a2[4] = 0, a2[8] = 0, a2[12] = -c2, a2[1] = 0, a2[5] = 2 * l2, a2[9] = 0, a2[13] = -d2, a2[2] = 0, a2[6] = 0, a2[10] = -2 * h2, a2[14] = -u, a2[3] = 0, a2[7] = 0, a2[11] = 0, a2[15] = 1, this;
          }
          isEqual(t2) {
            const e2 = t2.elements, i2 = this.elements;
            return i2[0] === e2[0] && i2[4] === e2[4] && i2[8] === e2[8] && i2[12] === e2[12] && i2[1] === e2[1] && i2[5] === e2[5] && i2[9] === e2[9] && i2[13] === e2[13] && i2[2] === e2[2] && i2[6] === e2[6] && i2[10] === e2[10] && i2[14] === e2[14] && i2[3] === e2[3] && i2[7] === e2[7] && i2[11] === e2[11] && i2[15] === e2[15];
          }
          clone() {
            const t2 = this.elements;
            return new Matrix4(t2[0], t2[4], t2[8], t2[12], t2[1], t2[5], t2[9], t2[13], t2[2], t2[6], t2[10], t2[14], t2[3], t2[7], t2[11], t2[15]);
          }
          isIdentity() {
            const t2 = this.elements;
            return 1 === t2[0] && 0 === t2[4] && 0 === t2[8] && 0 === t2[12] && 0 === t2[1] && 1 === t2[5] && 0 === t2[9] && 0 === t2[13] && 0 === t2[2] && 0 === t2[6] && 1 === t2[10] && 0 === t2[14] && 0 === t2[3] && 0 === t2[7] && 0 === t2[11] && 1 === t2[15];
          }
          isNearlyIdentity(t2) {
            return this.clone().snap(t2).isIdentity();
          }
          getScale(t2) {
            const e2 = this.elements;
            return t2 = t2 || new Vector3(), l.set(e2[0], e2[1], e2[2]), h.set(e2[4], e2[5], e2[6]), c.set(e2[8], e2[9], e2[10]), t2.x = l.length(), t2.y = h.length(), t2.z = c.length(), t2;
          }
          lookAt(t2, e2, i2) {
            const r2 = this.elements;
            return c.subVectors(t2, e2).normalize(), 0 === c.length() && (c.z = 1), l.crossVectors(i2, c).normalize(), 0 === l.length() && (c.x += 1e-4, l.crossVectors(i2, c).normalize()), h.crossVectors(c, l), r2[0] = l.x, r2[4] = h.x, r2[8] = c.x, r2[1] = l.y, r2[5] = h.y, r2[9] = c.y, r2[2] = l.z, r2[6] = h.z, r2[10] = c.z, this;
          }
          compose(t2, e2, i2) {
            const r2 = this.elements;
            return a.identity(), a.setRotationFromQuaternion(e2), o.makeScale(i2.x, i2.y, i2.z), this.multiplyMatrices(a, o), r2[12] = t2.x, r2[13] = t2.y, r2[14] = t2.z, this;
          }
        }
        a = new Matrix4(), o = new Matrix4();
        class Vector3 {
          constructor(t2, e2, i2) {
            this.x = t2 || 0, this.y = e2 || 0, this.z = i2 || 0, this.atomid = void 0;
          }
          set(t2, e2, i2) {
            return this.x = t2, this.y = e2, this.z = i2, this;
          }
          copy(t2) {
            return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
          }
          add(t2) {
            return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
          }
          addVectors(t2, e2) {
            return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this;
          }
          multiplyVectors(t2, e2) {
            return this.x = t2.x * e2.x, this.y = t2.y * e2.y, this.z = t2.z * e2.z, this;
          }
          sub(t2) {
            return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
          }
          subVectors(t2, e2) {
            return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this;
          }
          multiplyScalar(t2) {
            return this.x *= t2, this.y *= t2, this.z *= t2, this;
          }
          divideScalar(t2) {
            return 0 !== t2 ? (this.x /= t2, this.y /= t2, this.z /= t2) : (this.x = 0, this.y = 0, this.z = 0), this;
          }
          max(t2) {
            return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
          }
          min(t2) {
            return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
          }
          distanceTo(t2) {
            return Math.sqrt(this.distanceToSquared(t2));
          }
          distanceToSquared(t2) {
            const e2 = this.x - t2.x, i2 = this.y - t2.y, r2 = this.z - t2.z;
            return e2 * e2 + i2 * i2 + r2 * r2;
          }
          applyMatrix3(t2) {
            const { x: e2 } = this, { y: i2 } = this, { z: r2 } = this, s2 = t2.elements;
            return this.x = s2[0] * e2 + s2[3] * i2 + s2[6] * r2, this.y = s2[1] * e2 + s2[4] * i2 + s2[7] * r2, this.z = s2[2] * e2 + s2[5] * i2 + s2[8] * r2, this;
          }
          applyMatrix4(t2) {
            const { x: e2 } = this, { y: i2 } = this, { z: r2 } = this, s2 = t2.elements;
            return this.x = s2[0] * e2 + s2[4] * i2 + s2[8] * r2 + s2[12], this.y = s2[1] * e2 + s2[5] * i2 + s2[9] * r2 + s2[13], this.z = s2[2] * e2 + s2[6] * i2 + s2[10] * r2 + s2[14], this;
          }
          applyProjection(t2) {
            const { x: e2 } = this, { y: i2 } = this, { z: r2 } = this, s2 = t2.elements, n2 = s2[3] * e2 + s2[7] * i2 + s2[11] * r2 + s2[15];
            return this.x = (s2[0] * e2 + s2[4] * i2 + s2[8] * r2 + s2[12]) / n2, this.y = (s2[1] * e2 + s2[5] * i2 + s2[9] * r2 + s2[13]) / n2, this.z = (s2[2] * e2 + s2[6] * i2 + s2[10] * r2 + s2[14]) / n2, this;
          }
          applyQuaternion(t2) {
            const { x: e2 } = this, { y: i2 } = this, { z: r2 } = this, s2 = t2.x, n2 = t2.y, a2 = t2.z, o2 = t2.w, l2 = {};
            l2.x = 2 * (i2 * a2 - r2 * n2), l2.y = 2 * (r2 * s2 - e2 * a2), l2.z = 2 * (e2 * n2 - i2 * s2);
            const h2 = {};
            return h2.x = l2.y * a2 - l2.z * n2, h2.y = l2.z * s2 - l2.x * a2, h2.z = l2.x * n2 - l2.y * s2, this.x = e2 + o2 * l2.x + h2.x, this.y = i2 + o2 * l2.y + h2.y, this.z = r2 + o2 * l2.z + h2.z, this;
          }
          negate() {
            return this.multiplyScalar(-1);
          }
          dot(t2) {
            return this.x * t2.x + this.y * t2.y + this.z * t2.z;
          }
          length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
          }
          lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
          }
          normalize() {
            return this.divideScalar(this.length());
          }
          cross(t2) {
            const { x: e2 } = this, { y: i2 } = this, { z: r2 } = this;
            return this.x = i2 * t2.z - r2 * t2.y, this.y = r2 * t2.x - e2 * t2.z, this.z = e2 * t2.y - i2 * t2.x, this;
          }
          crossVectors(t2, e2) {
            return this.x = t2.y * e2.z - t2.z * e2.y, this.y = t2.z * e2.x - t2.x * e2.z, this.z = t2.x * e2.y - t2.y * e2.x, this;
          }
          equals(t2) {
            return this.x == t2.x && this.y == t2.y && this.z == t2.z;
          }
          getPositionFromMatrix(t2) {
            return this.x = t2.elements[12], this.y = t2.elements[13], this.z = t2.elements[14], this;
          }
          setEulerFromRotationMatrix(t2, e2) {
            const i2 = t2.elements, s2 = i2[0], n2 = i2[4], a2 = i2[8], o2 = i2[5], l2 = i2[9], h2 = i2[6], c2 = i2[10];
            return void 0 === e2 || "XYZ" === e2 ? (this.y = Math.asin(r(a2, -1, 1)), Math.abs(a2) < 0.99999 ? (this.x = Math.atan2(-l2, c2), this.z = Math.atan2(-n2, s2)) : (this.x = Math.atan2(h2, o2), this.z = 0)) : console.error(`Error with vector's setEulerFromRotationMatrix: Unknown order: ${e2}`), this;
          }
          rotateAboutVector(t2, e2) {
            t2.normalize();
            const i2 = Math.cos(e2), r2 = Math.sin(e2), s2 = this.clone().multiplyScalar(i2), n2 = t2.clone().cross(this).multiplyScalar(r2), a2 = t2.clone().multiplyScalar(t2.clone().dot(this)).multiplyScalar(1 - i2), o2 = s2.add(n2).add(a2);
            return this.x = o2.x, this.y = o2.y, this.z = o2.z, this;
          }
          setFromMatrixPosition(t2) {
            const e2 = t2.elements;
            return this.x = e2[12], this.y = e2[13], this.z = e2[14], this;
          }
          transformDirection(t2) {
            const { x: e2 } = this, { y: i2 } = this, { z: r2 } = this, s2 = t2.elements;
            return this.x = s2[0] * e2 + s2[4] * i2 + s2[8] * r2, this.y = s2[1] * e2 + s2[5] * i2 + s2[9] * r2, this.z = s2[2] * e2 + s2[6] * i2 + s2[10] * r2, this.normalize();
          }
          clone() {
            return new Vector3(this.x, this.y, this.z);
          }
          unproject(t2) {
            const e2 = a;
            return e2.multiplyMatrices(t2.matrixWorld, e2.getInverse(t2.projectionMatrix)), this.applyMatrix4(e2);
          }
        }
        l = new Vector3(), h = new Vector3(), c = new Vector3();
        class Matrix3 {
          constructor(t2 = 1, e2 = 0, i2 = 0, r2 = 0, s2 = 1, n2 = 0, a2 = 0, o2 = 0, l2 = 1) {
            this.elements = new Float32Array(9), this.set(t2, e2, i2, r2, s2, n2, a2, o2, l2);
          }
          set(t2, e2, i2, r2, s2, n2, a2, o2, l2) {
            const h2 = this.elements;
            return h2[0] = t2, h2[3] = e2, h2[6] = i2, h2[1] = r2, h2[4] = s2, h2[7] = n2, h2[2] = a2, h2[5] = o2, h2[8] = l2, this;
          }
          identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
          }
          copy(t2) {
            const e2 = t2.elements;
            this.set(e2[0], e2[3], e2[6], e2[1], e2[4], e2[7], e2[2], e2[5], e2[8]);
          }
          multiplyScalar(t2) {
            const e2 = this.elements;
            return e2[0] *= t2, e2[3] *= t2, e2[6] *= t2, e2[1] *= t2, e2[4] *= t2, e2[7] *= t2, e2[2] *= t2, e2[5] *= t2, e2[8] *= t2, this;
          }
          getInverse3(t2) {
            const e2 = t2.elements, i2 = this.elements;
            i2[0] = e2[4] * e2[8] - e2[5] * e2[7], i2[3] = e2[6] * e2[5] - e2[3] * e2[8], i2[6] = e2[3] * e2[7] - e2[6] * e2[4], i2[1] = e2[7] * e2[2] - e2[1] * e2[8], i2[4] = e2[0] * e2[8] - e2[6] * e2[2], i2[7] = e2[1] * e2[6] - e2[0] * e2[7], i2[2] = e2[1] * e2[5] - e2[2] * e2[4], i2[5] = e2[2] * e2[3] - e2[0] * e2[5], i2[8] = e2[0] * e2[4] - e2[1] * e2[3];
            const r2 = e2[0] * i2[0] + e2[3] * i2[1] + e2[6] * i2[2];
            return this.multiplyScalar(1 / r2), this;
          }
          getInverse(t2, e2) {
            const i2 = t2.elements, r2 = this.elements;
            r2[0] = i2[10] * i2[5] - i2[6] * i2[9], r2[1] = -i2[10] * i2[1] + i2[2] * i2[9], r2[2] = i2[6] * i2[1] - i2[2] * i2[5], r2[3] = -i2[10] * i2[4] + i2[6] * i2[8], r2[4] = i2[10] * i2[0] - i2[2] * i2[8], r2[5] = -i2[6] * i2[0] + i2[2] * i2[4], r2[6] = i2[9] * i2[4] - i2[5] * i2[8], r2[7] = -i2[9] * i2[0] + i2[1] * i2[8], r2[8] = i2[5] * i2[0] - i2[1] * i2[4];
            const s2 = i2[0] * r2[0] + i2[1] * r2[3] + i2[2] * r2[6];
            if (0 === s2) {
              const t3 = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
              if (e2) throw new Error(t3);
              return console.warn(t3), this.identity(), this;
            }
            return this.multiplyScalar(1 / s2), this;
          }
          getDeterminant() {
            const t2 = this.elements;
            return t2[0] * t2[4] * t2[8] + t2[1] * t2[5] * t2[6] + t2[2] * t2[3] * t2[7] - t2[2] * t2[4] * t2[6] - t2[1] * t2[3] * t2[8] - t2[0] * t2[5] * t2[7];
          }
          transpose() {
            let t2;
            const e2 = this.elements;
            return t2 = e2[1], e2[1] = e2[3], e2[3] = t2, t2 = e2[2], e2[2] = e2[6], e2[6] = t2, t2 = e2[5], e2[5] = e2[7], e2[7] = t2, this;
          }
          clone() {
            const t2 = this.elements;
            return new Matrix3(t2[0], t2[3], t2[6], t2[1], t2[4], t2[7], t2[2], t2[5], t2[8]);
          }
          getMatrix4() {
            const t2 = this.elements;
            return new Matrix4(t2[0], t2[3], t2[6], 0, t2[1], t2[4], t2[7], 0, t2[2], t2[5], t2[8], 0);
          }
        }
        class Ray {
          constructor(t2, e2) {
            this.origin = void 0 !== t2 ? t2 : new Vector3(), this.direction = void 0 !== e2 ? e2 : new Vector3();
          }
          set(t2, e2) {
            return this.origin.copy(t2), this.direction.copy(e2), this;
          }
          copy(t2) {
            return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
          }
          at(t2, e2) {
            return (e2 || new Vector3()).copy(this.direction).multiplyScalar(t2).add(this.origin);
          }
          recast(t2) {
            const e2 = l;
            return this.origin.copy(this.at(t2, e2)), this;
          }
          closestPointToPoint(t2, e2) {
            const i2 = e2 || new Vector3();
            i2.subVectors(t2, this.origin);
            const r2 = i2.dot(this.direction);
            return i2.copy(this.direction).multiplyScalar(r2).add(this.origin);
          }
          distanceToPoint(t2) {
            const e2 = l, i2 = e2.subVectors(t2, this.origin).dot(this.direction);
            return e2.copy(this.direction).multiplyScalar(i2).add(this.origin), e2.distanceTo(t2);
          }
          isIntersectionCylinder() {
          }
          isIntersectionSphere(t2) {
            return this.distanceToPoint(t2.center) <= t2.radius;
          }
          isIntersectionPlane(t2) {
            return 0 !== t2.normal.dot(this.direction) || 0 === t2.distanceToPoint(this.origin);
          }
          distanceToPlane(t2) {
            const e2 = t2.normal.dot(this.direction);
            if (0 === e2) return 0 === t2.distanceToPoint(this.origin) ? 0 : void 0;
            return -(this.origin.dot(t2.normal) + t2.constant) / e2;
          }
          intersectPlane(t2, e2) {
            const i2 = this.distanceToPlane(t2);
            if (void 0 !== i2) return this.at(i2, e2);
          }
          applyMatrix4(t2) {
            return this.direction.add(this.origin).applyMatrix4(t2), this.origin.applyMatrix4(t2), this.direction.sub(this.origin), this;
          }
          clone() {
            return new Ray().copy(this);
          }
        }
        function d(t2, e2, i2, r2, s2, n2) {
          r2 = r2 * Math.PI / 180, s2 = s2 * Math.PI / 180, n2 = n2 * Math.PI / 180;
          const a2 = (t3) => t3 * t3, o2 = Math.cos(r2), l2 = Math.cos(s2), h2 = Math.cos(n2), c2 = Math.sin(n2);
          return new Matrix3(t2, e2 * h2, i2 * l2, 0, e2 * c2, i2 * (o2 - l2 * h2) / c2, 0, 0, i2 * Math.sqrt(1 - a2(o2) - a2(l2) - a2(h2) + 2 * o2 * l2 * h2) / c2);
        }
      }, 99: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { Cylinder: () => Cylinder, Sphere: () => Sphere, Triangle: () => Triangle });
        var r = i(529);
        class Sphere {
          constructor(t2 = { x: 0, y: 0, z: 0 }, e2 = 0) {
            this.center = new r.Vector3(t2.x, t2.y, t2.z), this.radius = e2;
          }
          set(t2, e2) {
            return this.center.copy(t2), this.radius = e2, this;
          }
          copy(t2) {
            return this.center.copy(t2.center), this.radius = t2.radius, this;
          }
          applyMatrix4(t2) {
            return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
          }
          translate(t2) {
            return this.center.add(t2), this;
          }
          equals(t2) {
            return t2.center.equals(this.center) && t2.radius === this.radius;
          }
          clone() {
            return new Sphere().copy(this);
          }
        }
        let s = new r.Vector3();
        class Cylinder {
          constructor(t2 = new r.Vector3(), e2 = new r.Vector3(), i2 = 0) {
            this.c1 = t2, this.c2 = e2, this.radius = i2, this.direction = new r.Vector3().subVectors(this.c2, this.c1).normalize();
          }
          copy(t2) {
            return this.c1.copy(t2.c1), this.c2.copy(t2.c2), this.direction.copy(t2.direction), this.radius = t2.radius, this;
          }
          lengthSq() {
            return s.subVectors(this.c2, this.c1).lengthSq();
          }
          applyMatrix4(t2) {
            return this.direction.add(this.c1).applyMatrix4(t2), this.c1.applyMatrix4(t2), this.c2.applyMatrix4(t2), this.direction.sub(this.c1).normalize(), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
          }
        }
        const n = new r.Vector3();
        class Triangle {
          constructor(t2 = new r.Vector3(), e2 = new r.Vector3(), i2 = new r.Vector3()) {
            this.a = t2, this.b = e2, this.c = i2;
          }
          copy(t2) {
            return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
          }
          applyMatrix4(t2) {
            return this.a.applyMatrix4(t2), this.b.applyMatrix4(t2), this.c.applyMatrix4(t2), this;
          }
          getNormal() {
            var t2 = this.a.clone();
            return t2.sub(this.b), n.subVectors(this.c, this.b), t2.cross(n), t2.normalize(), t2;
          }
        }
      }, 222: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { CC: () => CC, Color: () => Color, builtinColorSchemes: () => h, chains: () => l, elementColors: () => a, htmlColors: () => r, residues: () => o, ssColors: () => s });
        class Color {
          constructor(t2, e2, i2) {
            return this.r = 0, this.g = 0, this.b = 0, arguments.length > 1 && "number" == typeof t2 ? (this.r = t2 || 0, this.g = e2 || 0, this.b = i2 || 0, this) : this.set(t2 || 0);
          }
          set(t2) {
            return t2 instanceof Color ? t2.clone() : ("number" == typeof t2 ? this.setHex(t2) : "object" == typeof t2 && (this.r = (null == t2 ? void 0 : t2.r) || 0, this.g = (null == t2 ? void 0 : t2.g) || 0, this.b = (null == t2 ? void 0 : t2.b) || 0), this);
          }
          setHex(t2) {
            return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, this;
          }
          getHex() {
            return Math.round(255 * this.r) << 16 | Math.round(255 * this.g) << 8 | Math.round(255 * this.b);
          }
          clone() {
            return new Color(this.r, this.g, this.b);
          }
          copy(t2) {
            return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
          }
          scaled() {
            var t2 = {};
            return t2.r = Math.round(255 * this.r), t2.g = Math.round(255 * this.g), t2.b = Math.round(255 * this.b), t2.a = 1, t2;
          }
        }
        class CC {
          static color(t2) {
            if (!t2) return CC.cache[0];
            if (t2 instanceof Color) return t2;
            if ("number" == typeof t2 && void 0 !== CC.cache[t2]) return CC.cache[t2];
            if (t2 && Array.isArray(t2)) return t2.map(CC.color);
            let e2 = CC.getHex(t2), i2 = new Color(e2);
            return CC.cache[e2] = i2, i2;
          }
          static getHex(t2) {
            var e2;
            if (Array.isArray(t2)) return t2.map(CC.getHex);
            if ("string" == typeof t2) {
              let i2 = t2;
              if (!isNaN(parseInt(i2))) return parseInt(i2);
              if (i2 = i2.trim(), 4 == i2.length && "#" == i2[0] && (i2 = "#" + i2[1] + i2[1] + i2[2] + i2[2] + i2[3] + i2[3]), 7 == i2.length && "#" == i2[0]) return parseInt(i2.substring(1), 16);
              let r2 = CC.rgbRegEx.exec(i2);
              if (r2) {
                "" != r2[1] && console.log("WARNING: Opacity value in rgba ignored.  Specify separately as opacity attribute.");
                let t3 = 0;
                for (let e3 = 2; e3 < 5; e3++) {
                  t3 *= 256;
                  let i3 = r2[e3].endsWith("%") ? 255 * parseFloat(r2[e3]) / 100 : parseFloat(r2[e3]);
                  t3 += Math.round(i3);
                }
                return t3;
              }
              return (null === (e2 = null === window || void 0 === window ? void 0 : window.$3Dmol) || void 0 === e2 ? void 0 : e2.htmlColors[t2.toLowerCase()]) || 0;
            }
            return t2;
          }
        }
        CC.rgbRegEx = /rgb(a?)\(\s*([^ ,\)\t]+)\s*,\s*([^ ,\)\t]+)\s*,\s*([^ ,\)\t]+)/i, CC.cache = { 0: new Color(0) };
        const r = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgrey: 11119017, darkgreen: 25600, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, grey: 8421504, green: 32768, greenyellow: 11403055, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgrey: 13882323, lightgreen: 9498256, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, s = { pyMol: { h: 16711680, s: 16776960, c: 65280 }, Jmol: { h: 16711808, s: 16762880, c: 16777215 } }, n = { H: 16777215, He: 16761035, HE: 16761035, Li: 11674146, LI: 11674146, B: 65280, C: 13158600, N: 9408511, O: 15728640, F: 14329120, Na: 255, NA: 255, Mg: 2263842, MG: 2263842, Al: 8421520, AL: 8421520, Si: 14329120, SI: 14329120, P: 16753920, S: 16762930, Cl: 65280, CL: 65280, Ca: 8421520, CA: 8421520, Ti: 8421520, TI: 8421520, Cr: 8421520, CR: 8421520, Mn: 8421520, MN: 8421520, Fe: 16753920, FE: 16753920, Ni: 10824234, NI: 10824234, Cu: 10824234, CU: 10824234, Zn: 10824234, ZN: 10824234, Br: 10824234, BR: 10824234, Ag: 8421520, AG: 8421520, I: 10494192, Ba: 16753920, BA: 16753920, Au: 14329120, AU: 14329120 }, a = { defaultColor: 16716947, Jmol: { H: 16777215, He: 14286847, HE: 14286847, Li: 13402367, LI: 13402367, Be: 12779264, BE: 12779264, B: 16758197, C: 9474192, N: 3166456, O: 16715021, F: 9494608, Ne: 11789301, NE: 11789301, Na: 11230450, NA: 11230450, Mg: 9109248, MG: 9109248, Al: 12560038, AL: 12560038, Si: 1578e4, SI: 1578e4, P: 16744448, S: 16777008, Cl: 2093087, CL: 2093087, Ar: 8442339, AR: 8442339, K: 9388244, Ca: 4062976, CA: 4062976, Sc: 15132390, SC: 15132390, Ti: 12567239, TI: 12567239, V: 10921643, Cr: 9083335, CR: 9083335, Mn: 10255047, MN: 10255047, Fe: 14706227, FE: 14706227, Co: 15765664, CO: 15765664, Ni: 5296208, NI: 5296208, Cu: 13140019, CU: 13140019, Zn: 8224944, ZN: 8224944, Ga: 12750735, GA: 12750735, Ge: 6721423, GE: 6721423, As: 12419299, AS: 12419299, Se: 16752896, SE: 16752896, Br: 10889513, BR: 10889513, Kr: 6076625, KR: 6076625, Rb: 7351984, RB: 7351984, Sr: 65280, SR: 65280, Y: 9764863, Zr: 9756896, ZR: 9756896, Nb: 7586505, NB: 7586505, Mo: 5551541, MO: 5551541, Tc: 3907230, TC: 3907230, Ru: 2396047, RU: 2396047, Rh: 687500, RH: 687500, Pd: 27013, PD: 27013, Ag: 12632256, AG: 12632256, Cd: 16767375, CD: 16767375, In: 10909043, IN: 10909043, Sn: 6717568, SN: 6717568, Sb: 10380213, SB: 10380213, Te: 13924864, TE: 13924864, I: 9699476, Xe: 4366e3, XE: 4366e3, Cs: 5707663, CS: 5707663, Ba: 51456, BA: 51456, La: 7394559, LA: 7394559, Ce: 16777159, CE: 16777159, Pr: 14286791, PR: 14286791, Nd: 13107143, ND: 13107143, Pm: 10747847, PM: 10747847, Sm: 9437127, SM: 9437127, Eu: 6422471, EU: 6422471, Gd: 4587463, GD: 4587463, Tb: 3211207, TB: 3211207, Dy: 2097095, DY: 2097095, Ho: 65436, HO: 65436, Er: 58997, ER: 58997, Tm: 54354, TM: 54354, Yb: 48952, YB: 48952, Lu: 43812, LU: 43812, Hf: 5096191, HF: 5096191, Ta: 5089023, TA: 5089023, W: 2200790, Re: 2522539, RE: 2522539, Os: 2516630, OS: 2516630, Ir: 1528967, IR: 1528967, Pt: 13684960, PT: 13684960, Au: 16765219, AU: 16765219, Hg: 12105936, HG: 12105936, Tl: 10900557, TL: 10900557, Pb: 5724513, PB: 5724513, Bi: 10375093, BI: 10375093, Po: 11230208, PO: 11230208, At: 7688005, AT: 7688005, Rn: 4358806, RN: 4358806, Fr: 4325478, FR: 4325478, Ra: 32e3, RA: 32e3, Ac: 7384058, AC: 7384058, Th: 47871, TH: 47871, Pa: 41471, PA: 41471, U: 36863, Np: 33023, NP: 33023, Pu: 27647, PU: 27647, Am: 5528818, AM: 5528818, Cm: 7888099, CM: 7888099, Bk: 9064419, BK: 9064419, Cf: 10565332, CF: 10565332, Es: 11739092, ES: 11739092, Fm: 11739066, FM: 11739066, Md: 11734438, MD: 11734438, No: 12389767, NO: 12389767, Lr: 13041766, LR: 13041766, Rf: 13369433, RF: 13369433, Db: 13697103, DB: 13697103, Sg: 14221381, SG: 14221381, Bh: 14680120, BH: 14680120, Hs: 15073326, HS: 15073326, Mt: 15400998, MT: 15400998 }, rasmol: n, defaultColors: Object.assign({}, n), greenCarbon: Object.assign(Object.assign({}, n), { C: 65280 }), cyanCarbon: Object.assign(Object.assign({}, n), { C: 65535 }), magentaCarbon: Object.assign(Object.assign({}, n), { C: 16711935 }), yellowCarbon: Object.assign(Object.assign({}, n), { C: 16776960 }), whiteCarbon: Object.assign(Object.assign({}, n), { C: 16777215 }), orangeCarbon: Object.assign(Object.assign({}, n), { C: 16753920 }), purpleCarbon: Object.assign(Object.assign({}, n), { C: 8388736 }), blueCarbon: Object.assign(Object.assign({}, n), { C: 255 }) }, o = { amino: { ALA: 13158600, ARG: 1334015, ASN: 56540, ASP: 15075850, CYS: 15132160, GLN: 56540, GLU: 15075850, GLY: 15461355, HIS: 8553170, ILE: 1016335, LEU: 1016335, LYS: 1334015, MET: 15132160, PHE: 3289770, PRO: 14456450, SER: 16422400, THR: 16422400, TRP: 11819700, TYR: 3289770, VAL: 1016335, ASX: 16738740, GLX: 16738740 }, shapely: { ALA: 9240460, ARG: 124, ASN: 16743536, ASP: 10485826, CYS: 16777072, GLN: 16731212, GLU: 6684672, GLY: 16777215, HIS: 7368959, ILE: 19456, LEU: 4546117, LYS: 4671416, MET: 12099650, PHE: 5459026, PRO: 5395026, SER: 16740418, THR: 12078080, TRP: 5195264, TYR: 9203788, VAL: 16747775, ASX: 16711935, GLX: 16711935 }, nucleic: { A: 10526975, G: 16740464, I: 8454143, C: 16747595, T: 10551200, U: 16744576 } }, l = { atom: { A: 12636415, B: 11599792, C: 16761032, D: 16777088, E: 16761087, F: 11596016, G: 16765040, H: 15761536, I: 16113331, J: 49151, K: 13458524, L: 6737322, M: 10145074, N: 15631086, O: 52945, P: 65407, Q: 3978097, R: 139, S: 12433259, T: 25600, U: 8388608, V: 8421376, W: 8388736, X: 32896, Y: 12092939, Z: 11674146 }, hetatm: { A: 9478351, B: 8441752, C: 13602992, D: 13619056, E: 13603023, F: 8437952, G: 13607008, H: 12603504, I: 12955267, J: 42959, K: 11881548, L: 5682578, M: 9090346, N: 12481214, O: 46753, P: 53103, Q: 3447649, R: 187, S: 10854235, T: 37888, U: 11534336, V: 11579392, W: 11534512, X: 45232, Y: 15250963, Z: 12726834 } }, h = { ssPyMol: { prop: "ss", map: s.pyMol }, ssJmol: { prop: "ss", map: s.Jmol }, Jmol: { prop: "elem", map: a.Jmol }, amino: { prop: "resn", map: o.amino }, shapely: { prop: "resn", map: o.shapely }, nucleic: { prop: "resn", map: o.nucleic }, chain: { prop: "chain", map: l.atom }, rasmol: { prop: "elem", map: a.rasmol }, default: { prop: "elem", map: a.defaultColors }, greenCarbon: { prop: "elem", map: a.greenCarbon }, chainHetatm: { prop: "chain", map: l.hetatm }, cyanCarbon: { prop: "elem", map: a.cyanCarbon }, magentaCarbon: { prop: "elem", map: a.magentaCarbon }, purpleCarbon: { prop: "elem", map: a.purpleCarbon }, whiteCarbon: { prop: "elem", map: a.whiteCarbon }, orangeCarbon: { prop: "elem", map: a.orangeCarbon }, yellowCarbon: { prop: "elem", map: a.yellowCarbon }, blueCarbon: { prop: "elem", map: a.blueCarbon } };
      }, 421: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { CAP: () => it, CC: () => s.CC, CONTEXTS_PER_VIEWPORT: () => Wt, Color: () => s.Color, CustomLinear: () => r.CustomLinear, Cylinder: () => J.Cylinder, GLDraw: () => rt, GLModel: () => GLModel, GLShape: () => GLShape, GLViewer: () => GLViewer, GLVolumetricRender: () => GLVolumetricRender, Gradient: () => r.Gradient, GradientType: () => r.GradientType, Label: () => Label, LabelCount: () => a, MarchingCube: () => MarchingCube, MarchingCubeInitializer: () => MarchingCubeInitializer, Matrix3: () => $.Matrix3, Matrix4: () => $.Matrix4, Parsers: () => K, PausableTimer: () => L.PausableTimer, PointGrid: () => PointGrid, ProteinSurface: () => ProteinSurface2, Quaternion: () => $.Quaternion, ROYGB: () => r.ROYGB, RWB: () => r.RWB, Ray: () => $.Ray, Sinebow: () => r.Sinebow, Sphere: () => J.Sphere, SurfaceType: () => Q, Triangle: () => J.Triangle, Vector2: () => $.Vector2, Vector3: () => $.Vector3, VolumeData: () => st.VolumeData, adjustVolumeStyle: () => L.adjustVolumeStyle, applyPartialCharges: () => h, autoinit: () => Xt, autoload: () => $t, base64ToArray: () => L.base64ToArray, bondLength: () => C.bondLength, builtinColorSchemes: () => s.builtinColorSchemes, builtinGradients: () => r.builtinGradients, chains: () => s.chains, clamp: () => $.clamp, conversionMatrix3: () => $.conversionMatrix3, createStereoViewer: () => Zt, createViewer: () => qt, createViewerGrid: () => Yt, deepCopy: () => L.deepCopy, degToRad: () => $.degToRad, download: () => L.download, drawCartoon: () => xt, elementColors: () => s.elementColors, extend: () => L.extend, get: () => L.get, getAtomProperty: () => L.getAtomProperty, getColorFromStyle: () => L.getColorFromStyle, getElement: () => L.getElement, getExtent: () => L.getExtent, getGradient: () => r.getGradient, getPropertyRange: () => L.getPropertyRange, getbin: () => L.getbin, htmlColors: () => s.htmlColors, inflateString: () => L.inflateString, isEmptyObject: () => L.isEmptyObject, isNumeric: () => L.isNumeric, makeFunction: () => L.makeFunction, mergeGeos: () => L.mergeGeos, normalizeValue: () => r.normalizeValue, partialCharges: () => l, processing_autoinit: () => Kt, residues: () => s.residues, setBondLength: () => C.setBondLength, setSyncSurface: () => et, specStringToObject: () => L.specStringToObject, splitMesh: () => wt, ssColors: () => s.ssColors, subdivide_spline: () => nt, syncSurface: () => tt, viewers: () => Qt });
        var r = i(546), s = i(222), n = i(638);
        let a = 0;
        function o(t2, e2, i2) {
          var r2 = i2;
          return void 0 !== t2 && (t2 instanceof s.Color ? r2 = t2.scaled() : void 0 !== (r2 = s.CC.color(t2)).scaled && (r2 = r2.scaled())), void 0 !== e2 && (r2.a = parseFloat(e2)), r2;
        }
        class Label {
          constructor(t2, e2) {
            this.id = a++, this.stylespec = e2 || {}, this.canvas = document.createElement("canvas"), this.canvas.width = 134, this.canvas.height = 35, this.context = this.canvas.getContext("2d"), this.sprite = new n.Sprite(), this.text = t2, this.frame = this.stylespec.frame;
          }
          getStyle() {
            return this.stylespec;
          }
          hide() {
            this.sprite && (this.sprite.visible = false);
          }
          show() {
            this.sprite && (this.sprite.visible = true);
          }
          setContext() {
            var t2 = this.stylespec, e2 = void 0 !== t2.useScreen && t2.useScreen, i2 = t2.showBackground;
            "0" !== i2 && "false" !== i2 || (i2 = false), void 0 === i2 && (i2 = true);
            var s2 = t2.font ? t2.font : "sans-serif", a2 = parseInt(t2.fontSize) ? parseInt(t2.fontSize) : 18, l2 = o(t2.fontColor, t2.fontOpacity, { r: 255, g: 255, b: 255, a: 1 }), h2 = t2.padding ? t2.padding : 4, c2 = t2.borderThickness ? t2.borderThickness : 0, d2 = o(t2.backgroundColor, t2.backgroundOpacity, { r: 0, g: 0, b: 0, a: 1 }), u2 = o(t2.borderColor, t2.borderOpacity, d2), f2 = t2.position ? t2.position : { x: -10, y: 1, z: 1 }, p2 = void 0 === t2.inFront || t2.inFront;
            "false" !== p2 && "0" !== p2 || (p2 = false);
            var g2 = t2.alignment || n.SpriteAlignment.topLeft;
            "string" == typeof g2 && g2 in n.SpriteAlignment && (g2 = n.SpriteAlignment[g2]);
            var m2 = "";
            t2.bold && (m2 = "bold "), this.context.font = m2 + a2 + "px  " + s2;
            var v2 = this.context.measureText(this.text).width;
            i2 || (c2 = 0);
            var _2 = v2 + 2.5 * c2 + 2 * h2, y2 = 1.25 * a2 + 2 * c2 + 2 * h2;
            if (t2.backgroundImage) {
              var b2 = t2.backgroundImage, x2 = t2.backgroundWidth ? t2.backgroundWidth : b2.width, w2 = t2.backgroundHeight ? t2.backgroundHeight : b2.height;
              x2 > _2 && (_2 = x2), w2 > y2 && (y2 = w2);
            }
            if (this.canvas.width = _2, this.canvas.height = y2, this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), m2 = "", t2.bold && (m2 = "bold "), this.context.font = m2 + a2 + "px  " + s2, this.context.fillStyle = "rgba(" + d2.r + "," + d2.g + "," + d2.b + "," + d2.a + ")", this.context.strokeStyle = "rgba(" + u2.r + "," + u2.g + "," + u2.b + "," + u2.a + ")", t2.backgroundGradient) {
              let e3 = this.context.createLinearGradient(0, y2 / 2, _2, y2 / 2), i3 = r.Gradient.getGradient(t2.backgroundGradient), s3 = i3.range(), n2 = -1, a3 = 1;
              s3 && (n2 = s3[0], a3 = s3[1]);
              let l3 = a3 - n2;
              for (let t3 = 0; t3 < 1.01; t3 += 0.1) {
                let r2 = o(i3.valueToHex(n2 + l3 * t3)), s4 = "rgba(" + r2.r + "," + r2.g + "," + r2.b + "," + r2.a + ")";
                e3.addColorStop(t3, s4);
              }
              this.context.fillStyle = e3;
            }
            this.context.lineWidth = c2, i2 && (function(t3, e3, i3, r2, s3, n2, a3) {
              t3.beginPath(), t3.moveTo(e3 + n2, i3), t3.lineTo(e3 + r2 - n2, i3), t3.quadraticCurveTo(e3 + r2, i3, e3 + r2, i3 + n2), t3.lineTo(e3 + r2, i3 + s3 - n2), t3.quadraticCurveTo(e3 + r2, i3 + s3, e3 + r2 - n2, i3 + s3), t3.lineTo(e3 + n2, i3 + s3), t3.quadraticCurveTo(e3, i3 + s3, e3, i3 + s3 - n2), t3.lineTo(e3, i3 + n2), t3.quadraticCurveTo(e3, i3, e3 + n2, i3), t3.closePath(), t3.fill(), a3 && t3.stroke();
            })(this.context, c2, c2, _2 - 2 * c2, y2 - 2 * c2, 6, c2 > 0), t2.backgroundImage && this.context.drawImage(b2, 0, 0, _2, y2), this.context.fillStyle = "rgba(" + l2.r + "," + l2.g + "," + l2.b + "," + l2.a + ")", this.context.fillText(this.text, c2 + h2, a2 + c2 + h2, v2);
            var A2 = new n.Texture(this.canvas);
            A2.needsUpdate = true, this.sprite.material = new n.SpriteMaterial({ map: A2, useScreenCoordinates: e2, alignment: g2, depthTest: !p2, screenOffset: t2.screenOffset || null }), this.sprite.scale.set(1, 1, 1), this.sprite.position.set(f2.x, f2.y, f2.z);
          }
          dispose() {
            void 0 !== this.sprite.material.map && this.sprite.material.map.dispose(), void 0 !== this.sprite.material && this.sprite.material.dispose();
          }
        }
        const l = { "ALA:N": -0.15, "ALA:CA": 0.1, "ALA:CB": 0, "ALA:C": 0.6, "ALA:O": -0.55, "ARG:N": -0.15, "ARG:CA": 0.1, "ARG:CB": 0, "ARG:CG": 0, "ARG:CD": 0.1, "ARG:NE": -0.1, "ARG:CZ": 0.5, "ARG:NH1": 0.25, "ARG:NH2": 0.25, "ARG:C": 0.6, "ARG:O": -0.55, "ASN:N": -0.15, "ASN:CA": 0.1, "ASN:CB": 0, "ASN:CG": 0.55, "ASN:OD1": -0.55, "ASN:ND2": 0, "ASN:C": 0.6, "ASN:O": -0.55, "ASP:N": -0.15, "ASP:CA": 0.1, "ASP:CB": 0, "ASP:CG": 0.14, "ASP:OD1": -0.57, "ASP:OD2": -0.57, "ASP:C": 0.6, "ASP:O": -0.55, "CYS:N": -0.15, "CYS:CA": 0.1, "CYS:CB": 0.19, "CYS:SG": -0.19, "CYS:C": 0.6, "CYS:O": -0.55, "GLN:N": -0.15, "GLN:CA": 0.1, "GLN:CB": 0, "GLN:CG": 0, "GLN:CD": 0.55, "GLN:OE1": -0.55, "GLN:NE2": 0, "GLN:C": 0.6, "GLN:O": -0.55, "GLU:N": -0.15, "GLU:CA": 0.1, "GLU:CB": 0, "GLU:CG": 0, "GLU:CD": 0.14, "GLU:OE1": -0.57, "GLU:OE2": -0.57, "GLU:C": 0.6, "GLU:O": -0.55, "GLY:N": -0.15, "GLY:CA": 0.1, "GLY:C": 0.6, "GLY:O": -0.55, "HIS:N": -0.15, "HIS:CA": 0.1, "HIS:CB": 0, "HIS:CG": 0.1, "HIS:ND1": -0.1, "HIS:CD2": 0.1, "HIS:NE2": -0.4, "HIS:CE1": 0.3, "HIS:C": 0.6, "HIS:O": -0.55, "ILE:N": -0.15, "ILE:CA": 0.1, "ILE:CB": 0, "ILE:CG2": 0, "ILE:CG1": 0, "ILE:CD": 0, "ILE:C": 0.6, "ILE:O": -0.55, "LEU:N": -0.15, "LEU:CA": 0.1, "LEU:CB": 0, "LEU:CG": 0, "LEU:CD1": 0, "LEU:CD2": 0, "LEU:C": 0.6, "LEU:O": -0.55, "LYS:N": -0.15, "LYS:CA": 0.1, "LYS:CB": 0, "LYS:CG": 0, "LYS:CD": 0, "LYS:CE": 0.25, "LYS:NZ": 0.75, "LYS:C": 0.6, "LYS:O": -0.55, "MET:N": -0.15, "MET:CA": 0.1, "MET:CB": 0, "MET:CG": 0.06, "MET:SD": -0.12, "MET:CE": 0.06, "MET:C": 0.6, "MET:O": -0.55, "PHE:N": -0.15, "PHE:CA": 0.1, "PHE:CB": 0, "PHE:CG": 0, "PHE:CD1": 0, "PHE:CD2": 0, "PHE:CE1": 0, "PHE:CE2": 0, "PHE:CZ": 0, "PHE:C": 0.6, "PHE:O": -0.55, "PRO:N": -0.25, "PRO:CD": 0.1, "PRO:CA": 0.1, "PRO:CB": 0, "PRO:CG": 0, "PRO:C": 0.6, "PRO:O": -0.55, "SER:N": -0.15, "SER:CA": 0.1, "SER:CB": 0.25, "SER:OG": -0.25, "SER:C": 0.6, "SER:O": -0.55, "THR:N": -0.15, "THR:CA": 0.1, "THR:CB": 0.25, "THR:OG1": -0.25, "THR:CG2": 0, "THR:C": 0.6, "THR:O": -0.55, "TRP:N": -0.15, "TRP:CA": 0.1, "TRP:CB": 0, "TRP:CG": -0.03, "TRP:CD2": 0.1, "TRP:CE2": -0.04, "TRP:CE3": -0.03, "TRP:CD1": 0.06, "TRP:NE1": -0.06, "TRP:CZ2": 0, "TRP:CZ3": 0, "TRP:CH2": 0, "TRP:C": 0.6, "TRP:O": -0.55, "TYR:N": -0.15, "TYR:CA": 0.1, "TYR:CB": 0, "TYR:CG": 0, "TYR:CD1": 0, "TYR:CE1": 0, "TYR:CD2": 0, "TYR:CE2": 0, "TYR:CZ": 0.25, "TYR:OH": -0.25, "TYR:C": 0.6, "TYR:O": -0.55, "VAL:N": -0.15, "VAL:CA": 0.1, "VAL:CB": 0, "VAL:CG1": 0, "VAL:CG2": 0, "VAL:C": 0.6, "VAL:O": -0.55 };
        function h(t2, e2) {
          if ((!e2 || void 0 === t2.partialCharge) && t2.resn && t2.atom) {
            var i2 = t2.resn + ":" + t2.atom;
            t2.properties.partialCharge = l[i2];
          }
        }
        var c = i(797), d = i(865), u = i(392);
        function f(t2, e2) {
          for (var i2 = [[]], r2 = void 0 === (e2 = e2 || {}).assignBonds || e2.assignBonds, s2 = t2.trimStart().split(/\r?\n|\r/); s2.length > 0 && !(s2.length < 3); ) {
            var a2 = parseInt(s2[0]);
            if (isNaN(a2) || a2 <= 0) break;
            if (s2.length < a2 + 2) break;
            var o2 = /Lattice\s*=\s*["\{\}]([^"\{\}]+)["\{\}]\s*/gi.exec(s2[1]);
            if (null != o2 && o2.length > 1) {
              var l2 = new Float32Array(o2[1].split(/\s+/)), h2 = new n.Matrix3(l2[0], l2[3], l2[6], l2[1], l2[4], l2[7], l2[2], l2[5], l2[8]);
              i2.modelData = [{ cryst: { matrix: h2 } }];
            }
            for (var c2 = 2, d2 = i2[i2.length - 1].length, f2 = d2 + a2, p2 = d2; p2 < f2; p2++) {
              var g2 = s2[c2++].trim().split(/\s+/), m2 = {};
              m2.serial = p2;
              var v2 = g2[0];
              m2.atom = m2.elem = v2[0].toUpperCase() + v2.substring(1, 2).toLowerCase(), m2.x = parseFloat(g2[1]), m2.y = parseFloat(g2[2]), m2.z = parseFloat(g2[3]), m2.hetflag = true, m2.bonds = [], m2.bondOrder = [], m2.properties = {}, i2[i2.length - 1][p2] = m2, g2.length >= 7 && (m2.dx = parseFloat(g2[4]), m2.dy = parseFloat(g2[5]), m2.dz = parseFloat(g2[6]));
            }
            if (!e2.multimodel) break;
            i2.push([]), s2.splice(0, c2);
          }
          if (r2) for (let t3 = 0; t3 < i2.length; t3++) (0, u.assignBonds)(i2[t3], e2);
          if (e2.onemol) {
            var _2 = i2;
            (i2 = []).push(_2[0]);
            for (let t3 = 1; t3 < _2.length; t3++) {
              let e3 = i2[0].length;
              for (let r3 = 0; r3 < _2[t3].length; r3++) {
                let s3 = _2[t3][r3];
                for (let t4 = 0; t4 < s3.bonds.length; t4++) s3.bonds[t4] = s3.bonds[t4] + e3;
                s3.index = i2[0].length, s3.serial = i2[0].length, i2[0].push(s3);
              }
            }
          }
          return i2;
        }
        function p(t2, e2) {
          var i2 = "V2000", r2 = t2.split(/\r?\n|\r/);
          return r2.length > 3 && r2[3].length > 38 && (i2 = r2[3].substring(34, 39)), "V2000" === i2 ? (function(t3, e3) {
            var i3 = [[]], r3 = false;
            for (void 0 !== e3.keepH && (r3 = !e3.keepH); t3.length > 0 && !(t3.length < 4); ) {
              var s2 = parseInt(t3[3].substring(0, 3));
              if (isNaN(s2) || s2 <= 0) break;
              var n2 = parseInt(t3[3].substring(3, 6)), a2 = 4;
              if (t3.length < 4 + s2 + n2) break;
              var o2, l2, h2 = [], c2 = i3[i3.length - 1].length, d2 = c2 + s2;
              for (o2 = c2; o2 < d2; o2++, a2++) {
                var u2 = {}, f2 = (l2 = t3[a2]).substring(31, 34).replace(/ /g, "");
                u2.atom = u2.elem = f2[0].toUpperCase() + f2.substring(1).toLowerCase(), "H" === u2.elem && r3 || (u2.serial = o2, h2[o2] = i3[i3.length - 1].length, u2.x = parseFloat(l2.substring(0, 10)), u2.y = parseFloat(l2.substring(10, 20)), u2.z = parseFloat(l2.substring(20, 30)), u2.hetflag = true, u2.bonds = [], u2.bondOrder = [], u2.properties = {}, u2.index = i3[i3.length - 1].length, i3[i3.length - 1].push(u2));
              }
              for (o2 = 0; o2 < n2; o2++, a2++) {
                l2 = t3[a2];
                var p2 = h2[parseInt(l2.substring(0, 3)) - 1 + c2], g2 = h2[parseInt(l2.substring(3, 6)) - 1 + c2], m2 = parseFloat(l2.substring(6));
                void 0 !== p2 && void 0 !== g2 && (i3[i3.length - 1][p2].bonds.push(g2), i3[i3.length - 1][p2].bondOrder.push(m2), i3[i3.length - 1][g2].bonds.push(p2), i3[i3.length - 1][g2].bondOrder.push(m2));
              }
              if (!e3.multimodel) break;
              for (e3.onemol || i3.push([]); "$$$$" !== t3[a2] && a2 < t3.length; ) a2++;
              t3.splice(0, ++a2);
            }
            return i3;
          })(r2, e2) : "V3000" === i2 ? (function(t3, e3) {
            var i3 = [[]], r3 = false;
            for (void 0 !== e3.keepH && (r3 = !e3.keepH); t3.length > 0 && !(t3.length < 8) && t3[4].startsWith("M  V30 BEGIN CTAB") && t3[5].startsWith("M  V30 COUNTS") && !(t3[5].length < 14); ) {
              var s2 = t3[5].substring(13).match(/\S+/g);
              if (s2.length < 2) break;
              var n2 = parseInt(s2[0]);
              if (isNaN(n2) || n2 <= 0) break;
              var a2 = parseInt(s2[1]), o2 = 7;
              if (t3.length < 8 + n2 + a2) break;
              var l2, h2 = [], c2 = i3[i3.length - 1].length, d2 = c2 + n2;
              for (l2 = c2; l2 < d2; l2++, o2++) {
                var u2 = t3[o2].substring(6).match(/\S+/g);
                if (u2.length > 4) {
                  var f2 = {}, p2 = u2[1].replace(/ /g, "");
                  f2.atom = f2.elem = p2[0].toUpperCase() + p2.substring(1).toLowerCase(), "H" === f2.elem && r3 || (f2.serial = l2, h2[l2] = i3[i3.length - 1].length, f2.x = parseFloat(u2[2]), f2.y = parseFloat(u2[3]), f2.z = parseFloat(u2[4]), f2.hetflag = true, f2.bonds = [], f2.bondOrder = [], f2.properties = {}, f2.index = i3[i3.length - 1].length, i3[i3.length - 1].push(f2));
                }
              }
              if ("M  V30 END ATOM" !== t3[o2]) break;
              if (o2++, 0 === a2 || "M  V30 BEGIN BOND" !== t3[o2]) break;
              for (o2++, l2 = 0; l2 < a2; l2++, o2++) {
                var g2 = t3[o2].substring(6).match(/\S+/g);
                if (g2.length > 3) {
                  var m2 = h2[parseInt(g2[2]) - 1 + c2], v2 = h2[parseInt(g2[3]) - 1 + c2], _2 = parseFloat(g2[1]);
                  void 0 !== m2 && void 0 !== v2 && (i3[i3.length - 1][m2].bonds.push(v2), i3[i3.length - 1][m2].bondOrder.push(_2), i3[i3.length - 1][v2].bonds.push(m2), i3[i3.length - 1][v2].bondOrder.push(_2));
                }
              }
              if (!e3.multimodel) break;
              for (e3.onemol || i3.push([]); "$$$$" !== t3[o2] && o2 < t3.length; ) o2++;
              t3.splice(0, ++o2);
            }
            return i3;
          })(r2, e2) : [[""]];
        }
        function g(t2, e2) {
          var i2 = [[]];
          "string" == typeof t2 && (t2 = JSON.parse(t2));
          for (var r2 = t2.m, s2 = r2[0].a, n2 = r2[0].b, a2 = r2[0].s, o2 = void 0 !== e2 && void 0 !== e2.parseStyle ? e2.parseStyle : void 0 !== a2, l2 = i2[i2.length - 1].length, h2 = 0; h2 < s2.length; h2++) {
            var c2 = s2[h2], d2 = {};
            d2.id = c2.i, d2.x = c2.x, d2.y = c2.y, d2.z = c2.z || 0, d2.bonds = [], d2.bondOrder = [];
            var u2 = c2.l || "C";
            d2.elem = u2[0].toUpperCase() + u2.substring(1).toLowerCase(), d2.serial = i2[i2.length - 1].length, o2 && (d2.style = a2[c2.s || 0]), i2[i2.length - 1].push(d2);
          }
          for (let t3 = 0; t3 < n2.length; t3++) {
            let e3 = n2[t3], r3 = e3.b + l2, s3 = e3.e + l2, a3 = e3.o || 1, o3 = i2[i2.length - 1][r3], h3 = i2[i2.length - 1][s3];
            o3.bonds.push(s3), o3.bondOrder.push(a3), h3.bonds.push(r3), h3.bondOrder.push(a3);
          }
          return i2;
        }
        function m(t2, e2) {
          !(function(t3, e3) {
            const i3 = e3 || 3.2, r3 = i3 * i3, s3 = [];
            for (let e4 = 0, i4 = t3.length; e4 < i4; e4++) {
              t3[e4].index = e4;
              const i5 = t3[e4];
              i5.hetflag || "N" !== i5.atom && "O" !== i5.atom || (s3.push(i5), i5.hbondOther = null, i5.hbondDistanceSq = Number.POSITIVE_INFINITY);
            }
            s3.sort((function(t4, e4) {
              return t4.z - e4.z;
            }));
            for (let t4 = 0, e4 = s3.length; t4 < e4; t4++) {
              const n3 = s3[t4];
              for (let a3 = t4 + 1; a3 < e4; a3++) {
                const t5 = s3[a3], e5 = t5.z - n3.z;
                if (e5 > i3) break;
                if (t5.atom == n3.atom) continue;
                const o3 = Math.abs(t5.y - n3.y);
                if (o3 > i3) continue;
                const l3 = Math.abs(t5.x - n3.x);
                if (l3 > i3) continue;
                const h2 = l3 * l3 + o3 * o3 + e5 * e5;
                h2 > r3 || t5.chain == n3.chain && Math.abs(t5.resi - n3.resi) < 4 || (h2 < n3.hbondDistanceSq && (n3.hbondOther = t5, n3.hbondDistanceSq = h2), h2 < t5.hbondDistanceSq && (t5.hbondOther = n3, t5.hbondDistanceSq = h2));
              }
            }
          })(t2, e2);
          const i2 = {};
          let r2, s2, n2, a2, o2, l2;
          for (r2 = 0, s2 = t2.length; r2 < s2; r2++) if (o2 = t2[r2], void 0 === i2[o2.chain] && (i2[o2.chain] = []), isFinite(o2.hbondDistanceSq)) {
            const t3 = o2.hbondOther;
            void 0 === i2[t3.chain] && (i2[t3.chain] = []), 4 === Math.abs(t3.resi - o2.resi) && (i2[o2.chain][o2.resi] = "h");
          }
          for (n2 in i2) for (a2 = 1; a2 < i2[n2].length - 1; a2++) {
            const t3 = i2[n2][a2 - 1], e3 = i2[n2][a2 + 1];
            l2 = i2[n2][a2], "h" == t3 && t3 == e3 && l2 != t3 && (i2[n2][a2] = t3);
          }
          for (r2 = 0, s2 = t2.length; r2 < s2; r2++) o2 = t2[r2], isFinite(o2.hbondDistanceSq) && "h" != i2[o2.chain][o2.resi] && "h" !== o2.ss && (i2[o2.chain][o2.resi] = "maybesheet");
          for (let e3 = 0, r3 = t2.length; e3 < r3; e3++) if (o2 = t2[e3], isFinite(o2.hbondDistanceSq) && "maybesheet" == i2[o2.chain][o2.resi]) {
            let t3 = o2.hbondOther, e4 = i2[t3.chain][t3.resi];
            "maybesheet" != e4 && "s" != e4 || (i2[o2.chain][o2.resi] = "s", i2[t3.chain][t3.resi] = "s");
          }
          for (let t3 in i2) {
            for (let e3 = 1; e3 < i2[t3].length - 1; e3++) {
              const r3 = i2[t3][e3 - 1], s3 = i2[t3][e3 + 1];
              l2 = i2[t3][e3], "s" == r3 && r3 == s3 && l2 != r3 && (i2[t3][e3] = r3);
            }
            for (let e3 = 0; e3 < i2[t3].length; e3++) {
              const r3 = i2[t3][e3];
              "h" != r3 && "s" != r3 || i2[t3][e3 - 1] != r3 && i2[t3][e3 + 1] != r3 && delete i2[t3][e3];
            }
          }
          for (r2 = 0, s2 = t2.length; r2 < s2; r2++) o2 = t2[r2], l2 = i2[o2.chain][o2.resi], delete o2.hbondOther, delete o2.hbondDistanceSq, void 0 !== l2 && "maybesheet" !== l2 && (o2.ss = l2, i2[o2.chain][o2.resi - 1] != l2 && (o2.ssbegin = true), i2[o2.chain][o2.resi + 1] != l2 && (o2.ssend = true));
        }
        function v(t2, e2, i2, r2) {
          const s2 = !i2.duplicateAssemblyAtoms, a2 = e2.length;
          let o2 = a2, l2 = -1, h2 = null, c2 = null;
          (i2.normalizeAssembly || i2.wrapAtoms) && r2 && (h2 = (0, n.conversionMatrix3)(r2.a, r2.b, r2.c, r2.alpha, r2.beta, r2.gamma), c2 = new n.Matrix3(), c2.getInverse3(h2));
          let d2 = function(t3) {
            let e3 = t3.clone().applyMatrix3(c2);
            const i3 = [e3.x, e3.y, e3.z], r3 = [0, 0, 0];
            for (let t4 = 0; t4 < 3; t4++) {
              for (; i3[t4] < -1e-3; ) i3[t4] += 1, r3[t4] += 1;
              for (; i3[t4] > 1.001; ) i3[t4] -= 1, r3[t4] -= 1;
            }
            const s3 = new n.Vector3(r3[0], r3[1], r3[2]);
            return s3.applyMatrix3(h2), s3;
          };
          if (i2.normalizeAssembly && r2) for (let i3 = 0; i3 < t2.length; i3++) {
            const r3 = new n.Vector3(0, 0, 0);
            for (let s4 = 0; s4 < a2; s4++) {
              const a3 = new n.Vector3(e2[s4].x, e2[s4].y, e2[s4].z);
              a3.applyMatrix4(t2[i3]), r3.add(a3);
            }
            r3.divideScalar(a2);
            const s3 = d2(r3);
            t2[i3].isNearlyIdentity() && s3.lengthSq() > 1e-3 && (l2 = i3), t2[i3].translate(s3);
          }
          if (s2) {
            if (t2.length > 1) for (let i3 = 0; i3 < e2.length; i3++) {
              var u2 = [];
              for (let r3 = 0; r3 < t2.length; r3++) if (!t2[r3].isNearlyIdentity()) {
                var f2 = new n.Vector3();
                f2.set(e2[i3].x, e2[i3].y, e2[i3].z), f2.applyMatrix4(t2[r3]), u2.push(f2);
              }
              e2[i3].symmetries = u2;
            }
          } else {
            for (let t3 = 0; t3 < a2; t3++) e2[t3].sym = -1;
            for (let s3 = 0; s3 < t2.length; s3++) if (t2[s3].isNearlyIdentity() || l2 == s3) for (let t3 = 0; t3 < a2; t3++) e2[t3].sym = s3;
            else {
              let l3 = new n.Vector3();
              for (let n2 = 0; n2 < a2; n2++) {
                const a3 = [];
                for (let t3 = 0; t3 < e2[n2].bonds.length; t3++) a3.push(e2[n2].bonds[t3] + o2);
                if (l3.set(e2[n2].x, e2[n2].y, e2[n2].z), l3.applyMatrix4(t2[s3]), i2.wrapAtoms && r2) {
                  let t3 = d2(l3);
                  l3.add(t3);
                }
                const h3 = {};
                for (const t3 in e2[n2]) h3[t3] = e2[n2][t3];
                h3.x = l3.x, h3.y = l3.y, h3.z = l3.z, h3.bonds = a3, h3.sym = s3, h3.index = e2.length, e2.push(h3);
              }
              o2 = e2.length;
            }
            if (i2.wrapAtoms && r2) {
              let t3 = new n.Vector3();
              for (let i3 = 0; i3 < a2; i3++) {
                t3.set(e2[i3].x, e2[i3].y, e2[i3].z);
                let r3 = d2(t3);
                t3.add(r3), e2[i3].x = t3.x, e2[i3].y = t3.y, e2[i3].z = t3.z;
              }
            }
            if (l2 >= 0) {
              const i3 = new n.Vector3();
              for (let r3 = 0; r3 < a2; r3++) i3.set(e2[r3].x, e2[r3].y, e2[r3].z), i3.applyMatrix4(t2[l2]), e2[r3].x = i3.x, e2[r3].y = i3.y, e2[r3].z = i3.z;
            }
            t2.length = 0;
          }
        }
        var _ = i(408);
        const y = /* @__PURE__ */ new Set(["ABU", "ACD", "ALA", "ALB", "ALI", "ARG", "AR0", "ASN", "ASP", "ASX", "BAS", "CYS", "CYH", "CYX", "CSS", "CSH", "GLN", "GLU", "GLX", "GLY", "HIS", "HIE", "HID", "HIP", "HYP", "ILE", "ILU", "LEU", "LYS", "MET", "PCA", "PGA", "PHE", "PR0", "PRO", "PRZ", "SER", "THR", "TRP", "TYR", "VAL", "A", "1MA", "C", "5MC", "OMC", "G", "1MG", "2MG", "M2G", "7MG", "OMG", "YG", "I", "T", "U", "+U", "H2U", "5MU", "PSU", "ACE", "F0R", "H2O", "HOH", "WAT"]);
        function b(t2, e2) {
          const i2 = [], r2 = [];
          for (let e3 = 0, s3 = t2.length; e3 < s3; e3++) {
            const s4 = t2[e3];
            s4.index = e3, s4.hetflag || !y.has(s4.resn) ? r2.push(s4) : i2.push(s4);
          }
          (0, u.assignBonds)(r2, e2), i2.sort((function(t3, e3) {
            return t3.chain !== e3.chain ? t3.chain < e3.chain ? -1 : 1 : t3.resi - e3.resi;
          }));
          let s2, n2 = -1, a2 = -1;
          for (let t3 = 0, r3 = i2.length; t3 < r3; t3++) {
            const r4 = i2[t3];
            r4.resi !== n2 && (n2 = r4.resi, s2 || a2++, s2 = false), r4.reschain = a2;
            for (let n3 = t3 + 1; n3 < i2.length; n3++) {
              const t4 = i2[n3];
              if (t4.chain !== r4.chain || t4.resi - r4.resi > 1) break;
              (0, _.areConnected)(r4, t4, e2) && (-1 === r4.bonds.indexOf(t4.index) && (r4.bonds.push(t4.index), r4.bondOrder.push(1), t4.bonds.push(r4.index), t4.bondOrder.push(1)), r4.resi !== t4.resi && (s2 = true));
            }
          }
        }
        function x(t2, e2 = {}) {
          const i2 = [], r2 = !e2.doAssembly, s2 = i2.modelData = [], a2 = void 0 === e2.assignBonds || e2.assignBonds;
          function o2(t3, e3) {
            const i3 = [];
            let r3 = 0, s3 = 0;
            for (; s3 < t3.length; ) {
              for (; t3.substring(s3, s3 + e3.length) !== e3 && s3 < t3.length; ) if ("'" === t3[s3]) {
                for (s3++; s3 < t3.length && "'" !== t3[s3]; ) s3++;
                for (; t3.substring(s3, s3 + e3.length) !== e3 && s3 < t3.length; ) s3++;
              } else if ('"' === t3[s3]) {
                for (s3++; s3 < t3.length && '"' !== t3[s3]; ) s3++;
                s3++;
              } else s3++;
              i3.push(t3.substring(r3, s3)), r3 = s3 += e3.length;
            }
            return i3;
          }
          const l2 = t2.split(/\r?\n|\r/), h2 = [];
          let c2 = false;
          for (let t3 = 0; t3 < l2.length; t3++) {
            var d2 = l2[t3].split("#")[0];
            if (c2 ? ";" === d2[0] && (c2 = false) : ";" === d2[0] && (c2 = true), c2 || "" !== d2) {
              if (!c2 && "_" === (d2 = d2.trim())[0]) {
                const t4 = d2.split(/\s/)[0].indexOf(".");
                if (t4 > -1) {
                  let e3 = d2.split("");
                  e3[t4] = "_", d2 = (d2 = e3.join("")).substring(0, t4) + "_" + d2.substring(t4 + 1);
                }
              }
              h2.push(d2);
            }
          }
          let u2 = 0;
          for (; u2 < h2.length; ) {
            for (; !h2[u2].startsWith("data_") || "data_global" === h2[u2]; ) u2++;
            u2++;
            const t3 = {};
            for (; u2 < h2.length && !h2[u2].startsWith("data_"); ) if (void 0 === h2[u2][0]) u2++;
            else if ("_" === h2[u2][0]) {
              const e4 = h2[u2].split(/\s/)[0].toLowerCase(), i3 = t3[e4] = t3[e4] || [], r3 = h2[u2].substring(h2[u2].indexOf(e4) + e4.length);
              if ("" === r3) if (u2++, ";" === h2[u2][0]) {
                let t4 = h2[u2].substring(1);
                for (u2++; ";" !== h2[u2]; ) t4 = t4 + "\n" + h2[u2], u2++;
                i3.push(t4);
              } else i3.push(h2[u2]);
              else i3.push(r3.trim());
              u2++;
            } else if ("loop_" === h2[u2].substring(0, 5)) {
              u2++;
              const e4 = [];
              for (; "" === h2[u2] || "_" === h2[u2][0]; ) {
                if ("" !== h2[u2]) {
                  let i4 = h2[u2].split(/\s/)[0].toLowerCase(), r3 = t3[i4] = t3[i4] || [];
                  e4.push(r3);
                }
                u2++;
              }
              let i3 = 0;
              for (; u2 < h2.length && "_" !== h2[u2][0] && !h2[u2].startsWith("loop_") && !h2[u2].startsWith("data_"); ) {
                let t4 = o2(h2[u2], " ");
                for (let r3 = 0; r3 < t4.length; r3++) "" !== t4[r3] && (e4[i3].push(t4[r3]), i3 = (i3 + 1) % e4.length);
                u2++;
              }
            } else u2++;
            s2.push({ symmetries: [] }), i2.push([]);
            const e3 = void 0 !== t3._atom_site_id ? t3._atom_site_id.length : t3._atom_site_label.length;
            let a3;
            if (void 0 !== t3._cell_length_a) {
              const e4 = parseFloat(t3._cell_length_a), i3 = parseFloat(t3._cell_length_b), r3 = parseFloat(t3._cell_length_c), o3 = parseFloat(t3._cell_angle_alpha) || 90, l4 = parseFloat(t3._cell_angle_beta) || 90, h3 = parseFloat(t3._cell_angle_gamma) || 90;
              a3 = (0, n.conversionMatrix3)(e4, i3, r3, o3, l4, h3), s2[s2.length - 1].cryst = { a: e4, b: i3, c: r3, alpha: o3, beta: l4, gamma: h3 };
            }
            for (let r3 = 0; r3 < e3; r3++) {
              if (void 0 !== t3._atom_site_group_pdb && "TER" === t3._atom_site_group_pdb[r3]) continue;
              const e4 = {};
              if (void 0 !== t3._atom_site_cartn_x) e4.x = parseFloat(t3._atom_site_cartn_x[r3]), e4.y = parseFloat(t3._atom_site_cartn_y[r3]), e4.z = parseFloat(t3._atom_site_cartn_z[r3]);
              else {
                const i3 = (f2 = a3, p2 = parseFloat(t3._atom_site_fract_x[r3]), g2 = parseFloat(t3._atom_site_fract_y[r3]), _2 = parseFloat(t3._atom_site_fract_z[r3]), new n.Vector3(p2, g2, _2).applyMatrix3(f2));
                e4.x = i3.x, e4.y = i3.y, e4.z = i3.z;
              }
              e4.chain = t3._atom_site_auth_asym_id ? t3._atom_site_auth_asym_id[r3] : t3._atom_site_label_asym_id ? t3._atom_site_label_asym_id[r3] : void 0, e4.resi = t3._atom_site_auth_seq_id ? parseInt(t3._atom_site_auth_seq_id[r3]) : t3._atom_site_label_seq_id ? t3._atom_site_label_seq_id[r3] : void 0, e4.resn = t3._atom_site_auth_comp_id ? t3._atom_site_auth_comp_id[r3].trim() : t3._atom_site_label_comp_id ? t3._atom_site_label_comp_id[r3].trim() : void 0, e4.atom = t3._atom_site_auth_atom_id ? t3._atom_site_auth_atom_id[r3].replace(/"/gm, "") : t3._atom_site_label_atom_id ? t3._atom_site_label_atom_id[r3].replace(/"/gm, "") : void 0, e4.hetflag = !t3._atom_site_group_pdb || "HETA" === t3._atom_site_group_pdb[r3] || "HETATM" === t3._atom_site_group_pdb[r3], t3._atom_site_b_iso_or_equiv && (e4.b = parseFloat(t3._atom_site_b_iso_or_equiv[r3]));
              let s3 = "X";
              t3._atom_site_type_symbol ? s3 = t3._atom_site_type_symbol[r3].replace(/\(?\+?\d+.*/, "") : t3._atom_site_label && (s3 = t3._atom_site_label[r3].split("_")[0].replace(/\(?\d+.*/, "")), e4.elem = s3[0].toUpperCase() + s3.substring(1, 2).toLowerCase(), e4.bonds = [], e4.ss = "c", e4.serial = r3, e4.bondOrder = [], e4.properties = {}, i2[i2.length - 1].push(e4);
            }
            if (void 0 !== t3._pdbx_struct_oper_list_id && !r2) for (let e4 = 0; e4 < t3._pdbx_struct_oper_list_id.length; e4++) {
              const i3 = parseFloat(t3["_pdbx_struct_oper_list_matrix[1][1]"][e4]), r3 = parseFloat(t3["_pdbx_struct_oper_list_matrix[1][2]"][e4]), a4 = parseFloat(t3["_pdbx_struct_oper_list_matrix[1][3]"][e4]), o3 = parseFloat(t3["_pdbx_struct_oper_list_vector[1]"][e4]), l4 = parseFloat(t3["_pdbx_struct_oper_list_matrix[2][1]"][e4]), h3 = parseFloat(t3["_pdbx_struct_oper_list_matrix[2][2]"][e4]), c3 = parseFloat(t3["_pdbx_struct_oper_list_matrix[2][3]"][e4]), d3 = parseFloat(t3["_pdbx_struct_oper_list_vector[2]"][e4]), u3 = parseFloat(t3["_pdbx_struct_oper_list_matrix[3][1]"][e4]), f3 = parseFloat(t3["_pdbx_struct_oper_list_matrix[3][2]"][e4]), p3 = parseFloat(t3["_pdbx_struct_oper_list_matrix[3][3]"][e4]), g3 = parseFloat(t3["_pdbx_struct_oper_list_vector[3]"][e4]), m2 = new n.Matrix4(i3, r3, a4, o3, l4, h3, c3, d3, u3, f3, p3, g3);
              s2[s2.length - 1].symmetries.push(m2);
            }
            const l3 = function(t4) {
              const e4 = t4.match("-"), i3 = (t4 = t4.replace(/[-xyz]/g, "")).split("/");
              let r3, s3;
              return s3 = void 0 === i3[1] ? 1 : parseInt(i3[1]), r3 = "" === i3[0] ? 1 : parseInt(i3[0]), r3 / s3 * (e4 ? -1 : 1);
            };
            if (void 0 !== t3._symmetry_equiv_pos_as_xyz && !r2) for (let e4 = 0; e4 < t3._symmetry_equiv_pos_as_xyz.length; e4++) {
              const i3 = t3._symmetry_equiv_pos_as_xyz[e4].replace(/["' ]/g, "").split(",").map((function(t4) {
                return t4.replace(/-/g, "+-");
              }));
              let r3 = new n.Matrix4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
              for (let t4 = 0; t4 < 3; t4++) {
                const e5 = i3[t4].split("+");
                for (let i4 = 0; i4 < e5.length; i4++) {
                  const s3 = e5[i4];
                  if ("" === s3) continue;
                  const n2 = l3(s3);
                  s3.match("x") ? r3.elements[t4 + 0] = n2 : s3.match("y") ? r3.elements[t4 + 4] = n2 : s3.match("z") ? r3.elements[t4 + 8] = n2 : r3.elements[t4 + 12] = n2;
                }
              }
              const o3 = a3.getMatrix4(), h3 = new n.Matrix4().getInverse(o3, true);
              r3 = new n.Matrix4().multiplyMatrices(r3, h3), r3 = new n.Matrix4().multiplyMatrices(o3, r3), s2[s2.length - 1].symmetries.push(r3);
            }
          }
          var f2, p2, g2, _2;
          for (let t3 = 0; t3 < i2.length; t3++) !a2 || e2.duplicateAssemblyAtoms && !e2.dontConnectDuplicatedAtoms || b(i2[t3], e2), m(i2[t3], e2.hbondCutoff), v(s2[t3].symmetries, i2[t3], e2, s2[t3].cryst), e2.duplicateAssemblyAtoms && !e2.dontConnectDuplicatedAtoms && a2 && b(i2[t3], e2);
          return i2;
        }
        let w = { "C.1": "C", C1: "C", "C.2": "C", C2: "C", "C.3": "C", C3: "C", "C.ar": "C", Car: "C", "C.cat": "C", Ccat: "C", "H.spc": "H", Hspc: "H", "H.t3p": "H", Ht3p: "H", "N.1": "N", N1: "N", "N.2": "N", N2: "N", "N.3": "N", N3: "N", "N.4": "N", N4: "N", "N.am": "N", Nam: "N", "N.ar": "N", Nar: "N", "N.p13": "N", Np13: "N", "O.2": "O", O2: "O", "O.3": "O", O3: "O", "O.co2": "O", Oco2: "O", "O.spc": "O", Ospc: "O", "O.t3p": "O", Ot3p: "O", "P.3": "P", P3: "P", "S.2": "S", S2: "S", "S.3": "S", S3: "S", "S.o": "S", So: "S", "S.o2": "S", So2: "S" };
        function A(t2, e2) {
          var i2 = [[]], r2 = false;
          void 0 !== e2.keepH && (r2 = !e2.keepH);
          var s2 = t2.search(/@<TRIPOS>MOLECULE/), n2 = t2.search(/@<TRIPOS>ATOM/);
          if (-1 == s2 || -1 == n2) return i2;
          for (var a2 = t2.substring(s2).split(/\r?\n|\r/); a2.length > 0; ) {
            var o2 = [], l2 = a2[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "), h2 = parseInt(l2[0]), c2 = 0;
            l2.length > 1 && (c2 = parseInt(l2[1]));
            var d2, u2 = 4;
            for (d2 = 3; d2 < a2.length; d2++) if ("@<TRIPOS>ATOM" == a2[d2]) {
              u2 = d2 + 1;
              break;
            }
            var f2 = i2[i2.length - 1].length, p2 = f2 + h2;
            for (d2 = f2; d2 < p2; d2++) {
              var g2 = {}, m2 = (l2 = a2[u2++].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "))[5];
              if (m2 = void 0 !== w[m2] ? w[m2] : (m2 = m2.split(".")[0])[0].toUpperCase() + m2.substring(1).toLowerCase(), g2.atom = l2[1], g2.elem = m2, "H" == g2.elem && r2) ;
              else {
                var v2 = i2[i2.length - 1].length, _2 = parseInt(l2[0]);
                g2.serial = _2, g2.x = parseFloat(l2[2]), g2.y = parseFloat(l2[3]), g2.z = parseFloat(l2[4]), g2.atom = l2[5];
                var y2 = parseFloat(l2[8]);
                g2.index = v2, g2.bonds = [], g2.bondOrder = [], g2.properties = { charge: y2, partialCharge: y2 }, o2[_2] = v2, i2[i2.length - 1].push(g2);
              }
            }
            for (var b2 = false; u2 < a2.length; ) if ("@<TRIPOS>BOND" == a2[u2++]) {
              b2 = true;
              break;
            }
            if (b2 && c2) for (d2 = 0; d2 < c2; d2++) {
              l2 = a2[u2++].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
              var x2 = parseInt(l2[1]), A2 = i2[i2.length - 1][o2[x2]], C2 = parseInt(l2[2]), S4 = i2[i2.length - 1][o2[C2]], M2 = parseInt(l2[3]);
              isNaN(M2) && (M2 = 1), void 0 !== A2 && void 0 !== S4 && (A2.bonds.push(o2[C2]), A2.bondOrder.push(M2), S4.bonds.push(o2[x2]), S4.bondOrder.push(M2));
            }
            if (!e2.multimodel) break;
            e2.onemol || i2.push([]), a2.splice(0, u2), t2 = a2.join("\n");
          }
          return i2;
        }
        var C = i(40);
        function S3(t2, e2) {
          let i2 = t2.replace(/ /g, "");
          return i2.length > 0 && "H" === i2[0] && "Hg" !== i2 && "He" !== i2 && "Hf" !== i2 && "Hs" !== i2 && "Ho" !== i2 && (i2 = "H"), i2.length > 1 && (i2 = i2[0].toUpperCase() + i2.substring(1).toLowerCase(), void 0 === C.bondTable[i2] ? i2 = i2[0] : e2 && ("Ca" === i2 || "Cd" === i2) && (i2 = "C")), i2;
        }
        function M(t2) {
          for (const e2 in t2) return false;
          return true;
        }
        function z(t2, e2, i2) {
          const r2 = [], s2 = void 0 === e2.assignBonds || e2.assignBonds, a2 = !e2.keepH, o2 = !!e2.noSecondaryStructure, l2 = !e2.noComputeSecondaryStructure, h2 = !e2.doAssembly, c2 = e2.altLoc ? e2.altLoc : "A", d2 = { symmetries: [], cryst: void 0 };
          let u2, f2 = [];
          const p2 = [];
          let g2;
          const _2 = {};
          for (let e3 = 0; e3 < t2.length; e3++) {
            g2 = t2[e3].replace(/^\s*/, "");
            const s3 = g2.substring(0, 6);
            let o3, l3, m2;
            if (0 === s3.indexOf("END")) {
              if (f2 = t2.slice(e3 + 1), "END" === s3) for (const t3 in i2) i2.hasOwnProperty(t3) && delete i2[t3];
              break;
            }
            if ("ATOM  " === s3 || "HETATM" === s3) {
              let t3, e4, i3, n2, o4, l4, h3, d3, f3, m3, v2, _3;
              if (v2 = g2.substring(16, 17), " " !== v2 && v2 !== c2 && "*" !== c2) continue;
              if (m3 = parseInt(g2.substring(6, 11)), u2 = g2.substring(12, 16).replace(/ /g, ""), t3 = g2.substring(17, 20).replace(/ /g, ""), e4 = g2.substring(21, 22), i3 = parseInt(g2.substring(22, 26)), n2 = g2.substring(26, 27), o4 = parseFloat(g2.substring(30, 38)), l4 = parseFloat(g2.substring(38, 46)), h3 = parseFloat(g2.substring(46, 54)), _3 = parseFloat(g2.substring(60, 68)), f3 = g2.substring(76, 78).replace(/ /g, ""), f3 = "" === f3 || void 0 === C.bondTable[f3] ? S3(g2.substring(12, 14), "A" == g2[0]) : f3[0].toUpperCase() + f3.substring(1).toLowerCase(), "H" === f3 && a2) continue;
              d3 = "H" == s3[0], p2[m3] = r2.length, r2.push({ resn: t3, x: o4, y: l4, z: h3, elem: f3, hetflag: d3, altLoc: v2, chain: e4, resi: i3, icode: n2, rescode: i3 + (" " !== n2 ? "^" + n2 : ""), serial: m3, atom: u2, bonds: [], ss: "c", bondOrder: [], properties: {}, b: _3, pdbline: g2 });
            } else if ("SHEET " === s3) {
              o3 = g2.substring(21, 22), l3 = parseInt(g2.substring(22, 26)), m2 = parseInt(g2.substring(33, 37)), o3 in i2 || (i2[o3] = {}), i2[o3][l3] = "s1";
              for (let t3 = l3 + 1; t3 < m2; t3++) i2[o3][t3] = "s";
              i2[o3][m2] = "s2";
            } else if ("CONECT" === s3) {
              const t3 = p2[parseInt(g2.substring(6, 11))], e4 = r2[t3], i3 = [11, 16, 21, 26];
              for (let s4 = 0; s4 < 4; s4++) {
                const n2 = p2[parseInt(g2.substring(i3[s4], i3[s4] + 5))];
                let a3 = t3 + ":" + n2;
                const o4 = r2[n2];
                if (void 0 !== e4 && void 0 !== o4) if (_2[a3]) {
                  _2[a3] += 1;
                  for (let t4 = 0; t4 < e4.bonds.length; t4++) if (e4.bonds[t4] == n2) {
                    const i4 = _2[a3];
                    e4.bondOrder[t4] = i4 >= 4 ? 1 : i4;
                  }
                } else _2[a3] = 1, 0 != e4.bonds.length && e4.bonds[e4.bonds.length - 1] === n2 || (e4.bonds.push(n2), e4.bondOrder.push(1));
              }
            } else if ("HELIX " === s3) {
              o3 = g2.substring(19, 20), l3 = parseInt(g2.substring(21, 25)), m2 = parseInt(g2.substring(33, 37)), o3 in i2 || (i2[o3] = {}), i2[o3][l3] = "h1";
              for (let t3 = l3 + 1; t3 < m2; t3++) i2[o3][t3] = "h";
              i2[o3][m2] = "h2";
            } else if (h2 || "REMARK" !== s3 || "BIOMT" !== g2.substring(13, 18)) {
              if ("CRYST1" === s3) {
                let t3, e4, i3, r3, s4, n2;
                t3 = parseFloat(g2.substring(7, 15)), e4 = parseFloat(g2.substring(16, 24)), i3 = parseFloat(g2.substring(25, 33)), r3 = parseFloat(g2.substring(34, 40)), s4 = parseFloat(g2.substring(41, 47)), n2 = parseFloat(g2.substring(48, 54)), d2.cryst = { a: t3, b: e4, c: i3, alpha: r3, beta: s4, gamma: n2 };
              } else if ("ANISOU" === s3) {
                const t3 = r2[p2[parseInt(g2.substring(6, 11))]];
                if (t3) {
                  const e4 = g2.substring(30).trim().split(/\s+/), i3 = { u11: parseInt(e4[0]), u22: parseInt(e4[1]), u33: parseInt(e4[2]), u12: parseInt(e4[3]), u13: parseInt(e4[4]), u23: parseInt(e4[5]) };
                  t3.uMat = i3;
                }
              }
            } else {
              let i3, r3 = new n.Matrix4();
              for (i3 = 1; i3 <= 3; i3++) if (g2 = t2[e3].replace(/^\s*/, ""), parseInt(g2.substring(18, 19)) == i3) r3.elements[i3 - 1] = parseFloat(g2.substring(23, 33)), r3.elements[i3 - 1 + 4] = parseFloat(g2.substring(33, 43)), r3.elements[i3 - 1 + 8] = parseFloat(g2.substring(43, 53)), r3.elements[i3 - 1 + 12] = parseFloat(g2.substring(53)), e3++;
              else for (; "BIOMT" === g2.substring(13, 18); ) e3++, g2 = t2[e3].replace(/^\s*/, "");
              r3.elements[3] = 0, r3.elements[7] = 0, r3.elements[11] = 0, r3.elements[15] = 1, d2.symmetries.push(r3), e3--;
            }
          }
          if ((function(t3, e3) {
            for (let i3 = 0, r3 = t3.length; i3 < r3; i3++) {
              const r4 = t3[i3];
              for (let i4 = 0; i4 < r4.bonds.length; i4++) {
                const s3 = t3[r4.bonds[i4]], n2 = e3[r4.serial];
                s3 && n2 && s3.bonds.indexOf(n2) < 0 && (s3.bonds.push(n2), s3.bondOrder.push(r4.bondOrder[i4]));
              }
            }
          })(r2, p2), s2 && b(r2, e2), h2 || v(d2.symmetries, r2, e2, d2.cryst), l2 && !o2 && m(r2, e2.hbondCutoff), !M(i2)) for (let t3 = 0; t3 < r2.length; t3++) {
            const e3 = r2[t3];
            if (void 0 !== e3 && (e3.chain in i2 && e3.resi in i2[e3.chain])) {
              const t4 = i2[e3.chain][e3.resi];
              e3.ss = t4[0], t4.length > 1 && ("1" == t4[1] ? e3.ssbegin = true : "2" == t4[1] && (e3.ssend = true));
            }
          }
          return [r2, d2, f2];
        }
        function T(t2, e2) {
          e2 = e2 || {};
          var i2 = [], r2 = {};
          i2.modelData = [];
          for (var s2 = t2.split(/\r?\n|\r/); s2.length > 0; ) {
            var n2 = z(s2, e2, r2), a2 = n2[0], o2 = n2[1];
            if (s2 = n2[2], 0 != a2.length) {
              if (e2.multimodel && e2.onemol && i2.length > 0) for (var l2 = i2[0].length, h2 = 0; h2 < a2.length; h2++) {
                var c2 = a2[h2];
                c2.index = h2;
                for (var d2 = 0; d2 < c2.bonds.length; d2++) c2.bonds[d2] += l2;
                i2[0].push(c2);
              }
              else i2.modelData.push(o2), i2.push(a2);
              if (!e2.multimodel) break;
            }
          }
          return i2;
        }
        function E(t2, e2) {
          var i2 = [[]], r2 = !e2.noSecondaryStructure;
          i2.modelData = [{ symmetries: [] }];
          var s2, n2 = [], a2 = t2.split(/\r?\n|\r/);
          for (let t3 = 0; t3 < a2.length; t3++) {
            var o2 = (s2 = a2[t3].replace(/^\s*/, "")).substring(0, 6);
            if (0 == o2.indexOf("END")) {
              if (e2.multimodel) {
                e2.onemol || i2.push([]);
                continue;
              }
              break;
            }
            if ("ATOM  " == o2 || "HETATM" == o2) {
              var l2;
              let t4 = parseInt(s2.substring(6, 11)), e3 = s2.substring(12, 16).replace(/ /g, ""), r3 = s2.substring(17, 20).trim(), a3 = s2.substring(21, 22), o3 = parseInt(s2.substring(22, 26));
              var h2 = s2.substring(30).trim().split(/\s+/), c2 = parseFloat(h2[0]), d2 = parseFloat(h2[1]), u2 = parseFloat(h2[2]), f2 = parseFloat(h2[3]), p2 = parseFloat(h2[4]), g2 = e3[0];
              e3.length > 1 && e3[1].toUpperCase() != e3[1] && (g2 = e3.substring(0, 2)), l2 = "H" == s2[0], n2[t4] = i2[i2.length - 1].length, i2[i2.length - 1].push({ resn: r3, x: c2, y: d2, z: u2, elem: g2, hetflag: l2, chain: a3, resi: o3, serial: t4, atom: e3, bonds: [], ss: "c", bondOrder: [], properties: { charge: f2, partialCharge: f2, radius: p2 }, pdbline: s2 });
            } else if ("CONECT" == o2) {
              var v2 = parseInt(s2.substring(6, 11)), _2 = i2[i2.length - 1][n2[v2]];
              for (let t4 = 0; t4 < 4; t4++) {
                var y2 = parseInt(s2.substring([11, 16, 21, 26][t4], [11, 16, 21, 26][t4] + 5)), x2 = i2[i2.length - 1][n2[y2]];
                void 0 !== _2 && void 0 !== x2 && (_2.bonds.push(n2[y2]), _2.bondOrder.push(1));
              }
            }
          }
          for (let t3 = 0; t3 < i2.length; t3++) b(i2[t3], e2), r2 && m(i2[t3], e2.hbondCutoff);
          return i2;
        }
        var L = i(864), F = i(471), I = function(t2) {
          return String.fromCharCode.apply(null, t2).replace(/\0/g, "");
        }, O = function(t2) {
          return 0 == t2 || 2 == t2 || 4 == t2 ? "h" : 3 == t2 ? "s" : "c";
        };
        let D = /* @__PURE__ */ new Set(["D-SACCHARIDE", "D-SACCHARIDE 1,4 AND 1,4 LINKING", "D-SACCHARIDE 1,4 AND 1,6 LINKING", "L-SACCHARIDE", "L-SACCHARIDE 1,4 AND 1,4 LINKING", "L-SACCHARIDE 1,4 AND 1,6 LINKING", "NON-POLYMER", "OTHER", "PEPTIDE-LIKE", "SACCHARIDE"]);
        function k(t2, e2) {
          var i2 = !e2.keepH, r2 = e2.altLoc ? e2.altLoc : "A", s2 = !!e2.noSecondaryStructure, a2 = !e2.noComputeSecondaryStructure, o2 = !e2.doAssembly, l2 = e2.assemblyIndex ? e2.assemblyIndex : 0;
          t2 = "string" == typeof t2 ? (0, L.base64ToArray)(t2) : new Uint8Array(t2);
          var h2, c2, d2, u2, f2, p2, g2 = F.decode(t2), _2 = [[]], y2 = _2.modelData = [], b2 = 0, x2 = 0, w2 = 0, A2 = g2.secStructList, C2 = g2.bFactorList, S4 = g2.altLocList, M2 = g2.occupancyList, z2 = g2.bondAtomList, T2 = g2.bondOrderList, E2 = g2.numModels;
          if (0 == E2) return _2;
          e2.multimodel || (E2 = 1);
          var k2 = [];
          if (!o2 && g2.bioAssemblyList && g2.bioAssemblyList.length > 0) {
            var R2 = g2.bioAssemblyList[l2].transformList;
            for (h2 = 0, p2 = R2.length; h2 < p2; h2++) {
              var P2 = new n.Matrix4(R2[h2].matrix);
              P2.transpose(), k2.push(P2);
            }
          }
          var U2 = null;
          if (g2.unitCell) {
            var B2 = g2.unitCell;
            U2 = { a: B2[0], b: B2[1], c: B2[2], alpha: B2[3], beta: B2[4], gamma: B2[5] };
          }
          let N2 = [];
          g2.entityList.forEach(((t3) => {
            t3.chainIndexList.forEach(((e3) => {
              N2[e3] = "polymer" == t3.type;
            }));
          }));
          var G2 = 0;
          for (f2 = 0; f2 < E2; f2++) {
            var V2 = g2.chainsPerModel[f2], j2 = _2[_2.length - 1], H2 = [];
            for (y2.push({ symmetries: k2, cryst: U2 }), h2 = 0; h2 < V2; ++h2) {
              var W2 = g2.groupsPerChain[b2], q2 = I(g2.chainIdList.subarray(4 * b2, 4 * b2 + 4));
              g2.chainNameList && (q2 = I(g2.chainNameList.subarray(4 * b2, 4 * b2 + 4)));
              var Y2 = x2, Z2 = "";
              for (c2 = 0; c2 < W2; ++c2) {
                var X2 = g2.groupList[g2.groupTypeList[x2]], K2 = X2.atomNameList.length, Q2 = 0, $2 = false, J2 = false;
                if (A2) {
                  Q2 = A2[x2];
                  var tt2 = O(Q2);
                  0 != x2 && tt2 == Z2 || ($2 = true), Z2 = tt2;
                  var et2 = x2 + 1;
                  (et2 >= A2.length || O(A2[et2] != tt2)) && (J2 = true);
                }
                var it2 = g2.groupIdList[x2], rt2 = X2.groupName;
                let t3 = X2.chemCompType;
                var st2 = w2;
                let e3 = D.has(t3) || !N2[b2];
                for (d2 = 0; d2 < K2; ++d2) {
                  var nt2 = X2.elementList[d2];
                  if (i2 && "H" == nt2) w2 += 1;
                  else {
                    var at2 = "";
                    C2 && (at2 = C2[w2]);
                    var ot2 = "";
                    S4 && S4[w2] && (ot2 = String.fromCharCode(S4[w2]));
                    var lt2 = "";
                    if (M2 && (lt2 = M2[w2]), "" == ot2 || ot2 == r2 || "*" == r2) {
                      var ht2 = g2.atomIdList[w2], ct2 = X2.atomNameList[d2], dt2 = 0;
                      X2.atomChargeList && (dt2 = X2.atomChargeList[d2]);
                      var ut2 = g2.xCoordList[w2], ft2 = g2.yCoordList[w2], pt2 = g2.zCoordList[w2];
                      H2[w2] = j2.length, j2.push({ resn: rt2, x: ut2, y: ft2, z: pt2, elem: nt2, hetflag: e3, chain: q2, resi: it2, icode: ot2, rescode: it2 + (" " != ot2 ? "^" + ot2 : ""), serial: ht2, altLoc: ot2, index: w2, atom: ct2, bonds: [], ss: O(Q2), ssbegin: $2, ssend: J2, bondOrder: [], properties: { charge: dt2, occupancy: lt2 }, b: at2 }), w2 += 1;
                    } else w2 += 1;
                  }
                }
                var gt2 = X2.bondAtomList;
                for (d2 = 0, u2 = X2.bondOrderList.length; d2 < u2; ++d2) {
                  var mt2 = st2 + gt2[2 * d2], vt2 = st2 + gt2[2 * d2 + 1], _t2 = X2.bondOrderList[d2], yt2 = H2[mt2], bt2 = H2[vt2], xt2 = j2[yt2], wt2 = j2[bt2];
                  xt2 && wt2 && (xt2.bonds.push(bt2), xt2.bondOrder.push(_t2), wt2.bonds.push(yt2), wt2.bondOrder.push(_t2));
                }
                x2 += 1;
              }
              for (x2 = Y2, c2 = 0; c2 < W2; ++c2) x2 += 1;
              b2 += 1;
            }
            if (z2) for (let t3 = G2, e3 = z2.length; t3 < e3; t3 += 2) {
              let e4 = z2[t3], i3 = z2[t3 + 1], r3 = T2 ? T2[t3 / 2] : 1;
              if (e4 >= w2) {
                G2 = t3;
                break;
              }
              let s3 = H2[e4], n2 = H2[i3], a3 = j2[s3], o3 = j2[n2];
              a3 && o3 && (a3.bonds.push(n2), a3.bondOrder.push(r3), o3.bonds.push(s3), o3.bondOrder.push(r3));
            }
            e2.multimodel && (e2.onemol || _2.push([]));
          }
          if (!o2) for (let t3 = 0; t3 < _2.length; t3++) v(y2[t3].symmetries, _2[t3], e2, y2[t3].cryst);
          return a2 && !s2 && m(_2, e2.hbondCutoff), _2;
        }
        function R(t2) {
          var e2, i2 = [], r2 = 0, s2 = t2.split(/\r?\n|\r/);
          if (!(s2.length > 0 && s2[0].includes("VERSION"))) return [];
          var n2 = s2.filter((function(t3) {
            return t3.includes("POINTERS") || t3.includes("ATOM_NAME") || t3.includes("CHARGE") || t3.includes("RADII") || t3.includes("BONDS_INC_HYDROGEN") || t3.includes("BONDS_WITHOUT_HYDROGEN");
          })), a2 = c2("POINTERS");
          if (-1 == a2) return [];
          var o2 = d2(a2), l2 = parseInt(s2[a2 + 1].slice(0, o2[1]));
          if (isNaN(l2) || l2 <= 0) return [];
          if (-1 == (a2 = c2("ATOM_NAME"))) return [];
          var h2 = (o2 = d2(a2))[0];
          for (let t3 = 0; t3 < l2 / o2[0]; t3++) {
            t3 == parseInt(l2 / o2[0]) && (h2 = l2 % o2[0]);
            for (let t4 = 0; t4 < h2; t4++) {
              let e3 = {}, n3 = { charge: "", radii: "" };
              e3.serial = r2, e3.x = 0, e3.y = 0, e3.z = 0, e3.atom = s2[a2 + 1].slice(o2[1] * t4, o2[1] * (t4 + 1)).trim(), e3.elem = s2[a2 + 1].slice(o2[1] * t4, o2[1] * t4 + 1).trim(), e3.properties = n3, e3.bonds = [], e3.bondOrder = [], i2.push(e3), r2++;
            }
            a2++;
          }
          if (-1 != (a2 = c2("CHARGE"))) {
            r2 = 0, h2 = (o2 = d2(a2))[0];
            for (let t3 = 0; t3 < l2 / o2[0]; t3++) {
              t3 == parseInt(l2 / o2[0]) && (h2 = l2 % o2[0]);
              for (let t4 = 0; t4 < h2; t4++) i2[r2].properties.charge = parseFloat(s2[a2 + 1].slice(o2[1] * t4, o2[1] * (t4 + 1))), r2++;
              a2++;
            }
          }
          if (-1 != (a2 = c2("RADII"))) {
            r2 = 0, h2 = (o2 = d2(a2))[0];
            for (let t3 = 0; t3 < l2 / o2[0]; t3++) {
              t3 == parseInt(l2 / o2[0]) && (h2 = l2 % o2[0]);
              for (let t4 = 0; t4 < h2; t4++) i2[r2].properties.radii = parseFloat(s2[a2 + 1].slice(o2[1] * t4, o2[1] * (t4 + 1))), r2++;
              a2++;
            }
          }
          if (-1 != (a2 = c2("BONDS_WITHOUT_HYDROGEN"))) for (r2 = 0, h2 = (o2 = d2(a2))[0], a2 += 1; !s2[a2].match(/^%FLAG/); ) {
            s2[a2 + 1].match(/^%FLAG/) && (h2 = l2 % o2[0]);
            for (let t3 = 0; t3 < h2; t3++) r2 % 3 == 0 ? e2 = parseInt(s2[a2].slice(o2[1] * t3, o2[1] * (t3 + 1)) / 3) : r2 % 3 == 1 && i2[e2].bonds.push(parseInt(s2[a2].slice(o2[1] * t3, o2[1] * (t3 + 1)) / 3)), r2++;
            a2++;
          }
          if (-1 != (a2 = c2("BONDS_INC_HYDROGEN"))) for (r2 = 0, h2 = (o2 = d2(a2))[0], a2 += 1; !s2[a2].match(/^%FLAG/); ) {
            s2[a2 + 1].match(/^%FLAG/) && (h2 = l2 % o2[0]);
            for (let t3 = 0; t3 < h2; t3++) r2 % 3 == 0 ? e2 = parseInt(s2[a2].slice(o2[1] * t3, o2[1] * (t3 + 1)) / 3) : r2 % 3 == 1 && i2[e2].bonds.push(parseInt(s2[a2].slice(o2[1] * t3, o2[1] * (t3 + 1)) / 3)), r2++;
            a2++;
          }
          function c2(t3) {
            var e3 = s2.indexOf(n2.filter((function(e4) {
              return e4.includes(t3);
            }))[0]);
            if (Number.isInteger(e3) && e3 > 0) {
              for (; !s2[e3].includes("FORMAT"); ) e3++;
              return e3;
            }
            return -1;
          }
          function d2(t3) {
            var e3 = s2[t3].match(/\((\d*)\S*/), i3 = s2[t3].match(/[a-zA-Z](\d*)\)\s*/);
            return null == i3 && (i3 = s2[t3].match(/[a-zA-Z](\d*)\.\d*\)\s*/)), [e3[1], i3[1]];
          }
          return [i2];
        }
        function P(t2, e2) {
          const i2 = [], r2 = t2.split(/\r?\n|\r/);
          for (; r2.length > 0; ) {
            const t3 = parseInt(r2[1]);
            if (r2.length < 3 || isNaN(t3) || t3 <= 0 || r2.length < t3 + 3) break;
            const e3 = [];
            i2.push(e3);
            let s2 = 2;
            const n2 = e3.length, a2 = n2 + t3;
            for (let t4 = n2; t4 < a2; t4++) {
              const i3 = r2[s2++], n3 = {};
              n3.serial = t4, n3.atom = i3.slice(10, 15).trim(), n3.elem = S3(n3.atom, true), n3.x = 10 * parseFloat(i3.slice(20, 28)), n3.y = 10 * parseFloat(i3.slice(28, 36)), n3.z = 10 * parseFloat(i3.slice(36, 44)), n3.resi = parseInt(i3.slice(0, 5)), n3.resn = i3.slice(5, 10).trim(), n3.bonds = [], n3.bondOrder = [], n3.properties = {}, i3.length > 44 && (n3.dx = 10 * parseFloat(i3.slice(44, 52)), n3.dy = 10 * parseFloat(i3.slice(52, 60)), n3.dz = 10 * parseFloat(i3.slice(60, 68))), e3[t4] = n3;
            }
            if (r2.length <= s2 + 3) {
              const t4 = r2[s2++].trim().split(/\s+/);
              if (3 === t4.length) {
                for (let e4 = 0; e4 < 3; e4++) t4[e4] = (10 * parseFloat(t4[e4])).toString();
                i2.box = t4;
              }
            }
            r2.splice(0, ++s2);
          }
          for (let t3 = 0; t3 < i2.length; t3++) b(i2[t3], e2);
          return i2;
        }
        const U = { id: "serial", type: "atom", element: "elem", q: "charge", radius: "radius", x: "x", xu: "x", xs: "x", xsu: "x", y: "y", yu: "y", ys: "y", ysu: "y", z: "z", zu: "z", zs: "z", zsu: "z" };
        function B(t2, e2) {
          const i2 = [], r2 = t2.split(/\r?\n|\r/);
          let s2 = 0, n2 = 0, a2 = 0;
          for (; a2 < r2.length - 9; ) {
            for (var o2 = a2; o2 < r2.length; o2++) if (r2[o2].match(/ITEM: NUMBER OF ATOMS/) && (n2 = parseInt(r2[o2 + 1])), r2[o2].match(/ITEM: ATOMS/)) {
              s2 = o2 + 1;
              break;
            }
            const t3 = r2[s2 - 1].replace("ITEM: ATOMS ", "").split(" ");
            i2.push([]);
            for (let e3 = s2; e3 < s2 + n2; e3++) {
              const n3 = {}, a3 = {}, o3 = r2[e3].split(" ");
              for (let e4 = 0; e4 < o3.length; e4++) {
                const i3 = U[t3[e4]];
                void 0 !== i3 && ("serial" === i3 ? n3[i3] = parseInt(o3[e4]) : "x" === i3 || "y" === i3 || "z" === i3 ? n3[i3] = parseFloat(o3[e4]) : "charge" === i3 || "radius" === i3 ? a3[i3] = parseFloat(o3[e4]) : n3[i3] = o3[e4]), n3.properties = a3, n3.bonds = [], n3.bondOrder = [];
              }
              i2[i2.length - 1][e3 - s2] = n3;
            }
            a2 = s2 + n2 - 1;
          }
          if (e2.assignBonds) for (let t3 = 0; t3 < i2.length; t3++) (0, u.assignBonds)(i2[t3], e2);
          return i2;
        }
        var N;
        !(function(t2) {
          let e2, i2;
          !(function(t3) {
            t3[t3.Int8 = 1] = "Int8", t3[t3.Int16 = 2] = "Int16", t3[t3.Int32 = 3] = "Int32", t3[t3.Uint8 = 4] = "Uint8", t3[t3.Uint16 = 5] = "Uint16", t3[t3.Uint32 = 6] = "Uint32";
          })(e2 = t2.IntDataType || (t2.IntDataType = {})), (function(t3) {
            t3[t3.Float32 = 32] = "Float32", t3[t3.Float64 = 33] = "Float64";
          })(i2 = t2.FloatDataType || (t2.FloatDataType = {})), t2.getDataType = function(e3) {
            let i3;
            return i3 = e3 instanceof Int8Array ? t2.IntDataType.Int8 : e3 instanceof Int16Array ? t2.IntDataType.Int16 : e3 instanceof Int32Array ? t2.IntDataType.Int32 : e3 instanceof Uint8Array ? t2.IntDataType.Uint8 : e3 instanceof Uint16Array ? t2.IntDataType.Uint16 : e3 instanceof Uint32Array ? t2.IntDataType.Uint32 : e3 instanceof Float32Array ? t2.FloatDataType.Float32 : e3 instanceof Float64Array ? t2.FloatDataType.Float64 : t2.IntDataType.Int32, i3;
          }, t2.isSignedIntegerDataType = function(t3) {
            if (t3 instanceof Int8Array || t3 instanceof Int16Array || t3 instanceof Int32Array) return true;
            for (let e3 = 0, i3 = t3.length; e3 < i3; e3++) if (e3 < 0) return false;
            return true;
          };
        })(N || (N = {}));
        const G = 13330 === new Uint16Array(new Uint8Array([18, 52]).buffer)[0];
        function V(t2) {
          let e2 = t2.data;
          for (let i2 = t2.encoding.length - 1; i2 >= 0; i2--) e2 = j(e2, t2.encoding[i2]);
          return e2;
        }
        function j(t2, e2) {
          switch (e2.kind) {
            case "ByteArray":
              switch (e2.type) {
                case N.IntDataType.Uint8:
                  return t2;
                case N.IntDataType.Int8:
                  return (function(t3) {
                    return new Int8Array(t3.buffer, t3.byteOffset);
                  })(t2);
                case N.IntDataType.Int16:
                  return (function(t3) {
                    return q(t3, 2, Int16Array);
                  })(t2);
                case N.IntDataType.Uint16:
                  return (function(t3) {
                    return q(t3, 2, Uint16Array);
                  })(t2);
                case N.IntDataType.Int32:
                  return (function(t3) {
                    return q(t3, 4, Int32Array);
                  })(t2);
                case N.IntDataType.Uint32:
                  return (function(t3) {
                    return q(t3, 4, Uint32Array);
                  })(t2);
                case N.FloatDataType.Float32:
                  return (function(t3) {
                    return q(t3, 4, Float32Array);
                  })(t2);
                case N.FloatDataType.Float64:
                  return (function(t3) {
                    return q(t3, 8, Float64Array);
                  })(t2);
                default:
                  throw new Error("unreachable");
              }
            case "FixedPoint":
              return (function(t3, e3) {
                const i2 = t3.length, r2 = W(e3.srcType, i2), s2 = 1 / e3.factor;
                for (let e4 = 0; e4 < i2; e4++) r2[e4] = s2 * t3[e4];
                return r2;
              })(t2, e2);
            case "IntervalQuantization":
              return (function(t3, e3) {
                const i2 = t3.length, r2 = W(e3.srcType, i2), s2 = (e3.max - e3.min) / (e3.numSteps - 1), n2 = e3.min;
                for (let e4 = 0; e4 < i2; e4++) r2[e4] = n2 + s2 * t3[e4];
                return r2;
              })(t2, e2);
            case "RunLength":
              return (function(t3, e3) {
                const i2 = H(e3.srcType, e3.srcSize);
                let r2 = 0;
                for (let e4 = 0, s2 = t3.length; e4 < s2; e4 += 2) {
                  const s3 = t3[e4], n2 = t3[e4 + 1];
                  for (let t4 = 0; t4 < n2; ++t4) i2[r2++] = s3;
                }
                return i2;
              })(t2, e2);
            case "Delta":
              return (function(t3, e3) {
                const i2 = t3.length, r2 = H(e3.srcType, i2);
                if (!i2) return t3;
                r2[0] = t3[0] + (0 | e3.origin);
                for (let e4 = 1; e4 < i2; ++e4) r2[e4] = t3[e4] + r2[e4 - 1];
                return r2;
              })(t2, e2);
            case "IntegerPacking":
              return (function(t3, e3) {
                return t3.length === e3.srcSize ? t3 : e3.isUnsigned ? (function(t4, e4) {
                  const i2 = 1 === e4.byteCount ? 255 : 65535, r2 = t4.length, s2 = new Int32Array(e4.srcSize);
                  let n2 = 0, a2 = 0;
                  for (; n2 < r2; ) {
                    let e5 = 0, r3 = t4[n2];
                    for (; r3 === i2; ) e5 += r3, n2++, r3 = t4[n2];
                    e5 += r3, s2[a2] = e5, n2++, a2++;
                  }
                  return s2;
                })(t3, e3) : (function(t4, e4) {
                  const i2 = 1 === e4.byteCount ? 127 : 32767, r2 = -i2 - 1, s2 = t4.length, n2 = new Int32Array(e4.srcSize);
                  let a2 = 0, o2 = 0;
                  for (; a2 < s2; ) {
                    let e5 = 0, s3 = t4[a2];
                    for (; s3 === i2 || s3 === r2; ) e5 += s3, a2++, s3 = t4[a2];
                    e5 += s3, n2[o2] = e5, a2++, o2++;
                  }
                  return n2;
                })(t3, e3);
              })(t2, e2);
            case "StringArray":
              return (function(t3, e3) {
                const i2 = V({ encoding: e3.offsetEncoding, data: e3.offsets }), r2 = V({ encoding: e3.dataEncoding, data: t3 }), s2 = e3.stringData, n2 = new Array(i2.length);
                n2[0] = "";
                for (let t4 = 1, e4 = i2.length; t4 < e4; t4++) n2[t4] = s2.substring(i2[t4 - 1], i2[t4]);
                let a2 = 0;
                const o2 = new Array(r2.length);
                for (let t4 = 0, e4 = r2.length; t4 < e4; t4++) o2[a2++] = n2[r2[t4] + 1];
                return o2;
              })(t2, e2);
          }
        }
        function H(t2, e2) {
          switch (t2) {
            case N.IntDataType.Int8:
              return new Int8Array(e2);
            case N.IntDataType.Int16:
              return new Int16Array(e2);
            case N.IntDataType.Int32:
              return new Int32Array(e2);
            case N.IntDataType.Uint8:
              return new Uint8Array(e2);
            case N.IntDataType.Uint16:
              return new Uint16Array(e2);
            case N.IntDataType.Uint32:
              return new Uint32Array(e2);
            default:
              return new Int32Array(e2);
          }
        }
        function W(t2, e2) {
          switch (t2) {
            case N.FloatDataType.Float32:
              return new Float32Array(e2);
            case N.FloatDataType.Float64:
            default:
              return new Float64Array(e2);
          }
        }
        function q(t2, e2, i2) {
          return 0 == t2.byteOffset && t2.byteLength == t2.buffer.byteLength || (t2 = new Uint8Array(t2)), new i2(G ? t2.buffer : (function(t3, e3) {
            const i3 = new ArrayBuffer(t3.length), r2 = new Uint8Array(i3);
            for (let i4 = 0, s2 = t3.length; i4 < s2; i4 += e3) for (let s3 = 0; s3 < e3; s3++) r2[i4 + e3 - s3 - 1] = t3[i4 + s3];
            return i3;
          })(t2, e2));
        }
        function Y(t2) {
          const e2 = /* @__PURE__ */ Object.create(null), i2 = /* @__PURE__ */ Object.create(null);
          for (const i3 of t2.columns) e2[i3.name] = i3;
          return { rowCount: t2.rowCount, name: t2.name.substring(1), fieldNames: t2.columns.map(((t3) => t3.name)), getField(t3) {
            const r2 = e2[t3];
            if (r2) return i2[t3] || (i2[t3] = V(r2.data)), i2[t3];
          } };
        }
        var Z = i(471);
        class Connectivity {
          constructor(t2) {
            if (this.C = {}, t2) {
              let e2 = t2.getField("comp_id"), i2 = t2.getField("atom_id_1"), r2 = t2.getField("atom_id_2"), s2 = t2.getField("value_order");
              for (let t3 = 0; t3 < e2.length; t3++) {
                let n2 = e2[t3], a2 = i2[t3], o2 = r2[t3], l2 = s2[t3], h2 = 1;
                "doub" == l2 ? h2 = 2 : "trip" == l2 && (h2 = 3), null == this.C[n2] && (this.C[n2] = {}), null == this.C[n2][a2] && (this.C[n2][a2] = {}), null == this.C[n2][o2] && (this.C[n2][o2] = {}), this.C[n2][a2][o2] = h2, this.C[n2][o2][a2] = h2;
              }
            }
          }
          order(t2, e2, i2) {
            return void 0 !== this.C[t2] && void 0 !== this.C[t2][e2] && void 0 !== this.C[t2][e2][i2] ? this.C[t2][e2][i2] : 0;
          }
        }
        class StructConn {
          constructor(t2) {
            if (this.C = [], t2) {
              let e2 = t2.getField("conn_type_id"), i2 = t2.getField("ptnr1_label_asym_id"), r2 = t2.getField("ptnr1_label_seq_id"), s2 = t2.getField("ptnr1_label_comp_id"), n2 = t2.getField("ptnr1_label_atom_id"), a2 = t2.getField("ptnr2_label_asym_id"), o2 = t2.getField("ptnr2_label_seq_id"), l2 = t2.getField("ptnr2_label_comp_id"), h2 = t2.getField("ptnr2_label_atom_id"), c2 = t2.getField("pdbx_value_order");
              for (let t3 = 0; t3 < e2.length; t3++) if ("disulf" == e2[t3] || "covale" == e2[t3]) {
                let e3 = c2 ? "" == c2[t3] ? 1 : parseInt(c2[t3]) : 1;
                this.C.push([[i2[t3], r2[t3], s2[t3], n2[t3]], [a2[t3], o2[t3], l2[t3], h2[t3]], e3]);
              }
            }
          }
        }
        class Residues {
          constructor() {
            this.R = {};
          }
          add(t2) {
            null == this.R[t2.lchain] && (this.R[t2.lchain] = {}), null == this.R[t2.lchain][t2.lresi] && (this.R[t2.lchain][t2.lresi] = {}), null == this.R[t2.lchain][t2.lresi][t2.lresn] && (this.R[t2.lchain][t2.lresi][t2.lresn] = []), this.R[t2.lchain][t2.lresi][t2.lresn].push(t2), this.R[t2.lchain][t2.lresi][t2.lresn][t2.atom] = t2;
          }
          geta([t2, e2, i2, r2]) {
            if (void 0 !== this.R[t2] && void 0 !== this.R[t2][e2] && void 0 !== this.R[t2][e2][i2]) return this.R[t2][e2][i2][r2];
          }
          setBonds(t2, e2) {
            for (let e3 in this.R) for (let i2 in this.R[e3]) for (let r2 in this.R[e3][i2]) {
              let s2 = this.R[e3][i2][r2];
              for (let e4 = 0; e4 < s2.length; e4++) for (let i3 = e4 + 1; i3 < s2.length; i3++) {
                let n2 = s2[e4], a2 = s2[i3], o2 = t2.order(r2, n2.atom, a2.atom);
                n2.altLoc != a2.altLoc && "" != n2.altLoc && "" != a2.altLoc && (o2 = 0), o2 > 0 && (n2.bonds.push(a2.index), a2.bonds.push(n2.index), n2.bondOrder.push(o2), a2.bondOrder.push(o2));
              }
            }
            for (let t3 of e2.C) {
              let e3 = t3[0], i2 = t3[1], r2 = t3[2], s2 = this.geta(e3), n2 = this.geta(i2);
              null != s2 && null != n2 && (s2.bonds.push(n2.index), n2.bonds.push(s2.index), s2.bondOrder.push(r2), n2.bondOrder.push(r2));
            }
          }
        }
        function X(t2, e2) {
          var i2 = !e2.keepH, r2 = e2.altLoc ? e2.altLoc : "A", s2 = !e2.noComputeSecondaryStructure;
          const a2 = !e2.doAssembly, o2 = void 0 === e2.assignBonds || e2.assignBonds;
          if ("string" == typeof t2) try {
            t2 = (0, L.base64ToArray)(t2);
          } catch (e3) {
            t2 = new TextEncoder().encode(t2);
          }
          else t2 = new Uint8Array(t2);
          var l2 = Z.decodeMsgpack(t2);
          31 == l2 && (t2 = (0, L.inflateString)(t2, false), l2 = Z.decodeMsgpack(t2));
          var h2 = [], c2 = h2.modelData = [], d2 = l2.dataBlocks.length;
          if (0 == d2) return h2;
          e2.multimodel || (d2 = 1);
          for (let t3 = 0; t3 < d2; t3++) {
            let s3 = h2.length;
            const o3 = [];
            c2.push({ symmetries: [] }), h2.push([]);
            const u2 = l2.dataBlocks[t3], f2 = /* @__PURE__ */ Object.create(null);
            for (const t4 of u2.categories) f2[t4.name.substr(1)] = Y(t4);
            let p2 = {}, g2 = f2.struct_conf;
            if (g2) {
              let t4 = g2.getField("conf_type_id"), e3 = g2.getField("beg_label_asym_id"), i3 = g2.getField("beg_label_seq_id"), r3 = g2.getField("end_label_seq_id");
              for (let s4 = 0; s4 < t4.length; s4++) if (t4[s4].startsWith("H")) {
                let t5 = e3[s4], n2 = i3[s4], a3 = r3[s4];
                t5 in p2 || (p2[t5] = {}), p2[t5][n2] = "h1";
                for (let e4 = n2 + 1; e4 < a3; e4++) p2[t5][e4] = "h";
                p2[t5][a3] = "h2";
              }
            }
            let m2 = f2.struct_sheet_range;
            if (m2) {
              let t4 = m2.getField("id"), e3 = m2.getField("beg_label_asym_id"), i3 = m2.getField("beg_label_seq_id"), r3 = m2.getField("end_label_seq_id");
              for (let s4 = 0; s4 < t4.length; s4++) {
                let t5 = e3[s4], n2 = i3[s4], a3 = r3[s4];
                t5 in p2 || (p2[t5] = {}), p2[t5][n2] = "s1";
                for (let e4 = n2 + 1; e4 < a3; e4++) p2[t5][e4] = "s";
                p2[t5][a3] = "s2";
              }
            }
            let v2 = f2.pdbx_struct_oper_list, _2 = v2.getField("id");
            if (_2 && !a2) {
              let t4 = v2.getField("matrix[1][1]"), e3 = v2.getField("matrix[1][2]"), i3 = v2.getField("matrix[1][3]"), r3 = v2.getField("matrix[2][1]"), s4 = v2.getField("matrix[2][2]"), a3 = v2.getField("matrix[2][3]"), o4 = v2.getField("matrix[3][1]"), l3 = v2.getField("matrix[3][2]"), h3 = v2.getField("matrix[3][3]"), d3 = v2.getField("vector[1]"), u3 = v2.getField("vector[2]"), f3 = v2.getField("vector[3]");
              for (let p3 = 0; p3 < _2.length; p3++) {
                const g3 = new n.Matrix4(t4[p3], e3[p3], i3[p3], d3[p3], r3[p3], s4[p3], a3[p3], u3[p3], o4[p3], l3[p3], h3[p3], f3[p3]);
                c2[c2.length - 1].symmetries.push(g3);
              }
            }
            let y2 = new Connectivity(f2.chem_comp_bond), b2 = new Residues(), x2 = new StructConn(f2.struct_conn), w2 = f2.atom_site, A2 = w2.rowCount, C2 = w2.getField("group_PDB"), S4 = w2.getField("Cartn_x"), z2 = w2.getField("Cartn_y"), T2 = w2.getField("Cartn_z"), E2 = w2.getField("auth_asym_id"), L2 = w2.getField("label_asym_id"), F2 = w2.getField("auth_seq_id"), I2 = w2.getField("label_seq_id"), O2 = w2.getField("auth_comp_id"), D2 = w2.getField("label_comp_id"), k2 = w2.getField("auth_atom_id"), R2 = w2.getField("label_atom_id"), P2 = w2.getField("type_symbol"), U2 = w2.getField("B_iso_or_equiv"), B2 = w2.getField("id"), N2 = w2.getField("label_alt_id"), G2 = w2.getField("pdbx_PDB_model_num"), V2 = G2 ? G2[0] : 0;
            for (let t4 = 0; t4 < A2; t4++) {
              if (void 0 !== C2 && "TER" === C2[t4]) continue;
              if (G2 && G2[t4] != V2) {
                if (V2 = G2[t4], !e2.multimodel) break;
                e2.onemol || (h2.push([]), c2.push(c2[c2.length - 1]), V2 = G2[t4], b2.setBonds(y2, x2), b2 = new Residues());
              }
              const s4 = {};
              s4.x = S4[t4], s4.y = z2[t4], s4.z = T2[t4], s4.chain = E2 ? E2[t4] : L2 ? L2[t4] : void 0, s4.lchain = L2 ? L2[t4] : void 0, s4.resi = F2 ? F2[t4] : I2 ? I2[t4] : void 0, s4.lresi = I2 ? I2[t4] : void 0, s4.resn = O2 ? O2[t4].trim() : D2 ? D2[t4].trim() : void 0, s4.lresn = D2 ? D2[t4].trim() : void 0, s4.atom = k2 ? k2[t4].replace(/"/gm, "") : R2 ? R2[t4].replace(/"/gm, "") : void 0, s4.icode = N2 ? N2[t4] : void 0, s4.altLoc = s4.icode, s4.hetflag = !C2 || "HETA" === C2[t4] || "HETATM" === C2[t4];
              let n2 = "X";
              P2 && (n2 = P2[t4].replace(/\(?\+?\d+.*/, "")), s4.elem = n2[0].toUpperCase() + n2.substring(1, 2).toLowerCase(), U2 && (s4.b = U2[t4]), i2 && "H" == s4.elem || ("" != s4.altLoc && s4.altLoc != r2 && "*" != r2 || (s4.bonds = [], s4.ss = "c", s4.serial = B2[t4], s4.model = V2, s4.bondOrder = [], s4.properties = {}, s4.index = h2[h2.length - 1].length, o3[s4.serial] = [h2.length, s4.index], h2[h2.length - 1].push(s4), b2.add(s4)));
            }
            if (b2.setBonds(y2, x2), !M(p2)) for (let t4 = s3; t4 < h2.length; t4++) {
              let e3 = h2[t4];
              for (let t5 = 0; t5 < e3.length; t5++) {
                const i3 = e3[t5];
                if (void 0 !== i3 && (i3.lchain in p2 && i3.lresi in p2[i3.lchain])) {
                  const t6 = p2[i3.lchain][i3.lresi];
                  i3.ss = t6[0], t6.length > 1 && ("1" == t6[1] ? i3.ssbegin = true : "2" == t6[1] && (i3.ssend = true));
                }
              }
            }
            e2.multimodel && t3 < d2 - 1 && (e2.onemol || (h2.push([]), c2.push({ symmetries: [] })));
          }
          for (let t3 = 0; t3 < h2.length; t3++) !o2 || e2.duplicateAssemblyAtoms && !e2.dontConnectDuplicatedAtoms || b(h2[t3], e2), s2 && m(h2[t3], e2.hbondCutoff), v(c2[t3].symmetries, h2[t3], e2, c2[t3].cryst), e2.duplicateAssemblyAtoms && !e2.dontConnectDuplicatedAtoms && o2 && b(h2[t3], e2);
          return h2;
        }
        const K = { vasp: c.VASP, VASP: c.VASP, cube: d.CUBE, CUBE: d.CUBE, xyz: f, XYZ: f, sdf: p, SDF: p, json: g, cdjson: g, CDJSON: g, mcif: x, cif: x, CIF: x, mol2: A, MOL2: A, pdb: T, PDB: T, pdbqt: T, PDBQT: T, pqr: E, PQR: E, mmtf: k, MMTF: k, prmtop: R, PRMTOP: R, gro: P, GRO: P, lammpstrj: B, LAMMPSTRJ: B, bcif: X, BCIF: X };
        var Q, $ = i(529), J = i(99);
        !(function(t2) {
          t2[t2.VDW = 1] = "VDW", t2[t2.MS = 2] = "MS", t2[t2.SAS = 3] = "SAS", t2[t2.SES = 4] = "SES";
        })(Q || (Q = {}));
        var tt = false;
        function et(t2) {
          tt = t2;
        }
        (window.navigator.userAgent.indexOf("MSIE ") >= 0 || window.navigator.userAgent.indexOf("Trident/") >= 0) && (tt = true);
        class MarchingCubeInitializer {
          constructor() {
            this.ISDONE = 2, this.edgeTable = new Uint32Array([0, 0, 0, 0, 0, 0, 0, 2816, 0, 0, 0, 1792, 0, 3328, 3584, 3840, 0, 0, 0, 138, 0, 21, 0, 134, 0, 0, 0, 652, 0, 2067, 3865, 3600, 0, 0, 0, 42, 0, 0, 0, 294, 0, 0, 21, 28, 0, 3875, 1049, 3360, 0, 168, 162, 170, 0, 645, 2475, 2210, 0, 687, 293, 172, 4010, 3747, 3497, 3232, 0, 0, 0, 0, 0, 69, 0, 900, 0, 0, 0, 1792, 138, 131, 1608, 1920, 0, 81, 0, 2074, 84, 85, 84, 86, 0, 81, 0, 3676, 330, 1105, 1881, 1616, 0, 0, 0, 42, 0, 69, 0, 502, 0, 0, 21, 3580, 138, 2035, 1273, 1520, 2816, 104, 2337, 106, 840, 581, 367, 102, 2816, 3695, 3429, 3180, 1898, 1635, 1385, 1120, 0, 0, 0, 0, 0, 0, 0, 3910, 0, 0, 69, 588, 42, 2083, 41, 2880, 0, 0, 0, 1722, 0, 2293, 4095, 3830, 0, 255, 757, 764, 2538, 2291, 3065, 2800, 0, 0, 81, 338, 0, 3925, 1119, 3414, 84, 855, 85, 340, 2130, 2899, 89, 2384, 1792, 712, 194, 1162, 4036, 3781, 3535, 3270, 708, 719, 197, 204, 3018, 2755, 2505, 2240, 0, 0, 0, 0, 168, 420, 168, 1958, 162, 162, 676, 2988, 170, 163, 680, 928, 3328, 3096, 3328, 3642, 52, 53, 1855, 1590, 2340, 2111, 2869, 2620, 298, 51, 825, 560, 3584, 3584, 3090, 3482, 1668, 1941, 1183, 1430, 146, 2975, 2069, 2460, 154, 915, 153, 400, 3840, 3592, 3329, 3082, 1796, 1541, 1295, 1030, 2818, 2575, 2309, 2060, 778, 515, 265, 0]), this.triTable = [[], [], [], [], [], [], [], [11, 9, 8], [], [], [], [8, 10, 9], [], [10, 8, 11], [9, 11, 10], [8, 10, 9, 8, 11, 10], [], [], [], [1, 7, 3], [], [4, 2, 0], [], [2, 1, 7], [], [], [], [2, 7, 3, 2, 9, 7], [], [1, 4, 11, 1, 0, 4], [3, 8, 0, 11, 9, 4, 11, 10, 9], [4, 11, 9, 11, 10, 9], [], [], [], [5, 3, 1], [], [], [], [2, 5, 8, 2, 1, 5], [], [], [2, 4, 0], [3, 2, 4], [], [0, 9, 1, 8, 10, 5, 8, 11, 10], [3, 4, 0, 3, 10, 4], [5, 8, 10, 8, 11, 10], [], [3, 5, 7], [7, 1, 5], [1, 7, 3, 1, 5, 7], [], [9, 2, 0, 9, 7, 2], [0, 3, 8, 1, 7, 11, 1, 5, 7], [11, 1, 7, 1, 5, 7], [], [9, 1, 0, 5, 3, 2, 5, 7, 3], [8, 2, 5, 8, 0, 2], [2, 5, 3, 5, 7, 3], [3, 9, 1, 3, 8, 9, 7, 11, 10, 7, 10, 5], [9, 1, 0, 10, 7, 11, 10, 5, 7], [3, 8, 0, 7, 10, 5, 7, 11, 10], [11, 5, 7, 11, 10, 5], [], [], [], [], [], [0, 6, 2], [], [7, 2, 9, 7, 9, 8], [], [], [], [8, 10, 9], [7, 1, 3], [7, 1, 0], [6, 9, 3, 6, 10, 9], [7, 10, 8, 10, 9, 8], [], [6, 0, 4], [], [11, 1, 4, 11, 3, 1], [2, 4, 6], [2, 0, 4, 2, 4, 6], [2, 4, 6], [1, 4, 2, 4, 6, 2], [], [6, 0, 4], [], [2, 11, 3, 6, 9, 4, 6, 10, 9], [8, 6, 1, 8, 1, 3], [10, 0, 6, 0, 4, 6], [8, 0, 3, 9, 6, 10, 9, 4, 6], [10, 4, 6, 10, 9, 4], [], [], [], [5, 3, 1], [], [0, 6, 2], [], [7, 4, 8, 5, 2, 1, 5, 6, 2], [], [], [2, 4, 0], [7, 4, 8, 2, 11, 3, 10, 5, 6], [7, 1, 3], [5, 6, 10, 0, 9, 1, 8, 7, 4], [5, 6, 10, 7, 0, 3, 7, 4, 0], [10, 5, 6, 4, 8, 7], [9, 11, 8], [3, 5, 6], [0, 5, 11, 0, 11, 8], [6, 3, 5, 3, 1, 5], [3, 9, 6, 3, 8, 9], [9, 6, 0, 6, 2, 0], [0, 3, 8, 2, 5, 6, 2, 1, 5], [1, 6, 2, 1, 5, 6], [9, 11, 8], [1, 0, 9, 6, 10, 5, 11, 3, 2], [6, 10, 5, 2, 8, 0, 2, 11, 8], [3, 2, 11, 10, 5, 6], [10, 5, 6, 9, 3, 8, 9, 1, 3], [0, 9, 1, 5, 6, 10], [8, 0, 3, 10, 5, 6], [10, 5, 6], [], [], [], [], [], [], [], [1, 10, 2, 9, 11, 6, 9, 8, 11], [], [], [6, 0, 2], [3, 6, 9, 3, 2, 6], [3, 5, 1], [0, 5, 1, 0, 11, 5], [0, 3, 5], [6, 9, 11, 9, 8, 11], [], [], [], [4, 5, 9, 7, 1, 10, 7, 3, 1], [], [11, 6, 7, 2, 4, 5, 2, 0, 4], [11, 6, 7, 8, 0, 3, 1, 10, 2, 9, 4, 5], [6, 7, 11, 1, 10, 2, 9, 4, 5], [], [4, 1, 0, 4, 5, 1, 6, 7, 3, 6, 3, 2], [9, 4, 5, 0, 6, 7, 0, 2, 6], [4, 5, 9, 6, 3, 2, 6, 7, 3], [6, 7, 11, 5, 3, 8, 5, 1, 3], [6, 7, 11, 4, 1, 0, 4, 5, 1], [4, 5, 9, 3, 8, 0, 11, 6, 7], [9, 4, 5, 7, 11, 6], [], [], [0, 6, 4], [8, 6, 4, 8, 1, 6], [], [0, 10, 2, 0, 9, 10, 4, 8, 11, 4, 11, 6], [10, 2, 1, 6, 0, 3, 6, 4, 0], [10, 2, 1, 11, 4, 8, 11, 6, 4], [4, 2, 6], [1, 0, 9, 2, 4, 8, 2, 6, 4], [2, 4, 0, 2, 6, 4], [8, 2, 4, 2, 6, 4], [11, 4, 1, 11, 6, 4], [0, 9, 1, 4, 11, 6, 4, 8, 11], [3, 6, 0, 6, 4, 0], [8, 6, 4, 8, 11, 6], [10, 8, 9], [6, 3, 9, 6, 7, 3], [6, 7, 1], [10, 7, 1, 7, 3, 1], [7, 11, 6, 8, 10, 2, 8, 9, 10], [11, 6, 7, 10, 0, 9, 10, 2, 0], [2, 1, 10, 7, 11, 6, 8, 0, 3], [1, 10, 2, 6, 7, 11], [7, 2, 6, 7, 9, 2], [1, 0, 9, 3, 6, 7, 3, 2, 6], [7, 0, 6, 0, 2, 6], [2, 7, 3, 2, 6, 7], [7, 11, 6, 3, 9, 1, 3, 8, 9], [9, 1, 0, 11, 6, 7], [0, 3, 8, 11, 6, 7], [11, 6, 7], [], [], [], [], [5, 3, 7], [8, 5, 2, 8, 7, 5], [5, 3, 7], [1, 10, 2, 5, 8, 7, 5, 9, 8], [1, 7, 5], [1, 7, 5], [9, 2, 7, 9, 7, 5], [11, 3, 2, 8, 5, 9, 8, 7, 5], [1, 3, 7, 1, 7, 5], [0, 7, 1, 7, 5, 1], [9, 3, 5, 3, 7, 5], [9, 7, 5, 9, 8, 7], [8, 10, 11], [3, 4, 10, 3, 10, 11], [8, 10, 11], [5, 9, 4, 1, 11, 3, 1, 10, 11], [2, 4, 5], [5, 2, 4, 2, 0, 4], [0, 3, 8, 5, 9, 4, 10, 2, 1], [2, 1, 10, 9, 4, 5], [2, 8, 5, 2, 11, 8], [3, 2, 11, 1, 4, 5, 1, 0, 4], [9, 4, 5, 8, 2, 11, 8, 0, 2], [11, 3, 2, 9, 4, 5], [8, 5, 3, 5, 1, 3], [5, 0, 4, 5, 1, 0], [3, 8, 0, 4, 5, 9], [9, 4, 5], [11, 9, 10], [11, 9, 10], [1, 11, 4, 1, 10, 11], [8, 7, 4, 11, 1, 10, 11, 3, 1], [2, 7, 9, 2, 9, 10], [4, 8, 7, 0, 10, 2, 0, 9, 10], [2, 1, 10, 0, 7, 4, 0, 3, 7], [10, 2, 1, 8, 7, 4], [1, 7, 4], [3, 2, 11, 4, 8, 7, 9, 1, 0], [11, 4, 2, 4, 0, 2], [2, 11, 3, 7, 4, 8], [4, 1, 7, 1, 3, 7], [1, 0, 9, 8, 7, 4], [3, 4, 0, 3, 7, 4], [8, 7, 4], [8, 9, 10, 8, 10, 11], [3, 9, 11, 9, 10, 11], [0, 10, 8, 10, 11, 8], [10, 3, 1, 10, 11, 3], [2, 8, 10, 8, 9, 10], [9, 2, 0, 9, 10, 2], [8, 0, 3, 1, 10, 2], [10, 2, 1], [1, 11, 9, 11, 8, 9], [11, 3, 2, 0, 9, 1], [11, 0, 2, 11, 8, 0], [11, 3, 2], [8, 1, 3, 8, 9, 1], [9, 1, 0], [8, 0, 3], []], this.edgeTable2 = [0, 265, 515, 778, 2060, 2309, 2575, 2822, 1030, 1295, 1541, 1804, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 2460, 2197, 2975, 2710, 1430, 1183, 1941, 1692, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 2620, 2869, 2111, 2358, 1590, 1855, 1077, 1340, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 2988, 2725, 2479, 2214, 1958, 1711, 1445, 1196, 4010, 3747, 3497, 3232, 2240, 2505, 2755, 3018, 204, 453, 719, 966, 3270, 3535, 3781, 4044, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 348, 85, 863, 598, 3414, 3167, 3925, 3676, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 764, 1013, 255, 502, 3830, 4095, 3317, 3580, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 876, 613, 367, 102, 3942, 3695, 3429, 3180, 1898, 1635, 1385, 1120, 1120, 1385, 1635, 1898, 3180, 3429, 3695, 3942, 102, 367, 613, 876, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 3580, 3317, 4095, 3830, 502, 255, 1013, 764, 2554, 2291, 3065, 2800, 1616, 1881, 1107, 1370, 3676, 3925, 3167, 3414, 598, 863, 85, 348, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 4044, 3781, 3535, 3270, 966, 719, 453, 204, 3018, 2755, 2505, 2240, 3232, 3497, 3747, 4010, 1196, 1445, 1711, 1958, 2214, 2479, 2725, 2988, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 1340, 1077, 1855, 1590, 2358, 2111, 2869, 2620, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 1692, 1941, 1183, 1430, 2710, 2975, 2197, 2460, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 1804, 1541, 1295, 1030, 2822, 2575, 2309, 2060, 778, 515, 265, 0], this.triTable2 = [[], [8, 3, 0], [9, 0, 1], [8, 3, 1, 8, 1, 9], [11, 2, 3], [11, 2, 0, 11, 0, 8], [11, 2, 3, 0, 1, 9], [2, 1, 11, 1, 9, 11, 11, 9, 8], [10, 1, 2], [8, 3, 0, 1, 2, 10], [9, 0, 2, 9, 2, 10], [3, 2, 8, 2, 10, 8, 8, 10, 9], [10, 1, 3, 10, 3, 11], [1, 0, 10, 0, 8, 10, 10, 8, 11], [0, 3, 9, 3, 11, 9, 9, 11, 10], [8, 10, 9, 8, 11, 10], [8, 4, 7], [3, 0, 4, 3, 4, 7], [1, 9, 0, 8, 4, 7], [9, 4, 1, 4, 7, 1, 1, 7, 3], [2, 3, 11, 7, 8, 4], [7, 11, 4, 11, 2, 4, 4, 2, 0], [3, 11, 2, 4, 7, 8, 9, 0, 1], [2, 7, 11, 2, 1, 7, 1, 4, 7, 1, 9, 4], [10, 1, 2, 8, 4, 7], [2, 10, 1, 0, 4, 7, 0, 7, 3], [4, 7, 8, 0, 2, 10, 0, 10, 9], [2, 7, 3, 2, 9, 7, 7, 9, 4, 2, 10, 9], [8, 4, 7, 11, 10, 1, 11, 1, 3], [11, 4, 7, 1, 4, 11, 1, 11, 10, 1, 0, 4], [3, 8, 0, 7, 11, 4, 11, 9, 4, 11, 10, 9], [7, 11, 4, 4, 11, 9, 11, 10, 9], [9, 5, 4], [3, 0, 8, 4, 9, 5], [5, 4, 0, 5, 0, 1], [4, 8, 5, 8, 3, 5, 5, 3, 1], [11, 2, 3, 9, 5, 4], [9, 5, 4, 8, 11, 2, 8, 2, 0], [3, 11, 2, 1, 5, 4, 1, 4, 0], [8, 5, 4, 2, 5, 8, 2, 8, 11, 2, 1, 5], [2, 10, 1, 9, 5, 4], [0, 8, 3, 5, 4, 9, 10, 1, 2], [10, 5, 2, 5, 4, 2, 2, 4, 0], [3, 4, 8, 3, 2, 4, 2, 5, 4, 2, 10, 5], [5, 4, 9, 1, 3, 11, 1, 11, 10], [0, 9, 1, 4, 8, 5, 8, 10, 5, 8, 11, 10], [3, 4, 0, 3, 10, 4, 4, 10, 5, 3, 11, 10], [4, 8, 5, 5, 8, 10, 8, 11, 10], [9, 5, 7, 9, 7, 8], [0, 9, 3, 9, 5, 3, 3, 5, 7], [8, 0, 7, 0, 1, 7, 7, 1, 5], [1, 7, 3, 1, 5, 7], [11, 2, 3, 8, 9, 5, 8, 5, 7], [9, 2, 0, 9, 7, 2, 2, 7, 11, 9, 5, 7], [0, 3, 8, 2, 1, 11, 1, 7, 11, 1, 5, 7], [2, 1, 11, 11, 1, 7, 1, 5, 7], [1, 2, 10, 5, 7, 8, 5, 8, 9], [9, 1, 0, 10, 5, 2, 5, 3, 2, 5, 7, 3], [5, 2, 10, 8, 2, 5, 8, 5, 7, 8, 0, 2], [10, 5, 2, 2, 5, 3, 5, 7, 3], [3, 9, 1, 3, 8, 9, 7, 11, 10, 7, 10, 5], [9, 1, 0, 10, 7, 11, 10, 5, 7], [3, 8, 0, 7, 10, 5, 7, 11, 10], [11, 5, 7, 11, 10, 5], [11, 7, 6], [0, 8, 3, 11, 7, 6], [9, 0, 1, 11, 7, 6], [7, 6, 11, 3, 1, 9, 3, 9, 8], [2, 3, 7, 2, 7, 6], [8, 7, 0, 7, 6, 0, 0, 6, 2], [1, 9, 0, 3, 7, 6, 3, 6, 2], [7, 6, 2, 7, 2, 9, 2, 1, 9, 7, 9, 8], [1, 2, 10, 6, 11, 7], [2, 10, 1, 7, 6, 11, 8, 3, 0], [11, 7, 6, 10, 9, 0, 10, 0, 2], [7, 6, 11, 3, 2, 8, 8, 2, 10, 8, 10, 9], [6, 10, 7, 10, 1, 7, 7, 1, 3], [6, 10, 1, 6, 1, 7, 7, 1, 0, 7, 0, 8], [9, 0, 3, 6, 9, 3, 6, 10, 9, 6, 3, 7], [6, 10, 7, 7, 10, 8, 10, 9, 8], [8, 4, 6, 8, 6, 11], [11, 3, 6, 3, 0, 6, 6, 0, 4], [0, 1, 9, 4, 6, 11, 4, 11, 8], [1, 9, 4, 11, 1, 4, 11, 3, 1, 11, 4, 6], [3, 8, 2, 8, 4, 2, 2, 4, 6], [2, 0, 4, 2, 4, 6], [1, 9, 0, 3, 8, 2, 2, 8, 4, 2, 4, 6], [9, 4, 1, 1, 4, 2, 4, 6, 2], [10, 1, 2, 11, 8, 4, 11, 4, 6], [10, 1, 2, 11, 3, 6, 6, 3, 0, 6, 0, 4], [0, 2, 10, 0, 10, 9, 4, 11, 8, 4, 6, 11], [2, 11, 3, 6, 9, 4, 6, 10, 9], [8, 4, 6, 8, 6, 1, 6, 10, 1, 8, 1, 3], [1, 0, 10, 10, 0, 6, 0, 4, 6], [8, 0, 3, 9, 6, 10, 9, 4, 6], [10, 4, 6, 10, 9, 4], [9, 5, 4, 7, 6, 11], [4, 9, 5, 3, 0, 8, 11, 7, 6], [6, 11, 7, 4, 0, 1, 4, 1, 5], [6, 11, 7, 4, 8, 5, 5, 8, 3, 5, 3, 1], [4, 9, 5, 6, 2, 3, 6, 3, 7], [9, 5, 4, 8, 7, 0, 0, 7, 6, 0, 6, 2], [4, 0, 1, 4, 1, 5, 6, 3, 7, 6, 2, 3], [7, 4, 8, 5, 2, 1, 5, 6, 2], [6, 11, 7, 1, 2, 10, 9, 5, 4], [11, 7, 6, 8, 3, 0, 1, 2, 10, 9, 5, 4], [11, 7, 6, 10, 5, 2, 2, 5, 4, 2, 4, 0], [7, 4, 8, 2, 11, 3, 10, 5, 6], [4, 9, 5, 6, 10, 7, 7, 10, 1, 7, 1, 3], [5, 6, 10, 0, 9, 1, 8, 7, 4], [5, 6, 10, 7, 0, 3, 7, 4, 0], [10, 5, 6, 4, 8, 7], [5, 6, 9, 6, 11, 9, 9, 11, 8], [0, 9, 5, 0, 5, 3, 3, 5, 6, 3, 6, 11], [0, 1, 5, 0, 5, 11, 5, 6, 11, 0, 11, 8], [11, 3, 6, 6, 3, 5, 3, 1, 5], [9, 5, 6, 3, 9, 6, 3, 8, 9, 3, 6, 2], [5, 6, 9, 9, 6, 0, 6, 2, 0], [0, 3, 8, 2, 5, 6, 2, 1, 5], [1, 6, 2, 1, 5, 6], [1, 2, 10, 5, 6, 9, 9, 6, 11, 9, 11, 8], [1, 0, 9, 6, 10, 5, 11, 3, 2], [6, 10, 5, 2, 8, 0, 2, 11, 8], [3, 2, 11, 10, 5, 6], [10, 5, 6, 9, 3, 8, 9, 1, 3], [0, 9, 1, 5, 6, 10], [8, 0, 3, 10, 5, 6], [10, 5, 6], [10, 6, 5], [8, 3, 0, 10, 6, 5], [0, 1, 9, 5, 10, 6], [10, 6, 5, 9, 8, 3, 9, 3, 1], [3, 11, 2, 10, 6, 5], [6, 5, 10, 2, 0, 8, 2, 8, 11], [1, 9, 0, 6, 5, 10, 11, 2, 3], [1, 10, 2, 5, 9, 6, 9, 11, 6, 9, 8, 11], [1, 2, 6, 1, 6, 5], [0, 8, 3, 2, 6, 5, 2, 5, 1], [5, 9, 6, 9, 0, 6, 6, 0, 2], [9, 6, 5, 3, 6, 9, 3, 9, 8, 3, 2, 6], [11, 6, 3, 6, 5, 3, 3, 5, 1], [0, 5, 1, 0, 11, 5, 5, 11, 6, 0, 8, 11], [0, 5, 9, 0, 3, 5, 3, 6, 5, 3, 11, 6], [5, 9, 6, 6, 9, 11, 9, 8, 11], [10, 6, 5, 4, 7, 8], [5, 10, 6, 7, 3, 0, 7, 0, 4], [5, 10, 6, 0, 1, 9, 8, 4, 7], [4, 5, 9, 6, 7, 10, 7, 1, 10, 7, 3, 1], [7, 8, 4, 2, 3, 11, 10, 6, 5], [11, 6, 7, 10, 2, 5, 2, 4, 5, 2, 0, 4], [11, 6, 7, 8, 0, 3, 1, 10, 2, 9, 4, 5], [6, 7, 11, 1, 10, 2, 9, 4, 5], [7, 8, 4, 5, 1, 2, 5, 2, 6], [4, 1, 0, 4, 5, 1, 6, 7, 3, 6, 3, 2], [9, 4, 5, 8, 0, 7, 0, 6, 7, 0, 2, 6], [4, 5, 9, 6, 3, 2, 6, 7, 3], [6, 7, 11, 4, 5, 8, 5, 3, 8, 5, 1, 3], [6, 7, 11, 4, 1, 0, 4, 5, 1], [4, 5, 9, 3, 8, 0, 11, 6, 7], [9, 4, 5, 7, 11, 6], [10, 6, 4, 10, 4, 9], [8, 3, 0, 9, 10, 6, 9, 6, 4], [1, 10, 0, 10, 6, 0, 0, 6, 4], [8, 6, 4, 8, 1, 6, 6, 1, 10, 8, 3, 1], [2, 3, 11, 6, 4, 9, 6, 9, 10], [0, 10, 2, 0, 9, 10, 4, 8, 11, 4, 11, 6], [10, 2, 1, 11, 6, 3, 6, 0, 3, 6, 4, 0], [10, 2, 1, 11, 4, 8, 11, 6, 4], [9, 1, 4, 1, 2, 4, 4, 2, 6], [1, 0, 9, 3, 2, 8, 2, 4, 8, 2, 6, 4], [2, 4, 0, 2, 6, 4], [3, 2, 8, 8, 2, 4, 2, 6, 4], [1, 4, 9, 11, 4, 1, 11, 1, 3, 11, 6, 4], [0, 9, 1, 4, 11, 6, 4, 8, 11], [11, 6, 3, 3, 6, 0, 6, 4, 0], [8, 6, 4, 8, 11, 6], [6, 7, 10, 7, 8, 10, 10, 8, 9], [9, 3, 0, 6, 3, 9, 6, 9, 10, 6, 7, 3], [6, 1, 10, 6, 7, 1, 7, 0, 1, 7, 8, 0], [6, 7, 10, 10, 7, 1, 7, 3, 1], [7, 11, 6, 3, 8, 2, 8, 10, 2, 8, 9, 10], [11, 6, 7, 10, 0, 9, 10, 2, 0], [2, 1, 10, 7, 11, 6, 8, 0, 3], [1, 10, 2, 6, 7, 11], [7, 2, 6, 7, 9, 2, 2, 9, 1, 7, 8, 9], [1, 0, 9, 3, 6, 7, 3, 2, 6], [8, 0, 7, 7, 0, 6, 0, 2, 6], [2, 7, 3, 2, 6, 7], [7, 11, 6, 3, 9, 1, 3, 8, 9], [9, 1, 0, 11, 6, 7], [0, 3, 8, 11, 6, 7], [11, 6, 7], [11, 7, 5, 11, 5, 10], [3, 0, 8, 7, 5, 10, 7, 10, 11], [9, 0, 1, 10, 11, 7, 10, 7, 5], [3, 1, 9, 3, 9, 8, 7, 10, 11, 7, 5, 10], [10, 2, 5, 2, 3, 5, 5, 3, 7], [5, 10, 2, 8, 5, 2, 8, 7, 5, 8, 2, 0], [9, 0, 1, 10, 2, 5, 5, 2, 3, 5, 3, 7], [1, 10, 2, 5, 8, 7, 5, 9, 8], [2, 11, 1, 11, 7, 1, 1, 7, 5], [0, 8, 3, 2, 11, 1, 1, 11, 7, 1, 7, 5], [9, 0, 2, 9, 2, 7, 2, 11, 7, 9, 7, 5], [11, 3, 2, 8, 5, 9, 8, 7, 5], [1, 3, 7, 1, 7, 5], [8, 7, 0, 0, 7, 1, 7, 5, 1], [0, 3, 9, 9, 3, 5, 3, 7, 5], [9, 7, 5, 9, 8, 7], [4, 5, 8, 5, 10, 8, 8, 10, 11], [3, 0, 4, 3, 4, 10, 4, 5, 10, 3, 10, 11], [0, 1, 9, 4, 5, 8, 8, 5, 10, 8, 10, 11], [5, 9, 4, 1, 11, 3, 1, 10, 11], [3, 8, 4, 3, 4, 2, 2, 4, 5, 2, 5, 10], [10, 2, 5, 5, 2, 4, 2, 0, 4], [0, 3, 8, 5, 9, 4, 10, 2, 1], [2, 1, 10, 9, 4, 5], [8, 4, 5, 2, 8, 5, 2, 11, 8, 2, 5, 1], [3, 2, 11, 1, 4, 5, 1, 0, 4], [9, 4, 5, 8, 2, 11, 8, 0, 2], [11, 3, 2, 9, 4, 5], [4, 5, 8, 8, 5, 3, 5, 1, 3], [5, 0, 4, 5, 1, 0], [3, 8, 0, 4, 5, 9], [9, 4, 5], [7, 4, 11, 4, 9, 11, 11, 9, 10], [3, 0, 8, 7, 4, 11, 11, 4, 9, 11, 9, 10], [11, 7, 4, 1, 11, 4, 1, 10, 11, 1, 4, 0], [8, 7, 4, 11, 1, 10, 11, 3, 1], [2, 3, 7, 2, 7, 9, 7, 4, 9, 2, 9, 10], [4, 8, 7, 0, 10, 2, 0, 9, 10], [2, 1, 10, 0, 7, 4, 0, 3, 7], [10, 2, 1, 8, 7, 4], [2, 11, 7, 2, 7, 1, 1, 7, 4, 1, 4, 9], [3, 2, 11, 4, 8, 7, 9, 1, 0], [7, 4, 11, 11, 4, 2, 4, 0, 2], [2, 11, 3, 7, 4, 8], [9, 1, 4, 4, 1, 7, 1, 3, 7], [1, 0, 9, 8, 7, 4], [3, 4, 0, 3, 7, 4], [8, 7, 4], [8, 9, 10, 8, 10, 11], [0, 9, 3, 3, 9, 11, 9, 10, 11], [1, 10, 0, 0, 10, 8, 10, 11, 8], [10, 3, 1, 10, 11, 3], [3, 8, 2, 2, 8, 10, 8, 9, 10], [9, 2, 0, 9, 10, 2], [8, 0, 3, 1, 10, 2], [10, 2, 1], [2, 11, 1, 1, 11, 9, 11, 8, 9], [11, 3, 2, 0, 9, 1], [11, 0, 2, 11, 8, 0], [11, 3, 2], [8, 1, 3, 8, 9, 1], [9, 1, 0], [8, 0, 3], []];
          }
          march(t2, e2, i2, r2) {
            let s2 = !!r2.fulltable, n2 = r2.hasOwnProperty("origin") && r2.origin.hasOwnProperty("x") ? r2.origin : { x: 0, y: 0, z: 0 }, a2 = !!r2.voxel, o2 = r2.matrix, l2 = r2.nX || 0, h2 = r2.nY || 0, c2 = r2.nZ || 0, d2 = r2.scale || 1, u2 = null;
            u2 = r2.unitCube ? r2.unitCube : { x: d2, y: d2, z: d2 };
            let f2, p2, g2 = new Int32Array(l2 * h2 * c2);
            for (f2 = 0, p2 = g2.length; f2 < p2; ++f2) g2[f2] = -1;
            let m2 = function(t3, i3, r3, s3, l3, d3) {
              let f3 = { x: 0, y: 0, z: 0 }, p3 = l3;
              if (!!!(s3 & 1 << l3) && !!(s3 & 1 << d3) && (p3 = d3), 1 & p3 && r3++, 2 & p3 && i3++, 4 & p3 && t3++, o2) {
                let e3 = new $.Vector3(t3, i3, r3);
                e3 = e3.applyMatrix4(o2), f3 = { x: e3.x, y: e3.y, z: e3.z };
              } else f3.x = n2.x + u2.x * t3, f3.y = n2.y + u2.y * i3, f3.z = n2.z + u2.z * r3;
              let m3 = (h2 * t3 + i3) * c2 + r3;
              return a2 ? (e2.push(f3), e2.length - 1) : (g2[m3] < 0 && (g2[m3] = e2.length, e2.push(f3)), g2[m3]);
            }, v2 = new Int32Array(12), _2 = s2 ? this.edgeTable2 : this.edgeTable, y2 = s2 ? this.triTable2 : this.triTable;
            for (f2 = 0; f2 < l2 - 1; ++f2) for (let r3 = 0; r3 < h2 - 1; ++r3) for (let s3 = 0; s3 < c2 - 1; ++s3) {
              let n3 = 0;
              for (let e3 = 0; e3 < 8; ++e3) {
                n3 |= !!(t2[(h2 * (f2 + ((4 & e3) >> 2)) + r3 + ((2 & e3) >> 1)) * c2 + s3 + (1 & e3)] & this.ISDONE) << e3;
              }
              if (0 === n3 || 255 === n3) continue;
              let o3 = _2[n3];
              if (0 === o3) continue;
              let l3 = y2[n3];
              1 & o3 && (v2[0] = m2(f2, r3, s3, n3, 0, 1)), 2 & o3 && (v2[1] = m2(f2, r3, s3, n3, 1, 3)), 4 & o3 && (v2[2] = m2(f2, r3, s3, n3, 3, 2)), 8 & o3 && (v2[3] = m2(f2, r3, s3, n3, 2, 0)), 16 & o3 && (v2[4] = m2(f2, r3, s3, n3, 4, 5)), 32 & o3 && (v2[5] = m2(f2, r3, s3, n3, 5, 7)), 64 & o3 && (v2[6] = m2(f2, r3, s3, n3, 7, 6)), 128 & o3 && (v2[7] = m2(f2, r3, s3, n3, 6, 4)), 256 & o3 && (v2[8] = m2(f2, r3, s3, n3, 0, 4)), 512 & o3 && (v2[9] = m2(f2, r3, s3, n3, 1, 5)), 1024 & o3 && (v2[10] = m2(f2, r3, s3, n3, 3, 7)), 2048 & o3 && (v2[11] = m2(f2, r3, s3, n3, 2, 6));
              for (let t3 = 0; t3 < l3.length; t3 += 3) {
                let r4 = v2[l3[t3]], s4 = v2[l3[t3 + 1]], n4 = v2[l3[t3 + 2]];
                a2 && t3 >= 3 && (e2.push(e2[r4]), r4 = e2.length - 1, e2.push(e2[s4]), s4 = e2.length - 1, e2.push(e2[n4]), n4 = e2.length - 1), i2.push(r4), i2.push(s4), i2.push(n4);
              }
            }
          }
          laplacianSmooth(t2, e2, i2) {
            let r2, s2, n2, a2, o2, l2 = new Array(e2.length);
            for (r2 = 0, s2 = e2.length; r2 < s2; r2++) l2[r2] = { x: 0, y: 0, z: 0 };
            let h2, c2 = new Array(20);
            for (r2 = 0; r2 < 20; r2++) c2[r2] = new Array(e2.length);
            for (r2 = 0, s2 = e2.length; r2 < s2; r2++) c2[0][r2] = 0;
            for (r2 = 0, s2 = i2.length / 3; r2 < s2; r2++) {
              let t3 = 3 * r2, e3 = 3 * r2 + 1, s3 = 3 * r2 + 2;
              for (h2 = true, n2 = 0, a2 = c2[0][i2[t3]]; n2 < a2; n2++) if (i2[e3] == c2[n2 + 1][i2[t3]]) {
                h2 = false;
                break;
              }
              for (h2 && (c2[0][i2[t3]]++, c2[c2[0][i2[t3]]][i2[t3]] = i2[e3]), h2 = true, n2 = 0, a2 = c2[0][i2[t3]]; n2 < a2; n2++) if (i2[s3] == c2[n2 + 1][i2[t3]]) {
                h2 = false;
                break;
              }
              for (h2 && (c2[0][i2[t3]]++, c2[c2[0][i2[t3]]][i2[t3]] = i2[s3]), h2 = true, n2 = 0, a2 = c2[0][i2[e3]]; n2 < a2; n2++) if (i2[t3] == c2[n2 + 1][i2[e3]]) {
                h2 = false;
                break;
              }
              for (h2 && (c2[0][i2[e3]]++, c2[c2[0][i2[e3]]][i2[e3]] = i2[t3]), h2 = true, n2 = 0, a2 = c2[0][i2[e3]]; n2 < a2; n2++) if (i2[s3] == c2[n2 + 1][i2[e3]]) {
                h2 = false;
                break;
              }
              for (h2 && (c2[0][i2[e3]]++, c2[c2[0][i2[e3]]][i2[e3]] = i2[s3]), h2 = true, n2 = 0; n2 < c2[0][i2[s3]]; n2++) if (i2[t3] == c2[n2 + 1][i2[s3]]) {
                h2 = false;
                break;
              }
              for (h2 && (c2[0][i2[s3]]++, c2[c2[0][i2[s3]]][i2[s3]] = i2[t3]), h2 = true, n2 = 0, a2 = c2[0][i2[s3]]; n2 < a2; n2++) if (i2[e3] == c2[n2 + 1][i2[s3]]) {
                h2 = false;
                break;
              }
              h2 && (c2[0][i2[s3]]++, c2[c2[0][i2[s3]]][i2[s3]] = i2[e3]);
            }
            let d2 = 0.5;
            for (o2 = 0; o2 < t2; o2++) {
              for (r2 = 0, s2 = e2.length; r2 < s2; r2++) if (c2[0][r2] < 3) l2[r2].x = e2[r2].x, l2[r2].y = e2[r2].y, l2[r2].z = e2[r2].z;
              else if (3 == c2[0][r2] || 4 == c2[0][r2]) {
                for (l2[r2].x = 0, l2[r2].y = 0, l2[r2].z = 0, n2 = 0, a2 = c2[0][r2]; n2 < a2; n2++) l2[r2].x += e2[c2[n2 + 1][r2]].x, l2[r2].y += e2[c2[n2 + 1][r2]].y, l2[r2].z += e2[c2[n2 + 1][r2]].z;
                l2[r2].x += d2 * e2[r2].x, l2[r2].y += d2 * e2[r2].y, l2[r2].z += d2 * e2[r2].z, l2[r2].x /= d2 + c2[0][r2], l2[r2].y /= d2 + c2[0][r2], l2[r2].z /= d2 + c2[0][r2];
              } else {
                for (l2[r2].x = 0, l2[r2].y = 0, l2[r2].z = 0, n2 = 0, a2 = c2[0][r2]; n2 < a2; n2++) l2[r2].x += e2[c2[n2 + 1][r2]].x, l2[r2].y += e2[c2[n2 + 1][r2]].y, l2[r2].z += e2[c2[n2 + 1][r2]].z;
                l2[r2].x += 1 * e2[r2].x, l2[r2].y += 1 * e2[r2].y, l2[r2].z += 1 * e2[r2].z, l2[r2].x /= 1 + c2[0][r2], l2[r2].y /= 1 + c2[0][r2], l2[r2].z /= 1 + c2[0][r2];
              }
              for (r2 = 0, s2 = e2.length; r2 < s2; r2++) e2[r2].x = l2[r2].x, e2[r2].y = l2[r2].y, e2[r2].z = l2[r2].z;
            }
          }
        }
        let MarchingCube = new MarchingCubeInitializer();
        class PointGrid {
          constructor(t2, e2, i2) {
            this.data = new Int32Array(t2 * e2 * i2 * 3), this.width = e2, this.height = i2;
          }
          set(t2, e2, i2, r2) {
            let s2 = 3 * ((t2 * this.width + e2) * this.height + i2);
            this.data[s2] = r2.ix, this.data[s2 + 1] = r2.iy, this.data[s2 + 2] = r2.iz;
          }
          get(t2, e2, i2) {
            let r2 = 3 * ((t2 * this.width + e2) * this.height + i2);
            return { ix: this.data[r2], iy: this.data[r2 + 1], iz: this.data[r2 + 2] };
          }
        }
        class ProteinSurface2 {
          constructor() {
            this.INOUT = 1, this.ISDONE = 2, this.ISBOUND = 4, this.ptranx = 0, this.ptrany = 0, this.ptranz = 0, this.probeRadius = 1.4, this.defaultScaleFactor = 2, this.scaleFactor = this.defaultScaleFactor, this.pHeight = 0, this.pWidth = 0, this.pLength = 0, this.cutRadius = 0, this.vpBits = null, this.vpDistance = null, this.vpAtomID = null, this.pminx = 0, this.pminy = 0, this.pminz = 0, this.pmaxx = 0, this.pmaxy = 0, this.pmaxz = 0, this.depty = {}, this.widxz = {}, this.faces = [], this.verts = [], this.vdwRadii = { H: 1.2, Li: 1.82, Na: 2.27, K: 2.75, C: 1.7, N: 1.55, O: 1.52, F: 1.47, P: 1.8, S: 1.8, CL: 1.75, BR: 1.85, SE: 1.9, ZN: 1.39, CU: 1.4, NI: 1.63, X: 2 }, this.nb = [new Int32Array([1, 0, 0]), new Int32Array([-1, 0, 0]), new Int32Array([0, 1, 0]), new Int32Array([0, -1, 0]), new Int32Array([0, 0, 1]), new Int32Array([0, 0, -1]), new Int32Array([1, 1, 0]), new Int32Array([1, -1, 0]), new Int32Array([-1, 1, 0]), new Int32Array([-1, -1, 0]), new Int32Array([1, 0, 1]), new Int32Array([1, 0, -1]), new Int32Array([-1, 0, 1]), new Int32Array([-1, 0, -1]), new Int32Array([0, 1, 1]), new Int32Array([0, 1, -1]), new Int32Array([0, -1, 1]), new Int32Array([0, -1, -1]), new Int32Array([1, 1, 1]), new Int32Array([1, 1, -1]), new Int32Array([1, -1, 1]), new Int32Array([-1, 1, 1]), new Int32Array([1, -1, -1]), new Int32Array([-1, -1, 1]), new Int32Array([-1, 1, -1]), new Int32Array([-1, -1, -1])], ProteinSurface2.MarchingCube || (ProteinSurface2.MarchingCube = new MarchingCubeInitializer());
          }
          getVDWIndex(t2) {
            return t2.elem && void 0 !== this.vdwRadii[t2.elem] ? t2.elem : "X";
          }
          getFacesAndVertices(t2) {
            let e2 = {};
            for (let i3 = 0, r3 = t2.length; i3 < r3; i3++) e2[t2[i3]] = true;
            let i2 = this.verts;
            for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) i2[t3].x = i2[t3].x / this.scaleFactor - this.ptranx, i2[t3].y = i2[t3].y / this.scaleFactor - this.ptrany, i2[t3].z = i2[t3].z / this.scaleFactor - this.ptranz;
            let r2 = [];
            for (let t3 = 0, s2 = this.faces.length; t3 < s2; t3 += 3) {
              let s3 = this.faces[t3], n2 = this.faces[t3 + 1], a2 = this.faces[t3 + 2], o2 = i2[s3].atomid, l2 = i2[n2].atomid, h2 = i2[a2].atomid, c2 = o2;
              l2 < c2 && (c2 = l2), h2 < c2 && (c2 = h2), e2[c2] && (s3 !== n2 && n2 !== a2 && s3 !== a2 && (r2.push(s3), r2.push(n2), r2.push(a2)));
            }
            return this.vpBits = null, this.vpDistance = null, this.vpAtomID = null, { vertices: i2, faces: r2 };
          }
          initparm(t2, e2, i2) {
            i2 > 1e6 && (this.scaleFactor = this.defaultScaleFactor / 2);
            let r2 = 1 / this.scaleFactor * 5.5;
            this.pminx = t2[0][0], this.pmaxx = t2[1][0], this.pminy = t2[0][1], this.pmaxy = t2[1][1], this.pminz = t2[0][2], this.pmaxz = t2[1][2], e2 ? (this.pminx -= this.probeRadius + r2, this.pminy -= this.probeRadius + r2, this.pminz -= this.probeRadius + r2, this.pmaxx += this.probeRadius + r2, this.pmaxy += this.probeRadius + r2, this.pmaxz += this.probeRadius + r2) : (this.pminx -= r2, this.pminy -= r2, this.pminz -= r2, this.pmaxx += r2, this.pmaxy += r2, this.pmaxz += r2), this.pminx = Math.floor(this.pminx * this.scaleFactor) / this.scaleFactor, this.pminy = Math.floor(this.pminy * this.scaleFactor) / this.scaleFactor, this.pminz = Math.floor(this.pminz * this.scaleFactor) / this.scaleFactor, this.pmaxx = Math.ceil(this.pmaxx * this.scaleFactor) / this.scaleFactor, this.pmaxy = Math.ceil(this.pmaxy * this.scaleFactor) / this.scaleFactor, this.pmaxz = Math.ceil(this.pmaxz * this.scaleFactor) / this.scaleFactor, this.ptranx = -this.pminx, this.ptrany = -this.pminy, this.ptranz = -this.pminz, this.pLength = Math.ceil(this.scaleFactor * (this.pmaxx - this.pminx)) + 1, this.pWidth = Math.ceil(this.scaleFactor * (this.pmaxy - this.pminy)) + 1, this.pHeight = Math.ceil(this.scaleFactor * (this.pmaxz - this.pminz)) + 1, this.boundingatom(e2), this.cutRadius = this.probeRadius * this.scaleFactor, this.vpBits = new Uint8Array(this.pLength * this.pWidth * this.pHeight), this.vpDistance = new Float64Array(this.pLength * this.pWidth * this.pHeight), this.vpAtomID = new Int32Array(this.pLength * this.pWidth * this.pHeight);
          }
          boundingatom(t2) {
            let e2 = {};
            for (const i2 in this.vdwRadii) {
              let r2 = this.vdwRadii[i2];
              e2[i2] = t2 ? (r2 + this.probeRadius) * this.scaleFactor + 0.5 : r2 * this.scaleFactor + 0.5;
              let s2 = e2[i2] * e2[i2];
              this.widxz[i2] = Math.floor(e2[i2]) + 1, this.depty[i2] = new Int32Array(this.widxz[i2] * this.widxz[i2]);
              let n2 = 0;
              for (let t3 = 0; t3 < this.widxz[i2]; t3++) for (let e3 = 0; e3 < this.widxz[i2]; e3++) {
                let r3 = t3 * t3 + e3 * e3;
                if (r3 > s2) this.depty[i2][n2] = -1;
                else {
                  let t4 = Math.sqrt(s2 - r3);
                  this.depty[i2][n2] = Math.floor(t4);
                }
                n2++;
              }
            }
          }
          fillvoxels(t2, e2) {
            for (let t3 = 0, e3 = this.vpBits.length; t3 < e3; t3++) this.vpBits[t3] = 0, this.vpDistance[t3] = -1, this.vpAtomID[t3] = -1;
            for (let i2 in e2) {
              let r2 = t2[e2[i2]];
              void 0 !== r2 && this.fillAtom(r2, t2);
            }
            for (let t3 = 0, e3 = this.vpBits.length; t3 < e3; t3++) this.vpBits[t3] & this.INOUT && (this.vpBits[t3] |= this.ISDONE);
          }
          fillAtom(t2, e2) {
            let i2 = Math.floor(0.5 + this.scaleFactor * (t2.x + this.ptranx)), r2 = Math.floor(0.5 + this.scaleFactor * (t2.y + this.ptrany)), s2 = Math.floor(0.5 + this.scaleFactor * (t2.z + this.ptranz)), n2 = this.getVDWIndex(t2), a2 = 0, o2 = this.pWidth * this.pHeight;
            for (let l2 = 0, h2 = this.widxz[n2]; l2 < h2; l2++) for (let c2 = 0; c2 < h2; c2++) {
              if (-1 != this.depty[n2][a2]) {
                for (let h3 = -1; h3 < 2; h3++) for (let d2 = -1; d2 < 2; d2++) for (let u2 = -1; u2 < 2; u2++) if (0 !== h3 && 0 !== d2 && 0 !== u2) {
                  let f2 = h3 * l2, p2 = u2 * c2;
                  for (let l3 = 0; l3 <= this.depty[n2][a2]; l3++) {
                    let n3 = l3 * d2, a3 = i2 + f2, h4 = r2 + n3, c3 = s2 + p2;
                    if (a3 < 0 || h4 < 0 || c3 < 0 || a3 >= this.pLength || h4 >= this.pWidth || c3 >= this.pHeight) continue;
                    let u3 = a3 * o2 + h4 * this.pHeight + c3;
                    if (this.vpBits[u3] & this.INOUT) {
                      let a4 = e2[this.vpAtomID[u3]];
                      if (a4.serial != t2.serial) {
                        let e3 = i2 + f2 - Math.floor(0.5 + this.scaleFactor * (a4.x + this.ptranx)), o3 = r2 + n3 - Math.floor(0.5 + this.scaleFactor * (a4.y + this.ptrany)), l4 = s2 + p2 - Math.floor(0.5 + this.scaleFactor * (a4.z + this.ptranz));
                        f2 * f2 + n3 * n3 + p2 * p2 < e3 * e3 + o3 * o3 + l4 * l4 && (this.vpAtomID[u3] = t2.serial);
                      }
                    } else this.vpBits[u3] |= this.INOUT, this.vpAtomID[u3] = t2.serial;
                  }
                }
              }
              a2++;
            }
          }
          fillvoxelswaals(t2, e2) {
            for (let t3 = 0, e3 = this.vpBits.length; t3 < e3; t3++) this.vpBits[t3] &= ~this.ISDONE;
            for (let i2 in e2) {
              let r2 = t2[e2[i2]];
              void 0 !== r2 && this.fillAtomWaals(r2, t2);
            }
          }
          fillAtomWaals(t2, e2) {
            let i2 = 0, r2 = Math.floor(0.5 + this.scaleFactor * (t2.x + this.ptranx)), s2 = Math.floor(0.5 + this.scaleFactor * (t2.y + this.ptrany)), n2 = Math.floor(0.5 + this.scaleFactor * (t2.z + this.ptranz)), a2 = this.getVDWIndex(t2), o2 = this.pWidth * this.pHeight;
            for (let l2 = 0, h2 = this.widxz[a2]; l2 < h2; l2++) for (let c2 = 0; c2 < h2; c2++) {
              if (-1 != this.depty[a2][i2]) {
                for (let h3 = -1; h3 < 2; h3++) for (let d2 = -1; d2 < 2; d2++) for (let u2 = -1; u2 < 2; u2++) if (0 !== h3 && 0 !== d2 && 0 !== u2) {
                  let f2 = h3 * l2, p2 = u2 * c2;
                  for (let l3 = 0; l3 <= this.depty[a2][i2]; l3++) {
                    let i3 = l3 * d2, a3 = r2 + f2, h4 = s2 + i3, c3 = n2 + p2;
                    if (a3 < 0 || h4 < 0 || c3 < 0 || a3 >= this.pLength || h4 >= this.pWidth || c3 >= this.pHeight) continue;
                    let u3 = a3 * o2 + h4 * this.pHeight + c3;
                    if (this.vpBits[u3] & this.ISDONE) {
                      let a4 = e2[this.vpAtomID[u3]];
                      if (a4.serial != t2.serial) {
                        let e3 = r2 + f2 - Math.floor(0.5 + this.scaleFactor * (a4.x + this.ptranx)), o3 = s2 + i3 - Math.floor(0.5 + this.scaleFactor * (a4.y + this.ptrany)), l4 = n2 + p2 - Math.floor(0.5 + this.scaleFactor * (a4.z + this.ptranz));
                        f2 * f2 + i3 * i3 + p2 * p2 < e3 * e3 + o3 * o3 + l4 * l4 && (this.vpAtomID[u3] = t2.serial);
                      }
                    } else this.vpBits[u3] |= this.ISDONE, this.vpAtomID[u3] = t2.serial;
                  }
                }
              }
              i2++;
            }
          }
          buildboundary() {
            let t2 = this.pWidth * this.pHeight;
            for (let e2 = 0; e2 < this.pLength; e2++) for (let i2 = 0; i2 < this.pHeight; i2++) for (let r2 = 0; r2 < this.pWidth; r2++) {
              let s2 = e2 * t2 + r2 * this.pHeight + i2;
              if (this.vpBits[s2] & this.INOUT) {
                let n2 = 0;
                for (; n2 < 26; ) {
                  let a2 = e2 + this.nb[n2][0], o2 = i2 + this.nb[n2][2], l2 = r2 + this.nb[n2][1];
                  if (a2 > -1 && a2 < this.pLength && l2 > -1 && l2 < this.pWidth && o2 > -1 && o2 < this.pHeight && !(this.vpBits[a2 * t2 + l2 * this.pHeight + o2] & this.INOUT)) {
                    this.vpBits[s2] |= this.ISBOUND;
                    break;
                  }
                  n2++;
                }
              }
            }
          }
          fastdistancemap() {
            let t2, e2 = new PointGrid(this.pLength, this.pWidth, this.pHeight), i2 = this.pWidth * this.pHeight, r2 = this.cutRadius * this.cutRadius, s2 = [], n2 = [];
            for (let r3 = 0; r3 < this.pLength; r3++) for (let n3 = 0; n3 < this.pWidth; n3++) for (let a3 = 0; a3 < this.pHeight; a3++) if (t2 = r3 * i2 + n3 * this.pHeight + a3, this.vpBits[t2] &= ~this.ISDONE, this.vpBits[t2] & this.INOUT && this.vpBits[t2] & this.ISBOUND) {
              let i3 = { ix: r3, iy: n3, iz: a3 };
              e2.set(r3, n3, a3, i3), s2.push(i3), this.vpDistance[t2] = 0, this.vpBits[t2] |= this.ISDONE, this.vpBits[t2] &= ~this.ISBOUND;
            }
            do {
              n2 = this.fastoneshell(s2, e2), s2 = [];
              for (let e3 = 0, a3 = n2.length; e3 < a3; e3++) t2 = i2 * n2[e3].ix + this.pHeight * n2[e3].iy + n2[e3].iz, this.vpBits[t2] &= ~this.ISBOUND, this.vpDistance[t2] <= 1.0404 * r2 && s2.push({ ix: n2[e3].ix, iy: n2[e3].iy, iz: n2[e3].iz });
            } while (0 !== s2.length);
            s2 = [], n2 = [], e2 = null;
            let a2 = this.scaleFactor - 0.5;
            a2 < 0 && (a2 = 0);
            let o2 = r2 - 0.5 / (0.1 + a2);
            for (let e3 = 0; e3 < this.pLength; e3++) for (let r3 = 0; r3 < this.pWidth; r3++) for (let s3 = 0; s3 < this.pHeight; s3++) t2 = e3 * i2 + r3 * this.pHeight + s3, this.vpBits[t2] &= ~this.ISBOUND, this.vpBits[t2] & this.INOUT && (this.vpBits[t2] & this.ISDONE && !(this.vpBits[t2] & this.ISDONE && this.vpDistance[t2] >= o2) || (this.vpBits[t2] |= this.ISBOUND));
          }
          fastoneshell(t2, e2) {
            let i2, r2, s2, n2, a2, o2, l2, h2, c2, d2 = [];
            if (0 === t2.length) return d2;
            let u2 = { ix: -1, iy: -1, iz: -1 }, f2 = this.pWidth * this.pHeight;
            for (let p2 = 0, g2 = t2.length; p2 < g2; p2++) {
              i2 = t2[p2].ix, r2 = t2[p2].iy, s2 = t2[p2].iz, h2 = e2.get(i2, r2, s2);
              for (let t3 = 0; t3 < 6; t3++) u2.ix = i2 + this.nb[t3][0], u2.iy = r2 + this.nb[t3][1], u2.iz = s2 + this.nb[t3][2], u2.ix < this.pLength && u2.ix > -1 && u2.iy < this.pWidth && u2.iy > -1 && u2.iz < this.pHeight && u2.iz > -1 && (c2 = u2.ix * f2 + this.pHeight * u2.iy + u2.iz, this.vpBits[c2] & this.INOUT && !(this.vpBits[c2] & this.ISDONE) ? (e2.set(u2.ix, u2.iy, s2 + this.nb[t3][2], h2), n2 = u2.ix - h2.ix, a2 = u2.iy - h2.iy, o2 = u2.iz - h2.iz, l2 = n2 * n2 + a2 * a2 + o2 * o2, this.vpDistance[c2] = l2, this.vpBits[c2] |= this.ISDONE, this.vpBits[c2] |= this.ISBOUND, d2.push({ ix: u2.ix, iy: u2.iy, iz: u2.iz })) : this.vpBits[c2] & this.INOUT && this.vpBits[c2] & this.ISDONE && (n2 = u2.ix - h2.ix, a2 = u2.iy - h2.iy, o2 = u2.iz - h2.iz, l2 = n2 * n2 + a2 * a2 + o2 * o2, l2 < this.vpDistance[c2] && (e2.set(u2.ix, u2.iy, u2.iz, h2), this.vpDistance[c2] = l2, this.vpBits[c2] & this.ISBOUND || (this.vpBits[c2] |= this.ISBOUND, d2.push({ ix: u2.ix, iy: u2.iy, iz: u2.iz })))));
            }
            for (let p2 = 0, g2 = t2.length; p2 < g2; p2++) {
              i2 = t2[p2].ix, r2 = t2[p2].iy, s2 = t2[p2].iz, h2 = e2.get(i2, r2, s2);
              for (let t3 = 6; t3 < 18; t3++) u2.ix = i2 + this.nb[t3][0], u2.iy = r2 + this.nb[t3][1], u2.iz = s2 + this.nb[t3][2], u2.ix < this.pLength && u2.ix > -1 && u2.iy < this.pWidth && u2.iy > -1 && u2.iz < this.pHeight && u2.iz > -1 && (c2 = u2.ix * f2 + this.pHeight * u2.iy + u2.iz, this.vpBits[c2] & this.INOUT && !(this.vpBits[c2] & this.ISDONE) ? (e2.set(u2.ix, u2.iy, s2 + this.nb[t3][2], h2), n2 = u2.ix - h2.ix, a2 = u2.iy - h2.iy, o2 = u2.iz - h2.iz, l2 = n2 * n2 + a2 * a2 + o2 * o2, this.vpDistance[c2] = l2, this.vpBits[c2] |= this.ISDONE, this.vpBits[c2] |= this.ISBOUND, d2.push({ ix: u2.ix, iy: u2.iy, iz: u2.iz })) : this.vpBits[c2] & this.INOUT && this.vpBits[c2] & this.ISDONE && (n2 = u2.ix - h2.ix, a2 = u2.iy - h2.iy, o2 = u2.iz - h2.iz, l2 = n2 * n2 + a2 * a2 + o2 * o2, l2 < this.vpDistance[c2] && (e2.set(u2.ix, u2.iy, u2.iz, h2), this.vpDistance[c2] = l2, this.vpBits[c2] & this.ISBOUND || (this.vpBits[c2] |= this.ISBOUND, d2.push({ ix: u2.ix, iy: u2.iy, iz: u2.iz })))));
            }
            for (let p2 = 0, g2 = t2.length; p2 < g2; p2++) {
              i2 = t2[p2].ix, r2 = t2[p2].iy, s2 = t2[p2].iz, h2 = e2.get(i2, r2, s2);
              for (let t3 = 18; t3 < 26; t3++) u2.ix = i2 + this.nb[t3][0], u2.iy = r2 + this.nb[t3][1], u2.iz = s2 + this.nb[t3][2], u2.ix < this.pLength && u2.ix > -1 && u2.iy < this.pWidth && u2.iy > -1 && u2.iz < this.pHeight && u2.iz > -1 && (c2 = u2.ix * f2 + this.pHeight * u2.iy + u2.iz, this.vpBits[c2] & this.INOUT && !(this.vpBits[c2] & this.ISDONE) ? (e2.set(u2.ix, u2.iy, s2 + this.nb[t3][2], h2), n2 = u2.ix - h2.ix, a2 = u2.iy - h2.iy, o2 = u2.iz - h2.iz, l2 = n2 * n2 + a2 * a2 + o2 * o2, this.vpDistance[c2] = l2, this.vpBits[c2] |= this.ISDONE, this.vpBits[c2] |= this.ISBOUND, d2.push({ ix: u2.ix, iy: u2.iy, iz: u2.iz })) : this.vpBits[c2] & this.INOUT && this.vpBits[c2] & this.ISDONE && (n2 = u2.ix - h2.ix, a2 = u2.iy - h2.iy, o2 = u2.iz - h2.iz, l2 = n2 * n2 + a2 * a2 + o2 * o2, l2 < this.vpDistance[c2] && (e2.set(u2.ix, u2.iy, u2.iz, h2), this.vpDistance[c2] = l2, this.vpBits[c2] & this.ISBOUND || (this.vpBits[c2] |= this.ISBOUND, d2.push({ ix: u2.ix, iy: u2.iy, iz: u2.iz })))));
            }
            return d2;
          }
          marchingcubeinit(t2) {
            for (let e2 = 0, i2 = this.vpBits.length; e2 < i2; e2++) 1 == t2 ? this.vpBits[e2] &= ~this.ISBOUND : 4 == t2 ? (this.vpBits[e2] &= ~this.ISDONE, this.vpBits[e2] & this.ISBOUND && (this.vpBits[e2] |= this.ISDONE), this.vpBits[e2] &= ~this.ISBOUND) : 2 == t2 ? this.vpBits[e2] & this.ISBOUND && this.vpBits[e2] & this.ISDONE ? this.vpBits[e2] &= ~this.ISBOUND : this.vpBits[e2] & this.ISBOUND && !(this.vpBits[e2] & this.ISDONE) && (this.vpBits[e2] |= this.ISDONE) : 3 == t2 && (this.vpBits[e2] &= ~this.ISBOUND);
          }
          marchingcube(t2) {
            this.marchingcubeinit(t2), this.verts = [], this.faces = [], ProteinSurface2.MarchingCube.march(this.vpBits, this.verts, this.faces, { smooth: 1, nX: this.pLength, nY: this.pWidth, nZ: this.pHeight });
            let e2 = this.pWidth * this.pHeight;
            for (let t3 = 0, i2 = this.verts.length; t3 < i2; t3++) this.verts[t3].atomid = this.vpAtomID[this.verts[t3].x * e2 + this.pHeight * this.verts[t3].y + this.verts[t3].z];
            ProteinSurface2.MarchingCube.laplacianSmooth(1, this.verts, this.faces);
          }
        }
        ProteinSurface2.MarchingCube = new MarchingCubeInitializer();
        var it, rt, st = i(848);
        function nt(t2, e2) {
          var i2, r2, s2, n2, a2, o2, l2, h2, c2, d2 = [], u2 = t2;
          for ((u2 = []).push(t2[0]), i2 = 1, r2 = t2.length - 1; i2 < r2; i2++) if (a2 = t2[i2], o2 = t2[i2 + 1], a2.smoothen) {
            var f2 = new $.Vector3((a2.x + o2.x) / 2, (a2.y + o2.y) / 2, (a2.z + o2.z) / 2);
            f2.atom = a2.atom, u2.push(f2);
          } else u2.push(a2);
          for (u2.push(t2[t2.length - 1]), i2 = -1, s2 = u2.length; i2 <= s2 - 3; i2++) if (n2 = u2[-1 === i2 ? 0 : i2], a2 = u2[i2 + 1], o2 = u2[i2 + 2], l2 = u2[i2 === s2 - 3 ? s2 - 1 : i2 + 3], h2 = new $.Vector3().subVectors(o2, n2).multiplyScalar(0.5), c2 = new $.Vector3().subVectors(l2, a2).multiplyScalar(0.5), !o2.skip) for (var p2 = 0; p2 < e2; p2++) {
            var g2 = 1 / e2 * p2, m2 = a2.x + g2 * h2.x + g2 * g2 * (-3 * a2.x + 3 * o2.x - 2 * h2.x - c2.x) + g2 * g2 * g2 * (2 * a2.x - 2 * o2.x + h2.x + c2.x), v2 = a2.y + g2 * h2.y + g2 * g2 * (-3 * a2.y + 3 * o2.y - 2 * h2.y - c2.y) + g2 * g2 * g2 * (2 * a2.y - 2 * o2.y + h2.y + c2.y), _2 = a2.z + g2 * h2.z + g2 * g2 * (-3 * a2.z + 3 * o2.z - 2 * h2.z - c2.z) + g2 * g2 * g2 * (2 * a2.z - 2 * o2.z + h2.z + c2.z), y2 = new $.Vector3(m2, v2, _2);
            y2.atom = p2 < e2 / 2 ? a2.atom : o2.atom, d2.push(y2);
          }
          return d2.push(u2[u2.length - 1]), d2;
        }
        !(function(t2) {
          t2[t2.NONE = 0] = "NONE", t2[t2.FLAT = 1] = "FLAT", t2[t2.ROUND = 2] = "ROUND";
        })(it || (it = {})), (function(t2) {
          function e2(t3, e3, i3) {
            var r3, s2, n2, a2, o2, l2 = Math.hypot(t3, e3);
            l2 < 1e-4 ? (s2 = 0, n2 = 1) : (s2 = -t3 / l2, n2 = e3 / l2), e3 = -s2 * t3 + n2 * e3, (r3 = Math.hypot(e3, i3)) < 1e-4 ? (a2 = 0, o2 = 1) : (a2 = i3 / r3, o2 = e3 / r3);
            var h2 = new Float32Array(9);
            return h2[0] = n2, h2[1] = s2, h2[2] = 0, h2[3] = -s2 * o2, h2[4] = n2 * o2, h2[5] = a2, h2[6] = s2 * a2, h2[7] = -n2 * a2, h2[8] = o2, h2;
          }
          var i2 = new class CylVertexCache {
            constructor() {
              this.cache = {};
              let t3, e3 = [], i3 = Math.pow(2, 4), r3 = 2, s2 = Math.pow(2, r3), n2 = i3 / s2;
              for (e3[0] = new $.Vector3(-1, 0, 0), e3[n2] = new $.Vector3(0, 0, 1), e3[2 * n2] = new $.Vector3(1, 0, 0), e3[3 * n2] = new $.Vector3(0, 0, -1), r3 = 3; r3 <= 4; r3++) {
                for (s2 = Math.pow(2, r3 - 1), n2 = i3 / s2, t3 = 0; t3 < s2 - 1; t3++) e3[n2 / 2 + t3 * n2] = e3[t3 * n2].clone().add(e3[(t3 + 1) * n2]).normalize();
                t3 = s2 - 1, e3[n2 / 2 + t3 * n2] = e3[t3 * n2].clone().add(e3[0]).normalize();
              }
              this.basisVectors = e3;
            }
            getVerticesForRadius(t3, e3, i3) {
              if (void 0 !== this.cache && void 0 !== this.cache[t3] && void 0 !== this.cache[t3][e3 + i3]) return this.cache[t3][e3 + i3];
              for (var r3, s2 = this.basisVectors.length, n2 = [], a2 = [], o2 = 0; o2 < s2; o2++) n2.push(this.basisVectors[o2].clone().multiplyScalar(t3)), n2.push(this.basisVectors[o2].clone().multiplyScalar(t3)), r3 = this.basisVectors[o2].clone().normalize(), a2.push(r3), a2.push(r3);
              var l2 = [], h2 = 10, c2 = s2;
              var d2, u2, f2 = 2 * Math.PI, p2 = Math.PI, g2 = false, m2 = false;
              for (u2 = 0; u2 <= h2; u2++) {
                g2 = 0 === u2 || u2 === h2, m2 = 5 === u2;
                var v2 = [], _2 = [];
                for (d2 = 0; d2 <= c2; d2++) if (m2) {
                  var y2 = d2 < c2 ? 2 * d2 : 0;
                  _2.push(y2 + 1), v2.push(y2);
                } else {
                  var b2 = d2 / c2, x2 = u2 / h2;
                  if (g2 && 0 !== d2) g2 && v2.push(n2.length - 1);
                  else if (d2 < c2) {
                    var w2 = new $.Vector3();
                    w2.x = -t3 * Math.cos(0 + b2 * f2) * Math.sin(0 + x2 * p2), w2.y = 1 == e3 ? 0 : t3 * Math.cos(0 + x2 * p2), w2.z = t3 * Math.sin(0 + b2 * f2) * Math.sin(0 + x2 * p2), Math.abs(w2.x) < 1e-5 && (w2.x = 0), Math.abs(w2.y) < 1e-5 && (w2.y = 0), Math.abs(w2.z) < 1e-5 && (w2.z = 0), e3 == it.FLAT ? (r3 = new $.Vector3(0, Math.cos(0 + x2 * p2), 0)).normalize() : (r3 = new $.Vector3(w2.x, w2.y, w2.z)).normalize(), n2.push(w2), a2.push(r3), v2.push(n2.length - 1);
                  } else v2.push(n2.length - c2);
                }
                m2 && l2.push(_2), l2.push(v2);
              }
              var A2 = { vertices: n2, normals: a2, verticesRows: l2, w: c2, h: h2 };
              return t3 in this.cache || (this.cache[t3] = {}), this.cache[t3][e3 + i3] = A2, A2;
            }
          }();
          t2.drawCylinder = function(t3, r3, s2, n2, a2, o2 = 0, l2 = 0) {
            if (!r3 || !s2) return;
            let h2 = function(t4) {
              if ("string" == typeof t4) {
                let e3 = t4;
                return "flat" == e3.toLowerCase() ? it.FLAT : "round" == e3.toLowerCase() ? it.ROUND : it.NONE;
              }
              return t4;
            };
            o2 = h2(o2);
            var c2 = (l2 = h2(l2)) || o2;
            a2 = a2 || { r: 0, g: 0, b: 0 };
            var d2, u2, f2, p2, g2, m2, v2 = e2(s2.x - r3.x, s2.y - r3.y, s2.z - r3.z), _2 = i2.getVerticesForRadius(n2, l2, "to"), y2 = _2.w, b2 = _2.h, x2 = c2 ? b2 * y2 + 2 : 2 * y2, w2 = t3.updateGeoGroup(x2), A2 = _2.vertices, C2 = _2.normals, S4 = _2.verticesRows, M2 = S4[b2 / 2], z2 = S4[b2 / 2 + 1], T2 = w2.vertices, E2 = w2.vertexArray, L2 = w2.normalArray, F2 = w2.colorArray, I2 = w2.faceArray;
            for (f2 = 0; f2 < y2; ++f2) {
              var O2 = 2 * f2;
              p2 = v2[0] * A2[O2].x + v2[3] * A2[O2].y + v2[6] * A2[O2].z, g2 = v2[1] * A2[O2].x + v2[4] * A2[O2].y + v2[7] * A2[O2].z, m2 = v2[5] * A2[O2].y + v2[8] * A2[O2].z, d2 = 3 * (T2 + O2), u2 = w2.faceidx, E2[d2] = p2 + r3.x, E2[d2 + 1] = g2 + r3.y, E2[d2 + 2] = m2 + r3.z, E2[d2 + 3] = p2 + s2.x, E2[d2 + 4] = g2 + s2.y, E2[d2 + 5] = m2 + s2.z, L2[d2] = p2, L2[d2 + 3] = p2, L2[d2 + 1] = g2, L2[d2 + 4] = g2, L2[d2 + 2] = m2, L2[d2 + 5] = m2, F2[d2] = a2.r, F2[d2 + 3] = a2.r, F2[d2 + 1] = a2.g, F2[d2 + 4] = a2.g, F2[d2 + 2] = a2.b, F2[d2 + 5] = a2.b, I2[u2] = z2[f2] + T2, I2[u2 + 1] = z2[f2 + 1] + T2, I2[u2 + 2] = M2[f2] + T2, I2[u2 + 3] = M2[f2] + T2, I2[u2 + 4] = z2[f2 + 1] + T2, I2[u2 + 5] = M2[f2 + 1] + T2, w2.faceidx += 6;
            }
            if (c2) {
              var D2, k2, R2, P2, U2, B2, N2, G2, V2, j2, H2, W2, q2, Y2, Z2, X2, K2, Q2, $2, J2, tt2, et2, rt2, st2, nt2, at2, ot2, lt2, ht2, ct2, dt2, ut2, ft2 = o2 ? b2 + 1 : b2 / 2 + 1;
              for (g2 = l2 ? 0 : b2 / 2; g2 < ft2; g2++) if (g2 !== b2 / 2) {
                var pt2 = g2 <= b2 / 2 ? s2 : r3, gt2 = i2.getVerticesForRadius(n2, l2, "to"), mt2 = i2.getVerticesForRadius(n2, o2, "from");
                for (pt2 === s2 ? (A2 = gt2.vertices, C2 = gt2.normals, S4 = gt2.verticesRows) : pt2 == r3 && (A2 = mt2.vertices, C2 = mt2.normals, S4 = mt2.verticesRows), p2 = 0; p2 < y2; p2++) u2 = w2.faceidx, ht2 = 3 * ((D2 = S4[g2][p2 + 1]) + T2), ct2 = 3 * ((k2 = S4[g2][p2]) + T2), dt2 = 3 * ((R2 = S4[g2 + 1][p2]) + T2), ut2 = 3 * ((P2 = S4[g2 + 1][p2 + 1]) + T2), U2 = v2[0] * A2[D2].x + v2[3] * A2[D2].y + v2[6] * A2[D2].z, B2 = v2[0] * A2[k2].x + v2[3] * A2[k2].y + v2[6] * A2[k2].z, N2 = v2[0] * A2[R2].x + v2[3] * A2[R2].y + v2[6] * A2[R2].z, G2 = v2[0] * A2[P2].x + v2[3] * A2[P2].y + v2[6] * A2[P2].z, V2 = v2[1] * A2[D2].x + v2[4] * A2[D2].y + v2[7] * A2[D2].z, j2 = v2[1] * A2[k2].x + v2[4] * A2[k2].y + v2[7] * A2[k2].z, H2 = v2[1] * A2[R2].x + v2[4] * A2[R2].y + v2[7] * A2[R2].z, W2 = v2[1] * A2[P2].x + v2[4] * A2[P2].y + v2[7] * A2[P2].z, q2 = v2[5] * A2[D2].y + v2[8] * A2[D2].z, Y2 = v2[5] * A2[k2].y + v2[8] * A2[k2].z, Z2 = v2[5] * A2[R2].y + v2[8] * A2[R2].z, X2 = v2[5] * A2[P2].y + v2[8] * A2[P2].z, E2[ht2] = U2 + pt2.x, E2[ct2] = B2 + pt2.x, E2[dt2] = N2 + pt2.x, E2[ut2] = G2 + pt2.x, E2[ht2 + 1] = V2 + pt2.y, E2[ct2 + 1] = j2 + pt2.y, E2[dt2 + 1] = H2 + pt2.y, E2[ut2 + 1] = W2 + pt2.y, E2[ht2 + 2] = q2 + pt2.z, E2[ct2 + 2] = Y2 + pt2.z, E2[dt2 + 2] = Z2 + pt2.z, E2[ut2 + 2] = X2 + pt2.z, F2[ht2] = a2.r, F2[ct2] = a2.r, F2[dt2] = a2.r, F2[ut2] = a2.r, F2[ht2 + 1] = a2.g, F2[ct2 + 1] = a2.g, F2[dt2 + 1] = a2.g, F2[ut2 + 1] = a2.g, F2[ht2 + 2] = a2.b, F2[ct2 + 2] = a2.b, F2[dt2 + 2] = a2.b, F2[ut2 + 2] = a2.b, K2 = v2[0] * C2[D2].x + v2[3] * C2[D2].y + v2[6] * C2[D2].z, Q2 = v2[0] * C2[k2].x + v2[3] * C2[k2].y + v2[6] * C2[k2].z, $2 = v2[0] * C2[R2].x + v2[3] * C2[R2].y + v2[6] * C2[R2].z, J2 = v2[0] * C2[P2].x + v2[3] * C2[P2].y + v2[6] * C2[P2].z, tt2 = v2[1] * C2[D2].x + v2[4] * C2[D2].y + v2[7] * C2[D2].z, et2 = v2[1] * C2[k2].x + v2[4] * C2[k2].y + v2[7] * C2[k2].z, rt2 = v2[1] * C2[R2].x + v2[4] * C2[R2].y + v2[7] * C2[R2].z, st2 = v2[1] * C2[P2].x + v2[4] * C2[P2].y + v2[7] * C2[P2].z, nt2 = v2[5] * C2[D2].y + v2[8] * C2[D2].z, at2 = v2[5] * C2[k2].y + v2[8] * C2[k2].z, ot2 = v2[5] * C2[R2].y + v2[8] * C2[R2].z, lt2 = v2[5] * C2[P2].y + v2[8] * C2[P2].z, 0 === g2 ? (L2[ht2] = K2, L2[dt2] = $2, L2[ut2] = J2, L2[ht2 + 1] = tt2, L2[dt2 + 1] = rt2, L2[ut2 + 1] = st2, L2[ht2 + 2] = nt2, L2[dt2 + 2] = ot2, L2[ut2 + 2] = lt2, I2[u2] = D2 + T2, I2[u2 + 1] = R2 + T2, I2[u2 + 2] = P2 + T2, w2.faceidx += 3) : g2 === ft2 - 1 ? (L2[ht2] = K2, L2[ct2] = Q2, L2[dt2] = $2, L2[ht2 + 1] = tt2, L2[ct2 + 1] = et2, L2[dt2 + 1] = rt2, L2[ht2 + 2] = nt2, L2[ct2 + 2] = at2, L2[dt2 + 2] = ot2, I2[u2] = D2 + T2, I2[u2 + 1] = k2 + T2, I2[u2 + 2] = R2 + T2, w2.faceidx += 3) : (L2[ht2] = K2, L2[ct2] = Q2, L2[ut2] = J2, L2[ht2 + 1] = tt2, L2[ct2 + 1] = et2, L2[ut2 + 1] = st2, L2[ht2 + 2] = nt2, L2[ct2 + 2] = at2, L2[ut2 + 2] = lt2, L2[ct2] = Q2, L2[dt2] = $2, L2[ut2] = J2, L2[ct2 + 1] = et2, L2[dt2 + 1] = rt2, L2[ut2 + 1] = st2, L2[ct2 + 2] = at2, L2[dt2 + 2] = ot2, L2[ut2 + 2] = lt2, I2[u2] = D2 + T2, I2[u2 + 1] = k2 + T2, I2[u2 + 2] = P2 + T2, I2[u2 + 3] = k2 + T2, I2[u2 + 4] = R2 + T2, I2[u2 + 5] = P2 + T2, w2.faceidx += 6);
              }
            }
            w2.vertices += x2;
          }, t2.drawCone = function(t3, r3, s2, n2, a2) {
            if (!r3 || !s2) return;
            a2 = a2 || { r: 0, g: 0, b: 0 };
            let o2 = new $.Vector3(s2.x - r3.x, s2.y - r3.y, s2.z - r3.z);
            var l2 = e2(o2.x, o2.y, o2.z);
            o2 = o2.normalize();
            var h2, c2, d2, u2, f2, p2, g2 = i2.basisVectors.length, m2 = i2.basisVectors, v2 = g2 + 2, _2 = t3.updateGeoGroup(v2), y2 = _2.vertices, b2 = _2.vertexArray, x2 = _2.normalArray, w2 = _2.colorArray, A2 = _2.faceArray;
            for (b2[h2 = 3 * y2] = r3.x, b2[h2 + 1] = r3.y, b2[h2 + 2] = r3.z, x2[h2] = -o2.x, x2[h2 + 1] = -o2.y, x2[h2 + 2] = -o2.z, w2[h2] = a2.r, w2[h2 + 1] = a2.g, w2[h2 + 2] = a2.b, b2[h2 + 3] = s2.x, b2[h2 + 4] = s2.y, b2[h2 + 5] = s2.z, x2[h2 + 3] = o2.x, x2[h2 + 4] = o2.y, x2[h2 + 5] = o2.z, w2[h2 + 3] = a2.r, w2[h2 + 4] = a2.g, w2[h2 + 5] = a2.b, h2 += 6, d2 = 0; d2 < g2; ++d2) {
              var C2 = m2[d2].clone();
              C2.multiplyScalar(n2), u2 = l2[0] * C2.x + l2[3] * C2.y + l2[6] * C2.z, f2 = l2[1] * C2.x + l2[4] * C2.y + l2[7] * C2.z, p2 = l2[5] * C2.y + l2[8] * C2.z, b2[h2] = u2 + r3.x, b2[h2 + 1] = f2 + r3.y, b2[h2 + 2] = p2 + r3.z, x2[h2] = u2, x2[h2 + 1] = f2, x2[h2 + 2] = p2, w2[h2] = a2.r, w2[h2 + 1] = a2.g, w2[h2 + 2] = a2.b, h2 += 3;
            }
            for (_2.vertices += g2 + 2, c2 = _2.faceidx, d2 = 0; d2 < g2; d2++) {
              var S4 = y2 + 2 + d2, M2 = y2 + 2 + (d2 + 1) % g2;
              A2[c2] = S4, A2[c2 + 1] = M2, A2[c2 + 2] = y2, A2[c2 += 3] = S4, A2[c2 + 1] = M2, A2[c2 + 2] = y2 + 1, c2 += 3;
            }
            _2.faceidx += 6 * g2;
          };
          var r2 = new class SphereVertexCache {
            constructor() {
              this.cache = /* @__PURE__ */ new Map();
            }
            getVerticesForRadius(t3, e3) {
              e3 = e3 || 2, this.cache.has(e3) || this.cache.set(e3, /* @__PURE__ */ new Map());
              let i3 = this.cache.get(e3);
              if (i3.has(t3)) return i3.get(t3);
              var r3 = { vertices: [], verticesRows: [], normals: [] }, s2 = 16 * e3, n2 = 10 * e3;
              t3 < 1 && (s2 = 10 * e3, n2 = 8 * e3);
              var a2, o2, l2 = 2 * Math.PI, h2 = Math.PI;
              for (o2 = 0; o2 <= n2; o2++) {
                let e4 = [];
                for (a2 = 0; a2 <= s2; a2++) {
                  let i4 = a2 / s2, d2 = o2 / n2, u2 = -t3 * Math.cos(0 + i4 * l2) * Math.sin(0 + d2 * h2), f2 = t3 * Math.cos(0 + d2 * h2), p2 = t3 * Math.sin(0 + i4 * l2) * Math.sin(0 + d2 * h2);
                  var c2 = new $.Vector3(u2, f2, p2);
                  c2.normalize(), r3.vertices.push({ x: u2, y: f2, z: p2 }), r3.normals.push(c2), e4.push(r3.vertices.length - 1);
                }
                r3.verticesRows.push(e4);
              }
              return i3.set(t3, r3), r3;
            }
          }();
          t2.drawSphere = function(t3, e3, i3, s2, n2) {
            var a2 = r2.getVerticesForRadius(i3, n2), o2 = a2.vertices, l2 = a2.normals, h2 = t3.updateGeoGroup(o2.length), c2 = h2.vertices, d2 = h2.vertexArray, u2 = h2.colorArray, f2 = h2.faceArray, p2 = h2.lineArray, g2 = h2.normalArray;
            for (let t4 = 0, i4 = o2.length; t4 < i4; ++t4) {
              let i5 = 3 * (c2 + t4), r3 = o2[t4];
              d2[i5] = r3.x + e3.x, d2[i5 + 1] = r3.y + e3.y, d2[i5 + 2] = r3.z + e3.z, u2[i5] = s2.r, u2[i5 + 1] = s2.g, u2[i5 + 2] = s2.b;
            }
            h2.vertices += o2.length;
            let m2 = a2.verticesRows, v2 = m2.length - 1;
            for (let t4 = 0; t4 < v2; t4++) {
              let e4 = m2[t4].length - 1;
              for (let r3 = 0; r3 < e4; r3++) {
                let e5 = h2.faceidx, s3 = h2.lineidx, n3 = m2[t4][r3 + 1] + c2, a3 = 3 * n3, d3 = m2[t4][r3] + c2, u3 = 3 * d3, v3 = m2[t4 + 1][r3] + c2, _2 = 3 * v3, y2 = m2[t4 + 1][r3 + 1] + c2, b2 = 3 * y2, x2 = l2[n3 - c2], w2 = l2[d3 - c2], A2 = l2[v3 - c2], C2 = l2[y2 - c2];
                Math.abs(o2[n3 - c2].y) === i3 ? (g2[a3] = x2.x, g2[_2] = A2.x, g2[b2] = C2.x, g2[a3 + 1] = x2.y, g2[_2 + 1] = A2.y, g2[b2 + 1] = C2.y, g2[a3 + 2] = x2.z, g2[_2 + 2] = A2.z, g2[b2 + 2] = C2.z, f2[e5] = n3, f2[e5 + 1] = v3, f2[e5 + 2] = y2, p2[s3] = n3, p2[s3 + 1] = v3, p2[s3 + 2] = n3, p2[s3 + 3] = y2, p2[s3 + 4] = v3, p2[s3 + 5] = y2, h2.faceidx += 3, h2.lineidx += 6) : Math.abs(o2[v3 - c2].y) === i3 ? (g2[a3] = x2.x, g2[u3] = w2.x, g2[_2] = A2.x, g2[a3 + 1] = x2.y, g2[u3 + 1] = w2.y, g2[_2 + 1] = A2.y, g2[a3 + 2] = x2.z, g2[u3 + 2] = w2.z, g2[_2 + 2] = A2.z, f2[e5] = n3, f2[e5 + 1] = d3, f2[e5 + 2] = v3, p2[s3] = n3, p2[s3 + 1] = d3, p2[s3 + 2] = n3, p2[s3 + 3] = v3, p2[s3 + 4] = d3, p2[s3 + 5] = v3, h2.faceidx += 3, h2.lineidx += 6) : (g2[a3] = x2.x, g2[u3] = w2.x, g2[b2] = C2.x, g2[a3 + 1] = x2.y, g2[u3 + 1] = w2.y, g2[b2 + 1] = C2.y, g2[a3 + 2] = x2.z, g2[u3 + 2] = w2.z, g2[b2 + 2] = C2.z, g2[u3] = w2.x, g2[_2] = A2.x, g2[b2] = C2.x, g2[u3 + 1] = w2.y, g2[_2 + 1] = A2.y, g2[b2 + 1] = C2.y, g2[u3 + 2] = w2.z, g2[_2 + 2] = A2.z, g2[b2 + 2] = C2.z, f2[e5] = n3, f2[e5 + 1] = d3, f2[e5 + 2] = y2, f2[e5 + 3] = d3, f2[e5 + 4] = v3, f2[e5 + 5] = y2, p2[s3] = n3, p2[s3 + 1] = d3, p2[s3 + 2] = n3, p2[s3 + 3] = y2, p2[s3 + 4] = d3, p2[s3 + 5] = v3, p2[s3 + 6] = v3, p2[s3 + 7] = y2, h2.faceidx += 6, h2.lineidx += 8);
              }
            }
          };
        })(rt || (rt = {}));
        const at = 0.5, ot = 1.3, lt = 0.8, ht = 0.4, ct = 0.4;
        function dt(t2, e2, i2, r2) {
          for (var n2, a2, o2, l2, h2 = 0, c2 = e2.length; h2 < c2; h2++) {
            l2 = Math.round(h2 * (r2.length - 1) / c2), o2 = s.CC.color(r2[l2]);
            var d2 = t2.updateGeoGroup(2), u2 = d2.vertexArray, f2 = d2.colorArray, p2 = d2.faceArray;
            u2[a2 = 3 * (n2 = d2.vertices)] = e2[h2].x, u2[a2 + 1] = e2[h2].y, u2[a2 + 2] = e2[h2].z, u2[a2 + 3] = i2[h2].x, u2[a2 + 4] = i2[h2].y, u2[a2 + 5] = i2[h2].z;
            for (var g2 = 0; g2 < 6; ++g2) f2[a2 + 3 * g2] = o2.r, f2[a2 + 1 + 3 * g2] = o2.g, f2[a2 + 2 + 3 * g2] = o2.b;
            if (h2 > 0) {
              var m2 = [n2, n2 + 1, n2 - 1, n2 - 2], v2 = d2.faceidx;
              p2[v2] = m2[0], p2[v2 + 1] = m2[1], p2[v2 + 2] = m2[3], p2[v2 + 3] = m2[1], p2[v2 + 4] = m2[2], p2[v2 + 5] = m2[3], d2.faceidx += 6;
            }
            d2.vertices += 2;
          }
        }
        function ut(t2, e2, i2, r2, n2, a2, o2) {
          o2 && "default" !== o2 || (o2 = "rectangle"), "edged" === o2 ? (function(t3, e3, i3, r3, n3) {
            if (!(e3.length < 2)) {
              var a3, o3;
              if (a3 = e3[0], o3 = e3[e3.length - 1], a3 = nt(a3, r3), o3 = nt(o3, r3), !n3) return dt(t3, a3, o3, i3);
              var l2, h2, c2, d2, u2, f2, p2, g2, m2, v2, _2, y2, b2, x2, w2, A2, C2, S4, M2, z2, T2, E2, L2 = [], F2 = [[0, 2, -6, -8], [-4, -2, 6, 4], [7, -1, -5, 3], [-3, 5, 1, -7]];
              for (b2 = 0, x2 = a3.length; b2 < x2; b2++) {
                if (v2 = Math.round(b2 * (i3.length - 1) / x2), m2 = s.CC.color(i3[v2]), L2.push(h2 = a3[b2]), L2.push(h2), L2.push(c2 = o3[b2]), L2.push(c2), b2 < x2 - 1) {
                  var I2 = a3[b2 + 1].clone().sub(a3[b2]);
                  l2 = o3[b2].clone().sub(a3[b2]).cross(I2).normalize().multiplyScalar(n3);
                }
                for (L2.push(d2 = a3[b2].clone().add(l2)), L2.push(d2), L2.push(u2 = o3[b2].clone().add(l2)), L2.push(u2), void 0 !== h2.atom && (_2 = h2.atom), z2 = (M2 = t3.updateGeoGroup(8)).vertexArray, T2 = M2.colorArray, E2 = M2.faceArray, z2[p2 = 3 * (f2 = M2.vertices)] = h2.x, z2[p2 + 1] = h2.y, z2[p2 + 2] = h2.z, z2[p2 + 3] = h2.x, z2[p2 + 4] = h2.y, z2[p2 + 5] = h2.z, z2[p2 + 6] = c2.x, z2[p2 + 7] = c2.y, z2[p2 + 8] = c2.z, z2[p2 + 9] = c2.x, z2[p2 + 10] = c2.y, z2[p2 + 11] = c2.z, z2[p2 + 12] = d2.x, z2[p2 + 13] = d2.y, z2[p2 + 14] = d2.z, z2[p2 + 15] = d2.x, z2[p2 + 16] = d2.y, z2[p2 + 17] = d2.z, z2[p2 + 18] = u2.x, z2[p2 + 19] = u2.y, z2[p2 + 20] = u2.z, z2[p2 + 21] = u2.x, z2[p2 + 22] = u2.y, z2[p2 + 23] = u2.z, w2 = 0; w2 < 8; ++w2) T2[p2 + 3 * w2] = m2.r, T2[p2 + 1 + 3 * w2] = m2.g, T2[p2 + 2 + 3 * w2] = m2.b;
                if (b2 > 0) {
                  var O2 = void 0 !== y2 && void 0 !== _2 && y2.serial !== _2.serial;
                  for (w2 = 0; w2 < 4; w2++) {
                    var D2 = [f2 + F2[w2][0], f2 + F2[w2][1], f2 + F2[w2][2], f2 + F2[w2][3]];
                    if (E2[g2 = M2.faceidx] = D2[0], E2[g2 + 1] = D2[1], E2[g2 + 2] = D2[3], E2[g2 + 3] = D2[1], E2[g2 + 4] = D2[2], E2[g2 + 5] = D2[3], M2.faceidx += 6, _2.clickable || y2.clickable || _2.hoverable || y2.hoverable) {
                      var k2 = L2[D2[3]].clone(), R2 = L2[D2[0]].clone(), P2 = L2[D2[2]].clone(), U2 = L2[D2[1]].clone();
                      if (k2.atom = L2[D2[3]].atom || null, P2.atom = L2[D2[2]].atom || null, R2.atom = L2[D2[0]].atom || null, U2.atom = L2[D2[1]].atom || null, O2) {
                        var B2 = k2.clone().add(R2).multiplyScalar(0.5), N2 = P2.clone().add(U2).multiplyScalar(0.5), G2 = k2.clone().add(U2).multiplyScalar(0.5);
                        w2 % 2 == 0 ? ((y2.clickable || y2.hoverable) && (A2 = new J.Triangle(B2, G2, k2), C2 = new J.Triangle(N2, P2, G2), S4 = new J.Triangle(G2, P2, k2), y2.intersectionShape.triangle.push(A2), y2.intersectionShape.triangle.push(C2), y2.intersectionShape.triangle.push(S4)), (_2.clickable || _2.hoverable) && (A2 = new J.Triangle(R2, U2, G2), C2 = new J.Triangle(U2, N2, G2), S4 = new J.Triangle(R2, G2, B2), _2.intersectionShape.triangle.push(A2), _2.intersectionShape.triangle.push(C2), _2.intersectionShape.triangle.push(S4))) : ((_2.clickable || _2.hoverable) && (A2 = new J.Triangle(B2, G2, k2), C2 = new J.Triangle(N2, P2, G2), S4 = new J.Triangle(G2, P2, k2), _2.intersectionShape.triangle.push(A2), _2.intersectionShape.triangle.push(C2), _2.intersectionShape.triangle.push(S4)), (y2.clickable || y2.hoverable) && (A2 = new J.Triangle(R2, U2, G2), C2 = new J.Triangle(U2, N2, G2), S4 = new J.Triangle(R2, G2, B2), y2.intersectionShape.triangle.push(A2), y2.intersectionShape.triangle.push(C2), y2.intersectionShape.triangle.push(S4)));
                      } else (_2.clickable || _2.hoverable) && (A2 = new J.Triangle(R2, U2, k2), C2 = new J.Triangle(U2, P2, k2), _2.intersectionShape.triangle.push(A2), _2.intersectionShape.triangle.push(C2));
                    }
                  }
                }
                M2.vertices += 8, y2 = _2;
              }
              var V2 = L2.length - 8;
              for (z2 = (M2 = t3.updateGeoGroup(8)).vertexArray, T2 = M2.colorArray, E2 = M2.faceArray, p2 = 3 * (f2 = M2.vertices), g2 = M2.faceidx, b2 = 0; b2 < 4; b2++) {
                L2.push(L2[2 * b2]), L2.push(L2[V2 + 2 * b2]);
                var j2 = L2[2 * b2], H2 = L2[V2 + 2 * b2];
                z2[p2 + 6 * b2] = j2.x, z2[p2 + 1 + 6 * b2] = j2.y, z2[p2 + 2 + 6 * b2] = j2.z, z2[p2 + 3 + 6 * b2] = H2.x, z2[p2 + 4 + 6 * b2] = H2.y, z2[p2 + 5 + 6 * b2] = H2.z, T2[p2 + 6 * b2] = m2.r, T2[p2 + 1 + 6 * b2] = m2.g, T2[p2 + 2 + 6 * b2] = m2.b, T2[p2 + 3 + 6 * b2] = m2.r, T2[p2 + 4 + 6 * b2] = m2.g, T2[p2 + 5 + 6 * b2] = m2.b;
              }
              V2 += 8, A2 = [f2, f2 + 2, f2 + 6, f2 + 4], C2 = [f2 + 1, f2 + 5, f2 + 7, f2 + 3], E2[g2] = A2[0], E2[g2 + 1] = A2[1], E2[g2 + 2] = A2[3], E2[g2 + 3] = A2[1], E2[g2 + 4] = A2[2], E2[g2 + 5] = A2[3], E2[g2 + 6] = C2[0], E2[g2 + 7] = C2[1], E2[g2 + 8] = C2[3], E2[g2 + 9] = C2[1], E2[g2 + 10] = C2[2], E2[g2 + 11] = C2[3], M2.faceidx += 12, M2.vertices += 8;
            }
          })(t2, e2, i2, r2, n2) : "rectangle" !== o2 && "oval" !== o2 && "parabola" !== o2 || (function(t3, e3, i3, r3, n3, a3, o3) {
            var l2, h2, c2, d2, u2, f2, p2, g2, m2, v2;
            if ((c2 = e3.length) < 2 || e3[0].length < 2) return;
            for (l2 = 0; l2 < c2; l2++) e3[l2] = nt(e3[l2], r3);
            if (d2 = e3[0].length, !n3) return dt(t3, e3[0], e3[c2 - 1], i3);
            var _2 = [], y2 = [], b2 = [];
            for (h2 = 0; h2 < c2; h2++) _2.push(0.25 + 1.5 * Math.sqrt((c2 - 1) * h2 - Math.pow(h2, 2)) / (c2 - 1)), y2.push(0.5), b2.push(2 * (Math.pow(h2 / c2, 2) - h2 / c2) + 0.6);
            var x2, w2, A2, C2, S4, M2, z2, T2, E2, L2, F2 = [];
            for (h2 = 0; h2 < 2 * c2 - 1; h2++) F2[h2] = [h2, h2 + 1, h2 + 1 - 2 * c2, h2 - 2 * c2];
            F2[2 * c2 - 1] = [h2, h2 + 1 - 2 * c2, h2 + 1 - 4 * c2, h2 - 2 * c2];
            let I2 = t3.updateGeoGroup();
            for (l2 = 0; l2 < d2; l2++) {
              let r4 = t3.groups, a4 = false;
              var O2, D2;
              for (I2 = t3.updateGeoGroup(2 * c2), r4 != t3.groups && l2 > 0 && (l2 -= 1, a4 = true), M2 = Math.round(l2 * (i3.length - 1) / d2), S4 = s.CC.color(i3[M2]), m2 = p2, v2 = g2, p2 = [], g2 = [], u2 = [], void 0 !== e3[0][l2].atom && (C2 = e3[0][l2].atom, "oval" === o3 ? f2 = _2 : "rectangle" === o3 ? f2 = y2 : "parabola" === o3 && (f2 = b2)), f2 || (f2 = y2), h2 = 0; h2 < c2; h2++) O2 = l2 < d2 - 1 ? e3[h2][l2 + 1].clone().sub(e3[h2][l2]) : e3[h2][l2 - 1].clone().sub(e3[h2][l2]).negate(), D2 = h2 < c2 - 1 ? e3[h2 + 1][l2].clone().sub(e3[h2][l2]) : e3[h2 - 1][l2].clone().sub(e3[h2][l2]).negate(), u2[h2] = D2.cross(O2).normalize().multiplyScalar(n3 * f2[h2]);
              for (h2 = 0; h2 < c2; h2++) p2[h2] = e3[h2][l2].clone().add(u2[h2].clone().negate());
              for (h2 = 0; h2 < c2; h2++) g2[h2] = e3[h2][l2].clone().add(u2[h2]);
              for (z2 = I2.vertexArray, T2 = I2.colorArray, E2 = I2.faceArray, w2 = 3 * (x2 = I2.vertices), h2 = 0; h2 < c2; h2++) z2[w2 + 3 * h2 + 0] = p2[h2].x, z2[w2 + 3 * h2 + 1] = p2[h2].y, z2[w2 + 3 * h2 + 2] = p2[h2].z;
              for (h2 = 0; h2 < c2; h2++) z2[w2 + 3 * h2 + 0 + 3 * c2] = g2[c2 - 1 - h2].x, z2[w2 + 3 * h2 + 1 + 3 * c2] = g2[c2 - 1 - h2].y, z2[w2 + 3 * h2 + 2 + 3 * c2] = g2[c2 - 1 - h2].z;
              for (h2 = 0; h2 < 2 * c2; ++h2) T2[w2 + 3 * h2 + 0] = S4.r, T2[w2 + 3 * h2 + 1] = S4.g, T2[w2 + 3 * h2 + 2] = S4.b;
              if (l2 > 0 && !a4) {
                for (h2 = 0; h2 < 2 * c2; h2++) L2 = [x2 + F2[h2][0], x2 + F2[h2][1], x2 + F2[h2][2], x2 + F2[h2][3]], E2[A2 = I2.faceidx] = L2[0], E2[A2 + 1] = L2[1], E2[A2 + 2] = L2[3], E2[A2 + 3] = L2[1], E2[A2 + 4] = L2[2], E2[A2 + 5] = L2[3], I2.faceidx += 6;
                if (C2.clickable || C2.hoverable) {
                  var k2 = [];
                  for (h2 in k2.push(new J.Triangle(m2[0], p2[0], p2[c2 - 1])), k2.push(new J.Triangle(m2[0], p2[c2 - 1], m2[c2 - 1])), k2.push(new J.Triangle(m2[c2 - 1], p2[c2 - 1], g2[c2 - 1])), k2.push(new J.Triangle(m2[c2 - 1], g2[c2 - 1], v2[c2 - 1])), k2.push(new J.Triangle(g2[0], v2[0], v2[c2 - 1])), k2.push(new J.Triangle(g2[c2 - 1], g2[0], v2[c2 - 1])), k2.push(new J.Triangle(p2[0], m2[0], v2[0])), k2.push(new J.Triangle(g2[0], p2[0], v2[0])), k2) C2.intersectionShape.triangle.push(k2[h2]);
                }
              }
              I2.vertices += 2 * c2;
            }
            for (z2 = I2.vertexArray, T2 = I2.colorArray, E2 = I2.faceArray, w2 = 3 * (x2 = I2.vertices), A2 = I2.faceidx, l2 = 0; l2 < c2 - 1; l2++) L2 = [l2, l2 + 1, 2 * c2 - 2 - l2, 2 * c2 - 1 - l2], E2[A2 = I2.faceidx] = L2[0], E2[A2 + 1] = L2[1], E2[A2 + 2] = L2[3], E2[A2 + 3] = L2[1], E2[A2 + 4] = L2[2], E2[A2 + 5] = L2[3], I2.faceidx += 6;
            for (l2 = 0; l2 < c2 - 1; l2++) L2 = [x2 - 1 - l2, x2 - 2 - l2, x2 - 2 * c2 + l2 + 1, x2 - 2 * c2 + l2], E2[A2 = I2.faceidx] = L2[0], E2[A2 + 1] = L2[1], E2[A2 + 2] = L2[3], E2[A2 + 3] = L2[1], E2[A2 + 4] = L2[2], E2[A2 + 5] = L2[3], I2.faceidx += 6;
          })(t2, e2, i2, r2, n2, 0, o2);
        }
        function ft(t2) {
          return t2 && "C" === t2.elem && "CA" === t2.atom;
        }
        function pt(t2, e2) {
          if (t2 && e2 && t2.chain === e2.chain) {
            if (!(t2.hetflag || e2.hetflag || t2.reschain !== e2.reschain || t2.resi !== e2.resi && t2.resi !== e2.resi - 1)) return true;
            if (t2.resi < e2.resi) {
              var i2 = t2.x - e2.x, r2 = t2.y - e2.y, s2 = t2.z - e2.z, n2 = i2 * i2 + r2 * r2 + s2 * s2;
              if ("CA" == t2.atom && "CA" == e2.atom && n2 < 16) return true;
              if (("P" == t2.atom || "P" == e2.atom) && n2 < 64) return true;
            }
          }
          return false;
        }
        function gt(t2, e2, i2, r2, s2) {
          if (null != e2 && 0 != e2.vertices) {
            s2 && (e2.initTypedArrays(), e2.setUpNormals());
            var a2 = new n.MeshDoubleLambertMaterial();
            a2.vertexColors = n.Coloring.FaceColors, "number" == typeof i2 && i2 >= 0 && i2 < 1 && (a2.transparent = true, a2.opacity = i2), a2.outline = r2;
            var o2 = new n.Mesh(e2, a2);
            t2.add(o2);
          }
        }
        function mt(t2, e2, i2, r2, s2, n2, a2, o2, l2) {
          var h2, c2, d2, u2, f2, p2;
          if (r2 && s2 && a2) {
            var g2 = s2.sub(r2);
            g2.normalize();
            var m2 = o2[l2];
            for (c2 = l2 + 1; c2 < o2.length && (m2 = o2[c2]).atom != a2.atom; c2++) ;
            if ((m2 = m2 ? new $.Vector3(m2.x, m2.y, m2.z) : new $.Vector3(0, 0, 0)).sub(r2), "arrow start" === a2.ss) {
              var v2 = m2.clone().multiplyScalar(0.3).cross(s2);
              r2.add(v2);
              var _2 = m2.clone().cross(g2).normalize();
              g2.rotateAboutVector(_2, 0.43);
            }
            for (a2.style.cartoon.ribbon ? h2 = a2.style.cartoon.thickness || ht : a2.style.cartoon.width ? h2 = a2.style.cartoon.width : "c" === a2.ss ? h2 = "P" === a2.atom ? lt : at : "arrow start" === a2.ss ? (h2 = ot, f2 = true) : h2 = "arrow end" === a2.ss || "h" === a2.ss && a2.style.cartoon.tubes || "tube start" === a2.ss ? at : ot, null != n2 && g2.dot(n2) < 0 && g2.negate(), g2.multiplyScalar(h2), c2 = 0; c2 < e2; c2++) d2 = 2 * c2 / (e2 - 1) - 1, (u2 = new $.Vector3(r2.x + d2 * g2.x, r2.y + d2 * g2.y, r2.z + d2 * g2.z)).atom = a2, i2 && "s" === a2.ss && (u2.smoothen = true), t2[c2].push(u2);
            if (f2) for (g2.multiplyScalar(2), c2 = 0; c2 < e2; c2++) d2 = 2 * c2 / (e2 - 1) - 1, (u2 = new $.Vector3(r2.x + d2 * g2.x, r2.y + d2 * g2.y, r2.z + d2 * g2.z)).atom = a2, u2.smoothen = false, u2.skip = true, t2[c2].push(u2);
            return p2 = a2.style.cartoon.style || "default", t2.style ? t2.style != p2 && (console.log("Warning: a cartoon chain's strand-style is ambiguous"), t2.style = "default") : t2.style = p2, "arrow start" !== a2.ss && "arrow end" !== a2.ss || (a2.ss = "s"), f2;
          }
        }
        const vt = { C: true, CA: true, O: true, P: true, OP2: true, O2P: true, "O5'": true, "O3'": true, "C5'": true, "C2'": true, "O5*": true, "O3*": true, "C5*": true, "C2*": true, N1: true, N3: true }, _t = { DA: true, DG: true, A: true, G: true }, yt = { DT: true, DC: true, U: true, C: true, T: true }, bt = { DA: true, DG: true, A: true, G: true, DT: true, DC: true, U: true, C: true, T: true };
        function xt(t2, e2, i2, a2 = 10) {
          let o2 = a2, l2 = a2;
          var h2, c2, d2, u2, f2, p2, g2, m2, v2, _2, y2, b2, x2, w2, A2, C2, S4, M2, z2 = new n.Geometry(true), T2 = new n.Geometry(true), E2 = [], F2 = [], I2 = 1, O2 = false, D2 = {};
          for (var k2 in r.Gradient.builtinGradients) r.Gradient.builtinGradients.hasOwnProperty(k2) && (D2[k2] = new r.Gradient.builtinGradients[k2](i2[1], i2[0]));
          var R2 = function(t3, e3) {
            return i2 && "spectrum" === e3.color ? e3.colorscheme in D2 ? D2[e3.colorscheme].valueToHex(t3.resi) : D2.sinebow.valueToHex(t3.resi) : (0, L.getColorFromStyle)(t3, e3).getHex();
          };
          for (m2 = 0; m2 < o2; m2++) F2[m2] = [];
          var P2 = false, U2 = false, B2 = [];
          for (m2 in e2) {
            if ("C" === (u2 = e2[m2]).elem && "CA" === u2.atom) {
              var N2 = pt(d2, u2);
              N2 && "s" === u2.ss ? P2 = true : P2 && (d2 && c2 && d2.style.cartoon.arrows && c2.style.cartoon.arrows && (d2.ss = "arrow end", c2.ss = "arrow start"), P2 = false), N2 && ("h" === d2.ss || "tube start" == d2.ss) && d2.style.cartoon.tubes ? !U2 && "tube start" != d2.ss && u2.style.cartoon.tubes && (u2.ss = "tube start", U2 = true) : U2 && ("tube start" === d2.ss ? d2.ss = "tube end" : c2 && c2.style.cartoon.tubes && (c2.ss = "tube end"), U2 = false), c2 = d2, d2 = u2;
            }
            u2 && u2.atom in vt && B2.push(u2);
          }
          U2 && d2.style.cartoon.tubes && (d2.ss = "tube end", U2 = false);
          var G2 = function(e3) {
            F2[0].length > 0 && ut(T2, F2, E2, l2, g2, 0, F2.style);
            var i3 = [], r2 = null;
            if (e3) {
              for (m2 = 0; m2 < o2; m2++) i3[m2] = F2[m2][F2[m2].length - 1];
              r2 = E2[E2.length - 1];
            }
            for (F2 = [], m2 = 0; m2 < o2; m2++) F2[m2] = [];
            if (E2 = [], e3) {
              for (m2 = 0; m2 < o2; m2++) F2[m2].push(i3[m2]);
              E2.push(r2);
            }
            gt(t2, T2, I2, O2, true), gt(t2, z2, I2, O2, false), T2 = new n.Geometry(true), z2 = new n.Geometry(true);
          };
          d2 = void 0;
          for (var V2 = 0; V2 < B2.length; V2++) {
            var j2 = (u2 = B2[V2]).resn.trim(), H2 = j2 in bt;
            if (I2 = 1, h2 = u2.style.cartoon, d2 && d2.style.cartoon && (I2 = d2.style.cartoon.opacity), d2 && d2.style.cartoon && d2.style.cartoon.outline && (O2 = d2.style.cartoon.outline), !d2 || !d2.style.cartoon || u2.style.cartoon && d2.style.cartoon.opacity == u2.style.cartoon.opacity || G2(d2.chain == u2.chain), "trace" === h2.style) {
              if (u2.hetflag) ;
              else if ("C" === u2.elem && "CA" === u2.atom || H2 && "P" === u2.atom || "BB" === u2.atom) {
                if (p2 = R2(u2, h2), g2 = (0, L.isNumeric)(h2.thickness) ? h2.thickness : ht, pt(d2, u2)) if (p2 == f2) {
                  var W2 = s.CC.color(p2);
                  rt.drawCylinder(z2, d2, u2, g2, W2, 2, 2);
                } else {
                  var q2 = new $.Vector3().addVectors(d2, u2).multiplyScalar(0.5), Y2 = s.CC.color(f2), Z2 = s.CC.color(p2);
                  rt.drawCylinder(z2, d2, q2, g2, Y2, 2, 0), rt.drawCylinder(z2, q2, u2, g2, Z2, 0, 2);
                }
                if ((true === u2.clickable || u2.hoverable) && void 0 !== u2.intersectionShape) {
                  var X2 = new $.Vector3(u2.x, u2.y, u2.z);
                  u2.intersectionShape.sphere.push(new J.Sphere(X2, g2));
                }
                d2 = u2, f2 = p2;
              }
            } else {
              if (ft(u2) || H2 && ("P" === u2.atom || 0 == u2.atom.indexOf("O5"))) {
                if (M2) if ("tube end" === u2.ss) M2 = false, S4 = new $.Vector3(u2.x, u2.y, u2.z), rt.drawCylinder(z2, C2, S4, 2, s.CC.color(f2), 1, 1), u2.ss = "h";
                else {
                  if (d2.chain == u2.chain && "tube end" !== d2.ss) continue;
                  M2 = false, d2.ss = "h", S4 = new $.Vector3(d2.x, d2.y, d2.z), rt.drawCylinder(z2, C2, S4, 2, s.CC.color(f2), 1, 1);
                }
                if (d2 && (!pt(d2, u2) || "tube start" === d2.ss)) {
                  for ("tube start" === d2.ss && (M2 = true, C2 = new $.Vector3(d2.x, d2.y, d2.z), d2.ss = "h"), A2 && (w2 = b2 ? new $.Vector3().addVectors(d2, b2).multiplyScalar(0.5) : new $.Vector3(d2.x, d2.y, d2.z), rt.drawCylinder(z2, w2, A2, ct, s.CC.color(A2.color), 0, 2), mt(F2, o2, true, b2, x2, y2, d2, B2, V2), E2.push(p2), w2 = null, A2 = null), F2[0].length > 0 && ut(T2, F2, E2, l2, g2, 0, F2.style), F2 = [], m2 = 0; m2 < o2; m2++) F2[m2] = [];
                  E2 = [];
                }
                if (void 0 === d2 || d2.rescode != u2.rescode || d2.resi != u2.resi) {
                  if (A2 && null != d2) {
                    var K2 = (w2 = new $.Vector3().addVectors(d2, u2).multiplyScalar(0.5)).clone().sub(A2).multiplyScalar(0.02);
                    w2.add(K2), rt.drawCylinder(z2, w2, A2, ct, s.CC.color(A2.color), 0, 2), w2 = null, A2 = null;
                  }
                  p2 = R2(u2, h2), E2.push(p2), g2 = (0, L.isNumeric)(h2.thickness) ? h2.thickness : ht, d2 = u2, (v2 = new $.Vector3(d2.x, d2.y, d2.z)).resi = d2.resi, f2 = p2;
                }
                true !== u2.clickable && true !== u2.hoverable || void 0 !== u2.intersectionShape && void 0 !== u2.intersectionShape.triangle || (u2.intersectionShape = { sphere: null, cylinder: [], line: [], triangle: [] });
              } else null != d2 && (ft(d2) && "O" === u2.atom || H2 && "P" === d2.atom && ("OP2" === u2.atom || "O2P" === u2.atom) || H2 && 0 == d2.atom.indexOf("O5") && 0 == u2.atom.indexOf("C5")) ? ((_2 = new $.Vector3(u2.x, u2.y, u2.z)).resi = u2.resi, "OP2" !== u2.atom && "O2P" !== u2.atom || (x2 = new $.Vector3(u2.x, u2.y, u2.z))) : H2 && 0 == u2.atom.indexOf("O3") ? b2 = new $.Vector3(u2.x, u2.y, u2.z) : ("N1" === u2.atom && j2 in _t || "N3" === u2.atom && j2 in yt) && ((A2 = new $.Vector3(u2.x, u2.y, u2.z)).color = (0, L.getColorFromStyle)(u2, h2).getHex());
              _2 && v2 && _2.resi === v2.resi && (mt(F2, o2, true, v2, _2, y2, d2, B2, V2), y2 = _2, v2 = null, _2 = null, E2.push(p2));
            }
          }
          A2 && (w2 = b2 ? new $.Vector3().addVectors(d2, b2).multiplyScalar(0.5) : new $.Vector3(d2.x, d2.y, d2.z), rt.drawCylinder(z2, w2, A2, ct, s.CC.color(A2.color), 0, 2), mt(F2, o2, true, b2, x2, y2, d2, B2, V2), E2.push(p2)), G2(false);
        }
        class GLShape {
          static finalizeGeo(t2) {
            var e2 = t2.updateGeoGroup(0);
            e2.vertices > 0 && e2.truncateArrayBuffers(true, true);
          }
          static updateColor(t2, e2) {
            var i2, r2, n2;
            e2 = e2 || s.CC.color(e2), t2.colorsNeedUpdate = true, e2.constructor !== Array && (i2 = e2.r, r2 = e2.g, n2 = e2.b);
            for (let s2 in t2.geometryGroups) {
              let a2 = t2.geometryGroups[s2], o2 = a2.colorArray;
              for (let t3 = 0, s3 = a2.vertices; t3 < s3; ++t3) {
                if (e2.constructor === Array) {
                  let s4 = e2[t3];
                  i2 = s4.r, r2 = s4.g, n2 = s4.b;
                }
                o2[3 * t3] = i2, o2[3 * t3 + 1] = r2, o2[3 * t3 + 2] = n2;
              }
            }
          }
          static drawArrow(t2, e2, i2) {
            var r2 = i2.start, s2 = i2.end, n2 = i2.radius, a2 = i2.radiusRatio, o2 = i2.mid, l2 = i2.midpos;
            if (!r2 || !s2) return;
            var h2 = e2.updateGeoGroup(51), c2 = new $.Vector3(s2.x, s2.y, s2.z).sub(r2);
            if (l2) {
              let t3 = c2.length();
              o2 = l2 > 0 ? l2 / t3 : (t3 + l2) / t3;
            }
            c2.multiplyScalar(o2);
            var d2 = new $.Vector3(r2.x, r2.y, r2.z).add(c2), u2 = c2.clone().negate();
            let f2 = new $.Vector3(r2.x, r2.y, r2.z);
            t2.intersectionShape.cylinder.push(new J.Cylinder(f2, d2.clone(), n2)), t2.intersectionShape.sphere.push(new J.Sphere(f2, n2));
            var p2 = [];
            p2[0] = c2.clone(), Math.abs(p2[0].x) > 1e-4 ? p2[0].y += 1 : p2[0].x += 1, p2[0].cross(c2), p2[0].normalize(), p2[4] = p2[0].clone(), p2[4].crossVectors(p2[0], c2), p2[4].normalize(), p2[8] = p2[0].clone().negate(), p2[12] = p2[4].clone().negate(), p2[2] = p2[0].clone().add(p2[4]).normalize(), p2[6] = p2[4].clone().add(p2[8]).normalize(), p2[10] = p2[8].clone().add(p2[12]).normalize(), p2[14] = p2[12].clone().add(p2[0]).normalize(), p2[1] = p2[0].clone().add(p2[2]).normalize(), p2[3] = p2[2].clone().add(p2[4]).normalize(), p2[5] = p2[4].clone().add(p2[6]).normalize(), p2[7] = p2[6].clone().add(p2[8]).normalize(), p2[9] = p2[8].clone().add(p2[10]).normalize(), p2[11] = p2[10].clone().add(p2[12]).normalize(), p2[13] = p2[12].clone().add(p2[14]).normalize(), p2[15] = p2[14].clone().add(p2[0]).normalize();
            var g2, m2, v2, _2, y2, b2, x2, w2, A2, C2, S4, M2, z2, T2, E2, L2, F2, I2, O2, D2, k2, R2, P2 = h2.vertices, U2 = h2.vertexArray, B2 = h2.faceArray, N2 = h2.normalArray, G2 = h2.lineArray;
            for (m2 = 0, v2 = p2.length; m2 < v2; ++m2) {
              g2 = 3 * (P2 + 3 * m2);
              var V2 = p2[m2].clone().multiplyScalar(n2).add(r2), j2 = p2[m2].clone().multiplyScalar(n2).add(d2), H2 = p2[m2].clone().multiplyScalar(n2 * a2).add(d2);
              if (U2[g2] = V2.x, U2[g2 + 1] = V2.y, U2[g2 + 2] = V2.z, U2[g2 + 3] = j2.x, U2[g2 + 4] = j2.y, U2[g2 + 5] = j2.z, U2[g2 + 6] = H2.x, U2[g2 + 7] = H2.y, U2[g2 + 8] = H2.z, m2 > 0) {
                var W2 = U2[g2 - 3], q2 = U2[g2 - 2], Y2 = U2[g2 - 1], Z2 = new $.Vector3(W2, q2, Y2), X2 = new $.Vector3(s2.x, s2.y, s2.z), K2 = d2.clone(), Q2 = new $.Vector3(H2.x, H2.y, H2.z);
                t2.intersectionShape.triangle.push(new J.Triangle(Q2, X2, Z2)), t2.intersectionShape.triangle.push(new J.Triangle(Z2.clone(), K2, Q2.clone()));
              }
            }
            h2.vertices += 48, U2[g2 = 3 * h2.vertices] = r2.x, U2[g2 + 1] = r2.y, U2[g2 + 2] = r2.z, U2[g2 + 3] = d2.x, U2[g2 + 4] = d2.y, U2[g2 + 5] = d2.z, U2[g2 + 6] = s2.x, U2[g2 + 7] = s2.y, U2[g2 + 8] = s2.z, h2.vertices += 3;
            var tt2 = h2.vertices - 3, et2 = h2.vertices - 2, it2 = h2.vertices - 1, rt2 = 3 * tt2, st2 = 3 * et2, nt2 = 3 * it2;
            for (m2 = 0, v2 = p2.length - 1; m2 < v2; ++m2) {
              var at2 = P2 + 3 * m2;
              g2 = 3 * at2, y2 = h2.faceidx, b2 = h2.lineidx, z2 = 3 * (x2 = at2), T2 = 3 * (w2 = at2 + 1), E2 = 3 * (A2 = at2 + 2), L2 = 3 * (C2 = at2 + 4), F2 = 3 * (S4 = at2 + 5), I2 = 3 * (M2 = at2 + 3), O2 = D2 = p2[m2], k2 = R2 = p2[m2 + 1], N2[z2] = O2.x, N2[T2] = D2.x, N2[I2] = R2.x, N2[z2 + 1] = O2.y, N2[T2 + 1] = D2.y, N2[I2 + 1] = R2.y, N2[z2 + 2] = O2.z, N2[T2 + 2] = D2.z, N2[I2 + 2] = R2.z, N2[T2] = D2.x, N2[L2] = k2.x, N2[I2] = R2.x, N2[T2 + 1] = D2.y, N2[L2 + 1] = k2.y, N2[I2 + 1] = R2.y, N2[T2 + 2] = D2.z, N2[L2 + 2] = k2.z, N2[I2 + 2] = R2.z, N2[E2] = D2.x, N2[F2] = k2.x, N2[E2 + 1] = D2.y, N2[F2 + 1] = k2.y, N2[E2 + 2] = D2.z, N2[F2 + 2] = k2.z, B2[y2] = x2, B2[y2 + 1] = w2, B2[y2 + 2] = M2, B2[y2 + 3] = w2, B2[y2 + 4] = C2, B2[y2 + 5] = M2, B2[y2 + 6] = x2, B2[y2 + 7] = M2, B2[y2 + 8] = tt2, B2[y2 + 9] = A2, B2[y2 + 10] = et2, B2[y2 + 11] = S4, B2[y2 + 12] = A2, B2[y2 + 13] = it2, B2[y2 + 14] = S4, G2[b2] = x2, G2[b2 + 1] = w2, G2[b2 + 2] = x2, G2[b2 + 3] = M2, G2[b2 + 4] = C2, G2[b2 + 5] = M2, G2[b2 + 6] = x2, G2[b2 + 7] = M2, G2[b2 + 8] = A2, G2[b2 + 9] = w2, G2[b2 + 10] = A2, G2[b2 + 11] = S4, G2[b2 + 12] = C2, G2[b2 + 13] = S4, G2[b2 + 14] = A2, G2[b2 + 15] = it2, G2[b2 + 16] = A2, G2[b2 + 17] = S4, G2[b2 + 18] = it2, G2[b2 + 19] = S4, h2.faceidx += 15, h2.lineidx += 20;
            }
            _2 = [P2 + 45, P2 + 46, P2 + 1, P2, P2 + 47, P2 + 2], y2 = h2.faceidx, b2 = h2.lineidx, z2 = 3 * (x2 = _2[0]), T2 = 3 * (w2 = _2[1]), E2 = 3 * (A2 = _2[4]), L2 = 3 * (C2 = _2[2]), F2 = 3 * (S4 = _2[5]), I2 = 3 * (M2 = _2[3]), O2 = D2 = p2[15], k2 = R2 = p2[0], N2[z2] = O2.x, N2[T2] = D2.x, N2[I2] = R2.x, N2[z2 + 1] = O2.y, N2[T2 + 1] = D2.y, N2[I2 + 1] = R2.y, N2[z2 + 2] = O2.z, N2[T2 + 2] = D2.z, N2[I2 + 2] = R2.z, N2[T2] = D2.x, N2[L2] = k2.x, N2[I2] = R2.x, N2[T2 + 1] = D2.y, N2[L2 + 1] = k2.y, N2[I2 + 1] = R2.y, N2[T2 + 2] = D2.z, N2[L2 + 2] = k2.z, N2[I2 + 2] = R2.z, N2[E2] = D2.x, N2[F2] = k2.x, N2[E2 + 1] = D2.y, N2[F2 + 1] = k2.y, N2[E2 + 2] = D2.z, N2[F2 + 2] = k2.z, c2.normalize(), u2.normalize(), N2[rt2] = u2.x, N2[st2] = N2[nt2] = c2.x, N2[rt2 + 1] = u2.y, N2[st2 + 1] = N2[nt2 + 1] = c2.y, N2[rt2 + 2] = u2.z, N2[st2 + 2] = N2[nt2 + 2] = c2.z, B2[y2] = x2, B2[y2 + 1] = w2, B2[y2 + 2] = M2, B2[y2 + 3] = w2, B2[y2 + 4] = C2, B2[y2 + 5] = M2, B2[y2 + 6] = x2, B2[y2 + 7] = M2, B2[y2 + 8] = tt2, B2[y2 + 9] = A2, B2[y2 + 10] = et2, B2[y2 + 11] = S4, B2[y2 + 12] = A2, B2[y2 + 13] = it2, B2[y2 + 14] = S4, G2[b2] = x2, G2[b2 + 1] = w2, G2[b2 + 2] = x2, G2[b2 + 3] = M2, G2[b2 + 4] = C2, G2[b2 + 5] = M2, G2[b2 + 6] = x2, G2[b2 + 7] = M2, G2[b2 + 8] = A2, G2[b2 + 9] = w2, G2[b2 + 10] = A2, G2[b2 + 11] = S4, G2[b2 + 12] = C2, G2[b2 + 13] = S4, G2[b2 + 14] = A2, G2[b2 + 15] = it2, G2[b2 + 16] = A2, G2[b2 + 17] = S4, G2[b2 + 18] = it2, G2[b2 + 19] = S4, h2.faceidx += 15, h2.lineidx += 20;
          }
          static updateBoundingFromPoints(t2, e2, i2, r2) {
            t2.center.set(0, 0, 0);
            let s2 = 1 / 0, n2 = 1 / 0, a2 = 1 / 0, o2 = -1 / 0, l2 = -1 / 0, h2 = -1 / 0;
            t2.box && (s2 = t2.box.min.x, o2 = t2.box.max.x, n2 = t2.box.min.y, l2 = t2.box.max.y, a2 = t2.box.min.z, h2 = t2.box.max.z);
            for (let t3 = 0, e3 = r2; t3 < e3; t3++) {
              var c2 = i2[3 * t3], d2 = i2[3 * t3 + 1], u2 = i2[3 * t3 + 2];
              c2 < s2 && (s2 = c2), d2 < n2 && (n2 = d2), u2 < a2 && (a2 = u2), c2 > o2 && (o2 = c2), d2 > l2 && (l2 = d2), u2 > h2 && (h2 = u2);
            }
            t2.center.set((o2 + s2) / 2, (l2 + n2) / 2, (h2 + a2) / 2), t2.radius = t2.center.distanceTo({ x: o2, y: l2, z: h2 }), t2.box = { min: { x: s2, y: n2, z: a2 }, max: { x: o2, y: l2, z: h2 } };
          }
          static addCustomGeo(t2, e2, i2, r2, s2) {
            var n2, a2, o2, l2, h2, c2, d2, u2, f2, p2 = e2.addGeoGroup(), g2 = i2.vertexArr, m2 = i2.normalArr, v2 = i2.faceArr;
            p2.vertices = g2.length, p2.faceidx = v2.length;
            var _2 = p2.vertexArray, y2 = p2.colorArray;
            for (r2.constructor !== Array && (u2 = r2.r, f2 = r2.g, l2 = r2.b), c2 = 0, d2 = p2.vertices; c2 < d2; ++c2) n2 = 3 * c2, a2 = g2[c2], _2[n2] = a2.x, _2[n2 + 1] = a2.y, _2[n2 + 2] = a2.z, r2.constructor === Array && (u2 = (h2 = r2[c2]).r, f2 = h2.g, l2 = h2.b), y2[n2] = u2, y2[n2 + 1] = f2, y2[n2 + 2] = l2;
            if (s2) for (c2 = 0, d2 = p2.faceidx / 3; c2 < d2; ++c2) {
              o2 = v2[n2 = 3 * c2], l2 = v2[n2 + 1], h2 = v2[n2 + 2];
              var b2 = new $.Vector3(), x2 = new $.Vector3(), w2 = new $.Vector3();
              t2.intersectionShape.triangle.push(new J.Triangle(b2.copy(g2[o2]), x2.copy(g2[l2]), w2.copy(g2[h2])));
            }
            if (s2) {
              var A2 = new $.Vector3(0, 0, 0), C2 = 0;
              for (let t3 = 0; t3 < e2.geometryGroups.length; t3++) A2.add(e2.geometryGroups[t3].getCentroid()), C2++;
              A2.divideScalar(C2), GLShape.updateBoundingFromPoints(t2.boundingSphere, { centroid: A2 }, _2, p2.vertices);
            }
            if (p2.faceArray = new Uint16Array(v2), p2.truncateArrayBuffers(true, true), m2.length < p2.vertices) p2.setNormals();
            else {
              var S4, M2 = p2.normalArray = new Float32Array(3 * p2.vertices);
              for (c2 = 0, d2 = p2.vertices; c2 < d2; ++c2) n2 = 3 * c2, S4 = m2[c2], M2[n2] = S4.x, M2[n2 + 1] = S4.y, M2[n2 + 2] = S4.z;
            }
            p2.setLineIndices(), p2.lineidx = p2.lineArray.length;
          }
          static updateFromStyle(t2, e2) {
            void 0 !== e2.color ? (t2.color = e2.color || new s.Color(), e2.color instanceof s.Color || (t2.color = s.CC.color(e2.color))) : t2.color = s.CC.color(0), t2.wireframe = !!e2.wireframe, t2.opacity = e2.alpha ? (0, $.clamp)(e2.alpha, 0, 1) : 1, void 0 !== e2.opacity && (t2.opacity = (0, $.clamp)(e2.opacity, 0, 1)), t2.side = void 0 !== e2.side ? e2.side : n.DoubleSide, t2.linewidth = void 0 === e2.linewidth ? 1 : e2.linewidth, t2.clickable = !!e2.clickable, t2.callback = (0, L.makeFunction)(e2.callback), t2.hoverable = !!e2.hoverable, t2.hover_callback = (0, L.makeFunction)(e2.hover_callback), t2.unhover_callback = (0, L.makeFunction)(e2.unhover_callback), t2.contextMenuEnabled = !!e2.contextMenuEnabled, t2.hidden = e2.hidden, t2.frame = e2.frame;
          }
          constructor(t2) {
            this.color = 16777215, this.hidden = false, this.wireframe = false, this.opacity = 1, this.linewidth = 1, this.clickable = false, this.hoverable = false, this.contextMenuEnabled = false, this.side = n.DoubleSide, this.stylespec = t2 || {}, this.boundingSphere = new J.Sphere(), this.intersectionShape = { sphere: [], cylinder: [], line: [], triangle: [] }, GLShape.updateFromStyle(this, this.stylespec), this.components = [], this.shapeObj = null, this.renderedShapeObj = null, this.geo = new n.Geometry(true), this.linegeo = new n.Geometry(true);
          }
          updateStyle(t2) {
            for (var e2 in t2) this.stylespec[e2] = t2[e2];
            if (GLShape.updateFromStyle(this, this.stylespec), t2.voldata && t2.volscheme) {
              (0, L.adjustVolumeStyle)(t2);
              const e3 = t2.volscheme, i2 = t2.voldata, r2 = s.CC, n2 = e3.range() || [-1, 1];
              this.geo.setColors((function(t3, s2, a2) {
                let o2 = i2.getVal(t3, s2, a2);
                return r2.color(e3.valueToHex(o2, n2));
              })), delete this.color;
            }
          }
          addCustom(t2) {
            t2.vertexArr = t2.vertexArr || [], t2.faceArr = t2.faceArr || [], t2.normalArr = t2.normalArr || [], GLShape.drawCustom(this, this.geo, t2);
          }
          addSphere(t2) {
            t2.center || (t2.center = new $.Vector3(0, 0, 0)), t2.radius = t2.radius ? (0, $.clamp)(t2.radius, 0, 1 / 0) : 1.5, t2.color = s.CC.color(t2.color), this.intersectionShape.sphere.push(new J.Sphere(t2.center, t2.radius)), rt.drawSphere(this.geo, t2.center, t2.radius, t2.color, t2.quality), this.components.push({ centroid: new $.Vector3(t2.center.x, t2.center.y, t2.center.z) });
            var e2 = this.geo.updateGeoGroup(0);
            GLShape.updateBoundingFromPoints(this.boundingSphere, this.components, e2.vertexArray, e2.vertices);
          }
          addBox(t2) {
            var e2, i2, r2, s2 = t2.dimensions || { w: 1, h: 1, d: 1 };
            e2 = "number" == typeof s2.w ? { x: s2.w, y: 0, z: 0 } : s2.w, i2 = "number" == typeof s2.h ? { x: 0, y: s2.h, z: 0 } : s2.h, r2 = "number" == typeof s2.d ? { x: 0, y: 0, z: s2.d } : s2.d;
            var n2 = t2.corner;
            null == n2 && (n2 = void 0 !== t2.center ? { x: t2.center.x - 0.5 * (e2.x + i2.x + r2.x), y: t2.center.y - 0.5 * (e2.y + i2.y + r2.y), z: t2.center.z - 0.5 * (e2.z + i2.z + r2.z) } : { x: 0, y: 0, z: 0 });
            var a2 = [{ x: n2.x, y: n2.y, z: n2.z }, { x: n2.x + e2.x, y: n2.y + e2.y, z: n2.z + e2.z }, { x: n2.x + i2.x, y: n2.y + i2.y, z: n2.z + i2.z }, { x: n2.x + e2.x + i2.x, y: n2.y + e2.y + i2.y, z: n2.z + e2.z + i2.z }, { x: n2.x + r2.x, y: n2.y + r2.y, z: n2.z + r2.z }, { x: n2.x + e2.x + r2.x, y: n2.y + e2.y + r2.y, z: n2.z + e2.z + r2.z }, { x: n2.x + i2.x + r2.x, y: n2.y + i2.y + r2.y, z: n2.z + i2.z + r2.z }, { x: n2.x + e2.x + i2.x + r2.x, y: n2.y + e2.y + i2.y + r2.y, z: n2.z + e2.z + i2.z + r2.z }], o2 = [], l2 = [];
            o2.splice(o2.length, 0, a2[0], a2[1], a2[2], a2[3]), l2.splice(l2.length, 0, 0, 2, 1, 1, 2, 3);
            var h2 = 4;
            o2.splice(o2.length, 0, a2[2], a2[3], a2[6], a2[7]), l2.splice(l2.length, 0, h2 + 0, h2 + 2, h2 + 1, h2 + 1, h2 + 2, h2 + 3), h2 += 4, o2.splice(o2.length, 0, a2[4], a2[5], a2[0], a2[1]), l2.splice(l2.length, 0, h2 + 0, h2 + 2, h2 + 1, h2 + 1, h2 + 2, h2 + 3), h2 += 4, o2.splice(o2.length, 0, a2[6], a2[7], a2[4], a2[5]), l2.splice(l2.length, 0, h2 + 0, h2 + 2, h2 + 1, h2 + 1, h2 + 2, h2 + 3), h2 += 4, o2.splice(o2.length, 0, a2[3], a2[1], a2[7], a2[5]), l2.splice(l2.length, 0, h2 + 0, h2 + 2, h2 + 1, h2 + 1, h2 + 2, h2 + 3), h2 += 4, o2.splice(o2.length, 0, a2[2], a2[6], a2[0], a2[4]), l2.splice(l2.length, 0, h2 + 0, h2 + 2, h2 + 1, h2 + 1, h2 + 2, h2 + 3), h2 += 4;
            var c2 = (0, L.extend)({}, t2);
            c2.vertexArr = o2, c2.faceArr = l2, c2.normalArr = [], GLShape.drawCustom(this, this.geo, c2);
            var d2 = new $.Vector3();
            this.components.push({ centroid: d2.addVectors(a2[0], a2[7]).multiplyScalar(0.5) });
            var u2 = this.geo.updateGeoGroup(0);
            GLShape.updateBoundingFromPoints(this.boundingSphere, this.components, u2.vertexArray, u2.vertices);
          }
          addCylinder(t2) {
            var e2, i2;
            e2 = t2.start ? new $.Vector3(t2.start.x || 0, t2.start.y || 0, t2.start.z || 0) : new $.Vector3(0, 0, 0), t2.end ? void 0 === (i2 = new $.Vector3(t2.end.x, t2.end.y || 0, t2.end.z || 0)).x && (i2.x = 3) : i2 = new $.Vector3(0, 0, 0);
            var r2 = t2.radius || 0.1, n2 = s.CC.color(t2.color);
            this.intersectionShape.cylinder.push(new J.Cylinder(e2, i2, r2)), rt.drawCylinder(this.geo, e2, i2, r2, n2, t2.fromCap, t2.toCap);
            var a2 = new $.Vector3();
            this.components.push({ centroid: a2.addVectors(e2, i2).multiplyScalar(0.5) });
            var o2 = this.geo.updateGeoGroup(0);
            GLShape.updateBoundingFromPoints(this.boundingSphere, this.components, o2.vertexArray, o2.vertices);
          }
          addDashedCylinder(t2) {
            var e2, i2;
            t2.dashLength = t2.dashLength || 0.25, t2.gapLength = t2.gapLength || 0.25, e2 = t2.start ? new $.Vector3(t2.start.x || 0, t2.start.y || 0, t2.start.z || 0) : new $.Vector3(0, 0, 0), t2.end ? void 0 === (i2 = new $.Vector3(t2.end.x, t2.end.y || 0, t2.end.z || 0)).x && (i2.x = 3) : i2 = new $.Vector3(3, 0, 0);
            for (var r2 = t2.radius || 0.1, n2 = s.CC.color(t2.color), a2 = Math.sqrt(Math.pow(e2.x - i2.x, 2) + Math.pow(e2.y - i2.y, 2) + Math.pow(e2.z - i2.z, 2)), o2 = a2 / (t2.gapLength + t2.dashLength), l2 = new $.Vector3(t2.start.x || 0, t2.start.y || 0, t2.start.z || 0), h2 = new $.Vector3(t2.end.x, t2.end.y || 0, t2.end.z || 0), c2 = new $.Vector3((i2.x - e2.x) / (a2 / t2.gapLength), (i2.y - e2.y) / (a2 / t2.gapLength), (i2.z - e2.z) / (a2 / t2.gapLength)), d2 = new $.Vector3((i2.x - e2.x) / (a2 / t2.dashLength), (i2.y - e2.y) / (a2 / t2.dashLength), (i2.z - e2.z) / (a2 / t2.dashLength)), u2 = 0; u2 < o2; u2++) h2 = new $.Vector3(l2.x + d2.x, l2.y + d2.y, l2.z + d2.z), this.intersectionShape.cylinder.push(new J.Cylinder(l2, h2, r2)), rt.drawCylinder(this.geo, l2, h2, r2, n2, t2.fromCap, t2.toCap), l2 = new $.Vector3(h2.x + c2.x, h2.y + c2.y, h2.z + c2.z);
            var f2 = new $.Vector3();
            this.components.push({ centroid: f2.addVectors(e2, i2).multiplyScalar(0.5) });
            var p2 = this.geo.updateGeoGroup(0);
            GLShape.updateBoundingFromPoints(this.boundingSphere, this.components, p2.vertexArray, p2.vertices);
          }
          addCurve(t2) {
            t2.points = t2.points || [], t2.smooth = t2.smooth || 10, void 0 === t2.fromCap && (t2.fromCap = 2), void 0 === t2.toCap && (t2.toCap = 2);
            var e2 = nt(t2.points, t2.smooth);
            if (e2.length < 3) console.log("Too few points in addCurve");
            else {
              var i2 = t2.radius || 0.1, r2 = s.CC.color(t2.color), n2 = 0, a2 = e2.length - 1, o2 = e2[0].distanceTo(e2[1]), l2 = Math.ceil(2 * i2 / o2);
              if (t2.toArrow) {
                let t3 = { start: e2[a2 -= l2], end: e2[e2.length - 1], radius: i2, color: r2, mid: 1e-4 };
                this.addArrow(t3);
              }
              if (t2.fromArrow) {
                let t3 = { start: e2[n2 += l2], end: e2[0], radius: i2, color: r2, mid: 1e-4 };
                this.addArrow(t3);
              }
              for (var h2 = Math.ceil(e2.length / 2), c2 = { radius: i2, color: r2, fromCap: 2, toCap: 2 }, d2 = n2; d2 < a2; d2++) c2.start = e2[d2], c2.end = e2[d2 + 1], c2.fromCap = 2, c2.toCap = 2, d2 < h2 ? (c2.fromCap = 2, c2.toCap = 0) : d2 > h2 ? (c2.fromCap = 0, c2.toCap = 2) : (c2.fromCap = 2, c2.toCap = 2), this.addCylinder(c2);
            }
          }
          addLine(t2) {
            var e2, i2;
            e2 = t2.start ? new $.Vector3(t2.start.x || 0, t2.start.y || 0, t2.start.z || 0) : new $.Vector3(0, 0, 0), t2.end ? void 0 === (i2 = new $.Vector3(t2.end.x, t2.end.y || 0, t2.end.z || 0)).x && (i2.x = 3) : i2 = new $.Vector3(3, 0, 0);
            var r2 = this.geo.updateGeoGroup(2), s2 = r2.vertices, n2 = 3 * s2, a2 = r2.vertexArray;
            a2[n2] = e2.x, a2[n2 + 1] = e2.y, a2[n2 + 2] = e2.z, a2[n2 + 3] = i2.x, a2[n2 + 4] = i2.y, a2[n2 + 5] = i2.z, r2.vertices += 2;
            var o2 = r2.lineArray, l2 = r2.lineidx;
            o2[l2] = s2, o2[l2 + 1] = s2 + 1, r2.lineidx += 2;
            var h2 = new $.Vector3();
            this.components.push({ centroid: h2.addVectors(e2, i2).multiplyScalar(0.5) }), r2 = this.geo.updateGeoGroup(0), GLShape.updateBoundingFromPoints(this.boundingSphere, this.components, r2.vertexArray, r2.vertices);
          }
          addArrow(t2) {
            if (t2.start ? t2.start = new $.Vector3(t2.start.x || 0, t2.start.y || 0, t2.start.z || 0) : t2.start = new $.Vector3(0, 0, 0), t2.dir instanceof $.Vector3 && "number" == typeof t2.length) {
              var e2 = t2.dir.clone().multiplyScalar(t2.length).add(t2.start);
              t2.end = e2;
            } else t2.end ? (t2.end = new $.Vector3(t2.end.x, t2.end.y || 0, t2.end.z || 0), void 0 === t2.end.x && (t2.end.x = 3)) : t2.end = new $.Vector3(3, 0, 0);
            t2.radius = t2.radius || 0.1, t2.radiusRatio = t2.radiusRatio || 1.618034, t2.mid = 0 < t2.mid && t2.mid < 1 ? t2.mid : 0.618034, GLShape.drawArrow(this, this.geo, t2);
            var i2 = new $.Vector3();
            this.components.push({ centroid: i2.addVectors(t2.start, t2.end).multiplyScalar(0.5) });
            var r2 = this.geo.updateGeoGroup(0);
            GLShape.updateBoundingFromPoints(this.boundingSphere, this.components, r2.vertexArray, r2.vertices);
          }
          static distance_from(t2, e2) {
            return Math.sqrt(Math.pow(t2.x - e2.x, 2) + Math.pow(t2.y - e2.y, 2) + Math.pow(t2.z - e2.z, 2));
          }
          static inSelectedRegion(t2, e2, i2) {
            for (var r2 = 0; r2 < e2.length; r2++) if (GLShape.distance_from(e2[r2], t2) <= i2) return true;
            return false;
          }
          addIsosurface(t2, e2, i2, r2) {
            var s2, n2, a2 = void 0 !== e2.isoval && "number" == typeof e2.isoval ? e2.isoval : 0, o2 = !!e2.voxel, l2 = void 0 === e2.smoothness ? 1 : e2.smoothness, h2 = t2.size.x, c2 = t2.size.y, d2 = t2.size.z, u2 = new Int16Array(h2 * c2 * d2), f2 = t2.data;
            for (s2 = 0, n2 = u2.length; s2 < n2; ++s2) u2[s2] = -1;
            var p2 = new Uint8Array(h2 * c2 * d2);
            for (s2 = 0, n2 = f2.length; s2 < n2; ++s2) {
              (a2 >= 0 ? f2[s2] - a2 : a2 - f2[s2]) > 0 && (p2[s2] |= GLShape.ISDONE);
            }
            var g2 = [], m2 = [];
            MarchingCube.march(p2, g2, m2, { fulltable: true, voxel: o2, unitCube: t2.unit, origin: t2.origin, matrix: t2.matrix, nX: h2, nY: c2, nZ: d2 }), !o2 && l2 > 0 && MarchingCube.laplacianSmooth(l2, g2, m2);
            var v2 = [], _2 = [], y2 = [];
            if (e2.selectedRegion && void 0 === e2.coords && (e2.coords = e2.selectedRegion), void 0 === e2.coords && void 0 !== e2.selection && (r2 ? e2.coords = r2.selectedAtoms(e2.selection) : console.log("addIsosurface needs viewer is selection provided.")), void 0 !== e2.coords) {
              var b2 = e2.coords[0].x, x2 = e2.coords[0].y, w2 = e2.coords[0].z, A2 = e2.coords[0].x, C2 = e2.coords[0].y, S4 = e2.coords[0].z;
              for (let t3 = 0; t3 < e2.coords.length; t3++) e2.coords[t3].x > b2 ? b2 = e2.coords[t3].x : e2.coords[t3].x < A2 && (A2 = e2.coords[t3].x), e2.coords[t3].y > x2 ? x2 = e2.coords[t3].y : e2.coords[t3].y < C2 && (C2 = e2.coords[t3].y), e2.coords[t3].z > w2 ? w2 = e2.coords[t3].z : e2.coords[t3].z < S4 && (S4 = e2.coords[t3].z);
              var M2 = 2;
              void 0 !== e2.radius && (M2 = e2.radius), void 0 !== e2.selectedOffset && (M2 = e2.selectedOffset), void 0 !== e2.seldist && (M2 = e2.seldist), A2 -= M2, b2 += M2, C2 -= M2, x2 += M2, S4 -= M2, w2 += M2;
              for (let t3 = 0; t3 < g2.length; t3++) g2[t3].x > A2 && g2[t3].x < b2 && g2[t3].y > C2 && g2[t3].y < x2 && g2[t3].z > S4 && g2[t3].z < w2 && GLShape.inSelectedRegion(g2[t3], e2.coords, M2) ? (v2.push(_2.length), _2.push(g2[t3])) : v2.push(-1);
              for (let t3 = 0; t3 + 2 < m2.length; t3 += 3) -1 !== v2[m2[t3]] && -1 !== v2[m2[t3 + 1]] && -1 !== v2[m2[t3 + 2]] && (y2.push(m2[t3] - (m2[t3] - v2[m2[t3]])), y2.push(m2[t3 + 1] - (m2[t3 + 1] - v2[m2[t3 + 1]])), y2.push(m2[t3 + 2] - (m2[t3 + 2] - v2[m2[t3 + 2]])));
              g2 = _2, m2 = y2;
            }
            GLShape.drawCustom(this, this.geo, { vertexArr: g2, faceArr: m2, normalArr: [], clickable: e2.clickable, hoverable: e2.hoverable }), this.updateStyle(e2);
            var z2 = new $.Vector3(t2.origin.x, t2.origin.y, t2.origin.z), T2 = new $.Vector3(t2.size.x * t2.unit.x, t2.size.y * t2.unit.y, t2.size.z * t2.unit.z), E2 = new $.Vector3(0, 0, 0), L2 = z2.clone(), F2 = z2.clone().add(T2);
            for (let t3 = 0; t3 < g2.length; t3++) E2.add(g2[t3]), L2.max(g2[t3]), F2.min(g2[t3]);
            E2.divideScalar(g2.length);
            var I2 = E2.distanceTo(F2), O2 = E2.distanceTo(L2);
            this.boundingSphere.center = E2, this.boundingSphere.radius = Math.max(I2, O2), "function" == typeof i2 && i2();
          }
          addVolumetricData(t2, e2, i2) {
            t2 = new st.VolumeData(t2, e2), this.addIsosurface(t2, i2);
          }
          finalize() {
            return GLShape.finalizeGeo(this.geo), this.geo.initTypedArrays(), this.geo;
          }
          globj(t2) {
            if (this.renderedShapeObj && (t2.remove(this.renderedShapeObj), this.renderedShapeObj = null), !this.hidden) {
              GLShape.finalizeGeo(this.geo), this.geo.initTypedArrays(), this.wireframe && this.geo.setUpWireframe(), void 0 !== this.color && GLShape.updateColor(this.geo, this.color), this.shapeObj = new n.Object3D();
              var e2 = null;
              e2 = this.side == n.DoubleSide ? new n.MeshDoubleLambertMaterial({ wireframe: this.wireframe, side: this.side, transparent: this.opacity < 1, opacity: this.opacity, wireframeLinewidth: this.linewidth, vertexColors: n.Coloring.VertexColors }) : new n.MeshLambertMaterial({ wireframe: this.wireframe, side: this.side, transparent: this.opacity < 1, opacity: this.opacity, wireframeLinewidth: this.linewidth, vertexColors: n.Coloring.VertexColors });
              var i2 = new n.Mesh(this.geo, e2);
              if (this.shapeObj.add(i2), this.linegeo && this.linegeo.vertices > 0) {
                var r2 = new n.LineBasicMaterial({ linewidth: this.linewidth, color: this.color }), s2 = new n.Line(this.linegeo, r2, n.LineStyle.LinePieces);
                this.shapeObj.add(s2);
              }
              this.renderedShapeObj = this.shapeObj.clone(), t2.add(this.renderedShapeObj);
            }
          }
          removegl(t2) {
            this.renderedShapeObj && (void 0 !== this.renderedShapeObj.geometry && this.renderedShapeObj.geometry.dispose(), void 0 !== this.renderedShapeObj.material && this.renderedShapeObj.material.dispose(), t2.remove(this.renderedShapeObj), this.renderedShapeObj = null), this.shapeObj = null;
          }
          get position() {
            return this.boundingSphere.center;
          }
          get x() {
            return this.boundingSphere.center.x;
          }
          get y() {
            return this.boundingSphere.center.y;
          }
          get z() {
            return this.boundingSphere.center.z;
          }
        }
        function wt(t2) {
          if (t2.vertexArr.length < 64e3) return [t2];
          var e2 = [{ vertexArr: [], normalArr: [], faceArr: [] }];
          t2.colorArr && (e2.colorArr = []);
          var i2 = [], r2 = [], s2 = 0, n2 = t2.faceArr;
          for (let o2 = 0, l2 = n2.length; o2 < l2; o2 += 3) {
            let l3 = e2[s2];
            for (let e3 = 0; e3 < 3; e3++) {
              var a2 = n2[o2 + e3];
              i2[a2] !== s2 && (i2[a2] = s2, r2[a2] = l3.vertexArr.length, l3.vertexArr.push(t2.vertexArr[a2]), t2.normalArr && t2.normalArr[a2] && l3.normalArr.push(t2.normalArr[a2]), t2.colorArr && t2.colorArr[a2] && l3.colorArr.push(t2.colorArr[a2])), l3.faceArr.push(r2[a2]);
            }
            l3.vertexArr.length >= 64e3 && (e2.push({ vertexArr: [], normalArr: [], faceArr: [] }), t2.colorArr && (e2.colorArr = []), s2++);
          }
          return e2;
        }
        GLShape.ISDONE = 2, GLShape.drawCustom = function(t2, e2, i2) {
          var r2 = i2, n2 = r2.vertexArr, a2 = r2.faceArr;
          0 !== n2.length && 0 !== a2.length || console.warn("Error adding custom shape component: No vertices and/or face indices supplied!");
          var o2 = i2.color;
          void 0 === o2 && (o2 = t2.color), o2 = s.CC.color(o2);
          for (var l2 = wt(r2), h2 = 0, c2 = l2.length; h2 < c2; h2++) GLShape.addCustomGeo(t2, e2, l2[h2], l2[h2].colorArr ? l2[h2].colorArr : o2, i2.clickable);
        };
        class GLVolumetricRender {
          static interpolateArray(t2, e2) {
            function i2(t3, e3, i3) {
              return t3 + (e3 - t3) * i3;
            }
            var r2 = [], s2 = (t2.length - 1) / (e2 - 1);
            r2[0] = t2[0];
            for (var n2 = 1; n2 < e2 - 1; n2++) {
              var a2 = n2 * s2, o2 = Math.floor(a2), l2 = Math.ceil(a2), h2 = a2 - o2;
              r2[n2] = i2(t2[o2], t2[l2], h2);
            }
            return r2[e2 - 1] = t2[t2.length - 1], r2;
          }
          constructor(t2, e2, i2) {
            this.hidden = false, this.boundingSphere = new J.Sphere(), this.renderedShapeObj = null, this.shapeObj = null, this.subsamples = 5, this.data = null, this.transferfunctionbuffer = [], this.min = 0, this.max = 0, e2 = e2 || {};
            var r2 = Object.assign([], e2.transferfn);
            this.subsamples = e2.subsamples || 5;
            var n2, a2, o2, l2, h2, c2, d2, u2, f2, p2;
            r2.forEach((function(t3) {
              t3.value = parseFloat(t3.value);
            })), r2.sort((function(t3, e3) {
              return t3.value - e3.value;
            })), this.min = r2[0].value, 0 == r2.length && r2.push(r2[0]), this.max = r2[r2.length - 1].value;
            for (let t3 = 0; t3 < r2.length - 1; t3++) if (o2 = s.CC.color(r2[t3].color), l2 = s.CC.color(r2[t3 + 1].color), f2 = r2[t3].opacity, p2 = r2[t3 + 1].opacity, (n2 = Math.floor(256 * (r2[t3].value - this.min) / (this.max - this.min))) != (a2 = Math.floor(256 * (r2[t3 + 1].value - this.min) / (this.max - this.min)))) {
              h2 = GLVolumetricRender.interpolateArray([255 * o2.r, 255 * l2.r], a2 - n2), c2 = GLVolumetricRender.interpolateArray([255 * o2.g, 255 * l2.g], a2 - n2), d2 = GLVolumetricRender.interpolateArray([255 * o2.b, 255 * l2.b], a2 - n2), u2 = GLVolumetricRender.interpolateArray([255 * f2, 255 * p2], a2 - n2);
              for (let t4 = 0; t4 < h2.length; t4++) this.transferfunctionbuffer.push(h2[t4]), this.transferfunctionbuffer.push(c2[t4]), this.transferfunctionbuffer.push(d2[t4]), this.transferfunctionbuffer.push(u2[t4]);
            }
            if (this.transferfunctionbuffer = new Uint8ClampedArray(this.transferfunctionbuffer), t2.matrix) {
              let e3 = new $.Vector3(0, 0, 0), i3 = new $.Vector3(t2.size.x, t2.size.y, t2.size.z), r3 = new $.Vector3(1, 1, 1);
              e3.applyMatrix4(t2.matrix), i3.applyMatrix4(t2.matrix), r3.applyMatrix4(t2.matrix).sub(e3), this.extent = [[e3.x, e3.y, e3.z], [i3.x, i3.y, i3.z]];
              for (let e4 = 1; e4 < 7; e4++) i3.x = 1 & e4 ? t2.size.x : 0, i3.y = 2 & e4 ? t2.size.y : 0, i3.z = 4 & e4 ? t2.size.z : 0, i3.applyMatrix4(t2.matrix), this.extent[0][0] = Math.min(this.extent[0][0], i3.x), this.extent[0][1] = Math.min(this.extent[0][1], i3.y), this.extent[0][2] = Math.min(this.extent[0][2], i3.z), this.extent[1][0] = Math.max(this.extent[1][0], i3.x), this.extent[1][1] = Math.max(this.extent[1][1], i3.y), this.extent[1][2] = Math.max(this.extent[1][2], i3.z);
              let s2 = i3.x - e3.x, n3 = i3.y - e3.y, a3 = i3.z - e3.z;
              this.maxdepth = Math.sqrt(s2 * s2 + n3 * n3 + a3 * a3), this.minunit = Math.min(Math.min(r3.x, r3.y), r3.z), this.texmatrix = new $.Matrix4().identity().scale({ x: t2.size.x, y: t2.size.y, z: t2.size.z }), this.texmatrix = this.texmatrix.multiplyMatrices(t2.matrix, this.texmatrix), this.texmatrix = this.texmatrix.getInverse(this.texmatrix);
            } else {
              this.texmatrix = new $.Matrix4().identity();
              let e3 = t2.unit.x * t2.size.x, i3 = t2.unit.y * t2.size.y, r3 = t2.unit.z * t2.size.z;
              this.texmatrix.makeTranslation(-t2.origin.x / e3, -t2.origin.y / i3, -t2.origin.z / r3), this.texmatrix.scale({ x: 1 / e3, y: 1 / i3, z: 1 / r3 }), this.minunit = Math.min(Math.min(t2.unit.x, t2.unit.y), t2.unit.z), this.extent = [[t2.origin.x, t2.origin.y, t2.origin.z], [t2.origin.x + e3, t2.origin.y + i3, t2.origin.z + r3]], this.maxdepth = Math.sqrt(e3 * e3 + i3 * i3 + r3 * r3);
            }
            var g2 = new GLShape({});
            if (g2.addBox({ corner: { x: this.extent[0][0], y: this.extent[0][1], z: this.extent[0][2] }, dimensions: { w: this.extent[1][0] - this.extent[0][0], h: this.extent[1][1] - this.extent[0][1], d: this.extent[1][2] - this.extent[0][2] } }), this.geo = g2.finalize(), this.boundingSphere.center = new $.Vector3((this.extent[0][0] + this.extent[1][0]) / 2, (this.extent[0][1] + this.extent[1][1]) / 2, (this.extent[0][2] + this.extent[1][2]) / 2), this.boundingSphere.radius = this.maxdepth / 2, void 0 === e2.coords && void 0 !== e2.selection && (i2 ? e2.coords = i2.selectedAtoms(e2.selection) : console.log("Need to provide viewer to volumetric renderer if selection specified.")), void 0 !== e2.coords && void 0 !== e2.seldist) {
              let i3 = new Uint8Array(t2.data.length), r3 = e2.seldist, s2 = r3 * r3;
              for (let n3 = 0, a3 = e2.coords.length; n3 < a3; n3++) {
                let a4 = e2.coords[n3], o3 = a4.x - r3, l3 = a4.y - r3, h3 = a4.z - r3, c3 = a4.x + r3, d3 = a4.y + r3, u3 = a4.z + r3;
                if (t2.getIndex(o3, l3, h3) >= 0 || t2.getIndex(c3, d3, u3) >= 0) for (let e3 = o3; e3 < c3; e3 += this.minunit) for (let r4 = l3; r4 < d3; r4 += this.minunit) for (let n4 = h3; n4 < u3; n4 += this.minunit) {
                  let o4 = t2.getIndex(e3, r4, n4);
                  if (o4 >= 0 && !i3[o4]) {
                    (e3 - a4.x) * (e3 - a4.x) + (r4 - a4.y) * (r4 - a4.y) + (n4 - a4.z) * (n4 - a4.z) < s2 && (i3[o4] = 1);
                  }
                }
              }
              for (let e3 = 0, r4 = t2.data.length; e3 < r4; e3++) 0 == i3[e3] && (t2.data[e3] = 1 / 0);
            }
            this.data = t2;
          }
          globj(t2) {
            if (this.renderedShapeObj && (t2.remove(this.renderedShapeObj), this.renderedShapeObj = null), !this.hidden) {
              this.shapeObj = new n.Object3D();
              var e2, i2 = new n.Texture(this.data, true), r2 = new n.Texture(this.transferfunctionbuffer, false);
              i2.needsUpdate = true, r2.needsUpdate = true, r2.flipY = false, e2 = new n.VolumetricMaterial({ transferfn: r2, transfermin: this.min, transfermax: this.max, map: i2, extent: this.extent, maxdepth: this.maxdepth, texmatrix: this.texmatrix, unit: this.minunit, subsamples: this.subsamples });
              var s2 = new n.Mesh(this.geo, e2);
              this.shapeObj.add(s2), this.renderedShapeObj = this.shapeObj.clone(), t2.add(this.renderedShapeObj);
            }
          }
          removegl(t2) {
            this.renderedShapeObj && (void 0 !== this.renderedShapeObj.geometry && this.renderedShapeObj.geometry.dispose(), void 0 !== this.renderedShapeObj.material && this.renderedShapeObj.material.dispose(), t2.remove(this.renderedShapeObj), this.renderedShapeObj = null), this.shapeObj = null;
          }
          get position() {
            return this.boundingSphere.center;
          }
          get x() {
            return this.boundingSphere.center.x;
          }
          get y() {
            return this.boundingSphere.center.y;
          }
          get z() {
            return this.boundingSphere.center.z;
          }
        }
        i(620);
        function At(t2, e2 = "utf8") {
          return new TextDecoder(e2).decode(t2);
        }
        const Ct = new TextEncoder();
        const St = (() => {
          const t2 = new Uint8Array(4);
          return !((new Uint32Array(t2.buffer)[0] = 1) & t2[0]);
        })(), Mt = { int8: globalThis.Int8Array, uint8: globalThis.Uint8Array, int16: globalThis.Int16Array, uint16: globalThis.Uint16Array, int32: globalThis.Int32Array, uint32: globalThis.Uint32Array, uint64: globalThis.BigUint64Array, int64: globalThis.BigInt64Array, float32: globalThis.Float32Array, float64: globalThis.Float64Array };
        class IOBuffer {
          constructor(t2 = 8192, e2 = {}) {
            let i2 = false;
            "number" == typeof t2 ? t2 = new ArrayBuffer(t2) : (i2 = true, this.lastWrittenByte = t2.byteLength);
            const r2 = e2.offset ? e2.offset >>> 0 : 0, s2 = t2.byteLength - r2;
            let n2 = r2;
            (ArrayBuffer.isView(t2) || t2 instanceof IOBuffer) && (t2.byteLength !== t2.buffer.byteLength && (n2 = t2.byteOffset + r2), t2 = t2.buffer), this.lastWrittenByte = i2 ? s2 : 0, this.buffer = t2, this.length = s2, this.byteLength = s2, this.byteOffset = n2, this.offset = 0, this.littleEndian = true, this._data = new DataView(this.buffer, n2, s2), this._mark = 0, this._marks = [];
          }
          available(t2 = 1) {
            return this.offset + t2 <= this.length;
          }
          isLittleEndian() {
            return this.littleEndian;
          }
          setLittleEndian() {
            return this.littleEndian = true, this;
          }
          isBigEndian() {
            return !this.littleEndian;
          }
          setBigEndian() {
            return this.littleEndian = false, this;
          }
          skip(t2 = 1) {
            return this.offset += t2, this;
          }
          back(t2 = 1) {
            return this.offset -= t2, this;
          }
          seek(t2) {
            return this.offset = t2, this;
          }
          mark() {
            return this._mark = this.offset, this;
          }
          reset() {
            return this.offset = this._mark, this;
          }
          pushMark() {
            return this._marks.push(this.offset), this;
          }
          popMark() {
            const t2 = this._marks.pop();
            if (void 0 === t2) throw new Error("Mark stack empty");
            return this.seek(t2), this;
          }
          rewind() {
            return this.offset = 0, this;
          }
          ensureAvailable(t2 = 1) {
            if (!this.available(t2)) {
              const e2 = 2 * (this.offset + t2), i2 = new Uint8Array(e2);
              i2.set(new Uint8Array(this.buffer)), this.buffer = i2.buffer, this.length = this.byteLength = e2, this._data = new DataView(this.buffer);
            }
            return this;
          }
          readBoolean() {
            return 0 !== this.readUint8();
          }
          readInt8() {
            return this._data.getInt8(this.offset++);
          }
          readUint8() {
            return this._data.getUint8(this.offset++);
          }
          readByte() {
            return this.readUint8();
          }
          readBytes(t2 = 1) {
            return this.readArray(t2, "uint8");
          }
          readArray(t2, e2) {
            const i2 = Mt[e2].BYTES_PER_ELEMENT * t2, r2 = this.byteOffset + this.offset, s2 = this.buffer.slice(r2, r2 + i2);
            if (this.littleEndian === St && "uint8" !== e2 && "int8" !== e2) {
              const t3 = new Uint8Array(this.buffer.slice(r2, r2 + i2));
              t3.reverse();
              const s3 = new Mt[e2](t3.buffer);
              return this.offset += i2, s3.reverse(), s3;
            }
            const n2 = new Mt[e2](s2);
            return this.offset += i2, n2;
          }
          readInt16() {
            const t2 = this._data.getInt16(this.offset, this.littleEndian);
            return this.offset += 2, t2;
          }
          readUint16() {
            const t2 = this._data.getUint16(this.offset, this.littleEndian);
            return this.offset += 2, t2;
          }
          readInt32() {
            const t2 = this._data.getInt32(this.offset, this.littleEndian);
            return this.offset += 4, t2;
          }
          readUint32() {
            const t2 = this._data.getUint32(this.offset, this.littleEndian);
            return this.offset += 4, t2;
          }
          readFloat32() {
            const t2 = this._data.getFloat32(this.offset, this.littleEndian);
            return this.offset += 4, t2;
          }
          readFloat64() {
            const t2 = this._data.getFloat64(this.offset, this.littleEndian);
            return this.offset += 8, t2;
          }
          readBigInt64() {
            const t2 = this._data.getBigInt64(this.offset, this.littleEndian);
            return this.offset += 8, t2;
          }
          readBigUint64() {
            const t2 = this._data.getBigUint64(this.offset, this.littleEndian);
            return this.offset += 8, t2;
          }
          readChar() {
            return String.fromCharCode(this.readInt8());
          }
          readChars(t2 = 1) {
            let e2 = "";
            for (let i2 = 0; i2 < t2; i2++) e2 += this.readChar();
            return e2;
          }
          readUtf8(t2 = 1) {
            return At(this.readBytes(t2));
          }
          decodeText(t2 = 1, e2 = "utf-8") {
            return At(this.readBytes(t2), e2);
          }
          writeBoolean(t2) {
            return this.writeUint8(t2 ? 255 : 0), this;
          }
          writeInt8(t2) {
            return this.ensureAvailable(1), this._data.setInt8(this.offset++, t2), this._updateLastWrittenByte(), this;
          }
          writeUint8(t2) {
            return this.ensureAvailable(1), this._data.setUint8(this.offset++, t2), this._updateLastWrittenByte(), this;
          }
          writeByte(t2) {
            return this.writeUint8(t2);
          }
          writeBytes(t2) {
            this.ensureAvailable(t2.length);
            for (let e2 = 0; e2 < t2.length; e2++) this._data.setUint8(this.offset++, t2[e2]);
            return this._updateLastWrittenByte(), this;
          }
          writeInt16(t2) {
            return this.ensureAvailable(2), this._data.setInt16(this.offset, t2, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
          }
          writeUint16(t2) {
            return this.ensureAvailable(2), this._data.setUint16(this.offset, t2, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
          }
          writeInt32(t2) {
            return this.ensureAvailable(4), this._data.setInt32(this.offset, t2, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
          }
          writeUint32(t2) {
            return this.ensureAvailable(4), this._data.setUint32(this.offset, t2, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
          }
          writeFloat32(t2) {
            return this.ensureAvailable(4), this._data.setFloat32(this.offset, t2, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
          }
          writeFloat64(t2) {
            return this.ensureAvailable(8), this._data.setFloat64(this.offset, t2, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
          }
          writeBigInt64(t2) {
            return this.ensureAvailable(8), this._data.setBigInt64(this.offset, t2, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
          }
          writeBigUint64(t2) {
            return this.ensureAvailable(8), this._data.setBigUint64(this.offset, t2, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
          }
          writeChar(t2) {
            return this.writeUint8(t2.charCodeAt(0));
          }
          writeChars(t2) {
            for (let e2 = 0; e2 < t2.length; e2++) this.writeUint8(t2.charCodeAt(e2));
            return this;
          }
          writeUtf8(t2) {
            return this.writeBytes((function(t3) {
              return Ct.encode(t3);
            })(t2));
          }
          toArray() {
            return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
          }
          _updateLastWrittenByte() {
            this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset);
          }
        }
        const zt = 1, Tt = 2, Et = 3, Lt = 4, Ft = 5, It = 6;
        function Ot(t2) {
          switch (Number(t2)) {
            case zt:
              return "byte";
            case Tt:
              return "char";
            case Et:
              return "short";
            case Lt:
              return "int";
            case Ft:
              return "float";
            case It:
              return "double";
            default:
              return "undefined";
          }
        }
        function Dt(t2) {
          switch (Number(t2)) {
            case zt:
            case Tt:
              return 1;
            case Et:
              return 2;
            case Lt:
            case Ft:
              return 4;
            case It:
              return 8;
            default:
              return -1;
          }
        }
        function kt(t2) {
          switch (String(t2)) {
            case "byte":
              return zt;
            case "char":
              return Tt;
            case "short":
              return Et;
            case "int":
              return Lt;
            case "float":
              return Ft;
            case "double":
              return It;
            default:
              return -1;
          }
        }
        function Rt(t2, e2) {
          if (1 !== t2) {
            const i2 = new Array(t2);
            for (let r2 = 0; r2 < t2; r2++) i2[r2] = e2();
            return i2;
          }
          return e2();
        }
        function Pt(t2, e2, i2) {
          switch (e2) {
            case zt:
              return Array.from(t2.readBytes(i2));
            case Tt:
              return (function(t3) {
                if (0 === t3.charCodeAt(t3.length - 1)) return t3.substring(0, t3.length - 1);
                return t3;
              })(t2.readChars(i2));
            case Et:
              return Rt(i2, t2.readInt16.bind(t2));
            case Lt:
              return Rt(i2, t2.readInt32.bind(t2));
            case Ft:
              return Rt(i2, t2.readFloat32.bind(t2));
            case It:
              return Rt(i2, t2.readFloat64.bind(t2));
            default:
              throw new Error(`non valid type ${e2}`);
          }
        }
        function Ut(t2, e2) {
          if (t2) throw new TypeError(`Not a valid NetCDF v3.x file: ${e2}`);
        }
        function Bt(t2) {
          t2.offset % 4 != 0 && t2.skip(4 - t2.offset % 4);
        }
        function Nt(t2) {
          const e2 = t2.readUint32(), i2 = t2.readChars(e2);
          return Bt(t2), i2;
        }
        function Gt(t2, e2) {
          const i2 = { version: e2 }, r2 = { length: t2.readUint32() }, s2 = (function(t3) {
            const e3 = {};
            let i3, r3;
            const s3 = t3.readUint32();
            let n3;
            if (0 === s3) return Ut(0 !== t3.readUint32(), "wrong empty tag for list of dimensions"), [];
            {
              Ut(10 !== s3, "wrong tag for list of dimensions");
              const e4 = t3.readUint32();
              n3 = new Array(e4);
              for (let s4 = 0; s4 < e4; s4++) {
                const e5 = Nt(t3), a2 = t3.readUint32();
                0 === a2 && (i3 = s4, r3 = e5), n3[s4] = { name: e5, size: a2 };
              }
            }
            void 0 !== i3 && (e3.recordId = i3);
            void 0 !== r3 && (e3.recordName = r3);
            return e3.dimensions = n3, e3;
          })(t2);
          Array.isArray(s2) || (r2.id = s2.recordId, r2.name = s2.recordName, i2.dimensions = s2.dimensions), i2.globalAttributes = Vt(t2);
          const n2 = (function(t3, e3, i3) {
            const r3 = t3.readUint32();
            let s3, n3 = 0;
            if (0 === r3) return Ut(0 !== t3.readUint32(), "wrong empty tag for list of variables"), [];
            {
              Ut(11 !== r3, "wrong tag for list of variables");
              const a2 = t3.readUint32();
              s3 = new Array(a2);
              for (let r4 = 0; r4 < a2; r4++) {
                const a3 = Nt(t3), o2 = t3.readUint32(), l2 = new Array(o2);
                for (let e4 = 0; e4 < o2; e4++) l2[e4] = t3.readUint32();
                const h2 = Vt(t3), c2 = t3.readUint32();
                Ut(c2 < 1 && c2 > 6, `non valid type ${c2}`);
                const d2 = t3.readUint32();
                let u2 = t3.readUint32();
                2 === i3 && (Ut(u2 > 0, "offsets larger than 4GB not supported"), u2 = t3.readUint32());
                let f2 = false;
                void 0 !== e3 && l2[0] === e3 && (n3 += d2, f2 = true), s3[r4] = { name: a3, dimensions: l2, attributes: h2, type: Ot(c2), size: d2, offset: u2, record: f2 };
              }
            }
            return { variables: s3, recordStep: n3 };
          })(t2, r2?.id, e2);
          return Array.isArray(n2) || (i2.variables = n2.variables, r2.recordStep = n2.recordStep), i2.recordDimension = r2, i2;
        }
        function Vt(t2) {
          const e2 = t2.readUint32();
          let i2;
          if (0 === e2) return Ut(0 !== t2.readUint32(), "wrong empty tag for list of attributes"), [];
          {
            Ut(12 !== e2, "wrong tag for list of attributes");
            const r2 = t2.readUint32();
            i2 = new Array(r2);
            for (let e3 = 0; e3 < r2; e3++) {
              const r3 = Nt(t2), s2 = t2.readUint32();
              Ut(s2 < 1 || s2 > 6, `non valid type ${s2}`);
              const n2 = t2.readUint32(), a2 = Pt(t2, s2, n2);
              Bt(t2), i2[e3] = { name: r3, type: Ot(s2), value: a2 };
            }
          }
          return i2;
        }
        function jt() {
          const t2 = [];
          t2.push("DIMENSIONS");
          for (const e3 of this.dimensions) t2.push(`  ${e3.name.padEnd(30)} = size: ${e3.size}`);
          t2.push(""), t2.push("GLOBAL ATTRIBUTES");
          for (const e3 of this.globalAttributes) t2.push(`  ${e3.name.padEnd(30)} = ${e3.value}`);
          const e2 = JSON.parse(JSON.stringify(this.variables));
          t2.push(""), t2.push("VARIABLES:");
          for (const i2 of e2) {
            i2.value = this.getDataVariable(i2);
            let e3 = JSON.stringify(i2.value);
            e3.length > 50 && (e3 = e3.substring(0, 50)), isNaN(i2.value.length) || (e3 += ` (length: ${i2.value.length})`), t2.push(`  ${i2.name.padEnd(30)} = ${e3}`);
          }
          return t2.join("\n");
        }
        class NetCDFReader {
          constructor(t2) {
            this.toString = jt;
            const e2 = new IOBuffer(t2);
            e2.setBigEndian(), Ut("CDF" !== e2.readChars(3), "should start with CDF");
            const i2 = e2.readByte();
            Ut(i2 > 2, "unknown version"), this.header = Gt(e2, i2), this.buffer = e2;
          }
          get version() {
            return 1 === this.header.version ? "classic format" : "64-bit offset format";
          }
          get recordDimension() {
            return this.header.recordDimension;
          }
          get dimensions() {
            return this.header.dimensions;
          }
          get globalAttributes() {
            return this.header.globalAttributes;
          }
          getAttribute(t2) {
            const e2 = this.globalAttributes.find(((e3) => e3.name === t2));
            return e2 ? e2.value : null;
          }
          getDataVariableAsString(t2) {
            const e2 = this.getDataVariable(t2);
            return e2 ? e2.join("") : null;
          }
          get variables() {
            return this.header.variables;
          }
          getDataVariable(t2) {
            let e2;
            if (e2 = "string" == typeof t2 ? this.header.variables.find(((e3) => e3.name === t2)) : t2, void 0 === e2) throw new Error("Not a valid NetCDF v3.x file: variable not found");
            return this.buffer.seek(e2.offset), e2.record ? (function(t3, e3, i2) {
              const r2 = kt(e3.type), s2 = e3.size ? e3.size / Dt(r2) : 1, n2 = i2.length, a2 = new Array(n2), o2 = i2.recordStep;
              if (!o2) throw new Error("recordDimension.recordStep is undefined");
              for (let e4 = 0; e4 < n2; e4++) {
                const i3 = t3.offset;
                a2[e4] = Pt(t3, r2, s2), t3.seek(i3 + o2);
              }
              return a2;
            })(this.buffer, e2, this.header.recordDimension) : (function(t3, e3) {
              const i2 = kt(e3.type), r2 = e3.size / Dt(i2), s2 = new Array(r2);
              for (let e4 = 0; e4 < r2; e4++) s2[e4] = Pt(t3, i2, 1);
              return s2;
            })(this.buffer, e2);
          }
          dataVariableExists(t2) {
            return void 0 !== this.header.variables.find(((e2) => e2.name === t2));
          }
          attributeExists(t2) {
            return void 0 !== this.globalAttributes.find(((e2) => e2.name === t2));
          }
        }
        class GLModel {
          static sameObj(t2, e2) {
            return t2 && e2 ? JSON.stringify(t2) == JSON.stringify(e2) : t2 == e2;
          }
          constructor(t2, e2) {
            this.atoms = [], this.frames = [], this.box = null, this.atomdfs = null, this.id = 0, this.hidden = false, this.molObj = null, this.renderedMolObj = null, this.lastColors = null, this.modelData = {}, this.modelDatas = null, this.idMatrix = new $.Matrix4(), this.dontDuplicateAtoms = true, this.defaultColor = s.elementColors.defaultColor, this.defaultStickRadius = 0.25, this.options = e2 || {}, this.ElementColors = this.options.defaultcolors ? this.options.defaultcolors : s.elementColors.defaultColors, this.defaultSphereRadius = this.options.defaultSphereRadius ? this.options.defaultSphereRadius : 1.5, this.defaultCartoonQuality = this.options.cartoonQuality ? this.options.cartoonQuality : 10, this.id = t2;
          }
          getRadiusFromStyle(t2, e2) {
            var i2 = this.defaultSphereRadius;
            if (void 0 !== e2.radius) i2 = e2.radius;
            else if (GLModel.vdwRadii[t2.elem]) i2 = GLModel.vdwRadii[t2.elem];
            else if (t2.elem.length > 1) {
              let e3 = t2.elem;
              e3 = e3[0].toUpperCase() + e3[1].toLowerCase(), GLModel.vdwRadii[e3] && (i2 = GLModel.vdwRadii[e3]);
            }
            return void 0 !== e2.scale && (i2 *= e2.scale), i2;
          }
          drawAtomCross(t2, e2) {
            if (t2.style.cross) {
              var i2 = t2.style.cross;
              if (!i2.hidden) {
                var r2 = i2.linewidth || GLModel.defaultlineWidth;
                e2[r2] || (e2[r2] = new n.Geometry());
                var s2 = e2[r2].updateGeoGroup(6), a2 = this.getRadiusFromStyle(t2, i2), o2 = [[a2, 0, 0], [-a2, 0, 0], [0, a2, 0], [0, -a2, 0], [0, 0, a2], [0, 0, -a2]], l2 = t2.clickable || t2.hoverable;
                l2 && void 0 === t2.intersectionShape && (t2.intersectionShape = { sphere: [], cylinder: [], line: [] });
                for (var h2 = (0, L.getColorFromStyle)(t2, i2), c2 = s2.vertexArray, d2 = s2.colorArray, u2 = 0; u2 < 6; u2++) {
                  var f2 = 3 * s2.vertices;
                  if (s2.vertices++, c2[f2] = t2.x + o2[u2][0], c2[f2 + 1] = t2.y + o2[u2][1], c2[f2 + 2] = t2.z + o2[u2][2], d2[f2] = h2.r, d2[f2 + 1] = h2.g, d2[f2 + 2] = h2.b, l2) {
                    var p2 = new $.Vector3(o2[u2][0], o2[u2][1], o2[u2][2]);
                    p2.multiplyScalar(0.1), p2.set(p2.x + t2.x, p2.y + t2.y, p2.z + t2.z), t2.intersectionShape.line.push(p2);
                  }
                }
              }
            }
          }
          getGoodCross(t2, e2, i2, r2) {
            for (var s2 = null, n2 = -1, a2 = 0, o2 = t2.bonds.length; a2 < o2; a2++) if (t2.bonds[a2] != e2.index) {
              let e3 = t2.bonds[a2], o3 = this.atoms[e3], h2 = new $.Vector3(o3.x, o3.y, o3.z).clone();
              h2.sub(i2);
              let c2 = h2.clone();
              c2.cross(r2);
              var l2 = c2.lengthSq();
              if (l2 > n2 && (s2 = c2, (n2 = l2) > 0.1)) return s2;
            }
            return s2;
          }
          getSideBondV(t2, e2, i2) {
            var r2, s2, n2, a2, o2 = new $.Vector3(t2.x, t2.y, t2.z), l2 = new $.Vector3(e2.x, e2.y, e2.z).clone(), h2 = null;
            if (l2.sub(o2), 1 === t2.bonds.length) 1 === e2.bonds.length ? (h2 = l2.clone(), Math.abs(h2.x) > 1e-4 ? h2.y += 1 : h2.x += 1) : (r2 = (i2 + 1) % e2.bonds.length, s2 = e2.bonds[r2], (n2 = this.atoms[s2]).index == t2.index && (r2 = (r2 + 1) % e2.bonds.length, s2 = e2.bonds[r2], n2 = this.atoms[s2]), (a2 = new $.Vector3(n2.x, n2.y, n2.z).clone()).sub(o2), (h2 = a2.clone()).cross(l2));
            else if ((h2 = this.getGoodCross(t2, e2, o2, l2)).lengthSq() < 0.01) {
              var c2 = this.getGoodCross(e2, t2, o2, l2);
              null != c2 && (h2 = c2);
            }
            return h2.lengthSq() < 0.01 && (h2 = l2.clone(), Math.abs(h2.x) > 1e-4 ? h2.y += 1 : h2.x += 1), h2.cross(l2), h2.normalize(), h2;
          }
          addLine(t2, e2, i2, r2, s2, n2) {
            t2[i2] = r2.x, t2[i2 + 1] = r2.y, t2[i2 + 2] = r2.z, e2[i2] = n2.r, e2[i2 + 1] = n2.g, e2[i2 + 2] = n2.b, t2[i2 + 3] = s2.x, t2[i2 + 4] = s2.y, t2[i2 + 5] = s2.z, e2[i2 + 3] = n2.r, e2[i2 + 4] = n2.g, e2[i2 + 5] = n2.b;
          }
          drawBondLines(t2, e2, i2) {
            if (t2.style.line) {
              var r2 = t2.style.line;
              if (!r2.hidden) {
                var a2, o2, l2, h2, c2 = r2.linewidth || GLModel.defaultlineWidth;
                i2[c2] || (i2[c2] = new n.Geometry());
                for (var d2 = i2[c2].updateGeoGroup(6 * t2.bonds.length), u2 = d2.vertexArray, f2 = d2.colorArray, p2 = 0; p2 < t2.bonds.length; p2++) {
                  var g2 = e2[t2.bonds[p2]];
                  if (g2.style.line && !(t2.index >= g2.index)) {
                    var m2 = new $.Vector3(t2.x, t2.y, t2.z), v2 = new $.Vector3(g2.x, g2.y, g2.z), _2 = m2.clone().add(v2).multiplyScalar(0.5), y2 = false, b2 = t2.clickable || t2.hoverable, x2 = g2.clickable || g2.hoverable;
                    (b2 || x2) && (b2 && (void 0 === t2.intersectionShape && (t2.intersectionShape = { sphere: [], cylinder: [], line: [], triangle: [] }), t2.intersectionShape.line.push(m2), t2.intersectionShape.line.push(_2)), x2 && (void 0 === g2.intersectionShape && (g2.intersectionShape = { sphere: [], cylinder: [], line: [], triangle: [] }), g2.intersectionShape.line.push(_2), g2.intersectionShape.line.push(v2)));
                    var w2 = (0, L.getColorFromStyle)(t2, t2.style.line), A2 = (0, L.getColorFromStyle)(g2, g2.style.line);
                    if (t2.bondStyles && t2.bondStyles[p2]) {
                      var C2 = t2.bondStyles[p2];
                      if (!C2.iswire) continue;
                      C2.singleBond && (y2 = true), void 0 !== C2.color1 && (w2 = s.CC.color(C2.color1)), void 0 !== C2.color2 && (A2 = s.CC.color(C2.color2));
                    }
                    var S4, M2, z2 = 3 * d2.vertices;
                    if (t2.bondOrder[p2] > 1 && t2.bondOrder[p2] < 4 && !y2) {
                      var T2 = this.getSideBondV(t2, g2, p2), E2 = v2.clone();
                      E2.sub(m2), 2 == t2.bondOrder[p2] ? (T2.multiplyScalar(0.1), (a2 = m2.clone()).add(T2), (o2 = m2.clone()).sub(T2), (l2 = a2.clone()).add(E2), (h2 = o2.clone()).add(E2), w2 == A2 ? (d2.vertices += 4, this.addLine(u2, f2, z2, a2, l2, w2), this.addLine(u2, f2, z2 + 6, o2, h2, w2)) : (d2.vertices += 8, E2.multiplyScalar(0.5), (S4 = a2.clone()).add(E2), (M2 = o2.clone()).add(E2), this.addLine(u2, f2, z2, a2, S4, w2), this.addLine(u2, f2, z2 + 6, S4, l2, A2), this.addLine(u2, f2, z2 + 12, o2, M2, w2), this.addLine(u2, f2, z2 + 18, M2, h2, A2))) : 3 == t2.bondOrder[p2] && (T2.multiplyScalar(0.1), (a2 = m2.clone()).add(T2), (o2 = m2.clone()).sub(T2), (l2 = a2.clone()).add(E2), (h2 = o2.clone()).add(E2), w2 == A2 ? (d2.vertices += 6, this.addLine(u2, f2, z2, m2, v2, w2), this.addLine(u2, f2, z2 + 6, a2, l2, w2), this.addLine(u2, f2, z2 + 12, o2, h2, w2)) : (d2.vertices += 12, E2.multiplyScalar(0.5), (S4 = a2.clone()).add(E2), (M2 = o2.clone()).add(E2), this.addLine(u2, f2, z2, m2, _2, w2), this.addLine(u2, f2, z2 + 6, _2, v2, A2), this.addLine(u2, f2, z2 + 12, a2, S4, w2), this.addLine(u2, f2, z2 + 18, S4, l2, A2), this.addLine(u2, f2, z2 + 24, o2, M2, w2), this.addLine(u2, f2, z2 + 30, M2, h2, A2)));
                    } else w2 == A2 ? (d2.vertices += 2, this.addLine(u2, f2, z2, m2, v2, w2)) : (d2.vertices += 4, this.addLine(u2, f2, z2, m2, _2, w2), this.addLine(u2, f2, z2 + 6, _2, v2, A2));
                  }
                }
              }
            }
          }
          drawAtomSphere(t2, e2) {
            if (t2.style.sphere) {
              var i2 = t2.style.sphere;
              if (!i2.hidden) {
                var r2 = (0, L.getColorFromStyle)(t2, i2), s2 = this.getRadiusFromStyle(t2, i2);
                if ((true === t2.clickable || t2.hoverable) && void 0 !== t2.intersectionShape) {
                  var n2 = new $.Vector3(t2.x, t2.y, t2.z);
                  t2.intersectionShape.sphere.push(new J.Sphere(n2, s2));
                }
                rt.drawSphere(e2, t2, s2, r2);
              }
            }
          }
          drawAtomClickSphere(t2) {
            if (t2.style.clicksphere) {
              var e2 = t2.style.clicksphere;
              if (!e2.hidden) {
                var i2 = this.getRadiusFromStyle(t2, e2);
                if ((true === t2.clickable || t2.hoverable) && void 0 !== t2.intersectionShape) {
                  var r2 = new $.Vector3(t2.x, t2.y, t2.z);
                  t2.intersectionShape.sphere.push(new J.Sphere(r2, i2));
                }
              }
            }
          }
          drawAtomInstanced(t2, e2) {
            if (t2.style.sphere) {
              var i2 = t2.style.sphere;
              if (!i2.hidden) {
                var r2 = this.getRadiusFromStyle(t2, i2), s2 = (0, L.getColorFromStyle)(t2, i2), n2 = e2.updateGeoGroup(1), a2 = n2.vertices, o2 = 3 * a2, l2 = n2.vertexArray, h2 = n2.colorArray, c2 = n2.radiusArray;
                if (l2[o2] = t2.x, l2[o2 + 1] = t2.y, l2[o2 + 2] = t2.z, h2[o2] = s2.r, h2[o2 + 1] = s2.g, h2[o2 + 2] = s2.b, c2[a2] = r2, (true === t2.clickable || t2.hoverable) && void 0 !== t2.intersectionShape) {
                  var d2 = new $.Vector3(t2.x, t2.y, t2.z);
                  t2.intersectionShape.sphere.push(new J.Sphere(d2, r2));
                }
                n2.vertices += 1;
              }
            }
          }
          drawSphereImposter(t2, e2, i2, r2) {
            var s2, n2 = t2.updateGeoGroup(4), a2 = n2.vertices, o2 = 3 * a2, l2 = n2.vertexArray, h2 = n2.colorArray;
            for (s2 = 0; s2 < 4; s2++) l2[o2 + 3 * s2] = e2.x, l2[o2 + 3 * s2 + 1] = e2.y, l2[o2 + 3 * s2 + 2] = e2.z;
            var c2 = n2.normalArray;
            for (s2 = 0; s2 < 4; s2++) h2[o2 + 3 * s2] = r2.r, h2[o2 + 3 * s2 + 1] = r2.g, h2[o2 + 3 * s2 + 2] = r2.b;
            c2[o2 + 0] = -i2, c2[o2 + 1] = i2, c2[o2 + 2] = 0, c2[o2 + 3] = -i2, c2[o2 + 4] = -i2, c2[o2 + 5] = 0, c2[o2 + 6] = i2, c2[o2 + 7] = -i2, c2[o2 + 8] = 0, c2[o2 + 9] = i2, c2[o2 + 10] = i2, c2[o2 + 11] = 0, n2.vertices += 4;
            var d2 = n2.faceArray, u2 = n2.faceidx;
            d2[u2 + 0] = a2, d2[u2 + 1] = a2 + 1, d2[u2 + 2] = a2 + 2, d2[u2 + 3] = a2 + 2, d2[u2 + 4] = a2 + 3, d2[u2 + 5] = a2, n2.faceidx += 6;
          }
          drawAtomImposter(t2, e2) {
            if (t2.style.sphere) {
              var i2 = t2.style.sphere;
              if (!i2.hidden) {
                var r2 = this.getRadiusFromStyle(t2, i2), s2 = (0, L.getColorFromStyle)(t2, i2);
                if ((true === t2.clickable || t2.hoverable) && void 0 !== t2.intersectionShape) {
                  var n2 = new $.Vector3(t2.x, t2.y, t2.z);
                  t2.intersectionShape.sphere.push(new J.Sphere(n2, r2));
                }
                this.drawSphereImposter(e2, t2, r2, s2);
              }
            }
          }
          calculateDashes(t2, e2, i2, r2, s2) {
            var n2 = Math.sqrt(Math.pow(t2.x - e2.x, 2) + Math.pow(t2.y - e2.y, 2) + Math.pow(t2.z - e2.z, 2));
            i2 = Math.max(i2, 0), s2 = Math.max(s2, 0) + 2 * i2, (r2 = Math.max(r2, 1e-3)) + s2 > n2 && (r2 = n2, s2 = 0);
            var a2, o2 = Math.floor((n2 - r2) / (r2 + s2)) + 1;
            s2 = (n2 - o2 * r2) / o2;
            for (var l2 = new $.Vector3(t2.x, t2.y, t2.z), h2 = new $.Vector3((e2.x - t2.x) / (n2 / s2), (e2.y - t2.y) / (n2 / s2), (e2.z - t2.z) / (n2 / s2)), c2 = new $.Vector3((e2.x - t2.x) / (n2 / r2), (e2.y - t2.y) / (n2 / r2), (e2.z - t2.z) / (n2 / r2)), d2 = [], u2 = 0; u2 < o2; u2++) a2 = new $.Vector3(l2.x + c2.x, l2.y + c2.y, l2.z + c2.z), d2.push({ from: l2, to: a2 }), l2 = new $.Vector3(a2.x + h2.x, a2.y + h2.y, a2.z + h2.z);
            return d2;
          }
          static drawStickImposter(t2, e2, i2, r2, s2, n2 = 0, a2 = 0) {
            for (var o2, l2 = t2.updateGeoGroup(4), h2 = l2.vertices, c2 = 3 * h2, d2 = l2.vertexArray, u2 = l2.colorArray, f2 = l2.radiusArray, p2 = l2.normalArray, g2 = s2.r, m2 = s2.g, v2 = s2.b, _2 = c2, y2 = 0; y2 < 4; y2++) d2[_2] = e2.x, p2[_2] = i2.x, u2[_2] = g2, d2[++_2] = e2.y, p2[_2] = i2.y, u2[_2] = m2, d2[++_2] = e2.z, p2[_2] = i2.z, u2[_2] = y2 < 2 ? v2 : (o2 = void 0, 0 == (o2 = -v2) && (o2 = -1e-4), o2), _2++;
            l2.vertices += 4, f2[h2] = -r2, f2[h2 + 1] = r2, f2[h2 + 2] = -r2, f2[h2 + 3] = r2;
            var b2 = l2.faceArray, x2 = l2.faceidx;
            b2[x2 + 0] = h2, b2[x2 + 1] = h2 + 1, b2[x2 + 2] = h2 + 2, b2[x2 + 3] = h2 + 2, b2[x2 + 4] = h2 + 3, b2[x2 + 5] = h2, l2.faceidx += 6;
          }
          drawBondSticks(t2, e2, i2) {
            var r2, n2;
            if (t2.style.stick) {
              var a2 = t2.style.stick;
              if (!a2.hidden) {
                var o2, l2, h2, c2, d2, u2, f2, p2, g2, m2, v2, _2, y2, b2, x2 = a2.radius || this.defaultStickRadius, w2 = a2.doubleBondScaling || 0.4, A2 = a2.tripleBondScaling || 0.25, C2 = (null === (r2 = a2.dashedBondConfig) || void 0 === r2 ? void 0 : r2.dashLength) || 0.1, S4 = (null === (n2 = a2.dashedBondConfig) || void 0 === n2 ? void 0 : n2.gapLength) || 0.25, M2 = x2, z2 = a2.singleBonds || false, T2 = a2.dashedBonds || false, E2 = 0, F2 = 0, I2 = (0, L.getColorFromStyle)(t2, a2);
                !t2.capDrawn && t2.bonds.length < 4 && (E2 = 2);
                var O2 = (t3) => {
                  var e3 = i2.imposter ? GLModel.drawStickImposter : rt.drawCylinder;
                  return !T2 && t3 >= 1 ? e3 : (t4, i3, r3, s2, n3, a3 = 0, o3 = 0, l3 = 0.1, h3 = 0.25) => {
                    this.calculateDashes(i3, r3, s2, l3, h3).forEach(((i4) => {
                      e3(t4, i4.from, i4.to, s2, n3, a3, o3);
                    }));
                  };
                };
                for (h2 = 0; h2 < t2.bonds.length; h2++) {
                  var D2 = O2(t2.bondOrder[h2]), k2 = e2[t2.bonds[h2]];
                  if (_2 = y2 = b2 = null, t2.index < k2.index) {
                    var R2 = k2.style;
                    if (!R2.stick || R2.stick.hidden) continue;
                    var P2 = (0, L.getColorFromStyle)(k2, R2.stick);
                    if (M2 = x2, c2 = z2, t2.bondStyles && t2.bondStyles[h2]) {
                      if ((d2 = t2.bondStyles[h2]).iswire) continue;
                      d2.radius && (M2 = d2.radius), d2.singleBond && (c2 = true), void 0 !== d2.color1 && (I2 = s.CC.color(d2.color1)), void 0 !== d2.color2 && (P2 = s.CC.color(d2.color2));
                    }
                    var U2 = new $.Vector3(t2.x, t2.y, t2.z), B2 = new $.Vector3(k2.x, k2.y, k2.z);
                    if (t2.bondOrder[h2] <= 1 || c2 || t2.bondOrder[h2] > 3) {
                      if (t2.bondOrder[h2] < 1 && (M2 *= t2.bondOrder[h2]), !k2.capDrawn && k2.bonds.length < 4 && (F2 = 2), I2 != P2 ? (_2 = new $.Vector3().addVectors(U2, B2).multiplyScalar(0.5), D2(i2, U2, _2, M2, I2, E2, 0, C2, S4), D2(i2, _2, B2, M2, P2, 0, F2, C2, S4)) : D2(i2, U2, B2, M2, I2, E2, F2, C2, S4), o2 = t2.clickable || t2.hoverable, l2 = k2.clickable || k2.hoverable, o2 || l2) {
                        if (_2 || (_2 = new $.Vector3().addVectors(U2, B2).multiplyScalar(0.5)), o2) {
                          var N2 = new J.Cylinder(U2, _2, M2), G2 = new J.Sphere(U2, M2);
                          t2.intersectionShape.cylinder.push(N2), t2.intersectionShape.sphere.push(G2);
                        }
                        if (l2) {
                          var V2 = new J.Cylinder(B2, _2, M2), j2 = new J.Sphere(B2, M2);
                          k2.intersectionShape.cylinder.push(V2), k2.intersectionShape.sphere.push(j2);
                        }
                      }
                    } else if (t2.bondOrder[h2] > 1) {
                      var H2 = 0, W2 = 0;
                      M2 != x2 && (H2 = 2, W2 = 2);
                      var q2, Y2, Z2, X2, K2, Q2 = B2.clone(), tt2 = null;
                      Q2.sub(U2), tt2 = this.getSideBondV(t2, k2, h2), 2 == t2.bondOrder[h2] ? (q2 = M2 * w2, tt2.multiplyScalar(1.5 * q2), (Y2 = U2.clone()).add(tt2), (Z2 = U2.clone()).sub(tt2), (X2 = Y2.clone()).add(Q2), (K2 = Z2.clone()).add(Q2), I2 != P2 ? (_2 = new $.Vector3().addVectors(Y2, X2).multiplyScalar(0.5), y2 = new $.Vector3().addVectors(Z2, K2).multiplyScalar(0.5), D2(i2, Y2, _2, q2, I2, H2, 0), D2(i2, _2, X2, q2, P2, 0, W2), D2(i2, Z2, y2, q2, I2, H2, 0), D2(i2, y2, K2, q2, P2, 0, W2)) : (D2(i2, Y2, X2, q2, I2, H2, W2), D2(i2, Z2, K2, q2, I2, H2, W2)), o2 = t2.clickable || t2.hoverable, l2 = k2.clickable || k2.hoverable, (o2 || l2) && (_2 || (_2 = new $.Vector3().addVectors(Y2, X2).multiplyScalar(0.5)), y2 || (y2 = new $.Vector3().addVectors(Z2, K2).multiplyScalar(0.5)), o2 && (u2 = new J.Cylinder(Y2, _2, q2), f2 = new J.Cylinder(Z2, y2, q2), t2.intersectionShape.cylinder.push(u2), t2.intersectionShape.cylinder.push(f2)), l2 && (g2 = new J.Cylinder(X2, _2, q2), m2 = new J.Cylinder(K2, y2, q2), k2.intersectionShape.cylinder.push(g2), k2.intersectionShape.cylinder.push(m2)))) : 3 == t2.bondOrder[h2] && (q2 = M2 * A2, tt2.cross(Q2), tt2.normalize(), tt2.multiplyScalar(3 * q2), (Y2 = U2.clone()).add(tt2), (Z2 = U2.clone()).sub(tt2), (X2 = Y2.clone()).add(Q2), (K2 = Z2.clone()).add(Q2), I2 != P2 ? (_2 = new $.Vector3().addVectors(Y2, X2).multiplyScalar(0.5), y2 = new $.Vector3().addVectors(Z2, K2).multiplyScalar(0.5), b2 = new $.Vector3().addVectors(U2, B2).multiplyScalar(0.5), D2(i2, Y2, _2, q2, I2, H2, 0), D2(i2, _2, X2, q2, P2, 0, W2), D2(i2, U2, b2, q2, I2, E2, 0), D2(i2, b2, B2, q2, P2, 0, F2), D2(i2, Z2, y2, q2, I2, H2, 0), D2(i2, y2, K2, q2, P2, 0, W2)) : (D2(i2, Y2, X2, q2, I2, H2, W2), D2(i2, U2, B2, q2, I2, E2, F2), D2(i2, Z2, K2, q2, I2, H2, W2)), o2 = t2.clickable || t2.hoverable, l2 = k2.clickable || k2.hoverable, (o2 || l2) && (_2 || (_2 = new $.Vector3().addVectors(Y2, X2).multiplyScalar(0.5)), y2 || (y2 = new $.Vector3().addVectors(Z2, K2).multiplyScalar(0.5)), b2 || (b2 = new $.Vector3().addVectors(U2, B2).multiplyScalar(0.5)), o2 && (u2 = new J.Cylinder(Y2.clone(), _2.clone(), q2), f2 = new J.Cylinder(Z2.clone(), y2.clone(), q2), p2 = new J.Cylinder(U2.clone(), b2.clone(), q2), t2.intersectionShape.cylinder.push(u2), t2.intersectionShape.cylinder.push(f2), t2.intersectionShape.cylinder.push(p2)), l2 && (g2 = new J.Cylinder(X2.clone(), _2.clone(), q2), m2 = new J.Cylinder(K2.clone(), y2.clone(), q2), v2 = new J.Cylinder(B2.clone(), b2.clone(), q2), k2.intersectionShape.cylinder.push(g2), k2.intersectionShape.cylinder.push(m2), k2.intersectionShape.cylinder.push(v2))));
                    }
                  }
                }
                var et2 = false, it2 = 0, st2 = false;
                for (h2 = 0; h2 < t2.bonds.length; h2++) c2 = z2, t2.bondStyles && t2.bondStyles[h2] && ((d2 = t2.bondStyles[h2]).singleBond && (c2 = true), d2.radius && d2.radius != x2 && (st2 = true)), (c2 || 1 == t2.bondOrder[h2]) && it2++;
                st2 ? it2 > 0 && (et2 = true) : 0 == it2 && (t2.bonds.length > 0 || a2.showNonBonded) && (et2 = true), et2 && (M2 = x2, i2.imposter ? this.drawSphereImposter(i2.sphereGeometry, t2, M2, I2) : rt.drawSphere(i2, t2, M2, I2));
              }
            }
          }
          createMolObj(t2, e2) {
            e2 = e2 || {};
            var i2, r2, a2, o2, l2 = new n.Object3D(), h2 = [], c2 = {}, d2 = {}, u2 = this.drawAtomSphere, f2 = null, p2 = null;
            e2.supportsImposters ? (u2 = this.drawAtomImposter, (f2 = new n.Geometry(true)).imposter = true, (p2 = new n.Geometry(true, true)).imposter = true, p2.sphereGeometry = new n.Geometry(true), p2.sphereGeometry.imposter = true, p2.drawnCaps = {}) : e2.supportsAIA ? (u2 = this.drawAtomInstanced, (f2 = new n.Geometry(false, true, true)).instanced = true, p2 = new n.Geometry(true)) : (f2 = new n.Geometry(true), p2 = new n.Geometry(true));
            var g2, m2 = {}, v2 = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
            for (i2 = 0, a2 = t2.length; i2 < a2; i2++) {
              var _2 = t2[i2];
              if (_2 && _2.style) {
                for (r2 in (_2.clickable || _2.hoverable) && void 0 === _2.intersectionShape && (_2.intersectionShape = { sphere: [], cylinder: [], line: [], triangle: [] }), o2 = { line: void 0, cross: void 0, stick: void 0, sphere: void 0 }) _2.style[r2] ? _2.style[r2].opacity ? o2[r2] = parseFloat(_2.style[r2].opacity) : o2[r2] = 1 : o2[r2] = void 0, m2[r2] ? null != o2[r2] && m2[r2] != o2[r2] && (console.log("Warning: " + r2 + " opacity is ambiguous"), m2[r2] = 1) : m2[r2] = o2[r2];
                u2.call(this, _2, f2), this.drawAtomClickSphere(_2), this.drawAtomCross(_2, d2), this.drawBondLines(_2, t2, c2), this.drawBondSticks(_2, t2, p2), void 0 === _2.style.cartoon || _2.style.cartoon.hidden || ("spectrum" !== _2.style.cartoon.color || "number" != typeof _2.resi || _2.hetflag || (_2.resi < v2[0] && (v2[0] = _2.resi), _2.resi > v2[1] && (v2[1] = _2.resi)), h2.push(_2));
              }
            }
            if (h2.length > 0 && xt(l2, h2, v2, this.defaultCartoonQuality), f2 && f2.vertices > 0) {
              f2.initTypedArrays();
              var y2 = null, b2 = null;
              f2.imposter ? y2 = new n.SphereImposterMaterial({ ambient: 0, vertexColors: true, reflectivity: 0 }) : f2.instanced ? (b2 = new n.Geometry(true), rt.drawSphere(b2, { x: 0, y: 0, z: 0 }, 1, new s.Color(0.5, 0.5, 0.5)), b2.initTypedArrays(), y2 = new n.InstancedMaterial({ sphereMaterial: new n.MeshLambertMaterial({ ambient: 0, vertexColors: true, reflectivity: 0 }), sphere: b2 })) : y2 = new n.MeshLambertMaterial({ ambient: 0, vertexColors: true, reflectivity: 0 }), m2.sphere < 1 && m2.sphere >= 0 && (y2.transparent = true, y2.opacity = m2.sphere), b2 = new n.Mesh(f2, y2), l2.add(b2);
            }
            if (p2.vertices > 0) {
              var x2 = null, w2 = null, A2 = p2.sphereGeometry;
              A2 && void 0 !== A2.vertices && 0 != A2.vertices || (A2 = null), p2.initTypedArrays(), A2 && A2.initTypedArrays();
              var C2 = { ambient: 0, vertexColors: true, reflectivity: 0 };
              p2.imposter ? (x2 = new n.StickImposterMaterial(C2), w2 = new n.SphereImposterMaterial(C2)) : (x2 = new n.MeshLambertMaterial(C2), w2 = new n.MeshLambertMaterial(C2), x2.wireframe && (p2.setUpWireframe(), A2 && A2.setUpWireframe())), m2.stick < 1 && m2.stick >= 0 && (x2.transparent = true, x2.opacity = m2.stick, w2.transparent = true, w2.opacity = m2.stick);
              var S4 = new n.Mesh(p2, x2);
              if (l2.add(S4), A2) {
                var M2 = new n.Mesh(A2, w2);
                l2.add(M2);
              }
            }
            for (i2 in c2) if (c2.hasOwnProperty(i2)) {
              g2 = i2;
              var z2 = new n.LineBasicMaterial({ linewidth: g2, vertexColors: true });
              m2.line < 1 && m2.line >= 0 && (z2.transparent = true, z2.opacity = m2.line), c2[i2].initTypedArrays();
              var T2 = new n.Line(c2[i2], z2, n.LineStyle.LinePieces);
              l2.add(T2);
            }
            for (i2 in d2) if (d2.hasOwnProperty(i2)) {
              g2 = i2;
              var E2 = new n.LineBasicMaterial({ linewidth: g2, vertexColors: true });
              m2.cross < 1 && m2.cross >= 0 && (E2.transparent = true, E2.opacity = m2.cross), d2[i2].initTypedArrays();
              var L2 = new n.Line(d2[i2], E2, n.LineStyle.LinePieces);
              l2.add(L2);
            }
            if (this.dontDuplicateAtoms && this.modelData.symmetries && this.modelData.symmetries.length > 0) {
              var F2, I2 = new n.Object3D();
              for (F2 = 0; F2 < this.modelData.symmetries.length; F2++) {
                var O2 = new n.Object3D();
                (O2 = l2.clone()).matrix.copy(this.modelData.symmetries[F2]), O2.matrixAutoUpdate = false, I2.add(O2);
              }
              return I2;
            }
            return l2;
          }
          getInternalState() {
            return { atoms: this.atoms, frames: this.frames };
          }
          setInternalState(t2) {
            this.atoms = t2.atoms, this.frames = t2.frames, this.molObj = null;
          }
          getCrystData() {
            if (this.modelData.cryst) {
              if (!this.modelData.cryst.matrix) {
                const t2 = this.modelData.cryst;
                this.modelData.cryst.matrix = (0, $.conversionMatrix3)(t2.a, t2.b, t2.c, t2.alpha, t2.beta, t2.gamma);
              }
              return this.modelData.cryst;
            }
            return null;
          }
          setCrystData(t2, e2, i2, r2, s2, n2) {
            t2 = t2 || 1, e2 = e2 || 1, i2 = i2 || 1, r2 = r2 || 90, s2 = s2 || 90, n2 = n2 || 90;
            const a2 = (0, $.conversionMatrix3)(t2, e2, i2, r2, s2, n2);
            this.modelData.cryst = { a: t2, b: e2, c: i2, alpha: r2, beta: s2, gamma: n2, matrix: a2 };
          }
          setCrystMatrix(t2) {
            t2 = t2 || new $.Matrix3(1, 0, 0, 0, 1, 0, 0, 0, 1), this.modelData.cryst = { matrix: t2 };
          }
          getSymmetries() {
            return void 0 === this.modelData.symmetries && (this.modelData.symmetries = [this.idMatrix]), this.modelData.symmetries;
          }
          setSymmetries(t2) {
            this.modelData.symmetries = void 0 === t2 ? [this.idMatrix] : t2;
          }
          getID() {
            return this.id;
          }
          getNumFrames() {
            return null != this.frames.numFrames ? this.frames.numFrames : this.frames.length;
          }
          adjustCoord(t2, e2, i2, r2) {
            var s2 = e2 - t2;
            return s2 < -i2 ? e2 + r2 : s2 > i2 ? e2 - r2 : e2;
          }
          adjustCoordinatesToBox() {
            if (this.box && this.atomdfs) for (var t2 = this.box[0], e2 = this.box[1], i2 = this.box[2], r2 = 0.9 * t2, s2 = 0.9 * e2, n2 = 0.9 * i2, a2 = 0; a2 < this.atomdfs.length; a2++) for (var o2 = this.atomdfs[a2], l2 = 1; l2 < o2.length; l2++) {
              var h2 = this.atoms[o2[l2][0]], c2 = this.atoms[o2[l2][1]];
              h2.x = this.adjustCoord(c2.x, h2.x, r2, t2), h2.y = this.adjustCoord(c2.y, h2.y, s2, e2), h2.z = this.adjustCoord(c2.z, h2.z, n2, i2);
            }
          }
          setFrame(t2, e2) {
            var i2 = this.getNumFrames();
            let r2 = this;
            return new Promise((function(s2, n2) {
              if (0 == i2 && s2(), (t2 < 0 || t2 >= i2) && (t2 = i2 - 1), null != r2.frames.url) {
                var a2 = r2.frames.url;
                (0, L.getbin)(a2 + "/traj/frame/" + t2 + "/" + r2.frames.path, void 0, "POST", void 0).then((function(t3) {
                  for (var e3 = new Float32Array(t3, 44), i3 = 0, n3 = 0; n3 < r2.atoms.length; n3++) r2.atoms[n3].x = e3[i3++], r2.atoms[n3].y = e3[i3++], r2.atoms[n3].z = e3[i3++];
                  r2.box && r2.atomdfs && r2.adjustCoordinatesToBox(), s2();
                })).catch(n2);
              } else r2.atoms = r2.frames[t2], s2();
              r2.molObj = null, r2.modelDatas && t2 < r2.modelDatas.length && (r2.modelData = r2.modelDatas[t2], r2.unitCellObjects && e2 && (e2.removeUnitCell(r2), e2.addUnitCell(r2)));
            }));
          }
          addFrame(t2) {
            this.frames.push(t2);
          }
          vibrate(t2 = 10, e2 = 1, i2 = false, r2, s2) {
            var n2 = 0, a2 = t2;
            i2 && (n2 = -t2, a2 = t2), void 0 !== this.frames && void 0 !== this.frames.origIndex ? this.setFrame(this.frames.origIndex) : this.setFrame(0), n2 < a2 && (this.frames = []), i2 && (this.frames.origIndex = t2);
            for (var o2 = n2; o2 < a2; o2++) {
              var l2 = [], h2 = this.frames.length;
              if (0 != o2 || s2) {
                for (var c2 = 0; c2 < this.atoms.length; c2++) {
                  var d2 = (0, L.getAtomProperty)(this.atoms[c2], "dx"), u2 = (0, L.getAtomProperty)(this.atoms[c2], "dy"), f2 = (0, L.getAtomProperty)(this.atoms[c2], "dz"), p2 = new $.Vector3(d2, u2, f2), g2 = new $.Vector3(this.atoms[c2].x, this.atoms[c2].y, this.atoms[c2].z), m2 = o2 * e2 / t2;
                  p2.multiplyScalar(m2), g2.add(p2);
                  var v2 = {};
                  for (var _2 in this.atoms[c2]) v2[_2] = this.atoms[c2][_2];
                  if (v2.x = g2.x, v2.y = g2.y, v2.z = g2.z, l2.push(v2), r2 && s2) {
                    var y2 = (0, L.extend)({}, s2), b2 = new $.Vector3(d2, u2, f2);
                    if (b2.multiplyScalar(e2), b2.add(g2), y2.start = g2, y2.end = b2, y2.frame = h2, !y2.color) {
                      var x2 = v2.style.sphere;
                      x2 || (x2 = v2.style.stick), x2 || (x2 = v2.style.line), y2.color = (0, L.getColorFromStyle)(v2, x2);
                    }
                    r2.addArrow(y2);
                  }
                }
                this.frames.push(l2);
              } else this.frames.push(this.atoms);
            }
          }
          setAtomDefaults(t2) {
            for (let e2 = 0; e2 < t2.length; e2++) {
              let i2 = t2[e2];
              i2 && (i2.style = i2.style || (0, L.deepCopy)(GLModel.defaultAtomStyle), i2.color = i2.color || this.ElementColors[i2.elem] || this.defaultColor, i2.model = this.id, (i2.clickable || i2.hoverable) && (i2.intersectionShape = { sphere: [], cylinder: [], line: [], triangle: [] }));
            }
          }
          addMolData(t2, e2, i2 = {}) {
            var r2 = GLModel.parseMolData(t2, e2, i2);
            this.dontDuplicateAtoms = !i2.duplicateAssemblyAtoms;
            var s2 = r2.modelData;
            if (s2 && (Array.isArray(s2) ? (this.modelData = s2[0], i2.frames && (this.modelDatas = s2)) : this.modelData = s2), r2.box ? this.box = r2.box : this.box = null, 0 == this.frames.length) {
              for (let t3 = 0; t3 < r2.length; t3++) 0 != r2[t3].length && this.frames.push(r2[t3]);
              this.frames[0] && (this.atoms = this.frames[0]);
            } else if (i2.frames) for (let t3 = 0; t3 < r2.length; t3++) this.frames.push(r2[t3]);
            else for (var n2 = 0; n2 < r2.length; n2++) this.addAtoms(r2[n2]);
            for (let t3 = 0; t3 < this.frames.length; t3++) this.setAtomDefaults(this.frames[t3]);
            i2.vibrate && i2.vibrate.frames && i2.vibrate.amplitude && this.vibrate(i2.vibrate.frames, i2.vibrate.amplitude), i2.style && this.setStyle({}, i2.style);
          }
          setDontDuplicateAtoms(t2) {
            this.dontDuplicateAtoms = t2;
          }
          setModelData(t2) {
            this.modelData = t2;
          }
          propertyMatches(t2, e2) {
            if (t2 == e2) return true;
            if ("string" == typeof e2 && "number" == typeof t2) {
              var i2 = e2.match(/(-?\d+)\s*-\s*(-?\d+)/);
              if (i2) {
                var r2 = parseInt(i2[1]), s2 = parseInt(i2[2]);
                if (i2 && t2 >= r2 && t2 <= s2) return true;
              }
            }
            return false;
          }
          static deepCopyAndCache(t2, e2) {
            if ("object" != typeof t2 || null == t2) return t2;
            if (t2.__cache_created) return t2;
            const i2 = {};
            for (const r2 in t2) {
              const s2 = t2[r2];
              if (Array.isArray(s2)) {
                i2[r2] = [];
                for (let t3 = 0; t3 < s2.length; t3++) i2[r2].push(GLModel.deepCopyAndCache(s2[t3], e2));
              } else i2[r2] = "object" == typeof s2 && "properties" != r2 && "model" != r2 ? GLModel.deepCopyAndCache(s2, e2) : s2;
              if ("and" == r2 || "or" == r2) {
                const t3 = [];
                for (const s3 of i2[r2]) {
                  const i3 = /* @__PURE__ */ new Set();
                  for (const t4 of e2.selectedAtoms(s3)) i3.add(t4.index);
                  t3.push(i3);
                }
                if ("and" == r2) {
                  const e3 = function(t4, e4) {
                    const i3 = /* @__PURE__ */ new Set();
                    for (const r3 of e4) t4.has(r3) && i3.add(r3);
                    return i3;
                  };
                  let s3 = new Set(t3[0]);
                  for (const i3 of t3.splice(1)) s3 = e3(s3, i3);
                  i2[r2].__cached_results = s3;
                } else if ("or" == r2) {
                  const e3 = /* @__PURE__ */ new Set();
                  for (const i3 of t3) for (const t4 of i3) e3.add(t4);
                  i2[r2].__cached_results = e3;
                }
              }
            }
            return i2.__cache_created = true, i2;
          }
          atomIsSelected(t2, e2) {
            if (void 0 === e2) return true;
            var i2 = !!e2.invert, r2 = true;
            for (var s2 in e2) if ("and" == s2 || "or" == s2 || "not" == s2) {
              if ("not" == s2) {
                if (this.atomIsSelected(t2, e2[s2])) {
                  r2 = false;
                  break;
                }
              } else if (void 0 === e2[s2].__cached_results && (e2 = GLModel.deepCopyAndCache(e2, this)), !(r2 = e2[s2].__cached_results.has(t2.index))) break;
            } else if ("predicate" === s2) {
              if (!e2.predicate(t2)) {
                r2 = false;
                break;
              }
            } else if ("properties" == s2 && t2[s2]) {
              for (var n2 in e2.properties) if (!n2.startsWith("__cache")) {
                if (void 0 === t2.properties[n2]) {
                  r2 = false;
                  break;
                }
                if (t2.properties[n2] != e2.properties[n2]) {
                  r2 = false;
                  break;
                }
              }
            } else if (e2.hasOwnProperty(s2) && !GLModel.ignoredKeys.has(s2) && !s2.startsWith("__cache")) {
              if (void 0 === t2[s2]) {
                r2 = false;
                break;
              }
              var a2 = false;
              if ("bonds" === s2) {
                if (e2[s2] != t2.bonds.length) {
                  r2 = false;
                  break;
                }
              } else if (Array.isArray(e2[s2])) {
                var o2 = e2[s2], l2 = t2[s2];
                for (let t3 = 0; t3 < o2.length; t3++) if (this.propertyMatches(l2, o2[t3])) {
                  a2 = true;
                  break;
                }
                if (!a2) {
                  r2 = false;
                  break;
                }
              } else {
                let i3 = e2[s2];
                if (!this.propertyMatches(t2[s2], i3)) {
                  r2 = false;
                  break;
                }
              }
            }
            return i2 ? !r2 : r2;
          }
          static squaredDistance(t2, e2) {
            var i2 = e2.x - t2.x, r2 = e2.y - t2.y, s2 = e2.z - t2.z;
            return i2 * i2 + r2 * r2 + s2 * s2;
          }
          expandAtomList(t2, e2) {
            if (e2 <= 0) return t2;
            for (var i2 = (0, L.getExtent)(t2, void 0), r2 = [[], [], []], s2 = 0; s2 < 3; s2++) r2[0][s2] = i2[0][s2] - e2, r2[1][s2] = i2[1][s2] + e2, r2[2][s2] = i2[2][s2];
            var n2 = [];
            for (let t3 = 0; t3 < this.atoms.length; t3++) {
              var a2 = this.atoms[t3].x, o2 = this.atoms[t3].y, l2 = this.atoms[t3].z;
              a2 >= r2[0][0] && a2 <= r2[1][0] && o2 >= r2[0][1] && o2 <= r2[1][1] && l2 >= r2[0][2] && l2 <= r2[1][2] && (a2 >= i2[0][0] && a2 <= i2[1][0] && o2 >= i2[0][1] && o2 <= i2[1][1] && l2 >= i2[0][2] && l2 <= i2[1][2] || n2.push(this.atoms[t3]));
            }
            return n2;
          }
          static getFloat(t2) {
            return "number" == typeof t2 ? t2 : parseFloat(t2);
          }
          selectedAtoms(t2, e2) {
            var i2 = [];
            t2 = GLModel.deepCopyAndCache(t2 || {}, this), e2 || (e2 = this.atoms);
            for (var r2 = e2.length, s2 = 0; s2 < r2; s2++) {
              var n2 = e2[s2];
              n2 && this.atomIsSelected(n2, t2) && i2.push(n2);
            }
            if (t2.hasOwnProperty("expand")) {
              const e3 = GLModel.getFloat(t2.expand);
              let r3 = this.expandAtomList(i2, e3), s3 = i2.length;
              const n3 = e3 * e3;
              for (let t3 = 0; t3 < r3.length; t3++) for (let e4 = 0; e4 < s3; e4++) {
                var a2 = GLModel.squaredDistance(r3[t3], i2[e4]);
                a2 < n3 && a2 > 0 && i2.push(r3[t3]);
              }
            }
            if (t2.hasOwnProperty("within") && t2.within.hasOwnProperty("sel") && t2.within.hasOwnProperty("distance")) {
              var o2 = this.selectedAtoms(t2.within.sel, this.atoms), l2 = {};
              const e3 = GLModel.getFloat(t2.within.distance), r3 = e3 * e3;
              for (let t3 = 0; t3 < o2.length; t3++) for (let e4 = 0; e4 < i2.length; e4++) {
                let s3 = GLModel.squaredDistance(o2[t3], i2[e4]);
                s3 < r3 && s3 > 0 && (l2[e4] = 1);
              }
              var h2 = [];
              if (t2.within.invert) for (let t3 = 0; t3 < i2.length; t3++) l2[t3] || h2.push(i2[t3]);
              else for (let t3 in l2) h2.push(i2[t3]);
              i2 = h2;
            }
            if (t2.hasOwnProperty("byres")) {
              var c2 = {}, d2 = [], u2 = [];
              for (let t3 = 0; t3 < i2.length; t3++) {
                let e3 = i2[t3];
                var f2 = e3.chain, p2 = e3.resi;
                if (void 0 === c2[f2] && (c2[f2] = {}), e3.hasOwnProperty("resi") && void 0 === c2[f2][p2]) {
                  for (c2[f2][p2] = true, u2.push(e3); u2.length > 0; ) if (e3 = u2.pop(), f2 = e3.chain, p2 = e3.resi, void 0 === d2[e3.index]) {
                    d2[e3.index] = true;
                    for (var g2 = 0; g2 < e3.bonds.length; g2++) {
                      var m2 = this.atoms[e3.bonds[g2]];
                      void 0 === d2[m2.index] && m2.hasOwnProperty("resi") && m2.chain == f2 && m2.resi == p2 && (u2.push(m2), i2.push(m2));
                    }
                  }
                }
              }
            }
            return i2;
          }
          addAtoms(t2) {
            this.molObj = null;
            var e2, i2 = this.atoms.length, r2 = [];
            for (e2 = 0; e2 < t2.length; e2++) void 0 === t2[e2].index && (t2[e2].index = e2), void 0 === t2[e2].serial && (t2[e2].serial = e2), r2[t2[e2].index] = i2 + e2;
            for (e2 = 0; e2 < t2.length; e2++) {
              var s2 = t2[e2], n2 = r2[s2.index], a2 = (0, L.extend)({}, s2);
              a2.index = n2, a2.bonds = [], a2.bondOrder = [], a2.model = this.id, a2.style = a2.style || (0, L.deepCopy)(GLModel.defaultAtomStyle), void 0 === a2.color && (a2.color = this.ElementColors[a2.elem] || this.defaultColor);
              for (var o2 = s2.bonds ? s2.bonds.length : 0, l2 = 0; l2 < o2; l2++) {
                var h2 = r2[s2.bonds[l2]];
                void 0 !== h2 && (a2.bonds.push(h2), a2.bondOrder.push(s2.bondOrder ? s2.bondOrder[l2] : 1));
              }
              this.atoms.push(a2);
            }
          }
          assignBonds() {
            (0, u.assignBonds)(this.atoms, { assignBonds: true });
          }
          removeAtoms(t2) {
            this.molObj = null;
            var e2, i2 = [];
            for (e2 = 0; e2 < t2.length; e2++) i2[t2[e2].index] = true;
            var r2 = [];
            for (e2 = 0; e2 < this.atoms.length; e2++) {
              var s2 = this.atoms[e2];
              i2[s2.index] || r2.push(s2);
            }
            this.atoms = [], this.addAtoms(r2);
          }
          setStyle(t2, e2, i2) {
            void 0 === e2 && void 0 === i2 && (e2 = t2, t2 = {}), "string" == typeof e2 && (e2 = (0, L.specStringToObject)(e2));
            var r2 = false, s2 = this, n2 = function(n3) {
              var a3 = s2.selectedAtoms(t2, n3);
              for (let t3 = 0; t3 < n3.length; t3++) n3[t3] && (n3[t3].capDrawn = false);
              for (let t3 = 0; t3 < a3.length; t3++) {
                r2 = true, (a3[t3].clickable || a3[t3].hoverable) && (a3[t3].intersectionShape = { sphere: [], cylinder: [], line: [], triangle: [] }), i2 || (a3[t3].style = {});
                for (let i3 in e2) e2.hasOwnProperty(i3) && (a3[t3].style[i3] = a3[t3].style[i3] || {}, Object.assign(a3[t3].style[i3], e2[i3]));
              }
            };
            if (void 0 !== t2.frame && t2.frame < this.frames.length) {
              let e3 = t2.frame;
              e3 < 0 && (e3 = this.frames.length + e3), n2(this.frames[e3]);
            } else {
              n2(this.atoms);
              for (var a2 = 0; a2 < this.frames.length; a2++) this.frames[a2] !== this.atoms && n2(this.frames[a2]);
            }
            r2 && (this.molObj = null);
          }
          setClickable(t2, e2, i2) {
            if (e2 = !!e2, null !== (i2 = (0, L.makeFunction)(i2))) {
              var r2 = this.selectedAtoms(t2, this.atoms), s2 = r2.length;
              for (let t3 = 0; t3 < s2; t3++) r2[t3].intersectionShape = { sphere: [], cylinder: [], line: [], triangle: [] }, r2[t3].clickable = e2, i2 && (r2[t3].callback = i2);
              s2 > 0 && (this.molObj = null);
            } else console.log("Callback is not a function");
          }
          setHoverable(t2, e2, i2, r2) {
            if (e2 = !!e2, i2 = (0, L.makeFunction)(i2), r2 = (0, L.makeFunction)(r2), null !== i2) if (null !== r2) {
              var s2 = this.selectedAtoms(t2, this.atoms), n2 = s2.length;
              for (let t3 = 0; t3 < n2; t3++) s2[t3].intersectionShape = { sphere: [], cylinder: [], line: [], triangle: [] }, s2[t3].hoverable = e2, i2 && (s2[t3].hover_callback = i2), r2 && (s2[t3].unhover_callback = r2);
              n2 > 0 && (this.molObj = null);
            } else console.log("Unhover_callback is not a function");
            else console.log("Hover_callback is not a function");
          }
          enableContextMenu(t2, e2) {
            var i2;
            e2 = !!e2;
            var r2 = this.selectedAtoms(t2, this.atoms), s2 = r2.length;
            for (i2 = 0; i2 < s2; i2++) r2[i2].intersectionShape = { sphere: [], cylinder: [], line: [], triangle: [] }, r2[i2].contextMenuEnabled = e2;
            s2 > 0 && (this.molObj = null);
          }
          setColorByElement(t2, e2) {
            if (null === this.molObj || !GLModel.sameObj(e2, this.lastColors)) {
              this.lastColors = e2;
              var i2 = this.selectedAtoms(t2, i2);
              i2.length > 0 && (this.molObj = null);
              for (var r2 = 0; r2 < i2.length; r2++) {
                var s2 = i2[r2];
                void 0 !== e2[s2.elem] && (s2.color = e2[s2.elem]);
              }
            }
          }
          setColorByProperty(t2, e2, i2, s2) {
            var n2, a2, o2 = this.selectedAtoms(t2, o2);
            for (this.lastColors = null, o2.length > 0 && (this.molObj = null), "string" == typeof i2 && void 0 !== r.Gradient.builtinGradients[i2] && (i2 = new r.Gradient.builtinGradients[i2]()), s2 || (s2 = i2.range()), s2 || (s2 = (0, L.getPropertyRange)(o2, e2)), n2 = 0; n2 < o2.length; n2++) {
              a2 = o2[n2], null != (0, L.getAtomProperty)(a2, e2) && (a2.color = i2.valueToHex(parseFloat(a2.properties[e2]), s2));
            }
          }
          setColorByFunction(t2, e2) {
            var i2 = this.selectedAtoms(t2, i2);
            if ("function" == typeof e2) {
              this.lastColors = null, i2.length > 0 && (this.molObj = null);
              for (let t3 = 0; t3 < i2.length; t3++) {
                let r2 = i2[t3];
                r2.color = e2(r2);
              }
            }
          }
          toCDObject(t2 = false) {
            var e2 = { a: [], b: [] };
            t2 && (e2.s = []);
            for (let r2 = 0; r2 < this.atoms.length; r2++) {
              let s2 = {}, n2 = this.atoms[r2];
              if (s2.x = n2.x, s2.y = n2.y, s2.z = n2.z, "C" != n2.elem && (s2.l = n2.elem), t2) {
                for (var i2 = 0; i2 < e2.s.length && JSON.stringify(n2.style) !== JSON.stringify(e2.s[i2]); ) i2++;
                i2 === e2.s.length && e2.s.push(n2.style), 0 !== i2 && (s2.s = i2);
              }
              e2.a.push(s2);
              for (let t3 = 0; t3 < n2.bonds.length; t3++) {
                let i3 = r2, s3 = n2.bonds[t3];
                if (i3 >= s3) continue;
                let a2 = { b: i3, e: s3 }, o2 = n2.bondOrder[t3];
                1 != o2 && (a2.o = o2), e2.b.push(a2);
              }
            }
            return e2;
          }
          globj(t2, e2) {
            (null === this.molObj || e2.regen) && (this.molObj = this.createMolObj(this.atoms, e2), this.renderedMolObj && (t2.remove(this.renderedMolObj), this.renderedMolObj = null), this.renderedMolObj = this.molObj.clone(), this.hidden && (this.renderedMolObj.setVisible(false), this.molObj.setVisible(false)), t2.add(this.renderedMolObj));
          }
          exportVRML() {
            return this.createMolObj(this.atoms, { supportsImposters: false, supportsAIA: false }).vrml();
          }
          removegl(t2) {
            this.renderedMolObj && (void 0 !== this.renderedMolObj.geometry && this.renderedMolObj.geometry.dispose(), void 0 !== this.renderedMolObj.material && this.renderedMolObj.material.dispose(), t2.remove(this.renderedMolObj), this.renderedMolObj = null), this.molObj = null;
          }
          hide() {
            this.hidden = true, this.renderedMolObj && this.renderedMolObj.setVisible(false), this.molObj && this.molObj.setVisible(false);
          }
          show() {
            this.hidden = false, this.renderedMolObj && this.renderedMolObj.setVisible(true), this.molObj && this.molObj.setVisible(true);
          }
          addPropertyLabels(t2, e2, i2, r2) {
            for (var s2 = this.selectedAtoms(e2, s2), n2 = (0, L.deepCopy)(r2), a2 = 0; a2 < s2.length; a2++) {
              var o2 = s2[a2], l2 = null;
              void 0 !== o2[t2] ? l2 = String(o2[t2]) : void 0 !== o2.properties[t2] && (l2 = String(o2.properties[t2])), null != l2 && (n2.position = o2, i2.addLabel(l2, n2));
            }
          }
          addResLabels(t2, e2, i2, r2 = false) {
            var s2 = [], n2 = function(r3, n3) {
              for (var a3 = r3.selectedAtoms(t2, a3), o2 = {}, l2 = 0; l2 < a3.length; l2++) {
                var h2 = a3[l2], c2 = h2.chain, d2 = h2.resn + "" + h2.resi;
                o2[c2] || (o2[c2] = {}), o2[c2][d2] || (o2[c2][d2] = []), o2[c2][d2].push(h2);
              }
              var u2 = (0, L.deepCopy)(i2);
              for (let t3 in o2) if (o2.hasOwnProperty(t3)) {
                var f2 = o2[t3];
                for (let t4 in f2) if (f2.hasOwnProperty(t4)) {
                  let i3 = f2[t4], r4 = new $.Vector3(0, 0, 0);
                  for (let t5 = 0; t5 < i3.length; t5++) {
                    let e3 = i3[t5];
                    r4.x += e3.x, r4.y += e3.y, r4.z += e3.z;
                  }
                  r4.divideScalar(i3.length), u2.position = r4, u2.frame = n3;
                  let a4 = e2.addLabel(t4, u2, void 0, true);
                  s2.push(a4);
                }
              }
            };
            if (r2) {
              var a2 = this.getNumFrames();
              let t3 = this.atoms;
              for (let t4 = 0; t4 < a2; t4++) this.frames[t4] && (this.atoms = this.frames[t4], n2(this, t4));
              this.atoms = t3;
            } else n2(this);
            return s2;
          }
          setupDFS() {
            this.atomdfs = [];
            var t2 = this, e2 = new Int8Array(this.atoms.length);
            e2.fill(0);
            for (var i2 = function(r3, s3, n2) {
              n2.push([r3, s3]);
              var a2 = t2.atoms[r3];
              e2[r3] = 1;
              for (var o2 = 0; o2 < a2.bonds.length; o2++) {
                var l2 = a2.bonds[o2];
                t2.atoms[l2] && !e2[l2] && i2(l2, r3, n2);
              }
            }, r2 = 0; r2 < this.atoms.length; r2++) {
              if (this.atoms[r2] && !e2[r2]) {
                var s2 = [];
                i2(r2, -1, s2), this.atomdfs.push(s2);
              }
            }
          }
          setCoordinatesFromURL(t2, e2) {
            this.frames = [];
            var i2 = this;
            return this.box && this.setupDFS(), t2.startsWith("http") || (t2 = "http://" + t2), (0, L.get)(t2 + "/traj/numframes/" + e2, (function(r2) {
              if (!isNaN(parseInt(r2))) return i2.frames.push(i2.atoms), i2.frames.numFrames = r2, i2.frames.url = t2, i2.frames.path = e2, i2.setFrame(0);
            }));
          }
          setCoordinates(t2, e2) {
            if (!t2) return [];
            if (/\.gz$/.test(e2 = e2 || "")) {
              e2 = e2.replace(/\.gz$/, "");
              try {
                t2 = (0, L.inflateString)(t2);
              } catch (t3) {
                console.log(t3);
              }
            }
            if ({ mdcrd: "", inpcrd: "", pdb: "", netcdf: "", array: "" }.hasOwnProperty(e2)) {
              this.frames = [];
              for (var i2 = this.atoms.length, r2 = GLModel.parseCrd(t2, e2), s2 = 0; s2 < r2.length; ) {
                for (var n2 = [], a2 = 0; a2 < i2; a2++) {
                  var o2 = {};
                  for (var l2 in this.atoms[a2]) o2[l2] = this.atoms[a2][l2];
                  n2[a2] = o2, n2[a2].x = r2[s2++], n2[a2].y = r2[s2++], n2[a2].z = r2[s2++];
                }
                this.frames.push(n2);
              }
              return this.atoms = this.frames[0], this.frames;
            }
            return [];
          }
          addAtomSpecs(t2) {
          }
          static parseCrd(t2, e2) {
            var i2 = [], r2 = 0;
            if ("pdb" == e2) for (var s2 = t2.indexOf("\nATOM"); -1 != s2; ) {
              for (; "\nATOM" == t2.slice(s2, s2 + 5) || "\nHETATM" == t2.slice(s2, s2 + 7); ) i2[r2++] = parseFloat(t2.slice(s2 + 31, s2 + 39)), i2[r2++] = parseFloat(t2.slice(s2 + 39, s2 + 47)), i2[r2++] = parseFloat(t2.slice(s2 + 47, s2 + 55)), s2 = t2.indexOf("\n", s2 + 54), "\nTER" == t2.slice(s2, s2 + 4) && (s2 = t2.indexOf("\n", s2 + 5));
              s2 = t2.indexOf("\nATOM", s2);
            }
            else if ("netcdf" == e2) {
              var n2 = new NetCDFReader(t2);
              i2 = [].concat.apply([], n2.getDataVariable("coordinates"));
            } else {
              if ("array" == e2 || Array.isArray(t2)) return t2.flat(2);
              {
                let r3 = t2.indexOf("\n");
                "inpcrd" == e2 && (r3 = t2.indexOf("\n", r3 + 1)), i2 = (t2 = t2.slice(r3 + 1)).match(/\S+/g).map(parseFloat);
              }
            }
            return i2;
          }
          static parseMolData(t2, e2 = "", i2) {
            if (!t2) return [];
            if (/\.gz$/.test(e2)) {
              e2 = e2.replace(/\.gz$/, "");
              try {
                t2 = e2.match(/bcif/i) ? (0, L.inflateString)(t2, false) : (0, L.inflateString)(t2);
              } catch (t3) {
                console.log(t3);
              }
            }
            return void 0 === K[e2] && (e2 = e2.split(".").pop(), void 0 === K[e2] && (console.log("Unknown format: " + e2), e2 = t2 instanceof Uint8Array ? "bcif" : t2.match(/^@<TRIPOS>MOLECULE/gm) ? "mol2" : t2.match(/^data_/gm) && t2.match(/^loop_/gm) ? "cif" : t2.match(/^HETATM/gm) || t2.match(/^ATOM/gm) ? "pdb" : t2.match(/ITEM: TIMESTEP/gm) ? "lammpstrj" : t2.match(/^.*\n.*\n.\s*(\d+)\s+(\d+)/gm) ? "sdf" : t2.match(/^%VERSION\s+VERSION_STAMP/gm) ? "prmtop" : "xyz", console.log("Best guess: " + e2))), (0, K[e2])(t2, i2);
          }
        }
        GLModel.defaultAtomStyle = { line: {} }, GLModel.defaultlineWidth = 1, GLModel.vdwRadii = { H: 1.2, He: 1.4, Li: 1.82, Be: 1.53, B: 1.92, C: 1.7, N: 1.55, O: 1.52, F: 1.47, Ne: 1.54, Na: 2.27, Mg: 1.73, Al: 1.84, Si: 2.1, P: 1.8, S: 1.8, Cl: 1.75, Ar: 1.88, K: 2.75, Ca: 2.31, Ni: 1.63, Cu: 1.4, Zn: 1.39, Ga: 1.87, Ge: 2.11, As: 1.85, Se: 1.9, Br: 1.85, Kr: 2.02, Rb: 3.03, Sr: 2.49, Pd: 1.63, Ag: 1.72, Cd: 1.58, In: 1.93, Sn: 2.17, Sb: 2.06, Te: 2.06, I: 1.98, Xe: 2.16, Cs: 3.43, Ba: 2.68, Pt: 1.75, Au: 1.66, Hg: 1.55, Tl: 1.96, Pb: 2.02, Bi: 2.07, Po: 1.97, At: 2.02, Rn: 2.2, Fr: 3.48, Ra: 2.83, U: 1.86 }, GLModel.ignoredKeys = /* @__PURE__ */ new Set(["props", "invert", "model", "frame", "byres", "expand", "within", "and", "or", "not"]);
        var Ht = i(111);
        const Wt = 16;
        class GLViewer {
          getWidth() {
            let t2 = this.container, e2 = t2.offsetWidth;
            if (0 == e2 && "none" === t2.style.display) {
              let i2 = t2.style.position, r2 = t2.style.visibility;
              t2.style.display = "block", t2.style.visibility = "hidden", t2.style.position = "absolute", e2 = t2.offsetWidth, t2.style.display = "none", t2.style.visibility = r2, t2.style.position = i2;
            }
            return e2;
          }
          getHeight() {
            let t2 = this.container, e2 = t2.offsetHeight;
            if (0 == e2 && "none" === t2.style.display) {
              let i2 = t2.style.position, r2 = t2.style.visibility;
              t2.style.display = "block", t2.style.visibility = "hidden", t2.style.position = "absolute", e2 = t2.offsetHeight, t2.style.display = "none", t2.style.visibility = r2, t2.style.position = i2;
            }
            return e2;
          }
          setupRenderer() {
            this.renderer = new n.Renderer({ antialias: this.config.antialias, preserveDrawingBuffer: true, premultipliedAlpha: false, id: this.config.id, row: this.config.row, col: this.config.col, rows: this.config.rows, cols: this.config.cols, canvas: this.config.canvas, containerWidth: this.WIDTH, containerHeight: this.HEIGHT, ambientOcclusion: this.config.ambientOcclusion, outline: this.config.outline }), this.renderer.domElement.style.width = "100%", this.renderer.domElement.style.height = "100%", this.renderer.domElement.style.padding = "0", this.renderer.domElement.style.position = "absolute", this.renderer.domElement.style.top = "0px", this.renderer.domElement.style.left = "0px", this.renderer.domElement.style.zIndex = "0";
          }
          initializeScene() {
            this.scene = new n.Scene(), this.scene.fog = new n.Fog(this.bgColor, 100, 200), this.modelGroup = new n.Object3D(), this.rotationGroup = new n.Object3D(), this.rotationGroup.useQuaternion = true, this.rotationGroup.quaternion = new $.Quaternion(0, 0, 0, 1), this.rotationGroup.add(this.modelGroup), this.scene.add(this.rotationGroup);
            var t2 = new n.Light(16777215);
            t2.position = new $.Vector3(0.2, 0.2, 1).normalize(), t2.intensity = 1, this.scene.add(t2);
          }
          _handleLostContext(t2) {
            const e2 = function(t3) {
              const e3 = t3.getBoundingClientRect();
              return !(e3.right < 0 || e3.bottom < 0 || e3.top > (window.innerHeight || document.documentElement.clientHeight) || e3.left > (window.innerWidth || document.documentElement.clientWidth));
            };
            if (e2(this.container)) {
              let t3 = 0;
              for (let i2 of document.getElementsByTagName("canvas")) if (e2(i2) && null != i2._3dmol_viewer && (i2._3dmol_viewer.resize(), t3 += 1, t3 >= Wt)) break;
            }
          }
          initContainer(t2) {
            this.container = t2, this.WIDTH = this.getWidth(), this.HEIGHT = this.getHeight(), this.ASPECT = this.renderer.getAspect(this.WIDTH, this.HEIGHT), this.renderer.setSize(this.WIDTH, this.HEIGHT), this.container.append(this.renderer.domElement), this.glDOM = this.renderer.domElement, this.glDOM._3dmol_viewer = this, this.glDOM.addEventListener("webglcontextlost", this._handleLostContext.bind(this)), this.nomouse || (this.glDOM.addEventListener("mousedown", this._handleMouseDown.bind(this), { passive: false }), this.glDOM.addEventListener("touchstart", this._handleMouseDown.bind(this), { passive: false }), this.glDOM.addEventListener("wheel", this._handleMouseScroll.bind(this), { passive: false }), this.glDOM.addEventListener("mousemove", this._handleMouseMove.bind(this), { passive: false }), this.glDOM.addEventListener("touchmove", this._handleMouseMove.bind(this), { passive: false }), this.glDOM.addEventListener("contextmenu", this._handleContextMenu.bind(this), { passive: false }));
          }
          decAnim() {
            this.animated--, this.animated < 0 && (this.animated = 0);
          }
          incAnim() {
            this.animated++;
          }
          nextSurfID() {
            var t2 = 0;
            for (let i2 in this.surfaces) if (this.surfaces.hasOwnProperty(i2)) {
              var e2 = parseInt(i2);
              isNaN(e2) || e2 > t2 && (t2 = e2);
            }
            return t2 + 1;
          }
          setSlabAndFog() {
            let t2 = this.camera.position.z - this.rotationGroup.position.z;
            t2 < 1 && (t2 = 1), this.camera.near = t2 + this.slabNear, !this.camera.ortho && this.camera.near < 1 && (this.camera.near = 1), this.camera.far = t2 + this.slabFar, this.camera.near + 1 > this.camera.far && (this.camera.far = this.camera.near + 1), this.camera.fov = this.fov, this.camera.right = t2 * Math.tan(Math.PI / 180 * this.fov), this.camera.left = -this.camera.right, this.camera.top = this.camera.right / this.ASPECT, this.camera.bottom = -this.camera.top, this.camera.updateProjectionMatrix(), this.scene.fog.near = this.camera.near + this.fogStart * (this.camera.far - this.camera.near), this.scene.fog.far = this.camera.far, this.config.disableFog && (this.scene.fog.near = this.scene.fog.far);
          }
          show(t2) {
            if (this.renderer.setViewport(), this.scene && (this.setSlabAndFog(), this.renderer.render(this.scene, this.camera), this.viewChangeCallback && this.viewChangeCallback(this._viewer.getView()), !t2 && this.linkedViewers.length > 0)) for (var e2 = this._viewer.getView(), i2 = 0; i2 < this.linkedViewers.length; i2++) {
              this.linkedViewers[i2].setView(e2, true);
            }
          }
          updateClickables() {
            this.clickables.splice(0, this.clickables.length), this.hoverables.splice(0, this.hoverables.length), this.contextMenuEnabledObjects.splice(0, this.contextMenuEnabledObjects.length);
            for (let t2 = 0, e2 = this.models.length; t2 < e2; t2++) {
              let e3 = this.models[t2];
              if (e3) {
                let t3 = e3.selectedAtoms({ clickable: true }), i2 = e3.selectedAtoms({ hoverable: true }), r2 = e3.selectedAtoms({ contextMenuEnabled: true });
                for (let t4 = 0; t4 < i2.length; t4++) this.hoverables.push(i2[t4]);
                for (let e4 = 0; e4 < t3.length; e4++) this.clickables.push(t3[e4]);
                for (let t4 = 0; t4 < r2.length; t4++) this.contextMenuEnabledObjects.push(r2[t4]);
              }
            }
            for (let t2 = 0, e2 = this.shapes.length; t2 < e2; t2++) {
              let e3 = this.shapes[t2];
              e3 && e3.clickable && this.clickables.push(e3), e3 && e3.hoverable && this.hoverables.push(e3), e3 && e3.contextMenuEnabled && this.contextMenuEnabledObjects.push(e3);
            }
          }
          handleClickSelection(t2, e2, i2) {
            let r2 = this.targetedObjects(t2, e2, this.clickables);
            if (r2.length) {
              var s2 = r2[0].clickable;
              if (void 0 !== s2.callback && ("function" != typeof s2.callback && (s2.callback = (0, L.makeFunction)(s2.callback)), "function" == typeof s2.callback)) {
                3 === this.mouseButton && this.contextMenuEnabledObjects.includes(s2) && this.userContextMenuHandler || s2.callback(s2, this._viewer, i2, this.container, r2);
              }
            }
          }
          canvasOffset() {
            let t2 = this.glDOM, e2 = t2.getBoundingClientRect(), i2 = t2.ownerDocument, r2 = i2.documentElement, s2 = i2.defaultView;
            return { top: e2.top + s2.pageYOffset - r2.clientTop, left: e2.left + s2.pageXOffset - r2.clientLeft };
          }
          setHover(t2, e2, i2) {
            this.current_hover != t2 && (this.current_hover && ("function" != typeof this.current_hover.unhover_callback && (this.current_hover.unhover_callback = (0, L.makeFunction)(this.current_hover.unhover_callback)), this.current_hover.unhover_callback(this.current_hover, this._viewer, e2, this.container, i2)), this.current_hover = t2, t2 && void 0 !== t2.hover_callback && ("function" != typeof t2.hover_callback && (t2.hover_callback = (0, L.makeFunction)(t2.hover_callback)), "function" == typeof t2.hover_callback && t2.hover_callback(t2, this._viewer, e2, this.container, i2)));
          }
          handleHoverSelection(t2, e2, i2) {
            if (0 == this.hoverables.length) return;
            let r2 = this.targetedObjects(t2, e2, this.hoverables);
            if (r2.length) {
              var s2 = r2[0].clickable;
              this.setHover(s2, i2, r2), this.current_hover = s2;
            } else this.setHover(null);
          }
          handleHoverContinue(t2, e2) {
            let i2 = this.targetedObjects(t2, e2, this.hoverables);
            0 != i2.length && void 0 !== i2[0] || this.setHover(null), void 0 !== i2[0] && i2[0].clickable !== this.current_hover && this.setHover(null);
          }
          closeEnoughForClick(t2, { allowTolerance: e2 = t2.targetTouches, tolerance: i2 = 5 } = {}) {
            const r2 = this.getX(t2), s2 = this.getY(t2);
            if (e2) {
              const t3 = Math.abs(r2 - this.mouseStartX), e3 = Math.abs(s2 - this.mouseStartY);
              return t3 <= i2 && e3 <= i2;
            }
            return r2 === this.mouseStartX && s2 === this.mouseStartY;
          }
          calcTouchDistance(t2) {
            var e2 = t2.targetTouches[0].pageX - t2.targetTouches[1].pageX, i2 = t2.targetTouches[0].pageY - t2.targetTouches[1].pageY;
            return Math.hypot(e2, i2);
          }
          getX(t2) {
            var e2 = t2.pageX;
            return null == e2 && (e2 = t2.pageX), t2.targetTouches && t2.targetTouches[0] ? e2 = t2.targetTouches[0].pageX : t2.changedTouches && t2.changedTouches[0] && (e2 = t2.changedTouches[0].pageX), e2;
          }
          getY(t2) {
            var e2 = t2.pageY;
            return null == e2 && (e2 = t2.pageY), t2.targetTouches && t2.targetTouches[0] ? e2 = t2.targetTouches[0].pageY : t2.changedTouches && t2.changedTouches[0] && (e2 = t2.changedTouches[0].pageY), e2;
          }
          isInViewer(t2, e2) {
            if (null != this.viewers) {
              var i2 = this.WIDTH / this.cols, r2 = this.HEIGHT / this.rows, s2 = this.canvasOffset(), n2 = t2 - s2.left, a2 = e2 - s2.top, o2 = this.rows - Math.floor(a2 / r2) - 1, l2 = Math.floor(n2 / i2);
              if (o2 != this.row || l2 != this.col) return false;
            }
            return true;
          }
          adjustZoomToLimits(t2) {
            if (this.config.lowerZoomLimit && this.config.lowerZoomLimit > 0) {
              let e2 = this.CAMERA_Z - this.config.lowerZoomLimit;
              t2 > e2 && (t2 = e2);
            }
            if (this.config.upperZoomLimit && this.config.upperZoomLimit > 0) {
              let e2 = this.CAMERA_Z - this.config.upperZoomLimit;
              t2 < e2 && (t2 = e2);
            }
            return t2 > this.CAMERA_Z - 1 && (t2 = this.CAMERA_Z - 1), t2;
          }
          static slerp(t2, e2, i2) {
            if (1 == i2) return e2.clone();
            if (0 == i2) return t2.clone();
            let r2 = t2.x * e2.x + t2.y * e2.y + t2.z * e2.z + t2.w * e2.w;
            if (r2 > 0.9995) {
              let r3 = new $.Quaternion(t2.x + i2 * (e2.x - t2.x), t2.y + i2 * (e2.y - t2.y), t2.z + i2 * (e2.z - t2.z), t2.w + i2 * (e2.w - t2.w));
              return r3.normalize(), r3;
            }
            r2 < 0 && (e2 = e2.clone().multiplyScalar(-1), r2 = -r2), r2 > 1 ? r2 = 1 : r2 < -1 && (r2 = -1);
            var s2 = Math.acos(r2) * i2, n2 = e2.clone();
            n2.sub(t2.clone().multiplyScalar(r2)), n2.normalize();
            var a2 = Math.cos(s2), o2 = Math.sin(s2), l2 = new $.Quaternion(t2.x * a2 + n2.x * o2, t2.y * a2 + n2.y * o2, t2.z * a2 + n2.z * o2, t2.w * a2 + n2.w * o2);
            return l2.normalize(), l2;
          }
          constructor(t2, e2 = {}) {
            if (this.nomouse = false, this.glDOM = null, this.models = [], this.surfaces = {}, this.shapes = [], this.labels = [], this.clickables = [], this.hoverables = [], this.contextMenuEnabledObjects = [], this.current_hover = null, this.hoverDuration = 500, this.longTouchDuration = 1e3, this.viewer_frame = 0, this.viewChangeCallback = null, this.stateChangeCallback = null, this.NEAR = 1, this.FAR = 800, this.CAMERA_Z = 150, this.fov = 20, this.linkedViewers = [], this.renderer = null, this.control_all = false, this.scene = null, this.rotationGroup = null, this.modelGroup = null, this.fogStart = 0.4, this.slabNear = -50, this.slabFar = 50, this.cq = new $.Quaternion(0, 0, 0, 1), this.dq = new $.Quaternion(0, 0, 0, 1), this.animated = 0, this.animationTimers = /* @__PURE__ */ new Set(), this.isDragging = false, this.mouseStartX = 0, this.mouseStartY = 0, this.touchDistanceStart = 0, this.touchHold = false, this.currentModelPos = 0, this.cz = 0, this.cslabNear = 0, this.cslabFar = 0, this.userContextMenuHandler = null, this.config = e2, this.callback = this.config.callback, this.defaultcolors = this.config.defaultcolors, this.defaultcolors || (this.defaultcolors = s.elementColors.defaultColors), this.nomouse = Boolean(this.config.nomouse), this.bgColor = 0, this.config.backgroundColor = this.config.backgroundColor || "#ffffff", void 0 !== this.config.backgroundColor && (this.bgColor = s.CC.color(this.config.backgroundColor).getHex()), this.config.backgroundAlpha = null == this.config.backgroundAlpha ? 1 : this.config.backgroundAlpha, this.camerax = 0, void 0 !== this.config.camerax && (this.camerax = "string" == typeof this.config.camerax ? parseFloat(this.config.camerax) : this.config.camerax), this._viewer = this, this.container = t2, null != this.config.hoverDuration && (this.hoverDuration = this.config.hoverDuration), void 0 === this.config.antialias && (this.config.antialias = true), void 0 === this.config.cartoonQuality && (this.config.cartoonQuality = 10), this.WIDTH = this.getWidth(), this.HEIGHT = this.getHeight(), this.setupRenderer(), this.row = null == this.config.row ? 0 : this.config.row, this.col = null == this.config.col ? 0 : this.config.col, this.cols = this.config.cols, this.rows = this.config.rows, this.viewers = this.config.viewers, this.control_all = this.config.control_all, this.ASPECT = this.renderer.getAspect(this.WIDTH, this.HEIGHT), this.camera = new n.Camera(this.fov, this.ASPECT, this.NEAR, this.FAR, this.config.orthographic), this.camera.position = new $.Vector3(this.camerax, 0, this.CAMERA_Z), this.lookingAt = new $.Vector3(), this.camera.lookAt(this.lookingAt), this.raycaster = new n.Raycaster(new $.Vector3(0, 0, 0), new $.Vector3(0, 0, 0)), this.projector = new n.Projector(), this.initializeScene(), this.renderer.setClearColorHex(this.bgColor, this.config.backgroundAlpha), this.scene.fog.color = s.CC.color(this.bgColor), document.body.addEventListener("mouseup", this._handleMouseUp.bind(this)), document.body.addEventListener("touchend", this._handleMouseUp.bind(this)), this.initContainer(this.container), this.config.style && this.setViewStyle(this.config), window.addEventListener("resize", this.resize.bind(this)), void 0 !== window.ResizeObserver && (this.divwatcher = new window.ResizeObserver(this.resize.bind(this)), this.divwatcher.observe(this.container)), void 0 !== window.IntersectionObserver) {
              let t3 = (t4, e3) => {
                t4.forEach(((t5) => {
                  t5.isIntersecting && this.resize();
                }));
              };
              this.intwatcher = new window.IntersectionObserver(t3), this.intwatcher.observe(this.container);
            }
            try {
              "function" == typeof this.callback && this.callback(this);
            } catch (t3) {
              console.log("error with glviewer callback: " + t3);
            }
          }
          targetedObjects(t2, e2, i2) {
            var r2 = { x: t2, y: e2, z: -1 };
            return Array.isArray(i2) || (i2 = this.selectedAtoms(i2)), 0 == i2.length ? [] : (this.raycaster.setFromCamera(r2, this.camera), this.raycaster.intersectObjects(this.modelGroup, i2));
          }
          modelToScreen(t2) {
            let e2 = false;
            Array.isArray(t2) || (t2 = [t2], e2 = true);
            let i2 = this.renderer.getXRatio(), r2 = this.renderer.getYRatio(), s2 = this.col, n2 = this.row, a2 = s2 * (this.WIDTH / i2), o2 = (r2 - n2 - 1) * (this.HEIGHT / r2), l2 = [], h2 = this.canvasOffset();
            return t2.forEach(((t3) => {
              let e3 = new $.Vector3(t3.x, t3.y, t3.z);
              e3.applyMatrix4(this.modelGroup.matrixWorld), this.projector.projectVector(e3, this.camera);
              let s3 = this.WIDTH / i2 * (e3.x + 1) / 2 + h2.left + a2, n3 = -this.HEIGHT / r2 * (e3.y - 1) / 2 + h2.top + o2;
              l2.push({ x: s3, y: n3 });
            })), e2 && (l2 = l2[0]), l2;
          }
          screenOffsetToModel(t2, e2, i2) {
            var r2 = t2 / this.WIDTH, s2 = e2 / this.HEIGHT, n2 = void 0 === i2 ? this.rotationGroup.position.z : i2, a2 = this.rotationGroup.quaternion, o2 = new $.Vector3(0, 0, n2);
            return this.projector.projectVector(o2, this.camera), o2.x += 2 * r2, o2.y -= 2 * s2, this.projector.unprojectVector(o2, this.camera), o2.z = 0, o2.applyQuaternion(a2), o2;
          }
          screenToModelDistance(t2, e2) {
            let i2 = this.canvasOffset(), r2 = new $.Vector3(e2.x, e2.y, e2.z);
            r2.applyMatrix4(this.modelGroup.matrixWorld);
            let s2 = r2.clone();
            this.projector.projectVector(r2, this.camera);
            let n2 = new $.Vector3(2 * (t2.x - i2.left) / this.WIDTH - 1, 2 * (t2.y - i2.top) / -this.HEIGHT + 1, r2.z);
            return this.projector.unprojectVector(n2, this.camera), n2.distanceTo(s2);
          }
          setViewChangeCallback(t2) {
            "function" != typeof t2 && null != t2 || (this.viewChangeCallback = t2);
          }
          setStateChangeCallback(t2) {
            "function" != typeof t2 && null != t2 || (this.stateChangeCallback = t2);
          }
          getConfig() {
            return this.config;
          }
          setConfig(t2) {
            this.config = t2, t2.ambientOcclusion && this.renderer.enableAmbientOcclusion(t2.ambientOcclusion);
          }
          getInternalState() {
            var t2 = { models: [], surfaces: [], shapes: [], labels: [] };
            for (let e2 = 0; e2 < this.models.length; e2++) this.models[e2] && (t2.models[e2] = this.models[e2].getInternalState());
            return t2;
          }
          setInternalState(t2) {
            this.clear();
            var e2 = t2.models;
            for (let t3 = 0; t3 < e2.length; t3++) e2[t3] && (this.models[t3] = new GLModel(t3), this.models[t3].setInternalState(e2[t3]));
            this.render();
          }
          setZoomLimits(t2, e2) {
            void 0 !== t2 && (this.config.lowerZoomLimit = t2), e2 && (this.config.upperZoomLimit = e2), this.rotationGroup.position.z = this.adjustZoomToLimits(this.rotationGroup.position.z), this.show();
          }
          setCameraParameters(t2) {
            void 0 !== t2.fov && (this.fov = t2.fov, this.camera.fov = this.fov), void 0 !== t2.z && (this.CAMERA_Z = t2.z, this.camera.z = this.CAMERA_Z), void 0 !== t2.orthographic && (this.camera.ortho = t2.orthographic), this.setSlabAndFog();
          }
          _handleMouseDown(t2) {
            if (t2.preventDefault(), !this.scene) return;
            var e2 = this.getX(t2), i2 = this.getY(t2);
            if (void 0 === e2) return;
            this.isDragging = true, this.mouseButton = t2.which, this.mouseStartX = e2, this.mouseStartY = i2, this.touchHold = true, this.touchDistanceStart = 0, t2.targetTouches && 2 == t2.targetTouches.length && (this.touchDistanceStart = this.calcTouchDistance(t2)), this.cq = this.rotationGroup.quaternion.clone(), this.cz = this.rotationGroup.position.z, this.currentModelPos = this.modelGroup.position.clone(), this.cslabNear = this.slabNear, this.cslabFar = this.slabFar;
            let r2 = this;
            t2.targetTouches && 1 === t2.targetTouches.length && (this.longTouchTimeout = setTimeout((function() {
              if (1 == r2.touchHold) {
                r2.glDOM = r2.renderer.domElement;
                const e3 = t2.targetTouches[0], i3 = new PointerEvent("contextmenu", Object.assign(Object.assign({}, t2), { pageX: e3.pageX, pageY: e3.pageY, screenX: e3.screenX, screenY: e3.screenY, clientX: e3.clientX, clientY: e3.clientY }));
                r2.glDOM.dispatchEvent(i3);
              }
            }), this.longTouchDuration));
          }
          _handleMouseUp(t2) {
            if (this.touchHold = false, this.isDragging && this.scene) {
              var e2 = this.getX(t2), i2 = this.getY(t2);
              if (this.closeEnoughForClick(t2) && this.isInViewer(e2, i2)) {
                let r2 = this.mouseXY(e2, i2);
                this.handleClickSelection(r2.x, r2.y, t2);
              }
            }
            this.isDragging = false;
          }
          _handleMouseScroll(t2) {
            if (t2.preventDefault(), this.scene) {
              var e2 = this.getX(t2), i2 = this.getY(t2);
              if (void 0 !== e2 && (this.control_all || this.isInViewer(e2, i2))) {
                var r2 = 0.85 * (this.CAMERA_Z - this.rotationGroup.position.z), s2 = 1;
                if (t2.ctrlKey && (s2 = -1), t2.detail) this.rotationGroup.position.z += s2 * r2 * t2.detail / 10;
                else if (t2.wheelDelta) {
                  let e3 = 600 * t2.wheelDelta / (t2.wheelDelta + 600);
                  this.rotationGroup.position.z -= s2 * r2 * e3 / 400;
                }
                this.rotationGroup.position.z = this.adjustZoomToLimits(this.rotationGroup.position.z), this.show();
              }
            }
          }
          pngURI() {
            return this.getCanvas().toDataURL("image/png");
          }
          apngURI(t2) {
            let e2 = this;
            return t2 = t2 || 1, new Promise((function(i2) {
              let r2 = 0, s2 = e2.viewChangeCallback, n2 = [], a2 = [], o2 = Date.now();
              e2.viewChangeCallback = function() {
                a2.push(Date.now() - o2), o2 = Date.now(), n2.push(new Promise(((t3) => {
                  e2.getCanvas().toBlob((function(e3) {
                    e3.arrayBuffer().then(t3);
                  }), "image/png");
                }))), r2 += 1, r2 == t2 && (e2.viewChangeCallback = s2, Promise.all(n2).then(((t3) => {
                  let r3 = [];
                  for (let e3 = 0; e3 < t3.length; e3++) {
                    let i3 = (0, Ht.decode)(t3[e3]);
                    r3.push((0, Ht.toRGBA8)(i3)[0]);
                  }
                  let s3 = e2.getCanvas().width, n3 = e2.getCanvas().height, o3 = (0, Ht.encode)(r3, s3, n3, 0, a2), l2 = new Blob([o3], { type: "image/png" }), h2 = new FileReader();
                  h2.onload = function(t4) {
                    i2(t4.target.result);
                  }, h2.readAsDataURL(l2);
                })));
              };
            }));
          }
          getCanvas() {
            return this.glDOM;
          }
          getRenderer() {
            return this.renderer;
          }
          setHoverDuration(t2) {
            this.hoverDuration = t2;
          }
          mouseXY(t2, e2) {
            let i2 = this.canvasOffset(), r2 = this.renderer.getXRatio(), s2 = this.renderer.getYRatio(), n2 = this.col, a2 = this.row, o2 = n2 * (this.WIDTH / r2), l2 = (s2 - a2 - 1) * (this.HEIGHT / s2);
            return { x: (t2 - i2.left - o2) / (this.WIDTH / r2) * 2 - 1, y: -(e2 - i2.top - l2) / (this.HEIGHT / s2) * 2 + 1 };
          }
          _handleMouseMove(t2) {
            clearTimeout(this.hoverTimeout), t2.preventDefault();
            let e2 = this.getX(t2), i2 = this.getY(t2);
            if (void 0 === e2) return;
            let r2 = this.renderer.getXRatio(), s2 = this.renderer.getYRatio(), n2 = this.mouseXY(e2, i2), a2 = this;
            null !== this.current_hover && this.handleHoverContinue(n2.x, n2.y);
            var o2 = 0;
            if ((this.control_all || this.isInViewer(e2, i2)) && this.scene && (this.hoverables.length > 0 && (this.hoverTimeout = setTimeout((function() {
              a2.handleHoverSelection(n2.x, n2.y, t2);
            }), this.hoverDuration)), this.isDragging)) {
              t2.targetTouches && (t2.targetTouches.length > 1 || 1 === t2.targetTouches.length && !this.closeEnoughForClick(t2)) && clearTimeout(this.longTouchTimeout);
              var l2 = (e2 - this.mouseStartX) / this.WIDTH, h2 = (i2 - this.mouseStartY) / this.HEIGHT;
              if (0 != this.touchDistanceStart && t2.targetTouches && 2 == t2.targetTouches.length) o2 = 2, h2 = 2 * (this.calcTouchDistance(t2) - this.touchDistanceStart) / (this.WIDTH + this.HEIGHT);
              else t2.targetTouches && 3 == t2.targetTouches.length && (o2 = 1);
              l2 *= r2, h2 *= s2;
              var c2, d2 = Math.hypot(l2, h2);
              if (3 == o2 || 3 == this.mouseButton && t2.ctrlKey) this.slabNear = this.cslabNear + 100 * l2, this.slabFar = this.cslabFar - 100 * h2;
              else if (2 == o2 || 3 == this.mouseButton || t2.shiftKey) (c2 = 0.85 * (this.CAMERA_Z - this.rotationGroup.position.z)) < 80 && (c2 = 80), this.rotationGroup.position.z = this.cz + h2 * c2, this.rotationGroup.position.z = this.adjustZoomToLimits(this.rotationGroup.position.z);
              else if (1 == o2 || 2 == this.mouseButton || t2.ctrlKey) {
                var u2 = this.screenOffsetToModel(r2 * (e2 - this.mouseStartX), s2 * (i2 - this.mouseStartY));
                this.modelGroup.position.addVectors(this.currentModelPos, u2);
              } else if ((0 === o2 || 1 == this.mouseButton) && 0 !== d2) {
                var f2 = Math.sin(d2 * Math.PI) / d2;
                this.dq.x = Math.cos(d2 * Math.PI), this.dq.y = 0, this.dq.z = f2 * l2, this.dq.w = -f2 * h2, this.rotationGroup.quaternion.set(1, 0, 0, 0), this.rotationGroup.quaternion.multiply(this.dq), this.rotationGroup.quaternion.multiply(this.cq);
              }
              this.show();
            }
          }
          _handleContextMenu(t2) {
            if (t2.preventDefault(), this.closeEnoughForClick(t2)) {
              var e2 = this.mouseStartX, i2 = this.mouseStartY, r2 = this.canvasOffset();
              let n2 = this.mouseXY(e2, i2), a2 = n2.x, o2 = n2.y, l2 = this.targetedObjects(a2, o2, this.contextMenuEnabledObjects);
              var s2 = null;
              l2.length && (s2 = l2[0].clickable);
              r2 = this.canvasOffset(), e2 = this.mouseStartX - r2.left, i2 = this.mouseStartY - r2.top;
              this.userContextMenuHandler && (this.userContextMenuHandler(s2, e2, i2, l2, t2), this.isDragging = false);
            }
          }
          setContainer(t2) {
            let e2 = (0, L.getElement)(t2) || this.container;
            return this.initContainer(e2), this;
          }
          setBackgroundColor(t2, e2) {
            (void 0 === e2 || e2 < 0 || e2 > 1) && (e2 = 1);
            var i2 = s.CC.color(t2);
            return this.scene.fog.color = i2, this.bgColor = i2.getHex(), this.renderer.setClearColorHex(i2.getHex(), e2), this.show(), this;
          }
          setProjection(t2) {
            this.camera.ortho = "orthographic" === t2, this.setSlabAndFog();
          }
          setViewStyle(t2) {
            if ((t2 = t2 || {}).style = t2.style || "", t2.style.includes("outline") ? this.renderer.enableOutline(t2) : this.renderer.disableOutline(), t2.style.includes("ambientOcclusion")) {
              var e2 = {};
              t2.strength && (e2.strength = t2.strength), t2.radius && (e2.radius = t2.radius), this.renderer.enableAmbientOcclusion(e2);
            } else this.renderer.disableAmbientOcclusion();
            return this;
          }
          updateSize() {
            this.renderer.setSize(this.WIDTH, this.HEIGHT), this.ASPECT = this.renderer.getAspect(this.WIDTH, this.HEIGHT), this.renderer.setSize(this.WIDTH, this.HEIGHT), this.camera.aspect = this.ASPECT, this.camera.updateProjectionMatrix();
          }
          setWidth(t2) {
            return this.WIDTH = t2 || this.WIDTH, this.updateSize(), this;
          }
          setHeight(t2) {
            return this.HEIGHT = t2 || this.HEIGHT, this.updateSize(), this;
          }
          resize() {
            this.WIDTH = this.getWidth(), this.HEIGHT = this.getHeight();
            let t2 = false;
            if (this.renderer.isLost() && this.WIDTH > 0 && this.HEIGHT > 0) {
              let e2 = false, i2 = this.container.querySelector("canvas");
              i2 && i2 != this.renderer.getCanvas() ? this.config.canvas = i2 : (i2.remove(), this.config && null != this.config.canvas && (delete this.config.canvas, e2 = true)), this.setupRenderer(), this.initContainer(this.container), this.renderer.setClearColorHex(this.bgColor, this.config.backgroundAlpha), t2 = true, e2 && (this.config.canvas = this.renderer.getCanvas());
            }
            if (0 == this.WIDTH || 0 == this.HEIGHT ? this.animated && this._viewer.pauseAnimate() : this.animated && this._viewer.resumeAnimate(), this.updateSize(), t2) {
              let t3 = this.renderer.supportedExtensions();
              if (t3.regen = true, this.viewers) for (let e2 = 0, i2 = this.viewers.length; e2 < i2; e2++) for (let i3 = 0, r2 = this.viewers[e2].length; i3 < r2; i3++) this.viewers[e2][i3].render(null, t3);
              this._viewer.render(null, t3);
            } else this.show();
            return this;
          }
          getModel(t2) {
            return void 0 === t2 ? 0 == this.models.length ? null : this.models[this.models.length - 1] : t2 instanceof GLModel ? t2 : t2 in this.models ? this.models[t2] : 0 == this.models.length ? null : this.models[this.models.length - 1];
          }
          spin(t2, e2 = 1, i2 = false) {
            if (clearInterval(this.spinInterval), void 0 === t2 && (t2 = "y"), "boolean" == typeof t2) {
              if (!t2) return;
              t2 = "y";
            }
            Array.isArray(t2) && (t2 = { x: t2[0], y: t2[1], z: t2[2] });
            var r2 = this;
            this.spinInterval = setInterval((function() {
              !r2.getCanvas().isConnected && r2.renderer.isLost() && clearInterval(r2.spinInterval), (!i2 || r2.container.checkVisibility && r2.container.checkVisibility()) && r2.rotate(1 * e2, t2);
            }), 25);
          }
          animateMotion(t2, e2, i2, r2, s2, n2) {
            var a2 = Math.ceil(t2 / 20);
            a2 < 1 && (a2 = 1), this.incAnim();
            var o2 = { mpos: this.modelGroup.position.clone(), rz: this.rotationGroup.position.z, rot: this.rotationGroup.quaternion.clone(), cam: this.lookingAt.clone() };
            if (e2) {
              let t3 = new Array(a2);
              for (let e4 = 0; e4 < a2; e4++) {
                let l4 = (e4 + 1) / a2, h4 = { mpos: o2.mpos, rz: o2.rz, rot: o2.rot };
                h4.mpos = i2.clone().sub(o2.mpos).multiplyScalar(l4).add(o2.mpos), h4.rz = o2.rz + l4 * (r2 - o2.rz), h4.rot = GLViewer.slerp(o2.rot, s2, l4), h4.cam = n2.clone().sub(o2.cam).multiplyScalar(l4).add(o2.cam), t3[e4] = h4;
              }
              let e3 = 0, l3 = this, h3 = function() {
                var i3 = t3[e3];
                e3 += 1, l3.modelGroup.position = i3.mpos, l3.rotationGroup.position.z = i3.rz, l3.rotationGroup.quaternion = i3.rot, l3.camera.lookAt(i3.cam), e3 < t3.length ? setTimeout(h3, 20) : l3.decAnim(), l3.show();
              };
              setTimeout(h3, 20);
            } else {
              var l2 = {};
              let t3 = 1 / a2;
              if (i2 && (l2.mpos = i2.clone().sub(o2.mpos).multiplyScalar(t3)), void 0 !== r2 && null != r2 && (l2.rz = t3 * (r2 - o2.rz)), s2) {
                var h2 = GLViewer.slerp(o2.rot, s2, t3);
                l2.rot = o2.rot.clone().inverse().multiply(h2);
              }
              n2 && (l2.cam = n2.clone().sub(o2.cam).multiplyScalar(t3));
              let e3 = 0, c2 = this, d2 = function() {
                e3 += 1, l2.mpos && c2.modelGroup.position.add(l2.mpos), l2.rz && (c2.rotationGroup.position.z += l2.rz), l2.rot && c2.rotationGroup.quaternion.multiply(l2.rot), l2.cam && (c2.lookingAt.add(l2.cam), c2.camera.lookAt(c2.lookingAt)), e3 < a2 ? setTimeout(d2, 20) : c2.decAnim(), c2.show();
              };
              setTimeout(d2, 20);
            }
          }
          rotate(t2, e2 = "y", i2 = 0, r2 = false) {
            if ("x" == e2 ? e2 = { x: 1, y: 0, z: 0 } : "y" == e2 ? e2 = { x: 0, y: 1, z: 0 } : "z" == e2 && (e2 = { x: 0, y: 0, z: 1 }), "vx" == e2 ? e2 = { vx: 1, vy: 0, vz: 0 } : "vy" == e2 ? e2 = { vx: 0, vy: 1, vz: 0 } : "vz" == e2 && (e2 = { vx: 0, vy: 0, vz: 1 }), void 0 !== e2.vx) {
              var s2 = new $.Vector3(e2.vx, e2.vy, e2.vz);
              s2.applyQuaternion(this.rotationGroup.quaternion), e2 = { x: s2.x, y: s2.y, z: s2.z };
            }
            var n2 = (function(t3) {
              var i3, r3, s3, n3 = Math.sin(t3 / 2), a3 = Math.cos(t3 / 2);
              return i3 = e2.x * n3, r3 = e2.y * n3, s3 = e2.z * n3, new $.Quaternion(i3, r3, s3, a3).normalize();
            })(Math.PI * t2 / 180);
            if (i2) {
              var a2 = new $.Quaternion().copy(this.rotationGroup.quaternion).multiply(n2);
              this.animateMotion(i2, r2, this.modelGroup.position, this.rotationGroup.position.z, a2, this.lookingAt);
            } else this.rotationGroup.quaternion.multiply(n2), this.show();
            return this;
          }
          surfacesFinished() {
            for (var t2 in this.surfaces) if (!this.surfaces[t2][0].done) return false;
            return true;
          }
          getView() {
            if (!this.modelGroup) return [0, 0, 0, 0, 0, 0, 0, 1];
            var t2 = this.modelGroup.position, e2 = this.rotationGroup.quaternion;
            return [t2.x, t2.y, t2.z, this.rotationGroup.position.z, e2.x, e2.y, e2.z, e2.w];
          }
          setView(t2, e2) {
            return void 0 !== t2 && (t2 instanceof Array || 8 !== t2.length) && this.modelGroup && this.rotationGroup ? (this.modelGroup.position.x = t2[0], this.modelGroup.position.y = t2[1], this.modelGroup.position.z = t2[2], this.rotationGroup.position.z = t2[3], this.rotationGroup.quaternion.x = t2[4], this.rotationGroup.quaternion.y = t2[5], this.rotationGroup.quaternion.z = t2[6], this.rotationGroup.quaternion.w = t2[7], void 0 !== t2[8] && (this.rotationGroup.position.x = t2[8], this.rotationGroup.position.y = t2[9]), this.show(e2), this) : this;
          }
          render(t2, e2) {
            this.renderer.setViewport(), this.updateClickables();
            var i2, r2, s2 = this.getView();
            for (this.stateChangeCallback && this.stateChangeCallback(this.getInternalState()), e2 || (e2 = this.renderer.supportedExtensions()), i2 = 0; i2 < this.models.length; i2++) this.models[i2] && this.models[i2].globj(this.modelGroup, e2);
            for (i2 = 0; i2 < this.shapes.length; i2++) this.shapes[i2] && (void 0 === this.shapes[i2].frame || this.viewer_frame < 0 || this.shapes[i2].frame < 0 || this.shapes[i2].frame == this.viewer_frame ? this.shapes[i2].globj(this.modelGroup, e2) : this.shapes[i2].removegl(this.modelGroup));
            for (i2 = 0; i2 < this.labels.length; i2++) e2.regen && (this.labels[i2].dispose(), this.modelGroup.remove(this.labels[i2].sprite), this.labels[i2].setContext(), this.modelGroup.add(this.labels[i2].sprite)), this.labels[i2] && void 0 !== this.labels[i2].frame && this.labels[i2].frame >= 0 && (this.modelGroup.remove(this.labels[i2].sprite), (this.viewer_frame < 0 || this.labels[i2].frame == this.viewer_frame) && this.modelGroup.add(this.labels[i2].sprite));
            for (i2 in this.surfaces) if (this.surfaces.hasOwnProperty(i2)) {
              var a2 = this.surfaces[i2];
              for (r2 = 0; r2 < a2.length; r2++) if (a2.hasOwnProperty(r2)) {
                var o2 = a2[r2].geo;
                if (!a2[r2].finished || e2.regen) {
                  o2.verticesNeedUpdate = true, o2.elementsNeedUpdate = true, o2.normalsNeedUpdate = true, o2.colorsNeedUpdate = true, o2.buffersNeedUpdate = true, a2[r2].mat.needsUpdate = true, a2[r2].done && (a2[r2].finished = true), a2[r2].lastGL && this.modelGroup.remove(a2[r2].lastGL);
                  var l2 = null;
                  if (l2 = a2[r2].mat instanceof n.LineBasicMaterial ? new n.Line(o2, a2[r2].mat) : new n.Mesh(o2, a2[r2].mat), a2[r2].mat.transparent && 0 == a2[r2].mat.opacity ? l2.visible = false : l2.visible = true, a2[r2].symmetries.length > 1 || 1 == a2[r2].symmetries.length && !a2[r2].symmetries[r2].isIdentity()) {
                    var h2, c2 = new n.Object3D();
                    for (h2 = 0; h2 < a2[r2].symmetries.length; h2++) {
                      var d2 = l2.clone();
                      d2.matrix = a2[r2].symmetries[h2], d2.matrixAutoUpdate = false, c2.add(d2);
                    }
                    a2[r2].lastGL = c2, this.modelGroup.add(c2);
                  } else a2[r2].lastGL = l2, this.modelGroup.add(l2);
                }
              }
            }
            return this.setView(s2), "function" == typeof t2 && t2(this), this;
          }
          getModelList(t2) {
            let e2 = [];
            if (void 0 === t2 || void 0 === t2.model) for (let t3 = 0; t3 < this.models.length; t3++) this.models[t3] && e2.push(this.models[t3]);
            else {
              let r2 = t2.model;
              Array.isArray(r2) || (r2 = [r2]);
              for (let t3 = 0; t3 < r2.length; t3++) if ("number" == typeof r2[t3]) {
                var i2 = r2[t3];
                i2 < 0 && (i2 += this.models.length), e2.push(this.models[i2]);
              } else e2.push(r2[t3]);
            }
            return e2;
          }
          getAtomsFromSel(t2) {
            var e2 = [];
            void 0 === t2 && (t2 = {});
            var i2 = this.getModelList(t2);
            for (let r2 = 0; r2 < i2.length; r2++) e2 = e2.concat(i2[r2].selectedAtoms(t2));
            return e2;
          }
          atomIsSelected(t2, e2) {
            void 0 === e2 && (e2 = {});
            for (var i2 = this.getModelList(e2), r2 = 0; r2 < i2.length; r2++) if (i2[r2].atomIsSelected(t2, e2)) return true;
            return false;
          }
          selectedAtoms(t2) {
            return this.getAtomsFromSel(t2);
          }
          getUniqueValues(t2, e2) {
            void 0 === e2 && (e2 = {});
            var i2 = this.getAtomsFromSel(e2), r2 = {};
            for (var s2 in i2) {
              if (i2[s2].hasOwnProperty(t2)) r2[i2[s2][t2]] = true;
            }
            return Object.keys(r2);
          }
          pdbData(t2) {
            for (var e2 = this.getAtomsFromSel(t2), i2 = "", r2 = 0, s2 = e2.length; r2 < s2; ++r2) i2 += e2[r2].pdbline + "\n";
            return i2;
          }
          zoom(t2 = 2, e2 = 0, i2 = false) {
            var r2 = (this.CAMERA_Z - this.rotationGroup.position.z) / t2, s2 = this.CAMERA_Z - r2;
            return e2 > 0 ? this.animateMotion(e2, i2, this.modelGroup.position, this.adjustZoomToLimits(s2), this.rotationGroup.quaternion, this.lookingAt) : (this.rotationGroup.position.z = this.adjustZoomToLimits(s2), this.show()), this;
          }
          translate(t2, e2, i2 = 0, r2 = false) {
            var s2 = t2 / this.WIDTH, n2 = e2 / this.HEIGHT, a2 = new $.Vector3(0, 0, -this.CAMERA_Z);
            this.projector.projectVector(a2, this.camera), a2.x -= s2, a2.y -= n2, this.projector.unprojectVector(a2, this.camera), a2.z = 0;
            var o2 = this.lookingAt.clone().add(a2);
            return i2 > 0 ? this.animateMotion(i2, r2, this.modelGroup.position, this.rotationGroup.position.z, this.rotationGroup.quaternion, o2) : (this.lookingAt = o2, this.camera.lookAt(this.lookingAt), this.show()), this;
          }
          translateScene(t2, e2, i2 = 0, r2 = false) {
            var s2 = this.screenOffsetToModel(t2, e2), n2 = this.modelGroup.position.clone().add(s2);
            return i2 > 0 ? this.animateMotion(i2, r2, this.modelGroup.position, this.rotationGroup.position.z, this.rotationGroup.quaternion, this.lookingAt) : (this.modelGroup.position = n2, this.show()), this;
          }
          fitSlab(t2) {
            t2 = t2 || {};
            var e2 = this.getAtomsFromSel(t2), i2 = (0, L.getExtent)(e2), r2 = i2[1][0] - i2[0][0], s2 = i2[1][1] - i2[0][1], n2 = i2[1][2] - i2[0][2], a2 = Math.hypot(r2, s2, n2);
            return a2 < 5 && (a2 = 5), this.slabNear = -a2 / 1.9, this.slabFar = a2 / 2, this;
          }
          center(t2 = {}, e2 = 0, i2 = false) {
            var r2, s2, n2 = this.getAtomsFromSel(t2), a2 = (0, L.getExtent)(n2);
            (0, L.isEmptyObject)(t2) ? (this.shapes.forEach(((t3) => {
              if (t3 && t3.boundingSphere && t3.boundingSphere.center) {
                var e3 = t3.boundingSphere.center, i3 = t3.boundingSphere.radius;
                i3 > 0 ? (n2.push(new $.Vector3(e3.x + i3, e3.y, e3.z)), n2.push(new $.Vector3(e3.x - i3, e3.y, e3.z)), n2.push(new $.Vector3(e3.x, e3.y + i3, e3.z)), n2.push(new $.Vector3(e3.x, e3.y - i3, e3.z)), n2.push(new $.Vector3(e3.x, e3.y, e3.z + i3)), n2.push(new $.Vector3(e3.x, e3.y, e3.z - i3))) : n2.push(e3);
              }
            })), a2 = (0, L.getExtent)(n2), r2 = n2, s2 = a2) : (r2 = this.getAtomsFromSel({}), s2 = (0, L.getExtent)(r2));
            var o2 = new $.Vector3(a2[2][0], a2[2][1], a2[2][2]), l2 = s2[1][0] - s2[0][0], h2 = s2[1][1] - s2[0][1], c2 = s2[1][2] - s2[0][2], d2 = Math.hypot(l2, h2, c2);
            d2 < 5 && (d2 = 5), this.slabNear = -d2 / 1.9, this.slabFar = d2 / 2, l2 = a2[1][0] - a2[0][0], h2 = a2[1][1] - a2[0][1], c2 = a2[1][2] - a2[0][2], (d2 = Math.hypot(l2, h2, c2)) < 5 && (d2 = 5);
            for (var u2 = 25, f2 = 0; f2 < n2.length; f2++) if (n2[f2]) {
              var p2 = o2.distanceToSquared(n2[f2]);
              p2 > u2 && (u2 = p2);
            }
            d2 = 2 * Math.sqrt(u2);
            var g2 = o2.clone().multiplyScalar(-1);
            return e2 > 0 ? this.animateMotion(e2, i2, g2, this.rotationGroup.position.z, this.rotationGroup.quaternion, this.lookingAt) : (this.modelGroup.position = g2, this.show()), this;
          }
          zoomTo(t2 = {}, e2 = 0, i2 = false) {
            let r2 = this.getAtomsFromSel(t2), s2 = (0, L.getExtent)(r2), n2 = s2;
            if ((0, L.isEmptyObject)(t2)) {
              let t3 = r2 && r2.length;
              if (this.shapes.forEach(((t4) => {
                if (t4 && t4.boundingSphere) {
                  if (t4.boundingSphere.box) {
                    let e4 = t4.boundingSphere.box;
                    r2.push(new $.Vector3(e4.min.x, e4.min.y, e4.min.z)), r2.push(new $.Vector3(e4.max.x, e4.max.y, e4.max.z));
                  } else if (t4.boundingSphere.center) {
                    var e3 = t4.boundingSphere.center, i3 = t4.boundingSphere.radius;
                    i3 > 0 ? (r2.push(new $.Vector3(e3.x + i3, e3.y, e3.z)), r2.push(new $.Vector3(e3.x - i3, e3.y, e3.z)), r2.push(new $.Vector3(e3.x, e3.y + i3, e3.z)), r2.push(new $.Vector3(e3.x, e3.y - i3, e3.z)), r2.push(new $.Vector3(e3.x, e3.y, e3.z + i3)), r2.push(new $.Vector3(e3.x, e3.y, e3.z - i3))) : r2.push(e3);
                  }
                }
              })), n2 = (0, L.getExtent)(r2), !t3) for (let t4 = 0; t4 < 3; t4++) s2[2][t4] = (n2[0][t4] + n2[1][t4]) / 2;
            } else {
              let t3 = this.getAtomsFromSel({});
              n2 = (0, L.getExtent)(t3);
            }
            var a2 = new $.Vector3(s2[2][0], s2[2][1], s2[2][2]), o2 = n2[1][0] - n2[0][0], l2 = n2[1][1] - n2[0][1], h2 = n2[1][2] - n2[0][2], c2 = Math.hypot(o2, l2, h2);
            c2 < 5 && (c2 = 5), this.slabNear = -c2 / 1.9, this.slabFar = c2 / 2, 0 === Object.keys(t2).length && (this.slabNear = Math.min(2 * -c2, -50), this.slabFar = Math.max(2 * c2, 50));
            var d2 = this.config.minimumZoomToDistance || 5;
            o2 = s2[1][0] - s2[0][0], l2 = s2[1][1] - s2[0][1], h2 = s2[1][2] - s2[0][2], (c2 = Math.hypot(o2, l2, h2)) < d2 && (c2 = d2);
            for (var u2 = d2 * d2, f2 = 0; f2 < r2.length; f2++) if (r2[f2]) {
              var p2 = a2.distanceToSquared(r2[f2]);
              p2 > u2 && (u2 = p2);
            }
            c2 = 2 * Math.sqrt(u2);
            var g2 = a2.clone().multiplyScalar(-1), m2 = -(0.5 * c2 / Math.tan(Math.PI / 180 * this.camera.fov / 2) - this.CAMERA_Z);
            return m2 = this.adjustZoomToLimits(m2), e2 > 0 ? this.animateMotion(e2, i2, g2, m2, this.rotationGroup.quaternion, this.lookingAt) : (this.modelGroup.position = g2, this.rotationGroup.position.z = m2, this.show()), this;
          }
          setSlab(t2, e2) {
            this.slabNear = t2, this.slabFar = e2;
          }
          getSlab() {
            return { near: this.slabNear, far: this.slabFar };
          }
          addLabel(t2, e2 = {}, i2, r2 = false) {
            if (i2) {
              var s2 = (0, L.getExtent)(this.getAtomsFromSel(i2));
              e2.position = { x: s2[2][0], y: s2[2][1], z: s2[2][2] };
            }
            var n2 = new Label(t2, e2);
            return n2.setContext(), this.modelGroup.add(n2.sprite), this.labels.push(n2), r2 || this.show(), n2;
          }
          addResLabels(t2, e2, i2 = false) {
            let r2 = this.labels.length;
            return this.applyToModels("addResLabels", t2, this, e2, i2), this.show(), this.labels.slice(r2);
          }
          addPropertyLabels(t2, e2, i2) {
            return this.applyToModels("addPropertyLabels", t2, e2, this, i2), this.show(), this;
          }
          removeLabel(t2) {
            for (var e2 = 0; e2 < this.labels.length; e2++) if (this.labels[e2] == t2) {
              this.labels.splice(e2, 1), t2.dispose(), this.modelGroup.remove(t2.sprite);
              break;
            }
            return this.show(), this;
          }
          removeAllLabels() {
            for (var t2 = 0; t2 < this.labels.length; t2++) this.labels[t2] && this.labels[t2].sprite && this.modelGroup.remove(this.labels[t2].sprite);
            return this.labels.splice(0, this.labels.length), this.show(), this;
          }
          hideAllLabels() {
            for (var t2 = 0; t2 < this.labels.length; t2++) this.labels[t2] && this.labels[t2].hide();
            return this.show(), this;
          }
          showAllLabels() {
            for (var t2 = 0; t2 < this.labels.length; t2++) this.labels[t2] && this.labels[t2].show();
            return this.show(), this;
          }
          setLabelStyle(t2, e2) {
            return this.modelGroup.remove(t2.sprite), t2.dispose(), t2.stylespec = e2, t2.setContext(), this.modelGroup.add(t2.sprite), this.show(), t2;
          }
          setLabelText(t2, e2) {
            return this.modelGroup.remove(t2.sprite), t2.dispose(), t2.text = e2, t2.setContext(), this.modelGroup.add(t2.sprite), this.show(), t2;
          }
          addShape(t2) {
            var e2 = new GLShape(t2 = t2 || {});
            return e2.shapePosition = this.shapes.length, this.shapes.push(e2), e2;
          }
          removeShape(t2) {
            if (!t2) return this;
            for (t2.removegl(this.modelGroup), delete this.shapes[t2.shapePosition]; this.shapes.length > 0 && void 0 === this.shapes[this.shapes.length - 1]; ) this.shapes.pop();
            return this;
          }
          removeAllShapes() {
            for (var t2 = 0; t2 < this.shapes.length; t2++) {
              var e2 = this.shapes[t2];
              e2 && e2.removegl(this.modelGroup);
            }
            return this.shapes.splice(0, this.shapes.length), this;
          }
          getSelectionCenter(t2) {
            if (t2.hasOwnProperty("x") && t2.hasOwnProperty("y") && t2.hasOwnProperty("z")) return t2;
            var e2 = this.getAtomsFromSel(t2);
            if (0 == e2.length) return { x: 0, y: 0, z: 0 };
            var i2 = (0, L.getExtent)(e2);
            return { x: i2[0][0] + (i2[1][0] - i2[0][0]) / 2, y: i2[0][1] + (i2[1][1] - i2[0][1]) / 2, z: i2[0][2] + (i2[1][2] - i2[0][2]) / 2 };
          }
          addSphere(t2) {
            (t2 = t2 || {}).center = this.getSelectionCenter(t2.center);
            var e2 = new GLShape(t2);
            return e2.shapePosition = this.shapes.length, e2.addSphere(t2), this.shapes.push(e2), e2.finalize(), e2;
          }
          addBox(t2 = {}) {
            null != t2.corner && (t2.corner = this.getSelectionCenter(t2.corner)), null != t2.center && (t2.center = this.getSelectionCenter(t2.center));
            var e2 = new GLShape(t2);
            return e2.shapePosition = this.shapes.length, e2.addBox(t2), this.shapes.push(e2), e2.finalize(), e2;
          }
          addArrow(t2 = {}) {
            t2.start = this.getSelectionCenter(t2.start), t2.end = this.getSelectionCenter(t2.end);
            var e2 = new GLShape(t2);
            return e2.shapePosition = this.shapes.length, e2.addArrow(t2), this.shapes.push(e2), e2.finalize(), e2;
          }
          addCylinder(t2 = {}) {
            t2.start = this.getSelectionCenter(t2.start), t2.end = this.getSelectionCenter(t2.end);
            var e2 = new GLShape(t2);
            return e2.shapePosition = this.shapes.length, t2.dashed ? e2.addDashedCylinder(t2) : e2.addCylinder(t2), this.shapes.push(e2), e2.finalize(), e2;
          }
          addCurve(t2 = {}) {
            var e2 = new GLShape(t2);
            return e2.shapePosition = this.shapes.length, e2.addCurve(t2), this.shapes.push(e2), e2.finalize(), e2;
          }
          addLine(t2 = {}) {
            t2.start = this.getSelectionCenter(t2.start), t2.end = this.getSelectionCenter(t2.end), t2.wireframe = true;
            var e2 = new GLShape(t2);
            return e2.shapePosition = this.shapes.length, t2.dashed ? e2 = this.addLineDashed(t2, e2) : e2.addLine(t2), this.shapes.push(e2), e2.finalize(), e2;
          }
          addUnitCell(t2, e2) {
            t2 = this.getModel(t2), (e2 = e2 || { alabel: "a", blabel: "b", clabel: "c" }).box = e2.box || {}, e2.astyle = e2.astyle || { color: "red", radius: 0.1, midpos: -1 }, e2.bstyle = e2.bstyle || { color: "green", radius: 0.1, midpos: -1 }, e2.cstyle = e2.cstyle || { color: "blue", radius: 0.1, midpos: -1 }, e2.alabelstyle = e2.alabelstyle || { fontColor: "red", showBackground: false, alignment: "center", inFront: false }, e2.blabelstyle = e2.blabelstyle || { fontColor: "green", showBackground: false, alignment: "center", inFront: false }, e2.clabelstyle = e2.clabelstyle || { fontColor: "blue", showBackground: false, alignment: "center", inFront: false }, t2.unitCellObjects && this.removeUnitCell(t2), t2.unitCellObjects = { shapes: [], labels: [] };
            var i2 = t2.getCrystData(), r2 = null;
            if (i2) {
              if (i2.matrix) r2 = i2.matrix;
              else {
                var s2, n2, a2, o2 = i2.a, l2 = i2.b, h2 = i2.c, c2 = i2.alpha, d2 = i2.beta, u2 = i2.gamma;
                c2 = c2 * Math.PI / 180, d2 = d2 * Math.PI / 180, u2 = u2 * Math.PI / 180, s2 = Math.cos(d2), n2 = (Math.cos(c2) - Math.cos(d2) * Math.cos(u2)) / Math.sin(u2), a2 = Math.sqrt(Math.max(0, 1 - s2 * s2 - n2 * n2)), r2 = new $.Matrix3(o2, l2 * Math.cos(u2), h2 * s2, 0, l2 * Math.sin(u2), h2 * n2, 0, 0, h2 * a2);
              }
              var f2 = [new $.Vector3(0, 0, 0), new $.Vector3(1, 0, 0), new $.Vector3(0, 1, 0), new $.Vector3(0, 0, 1), new $.Vector3(1, 1, 0), new $.Vector3(0, 1, 1), new $.Vector3(1, 0, 1), new $.Vector3(1, 1, 1)];
              if (i2.matrix4) for (let t3 = 0; t3 < f2.length; t3++) i2.size && f2[t3].multiplyVectors(f2[t3], i2.size), f2[t3] = f2[t3].applyMatrix4(i2.matrix4);
              else for (let t3 = 0; t3 < f2.length; t3++) f2[t3] = f2[t3].applyMatrix3(r2);
              if (e2.box && !e2.box.hidden) {
                e2.box.wireframe = true;
                var p2 = new GLShape(e2.box);
                p2.shapePosition = this.shapes.length, p2.addLine({ start: f2[0], end: f2[1] }), p2.addLine({ start: f2[0], end: f2[2] }), p2.addLine({ start: f2[1], end: f2[4] }), p2.addLine({ start: f2[2], end: f2[4] }), p2.addLine({ start: f2[0], end: f2[3] }), p2.addLine({ start: f2[3], end: f2[5] }), p2.addLine({ start: f2[2], end: f2[5] }), p2.addLine({ start: f2[1], end: f2[6] }), p2.addLine({ start: f2[4], end: f2[7] }), p2.addLine({ start: f2[6], end: f2[7] }), p2.addLine({ start: f2[3], end: f2[6] }), p2.addLine({ start: f2[5], end: f2[7] }), this.shapes.push(p2), t2.unitCellObjects.shapes.push(p2), p2.finalize();
              }
              if (!e2.astyle.hidden) {
                e2.astyle.start = f2[0], e2.astyle.end = f2[1];
                let i3 = this.addArrow(e2.astyle);
                t2.unitCellObjects.shapes.push(i3);
              }
              if (!e2.bstyle.hidden) {
                e2.bstyle.start = f2[0], e2.bstyle.end = f2[2];
                let i3 = this.addArrow(e2.bstyle);
                t2.unitCellObjects.shapes.push(i3);
              }
              if (!e2.cstyle.hidden) {
                e2.cstyle.start = f2[0], e2.cstyle.end = f2[3];
                let i3 = this.addArrow(e2.cstyle);
                t2.unitCellObjects.shapes.push(i3);
              }
              if (e2.alabel) {
                e2.alabelstyle.position = f2[1];
                let i3 = this.addLabel(e2.alabel, e2.alabelstyle);
                t2.unitCellObjects.labels.push(i3);
              }
              if (e2.blabel) {
                e2.blabelstyle.position = f2[2];
                let i3 = this.addLabel(e2.blabel, e2.blabelstyle);
                t2.unitCellObjects.labels.push(i3);
              }
              if (e2.clabel) {
                e2.clabelstyle.position = f2[3];
                let i3 = this.addLabel(e2.clabel, e2.clabelstyle);
                t2.unitCellObjects.labels.push(i3);
              }
            }
          }
          removeUnitCell(t2) {
            if ((t2 = this.getModel(t2)).unitCellObjects) {
              let e2 = this;
              t2.unitCellObjects.shapes.forEach((function(t3) {
                e2.removeShape(t3);
              })), t2.unitCellObjects.labels.forEach((function(t3) {
                e2.removeLabel(t3);
              }));
            }
            delete t2.unitCellObjects;
          }
          replicateUnitCell(t2 = 3, e2 = t2, i2 = e2, r2, s2, n2) {
            let a2 = (r2 = this.getModel(r2)).getCrystData();
            if (a2) {
              const o2 = r2.selectedAtoms({}), l2 = a2.matrix;
              let h2 = function(t3) {
                return t3 % 2 == 0 ? -t3 / 2 : Math.ceil(t3 / 2);
              };
              t2 <= 1 && e2 <= 1 && i2 <= 1 && (n2 = true, t2 = e2 = i2 = 3);
              let c2 = function(t3, e3, i3) {
                return false;
              };
              if (n2) {
                const t3 = new $.Matrix3().getInverse3(l2);
                c2 = function(e3, i3, r3) {
                  let s3 = new $.Vector3(e3, i3, r3).applyMatrix3(t3);
                  return !(s3.x > -1e-4 && s3.x < 1.0001 && s3.y > -1e-4 && s3.y < 1.0001 && s3.z > -1e-4 && s3.z < 1.0001);
                };
              }
              for (let s3 = 0; s3 < t2; s3++) for (let t3 = 0; t3 < e2; t3++) for (let e3 = 0; e3 < i2; e3++) {
                if (0 == s3 && 0 == t3 && 0 == e3) continue;
                let i3 = new $.Vector3(h2(s3), h2(t3), h2(e3));
                i3.applyMatrix3(l2);
                let n3 = [];
                for (let t4 = 0; t4 < o2.length; t4++) {
                  let e4 = o2[t4].x + i3.x, r3 = o2[t4].y + i3.y, s4 = o2[t4].z + i3.z;
                  if (c2(e4, r3, s4)) continue;
                  let a3 = {};
                  for (let e5 in o2[t4]) a3[e5] = o2[t4][e5];
                  a3.x = e4, a3.y = r3, a3.z = s4, n3.push(a3);
                }
                r2.addAtoms(n3);
              }
              s2 && r2.assignBonds();
            }
          }
          addLineDashed(t2, e2) {
            var i2, r2;
            t2.dashLength = t2.dashLength || 0.5, t2.gapLength = t2.gapLength || 0.5, i2 = t2.start ? new $.Vector3(t2.start.x || 0, t2.start.y || 0, t2.start.z || 0) : new $.Vector3(0, 0, 0), r2 = t2.end ? new $.Vector3(t2.end.x, t2.end.y || 0, t2.end.z || 0) : new $.Vector3(0, 0, 0);
            var s2, n2, a2, o2 = new $.Vector3(), l2 = new $.Vector3(), h2 = new $.Vector3(), c2 = i2.clone(), d2 = 0;
            for (o2.subVectors(r2, i2), s2 = o2.length(), o2.normalize(), l2 = o2.clone(), h2 = o2.clone(), l2.multiplyScalar(t2.dashLength), h2.multiplyScalar(t2.gapLength), n2 = l2.length(), a2 = h2.length(); d2 < s2; ) {
              if (d2 + n2 > s2) {
                t2.start = i2, t2.end = r2, e2.addLine(t2);
                break;
              }
              c2.addVectors(i2, l2), t2.start = i2, t2.end = c2, e2.addLine(t2), i2 = c2.clone(), d2 += n2, c2.addVectors(i2, h2), i2 = c2.clone(), d2 += a2;
            }
            return e2.finalize(), e2;
          }
          addCustom(t2) {
            var e2 = new GLShape(t2 = t2 || {});
            return e2.shapePosition = this.shapes.length, e2.addCustom(t2), this.shapes.push(e2), e2.finalize(), e2;
          }
          addVolumetricData(t2, e2, i2 = {}) {
            var r2 = new st.VolumeData(t2, e2);
            return i2.hasOwnProperty("transferfn") ? this.addVolumetricRender(r2, i2) : this.addIsosurface(r2, i2);
          }
          addIsosurface(t2, e2 = {}, i2) {
            var r2 = new GLShape(e2);
            return r2.shapePosition = this.shapes.length, r2.addIsosurface(t2, e2, i2, this), this.shapes.push(r2), r2;
          }
          addVolumetricRender(t2, e2) {
            var i2 = new GLVolumetricRender(t2, e2 = e2 || {}, this);
            return i2.shapePosition = this.shapes.length, this.shapes.push(i2), i2;
          }
          hasVolumetricRender() {
            return this.renderer.supportsVolumetric();
          }
          enableFog(t2) {
            t2 ? this.scene.fog = new n.Fog(this.bgColor, 100, 200) : (this.config.disableFog = true, this.show());
          }
          setFrame(t2) {
            this.viewer_frame = t2;
            let e2 = this;
            return new Promise((function(i2) {
              var r2 = e2.models.map((function(i3) {
                return i3.setFrame(t2, e2);
              }));
              Promise.all(r2).then((function() {
                i2();
              }));
            }));
          }
          getFrame() {
            return this.viewer_frame;
          }
          getNumFrames() {
            var t2 = 0;
            for (let e2 = 0; e2 < this.models.length; e2++) this.models[e2].getNumFrames() > t2 && (t2 = this.models[e2].getNumFrames());
            for (let e2 = 0; e2 < this.shapes.length; e2++) this.shapes[e2].frame && this.shapes[e2].frame >= t2 && (t2 = this.shapes[e2].frame + 1);
            for (let e2 = 0; e2 < this.labels.length; e2++) this.labels[e2].frame && this.labels[e2].frame >= t2 && (t2 = this.labels[e2].frame + 1);
            return t2;
          }
          animate(t2) {
            this.incAnim();
            var e2 = 100, i2 = "forward", r2 = 1 / 0;
            (t2 = t2 || {}).interval && (e2 = t2.interval), t2.loop && (i2 = t2.loop), t2.reps && (r2 = t2.reps);
            var s2 = this.getNumFrames(), n2 = this, a2 = 0;
            t2.startFrame && (a2 = t2.startFrame % s2);
            var o2 = 1;
            t2.step && (r2 /= o2 = t2.step);
            var l2, h2, c2 = 0, d2 = s2 * r2, u2 = /* @__PURE__ */ new Date(), f2 = function(t3) {
              u2 = /* @__PURE__ */ new Date(), "forward" == t3 ? n2.setFrame(a2).then((function() {
                a2 = (a2 + o2) % s2, l2();
              })) : "backward" == t3 ? n2.setFrame(s2 - 1 - a2).then((function() {
                a2 = (a2 + o2) % s2, l2();
              })) : n2.setFrame(a2).then((function() {
                o2 *= (a2 += o2) % (s2 - 1) == 0 ? -1 : 1, l2();
              }));
            };
            return l2 = function() {
              if (n2.render(), n2.getCanvas().isConnected) if (++c2 >= d2 || !n2.isAnimated()) h2.cancel(), n2.animationTimers.delete(h2), n2.decAnim();
              else {
                var t3 = e2 - ((/* @__PURE__ */ new Date()).getTime() - u2.getTime());
                t3 = t3 > 0 ? t3 : 0, n2.animationTimers.delete(h2), h2 = new L.PausableTimer(f2, t3, i2), n2.animationTimers.add(h2);
              }
              else n2.stopAnimate();
            }, h2 = new L.PausableTimer(f2, 0, i2), this.animationTimers.add(h2), this;
          }
          stopAnimate() {
            return this.animated = 0, this.animationTimers.forEach((function(t2) {
              t2.cancel();
            })), this.animationTimers = /* @__PURE__ */ new Set(), this;
          }
          pauseAnimate() {
            return this.animationTimers.forEach((function(t2) {
              t2.pause();
            })), this;
          }
          resumeAnimate() {
            return this.animationTimers.forEach((function(t2) {
              t2.resume();
            })), this;
          }
          isAnimated() {
            return this.animated > 0;
          }
          getModelOpt(t2) {
            return t2 && !t2.defaultcolors ? (t2.defaultcolors = this.defaultcolors, t2.cartoonQuality = t2.cartoonQuality || this.config.cartoonQuality) : void 0 === t2 && (t2 = { defaultcolors: this.defaultcolors, cartoonQuality: this.config.cartoonQuality }), t2;
          }
          addModel(t2, e2 = "", i2) {
            i2 = this.getModelOpt(i2);
            var r2 = new GLModel(this.models.length, i2);
            return r2.addMolData(t2, e2, i2), this.models.push(r2), r2;
          }
          addModels(t2, e2, i2) {
            (i2 = this.getModelOpt(i2)).multimodel = true, i2.frames = true;
            for (var r2 = GLModel.parseMolData(t2, e2, i2), s2 = 0; s2 < r2.length; s2++) {
              var n2 = new GLModel(this.models.length, i2);
              n2.setAtomDefaults(r2[s2]), n2.addFrame(r2[s2]), n2.setFrame(0), r2.modelData && n2.setModelData(r2.modelData[s2]), n2.setDontDuplicateAtoms(!i2.duplicateAssemblyAtoms), this.models.push(n2);
            }
            return this.models;
          }
          addModelsAsFrames(t2, e2, i2) {
            (i2 = this.getModelOpt(i2)).multimodel = true, i2.frames = true;
            var r2 = new GLModel(this.models.length, i2);
            return r2.addMolData(t2, e2, i2), this.models.push(r2), r2;
          }
          addAsOneMolecule(t2, e2, i2) {
            (i2 = this.getModelOpt(i2)).multimodel = true, i2.onemol = true;
            var r2 = new GLModel(this.models.length, i2);
            return r2.addMolData(t2, e2, i2), this.models.push(r2), r2;
          }
          removeModel(t2) {
            if (t2 = this.getModel(t2)) {
              for (t2.removegl(this.modelGroup), delete this.models[t2.getID()]; this.models.length > 0 && void 0 === this.models[this.models.length - 1]; ) this.models.pop();
              return this;
            }
          }
          removeAllModels() {
            for (var t2 = 0; t2 < this.models.length; t2++) {
              var e2 = this.models[t2];
              e2 && e2.removegl(this.modelGroup);
            }
            return this.models.splice(0, this.models.length), this;
          }
          exportJSON(t2, e2) {
            var i2 = {};
            return i2.m = void 0 === e2 ? this.models.map((function(e3) {
              return e3.toCDObject(t2);
            })) : [this.models[e2].toCDObject()], JSON.stringify(i2);
          }
          exportVRML() {
            var t2 = this.modelGroup;
            this.applyToModels("removegl", this.modelGroup), this.modelGroup = new n.Object3D(), this.render(null, { supportsImposters: false, supportsAIA: false, regen: true });
            var e2 = "#VRML V2.0 utf8\n" + this.modelGroup.vrml() + "\n";
            return this.applyToModels("removegl", this.modelGroup), this.modelGroup = t2, e2;
          }
          createModelFrom(t2, e2 = false) {
            for (var i2 = new GLModel(this.models.length, this.defaultcolors), r2 = 0; r2 < this.models.length; r2++) if (this.models[r2]) {
              var s2 = this.models[r2].selectedAtoms(t2);
              i2.addAtoms(s2), e2 && this.models[r2].removeAtoms(s2);
            }
            return this.models.push(i2), i2;
          }
          applyToModels(t2, e2, i2, r2, s2, n2, a2) {
            for (var o2 = this.getModelList(e2), l2 = 0; l2 < o2.length; l2++) o2[l2][t2](e2, i2, r2, s2, n2, a2);
          }
          setStyle(t2, e2) {
            return void 0 === e2 && (e2 = t2, t2 = {}), this.applyToModels("setStyle", t2, e2, false), this;
          }
          addStyle(t2, e2) {
            return void 0 === e2 && (e2 = t2, t2 = {}), this.applyToModels("setStyle", t2, e2, true), this;
          }
          setClickable(t2, e2, i2) {
            return this.applyToModels("setClickable", t2, e2, i2), this;
          }
          setHoverable(t2, e2, i2, r2) {
            return this.applyToModels("setHoverable", t2, e2, i2, r2), this;
          }
          enableContextMenu(t2, e2) {
            return this.applyToModels("enableContextMenu", t2, e2), this;
          }
          vibrate(t2, e2, i2, r2) {
            return this.applyToModels("vibrate", t2, e2, i2, this, r2), this;
          }
          setColorByProperty(t2, e2, i2, r2) {
            return this.applyToModels("setColorByProperty", t2, e2, i2, r2), this;
          }
          setColorByElement(t2, e2) {
            return this.applyToModels("setColorByElement", t2, e2), this;
          }
          static getAtomsWithin(t2, e2) {
            var i2 = [];
            for (let s2 = 0; s2 < t2.length; s2++) {
              var r2 = t2[s2];
              void 0 !== r2 && (r2.x < e2[0][0] || r2.x > e2[1][0] || r2.y < e2[0][1] || r2.y > e2[1][1] || r2.z < e2[0][2] || r2.z > e2[1][2] || i2.push(r2));
            }
            return i2;
          }
          static volume(t2) {
            return (t2[1][0] - t2[0][0]) * (t2[1][1] - t2[0][1]) * (t2[1][2] - t2[0][2]);
          }
          carveUpExtent(t2, e2, i2) {
            let r2 = [], s2 = {};
            for (let t3 = 0, i3 = e2.length; t3 < i3; t3++) s2[e2[t3].index] = t3;
            let n2 = function(t3) {
              let e3 = [];
              for (let i3 = 0, r3 = t3.length; i3 < r3; i3++) t3[i3].index in s2 && e3.push(s2[t3[i3].index]);
              return e3;
            }, a2 = function(t3) {
              let e3 = [];
              return e3[0] = [t3[0][0], t3[0][1], t3[0][2]], e3[1] = [t3[1][0], t3[1][1], t3[1][2]], e3;
            }, o2 = function(t3) {
              if (GLViewer.volume(t3) < GLViewer.maxVolume) return [t3];
              var e3, i3 = t3[1][0] - t3[0][0], r3 = t3[1][1] - t3[0][1], s3 = t3[1][2] - t3[0][2];
              e3 = i3 > r3 && i3 > s3 ? 0 : r3 > i3 && r3 > s3 ? 1 : 2;
              var n3 = a2(t3), l3 = a2(t3), h2 = (t3[1][e3] - t3[0][e3]) / 2 + t3[0][e3];
              n3[1][e3] = h2, l3[0][e3] = h2;
              var c2 = o2(n3), d2 = o2(l3);
              return c2.concat(d2);
            }, l2 = o2(t2);
            for (let t3 = 0, s3 = l2.length; t3 < s3; t3++) {
              let s4 = a2(l2[t3]);
              s4[0][0] -= 6, s4[0][1] -= 6, s4[0][2] -= 6, s4[1][0] += 6, s4[1][1] += 6, s4[1][2] += 6;
              let o3 = GLViewer.getAtomsWithin(e2, s4), h2 = GLViewer.getAtomsWithin(i2, l2[t3]);
              r2.push({ extent: l2[t3], atoms: n2(o3), toshow: n2(h2) });
            }
            return r2;
          }
          static generateSurfaceMesh(t2, e2, i2) {
            var r2 = new n.Geometry(true), a2 = r2.updateGeoGroup(0), o2 = [];
            for (let e3 = 0, i3 = t2.length; e3 < i3; e3++) {
              var l2 = t2[e3];
              l2 && (void 0 !== l2.surfaceColor ? o2[e3] = l2.surfaceColor : l2.color && (o2[e3] = s.CC.color(l2.color)));
            }
            var h2 = a2.vertexArray, c2 = e2.vertices;
            for (let t3 = 0, e3 = c2.length; t3 < e3; t3++) {
              let e4 = 3 * a2.vertices;
              h2[e4] = c2[t3].x, h2[e4 + 1] = c2[t3].y, h2[e4 + 2] = c2[t3].z, a2.vertices++;
            }
            var d2 = a2.colorArray;
            let u2 = a2.atomArray;
            if (i2.voldata && i2.volscheme) {
              var f2 = i2.volscheme, p2 = i2.voldata, g2 = f2.range() || [-1, 1];
              for (let e3 = 0, i3 = c2.length; e3 < i3; e3++) {
                let i4 = c2[e3].atomid, r3 = p2.getVal(c2[e3].x, c2[e3].y, c2[e3].z), n2 = s.CC.color(f2.valueToHex(r3, g2)), a3 = 3 * e3;
                d2[a3] = n2.r, d2[a3 + 1] = n2.g, d2[a3 + 2] = n2.b, u2[e3] = t2[i4];
              }
            } else if (o2.length > 0) for (let e3 = 0, i3 = c2.length; e3 < i3; e3++) {
              let i4 = c2[e3].atomid, r3 = 3 * e3;
              d2[r3] = o2[i4].r, d2[r3 + 1] = o2[i4].g, d2[r3 + 2] = o2[i4].b, u2[e3] = t2[i4];
            }
            var m2 = e2.faces;
            a2.faceidx = m2.length, r2.initTypedArrays();
            var v2, _2, y2, b2, x2 = a2.vertexArray, w2 = a2.normalArray;
            for (let t3 = 0, e3 = m2.length; t3 < e3; t3 += 3) {
              var A2 = 3 * m2[t3], C2 = 3 * m2[t3 + 1], S4 = 3 * m2[t3 + 2];
              v2 = new $.Vector3(x2[A2], x2[A2 + 1], x2[A2 + 2]), _2 = new $.Vector3(x2[C2], x2[C2 + 1], x2[C2 + 2]), (y2 = new $.Vector3(x2[S4], x2[S4 + 1], x2[S4 + 2])).subVectors(y2, _2), v2.subVectors(v2, _2), y2.cross(v2), (b2 = y2).normalize(), w2[A2] += b2.x, w2[C2] += b2.x, w2[S4] += b2.x, w2[A2 + 1] += b2.y, w2[C2 + 1] += b2.y, w2[S4 + 1] += b2.y, w2[A2 + 2] += b2.z, w2[C2 + 2] += b2.z, w2[S4 + 2] += b2.z;
            }
            return a2.faceArray = new Uint16Array(m2), new n.Mesh(r2, i2);
          }
          static generateMeshSyncHelper(t2, e2, i2, r2, s2, n2) {
            var a2 = new ProteinSurface2();
            return a2.initparm(e2, 1 !== t2, n2), a2.fillvoxels(s2, i2), a2.buildboundary(), t2 != Q.SES && t2 != Q.MS || (a2.fastdistancemap(), a2.boundingatom(false), a2.fillvoxelswaals(s2, i2)), a2.marchingcube(t2), a2.getFacesAndVertices(r2);
          }
          static getMatWithStyle(t2) {
            let e2 = null;
            for (var i2 in e2 = t2.onesided ? new n.MeshLambertMaterial() : new n.MeshDoubleLambertMaterial(), e2.vertexColors = n.Coloring.VertexColors, t2) "color" === i2 || "map" === i2 || t2.hasOwnProperty(i2) && (e2[i2] = t2[i2]);
            return void 0 !== t2.opacity && (1 === t2.opacity ? e2.transparent = false : e2.transparent = true), e2;
          }
          addMesh(t2) {
            var e2 = { geo: t2.geometry, mat: t2.material, done: true, finished: false }, i2 = this.nextSurfID();
            return this.surfaces[i2] = [e2], i2;
          }
          static shallowCopy(t2) {
            var e2 = [];
            let i2 = t2.length;
            for (let r2 = 0; r2 < i2; r2++) e2[r2] = (0, L.extend)({}, t2[r2]);
            return e2;
          }
          addSurface(t2, e2 = {}, i2 = {}, s2, a2, o2) {
            let l2 = this.nextSurfID(), h2 = null, c2 = this, d2 = Q.VDW;
            "string" == typeof t2 ? void 0 !== GLViewer.surfaceTypeMap[t2.toUpperCase()] ? d2 = GLViewer.surfaceTypeMap[t2] : console.log("Surface type : " + t2 + " is not recognized") : "number" == typeof t2 && (d2 = t2);
            var u2 = null, f2 = null, p2 = GLViewer.shallowCopy(this.getAtomsFromSel(i2));
            u2 = s2 ? GLViewer.shallowCopy(this.getAtomsFromSel(s2)) : p2, (0, L.adjustVolumeStyle)(e2);
            var g2, m2 = false;
            for (g2 = 0; g2 < this.models.length; g2++) if (this.models[g2]) {
              var v2 = this.models[g2].getSymmetries();
              if (v2.length > 1 || 1 == v2.length && !v2[0].isIdentity()) {
                m2 = true;
                break;
              }
            }
            var _2 = function(t3, i3, s3) {
              var n2;
              f2 = a2 ? GLViewer.shallowCopy(c2.getAtomsFromSel(a2)) : s3;
              var o3 = (0, L.getExtent)(s3, true);
              if (e2.map && e2.map.prop) {
                var u3 = e2.map.prop;
                let t4 = (0, r.getGradient)(e2.map.scheme || e2.map.gradient || new r.Gradient.RWB()), i4 = t4.range();
                i4 || (i4 = (0, L.getPropertyRange)(s3, u3)), e2.colorscheme = { prop: u3, gradient: t4 };
              }
              for (let t4 = 0, r2 = i3.length; t4 < r2; t4++) (n2 = i3[t4]).surfaceColor = (0, L.getColorFromStyle)(n2, e2);
              var p3 = GLViewer.volume(o3), g3 = c2.carveUpExtent(o3, i3, s3);
              if (f2 && f2.length && f2.length > 0) {
                var m3 = (0, L.getExtent)(f2, true);
                g3.sort((function(t4, e3) {
                  var i4 = function(t5, e4) {
                    var i5 = t5.extent, r2 = i5[1][0] - i5[0][0], s4 = i5[1][1] - i5[0][1], n3 = i5[1][2] - i5[0][2], a3 = r2 - e4[2][0];
                    a3 *= a3;
                    var o4 = s4 - e4[2][1];
                    o4 *= o4;
                    var l3 = n3 - e4[2][2];
                    return a3 + o4 + (l3 *= l3);
                  };
                  return i4(t4, m3) - i4(e3, m3);
                }));
              }
              var v3 = [];
              for (let t4 = 0, e3 = i3.length; t4 < e3; t4++) n2 = i3[t4], v3[t4] = { x: n2.x, y: n2.y, z: n2.z, serial: t4, elem: n2.elem };
              if (!!tt) {
                var _3 = function(e3) {
                  return new Promise((function(r2) {
                    for (var s4 = GLViewer.generateMeshSyncHelper(d2, g3[e3].extent, g3[e3].atoms, g3[e3].toshow, v3, p3), n3 = wt({ vertexArr: s4.vertices, faceArr: s4.faces }), a3 = 0, o4 = n3.length; a3 < o4; a3++) {
                      s4 = { vertices: n3[a3].vertexArr, faces: n3[a3].faceArr };
                      var l3 = GLViewer.generateSurfaceMesh(i3, s4, h2);
                      (0, L.mergeGeos)(t3.geo, l3);
                    }
                    c2.render(), r2();
                  }));
                }, y3 = [];
                for (let t4 = 0; t4 < g3.length; t4++) y3.push(_3(t4));
                return Promise.all(y3).then((function() {
                  return t3.done = true, Promise.resolve(l2);
                }));
              }
              var b3 = [];
              d2 < 0 && (d2 = 0);
              for (let t4 = 0, e3 = GLViewer.numWorkers; t4 < e3; t4++) {
                var x3 = new Worker($3Dmol.SurfaceWorker);
                b3.push(x3), x3.postMessage({ type: -1, atoms: v3, volume: p3 });
              }
              return new Promise((function(e3, r2) {
                var s4 = 0, n3 = function() {
                  b3 && b3.length && b3.forEach((function(t4) {
                    t4 && t4.terminate && t4.terminate();
                  }));
                }, a3 = function(r3) {
                  for (var a4 = wt({ vertexArr: r3.data.vertices, faceArr: r3.data.faces }), o5 = 0, d3 = a4.length; o5 < d3; o5++) {
                    var u5 = { vertices: a4[o5].vertexArr, faces: a4[o5].faceArr }, f3 = GLViewer.generateSurfaceMesh(i3, u5, h2);
                    (0, L.mergeGeos)(t3.geo, f3);
                  }
                  c2.render(), ++s4 == g3.length && (t3.done = true, n3(), e3(l2));
                }, o4 = function(t4) {
                  n3(), console.log(t4.message + " (" + t4.filename + ":" + t4.lineno + ")"), r2(t4);
                };
                for (let t4 = 0; t4 < g3.length; t4++) {
                  var u4 = b3[t4 % b3.length];
                  u4.onmessage = a3, u4.onerror = o4, u4.postMessage({ type: d2, expandedExtent: g3[t4].extent, extendedAtoms: g3[t4].atoms, atomsToShow: g3[t4].toshow });
                }
              }));
            };
            e2 = e2 || {}, h2 = GLViewer.getMatWithStyle(e2);
            var y2 = [];
            y2.style = e2, y2.atomsel = i2, y2.allsel = s2, y2.focus = a2;
            var b2 = null;
            if (m2) {
              var x2 = {}, w2 = {};
              for (g2 = 0; g2 < this.models.length; g2++) x2[g2] = [], w2[g2] = [];
              for (g2 = 0; g2 < u2.length; g2++) x2[u2[g2].model].push(u2[g2]);
              for (g2 = 0; g2 < p2.length; g2++) w2[p2[g2].model].push(p2[g2]);
              var A2 = [];
              for (g2 = 0; g2 < this.models.length; g2++) w2[g2].length > 0 && (y2.push({ geo: new n.Geometry(true), mat: h2, done: false, finished: false, symmetries: this.models[g2].getSymmetries() }), A2.push(_2(y2[y2.length - 1], x2[g2], w2[g2])));
              b2 = Promise.all(A2);
            } else y2.push({ geo: new n.Geometry(true), mat: h2, done: false, finished: false, symmetries: [new $.Matrix4()] }), b2 = _2(y2[y2.length - 1], u2, p2);
            return this.surfaces[l2] = y2, b2.surfid = l2, o2 && "function" == typeof o2 ? (b2.then((function(t3) {
              o2(t3);
            })), l2) : b2;
          }
          setSurfaceMaterialStyle(t2, e2) {
            if ((0, L.adjustVolumeStyle)(e2), this.surfaces[t2]) {
              var i2 = this.surfaces[t2];
              for (let t3 = 0; t3 < i2.length; t3++) {
                var r2 = i2[t3].mat = GLViewer.getMatWithStyle(e2);
                if (i2[t3].mat.side = n.FrontSide, e2.color) {
                  i2[t3].mat.color = s.CC.color(e2.color), i2[t3].geo.colorsNeedUpdate = true;
                  const r3 = s.CC.color(e2.color);
                  i2[t3].geo.setColor(r3);
                } else if (r2.voldata && r2.volscheme) {
                  const e3 = r2.volscheme, n2 = r2.voldata, a2 = s.CC, o2 = e3.range() || [-1, 1];
                  i2[t3].geo.setColors((function(t4, i3, r3) {
                    let s2 = n2.getVal(t4, i3, r3);
                    return a2.color(e3.valueToHex(s2, o2));
                  }));
                } else {
                  i2[t3].geo.colorsNeedUpdate = true;
                  for (let r3 of i2[t3].geo.geometryGroups) for (let t4 = 0; t4 < r3.vertices; t4++) {
                    let i3 = (0, L.getColorFromStyle)(r3.atomArray[t4], e2), s2 = 3 * t4;
                    r3.colorArray[s2] = i3.r, r3.colorArray[s2 + 1] = i3.g, r3.colorArray[s2 + 2] = i3.b;
                  }
                }
                i2[t3].finished = false;
              }
            }
            return this;
          }
          getSurface(t2) {
            return this.surfaces[t2];
          }
          removeSurface(t2) {
            for (var e2 = this.surfaces[t2], i2 = 0; i2 < e2.length; i2++) e2[i2] && e2[i2].lastGL && (void 0 !== e2[i2].geo && e2[i2].geo.dispose(), void 0 !== e2[i2].mat && e2[i2].mat.dispose(), this.modelGroup.remove(e2[i2].lastGL));
            return delete this.surfaces[t2], this.show(), this;
          }
          removeAllSurfaces() {
            for (var t2 in this.surfaces) if (this.surfaces.hasOwnProperty(t2)) {
              for (var e2 = this.surfaces[t2], i2 = 0; i2 < e2.length; i2++) e2[i2] && e2[i2].lastGL && (void 0 !== e2[i2].geo && e2[i2].geo.dispose(), void 0 !== e2[i2].mat && e2[i2].mat.dispose(), this.modelGroup.remove(e2[i2].lastGL));
              delete this.surfaces[t2];
            }
            return this.show(), this;
          }
          jmolMoveTo() {
            var t2 = this.modelGroup.position, e2 = "center { " + -t2.x + " " + -t2.y + " " + -t2.z + " }; ", i2 = this.rotationGroup.quaternion;
            return e2 += "moveto .5 quaternion { " + i2.x + " " + i2.y + " " + i2.z + " " + i2.w + " };";
          }
          clear() {
            return this.removeAllSurfaces(), this.removeAllModels(), this.removeAllLabels(), this.removeAllShapes(), this.show(), this;
          }
          mapAtomProperties(t2, e2) {
            e2 = e2 || {};
            var i2 = this.getAtomsFromSel(e2);
            if ("function" == typeof t2) for (let e3 = 0, r3 = i2.length; e3 < r3; e3++) {
              t2(i2[e3]);
            }
            else for (let e3 = 0, n2 = i2.length; e3 < n2; e3++) {
              var r2 = i2[e3];
              for (let e4 = 0, i3 = t2.length; e4 < i3; e4++) {
                let i4 = t2[e4];
                if (i4.props) for (var s2 in i4.props) i4.props.hasOwnProperty(s2) && this.atomIsSelected(r2, i4) && (r2.properties || (r2.properties = {}), r2.properties[s2] = i4.props[s2]);
              }
            }
            return this;
          }
          linkViewer(t2) {
            return this.linkedViewers.push(t2), this;
          }
          getPerceivedDistance() {
            return this.CAMERA_Z - this.rotationGroup.position.z;
          }
          setPerceivedDistance(t2) {
            this.rotationGroup.position.z = this.CAMERA_Z - t2;
          }
          setAutoEyeSeparation(t2, e2) {
            var i2 = this.getPerceivedDistance();
            return e2 || (e2 = 5), t2 || this.camera.position.x > 0 ? this.camera.position.x = i2 * Math.tan(Math.PI / 180 * e2) : this.camera.position.x = -i2 * Math.tan(Math.PI / 180 * e2), this.camera.lookAt(new $.Vector3(0, 0, this.rotationGroup.position.z)), this.camera.position.x;
          }
          setDefaultCartoonQuality(t2) {
            this.config.cartoonQuality = t2;
          }
        }
        function qt(t2, e2) {
          if (t2 = (0, L.getElement)(t2)) {
            e2 = e2 || {};
            try {
              return new GLViewer(t2, e2);
            } catch (t3) {
              throw "error creating viewer: " + t3;
            }
          }
        }
        function Yt(t2, e2 = {}, i2 = {}) {
          if (t2 = (0, L.getElement)(t2)) {
            var r2 = [], s2 = document.createElement("canvas");
            i2.rows = e2.rows, i2.cols = e2.cols, i2.control_all = null != e2.control_all && e2.control_all, t2.appendChild(s2);
            try {
              for (var n2 = 0; n2 < e2.rows; n2++) {
                for (var a2 = [], o2 = 0; o2 < e2.cols; o2++) {
                  i2.row = n2, i2.col = o2, i2.canvas = s2, i2.viewers = r2, i2.control_all = e2.control_all;
                  var l2 = qt(t2, (0, L.extend)({}, i2));
                  a2.push(l2);
                }
                r2.unshift(a2);
              }
            } catch (t3) {
              throw "error creating viewer grid: " + t3;
            }
            return r2;
          }
        }
        function Zt(t2) {
          var e2 = this;
          if (t2 = (0, L.getElement)(t2)) {
            var i2 = Yt(t2, { rows: 1, cols: 2, control_all: true });
            this.glviewer1 = i2[0][0], this.glviewer2 = i2[0][1], this.glviewer1.setAutoEyeSeparation(false), this.glviewer2.setAutoEyeSeparation(true), this.glviewer1.linkViewer(this.glviewer2), this.glviewer2.linkViewer(this.glviewer1);
            for (var r2 = Object.getOwnPropertyNames(this.glviewer1.__proto__).filter((function(t3) {
              return "function" == typeof e2.glviewer1[t3];
            })), s2 = 0; s2 < r2.length; s2++) this[r2[s2]] = /* @__PURE__ */ (function(t3) {
              return function() {
                return [this.glviewer1[t3].apply(this.glviewer1, arguments), this.glviewer2[t3].apply(this.glviewer2, arguments)];
              };
            })(r2[s2]);
            this.setCoordinates = function(t3, e3, i3) {
              for (var r3 = 0; r3 < t3.length; r3++) t3[r3].setCoordinates(e3, i3);
            }, this.surfacesFinished = function() {
              return this.glviewer1.surfacesFinished() && this.glviewer2.surfacesFinished();
            }, this.isAnimated = function() {
              return this.glviewer1.isAnimated() || this.glviewer2.isAnimated();
            }, this.render = function(t3) {
              this.glviewer1.render(), this.glviewer2.render(), t3 && t3(this);
            }, this.getCanvas = function() {
              return this.glviewer1.getCanvas();
            };
          }
        }
        GLViewer.numWorkers = 4, GLViewer.maxVolume = 64e3, GLViewer.surfaceTypeMap = { VDW: Q.VDW, MS: Q.MS, SAS: Q.SAS, SES: Q.SES };
        var Xt = false, Kt = false, Qt = {};
        function $t(t2, e2) {
          var i2, r2, n2;
          if (null != document.querySelector(".viewer_3Dmoljs") && (Xt = true), Xt) {
            Kt = true, t2 = null != t2 ? t2 : null;
            var a2 = 0;
            document.querySelectorAll(".viewer_3Dmoljs").forEach(((o2) => {
              var l2 = [], h2 = [], c2 = "";
              "static" == o2.style.position && (o2.style.position = "relative");
              var d2 = null;
              if (n2 = null, o2.dataset.pdb) l2.push("https://files.rcsb.org/view/" + o2.dataset.pdb + ".pdb"), h2.push("pdb");
              else if (o2.dataset.cid) h2.push("sdf"), l2.push("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + o2.dataset.cid + "/SDF?record_type=3d");
              else if (o2.dataset.href || o2.dataset.url) {
                if (c2 = o2.dataset.href ? o2.dataset.href : o2.dataset.url, l2.push(c2), "gz" == (n2 = c2.substring(c2.lastIndexOf(".") + 1))) {
                  let t3 = c2.substring(0, c2.lastIndexOf(".")).lastIndexOf(".");
                  n2 = c2.substring(t3 + 1);
                }
                h2.push(n2);
                var u2 = c2.substring(c2.lastIndexOf("/") + 1, c2.lastIndexOf("."));
                "/" == u2 && (u2 = c2.substring(c2.lastIndexOf("/") + 1)), o2.dataset[h2[h2.length - 1]] = u2;
              }
              let f2 = o2.dataset;
              for (i2 in f2) "pdb" === i2.substring(0, 3) && "pdb" !== i2 ? (l2.push("https://files.rcsb.org/view/" + f2[i2] + ".pdb"), h2.push("pdb")) : "href" === i2.substring(0, 4) && "href" !== i2 ? (c2 = f2[i2], l2.push(c2), h2.push(c2.substring(c2.lastIndexOf(".") + 1))) : "cid" === i2.substring(0, 3) && "cid" !== i2 && (l2.push("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + f2[i2] + "/SDF?record_type=3d"), h2.push("sdf"));
              var p2 = {};
              o2.dataset.options && (p2 = (0, L.specStringToObject)(o2.dataset.options));
              var g2 = s.CC.color(o2.dataset.backgroundcolor), m2 = o2.dataset.backgroundalpha;
              m2 = null == m2 ? 1 : parseFloat(m2);
              var v2 = { line: {} };
              o2.dataset.style && (v2 = (0, L.specStringToObject)(o2.dataset.style));
              var _2 = {};
              o2.dataset.select && (_2 = (0, L.specStringToObject)(o2.dataset.select));
              var y2 = [], b2 = [], x2 = [], w2 = {}, A2 = null, C2 = o2.dataset, S4 = /style(.+)/, M2 = /surface(.*)/, z2 = /labelres(.*)/, T2 = [];
              for (r2 in C2) Object.prototype.hasOwnProperty.call(C2, r2) && T2.push(r2);
              for (T2.sort(), i2 = 0; i2 < T2.length; i2++) {
                r2 = T2[i2];
                var E2, F2, I2, O2 = S4.exec(r2);
                O2 && (E2 = "select" + O2[1], F2 = (0, L.specStringToObject)(C2[E2]), I2 = (0, L.specStringToObject)(C2[r2]), y2.push([F2, I2])), (O2 = M2.exec(r2)) && (E2 = "select" + O2[1], F2 = (0, L.specStringToObject)(C2[E2]), I2 = (0, L.specStringToObject)(C2[r2]), b2.push([F2, I2])), (O2 = z2.exec(r2)) && (E2 = "select" + O2[1], F2 = (0, L.specStringToObject)(C2[E2]), I2 = (0, L.specStringToObject)(C2[r2]), x2.push([F2, I2])), "zoomto" == r2 && (w2 = (0, L.specStringToObject)(C2[r2])), "spin" == r2 && (A2 = (0, L.specStringToObject)(C2[r2]));
              }
              var D2 = function(t3) {
                for (t3.setStyle(_2, v2), d2 && d2.createSelectionAndStyle(_2, v2), i2 = 0; i2 < y2.length; i2++) {
                  let e3 = y2[i2][0] || {}, r3 = y2[i2][1] || { line: {} };
                  t3.setStyle(e3, r3), d2 && d2.createSelectionAndStyle(_2, v2);
                }
                for (i2 = 0; i2 < b2.length; i2++) {
                  let e3 = b2[i2][0] || {}, r3 = b2[i2][1] || {};
                  d2 ? t3.addSurface(Q.VDW, r3, e3, e3).then(((t4) => {
                    d2.loadSurface("VDW", e3, r3, t4);
                  })) : t3.addSurface(Q.VDW, r3, e3, e3);
                }
                for (i2 = 0; i2 < x2.length; i2++) {
                  let e3 = x2[i2][0] || {}, r3 = x2[i2][1] || {};
                  t3.addResLabels(e3, r3);
                }
                t3.render(), t3.zoomTo(w2), A2 && t3.spin(A2.axis, A2.speed);
              };
              let k2 = t2;
              try {
                var R2 = (0, L.specStringToObject)(o2.dataset.config) || {};
                void 0 === R2.backgroundColor && (R2.backgroundColor = g2), void 0 === R2.backgroundAlpha && (R2.backgroundAlpha = m2), null == k2 ? k2 = Qt[o2.id || a2++] = qt(o2, R2) : (k2.setBackgroundColor(g2, m2), k2.setConfig(R2), d2 && d2.initiateUI()), o2.dataset.ui && $3Dmol.StateManager && (d2 = new $3Dmol.StateManager(k2));
              } catch (t3) {
                console.log(t3), o2.textContent = "WebGL appears to be disabled.";
              }
              if (0 != l2.length) {
                let t3 = 0, i3 = /* @__PURE__ */ ((r3, s2) => function(n3) {
                  c2 = l2[t3];
                  var a3 = r3.dataset.type || r3.dataset.datatype || h2[t3];
                  if (s2.addModel(n3, a3, p2), d2) {
                    var o3 = r3.dataset[h2[t3]];
                    d2.setModelTitle(o3);
                  }
                  if (t3 += 1, t3 < l2.length) (0, L.get)(l2[t3]).then(i3);
                  else {
                    if (D2(s2), r3.dataset.callback) {
                      (0, L.makeFunction)(r3.dataset.callback)(s2);
                    }
                    Kt = false, e2 && e2(s2);
                  }
                })(o2, k2);
                n2 && n2.endsWith("gz") ? (0, L.getbin)(l2[0]).then(i3) : (0, L.get)(l2[0]).then(i3);
              } else {
                if (o2.dataset.element) {
                  var P2 = "#" + o2.dataset.element, U2 = document.querySelector(P2), B2 = U2 ? U2.textContent : "";
                  n2 = o2.dataset.type || o2.dataset.datatype, k2.addModel(B2, n2, p2);
                }
                if (D2(k2), o2.dataset.callback) {
                  (0, L.makeFunction)(o2.dataset.callback)(k2);
                }
                Kt = false, e2 && e2(k2);
              }
            }));
          }
        }
        document.onreadystatechange = () => {
          "complete" === document.readyState && $t();
        }, window && (window.$3Dmol = e);
      }, 865: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { CUBE: () => a });
        var r = i(638), s = i(392);
        const n = { 1: "H", 2: "He", 3: "Li", 4: "Be", 5: "B", 6: "C", 7: "N", 8: "O", 9: "F", 10: "Ne", 11: "Na", 12: "Mg", 13: "Al", 14: "Si", 15: "P", 16: "S", 17: "Cl", 18: "Ar", 19: "K", 20: "Ca", 21: "Sc", 22: "Ti", 23: "V", 24: "Cr", 25: "Mn", 26: "Fe", 27: "Co", 28: "Ni", 29: "Cu", 30: "Zn", 31: "Ga", 32: "Ge", 33: "As", 34: "Se", 35: "Br", 36: "Kr", 37: "Rb", 38: "Sr", 39: "Y", 40: "Zr", 41: "Nb", 42: "Mo", 43: "Tc", 44: "Ru", 45: "Rh", 46: "Pd", 47: "Ag", 48: "Cd", 49: "In", 50: "Sn", 51: "Sb", 52: "Te", 53: "I", 54: "Xe", 55: "Cs", 56: "Ba", 71: "Lu", 72: "Hf", 73: "Ta", 74: "W", 75: "Re", 76: "Os", 77: "Ir", 78: "Pt", 79: "Au", 80: "Hg", 81: "Tl", 82: "Pb", 83: "Bi", 84: "Po", 85: "At", 86: "Rn", 87: "Fr", 88: "Ra", 104: "Rf", 105: "Db", 106: "Sg", 107: "Bh", 108: "Hs", 109: "Mt", 110: "Ds", 111: "Rg", 112: "Cn", 113: "Nh", 114: "Fl", 115: "Mc", 116: "Lv", 117: "Ts", 118: "Og", 57: "La", 58: "Ce", 59: "Pr", 60: "Nd", 61: "Pm", 62: "Sm", 63: "Eu", 64: "Gd", 65: "Tb", 66: "Dy", 67: "Ho", 68: "Er", 69: "Tm", 70: "Yb", 89: "Ac", 90: "Th", 91: "Pa", 92: "U", 93: "Np", 94: "Pu", 95: "Am", 96: "Cm", 97: "Bk", 98: "Cf", 99: "Es", 100: "Fm", 101: "Md", 102: "No" };
        function a(t2, e2) {
          e2 = e2 || {};
          const i2 = [[]];
          let a2 = t2.split(/\r?\n/);
          const o = void 0 === e2.assignBonds || e2.assignBonds;
          if (a2.length < 6) return i2;
          let l = a2[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
          const h = Math.abs(parseFloat(l[0]));
          let c = { origin: void 0, size: void 0, unit: void 0, matrix4: void 0, matrix: void 0 };
          const d = c.origin = new r.Vector3(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3]));
          l = a2[3].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "), l = a2[3].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
          const u = l[0] > 0 ? 0.529177 : 1;
          d.multiplyScalar(u);
          const f = Math.abs(l[0]), p = new r.Vector3(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3])).multiplyScalar(u);
          l = a2[4].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
          const g = Math.abs(l[0]), m = new r.Vector3(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3])).multiplyScalar(u);
          l = a2[5].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
          const v = Math.abs(l[0]), _ = new r.Vector3(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3])).multiplyScalar(u);
          if (c.size = { x: f, y: g, z: v }, c.unit = new r.Vector3(p.x, m.y, _.z), 0 != p.y || 0 != p.z || 0 != m.x || 0 != m.z || 0 != _.x || 0 != _.y) {
            c.matrix4 = new r.Matrix4(p.x, m.x, _.x, 0, p.y, m.y, _.y, 0, p.z, m.z, _.z, 0, 0, 0, 0, 1);
            let t3 = new r.Matrix4().makeTranslation(d.x, d.y, d.z);
            c.matrix4 = c.matrix4.multiplyMatrices(t3, c.matrix4), c.matrix = c.matrix4.matrix3FromTopLeft(), c.origin = new r.Vector3(0, 0, 0), c.unit = new r.Vector3(1, 1, 1);
          }
          i2.modelData = [{ cryst: c }], a2 = a2.splice(6, h);
          for (var y = i2[i2.length - 1].length, b = y + a2.length, x = y; x < b; ++x) {
            var w = {};
            w.serial = x;
            var A = a2[x - y].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
            w.elem = n[A[0]], w.x = parseFloat(A[2]) * u, w.y = parseFloat(A[3]) * u, w.z = parseFloat(A[4]) * u, w.hetflag = true, w.bonds = [], w.bondOrder = [], w.properties = {}, i2[i2.length - 1].push(w);
          }
          if (o) for (let t3 = 0; t3 < i2.length; t3++) (0, s.assignBonds)(i2[t3], e2);
          return i2;
        }
      }, 797: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { VASP: () => n });
        var r = i(638), s = i(392);
        function n(t2, e2 = {}) {
          var i2 = [[]], n2 = {};
          const a = void 0 === e2.assignBonds || e2.assignBonds;
          var o = t2.replace(/^\s+/, "").split(/\r?\n/);
          if (o.length < 3) return i2;
          if (!o[1].match(/\d+/)) return console.log("Warning: second line of the vasp structure file must be a number"), i2;
          if (n2.length = parseFloat(o[1]), n2.length < 0) return console.log("Warning: Vasp implementation for negative lattice lengths is not yet available"), i2;
          n2.xVec = new Float32Array(o[2].replace(/^\s+/, "").split(/\s+/)), n2.yVec = new Float32Array(o[3].replace(/^\s+/, "").split(/\s+/)), n2.zVec = new Float32Array(o[4].replace(/^\s+/, "").split(/\s+/));
          var l = new r.Matrix3(n2.xVec[0], n2.xVec[1], n2.xVec[2], n2.yVec[0], n2.yVec[1], n2.yVec[2], n2.zVec[0], n2.zVec[1], n2.zVec[2]);
          l.multiplyScalar(n2.length), i2.modelData = [{ symmetries: [], cryst: { matrix: l } }];
          var h = o[5].trim().split(/\s+/), c = new Int16Array(o[6].trim().split(/\s+/)), d = o[7].trim(), u = false;
          if (d.match(/S/) && (u = true, d = o[8].trim()), "c" == d.toLowerCase()[0]) d = "cartesian";
          else {
            if ("d" != d.toLowerCase()[0]) return console.log("Warning: Unknown vasp mode in POSCAR file: mode must be either C(artesian) or D(irect)"), i2;
            d = "direct";
          }
          if (h.length != c.length) return console.log("Warning: declaration of atomary species wrong:"), console.log(h), console.log(c), i2;
          u ? o.splice(0, 9) : o.splice(0, 8);
          for (var f = 0, p = 0, g = h.length; p < g; p++) {
            for (var m = h[p], v = 0, _ = c[p]; v < _; v++) {
              var y = new Float32Array(o[f + v].trim().split(/\s+/)), b = {};
              b.elem = m, "cartesian" == d ? (b.x = n2.length * y[0], b.y = n2.length * y[1], b.z = n2.length * y[2]) : (b.x = n2.length * (y[0] * n2.xVec[0] + y[1] * n2.yVec[0] + y[2] * n2.zVec[0]), b.y = n2.length * (y[0] * n2.xVec[1] + y[1] * n2.yVec[1] + y[2] * n2.zVec[1]), b.z = n2.length * (y[0] * n2.xVec[2] + y[1] * n2.yVec[2] + y[2] * n2.zVec[2])), b.bonds = [], b.bondOrder = [], i2[0].push(b);
            }
            f += c[p];
          }
          if (a) for (let t3 = 0; t3 < i2.length; t3++) (0, s.assignBonds)(i2[t3], e2);
          return i2;
        }
      }, 408: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { areConnected: () => n });
        var r = i(40);
        const s = /* @__PURE__ */ new Set(["Na", "K", "Ca", "Mg", "Mn", "Sr"]);
        function n(t2, e2, i2) {
          if (i2 && i2.unboundCations && (s.has(t2.elem) || s.has(e2.elem))) return false;
          let n2 = (0, r.bondLength)(t2.elem) + (0, r.bondLength)(e2.elem);
          n2 += 0.25, n2 *= n2;
          let a = t2.x - e2.x;
          if (a *= a, a > n2) return false;
          let o = t2.y - e2.y;
          if (o *= o, o > n2) return false;
          let l = t2.z - e2.z;
          if (l *= l, l > n2) return false;
          const h = a + o + l;
          return !(isNaN(h) || h < 0.5 || h > n2 || t2.altLoc !== e2.altLoc && "" !== t2.altLoc.trim() && "" !== e2.altLoc.trim());
        }
      }, 392: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { assignBonds: () => a });
        var r = i(408);
        const s = [{ x: 0, y: 0, z: 1 }, { x: 0, y: 1, z: -1 }, { x: 0, y: 1, z: 0 }, { x: 0, y: 1, z: 1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: -1, z: 0 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 0, z: -1 }, { x: 1, y: 0, z: 0 }, { x: 1, y: 0, z: 1 }, { x: 1, y: 1, z: -1 }, { x: 1, y: 1, z: 0 }, { x: 1, y: 1, z: 1 }], n = 4.95;
        function a(t2, e2) {
          for (let e3 = 0, i3 = t2.length; e3 < i3; e3++) t2[e3].index || (t2[e3].index = e3);
          const i2 = { x: { y: { z: [] } } };
          for (let e3 = 0; e3 < t2.length; e3++) {
            const r2 = t2[e3], s2 = Math.floor(r2.x / n), a3 = Math.floor(r2.y / n), o = Math.floor(r2.z / n);
            i2[s2] || (i2[s2] = {}), i2[s2][a3] || (i2[s2][a3] = {}), i2[s2][a3][o] || (i2[s2][a3][o] = []), i2[s2][a3][o].push(r2);
          }
          function a2(t3, i3) {
            for (let s2 = 0; s2 < t3.length; s2++) {
              const n2 = t3[s2];
              for (let t4 = 0; t4 < i3.length; t4++) {
                const s3 = i3[t4];
                if ((0, r.areConnected)(n2, s3, e2)) {
                  const t5 = n2.bonds.indexOf(s3.index), e3 = s3.bonds.indexOf(n2.index);
                  -1 === t5 && -1 === e3 ? (n2.bonds.push(s3.index), n2.bondOrder.push(1), s3.bonds.push(n2.index), s3.bondOrder.push(1)) : -1 === t5 ? (n2.bonds.push(s3.index), n2.bondOrder.push(s3.bondOrder[e3])) : -1 === e3 && (s3.bonds.push(n2.index), s3.bondOrder.push(n2.bondOrder[t5]));
                }
              }
            }
          }
          for (let t3 in i2) {
            const n2 = parseInt(t3);
            for (let t4 in i2[n2]) {
              const o = parseInt(t4);
              for (let t5 in i2[n2][o]) {
                const l = parseInt(t5), h = i2[n2][o][l];
                for (let t6 = 0; t6 < h.length; t6++) {
                  const i3 = h[t6];
                  for (let s2 = t6 + 1; s2 < h.length; s2++) {
                    const t7 = h[s2];
                    (0, r.areConnected)(i3, t7, e2) && -1 == i3.bonds.indexOf(t7.index) && (i3.bonds.push(t7.index), i3.bondOrder.push(1), t7.bonds.push(i3.index), t7.bondOrder.push(1));
                  }
                }
                for (let t6 = 0; t6 < s.length; t6++) {
                  const e3 = s[t6];
                  if (!i2[n2 + e3.x] || !i2[n2 + e3.x][o + e3.y] || !i2[n2 + e3.x][o + e3.y][l + e3.z]) continue;
                  a2(h, i2[n2 + e3.x][o + e3.y][l + e3.z]);
                }
              }
            }
          }
        }
      }, 40: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { bondLength: () => s, bondTable: () => r, setBondLength: () => n });
        let r = { H: 0.37, He: 0.32, Li: 1.34, Be: 0.9, B: 0.82, C: 0.77, N: 0.75, O: 0.73, F: 0.71, Ne: 0.69, Na: 1.54, Mg: 1.3, Al: 1.18, Si: 1.11, P: 1.06, S: 1.02, Cl: 0.99, Ar: 0.97, K: 1.96, Ca: 1.74, Sc: 1.44, Ti: 1.56, V: 1.25, Mn: 1.39, Fe: 1.25, Co: 1.26, Ni: 1.21, Cu: 1.38, Zn: 1.31, Ga: 1.26, Ge: 1.22, Se: 1.16, Br: 1.14, Kr: 1.1, Rb: 2.11, Sr: 1.92, Y: 1.62, Zr: 1.48, Nb: 1.37, Mo: 1.45, Tc: 1.56, Ru: 1.26, Rh: 1.35, Pd: 1.31, Ag: 1.53, Cd: 1.48, In: 1.44, Sn: 1.41, Sb: 1.38, Te: 1.35, I: 1.33, Xe: 1.3, Cs: 2.25, Ba: 1.98, Lu: 1.6, Hf: 1.5, Ta: 1.38, W: 1.46, Re: 1.59, Os: 1.44, Ir: 1.37, Pt: 1.28, Au: 1.44, Hg: 1.49, Tl: 1.48, Pb: 1.47, Bi: 1.46, Rn: 1.45 };
        function s(t2) {
          return r[t2] || 1.6;
        }
        function n(t2, e2) {
          e2 < 0 && (e2 = 0), r[t2] = e2;
        }
      }, 864: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { PausableTimer: () => PausableTimer, adjustVolumeStyle: () => adjustVolumeStyle, base64ToArray: () => base64ToArray, deepCopy: () => deepCopy, download: () => download, extend: () => extend, get: () => get, getAtomProperty: () => getAtomProperty, getColorFromStyle: () => getColorFromStyle, getElement: () => getElement, getExtent: () => getExtent, getPropertyRange: () => getPropertyRange, getbin: () => getbin, inflateString: () => inflateString, isEmptyObject: () => isEmptyObject, isNumeric: () => isNumeric, makeFunction: () => makeFunction, mergeGeos: () => mergeGeos, specStringToObject: () => specStringToObject });
        var _Gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546), _VolumeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(848), _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(222), pako__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
        function extend(t, e) {
          for (var i in e) e.hasOwnProperty(i) && void 0 !== e[i] && (t[i] = e[i]);
          return t;
        }
        function deepCopy(t) {
          let e, i, r;
          if (null == t) return {};
          if ("object" != typeof t || null === t) return t;
          for (r in e = Array.isArray(t) ? [] : {}, t) i = t[r], e[r] = deepCopy(i);
          return e;
        }
        function isNumeric(t) {
          var e = typeof t;
          return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
        }
        function isEmptyObject(t) {
          var e;
          for (e in t) return false;
          return true;
        }
        function makeFunction(callback) {
          return callback && "string" == typeof callback && (callback = eval("(" + callback + ")")), callback && "function" != typeof callback ? (console.warn("Invalid callback provided."), () => {
          }) : callback;
        }
        function adjustVolumeStyle(t) {
          t && (!t.volformat || t.voldata instanceof _VolumeData__WEBPACK_IMPORTED_MODULE_1__.VolumeData || (t.voldata = new _VolumeData__WEBPACK_IMPORTED_MODULE_1__.VolumeData(t.voldata, t.volformat)), t.volscheme && (t.volscheme = _Gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient.getGradient(t.volscheme)));
        }
        function getExtent(t, e) {
          var i, r, s, n, a, o, l, h, c, d, u = !e;
          if (i = r = s = 9999, n = a = o = -9999, l = h = c = d = 0, 0 === t.length) return [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
          for (var f = 0; f < t.length; f++) {
            var p = t[f];
            if (void 0 !== p && isFinite(p.x) && isFinite(p.y) && isFinite(p.z) && (d++, l += p.x, h += p.y, c += p.z, i = i < p.x ? i : p.x, r = r < p.y ? r : p.y, s = s < p.z ? s : p.z, n = n > p.x ? n : p.x, a = a > p.y ? a : p.y, o = o > p.z ? o : p.z, p.symmetries && u)) for (var g = 0; g < p.symmetries.length; g++) d++, l += p.symmetries[g].x, h += p.symmetries[g].y, c += p.symmetries[g].z, i = i < p.symmetries[g].x ? i : p.symmetries[g].x, r = r < p.symmetries[g].y ? r : p.symmetries[g].y, s = s < p.symmetries[g].z ? s : p.symmetries[g].z, n = n > p.symmetries[g].x ? n : p.symmetries[g].x, a = a > p.symmetries[g].y ? a : p.symmetries[g].y, o = o > p.symmetries[g].z ? o : p.symmetries[g].z;
          }
          return [[i, r, s], [n, a, o], [l / d, h / d, c / d]];
        }
        function getPropertyRange(t, e) {
          for (var i = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY, s = 0, n = t.length; s < n; s++) {
            var a = getAtomProperty(t[s], e);
            null != a && (a < i && (i = a), a > r && (r = a));
          }
          return isFinite(i) || isFinite(r) ? isFinite(i) ? isFinite(r) || (r = i) : i = r : i = r = 0, [i, r];
        }
        class PausableTimer {
          constructor(t, e, i) {
            this.total_time_run = 0, this.fn = t, this.arg = i, this.countdown = e, this.start_time = (/* @__PURE__ */ new Date()).getTime(), this.ident = setTimeout(t, e, i);
          }
          cancel() {
            clearTimeout(this.ident);
          }
          pause() {
            clearTimeout(this.ident), this.total_time_run = (/* @__PURE__ */ new Date()).getTime() - this.start_time;
          }
          resume() {
            this.ident = setTimeout(this.fn, Math.max(0, this.countdown - this.total_time_run), this.arg);
          }
        }
        function base64ToArray(t) {
          for (var e = window.atob(t), i = e.length, r = new Uint8Array(i), s = 0; s < i; s++) r[s] = e.charCodeAt(s);
          return r;
        }
        function getAtomProperty(t, e) {
          var i = null;
          return t.properties && void 0 !== t.properties[e] ? i = t.properties[e] : void 0 !== t[e] && (i = t[e]), i;
        }
        function mergeGeos(t, e) {
          var i = e.geometry;
          void 0 !== i && t.geometryGroups.push(i.geometryGroups[0]);
        }
        function specStringToObject(t) {
          if ("object" == typeof t) return t;
          if (void 0 === t || null == t) return t;
          try {
            return JSON.parse(t);
          } catch (t2) {
          }
          var e = function(t2) {
            return isNumeric(t2) ? Math.floor(parseFloat(t2)) == parseInt(t2) || t2.indexOf(".") >= 0 ? parseFloat(t2) : parseInt(t2) : "true" === t2 || "false" !== t2 && t2;
          }, i = {};
          if ("all" === (t = t.replace(/%7E/g, "~"))) return i;
          for (var r = t.split(";"), s = 0; s < r.length; s++) {
            var n = r[s].split(":"), a = n[0], o = {}, l = n[1];
            if (l) if (-1 !== (l = l.replace(/~/g, "=")).indexOf("=")) for (var h = l.split(","), c = 0; c < h.length; c++) {
              var d = h[c].split("=", 2);
              o[d[0]] = e(d[1]);
            }
            else o = -1 !== l.indexOf(",") ? l.split(",") : e(l);
            i[a] = o;
          }
          return i;
        }
        function checkStatus(t) {
          if (!t.ok) throw new Error(`HTTP ${t.status} - ${t.statusText}`);
          return t;
        }
        function get(t, e) {
          var i = fetch(t).then(checkStatus).then(((t2) => t2.text()));
          return e ? i.then(e) : i;
        }
        function getbin(t, e, i, r) {
          var s;
          return s = "POST" == i ? fetch(t, { method: "POST", body: r }).then(((t2) => checkStatus(t2))).then(((t2) => t2.arrayBuffer())) : fetch(t).then(((t2) => checkStatus(t2))).then(((t2) => t2.arrayBuffer())), e ? s.then(e) : s;
        }
        function download(t, e, i, r) {
          var s = "", n = "", a = "", o = null, l = e.addModel();
          if (t.indexOf(":") < 0 && (t = 4 == t.length ? "pdb:" + t : isNaN(t) ? "url:" + t : "cid:" + t), "mmtf:" == t.substring(0, 5) && (console.warn("WARNING: MMTF now deprecated.  Reverting to bcif."), t = "bcif:" + t.slice(5)), "bcif:" === t.substring(0, 5)) t = t.substring(5).toUpperCase(), a = "https://models.rcsb.org/" + t + ".bcif.gz", i && void 0 === i.noComputeSecondaryStructure && (i.noComputeSecondaryStructure = true), o = new Promise((function(t2) {
            getbin(a).then((function(r2) {
              l.addMolData(r2, "bcif.gz", i), e.zoomTo(), e.render(), t2(l);
            }), (function() {
              console.error("fetch of " + a + " failed.");
            }));
          }));
          else {
            if ("pdb:" === t.substring(0, 4)) {
              if (s = "bcif", i && i.format && (s = i.format), i && void 0 === i.noComputeSecondaryStructure && (i.noComputeSecondaryStructure = true), !(t = t.substring(4).toUpperCase()).match(/^[1-9][A-Za-z0-9]{3}$/)) return void alert("Wrong PDB ID");
              "bcif" == s ? a = "https://models.rcsb.org/" + t.toUpperCase() + ".bcif.gz" : (n = i && i.pdbUri ? i.pdbUri : "https://files.rcsb.org/view/", a = n + t + "." + s);
            } else if ("cid:" == t.substring(0, 4)) {
              if (s = "sdf", !(t = t.substring(4)).match(/^[0-9]+$/)) return void alert("Wrong Compound ID");
              a = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + t + "/SDF?record_type=3d";
            } else "url:" == t.substring(0, 4) && (a = t.substring(4), s = a);
            var h = function(t2) {
              l.addMolData(t2, s, i), e.zoomTo(), e.render();
            };
            o = new Promise((function(e2) {
              "bcif" == s ? getbin(a).then((function(t2) {
                h(t2), e2(l);
              })).catch((function() {
                n = i && i.pdbUri ? i.pdbUri : "https://files.rcsb.org/view/", a = n + t + ".pdb", s = "pdb", console.warn("falling back to pdb format"), get(a).then((function(t2) {
                  h(t2), e2(l);
                })).catch((function(t2) {
                  h(""), e2(l), console.error("fetch of " + a + " failed: " + t2.statusText);
                }));
              })) : get(a).then((function(t2) {
                h(t2), e2(l);
              })).catch((function(t2) {
                h(""), e2(l), console.error("fetch of " + a + " failed: " + t2.statusText);
              }));
            }));
          }
          return r ? (o.then((function(t2) {
            r(t2);
          })), l) : o;
        }
        function getColorFromStyle(t, e) {
          let i = e.colorscheme;
          if (void 0 !== _colors__WEBPACK_IMPORTED_MODULE_2__.builtinColorSchemes[i]) i = _colors__WEBPACK_IMPORTED_MODULE_2__.builtinColorSchemes[i];
          else if ("string" == typeof i && i.endsWith("Carbon")) {
            let t2 = i.substring(0, i.lastIndexOf("Carbon")).toLowerCase();
            if (void 0 !== _colors__WEBPACK_IMPORTED_MODULE_2__.htmlColors[t2]) {
              let e2 = Object.assign({}, _colors__WEBPACK_IMPORTED_MODULE_2__.elementColors.defaultColors);
              e2.C = _colors__WEBPACK_IMPORTED_MODULE_2__.htmlColors[t2], _colors__WEBPACK_IMPORTED_MODULE_2__.builtinColorSchemes[i] = { prop: "elem", map: e2 }, i = _colors__WEBPACK_IMPORTED_MODULE_2__.builtinColorSchemes[i];
            }
          }
          let r = t.color;
          if (void 0 !== e.color && "spectrum" != e.color && (r = e.color), void 0 !== i) {
            let n, a;
            if (void 0 !== _colors__WEBPACK_IMPORTED_MODULE_2__.elementColors[i]) i = _colors__WEBPACK_IMPORTED_MODULE_2__.elementColors[i], void 0 !== i[t[i.prop]] && (r = i.map[t[i.prop]]);
            else if (void 0 !== i[t[i.prop]]) r = i.map[t[i.prop]];
            else if (void 0 !== i.prop && void 0 !== i.gradient) {
              n = i.prop;
              var s = i.gradient;
              s instanceof _Gradient__WEBPACK_IMPORTED_MODULE_0__.GradientType || (s = (0, _Gradient__WEBPACK_IMPORTED_MODULE_0__.getGradient)(i));
              let e2 = s.range() || [-1, 1];
              a = getAtomProperty(t, n), null != a && (r = s.valueToHex(a, e2));
            } else void 0 !== i.prop && void 0 !== i.map ? (n = i.prop, a = getAtomProperty(t, n), void 0 !== i.map[a] && (r = i.map[a])) : void 0 !== e.colorscheme[t.elem] ? r = e.colorscheme[t.elem] : console.warn("Could not interpret colorscheme " + i);
          } else void 0 !== e.colorfunc && (r = e.colorfunc(t));
          return _colors__WEBPACK_IMPORTED_MODULE_2__.CC.color(r);
        }
        function getElement(t) {
          let e = t;
          return "string" == typeof t ? e = document.querySelector("#" + t) : "object" == typeof t && t.get && (e = t.get(0)), e;
        }
        function inflateString(t, e = true) {
          let i;
          if ("string" == typeof t) {
            i = new TextEncoder().encode(t);
          } else i = new Uint8Array(t);
          return (0, pako__WEBPACK_IMPORTED_MODULE_3__.inflate)(i, { to: e ? "string" : null });
        }
      }, 111: (t, e, i) => {
        var r;
        r = {}, t.exports = r, (function(t2, e2) {
          t2.toRGBA8 = function(e3) {
            var i2 = e3.width, r2 = e3.height;
            if (null == e3.tabs.acTL) return [t2.toRGBA8.decodeImage(e3.data, i2, r2, e3).buffer];
            var s = [];
            null == e3.frames[0].data && (e3.frames[0].data = e3.data);
            for (var n, a = new Uint8Array(i2 * r2 * 4), o = 0; o < e3.frames.length; o++) {
              var l = e3.frames[o], h = l.rect.x, c = l.rect.y, d = l.rect.width, u = l.rect.height, f = t2.toRGBA8.decodeImage(l.data, d, u, e3);
              if (0 == o ? n = f : 0 == l.blend ? t2._copyTile(f, d, u, n, i2, r2, h, c, 0) : 1 == l.blend && t2._copyTile(f, d, u, n, i2, r2, h, c, 1), s.push(n.buffer), n = n.slice(0), 0 == l.dispose) ;
              else if (1 == l.dispose) t2._copyTile(a, d, u, n, i2, r2, h, c, 0);
              else if (2 == l.dispose) {
                for (var p = o - 1; 2 == e3.frames[p].dispose; ) p--;
                n = new Uint8Array(s[p]).slice(0);
              }
            }
            return s;
          }, t2.toRGBA8.decodeImage = function(e3, i2, r2, s) {
            var n = i2 * r2, a = t2.decode._getBPP(s), o = Math.ceil(i2 * a / 8), l = new Uint8Array(4 * n), h = new Uint32Array(l.buffer), c = s.ctype, d = s.depth, u = t2._bin.readUshort;
            if (6 == c) {
              var f = n << 2;
              if (8 == d) for (var p = 0; p < f; p++) l[p] = e3[p];
              if (16 == d) for (p = 0; p < f; p++) l[p] = e3[p << 1];
            } else if (2 == c) {
              var g = s.tabs.tRNS, m = -1, v = -1, _ = -1;
              if (g && (m = g[0], v = g[1], _ = g[2]), 8 == d) for (p = 0; p < n; p++) {
                var y = 3 * p;
                l[M = p << 2] = e3[y], l[M + 1] = e3[y + 1], l[M + 2] = e3[y + 2], l[M + 3] = 255, -1 != m && e3[y] == m && e3[y + 1] == v && e3[y + 2] == _ && (l[M + 3] = 0);
              }
              if (16 == d) for (p = 0; p < n; p++) y = 6 * p, l[M = p << 2] = e3[y], l[M + 1] = e3[y + 2], l[M + 2] = e3[y + 4], l[M + 3] = 255, -1 != m && u(e3, y) == m && u(e3, y + 2) == v && u(e3, y + 4) == _ && (l[M + 3] = 0);
            } else if (3 == c) {
              var b = s.tabs.PLTE, x = s.tabs.tRNS, w = x ? x.length : 0;
              if (1 == d) for (var A = 0; A < r2; A++) {
                var C = A * o, S3 = A * i2;
                for (p = 0; p < i2; p++) {
                  var M = S3 + p << 2, z = 3 * (T = e3[C + (p >> 3)] >> 7 - (7 & p) & 1);
                  l[M] = b[z], l[M + 1] = b[z + 1], l[M + 2] = b[z + 2], l[M + 3] = T < w ? x[T] : 255;
                }
              }
              if (2 == d) for (A = 0; A < r2; A++) for (C = A * o, S3 = A * i2, p = 0; p < i2; p++) M = S3 + p << 2, z = 3 * (T = e3[C + (p >> 2)] >> 6 - ((3 & p) << 1) & 3), l[M] = b[z], l[M + 1] = b[z + 1], l[M + 2] = b[z + 2], l[M + 3] = T < w ? x[T] : 255;
              if (4 == d) for (A = 0; A < r2; A++) for (C = A * o, S3 = A * i2, p = 0; p < i2; p++) M = S3 + p << 2, z = 3 * (T = e3[C + (p >> 1)] >> 4 - ((1 & p) << 2) & 15), l[M] = b[z], l[M + 1] = b[z + 1], l[M + 2] = b[z + 2], l[M + 3] = T < w ? x[T] : 255;
              if (8 == d) for (p = 0; p < n; p++) {
                var T;
                M = p << 2, z = 3 * (T = e3[p]), l[M] = b[z], l[M + 1] = b[z + 1], l[M + 2] = b[z + 2], l[M + 3] = T < w ? x[T] : 255;
              }
            } else if (4 == c) {
              if (8 == d) for (p = 0; p < n; p++) {
                M = p << 2;
                var E = e3[L = p << 1];
                l[M] = E, l[M + 1] = E, l[M + 2] = E, l[M + 3] = e3[L + 1];
              }
              if (16 == d) for (p = 0; p < n; p++) {
                var L;
                M = p << 2, E = e3[L = p << 2], l[M] = E, l[M + 1] = E, l[M + 2] = E, l[M + 3] = e3[L + 2];
              }
            } else if (0 == c) {
              if (m = s.tabs.tRNS ? s.tabs.tRNS : -1, 1 == d) for (p = 0; p < n; p++) {
                var F = (E = 255 * (e3[p >> 3] >> 7 - (7 & p) & 1)) == 255 * m ? 0 : 255;
                h[p] = F << 24 | E << 16 | E << 8 | E;
              }
              if (2 == d) for (p = 0; p < n; p++) F = (E = 85 * (e3[p >> 2] >> 6 - ((3 & p) << 1) & 3)) == 85 * m ? 0 : 255, h[p] = F << 24 | E << 16 | E << 8 | E;
              if (4 == d) for (p = 0; p < n; p++) F = (E = 17 * (e3[p >> 1] >> 4 - ((1 & p) << 2) & 15)) == 17 * m ? 0 : 255, h[p] = F << 24 | E << 16 | E << 8 | E;
              if (8 == d) for (p = 0; p < n; p++) F = (E = e3[p]) == m ? 0 : 255, h[p] = F << 24 | E << 16 | E << 8 | E;
              if (16 == d) for (p = 0; p < n; p++) E = e3[p << 1], F = u(e3, p << 1) == m ? 0 : 255, h[p] = F << 24 | E << 16 | E << 8 | E;
            }
            return l;
          }, t2.decode = function(e3) {
            for (var i2, r2 = new Uint8Array(e3), s = 8, n = t2._bin, a = n.readUshort, o = n.readUint, l = { tabs: {}, frames: [] }, h = new Uint8Array(r2.length), c = 0, d = 0, u = [137, 80, 78, 71, 13, 10, 26, 10], f = 0; f < 8; f++) if (r2[f] != u[f]) throw "The input is not a PNG file!";
            for (; s < r2.length; ) {
              var p = n.readUint(r2, s);
              s += 4;
              var g = n.readASCII(r2, s, 4);
              if (s += 4, "IHDR" == g) t2.decode._IHDR(r2, s, l);
              else if ("IDAT" == g) {
                for (f = 0; f < p; f++) h[c + f] = r2[s + f];
                c += p;
              } else if ("acTL" == g) l.tabs[g] = { num_frames: o(r2, s), num_plays: o(r2, s + 4) }, i2 = new Uint8Array(r2.length);
              else if ("fcTL" == g) {
                0 != d && ((C = l.frames[l.frames.length - 1]).data = t2.decode._decompress(l, i2.slice(0, d), C.rect.width, C.rect.height), d = 0);
                var m = { x: o(r2, s + 12), y: o(r2, s + 16), width: o(r2, s + 4), height: o(r2, s + 8) }, v = a(r2, s + 22);
                v = a(r2, s + 20) / (0 == v ? 100 : v);
                var _ = { rect: m, delay: Math.round(1e3 * v), dispose: r2[s + 24], blend: r2[s + 25] };
                l.frames.push(_);
              } else if ("fdAT" == g) {
                for (f = 0; f < p - 4; f++) i2[d + f] = r2[s + f + 4];
                d += p - 4;
              } else if ("pHYs" == g) l.tabs[g] = [n.readUint(r2, s), n.readUint(r2, s + 4), r2[s + 8]];
              else if ("cHRM" == g) for (l.tabs[g] = [], f = 0; f < 8; f++) l.tabs[g].push(n.readUint(r2, s + 4 * f));
              else if ("tEXt" == g) {
                null == l.tabs[g] && (l.tabs[g] = {});
                var y = n.nextZero(r2, s), b = n.readASCII(r2, s, y - s), x = n.readASCII(r2, y + 1, s + p - y - 1);
                l.tabs[g][b] = x;
              } else if ("iTXt" == g) {
                null == l.tabs[g] && (l.tabs[g] = {}), y = 0;
                var w = s;
                y = n.nextZero(r2, w), b = n.readASCII(r2, w, y - w), r2[w = y + 1], r2[w + 1], w += 2, y = n.nextZero(r2, w), n.readASCII(r2, w, y - w), w = y + 1, y = n.nextZero(r2, w), n.readUTF8(r2, w, y - w), w = y + 1, x = n.readUTF8(r2, w, p - (w - s)), l.tabs[g][b] = x;
              } else if ("PLTE" == g) l.tabs[g] = n.readBytes(r2, s, p);
              else if ("hIST" == g) {
                var A = l.tabs.PLTE.length / 3;
                for (l.tabs[g] = [], f = 0; f < A; f++) l.tabs[g].push(a(r2, s + 2 * f));
              } else if ("tRNS" == g) 3 == l.ctype ? l.tabs[g] = n.readBytes(r2, s, p) : 0 == l.ctype ? l.tabs[g] = a(r2, s) : 2 == l.ctype && (l.tabs[g] = [a(r2, s), a(r2, s + 2), a(r2, s + 4)]);
              else if ("gAMA" == g) l.tabs[g] = n.readUint(r2, s) / 1e5;
              else if ("sRGB" == g) l.tabs[g] = r2[s];
              else if ("bKGD" == g) 0 == l.ctype || 4 == l.ctype ? l.tabs[g] = [a(r2, s)] : 2 == l.ctype || 6 == l.ctype ? l.tabs[g] = [a(r2, s), a(r2, s + 2), a(r2, s + 4)] : 3 == l.ctype && (l.tabs[g] = r2[s]);
              else if ("IEND" == g) {
                var C;
                0 != d && ((C = l.frames[l.frames.length - 1]).data = t2.decode._decompress(l, i2.slice(0, d), C.rect.width, C.rect.height), d = 0), l.data = t2.decode._decompress(l, h, l.width, l.height);
                break;
              }
              s += p, n.readUint(r2, s), s += 4;
            }
            return delete l.compress, delete l.interlace, delete l.filter, l;
          }, t2.decode._decompress = function(e3, i2, r2, s) {
            return 0 == e3.compress && (i2 = t2.decode._inflate(i2)), 0 == e3.interlace ? i2 = t2.decode._filterZero(i2, e3, 0, r2, s) : 1 == e3.interlace && (i2 = t2.decode._readInterlace(i2, e3)), i2;
          }, t2.decode._inflate = function(t3) {
            return e2.inflate(t3);
          }, t2.decode._readInterlace = function(e3, i2) {
            for (var r2 = i2.width, s = i2.height, n = t2.decode._getBPP(i2), a = n >> 3, o = Math.ceil(r2 * n / 8), l = new Uint8Array(s * o), h = 0, c = [0, 0, 4, 0, 2, 0, 1], d = [0, 4, 0, 2, 0, 1, 0], u = [8, 8, 8, 4, 4, 2, 2], f = [8, 8, 4, 4, 2, 2, 1], p = 0; p < 7; ) {
              for (var g = u[p], m = f[p], v = 0, _ = 0, y = c[p]; y < s; ) y += g, _++;
              for (var b = d[p]; b < r2; ) b += m, v++;
              var x = Math.ceil(v * n / 8);
              t2.decode._filterZero(e3, i2, h, v, _);
              for (var w = 0, A = c[p]; A < s; ) {
                for (var C = d[p], S3 = h + w * x << 3; C < r2; ) {
                  var M;
                  if (1 == n && (M = (M = e3[S3 >> 3]) >> 7 - (7 & S3) & 1, l[A * o + (C >> 3)] |= M << 7 - (3 & C)), 2 == n && (M = (M = e3[S3 >> 3]) >> 6 - (7 & S3) & 3, l[A * o + (C >> 2)] |= M << 6 - ((3 & C) << 1)), 4 == n && (M = (M = e3[S3 >> 3]) >> 4 - (7 & S3) & 15, l[A * o + (C >> 1)] |= M << 4 - ((1 & C) << 2)), n >= 8) for (var z = A * o + C * a, T = 0; T < a; T++) l[z + T] = e3[(S3 >> 3) + T];
                  S3 += n, C += m;
                }
                w++, A += g;
              }
              v * _ != 0 && (h += _ * (1 + x)), p += 1;
            }
            return l;
          }, t2.decode._getBPP = function(t3) {
            return [1, null, 3, 1, 2, null, 4][t3.ctype] * t3.depth;
          }, t2.decode._filterZero = function(e3, i2, r2, s, n) {
            var a = t2.decode._getBPP(i2), o = Math.ceil(s * a / 8), l = t2.decode._paeth;
            a = Math.ceil(a / 8);
            for (var h = 0; h < n; h++) {
              var c = r2 + h * o, d = c + h + 1, u = e3[d - 1];
              if (0 == u) for (var f = 0; f < o; f++) e3[c + f] = e3[d + f];
              else if (1 == u) {
                for (f = 0; f < a; f++) e3[c + f] = e3[d + f];
                for (f = a; f < o; f++) e3[c + f] = e3[d + f] + e3[c + f - a] & 255;
              } else if (0 == h) {
                for (f = 0; f < a; f++) e3[c + f] = e3[d + f];
                if (2 == u) for (f = a; f < o; f++) e3[c + f] = 255 & e3[d + f];
                if (3 == u) for (f = a; f < o; f++) e3[c + f] = e3[d + f] + (e3[c + f - a] >> 1) & 255;
                if (4 == u) for (f = a; f < o; f++) e3[c + f] = e3[d + f] + l(e3[c + f - a], 0, 0) & 255;
              } else {
                if (2 == u) for (f = 0; f < o; f++) e3[c + f] = e3[d + f] + e3[c + f - o] & 255;
                if (3 == u) {
                  for (f = 0; f < a; f++) e3[c + f] = e3[d + f] + (e3[c + f - o] >> 1) & 255;
                  for (f = a; f < o; f++) e3[c + f] = e3[d + f] + (e3[c + f - o] + e3[c + f - a] >> 1) & 255;
                }
                if (4 == u) {
                  for (f = 0; f < a; f++) e3[c + f] = e3[d + f] + l(0, e3[c + f - o], 0) & 255;
                  for (f = a; f < o; f++) e3[c + f] = e3[d + f] + l(e3[c + f - a], e3[c + f - o], e3[c + f - a - o]) & 255;
                }
              }
            }
            return e3;
          }, t2.decode._paeth = function(t3, e3, i2) {
            var r2 = t3 + e3 - i2, s = Math.abs(r2 - t3), n = Math.abs(r2 - e3), a = Math.abs(r2 - i2);
            return s <= n && s <= a ? t3 : n <= a ? e3 : i2;
          }, t2.decode._IHDR = function(e3, i2, r2) {
            var s = t2._bin;
            r2.width = s.readUint(e3, i2), i2 += 4, r2.height = s.readUint(e3, i2), i2 += 4, r2.depth = e3[i2], i2++, r2.ctype = e3[i2], i2++, r2.compress = e3[i2], i2++, r2.filter = e3[i2], i2++, r2.interlace = e3[i2], i2++;
          }, t2._bin = { nextZero: function(t3, e3) {
            for (; 0 != t3[e3]; ) e3++;
            return e3;
          }, readUshort: function(t3, e3) {
            return t3[e3] << 8 | t3[e3 + 1];
          }, writeUshort: function(t3, e3, i2) {
            t3[e3] = i2 >> 8 & 255, t3[e3 + 1] = 255 & i2;
          }, readUint: function(t3, e3) {
            return 16777216 * t3[e3] + (t3[e3 + 1] << 16 | t3[e3 + 2] << 8 | t3[e3 + 3]);
          }, writeUint: function(t3, e3, i2) {
            t3[e3] = i2 >> 24 & 255, t3[e3 + 1] = i2 >> 16 & 255, t3[e3 + 2] = i2 >> 8 & 255, t3[e3 + 3] = 255 & i2;
          }, readASCII: function(t3, e3, i2) {
            for (var r2 = "", s = 0; s < i2; s++) r2 += String.fromCharCode(t3[e3 + s]);
            return r2;
          }, writeASCII: function(t3, e3, i2) {
            for (var r2 = 0; r2 < i2.length; r2++) t3[e3 + r2] = i2.charCodeAt(r2);
          }, readBytes: function(t3, e3, i2) {
            for (var r2 = [], s = 0; s < i2; s++) r2.push(t3[e3 + s]);
            return r2;
          }, pad: function(t3) {
            return t3.length < 2 ? "0" + t3 : t3;
          }, readUTF8: function(e3, i2, r2) {
            for (var s, n = "", a = 0; a < r2; a++) n += "%" + t2._bin.pad(e3[i2 + a].toString(16));
            try {
              s = decodeURIComponent(n);
            } catch (s2) {
              return t2._bin.readASCII(e3, i2, r2);
            }
            return s;
          } }, t2._copyTile = function(t3, e3, i2, r2, s, n, a, o, l) {
            for (var h = Math.min(e3, s), c = Math.min(i2, n), d = 0, u = 0, f = 0; f < c; f++) for (var p = 0; p < h; p++) if (a >= 0 && o >= 0 ? (d = f * e3 + p << 2, u = (o + f) * s + a + p << 2) : (d = (-o + f) * e3 - a + p << 2, u = f * s + p << 2), 0 == l) r2[u] = t3[d], r2[u + 1] = t3[d + 1], r2[u + 2] = t3[d + 2], r2[u + 3] = t3[d + 3];
            else if (1 == l) {
              var g = t3[d + 3] * (1 / 255), m = t3[d] * g, v = t3[d + 1] * g, _ = t3[d + 2] * g, y = r2[u + 3] * (1 / 255), b = r2[u] * y, x = r2[u + 1] * y, w = r2[u + 2] * y, A = 1 - g, C = g + y * A, S3 = 0 == C ? 0 : 1 / C;
              r2[u + 3] = 255 * C, r2[u + 0] = (m + b * A) * S3, r2[u + 1] = (v + x * A) * S3, r2[u + 2] = (_ + w * A) * S3;
            } else if (2 == l) g = t3[d + 3], m = t3[d], v = t3[d + 1], _ = t3[d + 2], y = r2[u + 3], b = r2[u], x = r2[u + 1], w = r2[u + 2], g == y && m == b && v == x && _ == w ? (r2[u] = 0, r2[u + 1] = 0, r2[u + 2] = 0, r2[u + 3] = 0) : (r2[u] = m, r2[u + 1] = v, r2[u + 2] = _, r2[u + 3] = g);
            else if (3 == l) {
              if (g = t3[d + 3], m = t3[d], v = t3[d + 1], _ = t3[d + 2], y = r2[u + 3], b = r2[u], x = r2[u + 1], w = r2[u + 2], g == y && m == b && v == x && _ == w) continue;
              if (g < 220 && y > 20) return false;
            }
            return true;
          }, t2.encode = function(e3, i2, r2, s, n, a) {
            null == s && (s = 0), null == a && (a = false);
            for (var o = new Uint8Array(e3[0].byteLength * e3.length + 100), l = [137, 80, 78, 71, 13, 10, 26, 10], h = 0; h < 8; h++) o[h] = l[h];
            var c = 8, d = t2._bin, u = t2.crc.crc, f = d.writeUint, p = d.writeUshort, g = d.writeASCII, m = t2.encode.compressPNG(e3, i2, r2, s, a);
            f(o, c, 13), g(o, c += 4, "IHDR"), f(o, c += 4, i2), f(o, c += 4, r2), o[c += 4] = m.depth, o[++c] = m.ctype, o[++c] = 0, o[++c] = 0, o[++c] = 0, f(o, ++c, u(o, c - 17, 17)), f(o, c += 4, 1), g(o, c += 4, "sRGB"), o[c += 4] = 1, f(o, ++c, u(o, c - 5, 5)), c += 4;
            var v = e3.length > 1;
            if (v && (f(o, c, 8), g(o, c += 4, "acTL"), f(o, c += 4, e3.length), f(o, c += 4, 0), f(o, c += 4, u(o, c - 12, 12)), c += 4), 3 == m.ctype) {
              for (f(o, c, 3 * (M = m.plte.length)), g(o, c += 4, "PLTE"), c += 4, h = 0; h < M; h++) {
                var _ = 3 * h, y = m.plte[h], b = 255 & y, x = y >> 8 & 255, w = y >> 16 & 255;
                o[c + _ + 0] = b, o[c + _ + 1] = x, o[c + _ + 2] = w;
              }
              if (f(o, c += 3 * M, u(o, c - 3 * M - 4, 3 * M + 4)), c += 4, m.gotAlpha) {
                for (f(o, c, M), g(o, c += 4, "tRNS"), c += 4, h = 0; h < M; h++) o[c + h] = m.plte[h] >> 24 & 255;
                f(o, c += M, u(o, c - M - 4, M + 4)), c += 4;
              }
            }
            for (var A = 0, C = 0; C < m.frames.length; C++) {
              var S3 = m.frames[C];
              v && (f(o, c, 26), g(o, c += 4, "fcTL"), f(o, c += 4, A++), f(o, c += 4, S3.rect.width), f(o, c += 4, S3.rect.height), f(o, c += 4, S3.rect.x), f(o, c += 4, S3.rect.y), p(o, c += 4, n[C]), p(o, c += 2, 1e3), o[c += 2] = S3.dispose, o[++c] = S3.blend, f(o, ++c, u(o, c - 30, 30)), c += 4);
              var M, z = S3.cimg;
              f(o, c, (M = z.length) + (0 == C ? 0 : 4));
              var T = c += 4;
              for (g(o, c, 0 == C ? "IDAT" : "fdAT"), c += 4, 0 != C && (f(o, c, A++), c += 4), h = 0; h < M; h++) o[c + h] = z[h];
              f(o, c += M, u(o, T, c - T)), c += 4;
            }
            return f(o, c, 0), g(o, c += 4, "IEND"), f(o, c += 4, u(o, c - 4, 4)), c += 4, o.buffer.slice(0, c);
          }, t2.encode.compressPNG = function(e3, i2, r2, s, n) {
            for (var a = t2.encode.compress(e3, i2, r2, s, false, n), o = 0; o < e3.length; o++) {
              var l = a.frames[o], h = (l.rect.width, l.rect.height), c = l.bpl, d = l.bpp, u = new Uint8Array(h * c + h);
              l.cimg = t2.encode._filterZero(l.img, h, d, c, u);
            }
            return a;
          }, t2.encode.compress = function(e3, i2, r2, s, n, a) {
            null == a && (a = false);
            for (var o = 6, l = 8, h = 4, c = 255, d = 0; d < e3.length; d++) for (var u = new Uint8Array(e3[d]), f = u.length, p = 0; p < f; p += 4) c &= u[p + 3];
            var g = 255 != c, m = {}, v = [];
            if (0 != e3.length && (m[0] = 0, v.push(0), 0 != s && s--), 0 != s) {
              var _ = t2.quantize(e3, s, n);
              for (e3 = _.bufs, p = 0; p < _.plte.length; p++) null == m[b = _.plte[p].est.rgba] && (m[b] = v.length, v.push(b));
            } else for (d = 0; d < e3.length; d++) {
              var y = new Uint32Array(e3[d]);
              for (f = y.length, p = 0; p < f; p++) {
                var b = y[p];
                if ((p < i2 || b != y[p - 1] && b != y[p - i2]) && null == m[b] && (m[b] = v.length, v.push(b), v.length >= 300)) break;
              }
            }
            var x = !!g && n, w = v.length;
            w <= 256 && 0 == a && (l = w <= 2 ? 1 : w <= 4 ? 2 : w <= 16 ? 4 : 8, n && (l = 8), g = true);
            var A = [];
            for (d = 0; d < e3.length; d++) {
              var C = new Uint8Array(e3[d]), S3 = new Uint32Array(C.buffer), M = 0, z = 0, T = i2, E = r2, L = 0;
              if (0 != d && !x) {
                for (var F = n || 1 == d || 2 == A[A.length - 2].dispose ? 1 : 2, I = 0, O = 1e9, D = 0; D < F; D++) {
                  for (var k = new Uint8Array(e3[d - 1 - D]), R = new Uint32Array(e3[d - 1 - D]), P = i2, U = r2, B = -1, N = -1, G = 0; G < r2; G++) for (var V = 0; V < i2; V++) S3[p = G * i2 + V] != R[p] && (V < P && (P = V), V > B && (B = V), G < U && (U = G), G > N && (N = G));
                  var j = -1 == B ? 1 : (B - P + 1) * (N - U + 1);
                  j < O && (O = j, I = D, -1 == B ? (M = z = 0, T = E = 1) : (M = P, z = U, T = B - P + 1, E = N - U + 1));
                }
                k = new Uint8Array(e3[d - 1 - I]), 1 == I && (A[A.length - 1].dispose = 2);
                var H = new Uint8Array(T * E * 4);
                new Uint32Array(H.buffer), t2._copyTile(k, i2, r2, H, T, E, -M, -z, 0), t2._copyTile(C, i2, r2, H, T, E, -M, -z, 3) ? (t2._copyTile(C, i2, r2, H, T, E, -M, -z, 2), L = 1) : (t2._copyTile(C, i2, r2, H, T, E, -M, -z, 0), L = 0), C = H, S3 = new Uint32Array(C.buffer);
              }
              var W = 4 * T;
              if (w <= 256 && 0 == a) {
                for (W = Math.ceil(l * T / 8), H = new Uint8Array(W * E), G = 0; G < E; G++) {
                  p = G * W;
                  var q = G * T;
                  if (8 == l) for (V = 0; V < T; V++) H[p + V] = m[S3[q + V]];
                  else if (4 == l) for (V = 0; V < T; V++) H[p + (V >> 1)] |= m[S3[q + V]] << 4 - 4 * (1 & V);
                  else if (2 == l) for (V = 0; V < T; V++) H[p + (V >> 2)] |= m[S3[q + V]] << 6 - 2 * (3 & V);
                  else if (1 == l) for (V = 0; V < T; V++) H[p + (V >> 3)] |= m[S3[q + V]] << 7 - 1 * (7 & V);
                }
                C = H, o = 3, h = 1;
              } else if (0 == g && 1 == e3.length) {
                H = new Uint8Array(T * E * 3);
                var Y = T * E;
                for (p = 0; p < Y; p++) {
                  var Z = 3 * p, X = 4 * p;
                  H[Z] = C[X], H[Z + 1] = C[X + 1], H[Z + 2] = C[X + 2];
                }
                C = H, o = 2, h = 3, W = 3 * T;
              }
              A.push({ rect: { x: M, y: z, width: T, height: E }, img: C, bpl: W, bpp: h, blend: L, dispose: x ? 1 : 0 });
            }
            return { ctype: o, depth: l, plte: v, gotAlpha: g, frames: A };
          }, t2.encode._filterZero = function(i2, r2, s, n, a) {
            for (var o = [], l = 0; l < 5; l++) if (!(r2 * n > 5e5) || 2 != l && 3 != l && 4 != l) {
              for (var h = 0; h < r2; h++) t2.encode._filterLine(a, i2, h, n, s, l);
              if (o.push(e2.deflate(a)), 1 == s) break;
            }
            for (var c, d = 1e9, u = 0; u < o.length; u++) o[u].length < d && (c = u, d = o[u].length);
            return o[c];
          }, t2.encode._filterLine = function(e3, i2, r2, s, n, a) {
            var o = r2 * s, l = o + r2, h = t2.decode._paeth;
            if (e3[l] = a, l++, 0 == a) for (var c = 0; c < s; c++) e3[l + c] = i2[o + c];
            else if (1 == a) {
              for (c = 0; c < n; c++) e3[l + c] = i2[o + c];
              for (c = n; c < s; c++) e3[l + c] = i2[o + c] - i2[o + c - n] + 256 & 255;
            } else if (0 == r2) {
              for (c = 0; c < n; c++) e3[l + c] = i2[o + c];
              if (2 == a) for (c = n; c < s; c++) e3[l + c] = i2[o + c];
              if (3 == a) for (c = n; c < s; c++) e3[l + c] = i2[o + c] - (i2[o + c - n] >> 1) + 256 & 255;
              if (4 == a) for (c = n; c < s; c++) e3[l + c] = i2[o + c] - h(i2[o + c - n], 0, 0) + 256 & 255;
            } else {
              if (2 == a) for (c = 0; c < s; c++) e3[l + c] = i2[o + c] + 256 - i2[o + c - s] & 255;
              if (3 == a) {
                for (c = 0; c < n; c++) e3[l + c] = i2[o + c] + 256 - (i2[o + c - s] >> 1) & 255;
                for (c = n; c < s; c++) e3[l + c] = i2[o + c] + 256 - (i2[o + c - s] + i2[o + c - n] >> 1) & 255;
              }
              if (4 == a) {
                for (c = 0; c < n; c++) e3[l + c] = i2[o + c] + 256 - h(0, i2[o + c - s], 0) & 255;
                for (c = n; c < s; c++) e3[l + c] = i2[o + c] + 256 - h(i2[o + c - n], i2[o + c - s], i2[o + c - n - s]) & 255;
              }
            }
          }, t2.crc = { table: (function() {
            for (var t3 = new Uint32Array(256), e3 = 0; e3 < 256; e3++) {
              for (var i2 = e3, r2 = 0; r2 < 8; r2++) 1 & i2 ? i2 = 3988292384 ^ i2 >>> 1 : i2 >>>= 1;
              t3[e3] = i2;
            }
            return t3;
          })(), update: function(e3, i2, r2, s) {
            for (var n = 0; n < s; n++) e3 = t2.crc.table[255 & (e3 ^ i2[r2 + n])] ^ e3 >>> 8;
            return e3;
          }, crc: function(e3, i2, r2) {
            return 4294967295 ^ t2.crc.update(4294967295, e3, i2, r2);
          } }, t2.quantize = function(e3, i2, r2) {
            for (var s = [], n = 0, a = 0; a < e3.length; a++) s.push(t2.encode.alphaMul(new Uint8Array(e3[a]), r2)), n += e3[a].byteLength;
            var o = new Uint8Array(n), l = new Uint32Array(o.buffer), h = 0;
            for (a = 0; a < s.length; a++) {
              for (var c = s[a], d = c.length, u = 0; u < d; u++) o[h + u] = c[u];
              h += d;
            }
            var f = { i0: 0, i1: o.length, bst: null, est: null, tdst: 0, left: null, right: null };
            f.bst = t2.quantize.stats(o, f.i0, f.i1), f.est = t2.quantize.estats(f.bst);
            for (var p = [f]; p.length < i2; ) {
              var g = 0, m = 0;
              for (a = 0; a < p.length; a++) p[a].est.L > g && (g = p[a].est.L, m = a);
              if (g < 1e-3) break;
              var v = p[m], _ = t2.quantize.splitPixels(o, l, v.i0, v.i1, v.est.e, v.est.eMq255), y = { i0: v.i0, i1: _, bst: null, est: null, tdst: 0, left: null, right: null };
              y.bst = t2.quantize.stats(o, y.i0, y.i1), y.est = t2.quantize.estats(y.bst);
              var b = { i0: _, i1: v.i1, bst: null, est: null, tdst: 0, left: null, right: null };
              for (b.bst = { R: [], m: [], N: v.bst.N - y.bst.N }, a = 0; a < 16; a++) b.bst.R[a] = v.bst.R[a] - y.bst.R[a];
              for (a = 0; a < 4; a++) b.bst.m[a] = v.bst.m[a] - y.bst.m[a];
              b.est = t2.quantize.estats(b.bst), v.left = y, v.right = b, p[m] = y, p.push(b);
            }
            p.sort((function(t3, e4) {
              return e4.bst.N - t3.bst.N;
            }));
            for (var x = 0; x < s.length; x++) {
              var w = t2.quantize.planeDst, A = new Uint8Array(s[x].buffer), C = new Uint32Array(s[x].buffer), S3 = A.length;
              for (a = 0; a < S3; a += 4) {
                for (var M = A[a] * (1 / 255), z = A[a + 1] * (1 / 255), T = A[a + 2] * (1 / 255), E = A[a + 3] * (1 / 255), L = f; L.left; ) L = w(L.est, M, z, T, E) <= 0 ? L.left : L.right;
                C[a >> 2] = L.est.rgba;
              }
              s[x] = C.buffer;
            }
            return { bufs: s, plte: p };
          }, t2.quantize.getNearest = function(e3, i2, r2, s, n) {
            if (null == e3.left) return e3.tdst = t2.quantize.dist(e3.est.q, i2, r2, s, n), e3;
            var a = t2.quantize.planeDst(e3.est, i2, r2, s, n), o = e3.left, l = e3.right;
            a > 0 && (o = e3.right, l = e3.left);
            var h = t2.quantize.getNearest(o, i2, r2, s, n);
            if (h.tdst <= a * a) return h;
            var c = t2.quantize.getNearest(l, i2, r2, s, n);
            return c.tdst < h.tdst ? c : h;
          }, t2.quantize.planeDst = function(t3, e3, i2, r2, s) {
            var n = t3.e;
            return n[0] * e3 + n[1] * i2 + n[2] * r2 + n[3] * s - t3.eMq;
          }, t2.quantize.dist = function(t3, e3, i2, r2, s) {
            var n = e3 - t3[0], a = i2 - t3[1], o = r2 - t3[2], l = s - t3[3];
            return n * n + a * a + o * o + l * l;
          }, t2.quantize.splitPixels = function(e3, i2, r2, s, n, a) {
            var o = t2.quantize.vecDot;
            for (s -= 4; r2 < s; ) {
              for (; o(e3, r2, n) <= a; ) r2 += 4;
              for (; o(e3, s, n) > a; ) s -= 4;
              if (r2 >= s) break;
              var l = i2[r2 >> 2];
              i2[r2 >> 2] = i2[s >> 2], i2[s >> 2] = l, r2 += 4, s -= 4;
            }
            for (; o(e3, r2, n) > a; ) r2 -= 4;
            return r2 + 4;
          }, t2.quantize.vecDot = function(t3, e3, i2) {
            return t3[e3] * i2[0] + t3[e3 + 1] * i2[1] + t3[e3 + 2] * i2[2] + t3[e3 + 3] * i2[3];
          }, t2.quantize.stats = function(t3, e3, i2) {
            for (var r2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], s = [0, 0, 0, 0], n = i2 - e3 >> 2, a = e3; a < i2; a += 4) {
              var o = t3[a] * (1 / 255), l = t3[a + 1] * (1 / 255), h = t3[a + 2] * (1 / 255), c = t3[a + 3] * (1 / 255);
              s[0] += o, s[1] += l, s[2] += h, s[3] += c, r2[0] += o * o, r2[1] += o * l, r2[2] += o * h, r2[3] += o * c, r2[5] += l * l, r2[6] += l * h, r2[7] += l * c, r2[10] += h * h, r2[11] += h * c, r2[15] += c * c;
            }
            return r2[4] = r2[1], r2[8] = r2[2], r2[12] = r2[3], r2[9] = r2[6], r2[13] = r2[7], r2[14] = r2[11], { R: r2, m: s, N: n };
          }, t2.quantize.estats = function(e3) {
            var i2 = e3.R, r2 = e3.m, s = e3.N, n = r2[0], a = r2[1], o = r2[2], l = r2[3], h = 0 == s ? 0 : 1 / s, c = [i2[0] - n * n * h, i2[1] - n * a * h, i2[2] - n * o * h, i2[3] - n * l * h, i2[4] - a * n * h, i2[5] - a * a * h, i2[6] - a * o * h, i2[7] - a * l * h, i2[8] - o * n * h, i2[9] - o * a * h, i2[10] - o * o * h, i2[11] - o * l * h, i2[12] - l * n * h, i2[13] - l * a * h, i2[14] - l * o * h, i2[15] - l * l * h], d = c, u = t2.M4, f = [0.5, 0.5, 0.5, 0.5], p = 0, g = 0;
            if (0 != s) for (var m = 0; m < 10 && (f = u.multVec(d, f), g = Math.sqrt(u.dot(f, f)), f = u.sml(1 / g, f), !(Math.abs(g - p) < 1e-9)); m++) p = g;
            var v = [n * h, a * h, o * h, l * h], _ = u.dot(u.sml(255, v), f), y = v[3] < 1e-3 ? 0 : 1 / v[3];
            return { Cov: c, q: v, e: f, L: p, eMq255: _, eMq: u.dot(f, v), rgba: (Math.round(255 * v[3]) << 24 | Math.round(255 * v[2] * y) << 16 | Math.round(255 * v[1] * y) << 8 | Math.round(255 * v[0] * y)) >>> 0 };
          }, t2.M4 = { multVec: function(t3, e3) {
            return [t3[0] * e3[0] + t3[1] * e3[1] + t3[2] * e3[2] + t3[3] * e3[3], t3[4] * e3[0] + t3[5] * e3[1] + t3[6] * e3[2] + t3[7] * e3[3], t3[8] * e3[0] + t3[9] * e3[1] + t3[10] * e3[2] + t3[11] * e3[3], t3[12] * e3[0] + t3[13] * e3[1] + t3[14] * e3[2] + t3[15] * e3[3]];
          }, dot: function(t3, e3) {
            return t3[0] * e3[0] + t3[1] * e3[1] + t3[2] * e3[2] + t3[3] * e3[3];
          }, sml: function(t3, e3) {
            return [t3 * e3[0], t3 * e3[1], t3 * e3[2], t3 * e3[3]];
          } }, t2.encode.alphaMul = function(t3, e3) {
            for (var i2 = new Uint8Array(t3.length), r2 = t3.length >> 2, s = 0; s < r2; s++) {
              var n = s << 2, a = t3[n + 3];
              e3 && (a = a < 128 ? 0 : 255);
              var o = a * (1 / 255);
              i2[n + 0] = t3[n + 0] * o, i2[n + 1] = t3[n + 1] * o, i2[n + 2] = t3[n + 2] * o, i2[n + 3] = a;
            }
            return i2;
          };
        })(r, i(788));
      }, 788: (t, e, i) => {
        "use strict";
        var r = {};
        (0, i(981).assign)(r, i(71), i(3), i(681)), t.exports = r;
      }, 71: (t, e, i) => {
        "use strict";
        var r = i(107), s = i(981), n = i(972), a = i(834), o = i(746), l = Object.prototype.toString;
        function h(t2) {
          if (!(this instanceof h)) return new h(t2);
          this.options = s.assign({ level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" }, t2 || {});
          var e2 = this.options;
          e2.raw && e2.windowBits > 0 ? e2.windowBits = -e2.windowBits : e2.gzip && e2.windowBits > 0 && e2.windowBits < 16 && (e2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new o(), this.strm.avail_out = 0;
          var i2 = r.deflateInit2(this.strm, e2.level, e2.method, e2.windowBits, e2.memLevel, e2.strategy);
          if (0 !== i2) throw new Error(a[i2]);
          if (e2.header && r.deflateSetHeader(this.strm, e2.header), e2.dictionary) {
            var c2;
            if (c2 = "string" == typeof e2.dictionary ? n.string2buf(e2.dictionary) : "[object ArrayBuffer]" === l.call(e2.dictionary) ? new Uint8Array(e2.dictionary) : e2.dictionary, 0 !== (i2 = r.deflateSetDictionary(this.strm, c2))) throw new Error(a[i2]);
            this._dict_set = true;
          }
        }
        function c(t2, e2) {
          var i2 = new h(e2);
          if (i2.push(t2, true), i2.err) throw i2.msg || a[i2.err];
          return i2.result;
        }
        h.prototype.push = function(t2, e2) {
          var i2, a2, o2 = this.strm, h2 = this.options.chunkSize;
          if (this.ended) return false;
          a2 = e2 === ~~e2 ? e2 : true === e2 ? 4 : 0, "string" == typeof t2 ? o2.input = n.string2buf(t2) : "[object ArrayBuffer]" === l.call(t2) ? o2.input = new Uint8Array(t2) : o2.input = t2, o2.next_in = 0, o2.avail_in = o2.input.length;
          do {
            if (0 === o2.avail_out && (o2.output = new s.Buf8(h2), o2.next_out = 0, o2.avail_out = h2), 1 !== (i2 = r.deflate(o2, a2)) && 0 !== i2) return this.onEnd(i2), this.ended = true, false;
            0 !== o2.avail_out && (0 !== o2.avail_in || 4 !== a2 && 2 !== a2) || ("string" === this.options.to ? this.onData(n.buf2binstring(s.shrinkBuf(o2.output, o2.next_out))) : this.onData(s.shrinkBuf(o2.output, o2.next_out)));
          } while ((o2.avail_in > 0 || 0 === o2.avail_out) && 1 !== i2);
          return 4 === a2 ? (i2 = r.deflateEnd(this.strm), this.onEnd(i2), this.ended = true, 0 === i2) : 2 !== a2 || (this.onEnd(0), o2.avail_out = 0, true);
        }, h.prototype.onData = function(t2) {
          this.chunks.push(t2);
        }, h.prototype.onEnd = function(t2) {
          0 === t2 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
        }, e.Deflate = h, e.deflate = c, e.deflateRaw = function(t2, e2) {
          return (e2 = e2 || {}).raw = true, c(t2, e2);
        }, e.gzip = function(t2, e2) {
          return (e2 = e2 || {}).gzip = true, c(t2, e2);
        };
      }, 3: (t, e, i) => {
        "use strict";
        var r = i(663), s = i(981), n = i(972), a = i(681), o = i(834), l = i(746), h = i(670), c = Object.prototype.toString;
        function d(t2) {
          if (!(this instanceof d)) return new d(t2);
          this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t2 || {});
          var e2 = this.options;
          e2.raw && e2.windowBits >= 0 && e2.windowBits < 16 && (e2.windowBits = -e2.windowBits, 0 === e2.windowBits && (e2.windowBits = -15)), !(e2.windowBits >= 0 && e2.windowBits < 16) || t2 && t2.windowBits || (e2.windowBits += 32), e2.windowBits > 15 && e2.windowBits < 48 && (15 & e2.windowBits || (e2.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;
          var i2 = r.inflateInit2(this.strm, e2.windowBits);
          if (i2 !== a.Z_OK) throw new Error(o[i2]);
          if (this.header = new h(), r.inflateGetHeader(this.strm, this.header), e2.dictionary && ("string" == typeof e2.dictionary ? e2.dictionary = n.string2buf(e2.dictionary) : "[object ArrayBuffer]" === c.call(e2.dictionary) && (e2.dictionary = new Uint8Array(e2.dictionary)), e2.raw && (i2 = r.inflateSetDictionary(this.strm, e2.dictionary)) !== a.Z_OK)) throw new Error(o[i2]);
        }
        function u(t2, e2) {
          var i2 = new d(e2);
          if (i2.push(t2, true), i2.err) throw i2.msg || o[i2.err];
          return i2.result;
        }
        d.prototype.push = function(t2, e2) {
          var i2, o2, l2, h2, d2, u2 = this.strm, f = this.options.chunkSize, p = this.options.dictionary, g = false;
          if (this.ended) return false;
          o2 = e2 === ~~e2 ? e2 : true === e2 ? a.Z_FINISH : a.Z_NO_FLUSH, "string" == typeof t2 ? u2.input = n.binstring2buf(t2) : "[object ArrayBuffer]" === c.call(t2) ? u2.input = new Uint8Array(t2) : u2.input = t2, u2.next_in = 0, u2.avail_in = u2.input.length;
          do {
            if (0 === u2.avail_out && (u2.output = new s.Buf8(f), u2.next_out = 0, u2.avail_out = f), (i2 = r.inflate(u2, a.Z_NO_FLUSH)) === a.Z_NEED_DICT && p && (i2 = r.inflateSetDictionary(this.strm, p)), i2 === a.Z_BUF_ERROR && true === g && (i2 = a.Z_OK, g = false), i2 !== a.Z_STREAM_END && i2 !== a.Z_OK) return this.onEnd(i2), this.ended = true, false;
            u2.next_out && (0 !== u2.avail_out && i2 !== a.Z_STREAM_END && (0 !== u2.avail_in || o2 !== a.Z_FINISH && o2 !== a.Z_SYNC_FLUSH) || ("string" === this.options.to ? (l2 = n.utf8border(u2.output, u2.next_out), h2 = u2.next_out - l2, d2 = n.buf2string(u2.output, l2), u2.next_out = h2, u2.avail_out = f - h2, h2 && s.arraySet(u2.output, u2.output, l2, h2, 0), this.onData(d2)) : this.onData(s.shrinkBuf(u2.output, u2.next_out)))), 0 === u2.avail_in && 0 === u2.avail_out && (g = true);
          } while ((u2.avail_in > 0 || 0 === u2.avail_out) && i2 !== a.Z_STREAM_END);
          return i2 === a.Z_STREAM_END && (o2 = a.Z_FINISH), o2 === a.Z_FINISH ? (i2 = r.inflateEnd(this.strm), this.onEnd(i2), this.ended = true, i2 === a.Z_OK) : o2 !== a.Z_SYNC_FLUSH || (this.onEnd(a.Z_OK), u2.avail_out = 0, true);
        }, d.prototype.onData = function(t2) {
          this.chunks.push(t2);
        }, d.prototype.onEnd = function(t2) {
          t2 === a.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
        }, e.Inflate = d, e.inflate = u, e.inflateRaw = function(t2, e2) {
          return (e2 = e2 || {}).raw = true, u(t2, e2);
        }, e.ungzip = u;
      }, 981: (t, e) => {
        "use strict";
        var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        function r(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }
        e.assign = function(t2) {
          for (var e2 = Array.prototype.slice.call(arguments, 1); e2.length; ) {
            var i2 = e2.shift();
            if (i2) {
              if ("object" != typeof i2) throw new TypeError(i2 + "must be non-object");
              for (var s2 in i2) r(i2, s2) && (t2[s2] = i2[s2]);
            }
          }
          return t2;
        }, e.shrinkBuf = function(t2, e2) {
          return t2.length === e2 ? t2 : t2.subarray ? t2.subarray(0, e2) : (t2.length = e2, t2);
        };
        var s = { arraySet: function(t2, e2, i2, r2, s2) {
          if (e2.subarray && t2.subarray) t2.set(e2.subarray(i2, i2 + r2), s2);
          else for (var n2 = 0; n2 < r2; n2++) t2[s2 + n2] = e2[i2 + n2];
        }, flattenChunks: function(t2) {
          var e2, i2, r2, s2, n2, a;
          for (r2 = 0, e2 = 0, i2 = t2.length; e2 < i2; e2++) r2 += t2[e2].length;
          for (a = new Uint8Array(r2), s2 = 0, e2 = 0, i2 = t2.length; e2 < i2; e2++) n2 = t2[e2], a.set(n2, s2), s2 += n2.length;
          return a;
        } }, n = { arraySet: function(t2, e2, i2, r2, s2) {
          for (var n2 = 0; n2 < r2; n2++) t2[s2 + n2] = e2[i2 + n2];
        }, flattenChunks: function(t2) {
          return [].concat.apply([], t2);
        } };
        e.setTyped = function(t2) {
          t2 ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, s)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, n));
        }, e.setTyped(i);
      }, 972: (t, e, i) => {
        "use strict";
        var r = i(981), s = true, n = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (t2) {
          s = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (t2) {
          n = false;
        }
        for (var a = new r.Buf8(256), o = 0; o < 256; o++) a[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
        function l(t2, e2) {
          if (e2 < 65534 && (t2.subarray && n || !t2.subarray && s)) return String.fromCharCode.apply(null, r.shrinkBuf(t2, e2));
          for (var i2 = "", a2 = 0; a2 < e2; a2++) i2 += String.fromCharCode(t2[a2]);
          return i2;
        }
        a[254] = a[254] = 1, e.string2buf = function(t2) {
          var e2, i2, s2, n2, a2, o2 = t2.length, l2 = 0;
          for (n2 = 0; n2 < o2; n2++) 55296 == (64512 & (i2 = t2.charCodeAt(n2))) && n2 + 1 < o2 && 56320 == (64512 & (s2 = t2.charCodeAt(n2 + 1))) && (i2 = 65536 + (i2 - 55296 << 10) + (s2 - 56320), n2++), l2 += i2 < 128 ? 1 : i2 < 2048 ? 2 : i2 < 65536 ? 3 : 4;
          for (e2 = new r.Buf8(l2), a2 = 0, n2 = 0; a2 < l2; n2++) 55296 == (64512 & (i2 = t2.charCodeAt(n2))) && n2 + 1 < o2 && 56320 == (64512 & (s2 = t2.charCodeAt(n2 + 1))) && (i2 = 65536 + (i2 - 55296 << 10) + (s2 - 56320), n2++), i2 < 128 ? e2[a2++] = i2 : i2 < 2048 ? (e2[a2++] = 192 | i2 >>> 6, e2[a2++] = 128 | 63 & i2) : i2 < 65536 ? (e2[a2++] = 224 | i2 >>> 12, e2[a2++] = 128 | i2 >>> 6 & 63, e2[a2++] = 128 | 63 & i2) : (e2[a2++] = 240 | i2 >>> 18, e2[a2++] = 128 | i2 >>> 12 & 63, e2[a2++] = 128 | i2 >>> 6 & 63, e2[a2++] = 128 | 63 & i2);
          return e2;
        }, e.buf2binstring = function(t2) {
          return l(t2, t2.length);
        }, e.binstring2buf = function(t2) {
          for (var e2 = new r.Buf8(t2.length), i2 = 0, s2 = e2.length; i2 < s2; i2++) e2[i2] = t2.charCodeAt(i2);
          return e2;
        }, e.buf2string = function(t2, e2) {
          var i2, r2, s2, n2, o2 = e2 || t2.length, h = new Array(2 * o2);
          for (r2 = 0, i2 = 0; i2 < o2; ) if ((s2 = t2[i2++]) < 128) h[r2++] = s2;
          else if ((n2 = a[s2]) > 4) h[r2++] = 65533, i2 += n2 - 1;
          else {
            for (s2 &= 2 === n2 ? 31 : 3 === n2 ? 15 : 7; n2 > 1 && i2 < o2; ) s2 = s2 << 6 | 63 & t2[i2++], n2--;
            n2 > 1 ? h[r2++] = 65533 : s2 < 65536 ? h[r2++] = s2 : (s2 -= 65536, h[r2++] = 55296 | s2 >> 10 & 1023, h[r2++] = 56320 | 1023 & s2);
          }
          return l(h, r2);
        }, e.utf8border = function(t2, e2) {
          var i2;
          for ((e2 = e2 || t2.length) > t2.length && (e2 = t2.length), i2 = e2 - 1; i2 >= 0 && 128 == (192 & t2[i2]); ) i2--;
          return i2 < 0 || 0 === i2 ? e2 : i2 + a[t2[i2]] > e2 ? i2 : e2;
        };
      }, 701: (t) => {
        "use strict";
        t.exports = function(t2, e, i, r) {
          for (var s = 65535 & t2, n = t2 >>> 16 & 65535, a = 0; 0 !== i; ) {
            i -= a = i > 2e3 ? 2e3 : i;
            do {
              n = n + (s = s + e[r++] | 0) | 0;
            } while (--a);
            s %= 65521, n %= 65521;
          }
          return s | n << 16;
        };
      }, 681: (t) => {
        "use strict";
        t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, 407: (t) => {
        "use strict";
        var e = (function() {
          for (var t2, e2 = [], i = 0; i < 256; i++) {
            t2 = i;
            for (var r = 0; r < 8; r++) t2 = 1 & t2 ? 3988292384 ^ t2 >>> 1 : t2 >>> 1;
            e2[i] = t2;
          }
          return e2;
        })();
        t.exports = function(t2, i, r, s) {
          var n = e, a = s + r;
          t2 ^= -1;
          for (var o = s; o < a; o++) t2 = t2 >>> 8 ^ n[255 & (t2 ^ i[o])];
          return ~t2;
        };
      }, 107: (t, e, i) => {
        "use strict";
        var r, s = i(981), n = i(697), a = i(701), o = i(407), l = i(834), h = -2, c = 258, d = 262, u = 103, f = 113, p = 666;
        function g(t2, e2) {
          return t2.msg = l[e2], e2;
        }
        function m(t2) {
          return (t2 << 1) - (t2 > 4 ? 9 : 0);
        }
        function v(t2) {
          for (var e2 = t2.length; --e2 >= 0; ) t2[e2] = 0;
        }
        function _(t2) {
          var e2 = t2.state, i2 = e2.pending;
          i2 > t2.avail_out && (i2 = t2.avail_out), 0 !== i2 && (s.arraySet(t2.output, e2.pending_buf, e2.pending_out, i2, t2.next_out), t2.next_out += i2, e2.pending_out += i2, t2.total_out += i2, t2.avail_out -= i2, e2.pending -= i2, 0 === e2.pending && (e2.pending_out = 0));
        }
        function y(t2, e2) {
          n._tr_flush_block(t2, t2.block_start >= 0 ? t2.block_start : -1, t2.strstart - t2.block_start, e2), t2.block_start = t2.strstart, _(t2.strm);
        }
        function b(t2, e2) {
          t2.pending_buf[t2.pending++] = e2;
        }
        function x(t2, e2) {
          t2.pending_buf[t2.pending++] = e2 >>> 8 & 255, t2.pending_buf[t2.pending++] = 255 & e2;
        }
        function w(t2, e2) {
          var i2, r2, s2 = t2.max_chain_length, n2 = t2.strstart, a2 = t2.prev_length, o2 = t2.nice_match, l2 = t2.strstart > t2.w_size - d ? t2.strstart - (t2.w_size - d) : 0, h2 = t2.window, u2 = t2.w_mask, f2 = t2.prev, p2 = t2.strstart + c, g2 = h2[n2 + a2 - 1], m2 = h2[n2 + a2];
          t2.prev_length >= t2.good_match && (s2 >>= 2), o2 > t2.lookahead && (o2 = t2.lookahead);
          do {
            if (h2[(i2 = e2) + a2] === m2 && h2[i2 + a2 - 1] === g2 && h2[i2] === h2[n2] && h2[++i2] === h2[n2 + 1]) {
              n2 += 2, i2++;
              do {
              } while (h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && n2 < p2);
              if (r2 = c - (p2 - n2), n2 = p2 - c, r2 > a2) {
                if (t2.match_start = e2, a2 = r2, r2 >= o2) break;
                g2 = h2[n2 + a2 - 1], m2 = h2[n2 + a2];
              }
            }
          } while ((e2 = f2[e2 & u2]) > l2 && 0 != --s2);
          return a2 <= t2.lookahead ? a2 : t2.lookahead;
        }
        function A(t2) {
          var e2, i2, r2, n2, l2, h2, c2, u2, f2, p2, g2 = t2.w_size;
          do {
            if (n2 = t2.window_size - t2.lookahead - t2.strstart, t2.strstart >= g2 + (g2 - d)) {
              s.arraySet(t2.window, t2.window, g2, g2, 0), t2.match_start -= g2, t2.strstart -= g2, t2.block_start -= g2, e2 = i2 = t2.hash_size;
              do {
                r2 = t2.head[--e2], t2.head[e2] = r2 >= g2 ? r2 - g2 : 0;
              } while (--i2);
              e2 = i2 = g2;
              do {
                r2 = t2.prev[--e2], t2.prev[e2] = r2 >= g2 ? r2 - g2 : 0;
              } while (--i2);
              n2 += g2;
            }
            if (0 === t2.strm.avail_in) break;
            if (h2 = t2.strm, c2 = t2.window, u2 = t2.strstart + t2.lookahead, f2 = n2, p2 = void 0, (p2 = h2.avail_in) > f2 && (p2 = f2), i2 = 0 === p2 ? 0 : (h2.avail_in -= p2, s.arraySet(c2, h2.input, h2.next_in, p2, u2), 1 === h2.state.wrap ? h2.adler = a(h2.adler, c2, p2, u2) : 2 === h2.state.wrap && (h2.adler = o(h2.adler, c2, p2, u2)), h2.next_in += p2, h2.total_in += p2, p2), t2.lookahead += i2, t2.lookahead + t2.insert >= 3) for (l2 = t2.strstart - t2.insert, t2.ins_h = t2.window[l2], t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[l2 + 1]) & t2.hash_mask; t2.insert && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[l2 + 3 - 1]) & t2.hash_mask, t2.prev[l2 & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = l2, l2++, t2.insert--, !(t2.lookahead + t2.insert < 3)); ) ;
          } while (t2.lookahead < d && 0 !== t2.strm.avail_in);
        }
        function C(t2, e2) {
          for (var i2, r2; ; ) {
            if (t2.lookahead < d) {
              if (A(t2), t2.lookahead < d && 0 === e2) return 1;
              if (0 === t2.lookahead) break;
            }
            if (i2 = 0, t2.lookahead >= 3 && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, i2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), 0 !== i2 && t2.strstart - i2 <= t2.w_size - d && (t2.match_length = w(t2, i2)), t2.match_length >= 3) if (r2 = n._tr_tally(t2, t2.strstart - t2.match_start, t2.match_length - 3), t2.lookahead -= t2.match_length, t2.match_length <= t2.max_lazy_match && t2.lookahead >= 3) {
              t2.match_length--;
              do {
                t2.strstart++, t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, i2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart;
              } while (0 != --t2.match_length);
              t2.strstart++;
            } else t2.strstart += t2.match_length, t2.match_length = 0, t2.ins_h = t2.window[t2.strstart], t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 1]) & t2.hash_mask;
            else r2 = n._tr_tally(t2, 0, t2.window[t2.strstart]), t2.lookahead--, t2.strstart++;
            if (r2 && (y(t2, false), 0 === t2.strm.avail_out)) return 1;
          }
          return t2.insert = t2.strstart < 2 ? t2.strstart : 2, 4 === e2 ? (y(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.last_lit && (y(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
        }
        function S3(t2, e2) {
          for (var i2, r2, s2; ; ) {
            if (t2.lookahead < d) {
              if (A(t2), t2.lookahead < d && 0 === e2) return 1;
              if (0 === t2.lookahead) break;
            }
            if (i2 = 0, t2.lookahead >= 3 && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, i2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), t2.prev_length = t2.match_length, t2.prev_match = t2.match_start, t2.match_length = 2, 0 !== i2 && t2.prev_length < t2.max_lazy_match && t2.strstart - i2 <= t2.w_size - d && (t2.match_length = w(t2, i2), t2.match_length <= 5 && (1 === t2.strategy || 3 === t2.match_length && t2.strstart - t2.match_start > 4096) && (t2.match_length = 2)), t2.prev_length >= 3 && t2.match_length <= t2.prev_length) {
              s2 = t2.strstart + t2.lookahead - 3, r2 = n._tr_tally(t2, t2.strstart - 1 - t2.prev_match, t2.prev_length - 3), t2.lookahead -= t2.prev_length - 1, t2.prev_length -= 2;
              do {
                ++t2.strstart <= s2 && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, i2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart);
              } while (0 != --t2.prev_length);
              if (t2.match_available = 0, t2.match_length = 2, t2.strstart++, r2 && (y(t2, false), 0 === t2.strm.avail_out)) return 1;
            } else if (t2.match_available) {
              if ((r2 = n._tr_tally(t2, 0, t2.window[t2.strstart - 1])) && y(t2, false), t2.strstart++, t2.lookahead--, 0 === t2.strm.avail_out) return 1;
            } else t2.match_available = 1, t2.strstart++, t2.lookahead--;
          }
          return t2.match_available && (r2 = n._tr_tally(t2, 0, t2.window[t2.strstart - 1]), t2.match_available = 0), t2.insert = t2.strstart < 2 ? t2.strstart : 2, 4 === e2 ? (y(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.last_lit && (y(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
        }
        function M(t2, e2, i2, r2, s2) {
          this.good_length = t2, this.max_lazy = e2, this.nice_length = i2, this.max_chain = r2, this.func = s2;
        }
        function z() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(1146), this.dyn_dtree = new s.Buf16(122), this.bl_tree = new s.Buf16(78), v(this.dyn_ltree), v(this.dyn_dtree), v(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(16), this.heap = new s.Buf16(573), v(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(573), v(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function T(t2) {
          var e2;
          return t2 && t2.state ? (t2.total_in = t2.total_out = 0, t2.data_type = 2, (e2 = t2.state).pending = 0, e2.pending_out = 0, e2.wrap < 0 && (e2.wrap = -e2.wrap), e2.status = e2.wrap ? 42 : f, t2.adler = 2 === e2.wrap ? 0 : 1, e2.last_flush = 0, n._tr_init(e2), 0) : g(t2, h);
        }
        function E(t2) {
          var e2, i2 = T(t2);
          return 0 === i2 && ((e2 = t2.state).window_size = 2 * e2.w_size, v(e2.head), e2.max_lazy_match = r[e2.level].max_lazy, e2.good_match = r[e2.level].good_length, e2.nice_match = r[e2.level].nice_length, e2.max_chain_length = r[e2.level].max_chain, e2.strstart = 0, e2.block_start = 0, e2.lookahead = 0, e2.insert = 0, e2.match_length = e2.prev_length = 2, e2.match_available = 0, e2.ins_h = 0), i2;
        }
        function L(t2, e2, i2, r2, n2, a2) {
          if (!t2) return h;
          var o2 = 1;
          if (-1 === e2 && (e2 = 6), r2 < 0 ? (o2 = 0, r2 = -r2) : r2 > 15 && (o2 = 2, r2 -= 16), n2 < 1 || n2 > 9 || 8 !== i2 || r2 < 8 || r2 > 15 || e2 < 0 || e2 > 9 || a2 < 0 || a2 > 4) return g(t2, h);
          8 === r2 && (r2 = 9);
          var l2 = new z();
          return t2.state = l2, l2.strm = t2, l2.wrap = o2, l2.gzhead = null, l2.w_bits = r2, l2.w_size = 1 << l2.w_bits, l2.w_mask = l2.w_size - 1, l2.hash_bits = n2 + 7, l2.hash_size = 1 << l2.hash_bits, l2.hash_mask = l2.hash_size - 1, l2.hash_shift = ~~((l2.hash_bits + 3 - 1) / 3), l2.window = new s.Buf8(2 * l2.w_size), l2.head = new s.Buf16(l2.hash_size), l2.prev = new s.Buf16(l2.w_size), l2.lit_bufsize = 1 << n2 + 6, l2.pending_buf_size = 4 * l2.lit_bufsize, l2.pending_buf = new s.Buf8(l2.pending_buf_size), l2.d_buf = 1 * l2.lit_bufsize, l2.l_buf = 3 * l2.lit_bufsize, l2.level = e2, l2.strategy = a2, l2.method = i2, E(t2);
        }
        r = [new M(0, 0, 0, 0, (function(t2, e2) {
          var i2 = 65535;
          for (i2 > t2.pending_buf_size - 5 && (i2 = t2.pending_buf_size - 5); ; ) {
            if (t2.lookahead <= 1) {
              if (A(t2), 0 === t2.lookahead && 0 === e2) return 1;
              if (0 === t2.lookahead) break;
            }
            t2.strstart += t2.lookahead, t2.lookahead = 0;
            var r2 = t2.block_start + i2;
            if ((0 === t2.strstart || t2.strstart >= r2) && (t2.lookahead = t2.strstart - r2, t2.strstart = r2, y(t2, false), 0 === t2.strm.avail_out)) return 1;
            if (t2.strstart - t2.block_start >= t2.w_size - d && (y(t2, false), 0 === t2.strm.avail_out)) return 1;
          }
          return t2.insert = 0, 4 === e2 ? (y(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : (t2.strstart > t2.block_start && (y(t2, false), t2.strm.avail_out), 1);
        })), new M(4, 4, 8, 4, C), new M(4, 5, 16, 8, C), new M(4, 6, 32, 32, C), new M(4, 4, 16, 16, S3), new M(8, 16, 32, 32, S3), new M(8, 16, 128, 128, S3), new M(8, 32, 128, 256, S3), new M(32, 128, 258, 1024, S3), new M(32, 258, 258, 4096, S3)], e.deflateInit = function(t2, e2) {
          return L(t2, e2, 8, 15, 8, 0);
        }, e.deflateInit2 = L, e.deflateReset = E, e.deflateResetKeep = T, e.deflateSetHeader = function(t2, e2) {
          return t2 && t2.state ? 2 !== t2.state.wrap ? h : (t2.state.gzhead = e2, 0) : h;
        }, e.deflate = function(t2, e2) {
          var i2, s2, a2, l2;
          if (!t2 || !t2.state || e2 > 5 || e2 < 0) return t2 ? g(t2, h) : h;
          if (s2 = t2.state, !t2.output || !t2.input && 0 !== t2.avail_in || s2.status === p && 4 !== e2) return g(t2, 0 === t2.avail_out ? -5 : h);
          if (s2.strm = t2, i2 = s2.last_flush, s2.last_flush = e2, 42 === s2.status) if (2 === s2.wrap) t2.adler = 0, b(s2, 31), b(s2, 139), b(s2, 8), s2.gzhead ? (b(s2, (s2.gzhead.text ? 1 : 0) + (s2.gzhead.hcrc ? 2 : 0) + (s2.gzhead.extra ? 4 : 0) + (s2.gzhead.name ? 8 : 0) + (s2.gzhead.comment ? 16 : 0)), b(s2, 255 & s2.gzhead.time), b(s2, s2.gzhead.time >> 8 & 255), b(s2, s2.gzhead.time >> 16 & 255), b(s2, s2.gzhead.time >> 24 & 255), b(s2, 9 === s2.level ? 2 : s2.strategy >= 2 || s2.level < 2 ? 4 : 0), b(s2, 255 & s2.gzhead.os), s2.gzhead.extra && s2.gzhead.extra.length && (b(s2, 255 & s2.gzhead.extra.length), b(s2, s2.gzhead.extra.length >> 8 & 255)), s2.gzhead.hcrc && (t2.adler = o(t2.adler, s2.pending_buf, s2.pending, 0)), s2.gzindex = 0, s2.status = 69) : (b(s2, 0), b(s2, 0), b(s2, 0), b(s2, 0), b(s2, 0), b(s2, 9 === s2.level ? 2 : s2.strategy >= 2 || s2.level < 2 ? 4 : 0), b(s2, 3), s2.status = f);
          else {
            var d2 = 8 + (s2.w_bits - 8 << 4) << 8;
            d2 |= (s2.strategy >= 2 || s2.level < 2 ? 0 : s2.level < 6 ? 1 : 6 === s2.level ? 2 : 3) << 6, 0 !== s2.strstart && (d2 |= 32), d2 += 31 - d2 % 31, s2.status = f, x(s2, d2), 0 !== s2.strstart && (x(s2, t2.adler >>> 16), x(s2, 65535 & t2.adler)), t2.adler = 1;
          }
          if (69 === s2.status) if (s2.gzhead.extra) {
            for (a2 = s2.pending; s2.gzindex < (65535 & s2.gzhead.extra.length) && (s2.pending !== s2.pending_buf_size || (s2.gzhead.hcrc && s2.pending > a2 && (t2.adler = o(t2.adler, s2.pending_buf, s2.pending - a2, a2)), _(t2), a2 = s2.pending, s2.pending !== s2.pending_buf_size)); ) b(s2, 255 & s2.gzhead.extra[s2.gzindex]), s2.gzindex++;
            s2.gzhead.hcrc && s2.pending > a2 && (t2.adler = o(t2.adler, s2.pending_buf, s2.pending - a2, a2)), s2.gzindex === s2.gzhead.extra.length && (s2.gzindex = 0, s2.status = 73);
          } else s2.status = 73;
          if (73 === s2.status) if (s2.gzhead.name) {
            a2 = s2.pending;
            do {
              if (s2.pending === s2.pending_buf_size && (s2.gzhead.hcrc && s2.pending > a2 && (t2.adler = o(t2.adler, s2.pending_buf, s2.pending - a2, a2)), _(t2), a2 = s2.pending, s2.pending === s2.pending_buf_size)) {
                l2 = 1;
                break;
              }
              l2 = s2.gzindex < s2.gzhead.name.length ? 255 & s2.gzhead.name.charCodeAt(s2.gzindex++) : 0, b(s2, l2);
            } while (0 !== l2);
            s2.gzhead.hcrc && s2.pending > a2 && (t2.adler = o(t2.adler, s2.pending_buf, s2.pending - a2, a2)), 0 === l2 && (s2.gzindex = 0, s2.status = 91);
          } else s2.status = 91;
          if (91 === s2.status) if (s2.gzhead.comment) {
            a2 = s2.pending;
            do {
              if (s2.pending === s2.pending_buf_size && (s2.gzhead.hcrc && s2.pending > a2 && (t2.adler = o(t2.adler, s2.pending_buf, s2.pending - a2, a2)), _(t2), a2 = s2.pending, s2.pending === s2.pending_buf_size)) {
                l2 = 1;
                break;
              }
              l2 = s2.gzindex < s2.gzhead.comment.length ? 255 & s2.gzhead.comment.charCodeAt(s2.gzindex++) : 0, b(s2, l2);
            } while (0 !== l2);
            s2.gzhead.hcrc && s2.pending > a2 && (t2.adler = o(t2.adler, s2.pending_buf, s2.pending - a2, a2)), 0 === l2 && (s2.status = u);
          } else s2.status = u;
          if (s2.status === u && (s2.gzhead.hcrc ? (s2.pending + 2 > s2.pending_buf_size && _(t2), s2.pending + 2 <= s2.pending_buf_size && (b(s2, 255 & t2.adler), b(s2, t2.adler >> 8 & 255), t2.adler = 0, s2.status = f)) : s2.status = f), 0 !== s2.pending) {
            if (_(t2), 0 === t2.avail_out) return s2.last_flush = -1, 0;
          } else if (0 === t2.avail_in && m(e2) <= m(i2) && 4 !== e2) return g(t2, -5);
          if (s2.status === p && 0 !== t2.avail_in) return g(t2, -5);
          if (0 !== t2.avail_in || 0 !== s2.lookahead || 0 !== e2 && s2.status !== p) {
            var w2 = 2 === s2.strategy ? (function(t3, e3) {
              for (var i3; ; ) {
                if (0 === t3.lookahead && (A(t3), 0 === t3.lookahead)) {
                  if (0 === e3) return 1;
                  break;
                }
                if (t3.match_length = 0, i3 = n._tr_tally(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++, i3 && (y(t3, false), 0 === t3.strm.avail_out)) return 1;
              }
              return t3.insert = 0, 4 === e3 ? (y(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.last_lit && (y(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
            })(s2, e2) : 3 === s2.strategy ? (function(t3, e3) {
              for (var i3, r2, s3, a3, o2 = t3.window; ; ) {
                if (t3.lookahead <= c) {
                  if (A(t3), t3.lookahead <= c && 0 === e3) return 1;
                  if (0 === t3.lookahead) break;
                }
                if (t3.match_length = 0, t3.lookahead >= 3 && t3.strstart > 0 && (r2 = o2[s3 = t3.strstart - 1]) === o2[++s3] && r2 === o2[++s3] && r2 === o2[++s3]) {
                  a3 = t3.strstart + c;
                  do {
                  } while (r2 === o2[++s3] && r2 === o2[++s3] && r2 === o2[++s3] && r2 === o2[++s3] && r2 === o2[++s3] && r2 === o2[++s3] && r2 === o2[++s3] && r2 === o2[++s3] && s3 < a3);
                  t3.match_length = c - (a3 - s3), t3.match_length > t3.lookahead && (t3.match_length = t3.lookahead);
                }
                if (t3.match_length >= 3 ? (i3 = n._tr_tally(t3, 1, t3.match_length - 3), t3.lookahead -= t3.match_length, t3.strstart += t3.match_length, t3.match_length = 0) : (i3 = n._tr_tally(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++), i3 && (y(t3, false), 0 === t3.strm.avail_out)) return 1;
              }
              return t3.insert = 0, 4 === e3 ? (y(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.last_lit && (y(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
            })(s2, e2) : r[s2.level].func(s2, e2);
            if (3 !== w2 && 4 !== w2 || (s2.status = p), 1 === w2 || 3 === w2) return 0 === t2.avail_out && (s2.last_flush = -1), 0;
            if (2 === w2 && (1 === e2 ? n._tr_align(s2) : 5 !== e2 && (n._tr_stored_block(s2, 0, 0, false), 3 === e2 && (v(s2.head), 0 === s2.lookahead && (s2.strstart = 0, s2.block_start = 0, s2.insert = 0))), _(t2), 0 === t2.avail_out)) return s2.last_flush = -1, 0;
          }
          return 4 !== e2 ? 0 : s2.wrap <= 0 ? 1 : (2 === s2.wrap ? (b(s2, 255 & t2.adler), b(s2, t2.adler >> 8 & 255), b(s2, t2.adler >> 16 & 255), b(s2, t2.adler >> 24 & 255), b(s2, 255 & t2.total_in), b(s2, t2.total_in >> 8 & 255), b(s2, t2.total_in >> 16 & 255), b(s2, t2.total_in >> 24 & 255)) : (x(s2, t2.adler >>> 16), x(s2, 65535 & t2.adler)), _(t2), s2.wrap > 0 && (s2.wrap = -s2.wrap), 0 !== s2.pending ? 0 : 1);
        }, e.deflateEnd = function(t2) {
          var e2;
          return t2 && t2.state ? 42 !== (e2 = t2.state.status) && 69 !== e2 && 73 !== e2 && 91 !== e2 && e2 !== u && e2 !== f && e2 !== p ? g(t2, h) : (t2.state = null, e2 === f ? g(t2, -3) : 0) : h;
        }, e.deflateSetDictionary = function(t2, e2) {
          var i2, r2, n2, o2, l2, c2, d2, u2, f2 = e2.length;
          if (!t2 || !t2.state) return h;
          if (2 === (o2 = (i2 = t2.state).wrap) || 1 === o2 && 42 !== i2.status || i2.lookahead) return h;
          for (1 === o2 && (t2.adler = a(t2.adler, e2, f2, 0)), i2.wrap = 0, f2 >= i2.w_size && (0 === o2 && (v(i2.head), i2.strstart = 0, i2.block_start = 0, i2.insert = 0), u2 = new s.Buf8(i2.w_size), s.arraySet(u2, e2, f2 - i2.w_size, i2.w_size, 0), e2 = u2, f2 = i2.w_size), l2 = t2.avail_in, c2 = t2.next_in, d2 = t2.input, t2.avail_in = f2, t2.next_in = 0, t2.input = e2, A(i2); i2.lookahead >= 3; ) {
            r2 = i2.strstart, n2 = i2.lookahead - 2;
            do {
              i2.ins_h = (i2.ins_h << i2.hash_shift ^ i2.window[r2 + 3 - 1]) & i2.hash_mask, i2.prev[r2 & i2.w_mask] = i2.head[i2.ins_h], i2.head[i2.ins_h] = r2, r2++;
            } while (--n2);
            i2.strstart = r2, i2.lookahead = 2, A(i2);
          }
          return i2.strstart += i2.lookahead, i2.block_start = i2.strstart, i2.insert = i2.lookahead, i2.lookahead = 0, i2.match_length = i2.prev_length = 2, i2.match_available = 0, t2.next_in = c2, t2.input = d2, t2.avail_in = l2, i2.wrap = o2, 0;
        }, e.deflateInfo = "pako deflate (from Nodeca project)";
      }, 670: (t) => {
        "use strict";
        t.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
      }, 165: (t) => {
        "use strict";
        t.exports = function(t2, e) {
          var i, r, s, n, a, o, l, h, c, d, u, f, p, g, m, v, _, y, b, x, w, A, C, S3, M;
          i = t2.state, r = t2.next_in, S3 = t2.input, s = r + (t2.avail_in - 5), n = t2.next_out, M = t2.output, a = n - (e - t2.avail_out), o = n + (t2.avail_out - 257), l = i.dmax, h = i.wsize, c = i.whave, d = i.wnext, u = i.window, f = i.hold, p = i.bits, g = i.lencode, m = i.distcode, v = (1 << i.lenbits) - 1, _ = (1 << i.distbits) - 1;
          t: do {
            p < 15 && (f += S3[r++] << p, p += 8, f += S3[r++] << p, p += 8), y = g[f & v];
            e: for (; ; ) {
              if (f >>>= b = y >>> 24, p -= b, 0 === (b = y >>> 16 & 255)) M[n++] = 65535 & y;
              else {
                if (!(16 & b)) {
                  if (64 & b) {
                    if (32 & b) {
                      i.mode = 12;
                      break t;
                    }
                    t2.msg = "invalid literal/length code", i.mode = 30;
                    break t;
                  }
                  y = g[(65535 & y) + (f & (1 << b) - 1)];
                  continue e;
                }
                for (x = 65535 & y, (b &= 15) && (p < b && (f += S3[r++] << p, p += 8), x += f & (1 << b) - 1, f >>>= b, p -= b), p < 15 && (f += S3[r++] << p, p += 8, f += S3[r++] << p, p += 8), y = m[f & _]; ; ) {
                  if (f >>>= b = y >>> 24, p -= b, 16 & (b = y >>> 16 & 255)) {
                    if (w = 65535 & y, p < (b &= 15) && (f += S3[r++] << p, (p += 8) < b && (f += S3[r++] << p, p += 8)), (w += f & (1 << b) - 1) > l) {
                      t2.msg = "invalid distance too far back", i.mode = 30;
                      break t;
                    }
                    if (f >>>= b, p -= b, w > (b = n - a)) {
                      if ((b = w - b) > c && i.sane) {
                        t2.msg = "invalid distance too far back", i.mode = 30;
                        break t;
                      }
                      if (A = 0, C = u, 0 === d) {
                        if (A += h - b, b < x) {
                          x -= b;
                          do {
                            M[n++] = u[A++];
                          } while (--b);
                          A = n - w, C = M;
                        }
                      } else if (d < b) {
                        if (A += h + d - b, (b -= d) < x) {
                          x -= b;
                          do {
                            M[n++] = u[A++];
                          } while (--b);
                          if (A = 0, d < x) {
                            x -= b = d;
                            do {
                              M[n++] = u[A++];
                            } while (--b);
                            A = n - w, C = M;
                          }
                        }
                      } else if (A += d - b, b < x) {
                        x -= b;
                        do {
                          M[n++] = u[A++];
                        } while (--b);
                        A = n - w, C = M;
                      }
                      for (; x > 2; ) M[n++] = C[A++], M[n++] = C[A++], M[n++] = C[A++], x -= 3;
                      x && (M[n++] = C[A++], x > 1 && (M[n++] = C[A++]));
                    } else {
                      A = n - w;
                      do {
                        M[n++] = M[A++], M[n++] = M[A++], M[n++] = M[A++], x -= 3;
                      } while (x > 2);
                      x && (M[n++] = M[A++], x > 1 && (M[n++] = M[A++]));
                    }
                    break;
                  }
                  if (64 & b) {
                    t2.msg = "invalid distance code", i.mode = 30;
                    break t;
                  }
                  y = m[(65535 & y) + (f & (1 << b) - 1)];
                }
              }
              break;
            }
          } while (r < s && n < o);
          r -= x = p >> 3, f &= (1 << (p -= x << 3)) - 1, t2.next_in = r, t2.next_out = n, t2.avail_in = r < s ? s - r + 5 : 5 - (r - s), t2.avail_out = n < o ? o - n + 257 : 257 - (n - o), i.hold = f, i.bits = p;
        };
      }, 663: (t, e, i) => {
        "use strict";
        var r = i(981), s = i(701), n = i(407), a = i(165), o = i(358), l = -2, h = 12, c = 30;
        function d(t2) {
          return (t2 >>> 24 & 255) + (t2 >>> 8 & 65280) + ((65280 & t2) << 8) + ((255 & t2) << 24);
        }
        function u() {
          this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function f(t2) {
          var e2;
          return t2 && t2.state ? (e2 = t2.state, t2.total_in = t2.total_out = e2.total = 0, t2.msg = "", e2.wrap && (t2.adler = 1 & e2.wrap), e2.mode = 1, e2.last = 0, e2.havedict = 0, e2.dmax = 32768, e2.head = null, e2.hold = 0, e2.bits = 0, e2.lencode = e2.lendyn = new r.Buf32(852), e2.distcode = e2.distdyn = new r.Buf32(592), e2.sane = 1, e2.back = -1, 0) : l;
        }
        function p(t2) {
          var e2;
          return t2 && t2.state ? ((e2 = t2.state).wsize = 0, e2.whave = 0, e2.wnext = 0, f(t2)) : l;
        }
        function g(t2, e2) {
          var i2, r2;
          return t2 && t2.state ? (r2 = t2.state, e2 < 0 ? (i2 = 0, e2 = -e2) : (i2 = 1 + (e2 >> 4), e2 < 48 && (e2 &= 15)), e2 && (e2 < 8 || e2 > 15) ? l : (null !== r2.window && r2.wbits !== e2 && (r2.window = null), r2.wrap = i2, r2.wbits = e2, p(t2))) : l;
        }
        function m(t2, e2) {
          var i2, r2;
          return t2 ? (r2 = new u(), t2.state = r2, r2.window = null, 0 !== (i2 = g(t2, e2)) && (t2.state = null), i2) : l;
        }
        var v, _, y = true;
        function b(t2) {
          if (y) {
            var e2;
            for (v = new r.Buf32(512), _ = new r.Buf32(32), e2 = 0; e2 < 144; ) t2.lens[e2++] = 8;
            for (; e2 < 256; ) t2.lens[e2++] = 9;
            for (; e2 < 280; ) t2.lens[e2++] = 7;
            for (; e2 < 288; ) t2.lens[e2++] = 8;
            for (o(1, t2.lens, 0, 288, v, 0, t2.work, { bits: 9 }), e2 = 0; e2 < 32; ) t2.lens[e2++] = 5;
            o(2, t2.lens, 0, 32, _, 0, t2.work, { bits: 5 }), y = false;
          }
          t2.lencode = v, t2.lenbits = 9, t2.distcode = _, t2.distbits = 5;
        }
        function x(t2, e2, i2, s2) {
          var n2, a2 = t2.state;
          return null === a2.window && (a2.wsize = 1 << a2.wbits, a2.wnext = 0, a2.whave = 0, a2.window = new r.Buf8(a2.wsize)), s2 >= a2.wsize ? (r.arraySet(a2.window, e2, i2 - a2.wsize, a2.wsize, 0), a2.wnext = 0, a2.whave = a2.wsize) : ((n2 = a2.wsize - a2.wnext) > s2 && (n2 = s2), r.arraySet(a2.window, e2, i2 - s2, n2, a2.wnext), (s2 -= n2) ? (r.arraySet(a2.window, e2, i2 - s2, s2, 0), a2.wnext = s2, a2.whave = a2.wsize) : (a2.wnext += n2, a2.wnext === a2.wsize && (a2.wnext = 0), a2.whave < a2.wsize && (a2.whave += n2))), 0;
        }
        e.inflateReset = p, e.inflateReset2 = g, e.inflateResetKeep = f, e.inflateInit = function(t2) {
          return m(t2, 15);
        }, e.inflateInit2 = m, e.inflate = function(t2, e2) {
          var i2, u2, f2, p2, g2, m2, v2, _2, y2, w, A, C, S3, M, z, T, E, L, F, I, O, D, k, R, P = 0, U = new r.Buf8(4), B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!t2 || !t2.state || !t2.output || !t2.input && 0 !== t2.avail_in) return l;
          (i2 = t2.state).mode === h && (i2.mode = 13), g2 = t2.next_out, f2 = t2.output, v2 = t2.avail_out, p2 = t2.next_in, u2 = t2.input, m2 = t2.avail_in, _2 = i2.hold, y2 = i2.bits, w = m2, A = v2, D = 0;
          t: for (; ; ) switch (i2.mode) {
            case 1:
              if (0 === i2.wrap) {
                i2.mode = 13;
                break;
              }
              for (; y2 < 16; ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              if (2 & i2.wrap && 35615 === _2) {
                i2.check = 0, U[0] = 255 & _2, U[1] = _2 >>> 8 & 255, i2.check = n(i2.check, U, 2, 0), _2 = 0, y2 = 0, i2.mode = 2;
                break;
              }
              if (i2.flags = 0, i2.head && (i2.head.done = false), !(1 & i2.wrap) || (((255 & _2) << 8) + (_2 >> 8)) % 31) {
                t2.msg = "incorrect header check", i2.mode = c;
                break;
              }
              if (8 != (15 & _2)) {
                t2.msg = "unknown compression method", i2.mode = c;
                break;
              }
              if (y2 -= 4, O = 8 + (15 & (_2 >>>= 4)), 0 === i2.wbits) i2.wbits = O;
              else if (O > i2.wbits) {
                t2.msg = "invalid window size", i2.mode = c;
                break;
              }
              i2.dmax = 1 << O, t2.adler = i2.check = 1, i2.mode = 512 & _2 ? 10 : h, _2 = 0, y2 = 0;
              break;
            case 2:
              for (; y2 < 16; ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              if (i2.flags = _2, 8 != (255 & i2.flags)) {
                t2.msg = "unknown compression method", i2.mode = c;
                break;
              }
              if (57344 & i2.flags) {
                t2.msg = "unknown header flags set", i2.mode = c;
                break;
              }
              i2.head && (i2.head.text = _2 >> 8 & 1), 512 & i2.flags && (U[0] = 255 & _2, U[1] = _2 >>> 8 & 255, i2.check = n(i2.check, U, 2, 0)), _2 = 0, y2 = 0, i2.mode = 3;
            case 3:
              for (; y2 < 32; ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              i2.head && (i2.head.time = _2), 512 & i2.flags && (U[0] = 255 & _2, U[1] = _2 >>> 8 & 255, U[2] = _2 >>> 16 & 255, U[3] = _2 >>> 24 & 255, i2.check = n(i2.check, U, 4, 0)), _2 = 0, y2 = 0, i2.mode = 4;
            case 4:
              for (; y2 < 16; ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              i2.head && (i2.head.xflags = 255 & _2, i2.head.os = _2 >> 8), 512 & i2.flags && (U[0] = 255 & _2, U[1] = _2 >>> 8 & 255, i2.check = n(i2.check, U, 2, 0)), _2 = 0, y2 = 0, i2.mode = 5;
            case 5:
              if (1024 & i2.flags) {
                for (; y2 < 16; ) {
                  if (0 === m2) break t;
                  m2--, _2 += u2[p2++] << y2, y2 += 8;
                }
                i2.length = _2, i2.head && (i2.head.extra_len = _2), 512 & i2.flags && (U[0] = 255 & _2, U[1] = _2 >>> 8 & 255, i2.check = n(i2.check, U, 2, 0)), _2 = 0, y2 = 0;
              } else i2.head && (i2.head.extra = null);
              i2.mode = 6;
            case 6:
              if (1024 & i2.flags && ((C = i2.length) > m2 && (C = m2), C && (i2.head && (O = i2.head.extra_len - i2.length, i2.head.extra || (i2.head.extra = new Array(i2.head.extra_len)), r.arraySet(i2.head.extra, u2, p2, C, O)), 512 & i2.flags && (i2.check = n(i2.check, u2, C, p2)), m2 -= C, p2 += C, i2.length -= C), i2.length)) break t;
              i2.length = 0, i2.mode = 7;
            case 7:
              if (2048 & i2.flags) {
                if (0 === m2) break t;
                C = 0;
                do {
                  O = u2[p2 + C++], i2.head && O && i2.length < 65536 && (i2.head.name += String.fromCharCode(O));
                } while (O && C < m2);
                if (512 & i2.flags && (i2.check = n(i2.check, u2, C, p2)), m2 -= C, p2 += C, O) break t;
              } else i2.head && (i2.head.name = null);
              i2.length = 0, i2.mode = 8;
            case 8:
              if (4096 & i2.flags) {
                if (0 === m2) break t;
                C = 0;
                do {
                  O = u2[p2 + C++], i2.head && O && i2.length < 65536 && (i2.head.comment += String.fromCharCode(O));
                } while (O && C < m2);
                if (512 & i2.flags && (i2.check = n(i2.check, u2, C, p2)), m2 -= C, p2 += C, O) break t;
              } else i2.head && (i2.head.comment = null);
              i2.mode = 9;
            case 9:
              if (512 & i2.flags) {
                for (; y2 < 16; ) {
                  if (0 === m2) break t;
                  m2--, _2 += u2[p2++] << y2, y2 += 8;
                }
                if (_2 !== (65535 & i2.check)) {
                  t2.msg = "header crc mismatch", i2.mode = c;
                  break;
                }
                _2 = 0, y2 = 0;
              }
              i2.head && (i2.head.hcrc = i2.flags >> 9 & 1, i2.head.done = true), t2.adler = i2.check = 0, i2.mode = h;
              break;
            case 10:
              for (; y2 < 32; ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              t2.adler = i2.check = d(_2), _2 = 0, y2 = 0, i2.mode = 11;
            case 11:
              if (0 === i2.havedict) return t2.next_out = g2, t2.avail_out = v2, t2.next_in = p2, t2.avail_in = m2, i2.hold = _2, i2.bits = y2, 2;
              t2.adler = i2.check = 1, i2.mode = h;
            case h:
              if (5 === e2 || 6 === e2) break t;
            case 13:
              if (i2.last) {
                _2 >>>= 7 & y2, y2 -= 7 & y2, i2.mode = 27;
                break;
              }
              for (; y2 < 3; ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              switch (i2.last = 1 & _2, y2 -= 1, 3 & (_2 >>>= 1)) {
                case 0:
                  i2.mode = 14;
                  break;
                case 1:
                  if (b(i2), i2.mode = 20, 6 === e2) {
                    _2 >>>= 2, y2 -= 2;
                    break t;
                  }
                  break;
                case 2:
                  i2.mode = 17;
                  break;
                case 3:
                  t2.msg = "invalid block type", i2.mode = c;
              }
              _2 >>>= 2, y2 -= 2;
              break;
            case 14:
              for (_2 >>>= 7 & y2, y2 -= 7 & y2; y2 < 32; ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              if ((65535 & _2) != (_2 >>> 16 ^ 65535)) {
                t2.msg = "invalid stored block lengths", i2.mode = c;
                break;
              }
              if (i2.length = 65535 & _2, _2 = 0, y2 = 0, i2.mode = 15, 6 === e2) break t;
            case 15:
              i2.mode = 16;
            case 16:
              if (C = i2.length) {
                if (C > m2 && (C = m2), C > v2 && (C = v2), 0 === C) break t;
                r.arraySet(f2, u2, p2, C, g2), m2 -= C, p2 += C, v2 -= C, g2 += C, i2.length -= C;
                break;
              }
              i2.mode = h;
              break;
            case 17:
              for (; y2 < 14; ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              if (i2.nlen = 257 + (31 & _2), _2 >>>= 5, y2 -= 5, i2.ndist = 1 + (31 & _2), _2 >>>= 5, y2 -= 5, i2.ncode = 4 + (15 & _2), _2 >>>= 4, y2 -= 4, i2.nlen > 286 || i2.ndist > 30) {
                t2.msg = "too many length or distance symbols", i2.mode = c;
                break;
              }
              i2.have = 0, i2.mode = 18;
            case 18:
              for (; i2.have < i2.ncode; ) {
                for (; y2 < 3; ) {
                  if (0 === m2) break t;
                  m2--, _2 += u2[p2++] << y2, y2 += 8;
                }
                i2.lens[B[i2.have++]] = 7 & _2, _2 >>>= 3, y2 -= 3;
              }
              for (; i2.have < 19; ) i2.lens[B[i2.have++]] = 0;
              if (i2.lencode = i2.lendyn, i2.lenbits = 7, k = { bits: i2.lenbits }, D = o(0, i2.lens, 0, 19, i2.lencode, 0, i2.work, k), i2.lenbits = k.bits, D) {
                t2.msg = "invalid code lengths set", i2.mode = c;
                break;
              }
              i2.have = 0, i2.mode = 19;
            case 19:
              for (; i2.have < i2.nlen + i2.ndist; ) {
                for (; T = (P = i2.lencode[_2 & (1 << i2.lenbits) - 1]) >>> 16 & 255, E = 65535 & P, !((z = P >>> 24) <= y2); ) {
                  if (0 === m2) break t;
                  m2--, _2 += u2[p2++] << y2, y2 += 8;
                }
                if (E < 16) _2 >>>= z, y2 -= z, i2.lens[i2.have++] = E;
                else {
                  if (16 === E) {
                    for (R = z + 2; y2 < R; ) {
                      if (0 === m2) break t;
                      m2--, _2 += u2[p2++] << y2, y2 += 8;
                    }
                    if (_2 >>>= z, y2 -= z, 0 === i2.have) {
                      t2.msg = "invalid bit length repeat", i2.mode = c;
                      break;
                    }
                    O = i2.lens[i2.have - 1], C = 3 + (3 & _2), _2 >>>= 2, y2 -= 2;
                  } else if (17 === E) {
                    for (R = z + 3; y2 < R; ) {
                      if (0 === m2) break t;
                      m2--, _2 += u2[p2++] << y2, y2 += 8;
                    }
                    y2 -= z, O = 0, C = 3 + (7 & (_2 >>>= z)), _2 >>>= 3, y2 -= 3;
                  } else {
                    for (R = z + 7; y2 < R; ) {
                      if (0 === m2) break t;
                      m2--, _2 += u2[p2++] << y2, y2 += 8;
                    }
                    y2 -= z, O = 0, C = 11 + (127 & (_2 >>>= z)), _2 >>>= 7, y2 -= 7;
                  }
                  if (i2.have + C > i2.nlen + i2.ndist) {
                    t2.msg = "invalid bit length repeat", i2.mode = c;
                    break;
                  }
                  for (; C--; ) i2.lens[i2.have++] = O;
                }
              }
              if (i2.mode === c) break;
              if (0 === i2.lens[256]) {
                t2.msg = "invalid code -- missing end-of-block", i2.mode = c;
                break;
              }
              if (i2.lenbits = 9, k = { bits: i2.lenbits }, D = o(1, i2.lens, 0, i2.nlen, i2.lencode, 0, i2.work, k), i2.lenbits = k.bits, D) {
                t2.msg = "invalid literal/lengths set", i2.mode = c;
                break;
              }
              if (i2.distbits = 6, i2.distcode = i2.distdyn, k = { bits: i2.distbits }, D = o(2, i2.lens, i2.nlen, i2.ndist, i2.distcode, 0, i2.work, k), i2.distbits = k.bits, D) {
                t2.msg = "invalid distances set", i2.mode = c;
                break;
              }
              if (i2.mode = 20, 6 === e2) break t;
            case 20:
              i2.mode = 21;
            case 21:
              if (m2 >= 6 && v2 >= 258) {
                t2.next_out = g2, t2.avail_out = v2, t2.next_in = p2, t2.avail_in = m2, i2.hold = _2, i2.bits = y2, a(t2, A), g2 = t2.next_out, f2 = t2.output, v2 = t2.avail_out, p2 = t2.next_in, u2 = t2.input, m2 = t2.avail_in, _2 = i2.hold, y2 = i2.bits, i2.mode === h && (i2.back = -1);
                break;
              }
              for (i2.back = 0; T = (P = i2.lencode[_2 & (1 << i2.lenbits) - 1]) >>> 16 & 255, E = 65535 & P, !((z = P >>> 24) <= y2); ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              if (T && !(240 & T)) {
                for (L = z, F = T, I = E; T = (P = i2.lencode[I + ((_2 & (1 << L + F) - 1) >> L)]) >>> 16 & 255, E = 65535 & P, !(L + (z = P >>> 24) <= y2); ) {
                  if (0 === m2) break t;
                  m2--, _2 += u2[p2++] << y2, y2 += 8;
                }
                _2 >>>= L, y2 -= L, i2.back += L;
              }
              if (_2 >>>= z, y2 -= z, i2.back += z, i2.length = E, 0 === T) {
                i2.mode = 26;
                break;
              }
              if (32 & T) {
                i2.back = -1, i2.mode = h;
                break;
              }
              if (64 & T) {
                t2.msg = "invalid literal/length code", i2.mode = c;
                break;
              }
              i2.extra = 15 & T, i2.mode = 22;
            case 22:
              if (i2.extra) {
                for (R = i2.extra; y2 < R; ) {
                  if (0 === m2) break t;
                  m2--, _2 += u2[p2++] << y2, y2 += 8;
                }
                i2.length += _2 & (1 << i2.extra) - 1, _2 >>>= i2.extra, y2 -= i2.extra, i2.back += i2.extra;
              }
              i2.was = i2.length, i2.mode = 23;
            case 23:
              for (; T = (P = i2.distcode[_2 & (1 << i2.distbits) - 1]) >>> 16 & 255, E = 65535 & P, !((z = P >>> 24) <= y2); ) {
                if (0 === m2) break t;
                m2--, _2 += u2[p2++] << y2, y2 += 8;
              }
              if (!(240 & T)) {
                for (L = z, F = T, I = E; T = (P = i2.distcode[I + ((_2 & (1 << L + F) - 1) >> L)]) >>> 16 & 255, E = 65535 & P, !(L + (z = P >>> 24) <= y2); ) {
                  if (0 === m2) break t;
                  m2--, _2 += u2[p2++] << y2, y2 += 8;
                }
                _2 >>>= L, y2 -= L, i2.back += L;
              }
              if (_2 >>>= z, y2 -= z, i2.back += z, 64 & T) {
                t2.msg = "invalid distance code", i2.mode = c;
                break;
              }
              i2.offset = E, i2.extra = 15 & T, i2.mode = 24;
            case 24:
              if (i2.extra) {
                for (R = i2.extra; y2 < R; ) {
                  if (0 === m2) break t;
                  m2--, _2 += u2[p2++] << y2, y2 += 8;
                }
                i2.offset += _2 & (1 << i2.extra) - 1, _2 >>>= i2.extra, y2 -= i2.extra, i2.back += i2.extra;
              }
              if (i2.offset > i2.dmax) {
                t2.msg = "invalid distance too far back", i2.mode = c;
                break;
              }
              i2.mode = 25;
            case 25:
              if (0 === v2) break t;
              if (C = A - v2, i2.offset > C) {
                if ((C = i2.offset - C) > i2.whave && i2.sane) {
                  t2.msg = "invalid distance too far back", i2.mode = c;
                  break;
                }
                C > i2.wnext ? (C -= i2.wnext, S3 = i2.wsize - C) : S3 = i2.wnext - C, C > i2.length && (C = i2.length), M = i2.window;
              } else M = f2, S3 = g2 - i2.offset, C = i2.length;
              C > v2 && (C = v2), v2 -= C, i2.length -= C;
              do {
                f2[g2++] = M[S3++];
              } while (--C);
              0 === i2.length && (i2.mode = 21);
              break;
            case 26:
              if (0 === v2) break t;
              f2[g2++] = i2.length, v2--, i2.mode = 21;
              break;
            case 27:
              if (i2.wrap) {
                for (; y2 < 32; ) {
                  if (0 === m2) break t;
                  m2--, _2 |= u2[p2++] << y2, y2 += 8;
                }
                if (A -= v2, t2.total_out += A, i2.total += A, A && (t2.adler = i2.check = i2.flags ? n(i2.check, f2, A, g2 - A) : s(i2.check, f2, A, g2 - A)), A = v2, (i2.flags ? _2 : d(_2)) !== i2.check) {
                  t2.msg = "incorrect data check", i2.mode = c;
                  break;
                }
                _2 = 0, y2 = 0;
              }
              i2.mode = 28;
            case 28:
              if (i2.wrap && i2.flags) {
                for (; y2 < 32; ) {
                  if (0 === m2) break t;
                  m2--, _2 += u2[p2++] << y2, y2 += 8;
                }
                if (_2 !== (4294967295 & i2.total)) {
                  t2.msg = "incorrect length check", i2.mode = c;
                  break;
                }
                _2 = 0, y2 = 0;
              }
              i2.mode = 29;
            case 29:
              D = 1;
              break t;
            case c:
              D = -3;
              break t;
            case 31:
              return -4;
            default:
              return l;
          }
          return t2.next_out = g2, t2.avail_out = v2, t2.next_in = p2, t2.avail_in = m2, i2.hold = _2, i2.bits = y2, (i2.wsize || A !== t2.avail_out && i2.mode < c && (i2.mode < 27 || 4 !== e2)) && x(t2, t2.output, t2.next_out, A - t2.avail_out) ? (i2.mode = 31, -4) : (w -= t2.avail_in, A -= t2.avail_out, t2.total_in += w, t2.total_out += A, i2.total += A, i2.wrap && A && (t2.adler = i2.check = i2.flags ? n(i2.check, f2, A, t2.next_out - A) : s(i2.check, f2, A, t2.next_out - A)), t2.data_type = i2.bits + (i2.last ? 64 : 0) + (i2.mode === h ? 128 : 0) + (20 === i2.mode || 15 === i2.mode ? 256 : 0), (0 === w && 0 === A || 4 === e2) && 0 === D && (D = -5), D);
        }, e.inflateEnd = function(t2) {
          if (!t2 || !t2.state) return l;
          var e2 = t2.state;
          return e2.window && (e2.window = null), t2.state = null, 0;
        }, e.inflateGetHeader = function(t2, e2) {
          var i2;
          return t2 && t2.state && 2 & (i2 = t2.state).wrap ? (i2.head = e2, e2.done = false, 0) : l;
        }, e.inflateSetDictionary = function(t2, e2) {
          var i2, r2 = e2.length;
          return t2 && t2.state ? 0 !== (i2 = t2.state).wrap && 11 !== i2.mode ? l : 11 === i2.mode && s(1, e2, r2, 0) !== i2.check ? -3 : x(t2, e2, r2, r2) ? (i2.mode = 31, -4) : (i2.havedict = 1, 0) : l;
        }, e.inflateInfo = "pako inflate (from Nodeca project)";
      }, 358: (t, e, i) => {
        "use strict";
        var r = i(981), s = 15, n = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], l = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t.exports = function(t2, e2, i2, h, c, d, u, f) {
          var p, g, m, v, _, y, b, x, w, A = f.bits, C = 0, S3 = 0, M = 0, z = 0, T = 0, E = 0, L = 0, F = 0, I = 0, O = 0, D = null, k = 0, R = new r.Buf16(16), P = new r.Buf16(16), U = null, B = 0;
          for (C = 0; C <= s; C++) R[C] = 0;
          for (S3 = 0; S3 < h; S3++) R[e2[i2 + S3]]++;
          for (T = A, z = s; z >= 1 && 0 === R[z]; z--) ;
          if (T > z && (T = z), 0 === z) return c[d++] = 20971520, c[d++] = 20971520, f.bits = 1, 0;
          for (M = 1; M < z && 0 === R[M]; M++) ;
          for (T < M && (T = M), F = 1, C = 1; C <= s; C++) if (F <<= 1, (F -= R[C]) < 0) return -1;
          if (F > 0 && (0 === t2 || 1 !== z)) return -1;
          for (P[1] = 0, C = 1; C < s; C++) P[C + 1] = P[C] + R[C];
          for (S3 = 0; S3 < h; S3++) 0 !== e2[i2 + S3] && (u[P[e2[i2 + S3]]++] = S3);
          if (0 === t2 ? (D = U = u, y = 19) : 1 === t2 ? (D = n, k -= 257, U = a, B -= 257, y = 256) : (D = o, U = l, y = -1), O = 0, S3 = 0, C = M, _ = d, E = T, L = 0, m = -1, v = (I = 1 << T) - 1, 1 === t2 && I > 852 || 2 === t2 && I > 592) return 1;
          for (; ; ) {
            b = C - L, u[S3] < y ? (x = 0, w = u[S3]) : u[S3] > y ? (x = U[B + u[S3]], w = D[k + u[S3]]) : (x = 96, w = 0), p = 1 << C - L, M = g = 1 << E;
            do {
              c[_ + (O >> L) + (g -= p)] = b << 24 | x << 16 | w;
            } while (0 !== g);
            for (p = 1 << C - 1; O & p; ) p >>= 1;
            if (0 !== p ? (O &= p - 1, O += p) : O = 0, S3++, 0 == --R[C]) {
              if (C === z) break;
              C = e2[i2 + u[S3]];
            }
            if (C > T && (O & v) !== m) {
              for (0 === L && (L = T), _ += M, F = 1 << (E = C - L); E + L < z && !((F -= R[E + L]) <= 0); ) E++, F <<= 1;
              if (I += 1 << E, 1 === t2 && I > 852 || 2 === t2 && I > 592) return 1;
              c[m = O & v] = T << 24 | E << 16 | _ - d;
            }
          }
          return 0 !== O && (c[_ + O] = C - L << 24 | 64 << 16), f.bits = T, 0;
        };
      }, 834: (t) => {
        "use strict";
        t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, 697: (t, e, i) => {
        "use strict";
        var r = i(981);
        function s(t2) {
          for (var e2 = t2.length; --e2 >= 0; ) t2[e2] = 0;
        }
        var n = 256, a = 286, o = 30, l = 15, h = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], c = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], u = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], f = new Array(576);
        s(f);
        var p = new Array(60);
        s(p);
        var g = new Array(512);
        s(g);
        var m = new Array(256);
        s(m);
        var v = new Array(29);
        s(v);
        var _, y, b, x = new Array(o);
        function w(t2, e2, i2, r2, s2) {
          this.static_tree = t2, this.extra_bits = e2, this.extra_base = i2, this.elems = r2, this.max_length = s2, this.has_stree = t2 && t2.length;
        }
        function A(t2, e2) {
          this.dyn_tree = t2, this.max_code = 0, this.stat_desc = e2;
        }
        function C(t2) {
          return t2 < 256 ? g[t2] : g[256 + (t2 >>> 7)];
        }
        function S3(t2, e2) {
          t2.pending_buf[t2.pending++] = 255 & e2, t2.pending_buf[t2.pending++] = e2 >>> 8 & 255;
        }
        function M(t2, e2, i2) {
          t2.bi_valid > 16 - i2 ? (t2.bi_buf |= e2 << t2.bi_valid & 65535, S3(t2, t2.bi_buf), t2.bi_buf = e2 >> 16 - t2.bi_valid, t2.bi_valid += i2 - 16) : (t2.bi_buf |= e2 << t2.bi_valid & 65535, t2.bi_valid += i2);
        }
        function z(t2, e2, i2) {
          M(t2, i2[2 * e2], i2[2 * e2 + 1]);
        }
        function T(t2, e2) {
          var i2 = 0;
          do {
            i2 |= 1 & t2, t2 >>>= 1, i2 <<= 1;
          } while (--e2 > 0);
          return i2 >>> 1;
        }
        function E(t2, e2, i2) {
          var r2, s2, n2 = new Array(16), a2 = 0;
          for (r2 = 1; r2 <= l; r2++) n2[r2] = a2 = a2 + i2[r2 - 1] << 1;
          for (s2 = 0; s2 <= e2; s2++) {
            var o2 = t2[2 * s2 + 1];
            0 !== o2 && (t2[2 * s2] = T(n2[o2]++, o2));
          }
        }
        function L(t2) {
          var e2;
          for (e2 = 0; e2 < a; e2++) t2.dyn_ltree[2 * e2] = 0;
          for (e2 = 0; e2 < o; e2++) t2.dyn_dtree[2 * e2] = 0;
          for (e2 = 0; e2 < 19; e2++) t2.bl_tree[2 * e2] = 0;
          t2.dyn_ltree[512] = 1, t2.opt_len = t2.static_len = 0, t2.last_lit = t2.matches = 0;
        }
        function F(t2) {
          t2.bi_valid > 8 ? S3(t2, t2.bi_buf) : t2.bi_valid > 0 && (t2.pending_buf[t2.pending++] = t2.bi_buf), t2.bi_buf = 0, t2.bi_valid = 0;
        }
        function I(t2, e2, i2, r2) {
          var s2 = 2 * e2, n2 = 2 * i2;
          return t2[s2] < t2[n2] || t2[s2] === t2[n2] && r2[e2] <= r2[i2];
        }
        function O(t2, e2, i2) {
          for (var r2 = t2.heap[i2], s2 = i2 << 1; s2 <= t2.heap_len && (s2 < t2.heap_len && I(e2, t2.heap[s2 + 1], t2.heap[s2], t2.depth) && s2++, !I(e2, r2, t2.heap[s2], t2.depth)); ) t2.heap[i2] = t2.heap[s2], i2 = s2, s2 <<= 1;
          t2.heap[i2] = r2;
        }
        function D(t2, e2, i2) {
          var r2, s2, a2, o2, l2 = 0;
          if (0 !== t2.last_lit) do {
            r2 = t2.pending_buf[t2.d_buf + 2 * l2] << 8 | t2.pending_buf[t2.d_buf + 2 * l2 + 1], s2 = t2.pending_buf[t2.l_buf + l2], l2++, 0 === r2 ? z(t2, s2, e2) : (z(t2, (a2 = m[s2]) + n + 1, e2), 0 !== (o2 = h[a2]) && M(t2, s2 -= v[a2], o2), z(t2, a2 = C(--r2), i2), 0 !== (o2 = c[a2]) && M(t2, r2 -= x[a2], o2));
          } while (l2 < t2.last_lit);
          z(t2, 256, e2);
        }
        function k(t2, e2) {
          var i2, r2, s2, n2 = e2.dyn_tree, a2 = e2.stat_desc.static_tree, o2 = e2.stat_desc.has_stree, h2 = e2.stat_desc.elems, c2 = -1;
          for (t2.heap_len = 0, t2.heap_max = 573, i2 = 0; i2 < h2; i2++) 0 !== n2[2 * i2] ? (t2.heap[++t2.heap_len] = c2 = i2, t2.depth[i2] = 0) : n2[2 * i2 + 1] = 0;
          for (; t2.heap_len < 2; ) n2[2 * (s2 = t2.heap[++t2.heap_len] = c2 < 2 ? ++c2 : 0)] = 1, t2.depth[s2] = 0, t2.opt_len--, o2 && (t2.static_len -= a2[2 * s2 + 1]);
          for (e2.max_code = c2, i2 = t2.heap_len >> 1; i2 >= 1; i2--) O(t2, n2, i2);
          s2 = h2;
          do {
            i2 = t2.heap[1], t2.heap[1] = t2.heap[t2.heap_len--], O(t2, n2, 1), r2 = t2.heap[1], t2.heap[--t2.heap_max] = i2, t2.heap[--t2.heap_max] = r2, n2[2 * s2] = n2[2 * i2] + n2[2 * r2], t2.depth[s2] = (t2.depth[i2] >= t2.depth[r2] ? t2.depth[i2] : t2.depth[r2]) + 1, n2[2 * i2 + 1] = n2[2 * r2 + 1] = s2, t2.heap[1] = s2++, O(t2, n2, 1);
          } while (t2.heap_len >= 2);
          t2.heap[--t2.heap_max] = t2.heap[1], (function(t3, e3) {
            var i3, r3, s3, n3, a3, o3, h3 = e3.dyn_tree, c3 = e3.max_code, d2 = e3.stat_desc.static_tree, u2 = e3.stat_desc.has_stree, f2 = e3.stat_desc.extra_bits, p2 = e3.stat_desc.extra_base, g2 = e3.stat_desc.max_length, m2 = 0;
            for (n3 = 0; n3 <= l; n3++) t3.bl_count[n3] = 0;
            for (h3[2 * t3.heap[t3.heap_max] + 1] = 0, i3 = t3.heap_max + 1; i3 < 573; i3++) (n3 = h3[2 * h3[2 * (r3 = t3.heap[i3]) + 1] + 1] + 1) > g2 && (n3 = g2, m2++), h3[2 * r3 + 1] = n3, r3 > c3 || (t3.bl_count[n3]++, a3 = 0, r3 >= p2 && (a3 = f2[r3 - p2]), o3 = h3[2 * r3], t3.opt_len += o3 * (n3 + a3), u2 && (t3.static_len += o3 * (d2[2 * r3 + 1] + a3)));
            if (0 !== m2) {
              do {
                for (n3 = g2 - 1; 0 === t3.bl_count[n3]; ) n3--;
                t3.bl_count[n3]--, t3.bl_count[n3 + 1] += 2, t3.bl_count[g2]--, m2 -= 2;
              } while (m2 > 0);
              for (n3 = g2; 0 !== n3; n3--) for (r3 = t3.bl_count[n3]; 0 !== r3; ) (s3 = t3.heap[--i3]) > c3 || (h3[2 * s3 + 1] !== n3 && (t3.opt_len += (n3 - h3[2 * s3 + 1]) * h3[2 * s3], h3[2 * s3 + 1] = n3), r3--);
            }
          })(t2, e2), E(n2, c2, t2.bl_count);
        }
        function R(t2, e2, i2) {
          var r2, s2, n2 = -1, a2 = e2[1], o2 = 0, l2 = 7, h2 = 4;
          for (0 === a2 && (l2 = 138, h2 = 3), e2[2 * (i2 + 1) + 1] = 65535, r2 = 0; r2 <= i2; r2++) s2 = a2, a2 = e2[2 * (r2 + 1) + 1], ++o2 < l2 && s2 === a2 || (o2 < h2 ? t2.bl_tree[2 * s2] += o2 : 0 !== s2 ? (s2 !== n2 && t2.bl_tree[2 * s2]++, t2.bl_tree[32]++) : o2 <= 10 ? t2.bl_tree[34]++ : t2.bl_tree[36]++, o2 = 0, n2 = s2, 0 === a2 ? (l2 = 138, h2 = 3) : s2 === a2 ? (l2 = 6, h2 = 3) : (l2 = 7, h2 = 4));
        }
        function P(t2, e2, i2) {
          var r2, s2, n2 = -1, a2 = e2[1], o2 = 0, l2 = 7, h2 = 4;
          for (0 === a2 && (l2 = 138, h2 = 3), r2 = 0; r2 <= i2; r2++) if (s2 = a2, a2 = e2[2 * (r2 + 1) + 1], !(++o2 < l2 && s2 === a2)) {
            if (o2 < h2) do {
              z(t2, s2, t2.bl_tree);
            } while (0 != --o2);
            else 0 !== s2 ? (s2 !== n2 && (z(t2, s2, t2.bl_tree), o2--), z(t2, 16, t2.bl_tree), M(t2, o2 - 3, 2)) : o2 <= 10 ? (z(t2, 17, t2.bl_tree), M(t2, o2 - 3, 3)) : (z(t2, 18, t2.bl_tree), M(t2, o2 - 11, 7));
            o2 = 0, n2 = s2, 0 === a2 ? (l2 = 138, h2 = 3) : s2 === a2 ? (l2 = 6, h2 = 3) : (l2 = 7, h2 = 4);
          }
        }
        s(x);
        var U = false;
        function B(t2, e2, i2, s2) {
          M(t2, 0 + (s2 ? 1 : 0), 3), (function(t3, e3, i3, s3) {
            F(t3), s3 && (S3(t3, i3), S3(t3, ~i3)), r.arraySet(t3.pending_buf, t3.window, e3, i3, t3.pending), t3.pending += i3;
          })(t2, e2, i2, true);
        }
        e._tr_init = function(t2) {
          U || (!(function() {
            var t3, e2, i2, r2, s2, n2 = new Array(16);
            for (i2 = 0, r2 = 0; r2 < 28; r2++) for (v[r2] = i2, t3 = 0; t3 < 1 << h[r2]; t3++) m[i2++] = r2;
            for (m[i2 - 1] = r2, s2 = 0, r2 = 0; r2 < 16; r2++) for (x[r2] = s2, t3 = 0; t3 < 1 << c[r2]; t3++) g[s2++] = r2;
            for (s2 >>= 7; r2 < o; r2++) for (x[r2] = s2 << 7, t3 = 0; t3 < 1 << c[r2] - 7; t3++) g[256 + s2++] = r2;
            for (e2 = 0; e2 <= l; e2++) n2[e2] = 0;
            for (t3 = 0; t3 <= 143; ) f[2 * t3 + 1] = 8, t3++, n2[8]++;
            for (; t3 <= 255; ) f[2 * t3 + 1] = 9, t3++, n2[9]++;
            for (; t3 <= 279; ) f[2 * t3 + 1] = 7, t3++, n2[7]++;
            for (; t3 <= 287; ) f[2 * t3 + 1] = 8, t3++, n2[8]++;
            for (E(f, 287, n2), t3 = 0; t3 < o; t3++) p[2 * t3 + 1] = 5, p[2 * t3] = T(t3, 5);
            _ = new w(f, h, 257, a, l), y = new w(p, c, 0, o, l), b = new w(new Array(0), d, 0, 19, 7);
          })(), U = true), t2.l_desc = new A(t2.dyn_ltree, _), t2.d_desc = new A(t2.dyn_dtree, y), t2.bl_desc = new A(t2.bl_tree, b), t2.bi_buf = 0, t2.bi_valid = 0, L(t2);
        }, e._tr_stored_block = B, e._tr_flush_block = function(t2, e2, i2, r2) {
          var s2, a2, o2 = 0;
          t2.level > 0 ? (2 === t2.strm.data_type && (t2.strm.data_type = (function(t3) {
            var e3, i3 = 4093624447;
            for (e3 = 0; e3 <= 31; e3++, i3 >>>= 1) if (1 & i3 && 0 !== t3.dyn_ltree[2 * e3]) return 0;
            if (0 !== t3.dyn_ltree[18] || 0 !== t3.dyn_ltree[20] || 0 !== t3.dyn_ltree[26]) return 1;
            for (e3 = 32; e3 < n; e3++) if (0 !== t3.dyn_ltree[2 * e3]) return 1;
            return 0;
          })(t2)), k(t2, t2.l_desc), k(t2, t2.d_desc), o2 = (function(t3) {
            var e3;
            for (R(t3, t3.dyn_ltree, t3.l_desc.max_code), R(t3, t3.dyn_dtree, t3.d_desc.max_code), k(t3, t3.bl_desc), e3 = 18; e3 >= 3 && 0 === t3.bl_tree[2 * u[e3] + 1]; e3--) ;
            return t3.opt_len += 3 * (e3 + 1) + 5 + 5 + 4, e3;
          })(t2), s2 = t2.opt_len + 3 + 7 >>> 3, (a2 = t2.static_len + 3 + 7 >>> 3) <= s2 && (s2 = a2)) : s2 = a2 = i2 + 5, i2 + 4 <= s2 && -1 !== e2 ? B(t2, e2, i2, r2) : 4 === t2.strategy || a2 === s2 ? (M(t2, 2 + (r2 ? 1 : 0), 3), D(t2, f, p)) : (M(t2, 4 + (r2 ? 1 : 0), 3), (function(t3, e3, i3, r3) {
            var s3;
            for (M(t3, e3 - 257, 5), M(t3, i3 - 1, 5), M(t3, r3 - 4, 4), s3 = 0; s3 < r3; s3++) M(t3, t3.bl_tree[2 * u[s3] + 1], 3);
            P(t3, t3.dyn_ltree, e3 - 1), P(t3, t3.dyn_dtree, i3 - 1);
          })(t2, t2.l_desc.max_code + 1, t2.d_desc.max_code + 1, o2 + 1), D(t2, t2.dyn_ltree, t2.dyn_dtree)), L(t2), r2 && F(t2);
        }, e._tr_tally = function(t2, e2, i2) {
          return t2.pending_buf[t2.d_buf + 2 * t2.last_lit] = e2 >>> 8 & 255, t2.pending_buf[t2.d_buf + 2 * t2.last_lit + 1] = 255 & e2, t2.pending_buf[t2.l_buf + t2.last_lit] = 255 & i2, t2.last_lit++, 0 === e2 ? t2.dyn_ltree[2 * i2]++ : (t2.matches++, e2--, t2.dyn_ltree[2 * (m[i2] + n + 1)]++, t2.dyn_dtree[2 * C(e2)]++), t2.last_lit === t2.lit_bufsize - 1;
        }, e._tr_align = function(t2) {
          M(t2, 2, 3), z(t2, 256, f), (function(t3) {
            16 === t3.bi_valid ? (S3(t3, t3.bi_buf), t3.bi_buf = 0, t3.bi_valid = 0) : t3.bi_valid >= 8 && (t3.pending_buf[t3.pending++] = 255 & t3.bi_buf, t3.bi_buf >>= 8, t3.bi_valid -= 8);
          })(t2);
        };
      }, 746: (t) => {
        "use strict";
        t.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, 185: () => {
        $3Dmol.workerString = function() {
          self.onmessage = function(t) {
            var e = t.data, i = e.type;
            if (i < 0) self.atomData = e.atoms, self.volume = e.volume, self.ps = new ProteinSurface();
            else {
              var r = self.ps;
              r.initparm(e.expandedExtent, 1 != i, self.volume), r.fillvoxels(self.atomData, e.extendedAtoms), r.buildboundary(), 4 !== i && 2 !== i || (r.fastdistancemap(), r.boundingatom(false), r.fillvoxelswaals(self.atomData, e.extendedAtoms)), r.marchingcube(i);
              var s = r.getFacesAndVertices(e.atomsToShow);
              self.postMessage(s);
            }
          };
        }.toString().replace(/(^.*?\{|\}$)/g, ""), $3Dmol.workerString += ";\nfunction _classCallCheck() {};", $3Dmol.workerString += ";\n" + $3Dmol.Vector3.toString(), $3Dmol.workerString += ";\n" + $3Dmol.MarchingCubeInitializer.toString() + ";\n\n", $3Dmol.workerString += ";\n" + $3Dmol.PointGrid.toString() + ";\n", $3Dmol.workerString += ";\nvar ProteinSurface = " + $3Dmol.ProteinSurface.toString() + ";\n", $3Dmol.SurfaceWorker = window.URL ? window.URL.createObjectURL(new Blob([$3Dmol.workerString], { type: "text/javascript" })) : void 0;
      }, 307: (t) => {
        "object" == typeof t.exports && (t.exports = window.$3Dmol);
      }, 471: function(t, e) {
        !(function(t2) {
          "use strict";
          function e2(t3, e3, i2) {
            for (var r2 = (t3.byteLength, 0), s2 = i2.length; s2 > r2; r2++) {
              var n2 = i2.charCodeAt(r2);
              if (128 > n2) t3.setUint8(e3++, n2 >>> 0 & 127);
              else if (2048 > n2) t3.setUint8(e3++, n2 >>> 6 & 31 | 192), t3.setUint8(e3++, n2 >>> 0 & 63 | 128);
              else if (65536 > n2) t3.setUint8(e3++, n2 >>> 12 & 15 | 224), t3.setUint8(e3++, n2 >>> 6 & 63 | 128), t3.setUint8(e3++, n2 >>> 0 & 63 | 128);
              else {
                if (!(1114112 > n2)) throw new Error("bad codepoint " + n2);
                t3.setUint8(e3++, n2 >>> 18 & 7 | 240), t3.setUint8(e3++, n2 >>> 12 & 63 | 128), t3.setUint8(e3++, n2 >>> 6 & 63 | 128), t3.setUint8(e3++, n2 >>> 0 & 63 | 128);
              }
            }
          }
          function i(t3) {
            for (var e3 = 0, i2 = 0, r2 = t3.length; r2 > i2; i2++) {
              var s2 = t3.charCodeAt(i2);
              if (128 > s2) e3 += 1;
              else if (2048 > s2) e3 += 2;
              else if (65536 > s2) e3 += 3;
              else {
                if (!(1114112 > s2)) throw new Error("bad codepoint " + s2);
                e3 += 4;
              }
            }
            return e3;
          }
          function r(t3, s2, n2) {
            var a2 = typeof t3;
            if ("string" === a2) {
              if (32 > (o2 = i(t3))) return s2.setUint8(n2, 160 | o2), e2(s2, n2 + 1, t3), 1 + o2;
              if (256 > o2) return s2.setUint8(n2, 217), s2.setUint8(n2 + 1, o2), e2(s2, n2 + 2, t3), 2 + o2;
              if (65536 > o2) return s2.setUint8(n2, 218), s2.setUint16(n2 + 1, o2), e2(s2, n2 + 3, t3), 3 + o2;
              if (4294967296 > o2) return s2.setUint8(n2, 219), s2.setUint32(n2 + 1, o2), e2(s2, n2 + 5, t3), 5 + o2;
            }
            if (t3 instanceof Uint8Array) {
              var o2 = t3.byteLength, l2 = new Uint8Array(s2.buffer);
              if (256 > o2) return s2.setUint8(n2, 196), s2.setUint8(n2 + 1, o2), l2.set(t3, n2 + 2), 2 + o2;
              if (65536 > o2) return s2.setUint8(n2, 197), s2.setUint16(n2 + 1, o2), l2.set(t3, n2 + 3), 3 + o2;
              if (4294967296 > o2) return s2.setUint8(n2, 198), s2.setUint32(n2 + 1, o2), l2.set(t3, n2 + 5), 5 + o2;
            }
            if ("number" === a2) {
              if (!isFinite(t3)) throw new Error("Number not finite: " + t3);
              if (Math.floor(t3) !== t3) return s2.setUint8(n2, 203), s2.setFloat64(n2 + 1, t3), 9;
              if (t3 >= 0) {
                if (128 > t3) return s2.setUint8(n2, t3), 1;
                if (256 > t3) return s2.setUint8(n2, 204), s2.setUint8(n2 + 1, t3), 2;
                if (65536 > t3) return s2.setUint8(n2, 205), s2.setUint16(n2 + 1, t3), 3;
                if (4294967296 > t3) return s2.setUint8(n2, 206), s2.setUint32(n2 + 1, t3), 5;
                throw new Error("Number too big 0x" + t3.toString(16));
              }
              if (t3 >= -32) return s2.setInt8(n2, t3), 1;
              if (t3 >= -128) return s2.setUint8(n2, 208), s2.setInt8(n2 + 1, t3), 2;
              if (t3 >= -32768) return s2.setUint8(n2, 209), s2.setInt16(n2 + 1, t3), 3;
              if (t3 >= -2147483648) return s2.setUint8(n2, 210), s2.setInt32(n2 + 1, t3), 5;
              throw new Error("Number too small -0x" + (-t3).toString(16).substr(1));
            }
            if (null === t3) return s2.setUint8(n2, 192), 1;
            if ("boolean" === a2) return s2.setUint8(n2, t3 ? 195 : 194), 1;
            if ("object" === a2) {
              var h2 = 0, c2 = Array.isArray(t3);
              if (c2) o2 = t3.length;
              else {
                var d2 = Object.keys(t3);
                o2 = d2.length;
              }
              if (16 > o2 ? (s2.setUint8(n2, o2 | (c2 ? 144 : 128)), h2 = 1) : 65536 > o2 ? (s2.setUint8(n2, c2 ? 220 : 222), s2.setUint16(n2 + 1, o2), h2 = 3) : 4294967296 > o2 && (s2.setUint8(n2, c2 ? 221 : 223), s2.setUint32(n2 + 1, o2), h2 = 5), c2) for (var u2 = 0; o2 > u2; u2++) h2 += r(t3[u2], s2, n2 + h2);
              else for (u2 = 0; o2 > u2; u2++) {
                var f2 = d2[u2];
                h2 += r(f2, s2, n2 + h2), h2 += r(t3[f2], s2, n2 + h2);
              }
              return h2;
            }
            throw new Error("Unknown type " + a2);
          }
          function s(t3) {
            var e3 = typeof t3;
            if ("string" === e3) {
              if (32 > (r2 = i(t3))) return 1 + r2;
              if (256 > r2) return 2 + r2;
              if (65536 > r2) return 3 + r2;
              if (4294967296 > r2) return 5 + r2;
            }
            if (t3 instanceof Uint8Array) {
              if (256 > (r2 = t3.byteLength)) return 2 + r2;
              if (65536 > r2) return 3 + r2;
              if (4294967296 > r2) return 5 + r2;
            }
            if ("number" === e3) {
              if (Math.floor(t3) !== t3) return 9;
              if (t3 >= 0) {
                if (128 > t3) return 1;
                if (256 > t3) return 2;
                if (65536 > t3) return 3;
                if (4294967296 > t3) return 5;
                throw new Error("Number too big 0x" + t3.toString(16));
              }
              if (t3 >= -32) return 1;
              if (t3 >= -128) return 2;
              if (t3 >= -32768) return 3;
              if (t3 >= -2147483648) return 5;
              throw new Error("Number too small -0x" + t3.toString(16).substr(1));
            }
            if ("boolean" === e3 || null === t3) return 1;
            if ("object" === e3) {
              var r2, n2 = 0;
              if (Array.isArray(t3)) {
                r2 = t3.length;
                for (var a2 = 0; r2 > a2; a2++) n2 += s(t3[a2]);
              } else {
                var o2 = Object.keys(t3);
                for (r2 = o2.length, a2 = 0; r2 > a2; a2++) {
                  var l2 = o2[a2];
                  n2 += s(l2) + s(t3[l2]);
                }
              }
              if (16 > r2) return 1 + n2;
              if (65536 > r2) return 3 + n2;
              if (4294967296 > r2) return 5 + n2;
              throw new Error("Array or object too long 0x" + r2.toString(16));
            }
            throw new Error("Unknown type " + e3);
          }
          function n(t3) {
            var e3 = new ArrayBuffer(s(t3));
            return r(t3, new DataView(e3), 0), new Uint8Array(e3);
          }
          function a(t3, e3, i2) {
            return e3 ? new t3(e3.buffer, e3.byteOffset, e3.byteLength / (i2 || 1)) : void 0;
          }
          function o(t3) {
            return a(DataView, t3);
          }
          function l(t3) {
            return a(Uint8Array, t3);
          }
          function h(t3) {
            return a(Int8Array, t3);
          }
          function c(t3) {
            return a(Int32Array, t3, 4);
          }
          function d(t3) {
            return a(Float32Array, t3, 4);
          }
          function u(t3, e3) {
            var i2 = t3.length / 2;
            e3 || (e3 = new Int16Array(i2));
            for (var r2 = 0, s2 = 0; i2 > r2; ++r2, s2 += 2) e3[r2] = t3[s2] << 8 ^ t3[s2 + 1];
            return e3;
          }
          function f(t3, e3) {
            var i2 = t3.length;
            e3 || (e3 = new Uint8Array(2 * i2));
            for (var r2 = o(e3), s2 = 0; i2 > s2; ++s2) r2.setInt16(2 * s2, t3[s2]);
            return l(e3);
          }
          function p(t3, e3) {
            var i2 = t3.length / 4;
            e3 || (e3 = new Int32Array(i2));
            for (var r2 = 0, s2 = 0; i2 > r2; ++r2, s2 += 4) e3[r2] = t3[s2] << 24 ^ t3[s2 + 1] << 16 ^ t3[s2 + 2] << 8 ^ t3[s2 + 3];
            return e3;
          }
          function g(t3, e3) {
            var i2 = t3.length;
            e3 || (e3 = new Uint8Array(4 * i2));
            for (var r2 = o(e3), s2 = 0; i2 > s2; ++s2) r2.setInt32(4 * s2, t3[s2]);
            return l(e3);
          }
          function m(t3, e3) {
            var i2 = t3.length;
            e3 || (e3 = new Float32Array(i2 / 4));
            for (var r2 = o(e3), s2 = o(t3), n2 = 0, a2 = 0, l2 = i2 / 4; l2 > n2; ++n2, a2 += 4) r2.setFloat32(a2, s2.getFloat32(a2), true);
            return e3;
          }
          function v(t3, e3, i2) {
            var r2 = t3.length, s2 = 1 / e3;
            i2 || (i2 = new Float32Array(r2));
            for (var n2 = 0; r2 > n2; ++n2) i2[n2] = t3[n2] * s2;
            return i2;
          }
          function _(t3, e3, i2) {
            var r2 = t3.length;
            i2 || (i2 = new Int32Array(r2));
            for (var s2 = 0; r2 > s2; ++s2) i2[s2] = Math.round(t3[s2] * e3);
            return i2;
          }
          function y(t3, e3) {
            var i2, r2;
            if (!e3) {
              var s2 = 0;
              for (i2 = 0, r2 = t3.length; r2 > i2; i2 += 2) s2 += t3[i2 + 1];
              e3 = new t3.constructor(s2);
            }
            var n2 = 0;
            for (i2 = 0, r2 = t3.length; r2 > i2; i2 += 2) for (var a2 = t3[i2], o2 = t3[i2 + 1], l2 = 0; o2 > l2; ++l2) e3[n2] = a2, ++n2;
            return e3;
          }
          function b(t3) {
            if (0 === t3.length) return new Int32Array();
            var e3, i2, r2 = 2;
            for (e3 = 1, i2 = t3.length; i2 > e3; ++e3) t3[e3 - 1] !== t3[e3] && (r2 += 2);
            var s2 = new Int32Array(r2), n2 = 0, a2 = 1;
            for (e3 = 1, i2 = t3.length; i2 > e3; ++e3) t3[e3 - 1] !== t3[e3] ? (s2[n2] = t3[e3 - 1], s2[n2 + 1] = a2, a2 = 1, n2 += 2) : ++a2;
            return s2[n2] = t3[t3.length - 1], s2[n2 + 1] = a2, s2;
          }
          function x(t3, e3) {
            var i2 = t3.length;
            e3 || (e3 = new t3.constructor(i2)), i2 && (e3[0] = t3[0]);
            for (var r2 = 1; i2 > r2; ++r2) e3[r2] = t3[r2] + e3[r2 - 1];
            return e3;
          }
          function w(t3, e3) {
            var i2 = t3.length;
            e3 || (e3 = new t3.constructor(i2)), e3[0] = t3[0];
            for (var r2 = 1; i2 > r2; ++r2) e3[r2] = t3[r2] - t3[r2 - 1];
            return e3;
          }
          function A(t3, e3) {
            var i2, r2, s2 = t3 instanceof Int8Array ? 127 : 32767, n2 = -s2 - 1, a2 = t3.length;
            if (!e3) {
              var o2 = 0;
              for (i2 = 0; a2 > i2; ++i2) t3[i2] < s2 && t3[i2] > n2 && ++o2;
              e3 = new Int32Array(o2);
            }
            for (i2 = 0, r2 = 0; a2 > i2; ) {
              for (var l2 = 0; t3[i2] === s2 || t3[i2] === n2; ) l2 += t3[i2], ++i2;
              l2 += t3[i2], ++i2, e3[r2] = l2, ++r2;
            }
            return e3;
          }
          function C(t3, e3) {
            var i2, r2 = e3 ? 127 : 32767, s2 = -r2 - 1, n2 = t3.length, a2 = 0;
            for (i2 = 0; n2 > i2; ++i2) 0 === (h2 = t3[i2]) ? ++a2 : h2 > 0 ? (a2 += Math.ceil(h2 / r2), h2 % r2 == 0 && (a2 += 1)) : (a2 += Math.ceil(h2 / s2), h2 % s2 == 0 && (a2 += 1));
            var o2 = e3 ? new Int8Array(a2) : new Int16Array(a2), l2 = 0;
            for (i2 = 0; n2 > i2; ++i2) {
              var h2;
              if ((h2 = t3[i2]) >= 0) for (; h2 >= r2; ) o2[l2] = r2, ++l2, h2 -= r2;
              else for (; s2 >= h2; ) o2[l2] = s2, ++l2, h2 -= s2;
              o2[l2] = h2, ++l2;
            }
            return o2;
          }
          function S3(t3, e3) {
            return x(y(t3), e3);
          }
          function M(t3) {
            return b(w(t3));
          }
          function z(t3, e3, i2) {
            return v(y(t3, c(i2)), e3, i2);
          }
          function T(t3, e3) {
            return b(_(t3, e3));
          }
          function E(t3, e3, i2) {
            return v(x(t3, c(i2)), e3, i2);
          }
          function L(t3, e3, i2) {
            return w(_(t3, e3), i2);
          }
          function F(t3, e3, i2) {
            return v(A(t3, c(i2)), e3, i2);
          }
          function I(t3, e3, i2) {
            var r2 = A(t3, c(i2));
            return E(r2, e3, d(r2));
          }
          function O(t3, e3, i2) {
            return C(L(t3, e3), i2);
          }
          function D(t3) {
            var e3 = o(t3), i2 = e3.getInt32(0), r2 = e3.getInt32(4), s2 = t3.subarray(8, 12);
            return [i2, t3 = t3.subarray(12), r2, s2];
          }
          function k(t3, e3, i2, r2) {
            var s2 = new ArrayBuffer(12 + r2.byteLength), n2 = new Uint8Array(s2), a2 = new DataView(s2);
            return a2.setInt32(0, t3), a2.setInt32(4, e3), i2 && n2.set(i2, 8), n2.set(r2, 12), n2;
          }
          function R(t3) {
            return k(2, t3.length, void 0, l(t3));
          }
          function P(t3) {
            return k(4, t3.length, void 0, g(t3));
          }
          function U(t3, e3) {
            return k(5, t3.length / e3, g([e3]), l(t3));
          }
          function B(t3) {
            return k(6, t3.length, void 0, g(b(t3)));
          }
          function N(t3) {
            return k(8, t3.length, void 0, g(M(t3)));
          }
          function G(t3, e3) {
            return k(9, t3.length, g([e3]), g(T(t3, e3)));
          }
          function V(t3, e3) {
            return k(10, t3.length, g([e3]), f(O(t3, e3)));
          }
          function j(t3) {
            var e3 = {};
            return tt.forEach((function(i2) {
              void 0 !== t3[i2] && (e3[i2] = t3[i2]);
            })), t3.bondAtomList && (e3.bondAtomList = P(t3.bondAtomList)), t3.bondOrderList && (e3.bondOrderList = R(t3.bondOrderList)), e3.xCoordList = V(t3.xCoordList, 1e3), e3.yCoordList = V(t3.yCoordList, 1e3), e3.zCoordList = V(t3.zCoordList, 1e3), t3.bFactorList && (e3.bFactorList = V(t3.bFactorList, 100)), t3.atomIdList && (e3.atomIdList = N(t3.atomIdList)), t3.altLocList && (e3.altLocList = B(t3.altLocList)), t3.occupancyList && (e3.occupancyList = G(t3.occupancyList, 100)), e3.groupIdList = N(t3.groupIdList), e3.groupTypeList = P(t3.groupTypeList), t3.secStructList && (e3.secStructList = R(t3.secStructList)), t3.insCodeList && (e3.insCodeList = B(t3.insCodeList)), t3.sequenceIndexList && (e3.sequenceIndexList = N(t3.sequenceIndexList)), e3.chainIdList = U(t3.chainIdList, 4), t3.chainNameList && (e3.chainNameList = U(t3.chainNameList, 4)), e3;
          }
          function H(t3) {
            function e3(t4) {
              for (var e4 = {}, i3 = 0; t4 > i3; i3++) e4[n2()] = n2();
              return e4;
            }
            function i2(e4) {
              var i3 = t3.subarray(a2, a2 + e4);
              return a2 += e4, i3;
            }
            function r2(e4) {
              var i3 = t3.subarray(a2, a2 + e4);
              a2 += e4;
              var r3 = 65535;
              if (e4 > r3) {
                for (var s3 = [], n3 = 0; n3 < i3.length; n3 += r3) s3.push(String.fromCharCode.apply(null, i3.subarray(n3, n3 + r3)));
                return s3.join("");
              }
              return String.fromCharCode.apply(null, i3);
            }
            function s2(t4) {
              for (var e4 = new Array(t4), i3 = 0; t4 > i3; i3++) e4[i3] = n2();
              return e4;
            }
            function n2() {
              var n3, l2, h2 = t3[a2];
              if (!(128 & h2)) return a2++, h2;
              if (128 == (240 & h2)) return a2++, e3(l2 = 15 & h2);
              if (144 == (240 & h2)) return a2++, s2(l2 = 15 & h2);
              if (160 == (224 & h2)) return a2++, r2(l2 = 31 & h2);
              if (!(224 & ~h2)) return n3 = o2.getInt8(a2), a2++, n3;
              switch (h2) {
                case 192:
                  return a2++, null;
                case 194:
                  return a2++, false;
                case 195:
                  return a2++, true;
                case 196:
                  return l2 = o2.getUint8(a2 + 1), a2 += 2, i2(l2);
                case 197:
                  return l2 = o2.getUint16(a2 + 1), a2 += 3, i2(l2);
                case 198:
                  return l2 = o2.getUint32(a2 + 1), a2 += 5, i2(l2);
                case 202:
                  return n3 = o2.getFloat32(a2 + 1), a2 += 5, n3;
                case 203:
                  return n3 = o2.getFloat64(a2 + 1), a2 += 9, n3;
                case 204:
                  return n3 = t3[a2 + 1], a2 += 2, n3;
                case 205:
                  return n3 = o2.getUint16(a2 + 1), a2 += 3, n3;
                case 206:
                  return n3 = o2.getUint32(a2 + 1), a2 += 5, n3;
                case 208:
                  return n3 = o2.getInt8(a2 + 1), a2 += 2, n3;
                case 209:
                  return n3 = o2.getInt16(a2 + 1), a2 += 3, n3;
                case 210:
                  return n3 = o2.getInt32(a2 + 1), a2 += 5, n3;
                case 217:
                  return l2 = o2.getUint8(a2 + 1), a2 += 2, r2(l2);
                case 218:
                  return l2 = o2.getUint16(a2 + 1), a2 += 3, r2(l2);
                case 219:
                  return l2 = o2.getUint32(a2 + 1), a2 += 5, r2(l2);
                case 220:
                  return l2 = o2.getUint16(a2 + 1), a2 += 3, s2(l2);
                case 221:
                  return l2 = o2.getUint32(a2 + 1), a2 += 5, s2(l2);
                case 222:
                  return l2 = o2.getUint16(a2 + 1), a2 += 3, e3(l2);
                case 223:
                  return l2 = o2.getUint32(a2 + 1), a2 += 5, e3(l2);
              }
              throw new Error("Unknown type 0x" + h2.toString(16));
            }
            var a2 = 0, o2 = new DataView(t3.buffer);
            return n2();
          }
          function W(t3, e3, i2, r2) {
            switch (t3) {
              case 1:
                return m(e3);
              case 2:
                return h(e3);
              case 3:
                return u(e3);
              case 4:
                return p(e3);
              case 5:
                return l(e3);
              case 6:
                return y(p(e3), new Uint8Array(i2));
              case 7:
                return y(p(e3));
              case 8:
                return S3(p(e3));
              case 9:
                return z(p(e3), p(r2)[0]);
              case 10:
                return I(u(e3), p(r2)[0]);
              case 11:
                return v(u(e3), p(r2)[0]);
              case 12:
                return F(u(e3), p(r2)[0]);
              case 13:
                return F(h(e3), p(r2)[0]);
              case 14:
                return A(u(e3));
              case 15:
                return A(h(e3));
            }
          }
          function q(t3, e3) {
            var i2 = (e3 = e3 || {}).ignoreFields, r2 = {};
            return it.forEach((function(e4) {
              var s2 = !!i2 && -1 !== i2.indexOf(e4), n2 = t3[e4];
              s2 || void 0 === n2 || (n2 instanceof Uint8Array ? r2[e4] = W.apply(null, D(n2)) : r2[e4] = n2);
            })), r2;
          }
          function Y(t3) {
            return String.fromCharCode.apply(null, t3).replace(/\0/g, "");
          }
          function Z(t3, e3, i2) {
            var r2, s2, n2, a2, o2, l2, h2 = (i2 = i2 || {}).firstModelOnly, c2 = e3.onModel, d2 = e3.onChain, u2 = e3.onGroup, f2 = e3.onAtom, p2 = e3.onBond, g2 = 0, m2 = 0, v2 = 0, _2 = 0, y2 = 0, b2 = -1, x2 = t3.chainNameList, w2 = t3.secStructList, A2 = t3.insCodeList, C2 = t3.sequenceIndexList, S4 = t3.atomIdList, M2 = t3.bFactorList, z2 = t3.altLocList, T2 = t3.occupancyList, E2 = t3.bondAtomList, L2 = t3.bondOrderList;
            for (r2 = 0, s2 = t3.chainsPerModel.length; s2 > r2 && !(h2 && g2 > 0); ++r2) {
              var F2 = t3.chainsPerModel[g2];
              for (c2 && c2({ chainCount: F2, modelIndex: g2 }), n2 = 0; F2 > n2; ++n2) {
                var I2 = t3.groupsPerChain[m2];
                if (d2) {
                  var O2 = Y(t3.chainIdList.subarray(4 * m2, 4 * m2 + 4)), D2 = null;
                  x2 && (D2 = Y(x2.subarray(4 * m2, 4 * m2 + 4))), d2({ groupCount: I2, chainIndex: m2, modelIndex: g2, chainId: O2, chainName: D2 });
                }
                for (a2 = 0; I2 > a2; ++a2) {
                  var k2 = t3.groupList[t3.groupTypeList[v2]], R2 = k2.atomNameList.length;
                  if (u2) {
                    var P2 = null;
                    w2 && (P2 = w2[v2]);
                    var U2 = null;
                    t3.insCodeList && (U2 = String.fromCharCode(A2[v2]));
                    var B2 = null;
                    C2 && (B2 = C2[v2]), u2({ atomCount: R2, groupIndex: v2, chainIndex: m2, modelIndex: g2, groupId: t3.groupIdList[v2], groupType: t3.groupTypeList[v2], groupName: k2.groupName, singleLetterCode: k2.singleLetterCode, chemCompType: k2.chemCompType, secStruct: P2, insCode: U2, sequenceIndex: B2 });
                  }
                  for (o2 = 0; R2 > o2; ++o2) {
                    if (f2) {
                      var N2 = null;
                      S4 && (N2 = S4[_2]);
                      var G2 = null;
                      M2 && (G2 = M2[_2]);
                      var V2 = null;
                      z2 && (V2 = String.fromCharCode(z2[_2]));
                      var j2 = null;
                      T2 && (j2 = T2[_2]), f2({ atomIndex: _2, groupIndex: v2, chainIndex: m2, modelIndex: g2, atomId: N2, element: k2.elementList[o2], atomName: k2.atomNameList[o2], formalCharge: k2.formalChargeList[o2], xCoord: t3.xCoordList[_2], yCoord: t3.yCoordList[_2], zCoord: t3.zCoordList[_2], bFactor: G2, altLoc: V2, occupancy: j2 });
                    }
                    _2 += 1;
                  }
                  if (p2) {
                    var H2 = k2.bondAtomList;
                    for (o2 = 0, l2 = k2.bondOrderList.length; l2 > o2; ++o2) p2({ atomIndex1: _2 - R2 + H2[2 * o2], atomIndex2: _2 - R2 + H2[2 * o2 + 1], bondOrder: k2.bondOrderList[o2] });
                  }
                  v2 += 1;
                }
                m2 += 1;
              }
              if (y2 = b2 + 1, b2 = _2 - 1, p2 && E2) for (o2 = 0, l2 = E2.length; l2 > o2; o2 += 2) {
                var W2 = E2[o2], q2 = E2[o2 + 1];
                (W2 >= y2 && b2 >= W2 || q2 >= y2 && b2 >= q2) && p2({ atomIndex1: W2, atomIndex2: q2, bondOrder: L2 ? L2[o2 / 2] : null });
              }
              g2 += 1;
            }
          }
          function X(t3) {
            return n(j(t3));
          }
          function K(t3, e3) {
            return t3 instanceof ArrayBuffer && (t3 = new Uint8Array(t3)), q(t3 instanceof Uint8Array ? H(t3) : t3, e3);
          }
          function Q(t3, e3, i2, r2) {
            function s2() {
              try {
                var t4 = K(n2.response);
                i2(t4);
              } catch (t5) {
                r2(t5);
              }
            }
            var n2 = new XMLHttpRequest();
            n2.addEventListener("load", s2, true), n2.addEventListener("error", r2, true), n2.responseType = "arraybuffer", n2.open("GET", e3 + t3.toUpperCase()), n2.send();
          }
          function $(t3, e3, i2) {
            Q(t3, nt, e3, i2);
          }
          function J(t3, e3, i2) {
            Q(t3, at, e3, i2);
          }
          var tt = ["mmtfVersion", "mmtfProducer", "unitCell", "spaceGroup", "structureId", "title", "depositionDate", "releaseDate", "experimentalMethods", "resolution", "rFree", "rWork", "bioAssemblyList", "ncsOperatorList", "entityList", "groupList", "numBonds", "numAtoms", "numGroups", "numChains", "numModels", "groupsPerChain", "chainsPerModel"], et = ["xCoordList", "yCoordList", "zCoordList", "groupIdList", "groupTypeList", "chainIdList", "bFactorList", "atomIdList", "altLocList", "occupancyList", "secStructList", "insCodeList", "sequenceIndexList", "chainNameList", "bondAtomList", "bondOrderList"], it = tt.concat(et), rt = "v1.0.1", st = "//mmtf.rcsb.org/v1.0/", nt = st + "full/", at = st + "reduced/";
          t2.encode = X, t2.decode = K, t2.traverse = Z, t2.fetch = $, t2.fetchReduced = J, t2.version = rt, t2.fetchUrl = nt, t2.fetchReducedUrl = at, t2.encodeMsgpack = n, t2.encodeMmtf = j, t2.decodeMsgpack = H, t2.decodeMmtf = q;
        })(e);
      }, 75: (t, e, i) => {
        "use strict";
        i.r(e), i.d(e, { Deflate: () => yi, Inflate: () => Ai, constants: () => zi, default: () => Ti, deflate: () => bi, deflateRaw: () => xi, gzip: () => wi, inflate: () => Ci, inflateRaw: () => Si, ungzip: () => Mi });
        function r(t2) {
          let e2 = t2.length;
          for (; --e2 >= 0; ) t2[e2] = 0;
        }
        const s = 256, n = 286, a = 30, o = 15, l = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]), h = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]), c = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]), d = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), u = new Array(576);
        r(u);
        const f = new Array(60);
        r(f);
        const p = new Array(512);
        r(p);
        const g = new Array(256);
        r(g);
        const m = new Array(29);
        r(m);
        const v = new Array(a);
        function _(t2, e2, i2, r2, s2) {
          this.static_tree = t2, this.extra_bits = e2, this.extra_base = i2, this.elems = r2, this.max_length = s2, this.has_stree = t2 && t2.length;
        }
        let y, b, x;
        function w(t2, e2) {
          this.dyn_tree = t2, this.max_code = 0, this.stat_desc = e2;
        }
        r(v);
        const A = (t2) => t2 < 256 ? p[t2] : p[256 + (t2 >>> 7)], C = (t2, e2) => {
          t2.pending_buf[t2.pending++] = 255 & e2, t2.pending_buf[t2.pending++] = e2 >>> 8 & 255;
        }, S3 = (t2, e2, i2) => {
          t2.bi_valid > 16 - i2 ? (t2.bi_buf |= e2 << t2.bi_valid & 65535, C(t2, t2.bi_buf), t2.bi_buf = e2 >> 16 - t2.bi_valid, t2.bi_valid += i2 - 16) : (t2.bi_buf |= e2 << t2.bi_valid & 65535, t2.bi_valid += i2);
        }, M = (t2, e2, i2) => {
          S3(t2, i2[2 * e2], i2[2 * e2 + 1]);
        }, z = (t2, e2) => {
          let i2 = 0;
          do {
            i2 |= 1 & t2, t2 >>>= 1, i2 <<= 1;
          } while (--e2 > 0);
          return i2 >>> 1;
        }, T = (t2, e2, i2) => {
          const r2 = new Array(16);
          let s2, n2, a2 = 0;
          for (s2 = 1; s2 <= o; s2++) a2 = a2 + i2[s2 - 1] << 1, r2[s2] = a2;
          for (n2 = 0; n2 <= e2; n2++) {
            let e3 = t2[2 * n2 + 1];
            0 !== e3 && (t2[2 * n2] = z(r2[e3]++, e3));
          }
        }, E = (t2) => {
          let e2;
          for (e2 = 0; e2 < n; e2++) t2.dyn_ltree[2 * e2] = 0;
          for (e2 = 0; e2 < a; e2++) t2.dyn_dtree[2 * e2] = 0;
          for (e2 = 0; e2 < 19; e2++) t2.bl_tree[2 * e2] = 0;
          t2.dyn_ltree[512] = 1, t2.opt_len = t2.static_len = 0, t2.sym_next = t2.matches = 0;
        }, L = (t2) => {
          t2.bi_valid > 8 ? C(t2, t2.bi_buf) : t2.bi_valid > 0 && (t2.pending_buf[t2.pending++] = t2.bi_buf), t2.bi_buf = 0, t2.bi_valid = 0;
        }, F = (t2, e2, i2, r2) => {
          const s2 = 2 * e2, n2 = 2 * i2;
          return t2[s2] < t2[n2] || t2[s2] === t2[n2] && r2[e2] <= r2[i2];
        }, I = (t2, e2, i2) => {
          const r2 = t2.heap[i2];
          let s2 = i2 << 1;
          for (; s2 <= t2.heap_len && (s2 < t2.heap_len && F(e2, t2.heap[s2 + 1], t2.heap[s2], t2.depth) && s2++, !F(e2, r2, t2.heap[s2], t2.depth)); ) t2.heap[i2] = t2.heap[s2], i2 = s2, s2 <<= 1;
          t2.heap[i2] = r2;
        }, O = (t2, e2, i2) => {
          let r2, n2, a2, o2, c2 = 0;
          if (0 !== t2.sym_next) do {
            r2 = 255 & t2.pending_buf[t2.sym_buf + c2++], r2 += (255 & t2.pending_buf[t2.sym_buf + c2++]) << 8, n2 = t2.pending_buf[t2.sym_buf + c2++], 0 === r2 ? M(t2, n2, e2) : (a2 = g[n2], M(t2, a2 + s + 1, e2), o2 = l[a2], 0 !== o2 && (n2 -= m[a2], S3(t2, n2, o2)), r2--, a2 = A(r2), M(t2, a2, i2), o2 = h[a2], 0 !== o2 && (r2 -= v[a2], S3(t2, r2, o2)));
          } while (c2 < t2.sym_next);
          M(t2, 256, e2);
        }, D = (t2, e2) => {
          const i2 = e2.dyn_tree, r2 = e2.stat_desc.static_tree, s2 = e2.stat_desc.has_stree, n2 = e2.stat_desc.elems;
          let a2, l2, h2, c2 = -1;
          for (t2.heap_len = 0, t2.heap_max = 573, a2 = 0; a2 < n2; a2++) 0 !== i2[2 * a2] ? (t2.heap[++t2.heap_len] = c2 = a2, t2.depth[a2] = 0) : i2[2 * a2 + 1] = 0;
          for (; t2.heap_len < 2; ) h2 = t2.heap[++t2.heap_len] = c2 < 2 ? ++c2 : 0, i2[2 * h2] = 1, t2.depth[h2] = 0, t2.opt_len--, s2 && (t2.static_len -= r2[2 * h2 + 1]);
          for (e2.max_code = c2, a2 = t2.heap_len >> 1; a2 >= 1; a2--) I(t2, i2, a2);
          h2 = n2;
          do {
            a2 = t2.heap[1], t2.heap[1] = t2.heap[t2.heap_len--], I(t2, i2, 1), l2 = t2.heap[1], t2.heap[--t2.heap_max] = a2, t2.heap[--t2.heap_max] = l2, i2[2 * h2] = i2[2 * a2] + i2[2 * l2], t2.depth[h2] = (t2.depth[a2] >= t2.depth[l2] ? t2.depth[a2] : t2.depth[l2]) + 1, i2[2 * a2 + 1] = i2[2 * l2 + 1] = h2, t2.heap[1] = h2++, I(t2, i2, 1);
          } while (t2.heap_len >= 2);
          t2.heap[--t2.heap_max] = t2.heap[1], ((t3, e3) => {
            const i3 = e3.dyn_tree, r3 = e3.max_code, s3 = e3.stat_desc.static_tree, n3 = e3.stat_desc.has_stree, a3 = e3.stat_desc.extra_bits, l3 = e3.stat_desc.extra_base, h3 = e3.stat_desc.max_length;
            let c3, d2, u2, f2, p2, g2, m2 = 0;
            for (f2 = 0; f2 <= o; f2++) t3.bl_count[f2] = 0;
            for (i3[2 * t3.heap[t3.heap_max] + 1] = 0, c3 = t3.heap_max + 1; c3 < 573; c3++) d2 = t3.heap[c3], f2 = i3[2 * i3[2 * d2 + 1] + 1] + 1, f2 > h3 && (f2 = h3, m2++), i3[2 * d2 + 1] = f2, d2 > r3 || (t3.bl_count[f2]++, p2 = 0, d2 >= l3 && (p2 = a3[d2 - l3]), g2 = i3[2 * d2], t3.opt_len += g2 * (f2 + p2), n3 && (t3.static_len += g2 * (s3[2 * d2 + 1] + p2)));
            if (0 !== m2) {
              do {
                for (f2 = h3 - 1; 0 === t3.bl_count[f2]; ) f2--;
                t3.bl_count[f2]--, t3.bl_count[f2 + 1] += 2, t3.bl_count[h3]--, m2 -= 2;
              } while (m2 > 0);
              for (f2 = h3; 0 !== f2; f2--) for (d2 = t3.bl_count[f2]; 0 !== d2; ) u2 = t3.heap[--c3], u2 > r3 || (i3[2 * u2 + 1] !== f2 && (t3.opt_len += (f2 - i3[2 * u2 + 1]) * i3[2 * u2], i3[2 * u2 + 1] = f2), d2--);
            }
          })(t2, e2), T(i2, c2, t2.bl_count);
        }, k = (t2, e2, i2) => {
          let r2, s2, n2 = -1, a2 = e2[1], o2 = 0, l2 = 7, h2 = 4;
          for (0 === a2 && (l2 = 138, h2 = 3), e2[2 * (i2 + 1) + 1] = 65535, r2 = 0; r2 <= i2; r2++) s2 = a2, a2 = e2[2 * (r2 + 1) + 1], ++o2 < l2 && s2 === a2 || (o2 < h2 ? t2.bl_tree[2 * s2] += o2 : 0 !== s2 ? (s2 !== n2 && t2.bl_tree[2 * s2]++, t2.bl_tree[32]++) : o2 <= 10 ? t2.bl_tree[34]++ : t2.bl_tree[36]++, o2 = 0, n2 = s2, 0 === a2 ? (l2 = 138, h2 = 3) : s2 === a2 ? (l2 = 6, h2 = 3) : (l2 = 7, h2 = 4));
        }, R = (t2, e2, i2) => {
          let r2, s2, n2 = -1, a2 = e2[1], o2 = 0, l2 = 7, h2 = 4;
          for (0 === a2 && (l2 = 138, h2 = 3), r2 = 0; r2 <= i2; r2++) if (s2 = a2, a2 = e2[2 * (r2 + 1) + 1], !(++o2 < l2 && s2 === a2)) {
            if (o2 < h2) do {
              M(t2, s2, t2.bl_tree);
            } while (0 != --o2);
            else 0 !== s2 ? (s2 !== n2 && (M(t2, s2, t2.bl_tree), o2--), M(t2, 16, t2.bl_tree), S3(t2, o2 - 3, 2)) : o2 <= 10 ? (M(t2, 17, t2.bl_tree), S3(t2, o2 - 3, 3)) : (M(t2, 18, t2.bl_tree), S3(t2, o2 - 11, 7));
            o2 = 0, n2 = s2, 0 === a2 ? (l2 = 138, h2 = 3) : s2 === a2 ? (l2 = 6, h2 = 3) : (l2 = 7, h2 = 4);
          }
        };
        let P = false;
        const U = (t2, e2, i2, r2) => {
          S3(t2, 0 + (r2 ? 1 : 0), 3), L(t2), C(t2, i2), C(t2, ~i2), i2 && t2.pending_buf.set(t2.window.subarray(e2, e2 + i2), t2.pending), t2.pending += i2;
        };
        var B = (t2, e2, i2, r2) => {
          let n2, a2, o2 = 0;
          t2.level > 0 ? (2 === t2.strm.data_type && (t2.strm.data_type = ((t3) => {
            let e3, i3 = 4093624447;
            for (e3 = 0; e3 <= 31; e3++, i3 >>>= 1) if (1 & i3 && 0 !== t3.dyn_ltree[2 * e3]) return 0;
            if (0 !== t3.dyn_ltree[18] || 0 !== t3.dyn_ltree[20] || 0 !== t3.dyn_ltree[26]) return 1;
            for (e3 = 32; e3 < s; e3++) if (0 !== t3.dyn_ltree[2 * e3]) return 1;
            return 0;
          })(t2)), D(t2, t2.l_desc), D(t2, t2.d_desc), o2 = ((t3) => {
            let e3;
            for (k(t3, t3.dyn_ltree, t3.l_desc.max_code), k(t3, t3.dyn_dtree, t3.d_desc.max_code), D(t3, t3.bl_desc), e3 = 18; e3 >= 3 && 0 === t3.bl_tree[2 * d[e3] + 1]; e3--) ;
            return t3.opt_len += 3 * (e3 + 1) + 5 + 5 + 4, e3;
          })(t2), n2 = t2.opt_len + 3 + 7 >>> 3, a2 = t2.static_len + 3 + 7 >>> 3, a2 <= n2 && (n2 = a2)) : n2 = a2 = i2 + 5, i2 + 4 <= n2 && -1 !== e2 ? U(t2, e2, i2, r2) : 4 === t2.strategy || a2 === n2 ? (S3(t2, 2 + (r2 ? 1 : 0), 3), O(t2, u, f)) : (S3(t2, 4 + (r2 ? 1 : 0), 3), ((t3, e3, i3, r3) => {
            let s2;
            for (S3(t3, e3 - 257, 5), S3(t3, i3 - 1, 5), S3(t3, r3 - 4, 4), s2 = 0; s2 < r3; s2++) S3(t3, t3.bl_tree[2 * d[s2] + 1], 3);
            R(t3, t3.dyn_ltree, e3 - 1), R(t3, t3.dyn_dtree, i3 - 1);
          })(t2, t2.l_desc.max_code + 1, t2.d_desc.max_code + 1, o2 + 1), O(t2, t2.dyn_ltree, t2.dyn_dtree)), E(t2), r2 && L(t2);
        }, N = { _tr_init: (t2) => {
          P || ((() => {
            let t3, e2, i2, r2, s2;
            const d2 = new Array(16);
            for (i2 = 0, r2 = 0; r2 < 28; r2++) for (m[r2] = i2, t3 = 0; t3 < 1 << l[r2]; t3++) g[i2++] = r2;
            for (g[i2 - 1] = r2, s2 = 0, r2 = 0; r2 < 16; r2++) for (v[r2] = s2, t3 = 0; t3 < 1 << h[r2]; t3++) p[s2++] = r2;
            for (s2 >>= 7; r2 < a; r2++) for (v[r2] = s2 << 7, t3 = 0; t3 < 1 << h[r2] - 7; t3++) p[256 + s2++] = r2;
            for (e2 = 0; e2 <= o; e2++) d2[e2] = 0;
            for (t3 = 0; t3 <= 143; ) u[2 * t3 + 1] = 8, t3++, d2[8]++;
            for (; t3 <= 255; ) u[2 * t3 + 1] = 9, t3++, d2[9]++;
            for (; t3 <= 279; ) u[2 * t3 + 1] = 7, t3++, d2[7]++;
            for (; t3 <= 287; ) u[2 * t3 + 1] = 8, t3++, d2[8]++;
            for (T(u, 287, d2), t3 = 0; t3 < a; t3++) f[2 * t3 + 1] = 5, f[2 * t3] = z(t3, 5);
            y = new _(u, l, 257, n, o), b = new _(f, h, 0, a, o), x = new _(new Array(0), c, 0, 19, 7);
          })(), P = true), t2.l_desc = new w(t2.dyn_ltree, y), t2.d_desc = new w(t2.dyn_dtree, b), t2.bl_desc = new w(t2.bl_tree, x), t2.bi_buf = 0, t2.bi_valid = 0, E(t2);
        }, _tr_stored_block: U, _tr_flush_block: B, _tr_tally: (t2, e2, i2) => (t2.pending_buf[t2.sym_buf + t2.sym_next++] = e2, t2.pending_buf[t2.sym_buf + t2.sym_next++] = e2 >> 8, t2.pending_buf[t2.sym_buf + t2.sym_next++] = i2, 0 === e2 ? t2.dyn_ltree[2 * i2]++ : (t2.matches++, e2--, t2.dyn_ltree[2 * (g[i2] + s + 1)]++, t2.dyn_dtree[2 * A(e2)]++), t2.sym_next === t2.sym_end), _tr_align: (t2) => {
          S3(t2, 2, 3), M(t2, 256, u), ((t3) => {
            16 === t3.bi_valid ? (C(t3, t3.bi_buf), t3.bi_buf = 0, t3.bi_valid = 0) : t3.bi_valid >= 8 && (t3.pending_buf[t3.pending++] = 255 & t3.bi_buf, t3.bi_buf >>= 8, t3.bi_valid -= 8);
          })(t2);
        } };
        var G = (t2, e2, i2, r2) => {
          let s2 = 65535 & t2, n2 = t2 >>> 16 & 65535, a2 = 0;
          for (; 0 !== i2; ) {
            a2 = i2 > 2e3 ? 2e3 : i2, i2 -= a2;
            do {
              s2 = s2 + e2[r2++] | 0, n2 = n2 + s2 | 0;
            } while (--a2);
            s2 %= 65521, n2 %= 65521;
          }
          return s2 | n2 << 16;
        };
        const V = new Uint32Array((() => {
          let t2, e2 = [];
          for (var i2 = 0; i2 < 256; i2++) {
            t2 = i2;
            for (var r2 = 0; r2 < 8; r2++) t2 = 1 & t2 ? 3988292384 ^ t2 >>> 1 : t2 >>> 1;
            e2[i2] = t2;
          }
          return e2;
        })());
        var j = (t2, e2, i2, r2) => {
          const s2 = V, n2 = r2 + i2;
          t2 ^= -1;
          for (let i3 = r2; i3 < n2; i3++) t2 = t2 >>> 8 ^ s2[255 & (t2 ^ e2[i3])];
          return ~t2;
        }, H = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" }, W = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_MEM_ERROR: -4, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
        const { _tr_init: q, _tr_stored_block: Y, _tr_flush_block: Z, _tr_tally: X, _tr_align: K } = N, { Z_NO_FLUSH: Q, Z_PARTIAL_FLUSH: $, Z_FULL_FLUSH: J, Z_FINISH: tt, Z_BLOCK: et, Z_OK: it, Z_STREAM_END: rt, Z_STREAM_ERROR: st, Z_DATA_ERROR: nt, Z_BUF_ERROR: at, Z_DEFAULT_COMPRESSION: ot, Z_FILTERED: lt, Z_HUFFMAN_ONLY: ht, Z_RLE: ct, Z_FIXED: dt, Z_DEFAULT_STRATEGY: ut, Z_UNKNOWN: ft, Z_DEFLATED: pt } = W, gt = 258, mt = 262, vt = 42, _t = 113, yt = 666, bt = (t2, e2) => (t2.msg = H[e2], e2), xt = (t2) => 2 * t2 - (t2 > 4 ? 9 : 0), wt = (t2) => {
          let e2 = t2.length;
          for (; --e2 >= 0; ) t2[e2] = 0;
        }, At = (t2) => {
          let e2, i2, r2, s2 = t2.w_size;
          e2 = t2.hash_size, r2 = e2;
          do {
            i2 = t2.head[--r2], t2.head[r2] = i2 >= s2 ? i2 - s2 : 0;
          } while (--e2);
          e2 = s2, r2 = e2;
          do {
            i2 = t2.prev[--r2], t2.prev[r2] = i2 >= s2 ? i2 - s2 : 0;
          } while (--e2);
        };
        let Ct = (t2, e2, i2) => (e2 << t2.hash_shift ^ i2) & t2.hash_mask;
        const St = (t2) => {
          const e2 = t2.state;
          let i2 = e2.pending;
          i2 > t2.avail_out && (i2 = t2.avail_out), 0 !== i2 && (t2.output.set(e2.pending_buf.subarray(e2.pending_out, e2.pending_out + i2), t2.next_out), t2.next_out += i2, e2.pending_out += i2, t2.total_out += i2, t2.avail_out -= i2, e2.pending -= i2, 0 === e2.pending && (e2.pending_out = 0));
        }, Mt = (t2, e2) => {
          Z(t2, t2.block_start >= 0 ? t2.block_start : -1, t2.strstart - t2.block_start, e2), t2.block_start = t2.strstart, St(t2.strm);
        }, zt = (t2, e2) => {
          t2.pending_buf[t2.pending++] = e2;
        }, Tt = (t2, e2) => {
          t2.pending_buf[t2.pending++] = e2 >>> 8 & 255, t2.pending_buf[t2.pending++] = 255 & e2;
        }, Et = (t2, e2, i2, r2) => {
          let s2 = t2.avail_in;
          return s2 > r2 && (s2 = r2), 0 === s2 ? 0 : (t2.avail_in -= s2, e2.set(t2.input.subarray(t2.next_in, t2.next_in + s2), i2), 1 === t2.state.wrap ? t2.adler = G(t2.adler, e2, s2, i2) : 2 === t2.state.wrap && (t2.adler = j(t2.adler, e2, s2, i2)), t2.next_in += s2, t2.total_in += s2, s2);
        }, Lt = (t2, e2) => {
          let i2, r2, s2 = t2.max_chain_length, n2 = t2.strstart, a2 = t2.prev_length, o2 = t2.nice_match;
          const l2 = t2.strstart > t2.w_size - mt ? t2.strstart - (t2.w_size - mt) : 0, h2 = t2.window, c2 = t2.w_mask, d2 = t2.prev, u2 = t2.strstart + gt;
          let f2 = h2[n2 + a2 - 1], p2 = h2[n2 + a2];
          t2.prev_length >= t2.good_match && (s2 >>= 2), o2 > t2.lookahead && (o2 = t2.lookahead);
          do {
            if (i2 = e2, h2[i2 + a2] === p2 && h2[i2 + a2 - 1] === f2 && h2[i2] === h2[n2] && h2[++i2] === h2[n2 + 1]) {
              n2 += 2, i2++;
              do {
              } while (h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && h2[++n2] === h2[++i2] && n2 < u2);
              if (r2 = gt - (u2 - n2), n2 = u2 - gt, r2 > a2) {
                if (t2.match_start = e2, a2 = r2, r2 >= o2) break;
                f2 = h2[n2 + a2 - 1], p2 = h2[n2 + a2];
              }
            }
          } while ((e2 = d2[e2 & c2]) > l2 && 0 != --s2);
          return a2 <= t2.lookahead ? a2 : t2.lookahead;
        }, Ft = (t2) => {
          const e2 = t2.w_size;
          let i2, r2, s2;
          do {
            if (r2 = t2.window_size - t2.lookahead - t2.strstart, t2.strstart >= e2 + (e2 - mt) && (t2.window.set(t2.window.subarray(e2, e2 + e2 - r2), 0), t2.match_start -= e2, t2.strstart -= e2, t2.block_start -= e2, t2.insert > t2.strstart && (t2.insert = t2.strstart), At(t2), r2 += e2), 0 === t2.strm.avail_in) break;
            if (i2 = Et(t2.strm, t2.window, t2.strstart + t2.lookahead, r2), t2.lookahead += i2, t2.lookahead + t2.insert >= 3) for (s2 = t2.strstart - t2.insert, t2.ins_h = t2.window[s2], t2.ins_h = Ct(t2, t2.ins_h, t2.window[s2 + 1]); t2.insert && (t2.ins_h = Ct(t2, t2.ins_h, t2.window[s2 + 3 - 1]), t2.prev[s2 & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = s2, s2++, t2.insert--, !(t2.lookahead + t2.insert < 3)); ) ;
          } while (t2.lookahead < mt && 0 !== t2.strm.avail_in);
        }, It = (t2, e2) => {
          let i2, r2, s2, n2 = t2.pending_buf_size - 5 > t2.w_size ? t2.w_size : t2.pending_buf_size - 5, a2 = 0, o2 = t2.strm.avail_in;
          do {
            if (i2 = 65535, s2 = t2.bi_valid + 42 >> 3, t2.strm.avail_out < s2) break;
            if (s2 = t2.strm.avail_out - s2, r2 = t2.strstart - t2.block_start, i2 > r2 + t2.strm.avail_in && (i2 = r2 + t2.strm.avail_in), i2 > s2 && (i2 = s2), i2 < n2 && (0 === i2 && e2 !== tt || e2 === Q || i2 !== r2 + t2.strm.avail_in)) break;
            a2 = e2 === tt && i2 === r2 + t2.strm.avail_in ? 1 : 0, Y(t2, 0, 0, a2), t2.pending_buf[t2.pending - 4] = i2, t2.pending_buf[t2.pending - 3] = i2 >> 8, t2.pending_buf[t2.pending - 2] = ~i2, t2.pending_buf[t2.pending - 1] = ~i2 >> 8, St(t2.strm), r2 && (r2 > i2 && (r2 = i2), t2.strm.output.set(t2.window.subarray(t2.block_start, t2.block_start + r2), t2.strm.next_out), t2.strm.next_out += r2, t2.strm.avail_out -= r2, t2.strm.total_out += r2, t2.block_start += r2, i2 -= r2), i2 && (Et(t2.strm, t2.strm.output, t2.strm.next_out, i2), t2.strm.next_out += i2, t2.strm.avail_out -= i2, t2.strm.total_out += i2);
          } while (0 === a2);
          return o2 -= t2.strm.avail_in, o2 && (o2 >= t2.w_size ? (t2.matches = 2, t2.window.set(t2.strm.input.subarray(t2.strm.next_in - t2.w_size, t2.strm.next_in), 0), t2.strstart = t2.w_size, t2.insert = t2.strstart) : (t2.window_size - t2.strstart <= o2 && (t2.strstart -= t2.w_size, t2.window.set(t2.window.subarray(t2.w_size, t2.w_size + t2.strstart), 0), t2.matches < 2 && t2.matches++, t2.insert > t2.strstart && (t2.insert = t2.strstart)), t2.window.set(t2.strm.input.subarray(t2.strm.next_in - o2, t2.strm.next_in), t2.strstart), t2.strstart += o2, t2.insert += o2 > t2.w_size - t2.insert ? t2.w_size - t2.insert : o2), t2.block_start = t2.strstart), t2.high_water < t2.strstart && (t2.high_water = t2.strstart), a2 ? 4 : e2 !== Q && e2 !== tt && 0 === t2.strm.avail_in && t2.strstart === t2.block_start ? 2 : (s2 = t2.window_size - t2.strstart, t2.strm.avail_in > s2 && t2.block_start >= t2.w_size && (t2.block_start -= t2.w_size, t2.strstart -= t2.w_size, t2.window.set(t2.window.subarray(t2.w_size, t2.w_size + t2.strstart), 0), t2.matches < 2 && t2.matches++, s2 += t2.w_size, t2.insert > t2.strstart && (t2.insert = t2.strstart)), s2 > t2.strm.avail_in && (s2 = t2.strm.avail_in), s2 && (Et(t2.strm, t2.window, t2.strstart, s2), t2.strstart += s2, t2.insert += s2 > t2.w_size - t2.insert ? t2.w_size - t2.insert : s2), t2.high_water < t2.strstart && (t2.high_water = t2.strstart), s2 = t2.bi_valid + 42 >> 3, s2 = t2.pending_buf_size - s2 > 65535 ? 65535 : t2.pending_buf_size - s2, n2 = s2 > t2.w_size ? t2.w_size : s2, r2 = t2.strstart - t2.block_start, (r2 >= n2 || (r2 || e2 === tt) && e2 !== Q && 0 === t2.strm.avail_in && r2 <= s2) && (i2 = r2 > s2 ? s2 : r2, a2 = e2 === tt && 0 === t2.strm.avail_in && i2 === r2 ? 1 : 0, Y(t2, t2.block_start, i2, a2), t2.block_start += i2, St(t2.strm)), a2 ? 3 : 1);
        }, Ot = (t2, e2) => {
          let i2, r2;
          for (; ; ) {
            if (t2.lookahead < mt) {
              if (Ft(t2), t2.lookahead < mt && e2 === Q) return 1;
              if (0 === t2.lookahead) break;
            }
            if (i2 = 0, t2.lookahead >= 3 && (t2.ins_h = Ct(t2, t2.ins_h, t2.window[t2.strstart + 3 - 1]), i2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), 0 !== i2 && t2.strstart - i2 <= t2.w_size - mt && (t2.match_length = Lt(t2, i2)), t2.match_length >= 3) if (r2 = X(t2, t2.strstart - t2.match_start, t2.match_length - 3), t2.lookahead -= t2.match_length, t2.match_length <= t2.max_lazy_match && t2.lookahead >= 3) {
              t2.match_length--;
              do {
                t2.strstart++, t2.ins_h = Ct(t2, t2.ins_h, t2.window[t2.strstart + 3 - 1]), i2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart;
              } while (0 != --t2.match_length);
              t2.strstart++;
            } else t2.strstart += t2.match_length, t2.match_length = 0, t2.ins_h = t2.window[t2.strstart], t2.ins_h = Ct(t2, t2.ins_h, t2.window[t2.strstart + 1]);
            else r2 = X(t2, 0, t2.window[t2.strstart]), t2.lookahead--, t2.strstart++;
            if (r2 && (Mt(t2, false), 0 === t2.strm.avail_out)) return 1;
          }
          return t2.insert = t2.strstart < 2 ? t2.strstart : 2, e2 === tt ? (Mt(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.sym_next && (Mt(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
        }, Dt = (t2, e2) => {
          let i2, r2, s2;
          for (; ; ) {
            if (t2.lookahead < mt) {
              if (Ft(t2), t2.lookahead < mt && e2 === Q) return 1;
              if (0 === t2.lookahead) break;
            }
            if (i2 = 0, t2.lookahead >= 3 && (t2.ins_h = Ct(t2, t2.ins_h, t2.window[t2.strstart + 3 - 1]), i2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), t2.prev_length = t2.match_length, t2.prev_match = t2.match_start, t2.match_length = 2, 0 !== i2 && t2.prev_length < t2.max_lazy_match && t2.strstart - i2 <= t2.w_size - mt && (t2.match_length = Lt(t2, i2), t2.match_length <= 5 && (t2.strategy === lt || 3 === t2.match_length && t2.strstart - t2.match_start > 4096) && (t2.match_length = 2)), t2.prev_length >= 3 && t2.match_length <= t2.prev_length) {
              s2 = t2.strstart + t2.lookahead - 3, r2 = X(t2, t2.strstart - 1 - t2.prev_match, t2.prev_length - 3), t2.lookahead -= t2.prev_length - 1, t2.prev_length -= 2;
              do {
                ++t2.strstart <= s2 && (t2.ins_h = Ct(t2, t2.ins_h, t2.window[t2.strstart + 3 - 1]), i2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart);
              } while (0 != --t2.prev_length);
              if (t2.match_available = 0, t2.match_length = 2, t2.strstart++, r2 && (Mt(t2, false), 0 === t2.strm.avail_out)) return 1;
            } else if (t2.match_available) {
              if (r2 = X(t2, 0, t2.window[t2.strstart - 1]), r2 && Mt(t2, false), t2.strstart++, t2.lookahead--, 0 === t2.strm.avail_out) return 1;
            } else t2.match_available = 1, t2.strstart++, t2.lookahead--;
          }
          return t2.match_available && (r2 = X(t2, 0, t2.window[t2.strstart - 1]), t2.match_available = 0), t2.insert = t2.strstart < 2 ? t2.strstart : 2, e2 === tt ? (Mt(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.sym_next && (Mt(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
        };
        function kt(t2, e2, i2, r2, s2) {
          this.good_length = t2, this.max_lazy = e2, this.nice_length = i2, this.max_chain = r2, this.func = s2;
        }
        const Rt = [new kt(0, 0, 0, 0, It), new kt(4, 4, 8, 4, Ot), new kt(4, 5, 16, 8, Ot), new kt(4, 6, 32, 32, Ot), new kt(4, 4, 16, 16, Dt), new kt(8, 16, 32, 32, Dt), new kt(8, 16, 128, 128, Dt), new kt(8, 32, 128, 256, Dt), new kt(32, 128, 258, 1024, Dt), new kt(32, 258, 258, 4096, Dt)];
        function Pt() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = pt, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), wt(this.dyn_ltree), wt(this.dyn_dtree), wt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), wt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), wt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        const Ut = (t2) => {
          if (!t2) return 1;
          const e2 = t2.state;
          return !e2 || e2.strm !== t2 || e2.status !== vt && 57 !== e2.status && 69 !== e2.status && 73 !== e2.status && 91 !== e2.status && 103 !== e2.status && e2.status !== _t && e2.status !== yt ? 1 : 0;
        }, Bt = (t2) => {
          if (Ut(t2)) return bt(t2, st);
          t2.total_in = t2.total_out = 0, t2.data_type = ft;
          const e2 = t2.state;
          return e2.pending = 0, e2.pending_out = 0, e2.wrap < 0 && (e2.wrap = -e2.wrap), e2.status = 2 === e2.wrap ? 57 : e2.wrap ? vt : _t, t2.adler = 2 === e2.wrap ? 0 : 1, e2.last_flush = -2, q(e2), it;
        }, Nt = (t2) => {
          const e2 = Bt(t2);
          var i2;
          return e2 === it && ((i2 = t2.state).window_size = 2 * i2.w_size, wt(i2.head), i2.max_lazy_match = Rt[i2.level].max_lazy, i2.good_match = Rt[i2.level].good_length, i2.nice_match = Rt[i2.level].nice_length, i2.max_chain_length = Rt[i2.level].max_chain, i2.strstart = 0, i2.block_start = 0, i2.lookahead = 0, i2.insert = 0, i2.match_length = i2.prev_length = 2, i2.match_available = 0, i2.ins_h = 0), e2;
        }, Gt = (t2, e2, i2, r2, s2, n2) => {
          if (!t2) return st;
          let a2 = 1;
          if (e2 === ot && (e2 = 6), r2 < 0 ? (a2 = 0, r2 = -r2) : r2 > 15 && (a2 = 2, r2 -= 16), s2 < 1 || s2 > 9 || i2 !== pt || r2 < 8 || r2 > 15 || e2 < 0 || e2 > 9 || n2 < 0 || n2 > dt || 8 === r2 && 1 !== a2) return bt(t2, st);
          8 === r2 && (r2 = 9);
          const o2 = new Pt();
          return t2.state = o2, o2.strm = t2, o2.status = vt, o2.wrap = a2, o2.gzhead = null, o2.w_bits = r2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = s2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + 3 - 1) / 3), o2.window = new Uint8Array(2 * o2.w_size), o2.head = new Uint16Array(o2.hash_size), o2.prev = new Uint16Array(o2.w_size), o2.lit_bufsize = 1 << s2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new Uint8Array(o2.pending_buf_size), o2.sym_buf = o2.lit_bufsize, o2.sym_end = 3 * (o2.lit_bufsize - 1), o2.level = e2, o2.strategy = n2, o2.method = i2, Nt(t2);
        };
        var Vt = { deflateInit: (t2, e2) => Gt(t2, e2, pt, 15, 8, ut), deflateInit2: Gt, deflateReset: Nt, deflateResetKeep: Bt, deflateSetHeader: (t2, e2) => Ut(t2) || 2 !== t2.state.wrap ? st : (t2.state.gzhead = e2, it), deflate: (t2, e2) => {
          if (Ut(t2) || e2 > et || e2 < 0) return t2 ? bt(t2, st) : st;
          const i2 = t2.state;
          if (!t2.output || 0 !== t2.avail_in && !t2.input || i2.status === yt && e2 !== tt) return bt(t2, 0 === t2.avail_out ? at : st);
          const r2 = i2.last_flush;
          if (i2.last_flush = e2, 0 !== i2.pending) {
            if (St(t2), 0 === t2.avail_out) return i2.last_flush = -1, it;
          } else if (0 === t2.avail_in && xt(e2) <= xt(r2) && e2 !== tt) return bt(t2, at);
          if (i2.status === yt && 0 !== t2.avail_in) return bt(t2, at);
          if (i2.status === vt && 0 === i2.wrap && (i2.status = _t), i2.status === vt) {
            let e3 = pt + (i2.w_bits - 8 << 4) << 8, r3 = -1;
            if (r3 = i2.strategy >= ht || i2.level < 2 ? 0 : i2.level < 6 ? 1 : 6 === i2.level ? 2 : 3, e3 |= r3 << 6, 0 !== i2.strstart && (e3 |= 32), e3 += 31 - e3 % 31, Tt(i2, e3), 0 !== i2.strstart && (Tt(i2, t2.adler >>> 16), Tt(i2, 65535 & t2.adler)), t2.adler = 1, i2.status = _t, St(t2), 0 !== i2.pending) return i2.last_flush = -1, it;
          }
          if (57 === i2.status) {
            if (t2.adler = 0, zt(i2, 31), zt(i2, 139), zt(i2, 8), i2.gzhead) zt(i2, (i2.gzhead.text ? 1 : 0) + (i2.gzhead.hcrc ? 2 : 0) + (i2.gzhead.extra ? 4 : 0) + (i2.gzhead.name ? 8 : 0) + (i2.gzhead.comment ? 16 : 0)), zt(i2, 255 & i2.gzhead.time), zt(i2, i2.gzhead.time >> 8 & 255), zt(i2, i2.gzhead.time >> 16 & 255), zt(i2, i2.gzhead.time >> 24 & 255), zt(i2, 9 === i2.level ? 2 : i2.strategy >= ht || i2.level < 2 ? 4 : 0), zt(i2, 255 & i2.gzhead.os), i2.gzhead.extra && i2.gzhead.extra.length && (zt(i2, 255 & i2.gzhead.extra.length), zt(i2, i2.gzhead.extra.length >> 8 & 255)), i2.gzhead.hcrc && (t2.adler = j(t2.adler, i2.pending_buf, i2.pending, 0)), i2.gzindex = 0, i2.status = 69;
            else if (zt(i2, 0), zt(i2, 0), zt(i2, 0), zt(i2, 0), zt(i2, 0), zt(i2, 9 === i2.level ? 2 : i2.strategy >= ht || i2.level < 2 ? 4 : 0), zt(i2, 3), i2.status = _t, St(t2), 0 !== i2.pending) return i2.last_flush = -1, it;
          }
          if (69 === i2.status) {
            if (i2.gzhead.extra) {
              let e3 = i2.pending, r3 = (65535 & i2.gzhead.extra.length) - i2.gzindex;
              for (; i2.pending + r3 > i2.pending_buf_size; ) {
                let s3 = i2.pending_buf_size - i2.pending;
                if (i2.pending_buf.set(i2.gzhead.extra.subarray(i2.gzindex, i2.gzindex + s3), i2.pending), i2.pending = i2.pending_buf_size, i2.gzhead.hcrc && i2.pending > e3 && (t2.adler = j(t2.adler, i2.pending_buf, i2.pending - e3, e3)), i2.gzindex += s3, St(t2), 0 !== i2.pending) return i2.last_flush = -1, it;
                e3 = 0, r3 -= s3;
              }
              let s2 = new Uint8Array(i2.gzhead.extra);
              i2.pending_buf.set(s2.subarray(i2.gzindex, i2.gzindex + r3), i2.pending), i2.pending += r3, i2.gzhead.hcrc && i2.pending > e3 && (t2.adler = j(t2.adler, i2.pending_buf, i2.pending - e3, e3)), i2.gzindex = 0;
            }
            i2.status = 73;
          }
          if (73 === i2.status) {
            if (i2.gzhead.name) {
              let e3, r3 = i2.pending;
              do {
                if (i2.pending === i2.pending_buf_size) {
                  if (i2.gzhead.hcrc && i2.pending > r3 && (t2.adler = j(t2.adler, i2.pending_buf, i2.pending - r3, r3)), St(t2), 0 !== i2.pending) return i2.last_flush = -1, it;
                  r3 = 0;
                }
                e3 = i2.gzindex < i2.gzhead.name.length ? 255 & i2.gzhead.name.charCodeAt(i2.gzindex++) : 0, zt(i2, e3);
              } while (0 !== e3);
              i2.gzhead.hcrc && i2.pending > r3 && (t2.adler = j(t2.adler, i2.pending_buf, i2.pending - r3, r3)), i2.gzindex = 0;
            }
            i2.status = 91;
          }
          if (91 === i2.status) {
            if (i2.gzhead.comment) {
              let e3, r3 = i2.pending;
              do {
                if (i2.pending === i2.pending_buf_size) {
                  if (i2.gzhead.hcrc && i2.pending > r3 && (t2.adler = j(t2.adler, i2.pending_buf, i2.pending - r3, r3)), St(t2), 0 !== i2.pending) return i2.last_flush = -1, it;
                  r3 = 0;
                }
                e3 = i2.gzindex < i2.gzhead.comment.length ? 255 & i2.gzhead.comment.charCodeAt(i2.gzindex++) : 0, zt(i2, e3);
              } while (0 !== e3);
              i2.gzhead.hcrc && i2.pending > r3 && (t2.adler = j(t2.adler, i2.pending_buf, i2.pending - r3, r3));
            }
            i2.status = 103;
          }
          if (103 === i2.status) {
            if (i2.gzhead.hcrc) {
              if (i2.pending + 2 > i2.pending_buf_size && (St(t2), 0 !== i2.pending)) return i2.last_flush = -1, it;
              zt(i2, 255 & t2.adler), zt(i2, t2.adler >> 8 & 255), t2.adler = 0;
            }
            if (i2.status = _t, St(t2), 0 !== i2.pending) return i2.last_flush = -1, it;
          }
          if (0 !== t2.avail_in || 0 !== i2.lookahead || e2 !== Q && i2.status !== yt) {
            let r3 = 0 === i2.level ? It(i2, e2) : i2.strategy === ht ? ((t3, e3) => {
              let i3;
              for (; ; ) {
                if (0 === t3.lookahead && (Ft(t3), 0 === t3.lookahead)) {
                  if (e3 === Q) return 1;
                  break;
                }
                if (t3.match_length = 0, i3 = X(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++, i3 && (Mt(t3, false), 0 === t3.strm.avail_out)) return 1;
              }
              return t3.insert = 0, e3 === tt ? (Mt(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.sym_next && (Mt(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
            })(i2, e2) : i2.strategy === ct ? ((t3, e3) => {
              let i3, r4, s2, n2;
              const a2 = t3.window;
              for (; ; ) {
                if (t3.lookahead <= gt) {
                  if (Ft(t3), t3.lookahead <= gt && e3 === Q) return 1;
                  if (0 === t3.lookahead) break;
                }
                if (t3.match_length = 0, t3.lookahead >= 3 && t3.strstart > 0 && (s2 = t3.strstart - 1, r4 = a2[s2], r4 === a2[++s2] && r4 === a2[++s2] && r4 === a2[++s2])) {
                  n2 = t3.strstart + gt;
                  do {
                  } while (r4 === a2[++s2] && r4 === a2[++s2] && r4 === a2[++s2] && r4 === a2[++s2] && r4 === a2[++s2] && r4 === a2[++s2] && r4 === a2[++s2] && r4 === a2[++s2] && s2 < n2);
                  t3.match_length = gt - (n2 - s2), t3.match_length > t3.lookahead && (t3.match_length = t3.lookahead);
                }
                if (t3.match_length >= 3 ? (i3 = X(t3, 1, t3.match_length - 3), t3.lookahead -= t3.match_length, t3.strstart += t3.match_length, t3.match_length = 0) : (i3 = X(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++), i3 && (Mt(t3, false), 0 === t3.strm.avail_out)) return 1;
              }
              return t3.insert = 0, e3 === tt ? (Mt(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.sym_next && (Mt(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
            })(i2, e2) : Rt[i2.level].func(i2, e2);
            if (3 !== r3 && 4 !== r3 || (i2.status = yt), 1 === r3 || 3 === r3) return 0 === t2.avail_out && (i2.last_flush = -1), it;
            if (2 === r3 && (e2 === $ ? K(i2) : e2 !== et && (Y(i2, 0, 0, false), e2 === J && (wt(i2.head), 0 === i2.lookahead && (i2.strstart = 0, i2.block_start = 0, i2.insert = 0))), St(t2), 0 === t2.avail_out)) return i2.last_flush = -1, it;
          }
          return e2 !== tt ? it : i2.wrap <= 0 ? rt : (2 === i2.wrap ? (zt(i2, 255 & t2.adler), zt(i2, t2.adler >> 8 & 255), zt(i2, t2.adler >> 16 & 255), zt(i2, t2.adler >> 24 & 255), zt(i2, 255 & t2.total_in), zt(i2, t2.total_in >> 8 & 255), zt(i2, t2.total_in >> 16 & 255), zt(i2, t2.total_in >> 24 & 255)) : (Tt(i2, t2.adler >>> 16), Tt(i2, 65535 & t2.adler)), St(t2), i2.wrap > 0 && (i2.wrap = -i2.wrap), 0 !== i2.pending ? it : rt);
        }, deflateEnd: (t2) => {
          if (Ut(t2)) return st;
          const e2 = t2.state.status;
          return t2.state = null, e2 === _t ? bt(t2, nt) : it;
        }, deflateSetDictionary: (t2, e2) => {
          let i2 = e2.length;
          if (Ut(t2)) return st;
          const r2 = t2.state, s2 = r2.wrap;
          if (2 === s2 || 1 === s2 && r2.status !== vt || r2.lookahead) return st;
          if (1 === s2 && (t2.adler = G(t2.adler, e2, i2, 0)), r2.wrap = 0, i2 >= r2.w_size) {
            0 === s2 && (wt(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0);
            let t3 = new Uint8Array(r2.w_size);
            t3.set(e2.subarray(i2 - r2.w_size, i2), 0), e2 = t3, i2 = r2.w_size;
          }
          const n2 = t2.avail_in, a2 = t2.next_in, o2 = t2.input;
          for (t2.avail_in = i2, t2.next_in = 0, t2.input = e2, Ft(r2); r2.lookahead >= 3; ) {
            let t3 = r2.strstart, e3 = r2.lookahead - 2;
            do {
              r2.ins_h = Ct(r2, r2.ins_h, r2.window[t3 + 3 - 1]), r2.prev[t3 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = t3, t3++;
            } while (--e3);
            r2.strstart = t3, r2.lookahead = 2, Ft(r2);
          }
          return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = 2, r2.match_available = 0, t2.next_in = a2, t2.input = o2, t2.avail_in = n2, r2.wrap = s2, it;
        }, deflateInfo: "pako deflate (from Nodeca project)" };
        const jt = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
        var Ht = function(t2) {
          const e2 = Array.prototype.slice.call(arguments, 1);
          for (; e2.length; ) {
            const i2 = e2.shift();
            if (i2) {
              if ("object" != typeof i2) throw new TypeError(i2 + "must be non-object");
              for (const e3 in i2) jt(i2, e3) && (t2[e3] = i2[e3]);
            }
          }
          return t2;
        }, Wt = (t2) => {
          let e2 = 0;
          for (let i3 = 0, r2 = t2.length; i3 < r2; i3++) e2 += t2[i3].length;
          const i2 = new Uint8Array(e2);
          for (let e3 = 0, r2 = 0, s2 = t2.length; e3 < s2; e3++) {
            let s3 = t2[e3];
            i2.set(s3, r2), r2 += s3.length;
          }
          return i2;
        };
        let qt = true;
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (t2) {
          qt = false;
        }
        const Yt = new Uint8Array(256);
        for (let t2 = 0; t2 < 256; t2++) Yt[t2] = t2 >= 252 ? 6 : t2 >= 248 ? 5 : t2 >= 240 ? 4 : t2 >= 224 ? 3 : t2 >= 192 ? 2 : 1;
        Yt[254] = Yt[254] = 1;
        var Zt = (t2) => {
          if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(t2);
          let e2, i2, r2, s2, n2, a2 = t2.length, o2 = 0;
          for (s2 = 0; s2 < a2; s2++) i2 = t2.charCodeAt(s2), 55296 == (64512 & i2) && s2 + 1 < a2 && (r2 = t2.charCodeAt(s2 + 1), 56320 == (64512 & r2) && (i2 = 65536 + (i2 - 55296 << 10) + (r2 - 56320), s2++)), o2 += i2 < 128 ? 1 : i2 < 2048 ? 2 : i2 < 65536 ? 3 : 4;
          for (e2 = new Uint8Array(o2), n2 = 0, s2 = 0; n2 < o2; s2++) i2 = t2.charCodeAt(s2), 55296 == (64512 & i2) && s2 + 1 < a2 && (r2 = t2.charCodeAt(s2 + 1), 56320 == (64512 & r2) && (i2 = 65536 + (i2 - 55296 << 10) + (r2 - 56320), s2++)), i2 < 128 ? e2[n2++] = i2 : i2 < 2048 ? (e2[n2++] = 192 | i2 >>> 6, e2[n2++] = 128 | 63 & i2) : i2 < 65536 ? (e2[n2++] = 224 | i2 >>> 12, e2[n2++] = 128 | i2 >>> 6 & 63, e2[n2++] = 128 | 63 & i2) : (e2[n2++] = 240 | i2 >>> 18, e2[n2++] = 128 | i2 >>> 12 & 63, e2[n2++] = 128 | i2 >>> 6 & 63, e2[n2++] = 128 | 63 & i2);
          return e2;
        }, Xt = (t2, e2) => {
          const i2 = e2 || t2.length;
          if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(t2.subarray(0, e2));
          let r2, s2;
          const n2 = new Array(2 * i2);
          for (s2 = 0, r2 = 0; r2 < i2; ) {
            let e3 = t2[r2++];
            if (e3 < 128) {
              n2[s2++] = e3;
              continue;
            }
            let a2 = Yt[e3];
            if (a2 > 4) n2[s2++] = 65533, r2 += a2 - 1;
            else {
              for (e3 &= 2 === a2 ? 31 : 3 === a2 ? 15 : 7; a2 > 1 && r2 < i2; ) e3 = e3 << 6 | 63 & t2[r2++], a2--;
              a2 > 1 ? n2[s2++] = 65533 : e3 < 65536 ? n2[s2++] = e3 : (e3 -= 65536, n2[s2++] = 55296 | e3 >> 10 & 1023, n2[s2++] = 56320 | 1023 & e3);
            }
          }
          return ((t3, e3) => {
            if (e3 < 65534 && t3.subarray && qt) return String.fromCharCode.apply(null, t3.length === e3 ? t3 : t3.subarray(0, e3));
            let i3 = "";
            for (let r3 = 0; r3 < e3; r3++) i3 += String.fromCharCode(t3[r3]);
            return i3;
          })(n2, s2);
        }, Kt = (t2, e2) => {
          (e2 = e2 || t2.length) > t2.length && (e2 = t2.length);
          let i2 = e2 - 1;
          for (; i2 >= 0 && 128 == (192 & t2[i2]); ) i2--;
          return i2 < 0 || 0 === i2 ? e2 : i2 + Yt[t2[i2]] > e2 ? i2 : e2;
        };
        var Qt = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
        const $t = Object.prototype.toString, { Z_NO_FLUSH: Jt, Z_SYNC_FLUSH: te, Z_FULL_FLUSH: ee, Z_FINISH: ie, Z_OK: re, Z_STREAM_END: se, Z_DEFAULT_COMPRESSION: ne, Z_DEFAULT_STRATEGY: ae, Z_DEFLATED: oe } = W;
        function le(t2) {
          this.options = Ht({ level: ne, method: oe, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: ae }, t2 || {});
          let e2 = this.options;
          e2.raw && e2.windowBits > 0 ? e2.windowBits = -e2.windowBits : e2.gzip && e2.windowBits > 0 && e2.windowBits < 16 && (e2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Qt(), this.strm.avail_out = 0;
          let i2 = Vt.deflateInit2(this.strm, e2.level, e2.method, e2.windowBits, e2.memLevel, e2.strategy);
          if (i2 !== re) throw new Error(H[i2]);
          if (e2.header && Vt.deflateSetHeader(this.strm, e2.header), e2.dictionary) {
            let t3;
            if (t3 = "string" == typeof e2.dictionary ? Zt(e2.dictionary) : "[object ArrayBuffer]" === $t.call(e2.dictionary) ? new Uint8Array(e2.dictionary) : e2.dictionary, i2 = Vt.deflateSetDictionary(this.strm, t3), i2 !== re) throw new Error(H[i2]);
            this._dict_set = true;
          }
        }
        function he(t2, e2) {
          const i2 = new le(e2);
          if (i2.push(t2, true), i2.err) throw i2.msg || H[i2.err];
          return i2.result;
        }
        le.prototype.push = function(t2, e2) {
          const i2 = this.strm, r2 = this.options.chunkSize;
          let s2, n2;
          if (this.ended) return false;
          for (n2 = e2 === ~~e2 ? e2 : true === e2 ? ie : Jt, "string" == typeof t2 ? i2.input = Zt(t2) : "[object ArrayBuffer]" === $t.call(t2) ? i2.input = new Uint8Array(t2) : i2.input = t2, i2.next_in = 0, i2.avail_in = i2.input.length; ; ) if (0 === i2.avail_out && (i2.output = new Uint8Array(r2), i2.next_out = 0, i2.avail_out = r2), (n2 === te || n2 === ee) && i2.avail_out <= 6) this.onData(i2.output.subarray(0, i2.next_out)), i2.avail_out = 0;
          else {
            if (s2 = Vt.deflate(i2, n2), s2 === se) return i2.next_out > 0 && this.onData(i2.output.subarray(0, i2.next_out)), s2 = Vt.deflateEnd(this.strm), this.onEnd(s2), this.ended = true, s2 === re;
            if (0 !== i2.avail_out) {
              if (n2 > 0 && i2.next_out > 0) this.onData(i2.output.subarray(0, i2.next_out)), i2.avail_out = 0;
              else if (0 === i2.avail_in) break;
            } else this.onData(i2.output);
          }
          return true;
        }, le.prototype.onData = function(t2) {
          this.chunks.push(t2);
        }, le.prototype.onEnd = function(t2) {
          t2 === re && (this.result = Wt(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
        };
        var ce = { Deflate: le, deflate: he, deflateRaw: function(t2, e2) {
          return (e2 = e2 || {}).raw = true, he(t2, e2);
        }, gzip: function(t2, e2) {
          return (e2 = e2 || {}).gzip = true, he(t2, e2);
        }, constants: W };
        const de = 16209;
        var ue = function(t2, e2) {
          let i2, r2, s2, n2, a2, o2, l2, h2, c2, d2, u2, f2, p2, g2, m2, v2, _2, y2, b2, x2, w2, A2, C2, S4;
          const M2 = t2.state;
          i2 = t2.next_in, C2 = t2.input, r2 = i2 + (t2.avail_in - 5), s2 = t2.next_out, S4 = t2.output, n2 = s2 - (e2 - t2.avail_out), a2 = s2 + (t2.avail_out - 257), o2 = M2.dmax, l2 = M2.wsize, h2 = M2.whave, c2 = M2.wnext, d2 = M2.window, u2 = M2.hold, f2 = M2.bits, p2 = M2.lencode, g2 = M2.distcode, m2 = (1 << M2.lenbits) - 1, v2 = (1 << M2.distbits) - 1;
          t: do {
            f2 < 15 && (u2 += C2[i2++] << f2, f2 += 8, u2 += C2[i2++] << f2, f2 += 8), _2 = p2[u2 & m2];
            e: for (; ; ) {
              if (y2 = _2 >>> 24, u2 >>>= y2, f2 -= y2, y2 = _2 >>> 16 & 255, 0 === y2) S4[s2++] = 65535 & _2;
              else {
                if (!(16 & y2)) {
                  if (64 & y2) {
                    if (32 & y2) {
                      M2.mode = 16191;
                      break t;
                    }
                    t2.msg = "invalid literal/length code", M2.mode = de;
                    break t;
                  }
                  _2 = p2[(65535 & _2) + (u2 & (1 << y2) - 1)];
                  continue e;
                }
                for (b2 = 65535 & _2, y2 &= 15, y2 && (f2 < y2 && (u2 += C2[i2++] << f2, f2 += 8), b2 += u2 & (1 << y2) - 1, u2 >>>= y2, f2 -= y2), f2 < 15 && (u2 += C2[i2++] << f2, f2 += 8, u2 += C2[i2++] << f2, f2 += 8), _2 = g2[u2 & v2]; ; ) {
                  if (y2 = _2 >>> 24, u2 >>>= y2, f2 -= y2, y2 = _2 >>> 16 & 255, 16 & y2) {
                    if (x2 = 65535 & _2, y2 &= 15, f2 < y2 && (u2 += C2[i2++] << f2, f2 += 8, f2 < y2 && (u2 += C2[i2++] << f2, f2 += 8)), x2 += u2 & (1 << y2) - 1, x2 > o2) {
                      t2.msg = "invalid distance too far back", M2.mode = de;
                      break t;
                    }
                    if (u2 >>>= y2, f2 -= y2, y2 = s2 - n2, x2 > y2) {
                      if (y2 = x2 - y2, y2 > h2 && M2.sane) {
                        t2.msg = "invalid distance too far back", M2.mode = de;
                        break t;
                      }
                      if (w2 = 0, A2 = d2, 0 === c2) {
                        if (w2 += l2 - y2, y2 < b2) {
                          b2 -= y2;
                          do {
                            S4[s2++] = d2[w2++];
                          } while (--y2);
                          w2 = s2 - x2, A2 = S4;
                        }
                      } else if (c2 < y2) {
                        if (w2 += l2 + c2 - y2, y2 -= c2, y2 < b2) {
                          b2 -= y2;
                          do {
                            S4[s2++] = d2[w2++];
                          } while (--y2);
                          if (w2 = 0, c2 < b2) {
                            y2 = c2, b2 -= y2;
                            do {
                              S4[s2++] = d2[w2++];
                            } while (--y2);
                            w2 = s2 - x2, A2 = S4;
                          }
                        }
                      } else if (w2 += c2 - y2, y2 < b2) {
                        b2 -= y2;
                        do {
                          S4[s2++] = d2[w2++];
                        } while (--y2);
                        w2 = s2 - x2, A2 = S4;
                      }
                      for (; b2 > 2; ) S4[s2++] = A2[w2++], S4[s2++] = A2[w2++], S4[s2++] = A2[w2++], b2 -= 3;
                      b2 && (S4[s2++] = A2[w2++], b2 > 1 && (S4[s2++] = A2[w2++]));
                    } else {
                      w2 = s2 - x2;
                      do {
                        S4[s2++] = S4[w2++], S4[s2++] = S4[w2++], S4[s2++] = S4[w2++], b2 -= 3;
                      } while (b2 > 2);
                      b2 && (S4[s2++] = S4[w2++], b2 > 1 && (S4[s2++] = S4[w2++]));
                    }
                    break;
                  }
                  if (64 & y2) {
                    t2.msg = "invalid distance code", M2.mode = de;
                    break t;
                  }
                  _2 = g2[(65535 & _2) + (u2 & (1 << y2) - 1)];
                }
              }
              break;
            }
          } while (i2 < r2 && s2 < a2);
          b2 = f2 >> 3, i2 -= b2, f2 -= b2 << 3, u2 &= (1 << f2) - 1, t2.next_in = i2, t2.next_out = s2, t2.avail_in = i2 < r2 ? r2 - i2 + 5 : 5 - (i2 - r2), t2.avail_out = s2 < a2 ? a2 - s2 + 257 : 257 - (s2 - a2), M2.hold = u2, M2.bits = f2;
        };
        const fe = 15, pe = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]), ge = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]), me = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]), ve = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
        var _e = (t2, e2, i2, r2, s2, n2, a2, o2) => {
          const l2 = o2.bits;
          let h2, c2, d2, u2, f2, p2, g2 = 0, m2 = 0, v2 = 0, _2 = 0, y2 = 0, b2 = 0, x2 = 0, w2 = 0, A2 = 0, C2 = 0, S4 = null;
          const M2 = new Uint16Array(16), z2 = new Uint16Array(16);
          let T2, E2, L2, F2 = null;
          for (g2 = 0; g2 <= fe; g2++) M2[g2] = 0;
          for (m2 = 0; m2 < r2; m2++) M2[e2[i2 + m2]]++;
          for (y2 = l2, _2 = fe; _2 >= 1 && 0 === M2[_2]; _2--) ;
          if (y2 > _2 && (y2 = _2), 0 === _2) return s2[n2++] = 20971520, s2[n2++] = 20971520, o2.bits = 1, 0;
          for (v2 = 1; v2 < _2 && 0 === M2[v2]; v2++) ;
          for (y2 < v2 && (y2 = v2), w2 = 1, g2 = 1; g2 <= fe; g2++) if (w2 <<= 1, w2 -= M2[g2], w2 < 0) return -1;
          if (w2 > 0 && (0 === t2 || 1 !== _2)) return -1;
          for (z2[1] = 0, g2 = 1; g2 < fe; g2++) z2[g2 + 1] = z2[g2] + M2[g2];
          for (m2 = 0; m2 < r2; m2++) 0 !== e2[i2 + m2] && (a2[z2[e2[i2 + m2]]++] = m2);
          if (0 === t2 ? (S4 = F2 = a2, p2 = 20) : 1 === t2 ? (S4 = pe, F2 = ge, p2 = 257) : (S4 = me, F2 = ve, p2 = 0), C2 = 0, m2 = 0, g2 = v2, f2 = n2, b2 = y2, x2 = 0, d2 = -1, A2 = 1 << y2, u2 = A2 - 1, 1 === t2 && A2 > 852 || 2 === t2 && A2 > 592) return 1;
          for (; ; ) {
            T2 = g2 - x2, a2[m2] + 1 < p2 ? (E2 = 0, L2 = a2[m2]) : a2[m2] >= p2 ? (E2 = F2[a2[m2] - p2], L2 = S4[a2[m2] - p2]) : (E2 = 96, L2 = 0), h2 = 1 << g2 - x2, c2 = 1 << b2, v2 = c2;
            do {
              c2 -= h2, s2[f2 + (C2 >> x2) + c2] = T2 << 24 | E2 << 16 | L2;
            } while (0 !== c2);
            for (h2 = 1 << g2 - 1; C2 & h2; ) h2 >>= 1;
            if (0 !== h2 ? (C2 &= h2 - 1, C2 += h2) : C2 = 0, m2++, 0 == --M2[g2]) {
              if (g2 === _2) break;
              g2 = e2[i2 + a2[m2]];
            }
            if (g2 > y2 && (C2 & u2) !== d2) {
              for (0 === x2 && (x2 = y2), f2 += v2, b2 = g2 - x2, w2 = 1 << b2; b2 + x2 < _2 && (w2 -= M2[b2 + x2], !(w2 <= 0)); ) b2++, w2 <<= 1;
              if (A2 += 1 << b2, 1 === t2 && A2 > 852 || 2 === t2 && A2 > 592) return 1;
              d2 = C2 & u2, s2[d2] = y2 << 24 | b2 << 16 | f2 - n2;
            }
          }
          return 0 !== C2 && (s2[f2 + C2] = g2 - x2 << 24 | 64 << 16), o2.bits = y2, 0;
        };
        const { Z_FINISH: ye, Z_BLOCK: be, Z_TREES: xe, Z_OK: we, Z_STREAM_END: Ae, Z_NEED_DICT: Ce, Z_STREAM_ERROR: Se, Z_DATA_ERROR: Me, Z_MEM_ERROR: ze, Z_BUF_ERROR: Te, Z_DEFLATED: Ee } = W, Le = 16180, Fe = 16190, Ie = 16191, Oe = 16192, De = 16194, ke = 16199, Re = 16200, Pe = 16206, Ue = 16209, Be = (t2) => (t2 >>> 24 & 255) + (t2 >>> 8 & 65280) + ((65280 & t2) << 8) + ((255 & t2) << 24);
        function Ne() {
          this.strm = null, this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        const Ge = (t2) => {
          if (!t2) return 1;
          const e2 = t2.state;
          return !e2 || e2.strm !== t2 || e2.mode < Le || e2.mode > 16211 ? 1 : 0;
        }, Ve = (t2) => {
          if (Ge(t2)) return Se;
          const e2 = t2.state;
          return t2.total_in = t2.total_out = e2.total = 0, t2.msg = "", e2.wrap && (t2.adler = 1 & e2.wrap), e2.mode = Le, e2.last = 0, e2.havedict = 0, e2.flags = -1, e2.dmax = 32768, e2.head = null, e2.hold = 0, e2.bits = 0, e2.lencode = e2.lendyn = new Int32Array(852), e2.distcode = e2.distdyn = new Int32Array(592), e2.sane = 1, e2.back = -1, we;
        }, je = (t2) => {
          if (Ge(t2)) return Se;
          const e2 = t2.state;
          return e2.wsize = 0, e2.whave = 0, e2.wnext = 0, Ve(t2);
        }, He = (t2, e2) => {
          let i2;
          if (Ge(t2)) return Se;
          const r2 = t2.state;
          return e2 < 0 ? (i2 = 0, e2 = -e2) : (i2 = 5 + (e2 >> 4), e2 < 48 && (e2 &= 15)), e2 && (e2 < 8 || e2 > 15) ? Se : (null !== r2.window && r2.wbits !== e2 && (r2.window = null), r2.wrap = i2, r2.wbits = e2, je(t2));
        }, We = (t2, e2) => {
          if (!t2) return Se;
          const i2 = new Ne();
          t2.state = i2, i2.strm = t2, i2.window = null, i2.mode = Le;
          const r2 = He(t2, e2);
          return r2 !== we && (t2.state = null), r2;
        };
        let qe, Ye, Ze = true;
        const Xe = (t2) => {
          if (Ze) {
            qe = new Int32Array(512), Ye = new Int32Array(32);
            let e2 = 0;
            for (; e2 < 144; ) t2.lens[e2++] = 8;
            for (; e2 < 256; ) t2.lens[e2++] = 9;
            for (; e2 < 280; ) t2.lens[e2++] = 7;
            for (; e2 < 288; ) t2.lens[e2++] = 8;
            for (_e(1, t2.lens, 0, 288, qe, 0, t2.work, { bits: 9 }), e2 = 0; e2 < 32; ) t2.lens[e2++] = 5;
            _e(2, t2.lens, 0, 32, Ye, 0, t2.work, { bits: 5 }), Ze = false;
          }
          t2.lencode = qe, t2.lenbits = 9, t2.distcode = Ye, t2.distbits = 5;
        }, Ke = (t2, e2, i2, r2) => {
          let s2;
          const n2 = t2.state;
          return null === n2.window && (n2.wsize = 1 << n2.wbits, n2.wnext = 0, n2.whave = 0, n2.window = new Uint8Array(n2.wsize)), r2 >= n2.wsize ? (n2.window.set(e2.subarray(i2 - n2.wsize, i2), 0), n2.wnext = 0, n2.whave = n2.wsize) : (s2 = n2.wsize - n2.wnext, s2 > r2 && (s2 = r2), n2.window.set(e2.subarray(i2 - r2, i2 - r2 + s2), n2.wnext), (r2 -= s2) ? (n2.window.set(e2.subarray(i2 - r2, i2), 0), n2.wnext = r2, n2.whave = n2.wsize) : (n2.wnext += s2, n2.wnext === n2.wsize && (n2.wnext = 0), n2.whave < n2.wsize && (n2.whave += s2))), 0;
        };
        var Qe = { inflateReset: je, inflateReset2: He, inflateResetKeep: Ve, inflateInit: (t2) => We(t2, 15), inflateInit2: We, inflate: (t2, e2) => {
          let i2, r2, s2, n2, a2, o2, l2, h2, c2, d2, u2, f2, p2, g2, m2, v2, _2, y2, b2, x2, w2, A2, C2 = 0;
          const S4 = new Uint8Array(4);
          let M2, z2;
          const T2 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          if (Ge(t2) || !t2.output || !t2.input && 0 !== t2.avail_in) return Se;
          i2 = t2.state, i2.mode === Ie && (i2.mode = Oe), a2 = t2.next_out, s2 = t2.output, l2 = t2.avail_out, n2 = t2.next_in, r2 = t2.input, o2 = t2.avail_in, h2 = i2.hold, c2 = i2.bits, d2 = o2, u2 = l2, A2 = we;
          t: for (; ; ) switch (i2.mode) {
            case Le:
              if (0 === i2.wrap) {
                i2.mode = Oe;
                break;
              }
              for (; c2 < 16; ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              if (2 & i2.wrap && 35615 === h2) {
                0 === i2.wbits && (i2.wbits = 15), i2.check = 0, S4[0] = 255 & h2, S4[1] = h2 >>> 8 & 255, i2.check = j(i2.check, S4, 2, 0), h2 = 0, c2 = 0, i2.mode = 16181;
                break;
              }
              if (i2.head && (i2.head.done = false), !(1 & i2.wrap) || (((255 & h2) << 8) + (h2 >> 8)) % 31) {
                t2.msg = "incorrect header check", i2.mode = Ue;
                break;
              }
              if ((15 & h2) !== Ee) {
                t2.msg = "unknown compression method", i2.mode = Ue;
                break;
              }
              if (h2 >>>= 4, c2 -= 4, w2 = 8 + (15 & h2), 0 === i2.wbits && (i2.wbits = w2), w2 > 15 || w2 > i2.wbits) {
                t2.msg = "invalid window size", i2.mode = Ue;
                break;
              }
              i2.dmax = 1 << i2.wbits, i2.flags = 0, t2.adler = i2.check = 1, i2.mode = 512 & h2 ? 16189 : Ie, h2 = 0, c2 = 0;
              break;
            case 16181:
              for (; c2 < 16; ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              if (i2.flags = h2, (255 & i2.flags) !== Ee) {
                t2.msg = "unknown compression method", i2.mode = Ue;
                break;
              }
              if (57344 & i2.flags) {
                t2.msg = "unknown header flags set", i2.mode = Ue;
                break;
              }
              i2.head && (i2.head.text = h2 >> 8 & 1), 512 & i2.flags && 4 & i2.wrap && (S4[0] = 255 & h2, S4[1] = h2 >>> 8 & 255, i2.check = j(i2.check, S4, 2, 0)), h2 = 0, c2 = 0, i2.mode = 16182;
            case 16182:
              for (; c2 < 32; ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              i2.head && (i2.head.time = h2), 512 & i2.flags && 4 & i2.wrap && (S4[0] = 255 & h2, S4[1] = h2 >>> 8 & 255, S4[2] = h2 >>> 16 & 255, S4[3] = h2 >>> 24 & 255, i2.check = j(i2.check, S4, 4, 0)), h2 = 0, c2 = 0, i2.mode = 16183;
            case 16183:
              for (; c2 < 16; ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              i2.head && (i2.head.xflags = 255 & h2, i2.head.os = h2 >> 8), 512 & i2.flags && 4 & i2.wrap && (S4[0] = 255 & h2, S4[1] = h2 >>> 8 & 255, i2.check = j(i2.check, S4, 2, 0)), h2 = 0, c2 = 0, i2.mode = 16184;
            case 16184:
              if (1024 & i2.flags) {
                for (; c2 < 16; ) {
                  if (0 === o2) break t;
                  o2--, h2 += r2[n2++] << c2, c2 += 8;
                }
                i2.length = h2, i2.head && (i2.head.extra_len = h2), 512 & i2.flags && 4 & i2.wrap && (S4[0] = 255 & h2, S4[1] = h2 >>> 8 & 255, i2.check = j(i2.check, S4, 2, 0)), h2 = 0, c2 = 0;
              } else i2.head && (i2.head.extra = null);
              i2.mode = 16185;
            case 16185:
              if (1024 & i2.flags && (f2 = i2.length, f2 > o2 && (f2 = o2), f2 && (i2.head && (w2 = i2.head.extra_len - i2.length, i2.head.extra || (i2.head.extra = new Uint8Array(i2.head.extra_len)), i2.head.extra.set(r2.subarray(n2, n2 + f2), w2)), 512 & i2.flags && 4 & i2.wrap && (i2.check = j(i2.check, r2, f2, n2)), o2 -= f2, n2 += f2, i2.length -= f2), i2.length)) break t;
              i2.length = 0, i2.mode = 16186;
            case 16186:
              if (2048 & i2.flags) {
                if (0 === o2) break t;
                f2 = 0;
                do {
                  w2 = r2[n2 + f2++], i2.head && w2 && i2.length < 65536 && (i2.head.name += String.fromCharCode(w2));
                } while (w2 && f2 < o2);
                if (512 & i2.flags && 4 & i2.wrap && (i2.check = j(i2.check, r2, f2, n2)), o2 -= f2, n2 += f2, w2) break t;
              } else i2.head && (i2.head.name = null);
              i2.length = 0, i2.mode = 16187;
            case 16187:
              if (4096 & i2.flags) {
                if (0 === o2) break t;
                f2 = 0;
                do {
                  w2 = r2[n2 + f2++], i2.head && w2 && i2.length < 65536 && (i2.head.comment += String.fromCharCode(w2));
                } while (w2 && f2 < o2);
                if (512 & i2.flags && 4 & i2.wrap && (i2.check = j(i2.check, r2, f2, n2)), o2 -= f2, n2 += f2, w2) break t;
              } else i2.head && (i2.head.comment = null);
              i2.mode = 16188;
            case 16188:
              if (512 & i2.flags) {
                for (; c2 < 16; ) {
                  if (0 === o2) break t;
                  o2--, h2 += r2[n2++] << c2, c2 += 8;
                }
                if (4 & i2.wrap && h2 !== (65535 & i2.check)) {
                  t2.msg = "header crc mismatch", i2.mode = Ue;
                  break;
                }
                h2 = 0, c2 = 0;
              }
              i2.head && (i2.head.hcrc = i2.flags >> 9 & 1, i2.head.done = true), t2.adler = i2.check = 0, i2.mode = Ie;
              break;
            case 16189:
              for (; c2 < 32; ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              t2.adler = i2.check = Be(h2), h2 = 0, c2 = 0, i2.mode = Fe;
            case Fe:
              if (0 === i2.havedict) return t2.next_out = a2, t2.avail_out = l2, t2.next_in = n2, t2.avail_in = o2, i2.hold = h2, i2.bits = c2, Ce;
              t2.adler = i2.check = 1, i2.mode = Ie;
            case Ie:
              if (e2 === be || e2 === xe) break t;
            case Oe:
              if (i2.last) {
                h2 >>>= 7 & c2, c2 -= 7 & c2, i2.mode = Pe;
                break;
              }
              for (; c2 < 3; ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              switch (i2.last = 1 & h2, h2 >>>= 1, c2 -= 1, 3 & h2) {
                case 0:
                  i2.mode = 16193;
                  break;
                case 1:
                  if (Xe(i2), i2.mode = ke, e2 === xe) {
                    h2 >>>= 2, c2 -= 2;
                    break t;
                  }
                  break;
                case 2:
                  i2.mode = 16196;
                  break;
                case 3:
                  t2.msg = "invalid block type", i2.mode = Ue;
              }
              h2 >>>= 2, c2 -= 2;
              break;
            case 16193:
              for (h2 >>>= 7 & c2, c2 -= 7 & c2; c2 < 32; ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              if ((65535 & h2) != (h2 >>> 16 ^ 65535)) {
                t2.msg = "invalid stored block lengths", i2.mode = Ue;
                break;
              }
              if (i2.length = 65535 & h2, h2 = 0, c2 = 0, i2.mode = De, e2 === xe) break t;
            case De:
              i2.mode = 16195;
            case 16195:
              if (f2 = i2.length, f2) {
                if (f2 > o2 && (f2 = o2), f2 > l2 && (f2 = l2), 0 === f2) break t;
                s2.set(r2.subarray(n2, n2 + f2), a2), o2 -= f2, n2 += f2, l2 -= f2, a2 += f2, i2.length -= f2;
                break;
              }
              i2.mode = Ie;
              break;
            case 16196:
              for (; c2 < 14; ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              if (i2.nlen = 257 + (31 & h2), h2 >>>= 5, c2 -= 5, i2.ndist = 1 + (31 & h2), h2 >>>= 5, c2 -= 5, i2.ncode = 4 + (15 & h2), h2 >>>= 4, c2 -= 4, i2.nlen > 286 || i2.ndist > 30) {
                t2.msg = "too many length or distance symbols", i2.mode = Ue;
                break;
              }
              i2.have = 0, i2.mode = 16197;
            case 16197:
              for (; i2.have < i2.ncode; ) {
                for (; c2 < 3; ) {
                  if (0 === o2) break t;
                  o2--, h2 += r2[n2++] << c2, c2 += 8;
                }
                i2.lens[T2[i2.have++]] = 7 & h2, h2 >>>= 3, c2 -= 3;
              }
              for (; i2.have < 19; ) i2.lens[T2[i2.have++]] = 0;
              if (i2.lencode = i2.lendyn, i2.lenbits = 7, M2 = { bits: i2.lenbits }, A2 = _e(0, i2.lens, 0, 19, i2.lencode, 0, i2.work, M2), i2.lenbits = M2.bits, A2) {
                t2.msg = "invalid code lengths set", i2.mode = Ue;
                break;
              }
              i2.have = 0, i2.mode = 16198;
            case 16198:
              for (; i2.have < i2.nlen + i2.ndist; ) {
                for (; C2 = i2.lencode[h2 & (1 << i2.lenbits) - 1], m2 = C2 >>> 24, v2 = C2 >>> 16 & 255, _2 = 65535 & C2, !(m2 <= c2); ) {
                  if (0 === o2) break t;
                  o2--, h2 += r2[n2++] << c2, c2 += 8;
                }
                if (_2 < 16) h2 >>>= m2, c2 -= m2, i2.lens[i2.have++] = _2;
                else {
                  if (16 === _2) {
                    for (z2 = m2 + 2; c2 < z2; ) {
                      if (0 === o2) break t;
                      o2--, h2 += r2[n2++] << c2, c2 += 8;
                    }
                    if (h2 >>>= m2, c2 -= m2, 0 === i2.have) {
                      t2.msg = "invalid bit length repeat", i2.mode = Ue;
                      break;
                    }
                    w2 = i2.lens[i2.have - 1], f2 = 3 + (3 & h2), h2 >>>= 2, c2 -= 2;
                  } else if (17 === _2) {
                    for (z2 = m2 + 3; c2 < z2; ) {
                      if (0 === o2) break t;
                      o2--, h2 += r2[n2++] << c2, c2 += 8;
                    }
                    h2 >>>= m2, c2 -= m2, w2 = 0, f2 = 3 + (7 & h2), h2 >>>= 3, c2 -= 3;
                  } else {
                    for (z2 = m2 + 7; c2 < z2; ) {
                      if (0 === o2) break t;
                      o2--, h2 += r2[n2++] << c2, c2 += 8;
                    }
                    h2 >>>= m2, c2 -= m2, w2 = 0, f2 = 11 + (127 & h2), h2 >>>= 7, c2 -= 7;
                  }
                  if (i2.have + f2 > i2.nlen + i2.ndist) {
                    t2.msg = "invalid bit length repeat", i2.mode = Ue;
                    break;
                  }
                  for (; f2--; ) i2.lens[i2.have++] = w2;
                }
              }
              if (i2.mode === Ue) break;
              if (0 === i2.lens[256]) {
                t2.msg = "invalid code -- missing end-of-block", i2.mode = Ue;
                break;
              }
              if (i2.lenbits = 9, M2 = { bits: i2.lenbits }, A2 = _e(1, i2.lens, 0, i2.nlen, i2.lencode, 0, i2.work, M2), i2.lenbits = M2.bits, A2) {
                t2.msg = "invalid literal/lengths set", i2.mode = Ue;
                break;
              }
              if (i2.distbits = 6, i2.distcode = i2.distdyn, M2 = { bits: i2.distbits }, A2 = _e(2, i2.lens, i2.nlen, i2.ndist, i2.distcode, 0, i2.work, M2), i2.distbits = M2.bits, A2) {
                t2.msg = "invalid distances set", i2.mode = Ue;
                break;
              }
              if (i2.mode = ke, e2 === xe) break t;
            case ke:
              i2.mode = Re;
            case Re:
              if (o2 >= 6 && l2 >= 258) {
                t2.next_out = a2, t2.avail_out = l2, t2.next_in = n2, t2.avail_in = o2, i2.hold = h2, i2.bits = c2, ue(t2, u2), a2 = t2.next_out, s2 = t2.output, l2 = t2.avail_out, n2 = t2.next_in, r2 = t2.input, o2 = t2.avail_in, h2 = i2.hold, c2 = i2.bits, i2.mode === Ie && (i2.back = -1);
                break;
              }
              for (i2.back = 0; C2 = i2.lencode[h2 & (1 << i2.lenbits) - 1], m2 = C2 >>> 24, v2 = C2 >>> 16 & 255, _2 = 65535 & C2, !(m2 <= c2); ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              if (v2 && !(240 & v2)) {
                for (y2 = m2, b2 = v2, x2 = _2; C2 = i2.lencode[x2 + ((h2 & (1 << y2 + b2) - 1) >> y2)], m2 = C2 >>> 24, v2 = C2 >>> 16 & 255, _2 = 65535 & C2, !(y2 + m2 <= c2); ) {
                  if (0 === o2) break t;
                  o2--, h2 += r2[n2++] << c2, c2 += 8;
                }
                h2 >>>= y2, c2 -= y2, i2.back += y2;
              }
              if (h2 >>>= m2, c2 -= m2, i2.back += m2, i2.length = _2, 0 === v2) {
                i2.mode = 16205;
                break;
              }
              if (32 & v2) {
                i2.back = -1, i2.mode = Ie;
                break;
              }
              if (64 & v2) {
                t2.msg = "invalid literal/length code", i2.mode = Ue;
                break;
              }
              i2.extra = 15 & v2, i2.mode = 16201;
            case 16201:
              if (i2.extra) {
                for (z2 = i2.extra; c2 < z2; ) {
                  if (0 === o2) break t;
                  o2--, h2 += r2[n2++] << c2, c2 += 8;
                }
                i2.length += h2 & (1 << i2.extra) - 1, h2 >>>= i2.extra, c2 -= i2.extra, i2.back += i2.extra;
              }
              i2.was = i2.length, i2.mode = 16202;
            case 16202:
              for (; C2 = i2.distcode[h2 & (1 << i2.distbits) - 1], m2 = C2 >>> 24, v2 = C2 >>> 16 & 255, _2 = 65535 & C2, !(m2 <= c2); ) {
                if (0 === o2) break t;
                o2--, h2 += r2[n2++] << c2, c2 += 8;
              }
              if (!(240 & v2)) {
                for (y2 = m2, b2 = v2, x2 = _2; C2 = i2.distcode[x2 + ((h2 & (1 << y2 + b2) - 1) >> y2)], m2 = C2 >>> 24, v2 = C2 >>> 16 & 255, _2 = 65535 & C2, !(y2 + m2 <= c2); ) {
                  if (0 === o2) break t;
                  o2--, h2 += r2[n2++] << c2, c2 += 8;
                }
                h2 >>>= y2, c2 -= y2, i2.back += y2;
              }
              if (h2 >>>= m2, c2 -= m2, i2.back += m2, 64 & v2) {
                t2.msg = "invalid distance code", i2.mode = Ue;
                break;
              }
              i2.offset = _2, i2.extra = 15 & v2, i2.mode = 16203;
            case 16203:
              if (i2.extra) {
                for (z2 = i2.extra; c2 < z2; ) {
                  if (0 === o2) break t;
                  o2--, h2 += r2[n2++] << c2, c2 += 8;
                }
                i2.offset += h2 & (1 << i2.extra) - 1, h2 >>>= i2.extra, c2 -= i2.extra, i2.back += i2.extra;
              }
              if (i2.offset > i2.dmax) {
                t2.msg = "invalid distance too far back", i2.mode = Ue;
                break;
              }
              i2.mode = 16204;
            case 16204:
              if (0 === l2) break t;
              if (f2 = u2 - l2, i2.offset > f2) {
                if (f2 = i2.offset - f2, f2 > i2.whave && i2.sane) {
                  t2.msg = "invalid distance too far back", i2.mode = Ue;
                  break;
                }
                f2 > i2.wnext ? (f2 -= i2.wnext, p2 = i2.wsize - f2) : p2 = i2.wnext - f2, f2 > i2.length && (f2 = i2.length), g2 = i2.window;
              } else g2 = s2, p2 = a2 - i2.offset, f2 = i2.length;
              f2 > l2 && (f2 = l2), l2 -= f2, i2.length -= f2;
              do {
                s2[a2++] = g2[p2++];
              } while (--f2);
              0 === i2.length && (i2.mode = Re);
              break;
            case 16205:
              if (0 === l2) break t;
              s2[a2++] = i2.length, l2--, i2.mode = Re;
              break;
            case Pe:
              if (i2.wrap) {
                for (; c2 < 32; ) {
                  if (0 === o2) break t;
                  o2--, h2 |= r2[n2++] << c2, c2 += 8;
                }
                if (u2 -= l2, t2.total_out += u2, i2.total += u2, 4 & i2.wrap && u2 && (t2.adler = i2.check = i2.flags ? j(i2.check, s2, u2, a2 - u2) : G(i2.check, s2, u2, a2 - u2)), u2 = l2, 4 & i2.wrap && (i2.flags ? h2 : Be(h2)) !== i2.check) {
                  t2.msg = "incorrect data check", i2.mode = Ue;
                  break;
                }
                h2 = 0, c2 = 0;
              }
              i2.mode = 16207;
            case 16207:
              if (i2.wrap && i2.flags) {
                for (; c2 < 32; ) {
                  if (0 === o2) break t;
                  o2--, h2 += r2[n2++] << c2, c2 += 8;
                }
                if (4 & i2.wrap && h2 !== (4294967295 & i2.total)) {
                  t2.msg = "incorrect length check", i2.mode = Ue;
                  break;
                }
                h2 = 0, c2 = 0;
              }
              i2.mode = 16208;
            case 16208:
              A2 = Ae;
              break t;
            case Ue:
              A2 = Me;
              break t;
            case 16210:
              return ze;
            default:
              return Se;
          }
          return t2.next_out = a2, t2.avail_out = l2, t2.next_in = n2, t2.avail_in = o2, i2.hold = h2, i2.bits = c2, (i2.wsize || u2 !== t2.avail_out && i2.mode < Ue && (i2.mode < Pe || e2 !== ye)) && Ke(t2, t2.output, t2.next_out, u2 - t2.avail_out), d2 -= t2.avail_in, u2 -= t2.avail_out, t2.total_in += d2, t2.total_out += u2, i2.total += u2, 4 & i2.wrap && u2 && (t2.adler = i2.check = i2.flags ? j(i2.check, s2, u2, t2.next_out - u2) : G(i2.check, s2, u2, t2.next_out - u2)), t2.data_type = i2.bits + (i2.last ? 64 : 0) + (i2.mode === Ie ? 128 : 0) + (i2.mode === ke || i2.mode === De ? 256 : 0), (0 === d2 && 0 === u2 || e2 === ye) && A2 === we && (A2 = Te), A2;
        }, inflateEnd: (t2) => {
          if (Ge(t2)) return Se;
          let e2 = t2.state;
          return e2.window && (e2.window = null), t2.state = null, we;
        }, inflateGetHeader: (t2, e2) => {
          if (Ge(t2)) return Se;
          const i2 = t2.state;
          return 2 & i2.wrap ? (i2.head = e2, e2.done = false, we) : Se;
        }, inflateSetDictionary: (t2, e2) => {
          const i2 = e2.length;
          let r2, s2, n2;
          return Ge(t2) ? Se : (r2 = t2.state, 0 !== r2.wrap && r2.mode !== Fe ? Se : r2.mode === Fe && (s2 = 1, s2 = G(s2, e2, i2, 0), s2 !== r2.check) ? Me : (n2 = Ke(t2, e2, i2, i2), n2 ? (r2.mode = 16210, ze) : (r2.havedict = 1, we)));
        }, inflateInfo: "pako inflate (from Nodeca project)" };
        var $e = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
        const Je = Object.prototype.toString, { Z_NO_FLUSH: ti, Z_FINISH: ei, Z_OK: ii, Z_STREAM_END: ri, Z_NEED_DICT: si, Z_STREAM_ERROR: ni, Z_DATA_ERROR: ai, Z_MEM_ERROR: oi } = W;
        function li(t2) {
          this.options = Ht({ chunkSize: 65536, windowBits: 15, to: "" }, t2 || {});
          const e2 = this.options;
          e2.raw && e2.windowBits >= 0 && e2.windowBits < 16 && (e2.windowBits = -e2.windowBits, 0 === e2.windowBits && (e2.windowBits = -15)), !(e2.windowBits >= 0 && e2.windowBits < 16) || t2 && t2.windowBits || (e2.windowBits += 32), e2.windowBits > 15 && e2.windowBits < 48 && (15 & e2.windowBits || (e2.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Qt(), this.strm.avail_out = 0;
          let i2 = Qe.inflateInit2(this.strm, e2.windowBits);
          if (i2 !== ii) throw new Error(H[i2]);
          if (this.header = new $e(), Qe.inflateGetHeader(this.strm, this.header), e2.dictionary && ("string" == typeof e2.dictionary ? e2.dictionary = Zt(e2.dictionary) : "[object ArrayBuffer]" === Je.call(e2.dictionary) && (e2.dictionary = new Uint8Array(e2.dictionary)), e2.raw && (i2 = Qe.inflateSetDictionary(this.strm, e2.dictionary), i2 !== ii))) throw new Error(H[i2]);
        }
        function hi(t2, e2) {
          const i2 = new li(e2);
          if (i2.push(t2), i2.err) throw i2.msg || H[i2.err];
          return i2.result;
        }
        li.prototype.push = function(t2, e2) {
          const i2 = this.strm, r2 = this.options.chunkSize, s2 = this.options.dictionary;
          let n2, a2, o2;
          if (this.ended) return false;
          for (a2 = e2 === ~~e2 ? e2 : true === e2 ? ei : ti, "[object ArrayBuffer]" === Je.call(t2) ? i2.input = new Uint8Array(t2) : i2.input = t2, i2.next_in = 0, i2.avail_in = i2.input.length; ; ) {
            for (0 === i2.avail_out && (i2.output = new Uint8Array(r2), i2.next_out = 0, i2.avail_out = r2), n2 = Qe.inflate(i2, a2), n2 === si && s2 && (n2 = Qe.inflateSetDictionary(i2, s2), n2 === ii ? n2 = Qe.inflate(i2, a2) : n2 === ai && (n2 = si)); i2.avail_in > 0 && n2 === ri && i2.state.wrap > 0 && 0 !== t2[i2.next_in]; ) Qe.inflateReset(i2), n2 = Qe.inflate(i2, a2);
            switch (n2) {
              case ni:
              case ai:
              case si:
              case oi:
                return this.onEnd(n2), this.ended = true, false;
            }
            if (o2 = i2.avail_out, i2.next_out && (0 === i2.avail_out || n2 === ri)) if ("string" === this.options.to) {
              let t3 = Kt(i2.output, i2.next_out), e3 = i2.next_out - t3, s3 = Xt(i2.output, t3);
              i2.next_out = e3, i2.avail_out = r2 - e3, e3 && i2.output.set(i2.output.subarray(t3, t3 + e3), 0), this.onData(s3);
            } else this.onData(i2.output.length === i2.next_out ? i2.output : i2.output.subarray(0, i2.next_out));
            if (n2 !== ii || 0 !== o2) {
              if (n2 === ri) return n2 = Qe.inflateEnd(this.strm), this.onEnd(n2), this.ended = true, true;
              if (0 === i2.avail_in) break;
            }
          }
          return true;
        }, li.prototype.onData = function(t2) {
          this.chunks.push(t2);
        }, li.prototype.onEnd = function(t2) {
          t2 === ii && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Wt(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
        };
        var ci = { Inflate: li, inflate: hi, inflateRaw: function(t2, e2) {
          return (e2 = e2 || {}).raw = true, hi(t2, e2);
        }, ungzip: hi, constants: W };
        const { Deflate: di, deflate: ui, deflateRaw: fi, gzip: pi } = ce, { Inflate: gi, inflate: mi, inflateRaw: vi, ungzip: _i } = ci;
        var yi = di, bi = ui, xi = fi, wi = pi, Ai = gi, Ci = mi, Si = vi, Mi = _i, zi = W, Ti = { Deflate: di, deflate: ui, deflateRaw: fi, gzip: pi, Inflate: gi, inflate: mi, inflateRaw: vi, ungzip: _i, constants: W };
      } }, __webpack_module_cache__ = {};
      function __webpack_require__(t) {
        var e = __webpack_module_cache__[t];
        if (void 0 !== e) return e.exports;
        var i = __webpack_module_cache__[t] = { exports: {} };
        return __webpack_modules__[t].call(i.exports, i, i.exports, __webpack_require__), i.exports;
      }
      __webpack_require__.d = (t, e) => {
        for (var i in e) __webpack_require__.o(e, i) && !__webpack_require__.o(t, i) && Object.defineProperty(t, i, { enumerable: true, get: e[i] });
      }, __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), __webpack_require__.r = (t) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: true });
      }, __webpack_require__(421), __webpack_require__(185);
      var __webpack_exports__ = __webpack_require__(307);
      return __webpack_exports__;
    })()));
  }
});

// src/client/index.ts
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var import_react2 = require("react");

// src/client/MoleculeView.tsx
var import_react = require("react");

// src/client/threeDmol.ts
var import_Dmol_min = __toESM(require_Dmol_min(), 1);
var resolved;
function isValid(candidate) {
  return candidate !== void 0 && typeof candidate.createViewer === "function";
}
function findLoaded() {
  if (typeof window === "undefined") return void 0;
  const candidates = [
    window["3Dmol"],
    window.$3Dmol,
    window._$3Dmol
  ];
  return candidates.find(isValid);
}
function load3Dmol() {
  if (isValid(resolved)) return Promise.resolve(resolved);
  if (isValid(import_Dmol_min.default)) {
    resolved = import_Dmol_min.default;
    return Promise.resolve(import_Dmol_min.default);
  }
  const preloaded = findLoaded();
  if (preloaded !== void 0) {
    resolved = preloaded;
    return Promise.resolve(preloaded);
  }
  return Promise.reject(
    new Error("3Dmol.js namespace missing from the client bundle and no usable global (3Dmol / $3Dmol / _$3Dmol) with createViewer was found")
  );
}

// src/client/MoleculeView.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
function awaitLayoutBox(el, isCancelled) {
  return new Promise((resolve, reject) => {
    let observer;
    let raf = 0;
    const settle = (err) => {
      if (raf !== 0) cancelAnimationFrame(raf);
      observer?.disconnect();
      if (err === void 0) resolve();
      else reject(err);
    };
    const check = () => {
      if (isCancelled()) {
        settle(new Error("molecule viewer unmounted before its container was laid out"));
        return true;
      }
      if (el.clientWidth > 0 && el.clientHeight > 0) {
        settle();
        return true;
      }
      return false;
    };
    if (check()) return;
    observer = new ResizeObserver(() => {
      check();
    });
    observer.observe(el);
    const tick = () => {
      if (!check()) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  });
}
function MoleculeView({ data, format, name, atomCount, initialStyle }) {
  const containerRef = (0, import_react.useRef)(null);
  const viewerRef = (0, import_react.useRef)(null);
  const [style, setStyle] = (0, import_react.useState)(initialStyle);
  const [colorMode, setColorMode] = (0, import_react.useState)({ kind: "element" });
  const [bg, setBg] = (0, import_react.useState)(DEFAULT_BG);
  const [status, setStatus] = (0, import_react.useState)("loading");
  const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const container = containerRef.current;
    if (container === null) return;
    setStatus("loading");
    let cancelled = false;
    let resizeObserver;
    void (async () => {
      try {
        const m = await load3Dmol();
        if (cancelled) return;
        await awaitLayoutBox(container, () => cancelled);
        if (cancelled) return;
        if (viewerRef.current !== null) {
          try {
            viewerRef.current.clear();
          } catch {
          }
          viewerRef.current = null;
        }
        const v = m.createViewer(container, { backgroundColor: bg, antialias: true });
        viewerRef.current = v;
        v.addModel(data, format);
        applyStyle(v, style, colorMode);
        v.zoomTo();
        v.render();
        v.zoom(1.2, 800);
        if (!cancelled) setStatus("ready");
        resizeObserver = new ResizeObserver(() => {
          if (container.clientWidth === 0 || container.clientHeight === 0) return;
          try {
            v.resize();
            v.render();
          } catch {
          }
        });
        resizeObserver.observe(container);
      } catch (e) {
        if (!cancelled) {
          setStatus("error");
          setErrorMsg(e instanceof Error ? e.message : String(e));
        }
      }
    })();
    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
    };
  }, [data, format]);
  (0, import_react.useEffect)(() => {
    const v = viewerRef.current;
    if (v === null || status !== "ready") return;
    try {
      applyStyle(v, style, colorMode);
      v.render();
    } catch {
    }
  }, [style, colorMode, status]);
  (0, import_react.useEffect)(() => {
    const v = viewerRef.current;
    if (v === null || status !== "ready") return;
    try {
      v.setBackgroundColor(bg);
      v.render();
    } catch {
    }
  }, [bg, status]);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: S.viewer, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: S.header, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: S.titleRow, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: S.title, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: S.meta, children: meta })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: S.controls, children: STYLE_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          style: btnStyle(style === o.value, busy),
          onClick: () => setStyle(o.value),
          disabled: busy,
          children: o.label
        },
        o.value
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: S.toolbar, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: S.group, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: S.groupLabel, children: "\u80CC\u666F" }),
        BG_PRESETS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            "aria-label": `\u80CC\u666F ${c}`,
            style: { ...S.swatch, background: c, ...bg.toLowerCase() === c ? S.swatchActive : {} },
            onClick: () => setBg(c),
            disabled: busy
          },
          c
        )),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            type: "color",
            value: bg,
            "aria-label": "\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",
            style: S.colorInput,
            onChange: (e) => setBg(e.target.value),
            disabled: busy
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: S.group, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: S.groupLabel, children: "\u5206\u5B50\u989C\u8272" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            style: btnStyle(colorMode.kind === "element", busy),
            onClick: () => setColorMode({ kind: "element" }),
            disabled: busy,
            children: "\u5143\u7D20"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            style: btnStyle(colorMode.kind === "spectrum", busy),
            onClick: () => setColorMode({ kind: "spectrum" }),
            disabled: busy,
            children: "\u5F69\u8679"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            style: btnStyle(colorMode.kind === "custom", busy),
            onClick: () => setColorMode({ kind: "custom", color: "#4D6BFE" }),
            disabled: busy,
            children: "\u81EA\u9009"
          }
        ),
        colorMode.kind === "custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            type: "color",
            value: colorMode.color,
            "aria-label": "\u81EA\u5B9A\u4E49\u5206\u5B50\u989C\u8272",
            style: S.colorInput,
            onChange: (e) => setColorMode({ kind: "custom", color: e.target.value }),
            disabled: busy
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { ...S.canvas, background: bg }, ref: containerRef }),
    status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: S.msg, children: "Loading 3D viewer\u2026" }),
    status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: S.err, children: [
      "Failed to render: ",
      errorMsg
    ] })
  ] });
}

// src/client/contract/types.ts
var FORMATS = ["pdb", "sdf", "mol2", "mol"];
var STYLES = ["stick", "line", "sphere", "cartoon"];
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function isMoleculeViewMeta(value) {
  if (!isRecord(value)) return false;
  return value["kind"] === "molecule-view" && typeof value["ok"] === "boolean" && FORMATS.includes(value["format"]) && typeof value["atomCount"] === "number" && STYLES.includes(value["style"]) && (value["name"] === void 0 || typeof value["name"] === "string") && (value["error"] === void 0 || typeof value["error"] === "string") && (value["data"] === void 0 || typeof value["data"] === "string") && (value["truncated"] === void 0 || value["truncated"] === true);
}

// src/client/index.ts
var inject = ["slots"];
var S2 = {
  note: { padding: "10px 12px", color: "#8888aa", fontSize: "12px", width: "100%", boxSizing: "border-box" },
  err: { padding: "10px 12px", color: "#e74c3c", fontSize: "12px", width: "100%", boxSizing: "border-box" }
};
function firstText(content) {
  for (const block of content) {
    if (block !== null && typeof block === "object" && typeof block.text === "string") {
      return block.text;
    }
  }
  return "";
}
function MoleculeToolRow({ block }) {
  if (!("kind" in block)) {
    return (0, import_react2.createElement)("div", { style: S2.note }, "Loading molecule viewer\u2026");
  }
  const meta = block.meta;
  if (isMoleculeViewMeta(meta)) {
    if (!meta.ok) {
      return (0, import_react2.createElement)("div", { style: S2.err }, `Molecule view failed: ${meta.error ?? "unknown error"}`);
    }
    if (meta.data !== void 0) {
      return (0, import_react2.createElement)(MoleculeView, {
        data: meta.data,
        format: meta.format,
        ...meta.name !== void 0 ? { name: meta.name } : {},
        atomCount: meta.atomCount,
        initialStyle: meta.style
      });
    }
    const reason = meta.truncated === true ? `molecule too large to inline (${meta.format.toUpperCase()}, ${meta.atomCount} atoms) \u2014 summary only` : `molecular content unavailable (${meta.format.toUpperCase()}, ${meta.atomCount} atoms) \u2014 summary only`;
    return (0, import_react2.createElement)("div", { style: S2.note }, reason);
  }
  const legacy = meta !== null && typeof meta === "object" ? meta : void 0;
  if (legacy !== void 0 && typeof legacy["format"] === "string" && typeof legacy["atomCount"] === "number") {
    return (0, import_react2.createElement)(
      "div",
      { style: S2.note },
      `${String(legacy["format"]).toUpperCase()} \xB7 ${legacy["atomCount"]} atoms \u2014 viewer payload unavailable (older call)`
    );
  }
  const text = firstText(block.content);
  return (0, import_react2.createElement)("div", { style: S2.note }, text !== "" ? text : "Molecule view completed.");
}
function apply(ctx) {
  ctx.slots.inject("tool.call.toolview", () => ctx.slots.register({
    name: "tool.call.toolview",
    key: "view_molecule"
  }, MoleculeToolRow));
}
/*! For license information please see 3Dmol-min.js.LICENSE.txt */
return module.exports; } });
//# sourceMappingURL=client.js.map
