"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[331],{5276:(N,R,r)=>{r.d(R,{a:()=>k});var l=r(1513),e=r(21),f=r(3812),m=r(5201);const S={},k={setDrawerType:function u(P){S.drawerType=P},calculateDisplayElementId:function T(P){const{drawerType:w}=S,i=((0,f.i)(P)?(0,l.b)(P):e.r.state.routingKeyHistory[e.r.state.routingKeyPointer])||"",d=(0,l.g)(i),c=(0,l.d)(i),E=c-1;if(!(0,f.i)(i))return"level0";const A=(0,f.i)(i)?`level${c}-${d}`:`level${c-1}-unknown`;return"doubleDrawer"===w?""===i?`level${E}-unknown_level${c}-unknown`:`level${E}-${(0,m.g)(i)}_${A}`:A},calculateDisplayElementType:function C(P,w,i){const{drawerType:d}=S,c=(0,l.d)(P);if("doubleDrawer"===d){let E=c;return i&&(E-=1),`level${E}_${w}`}return(0,f.i)(P)?`level${c}_${w}`:`level${c-1}_${w}`},getModelName:function v(P){const w=P.link.split("/"),i=w[w.length-1];let d;return d=""===i?void 0===w[w.length-2]?"":w[w.length-2].split("-").join(" "):i.split("-").join(" "),d},getModelTargetElement:function I(P,w){if(P.includes("models"))return`level${(0,l.d)(P)}_${w.toLowerCase()}`}}},5054:(N,R,r)=>{r.d(R,{a:()=>re,m:()=>ne});var l=r(5861),e=r(3812),f=r(6671);const x={slideOutToLeftRelative:(t,n,{from:o=0,to:a=-100})=>{t.style.left=`calc(${n*a+o}%)`,t.style.position="relative"},slideInFromRightRelative:(t,n,{from:o=-100,to:a=0})=>{t.style.right=`calc(${(1-n)*o+a}%)`,t.style.position="relative"},slideInFromLeftRelative:(t,n,{from:o=-100,to:a=0})=>{t.style.left=`calc(${(1-n)*o+a}%)`,t.style.position="relative"},slideOutToRightRelative:(t,n,{from:o=0,to:a=-100})=>{t.style.right=`calc(${n*a+o}%)`,t.style.position="relative"},shrinkElement:(t,n,{to:o=100})=>{t.style.width=(1-n)*o+"%"},growElement:(t,n,{to:o=100})=>{t.style.width=n*o+"%"},slideInFromRight:(t,n,{from:o=-100,to:a=0})=>{t.style.right=`${(1-n)*o+a}px`},slideInFromLeft:(t,n,{from:o=-100,to:a=0})=>{t.style.left=`${(1-n)*o+a}px`},slideOutToRight:(t,n,{from:o=0,to:a=-100})=>{t.style.right=`${n*a+o}px`},slideOutToLeft:(t,n,{from:o=0,to:a=-100})=>{t.style.left=`${n*a+o}px`},fadeOut:(t,n,{from:o=1,to:a=0})=>{t.style.opacity=""+((1-n)*o+n*a)},fadeIn:(t,n,{from:o=0,to:a=1})=>{t.style.opacity=""+(n*a+(n-1)*o)},fadeInBackdrop:(t,n,{from:o=0,to:a=1})=>{t.style.backgroundColor=`rgba(0, 0, 0, ${n*a+(n-1)*o})`,t.style.opacity=`${n+(n-1)*o}`},fadeOutBackdrop:(t,n,{from:o=1,to:a=0})=>{t.style.backgroundColor=`rgba(0, 0, 0, ${(1-n)*o+n*a})`,t.style.opacity=""+(1-n+n*a)},slideInFromRightFixed:(t,n,{from:o=-100,to:a=0})=>{t.style.right=`calc(${(1-n)*o+a}%)`,t.style.position="fixed"},slideOutToRightFixed:(t,n,{from:o=0,to:a=-100})=>{t.style.right=`calc(${n*a+o}%)`,t.style.position="fixed"},slideInFromLeftFixed:(t,n,{from:o=-100,to:a=0})=>{t.style.left=`calc(${(1-n)*o+a}%)`,t.style.position="fixed"},slideOutToLeftFixed:(t,n,{from:o=0,to:a=-100})=>{t.style.left=`calc(${n*a+o}%)`,t.style.position="fixed"}},g={easeInOutSin:t=>-(Math.cos(Math.PI*t)-1)/2,easeInOutQuad:t=>t<.5?2*t/2:(2-2*(1-t))/2,linear:t=>t<0||t>1?Math.round(t):t};function O(t,n){const{duration:o=300,cleanUpAfterAnimation:a=!1}=n,b=function(t,n){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(o[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var b=0;for(a=Object.getOwnPropertySymbols(t);b<a.length;b++)n.indexOf(a[b])<0&&Object.prototype.propertyIsEnumerable.call(t,a[b])&&(o[a[b]]=t[a[b]])}return o}(n,["duration","cleanUpAfterAnimation"]);return new Promise($=>{let K;const Z=setTimeout(()=>{cancelAnimationFrame(K),Y()},o+50);function Y(){if(J(t,1,b),clearTimeout(Z),"function"==typeof a){const F=a(t);if((0,e.r)(F))return void F.then(()=>$())}else!0===a&&(t=>{t.removeAttribute("style")})(t);$()}const ie=performance.now(),J=(t=>x[t])(b.name);K=f.w.requestAnimationFrame(function Q(F){let V=(0,g[b.timingFunction||"linear"])((F-ie)/o);V=Math.round(1e3*(V+Number.EPSILON))/1e3;const oe=V<1;if(V>=1)return Y();J(t,V,b),oe&&(K=f.w.requestAnimationFrame(Q))})})}const y={};let D=null;function W(){return(W=(0,l.Z)(function*(t){const n=y[t];return void 0===n?new Promise((o,a)=>a(new Error(`Sequence ${t} has not been registered`))):(n.running||(n.promise=new Promise((o,a)=>{n.resolve=()=>{n.running=!1,o()},n.reject=b=>{n.running=!1,a(b)},n.running=!0,X(n)})),n.promise)})).apply(this,arguments)}function q(t){var n;t.currentStepIndex=0,null===(n=t.resolve)||void 0===n||n.call(t,null),t.promise=void 0}function X(t){return z.apply(this,arguments)}function z(){return(z=(0,l.Z)(function*(t){var n;if(t.currentStepIndex>=t.steps.length)return void q(t);const o=t.steps[t.currentStepIndex],a=[];for(const b of o)a.push(ee(b));try{yield Promise.all(a)}catch(b){return void(null===(n=t.reject)||void 0===n||n.call(t,b))}t.currentStepIndex+=1,setTimeout(()=>X(t),0)})).apply(this,arguments)}function ee(t){return G.apply(this,arguments)}function G(){return(G=(0,l.Z)(function*({onStart:t,onEnd:n,animation:o,elementSelector:a}){if(null===D)throw new Error("No root element present");if(t){const K=t();(0,e.r)(K)&&(yield K)}const b=Array.from(D.querySelectorAll(a)),$=[];for(const K of b){const Z=O(K,o);$.push(Z)}if(yield Promise.all($),n){const K=n();(0,e.r)(K)&&(yield K)}})).apply(this,arguments)}function ne(t,n){return{steps:t.map(o=>o.map(a=>Object.assign(Object.assign({},n),a))),currentStepIndex:0,running:!1}}const re={initialize:function U(t){D=t},play:function B(t){return W.apply(this,arguments)},isPlaying:function te(t){const n=y[t];if(void 0===n)throw new Error(`Sequence ${t} has not been registered`);return void 0!==n.promise},register:function j(t,n){y[t]=n},reset:function H(){Object.keys(y).forEach(t=>delete y[t])}}},2391:(N,R,r)=>{r.d(R,{A:()=>l,a:()=>e});const l={OPEN_DOUBLE_DRAWER:"openDoubleDrawer",CLOSE_DOUBLE_DRAWER:"closeDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER:"transitionSameLevelDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER_REVERSE:"transitionSameLevelDoubleDrawerReverse",TRANSITION_NEXT_LEVEL_DOUBLE_DRAWER:"transitionNextLevelDoubleDrawer",TRANSITION_PREVIOUS_LEVEL_DOUBLE_DRAWER:"transitionPreviousLevelDoubleDrawer",OPEN_SINGLE_DRAWER:"openSingleDrawer",CLOSE_SINGLE_DRAWER:"closeSingleDrawer",TRANSITION_NEXT_LEVEL_SINGLE_DRAWER:"transitionNextLevelSingleDrawer",TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER:"transitionPreviousLevelSingleDrawer"},e={highlight:200,drawerContent:250,drawer:400,backdrop:400}},6316:(N,R,r)=>{r.d(R,{d:()=>m});var l=r(8314),e=r(6671),f=r(3812);const m=(0,l.c)({searchTerm:"",results:[],savedDealerCookie:function S(){try{return JSON.parse(e.w.getCookie(f.S))}catch{return null}}(),ppnDealers:{}});m.onChange("savedDealerCookie",u=>{e.w.setCookie(f.S,JSON.stringify(u))})},7540:(N,R,r)=>{r.d(R,{c:()=>u,g:()=>f,i:()=>m});var l=r(5861),e=r(6369);const f=()=>e.f.isOneUiToggleActive()?"default":"pds2";function m(){return S.apply(this,arguments)}function S(){return(S=(0,l.Z)(function*(){if(e.f.isOneUiToggleActive()){const{load:C}=yield r.e(958).then(r.bind(r,8958));C({prefix:"phn"})}else{const{load:C}=yield r.e(613).then(r.bind(r,4613));C({prefix:"phn"})}})).apply(this,arguments)}function u(C){return T.apply(this,arguments)}function T(){return(T=(0,l.Z)(function*(C){let v;if(e.f.isOneUiToggleActive()){const{componentsReady:I}=yield r.e(958).then(r.bind(r,8958));v=I}else{const{componentsReady:I}=yield r.e(613).then(r.bind(r,4613));v=I}yield v(C)})).apply(this,arguments)}},5201:(N,R,r)=>{r.d(R,{a:()=>k,b:()=>P,c:()=>w,d:()=>T,e:()=>u,f:()=>v,g:()=>C});var l=r(6369),e=r(1513),f=r(6316),m=r(3812),S=r(5267);function u(i,d,c,E,A,_){const{dealer:L,models:M,myPorsche:x,vehiclePurchase:s,shop:h,experience:p,services:g}=i,{savedDealerCookie:O,ppnDealers:y}=d,D=null!==O?y[O.id]:void 0,U=[e.a.DEALER_SEARCH];void 0!==D&&U.push((0,e.c)(D.ppnDealer.id));const j=[{elementId:e.a.MODELS,routingKeys:[e.a.MODELS],analyticsId:M.id,text:M.text},{elementId:e.a.VEHICLE_PURCHASE,routingKeys:[e.a.VEHICLE_PURCHASE],analyticsId:s.id,text:s.text},{elementId:e.a.SERVICES,routingKeys:[e.a.SERVICES],analyticsId:g.id,text:g.text},{elementId:e.a.EXPERIENCE,routingKeys:[e.a.EXPERIENCE],analyticsId:p.id,text:p.text}],H={elementId:e.a.DEALER_SEARCH,routingKeys:U,analyticsId:L.id,text:L.text};if(null!==h&&""!==h.text){const B={elementId:e.a.SHOP,routingKeys:[e.a.SHOP],analyticsId:h.id,text:h.text,link:(0,m.i)(h.link)?h.link:void 0,datalayerEventAction:l.E.NAVIGATION_LINK_CLICK,iconRight:"external"};j.splice(2,0,B)}if(function I(i,d){try{const{country:c}=(0,l.s)(i);return"CN"!==c&&!(0,l.i)(c)&&d}catch{}return!0}(c,_)){const B=D?.ppnDealer.nameLocalized?D?.ppnDealer.nameLocalized:D?.ppnDealer.name;(0,m.i)(B)&&(H.subtext=B)}else H.link=L.search.map.link,H.onClick=void 0;if(j.push(H),null!==x){const B=(0,m.I)(E),W=B?(0,m.w)(E,x.loggedInFallback):void 0;j.push({elementId:e.a.MY_PORSCHE,routingKeys:[e.a.MY_PORSCHE],analyticsId:x.id,text:x.text,subtext:W,showIconModifier:B&&A>0})}return j}function T(i,d,c,E,A,_,L){const M=l.f.isOneUiToggleActive(),x=(0,e.f)(_);switch(x){case _:break;case e.a.MODELS:return i.models.series.map(s=>({elementId:(0,e.h)(s.id),routingKeys:[(0,e.h)(s.id)],analyticsId:s.id,text:s.name,subtext:s.tags.map(h=>h.text).join(" | "),renderSignatures:M,datalayerEventAction:l.E.MODEL_RANGE_CLICK}));case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const s=(0,e.r)(_),h=v(i,s,x);if(null!==h)return h.children.map(p=>({elementId:(0,e.e)(s,p.id),routingKeys:[(0,e.e)(s,p.id)],analyticsId:p.id,text:p.text,link:p.link}));break}}return u(i,d,c,E,A,L)}function C(i){switch((0,e.f)(i)){case i:break;case e.a.DEALER_SEARCH:return e.a.DEALER_SEARCH;case e.a.MODELS:return e.a.MODELS;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const c=(0,e.r)(i);return(0,e.g)(c)}}return e.a.MAIN_MENU}function v(i,d,c){const{vehiclePurchase:E,experience:A,shop:_,legacyMore:L,services:M}=i,x={[e.a.VEHICLE_PURCHASE]:E,[e.a.EXPERIENCE]:A,[e.a.SHOP]:_,[e.a.MORE]:L,[e.a.SERVICES]:M}[c];if(void 0===x)return null;const s=(0,e.g)(d);return s===c?x:(0,l.d)(x,s)}function k(i,d){if(!(0,m.i)(d))return"";const c=(0,e.f)(d);switch(c){case e.a.MODELS:return i.models.text;case e.a.DEALER_SEARCH:return i.dealer.details.backToSearch;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.MORE:case e.a.EXPERIENCE:{const E=v(l.n.state,d,c);if(null!==E)return E.text;break}}return""}function P(i,d,c){var E;const{dealer:A,myPorsche:_,models:L,vehiclePurchase:M,experience:x,shop:s,legacyMore:h,services:p}=i;let g;switch(c){case e.a.MORE:case e.a.SHOP:case e.a.EXPERIENCE:case e.a.SERVICES:case e.a.VEHICLE_PURCHASE:{if(g={[e.a.VEHICLE_PURCHASE]:M,[e.a.EXPERIENCE]:x,[e.a.SHOP]:s,[e.a.MORE]:h,[e.a.SERVICES]:p}[c],void 0===g)return"";const O=(0,e.g)(d);return O===c?g?.text:null===(E=(0,l.d)(g,O))||void 0===E?void 0:E.text}case e.a.SERIES:case e.a.MODELS:{const O=(0,e.g)(d);return g=L.series.find(y=>O===y.id),void 0===g?L.text:g?.id}case e.a.DEALER_SEARCH:return A.search.text;case e.a.MY_PORSCHE:return _?.text}return""}function w(i,d){const{myPorsche:c,models:E}=l.n.state,{loggedInState:A}=S.n.state;if(i===e.a.MY_PORSCHE)return(0,m.I)(A)?(0,m.w)(A,c?.loggedInFallback||""):"";if(i===e.a.DEALER_SEARCH){const{savedDealerCookie:_,ppnDealers:L}=f.d.state;return _?L[_.id].ppnDealer.name:""}if(i===e.a.MODELS&&(0,m.i)(d)){const _=(0,e.g)(d),L=E.series.find(M=>_===M.id);if(L)return L.tags.map(M=>M.text).join(" | ")}return""}},5267:(N,R,r)=>{r.d(R,{n:()=>f});var l=r(8314),e=r(3812);const f=(0,l.c)({loggedInState:e.L,unreadMessagesCount:e.D,userConsent:!1,env:(0,l.g)(e.v)})},2331:(N,R,r)=>{r.r(R),r.d(R,{phn_single_drawer:()=>x});var l=r(5861),e=r(1502),f=r(1513),m=r(5054),S=r(2257),u=r(3812),T=r(1836),C=r(5201),v=r(6369),I=r(5966),k=r(5276),P=r(7540),w=r(2391);function _({routingKey:s,previousRoutingKey:h,breakpoint:p,locale:g,showBackButton:O,receivedContent:y}){const{menu:D}=v.n.state,U=(0,C.a)(v.n.state,h??"")||D.text;return(0,e.h)(e.F,null,(0,e.h)("div",{class:"bottom-gradient"}),(0,e.h)("div",{class:"drawer-content"},(0,e.h)("phn-drawer-header",{showBackButton:O,backButtonAnalyticsId:D.id,backButtonText:U,activeRoutingKey:s,breakpoint:p,receivedContent:y}),(0,e.h)("phn-router",{activeRoutingKey:s,breakpoint:p,locale:g,receivedContent:y})))}r(6671),r(8314),r(6316),r(5267),r(21);const x=class{constructor(s){(0,e.r)(this,s),this.drawerClosed=(0,e.c)(this,"drawerClosed",7),this.drawerChanged=(0,e.c)(this,"drawerChanged",7),this.drawerStartsClosing=(0,e.c)(this,"drawerStartsClosing",7),this.backdropClosed=(0,e.c)(this,"backdropClosed",7),this.phnDrawerStatus=(0,e.c)(this,"phnDrawerStatus",7),this.focusTimeout=new T.T(0),this.operationPipeline=[],this.breakpoint=void 0,this.locale=void 0,this.usingKeyboard=!1,this.routingKeyHistory=void 0,this.routingKeyPointer=void 0,this.receivedContent=!1,this.pdsMode=(0,P.g)(),this.animatingPointer=-1}handleKeyDown(s){var h;if("Tab"!==s.key)return;const p=(0,u.t)(s.target);if(null===p)return;const g=null!==(h=this.el.querySelectorAll(`.active ${u.F}`))&&void 0!==h?h:null;if(null===g)return;const O=(0,u.t)(g[0]),y=(0,u.t)(g[g.length-1]);return p===O&&s.shiftKey?(s.preventDefault(),void(null!==y&&(0,u.n)(y))):p!==y||s.shiftKey?void 0:(s.preventDefault(),void(null!==O&&(0,u.n)(O)))}handleMobileMenuItemClick(s){(0,I.i)()?s.stopPropagation():(this.sendDataLayerEvent(),this.animatingPointer=this.routingKeyPointer)}handleClickDrawerHeaderClose(s){(0,I.i)()&&s.stopPropagation()}handleClickDrawerHeaderBack(s){(0,I.i)()?s.stopPropagation():this.animatingPointer=this.routingKeyPointer}onTransitionEnd(){var s=this;const h=this.animatingPointer>this.routingKeyPointer?this.routingKeyHistory[this.animatingPointer]:"";this.animatingPointer=this.routingKeyPointer,this.drawerChanged.emit(this.routingKeyPointer<this.routingKeyHistory.length-1),this.focusTimeout.set((0,l.Z)(function*(){s.focusOnActiveDrawer(h)}))}componentDidLoad(){this.sendDataLayerEvent()}componentWillLoad(){(0,I.r)({onAnimationStarts:()=>{this.phnDrawerStatus.emit({status:u.y.startOpening})},onAnimationEnds:()=>{this.onTransitionEnd(),this.phnDrawerStatus.emit({status:u.y.finishOpening})}}),(0,I.a)({onAnimationStarts:()=>{this.phnDrawerStatus.emit({status:u.y.startClosing})},onAnimationEnds:()=>{this.backdropClosed.emit(),this.phnDrawerStatus.emit({status:u.y.finishClosing})}}),(0,I.b)({onAnimationEnds:()=>this.onTransitionEnd()}),(0,I.c)({onAnimationEnds:()=>this.onTransitionEnd()})}focusOnActiveDrawer(s){const h=(0,u.t)(this.el.querySelector(".active .autofocus"));if(null===h)if(this.usingKeyboard){let p=null;(0,u.i)(s)&&(p=(0,u.t)(this.el.querySelector(`.active [data-id="${s}"]`))),null===p&&(p=(0,u.t)(this.el.querySelector(`.active ${u.F}`))),null!==p&&(0,u.n)(p)}else{const p=(0,u.t)(this.el.querySelector(".first-focus"));null!==p&&(0,u.n)(p)}else(0,u.n)(h)}sendDataLayerEvent(){k.a.setDrawerType(v.b.SingleDrawer);const s=this.routingKeyHistory[this.routingKeyPointer];S.g.pushDataLayerEvent(v.E.DRAWER_LOAD,{componentDisplay:{displayElementType:k.a.calculateDisplayElementType(s,v.c.singleDrawer),displayElementId:k.a.calculateDisplayElementId(s),displayElementName:"Single Drawer"}})}disconnectedCallback(){this.focusTimeout.cancel()}componentDidRender(){var s=this;return(0,l.Z)(function*(){const h=[];for(const p of s.operationPipeline){const g=p();(0,u.r)(g)&&h.push(g)}yield Promise.all(h),s.operationPipeline.splice(0,s.operationPipeline.length)})()}render(){var s,h;const p=this.routingKeyPointer>this.animatingPointer,g=this.routingKeyPointer<this.animatingPointer;let O=-1,y=this.routingKeyPointer;p?(O=this.routingKeyPointer,y=this.animatingPointer,y!==f.R.LEVEL_ZERO&&this.operationPipeline.push((0,l.Z)(function*(){m.a.play(w.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER)}))):g&&(O=this.animatingPointer,y!==f.R.LEVEL_ZERO&&this.operationPipeline.push((0,l.Z)(function*(){m.a.play(w.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER)})));const D=null!==(s=this.routingKeyHistory[O])&&void 0!==s?s:"",U=null!==(h=this.routingKeyHistory[y])&&void 0!==h?h:"";return(0,e.h)(e.H,null,(0,u.i)(U)?(0,e.h)("div",{class:"drawer active",key:U},(0,e.h)("span",{class:"first-focus",tabindex:"-1","aria-hidden":"true"}),(0,e.h)(_,{routingKey:U,previousRoutingKey:this.routingKeyHistory[y-1],breakpoint:this.breakpoint,locale:this.locale,showBackButton:y>0,receivedContent:this.receivedContent})):null,(0,u.i)(D)?(0,e.h)("div",{class:"drawer animating",style:p?{right:"-100%"}:{},key:D},(0,e.h)(_,{routingKey:D,previousRoutingKey:this.routingKeyHistory[O-1],breakpoint:this.breakpoint,locale:this.locale,showBackButton:O>0,receivedContent:this.receivedContent})):null)}get el(){return(0,e.g)(this)}};x.style={default:".sc-phn-single-drawer-default-h{display:block}.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default{z-index:301;background-color:#fff;position:fixed;top:0;bottom:0;right:0;width:100vw}.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default .drawer-content.sc-phn-single-drawer-default{overflow-y:auto;height:100vh;width:100vw;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 1.6875rem 6.25rem 1.6875rem}@media (min-width: 480px){.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default .drawer-content.sc-phn-single-drawer-default{padding:0 2.1875rem 6.25rem 2.1875rem}}@media (min-width: 760px){.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default .drawer-content.sc-phn-single-drawer-default{padding:0 3.375rem 6.25rem 3.375rem}}@media (min-width: 1000px){.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default .drawer-content.sc-phn-single-drawer-default{padding:0 2.25rem 6.25rem 2.25rem}}.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default .drawer-content.sc-phn-single-drawer-default phn-drawer-header.sc-phn-single-drawer-default{-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:1.125rem;margin-bottom:1.9375rem}@media (min-width: 480px){.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default .drawer-content.sc-phn-single-drawer-default phn-drawer-header.sc-phn-single-drawer-default{margin-top:2rem;margin-bottom:2.3125rem}}@media (min-width: 760px){.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default .drawer-content.sc-phn-single-drawer-default phn-drawer-header.sc-phn-single-drawer-default{margin-bottom:1.25rem}}.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default .drawer-content.sc-phn-single-drawer-default phn-router.sc-phn-single-drawer-default{padding-bottom:4rem}.sc-phn-single-drawer-default-h .drawer.sc-phn-single-drawer-default .bottom-gradient.sc-phn-single-drawer-default{height:10rem;background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgb(255, 255, 255)));background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(255, 255, 255));opacity:1;position:absolute;width:100%;bottom:0;margin-left:-1.5rem;pointer-events:none;margin-left:0;z-index:1}",pds2:"@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.phn-flex-col.sc-phn-single-drawer-pds2{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-single-drawer-pds2{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-single-drawer-pds2{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-single-drawer-pds2{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-single-drawer-pds2{-ms-flex-pack:justify;justify-content:space-between}.sc-phn-single-drawer-pds2-h{display:block}.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2{z-index:301;background-color:#fff;position:fixed;top:0;bottom:0;right:0;width:100vw}.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2 .drawer-content.sc-phn-single-drawer-pds2{overflow-y:auto;height:100vh;width:100vw;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 1.6875rem 6.25rem 1.6875rem}@media (min-width: 480px){.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2 .drawer-content.sc-phn-single-drawer-pds2{padding:0 2.1875rem 6.25rem 2.1875rem}}@media (min-width: 760px){.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2 .drawer-content.sc-phn-single-drawer-pds2{padding:0 3.375rem 6.25rem 3.375rem}}@media (min-width: 1000px){.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2 .drawer-content.sc-phn-single-drawer-pds2{padding:0 2.25rem 6.25rem 2.25rem}}.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2 .drawer-content.sc-phn-single-drawer-pds2 phn-drawer-header.sc-phn-single-drawer-pds2{-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:1.125rem;margin-bottom:2.25rem}@media (min-width: 480px){.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2 .drawer-content.sc-phn-single-drawer-pds2 phn-drawer-header.sc-phn-single-drawer-pds2{margin-top:2rem;margin-bottom:3.25rem}}@media (min-width: 760px){.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2 .drawer-content.sc-phn-single-drawer-pds2 phn-drawer-header.sc-phn-single-drawer-pds2{margin-bottom:1.25rem}}.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2 .drawer-content.sc-phn-single-drawer-pds2 phn-router.sc-phn-single-drawer-pds2{padding-bottom:4rem}.sc-phn-single-drawer-pds2-h .drawer.sc-phn-single-drawer-pds2 .bottom-gradient.sc-phn-single-drawer-pds2{height:10rem;background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgb(255, 255, 255)));background:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(255, 255, 255));opacity:1;position:absolute;width:100%;bottom:0;margin-left:-1.5rem;pointer-events:none;margin-left:0;z-index:1}"}},21:(N,R,r)=>{r.d(R,{r:()=>e});const e=(0,r(8314).c)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})},1513:(N,R,r)=>{r.d(R,{R:()=>f,a:()=>e,b:()=>w,c:()=>T,d:()=>P,e:()=>m,f:()=>S,g:()=>I,h:()=>u,i:()=>v,j:()=>C,r:()=>k});var l=r(3812);const e={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",SERVICES:"services",MODELS:"models"};var f=(()=>{return(i=f||(f={}))[i.LEVEL_ZERO=-1]="LEVEL_ZERO",i[i.LEVEL_ONE=0]="LEVEL_ONE",i[i.LEVEL_TWO=1]="LEVEL_TWO",f;var i})();function m(...i){return i.reduce((d,c)=>[...d,...(0,l.g)(c).split("/")],[]).filter(Boolean).join("/")}function S(i){if((0,l.i)(i))return Object.values(e).find(d=>i.startsWith(d))}function u(...i){return m(e.MODELS,...i)}function T(...i){return m(e.DEALER_SEARCH,...i)}function C(...i){return m(e.MY_PORSCHE,...i)}function v(...i){return m(e.VEHICLE_PURCHASE,...i)}function I(i){return i.split("/").slice(-1)[0]}function k(i){return i.split("/").slice(0,-1).join("/")}function P(i){switch(S(i)){case e.MAIN_MENU:return 1;case i:return 2;default:return i.split("/").length+1}}function w(i){const d=k(i);return(0,l.i)(d)?d:e.MAIN_MENU}}}]);