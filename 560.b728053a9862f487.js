"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[560],{199:(L,d,i)=>{i.d(d,{E:()=>e,g:()=>l});const e={PRODUCTION:"production",PREVIEW:"preview",TEST:"test",LOCAL:"local"};function l(a){switch(a){case e.PREVIEW.toString():return e.PREVIEW;case e.TEST.toString():return e.TEST;case e.LOCAL.toString():return e.LOCAL;case e.PRODUCTION.toString():default:return e.PRODUCTION}}},598:(L,d,i)=>{i.d(d,{C:()=>o,D:()=>s,E:()=>v,F:()=>O,G:()=>b,I:()=>r,L:()=>T,M:()=>x,R:()=>f,S:()=>S,V:()=>c,a:()=>n,b:()=>V,c:()=>Y,d:()=>j,e:()=>C,f:()=>m,g:()=>k,h:()=>U,i:()=>w,j:()=>F,k:()=>G,l:()=>z,m:()=>e,n:()=>P,o:()=>g,p:()=>h,q:()=>u,r:()=>D,s:()=>y,t:()=>E,u:()=>N,v:()=>B,w:()=>M,x:()=>H,y:()=>p,z:()=>W});const e={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},I={test:{CONTENT_URL:"http://content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"}},g="production",f="REDACTED",C="loggedIn",T="loginOrRegister",n="loading",c="2.23.2",s=0,h="featureOverrideEnabled",u="HOMENAV_1723",O="NAVI_3",N='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',y="nav",D="edgecast_CDN",v={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click"},E={Link:"link",Button:"button",Image:"image"},S="nav_saved_dealer",b="by geolocation",x=7776e6,o="porsche.com",r="auth-iframe-header-navigation",p={Model:"model-variant",Level1:"level1-variant"};function m(t){return I[t]}function U(t,_){return t&&"object"==typeof t&&_ in t}function w(t){return"string"==typeof t&&t.length>0}function k(t){return"string"==typeof t?t:""}function P(t){return t instanceof HTMLElement?t:null}function G(t){var _;null===(_=P(t))||void 0===_||_.focus()}function H(t){return t instanceof HTMLInputElement?t:null}function F(t){return 0===t.x&&0===t.y}function M(t){return t===n}function V(t){return!M(t)&&!function K(t){return t===T}(t)}function B(t,_){return t===C?_:t}function Y(t){return Object.entries(t).map(([_,Z])=>`${encodeURIComponent(_)}=${encodeURIComponent(Z)}`).join("&")}function j(...t){return t.join("---")}function z(t,_=!1){return _?t>=e.s:t>=e.l}function W(t){switch(t){case e.xxl:case e.xl:return 1920;case e.l:return 1366;case e.m:return 1024;case e.s:return 768;case e.xs:return 375;default:return 320}}},424:(L,d,i)=>{i.d(d,{c:()=>T});var e=i(438);const R=n=>!("isConnected"in n)||n.isConnected,A=((n,c)=>{let s;return(...h)=>{s&&clearTimeout(s),s=setTimeout(()=>{s=0,(n=>{for(let c of n.keys())n.set(c,n.get(c).filter(R))})(...h)},2e3)}})(),g=n=>"function"==typeof n?n():n,T=(n,c)=>{const s=((n,c=((s,h)=>s!==h))=>{const s=g(n);let h=new Map(Object.entries(s??{}));const u={dispose:[],get:[],set:[],reset:[]},O=()=>{var o;h=new Map(Object.entries(null!==(o=g(n))&&void 0!==o?o:{})),u.reset.forEach(r=>r())},y=o=>(u.get.forEach(r=>r(o)),h.get(o)),D=(o,r)=>{const p=h.get(o);c(r,p,o)&&(h.set(o,r),u.set.forEach(m=>m(o,r,p)))},v=typeof Proxy>"u"?{}:new Proxy(s,{get:(o,r)=>y(r),ownKeys:o=>Array.from(h.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(o,r)=>h.has(r),set:(o,r,p)=>(D(r,p),!0)}),E=(o,r)=>(u[o].push(r),()=>{((n,c)=>{const s=n.indexOf(c);s>=0&&(n[s]=n[n.length-1],n.length--)})(u[o],r)});return{state:v,get:y,set:D,on:E,onChange:(o,r)=>{const p=E("set",(U,w)=>{U===o&&r(w)}),m=E("reset",()=>r(g(n)[o]));return()=>{p(),m()}},use:(...o)=>{const r=o.reduce((p,m)=>(m.set&&p.push(E("set",m.set)),m.get&&p.push(E("get",m.get)),m.reset&&p.push(E("reset",m.reset)),m.dispose&&p.push(E("dispose",m.dispose)),p),[]);return()=>r.forEach(p=>p())},dispose:()=>{u.dispose.forEach(o=>o()),O()},reset:O,forceUpdate:o=>{const r=h.get(o);u.set.forEach(p=>p(o,r,r))}}})(n,c);return s.use((()=>{if("function"!=typeof e.a)return{};const n=new Map;return{dispose:()=>n.clear(),get:c=>{const s=(0,e.a)();s&&((n,c,s)=>{const h=n.get(c);h?h.includes(s)||h.push(s):n.set(c,[s])})(n,c,s)},set:c=>{const s=n.get(c);s&&n.set(c,s.filter(e.f)),A(n)},reset:()=>{n.forEach(c=>c.forEach(e.f)),A(n)}}})()),s}},525:(L,d,i)=>{i.d(d,{n:()=>R});var e=i(424),l=i(199),a=i(598);const R=(0,e.c)({loggedInState:a.L,unreadMessagesCount:a.D,userConsent:!1,env:(0,l.g)(a.o)})},560:(L,d,i)=>{i.r(d),i.d(d,{phn_myporsche_button_content:()=>g});var e=i(438),l=i(525),a=i(598);i(424),i(199);const g=class{constructor(f){(0,e.r)(this,f),this.myPorscheRendered=(0,e.c)(this,"myPorscheRendered",7),this.myporscheText=void 0,this.loggedInText=void 0,this.loggedInState=void 0,this.unreadMessagesCount=void 0,this.isActive=!1}componentDidRender(){this.myPorscheRendered.emit()}render(){return(0,e.h)("phn-p-flex",null,(0,a.w)(this.loggedInState)?(0,e.h)("phn-p-spinner",null):(0,e.h)("div",{class:"icon-container"},(0,e.h)("phn-p-icon",{color:this.isActive?"brand":"default",name:"user",size:"inherit",source:(0,a.b)(this.loggedInState)?`${(0,e.d)(`${(0,a.f)(l.n.state.env).ASSETS_URL}/icon-assets`)}/user_filled${this.isActive?"_active":""}.svg`:void 0}),(0,a.b)(this.loggedInState)&&this.unreadMessagesCount>0?(0,e.h)("span",{"aria-hidden":"true",class:"myporsche-unread-messages-indicator","data-test-id":"unread-messages-indicator"}):null),(0,e.h)("div",null,(0,e.h)("phn-p-text",{class:"myporsche-menu-item-text",color:"inherit",size:"inherit",tag:"div"},this.myporscheText),(0,a.b)(this.loggedInState)?(0,e.h)("phn-p-text",{color:"inherit",size:"x-small",ellipsis:"true","data-test-id":"username"},(0,a.v)(this.loggedInState,this.loggedInText)):null))}static get assetsDirs(){return["icon-assets"]}};g.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.sc-phn-myporsche-button-content-h{display:block;position:relative;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1rem}@media (min-width: 760px){.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1.125rem}}@media (min-width: 1000px){.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1.25rem}}.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{width:1.5rem;height:1.5rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{height:1.75rem;width:1.75rem}}@media (min-width: 1000px) and (max-width: 1759px){.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{width:1.5rem;height:1.5rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{width:1.75rem;height:1.75rem}}.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{margin-top:-0.6rem;margin-right:0.25rem}.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{position:relative;margin-right:0.25rem;width:1.5rem;height:1.5rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{height:1.75rem;width:1.75rem}}@media (min-width: 1000px) and (max-width: 1759px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{width:1.5rem;height:1.5rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{width:1.75rem;height:1.75rem}}.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{position:absolute;width:0.375rem;height:0.375rem;border-radius:50%;background-color:#d5001c;top:0;right:0.125rem}@media (min-width: 760px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{right:0.25rem}}@media (min-width: 1000px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{right:0.125rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{right:0.25rem}}"}}]);