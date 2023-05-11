"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[375],{7522:(v,p,e)=>{e.d(p,{c:()=>g,g:()=>r,i:()=>l});var i=e(5861),a=e(8753);const r=()=>a.f.isOneUiToggleActive()?"default":"pds2";function l(){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(function*(){if(a.f.isOneUiToggleActive()){const{load:u}=yield e.e(610).then(e.bind(e,3610));u({prefix:"phn"})}else{const{load:u}=yield e.e(613).then(e.bind(e,4613));u({prefix:"phn"})}})).apply(this,arguments)}function g(u){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)(function*(u){let f;if(a.f.isOneUiToggleActive()){const{componentsReady:y}=yield e.e(610).then(e.bind(e,3610));f=y}else{const{componentsReady:y}=yield e.e(613).then(e.bind(e,4613));f=y}yield f(u)})).apply(this,arguments)}},8753:(v,p,e)=>{e.d(p,{F:()=>g,a:()=>u,f:()=>t,l:()=>M});var i=e(5861),a=e(8314),r=e(4164),l=e(908);const g="navi_3",h="one_ui",u="porsche_75_years_logo",f="shop",E={local:{featureOverrideEnabled:{enabled:!0},homenav_1723:{enabled:!0},navi_3:{enabled:!1},porsche_75_years_logo:{enabled:!1},one_ui:{enabled:!1},mock_shop_content:{enabled:!1},shop:{enabled:!1},pcom_search:{enabled:!1}},preview:{featureOverrideEnabled:{enabled:!0},homenav_1723:{enabled:!0},navi_3:{enabled:!1},porsche_75_years_logo:{enabled:!1},one_ui:{enabled:!1},mock_shop_content:{enabled:!1},shop:{enabled:!1},pcom_search:{enabled:!1}},test:{featureOverrideEnabled:{enabled:!0},homenav_1723:{enabled:!0},navi_3:{enabled:!0},porsche_75_years_logo:{enabled:!1},one_ui:{enabled:!1},mock_shop_content:{enabled:!1},shop:{enabled:!1},pcom_search:{enabled:!1}},production:{featureOverrideEnabled:{enabled:!1},homenav_1723:{enabled:!1},navi_3:{enabled:!0},porsche_75_years_logo:{enabled:!1},mock_shop_content:{enabled:!1},shop:{enabled:!1},pcom_search:{enabled:!1}}},M=new class D{constructor(){this.env=null,this.version=r.V,this.breakpoint=0,this.locale=null}init(n,o,c){this.env=n,this.breakpoint=o,this.locale=c}log(n,o,c,x,b){if(this.env!==a.E.TEST)try{const w=JSON.stringify({name:n,level:o,env:this.env,breakpoint:this.breakpoint,locale:this.locale,version:this.version,hostname:l.w.location.hostname,pathname:l.w.location.pathname,id:c,errorType:b||"",message:x});this.env===a.E.PRODUCTION?"debug"!==o&&fetch("https://logs.nav.porsche.com",{method:"POST",body:w,mode:"no-cors"}):console[o](w)}catch{}}info(n,o=""){this.log("PHN_HEADER_LOG_ENTRY","info",n,o)}error(n,o){this.log("PHN_HEADER_LOG_ENTRY","error",n,o.message,o instanceof l.N?o.type:l.a.GENERAL)}},t=new class R{constructor(n=(0,a.g)(r.v),o=E){this.featureEnvMap=o,this.features={},this.env="local",this.isOneUiToggleActive=()=>this.isFeatureEnabled(h,l.w.location.search),this.isShopToggleActive=()=>this.isFeatureEnabled(f,l.w.location.search),this.isPcomSearchToggleActive=()=>this.isFeatureEnabled("pcom_search",l.w.location.search),this.env=n,this.features=this.featureEnvMap[n]}loadRemoteToggles(){var n=this;return(0,i.Z)(function*(){try{const o=(0,r.h)(n.env).BFF_ENDPOINT,c=yield fetch(`${o}/toggles?env=${n.env}`);if(!c.ok){const b=yield c.text();throw new Error(b)}const x=yield c.json();n.features=x}catch(o){throw new l.N(`Load Feature Toggles failed with error: ${o}`,l.a.GENERAL)}})()}stringToBooleanStrict(n){return"true"===n||"false"!==n&&null}getUrlFeatureToggleOverride(n,o){var c,x;const b=null===(x=null===(c=o.split("?")[1])||void 0===c?void 0:c.split("&").find(w=>w.includes(n)))||void 0===x?void 0:x.split("=")[1];return(0,r.i)(b)?this.stringToBooleanStrict(b||""):null}getLocalStorageFeatureToggleOverride(n){const o=localStorage.getItem(`phn.${n}`);return(0,r.i)(o)?this.stringToBooleanStrict(o):null}isFeatureEnabled(n,o){var c;if(void 0===this.features||this.env===a.E.PRODUCTION&&this.isOnSecurityLayer(n))return!1;if(null!==(c=this.features.featureOverrideEnabled)&&void 0!==c&&c.enabled){const x=[this.getUrlFeatureToggleOverride(n,o),this.getLocalStorageFeatureToggleOverride(n)];for(const b of x)if(null!==b)return b}return void 0!==this.features[n]&&this.features[n].enabled}setFeatures(n){var o=this;return(0,i.Z)(function*(){o.env=n;try{if("test"===n)return void(o.features=o.featureEnvMap[n]);yield o.loadRemoteToggles()}catch(c){M.error("INIT_APP_CONFIG",c),o.features=o.featureEnvMap[n]}})()}isOnSecurityLayer(n){return[h,f].includes(n)}}},4047:(v,p,e)=>{e.d(p,{f:()=>P,n:()=>s});var i=e(8314),a=e(4164);const r={id:"",text:"",link:"",icon:"",description:""},l={id:"",text:"",description:""},h={id:"",text:"",link:"",children:[]};function P(d,E){if(!(0,a.i)(E))return null;if(null!==d){if(d.id===E)return d;if(!Array.isArray(d.children))return null;for(const O of d.children){const D=P(O,E);if(null!==D)return D}}return null}const s=(0,i.c)({menu:l,crest:r,back:l,close:l,accessibilityStatement:r,countryRecommender:{statement:"",region:"",language:"",change:l},contextualButtons:{},contextualLinks:{},models:{text:"",id:"",all:{id:"",text:"",link:"",icon:"",description:""},series:[]},dealer:{id:"",text:"",search:{id:"",text:"",form:{inputPlaceholder:"",inputDescription:""},clear:l,or:"",geolocation:l,load:"",map:r},details:{id:"",finder:r,bookService:r,backToSearch:""}},myPorsche:{id:"",text:"",link:"",loggedInFallback:"",login:r,loginText:"",logout:r,messages:r,more:null,signup:r,signupText:"",links:[]},vehiclePurchase:h,shop:h,experience:h,services:h,error:{wrong:"",retry:"",noResults:"",noInput:"",invalidInput:"",geolocationDenied:""},loadingDescription:"",legacyMore:h,legacyShop:h})},4766:(v,p,e)=>{e.d(p,{n:()=>r});var i=e(8314),a=e(4164);const r=(0,i.c)({loggedInState:a.L,unreadMessagesCount:a.D,userConsent:!1,env:(0,i.g)(a.v)})},3375:(v,p,e)=>{e.r(p),e.d(p,{phn_autocomplete_search_field:()=>O,phn_myporsche_login:()=>R});var i=e(1502),a=e(4766),r=e(4164),l=e(9665),m=e(5928),g=e(3659),h=e(7837),u=e(7522);e(8314),e(908),e(21),e(1077),e(4047),e(8753);const O=class{constructor(t){(0,i.r)(this,t),this.searchInput=(0,i.c)(this,"searchInput",7),this.clearSearch=(0,i.c)(this,"clearSearch",7),this.submitSearch=(0,i.c)(this,"submitSearch",7),this.predictionsToggle=(0,i.c)(this,"predictionsToggle",7),this.autoCompleteLoaded=(0,i.c)(this,"autoCompleteLoaded",7),this.placeholder=void 0,this.predictions=void 0,this.initialValue="",this.errorState="",this.errorMessage="",this.showPredictions=!1,this.highlightedPredictionIndex=-1,this.searchterm=this.initialValue}clickListener(t){this.showPredictions=t.composedPath()[0]===this.el.querySelector("input.autofocus")&&this.predictions.length>0}keydownListener(t){"Escape"===t.key&&this.showPredictions&&(t.preventDefault(),t.stopPropagation(),this.showPredictions=!1)}watchShowPredictions(t){this.predictionsToggle.emit(t)}watchInitialValue(){this.searchterm=this.initialValue}componentDidRender(){this.autoCompleteLoaded.emit(!0)}onKeyDown(t){if(0!==this.predictions.length){switch(t){case"ArrowDown":if(!this.showPredictions)return;if(this.highlightedPredictionIndex===this.predictions.length-1){this.highlightedPredictionIndex=0;break}this.highlightedPredictionIndex++;break;case"ArrowUp":if(!this.showPredictions)return;if(this.highlightedPredictionIndex<0){this.highlightedPredictionIndex=0;break}if(0===this.highlightedPredictionIndex){this.highlightedPredictionIndex=this.predictions.length-1;break}this.highlightedPredictionIndex--}this.highlightedPredictionIndex>-1&&(this.searchterm=this.predictions[this.highlightedPredictionIndex].text)}}onSubmit(){const t=this.highlightedPredictionIndex<0?this.predictions[0]:this.predictions[this.highlightedPredictionIndex];this.submitSearch.emit(t??null),this.showPredictions=!1,void 0!==t&&(this.searchterm=t.text)}render(){return(0,i.h)("form",{class:"form-container",onSubmit:t=>{t.preventDefault(),this.onSubmit()}},(0,i.h)("phn-p-text-field-wrapper",{"data-test-id":"dealer-search-form-input",state:(0,r.i)(this.errorMessage)?"error":"none",message:this.errorMessage},(0,i.h)("input",{class:"autofocus","aria-label":"Find a dealer by typing a city name or zip code",type:"search",placeholder:this.placeholder,autocomplete:"off",role:"combobox","data-validate":"required","aria-expanded":(this.predictions.length>0&&this.showPredictions).toString(),"aria-controls":"predictions","aria-autocomplete":"list","aria-activedescendant":this.showPredictions?String(this.highlightedPredictionIndex):void 0,value:this.searchterm,onInput:t=>{var _;t.preventDefault(),this.showPredictions=!0,this.highlightedPredictionIndex=-1;const n=null===(_=(0,r.H)(t.target))||void 0===_?void 0:_.value;if(!(0,r.i)(n))return this.searchterm="",this.showPredictions=!1,void this.clearSearch.emit();this.searchInput.emit(n)},onKeyDown:t=>{this.onKeyDown(t.key)}})),this.predictions.length>0&&this.showPredictions?(0,i.h)("div",{class:"prediction-container"},(0,i.h)("ul",{id:"predictions","data-test-id":"dealer-search-autocomplete-predictions",role:"listbox","aria-label":"List of location predictions"},this.predictions.map((t,_)=>(0,i.h)("li",{key:t.id,class:_===this.highlightedPredictionIndex?"highlighted-prediction":"",role:"option","aria-selected":String(_===this.highlightedPredictionIndex),id:String(_),onClick:()=>{this.highlightedPredictionIndex=_,this.onSubmit()},onKeyDown:n=>{"Enter"===n.key&&this.onSubmit()}},(0,i.h)("phn-p-text",{color:"inherit"},t.text)))),(0,i.h)("img",{class:"powered-by-google",src:(0,i.e)(`${(0,r.h)(a.n.state.env).ASSETS_URL}/icon-assets/powered_by_google_on_white.png`),alt:"powered by Google"})):null)}get el(){return(0,i.g)(this)}static get watchers(){return{showPredictions:["watchShowPredictions"],initialValue:["watchInitialValue"]}}};O.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.phn-flex-col.sc-phn-autocomplete-search-field{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-autocomplete-search-field{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-autocomplete-search-field{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-justify-around.sc-phn-autocomplete-search-field{-ms-flex-pack:distribute;justify-content:space-around}.sc-phn-autocomplete-search-field-h{display:block}.sc-phn-autocomplete-search-field-h .form-container.sc-phn-autocomplete-search-field{display:block;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-phn-autocomplete-search-field-h .form-container.sc-phn-autocomplete-search-field phn-p-text-field-wrapper.sc-phn-autocomplete-search-field{width:100%}.sc-phn-autocomplete-search-field-h .form-container.inline-search-form.sc-phn-autocomplete-search-field{margin-right:1rem}.sc-phn-autocomplete-search-field-h .prediction-container.sc-phn-autocomplete-search-field{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:10;width:100%;background-color:white;border:1px solid #e3e4e5}.sc-phn-autocomplete-search-field-h .prediction-container.sc-phn-autocomplete-search-field ul.sc-phn-autocomplete-search-field{margin-block:0;margin-inline:0;padding-inline:0;list-style-type:none}.sc-phn-autocomplete-search-field-h .prediction-container.sc-phn-autocomplete-search-field ul.sc-phn-autocomplete-search-field li.sc-phn-autocomplete-search-field{padding-left:0.75rem;padding:0.5rem 0 0.5rem 0.75rem}.sc-phn-autocomplete-search-field-h .prediction-container.sc-phn-autocomplete-search-field ul.sc-phn-autocomplete-search-field li.sc-phn-autocomplete-search-field:hover{color:#d5001c;background-color:#f2f2f2}.sc-phn-autocomplete-search-field-h .prediction-container.sc-phn-autocomplete-search-field ul.sc-phn-autocomplete-search-field li.highlighted-prediction.sc-phn-autocomplete-search-field{color:#d5001c}.sc-phn-autocomplete-search-field-h .prediction-container.sc-phn-autocomplete-search-field .powered-by-google.sc-phn-autocomplete-search-field{margin:0.75rem 0 0.75rem 0.75rem}";const R=class{constructor(t){(0,i.r)(this,t),this.loginEvent=(0,i.c)(this,"loginEvent",7),this.login=void 0,this.more=null,this.signup=void 0,this.signupText=void 0,this.pdsMode=(0,u.g)()}sendDataLayerEvent(t){l.g.pushDataLayerEvent(m.E.NAVIGATION_LINK_CLICK,{componentClick:{clickElementId:t?.id,clickElementName:t?.text,clickElementType:m.C.Link,targetUrl:t?.link},componentDisplay:{displayElementId:g.a.calculateDisplayElementId(),displayElementType:g.a.calculateDisplayElementType(h.a.MY_PORSCHE,m.c.myPorscheDrawer),displayElementName:t?.text}})}render(){return(0,i.h)(i.F,null,(0,i.h)("div",{class:"button-container"},(0,i.h)("phn-p-button",{variant:"primary",class:"login",onClick:()=>{this.loginEvent.emit(),this.sendDataLayerEvent(this.login)}},this.login.text),this.more&&(0,r.i)(this.more.link)?(0,i.h)("phn-p-link",{variant:"tertiary",class:"more",href:this.more.link,onClick:()=>{this.sendDataLayerEvent(this.more)}},this.more.text):null),(0,i.h)("div",null,(0,i.h)("phn-p-link-pure",{icon:"none",href:this.signup.link,onClick:()=>{this.sendDataLayerEvent(this.signup)}},this.signup.text),(0,i.h)("phn-p-text",null,"\xa0",this.signupText)))}};R.style={default:".sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default{display:-ms-flexbox;display:flex}@media (min-width: 0px) and (max-width: 479px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}}@media (min-width: 760px) and (max-width: 1299px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}}.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .login.sc-phn-myporsche-login-default{padding:2.25rem 0 1rem 0}@media (min-width: 0px) and (max-width: 759px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .login.sc-phn-myporsche-login-default{width:100%;padding-top:0}}@media (min-width: 480px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .login.sc-phn-myporsche-login-default{padding:0 0.5rem 1rem 0}}@media (min-width: 760px) and (max-width: 1299px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .login.sc-phn-myporsche-login-default{padding:0 0 1rem 0}}@media (min-width: 1760px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .login.sc-phn-myporsche-login-default{padding:0 1rem 1.4375rem 0}}.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .more.sc-phn-myporsche-login-default{padding:0 0 1rem 0}@media (min-width: 0px) and (max-width: 759px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .more.sc-phn-myporsche-login-default{width:100%}}@media (min-width: 480px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .more.sc-phn-myporsche-login-default{padding:0 0 1rem 0.5rem}}@media (min-width: 760px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .more.sc-phn-myporsche-login-default{padding:0 0 1.4375rem 0}}@media (min-width: 1760px){.sc-phn-myporsche-login-default-h .button-container.sc-phn-myporsche-login-default .more.sc-phn-myporsche-login-default{padding:0 1rem 1.4375rem 0}}.sc-phn-myporsche-login-default-h phn-p-text.sc-phn-myporsche-login-default{padding-bottom:1.5rem;border-bottom:2px solid #d8d8db}.sc-phn-myporsche-login-default-h phn-p-link-pure.sc-phn-myporsche-login-default{float:left;text-decoration:underline}",pds2:".sc-phn-myporsche-login-pds2-h{display:block}.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:column;flex-direction:column}@media (min-width: 480px){.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2{-ms-flex-direction:row;flex-direction:row}}@media (min-width: 760px){.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2{-ms-flex-direction:column;flex-direction:column}}@media (min-width: 1920px){.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2{-ms-flex-direction:row;flex-direction:row}}.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2 .login.sc-phn-myporsche-login-pds2{width:100%;padding:2.25rem 0 1rem 0}@media (min-width: 480px){.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2 .login.sc-phn-myporsche-login-pds2{padding:2.25rem 0.5rem 1rem 0}}@media (min-width: 760px){.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2 .login.sc-phn-myporsche-login-pds2{padding:0 1rem 1rem 0}}@media (min-width: 1760px){.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2 .login.sc-phn-myporsche-login-pds2{padding:0 1rem 1.4375rem 0}}.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2 .more.sc-phn-myporsche-login-pds2{padding:0 0 1rem 0;width:100%}@media (min-width: 480px){.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2 .more.sc-phn-myporsche-login-pds2{padding:2.25rem 0 1rem 0.5rem}}@media (min-width: 760px){.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2 .more.sc-phn-myporsche-login-pds2{padding:0 0 1.4375rem 0}}@media (min-width: 1760px){.sc-phn-myporsche-login-pds2-h .button-container.sc-phn-myporsche-login-pds2 .more.sc-phn-myporsche-login-pds2{padding:0 1rem 1.4375rem 0}}.sc-phn-myporsche-login-pds2-h phn-p-text.sc-phn-myporsche-login-pds2{padding-bottom:1.5rem;border-bottom:2px solid #e3e4e5}.sc-phn-myporsche-login-pds2-h phn-p-link-pure.sc-phn-myporsche-login-pds2{float:left;text-decoration:underline}"}},21:(v,p,e)=>{e.d(p,{r:()=>a});const a=(0,e(8314).c)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})},7837:(v,p,e)=>{e.d(p,{R:()=>r,a:()=>a,b:()=>P,c:()=>h,d:()=>T,e:()=>l,f:()=>m,g:()=>f,h:()=>g,i:()=>u,r:()=>y});var i=e(4164);const a={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",SERVICES:"services",MODELS:"models"};var r=(()=>{return(s=r||(r={}))[s.LEVEL_ZERO=-1]="LEVEL_ZERO",s[s.LEVEL_ONE=0]="LEVEL_ONE",s[s.LEVEL_TWO=1]="LEVEL_TWO",r;var s})();function l(...s){return s.reduce((d,E)=>[...d,...(0,i.g)(E).split("/")],[]).filter(Boolean).join("/")}function m(s){if((0,i.i)(s))return Object.values(a).find(d=>s.startsWith(d))}function g(...s){return l(a.MODELS,...s)}function h(...s){return l(a.DEALER_SEARCH,...s)}function u(...s){return l(a.MY_PORSCHE,...s)}function f(s){return s.split("/").slice(-1)[0]}function y(s){return s.split("/").slice(0,-1).join("/")}function T(s){switch(m(s)){case a.MAIN_MENU:return 1;case s:return 2;default:return s.split("/").length+1}}function P(s){const d=y(s);return(0,i.i)(d)?d:a.MAIN_MENU}}}]);