"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[572],{598:(R,i,r)=>{r.d(i,{C:()=>w,D:()=>L,E:()=>O,F:()=>C,G:()=>U,I:()=>x,L:()=>l,M:()=>S,R:()=>n,S:()=>v,V:()=>I,a:()=>d,b:()=>V,c:()=>B,d:()=>z,e:()=>m,f:()=>k,g:()=>M,h:()=>b,i:()=>P,j:()=>F,k:()=>G,l:()=>j,m:()=>t,n:()=>E,o:()=>o,p:()=>A,q:()=>g,r:()=>T,s:()=>f,t:()=>D,u:()=>N,v:()=>K,w:()=>u,x:()=>H,y:()=>y,z:()=>Z});const t={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},a={test:{CONTENT_URL:"http://content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search"}},o="production",n="REDACTED",m="loggedIn",l="loginOrRegister",d="loading",I="2.23.2",L=0,A="featureOverrideEnabled",g="HOMENAV_1723",C="NAVI_3",N='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',f="nav",T="edgecast_CDN",O={GENERAL_LOAD:"PAGHomeNav_General_Load",COUNTRY_RECOMMENDER_LOAD:"PAGHomeNav_CountryRecommender_Load",COUNTRY_RECOMMENDER_CHANGE:"PAGHomeNav_CountryRecommenderChange_Click",COUNTRY_RECOMMENDER_CLOSE:"PAGHomeNav_CountryRecommenderClose_Click",CREST_CLICK:"PAGHomeNav_Crest_Click",NAVIGATION_LOAD:"PAGHomeNav_Navigation_Load",MODEL_OVERLAY_LOAD:"PAGHomeNav_ModelRangeOverlay_Load",MENU_BACK_CLICK:"PAGHomeNav_MenuBack_Click",MENU_CLOSE_CLICK:"PAGHomeNav_MenuClose_Click",META_FUNCTION_CLICK:"PAGHomeNav_MetaFunction_Click",MODEL_CLICK:"PAGHomeNav_Model_Click",MODEL_META_FUNCTION_CLICK:"PAGHomeNav_ModelMetaFunction_Click",MODEL_RANGE_CLICK:"PAGHomeNav_ModelRange_Click",MORE_CLICK:"PAGHomeNav_More_Click",NAVIGATION_CLICK:"PAGHomeNav_Navigation_Click",DEALER_SEARCH_SCREEN_LOAD:"PAGHomeNav_FindADealerSearchScreen_Load",DEALER_RESULTS_SCREEN_LOAD:"PAGHomeNav_FindADealerResultsScreen_Load",DEALER_SEARCH_CLICK:"PAGHomeNav_FindADealerSearch_Click",DEALER_GEOLOCATION_CLICK:"PAGHomeNav_FindADealerLocateMe_Click",DEALER_RESULT_CLICK:"PAGHomeNav_FindADealerDealer_Click",DEALER_DETAILS_SCREEN_LOAD:"PAGHomeNav_FindADealerDealerScreen_Load",DEALER_CONTACT_CLICK:"PAGHomeNav_FindADealerDealerContact_Click",DEALER_MAP_CLICK:"PAGHomeNav_FindADealerMap_Click"},D={Link:"link",Button:"button",Image:"image"},v="nav_saved_dealer",U="by geolocation",S=7776e6,w="porsche.com",x="auth-iframe-header-navigation",y={Model:"model-variant",Level1:"level1-variant"};function k(e){return a[e]}function b(e,s){return e&&"object"==typeof e&&s in e}function P(e){return"string"==typeof e&&e.length>0}function M(e){return"string"==typeof e?e:""}function E(e){return e instanceof HTMLElement?e:null}function G(e){var s;null===(s=E(e))||void 0===s||s.focus()}function H(e){return e instanceof HTMLInputElement?e:null}function F(e){return 0===e.x&&0===e.y}function u(e){return e===d}function V(e){return!u(e)&&!function Y(e){return e===l}(e)}function K(e,s){return e===m?s:e}function B(e){return Object.entries(e).map(([s,Q])=>`${encodeURIComponent(s)}=${encodeURIComponent(Q)}`).join("&")}function z(...e){return e.join("---")}function j(e,s=!1){return s?e>=t.s:e>=t.l}function Z(e){switch(e){case t.xxl:case t.xl:return 1920;case t.l:return 1366;case t.m:return 1024;case t.s:return 768;case t.xs:return 375;default:return 320}}},572:(R,i,r)=>{r.r(i),r.d(i,{phn_car_series_headline:()=>c,phn_car_series_tag_list:()=>a});var t=r(438),p=r(598);const c=class{constructor(o){(0,t.r)(this,o),this.series=void 0,this.isInline=void 0}render(){var o;const n=(null===(o=this.series.tags)||void 0===o?void 0:o.length)>0;return(0,t.h)("phn-p-flex",{wrap:"wrap","align-items":"center"},(0,t.h)("phn-p-flex-item",{width:this.isInline?"auto":"full"},(0,t.h)("phn-p-text",{class:"series-name-feature-enabled",size:"inherit",weight:"semibold","data-test-id":"car-series-headline-text"},this.series.name)),n&&this.isInline?(0,t.h)("phn-p-divider",{orientation:"vertical"}):null,n?(0,t.h)("phn-car-series-tag-list",{tags:this.series.tags}):null)}};c.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.sc-phn-car-series-headline-h{display:block;border-bottom:1px solid #0e1418;padding-bottom:1rem}@media (min-width: 760px){.sc-phn-car-series-headline-h{padding-bottom:0.75rem}}@media (min-width: 760px){.sc-phn-car-series-headline-h{padding-bottom:0.75rem}}@media (min-width: 1300px){.sc-phn-car-series-headline-h{padding-top:1.5rem;padding-bottom:1rem;border-bottom:0}}@media (min-width: 1920px){.sc-phn-car-series-headline-h{padding-top:2.25rem;padding-bottom:1.5rem}}.sc-phn-car-series-headline-h phn-p-text.sc-phn-car-series-headline{font-size:1.5rem;padding-bottom:0.5rem}@media (min-width: 760px){.sc-phn-car-series-headline-h phn-p-text.sc-phn-car-series-headline{font-size:2.25rem;padding-bottom:0}}.sc-phn-car-series-headline-h phn-p-text.series-name-feature-enabled.sc-phn-car-series-headline{font-size:1.75rem;padding-bottom:0.5rem}@media (min-width: 480px){.sc-phn-car-series-headline-h phn-p-text.series-name-feature-enabled.sc-phn-car-series-headline{padding-bottom:0}}@media (min-width: 760px){.sc-phn-car-series-headline-h phn-p-text.series-name-feature-enabled.sc-phn-car-series-headline{font-size:2.25rem}}.sc-phn-car-series-headline-h phn-p-divider.sc-phn-car-series-headline{height:2rem;margin:0 1rem}";const a=class{constructor(o){(0,t.r)(this,o),this.tags=void 0}render(){return(0,t.h)(t.H,null,this.tags.map(o=>(0,t.h)("div",{class:"tag-container",key:o.text},(0,p.i)(o.icon)?(0,t.h)("phn-p-icon",{class:"tag-icon",size:"inherit",name:o.icon}):null,(0,t.h)("phn-p-text",{size:"x-small",class:"tag-text"},o.text))))}};a.style=".sc-phn-car-series-tag-list-h{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:0.5rem 1.375rem}.tag-container.sc-phn-car-series-tag-list{display:inline-block}.tag-icon.sc-phn-car-series-tag-list{display:inline-block;margin-right:0.25rem;width:1.125rem;height:1.125rem;vertical-align:middle}.tag-text.sc-phn-car-series-tag-list{display:inline-block}"}}]);