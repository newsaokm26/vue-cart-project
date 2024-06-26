import {
  e as L,
  m as z,
  aA as N,
  a$ as U,
  ai as Y,
  ac as J,
  U as K,
  l as j,
  O as k,
  a3 as F,
  P as Q,
  j as Z,
  o as ee,
  c as te,
  q as H,
  s as oe,
  b0 as ne,
  n as re,
  E as le
} from './index-Dn-ej6oH.js'
import './request-N0ug3Hqv.js'
function se(e) {
  return U() ? (Y(e), !0) : !1
}
function _(e) {
  return typeof e == 'function' ? e() : L(e)
}
const ce = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const ae = Object.prototype.toString,
  ie = (e) => ae.call(e) === '[object Object]',
  S = () => {}
function B(e, r) {
  function t(...o) {
    return new Promise((l, s) => {
      Promise.resolve(
        e(() => r.apply(this, o), { fn: r, thisArg: this, args: o })
      )
        .then(l)
        .catch(s)
    })
  }
  return t
}
function ue(e, r = {}) {
  let t,
    o,
    l = S
  const s = (i) => {
    clearTimeout(i), l(), (l = S)
  }
  return (i) => {
    const m = _(e),
      c = _(r.maxWait)
    return (
      t && s(t),
      m <= 0 || (c !== void 0 && c <= 0)
        ? (o && (s(o), (o = null)), Promise.resolve(i()))
        : new Promise((a, u) => {
            ;(l = r.rejectOnCancel ? u : a),
              c &&
                !o &&
                (o = setTimeout(() => {
                  t && s(t), (o = null), a(i())
                }, c)),
              (t = setTimeout(() => {
                o && s(o), (o = null), a(i())
              }, m))
          })
    )
  }
}
function fe(...e) {
  let r = 0,
    t,
    o = !0,
    l = S,
    s,
    f,
    i,
    m,
    c
  !J(e[0]) && typeof e[0] == 'object'
    ? ({
        delay: f,
        trailing: i = !0,
        leading: m = !0,
        rejectOnCancel: c = !1
      } = e[0])
    : ([f, i = !0, m = !0, c = !1] = e)
  const a = () => {
    t && (clearTimeout(t), (t = void 0), l(), (l = S))
  }
  return (v) => {
    const p = _(f),
      T = Date.now() - r,
      x = () => (s = v())
    return (
      a(),
      p <= 0
        ? ((r = Date.now()), x())
        : (T > p && (m || !o)
            ? ((r = Date.now()), x())
            : i &&
              (s = new Promise((w, h) => {
                ;(l = c ? h : w),
                  (t = setTimeout(
                    () => {
                      ;(r = Date.now()), (o = !0), w(x()), a()
                    },
                    Math.max(0, p - T)
                  ))
              })),
          !m && !t && (t = setTimeout(() => (o = !0), p)),
          (o = !1),
          s)
    )
  }
}
function pe(e) {
  return e || K()
}
function de(e, r = 200, t = {}) {
  return B(ue(r, t), e)
}
function me(e, r = 200, t = !1, o = !0, l = !1) {
  return B(fe(r, t, o, l), e)
}
function ve(e, r = !0, t) {
  pe() ? z(e, t) : r ? e() : N(e)
}
function X(e) {
  var r
  const t = _(e)
  return (r = t == null ? void 0 : t.$el) != null ? r : t
}
const $ = ce ? window : void 0
function V(...e) {
  let r, t, o, l
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([t, o, l] = e), (r = $))
      : ([r, t, o, l] = e),
    !r)
  )
    return S
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o])
  const s = [],
    f = () => {
      s.forEach((a) => a()), (s.length = 0)
    },
    i = (a, u, v, p) => (
      a.addEventListener(u, v, p), () => a.removeEventListener(u, v, p)
    ),
    m = Q(
      () => [X(r), _(l)],
      ([a, u]) => {
        if ((f(), !a)) return
        const v = ie(u) ? { ...u } : u
        s.push(...t.flatMap((p) => o.map((T) => i(a, p, T, v))))
      },
      { immediate: !0, flush: 'post' }
    ),
    c = () => {
      m(), f()
    }
  return se(c), c
}
const G = 1
function he(e, r = {}) {
  const {
      throttle: t = 0,
      idle: o = 200,
      onStop: l = S,
      onScroll: s = S,
      offset: f = { left: 0, right: 0, top: 0, bottom: 0 },
      eventListenerOptions: i = { capture: !1, passive: !0 },
      behavior: m = 'auto',
      window: c = $,
      onError: a = (n) => {
        console.error(n)
      }
    } = r,
    u = j(0),
    v = j(0),
    p = k({
      get() {
        return u.value
      },
      set(n) {
        x(n, void 0)
      }
    }),
    T = k({
      get() {
        return v.value
      },
      set(n) {
        x(void 0, n)
      }
    })
  function x(n, g) {
    var d, D, A
    if (!c) return
    const y = _(e)
    y &&
      ((A = y instanceof Document ? c.document.body : y) == null ||
        A.scrollTo({
          top: (d = _(g)) != null ? d : T.value,
          left: (D = _(n)) != null ? D : p.value,
          behavior: _(m)
        }))
  }
  const w = j(!1),
    h = F({ left: !0, right: !1, top: !0, bottom: !1 }),
    b = F({ left: !1, right: !1, top: !1, bottom: !1 }),
    O = (n) => {
      w.value &&
        ((w.value = !1),
        (b.left = !1),
        (b.right = !1),
        (b.top = !1),
        (b.bottom = !1),
        l(n))
    },
    q = de(O, t + o),
    C = (n) => {
      var g
      if (!c) return
      const d =
          ((g = n == null ? void 0 : n.document) == null
            ? void 0
            : g.documentElement) ||
          (n == null ? void 0 : n.documentElement) ||
          X(n),
        { display: D, flexDirection: A } = getComputedStyle(d),
        y = d.scrollLeft
      ;(b.left = y < u.value), (b.right = y > u.value)
      const W = Math.abs(y) <= (f.left || 0),
        I = Math.abs(y) + d.clientWidth >= d.scrollWidth - (f.right || 0) - G
      D === 'flex' && A === 'row-reverse'
        ? ((h.left = I), (h.right = W))
        : ((h.left = W), (h.right = I)),
        (u.value = y)
      let E = d.scrollTop
      n === c.document && !E && (E = c.document.body.scrollTop),
        (b.top = E < v.value),
        (b.bottom = E > v.value)
      const P = Math.abs(E) <= (f.top || 0),
        R = Math.abs(E) + d.clientHeight >= d.scrollHeight - (f.bottom || 0) - G
      D === 'flex' && A === 'column-reverse'
        ? ((h.top = R), (h.bottom = P))
        : ((h.top = P), (h.bottom = R)),
        (v.value = E)
    },
    M = (n) => {
      var g
      if (!c) return
      const d = (g = n.target.documentElement) != null ? g : n.target
      C(d), (w.value = !0), q(n), s(n)
    }
  return (
    V(e, 'scroll', t ? me(M, t, !0, !1) : M, i),
    ve(() => {
      try {
        const n = _(e)
        if (!n) return
        C(n)
      } catch (n) {
        a(n)
      }
    }),
    V(e, 'scrollend', O, i),
    {
      x: p,
      y: T,
      isScrolling: w,
      arrivedState: h,
      directions: b,
      measure() {
        const n = _(e)
        c && n && C(n)
      }
    }
  )
}
const _e = {
    __name: 'AppGotop',
    setup(e) {
      const { y: r } = he(window),
        t = () => {
          const o = setInterval(() => {
            const l = document.documentElement.scrollTop,
              s = Math.ceil(l / 10)
            document.documentElement.scrollTop > 0
              ? (document.documentElement.scrollTop -= s)
              : clearInterval(o)
          }, 10)
        }
      return (o, l) => {
        const s = le
        return (
          ee(),
          te(
            'div',
            { class: re(['app-evevator', { show: L(r) > 300 }]) },
            [H(s, { onClick: t }, { default: oe(() => [H(L(ne))]), _: 1 })],
            2
          )
        )
      }
    }
  },
  Te = Z(_e, [['__scopeId', 'data-v-29cac5a8']])
export { Te as _, he as u }
