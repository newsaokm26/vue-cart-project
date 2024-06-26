import {
  b as qe,
  a as Z,
  u as Rt,
  O as F,
  M as ce,
  o as L,
  c as ue,
  r as $e,
  q as be,
  s as V,
  x as Je,
  h as le,
  n as D,
  e as y,
  t as Ve,
  y as We,
  a0 as Ke,
  _ as Ge,
  w as Tt,
  ap as At,
  d as Ae,
  aK as Ct,
  a8 as Xe,
  b1 as Nt,
  b2 as xt,
  l as se,
  b3 as Ce,
  m as Pt,
  P as _t,
  b4 as Bt,
  R as Ft,
  Y as j,
  i as Lt,
  g as J,
  E as Ne,
  ar as Dt,
  F as kt,
  Z as Ut,
  b5 as vt,
  aB as jt,
  aG as It,
  V as xe,
  W as Ze,
  a9 as fe,
  b6 as Pe,
  al as Mt,
  b7 as Ht,
  b8 as zt,
  b9 as qt
} from './index-Dn-ej6oH.js'
const _e = {},
  $t = qe({
    value: { type: [String, Number], default: '' },
    max: { type: Number, default: 99 },
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'info', 'danger'],
      default: 'danger'
    },
    showZero: { type: Boolean, default: !0 }
  }),
  Jt = ['textContent'],
  Vt = Z({ name: 'ElBadge' }),
  Wt = Z({
    ...Vt,
    props: $t,
    setup(e, { expose: t }) {
      const n = e,
        s = Rt('badge'),
        r = F(() =>
          n.isDot
            ? ''
            : ce(n.value) && ce(n.max)
              ? n.max < n.value
                ? `${n.max}+`
                : n.value === 0 && !n.showZero
                  ? ''
                  : `${n.value}`
              : `${n.value}`
        )
      return (
        t({ content: r }),
        (o, i) => (
          L(),
          ue(
            'div',
            { class: D(y(s).b()) },
            [
              $e(o.$slots, 'default'),
              be(
                Ke,
                {
                  name: `${y(s).namespace.value}-zoom-in-center`,
                  persisted: ''
                },
                {
                  default: V(() => [
                    Je(
                      le(
                        'sup',
                        {
                          class: D([
                            y(s).e('content'),
                            y(s).em('content', o.type),
                            y(s).is('fixed', !!o.$slots.default),
                            y(s).is('dot', o.isDot)
                          ]),
                          textContent: Ve(y(r))
                        },
                        null,
                        10,
                        Jt
                      ),
                      [[We, !o.hidden && (y(r) || o.isDot)]]
                    )
                  ]),
                  _: 1
                },
                8,
                ['name']
              )
            ],
            2
          )
        )
      )
    }
  })
var Kt = Ge(Wt, [['__file', 'badge.vue']])
const Gt = Tt(Kt),
  Qe = ['success', 'info', 'warning', 'error'],
  R = Ct({
    customClass: '',
    center: !1,
    dangerouslyUseHTMLString: !1,
    duration: 3e3,
    icon: void 0,
    id: '',
    message: '',
    onClose: void 0,
    showClose: !1,
    type: 'info',
    offset: 16,
    zIndex: 0,
    grouping: !1,
    repeatNum: 1,
    appendTo: Xe ? document.body : void 0
  }),
  Xt = qe({
    customClass: { type: String, default: R.customClass },
    center: { type: Boolean, default: R.center },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: R.dangerouslyUseHTMLString
    },
    duration: { type: Number, default: R.duration },
    icon: { type: At, default: R.icon },
    id: { type: String, default: R.id },
    message: { type: Ae([String, Object, Function]), default: R.message },
    onClose: { type: Ae(Function), required: !1 },
    showClose: { type: Boolean, default: R.showClose },
    type: { type: String, values: Qe, default: R.type },
    offset: { type: Number, default: R.offset },
    zIndex: { type: Number, default: R.zIndex },
    grouping: { type: Boolean, default: R.grouping },
    repeatNum: { type: Number, default: R.repeatNum }
  }),
  Zt = { destroy: () => !0 },
  C = Nt([]),
  Qt = (e) => {
    const t = C.findIndex((r) => r.id === e),
      n = C[t]
    let s
    return t > 0 && (s = C[t - 1]), { current: n, prev: s }
  },
  Yt = (e) => {
    const { prev: t } = Qt(e)
    return t ? t.vm.exposed.bottom.value : 0
  },
  en = (e, t) => (C.findIndex((s) => s.id === e) > 0 ? 16 : t),
  tn = ['id'],
  nn = ['innerHTML'],
  sn = Z({ name: 'ElMessage' }),
  rn = Z({
    ...sn,
    props: Xt,
    emits: Zt,
    setup(e, { expose: t }) {
      const n = e,
        { Close: s } = vt,
        { ns: r, zIndex: o } = xt('message'),
        { currentZIndex: i, nextZIndex: c } = o,
        d = se(),
        m = se(!1),
        l = se(0)
      let u
      const E = F(() =>
          n.type ? (n.type === 'error' ? 'danger' : n.type) : 'info'
        ),
        O = F(() => {
          const b = n.type
          return { [r.bm('icon', b)]: b && Ce[b] }
        }),
        f = F(() => n.icon || Ce[n.type] || ''),
        p = F(() => Yt(n.id)),
        w = F(() => en(n.id, n.offset) + p.value),
        S = F(() => l.value + w.value),
        N = F(() => ({ top: `${w.value}px`, zIndex: i.value }))
      function T() {
        n.duration !== 0 &&
          ({ stop: u } = jt(() => {
            $()
          }, n.duration))
      }
      function q() {
        u == null || u()
      }
      function $() {
        m.value = !1
      }
      function Ot({ code: b }) {
        b === It.esc && $()
      }
      return (
        Pt(() => {
          T(), c(), (m.value = !0)
        }),
        _t(
          () => n.repeatNum,
          () => {
            q(), T()
          }
        ),
        Bt(document, 'keydown', Ot),
        Ft(d, () => {
          l.value = d.value.getBoundingClientRect().height
        }),
        t({ visible: m, bottom: S, close: $ }),
        (b, Te) => (
          L(),
          j(
            Ke,
            {
              name: y(r).b('fade'),
              onBeforeLeave: b.onClose,
              onAfterLeave: Te[0] || (Te[0] = (xs) => b.$emit('destroy')),
              persisted: ''
            },
            {
              default: V(() => [
                Je(
                  le(
                    'div',
                    {
                      id: b.id,
                      ref_key: 'messageRef',
                      ref: d,
                      class: D([
                        y(r).b(),
                        { [y(r).m(b.type)]: b.type },
                        y(r).is('center', b.center),
                        y(r).is('closable', b.showClose),
                        b.customClass
                      ]),
                      style: Lt(y(N)),
                      role: 'alert',
                      onMouseenter: q,
                      onMouseleave: T
                    },
                    [
                      b.repeatNum > 1
                        ? (L(),
                          j(
                            y(Gt),
                            {
                              key: 0,
                              value: b.repeatNum,
                              type: y(E),
                              class: D(y(r).e('badge'))
                            },
                            null,
                            8,
                            ['value', 'type', 'class']
                          ))
                        : J('v-if', !0),
                      y(f)
                        ? (L(),
                          j(
                            y(Ne),
                            { key: 1, class: D([y(r).e('icon'), y(O)]) },
                            { default: V(() => [(L(), j(Dt(y(f))))]), _: 1 },
                            8,
                            ['class']
                          ))
                        : J('v-if', !0),
                      $e(b.$slots, 'default', {}, () => [
                        b.dangerouslyUseHTMLString
                          ? (L(),
                            ue(
                              kt,
                              { key: 1 },
                              [
                                J(
                                  " Caution here, message could've been compromised, never use user's input as message "
                                ),
                                le(
                                  'p',
                                  {
                                    class: D(y(r).e('content')),
                                    innerHTML: b.message
                                  },
                                  null,
                                  10,
                                  nn
                                )
                              ],
                              2112
                            ))
                          : (L(),
                            ue(
                              'p',
                              { key: 0, class: D(y(r).e('content')) },
                              Ve(b.message),
                              3
                            ))
                      ]),
                      b.showClose
                        ? (L(),
                          j(
                            y(Ne),
                            {
                              key: 2,
                              class: D(y(r).e('closeBtn')),
                              onClick: Ut($, ['stop'])
                            },
                            { default: V(() => [be(y(s))]), _: 1 },
                            8,
                            ['class', 'onClick']
                          ))
                        : J('v-if', !0)
                    ],
                    46,
                    tn
                  ),
                  [[We, m.value]]
                )
              ]),
              _: 3
            },
            8,
            ['name', 'onBeforeLeave']
          )
        )
      )
    }
  })
var on = Ge(rn, [['__file', 'message.vue']])
let an = 1
const Ye = (e) => {
    const t = !e || xe(e) || Ze(e) || fe(e) ? { message: e } : e,
      n = { ...R, ...t }
    if (!n.appendTo) n.appendTo = document.body
    else if (xe(n.appendTo)) {
      let s = document.querySelector(n.appendTo)
      Mt(s) || (s = document.body), (n.appendTo = s)
    }
    return n
  },
  cn = (e) => {
    const t = C.indexOf(e)
    if (t === -1) return
    C.splice(t, 1)
    const { handler: n } = e
    n.close()
  },
  un = ({ appendTo: e, ...t }, n) => {
    const s = `message_${an++}`,
      r = t.onClose,
      o = document.createElement('div'),
      i = {
        ...t,
        id: s,
        onClose: () => {
          r == null || r(), cn(l)
        },
        onDestroy: () => {
          Pe(null, o)
        }
      },
      c = be(
        on,
        i,
        fe(i.message) || Ze(i.message)
          ? { default: fe(i.message) ? i.message : () => i.message }
          : null
      )
    ;(c.appContext = n || k._context),
      Pe(c, o),
      e.appendChild(o.firstElementChild)
    const d = c.component,
      l = {
        id: s,
        vnode: c,
        vm: d,
        handler: {
          close: () => {
            d.exposed.visible.value = !1
          }
        },
        props: c.component.props
      }
    return l
  },
  k = (e = {}, t) => {
    if (!Xe) return { close: () => {} }
    if (ce(_e.max) && C.length >= _e.max) return { close: () => {} }
    const n = Ye(e)
    if (n.grouping && C.length) {
      const r = C.find(({ vnode: o }) => {
        var i
        return ((i = o.props) == null ? void 0 : i.message) === n.message
      })
      if (r) return (r.props.repeatNum += 1), (r.props.type = n.type), r.handler
    }
    const s = un(n, t)
    return C.push(s), s.handler
  }
Qe.forEach((e) => {
  k[e] = (t = {}, n) => {
    const s = Ye(t)
    return k({ ...s, type: e }, n)
  }
})
function ln(e) {
  for (const t of C) (!e || e === t.props.type) && t.handler.close()
}
k.closeAll = ln
k._context = null
const Be = Ht(k, '$message')
function et(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: fn } = Object.prototype,
  { getPrototypeOf: Ee } = Object,
  Q = ((e) => (t) => {
    const n = fn.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  P = (e) => ((e = e.toLowerCase()), (t) => Q(t) === e),
  Y = (e) => (t) => typeof t === e,
  { isArray: v } = Array,
  M = Y('undefined')
function dn(e) {
  return (
    e !== null &&
    !M(e) &&
    e.constructor !== null &&
    !M(e.constructor) &&
    A(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const tt = P('ArrayBuffer')
function pn(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && tt(e.buffer)),
    t
  )
}
const mn = Y('string'),
  A = Y('function'),
  nt = Y('number'),
  ee = (e) => e !== null && typeof e == 'object',
  hn = (e) => e === !0 || e === !1,
  W = (e) => {
    if (Q(e) !== 'object') return !1
    const t = Ee(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  yn = P('Date'),
  bn = P('File'),
  En = P('Blob'),
  wn = P('FileList'),
  gn = (e) => ee(e) && A(e.pipe),
  Sn = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (A(e.append) &&
          ((t = Q(e)) === 'formdata' ||
            (t === 'object' &&
              A(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  On = P('URLSearchParams'),
  Rn = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function H(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let s, r
  if ((typeof e != 'object' && (e = [e]), v(e)))
    for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e)
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length
    let c
    for (s = 0; s < i; s++) (c = o[s]), t.call(null, e[c], c, e)
  }
}
function st(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let s = n.length,
    r
  for (; s-- > 0; ) if (((r = n[s]), t === r.toLowerCase())) return r
  return null
}
const rt =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  ot = (e) => !M(e) && e !== rt
function de() {
  const { caseless: e } = (ot(this) && this) || {},
    t = {},
    n = (s, r) => {
      const o = (e && st(t, r)) || r
      W(t[o]) && W(s)
        ? (t[o] = de(t[o], s))
        : W(s)
          ? (t[o] = de({}, s))
          : v(s)
            ? (t[o] = s.slice())
            : (t[o] = s)
    }
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && H(arguments[s], n)
  return t
}
const Tn = (e, t, n, { allOwnKeys: s } = {}) => (
    H(
      t,
      (r, o) => {
        n && A(r) ? (e[o] = et(r, n)) : (e[o] = r)
      },
      { allOwnKeys: s }
    ),
    e
  ),
  An = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Cn = (e, t, n, s) => {
    ;(e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  Nn = (e, t, n, s) => {
    let r, o, i
    const c = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
        (i = r[o]), (!s || s(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0))
      e = n !== !1 && Ee(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  xn = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const s = e.indexOf(t, n)
    return s !== -1 && s === n
  },
  Pn = (e) => {
    if (!e) return null
    if (v(e)) return e
    let t = e.length
    if (!nt(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  _n = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Ee(Uint8Array)),
  Bn = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e)
    let r
    for (; (r = s.next()) && !r.done; ) {
      const o = r.value
      t.call(e, o[0], o[1])
    }
  },
  Fn = (e, t) => {
    let n
    const s = []
    for (; (n = e.exec(t)) !== null; ) s.push(n)
    return s
  },
  Ln = P('HTMLFormElement'),
  Dn = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
      return s.toUpperCase() + r
    }),
  Fe = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  kn = P('RegExp'),
  it = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {}
    H(n, (r, o) => {
      let i
      ;(i = t(r, o, e)) !== !1 && (s[o] = i || r)
    }),
      Object.defineProperties(e, s)
  },
  Un = (e) => {
    it(e, (t, n) => {
      if (A(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
      const s = e[n]
      if (A(s)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  vn = (e, t) => {
    const n = {},
      s = (r) => {
        r.forEach((o) => {
          n[o] = !0
        })
      }
    return v(e) ? s(e) : s(String(e).split(t)), n
  },
  jn = () => {},
  In = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  re = 'abcdefghijklmnopqrstuvwxyz',
  Le = '0123456789',
  at = { DIGIT: Le, ALPHA: re, ALPHA_DIGIT: re + re.toUpperCase() + Le },
  Mn = (e = 16, t = at.ALPHA_DIGIT) => {
    let n = ''
    const { length: s } = t
    for (; e--; ) n += t[(Math.random() * s) | 0]
    return n
  }
function Hn(e) {
  return !!(
    e &&
    A(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const zn = (e) => {
    const t = new Array(10),
      n = (s, r) => {
        if (ee(s)) {
          if (t.indexOf(s) >= 0) return
          if (!('toJSON' in s)) {
            t[r] = s
            const o = v(s) ? [] : {}
            return (
              H(s, (i, c) => {
                const d = n(i, r + 1)
                !M(d) && (o[c] = d)
              }),
              (t[r] = void 0),
              o
            )
          }
        }
        return s
      }
    return n(e, 0)
  },
  qn = P('AsyncFunction'),
  $n = (e) => e && (ee(e) || A(e)) && A(e.then) && A(e.catch),
  a = {
    isArray: v,
    isArrayBuffer: tt,
    isBuffer: dn,
    isFormData: Sn,
    isArrayBufferView: pn,
    isString: mn,
    isNumber: nt,
    isBoolean: hn,
    isObject: ee,
    isPlainObject: W,
    isUndefined: M,
    isDate: yn,
    isFile: bn,
    isBlob: En,
    isRegExp: kn,
    isFunction: A,
    isStream: gn,
    isURLSearchParams: On,
    isTypedArray: _n,
    isFileList: wn,
    forEach: H,
    merge: de,
    extend: Tn,
    trim: Rn,
    stripBOM: An,
    inherits: Cn,
    toFlatObject: Nn,
    kindOf: Q,
    kindOfTest: P,
    endsWith: xn,
    toArray: Pn,
    forEachEntry: Bn,
    matchAll: Fn,
    isHTMLForm: Ln,
    hasOwnProperty: Fe,
    hasOwnProp: Fe,
    reduceDescriptors: it,
    freezeMethods: Un,
    toObjectSet: vn,
    toCamelCase: Dn,
    noop: jn,
    toFiniteNumber: In,
    findKey: st,
    global: rt,
    isContextDefined: ot,
    ALPHABET: at,
    generateString: Mn,
    isSpecCompliantForm: Hn,
    toJSONObject: zn,
    isAsyncFn: qn,
    isThenable: $n
  }
function h(e, t, n, s, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    r && (this.response = r)
}
a.inherits(h, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null
    }
  }
})
const ct = h.prototype,
  ut = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach((e) => {
  ut[e] = { value: e }
})
Object.defineProperties(h, ut)
Object.defineProperty(ct, 'isAxiosError', { value: !0 })
h.from = (e, t, n, s, r, o) => {
  const i = Object.create(ct)
  return (
    a.toFlatObject(
      e,
      i,
      function (d) {
        return d !== Error.prototype
      },
      (c) => c !== 'isAxiosError'
    ),
    h.call(i, e.message, t, n, s, r),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  )
}
const Jn = null
function pe(e) {
  return a.isPlainObject(e) || a.isArray(e)
}
function lt(e) {
  return a.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function De(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (r, o) {
          return (r = lt(r)), !n && o ? '[' + r + ']' : r
        })
        .join(n ? '.' : '')
    : t
}
function Vn(e) {
  return a.isArray(e) && !e.some(pe)
}
const Wn = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function te(e, t, n) {
  if (!a.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (p, w) {
        return !a.isUndefined(w[p])
      }
    ))
  const s = n.metaTokens,
    r = n.visitor || l,
    o = n.dots,
    i = n.indexes,
    d = (n.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t)
  if (!a.isFunction(r)) throw new TypeError('visitor must be a function')
  function m(f) {
    if (f === null) return ''
    if (a.isDate(f)) return f.toISOString()
    if (!d && a.isBlob(f))
      throw new h('Blob is not supported. Use a Buffer instead.')
    return a.isArrayBuffer(f) || a.isTypedArray(f)
      ? d && typeof Blob == 'function'
        ? new Blob([f])
        : Buffer.from(f)
      : f
  }
  function l(f, p, w) {
    let S = f
    if (f && !w && typeof f == 'object') {
      if (a.endsWith(p, '{}'))
        (p = s ? p : p.slice(0, -2)), (f = JSON.stringify(f))
      else if (
        (a.isArray(f) && Vn(f)) ||
        ((a.isFileList(f) || a.endsWith(p, '[]')) && (S = a.toArray(f)))
      )
        return (
          (p = lt(p)),
          S.forEach(function (T, q) {
            !(a.isUndefined(T) || T === null) &&
              t.append(
                i === !0 ? De([p], q, o) : i === null ? p : p + '[]',
                m(T)
              )
          }),
          !1
        )
    }
    return pe(f) ? !0 : (t.append(De(w, p, o), m(f)), !1)
  }
  const u = [],
    E = Object.assign(Wn, {
      defaultVisitor: l,
      convertValue: m,
      isVisitable: pe
    })
  function O(f, p) {
    if (!a.isUndefined(f)) {
      if (u.indexOf(f) !== -1)
        throw Error('Circular reference detected in ' + p.join('.'))
      u.push(f),
        a.forEach(f, function (S, N) {
          ;(!(a.isUndefined(S) || S === null) &&
            r.call(t, S, a.isString(N) ? N.trim() : N, p, E)) === !0 &&
            O(S, p ? p.concat(N) : [N])
        }),
        u.pop()
    }
  }
  if (!a.isObject(e)) throw new TypeError('data must be an object')
  return O(e), t
}
function ke(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0'
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s]
  })
}
function we(e, t) {
  ;(this._pairs = []), e && te(e, this, t)
}
const ft = we.prototype
ft.append = function (t, n) {
  this._pairs.push([t, n])
}
ft.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, ke)
      }
    : ke
  return this._pairs
    .map(function (r) {
      return n(r[0]) + '=' + n(r[1])
    }, '')
    .join('&')
}
function Kn(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function dt(e, t, n) {
  if (!t) return e
  const s = (n && n.encode) || Kn,
    r = n && n.serialize
  let o
  if (
    (r
      ? (o = r(t, n))
      : (o = a.isURLSearchParams(t) ? t.toString() : new we(t, n).toString(s)),
    o)
  ) {
    const i = e.indexOf('#')
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o)
  }
  return e
}
class Ue {
  constructor() {
    this.handlers = []
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    a.forEach(this.handlers, function (s) {
      s !== null && t(s)
    })
  }
}
const pt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  Gn = typeof URLSearchParams < 'u' ? URLSearchParams : we,
  Xn = typeof FormData < 'u' ? FormData : null,
  Zn = typeof Blob < 'u' ? Blob : null,
  Qn = {
    isBrowser: !0,
    classes: { URLSearchParams: Gn, FormData: Xn, Blob: Zn },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  },
  mt = typeof window < 'u' && typeof document < 'u',
  Yn = ((e) => mt && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  es =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  ts = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: mt,
        hasStandardBrowserEnv: Yn,
        hasStandardBrowserWebWorkerEnv: es
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  x = { ...ts, ...Qn }
function ns(e, t) {
  return te(
    e,
    new x.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, r, o) {
          return x.isNode && a.isBuffer(n)
            ? (this.append(s, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments)
        }
      },
      t
    )
  )
}
function ss(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function rs(e) {
  const t = {},
    n = Object.keys(e)
  let s
  const r = n.length
  let o
  for (s = 0; s < r; s++) (o = n[s]), (t[o] = e[o])
  return t
}
function ht(e) {
  function t(n, s, r, o) {
    let i = n[o++]
    if (i === '__proto__') return !0
    const c = Number.isFinite(+i),
      d = o >= n.length
    return (
      (i = !i && a.isArray(r) ? r.length : i),
      d
        ? (a.hasOwnProp(r, i) ? (r[i] = [r[i], s]) : (r[i] = s), !c)
        : ((!r[i] || !a.isObject(r[i])) && (r[i] = []),
          t(n, s, r[i], o) && a.isArray(r[i]) && (r[i] = rs(r[i])),
          !c)
    )
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {}
    return (
      a.forEachEntry(e, (s, r) => {
        t(ss(s), r, n, 0)
      }),
      n
    )
  }
  return null
}
function os(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e)
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s
    }
  return (n || JSON.stringify)(e)
}
const ge = {
  transitional: pt,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || '',
        r = s.indexOf('application/json') > -1,
        o = a.isObject(t)
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return r ? JSON.stringify(ht(t)) : t
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t)
      )
        return t
      if (a.isArrayBufferView(t)) return t.buffer
      if (a.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let c
      if (o) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return ns(t, this.formSerializer).toString()
        if ((c = a.isFileList(t)) || s.indexOf('multipart/form-data') > -1) {
          const d = this.env && this.env.FormData
          return te(c ? { 'files[]': t } : t, d && new d(), this.formSerializer)
        }
      }
      return o || r ? (n.setContentType('application/json', !1), os(t)) : t
    }
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ge.transitional,
        s = n && n.forcedJSONParsing,
        r = this.responseType === 'json'
      if (t && a.isString(t) && ((s && !this.responseType) || r)) {
        const i = !(n && n.silentJSONParsing) && r
        try {
          return JSON.parse(t)
        } catch (c) {
          if (i)
            throw c.name === 'SyntaxError'
              ? h.from(c, h.ERR_BAD_RESPONSE, this, null, this.response)
              : c
        }
      }
      return t
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: x.classes.FormData, Blob: x.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0
    }
  }
}
a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ge.headers[e] = {}
})
const Se = ge,
  is = a.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  as = (e) => {
    const t = {}
    let n, s, r
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            ;(r = i.indexOf(':')),
              (n = i.substring(0, r).trim().toLowerCase()),
              (s = i.substring(r + 1).trim()),
              !(!n || (t[n] && is[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(s)
                    : (t[n] = [s])
                  : (t[n] = t[n] ? t[n] + ', ' + s : s))
          }),
      t
    )
  },
  ve = Symbol('internals')
function I(e) {
  return e && String(e).trim().toLowerCase()
}
function K(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(K) : String(e)
}
function cs(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let s
  for (; (s = n.exec(e)); ) t[s[1]] = s[2]
  return t
}
const us = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function oe(e, t, n, s, r) {
  if (a.isFunction(s)) return s.call(this, t, n)
  if ((r && (t = n), !!a.isString(t))) {
    if (a.isString(s)) return t.indexOf(s) !== -1
    if (a.isRegExp(s)) return s.test(t)
  }
}
function ls(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}
function fs(e, t) {
  const n = a.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function (r, o, i) {
        return this[s].call(this, t, r, o, i)
      },
      configurable: !0
    })
  })
}
class ne {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, s) {
    const r = this
    function o(c, d, m) {
      const l = I(d)
      if (!l) throw new Error('header name must be a non-empty string')
      const u = a.findKey(r, l)
      ;(!u || r[u] === void 0 || m === !0 || (m === void 0 && r[u] !== !1)) &&
        (r[u || d] = K(c))
    }
    const i = (c, d) => a.forEach(c, (m, l) => o(m, l, d))
    return (
      a.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : a.isString(t) && (t = t.trim()) && !us(t)
          ? i(as(t), n)
          : t != null && o(n, t, s),
      this
    )
  }
  get(t, n) {
    if (((t = I(t)), t)) {
      const s = a.findKey(this, t)
      if (s) {
        const r = this[s]
        if (!n) return r
        if (n === !0) return cs(r)
        if (a.isFunction(n)) return n.call(this, r, s)
        if (a.isRegExp(n)) return n.exec(r)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = I(t)), t)) {
      const s = a.findKey(this, t)
      return !!(s && this[s] !== void 0 && (!n || oe(this, this[s], s, n)))
    }
    return !1
  }
  delete(t, n) {
    const s = this
    let r = !1
    function o(i) {
      if (((i = I(i)), i)) {
        const c = a.findKey(s, i)
        c && (!n || oe(s, s[c], c, n)) && (delete s[c], (r = !0))
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), r
  }
  clear(t) {
    const n = Object.keys(this)
    let s = n.length,
      r = !1
    for (; s--; ) {
      const o = n[s]
      ;(!t || oe(this, this[o], o, t, !0)) && (delete this[o], (r = !0))
    }
    return r
  }
  normalize(t) {
    const n = this,
      s = {}
    return (
      a.forEach(this, (r, o) => {
        const i = a.findKey(s, o)
        if (i) {
          ;(n[i] = K(r)), delete n[o]
          return
        }
        const c = t ? ls(o) : String(o).trim()
        c !== o && delete n[o], (n[c] = K(r)), (s[c] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      a.forEach(this, (s, r) => {
        s != null && s !== !1 && (n[r] = t && a.isArray(s) ? s.join(', ') : s)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const s = new this(t)
    return n.forEach((r) => s.set(r)), s
  }
  static accessor(t) {
    const s = (this[ve] = this[ve] = { accessors: {} }).accessors,
      r = this.prototype
    function o(i) {
      const c = I(i)
      s[c] || (fs(r, i), (s[c] = !0))
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this
  }
}
ne.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization'
])
a.reduceDescriptors(ne.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(s) {
      this[n] = s
    }
  }
})
a.freezeMethods(ne)
const _ = ne
function ie(e, t) {
  const n = this || Se,
    s = t || n,
    r = _.from(s.headers)
  let o = s.data
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, r.normalize(), t ? t.status : void 0)
    }),
    r.normalize(),
    o
  )
}
function yt(e) {
  return !!(e && e.__CANCEL__)
}
function z(e, t, n) {
  h.call(this, e ?? 'canceled', h.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
a.inherits(z, h, { __CANCEL__: !0 })
function ds(e, t, n) {
  const s = n.config.validateStatus
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new h(
          'Request failed with status code ' + n.status,
          [h.ERR_BAD_REQUEST, h.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      )
}
const ps = x.hasStandardBrowserEnv
  ? {
      write(e, t, n, s, r, o) {
        const i = [e + '=' + encodeURIComponent(t)]
        a.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
          a.isString(s) && i.push('path=' + s),
          a.isString(r) && i.push('domain=' + r),
          o === !0 && i.push('secure'),
          (document.cookie = i.join('; '))
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
        )
        return t ? decodeURIComponent(t[3]) : null
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5)
      }
    }
  : {
      write() {},
      read() {
        return null
      },
      remove() {}
    }
function ms(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function hs(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function bt(e, t) {
  return e && !ms(t) ? hs(e, t) : t
}
const ys = x.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let s
      function r(o) {
        let i = o
        return (
          t && (n.setAttribute('href', i), (i = n.href)),
          n.setAttribute('href', i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname
          }
        )
      }
      return (
        (s = r(window.location.href)),
        function (i) {
          const c = a.isString(i) ? r(i) : i
          return c.protocol === s.protocol && c.host === s.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function bs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function Es(e, t) {
  e = e || 10
  const n = new Array(e),
    s = new Array(e)
  let r = 0,
    o = 0,
    i
  return (
    (t = t !== void 0 ? t : 1e3),
    function (d) {
      const m = Date.now(),
        l = s[o]
      i || (i = m), (n[r] = d), (s[r] = m)
      let u = o,
        E = 0
      for (; u !== r; ) (E += n[u++]), (u = u % e)
      if (((r = (r + 1) % e), r === o && (o = (o + 1) % e), m - i < t)) return
      const O = l && m - l
      return O ? Math.round((E * 1e3) / O) : void 0
    }
  )
}
function je(e, t) {
  let n = 0
  const s = Es(50, 250)
  return (r) => {
    const o = r.loaded,
      i = r.lengthComputable ? r.total : void 0,
      c = o - n,
      d = s(c),
      m = o <= i
    n = o
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && i && m ? (i - o) / d : void 0,
      event: r
    }
    ;(l[t ? 'download' : 'upload'] = !0), e(l)
  }
}
const ws = typeof XMLHttpRequest < 'u',
  gs =
    ws &&
    function (e) {
      return new Promise(function (n, s) {
        let r = e.data
        const o = _.from(e.headers).normalize()
        let { responseType: i, withXSRFToken: c } = e,
          d
        function m() {
          e.cancelToken && e.cancelToken.unsubscribe(d),
            e.signal && e.signal.removeEventListener('abort', d)
        }
        let l
        if (a.isFormData(r)) {
          if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1)
          else if ((l = o.getContentType()) !== !1) {
            const [p, ...w] = l
              ? l
                  .split(';')
                  .map((S) => S.trim())
                  .filter(Boolean)
              : []
            o.setContentType([p || 'multipart/form-data', ...w].join('; '))
          }
        }
        let u = new XMLHttpRequest()
        if (e.auth) {
          const p = e.auth.username || '',
            w = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          o.set('Authorization', 'Basic ' + btoa(p + ':' + w))
        }
        const E = bt(e.baseURL, e.url)
        u.open(e.method.toUpperCase(), dt(E, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout)
        function O() {
          if (!u) return
          const p = _.from(
              'getAllResponseHeaders' in u && u.getAllResponseHeaders()
            ),
            S = {
              data:
                !i || i === 'text' || i === 'json'
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: p,
              config: e,
              request: u
            }
          ds(
            function (T) {
              n(T), m()
            },
            function (T) {
              s(T), m()
            },
            S
          ),
            (u = null)
        }
        if (
          ('onloadend' in u
            ? (u.onloadend = O)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(O)
              }),
          (u.onabort = function () {
            u && (s(new h('Request aborted', h.ECONNABORTED, e, u)), (u = null))
          }),
          (u.onerror = function () {
            s(new h('Network Error', h.ERR_NETWORK, e, u)), (u = null)
          }),
          (u.ontimeout = function () {
            let w = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const S = e.transitional || pt
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
              s(
                new h(
                  w,
                  S.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null)
          }),
          x.hasStandardBrowserEnv &&
            (c && a.isFunction(c) && (c = c(e)), c || (c !== !1 && ys(E))))
        ) {
          const p =
            e.xsrfHeaderName && e.xsrfCookieName && ps.read(e.xsrfCookieName)
          p && o.set(e.xsrfHeaderName, p)
        }
        r === void 0 && o.setContentType(null),
          'setRequestHeader' in u &&
            a.forEach(o.toJSON(), function (w, S) {
              u.setRequestHeader(S, w)
            }),
          a.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          i && i !== 'json' && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            u.addEventListener('progress', je(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            u.upload &&
            u.upload.addEventListener('progress', je(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((d = (p) => {
              u &&
                (s(!p || p.type ? new z(null, e, u) : p), u.abort(), (u = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(d),
            e.signal &&
              (e.signal.aborted ? d() : e.signal.addEventListener('abort', d)))
        const f = bs(E)
        if (f && x.protocols.indexOf(f) === -1) {
          s(new h('Unsupported protocol ' + f + ':', h.ERR_BAD_REQUEST, e))
          return
        }
        u.send(r || null)
      })
    },
  me = { http: Jn, xhr: gs }
a.forEach(me, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const Ie = (e) => `- ${e}`,
  Ss = (e) => a.isFunction(e) || e === null || e === !1,
  Et = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e]
      const { length: t } = e
      let n, s
      const r = {}
      for (let o = 0; o < t; o++) {
        n = e[o]
        let i
        if (
          ((s = n),
          !Ss(n) && ((s = me[(i = String(n)).toLowerCase()]), s === void 0))
        )
          throw new h(`Unknown adapter '${i}'`)
        if (s) break
        r[i || '#' + o] = s
      }
      if (!s) {
        const o = Object.entries(r).map(
          ([c, d]) =>
            `adapter ${c} ` +
            (d === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        )
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Ie).join(`
`)
            : ' ' + Ie(o[0])
          : 'as no adapter specified'
        throw new h(
          'There is no suitable adapter to dispatch the request ' + i,
          'ERR_NOT_SUPPORT'
        )
      }
      return s
    },
    adapters: me
  }
function ae(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new z(null, e)
}
function Me(e) {
  return (
    ae(e),
    (e.headers = _.from(e.headers)),
    (e.data = ie.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Et.getAdapter(e.adapter || Se.adapter)(e).then(
      function (s) {
        return (
          ae(e),
          (s.data = ie.call(e, e.transformResponse, s)),
          (s.headers = _.from(s.headers)),
          s
        )
      },
      function (s) {
        return (
          yt(s) ||
            (ae(e),
            s &&
              s.response &&
              ((s.response.data = ie.call(e, e.transformResponse, s.response)),
              (s.response.headers = _.from(s.response.headers)))),
          Promise.reject(s)
        )
      }
    )
  )
}
const He = (e) => (e instanceof _ ? e.toJSON() : e)
function U(e, t) {
  t = t || {}
  const n = {}
  function s(m, l, u) {
    return a.isPlainObject(m) && a.isPlainObject(l)
      ? a.merge.call({ caseless: u }, m, l)
      : a.isPlainObject(l)
        ? a.merge({}, l)
        : a.isArray(l)
          ? l.slice()
          : l
  }
  function r(m, l, u) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(m)) return s(void 0, m, u)
    } else return s(m, l, u)
  }
  function o(m, l) {
    if (!a.isUndefined(l)) return s(void 0, l)
  }
  function i(m, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(m)) return s(void 0, m)
    } else return s(void 0, l)
  }
  function c(m, l, u) {
    if (u in t) return s(m, l)
    if (u in e) return s(void 0, m)
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (m, l) => r(He(m), He(l), !0)
  }
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
      const u = d[l] || r,
        E = u(e[l], t[l], l)
      ;(a.isUndefined(E) && u !== c) || (n[l] = E)
    }),
    n
  )
}
const wt = '1.6.7',
  Oe = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Oe[e] = function (s) {
      return typeof s === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const ze = {}
Oe.transitional = function (t, n, s) {
  function r(o, i) {
    return (
      '[Axios v' +
      wt +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (s ? '. ' + s : '')
    )
  }
  return (o, i, c) => {
    if (t === !1)
      throw new h(
        r(i, ' has been removed' + (n ? ' in ' + n : '')),
        h.ERR_DEPRECATED
      )
    return (
      n &&
        !ze[i] &&
        ((ze[i] = !0),
        console.warn(
          r(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(o, i, c) : !0
    )
  }
}
function Os(e, t, n) {
  if (typeof e != 'object')
    throw new h('options must be an object', h.ERR_BAD_OPTION_VALUE)
  const s = Object.keys(e)
  let r = s.length
  for (; r-- > 0; ) {
    const o = s[r],
      i = t[o]
    if (i) {
      const c = e[o],
        d = c === void 0 || i(c, o, e)
      if (d !== !0)
        throw new h('option ' + o + ' must be ' + d, h.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new h('Unknown option ' + o, h.ERR_BAD_OPTION)
  }
}
const he = { assertOptions: Os, validators: Oe },
  B = he.validators
class X {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new Ue(), response: new Ue() })
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (s) {
      if (s instanceof Error) {
        let r
        Error.captureStackTrace
          ? Error.captureStackTrace((r = {}))
          : (r = new Error())
        const o = r.stack ? r.stack.replace(/^.+\n/, '') : ''
        s.stack
          ? o &&
            !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
            (s.stack +=
              `
` + o)
          : (s.stack = o)
      }
      throw s
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = U(this.defaults, n))
    const { transitional: s, paramsSerializer: r, headers: o } = n
    s !== void 0 &&
      he.assertOptions(
        s,
        {
          silentJSONParsing: B.transitional(B.boolean),
          forcedJSONParsing: B.transitional(B.boolean),
          clarifyTimeoutError: B.transitional(B.boolean)
        },
        !1
      ),
      r != null &&
        (a.isFunction(r)
          ? (n.paramsSerializer = { serialize: r })
          : he.assertOptions(
              r,
              { encode: B.function, serialize: B.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let i = o && a.merge(o.common, o[n.method])
    o &&
      a.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (f) => {
          delete o[f]
        }
      ),
      (n.headers = _.concat(i, o))
    const c = []
    let d = !0
    this.interceptors.request.forEach(function (p) {
      ;(typeof p.runWhen == 'function' && p.runWhen(n) === !1) ||
        ((d = d && p.synchronous), c.unshift(p.fulfilled, p.rejected))
    })
    const m = []
    this.interceptors.response.forEach(function (p) {
      m.push(p.fulfilled, p.rejected)
    })
    let l,
      u = 0,
      E
    if (!d) {
      const f = [Me.bind(this), void 0]
      for (
        f.unshift.apply(f, c),
          f.push.apply(f, m),
          E = f.length,
          l = Promise.resolve(n);
        u < E;

      )
        l = l.then(f[u++], f[u++])
      return l
    }
    E = c.length
    let O = n
    for (u = 0; u < E; ) {
      const f = c[u++],
        p = c[u++]
      try {
        O = f(O)
      } catch (w) {
        p.call(this, w)
        break
      }
    }
    try {
      l = Me.call(this, O)
    } catch (f) {
      return Promise.reject(f)
    }
    for (u = 0, E = m.length; u < E; ) l = l.then(m[u++], m[u++])
    return l
  }
  getUri(t) {
    t = U(this.defaults, t)
    const n = bt(t.baseURL, t.url)
    return dt(n, t.params, t.paramsSerializer)
  }
}
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
  X.prototype[t] = function (n, s) {
    return this.request(U(s || {}, { method: t, url: n, data: (s || {}).data }))
  }
})
a.forEach(['post', 'put', 'patch'], function (t) {
  function n(s) {
    return function (o, i, c) {
      return this.request(
        U(c || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i
        })
      )
    }
  }
  ;(X.prototype[t] = n()), (X.prototype[t + 'Form'] = n(!0))
})
const G = X
class Re {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (o) {
      n = o
    })
    const s = this
    this.promise.then((r) => {
      if (!s._listeners) return
      let o = s._listeners.length
      for (; o-- > 0; ) s._listeners[o](r)
      s._listeners = null
    }),
      (this.promise.then = (r) => {
        let o
        const i = new Promise((c) => {
          s.subscribe(c), (o = c)
        }).then(r)
        return (
          (i.cancel = function () {
            s.unsubscribe(o)
          }),
          i
        )
      }),
      t(function (o, i, c) {
        s.reason || ((s.reason = new z(o, i, c)), n(s.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new Re(function (r) {
        t = r
      }),
      cancel: t
    }
  }
}
const Rs = Re
function Ts(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function As(e) {
  return a.isObject(e) && e.isAxiosError === !0
}
const ye = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
}
Object.entries(ye).forEach(([e, t]) => {
  ye[t] = e
})
const Cs = ye
function gt(e) {
  const t = new G(e),
    n = et(G.prototype.request, t)
  return (
    a.extend(n, G.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return gt(U(e, r))
    }),
    n
  )
}
const g = gt(Se)
g.Axios = G
g.CanceledError = z
g.CancelToken = Rs
g.isCancel = yt
g.VERSION = wt
g.toFormData = te
g.AxiosError = h
g.Cancel = g.CanceledError
g.all = function (t) {
  return Promise.all(t)
}
g.spread = Ts
g.isAxiosError = As
g.mergeConfig = U
g.AxiosHeaders = _
g.formToJSON = (e) => ht(a.isHTMLForm(e) ? new FormData(e) : e)
g.getAdapter = Et.getAdapter
g.HttpStatusCode = Cs
g.default = g
const Ns = 'http://127.0.0.1:4523/m1/4174163-0-default',
  St = g.create({ baseURL: Ns, timeout: 1e4 })
St.interceptors.request.use(
  (e) => {
    const t = zt()
    return t.token && (e.headers.Authorization = t.token), e
  },
  (e) => Promise.reject(e)
)
St.interceptors.response.use(
  (e) =>
    e.data.code === 200
      ? e
      : (Be.error(e.data.message || '服務異常'), Promise.reject(e.data)),
  (e) => {
    var t
    return (
      ((t = e.response) == null ? void 0 : t.status) === 401 &&
        qt.push('/login'),
      Be.error(e.response.data.message || '服務異常'),
      Promise.reject(e)
    )
  }
)
export { Be as E, St as i }
