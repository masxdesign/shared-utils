var x = Object.defineProperty;
var _ = (t, e, n) => e in t ? x(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var h = (t, e, n) => (_(t, typeof e != "symbol" ? e + "" : e, n), n);
import { default as A } from "./each_password_generator.js";
function R(t, e, n, i) {
  if (t < 1e3)
    return t;
  t = (parseFloat(t) + "").replace(/[^0-9+\-Ee.]/g, "");
  var l = isFinite(+t) ? +t : 0, a = isFinite(+e) ? Math.abs(e) : 0, c = typeof i > "u" ? "," : i, p = typeof n > "u" ? "." : n, r = "", m = function(f, d) {
    var o = Math.pow(10, d);
    return "" + Math.round(f * o) / o;
  };
  return r = (a ? m(l, a) : "" + Math.round(l)).split("."), r[0].length > 3 && (r[0] = r[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, c)), (r[1] || "").length < a && (r[1] = r[1] || "", r[1] += new Array(a - r[1].length + 1).join("0")), r.join(p);
}
class L {
  constructor(e, n, i) {
    h(this, "units", { 0: "sqft", 1: "sqm", 2: "sqft", 4: "acres", 8: "ha" });
    this._min = this.getRound(e), this._max = this.getRound(n), this._unit = i;
  }
  getLabel(e, n) {
    return `${e} ${n > 999 ? R(n) : n} ${this.unit}`;
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
const u = (t) => t.replace(/^\s+|\s+$/g, ""), g = (t, e) => {
  for (var n = 0, i = t.length; n < i && t[n] === e; )
    ++n;
  for (; i > n && t[i - 1] === e; )
    --i;
  return n > 0 || i < t.length ? t.substring(n, i) : t;
}, s = (t, e = "-") => {
  let n = t.replace(/[\'|\(|\)]/, "").replace(/[&]/, "").replace(/[']/, "").replace(/[^A-Za-z0-9-]+/g, e).replace(/[\s-]+/, e).toLowerCase();
  return n = g(n, e), n;
}, q = (t, e) => s(e) === t, w = (t, e) => s(t) === s(e), b = (t) => t.split(",").map((e) => g(e)).filter((e) => e !== ""), F = (t) => u(t.replace(/xR0/g, "<br/>").replace(/xR1/g, "'")), $ = (...t) => t.find((e) => e && u(e) !== ""), y = (t) => {
  var e = document.createElement("div");
  return e.innerHTML = t, e.innerText;
};
function S(t) {
  console.log(`hello ${t}`);
}
function v(t) {
  return t.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))", "g"), ",");
}
function D(t, e, n) {
  return t.slice((n - 1) * e, n * e);
}
function E(t) {
  return String(t).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/xR0/g, `
`).replace(/xR1/g, "'");
}
export {
  L as Size,
  b as aliasSplit,
  s as create_slug,
  A as each_password_generator,
  F as escapetext,
  $ as fallVals,
  E as htmlEntities,
  v as numberWithCommas,
  R as number_format,
  D as paginate,
  S as sayHello,
  q as slug_equal,
  w as slug_equal2,
  y as strip_tags,
  g as trimPhp
};
