import { a_ as S, W as A, Q as i } from './index-Dn-ej6oH.js'
var N = ((e) => (
  (e[(e.TEXT = 1)] = 'TEXT'),
  (e[(e.CLASS = 2)] = 'CLASS'),
  (e[(e.STYLE = 4)] = 'STYLE'),
  (e[(e.PROPS = 8)] = 'PROPS'),
  (e[(e.FULL_PROPS = 16)] = 'FULL_PROPS'),
  (e[(e.HYDRATE_EVENTS = 32)] = 'HYDRATE_EVENTS'),
  (e[(e.STABLE_FRAGMENT = 64)] = 'STABLE_FRAGMENT'),
  (e[(e.KEYED_FRAGMENT = 128)] = 'KEYED_FRAGMENT'),
  (e[(e.UNKEYED_FRAGMENT = 256)] = 'UNKEYED_FRAGMENT'),
  (e[(e.NEED_PATCH = 512)] = 'NEED_PATCH'),
  (e[(e.DYNAMIC_SLOTS = 1024)] = 'DYNAMIC_SLOTS'),
  (e[(e.HOISTED = -1)] = 'HOISTED'),
  (e[(e.BAIL = -2)] = 'BAIL'),
  e
))(N || {})
const d = (e) => {
    const T = S(e) ? e : [e],
      n = []
    return (
      T.forEach((r) => {
        var u
        S(r)
          ? n.push(...d(r))
          : A(r) && S(r.children)
            ? n.push(...d(r.children))
            : (n.push(r),
              A(r) &&
                (u = r.component) != null &&
                u.subTree &&
                n.push(...d(r.component.subTree)))
      }),
      n
    )
  },
  C = (e, T, n) =>
    d(e.subTree)
      .filter((o) => {
        var E
        return (
          A(o) &&
          ((E = o.type) == null ? void 0 : E.name) === T &&
          !!o.component
        )
      })
      .map((o) => o.component.uid)
      .map((o) => n[o])
      .filter((o) => !!o),
  p = (e, T) => {
    const n = {},
      r = i([])
    return {
      children: r,
      addChild: (E) => {
        ;(n[E.uid] = E), (r.value = C(e, T, n))
      },
      removeChild: (E) => {
        delete n[E], (r.value = r.value.filter((_) => _.uid !== E))
      }
    }
  }
export { N as P, d as f, p as u }
