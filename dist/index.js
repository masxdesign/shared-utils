var c = Object.defineProperty;
var p = (t, e, i) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var l = (t, e, i) => (p(t, typeof e != "symbol" ? e + "" : e, i), i);
import { default as S } from "./each_password_generator.js";
import { aliasSplit as b, create_slug as w, escapetext as D, fallVals as j, slug_equal as B, slug_equal2 as E, strip_tags as k, trimPhp as z } from "./misc.js";
function d(t, e, i, a) {
  if (t < 1e3)
    return t;
  t = (parseFloat(t) + "").replace(/[^0-9+\-Ee.]/g, "");
  var s = isFinite(+t) ? +t : 0, r = isFinite(+e) ? Math.abs(e) : 0, u = typeof a > "u" ? "," : a, o = typeof i > "u" ? "." : i, n = "", g = function(f, m) {
    var h = Math.pow(10, m);
    return "" + Math.round(f * h) / h;
  };
  return n = (r ? g(s, r) : "" + Math.round(s)).split("."), n[0].length > 3 && (n[0] = n[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, u)), (n[1] || "").length < r && (n[1] = n[1] || "", n[1] += new Array(r - n[1].length + 1).join("0")), n.join(o);
}
class _ {
  constructor(e, i, a) {
    l(this, "units", { 0: "sqft", 1: "sqm", 2: "sqft", 4: "acres", 8: "ha" });
    this._min = this.getRound(e), this._max = this.getRound(i), this._unit = a;
  }
  getLabel(e, i) {
    return `${e} ${i > 999 ? d(i) : i} ${this.unit}`;
  }
  getRound(e) {
    return Math.round(e * 100) / 100;
  }
  get isDefined() {
    return Math.max(this._min, this._max) > 0;
  }
  get isRange() {
    return Math.min(this._min, this._max) > 0;
  }
  get nonRangeLabel() {
    return !this.isDefined || this.isRange ? null : this._min > 0 ? this.getLabel("min", this._min) : this.getLabel("max", this._max);
  }
  get unit() {
    return this.units[this._unit];
  }
  get size() {
    return this.isDefined ? {
      min: Math.min(this._min, this._max),
      max: Math.max(this._min, this._max),
      unit: this.unit,
      nonRangeLabel: this.nonRangeLabel
    } : null;
  }
}
function R(t) {
  console.log(`hello ${t}`);
}
function M(t) {
  return t.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))", "g"), ",");
}
function q(t, e, i) {
  return t.slice((i - 1) * e, i * e);
}
function L(t) {
  return String(t).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/xR0/g, `
`).replace(/xR1/g, "'");
}
export {
  _ as Size,
  b as aliasSplit,
  w as create_slug,
  S as each_password_generator,
  D as escapetext,
  j as fallVals,
  L as htmlEntities,
  M as numberWithCommas,
  d as number_format,
  q as paginate,
  R as sayHello,
  B as slug_equal,
  E as slug_equal2,
  k as strip_tags,
  z as trimPhp
};
