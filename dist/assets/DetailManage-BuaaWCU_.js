import { u as E, _ as N } from './AppGotop-DW09aqQB.js'
import {
  j as k,
  o as v,
  c as p,
  n as $,
  e as z,
  I as F,
  k as M,
  l as b,
  aW as T,
  m as G,
  q as s,
  h as e,
  s as l,
  t as o,
  F as x,
  z as j,
  aY as P,
  p as q,
  aV as A,
  B as L,
  f as i,
  C as R,
  D as U,
  aZ as W
} from './index-Dn-ej6oH.js'
import { d as Y, _ as Z } from './detail-CoWuO3_q.js'
import { E as I } from './request-N0ug3Hqv.js'
const H = F(
    '<div class="goods-tabs" data-v-0325d792><ul data-v-0325d792><li data-v-0325d792><a href="#" data-v-0325d792><div data-v-0325d792>商品介紹</div></a></li><li data-v-0325d792><a href="#" data-v-0325d792><div data-v-0325d792>商品詳情</div></a></li><li data-v-0325d792><a href="#" data-v-0325d792><div data-v-0325d792>運送方式</div></a></li><li class="btn" data-v-0325d792><a href="#" data-v-0325d792><div data-v-0325d792>加入購物車</div></a></li></ul></div>',
    1
  ),
  J = [H],
  K = {
    __name: 'DetailFixed',
    setup(n) {
      const { y: _ } = E(window)
      return (t, m) => (
        v(),
        p(
          'div',
          { class: $(['det-header-sticky', { show: z(_) > 800 }]) },
          J,
          2
        )
      )
    }
  },
  O = k(K, [['__scopeId', 'data-v-0325d792']]),
  a = (n) => (R('data-v-ddddfe83'), (n = n()), U(), n),
  Q = { class: 'xtx-goods-page' },
  X = { class: 'bread' },
  ee = { class: 'bread-container' },
  te = { class: 'container' },
  ae = { class: 'info-container' },
  se = { class: 'goods-info' },
  oe = { class: 'media' },
  de = { class: 'spec' },
  le = { class: 'g-name' },
  ne = { class: 'g-desc' },
  ie = { class: 'g-slogan' },
  ce = { class: 'g-price' },
  _e = a(() => e('span', null, '建議售價', -1)),
  ue = { class: 'nt-price' },
  re = { class: 'goods-footer' },
  ve = { class: 'goods-article' },
  pe = a(() =>
    e(
      'div',
      { class: 'goods-tabs' },
      [
        e('ul', null, [
          e('li', null, [e('a', { href: '#' }, [e('div', null, '商品介紹')])]),
          e('li', null, [e('a', { href: '#' }, [e('div', null, '商品詳情')])]),
          e('li', null, [e('a', { href: '#' }, [e('div', null, '運送方式')])])
        ])
      ],
      -1
    )
  ),
  me = { class: 'goods-detail' },
  he = a(() => e('h5', null, '| 商品介紹', -1)),
  ge = { style: { 'text-align': 'center' } },
  fe = a(() => e('br', null, null, -1)),
  be = a(() =>
    e('h3', { style: { 'text-align': 'center' } }, '隨身攜帶寶可夢', -1)
  ),
  xe = a(() => e('br', null, null, -1)),
  Ie = a(() =>
    e(
      'h3',
      { style: { 'text-align': 'center' } },
      '大師級收藏家一定要擁有!',
      -1
    )
  ),
  ke = a(() => e('br', null, null, -1)),
  ye = a(() => e('hr', null, null, -1)),
  Ce = a(() => e('h5', null, '| 運送方式', -1)),
  Ve = a(() => e('img', { src: Z }, null, -1)),
  we = {
    __name: 'DetailManage',
    setup(n) {
      const _ = M(),
        t = b({}),
        m = T(),
        y = async () => {
          const c = await Y(m.params.id)
          t.value = c.data.result
        }
      G(() => {
        y()
      })
      const u = b(1),
        C = (c) => {
          console.log(c)
        },
        V = () => {
          t.value
            ? (_.addCart({
                id: t.value.id,
                name: t.value.name,
                picture: t.value.mainPictures[0],
                price: t.value.price,
                count: u.value,
                skuId: t.value.skuData.skuId,
                attresText: t.value.skuData.attresText,
                selected: !0
              }),
              I.success('加入成功'))
            : I.warning('請選擇規格')
        }
      return (c, h) => {
        const r = W,
          w = P,
          D = q('ftpImageView'),
          S = A,
          g = L,
          B = N
        return (
          v(),
          p(
            x,
            null,
            [
              s(O),
              e('div', Q, [
                e('div', X, [
                  e('div', ee, [
                    s(
                      w,
                      { separator: '>' },
                      {
                        default: l(() => {
                          var d
                          return [
                            s(
                              r,
                              { to: { path: '/' } },
                              { default: l(() => [i('首頁')]), _: 1 }
                            ),
                            s(
                              r,
                              {
                                to: {
                                  path: `/category/manage/${(d = t.value.categories) == null ? void 0 : d[0].id}`
                                }
                              },
                              {
                                default: l(() => {
                                  var f
                                  return [
                                    i(
                                      o(
                                        (f = t.value.categories) == null
                                          ? void 0
                                          : f[0].name
                                      ),
                                      1
                                    )
                                  ]
                                }),
                                _: 1
                              },
                              8,
                              ['to']
                            ),
                            s(
                              r,
                              { to: { path: `/detail/manage/${t.value.id}` } },
                              {
                                default: l(() => [i(o(t.value.name), 1)]),
                                _: 1
                              },
                              8,
                              ['to']
                            )
                          ]
                        }),
                        _: 1
                      }
                    )
                  ])
                ]),
                e('div', te, [
                  e('div', ae, [
                    e('div', se, [
                      e('div', oe, [
                        s(D, { 'image-list': t.value.mainPictures }, null, 8, [
                          'image-list'
                        ])
                      ]),
                      e('div', de, [
                        e('h1', le, o(t.value.name), 1),
                        e('div', ne, [
                          (v(),
                          p(
                            x,
                            null,
                            j(3, (d) =>
                              e('p', { key: d.id }, '★ ' + o(t.value.desc), 1)
                            ),
                            64
                          ))
                        ]),
                        e(
                          'div',
                          ie,
                          ' | ' + o(t.value.vendor) + ' | ' + o(t.value.slogan),
                          1
                        ),
                        e('div', ce, [
                          _e,
                          e('div', ue, 'NT$' + o(t.value.price), 1)
                        ]),
                        s(
                          S,
                          {
                            modelValue: u.value,
                            'onUpdate:modelValue':
                              h[0] || (h[0] = (d) => (u.value = d)),
                            min: 1,
                            max: 10,
                            onChange: C
                          },
                          null,
                          8,
                          ['modelValue']
                        ),
                        e('div', null, [
                          s(
                            g,
                            { size: 'large', class: 'joinbtn', onClick: V },
                            { default: l(() => [i(' 加入購物車 ')]), _: 1 }
                          ),
                          s(
                            g,
                            { size: 'large', class: 'buybtn' },
                            { default: l(() => [i(' 立即購買 ')]), _: 1 }
                          )
                        ])
                      ])
                    ]),
                    e('div', re, [
                      e('div', ve, [
                        pe,
                        e('div', me, [
                          he,
                          e('h1', ge, o(t.value.name), 1),
                          fe,
                          be,
                          xe,
                          Ie,
                          ke,
                          ye,
                          Ce,
                          Ve
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              s(B)
            ],
            64
          )
        )
      }
    }
  },
  Ne = k(we, [['__scopeId', 'data-v-ddddfe83']])
export { Ne as default }
