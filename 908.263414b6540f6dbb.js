"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[908],{4164:(V,O,N)=>{N.d(O,{A:()=>i,B:()=>s,C:()=>o,D:()=>U,E:()=>Z,F:()=>C,G:()=>c,H:()=>R,I:()=>Y,L:()=>A,M:()=>t,N:()=>f,S:()=>D,V:()=>E,a:()=>G,b:()=>n,c:()=>$,d:()=>S,e:()=>m,f:()=>q,g:()=>T,h:()=>p,i:()=>g,j:()=>J,k:()=>ee,l:()=>z,m:()=>v,n:()=>w,o:()=>a,p:()=>x,q:()=>X,r:()=>K,s:()=>W,t:()=>I,u:()=>u,v:()=>P,w:()=>j,x:()=>k,y:()=>F,z:()=>Q});const a={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},b={test:{CONTENT_URL:"http://content/url",SHOP_CONTENT_URL:"http://shop-content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",SHOP_CONTENT_URL:"https://shop.porsche.com/api/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-nav.porsche.services"}},m={hero:"hero",navbar:"navbar"},f={light:"light",dark:"dark"},P="production",S="loggedIn",A="loginOrRegister",E="3.0.5",U=0,C='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button, input.autofocus',D="nav_saved_dealer",c="by geolocation",t=7776e6,o="porsche.com",n="auth-iframe-header-navigation",s={Model:"model-variant",Level1:"level1-variant",DealerDetails:"dealer-details-variant"},i={shop:"shop",pcom:"pcom",default:"default"};function p(e){return b[e]}function u(e,r){return e&&"object"==typeof e&&r in e}function g(e){return"string"==typeof e&&e.length>0}function T(e){return"string"==typeof e?e:""}function I(e){return e instanceof HTMLElement?e:null}function w(e){var r;null===(r=I(e))||void 0===r||r.focus()}function R(e){return e instanceof HTMLInputElement?e:null}function v(e){return 0===e.x&&0===e.y}function k(e){return"loading"===e}function Y(e){return!k(e)&&!function B(e){return e===A}(e)}function j(e,r){return e===S?r:e}function G(e){return Object.entries(e).map(([r,d])=>`${encodeURIComponent(r)}=${encodeURIComponent(d)}`).join("&")}function $(...e){return e.join("---")}function z(e,r=!0){return r?e>=a.s:e>=a.l}function Z(e){switch(e){case a.xxl:case a.xl:return 1920;case a.l:return 1366;case a.m:return 1024;case a.s:return 768;case a.xs:return 375;default:return 320}}function F(e){return Object.keys(m).includes(e)?e:m.navbar}function x(e){return Object.keys(f).includes(e)?e:f.light}function W(e){return Object.keys(i).includes(e)?e:i.default}function X(e,r){return F(e)===m.navbar?m.navbar:`${e}_${x(r)}`}function K(e){return Boolean(e)&&"function"==typeof e.then&&"Promise"===e[Symbol.toStringTag]}function Q(e,r){return`${e}${e.includes("?")?"&":"?"}${G(r)}`}function q(e,r){let d=e;const L=[];for(const H of r){if(d=d.children.find(te=>te.id===H),null==d)break;L.push(H)}return L}function J(e,r){return["vehiclePurchase","shop","experience","services"].includes(r)&&void 0!==e[r]?e[r]:null}function ee(e){const r=[e[0]];for(let d=1;d<e.length;d++)r.push(`${r[d-1]}/${e[d]}`);return r}},908:(V,O,N)=>{N.d(O,{N:()=>_,a:()=>l,g:()=>y,w:()=>D});var a=N(5861),h=N(4164);class _ extends Error{constructor(t,o){super(t),this.type=o,Object.setPrototypeOf(this,_.prototype)}}const l={NO_INPUT:"NO_INPUT",INVALID_INPUT:"INVALID_INPUT",NO_RESULTS:"NO_RESULTS",GENERAL:"GENERAL",RETRY:"RETRY",GEOLOCATION_DENIED:"GEOLOCATION_DENIED",UNAUTHORIZED:"UNAUTHORIZED"};function y(c,t){if(!(t instanceof _))return c.wrong;switch(t.type){case l.NO_INPUT:return c.noInput;case l.INVALID_INPUT:return c.invalidInput;case l.NO_RESULTS:return c.noResults;case l.GENERAL:return c.wrong;case l.RETRY:return c.retry;case l.GEOLOCATION_DENIED:return c.geolocationDenied;default:return c.wrong}}const E={base:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},D=new class U{get location(){return window.location}set location(t){window.location=t}get sessionStorage(){return window.sessionStorage}get localStorage(){return window.localStorage}set version(t){Object.assign(window,{PHN_HEADER_VERSION:t})}set navigationLoaded(t){Object.assign(window,{PHN_NAVIGATION_LOADED:t})}get bodyOverflow(){return document.body.style.overflow}get bodyHeight(){return document.body.style.height}requestAnimationFrame(t){return window.requestAnimationFrame(t)}createDiv(){return window.document.createElement("div")}getBreakpoint(){const t=Math.max(window.document.documentElement.clientWidth,window.innerWidth||0),o=Object.keys(E).reverse().find(n=>(0,h.u)(E,n)&&t>=E[n]);return"string"==typeof o&&(0,h.u)(E,o)?E[o]:0}get redirected(){return!0===window.REDIRECTED||window.location.search.includes("cs_redirect=")}createIframe(t,o){const n=window.document.createElement("iframe");n.id=t,n.style.display="none",n.src=o,window.document.body.appendChild(n)}removeElement(t){var o;null===(o=window.document.getElementById(t))||void 0===o||o.remove()}redirectToUrl(t){window.location.assign(t)}generateRandom(t){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=new Uint8Array(t);window.crypto.getRandomValues(n);const s=[];for(let i=0;i<n.byteLength;i+=1)s.push(o[n[i]%o.length]);return s.join("")}maybeCheckMarketingConsent(t){var o,n,s,i,p,u,g,T,I,w,R;const v={processorId:null!==(s=null===(n=null===(o=window.GlobalConsent)||void 0===o?void 0:o.Processor)||void 0===n?void 0:n.googleMaps)&&void 0!==s?s:"Google Maps",timeoutVar:{},mapContainer:"",callbacks:{success:t}};return"function"==typeof(null===(p=null===(i=window.PCOM)||void 0===i?void 0:i.globalConsent)||void 0===p?void 0:p.checkConsent)?(null===(T=null===(g=null===(u=window.PCOM)||void 0===u?void 0:u.globalConsent)||void 0===g?void 0:g.checkConsent)||void 0===T||T.call(g,v),!0):"function"==typeof(null===(I=window.ucPrivacyShield)||void 0===I?void 0:I.checkConsent)?(null===(R=null===(w=window.ucPrivacyShield)||void 0===w?void 0:w.checkConsent)||void 0===R||R.call(w,v),!0):(t(),!1)}deriveChallenge(t){return(0,a.Z)(function*(){if(t.length<43||t.length>128)throw new _("invalid code length",l.INVALID_INPUT);const o=new ArrayBuffer(t.length),n=new Uint8Array(o);for(let u=0;u<t.length;u++)n[u]=t.charCodeAt(u);const s=yield window.crypto.subtle.digest("SHA-256",n),i=new Uint8Array(s);let p="";for(let u=0;u<i.byteLength;u++)p+=String.fromCharCode(i[u]);return window.btoa(p).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")})()}hashString(t){return(0,a.Z)(function*(){const o=(new TextEncoder).encode(t),n=yield window.crypto.subtle.digest("SHA-256",o);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")})()}getScrollbarWidth(){const t=window.document.createElement("div");t.style.overflow="scroll",window.document.body.appendChild(t);const o=t.offsetWidth-t.clientWidth;return window.document.body.removeChild(t),Number.isNaN(o)?"0px":`${o}px`}fetchGoogleMapsApi(t,o=`https://maps.googleapis.com/maps/api/js?key=${t}&libraries=places`){return(0,a.Z)(function*(){if(void 0!==window.google&&void 0!==window.google.maps&&void 0!==window.google.maps.version||document.getElementById("googleMaps"))return window.google;const s=document.createElement("script");return s.src=o,s.id="googleMaps",document.head.appendChild(s),new Promise((i,p)=>{s.onerror=()=>{p(new _("Failed to load google maps script.",l.GENERAL))},s.onload=()=>{i(window.google)}})})()}getNavigatorLatLong(){return(0,a.Z)(function*(){return new Promise((t,o)=>{window.navigator.geolocation.getCurrentPosition(({coords:{latitude:n,longitude:s}})=>{t({latitude:n,longitude:s})},n=>o(new _(`geolocation.getCurrentPosition failed with ${n.code}: ${n.message}`,function C(c){switch(c.code){case c.PERMISSION_DENIED:return l.GEOLOCATION_DENIED;case c.POSITION_UNAVAILABLE:case c.TIMEOUT:return l.RETRY;default:return l.GENERAL}}(n))))})})()}getCookie(t){var o;return(0,h.g)(null===(o=document.cookie.split("; ").find(n=>n.startsWith(`${t}=`)))||void 0===o?void 0:o.split("=")[1])}setCookie(t,o){document.cookie=`${t}=${o};domain=${h.C};expires=${new Date(Date.now()+10*h.M).toUTCString()};`}btoa(t){return window.btoa(t)}lockScroll(){window.document.body.style.overflow="hidden",window.document.body.style.height="100%"}unlockScroll(t,o){"hidden"===window.document.body.style.overflow&&(window.document.body.style.overflow=t),"100%"===window.document.body.style.height&&(window.document.body.style.height=o)}waitForElement(t,o){return(0,a.Z)(function*(){if(!(0,h.i)(o))return t;const n=(0,h.t)(t.querySelector(o));return null!==n?n:new Promise(s=>{const i=new MutationObserver(()=>{const p=(0,h.t)(t.querySelector(o));null!==p&&(s(p),i.disconnect())});i.observe(t,{childList:!0,subtree:!0})})})()}}}}]);