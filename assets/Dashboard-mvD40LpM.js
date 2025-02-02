import { _ as ao } from "./_plugin-vue_export-helper-x3n3nnut.js";
import {
  r as oi,
  q as lo,
  c as ct,
  a as P,
  b as xt,
  t as co,
  j as ho,
  o as ht,
} from "./index-nWkXIawp.js";
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ function dt() {}
const uo = (function () {
  let i = 0;
  return function () {
    return i++;
  };
})();
function T(i) {
  return i === null || typeof i > "u";
}
function B(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function A(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
const H = (i) => (typeof i == "number" || i instanceof Number) && isFinite(+i);
function tt(i, t) {
  return H(i) ? i : t;
}
function D(i, t) {
  return typeof i > "u" ? t : i;
}
const fo = (i, t) =>
    typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : i / t,
  hn = (i, t) =>
    typeof i == "string" && i.endsWith("%") ? (parseFloat(i) / 100) * t : +i;
function z(i, t, e) {
  if (i && typeof i.call == "function") return i.apply(e, t);
}
function F(i, t, e, s) {
  let n, o, r;
  if (B(i))
    if (((o = i.length), s)) for (n = o - 1; n >= 0; n--) t.call(e, i[n], n);
    else for (n = 0; n < o; n++) t.call(e, i[n], n);
  else if (A(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function Le(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length) return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (
      ((n = i[e]),
      (o = t[e]),
      n.datasetIndex !== o.datasetIndex || n.index !== o.index)
    )
      return !1;
  return !0;
}
function Te(i) {
  if (B(i)) return i.map(Te);
  if (A(i)) {
    const t = Object.create(null),
      e = Object.keys(i),
      s = e.length;
    let n = 0;
    for (; n < s; ++n) t[e[n]] = Te(i[e[n]]);
    return t;
  }
  return i;
}
function dn(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function go(i, t, e, s) {
  if (!dn(i)) return;
  const n = t[i],
    o = e[i];
  A(n) && A(o) ? re(n, o, s) : (t[i] = Te(o));
}
function re(i, t, e) {
  const s = B(t) ? t : [t],
    n = s.length;
  if (!A(i)) return i;
  e = e || {};
  const o = e.merger || go;
  for (let r = 0; r < n; ++r) {
    if (((t = s[r]), !A(t))) continue;
    const a = Object.keys(t);
    for (let l = 0, c = a.length; l < c; ++l) o(a[l], i, t, e);
  }
  return i;
}
function ee(i, t) {
  return re(i, t, { merger: po });
}
function po(i, t, e) {
  if (!dn(i)) return;
  const s = t[i],
    n = e[i];
  A(s) && A(n)
    ? ee(s, n)
    : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Te(n));
}
const qi = { "": (i) => i, x: (i) => i.x, y: (i) => i.y };
function wt(i, t) {
  return (qi[t] || (qi[t] = mo(t)))(i);
}
function mo(i) {
  const t = bo(i);
  return (e) => {
    for (const s of t) {
      if (s === "") break;
      e = e && e[s];
    }
    return e;
  };
}
function bo(i) {
  const t = i.split("."),
    e = [];
  let s = "";
  for (const n of t)
    (s += n),
      s.endsWith("\\") ? (s = s.slice(0, -1) + ".") : (e.push(s), (s = ""));
  return e;
}
function Li(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const it = (i) => typeof i < "u",
  Mt = (i) => typeof i == "function",
  Gi = (i, t) => {
    if (i.size !== t.size) return !1;
    for (const e of i) if (!t.has(e)) return !1;
    return !0;
  };
function xo(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const V = Math.PI,
  I = 2 * V,
  _o = I + V,
  Re = Number.POSITIVE_INFINITY,
  yo = V / 180,
  W = V / 2,
  Xt = V / 4,
  Zi = (V * 2) / 3,
  et = Math.log10,
  lt = Math.sign;
function Ji(i) {
  const t = Math.round(i);
  i = ie(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(et(i))),
    s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function vo(i) {
  const t = [],
    e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++) i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function Nt(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function ie(i, t, e) {
  return Math.abs(i - t) < e;
}
function wo(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function un(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    (o = i[s][e]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function st(i) {
  return i * (V / 180);
}
function Ti(i) {
  return i * (180 / V);
}
function Qi(i) {
  if (!H(i)) return;
  let t = 1,
    e = 0;
  for (; Math.round(i * t) / t !== i; ) (t *= 10), e++;
  return e;
}
function fn(i, t) {
  const e = t.x - i.x,
    s = t.y - i.y,
    n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * V && (o += I), { angle: o, distance: n };
}
function _i(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Mo(i, t) {
  return ((i - t + _o) % I) - V;
}
function J(i) {
  return ((i % I) + I) % I;
}
function ae(i, t, e, s) {
  const n = J(i),
    o = J(t),
    r = J(e),
    a = J(o - n),
    l = J(r - n),
    c = J(n - o),
    h = J(n - r);
  return n === o || n === r || (s && o === r) || (a > l && c < h);
}
function X(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function ko(i) {
  return X(i, -32768, 32767);
}
function pt(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Ri(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1,
    n = 0,
    o;
  for (; s - n > 1; ) (o = (n + s) >> 1), e(o) ? (n = o) : (s = o);
  return { lo: n, hi: s };
}
const mt = (i, t, e, s) =>
    Ri(i, e, s ? (n) => i[n][t] <= e : (n) => i[n][t] < e),
  So = (i, t, e) => Ri(i, e, (s) => i[s][t] >= e);
function Po(i, t, e) {
  let s = 0,
    n = i.length;
  for (; s < n && i[s] < t; ) s++;
  for (; n > s && i[n - 1] > e; ) n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const gn = ["push", "pop", "shift", "splice", "unshift"];
function Co(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    gn.forEach((e) => {
      const s = "_onData" + Li(e),
        n = i[e];
      Object.defineProperty(i, e, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const r = n.apply(this, o);
          return (
            i._chartjs.listeners.forEach((a) => {
              typeof a[s] == "function" && a[s](...o);
            }),
            r
          );
        },
      });
    });
}
function ts(i, t) {
  const e = i._chartjs;
  if (!e) return;
  const s = e.listeners,
    n = s.indexOf(t);
  n !== -1 && s.splice(n, 1),
    !(s.length > 0) &&
      (gn.forEach((o) => {
        delete i[o];
      }),
      delete i._chartjs);
}
function pn(i) {
  const t = new Set();
  let e, s;
  for (e = 0, s = i.length; e < s; ++e) t.add(i[e]);
  return t.size === s ? i : Array.from(t);
}
const mn = (function () {
  return typeof window > "u"
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function bn(i, t, e) {
  const s = e || ((r) => Array.prototype.slice.call(r));
  let n = !1,
    o = [];
  return function (...r) {
    (o = s(r)),
      n ||
        ((n = !0),
        mn.call(window, () => {
          (n = !1), i.apply(t, o);
        }));
  };
}
function Do(i, t) {
  let e;
  return function (...s) {
    return (
      t ? (clearTimeout(e), (e = setTimeout(i, t, s))) : i.apply(this, s), t
    );
  };
}
const Ei = (i) => (i === "start" ? "left" : i === "end" ? "right" : "center"),
  U = (i, t, e) => (i === "start" ? t : i === "end" ? e : (t + e) / 2),
  Ao = (i, t, e, s) =>
    i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function xn(i, t, e) {
  const s = t.length;
  let n = 0,
    o = s;
  if (i._sorted) {
    const { iScale: r, _parsed: a } = i,
      l = r.axis,
      { min: c, max: h, minDefined: d, maxDefined: u } = r.getUserBounds();
    d &&
      (n = X(
        Math.min(
          mt(a, r.axis, c).lo,
          e ? s : mt(t, l, r.getPixelForValue(c)).lo
        ),
        0,
        s - 1
      )),
      u
        ? (o =
            X(
              Math.max(
                mt(a, r.axis, h, !0).hi + 1,
                e ? 0 : mt(t, l, r.getPixelForValue(h), !0).hi + 1
              ),
              n,
              s
            ) - n)
        : (o = s - n);
  }
  return { start: n, count: o };
}
function _n(i) {
  const { xScale: t, yScale: e, _scaleRanges: s } = i,
    n = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
  if (!s) return (i._scaleRanges = n), !0;
  const o =
    s.xmin !== t.min ||
    s.xmax !== t.max ||
    s.ymin !== e.min ||
    s.ymax !== e.max;
  return Object.assign(s, n), o;
}
const xe = (i) => i === 0 || i === 1,
  es = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - t) * I) / e)),
  is = (i, t, e) => Math.pow(2, -10 * i) * Math.sin(((i - t) * I) / e) + 1,
  se = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1
        ? 0.5 * i * i * i * i * i
        : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * W) + 1,
    easeOutSine: (i) => Math.sin(i * W),
    easeInOutSine: (i) => -0.5 * (Math.cos(V * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      xe(i)
        ? i
        : i < 0.5
        ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - i * i) - 1)
        : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (xe(i) ? i : es(i, 0.075, 0.3)),
    easeOutElastic: (i) => (xe(i) ? i : is(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return xe(i)
        ? i
        : i < 0.5
        ? 0.5 * es(i * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * is(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let t = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t))
        : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
    },
    easeInBounce: (i) => 1 - se.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
        ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
        : i < 2.5 / 2.75
        ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
        : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5
        ? se.easeInBounce(i * 2) * 0.5
        : se.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ function ue(i) {
  return (i + 0.5) | 0;
}
const _t = (i, t, e) => Math.max(Math.min(i, e), t);
function Jt(i) {
  return _t(ue(i * 2.55), 0, 255);
}
function vt(i) {
  return _t(ue(i * 255), 0, 255);
}
function gt(i) {
  return _t(ue(i / 2.55) / 100, 0, 1);
}
function ss(i) {
  return _t(ue(i * 100), 0, 100);
}
const Q = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  yi = [..."0123456789ABCDEF"],
  Oo = (i) => yi[i & 15],
  Lo = (i) => yi[(i & 240) >> 4] + yi[i & 15],
  _e = (i) => (i & 240) >> 4 === (i & 15),
  To = (i) => _e(i.r) && _e(i.g) && _e(i.b) && _e(i.a);
function Ro(i) {
  var t = i.length,
    e;
  return (
    i[0] === "#" &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (Q[i[1]] * 17),
            g: 255 & (Q[i[2]] * 17),
            b: 255 & (Q[i[3]] * 17),
            a: t === 5 ? Q[i[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (Q[i[1]] << 4) | Q[i[2]],
            g: (Q[i[3]] << 4) | Q[i[4]],
            b: (Q[i[5]] << 4) | Q[i[6]],
            a: t === 9 ? (Q[i[7]] << 4) | Q[i[8]] : 255,
          })),
    e
  );
}
const Eo = (i, t) => (i < 255 ? t(i) : "");
function Fo(i) {
  var t = To(i) ? Oo : Lo;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Eo(i.a, t) : void 0;
}
const Io =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function yn(i, t, e) {
  const s = t * Math.min(e, 1 - e),
    n = (o, r = (o + i / 30) % 12) =>
      e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function zo(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) =>
    e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function Bo(i, t, e) {
  const s = yn(i, 1, 0.5);
  let n;
  for (t + e > 1 && ((n = 1 / (t + e)), (t *= n), (e *= n)), n = 0; n < 3; n++)
    (s[n] *= 1 - t - e), (s[n] += t);
  return s;
}
function Vo(i, t, e, s, n) {
  return i === n
    ? (t - e) / s + (t < e ? 6 : 0)
    : t === n
    ? (e - i) / s + 2
    : (i - t) / s + 4;
}
function Fi(i) {
  const e = i.r / 255,
    s = i.g / 255,
    n = i.b / 255,
    o = Math.max(e, s, n),
    r = Math.min(e, s, n),
    a = (o + r) / 2;
  let l, c, h;
  return (
    o !== r &&
      ((h = o - r),
      (c = a > 0.5 ? h / (2 - o - r) : h / (o + r)),
      (l = Vo(e, s, n, h, o)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function Ii(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(vt);
}
function zi(i, t, e) {
  return Ii(yn, i, t, e);
}
function Wo(i, t, e) {
  return Ii(Bo, i, t, e);
}
function No(i, t, e) {
  return Ii(zo, i, t, e);
}
function vn(i) {
  return ((i % 360) + 360) % 360;
}
function Ho(i) {
  const t = Io.exec(i);
  let e = 255,
    s;
  if (!t) return;
  t[5] !== s && (e = t[6] ? Jt(+t[5]) : vt(+t[5]));
  const n = vn(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (s = Wo(n, o, r))
      : t[1] === "hsv"
      ? (s = No(n, o, r))
      : (s = zi(n, o, r)),
    { r: s[0], g: s[1], b: s[2], a: e }
  );
}
function jo(i, t) {
  var e = Fi(i);
  (e[0] = vn(e[0] + t)), (e = zi(e)), (i.r = e[0]), (i.g = e[1]), (i.b = e[2]);
}
function $o(i) {
  if (!i) return;
  const t = Fi(i),
    e = t[0],
    s = ss(t[1]),
    n = ss(t[2]);
  return i.a < 255
    ? `hsla(${e}, ${s}%, ${n}%, ${gt(i.a)})`
    : `hsl(${e}, ${s}%, ${n}%)`;
}
const ns = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  os = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Yo() {
  const i = {},
    t = Object.keys(os),
    e = Object.keys(ns);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      (o = e[n]), (a = a.replace(o, ns[o]));
    (o = parseInt(os[r], 16)),
      (i[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  }
  return i;
}
let ye;
function Xo(i) {
  ye || ((ye = Yo()), (ye.transparent = [0, 0, 0, 0]));
  const t = ye[i.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const Uo =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ko(i) {
  const t = Uo.exec(i);
  let e = 255,
    s,
    n,
    o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? Jt(r) : _t(r * 255, 0, 255);
    }
    return (
      (s = +t[1]),
      (n = +t[3]),
      (o = +t[5]),
      (s = 255 & (t[2] ? Jt(s) : _t(s, 0, 255))),
      (n = 255 & (t[4] ? Jt(n) : _t(n, 0, 255))),
      (o = 255 & (t[6] ? Jt(o) : _t(o, 0, 255))),
      { r: s, g: n, b: o, a: e }
    );
  }
}
function qo(i) {
  return (
    i &&
    (i.a < 255
      ? `rgba(${i.r}, ${i.g}, ${i.b}, ${gt(i.a)})`
      : `rgb(${i.r}, ${i.g}, ${i.b})`)
  );
}
const ri = (i) =>
    i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055,
  Bt = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function Go(i, t, e) {
  const s = Bt(gt(i.r)),
    n = Bt(gt(i.g)),
    o = Bt(gt(i.b));
  return {
    r: vt(ri(s + e * (Bt(gt(t.r)) - s))),
    g: vt(ri(n + e * (Bt(gt(t.g)) - n))),
    b: vt(ri(o + e * (Bt(gt(t.b)) - o))),
    a: i.a + e * (t.a - i.a),
  };
}
function ve(i, t, e) {
  if (i) {
    let s = Fi(i);
    (s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1))),
      (s = zi(s)),
      (i.r = s[0]),
      (i.g = s[1]),
      (i.b = s[2]);
  }
}
function wn(i, t) {
  return i && Object.assign(t || {}, i);
}
function rs(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((t = { r: i[0], g: i[1], b: i[2], a: 255 }),
        i.length > 3 && (t.a = vt(i[3])))
      : ((t = wn(i, { r: 0, g: 0, b: 0, a: 1 })), (t.a = vt(t.a))),
    t
  );
}
function Zo(i) {
  return i.charAt(0) === "r" ? Ko(i) : Ho(i);
}
class Ee {
  constructor(t) {
    if (t instanceof Ee) return t;
    const e = typeof t;
    let s;
    e === "object"
      ? (s = rs(t))
      : e === "string" && (s = Ro(t) || Xo(t) || Zo(t)),
      (this._rgb = s),
      (this._valid = !!s);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = wn(this._rgb);
    return t && (t.a = gt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = rs(t);
  }
  rgbString() {
    return this._valid ? qo(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Fo(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? $o(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb,
        n = t.rgb;
      let o;
      const r = e === o ? 0.5 : e,
        a = 2 * r - 1,
        l = s.a - n.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (o = 1 - c),
        (s.r = 255 & (c * s.r + o * n.r + 0.5)),
        (s.g = 255 & (c * s.g + o * n.g + 0.5)),
        (s.b = 255 & (c * s.b + o * n.b + 0.5)),
        (s.a = r * s.a + (1 - r) * n.a),
        (this.rgb = s);
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = Go(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Ee(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = vt(t)), this;
  }
  clearer(t) {
    const e = this._rgb;
    return (e.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = ue(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = e), this;
  }
  opaquer(t) {
    const e = this._rgb;
    return (e.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return ve(this._rgb, 2, t), this;
  }
  darken(t) {
    return ve(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ve(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ve(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return jo(this._rgb, t), this;
  }
}
function Mn(i) {
  return new Ee(i);
}
function kn(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function as(i) {
  return kn(i) ? i : Mn(i);
}
function ai(i) {
  return kn(i) ? i : Mn(i).saturate(0.5).darken(0.1).hexString();
}
const Rt = Object.create(null),
  vi = Object.create(null);
function ne(i, t) {
  if (!t) return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = Object.create(null));
  }
  return i;
}
function li(i, t, e) {
  return typeof t == "string" ? re(ne(i, t), e) : re(ne(i, ""), t);
}
class Jo {
  constructor(t) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (e) => e.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (e, s) => ai(s.backgroundColor)),
      (this.hoverBorderColor = (e, s) => ai(s.borderColor)),
      (this.hoverColor = (e, s) => ai(s.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t);
  }
  set(t, e) {
    return li(this, t, e);
  }
  get(t) {
    return ne(this, t);
  }
  describe(t, e) {
    return li(vi, t, e);
  }
  override(t, e) {
    return li(Rt, t, e);
  }
  route(t, e, s, n) {
    const o = ne(this, t),
      r = ne(this, s),
      a = "_" + e;
    Object.defineProperties(o, {
      [a]: { value: o[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = r[n];
          return A(l) ? Object.assign({}, c, l) : D(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
}
var L = new Jo({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: { _fallback: "interaction" },
  interaction: { _scriptable: !1, _indexable: !1 },
});
function Qo(i) {
  return !i || T(i.size) || T(i.family)
    ? null
    : (i.style ? i.style + " " : "") +
        (i.weight ? i.weight + " " : "") +
        i.size +
        "px " +
        i.family;
}
function Fe(i, t, e, s, n) {
  let o = t[n];
  return (
    o || ((o = t[n] = i.measureText(n).width), e.push(n)), o > s && (s = o), s
  );
}
function tr(i, t, e, s) {
  s = s || {};
  let n = (s.data = s.data || {}),
    o = (s.garbageCollect = s.garbageCollect || []);
  s.font !== t &&
    ((n = s.data = {}), (o = s.garbageCollect = []), (s.font = t)),
    i.save(),
    (i.font = t);
  let r = 0;
  const a = e.length;
  let l, c, h, d, u;
  for (l = 0; l < a; l++)
    if (((d = e[l]), d != null && B(d) !== !0)) r = Fe(i, n, o, r, d);
    else if (B(d))
      for (c = 0, h = d.length; c < h; c++)
        (u = d[c]), u != null && !B(u) && (r = Fe(i, n, o, r, u));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++) delete n[o[l]];
    o.splice(0, f);
  }
  return r;
}
function Ct(i, t, e) {
  const s = i.currentDevicePixelRatio,
    n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function ls(i, t) {
  (t = t || i.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, i.width, i.height),
    t.restore();
}
function wi(i, t, e, s) {
  Sn(i, t, e, s, null);
}
function Sn(i, t, e, s, n) {
  let o, r, a, l, c, h;
  const d = t.pointStyle,
    u = t.rotation,
    f = t.radius;
  let g = (u || 0) * yo;
  if (
    d &&
    typeof d == "object" &&
    ((o = d.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  ) {
    i.save(),
      i.translate(e, s),
      i.rotate(g),
      i.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
      i.restore();
    return;
  }
  if (!(isNaN(f) || f <= 0)) {
    switch ((i.beginPath(), d)) {
      default:
        n ? i.ellipse(e, s, n / 2, f, 0, 0, I) : i.arc(e, s, f, 0, I),
          i.closePath();
        break;
      case "triangle":
        i.moveTo(e + Math.sin(g) * f, s - Math.cos(g) * f),
          (g += Zi),
          i.lineTo(e + Math.sin(g) * f, s - Math.cos(g) * f),
          (g += Zi),
          i.lineTo(e + Math.sin(g) * f, s - Math.cos(g) * f),
          i.closePath();
        break;
      case "rectRounded":
        (c = f * 0.516),
          (l = f - c),
          (r = Math.cos(g + Xt) * l),
          (a = Math.sin(g + Xt) * l),
          i.arc(e - r, s - a, c, g - V, g - W),
          i.arc(e + a, s - r, c, g - W, g),
          i.arc(e + r, s + a, c, g, g + W),
          i.arc(e - a, s + r, c, g + W, g + V),
          i.closePath();
        break;
      case "rect":
        if (!u) {
          (l = Math.SQRT1_2 * f),
            (h = n ? n / 2 : l),
            i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        g += Xt;
      case "rectRot":
        (r = Math.cos(g) * f),
          (a = Math.sin(g) * f),
          i.moveTo(e - r, s - a),
          i.lineTo(e + a, s - r),
          i.lineTo(e + r, s + a),
          i.lineTo(e - a, s + r),
          i.closePath();
        break;
      case "crossRot":
        g += Xt;
      case "cross":
        (r = Math.cos(g) * f),
          (a = Math.sin(g) * f),
          i.moveTo(e - r, s - a),
          i.lineTo(e + r, s + a),
          i.moveTo(e + a, s - r),
          i.lineTo(e - a, s + r);
        break;
      case "star":
        (r = Math.cos(g) * f),
          (a = Math.sin(g) * f),
          i.moveTo(e - r, s - a),
          i.lineTo(e + r, s + a),
          i.moveTo(e + a, s - r),
          i.lineTo(e - a, s + r),
          (g += Xt),
          (r = Math.cos(g) * f),
          (a = Math.sin(g) * f),
          i.moveTo(e - r, s - a),
          i.lineTo(e + r, s + a),
          i.moveTo(e + a, s - r),
          i.lineTo(e - a, s + r);
        break;
      case "line":
        (r = n ? n / 2 : Math.cos(g) * f),
          (a = Math.sin(g) * f),
          i.moveTo(e - r, s - a),
          i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(g) * f, s + Math.sin(g) * f);
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function le(i, t, e) {
  return (
    (e = e || 0.5),
    !t ||
      (i &&
        i.x > t.left - e &&
        i.x < t.right + e &&
        i.y > t.top - e &&
        i.y < t.bottom + e)
  );
}
function Ne(i, t) {
  i.save(),
    i.beginPath(),
    i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    i.clip();
}
function He(i) {
  i.restore();
}
function er(i, t, e, s, n) {
  if (!t) return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else (n === "after") != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function ir(i, t, e, s) {
  if (!t) return i.lineTo(e.x, e.y);
  i.bezierCurveTo(
    s ? t.cp1x : t.cp2x,
    s ? t.cp1y : t.cp2y,
    s ? e.cp2x : e.cp1x,
    s ? e.cp2y : e.cp1y,
    e.x,
    e.y
  );
}
function Et(i, t, e, s, n, o = {}) {
  const r = B(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, sr(i, o), l = 0; l < r.length; ++l)
    (c = r[l]),
      a &&
        (o.strokeColor && (i.strokeStyle = o.strokeColor),
        T(o.strokeWidth) || (i.lineWidth = o.strokeWidth),
        i.strokeText(c, e, s, o.maxWidth)),
      i.fillText(c, e, s, o.maxWidth),
      nr(i, e, s, c, o),
      (s += n.lineHeight);
  i.restore();
}
function sr(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]),
    T(t.rotation) || i.rotate(t.rotation),
    t.color && (i.fillStyle = t.color),
    t.textAlign && (i.textAlign = t.textAlign),
    t.textBaseline && (i.textBaseline = t.textBaseline);
}
function nr(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s),
      r = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = e - o.actualBoundingBoxAscent,
      c = e + o.actualBoundingBoxDescent,
      h = n.strikethrough ? (l + c) / 2 : c;
    (i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = n.decorationWidth || 2),
      i.moveTo(r, h),
      i.lineTo(a, h),
      i.stroke();
  }
}
function ce(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, -W, V, !0),
    i.lineTo(e, s + o - r.bottomLeft),
    i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, V, W, !0),
    i.lineTo(e + n - r.bottomRight, s + o),
    i.arc(
      e + n - r.bottomRight,
      s + o - r.bottomRight,
      r.bottomRight,
      W,
      0,
      !0
    ),
    i.lineTo(e + n, s + r.topRight),
    i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -W, !0),
    i.lineTo(e + r.topLeft, s);
}
const or = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
  rr = new RegExp(
    /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
  );
function ar(i, t) {
  const e = ("" + i).match(or);
  if (!e || e[1] === "normal") return t * 1.2;
  switch (((i = +e[2]), e[3])) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const lr = (i) => +i || 0;
function Bi(i, t) {
  const e = {},
    s = A(t),
    n = s ? Object.keys(t) : t,
    o = A(i) ? (s ? (r) => D(i[r], i[t[r]]) : (r) => i[r]) : () => i;
  for (const r of n) e[r] = lr(o(r));
  return e;
}
function Pn(i) {
  return Bi(i, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Lt(i) {
  return Bi(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function q(i) {
  const t = Pn(i);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function Y(i, t) {
  (i = i || {}), (t = t || L.font);
  let e = D(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = D(i.style, t.style);
  s &&
    !("" + s).match(rr) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = ""));
  const n = {
    family: D(i.family, t.family),
    lineHeight: ar(D(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: D(i.weight, t.weight),
    string: "",
  };
  return (n.string = Qo(n)), n;
}
function Qt(i, t, e, s) {
  let n = !0,
    o,
    r,
    a;
  for (o = 0, r = i.length; o < r; ++o)
    if (
      ((a = i[o]),
      a !== void 0 &&
        (t !== void 0 && typeof a == "function" && ((a = a(t)), (n = !1)),
        e !== void 0 && B(a) && ((a = a[e % a.length]), (n = !1)),
        a !== void 0))
    )
      return s && !n && (s.cacheable = !1), a;
}
function cr(i, t, e) {
  const { min: s, max: n } = i,
    o = hn(t, (n - s) / 2),
    r = (a, l) => (e && a === 0 ? 0 : a + l);
  return { min: r(s, -Math.abs(o)), max: r(n, o) };
}
function kt(i, t) {
  return Object.assign(Object.create(i), t);
}
function Vi(i, t = [""], e = i, s, n = () => i[0]) {
  it(s) || (s = On("_fallback", i));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: e,
    _fallback: s,
    _getTarget: n,
    override: (r) => Vi([r, ...i], t, e, s),
  };
  return new Proxy(o, {
    deleteProperty(r, a) {
      return delete r[a], delete r._keys, delete i[0][a], !0;
    },
    get(r, a) {
      return Dn(r, a, () => br(a, t, i, r));
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(r, a) {
      return hs(r).includes(a);
    },
    ownKeys(r) {
      return hs(r);
    },
    set(r, a, l) {
      const c = r._storage || (r._storage = n());
      return (r[a] = c[a] = l), delete r._keys, !0;
    },
  });
}
function Ht(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: Cn(i, s),
    setContext: (o) => Ht(i, o, e, s),
    override: (o) => Ht(i.override(o), t, e, s),
  };
  return new Proxy(n, {
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    get(o, r, a) {
      return Dn(o, r, () => dr(o, r, a));
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys
        ? Reflect.has(i, r)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(o, r) {
      return Reflect.has(i, r);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(o, r, a) {
      return (i[r] = a), delete o[r], !0;
    },
  });
}
function Cn(i, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: e = t.scriptable,
    _indexable: s = t.indexable,
    _allKeys: n = t.allKeys,
  } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: Mt(e) ? e : () => e,
    isIndexable: Mt(s) ? s : () => s,
  };
}
const hr = (i, t) => (i ? i + Li(t) : t),
  Wi = (i, t) =>
    A(t) &&
    i !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Dn(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
  const s = e();
  return (i[t] = s), s;
}
function dr(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return (
    Mt(a) && r.isScriptable(t) && (a = ur(t, a, i, e)),
    B(a) && a.length && (a = fr(t, a, i, r.isIndexable)),
    Wi(t, a) && (a = Ht(a, n, o && o[t], r)),
    a
  );
}
function ur(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + i
    );
  return (
    a.add(i),
    (t = t(o, r || s)),
    a.delete(i),
    Wi(i, t) && (t = Ni(n._scopes, n, i, t)),
    t
  );
}
function fr(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (it(o.index) && s(i)) t = t[o.index % t.length];
  else if (A(t[0])) {
    const l = t,
      c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = Ni(c, n, i, h);
      t.push(Ht(d, o, r && r[i], a));
    }
  }
  return t;
}
function An(i, t, e) {
  return Mt(i) ? i(t, e) : i;
}
const gr = (i, t) => (i === !0 ? t : typeof i == "string" ? wt(t, i) : void 0);
function pr(i, t, e, s, n) {
  for (const o of t) {
    const r = gr(e, o);
    if (r) {
      i.add(r);
      const a = An(r._fallback, e, n);
      if (it(a) && a !== e && a !== s) return a;
    } else if (r === !1 && it(s) && e !== s) return null;
  }
  return !1;
}
function Ni(i, t, e, s) {
  const n = t._rootScopes,
    o = An(t._fallback, e, s),
    r = [...i, ...n],
    a = new Set();
  a.add(s);
  let l = cs(a, r, e, o || e, s);
  return l === null ||
    (it(o) && o !== e && ((l = cs(a, r, o, l, s)), l === null))
    ? !1
    : Vi(Array.from(a), [""], n, o, () => mr(t, e, s));
}
function cs(i, t, e, s, n) {
  for (; e; ) e = pr(i, t, e, s, n);
  return e;
}
function mr(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return B(n) && A(e) ? e : n;
}
function br(i, t, e, s) {
  let n;
  for (const o of t)
    if (((n = On(hr(o, i), e)), it(n))) return Wi(i, n) ? Ni(e, s, i, n) : n;
}
function On(i, t) {
  for (const e of t) {
    if (!e) continue;
    const s = e[i];
    if (it(s)) return s;
  }
}
function hs(i) {
  let t = i._keys;
  return t || (t = i._keys = xr(i._scopes)), t;
}
function xr(i) {
  const t = new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_"))) t.add(s);
  return Array.from(t);
}
function Ln(i, t, e, s) {
  const { iScale: n } = i,
    { key: o = "r" } = this._parsing,
    r = new Array(s);
  let a, l, c, h;
  for (a = 0, l = s; a < l; ++a)
    (c = a + e), (h = t[c]), (r[a] = { r: n.parse(wt(h, o), c) });
  return r;
}
const _r = Number.EPSILON || 1e-14,
  jt = (i, t) => t < i.length && !i[t].skip && i[t],
  Tn = (i) => (i === "x" ? "y" : "x");
function yr(i, t, e, s) {
  const n = i.skip ? t : i,
    o = t,
    r = e.skip ? t : e,
    a = _i(o, n),
    l = _i(r, o);
  let c = a / (a + l),
    h = l / (a + l);
  (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
  const d = s * c,
    u = s * h;
  return {
    previous: { x: o.x - d * (r.x - n.x), y: o.y - d * (r.y - n.y) },
    next: { x: o.x + u * (r.x - n.x), y: o.y + u * (r.y - n.y) },
  };
}
function vr(i, t, e) {
  const s = i.length;
  let n,
    o,
    r,
    a,
    l,
    c = jt(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (((l = c), (c = jt(i, h + 1)), !(!l || !c))) {
      if (ie(t[h], 0, _r)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      (n = e[h] / t[h]),
        (o = e[h + 1] / t[h]),
        (a = Math.pow(n, 2) + Math.pow(o, 2)),
        !(a <= 9) &&
          ((r = 3 / Math.sqrt(a)),
          (e[h] = n * r * t[h]),
          (e[h + 1] = o * r * t[h]));
    }
}
function wr(i, t, e = "x") {
  const s = Tn(e),
    n = i.length;
  let o,
    r,
    a,
    l = jt(i, 0);
  for (let c = 0; c < n; ++c) {
    if (((r = a), (a = l), (l = jt(i, c + 1)), !a)) continue;
    const h = a[e],
      d = a[s];
    r &&
      ((o = (h - r[e]) / 3),
      (a[`cp1${e}`] = h - o),
      (a[`cp1${s}`] = d - o * t[c])),
      l &&
        ((o = (l[e] - h) / 3),
        (a[`cp2${e}`] = h + o),
        (a[`cp2${s}`] = d + o * t[c]));
  }
}
function Mr(i, t = "x") {
  const e = Tn(t),
    s = i.length,
    n = Array(s).fill(0),
    o = Array(s);
  let r,
    a,
    l,
    c = jt(i, 0);
  for (r = 0; r < s; ++r)
    if (((a = l), (l = c), (c = jt(i, r + 1)), !!l)) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a
        ? c
          ? lt(n[r - 1]) !== lt(n[r])
            ? 0
            : (n[r - 1] + n[r]) / 2
          : n[r - 1]
        : n[r];
    }
  vr(i, n, o), wr(i, o, t);
}
function we(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function kr(i, t) {
  let e,
    s,
    n,
    o,
    r,
    a = le(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    (r = o),
      (o = a),
      (a = e < s - 1 && le(i[e + 1], t)),
      o &&
        ((n = i[e]),
        r &&
          ((n.cp1x = we(n.cp1x, t.left, t.right)),
          (n.cp1y = we(n.cp1y, t.top, t.bottom))),
        a &&
          ((n.cp2x = we(n.cp2x, t.left, t.right)),
          (n.cp2y = we(n.cp2y, t.top, t.bottom))));
}
function Sr(i, t, e, s, n) {
  let o, r, a, l;
  if (
    (t.spanGaps && (i = i.filter((c) => !c.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    Mr(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      (a = i[o]),
        (l = yr(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  t.capBezierPoints && kr(i, e);
}
function Rn() {
  return typeof window < "u" && typeof document < "u";
}
function Hi(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Ie(i, t, e) {
  let s;
  return (
    typeof i == "string"
      ? ((s = parseInt(i, 10)),
        i.indexOf("%") !== -1 && (s = (s / 100) * t.parentNode[e]))
      : (s = i),
    s
  );
}
const je = (i) => window.getComputedStyle(i, null);
function Pr(i, t) {
  return je(i).getPropertyValue(t);
}
const Cr = ["top", "right", "bottom", "left"];
function Tt(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = Cr[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
}
const Dr = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Ar(i, t) {
  const e = i.touches,
    s = e && e.length ? e[0] : i,
    { offsetX: n, offsetY: o } = s;
  let r = !1,
    a,
    l;
  if (Dr(n, o, i.target)) (a = n), (l = o);
  else {
    const c = t.getBoundingClientRect();
    (a = s.clientX - c.left), (l = s.clientY - c.top), (r = !0);
  }
  return { x: a, y: l, box: r };
}
function At(i, t) {
  if ("native" in i) return i;
  const { canvas: e, currentDevicePixelRatio: s } = t,
    n = je(e),
    o = n.boxSizing === "border-box",
    r = Tt(n, "padding"),
    a = Tt(n, "border", "width"),
    { x: l, y: c, box: h } = Ar(i, e),
    d = r.left + (h && a.left),
    u = r.top + (h && a.top);
  let { width: f, height: g } = t;
  return (
    o && ((f -= r.width + a.width), (g -= r.height + a.height)),
    {
      x: Math.round((((l - d) / f) * e.width) / s),
      y: Math.round((((c - u) / g) * e.height) / s),
    }
  );
}
function Or(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = Hi(i);
    if (!o) (t = i.clientWidth), (e = i.clientHeight);
    else {
      const r = o.getBoundingClientRect(),
        a = je(o),
        l = Tt(a, "border", "width"),
        c = Tt(a, "padding");
      (t = r.width - c.width - l.width),
        (e = r.height - c.height - l.height),
        (s = Ie(a.maxWidth, o, "clientWidth")),
        (n = Ie(a.maxHeight, o, "clientHeight"));
    }
  }
  return { width: t, height: e, maxWidth: s || Re, maxHeight: n || Re };
}
const ci = (i) => Math.round(i * 10) / 10;
function Lr(i, t, e, s) {
  const n = je(i),
    o = Tt(n, "margin"),
    r = Ie(n.maxWidth, i, "clientWidth") || Re,
    a = Ie(n.maxHeight, i, "clientHeight") || Re,
    l = Or(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const d = Tt(n, "border", "width"),
      u = Tt(n, "padding");
    (c -= u.width + d.width), (h -= u.height + d.height);
  }
  return (
    (c = Math.max(0, c - o.width)),
    (h = Math.max(0, s ? Math.floor(c / s) : h - o.height)),
    (c = ci(Math.min(c, r, l.maxWidth))),
    (h = ci(Math.min(h, a, l.maxHeight))),
    c && !h && (h = ci(c / 2)),
    { width: c, height: h }
  );
}
function ds(i, t, e) {
  const s = t || 1,
    n = Math.floor(i.height * s),
    o = Math.floor(i.width * s);
  (i.height = n / s), (i.width = o / s);
  const r = i.canvas;
  return (
    r.style &&
      (e || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${i.height}px`), (r.style.width = `${i.width}px`)),
    i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o
      ? ((i.currentDevicePixelRatio = s),
        (r.height = n),
        (r.width = o),
        i.ctx.setTransform(s, 0, 0, s, 0, 0),
        !0)
      : !1
  );
}
const Tr = (function () {
  let i = !1;
  try {
    const t = {
      get passive() {
        return (i = !0), !1;
      },
    };
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t);
  } catch {}
  return i;
})();
function us(i, t) {
  const e = Pr(i, t),
    s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Ot(i, t, e, s) {
  return { x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) };
}
function Rr(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y:
      s === "middle"
        ? e < 0.5
          ? i.y
          : t.y
        : s === "after"
        ? e < 1
          ? i.y
          : t.y
        : e > 0
        ? t.y
        : i.y,
  };
}
function Er(i, t, e, s) {
  const n = { x: i.cp2x, y: i.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    r = Ot(i, n, e),
    a = Ot(n, o, e),
    l = Ot(o, t, e),
    c = Ot(r, a, e),
    h = Ot(a, l, e);
  return Ot(c, h, e);
}
const fs = new Map();
function Fr(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = fs.get(e);
  return s || ((s = new Intl.NumberFormat(i, t)), fs.set(e, s)), s;
}
function fe(i, t, e) {
  return Fr(t, e).format(i);
}
const Ir = function (i, t) {
    return {
      x(e) {
        return i + i + t - e;
      },
      setWidth(e) {
        t = e;
      },
      textAlign(e) {
        return e === "center" ? e : e === "right" ? "left" : "right";
      },
      xPlus(e, s) {
        return e - s;
      },
      leftForLtr(e, s) {
        return e - s;
      },
    };
  },
  zr = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, t) {
        return i + t;
      },
      leftForLtr(i, t) {
        return i;
      },
    };
  };
function Wt(i, t, e) {
  return i ? Ir(t, e) : zr();
}
function En(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") &&
    ((e = i.canvas.style),
    (s = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")]),
    e.setProperty("direction", t, "important"),
    (i.prevTextDirection = s));
}
function Fn(i, t) {
  t !== void 0 &&
    (delete i.prevTextDirection,
    i.canvas.style.setProperty("direction", t[0], t[1]));
}
function In(i) {
  return i === "angle"
    ? { between: ae, compare: Mo, normalize: J }
    : { between: pt, compare: (t, e) => t - e, normalize: (t) => t };
}
function gs({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n,
  };
}
function Br(i, t, e) {
  const { property: s, start: n, end: o } = e,
    { between: r, normalize: a } = In(s),
    l = t.length;
  let { start: c, end: h, loop: d } = i,
    u,
    f;
  if (d) {
    for (c += l, h += l, u = 0, f = l; u < f && r(a(t[c % l][s]), n, o); ++u)
      c--, h--;
    (c %= l), (h %= l);
  }
  return h < c && (h += l), { start: c, end: h, loop: d, style: i.style };
}
function zn(i, t, e) {
  if (!e) return [i];
  const { property: s, start: n, end: o } = e,
    r = t.length,
    { compare: a, between: l, normalize: c } = In(s),
    { start: h, end: d, loop: u, style: f } = Br(i, t, e),
    g = [];
  let p = !1,
    m = null,
    b,
    x,
    v;
  const y = () => l(n, v, b) && a(n, v) !== 0,
    _ = () => a(o, b) === 0 || l(o, v, b),
    w = () => p || y(),
    M = () => !p || _();
  for (let S = h, k = h; S <= d; ++S)
    (x = t[S % r]),
      !x.skip &&
        ((b = c(x[s])),
        b !== v &&
          ((p = l(b, n, o)),
          m === null && w() && (m = a(b, n) === 0 ? S : k),
          m !== null &&
            M() &&
            (g.push(gs({ start: m, end: S, loop: u, count: r, style: f })),
            (m = null)),
          (k = S),
          (v = b)));
  return (
    m !== null && g.push(gs({ start: m, end: d, loop: u, count: r, style: f })),
    g
  );
}
function Bn(i, t) {
  const e = [],
    s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = zn(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Vr(i, t, e, s) {
  let n = 0,
    o = t - 1;
  if (e && !s) for (; n < t && !i[n].skip; ) n++;
  for (; n < t && i[n].skip; ) n++;
  for (n %= t, e && (o += n); o > n && i[o % t].skip; ) o--;
  return (o %= t), { start: n, end: o };
}
function Wr(i, t, e, s) {
  const n = i.length,
    o = [];
  let r = t,
    a = i[t],
    l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % n];
    c.skip || c.stop
      ? a.skip ||
        ((s = !1),
        o.push({ start: t % n, end: (l - 1) % n, loop: s }),
        (t = r = c.stop ? l : null))
      : ((r = l), a.skip && (t = l)),
      (a = c);
  }
  return r !== null && o.push({ start: t % n, end: r % n, loop: s }), o;
}
function Nr(i, t) {
  const e = i.points,
    s = i.options.spanGaps,
    n = e.length;
  if (!n) return [];
  const o = !!i._loop,
    { start: r, end: a } = Vr(e, n, o, s);
  if (s === !0) return ps(i, [{ start: r, end: a, loop: o }], e, t);
  const l = a < r ? a + n : a,
    c = !!i._fullLoop && r === 0 && a === n - 1;
  return ps(i, Wr(e, r, l, c), e, t);
}
function ps(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Hr(i, t, e, s);
}
function Hr(i, t, e, s) {
  const n = i._chart.getContext(),
    o = ms(i.options),
    {
      _datasetIndex: r,
      options: { spanGaps: a },
    } = i,
    l = e.length,
    c = [];
  let h = o,
    d = t[0].start,
    u = d;
  function f(g, p, m, b) {
    const x = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; ) g -= x;
      for (; e[p % l].skip; ) p += x;
      g % l !== p % l &&
        (c.push({ start: g % l, end: p % l, loop: m, style: b }),
        (h = b),
        (d = p % l));
    }
  }
  for (const g of t) {
    d = a ? d : g.start;
    let p = e[d % l],
      m;
    for (u = d + 1; u <= g.end; u++) {
      const b = e[u % l];
      (m = ms(
        s.setContext(
          kt(n, {
            type: "segment",
            p0: p,
            p1: b,
            p0DataIndex: (u - 1) % l,
            p1DataIndex: u % l,
            datasetIndex: r,
          })
        )
      )),
        jr(m, h) && f(d, u - 1, g.loop, h),
        (p = b),
        (h = m);
    }
    d < u - 1 && f(d, u - 1, g.loop, h);
  }
  return c;
}
function ms(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function jr(i, t) {
  return t && JSON.stringify(i) !== JSON.stringify(t);
}
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ class $r {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, e, s, n) {
    const o = e.listeners[n],
      r = e.duration;
    o.forEach((a) =>
      a({
        chart: t,
        initial: e.initial,
        numSteps: r,
        currentStep: Math.min(s - e.start, r),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = mn.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length) return;
      const o = s.items;
      let r = o.length - 1,
        a = !1,
        l;
      for (; r >= 0; --r)
        (l = o[r]),
          l._active
            ? (l._total > s.duration && (s.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((o[r] = o[o.length - 1]), o.pop());
      a && (n.draw(), this._notify(n, s, t, "progress")),
        o.length ||
          ((s.running = !1),
          this._notify(n, s, t, "complete"),
          (s.initial = !1)),
        (e += o.length);
    }),
      (this._lastDate = t),
      e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return (
      s ||
        ((s = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        e.set(t, s)),
      s
    );
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const s = e.items;
    let n = s.length - 1;
    for (; n >= 0; --n) s[n].cancel();
    (e.items = []), this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var ut = new $r();
const bs = "transparent",
  Yr = {
    boolean(i, t, e) {
      return e > 0.5 ? t : i;
    },
    color(i, t, e) {
      const s = as(i || bs),
        n = s.valid && as(t || bs);
      return n && n.valid ? n.mix(s, e).hexString() : t;
    },
    number(i, t, e) {
      return i + (t - i) * e;
    },
  };
class Xr {
  constructor(t, e, s, n) {
    const o = e[s];
    n = Qt([t.to, n, o, t.from]);
    const r = Qt([t.from, o, n]);
    (this._active = !0),
      (this._fn = t.fn || Yr[t.type || typeof r]),
      (this._easing = se[t.easing] || se.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = s),
      (this._from = r),
      (this._to = n),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop],
        o = s - this._start,
        r = this._duration - o;
      (this._start = s),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = Qt([t.to, e, n, t.from])),
        (this._from = Qt([t.from, n, e]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      s = this._duration,
      n = this._prop,
      o = this._from,
      r = this._loop,
      a = this._to;
    let l;
    if (((this._active = o !== a && (r || e < s)), !this._active)) {
      (this._target[n] = a), this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    (l = (e / s) % 2),
      (l = r && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[n] = this._fn(o, a, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({ res: e, rej: s });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej",
      s = this._promises || [];
    for (let n = 0; n < s.length; n++) s[n][e]();
  }
}
const Ur = ["x", "y", "borderWidth", "radius", "tension"],
  Kr = ["color", "borderColor", "backgroundColor"];
L.set("animation", {
  delay: void 0,
  duration: 1e3,
  easing: "easeOutQuart",
  fn: void 0,
  from: void 0,
  loop: void 0,
  to: void 0,
  type: void 0,
});
const qr = Object.keys(L.animation);
L.describe("animation", {
  _fallback: !1,
  _indexable: !1,
  _scriptable: (i) => i !== "onProgress" && i !== "onComplete" && i !== "fn",
});
L.set("animations", {
  colors: { type: "color", properties: Kr },
  numbers: { type: "number", properties: Ur },
});
L.describe("animations", { _fallback: "animation" });
L.set("transitions", {
  active: { animation: { duration: 400 } },
  resize: { animation: { duration: 0 } },
  show: {
    animations: {
      colors: { from: "transparent" },
      visible: { type: "boolean", duration: 0 },
    },
  },
  hide: {
    animations: {
      colors: { to: "transparent" },
      visible: { type: "boolean", easing: "linear", fn: (i) => i | 0 },
    },
  },
});
class Vn {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!A(t)) return;
    const e = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const n = t[s];
      if (!A(n)) return;
      const o = {};
      for (const r of qr) o[r] = n[r];
      ((B(n.properties) && n.properties) || [s]).forEach((r) => {
        (r === s || !e.has(r)) && e.set(r, o);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options,
      n = Zr(t, s);
    if (!n) return [];
    const o = this._createAnimations(n, s);
    return (
      s.$shared &&
        Gr(t.options.$animations, s).then(
          () => {
            t.options = s;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, e) {
    const s = this._properties,
      n = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(e),
      a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let d = o[c];
      const u = s.get(c);
      if (d)
        if (u && d.active()) {
          d.update(u, h, a);
          continue;
        } else d.cancel();
      if (!u || !u.duration) {
        t[c] = h;
        continue;
      }
      (o[c] = d = new Xr(u, t, c, h)), n.push(d);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length) return ut.add(this._chart, s), !0;
  }
}
function Gr(i, t) {
  const e = [],
    s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Zr(i, t) {
  if (!t) return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return (
    e.$shared &&
      (i.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })),
    e
  );
}
function xs(i, t) {
  const e = (i && i.options) || {},
    s = e.reverse,
    n = e.min === void 0 ? t : 0,
    o = e.max === void 0 ? t : 0;
  return { start: s ? o : n, end: s ? n : o };
}
function Jr(i, t, e) {
  if (e === !1) return !1;
  const s = xs(i, e),
    n = xs(t, e);
  return { top: n.end, right: s.end, bottom: n.start, left: s.start };
}
function Qr(i) {
  let t, e, s, n;
  return (
    A(i)
      ? ((t = i.top), (e = i.right), (s = i.bottom), (n = i.left))
      : (t = e = s = n = i),
    { top: t, right: e, bottom: s, left: n, disabled: i === !1 }
  );
}
function Wn(i, t) {
  const e = [],
    s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n) e.push(s[n].index);
  return e;
}
function _s(i, t, e, s = {}) {
  const n = i.keys,
    o = s.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = n.length; r < a; ++r) {
      if (((l = +n[r]), l === e)) {
        if (s.all) continue;
        break;
      }
      (c = i.values[l]), H(c) && (o || t === 0 || lt(t) === lt(c)) && (t += c);
    }
    return t;
  }
}
function ta(i) {
  const t = Object.keys(i),
    e = new Array(t.length);
  let s, n, o;
  for (s = 0, n = t.length; s < n; ++s) (o = t[s]), (e[s] = { x: o, y: i[o] });
  return e;
}
function ys(i, t) {
  const e = i && i.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function ea(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function ia(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY,
  };
}
function sa(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function vs(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if ((e && o > 0) || (!e && o < 0)) return n.index;
  }
  return null;
}
function ws(i, t) {
  const { chart: e, _cachedMeta: s } = i,
    n = e._stacks || (e._stacks = {}),
    { iScale: o, vScale: r, index: a } = s,
    l = o.axis,
    c = r.axis,
    h = ea(o, r, s),
    d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const g = t[f],
      { [l]: p, [c]: m } = g,
      b = g._stacks || (g._stacks = {});
    (u = b[c] = sa(n, h, p)),
      (u[a] = m),
      (u._top = vs(u, r, !0, s.type)),
      (u._bottom = vs(u, r, !1, s.type));
  }
}
function hi(i, t) {
  const e = i.scales;
  return Object.keys(e)
    .filter((s) => e[s].axis === t)
    .shift();
}
function na(i, t) {
  return kt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function oa(i, t, e) {
  return kt(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data",
  });
}
function Ut(i, t) {
  const e = i.controller.index,
    s = i.vScale && i.vScale.axis;
  if (s) {
    t = t || i._parsed;
    for (const n of t) {
      const o = n._stacks;
      if (!o || o[s] === void 0 || o[s][e] === void 0) return;
      delete o[s][e];
    }
  }
}
const di = (i) => i === "reset" || i === "none",
  Ms = (i, t) => (t ? i : Object.assign({}, i)),
  ra = (i, t, e) =>
    i && !t.hidden && t._stacked && { keys: Wn(e, !0), values: null };
class nt {
  constructor(t, e) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = ys(t.vScale, t)),
      this.addElements();
  }
  updateIndex(t) {
    this.index !== t && Ut(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      s = this.getDataset(),
      n = (d, u, f, g) => (d === "x" ? u : d === "r" ? g : f),
      o = (e.xAxisID = D(s.xAxisID, hi(t, "x"))),
      r = (e.yAxisID = D(s.yAxisID, hi(t, "y"))),
      a = (e.rAxisID = D(s.rAxisID, hi(t, "r"))),
      l = e.indexAxis,
      c = (e.iAxisID = n(l, o, r, a)),
      h = (e.vAxisID = n(l, r, o, a));
    (e.xScale = this.getScaleForId(o)),
      (e.yScale = this.getScaleForId(r)),
      (e.rScale = this.getScaleForId(a)),
      (e.iScale = this.getScaleForId(c)),
      (e.vScale = this.getScaleForId(h));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && ts(this._data, this), t._stacked && Ut(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      s = this._data;
    if (A(e)) this._data = ta(e);
    else if (s !== e) {
      if (s) {
        ts(s, this);
        const n = this._cachedMeta;
        Ut(n), (n._parsed = []);
      }
      e && Object.isExtensible(e) && Co(e, this),
        (this._syncList = []),
        (this._data = e);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      s = this.getDataset();
    let n = !1;
    this._dataCheck();
    const o = e._stacked;
    (e._stacked = ys(e.vScale, e)),
      e.stack !== s.stack && ((n = !0), Ut(e), (e.stack = s.stack)),
      this._resyncElements(t),
      (n || o !== e._stacked) && ws(this, e._parsed);
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      s = t.getOptionScopes(this.getDataset(), e, !0);
    (this.options = t.createResolver(s, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this,
      { iScale: o, _stacked: r } = s,
      a = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted,
      c = t > 0 && s._parsed[t - 1],
      h,
      d,
      u;
    if (this._parsing === !1) (s._parsed = n), (s._sorted = !0), (u = n);
    else {
      B(n[t])
        ? (u = this.parseArrayData(s, n, t, e))
        : A(n[t])
        ? (u = this.parseObjectData(s, n, t, e))
        : (u = this.parsePrimitiveData(s, n, t, e));
      const f = () => d[a] === null || (c && d[a] < c[a]);
      for (h = 0; h < e; ++h)
        (s._parsed[h + t] = d = u[h]), l && (f() && (l = !1), (c = d));
      s._sorted = l;
    }
    r && ws(this, u);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t,
      a = o.axis,
      l = r.axis,
      c = o.getLabels(),
      h = o === r,
      d = new Array(n);
    let u, f, g;
    for (u = 0, f = n; u < f; ++u)
      (g = u + s),
        (d[u] = { [a]: h || o.parse(c[g], g), [l]: r.parse(e[g], g) });
    return d;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: r } = t,
      a = new Array(n);
    let l, c, h, d;
    for (l = 0, c = n; l < c; ++l)
      (h = l + s),
        (d = e[h]),
        (a[l] = { x: o.parse(d[0], h), y: r.parse(d[1], h) });
    return a;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(n);
    let h, d, u, f;
    for (h = 0, d = n; h < d; ++h)
      (u = h + s),
        (f = e[u]),
        (c[h] = { x: o.parse(wt(f, a), u), y: r.parse(wt(f, l), u) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const n = this.chart,
      o = this._cachedMeta,
      r = e[t.axis],
      a = { keys: Wn(n, !0), values: e._stacks[t.axis] };
    return _s(a, r, o.index, { mode: s });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && ((n.values = a), (r = _s(n, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r));
  }
  getMinMax(t, e) {
    const s = this._cachedMeta,
      n = s._parsed,
      o = s._sorted && t === s.iScale,
      r = n.length,
      a = this._getOtherScale(t),
      l = ra(e, s, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: h, max: d } = ia(a);
    let u, f;
    function g() {
      f = n[u];
      const p = f[a.axis];
      return !H(f[t.axis]) || h > p || d < p;
    }
    for (
      u = 0;
      u < r && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o));
      ++u
    );
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!g()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      s = [];
    let n, o, r;
    for (n = 0, o = e.length; n < o; ++n) (r = e[n][t.axis]), H(r) && s.push(r);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = e.iScale,
      n = e.vScale,
      o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : "",
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"),
      (e._clip = Qr(
        D(this.options.clip, Jr(e.xScale, e.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      s = this._cachedMeta,
      n = s.data || [],
      o = e.chartArea,
      r = [],
      a = this._drawStart || 0,
      l = this._drawCount || n.length - a,
      c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = n[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h) r[h].draw(t, o);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(s)
      : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      (o = r.$context || (r.$context = oa(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = n.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o =
        this.$context ||
        (this.$context = na(this.chart.getContext(), this.index))),
        (o.dataset = n),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!e), (o.mode = s), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active",
      o = this._cachedDataOpts,
      r = t + "-" + e,
      a = o[r],
      l = this.enableOptionSharing && it(s);
    if (a) return Ms(a, l);
    const c = this.chart.config,
      h = c.datasetElementScopeKeys(this._type, t),
      d = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      u = c.getOptionScopes(this.getDataset(), h),
      f = Object.keys(L.elements[t]),
      g = () => this.getContext(s, n),
      p = c.resolveNamedOptions(u, f, g, d);
    return p.$shared && ((p.$shared = l), (o[r] = Object.freeze(Ms(p, l)))), p;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${e}`,
      a = o[r];
    if (a) return a;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config,
        d = h.datasetAnimationScopeKeys(this._type, e),
        u = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(u, this.getContext(t, s, e));
    }
    const c = new Vn(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || di(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e),
      n = this._sharedOptions,
      o = this.getSharedOptions(s),
      r = this.includeOptions(e, o) || o !== n;
    return (
      this.updateSharedOptions(o, e, s), { sharedOptions: o, includeOptions: r }
    );
  }
  updateElement(t, e, s, n) {
    di(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !di(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    const o = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: (!n && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data,
      s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const n = s.length,
      o = e.length,
      r = Math.min(o, n);
    r && this.parse(0, r),
      o > n
        ? this._insertElements(n, o - n, t)
        : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta,
      o = n.data,
      r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--) c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType();
    this._parsing && l(n._parsed),
      this.parse(t, e),
      s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {}
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && Ut(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, s, n] = t;
      this[e](s, n);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(["_removeElements", t, e]);
    const s = arguments.length - 2;
    s && this._sync(["_insertElements", t, s]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
nt.defaults = {};
nt.prototype.datasetElementType = null;
nt.prototype.dataElementType = null;
function aa(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = pn(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function la(i) {
  const t = i.iScale,
    e = aa(t, i.type);
  let s = t._length,
    n,
    o,
    r,
    a;
  const l = () => {
    r === 32767 ||
      r === -32768 ||
      (it(a) && (s = Math.min(s, Math.abs(r - a) || s)), (a = r));
  };
  for (n = 0, o = e.length; n < o; ++n) (r = t.getPixelForValue(e[n])), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    (r = t.getPixelForTick(n)), l();
  return s;
}
function ca(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return (
    T(n)
      ? ((o = t.min * e.categoryPercentage), (r = e.barPercentage))
      : ((o = n * s), (r = 1)),
    { chunk: o / s, ratio: r, start: t.pixels[i] - o / 2 }
  );
}
function ha(i, t, e, s) {
  const n = t.pixels,
    o = n[i];
  let r = i > 0 ? n[i - 1] : null,
    a = i < n.length - 1 ? n[i + 1] : null;
  const l = e.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)),
    a === null && (a = o + o - r);
  const c = o - ((o - Math.min(r, a)) / 2) * l;
  return {
    chunk: ((Math.abs(a - r) / 2) * l) / s,
    ratio: e.barPercentage,
    start: c,
  };
}
function da(i, t, e, s) {
  const n = e.parse(i[0], s),
    o = e.parse(i[1], s),
    r = Math.min(n, o),
    a = Math.max(n, o);
  let l = r,
    c = a;
  Math.abs(r) > Math.abs(a) && ((l = a), (c = r)),
    (t[e.axis] = c),
    (t._custom = { barStart: l, barEnd: c, start: n, end: o, min: r, max: a });
}
function Nn(i, t, e, s) {
  return B(i) ? da(i, t, e, s) : (t[e.axis] = e.parse(i, s)), t;
}
function ks(i, t, e, s) {
  const n = i.iScale,
    o = i.vScale,
    r = n.getLabels(),
    a = n === o,
    l = [];
  let c, h, d, u;
  for (c = e, h = e + s; c < h; ++c)
    (u = t[c]),
      (d = {}),
      (d[n.axis] = a || n.parse(r[c], c)),
      l.push(Nn(u, d, o, c));
  return l;
}
function ui(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function ua(i, t, e) {
  return i !== 0 ? lt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function fa(i) {
  let t, e, s, n, o;
  return (
    i.horizontal
      ? ((t = i.base > i.x), (e = "left"), (s = "right"))
      : ((t = i.base < i.y), (e = "bottom"), (s = "top")),
    t ? ((n = "end"), (o = "start")) : ((n = "start"), (o = "end")),
    { start: e, end: s, reverse: t, top: n, bottom: o }
  );
}
function ga(i, t, e, s) {
  let n = t.borderSkipped;
  const o = {};
  if (!n) {
    i.borderSkipped = o;
    return;
  }
  if (n === !0) {
    i.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: r, end: a, reverse: l, top: c, bottom: h } = fa(i);
  n === "middle" &&
    e &&
    ((i.enableBorderRadius = !0),
    (e._top || 0) === s
      ? (n = c)
      : (e._bottom || 0) === s
      ? (n = h)
      : ((o[Ss(h, r, a, l)] = !0), (n = c))),
    (o[Ss(n, r, a, l)] = !0),
    (i.borderSkipped = o);
}
function Ss(i, t, e, s) {
  return s ? ((i = pa(i, t, e)), (i = Ps(i, e, t))) : (i = Ps(i, t, e)), i;
}
function pa(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Ps(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function ma(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? (e === 1 ? 0.33 : 0) : t;
}
class $e extends nt {
  parsePrimitiveData(t, e, s, n) {
    return ks(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return ks(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: r } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = o.axis === "x" ? a : l,
      h = r.axis === "x" ? a : l,
      d = [];
    let u, f, g, p;
    for (u = s, f = s + n; u < f; ++u)
      (p = e[u]),
        (g = {}),
        (g[o.axis] = o.parse(wt(p, c), u)),
        d.push(Nn(wt(p, h), g, r, u));
    return d;
  }
  updateRangeFromParsed(t, e, s, n) {
    super.updateRangeFromParsed(t, e, s, n);
    const o = s._custom;
    o &&
      e === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { iScale: s, vScale: n } = e,
      o = this.getParsed(t),
      r = o._custom,
      a = ui(r)
        ? "[" + r.start + ", " + r.end + "]"
        : "" + n.getLabelForValue(o[n.axis]);
    return { label: "" + s.getLabelForValue(o[s.axis]), value: a };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset",
      {
        index: r,
        _cachedMeta: { vScale: a },
      } = this,
      l = a.getBasePixel(),
      c = a.isHorizontal(),
      h = this._getRuler(),
      { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n);
    for (let f = e; f < e + s; f++) {
      const g = this.getParsed(f),
        p =
          o || T(g[a.axis])
            ? { base: l, head: l }
            : this._calculateBarValuePixels(f),
        m = this._calculateBarIndexPixels(f, h),
        b = (g._stacks || {})[a.axis],
        x = {
          horizontal: c,
          base: p.base,
          enableBorderRadius:
            !b || ui(g._custom) || r === b._top || r === b._bottom,
          x: c ? p.head : m.center,
          y: c ? m.center : p.head,
          height: c ? m.size : Math.abs(p.size),
          width: c ? Math.abs(p.size) : m.size,
        };
      u &&
        (x.options =
          d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const v = x.options || t[f].options;
      ga(x, v, b, r), ma(x, v, h.ratio), this.updateElement(t[f], f, x, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta,
      n = s
        .getMatchingVisibleMetas(this._type)
        .filter((l) => l.controller.options.grouped),
      o = s.options.stacked,
      r = [],
      a = (l) => {
        const c = l.controller.getParsed(e),
          h = c && c[l.vScale.axis];
        if (T(h) || isNaN(h)) return !0;
      };
    for (const l of n)
      if (
        !(e !== void 0 && a(l)) &&
        ((o === !1 ||
          r.indexOf(l.stack) === -1 ||
          (o === void 0 && l.stack === void 0)) &&
          r.push(l.stack),
        l.index === t)
      )
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, s) {
    const n = this._getStacks(t, s),
      o = e !== void 0 ? n.indexOf(e) : -1;
    return o === -1 ? n.length - 1 : o;
  }
  _getRuler() {
    const t = this.options,
      e = this._cachedMeta,
      s = e.iScale,
      n = [];
    let o, r;
    for (o = 0, r = e.data.length; o < r; ++o)
      n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
    const a = t.barThickness;
    return {
      min: a || la(e),
      pixels: n,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: e, _stacked: s },
        options: { base: n, minBarLength: o },
      } = this,
      r = n || 0,
      a = this.getParsed(t),
      l = a._custom,
      c = ui(l);
    let h = a[e.axis],
      d = 0,
      u = s ? this.applyStack(e, a, s) : h,
      f,
      g;
    u !== h && ((d = u - h), (u = h)),
      c &&
        ((h = l.barStart),
        (u = l.barEnd - l.barStart),
        h !== 0 && lt(h) !== lt(l.barEnd) && (d = 0),
        (d += h));
    const p = !T(n) && !c ? n : d;
    let m = e.getPixelForValue(p);
    if (
      (this.chart.getDataVisibility(t)
        ? (f = e.getPixelForValue(d + u))
        : (f = m),
      (g = f - m),
      Math.abs(g) < o)
    ) {
      (g = ua(g, e, r) * o), h === r && (m -= g / 2);
      const b = e.getPixelForDecimal(0),
        x = e.getPixelForDecimal(1),
        v = Math.min(b, x),
        y = Math.max(b, x);
      (m = Math.max(Math.min(m, y), v)), (f = m + g);
    }
    if (m === e.getPixelForValue(r)) {
      const b = (lt(g) * e.getLineWidthForValue(r)) / 2;
      (m += b), (g -= b);
    }
    return { size: g, base: m, head: f, center: f + g / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale,
      n = this.options,
      o = n.skipNull,
      r = D(n.maxBarThickness, 1 / 0);
    let a, l;
    if (e.grouped) {
      const c = o ? this._getStackCount(t) : e.stackCount,
        h = n.barThickness === "flex" ? ha(t, e, n, c) : ca(t, e, n, c),
        d = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          o ? t : void 0
        );
      (a = h.start + h.chunk * d + h.chunk / 2),
        (l = Math.min(r, h.chunk * h.ratio));
    } else
      (a = s.getPixelForValue(this.getParsed(t)[s.axis], t)),
        (l = Math.min(r, e.min * e.ratio));
    return { base: a - l / 2, head: a + l / 2, center: a, size: l };
  }
  draw() {
    const t = this._cachedMeta,
      e = t.vScale,
      s = t.data,
      n = s.length;
    let o = 0;
    for (; o < n; ++o)
      this.getParsed(o)[e.axis] !== null && s[o].draw(this._ctx);
  }
}
$e.id = "bar";
$e.defaults = {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "base", "width", "height"],
    },
  },
};
$e.overrides = {
  scales: {
    _index_: { type: "category", offset: !0, grid: { offset: !0 } },
    _value_: { type: "linear", beginAtZero: !0 },
  },
};
class Ye extends nt {
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
  }
  parsePrimitiveData(t, e, s, n) {
    const o = super.parsePrimitiveData(t, e, s, n);
    for (let r = 0; r < o.length; r++)
      o[r]._custom = this.resolveDataElementOptions(r + s).radius;
    return o;
  }
  parseArrayData(t, e, s, n) {
    const o = super.parseArrayData(t, e, s, n);
    for (let r = 0; r < o.length; r++) {
      const a = e[s + r];
      o[r]._custom = D(a[2], this.resolveDataElementOptions(r + s).radius);
    }
    return o;
  }
  parseObjectData(t, e, s, n) {
    const o = super.parseObjectData(t, e, s, n);
    for (let r = 0; r < o.length; r++) {
      const a = e[s + r];
      o[r]._custom = D(
        a && a.r && +a.r,
        this.resolveDataElementOptions(r + s).radius
      );
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let s = t.length - 1; s >= 0; --s)
      e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { xScale: s, yScale: n } = e,
      o = this.getParsed(t),
      r = s.getLabelForValue(o.x),
      a = n.getLabelForValue(o.y),
      l = o._custom;
    return {
      label: e.label,
      value: "(" + r + ", " + a + (l ? ", " + l : "") + ")",
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset",
      { iScale: r, vScale: a } = this._cachedMeta,
      { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, n),
      h = r.axis,
      d = a.axis;
    for (let u = e; u < e + s; u++) {
      const f = t[u],
        g = !o && this.getParsed(u),
        p = {},
        m = (p[h] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(g[h])),
        b = (p[d] = o ? a.getBasePixel() : a.getPixelForValue(g[d]));
      (p.skip = isNaN(m) || isNaN(b)),
        c &&
          ((p.options =
            l || this.resolveDataElementOptions(u, f.active ? "active" : n)),
          o && (p.options.radius = 0)),
        this.updateElement(f, u, p, n);
    }
  }
  resolveDataElementOptions(t, e) {
    const s = this.getParsed(t);
    let n = super.resolveDataElementOptions(t, e);
    n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
    const o = n.radius;
    return (
      e !== "active" && (n.radius = 0), (n.radius += D(s && s._custom, o)), n
    );
  }
}
Ye.id = "bubble";
Ye.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius"],
    },
  },
};
Ye.overrides = {
  scales: { x: { type: "linear" }, y: { type: "linear" } },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
      },
    },
  },
};
function ba(i, t, e) {
  let s = 1,
    n = 1,
    o = 0,
    r = 0;
  if (t < I) {
    const a = i,
      l = a + t,
      c = Math.cos(a),
      h = Math.sin(a),
      d = Math.cos(l),
      u = Math.sin(l),
      f = (v, y, _) => (ae(v, a, l, !0) ? 1 : Math.max(y, y * e, _, _ * e)),
      g = (v, y, _) => (ae(v, a, l, !0) ? -1 : Math.min(y, y * e, _, _ * e)),
      p = f(0, c, d),
      m = f(W, h, u),
      b = g(V, c, d),
      x = g(V + W, h, u);
    (s = (p - b) / 2),
      (n = (m - x) / 2),
      (o = -(p + b) / 2),
      (r = -(m + x) / 2);
  }
  return { ratioX: s, ratioY: n, offsetX: o, offsetY: r };
}
class $t extends nt {
  constructor(t, e) {
    super(t, e),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, e) {
    const s = this.getDataset().data,
      n = this._cachedMeta;
    if (this._parsing === !1) n._parsed = s;
    else {
      let o = (l) => +s[l];
      if (A(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +wt(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r) n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return st(this.options.rotation - 90);
  }
  _getCircumference() {
    return st(this.options.circumference);
  }
  _getRotationExtents() {
    let t = I,
      e = -I;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s)) {
        const n = this.chart.getDatasetMeta(s).controller,
          o = n._getRotation(),
          r = n._getCircumference();
        (t = Math.min(t, o)), (e = Math.max(e, o + r));
      }
    return { rotation: t, circumference: e - t };
  }
  update(t) {
    const e = this.chart,
      { chartArea: s } = e,
      n = this._cachedMeta,
      o = n.data,
      r =
        this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      a = Math.max((Math.min(s.width, s.height) - r) / 2, 0),
      l = Math.min(fo(this.options.cutout, a), 1),
      c = this._getRingWeight(this.index),
      { circumference: h, rotation: d } = this._getRotationExtents(),
      { ratioX: u, ratioY: f, offsetX: g, offsetY: p } = ba(d, h, l),
      m = (s.width - r) / u,
      b = (s.height - r) / f,
      x = Math.max(Math.min(m, b) / 2, 0),
      v = hn(this.options.radius, x),
      y = Math.max(v * l, 0),
      _ = (v - y) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = g * v),
      (this.offsetY = p * v),
      (n.total = this.calculateTotal()),
      (this.outerRadius = v - _ * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - _ * c, 0)),
      this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options,
      n = this._cachedMeta,
      o = this._getCircumference();
    return (e && s.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      n._parsed[t] === null ||
      n.data[t].hidden
      ? 0
      : this.calculateCircumference((n._parsed[t] * o) / I);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset",
      r = this.chart,
      a = r.chartArea,
      c = r.options.animation,
      h = (a.left + a.right) / 2,
      d = (a.top + a.bottom) / 2,
      u = o && c.animateScale,
      f = u ? 0 : this.innerRadius,
      g = u ? 0 : this.outerRadius,
      { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, n);
    let b = this._getRotation(),
      x;
    for (x = 0; x < e; ++x) b += this._circumference(x, o);
    for (x = e; x < e + s; ++x) {
      const v = this._circumference(x, o),
        y = t[x],
        _ = {
          x: h + this.offsetX,
          y: d + this.offsetY,
          startAngle: b,
          endAngle: b + v,
          circumference: v,
          outerRadius: g,
          innerRadius: f,
        };
      m &&
        (_.options =
          p || this.resolveDataElementOptions(x, y.active ? "active" : n)),
        (b += v),
        this.updateElement(y, x, _, n);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data;
    let s = 0,
      n;
    for (n = 0; n < e.length; n++) {
      const o = t._parsed[n];
      o !== null &&
        !isNaN(o) &&
        this.chart.getDataVisibility(n) &&
        !e[n].hidden &&
        (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? I * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart,
      n = s.data.labels || [],
      o = fe(e._parsed[t], s.options.locale);
    return { label: n[t] || "", value: o };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const s = this.chart;
    let n, o, r, a, l;
    if (!t) {
      for (n = 0, o = s.data.datasets.length; n < o; ++n)
        if (s.isDatasetVisible(n)) {
          (r = s.getDatasetMeta(n)), (t = r.data), (a = r.controller);
          break;
        }
    }
    if (!t) return 0;
    for (n = 0, o = t.length; n < o; ++n)
      (l = a.resolveDataElementOptions(n)),
        l.borderAlign !== "inner" &&
          (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let s = 0, n = t.length; s < n; ++s) {
      const o = this.resolveDataElementOptions(s);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(D(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
$t.id = "doughnut";
$t.defaults = {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: { animateRotate: !0, animateScale: !1 },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing",
      ],
    },
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r",
};
$t.descriptors = {
  _scriptable: (i) => i !== "spacing",
  _indexable: (i) => i !== "spacing",
};
$t.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i) {
          const t = i.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: e },
            } = i.legend.options;
            return t.labels.map((s, n) => {
              const r = i.getDatasetMeta(0).controller.getStyle(n);
              return {
                text: s,
                fillStyle: r.backgroundColor,
                strokeStyle: r.borderColor,
                lineWidth: r.borderWidth,
                pointStyle: e,
                hidden: !i.getDataVisibility(n),
                index: n,
              };
            });
          }
          return [];
        },
      },
      onClick(i, t, e) {
        e.chart.toggleDataVisibility(t.index), e.chart.update();
      },
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i) {
          let t = i.label;
          const e = ": " + i.formattedValue;
          return B(t) ? ((t = t.slice()), (t[0] += e)) : (t += e), t;
        },
      },
    },
  },
};
class Xe extends nt {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: s, data: n = [], _dataset: o } = e,
      r = this.chart._animationsDisabled;
    let { start: a, count: l } = xn(e, n, r);
    (this._drawStart = a),
      (this._drawCount = l),
      _n(e) && ((a = 0), (l = n.length)),
      (s._chart = this.chart),
      (s._datasetIndex = this.index),
      (s._decimated = !!o._decimated),
      (s.points = n);
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(s, void 0, { animated: !r, options: c }, t),
      this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset",
      { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n),
      u = r.axis,
      f = a.axis,
      { spanGaps: g, segment: p } = this.options,
      m = Nt(g) ? g : Number.POSITIVE_INFINITY,
      b = this.chart._animationsDisabled || o || n === "none";
    let x = e > 0 && this.getParsed(e - 1);
    for (let v = e; v < e + s; ++v) {
      const y = t[v],
        _ = this.getParsed(v),
        w = b ? y : {},
        M = T(_[f]),
        S = (w[u] = r.getPixelForValue(_[u], v)),
        k = (w[f] =
          o || M
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, _, l) : _[f], v));
      (w.skip = isNaN(S) || isNaN(k) || M),
        (w.stop = v > 0 && Math.abs(_[u] - x[u]) > m),
        p && ((w.parsed = _), (w.raw = c.data[v])),
        d &&
          (w.options =
            h || this.resolveDataElementOptions(v, y.active ? "active" : n)),
        b || this.updateElement(y, v, w, n),
        (x = _);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.dataset,
      s = (e.options && e.options.borderWidth) || 0,
      n = t.data || [];
    if (!n.length) return s;
    const o = n[0].size(this.resolveDataElementOptions(0)),
      r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
Xe.id = "line";
Xe.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1,
};
Xe.overrides = {
  scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
};
class Ue extends nt {
  constructor(t, e) {
    super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart,
      n = s.data.labels || [],
      o = fe(e._parsed[t].r, s.options.locale);
    return { label: n[t] || "", value: o };
  }
  parseObjectData(t, e, s, n) {
    return Ln.bind(this)(t, e, s, n);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta,
      e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((s, n) => {
        const o = this.getParsed(n).r;
        !isNaN(o) &&
          this.chart.getDataVisibility(n) &&
          (o < e.min && (e.min = o), o > e.max && (e.max = o));
      }),
      e
    );
  }
  _updateRadius() {
    const t = this.chart,
      e = t.chartArea,
      s = t.options,
      n = Math.min(e.right - e.left, e.bottom - e.top),
      o = Math.max(n / 2, 0),
      r = Math.max(s.cutoutPercentage ? (o / 100) * s.cutoutPercentage : 1, 0),
      a = (o - r) / t.getVisibleDatasetCount();
    (this.outerRadius = o - a * this.index),
      (this.innerRadius = this.outerRadius - a);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset",
      r = this.chart,
      l = r.options.animation,
      c = this._cachedMeta.rScale,
      h = c.xCenter,
      d = c.yCenter,
      u = c.getIndexAngle(0) - 0.5 * V;
    let f = u,
      g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g) f += this._computeAngle(g, n, p);
    for (g = e; g < e + s; g++) {
      const m = t[g];
      let b = f,
        x = f + this._computeAngle(g, n, p),
        v = r.getDataVisibility(g)
          ? c.getDistanceFromCenterForValue(this.getParsed(g).r)
          : 0;
      (f = x), o && (l.animateScale && (v = 0), l.animateRotate && (b = x = u));
      const y = {
        x: h,
        y: d,
        innerRadius: 0,
        outerRadius: v,
        startAngle: b,
        endAngle: x,
        options: this.resolveDataElementOptions(g, m.active ? "active" : n),
      };
      this.updateElement(m, g, y, n);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return (
      t.data.forEach((s, n) => {
        !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
      }),
      e
    );
  }
  _computeAngle(t, e, s) {
    return this.chart.getDataVisibility(t)
      ? st(this.resolveDataElementOptions(t, e).angle || s)
      : 0;
  }
}
Ue.id = "polarArea";
Ue.defaults = {
  dataElementType: "arc",
  animation: { animateRotate: !0, animateScale: !0 },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
      ],
    },
  },
  indexAxis: "r",
  startAngle: 0,
};
Ue.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(i) {
          const t = i.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: e },
            } = i.legend.options;
            return t.labels.map((s, n) => {
              const r = i.getDatasetMeta(0).controller.getStyle(n);
              return {
                text: s,
                fillStyle: r.backgroundColor,
                strokeStyle: r.borderColor,
                lineWidth: r.borderWidth,
                pointStyle: e,
                hidden: !i.getDataVisibility(n),
                index: n,
              };
            });
          }
          return [];
        },
      },
      onClick(i, t, e) {
        e.chart.toggleDataVisibility(t.index), e.chart.update();
      },
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i) {
          return i.chart.data.labels[i.dataIndex] + ": " + i.formattedValue;
        },
      },
    },
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: { display: !1 },
      beginAtZero: !0,
      grid: { circular: !0 },
      pointLabels: { display: !1 },
      startAngle: 0,
    },
  },
};
class ji extends $t {}
ji.id = "pie";
ji.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" };
class Ke extends nt {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      s = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(s[e.axis]),
    };
  }
  parseObjectData(t, e, s, n) {
    return Ln.bind(this)(t, e, s, n);
  }
  update(t) {
    const e = this._cachedMeta,
      s = e.dataset,
      n = e.data || [],
      o = e.iScale.getLabels();
    if (((s.points = n), t !== "resize")) {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const a = { _loop: !0, _fullLoop: o.length === n.length, options: r };
      this.updateElement(s, void 0, a, t);
    }
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, e, s, n) {
    const o = this._cachedMeta.rScale,
      r = n === "reset";
    for (let a = e; a < e + s; a++) {
      const l = t[a],
        c = this.resolveDataElementOptions(a, l.active ? "active" : n),
        h = o.getPointPositionForValue(a, this.getParsed(a).r),
        d = r ? o.xCenter : h.x,
        u = r ? o.yCenter : h.y,
        f = {
          x: d,
          y: u,
          angle: h.angle,
          skip: isNaN(d) || isNaN(u),
          options: c,
        };
      this.updateElement(l, a, f, n);
    }
  }
}
Ke.id = "radar";
Ke.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: { line: { fill: "start" } },
};
Ke.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } };
class ot {
  constructor() {
    (this.x = void 0),
      (this.y = void 0),
      (this.active = !1),
      (this.options = void 0),
      (this.$animations = void 0);
  }
  tooltipPosition(t) {
    const { x: e, y: s } = this.getProps(["x", "y"], t);
    return { x: e, y: s };
  }
  hasValue() {
    return Nt(this.x) && Nt(this.y);
  }
  getProps(t, e) {
    const s = this.$animations;
    if (!e || !s) return this;
    const n = {};
    return (
      t.forEach((o) => {
        n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
      }),
      n
    );
  }
}
ot.defaults = {};
ot.defaultRoutes = void 0;
const Hn = {
  values(i) {
    return B(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0) return "0";
    const s = this.chart.options.locale;
    let n,
      o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), (o = xa(i, e));
    }
    const r = et(Math.abs(o)),
      a = Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      l = { notation: n, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), fe(i, s, l);
  },
  logarithmic(i, t, e) {
    if (i === 0) return "0";
    const s = i / Math.pow(10, Math.floor(et(i)));
    return s === 1 || s === 2 || s === 5 ? Hn.numeric.call(this, i, t, e) : "";
  },
};
function xa(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var qe = { formatters: Hn };
L.set("scale", {
  display: !0,
  offset: !1,
  reverse: !1,
  beginAtZero: !1,
  bounds: "ticks",
  grace: 0,
  grid: {
    display: !0,
    lineWidth: 1,
    drawBorder: !0,
    drawOnChartArea: !0,
    drawTicks: !0,
    tickLength: 8,
    tickWidth: (i, t) => t.lineWidth,
    tickColor: (i, t) => t.color,
    offset: !1,
    borderDash: [],
    borderDashOffset: 0,
    borderWidth: 1,
  },
  title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: !1,
    textStrokeWidth: 0,
    textStrokeColor: "",
    padding: 3,
    display: !0,
    autoSkip: !0,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: qe.formatters.values,
    minor: {},
    major: {},
    align: "center",
    crossAlign: "near",
    showLabelBackdrop: !1,
    backdropColor: "rgba(255, 255, 255, 0.75)",
    backdropPadding: 2,
  },
});
L.route("scale.ticks", "color", "", "color");
L.route("scale.grid", "color", "", "borderColor");
L.route("scale.grid", "borderColor", "", "borderColor");
L.route("scale.title", "color", "", "color");
L.describe("scale", {
  _fallback: !1,
  _scriptable: (i) =>
    !i.startsWith("before") &&
    !i.startsWith("after") &&
    i !== "callback" &&
    i !== "parser",
  _indexable: (i) => i !== "borderDash" && i !== "tickBorderDash",
});
L.describe("scales", { _fallback: "scale" });
L.describe("scale.ticks", {
  _scriptable: (i) => i !== "backdropPadding" && i !== "callback",
  _indexable: (i) => i !== "backdropPadding",
});
function _a(i, t) {
  const e = i.options.ticks,
    s = e.maxTicksLimit || ya(i),
    n = e.major.enabled ? wa(t) : [],
    o = n.length,
    r = n[0],
    a = n[o - 1],
    l = [];
  if (o > s) return Ma(t, l, n, o / s), l;
  const c = va(n, t, s);
  if (o > 0) {
    let h, d;
    const u = o > 1 ? Math.round((a - r) / (o - 1)) : null;
    for (Me(t, l, c, T(u) ? 0 : r - u, r), h = 0, d = o - 1; h < d; h++)
      Me(t, l, c, n[h], n[h + 1]);
    return Me(t, l, c, a, T(u) ? t.length : a + u), l;
  }
  return Me(t, l, c), l;
}
function ya(i) {
  const t = i.options.offset,
    e = i._tickSize(),
    s = i._length / e + (t ? 0 : 1),
    n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function va(i, t, e) {
  const s = ka(i),
    n = t.length / e;
  if (!s) return Math.max(n, 1);
  const o = vo(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n) return l;
  }
  return Math.max(n, 1);
}
function wa(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++) i[e].major && t.push(e);
  return t;
}
function Ma(i, t, e, s) {
  let n = 0,
    o = e[0],
    r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, (o = e[n * s]));
}
function Me(i, t, e, s, n) {
  const o = D(s, 0),
    r = Math.min(D(n, i.length), i.length);
  let a = 0,
    l,
    c,
    h;
  for (
    e = Math.ceil(e), n && ((l = n - s), (e = l / Math.floor(l / e))), h = o;
    h < 0;

  )
    a++, (h = Math.round(o + a * e));
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, (h = Math.round(o + a * e)));
}
function ka(i) {
  const t = i.length;
  let e, s;
  if (t < 2) return !1;
  for (s = i[0], e = 1; e < t; ++e) if (i[e] - i[e - 1] !== s) return !1;
  return s;
}
const Sa = (i) => (i === "left" ? "right" : i === "right" ? "left" : i),
  Cs = (i, t, e) => (t === "top" || t === "left" ? i[t] + e : i[t] - e);
function Ds(i, t) {
  const e = [],
    s = i.length / t,
    n = i.length;
  let o = 0;
  for (; o < n; o += s) e.push(i[Math.floor(o)]);
  return e;
}
function Pa(i, t, e) {
  const s = i.ticks.length,
    n = Math.min(t, s - 1),
    o = i._startPixel,
    r = i._endPixel,
    a = 1e-6;
  let l = i.getPixelForTick(n),
    c;
  if (
    !(
      e &&
      (s === 1
        ? (c = Math.max(l - o, r - l))
        : t === 0
        ? (c = (i.getPixelForTick(1) - l) / 2)
        : (c = (l - i.getPixelForTick(n - 1)) / 2),
      (l += n < t ? c : -c),
      l < o - a || l > r + a)
    )
  )
    return l;
}
function Ca(i, t) {
  F(i, (e) => {
    const s = e.gc,
      n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o) delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function Kt(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function As(i, t) {
  if (!i.display) return 0;
  const e = Y(i.font, t),
    s = q(i.padding);
  return (B(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function Da(i, t) {
  return kt(i, { scale: t, type: "scale" });
}
function Aa(i, t, e) {
  return kt(i, { tick: e, index: t, type: "tick" });
}
function Oa(i, t, e) {
  let s = Ei(i);
  return ((e && t !== "right") || (!e && t === "right")) && (s = Sa(s)), s;
}
function La(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i,
    { chartArea: c, scales: h } = l;
  let d = 0,
    u,
    f,
    g;
  const p = r - n,
    m = a - o;
  if (i.isHorizontal()) {
    if (((f = U(s, o, a)), A(e))) {
      const b = Object.keys(e)[0],
        x = e[b];
      g = h[b].getPixelForValue(x) + p - t;
    } else
      e === "center" ? (g = (c.bottom + c.top) / 2 + p - t) : (g = Cs(i, e, t));
    u = a - o;
  } else {
    if (A(e)) {
      const b = Object.keys(e)[0],
        x = e[b];
      f = h[b].getPixelForValue(x) - m + t;
    } else
      e === "center" ? (f = (c.left + c.right) / 2 - m + t) : (f = Cs(i, e, t));
    (g = U(s, r, n)), (d = e === "left" ? -W : W);
  }
  return { titleX: f, titleY: g, maxWidth: u, rotation: d };
}
class Ft extends ot {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
    return (
      (t = tt(t, Number.POSITIVE_INFINITY)),
      (e = tt(e, Number.NEGATIVE_INFINITY)),
      (s = tt(s, Number.POSITIVE_INFINITY)),
      (n = tt(n, Number.NEGATIVE_INFINITY)),
      { min: tt(t, s), max: tt(e, n), minDefined: H(t), maxDefined: H(e) }
    );
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(),
      r;
    if (n && o) return { min: e, max: s };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (r = a[l].controller.getMinMax(this, t)),
        n || (e = Math.min(e, r.min)),
        o || (s = Math.max(s, r.max));
    return (
      (e = o && e > s ? s : e),
      (s = n && e > s ? e : s),
      { min: tt(e, tt(s, e)), max: tt(s, tt(e, s)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    z(this.options.beforeUpdate, [this]);
  }
  update(t, e, s) {
    const { beginAtZero: n, grace: o, ticks: r } = this.options,
      a = r.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = s =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + s.left + s.right
        : this.height + s.top + s.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = cr(this, o, n)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Ds(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === "auto") &&
        ((this.ticks = _a(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      e,
      s;
    this.isHorizontal()
      ? ((e = this.left), (s = this.right))
      : ((e = this.top), (s = this.bottom), (t = !t)),
      (this._startPixel = e),
      (this._endPixel = s),
      (this._reversePixels = t),
      (this._length = s - e),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    z(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    z(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    z(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), z(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    z(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      (o = t[s]), (o.label = z(e.callback, [o.value, s, t], this));
  }
  afterTickToLabelConversion() {
    z(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    z(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      s = this.ticks.length,
      n = e.minRotation || 0,
      o = e.maxRotation;
    let r = n,
      a,
      l,
      c;
    if (
      !this._isVisible() ||
      !e.display ||
      n >= o ||
      s <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(),
      d = h.widest.width,
      u = h.highest.height,
      f = X(this.chart.width - d, 0, this.maxWidth);
    (a = t.offset ? this.maxWidth / s : f / (s - 1)),
      d + 6 > a &&
        ((a = f / (s - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          Kt(t.grid) -
          e.padding -
          As(t.title, this.chart.options.font)),
        (c = Math.sqrt(d * d + u * u)),
        (r = Ti(
          Math.min(
            Math.asin(X((h.highest.height + 6) / a, -1, 1)),
            Math.asin(X(l / c, -1, 1)) - Math.asin(X(u / c, -1, 1))
          )
        )),
        (r = Math.max(n, Math.min(o, r)))),
      (this.labelRotation = r);
  }
  afterCalculateLabelRotation() {
    z(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    z(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: e,
        options: { ticks: s, title: n, grid: o },
      } = this,
      r = this._isVisible(),
      a = this.isHorizontal();
    if (r) {
      const l = As(n, e.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = Kt(o) + l))
          : ((t.height = this.maxHeight), (t.width = Kt(o) + l)),
        s.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: h,
            widest: d,
            highest: u,
          } = this._getLabelSizes(),
          f = s.padding * 2,
          g = st(this.labelRotation),
          p = Math.cos(g),
          m = Math.sin(g);
        if (a) {
          const b = s.mirror ? 0 : m * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = s.mirror ? 0 : p * d.width + m * u.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, h, m, p);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            e.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, e, s, n) {
    const {
        ticks: { align: o, padding: r },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0,
        f = 0;
      l
        ? c
          ? ((u = n * t.width), (f = s * e.height))
          : ((u = s * t.height), (f = n * e.width))
        : o === "start"
        ? (f = e.width)
        : o === "end"
        ? (u = t.width)
        : o !== "inner" && ((u = t.width / 2), (f = e.width / 2)),
        (this.paddingLeft = Math.max(
          ((u - h + r) * this.width) / (this.width - h),
          0
        )),
        (this.paddingRight = Math.max(
          ((f - d + r) * this.width) / (this.width - d),
          0
        ));
    } else {
      let h = e.height / 2,
        d = t.height / 2;
      o === "start"
        ? ((h = 0), (d = t.height))
        : o === "end" && ((h = e.height), (d = 0)),
        (this.paddingTop = h + r),
        (this.paddingBottom = d + r);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    z(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      T(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = Ds(s, e)),
        (this._labelSizes = t = this._computeLabelSizes(s, s.length));
    }
    return t;
  }
  _computeLabelSizes(t, e) {
    const { ctx: s, _longestTextCache: n } = this,
      o = [],
      r = [];
    let a = 0,
      l = 0,
      c,
      h,
      d,
      u,
      f,
      g,
      p,
      m,
      b,
      x,
      v;
    for (c = 0; c < e; ++c) {
      if (
        ((u = t[c].label),
        (f = this._resolveTickFontOptions(c)),
        (s.font = g = f.string),
        (p = n[g] = n[g] || { data: {}, gc: [] }),
        (m = f.lineHeight),
        (b = x = 0),
        !T(u) && !B(u))
      )
        (b = Fe(s, p.data, p.gc, b, u)), (x = m);
      else if (B(u))
        for (h = 0, d = u.length; h < d; ++h)
          (v = u[h]),
            !T(v) && !B(v) && ((b = Fe(s, p.data, p.gc, b, v)), (x += m));
      o.push(b), r.push(x), (a = Math.max(b, a)), (l = Math.max(x, l));
    }
    Ca(n, e);
    const y = o.indexOf(a),
      _ = r.indexOf(l),
      w = (M) => ({ width: o[M] || 0, height: r[M] || 0 });
    return {
      first: w(0),
      last: w(e - 1),
      widest: w(y),
      highest: w(_),
      widths: o,
      heights: r,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return ko(this._alignToPixels ? Ct(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return s.$context || (s.$context = Aa(this.getContext(), t, s));
    }
    return this.$context || (this.$context = Da(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      e = st(this.labelRotation),
      s = Math.abs(Math.cos(e)),
      n = Math.abs(Math.sin(e)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      a = o ? o.widest.width + r : 0,
      l = o ? o.highest.height + r : 0;
    return this.isHorizontal()
      ? l * s > a * n
        ? a / s
        : l / n
      : l * n < a * s
      ? l / s
      : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      s = this.chart,
      n = this.options,
      { grid: o, position: r } = n,
      a = o.offset,
      l = this.isHorizontal(),
      h = this.ticks.length + (a ? 1 : 0),
      d = Kt(o),
      u = [],
      f = o.setContext(this.getContext()),
      g = f.drawBorder ? f.borderWidth : 0,
      p = g / 2,
      m = function (C) {
        return Ct(s, C, g);
      };
    let b, x, v, y, _, w, M, S, k, R, E, O;
    if (r === "top")
      (b = m(this.bottom)),
        (w = this.bottom - d),
        (S = b - p),
        (R = m(t.top) + p),
        (O = t.bottom);
    else if (r === "bottom")
      (b = m(this.top)),
        (R = t.top),
        (O = m(t.bottom) - p),
        (w = b + p),
        (S = this.top + d);
    else if (r === "left")
      (b = m(this.right)),
        (_ = this.right - d),
        (M = b - p),
        (k = m(t.left) + p),
        (E = t.right);
    else if (r === "right")
      (b = m(this.left)),
        (k = t.left),
        (E = m(t.right) - p),
        (_ = b + p),
        (M = this.left + d);
    else if (e === "x") {
      if (r === "center") b = m((t.top + t.bottom) / 2 + 0.5);
      else if (A(r)) {
        const C = Object.keys(r)[0],
          $ = r[C];
        b = m(this.chart.scales[C].getPixelForValue($));
      }
      (R = t.top), (O = t.bottom), (w = b + p), (S = w + d);
    } else if (e === "y") {
      if (r === "center") b = m((t.left + t.right) / 2);
      else if (A(r)) {
        const C = Object.keys(r)[0],
          $ = r[C];
        b = m(this.chart.scales[C].getPixelForValue($));
      }
      (_ = b - p), (M = _ - d), (k = t.left), (E = t.right);
    }
    const j = D(n.ticks.maxTicksLimit, h),
      G = Math.max(1, Math.ceil(h / j));
    for (x = 0; x < h; x += G) {
      const C = o.setContext(this.getContext(x)),
        $ = C.lineWidth,
        N = C.color,
        Pt = C.borderDash || [],
        ei = C.borderDashOffset,
        It = C.tickWidth,
        be = C.tickColor,
        zt = C.tickBorderDash || [],
        Yt = C.tickBorderDashOffset;
      (v = Pa(this, x, a)),
        v !== void 0 &&
          ((y = Ct(s, v, $)),
          l ? (_ = M = k = E = y) : (w = S = R = O = y),
          u.push({
            tx1: _,
            ty1: w,
            tx2: M,
            ty2: S,
            x1: k,
            y1: R,
            x2: E,
            y2: O,
            width: $,
            color: N,
            borderDash: Pt,
            borderDashOffset: ei,
            tickWidth: It,
            tickColor: be,
            tickBorderDash: zt,
            tickBorderDashOffset: Yt,
          }));
    }
    return (this._ticksLength = h), (this._borderValue = b), u;
  }
  _computeLabelItems(t) {
    const e = this.axis,
      s = this.options,
      { position: n, ticks: o } = s,
      r = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: h, mirror: d } = o,
      u = Kt(s.grid),
      f = u + h,
      g = d ? -h : f,
      p = -st(this.labelRotation),
      m = [];
    let b,
      x,
      v,
      y,
      _,
      w,
      M,
      S,
      k,
      R,
      E,
      O,
      j = "middle";
    if (n === "top")
      (w = this.bottom - g), (M = this._getXAxisLabelAlignment());
    else if (n === "bottom")
      (w = this.top + g), (M = this._getXAxisLabelAlignment());
    else if (n === "left") {
      const C = this._getYAxisLabelAlignment(u);
      (M = C.textAlign), (_ = C.x);
    } else if (n === "right") {
      const C = this._getYAxisLabelAlignment(u);
      (M = C.textAlign), (_ = C.x);
    } else if (e === "x") {
      if (n === "center") w = (t.top + t.bottom) / 2 + f;
      else if (A(n)) {
        const C = Object.keys(n)[0],
          $ = n[C];
        w = this.chart.scales[C].getPixelForValue($) + f;
      }
      M = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center") _ = (t.left + t.right) / 2 - f;
      else if (A(n)) {
        const C = Object.keys(n)[0],
          $ = n[C];
        _ = this.chart.scales[C].getPixelForValue($);
      }
      M = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? (j = "top") : l === "end" && (j = "bottom"));
    const G = this._getLabelSizes();
    for (b = 0, x = a.length; b < x; ++b) {
      (v = a[b]), (y = v.label);
      const C = o.setContext(this.getContext(b));
      (S = this.getPixelForTick(b) + o.labelOffset),
        (k = this._resolveTickFontOptions(b)),
        (R = k.lineHeight),
        (E = B(y) ? y.length : 1);
      const $ = E / 2,
        N = C.color,
        Pt = C.textStrokeColor,
        ei = C.textStrokeWidth;
      let It = M;
      r
        ? ((_ = S),
          M === "inner" &&
            (b === x - 1
              ? (It = this.options.reverse ? "left" : "right")
              : b === 0
              ? (It = this.options.reverse ? "right" : "left")
              : (It = "center")),
          n === "top"
            ? c === "near" || p !== 0
              ? (O = -E * R + R / 2)
              : c === "center"
              ? (O = -G.highest.height / 2 - $ * R + R)
              : (O = -G.highest.height + R / 2)
            : c === "near" || p !== 0
            ? (O = R / 2)
            : c === "center"
            ? (O = G.highest.height / 2 - $ * R)
            : (O = G.highest.height - E * R),
          d && (O *= -1))
        : ((w = S), (O = ((1 - E) * R) / 2));
      let be;
      if (C.showLabelBackdrop) {
        const zt = q(C.backdropPadding),
          Yt = G.heights[b],
          ii = G.widths[b];
        let si = w + O - zt.top,
          ni = _ - zt.left;
        switch (j) {
          case "middle":
            si -= Yt / 2;
            break;
          case "bottom":
            si -= Yt;
            break;
        }
        switch (M) {
          case "center":
            ni -= ii / 2;
            break;
          case "right":
            ni -= ii;
            break;
        }
        be = {
          left: ni,
          top: si,
          width: ii + zt.width,
          height: Yt + zt.height,
          color: C.backdropColor,
        };
      }
      m.push({
        rotation: p,
        label: y,
        font: k,
        color: N,
        strokeColor: Pt,
        strokeWidth: ei,
        textOffset: O,
        textAlign: It,
        textBaseline: j,
        translation: [_, w],
        backdrop: be,
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-st(this.labelRotation)) return t === "top" ? "left" : "right";
    let n = "center";
    return (
      e.align === "start"
        ? (n = "left")
        : e.align === "end"
        ? (n = "right")
        : e.align === "inner" && (n = "inner"),
      n
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: s, mirror: n, padding: o },
      } = this.options,
      r = this._getLabelSizes(),
      a = t + o,
      l = r.widest.width;
    let c, h;
    return (
      e === "left"
        ? n
          ? ((h = this.right + o),
            s === "near"
              ? (c = "left")
              : s === "center"
              ? ((c = "center"), (h += l / 2))
              : ((c = "right"), (h += l)))
          : ((h = this.right - a),
            s === "near"
              ? (c = "right")
              : s === "center"
              ? ((c = "center"), (h -= l / 2))
              : ((c = "left"), (h = this.left)))
        : e === "right"
        ? n
          ? ((h = this.left + o),
            s === "near"
              ? (c = "right")
              : s === "center"
              ? ((c = "center"), (h -= l / 2))
              : ((c = "left"), (h -= l)))
          : ((h = this.left + a),
            s === "near"
              ? (c = "left")
              : s === "center"
              ? ((c = "center"), (h += l / 2))
              : ((c = "right"), (h = this.right)))
        : (c = "right"),
      { textAlign: c, x: h }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    if (e === "left" || e === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (e === "top" || e === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: s,
      top: n,
      width: o,
      height: r,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(s, n, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      s = this.ctx,
      n =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width ||
        !h.color ||
        (s.save(),
        (s.lineWidth = h.width),
        (s.strokeStyle = h.color),
        s.setLineDash(h.borderDash || []),
        (s.lineDashOffset = h.borderDashOffset),
        s.beginPath(),
        s.moveTo(l.x, l.y),
        s.lineTo(c.x, c.y),
        s.stroke(),
        s.restore());
    };
    if (e.display)
      for (o = 0, r = n.length; o < r; ++o) {
        const l = n[o];
        e.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          e.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { grid: s },
      } = this,
      n = s.setContext(this.getContext()),
      o = s.drawBorder ? n.borderWidth : 0;
    if (!o) return;
    const r = s.setContext(this.getContext(0)).lineWidth,
      a = this._borderValue;
    let l, c, h, d;
    this.isHorizontal()
      ? ((l = Ct(t, this.left, o) - o / 2),
        (c = Ct(t, this.right, r) + r / 2),
        (h = d = a))
      : ((h = Ct(t, this.top, o) - o / 2),
        (d = Ct(t, this.bottom, r) + r / 2),
        (l = c = a)),
      e.save(),
      (e.lineWidth = n.borderWidth),
      (e.strokeStyle = n.borderColor),
      e.beginPath(),
      e.moveTo(l, h),
      e.lineTo(c, d),
      e.stroke(),
      e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const s = this.ctx,
      n = this._computeLabelArea();
    n && Ne(s, n);
    const o =
      this._labelItems || (this._labelItems = this._computeLabelItems(t));
    let r, a;
    for (r = 0, a = o.length; r < a; ++r) {
      const l = o[r],
        c = l.font,
        h = l.label;
      l.backdrop &&
        ((s.fillStyle = l.backdrop.color),
        s.fillRect(
          l.backdrop.left,
          l.backdrop.top,
          l.backdrop.width,
          l.backdrop.height
        ));
      let d = l.textOffset;
      Et(s, h, 0, d, c, l);
    }
    n && He(s);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: s, reverse: n },
    } = this;
    if (!s.display) return;
    const o = Y(s.font),
      r = q(s.padding),
      a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || A(e)
      ? ((l += r.bottom),
        B(s.text) && (l += o.lineHeight * (s.text.length - 1)))
      : (l += r.top);
    const {
      titleX: c,
      titleY: h,
      maxWidth: d,
      rotation: u,
    } = La(this, l, e, a);
    Et(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: u,
      textAlign: Oa(a, e, n),
      textBaseline: "middle",
      translation: [c, h],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      s = D(t.grid && t.grid.z, -1);
    return !this._isVisible() || this.draw !== Ft.prototype.draw
      ? [
          {
            z: e,
            draw: (n) => {
              this.draw(n);
            },
          },
        ]
      : [
          {
            z: s,
            draw: (n) => {
              this.drawBackground(), this.drawGrid(n), this.drawTitle();
            },
          },
          {
            z: s + 1,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: (n) => {
              this.drawLabels(n);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      s = this.axis + "AxisID",
      n = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[s] === this.id && (!t || a.type === t) && n.push(a);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return Y(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class ke {
  constructor(t, e, s) {
    (this.type = t),
      (this.scope = e),
      (this.override = s),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    Ea(e) && (s = this.register(e));
    const n = this.items,
      o = t.id,
      r = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return (
      o in n ||
        ((n[o] = t),
        Ta(t, r, s),
        this.override && L.override(t.id, t.overrides)),
      r
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      s = t.id,
      n = this.scope;
    s in e && delete e[s],
      n && s in L[n] && (delete L[n][s], this.override && delete Rt[s]);
  }
}
function Ta(i, t, e) {
  const s = re(Object.create(null), [e ? L.get(e) : {}, L.get(t), i.defaults]);
  L.set(t, s),
    i.defaultRoutes && Ra(t, i.defaultRoutes),
    i.descriptors && L.describe(t, i.descriptors);
}
function Ra(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."),
      n = s.pop(),
      o = [i].concat(s).join("."),
      r = t[e].split("."),
      a = r.pop(),
      l = r.join(".");
    L.route(o, n, l, a);
  });
}
function Ea(i) {
  return "id" in i && "defaults" in i;
}
class Fa {
  constructor() {
    (this.controllers = new ke(nt, "datasets", !0)),
      (this.elements = new ke(ot, "elements")),
      (this.plugins = new ke(Object, "plugins")),
      (this.scales = new ke(Ft, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, s) {
    [...e].forEach((n) => {
      const o = s || this._getRegistryForType(n);
      s || o.isForType(n) || (o === this.plugins && n.id)
        ? this._exec(t, o, n)
        : F(n, (r) => {
            const a = s || this._getRegistryForType(r);
            this._exec(t, a, r);
          });
    });
  }
  _exec(t, e, s) {
    const n = Li(t);
    z(s["before" + n], [], s), e[t](s), z(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t)) return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const n = e.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
}
var at = new Fa();
class Ge extends nt {
  update(t) {
    const e = this._cachedMeta,
      { data: s = [] } = e,
      n = this.chart._animationsDisabled;
    let { start: o, count: r } = xn(e, s, n);
    if (
      ((this._drawStart = o),
      (this._drawCount = r),
      _n(e) && ((o = 0), (r = s.length)),
      this.options.showLine)
    ) {
      const { dataset: a, _dataset: l } = e;
      (a._chart = this.chart),
        (a._datasetIndex = this.index),
        (a._decimated = !!l._decimated),
        (a.points = s);
      const c = this.resolveDatasetElementOptions(t);
      (c.segment = this.options.segment),
        this.updateElement(a, void 0, { animated: !n, options: c }, t);
    }
    this.updateElements(s, o, r, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType &&
      t &&
      (this.datasetElementType = at.getElement("line")),
      super.addElements();
  }
  updateElements(t, e, s, n) {
    const o = n === "reset",
      { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      h = this.resolveDataElementOptions(e, n),
      d = this.getSharedOptions(h),
      u = this.includeOptions(n, d),
      f = r.axis,
      g = a.axis,
      { spanGaps: p, segment: m } = this.options,
      b = Nt(p) ? p : Number.POSITIVE_INFINITY,
      x = this.chart._animationsDisabled || o || n === "none";
    let v = e > 0 && this.getParsed(e - 1);
    for (let y = e; y < e + s; ++y) {
      const _ = t[y],
        w = this.getParsed(y),
        M = x ? _ : {},
        S = T(w[g]),
        k = (M[f] = r.getPixelForValue(w[f], y)),
        R = (M[g] =
          o || S
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, w, l) : w[g], y));
      (M.skip = isNaN(k) || isNaN(R) || S),
        (M.stop = y > 0 && Math.abs(w[f] - v[f]) > b),
        m && ((M.parsed = w), (M.raw = c.data[y])),
        u &&
          (M.options =
            d || this.resolveDataElementOptions(y, _.active ? "active" : n)),
        x || this.updateElement(_, y, M, n),
        (v = w);
    }
    this.updateSharedOptions(d, n, h);
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let l = e.length - 1; l >= 0; --l)
        a = Math.max(a, e[l].size(this.resolveDataElementOptions(l)) / 2);
      return a > 0 && a;
    }
    const s = t.dataset,
      n = (s.options && s.options.borderWidth) || 0;
    if (!e.length) return n;
    const o = e[0].size(this.resolveDataElementOptions(0)),
      r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(n, o, r) / 2;
  }
}
Ge.id = "scatter";
Ge.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1,
};
Ge.overrides = {
  interaction: { mode: "point" },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(i) {
          return "(" + i.label + ", " + i.formattedValue + ")";
        },
      },
    },
  },
  scales: { x: { type: "linear" }, y: { type: "linear" } },
};
var Ia = Object.freeze({
  __proto__: null,
  BarController: $e,
  BubbleController: Ye,
  DoughnutController: $t,
  LineController: Xe,
  PolarAreaController: Ue,
  PieController: ji,
  RadarController: Ke,
  ScatterController: Ge,
});
function Dt() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class Mi {
  constructor(t) {
    this.options = t || {};
  }
  init(t) {}
  formats() {
    return Dt();
  }
  parse(t, e) {
    return Dt();
  }
  format(t, e) {
    return Dt();
  }
  add(t, e, s) {
    return Dt();
  }
  diff(t, e, s) {
    return Dt();
  }
  startOf(t, e, s) {
    return Dt();
  }
  endOf(t, e) {
    return Dt();
  }
}
Mi.override = function (i) {
  Object.assign(Mi.prototype, i);
};
var za = { _date: Mi };
function Ba(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i,
    a = n._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? So : mt;
    if (s) {
      if (n._sharedOptions) {
        const c = o[0],
          h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const d = l(o, t, e - h),
            u = l(o, t, e + h);
          return { lo: d.lo, hi: u.hi };
        }
      }
    } else return l(o, t, e);
  }
  return { lo: 0, hi: o.length - 1 };
}
function ge(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(),
    r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a],
      { lo: d, hi: u } = Ba(o[a], t, r, n);
    for (let f = d; f <= u; ++f) {
      const g = h[f];
      g.skip || s(g, c, f);
    }
  }
}
function Va(i) {
  const t = i.indexOf("x") !== -1,
    e = i.indexOf("y") !== -1;
  return function (s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0,
      r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function fi(i, t, e, s, n) {
  const o = [];
  return (
    (!n && !i.isPointInArea(t)) ||
      ge(
        i,
        e,
        t,
        function (a, l, c) {
          (!n && !le(a, i.chartArea, 0)) ||
            (a.inRange(t.x, t.y, s) &&
              o.push({ element: a, datasetIndex: l, index: c }));
        },
        !0
      ),
    o
  );
}
function Wa(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps(
        ["startAngle", "endAngle"],
        s
      ),
      { angle: d } = fn(r, { x: t.x, y: t.y });
    ae(d, c, h) && n.push({ element: r, datasetIndex: a, index: l });
  }
  return ge(i, e, t, o), n;
}
function Na(i, t, e, s, n, o) {
  let r = [];
  const a = Va(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, u) {
    const f = h.inRange(t.x, t.y, n);
    if (s && !f) return;
    const g = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(g)) && !f) return;
    const m = a(t, g);
    m < l
      ? ((r = [{ element: h, datasetIndex: d, index: u }]), (l = m))
      : m === l && r.push({ element: h, datasetIndex: d, index: u });
  }
  return ge(i, e, t, c), r;
}
function gi(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t)
    ? []
    : e === "r" && !s
    ? Wa(i, t, e, n)
    : Na(i, t, e, s, n, o);
}
function Os(i, t, e, s, n) {
  const o = [],
    r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    ge(i, e, t, (l, c, h) => {
      l[r](t[e], n) &&
        (o.push({ element: l, datasetIndex: c, index: h }),
        (a = a || l.inRange(t.x, t.y, n)));
    }),
    s && !a ? [] : o
  );
}
var Ha = {
  evaluateInteractionItems: ge,
  modes: {
    index(i, t, e, s) {
      const n = At(t, i),
        o = e.axis || "x",
        r = e.includeInvisible || !1,
        a = e.intersect ? fi(i, n, o, s, r) : gi(i, n, o, !1, s, r),
        l = [];
      return a.length
        ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
            const h = a[0].index,
              d = c.data[h];
            d &&
              !d.skip &&
              l.push({ element: d, datasetIndex: c.index, index: h });
          }),
          l)
        : [];
    },
    dataset(i, t, e, s) {
      const n = At(t, i),
        o = e.axis || "xy",
        r = e.includeInvisible || !1;
      let a = e.intersect ? fi(i, n, o, s, r) : gi(i, n, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({ element: c[h], datasetIndex: l, index: h });
      }
      return a;
    },
    point(i, t, e, s) {
      const n = At(t, i),
        o = e.axis || "xy",
        r = e.includeInvisible || !1;
      return fi(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = At(t, i),
        o = e.axis || "xy",
        r = e.includeInvisible || !1;
      return gi(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = At(t, i);
      return Os(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = At(t, i);
      return Os(i, n, "y", e.intersect, s);
    },
  },
};
const jn = ["left", "top", "right", "bottom"];
function qt(i, t) {
  return i.filter((e) => e.pos === t);
}
function Ls(i, t) {
  return i.filter((e) => jn.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Gt(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e,
      o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function ja(i) {
  const t = [];
  let e, s, n, o, r, a;
  for (e = 0, s = (i || []).length; e < s; ++e)
    (n = i[e]),
      ({
        position: o,
        options: { stack: r, stackWeight: a = 1 },
      } = n),
      t.push({
        index: e,
        box: n,
        pos: o,
        horizontal: n.isHorizontal(),
        weight: n.weight,
        stack: r && o + r,
        stackWeight: a,
      });
  return t;
}
function $a(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !jn.includes(n)) continue;
    const r = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    r.count++, (r.weight += o);
  }
  return t;
}
function Ya(i, t) {
  const e = $a(i),
    { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box,
      c = e[a.stack],
      h = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = h ? h * s : l && t.availableWidth), (a.height = n))
      : ((a.width = s), (a.height = h ? h * n : l && t.availableHeight));
  }
  return e;
}
function Xa(i) {
  const t = ja(i),
    e = Gt(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    s = Gt(qt(t, "left"), !0),
    n = Gt(qt(t, "right")),
    o = Gt(qt(t, "top"), !0),
    r = Gt(qt(t, "bottom")),
    a = Ls(t, "x"),
    l = Ls(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: qt(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a),
  };
}
function Ts(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function $n(i, t) {
  (i.top = Math.max(i.top, t.top)),
    (i.left = Math.max(i.left, t.left)),
    (i.bottom = Math.max(i.bottom, t.bottom)),
    (i.right = Math.max(i.right, t.right));
}
function Ua(i, t, e, s) {
  const { pos: n, box: o } = e,
    r = i.maxPadding;
  if (!A(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, e.horizontal ? o.height : o.width)),
      (e.size = d.size / d.count),
      (i[n] += e.size);
  }
  o.getPadding && $n(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Ts(r, i, "left", "right")),
    l = Math.max(0, t.outerHeight - Ts(r, i, "top", "bottom")),
    c = a !== i.w,
    h = l !== i.h;
  return (
    (i.w = a),
    (i.h = l),
    e.horizontal ? { same: c, other: h } : { same: h, other: c }
  );
}
function Ka(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return (i[s] += n), n;
  }
  (i.y += e("top")), (i.x += e("left")), e("right"), e("bottom");
}
function qa(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      n.forEach((r) => {
        o[r] = Math.max(t[r], e[r]);
      }),
      o
    );
  }
  return s(i ? ["left", "right"] : ["top", "bottom"]);
}
function te(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    (a = i[o]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, qa(a.horizontal, t));
    const { same: d, other: u } = Ua(t, e, a, s);
    (c |= d && n.length), (h = h || u), l.fullSize || n.push(a);
  }
  return (c && te(n, t, e, s)) || h;
}
function Se(i, t, e, s, n) {
  (i.top = e),
    (i.left = t),
    (i.right = t + s),
    (i.bottom = e + n),
    (i.width = s),
    (i.height = n);
}
function Rs(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box,
      c = s[a.stack] || { count: 1, placed: 0, weight: 1 },
      h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h,
        u = c.size || l.height;
      it(c.start) && (r = c.start),
        l.fullSize
          ? Se(l, n.left, r, e.outerWidth - n.right - n.left, u)
          : Se(l, t.left + c.placed, r, d, u),
        (c.start = r),
        (c.placed += d),
        (r = l.bottom);
    } else {
      const d = t.h * h,
        u = c.size || l.width;
      it(c.start) && (o = c.start),
        l.fullSize
          ? Se(l, o, n.top, u, e.outerHeight - n.bottom - n.top)
          : Se(l, o, t.top + c.placed, u, d),
        (c.start = o),
        (c.placed += d),
        (o = l.right);
    }
  }
  (t.x = o), (t.y = r);
}
L.set("layout", {
  autoPadding: !0,
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
});
var K = {
  addBox(i, t) {
    i.boxes || (i.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(e) {
                t.draw(e);
              },
            },
          ];
        }),
      i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    (t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight);
  },
  update(i, t, e, s) {
    if (!i) return;
    const n = q(i.options.layout.padding),
      o = Math.max(t - n.width, 0),
      r = Math.max(e - n.height, 0),
      a = Xa(i.boxes),
      l = a.vertical,
      c = a.horizontal;
    F(i.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h =
        l.reduce(
          (p, m) => (m.box.options && m.box.options.display === !1 ? p : p + 1),
          0
        ) || 1,
      d = Object.freeze({
        outerWidth: t,
        outerHeight: e,
        padding: n,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / h,
        hBoxMaxHeight: r / 2,
      }),
      u = Object.assign({}, n);
    $n(u, q(s));
    const f = Object.assign(
        { maxPadding: u, w: o, h: r, x: n.left, y: n.top },
        n
      ),
      g = Ya(l.concat(c), d);
    te(a.fullSize, f, d, g),
      te(l, f, d, g),
      te(c, f, d, g) && te(l, f, d, g),
      Ka(f),
      Rs(a.leftAndTop, f, d, g),
      (f.x += f.w),
      (f.y += f.h),
      Rs(a.rightAndBottom, f, d, g),
      (i.chartArea = {
        left: f.left,
        top: f.top,
        right: f.left + f.w,
        bottom: f.top + f.h,
        height: f.h,
        width: f.w,
      }),
      F(a.chartArea, (p) => {
        const m = p.box;
        Object.assign(m, i.chartArea),
          m.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Yn {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {}
  removeEventListener(t, e, s) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return (
      (e = Math.max(0, e || t.width)),
      (s = s || t.height),
      { width: e, height: Math.max(0, n ? Math.floor(e / n) : s) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Ga extends Yn {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Oe = "$chartjs",
  Za = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Es = (i) => i === null || i === "";
function Ja(i, t) {
  const e = i.style,
    s = i.getAttribute("height"),
    n = i.getAttribute("width");
  if (
    ((i[Oe] = {
      initial: {
        height: s,
        width: n,
        style: { display: e.display, height: e.height, width: e.width },
      },
    }),
    (e.display = e.display || "block"),
    (e.boxSizing = e.boxSizing || "border-box"),
    Es(n))
  ) {
    const o = us(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Es(s))
    if (i.style.height === "") i.height = i.width / (t || 2);
    else {
      const o = us(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Xn = Tr ? { passive: !0 } : !1;
function Qa(i, t, e) {
  i.addEventListener(t, e, Xn);
}
function tl(i, t, e) {
  i.canvas.removeEventListener(t, e, Xn);
}
function el(i, t) {
  const e = Za[i.type] || i.type,
    { x: s, y: n } = At(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null,
  };
}
function ze(i, t) {
  for (const e of i) if (e === t || e.contains(t)) return !0;
}
function il(i, t, e) {
  const s = i.canvas,
    n = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || ze(a.addedNodes, s)), (r = r && !ze(a.removedNodes, s));
      r && e();
    });
  return n.observe(document, { childList: !0, subtree: !0 }), n;
}
function sl(i, t, e) {
  const s = i.canvas,
    n = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || ze(a.removedNodes, s)), (r = r && !ze(a.addedNodes, s));
      r && e();
    });
  return n.observe(document, { childList: !0, subtree: !0 }), n;
}
const he = new Map();
let Fs = 0;
function Un() {
  const i = window.devicePixelRatio;
  i !== Fs &&
    ((Fs = i),
    he.forEach((t, e) => {
      e.currentDevicePixelRatio !== i && t();
    }));
}
function nl(i, t) {
  he.size || window.addEventListener("resize", Un), he.set(i, t);
}
function ol(i) {
  he.delete(i), he.size || window.removeEventListener("resize", Un);
}
function rl(i, t, e) {
  const s = i.canvas,
    n = s && Hi(s);
  if (!n) return;
  const o = bn((a, l) => {
      const c = n.clientWidth;
      e(a, l), c < n.clientWidth && e();
    }, window),
    r = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        h = l.contentRect.height;
      (c === 0 && h === 0) || o(c, h);
    });
  return r.observe(n), nl(i, o), r;
}
function pi(i, t, e) {
  e && e.disconnect(), t === "resize" && ol(i);
}
function al(i, t, e) {
  const s = i.canvas,
    n = bn(
      (o) => {
        i.ctx !== null && e(el(o, i));
      },
      i,
      (o) => {
        const r = o[0];
        return [r, r.offsetX, r.offsetY];
      }
    );
  return Qa(s, t, n), n;
}
class ll extends Yn {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Ja(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Oe]) return !1;
    const s = e[Oe].initial;
    ["height", "width"].forEach((o) => {
      const r = s[o];
      T(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return (
      Object.keys(n).forEach((o) => {
        e.style[o] = n[o];
      }),
      (e.width = e.width),
      delete e[Oe],
      !0
    );
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}),
      r = { attach: il, detach: sl, resize: rl }[e] || al;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}),
      n = s[e];
    if (!n) return;
    (({ attach: pi, detach: pi, resize: pi })[e] || tl)(t, e, n),
      (s[e] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Lr(t, e, s, n);
  }
  isAttached(t) {
    const e = Hi(t);
    return !!(e && e.isConnected);
  }
}
function cl(i) {
  return !Rn() || (typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas)
    ? Ga
    : ll;
}
class hl {
  constructor() {
    this._init = [];
  }
  notify(t, e, s, n) {
    e === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t),
      r = this._notify(o, t, e, s);
    return (
      e === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      r
    );
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const o of t) {
      const r = o.plugin,
        a = r[s],
        l = [e, n, o.options];
      if (z(a, l, r) === !1 && n.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    T(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config,
      n = D(s.options && s.options.plugins, {}),
      o = dl(s);
    return n === !1 && !e ? [] : fl(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      s = this._cache,
      n = (o, r) =>
        o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function dl(i) {
  const t = {},
    e = [],
    s = Object.keys(at.plugins.items);
  for (let o = 0; o < s.length; o++) e.push(at.getPlugin(s[o]));
  const n = i.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    e.indexOf(r) === -1 && (e.push(r), (t[r.id] = !0));
  }
  return { plugins: e, localIds: t };
}
function ul(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function fl(i, { plugins: t, localIds: e }, s, n) {
  const o = [],
    r = i.getContext();
  for (const a of t) {
    const l = a.id,
      c = ul(s[l], n);
    c !== null &&
      o.push({
        plugin: a,
        options: gl(i.config, { plugin: a, local: e[l] }, c, r),
      });
  }
  return o;
}
function gl(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t),
    r = i.getOptionScopes(s, o);
  return (
    e && t.defaults && r.push(t.defaults),
    i.createResolver(r, n, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function ki(i, t) {
  const e = L.datasets[i] || {};
  return (
    ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
  );
}
function pl(i, t) {
  let e = i;
  return (
    i === "_index_" ? (e = t) : i === "_value_" && (e = t === "x" ? "y" : "x"),
    e
  );
}
function ml(i, t) {
  return i === t ? "_index_" : "_value_";
}
function bl(i) {
  if (i === "top" || i === "bottom") return "x";
  if (i === "left" || i === "right") return "y";
}
function Si(i, t) {
  return i === "x" || i === "y"
    ? i
    : t.axis || bl(t.position) || i.charAt(0).toLowerCase();
}
function xl(i, t) {
  const e = Rt[i.type] || { scales: {} },
    s = t.scales || {},
    n = ki(i.type, t),
    o = Object.create(null),
    r = Object.create(null);
  return (
    Object.keys(s).forEach((a) => {
      const l = s[a];
      if (!A(l))
        return console.error(`Invalid scale configuration for scale: ${a}`);
      if (l._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${a}`
        );
      const c = Si(a, l),
        h = ml(c, n),
        d = e.scales || {};
      (o[c] = o[c] || a),
        (r[a] = ee(Object.create(null), [{ axis: c }, l, d[c], d[h]]));
    }),
    i.data.datasets.forEach((a) => {
      const l = a.type || i.type,
        c = a.indexAxis || ki(l, t),
        d = (Rt[l] || {}).scales || {};
      Object.keys(d).forEach((u) => {
        const f = pl(u, c),
          g = a[f + "AxisID"] || o[f] || f;
        (r[g] = r[g] || Object.create(null)),
          ee(r[g], [{ axis: f }, s[g], d[u]]);
      });
    }),
    Object.keys(r).forEach((a) => {
      const l = r[a];
      ee(l, [L.scales[l.type], L.scale]);
    }),
    r
  );
}
function Kn(i) {
  const t = i.options || (i.options = {});
  (t.plugins = D(t.plugins, {})), (t.scales = xl(i, t));
}
function qn(i) {
  return (
    (i = i || {}),
    (i.datasets = i.datasets || []),
    (i.labels = i.labels || []),
    i
  );
}
function _l(i) {
  return (i = i || {}), (i.data = qn(i.data)), Kn(i), i;
}
const Is = new Map(),
  Gn = new Set();
function Pe(i, t) {
  let e = Is.get(i);
  return e || ((e = t()), Is.set(i, e), Gn.add(e)), e;
}
const Zt = (i, t, e) => {
  const s = wt(t, e);
  s !== void 0 && i.add(s);
};
class yl {
  constructor(t) {
    (this._config = _l(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = qn(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Kn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Pe(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Pe(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Pe(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id,
      s = this.type;
    return Pe(`${s}-plugin-${e}`, () => [
      [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let n = s.get(t);
    return (!n || e) && ((n = new Map()), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    const { options: n, type: o } = this,
      r = this._cachedScopes(t, s),
      a = r.get(e);
    if (a) return a;
    const l = new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => Zt(l, t, d))),
        h.forEach((d) => Zt(l, n, d)),
        h.forEach((d) => Zt(l, Rt[o] || {}, d)),
        h.forEach((d) => Zt(l, L, d)),
        h.forEach((d) => Zt(l, vi, d));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), Gn.has(e) && r.set(e, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, Rt[e] || {}, L.datasets[e] || {}, { type: e }, L, vi];
  }
  resolveNamedOptions(t, e, s, n = [""]) {
    const o = { $shared: !0 },
      { resolver: r, subPrefixes: a } = zs(this._resolverCache, t, n);
    let l = r;
    if (wl(r, e)) {
      (o.$shared = !1), (s = Mt(s) ? s() : s);
      const c = this.createResolver(t, s, a);
      l = Ht(r, s, c);
    }
    for (const c of e) o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [""], n) {
    const { resolver: o } = zs(this._resolverCache, t, s);
    return A(e) ? Ht(o, e, void 0, n) : o;
  }
}
function zs(i, t, e) {
  let s = i.get(t);
  s || ((s = new Map()), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return (
    o ||
      ((o = {
        resolver: Vi(t, e),
        subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      s.set(n, o)),
    o
  );
}
const vl = (i) =>
  A(i) && Object.getOwnPropertyNames(i).reduce((t, e) => t || Mt(i[e]), !1);
function wl(i, t) {
  const { isScriptable: e, isIndexable: s } = Cn(i);
  for (const n of t) {
    const o = e(n),
      r = s(n),
      a = (r || o) && i[n];
    if ((o && (Mt(a) || vl(a))) || (r && B(a))) return !0;
  }
  return !1;
}
var Ml = "3.9.1";
const kl = ["top", "bottom", "left", "right", "chartArea"];
function Bs(i, t) {
  return i === "top" || i === "bottom" || (kl.indexOf(i) === -1 && t === "x");
}
function Vs(i, t) {
  return function (e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function Ws(i) {
  const t = i.chart,
    e = t.options.animation;
  t.notifyPlugins("afterRender"), z(e && e.onComplete, [i], t);
}
function Sl(i) {
  const t = i.chart,
    e = t.options.animation;
  z(e && e.onProgress, [i], t);
}
function Zn(i) {
  return (
    Rn() && typeof i == "string"
      ? (i = document.getElementById(i))
      : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const Be = {},
  Jn = (i) => {
    const t = Zn(i);
    return Object.values(Be)
      .filter((e) => e.canvas === t)
      .pop();
  };
function Pl(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Cl(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
class de {
  constructor(t, e) {
    const s = (this.config = new yl(e)),
      n = Zn(t),
      o = Jn(n);
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          o.id +
          "' must be destroyed before the canvas with ID '" +
          o.canvas.id +
          "' can be reused."
      );
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    (this.platform = new (s.platform || cl(n))()),
      this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio),
      l = a && a.canvas,
      c = l && l.height,
      h = l && l.width;
    if (
      ((this.id = uo()),
      (this.ctx = a),
      (this.canvas = l),
      (this.width = h),
      (this.height = c),
      (this._options = r),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new hl()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = Do((d) => this.update(d), r.resizeDelay || 0)),
      (this._dataChanges = []),
      (Be[this.id] = this),
      !a || !l)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item"
      );
      return;
    }
    ut.listen(this, "complete", Ws),
      ut.listen(this, "progress", Sl),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: e },
      width: s,
      height: n,
      _aspectRatio: o,
    } = this;
    return T(t) ? (e && o ? o : n ? s / n : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : ds(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return ls(this.canvas, this.ctx), this;
  }
  stop() {
    return ut.stop(this), this;
  }
  resize(t, e) {
    ut.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: e })
      : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options,
      n = this.canvas,
      o = s.maintainAspectRatio && this.aspectRatio,
      r = this.platform.getMaximumSize(n, t, e, o),
      a = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
      l = this.width ? "resize" : "attach";
    (this.width = r.width),
      (this.height = r.height),
      (this._aspectRatio = this.aspectRatio),
      ds(this, a, !0) &&
        (this.notifyPlugins("resize", { size: r }),
        z(s.onResize, [this, r], this),
        this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    F(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      e = t.scales,
      s = this.scales,
      n = Object.keys(s).reduce((r, a) => ((r[a] = !1), r), {});
    let o = [];
    e &&
      (o = o.concat(
        Object.keys(e).map((r) => {
          const a = e[r],
            l = Si(r, a),
            c = l === "r",
            h = l === "x";
          return {
            options: a,
            dposition: c ? "chartArea" : h ? "bottom" : "left",
            dtype: c ? "radialLinear" : h ? "category" : "linear",
          };
        })
      )),
      F(o, (r) => {
        const a = r.options,
          l = a.id,
          c = Si(l, a),
          h = D(a.type, r.dtype);
        (a.position === void 0 || Bs(a.position, c) !== Bs(r.dposition)) &&
          (a.position = r.dposition),
          (n[l] = !0);
        let d = null;
        if (l in s && s[l].type === h) d = s[l];
        else {
          const u = at.getScale(h);
          (d = new u({ id: l, type: h, ctx: this.ctx, chart: this })),
            (s[d.id] = d);
        }
        d.init(a, t);
      }),
      F(n, (r, a) => {
        r || delete s[a];
      }),
      F(s, (r) => {
        K.configure(this, r, r.options), K.addBox(this, r);
      });
  }
  _updateMetasets() {
    const t = this._metasets,
      e = this.data.datasets.length,
      s = t.length;
    if ((t.sort((n, o) => n.index - o.index), s > e)) {
      for (let n = e; n < s; ++n) this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(Vs("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: e },
    } = this;
    t.length > e.length && delete this._stacks,
      t.forEach((s, n) => {
        e.filter((o) => o === s._dataset).length === 0 &&
          this._destroyDatasetMeta(n);
      });
  }
  buildOrUpdateControllers() {
    const t = [],
      e = this.data.datasets;
    let s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      const o = e[s];
      let r = this.getDatasetMeta(s);
      const a = o.type || this.config.type;
      if (
        (r.type &&
          r.type !== a &&
          (this._destroyDatasetMeta(s), (r = this.getDatasetMeta(s))),
        (r.type = a),
        (r.indexAxis = o.indexAxis || ki(a, this.options)),
        (r.order = o.order || 0),
        (r.index = s),
        (r.label = "" + o.label),
        (r.visible = this.isDatasetVisible(s)),
        r.controller)
      )
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = at.getController(a),
          { datasetElementType: c, dataElementType: h } = L.datasets[a];
        Object.assign(l.prototype, {
          dataElementType: at.getElement(h),
          datasetElementType: c && at.getElement(c),
        }),
          (r.controller = new l(this, s)),
          t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    F(
      this.data.datasets,
      (t, e) => {
        this.getDatasetMeta(e).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = (this._options = e.createResolver(
        e.chartOptionScopes(),
        this.getContext()
      )),
      n = (this._animationsDisabled = !s.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c),
        u = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), (r = Math.max(+d.getMaxOverflow(), r));
    }
    (r = this._minPadding = s.layout.autoPadding ? r : 0),
      this._updateLayout(r),
      n ||
        F(o, (c) => {
          c.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins("afterUpdate", { mode: t }),
      this._layers.sort(Vs("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l
      ? this._eventHandler(l, !0)
      : a.length && this._updateHoverStyles(a, a, !0),
      this.render();
  }
  _updateScales() {
    F(this.scales, (t) => {
      K.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      s = new Set(t.events);
    (!Gi(e, s) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      Pl(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const e = this.data.datasets.length,
      s = (o) =>
        new Set(
          t
            .filter((r) => r[0] === o)
            .map((r, a) => a + "," + r.splice(1).join(","))
        ),
      n = s(0);
    for (let o = 1; o < e; o++) if (!Gi(n, s(o))) return;
    return Array.from(n)
      .map((o) => o.split(","))
      .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    K.update(this, this.width, this.height, t);
    const e = this.chartArea,
      s = e.width <= 0 || e.height <= 0;
    (this._layers = []),
      F(
        this.boxes,
        (n) => {
          (s && n.position === "chartArea") ||
            (n.configure && n.configure(), this._layers.push(...n._layers()));
        },
        this
      ),
      this._layers.forEach((n, o) => {
        n._idx = o;
      }),
      this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: t,
        cancelable: !0,
      }) !== !1
    ) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, Mt(t) ? t({ datasetIndex: e }) : t);
      this.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t),
      n = { meta: s, index: t, mode: e, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 &&
      (s.controller._update(e),
      (n.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (ut.has(this)
        ? this.attached && !ut.running(this) && ut.start(this)
        : (this.draw(), Ws({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: n } = this._resizeBeforeDraw;
      this._resize(s, n), (this._resizeBeforeDraw = null);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets,
      s = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const r = e[n];
      (!t || r.visible) && s.push(r);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx,
      s = t._clip,
      n = !s.disabled,
      o = this.chartArea,
      r = { meta: t, index: t.index, cancelable: !0 };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 &&
      (n &&
        Ne(e, {
          left: s.left === !1 ? 0 : o.left - s.left,
          right: s.right === !1 ? this.width : o.right + s.right,
          top: s.top === !1 ? 0 : o.top - s.top,
          bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom,
        }),
      t.controller.draw(),
      n && He(e),
      (r.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return le(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Ha.modes[e];
    return typeof o == "function" ? o(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t],
      s = this._metasets;
    let n = s.filter((o) => o && o._dataset === e).pop();
    return (
      n ||
        ((n = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (e && e.order) || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        }),
        s.push(n)),
      n
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = kt(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e) return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const n = s ? "show" : "hide",
      o = this.getDatasetMeta(t),
      r = o.controller._resolveAnimations(void 0, n);
    it(e)
      ? ((o.data[e].hidden = !s), this.update())
      : (this.setDatasetVisibility(t, s),
        r.update(o, { visible: s }),
        this.update((a) => (a.datasetIndex === t ? n : void 0)));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (
      this.stop(), ut.remove(this), t = 0, e = this.data.datasets.length;
      t < e;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        ls(t, e),
        this.platform.releaseContext(e),
        (this.canvas = null),
        (this.ctx = null)),
      this.notifyPlugins("destroy"),
      delete Be[this.id],
      this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this._listeners,
      e = this.platform,
      s = (o, r) => {
        e.addEventListener(this, o, r), (t[o] = r);
      },
      n = (o, r, a) => {
        (o.offsetX = r), (o.offsetY = a), this._eventHandler(o);
      };
    F(this.options.events, (o) => s(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      e = this.platform,
      s = (l, c) => {
        e.addEventListener(this, l, c), (t[l] = c);
      },
      n = (l, c) => {
        t[l] && (e.removeEventListener(this, l, c), delete t[l]);
      },
      o = (l, c) => {
        this.canvas && this.resize(l, c);
      };
    let r;
    const a = () => {
      n("attach", a),
        (this.attached = !0),
        this.resize(),
        s("resize", o),
        s("detach", r);
    };
    (r = () => {
      (this.attached = !1),
        n("resize", o),
        this._stop(),
        this._resize(0, 0),
        s("attach", a);
    }),
      e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    F(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }),
      (this._listeners = {}),
      F(this._responsiveListeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let o, r, a, l;
    for (
      e === "dataset" &&
        ((o = this.getDatasetMeta(t[0].datasetIndex)),
        o.controller["_" + n + "DatasetHoverStyle"]()),
        a = 0,
        l = t.length;
      a < l;
      ++a
    ) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [],
      s = t.map(({ datasetIndex: o, index: r }) => {
        const a = this.getDatasetMeta(o);
        if (!a) throw new Error("No dataset found at index " + o);
        return { datasetIndex: o, element: a.data[r], index: r };
      });
    !Le(s, e) &&
      ((this._active = s),
      (this._lastEvent = null),
      this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover,
      o = (l, c) =>
        l.filter(
          (h) =>
            !c.some(
              (d) => h.datasetIndex === d.datasetIndex && h.index === d.index
            )
        ),
      r = o(e, t),
      a = s ? t : o(t, e);
    r.length && this.updateHoverStyle(r, n.mode, !1),
      a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
        event: t,
        replay: e,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      n = (r) =>
        (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1) return;
    const o = this._handleEvent(t, e, s.inChartArea);
    return (
      (s.cancelable = !1),
      this.notifyPlugins("afterEvent", s, n),
      (o || s.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, e, s) {
    const { _active: n = [], options: o } = this,
      r = e,
      a = this._getActiveElements(t, n, s, r),
      l = xo(t),
      c = Cl(t, this._lastEvent, s, l);
    s &&
      ((this._lastEvent = null),
      z(o.onHover, [t, a, this], this),
      l && z(o.onClick, [t, a, this], this));
    const h = !Le(a, n);
    return (
      (h || e) && ((this._active = a), this._updateHoverStyles(a, n, e)),
      (this._lastEvent = c),
      h
    );
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout") return [];
    if (!s) return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
}
const Ns = () => F(de.instances, (i) => i._plugins.invalidate()),
  bt = !0;
Object.defineProperties(de, {
  defaults: { enumerable: bt, value: L },
  instances: { enumerable: bt, value: Be },
  overrides: { enumerable: bt, value: Rt },
  registry: { enumerable: bt, value: at },
  version: { enumerable: bt, value: Ml },
  getChart: { enumerable: bt, value: Jn },
  register: {
    enumerable: bt,
    value: (...i) => {
      at.add(...i), Ns();
    },
  },
  unregister: {
    enumerable: bt,
    value: (...i) => {
      at.remove(...i), Ns();
    },
  },
});
function Qn(i, t, e) {
  const {
    startAngle: s,
    pixelMargin: n,
    x: o,
    y: r,
    outerRadius: a,
    innerRadius: l,
  } = t;
  let c = n / a;
  i.beginPath(),
    i.arc(o, r, a, s - c, e + c),
    l > n
      ? ((c = n / l), i.arc(o, r, l, e + c, s - c, !0))
      : i.arc(o, r, n, e + W, s - W),
    i.closePath(),
    i.clip();
}
function Dl(i) {
  return Bi(i, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function Al(i, t, e, s) {
  const n = Dl(i.options.borderRadius),
    o = (e - t) / 2,
    r = Math.min(o, (s * t) / 2),
    a = (l) => {
      const c = ((e - Math.min(o, l)) * s) / 2;
      return X(l, 0, Math.min(o, c));
    };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: X(n.innerStart, 0, r),
    innerEnd: X(n.innerEnd, 0, r),
  };
}
function Vt(i, t, e, s) {
  return { x: e + i * Math.cos(t), y: s + i * Math.sin(t) };
}
function Pi(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t,
    d = Math.max(t.outerRadius + s + e - c, 0),
    u = h > 0 ? h + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const C = h > 0 ? h - s : 0,
      $ = d > 0 ? d - s : 0,
      N = (C + $) / 2,
      Pt = N !== 0 ? (g * N) / (N + s) : g;
    f = (g - Pt) / 2;
  }
  const p = Math.max(0.001, g * d - e / V) / d,
    m = (g - p) / 2,
    b = l + m + f,
    x = n - m - f,
    {
      outerStart: v,
      outerEnd: y,
      innerStart: _,
      innerEnd: w,
    } = Al(t, u, d, x - b),
    M = d - v,
    S = d - y,
    k = b + v / M,
    R = x - y / S,
    E = u + _,
    O = u + w,
    j = b + _ / E,
    G = x - w / O;
  if ((i.beginPath(), o)) {
    if ((i.arc(r, a, d, k, R), y > 0)) {
      const N = Vt(S, R, r, a);
      i.arc(N.x, N.y, y, R, x + W);
    }
    const C = Vt(O, x, r, a);
    if ((i.lineTo(C.x, C.y), w > 0)) {
      const N = Vt(O, G, r, a);
      i.arc(N.x, N.y, w, x + W, G + Math.PI);
    }
    if ((i.arc(r, a, u, x - w / u, b + _ / u, !0), _ > 0)) {
      const N = Vt(E, j, r, a);
      i.arc(N.x, N.y, _, j + Math.PI, b - W);
    }
    const $ = Vt(M, b, r, a);
    if ((i.lineTo($.x, $.y), v > 0)) {
      const N = Vt(M, k, r, a);
      i.arc(N.x, N.y, v, b - W, k);
    }
  } else {
    i.moveTo(r, a);
    const C = Math.cos(k) * d + r,
      $ = Math.sin(k) * d + a;
    i.lineTo(C, $);
    const N = Math.cos(R) * d + r,
      Pt = Math.sin(R) * d + a;
    i.lineTo(N, Pt);
  }
  i.closePath();
}
function Ol(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Pi(i, t, e, s, r + I, n);
    for (let c = 0; c < o; ++c) i.fill();
    isNaN(a) || ((l = r + (a % I)), a % I === 0 && (l += I));
  }
  return Pi(i, t, e, s, l, n), i.fill(), l;
}
function Ll(i, t, e) {
  const { x: s, y: n, startAngle: o, pixelMargin: r, fullCircles: a } = t,
    l = Math.max(t.outerRadius - r, 0),
    c = t.innerRadius + r;
  let h;
  for (
    e && Qn(i, t, o + I), i.beginPath(), i.arc(s, n, c, o + I, o, !0), h = 0;
    h < a;
    ++h
  )
    i.stroke();
  for (i.beginPath(), i.arc(s, n, l, o, o + I), h = 0; h < a; ++h) i.stroke();
}
function Tl(i, t, e, s, n, o) {
  const { options: r } = t,
    { borderWidth: a, borderJoinStyle: l } = r,
    c = r.borderAlign === "inner";
  a &&
    (c
      ? ((i.lineWidth = a * 2), (i.lineJoin = l || "round"))
      : ((i.lineWidth = a), (i.lineJoin = l || "bevel")),
    t.fullCircles && Ll(i, t, c),
    c && Qn(i, t, n),
    Pi(i, t, e, s, n, o),
    i.stroke());
}
class Ze extends ot {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.getProps(["x", "y"], s),
      { angle: o, distance: r } = fn(n, { x: t, y: e }),
      {
        startAngle: a,
        endAngle: l,
        innerRadius: c,
        outerRadius: h,
        circumference: d,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        s
      ),
      u = this.options.spacing / 2,
      g = D(d, l - a) >= I || ae(o, a, l),
      p = pt(r, c + u, h + u);
    return g && p;
  }
  getCenterPoint(t) {
    const {
        x: e,
        y: s,
        startAngle: n,
        endAngle: o,
        innerRadius: r,
        outerRadius: a,
      } = this.getProps(
        [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        t
      ),
      { offset: l, spacing: c } = this.options,
      h = (n + o) / 2,
      d = (r + a + c + l) / 2;
    return { x: e + Math.cos(h) * d, y: s + Math.sin(h) * d };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: s } = this,
      n = (e.offset || 0) / 2,
      o = (e.spacing || 0) / 2,
      r = e.circular;
    if (
      ((this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = s > I ? Math.floor(s / I) : 0),
      s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    t.save();
    let a = 0;
    if (n) {
      a = n / 2;
      const c = (this.startAngle + this.endAngle) / 2;
      t.translate(Math.cos(c) * a, Math.sin(c) * a),
        this.circumference >= V && (a = n);
    }
    (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
    const l = Ol(t, this, a, o, r);
    Tl(t, this, a, o, l, r), t.restore();
  }
}
Ze.id = "arc";
Ze.defaults = {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0,
};
Ze.defaultRoutes = { backgroundColor: "backgroundColor" };
function to(i, t, e = t) {
  (i.lineCap = D(e.borderCapStyle, t.borderCapStyle)),
    i.setLineDash(D(e.borderDash, t.borderDash)),
    (i.lineDashOffset = D(e.borderDashOffset, t.borderDashOffset)),
    (i.lineJoin = D(e.borderJoinStyle, t.borderJoinStyle)),
    (i.lineWidth = D(e.borderWidth, t.borderWidth)),
    (i.strokeStyle = D(e.borderColor, t.borderColor));
}
function Rl(i, t, e) {
  i.lineTo(e.x, e.y);
}
function El(i) {
  return i.stepped
    ? er
    : i.tension || i.cubicInterpolationMode === "monotone"
    ? ir
    : Rl;
}
function eo(i, t, e = {}) {
  const s = i.length,
    { start: n = 0, end: o = s - 1 } = e,
    { start: r, end: a } = t,
    l = Math.max(n, r),
    c = Math.min(o, a),
    h = (n < r && o < r) || (n > a && o > a);
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l,
  };
}
function Fl(i, t, e, s) {
  const { points: n, options: o } = t,
    { count: r, start: a, loop: l, ilen: c } = eo(n, e, s),
    h = El(o);
  let { move: d = !0, reverse: u } = s || {},
    f,
    g,
    p;
  for (f = 0; f <= c; ++f)
    (g = n[(a + (u ? c - f : f)) % r]),
      !g.skip &&
        (d ? (i.moveTo(g.x, g.y), (d = !1)) : h(i, p, g, u, o.stepped),
        (p = g));
  return l && ((g = n[(a + (u ? c : 0)) % r]), h(i, p, g, u, o.stepped)), !!l;
}
function Il(i, t, e, s) {
  const n = t.points,
    { count: o, start: r, ilen: a } = eo(n, e, s),
    { move: l = !0, reverse: c } = s || {};
  let h = 0,
    d = 0,
    u,
    f,
    g,
    p,
    m,
    b;
  const x = (y) => (r + (c ? a - y : y)) % o,
    v = () => {
      p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, b));
    };
  for (l && ((f = n[x(0)]), i.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (((f = n[x(u)]), f.skip)) continue;
    const y = f.x,
      _ = f.y,
      w = y | 0;
    w === g
      ? (_ < p ? (p = _) : _ > m && (m = _), (h = (d * h + y) / ++d))
      : (v(), i.lineTo(y, _), (g = w), (d = 0), (p = m = _)),
      (b = _);
  }
  v();
}
function Ci(i) {
  const t = i.options,
    e = t.borderDash && t.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !e
    ? Il
    : Fl;
}
function zl(i) {
  return i.stepped
    ? Rr
    : i.tension || i.cubicInterpolationMode === "monotone"
    ? Er
    : Ot;
}
function Bl(i, t, e, s) {
  let n = t._path;
  n || ((n = t._path = new Path2D()), t.path(n, e, s) && n.closePath()),
    to(i, t.options),
    i.stroke(n);
}
function Vl(i, t, e, s) {
  const { segments: n, options: o } = t,
    r = Ci(t);
  for (const a of n)
    to(i, o, a.style),
      i.beginPath(),
      r(i, t, a, { start: e, end: e + s - 1 }) && i.closePath(),
      i.stroke();
}
const Wl = typeof Path2D == "function";
function Nl(i, t, e, s) {
  Wl && !t.options.segment ? Bl(i, t, e, s) : Vl(i, t, e, s);
}
class St extends ot {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const s = this.options;
    if (
      (s.tension || s.cubicInterpolationMode === "monotone") &&
      !s.stepped &&
      !this._pointsUpdated
    ) {
      const n = s.spanGaps ? this._loop : this._fullLoop;
      Sr(this._points, s, t, n, e), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Nr(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    const s = this.options,
      n = t[e],
      o = this.points,
      r = Bn(this, { property: e, start: n, end: n });
    if (!r.length) return;
    const a = [],
      l = zl(s);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: u } = r[c],
        f = o[d],
        g = o[u];
      if (f === g) {
        a.push(f);
        continue;
      }
      const p = Math.abs((n - f[e]) / (g[e] - f[e])),
        m = l(f, g, p, s.stepped);
      (m[e] = t[e]), a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, s) {
    return Ci(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments,
      o = Ci(this);
    let r = this._loop;
    (e = e || 0), (s = s || this.points.length - e);
    for (const a of n) r &= o(t, this, a, { start: e, end: e + s - 1 });
    return !!r;
  }
  draw(t, e, s, n) {
    const o = this.options || {};
    (this.points || []).length &&
      o.borderWidth &&
      (t.save(), Nl(t, this, s, n), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
St.id = "line";
St.defaults = {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0,
};
St.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
St.descriptors = {
  _scriptable: !0,
  _indexable: (i) => i !== "borderDash" && i !== "fill",
};
function Hs(i, t, e, s) {
  const n = i.options,
    { [e]: o } = i.getProps([e], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class Je extends ot {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t);
  }
  inRange(t, e, s) {
    const n = this.options,
      { x: o, y: r } = this.getProps(["x", "y"], s);
    return (
      Math.pow(t - o, 2) + Math.pow(e - r, 2) <
      Math.pow(n.hitRadius + n.radius, 2)
    );
  }
  inXRange(t, e) {
    return Hs(this, t, "x", e);
  }
  inYRange(t, e) {
    return Hs(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: s } = this.getProps(["x", "y"], t);
    return { x: e, y: s };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, (e && t.hoverRadius) || 0);
    const s = (e && t.borderWidth) || 0;
    return (e + s) * 2;
  }
  draw(t, e) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !le(this, e, this.size(s) / 2) ||
      ((t.strokeStyle = s.borderColor),
      (t.lineWidth = s.borderWidth),
      (t.fillStyle = s.backgroundColor),
      wi(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
Je.id = "point";
Je.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0,
};
Je.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
function io(i, t) {
  const {
    x: e,
    y: s,
    base: n,
    width: o,
    height: r,
  } = i.getProps(["x", "y", "base", "width", "height"], t);
  let a, l, c, h, d;
  return (
    i.horizontal
      ? ((d = r / 2),
        (a = Math.min(e, n)),
        (l = Math.max(e, n)),
        (c = s - d),
        (h = s + d))
      : ((d = o / 2),
        (a = e - d),
        (l = e + d),
        (c = Math.min(s, n)),
        (h = Math.max(s, n))),
    { left: a, top: c, right: l, bottom: h }
  );
}
function yt(i, t, e, s) {
  return i ? 0 : X(t, e, s);
}
function Hl(i, t, e) {
  const s = i.options.borderWidth,
    n = i.borderSkipped,
    o = Pn(s);
  return {
    t: yt(n.top, o.top, 0, e),
    r: yt(n.right, o.right, 0, t),
    b: yt(n.bottom, o.bottom, 0, e),
    l: yt(n.left, o.left, 0, t),
  };
}
function jl(i, t, e) {
  const { enableBorderRadius: s } = i.getProps(["enableBorderRadius"]),
    n = i.options.borderRadius,
    o = Lt(n),
    r = Math.min(t, e),
    a = i.borderSkipped,
    l = s || A(n);
  return {
    topLeft: yt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: yt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: yt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: yt(!l || a.bottom || a.right, o.bottomRight, 0, r),
  };
}
function $l(i) {
  const t = io(i),
    e = t.right - t.left,
    s = t.bottom - t.top,
    n = Hl(i, e / 2, s / 2),
    o = jl(i, e / 2, s / 2);
  return {
    outer: { x: t.left, y: t.top, w: e, h: s, radius: o },
    inner: {
      x: t.left + n.l,
      y: t.top + n.t,
      w: e - n.l - n.r,
      h: s - n.t - n.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r)),
      },
    },
  };
}
function mi(i, t, e, s) {
  const n = t === null,
    o = e === null,
    a = i && !(n && o) && io(i, s);
  return a && (n || pt(t, a.left, a.right)) && (o || pt(e, a.top, a.bottom));
}
function Yl(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Xl(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function bi(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0,
    n = i.y !== e.y ? -t : 0,
    o = (i.x + i.w !== e.x + e.w ? t : 0) - s,
    r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return { x: i.x + s, y: i.y + n, w: i.w + o, h: i.h + r, radius: i.radius };
}
class Qe extends ot {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: e,
        options: { borderColor: s, backgroundColor: n },
      } = this,
      { inner: o, outer: r } = $l(this),
      a = Yl(r.radius) ? ce : Xl;
    t.save(),
      (r.w !== o.w || r.h !== o.h) &&
        (t.beginPath(),
        a(t, bi(r, e, o)),
        t.clip(),
        a(t, bi(o, -e, r)),
        (t.fillStyle = s),
        t.fill("evenodd")),
      t.beginPath(),
      a(t, bi(o, e)),
      (t.fillStyle = n),
      t.fill(),
      t.restore();
  }
  inRange(t, e, s) {
    return mi(this, t, e, s);
  }
  inXRange(t, e) {
    return mi(this, t, null, e);
  }
  inYRange(t, e) {
    return mi(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: s,
      base: n,
      horizontal: o,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: o ? (e + n) / 2 : e, y: o ? s : (s + n) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
Qe.id = "bar";
Qe.defaults = {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0,
};
Qe.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
var Ul = Object.freeze({
  __proto__: null,
  ArcElement: Ze,
  LineElement: St,
  PointElement: Je,
  BarElement: Qe,
});
function Kl(i, t, e, s, n) {
  const o = n.samples || s;
  if (o >= e) return i.slice(t, t + e);
  const r = [],
    a = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let h = t,
    d,
    u,
    f,
    g,
    p;
  for (r[l++] = i[h], d = 0; d < o - 2; d++) {
    let m = 0,
      b = 0,
      x;
    const v = Math.floor((d + 1) * a) + 1 + t,
      y = Math.min(Math.floor((d + 2) * a) + 1, e) + t,
      _ = y - v;
    for (x = v; x < y; x++) (m += i[x].x), (b += i[x].y);
    (m /= _), (b /= _);
    const w = Math.floor(d * a) + 1 + t,
      M = Math.min(Math.floor((d + 1) * a) + 1, e) + t,
      { x: S, y: k } = i[h];
    for (f = g = -1, x = w; x < M; x++)
      (g = 0.5 * Math.abs((S - m) * (i[x].y - k) - (S - i[x].x) * (b - k))),
        g > f && ((f = g), (u = i[x]), (p = x));
    (r[l++] = u), (h = p);
  }
  return (r[l++] = i[c]), r;
}
function ql(i, t, e, s) {
  let n = 0,
    o = 0,
    r,
    a,
    l,
    c,
    h,
    d,
    u,
    f,
    g,
    p;
  const m = [],
    b = t + e - 1,
    x = i[t].x,
    y = i[b].x - x;
  for (r = t; r < t + e; ++r) {
    (a = i[r]), (l = ((a.x - x) / y) * s), (c = a.y);
    const _ = l | 0;
    if (_ === h)
      c < g ? ((g = c), (d = r)) : c > p && ((p = c), (u = r)),
        (n = (o * n + a.x) / ++o);
    else {
      const w = r - 1;
      if (!T(d) && !T(u)) {
        const M = Math.min(d, u),
          S = Math.max(d, u);
        M !== f && M !== w && m.push({ ...i[M], x: n }),
          S !== f && S !== w && m.push({ ...i[S], x: n });
      }
      r > 0 && w !== f && m.push(i[w]),
        m.push(a),
        (h = _),
        (o = 0),
        (g = p = c),
        (d = u = f = r);
    }
  }
  return m;
}
function so(i) {
  if (i._decimated) {
    const t = i._data;
    delete i._decimated,
      delete i._data,
      Object.defineProperty(i, "data", { value: t });
  }
}
function js(i) {
  i.data.datasets.forEach((t) => {
    so(t);
  });
}
function Gl(i, t) {
  const e = t.length;
  let s = 0,
    n;
  const { iScale: o } = i,
    { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
  return (
    l && (s = X(mt(t, o.axis, r).lo, 0, e - 1)),
    c ? (n = X(mt(t, o.axis, a).hi + 1, s, e) - s) : (n = e - s),
    { start: s, count: n }
  );
}
var Zl = {
  id: "decimation",
  defaults: { algorithm: "min-max", enabled: !1 },
  beforeElementsUpdate: (i, t, e) => {
    if (!e.enabled) {
      js(i);
      return;
    }
    const s = i.width;
    i.data.datasets.forEach((n, o) => {
      const { _data: r, indexAxis: a } = n,
        l = i.getDatasetMeta(o),
        c = r || n.data;
      if (
        Qt([a, i.options.indexAxis]) === "y" ||
        !l.controller.supportsDecimation
      )
        return;
      const h = i.scales[l.xAxisID];
      if ((h.type !== "linear" && h.type !== "time") || i.options.parsing)
        return;
      let { start: d, count: u } = Gl(l, c);
      const f = e.threshold || 4 * s;
      if (u <= f) {
        so(n);
        return;
      }
      T(r) &&
        ((n._data = c),
        delete n.data,
        Object.defineProperty(n, "data", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated;
          },
          set: function (p) {
            this._data = p;
          },
        }));
      let g;
      switch (e.algorithm) {
        case "lttb":
          g = Kl(c, d, u, s, e);
          break;
        case "min-max":
          g = ql(c, d, u, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      n._decimated = g;
    });
  },
  destroy(i) {
    js(i);
  },
};
function Jl(i, t, e) {
  const s = i.segments,
    n = i.points,
    o = t.points,
    r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = $i(l, c, n);
    const h = Di(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({ source: a, target: h, start: n[l], end: n[c] });
      continue;
    }
    const d = Bn(t, h);
    for (const u of d) {
      const f = Di(e, o[u.start], o[u.end], u.loop),
        g = zn(a, n, f);
      for (const p of g)
        r.push({
          source: p,
          target: u,
          start: { [e]: $s(h, f, "start", Math.max) },
          end: { [e]: $s(h, f, "end", Math.min) },
        });
    }
  }
  return r;
}
function Di(i, t, e, s) {
  if (s) return;
  let n = t[i],
    o = e[i];
  return (
    i === "angle" && ((n = J(n)), (o = J(o))), { property: i, start: n, end: o }
  );
}
function Ql(i, t) {
  const { x: e = null, y: s = null } = i || {},
    n = t.points,
    o = [];
  return (
    t.segments.forEach(({ start: r, end: a }) => {
      a = $i(r, a, n);
      const l = n[r],
        c = n[a];
      s !== null
        ? (o.push({ x: l.x, y: s }), o.push({ x: c.x, y: s }))
        : e !== null && (o.push({ x: e, y: l.y }), o.push({ x: e, y: c.y }));
    }),
    o
  );
}
function $i(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y)) break;
  }
  return t;
}
function $s(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function no(i, t) {
  let e = [],
    s = !1;
  return (
    B(i) ? ((s = !0), (e = i)) : (e = Ql(i, t)),
    e.length
      ? new St({ points: e, options: { tension: 0 }, _loop: s, _fullLoop: s })
      : null
  );
}
function Ys(i) {
  return i && i.fill !== !1;
}
function tc(i, t, e) {
  let n = i[t].fill;
  const o = [t];
  let r;
  if (!e) return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!H(n)) return n;
    if (((r = i[n]), !r)) return !1;
    if (r.visible) return n;
    o.push(n), (n = r.fill);
  }
  return !1;
}
function ec(i, t, e) {
  const s = oc(i);
  if (A(s)) return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return H(n) && Math.floor(n) === n
    ? ic(s[0], t, n, e)
    : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
}
function ic(i, t, e, s) {
  return (
    (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e
  );
}
function sc(i, t) {
  let e = null;
  return (
    i === "start"
      ? (e = t.bottom)
      : i === "end"
      ? (e = t.top)
      : A(i)
      ? (e = t.getPixelForValue(i.value))
      : t.getBasePixel && (e = t.getBasePixel()),
    e
  );
}
function nc(i, t, e) {
  let s;
  return (
    i === "start"
      ? (s = e)
      : i === "end"
      ? (s = t.options.reverse ? t.min : t.max)
      : A(i)
      ? (s = i.value)
      : (s = t.getBaseValue()),
    s
  );
}
function oc(i) {
  const t = i.options,
    e = t.fill;
  let s = D(e && e.target, e);
  return (
    s === void 0 && (s = !!t.backgroundColor),
    s === !1 || s === null ? !1 : s === !0 ? "origin" : s
  );
}
function rc(i) {
  const { scale: t, index: e, line: s } = i,
    n = [],
    o = s.segments,
    r = s.points,
    a = ac(t, e);
  a.push(no({ x: null, y: t.bottom }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++) lc(n, r[h], a);
  }
  return new St({ points: n, options: {} });
}
function ac(i, t) {
  const e = [],
    s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t) break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function lc(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n],
      { first: r, last: a, point: l } = cc(o, t, "x");
    if (!(!l || (r && a))) {
      if (r) s.unshift(l);
      else if ((i.push(l), !a)) break;
    }
  }
  i.push(...s);
}
function cc(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s) return {};
  const n = s[e],
    o = i.segments,
    r = i.points;
  let a = !1,
    l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c],
      d = r[h.start][e],
      u = r[h.end][e];
    if (pt(n, d, u)) {
      (a = n === d), (l = n === u);
      break;
    }
  }
  return { first: a, last: l, point: s };
}
class oo {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return (
      (e = e || { start: 0, end: I }),
      t.arc(n, o, r, e.end, e.start, !0),
      !s.bounds
    );
  }
  interpolate(t) {
    const { x: e, y: s, radius: n } = this,
      o = t.angle;
    return { x: e + Math.cos(o) * n, y: s + Math.sin(o) * n, angle: o };
  }
}
function hc(i) {
  const { chart: t, fill: e, line: s } = i;
  if (H(e)) return dc(t, e);
  if (e === "stack") return rc(i);
  if (e === "shape") return !0;
  const n = uc(i);
  return n instanceof oo ? n : no(n, s);
}
function dc(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function uc(i) {
  return (i.scale || {}).getPointPositionForValue ? gc(i) : fc(i);
}
function fc(i) {
  const { scale: t = {}, fill: e } = i,
    s = sc(e, t);
  if (H(s)) {
    const n = t.isHorizontal();
    return { x: n ? s : null, y: n ? null : s };
  }
  return null;
}
function gc(i) {
  const { scale: t, fill: e } = i,
    s = t.options,
    n = t.getLabels().length,
    o = s.reverse ? t.max : t.min,
    r = nc(e, t, o),
    a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new oo({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r),
    });
  }
  for (let l = 0; l < n; ++l) a.push(t.getPointPositionForValue(l, r));
  return a;
}
function xi(i, t, e) {
  const s = hc(t),
    { line: n, scale: o, axis: r } = t,
    a = n.options,
    l = a.fill,
    c = a.backgroundColor,
    { above: h = c, below: d = c } = l || {};
  s &&
    n.points.length &&
    (Ne(i, e),
    pc(i, {
      line: n,
      target: s,
      above: h,
      below: d,
      area: e,
      scale: o,
      axis: r,
    }),
    He(i));
}
function pc(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a } = t,
    l = e._loop ? "angle" : t.axis;
  i.save(),
    l === "x" &&
      o !== n &&
      (Xs(i, s, r.top),
      Us(i, { line: e, target: s, color: n, scale: a, property: l }),
      i.restore(),
      i.save(),
      Xs(i, s, r.bottom)),
    Us(i, { line: e, target: s, color: o, scale: a, property: l }),
    i.restore();
}
function Xs(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0,
    r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a,
      h = n[l],
      d = n[$i(l, c, n)];
    o ? (i.moveTo(h.x, h.y), (o = !1)) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)),
      (r = !!t.pathSegment(i, a, { move: r })),
      r ? i.closePath() : i.lineTo(d.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function Us(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r } = t,
    a = Jl(e, s, n);
  for (const { source: l, target: c, start: h, end: d } of a) {
    const { style: { backgroundColor: u = o } = {} } = l,
      f = s !== !0;
    i.save(), (i.fillStyle = u), mc(i, r, f && Di(n, h, d)), i.beginPath();
    const g = !!e.pathSegment(i, l);
    let p;
    if (f) {
      g ? i.closePath() : Ks(i, s, d, n);
      const m = !!s.pathSegment(i, c, { move: g, reverse: !0 });
      (p = g && m), p || Ks(i, s, h, n);
    }
    i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore();
  }
}
function mc(i, t, e) {
  const { top: s, bottom: n } = t.chart.chartArea,
    { property: o, start: r, end: a } = e || {};
  o === "x" && (i.beginPath(), i.rect(r, s, a - r, n - s), i.clip());
}
function Ks(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var bc = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length,
      n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      (o = i.getDatasetMeta(r)),
        (a = o.dataset),
        (l = null),
        a &&
          a.options &&
          a instanceof St &&
          (l = {
            visible: i.isDatasetVisible(r),
            index: r,
            fill: ec(a, r, s),
            chart: i,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: a,
          }),
        (o.$filler = l),
        n.push(l);
    for (r = 0; r < s; ++r)
      (l = n[r]), !(!l || l.fill === !1) && (l.fill = tc(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw",
      n = i.getSortedVisibleDatasetMetas(),
      o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a &&
        (a.line.updateControlPoints(o, a.axis), s && a.fill && xi(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw") return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      Ys(o) && xi(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !Ys(s) || e.drawTime !== "beforeDatasetDraw" || xi(i.ctx, s, i.chartArea);
  },
  defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
};
const qs = (i, t) => {
    let { boxHeight: e = t, boxWidth: s = t } = i;
    return (
      i.usePointStyle &&
        ((e = Math.min(e, t)), (s = i.pointStyleWidth || Math.min(s, t))),
      { boxWidth: s, boxHeight: e, itemHeight: Math.max(t, e) }
    );
  },
  xc = (i, t) =>
    i !== null &&
    t !== null &&
    i.datasetIndex === t.datasetIndex &&
    i.index === t.index;
class Gs extends ot {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e, s) {
    (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = s),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = z(t.generateLabels, [this.chart], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))),
      t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e);
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels,
      n = Y(s.font),
      o = n.size,
      r = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = qs(s, o);
    let c, h;
    (e.font = n.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (h = this._fitRows(r, o, a, l) + 10))
        : ((h = this.maxHeight), (c = this._fitCols(r, o, a, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(h, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, e, s, n) {
    const {
        ctx: o,
        maxWidth: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      h = n + a;
    let d = t;
    (o.textAlign = "left"), (o.textBaseline = "middle");
    let u = -1,
      f = -h;
    return (
      this.legendItems.forEach((g, p) => {
        const m = s + e / 2 + o.measureText(g.text).width;
        (p === 0 || c[c.length - 1] + m + 2 * a > r) &&
          ((d += h), (c[c.length - (p > 0 ? 0 : 1)] = 0), (f += h), u++),
          (l[p] = { left: 0, top: f, row: u, width: m, height: n }),
          (c[c.length - 1] += m + a);
      }),
      d
    );
  }
  _fitCols(t, e, s, n) {
    const {
        ctx: o,
        maxHeight: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      h = r - t;
    let d = a,
      u = 0,
      f = 0,
      g = 0,
      p = 0;
    return (
      this.legendItems.forEach((m, b) => {
        const x = s + e / 2 + o.measureText(m.text).width;
        b > 0 &&
          f + n + 2 * a > h &&
          ((d += u + a),
          c.push({ width: u, height: f }),
          (g += u + a),
          p++,
          (u = f = 0)),
          (l[b] = { left: g, top: f, col: p, width: x, height: n }),
          (u = Math.max(u, x)),
          (f += n + a);
      }),
      (d += u),
      c.push({ width: u, height: f }),
      d
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: s,
          labels: { padding: n },
          rtl: o,
        },
      } = this,
      r = Wt(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = U(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row &&
          ((a = c.row),
          (l = U(s, this.left + n, this.right - this.lineWidths[a]))),
          (c.top += this.top + t + n),
          (c.left = r.leftForLtr(r.x(l), c.width)),
          (l += c.width + n);
    } else {
      let a = 0,
        l = U(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a &&
          ((a = c.col),
          (l = U(
            s,
            this.top + t + n,
            this.bottom - this.columnSizes[a].height
          ))),
          (c.top = l),
          (c.left += this.left + n),
          (c.left = r.leftForLtr(r.x(c.left), c.width)),
          (l += c.height + n);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Ne(t, this), this._draw(), He(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this,
      { align: o, labels: r } = t,
      a = L.color,
      l = Wt(t.rtl, this.left, this.width),
      c = Y(r.font),
      { color: h, padding: d } = r,
      u = c.size,
      f = u / 2;
    let g;
    this.drawTitle(),
      (n.textAlign = l.textAlign("left")),
      (n.textBaseline = "middle"),
      (n.lineWidth = 0.5),
      (n.font = c.string);
    const { boxWidth: p, boxHeight: m, itemHeight: b } = qs(r, u),
      x = function (M, S, k) {
        if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
        n.save();
        const R = D(k.lineWidth, 1);
        if (
          ((n.fillStyle = D(k.fillStyle, a)),
          (n.lineCap = D(k.lineCap, "butt")),
          (n.lineDashOffset = D(k.lineDashOffset, 0)),
          (n.lineJoin = D(k.lineJoin, "miter")),
          (n.lineWidth = R),
          (n.strokeStyle = D(k.strokeStyle, a)),
          n.setLineDash(D(k.lineDash, [])),
          r.usePointStyle)
        ) {
          const E = {
              radius: (m * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: R,
            },
            O = l.xPlus(M, p / 2),
            j = S + f;
          Sn(n, E, O, j, r.pointStyleWidth && p);
        } else {
          const E = S + Math.max((u - m) / 2, 0),
            O = l.leftForLtr(M, p),
            j = Lt(k.borderRadius);
          n.beginPath(),
            Object.values(j).some((G) => G !== 0)
              ? ce(n, { x: O, y: E, w: p, h: m, radius: j })
              : n.rect(O, E, p, m),
            n.fill(),
            R !== 0 && n.stroke();
        }
        n.restore();
      },
      v = function (M, S, k) {
        Et(n, k.text, M, S + b / 2, c, {
          strikethrough: k.hidden,
          textAlign: l.textAlign(k.textAlign),
        });
      },
      y = this.isHorizontal(),
      _ = this._computeTitleHeight();
    y
      ? (g = {
          x: U(o, this.left + d, this.right - s[0]),
          y: this.top + d + _,
          line: 0,
        })
      : (g = {
          x: this.left + d,
          y: U(o, this.top + _ + d, this.bottom - e[0].height),
          line: 0,
        }),
      En(this.ctx, t.textDirection);
    const w = b + d;
    this.legendItems.forEach((M, S) => {
      (n.strokeStyle = M.fontColor || h), (n.fillStyle = M.fontColor || h);
      const k = n.measureText(M.text).width,
        R = l.textAlign(M.textAlign || (M.textAlign = r.textAlign)),
        E = p + f + k;
      let O = g.x,
        j = g.y;
      l.setWidth(this.width),
        y
          ? S > 0 &&
            O + E + d > this.right &&
            ((j = g.y += w),
            g.line++,
            (O = g.x = U(o, this.left + d, this.right - s[g.line])))
          : S > 0 &&
            j + w > this.bottom &&
            ((O = g.x = O + e[g.line].width + d),
            g.line++,
            (j = g.y = U(o, this.top + _ + d, this.bottom - e[g.line].height)));
      const G = l.x(O);
      x(G, j, M),
        (O = Ao(R, O + p + f, y ? O + E : this.right, t.rtl)),
        v(l.x(O), j, M),
        y ? (g.x += E + d) : (g.y += w);
    }),
      Fn(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      s = Y(e.font),
      n = q(e.padding);
    if (!e.display) return;
    const o = Wt(t.rtl, this.left, this.width),
      r = this.ctx,
      a = e.position,
      l = s.size / 2,
      c = n.top + l;
    let h,
      d = this.left,
      u = this.width;
    if (this.isHorizontal())
      (u = Math.max(...this.lineWidths)),
        (h = this.top + c),
        (d = U(t.align, d, this.right - u));
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      h =
        c +
        U(
          t.align,
          this.top,
          this.bottom - g - t.labels.padding - this._computeTitleHeight()
        );
    }
    const f = U(a, d, d + u);
    (r.textAlign = o.textAlign(Ei(a))),
      (r.textBaseline = "middle"),
      (r.strokeStyle = e.color),
      (r.fillStyle = e.color),
      (r.font = s.string),
      Et(r, e.text, f, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = Y(t.font),
      s = q(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (pt(t, this.left, this.right) && pt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (
          ((n = o[s]),
          pt(t, n.left, n.left + n.width) && pt(e, n.top, n.top + n.height))
        )
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!_c(t.type, e)) return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem,
        o = xc(n, s);
      n && !o && z(e.onLeave, [t, n, this], this),
        (this._hoveredItem = s),
        s && !o && z(e.onHover, [t, s, this], this);
    } else s && z(e.onClick, [t, s, this], this);
  }
}
function _c(i, t) {
  return !!(
    ((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (i === "click" || i === "mouseup"))
  );
}
var yc = {
  id: "legend",
  _element: Gs,
  start(i, t, e) {
    const s = (i.legend = new Gs({ ctx: i.ctx, options: e, chart: i }));
    K.configure(i, s, e), K.addBox(i, s);
  },
  stop(i) {
    K.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    K.configure(i, s, e), (s.options = e);
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const s = t.datasetIndex,
        n = e.chart;
      n.isDatasetVisible(s)
        ? (n.hide(s), (t.hidden = !0))
        : (n.show(s), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets,
          {
            labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((r) => {
          const a = r.controller.getStyle(e ? 0 : void 0),
            l = q(a.borderWidth);
          return {
            text: t[r.index].label,
            fillStyle: a.backgroundColor,
            fontColor: o,
            hidden: !r.visible,
            lineCap: a.borderCapStyle,
            lineDash: a.borderDash,
            lineDashOffset: a.borderDashOffset,
            lineJoin: a.borderJoinStyle,
            lineWidth: (l.width + l.height) / 4,
            strokeStyle: a.borderColor,
            pointStyle: s || a.pointStyle,
            rotation: a.rotation,
            textAlign: n || a.textAlign,
            borderRadius: 0,
            datasetIndex: r.index,
          };
        }, this);
      },
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i),
    },
  },
};
class Yi extends ot {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e) {
    const s = this.options;
    if (((this.left = 0), (this.top = 0), !s.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = e);
    const n = B(s.text) ? s.text.length : 1;
    this._padding = q(s.padding);
    const o = n * Y(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this,
      a = r.align;
    let l = 0,
      c,
      h,
      d;
    return (
      this.isHorizontal()
        ? ((h = U(a, s, o)), (d = e + t), (c = o - s))
        : (r.position === "left"
            ? ((h = s + t), (d = U(a, n, e)), (l = V * -0.5))
            : ((h = o - t), (d = U(a, e, n)), (l = V * 0.5)),
          (c = n - e)),
      { titleX: h, titleY: d, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const s = Y(e.font),
      o = s.lineHeight / 2 + this._padding.top,
      { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    Et(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Ei(e.align),
      textBaseline: "middle",
      translation: [r, a],
    });
  }
}
function vc(i, t) {
  const e = new Yi({ ctx: i.ctx, options: t, chart: i });
  K.configure(i, e, t), K.addBox(i, e), (i.titleBlock = e);
}
var wc = {
  id: "title",
  _element: Yi,
  start(i, t, e) {
    vc(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    K.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    K.configure(i, s, e), (s.options = e);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Ce = new WeakMap();
var Mc = {
  id: "subtitle",
  start(i, t, e) {
    const s = new Yi({ ctx: i.ctx, options: e, chart: i });
    K.configure(i, s, e), K.addBox(i, s), Ce.set(i, s);
  },
  stop(i) {
    K.removeBox(i, Ce.get(i)), Ce.delete(i);
  },
  beforeUpdate(i, t, e) {
    const s = Ce.get(i);
    K.configure(i, s, e), (s.options = e);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "normal" },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const oe = {
  average(i) {
    if (!i.length) return !1;
    let t,
      e,
      s = 0,
      n = 0,
      o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const r = i[t].element;
      if (r && r.hasValue()) {
        const a = r.tooltipPosition();
        (s += a.x), (n += a.y), ++o;
      }
    }
    return { x: s / o, y: n / o };
  },
  nearest(i, t) {
    if (!i.length) return !1;
    let e = t.x,
      s = t.y,
      n = Number.POSITIVE_INFINITY,
      o,
      r,
      a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          h = _i(t, c);
        h < n && ((n = h), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (e = l.x), (s = l.y);
    }
    return { x: e, y: s };
  },
};
function rt(i, t) {
  return t && (B(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function ft(i) {
  return (typeof i == "string" || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function kc(i, t) {
  const { element: e, datasetIndex: s, index: n } = t,
    o = i.getDatasetMeta(s).controller,
    { label: r, value: a } = o.getLabelAndValue(n);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e,
  };
}
function Zs(i, t) {
  const e = i.chart.ctx,
    { body: s, footer: n, title: o } = i,
    { boxWidth: r, boxHeight: a } = t,
    l = Y(t.bodyFont),
    c = Y(t.titleFont),
    h = Y(t.footerFont),
    d = o.length,
    u = n.length,
    f = s.length,
    g = q(t.padding);
  let p = g.height,
    m = 0,
    b = s.reduce(
      (y, _) => y + _.before.length + _.lines.length + _.after.length,
      0
    );
  if (
    ((b += i.beforeBody.length + i.afterBody.length),
    d &&
      (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    b)
  ) {
    const y = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * y + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let x = 0;
  const v = function (y) {
    m = Math.max(m, e.measureText(y).width + x);
  };
  return (
    e.save(),
    (e.font = c.string),
    F(i.title, v),
    (e.font = l.string),
    F(i.beforeBody.concat(i.afterBody), v),
    (x = t.displayColors ? r + 2 + t.boxPadding : 0),
    F(s, (y) => {
      F(y.before, v), F(y.lines, v), F(y.after, v);
    }),
    (x = 0),
    (e.font = h.string),
    F(i.footer, v),
    e.restore(),
    (m += g.width),
    { width: m, height: p }
  );
}
function Sc(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Pc(i, t, e, s) {
  const { x: n, width: o } = s,
    r = e.caretSize + e.caretPadding;
  if ((i === "left" && n + o + r > t.width) || (i === "right" && n - o - r < 0))
    return !0;
}
function Cc(i, t, e, s) {
  const { x: n, width: o } = e,
    {
      width: r,
      chartArea: { left: a, right: l },
    } = i;
  let c = "center";
  return (
    s === "center"
      ? (c = n <= (a + l) / 2 ? "left" : "right")
      : n <= o / 2
      ? (c = "left")
      : n >= r - o / 2 && (c = "right"),
    Pc(c, i, t, e) && (c = "center"),
    c
  );
}
function Js(i, t, e) {
  const s = e.yAlign || t.yAlign || Sc(i, e);
  return { xAlign: e.xAlign || t.xAlign || Cc(i, t, e, s), yAlign: s };
}
function Dc(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? (e -= s) : t === "center" && (e -= s / 2), e;
}
function Ac(i, t, e) {
  let { y: s, height: n } = i;
  return (
    t === "top" ? (s += e) : t === "bottom" ? (s -= n + e) : (s -= n / 2), s
  );
}
function Qs(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i,
    { xAlign: a, yAlign: l } = e,
    c = n + o,
    { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = Lt(r);
  let g = Dc(t, a);
  const p = Ac(t, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (g += c)
        : a === "right" && (g -= c)
      : a === "left"
      ? (g -= Math.max(h, u) + n)
      : a === "right" && (g += Math.max(d, f) + n),
    { x: X(g, 0, s.width - t.width), y: X(p, 0, s.height - t.height) }
  );
}
function De(i, t, e) {
  const s = q(e.padding);
  return t === "center"
    ? i.x + i.width / 2
    : t === "right"
    ? i.x + i.width - s.right
    : i.x + s.left;
}
function tn(i) {
  return rt([], ft(i));
}
function Oc(i, t, e) {
  return kt(i, { tooltip: t, tooltipItems: e, type: "tooltip" });
}
function en(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
class Ai extends ot {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart || t._chart),
      (this._chart = this.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      s = this.options.setContext(this.getContext()),
      n = s.enabled && e.options.animation && s.animations,
      o = new Vn(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Oc(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, e) {
    const { callbacks: s } = e,
      n = s.beforeTitle.apply(this, [t]),
      o = s.title.apply(this, [t]),
      r = s.afterTitle.apply(this, [t]);
    let a = [];
    return (a = rt(a, ft(n))), (a = rt(a, ft(o))), (a = rt(a, ft(r))), a;
  }
  getBeforeBody(t, e) {
    return tn(e.callbacks.beforeBody.apply(this, [t]));
  }
  getBody(t, e) {
    const { callbacks: s } = e,
      n = [];
    return (
      F(t, (o) => {
        const r = { before: [], lines: [], after: [] },
          a = en(s, o);
        rt(r.before, ft(a.beforeLabel.call(this, o))),
          rt(r.lines, a.label.call(this, o)),
          rt(r.after, ft(a.afterLabel.call(this, o))),
          n.push(r);
      }),
      n
    );
  }
  getAfterBody(t, e) {
    return tn(e.callbacks.afterBody.apply(this, [t]));
  }
  getFooter(t, e) {
    const { callbacks: s } = e,
      n = s.beforeFooter.apply(this, [t]),
      o = s.footer.apply(this, [t]),
      r = s.afterFooter.apply(this, [t]);
    let a = [];
    return (a = rt(a, ft(n))), (a = rt(a, ft(o))), (a = rt(a, ft(r))), a;
  }
  _createItems(t) {
    const e = this._active,
      s = this.chart.data,
      n = [],
      o = [],
      r = [];
    let a = [],
      l,
      c;
    for (l = 0, c = e.length; l < c; ++l) a.push(kc(this.chart, e[l]));
    return (
      t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, s))),
      t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))),
      F(a, (h) => {
        const d = en(t.callbacks, h);
        n.push(d.labelColor.call(this, h)),
          o.push(d.labelPointStyle.call(this, h)),
          r.push(d.labelTextColor.call(this, h));
      }),
      (this.labelColors = n),
      (this.labelPointStyles = o),
      (this.labelTextColors = r),
      (this.dataPoints = a),
      a
    );
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()),
      n = this._active;
    let o,
      r = [];
    if (!n.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const a = oe[s.position].call(this, n, this._eventPosition);
      (r = this._createItems(s)),
        (this.title = this.getTitle(r, s)),
        (this.beforeBody = this.getBeforeBody(r, s)),
        (this.body = this.getBody(r, s)),
        (this.afterBody = this.getAfterBody(r, s)),
        (this.footer = this.getFooter(r, s));
      const l = (this._size = Zs(this, s)),
        c = Object.assign({}, a, l),
        h = Js(this.chart, s, c),
        d = Qs(s, c, h, this.chart);
      (this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (o = {
          opacity: 1,
          x: d.x,
          y: d.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = r),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        s.external &&
        s.external.call(this, { chart: this.chart, tooltip: this, replay: e });
  }
  drawCaret(t, e, s, n) {
    const o = this.getCaretPosition(t, s, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, s) {
    const { xAlign: n, yAlign: o } = this,
      { caretSize: r, cornerRadius: a } = s,
      { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Lt(a),
      { x: u, y: f } = t,
      { width: g, height: p } = e;
    let m, b, x, v, y, _;
    return (
      o === "center"
        ? ((y = f + p / 2),
          n === "left"
            ? ((m = u), (b = m - r), (v = y + r), (_ = y - r))
            : ((m = u + g), (b = m + r), (v = y - r), (_ = y + r)),
          (x = m))
        : (n === "left"
            ? (b = u + Math.max(l, h) + r)
            : n === "right"
            ? (b = u + g - Math.max(c, d) - r)
            : (b = this.caretX),
          o === "top"
            ? ((v = f), (y = v - r), (m = b - r), (x = b + r))
            : ((v = f + p), (y = v + r), (m = b + r), (x = b - r)),
          (_ = v)),
      { x1: m, x2: b, x3: x, y1: v, y2: y, y3: _ }
    );
  }
  drawTitle(t, e, s) {
    const n = this.title,
      o = n.length;
    let r, a, l;
    if (o) {
      const c = Wt(s.rtl, this.x, this.width);
      for (
        t.x = De(this, s.titleAlign, s),
          e.textAlign = c.textAlign(s.titleAlign),
          e.textBaseline = "middle",
          r = Y(s.titleFont),
          a = s.titleSpacing,
          e.fillStyle = s.titleColor,
          e.font = r.string,
          l = 0;
        l < o;
        ++l
      )
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + a),
          l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s],
      a = this.labelPointStyles[s],
      { boxHeight: l, boxWidth: c, boxPadding: h } = o,
      d = Y(o.bodyFont),
      u = De(this, "left", o),
      f = n.x(u),
      g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0,
      p = e.y + g;
    if (o.usePointStyle) {
      const m = {
          radius: Math.min(c, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        b = n.leftForLtr(f, c) + c / 2,
        x = p + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        wi(t, m, b, x),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        wi(t, m, b, x);
    } else {
      (t.lineWidth = A(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0);
      const m = n.leftForLtr(f, c - h),
        b = n.leftForLtr(n.xPlus(f, 1), c - h - 2),
        x = Lt(r.borderRadius);
      Object.values(x).some((v) => v !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          ce(t, { x: m, y: p, w: c, h: l, radius: x }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          ce(t, { x: b, y: p + 1, w: c - 2, h: l - 2, radius: x }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(m, p, c, l),
          t.strokeRect(m, p, c, l),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(b, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this,
      {
        bodySpacing: o,
        bodyAlign: r,
        displayColors: a,
        boxHeight: l,
        boxWidth: c,
        boxPadding: h,
      } = s,
      d = Y(s.bodyFont);
    let u = d.lineHeight,
      f = 0;
    const g = Wt(s.rtl, this.x, this.width),
      p = function (S) {
        e.fillText(S, g.x(t.x + f), t.y + u / 2), (t.y += u + o);
      },
      m = g.textAlign(r);
    let b, x, v, y, _, w, M;
    for (
      e.textAlign = r,
        e.textBaseline = "middle",
        e.font = d.string,
        t.x = De(this, m, s),
        e.fillStyle = s.bodyColor,
        F(this.beforeBody, p),
        f = a && m !== "right" ? (r === "center" ? c / 2 + h : c + 2 + h) : 0,
        y = 0,
        w = n.length;
      y < w;
      ++y
    ) {
      for (
        b = n[y],
          x = this.labelTextColors[y],
          e.fillStyle = x,
          F(b.before, p),
          v = b.lines,
          a &&
            v.length &&
            (this._drawColorBox(e, t, y, g, s),
            (u = Math.max(d.lineHeight, l))),
          _ = 0,
          M = v.length;
        _ < M;
        ++_
      )
        p(v[_]), (u = d.lineHeight);
      F(b.after, p);
    }
    (f = 0), (u = d.lineHeight), F(this.afterBody, p), (t.y -= o);
  }
  drawFooter(t, e, s) {
    const n = this.footer,
      o = n.length;
    let r, a;
    if (o) {
      const l = Wt(s.rtl, this.x, this.width);
      for (
        t.x = De(this, s.footerAlign, s),
          t.y += s.footerMarginTop,
          e.textAlign = l.textAlign(s.footerAlign),
          e.textBaseline = "middle",
          r = Y(s.footerFont),
          e.fillStyle = s.footerColor,
          e.font = r.string,
          a = 0;
        a < o;
        ++a
      )
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + s.footerSpacing);
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this,
      { x: a, y: l } = t,
      { width: c, height: h } = s,
      {
        topLeft: d,
        topRight: u,
        bottomLeft: f,
        bottomRight: g,
      } = Lt(n.cornerRadius);
    (e.fillStyle = n.backgroundColor),
      (e.strokeStyle = n.borderColor),
      (e.lineWidth = n.borderWidth),
      e.beginPath(),
      e.moveTo(a + d, l),
      r === "top" && this.drawCaret(t, e, s, n),
      e.lineTo(a + c - u, l),
      e.quadraticCurveTo(a + c, l, a + c, l + u),
      r === "center" && o === "right" && this.drawCaret(t, e, s, n),
      e.lineTo(a + c, l + h - g),
      e.quadraticCurveTo(a + c, l + h, a + c - g, l + h),
      r === "bottom" && this.drawCaret(t, e, s, n),
      e.lineTo(a + f, l + h),
      e.quadraticCurveTo(a, l + h, a, l + h - f),
      r === "center" && o === "left" && this.drawCaret(t, e, s, n),
      e.lineTo(a, l + d),
      e.quadraticCurveTo(a, l, a + d, l),
      e.closePath(),
      e.fill(),
      n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      s = this.$animations,
      n = s && s.x,
      o = s && s.y;
    if (n || o) {
      const r = oe[t.position].call(this, this._active, this._eventPosition);
      if (!r) return;
      const a = (this._size = Zs(this, t)),
        l = Object.assign({}, r, this._size),
        c = Js(e, t, l),
        h = Qs(t, l, c, e);
      (n._to !== h.x || o._to !== h.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = r.x),
        (this.caretY = r.y),
        this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s) return;
    this._updateAnimationTarget(e);
    const n = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    s = Math.abs(s) < 0.001 ? 0 : s;
    const r = q(e.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = s),
      this.drawBackground(o, t, n, e),
      En(t, e.textDirection),
      (o.y += r.top),
      this.drawTitle(o, t, e),
      this.drawBody(o, t, e),
      this.drawFooter(o, t, e),
      Fn(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active,
      n = t.map(({ datasetIndex: a, index: l }) => {
        const c = this.chart.getDatasetMeta(a);
        if (!c) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: c.data[l], index: l };
      }),
      o = !Le(s, n),
      r = this._positionChanged(n, e);
    (o || r) &&
      ((this._active = n),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options,
      o = this._active || [],
      r = this._getActiveElements(t, o, e, s),
      a = this._positionChanged(r, t),
      l = e || !Le(r, o) || a;
    return (
      l &&
        ((this._active = r),
        (n.enabled || n.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
      l
    );
  }
  _getActiveElements(t, e, s, n) {
    const o = this.options;
    if (t.type === "mouseout") return [];
    if (!n) return e;
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: n, options: o } = this,
      r = oe[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
Ai.positioners = oe;
var Lc = {
    id: "tooltip",
    _element: Ai,
    positioners: oe,
    afterInit(i, t, e) {
      e && (i.tooltip = new Ai({ chart: i, options: e }));
    },
    beforeUpdate(i, t, e) {
      i.tooltip && i.tooltip.initialize(e);
    },
    reset(i, t, e) {
      i.tooltip && i.tooltip.initialize(e);
    },
    afterDraw(i) {
      const t = i.tooltip;
      if (t && t._willRender()) {
        const e = { tooltip: t };
        if (i.notifyPlugins("beforeTooltipDraw", e) === !1) return;
        t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
      }
    },
    afterEvent(i, t) {
      if (i.tooltip) {
        const e = t.replay;
        i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: { weight: "bold" },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: "bold" },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (i, t) => t.bodyFont.size,
      boxWidth: (i, t) => t.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: !0,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: { duration: 400, easing: "easeOutQuart" },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"],
        },
        opacity: { easing: "linear", duration: 200 },
      },
      callbacks: {
        beforeTitle: dt,
        title(i) {
          if (i.length > 0) {
            const t = i[0],
              e = t.chart.data.labels,
              s = e ? e.length : 0;
            if (this && this.options && this.options.mode === "dataset")
              return t.dataset.label || "";
            if (t.label) return t.label;
            if (s > 0 && t.dataIndex < s) return e[t.dataIndex];
          }
          return "";
        },
        afterTitle: dt,
        beforeBody: dt,
        beforeLabel: dt,
        label(i) {
          if (this && this.options && this.options.mode === "dataset")
            return i.label + ": " + i.formattedValue || i.formattedValue;
          let t = i.dataset.label || "";
          t && (t += ": ");
          const e = i.formattedValue;
          return T(e) || (t += e), t;
        },
        labelColor(i) {
          const e = i.chart
            .getDatasetMeta(i.datasetIndex)
            .controller.getStyle(i.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0,
          };
        },
        labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle(i) {
          const e = i.chart
            .getDatasetMeta(i.datasetIndex)
            .controller.getStyle(i.dataIndex);
          return { pointStyle: e.pointStyle, rotation: e.rotation };
        },
        afterLabel: dt,
        afterBody: dt,
        beforeFooter: dt,
        footer: dt,
        afterFooter: dt,
      },
    },
    defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
    descriptors: {
      _scriptable: (i) =>
        i !== "filter" && i !== "itemSort" && i !== "external",
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: "animation" },
    },
    additionalOptionScopes: ["interaction"],
  },
  Tc = Object.freeze({
    __proto__: null,
    Decimation: Zl,
    Filler: bc,
    Legend: yc,
    SubTitle: Mc,
    Title: wc,
    Tooltip: Lc,
  });
const Rc = (i, t, e, s) => (
  typeof t == "string"
    ? ((e = i.push(t) - 1), s.unshift({ index: e, label: t }))
    : isNaN(t) && (e = null),
  e
);
function Ec(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1) return Rc(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Fc = (i, t) => (i === null ? null : X(Math.round(i), 0, t));
class Ve extends Ft {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const { index: n, label: o } of e) s[n] === o && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (T(t)) return null;
    const s = this.getLabels();
    return (
      (e =
        isFinite(e) && s[e] === t ? e : Ec(s, t, D(e, t), this._addedLabels)),
      Fc(e, s.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: s, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (s = 0), e || (n = this.getLabels().length - 1)),
      (this.min = s),
      (this.max = n);
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      s = this.options.offset,
      n = [];
    let o = this.getLabels();
    (o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
      (this._valueRange = Math.max(o.length - (s ? 0 : 1), 1)),
      (this._startValue = this.min - (s ? 0.5 : 0));
    for (let r = t; r <= e; r++) n.push({ value: r });
    return n;
  }
  getLabelForValue(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
Ve.id = "category";
Ve.defaults = { ticks: { callback: Ve.prototype.getLabelForValue } };
function Ic(i, t) {
  const e = [],
    {
      bounds: n,
      step: o,
      min: r,
      max: a,
      precision: l,
      count: c,
      maxTicks: h,
      maxDigits: d,
      includeBounds: u,
    } = i,
    f = o || 1,
    g = h - 1,
    { min: p, max: m } = t,
    b = !T(r),
    x = !T(a),
    v = !T(c),
    y = (m - p) / (d + 1);
  let _ = Ji((m - p) / g / f) * f,
    w,
    M,
    S,
    k;
  if (_ < 1e-14 && !b && !x) return [{ value: p }, { value: m }];
  (k = Math.ceil(m / _) - Math.floor(p / _)),
    k > g && (_ = Ji((k * _) / g / f) * f),
    T(l) || ((w = Math.pow(10, l)), (_ = Math.ceil(_ * w) / w)),
    n === "ticks"
      ? ((M = Math.floor(p / _) * _), (S = Math.ceil(m / _) * _))
      : ((M = p), (S = m)),
    b && x && o && wo((a - r) / o, _ / 1e3)
      ? ((k = Math.round(Math.min((a - r) / _, h))),
        (_ = (a - r) / k),
        (M = r),
        (S = a))
      : v
      ? ((M = b ? r : M), (S = x ? a : S), (k = c - 1), (_ = (S - M) / k))
      : ((k = (S - M) / _),
        ie(k, Math.round(k), _ / 1e3)
          ? (k = Math.round(k))
          : (k = Math.ceil(k)));
  const R = Math.max(Qi(_), Qi(M));
  (w = Math.pow(10, T(l) ? R : l)),
    (M = Math.round(M * w) / w),
    (S = Math.round(S * w) / w);
  let E = 0;
  for (
    b &&
    (u && M !== r
      ? (e.push({ value: r }),
        M < r && E++,
        ie(Math.round((M + E * _) * w) / w, r, sn(r, y, i)) && E++)
      : M < r && E++);
    E < k;
    ++E
  )
    e.push({ value: Math.round((M + E * _) * w) / w });
  return (
    x && u && S !== a
      ? e.length && ie(e[e.length - 1].value, a, sn(a, y, i))
        ? (e[e.length - 1].value = a)
        : e.push({ value: a })
      : (!x || S === a) && e.push({ value: S }),
    e
  );
}
function sn(i, t, { horizontal: e, minRotation: s }) {
  const n = st(s),
    o = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
    r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class We extends Ft {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return T(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => (n = e ? n : l),
      a = (l) => (o = s ? o : l);
    if (t) {
      const l = lt(n),
        c = lt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (n === o) {
      let l = 1;
      (o >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) &&
        (l = Math.abs(o * 0.05)),
        a(o + l),
        t || r(n - l);
    }
    (this.min = n), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: s } = t,
      n;
    return (
      s
        ? ((n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          n > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`
            ),
            (n = 1e3)))
        : ((n = this.computeTickLimit()), (e = e || 11)),
      e && (n = Math.min(e, n)),
      n
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const n = {
        maxTicks: s,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: e.includeBounds !== !1,
      },
      o = this._range || this,
      r = Ic(n, o);
    return (
      t.bounds === "ticks" && un(r, this, "value"),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      s = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const n = (s - e) / Math.max(t.length - 1, 1) / 2;
      (e -= n), (s += n);
    }
    (this._startValue = e), (this._endValue = s), (this._valueRange = s - e);
  }
  getLabelForValue(t) {
    return fe(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Xi extends We {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = H(t) ? t : 0),
      (this.max = H(e) ? e : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      s = st(this.options.ticks.minRotation),
      n = (t ? Math.sin(s) : Math.cos(s)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
Xi.id = "linear";
Xi.defaults = { ticks: { callback: qe.formatters.numeric } };
function nn(i) {
  return i / Math.pow(10, Math.floor(et(i))) === 1;
}
function zc(i, t) {
  const e = Math.floor(et(t.max)),
    s = Math.ceil(t.max / Math.pow(10, e)),
    n = [];
  let o = tt(i.min, Math.pow(10, Math.floor(et(t.min)))),
    r = Math.floor(et(o)),
    a = Math.floor(o / Math.pow(10, r)),
    l = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  do
    n.push({ value: o, major: nn(o) }),
      ++a,
      a === 10 && ((a = 1), ++r, (l = r >= 0 ? 1 : l)),
      (o = Math.round(a * Math.pow(10, r) * l) / l);
  while (r < e || (r === e && a < s));
  const c = tt(i.max, o);
  return n.push({ value: c, major: nn(o) }), n;
}
class Ui extends Ft {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const s = We.prototype.parse.apply(this, [t, e]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return H(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = H(t) ? Math.max(0, t) : null),
      (this.max = H(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let s = this.min,
      n = this.max;
    const o = (l) => (s = t ? s : l),
      r = (l) => (n = e ? n : l),
      a = (l, c) => Math.pow(10, Math.floor(et(l)) + c);
    s === n && (s <= 0 ? (o(1), r(10)) : (o(a(s, -1)), r(a(n, 1)))),
      s <= 0 && o(a(n, -1)),
      n <= 0 && r(a(s, 1)),
      this._zero &&
        this.min !== this._suggestedMin &&
        s === a(this.min, 0) &&
        o(a(s, -1)),
      (this.min = s),
      (this.max = n);
  }
  buildTicks() {
    const t = this.options,
      e = { min: this._userMin, max: this._userMax },
      s = zc(e, this);
    return (
      t.bounds === "ticks" && un(s, this, "value"),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : fe(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = et(t)),
      (this._valueRange = et(this.max) - et(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (et(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
Ui.id = "logarithmic";
Ui.defaults = {
  ticks: { callback: qe.formatters.logarithmic, major: { enabled: !0 } },
};
function Oi(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = q(t.backdropPadding);
    return D(t.font && t.font.size, L.font.size) + e.height;
  }
  return 0;
}
function Bc(i, t, e) {
  return (
    (e = B(e) ? e : [e]), { w: tr(i, t.string, e), h: e.length * t.lineHeight }
  );
}
function on(i, t, e, s, n) {
  return i === s || i === n
    ? { start: t - e / 2, end: t + e / 2 }
    : i < s || i > n
    ? { start: t - e, end: t }
    : { start: t, end: t + e };
}
function Vc(i) {
  const t = {
      l: i.left + i._padding.left,
      r: i.right - i._padding.right,
      t: i.top + i._padding.top,
      b: i.bottom - i._padding.bottom,
    },
    e = Object.assign({}, t),
    s = [],
    n = [],
    o = i._pointLabels.length,
    r = i.options.pointLabels,
    a = r.centerPointLabels ? V / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + n[l], a),
      d = Y(c.font),
      u = Bc(i.ctx, d, i._pointLabels[l]);
    s[l] = u;
    const f = J(i.getIndexAngle(l) + a),
      g = Math.round(Ti(f)),
      p = on(g, h.x, u.w, 0, 180),
      m = on(g, h.y, u.h, 90, 270);
    Wc(e, t, f, p, m);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
    (i._pointLabelItems = Nc(i, s, n));
}
function Wc(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)),
    r = Math.abs(Math.cos(e));
  let a = 0,
    l = 0;
  s.start < t.l
    ? ((a = (t.l - s.start) / o), (i.l = Math.min(i.l, t.l - a)))
    : s.end > t.r && ((a = (s.end - t.r) / o), (i.r = Math.max(i.r, t.r + a))),
    n.start < t.t
      ? ((l = (t.t - n.start) / r), (i.t = Math.min(i.t, t.t - l)))
      : n.end > t.b &&
        ((l = (n.end - t.b) / r), (i.b = Math.max(i.b, t.b + l)));
}
function Nc(i, t, e) {
  const s = [],
    n = i._pointLabels.length,
    o = i.options,
    r = Oi(o) / 2,
    a = i.drawingArea,
    l = o.pointLabels.centerPointLabels ? V / n : 0;
  for (let c = 0; c < n; c++) {
    const h = i.getPointPosition(c, a + r + e[c], l),
      d = Math.round(Ti(J(h.angle + W))),
      u = t[c],
      f = $c(h.y, u.h, d),
      g = Hc(d),
      p = jc(h.x, u.w, g);
    s.push({
      x: h.x,
      y: f,
      textAlign: g,
      left: p,
      top: f,
      right: p + u.w,
      bottom: f + u.h,
    });
  }
  return s;
}
function Hc(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function jc(i, t, e) {
  return e === "right" ? (i -= t) : e === "center" && (i -= t / 2), i;
}
function $c(i, t, e) {
  return (
    e === 90 || e === 270 ? (i -= t / 2) : (e > 270 || e < 90) && (i -= t), i
  );
}
function Yc(i, t) {
  const {
    ctx: e,
    options: { pointLabels: s },
  } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = s.setContext(i.getPointLabelContext(n)),
      r = Y(o.font),
      {
        x: a,
        y: l,
        textAlign: c,
        left: h,
        top: d,
        right: u,
        bottom: f,
      } = i._pointLabelItems[n],
      { backdropColor: g } = o;
    if (!T(g)) {
      const p = Lt(o.borderRadius),
        m = q(o.backdropPadding);
      e.fillStyle = g;
      const b = h - m.left,
        x = d - m.top,
        v = u - h + m.width,
        y = f - d + m.height;
      Object.values(p).some((_) => _ !== 0)
        ? (e.beginPath(),
          ce(e, { x: b, y: x, w: v, h: y, radius: p }),
          e.fill())
        : e.fillRect(b, x, v, y);
    }
    Et(e, i._pointLabels[n], a, l + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle",
    });
  }
}
function ro(i, t, e, s) {
  const { ctx: n } = i;
  if (e) n.arc(i.xCenter, i.yCenter, t, 0, I);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      (o = i.getPointPosition(r, t)), n.lineTo(o.x, o.y);
  }
}
function Xc(i, t, e, s) {
  const n = i.ctx,
    o = t.circular,
    { color: r, lineWidth: a } = t;
  (!o && !s) ||
    !r ||
    !a ||
    e < 0 ||
    (n.save(),
    (n.strokeStyle = r),
    (n.lineWidth = a),
    n.setLineDash(t.borderDash),
    (n.lineDashOffset = t.borderDashOffset),
    n.beginPath(),
    ro(i, e, o, s),
    n.closePath(),
    n.stroke(),
    n.restore());
}
function Uc(i, t, e) {
  return kt(i, { label: e, index: t, type: "pointLabel" });
}
class pe extends We {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = q(Oi(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      s = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + s / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, s) / 2));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    (this.min = H(t) && !isNaN(t) ? t : 0),
      (this.max = H(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Oi(this.options));
  }
  generateTickLabels(t) {
    We.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, s) => {
          const n = z(this.options.pointLabels.callback, [e, s], this);
          return n || n === 0 ? n : "";
        })
        .filter((e, s) => this.chart.getDataVisibility(s)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? Vc(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    (this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((s - n) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, e, s, n)
      ));
  }
  getIndexAngle(t) {
    const e = I / (this._pointLabels.length || 1),
      s = this.options.startAngle || 0;
    return J(t * e + st(s));
  }
  getDistanceFromCenterForValue(t) {
    if (T(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (T(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return Uc(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - W + s;
    return {
      x: Math.cos(n) * e + this.xCenter,
      y: Math.sin(n) * e + this.yCenter,
      angle: n,
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: s, right: n, bottom: o } = this._pointLabelItems[t];
    return { left: e, top: s, right: n, bottom: o };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(),
        s.beginPath(),
        ro(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          e,
          this._pointLabels.length
        ),
        s.closePath(),
        (s.fillStyle = t),
        s.fill(),
        s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: s, grid: n } = e,
      o = this._pointLabels.length;
    let r, a, l;
    if (
      (e.pointLabels.display && Yc(this, o),
      n.display &&
        this.ticks.forEach((c, h) => {
          if (h !== 0) {
            a = this.getDistanceFromCenterForValue(c.value);
            const d = n.setContext(this.getContext(h - 1));
            Xc(this, d, a, o);
          }
        }),
      s.display)
    ) {
      for (t.save(), r = o - 1; r >= 0; r--) {
        const c = s.setContext(this.getPointLabelContext(r)),
          { color: h, lineWidth: d } = c;
        !d ||
          !h ||
          ((t.lineWidth = d),
          (t.strokeStyle = h),
          t.setLineDash(c.borderDash),
          (t.lineDashOffset = c.borderDashOffset),
          (a = this.getDistanceFromCenterForValue(
            e.ticks.reverse ? this.min : this.max
          )),
          (l = this.getPointPosition(r, a)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(l.x, l.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      s = e.ticks;
    if (!s.display) return;
    const n = this.getIndexAngle(0);
    let o, r;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(n),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && !e.reverse) return;
        const c = s.setContext(this.getContext(l)),
          h = Y(c.font);
        if (
          ((o = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          c.showLabelBackdrop)
        ) {
          (t.font = h.string),
            (r = t.measureText(a.label).width),
            (t.fillStyle = c.backdropColor);
          const d = q(c.backdropPadding);
          t.fillRect(
            -r / 2 - d.left,
            -o - h.size / 2 - d.top,
            r + d.width,
            h.size + d.height
          );
        }
        Et(t, a.label, 0, -o, h, { color: c.color });
      }),
      t.restore();
  }
  drawTitle() {}
}
pe.id = "radialLinear";
pe.defaults = {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0,
  },
  grid: { circular: !1 },
  startAngle: 0,
  ticks: { showLabelBackdrop: !0, callback: qe.formatters.numeric },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: { size: 10 },
    callback(i) {
      return i;
    },
    padding: 5,
    centerPointLabels: !1,
  },
};
pe.defaultRoutes = {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color",
};
pe.descriptors = { angleLines: { _fallback: "grid" } };
const ti = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Z = Object.keys(ti);
function Kc(i, t) {
  return i - t;
}
function rn(i, t) {
  if (T(t)) return null;
  const e = i._adapter,
    { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return (
    typeof s == "function" && (r = s(r)),
    H(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)),
    r === null
      ? null
      : (n &&
          (r =
            n === "week" && (Nt(o) || o === !0)
              ? e.startOf(r, "isoWeek", o)
              : e.startOf(r, n)),
        +r)
  );
}
function an(i, t, e, s) {
  const n = Z.length;
  for (let o = Z.indexOf(i); o < n - 1; ++o) {
    const r = ti[Z[o]],
      a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s) return Z[o];
  }
  return Z[n - 1];
}
function qc(i, t, e, s, n) {
  for (let o = Z.length - 1; o >= Z.indexOf(e); o--) {
    const r = Z[o];
    if (ti[r].common && i._adapter.diff(n, s, r) >= t - 1) return r;
  }
  return Z[e ? Z.indexOf(e) : 0];
}
function Gc(i) {
  for (let t = Z.indexOf(i) + 1, e = Z.length; t < e; ++t)
    if (ti[Z[t]].common) return Z[t];
}
function ln(i, t, e) {
  if (!e) i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Ri(e, t),
      o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function Zc(i, t, e, s) {
  const n = i._adapter,
    o = +n.startOf(t[0].value, s),
    r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    (l = e[a]), l >= 0 && (t[l].major = !0);
  return t;
}
function cn(i, t, e) {
  const s = [],
    n = {},
    o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    (a = t[r]), (n[a] = r), s.push({ value: a, major: !1 });
  return o === 0 || !e ? s : Zc(i, s, n, e);
}
class me extends Ft {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, e) {
    const s = t.time || (t.time = {}),
      n = (this._adapter = new za._date(t.adapters.date));
    n.init(e),
      ee(s.displayFormats, n.formats()),
      (this._parseOpts = {
        parser: s.parser,
        round: s.round,
        isoWeekday: s.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return t === void 0 ? null : rn(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      s = t.time.unit || "day";
    let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (n = Math.min(n, c.min)),
        !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (n = H(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s)),
      (o = H(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1),
      (this.min = Math.min(n, o - 1)),
      (this.max = Math.max(n + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      s = Number.NEGATIVE_INFINITY;
    return t.length && ((e = t[0]), (s = t[t.length - 1])), { min: e, max: s };
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      s = t.ticks,
      n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      n.length &&
      ((this.min = this._userMin || n[0]),
      (this.max = this._userMax || n[n.length - 1]));
    const o = this.min,
      r = this.max,
      a = Po(n, o, r);
    return (
      (this._unit =
        e.unit ||
        (s.autoSkip
          ? an(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : qc(this, a.length, e.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === "year" ? void 0 : Gc(this._unit)),
      this.initOffsets(n),
      t.reverse && a.reverse(),
      cn(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t) {
    let e = 0,
      s = 0,
      n,
      o;
    this.options.offset &&
      t.length &&
      ((n = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (e = 1 - n)
        : (e = (this.getDecimalForValue(t[1]) - n) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (s = o)
        : (s = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const r = t.length < 3 ? 0.5 : 0.25;
    (e = X(e, 0, r)),
      (s = X(s, 0, r)),
      (this._offsets = { start: e, end: s, factor: 1 / (e + 1 + s) });
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      s = this.max,
      n = this.options,
      o = n.time,
      r = o.unit || an(o.minUnit, e, s, this._getLabelCapacity(e)),
      a = D(o.stepSize, 1),
      l = r === "week" ? o.isoWeekday : !1,
      c = Nt(l) || l === !0,
      h = {};
    let d = e,
      u,
      f;
    if (
      (c && (d = +t.startOf(d, "isoWeek", l)),
      (d = +t.startOf(d, c ? "day" : r)),
      t.diff(s, e, r) > 1e5 * a)
    )
      throw new Error(
        e + " and " + s + " are too far apart with stepSize of " + a + " " + r
      );
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < s; u = +t.add(u, a, r), f++) ln(h, u, g);
    return (
      (u === s || n.bounds === "ticks" || f === 1) && ln(h, u, g),
      Object.keys(h)
        .sort((p, m) => p - m)
        .map((p) => +p)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      s = this.options.time;
    return s.tooltipFormat
      ? e.format(t, s.tooltipFormat)
      : e.format(t, s.displayFormats.datetime);
  }
  _tickFormatFunction(t, e, s, n) {
    const o = this.options,
      r = o.time.displayFormats,
      a = this._unit,
      l = this._majorUnit,
      c = a && r[a],
      h = l && r[l],
      d = s[e],
      u = l && h && d && d.major,
      f = this._adapter.format(t, n || (u ? h : c)),
      g = o.ticks.callback;
    return g ? z(g, [f, e, s], this) : f;
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e)
      (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      s = this.ctx.measureText(t).width,
      n = st(this.isHorizontal() ? e.maxRotation : e.minRotation),
      o = Math.cos(n),
      r = Math.sin(n),
      a = this._resolveTickFontOptions(0).size;
    return { w: s * o + a * r, h: s * r + a * o };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      s = e.displayFormats,
      n = s[e.unit] || s.millisecond,
      o = this._tickFormatFunction(t, 0, cn(this, [t], this._majorUnit), n),
      r = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      e,
      s;
    if (t.length) return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return (this._cache.data = n[0].controller.getAllParsedValues(this));
    for (e = 0, s = n.length; e < s; ++e)
      t = t.concat(n[e].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length) return t;
    const n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e) t.push(rn(this, n[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return pn(t.sort(Kc));
  }
}
me.id = "time";
me.defaults = {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {},
  },
  ticks: { source: "auto", major: { enabled: !1 } },
};
function Ae(i, t, e) {
  let s = 0,
    n = i.length - 1,
    o,
    r,
    a,
    l;
  e
    ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = mt(i, "pos", t)),
      ({ pos: o, time: a } = i[s]),
      ({ pos: r, time: l } = i[n]))
    : (t >= i[s].time &&
        t <= i[n].time &&
        ({ lo: s, hi: n } = mt(i, "time", t)),
      ({ time: o, pos: a } = i[s]),
      ({ time: r, pos: l } = i[n]));
  const c = r - o;
  return c ? a + ((l - a) * (t - o)) / c : a;
}
class Ki extends me {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    (this._minPos = Ae(e, this.min)),
      (this._tableRange = Ae(e, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this,
      n = [],
      o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      (c = t[r]), c >= e && c <= s && n.push(c);
    if (n.length < 2)
      return [
        { time: e, pos: 0 },
        { time: s, pos: 1 },
      ];
    for (r = 0, a = n.length; r < a; ++r)
      (h = n[r + 1]),
        (l = n[r - 1]),
        (c = n[r]),
        Math.round((h + l) / 2) !== c && o.push({ time: c, pos: r / (a - 1) });
    return o;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const e = this.getDataTimestamps(),
      s = this.getLabelTimestamps();
    return (
      e.length && s.length
        ? (t = this.normalize(e.concat(s)))
        : (t = e.length ? e : s),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Ae(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ae(this._table, s * this._tableRange + this._minPos, !0);
  }
}
Ki.id = "timeseries";
Ki.defaults = me.defaults;
var Jc = Object.freeze({
  __proto__: null,
  CategoryScale: Ve,
  LinearScale: Xi,
  LogarithmicScale: Ui,
  RadialLinearScale: pe,
  TimeScale: me,
  TimeSeriesScale: Ki,
});
const Qc = [Ia, Ul, Tc, Jc];
de.register(...Qc);
const th = new Date("2024-04-13T00:00:00"),
  eh = {
    name: "Charts",
    setup() {
      const i = oi(null),
        t = oi(null);
      let e = oi(0);
      return (
        lo(() => {
          const s = i.value.getContext("2d"),
            n = t.value.getContext("2d");
          e.value = Math.floor((new Date() - th) / 12e3);
          const o = {
              labels: ["GPU4", "POM", "PIL"],
              datasets: [
                {
                  label: "Donut Chart",
                  data: [300, 50, 100],
                  backgroundColor: ["#A2E635", "#F6FEE7", "#878D84"],
                  borderWidth: 0,
                },
              ],
            },
            r = {
              labels: ["1", "2", "3", "4", "5", "6", "7"],
              datasets: [
                {
                  label: "Line Chart",
                  data: [
                    e.value / 10,
                    e.value / 3,
                    e.value * 0.9,
                    e.value * 0.75,
                    e.value * 0.66,
                    e.value * 0.5,
                    e.value,
                  ],
                  fill: !1,
                  borderColor: "#A2E635",
                  tension: 0.1,
                },
              ],
            };
          new de(s, {
            type: "doughnut",
            data: o,
            options: {
              radius: "70%",
              cutout: "80%",
              scales: { y: { beginAtZero: !0 } },
            },
          }),
            new de(n, {
              type: "line",
              data: r,
              options: {
                scales: { y: { beginAtZero: !0 } },
                plugins: { legend: { display: !1 } },
              },
            });
        }),
        { donutChart: i, lineChart: t, request: e }
      );
    },
  },
  ih = { class: "pt-36 text-white w-full" },
  sh = { class: "flex justify-between flex-wrap w-full text-lime-50" },
  nh = P(
    "div",
    { class: "h-56 w-full md:w-1/2 xl:w-1/4 p-5 2xl:px-10" },
    [
      P("div", { class: "bg-sec py-4 px-7 rounded-xl h-full" }, [
        P(
          "div",
          { class: "text-2xl opacity-50 text-nowrap" },
          "Personal GPU(s)"
        ),
        P("div", { class: "text-7xl text-center p-5" }, "0"),
      ]),
    ],
    -1
  ),
  oh = { class: "h-56 w-full md:w-1/2 xl:w-1/4 p-5 2xl:px-10" },
  rh = { class: "bg-sec py-4 px-7 rounded-xl h-full" },
  ah = P("div", { class: "text-2xl opacity-50" }, "$GPU4 Earned", -1),
  lh = P("div", { class: "text-5xl text-center p-5" }, "0", -1),
  ch = { class: "flex justify-between w-full" },
  hh = {
    class:
      "bg-gray-600 text-white px-3 py-2 rounded-xl flex opacity-50 cursor-not-allowed text-xs",
  },
  dh = {
    class: "w-3 mr-1",
    style: { fill: "white" },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  uh = P(
    "path",
    {
      d: "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",
    },
    null,
    -1
  ),
  fh = [uh],
  gh = {
    class:
      "bg-gray-600 text-white px-3 py-2 rounded-xl flex opacity-50 cursor-not-allowed text-xs",
  },
  ph = {
    class: "w-3 mr-1",
    style: { fill: "green" },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
  },
  mh = P(
    "path",
    {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
    },
    null,
    -1
  ),
  bh = [mh],
  xh = { class: "h-56 w-full md:w-1/2 xl:w-1/4 p-5 2xl:px-10" },
  _h = { class: "bg-sec py-4 px-7 rounded-xl h-full" },
  yh = P("div", { class: "text-2xl opacity-50" }, "LLM Requests", -1),
  vh = { class: "text-5xl text-center p-5" },
  wh = { class: "flex justify-between w-full" },
  Mh = {
    class:
      "bg-gray-600 text-white px-3 py-2 rounded-xl flex opacity-50 cursor-not-allowed text-xs",
  },
  kh = {
    class: "w-3 mr-1",
    style: { fill: "white" },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  Sh = P(
    "path",
    {
      d: "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",
    },
    null,
    -1
  ),
  Ph = [Sh],
  Ch = {
    key: 0,
    class:
      "bg-gray-600 px-3 py-2 rounded-xl flex opacity-50 cursor-not-allowed text-xs text-lime-400",
  },
  Dh = {
    class: "w-3 mr-1",
    style: { fill: "green" },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
  },
  Ah = P(
    "path",
    {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
    },
    null,
    -1
  ),
  Oh = [Ah],
  Lh = { class: "h-56 w-full md:w-1/2 xl:w-1/4 p-5 2xl:px-10" },
  Th = { class: "bg-sec py-4 px-7 rounded-xl h-full" },
  Rh = P("div", { class: "text-2xl opacity-50" }, "Total GPUs", -1),
  Eh = P("div", { class: "text-5xl text-center p-5" }, "24", -1),
  Fh = { class: "flex justify-between w-full" },
  Ih = {
    class:
      "bg-gray-600 text-white px-3 py-2 rounded-xl flex opacity-50 cursor-not-allowed text-xs",
  },
  zh = {
    class: "w-3 mr-1",
    style: { fill: "white" },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  Bh = P(
    "path",
    {
      d: "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",
    },
    null,
    -1
  ),
  Vh = [Bh],
  Wh = {
    class:
      "bg-gray-600 text-white px-3 py-2 rounded-xl flex opacity-50 cursor-not-allowed text-xs",
  },
  Nh = {
    class: "w-3 mr-1",
    style: { fill: "green" },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
  },
  Hh = P(
    "path",
    {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
    },
    null,
    -1
  ),
  jh = [Hh],
  $h = { class: "flex flex-wrap w-full relative px-5 2xl:px-10 py-10" },
  Yh = { class: "xl:w-2/3 w-full xl:pr-10 py-5" },
  Xh = { class: "bg-sec py-4 px-7 rounded-xl h-full" },
  Uh = { class: "flex justify-between w-full" },
  Kh = P("div", { class: "text-sm opacity-40" }, "Last 7 days", -1),
  qh = {
    class:
      "bg-gray-600 text-white px-3 py-2 rounded-xl flex opacity-50 cursor-not-allowed",
  },
  Gh = {
    class: "w-3 ml-1",
    style: { fill: "white" },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  Zh = P(
    "path",
    {
      d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z",
    },
    null,
    -1
  ),
  Jh = [Zh],
  Qh = { class: "w-4/5", ref: "lineChart" },
  td = { class: "xl:w-1/3 w-full py-5" },
  ed = { class: "bg-sec py-4 px-7 rounded-xl h-full relative" },
  id = P("h2", { class: "text-lime-50 text-2xl" }, "Personal Rewards", -1),
  sd = { class: "w-4/5", ref: "donutChart" },
  nd = P(
    "div",
    {
      class: "absolute flex flex-wrap justify-center items-center",
      style: {
        top: "0px",
        left: "0px",
        width: "calc(100% + 2em)",
        height: "calc(100% + 2em)",
      },
    },
    [
      P("div", null, [
        P("div", { class: "w-full text-center text-xl" }, "Total:"),
        P("div", { class: "w-full text-center text-4xl mt-2" }, [
          xt("0"),
          P("b", null, "$"),
        ]),
      ]),
    ],
    -1
  ),
  od = ho(
    '<div class="flex flex-wrap w-full relative px-5 2xl:px-10"><div class="w-full py-5"><div class="bg-sec py-4 px-7 rounded-xl h-full relative"><div class="text-lime-50">Recent Activity</div><div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200 divide-opacity-10"><thead><tr><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-lime-800 uppercase tracking-wider"> Request number </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-lime-800 uppercase tracking-wider"> Date </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-lime-800 uppercase tracking-wider"> Token </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-lime-800 uppercase tracking-wider"> Reward </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-lime-800 uppercase tracking-wider"> Status </th></tr></thead><tbody class="divide-y divide-gray-200 divide-opacity-10"><tr></tr></tbody></table></div><div class="text-gray-500 text-center text-2xl mt-4">No activity</div></div></div></div>',
    1
  );
function rd(i, t, e, s, n, o) {
  return (
    ht(),
    ct("div", ih, [
      P("div", sh, [
        nh,
        P("div", oh, [
          P("div", rh, [
            ah,
            lh,
            P("div", ch, [
              P("div", hh, [(ht(), ct("svg", dh, fh)), xt(" 24h ")]),
              P("div", gh, [(ht(), ct("svg", ph, bh)), xt(" 0% ")]),
            ]),
          ]),
        ]),
        P("div", xh, [
          P("div", _h, [
            yh,
            P("div", vh, co(0), 1),
            P("div", wh, [
              P("div", Mh, [(ht(), ct("svg", kh, Ph)), xt(" Week ")]),
              (ht(), ct("div", Ch, [(ht(), ct("svg", Dh, Oh)), xt(" 0% ")])),
            ]),
          ]),
        ]),
        P("div", Lh, [
          P("div", Th, [
            Rh,
            Eh,
            P("div", Fh, [
              P("div", Ih, [(ht(), ct("svg", zh, Vh)), xt(" 24h ")]),
              P("div", Wh, [(ht(), ct("svg", Nh, jh)), xt(" 0% ")]),
            ]),
          ]),
        ]),
      ]),
      P("div", $h, [
        P("div", Yh, [
          P("div", Xh, [
            P("div", Uh, [
              Kh,
              P("div", qh, [xt(" Week "), (ht(), ct("svg", Gh, Jh))]),
            ]),
            P("canvas", Qh, null, 512),
          ]),
        ]),
        P("div", td, [P("div", ed, [id, P("canvas", sd, null, 512), nd])]),
      ]),
      od,
    ])
  );
}
const cd = ao(eh, [["render", rd]]);
export { cd as default };
