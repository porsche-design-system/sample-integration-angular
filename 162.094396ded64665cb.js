"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[162],{661:(x,S,l)=>{l.d(S,{a:()=>L,m:()=>E});var n=l(861),r=l(58);const v={},g={};function b(){return(b=(0,n.Z)(function*(e){const t=g[e];return void 0===t?new Promise((a,_)=>_(new Error(`Sequence ${e} has not been registered`))):(t.running||(t.promise=new Promise((a,_)=>{t.resolve=()=>{t.running=!1,a()},t.reject=R=>{t.running=!1,_(R)},t.running=!0,D(t)})),t.promise)})).apply(this,arguments)}function D(e){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(function*(e){var t;if(e.currentStepIndex>=e.steps.length)return void function u(e){var t;e.currentStepIndex=0,null===(t=e.resolve)||void 0===t||t.call(e,null),e.promise=void 0}(e);const a=e.steps[e.currentStepIndex],_=[];for(const R of a)_.push(O(R));try{yield Promise.all(_)}catch(R){return void(null===(t=e.reject)||void 0===t||t.call(e,R))}e.currentStepIndex+=1,setTimeout(()=>D(e),0)})).apply(this,arguments)}function h(e){const t=(0,r.t)(e.target);if(null===t)throw new Error(`${e.type} event target is null`);const a=t.dataset.phnAmId;null!=a&&c(a,t)}function O(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(function*({onStart:e,onEnd:t,animation:a,elementSelector:_}){if(e){const N=e();(0,r.q)(N)&&(yield N)}const R=Array.from((0,r.B)().querySelectorAll(_)),I=[];for(const N of R){const M=i(f)(N,a);I.push(M)}if(yield Promise.all(I),t){const N=t();(0,r.q)(N)&&(yield N)}})).apply(this,arguments)}function i(e){return function(){var t=(0,n.Z)(function*(a,_){const{cleanUpBeforeAnimation:R,cleanUpAfterAnimation:I}=_,N=e(a,_);if("function"==typeof R){const M=R(a);(0,r.q)(M)&&(yield M)}if(yield N,"function"==typeof I){const M=I(a);(0,r.q)(M)&&(yield M)}!1!==I&&a.classList.remove(_.className)});return function(a,_){return t.apply(this,arguments)}}()}const f=(e,t)=>{const a=Math.floor(1e7*Math.random());let _,R,I;e.classList.add(t.className),e.dataset.phnAmId=a.toString();const N=new Promise((M,W)=>{_=M,R=W,I=setTimeout(()=>{console.warn(`Animation with className ${t.className} didn't finish after 1000ms. Forcefully finishing animation and continuing with the rest of the sequence.`),c(String(a),e)},1e3)});return v[a]={animation:t,resolve:_,reject:R,promise:N,timeout:I},N};function c(e,t){const{resolve:a,timeout:_}=v[e];clearTimeout(_),delete v[e],delete t.dataset.phnAmId,a()}function E(e,t){return{steps:e.map(a=>a.map(_=>Object.assign(Object.assign({},t),_))),currentStepIndex:0,running:!1}}const L={initialize:function A(){(0,r.B)().addEventListener("transitionend",h),(0,r.B)().addEventListener("animationend",h)},play:function T(e){return b.apply(this,arguments)},isPlaying:function s(e){const t=g[e];if(void 0===t)throw new Error(`Sequence ${e} has not been registered`);return void 0!==t.promise},register:function y(e,t){g[e]=t},reset:function w(){Object.keys(g).forEach(e=>delete g[e])}}},205:(x,S,l)=>{l.d(S,{A:()=>n});const n={OPEN_DOUBLE_DRAWER:"openDoubleDrawer",CLOSE_DOUBLE_DRAWER:"closeDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER:"transitionSameLevelDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER_REVERSE:"transitionSameLevelDoubleDrawerReverse",TRANSITION_NEXT_LEVEL_DOUBLE_DRAWER:"transitionNextLevelDoubleDrawer",TRANSITION_PREVIOUS_LEVEL_DOUBLE_DRAWER:"transitionPreviousLevelDoubleDrawer",OPEN_SINGLE_DRAWER:"openSingleDrawer",CLOSE_SINGLE_DRAWER:"closeSingleDrawer",TRANSITION_NEXT_LEVEL_SINGLE_DRAWER:"transitionNextLevelSingleDrawer",TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER:"transitionPreviousLevelSingleDrawer"}},678:(x,S,l)=>{l.d(S,{a:()=>P,b:()=>g,g:()=>A,s:()=>v});var n=l(172),r=l(58);function v(o){return["CN"].includes(o)}function g(o){return o.includes("-")?o.split("-")[0]:o}function P(o){return o.startsWith("https://")?o:`http://${o}`}function A(o){const{openingHours:u}=n.b.state.dealer;if(!u)return"";const h=[u.monday,u.tuesday,u.wednesday,u.thursday,u.friday,u.saturday,u.sunday],O=function w(o,u){const h=new Map;for(const O of u){const d=o[O.day.toLowerCase()];(0,r.i)(d)&&h.set(d,{open:O.open,close:O.close})}return h}(u,o),d=[];let i="",f=-1,c=[];for(const s of h){const E=h.indexOf(s),e=T(O.get(s));""!==e&&(""===i?(i=e,c.push(s)):i!==e||f!==E-1?(d.push(y(c,i)),c=[s],i=e):c.push(s),f=E)}return""!==i&&d.push(y(c,i)),d.join("\n")}function y(o,u){return 1===o.length?`${o[0]}: ${u}`:`${o[0]} - ${o[o.length-1]}: ${u}`}function T(o){return o&&""!==o.open&&""!==o.close?function b(o){const{openingHours:u}=n.b.state.dealer,h=12===u?.timeFormat;return`${D(o.open,h)} - ${D(o.close,h)}`}(o):""}function D(o,u=!1){const[h,O]=o.split(":").map(Number);return new Date(0,0,0,h,O).toLocaleString(void 0,{hour:"numeric",minute:"numeric",hour12:u}).toUpperCase()}},747:(x,S,l)=>{l.d(S,{a:()=>b,b:()=>A,c:()=>O,d:()=>w,g:()=>u});var n=l(861),r=l(172),v=l(35),g=l(58),P=function(i,f){var c={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&f.indexOf(s)<0&&(c[s]=i[s]);if(null!=i&&"function"==typeof Object.getOwnPropertySymbols){var E=0;for(s=Object.getOwnPropertySymbols(i);E<s.length;E++)f.indexOf(s[E])<0&&Object.prototype.propertyIsEnumerable.call(i,s[E])&&(c[s[E]]=i[s[E]])}return c};function A(i,f,c){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(function*(i,f,c){return w(i,f,{latitude:0,longitude:0},c,{radius:1e7})})).apply(this,arguments)}function w(i,f,c,s){return T.apply(this,arguments)}function T(){return(T=(0,n.Z)(function*(i,f,c,s,E={}){const{radius:L}=E;let e,t;try{const a=new Headers;a.set("Accept","*/*"),i===r.c.LOCAL&&a.set("Authorization","Basic "+v.w.btoa("undefined:undefined"));const _={coordinates:`${c.latitude},${c.longitude}`,radius:L};e=yield fetch(`${f}/${s}/dealers?${(0,g.b)(_)}`,{method:"GET",headers:a})}catch{throw new r.N("Unable to fetch dealers",r.a.GENERAL)}if(400===e.status)throw new r.N("dealerService.getPPNDealers failed with invalid coordinates",r.a.GENERAL);if(404===e.status)throw new r.N("dealerService.getPPNDealers failed with invalid country code and therefore responded with no results",r.a.NO_RESULTS);if(200!==e.status)throw new r.N("dealerService.getPPNDealers failed with invalid response",r.a.GENERAL);try{t=yield e.json()}catch{throw new r.N("dealerService.getPPNDealers could not parse response into json format",r.a.GENERAL)}return t.map(a=>{var{dealer:_}=a,R=P(a,["dealer"]);return Object.assign({ppnDealer:_},R)})})).apply(this,arguments)}function b(i,f,c,s,E){return D.apply(this,arguments)}function D(){return(D=(0,n.Z)(function*(i,f,c,s,E){let L;try{L=(yield w(i,f,s,E)).find(t=>c===t.ppnDealer.id)}catch{throw new r.N("Unable to fetch a dealer",r.a.GENERAL)}if(void 0===L)throw new r.N(`Requested dealer ${c} could not be found`,r.a.NO_RESULTS);return L})).apply(this,arguments)}const o=new Map;function u(i,f){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(function*(i,f){const s=(yield O(f)).regions.flatMap(({cities:E})=>E.flatMap(({dealers:L})=>Object.values(L).reduce((e,t)=>[...e,t],[]))).find(({ppnDealer:E})=>E.id===i);if(void 0===s)throw new r.N("Requested dealer could not be found",r.a.NO_RESULTS);return s})).apply(this,arguments)}function O(i){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(function*(i){const{env:f}=r.n.state,c=new Headers;let s;if(o.has(i))s=o.get(i);else{const{BFF_ENDPOINT:E}=(0,g.a)(f);c.set("Accept","*/*"),s=yield(yield fetch(`${E}/dealers/region/${i}?env=${f}`,{method:"GET",headers:c})).json(),o.set(i,s)}if(void 0===s)throw new r.N("Requested dealer could not be found",r.a.NO_RESULTS);return s})).apply(this,arguments)}},844:(x,S,l)=>{l.d(S,{c:()=>v});var n=l(861),r=l(35);function v(P,A){return g.apply(this,arguments)}function g(){return g=(0,n.Z)(function*(P,A,...y){if(null===P)return null;const w=function(){var D=(0,n.Z)(function*(o){const u=yield r.w.waitForElement(P,o);return"function"==typeof u?.componentOnReady&&(yield u.componentOnReady()),u});return function(u){return D.apply(this,arguments)}}(),T=y.length>0?y.map(w):[w()],b=new Promise(D=>A.set((0,n.Z)(function*(){return D(null)})));return Promise.race([Promise.all(T),b])}),g.apply(this,arguments)}},588:(x,S,l)=>{l.d(S,{a:()=>I,b:()=>_,c:()=>f,d:()=>M,e:()=>t,f:()=>c,g:()=>d,h:()=>w,i:()=>R,j:()=>E,p:()=>s,r:()=>L,s:()=>W});var n=l(63),r=l(740),v=l(58),g=l(35),P=l(416),A=l(661),y=l(205);const w=()=>({OPENING:b,CLOSING:D,FORWARD:o,BACKWARDS:u,UNCHANGED:h}[function T(){return _()?"OPENING":N()?"CLOSING":t()?"FORWARD":a()?"BACKWARDS":"UNCHANGED"}()]()),b=()=>(A.a.play(y.A.OPEN_SINGLE_DRAWER),{nextRoute:"",currentRoute:d()}),D=()=>(A.a.play(y.A.CLOSE_SINGLE_DRAWER).then(()=>{}),{nextRoute:d()||"",currentRoute:i()||""}),o=()=>{var m,p;return setTimeout(()=>{A.a.play(y.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER)}),{nextRoute:null!==(m=d())&&void 0!==m?m:"",currentRoute:null!==(p=i())&&void 0!==p?p:""}},u=()=>{var m,p;return""!==d()&&setTimeout(()=>{A.a.play(y.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER)}),{nextRoute:null!==(m=i())&&void 0!==m?m:"",currentRoute:null!==(p=d())&&void 0!==p?p:""}},h=()=>({nextRoute:"",currentRoute:d()}),d=()=>{const{routingKeyHistory:m,routingKeyPointer:p}=n.r.state;return m[p]||""},i=()=>{const{routingKeyHistory:m,animatingPointer:p}=n.r.state;return m[p]||""},f=(...m)=>{const p=[r.a.MAIN_MENU,...m];n.r.state.routingKeyPointer=m.length,n.r.state.routingKeyHistory=p},c=()=>{(()=>{try{return[y.A.OPEN_SINGLE_DRAWER,y.A.CLOSE_SINGLE_DRAWER,y.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER,y.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER].some(p=>{try{return A.a.isPlaying(p)}catch{return!1}})}catch{return!1}})()||((0,r.f)(d())===r.a.DEALER_SEARCH&&(P.d.state.savedDealerCookie=null),n.r.state.routingKeyPointer=n.r.state.routingKeyPointer-1)},s=()=>{e()&&n.r.state.routingKeyHistory.pop()},E=m=>{if((0,v.l)(g.w.getBreakpoint()))(0,v.E)("phn-router","mobileMenuItemClick",{bubbles:!0,cancelable:!1,detail:[(0,r.c)(d(),...m)]});else{const p=[...n.r.state.routingKeyHistory,(0,r.c)(d(),...m)];n.r.state.routingKeyPointer=p.length-1,n.r.state.routingKeyHistory=p}},L=()=>{n.r.state.routingKeyPointer=-1},e=()=>n.r.state.routingKeyPointer<n.r.state.routingKeyHistory.length-1,t=()=>n.r.state.routingKeyPointer>n.r.state.animatingPointer,a=()=>n.r.state.routingKeyPointer<n.r.state.animatingPointer,_=()=>n.r.state.animatingPointer===r.R.LEVEL_ZERO&&n.r.state.routingKeyPointer>=0,R=()=>!I(),I=()=>n.r.state.routingKeyPointer===r.R.LEVEL_ZERO&&n.r.state.animatingPointer===r.R.LEVEL_ZERO,N=()=>-1===n.r.state.routingKeyPointer&&n.r.state.animatingPointer>=0,M=()=>{n.r.state.animatingPointer=n.r.state.routingKeyPointer},W=m=>n.r.state.routingKeyHistory.indexOf(m)>=r.R.LEVEL_TWO},564:(x,S,l)=>{l.d(S,{T:()=>r});var n=l(861);class r{constructor(g){this.delay=g,this.timer=null}set(g){var P=this;this.cancel(),this.timer=setTimeout((0,n.Z)(function*(){yield g(),P.cancel()}),this.delay)}cancel(){null!==this.timer&&(clearTimeout(this.timer),"function"==typeof this.timer.unref&&this.timer.unref(),this.timer=null)}}}}]);