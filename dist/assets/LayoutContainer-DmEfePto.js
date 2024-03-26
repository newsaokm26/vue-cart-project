import{b as K,d as j,u as Z,_ as G,w as M,s as z,c as V,E as I,a as Q,e as x}from"./base-L6LYQ8LQ.js";import{i as P}from"./request-CPhBxuRP.js";import{E as L}from"./el-button-DW25SWoe.js";import{d as O,o as c,c as l,n as g,u as d,r as C,a as u,t as h,b as U,e,f as J,_ as y,g as T,h as m,i as R,j as k,k as t,w as n,l as X,v as D,F as A,m as H,p as F,q as w,s as Y}from"./index-FoNZAI5h.js";import"./aria-BUADUvnR.js";const q=K({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:j([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),W=O({name:"ElCard"}),$=O({...W,props:q,setup(o){const a=Z("card");return(s,i)=>(c(),l("div",{class:g([d(a).b(),d(a).is(`${s.shadow}-shadow`)])},[s.$slots.header||s.header?(c(),l("div",{key:0,class:g(d(a).e("header"))},[C(s.$slots,"header",{},()=>[u(h(s.header),1)])],2)):U("v-if",!0),e("div",{class:g([d(a).e("body"),s.bodyClass]),style:J(s.bodyStyle)},[C(s.$slots,"default")],6),s.$slots.footer||s.footer?(c(),l("div",{key:1,class:g(d(a).e("footer"))},[C(s.$slots,"footer",{},()=>[u(h(s.footer),1)])],2)):U("v-if",!0)],2))}});var ee=G($,[["__file","card.vue"]]);const B=M(ee),te=o=>(F("data-v-3632078c"),o=o(),w(),o),se={class:"cart"},ae={class:"list"},oe=["src"],ne={class:"center"},ce={class:"name ellipsis-2"},le={class:"count"},ie={class:"foot"},re=te(()=>e("div",{class:"else-p"},[e("p",null,"目前的購物車是空的 !")],-1)),de={class:"else-foot"},ue={__name:"HeaderCart",setup(o){const a=T(),s=m(),i=m(!1),p=()=>{i.value=!i.value};return R(()=>{document.addEventListener("mouseup",r=>{s.value.contains(r.target)||(i.value=!1)})}),(r,_)=>{const f=I,E=k("RouterLink"),S=L,N=B;return c(),l("div",se,[e("div",{class:"curr",ref_key:"currRef",ref:s},[t(f,{style:{"font-size":"24px"},onClick:p},{default:n(()=>[t(d(z))]),_:1}),e("em",null,h(d(a).allCount),1)],512),X(t(N,{class:"layer"},{default:n(()=>[d(a).cartList.length>0?(c(),l(A,{key:0},[e("div",ae,[(c(!0),l(A,null,H(d(a).cartList,v=>(c(),l("div",{class:"item",key:v},[t(E,{to:""},{default:n(()=>[e("img",{src:v.picture,alt:""},null,8,oe),e("div",ne,[e("p",ce,h(v.name),1),e("p",le,"數量："+h(v.count),1)])]),_:2},1024),t(f,{onClick:Te=>d(a).delCart(v.skuId)},{default:n(()=>[t(d(V))]),_:2},1032,["onClick"])]))),128))]),e("div",ie,[t(S,{size:"large",type:"primary",onClick:_[0]||(_[0]=v=>r.$router.push("/cartList/manage"))},{default:n(()=>[u("去購物車結算")]),_:1})])],64)):(c(),l(A,{key:1},[re,e("div",de,[t(S,{size:"large",type:"primary",onClick:_[1]||(_[1]=v=>r.$router.push("/cartList/manage"))},{default:n(()=>[u("前往收藏清單")]),_:1})])],64))]),_:1},512),[[D,i.value]])])}}},_e=y(ue,[["__scopeId","data-v-3632078c"]]),b=o=>(F("data-v-e36154f5"),o=o(),w(),o),pe={class:"user"};const ve={key:1,class:"laybtn"},he={class:"laylist"},fe=b(()=>e("li",null,[e("a",{href:""},"我的帳戶")],-1)),me=b(()=>e("li",null,[e("a",{href:""},"訂單查詢")],-1)),ye=b(()=>e("li",null,[e("a",{href:""},"專屬優惠券")],-1)),ge=b(()=>e("li",null,[e("a",{href:""},"收藏清單")],-1));const Ae={__name:"HeaderUser",setup(o){const a=m(),s=m(!1),i=()=>{s.value=!s.value};return R(()=>{document.addEventListener("mouseup",p=>{a.value.contains(p.target)||(s.value=!1)})}),(p,r)=>{const _=I,f=L,E=B;return c(),l("div",pe,[e("div",{ref_key:"iconRef",ref:a},[t(_,{style:{"font-size":"24px"},onClick:i},{default:n(()=>[t(d(Q))]),_:1})],512),X(t(E,{class:"layer"},{default:n(()=>[(c(),l("div",ve,[e("div",null,[t(f,{class:"loginbtn",onClick:r[0]||(r[0]=S=>p.$router.push("/login"))},{default:n(()=>[u("會員登入")]),_:1})]),e("div",null,[t(f,{class:"regbtn"},{default:n(()=>[u("註冊新會員")]),_:1})])])),e("div",he,[e("ul",null,[fe,me,ye,ge,U("",!0)])])]),_:1},512),[[D,s.value]])])}}},ke=y(Ae,[["__scopeId","data-v-e36154f5"]]),be=o=>(F("data-v-42cce2f6"),o=o(),w(),o),Ee={class:"app-topnav"},Se={class:"container"},Ce=be(()=>e("nav",{class:"logotitle"},[e("a",{href:""},"FUN")],-1)),Ue={class:"logo"},Ie={class:"navlist"},Re={__name:"LayoutNav",setup(o){return(a,s)=>{const i=k("RouterLink"),p=I;return c(),l("nav",Ee,[e("div",Se,[Ce,e("nav",Ue,[e("h1",null,[t(i,{to:"/"},{default:n(()=>[u("FUN")]),_:1})])]),e("nav",Ie,[e("ul",null,[e("li",null,[t(ke)]),e("li",null,[t(_e)]),e("li",null,[t(p,{style:{"font-size":"24px"}},{default:n(()=>[t(d(x))]),_:1})])])])])])}}},Fe=y(Re,[["__scopeId","data-v-42cce2f6"]]),we=()=>P.get("/layout/category/head"),Le="data:image/png;base64,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",Oe={class:"app-header"},Xe={class:"container"},De={class:"app-header-nav"},He={class:"home"},Be={class:"home"},Ne={class:"home"},Ke={class:"home"},je={class:"addline"},Ze=["src"],Ge={__name:"LayoutHeader",setup(o){const a=m([]),s=async()=>{const i=await we();a.value=i.data.data};return R(()=>s()),(i,p)=>{const r=k("RouterLink");return c(),l("header",Oe,[e("div",Xe,[e("ul",De,[e("li",He,[t(r,{to:"/"},{default:n(()=>[u("首頁")]),_:1})]),e("li",Be,[t(r,{to:"/"},{default:n(()=>[u("活動專區")]),_:1})]),e("li",Ne,[t(r,{to:"/"},{default:n(()=>[u("NEW")]),_:1})]),e("li",Ke,[t(r,{to:"/"},{default:n(()=>[u("商品分類")]),_:1})]),(c(!0),l(A,null,H(a.value,_=>(c(),l("li",{key:_.id},[t(r,{"active-class":"active",to:`/category/manage/${_.id}`},{default:n(()=>[u(h(_.name),1)]),_:2},1032,["to"])]))),128)),e("li",je,[t(r,{to:"/"},{default:n(()=>[e("img",{src:d(Le),alt:"",height:"36"},null,8,Ze)]),_:1})])])])])}}},Me=y(Ge,[["__scopeId","data-v-c404c555"]]),ze={},Ve={class:"app_footer"},Qe=Y('<div class="extra" data-v-7914e51d><div class="container" data-v-7914e51d><div class="copyright" data-v-7914e51d><p data-v-7914e51d><a href="javascript:;" data-v-7914e51d>關於我們</a><a href="javascript:;" data-v-7914e51d>幫助中心</a><a href="javascript:;" data-v-7914e51d>售後服務</a><a href="javascript:;" data-v-7914e51d>配送與驗收</a><a href="javascript:;" data-v-7914e51d>商務合作</a><a href="javascript:;" data-v-7914e51d>搜尋推薦</a><a href="javascript:;" data-v-7914e51d>友情連結</a></p><p data-v-7914e51d>CopyRight © 雪拚購</p></div></div></div>',1),xe=[Qe];function Pe(o,a){return c(),l("footer",Ve,xe)}const Je=y(ze,[["render",Pe],["__scopeId","data-v-7914e51d"]]),tt={__name:"LayoutContainer",setup(o){return(a,s)=>{const i=k("router-view");return c(),l("div",null,[t(Fe),t(Me),t(i),t(Je)])}}};export{tt as default};
