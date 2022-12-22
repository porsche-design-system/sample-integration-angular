"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[133],{598:(k,L,m)=>{m.d(L,{C:()=>s,D:()=>a,E:()=>b,F:()=>h,G:()=>N,I:()=>l,L:()=>T,M:()=>v,R:()=>C,S:()=>y,V:()=>d,a:()=>e,b:()=>B,c:()=>V,d:()=>j,e:()=>R,f:()=>D,g:()=>x,h:()=>P,i:()=>S,j:()=>G,k:()=>K,l:()=>z,m:()=>t,n:()=>M,o:()=>E,p:()=>n,q:()=>o,r:()=>w,s:()=>g,t:()=>I,u:()=>p,v:()=>Y,w:()=>U,x:()=>H,y:()=>f,z:()=>W});const t={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},A={test:{CONTENT_URL:"http://content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"}},E="production",C="REDACTED",R="loggedIn",T="loginOrRegister",e="loading",d="2.23.2",a=0,n="featureOverrideEnabled",o="HOMENAV_1723",h="NAVI_3",p='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',g="nav",w="edgecast_CDN",b={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click"},I={Link:"link",Button:"button",Image:"image"},y="nav_saved_dealer",N="by geolocation",v=7776e6,s="porsche.com",l="auth-iframe-header-navigation",f={Model:"model-variant",Level1:"level1-variant"};function D(r){return A[r]}function P(r,O){return r&&"object"==typeof r&&O in r}function S(r){return"string"==typeof r&&r.length>0}function x(r){return"string"==typeof r?r:""}function M(r){return r instanceof HTMLElement?r:null}function K(r){var O;null===(O=M(r))||void 0===O||O.focus()}function H(r){return r instanceof HTMLInputElement?r:null}function G(r){return 0===r.x&&0===r.y}function U(r){return r===e}function B(r){return!U(r)&&!function F(r){return r===T}(r)}function Y(r,O){return r===R?O:r}function V(r){return Object.entries(r).map(([O,Z])=>`${encodeURIComponent(O)}=${encodeURIComponent(Z)}`).join("&")}function j(...r){return r.join("---")}function z(r,O=!1){return O?r>=t.s:r>=t.l}function W(r){switch(r){case t.xxl:case t.xl:return 1920;case t.l:return 1366;case t.m:return 1024;case t.s:return 768;case t.xs:return 375;default:return 320}}},424:(k,L,m)=>{m.d(L,{c:()=>T});var t=m(438);const _=e=>!("isConnected"in e)||e.isConnected,i=((e,d)=>{let a;return(...n)=>{a&&clearTimeout(a),a=setTimeout(()=>{a=0,(e=>{for(let d of e.keys())e.set(d,e.get(d).filter(_))})(...n)},2e3)}})(),E=e=>"function"==typeof e?e():e,T=(e,d)=>{const a=((e,d=((a,n)=>a!==n))=>{const a=E(e);let n=new Map(Object.entries(a??{}));const o={dispose:[],get:[],set:[],reset:[]},h=()=>{var s;n=new Map(Object.entries(null!==(s=E(e))&&void 0!==s?s:{})),o.reset.forEach(l=>l())},g=s=>(o.get.forEach(l=>l(s)),n.get(s)),w=(s,l)=>{const f=n.get(s);d(l,f,s)&&(n.set(s,l),o.set.forEach(D=>D(s,l,f)))},b=typeof Proxy>"u"?{}:new Proxy(a,{get:(s,l)=>g(l),ownKeys:s=>Array.from(n.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(s,l)=>n.has(l),set:(s,l,f)=>(w(l,f),!0)}),I=(s,l)=>(o[s].push(l),()=>{((e,d)=>{const a=e.indexOf(d);a>=0&&(e[a]=e[e.length-1],e.length--)})(o[s],l)});return{state:b,get:g,set:w,on:I,onChange:(s,l)=>{const f=I("set",(P,S)=>{P===s&&l(S)}),D=I("reset",()=>l(E(e)[s]));return()=>{f(),D()}},use:(...s)=>{const l=s.reduce((f,D)=>(D.set&&f.push(I("set",D.set)),D.get&&f.push(I("get",D.get)),D.reset&&f.push(I("reset",D.reset)),D.dispose&&f.push(I("dispose",D.dispose)),f),[]);return()=>l.forEach(f=>f())},dispose:()=>{o.dispose.forEach(s=>s()),h()},reset:h,forceUpdate:s=>{const l=n.get(s);o.set.forEach(f=>f(s,l,l))}}})(e,d);return a.use((()=>{if("function"!=typeof t.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:d=>{const a=(0,t.a)();a&&((e,d,a)=>{const n=e.get(d);n?n.includes(a)||n.push(a):e.set(d,[a])})(e,d,a)},set:d=>{const a=e.get(d);a&&e.set(d,a.filter(t.f)),i(e)},reset:()=>{e.forEach(d=>d.forEach(t.f)),i(e)}}})()),a}},587:(k,L,m)=>{m.d(L,{R:()=>u,c:()=>i,s:()=>A});var t=m(598),c=m(766);const u={ASIA_PACIFIC:"asia-pacific",EASTERN_EUROPE:"eastern-europe",MIDDLE_EAST:"middle-east",LATIN_AMERICA:"latin-america",INTERNATIONAL:"international"},_={AP:u.ASIA_PACIFIC,CE:u.EASTERN_EUROPE,LL:u.LATIN_AMERICA,WW:u.INTERNATIONAL};function i(E){return Object.values(u).includes(E)}function A(E){if(!(0,t.i)(E))throw new c.N("empty locale passed",c.a.NO_INPUT);const C=E.substring(0,E.indexOf("-")).toLowerCase();let R=E.substring(E.indexOf("-")+1).toLowerCase();if(i(R)||(R=R.toUpperCase()),!(0,t.i)(C)||!(0,t.i)(R))throw new c.N(`invalid locale ${E} passed`,c.a.INVALID_INPUT);return{language:C,country:(0,t.h)(_,R)?_[R]:R}}},262:(k,L,m)=>{m.d(L,{f:()=>d,n:()=>a});var t=m(424),c=m(598);const u={id:"",text:"",link:"",icon:"",description:""},_={id:"",text:"",description:""},E={id:"",text:"",link:"",children:[]};function d(n,o){if(!(0,c.i)(o))return null;if(n.id===o)return n;if(!Array.isArray(n.children))return null;for(const h of n.children){const p=d(h,o);if(null!==p)return p}return null}const a=(0,t.c)({menu:_,crest:u,back:_,close:_,accessibilityStatement:u,countryRecommender:{statement:"",region:"",language:"",change:_},contextualButtons:{},contextualLinks:{},models:{text:"",id:"",all:{id:"",text:"",link:"",icon:"",description:""},series:[]},dealer:{id:"",text:"",search:{id:"",text:"",form:{inputPlaceholder:"",inputDescription:""},clear:_,or:"",geolocation:_,load:"",map:u},details:{id:"",finder:u,bookService:u,backToSearch:""}},myPorsche:{id:"",text:"",link:"",loggedInFallback:"",login:u,loginText:"",logout:u,messages:u,more:null,signup:u,signupText:"",links:[]},vehiclePurchase:E,shop:E,experience:E,error:{wrong:"",retry:"",noResults:"",noInput:"",invalidInput:"",geolocationDenied:""},loadingDescription:"",legacyMore:E,legacyShop:E})},766:(k,L,m)=>{m.d(L,{N:()=>t,a:()=>c,g:()=>u});class t extends Error{constructor(i,A){super(i),this.type=A,Object.setPrototypeOf(this,t.prototype)}}const c={NO_INPUT:"NO_INPUT",INVALID_INPUT:"INVALID_INPUT",NO_RESULTS:"NO_RESULTS",GENERAL:"GENERAL",RETRY:"RETRY",GEOLOCATION_DENIED:"GEOLOCATION_DENIED",UNAUTHORIZED:"UNAUTHORIZED"};function u(_,i){if(!(i instanceof t))return _.wrong;switch(i.type){case c.NO_INPUT:return _.noInput;case c.INVALID_INPUT:return _.invalidInput;case c.NO_RESULTS:return _.noResults;case c.GENERAL:return _.wrong;case c.RETRY:return _.retry;case c.GEOLOCATION_DENIED:return _.geolocationDenied;default:return _.wrong}}},133:(k,L,m)=>{m.r(L),m.d(L,{phn_double_drawer:()=>a});var t=m(438),c=m(810),u=m(807),_=m(262),i=m(598);function R(n){const o=[];return n?.querySelectorAll(i.u).forEach(h=>{const p=(0,i.n)(h);null!==p&&o.push(p)}),o}m(587),m(766),m(424);const T=({activeRoutingKey:n,locale:o,breakpoint:h,backButtonText:p,onClickBack:g})=>(0,t.h)("div",{class:"drawer-content"},(0,t.h)("div",{class:"main-drawer-header"},(0,i.i)(p)?(0,t.h)("phn-back-button",{class:"back-button",onClick:g,text:p,analyticsId:_.n.state.menu.id}):null),(0,t.h)("phn-router",{activeRoutingKey:n,breakpoint:h,locale:o})),e=({activeRoutingKey:n,locale:o,isAnimating:h,hideHighlight:p,backButtonText:g,onClickBack:w})=>(0,t.h)("div",{class:"drawer-content"},(0,t.h)("span",{class:"first-focus",tabindex:"-1","aria-hidden":"true"}),(0,t.h)("div",{class:"side-drawer-header"},(0,i.i)(g)?(0,t.h)("phn-back-button",{class:"back-button",onClick:w,text:g,analyticsId:_.n.state.menu.id}):null),(0,t.h)("phn-side-drawer",{activeRoutingKey:n,locale:o,isAnimating:h,hideHighlight:p})),a=class{constructor(n){(0,t.r)(this,n),this.clickMenuDrawerHeaderClose=(0,t.c)(this,"clickMenuDrawerHeaderClose",7),this.clickMenuDrawerHeaderBack=(0,t.c)(this,"clickMenuDrawerHeaderBack",7),this.drawerClosed=(0,t.c)(this,"drawerClosed",7),this.drawerChanged=(0,t.c)(this,"drawerChanged",7),this.breakpoint=void 0,this.locale=void 0,this.initialUsingKeyboard=!1,this.routingKeyHistory=void 0,this.routingKeyPointer=void 0,this.usingKeyboard=this.initialUsingKeyboard,this.animatingRoutingKeyPointer=this.routingKeyPointer,this.isAnimating=!0,this.animatingRoutingKey=this.routingKeyHistory[this.routingKeyPointer]}handleAnimationEnd(n){const o=this.routingKeyHistory[this.routingKeyPointer],h=this.animatingRoutingKey!==o,p=this.animatingRoutingKeyPointer!==this.routingKeyPointer&&(0,c.f)(o)!==c.R.DEALER_SEARCH,g=!(0,i.i)(o),w=(0,i.n)(this.el.querySelector("#main-drawer")),b=(0,i.n)(this.el.querySelector("#side-drawer"));if(null===w||null===b)return;const I=n.target===w.querySelector(".drawer-content"),y=n.target===b.querySelector(".drawer-content");switch(n.animationName){case"slideLeftDoubleDrawer":this.isAnimating=!1;break;case"slideRightDoubleDrawer":this.drawerClosed.emit();break;case"slideOutToLeft":I?(w.classList.remove("slideOut"),this.animatingRoutingKey=o,this.animatingRoutingKeyPointer=this.routingKeyPointer,this.drawerChanged.emit(this.routingKeyPointer<this.routingKeyHistory.length-1),w.classList.add("slideIn"),p&&b.classList.add("slideIn")):y&&b.classList.remove("slideOut");break;case"slideInFromRight":I?(w.classList.remove("slideIn"),this.isAnimating=!1):y&&b.classList.remove("slideIn");break;case"shrinkHighlightOut":this.isAnimating=!0,g?this.el.classList.add("closing"):(h&&w.classList.add("slideOut"),p&&b.classList.add("slideOut"));break;case"shrinkHighlightIn":this.focusOnInitialElement()}}handleKeyDown(n){if("Tab"!==n.key)return;const o=(0,i.n)(n.target);if(null===o)return;const h=R(this.el.querySelector("#side-drawer")),p=R(this.el.querySelector("#main-drawer"));if(0===h.length||0===p.length)return;const g=this.routingKeyHistory[this.routingKeyPointer],w=h.findIndex(l=>l.getAttribute("data-id")===g),b=h[w],I=h[0],y=h[h.length-1],N=p[0],v=p[p.length-1],s=this.el.querySelector(".close-button");if(o===b&&!n.shiftKey)return n.preventDefault(),void(null!==N&&(0,i.k)(N));if(o===y&&!n.shiftKey)return n.preventDefault(),void(null!==s&&(0,i.k)(s));if(o===s&&!n.shiftKey)return n.preventDefault(),void(null!==I&&(0,i.k)(I));if(o===s&&n.shiftKey)return n.preventDefault(),void(null!==y&&(0,i.k)(y));if(o===N&&n.shiftKey)return n.preventDefault(),void(null!==b&&(0,i.k)(b));if(o!==v||n.shiftKey);else{n.preventDefault();const f=(0,i.n)(h[w+1>=h.length?0:w+1]);null!==f&&(0,i.k)(f)}}focusOnInitialElement(){const o=this.routingKeyPointer<this.routingKeyHistory.length-1?this.routingKeyHistory[this.routingKeyPointer+1]:this.routingKeyHistory[this.routingKeyPointer],h=(0,i.n)(this.el.querySelector(".autofocus"));if(null!==h)return void(0,i.k)(h);if(this.usingKeyboard){let g=null;return(0,i.i)(o)&&(g=(0,i.n)(this.el.querySelector(`[data-id="${o}"]`))),null===g&&(g=(0,i.n)(this.el.querySelector(`${i.u}`))),void(null!==g&&(0,i.k)(g))}const p=(0,i.n)(this.el.querySelector(".first-focus"));null!==p&&(0,i.k)(p)}render(){const n=this.animatingRoutingKey!==this.routingKeyHistory[this.routingKeyPointer],o=this.routingKeyHistory[this.animatingRoutingKeyPointer-1],h=(0,u.g)(_.n.state,o,!0),p=(0,c.f)(this.animatingRoutingKey),g=(0,c.f)(o)===c.R.DEALER_SEARCH,w=p===c.R.DEALER_SEARCH&&this.animatingRoutingKey!==p;return(0,t.h)(t.H,null,(0,t.h)("button",{class:"close-button","aria-label":"Close drawer",onClick:()=>{this.clickMenuDrawerHeaderClose.emit()}},(0,t.h)("phn-p-icon",{name:"close",color:"inherit","aria-hidden":"true"})),(0,i.i)(this.animatingRoutingKey)?(0,t.h)(t.F,null,(0,t.h)("div",{class:"menu-drawer",id:"side-drawer"},(0,t.h)(e,{activeRoutingKey:this.animatingRoutingKey,locale:this.locale,hideHighlight:n,isAnimating:this.isAnimating,backButtonText:g?"":h,onClickBack:()=>{this.clickMenuDrawerHeaderBack.emit()}})),(0,t.h)("div",{class:"menu-drawer",id:"main-drawer"},(0,t.h)(T,{activeRoutingKey:this.animatingRoutingKey,breakpoint:this.breakpoint,locale:this.locale,backButtonText:w?h:"",onClickBack:()=>{this.clickMenuDrawerHeaderBack.emit()}}))):null)}get el(){return(0,t.g)(this)}};a.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes slideInFromRight{from{right:-100%}to{right:0}}@keyframes slideInFromRight{from{right:-100%}to{right:0}}@-webkit-keyframes slideOutToLeft{from{left:0}to{left:-200%}}@keyframes slideOutToLeft{from{left:0}to{left:-200%}}.sc-phn-double-drawer-h{position:fixed;top:0;right:0;height:100vh;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:301;-webkit-animation-name:slideLeftDoubleDrawer;animation-name:slideLeftDoubleDrawer;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.closing.sc-phn-double-drawer-h{-webkit-animation-name:slideRightDoubleDrawer;animation-name:slideRightDoubleDrawer;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-phn-double-drawer-h .close-button.sc-phn-double-drawer{position:absolute;left:-4.75rem;z-index:301;width:3rem;height:3rem;background:none;color:#fff;margin-top:1.75rem;padding:0;cursor:pointer;border:1px solid #fff;border-radius:0.25rem}@media (min-width: 1920px){.sc-phn-double-drawer-h .close-button.sc-phn-double-drawer{margin:2.8125rem 2.8125rem 0 0}}.sc-phn-double-drawer-h .close-button.sc-phn-double-drawer:hover{color:#d5001c;border:1px solid #d5001c}.sc-phn-double-drawer-h .menu-drawer.sc-phn-double-drawer{overflow-y:auto;overflow-x:hidden;position:relative;background-color:#fff;height:100vh}.sc-phn-double-drawer-h .menu-drawer.slideIn.sc-phn-double-drawer .drawer-content.sc-phn-double-drawer{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;position:relative;-webkit-animation-name:slideInFromRight, fadeIn;animation-name:slideInFromRight, fadeIn;-webkit-animation-duration:0.4s;animation-duration:0.4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-phn-double-drawer-h .menu-drawer.slideOut.sc-phn-double-drawer .drawer-content.sc-phn-double-drawer{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;position:relative;-webkit-animation-name:slideOutToLeft, fadeOut;animation-name:slideOutToLeft, fadeOut;-webkit-animation-duration:0.4s;animation-duration:0.4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-phn-double-drawer-h .menu-drawer#main-drawer.sc-phn-double-drawer{z-index:301;float:right;width:20.625rem;padding:0rem 1.5rem 1.5rem 1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 1000px){.sc-phn-double-drawer-h .menu-drawer#main-drawer.sc-phn-double-drawer{width:21rem;padding:0rem 2.25rem 2.25rem 2.25rem}}@media (min-width: 1300px){.sc-phn-double-drawer-h .menu-drawer#main-drawer.sc-phn-double-drawer{width:26.375rem;padding:0rem 3rem 3rem 3rem}}@media (min-width: 1920px){.sc-phn-double-drawer-h .menu-drawer#main-drawer.sc-phn-double-drawer{width:32.9375rem;padding:0rem 4rem 4rem 4rem}}.sc-phn-double-drawer-h .menu-drawer#main-drawer.sc-phn-double-drawer .main-drawer-header.sc-phn-double-drawer{-webkit-box-sizing:border-box;box-sizing:border-box;height:4.125rem;padding-top:2.5rem;margin-bottom:1.625rem}@media (min-width: 1300px){.sc-phn-double-drawer-h .menu-drawer#main-drawer.sc-phn-double-drawer .main-drawer-header.sc-phn-double-drawer{margin-bottom:1.875rem}}@media (min-width: 1920px){.sc-phn-double-drawer-h .menu-drawer#main-drawer.sc-phn-double-drawer .main-drawer-header.sc-phn-double-drawer{height:5.25rem;margin-bottom:2.75rem;padding-top:2.5rem}}.sc-phn-double-drawer-h .menu-drawer#main-drawer.sc-phn-double-drawer .main-drawer-header.sc-phn-double-drawer phn-back-button.sc-phn-double-drawer{margin-left:-0.5rem;height:1.5rem}.sc-phn-double-drawer-h .menu-drawer#side-drawer.sc-phn-double-drawer{z-index:302;float:left;-webkit-box-shadow:6px 0px 4px -2px rgba(0, 0, 0, 0.31);box-shadow:8px 0px 8px -4px rgba(0, 0, 0, 0.14);width:15.5rem;padding-left:1.5rem}@media (min-width: 1000px){.sc-phn-double-drawer-h .menu-drawer#side-drawer.sc-phn-double-drawer{width:17.75rem}}@media (min-width: 1300px){.sc-phn-double-drawer-h .menu-drawer#side-drawer.sc-phn-double-drawer{width:21.25rem;padding-left:2.25rem}}@media (min-width: 1920px){.sc-phn-double-drawer-h .menu-drawer#side-drawer.sc-phn-double-drawer{width:27.5rem;padding-left:3rem}}.sc-phn-double-drawer-h .menu-drawer#side-drawer.opening.sc-phn-double-drawer{-webkit-animation-name:slideLeft;animation-name:slideLeft;-webkit-animation-duration:0.32s;animation-duration:0.32s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-phn-double-drawer-h .menu-drawer#side-drawer.closing.sc-phn-double-drawer{-webkit-animation-name:slideRight;animation-name:slideRight;-webkit-animation-duration:0.24s;animation-duration:0.24s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-phn-double-drawer-h .menu-drawer#side-drawer.sc-phn-double-drawer .side-drawer-header.sc-phn-double-drawer{-webkit-box-sizing:border-box;box-sizing:border-box;height:5.75rem;padding-top:2.625rem}@media (min-width: 1300px){.sc-phn-double-drawer-h .menu-drawer#side-drawer.sc-phn-double-drawer .side-drawer-header.sc-phn-double-drawer{height:6rem}}@media (min-width: 1920px){.sc-phn-double-drawer-h .menu-drawer#side-drawer.sc-phn-double-drawer .side-drawer-header.sc-phn-double-drawer{height:8rem;padding-top:3.75rem}}.sc-phn-double-drawer-h .menu-drawer#side-drawer.sc-phn-double-drawer .side-drawer-header.sc-phn-double-drawer phn-back-button.sc-phn-double-drawer{margin-left:-0.5rem;height:1.5rem}"},810:(k,L,m)=>{m.d(L,{R:()=>c,a:()=>E,b:()=>A,c:()=>u,d:()=>i,e:()=>C,f:()=>_,g:()=>R,r:()=>T});var t=m(598);const c={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",MODELS:"models"};function u(...e){return e.reduce((d,a)=>[...d,...(0,t.g)(a).split("/")],[]).filter(Boolean).join("/")}function _(e){if((0,t.i)(e))return Object.values(c).find(d=>e.startsWith(d))}function i(...e){return u(c.SERIES,...e)}function A(...e){return u(c.MODELS,...e)}function E(...e){return u(c.DEALER_SEARCH,...e)}function C(...e){return u(c.MY_PORSCHE,...e)}function R(e){return e.split("/").slice(-1)[0]}function T(e){return e.split("/").slice(0,-1).join("/")}}}]);