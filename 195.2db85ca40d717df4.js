"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[195],{681:(Re,F,g)=>{g.d(F,{A:()=>f,B:()=>he,C:()=>S,D:()=>K,E:()=>s,F:()=>B,G:()=>W,H:()=>i,I:()=>k,J:()=>pe,K:()=>q,L:()=>I,M:()=>z,N:()=>R,O:()=>M,P:()=>j,S:()=>V,V:()=>U,a:()=>_,b:()=>t,c:()=>X,d:()=>r,e:()=>v,f:()=>A,g:()=>$,h:()=>N,i:()=>y,j:()=>le,k:()=>ue,l:()=>n,m:()=>_e,n:()=>ae,o:()=>L,p:()=>G,q:()=>H,r:()=>O,s:()=>J,t:()=>C,u:()=>l,v:()=>E,w:()=>a,x:()=>Q,y:()=>w,z:()=>c});const L={base:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},x={test:{CONTENT_URL:"http://content/url",SHOP_CONTENT_URL:"http://shop-content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",SHOP_CONTENT_URL:"https://shop.porsche.com/api/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://www.porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-nav.porsche.services"}},A={hero:"hero",navbar:"navbar",transparent:"transparent"},R={light:"light",dark:"dark"},l="production",v="loggedIn",I="loginOrRegister",P="loading",U="3.2.6",K=0,B='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button, input.autofocus, phn-p-inline-notification',V="nav_saved_dealer",j="by geolocation",M="by market",z=7776e6,S="porsche.com",X="auth-iframe-header-navigation",W={Model:"model-variant",Level1:"level1-variant",DealerDetails:"dealer-details-variant"},f={shop:"shop",pcom:"pcom",default:"default"};var w=function(e){return e.startOpening="startOpening",e.startClosing="startClosing",e.finishOpening="finishOpening",e.finishClosing="finishClosing",e}(w||{});function _(e){return x[e]}function C(e,o){return e&&"object"==typeof e&&o in e}function y(e){return"string"==typeof e&&e.length>0}function $(e){return"string"==typeof e?e:""}function O(e){return e instanceof HTMLElement?e:null}function ae(e){var o;null===(o=O(e))||void 0===o||o.focus()}function pe(e){return e instanceof HTMLInputElement?e:null}function _e(e){return 0===e.x&&0===e.y}function k(e){return!function Ee(e){return e===P}(e)&&!function Z(e){return e===I}(e)}function Q(e,o){return e===v?o:e}function t(e){return Object.entries(e).filter(o=>void 0!==o[1]).map(([o,p])=>[o,y(p)?p:p.toString()]).map(([o,p])=>`${encodeURIComponent(o)}=${encodeURIComponent(p)}`).join("&")}function r(...e){return e.join("---")}function n(e){return e>=L.s}function i(e){switch(e){case L.xxl:case L.xl:return 1920;case L.l:return 1360;case L.m:return 1024;case L.s:return 760;case L.xs:return 390;default:return 320}}function J(e){return Object.keys(f).includes(e)?e:f.default}function G(e,o){if(function T(e){return Object.keys(A).includes(e)?e:A.navbar}(e)===A.navbar)return A.navbar;const d=function b(e){return Object.keys(R).includes(e)?e:R.light}(o);return`${e}_${d}`}function H(e){return!!e&&"function"==typeof e.then&&"Promise"===e[Symbol.toStringTag]}function q(e,o){return`${e}${e.includes("?")?"&":"?"}${t(o)}`}function N(e,o){let p=e;const d=[];for(const m of o){if(p=p.children.find(ee=>ee.id===m),null==p)break;d.push(m)}return d}function le(e,o){return["vehiclePurchase","shop","experience","services"].includes(o)&&void 0!==e[o]?e[o]:null}function ue(e){const o=[e[0]];for(let p=1;p<e.length;p++)o.push(`${o[p-1]}/${e[p]}`);return o}function he(e){return["718","911","Taycan","Macan","Panamera","Cayenne"].includes(e)}function s(e){const o=e.toLowerCase();return["718","911","macan"].includes(o)}const c=(e,o)=>o===A.transparent||o===A.hero?e:"light";function a(e){return e.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`)}function E(e,o,p=((d,m)=>d[m])){return Object.entries(o).reduce((d,[m,ee])=>{const Le=p(e,m);return d[m]="string"==typeof Le?Le:ee,d},{})}},195:(Re,F,g)=>{g.d(F,{C:()=>re,D:()=>oe,E:()=>te,N:()=>R,R:()=>I,a:()=>l,b:()=>Q,c:()=>h,d:()=>ne,e:()=>f,f:()=>se,g:()=>Y,h:()=>L,i:()=>U,j:()=>A,k:()=>k,l:()=>ce,m:()=>v,n:()=>w,o:()=>ie,p:()=>x,s:()=>K});var u=g(681),D=g(702);const h={PRODUCTION:"production",PREVIEW:"preview",TEST:"test",LOCAL:"local"};function Y(t){switch(t){case h.PREVIEW.toString():return h.PREVIEW;case h.TEST.toString():return h.TEST;case h.LOCAL.toString():return h.LOCAL;case h.PRODUCTION.toString():default:return h.PRODUCTION}}const te={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_CTA_CLICK:"PAGHomeNav_ModelCTA_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",NAVIGATION_LINK_CLICK:"PAGHomeNav_NavigationLink_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click",CONTEXTUAL_BUTTON_CLICK:"PAGHomeNav_IconContextLink_Click",DRAWER_LOAD:"PAGHomeNav_Drawer_Load",PCOM_SEARCH_CLICK:"PAGHomeNav_IconGlobalLink_Click"},ne="nav",oe="edgecast_CDN",L={closeButton:"close-button",backdrop:"backdrop",backButton:"back-button",menuItem:"menu-item",sideDrawerItem:"side-drawer-item",doubleDrawer:"double-drawer",singleDrawer:"single-drawer",bodyTypeButton:"body-type-button",myPorscheDrawer:"my-porsche-drawer",dealerSearchForm:"dealer-search-form"},re={Link:"link",Button:"button",Image:"image"},se={SingleDrawer:"singleDrawer",DoubleDrawer:"doubleDrawer"},ce="level1-mainmenu_level2-find_a_dealer",ie="level1-mainmenu_level3-dealer-details",x="level2_dealer-search-form",A="level3_dealer-details";class R extends Error{constructor(r,n){super(r),this.type=n,Object.setPrototypeOf(this,R.prototype)}}const l={NO_INPUT:"NO_INPUT",INVALID_INPUT:"INVALID_INPUT",NO_RESULTS:"NO_RESULTS",GENERAL:"GENERAL",RETRY:"RETRY",GEOLOCATION_DENIED:"GEOLOCATION_DENIED",UNAUTHORIZED:"UNAUTHORIZED"};function v(t,r){if(!(r instanceof R))return t.wrong;switch(r.type){case l.NO_INPUT:return t.noInput;case l.INVALID_INPUT:return t.invalidInput;case l.NO_RESULTS:return t.noResults;case l.GENERAL:return t.wrong;case l.RETRY:return t.retry;case l.GEOLOCATION_DENIED:return t.geolocationDenied;default:return t.wrong}}const I={ASIA_PACIFIC:"asia-pacific",EASTERN_EUROPE:"eastern-europe",MIDDLE_EAST:"middle-east",LATIN_AMERICA:"latin-america",INTERNATIONAL:"international"},P={AP:I.ASIA_PACIFIC,CE:I.EASTERN_EUROPE,LL:I.LATIN_AMERICA,WW:I.INTERNATIONAL};function U(t){return Object.values(I).includes(t)}function K(t){if(!(0,u.i)(t))throw new R("empty locale passed",l.NO_INPUT);const r=t.substring(0,t.indexOf("-")).toLowerCase();let n=t.substring(t.indexOf("-")+1).toLowerCase();if(U(n)||(n=n.toUpperCase()),!(0,u.i)(r)||!(0,u.i)(n))throw new R(`invalid locale ${t} passed`,l.INVALID_INPUT);return{language:r,country:(0,u.t)(P,n)?P[n]:n}}const j=t=>!("isConnected"in t)||t.isConnected,M=((t,r)=>{let n;return(...i)=>{n&&clearTimeout(n),n=setTimeout(()=>{n=0,(t=>{for(let r of t.keys())t.set(r,t.get(r).filter(j))})(...i)},2e3)}})(),S=t=>"function"==typeof t?t():t,f=(t,r)=>{const n=((t,r=((n,i)=>n!==i))=>{const n=S(t);let i=new Map(Object.entries(n??{}));const T={dispose:[],get:[],set:[],reset:[]},b=()=>{var s;i=new Map(Object.entries(null!==(s=S(t))&&void 0!==s?s:{})),T.reset.forEach(c=>c())},G=s=>(T.get.forEach(c=>c(s)),i.get(s)),H=(s,c)=>{const a=i.get(s);r(c,a,s)&&(i.set(s,c),T.set.forEach(E=>E(s,c,a)))},q=typeof Proxy>"u"?{}:new Proxy(n,{get:(s,c)=>G(c),ownKeys:s=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(s,c)=>i.has(c),set:(s,c,a)=>(H(c,a),!0)}),N=(s,c)=>(T[s].push(c),()=>{((t,r)=>{const n=t.indexOf(r);n>=0&&(t[n]=t[t.length-1],t.length--)})(T[s],c)});return{state:q,get:G,set:H,on:N,onChange:(s,c)=>{const a=N("set",(e,o)=>{e===s&&c(o)}),E=N("reset",()=>c(S(t)[s]));return()=>{a(),E()}},use:(...s)=>{const c=s.reduce((a,E)=>(E.set&&a.push(N("set",E.set)),E.get&&a.push(N("get",E.get)),E.reset&&a.push(N("reset",E.reset)),E.dispose&&a.push(N("dispose",E.dispose)),a),[]);return()=>c.forEach(a=>a())},dispose:()=>{T.dispose.forEach(s=>s()),b()},reset:b,forceUpdate:s=>{const c=i.get(s);T.set.forEach(a=>a(s,c,c))}}})(t,r);return n.use((()=>{if("function"!=typeof D.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:r=>{const n=(0,D.a)();n&&((t,r,n)=>{const i=t.get(r);i?i.includes(n)||i.push(n):t.set(r,[n])})(t,r,n)},set:r=>{const n=t.get(r);n&&t.set(r,n.filter(D.f)),M(t)},reset:()=>{t.forEach(r=>r.forEach(D.f)),M(t)}}})()),n},w=f({loggedInState:u.L,unreadMessagesCount:u.D,userConsent:!1,env:Y(u.u),app:u.A.default}),_={id:"",text:"",link:"",icon:"",description:""},C={id:"",text:"",description:""},O={id:"",text:"",link:"",children:[]};function k(t,r){if(!(0,u.i)(r))return null;if(null!==t){if(t.id===r)return t;if(!Array.isArray(t.children))return null;for(const n of t.children){const i=k(n,r);if(null!==i)return i}}return null}const Q=f({menu:C,crest:_,back:C,close:C,accessibilityStatement:_,countryRecommender:{statement:"",region:"",language:"",change:C},contextualButtons:{},contextualLinks:{},models:{text:"",id:"",all:{id:"",text:"",link:"",icon:"",description:""},series:[]},dealer:{id:"",text:"",numberOfDealers:42,search:{id:"",text:"",form:{inputPlaceholder:"",inputDescription:""},clear:C,or:"",geolocation:C,dropdown:{province:"",city:"",selectAProvince:"",selectACity:""},load:"",map:_,outboundLink:_},details:{id:"",finder:_,bookService:_,testDrive:_,backToSearch:""},openingHours:null},myPorsche:{id:"",text:"",link:"",loggedInFallback:"",login:_,loginText:"",logout:_,messages:_,more:null,signup:_,signupText:"",links:[],savedSearches:null,savedVehicles:null},vehiclePurchase:O,shop:{cart:"",additionalContent:[],id:"",text:"",link:"",children:[],availableLocales:[],availableLocalesOnlyForShop:[],logoLinksToShopLocales:[]},externalShop:_,experience:O,services:O,error:{wrong:"",retry:"",noResults:"",noInput:"",invalidInput:"",geolocationDenied:""},loadingDescription:"",legacyMore:O,legacyShop:O})}}]);