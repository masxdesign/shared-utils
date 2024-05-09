const _ = "g";
function j(r, n, A, g, f) {
  try {
    return r ? r.replace(new RegExp(n, g ? _ + (f || "") : ""), A || "") : "";
  } catch {
    return r;
  }
}
function y(r, n) {
  return r.toString(n);
}
function R(r) {
  return r ? r.length : 0;
}
function c(r, n) {
  return r.charCodeAt(n || 0);
}
function B(r, n, A) {
  r && r.push(n);
}
function L(r) {
  return (r + "").toLowerCase();
}
function P(r) {
  function n(s, h) {
    return s << h | s >>> 32 - h;
  }
  function A(s) {
    var h = "", v = 7, S;
    for (v; v >= 0; v--)
      S = s >>> v * 4 & 15, h += y(S, 16);
    return h;
  }
  var g, f, D, i = new Array(80), H = 1732584193, p = 4023233417, w = 2562383102, l = 271733878, F = 3285377520, e, t, o, x, a, C, d = 0, E = [], u;
  for (r = j(r, /\r\n/, `
`, 1), d; d < R(r); d++)
    c(r, d);
  for (u = R(r), f = 0; f < u - 3; f += 4)
    D = c(r, f) << 24 | c(r, f + 1) << 16 | c(r, f + 2) << 8 | c(r, f + 3), B(E, D);
  for (D = u % 4, B(E, D == 0 ? 2147483648 : D == 1 ? c(r, u - 1) << 24 | 8388608 : D == 2 ? c(r, u - 2) << 24 | c(r, u - 1) << 16 | 32768 : D == 3 ? c(r, u - 3) << 24 | c(r, u - 2) << 16 | c(r, u - 1) << 8 | 128 : f); R(E) % 16 != 14; )
    B(E, 0);
  for (B(E, u >>> 29), B(E, u << 3 & 4294967295), g = 0; g < R(E); g += 16) {
    for (f = 0; f < 16; f++)
      i[f] = E[g + f];
    for (f = 16; f <= 79; f++)
      i[f] = n(i[f - 3] ^ i[f - 8] ^ i[f - 14] ^ i[f - 16], 1);
    for (e = H, t = p, o = w, x = l, a = F, f = 0; f <= 19; f++)
      C = n(e, 5) + (t & o | ~t & x) + a + i[f] + 1518500249 & 4294967295, a = x, x = o, o = n(t, 30), t = e, e = C;
    for (f = 20; f <= 39; f++)
      C = n(e, 5) + (t ^ o ^ x) + a + i[f] + 1859775393 & 4294967295, a = x, x = o, o = n(t, 30), t = e, e = C;
    for (f = 40; f <= 59; f++)
      C = n(e, 5) + (t & o | t & x | o & x) + a + i[f] + 2400959708 & 4294967295, a = x, x = o, o = n(t, 30), t = e, e = C;
    for (f = 60; f <= 79; f++)
      C = n(e, 5) + (t ^ o ^ x) + a + i[f] + 3395469782 & 4294967295, a = x, x = o, o = n(t, 30), t = e, e = C;
    H = H + e & 4294967295, p = p + t & 4294967295, w = w + o & 4294967295, l = l + x & 4294967295, F = F + a & 4294967295;
  }
  return C = A(H) + A(p) + A(w) + A(l) + A(F), L(C);
}
export {
  P as default
};
