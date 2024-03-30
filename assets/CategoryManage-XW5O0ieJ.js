import {
  a7 as ft,
  a8 as vt,
  a9 as pt,
  a as N,
  u as R,
  o as L,
  Y as Me,
  s as w,
  r as W,
  aa as je,
  ab as mt,
  e as k,
  a0 as qe,
  _ as Q,
  N as Ue,
  O as E,
  c as K,
  n as J,
  i as Ce,
  w as Pe,
  a6 as oe,
  ac as G,
  ad as he,
  ae as Se,
  af as bt,
  ag as ht,
  b as ce,
  a2 as ue,
  ah as re,
  l as S,
  ai as _t,
  a1 as Ge,
  a3 as $e,
  P as Z,
  T as ye,
  m as pe,
  S as Ke,
  aj as D,
  E as le,
  ak as Ye,
  x as Oe,
  y as Xe,
  F as xe,
  al as me,
  U as de,
  am as Re,
  V as ie,
  an as gt,
  R as Be,
  d as ve,
  ao as Ae,
  ap as yt,
  aq as Mt,
  ar as He,
  as as Ee,
  at as Ct,
  p as Ze,
  h as U,
  f as te,
  t as be,
  au as $t,
  av as xt,
  aw as Et,
  q as v,
  $ as Tt,
  ax as St,
  ay as It,
  az as Je,
  a5 as Le,
  M as wt,
  aA as Fe,
  a4 as Nt,
  g as kt,
  j as Qe,
  H as Pt,
  v as Ot,
  aB as Bt,
  aC as At,
  aD as zt,
  z as Rt,
  aE as Ht,
  C as Lt,
  D as Ft
} from './index-7M82JerP.js'
import { i as Dt } from './request-Di8FVVuO.js'
import { f as Vt, u as Wt } from './index-CaUCwIFE.js'
const _e = function (e, a, ...n) {
    let s
    a.includes('mouse') || a.includes('click')
      ? (s = 'MouseEvents')
      : a.includes('key')
        ? (s = 'KeyboardEvent')
        : (s = 'HTMLEvents')
    const t = document.createEvent(s)
    return t.initEvent(a, ...n), e.dispatchEvent(t), e
  },
  se = (e) => ft(e),
  ne = new Map()
let De
vt &&
  (document.addEventListener('mousedown', (e) => (De = e)),
  document.addEventListener('mouseup', (e) => {
    for (const a of ne.values())
      for (const { documentHandler: n } of a) n(e, De)
  }))
function Ve(e, a) {
  let n = []
  return (
    Array.isArray(a.arg) ? (n = a.arg) : pt(a.arg) && n.push(a.arg),
    function (s, t) {
      const i = a.instance.popperRef,
        d = s.target,
        _ = t == null ? void 0 : t.target,
        o = !a || !a.instance,
        f = !d || !_,
        r = e.contains(d) || e.contains(_),
        M = e === d,
        m =
          (n.length && n.some((H) => (H == null ? void 0 : H.contains(d)))) ||
          (n.length && n.includes(_)),
        b = i && (i.contains(d) || i.contains(_))
      o || f || r || M || m || b || a.value(s, t)
    }
  )
}
const jt = {
    beforeMount(e, a) {
      ne.has(e) || ne.set(e, []),
        ne.get(e).push({ documentHandler: Ve(e, a), bindingFn: a.value })
    },
    updated(e, a) {
      ne.has(e) || ne.set(e, [])
      const n = ne.get(e),
        s = n.findIndex((i) => i.bindingFn === a.oldValue),
        t = { documentHandler: Ve(e, a), bindingFn: a.value }
      s >= 0 ? n.splice(s, 1, t) : n.push(t)
    },
    unmounted(e) {
      ne.delete(e)
    }
  },
  qt = N({ name: 'ElCollapseTransition' }),
  Ut = N({
    ...qt,
    setup(e) {
      const a = R('collapse-transition'),
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
      return (t, i) => (
        L(),
        Me(
          qe,
          je({ name: k(a).b() }, mt(s)),
          { default: w(() => [W(t.$slots, 'default')]), _: 3 },
          16,
          ['name']
        )
      )
    }
  })
var ge = Q(Ut, [['__file', 'collapse-transition.vue']])
ge.install = (e) => {
  e.component(ge.name, ge)
}
const Gt = ge,
  Kt = N({ name: 'ElContainer' }),
  Yt = N({
    ...Kt,
    props: { direction: { type: String } },
    setup(e) {
      const a = e,
        n = Ue(),
        s = R('container'),
        t = E(() =>
          a.direction === 'vertical'
            ? !0
            : a.direction === 'horizontal'
              ? !1
              : n && n.default
                ? n.default().some((d) => {
                    const _ = d.type.name
                    return _ === 'ElHeader' || _ === 'ElFooter'
                  })
                : !1
        )
      return (i, d) => (
        L(),
        K(
          'section',
          { class: J([k(s).b(), k(s).is('vertical', k(t))]) },
          [W(i.$slots, 'default')],
          2
        )
      )
    }
  })
var Xt = Q(Yt, [['__file', 'container.vue']])
const Zt = N({ name: 'ElAside' }),
  Jt = N({
    ...Zt,
    props: { width: { type: String, default: null } },
    setup(e) {
      const a = e,
        n = R('aside'),
        s = E(() => (a.width ? n.cssVarBlock({ width: a.width }) : {}))
      return (t, i) => (
        L(),
        K(
          'aside',
          { class: J(k(n).b()), style: Ce(k(s)) },
          [W(t.$slots, 'default')],
          6
        )
      )
    }
  })
var et = Q(Jt, [['__file', 'aside.vue']])
const Qt = N({ name: 'ElFooter' }),
  ea = N({
    ...Qt,
    props: { height: { type: String, default: null } },
    setup(e) {
      const a = e,
        n = R('footer'),
        s = E(() => (a.height ? n.cssVarBlock({ height: a.height }) : {}))
      return (t, i) => (
        L(),
        K(
          'footer',
          { class: J(k(n).b()), style: Ce(k(s)) },
          [W(t.$slots, 'default')],
          6
        )
      )
    }
  })
var tt = Q(ea, [['__file', 'footer.vue']])
const ta = N({ name: 'ElHeader' }),
  aa = N({
    ...ta,
    props: { height: { type: String, default: null } },
    setup(e) {
      const a = e,
        n = R('header'),
        s = E(() => (a.height ? n.cssVarBlock({ height: a.height }) : {}))
      return (t, i) => (
        L(),
        K(
          'header',
          { class: J(k(n).b()), style: Ce(k(s)) },
          [W(t.$slots, 'default')],
          6
        )
      )
    }
  })
var at = Q(aa, [['__file', 'header.vue']])
const na = N({ name: 'ElMain' }),
  sa = N({
    ...na,
    setup(e) {
      const a = R('main')
      return (n, s) => (
        L(), K('main', { class: J(k(a).b()) }, [W(n.$slots, 'default')], 2)
      )
    }
  })
var nt = Q(sa, [['__file', 'main.vue']])
const oa = Pe(Xt, { Aside: et, Footer: tt, Header: at, Main: nt }),
  la = oe(et)
oe(tt)
oe(at)
const ia = oe(nt)
let ua = class {
    constructor(a, n) {
      ;(this.parent = a),
        (this.domNode = n),
        (this.subIndex = 0),
        (this.subIndex = 0),
        this.init()
    }
    init() {
      ;(this.subMenuItems = this.domNode.querySelectorAll('li')),
        this.addListeners()
    }
    gotoSubIndex(a) {
      a === this.subMenuItems.length
        ? (a = 0)
        : a < 0 && (a = this.subMenuItems.length - 1),
        this.subMenuItems[a].focus(),
        (this.subIndex = a)
    }
    addListeners() {
      const a = this.parent.domNode
      Array.prototype.forEach.call(this.subMenuItems, (n) => {
        n.addEventListener('keydown', (s) => {
          let t = !1
          switch (s.code) {
            case G.down: {
              this.gotoSubIndex(this.subIndex + 1), (t = !0)
              break
            }
            case G.up: {
              this.gotoSubIndex(this.subIndex - 1), (t = !0)
              break
            }
            case G.tab: {
              _e(a, 'mouseleave')
              break
            }
            case G.enter:
            case G.space: {
              ;(t = !0), s.currentTarget.click()
              break
            }
          }
          return t && (s.preventDefault(), s.stopPropagation()), !1
        })
      })
    }
  },
  ra = class {
    constructor(a, n) {
      ;(this.domNode = a),
        (this.submenu = null),
        (this.submenu = null),
        this.init(n)
    }
    init(a) {
      this.domNode.setAttribute('tabindex', '0')
      const n = this.domNode.querySelector(`.${a}-menu`)
      n && (this.submenu = new ua(this, n)), this.addListeners()
    }
    addListeners() {
      this.domNode.addEventListener('keydown', (a) => {
        let n = !1
        switch (a.code) {
          case G.down: {
            _e(a.currentTarget, 'mouseenter'),
              this.submenu && this.submenu.gotoSubIndex(0),
              (n = !0)
            break
          }
          case G.up: {
            _e(a.currentTarget, 'mouseenter'),
              this.submenu &&
                this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1),
              (n = !0)
            break
          }
          case G.tab: {
            _e(a.currentTarget, 'mouseleave')
            break
          }
          case G.enter:
          case G.space: {
            ;(n = !0), a.currentTarget.click()
            break
          }
        }
        n && a.preventDefault()
      })
    }
  },
  ca = class {
    constructor(a, n) {
      ;(this.domNode = a), this.init(n)
    }
    init(a) {
      const n = this.domNode.childNodes
      Array.from(n).forEach((s) => {
        s.nodeType === 1 && new ra(s, a)
      })
    }
  }
const da = N({
  name: 'ElMenuCollapseTransition',
  setup() {
    const e = R('menu')
    return {
      listeners: {
        onBeforeEnter: (n) => (n.style.opacity = '0.2'),
        onEnter(n, s) {
          he(n, `${e.namespace.value}-opacity-transition`),
            (n.style.opacity = '1'),
            s()
        },
        onAfterEnter(n) {
          Se(n, `${e.namespace.value}-opacity-transition`),
            (n.style.opacity = '')
        },
        onBeforeLeave(n) {
          n.dataset || (n.dataset = {}),
            bt(n, e.m('collapse'))
              ? (Se(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                he(n, e.m('collapse')))
              : (he(n, e.m('collapse')),
                (n.dataset.oldOverflow = n.style.overflow),
                (n.dataset.scrollWidth = n.clientWidth.toString()),
                Se(n, e.m('collapse'))),
            (n.style.width = `${n.scrollWidth}px`),
            (n.style.overflow = 'hidden')
        },
        onLeave(n) {
          he(n, 'horizontal-collapse-transition'),
            (n.style.width = `${n.dataset.scrollWidth}px`)
        }
      }
    }
  }
})
function fa(e, a, n, s, t, i) {
  return (
    L(),
    Me(
      qe,
      je({ mode: 'out-in' }, e.listeners),
      { default: w(() => [W(e.$slots, 'default')]), _: 3 },
      16
    )
  )
}
var va = Q(da, [
  ['render', fa],
  ['__file', 'menu-collapse-transition.vue']
])
function st(e, a) {
  const n = E(() => {
    let t = e.parent
    const i = [a.value]
    for (; t.type.name !== 'ElMenu'; )
      t.props.index && i.unshift(t.props.index), (t = t.parent)
    return i
  })
  return {
    parentMenu: E(() => {
      let t = e.parent
      for (; t && !['ElMenu', 'ElSubMenu'].includes(t.type.name); ) t = t.parent
      return t
    }),
    indexPath: n
  }
}
function pa(e) {
  return E(() => {
    const n = e.backgroundColor
    return n ? new ht(n).shade(20).toString() : ''
  })
}
const ot = (e, a) => {
    const n = R('menu')
    return E(() =>
      n.cssVarBlock({
        'text-color': e.textColor || '',
        'hover-text-color': e.textColor || '',
        'bg-color': e.backgroundColor || '',
        'hover-bg-color': pa(e).value || '',
        'active-color': e.activeTextColor || '',
        level: `${a}`
      })
    )
  },
  ma = ce({
    index: { type: String, required: !0 },
    showTimeout: Number,
    hideTimeout: Number,
    popperClass: String,
    disabled: Boolean,
    teleported: { type: Boolean, default: void 0 },
    popperOffset: Number,
    expandCloseIcon: { type: me },
    expandOpenIcon: { type: me },
    collapseCloseIcon: { type: me },
    collapseOpenIcon: { type: me }
  }),
  Ie = 'ElSubMenu'
var ze = N({
  name: Ie,
  props: ma,
  setup(e, { slots: a, expose: n }) {
    const s = de(),
      { indexPath: t, parentMenu: i } = st(
        s,
        E(() => e.index)
      ),
      d = R('menu'),
      _ = R('sub-menu'),
      o = ue('rootMenu')
    o || re(Ie, 'can not inject root menu')
    const f = ue(`subMenu:${i.value.uid}`)
    f || re(Ie, 'can not inject sub menu')
    const r = S({}),
      M = S({})
    let m
    const b = S(!1),
      H = S(),
      h = S(null),
      $ = E(() =>
        X.value === 'horizontal' && P.value ? 'bottom-start' : 'right-start'
      ),
      B = E(() =>
        (X.value === 'horizontal' && P.value) ||
        (X.value === 'vertical' && !o.props.collapse)
          ? e.expandCloseIcon && e.expandOpenIcon
            ? Y.value
              ? e.expandOpenIcon
              : e.expandCloseIcon
            : _t
          : e.collapseCloseIcon && e.collapseOpenIcon
            ? Y.value
              ? e.collapseOpenIcon
              : e.collapseCloseIcon
            : Ge
      ),
      P = E(() => f.level === 0),
      V = E(() => {
        const p = e.teleported
        return p === void 0 ? P.value : p
      }),
      ae = E(() =>
        o.props.collapse
          ? `${d.namespace.value}-zoom-in-left`
          : `${d.namespace.value}-zoom-in-top`
      ),
      fe = E(() =>
        X.value === 'horizontal' && P.value
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
      Y = E(() => o.openedMenus.includes(e.index)),
      ee = E(() => {
        let p = !1
        return (
          Object.values(r.value).forEach((T) => {
            T.active && (p = !0)
          }),
          Object.values(M.value).forEach((T) => {
            T.active && (p = !0)
          }),
          p
        )
      }),
      X = E(() => o.props.mode),
      C = $e({ index: e.index, indexPath: t, active: ee }),
      x = ot(o.props, f.level + 1),
      y = E(() => {
        var p
        return (p = e.popperOffset) != null ? p : o.props.popperOffset
      }),
      O = E(() => {
        var p
        return (p = e.popperClass) != null ? p : o.props.popperClass
      }),
      A = E(() => {
        var p
        return (p = e.showTimeout) != null ? p : o.props.showTimeout
      }),
      l = E(() => {
        var p
        return (p = e.hideTimeout) != null ? p : o.props.hideTimeout
      }),
      u = () => {
        var p, T, z
        return (z =
          (T = (p = h.value) == null ? void 0 : p.popperRef) == null
            ? void 0
            : T.popperInstanceRef) == null
          ? void 0
          : z.destroy()
      },
      c = (p) => {
        p || u()
      },
      g = () => {
        ;(o.props.menuTrigger === 'hover' && o.props.mode === 'horizontal') ||
          (o.props.collapse && o.props.mode === 'vertical') ||
          e.disabled ||
          o.handleSubMenuClick({
            index: e.index,
            indexPath: t.value,
            active: ee.value
          })
      },
      I = (p, T = A.value) => {
        var z
        if (p.type !== 'focus') {
          if (
            (o.props.menuTrigger === 'click' &&
              o.props.mode === 'horizontal') ||
            (!o.props.collapse && o.props.mode === 'vertical') ||
            e.disabled
          ) {
            f.mouseInChild.value = !0
            return
          }
          ;(f.mouseInChild.value = !0),
            m == null || m(),
            ({ stop: m } = Re(() => {
              o.openMenu(e.index, t.value)
            }, T)),
            V.value &&
              ((z = i.value.vnode.el) == null ||
                z.dispatchEvent(new MouseEvent('mouseenter')))
        }
      },
      q = (p = !1) => {
        var T
        if (
          (o.props.menuTrigger === 'click' && o.props.mode === 'horizontal') ||
          (!o.props.collapse && o.props.mode === 'vertical')
        ) {
          f.mouseInChild.value = !1
          return
        }
        m == null || m(),
          (f.mouseInChild.value = !1),
          ({ stop: m } = Re(
            () => !b.value && o.closeMenu(e.index, t.value),
            l.value
          )),
          V.value && p && ((T = f.handleMouseleave) == null || T.call(f, !0))
      }
    Z(
      () => o.props.collapse,
      (p) => c(!!p)
    )
    {
      const p = (z) => {
          M.value[z.index] = z
        },
        T = (z) => {
          delete M.value[z.index]
        }
      ye(`subMenu:${s.uid}`, {
        addSubMenu: p,
        removeSubMenu: T,
        handleMouseleave: q,
        mouseInChild: b,
        level: f.level + 1
      })
    }
    return (
      n({ opened: Y }),
      pe(() => {
        o.addSubMenu(C), f.addSubMenu(C)
      }),
      Ke(() => {
        f.removeSubMenu(C), o.removeSubMenu(C)
      }),
      () => {
        var p
        const T = [
            (p = a.title) == null ? void 0 : p.call(a),
            D(
              le,
              {
                class: _.e('icon-arrow'),
                style: {
                  transform: Y.value
                    ? (e.expandCloseIcon && e.expandOpenIcon) ||
                      (e.collapseCloseIcon &&
                        e.collapseOpenIcon &&
                        o.props.collapse)
                      ? 'none'
                      : 'rotateZ(180deg)'
                    : 'none'
                }
              },
              {
                default: () =>
                  ie(B.value) ? D(s.appContext.components[B.value]) : D(B.value)
              }
            )
          ],
          z = o.isMenuPopup
            ? D(
                Ye,
                {
                  ref: h,
                  visible: Y.value,
                  effect: 'light',
                  pure: !0,
                  offset: y.value,
                  showArrow: !1,
                  persistent: !0,
                  popperClass: O.value,
                  placement: $.value,
                  teleported: V.value,
                  fallbackPlacements: fe.value,
                  transition: ae.value,
                  gpuAcceleration: !1
                },
                {
                  content: () => {
                    var j
                    return D(
                      'div',
                      {
                        class: [d.m(X.value), d.m('popup-container'), O.value],
                        onMouseenter: (F) => I(F, 100),
                        onMouseleave: () => q(!0),
                        onFocus: (F) => I(F, 100)
                      },
                      [
                        D(
                          'ul',
                          {
                            class: [
                              d.b(),
                              d.m('popup'),
                              d.m(`popup-${$.value}`)
                            ],
                            style: x.value
                          },
                          [(j = a.default) == null ? void 0 : j.call(a)]
                        )
                      ]
                    )
                  },
                  default: () =>
                    D('div', { class: _.e('title'), onClick: g }, T)
                }
              )
            : D(xe, {}, [
                D('div', { class: _.e('title'), ref: H, onClick: g }, T),
                D(
                  Gt,
                  {},
                  {
                    default: () => {
                      var j
                      return Oe(
                        D(
                          'ul',
                          {
                            role: 'menu',
                            class: [d.b(), d.m('inline')],
                            style: x.value
                          },
                          [(j = a.default) == null ? void 0 : j.call(a)]
                        ),
                        [[Xe, Y.value]]
                      )
                    }
                  }
                )
              ])
        return D(
          'li',
          {
            class: [
              _.b(),
              _.is('active', ee.value),
              _.is('opened', Y.value),
              _.is('disabled', e.disabled)
            ],
            role: 'menuitem',
            ariaHaspopup: !0,
            ariaExpanded: Y.value,
            onMouseenter: I,
            onMouseleave: () => q(),
            onFocus: I
          },
          [z]
        )
      }
    )
  }
})
const ba = ce({
    mode: {
      type: String,
      values: ['horizontal', 'vertical'],
      default: 'vertical'
    },
    defaultActive: { type: String, default: '' },
    defaultOpeneds: { type: ve(Array), default: () => Ae([]) },
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
    ellipsisIcon: { type: me, default: () => yt },
    popperEffect: { type: String, values: ['dark', 'light'], default: 'dark' },
    popperClass: String,
    showTimeout: { type: Number, default: 300 },
    hideTimeout: { type: Number, default: 300 }
  }),
  we = (e) => Array.isArray(e) && e.every((a) => ie(a)),
  ha = {
    close: (e, a) => ie(e) && we(a),
    open: (e, a) => ie(e) && we(a),
    select: (e, a, n, s) =>
      ie(e) && we(a) && Mt(n) && (s === void 0 || s instanceof Promise)
  }
var _a = N({
  name: 'ElMenu',
  props: ba,
  emits: ha,
  setup(e, { emit: a, slots: n, expose: s }) {
    const t = de(),
      i = t.appContext.config.globalProperties.$router,
      d = S(),
      _ = R('menu'),
      o = R('sub-menu'),
      f = S(-1),
      r = S(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []),
      M = S(e.defaultActive),
      m = S({}),
      b = S({}),
      H = E(
        () => e.mode === 'horizontal' || (e.mode === 'vertical' && e.collapse)
      ),
      h = () => {
        const l = M.value && m.value[M.value]
        if (!l || e.mode === 'horizontal' || e.collapse) return
        l.indexPath.forEach((c) => {
          const g = b.value[c]
          g && $(c, g.indexPath)
        })
      },
      $ = (l, u) => {
        r.value.includes(l) ||
          (e.uniqueOpened && (r.value = r.value.filter((c) => u.includes(c))),
          r.value.push(l),
          a('open', l, u))
      },
      B = (l) => {
        const u = r.value.indexOf(l)
        u !== -1 && r.value.splice(u, 1)
      },
      P = (l, u) => {
        B(l), a('close', l, u)
      },
      V = ({ index: l, indexPath: u }) => {
        r.value.includes(l) ? P(l, u) : $(l, u)
      },
      ae = (l) => {
        ;(e.mode === 'horizontal' || e.collapse) && (r.value = [])
        const { index: u, indexPath: c } = l
        if (!(He(u) || He(c)))
          if (e.router && i) {
            const g = l.route || u,
              I = i.push(g).then((q) => (q || (M.value = u), q))
            a('select', u, c, { index: u, indexPath: c, route: g }, I)
          } else (M.value = u), a('select', u, c, { index: u, indexPath: c })
      },
      fe = (l) => {
        const u = m.value,
          c = u[l] || (M.value && u[M.value]) || u[e.defaultActive]
        c ? (M.value = c.index) : (M.value = l)
      },
      Y = (l) => {
        const u = getComputedStyle(l),
          c = Number.parseInt(u.marginLeft, 10),
          g = Number.parseInt(u.marginRight, 10)
        return l.offsetWidth + c + g || 0
      },
      ee = () => {
        var l, u
        if (!d.value) return -1
        const c = Array.from(
            (u = (l = d.value) == null ? void 0 : l.childNodes) != null ? u : []
          ).filter(
            (F) =>
              F.nodeName !== '#comment' &&
              (F.nodeName !== '#text' || F.nodeValue)
          ),
          g = 64,
          I = getComputedStyle(d.value),
          q = Number.parseInt(I.paddingLeft, 10),
          p = Number.parseInt(I.paddingRight, 10),
          T = d.value.clientWidth - q - p
        let z = 0,
          j = 0
        return (
          c.forEach((F, dt) => {
            ;(z += Y(F)), z <= T - g && (j = dt + 1)
          }),
          j === c.length ? -1 : j
        )
      },
      X = (l) => b.value[l].indexPath,
      C = (l, u = 33.34) => {
        let c
        return () => {
          c && clearTimeout(c),
            (c = setTimeout(() => {
              l()
            }, u))
        }
      }
    let x = !0
    const y = () => {
      if (f.value === ee()) return
      const l = () => {
        ;(f.value = -1),
          Ee(() => {
            f.value = ee()
          })
      }
      x ? l() : C(l)(), (x = !1)
    }
    Z(
      () => e.defaultActive,
      (l) => {
        m.value[l] || (M.value = ''), fe(l)
      }
    ),
      Z(
        () => e.collapse,
        (l) => {
          l && (r.value = [])
        }
      ),
      Z(m.value, h)
    let O
    gt(() => {
      e.mode === 'horizontal' && e.ellipsis
        ? (O = Be(d, y).stop)
        : O == null || O()
    })
    const A = S(!1)
    {
      const l = (I) => {
          b.value[I.index] = I
        },
        u = (I) => {
          delete b.value[I.index]
        }
      ye(
        'rootMenu',
        $e({
          props: e,
          openedMenus: r,
          items: m,
          subMenus: b,
          activeIndex: M,
          isMenuPopup: H,
          addMenuItem: (I) => {
            m.value[I.index] = I
          },
          removeMenuItem: (I) => {
            delete m.value[I.index]
          },
          addSubMenu: l,
          removeSubMenu: u,
          openMenu: $,
          closeMenu: P,
          handleMenuItemClick: ae,
          handleSubMenuClick: V
        })
      ),
        ye(`subMenu:${t.uid}`, {
          addSubMenu: l,
          removeSubMenu: u,
          mouseInChild: A,
          level: 0
        })
    }
    return (
      pe(() => {
        e.mode === 'horizontal' && new ca(t.vnode.el, _.namespace.value)
      }),
      s({
        open: (u) => {
          const { indexPath: c } = b.value[u]
          c.forEach((g) => $(g, c))
        },
        close: B,
        handleResize: y
      }),
      () => {
        var l, u
        let c =
          (u = (l = n.default) == null ? void 0 : l.call(n)) != null ? u : []
        const g = []
        if (e.mode === 'horizontal' && d.value) {
          const T = Vt(c),
            z = f.value === -1 ? T : T.slice(0, f.value),
            j = f.value === -1 ? [] : T.slice(f.value)
          j != null &&
            j.length &&
            e.ellipsis &&
            ((c = z),
            g.push(
              D(
                ze,
                {
                  index: 'sub-menu-more',
                  class: o.e('hide-arrow'),
                  popperOffset: e.popperOffset
                },
                {
                  title: () =>
                    D(
                      le,
                      { class: o.e('icon-more') },
                      { default: () => D(e.ellipsisIcon) }
                    ),
                  default: () => j
                }
              )
            ))
        }
        const I = ot(e, 0),
          q = e.closeOnClickOutside
            ? [
                [
                  jt,
                  () => {
                    r.value.length &&
                      (A.value ||
                        (r.value.forEach((T) => a('close', T, X(T))),
                        (r.value = [])))
                  }
                ]
              ]
            : [],
          p = Oe(
            D(
              'ul',
              {
                key: String(e.collapse),
                role: 'menubar',
                ref: d,
                style: I.value,
                class: {
                  [_.b()]: !0,
                  [_.m(e.mode)]: !0,
                  [_.m('collapse')]: e.collapse
                }
              },
              [...c, ...g]
            ),
            q
          )
        return e.collapseTransition && e.mode === 'vertical'
          ? D(va, () => p)
          : p
      }
    )
  }
})
const ga = ce({
    index: { type: ve([String, null]), default: null },
    route: { type: ve([String, Object]) },
    disabled: Boolean
  }),
  ya = { click: (e) => ie(e.index) && Array.isArray(e.indexPath) },
  Ne = 'ElMenuItem',
  Ma = N({
    name: Ne,
    components: { ElTooltip: Ye },
    props: ga,
    emits: ya,
    setup(e, { emit: a }) {
      const n = de(),
        s = ue('rootMenu'),
        t = R('menu'),
        i = R('menu-item')
      s || re(Ne, 'can not inject root menu')
      const { parentMenu: d, indexPath: _ } = st(n, Ct(e, 'index')),
        o = ue(`subMenu:${d.value.uid}`)
      o || re(Ne, 'can not inject sub menu')
      const f = E(() => e.index === s.activeIndex),
        r = $e({ index: e.index, indexPath: _, active: f }),
        M = () => {
          e.disabled ||
            (s.handleMenuItemClick({
              index: e.index,
              indexPath: _.value,
              route: e.route
            }),
            a('click', r))
        }
      return (
        pe(() => {
          o.addSubMenu(r), s.addMenuItem(r)
        }),
        Ke(() => {
          o.removeSubMenu(r), s.removeMenuItem(r)
        }),
        {
          parentMenu: d,
          rootMenu: s,
          active: f,
          nsMenu: t,
          nsMenuItem: i,
          handleClick: M
        }
      )
    }
  })
function Ca(e, a, n, s, t, i) {
  const d = Ze('el-tooltip')
  return (
    L(),
    K(
      'li',
      {
        class: J([
          e.nsMenuItem.b(),
          e.nsMenuItem.is('active', e.active),
          e.nsMenuItem.is('disabled', e.disabled)
        ]),
        role: 'menuitem',
        tabindex: '-1',
        onClick: a[0] || (a[0] = (..._) => e.handleClick && e.handleClick(..._))
      },
      [
        e.parentMenu.type.name === 'ElMenu' &&
        e.rootMenu.props.collapse &&
        e.$slots.title
          ? (L(),
            Me(
              d,
              {
                key: 0,
                effect: e.rootMenu.props.popperEffect,
                placement: 'right',
                'fallback-placements': ['left'],
                persistent: ''
              },
              {
                content: w(() => [W(e.$slots, 'title')]),
                default: w(() => [
                  U(
                    'div',
                    { class: J(e.nsMenu.be('tooltip', 'trigger')) },
                    [W(e.$slots, 'default')],
                    2
                  )
                ]),
                _: 3
              },
              8,
              ['effect']
            ))
          : (L(),
            K(
              xe,
              { key: 1 },
              [W(e.$slots, 'default'), W(e.$slots, 'title')],
              64
            ))
      ],
      2
    )
  )
}
var lt = Q(Ma, [
  ['render', Ca],
  ['__file', 'menu-item.vue']
])
const $a = { title: String },
  xa = 'ElMenuItemGroup',
  Ea = N({
    name: xa,
    props: $a,
    setup() {
      return { ns: R('menu-item-group') }
    }
  })
function Ta(e, a, n, s, t, i) {
  return (
    L(),
    K(
      'li',
      { class: J(e.ns.b()) },
      [
        U(
          'div',
          { class: J(e.ns.e('title')) },
          [
            e.$slots.title
              ? W(e.$slots, 'title', { key: 1 })
              : (L(), K(xe, { key: 0 }, [te(be(e.title), 1)], 64))
          ],
          2
        ),
        U('ul', null, [W(e.$slots, 'default')])
      ],
      2
    )
  )
}
var it = Q(Ea, [
  ['render', Ta],
  ['__file', 'menu-item-group.vue']
])
const Sa = Pe(_a, { MenuItem: lt, MenuItemGroup: it, SubMenu: ze }),
  Ia = oe(lt)
oe(it)
const wa = oe(ze),
  Te = Symbol('tabsRootContextKey'),
  Na = ce({ tabs: { type: ve(Array), default: () => Ae([]) } }),
  ut = 'ElTabBar',
  ka = N({ name: ut }),
  Pa = N({
    ...ka,
    props: Na,
    setup(e, { expose: a }) {
      const n = e,
        s = de(),
        t = ue(Te)
      t || re(ut, '<el-tabs><el-tab-bar /></el-tabs>')
      const i = R('tabs'),
        d = S(),
        _ = S(),
        o = () => {
          let r = 0,
            M = 0
          const m = ['top', 'bottom'].includes(t.props.tabPosition)
              ? 'width'
              : 'height',
            b = m === 'width' ? 'x' : 'y',
            H = b === 'x' ? 'left' : 'top'
          return (
            n.tabs.every((h) => {
              var $, B
              const P =
                (B = ($ = s.parent) == null ? void 0 : $.refs) == null
                  ? void 0
                  : B[`tab-${h.uid}`]
              if (!P) return !1
              if (!h.active) return !0
              ;(r = P[`offset${se(H)}`]), (M = P[`client${se(m)}`])
              const V = window.getComputedStyle(P)
              return (
                m === 'width' &&
                  (n.tabs.length > 1 &&
                    (M -=
                      Number.parseFloat(V.paddingLeft) +
                      Number.parseFloat(V.paddingRight)),
                  (r += Number.parseFloat(V.paddingLeft))),
                !1
              )
            }),
            { [m]: `${M}px`, transform: `translate${se(b)}(${r}px)` }
          )
        },
        f = () => (_.value = o())
      return (
        Z(
          () => n.tabs,
          async () => {
            await Ee(), f()
          },
          { immediate: !0 }
        ),
        Be(d, () => f()),
        a({ ref: d, update: f }),
        (r, M) => (
          L(),
          K(
            'div',
            {
              ref_key: 'barRef',
              ref: d,
              class: J([k(i).e('active-bar'), k(i).is(k(t).props.tabPosition)]),
              style: Ce(_.value)
            },
            null,
            6
          )
        )
      )
    }
  })
var Oa = Q(Pa, [['__file', 'tab-bar.vue']])
const Ba = ce({
    panes: { type: ve(Array), default: () => Ae([]) },
    currentName: { type: [String, Number], default: '' },
    editable: Boolean,
    type: { type: String, values: ['card', 'border-card', ''], default: '' },
    stretch: Boolean
  }),
  Aa = {
    tabClick: (e, a, n) => n instanceof Event,
    tabRemove: (e, a) => a instanceof Event
  },
  We = 'ElTabNav',
  za = N({
    name: We,
    props: Ba,
    emits: Aa,
    setup(e, { expose: a, emit: n }) {
      const s = de(),
        t = ue(Te)
      t || re(We, '<el-tabs><tab-nav /></el-tabs>')
      const i = R('tabs'),
        d = $t(),
        _ = xt(),
        o = S(),
        f = S(),
        r = S(),
        M = S(),
        m = S(!1),
        b = S(0),
        H = S(!1),
        h = S(!0),
        $ = E(() =>
          ['top', 'bottom'].includes(t.props.tabPosition) ? 'width' : 'height'
        ),
        B = E(() => ({
          transform: `translate${$.value === 'width' ? 'X' : 'Y'}(-${b.value}px)`
        })),
        P = () => {
          if (!o.value) return
          const C = o.value[`offset${se($.value)}`],
            x = b.value
          if (!x) return
          const y = x > C ? x - C : 0
          b.value = y
        },
        V = () => {
          if (!o.value || !f.value) return
          const C = f.value[`offset${se($.value)}`],
            x = o.value[`offset${se($.value)}`],
            y = b.value
          if (C - y <= x) return
          const O = C - y > x * 2 ? y + x : C - x
          b.value = O
        },
        ae = async () => {
          const C = f.value
          if (!m.value || !r.value || !o.value || !C) return
          await Ee()
          const x = r.value.querySelector('.is-active')
          if (!x) return
          const y = o.value,
            O = ['top', 'bottom'].includes(t.props.tabPosition),
            A = x.getBoundingClientRect(),
            l = y.getBoundingClientRect(),
            u = O ? C.offsetWidth - l.width : C.offsetHeight - l.height,
            c = b.value
          let g = c
          O
            ? (A.left < l.left && (g = c - (l.left - A.left)),
              A.right > l.right && (g = c + A.right - l.right))
            : (A.top < l.top && (g = c - (l.top - A.top)),
              A.bottom > l.bottom && (g = c + (A.bottom - l.bottom))),
            (g = Math.max(g, 0)),
            (b.value = Math.min(g, u))
        },
        fe = () => {
          var C
          if (!f.value || !o.value) return
          e.stretch && ((C = M.value) == null || C.update())
          const x = f.value[`offset${se($.value)}`],
            y = o.value[`offset${se($.value)}`],
            O = b.value
          y < x
            ? ((m.value = m.value || {}),
              (m.value.prev = O),
              (m.value.next = O + y < x),
              x - O < y && (b.value = x - y))
            : ((m.value = !1), O > 0 && (b.value = 0))
        },
        Y = (C) => {
          const x = C.code,
            { up: y, down: O, left: A, right: l } = G
          if (![y, O, A, l].includes(x)) return
          const u = Array.from(
              C.currentTarget.querySelectorAll('[role=tab]:not(.is-disabled)')
            ),
            c = u.indexOf(C.target)
          let g
          x === A || x === y
            ? c === 0
              ? (g = u.length - 1)
              : (g = c - 1)
            : c < u.length - 1
              ? (g = c + 1)
              : (g = 0),
            u[g].focus({ preventScroll: !0 }),
            u[g].click(),
            ee()
        },
        ee = () => {
          h.value && (H.value = !0)
        },
        X = () => (H.value = !1)
      return (
        Z(d, (C) => {
          C === 'hidden'
            ? (h.value = !1)
            : C === 'visible' && setTimeout(() => (h.value = !0), 50)
        }),
        Z(_, (C) => {
          C ? setTimeout(() => (h.value = !0), 50) : (h.value = !1)
        }),
        Be(r, fe),
        pe(() => setTimeout(() => ae(), 0)),
        Et(() => fe()),
        a({ scrollToActiveTab: ae, removeFocus: X }),
        Z(
          () => e.panes,
          () => s.update(),
          { flush: 'post', deep: !0 }
        ),
        () => {
          const C = m.value
              ? [
                  v(
                    'span',
                    {
                      class: [i.e('nav-prev'), i.is('disabled', !m.value.prev)],
                      onClick: P
                    },
                    [v(le, null, { default: () => [v(Tt, null, null)] })]
                  ),
                  v(
                    'span',
                    {
                      class: [i.e('nav-next'), i.is('disabled', !m.value.next)],
                      onClick: V
                    },
                    [v(le, null, { default: () => [v(Ge, null, null)] })]
                  )
                ]
              : null,
            x = e.panes.map((y, O) => {
              var A, l, u, c
              const g = y.uid,
                I = y.props.disabled,
                q =
                  (l = (A = y.props.name) != null ? A : y.index) != null
                    ? l
                    : `${O}`,
                p = !I && (y.isClosable || e.editable)
              y.index = `${O}`
              const T = p
                  ? v(
                      le,
                      {
                        class: 'is-icon-close',
                        onClick: (F) => n('tabRemove', y, F)
                      },
                      { default: () => [v(St, null, null)] }
                    )
                  : null,
                z =
                  ((c = (u = y.slots).label) == null ? void 0 : c.call(u)) ||
                  y.props.label,
                j = !I && y.active ? 0 : -1
              return v(
                'div',
                {
                  ref: `tab-${g}`,
                  class: [
                    i.e('item'),
                    i.is(t.props.tabPosition),
                    i.is('active', y.active),
                    i.is('disabled', I),
                    i.is('closable', p),
                    i.is('focus', H.value)
                  ],
                  id: `tab-${q}`,
                  key: `tab-${g}`,
                  'aria-controls': `pane-${q}`,
                  role: 'tab',
                  'aria-selected': y.active,
                  tabindex: j,
                  onFocus: () => ee(),
                  onBlur: () => X(),
                  onClick: (F) => {
                    X(), n('tabClick', y, q, F)
                  },
                  onKeydown: (F) => {
                    p &&
                      (F.code === G.delete || F.code === G.backspace) &&
                      n('tabRemove', y, F)
                  }
                },
                [z, T]
              )
            })
          return v(
            'div',
            {
              ref: r,
              class: [
                i.e('nav-wrap'),
                i.is('scrollable', !!m.value),
                i.is(t.props.tabPosition)
              ]
            },
            [
              C,
              v('div', { class: i.e('nav-scroll'), ref: o }, [
                v(
                  'div',
                  {
                    class: [
                      i.e('nav'),
                      i.is(t.props.tabPosition),
                      i.is(
                        'stretch',
                        e.stretch &&
                          ['top', 'bottom'].includes(t.props.tabPosition)
                      )
                    ],
                    ref: f,
                    style: B.value,
                    role: 'tablist',
                    onKeydown: Y
                  },
                  [
                    e.type ? null : v(Oa, { ref: M, tabs: [...e.panes] }, null),
                    x
                  ]
                )
              ])
            ]
          )
        }
      )
    }
  }),
  Ra = ce({
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
    beforeLeave: { type: ve(Function), default: () => !0 },
    stretch: Boolean
  }),
  ke = (e) => ie(e) || wt(e),
  Ha = {
    [Je]: (e) => ke(e),
    tabClick: (e, a) => a instanceof Event,
    tabChange: (e) => ke(e),
    edit: (e, a) => ['remove', 'add'].includes(a),
    tabRemove: (e) => ke(e),
    tabAdd: () => !0
  },
  La = N({
    name: 'ElTabs',
    props: Ra,
    emits: Ha,
    setup(e, { emit: a, slots: n, expose: s }) {
      var t
      const i = R('tabs'),
        { children: d, addChild: _, removeChild: o } = Wt(de(), 'ElTabPane'),
        f = S(),
        r = S((t = e.modelValue) != null ? t : '0'),
        M = async (h, $ = !1) => {
          var B, P, V
          if (!(r.value === h || Le(h)))
            try {
              ;(await ((B = e.beforeLeave) == null
                ? void 0
                : B.call(e, h, r.value))) !== !1 &&
                ((r.value = h),
                $ && (a(Je, h), a('tabChange', h)),
                (V = (P = f.value) == null ? void 0 : P.removeFocus) == null ||
                  V.call(P))
            } catch {}
        },
        m = (h, $, B) => {
          h.props.disabled || (M($, !0), a('tabClick', h, B))
        },
        b = (h, $) => {
          h.props.disabled ||
            Le(h.props.name) ||
            ($.stopPropagation(),
            a('edit', h.props.name, 'remove'),
            a('tabRemove', h.props.name))
        },
        H = () => {
          a('edit', void 0, 'add'), a('tabAdd')
        }
      return (
        Z(
          () => e.modelValue,
          (h) => M(h)
        ),
        Z(r, async () => {
          var h
          await Ee(), (h = f.value) == null || h.scrollToActiveTab()
        }),
        ye(Te, {
          props: e,
          currentName: r,
          registerPane: _,
          unregisterPane: o
        }),
        s({ currentName: r }),
        () => {
          const h = n['add-icon'],
            $ =
              e.editable || e.addable
                ? v(
                    'span',
                    {
                      class: i.e('new-tab'),
                      tabindex: '0',
                      onClick: H,
                      onKeydown: (V) => {
                        V.code === G.enter && H()
                      }
                    },
                    [
                      h
                        ? W(n, 'add-icon')
                        : v(
                            le,
                            { class: i.is('icon-plus') },
                            { default: () => [v(It, null, null)] }
                          )
                    ]
                  )
                : null,
            B = v('div', { class: [i.e('header'), i.is(e.tabPosition)] }, [
              $,
              v(
                za,
                {
                  ref: f,
                  currentName: r.value,
                  editable: e.editable,
                  type: e.type,
                  panes: d.value,
                  stretch: e.stretch,
                  onTabClick: m,
                  onTabRemove: b
                },
                null
              )
            ]),
            P = v('div', { class: i.e('content') }, [W(n, 'default')])
          return v(
            'div',
            {
              class: [
                i.b(),
                i.m(e.tabPosition),
                {
                  [i.m('card')]: e.type === 'card',
                  [i.m('border-card')]: e.type === 'border-card'
                }
              ]
            },
            [...(e.tabPosition !== 'bottom' ? [B, P] : [P, B])]
          )
        }
      )
    }
  }),
  Fa = ce({
    label: { type: String, default: '' },
    name: { type: [String, Number] },
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean
  }),
  Da = ['id', 'aria-hidden', 'aria-labelledby'],
  rt = 'ElTabPane',
  Va = N({ name: rt }),
  Wa = N({
    ...Va,
    props: Fa,
    setup(e) {
      const a = e,
        n = de(),
        s = Ue(),
        t = ue(Te)
      t || re(rt, 'usage: <el-tabs><el-tab-pane /></el-tabs/>')
      const i = R('tab-pane'),
        d = S(),
        _ = E(() => a.closable || t.props.closable),
        o = Fe(() => {
          var b
          return t.currentName.value === ((b = a.name) != null ? b : d.value)
        }),
        f = S(o.value),
        r = E(() => {
          var b
          return (b = a.name) != null ? b : d.value
        }),
        M = Fe(() => !a.lazy || f.value || o.value)
      Z(o, (b) => {
        b && (f.value = !0)
      })
      const m = $e({
        uid: n.uid,
        slots: s,
        props: a,
        paneName: r,
        active: o,
        index: d,
        isClosable: _
      })
      return (
        pe(() => {
          t.registerPane(m)
        }),
        Nt(() => {
          t.unregisterPane(m.uid)
        }),
        (b, H) =>
          k(M)
            ? Oe(
                (L(),
                K(
                  'div',
                  {
                    key: 0,
                    id: `pane-${k(r)}`,
                    class: J(k(i).b()),
                    role: 'tabpanel',
                    'aria-hidden': !k(o),
                    'aria-labelledby': `tab-${k(r)}`
                  },
                  [W(b.$slots, 'default')],
                  10,
                  Da
                )),
                [[Xe, k(o)]]
              )
            : kt('v-if', !0)
      )
    }
  })
var ct = Q(Wa, [['__file', 'tab-pane.vue']])
const ja = Pe(La, { TabPane: ct }),
  qa = oe(ct),
  Ua = (e) => Dt({ url: '/category1', params: { id: e } }),
  Ga = { class: 'body-item' },
  Ka = ['src'],
  Ya = { class: 'cover' },
  Xa = {
    __name: 'GoodsItem',
    props: { goods: { tpye: Object, default: () => {} } },
    setup(e) {
      return (a, n) => {
        const s = Ze('RouterLink'),
          t = le
        return (
          L(),
          K('div', Ga, [
            v(
              s,
              { to: '/', class: 'goods-item' },
              {
                default: w(() => [
                  U('img', { src: e.goods.picture, alt: '' }, null, 8, Ka)
                ]),
                _: 1
              }
            ),
            U('p', null, be(e.goods.name), 1),
            U('span', null, 'NT$' + be(e.goods.price), 1),
            U('div', Ya, [
              v(
                s,
                { to: `/detail/manage/${e.goods.id}`, class: 'cover-a' },
                {
                  default: w(() => [
                    v(
                      t,
                      { class: 'butt search' },
                      { default: w(() => [v(k(Pt))]), _: 1 }
                    )
                  ]),
                  _: 1
                },
                8,
                ['to']
              ),
              v(
                s,
                { to: '/', class: 'cover-a' },
                {
                  default: w(() => [
                    v(
                      t,
                      { class: 'butt shopp' },
                      { default: w(() => [v(k(Ot))]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              )
            ])
          ])
        )
      }
    }
  },
  Za = Qe(Xa, [['__scopeId', 'data-v-94f37136']]),
  Ja = (e) => (Lt('data-v-c1849e7b'), (e = e()), Ft(), e),
  Qa = { class: 'cate-container' },
  en = { class: 'bread' },
  tn = { class: 'bread-container' },
  an = { class: 'container' },
  nn = Ja(() => U('span', null, '商品分類', -1)),
  sn = { class: 'main' },
  on = { class: 'body' },
  ln = {
    __name: 'CategoryManage',
    setup(e) {
      const a = S({}),
        n = Bt(),
        s = async (t = n.params.id) => {
          const i = await Ua(t)
          ;(a.value = i.data.data), console.log(a.value)
        }
      return (
        pe(() => s()),
        At((t) => {
          s(t.params.id)
        }),
        (t, i) => {
          const d = Ht,
            _ = zt,
            o = Ia,
            f = wa,
            r = Sa,
            M = la,
            m = qa,
            b = ja,
            H = ia,
            h = oa
          return (
            L(),
            K('div', Qa, [
              U('div', en, [
                U('div', tn, [
                  v(
                    _,
                    { separator: '>' },
                    {
                      default: w(() => [
                        v(
                          d,
                          { to: { path: '/' } },
                          { default: w(() => [te('首頁')]), _: 1 }
                        ),
                        v(d, null, {
                          default: w(() => [te(be(a.value.name), 1)]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }
                  )
                ])
              ]),
              U('div', an, [
                v(h, null, {
                  default: w(() => [
                    v(M, null, {
                      default: w(() => [
                        v(
                          r,
                          {
                            'active-text-color': '#000000',
                            'default-active': t.$route.path,
                            router: ''
                          },
                          {
                            default: w(() => [
                              v(
                                o,
                                { index: '/' },
                                { default: w(() => [te(' 首頁 ')]), _: 1 }
                              ),
                              v(
                                o,
                                { index: '/' },
                                { default: w(() => [te(' 活動專區 ')]), _: 1 }
                              ),
                              v(
                                o,
                                { index: '/' },
                                { default: w(() => [te(' NEW ')]), _: 1 }
                              ),
                              v(
                                f,
                                { index: '/' },
                                {
                                  title: w(() => [nn]),
                                  default: w(() => [
                                    v(
                                      o,
                                      { index: '/category/manage/100100' },
                                      {
                                        default: w(() => [te(' 商品1 ')]),
                                        _: 1
                                      }
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              v(
                                o,
                                { index: '/category/manage/100100' },
                                { default: w(() => [te(' 寶可夢 ')]), _: 1 }
                              ),
                              v(
                                o,
                                { index: '/category/manage/100200' },
                                { default: w(() => [te(' 超級瑪利歐 ')]), _: 1 }
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
                    v(H, null, {
                      default: w(() => [
                        U('div', sn, [
                          U('h1', null, be(a.value.name), 1),
                          v(b, null, {
                            default: w(() => [
                              v(m, { label: '最新商品', name: 'publishTime' }),
                              v(m, { label: '最高人氣', name: 'orderNum' }),
                              v(m, { label: '評論最多', name: 'evaluateNum' })
                            ]),
                            _: 1
                          }),
                          U('div', on, [
                            (L(!0),
                            K(
                              xe,
                              null,
                              Rt(
                                a.value.products,
                                ($) => (
                                  L(),
                                  Me(Za, { key: $.id, goods: $ }, null, 8, [
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
  pn = Qe(ln, [['__scopeId', 'data-v-c1849e7b']])
export { pn as default }
