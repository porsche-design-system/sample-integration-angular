"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[331],{199:(N,I,c)=>{c.d(I,{E:()=>s,g:()=>o});const s={PRODUCTION:"production",PREVIEW:"preview",TEST:"test",LOCAL:"local"};function o(l){switch(l){case s.PREVIEW.toString():return s.PREVIEW;case s.TEST.toString():return s.TEST;case s.LOCAL.toString():return s.LOCAL;case s.PRODUCTION.toString():default:return s.PRODUCTION}}},18:(N,I,c)=>{c.d(I,{f:()=>d});var s=c(861),o=c(199),l=c(598);const t={local:{featureOverrideEnabled:!0,HOMENAV_1723:!0,NAVI_3:!1},test:{featureOverrideEnabled:!0,HOMENAV_1723:!0,NAVI_3:!0},preview:{featureOverrideEnabled:!0,HOMENAV_1723:!1,NAVI_3:!1},production:{featureOverrideEnabled:!1,HOMENAV_1723:!1,NAVI_3:!1}},d=new class n{constructor(r=(0,o.g)(l.o),i=t){this.featureEnvMap=i,this.features={},this.setFeatures(r)}isFeatureEnabled(r,i){var u,f;if(void 0===this.features)return!1;if(this.features[l.p]){const O=null===(f=null===(u=i.split("?")[1])||void 0===u?void 0:u.split("&").find(g=>g.includes(r)))||void 0===f?void 0:f.split("=")[1];if("true"===O)return!0;if("false"===O)return!1}return Boolean(this.features[r])}setFeatures(r){this.features=this.featureEnvMap[r]}isNewIDP(r,i){var u=this;return(0,s.Z)(function*(){if(u.isFeatureEnabled(l.q,i))return!0;try{const O=yield(yield fetch(r)).json();return(0,l.i)(O.idp)&&"old"!==O.idp}catch{return!1}})()}}},598:(N,I,c)=>{c.d(I,{C:()=>_,D:()=>i,E:()=>C,F:()=>O,G:()=>P,I:()=>m,L:()=>d,M:()=>M,R:()=>t,S:()=>y,V:()=>r,a:()=>e,b:()=>F,c:()=>Y,d:()=>j,e:()=>n,f:()=>L,g:()=>x,h:()=>b,i:()=>U,j:()=>H,k:()=>K,l:()=>W,m:()=>s,n:()=>S,o:()=>a,p:()=>u,q:()=>f,r:()=>w,s:()=>R,t:()=>T,u:()=>g,v:()=>V,w:()=>k,x:()=>G,y:()=>A,z:()=>Z});const s={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},v={test:{CONTENT_URL:"http://content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"}},a="production",t="REDACTED",n="loggedIn",d="loginOrRegister",e="loading",r="2.23.2",i=0,u="featureOverrideEnabled",f="HOMENAV_1723",O="NAVI_3",g='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',R="nav",w="edgecast_CDN",C={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click"},T={Link:"link",Button:"button",Image:"image"},y="nav_saved_dealer",P="by geolocation",M=7776e6,_="porsche.com",m="auth-iframe-header-navigation",A={Model:"model-variant",Level1:"level1-variant"};function L(h){return v[h]}function b(h,D){return h&&"object"==typeof h&&D in h}function U(h){return"string"==typeof h&&h.length>0}function x(h){return"string"==typeof h?h:""}function S(h){return h instanceof HTMLElement?h:null}function K(h){var D;null===(D=S(h))||void 0===D||D.focus()}function G(h){return h instanceof HTMLInputElement?h:null}function H(h){return 0===h.x&&0===h.y}function k(h){return h===e}function F(h){return!k(h)&&!function B(h){return h===d}(h)}function V(h,D){return h===n?D:h}function Y(h){return Object.entries(h).map(([D,$])=>`${encodeURIComponent(D)}=${encodeURIComponent($)}`).join("&")}function j(...h){return h.join("---")}function W(h,D=!1){return D?h>=s.s:h>=s.l}function Z(h){switch(h){case s.xxl:case s.xl:return 1920;case s.l:return 1366;case s.m:return 1024;case s.s:return 768;case s.xs:return 375;default:return 320}}},424:(N,I,c)=>{c.d(I,{c:()=>d});var s=c(438);const p=e=>!("isConnected"in e)||e.isConnected,E=((e,r)=>{let i;return(...u)=>{i&&clearTimeout(i),i=setTimeout(()=>{i=0,(e=>{for(let r of e.keys())e.set(r,e.get(r).filter(p))})(...u)},2e3)}})(),a=e=>"function"==typeof e?e():e,d=(e,r)=>{const i=((e,r=((i,u)=>i!==u))=>{const i=a(e);let u=new Map(Object.entries(i??{}));const f={dispose:[],get:[],set:[],reset:[]},O=()=>{var _;u=new Map(Object.entries(null!==(_=a(e))&&void 0!==_?_:{})),f.reset.forEach(m=>m())},R=_=>(f.get.forEach(m=>m(_)),u.get(_)),w=(_,m)=>{const A=u.get(_);r(m,A,_)&&(u.set(_,m),f.set.forEach(L=>L(_,m,A)))},C=typeof Proxy>"u"?{}:new Proxy(i,{get:(_,m)=>R(m),ownKeys:_=>Array.from(u.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(_,m)=>u.has(m),set:(_,m,A)=>(w(m,A),!0)}),T=(_,m)=>(f[_].push(m),()=>{((e,r)=>{const i=e.indexOf(r);i>=0&&(e[i]=e[e.length-1],e.length--)})(f[_],m)});return{state:C,get:R,set:w,on:T,onChange:(_,m)=>{const A=T("set",(b,U)=>{b===_&&m(U)}),L=T("reset",()=>m(a(e)[_]));return()=>{A(),L()}},use:(..._)=>{const m=_.reduce((A,L)=>(L.set&&A.push(T("set",L.set)),L.get&&A.push(T("get",L.get)),L.reset&&A.push(T("reset",L.reset)),L.dispose&&A.push(T("dispose",L.dispose)),A),[]);return()=>m.forEach(A=>A())},dispose:()=>{f.dispose.forEach(_=>_()),O()},reset:O,forceUpdate:_=>{const m=u.get(_);f.set.forEach(A=>A(_,m,m))}}})(e,r);return i.use((()=>{if("function"!=typeof s.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:r=>{const i=(0,s.a)();i&&((e,r,i)=>{const u=e.get(r);u?u.includes(i)||u.push(i):e.set(r,[i])})(e,r,i)},set:r=>{const i=e.get(r);i&&e.set(r,i.filter(s.f)),E(e)},reset:()=>{e.forEach(r=>r.forEach(s.f)),E(e)}}})()),i}},587:(N,I,c)=>{c.d(I,{R:()=>l,c:()=>E,s:()=>v});var s=c(598),o=c(766);const l={ASIA_PACIFIC:"asia-pacific",EASTERN_EUROPE:"eastern-europe",MIDDLE_EAST:"middle-east",LATIN_AMERICA:"latin-america",INTERNATIONAL:"international"},p={AP:l.ASIA_PACIFIC,CE:l.EASTERN_EUROPE,LL:l.LATIN_AMERICA,WW:l.INTERNATIONAL};function E(a){return Object.values(l).includes(a)}function v(a){if(!(0,s.i)(a))throw new o.N("empty locale passed",o.a.NO_INPUT);const t=a.substring(0,a.indexOf("-")).toLowerCase();let n=a.substring(a.indexOf("-")+1).toLowerCase();if(E(n)||(n=n.toUpperCase()),!(0,s.i)(t)||!(0,s.i)(n))throw new o.N(`invalid locale ${a} passed`,o.a.INVALID_INPUT);return{language:t,country:(0,s.h)(p,n)?p[n]:n}}},262:(N,I,c)=>{c.d(I,{f:()=>r,n:()=>i});var s=c(424),o=c(598);const l={id:"",text:"",link:"",icon:"",description:""},p={id:"",text:"",description:""},a={id:"",text:"",link:"",children:[]};function r(u,f){if(!(0,o.i)(f))return null;if(u.id===f)return u;if(!Array.isArray(u.children))return null;for(const O of u.children){const g=r(O,f);if(null!==g)return g}return null}const i=(0,s.c)({menu:p,crest:l,back:p,close:p,accessibilityStatement:l,countryRecommender:{statement:"",region:"",language:"",change:p},contextualButtons:{},contextualLinks:{},models:{text:"",id:"",all:{id:"",text:"",link:"",icon:"",description:""},series:[]},dealer:{id:"",text:"",search:{id:"",text:"",form:{inputPlaceholder:"",inputDescription:""},clear:p,or:"",geolocation:p,load:"",map:l},details:{id:"",finder:l,bookService:l,backToSearch:""}},myPorsche:{id:"",text:"",link:"",loggedInFallback:"",login:l,loginText:"",logout:l,messages:l,more:null,signup:l,signupText:"",links:[]},vehiclePurchase:a,shop:a,experience:a,error:{wrong:"",retry:"",noResults:"",noInput:"",invalidInput:"",geolocationDenied:""},loadingDescription:"",legacyMore:a,legacyShop:a})},766:(N,I,c)=>{c.d(I,{N:()=>s,a:()=>o,g:()=>l});class s extends Error{constructor(E,v){super(E),this.type=v,Object.setPrototypeOf(this,s.prototype)}}const o={NO_INPUT:"NO_INPUT",INVALID_INPUT:"INVALID_INPUT",NO_RESULTS:"NO_RESULTS",GENERAL:"GENERAL",RETRY:"RETRY",GEOLOCATION_DENIED:"GEOLOCATION_DENIED",UNAUTHORIZED:"UNAUTHORIZED"};function l(p,E){if(!(E instanceof s))return p.wrong;switch(E.type){case o.NO_INPUT:return p.noInput;case o.INVALID_INPUT:return p.invalidInput;case o.NO_RESULTS:return p.noResults;case o.GENERAL:return p.wrong;case o.RETRY:return p.retry;case o.GEOLOCATION_DENIED:return p.geolocationDenied;default:return p.wrong}}},331:(N,I,c)=>{c.r(I),c.d(I,{phn_single_drawer:()=>O});var s=c(861),o=c(438),l=c(18),p=c(807),E=c(975),v=c(262),a=c(598),t=c(958);function f({routingKey:g,previousRoutingKey:R,breakpoint:w,locale:C,showBackButton:T}){const{menu:y}=v.n.state,P=l.f.isFeatureEnabled(a.F,E.w.location.search),M=(0,p.g)(v.n.state,R??"",P)||y.text;return(0,o.h)("div",{class:"menu-drawer-content"},(0,o.h)("phn-menu-drawer-header",{showBackButton:T,backButtonAnalyticsId:y.id,backButtonText:M}),(0,o.h)("phn-router",{activeRoutingKey:g,breakpoint:w,locale:C}))}c(199),c(587),c(766),c(810),c(424);const O=class{constructor(g){(0,o.r)(this,g),this.drawerClosed=(0,o.c)(this,"drawerClosed",7),this.drawerChanged=(0,o.c)(this,"drawerChanged",7),this.focusTimeout=new t.T(0),this.breakpoint=void 0,this.locale=void 0,this.usingKeyboard=!1,this.routingKeyHistory=void 0,this.routingKeyPointer=void 0,this.animatingPointer=-1}handleKeyDown(g){var R;if("Tab"!==g.key)return;const w=(0,a.n)(g.target);if(null===w)return;const C=null!==(R=this.el.querySelectorAll(`.active ${a.u}`))&&void 0!==R?R:null;if(null===C)return;const T=(0,a.n)(C[0]),y=(0,a.n)(C[C.length-1]);return w===T&&g.shiftKey?(g.preventDefault(),void(null!==y&&(0,a.k)(y))):w!==y||g.shiftKey?void 0:(g.preventDefault(),void(null!==T&&(0,a.k)(T)))}handleMobileMenuItemClick(){this.animatingPointer=this.routingKeyPointer}focusOnActiveDrawer(g){const R=(0,a.n)(this.el.querySelector(".active .autofocus"));if(null===R)if(this.usingKeyboard){let w=null;(0,a.i)(g)&&(w=(0,a.n)(this.el.querySelector(`.active [data-id="${g}"]`))),null===w&&(w=(0,a.n)(this.el.querySelector(`.active ${a.u}`))),null!==w&&(0,a.k)(w)}else{const w=(0,a.n)(this.el.querySelector(".first-focus"));null!==w&&(0,a.k)(w)}else(0,a.k)(R)}render(){var R,w,g=this;const C=l.f.isFeatureEnabled(a.F,E.w.location.search);let P=-1,M=this.routingKeyPointer;this.routingKeyPointer>this.animatingPointer?(P=this.routingKeyPointer,M=this.animatingPointer):this.routingKeyPointer<this.animatingPointer&&(P=this.animatingPointer);const _=null!==(R=this.routingKeyHistory[P])&&void 0!==R?R:"",m=null!==(w=this.routingKeyHistory[M])&&void 0!==w?w:"";return(0,o.h)(o.H,{class:C?"":"navi2-only"},(0,a.i)(m)?(0,o.h)("div",{class:"menu-drawer active",key:m},(0,o.h)("span",{class:"first-focus",tabindex:"-1","aria-hidden":"true"}),(0,o.h)(f,{routingKey:m,previousRoutingKey:this.routingKeyHistory[M-1],breakpoint:this.breakpoint,locale:this.locale,showBackButton:M>0})):null,(0,a.i)(_)?(0,o.h)("div",{class:"menu-drawer animating "+(this.routingKeyPointer>this.animatingPointer?"opening":"closing"),key:_,onAnimationEnd:A=>{if("slideLeft"!==A.animationName&&"slideRight"!==A.animationName)return;if(this.routingKeyPointer<0)return void this.drawerClosed.emit();const L=this.animatingPointer>this.routingKeyPointer?this.routingKeyHistory[this.animatingPointer]:"";this.animatingPointer=this.routingKeyPointer,this.drawerChanged.emit(this.routingKeyPointer<this.routingKeyHistory.length-1),this.focusTimeout.set((0,s.Z)(function*(){g.focusOnActiveDrawer(L)}))}},(0,o.h)(f,{routingKey:_,previousRoutingKey:this.routingKeyHistory[P-1],breakpoint:this.breakpoint,locale:this.locale,showBackButton:P>0})):null)}get el(){return(0,o.g)(this)}};O.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.sc-phn-single-drawer-h{display:block}.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer{z-index:301;background-color:#fff;position:fixed;top:0;bottom:0;right:0;width:100vw}.sc-phn-single-drawer-h .menu-drawer.opening.sc-phn-single-drawer{-webkit-animation-name:slideLeft;animation-name:slideLeft;-webkit-animation-duration:0.32s;animation-duration:0.32s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-phn-single-drawer-h .menu-drawer.closing.sc-phn-single-drawer{-webkit-animation-name:slideRight;animation-name:slideRight;-webkit-animation-duration:0.24s;animation-duration:0.24s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer{overflow-y:auto;height:100vh;width:100vw;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 1.6875rem 6.25rem 1.6875rem}@media (min-width: 480px){.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer{padding:0 2.1875rem 6.25rem 2.1875rem}}@media (min-width: 760px){.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer{padding:0 3.375rem 6.25rem 3.375rem}}@media (min-width: 1000px){.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer{padding:0 2.25rem 6.25rem 2.25rem}}.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer phn-menu-drawer-header.sc-phn-single-drawer{-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:1.125rem;margin-bottom:2.25rem}@media (min-width: 480px){.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer phn-menu-drawer-header.sc-phn-single-drawer{margin-top:2rem;margin-bottom:3.25rem}}@media (min-width: 760px){.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer phn-menu-drawer-header.sc-phn-single-drawer{margin-bottom:1.25rem}}@media (min-width: 1000px){.navi2-only.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer{width:35.5rem}}.navi2-only.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer{min-width:18.75rem;padding:0 1.5rem 6.25rem 1.5rem}@media (min-width: 480px){.navi2-only.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer{padding:0 1.75rem 6.25rem 1.75rem}}@media (min-width: 760px){.navi2-only.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer{padding:0 3.375rem 6.25rem 3.375rem}}@media (min-width: 1000px){.navi2-only.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer{padding:0 2.25rem 6.25rem 2.25rem;width:35.5rem}}.navi2-only.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer phn-menu-drawer-header.sc-phn-single-drawer{margin:1.5rem 0 0 0}@media (min-width: 480px){.navi2-only.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer phn-menu-drawer-header.sc-phn-single-drawer{margin:1.75rem 0 0 0}}@media (min-width: 760px){.navi2-only.sc-phn-single-drawer-h .menu-drawer.sc-phn-single-drawer .menu-drawer-content.sc-phn-single-drawer phn-menu-drawer-header.sc-phn-single-drawer{margin:1.5rem 0 0 0}}"},810:(N,I,c)=>{c.d(I,{R:()=>o,a:()=>a,b:()=>v,c:()=>l,d:()=>E,e:()=>t,f:()=>p,g:()=>n,r:()=>d});var s=c(598);const o={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",MODELS:"models"};function l(...e){return e.reduce((r,i)=>[...r,...(0,s.g)(i).split("/")],[]).filter(Boolean).join("/")}function p(e){if((0,s.i)(e))return Object.values(o).find(r=>e.startsWith(r))}function E(...e){return l(o.SERIES,...e)}function v(...e){return l(o.MODELS,...e)}function a(...e){return l(o.DEALER_SEARCH,...e)}function t(...e){return l(o.MY_PORSCHE,...e)}function n(e){return e.split("/").slice(-1)[0]}function d(e){return e.split("/").slice(0,-1).join("/")}},958:(N,I,c)=>{c.d(I,{T:()=>o});var s=c(861);class o{constructor(p){this.timer=null,this.resolve=null,this.promise=null,this.delay=p}set(p){var E=this;this.cancel(),this.promise=new Promise(v=>{this.resolve=v,this.resolve.called=!1,this.timer=setTimeout((0,s.Z)(function*(){"function"==typeof E.resolve&&!0!==E.resolve.called&&(yield p(),"function"==typeof E.resolve&&(E.resolve(),E.resolve.called=!0)),E.cancel()}),this.delay)})}cancel(){null!==this.timer&&(clearTimeout(this.timer),"function"==typeof this.timer.unref&&this.timer.unref(),this.timer=null),"function"==typeof this.resolve&&(!0!==this.resolve.called&&(this.resolve(),this.resolve.called=!0),this.resolve=null),this.promise=null}}},975:(N,I,c)=>{c.d(I,{w:()=>v});var s=c(861),o=c(598),l=c(766);const v=new class p{get location(){return window.location}set location(t){window.location=t}get sessionStorage(){return window.sessionStorage}set version(t){Object.assign(window,{PHN_HEADER_VERSION:t})}set navigationLoaded(t){Object.assign(window,{PHN_NAVIGATION_LOADED:t})}get bodyOverflow(){return document.body.style.overflow}get bodyHeight(){return document.body.style.height}createDiv(){return window.document.createElement("div")}getBreakpoint(){const t=Math.max(window.document.documentElement.clientWidth,window.innerWidth||0),n=Object.keys(o.m).reverse().find(d=>(0,o.h)(o.m,d)&&t>=o.m[d]);return"string"==typeof n&&(0,o.h)(o.m,n)?o.m[n]:0}get redirected(){return!0===window.REDIRECTED}getIframeLocationLike(t){var n,d;const e=window.document.createElement("iframe");return e.id=t,e.style.display="none",window.document.body.appendChild(e),null!==(d=null===(n=e.contentWindow)||void 0===n?void 0:n.location)&&void 0!==d?d:null}createIframe(t,n){const d=window.document.createElement("iframe");d.id=t,d.style.display="none",d.src=n,window.document.body.appendChild(d)}removeElement(t){var n;null===(n=window.document.getElementById(t))||void 0===n||n.remove()}redirectToUrl(t){window.location.assign(t)}generateRandom(t){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=new Uint8Array(t);window.crypto.getRandomValues(d);const e=[];for(let r=0;r<d.byteLength;r+=1)e.push(n[d[r]%n.length]);return e.join("")}maybeCheckMarketingConsent(t){var n,d,e,r,i,u,f,O,g,R,w;const C={processorId:null!==(e=null===(d=null===(n=window.GlobalConsent)||void 0===n?void 0:n.Processor)||void 0===d?void 0:d.googleMaps)&&void 0!==e?e:"Google Maps",timeoutVar:{},mapContainer:"",callbacks:{success:t}};return"function"==typeof(null===(i=null===(r=window.PCOM)||void 0===r?void 0:r.globalConsent)||void 0===i?void 0:i.checkConsent)?(null===(O=null===(f=null===(u=window.PCOM)||void 0===u?void 0:u.globalConsent)||void 0===f?void 0:f.checkConsent)||void 0===O||O.call(f,C),!0):"function"==typeof(null===(g=window.ucPrivacyShield)||void 0===g?void 0:g.checkConsent)?(null===(w=null===(R=window.ucPrivacyShield)||void 0===R?void 0:R.checkConsent)||void 0===w||w.call(R,C),!0):(t(),!1)}deriveChallenge(t){return(0,s.Z)(function*(){if(t.length<43||t.length>128)throw new l.N("invalid code length",l.a.INVALID_INPUT);const n=new ArrayBuffer(t.length),d=new Uint8Array(n);for(let u=0;u<t.length;u++)d[u]=t.charCodeAt(u);const e=yield window.crypto.subtle.digest("SHA-256",d),r=new Uint8Array(e);let i="";for(let u=0;u<r.byteLength;u++)i+=String.fromCharCode(r[u]);return window.btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")})()}hashString(t){return(0,s.Z)(function*(){const n=(new TextEncoder).encode(t),d=yield window.crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(d)).map(r=>r.toString(16).padStart(2,"0")).join("")})()}getScrollbarWidth(){const t=window.document.createElement("div");t.style.overflow="scroll",window.document.body.appendChild(t);const n=t.offsetWidth-t.clientWidth;return window.document.body.removeChild(t),Number.isNaN(n)?"0px":`${n}px`}fetchGoogleMapsApi(t,n=`https://maps.googleapis.com/maps/api/js?key=${t}&libraries=places`){return(0,s.Z)(function*(){if(void 0!==window.google&&void 0!==window.google.maps&&void 0!==window.google.maps.version||document.getElementById("googleMaps"))return window.google;const e=document.createElement("script");return e.src=n,e.id="googleMaps",document.head.appendChild(e),new Promise((r,i)=>{e.onerror=()=>{i(new l.N("Failed to load google maps script.",l.a.GENERAL))},e.onload=()=>{r(window.google)}})})()}getNavigatorLatLong(){return(0,s.Z)(function*(){return new Promise((t,n)=>{window.navigator.geolocation.getCurrentPosition(({coords:{latitude:d,longitude:e}})=>{t({latitude:d,longitude:e})},d=>n(new l.N(`geolocation.getCurrentPosition failed with ${d.code}: ${d.message}`,function E(a){switch(a.code){case a.PERMISSION_DENIED:return l.a.GEOLOCATION_DENIED;case a.POSITION_UNAVAILABLE:case a.TIMEOUT:return l.a.RETRY;default:return l.a.GENERAL}}(d))))})})()}getCookie(t){var n;return(0,o.g)(null===(n=document.cookie.split("; ").find(d=>d.startsWith(`${t}=`)))||void 0===n?void 0:n.split("=")[1])}setCookie(t,n){document.cookie=`${t}=${n};domain=${o.C};expires=${new Date(Date.now()+10*o.M).toUTCString()};`}btoa(t){return window.btoa(t)}lockScroll(){window.document.body.style.overflow="hidden",window.document.body.style.height="100%"}unlockScroll(t,n){"hidden"===window.document.body.style.overflow&&(window.document.body.style.overflow=t),"100%"===window.document.body.style.height&&(window.document.body.style.height=n)}}}}]);