import{ad as y,r as u,ae as D,t as _,af as d,ag as K,a7 as R,q as z,ah as w,ai as l,a3 as W,aj as c}from"./base-Xg502Yuj.js";var T=y(u,"WeakMap"),q=9007199254740991;function U(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=q}function N(t){return t!=null&&U(t.length)&&!D(t)}var H=Object.prototype;function X(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||H;return t===r}function Y(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Z="[object Arguments]";function x(t){return _(t)&&d(t)==Z}var F=Object.prototype,J=F.hasOwnProperty,Q=F.propertyIsEnumerable,tt=x(function(){return arguments}())?x:function(t){return _(t)&&J.call(t,"callee")&&!Q.call(t,"callee")};function rt(){return!1}var G=typeof exports=="object"&&exports&&!exports.nodeType&&exports,O=G&&typeof module=="object"&&module&&!module.nodeType&&module,et=O&&O.exports===G,S=et?u.Buffer:void 0,at=S?S.isBuffer:void 0,nt=at||rt,ot="[object Arguments]",st="[object Array]",it="[object Boolean]",ut="[object Date]",ct="[object Error]",pt="[object Function]",ft="[object Map]",gt="[object Number]",bt="[object Object]",lt="[object RegExp]",yt="[object Set]",dt="[object String]",ht="[object WeakMap]",jt="[object ArrayBuffer]",Tt="[object DataView]",vt="[object Float32Array]",mt="[object Float64Array]",At="[object Int8Array]",_t="[object Int16Array]",wt="[object Int32Array]",xt="[object Uint8Array]",Ot="[object Uint8ClampedArray]",St="[object Uint16Array]",Pt="[object Uint32Array]",a={};a[vt]=a[mt]=a[At]=a[_t]=a[wt]=a[xt]=a[Ot]=a[St]=a[Pt]=!0;a[ot]=a[st]=a[jt]=a[it]=a[Tt]=a[ut]=a[ct]=a[pt]=a[ft]=a[gt]=a[bt]=a[lt]=a[yt]=a[dt]=a[ht]=!1;function $t(t){return _(t)&&U(t.length)&&!!a[d(t)]}function It(t){return function(e){return t(e)}}var L=typeof exports=="object"&&exports&&!exports.nodeType&&exports,g=L&&typeof module=="object"&&module&&!module.nodeType&&module,Et=g&&g.exports===L,j=Et&&K.process,P=function(){try{var t=g&&g.require&&g.require("util").types;return t||j&&j.binding&&j.binding("util")}catch{}}(),$=P&&P.isTypedArray,Mt=$?It($):$t,Ct=Object.prototype,Bt=Ct.hasOwnProperty;function kt(t,e){var r=z(t),n=!r&&tt(t),s=!r&&!n&&nt(t),p=!r&&!n&&!s&&Mt(t),f=r||n||s||p,h=f?Y(t.length,String):[],V=h.length;for(var o in t)(e||Bt.call(t,o))&&!(f&&(o=="length"||s&&(o=="offset"||o=="parent")||p&&(o=="buffer"||o=="byteLength"||o=="byteOffset")||R(o,V)))&&h.push(o);return h}function zt(t,e){return function(r){return t(e(r))}}var Ut=zt(Object.keys,Object),Ft=Object.prototype,Gt=Ft.hasOwnProperty;function Lt(t){if(!X(t))return Ut(t);var e=[];for(var r in Object(t))Gt.call(t,r)&&r!="constructor"&&e.push(r);return e}function Vt(t){return N(t)?kt(t):Lt(t)}function Dt(t,e){for(var r=-1,n=e.length,s=t.length;++r<n;)t[s+r]=e[r];return t}function Kt(){this.__data__=new w,this.size=0}function Rt(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function Wt(t){return this.__data__.get(t)}function qt(t){return this.__data__.has(t)}var Nt=200;function Ht(t,e){var r=this.__data__;if(r instanceof w){var n=r.__data__;if(!l||n.length<Nt-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new W(n)}return r.set(t,e),this.size=r.size,this}function b(t){var e=this.__data__=new w(t);this.size=e.size}b.prototype.clear=Kt;b.prototype.delete=Rt;b.prototype.get=Wt;b.prototype.has=qt;b.prototype.set=Ht;function Xt(t,e){for(var r=-1,n=t==null?0:t.length,s=0,p=[];++r<n;){var f=t[r];e(f,r,t)&&(p[s++]=f)}return p}function Yt(){return[]}var Zt=Object.prototype,Jt=Zt.propertyIsEnumerable,I=Object.getOwnPropertySymbols,Qt=I?function(t){return t==null?[]:(t=Object(t),Xt(I(t),function(e){return Jt.call(t,e)}))}:Yt;function tr(t,e,r){var n=e(t);return z(t)?n:Dt(n,r(t))}function ur(t){return tr(t,Vt,Qt)}var v=y(u,"DataView"),m=y(u,"Promise"),A=y(u,"Set"),E="[object Map]",rr="[object Object]",M="[object Promise]",C="[object Set]",B="[object WeakMap]",k="[object DataView]",er=c(v),ar=c(l),nr=c(m),or=c(A),sr=c(T),i=d;(v&&i(new v(new ArrayBuffer(1)))!=k||l&&i(new l)!=E||m&&i(m.resolve())!=M||A&&i(new A)!=C||T&&i(new T)!=B)&&(i=function(t){var e=d(t),r=e==rr?t.constructor:void 0,n=r?c(r):"";if(n)switch(n){case er:return k;case ar:return E;case nr:return M;case or:return C;case sr:return B}return e});const cr=i;var pr=u.Uint8Array;export{b as S,pr as U,N as a,kt as b,Dt as c,tr as d,cr as e,It as f,Qt as g,nt as h,X as i,ur as j,Vt as k,tt as l,Mt as m,P as n,zt as o,U as p,Yt as s};