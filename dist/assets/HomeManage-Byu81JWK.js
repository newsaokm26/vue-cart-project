import { _ as je } from './AppGotop-DW09aqQB.js'
import {
  J as Ke,
  K as oe,
  L as Xe,
  b as ke,
  M as Ye,
  N as qe,
  l as M,
  O,
  e as t,
  P as J,
  Q as Je,
  m as ie,
  R as Qe,
  S as Ze,
  T as et,
  U as Se,
  V as tt,
  W as at,
  a as le,
  u as Ee,
  X as nt,
  o as y,
  c as D,
  Y as te,
  s as L,
  x as Z,
  h as u,
  n as G,
  Z as Q,
  q as $,
  E as Ie,
  $ as ot,
  y as ee,
  a0 as Ce,
  g as j,
  a1 as st,
  r as se,
  i as Me,
  F as ae,
  z as ue,
  t as K,
  _ as Ne,
  a2 as rt,
  a3 as it,
  a4 as lt,
  a5 as ut,
  w as ct,
  a6 as ft,
  j as ne,
  p as he,
  C as dt,
  D as mt,
  f as re,
  B as He
} from './index-Dn-ej6oH.js'
import { u as vt, f as _t } from './index-43Llms63.js'
import { i as Be } from './request-N0ug3Hqv.js'
var ht = /\s/
function pt(e) {
  for (var r = e.length; r-- && ht.test(e.charAt(r)); );
  return r
}
var gt = /^\s+/
function yt(e) {
  return e && e.slice(0, pt(e) + 1).replace(gt, '')
}
var be = NaN,
  It = /^[-+]0x[0-9a-f]+$/i,
  Ct = /^0b[01]+$/i,
  bt = /^0o[0-7]+$/i,
  $t = parseInt
function $e(e) {
  if (typeof e == 'number') return e
  if (Ke(e)) return be
  if (oe(e)) {
    var r = typeof e.valueOf == 'function' ? e.valueOf() : e
    e = oe(r) ? r + '' : r
  }
  if (typeof e != 'string') return e === 0 ? e : +e
  e = yt(e)
  var n = Ct.test(e)
  return n || bt.test(e) ? $t(e.slice(2), n ? 2 : 8) : It.test(e) ? be : +e
}
var _e = function () {
    return Xe.Date.now()
  },
  wt = 'Expected a function',
  Tt = Math.max,
  kt = Math.min
function St(e, r, n) {
  var a,
    v,
    m,
    _,
    o,
    l,
    w = 0,
    T = !1,
    k = !1,
    N = !0
  if (typeof e != 'function') throw new TypeError(wt)
  ;(r = $e(r) || 0),
    oe(n) &&
      ((T = !!n.leading),
      (k = 'maxWait' in n),
      (m = k ? Tt($e(n.maxWait) || 0, r) : m),
      (N = 'trailing' in n ? !!n.trailing : N))
  function I(i) {
    var f = a,
      p = v
    return (a = v = void 0), (w = i), (_ = e.apply(p, f)), _
  }
  function b(i) {
    return (w = i), (o = setTimeout(S, r)), T ? I(i) : _
  }
  function V(i) {
    var f = i - l,
      p = i - w,
      P = r - f
    return k ? kt(P, m - p) : P
  }
  function R(i) {
    var f = i - l,
      p = i - w
    return l === void 0 || f >= r || f < 0 || (k && p >= m)
  }
  function S() {
    var i = _e()
    if (R(i)) return H(i)
    o = setTimeout(S, V(i))
  }
  function H(i) {
    return (o = void 0), N && a ? I(i) : ((a = v = void 0), _)
  }
  function W() {
    o !== void 0 && clearTimeout(o), (w = 0), (a = l = v = o = void 0)
  }
  function c() {
    return o === void 0 ? _ : H(_e())
  }
  function d() {
    var i = _e(),
      f = R(i)
    if (((a = arguments), (v = this), (l = i), f)) {
      if (o === void 0) return b(l)
      if (k) return clearTimeout(o), (o = setTimeout(S, r)), I(l)
    }
    return o === void 0 && (o = setTimeout(S, r)), _
  }
  return (d.cancel = W), (d.flush = c), d
}
var Et = 'Expected a function'
function we(e, r, n) {
  var a = !0,
    v = !0
  if (typeof e != 'function') throw new TypeError(Et)
  return (
    oe(n) &&
      ((a = 'leading' in n ? !!n.leading : a),
      (v = 'trailing' in n ? !!n.trailing : v)),
    St(e, r, { leading: a, maxWait: r, trailing: v })
  )
}
const Mt = ke({
    initialIndex: { type: Number, default: 0 },
    height: { type: String, default: '' },
    trigger: { type: String, values: ['hover', 'click'], default: 'hover' },
    autoplay: { type: Boolean, default: !0 },
    interval: { type: Number, default: 3e3 },
    indicatorPosition: {
      type: String,
      values: ['', 'none', 'outside'],
      default: ''
    },
    arrow: {
      type: String,
      values: ['always', 'hover', 'never'],
      default: 'hover'
    },
    type: { type: String, values: ['', 'card'], default: '' },
    loop: { type: Boolean, default: !0 },
    direction: {
      type: String,
      values: ['horizontal', 'vertical'],
      default: 'horizontal'
    },
    pauseOnHover: { type: Boolean, default: !0 },
    motionBlur: { type: Boolean, default: !1 }
  }),
  Nt = { change: (e, r) => [e, r].every(Ye) },
  Ae = Symbol('carouselContextKey'),
  Te = 300,
  Ht = (e, r, n) => {
    const {
        children: a,
        addChild: v,
        removeChild: m
      } = vt(Se(), 'ElCarouselItem'),
      _ = qe(),
      o = M(-1),
      l = M(null),
      w = M(!1),
      T = M(),
      k = M(0),
      N = M(!0),
      I = M(!0),
      b = M(!1),
      V = O(() => e.arrow !== 'never' && !t(H)),
      R = O(() => a.value.some((s) => s.props.label.toString().length > 0)),
      S = O(() => e.type === 'card'),
      H = O(() => e.direction === 'vertical'),
      W = O(() =>
        e.height !== 'auto'
          ? { height: e.height }
          : { height: `${k.value}px`, overflow: 'hidden' }
      ),
      c = we(
        (s) => {
          B(s)
        },
        Te,
        { trailing: !0 }
      ),
      d = we((s) => {
        z(s)
      }, Te),
      i = (s) => (N.value ? (o.value <= 1 ? s <= 1 : s > 1) : !0)
    function f() {
      l.value && (clearInterval(l.value), (l.value = null))
    }
    function p() {
      e.interval <= 0 ||
        !e.autoplay ||
        l.value ||
        (l.value = setInterval(() => P(), e.interval))
    }
    const P = () => {
      I.value || (b.value = !0),
        (I.value = !1),
        o.value < a.value.length - 1
          ? (o.value = o.value + 1)
          : e.loop && (o.value = 0)
    }
    function B(s) {
      if ((I.value || (b.value = !0), (I.value = !1), tt(s))) {
        const F = a.value.filter((U) => U.props.name === s)
        F.length > 0 && (s = a.value.indexOf(F[0]))
      }
      if (((s = Number(s)), Number.isNaN(s) || s !== Math.floor(s))) return
      const g = a.value.length,
        x = o.value
      s < 0
        ? (o.value = e.loop ? g - 1 : 0)
        : s >= g
          ? (o.value = e.loop ? 0 : g - 1)
          : (o.value = s),
        x === o.value && h(x),
        pe()
    }
    function h(s) {
      a.value.forEach((g, x) => {
        g.translateItem(x, o.value, s)
      })
    }
    function X(s, g) {
      var x, F, U, Y
      const q = t(a),
        ge = q.length
      if (ge === 0 || !s.states.inStage) return !1
      const Ve = g + 1,
        We = g - 1,
        ye = ge - 1,
        Ge = q[ye].states.active,
        ze = q[0].states.active,
        Ue =
          (F = (x = q[Ve]) == null ? void 0 : x.states) == null
            ? void 0
            : F.active,
        Fe =
          (Y = (U = q[We]) == null ? void 0 : U.states) == null
            ? void 0
            : Y.active
      return (g === ye && ze) || Ue
        ? 'left'
        : (g === 0 && Ge) || Fe
          ? 'right'
          : !1
    }
    function ce() {
      ;(w.value = !0), e.pauseOnHover && f()
    }
    function fe() {
      ;(w.value = !1), p()
    }
    function de() {
      b.value = !1
    }
    function E(s) {
      t(H) ||
        a.value.forEach((g, x) => {
          s === X(g, x) && (g.states.hover = !0)
        })
    }
    function C() {
      t(H) ||
        a.value.forEach((s) => {
          s.states.hover = !1
        })
    }
    function A(s) {
      s !== o.value && (I.value || (b.value = !0)), (o.value = s)
    }
    function z(s) {
      e.trigger === 'hover' &&
        s !== o.value &&
        ((o.value = s), I.value || (b.value = !0))
    }
    function me() {
      B(o.value - 1)
    }
    function Re() {
      B(o.value + 1)
    }
    function pe() {
      f(), e.pauseOnHover || p()
    }
    function xe(s) {
      e.height === 'auto' && (k.value = s)
    }
    function Oe() {
      var s
      const g = (s = _.default) == null ? void 0 : s.call(_)
      if (!g) return null
      const x = _t(g),
        F = 'ElCarouselItem',
        U = x.filter((Y) => at(Y) && Y.type.name === F)
      return (U == null ? void 0 : U.length) === 2 && e.loop && !S.value
        ? ((N.value = !0), U)
        : ((N.value = !1), null)
    }
    J(
      () => o.value,
      (s, g) => {
        h(g), N.value && ((s = s % 2), (g = g % 2)), g > -1 && r('change', s, g)
      }
    ),
      J(
        () => e.autoplay,
        (s) => {
          s ? p() : f()
        }
      ),
      J(
        () => e.loop,
        () => {
          B(o.value)
        }
      ),
      J(
        () => e.interval,
        () => {
          pe()
        }
      )
    const ve = Je()
    return (
      ie(() => {
        J(
          () => a.value,
          () => {
            a.value.length > 0 && B(e.initialIndex)
          },
          { immediate: !0 }
        ),
          (ve.value = Qe(T.value, () => {
            h()
          })),
          p()
      }),
      Ze(() => {
        f(), T.value && ve.value && ve.value.stop()
      }),
      et(Ae, {
        root: T,
        isCardType: S,
        isVertical: H,
        items: a,
        loop: e.loop,
        addItem: v,
        removeItem: m,
        setActiveItem: B,
        setContainerHeight: xe
      }),
      {
        root: T,
        activeIndex: o,
        arrowDisplay: V,
        hasLabel: R,
        hover: w,
        isCardType: S,
        isTransitioning: b,
        items: a,
        isVertical: H,
        containerStyle: W,
        isItemsTwoLength: N,
        handleButtonEnter: E,
        handleTransitionEnd: de,
        handleButtonLeave: C,
        handleIndicatorClick: A,
        handleMouseEnter: ce,
        handleMouseLeave: fe,
        setActiveItem: B,
        prev: me,
        next: Re,
        PlaceholderItem: Oe,
        isTwoLengthShow: i,
        throttledArrowClick: c,
        throttledIndicatorHover: d
      }
    )
  },
  Bt = ['aria-label'],
  At = ['aria-label'],
  Lt = ['onMouseenter', 'onClick'],
  Dt = ['aria-label'],
  Pt = { key: 0 },
  Rt = {
    key: 3,
    xmlns: 'http://www.w3.org/2000/svg',
    version: '1.1',
    style: { display: 'none' }
  },
  xt = u(
    'defs',
    null,
    [
      u('filter', { id: 'elCarouselHorizontal' }, [
        u('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: '12,0' })
      ]),
      u('filter', { id: 'elCarouselVertical' }, [
        u('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: '0,10' })
      ])
    ],
    -1
  ),
  Ot = [xt],
  Vt = 'ElCarousel',
  Wt = le({ name: Vt }),
  Gt = le({
    ...Wt,
    props: Mt,
    emits: Nt,
    setup(e, { expose: r, emit: n }) {
      const a = e,
        {
          root: v,
          activeIndex: m,
          arrowDisplay: _,
          hasLabel: o,
          hover: l,
          isCardType: w,
          items: T,
          isVertical: k,
          containerStyle: N,
          handleButtonEnter: I,
          handleButtonLeave: b,
          isTransitioning: V,
          handleIndicatorClick: R,
          handleMouseEnter: S,
          handleMouseLeave: H,
          handleTransitionEnd: W,
          setActiveItem: c,
          prev: d,
          next: i,
          PlaceholderItem: f,
          isTwoLengthShow: p,
          throttledArrowClick: P,
          throttledIndicatorHover: B
        } = Ht(a, n),
        h = Ee('carousel'),
        { t: X } = nt(),
        ce = O(() => {
          const E = [h.b(), h.m(a.direction)]
          return t(w) && E.push(h.m('card')), E
        }),
        fe = O(() => {
          const E = [h.e('container')]
          return (
            a.motionBlur &&
              t(V) &&
              E.push(
                t(k)
                  ? `${h.namespace.value}-transitioning-vertical`
                  : `${h.namespace.value}-transitioning`
              ),
            E
          )
        }),
        de = O(() => {
          const E = [h.e('indicators'), h.em('indicators', a.direction)]
          return (
            t(o) && E.push(h.em('indicators', 'labels')),
            a.indicatorPosition === 'outside' &&
              E.push(h.em('indicators', 'outside')),
            t(k) && E.push(h.em('indicators', 'right')),
            E
          )
        })
      return (
        r({ setActiveItem: c, prev: d, next: i }),
        (E, C) => (
          y(),
          D(
            'div',
            {
              ref_key: 'root',
              ref: v,
              class: G(t(ce)),
              onMouseenter:
                C[7] || (C[7] = Q((...A) => t(S) && t(S)(...A), ['stop'])),
              onMouseleave:
                C[8] || (C[8] = Q((...A) => t(H) && t(H)(...A), ['stop']))
            },
            [
              t(_)
                ? (y(),
                  te(
                    Ce,
                    { key: 0, name: 'carousel-arrow-left', persisted: '' },
                    {
                      default: L(() => [
                        Z(
                          u(
                            'button',
                            {
                              type: 'button',
                              class: G([
                                t(h).e('arrow'),
                                t(h).em('arrow', 'left')
                              ]),
                              'aria-label': t(X)('el.carousel.leftArrow'),
                              onMouseenter:
                                C[0] || (C[0] = (A) => t(I)('left')),
                              onMouseleave:
                                C[1] || (C[1] = (...A) => t(b) && t(b)(...A)),
                              onClick:
                                C[2] ||
                                (C[2] = Q((A) => t(P)(t(m) - 1), ['stop']))
                            },
                            [
                              $(t(Ie), null, {
                                default: L(() => [$(t(ot))]),
                                _: 1
                              })
                            ],
                            42,
                            Bt
                          ),
                          [
                            [
                              ee,
                              (E.arrow === 'always' || t(l)) &&
                                (a.loop || t(m) > 0)
                            ]
                          ]
                        )
                      ]),
                      _: 1
                    }
                  ))
                : j('v-if', !0),
              t(_)
                ? (y(),
                  te(
                    Ce,
                    { key: 1, name: 'carousel-arrow-right', persisted: '' },
                    {
                      default: L(() => [
                        Z(
                          u(
                            'button',
                            {
                              type: 'button',
                              class: G([
                                t(h).e('arrow'),
                                t(h).em('arrow', 'right')
                              ]),
                              'aria-label': t(X)('el.carousel.rightArrow'),
                              onMouseenter:
                                C[3] || (C[3] = (A) => t(I)('right')),
                              onMouseleave:
                                C[4] || (C[4] = (...A) => t(b) && t(b)(...A)),
                              onClick:
                                C[5] ||
                                (C[5] = Q((A) => t(P)(t(m) + 1), ['stop']))
                            },
                            [
                              $(t(Ie), null, {
                                default: L(() => [$(t(st))]),
                                _: 1
                              })
                            ],
                            42,
                            At
                          ),
                          [
                            [
                              ee,
                              (E.arrow === 'always' || t(l)) &&
                                (a.loop || t(m) < t(T).length - 1)
                            ]
                          ]
                        )
                      ]),
                      _: 1
                    }
                  ))
                : j('v-if', !0),
              u(
                'div',
                {
                  class: G(t(fe)),
                  style: Me(t(N)),
                  onTransitionend: C[6] || (C[6] = (...A) => t(W) && t(W)(...A))
                },
                [$(t(f)), se(E.$slots, 'default')],
                38
              ),
              E.indicatorPosition !== 'none'
                ? (y(),
                  D(
                    'ul',
                    { key: 2, class: G(t(de)) },
                    [
                      (y(!0),
                      D(
                        ae,
                        null,
                        ue(t(T), (A, z) =>
                          Z(
                            (y(),
                            D(
                              'li',
                              {
                                key: z,
                                class: G([
                                  t(h).e('indicator'),
                                  t(h).em('indicator', E.direction),
                                  t(h).is('active', z === t(m))
                                ]),
                                onMouseenter: (me) => t(B)(z),
                                onClick: Q((me) => t(R)(z), ['stop'])
                              },
                              [
                                u(
                                  'button',
                                  {
                                    class: G(t(h).e('button')),
                                    'aria-label': t(X)(
                                      'el.carousel.indicator',
                                      { index: z + 1 }
                                    )
                                  },
                                  [
                                    t(o)
                                      ? (y(),
                                        D('span', Pt, K(A.props.label), 1))
                                      : j('v-if', !0)
                                  ],
                                  10,
                                  Dt
                                )
                              ],
                              42,
                              Lt
                            )),
                            [[ee, t(p)(z)]]
                          )
                        ),
                        128
                      ))
                    ],
                    2
                  ))
                : j('v-if', !0),
              a.motionBlur ? (y(), D('svg', Rt, Ot)) : j('v-if', !0)
            ],
            34
          )
        )
      )
    }
  })
var zt = Ne(Gt, [['__file', 'carousel.vue']])
const Ut = ke({
    name: { type: String, default: '' },
    label: { type: [String, Number], default: '' }
  }),
  Ft = (e, r) => {
    const n = rt(Ae),
      a = Se(),
      v = 0.83,
      m = M(),
      _ = M(!1),
      o = M(0),
      l = M(1),
      w = M(!1),
      T = M(!1),
      k = M(!1),
      N = M(!1),
      { isCardType: I, isVertical: b } = n
    function V(c, d, i) {
      const f = i - 1,
        p = d - 1,
        P = d + 1,
        B = i / 2
      return d === 0 && c === f
        ? -1
        : d === f && c === 0
          ? i
          : c < p && d - c >= B
            ? i + 1
            : c > P && c - d >= B
              ? -2
              : c
    }
    function R(c, d) {
      var i, f
      const p = t(b)
        ? ((i = n.root.value) == null ? void 0 : i.offsetHeight) || 0
        : ((f = n.root.value) == null ? void 0 : f.offsetWidth) || 0
      return k.value
        ? (p * ((2 - v) * (c - d) + 1)) / 4
        : c < d
          ? (-(1 + v) * p) / 4
          : ((3 + v) * p) / 4
    }
    function S(c, d, i) {
      const f = n.root.value
      return f ? ((i ? f.offsetHeight : f.offsetWidth) || 0) * (c - d) : 0
    }
    const H = (c, d, i) => {
      var f
      const p = t(I),
        P = (f = n.items.value.length) != null ? f : Number.NaN,
        B = c === d
      !p && !ut(i) && (N.value = B || c === i),
        !B && P > 2 && n.loop && (c = V(c, d, P))
      const h = t(b)
      ;(w.value = B),
        p
          ? ((k.value = Math.round(Math.abs(c - d)) <= 1),
            (o.value = R(c, d)),
            (l.value = t(w) ? 1 : v))
          : (o.value = S(c, d, h)),
        (T.value = !0),
        B && m.value && n.setContainerHeight(m.value.offsetHeight)
    }
    function W() {
      if (n && t(I)) {
        const c = n.items.value.findIndex(({ uid: d }) => d === a.uid)
        n.setActiveItem(c)
      }
    }
    return (
      ie(() => {
        n.addItem({
          props: e,
          states: it({
            hover: _,
            translate: o,
            scale: l,
            active: w,
            ready: T,
            inStage: k,
            animating: N
          }),
          uid: a.uid,
          translateItem: H
        })
      }),
      lt(() => {
        n.removeItem(a.uid)
      }),
      {
        carouselItemRef: m,
        active: w,
        animating: N,
        hover: _,
        inStage: k,
        isVertical: b,
        translate: o,
        isCardType: I,
        scale: l,
        ready: T,
        handleItemClick: W
      }
    )
  },
  jt = le({ name: 'ElCarouselItem' }),
  Kt = le({
    ...jt,
    props: Ut,
    setup(e) {
      const r = e,
        n = Ee('carousel'),
        {
          carouselItemRef: a,
          active: v,
          animating: m,
          hover: _,
          inStage: o,
          isVertical: l,
          translate: w,
          isCardType: T,
          scale: k,
          ready: N,
          handleItemClick: I
        } = Ft(r),
        b = O(() => [
          n.e('item'),
          n.is('active', v.value),
          n.is('in-stage', o.value),
          n.is('hover', _.value),
          n.is('animating', m.value),
          {
            [n.em('item', 'card')]: T.value,
            [n.em('item', 'card-vertical')]: T.value && l.value
          }
        ]),
        V = O(() => {
          const S = `${`translate${t(l) ? 'Y' : 'X'}`}(${t(w)}px)`,
            H = `scale(${t(k)})`
          return { transform: [S, H].join(' ') }
        })
      return (R, S) =>
        Z(
          (y(),
          D(
            'div',
            {
              ref_key: 'carouselItemRef',
              ref: a,
              class: G(t(b)),
              style: Me(t(V)),
              onClick: S[0] || (S[0] = (...H) => t(I) && t(I)(...H))
            },
            [
              t(T)
                ? Z(
                    (y(),
                    D('div', { key: 0, class: G(t(n).e('mask')) }, null, 2)),
                    [[ee, !t(v)]]
                  )
                : j('v-if', !0),
              se(R.$slots, 'default')
            ],
            6
          )),
          [[ee, t(N)]]
        )
    }
  })
var Le = Ne(Kt, [['__file', 'carousel-item.vue']])
const Xt = ct(zt, { CarouselItem: Le }),
  Yt = ft(Le),
  qt = { class: 'home-banner' },
  Jt = ['src'],
  Qt = {
    __name: 'HomeBanner',
    setup(e) {
      const r = [
        {
          id: '1001001000',
          name: '寶可夢 | 精靈球',
          imgUrl:
            'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: '1001001001',
          name: '寶可夢 | 大頭公仔',
          imgUrl:
            'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
      return (n, a) => {
        const v = Yt,
          m = Xt
        return (
          y(),
          D('div', qt, [
            $(
              m,
              { height: '500px' },
              {
                default: L(() => [
                  (y(),
                  D(
                    ae,
                    null,
                    ue(r, (_) =>
                      $(
                        v,
                        {
                          key: _.id,
                          onClick: (o) =>
                            n.$router.push(`/detail/manage/${_.id}`)
                        },
                        {
                          default: L(() => [
                            u('img', { src: _.imgUrl, alt: '' }, null, 8, Jt)
                          ]),
                          _: 2
                        },
                        1032,
                        ['onClick']
                      )
                    ),
                    64
                  ))
                ]),
                _: 1
              }
            )
          ])
        )
      }
    }
  },
  Zt = ne(Qt, [['__scopeId', 'data-v-da96feb3']]),
  ea = (e) => (dt('data-v-a6f0a3dd'), (e = e()), mt(), e),
  ta = ea(() => u('span', null, '查看更多', -1)),
  aa = {
    __name: 'AppMore',
    props: { path: { type: String, default: '/' } },
    setup(e) {
      return (r, n) => {
        const a = he('router-link')
        return (
          y(),
          te(
            a,
            { to: e.path, class: 'more' },
            { default: L(() => [ta]), _: 1 },
            8,
            ['to']
          )
        )
      }
    }
  },
  De = ne(aa, [['__scopeId', 'data-v-a6f0a3dd']]),
  na = { class: 'home-panel' },
  oa = { class: 'panel-container' },
  sa = { class: 'head' },
  ra = { class: 'more' },
  ia = {
    __name: 'HomePanel',
    props: { title: { tpye: String, default: '' } },
    setup(e) {
      return (r, n) => (
        y(),
        D('div', na, [
          u('div', oa, [
            u('div', sa, [u('h3', null, K(e.title), 1)]),
            se(r.$slots, 'main', {}, void 0, !0),
            u('div', ra, [se(r.$slots, 'more', {}, void 0, !0)])
          ])
        ])
      )
    }
  },
  Pe = ne(ia, [['__scopeId', 'data-v-bb994e67']]),
  la = () => Be.get('/home/pokemon'),
  ua = () => Be.get('/home/Mario'),
  ca = { class: 'goods-list' },
  fa = ['src'],
  da = { class: 'extra' },
  ma = { class: 'e-goods' },
  va = { class: 'e-title' },
  _a = { class: 'e-price' },
  ha = { class: 'e-btn' },
  pa = {
    __name: 'HomeProduct',
    setup(e) {
      const r = M([]),
        n = async () => {
          const a = await la()
          ;(r.value = a.data.data), console.log(r.value)
        }
      return (
        ie(() => {
          n()
        }),
        (a, v) => {
          const m = he('RouterLink'),
            _ = He,
            o = De
          return (
            y(),
            te(
              Pe,
              { title: '- 寶可夢 -' },
              {
                main: L(() => [
                  u('ul', ca, [
                    (y(!0),
                    D(
                      ae,
                      null,
                      ue(
                        r.value,
                        (l) => (
                          y(),
                          D('li', { key: l.id }, [
                            $(
                              m,
                              { to: '/' },
                              {
                                default: L(() => [
                                  u(
                                    'img',
                                    { src: l.picture, alt: '' },
                                    null,
                                    8,
                                    fa
                                  )
                                ]),
                                _: 2
                              },
                              1024
                            ),
                            u('div', da, [
                              u('div', ma, [
                                u('div', va, [
                                  $(
                                    m,
                                    { to: `/detail/manage/${l.id}` },
                                    {
                                      default: L(() => [re(K(l.name), 1)]),
                                      _: 2
                                    },
                                    1032,
                                    ['to']
                                  )
                                ]),
                                u('div', _a, [
                                  u('span', null, 'NT$' + K(l.price), 1)
                                ])
                              ]),
                              u('div', ha, [
                                $(_, null, {
                                  default: L(() => [re('加入購物車')]),
                                  _: 1
                                })
                              ])
                            ])
                          ])
                        )
                      ),
                      128
                    ))
                  ])
                ]),
                more: L(() => [$(o, { path: '/category/manage/100100' })]),
                _: 1
              }
            )
          )
        }
      )
    }
  },
  ga = ne(pa, [['__scopeId', 'data-v-e36be078']]),
  ya = { class: 'goods-list' },
  Ia = ['src'],
  Ca = { class: 'extra' },
  ba = { class: 'e-goods' },
  $a = { class: 'e-title' },
  wa = { class: 'e-price' },
  Ta = { class: 'e-btn' },
  ka = {
    __name: 'HomeNew',
    setup(e) {
      const r = M([]),
        n = async () => {
          const a = await ua()
          r.value = a.data.data
        }
      return (
        ie(() => {
          n()
        }),
        (a, v) => {
          const m = he('RouterLink'),
            _ = He,
            o = De
          return (
            y(),
            te(
              Pe,
              { title: '- 超級馬力歐 -' },
              {
                main: L(() => [
                  u('ul', ya, [
                    (y(!0),
                    D(
                      ae,
                      null,
                      ue(
                        r.value,
                        (l) => (
                          y(),
                          D('li', { key: l.id }, [
                            $(
                              m,
                              { to: '/' },
                              {
                                default: L(() => [
                                  u(
                                    'img',
                                    { src: l.picture, alt: '' },
                                    null,
                                    8,
                                    Ia
                                  )
                                ]),
                                _: 2
                              },
                              1024
                            ),
                            u('div', Ca, [
                              u('div', ba, [
                                u('div', $a, [
                                  $(
                                    m,
                                    { to: `/detail/manage/${l.id}` },
                                    {
                                      default: L(() => [re(K(l.name), 1)]),
                                      _: 2
                                    },
                                    1032,
                                    ['to']
                                  )
                                ]),
                                u('div', wa, [
                                  u('span', null, 'NT$' + K(l.price), 1)
                                ])
                              ]),
                              u('div', Ta, [
                                $(_, null, {
                                  default: L(() => [re('加入購物車')]),
                                  _: 1
                                })
                              ])
                            ])
                          ])
                        )
                      ),
                      128
                    ))
                  ])
                ]),
                more: L(() => [$(o, { path: '/category/manage/100200' })]),
                _: 1
              }
            )
          )
        }
      )
    }
  },
  Sa = ne(ka, [['__scopeId', 'data-v-12e23368']]),
  Ba = {
    __name: 'HomeManage',
    setup(e) {
      return (r, n) => {
        const a = je
        return y(), D(ae, null, [$(Zt), $(ga), $(Sa), $(a)], 64)
      }
    }
  }
export { Ba as default }
