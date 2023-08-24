"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[556],{556:(le,H,O)=>{O.d(H,{C:()=>F,D:()=>h,E:()=>re,R:()=>d,a:()=>ee,b:()=>l,c:()=>b,d:()=>C,e:()=>g,f:()=>f,g:()=>k,h:()=>K,i:()=>P,j:()=>M,k:()=>v,l:()=>Y,m:()=>x,n:()=>Z,s:()=>B});var i=O(49),m=O(565);const l={PRODUCTION:"production",PREVIEW:"preview",TEST:"test",LOCAL:"local"};function k(t){switch(t){case l.PREVIEW.toString():return l.PREVIEW;case l.TEST.toString():return l.TEST;case l.LOCAL.toString():return l.LOCAL;case l.PRODUCTION.toString():default:return l.PRODUCTION}}const re={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_CTA_CLICK:"PAGHomeNav_ModelCTA_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",NAVIGATION_LINK_CLICK:"PAGHomeNav_NavigationLink_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click",CONTEXTUAL_BUTTON_CLICK:"PAGHomeNav_IconContextLink_Click",DRAWER_LOAD:"PAGHomeNav_Drawer_Load",PCOM_SEARCH_CLICK:"PAGHomeNav_IconGlobalLink_Click"},b="nav",h="edgecast_CDN",f={closeButton:"close-button",backdrop:"backdrop",backButton:"back-button",menuItem:"menu-item",sideDrawerItem:"side-drawer-item",doubleDrawer:"double-drawer",singleDrawer:"single-drawer",bodyTypeButton:"body-type-button",myPorscheDrawer:"my-porsche-drawer",dealerSearchForm:"dealer-search-form"},F={Link:"link",Button:"button",Image:"image"},g={SingleDrawer:"singleDrawer",DoubleDrawer:"doubleDrawer"},v="level1-mainmenu_level2-find_a_dealer",Y="level1-mainmenu_level3-dealer-details",x="level2_dealer-search-form",K="level3_dealer-details",d={ASIA_PACIFIC:"asia-pacific",EASTERN_EUROPE:"eastern-europe",MIDDLE_EAST:"middle-east",LATIN_AMERICA:"latin-america",INTERNATIONAL:"international"},S={AP:d.ASIA_PACIFIC,CE:d.EASTERN_EUROPE,LL:d.LATIN_AMERICA,WW:d.INTERNATIONAL};function P(t){return Object.values(d).includes(t)}function B(t){if(!(0,i.i)(t))throw new i.N("empty locale passed",i.a.NO_INPUT);const c=t.substring(0,t.indexOf("-")).toLowerCase();let o=t.substring(t.indexOf("-")+1).toLowerCase();if(P(o)||(o=o.toUpperCase()),!(0,i.i)(c)||!(0,i.i)(o))throw new i.N(`invalid locale ${t} passed`,i.a.INVALID_INPUT);return{language:c,country:(0,i.v)(S,o)?S[o]:o}}const z=t=>!("isConnected"in t)||t.isConnected,U=((t,c)=>{let o;return(..._)=>{o&&clearTimeout(o),o=setTimeout(()=>{o=0,(t=>{for(let c of t.keys())t.set(c,t.get(c).filter(z))})(..._)},2e3)}})(),N=t=>"function"==typeof t?t():t,C=(t,c)=>{const o=((t,c=((o,_)=>o!==_))=>{const o=N(t);let _=new Map(Object.entries(o??{}));const L={dispose:[],get:[],set:[],reset:[]},w=()=>{var r;_=new Map(Object.entries(null!==(r=N(t))&&void 0!==r?r:{})),L.reset.forEach(s=>s())},y=r=>(L.get.forEach(s=>s(r)),_.get(r)),G=(r,s)=>{const p=_.get(r);c(s,p,r)&&(_.set(r,s),L.set.forEach(e=>e(r,s,p)))},ne=typeof Proxy>"u"?{}:new Proxy(o,{get:(r,s)=>y(s),ownKeys:r=>Array.from(_.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(r,s)=>_.has(s),set:(r,s,p)=>(G(s,p),!0)}),R=(r,s)=>(L[r].push(s),()=>{((t,c)=>{const o=t.indexOf(c);o>=0&&(t[o]=t[t.length-1],t.length--)})(L[r],s)});return{state:ne,get:y,set:G,on:R,onChange:(r,s)=>{const p=R("set",(n,a)=>{n===r&&s(a)}),e=R("reset",()=>s(N(t)[r]));return()=>{p(),e()}},use:(...r)=>{const s=r.reduce((p,e)=>(e.set&&p.push(R("set",e.set)),e.get&&p.push(R("get",e.get)),e.reset&&p.push(R("reset",e.reset)),e.dispose&&p.push(R("dispose",e.dispose)),p),[]);return()=>s.forEach(p=>p())},dispose:()=>{L.dispose.forEach(r=>r()),w()},reset:w,forceUpdate:r=>{const s=_.get(r);L.set.forEach(p=>p(r,s,s))}}})(t,c);return o.use((()=>{if("function"!=typeof m.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:c=>{const o=(0,m.a)();o&&((t,c,o)=>{const _=t.get(c);_?_.includes(o)||_.push(o):t.set(c,[o])})(t,c,o)},set:c=>{const o=t.get(c);o&&t.set(c,o.filter(m.f)),U(t)},reset:()=>{t.forEach(c=>c.forEach(m.f)),U(t)}}})()),o},Z=C({loggedInState:i.L,unreadMessagesCount:i.D,userConsent:!1,env:k(i.w),app:i.A.default}),E={id:"",text:"",link:"",icon:"",description:""},A={id:"",text:"",description:""},T={id:"",text:"",link:"",children:[]};function M(t,c){if(!(0,i.i)(c))return null;if(null!==t){if(t.id===c)return t;if(!Array.isArray(t.children))return null;for(const o of t.children){const _=M(o,c);if(null!==_)return _}}return null}const ee=C({menu:A,crest:E,back:A,close:A,accessibilityStatement:E,countryRecommender:{statement:"",region:"",language:"",change:A},contextualButtons:{},contextualLinks:{},models:{text:"",id:"",all:{id:"",text:"",link:"",icon:"",description:""},series:[]},dealer:{id:"",text:"",numberOfDealers:42,search:{id:"",text:"",form:{inputPlaceholder:"",inputDescription:""},clear:A,or:"",geolocation:A,dropdown:{province:"",city:"",selectAProvince:"",selectACity:""},load:"",map:E},details:{id:"",finder:E,bookService:E,testDrive:E,backToSearch:""}},myPorsche:{id:"",text:"",link:"",loggedInFallback:"",login:E,loginText:"",logout:E,messages:E,more:null,signup:E,signupText:"",links:[],savedSearches:null,savedVehicles:null},vehiclePurchase:T,shop:{cart:"",additionalContent:[],id:"",text:"",link:"",children:[],availableLocales:[],availableLocalesOnlyForShop:[],logoLinksToShopLocales:[]},externalShop:E,experience:T,services:T,error:{wrong:"",retry:"",noResults:"",noInput:"",invalidInput:"",geolocationDenied:""},loadingDescription:"",legacyMore:T,legacyShop:T})},49:(le,H,O)=>{O.d(H,{A:()=>D,B:()=>N,C:()=>j,D:()=>K,E:()=>ae,F:()=>d,G:()=>ne,H:()=>R,I:()=>ce,J:()=>U,K:()=>ee,L:()=>v,M:()=>V,N:()=>r,O:()=>Q,P:()=>w,Q:()=>p,R:()=>B,S:()=>S,T:()=>P,V:()=>x,a:()=>s,b:()=>W,c:()=>X,d:()=>z,e:()=>q,f:()=>g,g:()=>Z,h:()=>f,i:()=>C,j:()=>h,k:()=>te,l:()=>y,m:()=>G,n:()=>M,o:()=>J,p:()=>A,q:()=>i,r:()=>_,s:()=>o,t:()=>L,u:()=>E,v:()=>$,w:()=>F,x:()=>pe,y:()=>_e,z:()=>ie});const i={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},b={test:{CONTENT_URL:"http://content/url",SHOP_CONTENT_URL:"http://shop-content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",SHOP_CONTENT_URL:"https://shop.porsche.com/api/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://www.porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-nav.porsche.services"}},h={hero:"hero",navbar:"navbar",transparent:"transparent"},f={light:"light",dark:"dark"},F="production",g="loggedIn",v="loginOrRegister",Y="loading",x="3.2.3",K=0,d='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button, input.autofocus, phn-p-inline-notification',S="nav_saved_dealer",P="by geolocation",B="by market",V=7776e6,j="porsche.com",z="auth-iframe-header-navigation",U={Model:"model-variant",Level1:"level1-variant",DealerDetails:"dealer-details-variant"},D={shop:"shop",pcom:"pcom",default:"default"};var N=function(e){return e.startOpening="startOpening",e.startClosing="startClosing",e.finishOpening="finishOpening",e.finishClosing="finishClosing",e}(N||{});function W(e){return b[e]}function $(e,n){return e&&"object"==typeof e&&n in e}function C(e){return"string"==typeof e&&e.length>0}function Z(e){return"string"==typeof e?e:""}function E(e){return e instanceof HTMLElement?e:null}function A(e){var n;null===(n=E(e))||void 0===n||n.focus()}function Q(e){return e instanceof HTMLInputElement?e:null}function J(e){return 0===e.x&&0===e.y}function ce(e){return!function T(e){return e===Y}(e)&&!function se(e){return e===v}(e)}function ie(e,n){return e===g?n:e}function X(e){return Object.entries(e).filter(n=>void 0!==n[1]).map(([n,a])=>[n,C(a)?a:a.toString()]).map(([n,a])=>`${encodeURIComponent(n)}=${encodeURIComponent(a)}`).join("&")}function q(...e){return e.join("---")}function M(e){return e>=i.s}function ee(e){switch(e){case i.xxl:case i.xl:return 1920;case i.l:return 1360;case i.m:return 1024;case i.s:return 760;case i.xs:return 390;default:return 320}}function o(e){return Object.keys(D).includes(e)?e:D.default}function _(e,n){if(function t(e){return Object.keys(h).includes(e)?e:h.navbar}(e)===h.navbar)return h.navbar;const u=function c(e){return Object.keys(f).includes(e)?e:f.light}(n);return`${e}_${u}`}function L(e){return!!e&&"function"==typeof e.then&&"Promise"===e[Symbol.toStringTag]}function w(e,n){return`${e}${e.includes("?")?"&":"?"}${X(n)}`}function te(e,n){let a=e;const u=[];for(const I of n){if(a=a.children.find(oe=>oe.id===I),null==a)break;u.push(I)}return u}function y(e,n){return["vehiclePurchase","shop","experience","services"].includes(n)&&void 0!==e[n]?e[n]:null}function G(e){const n=[e[0]];for(let a=1;a<e.length;a++)n.push(`${n[a-1]}/${e[a]}`);return n}function ne(e){return["718","911","Taycan","Macan","Panamera","Cayenne"].includes(e)}function R(e){const n=e.toLowerCase();return["718","911","macan"].includes(n)}const ae=(e,n)=>n===h.transparent||n===h.hero?e:"light";function _e(e){return e.replace(/([A-Z])/g,n=>`-${n[0].toLowerCase()}`)}function pe(e,n,a=((u,I)=>u[I])){return Object.entries(n).reduce((u,[I,oe])=>{const Ee=a(e,I);return u[I]="string"==typeof Ee?Ee:oe,u},{})}class r extends Error{constructor(n,a){super(n),this.type=a,Object.setPrototypeOf(this,r.prototype)}}const s={NO_INPUT:"NO_INPUT",INVALID_INPUT:"INVALID_INPUT",NO_RESULTS:"NO_RESULTS",GENERAL:"GENERAL",RETRY:"RETRY",GEOLOCATION_DENIED:"GEOLOCATION_DENIED",UNAUTHORIZED:"UNAUTHORIZED"};function p(e,n){if(!(n instanceof r))return e.wrong;switch(n.type){case s.NO_INPUT:return e.noInput;case s.INVALID_INPUT:return e.invalidInput;case s.NO_RESULTS:return e.noResults;case s.GENERAL:return e.wrong;case s.RETRY:return e.retry;case s.GEOLOCATION_DENIED:return e.geolocationDenied;default:return e.wrong}}}}]);