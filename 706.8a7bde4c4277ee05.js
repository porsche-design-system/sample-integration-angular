"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[706],{233:(G,I,d)=>{d.d(I,{a:()=>M,m:()=>P});var c=d(861),u=d(681);const w={},E={};let x=null;function D(){return(D=(0,c.Z)(function*(e){const n=E[e];return void 0===n?new Promise((r,i)=>i(new Error(`Sequence ${e} has not been registered`))):(n.running||(n.promise=new Promise((r,i)=>{n.resolve=()=>{n.running=!1,r()},n.reject=l=>{n.running=!1,i(l)},n.running=!0,N(n)})),n.promise)})).apply(this,arguments)}function N(e){return O.apply(this,arguments)}function O(){return(O=(0,c.Z)(function*(e){var n;if(e.currentStepIndex>=e.steps.length)return void function g(e){var n;e.currentStepIndex=0,null===(n=e.resolve)||void 0===n||n.call(e,null),e.promise=void 0}(e);const r=e.steps[e.currentStepIndex],i=[];for(const l of r)i.push(C(l));try{yield Promise.all(i)}catch(l){return void(null===(n=e.reject)||void 0===n||n.call(e,l))}e.currentStepIndex+=1,setTimeout(()=>N(e),0)})).apply(this,arguments)}function R(e){const n=(0,u.r)(e.target);if(null===n)throw new Error(`${e.type} event target is null`);const r=n.dataset.phnAmId;null!=r&&v(r,n)}function C(e){return L.apply(this,arguments)}function L(){return(L=(0,c.Z)(function*({onStart:e,onEnd:n,animation:r,elementSelector:i}){if(null===x)throw new Error("No root element present");if(e){const p=e();(0,u.q)(p)&&(yield p)}const l=Array.from(x.querySelectorAll(i)),h=[];for(const p of l){const m=A(S)(p,r);h.push(m)}if(yield Promise.all(h),n){const p=n();(0,u.q)(p)&&(yield p)}})).apply(this,arguments)}function A(e){return function(){var n=(0,c.Z)(function*(r,i){const{cleanUpBeforeAnimation:l,cleanUpAfterAnimation:h}=i,p=e(r,i);if("function"==typeof l){const m=l(r);(0,u.q)(m)&&(yield m)}if(yield p,"function"==typeof h){const m=h(r);(0,u.q)(m)&&(yield m)}!1!==h&&r.classList.remove(i.className)});return function(r,i){return n.apply(this,arguments)}}()}const S=(e,n)=>{const r=Math.floor(1e7*Math.random());let i,l,h;e.classList.add(n.className),e.dataset.phnAmId=r.toString();const p=new Promise((m,F)=>{i=m,l=F,h=setTimeout(()=>{console.warn(`Animation with className ${n.className} didn't finish after 1000ms. Forcefully finishing animation and continuing with the rest of the sequence.`),v(String(r),e)},1e3)});return w[r]={animation:n,resolve:i,reject:l,promise:p,timeout:h},p};function v(e,n){const{resolve:r,timeout:i}=w[e];clearTimeout(i),delete w[e],delete n.dataset.phnAmId,r()}function P(e,n){return{steps:e.map(r=>r.map(i=>Object.assign(Object.assign({},n),i))),currentStepIndex:0,running:!1}}const M={initialize:function k(e){x=e,x.addEventListener("transitionend",R),x.addEventListener("animationend",R)},play:function y(e){return D.apply(this,arguments)},isPlaying:function U(e){const n=E[e];if(void 0===n)throw new Error(`Sequence ${e} has not been registered`);return void 0!==n.promise},register:function a(e,n){E[e]=n},reset:function _(){Object.keys(E).forEach(e=>delete E[e])}}},706:(G,I,d)=>{d.r(I),d.d(I,{contextual_drawer:()=>k});var c=d(702),u=d(233),w=d(681);const k=class{constructor(a){(0,c.r)(this,a),this.openBackdrop=(0,c.c)(this,"openBackdrop",7),this.phnContextualDrawerStatus=(0,c.c)(this,"phnContextualDrawerStatus",7),this.isDrawerOpened=!1}closeContextualDrawer(){this.closeDrawer()}openContextualDrawer(){u.a.play("openContextualDrawer")}closeDrawer(){u.a.play("closeContextualDrawer").then(()=>{this.phnContextualDrawerStatus.emit({status:w.y.finishClosing}),this.isDrawerOpened=!1})}componentDidLoad(){(({onStartOpening:a,onFinishOpening:_})=>{u.a.register("openContextualDrawer",(0,u.m)([[{onStart:a,elementSelector:"contextual-drawer",animation:{className:"slide-in-from-left",cleanUpAfterAnimation:y=>{y.style.left="0px"}}},{onEnd:_,elementSelector:".contextual-drawer-backdrop",animation:{className:"fade-in-animation",cleanUpAfterAnimation:y=>{y.style.backgroundColor="rgba(0, 0, 0, 0.6)",y.style.opacity="1"}}}]]))})({onStartOpening:()=>{this.phnContextualDrawerStatus.emit({status:w.y.startOpening}),this.isDrawerOpened=!0;const a=document.getElementById("contextual-drawer-header");a&&(a.style.display="")},onFinishOpening:()=>{this.phnContextualDrawerStatus.emit({status:w.y.finishOpening})}}),(({onStartClosing:a})=>{u.a.register("closeContextualDrawer",(0,u.m)([[{onStart:a,elementSelector:"contextual-drawer",animation:{className:"slide-out-to-left",cleanUpBeforeAnimation:_=>{_.style.left=""}}},{elementSelector:".contextual-drawer-backdrop",animation:{className:"fade-out-animation",cleanUpBeforeAnimation:_=>{_.style.backgroundColor="",_.style.opacity=""}}}]]))})({onStartClosing:()=>{this.phnContextualDrawerStatus.emit({status:w.y.startClosing})}})}render(){return(0,c.h)(c.H,{style:{display:this.isDrawerOpened?"":"none"}},(0,c.h)("phn-p-button",{variant:"secondary",className:"close-button",theme:"dark","hide-label":"true",icon:"close","aria-label":"close modal dialog",onClick:()=>{this.closeDrawer()}}),(0,c.h)("div",{class:"contextual-drawer",id:"contextual-drawer"},(0,c.h)("div",{slot:"contextual_drawer_header"},(0,c.h)("slot",{name:"contextual_drawer_header"}))),(0,c.h)("div",{"aria-hidden":"true",class:"contextual-drawer-backdrop",onClick:()=>{this.closeDrawer()}}))}};k.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-contextual-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-contextual-drawer{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-contextual-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-contextual-drawer{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-contextual-drawer{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-contextual-drawer{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-contextual-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-contextual-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-contextual-drawer{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-contextual-drawer{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-contextual-drawer{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-contextual-drawer{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-contextual-drawer-h{float:right;left:-1000px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;height:100vh;z-index:301}.slide-in-from-left.sc-contextual-drawer-h{-webkit-animation:slide-in-from-left-absolute 600ms;animation:slide-in-from-left-absolute 600ms}.slide-out-to-left.sc-contextual-drawer-h{animation:slide-in-from-left-absolute 600ms reverse}@media (min-width: 0px) and (max-width: 759px){.sc-contextual-drawer-h{width:100%}}.sc-contextual-drawer-h .contextual-drawer-backdrop.sc-contextual-drawer{position:fixed;z-index:300;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0);opacity:0;cursor:pointer;backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px)}.sc-contextual-drawer-h .contextual-drawer-backdrop.fade-in-animation.sc-contextual-drawer{-webkit-animation:fade-in-animation 400ms;animation:fade-in-animation 400ms}.sc-contextual-drawer-h .contextual-drawer-backdrop.fade-out-animation.sc-contextual-drawer{animation:fade-in-animation 400ms reverse}.sc-contextual-drawer-h .close-button.sc-contextual-drawer{position:absolute;right:-4.75rem;z-index:301;width:3rem;height:3rem;margin-top:1.75rem;cursor:pointer}@media (min-width: 0px) and (max-width: 759px){.sc-contextual-drawer-h .close-button.sc-contextual-drawer{display:none}}.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{background-color:#EEEFF2;position:relative;overflow-y:auto;overflow-x:hidden;width:20.625rem;border-radius:0 4px 4px 0;height:100vh;z-index:301}@media (min-width: 0px) and (max-width: 759px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:100%;border-radius:0;background-color:#FFFFFF}}@media (min-width: 1000px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:21rem}}@media (min-width: 1300px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:25.3125rem}}@media (min-width: 1920px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:37.875rem}}"},681:(G,I,d)=>{d.d(I,{A:()=>p,B:()=>mt,C:()=>i,D:()=>U,E:()=>dt,F:()=>P,G:()=>h,H:()=>nt,I:()=>J,J:()=>X,K:()=>ct,L:()=>A,M:()=>r,N:()=>R,O:()=>n,P:()=>e,S:()=>M,V:()=>v,a:()=>F,b:()=>z,c:()=>l,d:()=>tt,e:()=>L,f:()=>g,g:()=>$,h:()=>pt,i:()=>j,j:()=>lt,k:()=>ut,l:()=>et,m:()=>Z,n:()=>V,o:()=>a,p:()=>at,q:()=>st,r:()=>H,s:()=>it,t:()=>K,u:()=>C,v:()=>wt,w:()=>ft,x:()=>q,y:()=>m,z:()=>ht});const a={base:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},O={test:{CONTENT_URL:"http://content/url",SHOP_CONTENT_URL:"http://shop-content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",SHOP_CONTENT_URL:"https://shop.porsche.com/api/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://www.porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-nav.porsche.services"}},g={hero:"hero",navbar:"navbar",transparent:"transparent"},R={light:"light",dark:"dark"},C="production",L="loggedIn",A="loginOrRegister",S="loading",v="3.2.6",U=0,P='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button, input.autofocus, phn-p-inline-notification',M="nav_saved_dealer",e="by geolocation",n="by market",r=7776e6,i="porsche.com",l="auth-iframe-header-navigation",h={Model:"model-variant",Level1:"level1-variant",DealerDetails:"dealer-details-variant"},p={shop:"shop",pcom:"pcom",default:"default"};var m=function(t){return t.startOpening="startOpening",t.startClosing="startClosing",t.finishOpening="finishOpening",t.finishClosing="finishClosing",t}(m||{});function F(t){return O[t]}function K(t,o){return t&&"object"==typeof t&&o in t}function j(t){return"string"==typeof t&&t.length>0}function $(t){return"string"==typeof t?t:""}function H(t){return t instanceof HTMLElement?t:null}function V(t){var o;null===(o=H(t))||void 0===o||o.focus()}function X(t){return t instanceof HTMLInputElement?t:null}function Z(t){return 0===t.x&&0===t.y}function J(t){return!function W(t){return t===S}(t)&&!function Q(t){return t===A}(t)}function q(t,o){return t===L?o:t}function z(t){return Object.entries(t).filter(o=>void 0!==o[1]).map(([o,s])=>[o,j(s)?s:s.toString()]).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}function tt(...t){return t.join("---")}function et(t){return t>=a.s}function nt(t){switch(t){case a.xxl:case a.xl:return 1920;case a.l:return 1360;case a.m:return 1024;case a.s:return 760;case a.xs:return 390;default:return 320}}function it(t){return Object.keys(p).includes(t)?t:p.default}function at(t,o){if(function ot(t){return Object.keys(g).includes(t)?t:g.navbar}(t)===g.navbar)return g.navbar;const f=function rt(t){return Object.keys(R).includes(t)?t:R.light}(o);return`${t}_${f}`}function st(t){return!!t&&"function"==typeof t.then&&"Promise"===t[Symbol.toStringTag]}function ct(t,o){return`${t}${t.includes("?")?"&":"?"}${z(o)}`}function pt(t,o){let s=t;const f=[];for(const b of o){if(s=s.children.find(B=>B.id===b),null==s)break;f.push(b)}return f}function lt(t,o){return["vehiclePurchase","shop","experience","services"].includes(o)&&void 0!==t[o]?t[o]:null}function ut(t){const o=[t[0]];for(let s=1;s<t.length;s++)o.push(`${o[s-1]}/${t[s]}`);return o}function mt(t){return["718","911","Taycan","Macan","Panamera","Cayenne"].includes(t)}function dt(t){const o=t.toLowerCase();return["718","911","macan"].includes(o)}const ht=(t,o)=>o===g.transparent||o===g.hero?t:"light";function ft(t){return t.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`)}function wt(t,o,s=((f,b)=>f[b])){return Object.entries(o).reduce((f,[b,B])=>{const Y=s(t,b);return f[b]="string"==typeof Y?Y:B,f},{})}}}]);