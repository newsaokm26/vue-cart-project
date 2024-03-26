import{_ as Ke}from"./AppGotop-CRHyIrWa.js";import{i as Xe,f as ae,r as qe,b as Te,g as Je,h as Ye,u as Se,j as Qe,E as ye,k as Ze,l as et,_ as Ee,m as tt,w as nt,n as at}from"./base-Xg502Yuj.js";import{x as ot,h as E,y as V,u as t,z as J,A as st,i as re,B as rt,C as it,D as Ne,E as lt,G as ut,d as ie,o as y,c as L,H as ee,w as P,l as Q,e as _,n as F,I as Y,k as H,v as Z,T as Ie,b as U,r as oe,f as Me,F as te,m as le,t as se,J as ct,K as ft,L as dt,_ as ne,p as Be,q as Ae,j as _e,a as Ce}from"./index-BO5P6o_K.js";import{u as vt,f as mt}from"./index-DpLugedB.js";import{E as _t}from"./el-button-uxhisYd6.js";import{i as He}from"./request-BC1gBEk7.js";import"./aria-BUADUvnR.js";var ht=/\s/;function pt(e){for(var r=e.length;r--&&ht.test(e.charAt(r)););return r}var gt=/^\s+/;function yt(e){return e&&e.slice(0,pt(e)+1).replace(gt,"")}var $e=NaN,It=/^[-+]0x[0-9a-f]+$/i,Ct=/^0b[01]+$/i,$t=/^0o[0-7]+$/i,bt=parseInt;function be(e){if(typeof e=="number")return e;if(Xe(e))return $e;if(ae(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=ae(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=yt(e);var n=Ct.test(e);return n||$t.test(e)?bt(e.slice(2),n?2:8):It.test(e)?$e:+e}var me=function(){return qe.Date.now()},kt="Expected a function",wt=Math.max,Tt=Math.min;function St(e,r,n){var a,d,v,h,o,l,b=0,k=!1,w=!1,N=!0;if(typeof e!="function")throw new TypeError(kt);r=be(r)||0,ae(n)&&(k=!!n.leading,w="maxWait"in n,v=w?wt(be(n.maxWait)||0,r):v,N="trailing"in n?!!n.trailing:N);function I(i){var c=a,p=d;return a=d=void 0,b=i,h=e.apply(p,c),h}function $(i){return b=i,o=setTimeout(T,r),k?I(i):h}function W(i){var c=i-l,p=i-b,R=r-c;return w?Tt(R,v-p):R}function O(i){var c=i-l,p=i-b;return l===void 0||c>=r||c<0||w&&p>=v}function T(){var i=me();if(O(i))return M(i);o=setTimeout(T,W(i))}function M(i){return o=void 0,N&&a?I(i):(a=d=void 0,h)}function z(){o!==void 0&&clearTimeout(o),b=0,a=l=d=o=void 0}function u(){return o===void 0?h:M(me())}function f(){var i=me(),c=O(i);if(a=arguments,d=this,l=i,c){if(o===void 0)return $(l);if(w)return clearTimeout(o),o=setTimeout(T,r),I(l)}return o===void 0&&(o=setTimeout(T,r)),h}return f.cancel=z,f.flush=u,f}var Et="Expected a function";function ke(e,r,n){var a=!0,d=!0;if(typeof e!="function")throw new TypeError(Et);return ae(n)&&(a="leading"in n?!!n.leading:a,d="trailing"in n?!!n.trailing:d),St(e,r,{leading:a,maxWait:r,trailing:d})}const Nt=Te({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:{type:Boolean,default:!1}}),Mt={change:(e,r)=>[e,r].every(Je)},Le=Symbol("carouselContextKey"),we=300,Bt=(e,r,n)=>{const{children:a,addChild:d,removeChild:v}=vt(Ne(),"ElCarouselItem"),h=ot(),o=E(-1),l=E(null),b=E(!1),k=E(),w=E(0),N=E(!0),I=E(!0),$=E(!1),W=V(()=>e.arrow!=="never"&&!t(M)),O=V(()=>a.value.some(s=>s.props.label.toString().length>0)),T=V(()=>e.type==="card"),M=V(()=>e.direction==="vertical"),z=V(()=>e.height!=="auto"?{height:e.height}:{height:`${w.value}px`,overflow:"hidden"}),u=ke(s=>{B(s)},we,{trailing:!0}),f=ke(s=>{G(s)},we),i=s=>N.value?o.value<=1?s<=1:s>1:!0;function c(){l.value&&(clearInterval(l.value),l.value=null)}function p(){e.interval<=0||!e.autoplay||l.value||(l.value=setInterval(()=>R(),e.interval))}const R=()=>{I.value||($.value=!0),I.value=!1,o.value<a.value.length-1?o.value=o.value+1:e.loop&&(o.value=0)};function B(s){if(I.value||($.value=!0),I.value=!1,lt(s)){const x=a.value.filter(j=>j.props.name===s);x.length>0&&(s=a.value.indexOf(x[0]))}if(s=Number(s),Number.isNaN(s)||s!==Math.floor(s))return;const g=a.value.length,D=o.value;s<0?o.value=e.loop?g-1:0:s>=g?o.value=e.loop?0:g-1:o.value=s,D===o.value&&m(D),he()}function m(s){a.value.forEach((g,D)=>{g.translateItem(D,o.value,s)})}function K(s,g){var D,x,j,X;const q=t(a),pe=q.length;if(pe===0||!s.states.inStage)return!1;const ze=g+1,Fe=g-1,ge=pe-1,Ge=q[ge].states.active,je=q[0].states.active,xe=(x=(D=q[ze])==null?void 0:D.states)==null?void 0:x.active,Ue=(X=(j=q[Fe])==null?void 0:j.states)==null?void 0:X.active;return g===ge&&je||xe?"left":g===0&&Ge||Ue?"right":!1}function ue(){b.value=!0,e.pauseOnHover&&c()}function ce(){b.value=!1,p()}function fe(){$.value=!1}function S(s){t(M)||a.value.forEach((g,D)=>{s===K(g,D)&&(g.states.hover=!0)})}function C(){t(M)||a.value.forEach(s=>{s.states.hover=!1})}function A(s){s!==o.value&&(I.value||($.value=!0)),o.value=s}function G(s){e.trigger==="hover"&&s!==o.value&&(o.value=s,I.value||($.value=!0))}function de(){B(o.value-1)}function De(){B(o.value+1)}function he(){c(),e.pauseOnHover||p()}function Ve(s){e.height==="auto"&&(w.value=s)}function We(){var s;const g=(s=h.default)==null?void 0:s.call(h);if(!g)return null;const D=mt(g),x="ElCarouselItem",j=D.filter(X=>ut(X)&&X.type.name===x);return(j==null?void 0:j.length)===2&&e.loop&&!T.value?(N.value=!0,j):(N.value=!1,null)}J(()=>o.value,(s,g)=>{m(g),N.value&&(s=s%2,g=g%2),g>-1&&r("change",s,g)}),J(()=>e.autoplay,s=>{s?p():c()}),J(()=>e.loop,()=>{B(o.value)}),J(()=>e.interval,()=>{he()});const ve=st();return re(()=>{J(()=>a.value,()=>{a.value.length>0&&B(e.initialIndex)},{immediate:!0}),ve.value=Ye(k.value,()=>{m()}),p()}),rt(()=>{c(),k.value&&ve.value&&ve.value.stop()}),it(Le,{root:k,isCardType:T,isVertical:M,items:a,loop:e.loop,addItem:d,removeItem:v,setActiveItem:B,setContainerHeight:Ve}),{root:k,activeIndex:o,arrowDisplay:W,hasLabel:O,hover:b,isCardType:T,isTransitioning:$,items:a,isVertical:M,containerStyle:z,isItemsTwoLength:N,handleButtonEnter:S,handleTransitionEnd:fe,handleButtonLeave:C,handleIndicatorClick:A,handleMouseEnter:ue,handleMouseLeave:ce,setActiveItem:B,prev:de,next:De,PlaceholderItem:We,isTwoLengthShow:i,throttledArrowClick:u,throttledIndicatorHover:f}},At=["aria-label"],Ht=["aria-label"],Lt=["onMouseenter","onClick"],Pt=["aria-label"],Rt={key:0},Ot={key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},Dt=_("defs",null,[_("filter",{id:"elCarouselHorizontal"},[_("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),_("filter",{id:"elCarouselVertical"},[_("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])],-1),Vt=[Dt],Wt="ElCarousel",zt=ie({name:Wt}),Ft=ie({...zt,props:Nt,emits:Mt,setup(e,{expose:r,emit:n}){const a=e,{root:d,activeIndex:v,arrowDisplay:h,hasLabel:o,hover:l,isCardType:b,items:k,isVertical:w,containerStyle:N,handleButtonEnter:I,handleButtonLeave:$,isTransitioning:W,handleIndicatorClick:O,handleMouseEnter:T,handleMouseLeave:M,handleTransitionEnd:z,setActiveItem:u,prev:f,next:i,PlaceholderItem:c,isTwoLengthShow:p,throttledArrowClick:R,throttledIndicatorHover:B}=Bt(a,n),m=Se("carousel"),{t:K}=Qe(),ue=V(()=>{const S=[m.b(),m.m(a.direction)];return t(b)&&S.push(m.m("card")),S}),ce=V(()=>{const S=[m.e("container")];return a.motionBlur&&t(W)&&S.push(t(w)?`${m.namespace.value}-transitioning-vertical`:`${m.namespace.value}-transitioning`),S}),fe=V(()=>{const S=[m.e("indicators"),m.em("indicators",a.direction)];return t(o)&&S.push(m.em("indicators","labels")),a.indicatorPosition==="outside"&&S.push(m.em("indicators","outside")),t(w)&&S.push(m.em("indicators","right")),S});return r({setActiveItem:u,prev:f,next:i}),(S,C)=>(y(),L("div",{ref_key:"root",ref:d,class:F(t(ue)),onMouseenter:C[7]||(C[7]=Y((...A)=>t(T)&&t(T)(...A),["stop"])),onMouseleave:C[8]||(C[8]=Y((...A)=>t(M)&&t(M)(...A),["stop"]))},[t(h)?(y(),ee(Ie,{key:0,name:"carousel-arrow-left",persisted:""},{default:P(()=>[Q(_("button",{type:"button",class:F([t(m).e("arrow"),t(m).em("arrow","left")]),"aria-label":t(K)("el.carousel.leftArrow"),onMouseenter:C[0]||(C[0]=A=>t(I)("left")),onMouseleave:C[1]||(C[1]=(...A)=>t($)&&t($)(...A)),onClick:C[2]||(C[2]=Y(A=>t(R)(t(v)-1),["stop"]))},[H(t(ye),null,{default:P(()=>[H(t(Ze))]),_:1})],42,At),[[Z,(S.arrow==="always"||t(l))&&(a.loop||t(v)>0)]])]),_:1})):U("v-if",!0),t(h)?(y(),ee(Ie,{key:1,name:"carousel-arrow-right",persisted:""},{default:P(()=>[Q(_("button",{type:"button",class:F([t(m).e("arrow"),t(m).em("arrow","right")]),"aria-label":t(K)("el.carousel.rightArrow"),onMouseenter:C[3]||(C[3]=A=>t(I)("right")),onMouseleave:C[4]||(C[4]=(...A)=>t($)&&t($)(...A)),onClick:C[5]||(C[5]=Y(A=>t(R)(t(v)+1),["stop"]))},[H(t(ye),null,{default:P(()=>[H(t(et))]),_:1})],42,Ht),[[Z,(S.arrow==="always"||t(l))&&(a.loop||t(v)<t(k).length-1)]])]),_:1})):U("v-if",!0),_("div",{class:F(t(ce)),style:Me(t(N)),onTransitionend:C[6]||(C[6]=(...A)=>t(z)&&t(z)(...A))},[H(t(c)),oe(S.$slots,"default")],38),S.indicatorPosition!=="none"?(y(),L("ul",{key:2,class:F(t(fe))},[(y(!0),L(te,null,le(t(k),(A,G)=>Q((y(),L("li",{key:G,class:F([t(m).e("indicator"),t(m).em("indicator",S.direction),t(m).is("active",G===t(v))]),onMouseenter:de=>t(B)(G),onClick:Y(de=>t(O)(G),["stop"])},[_("button",{class:F(t(m).e("button")),"aria-label":t(K)("el.carousel.indicator",{index:G+1})},[t(o)?(y(),L("span",Rt,se(A.props.label),1)):U("v-if",!0)],10,Pt)],42,Lt)),[[Z,t(p)(G)]])),128))],2)):U("v-if",!0),a.motionBlur?(y(),L("svg",Ot,Vt)):U("v-if",!0)],34))}});var Gt=Ee(Ft,[["__file","carousel.vue"]]);const jt=Te({name:{type:String,default:""},label:{type:[String,Number],default:""}}),xt=(e,r)=>{const n=ct(Le),a=Ne(),d=.83,v=E(),h=E(!1),o=E(0),l=E(1),b=E(!1),k=E(!1),w=E(!1),N=E(!1),{isCardType:I,isVertical:$}=n;function W(u,f,i){const c=i-1,p=f-1,R=f+1,B=i/2;return f===0&&u===c?-1:f===c&&u===0?i:u<p&&f-u>=B?i+1:u>R&&u-f>=B?-2:u}function O(u,f){var i,c;const p=t($)?((i=n.root.value)==null?void 0:i.offsetHeight)||0:((c=n.root.value)==null?void 0:c.offsetWidth)||0;return w.value?p*((2-d)*(u-f)+1)/4:u<f?-(1+d)*p/4:(3+d)*p/4}function T(u,f,i){const c=n.root.value;return c?((i?c.offsetHeight:c.offsetWidth)||0)*(u-f):0}const M=(u,f,i)=>{var c;const p=t(I),R=(c=n.items.value.length)!=null?c:Number.NaN,B=u===f;!p&&!tt(i)&&(N.value=B||u===i),!B&&R>2&&n.loop&&(u=W(u,f,R));const m=t($);b.value=B,p?(w.value=Math.round(Math.abs(u-f))<=1,o.value=O(u,f),l.value=t(b)?1:d):o.value=T(u,f,m),k.value=!0,B&&v.value&&n.setContainerHeight(v.value.offsetHeight)};function z(){if(n&&t(I)){const u=n.items.value.findIndex(({uid:f})=>f===a.uid);n.setActiveItem(u)}}return re(()=>{n.addItem({props:e,states:ft({hover:h,translate:o,scale:l,active:b,ready:k,inStage:w,animating:N}),uid:a.uid,translateItem:M})}),dt(()=>{n.removeItem(a.uid)}),{carouselItemRef:v,active:b,animating:N,hover:h,inStage:w,isVertical:$,translate:o,isCardType:I,scale:l,ready:k,handleItemClick:z}},Ut=ie({name:"ElCarouselItem"}),Kt=ie({...Ut,props:jt,setup(e){const r=e,n=Se("carousel"),{carouselItemRef:a,active:d,animating:v,hover:h,inStage:o,isVertical:l,translate:b,isCardType:k,scale:w,ready:N,handleItemClick:I}=xt(r),$=V(()=>[n.e("item"),n.is("active",d.value),n.is("in-stage",o.value),n.is("hover",h.value),n.is("animating",v.value),{[n.em("item","card")]:k.value,[n.em("item","card-vertical")]:k.value&&l.value}]),W=V(()=>{const T=`${`translate${t(l)?"Y":"X"}`}(${t(b)}px)`,M=`scale(${t(w)})`;return{transform:[T,M].join(" ")}});return(O,T)=>Q((y(),L("div",{ref_key:"carouselItemRef",ref:a,class:F(t($)),style:Me(t(W)),onClick:T[0]||(T[0]=(...M)=>t(I)&&t(I)(...M))},[t(k)?Q((y(),L("div",{key:0,class:F(t(n).e("mask"))},null,2)),[[Z,!t(d)]]):U("v-if",!0),oe(O.$slots,"default")],6)),[[Z,t(N)]])}});var Pe=Ee(Kt,[["__file","carousel-item.vue"]]);const Xt=nt(Gt,{CarouselItem:Pe}),qt=at(Pe),Jt="/vue-cart-project/assets/banner01-AruBAIa8.png",Yt=e=>(Be("data-v-312c3d58"),e=e(),Ae(),e),Qt={class:"home-banner"},Zt=Yt(()=>_("img",{src:Jt,alt:""},null,-1)),en={__name:"HomeBanner",setup(e){const r=n=>{console.log(n)};return(n,a)=>{const d=qt,v=Xt;return y(),L("div",Qt,[H(v,{height:"500px"},{default:P(()=>[(y(),L(te,null,le(4,h=>H(d,{key:h,onClick:o=>r(h)},{default:P(()=>[Zt]),_:2},1032,["onClick"])),64))]),_:1})])}}},tn=ne(en,[["__scopeId","data-v-312c3d58"]]),nn=e=>(Be("data-v-a6f0a3dd"),e=e(),Ae(),e),an=nn(()=>_("span",null,"查看更多",-1)),on={__name:"AppMore",props:{path:{type:String,default:"/"}},setup(e){return(r,n)=>{const a=_e("router-link");return y(),ee(a,{to:e.path,class:"more"},{default:P(()=>[an]),_:1},8,["to"])}}},Re=ne(on,[["__scopeId","data-v-a6f0a3dd"]]),sn={class:"home-panel"},rn={class:"panel-container"},ln={class:"head"},un={class:"more"},cn={__name:"HomePanel",props:{title:{tpye:String,default:""}},setup(e){return(r,n)=>(y(),L("div",sn,[_("div",rn,[_("div",ln,[_("h3",null,se(e.title),1)]),oe(r.$slots,"main",{},void 0,!0),_("div",un,[oe(r.$slots,"more",{},void 0,!0)])])]))}},Oe=ne(cn,[["__scopeId","data-v-bb994e67"]]),fn=()=>He.get("/home/pokemon"),dn=()=>He.get("/home/Mario"),vn={class:"goods-list"},mn=["src"],_n={class:"extra"},hn={class:"e-goods"},pn={class:"e-title"},gn={class:"e-price"},yn={class:"e-btn"},In={__name:"HomeProduct",setup(e){const r=E([]),n=async()=>{const a=await fn();r.value=a.data.data};return re(()=>{n()}),(a,d)=>{const v=_e("RouterLink"),h=_t,o=Re;return y(),ee(Oe,{title:"- 新品上市 -"},{main:P(()=>[_("ul",vn,[(y(!0),L(te,null,le(r.value,l=>(y(),L("li",{key:l.id},[H(v,{to:"/"},{default:P(()=>[_("img",{src:l.picture,alt:""},null,8,mn)]),_:2},1024),_("div",_n,[_("div",hn,[_("div",pn,[H(v,{to:`/detail/manage/${l.id}`},{default:P(()=>[Ce(se(l.name),1)]),_:2},1032,["to"])]),_("div",gn,[_("span",null,"NT$"+se(l.price),1)])]),_("div",yn,[H(h,null,{default:P(()=>[Ce("加入購物車")]),_:1})])])]))),128))])]),more:P(()=>[H(o,{path:"/"})]),_:1})}}},Cn=ne(In,[["__scopeId","data-v-a08da654"]]),$n={class:"goods-list"},bn=["src"],kn={__name:"HomeNew",setup(e){const r=E([]),n=async()=>{const a=await dn();r.value=a.data.data};return re(()=>{n()}),(a,d)=>{const v=_e("RouterLink"),h=Re;return y(),ee(Oe,{title:"- 超級馬力歐 -"},{main:P(()=>[_("ul",$n,[(y(!0),L(te,null,le(r.value,o=>(y(),L("li",{key:o.id},[H(v,{to:"/"},{default:P(()=>[_("img",{src:o.picture,alt:""},null,8,bn)]),_:2},1024)]))),128))])]),more:P(()=>[H(h,{path:"/"})]),_:1})}}},wn=ne(kn,[["__scopeId","data-v-39151765"]]),Hn={__name:"HomeManage",setup(e){return(r,n)=>{const a=Ke;return y(),L(te,null,[H(tn),H(Cn),H(wn),H(a)],64)}}};export{Hn as default};
