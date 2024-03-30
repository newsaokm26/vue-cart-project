import { u as E, _ as N } from './AppGotop-peS4Ufeg.js'
import {
  j as I,
  o as v,
  c as p,
  n as $,
  e as z,
  I as F,
  k as G,
  l as b,
  aB as M,
  m as T,
  q as s,
  h as e,
  s as l,
  t as o,
  F as x,
  z as j,
  aD as P,
  p as q,
  aG as A,
  B as L,
  f as i,
  C as R,
  D as U,
  aE as H
} from './index-7M82JerP.js'
import { i as J, E as k } from './request-Di8FVVuO.js'
const K = '/vue-cart-project/assets/buyknow-BSwVdcvk.png',
  O = F(
    '<div class="goods-tabs" data-v-0325d792><ul data-v-0325d792><li data-v-0325d792><a href="#" data-v-0325d792><div data-v-0325d792>商品介紹</div></a></li><li data-v-0325d792><a href="#" data-v-0325d792><div data-v-0325d792>商品詳情</div></a></li><li data-v-0325d792><a href="#" data-v-0325d792><div data-v-0325d792>運送方式</div></a></li><li class="btn" data-v-0325d792><a href="#" data-v-0325d792><div data-v-0325d792>加入購物車</div></a></li></ul></div>',
    1
  ),
  Q = [O],
  W = {
    __name: 'DetailFixed',
    setup(n) {
      const { y: _ } = E(window)
      return (t, h) => (
        v(),
        p(
          'div',
          { class: $(['det-header-sticky', { show: z(_) > 800 }]) },
          Q,
          2
        )
      )
    }
  },
  X = I(W, [['__scopeId', 'data-v-0325d792']]),
  Y = (n) => J({ url: '/goods1', params: { id: n } }),
  a = (n) => (R('data-v-ddddfe83'), (n = n()), U(), n),
  Z = { class: 'xtx-goods-page' },
  ee = { class: 'bread' },
  te = { class: 'bread-container' },
  ae = { class: 'container' },
  se = { class: 'info-container' },
  oe = { class: 'goods-info' },
  ne = { class: 'media' },
  de = { class: 'spec' },
  le = { class: 'g-name' },
  ie = { class: 'g-desc' },
  ce = { class: 'g-slogan' },
  _e = { class: 'g-price' },
  ue = a(() => e('span', null, '建議售價', -1)),
  re = { class: 'nt-price' },
  ve = { class: 'goods-footer' },
  pe = { class: 'goods-article' },
  he = a(() =>
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
  ge = a(() => e('h5', null, '| 商品介紹', -1)),
  fe = { style: { 'text-align': 'center' } },
  be = a(() => e('br', null, null, -1)),
  xe = a(() =>
    e('h3', { style: { 'text-align': 'center' } }, '隨身攜帶寶可夢', -1)
  ),
  ke = a(() => e('br', null, null, -1)),
  Ie = a(() =>
    e(
      'h3',
      { style: { 'text-align': 'center' } },
      '大師級收藏家一定要擁有!',
      -1
    )
  ),
  we = a(() => e('br', null, null, -1)),
  ye = a(() => e('hr', null, null, -1)),
  Ce = a(() => e('h5', null, '| 運送方式', -1)),
  Ve = a(() => e('img', { src: K }, null, -1)),
  Be = {
    __name: 'DetailManage',
    setup(n) {
      const _ = G(),
        t = b({}),
        h = M(),
        w = async () => {
          const c = await Y(h.params.id)
          t.value = c.data.result
        }
      T(() => {
        w()
      })
      const u = b(1),
        y = (c) => {
          console.log(c)
        },
        C = () => {
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
              k.success('加入成功'))
            : k.warning('請選擇規格')
        }
      return (c, m) => {
        const r = H,
          V = P,
          B = q('ftpImageView'),
          D = A,
          g = L,
          S = N
        return (
          v(),
          p(
            x,
            null,
            [
              s(X),
              e('div', Z, [
                e('div', ee, [
                  e('div', te, [
                    s(
                      V,
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
                e('div', ae, [
                  e('div', se, [
                    e('div', oe, [
                      e('div', ne, [
                        s(B, { 'image-list': t.value.mainPictures }, null, 8, [
                          'image-list'
                        ])
                      ]),
                      e('div', de, [
                        e('h1', le, o(t.value.name), 1),
                        e('div', ie, [
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
                          ce,
                          ' | ' + o(t.value.vendor) + ' | ' + o(t.value.slogan),
                          1
                        ),
                        e('div', _e, [
                          ue,
                          e('div', re, 'NT$' + o(t.value.price), 1)
                        ]),
                        s(
                          D,
                          {
                            modelValue: u.value,
                            'onUpdate:modelValue':
                              m[0] || (m[0] = (d) => (u.value = d)),
                            min: 1,
                            max: 10,
                            onChange: y
                          },
                          null,
                          8,
                          ['modelValue']
                        ),
                        e('div', null, [
                          s(
                            g,
                            { size: 'large', class: 'joinbtn', onClick: C },
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
                    e('div', ve, [
                      e('div', pe, [
                        he,
                        e('div', me, [
                          ge,
                          e('h1', fe, o(t.value.name), 1),
                          be,
                          xe,
                          ke,
                          Ie,
                          we,
                          ye,
                          Ce,
                          Ve
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              s(S)
            ],
            64
          )
        )
      }
    }
  },
  Ne = I(Be, [['__scopeId', 'data-v-ddddfe83']])
export { Ne as default }
