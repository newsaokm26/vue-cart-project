import {
  a7 as It,
  a8 as xe,
  a9 as kt,
  m as ve,
  aa as lt,
  S as je,
  ab as Ve,
  ac as xt,
  ad as de,
  u as H,
  ae as Nt,
  af as We,
  P as ee,
  ag as Pt,
  ah as _e,
  ai as Bt,
  aj as we,
  ak as Le,
  al as Ot,
  a as B,
  o as A,
  Y as fe,
  s as N,
  r as R,
  am as Ye,
  an as At,
  e as v,
  a0 as qe,
  _ as oe,
  N as Ue,
  O as k,
  c as U,
  n as Y,
  i as ye,
  w as Ne,
  a6 as me,
  b as le,
  d as se,
  q as g,
  ao as q,
  ap as ge,
  X as Lt,
  a2 as ie,
  aq as zt,
  h as $,
  t as he,
  ar as Rt,
  E as ce,
  g as Ie,
  as as Ft,
  at as Pe,
  au as Dt,
  av as Ht,
  aw as Qe,
  l as T,
  ax as Vt,
  ay as Wt,
  az as jt,
  aA as Me,
  U as pe,
  aB as ke,
  aC as Yt,
  T as Ce,
  x as Be,
  aD as qt,
  aE as Ut,
  y as Ge,
  aF as Gt,
  aG as Q,
  aH as Kt,
  aI as Xt,
  a1 as it,
  a3 as Oe,
  aJ as ut,
  F as $e,
  V as be,
  R as Ke,
  aK as Xe,
  aL as Zt,
  aM as Jt,
  aN as et,
  aO as Qt,
  p as rt,
  f as ae,
  aP as eo,
  aQ as to,
  aR as oo,
  $ as no,
  aS as ao,
  aT as so,
  a5 as tt,
  M as lo,
  aU as ot,
  a4 as io,
  j as Ze,
  z as ct,
  aV as uo,
  B as ro,
  C as dt,
  D as ft,
  H as co,
  v as fo,
  aW as vo,
  aX as mo,
  aY as po,
  aZ as bo
} from './index-Dn-ej6oH.js'
import { i as ho } from './request-N0ug3Hqv.js'
import { d as go, _ as yo } from './detail-CoWuO3_q.js'
import { P as ze, f as _o, u as Co } from './index-43Llms63.js'
const Te = function (e, o, ...n) {
    let s
    o.includes('mouse') || o.includes('click')
      ? (s = 'MouseEvents')
      : o.includes('key')
        ? (s = 'KeyboardEvent')
        : (s = 'HTMLEvents')
    const t = document.createEvent(s)
    return t.initEvent(o, ...n), e.dispatchEvent(t), e
  },
  re = (e) => It(e)
let Ee
const Mo = (e) => {
    var o
    if (!xe) return 0
    if (Ee !== void 0) return Ee
    const n = document.createElement('div')
    ;(n.className = `${e}-scrollbar__wrap`),
      (n.style.visibility = 'hidden'),
      (n.style.width = '100px'),
      (n.style.position = 'absolute'),
      (n.style.top = '-9999px'),
      document.body.appendChild(n)
    const s = n.offsetWidth
    n.style.overflow = 'scroll'
    const t = document.createElement('div')
    ;(t.style.width = '100%'), n.appendChild(t)
    const a = t.offsetWidth
    return (o = n.parentNode) == null || o.removeChild(n), (Ee = s - a), Ee
  },
  $o =
    (...e) =>
    (o) => {
      e.forEach((n) => {
        kt(n) ? n(o) : (n.value = o)
      })
    },
  Eo = (e, o, n, s) => {
    let t = { offsetX: 0, offsetY: 0 }
    const a = (l) => {
        const d = l.clientX,
          f = l.clientY,
          { offsetX: C, offsetY: h } = t,
          p = e.value.getBoundingClientRect(),
          E = p.left,
          _ = p.top,
          I = p.width,
          L = p.height,
          P = document.documentElement.clientWidth,
          D = document.documentElement.clientHeight,
          Z = -E + C,
          te = -_ + h,
          W = P - E - I + C,
          G = D - _ - L + h,
          F = (m) => {
            let y = C + m.clientX - d,
              x = h + m.clientY - f
            ;(s != null && s.value) ||
              ((y = Math.min(Math.max(y, Z), W)),
              (x = Math.min(Math.max(x, te), G))),
              (t = { offsetX: y, offsetY: x }),
              e.value &&
                (e.value.style.transform = `translate(${Ve(y)}, ${Ve(x)})`)
          },
          w = () => {
            document.removeEventListener('mousemove', F),
              document.removeEventListener('mouseup', w)
          }
        document.addEventListener('mousemove', F),
          document.addEventListener('mouseup', w)
      },
      i = () => {
        o.value && e.value && o.value.addEventListener('mousedown', a)
      },
      c = () => {
        o.value && e.value && o.value.removeEventListener('mousedown', a)
      }
    ve(() => {
      lt(() => {
        n.value ? i() : c()
      })
    }),
      je(() => {
        c()
      })
  },
  wo = (e, o = {}) => {
    xt(e) ||
      de('[useLockscreen]', 'You need to pass a ref param to this function')
    const n = o.ns || H('popup'),
      s = Nt(() => n.bm('parent', 'hidden'))
    if (!xe || We(document.body, s.value)) return
    let t = 0,
      a = !1,
      i = '0'
    const c = () => {
      setTimeout(() => {
        we(document == null ? void 0 : document.body, s.value),
          a && document && (document.body.style.width = i)
      }, 200)
    }
    ee(e, (l) => {
      if (!l) {
        c()
        return
      }
      ;(a = !We(document.body, s.value)),
        a && (i = document.body.style.width),
        (t = Mo(n.namespace.value))
      const d =
          document.documentElement.clientHeight < document.body.scrollHeight,
        f = Pt(document.body, 'overflowY')
      t > 0 &&
        (d || f === 'scroll') &&
        a &&
        (document.body.style.width = `calc(100% - ${t}px)`),
        _e(document.body, s.value)
    }),
      Bt(() => c())
  },
  vt = (e) => {
    if (!e) return { onClick: Le, onMousedown: Le, onMouseup: Le }
    let o = !1,
      n = !1
    return {
      onClick: (i) => {
        o && n && e(i), (o = n = !1)
      },
      onMousedown: (i) => {
        o = i.target === i.currentTarget
      },
      onMouseup: (i) => {
        n = i.target === i.currentTarget
      }
    }
  },
  ue = new Map()
let nt
xe &&
  (document.addEventListener('mousedown', (e) => (nt = e)),
  document.addEventListener('mouseup', (e) => {
    for (const o of ue.values())
      for (const { documentHandler: n } of o) n(e, nt)
  }))
function at(e, o) {
  let n = []
  return (
    Array.isArray(o.arg) ? (n = o.arg) : Ot(o.arg) && n.push(o.arg),
    function (s, t) {
      const a = o.instance.popperRef,
        i = s.target,
        c = t == null ? void 0 : t.target,
        l = !o || !o.instance,
        d = !i || !c,
        f = e.contains(i) || e.contains(c),
        C = e === i,
        h =
          (n.length && n.some((E) => (E == null ? void 0 : E.contains(i)))) ||
          (n.length && n.includes(c)),
        p = a && (a.contains(i) || a.contains(c))
      l || d || f || C || h || p || o.value(s, t)
    }
  )
}
const To = {
    beforeMount(e, o) {
      ue.has(e) || ue.set(e, []),
        ue.get(e).push({ documentHandler: at(e, o), bindingFn: o.value })
    },
    updated(e, o) {
      ue.has(e) || ue.set(e, [])
      const n = ue.get(e),
        s = n.findIndex((a) => a.bindingFn === o.oldValue),
        t = { documentHandler: at(e, o), bindingFn: o.value }
      s >= 0 ? n.splice(s, 1, t) : n.push(t)
    },
    unmounted(e) {
      ue.delete(e)
    }
  },
  So = B({ name: 'ElCollapseTransition' }),
  Io = B({
    ...So,
    setup(e) {
      const o = H('collapse-transition'),
        n = (t) => {
          ;(t.style.maxHeight = ''),
            (t.style.overflow = t.dataset.oldOverflow),
            (t.style.paddingTop = t.dataset.oldPaddingTop),
            (t.style.paddingBottom = t.dataset.oldPaddingBottom)
        },
        s = {
          beforeEnter(t) {
            t.dataset || (t.dataset = {}),
              (t.dataset.oldPaddingTop = t.style.paddingTop),
              (t.dataset.oldPaddingBottom = t.style.paddingBottom),
              t.style.height && (t.dataset.elExistsHeight = t.style.height),
              (t.style.maxHeight = 0),
              (t.style.paddingTop = 0),
              (t.style.paddingBottom = 0)
          },
          enter(t) {
            requestAnimationFrame(() => {
              ;(t.dataset.oldOverflow = t.style.overflow),
                t.dataset.elExistsHeight
                  ? (t.style.maxHeight = t.dataset.elExistsHeight)
                  : t.scrollHeight !== 0
                    ? (t.style.maxHeight = `${t.scrollHeight}px`)
                    : (t.style.maxHeight = 0),
                (t.style.paddingTop = t.dataset.oldPaddingTop),
                (t.style.paddingBottom = t.dataset.oldPaddingBottom),
                (t.style.overflow = 'hidden')
            })
          },
          afterEnter(t) {
            ;(t.style.maxHeight = ''),
              (t.style.overflow = t.dataset.oldOverflow)
          },
          enterCancelled(t) {
            n(t)
          },
          beforeLeave(t) {
            t.dataset || (t.dataset = {}),
              (t.dataset.oldPaddingTop = t.style.paddingTop),
              (t.dataset.oldPaddingBottom = t.style.paddingBottom),
              (t.dataset.oldOverflow = t.style.overflow),
              (t.style.maxHeight = `${t.scrollHeight}px`),
              (t.style.overflow = 'hidden')
          },
          leave(t) {
            t.scrollHeight !== 0 &&
              ((t.style.maxHeight = 0),
              (t.style.paddingTop = 0),
              (t.style.paddingBottom = 0))
          },
          afterLeave(t) {
            n(t)
          },
          leaveCancelled(t) {
            n(t)
          }
        }
      return (t, a) => (
        A(),
        fe(
          qe,
          Ye({ name: v(o).b() }, At(s)),
          { default: N(() => [R(t.$slots, 'default')]), _: 3 },
          16,
          ['name']
        )
      )
    }
  })
var Se = oe(Io, [['__file', 'collapse-transition.vue']])
Se.install = (e) => {
  e.component(Se.name, Se)
}
const ko = Se,
  xo = B({ name: 'ElContainer' }),
  No = B({
    ...xo,
    props: { direction: { type: String } },
    setup(e) {
      const o = e,
        n = Ue(),
        s = H('container'),
        t = k(() =>
          o.direction === 'vertical'
            ? !0
            : o.direction === 'horizontal'
              ? !1
              : n && n.default
                ? n.default().some((i) => {
                    const c = i.type.name
                    return c === 'ElHeader' || c === 'ElFooter'
                  })
                : !1
        )
      return (a, i) => (
        A(),
        U(
          'section',
          { class: Y([v(s).b(), v(s).is('vertical', v(t))]) },
          [R(a.$slots, 'default')],
          2
        )
      )
    }
  })
var Po = oe(No, [['__file', 'container.vue']])
const Bo = B({ name: 'ElAside' }),
  Oo = B({
    ...Bo,
    props: { width: { type: String, default: null } },
    setup(e) {
      const o = e,
        n = H('aside'),
        s = k(() => (o.width ? n.cssVarBlock({ width: o.width }) : {}))
      return (t, a) => (
        A(),
        U(
          'aside',
          { class: Y(v(n).b()), style: ye(v(s)) },
          [R(t.$slots, 'default')],
          6
        )
      )
    }
  })
var mt = oe(Oo, [['__file', 'aside.vue']])
const Ao = B({ name: 'ElFooter' }),
  Lo = B({
    ...Ao,
    props: { height: { type: String, default: null } },
    setup(e) {
      const o = e,
        n = H('footer'),
        s = k(() => (o.height ? n.cssVarBlock({ height: o.height }) : {}))
      return (t, a) => (
        A(),
        U(
          'footer',
          { class: Y(v(n).b()), style: ye(v(s)) },
          [R(t.$slots, 'default')],
          6
        )
      )
    }
  })
var pt = oe(Lo, [['__file', 'footer.vue']])
const zo = B({ name: 'ElHeader' }),
  Ro = B({
    ...zo,
    props: { height: { type: String, default: null } },
    setup(e) {
      const o = e,
        n = H('header'),
        s = k(() => (o.height ? n.cssVarBlock({ height: o.height }) : {}))
      return (t, a) => (
        A(),
        U(
          'header',
          { class: Y(v(n).b()), style: ye(v(s)) },
          [R(t.$slots, 'default')],
          6
        )
      )
    }
  })
var bt = oe(Ro, [['__file', 'header.vue']])
const Fo = B({ name: 'ElMain' }),
  Do = B({
    ...Fo,
    setup(e) {
      const o = H('main')
      return (n, s) => (
        A(), U('main', { class: Y(v(o).b()) }, [R(n.$slots, 'default')], 2)
      )
    }
  })
var ht = oe(Do, [['__file', 'main.vue']])
const Ho = Ne(Po, { Aside: mt, Footer: pt, Header: bt, Main: ht }),
  Vo = me(mt)
me(pt)
me(bt)
const Wo = me(ht),
  jo = le({
    mask: { type: Boolean, default: !0 },
    customMaskEvent: { type: Boolean, default: !1 },
    overlayClass: { type: se([String, Array, Object]) },
    zIndex: { type: se([String, Number]) }
  }),
  Yo = { click: (e) => e instanceof MouseEvent },
  qo = 'overlay'
var Uo = B({
  name: 'ElOverlay',
  props: jo,
  emits: Yo,
  setup(e, { slots: o, emit: n }) {
    const s = H(qo),
      t = (l) => {
        n('click', l)
      },
      {
        onClick: a,
        onMousedown: i,
        onMouseup: c
      } = vt(e.customMaskEvent ? void 0 : t)
    return () =>
      e.mask
        ? g(
            'div',
            {
              class: [s.b(), e.overlayClass],
              style: { zIndex: e.zIndex },
              onClick: a,
              onMousedown: i,
              onMouseup: c
            },
            [R(o, 'default')],
            ze.STYLE | ze.CLASS | ze.PROPS,
            ['onClick', 'onMouseup', 'onMousedown']
          )
        : q(
            'div',
            {
              class: e.overlayClass,
              style: {
                zIndex: e.zIndex,
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
              }
            },
            [R(o, 'default')]
          )
  }
})
const Go = Uo,
  gt = Symbol('dialogInjectionKey'),
  yt = le({
    center: Boolean,
    alignCenter: Boolean,
    closeIcon: { type: ge },
    draggable: Boolean,
    overflow: Boolean,
    fullscreen: Boolean,
    showClose: { type: Boolean, default: !0 },
    title: { type: String, default: '' },
    ariaLevel: { type: String, default: '2' }
  }),
  Ko = { close: () => !0 },
  Xo = ['aria-level'],
  Zo = ['aria-label'],
  Jo = ['id'],
  Qo = B({ name: 'ElDialogContent' }),
  en = B({
    ...Qo,
    props: yt,
    emits: Ko,
    setup(e) {
      const o = e,
        { t: n } = Lt(),
        { Close: s } = Ft,
        { dialogRef: t, headerRef: a, bodyId: i, ns: c, style: l } = ie(gt),
        { focusTrapRef: d } = ie(zt),
        f = k(() => [
          c.b(),
          c.is('fullscreen', o.fullscreen),
          c.is('draggable', o.draggable),
          c.is('align-center', o.alignCenter),
          { [c.m('center')]: o.center }
        ]),
        C = $o(d, t),
        h = k(() => o.draggable),
        p = k(() => o.overflow)
      return (
        Eo(t, a, h, p),
        (E, _) => (
          A(),
          U(
            'div',
            { ref: v(C), class: Y(v(f)), style: ye(v(l)), tabindex: '-1' },
            [
              $(
                'header',
                {
                  ref_key: 'headerRef',
                  ref: a,
                  class: Y([v(c).e('header'), { 'show-close': E.showClose }])
                },
                [
                  R(E.$slots, 'header', {}, () => [
                    $(
                      'span',
                      {
                        role: 'heading',
                        'aria-level': E.ariaLevel,
                        class: Y(v(c).e('title'))
                      },
                      he(E.title),
                      11,
                      Xo
                    )
                  ]),
                  E.showClose
                    ? (A(),
                      U(
                        'button',
                        {
                          key: 0,
                          'aria-label': v(n)('el.dialog.close'),
                          class: Y(v(c).e('headerbtn')),
                          type: 'button',
                          onClick: _[0] || (_[0] = (I) => E.$emit('close'))
                        },
                        [
                          g(
                            v(ce),
                            { class: Y(v(c).e('close')) },
                            {
                              default: N(() => [
                                (A(), fe(Rt(E.closeIcon || v(s))))
                              ]),
                              _: 1
                            },
                            8,
                            ['class']
                          )
                        ],
                        10,
                        Zo
                      ))
                    : Ie('v-if', !0)
                ],
                2
              ),
              $(
                'div',
                { id: v(i), class: Y(v(c).e('body')) },
                [R(E.$slots, 'default')],
                10,
                Jo
              ),
              E.$slots.footer
                ? (A(),
                  U(
                    'footer',
                    { key: 0, class: Y(v(c).e('footer')) },
                    [R(E.$slots, 'footer')],
                    2
                  ))
                : Ie('v-if', !0)
            ],
            6
          )
        )
      )
    }
  })
var tn = oe(en, [['__file', 'dialog-content.vue']])
const on = le({
    ...yt,
    appendToBody: Boolean,
    appendTo: { type: se(String), default: 'body' },
    beforeClose: { type: se(Function) },
    destroyOnClose: Boolean,
    closeOnClickModal: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !0 },
    modal: { type: Boolean, default: !0 },
    openDelay: { type: Number, default: 0 },
    closeDelay: { type: Number, default: 0 },
    top: { type: String },
    modelValue: Boolean,
    modalClass: String,
    width: { type: [String, Number] },
    zIndex: { type: Number },
    trapFocus: { type: Boolean, default: !1 },
    headerAriaLevel: { type: String, default: '2' }
  }),
  nn = {
    open: () => !0,
    opened: () => !0,
    close: () => !0,
    closed: () => !0,
    [Pe]: (e) => Dt(e),
    openAutoFocus: () => !0,
    closeAutoFocus: () => !0
  },
  an = (e, o) => {
    var n
    const t = pe().emit,
      { nextZIndex: a } = Ht()
    let i = ''
    const c = Qe(),
      l = Qe(),
      d = T(!1),
      f = T(!1),
      C = T(!1),
      h = T((n = e.zIndex) != null ? n : a())
    let p, E
    const _ = Vt('namespace', Wt),
      I = k(() => {
        const r = {},
          b = `--${_.value}-dialog`
        return (
          e.fullscreen ||
            (e.top && (r[`${b}-margin-top`] = e.top),
            e.width && (r[`${b}-width`] = Ve(e.width))),
          r
        )
      }),
      L = k(() => (e.alignCenter ? { display: 'flex' } : {}))
    function P() {
      t('opened')
    }
    function D() {
      t('closed'), t(Pe, !1), e.destroyOnClose && (C.value = !1)
    }
    function Z() {
      t('close')
    }
    function te() {
      E == null || E(),
        p == null || p(),
        e.openDelay && e.openDelay > 0
          ? ({ stop: p } = ke(() => w(), e.openDelay))
          : w()
    }
    function W() {
      p == null || p(),
        E == null || E(),
        e.closeDelay && e.closeDelay > 0
          ? ({ stop: E } = ke(() => m(), e.closeDelay))
          : m()
    }
    function G() {
      function r(b) {
        b || ((f.value = !0), (d.value = !1))
      }
      e.beforeClose ? e.beforeClose(r) : W()
    }
    function F() {
      e.closeOnClickModal && G()
    }
    function w() {
      xe && (d.value = !0)
    }
    function m() {
      d.value = !1
    }
    function y() {
      t('openAutoFocus')
    }
    function x() {
      t('closeAutoFocus')
    }
    function V(r) {
      var b
      ;((b = r.detail) == null ? void 0 : b.focusReason) === 'pointer' &&
        r.preventDefault()
    }
    e.lockScroll && wo(d)
    function u() {
      e.closeOnPressEscape && G()
    }
    return (
      ee(
        () => e.modelValue,
        (r) => {
          r
            ? ((f.value = !1),
              te(),
              (C.value = !0),
              (h.value = jt(e.zIndex) ? a() : h.value++),
              Me(() => {
                t('open'), o.value && (o.value.scrollTop = 0)
              }))
            : d.value && W()
        }
      ),
      ee(
        () => e.fullscreen,
        (r) => {
          o.value &&
            (r
              ? ((i = o.value.style.transform), (o.value.style.transform = ''))
              : (o.value.style.transform = i))
        }
      ),
      ve(() => {
        e.modelValue && ((d.value = !0), (C.value = !0), te())
      }),
      {
        afterEnter: P,
        afterLeave: D,
        beforeLeave: Z,
        handleClose: G,
        onModalClick: F,
        close: W,
        doClose: m,
        onOpenAutoFocus: y,
        onCloseAutoFocus: x,
        onCloseRequested: u,
        onFocusoutPrevented: V,
        titleId: c,
        bodyId: l,
        closed: f,
        style: I,
        overlayDialogStyle: L,
        rendered: C,
        visible: d,
        zIndex: h
      }
    )
  },
  sn = ['aria-label', 'aria-labelledby', 'aria-describedby'],
  ln = B({ name: 'ElDialog', inheritAttrs: !1 }),
  un = B({
    ...ln,
    props: on,
    emits: nn,
    setup(e, { expose: o }) {
      const n = e,
        s = Ue()
      Yt(
        {
          scope: 'el-dialog',
          from: 'the title slot',
          replacement: 'the header slot',
          version: '3.0.0',
          ref: 'https://element-plus.org/en-US/component/dialog.html#slots'
        },
        k(() => !!s.title)
      )
      const t = H('dialog'),
        a = T(),
        i = T(),
        c = T(),
        {
          visible: l,
          titleId: d,
          bodyId: f,
          style: C,
          overlayDialogStyle: h,
          rendered: p,
          zIndex: E,
          afterEnter: _,
          afterLeave: I,
          beforeLeave: L,
          handleClose: P,
          onModalClick: D,
          onOpenAutoFocus: Z,
          onCloseAutoFocus: te,
          onCloseRequested: W,
          onFocusoutPrevented: G
        } = an(n, a)
      Ce(gt, {
        dialogRef: a,
        headerRef: i,
        bodyId: f,
        ns: t,
        rendered: p,
        style: C
      })
      const F = vt(D),
        w = k(() => n.draggable && !n.fullscreen)
      return (
        o({ visible: l, dialogContentRef: c }),
        (m, y) => (
          A(),
          fe(
            Gt,
            {
              to: m.appendTo,
              disabled: m.appendTo !== 'body' ? !1 : !m.appendToBody
            },
            [
              g(
                qe,
                {
                  name: 'dialog-fade',
                  onAfterEnter: v(_),
                  onAfterLeave: v(I),
                  onBeforeLeave: v(L),
                  persisted: ''
                },
                {
                  default: N(() => [
                    Be(
                      g(
                        v(Go),
                        {
                          'custom-mask-event': '',
                          mask: m.modal,
                          'overlay-class': m.modalClass,
                          'z-index': v(E)
                        },
                        {
                          default: N(() => [
                            $(
                              'div',
                              {
                                role: 'dialog',
                                'aria-modal': 'true',
                                'aria-label': m.title || void 0,
                                'aria-labelledby': m.title ? void 0 : v(d),
                                'aria-describedby': v(f),
                                class: Y(
                                  `${v(t).namespace.value}-overlay-dialog`
                                ),
                                style: ye(v(h)),
                                onClick:
                                  y[0] ||
                                  (y[0] = (...x) =>
                                    v(F).onClick && v(F).onClick(...x)),
                                onMousedown:
                                  y[1] ||
                                  (y[1] = (...x) =>
                                    v(F).onMousedown && v(F).onMousedown(...x)),
                                onMouseup:
                                  y[2] ||
                                  (y[2] = (...x) =>
                                    v(F).onMouseup && v(F).onMouseup(...x))
                              },
                              [
                                g(
                                  v(qt),
                                  {
                                    loop: '',
                                    trapped: v(l),
                                    'focus-start-el': 'container',
                                    onFocusAfterTrapped: v(Z),
                                    onFocusAfterReleased: v(te),
                                    onFocusoutPrevented: v(G),
                                    onReleaseRequested: v(W)
                                  },
                                  {
                                    default: N(() => [
                                      v(p)
                                        ? (A(),
                                          fe(
                                            tn,
                                            Ye(
                                              {
                                                key: 0,
                                                ref_key: 'dialogContentRef',
                                                ref: c
                                              },
                                              m.$attrs,
                                              {
                                                center: m.center,
                                                'align-center': m.alignCenter,
                                                'close-icon': m.closeIcon,
                                                draggable: v(w),
                                                overflow: m.overflow,
                                                fullscreen: m.fullscreen,
                                                'show-close': m.showClose,
                                                title: m.title,
                                                'aria-level': m.headerAriaLevel,
                                                onClose: v(P)
                                              }
                                            ),
                                            Ut(
                                              {
                                                header: N(() => [
                                                  m.$slots.title
                                                    ? R(m.$slots, 'title', {
                                                        key: 1
                                                      })
                                                    : R(m.$slots, 'header', {
                                                        key: 0,
                                                        close: v(P),
                                                        titleId: v(d),
                                                        titleClass:
                                                          v(t).e('title')
                                                      })
                                                ]),
                                                default: N(() => [
                                                  R(m.$slots, 'default')
                                                ]),
                                                _: 2
                                              },
                                              [
                                                m.$slots.footer
                                                  ? {
                                                      name: 'footer',
                                                      fn: N(() => [
                                                        R(m.$slots, 'footer')
                                                      ])
                                                    }
                                                  : void 0
                                              ]
                                            ),
                                            1040,
                                            [
                                              'center',
                                              'align-center',
                                              'close-icon',
                                              'draggable',
                                              'overflow',
                                              'fullscreen',
                                              'show-close',
                                              'title',
                                              'aria-level',
                                              'onClose'
                                            ]
                                          ))
                                        : Ie('v-if', !0)
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  [
                                    'trapped',
                                    'onFocusAfterTrapped',
                                    'onFocusAfterReleased',
                                    'onFocusoutPrevented',
                                    'onReleaseRequested'
                                  ]
                                )
                              ],
                              46,
                              sn
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['mask', 'overlay-class', 'z-index']
                      ),
                      [[Ge, v(l)]]
                    )
                  ]),
                  _: 3
                },
                8,
                ['onAfterEnter', 'onAfterLeave', 'onBeforeLeave']
              )
            ],
            8,
            ['to', 'disabled']
          )
        )
      )
    }
  })
var rn = oe(un, [['__file', 'dialog.vue']])
const cn = Ne(rn)
let dn = class {
    constructor(o, n) {
      ;(this.parent = o),
        (this.domNode = n),
        (this.subIndex = 0),
        (this.subIndex = 0),
        this.init()
    }
    init() {
      ;(this.subMenuItems = this.domNode.querySelectorAll('li')),
        this.addListeners()
    }
    gotoSubIndex(o) {
      o === this.subMenuItems.length
        ? (o = 0)
        : o < 0 && (o = this.subMenuItems.length - 1),
        this.subMenuItems[o].focus(),
        (this.subIndex = o)
    }
    addListeners() {
      const o = this.parent.domNode
      Array.prototype.forEach.call(this.subMenuItems, (n) => {
        n.addEventListener('keydown', (s) => {
          let t = !1
          switch (s.code) {
            case Q.down: {
              this.gotoSubIndex(this.subIndex + 1), (t = !0)
              break
            }
            case Q.up: {
              this.gotoSubIndex(this.subIndex - 1), (t = !0)
              break
            }
            case Q.tab: {
              Te(o, 'mouseleave')
              break
            }
            case Q.enter:
            case Q.space: {
              ;(t = !0), s.currentTarget.click()
              break
            }
          }
          return t && (s.preventDefault(), s.stopPropagation()), !1
        })
      })
    }
  },
  fn = class {
    constructor(o, n) {
      ;(this.domNode = o),
        (this.submenu = null),
        (this.submenu = null),
        this.init(n)
    }
    init(o) {
      this.domNode.setAttribute('tabindex', '0')
      const n = this.domNode.querySelector(`.${o}-menu`)
      n && (this.submenu = new dn(this, n)), this.addListeners()
    }
    addListeners() {
      this.domNode.addEventListener('keydown', (o) => {
        let n = !1
        switch (o.code) {
          case Q.down: {
            Te(o.currentTarget, 'mouseenter'),
              this.submenu && this.submenu.gotoSubIndex(0),
              (n = !0)
            break
          }
          case Q.up: {
            Te(o.currentTarget, 'mouseenter'),
              this.submenu &&
                this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1),
              (n = !0)
            break
          }
          case Q.tab: {
            Te(o.currentTarget, 'mouseleave')
            break
          }
          case Q.enter:
          case Q.space: {
            ;(n = !0), o.currentTarget.click()
            break
          }
        }
        n && o.preventDefault()
      })
    }
  },
  vn = class {
    constructor(o, n) {
      ;(this.domNode = o), this.init(n)
    }
    init(o) {
      const n = this.domNode.childNodes
      Array.from(n).forEach((s) => {
        s.nodeType === 1 && new fn(s, o)
      })
    }
  }
const mn = B({
  name: 'ElMenuCollapseTransition',
  setup() {
    const e = H('menu')
    return {
      listeners: {
        onBeforeEnter: (n) => (n.style.opacity = '0.2'),
        onEnter(n, s) {
          _e(n, `${e.namespace.value}-opacity-transition`),
            (n.style.opacity = '1'),
            s()
        },
        onAfterEnter(n) {
          we(n, `${e.namespace.value}-opacity-transition`),
            (n.style.opacity = '')
        },
        onBeforeLeave(n) {
          n.dataset || (n.dataset = {}),
            We(n, e.m('collapse'))
              ? (we(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                _e(n, e.m('collapse')))
              : (_e(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                we(n, e.m('collapse'))),
            (n.style.width = `${n.scrollWidth}px`),
            (n.style.overflow = 'hidden')
        },
        onLeave(n) {
          _e(n, 'horizontal-collapse-transition'),
            (n.style.width = `${n.dataset.scrollWidth}px`)
        }
      }
    }
  }
})
function pn(e, o, n, s, t, a) {
  return (
    A(),
    fe(
      qe,
      Ye({ mode: 'out-in' }, e.listeners),
      { default: N(() => [R(e.$slots, 'default')]), _: 3 },
      16
    )
  )
}
var bn = oe(mn, [
  ['render', pn],
  ['__file', 'menu-collapse-transition.vue']
])
function _t(e, o) {
  const n = k(() => {
    let t = e.parent
    const a = [o.value]
    for (; t.type.name !== 'ElMenu'; )
      t.props.index && a.unshift(t.props.index), (t = t.parent)
    return a
  })
  return {
    parentMenu: k(() => {
      let t = e.parent
      for (; t && !['ElMenu', 'ElSubMenu'].includes(t.type.name); ) t = t.parent
      return t
    }),
    indexPath: n
  }
}
function hn(e) {
  return k(() => {
    const n = e.backgroundColor
    return n ? new Kt(n).shade(20).toString() : ''
  })
}
const Ct = (e, o) => {
    const n = H('menu')
    return k(() =>
      n.cssVarBlock({
        'text-color': e.textColor || '',
        'hover-text-color': e.textColor || '',
        'bg-color': e.backgroundColor || '',
        'hover-bg-color': hn(e).value || '',
        'active-color': e.activeTextColor || '',
        level: `${o}`
      })
    )
  },
  gn = le({
    index: { type: String, required: !0 },
    showTimeout: Number,
    hideTimeout: Number,
    popperClass: String,
    disabled: Boolean,
    teleported: { type: Boolean, default: void 0 },
    popperOffset: Number,
    expandCloseIcon: { type: ge },
    expandOpenIcon: { type: ge },
    collapseCloseIcon: { type: ge },
    collapseOpenIcon: { type: ge }
  }),
  Re = 'ElSubMenu'
var Je = B({
  name: Re,
  props: gn,
  setup(e, { slots: o, expose: n }) {
    const s = pe(),
      { indexPath: t, parentMenu: a } = _t(
        s,
        k(() => e.index)
      ),
      i = H('menu'),
      c = H('sub-menu'),
      l = ie('rootMenu')
    l || de(Re, 'can not inject root menu')
    const d = ie(`subMenu:${a.value.uid}`)
    d || de(Re, 'can not inject sub menu')
    const f = T({}),
      C = T({})
    let h
    const p = T(!1),
      E = T(),
      _ = T(null),
      I = k(() =>
        F.value === 'horizontal' && P.value ? 'bottom-start' : 'right-start'
      ),
      L = k(() =>
        (F.value === 'horizontal' && P.value) ||
        (F.value === 'vertical' && !l.props.collapse)
          ? e.expandCloseIcon && e.expandOpenIcon
            ? W.value
              ? e.expandOpenIcon
              : e.expandCloseIcon
            : Xt
          : e.collapseCloseIcon && e.collapseOpenIcon
            ? W.value
              ? e.collapseOpenIcon
              : e.collapseCloseIcon
            : it
      ),
      P = k(() => d.level === 0),
      D = k(() => {
        const M = e.teleported
        return M === void 0 ? P.value : M
      }),
      Z = k(() =>
        l.props.collapse
          ? `${i.namespace.value}-zoom-in-left`
          : `${i.namespace.value}-zoom-in-top`
      ),
      te = k(() =>
        F.value === 'horizontal' && P.value
          ? [
              'bottom-start',
              'bottom-end',
              'top-start',
              'top-end',
              'right-start',
              'left-start'
            ]
          : [
              'right-start',
              'right',
              'right-end',
              'left-start',
              'bottom-start',
              'bottom-end',
              'top-start',
              'top-end'
            ]
      ),
      W = k(() => l.openedMenus.includes(e.index)),
      G = k(() => {
        let M = !1
        return (
          Object.values(f.value).forEach((O) => {
            O.active && (M = !0)
          }),
          Object.values(C.value).forEach((O) => {
            O.active && (M = !0)
          }),
          M
        )
      }),
      F = k(() => l.props.mode),
      w = Oe({ index: e.index, indexPath: t, active: G }),
      m = Ct(l.props, d.level + 1),
      y = k(() => {
        var M
        return (M = e.popperOffset) != null ? M : l.props.popperOffset
      }),
      x = k(() => {
        var M
        return (M = e.popperClass) != null ? M : l.props.popperClass
      }),
      V = k(() => {
        var M
        return (M = e.showTimeout) != null ? M : l.props.showTimeout
      }),
      u = k(() => {
        var M
        return (M = e.hideTimeout) != null ? M : l.props.hideTimeout
      }),
      r = () => {
        var M, O, j
        return (j =
          (O = (M = _.value) == null ? void 0 : M.popperRef) == null
            ? void 0
            : O.popperInstanceRef) == null
          ? void 0
          : j.destroy()
      },
      b = (M) => {
        M || r()
      },
      S = () => {
        ;(l.props.menuTrigger === 'hover' && l.props.mode === 'horizontal') ||
          (l.props.collapse && l.props.mode === 'vertical') ||
          e.disabled ||
          l.handleSubMenuClick({
            index: e.index,
            indexPath: t.value,
            active: G.value
          })
      },
      z = (M, O = V.value) => {
        var j
        if (M.type !== 'focus') {
          if (
            (l.props.menuTrigger === 'click' &&
              l.props.mode === 'horizontal') ||
            (!l.props.collapse && l.props.mode === 'vertical') ||
            e.disabled
          ) {
            d.mouseInChild.value = !0
            return
          }
          ;(d.mouseInChild.value = !0),
            h == null || h(),
            ({ stop: h } = ke(() => {
              l.openMenu(e.index, t.value)
            }, O)),
            D.value &&
              ((j = a.value.vnode.el) == null ||
                j.dispatchEvent(new MouseEvent('mouseenter')))
        }
      },
      J = (M = !1) => {
        var O
        if (
          (l.props.menuTrigger === 'click' && l.props.mode === 'horizontal') ||
          (!l.props.collapse && l.props.mode === 'vertical')
        ) {
          d.mouseInChild.value = !1
          return
        }
        h == null || h(),
          (d.mouseInChild.value = !1),
          ({ stop: h } = ke(
            () => !p.value && l.closeMenu(e.index, t.value),
            u.value
          )),
          D.value && M && ((O = d.handleMouseleave) == null || O.call(d, !0))
      }
    ee(
      () => l.props.collapse,
      (M) => b(!!M)
    )
    {
      const M = (j) => {
          C.value[j.index] = j
        },
        O = (j) => {
          delete C.value[j.index]
        }
      Ce(`subMenu:${s.uid}`, {
        addSubMenu: M,
        removeSubMenu: O,
        handleMouseleave: J,
        mouseInChild: p,
        level: d.level + 1
      })
    }
    return (
      n({ opened: W }),
      ve(() => {
        l.addSubMenu(w), d.addSubMenu(w)
      }),
      je(() => {
        d.removeSubMenu(w), l.removeSubMenu(w)
      }),
      () => {
        var M
        const O = [
            (M = o.title) == null ? void 0 : M.call(o),
            q(
              ce,
              {
                class: c.e('icon-arrow'),
                style: {
                  transform: W.value
                    ? (e.expandCloseIcon && e.expandOpenIcon) ||
                      (e.collapseCloseIcon &&
                        e.collapseOpenIcon &&
                        l.props.collapse)
                      ? 'none'
                      : 'rotateZ(180deg)'
                    : 'none'
                }
              },
              {
                default: () =>
                  be(L.value) ? q(s.appContext.components[L.value]) : q(L.value)
              }
            )
          ],
          j = l.isMenuPopup
            ? q(
                ut,
                {
                  ref: _,
                  visible: W.value,
                  effect: 'light',
                  pure: !0,
                  offset: y.value,
                  showArrow: !1,
                  persistent: !0,
                  popperClass: x.value,
                  placement: I.value,
                  teleported: D.value,
                  fallbackPlacements: te.value,
                  transition: Z.value,
                  gpuAcceleration: !1
                },
                {
                  content: () => {
                    var X
                    return q(
                      'div',
                      {
                        class: [i.m(F.value), i.m('popup-container'), x.value],
                        onMouseenter: (K) => z(K, 100),
                        onMouseleave: () => J(!0),
                        onFocus: (K) => z(K, 100)
                      },
                      [
                        q(
                          'ul',
                          {
                            class: [
                              i.b(),
                              i.m('popup'),
                              i.m(`popup-${I.value}`)
                            ],
                            style: m.value
                          },
                          [(X = o.default) == null ? void 0 : X.call(o)]
                        )
                      ]
                    )
                  },
                  default: () =>
                    q('div', { class: c.e('title'), onClick: S }, O)
                }
              )
            : q($e, {}, [
                q('div', { class: c.e('title'), ref: E, onClick: S }, O),
                q(
                  ko,
                  {},
                  {
                    default: () => {
                      var X
                      return Be(
                        q(
                          'ul',
                          {
                            role: 'menu',
                            class: [i.b(), i.m('inline')],
                            style: m.value
                          },
                          [(X = o.default) == null ? void 0 : X.call(o)]
                        ),
                        [[Ge, W.value]]
                      )
                    }
                  }
                )
              ])
        return q(
          'li',
          {
            class: [
              c.b(),
              c.is('active', G.value),
              c.is('opened', W.value),
              c.is('disabled', e.disabled)
            ],
            role: 'menuitem',
            ariaHaspopup: !0,
            ariaExpanded: W.value,
            onMouseenter: z,
            onMouseleave: () => J(),
            onFocus: z
          },
          [j]
        )
      }
    )
  }
})
const yn = le({
    mode: {
      type: String,
      values: ['horizontal', 'vertical'],
      default: 'vertical'
    },
    defaultActive: { type: String, default: '' },
    defaultOpeneds: { type: se(Array), default: () => Xe([]) },
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: { type: String, values: ['hover', 'click'], default: 'hover' },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    closeOnClickOutside: Boolean,
    collapseTransition: { type: Boolean, default: !0 },
    ellipsis: { type: Boolean, default: !0 },
    popperOffset: { type: Number, default: 6 },
    ellipsisIcon: { type: ge, default: () => Zt },
    popperEffect: { type: String, values: ['dark', 'light'], default: 'dark' },
    popperClass: String,
    showTimeout: { type: Number, default: 300 },
    hideTimeout: { type: Number, default: 300 }
  }),
  Fe = (e) => Array.isArray(e) && e.every((o) => be(o)),
  _n = {
    close: (e, o) => be(e) && Fe(o),
    open: (e, o) => be(e) && Fe(o),
    select: (e, o, n, s) =>
      be(e) && Fe(o) && Jt(n) && (s === void 0 || s instanceof Promise)
  }
var Cn = B({
  name: 'ElMenu',
  props: yn,
  emits: _n,
  setup(e, { emit: o, slots: n, expose: s }) {
    const t = pe(),
      a = t.appContext.config.globalProperties.$router,
      i = T(),
      c = H('menu'),
      l = H('sub-menu'),
      d = T(-1),
      f = T(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []),
      C = T(e.defaultActive),
      h = T({}),
      p = T({}),
      E = k(
        () => e.mode === 'horizontal' || (e.mode === 'vertical' && e.collapse)
      ),
      _ = () => {
        const u = C.value && h.value[C.value]
        if (!u || e.mode === 'horizontal' || e.collapse) return
        u.indexPath.forEach((b) => {
          const S = p.value[b]
          S && I(b, S.indexPath)
        })
      },
      I = (u, r) => {
        f.value.includes(u) ||
          (e.uniqueOpened && (f.value = f.value.filter((b) => r.includes(b))),
          f.value.push(u),
          o('open', u, r))
      },
      L = (u) => {
        const r = f.value.indexOf(u)
        r !== -1 && f.value.splice(r, 1)
      },
      P = (u, r) => {
        L(u), o('close', u, r)
      },
      D = ({ index: u, indexPath: r }) => {
        f.value.includes(u) ? P(u, r) : I(u, r)
      },
      Z = (u) => {
        ;(e.mode === 'horizontal' || e.collapse) && (f.value = [])
        const { index: r, indexPath: b } = u
        if (!(et(r) || et(b)))
          if (e.router && a) {
            const S = u.route || r,
              z = a.push(S).then((J) => (J || (C.value = r), J))
            o('select', r, b, { index: r, indexPath: b, route: S }, z)
          } else (C.value = r), o('select', r, b, { index: r, indexPath: b })
      },
      te = (u) => {
        const r = h.value,
          b = r[u] || (C.value && r[C.value]) || r[e.defaultActive]
        b ? (C.value = b.index) : (C.value = u)
      },
      W = (u) => {
        const r = getComputedStyle(u),
          b = Number.parseInt(r.marginLeft, 10),
          S = Number.parseInt(r.marginRight, 10)
        return u.offsetWidth + b + S || 0
      },
      G = () => {
        var u, r
        if (!i.value) return -1
        const b = Array.from(
            (r = (u = i.value) == null ? void 0 : u.childNodes) != null ? r : []
          ).filter(
            (K) =>
              K.nodeName !== '#comment' &&
              (K.nodeName !== '#text' || K.nodeValue)
          ),
          S = 64,
          z = getComputedStyle(i.value),
          J = Number.parseInt(z.paddingLeft, 10),
          M = Number.parseInt(z.paddingRight, 10),
          O = i.value.clientWidth - J - M
        let j = 0,
          X = 0
        return (
          b.forEach((K, St) => {
            ;(j += W(K)), j <= O - S && (X = St + 1)
          }),
          X === b.length ? -1 : X
        )
      },
      F = (u) => p.value[u].indexPath,
      w = (u, r = 33.34) => {
        let b
        return () => {
          b && clearTimeout(b),
            (b = setTimeout(() => {
              u()
            }, r))
        }
      }
    let m = !0
    const y = () => {
      if (d.value === G()) return
      const u = () => {
        ;(d.value = -1),
          Me(() => {
            d.value = G()
          })
      }
      m ? u() : w(u)(), (m = !1)
    }
    ee(
      () => e.defaultActive,
      (u) => {
        h.value[u] || (C.value = ''), te(u)
      }
    ),
      ee(
        () => e.collapse,
        (u) => {
          u && (f.value = [])
        }
      ),
      ee(h.value, _)
    let x
    lt(() => {
      e.mode === 'horizontal' && e.ellipsis
        ? (x = Ke(i, y).stop)
        : x == null || x()
    })
    const V = T(!1)
    {
      const u = (z) => {
          p.value[z.index] = z
        },
        r = (z) => {
          delete p.value[z.index]
        }
      Ce(
        'rootMenu',
        Oe({
          props: e,
          openedMenus: f,
          items: h,
          subMenus: p,
          activeIndex: C,
          isMenuPopup: E,
          addMenuItem: (z) => {
            h.value[z.index] = z
          },
          removeMenuItem: (z) => {
            delete h.value[z.index]
          },
          addSubMenu: u,
          removeSubMenu: r,
          openMenu: I,
          closeMenu: P,
          handleMenuItemClick: Z,
          handleSubMenuClick: D
        })
      ),
        Ce(`subMenu:${t.uid}`, {
          addSubMenu: u,
          removeSubMenu: r,
          mouseInChild: V,
          level: 0
        })
    }
    return (
      ve(() => {
        e.mode === 'horizontal' && new vn(t.vnode.el, c.namespace.value)
      }),
      s({
        open: (r) => {
          const { indexPath: b } = p.value[r]
          b.forEach((S) => I(S, b))
        },
        close: L,
        handleResize: y
      }),
      () => {
        var u, r
        let b =
          (r = (u = n.default) == null ? void 0 : u.call(n)) != null ? r : []
        const S = []
        if (e.mode === 'horizontal' && i.value) {
          const O = _o(b),
            j = d.value === -1 ? O : O.slice(0, d.value),
            X = d.value === -1 ? [] : O.slice(d.value)
          X != null &&
            X.length &&
            e.ellipsis &&
            ((b = j),
            S.push(
              q(
                Je,
                {
                  index: 'sub-menu-more',
                  class: l.e('hide-arrow'),
                  popperOffset: e.popperOffset
                },
                {
                  title: () =>
                    q(
                      ce,
                      { class: l.e('icon-more') },
                      { default: () => q(e.ellipsisIcon) }
                    ),
                  default: () => X
                }
              )
            ))
        }
        const z = Ct(e, 0),
          J = e.closeOnClickOutside
            ? [
                [
                  To,
                  () => {
                    f.value.length &&
                      (V.value ||
                        (f.value.forEach((O) => o('close', O, F(O))),
                        (f.value = [])))
                  }
                ]
              ]
            : [],
          M = Be(
            q(
              'ul',
              {
                key: String(e.collapse),
                role: 'menubar',
                ref: i,
                style: z.value,
                class: {
                  [c.b()]: !0,
                  [c.m(e.mode)]: !0,
                  [c.m('collapse')]: e.collapse
                }
              },
              [...b, ...S]
            ),
            J
          )
        return e.collapseTransition && e.mode === 'vertical'
          ? q(bn, () => M)
          : M
      }
    )
  }
})
const Mn = le({
    index: { type: se([String, null]), default: null },
    route: { type: se([String, Object]) },
    disabled: Boolean
  }),
  $n = { click: (e) => be(e.index) && Array.isArray(e.indexPath) },
  De = 'ElMenuItem',
  En = B({
    name: De,
    components: { ElTooltip: ut },
    props: Mn,
    emits: $n,
    setup(e, { emit: o }) {
      const n = pe(),
        s = ie('rootMenu'),
        t = H('menu'),
        a = H('menu-item')
      s || de(De, 'can not inject root menu')
      const { parentMenu: i, indexPath: c } = _t(n, Qt(e, 'index')),
        l = ie(`subMenu:${i.value.uid}`)
      l || de(De, 'can not inject sub menu')
      const d = k(() => e.index === s.activeIndex),
        f = Oe({ index: e.index, indexPath: c, active: d }),
        C = () => {
          e.disabled ||
            (s.handleMenuItemClick({
              index: e.index,
              indexPath: c.value,
              route: e.route
            }),
            o('click', f))
        }
      return (
        ve(() => {
          l.addSubMenu(f), s.addMenuItem(f)
        }),
        je(() => {
          l.removeSubMenu(f), s.removeMenuItem(f)
        }),
        {
          parentMenu: i,
          rootMenu: s,
          active: d,
          nsMenu: t,
          nsMenuItem: a,
          handleClick: C
        }
      )
    }
  })
function wn(e, o, n, s, t, a) {
  const i = rt('el-tooltip')
  return (
    A(),
    U(
      'li',
      {
        class: Y([
          e.nsMenuItem.b(),
          e.nsMenuItem.is('active', e.active),
          e.nsMenuItem.is('disabled', e.disabled)
        ]),
        role: 'menuitem',
        tabindex: '-1',
        onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
      },
      [
        e.parentMenu.type.name === 'ElMenu' &&
        e.rootMenu.props.collapse &&
        e.$slots.title
          ? (A(),
            fe(
              i,
              {
                key: 0,
                effect: e.rootMenu.props.popperEffect,
                placement: 'right',
                'fallback-placements': ['left'],
                persistent: ''
              },
              {
                content: N(() => [R(e.$slots, 'title')]),
                default: N(() => [
                  $(
                    'div',
                    { class: Y(e.nsMenu.be('tooltip', 'trigger')) },
                    [R(e.$slots, 'default')],
                    2
                  )
                ]),
                _: 3
              },
              8,
              ['effect']
            ))
          : (A(),
            U(
              $e,
              { key: 1 },
              [R(e.$slots, 'default'), R(e.$slots, 'title')],
              64
            ))
      ],
      2
    )
  )
}
var Mt = oe(En, [
  ['render', wn],
  ['__file', 'menu-item.vue']
])
const Tn = { title: String },
  Sn = 'ElMenuItemGroup',
  In = B({
    name: Sn,
    props: Tn,
    setup() {
      return { ns: H('menu-item-group') }
    }
  })
function kn(e, o, n, s, t, a) {
  return (
    A(),
    U(
      'li',
      { class: Y(e.ns.b()) },
      [
        $(
          'div',
          { class: Y(e.ns.e('title')) },
          [
            e.$slots.title
              ? R(e.$slots, 'title', { key: 1 })
              : (A(), U($e, { key: 0 }, [ae(he(e.title), 1)], 64))
          ],
          2
        ),
        $('ul', null, [R(e.$slots, 'default')])
      ],
      2
    )
  )
}
var $t = oe(In, [
  ['render', kn],
  ['__file', 'menu-item-group.vue']
])
const xn = Ne(Cn, { MenuItem: Mt, MenuItemGroup: $t, SubMenu: Je }),
  Nn = me(Mt)
me($t)
const Pn = me(Je),
  Ae = Symbol('tabsRootContextKey'),
  Bn = le({ tabs: { type: se(Array), default: () => Xe([]) } }),
  Et = 'ElTabBar',
  On = B({ name: Et }),
  An = B({
    ...On,
    props: Bn,
    setup(e, { expose: o }) {
      const n = e,
        s = pe(),
        t = ie(Ae)
      t || de(Et, '<el-tabs><el-tab-bar /></el-tabs>')
      const a = H('tabs'),
        i = T(),
        c = T(),
        l = () => {
          let f = 0,
            C = 0
          const h = ['top', 'bottom'].includes(t.props.tabPosition)
              ? 'width'
              : 'height',
            p = h === 'width' ? 'x' : 'y',
            E = p === 'x' ? 'left' : 'top'
          return (
            n.tabs.every((_) => {
              var I, L
              const P =
                (L = (I = s.parent) == null ? void 0 : I.refs) == null
                  ? void 0
                  : L[`tab-${_.uid}`]
              if (!P) return !1
              if (!_.active) return !0
              ;(f = P[`offset${re(E)}`]), (C = P[`client${re(h)}`])
              const D = window.getComputedStyle(P)
              return (
                h === 'width' &&
                  (n.tabs.length > 1 &&
                    (C -=
                      Number.parseFloat(D.paddingLeft) +
                      Number.parseFloat(D.paddingRight)),
                  (f += Number.parseFloat(D.paddingLeft))),
                !1
              )
            }),
            { [h]: `${C}px`, transform: `translate${re(p)}(${f}px)` }
          )
        },
        d = () => (c.value = l())
      return (
        ee(
          () => n.tabs,
          async () => {
            await Me(), d()
          },
          { immediate: !0 }
        ),
        Ke(i, () => d()),
        o({ ref: i, update: d }),
        (f, C) => (
          A(),
          U(
            'div',
            {
              ref_key: 'barRef',
              ref: i,
              class: Y([v(a).e('active-bar'), v(a).is(v(t).props.tabPosition)]),
              style: ye(c.value)
            },
            null,
            6
          )
        )
      )
    }
  })
var Ln = oe(An, [['__file', 'tab-bar.vue']])
const zn = le({
    panes: { type: se(Array), default: () => Xe([]) },
    currentName: { type: [String, Number], default: '' },
    editable: Boolean,
    type: { type: String, values: ['card', 'border-card', ''], default: '' },
    stretch: Boolean
  }),
  Rn = {
    tabClick: (e, o, n) => n instanceof Event,
    tabRemove: (e, o) => o instanceof Event
  },
  st = 'ElTabNav',
  Fn = B({
    name: st,
    props: zn,
    emits: Rn,
    setup(e, { expose: o, emit: n }) {
      const s = pe(),
        t = ie(Ae)
      t || de(st, '<el-tabs><tab-nav /></el-tabs>')
      const a = H('tabs'),
        i = eo(),
        c = to(),
        l = T(),
        d = T(),
        f = T(),
        C = T(),
        h = T(!1),
        p = T(0),
        E = T(!1),
        _ = T(!0),
        I = k(() =>
          ['top', 'bottom'].includes(t.props.tabPosition) ? 'width' : 'height'
        ),
        L = k(() => ({
          transform: `translate${I.value === 'width' ? 'X' : 'Y'}(-${p.value}px)`
        })),
        P = () => {
          if (!l.value) return
          const w = l.value[`offset${re(I.value)}`],
            m = p.value
          if (!m) return
          const y = m > w ? m - w : 0
          p.value = y
        },
        D = () => {
          if (!l.value || !d.value) return
          const w = d.value[`offset${re(I.value)}`],
            m = l.value[`offset${re(I.value)}`],
            y = p.value
          if (w - y <= m) return
          const x = w - y > m * 2 ? y + m : w - m
          p.value = x
        },
        Z = async () => {
          const w = d.value
          if (!h.value || !f.value || !l.value || !w) return
          await Me()
          const m = f.value.querySelector('.is-active')
          if (!m) return
          const y = l.value,
            x = ['top', 'bottom'].includes(t.props.tabPosition),
            V = m.getBoundingClientRect(),
            u = y.getBoundingClientRect(),
            r = x ? w.offsetWidth - u.width : w.offsetHeight - u.height,
            b = p.value
          let S = b
          x
            ? (V.left < u.left && (S = b - (u.left - V.left)),
              V.right > u.right && (S = b + V.right - u.right))
            : (V.top < u.top && (S = b - (u.top - V.top)),
              V.bottom > u.bottom && (S = b + (V.bottom - u.bottom))),
            (S = Math.max(S, 0)),
            (p.value = Math.min(S, r))
        },
        te = () => {
          var w
          if (!d.value || !l.value) return
          e.stretch && ((w = C.value) == null || w.update())
          const m = d.value[`offset${re(I.value)}`],
            y = l.value[`offset${re(I.value)}`],
            x = p.value
          y < m
            ? ((h.value = h.value || {}),
              (h.value.prev = x),
              (h.value.next = x + y < m),
              m - x < y && (p.value = m - y))
            : ((h.value = !1), x > 0 && (p.value = 0))
        },
        W = (w) => {
          const m = w.code,
            { up: y, down: x, left: V, right: u } = Q
          if (![y, x, V, u].includes(m)) return
          const r = Array.from(
              w.currentTarget.querySelectorAll('[role=tab]:not(.is-disabled)')
            ),
            b = r.indexOf(w.target)
          let S
          m === V || m === y
            ? b === 0
              ? (S = r.length - 1)
              : (S = b - 1)
            : b < r.length - 1
              ? (S = b + 1)
              : (S = 0),
            r[S].focus({ preventScroll: !0 }),
            r[S].click(),
            G()
        },
        G = () => {
          _.value && (E.value = !0)
        },
        F = () => (E.value = !1)
      return (
        ee(i, (w) => {
          w === 'hidden'
            ? (_.value = !1)
            : w === 'visible' && setTimeout(() => (_.value = !0), 50)
        }),
        ee(c, (w) => {
          w ? setTimeout(() => (_.value = !0), 50) : (_.value = !1)
        }),
        Ke(f, te),
        ve(() => setTimeout(() => Z(), 0)),
        oo(() => te()),
        o({ scrollToActiveTab: Z, removeFocus: F }),
        ee(
          () => e.panes,
          () => s.update(),
          { flush: 'post', deep: !0 }
        ),
        () => {
          const w = h.value
              ? [
                  g(
                    'span',
                    {
                      class: [a.e('nav-prev'), a.is('disabled', !h.value.prev)],
                      onClick: P
                    },
                    [g(ce, null, { default: () => [g(no, null, null)] })]
                  ),
                  g(
                    'span',
                    {
                      class: [a.e('nav-next'), a.is('disabled', !h.value.next)],
                      onClick: D
                    },
                    [g(ce, null, { default: () => [g(it, null, null)] })]
                  )
                ]
              : null,
            m = e.panes.map((y, x) => {
              var V, u, r, b
              const S = y.uid,
                z = y.props.disabled,
                J =
                  (u = (V = y.props.name) != null ? V : y.index) != null
                    ? u
                    : `${x}`,
                M = !z && (y.isClosable || e.editable)
              y.index = `${x}`
              const O = M
                  ? g(
                      ce,
                      {
                        class: 'is-icon-close',
                        onClick: (K) => n('tabRemove', y, K)
                      },
                      { default: () => [g(ao, null, null)] }
                    )
                  : null,
                j =
                  ((b = (r = y.slots).label) == null ? void 0 : b.call(r)) ||
                  y.props.label,
                X = !z && y.active ? 0 : -1
              return g(
                'div',
                {
                  ref: `tab-${S}`,
                  class: [
                    a.e('item'),
                    a.is(t.props.tabPosition),
                    a.is('active', y.active),
                    a.is('disabled', z),
                    a.is('closable', M),
                    a.is('focus', E.value)
                  ],
                  id: `tab-${J}`,
                  key: `tab-${S}`,
                  'aria-controls': `pane-${J}`,
                  role: 'tab',
                  'aria-selected': y.active,
                  tabindex: X,
                  onFocus: () => G(),
                  onBlur: () => F(),
                  onClick: (K) => {
                    F(), n('tabClick', y, J, K)
                  },
                  onKeydown: (K) => {
                    M &&
                      (K.code === Q.delete || K.code === Q.backspace) &&
                      n('tabRemove', y, K)
                  }
                },
                [j, O]
              )
            })
          return g(
            'div',
            {
              ref: f,
              class: [
                a.e('nav-wrap'),
                a.is('scrollable', !!h.value),
                a.is(t.props.tabPosition)
              ]
            },
            [
              w,
              g('div', { class: a.e('nav-scroll'), ref: l }, [
                g(
                  'div',
                  {
                    class: [
                      a.e('nav'),
                      a.is(t.props.tabPosition),
                      a.is(
                        'stretch',
                        e.stretch &&
                          ['top', 'bottom'].includes(t.props.tabPosition)
                      )
                    ],
                    ref: d,
                    style: L.value,
                    role: 'tablist',
                    onKeydown: W
                  },
                  [
                    e.type ? null : g(Ln, { ref: C, tabs: [...e.panes] }, null),
                    m
                  ]
                )
              ])
            ]
          )
        }
      )
    }
  }),
  Dn = le({
    type: { type: String, values: ['card', 'border-card', ''], default: '' },
    closable: Boolean,
    addable: Boolean,
    modelValue: { type: [String, Number] },
    editable: Boolean,
    tabPosition: {
      type: String,
      values: ['top', 'right', 'bottom', 'left'],
      default: 'top'
    },
    beforeLeave: { type: se(Function), default: () => !0 },
    stretch: Boolean
  }),
  He = (e) => be(e) || lo(e),
  Hn = {
    [Pe]: (e) => He(e),
    tabClick: (e, o) => o instanceof Event,
    tabChange: (e) => He(e),
    edit: (e, o) => ['remove', 'add'].includes(o),
    tabRemove: (e) => He(e),
    tabAdd: () => !0
  },
  Vn = B({
    name: 'ElTabs',
    props: Dn,
    emits: Hn,
    setup(e, { emit: o, slots: n, expose: s }) {
      var t
      const a = H('tabs'),
        { children: i, addChild: c, removeChild: l } = Co(pe(), 'ElTabPane'),
        d = T(),
        f = T((t = e.modelValue) != null ? t : '0'),
        C = async (_, I = !1) => {
          var L, P, D
          if (!(f.value === _ || tt(_)))
            try {
              ;(await ((L = e.beforeLeave) == null
                ? void 0
                : L.call(e, _, f.value))) !== !1 &&
                ((f.value = _),
                I && (o(Pe, _), o('tabChange', _)),
                (D = (P = d.value) == null ? void 0 : P.removeFocus) == null ||
                  D.call(P))
            } catch {}
        },
        h = (_, I, L) => {
          _.props.disabled || (C(I, !0), o('tabClick', _, L))
        },
        p = (_, I) => {
          _.props.disabled ||
            tt(_.props.name) ||
            (I.stopPropagation(),
            o('edit', _.props.name, 'remove'),
            o('tabRemove', _.props.name))
        },
        E = () => {
          o('edit', void 0, 'add'), o('tabAdd')
        }
      return (
        ee(
          () => e.modelValue,
          (_) => C(_)
        ),
        ee(f, async () => {
          var _
          await Me(), (_ = d.value) == null || _.scrollToActiveTab()
        }),
        Ce(Ae, {
          props: e,
          currentName: f,
          registerPane: c,
          unregisterPane: l
        }),
        s({ currentName: f }),
        () => {
          const _ = n['add-icon'],
            I =
              e.editable || e.addable
                ? g(
                    'span',
                    {
                      class: a.e('new-tab'),
                      tabindex: '0',
                      onClick: E,
                      onKeydown: (D) => {
                        D.code === Q.enter && E()
                      }
                    },
                    [
                      _
                        ? R(n, 'add-icon')
                        : g(
                            ce,
                            { class: a.is('icon-plus') },
                            { default: () => [g(so, null, null)] }
                          )
                    ]
                  )
                : null,
            L = g('div', { class: [a.e('header'), a.is(e.tabPosition)] }, [
              I,
              g(
                Fn,
                {
                  ref: d,
                  currentName: f.value,
                  editable: e.editable,
                  type: e.type,
                  panes: i.value,
                  stretch: e.stretch,
                  onTabClick: h,
                  onTabRemove: p
                },
                null
              )
            ]),
            P = g('div', { class: a.e('content') }, [R(n, 'default')])
          return g(
            'div',
            {
              class: [
                a.b(),
                a.m(e.tabPosition),
                {
                  [a.m('card')]: e.type === 'card',
                  [a.m('border-card')]: e.type === 'border-card'
                }
              ]
            },
            [...(e.tabPosition !== 'bottom' ? [L, P] : [P, L])]
          )
        }
      )
    }
  }),
  Wn = le({
    label: { type: String, default: '' },
    name: { type: [String, Number] },
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean
  }),
  jn = ['id', 'aria-hidden', 'aria-labelledby'],
  wt = 'ElTabPane',
  Yn = B({ name: wt }),
  qn = B({
    ...Yn,
    props: Wn,
    setup(e) {
      const o = e,
        n = pe(),
        s = Ue(),
        t = ie(Ae)
      t || de(wt, 'usage: <el-tabs><el-tab-pane /></el-tabs/>')
      const a = H('tab-pane'),
        i = T(),
        c = k(() => o.closable || t.props.closable),
        l = ot(() => {
          var p
          return t.currentName.value === ((p = o.name) != null ? p : i.value)
        }),
        d = T(l.value),
        f = k(() => {
          var p
          return (p = o.name) != null ? p : i.value
        }),
        C = ot(() => !o.lazy || d.value || l.value)
      ee(l, (p) => {
        p && (d.value = !0)
      })
      const h = Oe({
        uid: n.uid,
        slots: s,
        props: o,
        paneName: f,
        active: l,
        index: i,
        isClosable: c
      })
      return (
        ve(() => {
          t.registerPane(h)
        }),
        io(() => {
          t.unregisterPane(h.uid)
        }),
        (p, E) =>
          v(C)
            ? Be(
                (A(),
                U(
                  'div',
                  {
                    key: 0,
                    id: `pane-${v(f)}`,
                    class: Y(v(a).b()),
                    role: 'tabpanel',
                    'aria-hidden': !v(l),
                    'aria-labelledby': `tab-${v(f)}`
                  },
                  [R(p.$slots, 'default')],
                  10,
                  jn
                )),
                [[Ge, v(l)]]
              )
            : Ie('v-if', !0)
      )
    }
  })
var Tt = oe(qn, [['__file', 'tab-pane.vue']])
const Un = Ne(Vn, { TabPane: Tt }),
  Gn = me(Tt),
  Kn = (e) => ho({ url: '/category1', params: { id: e } }),
  ne = (e) => (dt('data-v-1f76e54c'), (e = e()), ft(), e),
  Xn = { class: 'dialog-container' },
  Zn = { class: 'goods-info' },
  Jn = ne(() =>
    $(
      'div',
      { class: 'media' },
      [$('img', { src: 'https://fakeimg.pl/383/' })],
      -1
    )
  ),
  Qn = { class: 'spec' },
  ea = ne(() => $('h4', { class: 'g-name' }, '商品名稱', -1)),
  ta = { class: 'g-desc' },
  oa = ne(() => $('div', { class: 'g-slogan' }, '正版授權 | 寶可夢', -1)),
  na = ne(() =>
    $(
      'div',
      { class: 'g-price' },
      [$('span', null, '建議售價'), $('div', { class: 'nt-price' }, 'NT$199')],
      -1
    )
  ),
  aa = { class: 'goods-footer' },
  sa = { class: 'goods-detail' },
  la = ne(() => $('h5', null, '| 商品介紹', -1)),
  ia = { style: { 'text-align': 'center' } },
  ua = ne(() => $('br', null, null, -1)),
  ra = ne(() =>
    $('h3', { style: { 'text-align': 'center' } }, '隨身攜帶寶可夢', -1)
  ),
  ca = ne(() => $('br', null, null, -1)),
  da = ne(() =>
    $(
      'h3',
      { style: { 'text-align': 'center' } },
      '大師級收藏家一定要擁有!',
      -1
    )
  ),
  fa = ne(() => $('br', null, null, -1)),
  va = ne(() => $('hr', null, null, -1)),
  ma = ne(() => $('h5', null, '| 運送方式', -1)),
  pa = ne(() => $('img', { src: yo }, null, -1)),
  ba = {
    __name: 'GoodsDialog',
    setup(e, { expose: o }) {
      const n = T(!1),
        s = T({})
      return (
        o({
          open: async (a) => {
            n.value = !0
            const i = await go(a)
            s.value = i.data.result
          }
        }),
        (a, i) => {
          const c = uo,
            l = ro,
            d = cn
          return (
            A(),
            fe(
              d,
              {
                modelValue: n.value,
                'onUpdate:modelValue': i[0] || (i[0] = (f) => (n.value = f)),
                width: '900'
              },
              {
                default: N(() => [
                  $('div', Xn, [
                    $('div', Zn, [
                      Jn,
                      $('div', Qn, [
                        ea,
                        $('div', ta, [
                          (A(),
                          U(
                            $e,
                            null,
                            ct(3, (f) => $('p', { key: f }, '★ 商品描述')),
                            64
                          ))
                        ]),
                        oa,
                        na,
                        g(c, { min: 1, max: 10 }),
                        g(
                          l,
                          {
                            size: 'large',
                            class: 'joinbtn',
                            onClick: a.addCart
                          },
                          { default: N(() => [ae(' 加入購物車 ')]), _: 1 },
                          8,
                          ['onClick']
                        )
                      ])
                    ]),
                    $('div', aa, [
                      $('div', sa, [
                        la,
                        $('h1', ia, he(s.value.name), 1),
                        ua,
                        ra,
                        ca,
                        da,
                        fa,
                        va,
                        ma,
                        pa
                      ])
                    ])
                  ])
                ]),
                _: 1
              },
              8,
              ['modelValue']
            )
          )
        }
      )
    }
  },
  ha = Ze(ba, [['__scopeId', 'data-v-1f76e54c']]),
  ga = { class: 'body-item' },
  ya = ['src'],
  _a = { class: 'cover' },
  Ca = {
    __name: 'GoodsItem',
    props: { goods: { tpye: Object, default: () => {} } },
    setup(e) {
      const o = T(),
        n = (s) => {
          o.value.open(s)
        }
      return (s, t) => {
        const a = rt('RouterLink'),
          i = ce
        return (
          A(),
          U('div', ga, [
            g(
              a,
              { to: '/', class: 'goods-item' },
              {
                default: N(() => [
                  $('img', { src: e.goods.picture, alt: '' }, null, 8, ya)
                ]),
                _: 1
              }
            ),
            $('p', null, he(e.goods.name), 1),
            $('span', null, 'NT$' + he(e.goods.price), 1),
            $('div', _a, [
              g(
                a,
                { to: `/detail/manage/${e.goods.id}`, class: 'cover-a' },
                {
                  default: N(() => [
                    g(
                      i,
                      { class: 'butt search' },
                      { default: N(() => [g(v(co))]), _: 1 }
                    )
                  ]),
                  _: 1
                },
                8,
                ['to']
              ),
              $(
                'button',
                {
                  class: 'cover-a',
                  onClick: t[0] || (t[0] = (c) => n(e.goods.id))
                },
                [
                  g(
                    i,
                    { class: 'butt shopp' },
                    { default: N(() => [g(v(fo))]), _: 1 }
                  )
                ]
              )
            ]),
            g(ha, { ref_key: 'dialogRef', ref: o }, null, 512)
          ])
        )
      }
    }
  },
  Ma = Ze(Ca, [['__scopeId', 'data-v-6bbfc5af']]),
  $a = (e) => (dt('data-v-c1849e7b'), (e = e()), ft(), e),
  Ea = { class: 'cate-container' },
  wa = { class: 'bread' },
  Ta = { class: 'bread-container' },
  Sa = { class: 'container' },
  Ia = $a(() => $('span', null, '商品分類', -1)),
  ka = { class: 'main' },
  xa = { class: 'body' },
  Na = {
    __name: 'CategoryManage',
    setup(e) {
      const o = T({}),
        n = vo(),
        s = async (t = n.params.id) => {
          const a = await Kn(t)
          ;(o.value = a.data.data), console.log(o.value)
        }
      return (
        ve(() => s()),
        mo((t) => {
          s(t.params.id)
        }),
        (t, a) => {
          const i = bo,
            c = po,
            l = Nn,
            d = Pn,
            f = xn,
            C = Vo,
            h = Gn,
            p = Un,
            E = Wo,
            _ = Ho
          return (
            A(),
            U('div', Ea, [
              $('div', wa, [
                $('div', Ta, [
                  g(
                    c,
                    { separator: '>' },
                    {
                      default: N(() => [
                        g(
                          i,
                          { to: { path: '/' } },
                          { default: N(() => [ae('首頁')]), _: 1 }
                        ),
                        g(i, null, {
                          default: N(() => [ae(he(o.value.name), 1)]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }
                  )
                ])
              ]),
              $('div', Sa, [
                g(_, null, {
                  default: N(() => [
                    g(C, null, {
                      default: N(() => [
                        g(
                          f,
                          {
                            'active-text-color': '#000000',
                            'default-active': t.$route.path,
                            router: ''
                          },
                          {
                            default: N(() => [
                              g(
                                l,
                                { index: '/' },
                                { default: N(() => [ae(' 首頁 ')]), _: 1 }
                              ),
                              g(
                                l,
                                { index: '/' },
                                { default: N(() => [ae(' 活動專區 ')]), _: 1 }
                              ),
                              g(
                                l,
                                { index: '/' },
                                { default: N(() => [ae(' NEW ')]), _: 1 }
                              ),
                              g(
                                d,
                                { index: '/' },
                                {
                                  title: N(() => [Ia]),
                                  default: N(() => [
                                    g(
                                      l,
                                      { index: '/category/manage/100100' },
                                      {
                                        default: N(() => [ae(' 商品1 ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              g(
                                l,
                                { index: '/category/manage/100100' },
                                { default: N(() => [ae(' 寶可夢 ')]), _: 1 }
                              ),
                              g(
                                l,
                                { index: '/category/manage/100200' },
                                { default: N(() => [ae(' 超級瑪利歐 ')]), _: 1 }
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['default-active']
                        )
                      ]),
                      _: 1
                    }),
                    g(E, null, {
                      default: N(() => [
                        $('div', ka, [
                          $('h1', null, he(o.value.name), 1),
                          g(p, null, {
                            default: N(() => [
                              g(h, { label: '最新商品', name: 'publishTime' }),
                              g(h, { label: '最高人氣', name: 'orderNum' }),
                              g(h, { label: '評論最多', name: 'evaluateNum' })
                            ]),
                            _: 1
                          }),
                          $('div', xa, [
                            (A(!0),
                            U(
                              $e,
                              null,
                              ct(
                                o.value.products,
                                (I) => (
                                  A(),
                                  fe(Ma, { key: I.id, goods: I }, null, 8, [
                                    'goods'
                                  ])
                                )
                              ),
                              128
                            ))
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          )
        }
      )
    }
  },
  Fa = Ze(Na, [['__scopeId', 'data-v-c1849e7b']])
export { Fa as default }
