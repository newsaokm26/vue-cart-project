import { aF as a, W as l, Q as p } from './index-7M82JerP.js'
const u = (n) => {
    const t = a(n) ? n : [n],
      r = []
    return (
      t.forEach((e) => {
        var d
        a(e)
          ? r.push(...u(e))
          : l(e) && a(e.children)
            ? r.push(...u(e.children))
            : (r.push(e),
              l(e) &&
                (d = e.component) != null &&
                d.subTree &&
                r.push(...u(e.component.subTree)))
      }),
      r
    )
  },
  f = (n, t, r) =>
    u(n.subTree)
      .filter((s) => {
        var o
        return (
          l(s) &&
          ((o = s.type) == null ? void 0 : o.name) === t &&
          !!s.component
        )
      })
      .map((s) => s.component.uid)
      .map((s) => r[s])
      .filter((s) => !!s),
  v = (n, t) => {
    const r = {},
      e = p([])
    return {
      children: e,
      addChild: (o) => {
        ;(r[o.uid] = o), (e.value = f(n, t, r))
      },
      removeChild: (o) => {
        delete r[o], (e.value = e.value.filter((i) => i.uid !== o))
      }
    }
  }
export { u as f, v as u }
