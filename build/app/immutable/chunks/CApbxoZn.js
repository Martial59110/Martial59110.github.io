var fn=Array.isArray,un=Array.prototype.indexOf,$n=Array.from,zn=Object.defineProperty,G=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,_n=Object.prototype,cn=Array.prototype,Pt=Object.getPrototypeOf,Dt=Object.isExtensible;const Wn=()=>{};function Xn(t){return t()}function Ct(t){for(var n=0;n<t.length;n++)t[n]()}const b=2,Ft=4,it=8,Tt=16,I=32,H=64,et=128,A=256,rt=512,T=1024,P=2048,B=4096,Y=8192,ot=16384,vn=32768,Mt=65536,Jn=1<<17,hn=1<<19,Lt=1<<20,dt=1<<21,K=Symbol("$state"),Qn=Symbol("legacy props"),te=Symbol("");function qt(t){return t===this.v}function pn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Yt(t){return!pn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function En(t){throw new Error("https://svelte.dev/e/effect_orphan")}function yn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ne(){throw new Error("https://svelte.dev/e/hydration_failed")}function ee(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let _t=!1;function re(){_t=!0}const le=1,ae=2,se=4,fe=8,ue=16,ie=1,oe=2,_e=4,ce=8,ve=16,he=1,pe=2,An="[",xn="[!",Rn="]",jt={},y=Symbol(),de="http://www.w3.org/1999/xhtml";function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let d=null;function It(t){d=t}function we(t,n=!1,e){var r=d={p:d,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};_t&&!n&&(d.l={s:null,u:null,r1:[],r2:mt(!1)}),Nn(()=>{r.d=!0})}function Ee(t){const n=d;if(n!==null){const _=n.e;if(_!==null){var e=h,r=v;n.e=null;try{for(var a=0;a<_.length;a++){var l=_[a];st(l.effect),j(l.reaction),$t(l.fn)}}finally{st(e),j(r)}}d=n.p,n.m=!0}return{}}function ct(){return!_t||d!==null&&d.l===null}function q(t,n){if(typeof t!="object"||t===null||K in t)return t;const e=Pt(t);if(e!==_n&&e!==cn)return t;var r=new Map,a=fn(t),l=S(0),_=v,c=u=>{var s=v;j(_);var f;return f=u(),j(s),f};return a&&r.set("length",S(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&gn();var i=r.get(s);return i===void 0?(i=c(()=>S(f.value)),r.set(s,i)):N(i,c(()=>q(f.value))),!0},deleteProperty(u,s){var f=r.get(s);if(f===void 0)s in u&&r.set(s,c(()=>S(y)));else{if(a&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&N(i,o)}N(f,y),Ot(l)}return!0},get(u,s,f){var O;if(s===K)return t;var i=r.get(s),o=s in u;if(i===void 0&&(!o||(O=G(u,s))!=null&&O.writable)&&(i=c(()=>S(q(o?u[s]:y))),r.set(s,i)),i!==void 0){var p=V(i);return p===y?void 0:p}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var i=r.get(s);i&&(f.value=V(i))}else if(f===void 0){var o=r.get(s),p=o==null?void 0:o.v;if(o!==void 0&&p!==y)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(u,s){var p;if(s===K)return!0;var f=r.get(s),i=f!==void 0&&f.v!==y||Reflect.has(u,s);if(f!==void 0||h!==null&&(!i||(p=G(u,s))!=null&&p.writable)){f===void 0&&(f=c(()=>S(i?q(u[s]):y)),r.set(s,f));var o=V(f);if(o===y)return!1}return i},set(u,s,f,i){var bt;var o=r.get(s),p=s in u;if(a&&s==="length")for(var O=f;O<o.v;O+=1){var Q=r.get(O+"");Q!==void 0?N(Q,y):O in u&&(Q=c(()=>S(y)),r.set(O+"",Q))}o===void 0?(!p||(bt=G(u,s))!=null&&bt.writable)&&(o=c(()=>S(void 0)),N(o,c(()=>q(f))),r.set(s,o)):(p=o.v!==y,N(o,c(()=>q(f))));var tt=Reflect.getOwnPropertyDescriptor(u,s);if(tt!=null&&tt.set&&tt.set.call(i,f),!p){if(a&&typeof s=="string"){var Rt=r.get("length"),pt=Number(s);Number.isInteger(pt)&&pt>=Rt.v&&N(Rt,pt+1)}Ot(l)}return!0},ownKeys(u){V(l);var s=Reflect.ownKeys(u).filter(o=>{var p=r.get(o);return p===void 0||p.v!==y});for(var[f,i]of r)i.v!==y&&!(f in u)&&s.push(f);return s},setPrototypeOf(){Tn()}})}function Ot(t,n=1){N(t,t.v+n)}const $=new Map;function mt(t,n){var e={f:0,v:t,reactions:null,equals:qt,rv:0,wv:0};return e}function S(t,n){const e=mt(t);return nn(e),e}function ye(t,n=!1){var r;const e=mt(t);return n||(e.equals=Yt),_t&&d!==null&&d.l!==null&&((r=d.l).s??(r.s=[])).push(e),e}function N(t,n,e=!1){v!==null&&!R&&ct()&&(v.f&(b|Tt))!==0&&!(E!=null&&E.includes(t))&&mn();let r=e?q(n):n;return bn(t,r)}function bn(t,n){if(!t.equals(n)){var e=t.v;X?$.set(t,n):$.set(t,e),t.v=n,t.wv=rn(),Bt(t,P),ct()&&h!==null&&(h.f&T)!==0&&(h.f&(I|H))===0&&(m===null?Yn([t]):m.push(t))}return n}function Bt(t,n){var e=t.reactions;if(e!==null)for(var r=ct(),a=e.length,l=0;l<a;l++){var _=e[l],c=_.f;(c&P)===0&&(!r&&_===h||(D(_,n),(c&(T|A))!==0&&((c&b)!==0?Bt(_,B):ht(_))))}}let F=!1;function ge(t){F=t}let x;function z(t){if(t===null)throw Ht(),jt;return x=t}function Te(){return z(L(x))}function me(t){if(F){if(L(x)!==null)throw Ht(),jt;x=t}}function Ae(t=1){if(F){for(var n=t,e=x;n--;)e=L(e);x=e}}function xe(){for(var t=0,n=x;;){if(n.nodeType===8){var e=n.data;if(e===Rn){if(t===0)return n;t-=1}else(e===An||e===xn)&&(t+=1)}var r=L(n);n.remove(),n=r}}var St,Dn,Ut,Vt;function Re(){if(St===void 0){St=window,Dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype,e=Text.prototype;Ut=G(n,"firstChild").get,Vt=G(n,"nextSibling").get,Dt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Dt(e)&&(e.__t=void 0)}}function wt(t=""){return document.createTextNode(t)}function Et(t){return Ut.call(t)}function L(t){return Vt.call(t)}function be(t,n){if(!F)return Et(t);var e=Et(x);if(e===null)e=x.appendChild(wt());else if(n&&e.nodeType!==3){var r=wt();return e==null||e.before(r),z(r),r}return z(e),e}function De(t,n){if(!F){var e=Et(t);return e instanceof Comment&&e.data===""?L(e):e}return x}function Ie(t,n=1,e=!1){let r=F?x:t;for(var a;n--;)a=r,r=L(r);if(!F)return r;var l=r==null?void 0:r.nodeType;if(e&&l!==3){var _=wt();return r===null?a==null||a.after(_):r.before(_),z(_),_}return z(r),r}function Oe(t){t.textContent=""}function At(t){var n=b|P,e=v!==null&&(v.f&b)!==0?v:null;return h===null||e!==null&&(e.f&A)!==0?n|=A:h.f|=Lt,{ctx:d,deps:null,effects:null,equals:qt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??h}}function Se(t){const n=At(t);return nn(n),n}function Ne(t){const n=At(t);return n.equals=Yt,n}function Gt(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)M(n[e])}}function In(t){for(var n=t.parent;n!==null;){if((n.f&b)===0)return n;n=n.parent}return null}function On(t){var n,e=h;st(In(t));try{Gt(t),n=an(t)}finally{st(e)}return n}function Kt(t){var n=On(t),e=(k||(t.f&A)!==0)&&t.deps!==null?B:T;D(t,e),t.equals(n)||(t.v=n,t.wv=rn())}function Zt(t){h===null&&v===null&&En(),v!==null&&(v.f&A)!==0&&h===null&&wn(),X&&dn()}function Sn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function U(t,n,e,r=!0){var a=h,l={ctx:d,deps:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(e)try{xt(l),l.f|=vn}catch(u){throw M(l),u}else n!==null&&ht(l);var _=e&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Lt|et))===0;if(!_&&r&&(a!==null&&Sn(l,a),v!==null&&(v.f&b)!==0)){var c=v;(c.effects??(c.effects=[])).push(l)}return l}function Nn(t){const n=U(it,null,!1);return D(n,T),n.teardown=t,n}function ke(t){Zt();var n=h!==null&&(h.f&I)!==0&&d!==null&&!d.m;if(n){var e=d;(e.e??(e.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=$t(t);return r}}function Pe(t){return Zt(),kn(t)}function Ce(t){const n=U(H,t,!0);return(e={})=>new Promise(r=>{e.outro?Fn(n,()=>{M(n),r(void 0)}):(M(n),r(void 0))})}function $t(t){return U(Ft,t,!1)}function kn(t){return U(it,t,!0)}function Fe(t,n=[],e=At){const r=n.map(e);return Pn(()=>t(...r.map(V)))}function Pn(t,n=0){return U(it|Tt|n,t,!0)}function Me(t,n=!0){return U(it|I,t,!0,n)}function zt(t){var n=t.teardown;if(n!==null){const e=X,r=v;kt(!0),j(null);try{n.call(null)}finally{kt(e),j(r)}}}function Wt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&H)!==0?e.parent=null:M(e,n),e=r}}function Cn(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&I)===0&&M(n),n=e}}function M(t,n=!0){var e=!1;if((n||(t.f&hn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:L(r);r.remove(),r=l}e=!0}Wt(t,n&&!e),ut(t,0),D(t,ot);var _=t.transitions;if(_!==null)for(const u of _)u.stop();zt(t);var c=t.parent;c!==null&&c.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Fn(t,n){var e=[];Jt(t,e,!0),Mn(e,()=>{M(t),n&&n()})}function Mn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var a of t)a.out(r)}else n()}function Jt(t,n,e){if((t.f&Y)===0){if(t.f^=Y,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Mt)!==0||(r.f&I)!==0;Jt(r,n,l?e:!1),r=a}}}function Le(t){Qt(t,!0)}function Qt(t,n){if((t.f&Y)!==0){t.f^=Y,(t.f&T)===0&&(t.f^=T),J(t)&&(D(t,P),ht(t));for(var e=t.first;e!==null;){var r=e.next,a=(e.f&Mt)!==0||(e.f&I)!==0;Qt(e,a?n:!1),e=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let W=[],yt=[];function tn(){var t=W;W=[],Ct(t)}function Ln(){var t=yt;yt=[],Ct(t)}function qe(t){W.length===0&&queueMicrotask(tn),W.push(t)}function Nt(){W.length>0&&tn(),yt.length>0&&Ln()}let nt=!1,lt=!1,at=null,C=!1,X=!1;function kt(t){X=t}let Z=[];let v=null,R=!1;function j(t){v=t}let h=null;function st(t){h=t}let E=null;function qn(t){E=t}function nn(t){v!==null&&v.f&dt&&(E===null?qn([t]):E.push(t))}let w=null,g=0,m=null;function Yn(t){m=t}let en=1,ft=0,k=!1;function rn(){return++en}function J(t){var i;var n=t.f;if((n&P)!==0)return!0;if((n&B)!==0){var e=t.deps,r=(n&A)!==0;if(e!==null){var a,l,_=(n&rt)!==0,c=r&&h!==null&&!k,u=e.length;if(_||c){var s=t,f=s.parent;for(a=0;a<u;a++)l=e[a],(_||!((i=l==null?void 0:l.reactions)!=null&&i.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);_&&(s.f^=rt),c&&f!==null&&(f.f&A)===0&&(s.f^=A)}for(a=0;a<u;a++)if(l=e[a],J(l)&&Kt(l),l.wv>t.wv)return!0}(!r||h!==null&&!k)&&D(t,T)}return!1}function jn(t,n){for(var e=n;e!==null;){if((e.f&et)!==0)try{e.fn(t);return}catch{e.f^=et}e=e.parent}throw nt=!1,t}function Hn(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function vt(t,n,e,r){if(nt){if(e===null&&(nt=!1),Hn(n))throw t;return}e!==null&&(nt=!0);{jn(t,n);return}}function ln(t,n,e=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];E!=null&&E.includes(t)||((l.f&b)!==0?ln(l,n,!1):n===l&&(e?D(l,P):(l.f&T)!==0&&D(l,B),ht(l)))}}function an(t){var p;var n=w,e=g,r=m,a=v,l=k,_=E,c=d,u=R,s=t.f;w=null,g=0,m=null,k=(s&A)!==0&&(R||!C||v===null),v=(s&(I|H))===0?t:null,E=null,It(t.ctx),R=!1,ft++,t.f|=dt;try{var f=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(ut(t,g),i!==null&&g>0)for(i.length=g+w.length,o=0;o<w.length;o++)i[g+o]=w[o];else t.deps=i=w;if(!k)for(o=g;o<i.length;o++)((p=i[o]).reactions??(p.reactions=[])).push(t)}else i!==null&&g<i.length&&(ut(t,g),i.length=g);if(ct()&&m!==null&&!R&&i!==null&&(t.f&(b|B|P))===0)for(o=0;o<m.length;o++)ln(m[o],t);return a!==null&&(ft++,m!==null&&(r===null?r=m:r.push(...m))),f}finally{w=n,g=e,m=r,v=a,k=l,E=_,It(c),R=u,t.f^=dt}}function Bn(t,n){let e=n.reactions;if(e!==null){var r=un.call(e,t);if(r!==-1){var a=e.length-1;a===0?e=n.reactions=null:(e[r]=e[a],e.pop())}}e===null&&(n.f&b)!==0&&(w===null||!w.includes(n))&&(D(n,B),(n.f&(A|rt))===0&&(n.f^=rt),Gt(n),ut(n,0))}function ut(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Bn(t,e[r])}function xt(t){var n=t.f;if((n&ot)===0){D(t,T);var e=h,r=d,a=C;h=t,C=!0;try{(n&Tt)!==0?Cn(t):Wt(t),zt(t);var l=an(t);t.teardown=typeof l=="function"?l:null,t.wv=en;var _=t.deps,c}catch(u){vt(u,t,e,r||t.ctx)}finally{C=a,h=e}}}function Un(){try{yn()}catch(t){if(at!==null)vt(t,at,null);else throw t}}function sn(){var t=C;try{var n=0;for(C=!0;Z.length>0;){n++>1e3&&Un();var e=Z,r=e.length;Z=[];for(var a=0;a<r;a++){var l=Gn(e[a]);Vn(l)}}}finally{lt=!1,C=t,at=null,$.clear()}}function Vn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(ot|Y))===0)try{J(r)&&(xt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(a){vt(a,r,null,r.ctx)}}}function ht(t){lt||(lt=!0,queueMicrotask(sn));for(var n=at=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(H|I))!==0){if((e&T)===0)return;n.f^=T}}Z.push(n)}function Gn(t){for(var n=[],e=t;e!==null;){var r=e.f,a=(r&(I|H))!==0,l=a&&(r&T)!==0;if(!l&&(r&Y)===0){if((r&Ft)!==0)n.push(e);else if(a)e.f^=T;else{var _=v;try{v=e,J(e)&&xt(e)}catch(s){vt(s,e,null,e.ctx)}finally{v=_}}var c=e.first;if(c!==null){e=c;continue}}var u=e.parent;for(e=e.next;e===null&&u!==null;)e=u.next,u=u.parent}return n}function Kn(t){var n;for(Nt();Z.length>0;)lt=!0,sn(),Nt();return n}async function Ye(){await Promise.resolve(),Kn()}function V(t){var n=t.f,e=(n&b)!==0;if(v!==null&&!R){if(!(E!=null&&E.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,w===null&&r!==null&&r[g]===t?g++:w===null?w=[t]:(!k||!w.includes(t))&&w.push(t))}}else if(e&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&A)===0&&(a.f^=A)}return e&&(a=t,J(a)&&Kt(a)),X&&$.has(t)?$.get(t):t.v}function je(t){var n=R;try{return R=!0,t()}finally{R=n}}const Zn=-7169;function D(t,n){t.f=t.f&Zn|n}function He(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)gt(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&K in e&&gt(e)}}}function gt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{gt(t[r],n)}catch{}const e=Pt(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=on(e);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}export{At as $,Oe as A,$n as B,Ce as C,wt as D,Mt as E,we as F,h as G,An as H,Ee as I,Pt as J,on as K,te as L,S as M,de as N,De as O,Fe as P,be as Q,Ie as R,K as S,me as T,y as U,V,N as W,Pe as X,Ct as Y,Xn as Z,He as _,je as a,j as a0,st as a1,v as a2,Nn as a3,zn as a4,fn as a5,Dn as a6,he as a7,pe as a8,G as a9,Ae as aA,Wn as aB,pn as aC,ee as aa,Jn as ab,Ne as ac,_e as ad,Yt as ae,q as af,ye as ag,ce as ah,Qn as ai,oe as aj,ie as ak,ve as al,Kn as am,Ye as an,Se as ao,se as ap,Y as aq,le as ar,bn as as,ae as at,mt as au,fe as av,Jt as aw,Mn as ax,M as ay,ue as az,Pn as b,d as c,Te as d,re as e,xn as f,ge as g,F as h,Le as i,Me as j,x as k,_t as l,$t as m,kn as n,Re as o,Fn as p,qe as q,xe as r,z as s,Et as t,ke as u,L as v,jt as w,Rn as x,Ht as y,ne as z};
