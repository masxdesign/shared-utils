const n = (e) => e.replace(/^\s+|\s+$/g, ""), c = (e, t) => {
  for (var l = 0, r = e.length; l < r && e[l] === t; )
    ++l;
  for (; r > l && e[r - 1] === t; )
    --r;
  return l > 0 || r < e.length ? e.substring(l, r) : e;
}, a = (e, t = "-") => {
  let l = e.replace(/[\'|\(|\)]/, "").replace(/[&]/, "").replace(/[']/, "").replace(/[^A-Za-z0-9-]+/g, t).replace(/[\s-]+/, t).toLowerCase();
  return l = c(l, t), l;
}, s = (e, t) => a(t) === e, i = (e, t) => a(e) === a(t), o = (e) => e.split(",").map((t) => c(t)).filter((t) => t !== ""), p = (e) => n(e.replace(/xR0/g, "<br/>").replace(/xR1/g, "'")), g = (...e) => e.find((t) => t && n(t) !== ""), u = (e) => {
  var t = document.createElement("div");
  return t.innerHTML = e, t.innerText;
};
export {
  o as aliasSplit,
  a as create_slug,
  p as escapetext,
  g as fallVals,
  s as slug_equal,
  i as slug_equal2,
  u as strip_tags,
  c as trimPhp
};
