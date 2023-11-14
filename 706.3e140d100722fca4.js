"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[706],{661:(H,y,m)=>{m.d(y,{a:()=>B,m:()=>F});var c=m(861),p=m(58);const E={},b={};function x(){return(x=(0,c.Z)(function*(e){const n=b[e];return void 0===n?new Promise((r,i)=>i(new Error(`Sequence ${e} has not been registered`))):(n.running||(n.promise=new Promise((r,i)=>{n.resolve=()=>{n.running=!1,r()},n.reject=l=>{n.running=!1,i(l)},n.running=!0,U(n)})),n.promise)})).apply(this,arguments)}function U(e){return D.apply(this,arguments)}function D(){return(D=(0,c.Z)(function*(e){var n;if(e.currentStepIndex>=e.steps.length)return void function P(e){var n;e.currentStepIndex=0,null===(n=e.resolve)||void 0===n||n.call(e,null),e.promise=void 0}(e);const r=e.steps[e.currentStepIndex],i=[];for(const l of r)i.push(L(l));try{yield Promise.all(i)}catch(l){return void(null===(n=e.reject)||void 0===n||n.call(e,l))}e.currentStepIndex+=1,setTimeout(()=>U(e),0)})).apply(this,arguments)}function _(e){const n=(0,p.t)(e.target);if(null===n)throw new Error(`${e.type} event target is null`);const r=n.dataset.phnAmId;null!=r&&C(r,n)}function L(e){return T.apply(this,arguments)}function T(){return(T=(0,c.Z)(function*({onStart:e,onEnd:n,animation:r,elementSelector:i}){if(e){const u=e();(0,p.q)(u)&&(yield u)}const l=Array.from((0,p.B)().querySelectorAll(i)),h=[];for(const u of l){const f=v(A)(u,r);h.push(f)}if(yield Promise.all(h),n){const u=n();(0,p.q)(u)&&(yield u)}})).apply(this,arguments)}function v(e){return function(){var n=(0,c.Z)(function*(r,i){const{cleanUpBeforeAnimation:l,cleanUpAfterAnimation:h}=i,u=e(r,i);if("function"==typeof l){const f=l(r);(0,p.q)(f)&&(yield f)}if(yield u,"function"==typeof h){const f=h(r);(0,p.q)(f)&&(yield f)}!1!==h&&r.classList.remove(i.className)});return function(r,i){return n.apply(this,arguments)}}()}const A=(e,n)=>{const r=Math.floor(1e7*Math.random());let i,l,h;e.classList.add(n.className),e.dataset.phnAmId=r.toString();const u=new Promise((f,O)=>{i=f,l=O,h=setTimeout(()=>{console.warn(`Animation with className ${n.className} didn't finish after 1000ms. Forcefully finishing animation and continuing with the rest of the sequence.`),C(String(r),e)},1e3)});return E[r]={animation:n,resolve:i,reject:l,promise:u,timeout:h},u};function C(e,n){const{resolve:r,timeout:i}=E[e];clearTimeout(i),delete E[e],delete n.dataset.phnAmId,r()}function F(e,n){return{steps:e.map(r=>r.map(i=>Object.assign(Object.assign({},n),i))),currentStepIndex:0,running:!1}}const B={initialize:function S(){(0,p.B)().addEventListener("transitionend",_),(0,p.B)().addEventListener("animationend",_)},play:function g(e){return x.apply(this,arguments)},isPlaying:function M(e){const n=b[e];if(void 0===n)throw new Error(`Sequence ${e} has not been registered`);return void 0!==n.promise},register:function R(e,n){b[e]=n},reset:function s(){Object.keys(b).forEach(e=>delete b[e])}}},706:(H,y,m)=>{m.r(y),m.d(y,{contextual_drawer:()=>R});var c=m(702),p=m(661),E=m(58);const R=class{constructor(s){(0,c.r)(this,s),this.openBackdrop=(0,c.c)(this,"openBackdrop",7),this.phnContextualDrawerStatus=(0,c.c)(this,"phnContextualDrawerStatus",7),this.isDrawerOpened=!1}closeContextualDrawer(){this.closeDrawer()}openContextualDrawer(){p.a.play("openContextualDrawer")}closeDrawer(){p.a.play("closeContextualDrawer").then(()=>{this.phnContextualDrawerStatus.emit({status:E.F.finishClosing}),this.isDrawerOpened=!1})}componentDidLoad(){(({onStartOpening:s,onFinishOpening:g})=>{p.a.register("openContextualDrawer",(0,p.m)([[{onStart:s,elementSelector:"contextual-drawer",animation:{className:"slide-in-from-left",cleanUpAfterAnimation:x=>{x.style.left="0px"}}},{onEnd:g,elementSelector:".contextual-drawer-backdrop",animation:{className:"fade-in-animation",cleanUpAfterAnimation:x=>{x.style.backgroundColor="rgba(0, 0, 0, 0.6)",x.style.opacity="1"}}}]]))})({onStartOpening:()=>{this.phnContextualDrawerStatus.emit({status:E.F.startOpening}),this.isDrawerOpened=!0;const s=document.getElementById("contextual-drawer-header");s&&(s.style.display="")},onFinishOpening:()=>{this.phnContextualDrawerStatus.emit({status:E.F.finishOpening})}}),(({onStartClosing:s})=>{p.a.register("closeContextualDrawer",(0,p.m)([[{onStart:s,elementSelector:"contextual-drawer",animation:{className:"slide-out-to-left",cleanUpBeforeAnimation:g=>{g.style.left=""}}},{elementSelector:".contextual-drawer-backdrop",animation:{className:"fade-out-animation",cleanUpBeforeAnimation:g=>{g.style.backgroundColor="",g.style.opacity=""}}}]]))})({onStartClosing:()=>{this.phnContextualDrawerStatus.emit({status:E.F.startClosing})}})}render(){return(0,c.h)(c.H,{style:{display:this.isDrawerOpened?"":"none"}},(0,c.h)("phn-p-button",{variant:"secondary",className:"close-button",theme:"dark","hide-label":"true",icon:"close","aria-label":"close modal dialog",onClick:()=>{this.closeDrawer()}}),(0,c.h)("div",{class:"contextual-drawer",id:"contextual-drawer"},(0,c.h)("div",{slot:"contextual_drawer_header"},(0,c.h)("slot",{name:"contextual_drawer_header"}))),(0,c.h)("div",{"aria-hidden":"true",class:"contextual-drawer-backdrop",onClick:()=>{this.closeDrawer()}}))}};R.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-contextual-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-contextual-drawer{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-contextual-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-contextual-drawer{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-contextual-drawer{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-contextual-drawer{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-contextual-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-contextual-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-contextual-drawer{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-contextual-drawer{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-contextual-drawer{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-contextual-drawer{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-contextual-drawer-h{float:right;left:-1000px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;height:100vh;z-index:301}.slide-in-from-left.sc-contextual-drawer-h{-webkit-animation:slide-in-from-left-absolute 600ms;animation:slide-in-from-left-absolute 600ms}.slide-out-to-left.sc-contextual-drawer-h{animation:slide-in-from-left-absolute 600ms reverse}@media (min-width: 0px) and (max-width: 759px){.sc-contextual-drawer-h{width:100%}}.sc-contextual-drawer-h .contextual-drawer-backdrop.sc-contextual-drawer{position:fixed;z-index:300;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0);opacity:0;cursor:pointer;backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px)}.sc-contextual-drawer-h .contextual-drawer-backdrop.fade-in-animation.sc-contextual-drawer{-webkit-animation:fade-in-animation 400ms;animation:fade-in-animation 400ms}.sc-contextual-drawer-h .contextual-drawer-backdrop.fade-out-animation.sc-contextual-drawer{animation:fade-in-animation 400ms reverse}.sc-contextual-drawer-h .close-button.sc-contextual-drawer{position:absolute;right:-4.75rem;z-index:301;width:3rem;height:3rem;margin-top:1.75rem;cursor:pointer}@media (min-width: 0px) and (max-width: 759px){.sc-contextual-drawer-h .close-button.sc-contextual-drawer{display:none}}.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{background-color:#EEEFF2;position:relative;overflow-y:auto;overflow-x:hidden;width:20.625rem;border-radius:0 4px 4px 0;height:100vh;z-index:301}@media (min-width: 0px) and (max-width: 759px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:100%;border-radius:0;background-color:#FFFFFF}}@media (min-width: 1000px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:21rem}}@media (min-width: 1300px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:25.3125rem}}@media (min-width: 1920px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:37.875rem}}"},58:(H,y,m)=>{m.d(y,{A:()=>O,B:()=>z,C:()=>l,D:()=>F,E:()=>It,F:()=>Y,G:()=>B,H:()=>xt,I:()=>rt,J:()=>K,K:()=>Et,L:()=>A,M:()=>i,N:()=>L,O:()=>gt,P:()=>u,Q:()=>ct,R:()=>tt,S:()=>e,T:()=>ht,U:()=>r,V:()=>M,W:()=>n,a:()=>W,b:()=>X,c:()=>h,d:()=>v,e:()=>f,f:()=>_,g:()=>J,h:()=>ft,i:()=>$,j:()=>_t,k:()=>wt,l:()=>st,m:()=>et,n:()=>q,o:()=>s,p:()=>dt,q:()=>mt,r:()=>Z,s:()=>ut,t:()=>V,u:()=>Q,v:()=>T,w:()=>at,x:()=>yt,y:()=>bt,z:()=>it});const s={base:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},P={test:{CONTENT_URL:"http://content/url",SHOP_CONTENT_URL:"http://shop-content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",SHOP_CONTENT_URL:"https://shop.porsche.com/api/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://www.porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-nav.porsche.services"}},_={hero:"hero",navbar:"navbar",transparent:"transparent"},L={light:"light",dark:"dark"},T="production",v="loggedIn",A="loginOrRegister",C="loading",M="3.3.0",F=0,B='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button, input.autofocus, phn-p-inline-notification',e="nav_saved_dealer",n="by geolocation",r="by market",i=7776e6,l="porsche.com",h="auth-iframe-header-navigation",u={Model:"model-variant",Level1:"level1-variant",DealerDetails:"dealer-details-variant"},f="",O={shop:"shop",pcom:"pcom",default:"default"};var Y=function(t){return t.startOpening="startOpening",t.startClosing="startClosing",t.finishOpening="finishOpening",t.finishClosing="finishClosing",t}(Y||{});let G=null;function z(){if(null===G)throw new Error("No root element present");return G}function Z(t){G=t}function K(t){return z().querySelector(t)}function W(t){return P[t]}function Q(t,o){return t&&"object"==typeof t&&o in t}function $(t){return"string"==typeof t&&t.length>0}function J(t){return"string"==typeof t?t:""}function V(t){return t instanceof HTMLElement?t:null}function q(t){var o;null===(o=V(t))||void 0===o||o.focus()}function tt(t){return t instanceof HTMLInputElement?t:null}function et(t){return 0===t.x&&0===t.y}function rt(t){return!function nt(t){return t===C}(t)&&!function ot(t){return t===A}(t)}function it(t,o){return t===v?o:t}function X(t){return Object.entries(t).filter(o=>void 0!==o[1]).map(([o,a])=>[o,$(a)?a:a.toString()]).map(([o,a])=>`${encodeURIComponent(o)}=${encodeURIComponent(a)}`).join("&")}function at(...t){return t.join("---")}function st(t){return t>=s.s}function ct(t){switch(t){case s.xxl:case s.xl:return 1920;case s.l:return 1360;case s.m:return 1024;case s.s:return 760;case s.xs:return 390;default:return 320}}function ut(t){return Object.keys(O).includes(t)?t:O.default}function dt(t,o){if(function pt(t){return Object.keys(_).includes(t)?t:_.navbar}(t)===_.navbar)return _.navbar;const d=function lt(t){return Object.keys(L).includes(t)?t:L.light}(o);return`${t}_${d}`}function mt(t){return!!t&&"function"==typeof t.then&&"Promise"===t[Symbol.toStringTag]}function ht(t,o){return`${t}${t.includes("?")?"&":"?"}${X(o)}`}function ft(t,o){let a=t;const d=[];for(const w of o){if(a=a.children.find(k=>k.id===w),null==a)break;d.push(w)}return d}function _t(t,o){return["vehiclePurchase","shop","experience","services"].includes(o)&&void 0!==t[o]?t[o]:null}function wt(t){const o=[t[0]];for(let a=1;a<t.length;a++)o.push(`${o[a-1]}/${t[a]}`);return o}function Et(t){return["718","911","Taycan","Macan","Panamera","Cayenne"].includes(t)}function gt(t){const o=t.toLowerCase();return["718","911","macan"].includes(o)}const xt=(t,o)=>o===_.transparent||o===_.hero?t:"light";function bt(t){return t.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`)}function yt(t,o,a=((d,w)=>d[w])){return Object.entries(o).reduce((d,[w,k])=>{const N=a(t,w);return d[w]="string"==typeof N?N:k,d},{})}const It=(t,o,{bubbles:a,detail:d,composed:w,cancelable:k})=>{const N=new CustomEvent(o,{detail:d,bubbles:a,cancelable:k,composed:w}),j=K(t);j?.dispatchEvent(N)}}}]);