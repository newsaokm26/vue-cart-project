import{e as L,m as J,as as K,aH as N,aI as U,aJ as Y,U as $,l as j,O as R,a3 as k,P as Q,j as Z,o as ee,c as te,q as F,s as oe,aK as ne,n as re,E as le}from"./index-Bn64dnJN.js";import"./request-DMWb_SJ0.js";function se(e){return N()?(U(e),!0):!1}function _(e){return typeof e=="function"?e():L(e)}const ce=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ie=Object.prototype.toString,ae=e=>ie.call(e)==="[object Object]",S=()=>{};function B(e,r){function t(...o){return new Promise((s,c)=>{Promise.resolve(e(()=>r.apply(this,o),{fn:r,thisArg:this,args:o})).then(s).catch(c)})}return t}function ue(e,r={}){let t,o,s=S;const c=a=>{clearTimeout(a),s(),s=S};return a=>{const m=_(e),l=_(r.maxWait);return t&&c(t),m<=0||l!==void 0&&l<=0?(o&&(c(o),o=null),Promise.resolve(a())):new Promise((i,u)=>{s=r.rejectOnCancel?u:i,l&&!o&&(o=setTimeout(()=>{t&&c(t),o=null,i(a())},l)),t=setTimeout(()=>{o&&c(o),o=null,i(a())},m)})}}function fe(...e){let r=0,t,o=!0,s=S,c,f,a,m,l;!Y(e[0])&&typeof e[0]=="object"?{delay:f,trailing:a=!0,leading:m=!0,rejectOnCancel:l=!1}=e[0]:[f,a=!0,m=!0,l=!1]=e;const i=()=>{t&&(clearTimeout(t),t=void 0,s(),s=S)};return v=>{const p=_(f),w=Date.now()-r,x=()=>c=v();return i(),p<=0?(r=Date.now(),x()):(w>p&&(m||!o)?(r=Date.now(),x()):a&&(c=new Promise((g,h)=>{s=l?h:g,t=setTimeout(()=>{r=Date.now(),o=!0,g(x()),i()},Math.max(0,p-w))})),!m&&!t&&(t=setTimeout(()=>o=!0,p)),o=!1,c)}}function pe(e){return e||$()}function de(e,r=200,t={}){return B(ue(r,t),e)}function me(e,r=200,t=!1,o=!0,s=!1){return B(fe(r,t,o,s),e)}function ve(e,r=!0,t){pe()?J(e,t):r?e():K(e)}function X(e){var r;const t=_(e);return(r=t==null?void 0:t.$el)!=null?r:t}const q=ce?window:void 0;function V(...e){let r,t,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,o,s]=e,r=q):[r,t,o,s]=e,!r)return S;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const c=[],f=()=>{c.forEach(i=>i()),c.length=0},a=(i,u,v,p)=>(i.addEventListener(u,v,p),()=>i.removeEventListener(u,v,p)),m=Q(()=>[X(r),_(s)],([i,u])=>{if(f(),!i)return;const v=ae(u)?{...u}:u;c.push(...t.flatMap(p=>o.map(w=>a(i,p,w,v))))},{immediate:!0,flush:"post"}),l=()=>{m(),f()};return se(l),l}const G=1;function he(e,r={}){const{throttle:t=0,idle:o=200,onStop:s=S,onScroll:c=S,offset:f={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:m="auto",window:l=q,onError:i=n=>{console.error(n)}}=r,u=j(0),v=j(0),p=R({get(){return u.value},set(n){x(n,void 0)}}),w=R({get(){return v.value},set(n){x(void 0,n)}});function x(n,T){var d,D,A;if(!l)return;const y=_(e);y&&((A=y instanceof Document?l.document.body:y)==null||A.scrollTo({top:(d=_(T))!=null?d:w.value,left:(D=_(n))!=null?D:p.value,behavior:_(m)}))}const g=j(!1),h=k({left:!0,right:!1,top:!0,bottom:!1}),b=k({left:!1,right:!1,top:!1,bottom:!1}),O=n=>{g.value&&(g.value=!1,b.left=!1,b.right=!1,b.top=!1,b.bottom=!1,s(n))},z=de(O,t+o),C=n=>{var T;if(!l)return;const d=((T=n==null?void 0:n.document)==null?void 0:T.documentElement)||(n==null?void 0:n.documentElement)||X(n),{display:D,flexDirection:A}=getComputedStyle(d),y=d.scrollLeft;b.left=y<u.value,b.right=y>u.value;const W=Math.abs(y)<=(f.left||0),P=Math.abs(y)+d.clientWidth>=d.scrollWidth-(f.right||0)-G;D==="flex"&&A==="row-reverse"?(h.left=P,h.right=W):(h.left=W,h.right=P),u.value=y;let E=d.scrollTop;n===l.document&&!E&&(E=l.document.body.scrollTop),b.top=E<v.value,b.bottom=E>v.value;const H=Math.abs(E)<=(f.top||0),I=Math.abs(E)+d.clientHeight>=d.scrollHeight-(f.bottom||0)-G;D==="flex"&&A==="column-reverse"?(h.top=I,h.bottom=H):(h.top=H,h.bottom=I),v.value=E},M=n=>{var T;if(!l)return;const d=(T=n.target.documentElement)!=null?T:n.target;C(d),g.value=!0,z(n),c(n)};return V(e,"scroll",t?me(M,t,!0,!1):M,a),ve(()=>{try{const n=_(e);if(!n)return;C(n)}catch(n){i(n)}}),V(e,"scrollend",O,a),{x:p,y:w,isScrolling:g,arrivedState:h,directions:b,measure(){const n=_(e);l&&n&&C(n)}}}const _e={__name:"AppGotop",setup(e){const{y:r}=he(window),t=()=>{document.documentElement.scrollTop=0};return(o,s)=>{const c=le;return ee(),te("div",{class:re(["app-evevator",{show:L(r)>300}])},[F(c,{onClick:t},{default:oe(()=>[F(L(ne))]),_:1})],2)}}},we=Z(_e,[["__scopeId","data-v-cff7f932"]]);export{we as _,he as u};
