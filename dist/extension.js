var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);

// src/extension/commands.ts
var vscode3 = __toESM(require("vscode"));

// node_modules/antlr4/dist/antlr4.web.mjs
var t = { 763: () => {
} };
var e = {};
function n(s2) {
  var i2 = e[s2];
  if (void 0 !== i2) return i2.exports;
  var r2 = e[s2] = { exports: {} };
  return t[s2](r2, r2.exports, n), r2.exports;
}
n.d = (t2, e2) => {
  for (var s2 in e2) n.o(e2, s2) && !n.o(t2, s2) && Object.defineProperty(t2, s2, { enumerable: true, get: e2[s2] });
}, n.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
var s = {};
n.d(s, { MG: () => $, fr: () => Lt, sR: () => Ae, Zo: () => ke, iH: () => Re, rt: () => Pt, jB: () => be, M8: () => le, $t: () => Ce, aq: () => me, pG: () => Ot, eP: () => Te, KU: () => xe, zW: () => Ie, IX: () => E, mY: () => _, a7: () => j, JG: () => Ut, ay: () => Xt, X2: () => ee, WU: () => de, Uw: () => ge, gw: () => pe, iX: () => Fe, re: () => se, Pg: () => Be, tD: () => ie, R$: () => te, Dj: () => Ft, m7: () => U, NZ: () => P, xo: () => b, ou: () => i, qC: () => ze, mD: () => d, Ay: () => Ye });
var i = class {
  constructor() {
    this.source = null, this.type = null, this.channel = null, this.start = null, this.stop = null, this.tokenIndex = null, this.line = null, this.column = null, this._text = null;
  }
  getTokenSource() {
    return this.source[0];
  }
  getInputStream() {
    return this.source[1];
  }
  get text() {
    return this._text;
  }
  set text(t2) {
    this._text = t2;
  }
};
function r(t2, e2) {
  if (!Array.isArray(t2) || !Array.isArray(e2)) return false;
  if (t2 === e2) return true;
  if (t2.length !== e2.length) return false;
  for (let n2 = 0; n2 < t2.length; n2++) if (!(t2[n2] === e2[n2] || t2[n2].equals && t2[n2].equals(e2[n2]))) return false;
  return true;
}
i.INVALID_TYPE = 0, i.EPSILON = -2, i.MIN_USER_TOKEN_TYPE = 1, i.EOF = -1, i.DEFAULT_CHANNEL = 0, i.HIDDEN_CHANNEL = 1;
var o = Math.round(Math.random() * Math.pow(2, 32));
function a(t2) {
  if (!t2) return 0;
  const e2 = typeof t2, n2 = "string" === e2 ? t2 : !("object" !== e2 || !t2.toString) && t2.toString();
  if (!n2) return 0;
  let s2, i2;
  const r2 = 3 & n2.length, a2 = n2.length - r2;
  let l2 = o;
  const h2 = 3432918353, c2 = 461845907;
  let u2 = 0;
  for (; u2 < a2; ) i2 = 255 & n2.charCodeAt(u2) | (255 & n2.charCodeAt(++u2)) << 8 | (255 & n2.charCodeAt(++u2)) << 16 | (255 & n2.charCodeAt(++u2)) << 24, ++u2, i2 = (65535 & i2) * h2 + (((i2 >>> 16) * h2 & 65535) << 16) & 4294967295, i2 = i2 << 15 | i2 >>> 17, i2 = (65535 & i2) * c2 + (((i2 >>> 16) * c2 & 65535) << 16) & 4294967295, l2 ^= i2, l2 = l2 << 13 | l2 >>> 19, s2 = 5 * (65535 & l2) + ((5 * (l2 >>> 16) & 65535) << 16) & 4294967295, l2 = 27492 + (65535 & s2) + ((58964 + (s2 >>> 16) & 65535) << 16);
  switch (i2 = 0, r2) {
    case 3:
      i2 ^= (255 & n2.charCodeAt(u2 + 2)) << 16;
    case 2:
      i2 ^= (255 & n2.charCodeAt(u2 + 1)) << 8;
    case 1:
      i2 ^= 255 & n2.charCodeAt(u2), i2 = (65535 & i2) * h2 + (((i2 >>> 16) * h2 & 65535) << 16) & 4294967295, i2 = i2 << 15 | i2 >>> 17, i2 = (65535 & i2) * c2 + (((i2 >>> 16) * c2 & 65535) << 16) & 4294967295, l2 ^= i2;
  }
  return l2 ^= n2.length, l2 ^= l2 >>> 16, l2 = 2246822507 * (65535 & l2) + ((2246822507 * (l2 >>> 16) & 65535) << 16) & 4294967295, l2 ^= l2 >>> 13, l2 = 3266489909 * (65535 & l2) + ((3266489909 * (l2 >>> 16) & 65535) << 16) & 4294967295, l2 ^= l2 >>> 16, l2 >>> 0;
}
var l = class _l {
  constructor() {
    this.count = 0, this.hash = 0;
  }
  update() {
    for (let t2 = 0; t2 < arguments.length; t2++) {
      const e2 = arguments[t2];
      if (null != e2) if (Array.isArray(e2)) this.update.apply(this, e2);
      else {
        let t3 = 0;
        switch (typeof e2) {
          case "undefined":
          case "function":
            continue;
          case "number":
          case "boolean":
            t3 = e2;
            break;
          case "string":
            t3 = a(e2);
            break;
          default:
            e2.updateHashCode ? e2.updateHashCode(this) : console.log("No updateHashCode for " + e2.toString());
            continue;
        }
        t3 *= 3432918353, t3 = t3 << 15 | t3 >>> 17, t3 *= 461845907, this.count = this.count + 1;
        let n2 = this.hash ^ t3;
        n2 = n2 << 13 | n2 >>> 19, n2 = 5 * n2 + 3864292196, this.hash = n2;
      }
    }
  }
  finish() {
    let t2 = this.hash ^ 4 * this.count;
    return t2 ^= t2 >>> 16, t2 *= 2246822507, t2 ^= t2 >>> 13, t2 *= 3266489909, t2 ^= t2 >>> 16, t2;
  }
  static hashStuff() {
    const t2 = new _l();
    return t2.update.apply(t2, arguments), t2.finish();
  }
};
function h(t2) {
  return t2 ? "string" == typeof t2 ? a(t2) : t2.hashCode() : -1;
}
function c(t2, e2) {
  return t2 && t2.equals ? t2.equals(e2) : t2 === e2;
}
function u(t2) {
  return null === t2 ? "null" : t2;
}
function d(t2) {
  return Array.isArray(t2) ? "[" + t2.map(u).join(", ") + "]" : "null";
}
var g = class {
  constructor(t2, e2) {
    this.buckets = new Array(16), this.threshold = Math.floor(12), this.itemCount = 0, this.hashFunction = t2 || h, this.equalsFunction = e2 || c;
  }
  get(t2) {
    if (null == t2) return t2;
    const e2 = this._getBucket(t2);
    if (!e2) return null;
    for (const n2 of e2) if (this.equalsFunction(n2, t2)) return n2;
    return null;
  }
  add(t2) {
    return this.getOrAdd(t2) === t2;
  }
  getOrAdd(t2) {
    this._expand();
    const e2 = this._getSlot(t2);
    let n2 = this.buckets[e2];
    if (!n2) return n2 = [t2], this.buckets[e2] = n2, this.itemCount++, t2;
    for (const e3 of n2) if (this.equalsFunction(e3, t2)) return e3;
    return n2.push(t2), this.itemCount++, t2;
  }
  has(t2) {
    return null != this.get(t2);
  }
  values() {
    return this.buckets.filter((t2) => null != t2).flat(1);
  }
  toString() {
    return d(this.values());
  }
  get length() {
    return this.itemCount;
  }
  _getSlot(t2) {
    return this.hashFunction(t2) & this.buckets.length - 1;
  }
  _getBucket(t2) {
    return this.buckets[this._getSlot(t2)];
  }
  _expand() {
    if (this.itemCount <= this.threshold) return;
    const t2 = this.buckets, e2 = 2 * this.buckets.length;
    this.buckets = new Array(e2), this.threshold = Math.floor(0.75 * e2);
    for (const e3 of t2) if (e3) for (const t3 of e3) {
      const e4 = this._getSlot(t3);
      let n2 = this.buckets[e4];
      n2 || (n2 = [], this.buckets[e4] = n2), n2.push(t3);
    }
  }
};
var p = class _p {
  hashCode() {
    const t2 = new l();
    return this.updateHashCode(t2), t2.finish();
  }
  evaluate(t2, e2) {
  }
  evalPrecedence(t2, e2) {
    return this;
  }
  static andContext(t2, e2) {
    if (null === t2 || t2 === _p.NONE) return e2;
    if (null === e2 || e2 === _p.NONE) return t2;
    const n2 = new f(t2, e2);
    return 1 === n2.opnds.length ? n2.opnds[0] : n2;
  }
  static orContext(t2, e2) {
    if (null === t2) return e2;
    if (null === e2) return t2;
    if (t2 === _p.NONE || e2 === _p.NONE) return _p.NONE;
    const n2 = new x(t2, e2);
    return 1 === n2.opnds.length ? n2.opnds[0] : n2;
  }
};
var f = class _f extends p {
  constructor(t2, e2) {
    super();
    const n2 = new g();
    t2 instanceof _f ? t2.opnds.map(function(t3) {
      n2.add(t3);
    }) : n2.add(t2), e2 instanceof _f ? e2.opnds.map(function(t3) {
      n2.add(t3);
    }) : n2.add(e2);
    const s2 = T(n2);
    if (s2.length > 0) {
      let t3 = null;
      s2.map(function(e3) {
        (null === t3 || e3.precedence < t3.precedence) && (t3 = e3);
      }), n2.add(t3);
    }
    this.opnds = Array.from(n2.values());
  }
  equals(t2) {
    return this === t2 || t2 instanceof _f && r(this.opnds, t2.opnds);
  }
  updateHashCode(t2) {
    t2.update(this.opnds, "AND");
  }
  evaluate(t2, e2) {
    for (let n2 = 0; n2 < this.opnds.length; n2++) if (!this.opnds[n2].evaluate(t2, e2)) return false;
    return true;
  }
  evalPrecedence(t2, e2) {
    let n2 = false;
    const s2 = [];
    for (let i3 = 0; i3 < this.opnds.length; i3++) {
      const r2 = this.opnds[i3], o2 = r2.evalPrecedence(t2, e2);
      if (n2 |= o2 !== r2, null === o2) return null;
      o2 !== p.NONE && s2.push(o2);
    }
    if (!n2) return this;
    if (0 === s2.length) return p.NONE;
    let i2 = null;
    return s2.map(function(t3) {
      i2 = null === i2 ? t3 : p.andContext(i2, t3);
    }), i2;
  }
  toString() {
    const t2 = this.opnds.map((t3) => t3.toString());
    return (t2.length > 3 ? t2.slice(3) : t2).join("&&");
  }
};
var x = class _x extends p {
  constructor(t2, e2) {
    super();
    const n2 = new g();
    t2 instanceof _x ? t2.opnds.map(function(t3) {
      n2.add(t3);
    }) : n2.add(t2), e2 instanceof _x ? e2.opnds.map(function(t3) {
      n2.add(t3);
    }) : n2.add(e2);
    const s2 = T(n2);
    if (s2.length > 0) {
      const t3 = s2.sort(function(t4, e4) {
        return t4.compareTo(e4);
      }), e3 = t3[t3.length - 1];
      n2.add(e3);
    }
    this.opnds = Array.from(n2.values());
  }
  equals(t2) {
    return this === t2 || t2 instanceof _x && r(this.opnds, t2.opnds);
  }
  updateHashCode(t2) {
    t2.update(this.opnds, "OR");
  }
  evaluate(t2, e2) {
    for (let n2 = 0; n2 < this.opnds.length; n2++) if (this.opnds[n2].evaluate(t2, e2)) return true;
    return false;
  }
  evalPrecedence(t2, e2) {
    let n2 = false;
    const s2 = [];
    for (let i2 = 0; i2 < this.opnds.length; i2++) {
      const r2 = this.opnds[i2], o2 = r2.evalPrecedence(t2, e2);
      if (n2 |= o2 !== r2, o2 === p.NONE) return p.NONE;
      null !== o2 && s2.push(o2);
    }
    if (!n2) return this;
    if (0 === s2.length) return null;
    return s2.map(function(t3) {
      return t3;
    }), null;
  }
  toString() {
    const t2 = this.opnds.map((t3) => t3.toString());
    return (t2.length > 3 ? t2.slice(3) : t2).join("||");
  }
};
function T(t2) {
  const e2 = [];
  return t2.values().map(function(t3) {
    t3 instanceof p.PrecedencePredicate && e2.push(t3);
  }), e2;
}
function S(t2, e2) {
  if (null === t2) {
    const t3 = { state: null, alt: null, context: null, semanticContext: null };
    return e2 && (t3.reachesIntoOuterContext = 0), t3;
  }
  {
    const n2 = {};
    return n2.state = t2.state || null, n2.alt = void 0 === t2.alt ? null : t2.alt, n2.context = t2.context || null, n2.semanticContext = t2.semanticContext || null, e2 && (n2.reachesIntoOuterContext = t2.reachesIntoOuterContext || 0, n2.precedenceFilterSuppressed = t2.precedenceFilterSuppressed || false), n2;
  }
}
var m = class _m {
  constructor(t2, e2) {
    this.checkContext(t2, e2), t2 = S(t2), e2 = S(e2, true), this.state = null !== t2.state ? t2.state : e2.state, this.alt = null !== t2.alt ? t2.alt : e2.alt, this.context = null !== t2.context ? t2.context : e2.context, this.semanticContext = null !== t2.semanticContext ? t2.semanticContext : null !== e2.semanticContext ? e2.semanticContext : p.NONE, this.reachesIntoOuterContext = e2.reachesIntoOuterContext, this.precedenceFilterSuppressed = e2.precedenceFilterSuppressed;
  }
  checkContext(t2, e2) {
    null !== t2.context && void 0 !== t2.context || null !== e2 && null !== e2.context && void 0 !== e2.context || (this.context = null);
  }
  hashCode() {
    const t2 = new l();
    return this.updateHashCode(t2), t2.finish();
  }
  updateHashCode(t2) {
    t2.update(this.state.stateNumber, this.alt, this.context, this.semanticContext);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _m && this.state.stateNumber === t2.state.stateNumber && this.alt === t2.alt && (null === this.context ? null === t2.context : this.context.equals(t2.context)) && this.semanticContext.equals(t2.semanticContext) && this.precedenceFilterSuppressed === t2.precedenceFilterSuppressed;
  }
  hashCodeForConfigSet() {
    const t2 = new l();
    return t2.update(this.state.stateNumber, this.alt, this.semanticContext), t2.finish();
  }
  equalsForConfigSet(t2) {
    return this === t2 || t2 instanceof _m && this.state.stateNumber === t2.state.stateNumber && this.alt === t2.alt && this.semanticContext.equals(t2.semanticContext);
  }
  toString() {
    return "(" + this.state + "," + this.alt + (null !== this.context ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== p.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")";
  }
};
var E = class _E {
  constructor(t2, e2) {
    this.start = t2, this.stop = e2;
  }
  clone() {
    return new _E(this.start, this.stop);
  }
  contains(t2) {
    return t2 >= this.start && t2 < this.stop;
  }
  toString() {
    return this.start === this.stop - 1 ? this.start.toString() : this.start.toString() + ".." + (this.stop - 1).toString();
  }
  get length() {
    return this.stop - this.start;
  }
};
E.INVALID_INTERVAL = new E(-1, -2);
var _ = class __ {
  constructor() {
    this.intervals = null, this.readOnly = false;
  }
  first(t2) {
    return null === this.intervals || 0 === this.intervals.length ? i.INVALID_TYPE : this.intervals[0].start;
  }
  addOne(t2) {
    this.addInterval(new E(t2, t2 + 1));
  }
  addRange(t2, e2) {
    this.addInterval(new E(t2, e2 + 1));
  }
  addInterval(t2) {
    if (null === this.intervals) this.intervals = [], this.intervals.push(t2.clone());
    else {
      for (let e2 = 0; e2 < this.intervals.length; e2++) {
        const n2 = this.intervals[e2];
        if (t2.stop < n2.start) return void this.intervals.splice(e2, 0, t2);
        if (t2.stop === n2.start) return void (this.intervals[e2] = new E(t2.start, n2.stop));
        if (t2.start <= n2.stop) return this.intervals[e2] = new E(Math.min(n2.start, t2.start), Math.max(n2.stop, t2.stop)), void this.reduce(e2);
      }
      this.intervals.push(t2.clone());
    }
  }
  addSet(t2) {
    return null !== t2.intervals && t2.intervals.forEach((t3) => this.addInterval(t3), this), this;
  }
  reduce(t2) {
    if (t2 < this.intervals.length - 1) {
      const e2 = this.intervals[t2], n2 = this.intervals[t2 + 1];
      e2.stop >= n2.stop ? (this.intervals.splice(t2 + 1, 1), this.reduce(t2)) : e2.stop >= n2.start && (this.intervals[t2] = new E(e2.start, n2.stop), this.intervals.splice(t2 + 1, 1));
    }
  }
  complement(t2, e2) {
    const n2 = new __();
    return n2.addInterval(new E(t2, e2 + 1)), null !== this.intervals && this.intervals.forEach((t3) => n2.removeRange(t3)), n2;
  }
  contains(t2) {
    if (null === this.intervals) return false;
    for (let e2 = 0; e2 < this.intervals.length; e2++) if (this.intervals[e2].contains(t2)) return true;
    return false;
  }
  removeRange(t2) {
    if (t2.start === t2.stop - 1) this.removeOne(t2.start);
    else if (null !== this.intervals) {
      let e2 = 0;
      for (let n2 = 0; n2 < this.intervals.length; n2++) {
        const n3 = this.intervals[e2];
        if (t2.stop <= n3.start) return;
        if (t2.start > n3.start && t2.stop < n3.stop) {
          this.intervals[e2] = new E(n3.start, t2.start);
          const s2 = new E(t2.stop, n3.stop);
          return void this.intervals.splice(e2, 0, s2);
        }
        t2.start <= n3.start && t2.stop >= n3.stop ? (this.intervals.splice(e2, 1), e2 -= 1) : t2.start < n3.stop ? this.intervals[e2] = new E(n3.start, t2.start) : t2.stop < n3.stop && (this.intervals[e2] = new E(t2.stop, n3.stop)), e2 += 1;
      }
    }
  }
  removeOne(t2) {
    if (null !== this.intervals) for (let e2 = 0; e2 < this.intervals.length; e2++) {
      const n2 = this.intervals[e2];
      if (t2 < n2.start) return;
      if (t2 === n2.start && t2 === n2.stop - 1) return void this.intervals.splice(e2, 1);
      if (t2 === n2.start) return void (this.intervals[e2] = new E(n2.start + 1, n2.stop));
      if (t2 === n2.stop - 1) return void (this.intervals[e2] = new E(n2.start, n2.stop - 1));
      if (t2 < n2.stop - 1) {
        const s2 = new E(n2.start, t2);
        return n2.start = t2 + 1, void this.intervals.splice(e2, 0, s2);
      }
    }
  }
  toString(t2, e2, n2) {
    return t2 = t2 || null, e2 = e2 || null, n2 = n2 || false, null === this.intervals ? "{}" : null !== t2 || null !== e2 ? this.toTokenString(t2, e2) : n2 ? this.toCharString() : this.toIndexString();
  }
  toCharString() {
    const t2 = [];
    for (let e2 = 0; e2 < this.intervals.length; e2++) {
      const n2 = this.intervals[e2];
      n2.stop === n2.start + 1 ? n2.start === i.EOF ? t2.push("<EOF>") : t2.push("'" + String.fromCharCode(n2.start) + "'") : t2.push("'" + String.fromCharCode(n2.start) + "'..'" + String.fromCharCode(n2.stop - 1) + "'");
    }
    return t2.length > 1 ? "{" + t2.join(", ") + "}" : t2[0];
  }
  toIndexString() {
    const t2 = [];
    for (let e2 = 0; e2 < this.intervals.length; e2++) {
      const n2 = this.intervals[e2];
      n2.stop === n2.start + 1 ? n2.start === i.EOF ? t2.push("<EOF>") : t2.push(n2.start.toString()) : t2.push(n2.start.toString() + ".." + (n2.stop - 1).toString());
    }
    return t2.length > 1 ? "{" + t2.join(", ") + "}" : t2[0];
  }
  toTokenString(t2, e2) {
    const n2 = [];
    for (let s2 = 0; s2 < this.intervals.length; s2++) {
      const i2 = this.intervals[s2];
      for (let s3 = i2.start; s3 < i2.stop; s3++) n2.push(this.elementName(t2, e2, s3));
    }
    return n2.length > 1 ? "{" + n2.join(", ") + "}" : n2[0];
  }
  elementName(t2, e2, n2) {
    return n2 === i.EOF ? "<EOF>" : n2 === i.EPSILON ? "<EPSILON>" : t2[n2] || e2[n2];
  }
  get length() {
    return this.intervals.map((t2) => t2.length).reduce((t2, e2) => t2 + e2);
  }
};
var C = class _C {
  constructor() {
    this.atn = null, this.stateNumber = _C.INVALID_STATE_NUMBER, this.stateType = null, this.ruleIndex = 0, this.epsilonOnlyTransitions = false, this.transitions = [], this.nextTokenWithinRule = null;
  }
  toString() {
    return this.stateNumber;
  }
  equals(t2) {
    return t2 instanceof _C && this.stateNumber === t2.stateNumber;
  }
  isNonGreedyExitState() {
    return false;
  }
  addTransition(t2, e2) {
    void 0 === e2 && (e2 = -1), 0 === this.transitions.length ? this.epsilonOnlyTransitions = t2.isEpsilon : this.epsilonOnlyTransitions !== t2.isEpsilon && (this.epsilonOnlyTransitions = false), -1 === e2 ? this.transitions.push(t2) : this.transitions.splice(e2, 1, t2);
  }
};
C.INVALID_TYPE = 0, C.BASIC = 1, C.RULE_START = 2, C.BLOCK_START = 3, C.PLUS_BLOCK_START = 4, C.STAR_BLOCK_START = 5, C.TOKEN_START = 6, C.RULE_STOP = 7, C.BLOCK_END = 8, C.STAR_LOOP_BACK = 9, C.STAR_LOOP_ENTRY = 10, C.PLUS_LOOP_BACK = 11, C.LOOP_END = 12, C.serializationNames = ["INVALID", "BASIC", "RULE_START", "BLOCK_START", "PLUS_BLOCK_START", "STAR_BLOCK_START", "TOKEN_START", "RULE_STOP", "BLOCK_END", "STAR_LOOP_BACK", "STAR_LOOP_ENTRY", "PLUS_LOOP_BACK", "LOOP_END"], C.INVALID_STATE_NUMBER = -1;
var A = class extends C {
  constructor() {
    return super(), this.stateType = C.RULE_STOP, this;
  }
};
var N = class {
  constructor(t2) {
    if (null == t2) throw "target cannot be null.";
    this.target = t2, this.isEpsilon = false, this.label = null;
  }
};
N.EPSILON = 1, N.RANGE = 2, N.RULE = 3, N.PREDICATE = 4, N.ATOM = 5, N.ACTION = 6, N.SET = 7, N.NOT_SET = 8, N.WILDCARD = 9, N.PRECEDENCE = 10, N.serializationNames = ["INVALID", "EPSILON", "RANGE", "RULE", "PREDICATE", "ATOM", "ACTION", "SET", "NOT_SET", "WILDCARD", "PRECEDENCE"], N.serializationTypes = { EpsilonTransition: N.EPSILON, RangeTransition: N.RANGE, RuleTransition: N.RULE, PredicateTransition: N.PREDICATE, AtomTransition: N.ATOM, ActionTransition: N.ACTION, SetTransition: N.SET, NotSetTransition: N.NOT_SET, WildcardTransition: N.WILDCARD, PrecedencePredicateTransition: N.PRECEDENCE };
var k = class extends N {
  constructor(t2, e2, n2, s2) {
    super(t2), this.ruleIndex = e2, this.precedence = n2, this.followState = s2, this.serializationType = N.RULE, this.isEpsilon = true;
  }
  matches(t2, e2, n2) {
    return false;
  }
};
var I = class extends N {
  constructor(t2, e2) {
    super(t2), this.serializationType = N.SET, null != e2 ? this.label = e2 : (this.label = new _(), this.label.addOne(i.INVALID_TYPE));
  }
  matches(t2, e2, n2) {
    return this.label.contains(t2);
  }
  toString() {
    return this.label.toString();
  }
};
var y = class extends I {
  constructor(t2, e2) {
    super(t2, e2), this.serializationType = N.NOT_SET;
  }
  matches(t2, e2, n2) {
    return t2 >= e2 && t2 <= n2 && !super.matches(t2, e2, n2);
  }
  toString() {
    return "~" + super.toString();
  }
};
var L = class extends N {
  constructor(t2) {
    super(t2), this.serializationType = N.WILDCARD;
  }
  matches(t2, e2, n2) {
    return t2 >= e2 && t2 <= n2;
  }
  toString() {
    return ".";
  }
};
var O = class extends N {
  constructor(t2) {
    super(t2);
  }
};
var R = class {
};
var w = class extends R {
};
var v = class extends w {
};
var P = class extends v {
  get ruleContext() {
    throw new Error("missing interface implementation");
  }
};
var b = class extends v {
};
var D = class extends b {
};
var F = { toStringTree: function(t2, e2, n2) {
  e2 = e2 || null, null !== (n2 = n2 || null) && (e2 = n2.ruleNames);
  let s2 = F.getNodeText(t2, e2);
  s2 = function(t3) {
    return t3 = t3.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
  }(s2);
  const i2 = t2.getChildCount();
  if (0 === i2) return s2;
  let r2 = "(" + s2 + " ";
  i2 > 0 && (s2 = F.toStringTree(t2.getChild(0), e2), r2 = r2.concat(s2));
  for (let n3 = 1; n3 < i2; n3++) s2 = F.toStringTree(t2.getChild(n3), e2), r2 = r2.concat(" " + s2);
  return r2 = r2.concat(")"), r2;
}, getNodeText: function(t2, e2, n2) {
  if (e2 = e2 || null, null !== (n2 = n2 || null) && (e2 = n2.ruleNames), null !== e2) {
    if (t2 instanceof P) {
      const n3 = t2.ruleContext.getAltNumber();
      return 0 != n3 ? e2[t2.ruleIndex] + ":" + n3 : e2[t2.ruleIndex];
    }
    if (t2 instanceof D) return t2.toString();
    if (t2 instanceof b && null !== t2.symbol) return t2.symbol.text;
  }
  const s2 = t2.getPayload();
  return s2 instanceof i ? s2.text : t2.getPayload().toString();
}, getChildren: function(t2) {
  const e2 = [];
  for (let n2 = 0; n2 < t2.getChildCount(); n2++) e2.push(t2.getChild(n2));
  return e2;
}, getAncestors: function(t2) {
  let e2 = [];
  for (t2 = t2.getParent(); null !== t2; ) e2 = [t2].concat(e2), t2 = t2.getParent();
  return e2;
}, findAllTokenNodes: function(t2, e2) {
  return F.findAllNodes(t2, e2, true);
}, findAllRuleNodes: function(t2, e2) {
  return F.findAllNodes(t2, e2, false);
}, findAllNodes: function(t2, e2, n2) {
  const s2 = [];
  return F._findAllNodes(t2, e2, n2, s2), s2;
}, _findAllNodes: function(t2, e2, n2, s2) {
  n2 && t2 instanceof b ? t2.symbol.type === e2 && s2.push(t2) : !n2 && t2 instanceof P && t2.ruleIndex === e2 && s2.push(t2);
  for (let i2 = 0; i2 < t2.getChildCount(); i2++) F._findAllNodes(t2.getChild(i2), e2, n2, s2);
}, descendants: function(t2) {
  let e2 = [t2];
  for (let n2 = 0; n2 < t2.getChildCount(); n2++) e2 = e2.concat(F.descendants(t2.getChild(n2)));
  return e2;
} };
var M = F;
var U = class extends P {
  constructor(t2, e2) {
    super(), this.parentCtx = t2 || null, this.invokingState = e2 || -1;
  }
  depth() {
    let t2 = 0, e2 = this;
    for (; null !== e2; ) e2 = e2.parentCtx, t2 += 1;
    return t2;
  }
  isEmpty() {
    return -1 === this.invokingState;
  }
  getSourceInterval() {
    return E.INVALID_INTERVAL;
  }
  get ruleContext() {
    return this;
  }
  getPayload() {
    return this;
  }
  getText() {
    return 0 === this.getChildCount() ? "" : this.children.map(function(t2) {
      return t2.getText();
    }).join("");
  }
  getAltNumber() {
    return 0;
  }
  setAltNumber(t2) {
  }
  getChild(t2) {
    return null;
  }
  getChildCount() {
    return 0;
  }
  accept(t2) {
    return t2.visitChildren(this);
  }
  toStringTree(t2, e2) {
    return M.toStringTree(this, t2, e2);
  }
  toString(t2, e2) {
    t2 = t2 || null, e2 = e2 || null;
    let n2 = this, s2 = "[";
    for (; null !== n2 && n2 !== e2; ) {
      if (null === t2) n2.isEmpty() || (s2 += n2.invokingState);
      else {
        const e3 = n2.ruleIndex;
        s2 += e3 >= 0 && e3 < t2.length ? t2[e3] : "" + e3;
      }
      null === n2.parentCtx || null === t2 && n2.parentCtx.isEmpty() || (s2 += " "), n2 = n2.parentCtx;
    }
    return s2 += "]", s2;
  }
};
var B = class _B {
  constructor(t2) {
    this.cachedHashCode = t2;
  }
  isEmpty() {
    return this === _B.EMPTY;
  }
  hasEmptyPath() {
    return this.getReturnState(this.length - 1) === _B.EMPTY_RETURN_STATE;
  }
  hashCode() {
    return this.cachedHashCode;
  }
  updateHashCode(t2) {
    t2.update(this.cachedHashCode);
  }
};
B.EMPTY = null, B.EMPTY_RETURN_STATE = 2147483647, B.globalNodeCount = 1, B.id = B.globalNodeCount, B.trace_atn_sim = false;
var z = class _z extends B {
  constructor(t2, e2) {
    const n2 = new l();
    return n2.update(t2, e2), super(n2.finish()), this.parents = t2, this.returnStates = e2, this;
  }
  isEmpty() {
    return this.returnStates[0] === B.EMPTY_RETURN_STATE;
  }
  getParent(t2) {
    return this.parents[t2];
  }
  getReturnState(t2) {
    return this.returnStates[t2];
  }
  equals(t2) {
    return this === t2 || t2 instanceof _z && this.hashCode() === t2.hashCode() && r(this.returnStates, t2.returnStates) && r(this.parents, t2.parents);
  }
  toString() {
    if (this.isEmpty()) return "[]";
    {
      let t2 = "[";
      for (let e2 = 0; e2 < this.returnStates.length; e2++) e2 > 0 && (t2 += ", "), this.returnStates[e2] !== B.EMPTY_RETURN_STATE ? (t2 += this.returnStates[e2], null !== this.parents[e2] ? t2 = t2 + " " + this.parents[e2] : t2 += "null") : t2 += "$";
      return t2 + "]";
    }
  }
  get length() {
    return this.returnStates.length;
  }
};
var V = class _V extends B {
  constructor(t2, e2) {
    let n2 = 0;
    const s2 = new l();
    null !== t2 ? s2.update(t2, e2) : s2.update(1), n2 = s2.finish(), super(n2), this.parentCtx = t2, this.returnState = e2;
  }
  getParent(t2) {
    return this.parentCtx;
  }
  getReturnState(t2) {
    return this.returnState;
  }
  equals(t2) {
    return this === t2 || t2 instanceof _V && this.hashCode() === t2.hashCode() && this.returnState === t2.returnState && (null == this.parentCtx ? null == t2.parentCtx : this.parentCtx.equals(t2.parentCtx));
  }
  toString() {
    const t2 = null === this.parentCtx ? "" : this.parentCtx.toString();
    return 0 === t2.length ? this.returnState === B.EMPTY_RETURN_STATE ? "$" : "" + this.returnState : this.returnState + " " + t2;
  }
  get length() {
    return 1;
  }
  static create(t2, e2) {
    return e2 === B.EMPTY_RETURN_STATE && null === t2 ? B.EMPTY : new _V(t2, e2);
  }
};
var q = class extends V {
  constructor() {
    super(null, B.EMPTY_RETURN_STATE);
  }
  isEmpty() {
    return true;
  }
  getParent(t2) {
    return null;
  }
  getReturnState(t2) {
    return this.returnState;
  }
  equals(t2) {
    return this === t2;
  }
  toString() {
    return "$";
  }
};
B.EMPTY = new q();
var H = class {
  constructor(t2, e2) {
    this.buckets = new Array(16), this.threshold = Math.floor(12), this.itemCount = 0, this.hashFunction = t2 || h, this.equalsFunction = e2 || c;
  }
  set(t2, e2) {
    this._expand();
    const n2 = this._getSlot(t2);
    let s2 = this.buckets[n2];
    if (!s2) return s2 = [[t2, e2]], this.buckets[n2] = s2, this.itemCount++, e2;
    const i2 = s2.find((e3) => this.equalsFunction(e3[0], t2), this);
    if (i2) {
      const t3 = i2[1];
      return i2[1] = e2, t3;
    }
    return s2.push([t2, e2]), this.itemCount++, e2;
  }
  containsKey(t2) {
    const e2 = this._getBucket(t2);
    return !!e2 && !!e2.find((e3) => this.equalsFunction(e3[0], t2), this);
  }
  get(t2) {
    const e2 = this._getBucket(t2);
    if (!e2) return null;
    const n2 = e2.find((e3) => this.equalsFunction(e3[0], t2), this);
    return n2 ? n2[1] : null;
  }
  entries() {
    return this.buckets.filter((t2) => null != t2).flat(1);
  }
  getKeys() {
    return this.entries().map((t2) => t2[0]);
  }
  getValues() {
    return this.entries().map((t2) => t2[1]);
  }
  toString() {
    return "[" + this.entries().map((t2) => "{" + t2[0] + ":" + t2[1] + "}").join(", ") + "]";
  }
  get length() {
    return this.itemCount;
  }
  _getSlot(t2) {
    return this.hashFunction(t2) & this.buckets.length - 1;
  }
  _getBucket(t2) {
    return this.buckets[this._getSlot(t2)];
  }
  _expand() {
    if (this.itemCount <= this.threshold) return;
    const t2 = this.buckets, e2 = 2 * this.buckets.length;
    this.buckets = new Array(e2), this.threshold = Math.floor(0.75 * e2);
    for (const e3 of t2) if (e3) for (const t3 of e3) {
      const e4 = this._getSlot(t3[0]);
      let n2 = this.buckets[e4];
      n2 || (n2 = [], this.buckets[e4] = n2), n2.push(t3);
    }
  }
};
function K(t2, e2) {
  if (null == e2 && (e2 = U.EMPTY), null === e2.parentCtx || e2 === U.EMPTY) return B.EMPTY;
  const n2 = K(t2, e2.parentCtx), s2 = t2.states[e2.invokingState].transitions[0];
  return V.create(n2, s2.followState.stateNumber);
}
function Y(t2, e2, n2) {
  if (t2.isEmpty()) return t2;
  let s2 = n2.get(t2) || null;
  if (null !== s2) return s2;
  if (s2 = e2.get(t2), null !== s2) return n2.set(t2, s2), s2;
  let i2 = false, r2 = [];
  for (let s3 = 0; s3 < r2.length; s3++) {
    const o3 = Y(t2.getParent(s3), e2, n2);
    if (i2 || o3 !== t2.getParent(s3)) {
      if (!i2) {
        r2 = [];
        for (let e3 = 0; e3 < t2.length; e3++) r2[e3] = t2.getParent(e3);
        i2 = true;
      }
      r2[s3] = o3;
    }
  }
  if (!i2) return e2.add(t2), n2.set(t2, t2), t2;
  let o2 = null;
  return o2 = 0 === r2.length ? B.EMPTY : 1 === r2.length ? V.create(r2[0], t2.getReturnState(0)) : new z(r2, t2.returnStates), e2.add(o2), n2.set(o2, o2), n2.set(t2, o2), o2;
}
function G(t2, e2, n2, s2) {
  if (t2 === e2) return t2;
  if (t2 instanceof V && e2 instanceof V) return function(t3, e3, n3, s3) {
    if (null !== s3) {
      let n4 = s3.get(t3, e3);
      if (null !== n4) return n4;
      if (n4 = s3.get(e3, t3), null !== n4) return n4;
    }
    const i2 = function(t4, e4, n4) {
      if (n4) {
        if (t4 === B.EMPTY) return B.EMPTY;
        if (e4 === B.EMPTY) return B.EMPTY;
      } else {
        if (t4 === B.EMPTY && e4 === B.EMPTY) return B.EMPTY;
        if (t4 === B.EMPTY) {
          const t5 = [e4.returnState, B.EMPTY_RETURN_STATE], n5 = [e4.parentCtx, null];
          return new z(n5, t5);
        }
        if (e4 === B.EMPTY) {
          const e5 = [t4.returnState, B.EMPTY_RETURN_STATE], n5 = [t4.parentCtx, null];
          return new z(n5, e5);
        }
      }
      return null;
    }(t3, e3, n3);
    if (null !== i2) return null !== s3 && s3.set(t3, e3, i2), i2;
    if (t3.returnState === e3.returnState) {
      const i3 = G(t3.parentCtx, e3.parentCtx, n3, s3);
      if (i3 === t3.parentCtx) return t3;
      if (i3 === e3.parentCtx) return e3;
      const r2 = V.create(i3, t3.returnState);
      return null !== s3 && s3.set(t3, e3, r2), r2;
    }
    {
      let n4 = null;
      if ((t3 === e3 || null !== t3.parentCtx && t3.parentCtx === e3.parentCtx) && (n4 = t3.parentCtx), null !== n4) {
        const i4 = [t3.returnState, e3.returnState];
        t3.returnState > e3.returnState && (i4[0] = e3.returnState, i4[1] = t3.returnState);
        const r3 = new z([n4, n4], i4);
        return null !== s3 && s3.set(t3, e3, r3), r3;
      }
      const i3 = [t3.returnState, e3.returnState];
      let r2 = [t3.parentCtx, e3.parentCtx];
      t3.returnState > e3.returnState && (i3[0] = e3.returnState, i3[1] = t3.returnState, r2 = [e3.parentCtx, t3.parentCtx]);
      const o2 = new z(r2, i3);
      return null !== s3 && s3.set(t3, e3, o2), o2;
    }
  }(t2, e2, n2, s2);
  if (n2) {
    if (t2 instanceof q) return t2;
    if (e2 instanceof q) return e2;
  }
  return t2 instanceof V && (t2 = new z([t2.getParent()], [t2.returnState])), e2 instanceof V && (e2 = new z([e2.getParent()], [e2.returnState])), function(t3, e3, n3, s3) {
    if (null !== s3) {
      let n4 = s3.get(t3, e3);
      if (null !== n4) return B.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> previous"), n4;
      if (n4 = s3.get(e3, t3), null !== n4) return B.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> previous"), n4;
    }
    let i2 = 0, r2 = 0, o2 = 0, a2 = new Array(t3.returnStates.length + e3.returnStates.length).fill(0), l2 = new Array(t3.returnStates.length + e3.returnStates.length).fill(null);
    for (; i2 < t3.returnStates.length && r2 < e3.returnStates.length; ) {
      const h3 = t3.parents[i2], c2 = e3.parents[r2];
      if (t3.returnStates[i2] === e3.returnStates[r2]) {
        const e4 = t3.returnStates[i2];
        e4 === B.EMPTY_RETURN_STATE && null === h3 && null === c2 || null !== h3 && null !== c2 && h3 === c2 ? (l2[o2] = h3, a2[o2] = e4) : (l2[o2] = G(h3, c2, n3, s3), a2[o2] = e4), i2 += 1, r2 += 1;
      } else t3.returnStates[i2] < e3.returnStates[r2] ? (l2[o2] = h3, a2[o2] = t3.returnStates[i2], i2 += 1) : (l2[o2] = c2, a2[o2] = e3.returnStates[r2], r2 += 1);
      o2 += 1;
    }
    if (i2 < t3.returnStates.length) for (let e4 = i2; e4 < t3.returnStates.length; e4++) l2[o2] = t3.parents[e4], a2[o2] = t3.returnStates[e4], o2 += 1;
    else for (let t4 = r2; t4 < e3.returnStates.length; t4++) l2[o2] = e3.parents[t4], a2[o2] = e3.returnStates[t4], o2 += 1;
    if (o2 < l2.length) {
      if (1 === o2) {
        const n4 = V.create(l2[0], a2[0]);
        return null !== s3 && s3.set(t3, e3, n4), n4;
      }
      l2 = l2.slice(0, o2), a2 = a2.slice(0, o2);
    }
    const h2 = new z(l2, a2);
    return h2.equals(t3) ? (null !== s3 && s3.set(t3, e3, t3), B.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> a"), t3) : h2.equals(e3) ? (null !== s3 && s3.set(t3, e3, e3), B.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> b"), e3) : (function(t4) {
      const e4 = new H();
      for (let n4 = 0; n4 < t4.length; n4++) {
        const s4 = t4[n4];
        e4.containsKey(s4) || e4.set(s4, s4);
      }
      for (let n4 = 0; n4 < t4.length; n4++) t4[n4] = e4.get(t4[n4]);
    }(l2), null !== s3 && s3.set(t3, e3, h2), B.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> " + h2), h2);
  }(t2, e2, n2, s2);
}
var W = class _W {
  constructor() {
    this.data = new Uint32Array(1);
  }
  set(t2) {
    _W._checkIndex(t2), this._resize(t2), this.data[t2 >>> 5] |= 1 << t2 % 32;
  }
  get(t2) {
    _W._checkIndex(t2);
    const e2 = t2 >>> 5;
    return !(e2 >= this.data.length || !(this.data[e2] & 1 << t2 % 32));
  }
  clear(t2) {
    _W._checkIndex(t2);
    const e2 = t2 >>> 5;
    e2 < this.data.length && (this.data[e2] &= ~(1 << t2));
  }
  or(t2) {
    const e2 = Math.min(this.data.length, t2.data.length);
    for (let n2 = 0; n2 < e2; ++n2) this.data[n2] |= t2.data[n2];
    if (this.data.length < t2.data.length) {
      this._resize((t2.data.length << 5) - 1);
      const n2 = t2.data.length;
      for (let s2 = e2; s2 < n2; ++s2) this.data[s2] = t2.data[s2];
    }
  }
  values() {
    const t2 = new Array(this.length);
    let e2 = 0;
    const n2 = this.data.length;
    for (let s2 = 0; s2 < n2; ++s2) {
      let n3 = this.data[s2];
      for (; 0 !== n3; ) {
        const i2 = n3 & -n3;
        t2[e2++] = (s2 << 5) + _W._bitCount(i2 - 1), n3 ^= i2;
      }
    }
    return t2;
  }
  minValue() {
    for (let t2 = 0; t2 < this.data.length; ++t2) {
      let e2 = this.data[t2];
      if (0 !== e2) {
        let n2 = 0;
        for (; !(1 & e2); ) n2++, e2 >>= 1;
        return n2 + 32 * t2;
      }
    }
    return 0;
  }
  hashCode() {
    return l.hashStuff(this.values());
  }
  equals(t2) {
    return t2 instanceof _W && r(this.data, t2.data);
  }
  toString() {
    return "{" + this.values().join(", ") + "}";
  }
  get length() {
    return this.data.map((t2) => _W._bitCount(t2)).reduce((t2, e2) => t2 + e2, 0);
  }
  _resize(t2) {
    const e2 = t2 + 32 >>> 5;
    if (e2 <= this.data.length) return;
    const n2 = new Uint32Array(e2);
    n2.set(this.data), n2.fill(0, this.data.length), this.data = n2;
  }
  static _checkIndex(t2) {
    if (t2 < 0) throw new RangeError("index cannot be negative");
  }
  static _bitCount(t2) {
    return t2 = (t2 = (858993459 & (t2 -= t2 >> 1 & 1431655765)) + (t2 >> 2 & 858993459)) + (t2 >> 4) & 252645135, t2 += t2 >> 8, 0 + (t2 += t2 >> 16) & 63;
  }
};
var j = class _j {
  constructor(t2) {
    this.atn = t2;
  }
  getDecisionLookahead(t2) {
    if (null === t2) return null;
    const e2 = t2.transitions.length, n2 = [];
    for (let s2 = 0; s2 < e2; s2++) {
      n2[s2] = new _();
      const e3 = new g(), i2 = false;
      this._LOOK(t2.transition(s2).target, null, B.EMPTY, n2[s2], e3, new W(), i2, false), (0 === n2[s2].length || n2[s2].contains(_j.HIT_PRED)) && (n2[s2] = null);
    }
    return n2;
  }
  LOOK(t2, e2, n2) {
    const s2 = new _(), i2 = null !== (n2 = n2 || null) ? K(t2.atn, n2) : null;
    return this._LOOK(t2, e2, i2, s2, new g(), new W(), true, true), s2;
  }
  _LOOK(t2, e2, n2, s2, r2, o2, a2, l2) {
    const h2 = new m({ state: t2, alt: 0, context: n2 }, null);
    if (!r2.has(h2)) {
      if (r2.add(h2), t2 === e2) {
        if (null === n2) return void s2.addOne(i.EPSILON);
        if (n2.isEmpty() && l2) return void s2.addOne(i.EOF);
      }
      if (t2 instanceof A) {
        if (null === n2) return void s2.addOne(i.EPSILON);
        if (n2.isEmpty() && l2) return void s2.addOne(i.EOF);
        if (n2 !== B.EMPTY) {
          const i2 = o2.get(t2.ruleIndex);
          try {
            o2.clear(t2.ruleIndex);
            for (let t3 = 0; t3 < n2.length; t3++) {
              const i3 = this.atn.states[n2.getReturnState(t3)];
              this._LOOK(i3, e2, n2.getParent(t3), s2, r2, o2, a2, l2);
            }
          } finally {
            i2 && o2.set(t2.ruleIndex);
          }
          return;
        }
      }
      for (let h3 = 0; h3 < t2.transitions.length; h3++) {
        const c2 = t2.transitions[h3];
        if (c2.constructor === k) {
          if (o2.get(c2.target.ruleIndex)) continue;
          const t3 = V.create(n2, c2.followState.stateNumber);
          try {
            o2.set(c2.target.ruleIndex), this._LOOK(c2.target, e2, t3, s2, r2, o2, a2, l2);
          } finally {
            o2.clear(c2.target.ruleIndex);
          }
        } else if (c2 instanceof O) a2 ? this._LOOK(c2.target, e2, n2, s2, r2, o2, a2, l2) : s2.addOne(_j.HIT_PRED);
        else if (c2.isEpsilon) this._LOOK(c2.target, e2, n2, s2, r2, o2, a2, l2);
        else if (c2.constructor === L) s2.addRange(i.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
        else {
          let t3 = c2.label;
          null !== t3 && (c2 instanceof y && (t3 = t3.complement(i.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)), s2.addSet(t3));
        }
      }
    }
  }
};
j.HIT_PRED = i.INVALID_TYPE;
var $ = class {
  constructor(t2, e2) {
    this.grammarType = t2, this.maxTokenType = e2, this.states = [], this.decisionToState = [], this.ruleToStartState = [], this.ruleToStopState = null, this.modeNameToStartState = {}, this.ruleToTokenType = null, this.lexerActions = null, this.modeToStartState = [];
  }
  nextTokensInContext(t2, e2) {
    return new j(this).LOOK(t2, null, e2);
  }
  nextTokensNoContext(t2) {
    return null !== t2.nextTokenWithinRule || (t2.nextTokenWithinRule = this.nextTokensInContext(t2, null), t2.nextTokenWithinRule.readOnly = true), t2.nextTokenWithinRule;
  }
  nextTokens(t2, e2) {
    return void 0 === e2 ? this.nextTokensNoContext(t2) : this.nextTokensInContext(t2, e2);
  }
  addState(t2) {
    null !== t2 && (t2.atn = this, t2.stateNumber = this.states.length), this.states.push(t2);
  }
  removeState(t2) {
    this.states[t2.stateNumber] = null;
  }
  defineDecisionState(t2) {
    return this.decisionToState.push(t2), t2.decision = this.decisionToState.length - 1, t2.decision;
  }
  getDecisionState(t2) {
    return 0 === this.decisionToState.length ? null : this.decisionToState[t2];
  }
  getExpectedTokens(t2, e2) {
    if (t2 < 0 || t2 >= this.states.length) throw "Invalid state number.";
    const n2 = this.states[t2];
    let s2 = this.nextTokens(n2);
    if (!s2.contains(i.EPSILON)) return s2;
    const r2 = new _();
    for (r2.addSet(s2), r2.removeOne(i.EPSILON); null !== e2 && e2.invokingState >= 0 && s2.contains(i.EPSILON); ) {
      const t3 = this.states[e2.invokingState].transitions[0];
      s2 = this.nextTokens(t3.followState), r2.addSet(s2), r2.removeOne(i.EPSILON), e2 = e2.parentCtx;
    }
    return s2.contains(i.EPSILON) && r2.addOne(i.EOF), r2;
  }
};
$.INVALID_ALT_NUMBER = 0;
var X = class extends C {
  constructor() {
    super(), this.stateType = C.BASIC;
  }
};
var J = class extends C {
  constructor() {
    return super(), this.decision = -1, this.nonGreedy = false, this;
  }
};
var Z = class extends J {
  constructor() {
    return super(), this.endState = null, this;
  }
};
var Q = class extends C {
  constructor() {
    return super(), this.stateType = C.BLOCK_END, this.startState = null, this;
  }
};
var tt = class extends C {
  constructor() {
    return super(), this.stateType = C.LOOP_END, this.loopBackState = null, this;
  }
};
var et = class extends C {
  constructor() {
    return super(), this.stateType = C.RULE_START, this.stopState = null, this.isPrecedenceRule = false, this;
  }
};
var nt = class extends J {
  constructor() {
    return super(), this.stateType = C.TOKEN_START, this;
  }
};
var st = class extends J {
  constructor() {
    return super(), this.stateType = C.PLUS_LOOP_BACK, this;
  }
};
var it = class extends C {
  constructor() {
    return super(), this.stateType = C.STAR_LOOP_BACK, this;
  }
};
var rt = class extends J {
  constructor() {
    return super(), this.stateType = C.STAR_LOOP_ENTRY, this.loopBackState = null, this.isPrecedenceDecision = null, this;
  }
};
var ot = class extends Z {
  constructor() {
    return super(), this.stateType = C.PLUS_BLOCK_START, this.loopBackState = null, this;
  }
};
var at = class extends Z {
  constructor() {
    return super(), this.stateType = C.STAR_BLOCK_START, this;
  }
};
var lt = class extends Z {
  constructor() {
    return super(), this.stateType = C.BLOCK_START, this;
  }
};
var ht = class extends N {
  constructor(t2, e2) {
    super(t2), this.label_ = e2, this.label = this.makeLabel(), this.serializationType = N.ATOM;
  }
  makeLabel() {
    const t2 = new _();
    return t2.addOne(this.label_), t2;
  }
  matches(t2, e2, n2) {
    return this.label_ === t2;
  }
  toString() {
    return this.label_;
  }
};
var ct = class extends N {
  constructor(t2, e2, n2) {
    super(t2), this.serializationType = N.RANGE, this.start = e2, this.stop = n2, this.label = this.makeLabel();
  }
  makeLabel() {
    const t2 = new _();
    return t2.addRange(this.start, this.stop), t2;
  }
  matches(t2, e2, n2) {
    return t2 >= this.start && t2 <= this.stop;
  }
  toString() {
    return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'";
  }
};
var ut = class extends N {
  constructor(t2, e2, n2, s2) {
    super(t2), this.serializationType = N.ACTION, this.ruleIndex = e2, this.actionIndex = void 0 === n2 ? -1 : n2, this.isCtxDependent = void 0 !== s2 && s2, this.isEpsilon = true;
  }
  matches(t2, e2, n2) {
    return false;
  }
  toString() {
    return "action_" + this.ruleIndex + ":" + this.actionIndex;
  }
};
var dt = class extends N {
  constructor(t2, e2) {
    super(t2), this.serializationType = N.EPSILON, this.isEpsilon = true, this.outermostPrecedenceReturn = e2;
  }
  matches(t2, e2, n2) {
    return false;
  }
  toString() {
    return "epsilon";
  }
};
var gt = class _gt extends p {
  constructor(t2, e2, n2) {
    super(), this.ruleIndex = void 0 === t2 ? -1 : t2, this.predIndex = void 0 === e2 ? -1 : e2, this.isCtxDependent = void 0 !== n2 && n2;
  }
  evaluate(t2, e2) {
    const n2 = this.isCtxDependent ? e2 : null;
    return t2.sempred(n2, this.ruleIndex, this.predIndex);
  }
  updateHashCode(t2) {
    t2.update(this.ruleIndex, this.predIndex, this.isCtxDependent);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _gt && this.ruleIndex === t2.ruleIndex && this.predIndex === t2.predIndex && this.isCtxDependent === t2.isCtxDependent;
  }
  toString() {
    return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
  }
};
p.NONE = new gt();
var pt = class extends O {
  constructor(t2, e2, n2, s2) {
    super(t2), this.serializationType = N.PREDICATE, this.ruleIndex = e2, this.predIndex = n2, this.isCtxDependent = s2, this.isEpsilon = true;
  }
  matches(t2, e2, n2) {
    return false;
  }
  getPredicate() {
    return new gt(this.ruleIndex, this.predIndex, this.isCtxDependent);
  }
  toString() {
    return "pred_" + this.ruleIndex + ":" + this.predIndex;
  }
};
var ft = class _ft extends p {
  constructor(t2) {
    super(), this.precedence = void 0 === t2 ? 0 : t2;
  }
  evaluate(t2, e2) {
    return t2.precpred(e2, this.precedence);
  }
  evalPrecedence(t2, e2) {
    return t2.precpred(e2, this.precedence) ? p.NONE : null;
  }
  compareTo(t2) {
    return this.precedence - t2.precedence;
  }
  updateHashCode(t2) {
    t2.update(this.precedence);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _ft && this.precedence === t2.precedence;
  }
  toString() {
    return "{" + this.precedence + ">=prec}?";
  }
};
p.PrecedencePredicate = ft;
var xt = class extends O {
  constructor(t2, e2) {
    super(t2), this.serializationType = N.PRECEDENCE, this.precedence = e2, this.isEpsilon = true;
  }
  matches(t2, e2, n2) {
    return false;
  }
  getPredicate() {
    return new ft(this.precedence);
  }
  toString() {
    return this.precedence + " >= _p";
  }
};
var Tt = class {
  constructor(t2) {
    void 0 === t2 && (t2 = null), this.readOnly = false, this.verifyATN = null === t2 || t2.verifyATN, this.generateRuleBypassTransitions = null !== t2 && t2.generateRuleBypassTransitions;
  }
};
Tt.defaultOptions = new Tt(), Tt.defaultOptions.readOnly = true;
var St = class {
  constructor(t2) {
    this.actionType = t2, this.isPositionDependent = false;
  }
  hashCode() {
    const t2 = new l();
    return this.updateHashCode(t2), t2.finish();
  }
  updateHashCode(t2) {
    t2.update(this.actionType);
  }
  equals(t2) {
    return this === t2;
  }
};
var mt = class extends St {
  constructor() {
    super(6);
  }
  execute(t2) {
    t2.skip();
  }
  toString() {
    return "skip";
  }
};
mt.INSTANCE = new mt();
var Et = class _Et extends St {
  constructor(t2) {
    super(0), this.channel = t2;
  }
  execute(t2) {
    t2._channel = this.channel;
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.channel);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Et && this.channel === t2.channel;
  }
  toString() {
    return "channel(" + this.channel + ")";
  }
};
var _t = class __t extends St {
  constructor(t2, e2) {
    super(1), this.ruleIndex = t2, this.actionIndex = e2, this.isPositionDependent = true;
  }
  execute(t2) {
    t2.action(null, this.ruleIndex, this.actionIndex);
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.ruleIndex, this.actionIndex);
  }
  equals(t2) {
    return this === t2 || t2 instanceof __t && this.ruleIndex === t2.ruleIndex && this.actionIndex === t2.actionIndex;
  }
};
var Ct = class extends St {
  constructor() {
    super(3);
  }
  execute(t2) {
    t2.more();
  }
  toString() {
    return "more";
  }
};
Ct.INSTANCE = new Ct();
var At = class _At extends St {
  constructor(t2) {
    super(7), this.type = t2;
  }
  execute(t2) {
    t2.type = this.type;
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.type);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _At && this.type === t2.type;
  }
  toString() {
    return "type(" + this.type + ")";
  }
};
var Nt = class _Nt extends St {
  constructor(t2) {
    super(5), this.mode = t2;
  }
  execute(t2) {
    t2.pushMode(this.mode);
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.mode);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Nt && this.mode === t2.mode;
  }
  toString() {
    return "pushMode(" + this.mode + ")";
  }
};
var kt = class extends St {
  constructor() {
    super(4);
  }
  execute(t2) {
    t2.popMode();
  }
  toString() {
    return "popMode";
  }
};
kt.INSTANCE = new kt();
var It = class _It extends St {
  constructor(t2) {
    super(2), this.mode = t2;
  }
  execute(t2) {
    t2.setMode(this.mode);
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.mode);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _It && this.mode === t2.mode;
  }
  toString() {
    return "mode(" + this.mode + ")";
  }
};
function yt(t2, e2) {
  const n2 = [];
  return n2[t2 - 1] = e2, n2.map(function(t3) {
    return e2;
  });
}
var Lt = class {
  constructor(t2) {
    null == t2 && (t2 = Tt.defaultOptions), this.deserializationOptions = t2, this.stateFactories = null, this.actionFactories = null;
  }
  deserialize(t2) {
    const e2 = this.reset(t2);
    this.checkVersion(e2), e2 && this.skipUUID();
    const n2 = this.readATN();
    this.readStates(n2, e2), this.readRules(n2, e2), this.readModes(n2);
    const s2 = [];
    return this.readSets(n2, s2, this.readInt.bind(this)), e2 && this.readSets(n2, s2, this.readInt32.bind(this)), this.readEdges(n2, s2), this.readDecisions(n2), this.readLexerActions(n2, e2), this.markPrecedenceDecisions(n2), this.verifyATN(n2), this.deserializationOptions.generateRuleBypassTransitions && 1 === n2.grammarType && (this.generateRuleBypassTransitions(n2), this.verifyATN(n2)), n2;
  }
  reset(t2) {
    if (3 === (t2.charCodeAt ? t2.charCodeAt(0) : t2[0])) {
      const e2 = function(t3) {
        const e3 = t3.charCodeAt(0);
        return e3 > 1 ? e3 - 2 : e3 + 65534;
      }, n2 = t2.split("").map(e2);
      return n2[0] = t2.charCodeAt(0), this.data = n2, this.pos = 0, true;
    }
    return this.data = t2, this.pos = 0, false;
  }
  skipUUID() {
    let t2 = 0;
    for (; t2++ < 8; ) this.readInt();
  }
  checkVersion(t2) {
    const e2 = this.readInt();
    if (!t2 && 4 !== e2) throw "Could not deserialize ATN with version " + e2 + " (expected 4).";
  }
  readATN() {
    const t2 = this.readInt(), e2 = this.readInt();
    return new $(t2, e2);
  }
  readStates(t2, e2) {
    let n2, s2, i2;
    const r2 = [], o2 = [], a2 = this.readInt();
    for (let n3 = 0; n3 < a2; n3++) {
      const n4 = this.readInt();
      if (n4 === C.INVALID_TYPE) {
        t2.addState(null);
        continue;
      }
      let s3 = this.readInt();
      e2 && 65535 === s3 && (s3 = -1);
      const i3 = this.stateFactory(n4, s3);
      if (n4 === C.LOOP_END) {
        const t3 = this.readInt();
        r2.push([i3, t3]);
      } else if (i3 instanceof Z) {
        const t3 = this.readInt();
        o2.push([i3, t3]);
      }
      t2.addState(i3);
    }
    for (n2 = 0; n2 < r2.length; n2++) s2 = r2[n2], s2[0].loopBackState = t2.states[s2[1]];
    for (n2 = 0; n2 < o2.length; n2++) s2 = o2[n2], s2[0].endState = t2.states[s2[1]];
    let l2 = this.readInt();
    for (n2 = 0; n2 < l2; n2++) i2 = this.readInt(), t2.states[i2].nonGreedy = true;
    let h2 = this.readInt();
    for (n2 = 0; n2 < h2; n2++) i2 = this.readInt(), t2.states[i2].isPrecedenceRule = true;
  }
  readRules(t2, e2) {
    let n2;
    const s2 = this.readInt();
    for (0 === t2.grammarType && (t2.ruleToTokenType = yt(s2, 0)), t2.ruleToStartState = yt(s2, 0), n2 = 0; n2 < s2; n2++) {
      const s3 = this.readInt();
      if (t2.ruleToStartState[n2] = t2.states[s3], 0 === t2.grammarType) {
        let s4 = this.readInt();
        e2 && 65535 === s4 && (s4 = i.EOF), t2.ruleToTokenType[n2] = s4;
      }
    }
    for (t2.ruleToStopState = yt(s2, 0), n2 = 0; n2 < t2.states.length; n2++) {
      const e3 = t2.states[n2];
      e3 instanceof A && (t2.ruleToStopState[e3.ruleIndex] = e3, t2.ruleToStartState[e3.ruleIndex].stopState = e3);
    }
  }
  readModes(t2) {
    const e2 = this.readInt();
    for (let n2 = 0; n2 < e2; n2++) {
      let e3 = this.readInt();
      t2.modeToStartState.push(t2.states[e3]);
    }
  }
  readSets(t2, e2, n2) {
    const s2 = this.readInt();
    for (let t3 = 0; t3 < s2; t3++) {
      const t4 = new _();
      e2.push(t4);
      const s3 = this.readInt();
      0 !== this.readInt() && t4.addOne(-1);
      for (let e3 = 0; e3 < s3; e3++) {
        const e4 = n2(), s4 = n2();
        t4.addRange(e4, s4);
      }
    }
  }
  readEdges(t2, e2) {
    let n2, s2, i2, r2, o2;
    const a2 = this.readInt();
    for (n2 = 0; n2 < a2; n2++) {
      const n3 = this.readInt(), s3 = this.readInt(), i3 = this.readInt(), o3 = this.readInt(), a3 = this.readInt(), l2 = this.readInt();
      r2 = this.edgeFactory(t2, i3, n3, s3, o3, a3, l2, e2), t2.states[n3].addTransition(r2);
    }
    for (n2 = 0; n2 < t2.states.length; n2++) for (i2 = t2.states[n2], s2 = 0; s2 < i2.transitions.length; s2++) {
      const e3 = i2.transitions[s2];
      if (!(e3 instanceof k)) continue;
      let n3 = -1;
      t2.ruleToStartState[e3.target.ruleIndex].isPrecedenceRule && 0 === e3.precedence && (n3 = e3.target.ruleIndex), r2 = new dt(e3.followState, n3), t2.ruleToStopState[e3.target.ruleIndex].addTransition(r2);
    }
    for (n2 = 0; n2 < t2.states.length; n2++) {
      if (i2 = t2.states[n2], i2 instanceof Z) {
        if (null === i2.endState) throw "IllegalState";
        if (null !== i2.endState.startState) throw "IllegalState";
        i2.endState.startState = i2;
      }
      if (i2 instanceof st) for (s2 = 0; s2 < i2.transitions.length; s2++) o2 = i2.transitions[s2].target, o2 instanceof ot && (o2.loopBackState = i2);
      else if (i2 instanceof it) for (s2 = 0; s2 < i2.transitions.length; s2++) o2 = i2.transitions[s2].target, o2 instanceof rt && (o2.loopBackState = i2);
    }
  }
  readDecisions(t2) {
    const e2 = this.readInt();
    for (let n2 = 0; n2 < e2; n2++) {
      const e3 = this.readInt(), s2 = t2.states[e3];
      t2.decisionToState.push(s2), s2.decision = n2;
    }
  }
  readLexerActions(t2, e2) {
    if (0 === t2.grammarType) {
      const n2 = this.readInt();
      t2.lexerActions = yt(n2, null);
      for (let s2 = 0; s2 < n2; s2++) {
        const n3 = this.readInt();
        let i2 = this.readInt();
        e2 && 65535 === i2 && (i2 = -1);
        let r2 = this.readInt();
        e2 && 65535 === r2 && (r2 = -1), t2.lexerActions[s2] = this.lexerActionFactory(n3, i2, r2);
      }
    }
  }
  generateRuleBypassTransitions(t2) {
    let e2;
    const n2 = t2.ruleToStartState.length;
    for (e2 = 0; e2 < n2; e2++) t2.ruleToTokenType[e2] = t2.maxTokenType + e2 + 1;
    for (e2 = 0; e2 < n2; e2++) this.generateRuleBypassTransition(t2, e2);
  }
  generateRuleBypassTransition(t2, e2) {
    let n2, s2;
    const i2 = new lt();
    i2.ruleIndex = e2, t2.addState(i2);
    const r2 = new Q();
    r2.ruleIndex = e2, t2.addState(r2), i2.endState = r2, t2.defineDecisionState(i2), r2.startState = i2;
    let o2 = null, a2 = null;
    if (t2.ruleToStartState[e2].isPrecedenceRule) {
      for (a2 = null, n2 = 0; n2 < t2.states.length; n2++) if (s2 = t2.states[n2], this.stateIsEndStateFor(s2, e2)) {
        a2 = s2, o2 = s2.loopBackState.transitions[0];
        break;
      }
      if (null === o2) throw "Couldn't identify final state of the precedence rule prefix section.";
    } else a2 = t2.ruleToStopState[e2];
    for (n2 = 0; n2 < t2.states.length; n2++) {
      s2 = t2.states[n2];
      for (let t3 = 0; t3 < s2.transitions.length; t3++) {
        const e3 = s2.transitions[t3];
        e3 !== o2 && e3.target === a2 && (e3.target = r2);
      }
    }
    const l2 = t2.ruleToStartState[e2], h2 = l2.transitions.length;
    for (; h2 > 0; ) i2.addTransition(l2.transitions[h2 - 1]), l2.transitions = l2.transitions.slice(-1);
    t2.ruleToStartState[e2].addTransition(new dt(i2)), r2.addTransition(new dt(a2));
    const c2 = new X();
    t2.addState(c2), c2.addTransition(new ht(r2, t2.ruleToTokenType[e2])), i2.addTransition(new dt(c2));
  }
  stateIsEndStateFor(t2, e2) {
    if (t2.ruleIndex !== e2) return null;
    if (!(t2 instanceof rt)) return null;
    const n2 = t2.transitions[t2.transitions.length - 1].target;
    return n2 instanceof tt && n2.epsilonOnlyTransitions && n2.transitions[0].target instanceof A ? t2 : null;
  }
  markPrecedenceDecisions(t2) {
    for (let e2 = 0; e2 < t2.states.length; e2++) {
      const n2 = t2.states[e2];
      if (n2 instanceof rt && t2.ruleToStartState[n2.ruleIndex].isPrecedenceRule) {
        const t3 = n2.transitions[n2.transitions.length - 1].target;
        t3 instanceof tt && t3.epsilonOnlyTransitions && t3.transitions[0].target instanceof A && (n2.isPrecedenceDecision = true);
      }
    }
  }
  verifyATN(t2) {
    if (this.deserializationOptions.verifyATN) for (let e2 = 0; e2 < t2.states.length; e2++) {
      const n2 = t2.states[e2];
      if (null !== n2) if (this.checkCondition(n2.epsilonOnlyTransitions || n2.transitions.length <= 1), n2 instanceof ot) this.checkCondition(null !== n2.loopBackState);
      else if (n2 instanceof rt) if (this.checkCondition(null !== n2.loopBackState), this.checkCondition(2 === n2.transitions.length), n2.transitions[0].target instanceof at) this.checkCondition(n2.transitions[1].target instanceof tt), this.checkCondition(!n2.nonGreedy);
      else {
        if (!(n2.transitions[0].target instanceof tt)) throw "IllegalState";
        this.checkCondition(n2.transitions[1].target instanceof at), this.checkCondition(n2.nonGreedy);
      }
      else n2 instanceof it ? (this.checkCondition(1 === n2.transitions.length), this.checkCondition(n2.transitions[0].target instanceof rt)) : n2 instanceof tt ? this.checkCondition(null !== n2.loopBackState) : n2 instanceof et ? this.checkCondition(null !== n2.stopState) : n2 instanceof Z ? this.checkCondition(null !== n2.endState) : n2 instanceof Q ? this.checkCondition(null !== n2.startState) : n2 instanceof J ? this.checkCondition(n2.transitions.length <= 1 || n2.decision >= 0) : this.checkCondition(n2.transitions.length <= 1 || n2 instanceof A);
    }
  }
  checkCondition(t2, e2) {
    if (!t2) throw null == e2 && (e2 = "IllegalState"), e2;
  }
  readInt() {
    return this.data[this.pos++];
  }
  readInt32() {
    return this.readInt() | this.readInt() << 16;
  }
  edgeFactory(t2, e2, n2, s2, r2, o2, a2, l2) {
    const h2 = t2.states[s2];
    switch (e2) {
      case N.EPSILON:
        return new dt(h2);
      case N.RANGE:
        return new ct(h2, 0 !== a2 ? i.EOF : r2, o2);
      case N.RULE:
        return new k(t2.states[r2], o2, a2, h2);
      case N.PREDICATE:
        return new pt(h2, r2, o2, 0 !== a2);
      case N.PRECEDENCE:
        return new xt(h2, r2);
      case N.ATOM:
        return new ht(h2, 0 !== a2 ? i.EOF : r2);
      case N.ACTION:
        return new ut(h2, r2, o2, 0 !== a2);
      case N.SET:
        return new I(h2, l2[r2]);
      case N.NOT_SET:
        return new y(h2, l2[r2]);
      case N.WILDCARD:
        return new L(h2);
      default:
        throw "The specified transition type: " + e2 + " is not valid.";
    }
  }
  stateFactory(t2, e2) {
    if (null === this.stateFactories) {
      const t3 = [];
      t3[C.INVALID_TYPE] = null, t3[C.BASIC] = () => new X(), t3[C.RULE_START] = () => new et(), t3[C.BLOCK_START] = () => new lt(), t3[C.PLUS_BLOCK_START] = () => new ot(), t3[C.STAR_BLOCK_START] = () => new at(), t3[C.TOKEN_START] = () => new nt(), t3[C.RULE_STOP] = () => new A(), t3[C.BLOCK_END] = () => new Q(), t3[C.STAR_LOOP_BACK] = () => new it(), t3[C.STAR_LOOP_ENTRY] = () => new rt(), t3[C.PLUS_LOOP_BACK] = () => new st(), t3[C.LOOP_END] = () => new tt(), this.stateFactories = t3;
    }
    if (t2 > this.stateFactories.length || null === this.stateFactories[t2]) throw "The specified state type " + t2 + " is not valid.";
    {
      const n2 = this.stateFactories[t2]();
      if (null !== n2) return n2.ruleIndex = e2, n2;
    }
  }
  lexerActionFactory(t2, e2, n2) {
    if (null === this.actionFactories) {
      const t3 = [];
      t3[0] = (t4, e3) => new Et(t4), t3[1] = (t4, e3) => new _t(t4, e3), t3[2] = (t4, e3) => new It(t4), t3[3] = (t4, e3) => Ct.INSTANCE, t3[4] = (t4, e3) => kt.INSTANCE, t3[5] = (t4, e3) => new Nt(t4), t3[6] = (t4, e3) => mt.INSTANCE, t3[7] = (t4, e3) => new At(t4), this.actionFactories = t3;
    }
    if (t2 > this.actionFactories.length || null === this.actionFactories[t2]) throw "The specified lexer action type " + t2 + " is not valid.";
    return this.actionFactories[t2](e2, n2);
  }
};
var Ot = class {
  syntaxError(t2, e2, n2, s2, i2, r2) {
  }
  reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
  }
  reportAttemptingFullContext(t2, e2, n2, s2, i2, r2) {
  }
  reportContextSensitivity(t2, e2, n2, s2, i2, r2) {
  }
};
var Rt = class extends Ot {
  constructor() {
    super();
  }
  syntaxError(t2, e2, n2, s2, i2, r2) {
    console.error("line " + n2 + ":" + s2 + " " + i2);
  }
};
Rt.INSTANCE = new Rt();
var wt = class extends Ot {
  constructor(t2) {
    if (super(), null === t2) throw "delegates";
    return this.delegates = t2, this;
  }
  syntaxError(t2, e2, n2, s2, i2, r2) {
    this.delegates.map((o2) => o2.syntaxError(t2, e2, n2, s2, i2, r2));
  }
  reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
    this.delegates.map((a2) => a2.reportAmbiguity(t2, e2, n2, s2, i2, r2, o2));
  }
  reportAttemptingFullContext(t2, e2, n2, s2, i2, r2) {
    this.delegates.map((o2) => o2.reportAttemptingFullContext(t2, e2, n2, s2, i2, r2));
  }
  reportContextSensitivity(t2, e2, n2, s2, i2, r2) {
    this.delegates.map((o2) => o2.reportContextSensitivity(t2, e2, n2, s2, i2, r2));
  }
};
var vt = class {
  constructor() {
    this._listeners = [Rt.INSTANCE], this._interp = null, this._stateNumber = -1;
  }
  checkVersion(t2) {
    const e2 = "4.13.2";
    e2 !== t2 && console.log("ANTLR runtime and generated code versions disagree: " + e2 + "!=" + t2);
  }
  addErrorListener(t2) {
    this._listeners.push(t2);
  }
  removeErrorListeners() {
    this._listeners = [];
  }
  getLiteralNames() {
    return Object.getPrototypeOf(this).constructor.literalNames || [];
  }
  getSymbolicNames() {
    return Object.getPrototypeOf(this).constructor.symbolicNames || [];
  }
  getTokenNames() {
    if (!this.tokenNames) {
      const t2 = this.getLiteralNames(), e2 = this.getSymbolicNames(), n2 = t2.length > e2.length ? t2.length : e2.length;
      this.tokenNames = [];
      for (let s2 = 0; s2 < n2; s2++) this.tokenNames[s2] = t2[s2] || e2[s2] || "<INVALID";
    }
    return this.tokenNames;
  }
  getTokenTypeMap() {
    const t2 = this.getTokenNames();
    if (null === t2) throw "The current recognizer does not provide a list of token names.";
    let e2 = this.tokenTypeMapCache[t2];
    return void 0 === e2 && (e2 = t2.reduce(function(t3, e3, n2) {
      t3[e3] = n2;
    }), e2.EOF = i.EOF, this.tokenTypeMapCache[t2] = e2), e2;
  }
  getRuleIndexMap() {
    const t2 = this.ruleNames;
    if (null === t2) throw "The current recognizer does not provide a list of rule names.";
    let e2 = this.ruleIndexMapCache[t2];
    return void 0 === e2 && (e2 = t2.reduce(function(t3, e3, n2) {
      t3[e3] = n2;
    }), this.ruleIndexMapCache[t2] = e2), e2;
  }
  getTokenType(t2) {
    const e2 = this.getTokenTypeMap()[t2];
    return void 0 !== e2 ? e2 : i.INVALID_TYPE;
  }
  getErrorHeader(t2) {
    return "line " + t2.getOffendingToken().line + ":" + t2.getOffendingToken().column;
  }
  getTokenErrorDisplay(t2) {
    if (null === t2) return "<no token>";
    let e2 = t2.text;
    return null === e2 && (e2 = t2.type === i.EOF ? "<EOF>" : "<" + t2.type + ">"), e2 = e2.replace("\n", "\\n").replace("\r", "\\r").replace("	", "\\t"), "'" + e2 + "'";
  }
  getErrorListenerDispatch() {
    return console.warn("Calling deprecated method in Recognizer class: getErrorListenerDispatch()"), this.getErrorListener();
  }
  getErrorListener() {
    return new wt(this._listeners);
  }
  sempred(t2, e2, n2) {
    return true;
  }
  precpred(t2, e2) {
    return true;
  }
  get atn() {
    return this._interp.atn;
  }
  get state() {
    return this._stateNumber;
  }
  set state(t2) {
    this._stateNumber = t2;
  }
};
vt.tokenTypeMapCache = {}, vt.ruleIndexMapCache = {};
var Pt = class _Pt extends i {
  constructor(t2, e2, n2, s2, r2) {
    super(), this.source = void 0 !== t2 ? t2 : _Pt.EMPTY_SOURCE, this.type = void 0 !== e2 ? e2 : null, this.channel = void 0 !== n2 ? n2 : i.DEFAULT_CHANNEL, this.start = void 0 !== s2 ? s2 : -1, this.stop = void 0 !== r2 ? r2 : -1, this.tokenIndex = -1, null !== this.source[0] ? (this.line = t2[0].line, this.column = t2[0].column) : this.column = -1;
  }
  clone() {
    const t2 = new _Pt(this.source, this.type, this.channel, this.start, this.stop);
    return t2.tokenIndex = this.tokenIndex, t2.line = this.line, t2.column = this.column, t2.text = this.text, t2;
  }
  cloneWithType(t2) {
    const e2 = new _Pt(this.source, t2, this.channel, this.start, this.stop);
    return e2.tokenIndex = this.tokenIndex, e2.line = this.line, e2.column = this.column, t2 === i.EOF && (e2.text = ""), e2;
  }
  toString() {
    let t2 = this.text;
    return t2 = null !== t2 ? t2.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "<no text>", "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + t2 + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]";
  }
  get text() {
    if (null !== this._text) return this._text;
    const t2 = this.getInputStream();
    if (null === t2) return null;
    const e2 = t2.size;
    return this.start < e2 && this.stop < e2 ? t2.getText(this.start, this.stop) : "<EOF>";
  }
  set text(t2) {
    this._text = t2;
  }
};
Pt.EMPTY_SOURCE = [null, null];
var bt = class {
};
var Dt = class extends bt {
  constructor(t2) {
    super(), this.copyText = void 0 !== t2 && t2;
  }
  create(t2, e2, n2, s2, i2, r2, o2, a2) {
    const l2 = new Pt(t2, e2, s2, i2, r2);
    return l2.line = o2, l2.column = a2, null !== n2 ? l2.text = n2 : this.copyText && null !== t2[1] && (l2.text = t2[1].getText(i2, r2)), l2;
  }
  createThin(t2, e2) {
    const n2 = new Pt(null, t2);
    return n2.text = e2, n2;
  }
};
Dt.DEFAULT = new Dt();
var Ft = class _Ft extends Error {
  constructor(t2) {
    super(t2.message), Error.captureStackTrace && Error.captureStackTrace(this, _Ft), this.message = t2.message, this.recognizer = t2.recognizer, this.input = t2.input, this.ctx = t2.ctx, this.offendingToken = null, this.offendingState = -1, null !== this.recognizer && (this.offendingState = this.recognizer.state);
  }
  getExpectedTokens() {
    return null !== this.recognizer ? this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx) : null;
  }
  toString() {
    return this.message;
  }
};
var Mt = class extends Ft {
  constructor(t2, e2, n2, s2) {
    super({ message: "", recognizer: t2, input: e2, ctx: null }), this.startIndex = n2, this.deadEndConfigs = s2;
  }
  toString() {
    let t2 = "";
    return this.startIndex >= 0 && this.startIndex < this.input.size && (t2 = this.input.getText(new E(this.startIndex, this.startIndex))), "LexerNoViableAltException" + t2;
  }
};
var Ut = class _Ut extends vt {
  constructor(t2) {
    super(), this._input = t2, this._factory = Dt.DEFAULT, this._tokenFactorySourcePair = [this, t2], this._interp = null, this._token = null, this._tokenStartCharIndex = -1, this._tokenStartLine = -1, this._tokenStartColumn = -1, this._hitEOF = false, this._channel = i.DEFAULT_CHANNEL, this._type = i.INVALID_TYPE, this._modeStack = [], this._mode = _Ut.DEFAULT_MODE, this._text = null;
  }
  reset() {
    null !== this._input && this._input.seek(0), this._token = null, this._type = i.INVALID_TYPE, this._channel = i.DEFAULT_CHANNEL, this._tokenStartCharIndex = -1, this._tokenStartColumn = -1, this._tokenStartLine = -1, this._text = null, this._hitEOF = false, this._mode = _Ut.DEFAULT_MODE, this._modeStack = [], this._interp.reset();
  }
  nextToken() {
    if (null === this._input) throw "nextToken requires a non-null input stream.";
    const t2 = this._input.mark();
    try {
      for (; ; ) {
        if (this._hitEOF) return this.emitEOF(), this._token;
        this._token = null, this._channel = i.DEFAULT_CHANNEL, this._tokenStartCharIndex = this._input.index, this._tokenStartColumn = this._interp.column, this._tokenStartLine = this._interp.line, this._text = null;
        let t3 = false;
        for (; ; ) {
          this._type = i.INVALID_TYPE;
          let e2 = _Ut.SKIP;
          try {
            e2 = this._interp.match(this._input, this._mode);
          } catch (t4) {
            if (!(t4 instanceof Ft)) throw console.log(t4.stack), t4;
            this.notifyListeners(t4), this.recover(t4);
          }
          if (this._input.LA(1) === i.EOF && (this._hitEOF = true), this._type === i.INVALID_TYPE && (this._type = e2), this._type === _Ut.SKIP) {
            t3 = true;
            break;
          }
          if (this._type !== _Ut.MORE) break;
        }
        if (!t3) return null === this._token && this.emit(), this._token;
      }
    } finally {
      this._input.release(t2);
    }
  }
  skip() {
    this._type = _Ut.SKIP;
  }
  more() {
    this._type = _Ut.MORE;
  }
  mode(t2) {
    console.warn("Calling deprecated method in Lexer class: mode(...)"), this.setMode(t2);
  }
  setMode(t2) {
    this._mode = t2;
  }
  getMode() {
    return this._mode;
  }
  getModeStack() {
    return this._modeStack;
  }
  pushMode(t2) {
    this._interp.debug && console.log("pushMode " + t2), this._modeStack.push(this._mode), this.setMode(t2);
  }
  popMode() {
    if (0 === this._modeStack.length) throw "Empty Stack";
    return this._interp.debug && console.log("popMode back to " + this._modeStack.slice(0, -1)), this.setMode(this._modeStack.pop()), this._mode;
  }
  emitToken(t2) {
    this._token = t2;
  }
  emit() {
    const t2 = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.getCharIndex() - 1, this._tokenStartLine, this._tokenStartColumn);
    return this.emitToken(t2), t2;
  }
  emitEOF() {
    const t2 = this.column, e2 = this.line, n2 = this._factory.create(this._tokenFactorySourcePair, i.EOF, null, i.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, e2, t2);
    return this.emitToken(n2), n2;
  }
  getCharIndex() {
    return this._input.index;
  }
  getAllTokens() {
    const t2 = [];
    let e2 = this.nextToken();
    for (; e2.type !== i.EOF; ) t2.push(e2), e2 = this.nextToken();
    return t2;
  }
  notifyListeners(t2) {
    const e2 = this._tokenStartCharIndex, n2 = this._input.index, s2 = this._input.getText(e2, n2), i2 = "token recognition error at: '" + this.getErrorDisplay(s2) + "'";
    this.getErrorListener().syntaxError(this, null, this._tokenStartLine, this._tokenStartColumn, i2, t2);
  }
  getErrorDisplay(t2) {
    const e2 = [];
    for (let n2 = 0; n2 < t2.length; n2++) e2.push(t2[n2]);
    return e2.join("");
  }
  getErrorDisplayForChar(t2) {
    return t2.charCodeAt(0) === i.EOF ? "<EOF>" : "\n" === t2 ? "\\n" : "	" === t2 ? "\\t" : "\r" === t2 ? "\\r" : t2;
  }
  getCharErrorDisplay(t2) {
    return "'" + this.getErrorDisplayForChar(t2) + "'";
  }
  recover(t2) {
    this._input.LA(1) !== i.EOF && (t2 instanceof Mt ? this._interp.consume(this._input) : this._input.consume());
  }
  get inputStream() {
    return this._input;
  }
  set inputStream(t2) {
    this._input = null, this._tokenFactorySourcePair = [this, this._input], this.reset(), this._input = t2, this._tokenFactorySourcePair = [this, this._input];
  }
  get sourceName() {
    return this._input.sourceName;
  }
  get type() {
    return this._type;
  }
  set type(t2) {
    this._type = t2;
  }
  get line() {
    return this._interp.line;
  }
  set line(t2) {
    this._interp.line = t2;
  }
  get column() {
    return this._interp.column;
  }
  set column(t2) {
    this._interp.column = t2;
  }
  get text() {
    return null !== this._text ? this._text : this._interp.getText(this._input);
  }
  set text(t2) {
    this._text = t2;
  }
};
function Bt(t2) {
  return t2.hashCodeForConfigSet();
}
function zt(t2, e2) {
  return t2 === e2 || null !== t2 && null !== e2 && t2.equalsForConfigSet(e2);
}
Ut.DEFAULT_MODE = 0, Ut.MORE = -2, Ut.SKIP = -3, Ut.DEFAULT_TOKEN_CHANNEL = i.DEFAULT_CHANNEL, Ut.HIDDEN = i.HIDDEN_CHANNEL, Ut.MIN_CHAR_VALUE = 0, Ut.MAX_CHAR_VALUE = 1114111;
var Vt = class _Vt {
  constructor(t2) {
    this.configLookup = new g(Bt, zt), this.fullCtx = void 0 === t2 || t2, this.readOnly = false, this.configs = [], this.uniqueAlt = 0, this.conflictingAlts = null, this.hasSemanticContext = false, this.dipsIntoOuterContext = false, this.cachedHashCode = -1;
  }
  add(t2, e2) {
    if (void 0 === e2 && (e2 = null), this.readOnly) throw "This set is readonly";
    t2.semanticContext !== p.NONE && (this.hasSemanticContext = true), t2.reachesIntoOuterContext > 0 && (this.dipsIntoOuterContext = true);
    const n2 = this.configLookup.getOrAdd(t2);
    if (n2 === t2) return this.cachedHashCode = -1, this.configs.push(t2), true;
    const s2 = !this.fullCtx, i2 = G(n2.context, t2.context, s2, e2);
    return n2.reachesIntoOuterContext = Math.max(n2.reachesIntoOuterContext, t2.reachesIntoOuterContext), t2.precedenceFilterSuppressed && (n2.precedenceFilterSuppressed = true), n2.context = i2, true;
  }
  getStates() {
    const t2 = new g();
    for (let e2 = 0; e2 < this.configs.length; e2++) t2.add(this.configs[e2].state);
    return t2;
  }
  getPredicates() {
    const t2 = [];
    for (let e2 = 0; e2 < this.configs.length; e2++) {
      const n2 = this.configs[e2].semanticContext;
      n2 !== p.NONE && t2.push(n2.semanticContext);
    }
    return t2;
  }
  optimizeConfigs(t2) {
    if (this.readOnly) throw "This set is readonly";
    if (0 !== this.configLookup.length) for (let e2 = 0; e2 < this.configs.length; e2++) {
      const n2 = this.configs[e2];
      n2.context = t2.getCachedContext(n2.context);
    }
  }
  addAll(t2) {
    for (let e2 = 0; e2 < t2.length; e2++) this.add(t2[e2]);
    return false;
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Vt && r(this.configs, t2.configs) && this.fullCtx === t2.fullCtx && this.uniqueAlt === t2.uniqueAlt && this.conflictingAlts === t2.conflictingAlts && this.hasSemanticContext === t2.hasSemanticContext && this.dipsIntoOuterContext === t2.dipsIntoOuterContext;
  }
  hashCode() {
    const t2 = new l();
    return t2.update(this.configs), t2.finish();
  }
  updateHashCode(t2) {
    this.readOnly ? (-1 === this.cachedHashCode && (this.cachedHashCode = this.hashCode()), t2.update(this.cachedHashCode)) : t2.update(this.hashCode());
  }
  isEmpty() {
    return 0 === this.configs.length;
  }
  contains(t2) {
    if (null === this.configLookup) throw "This method is not implemented for readonly sets.";
    return this.configLookup.contains(t2);
  }
  containsFast(t2) {
    if (null === this.configLookup) throw "This method is not implemented for readonly sets.";
    return this.configLookup.containsFast(t2);
  }
  clear() {
    if (this.readOnly) throw "This set is readonly";
    this.configs = [], this.cachedHashCode = -1, this.configLookup = new g();
  }
  setReadonly(t2) {
    this.readOnly = t2, t2 && (this.configLookup = null);
  }
  toString() {
    return d(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== $.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (null !== this.conflictingAlts ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : "");
  }
  get items() {
    return this.configs;
  }
  get length() {
    return this.configs.length;
  }
};
var qt = class _qt {
  constructor(t2, e2) {
    return null === t2 && (t2 = -1), null === e2 && (e2 = new Vt()), this.stateNumber = t2, this.configs = e2, this.edges = null, this.isAcceptState = false, this.prediction = 0, this.lexerActionExecutor = null, this.requiresFullContext = false, this.predicates = null, this;
  }
  getAltSet() {
    const t2 = new g();
    if (null !== this.configs) for (let e2 = 0; e2 < this.configs.length; e2++) {
      const n2 = this.configs[e2];
      t2.add(n2.alt);
    }
    return 0 === t2.length ? null : t2;
  }
  equals(t2) {
    return this === t2 || t2 instanceof _qt && this.configs.equals(t2.configs);
  }
  toString() {
    let t2 = this.stateNumber + ":" + this.configs;
    return this.isAcceptState && (t2 += "=>", null !== this.predicates ? t2 += this.predicates : t2 += this.prediction), t2;
  }
  hashCode() {
    const t2 = new l();
    return t2.update(this.configs), t2.finish();
  }
};
var Ht = class {
  constructor(t2, e2) {
    return this.atn = t2, this.sharedContextCache = e2, this;
  }
  getCachedContext(t2) {
    if (null === this.sharedContextCache) return t2;
    const e2 = new H();
    return Y(t2, this.sharedContextCache, e2);
  }
};
Ht.ERROR = new qt(2147483647, new Vt());
var Kt = class extends Vt {
  constructor() {
    super(), this.configLookup = new g();
  }
};
var Yt = class _Yt extends m {
  constructor(t2, e2) {
    super(t2, e2);
    const n2 = t2.lexerActionExecutor || null;
    return this.lexerActionExecutor = n2 || (null !== e2 ? e2.lexerActionExecutor : null), this.passedThroughNonGreedyDecision = null !== e2 && this.checkNonGreedyDecision(e2, this.state), this.hashCodeForConfigSet = _Yt.prototype.hashCode, this.equalsForConfigSet = _Yt.prototype.equals, this;
  }
  updateHashCode(t2) {
    t2.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Yt && this.passedThroughNonGreedyDecision === t2.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(t2.lexerActionExecutor) : !t2.lexerActionExecutor) && super.equals(t2);
  }
  checkNonGreedyDecision(t2, e2) {
    return t2.passedThroughNonGreedyDecision || e2 instanceof J && e2.nonGreedy;
  }
};
var Gt = class _Gt extends St {
  constructor(t2, e2) {
    super(e2.actionType), this.offset = t2, this.action = e2, this.isPositionDependent = true;
  }
  execute(t2) {
    this.action.execute(t2);
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.offset, this.action);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Gt && this.offset === t2.offset && this.action === t2.action;
  }
};
var Wt = class _Wt {
  constructor(t2) {
    return this.lexerActions = null === t2 ? [] : t2, this.cachedHashCode = l.hashStuff(t2), this;
  }
  fixOffsetBeforeMatch(t2) {
    let e2 = null;
    for (let n2 = 0; n2 < this.lexerActions.length; n2++) !this.lexerActions[n2].isPositionDependent || this.lexerActions[n2] instanceof Gt || (null === e2 && (e2 = this.lexerActions.concat([])), e2[n2] = new Gt(t2, this.lexerActions[n2]));
    return null === e2 ? this : new _Wt(e2);
  }
  execute(t2, e2, n2) {
    let s2 = false;
    const i2 = e2.index;
    try {
      for (let r2 = 0; r2 < this.lexerActions.length; r2++) {
        let o2 = this.lexerActions[r2];
        if (o2 instanceof Gt) {
          const t3 = o2.offset;
          e2.seek(n2 + t3), o2 = o2.action, s2 = n2 + t3 !== i2;
        } else o2.isPositionDependent && (e2.seek(i2), s2 = false);
        o2.execute(t2);
      }
    } finally {
      s2 && e2.seek(i2);
    }
  }
  hashCode() {
    return this.cachedHashCode;
  }
  updateHashCode(t2) {
    t2.update(this.cachedHashCode);
  }
  equals(t2) {
    if (this === t2) return true;
    if (t2 instanceof _Wt) {
      if (this.cachedHashCode != t2.cachedHashCode) return false;
      if (this.lexerActions.length != t2.lexerActions.length) return false;
      {
        const e2 = this.lexerActions.length;
        for (let n2 = 0; n2 < e2; ++n2) if (!this.lexerActions[n2].equals(t2.lexerActions[n2])) return false;
        return true;
      }
    }
    return false;
  }
  static append(t2, e2) {
    if (null === t2) return new _Wt([e2]);
    const n2 = t2.lexerActions.concat([e2]);
    return new _Wt(n2);
  }
};
function jt(t2) {
  t2.index = -1, t2.line = 0, t2.column = -1, t2.dfaState = null;
}
var $t = class {
  constructor() {
    jt(this);
  }
  reset() {
    jt(this);
  }
};
var Xt = class _Xt extends Ht {
  constructor(t2, e2, n2, s2) {
    super(e2, s2), this.decisionToDFA = n2, this.recog = t2, this.startIndex = -1, this.line = 1, this.column = 0, this.mode = Ut.DEFAULT_MODE, this.prevAccept = new $t();
  }
  copyState(t2) {
    this.column = t2.column, this.line = t2.line, this.mode = t2.mode, this.startIndex = t2.startIndex;
  }
  match(t2, e2) {
    this.mode = e2;
    const n2 = t2.mark();
    try {
      this.startIndex = t2.index, this.prevAccept.reset();
      const n3 = this.decisionToDFA[e2];
      return null === n3.s0 ? this.matchATN(t2) : this.execATN(t2, n3.s0);
    } finally {
      t2.release(n2);
    }
  }
  reset() {
    this.prevAccept.reset(), this.startIndex = -1, this.line = 1, this.column = 0, this.mode = Ut.DEFAULT_MODE;
  }
  matchATN(t2) {
    const e2 = this.atn.modeToStartState[this.mode];
    _Xt.debug && console.log("matchATN mode " + this.mode + " start: " + e2);
    const n2 = this.mode, s2 = this.computeStartState(t2, e2), i2 = s2.hasSemanticContext;
    s2.hasSemanticContext = false;
    const r2 = this.addDFAState(s2);
    i2 || (this.decisionToDFA[this.mode].s0 = r2);
    const o2 = this.execATN(t2, r2);
    return _Xt.debug && console.log("DFA after matchATN: " + this.decisionToDFA[n2].toLexerString()), o2;
  }
  execATN(t2, e2) {
    _Xt.debug && console.log("start state closure=" + e2.configs), e2.isAcceptState && this.captureSimState(this.prevAccept, t2, e2);
    let n2 = t2.LA(1), s2 = e2;
    for (; ; ) {
      _Xt.debug && console.log("execATN loop starting closure: " + s2.configs);
      let e3 = this.getExistingTargetState(s2, n2);
      if (null === e3 && (e3 = this.computeTargetState(t2, s2, n2)), e3 === Ht.ERROR) break;
      if (n2 !== i.EOF && this.consume(t2), e3.isAcceptState && (this.captureSimState(this.prevAccept, t2, e3), n2 === i.EOF)) break;
      n2 = t2.LA(1), s2 = e3;
    }
    return this.failOrAccept(this.prevAccept, t2, s2.configs, n2);
  }
  getExistingTargetState(t2, e2) {
    if (null === t2.edges || e2 < _Xt.MIN_DFA_EDGE || e2 > _Xt.MAX_DFA_EDGE) return null;
    let n2 = t2.edges[e2 - _Xt.MIN_DFA_EDGE];
    return void 0 === n2 && (n2 = null), _Xt.debug && null !== n2 && console.log("reuse state " + t2.stateNumber + " edge to " + n2.stateNumber), n2;
  }
  computeTargetState(t2, e2, n2) {
    const s2 = new Kt();
    return this.getReachableConfigSet(t2, e2.configs, s2, n2), 0 === s2.items.length ? (s2.hasSemanticContext || this.addDFAEdge(e2, n2, Ht.ERROR), Ht.ERROR) : this.addDFAEdge(e2, n2, null, s2);
  }
  failOrAccept(t2, e2, n2, s2) {
    if (null !== this.prevAccept.dfaState) {
      const n3 = t2.dfaState.lexerActionExecutor;
      return this.accept(e2, n3, this.startIndex, t2.index, t2.line, t2.column), t2.dfaState.prediction;
    }
    if (s2 === i.EOF && e2.index === this.startIndex) return i.EOF;
    throw new Mt(this.recog, e2, this.startIndex, n2);
  }
  getReachableConfigSet(t2, e2, n2, s2) {
    let r2 = $.INVALID_ALT_NUMBER;
    for (let o2 = 0; o2 < e2.items.length; o2++) {
      const a2 = e2.items[o2], l2 = a2.alt === r2;
      if (!l2 || !a2.passedThroughNonGreedyDecision) {
        _Xt.debug && console.log("testing %s at %s\n", this.getTokenName(s2), a2.toString(this.recog, true));
        for (let e3 = 0; e3 < a2.state.transitions.length; e3++) {
          const o3 = a2.state.transitions[e3], h2 = this.getReachableTarget(o3, s2);
          if (null !== h2) {
            let e4 = a2.lexerActionExecutor;
            null !== e4 && (e4 = e4.fixOffsetBeforeMatch(t2.index - this.startIndex));
            const o4 = s2 === i.EOF, c2 = new Yt({ state: h2, lexerActionExecutor: e4 }, a2);
            this.closure(t2, c2, n2, l2, true, o4) && (r2 = a2.alt);
          }
        }
      }
    }
  }
  accept(t2, e2, n2, s2, i2, r2) {
    _Xt.debug && console.log("ACTION %s\n", e2), t2.seek(s2), this.line = i2, this.column = r2, null !== e2 && null !== this.recog && e2.execute(this.recog, t2, n2);
  }
  getReachableTarget(t2, e2) {
    return t2.matches(e2, 0, Ut.MAX_CHAR_VALUE) ? t2.target : null;
  }
  computeStartState(t2, e2) {
    const n2 = B.EMPTY, s2 = new Kt();
    for (let i2 = 0; i2 < e2.transitions.length; i2++) {
      const r2 = e2.transitions[i2].target, o2 = new Yt({ state: r2, alt: i2 + 1, context: n2 }, null);
      this.closure(t2, o2, s2, false, false, false);
    }
    return s2;
  }
  closure(t2, e2, n2, s2, i2, r2) {
    let o2 = null;
    if (_Xt.debug && console.log("closure(" + e2.toString(this.recog, true) + ")"), e2.state instanceof A) {
      if (_Xt.debug && (null !== this.recog ? console.log("closure at %s rule stop %s\n", this.recog.ruleNames[e2.state.ruleIndex], e2) : console.log("closure at rule stop %s\n", e2)), null === e2.context || e2.context.hasEmptyPath()) {
        if (null === e2.context || e2.context.isEmpty()) return n2.add(e2), true;
        n2.add(new Yt({ state: e2.state, context: B.EMPTY }, e2)), s2 = true;
      }
      if (null !== e2.context && !e2.context.isEmpty()) {
        for (let a2 = 0; a2 < e2.context.length; a2++) if (e2.context.getReturnState(a2) !== B.EMPTY_RETURN_STATE) {
          const l2 = e2.context.getParent(a2), h2 = this.atn.states[e2.context.getReturnState(a2)];
          o2 = new Yt({ state: h2, context: l2 }, e2), s2 = this.closure(t2, o2, n2, s2, i2, r2);
        }
      }
      return s2;
    }
    e2.state.epsilonOnlyTransitions || s2 && e2.passedThroughNonGreedyDecision || n2.add(e2);
    for (let a2 = 0; a2 < e2.state.transitions.length; a2++) {
      const l2 = e2.state.transitions[a2];
      o2 = this.getEpsilonTarget(t2, e2, l2, n2, i2, r2), null !== o2 && (s2 = this.closure(t2, o2, n2, s2, i2, r2));
    }
    return s2;
  }
  getEpsilonTarget(t2, e2, n2, s2, r2, o2) {
    let a2 = null;
    if (n2.serializationType === N.RULE) {
      const t3 = V.create(e2.context, n2.followState.stateNumber);
      a2 = new Yt({ state: n2.target, context: t3 }, e2);
    } else {
      if (n2.serializationType === N.PRECEDENCE) throw "Precedence predicates are not supported in lexers.";
      if (n2.serializationType === N.PREDICATE) _Xt.debug && console.log("EVAL rule " + n2.ruleIndex + ":" + n2.predIndex), s2.hasSemanticContext = true, this.evaluatePredicate(t2, n2.ruleIndex, n2.predIndex, r2) && (a2 = new Yt({ state: n2.target }, e2));
      else if (n2.serializationType === N.ACTION) if (null === e2.context || e2.context.hasEmptyPath()) {
        const t3 = Wt.append(e2.lexerActionExecutor, this.atn.lexerActions[n2.actionIndex]);
        a2 = new Yt({ state: n2.target, lexerActionExecutor: t3 }, e2);
      } else a2 = new Yt({ state: n2.target }, e2);
      else n2.serializationType === N.EPSILON ? a2 = new Yt({ state: n2.target }, e2) : n2.serializationType !== N.ATOM && n2.serializationType !== N.RANGE && n2.serializationType !== N.SET || o2 && n2.matches(i.EOF, 0, Ut.MAX_CHAR_VALUE) && (a2 = new Yt({ state: n2.target }, e2));
    }
    return a2;
  }
  evaluatePredicate(t2, e2, n2, s2) {
    if (null === this.recog) return true;
    if (!s2) return this.recog.sempred(null, e2, n2);
    const i2 = this.column, r2 = this.line, o2 = t2.index, a2 = t2.mark();
    try {
      return this.consume(t2), this.recog.sempred(null, e2, n2);
    } finally {
      this.column = i2, this.line = r2, t2.seek(o2), t2.release(a2);
    }
  }
  captureSimState(t2, e2, n2) {
    t2.index = e2.index, t2.line = this.line, t2.column = this.column, t2.dfaState = n2;
  }
  addDFAEdge(t2, e2, n2, s2) {
    if (void 0 === n2 && (n2 = null), void 0 === s2 && (s2 = null), null === n2 && null !== s2) {
      const t3 = s2.hasSemanticContext;
      if (s2.hasSemanticContext = false, n2 = this.addDFAState(s2), t3) return n2;
    }
    return e2 < _Xt.MIN_DFA_EDGE || e2 > _Xt.MAX_DFA_EDGE || (_Xt.debug && console.log("EDGE " + t2 + " -> " + n2 + " upon " + e2), null === t2.edges && (t2.edges = []), t2.edges[e2 - _Xt.MIN_DFA_EDGE] = n2), n2;
  }
  addDFAState(t2) {
    const e2 = new qt(null, t2);
    let n2 = null;
    for (let e3 = 0; e3 < t2.items.length; e3++) {
      const s3 = t2.items[e3];
      if (s3.state instanceof A) {
        n2 = s3;
        break;
      }
    }
    null !== n2 && (e2.isAcceptState = true, e2.lexerActionExecutor = n2.lexerActionExecutor, e2.prediction = this.atn.ruleToTokenType[n2.state.ruleIndex]);
    const s2 = this.decisionToDFA[this.mode], i2 = s2.states.get(e2);
    if (null !== i2) return i2;
    const r2 = e2;
    return r2.stateNumber = s2.states.length, t2.setReadonly(true), r2.configs = t2, s2.states.add(r2), r2;
  }
  getDFA(t2) {
    return this.decisionToDFA[t2];
  }
  getText(t2) {
    return t2.getText(this.startIndex, t2.index - 1);
  }
  consume(t2) {
    t2.LA(1) === "\n".charCodeAt(0) ? (this.line += 1, this.column = 0) : this.column += 1, t2.consume();
  }
  getTokenName(t2) {
    return -1 === t2 ? "EOF" : "'" + String.fromCharCode(t2) + "'";
  }
};
Xt.debug = false, Xt.dfa_debug = false, Xt.MIN_DFA_EDGE = 0, Xt.MAX_DFA_EDGE = 127;
var Jt = class {
  constructor(t2, e2) {
    this.alt = e2, this.pred = t2;
  }
  toString() {
    return "(" + this.pred + ", " + this.alt + ")";
  }
};
var Zt = class {
  constructor() {
    this.data = {};
  }
  get(t2) {
    return this.data["k-" + t2] || null;
  }
  set(t2, e2) {
    this.data["k-" + t2] = e2;
  }
  values() {
    return Object.keys(this.data).filter((t2) => t2.startsWith("k-")).map((t2) => this.data[t2], this);
  }
};
var Qt = { SLL: 0, LL: 1, LL_EXACT_AMBIG_DETECTION: 2, hasSLLConflictTerminatingPrediction: function(t2, e2) {
  if (Qt.allConfigsInRuleStopStates(e2)) return true;
  if (t2 === Qt.SLL && e2.hasSemanticContext) {
    const t3 = new Vt();
    for (let n3 = 0; n3 < e2.items.length; n3++) {
      let s2 = e2.items[n3];
      s2 = new m({ semanticContext: p.NONE }, s2), t3.add(s2);
    }
    e2 = t3;
  }
  const n2 = Qt.getConflictingAltSubsets(e2);
  return Qt.hasConflictingAltSet(n2) && !Qt.hasStateAssociatedWithOneAlt(e2);
}, hasConfigInRuleStopState: function(t2) {
  for (let e2 = 0; e2 < t2.items.length; e2++) if (t2.items[e2].state instanceof A) return true;
  return false;
}, allConfigsInRuleStopStates: function(t2) {
  for (let e2 = 0; e2 < t2.items.length; e2++) if (!(t2.items[e2].state instanceof A)) return false;
  return true;
}, resolvesToJustOneViableAlt: function(t2) {
  return Qt.getSingleViableAlt(t2);
}, allSubsetsConflict: function(t2) {
  return !Qt.hasNonConflictingAltSet(t2);
}, hasNonConflictingAltSet: function(t2) {
  for (let e2 = 0; e2 < t2.length; e2++) if (1 === t2[e2].length) return true;
  return false;
}, hasConflictingAltSet: function(t2) {
  for (let e2 = 0; e2 < t2.length; e2++) if (t2[e2].length > 1) return true;
  return false;
}, allSubsetsEqual: function(t2) {
  let e2 = null;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const s2 = t2[n2];
    if (null === e2) e2 = s2;
    else if (s2 !== e2) return false;
  }
  return true;
}, getUniqueAlt: function(t2) {
  const e2 = Qt.getAlts(t2);
  return 1 === e2.length ? e2.minValue() : $.INVALID_ALT_NUMBER;
}, getAlts: function(t2) {
  const e2 = new W();
  return t2.map(function(t3) {
    e2.or(t3);
  }), e2;
}, getConflictingAltSubsets: function(t2) {
  const e2 = new H();
  return e2.hashFunction = function(t3) {
    l.hashStuff(t3.state.stateNumber, t3.context);
  }, e2.equalsFunction = function(t3, e3) {
    return t3.state.stateNumber === e3.state.stateNumber && t3.context.equals(e3.context);
  }, t2.items.map(function(t3) {
    let n2 = e2.get(t3);
    null === n2 && (n2 = new W(), e2.set(t3, n2)), n2.set(t3.alt);
  }), e2.getValues();
}, getStateToAltMap: function(t2) {
  const e2 = new Zt();
  return t2.items.map(function(t3) {
    let n2 = e2.get(t3.state);
    null === n2 && (n2 = new W(), e2.set(t3.state, n2)), n2.set(t3.alt);
  }), e2;
}, hasStateAssociatedWithOneAlt: function(t2) {
  const e2 = Qt.getStateToAltMap(t2).values();
  for (let t3 = 0; t3 < e2.length; t3++) if (1 === e2[t3].length) return true;
  return false;
}, getSingleViableAlt: function(t2) {
  let e2 = null;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const s2 = t2[n2].minValue();
    if (null === e2) e2 = s2;
    else if (e2 !== s2) return $.INVALID_ALT_NUMBER;
  }
  return e2;
} };
var te = Qt;
var ee = class extends Ft {
  constructor(t2, e2, n2, s2, i2, r2) {
    r2 = r2 || t2._ctx, s2 = s2 || t2.getCurrentToken(), n2 = n2 || t2.getCurrentToken(), e2 = e2 || t2.getInputStream(), super({ message: "", recognizer: t2, input: e2, ctx: r2 }), this.deadEndConfigs = i2, this.startToken = n2, this.offendingToken = s2;
  }
};
var ne = class {
  constructor(t2) {
    this.defaultMapCtor = t2 || H, this.cacheMap = new this.defaultMapCtor();
  }
  get(t2, e2) {
    const n2 = this.cacheMap.get(t2) || null;
    return null === n2 ? null : n2.get(e2) || null;
  }
  set(t2, e2, n2) {
    let s2 = this.cacheMap.get(t2) || null;
    null === s2 && (s2 = new this.defaultMapCtor(), this.cacheMap.set(t2, s2)), s2.set(e2, n2);
  }
};
var se = class extends Ht {
  constructor(t2, e2, n2, s2) {
    super(e2, s2), this.parser = t2, this.decisionToDFA = n2, this.predictionMode = te.LL, this._input = null, this._startIndex = 0, this._outerContext = null, this._dfa = null, this.mergeCache = null, this.debug = false, this.debug_closure = false, this.debug_add = false, this.trace_atn_sim = false, this.dfa_debug = false, this.retry_debug = false;
  }
  reset() {
  }
  adaptivePredict(t2, e2, n2) {
    (this.debug || this.trace_atn_sim) && console.log("adaptivePredict decision " + e2 + " exec LA(1)==" + this.getLookaheadName(t2) + " line " + t2.LT(1).line + ":" + t2.LT(1).column), this._input = t2, this._startIndex = t2.index, this._outerContext = n2;
    const s2 = this.decisionToDFA[e2];
    this._dfa = s2;
    const i2 = t2.mark(), r2 = t2.index;
    try {
      let e3;
      if (e3 = s2.precedenceDfa ? s2.getPrecedenceStartState(this.parser.getPrecedence()) : s2.s0, null === e3) {
        null === n2 && (n2 = U.EMPTY), this.debug && console.log("predictATN decision " + s2.decision + " exec LA(1)==" + this.getLookaheadName(t2) + ", outerContext=" + n2.toString(this.parser.ruleNames));
        const i4 = false;
        let r3 = this.computeStartState(s2.atnStartState, U.EMPTY, i4);
        s2.precedenceDfa ? (s2.s0.configs = r3, r3 = this.applyPrecedenceFilter(r3), e3 = this.addDFAState(s2, new qt(null, r3)), s2.setPrecedenceStartState(this.parser.getPrecedence(), e3)) : (e3 = this.addDFAState(s2, new qt(null, r3)), s2.s0 = e3);
      }
      const i3 = this.execATN(s2, e3, t2, r2, n2);
      return this.debug && console.log("DFA after predictATN: " + s2.toString(this.parser.literalNames, this.parser.symbolicNames)), i3;
    } finally {
      this._dfa = null, this.mergeCache = null, t2.seek(r2), t2.release(i2);
    }
  }
  execATN(t2, e2, n2, s2, r2) {
    let o2;
    (this.debug || this.trace_atn_sim) && console.log("execATN decision " + t2.decision + ", DFA state " + e2 + ", LA(1)==" + this.getLookaheadName(n2) + " line " + n2.LT(1).line + ":" + n2.LT(1).column);
    let a2 = e2;
    this.debug && console.log("s0 = " + e2);
    let l2 = n2.LA(1);
    for (; ; ) {
      let e3 = this.getExistingTargetState(a2, l2);
      if (null === e3 && (e3 = this.computeTargetState(t2, a2, l2)), e3 === Ht.ERROR) {
        const t3 = this.noViableAlt(n2, r2, a2.configs, s2);
        if (n2.seek(s2), o2 = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(a2.configs, r2), o2 !== $.INVALID_ALT_NUMBER) return o2;
        throw t3;
      }
      if (e3.requiresFullContext && this.predictionMode !== te.SLL) {
        let i2 = null;
        if (null !== e3.predicates) {
          this.debug && console.log("DFA state has preds in DFA sim LL failover");
          const t3 = n2.index;
          if (t3 !== s2 && n2.seek(s2), i2 = this.evalSemanticContext(e3.predicates, r2, true), 1 === i2.length) return this.debug && console.log("Full LL avoided"), i2.minValue();
          t3 !== s2 && n2.seek(t3);
        }
        this.dfa_debug && console.log("ctx sensitive state " + r2 + " in " + e3);
        const a3 = true, l3 = this.computeStartState(t2.atnStartState, r2, a3);
        return this.reportAttemptingFullContext(t2, i2, e3.configs, s2, n2.index), o2 = this.execATNWithFullContext(t2, e3, l3, n2, s2, r2), o2;
      }
      if (e3.isAcceptState) {
        if (null === e3.predicates) return e3.prediction;
        const i2 = n2.index;
        n2.seek(s2);
        const o3 = this.evalSemanticContext(e3.predicates, r2, true);
        if (0 === o3.length) throw this.noViableAlt(n2, r2, e3.configs, s2);
        return 1 === o3.length || this.reportAmbiguity(t2, e3, s2, i2, false, o3, e3.configs), o3.minValue();
      }
      a2 = e3, l2 !== i.EOF && (n2.consume(), l2 = n2.LA(1));
    }
  }
  getExistingTargetState(t2, e2) {
    const n2 = t2.edges;
    return null === n2 ? null : n2[e2 + 1] || null;
  }
  computeTargetState(t2, e2, n2) {
    const s2 = this.computeReachSet(e2.configs, n2, false);
    if (null === s2) return this.addDFAEdge(t2, e2, n2, Ht.ERROR), Ht.ERROR;
    let i2 = new qt(null, s2);
    const r2 = this.getUniqueAlt(s2);
    if (this.debug) {
      const t3 = te.getConflictingAltSubsets(s2);
      console.log("SLL altSubSets=" + d(t3) + ", configs=" + s2 + ", predict=" + r2 + ", allSubsetsConflict=" + te.allSubsetsConflict(t3) + ", conflictingAlts=" + this.getConflictingAlts(s2));
    }
    return r2 !== $.INVALID_ALT_NUMBER ? (i2.isAcceptState = true, i2.configs.uniqueAlt = r2, i2.prediction = r2) : te.hasSLLConflictTerminatingPrediction(this.predictionMode, s2) && (i2.configs.conflictingAlts = this.getConflictingAlts(s2), i2.requiresFullContext = true, i2.isAcceptState = true, i2.prediction = i2.configs.conflictingAlts.minValue()), i2.isAcceptState && i2.configs.hasSemanticContext && (this.predicateDFAState(i2, this.atn.getDecisionState(t2.decision)), null !== i2.predicates && (i2.prediction = $.INVALID_ALT_NUMBER)), i2 = this.addDFAEdge(t2, e2, n2, i2), i2;
  }
  predicateDFAState(t2, e2) {
    const n2 = e2.transitions.length, s2 = this.getConflictingAltsOrUniqueAlt(t2.configs), i2 = this.getPredsForAmbigAlts(s2, t2.configs, n2);
    null !== i2 ? (t2.predicates = this.getPredicatePredictions(s2, i2), t2.prediction = $.INVALID_ALT_NUMBER) : t2.prediction = s2.minValue();
  }
  execATNWithFullContext(t2, e2, n2, s2, r2, o2) {
    (this.debug || this.trace_atn_sim) && console.log("execATNWithFullContext " + n2);
    let a2, l2 = false, h2 = n2;
    s2.seek(r2);
    let c2 = s2.LA(1), u2 = -1;
    for (; ; ) {
      if (a2 = this.computeReachSet(h2, c2, true), null === a2) {
        const t4 = this.noViableAlt(s2, o2, h2, r2);
        s2.seek(r2);
        const e3 = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(h2, o2);
        if (e3 !== $.INVALID_ALT_NUMBER) return e3;
        throw t4;
      }
      const t3 = te.getConflictingAltSubsets(a2);
      if (this.debug && console.log("LL altSubSets=" + t3 + ", predict=" + te.getUniqueAlt(t3) + ", resolvesToJustOneViableAlt=" + te.resolvesToJustOneViableAlt(t3)), a2.uniqueAlt = this.getUniqueAlt(a2), a2.uniqueAlt !== $.INVALID_ALT_NUMBER) {
        u2 = a2.uniqueAlt;
        break;
      }
      if (this.predictionMode !== te.LL_EXACT_AMBIG_DETECTION) {
        if (u2 = te.resolvesToJustOneViableAlt(t3), u2 !== $.INVALID_ALT_NUMBER) break;
      } else if (te.allSubsetsConflict(t3) && te.allSubsetsEqual(t3)) {
        l2 = true, u2 = te.getSingleViableAlt(t3);
        break;
      }
      h2 = a2, c2 !== i.EOF && (s2.consume(), c2 = s2.LA(1));
    }
    return a2.uniqueAlt !== $.INVALID_ALT_NUMBER ? (this.reportContextSensitivity(t2, u2, a2, r2, s2.index), u2) : (this.reportAmbiguity(t2, e2, r2, s2.index, l2, null, a2), u2);
  }
  computeReachSet(t2, e2, n2) {
    this.debug && console.log("in computeReachSet, starting closure: " + t2), null === this.mergeCache && (this.mergeCache = new ne());
    const s2 = new Vt(n2);
    let r2 = null;
    for (let o3 = 0; o3 < t2.items.length; o3++) {
      const a2 = t2.items[o3];
      if (this.debug && console.log("testing " + this.getTokenName(e2) + " at " + a2), a2.state instanceof A) (n2 || e2 === i.EOF) && (null === r2 && (r2 = []), r2.push(a2), this.debug_add && console.log("added " + a2 + " to skippedStopStates"));
      else for (let t3 = 0; t3 < a2.state.transitions.length; t3++) {
        const n3 = a2.state.transitions[t3], i2 = this.getReachableTarget(n3, e2);
        if (null !== i2) {
          const t4 = new m({ state: i2 }, a2);
          s2.add(t4, this.mergeCache), this.debug_add && console.log("added " + t4 + " to intermediate");
        }
      }
    }
    let o2 = null;
    if (null === r2 && e2 !== i.EOF && (1 === s2.items.length || this.getUniqueAlt(s2) !== $.INVALID_ALT_NUMBER) && (o2 = s2), null === o2) {
      o2 = new Vt(n2);
      const t3 = new g(), r3 = e2 === i.EOF;
      for (let e3 = 0; e3 < s2.items.length; e3++) this.closure(s2.items[e3], o2, t3, false, n2, r3);
    }
    if (e2 === i.EOF && (o2 = this.removeAllConfigsNotInRuleStopState(o2, o2 === s2)), !(null === r2 || n2 && te.hasConfigInRuleStopState(o2))) for (let t3 = 0; t3 < r2.length; t3++) o2.add(r2[t3], this.mergeCache);
    return this.trace_atn_sim && console.log("computeReachSet " + t2 + " -> " + o2), 0 === o2.items.length ? null : o2;
  }
  removeAllConfigsNotInRuleStopState(t2, e2) {
    if (te.allConfigsInRuleStopStates(t2)) return t2;
    const n2 = new Vt(t2.fullCtx);
    for (let s2 = 0; s2 < t2.items.length; s2++) {
      const r2 = t2.items[s2];
      if (r2.state instanceof A) n2.add(r2, this.mergeCache);
      else if (e2 && r2.state.epsilonOnlyTransitions && this.atn.nextTokens(r2.state).contains(i.EPSILON)) {
        const t3 = this.atn.ruleToStopState[r2.state.ruleIndex];
        n2.add(new m({ state: t3 }, r2), this.mergeCache);
      }
    }
    return n2;
  }
  computeStartState(t2, e2, n2) {
    const s2 = K(this.atn, e2), i2 = new Vt(n2);
    this.trace_atn_sim && console.log("computeStartState from ATN state " + t2 + " initialContext=" + s2.toString(this.parser));
    for (let e3 = 0; e3 < t2.transitions.length; e3++) {
      const r2 = t2.transitions[e3].target, o2 = new m({ state: r2, alt: e3 + 1, context: s2 }, null), a2 = new g();
      this.closure(o2, i2, a2, true, n2, false);
    }
    return i2;
  }
  applyPrecedenceFilter(t2) {
    let e2;
    const n2 = [], s2 = new Vt(t2.fullCtx);
    for (let i2 = 0; i2 < t2.items.length; i2++) {
      if (e2 = t2.items[i2], 1 !== e2.alt) continue;
      const r2 = e2.semanticContext.evalPrecedence(this.parser, this._outerContext);
      null !== r2 && (n2[e2.state.stateNumber] = e2.context, r2 !== e2.semanticContext ? s2.add(new m({ semanticContext: r2 }, e2), this.mergeCache) : s2.add(e2, this.mergeCache));
    }
    for (let i2 = 0; i2 < t2.items.length; i2++) if (e2 = t2.items[i2], 1 !== e2.alt) {
      if (!e2.precedenceFilterSuppressed) {
        const t3 = n2[e2.state.stateNumber] || null;
        if (null !== t3 && t3.equals(e2.context)) continue;
      }
      s2.add(e2, this.mergeCache);
    }
    return s2;
  }
  getReachableTarget(t2, e2) {
    return t2.matches(e2, 0, this.atn.maxTokenType) ? t2.target : null;
  }
  getPredsForAmbigAlts(t2, e2, n2) {
    let s2 = [];
    for (let n3 = 0; n3 < e2.items.length; n3++) {
      const i3 = e2.items[n3];
      t2.get(i3.alt) && (s2[i3.alt] = p.orContext(s2[i3.alt] || null, i3.semanticContext));
    }
    let i2 = 0;
    for (let t3 = 1; t3 < n2 + 1; t3++) {
      const e3 = s2[t3] || null;
      null === e3 ? s2[t3] = p.NONE : e3 !== p.NONE && (i2 += 1);
    }
    return 0 === i2 && (s2 = null), this.debug && console.log("getPredsForAmbigAlts result " + d(s2)), s2;
  }
  getPredicatePredictions(t2, e2) {
    const n2 = [];
    let s2 = false;
    for (let i2 = 1; i2 < e2.length; i2++) {
      const r2 = e2[i2];
      null !== t2 && t2.get(i2) && n2.push(new Jt(r2, i2)), r2 !== p.NONE && (s2 = true);
    }
    return s2 ? n2 : null;
  }
  getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(t2, e2) {
    const n2 = this.splitAccordingToSemanticValidity(t2, e2), s2 = n2[0], i2 = n2[1];
    let r2 = this.getAltThatFinishedDecisionEntryRule(s2);
    return r2 !== $.INVALID_ALT_NUMBER || i2.items.length > 0 && (r2 = this.getAltThatFinishedDecisionEntryRule(i2), r2 !== $.INVALID_ALT_NUMBER) ? r2 : $.INVALID_ALT_NUMBER;
  }
  getAltThatFinishedDecisionEntryRule(t2) {
    const e2 = [];
    for (let n2 = 0; n2 < t2.items.length; n2++) {
      const s2 = t2.items[n2];
      (s2.reachesIntoOuterContext > 0 || s2.state instanceof A && s2.context.hasEmptyPath()) && e2.indexOf(s2.alt) < 0 && e2.push(s2.alt);
    }
    return 0 === e2.length ? $.INVALID_ALT_NUMBER : Math.min.apply(null, e2);
  }
  splitAccordingToSemanticValidity(t2, e2) {
    const n2 = new Vt(t2.fullCtx), s2 = new Vt(t2.fullCtx);
    for (let i2 = 0; i2 < t2.items.length; i2++) {
      const r2 = t2.items[i2];
      r2.semanticContext !== p.NONE ? r2.semanticContext.evaluate(this.parser, e2) ? n2.add(r2) : s2.add(r2) : n2.add(r2);
    }
    return [n2, s2];
  }
  evalSemanticContext(t2, e2, n2) {
    const s2 = new W();
    for (let i2 = 0; i2 < t2.length; i2++) {
      const r2 = t2[i2];
      if (r2.pred === p.NONE) {
        if (s2.set(r2.alt), !n2) break;
        continue;
      }
      const o2 = r2.pred.evaluate(this.parser, e2);
      if ((this.debug || this.dfa_debug) && console.log("eval pred " + r2 + "=" + o2), o2 && ((this.debug || this.dfa_debug) && console.log("PREDICT " + r2.alt), s2.set(r2.alt), !n2)) break;
    }
    return s2;
  }
  closure(t2, e2, n2, s2, i2, r2) {
    this.closureCheckingStopState(t2, e2, n2, s2, i2, 0, r2);
  }
  closureCheckingStopState(t2, e2, n2, s2, i2, r2, o2) {
    if ((this.trace_atn_sim || this.debug_closure) && console.log("closure(" + t2.toString(this.parser, true) + ")"), t2.state instanceof A) {
      if (!t2.context.isEmpty()) {
        for (let a2 = 0; a2 < t2.context.length; a2++) {
          if (t2.context.getReturnState(a2) === B.EMPTY_RETURN_STATE) {
            if (i2) {
              e2.add(new m({ state: t2.state, context: B.EMPTY }, t2), this.mergeCache);
              continue;
            }
            this.debug && console.log("FALLING off rule " + this.getRuleName(t2.state.ruleIndex)), this.closure_(t2, e2, n2, s2, i2, r2, o2);
            continue;
          }
          const l2 = this.atn.states[t2.context.getReturnState(a2)], h2 = t2.context.getParent(a2), c2 = { state: l2, alt: t2.alt, context: h2, semanticContext: t2.semanticContext }, u2 = new m(c2, null);
          u2.reachesIntoOuterContext = t2.reachesIntoOuterContext, this.closureCheckingStopState(u2, e2, n2, s2, i2, r2 - 1, o2);
        }
        return;
      }
      if (i2) return void e2.add(t2, this.mergeCache);
      this.debug && console.log("FALLING off rule " + this.getRuleName(t2.state.ruleIndex));
    }
    this.closure_(t2, e2, n2, s2, i2, r2, o2);
  }
  closure_(t2, e2, n2, s2, i2, r2, o2) {
    const a2 = t2.state;
    a2.epsilonOnlyTransitions || e2.add(t2, this.mergeCache);
    for (let l2 = 0; l2 < a2.transitions.length; l2++) {
      if (0 === l2 && this.canDropLoopEntryEdgeInLeftRecursiveRule(t2)) continue;
      const h2 = a2.transitions[l2], c2 = s2 && !(h2 instanceof ut), u2 = this.getEpsilonTarget(t2, h2, c2, 0 === r2, i2, o2);
      if (null !== u2) {
        let s3 = r2;
        if (t2.state instanceof A) {
          if (null !== this._dfa && this._dfa.precedenceDfa && h2.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex && (u2.precedenceFilterSuppressed = true), u2.reachesIntoOuterContext += 1, n2.getOrAdd(u2) !== u2) continue;
          e2.dipsIntoOuterContext = true, s3 -= 1, this.debug && console.log("dips into outer ctx: " + u2);
        } else {
          if (!h2.isEpsilon && n2.getOrAdd(u2) !== u2) continue;
          h2 instanceof k && s3 >= 0 && (s3 += 1);
        }
        this.closureCheckingStopState(u2, e2, n2, c2, i2, s3, o2);
      }
    }
  }
  canDropLoopEntryEdgeInLeftRecursiveRule(t2) {
    const e2 = t2.state;
    if (e2.stateType !== C.STAR_LOOP_ENTRY) return false;
    if (e2.stateType !== C.STAR_LOOP_ENTRY || !e2.isPrecedenceDecision || t2.context.isEmpty() || t2.context.hasEmptyPath()) return false;
    const n2 = t2.context.length;
    for (let s3 = 0; s3 < n2; s3++) if (this.atn.states[t2.context.getReturnState(s3)].ruleIndex !== e2.ruleIndex) return false;
    const s2 = e2.transitions[0].target.endState.stateNumber, i2 = this.atn.states[s2];
    for (let s3 = 0; s3 < n2; s3++) {
      const n3 = t2.context.getReturnState(s3), r2 = this.atn.states[n3];
      if (1 !== r2.transitions.length || !r2.transitions[0].isEpsilon) return false;
      const o2 = r2.transitions[0].target;
      if (!(r2.stateType === C.BLOCK_END && o2 === e2 || r2 === i2 || o2 === i2 || o2.stateType === C.BLOCK_END && 1 === o2.transitions.length && o2.transitions[0].isEpsilon && o2.transitions[0].target === e2)) return false;
    }
    return true;
  }
  getRuleName(t2) {
    return null !== this.parser && t2 >= 0 ? this.parser.ruleNames[t2] : "<rule " + t2 + ">";
  }
  getEpsilonTarget(t2, e2, n2, s2, r2, o2) {
    switch (e2.serializationType) {
      case N.RULE:
        return this.ruleTransition(t2, e2);
      case N.PRECEDENCE:
        return this.precedenceTransition(t2, e2, n2, s2, r2);
      case N.PREDICATE:
        return this.predTransition(t2, e2, n2, s2, r2);
      case N.ACTION:
        return this.actionTransition(t2, e2);
      case N.EPSILON:
        return new m({ state: e2.target }, t2);
      case N.ATOM:
      case N.RANGE:
      case N.SET:
        return o2 && e2.matches(i.EOF, 0, 1) ? new m({ state: e2.target }, t2) : null;
      default:
        return null;
    }
  }
  actionTransition(t2, e2) {
    if (this.debug) {
      const t3 = -1 === e2.actionIndex ? 65535 : e2.actionIndex;
      console.log("ACTION edge " + e2.ruleIndex + ":" + t3);
    }
    return new m({ state: e2.target }, t2);
  }
  precedenceTransition(t2, e2, n2, s2, i2) {
    this.debug && (console.log("PRED (collectPredicates=" + n2 + ") " + e2.precedence + ">=_p, ctx dependent=true"), null !== this.parser && console.log("context surrounding pred is " + d(this.parser.getRuleInvocationStack())));
    let r2 = null;
    if (n2 && s2) if (i2) {
      const n3 = this._input.index;
      this._input.seek(this._startIndex);
      const s3 = e2.getPredicate().evaluate(this.parser, this._outerContext);
      this._input.seek(n3), s3 && (r2 = new m({ state: e2.target }, t2));
    } else {
      const n3 = p.andContext(t2.semanticContext, e2.getPredicate());
      r2 = new m({ state: e2.target, semanticContext: n3 }, t2);
    }
    else r2 = new m({ state: e2.target }, t2);
    return this.debug && console.log("config from pred transition=" + r2), r2;
  }
  predTransition(t2, e2, n2, s2, i2) {
    this.debug && (console.log("PRED (collectPredicates=" + n2 + ") " + e2.ruleIndex + ":" + e2.predIndex + ", ctx dependent=" + e2.isCtxDependent), null !== this.parser && console.log("context surrounding pred is " + d(this.parser.getRuleInvocationStack())));
    let r2 = null;
    if (n2 && (e2.isCtxDependent && s2 || !e2.isCtxDependent)) if (i2) {
      const n3 = this._input.index;
      this._input.seek(this._startIndex);
      const s3 = e2.getPredicate().evaluate(this.parser, this._outerContext);
      this._input.seek(n3), s3 && (r2 = new m({ state: e2.target }, t2));
    } else {
      const n3 = p.andContext(t2.semanticContext, e2.getPredicate());
      r2 = new m({ state: e2.target, semanticContext: n3 }, t2);
    }
    else r2 = new m({ state: e2.target }, t2);
    return this.debug && console.log("config from pred transition=" + r2), r2;
  }
  ruleTransition(t2, e2) {
    this.debug && console.log("CALL rule " + this.getRuleName(e2.target.ruleIndex) + ", ctx=" + t2.context);
    const n2 = e2.followState, s2 = V.create(t2.context, n2.stateNumber);
    return new m({ state: e2.target, context: s2 }, t2);
  }
  getConflictingAlts(t2) {
    const e2 = te.getConflictingAltSubsets(t2);
    return te.getAlts(e2);
  }
  getConflictingAltsOrUniqueAlt(t2) {
    let e2 = null;
    return t2.uniqueAlt !== $.INVALID_ALT_NUMBER ? (e2 = new W(), e2.set(t2.uniqueAlt)) : e2 = t2.conflictingAlts, e2;
  }
  getTokenName(t2) {
    if (t2 === i.EOF) return "EOF";
    if (null !== this.parser && null !== this.parser.literalNames) {
      if (!(t2 >= this.parser.literalNames.length && t2 >= this.parser.symbolicNames.length)) return (this.parser.literalNames[t2] || this.parser.symbolicNames[t2]) + "<" + t2 + ">";
      console.log(t2 + " ttype out of range: " + this.parser.literalNames), console.log("" + this.parser.getInputStream().getTokens());
    }
    return "" + t2;
  }
  getLookaheadName(t2) {
    return this.getTokenName(t2.LA(1));
  }
  dumpDeadEndConfigs(t2) {
    console.log("dead end configs: ");
    const e2 = t2.getDeadEndConfigs();
    for (let t3 = 0; t3 < e2.length; t3++) {
      const n2 = e2[t3];
      let s2 = "no edges";
      if (n2.state.transitions.length > 0) {
        const t4 = n2.state.transitions[0];
        t4 instanceof ht ? s2 = "Atom " + this.getTokenName(t4.label) : t4 instanceof I && (s2 = (t4 instanceof y ? "~" : "") + "Set " + t4.set);
      }
      console.error(n2.toString(this.parser, true) + ":" + s2);
    }
  }
  noViableAlt(t2, e2, n2, s2) {
    return new ee(this.parser, t2, t2.get(s2), t2.LT(1), n2, e2);
  }
  getUniqueAlt(t2) {
    let e2 = $.INVALID_ALT_NUMBER;
    for (let n2 = 0; n2 < t2.items.length; n2++) {
      const s2 = t2.items[n2];
      if (e2 === $.INVALID_ALT_NUMBER) e2 = s2.alt;
      else if (s2.alt !== e2) return $.INVALID_ALT_NUMBER;
    }
    return e2;
  }
  addDFAEdge(t2, e2, n2, s2) {
    if (this.debug && console.log("EDGE " + e2 + " -> " + s2 + " upon " + this.getTokenName(n2)), null === s2) return null;
    if (s2 = this.addDFAState(t2, s2), null === e2 || n2 < -1 || n2 > this.atn.maxTokenType) return s2;
    if (null === e2.edges && (e2.edges = []), e2.edges[n2 + 1] = s2, this.debug) {
      const e3 = null === this.parser ? null : this.parser.literalNames, n3 = null === this.parser ? null : this.parser.symbolicNames;
      console.log("DFA=\n" + t2.toString(e3, n3));
    }
    return s2;
  }
  addDFAState(t2, e2) {
    if (e2 === Ht.ERROR) return e2;
    const n2 = t2.states.get(e2);
    return null !== n2 ? (this.trace_atn_sim && console.log("addDFAState " + e2 + " exists"), n2) : (e2.stateNumber = t2.states.length, e2.configs.readOnly || (e2.configs.optimizeConfigs(this), e2.configs.setReadonly(true)), this.trace_atn_sim && console.log("addDFAState new " + e2), t2.states.add(e2), this.debug && console.log("adding new DFA state: " + e2), e2);
  }
  reportAttemptingFullContext(t2, e2, n2, s2, i2) {
    if (this.debug || this.retry_debug) {
      const e3 = new E(s2, i2 + 1);
      console.log("reportAttemptingFullContext decision=" + t2.decision + ":" + n2 + ", input=" + this.parser.getTokenStream().getText(e3));
    }
    null !== this.parser && this.parser.getErrorListener().reportAttemptingFullContext(this.parser, t2, s2, i2, e2, n2);
  }
  reportContextSensitivity(t2, e2, n2, s2, i2) {
    if (this.debug || this.retry_debug) {
      const e3 = new E(s2, i2 + 1);
      console.log("reportContextSensitivity decision=" + t2.decision + ":" + n2 + ", input=" + this.parser.getTokenStream().getText(e3));
    }
    null !== this.parser && this.parser.getErrorListener().reportContextSensitivity(this.parser, t2, s2, i2, e2, n2);
  }
  reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
    if (this.debug || this.retry_debug) {
      const t3 = new E(n2, s2 + 1);
      console.log("reportAmbiguity " + r2 + ":" + o2 + ", input=" + this.parser.getTokenStream().getText(t3));
    }
    null !== this.parser && this.parser.getErrorListener().reportAmbiguity(this.parser, t2, n2, s2, i2, r2, o2);
  }
};
var ie = class {
  constructor() {
    this.cache = new H();
  }
  add(t2) {
    if (t2 === B.EMPTY) return B.EMPTY;
    const e2 = this.cache.get(t2) || null;
    return null !== e2 ? e2 : (this.cache.set(t2, t2), t2);
  }
  get(t2) {
    return this.cache.get(t2) || null;
  }
  get length() {
    return this.cache.length;
  }
};
var re = { ATN: $, ATNDeserializer: Lt, LexerATNSimulator: Xt, ParserATNSimulator: se, PredictionMode: te, PredictionContextCache: ie };
var oe = class {
  constructor(t2, e2, n2) {
    this.dfa = t2, this.literalNames = e2 || [], this.symbolicNames = n2 || [];
  }
  toString() {
    if (null === this.dfa.s0) return null;
    let t2 = "";
    const e2 = this.dfa.sortedStates();
    for (let n2 = 0; n2 < e2.length; n2++) {
      const s2 = e2[n2];
      if (null !== s2.edges) {
        const e3 = s2.edges.length;
        for (let n3 = 0; n3 < e3; n3++) {
          const e4 = s2.edges[n3] || null;
          null !== e4 && 2147483647 !== e4.stateNumber && (t2 = t2.concat(this.getStateString(s2)), t2 = t2.concat("-"), t2 = t2.concat(this.getEdgeLabel(n3)), t2 = t2.concat("->"), t2 = t2.concat(this.getStateString(e4)), t2 = t2.concat("\n"));
        }
      }
    }
    return 0 === t2.length ? null : t2;
  }
  getEdgeLabel(t2) {
    return 0 === t2 ? "EOF" : null !== this.literalNames || null !== this.symbolicNames ? this.literalNames[t2 - 1] || this.symbolicNames[t2 - 1] : String.fromCharCode(t2 - 1);
  }
  getStateString(t2) {
    const e2 = (t2.isAcceptState ? ":" : "") + "s" + t2.stateNumber + (t2.requiresFullContext ? "^" : "");
    return t2.isAcceptState ? null !== t2.predicates ? e2 + "=>" + d(t2.predicates) : e2 + "=>" + t2.prediction.toString() : e2;
  }
};
var ae = class extends oe {
  constructor(t2) {
    super(t2, null);
  }
  getEdgeLabel(t2) {
    return "'" + String.fromCharCode(t2) + "'";
  }
};
var le = class {
  constructor(t2, e2) {
    if (void 0 === e2 && (e2 = 0), this.atnStartState = t2, this.decision = e2, this._states = new g(), this.s0 = null, this.precedenceDfa = false, t2 instanceof rt && t2.isPrecedenceDecision) {
      this.precedenceDfa = true;
      const t3 = new qt(null, new Vt());
      t3.edges = [], t3.isAcceptState = false, t3.requiresFullContext = false, this.s0 = t3;
    }
  }
  getPrecedenceStartState(t2) {
    if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
    return t2 < 0 || t2 >= this.s0.edges.length ? null : this.s0.edges[t2] || null;
  }
  setPrecedenceStartState(t2, e2) {
    if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
    t2 < 0 || (this.s0.edges[t2] = e2);
  }
  setPrecedenceDfa(t2) {
    if (this.precedenceDfa !== t2) {
      if (this._states = new g(), t2) {
        const t3 = new qt(null, new Vt());
        t3.edges = [], t3.isAcceptState = false, t3.requiresFullContext = false, this.s0 = t3;
      } else this.s0 = null;
      this.precedenceDfa = t2;
    }
  }
  sortedStates() {
    return this._states.values().sort(function(t2, e2) {
      return t2.stateNumber - e2.stateNumber;
    });
  }
  toString(t2, e2) {
    return t2 = t2 || null, e2 = e2 || null, null === this.s0 ? "" : new oe(this, t2, e2).toString();
  }
  toLexerString() {
    return null === this.s0 ? "" : new ae(this).toString();
  }
  get states() {
    return this._states;
  }
};
var he = { DFA: le, DFASerializer: oe, LexerDFASerializer: ae, PredPrediction: Jt };
var ce = { PredictionContext: B };
var ue = { Interval: E, IntervalSet: _ };
var de = class {
  visitTerminal(t2) {
  }
  visitErrorNode(t2) {
  }
  enterEveryRule(t2) {
  }
  exitEveryRule(t2) {
  }
};
var ge = class {
  visit(t2) {
    return Array.isArray(t2) ? t2.map(function(t3) {
      return t3.accept(this);
    }, this) : t2.accept(this);
  }
  visitChildren(t2) {
    return t2.children ? this.visit(t2.children) : null;
  }
  visitTerminal(t2) {
  }
  visitErrorNode(t2) {
  }
};
var pe = class {
  walk(t2, e2) {
    if (e2 instanceof D || void 0 !== e2.isErrorNode && e2.isErrorNode()) t2.visitErrorNode(e2);
    else if (e2 instanceof b) t2.visitTerminal(e2);
    else {
      this.enterRule(t2, e2);
      for (let n2 = 0; n2 < e2.getChildCount(); n2++) {
        const s2 = e2.getChild(n2);
        this.walk(t2, s2);
      }
      this.exitRule(t2, e2);
    }
  }
  enterRule(t2, e2) {
    const n2 = e2.ruleContext;
    t2.enterEveryRule(n2), n2.enterRule(t2);
  }
  exitRule(t2, e2) {
    const n2 = e2.ruleContext;
    n2.exitRule(t2), t2.exitEveryRule(n2);
  }
};
pe.DEFAULT = new pe();
var fe = { Trees: M, RuleNode: P, ErrorNode: D, TerminalNode: b, ParseTreeListener: de, ParseTreeVisitor: ge, ParseTreeWalker: pe };
var xe = class extends Ft {
  constructor(t2) {
    super({ message: "", recognizer: t2, input: t2.getInputStream(), ctx: t2._ctx }), this.offendingToken = t2.getCurrentToken();
  }
};
var Te = class extends Ft {
  constructor(t2, e2, n2) {
    super({ message: Se(e2, n2 || null), recognizer: t2, input: t2.getInputStream(), ctx: t2._ctx });
    const s2 = t2._interp.atn.states[t2.state].transitions[0];
    s2 instanceof pt ? (this.ruleIndex = s2.ruleIndex, this.predicateIndex = s2.predIndex) : (this.ruleIndex = 0, this.predicateIndex = 0), this.predicate = e2, this.offendingToken = t2.getCurrentToken();
  }
};
function Se(t2, e2) {
  return null !== e2 ? e2 : "failed predicate: {" + t2 + "}?";
}
var me = class extends Ot {
  constructor(t2) {
    super(), t2 = t2 || true, this.exactOnly = t2;
  }
  reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
    if (this.exactOnly && !i2) return;
    const a2 = "reportAmbiguity d=" + this.getDecisionDescription(t2, e2) + ": ambigAlts=" + this.getConflictingAlts(r2, o2) + ", input='" + t2.getTokenStream().getText(new E(n2, s2)) + "'";
    t2.notifyErrorListeners(a2);
  }
  reportAttemptingFullContext(t2, e2, n2, s2, i2, r2) {
    const o2 = "reportAttemptingFullContext d=" + this.getDecisionDescription(t2, e2) + ", input='" + t2.getTokenStream().getText(new E(n2, s2)) + "'";
    t2.notifyErrorListeners(o2);
  }
  reportContextSensitivity(t2, e2, n2, s2, i2, r2) {
    const o2 = "reportContextSensitivity d=" + this.getDecisionDescription(t2, e2) + ", input='" + t2.getTokenStream().getText(new E(n2, s2)) + "'";
    t2.notifyErrorListeners(o2);
  }
  getDecisionDescription(t2, e2) {
    const n2 = e2.decision, s2 = e2.atnStartState.ruleIndex, i2 = t2.ruleNames;
    if (s2 < 0 || s2 >= i2.length) return "" + n2;
    const r2 = i2[s2] || null;
    return null === r2 || 0 === r2.length ? "" + n2 : `${n2} (${r2})`;
  }
  getConflictingAlts(t2, e2) {
    if (null !== t2) return t2;
    const n2 = new W();
    for (let t3 = 0; t3 < e2.items.length; t3++) n2.set(e2.items[t3].alt);
    return `{${n2.values().join(", ")}}`;
  }
};
var Ee = class _Ee extends Error {
  constructor() {
    super(), Error.captureStackTrace(this, _Ee);
  }
};
var _e = class {
  reset(t2) {
  }
  recoverInline(t2) {
  }
  recover(t2, e2) {
  }
  sync(t2) {
  }
  inErrorRecoveryMode(t2) {
  }
  reportError(t2) {
  }
};
var Ce = class extends _e {
  constructor() {
    super(), this.errorRecoveryMode = false, this.lastErrorIndex = -1, this.lastErrorStates = null, this.nextTokensContext = null, this.nextTokenState = 0;
  }
  reset(t2) {
    this.endErrorCondition(t2);
  }
  beginErrorCondition(t2) {
    this.errorRecoveryMode = true;
  }
  inErrorRecoveryMode(t2) {
    return this.errorRecoveryMode;
  }
  endErrorCondition(t2) {
    this.errorRecoveryMode = false, this.lastErrorStates = null, this.lastErrorIndex = -1;
  }
  reportMatch(t2) {
    this.endErrorCondition(t2);
  }
  reportError(t2, e2) {
    this.inErrorRecoveryMode(t2) || (this.beginErrorCondition(t2), e2 instanceof ee ? this.reportNoViableAlternative(t2, e2) : e2 instanceof xe ? this.reportInputMismatch(t2, e2) : e2 instanceof Te ? this.reportFailedPredicate(t2, e2) : (console.log("unknown recognition error type: " + e2.constructor.name), console.log(e2.stack), t2.notifyErrorListeners(e2.getOffendingToken(), e2.getMessage(), e2)));
  }
  recover(t2, e2) {
    this.lastErrorIndex === t2.getInputStream().index && null !== this.lastErrorStates && this.lastErrorStates.indexOf(t2.state) >= 0 && t2.consume(), this.lastErrorIndex = t2._input.index, null === this.lastErrorStates && (this.lastErrorStates = []), this.lastErrorStates.push(t2.state);
    const n2 = this.getErrorRecoverySet(t2);
    this.consumeUntil(t2, n2);
  }
  sync(t2) {
    if (this.inErrorRecoveryMode(t2)) return;
    const e2 = t2._interp.atn.states[t2.state], n2 = t2.getTokenStream().LA(1), s2 = t2.atn.nextTokens(e2);
    if (s2.contains(n2)) return this.nextTokensContext = null, void (this.nextTokenState = C.INVALID_STATE_NUMBER);
    if (s2.contains(i.EPSILON)) null === this.nextTokensContext && (this.nextTokensContext = t2._ctx, this.nextTokensState = t2._stateNumber);
    else switch (e2.stateType) {
      case C.BLOCK_START:
      case C.STAR_BLOCK_START:
      case C.PLUS_BLOCK_START:
      case C.STAR_LOOP_ENTRY:
        if (null !== this.singleTokenDeletion(t2)) return;
        throw new xe(t2);
      case C.PLUS_LOOP_BACK:
      case C.STAR_LOOP_BACK: {
        this.reportUnwantedToken(t2);
        const e3 = new _();
        e3.addSet(t2.getExpectedTokens());
        const n3 = e3.addSet(this.getErrorRecoverySet(t2));
        this.consumeUntil(t2, n3);
      }
    }
  }
  reportNoViableAlternative(t2, e2) {
    const n2 = t2.getTokenStream();
    let s2;
    s2 = null !== n2 ? e2.startToken.type === i.EOF ? "<EOF>" : n2.getText(new E(e2.startToken.tokenIndex, e2.offendingToken.tokenIndex)) : "<unknown input>";
    const r2 = "no viable alternative at input " + this.escapeWSAndQuote(s2);
    t2.notifyErrorListeners(r2, e2.offendingToken, e2);
  }
  reportInputMismatch(t2, e2) {
    const n2 = "mismatched input " + this.getTokenErrorDisplay(e2.offendingToken) + " expecting " + e2.getExpectedTokens().toString(t2.literalNames, t2.symbolicNames);
    t2.notifyErrorListeners(n2, e2.offendingToken, e2);
  }
  reportFailedPredicate(t2, e2) {
    const n2 = "rule " + t2.ruleNames[t2._ctx.ruleIndex] + " " + e2.message;
    t2.notifyErrorListeners(n2, e2.offendingToken, e2);
  }
  reportUnwantedToken(t2) {
    if (this.inErrorRecoveryMode(t2)) return;
    this.beginErrorCondition(t2);
    const e2 = t2.getCurrentToken(), n2 = "extraneous input " + this.getTokenErrorDisplay(e2) + " expecting " + this.getExpectedTokens(t2).toString(t2.literalNames, t2.symbolicNames);
    t2.notifyErrorListeners(n2, e2, null);
  }
  reportMissingToken(t2) {
    if (this.inErrorRecoveryMode(t2)) return;
    this.beginErrorCondition(t2);
    const e2 = t2.getCurrentToken(), n2 = "missing " + this.getExpectedTokens(t2).toString(t2.literalNames, t2.symbolicNames) + " at " + this.getTokenErrorDisplay(e2);
    t2.notifyErrorListeners(n2, e2, null);
  }
  recoverInline(t2) {
    const e2 = this.singleTokenDeletion(t2);
    if (null !== e2) return t2.consume(), e2;
    if (this.singleTokenInsertion(t2)) return this.getMissingSymbol(t2);
    throw new xe(t2);
  }
  singleTokenInsertion(t2) {
    const e2 = t2.getTokenStream().LA(1), n2 = t2._interp.atn, s2 = n2.states[t2.state].transitions[0].target;
    return !!n2.nextTokens(s2, t2._ctx).contains(e2) && (this.reportMissingToken(t2), true);
  }
  singleTokenDeletion(t2) {
    const e2 = t2.getTokenStream().LA(2);
    if (this.getExpectedTokens(t2).contains(e2)) {
      this.reportUnwantedToken(t2), t2.consume();
      const e3 = t2.getCurrentToken();
      return this.reportMatch(t2), e3;
    }
    return null;
  }
  getMissingSymbol(t2) {
    const e2 = t2.getCurrentToken(), n2 = this.getExpectedTokens(t2).first();
    let s2;
    s2 = n2 === i.EOF ? "<missing EOF>" : "<missing " + t2.literalNames[n2] + ">";
    let r2 = e2;
    const o2 = t2.getTokenStream().LT(-1);
    return r2.type === i.EOF && null !== o2 && (r2 = o2), t2.getTokenFactory().create(r2.source, n2, s2, i.DEFAULT_CHANNEL, -1, -1, r2.line, r2.column);
  }
  getExpectedTokens(t2) {
    return t2.getExpectedTokens();
  }
  getTokenErrorDisplay(t2) {
    if (null === t2) return "<no token>";
    let e2 = t2.text;
    return null === e2 && (e2 = t2.type === i.EOF ? "<EOF>" : "<" + t2.type + ">"), this.escapeWSAndQuote(e2);
  }
  escapeWSAndQuote(t2) {
    return "'" + (t2 = (t2 = (t2 = t2.replace(/\n/g, "\\n")).replace(/\r/g, "\\r")).replace(/\t/g, "\\t")) + "'";
  }
  getErrorRecoverySet(t2) {
    const e2 = t2._interp.atn;
    let n2 = t2._ctx;
    const s2 = new _();
    for (; null !== n2 && n2.invokingState >= 0; ) {
      const t3 = e2.states[n2.invokingState].transitions[0], i2 = e2.nextTokens(t3.followState);
      s2.addSet(i2), n2 = n2.parentCtx;
    }
    return s2.removeOne(i.EPSILON), s2;
  }
  consumeUntil(t2, e2) {
    let n2 = t2.getTokenStream().LA(1);
    for (; n2 !== i.EOF && !e2.contains(n2); ) t2.consume(), n2 = t2.getTokenStream().LA(1);
  }
};
var Ae = class extends Ce {
  constructor() {
    super();
  }
  recover(t2, e2) {
    let n2 = t2._ctx;
    for (; null !== n2; ) n2.exception = e2, n2 = n2.parentCtx;
    throw new Ee(e2);
  }
  recoverInline(t2) {
    this.recover(t2, new xe(t2));
  }
  sync(t2) {
  }
};
var Ne = { RecognitionException: Ft, NoViableAltException: ee, LexerNoViableAltException: Mt, InputMismatchException: xe, FailedPredicateException: Te, DiagnosticErrorListener: me, BailErrorStrategy: Ae, DefaultErrorStrategy: Ce, ErrorListener: Ot };
var ke = class {
  constructor(t2, e2) {
    if (this.name = "<empty>", this.strdata = t2, this.decodeToUnicodeCodePoints = e2 || false, this._index = 0, this.data = [], this.decodeToUnicodeCodePoints) for (let t3 = 0; t3 < this.strdata.length; ) {
      const e3 = this.strdata.codePointAt(t3);
      this.data.push(e3), t3 += e3 <= 65535 ? 1 : 2;
    }
    else {
      this.data = new Array(this.strdata.length);
      for (let t3 = 0; t3 < this.strdata.length; t3++) this.data[t3] = this.strdata.charCodeAt(t3);
    }
    this._size = this.data.length;
  }
  reset() {
    this._index = 0;
  }
  consume() {
    if (this._index >= this._size) throw "cannot consume EOF";
    this._index += 1;
  }
  LA(t2) {
    if (0 === t2) return 0;
    t2 < 0 && (t2 += 1);
    const e2 = this._index + t2 - 1;
    return e2 < 0 || e2 >= this._size ? i.EOF : this.data[e2];
  }
  LT(t2) {
    return this.LA(t2);
  }
  mark() {
    return -1;
  }
  release(t2) {
  }
  seek(t2) {
    t2 <= this._index ? this._index = t2 : this._index = Math.min(t2, this._size);
  }
  getText(t2, e2) {
    if (e2 >= this._size && (e2 = this._size - 1), t2 >= this._size) return "";
    if (this.decodeToUnicodeCodePoints) {
      let n2 = "";
      for (let s2 = t2; s2 <= e2; s2++) n2 += String.fromCodePoint(this.data[s2]);
      return n2;
    }
    return this.strdata.slice(t2, e2 + 1);
  }
  toString() {
    return this.strdata;
  }
  get index() {
    return this._index;
  }
  get size() {
    return this._size;
  }
};
var Ie = class extends ke {
  constructor(t2, e2) {
    super(t2, e2);
  }
};
var ye = n(763);
var Le = "undefined" != typeof process && null != process.versions && null != process.versions.node;
var Oe = class extends Ie {
  static fromPath(t2, e2, n2) {
    if (!Le) throw new Error("FileStream is only available when running in Node!");
    ye.readFile(t2, e2, function(t3, e3) {
      let s2 = null;
      null !== e3 && (s2 = new ke(e3, true)), n2(t3, s2);
    });
  }
  constructor(t2, e2, n2) {
    if (!Le) throw new Error("FileStream is only available when running in Node!");
    super(ye.readFileSync(t2, e2 || "utf-8"), n2), this.fileName = t2;
  }
};
var Re = { fromString: function(t2) {
  return new ke(t2, true);
}, fromBlob: function(t2, e2, n2, s2) {
  const i2 = new window.FileReader();
  i2.onload = function(t3) {
    const e3 = new ke(t3.target.result, true);
    n2(e3);
  }, i2.onerror = s2, i2.readAsText(t2, e2);
}, fromBuffer: function(t2, e2) {
  return new ke(t2.toString(e2), true);
}, fromPath: function(t2, e2, n2) {
  Oe.fromPath(t2, e2, n2);
}, fromPathSync: function(t2, e2) {
  return new Oe(t2, e2);
} };
var we = { arrayToString: d, stringToCharArray: function(t2) {
  let e2 = new Uint16Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++) e2[n2] = t2.charCodeAt(n2);
  return e2;
} };
var ve = class {
};
var Pe = class extends ve {
  constructor(t2) {
    super(), this.tokenSource = t2, this.tokens = [], this.index = -1, this.fetchedEOF = false;
  }
  mark() {
    return 0;
  }
  release(t2) {
  }
  reset() {
    this.seek(0);
  }
  seek(t2) {
    this.lazyInit(), this.index = this.adjustSeekIndex(t2);
  }
  get size() {
    return this.tokens.length;
  }
  get(t2) {
    return this.lazyInit(), this.tokens[t2];
  }
  consume() {
    let t2 = false;
    if (t2 = this.index >= 0 && (this.fetchedEOF ? this.index < this.tokens.length - 1 : this.index < this.tokens.length), !t2 && this.LA(1) === i.EOF) throw "cannot consume EOF";
    this.sync(this.index + 1) && (this.index = this.adjustSeekIndex(this.index + 1));
  }
  sync(t2) {
    const e2 = t2 - this.tokens.length + 1;
    return !(e2 > 0) || this.fetch(e2) >= e2;
  }
  fetch(t2) {
    if (this.fetchedEOF) return 0;
    for (let e2 = 0; e2 < t2; e2++) {
      const t3 = this.tokenSource.nextToken();
      if (t3.tokenIndex = this.tokens.length, this.tokens.push(t3), t3.type === i.EOF) return this.fetchedEOF = true, e2 + 1;
    }
    return t2;
  }
  getTokens(t2, e2, n2) {
    if (void 0 === n2 && (n2 = null), t2 < 0 || e2 < 0) return null;
    this.lazyInit();
    const s2 = [];
    e2 >= this.tokens.length && (e2 = this.tokens.length - 1);
    for (let r2 = t2; r2 < e2; r2++) {
      const t3 = this.tokens[r2];
      if (t3.type === i.EOF) break;
      (null === n2 || n2.contains(t3.type)) && s2.push(t3);
    }
    return s2;
  }
  LA(t2) {
    return this.LT(t2).type;
  }
  LB(t2) {
    return this.index - t2 < 0 ? null : this.tokens[this.index - t2];
  }
  LT(t2) {
    if (this.lazyInit(), 0 === t2) return null;
    if (t2 < 0) return this.LB(-t2);
    const e2 = this.index + t2 - 1;
    return this.sync(e2), e2 >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[e2];
  }
  adjustSeekIndex(t2) {
    return t2;
  }
  lazyInit() {
    -1 === this.index && this.setup();
  }
  setup() {
    this.sync(0), this.index = this.adjustSeekIndex(0);
  }
  setTokenSource(t2) {
    this.tokenSource = t2, this.tokens = [], this.index = -1, this.fetchedEOF = false;
  }
  nextTokenOnChannel(t2, e2) {
    if (this.sync(t2), t2 >= this.tokens.length) return -1;
    let n2 = this.tokens[t2];
    for (; n2.channel !== e2; ) {
      if (n2.type === i.EOF) return -1;
      t2 += 1, this.sync(t2), n2 = this.tokens[t2];
    }
    return t2;
  }
  previousTokenOnChannel(t2, e2) {
    for (; t2 >= 0 && this.tokens[t2].channel !== e2; ) t2 -= 1;
    return t2;
  }
  getHiddenTokensToRight(t2, e2) {
    if (void 0 === e2 && (e2 = -1), this.lazyInit(), t2 < 0 || t2 >= this.tokens.length) throw t2 + " not in 0.." + this.tokens.length - 1;
    const n2 = this.nextTokenOnChannel(t2 + 1, Ut.DEFAULT_TOKEN_CHANNEL), s2 = t2 + 1, i2 = -1 === n2 ? this.tokens.length - 1 : n2;
    return this.filterForChannel(s2, i2, e2);
  }
  getHiddenTokensToLeft(t2, e2) {
    if (void 0 === e2 && (e2 = -1), this.lazyInit(), t2 < 0 || t2 >= this.tokens.length) throw t2 + " not in 0.." + this.tokens.length - 1;
    const n2 = this.previousTokenOnChannel(t2 - 1, Ut.DEFAULT_TOKEN_CHANNEL);
    if (n2 === t2 - 1) return null;
    const s2 = n2 + 1, i2 = t2 - 1;
    return this.filterForChannel(s2, i2, e2);
  }
  filterForChannel(t2, e2, n2) {
    const s2 = [];
    for (let i2 = t2; i2 < e2 + 1; i2++) {
      const t3 = this.tokens[i2];
      -1 === n2 ? t3.channel !== Ut.DEFAULT_TOKEN_CHANNEL && s2.push(t3) : t3.channel === n2 && s2.push(t3);
    }
    return 0 === s2.length ? null : s2;
  }
  getSourceName() {
    return this.tokenSource.getSourceName();
  }
  getText(t2) {
    this.lazyInit(), this.fill(), t2 || (t2 = new E(0, this.tokens.length - 1));
    let e2 = t2.start;
    e2 instanceof i && (e2 = e2.tokenIndex);
    let n2 = t2.stop;
    if (n2 instanceof i && (n2 = n2.tokenIndex), null === e2 || null === n2 || e2 < 0 || n2 < 0) return "";
    n2 >= this.tokens.length && (n2 = this.tokens.length - 1);
    let s2 = "";
    for (let t3 = e2; t3 < n2 + 1; t3++) {
      const e3 = this.tokens[t3];
      if (e3.type === i.EOF) break;
      s2 += e3.text;
    }
    return s2;
  }
  fill() {
    for (this.lazyInit(); 1e3 === this.fetch(1e3); ) ;
  }
};
Object.defineProperty(Pe, "size", { get: function() {
  return this.tokens.length;
} });
var be = class extends Pe {
  constructor(t2, e2) {
    super(t2), this.channel = void 0 === e2 ? i.DEFAULT_CHANNEL : e2;
  }
  adjustSeekIndex(t2) {
    return this.nextTokenOnChannel(t2, this.channel);
  }
  LB(t2) {
    if (0 === t2 || this.index - t2 < 0) return null;
    let e2 = this.index, n2 = 1;
    for (; n2 <= t2; ) e2 = this.previousTokenOnChannel(e2 - 1, this.channel), n2 += 1;
    return e2 < 0 ? null : this.tokens[e2];
  }
  LT(t2) {
    if (this.lazyInit(), 0 === t2) return null;
    if (t2 < 0) return this.LB(-t2);
    let e2 = this.index, n2 = 1;
    for (; n2 < t2; ) this.sync(e2 + 1) && (e2 = this.nextTokenOnChannel(e2 + 1, this.channel)), n2 += 1;
    return this.tokens[e2];
  }
  getNumberOfOnChannelTokens() {
    let t2 = 0;
    this.fill();
    for (let e2 = 0; e2 < this.tokens.length; e2++) {
      const n2 = this.tokens[e2];
      if (n2.channel === this.channel && (t2 += 1), n2.type === i.EOF) break;
    }
    return t2;
  }
};
var De = class extends de {
  constructor(t2) {
    super(), this.parser = t2;
  }
  enterEveryRule(t2) {
    console.log("enter   " + this.parser.ruleNames[t2.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
  }
  visitTerminal(t2) {
    console.log("consume " + t2.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]);
  }
  exitEveryRule(t2) {
    console.log("exit    " + this.parser.ruleNames[t2.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
  }
};
var Fe = class extends vt {
  constructor(t2) {
    super(), this._input = null, this._errHandler = new Ce(), this._precedenceStack = [], this._precedenceStack.push(0), this._ctx = null, this.buildParseTrees = true, this._tracer = null, this._parseListeners = null, this._syntaxErrors = 0, this.setInputStream(t2);
  }
  reset() {
    null !== this._input && this._input.seek(0), this._errHandler.reset(this), this._ctx = null, this._syntaxErrors = 0, this.setTrace(false), this._precedenceStack = [], this._precedenceStack.push(0), null !== this._interp && this._interp.reset();
  }
  match(t2) {
    let e2 = this.getCurrentToken();
    return e2.type === t2 ? (this._errHandler.reportMatch(this), this.consume()) : (e2 = this._errHandler.recoverInline(this), this.buildParseTrees && -1 === e2.tokenIndex && this._ctx.addErrorNode(e2)), e2;
  }
  matchWildcard() {
    let t2 = this.getCurrentToken();
    return t2.type > 0 ? (this._errHandler.reportMatch(this), this.consume()) : (t2 = this._errHandler.recoverInline(this), this.buildParseTrees && -1 === t2.tokenIndex && this._ctx.addErrorNode(t2)), t2;
  }
  getParseListeners() {
    return this._parseListeners || [];
  }
  addParseListener(t2) {
    if (null === t2) throw "listener";
    null === this._parseListeners && (this._parseListeners = []), this._parseListeners.push(t2);
  }
  removeParseListener(t2) {
    if (null !== this._parseListeners) {
      const e2 = this._parseListeners.indexOf(t2);
      e2 >= 0 && this._parseListeners.splice(e2, 1), 0 === this._parseListeners.length && (this._parseListeners = null);
    }
  }
  removeParseListeners() {
    this._parseListeners = null;
  }
  triggerEnterRuleEvent() {
    if (null !== this._parseListeners) {
      const t2 = this._ctx;
      this._parseListeners.forEach(function(e2) {
        e2.enterEveryRule(t2), t2.enterRule(e2);
      });
    }
  }
  triggerExitRuleEvent() {
    if (null !== this._parseListeners) {
      const t2 = this._ctx;
      this._parseListeners.slice(0).reverse().forEach(function(e2) {
        t2.exitRule(e2), e2.exitEveryRule(t2);
      });
    }
  }
  getTokenFactory() {
    return this._input.tokenSource._factory;
  }
  setTokenFactory(t2) {
    this._input.tokenSource._factory = t2;
  }
  getATNWithBypassAlts() {
    const t2 = this.getSerializedATN();
    if (null === t2) throw "The current parser does not support an ATN with bypass alternatives.";
    let e2 = this.bypassAltsAtnCache[t2];
    if (null === e2) {
      const n2 = new Tt();
      n2.generateRuleBypassTransitions = true, e2 = new Lt(n2).deserialize(t2), this.bypassAltsAtnCache[t2] = e2;
    }
    return e2;
  }
  getInputStream() {
    return this.getTokenStream();
  }
  setInputStream(t2) {
    this.setTokenStream(t2);
  }
  getTokenStream() {
    return this._input;
  }
  setTokenStream(t2) {
    this._input = null, this.reset(), this._input = t2;
  }
  get syntaxErrorsCount() {
    return this._syntaxErrors;
  }
  getCurrentToken() {
    return this._input.LT(1);
  }
  notifyErrorListeners(t2, e2, n2) {
    n2 = n2 || null, null === (e2 = e2 || null) && (e2 = this.getCurrentToken()), this._syntaxErrors += 1;
    const s2 = e2.line, i2 = e2.column;
    this.getErrorListener().syntaxError(this, e2, s2, i2, t2, n2);
  }
  consume() {
    const t2 = this.getCurrentToken();
    t2.type !== i.EOF && this.getInputStream().consume();
    const e2 = null !== this._parseListeners && this._parseListeners.length > 0;
    if (this.buildParseTrees || e2) {
      let n2;
      n2 = this._errHandler.inErrorRecoveryMode(this) ? this._ctx.addErrorNode(t2) : this._ctx.addTokenNode(t2), n2.invokingState = this.state, e2 && this._parseListeners.forEach(function(t3) {
        n2 instanceof D || void 0 !== n2.isErrorNode && n2.isErrorNode() ? t3.visitErrorNode(n2) : n2 instanceof b && t3.visitTerminal(n2);
      });
    }
    return t2;
  }
  addContextToParseTree() {
    null !== this._ctx.parentCtx && this._ctx.parentCtx.addChild(this._ctx);
  }
  enterRule(t2, e2, n2) {
    this.state = e2, this._ctx = t2, this._ctx.start = this._input.LT(1), this.buildParseTrees && this.addContextToParseTree(), this.triggerEnterRuleEvent();
  }
  exitRule() {
    this._ctx.stop = this._input.LT(-1), this.triggerExitRuleEvent(), this.state = this._ctx.invokingState, this._ctx = this._ctx.parentCtx;
  }
  enterOuterAlt(t2, e2) {
    t2.setAltNumber(e2), this.buildParseTrees && this._ctx !== t2 && null !== this._ctx.parentCtx && (this._ctx.parentCtx.removeLastChild(), this._ctx.parentCtx.addChild(t2)), this._ctx = t2;
  }
  getPrecedence() {
    return 0 === this._precedenceStack.length ? -1 : this._precedenceStack[this._precedenceStack.length - 1];
  }
  enterRecursionRule(t2, e2, n2, s2) {
    this.state = e2, this._precedenceStack.push(s2), this._ctx = t2, this._ctx.start = this._input.LT(1), this.triggerEnterRuleEvent();
  }
  pushNewRecursionContext(t2, e2, n2) {
    const s2 = this._ctx;
    s2.parentCtx = t2, s2.invokingState = e2, s2.stop = this._input.LT(-1), this._ctx = t2, this._ctx.start = s2.start, this.buildParseTrees && this._ctx.addChild(s2), this.triggerEnterRuleEvent();
  }
  unrollRecursionContexts(t2) {
    this._precedenceStack.pop(), this._ctx.stop = this._input.LT(-1);
    const e2 = this._ctx, n2 = this.getParseListeners();
    if (null !== n2 && n2.length > 0) for (; this._ctx !== t2; ) this.triggerExitRuleEvent(), this._ctx = this._ctx.parentCtx;
    else this._ctx = t2;
    e2.parentCtx = t2, this.buildParseTrees && null !== t2 && t2.addChild(e2);
  }
  getInvokingContext(t2) {
    let e2 = this._ctx;
    for (; null !== e2; ) {
      if (e2.ruleIndex === t2) return e2;
      e2 = e2.parentCtx;
    }
    return null;
  }
  precpred(t2, e2) {
    return e2 >= this._precedenceStack[this._precedenceStack.length - 1];
  }
  inContext(t2) {
    return false;
  }
  isExpectedToken(t2) {
    const e2 = this._interp.atn;
    let n2 = this._ctx;
    const s2 = e2.states[this.state];
    let r2 = e2.nextTokens(s2);
    if (r2.contains(t2)) return true;
    if (!r2.contains(i.EPSILON)) return false;
    for (; null !== n2 && n2.invokingState >= 0 && r2.contains(i.EPSILON); ) {
      const s3 = e2.states[n2.invokingState].transitions[0];
      if (r2 = e2.nextTokens(s3.followState), r2.contains(t2)) return true;
      n2 = n2.parentCtx;
    }
    return !(!r2.contains(i.EPSILON) || t2 !== i.EOF);
  }
  getExpectedTokens() {
    return this._interp.atn.getExpectedTokens(this.state, this._ctx);
  }
  getExpectedTokensWithinCurrentRule() {
    const t2 = this._interp.atn, e2 = t2.states[this.state];
    return t2.nextTokens(e2);
  }
  getRuleIndex(t2) {
    const e2 = this.getRuleIndexMap()[t2];
    return null !== e2 ? e2 : -1;
  }
  getRuleInvocationStack(t2) {
    null === (t2 = t2 || null) && (t2 = this._ctx);
    const e2 = [];
    for (; null !== t2; ) {
      const n2 = t2.ruleIndex;
      n2 < 0 ? e2.push("n/a") : e2.push(this.ruleNames[n2]), t2 = t2.parentCtx;
    }
    return e2;
  }
  getDFAStrings() {
    return this._interp.decisionToDFA.toString();
  }
  dumpDFA() {
    let t2 = false;
    for (let e2 = 0; e2 < this._interp.decisionToDFA.length; e2++) {
      const n2 = this._interp.decisionToDFA[e2];
      n2.states.length > 0 && (t2 && console.log(), this.printer.println("Decision " + n2.decision + ":"), this.printer.print(n2.toString(this.literalNames, this.symbolicNames)), t2 = true);
    }
  }
  getSourceName() {
    return this._input.getSourceName();
  }
  setTrace(t2) {
    t2 ? (null !== this._tracer && this.removeParseListener(this._tracer), this._tracer = new De(this), this.addParseListener(this._tracer)) : (this.removeParseListener(this._tracer), this._tracer = null);
  }
};
Fe.bypassAltsAtnCache = {};
var Me = class extends b {
  constructor(t2) {
    super(), this.parentCtx = null, this.symbol = t2;
  }
  getChild(t2) {
    return null;
  }
  getSymbol() {
    return this.symbol;
  }
  getParent() {
    return this.parentCtx;
  }
  getPayload() {
    return this.symbol;
  }
  getSourceInterval() {
    if (null === this.symbol) return E.INVALID_INTERVAL;
    const t2 = this.symbol.tokenIndex;
    return new E(t2, t2);
  }
  getChildCount() {
    return 0;
  }
  accept(t2) {
    return t2.visitTerminal(this);
  }
  getText() {
    return this.symbol.text;
  }
  toString() {
    return this.symbol.type === i.EOF ? "<EOF>" : this.symbol.text;
  }
};
var Ue = class extends Me {
  constructor(t2) {
    super(t2);
  }
  isErrorNode() {
    return true;
  }
  accept(t2) {
    return t2.visitErrorNode(this);
  }
};
var Be = class extends U {
  constructor(t2, e2) {
    super(t2, e2), this.children = null, this.start = null, this.stop = null, this.exception = null;
  }
  copyFrom(t2) {
    this.parentCtx = t2.parentCtx, this.invokingState = t2.invokingState, this.children = null, this.start = t2.start, this.stop = t2.stop, t2.children && (this.children = [], t2.children.map(function(t3) {
      t3 instanceof Ue && (this.children.push(t3), t3.parentCtx = this);
    }, this));
  }
  enterRule(t2) {
  }
  exitRule(t2) {
  }
  addChild(t2) {
    return null === this.children && (this.children = []), this.children.push(t2), t2;
  }
  removeLastChild() {
    null !== this.children && this.children.pop();
  }
  addTokenNode(t2) {
    const e2 = new Me(t2);
    return this.addChild(e2), e2.parentCtx = this, e2;
  }
  addErrorNode(t2) {
    const e2 = new Ue(t2);
    return this.addChild(e2), e2.parentCtx = this, e2;
  }
  getChild(t2, e2) {
    if (e2 = e2 || null, null === this.children || t2 < 0 || t2 >= this.children.length) return null;
    if (null === e2) return this.children[t2];
    for (let n2 = 0; n2 < this.children.length; n2++) {
      const s2 = this.children[n2];
      if (s2 instanceof e2) {
        if (0 === t2) return s2;
        t2 -= 1;
      }
    }
    return null;
  }
  getToken(t2, e2) {
    if (null === this.children || e2 < 0 || e2 >= this.children.length) return null;
    for (let n2 = 0; n2 < this.children.length; n2++) {
      const s2 = this.children[n2];
      if (s2 instanceof b && s2.symbol.type === t2) {
        if (0 === e2) return s2;
        e2 -= 1;
      }
    }
    return null;
  }
  getTokens(t2) {
    if (null === this.children) return [];
    {
      const e2 = [];
      for (let n2 = 0; n2 < this.children.length; n2++) {
        const s2 = this.children[n2];
        s2 instanceof b && s2.symbol.type === t2 && e2.push(s2);
      }
      return e2;
    }
  }
  getTypedRuleContext(t2, e2) {
    return this.getChild(e2, t2);
  }
  getTypedRuleContexts(t2) {
    if (null === this.children) return [];
    {
      const e2 = [];
      for (let n2 = 0; n2 < this.children.length; n2++) {
        const s2 = this.children[n2];
        s2 instanceof t2 && e2.push(s2);
      }
      return e2;
    }
  }
  getChildCount() {
    return null === this.children ? 0 : this.children.length;
  }
  getSourceInterval() {
    return null === this.start || null === this.stop ? E.INVALID_INTERVAL : new E(this.start.tokenIndex, this.stop.tokenIndex);
  }
};
U.EMPTY = new Be();
var ze = class _ze {
  static DEFAULT_PROGRAM_NAME = "default";
  constructor(t2) {
    this.tokens = t2, this.programs = /* @__PURE__ */ new Map();
  }
  getTokenStream() {
    return this.tokens;
  }
  insertAfter(t2, e2) {
    let n2, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _ze.DEFAULT_PROGRAM_NAME;
    n2 = "number" == typeof t2 ? t2 : t2.tokenIndex;
    let i2 = this.getProgram(s2), r2 = new He(this.tokens, n2, i2.length, e2);
    i2.push(r2);
  }
  insertBefore(t2, e2) {
    let n2, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _ze.DEFAULT_PROGRAM_NAME;
    n2 = "number" == typeof t2 ? t2 : t2.tokenIndex;
    const i2 = this.getProgram(s2), r2 = new qe(this.tokens, n2, i2.length, e2);
    i2.push(r2);
  }
  replaceSingle(t2, e2) {
    let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _ze.DEFAULT_PROGRAM_NAME;
    this.replace(t2, t2, e2, n2);
  }
  replace(t2, e2, n2) {
    let s2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _ze.DEFAULT_PROGRAM_NAME;
    if ("number" != typeof t2 && (t2 = t2.tokenIndex), "number" != typeof e2 && (e2 = e2.tokenIndex), t2 > e2 || t2 < 0 || e2 < 0 || e2 >= this.tokens.size) throw new RangeError(`replace: range invalid: ${t2}..${e2}(size=${this.tokens.size})`);
    let i2 = this.getProgram(s2), r2 = new Ke(this.tokens, t2, e2, i2.length, n2);
    i2.push(r2);
  }
  delete(t2, e2) {
    let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _ze.DEFAULT_PROGRAM_NAME;
    void 0 === e2 && (e2 = t2), this.replace(t2, e2, null, n2);
  }
  getProgram(t2) {
    let e2 = this.programs.get(t2);
    return null == e2 && (e2 = this.initializeProgram(t2)), e2;
  }
  initializeProgram(t2) {
    const e2 = [];
    return this.programs.set(t2, e2), e2;
  }
  getText(t2) {
    let e2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _ze.DEFAULT_PROGRAM_NAME;
    e2 = t2 instanceof E ? t2 : new E(0, this.tokens.size - 1), "string" == typeof t2 && (n2 = t2);
    const s2 = this.programs.get(n2);
    let r2 = e2.start, o2 = e2.stop;
    if (o2 > this.tokens.size - 1 && (o2 = this.tokens.size - 1), r2 < 0 && (r2 = 0), null == s2 || 0 === s2.length) return this.tokens.getText(new E(r2, o2));
    let a2 = [], l2 = this.reduceToSingleOperationPerIndex(s2), h2 = r2;
    for (; h2 <= o2 && h2 < this.tokens.size; ) {
      let t3 = l2.get(h2);
      l2.delete(h2);
      let e3 = this.tokens.get(h2);
      null == t3 ? (e3.type !== i.EOF && a2.push(String(e3.text)), h2++) : h2 = t3.execute(a2);
    }
    if (o2 === this.tokens.size - 1) for (const t3 of l2.values()) t3.index >= this.tokens.size - 1 && a2.push(t3.text.toString());
    return a2.join("");
  }
  reduceToSingleOperationPerIndex(t2) {
    for (let e3 = 0; e3 < t2.length; e3++) {
      let n2 = t2[e3];
      if (null == n2) continue;
      if (!(n2 instanceof Ke)) continue;
      let s2 = n2, i2 = this.getKindOfOps(t2, qe, e3);
      for (let e4 of i2) e4.index === s2.index ? (t2[e4.instructionIndex] = void 0, s2.text = e4.text.toString() + (null != s2.text ? s2.text.toString() : "")) : e4.index > s2.index && e4.index <= s2.lastIndex && (t2[e4.instructionIndex] = void 0);
      let r2 = this.getKindOfOps(t2, Ke, e3);
      for (let e4 of r2) {
        if (e4.index >= s2.index && e4.lastIndex <= s2.lastIndex) {
          t2[e4.instructionIndex] = void 0;
          continue;
        }
        let n3 = e4.lastIndex < s2.index || e4.index > s2.lastIndex;
        if (null != e4.text || null != s2.text || n3) {
          if (!n3) throw new Error(`replace op boundaries of ${s2} overlap with previous ${e4}`);
        } else t2[e4.instructionIndex] = void 0, s2.index = Math.min(e4.index, s2.index), s2.lastIndex = Math.max(e4.lastIndex, s2.lastIndex);
      }
    }
    for (let e3 = 0; e3 < t2.length; e3++) {
      let n2 = t2[e3];
      if (null == n2) continue;
      if (!(n2 instanceof qe)) continue;
      let s2 = n2, i2 = this.getKindOfOps(t2, qe, e3);
      for (let e4 of i2) e4.index === s2.index && (e4 instanceof He ? (s2.text = this.catOpText(e4.text, s2.text), t2[e4.instructionIndex] = void 0) : e4 instanceof qe && (s2.text = this.catOpText(s2.text, e4.text), t2[e4.instructionIndex] = void 0));
      let r2 = this.getKindOfOps(t2, Ke, e3);
      for (let n3 of r2) if (s2.index !== n3.index) {
        if (s2.index >= n3.index && s2.index <= n3.lastIndex) throw new Error(`insert op ${s2} within boundaries of previous ${n3}`);
      } else n3.text = this.catOpText(s2.text, n3.text), t2[e3] = void 0;
    }
    let e2 = /* @__PURE__ */ new Map();
    for (let n2 of t2) if (null != n2) {
      if (null != e2.get(n2.index)) throw new Error("should only be one op per index");
      e2.set(n2.index, n2);
    }
    return e2;
  }
  catOpText(t2, e2) {
    let n2 = "", s2 = "";
    return null != t2 && (n2 = t2.toString()), null != e2 && (s2 = e2.toString()), n2 + s2;
  }
  getKindOfOps(t2, e2, n2) {
    return t2.slice(0, n2).filter((t3) => t3 && t3 instanceof e2);
  }
};
var Ve = class {
  constructor(t2, e2, n2, s2) {
    this.tokens = t2, this.instructionIndex = n2, this.index = e2, this.text = void 0 === s2 ? "" : s2;
  }
  toString() {
    let t2 = this.constructor.name;
    const e2 = t2.indexOf("$");
    return t2 = t2.substring(e2 + 1, t2.length), "<" + t2 + "@" + this.tokens.get(this.index) + ':"' + this.text + '">';
  }
};
var qe = class extends Ve {
  constructor(t2, e2, n2, s2) {
    super(t2, e2, n2, s2);
  }
  execute(t2) {
    return this.text && t2.push(this.text.toString()), this.tokens.get(this.index).type !== i.EOF && t2.push(String(this.tokens.get(this.index).text)), this.index + 1;
  }
};
var He = class extends qe {
  constructor(t2, e2, n2, s2) {
    super(t2, e2 + 1, n2, s2);
  }
};
var Ke = class extends Ve {
  constructor(t2, e2, n2, s2, i2) {
    super(t2, e2, s2, i2), this.lastIndex = n2;
  }
  execute(t2) {
    return this.text && t2.push(this.text.toString()), this.lastIndex + 1;
  }
  toString() {
    return null == this.text ? "<DeleteOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ">" : "<ReplaceOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ':"' + this.text + '">';
  }
};
var Ye = { atn: re, dfa: he, context: ce, misc: ue, tree: fe, error: Ne, Token: i, CommonToken: Pt, CharStreams: Re, CharStream: ke, InputStream: Ie, CommonTokenStream: be, Lexer: Ut, Parser: Fe, ParserRuleContext: Be, Interval: E, IntervalSet: _, LL1Analyzer: j, Utils: we, TokenStreamRewriter: ze };
var Ge = s.MG;
var We = s.fr;
var je = s.sR;
var $e = s.Zo;
var Xe = s.iH;
var Je = s.rt;
var Ze = s.jB;
var Qe = s.M8;
var tn = s.$t;
var en = s.aq;
var nn = s.pG;
var sn = s.eP;
var rn = s.KU;
var on = s.zW;
var an = s.IX;
var ln = s.mY;
var hn = s.a7;
var cn = s.JG;
var un = s.ay;
var dn = s.X2;
var gn = s.WU;
var pn = s.Uw;
var fn = s.gw;
var xn = s.iX;
var Tn = s.re;
var Sn = s.Pg;
var mn = s.tD;
var En = s.R$;
var _n = s.Dj;
var Cn = s.m7;
var An = s.NZ;
var Nn = s.xo;
var kn = s.ou;
var In = s.qC;
var yn = s.mD;
var Ln = s.Ay;

// src/wit/grammar/WitLexer.ts
var WitLexer = class _WitLexer extends cn {
  static T__0 = 1;
  static T__1 = 2;
  static T__2 = 3;
  static T__3 = 4;
  static T__4 = 5;
  static T__5 = 6;
  static T__6 = 7;
  static T__7 = 8;
  static T__8 = 9;
  static T__9 = 10;
  static T__10 = 11;
  static T__11 = 12;
  static T__12 = 13;
  static T__13 = 14;
  static T__14 = 15;
  static T__15 = 16;
  static T__16 = 17;
  static T__17 = 18;
  static T__18 = 19;
  static T__19 = 20;
  static T__20 = 21;
  static T__21 = 22;
  static T__22 = 23;
  static T__23 = 24;
  static T__24 = 25;
  static T__25 = 26;
  static T__26 = 27;
  static T__27 = 28;
  static T__28 = 29;
  static T__29 = 30;
  static T__30 = 31;
  static T__31 = 32;
  static T__32 = 33;
  static T__33 = 34;
  static T__34 = 35;
  static T__35 = 36;
  static T__36 = 37;
  static T__37 = 38;
  static T__38 = 39;
  static T__39 = 40;
  static T__40 = 41;
  static T__41 = 42;
  static T__42 = 43;
  static T__43 = 44;
  static T__44 = 45;
  static T__45 = 46;
  static T__46 = 47;
  static T__47 = 48;
  static T__48 = 49;
  static T__49 = 50;
  static T__50 = 51;
  static T__51 = 52;
  static T__52 = 53;
  static T__53 = 54;
  static T__54 = 55;
  static T__55 = 56;
  static T__56 = 57;
  static T__57 = 58;
  static T__58 = 59;
  static T__59 = 60;
  static T__60 = 61;
  static T__61 = 62;
  static Identifier = 63;
  static VALID_SEMVER = 64;
  static VERSION_CORE = 65;
  static MAJOR = 66;
  static MINOR = 67;
  static PATCH = 68;
  static PRERELEASE = 69;
  static DOTSEPERATED_PRERELEASE_ID = 70;
  static BUILD = 71;
  static DOTSEPERATED_BUILD_ID = 72;
  static PRERELEASE_ID = 73;
  static BUILD_ID = 74;
  static ALPHANUM_ID = 75;
  static NUM_ID = 76;
  static ID_CHARS = 77;
  static ID_CHAR = 78;
  static NON_DIGIT = 79;
  static DIGITS = 80;
  static DASH = 81;
  static PLUS = 82;
  static DOT = 83;
  static COMMENT = 84;
  static LINE_COMMENT = 85;
  static WS = 86;
  static EOF = kn.EOF;
  static channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
  static literalNames = [
    null,
    "'test'",
    "';'",
    "'{'",
    "'}'",
    "'package'",
    "':'",
    "'/'",
    "'@'",
    "'use'",
    "'as'",
    "'world'",
    "'export'",
    "'import'",
    "'interface'",
    "'include'",
    "'with'",
    "','",
    "'func'",
    "'('",
    "')'",
    "'->'",
    "'type'",
    "'='",
    "'record'",
    "'flags'",
    "'variant'",
    "'enum'",
    "'resource'",
    "'static'",
    "'constructor'",
    "'u8'",
    "'u16'",
    "'u32'",
    "'u64'",
    "'s8'",
    "'s16'",
    "'s32'",
    "'s64'",
    "'f32'",
    "'f64'",
    "'char'",
    "'bool'",
    "'string'",
    "'tuple'",
    "'<'",
    "'>'",
    "'list'",
    "'option'",
    "'result'",
    "'_'",
    "'borrow'",
    "'@unstable'",
    "'@since'",
    "'@deprecated'",
    "'feature'",
    "'version'",
    "'*'",
    "'%'",
    "'from'",
    "'future'",
    "'own'",
    "'stream'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'-'",
    "'+'",
    "'.'"
  ];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "Identifier",
    "VALID_SEMVER",
    "VERSION_CORE",
    "MAJOR",
    "MINOR",
    "PATCH",
    "PRERELEASE",
    "DOTSEPERATED_PRERELEASE_ID",
    "BUILD",
    "DOTSEPERATED_BUILD_ID",
    "PRERELEASE_ID",
    "BUILD_ID",
    "ALPHANUM_ID",
    "NUM_ID",
    "ID_CHARS",
    "ID_CHAR",
    "NON_DIGIT",
    "DIGITS",
    "DASH",
    "PLUS",
    "DOT",
    "COMMENT",
    "LINE_COMMENT",
    "WS"
  ];
  static modeNames = ["DEFAULT_MODE"];
  static ruleNames = [
    "T__0",
    "T__1",
    "T__2",
    "T__3",
    "T__4",
    "T__5",
    "T__6",
    "T__7",
    "T__8",
    "T__9",
    "T__10",
    "T__11",
    "T__12",
    "T__13",
    "T__14",
    "T__15",
    "T__16",
    "T__17",
    "T__18",
    "T__19",
    "T__20",
    "T__21",
    "T__22",
    "T__23",
    "T__24",
    "T__25",
    "T__26",
    "T__27",
    "T__28",
    "T__29",
    "T__30",
    "T__31",
    "T__32",
    "T__33",
    "T__34",
    "T__35",
    "T__36",
    "T__37",
    "T__38",
    "T__39",
    "T__40",
    "T__41",
    "T__42",
    "T__43",
    "T__44",
    "T__45",
    "T__46",
    "T__47",
    "T__48",
    "T__49",
    "T__50",
    "T__51",
    "T__52",
    "T__53",
    "T__54",
    "T__55",
    "T__56",
    "T__57",
    "T__58",
    "T__59",
    "T__60",
    "T__61",
    "Identifier",
    "VALID_SEMVER",
    "VERSION_CORE",
    "MAJOR",
    "MINOR",
    "PATCH",
    "PRERELEASE",
    "DOTSEPERATED_PRERELEASE_ID",
    "BUILD",
    "DOTSEPERATED_BUILD_ID",
    "PRERELEASE_ID",
    "BUILD_ID",
    "ALPHANUM_ID",
    "NUM_ID",
    "ID_CHARS",
    "ID_CHAR",
    "NON_DIGIT",
    "DIGITS",
    "DIGIT",
    "POSITIVE_DIGIT",
    "LETTER",
    "HexadecimalDigit",
    "DASH",
    "PLUS",
    "DOT",
    "COMMENT",
    "LINE_COMMENT",
    "WS"
  ];
  constructor(input) {
    super(input);
    this._interp = new un(this, _WitLexer._ATN, _WitLexer.DecisionsToDFA, new mn());
  }
  get grammarFileName() {
    return "Wit.g4";
  }
  get literalNames() {
    return _WitLexer.literalNames;
  }
  get symbolicNames() {
    return _WitLexer.symbolicNames;
  }
  get ruleNames() {
    return _WitLexer.ruleNames;
  }
  get serializedATN() {
    return _WitLexer._serializedATN;
  }
  get channelNames() {
    return _WitLexer.channelNames;
  }
  get modeNames() {
    return _WitLexer.modeNames;
  }
  static _serializedATN = [
    4,
    0,
    86,
    646,
    6,
    -1,
    2,
    0,
    7,
    0,
    2,
    1,
    7,
    1,
    2,
    2,
    7,
    2,
    2,
    3,
    7,
    3,
    2,
    4,
    7,
    4,
    2,
    5,
    7,
    5,
    2,
    6,
    7,
    6,
    2,
    7,
    7,
    7,
    2,
    8,
    7,
    8,
    2,
    9,
    7,
    9,
    2,
    10,
    7,
    10,
    2,
    11,
    7,
    11,
    2,
    12,
    7,
    12,
    2,
    13,
    7,
    13,
    2,
    14,
    7,
    14,
    2,
    15,
    7,
    15,
    2,
    16,
    7,
    16,
    2,
    17,
    7,
    17,
    2,
    18,
    7,
    18,
    2,
    19,
    7,
    19,
    2,
    20,
    7,
    20,
    2,
    21,
    7,
    21,
    2,
    22,
    7,
    22,
    2,
    23,
    7,
    23,
    2,
    24,
    7,
    24,
    2,
    25,
    7,
    25,
    2,
    26,
    7,
    26,
    2,
    27,
    7,
    27,
    2,
    28,
    7,
    28,
    2,
    29,
    7,
    29,
    2,
    30,
    7,
    30,
    2,
    31,
    7,
    31,
    2,
    32,
    7,
    32,
    2,
    33,
    7,
    33,
    2,
    34,
    7,
    34,
    2,
    35,
    7,
    35,
    2,
    36,
    7,
    36,
    2,
    37,
    7,
    37,
    2,
    38,
    7,
    38,
    2,
    39,
    7,
    39,
    2,
    40,
    7,
    40,
    2,
    41,
    7,
    41,
    2,
    42,
    7,
    42,
    2,
    43,
    7,
    43,
    2,
    44,
    7,
    44,
    2,
    45,
    7,
    45,
    2,
    46,
    7,
    46,
    2,
    47,
    7,
    47,
    2,
    48,
    7,
    48,
    2,
    49,
    7,
    49,
    2,
    50,
    7,
    50,
    2,
    51,
    7,
    51,
    2,
    52,
    7,
    52,
    2,
    53,
    7,
    53,
    2,
    54,
    7,
    54,
    2,
    55,
    7,
    55,
    2,
    56,
    7,
    56,
    2,
    57,
    7,
    57,
    2,
    58,
    7,
    58,
    2,
    59,
    7,
    59,
    2,
    60,
    7,
    60,
    2,
    61,
    7,
    61,
    2,
    62,
    7,
    62,
    2,
    63,
    7,
    63,
    2,
    64,
    7,
    64,
    2,
    65,
    7,
    65,
    2,
    66,
    7,
    66,
    2,
    67,
    7,
    67,
    2,
    68,
    7,
    68,
    2,
    69,
    7,
    69,
    2,
    70,
    7,
    70,
    2,
    71,
    7,
    71,
    2,
    72,
    7,
    72,
    2,
    73,
    7,
    73,
    2,
    74,
    7,
    74,
    2,
    75,
    7,
    75,
    2,
    76,
    7,
    76,
    2,
    77,
    7,
    77,
    2,
    78,
    7,
    78,
    2,
    79,
    7,
    79,
    2,
    80,
    7,
    80,
    2,
    81,
    7,
    81,
    2,
    82,
    7,
    82,
    2,
    83,
    7,
    83,
    2,
    84,
    7,
    84,
    2,
    85,
    7,
    85,
    2,
    86,
    7,
    86,
    2,
    87,
    7,
    87,
    2,
    88,
    7,
    88,
    2,
    89,
    7,
    89,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    3,
    1,
    3,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    5,
    1,
    5,
    1,
    6,
    1,
    6,
    1,
    7,
    1,
    7,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    12,
    1,
    12,
    1,
    12,
    1,
    12,
    1,
    12,
    1,
    12,
    1,
    12,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    14,
    1,
    14,
    1,
    14,
    1,
    14,
    1,
    14,
    1,
    14,
    1,
    14,
    1,
    14,
    1,
    15,
    1,
    15,
    1,
    15,
    1,
    15,
    1,
    15,
    1,
    16,
    1,
    16,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    18,
    1,
    18,
    1,
    19,
    1,
    19,
    1,
    20,
    1,
    20,
    1,
    20,
    1,
    21,
    1,
    21,
    1,
    21,
    1,
    21,
    1,
    21,
    1,
    22,
    1,
    22,
    1,
    23,
    1,
    23,
    1,
    23,
    1,
    23,
    1,
    23,
    1,
    23,
    1,
    23,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    27,
    1,
    27,
    1,
    27,
    1,
    27,
    1,
    27,
    1,
    27,
    1,
    27,
    1,
    27,
    1,
    27,
    1,
    28,
    1,
    28,
    1,
    28,
    1,
    28,
    1,
    28,
    1,
    28,
    1,
    28,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    30,
    1,
    30,
    1,
    30,
    1,
    31,
    1,
    31,
    1,
    31,
    1,
    31,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    33,
    1,
    33,
    1,
    33,
    1,
    33,
    1,
    34,
    1,
    34,
    1,
    34,
    1,
    35,
    1,
    35,
    1,
    35,
    1,
    35,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    37,
    1,
    37,
    1,
    37,
    1,
    37,
    1,
    38,
    1,
    38,
    1,
    38,
    1,
    38,
    1,
    39,
    1,
    39,
    1,
    39,
    1,
    39,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    44,
    1,
    44,
    1,
    45,
    1,
    45,
    1,
    46,
    1,
    46,
    1,
    46,
    1,
    46,
    1,
    46,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    49,
    1,
    49,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    56,
    1,
    56,
    1,
    57,
    1,
    57,
    1,
    58,
    1,
    58,
    1,
    58,
    1,
    58,
    1,
    58,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    60,
    1,
    60,
    1,
    60,
    1,
    60,
    1,
    61,
    1,
    61,
    1,
    61,
    1,
    61,
    1,
    61,
    1,
    61,
    1,
    61,
    1,
    62,
    1,
    62,
    1,
    62,
    1,
    62,
    5,
    62,
    501,
    8,
    62,
    10,
    62,
    12,
    62,
    504,
    9,
    62,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    3,
    63,
    521,
    8,
    63,
    1,
    64,
    1,
    64,
    1,
    64,
    1,
    64,
    1,
    64,
    1,
    64,
    1,
    65,
    1,
    65,
    1,
    66,
    1,
    66,
    1,
    67,
    1,
    67,
    1,
    68,
    1,
    68,
    1,
    69,
    1,
    69,
    1,
    69,
    1,
    69,
    1,
    69,
    3,
    69,
    542,
    8,
    69,
    1,
    70,
    1,
    70,
    1,
    71,
    1,
    71,
    1,
    71,
    1,
    71,
    1,
    71,
    3,
    71,
    551,
    8,
    71,
    1,
    72,
    1,
    72,
    3,
    72,
    555,
    8,
    72,
    1,
    73,
    1,
    73,
    3,
    73,
    559,
    8,
    73,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    74,
    3,
    74,
    572,
    8,
    74,
    1,
    75,
    1,
    75,
    1,
    75,
    1,
    75,
    1,
    75,
    3,
    75,
    579,
    8,
    75,
    1,
    76,
    1,
    76,
    1,
    76,
    1,
    76,
    3,
    76,
    585,
    8,
    76,
    1,
    77,
    1,
    77,
    3,
    77,
    589,
    8,
    77,
    1,
    78,
    1,
    78,
    3,
    78,
    593,
    8,
    78,
    1,
    79,
    1,
    79,
    1,
    79,
    1,
    79,
    3,
    79,
    599,
    8,
    79,
    1,
    80,
    1,
    80,
    1,
    81,
    1,
    81,
    1,
    82,
    1,
    82,
    1,
    83,
    1,
    83,
    1,
    84,
    1,
    84,
    1,
    85,
    1,
    85,
    1,
    86,
    1,
    86,
    1,
    87,
    1,
    87,
    1,
    87,
    1,
    87,
    5,
    87,
    619,
    8,
    87,
    10,
    87,
    12,
    87,
    622,
    9,
    87,
    1,
    87,
    1,
    87,
    1,
    87,
    1,
    87,
    1,
    87,
    1,
    88,
    1,
    88,
    1,
    88,
    1,
    88,
    5,
    88,
    633,
    8,
    88,
    10,
    88,
    12,
    88,
    636,
    9,
    88,
    1,
    88,
    1,
    88,
    1,
    89,
    4,
    89,
    641,
    8,
    89,
    11,
    89,
    12,
    89,
    642,
    1,
    89,
    1,
    89,
    1,
    620,
    0,
    90,
    1,
    1,
    3,
    2,
    5,
    3,
    7,
    4,
    9,
    5,
    11,
    6,
    13,
    7,
    15,
    8,
    17,
    9,
    19,
    10,
    21,
    11,
    23,
    12,
    25,
    13,
    27,
    14,
    29,
    15,
    31,
    16,
    33,
    17,
    35,
    18,
    37,
    19,
    39,
    20,
    41,
    21,
    43,
    22,
    45,
    23,
    47,
    24,
    49,
    25,
    51,
    26,
    53,
    27,
    55,
    28,
    57,
    29,
    59,
    30,
    61,
    31,
    63,
    32,
    65,
    33,
    67,
    34,
    69,
    35,
    71,
    36,
    73,
    37,
    75,
    38,
    77,
    39,
    79,
    40,
    81,
    41,
    83,
    42,
    85,
    43,
    87,
    44,
    89,
    45,
    91,
    46,
    93,
    47,
    95,
    48,
    97,
    49,
    99,
    50,
    101,
    51,
    103,
    52,
    105,
    53,
    107,
    54,
    109,
    55,
    111,
    56,
    113,
    57,
    115,
    58,
    117,
    59,
    119,
    60,
    121,
    61,
    123,
    62,
    125,
    63,
    127,
    64,
    129,
    65,
    131,
    66,
    133,
    67,
    135,
    68,
    137,
    69,
    139,
    70,
    141,
    71,
    143,
    72,
    145,
    73,
    147,
    74,
    149,
    75,
    151,
    76,
    153,
    77,
    155,
    78,
    157,
    79,
    159,
    80,
    161,
    0,
    163,
    0,
    165,
    0,
    167,
    0,
    169,
    81,
    171,
    82,
    173,
    83,
    175,
    84,
    177,
    85,
    179,
    86,
    1,
    0,
    6,
    1,
    0,
    48,
    57,
    1,
    0,
    49,
    57,
    2,
    0,
    65,
    90,
    97,
    122,
    3,
    0,
    48,
    57,
    65,
    70,
    97,
    102,
    2,
    0,
    10,
    10,
    13,
    13,
    3,
    0,
    9,
    10,
    13,
    13,
    32,
    32,
    663,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    3,
    1,
    0,
    0,
    0,
    0,
    5,
    1,
    0,
    0,
    0,
    0,
    7,
    1,
    0,
    0,
    0,
    0,
    9,
    1,
    0,
    0,
    0,
    0,
    11,
    1,
    0,
    0,
    0,
    0,
    13,
    1,
    0,
    0,
    0,
    0,
    15,
    1,
    0,
    0,
    0,
    0,
    17,
    1,
    0,
    0,
    0,
    0,
    19,
    1,
    0,
    0,
    0,
    0,
    21,
    1,
    0,
    0,
    0,
    0,
    23,
    1,
    0,
    0,
    0,
    0,
    25,
    1,
    0,
    0,
    0,
    0,
    27,
    1,
    0,
    0,
    0,
    0,
    29,
    1,
    0,
    0,
    0,
    0,
    31,
    1,
    0,
    0,
    0,
    0,
    33,
    1,
    0,
    0,
    0,
    0,
    35,
    1,
    0,
    0,
    0,
    0,
    37,
    1,
    0,
    0,
    0,
    0,
    39,
    1,
    0,
    0,
    0,
    0,
    41,
    1,
    0,
    0,
    0,
    0,
    43,
    1,
    0,
    0,
    0,
    0,
    45,
    1,
    0,
    0,
    0,
    0,
    47,
    1,
    0,
    0,
    0,
    0,
    49,
    1,
    0,
    0,
    0,
    0,
    51,
    1,
    0,
    0,
    0,
    0,
    53,
    1,
    0,
    0,
    0,
    0,
    55,
    1,
    0,
    0,
    0,
    0,
    57,
    1,
    0,
    0,
    0,
    0,
    59,
    1,
    0,
    0,
    0,
    0,
    61,
    1,
    0,
    0,
    0,
    0,
    63,
    1,
    0,
    0,
    0,
    0,
    65,
    1,
    0,
    0,
    0,
    0,
    67,
    1,
    0,
    0,
    0,
    0,
    69,
    1,
    0,
    0,
    0,
    0,
    71,
    1,
    0,
    0,
    0,
    0,
    73,
    1,
    0,
    0,
    0,
    0,
    75,
    1,
    0,
    0,
    0,
    0,
    77,
    1,
    0,
    0,
    0,
    0,
    79,
    1,
    0,
    0,
    0,
    0,
    81,
    1,
    0,
    0,
    0,
    0,
    83,
    1,
    0,
    0,
    0,
    0,
    85,
    1,
    0,
    0,
    0,
    0,
    87,
    1,
    0,
    0,
    0,
    0,
    89,
    1,
    0,
    0,
    0,
    0,
    91,
    1,
    0,
    0,
    0,
    0,
    93,
    1,
    0,
    0,
    0,
    0,
    95,
    1,
    0,
    0,
    0,
    0,
    97,
    1,
    0,
    0,
    0,
    0,
    99,
    1,
    0,
    0,
    0,
    0,
    101,
    1,
    0,
    0,
    0,
    0,
    103,
    1,
    0,
    0,
    0,
    0,
    105,
    1,
    0,
    0,
    0,
    0,
    107,
    1,
    0,
    0,
    0,
    0,
    109,
    1,
    0,
    0,
    0,
    0,
    111,
    1,
    0,
    0,
    0,
    0,
    113,
    1,
    0,
    0,
    0,
    0,
    115,
    1,
    0,
    0,
    0,
    0,
    117,
    1,
    0,
    0,
    0,
    0,
    119,
    1,
    0,
    0,
    0,
    0,
    121,
    1,
    0,
    0,
    0,
    0,
    123,
    1,
    0,
    0,
    0,
    0,
    125,
    1,
    0,
    0,
    0,
    0,
    127,
    1,
    0,
    0,
    0,
    0,
    129,
    1,
    0,
    0,
    0,
    0,
    131,
    1,
    0,
    0,
    0,
    0,
    133,
    1,
    0,
    0,
    0,
    0,
    135,
    1,
    0,
    0,
    0,
    0,
    137,
    1,
    0,
    0,
    0,
    0,
    139,
    1,
    0,
    0,
    0,
    0,
    141,
    1,
    0,
    0,
    0,
    0,
    143,
    1,
    0,
    0,
    0,
    0,
    145,
    1,
    0,
    0,
    0,
    0,
    147,
    1,
    0,
    0,
    0,
    0,
    149,
    1,
    0,
    0,
    0,
    0,
    151,
    1,
    0,
    0,
    0,
    0,
    153,
    1,
    0,
    0,
    0,
    0,
    155,
    1,
    0,
    0,
    0,
    0,
    157,
    1,
    0,
    0,
    0,
    0,
    159,
    1,
    0,
    0,
    0,
    0,
    169,
    1,
    0,
    0,
    0,
    0,
    171,
    1,
    0,
    0,
    0,
    0,
    173,
    1,
    0,
    0,
    0,
    0,
    175,
    1,
    0,
    0,
    0,
    0,
    177,
    1,
    0,
    0,
    0,
    0,
    179,
    1,
    0,
    0,
    0,
    1,
    181,
    1,
    0,
    0,
    0,
    3,
    186,
    1,
    0,
    0,
    0,
    5,
    188,
    1,
    0,
    0,
    0,
    7,
    190,
    1,
    0,
    0,
    0,
    9,
    192,
    1,
    0,
    0,
    0,
    11,
    200,
    1,
    0,
    0,
    0,
    13,
    202,
    1,
    0,
    0,
    0,
    15,
    204,
    1,
    0,
    0,
    0,
    17,
    206,
    1,
    0,
    0,
    0,
    19,
    210,
    1,
    0,
    0,
    0,
    21,
    213,
    1,
    0,
    0,
    0,
    23,
    219,
    1,
    0,
    0,
    0,
    25,
    226,
    1,
    0,
    0,
    0,
    27,
    233,
    1,
    0,
    0,
    0,
    29,
    243,
    1,
    0,
    0,
    0,
    31,
    251,
    1,
    0,
    0,
    0,
    33,
    256,
    1,
    0,
    0,
    0,
    35,
    258,
    1,
    0,
    0,
    0,
    37,
    263,
    1,
    0,
    0,
    0,
    39,
    265,
    1,
    0,
    0,
    0,
    41,
    267,
    1,
    0,
    0,
    0,
    43,
    270,
    1,
    0,
    0,
    0,
    45,
    275,
    1,
    0,
    0,
    0,
    47,
    277,
    1,
    0,
    0,
    0,
    49,
    284,
    1,
    0,
    0,
    0,
    51,
    290,
    1,
    0,
    0,
    0,
    53,
    298,
    1,
    0,
    0,
    0,
    55,
    303,
    1,
    0,
    0,
    0,
    57,
    312,
    1,
    0,
    0,
    0,
    59,
    319,
    1,
    0,
    0,
    0,
    61,
    331,
    1,
    0,
    0,
    0,
    63,
    334,
    1,
    0,
    0,
    0,
    65,
    338,
    1,
    0,
    0,
    0,
    67,
    342,
    1,
    0,
    0,
    0,
    69,
    346,
    1,
    0,
    0,
    0,
    71,
    349,
    1,
    0,
    0,
    0,
    73,
    353,
    1,
    0,
    0,
    0,
    75,
    357,
    1,
    0,
    0,
    0,
    77,
    361,
    1,
    0,
    0,
    0,
    79,
    365,
    1,
    0,
    0,
    0,
    81,
    369,
    1,
    0,
    0,
    0,
    83,
    374,
    1,
    0,
    0,
    0,
    85,
    379,
    1,
    0,
    0,
    0,
    87,
    386,
    1,
    0,
    0,
    0,
    89,
    392,
    1,
    0,
    0,
    0,
    91,
    394,
    1,
    0,
    0,
    0,
    93,
    396,
    1,
    0,
    0,
    0,
    95,
    401,
    1,
    0,
    0,
    0,
    97,
    408,
    1,
    0,
    0,
    0,
    99,
    415,
    1,
    0,
    0,
    0,
    101,
    417,
    1,
    0,
    0,
    0,
    103,
    424,
    1,
    0,
    0,
    0,
    105,
    434,
    1,
    0,
    0,
    0,
    107,
    441,
    1,
    0,
    0,
    0,
    109,
    453,
    1,
    0,
    0,
    0,
    111,
    461,
    1,
    0,
    0,
    0,
    113,
    469,
    1,
    0,
    0,
    0,
    115,
    471,
    1,
    0,
    0,
    0,
    117,
    473,
    1,
    0,
    0,
    0,
    119,
    478,
    1,
    0,
    0,
    0,
    121,
    485,
    1,
    0,
    0,
    0,
    123,
    489,
    1,
    0,
    0,
    0,
    125,
    496,
    1,
    0,
    0,
    0,
    127,
    520,
    1,
    0,
    0,
    0,
    129,
    522,
    1,
    0,
    0,
    0,
    131,
    528,
    1,
    0,
    0,
    0,
    133,
    530,
    1,
    0,
    0,
    0,
    135,
    532,
    1,
    0,
    0,
    0,
    137,
    534,
    1,
    0,
    0,
    0,
    139,
    541,
    1,
    0,
    0,
    0,
    141,
    543,
    1,
    0,
    0,
    0,
    143,
    550,
    1,
    0,
    0,
    0,
    145,
    554,
    1,
    0,
    0,
    0,
    147,
    558,
    1,
    0,
    0,
    0,
    149,
    571,
    1,
    0,
    0,
    0,
    151,
    578,
    1,
    0,
    0,
    0,
    153,
    584,
    1,
    0,
    0,
    0,
    155,
    588,
    1,
    0,
    0,
    0,
    157,
    592,
    1,
    0,
    0,
    0,
    159,
    598,
    1,
    0,
    0,
    0,
    161,
    600,
    1,
    0,
    0,
    0,
    163,
    602,
    1,
    0,
    0,
    0,
    165,
    604,
    1,
    0,
    0,
    0,
    167,
    606,
    1,
    0,
    0,
    0,
    169,
    608,
    1,
    0,
    0,
    0,
    171,
    610,
    1,
    0,
    0,
    0,
    173,
    612,
    1,
    0,
    0,
    0,
    175,
    614,
    1,
    0,
    0,
    0,
    177,
    628,
    1,
    0,
    0,
    0,
    179,
    640,
    1,
    0,
    0,
    0,
    181,
    182,
    5,
    116,
    0,
    0,
    182,
    183,
    5,
    101,
    0,
    0,
    183,
    184,
    5,
    115,
    0,
    0,
    184,
    185,
    5,
    116,
    0,
    0,
    185,
    2,
    1,
    0,
    0,
    0,
    186,
    187,
    5,
    59,
    0,
    0,
    187,
    4,
    1,
    0,
    0,
    0,
    188,
    189,
    5,
    123,
    0,
    0,
    189,
    6,
    1,
    0,
    0,
    0,
    190,
    191,
    5,
    125,
    0,
    0,
    191,
    8,
    1,
    0,
    0,
    0,
    192,
    193,
    5,
    112,
    0,
    0,
    193,
    194,
    5,
    97,
    0,
    0,
    194,
    195,
    5,
    99,
    0,
    0,
    195,
    196,
    5,
    107,
    0,
    0,
    196,
    197,
    5,
    97,
    0,
    0,
    197,
    198,
    5,
    103,
    0,
    0,
    198,
    199,
    5,
    101,
    0,
    0,
    199,
    10,
    1,
    0,
    0,
    0,
    200,
    201,
    5,
    58,
    0,
    0,
    201,
    12,
    1,
    0,
    0,
    0,
    202,
    203,
    5,
    47,
    0,
    0,
    203,
    14,
    1,
    0,
    0,
    0,
    204,
    205,
    5,
    64,
    0,
    0,
    205,
    16,
    1,
    0,
    0,
    0,
    206,
    207,
    5,
    117,
    0,
    0,
    207,
    208,
    5,
    115,
    0,
    0,
    208,
    209,
    5,
    101,
    0,
    0,
    209,
    18,
    1,
    0,
    0,
    0,
    210,
    211,
    5,
    97,
    0,
    0,
    211,
    212,
    5,
    115,
    0,
    0,
    212,
    20,
    1,
    0,
    0,
    0,
    213,
    214,
    5,
    119,
    0,
    0,
    214,
    215,
    5,
    111,
    0,
    0,
    215,
    216,
    5,
    114,
    0,
    0,
    216,
    217,
    5,
    108,
    0,
    0,
    217,
    218,
    5,
    100,
    0,
    0,
    218,
    22,
    1,
    0,
    0,
    0,
    219,
    220,
    5,
    101,
    0,
    0,
    220,
    221,
    5,
    120,
    0,
    0,
    221,
    222,
    5,
    112,
    0,
    0,
    222,
    223,
    5,
    111,
    0,
    0,
    223,
    224,
    5,
    114,
    0,
    0,
    224,
    225,
    5,
    116,
    0,
    0,
    225,
    24,
    1,
    0,
    0,
    0,
    226,
    227,
    5,
    105,
    0,
    0,
    227,
    228,
    5,
    109,
    0,
    0,
    228,
    229,
    5,
    112,
    0,
    0,
    229,
    230,
    5,
    111,
    0,
    0,
    230,
    231,
    5,
    114,
    0,
    0,
    231,
    232,
    5,
    116,
    0,
    0,
    232,
    26,
    1,
    0,
    0,
    0,
    233,
    234,
    5,
    105,
    0,
    0,
    234,
    235,
    5,
    110,
    0,
    0,
    235,
    236,
    5,
    116,
    0,
    0,
    236,
    237,
    5,
    101,
    0,
    0,
    237,
    238,
    5,
    114,
    0,
    0,
    238,
    239,
    5,
    102,
    0,
    0,
    239,
    240,
    5,
    97,
    0,
    0,
    240,
    241,
    5,
    99,
    0,
    0,
    241,
    242,
    5,
    101,
    0,
    0,
    242,
    28,
    1,
    0,
    0,
    0,
    243,
    244,
    5,
    105,
    0,
    0,
    244,
    245,
    5,
    110,
    0,
    0,
    245,
    246,
    5,
    99,
    0,
    0,
    246,
    247,
    5,
    108,
    0,
    0,
    247,
    248,
    5,
    117,
    0,
    0,
    248,
    249,
    5,
    100,
    0,
    0,
    249,
    250,
    5,
    101,
    0,
    0,
    250,
    30,
    1,
    0,
    0,
    0,
    251,
    252,
    5,
    119,
    0,
    0,
    252,
    253,
    5,
    105,
    0,
    0,
    253,
    254,
    5,
    116,
    0,
    0,
    254,
    255,
    5,
    104,
    0,
    0,
    255,
    32,
    1,
    0,
    0,
    0,
    256,
    257,
    5,
    44,
    0,
    0,
    257,
    34,
    1,
    0,
    0,
    0,
    258,
    259,
    5,
    102,
    0,
    0,
    259,
    260,
    5,
    117,
    0,
    0,
    260,
    261,
    5,
    110,
    0,
    0,
    261,
    262,
    5,
    99,
    0,
    0,
    262,
    36,
    1,
    0,
    0,
    0,
    263,
    264,
    5,
    40,
    0,
    0,
    264,
    38,
    1,
    0,
    0,
    0,
    265,
    266,
    5,
    41,
    0,
    0,
    266,
    40,
    1,
    0,
    0,
    0,
    267,
    268,
    5,
    45,
    0,
    0,
    268,
    269,
    5,
    62,
    0,
    0,
    269,
    42,
    1,
    0,
    0,
    0,
    270,
    271,
    5,
    116,
    0,
    0,
    271,
    272,
    5,
    121,
    0,
    0,
    272,
    273,
    5,
    112,
    0,
    0,
    273,
    274,
    5,
    101,
    0,
    0,
    274,
    44,
    1,
    0,
    0,
    0,
    275,
    276,
    5,
    61,
    0,
    0,
    276,
    46,
    1,
    0,
    0,
    0,
    277,
    278,
    5,
    114,
    0,
    0,
    278,
    279,
    5,
    101,
    0,
    0,
    279,
    280,
    5,
    99,
    0,
    0,
    280,
    281,
    5,
    111,
    0,
    0,
    281,
    282,
    5,
    114,
    0,
    0,
    282,
    283,
    5,
    100,
    0,
    0,
    283,
    48,
    1,
    0,
    0,
    0,
    284,
    285,
    5,
    102,
    0,
    0,
    285,
    286,
    5,
    108,
    0,
    0,
    286,
    287,
    5,
    97,
    0,
    0,
    287,
    288,
    5,
    103,
    0,
    0,
    288,
    289,
    5,
    115,
    0,
    0,
    289,
    50,
    1,
    0,
    0,
    0,
    290,
    291,
    5,
    118,
    0,
    0,
    291,
    292,
    5,
    97,
    0,
    0,
    292,
    293,
    5,
    114,
    0,
    0,
    293,
    294,
    5,
    105,
    0,
    0,
    294,
    295,
    5,
    97,
    0,
    0,
    295,
    296,
    5,
    110,
    0,
    0,
    296,
    297,
    5,
    116,
    0,
    0,
    297,
    52,
    1,
    0,
    0,
    0,
    298,
    299,
    5,
    101,
    0,
    0,
    299,
    300,
    5,
    110,
    0,
    0,
    300,
    301,
    5,
    117,
    0,
    0,
    301,
    302,
    5,
    109,
    0,
    0,
    302,
    54,
    1,
    0,
    0,
    0,
    303,
    304,
    5,
    114,
    0,
    0,
    304,
    305,
    5,
    101,
    0,
    0,
    305,
    306,
    5,
    115,
    0,
    0,
    306,
    307,
    5,
    111,
    0,
    0,
    307,
    308,
    5,
    117,
    0,
    0,
    308,
    309,
    5,
    114,
    0,
    0,
    309,
    310,
    5,
    99,
    0,
    0,
    310,
    311,
    5,
    101,
    0,
    0,
    311,
    56,
    1,
    0,
    0,
    0,
    312,
    313,
    5,
    115,
    0,
    0,
    313,
    314,
    5,
    116,
    0,
    0,
    314,
    315,
    5,
    97,
    0,
    0,
    315,
    316,
    5,
    116,
    0,
    0,
    316,
    317,
    5,
    105,
    0,
    0,
    317,
    318,
    5,
    99,
    0,
    0,
    318,
    58,
    1,
    0,
    0,
    0,
    319,
    320,
    5,
    99,
    0,
    0,
    320,
    321,
    5,
    111,
    0,
    0,
    321,
    322,
    5,
    110,
    0,
    0,
    322,
    323,
    5,
    115,
    0,
    0,
    323,
    324,
    5,
    116,
    0,
    0,
    324,
    325,
    5,
    114,
    0,
    0,
    325,
    326,
    5,
    117,
    0,
    0,
    326,
    327,
    5,
    99,
    0,
    0,
    327,
    328,
    5,
    116,
    0,
    0,
    328,
    329,
    5,
    111,
    0,
    0,
    329,
    330,
    5,
    114,
    0,
    0,
    330,
    60,
    1,
    0,
    0,
    0,
    331,
    332,
    5,
    117,
    0,
    0,
    332,
    333,
    5,
    56,
    0,
    0,
    333,
    62,
    1,
    0,
    0,
    0,
    334,
    335,
    5,
    117,
    0,
    0,
    335,
    336,
    5,
    49,
    0,
    0,
    336,
    337,
    5,
    54,
    0,
    0,
    337,
    64,
    1,
    0,
    0,
    0,
    338,
    339,
    5,
    117,
    0,
    0,
    339,
    340,
    5,
    51,
    0,
    0,
    340,
    341,
    5,
    50,
    0,
    0,
    341,
    66,
    1,
    0,
    0,
    0,
    342,
    343,
    5,
    117,
    0,
    0,
    343,
    344,
    5,
    54,
    0,
    0,
    344,
    345,
    5,
    52,
    0,
    0,
    345,
    68,
    1,
    0,
    0,
    0,
    346,
    347,
    5,
    115,
    0,
    0,
    347,
    348,
    5,
    56,
    0,
    0,
    348,
    70,
    1,
    0,
    0,
    0,
    349,
    350,
    5,
    115,
    0,
    0,
    350,
    351,
    5,
    49,
    0,
    0,
    351,
    352,
    5,
    54,
    0,
    0,
    352,
    72,
    1,
    0,
    0,
    0,
    353,
    354,
    5,
    115,
    0,
    0,
    354,
    355,
    5,
    51,
    0,
    0,
    355,
    356,
    5,
    50,
    0,
    0,
    356,
    74,
    1,
    0,
    0,
    0,
    357,
    358,
    5,
    115,
    0,
    0,
    358,
    359,
    5,
    54,
    0,
    0,
    359,
    360,
    5,
    52,
    0,
    0,
    360,
    76,
    1,
    0,
    0,
    0,
    361,
    362,
    5,
    102,
    0,
    0,
    362,
    363,
    5,
    51,
    0,
    0,
    363,
    364,
    5,
    50,
    0,
    0,
    364,
    78,
    1,
    0,
    0,
    0,
    365,
    366,
    5,
    102,
    0,
    0,
    366,
    367,
    5,
    54,
    0,
    0,
    367,
    368,
    5,
    52,
    0,
    0,
    368,
    80,
    1,
    0,
    0,
    0,
    369,
    370,
    5,
    99,
    0,
    0,
    370,
    371,
    5,
    104,
    0,
    0,
    371,
    372,
    5,
    97,
    0,
    0,
    372,
    373,
    5,
    114,
    0,
    0,
    373,
    82,
    1,
    0,
    0,
    0,
    374,
    375,
    5,
    98,
    0,
    0,
    375,
    376,
    5,
    111,
    0,
    0,
    376,
    377,
    5,
    111,
    0,
    0,
    377,
    378,
    5,
    108,
    0,
    0,
    378,
    84,
    1,
    0,
    0,
    0,
    379,
    380,
    5,
    115,
    0,
    0,
    380,
    381,
    5,
    116,
    0,
    0,
    381,
    382,
    5,
    114,
    0,
    0,
    382,
    383,
    5,
    105,
    0,
    0,
    383,
    384,
    5,
    110,
    0,
    0,
    384,
    385,
    5,
    103,
    0,
    0,
    385,
    86,
    1,
    0,
    0,
    0,
    386,
    387,
    5,
    116,
    0,
    0,
    387,
    388,
    5,
    117,
    0,
    0,
    388,
    389,
    5,
    112,
    0,
    0,
    389,
    390,
    5,
    108,
    0,
    0,
    390,
    391,
    5,
    101,
    0,
    0,
    391,
    88,
    1,
    0,
    0,
    0,
    392,
    393,
    5,
    60,
    0,
    0,
    393,
    90,
    1,
    0,
    0,
    0,
    394,
    395,
    5,
    62,
    0,
    0,
    395,
    92,
    1,
    0,
    0,
    0,
    396,
    397,
    5,
    108,
    0,
    0,
    397,
    398,
    5,
    105,
    0,
    0,
    398,
    399,
    5,
    115,
    0,
    0,
    399,
    400,
    5,
    116,
    0,
    0,
    400,
    94,
    1,
    0,
    0,
    0,
    401,
    402,
    5,
    111,
    0,
    0,
    402,
    403,
    5,
    112,
    0,
    0,
    403,
    404,
    5,
    116,
    0,
    0,
    404,
    405,
    5,
    105,
    0,
    0,
    405,
    406,
    5,
    111,
    0,
    0,
    406,
    407,
    5,
    110,
    0,
    0,
    407,
    96,
    1,
    0,
    0,
    0,
    408,
    409,
    5,
    114,
    0,
    0,
    409,
    410,
    5,
    101,
    0,
    0,
    410,
    411,
    5,
    115,
    0,
    0,
    411,
    412,
    5,
    117,
    0,
    0,
    412,
    413,
    5,
    108,
    0,
    0,
    413,
    414,
    5,
    116,
    0,
    0,
    414,
    98,
    1,
    0,
    0,
    0,
    415,
    416,
    5,
    95,
    0,
    0,
    416,
    100,
    1,
    0,
    0,
    0,
    417,
    418,
    5,
    98,
    0,
    0,
    418,
    419,
    5,
    111,
    0,
    0,
    419,
    420,
    5,
    114,
    0,
    0,
    420,
    421,
    5,
    114,
    0,
    0,
    421,
    422,
    5,
    111,
    0,
    0,
    422,
    423,
    5,
    119,
    0,
    0,
    423,
    102,
    1,
    0,
    0,
    0,
    424,
    425,
    5,
    64,
    0,
    0,
    425,
    426,
    5,
    117,
    0,
    0,
    426,
    427,
    5,
    110,
    0,
    0,
    427,
    428,
    5,
    115,
    0,
    0,
    428,
    429,
    5,
    116,
    0,
    0,
    429,
    430,
    5,
    97,
    0,
    0,
    430,
    431,
    5,
    98,
    0,
    0,
    431,
    432,
    5,
    108,
    0,
    0,
    432,
    433,
    5,
    101,
    0,
    0,
    433,
    104,
    1,
    0,
    0,
    0,
    434,
    435,
    5,
    64,
    0,
    0,
    435,
    436,
    5,
    115,
    0,
    0,
    436,
    437,
    5,
    105,
    0,
    0,
    437,
    438,
    5,
    110,
    0,
    0,
    438,
    439,
    5,
    99,
    0,
    0,
    439,
    440,
    5,
    101,
    0,
    0,
    440,
    106,
    1,
    0,
    0,
    0,
    441,
    442,
    5,
    64,
    0,
    0,
    442,
    443,
    5,
    100,
    0,
    0,
    443,
    444,
    5,
    101,
    0,
    0,
    444,
    445,
    5,
    112,
    0,
    0,
    445,
    446,
    5,
    114,
    0,
    0,
    446,
    447,
    5,
    101,
    0,
    0,
    447,
    448,
    5,
    99,
    0,
    0,
    448,
    449,
    5,
    97,
    0,
    0,
    449,
    450,
    5,
    116,
    0,
    0,
    450,
    451,
    5,
    101,
    0,
    0,
    451,
    452,
    5,
    100,
    0,
    0,
    452,
    108,
    1,
    0,
    0,
    0,
    453,
    454,
    5,
    102,
    0,
    0,
    454,
    455,
    5,
    101,
    0,
    0,
    455,
    456,
    5,
    97,
    0,
    0,
    456,
    457,
    5,
    116,
    0,
    0,
    457,
    458,
    5,
    117,
    0,
    0,
    458,
    459,
    5,
    114,
    0,
    0,
    459,
    460,
    5,
    101,
    0,
    0,
    460,
    110,
    1,
    0,
    0,
    0,
    461,
    462,
    5,
    118,
    0,
    0,
    462,
    463,
    5,
    101,
    0,
    0,
    463,
    464,
    5,
    114,
    0,
    0,
    464,
    465,
    5,
    115,
    0,
    0,
    465,
    466,
    5,
    105,
    0,
    0,
    466,
    467,
    5,
    111,
    0,
    0,
    467,
    468,
    5,
    110,
    0,
    0,
    468,
    112,
    1,
    0,
    0,
    0,
    469,
    470,
    5,
    42,
    0,
    0,
    470,
    114,
    1,
    0,
    0,
    0,
    471,
    472,
    5,
    37,
    0,
    0,
    472,
    116,
    1,
    0,
    0,
    0,
    473,
    474,
    5,
    102,
    0,
    0,
    474,
    475,
    5,
    114,
    0,
    0,
    475,
    476,
    5,
    111,
    0,
    0,
    476,
    477,
    5,
    109,
    0,
    0,
    477,
    118,
    1,
    0,
    0,
    0,
    478,
    479,
    5,
    102,
    0,
    0,
    479,
    480,
    5,
    117,
    0,
    0,
    480,
    481,
    5,
    116,
    0,
    0,
    481,
    482,
    5,
    117,
    0,
    0,
    482,
    483,
    5,
    114,
    0,
    0,
    483,
    484,
    5,
    101,
    0,
    0,
    484,
    120,
    1,
    0,
    0,
    0,
    485,
    486,
    5,
    111,
    0,
    0,
    486,
    487,
    5,
    119,
    0,
    0,
    487,
    488,
    5,
    110,
    0,
    0,
    488,
    122,
    1,
    0,
    0,
    0,
    489,
    490,
    5,
    115,
    0,
    0,
    490,
    491,
    5,
    116,
    0,
    0,
    491,
    492,
    5,
    114,
    0,
    0,
    492,
    493,
    5,
    101,
    0,
    0,
    493,
    494,
    5,
    97,
    0,
    0,
    494,
    495,
    5,
    109,
    0,
    0,
    495,
    124,
    1,
    0,
    0,
    0,
    496,
    502,
    3,
    165,
    82,
    0,
    497,
    501,
    3,
    165,
    82,
    0,
    498,
    501,
    3,
    161,
    80,
    0,
    499,
    501,
    5,
    45,
    0,
    0,
    500,
    497,
    1,
    0,
    0,
    0,
    500,
    498,
    1,
    0,
    0,
    0,
    500,
    499,
    1,
    0,
    0,
    0,
    501,
    504,
    1,
    0,
    0,
    0,
    502,
    500,
    1,
    0,
    0,
    0,
    502,
    503,
    1,
    0,
    0,
    0,
    503,
    126,
    1,
    0,
    0,
    0,
    504,
    502,
    1,
    0,
    0,
    0,
    505,
    521,
    3,
    129,
    64,
    0,
    506,
    507,
    3,
    129,
    64,
    0,
    507,
    508,
    3,
    169,
    84,
    0,
    508,
    509,
    3,
    137,
    68,
    0,
    509,
    521,
    1,
    0,
    0,
    0,
    510,
    511,
    3,
    129,
    64,
    0,
    511,
    512,
    3,
    171,
    85,
    0,
    512,
    513,
    3,
    141,
    70,
    0,
    513,
    521,
    1,
    0,
    0,
    0,
    514,
    515,
    3,
    129,
    64,
    0,
    515,
    516,
    3,
    169,
    84,
    0,
    516,
    517,
    3,
    137,
    68,
    0,
    517,
    518,
    3,
    171,
    85,
    0,
    518,
    519,
    3,
    141,
    70,
    0,
    519,
    521,
    1,
    0,
    0,
    0,
    520,
    505,
    1,
    0,
    0,
    0,
    520,
    506,
    1,
    0,
    0,
    0,
    520,
    510,
    1,
    0,
    0,
    0,
    520,
    514,
    1,
    0,
    0,
    0,
    521,
    128,
    1,
    0,
    0,
    0,
    522,
    523,
    3,
    131,
    65,
    0,
    523,
    524,
    3,
    173,
    86,
    0,
    524,
    525,
    3,
    133,
    66,
    0,
    525,
    526,
    3,
    173,
    86,
    0,
    526,
    527,
    3,
    135,
    67,
    0,
    527,
    130,
    1,
    0,
    0,
    0,
    528,
    529,
    3,
    151,
    75,
    0,
    529,
    132,
    1,
    0,
    0,
    0,
    530,
    531,
    3,
    151,
    75,
    0,
    531,
    134,
    1,
    0,
    0,
    0,
    532,
    533,
    3,
    151,
    75,
    0,
    533,
    136,
    1,
    0,
    0,
    0,
    534,
    535,
    3,
    139,
    69,
    0,
    535,
    138,
    1,
    0,
    0,
    0,
    536,
    542,
    3,
    145,
    72,
    0,
    537,
    538,
    3,
    145,
    72,
    0,
    538,
    539,
    3,
    173,
    86,
    0,
    539,
    540,
    3,
    139,
    69,
    0,
    540,
    542,
    1,
    0,
    0,
    0,
    541,
    536,
    1,
    0,
    0,
    0,
    541,
    537,
    1,
    0,
    0,
    0,
    542,
    140,
    1,
    0,
    0,
    0,
    543,
    544,
    3,
    143,
    71,
    0,
    544,
    142,
    1,
    0,
    0,
    0,
    545,
    551,
    3,
    147,
    73,
    0,
    546,
    547,
    3,
    147,
    73,
    0,
    547,
    548,
    3,
    173,
    86,
    0,
    548,
    549,
    3,
    143,
    71,
    0,
    549,
    551,
    1,
    0,
    0,
    0,
    550,
    545,
    1,
    0,
    0,
    0,
    550,
    546,
    1,
    0,
    0,
    0,
    551,
    144,
    1,
    0,
    0,
    0,
    552,
    555,
    3,
    149,
    74,
    0,
    553,
    555,
    3,
    159,
    79,
    0,
    554,
    552,
    1,
    0,
    0,
    0,
    554,
    553,
    1,
    0,
    0,
    0,
    555,
    146,
    1,
    0,
    0,
    0,
    556,
    559,
    3,
    149,
    74,
    0,
    557,
    559,
    3,
    159,
    79,
    0,
    558,
    556,
    1,
    0,
    0,
    0,
    558,
    557,
    1,
    0,
    0,
    0,
    559,
    148,
    1,
    0,
    0,
    0,
    560,
    572,
    3,
    157,
    78,
    0,
    561,
    562,
    3,
    157,
    78,
    0,
    562,
    563,
    3,
    153,
    76,
    0,
    563,
    572,
    1,
    0,
    0,
    0,
    564,
    565,
    3,
    153,
    76,
    0,
    565,
    566,
    3,
    157,
    78,
    0,
    566,
    572,
    1,
    0,
    0,
    0,
    567,
    568,
    3,
    153,
    76,
    0,
    568,
    569,
    3,
    157,
    78,
    0,
    569,
    570,
    3,
    153,
    76,
    0,
    570,
    572,
    1,
    0,
    0,
    0,
    571,
    560,
    1,
    0,
    0,
    0,
    571,
    561,
    1,
    0,
    0,
    0,
    571,
    564,
    1,
    0,
    0,
    0,
    571,
    567,
    1,
    0,
    0,
    0,
    572,
    150,
    1,
    0,
    0,
    0,
    573,
    579,
    5,
    48,
    0,
    0,
    574,
    579,
    3,
    163,
    81,
    0,
    575,
    576,
    3,
    163,
    81,
    0,
    576,
    577,
    3,
    159,
    79,
    0,
    577,
    579,
    1,
    0,
    0,
    0,
    578,
    573,
    1,
    0,
    0,
    0,
    578,
    574,
    1,
    0,
    0,
    0,
    578,
    575,
    1,
    0,
    0,
    0,
    579,
    152,
    1,
    0,
    0,
    0,
    580,
    585,
    3,
    155,
    77,
    0,
    581,
    582,
    3,
    155,
    77,
    0,
    582,
    583,
    3,
    153,
    76,
    0,
    583,
    585,
    1,
    0,
    0,
    0,
    584,
    580,
    1,
    0,
    0,
    0,
    584,
    581,
    1,
    0,
    0,
    0,
    585,
    154,
    1,
    0,
    0,
    0,
    586,
    589,
    3,
    161,
    80,
    0,
    587,
    589,
    3,
    157,
    78,
    0,
    588,
    586,
    1,
    0,
    0,
    0,
    588,
    587,
    1,
    0,
    0,
    0,
    589,
    156,
    1,
    0,
    0,
    0,
    590,
    593,
    3,
    165,
    82,
    0,
    591,
    593,
    3,
    169,
    84,
    0,
    592,
    590,
    1,
    0,
    0,
    0,
    592,
    591,
    1,
    0,
    0,
    0,
    593,
    158,
    1,
    0,
    0,
    0,
    594,
    599,
    3,
    161,
    80,
    0,
    595,
    596,
    3,
    161,
    80,
    0,
    596,
    597,
    3,
    159,
    79,
    0,
    597,
    599,
    1,
    0,
    0,
    0,
    598,
    594,
    1,
    0,
    0,
    0,
    598,
    595,
    1,
    0,
    0,
    0,
    599,
    160,
    1,
    0,
    0,
    0,
    600,
    601,
    7,
    0,
    0,
    0,
    601,
    162,
    1,
    0,
    0,
    0,
    602,
    603,
    7,
    1,
    0,
    0,
    603,
    164,
    1,
    0,
    0,
    0,
    604,
    605,
    7,
    2,
    0,
    0,
    605,
    166,
    1,
    0,
    0,
    0,
    606,
    607,
    7,
    3,
    0,
    0,
    607,
    168,
    1,
    0,
    0,
    0,
    608,
    609,
    5,
    45,
    0,
    0,
    609,
    170,
    1,
    0,
    0,
    0,
    610,
    611,
    5,
    43,
    0,
    0,
    611,
    172,
    1,
    0,
    0,
    0,
    612,
    613,
    5,
    46,
    0,
    0,
    613,
    174,
    1,
    0,
    0,
    0,
    614,
    615,
    5,
    47,
    0,
    0,
    615,
    616,
    5,
    42,
    0,
    0,
    616,
    620,
    1,
    0,
    0,
    0,
    617,
    619,
    9,
    0,
    0,
    0,
    618,
    617,
    1,
    0,
    0,
    0,
    619,
    622,
    1,
    0,
    0,
    0,
    620,
    621,
    1,
    0,
    0,
    0,
    620,
    618,
    1,
    0,
    0,
    0,
    621,
    623,
    1,
    0,
    0,
    0,
    622,
    620,
    1,
    0,
    0,
    0,
    623,
    624,
    5,
    42,
    0,
    0,
    624,
    625,
    5,
    47,
    0,
    0,
    625,
    626,
    1,
    0,
    0,
    0,
    626,
    627,
    6,
    87,
    0,
    0,
    627,
    176,
    1,
    0,
    0,
    0,
    628,
    629,
    5,
    47,
    0,
    0,
    629,
    630,
    5,
    47,
    0,
    0,
    630,
    634,
    1,
    0,
    0,
    0,
    631,
    633,
    8,
    4,
    0,
    0,
    632,
    631,
    1,
    0,
    0,
    0,
    633,
    636,
    1,
    0,
    0,
    0,
    634,
    632,
    1,
    0,
    0,
    0,
    634,
    635,
    1,
    0,
    0,
    0,
    635,
    637,
    1,
    0,
    0,
    0,
    636,
    634,
    1,
    0,
    0,
    0,
    637,
    638,
    6,
    88,
    0,
    0,
    638,
    178,
    1,
    0,
    0,
    0,
    639,
    641,
    7,
    5,
    0,
    0,
    640,
    639,
    1,
    0,
    0,
    0,
    641,
    642,
    1,
    0,
    0,
    0,
    642,
    640,
    1,
    0,
    0,
    0,
    642,
    643,
    1,
    0,
    0,
    0,
    643,
    644,
    1,
    0,
    0,
    0,
    644,
    645,
    6,
    89,
    0,
    0,
    645,
    180,
    1,
    0,
    0,
    0,
    17,
    0,
    500,
    502,
    520,
    541,
    550,
    554,
    558,
    571,
    578,
    584,
    588,
    592,
    598,
    620,
    634,
    642,
    1,
    6,
    0,
    0
  ];
  static __ATN;
  static get _ATN() {
    if (!_WitLexer.__ATN) {
      _WitLexer.__ATN = new We().deserialize(_WitLexer._serializedATN);
    }
    return _WitLexer.__ATN;
  }
  static DecisionsToDFA = _WitLexer._ATN.decisionToState.map((ds, index) => new Qe(ds, index));
};

// src/wit/errorListener.ts
var WITErrorListener = class extends nn {
  constructor(logging = false) {
    super();
    this.logging = logging;
  }
  errors = [];
  syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
    this.errors.push({
      source: "ErrorListener",
      line,
      length: offendingSymbol?.stop ?? 0 - offendingSymbol?.start ?? 0,
      column,
      message: msg
    });
    if (this.logging) {
      const type = recognizer instanceof WitLexer ? "Lexer" : "Parser";
      console.error(type + ":  line " + line + ":" + column + " " + msg);
    }
  }
  log() {
    this.errors.forEach((e2) => console.log(`${e2.source}:  ${e2.message}`));
  }
};

// src/wit/grammar/WitParser.ts
var WitParser = class _WitParser extends xn {
  static T__0 = 1;
  static T__1 = 2;
  static T__2 = 3;
  static T__3 = 4;
  static T__4 = 5;
  static T__5 = 6;
  static T__6 = 7;
  static T__7 = 8;
  static T__8 = 9;
  static T__9 = 10;
  static T__10 = 11;
  static T__11 = 12;
  static T__12 = 13;
  static T__13 = 14;
  static T__14 = 15;
  static T__15 = 16;
  static T__16 = 17;
  static T__17 = 18;
  static T__18 = 19;
  static T__19 = 20;
  static T__20 = 21;
  static T__21 = 22;
  static T__22 = 23;
  static T__23 = 24;
  static T__24 = 25;
  static T__25 = 26;
  static T__26 = 27;
  static T__27 = 28;
  static T__28 = 29;
  static T__29 = 30;
  static T__30 = 31;
  static T__31 = 32;
  static T__32 = 33;
  static T__33 = 34;
  static T__34 = 35;
  static T__35 = 36;
  static T__36 = 37;
  static T__37 = 38;
  static T__38 = 39;
  static T__39 = 40;
  static T__40 = 41;
  static T__41 = 42;
  static T__42 = 43;
  static T__43 = 44;
  static T__44 = 45;
  static T__45 = 46;
  static T__46 = 47;
  static T__47 = 48;
  static T__48 = 49;
  static T__49 = 50;
  static T__50 = 51;
  static T__51 = 52;
  static T__52 = 53;
  static T__53 = 54;
  static T__54 = 55;
  static T__55 = 56;
  static T__56 = 57;
  static T__57 = 58;
  static T__58 = 59;
  static T__59 = 60;
  static T__60 = 61;
  static T__61 = 62;
  static Identifier = 63;
  static VALID_SEMVER = 64;
  static VERSION_CORE = 65;
  static MAJOR = 66;
  static MINOR = 67;
  static PATCH = 68;
  static PRERELEASE = 69;
  static DOTSEPERATED_PRERELEASE_ID = 70;
  static BUILD = 71;
  static DOTSEPERATED_BUILD_ID = 72;
  static PRERELEASE_ID = 73;
  static BUILD_ID = 74;
  static ALPHANUM_ID = 75;
  static NUM_ID = 76;
  static ID_CHARS = 77;
  static ID_CHAR = 78;
  static NON_DIGIT = 79;
  static DIGITS = 80;
  static DASH = 81;
  static PLUS = 82;
  static DOT = 83;
  static COMMENT = 84;
  static LINE_COMMENT = 85;
  static WS = 86;
  static EOF = kn.EOF;
  static RULE_witFile = 0;
  static RULE_simpleTest = 1;
  static RULE_nestedPackageDefinition = 2;
  static RULE_packageDecl = 3;
  static RULE_packageItems = 4;
  static RULE_toplevelUseItem = 5;
  static RULE_usePath = 6;
  static RULE_worldItem = 7;
  static RULE_worldItems = 8;
  static RULE_worldDefinition = 9;
  static RULE_exportItem = 10;
  static RULE_importItem = 11;
  static RULE_externType = 12;
  static RULE_includeItem = 13;
  static RULE_includeNamesList = 14;
  static RULE_includeNamesItem = 15;
  static RULE_interfaceItem = 16;
  static RULE_interfaceItems = 17;
  static RULE_interfaceDefinition = 18;
  static RULE_typedefItem = 19;
  static RULE_funcItem = 20;
  static RULE_funcType = 21;
  static RULE_paramList = 22;
  static RULE_resultList = 23;
  static RULE_namedTypeList = 24;
  static RULE_namedType = 25;
  static RULE_useItem = 26;
  static RULE_useNamesList = 27;
  static RULE_useNamesItem = 28;
  static RULE_typeItem = 29;
  static RULE_recordItem = 30;
  static RULE_recordFields = 31;
  static RULE_recordField = 32;
  static RULE_flagsItems = 33;
  static RULE_flagsFields = 34;
  static RULE_variantItems = 35;
  static RULE_variantCases = 36;
  static RULE_variantCase = 37;
  static RULE_enumItems = 38;
  static RULE_enumCases = 39;
  static RULE_resourceItem = 40;
  static RULE_resourceMethod = 41;
  static RULE_ty = 42;
  static RULE_tuple = 43;
  static RULE_tupleList = 44;
  static RULE_list = 45;
  static RULE_option = 46;
  static RULE_result = 47;
  static RULE_handle = 48;
  static RULE_gate = 49;
  static RULE_gateItem = 50;
  static RULE_unstableGate = 51;
  static RULE_sinceGate = 52;
  static RULE_deprecatedGate = 53;
  static RULE_featureField = 54;
  static RULE_versionField = 55;
  static RULE_validSemver = 56;
  static RULE_token = 57;
  static RULE_operator = 58;
  static RULE_id = 59;
  static RULE_keyword = 60;
  static literalNames = [
    null,
    "'test'",
    "';'",
    "'{'",
    "'}'",
    "'package'",
    "':'",
    "'/'",
    "'@'",
    "'use'",
    "'as'",
    "'world'",
    "'export'",
    "'import'",
    "'interface'",
    "'include'",
    "'with'",
    "','",
    "'func'",
    "'('",
    "')'",
    "'->'",
    "'type'",
    "'='",
    "'record'",
    "'flags'",
    "'variant'",
    "'enum'",
    "'resource'",
    "'static'",
    "'constructor'",
    "'u8'",
    "'u16'",
    "'u32'",
    "'u64'",
    "'s8'",
    "'s16'",
    "'s32'",
    "'s64'",
    "'f32'",
    "'f64'",
    "'char'",
    "'bool'",
    "'string'",
    "'tuple'",
    "'<'",
    "'>'",
    "'list'",
    "'option'",
    "'result'",
    "'_'",
    "'borrow'",
    "'@unstable'",
    "'@since'",
    "'@deprecated'",
    "'feature'",
    "'version'",
    "'*'",
    "'%'",
    "'from'",
    "'future'",
    "'own'",
    "'stream'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'-'",
    "'+'",
    "'.'"
  ];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "Identifier",
    "VALID_SEMVER",
    "VERSION_CORE",
    "MAJOR",
    "MINOR",
    "PATCH",
    "PRERELEASE",
    "DOTSEPERATED_PRERELEASE_ID",
    "BUILD",
    "DOTSEPERATED_BUILD_ID",
    "PRERELEASE_ID",
    "BUILD_ID",
    "ALPHANUM_ID",
    "NUM_ID",
    "ID_CHARS",
    "ID_CHAR",
    "NON_DIGIT",
    "DIGITS",
    "DASH",
    "PLUS",
    "DOT",
    "COMMENT",
    "LINE_COMMENT",
    "WS"
  ];
  // tslint:disable:no-trailing-whitespace
  static ruleNames = [
    "witFile",
    "simpleTest",
    "nestedPackageDefinition",
    "packageDecl",
    "packageItems",
    "toplevelUseItem",
    "usePath",
    "worldItem",
    "worldItems",
    "worldDefinition",
    "exportItem",
    "importItem",
    "externType",
    "includeItem",
    "includeNamesList",
    "includeNamesItem",
    "interfaceItem",
    "interfaceItems",
    "interfaceDefinition",
    "typedefItem",
    "funcItem",
    "funcType",
    "paramList",
    "resultList",
    "namedTypeList",
    "namedType",
    "useItem",
    "useNamesList",
    "useNamesItem",
    "typeItem",
    "recordItem",
    "recordFields",
    "recordField",
    "flagsItems",
    "flagsFields",
    "variantItems",
    "variantCases",
    "variantCase",
    "enumItems",
    "enumCases",
    "resourceItem",
    "resourceMethod",
    "ty",
    "tuple",
    "tupleList",
    "list",
    "option",
    "result",
    "handle",
    "gate",
    "gateItem",
    "unstableGate",
    "sinceGate",
    "deprecatedGate",
    "featureField",
    "versionField",
    "validSemver",
    "token",
    "operator",
    "id",
    "keyword"
  ];
  get grammarFileName() {
    return "Wit.g4";
  }
  get literalNames() {
    return _WitParser.literalNames;
  }
  get symbolicNames() {
    return _WitParser.symbolicNames;
  }
  get ruleNames() {
    return _WitParser.ruleNames;
  }
  get serializedATN() {
    return _WitParser._serializedATN;
  }
  createFailedPredicateException(predicate, message) {
    return new sn(this, predicate, message);
  }
  constructor(input) {
    super(input);
    this._interp = new Tn(this, _WitParser._ATN, _WitParser.DecisionsToDFA, new mn());
  }
  // @RuleVersion(0)
  witFile() {
    let localctx = new WitFileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, _WitParser.RULE_witFile);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 123;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 0, this._ctx)) {
          case 1:
            {
              this.state = 122;
              this.packageDecl();
            }
            break;
        }
        this.state = 127;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 9:
          case 11:
          case 14:
          case 52:
          case 53:
          case 54:
            {
              this.state = 125;
              this.packageItems();
            }
            break;
          case 5:
            {
              this.state = 126;
              this.nestedPackageDefinition();
            }
            break;
          default:
            throw new dn(this);
        }
        this.state = 129;
        this.match(_WitParser.EOF);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  simpleTest() {
    let localctx = new SimpleTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, _WitParser.RULE_simpleTest);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 131;
        this.match(_WitParser.T__0);
        this.state = 132;
        this.validSemver();
        this.state = 133;
        this.match(_WitParser.T__1);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  nestedPackageDefinition() {
    let localctx = new NestedPackageDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, _WitParser.RULE_nestedPackageDefinition);
    let _la;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 135;
        this.packageDecl();
        this.state = 136;
        this.match(_WitParser.T__2);
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~31) === 0 && (1 << _la & 18944) !== 0 || (_la - 52 & ~31) === 0 && (1 << _la - 52 & 7) !== 0) {
          {
            {
              this.state = 137;
              this.packageItems();
            }
          }
          this.state = 142;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 143;
        this.match(_WitParser.T__3);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  packageDecl() {
    let localctx = new PackageDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, _WitParser.RULE_packageDecl);
    let _la;
    try {
      let _alt;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 145;
        this.match(_WitParser.T__4);
        this.state = 149;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 146;
                  this.id();
                  this.state = 147;
                  this.match(_WitParser.T__5);
                }
              }
              break;
            default:
              throw new dn(this);
          }
          this.state = 151;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
        } while (_alt !== 2 && _alt !== Ge.INVALID_ALT_NUMBER);
        this.state = 153;
        this.id();
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 7) {
          {
            {
              this.state = 154;
              this.match(_WitParser.T__6);
              this.state = 155;
              this.id();
            }
          }
          this.state = 160;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 163;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 8) {
          {
            this.state = 161;
            this.match(_WitParser.T__7);
            this.state = 162;
            this.validSemver();
          }
        }
        this.state = 165;
        this.match(_WitParser.T__1);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  packageItems() {
    let localctx = new PackageItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, _WitParser.RULE_packageItems);
    try {
      let _alt;
      this.state = 182;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 168;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 167;
                      this.toplevelUseItem();
                    }
                  }
                  break;
                default:
                  throw new dn(this);
              }
              this.state = 170;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
            } while (_alt !== 2 && _alt !== Ge.INVALID_ALT_NUMBER);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 173;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 172;
                      this.interfaceItem();
                    }
                  }
                  break;
                default:
                  throw new dn(this);
              }
              this.state = 175;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
            } while (_alt !== 2 && _alt !== Ge.INVALID_ALT_NUMBER);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 178;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 177;
                      this.worldItem();
                    }
                  }
                  break;
                default:
                  throw new dn(this);
              }
              this.state = 180;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
            } while (_alt !== 2 && _alt !== Ge.INVALID_ALT_NUMBER);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  toplevelUseItem() {
    let localctx = new ToplevelUseItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, _WitParser.RULE_toplevelUseItem);
    let _la;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 184;
        this.match(_WitParser.T__8);
        this.state = 185;
        this.usePath();
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 10) {
          {
            this.state = 186;
            this.match(_WitParser.T__9);
            this.state = 187;
            this.id();
          }
        }
        this.state = 190;
        this.match(_WitParser.T__1);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  usePath() {
    let localctx = new UsePathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, _WitParser.RULE_usePath);
    let _la;
    try {
      let _alt;
      this.state = 220;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 15, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 192;
            this.id();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 193;
            this.id();
            this.state = 194;
            this.match(_WitParser.T__5);
            this.state = 195;
            this.id();
            this.state = 196;
            this.match(_WitParser.T__6);
            this.state = 197;
            this.id();
            this.state = 200;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 8) {
              {
                this.state = 198;
                this.match(_WitParser.T__7);
                this.state = 199;
                this.validSemver();
              }
            }
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 205;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 202;
                      this.id();
                      this.state = 203;
                      this.match(_WitParser.T__5);
                    }
                  }
                  break;
                default:
                  throw new dn(this);
              }
              this.state = 207;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
            } while (_alt !== 2 && _alt !== Ge.INVALID_ALT_NUMBER);
            this.state = 209;
            this.id();
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 210;
                  this.match(_WitParser.T__6);
                  this.state = 211;
                  this.id();
                }
              }
              this.state = 214;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === 7);
            this.state = 218;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 8) {
              {
                this.state = 216;
                this.match(_WitParser.T__7);
                this.state = 217;
                this.validSemver();
              }
            }
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  worldItem() {
    let localctx = new WorldItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, _WitParser.RULE_worldItem);
    let _la;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 222;
        this.gate();
        this.state = 223;
        this.match(_WitParser.T__10);
        this.state = 224;
        this.id();
        this.state = 225;
        this.match(_WitParser.T__2);
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~31) === 0 && (1 << _la & 524333568) !== 0 || (_la - 52 & ~31) === 0 && (1 << _la - 52 & 7) !== 0) {
          {
            {
              this.state = 226;
              this.worldItems();
            }
          }
          this.state = 231;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 232;
        this.match(_WitParser.T__3);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  worldItems() {
    let localctx = new WorldItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, _WitParser.RULE_worldItems);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 234;
        this.gate();
        this.state = 235;
        this.worldDefinition();
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  worldDefinition() {
    let localctx = new WorldDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, _WitParser.RULE_worldDefinition);
    try {
      this.state = 242;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 12:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 237;
            this.exportItem();
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 238;
            this.importItem();
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 239;
            this.useItem();
          }
          break;
        case 22:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 240;
            this.typedefItem();
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 241;
            this.includeItem();
          }
          break;
        default:
          throw new dn(this);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  exportItem() {
    let localctx = new ExportItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, _WitParser.RULE_exportItem);
    try {
      this.state = 253;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 18, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 244;
            this.match(_WitParser.T__11);
            this.state = 245;
            this.id();
            this.state = 246;
            this.match(_WitParser.T__5);
            this.state = 247;
            this.externType();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 249;
            this.match(_WitParser.T__11);
            this.state = 250;
            this.usePath();
            this.state = 251;
            this.match(_WitParser.T__1);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  importItem() {
    let localctx = new ImportItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, _WitParser.RULE_importItem);
    try {
      this.state = 264;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 255;
            this.match(_WitParser.T__12);
            this.state = 256;
            this.id();
            this.state = 257;
            this.match(_WitParser.T__5);
            this.state = 258;
            this.externType();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 260;
            this.match(_WitParser.T__12);
            this.state = 261;
            this.usePath();
            this.state = 262;
            this.match(_WitParser.T__1);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  externType() {
    let localctx = new ExternTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, _WitParser.RULE_externType);
    let _la;
    try {
      this.state = 278;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 18:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 266;
            this.funcType();
            this.state = 267;
            this.match(_WitParser.T__1);
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 269;
            this.match(_WitParser.T__13);
            this.state = 270;
            this.match(_WitParser.T__2);
            this.state = 274;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while ((_la & ~31) === 0 && (1 << _la & 524288512) !== 0 || (_la - 52 & ~31) === 0 && (1 << _la - 52 & 2119) !== 0) {
              {
                {
                  this.state = 271;
                  this.interfaceItems();
                }
              }
              this.state = 276;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 277;
            this.match(_WitParser.T__3);
          }
          break;
        default:
          throw new dn(this);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  includeItem() {
    let localctx = new IncludeItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, _WitParser.RULE_includeItem);
    try {
      this.state = 291;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 280;
            this.match(_WitParser.T__14);
            this.state = 281;
            this.usePath();
            this.state = 282;
            this.match(_WitParser.T__1);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 284;
            this.match(_WitParser.T__14);
            this.state = 285;
            this.usePath();
            this.state = 286;
            this.match(_WitParser.T__15);
            this.state = 287;
            this.match(_WitParser.T__2);
            this.state = 288;
            this.includeNamesList(0);
            this.state = 289;
            this.match(_WitParser.T__3);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  includeNamesList(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    let _parentctx = this._ctx;
    let _parentState = this.state;
    let localctx = new IncludeNamesListContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    let _startState = 28;
    this.enterRecursionRule(localctx, 28, _WitParser.RULE_includeNamesList, _p);
    try {
      let _alt;
      this.enterOuterAlt(localctx, 1);
      {
        {
          this.state = 294;
          this.includeNamesItem();
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 301;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
        while (_alt !== 2 && _alt !== Ge.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              {
                localctx = new IncludeNamesListContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, _WitParser.RULE_includeNamesList);
                this.state = 296;
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                }
                this.state = 297;
                this.match(_WitParser.T__16);
                this.state = 298;
                this.includeNamesItem();
              }
            }
          }
          this.state = 303;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
        }
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  includeNamesItem() {
    let localctx = new IncludeNamesItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, _WitParser.RULE_includeNamesItem);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 304;
        this.id();
        this.state = 305;
        this.match(_WitParser.T__9);
        this.state = 306;
        this.id();
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  interfaceItem() {
    let localctx = new InterfaceItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, _WitParser.RULE_interfaceItem);
    let _la;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 308;
        this.gate();
        this.state = 309;
        this.match(_WitParser.T__13);
        this.state = 310;
        this.id();
        this.state = 311;
        this.match(_WitParser.T__2);
        this.state = 315;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~31) === 0 && (1 << _la & 524288512) !== 0 || (_la - 52 & ~31) === 0 && (1 << _la - 52 & 2119) !== 0) {
          {
            {
              this.state = 312;
              this.interfaceItems();
            }
          }
          this.state = 317;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 318;
        this.match(_WitParser.T__3);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  interfaceItems() {
    let localctx = new InterfaceItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, _WitParser.RULE_interfaceItems);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 320;
        this.gate();
        this.state = 321;
        this.interfaceDefinition();
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  interfaceDefinition() {
    let localctx = new InterfaceDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, _WitParser.RULE_interfaceDefinition);
    try {
      this.state = 326;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 22:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 323;
            this.typedefItem();
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 324;
            this.useItem();
          }
          break;
        case 58:
        case 63:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 325;
            this.funcItem();
          }
          break;
        default:
          throw new dn(this);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  typedefItem() {
    let localctx = new TypedefItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, _WitParser.RULE_typedefItem);
    try {
      this.state = 334;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 28:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 328;
            this.resourceItem();
          }
          break;
        case 26:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 329;
            this.variantItems();
          }
          break;
        case 24:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 330;
            this.recordItem();
          }
          break;
        case 25:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 331;
            this.flagsItems();
          }
          break;
        case 27:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 332;
            this.enumItems();
          }
          break;
        case 22:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 333;
            this.typeItem();
          }
          break;
        default:
          throw new dn(this);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  funcItem() {
    let localctx = new FuncItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, _WitParser.RULE_funcItem);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 336;
        this.id();
        this.state = 337;
        this.match(_WitParser.T__5);
        this.state = 338;
        this.funcType();
        this.state = 339;
        this.match(_WitParser.T__1);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  funcType() {
    let localctx = new FuncTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, _WitParser.RULE_funcType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 341;
        this.match(_WitParser.T__17);
        this.state = 342;
        this.paramList();
        this.state = 343;
        this.resultList();
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  paramList() {
    let localctx = new ParamListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, _WitParser.RULE_paramList);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 345;
        this.match(_WitParser.T__18);
        this.state = 346;
        this.namedTypeList();
        this.state = 347;
        this.match(_WitParser.T__19);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  resultList() {
    let localctx = new ResultListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, _WitParser.RULE_resultList);
    try {
      this.state = 352;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 2:
          this.enterOuterAlt(localctx, 1);
          {
          }
          break;
        case 21:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 350;
            this.match(_WitParser.T__20);
            this.state = 351;
            this.ty();
          }
          break;
        default:
          throw new dn(this);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  namedTypeList() {
    let localctx = new NamedTypeListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, _WitParser.RULE_namedTypeList);
    let _la;
    try {
      let _alt;
      this.state = 366;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 20:
          this.enterOuterAlt(localctx, 1);
          {
          }
          break;
        case 58:
        case 63:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 355;
            this.namedType();
            this.state = 360;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
            while (_alt !== 2 && _alt !== Ge.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 356;
                    this.match(_WitParser.T__16);
                    this.state = 357;
                    this.namedType();
                  }
                }
              }
              this.state = 362;
              this._errHandler.sync(this);
              _alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
            }
            this.state = 364;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 17) {
              {
                this.state = 363;
                this.match(_WitParser.T__16);
              }
            }
          }
          break;
        default:
          throw new dn(this);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  namedType() {
    let localctx = new NamedTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, _WitParser.RULE_namedType);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 368;
        this.id();
        this.state = 369;
        this.match(_WitParser.T__5);
        this.state = 370;
        this.ty();
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  useItem() {
    let localctx = new UseItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, _WitParser.RULE_useItem);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 372;
        this.match(_WitParser.T__8);
        this.state = 373;
        this.usePath();
        this.state = 374;
        this.match(_WitParser.DOT);
        this.state = 375;
        this.match(_WitParser.T__2);
        this.state = 376;
        this.useNamesList();
        this.state = 377;
        this.match(_WitParser.T__3);
        this.state = 378;
        this.match(_WitParser.T__1);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  useNamesList() {
    let localctx = new UseNamesListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, _WitParser.RULE_useNamesList);
    let _la;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 380;
        this.useNamesItem();
        this.state = 385;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 17) {
          {
            {
              this.state = 381;
              this.match(_WitParser.T__16);
              this.state = 382;
              this.useNamesItem();
            }
          }
          this.state = 387;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  useNamesItem() {
    let localctx = new UseNamesItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, _WitParser.RULE_useNamesItem);
    try {
      this.state = 393;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 32, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 388;
            this.id();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 389;
            this.id();
            this.state = 390;
            this.match(_WitParser.T__9);
            this.state = 391;
            this.id();
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  typeItem() {
    let localctx = new TypeItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, _WitParser.RULE_typeItem);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 395;
        this.match(_WitParser.T__21);
        this.state = 396;
        this.id();
        this.state = 397;
        this.match(_WitParser.T__22);
        this.state = 398;
        this.ty();
        this.state = 399;
        this.match(_WitParser.T__1);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  recordItem() {
    let localctx = new RecordItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, _WitParser.RULE_recordItem);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 401;
        this.match(_WitParser.T__23);
        this.state = 402;
        this.id();
        this.state = 403;
        this.match(_WitParser.T__2);
        this.state = 404;
        this.recordFields();
        this.state = 405;
        this.match(_WitParser.T__3);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  recordFields() {
    let localctx = new RecordFieldsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, _WitParser.RULE_recordFields);
    let _la;
    try {
      this.state = 413;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 34, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 407;
            this.recordField();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 408;
            this.recordField();
            this.state = 409;
            this.match(_WitParser.T__16);
            this.state = 411;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 58 || _la === 63) {
              {
                this.state = 410;
                this.recordFields();
              }
            }
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  recordField() {
    let localctx = new RecordFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, _WitParser.RULE_recordField);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 415;
        this.id();
        this.state = 416;
        this.match(_WitParser.T__5);
        this.state = 417;
        this.ty();
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  flagsItems() {
    let localctx = new FlagsItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, _WitParser.RULE_flagsItems);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 419;
        this.match(_WitParser.T__24);
        this.state = 420;
        this.id();
        this.state = 421;
        this.match(_WitParser.T__2);
        this.state = 422;
        this.flagsFields();
        this.state = 423;
        this.match(_WitParser.T__3);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  flagsFields() {
    let localctx = new FlagsFieldsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, _WitParser.RULE_flagsFields);
    let _la;
    try {
      this.state = 431;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 425;
            this.id();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 426;
            this.id();
            this.state = 427;
            this.match(_WitParser.T__16);
            this.state = 429;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 58 || _la === 63) {
              {
                this.state = 428;
                this.flagsFields();
              }
            }
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  variantItems() {
    let localctx = new VariantItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, _WitParser.RULE_variantItems);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 433;
        this.match(_WitParser.T__25);
        this.state = 434;
        this.id();
        this.state = 435;
        this.match(_WitParser.T__2);
        this.state = 436;
        this.variantCases();
        this.state = 437;
        this.match(_WitParser.T__3);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  variantCases() {
    let localctx = new VariantCasesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, _WitParser.RULE_variantCases);
    let _la;
    try {
      this.state = 445;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 439;
            this.variantCase();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 440;
            this.variantCase();
            this.state = 441;
            this.match(_WitParser.T__16);
            this.state = 443;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 58 || _la === 63) {
              {
                this.state = 442;
                this.variantCases();
              }
            }
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  variantCase() {
    let localctx = new VariantCaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, _WitParser.RULE_variantCase);
    try {
      this.state = 453;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 39, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 447;
            this.id();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 448;
            this.id();
            this.state = 449;
            this.match(_WitParser.T__18);
            this.state = 450;
            this.ty();
            this.state = 451;
            this.match(_WitParser.T__19);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  enumItems() {
    let localctx = new EnumItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, _WitParser.RULE_enumItems);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 455;
        this.match(_WitParser.T__26);
        this.state = 456;
        this.id();
        this.state = 457;
        this.match(_WitParser.T__2);
        this.state = 458;
        this.enumCases();
        this.state = 459;
        this.match(_WitParser.T__3);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  enumCases() {
    let localctx = new EnumCasesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, _WitParser.RULE_enumCases);
    let _la;
    try {
      this.state = 467;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 41, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 461;
            this.id();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 462;
            this.id();
            this.state = 463;
            this.match(_WitParser.T__16);
            this.state = 465;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 58 || _la === 63) {
              {
                this.state = 464;
                this.enumCases();
              }
            }
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  resourceItem() {
    let localctx = new ResourceItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, _WitParser.RULE_resourceItem);
    let _la;
    try {
      this.state = 484;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 43, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 469;
            this.match(_WitParser.T__27);
            this.state = 470;
            this.id();
            this.state = 471;
            this.match(_WitParser.T__1);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 473;
            this.match(_WitParser.T__27);
            this.state = 474;
            this.id();
            this.state = 475;
            this.match(_WitParser.T__2);
            this.state = 479;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 30 || _la === 58 || _la === 63) {
              {
                {
                  this.state = 476;
                  this.resourceMethod();
                }
              }
              this.state = 481;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 482;
            this.match(_WitParser.T__3);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  resourceMethod() {
    let localctx = new ResourceMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, _WitParser.RULE_resourceMethod);
    try {
      this.state = 497;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 44, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 486;
            this.funcItem();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 487;
            this.id();
            this.state = 488;
            this.match(_WitParser.T__5);
            this.state = 489;
            this.match(_WitParser.T__28);
            this.state = 490;
            this.funcType();
            this.state = 491;
            this.match(_WitParser.T__1);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 493;
            this.match(_WitParser.T__29);
            this.state = 494;
            this.paramList();
            this.state = 495;
            this.match(_WitParser.T__1);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  ty() {
    let localctx = new TyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, _WitParser.RULE_ty);
    try {
      this.state = 518;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 499;
            this.match(_WitParser.T__30);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 500;
            this.match(_WitParser.T__31);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 501;
            this.match(_WitParser.T__32);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 502;
            this.match(_WitParser.T__33);
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 503;
            this.match(_WitParser.T__34);
          }
          break;
        case 6:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 504;
            this.match(_WitParser.T__35);
          }
          break;
        case 7:
          this.enterOuterAlt(localctx, 7);
          {
            this.state = 505;
            this.match(_WitParser.T__36);
          }
          break;
        case 8:
          this.enterOuterAlt(localctx, 8);
          {
            this.state = 506;
            this.match(_WitParser.T__37);
          }
          break;
        case 9:
          this.enterOuterAlt(localctx, 9);
          {
            this.state = 507;
            this.match(_WitParser.T__38);
          }
          break;
        case 10:
          this.enterOuterAlt(localctx, 10);
          {
            this.state = 508;
            this.match(_WitParser.T__39);
          }
          break;
        case 11:
          this.enterOuterAlt(localctx, 11);
          {
            this.state = 509;
            this.match(_WitParser.T__40);
          }
          break;
        case 12:
          this.enterOuterAlt(localctx, 12);
          {
            this.state = 510;
            this.match(_WitParser.T__41);
          }
          break;
        case 13:
          this.enterOuterAlt(localctx, 13);
          {
            this.state = 511;
            this.match(_WitParser.T__42);
          }
          break;
        case 14:
          this.enterOuterAlt(localctx, 14);
          {
            this.state = 512;
            this.tuple();
          }
          break;
        case 15:
          this.enterOuterAlt(localctx, 15);
          {
            this.state = 513;
            this.list();
          }
          break;
        case 16:
          this.enterOuterAlt(localctx, 16);
          {
            this.state = 514;
            this.option();
          }
          break;
        case 17:
          this.enterOuterAlt(localctx, 17);
          {
            this.state = 515;
            this.result();
          }
          break;
        case 18:
          this.enterOuterAlt(localctx, 18);
          {
            this.state = 516;
            this.handle();
          }
          break;
        case 19:
          this.enterOuterAlt(localctx, 19);
          {
            this.state = 517;
            this.id();
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  tuple() {
    let localctx = new TupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, _WitParser.RULE_tuple);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 520;
        this.match(_WitParser.T__43);
        this.state = 521;
        this.match(_WitParser.T__44);
        this.state = 522;
        this.tupleList();
        this.state = 523;
        this.match(_WitParser.T__45);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  tupleList() {
    let localctx = new TupleListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, _WitParser.RULE_tupleList);
    let _la;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 525;
        this.ty();
        this.state = 528;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 17) {
          {
            this.state = 526;
            this.match(_WitParser.T__16);
            this.state = 527;
            this.tupleList();
          }
        }
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  list() {
    let localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, _WitParser.RULE_list);
    try {
      this.state = 542;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 530;
            this.match(_WitParser.T__46);
            this.state = 531;
            this.match(_WitParser.T__44);
            this.state = 532;
            this.ty();
            this.state = 533;
            this.match(_WitParser.T__45);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 535;
            this.match(_WitParser.T__46);
            this.state = 536;
            this.match(_WitParser.T__44);
            this.state = 537;
            this.ty();
            this.state = 538;
            this.match(_WitParser.T__16);
            this.state = 539;
            this.match(_WitParser.NUM_ID);
            this.state = 540;
            this.match(_WitParser.T__45);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  option() {
    let localctx = new OptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, _WitParser.RULE_option);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 544;
        this.match(_WitParser.T__47);
        this.state = 545;
        this.match(_WitParser.T__44);
        this.state = 546;
        this.ty();
        this.state = 547;
        this.match(_WitParser.T__45);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  result() {
    let localctx = new ResultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, _WitParser.RULE_result);
    try {
      this.state = 569;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 48, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 549;
            this.match(_WitParser.T__48);
            this.state = 550;
            this.match(_WitParser.T__44);
            this.state = 551;
            this.ty();
            this.state = 552;
            this.match(_WitParser.T__16);
            this.state = 553;
            this.ty();
            this.state = 554;
            this.match(_WitParser.T__45);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 556;
            this.match(_WitParser.T__48);
            this.state = 557;
            this.match(_WitParser.T__44);
            this.state = 558;
            this.match(_WitParser.T__49);
            this.state = 559;
            this.match(_WitParser.T__16);
            this.state = 560;
            this.ty();
            this.state = 561;
            this.match(_WitParser.T__45);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 563;
            this.match(_WitParser.T__48);
            this.state = 564;
            this.match(_WitParser.T__44);
            this.state = 565;
            this.ty();
            this.state = 566;
            this.match(_WitParser.T__45);
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 568;
            this.match(_WitParser.T__48);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  handle() {
    let localctx = new HandleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, _WitParser.RULE_handle);
    try {
      this.state = 577;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 58:
        case 63:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 571;
            this.id();
          }
          break;
        case 51:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 572;
            this.match(_WitParser.T__50);
            this.state = 573;
            this.match(_WitParser.T__44);
            this.state = 574;
            this.id();
            this.state = 575;
            this.match(_WitParser.T__45);
          }
          break;
        default:
          throw new dn(this);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  gate() {
    let localctx = new GateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, _WitParser.RULE_gate);
    let _la;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 582;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la - 52 & ~31) === 0 && (1 << _la - 52 & 7) !== 0) {
          {
            {
              this.state = 579;
              this.gateItem();
            }
          }
          this.state = 584;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  gateItem() {
    let localctx = new GateItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, _WitParser.RULE_gateItem);
    try {
      this.state = 588;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 52:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 585;
            this.unstableGate();
          }
          break;
        case 53:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 586;
            this.sinceGate();
          }
          break;
        case 54:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 587;
            this.deprecatedGate();
          }
          break;
        default:
          throw new dn(this);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  unstableGate() {
    let localctx = new UnstableGateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, _WitParser.RULE_unstableGate);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 590;
        this.match(_WitParser.T__51);
        this.state = 591;
        this.match(_WitParser.T__18);
        this.state = 592;
        this.featureField();
        this.state = 593;
        this.match(_WitParser.T__19);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  sinceGate() {
    let localctx = new SinceGateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, _WitParser.RULE_sinceGate);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 595;
        this.match(_WitParser.T__52);
        this.state = 596;
        this.match(_WitParser.T__18);
        this.state = 597;
        this.versionField();
        this.state = 598;
        this.match(_WitParser.T__19);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  deprecatedGate() {
    let localctx = new DeprecatedGateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, _WitParser.RULE_deprecatedGate);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 600;
        this.match(_WitParser.T__53);
        this.state = 601;
        this.match(_WitParser.T__18);
        this.state = 602;
        this.versionField();
        this.state = 603;
        this.match(_WitParser.T__19);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  featureField() {
    let localctx = new FeatureFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, _WitParser.RULE_featureField);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 605;
        this.match(_WitParser.T__54);
        this.state = 606;
        this.match(_WitParser.T__22);
        this.state = 607;
        this.id();
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  versionField() {
    let localctx = new VersionFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, _WitParser.RULE_versionField);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 609;
        this.match(_WitParser.T__55);
        this.state = 610;
        this.match(_WitParser.T__22);
        this.state = 611;
        this.validSemver();
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  validSemver() {
    let localctx = new ValidSemverContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, _WitParser.RULE_validSemver);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 613;
        this.match(_WitParser.VALID_SEMVER);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  token() {
    let localctx = new TokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, _WitParser.RULE_token);
    try {
      this.state = 619;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 2:
        case 3:
        case 4:
        case 6:
        case 7:
        case 8:
        case 17:
        case 19:
        case 20:
        case 21:
        case 23:
        case 45:
        case 46:
        case 57:
        case 83:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 615;
            this.operator();
          }
          break;
        case 5:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 18:
        case 22:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 47:
        case 48:
        case 49:
        case 51:
        case 59:
        case 60:
        case 61:
        case 62:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 616;
            this.keyword();
          }
          break;
        case 76:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 617;
            this.match(_WitParser.NUM_ID);
          }
          break;
        case 63:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 618;
            this.match(_WitParser.Identifier);
          }
          break;
        default:
          throw new dn(this);
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  operator() {
    let localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, _WitParser.RULE_operator);
    let _la;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 621;
        _la = this._input.LA(1);
        if (!((_la & ~31) === 0 && (1 << _la & 12190172) !== 0 || (_la - 45 & ~31) === 0 && (1 << _la - 45 & 4099) !== 0 || _la === 83)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  id() {
    let localctx = new IdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, _WitParser.RULE_id);
    try {
      this.state = 628;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 53, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 623;
            this.match(_WitParser.T__57);
            this.state = 624;
            this.keyword();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 625;
            this.match(_WitParser.T__57);
            this.state = 626;
            this.match(_WitParser.Identifier);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 627;
            this.match(_WitParser.Identifier);
          }
          break;
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  keyword() {
    let localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, _WitParser.RULE_keyword);
    let _la;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 630;
        _la = this._input.LA(1);
        if (!((_la & ~31) === 0 && (1 << _la & 4282777120) !== 0 || (_la - 32 & ~31) === 0 && (1 << _la - 32 & 2014027775) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re2) {
      if (re2 instanceof _n) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 14:
        return this.includeNamesList_sempred(localctx, predIndex);
    }
    return true;
  }
  includeNamesList_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  static _serializedATN = [
    4,
    1,
    86,
    633,
    2,
    0,
    7,
    0,
    2,
    1,
    7,
    1,
    2,
    2,
    7,
    2,
    2,
    3,
    7,
    3,
    2,
    4,
    7,
    4,
    2,
    5,
    7,
    5,
    2,
    6,
    7,
    6,
    2,
    7,
    7,
    7,
    2,
    8,
    7,
    8,
    2,
    9,
    7,
    9,
    2,
    10,
    7,
    10,
    2,
    11,
    7,
    11,
    2,
    12,
    7,
    12,
    2,
    13,
    7,
    13,
    2,
    14,
    7,
    14,
    2,
    15,
    7,
    15,
    2,
    16,
    7,
    16,
    2,
    17,
    7,
    17,
    2,
    18,
    7,
    18,
    2,
    19,
    7,
    19,
    2,
    20,
    7,
    20,
    2,
    21,
    7,
    21,
    2,
    22,
    7,
    22,
    2,
    23,
    7,
    23,
    2,
    24,
    7,
    24,
    2,
    25,
    7,
    25,
    2,
    26,
    7,
    26,
    2,
    27,
    7,
    27,
    2,
    28,
    7,
    28,
    2,
    29,
    7,
    29,
    2,
    30,
    7,
    30,
    2,
    31,
    7,
    31,
    2,
    32,
    7,
    32,
    2,
    33,
    7,
    33,
    2,
    34,
    7,
    34,
    2,
    35,
    7,
    35,
    2,
    36,
    7,
    36,
    2,
    37,
    7,
    37,
    2,
    38,
    7,
    38,
    2,
    39,
    7,
    39,
    2,
    40,
    7,
    40,
    2,
    41,
    7,
    41,
    2,
    42,
    7,
    42,
    2,
    43,
    7,
    43,
    2,
    44,
    7,
    44,
    2,
    45,
    7,
    45,
    2,
    46,
    7,
    46,
    2,
    47,
    7,
    47,
    2,
    48,
    7,
    48,
    2,
    49,
    7,
    49,
    2,
    50,
    7,
    50,
    2,
    51,
    7,
    51,
    2,
    52,
    7,
    52,
    2,
    53,
    7,
    53,
    2,
    54,
    7,
    54,
    2,
    55,
    7,
    55,
    2,
    56,
    7,
    56,
    2,
    57,
    7,
    57,
    2,
    58,
    7,
    58,
    2,
    59,
    7,
    59,
    2,
    60,
    7,
    60,
    1,
    0,
    3,
    0,
    124,
    8,
    0,
    1,
    0,
    1,
    0,
    3,
    0,
    128,
    8,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    2,
    5,
    2,
    139,
    8,
    2,
    10,
    2,
    12,
    2,
    142,
    9,
    2,
    1,
    2,
    1,
    2,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    4,
    3,
    150,
    8,
    3,
    11,
    3,
    12,
    3,
    151,
    1,
    3,
    1,
    3,
    1,
    3,
    5,
    3,
    157,
    8,
    3,
    10,
    3,
    12,
    3,
    160,
    9,
    3,
    1,
    3,
    1,
    3,
    3,
    3,
    164,
    8,
    3,
    1,
    3,
    1,
    3,
    1,
    4,
    4,
    4,
    169,
    8,
    4,
    11,
    4,
    12,
    4,
    170,
    1,
    4,
    4,
    4,
    174,
    8,
    4,
    11,
    4,
    12,
    4,
    175,
    1,
    4,
    4,
    4,
    179,
    8,
    4,
    11,
    4,
    12,
    4,
    180,
    3,
    4,
    183,
    8,
    4,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    3,
    5,
    189,
    8,
    5,
    1,
    5,
    1,
    5,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    3,
    6,
    201,
    8,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    4,
    6,
    206,
    8,
    6,
    11,
    6,
    12,
    6,
    207,
    1,
    6,
    1,
    6,
    1,
    6,
    4,
    6,
    213,
    8,
    6,
    11,
    6,
    12,
    6,
    214,
    1,
    6,
    1,
    6,
    3,
    6,
    219,
    8,
    6,
    3,
    6,
    221,
    8,
    6,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    5,
    7,
    228,
    8,
    7,
    10,
    7,
    12,
    7,
    231,
    9,
    7,
    1,
    7,
    1,
    7,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    9,
    3,
    9,
    243,
    8,
    9,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    3,
    10,
    254,
    8,
    10,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    3,
    11,
    265,
    8,
    11,
    1,
    12,
    1,
    12,
    1,
    12,
    1,
    12,
    1,
    12,
    1,
    12,
    5,
    12,
    273,
    8,
    12,
    10,
    12,
    12,
    12,
    276,
    9,
    12,
    1,
    12,
    3,
    12,
    279,
    8,
    12,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    3,
    13,
    292,
    8,
    13,
    1,
    14,
    1,
    14,
    1,
    14,
    1,
    14,
    1,
    14,
    1,
    14,
    5,
    14,
    300,
    8,
    14,
    10,
    14,
    12,
    14,
    303,
    9,
    14,
    1,
    15,
    1,
    15,
    1,
    15,
    1,
    15,
    1,
    16,
    1,
    16,
    1,
    16,
    1,
    16,
    1,
    16,
    5,
    16,
    314,
    8,
    16,
    10,
    16,
    12,
    16,
    317,
    9,
    16,
    1,
    16,
    1,
    16,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    18,
    1,
    18,
    1,
    18,
    3,
    18,
    327,
    8,
    18,
    1,
    19,
    1,
    19,
    1,
    19,
    1,
    19,
    1,
    19,
    1,
    19,
    3,
    19,
    335,
    8,
    19,
    1,
    20,
    1,
    20,
    1,
    20,
    1,
    20,
    1,
    20,
    1,
    21,
    1,
    21,
    1,
    21,
    1,
    21,
    1,
    22,
    1,
    22,
    1,
    22,
    1,
    22,
    1,
    23,
    1,
    23,
    1,
    23,
    3,
    23,
    353,
    8,
    23,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    24,
    5,
    24,
    359,
    8,
    24,
    10,
    24,
    12,
    24,
    362,
    9,
    24,
    1,
    24,
    3,
    24,
    365,
    8,
    24,
    3,
    24,
    367,
    8,
    24,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    27,
    1,
    27,
    1,
    27,
    5,
    27,
    384,
    8,
    27,
    10,
    27,
    12,
    27,
    387,
    9,
    27,
    1,
    28,
    1,
    28,
    1,
    28,
    1,
    28,
    1,
    28,
    3,
    28,
    394,
    8,
    28,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    30,
    1,
    30,
    1,
    30,
    1,
    30,
    1,
    30,
    1,
    30,
    1,
    31,
    1,
    31,
    1,
    31,
    1,
    31,
    3,
    31,
    412,
    8,
    31,
    3,
    31,
    414,
    8,
    31,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    33,
    1,
    33,
    1,
    33,
    1,
    33,
    1,
    33,
    1,
    33,
    1,
    34,
    1,
    34,
    1,
    34,
    1,
    34,
    3,
    34,
    430,
    8,
    34,
    3,
    34,
    432,
    8,
    34,
    1,
    35,
    1,
    35,
    1,
    35,
    1,
    35,
    1,
    35,
    1,
    35,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    36,
    3,
    36,
    444,
    8,
    36,
    3,
    36,
    446,
    8,
    36,
    1,
    37,
    1,
    37,
    1,
    37,
    1,
    37,
    1,
    37,
    1,
    37,
    3,
    37,
    454,
    8,
    37,
    1,
    38,
    1,
    38,
    1,
    38,
    1,
    38,
    1,
    38,
    1,
    38,
    1,
    39,
    1,
    39,
    1,
    39,
    1,
    39,
    3,
    39,
    466,
    8,
    39,
    3,
    39,
    468,
    8,
    39,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    40,
    5,
    40,
    478,
    8,
    40,
    10,
    40,
    12,
    40,
    481,
    9,
    40,
    1,
    40,
    1,
    40,
    3,
    40,
    485,
    8,
    40,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    3,
    41,
    498,
    8,
    41,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    3,
    42,
    519,
    8,
    42,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    44,
    1,
    44,
    1,
    44,
    3,
    44,
    529,
    8,
    44,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    3,
    45,
    543,
    8,
    45,
    1,
    46,
    1,
    46,
    1,
    46,
    1,
    46,
    1,
    46,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    3,
    47,
    570,
    8,
    47,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    48,
    3,
    48,
    578,
    8,
    48,
    1,
    49,
    5,
    49,
    581,
    8,
    49,
    10,
    49,
    12,
    49,
    584,
    9,
    49,
    1,
    50,
    1,
    50,
    1,
    50,
    3,
    50,
    589,
    8,
    50,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    56,
    1,
    56,
    1,
    57,
    1,
    57,
    1,
    57,
    1,
    57,
    3,
    57,
    620,
    8,
    57,
    1,
    58,
    1,
    58,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    3,
    59,
    629,
    8,
    59,
    1,
    60,
    1,
    60,
    1,
    60,
    0,
    1,
    28,
    61,
    0,
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    34,
    36,
    38,
    40,
    42,
    44,
    46,
    48,
    50,
    52,
    54,
    56,
    58,
    60,
    62,
    64,
    66,
    68,
    70,
    72,
    74,
    76,
    78,
    80,
    82,
    84,
    86,
    88,
    90,
    92,
    94,
    96,
    98,
    100,
    102,
    104,
    106,
    108,
    110,
    112,
    114,
    116,
    118,
    120,
    0,
    2,
    8,
    0,
    2,
    4,
    6,
    8,
    17,
    17,
    19,
    21,
    23,
    23,
    45,
    46,
    57,
    57,
    83,
    83,
    8,
    0,
    5,
    5,
    9,
    16,
    18,
    18,
    22,
    22,
    24,
    44,
    47,
    49,
    51,
    51,
    59,
    62,
    659,
    0,
    123,
    1,
    0,
    0,
    0,
    2,
    131,
    1,
    0,
    0,
    0,
    4,
    135,
    1,
    0,
    0,
    0,
    6,
    145,
    1,
    0,
    0,
    0,
    8,
    182,
    1,
    0,
    0,
    0,
    10,
    184,
    1,
    0,
    0,
    0,
    12,
    220,
    1,
    0,
    0,
    0,
    14,
    222,
    1,
    0,
    0,
    0,
    16,
    234,
    1,
    0,
    0,
    0,
    18,
    242,
    1,
    0,
    0,
    0,
    20,
    253,
    1,
    0,
    0,
    0,
    22,
    264,
    1,
    0,
    0,
    0,
    24,
    278,
    1,
    0,
    0,
    0,
    26,
    291,
    1,
    0,
    0,
    0,
    28,
    293,
    1,
    0,
    0,
    0,
    30,
    304,
    1,
    0,
    0,
    0,
    32,
    308,
    1,
    0,
    0,
    0,
    34,
    320,
    1,
    0,
    0,
    0,
    36,
    326,
    1,
    0,
    0,
    0,
    38,
    334,
    1,
    0,
    0,
    0,
    40,
    336,
    1,
    0,
    0,
    0,
    42,
    341,
    1,
    0,
    0,
    0,
    44,
    345,
    1,
    0,
    0,
    0,
    46,
    352,
    1,
    0,
    0,
    0,
    48,
    366,
    1,
    0,
    0,
    0,
    50,
    368,
    1,
    0,
    0,
    0,
    52,
    372,
    1,
    0,
    0,
    0,
    54,
    380,
    1,
    0,
    0,
    0,
    56,
    393,
    1,
    0,
    0,
    0,
    58,
    395,
    1,
    0,
    0,
    0,
    60,
    401,
    1,
    0,
    0,
    0,
    62,
    413,
    1,
    0,
    0,
    0,
    64,
    415,
    1,
    0,
    0,
    0,
    66,
    419,
    1,
    0,
    0,
    0,
    68,
    431,
    1,
    0,
    0,
    0,
    70,
    433,
    1,
    0,
    0,
    0,
    72,
    445,
    1,
    0,
    0,
    0,
    74,
    453,
    1,
    0,
    0,
    0,
    76,
    455,
    1,
    0,
    0,
    0,
    78,
    467,
    1,
    0,
    0,
    0,
    80,
    484,
    1,
    0,
    0,
    0,
    82,
    497,
    1,
    0,
    0,
    0,
    84,
    518,
    1,
    0,
    0,
    0,
    86,
    520,
    1,
    0,
    0,
    0,
    88,
    525,
    1,
    0,
    0,
    0,
    90,
    542,
    1,
    0,
    0,
    0,
    92,
    544,
    1,
    0,
    0,
    0,
    94,
    569,
    1,
    0,
    0,
    0,
    96,
    577,
    1,
    0,
    0,
    0,
    98,
    582,
    1,
    0,
    0,
    0,
    100,
    588,
    1,
    0,
    0,
    0,
    102,
    590,
    1,
    0,
    0,
    0,
    104,
    595,
    1,
    0,
    0,
    0,
    106,
    600,
    1,
    0,
    0,
    0,
    108,
    605,
    1,
    0,
    0,
    0,
    110,
    609,
    1,
    0,
    0,
    0,
    112,
    613,
    1,
    0,
    0,
    0,
    114,
    619,
    1,
    0,
    0,
    0,
    116,
    621,
    1,
    0,
    0,
    0,
    118,
    628,
    1,
    0,
    0,
    0,
    120,
    630,
    1,
    0,
    0,
    0,
    122,
    124,
    3,
    6,
    3,
    0,
    123,
    122,
    1,
    0,
    0,
    0,
    123,
    124,
    1,
    0,
    0,
    0,
    124,
    127,
    1,
    0,
    0,
    0,
    125,
    128,
    3,
    8,
    4,
    0,
    126,
    128,
    3,
    4,
    2,
    0,
    127,
    125,
    1,
    0,
    0,
    0,
    127,
    126,
    1,
    0,
    0,
    0,
    128,
    129,
    1,
    0,
    0,
    0,
    129,
    130,
    5,
    0,
    0,
    1,
    130,
    1,
    1,
    0,
    0,
    0,
    131,
    132,
    5,
    1,
    0,
    0,
    132,
    133,
    3,
    112,
    56,
    0,
    133,
    134,
    5,
    2,
    0,
    0,
    134,
    3,
    1,
    0,
    0,
    0,
    135,
    136,
    3,
    6,
    3,
    0,
    136,
    140,
    5,
    3,
    0,
    0,
    137,
    139,
    3,
    8,
    4,
    0,
    138,
    137,
    1,
    0,
    0,
    0,
    139,
    142,
    1,
    0,
    0,
    0,
    140,
    138,
    1,
    0,
    0,
    0,
    140,
    141,
    1,
    0,
    0,
    0,
    141,
    143,
    1,
    0,
    0,
    0,
    142,
    140,
    1,
    0,
    0,
    0,
    143,
    144,
    5,
    4,
    0,
    0,
    144,
    5,
    1,
    0,
    0,
    0,
    145,
    149,
    5,
    5,
    0,
    0,
    146,
    147,
    3,
    118,
    59,
    0,
    147,
    148,
    5,
    6,
    0,
    0,
    148,
    150,
    1,
    0,
    0,
    0,
    149,
    146,
    1,
    0,
    0,
    0,
    150,
    151,
    1,
    0,
    0,
    0,
    151,
    149,
    1,
    0,
    0,
    0,
    151,
    152,
    1,
    0,
    0,
    0,
    152,
    153,
    1,
    0,
    0,
    0,
    153,
    158,
    3,
    118,
    59,
    0,
    154,
    155,
    5,
    7,
    0,
    0,
    155,
    157,
    3,
    118,
    59,
    0,
    156,
    154,
    1,
    0,
    0,
    0,
    157,
    160,
    1,
    0,
    0,
    0,
    158,
    156,
    1,
    0,
    0,
    0,
    158,
    159,
    1,
    0,
    0,
    0,
    159,
    163,
    1,
    0,
    0,
    0,
    160,
    158,
    1,
    0,
    0,
    0,
    161,
    162,
    5,
    8,
    0,
    0,
    162,
    164,
    3,
    112,
    56,
    0,
    163,
    161,
    1,
    0,
    0,
    0,
    163,
    164,
    1,
    0,
    0,
    0,
    164,
    165,
    1,
    0,
    0,
    0,
    165,
    166,
    5,
    2,
    0,
    0,
    166,
    7,
    1,
    0,
    0,
    0,
    167,
    169,
    3,
    10,
    5,
    0,
    168,
    167,
    1,
    0,
    0,
    0,
    169,
    170,
    1,
    0,
    0,
    0,
    170,
    168,
    1,
    0,
    0,
    0,
    170,
    171,
    1,
    0,
    0,
    0,
    171,
    183,
    1,
    0,
    0,
    0,
    172,
    174,
    3,
    32,
    16,
    0,
    173,
    172,
    1,
    0,
    0,
    0,
    174,
    175,
    1,
    0,
    0,
    0,
    175,
    173,
    1,
    0,
    0,
    0,
    175,
    176,
    1,
    0,
    0,
    0,
    176,
    183,
    1,
    0,
    0,
    0,
    177,
    179,
    3,
    14,
    7,
    0,
    178,
    177,
    1,
    0,
    0,
    0,
    179,
    180,
    1,
    0,
    0,
    0,
    180,
    178,
    1,
    0,
    0,
    0,
    180,
    181,
    1,
    0,
    0,
    0,
    181,
    183,
    1,
    0,
    0,
    0,
    182,
    168,
    1,
    0,
    0,
    0,
    182,
    173,
    1,
    0,
    0,
    0,
    182,
    178,
    1,
    0,
    0,
    0,
    183,
    9,
    1,
    0,
    0,
    0,
    184,
    185,
    5,
    9,
    0,
    0,
    185,
    188,
    3,
    12,
    6,
    0,
    186,
    187,
    5,
    10,
    0,
    0,
    187,
    189,
    3,
    118,
    59,
    0,
    188,
    186,
    1,
    0,
    0,
    0,
    188,
    189,
    1,
    0,
    0,
    0,
    189,
    190,
    1,
    0,
    0,
    0,
    190,
    191,
    5,
    2,
    0,
    0,
    191,
    11,
    1,
    0,
    0,
    0,
    192,
    221,
    3,
    118,
    59,
    0,
    193,
    194,
    3,
    118,
    59,
    0,
    194,
    195,
    5,
    6,
    0,
    0,
    195,
    196,
    3,
    118,
    59,
    0,
    196,
    197,
    5,
    7,
    0,
    0,
    197,
    200,
    3,
    118,
    59,
    0,
    198,
    199,
    5,
    8,
    0,
    0,
    199,
    201,
    3,
    112,
    56,
    0,
    200,
    198,
    1,
    0,
    0,
    0,
    200,
    201,
    1,
    0,
    0,
    0,
    201,
    221,
    1,
    0,
    0,
    0,
    202,
    203,
    3,
    118,
    59,
    0,
    203,
    204,
    5,
    6,
    0,
    0,
    204,
    206,
    1,
    0,
    0,
    0,
    205,
    202,
    1,
    0,
    0,
    0,
    206,
    207,
    1,
    0,
    0,
    0,
    207,
    205,
    1,
    0,
    0,
    0,
    207,
    208,
    1,
    0,
    0,
    0,
    208,
    209,
    1,
    0,
    0,
    0,
    209,
    212,
    3,
    118,
    59,
    0,
    210,
    211,
    5,
    7,
    0,
    0,
    211,
    213,
    3,
    118,
    59,
    0,
    212,
    210,
    1,
    0,
    0,
    0,
    213,
    214,
    1,
    0,
    0,
    0,
    214,
    212,
    1,
    0,
    0,
    0,
    214,
    215,
    1,
    0,
    0,
    0,
    215,
    218,
    1,
    0,
    0,
    0,
    216,
    217,
    5,
    8,
    0,
    0,
    217,
    219,
    3,
    112,
    56,
    0,
    218,
    216,
    1,
    0,
    0,
    0,
    218,
    219,
    1,
    0,
    0,
    0,
    219,
    221,
    1,
    0,
    0,
    0,
    220,
    192,
    1,
    0,
    0,
    0,
    220,
    193,
    1,
    0,
    0,
    0,
    220,
    205,
    1,
    0,
    0,
    0,
    221,
    13,
    1,
    0,
    0,
    0,
    222,
    223,
    3,
    98,
    49,
    0,
    223,
    224,
    5,
    11,
    0,
    0,
    224,
    225,
    3,
    118,
    59,
    0,
    225,
    229,
    5,
    3,
    0,
    0,
    226,
    228,
    3,
    16,
    8,
    0,
    227,
    226,
    1,
    0,
    0,
    0,
    228,
    231,
    1,
    0,
    0,
    0,
    229,
    227,
    1,
    0,
    0,
    0,
    229,
    230,
    1,
    0,
    0,
    0,
    230,
    232,
    1,
    0,
    0,
    0,
    231,
    229,
    1,
    0,
    0,
    0,
    232,
    233,
    5,
    4,
    0,
    0,
    233,
    15,
    1,
    0,
    0,
    0,
    234,
    235,
    3,
    98,
    49,
    0,
    235,
    236,
    3,
    18,
    9,
    0,
    236,
    17,
    1,
    0,
    0,
    0,
    237,
    243,
    3,
    20,
    10,
    0,
    238,
    243,
    3,
    22,
    11,
    0,
    239,
    243,
    3,
    52,
    26,
    0,
    240,
    243,
    3,
    38,
    19,
    0,
    241,
    243,
    3,
    26,
    13,
    0,
    242,
    237,
    1,
    0,
    0,
    0,
    242,
    238,
    1,
    0,
    0,
    0,
    242,
    239,
    1,
    0,
    0,
    0,
    242,
    240,
    1,
    0,
    0,
    0,
    242,
    241,
    1,
    0,
    0,
    0,
    243,
    19,
    1,
    0,
    0,
    0,
    244,
    245,
    5,
    12,
    0,
    0,
    245,
    246,
    3,
    118,
    59,
    0,
    246,
    247,
    5,
    6,
    0,
    0,
    247,
    248,
    3,
    24,
    12,
    0,
    248,
    254,
    1,
    0,
    0,
    0,
    249,
    250,
    5,
    12,
    0,
    0,
    250,
    251,
    3,
    12,
    6,
    0,
    251,
    252,
    5,
    2,
    0,
    0,
    252,
    254,
    1,
    0,
    0,
    0,
    253,
    244,
    1,
    0,
    0,
    0,
    253,
    249,
    1,
    0,
    0,
    0,
    254,
    21,
    1,
    0,
    0,
    0,
    255,
    256,
    5,
    13,
    0,
    0,
    256,
    257,
    3,
    118,
    59,
    0,
    257,
    258,
    5,
    6,
    0,
    0,
    258,
    259,
    3,
    24,
    12,
    0,
    259,
    265,
    1,
    0,
    0,
    0,
    260,
    261,
    5,
    13,
    0,
    0,
    261,
    262,
    3,
    12,
    6,
    0,
    262,
    263,
    5,
    2,
    0,
    0,
    263,
    265,
    1,
    0,
    0,
    0,
    264,
    255,
    1,
    0,
    0,
    0,
    264,
    260,
    1,
    0,
    0,
    0,
    265,
    23,
    1,
    0,
    0,
    0,
    266,
    267,
    3,
    42,
    21,
    0,
    267,
    268,
    5,
    2,
    0,
    0,
    268,
    279,
    1,
    0,
    0,
    0,
    269,
    270,
    5,
    14,
    0,
    0,
    270,
    274,
    5,
    3,
    0,
    0,
    271,
    273,
    3,
    34,
    17,
    0,
    272,
    271,
    1,
    0,
    0,
    0,
    273,
    276,
    1,
    0,
    0,
    0,
    274,
    272,
    1,
    0,
    0,
    0,
    274,
    275,
    1,
    0,
    0,
    0,
    275,
    277,
    1,
    0,
    0,
    0,
    276,
    274,
    1,
    0,
    0,
    0,
    277,
    279,
    5,
    4,
    0,
    0,
    278,
    266,
    1,
    0,
    0,
    0,
    278,
    269,
    1,
    0,
    0,
    0,
    279,
    25,
    1,
    0,
    0,
    0,
    280,
    281,
    5,
    15,
    0,
    0,
    281,
    282,
    3,
    12,
    6,
    0,
    282,
    283,
    5,
    2,
    0,
    0,
    283,
    292,
    1,
    0,
    0,
    0,
    284,
    285,
    5,
    15,
    0,
    0,
    285,
    286,
    3,
    12,
    6,
    0,
    286,
    287,
    5,
    16,
    0,
    0,
    287,
    288,
    5,
    3,
    0,
    0,
    288,
    289,
    3,
    28,
    14,
    0,
    289,
    290,
    5,
    4,
    0,
    0,
    290,
    292,
    1,
    0,
    0,
    0,
    291,
    280,
    1,
    0,
    0,
    0,
    291,
    284,
    1,
    0,
    0,
    0,
    292,
    27,
    1,
    0,
    0,
    0,
    293,
    294,
    6,
    14,
    -1,
    0,
    294,
    295,
    3,
    30,
    15,
    0,
    295,
    301,
    1,
    0,
    0,
    0,
    296,
    297,
    10,
    1,
    0,
    0,
    297,
    298,
    5,
    17,
    0,
    0,
    298,
    300,
    3,
    30,
    15,
    0,
    299,
    296,
    1,
    0,
    0,
    0,
    300,
    303,
    1,
    0,
    0,
    0,
    301,
    299,
    1,
    0,
    0,
    0,
    301,
    302,
    1,
    0,
    0,
    0,
    302,
    29,
    1,
    0,
    0,
    0,
    303,
    301,
    1,
    0,
    0,
    0,
    304,
    305,
    3,
    118,
    59,
    0,
    305,
    306,
    5,
    10,
    0,
    0,
    306,
    307,
    3,
    118,
    59,
    0,
    307,
    31,
    1,
    0,
    0,
    0,
    308,
    309,
    3,
    98,
    49,
    0,
    309,
    310,
    5,
    14,
    0,
    0,
    310,
    311,
    3,
    118,
    59,
    0,
    311,
    315,
    5,
    3,
    0,
    0,
    312,
    314,
    3,
    34,
    17,
    0,
    313,
    312,
    1,
    0,
    0,
    0,
    314,
    317,
    1,
    0,
    0,
    0,
    315,
    313,
    1,
    0,
    0,
    0,
    315,
    316,
    1,
    0,
    0,
    0,
    316,
    318,
    1,
    0,
    0,
    0,
    317,
    315,
    1,
    0,
    0,
    0,
    318,
    319,
    5,
    4,
    0,
    0,
    319,
    33,
    1,
    0,
    0,
    0,
    320,
    321,
    3,
    98,
    49,
    0,
    321,
    322,
    3,
    36,
    18,
    0,
    322,
    35,
    1,
    0,
    0,
    0,
    323,
    327,
    3,
    38,
    19,
    0,
    324,
    327,
    3,
    52,
    26,
    0,
    325,
    327,
    3,
    40,
    20,
    0,
    326,
    323,
    1,
    0,
    0,
    0,
    326,
    324,
    1,
    0,
    0,
    0,
    326,
    325,
    1,
    0,
    0,
    0,
    327,
    37,
    1,
    0,
    0,
    0,
    328,
    335,
    3,
    80,
    40,
    0,
    329,
    335,
    3,
    70,
    35,
    0,
    330,
    335,
    3,
    60,
    30,
    0,
    331,
    335,
    3,
    66,
    33,
    0,
    332,
    335,
    3,
    76,
    38,
    0,
    333,
    335,
    3,
    58,
    29,
    0,
    334,
    328,
    1,
    0,
    0,
    0,
    334,
    329,
    1,
    0,
    0,
    0,
    334,
    330,
    1,
    0,
    0,
    0,
    334,
    331,
    1,
    0,
    0,
    0,
    334,
    332,
    1,
    0,
    0,
    0,
    334,
    333,
    1,
    0,
    0,
    0,
    335,
    39,
    1,
    0,
    0,
    0,
    336,
    337,
    3,
    118,
    59,
    0,
    337,
    338,
    5,
    6,
    0,
    0,
    338,
    339,
    3,
    42,
    21,
    0,
    339,
    340,
    5,
    2,
    0,
    0,
    340,
    41,
    1,
    0,
    0,
    0,
    341,
    342,
    5,
    18,
    0,
    0,
    342,
    343,
    3,
    44,
    22,
    0,
    343,
    344,
    3,
    46,
    23,
    0,
    344,
    43,
    1,
    0,
    0,
    0,
    345,
    346,
    5,
    19,
    0,
    0,
    346,
    347,
    3,
    48,
    24,
    0,
    347,
    348,
    5,
    20,
    0,
    0,
    348,
    45,
    1,
    0,
    0,
    0,
    349,
    353,
    1,
    0,
    0,
    0,
    350,
    351,
    5,
    21,
    0,
    0,
    351,
    353,
    3,
    84,
    42,
    0,
    352,
    349,
    1,
    0,
    0,
    0,
    352,
    350,
    1,
    0,
    0,
    0,
    353,
    47,
    1,
    0,
    0,
    0,
    354,
    367,
    1,
    0,
    0,
    0,
    355,
    360,
    3,
    50,
    25,
    0,
    356,
    357,
    5,
    17,
    0,
    0,
    357,
    359,
    3,
    50,
    25,
    0,
    358,
    356,
    1,
    0,
    0,
    0,
    359,
    362,
    1,
    0,
    0,
    0,
    360,
    358,
    1,
    0,
    0,
    0,
    360,
    361,
    1,
    0,
    0,
    0,
    361,
    364,
    1,
    0,
    0,
    0,
    362,
    360,
    1,
    0,
    0,
    0,
    363,
    365,
    5,
    17,
    0,
    0,
    364,
    363,
    1,
    0,
    0,
    0,
    364,
    365,
    1,
    0,
    0,
    0,
    365,
    367,
    1,
    0,
    0,
    0,
    366,
    354,
    1,
    0,
    0,
    0,
    366,
    355,
    1,
    0,
    0,
    0,
    367,
    49,
    1,
    0,
    0,
    0,
    368,
    369,
    3,
    118,
    59,
    0,
    369,
    370,
    5,
    6,
    0,
    0,
    370,
    371,
    3,
    84,
    42,
    0,
    371,
    51,
    1,
    0,
    0,
    0,
    372,
    373,
    5,
    9,
    0,
    0,
    373,
    374,
    3,
    12,
    6,
    0,
    374,
    375,
    5,
    83,
    0,
    0,
    375,
    376,
    5,
    3,
    0,
    0,
    376,
    377,
    3,
    54,
    27,
    0,
    377,
    378,
    5,
    4,
    0,
    0,
    378,
    379,
    5,
    2,
    0,
    0,
    379,
    53,
    1,
    0,
    0,
    0,
    380,
    385,
    3,
    56,
    28,
    0,
    381,
    382,
    5,
    17,
    0,
    0,
    382,
    384,
    3,
    56,
    28,
    0,
    383,
    381,
    1,
    0,
    0,
    0,
    384,
    387,
    1,
    0,
    0,
    0,
    385,
    383,
    1,
    0,
    0,
    0,
    385,
    386,
    1,
    0,
    0,
    0,
    386,
    55,
    1,
    0,
    0,
    0,
    387,
    385,
    1,
    0,
    0,
    0,
    388,
    394,
    3,
    118,
    59,
    0,
    389,
    390,
    3,
    118,
    59,
    0,
    390,
    391,
    5,
    10,
    0,
    0,
    391,
    392,
    3,
    118,
    59,
    0,
    392,
    394,
    1,
    0,
    0,
    0,
    393,
    388,
    1,
    0,
    0,
    0,
    393,
    389,
    1,
    0,
    0,
    0,
    394,
    57,
    1,
    0,
    0,
    0,
    395,
    396,
    5,
    22,
    0,
    0,
    396,
    397,
    3,
    118,
    59,
    0,
    397,
    398,
    5,
    23,
    0,
    0,
    398,
    399,
    3,
    84,
    42,
    0,
    399,
    400,
    5,
    2,
    0,
    0,
    400,
    59,
    1,
    0,
    0,
    0,
    401,
    402,
    5,
    24,
    0,
    0,
    402,
    403,
    3,
    118,
    59,
    0,
    403,
    404,
    5,
    3,
    0,
    0,
    404,
    405,
    3,
    62,
    31,
    0,
    405,
    406,
    5,
    4,
    0,
    0,
    406,
    61,
    1,
    0,
    0,
    0,
    407,
    414,
    3,
    64,
    32,
    0,
    408,
    409,
    3,
    64,
    32,
    0,
    409,
    411,
    5,
    17,
    0,
    0,
    410,
    412,
    3,
    62,
    31,
    0,
    411,
    410,
    1,
    0,
    0,
    0,
    411,
    412,
    1,
    0,
    0,
    0,
    412,
    414,
    1,
    0,
    0,
    0,
    413,
    407,
    1,
    0,
    0,
    0,
    413,
    408,
    1,
    0,
    0,
    0,
    414,
    63,
    1,
    0,
    0,
    0,
    415,
    416,
    3,
    118,
    59,
    0,
    416,
    417,
    5,
    6,
    0,
    0,
    417,
    418,
    3,
    84,
    42,
    0,
    418,
    65,
    1,
    0,
    0,
    0,
    419,
    420,
    5,
    25,
    0,
    0,
    420,
    421,
    3,
    118,
    59,
    0,
    421,
    422,
    5,
    3,
    0,
    0,
    422,
    423,
    3,
    68,
    34,
    0,
    423,
    424,
    5,
    4,
    0,
    0,
    424,
    67,
    1,
    0,
    0,
    0,
    425,
    432,
    3,
    118,
    59,
    0,
    426,
    427,
    3,
    118,
    59,
    0,
    427,
    429,
    5,
    17,
    0,
    0,
    428,
    430,
    3,
    68,
    34,
    0,
    429,
    428,
    1,
    0,
    0,
    0,
    429,
    430,
    1,
    0,
    0,
    0,
    430,
    432,
    1,
    0,
    0,
    0,
    431,
    425,
    1,
    0,
    0,
    0,
    431,
    426,
    1,
    0,
    0,
    0,
    432,
    69,
    1,
    0,
    0,
    0,
    433,
    434,
    5,
    26,
    0,
    0,
    434,
    435,
    3,
    118,
    59,
    0,
    435,
    436,
    5,
    3,
    0,
    0,
    436,
    437,
    3,
    72,
    36,
    0,
    437,
    438,
    5,
    4,
    0,
    0,
    438,
    71,
    1,
    0,
    0,
    0,
    439,
    446,
    3,
    74,
    37,
    0,
    440,
    441,
    3,
    74,
    37,
    0,
    441,
    443,
    5,
    17,
    0,
    0,
    442,
    444,
    3,
    72,
    36,
    0,
    443,
    442,
    1,
    0,
    0,
    0,
    443,
    444,
    1,
    0,
    0,
    0,
    444,
    446,
    1,
    0,
    0,
    0,
    445,
    439,
    1,
    0,
    0,
    0,
    445,
    440,
    1,
    0,
    0,
    0,
    446,
    73,
    1,
    0,
    0,
    0,
    447,
    454,
    3,
    118,
    59,
    0,
    448,
    449,
    3,
    118,
    59,
    0,
    449,
    450,
    5,
    19,
    0,
    0,
    450,
    451,
    3,
    84,
    42,
    0,
    451,
    452,
    5,
    20,
    0,
    0,
    452,
    454,
    1,
    0,
    0,
    0,
    453,
    447,
    1,
    0,
    0,
    0,
    453,
    448,
    1,
    0,
    0,
    0,
    454,
    75,
    1,
    0,
    0,
    0,
    455,
    456,
    5,
    27,
    0,
    0,
    456,
    457,
    3,
    118,
    59,
    0,
    457,
    458,
    5,
    3,
    0,
    0,
    458,
    459,
    3,
    78,
    39,
    0,
    459,
    460,
    5,
    4,
    0,
    0,
    460,
    77,
    1,
    0,
    0,
    0,
    461,
    468,
    3,
    118,
    59,
    0,
    462,
    463,
    3,
    118,
    59,
    0,
    463,
    465,
    5,
    17,
    0,
    0,
    464,
    466,
    3,
    78,
    39,
    0,
    465,
    464,
    1,
    0,
    0,
    0,
    465,
    466,
    1,
    0,
    0,
    0,
    466,
    468,
    1,
    0,
    0,
    0,
    467,
    461,
    1,
    0,
    0,
    0,
    467,
    462,
    1,
    0,
    0,
    0,
    468,
    79,
    1,
    0,
    0,
    0,
    469,
    470,
    5,
    28,
    0,
    0,
    470,
    471,
    3,
    118,
    59,
    0,
    471,
    472,
    5,
    2,
    0,
    0,
    472,
    485,
    1,
    0,
    0,
    0,
    473,
    474,
    5,
    28,
    0,
    0,
    474,
    475,
    3,
    118,
    59,
    0,
    475,
    479,
    5,
    3,
    0,
    0,
    476,
    478,
    3,
    82,
    41,
    0,
    477,
    476,
    1,
    0,
    0,
    0,
    478,
    481,
    1,
    0,
    0,
    0,
    479,
    477,
    1,
    0,
    0,
    0,
    479,
    480,
    1,
    0,
    0,
    0,
    480,
    482,
    1,
    0,
    0,
    0,
    481,
    479,
    1,
    0,
    0,
    0,
    482,
    483,
    5,
    4,
    0,
    0,
    483,
    485,
    1,
    0,
    0,
    0,
    484,
    469,
    1,
    0,
    0,
    0,
    484,
    473,
    1,
    0,
    0,
    0,
    485,
    81,
    1,
    0,
    0,
    0,
    486,
    498,
    3,
    40,
    20,
    0,
    487,
    488,
    3,
    118,
    59,
    0,
    488,
    489,
    5,
    6,
    0,
    0,
    489,
    490,
    5,
    29,
    0,
    0,
    490,
    491,
    3,
    42,
    21,
    0,
    491,
    492,
    5,
    2,
    0,
    0,
    492,
    498,
    1,
    0,
    0,
    0,
    493,
    494,
    5,
    30,
    0,
    0,
    494,
    495,
    3,
    44,
    22,
    0,
    495,
    496,
    5,
    2,
    0,
    0,
    496,
    498,
    1,
    0,
    0,
    0,
    497,
    486,
    1,
    0,
    0,
    0,
    497,
    487,
    1,
    0,
    0,
    0,
    497,
    493,
    1,
    0,
    0,
    0,
    498,
    83,
    1,
    0,
    0,
    0,
    499,
    519,
    5,
    31,
    0,
    0,
    500,
    519,
    5,
    32,
    0,
    0,
    501,
    519,
    5,
    33,
    0,
    0,
    502,
    519,
    5,
    34,
    0,
    0,
    503,
    519,
    5,
    35,
    0,
    0,
    504,
    519,
    5,
    36,
    0,
    0,
    505,
    519,
    5,
    37,
    0,
    0,
    506,
    519,
    5,
    38,
    0,
    0,
    507,
    519,
    5,
    39,
    0,
    0,
    508,
    519,
    5,
    40,
    0,
    0,
    509,
    519,
    5,
    41,
    0,
    0,
    510,
    519,
    5,
    42,
    0,
    0,
    511,
    519,
    5,
    43,
    0,
    0,
    512,
    519,
    3,
    86,
    43,
    0,
    513,
    519,
    3,
    90,
    45,
    0,
    514,
    519,
    3,
    92,
    46,
    0,
    515,
    519,
    3,
    94,
    47,
    0,
    516,
    519,
    3,
    96,
    48,
    0,
    517,
    519,
    3,
    118,
    59,
    0,
    518,
    499,
    1,
    0,
    0,
    0,
    518,
    500,
    1,
    0,
    0,
    0,
    518,
    501,
    1,
    0,
    0,
    0,
    518,
    502,
    1,
    0,
    0,
    0,
    518,
    503,
    1,
    0,
    0,
    0,
    518,
    504,
    1,
    0,
    0,
    0,
    518,
    505,
    1,
    0,
    0,
    0,
    518,
    506,
    1,
    0,
    0,
    0,
    518,
    507,
    1,
    0,
    0,
    0,
    518,
    508,
    1,
    0,
    0,
    0,
    518,
    509,
    1,
    0,
    0,
    0,
    518,
    510,
    1,
    0,
    0,
    0,
    518,
    511,
    1,
    0,
    0,
    0,
    518,
    512,
    1,
    0,
    0,
    0,
    518,
    513,
    1,
    0,
    0,
    0,
    518,
    514,
    1,
    0,
    0,
    0,
    518,
    515,
    1,
    0,
    0,
    0,
    518,
    516,
    1,
    0,
    0,
    0,
    518,
    517,
    1,
    0,
    0,
    0,
    519,
    85,
    1,
    0,
    0,
    0,
    520,
    521,
    5,
    44,
    0,
    0,
    521,
    522,
    5,
    45,
    0,
    0,
    522,
    523,
    3,
    88,
    44,
    0,
    523,
    524,
    5,
    46,
    0,
    0,
    524,
    87,
    1,
    0,
    0,
    0,
    525,
    528,
    3,
    84,
    42,
    0,
    526,
    527,
    5,
    17,
    0,
    0,
    527,
    529,
    3,
    88,
    44,
    0,
    528,
    526,
    1,
    0,
    0,
    0,
    528,
    529,
    1,
    0,
    0,
    0,
    529,
    89,
    1,
    0,
    0,
    0,
    530,
    531,
    5,
    47,
    0,
    0,
    531,
    532,
    5,
    45,
    0,
    0,
    532,
    533,
    3,
    84,
    42,
    0,
    533,
    534,
    5,
    46,
    0,
    0,
    534,
    543,
    1,
    0,
    0,
    0,
    535,
    536,
    5,
    47,
    0,
    0,
    536,
    537,
    5,
    45,
    0,
    0,
    537,
    538,
    3,
    84,
    42,
    0,
    538,
    539,
    5,
    17,
    0,
    0,
    539,
    540,
    5,
    76,
    0,
    0,
    540,
    541,
    5,
    46,
    0,
    0,
    541,
    543,
    1,
    0,
    0,
    0,
    542,
    530,
    1,
    0,
    0,
    0,
    542,
    535,
    1,
    0,
    0,
    0,
    543,
    91,
    1,
    0,
    0,
    0,
    544,
    545,
    5,
    48,
    0,
    0,
    545,
    546,
    5,
    45,
    0,
    0,
    546,
    547,
    3,
    84,
    42,
    0,
    547,
    548,
    5,
    46,
    0,
    0,
    548,
    93,
    1,
    0,
    0,
    0,
    549,
    550,
    5,
    49,
    0,
    0,
    550,
    551,
    5,
    45,
    0,
    0,
    551,
    552,
    3,
    84,
    42,
    0,
    552,
    553,
    5,
    17,
    0,
    0,
    553,
    554,
    3,
    84,
    42,
    0,
    554,
    555,
    5,
    46,
    0,
    0,
    555,
    570,
    1,
    0,
    0,
    0,
    556,
    557,
    5,
    49,
    0,
    0,
    557,
    558,
    5,
    45,
    0,
    0,
    558,
    559,
    5,
    50,
    0,
    0,
    559,
    560,
    5,
    17,
    0,
    0,
    560,
    561,
    3,
    84,
    42,
    0,
    561,
    562,
    5,
    46,
    0,
    0,
    562,
    570,
    1,
    0,
    0,
    0,
    563,
    564,
    5,
    49,
    0,
    0,
    564,
    565,
    5,
    45,
    0,
    0,
    565,
    566,
    3,
    84,
    42,
    0,
    566,
    567,
    5,
    46,
    0,
    0,
    567,
    570,
    1,
    0,
    0,
    0,
    568,
    570,
    5,
    49,
    0,
    0,
    569,
    549,
    1,
    0,
    0,
    0,
    569,
    556,
    1,
    0,
    0,
    0,
    569,
    563,
    1,
    0,
    0,
    0,
    569,
    568,
    1,
    0,
    0,
    0,
    570,
    95,
    1,
    0,
    0,
    0,
    571,
    578,
    3,
    118,
    59,
    0,
    572,
    573,
    5,
    51,
    0,
    0,
    573,
    574,
    5,
    45,
    0,
    0,
    574,
    575,
    3,
    118,
    59,
    0,
    575,
    576,
    5,
    46,
    0,
    0,
    576,
    578,
    1,
    0,
    0,
    0,
    577,
    571,
    1,
    0,
    0,
    0,
    577,
    572,
    1,
    0,
    0,
    0,
    578,
    97,
    1,
    0,
    0,
    0,
    579,
    581,
    3,
    100,
    50,
    0,
    580,
    579,
    1,
    0,
    0,
    0,
    581,
    584,
    1,
    0,
    0,
    0,
    582,
    580,
    1,
    0,
    0,
    0,
    582,
    583,
    1,
    0,
    0,
    0,
    583,
    99,
    1,
    0,
    0,
    0,
    584,
    582,
    1,
    0,
    0,
    0,
    585,
    589,
    3,
    102,
    51,
    0,
    586,
    589,
    3,
    104,
    52,
    0,
    587,
    589,
    3,
    106,
    53,
    0,
    588,
    585,
    1,
    0,
    0,
    0,
    588,
    586,
    1,
    0,
    0,
    0,
    588,
    587,
    1,
    0,
    0,
    0,
    589,
    101,
    1,
    0,
    0,
    0,
    590,
    591,
    5,
    52,
    0,
    0,
    591,
    592,
    5,
    19,
    0,
    0,
    592,
    593,
    3,
    108,
    54,
    0,
    593,
    594,
    5,
    20,
    0,
    0,
    594,
    103,
    1,
    0,
    0,
    0,
    595,
    596,
    5,
    53,
    0,
    0,
    596,
    597,
    5,
    19,
    0,
    0,
    597,
    598,
    3,
    110,
    55,
    0,
    598,
    599,
    5,
    20,
    0,
    0,
    599,
    105,
    1,
    0,
    0,
    0,
    600,
    601,
    5,
    54,
    0,
    0,
    601,
    602,
    5,
    19,
    0,
    0,
    602,
    603,
    3,
    110,
    55,
    0,
    603,
    604,
    5,
    20,
    0,
    0,
    604,
    107,
    1,
    0,
    0,
    0,
    605,
    606,
    5,
    55,
    0,
    0,
    606,
    607,
    5,
    23,
    0,
    0,
    607,
    608,
    3,
    118,
    59,
    0,
    608,
    109,
    1,
    0,
    0,
    0,
    609,
    610,
    5,
    56,
    0,
    0,
    610,
    611,
    5,
    23,
    0,
    0,
    611,
    612,
    3,
    112,
    56,
    0,
    612,
    111,
    1,
    0,
    0,
    0,
    613,
    614,
    5,
    64,
    0,
    0,
    614,
    113,
    1,
    0,
    0,
    0,
    615,
    620,
    3,
    116,
    58,
    0,
    616,
    620,
    3,
    120,
    60,
    0,
    617,
    620,
    5,
    76,
    0,
    0,
    618,
    620,
    5,
    63,
    0,
    0,
    619,
    615,
    1,
    0,
    0,
    0,
    619,
    616,
    1,
    0,
    0,
    0,
    619,
    617,
    1,
    0,
    0,
    0,
    619,
    618,
    1,
    0,
    0,
    0,
    620,
    115,
    1,
    0,
    0,
    0,
    621,
    622,
    7,
    0,
    0,
    0,
    622,
    117,
    1,
    0,
    0,
    0,
    623,
    624,
    5,
    58,
    0,
    0,
    624,
    629,
    3,
    120,
    60,
    0,
    625,
    626,
    5,
    58,
    0,
    0,
    626,
    629,
    5,
    63,
    0,
    0,
    627,
    629,
    5,
    63,
    0,
    0,
    628,
    623,
    1,
    0,
    0,
    0,
    628,
    625,
    1,
    0,
    0,
    0,
    628,
    627,
    1,
    0,
    0,
    0,
    629,
    119,
    1,
    0,
    0,
    0,
    630,
    631,
    7,
    1,
    0,
    0,
    631,
    121,
    1,
    0,
    0,
    0,
    54,
    123,
    127,
    140,
    151,
    158,
    163,
    170,
    175,
    180,
    182,
    188,
    200,
    207,
    214,
    218,
    220,
    229,
    242,
    253,
    264,
    274,
    278,
    291,
    301,
    315,
    326,
    334,
    352,
    360,
    364,
    366,
    385,
    393,
    411,
    413,
    429,
    431,
    443,
    445,
    453,
    465,
    467,
    479,
    484,
    497,
    518,
    528,
    542,
    569,
    577,
    582,
    588,
    619,
    628
  ];
  static __ATN;
  static get _ATN() {
    if (!_WitParser.__ATN) {
      _WitParser.__ATN = new We().deserialize(_WitParser._serializedATN);
    }
    return _WitParser.__ATN;
  }
  static DecisionsToDFA = _WitParser._ATN.decisionToState.map((ds, index) => new Qe(ds, index));
};
var WitFileContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  EOF() {
    return this.getToken(WitParser.EOF, 0);
  }
  packageItems() {
    return this.getTypedRuleContext(PackageItemsContext, 0);
  }
  nestedPackageDefinition() {
    return this.getTypedRuleContext(NestedPackageDefinitionContext, 0);
  }
  packageDecl() {
    return this.getTypedRuleContext(PackageDeclContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_witFile;
  }
  enterRule(listener) {
    if (listener.enterWitFile) {
      listener.enterWitFile(this);
    }
  }
  exitRule(listener) {
    if (listener.exitWitFile) {
      listener.exitWitFile(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitWitFile) {
      return visitor.visitWitFile(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var SimpleTestContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  validSemver() {
    return this.getTypedRuleContext(ValidSemverContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_simpleTest;
  }
  enterRule(listener) {
    if (listener.enterSimpleTest) {
      listener.enterSimpleTest(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSimpleTest) {
      listener.exitSimpleTest(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitSimpleTest) {
      return visitor.visitSimpleTest(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var NestedPackageDefinitionContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  packageDecl() {
    return this.getTypedRuleContext(PackageDeclContext, 0);
  }
  packageItems_list() {
    return this.getTypedRuleContexts(PackageItemsContext);
  }
  packageItems(i2) {
    return this.getTypedRuleContext(PackageItemsContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_nestedPackageDefinition;
  }
  enterRule(listener) {
    if (listener.enterNestedPackageDefinition) {
      listener.enterNestedPackageDefinition(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNestedPackageDefinition) {
      listener.exitNestedPackageDefinition(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitNestedPackageDefinition) {
      return visitor.visitNestedPackageDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var PackageDeclContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id_list() {
    return this.getTypedRuleContexts(IdContext);
  }
  id(i2) {
    return this.getTypedRuleContext(IdContext, i2);
  }
  validSemver() {
    return this.getTypedRuleContext(ValidSemverContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_packageDecl;
  }
  enterRule(listener) {
    if (listener.enterPackageDecl) {
      listener.enterPackageDecl(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPackageDecl) {
      listener.exitPackageDecl(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitPackageDecl) {
      return visitor.visitPackageDecl(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var PackageItemsContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  toplevelUseItem_list() {
    return this.getTypedRuleContexts(ToplevelUseItemContext);
  }
  toplevelUseItem(i2) {
    return this.getTypedRuleContext(ToplevelUseItemContext, i2);
  }
  interfaceItem_list() {
    return this.getTypedRuleContexts(InterfaceItemContext);
  }
  interfaceItem(i2) {
    return this.getTypedRuleContext(InterfaceItemContext, i2);
  }
  worldItem_list() {
    return this.getTypedRuleContexts(WorldItemContext);
  }
  worldItem(i2) {
    return this.getTypedRuleContext(WorldItemContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_packageItems;
  }
  enterRule(listener) {
    if (listener.enterPackageItems) {
      listener.enterPackageItems(this);
    }
  }
  exitRule(listener) {
    if (listener.exitPackageItems) {
      listener.exitPackageItems(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitPackageItems) {
      return visitor.visitPackageItems(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ToplevelUseItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  usePath() {
    return this.getTypedRuleContext(UsePathContext, 0);
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_toplevelUseItem;
  }
  enterRule(listener) {
    if (listener.enterToplevelUseItem) {
      listener.enterToplevelUseItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitToplevelUseItem) {
      listener.exitToplevelUseItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitToplevelUseItem) {
      return visitor.visitToplevelUseItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var UsePathContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id_list() {
    return this.getTypedRuleContexts(IdContext);
  }
  id(i2) {
    return this.getTypedRuleContext(IdContext, i2);
  }
  validSemver() {
    return this.getTypedRuleContext(ValidSemverContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_usePath;
  }
  enterRule(listener) {
    if (listener.enterUsePath) {
      listener.enterUsePath(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUsePath) {
      listener.exitUsePath(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitUsePath) {
      return visitor.visitUsePath(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var WorldItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  gate() {
    return this.getTypedRuleContext(GateContext, 0);
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  worldItems_list() {
    return this.getTypedRuleContexts(WorldItemsContext);
  }
  worldItems(i2) {
    return this.getTypedRuleContext(WorldItemsContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_worldItem;
  }
  enterRule(listener) {
    if (listener.enterWorldItem) {
      listener.enterWorldItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitWorldItem) {
      listener.exitWorldItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitWorldItem) {
      return visitor.visitWorldItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var WorldItemsContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  gate() {
    return this.getTypedRuleContext(GateContext, 0);
  }
  worldDefinition() {
    return this.getTypedRuleContext(WorldDefinitionContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_worldItems;
  }
  enterRule(listener) {
    if (listener.enterWorldItems) {
      listener.enterWorldItems(this);
    }
  }
  exitRule(listener) {
    if (listener.exitWorldItems) {
      listener.exitWorldItems(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitWorldItems) {
      return visitor.visitWorldItems(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var WorldDefinitionContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  exportItem() {
    return this.getTypedRuleContext(ExportItemContext, 0);
  }
  importItem() {
    return this.getTypedRuleContext(ImportItemContext, 0);
  }
  useItem() {
    return this.getTypedRuleContext(UseItemContext, 0);
  }
  typedefItem() {
    return this.getTypedRuleContext(TypedefItemContext, 0);
  }
  includeItem() {
    return this.getTypedRuleContext(IncludeItemContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_worldDefinition;
  }
  enterRule(listener) {
    if (listener.enterWorldDefinition) {
      listener.enterWorldDefinition(this);
    }
  }
  exitRule(listener) {
    if (listener.exitWorldDefinition) {
      listener.exitWorldDefinition(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitWorldDefinition) {
      return visitor.visitWorldDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ExportItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  externType() {
    return this.getTypedRuleContext(ExternTypeContext, 0);
  }
  usePath() {
    return this.getTypedRuleContext(UsePathContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_exportItem;
  }
  enterRule(listener) {
    if (listener.enterExportItem) {
      listener.enterExportItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExportItem) {
      listener.exitExportItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitExportItem) {
      return visitor.visitExportItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ImportItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  externType() {
    return this.getTypedRuleContext(ExternTypeContext, 0);
  }
  usePath() {
    return this.getTypedRuleContext(UsePathContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_importItem;
  }
  enterRule(listener) {
    if (listener.enterImportItem) {
      listener.enterImportItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitImportItem) {
      listener.exitImportItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitImportItem) {
      return visitor.visitImportItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ExternTypeContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  funcType() {
    return this.getTypedRuleContext(FuncTypeContext, 0);
  }
  interfaceItems_list() {
    return this.getTypedRuleContexts(InterfaceItemsContext);
  }
  interfaceItems(i2) {
    return this.getTypedRuleContext(InterfaceItemsContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_externType;
  }
  enterRule(listener) {
    if (listener.enterExternType) {
      listener.enterExternType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitExternType) {
      listener.exitExternType(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitExternType) {
      return visitor.visitExternType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var IncludeItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  usePath() {
    return this.getTypedRuleContext(UsePathContext, 0);
  }
  includeNamesList() {
    return this.getTypedRuleContext(IncludeNamesListContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_includeItem;
  }
  enterRule(listener) {
    if (listener.enterIncludeItem) {
      listener.enterIncludeItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIncludeItem) {
      listener.exitIncludeItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitIncludeItem) {
      return visitor.visitIncludeItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var IncludeNamesListContext = class _IncludeNamesListContext extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  includeNamesItem() {
    return this.getTypedRuleContext(IncludeNamesItemContext, 0);
  }
  includeNamesList() {
    return this.getTypedRuleContext(_IncludeNamesListContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_includeNamesList;
  }
  enterRule(listener) {
    if (listener.enterIncludeNamesList) {
      listener.enterIncludeNamesList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIncludeNamesList) {
      listener.exitIncludeNamesList(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitIncludeNamesList) {
      return visitor.visitIncludeNamesList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var IncludeNamesItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id_list() {
    return this.getTypedRuleContexts(IdContext);
  }
  id(i2) {
    return this.getTypedRuleContext(IdContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_includeNamesItem;
  }
  enterRule(listener) {
    if (listener.enterIncludeNamesItem) {
      listener.enterIncludeNamesItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitIncludeNamesItem) {
      listener.exitIncludeNamesItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitIncludeNamesItem) {
      return visitor.visitIncludeNamesItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var InterfaceItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  gate() {
    return this.getTypedRuleContext(GateContext, 0);
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  interfaceItems_list() {
    return this.getTypedRuleContexts(InterfaceItemsContext);
  }
  interfaceItems(i2) {
    return this.getTypedRuleContext(InterfaceItemsContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_interfaceItem;
  }
  enterRule(listener) {
    if (listener.enterInterfaceItem) {
      listener.enterInterfaceItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInterfaceItem) {
      listener.exitInterfaceItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitInterfaceItem) {
      return visitor.visitInterfaceItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var InterfaceItemsContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  gate() {
    return this.getTypedRuleContext(GateContext, 0);
  }
  interfaceDefinition() {
    return this.getTypedRuleContext(InterfaceDefinitionContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_interfaceItems;
  }
  enterRule(listener) {
    if (listener.enterInterfaceItems) {
      listener.enterInterfaceItems(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInterfaceItems) {
      listener.exitInterfaceItems(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitInterfaceItems) {
      return visitor.visitInterfaceItems(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var InterfaceDefinitionContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  typedefItem() {
    return this.getTypedRuleContext(TypedefItemContext, 0);
  }
  useItem() {
    return this.getTypedRuleContext(UseItemContext, 0);
  }
  funcItem() {
    return this.getTypedRuleContext(FuncItemContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_interfaceDefinition;
  }
  enterRule(listener) {
    if (listener.enterInterfaceDefinition) {
      listener.enterInterfaceDefinition(this);
    }
  }
  exitRule(listener) {
    if (listener.exitInterfaceDefinition) {
      listener.exitInterfaceDefinition(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitInterfaceDefinition) {
      return visitor.visitInterfaceDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var TypedefItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  resourceItem() {
    return this.getTypedRuleContext(ResourceItemContext, 0);
  }
  variantItems() {
    return this.getTypedRuleContext(VariantItemsContext, 0);
  }
  recordItem() {
    return this.getTypedRuleContext(RecordItemContext, 0);
  }
  flagsItems() {
    return this.getTypedRuleContext(FlagsItemsContext, 0);
  }
  enumItems() {
    return this.getTypedRuleContext(EnumItemsContext, 0);
  }
  typeItem() {
    return this.getTypedRuleContext(TypeItemContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_typedefItem;
  }
  enterRule(listener) {
    if (listener.enterTypedefItem) {
      listener.enterTypedefItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypedefItem) {
      listener.exitTypedefItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitTypedefItem) {
      return visitor.visitTypedefItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var FuncItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  funcType() {
    return this.getTypedRuleContext(FuncTypeContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_funcItem;
  }
  enterRule(listener) {
    if (listener.enterFuncItem) {
      listener.enterFuncItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFuncItem) {
      listener.exitFuncItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitFuncItem) {
      return visitor.visitFuncItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var FuncTypeContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  paramList() {
    return this.getTypedRuleContext(ParamListContext, 0);
  }
  resultList() {
    return this.getTypedRuleContext(ResultListContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_funcType;
  }
  enterRule(listener) {
    if (listener.enterFuncType) {
      listener.enterFuncType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFuncType) {
      listener.exitFuncType(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitFuncType) {
      return visitor.visitFuncType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ParamListContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  namedTypeList() {
    return this.getTypedRuleContext(NamedTypeListContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_paramList;
  }
  enterRule(listener) {
    if (listener.enterParamList) {
      listener.enterParamList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitParamList) {
      listener.exitParamList(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitParamList) {
      return visitor.visitParamList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ResultListContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  ty() {
    return this.getTypedRuleContext(TyContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_resultList;
  }
  enterRule(listener) {
    if (listener.enterResultList) {
      listener.enterResultList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitResultList) {
      listener.exitResultList(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitResultList) {
      return visitor.visitResultList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var NamedTypeListContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  namedType_list() {
    return this.getTypedRuleContexts(NamedTypeContext);
  }
  namedType(i2) {
    return this.getTypedRuleContext(NamedTypeContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_namedTypeList;
  }
  enterRule(listener) {
    if (listener.enterNamedTypeList) {
      listener.enterNamedTypeList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamedTypeList) {
      listener.exitNamedTypeList(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitNamedTypeList) {
      return visitor.visitNamedTypeList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var NamedTypeContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  ty() {
    return this.getTypedRuleContext(TyContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_namedType;
  }
  enterRule(listener) {
    if (listener.enterNamedType) {
      listener.enterNamedType(this);
    }
  }
  exitRule(listener) {
    if (listener.exitNamedType) {
      listener.exitNamedType(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitNamedType) {
      return visitor.visitNamedType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var UseItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  usePath() {
    return this.getTypedRuleContext(UsePathContext, 0);
  }
  DOT() {
    return this.getToken(WitParser.DOT, 0);
  }
  useNamesList() {
    return this.getTypedRuleContext(UseNamesListContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_useItem;
  }
  enterRule(listener) {
    if (listener.enterUseItem) {
      listener.enterUseItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUseItem) {
      listener.exitUseItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitUseItem) {
      return visitor.visitUseItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var UseNamesListContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  useNamesItem_list() {
    return this.getTypedRuleContexts(UseNamesItemContext);
  }
  useNamesItem(i2) {
    return this.getTypedRuleContext(UseNamesItemContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_useNamesList;
  }
  enterRule(listener) {
    if (listener.enterUseNamesList) {
      listener.enterUseNamesList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUseNamesList) {
      listener.exitUseNamesList(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitUseNamesList) {
      return visitor.visitUseNamesList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var UseNamesItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id_list() {
    return this.getTypedRuleContexts(IdContext);
  }
  id(i2) {
    return this.getTypedRuleContext(IdContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_useNamesItem;
  }
  enterRule(listener) {
    if (listener.enterUseNamesItem) {
      listener.enterUseNamesItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUseNamesItem) {
      listener.exitUseNamesItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitUseNamesItem) {
      return visitor.visitUseNamesItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var TypeItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  ty() {
    return this.getTypedRuleContext(TyContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_typeItem;
  }
  enterRule(listener) {
    if (listener.enterTypeItem) {
      listener.enterTypeItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTypeItem) {
      listener.exitTypeItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitTypeItem) {
      return visitor.visitTypeItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var RecordItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  recordFields() {
    return this.getTypedRuleContext(RecordFieldsContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_recordItem;
  }
  enterRule(listener) {
    if (listener.enterRecordItem) {
      listener.enterRecordItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitRecordItem) {
      listener.exitRecordItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitRecordItem) {
      return visitor.visitRecordItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var RecordFieldsContext = class _RecordFieldsContext extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  recordField() {
    return this.getTypedRuleContext(RecordFieldContext, 0);
  }
  recordFields() {
    return this.getTypedRuleContext(_RecordFieldsContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_recordFields;
  }
  enterRule(listener) {
    if (listener.enterRecordFields) {
      listener.enterRecordFields(this);
    }
  }
  exitRule(listener) {
    if (listener.exitRecordFields) {
      listener.exitRecordFields(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitRecordFields) {
      return visitor.visitRecordFields(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var RecordFieldContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  ty() {
    return this.getTypedRuleContext(TyContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_recordField;
  }
  enterRule(listener) {
    if (listener.enterRecordField) {
      listener.enterRecordField(this);
    }
  }
  exitRule(listener) {
    if (listener.exitRecordField) {
      listener.exitRecordField(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitRecordField) {
      return visitor.visitRecordField(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var FlagsItemsContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  flagsFields() {
    return this.getTypedRuleContext(FlagsFieldsContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_flagsItems;
  }
  enterRule(listener) {
    if (listener.enterFlagsItems) {
      listener.enterFlagsItems(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFlagsItems) {
      listener.exitFlagsItems(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitFlagsItems) {
      return visitor.visitFlagsItems(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var FlagsFieldsContext = class _FlagsFieldsContext extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  flagsFields() {
    return this.getTypedRuleContext(_FlagsFieldsContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_flagsFields;
  }
  enterRule(listener) {
    if (listener.enterFlagsFields) {
      listener.enterFlagsFields(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFlagsFields) {
      listener.exitFlagsFields(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitFlagsFields) {
      return visitor.visitFlagsFields(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var VariantItemsContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  variantCases() {
    return this.getTypedRuleContext(VariantCasesContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_variantItems;
  }
  enterRule(listener) {
    if (listener.enterVariantItems) {
      listener.enterVariantItems(this);
    }
  }
  exitRule(listener) {
    if (listener.exitVariantItems) {
      listener.exitVariantItems(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitVariantItems) {
      return visitor.visitVariantItems(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var VariantCasesContext = class _VariantCasesContext extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  variantCase() {
    return this.getTypedRuleContext(VariantCaseContext, 0);
  }
  variantCases() {
    return this.getTypedRuleContext(_VariantCasesContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_variantCases;
  }
  enterRule(listener) {
    if (listener.enterVariantCases) {
      listener.enterVariantCases(this);
    }
  }
  exitRule(listener) {
    if (listener.exitVariantCases) {
      listener.exitVariantCases(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitVariantCases) {
      return visitor.visitVariantCases(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var VariantCaseContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  ty() {
    return this.getTypedRuleContext(TyContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_variantCase;
  }
  enterRule(listener) {
    if (listener.enterVariantCase) {
      listener.enterVariantCase(this);
    }
  }
  exitRule(listener) {
    if (listener.exitVariantCase) {
      listener.exitVariantCase(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitVariantCase) {
      return visitor.visitVariantCase(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var EnumItemsContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  enumCases() {
    return this.getTypedRuleContext(EnumCasesContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_enumItems;
  }
  enterRule(listener) {
    if (listener.enterEnumItems) {
      listener.enterEnumItems(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumItems) {
      listener.exitEnumItems(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitEnumItems) {
      return visitor.visitEnumItems(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var EnumCasesContext = class _EnumCasesContext extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  enumCases() {
    return this.getTypedRuleContext(_EnumCasesContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_enumCases;
  }
  enterRule(listener) {
    if (listener.enterEnumCases) {
      listener.enterEnumCases(this);
    }
  }
  exitRule(listener) {
    if (listener.exitEnumCases) {
      listener.exitEnumCases(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitEnumCases) {
      return visitor.visitEnumCases(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ResourceItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  resourceMethod_list() {
    return this.getTypedRuleContexts(ResourceMethodContext);
  }
  resourceMethod(i2) {
    return this.getTypedRuleContext(ResourceMethodContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_resourceItem;
  }
  enterRule(listener) {
    if (listener.enterResourceItem) {
      listener.enterResourceItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitResourceItem) {
      listener.exitResourceItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitResourceItem) {
      return visitor.visitResourceItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ResourceMethodContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  funcItem() {
    return this.getTypedRuleContext(FuncItemContext, 0);
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  funcType() {
    return this.getTypedRuleContext(FuncTypeContext, 0);
  }
  paramList() {
    return this.getTypedRuleContext(ParamListContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_resourceMethod;
  }
  enterRule(listener) {
    if (listener.enterResourceMethod) {
      listener.enterResourceMethod(this);
    }
  }
  exitRule(listener) {
    if (listener.exitResourceMethod) {
      listener.exitResourceMethod(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitResourceMethod) {
      return visitor.visitResourceMethod(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var TyContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  tuple() {
    return this.getTypedRuleContext(TupleContext, 0);
  }
  list() {
    return this.getTypedRuleContext(ListContext, 0);
  }
  option() {
    return this.getTypedRuleContext(OptionContext, 0);
  }
  result() {
    return this.getTypedRuleContext(ResultContext, 0);
  }
  handle() {
    return this.getTypedRuleContext(HandleContext, 0);
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_ty;
  }
  enterRule(listener) {
    if (listener.enterTy) {
      listener.enterTy(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTy) {
      listener.exitTy(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitTy) {
      return visitor.visitTy(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var TupleContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  tupleList() {
    return this.getTypedRuleContext(TupleListContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_tuple;
  }
  enterRule(listener) {
    if (listener.enterTuple) {
      listener.enterTuple(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTuple) {
      listener.exitTuple(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitTuple) {
      return visitor.visitTuple(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var TupleListContext = class _TupleListContext extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  ty() {
    return this.getTypedRuleContext(TyContext, 0);
  }
  tupleList() {
    return this.getTypedRuleContext(_TupleListContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_tupleList;
  }
  enterRule(listener) {
    if (listener.enterTupleList) {
      listener.enterTupleList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitTupleList) {
      listener.exitTupleList(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitTupleList) {
      return visitor.visitTupleList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ListContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  ty() {
    return this.getTypedRuleContext(TyContext, 0);
  }
  NUM_ID() {
    return this.getToken(WitParser.NUM_ID, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_list;
  }
  enterRule(listener) {
    if (listener.enterList) {
      listener.enterList(this);
    }
  }
  exitRule(listener) {
    if (listener.exitList) {
      listener.exitList(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitList) {
      return visitor.visitList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var OptionContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  ty() {
    return this.getTypedRuleContext(TyContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_option;
  }
  enterRule(listener) {
    if (listener.enterOption) {
      listener.enterOption(this);
    }
  }
  exitRule(listener) {
    if (listener.exitOption) {
      listener.exitOption(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitOption) {
      return visitor.visitOption(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ResultContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  ty_list() {
    return this.getTypedRuleContexts(TyContext);
  }
  ty(i2) {
    return this.getTypedRuleContext(TyContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_result;
  }
  enterRule(listener) {
    if (listener.enterResult) {
      listener.enterResult(this);
    }
  }
  exitRule(listener) {
    if (listener.exitResult) {
      listener.exitResult(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitResult) {
      return visitor.visitResult(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var HandleContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_handle;
  }
  enterRule(listener) {
    if (listener.enterHandle) {
      listener.enterHandle(this);
    }
  }
  exitRule(listener) {
    if (listener.exitHandle) {
      listener.exitHandle(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitHandle) {
      return visitor.visitHandle(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var GateContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  gateItem_list() {
    return this.getTypedRuleContexts(GateItemContext);
  }
  gateItem(i2) {
    return this.getTypedRuleContext(GateItemContext, i2);
  }
  get ruleIndex() {
    return WitParser.RULE_gate;
  }
  enterRule(listener) {
    if (listener.enterGate) {
      listener.enterGate(this);
    }
  }
  exitRule(listener) {
    if (listener.exitGate) {
      listener.exitGate(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitGate) {
      return visitor.visitGate(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var GateItemContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  unstableGate() {
    return this.getTypedRuleContext(UnstableGateContext, 0);
  }
  sinceGate() {
    return this.getTypedRuleContext(SinceGateContext, 0);
  }
  deprecatedGate() {
    return this.getTypedRuleContext(DeprecatedGateContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_gateItem;
  }
  enterRule(listener) {
    if (listener.enterGateItem) {
      listener.enterGateItem(this);
    }
  }
  exitRule(listener) {
    if (listener.exitGateItem) {
      listener.exitGateItem(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitGateItem) {
      return visitor.visitGateItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var UnstableGateContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  featureField() {
    return this.getTypedRuleContext(FeatureFieldContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_unstableGate;
  }
  enterRule(listener) {
    if (listener.enterUnstableGate) {
      listener.enterUnstableGate(this);
    }
  }
  exitRule(listener) {
    if (listener.exitUnstableGate) {
      listener.exitUnstableGate(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitUnstableGate) {
      return visitor.visitUnstableGate(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var SinceGateContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  versionField() {
    return this.getTypedRuleContext(VersionFieldContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_sinceGate;
  }
  enterRule(listener) {
    if (listener.enterSinceGate) {
      listener.enterSinceGate(this);
    }
  }
  exitRule(listener) {
    if (listener.exitSinceGate) {
      listener.exitSinceGate(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitSinceGate) {
      return visitor.visitSinceGate(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var DeprecatedGateContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  versionField() {
    return this.getTypedRuleContext(VersionFieldContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_deprecatedGate;
  }
  enterRule(listener) {
    if (listener.enterDeprecatedGate) {
      listener.enterDeprecatedGate(this);
    }
  }
  exitRule(listener) {
    if (listener.exitDeprecatedGate) {
      listener.exitDeprecatedGate(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitDeprecatedGate) {
      return visitor.visitDeprecatedGate(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var FeatureFieldContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  id() {
    return this.getTypedRuleContext(IdContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_featureField;
  }
  enterRule(listener) {
    if (listener.enterFeatureField) {
      listener.enterFeatureField(this);
    }
  }
  exitRule(listener) {
    if (listener.exitFeatureField) {
      listener.exitFeatureField(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitFeatureField) {
      return visitor.visitFeatureField(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var VersionFieldContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  validSemver() {
    return this.getTypedRuleContext(ValidSemverContext, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_versionField;
  }
  enterRule(listener) {
    if (listener.enterVersionField) {
      listener.enterVersionField(this);
    }
  }
  exitRule(listener) {
    if (listener.exitVersionField) {
      listener.exitVersionField(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitVersionField) {
      return visitor.visitVersionField(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ValidSemverContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  VALID_SEMVER() {
    return this.getToken(WitParser.VALID_SEMVER, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_validSemver;
  }
  enterRule(listener) {
    if (listener.enterValidSemver) {
      listener.enterValidSemver(this);
    }
  }
  exitRule(listener) {
    if (listener.exitValidSemver) {
      listener.exitValidSemver(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitValidSemver) {
      return visitor.visitValidSemver(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var TokenContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  operator() {
    return this.getTypedRuleContext(OperatorContext, 0);
  }
  keyword() {
    return this.getTypedRuleContext(KeywordContext, 0);
  }
  NUM_ID() {
    return this.getToken(WitParser.NUM_ID, 0);
  }
  Identifier() {
    return this.getToken(WitParser.Identifier, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_token;
  }
  enterRule(listener) {
    if (listener.enterToken) {
      listener.enterToken(this);
    }
  }
  exitRule(listener) {
    if (listener.exitToken) {
      listener.exitToken(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitToken) {
      return visitor.visitToken(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var OperatorContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  DOT() {
    return this.getToken(WitParser.DOT, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_operator;
  }
  enterRule(listener) {
    if (listener.enterOperator) {
      listener.enterOperator(this);
    }
  }
  exitRule(listener) {
    if (listener.exitOperator) {
      listener.exitOperator(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitOperator) {
      return visitor.visitOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var IdContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  keyword() {
    return this.getTypedRuleContext(KeywordContext, 0);
  }
  Identifier() {
    return this.getToken(WitParser.Identifier, 0);
  }
  get ruleIndex() {
    return WitParser.RULE_id;
  }
  enterRule(listener) {
    if (listener.enterId) {
      listener.enterId(this);
    }
  }
  exitRule(listener) {
    if (listener.exitId) {
      listener.exitId(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitId) {
      return visitor.visitId(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var KeywordContext = class extends Sn {
  constructor(parser, parent, invokingState) {
    super(parent, invokingState);
    this.parser = parser;
  }
  get ruleIndex() {
    return WitParser.RULE_keyword;
  }
  enterRule(listener) {
    if (listener.enterKeyword) {
      listener.enterKeyword(this);
    }
  }
  exitRule(listener) {
    if (listener.exitKeyword) {
      listener.exitKeyword(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitKeyword) {
      return visitor.visitKeyword(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};

// src/wit/grammar/WitListener.ts
var WitListener = class extends gn {
  /**
   * Enter a parse tree produced by `WitParser.witFile`.
   * @param ctx the parse tree
   */
  enterWitFile;
  /**
   * Exit a parse tree produced by `WitParser.witFile`.
   * @param ctx the parse tree
   */
  exitWitFile;
  /**
   * Enter a parse tree produced by `WitParser.simpleTest`.
   * @param ctx the parse tree
   */
  enterSimpleTest;
  /**
   * Exit a parse tree produced by `WitParser.simpleTest`.
   * @param ctx the parse tree
   */
  exitSimpleTest;
  /**
   * Enter a parse tree produced by `WitParser.nestedPackageDefinition`.
   * @param ctx the parse tree
   */
  enterNestedPackageDefinition;
  /**
   * Exit a parse tree produced by `WitParser.nestedPackageDefinition`.
   * @param ctx the parse tree
   */
  exitNestedPackageDefinition;
  /**
   * Enter a parse tree produced by `WitParser.packageDecl`.
   * @param ctx the parse tree
   */
  enterPackageDecl;
  /**
   * Exit a parse tree produced by `WitParser.packageDecl`.
   * @param ctx the parse tree
   */
  exitPackageDecl;
  /**
   * Enter a parse tree produced by `WitParser.packageItems`.
   * @param ctx the parse tree
   */
  enterPackageItems;
  /**
   * Exit a parse tree produced by `WitParser.packageItems`.
   * @param ctx the parse tree
   */
  exitPackageItems;
  /**
   * Enter a parse tree produced by `WitParser.toplevelUseItem`.
   * @param ctx the parse tree
   */
  enterToplevelUseItem;
  /**
   * Exit a parse tree produced by `WitParser.toplevelUseItem`.
   * @param ctx the parse tree
   */
  exitToplevelUseItem;
  /**
   * Enter a parse tree produced by `WitParser.usePath`.
   * @param ctx the parse tree
   */
  enterUsePath;
  /**
   * Exit a parse tree produced by `WitParser.usePath`.
   * @param ctx the parse tree
   */
  exitUsePath;
  /**
   * Enter a parse tree produced by `WitParser.worldItem`.
   * @param ctx the parse tree
   */
  enterWorldItem;
  /**
   * Exit a parse tree produced by `WitParser.worldItem`.
   * @param ctx the parse tree
   */
  exitWorldItem;
  /**
   * Enter a parse tree produced by `WitParser.worldItems`.
   * @param ctx the parse tree
   */
  enterWorldItems;
  /**
   * Exit a parse tree produced by `WitParser.worldItems`.
   * @param ctx the parse tree
   */
  exitWorldItems;
  /**
   * Enter a parse tree produced by `WitParser.worldDefinition`.
   * @param ctx the parse tree
   */
  enterWorldDefinition;
  /**
   * Exit a parse tree produced by `WitParser.worldDefinition`.
   * @param ctx the parse tree
   */
  exitWorldDefinition;
  /**
   * Enter a parse tree produced by `WitParser.exportItem`.
   * @param ctx the parse tree
   */
  enterExportItem;
  /**
   * Exit a parse tree produced by `WitParser.exportItem`.
   * @param ctx the parse tree
   */
  exitExportItem;
  /**
   * Enter a parse tree produced by `WitParser.importItem`.
   * @param ctx the parse tree
   */
  enterImportItem;
  /**
   * Exit a parse tree produced by `WitParser.importItem`.
   * @param ctx the parse tree
   */
  exitImportItem;
  /**
   * Enter a parse tree produced by `WitParser.externType`.
   * @param ctx the parse tree
   */
  enterExternType;
  /**
   * Exit a parse tree produced by `WitParser.externType`.
   * @param ctx the parse tree
   */
  exitExternType;
  /**
   * Enter a parse tree produced by `WitParser.includeItem`.
   * @param ctx the parse tree
   */
  enterIncludeItem;
  /**
   * Exit a parse tree produced by `WitParser.includeItem`.
   * @param ctx the parse tree
   */
  exitIncludeItem;
  /**
   * Enter a parse tree produced by `WitParser.includeNamesList`.
   * @param ctx the parse tree
   */
  enterIncludeNamesList;
  /**
   * Exit a parse tree produced by `WitParser.includeNamesList`.
   * @param ctx the parse tree
   */
  exitIncludeNamesList;
  /**
   * Enter a parse tree produced by `WitParser.includeNamesItem`.
   * @param ctx the parse tree
   */
  enterIncludeNamesItem;
  /**
   * Exit a parse tree produced by `WitParser.includeNamesItem`.
   * @param ctx the parse tree
   */
  exitIncludeNamesItem;
  /**
   * Enter a parse tree produced by `WitParser.interfaceItem`.
   * @param ctx the parse tree
   */
  enterInterfaceItem;
  /**
   * Exit a parse tree produced by `WitParser.interfaceItem`.
   * @param ctx the parse tree
   */
  exitInterfaceItem;
  /**
   * Enter a parse tree produced by `WitParser.interfaceItems`.
   * @param ctx the parse tree
   */
  enterInterfaceItems;
  /**
   * Exit a parse tree produced by `WitParser.interfaceItems`.
   * @param ctx the parse tree
   */
  exitInterfaceItems;
  /**
   * Enter a parse tree produced by `WitParser.interfaceDefinition`.
   * @param ctx the parse tree
   */
  enterInterfaceDefinition;
  /**
   * Exit a parse tree produced by `WitParser.interfaceDefinition`.
   * @param ctx the parse tree
   */
  exitInterfaceDefinition;
  /**
   * Enter a parse tree produced by `WitParser.typedefItem`.
   * @param ctx the parse tree
   */
  enterTypedefItem;
  /**
   * Exit a parse tree produced by `WitParser.typedefItem`.
   * @param ctx the parse tree
   */
  exitTypedefItem;
  /**
   * Enter a parse tree produced by `WitParser.funcItem`.
   * @param ctx the parse tree
   */
  enterFuncItem;
  /**
   * Exit a parse tree produced by `WitParser.funcItem`.
   * @param ctx the parse tree
   */
  exitFuncItem;
  /**
   * Enter a parse tree produced by `WitParser.funcType`.
   * @param ctx the parse tree
   */
  enterFuncType;
  /**
   * Exit a parse tree produced by `WitParser.funcType`.
   * @param ctx the parse tree
   */
  exitFuncType;
  /**
   * Enter a parse tree produced by `WitParser.paramList`.
   * @param ctx the parse tree
   */
  enterParamList;
  /**
   * Exit a parse tree produced by `WitParser.paramList`.
   * @param ctx the parse tree
   */
  exitParamList;
  /**
   * Enter a parse tree produced by `WitParser.resultList`.
   * @param ctx the parse tree
   */
  enterResultList;
  /**
   * Exit a parse tree produced by `WitParser.resultList`.
   * @param ctx the parse tree
   */
  exitResultList;
  /**
   * Enter a parse tree produced by `WitParser.namedTypeList`.
   * @param ctx the parse tree
   */
  enterNamedTypeList;
  /**
   * Exit a parse tree produced by `WitParser.namedTypeList`.
   * @param ctx the parse tree
   */
  exitNamedTypeList;
  /**
   * Enter a parse tree produced by `WitParser.namedType`.
   * @param ctx the parse tree
   */
  enterNamedType;
  /**
   * Exit a parse tree produced by `WitParser.namedType`.
   * @param ctx the parse tree
   */
  exitNamedType;
  /**
   * Enter a parse tree produced by `WitParser.useItem`.
   * @param ctx the parse tree
   */
  enterUseItem;
  /**
   * Exit a parse tree produced by `WitParser.useItem`.
   * @param ctx the parse tree
   */
  exitUseItem;
  /**
   * Enter a parse tree produced by `WitParser.useNamesList`.
   * @param ctx the parse tree
   */
  enterUseNamesList;
  /**
   * Exit a parse tree produced by `WitParser.useNamesList`.
   * @param ctx the parse tree
   */
  exitUseNamesList;
  /**
   * Enter a parse tree produced by `WitParser.useNamesItem`.
   * @param ctx the parse tree
   */
  enterUseNamesItem;
  /**
   * Exit a parse tree produced by `WitParser.useNamesItem`.
   * @param ctx the parse tree
   */
  exitUseNamesItem;
  /**
   * Enter a parse tree produced by `WitParser.typeItem`.
   * @param ctx the parse tree
   */
  enterTypeItem;
  /**
   * Exit a parse tree produced by `WitParser.typeItem`.
   * @param ctx the parse tree
   */
  exitTypeItem;
  /**
   * Enter a parse tree produced by `WitParser.recordItem`.
   * @param ctx the parse tree
   */
  enterRecordItem;
  /**
   * Exit a parse tree produced by `WitParser.recordItem`.
   * @param ctx the parse tree
   */
  exitRecordItem;
  /**
   * Enter a parse tree produced by `WitParser.recordFields`.
   * @param ctx the parse tree
   */
  enterRecordFields;
  /**
   * Exit a parse tree produced by `WitParser.recordFields`.
   * @param ctx the parse tree
   */
  exitRecordFields;
  /**
   * Enter a parse tree produced by `WitParser.recordField`.
   * @param ctx the parse tree
   */
  enterRecordField;
  /**
   * Exit a parse tree produced by `WitParser.recordField`.
   * @param ctx the parse tree
   */
  exitRecordField;
  /**
   * Enter a parse tree produced by `WitParser.flagsItems`.
   * @param ctx the parse tree
   */
  enterFlagsItems;
  /**
   * Exit a parse tree produced by `WitParser.flagsItems`.
   * @param ctx the parse tree
   */
  exitFlagsItems;
  /**
   * Enter a parse tree produced by `WitParser.flagsFields`.
   * @param ctx the parse tree
   */
  enterFlagsFields;
  /**
   * Exit a parse tree produced by `WitParser.flagsFields`.
   * @param ctx the parse tree
   */
  exitFlagsFields;
  /**
   * Enter a parse tree produced by `WitParser.variantItems`.
   * @param ctx the parse tree
   */
  enterVariantItems;
  /**
   * Exit a parse tree produced by `WitParser.variantItems`.
   * @param ctx the parse tree
   */
  exitVariantItems;
  /**
   * Enter a parse tree produced by `WitParser.variantCases`.
   * @param ctx the parse tree
   */
  enterVariantCases;
  /**
   * Exit a parse tree produced by `WitParser.variantCases`.
   * @param ctx the parse tree
   */
  exitVariantCases;
  /**
   * Enter a parse tree produced by `WitParser.variantCase`.
   * @param ctx the parse tree
   */
  enterVariantCase;
  /**
   * Exit a parse tree produced by `WitParser.variantCase`.
   * @param ctx the parse tree
   */
  exitVariantCase;
  /**
   * Enter a parse tree produced by `WitParser.enumItems`.
   * @param ctx the parse tree
   */
  enterEnumItems;
  /**
   * Exit a parse tree produced by `WitParser.enumItems`.
   * @param ctx the parse tree
   */
  exitEnumItems;
  /**
   * Enter a parse tree produced by `WitParser.enumCases`.
   * @param ctx the parse tree
   */
  enterEnumCases;
  /**
   * Exit a parse tree produced by `WitParser.enumCases`.
   * @param ctx the parse tree
   */
  exitEnumCases;
  /**
   * Enter a parse tree produced by `WitParser.resourceItem`.
   * @param ctx the parse tree
   */
  enterResourceItem;
  /**
   * Exit a parse tree produced by `WitParser.resourceItem`.
   * @param ctx the parse tree
   */
  exitResourceItem;
  /**
   * Enter a parse tree produced by `WitParser.resourceMethod`.
   * @param ctx the parse tree
   */
  enterResourceMethod;
  /**
   * Exit a parse tree produced by `WitParser.resourceMethod`.
   * @param ctx the parse tree
   */
  exitResourceMethod;
  /**
   * Enter a parse tree produced by `WitParser.ty`.
   * @param ctx the parse tree
   */
  enterTy;
  /**
   * Exit a parse tree produced by `WitParser.ty`.
   * @param ctx the parse tree
   */
  exitTy;
  /**
   * Enter a parse tree produced by `WitParser.tuple`.
   * @param ctx the parse tree
   */
  enterTuple;
  /**
   * Exit a parse tree produced by `WitParser.tuple`.
   * @param ctx the parse tree
   */
  exitTuple;
  /**
   * Enter a parse tree produced by `WitParser.tupleList`.
   * @param ctx the parse tree
   */
  enterTupleList;
  /**
   * Exit a parse tree produced by `WitParser.tupleList`.
   * @param ctx the parse tree
   */
  exitTupleList;
  /**
   * Enter a parse tree produced by `WitParser.list`.
   * @param ctx the parse tree
   */
  enterList;
  /**
   * Exit a parse tree produced by `WitParser.list`.
   * @param ctx the parse tree
   */
  exitList;
  /**
   * Enter a parse tree produced by `WitParser.option`.
   * @param ctx the parse tree
   */
  enterOption;
  /**
   * Exit a parse tree produced by `WitParser.option`.
   * @param ctx the parse tree
   */
  exitOption;
  /**
   * Enter a parse tree produced by `WitParser.result`.
   * @param ctx the parse tree
   */
  enterResult;
  /**
   * Exit a parse tree produced by `WitParser.result`.
   * @param ctx the parse tree
   */
  exitResult;
  /**
   * Enter a parse tree produced by `WitParser.handle`.
   * @param ctx the parse tree
   */
  enterHandle;
  /**
   * Exit a parse tree produced by `WitParser.handle`.
   * @param ctx the parse tree
   */
  exitHandle;
  /**
   * Enter a parse tree produced by `WitParser.gate`.
   * @param ctx the parse tree
   */
  enterGate;
  /**
   * Exit a parse tree produced by `WitParser.gate`.
   * @param ctx the parse tree
   */
  exitGate;
  /**
   * Enter a parse tree produced by `WitParser.gateItem`.
   * @param ctx the parse tree
   */
  enterGateItem;
  /**
   * Exit a parse tree produced by `WitParser.gateItem`.
   * @param ctx the parse tree
   */
  exitGateItem;
  /**
   * Enter a parse tree produced by `WitParser.unstableGate`.
   * @param ctx the parse tree
   */
  enterUnstableGate;
  /**
   * Exit a parse tree produced by `WitParser.unstableGate`.
   * @param ctx the parse tree
   */
  exitUnstableGate;
  /**
   * Enter a parse tree produced by `WitParser.sinceGate`.
   * @param ctx the parse tree
   */
  enterSinceGate;
  /**
   * Exit a parse tree produced by `WitParser.sinceGate`.
   * @param ctx the parse tree
   */
  exitSinceGate;
  /**
   * Enter a parse tree produced by `WitParser.deprecatedGate`.
   * @param ctx the parse tree
   */
  enterDeprecatedGate;
  /**
   * Exit a parse tree produced by `WitParser.deprecatedGate`.
   * @param ctx the parse tree
   */
  exitDeprecatedGate;
  /**
   * Enter a parse tree produced by `WitParser.featureField`.
   * @param ctx the parse tree
   */
  enterFeatureField;
  /**
   * Exit a parse tree produced by `WitParser.featureField`.
   * @param ctx the parse tree
   */
  exitFeatureField;
  /**
   * Enter a parse tree produced by `WitParser.versionField`.
   * @param ctx the parse tree
   */
  enterVersionField;
  /**
   * Exit a parse tree produced by `WitParser.versionField`.
   * @param ctx the parse tree
   */
  exitVersionField;
  /**
   * Enter a parse tree produced by `WitParser.validSemver`.
   * @param ctx the parse tree
   */
  enterValidSemver;
  /**
   * Exit a parse tree produced by `WitParser.validSemver`.
   * @param ctx the parse tree
   */
  exitValidSemver;
  /**
   * Enter a parse tree produced by `WitParser.token`.
   * @param ctx the parse tree
   */
  enterToken;
  /**
   * Exit a parse tree produced by `WitParser.token`.
   * @param ctx the parse tree
   */
  exitToken;
  /**
   * Enter a parse tree produced by `WitParser.operator`.
   * @param ctx the parse tree
   */
  enterOperator;
  /**
   * Exit a parse tree produced by `WitParser.operator`.
   * @param ctx the parse tree
   */
  exitOperator;
  /**
   * Enter a parse tree produced by `WitParser.id`.
   * @param ctx the parse tree
   */
  enterId;
  /**
   * Exit a parse tree produced by `WitParser.id`.
   * @param ctx the parse tree
   */
  exitId;
  /**
   * Enter a parse tree produced by `WitParser.keyword`.
   * @param ctx the parse tree
   */
  enterKeyword;
  /**
   * Exit a parse tree produced by `WitParser.keyword`.
   * @param ctx the parse tree
   */
  exitKeyword;
};

// src/wit/parser.ts
var MyTreeWalker = class extends WitListener {
  exitWitFile = (ctx) => {
    console.log("In WitFileRule");
  };
};
function parse(text) {
  const charStream = new $e(text);
  const lexer = new WitLexer(charStream);
  lexer.removeErrorListeners();
  const lexerErrorListener = new WITErrorListener();
  lexer.addErrorListener(lexerErrorListener);
  const tokens = new Ze(lexer);
  const parser = new WitParser(tokens);
  parser.removeErrorListeners();
  const parserErrorListener = new WITErrorListener();
  parser.addErrorListener(parserErrorListener);
  parser.buildParseTrees = true;
  try {
    const tree = parser.witFile();
    const walker = new MyTreeWalker();
    fn.DEFAULT.walk(walker, tree);
    return {
      full: true,
      tree,
      lexErrors: lexerErrorListener.errors,
      parseErrors: parserErrorListener.errors
    };
  } catch (e2) {
    console.log(e2);
    return {
      full: false,
      lexErrors: [],
      parseErrors: [],
      exception: e2
    };
  }
}

// src/wit/cst/node.ts
var witError = (filePath, e2) => ({ filePath, ...e2 });

// src/wit/grammar/WitVisitor.ts
var WitVisitor = class extends pn {
  /**
   * Visit a parse tree produced by `WitParser.witFile`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWitFile;
  /**
   * Visit a parse tree produced by `WitParser.simpleTest`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSimpleTest;
  /**
   * Visit a parse tree produced by `WitParser.nestedPackageDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNestedPackageDefinition;
  /**
   * Visit a parse tree produced by `WitParser.packageDecl`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPackageDecl;
  /**
   * Visit a parse tree produced by `WitParser.packageItems`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPackageItems;
  /**
   * Visit a parse tree produced by `WitParser.toplevelUseItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitToplevelUseItem;
  /**
   * Visit a parse tree produced by `WitParser.usePath`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUsePath;
  /**
   * Visit a parse tree produced by `WitParser.worldItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWorldItem;
  /**
   * Visit a parse tree produced by `WitParser.worldItems`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWorldItems;
  /**
   * Visit a parse tree produced by `WitParser.worldDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWorldDefinition;
  /**
   * Visit a parse tree produced by `WitParser.exportItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExportItem;
  /**
   * Visit a parse tree produced by `WitParser.importItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitImportItem;
  /**
   * Visit a parse tree produced by `WitParser.externType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternType;
  /**
   * Visit a parse tree produced by `WitParser.includeItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIncludeItem;
  /**
   * Visit a parse tree produced by `WitParser.includeNamesList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIncludeNamesList;
  /**
   * Visit a parse tree produced by `WitParser.includeNamesItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIncludeNamesItem;
  /**
   * Visit a parse tree produced by `WitParser.interfaceItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceItem;
  /**
   * Visit a parse tree produced by `WitParser.interfaceItems`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceItems;
  /**
   * Visit a parse tree produced by `WitParser.interfaceDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceDefinition;
  /**
   * Visit a parse tree produced by `WitParser.typedefItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypedefItem;
  /**
   * Visit a parse tree produced by `WitParser.funcItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFuncItem;
  /**
   * Visit a parse tree produced by `WitParser.funcType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFuncType;
  /**
   * Visit a parse tree produced by `WitParser.paramList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParamList;
  /**
   * Visit a parse tree produced by `WitParser.resultList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResultList;
  /**
   * Visit a parse tree produced by `WitParser.namedTypeList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNamedTypeList;
  /**
   * Visit a parse tree produced by `WitParser.namedType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNamedType;
  /**
   * Visit a parse tree produced by `WitParser.useItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUseItem;
  /**
   * Visit a parse tree produced by `WitParser.useNamesList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUseNamesList;
  /**
   * Visit a parse tree produced by `WitParser.useNamesItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUseNamesItem;
  /**
   * Visit a parse tree produced by `WitParser.typeItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeItem;
  /**
   * Visit a parse tree produced by `WitParser.recordItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRecordItem;
  /**
   * Visit a parse tree produced by `WitParser.recordFields`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRecordFields;
  /**
   * Visit a parse tree produced by `WitParser.recordField`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRecordField;
  /**
   * Visit a parse tree produced by `WitParser.flagsItems`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFlagsItems;
  /**
   * Visit a parse tree produced by `WitParser.flagsFields`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFlagsFields;
  /**
   * Visit a parse tree produced by `WitParser.variantItems`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariantItems;
  /**
   * Visit a parse tree produced by `WitParser.variantCases`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariantCases;
  /**
   * Visit a parse tree produced by `WitParser.variantCase`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariantCase;
  /**
   * Visit a parse tree produced by `WitParser.enumItems`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumItems;
  /**
   * Visit a parse tree produced by `WitParser.enumCases`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumCases;
  /**
   * Visit a parse tree produced by `WitParser.resourceItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResourceItem;
  /**
   * Visit a parse tree produced by `WitParser.resourceMethod`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResourceMethod;
  /**
   * Visit a parse tree produced by `WitParser.ty`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTy;
  /**
   * Visit a parse tree produced by `WitParser.tuple`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTuple;
  /**
   * Visit a parse tree produced by `WitParser.tupleList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTupleList;
  /**
   * Visit a parse tree produced by `WitParser.list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitList;
  /**
   * Visit a parse tree produced by `WitParser.option`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOption;
  /**
   * Visit a parse tree produced by `WitParser.result`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResult;
  /**
   * Visit a parse tree produced by `WitParser.handle`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitHandle;
  /**
   * Visit a parse tree produced by `WitParser.gate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGate;
  /**
   * Visit a parse tree produced by `WitParser.gateItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGateItem;
  /**
   * Visit a parse tree produced by `WitParser.unstableGate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnstableGate;
  /**
   * Visit a parse tree produced by `WitParser.sinceGate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSinceGate;
  /**
   * Visit a parse tree produced by `WitParser.deprecatedGate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeprecatedGate;
  /**
   * Visit a parse tree produced by `WitParser.featureField`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFeatureField;
  /**
   * Visit a parse tree produced by `WitParser.versionField`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVersionField;
  /**
   * Visit a parse tree produced by `WitParser.validSemver`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValidSemver;
  /**
   * Visit a parse tree produced by `WitParser.token`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitToken;
  /**
   * Visit a parse tree produced by `WitParser.operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOperator;
  /**
   * Visit a parse tree produced by `WitParser.id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitId;
  /**
   * Visit a parse tree produced by `WitParser.keyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitKeyword;
};

// src/wit/cst/scope.ts
var WitScope = class extends WitVisitor {
  constructor(label, path, text) {
    super();
    this.label = label;
    this.path = path;
    this.text = text;
  }
  _errors = [];
  _actions = [];
  _tests = [];
  types = {};
  declarations = {};
  appendError(node, message, source = "src/witcc/file.ts") {
    this._errors.push({
      ...node.createError(source, message),
      filePath: this.path
    });
  }
  ctxError(ctx, message, source = "src/witcc/file.ts") {
    let length = ctx.stop.stop - ctx.start.start + 1;
    if (length < 0) {
      length = 0;
    }
    this._errors.push({
      column: ctx.start.column,
      line: ctx.start.line,
      length,
      filePath: this.path,
      source,
      message
    });
  }
  tokError(tok, message, source = "src/witcc/file.ts") {
    let length = tok.symbol.stop - tok.symbol.start + 1;
    if (length < 0) {
      length = 0;
    }
    this._errors.push({
      column: tok.symbol.column,
      line: tok.symbol.line,
      length,
      filePath: this.path,
      source,
      message
    });
  }
  declarationErrors() {
    let retVal = [];
    for (const key in this.declarations) {
      if (this.declarations[key]?.expression?.errors) {
        retVal = [...retVal, ...this.declarations[key].expression.errors()];
      }
    }
    return retVal;
  }
  errors() {
    return [
      ...this.declarationErrors(),
      ...this._errors
    ];
  }
  hasError() {
    return this._errors.length > 0;
  }
  // actions(): WITAction[] {
  //     return this._actions;
  // }
  // hasAction(): boolean {
  //     return this._actions.length > 0;
  // }
  // tests(): Test[] {
  //     return this._tests;
  // }
  // declaration(id: string): WITDeclaration | undefined {
  //     const retVal = this.declarations[id];
  //     return retVal;
  // }
  resolve(id) {
    const idParts = id.split(".");
    let retVal = this;
    let partID = idParts.shift();
    while (partID) {
      retVal = retVal?.declaration(partID);
      partID = idParts.shift();
    }
    return retVal;
  }
  // appendDeclaration(ctx, id: string, decl: WITDeclaration) {
  //     if (this.declarations[id]) {
  //         this.ctxError(ctx, `Duplicate Symbol "${id}"`);
  //     } else {
  //         this.declarations[id] = decl;
  //     }
  // }
  resolveType(id) {
    const retVal = this.types[id];
    return retVal;
  }
  // appendType(ctx, id: string, decl: TypeDeclaration) {
  //     if (this.types[id]) {
  //         this.ctxError(ctx, `Duplicate Type "${id}"`);
  //     } else {
  //         this.types[id] = decl;
  //     }
  // }
  //  Visitor overrides  ---
  // visitTerminal(ctx) {
  //     return ctx.symbol.text;
  // }
  // visitProgram(ctx) {
  //     return super.visitProgram(ctx);
  // }
  // visitBlock(ctx) {
  //     return super.visitBlock(ctx);
  // }
  // visitArguments(ctx) {
  //     const children = super.visitArguments(ctx);
  //     return children.filter(child => !isChildToken(child))
  //         .map(child => Array.isArray(child) ? child[0] : child)
  //         ;
  // }
  // visitFunctionCallExpression(ctx) {
  //     const children = super.visitFunctionCallExpression(ctx);
  //     const [identifier, args] = children;
  //     const decl = this.resolve(identifier.id);
  //     if (decl?.type !== "function") {
  //         this.ctxError(ctx, `${identifier.id} is not a function.`);
  //     }
  //     return new FunctionCallExpression(ctx, this, identifier.id, decl?.expression as any, args);
  // }
  // visitUnaryMinusExpression(ctx) {
  //     const [, expression] = super.visitUnaryMinusExpression(ctx);
  //     if (expression.type !== "number") {
  //         this.ctxError(ctx, "Expression is not number");
  //     }
  //     return new UnaryMinusExpression(ctx, this, expression);
  // }
  // visitNotExpression(ctx) {
  //     const [, expression] = super.visitNotExpression(ctx);
  //     if (expression.type !== "boolean") {
  //         this.ctxError(ctx, "Expression is not boolean");
  //     }
  //     return new NotExpression(ctx, this, expression);
  // }
  // visitMultiplicativeExpression(ctx) {
  //     const [lhs, , rhs] = super.visitMultiplicativeExpression(ctx);
  //     if (lhs.type === "number" && rhs.type === "number") {
  //     } else {
  //         this.ctxError(ctx, "Multiplicative Expression is not valid");
  //     }
  //     return new MultiplicativeExpression(ctx, this, lhs, rhs, !!ctx.Multiply() ? "*" : !!ctx.Divide() ? "/" : !!ctx.Modulus() ? "%" : undefined);
  // }
  // visitAdditiveExpression(ctx) {
  //     const [lhs, , rhs] = super.visitAdditiveExpression(ctx);
  //     if (lhs.type === "number" && rhs.type === "number") {
  //     } else if (lhs.type === "string" && rhs.type === "string" && !!ctx.Plus()) {
  //     } else if (lhs.type === "string" && rhs.type === "number" && !!ctx.Plus()) {
  //     } else {
  //         this.ctxError(ctx, "Additive Expression is not valid");
  //     }
  //     return new AdditiveExpression(ctx, this, lhs, rhs, !!ctx.Plus() ? "+" : "-");
  // }
  // visitRelationalExpression(ctx) {
  //     const [, action] = ctx.children;
  //     const [lhs, , rhs] = super.visitRelationalExpression(ctx);
  //     if (lhs.type === "boolean" && rhs.type === "boolean" ||
  //         lhs.type === "number" && rhs.type === "number" ||
  //         lhs.type === "string" && rhs.type === "string") {
  //     } else {
  //         this.ctxError(ctx, "Relational Expression is not valid");
  //     }
  //     return new RelationalExpression(ctx, this, lhs, rhs, action.getText());
  // }
  // visitEqualityExpression(ctx) {
  //     const [lhs, , rhs] = super.visitEqualityExpression(ctx);
  //     if (lhs.type === "boolean" && rhs.type === "boolean") {
  //     } else if (lhs.type === "number" && rhs.type === "number") {
  //     } else if (lhs.type === "string" && rhs.type === "string") {
  //     } else {
  //         this.ctxError(ctx, "Equality Expression is not valid");
  //     }
  //     return new EqualityExpression(ctx, this, lhs, rhs, !!ctx.Equals() ? "==" : !!ctx.NotEquals() ? "!=" : undefined);
  // }
  // visitLogicalExpression(ctx) {
  //     const [lhs, , rhs] = super.visitLogicalExpression(ctx);
  //     if (lhs.type === "boolean" && rhs.type === "boolean") {
  //     } else {
  //         this.ctxError(ctx, "Logical Expression is not valid");
  //     }
  //     return new LogicalExpression(ctx, this, lhs, rhs, !!ctx.And() ? "&&" : !!ctx.Or() ? "||" : undefined);
  // }
  // visitIdentifierExpression(ctx) {
  //     const id = ctx.identifier().getText();
  //     const expression = this.resolve(id)?.expression;
  //     if (!expression) {
  //         this.ctxError(ctx, `Invalid identifier "${id}"`);
  //     }
  //     return new IdentifierExpression(ctx, this, id, expression);
  // }
  // visitLiteralExpression(ctx) {
  //     const children = super.visitLiteralExpression(ctx);
  //     const [retVal] = children;
  //     return retVal;
  // }
  // visitArrayLiteralExpression(ctx) {
  //     const children = super.visitArrayLiteralExpression(ctx);
  //     const [Arrayliteral, , arrType] = children;
  //     const [, literalItems] = Arrayliteral;
  //     const literals = literalItems === "]" ? [] : literalItems || [];
  //     literals.forEach(item => {
  //         if (item.type !== literals[0].type) {
  //             this.appendError(item, `All items must be type of "${literals[0].type}"`);
  //         }
  //     });
  //     const retVal = new ArrayExpression(ctx, this, literals?.filter(row => !!row));
  //     retVal.typeInfo(arrType);
  //     return retVal;
  // }
  // visitElementList(ctx) {
  //     const children = super.visitElementList(ctx);
  //     return children.filter(child => child !== ",");
  // }
  // visitBooleanLiteralExpression(ctx) {
  //     return new BooleanExpression(ctx, this, ctx.BooleanLiteral().getText() === "true");
  // }
  // visitNumberLiteralExpression(ctx) {
  //     return new NumericExpression(ctx, this, Number(ctx.DecimalLiteral().getText()));
  // }
  // visitStringLiteralExpression(ctx) {
  //     return new StringExpression(ctx, this, removeQuotes(ctx.StringLiteral().getText()));
  // }
  // visitDataLiteralExpression(ctx) {
  //     const children = super.visitDataLiteralExpression(ctx);
  //     const [[_, items], , rowType] = children;
  //     const retVal = new DataExpression(ctx, this, items);
  //     retVal.typeInfo(rowType);
  //     return retVal;
  // }
  // //  Types  ---
  // visitTypeStatement(ctx) {
  //     const [witVar] = super.visitTypeStatement(ctx);
  //     return witVar;
  // }
  // visitTypeDeclaration(ctx) {
  //     const [id] = ctx.children;
  //     const [, rhs] = super.visitTypeDeclaration(ctx);
  //     const witVar = new TypeDeclaration(ctx, this, id.getText(), rhs);
  //     this.appendType(ctx, witVar.id, witVar);
  //     return witVar;
  // }
  // visitTypeInitialiser(ctx) {
  //     const children = super.visitTypeInitialiser(ctx);
  //     const [, type] = children;
  //     return type;
  // }
  // visitBooleanType(ctx) {
  //     return ctx.OpenBracket() && ctx.CloseBracket() ? new ArrayType(ctx, this, new BooleanType(ctx, this)) : new BooleanType(ctx, this);
  // }
  // visitNumberType(ctx) {
  //     return ctx.OpenBracket() && ctx.CloseBracket() ? new ArrayType(ctx, this, new NumberType(ctx, this)) : new NumberType(ctx, this);
  // }
  // visitStringType(ctx) {
  //     return ctx.OpenBracket() && ctx.CloseBracket() ? new ArrayType(ctx, this, new StringType(ctx, this)) : new StringType(ctx, this);
  // }
  // visitRowType(ctx) {
  //     const children = super.visitRowType(ctx);
  //     const [fields, openBracket, closeBracket] = children;
  //     const rowType = new RowType(ctx, this, fields);
  //     return openBracket && closeBracket ? new ArrayType(ctx, this, rowType) : rowType;
  // }
  // visitIdentifierType(ctx) {
  //     const children = super.visitIdentifierType(ctx);
  //     const [id, openBracket, closeBracket] = children;
  //     const idType = this.resolveType(id);
  //     if (!idType) {
  //         this.ctxError(ctx, `Invalid type "${id}"`);
  //     }
  //     return openBracket && closeBracket ? new ArrayType(ctx, this, idType?.type) : idType?.type;
  // }
  // visitRowTypeDefinition(ctx) {
  //     const children = super.visitRowTypeDefinition(ctx);
  //     const [, fields] = children;
  //     return fields;
  // }
  // visitFormalFieldTypeList(ctx) {
  //     const children = super.visitFormalFieldTypeList(ctx);
  //     return children.filter(child => child !== ",");
  // }
  // visitFormalFieldType(ctx) {
  //     const children = super.visitFormalFieldType(ctx);
  //     const [type, [id]] = children;
  //     return new TypeDeclaration(ctx, this, id, type);
  // }
  // //  Declarations  ---
  // visitVariableStatement(ctx) {
  //     const [witVar] = super.visitVariableStatement(ctx);
  //     return witVar;
  // }
  // visitVariableDeclaration(ctx) {
  //     const [id] = ctx.children;
  //     const [, rhs] = super.visitVariableDeclaration(ctx);
  //     const witVar = new Declaration(ctx, this, id.getText(), rhs);
  //     this.appendDeclaration(ctx, witVar.id, witVar);
  //     return witVar;
  // }
  // visitVariableInitialiser(ctx) {
  //     const children = super.visitVariableInitialiser(ctx);
  //     const [, expression, , asType] = children;
  //     const exprType = expression?.body?.type || expression?.type;
  //     switch (exprType) {
  //         case "data":
  //             expression.typeInfo && expression.typeInfo(asType?.type);
  //             break;
  //         case "data[]":
  //             if (asType?.type && !(asType?.type instanceof ArrayType)) {
  //                 this.appendError(expression, "Expected \"typeof\" to be an Array?");
  //             }
  //             expression.typeInfo && expression.typeInfo(asType?.type);
  //             break;
  //         default:
  //             if (asType && exprType !== asType.eval()) {
  //                 this.appendError(expression, `Mismatched types "${expression.type}" typeof "${asType.eval()}"`);
  //             }
  //     }
  //     return expression;
  // }
  // visitInlineAction(ctx) {
  //     const children = super.visitInlineAction(ctx);
  //     const [retVal, _] = children;
  //     this._actions.push(retVal);
  //     return retVal;
  // }
  // visitUnitTest(ctx) {
  //     const [_0, _1, _2, _3, _4, _5, msg] = ctx.children;
  //     const children = super.visitUnitTest(ctx);
  //     const [__0, __1, actual, __3, expected] = children;
  //     const test = new Test(ctx, this, actual, expected, msg?.getText());
  //     this._tests.push(test);
  //     return test;
  // }
  // visitPipeIdentifierExpression(ctx) {
  //     return this.visitIdentifierExpression(ctx);
  // }
  // visitPipekeywordExpression(ctx) {
  //     return this.visitKeywordCallExpression(ctx);
  // }
  // //  Keywords  ---
  // visitKeywordCallExpression(ctx) {
  //     const children = super.visitKeywordCallExpression(ctx);
  //     const keyword = ctx.keyword();
  //     const [, params] = children;
  //     if (keyword.Generate()) {
  //         switch (params.length) {
  //             case 2:
  //                 if (params[0].type && params[1].type === "number") {
  //                     return new GenerateFunction(ctx, this, params[0], params[1]);
  //                 } else {
  //                     this.ctxError(ctx, `Invlid paramters, expected "any, number" got "${params[0].type}, ${params[1].type}".`);
  //                 }
  //                 break;
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 2.");
  //         }
  //     } else if (keyword.Random()) {
  //         switch (params.length) {
  //             case 0:
  //                 return new RandomFunction(ctx, this);
  //             case 2:
  //                 if (params[0].type === "number" && params[1].type === "number") {
  //                     return new RandomFunction(ctx, this, params[0], params[1]);
  //                 } else {
  //                     this.ctxError(ctx, `Invlid paramters, expected "number, number" got "${params[0].type}, ${params[1].type}".`);
  //                 }
  //                 break;
  //             case 3:
  //                 if (params[0].type === "number" && params[1].type === "number" && params[2].type === "boolean") {
  //                     return new RandomFunction(ctx, this, params[0], params[1], params[2]);
  //                 } else {
  //                     this.ctxError(ctx, `Invlid paramters, expected "number, number, boolean" got "${params[0].type}, ${params[1].type}, ${params[2].type}".`);
  //                 }
  //                 break;
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 0, 2 or 3.");
  //         }
  //     } else if (keyword.Length()) {
  //         switch (params.length) {
  //             case 1:
  //                 if (!LengthFunction.hasLength(params[0])) {
  //                     this.ctxError(ctx, "Expression does not have length");
  //                 }
  //                 return new LengthFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.ReadJson()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.type !== "string") {
  //                     this.ctxError(ctx, "Expression should resolve to a string");
  //                 }
  //                 return new ReadJsonFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.WriteJson()) {
  //         switch (params.length) {
  //             case 2:
  //                 const ref = resolveRef(params[1]);
  //                 if (ref?.type !== "string") {
  //                     this.ctxError(ctx, "Second paramater should be a string");
  //                 }
  //                 return new WriteJsonFunction(ctx, this, params[0], params[1]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 2.");
  //         }
  //     } else if (keyword.activity()?.Filter()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "boolean") {
  //                     this.ctxError(ctx, "Expression should resolve to a boolean");
  //                 }
  //                 return new FilterFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.activity()?.FirstN()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.type !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number");
  //                 }
  //                 return new FirstNFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.activity()?.Group()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "boolean" && ref?.returnType !== "number" && ref?.returnType !== "string") {
  //                     this.ctxError(ctx, "Expression should resolve to a boolean, number or string");
  //                 }
  //                 return new GroupFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.activity()?.GroupCount()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "boolean" && ref?.returnType !== "number" && ref?.returnType !== "string") {
  //                     this.ctxError(ctx, "Expression should resolve to a boolean, number or string");
  //                 }
  //                 return new GroupCountFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.activity()?.Map()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "data") {
  //                     this.ctxError(ctx, "Expression should resolve to a data");
  //                 }
  //                 return new MapFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.activity()?.Pipeline()) {
  //         if (params.length >= 1) {
  //             return new PipelineFunction(ctx, this, params);
  //         } else {
  //             this.ctxError(ctx, "Invalid number of paramaters, expected 1 or more.");
  //         }
  //     } else if (keyword.activity()?.SkipN()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.type !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number");
  //                 }
  //                 return new SkipNFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.activity()?.Sort()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number (-1, 0, 1)");
  //                 }
  //                 return new SortFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Count()) {
  //         switch (params.length) {
  //             case 0:
  //                 return new CountFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 0.");
  //         }
  //     } else if (keyword.sensor()?.Deviation()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new DeviationFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Distribution()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new DistributionFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Extent()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new ExtentFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Max()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new MaxFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Mean()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new MeanFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Median()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new MedianFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Min()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new MinFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Quartile()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new QuartileFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Reduce()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new ReduceFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else if (keyword.sensor()?.Variance()) {
  //         switch (params.length) {
  //             case 1:
  //                 const ref = resolveRef(params[0]);
  //                 if (ref?.returnType !== "number") {
  //                     this.ctxError(ctx, "Expression should resolve to a number.");
  //                 }
  //                 return new VarianceFunction(ctx, this, params[0]);
  //             default:
  //                 this.ctxError(ctx, "Invalid number of paramaters, expected 1.");
  //         }
  //     } else {
  //         this.ctxError(ctx, `Unknown keyword "${keyword.getText()}"`);
  //     }
  // }
};

// src/wit/cst/scopes/file.ts
var WITFileScope = class extends WitScope {
  constructor(label, path, text) {
    super(label, path, text);
    this.label = label;
    this.path = path;
    this.text = text;
    if (!text) {
      text = "...load from file?...";
    }
    this._parsed = parse(text);
    if (this._parsed.full) {
      try {
        this.visitWitFile(this._parsed.tree);
      } catch (e2) {
        if (!this._parsed.lexErrors.length && !this._parsed.parseErrors.length) {
          console.error(e2);
        }
      }
    }
  }
  _parsed;
  importedFiles = [];
  exports = {};
  resolveScope(line, column) {
    return this;
  }
  errors() {
    return [
      ...this._parsed.lexErrors.map((e2) => witError(this.path, e2)),
      ...this._parsed.parseErrors.map((e2) => witError(this.path, e2)),
      ...super.errors()
    ];
  }
  allErrors() {
    let retVal = this.errors();
    this.importedFiles.forEach((i2) => {
      retVal = retVal.concat(i2.file.allErrors());
    });
    return retVal;
  }
  // allActions(): WITAction[] {
  //     let retVal = this.actions();
  //     this.importedFiles.forEach(i => {
  //         retVal = retVal.concat(i.file.allActions());
  //     });
  //     return retVal;
  // }
  // allTests(): Test[] {
  //     let retVal = this.tests();
  //     this.importedFiles.forEach(i => {
  //         retVal = retVal.concat(i.file.allTests());
  //     });
  //     return retVal;
  // }
  //  Visitor overrides  ---
  // visitImportStatement(ctx) {
  //     const children = super.visitImportStatement(ctx);
  //     const [, importFrom] = children;
  //     const [_decls, file]: [{ identifier: string, as: string, ctx }[], WITFileScope] = importFrom;
  //     const decls = _decls.filter(item => typeof item !== "string");
  //     decls?.forEach(row => {
  //         const decl = file.exports[row.identifier];
  //         if (decl) {
  //             if (decl instanceof TypeDeclaration) {
  //                 if (row.as) {
  //                     this.appendType(row.ctx, row.as, new TypeAlias(row.ctx, this, row.as, decl));
  //                 } else {
  //                     this.appendType(row.ctx, row.identifier, decl);
  //                 }
  //             } else {
  //                 if (row.as) {
  //                     this.appendDeclaration(row.ctx, row.as, new Alias(row.ctx, this, row.as, decl));
  //                 } else {
  //                     this.appendDeclaration(row.ctx, row.identifier, decl);
  //                 }
  //             }
  //         } else {
  //             this.ctxError(row.ctx, `${row.identifier} not exported from ${file.path}`);
  //         }
  //     });
  //     return importFrom;
  // }
  // visitModuleItems(ctx) {
  //     const retVal = super.visitModuleItems(ctx);
  //     return retVal.filter(row => !!row);
  // }
  // visitImportDeclaration(ctx): { identifier: string, as: string, ctx } {
  //     const [id, , idAs] = ctx.children;
  //     const identifier = id.getText?.() || id.identifier().getText();
  //     const as = idAs?.identifier().getText();
  //     return { identifier, as, ctx };
  // }
  // visitImportFrom(ctx) {
  //     const [] = super.visitImportFrom(ctx);
  //     const [, impStr] = ctx.children;
  //     const str = removeQuotes(impStr.getText());
  //     const importFilePath = posix(path.join(path.dirname(this.path), str + ".ho"));
  //     if (!fs.existsSync(importFilePath)) {
  //         this.tokError(impStr, "Invalid file path");
  //     } else {
  //         //  TODO - Create Pool so File doesn't get parsed multiple times.
  //         const importHLFile = new WITFileScope(str, importFilePath);
  //         this.importedFiles.push({
  //             line: impStr.symbol.line,
  //             column: impStr.symbol.column,
  //             length: impStr.symbol.stop - impStr.symbol.start + 1,
  //             file: importHLFile
  //         });
  //         return importHLFile;
  //     }
  //     return undefined;
  // }
  // visitExportDeclaration(ctx) {
  //     const retVal = super.visitExportDeclaration(ctx);
  //     const [, witVar] = retVal;
  //     this.exports[witVar.id] = witVar;
  //     return retVal;
  // }
  // visitArrowFunctionExpression(ctx) {
  //     const f = new WITFunctionScope(this.path, ctx, this);
  //     return f;
  // }
};

// src/extension/diagnostic.ts
var vscode = __toESM(require("vscode"));
var eclDiagnosticCollection;
var diagnostic;
var WITDiagnosticCollection = class _WITDiagnosticCollection {
  _ctx;
  constructor(ctx) {
    this._ctx = ctx;
    eclDiagnosticCollection = vscode.languages.createDiagnosticCollection("wit");
    ctx.subscriptions.push(eclDiagnosticCollection);
  }
  static attach(ctx) {
    if (!diagnostic) {
      diagnostic = new _WITDiagnosticCollection(ctx);
    }
    return diagnostic;
  }
  async set(filePath, errors) {
    const fileErrors = {};
    fileErrors[filePath] = [];
    for (const e2 of errors) {
      if (!fileErrors[e2.filePath]) {
        fileErrors[e2.filePath] = [];
      }
      const uri = vscode.Uri.file(e2.filePath);
      const document = await vscode.workspace.openTextDocument(uri);
      const pos = new vscode.Position(e2.line - 1, e2.column);
      let charPos = e2.column + e2.length;
      if (charPos < 0) {
        charPos = 0;
      }
      const toPos = new vscode.Position(e2.line - 1, charPos);
      const range = new vscode.Range(pos, toPos);
      fileErrors[e2.filePath].push(new vscode.Diagnostic(range, e2.message, vscode.DiagnosticSeverity.Error));
    }
    for (const key in fileErrors) {
      const uri = vscode.Uri.file(key);
      eclDiagnosticCollection.set(uri, fileErrors[key]);
    }
  }
};

// src/extension/util.ts
var vscode2 = __toESM(require("vscode"));
var hasActiveDocument = () => !!vscode2.window.activeTextEditor?.document;
var isActiveDocumentWit = () => hasActiveDocument() && vscode2.languages.match({ language: "wit", scheme: "file" }, vscode2.window.activeTextEditor?.document) > 0;
var activeWitDocument = () => isActiveDocumentWit() ? vscode2.window.activeTextEditor?.document : void 0;

// src/extension/commands.ts
var commands2;
var WITCommands = class _WITCommands {
  _ctx;
  _diagnostic;
  constructor(ctx) {
    this._ctx = ctx;
    this._diagnostic = WITDiagnosticCollection.attach(ctx);
    ctx.subscriptions.push(vscode3.commands.registerCommand("wit.checkSyntax", () => this.checkSyntax()));
  }
  static attach(ctx) {
    if (!commands2) {
      commands2 = new _WITCommands(ctx);
    }
    return commands2;
  }
  checkTextDocument(document, config) {
    if (document) {
      const witFile = new WITFileScope(document.getText(), document.fileName, document.getText());
      commands2._diagnostic.set(document.fileName, witFile.allErrors());
    }
  }
  checkSyntax() {
    this.checkTextDocument(activeWitDocument());
  }
};

// src/extension/editor.ts
var vscode4 = __toESM(require("vscode"));
var witEditor;
var WITEditor = class _WITEditor {
  _ctx;
  constructor(ctx) {
    this._ctx = ctx;
    this.onOpenWatcher();
    this.onSaveWatcher();
  }
  static attach(ctx) {
    if (!witEditor) {
      witEditor = new _WITEditor(ctx);
    }
    return witEditor;
  }
  onOpenWatcher() {
    vscode4.workspace.onDidOpenTextDocument((document) => {
      if (document.languageId !== "wit" || this._ignoreNextSave.has(document)) {
        return;
      }
      const witConfig = vscode4.workspace.getConfiguration("wit", document.uri);
      const formatPromise = Promise.resolve();
      if (witConfig["syntaxCheckOnLoad"]) {
        formatPromise.then(() => {
          commands2?.checkTextDocument(document, witConfig);
        });
      }
    }, null, this._ctx.subscriptions);
  }
  _ignoreNextSave = /* @__PURE__ */ new WeakSet();
  onSaveWatcher() {
    vscode4.workspace.onDidSaveTextDocument((document) => {
      if (document.languageId !== "wit" || this._ignoreNextSave.has(document)) {
        return;
      }
      if (vscode4.window.activeTextEditor) {
        const witConfig = vscode4.workspace.getConfiguration("wit", document.uri);
        const formatPromise = Promise.resolve();
        if (witConfig["formatOnSave"] && vscode4.window.activeTextEditor.document === document) {
        }
        if (witConfig["syntaxCheckOnSave"]) {
          formatPromise.then(() => {
            commands2?.checkTextDocument(document, witConfig);
          });
        }
      }
    }, null, this._ctx.subscriptions);
  }
};

// src/extension/index.ts
function witActivate(ctx) {
  WITCommands.attach(ctx);
  WITEditor.attach(ctx);
}
function witDeactivate() {
}

// src/extension.ts
function activate(context) {
  witActivate(context);
}
function deactivate() {
  witDeactivate();
}
