"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[660],{492:(b,P,d)=>{d.d(P,{a:()=>D});var o=d(598),e=d(554),R=d(195),E=d(681),h=d(685);const L={};function w(r){const{drawerType:s}=L,m=((0,E.i)(r)?(0,o.b)(r):e.r.state.routingKeyHistory[e.r.state.routingKeyPointer])||"",_=(0,o.g)(m),l=(0,o.d)(m),f=l-1;if(!(0,E.i)(m))return"level0";const t=(0,E.i)(m)?`level${l}-${_}`:`level${l-1}-unknown`;return"doubleDrawer"===s?""===m?`level${f}-unknown_level${l}-unknown`:`level${f}-${(0,h.g)(m)}_${t}`:t}function y(r,s,m){const{drawerType:_}=L,l=(0,o.d)(r);if("doubleDrawer"===_){let f=l;return m&&(f-=1),`level${f}_${s}`}return(0,E.i)(r)?`level${l}_${s}`:`level${l-1}_${s}`}function O(){return L.drawerType}const D={setDrawerType:function N(r){L.drawerType=r},getDealerResultsLoadDisplayElementId:function M(r){return"doubleDrawer"===O()?r:w()},calculateDisplayElementId:w,getDealerResultsLoadDisplayElementType:function c(){return"doubleDrawer"===O()?R.j:y("",R.h.dealerSearchForm)},calculateDisplayElementType:y,getModelName:function T(r){const s=r.link.split("/"),m=s[s.length-1];let _;return _=""===m?void 0===s[s.length-2]?"":s[s.length-2].split("-").join(" "):m.split("-").join(" "),_},getModelTargetElement:function C(r,s){if(r.includes("models"))return`level${(0,o.d)(r)}_${s.toLowerCase()}`}}},233:(b,P,d)=>{d.d(P,{a:()=>p,m:()=>t});var o=d(861),e=d(681);const R={},E={};let h=null;function C(){return(C=(0,o.Z)(function*(n){const a=E[n];return void 0===a?new Promise((i,u)=>u(new Error(`Sequence ${n} has not been registered`))):(a.running||(a.promise=new Promise((i,u)=>{a.resolve=()=>{a.running=!1,i()},a.reject=g=>{a.running=!1,u(g)},a.running=!0,O(a)})),a.promise)})).apply(this,arguments)}function O(n){return M.apply(this,arguments)}function M(){return(M=(0,o.Z)(function*(n){var a;if(n.currentStepIndex>=n.steps.length)return void function c(n){var a;n.currentStepIndex=0,null===(a=n.resolve)||void 0===a||a.call(n,null),n.promise=void 0}(n);const i=n.steps[n.currentStepIndex],u=[];for(const g of i)u.push(r(g));try{yield Promise.all(u)}catch(g){return void(null===(a=n.reject)||void 0===a||a.call(n,g))}n.currentStepIndex+=1,setTimeout(()=>O(n),0)})).apply(this,arguments)}function D(n){const a=(0,e.r)(n.target);if(null===a)throw new Error(`${n.type} event target is null`);const i=a.dataset.phnAmId;null!=i&&l(i,a)}function r(n){return s.apply(this,arguments)}function s(){return(s=(0,o.Z)(function*({onStart:n,onEnd:a,animation:i,elementSelector:u}){if(null===h)throw new Error("No root element present");if(n){const I=n();(0,e.q)(I)&&(yield I)}const g=Array.from(h.querySelectorAll(u)),v=[];for(const I of g){const A=m(_)(I,i);v.push(A)}if(yield Promise.all(v),a){const I=a();(0,e.q)(I)&&(yield I)}})).apply(this,arguments)}function m(n){return function(){var a=(0,o.Z)(function*(i,u){const{cleanUpBeforeAnimation:g,cleanUpAfterAnimation:v}=u,I=n(i,u);if("function"==typeof g){const A=g(i);(0,e.q)(A)&&(yield A)}if(yield I,"function"==typeof v){const A=v(i);(0,e.q)(A)&&(yield A)}!1!==v&&i.classList.remove(u.className)});return function(i,u){return a.apply(this,arguments)}}()}const _=(n,a)=>{const i=Math.floor(1e7*Math.random());let u,g,v;n.classList.add(a.className),n.dataset.phnAmId=i.toString();const I=new Promise((A,S)=>{u=A,g=S,v=setTimeout(()=>{console.warn(`Animation with className ${a.className} didn't finish after 1000ms. Forcefully finishing animation and continuing with the rest of the sequence.`),l(String(i),n)},1e3)});return R[i]={animation:a,resolve:u,reject:g,promise:I,timeout:v},I};function l(n,a){const{resolve:i,timeout:u}=R[n];clearTimeout(u),delete R[n],delete a.dataset.phnAmId,i()}function t(n,a){return{steps:n.map(i=>i.map(u=>Object.assign(Object.assign({},a),u))),currentStepIndex:0,running:!1}}const p={initialize:function N(n){h=n,h.addEventListener("transitionend",D),h.addEventListener("animationend",D)},play:function T(n){return C.apply(this,arguments)},isPlaying:function f(n){const a=E[n];if(void 0===a)throw new Error(`Sequence ${n} has not been registered`);return void 0!==a.promise},register:function w(n,a){E[n]=a},reset:function y(){Object.keys(E).forEach(n=>delete E[n])}}},205:(b,P,d)=>{d.d(P,{A:()=>o});const o={OPEN_DOUBLE_DRAWER:"openDoubleDrawer",CLOSE_DOUBLE_DRAWER:"closeDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER:"transitionSameLevelDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER_REVERSE:"transitionSameLevelDoubleDrawerReverse",TRANSITION_NEXT_LEVEL_DOUBLE_DRAWER:"transitionNextLevelDoubleDrawer",TRANSITION_PREVIOUS_LEVEL_DOUBLE_DRAWER:"transitionPreviousLevelDoubleDrawer",OPEN_SINGLE_DRAWER:"openSingleDrawer",CLOSE_SINGLE_DRAWER:"closeSingleDrawer",TRANSITION_NEXT_LEVEL_SINGLE_DRAWER:"transitionNextLevelSingleDrawer",TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER:"transitionPreviousLevelSingleDrawer"}},519:(b,P,d)=>{d.d(P,{g:()=>e});var o=d(681);function e(R){const E=[];return R?.querySelectorAll(o.F).forEach(h=>{const L=(0,o.r)(h);null!==L&&E.push(L)}),E}},685:(b,P,d)=>{d.d(P,{a:()=>C,b:()=>O,c:()=>M,d:()=>N,e:()=>L,f:()=>y,g:()=>w});var o=d(195),e=d(598),R=d(499),E=d(681),h=d(250);function L(c,D,r,s,m,_){var l,f;const{dealer:t,models:p,myPorsche:n,vehiclePurchase:a,shop:i,experience:u,services:g}=c,{savedDealerCookie:v,ppnDealers:I}=D,{app:A}=o.n.state,S=null!==v?I[v.id]:void 0;let k;"en-SG"===r&&t.search.outboundLink&&(k=null===(l=t.search.outboundLink)||void 0===l?void 0:l.link);const K=[e.a.DEALER_SEARCH];void 0!==S&&1!=(null===(f=R.d.state.results)||void 0===f?void 0:f.length)&&K.push((0,e.c)(S.ppnDealer.id));const H=[{elementId:e.a.MODELS,routingKeys:[e.a.MODELS],analyticsId:p.id,text:p.text},{elementId:e.a.VEHICLE_PURCHASE,routingKeys:[e.a.VEHICLE_PURCHASE],analyticsId:a.id,text:a.text},{elementId:e.a.SERVICES,routingKeys:[e.a.SERVICES],analyticsId:g.id,text:g.text},{elementId:e.a.EXPERIENCE,routingKeys:[e.a.EXPERIENCE],analyticsId:u.id,text:u.text}],U={elementId:e.a.DEALER_SEARCH,routingKeys:K,analyticsId:t.id,text:t.text,link:k,iconRight:"en-SG"===r&&t.search.outboundLink?"external":"arrow-head-right"};if(null!==i&&""!==i.text&&H.splice(2,0,{elementId:e.a.SHOP,routingKeys:[e.a.SHOP],analyticsId:i.id,text:i.text,link:A!==E.A.shop?i.link:void 0,datalayerEventAction:o.E.NAVIGATION_LINK_CLICK,iconRight:"external"}),function T(c,D){try{const{country:r}=(0,o.s)(c),s=!(0,o.i)(r)&&D;return(h.f.isDealerSearchChinaEnabled()||"CN"!==r)&&s}catch{}return!0}(r,_)){const x="en"===(0,o.s)(r).language?S?.ppnDealer.name:(0,E.i)(S?.ppnDealer.nameLocalized)?S?.ppnDealer.nameLocalized:S?.ppnDealer.name;(0,E.i)(x)&&(U.subtext=x)}else U.link=t.search.map.link,U.onClick=void 0;if(H.push(U),null!==n){const x=(0,E.I)(s),j=x?(0,E.x)(s,n.loggedInFallback):void 0;H.push({elementId:e.a.MY_PORSCHE,routingKeys:[e.a.MY_PORSCHE],analyticsId:n.id,text:n.text,subtext:j,showIconModifier:x&&m>0})}return H}function N(c,D,r,s,m,_,l){const f=(0,e.f)(_);switch(f){case _:break;case e.a.MODELS:return c.models.series.map(t=>({elementId:(0,e.h)(t.id),routingKeys:[(0,e.h)(t.id)],analyticsId:t.id,text:t.name,subtext:t.tags.map(p=>p.text).join(" | "),renderSignatures:!0,datalayerEventAction:o.E.MODEL_RANGE_CLICK}));case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const t=(0,e.r)(_),p=y(c,t,f);if(null!==p)return p.children.map(n=>({elementId:(0,e.e)(t,n.id),routingKeys:[(0,e.e)(t,n.id)],analyticsId:n.id,text:n.text,link:n.link}));break}}return L(c,D,r,s,m,l)}function w(c){switch((0,e.f)(c)){case c:break;case e.a.DEALER_SEARCH:return e.a.DEALER_SEARCH;case e.a.MODELS:return e.a.MODELS;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const r=(0,e.r)(c);return(0,e.g)(r)}}return e.a.MAIN_MENU}function y(c,D,r){const{vehiclePurchase:s,experience:m,shop:_,legacyMore:l,services:f}=c,t={[e.a.VEHICLE_PURCHASE]:s,[e.a.EXPERIENCE]:m,[e.a.SHOP]:_,[e.a.MORE]:l,[e.a.SERVICES]:f}[r];if(null==t)return null;(0,E.i)(t.experienceName)&&(t.children=(0,R.a)().executeContentChange(t));const p=(0,e.g)(D);return p===r?t:(0,o.k)(t,p)}function C(c,D){if(!(0,E.i)(D))return"";const r=(0,e.f)(D);switch(r){case e.a.MODELS:return c.models.text;case e.a.DEALER_SEARCH:return 1===c.dealer.numberOfDealers?"":c.dealer.details.backToSearch;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.MORE:case e.a.EXPERIENCE:{const s=y(o.b.state,D,r);if(null!==s)return s.text;break}}return""}function O(c,D,r){var s;const{dealer:m,myPorsche:_,models:l,vehiclePurchase:f,experience:t,shop:p,legacyMore:n,services:a}=c;let i;switch(r){case e.a.MORE:case e.a.SHOP:case e.a.EXPERIENCE:case e.a.SERVICES:case e.a.VEHICLE_PURCHASE:{if(i={[e.a.VEHICLE_PURCHASE]:f,[e.a.EXPERIENCE]:t,[e.a.SHOP]:p,[e.a.MORE]:n,[e.a.SERVICES]:a}[r],void 0===i)return"";const u=(0,e.g)(D);return u===r?i?.text:null===(s=(0,o.k)(i,u))||void 0===s?void 0:s.text}case e.a.SERIES:case e.a.MODELS:{const u=(0,e.g)(D);return i=l.series.find(g=>u===g.id),void 0===i?l.text:i?.id}case e.a.DEALER_SEARCH:return m.search.text;case e.a.MY_PORSCHE:return _?.text}return""}function M(c,D,r){const{myPorsche:s,models:m}=o.b.state,{loggedInState:_}=o.n.state;if(c===e.a.MY_PORSCHE)return(0,E.I)(_)?(0,E.x)(_,s?.loggedInFallback||""):"";if(c===e.a.DEALER_SEARCH){const{savedDealerCookie:l,ppnDealers:f}=R.d.state,t=null!==l?f[l.id]:void 0,p=r&&"en"===(0,o.s)(r).language?t?.ppnDealer.name:(0,E.i)(t?.ppnDealer.nameLocalized)?t?.ppnDealer.nameLocalized:t?.ppnDealer.name;return l?p:""}if(c===e.a.MODELS&&(0,E.i)(D)){const l=(0,e.g)(D),f=m.series.find(t=>l===t.id);if(f)return f.tags.map(t=>t.text).join(" | ")}return""}},554:(b,P,d)=>{d.d(P,{r:()=>e});const e=(0,d(195).e)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})}}]);