var v = Object.defineProperty;
var y = (t, e, f) => e in t ? v(t, e, { enumerable: !0, configurable: !0, writable: !0, value: f }) : t[e] = f;
var H = (t, e, f) => (y(t, typeof e != "symbol" ? e + "" : e, f), f);
function $(t, e, f, r) {
  if (t < 1e3)
    return t;
  t = (parseFloat(t) + "").replace(/[^0-9+\-Ee.]/g, "");
  var n = isFinite(+t) ? +t : 0, l = isFinite(+e) ? Math.abs(e) : 0, c = typeof r > "u" ? "," : r, _ = typeof f > "u" ? "." : f, o = "", R = function(m, C) {
    var i = Math.pow(10, C);
    return "" + Math.round(m * i) / i;
  };
  return o = (l ? R(n, l) : "" + Math.round(n)).split("."), o[0].length > 3 && (o[0] = o[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, c)), (o[1] || "").length < l && (o[1] = o[1] || "", o[1] += new Array(l - o[1].length + 1).join("0")), o.join(_);
}
class W {
  constructor(e, f, r) {
    H(this, "units", { 0: "sqft", 1: "sqm", 2: "sqft", 4: "acres", 8: "ha" });
    this._min = this.getRound(e), this._max = this.getRound(f), this._unit = r;
  }
  getLabel(e, f) {
    return `${e} ${f > 999 ? $(f) : f} ${this.unit}`;
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
const b = "g";
function j(t, e, f, r, n) {
  try {
    return t ? t.replace(new RegExp(e, r ? b + (n || "") : ""), f || "") : "";
  } catch {
    return t;
  }
}
function T(t, e) {
  return t.toString(e);
}
function M(t) {
  return t ? t.length : 0;
}
function g(t, e) {
  return t.charCodeAt(e || 0);
}
function A(t, e, f) {
  t && t.push(e);
}
function z(t) {
  return (t + "").toLowerCase();
}
function Z(t) {
  function e(E, w) {
    return E << w | E >>> 32 - w;
  }
  function f(E) {
    var w = "", L = 7, B;
    for (L; L >= 0; L--)
      B = E >>> L * 4 & 15, w += T(B, 16);
    return w;
  }
  var r, n, l, c = new Array(80), _ = 1732584193, o = 4023233417, R = 2562383102, m = 271733878, C = 3285377520, i, a, s, u, x, p, D = 0, d = [], h;
  for (t = j(t, /\r\n/, `
`, 1), D; D < M(t); D++)
    g(t, D);
  for (h = M(t), n = 0; n < h - 3; n += 4)
    l = g(t, n) << 24 | g(t, n + 1) << 16 | g(t, n + 2) << 8 | g(t, n + 3), A(d, l);
  for (l = h % 4, A(d, l == 0 ? 2147483648 : l == 1 ? g(t, h - 1) << 24 | 8388608 : l == 2 ? g(t, h - 2) << 24 | g(t, h - 1) << 16 | 32768 : l == 3 ? g(t, h - 3) << 24 | g(t, h - 2) << 16 | g(t, h - 1) << 8 | 128 : n); M(d) % 16 != 14; )
    A(d, 0);
  for (A(d, h >>> 29), A(d, h << 3 & 4294967295), r = 0; r < M(d); r += 16) {
    for (n = 0; n < 16; n++)
      c[n] = d[r + n];
    for (n = 16; n <= 79; n++)
      c[n] = e(c[n - 3] ^ c[n - 8] ^ c[n - 14] ^ c[n - 16], 1);
    for (i = _, a = o, s = R, u = m, x = C, n = 0; n <= 19; n++)
      p = e(i, 5) + (a & s | ~a & u) + x + c[n] + 1518500249 & 4294967295, x = u, u = s, s = e(a, 30), a = i, i = p;
    for (n = 20; n <= 39; n++)
      p = e(i, 5) + (a ^ s ^ u) + x + c[n] + 1859775393 & 4294967295, x = u, u = s, s = e(a, 30), a = i, i = p;
    for (n = 40; n <= 59; n++)
      p = e(i, 5) + (a & s | a & u | s & u) + x + c[n] + 2400959708 & 4294967295, x = u, u = s, s = e(a, 30), a = i, i = p;
    for (n = 60; n <= 79; n++)
      p = e(i, 5) + (a ^ s ^ u) + x + c[n] + 3395469782 & 4294967295, x = u, u = s, s = e(a, 30), a = i, i = p;
    _ = _ + i & 4294967295, o = o + a & 4294967295, R = R + s & 4294967295, m = m + u & 4294967295, C = C + x & 4294967295;
  }
  return p = f(_) + f(o) + f(R) + f(m) + f(C), z(p);
}
const S = (t) => t.replace(/^\s+|\s+$/g, ""), q = (t, e) => {
  for (var f = 0, r = t.length; f < r && t[f] === e; )
    ++f;
  for (; r > f && t[r - 1] === e; )
    --r;
  return f > 0 || r < t.length ? t.substring(f, r) : t;
}, F = (t, e = "-") => {
  let f = t.replace(/[\'|\(|\)]/, "").replace(/[&]/, "").replace(/[']/, "").replace(/[^A-Za-z0-9-]+/g, e).replace(/[\s-]+/, e).toLowerCase();
  return f = q(f, e), f;
}, k = (t, e) => F(e) === t, V = (t, e) => F(t) === F(e), X = (t) => t.split(",").map((e) => q(e)).filter((e) => e !== ""), Y = (t) => S(t.replace(/xR0/g, "<br/>").replace(/xR1/g, "'")), G = (...t) => t.find((e) => e && S(e) !== ""), I = (t) => {
  var e = document.createElement("div");
  return e.innerHTML = t, e.innerText;
};
function J(t) {
  console.log(`hello ${t}`);
}
function K(t) {
  return t.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))", "g"), ",");
}
function N(t, e, f) {
  return t.slice((f - 1) * e, f * e);
}
function O(t) {
  return String(t).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/xR0/g, `
`).replace(/xR1/g, "'");
}
export {
  W as Size,
  X as aliasSplit,
  F as create_slug,
  Z as each_password_generator,
  Y as escapetext,
  G as fallVals,
  O as htmlEntities,
  K as numberWithCommas,
  $ as number_format,
  N as paginate,
  J as sayHello,
  k as slug_equal,
  V as slug_equal2,
  I as strip_tags,
  q as trimPhp
};
