"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[258],{181:(H,A,_)=>{_.d(A,{F:()=>N,f:()=>g,l:()=>w});var c=_(861),h=_(556),u=_(49),x=_(997);const N="porsche_75_years_logo",i={local:{featureOverrideEnabled:{enabled:!0},homenav_1723:{enabled:!0},navi_3:{enabled:!1},porsche_75_years_logo:{enabled:!1},one_ui:{enabled:!1},mock_shop_content:{enabled:!1},shop:{enabled:!1},pcom_search:{enabled:!1}},preview:{featureOverrideEnabled:{enabled:!0},homenav_1723:{enabled:!0},navi_3:{enabled:!1},porsche_75_years_logo:{enabled:!1},one_ui:{enabled:!1},mock_shop_content:{enabled:!1},shop:{enabled:!1},pcom_search:{enabled:!1}},test:{featureOverrideEnabled:{enabled:!0},homenav_1723:{enabled:!0},navi_3:{enabled:!0},porsche_75_years_logo:{enabled:!1},one_ui:{enabled:!1},mock_shop_content:{enabled:!1},shop:{enabled:!1},pcom_search:{enabled:!1}},production:{featureOverrideEnabled:{enabled:!1},homenav_1723:{enabled:!1},navi_3:{enabled:!0},porsche_75_years_logo:{enabled:!1},mock_shop_content:{enabled:!1},shop:{enabled:!1},pcom_search:{enabled:!1}}},w=new class v{constructor(){this.env=null,this.version=u.V,this.breakpoint=0,this.locale=null}init(a,l,f){this.env=a,this.breakpoint=l,this.locale=f}log(a,l,f,E,y){if(this.env!==h.b.TEST)try{const R=JSON.stringify({name:a,level:l,env:this.env,breakpoint:this.breakpoint,locale:this.locale,version:this.version,hostname:x.w.location.hostname,pathname:x.w.location.pathname,id:f,errorType:y||"",message:E});this.env===h.b.PRODUCTION?"debug"!==l&&fetch("https://logs.nav.porsche.com",{method:"POST",body:R,mode:"no-cors"}):console[l](R)}catch{}}info(a,l=""){this.log("PHN_HEADER_LOG_ENTRY","info",a,l)}error(a,l){this.log("PHN_HEADER_LOG_ENTRY","error",a,l.message,l instanceof u.N?l.type:u.a.GENERAL)}},g=new class O{constructor(a=(0,h.g)(u.w),l=i){this.featureEnvMap=l,this.features={},this.env="local",this.isShopToggleActive=()=>this.isFeatureEnabled("shop",x.w.location.search),this.isPcomSearchToggleActive=()=>this.isFeatureEnabled("pcom_search",x.w.location.search),this.isSavedItemsToggleActive=()=>this.isFeatureEnabled("saved_items",x.w.location.search),this.isABTestingToggleActive=()=>this.isFeatureEnabled("ab",x.w.location.search),this.isDealerSearchChinaEnabled=()=>this.isFeatureEnabled("dealer_search_china",x.w.location.search),this.env=a,this.features=this.featureEnvMap[a]}loadRemoteToggles(){var a=this;return(0,c.Z)(function*(){try{const l=(0,u.b)(a.env).BFF_ENDPOINT,f=yield fetch(`${l}/toggles?env=${a.env}`);if(!f.ok){const y=yield f.text();throw new Error(y)}const E=yield f.json();a.features=E}catch(l){throw new u.N(`Load Feature Toggles failed with error: ${l}`,u.a.GENERAL)}})()}stringToBooleanStrict(a){return"true"===a||"false"!==a&&null}getUrlFeatureToggleOverride(a,l){var f,E;const y=null===(E=null===(f=l.split("?")[1])||void 0===f?void 0:f.split("&").find(R=>R.includes(a)))||void 0===E?void 0:E.split("=")[1];return(0,u.i)(y)?this.stringToBooleanStrict(y||""):null}getLocalStorageFeatureToggleOverride(a){const l=localStorage.getItem(`phn.${a}`);return(0,u.i)(l)?this.stringToBooleanStrict(l):null}isFeatureEnabled(a,l){var f;if(void 0===this.features||this.env===h.b.PRODUCTION&&this.isOnSecurityLayer(a))return!1;if(null!==(f=this.features.featureOverrideEnabled)&&void 0!==f&&f.enabled){const E=[this.getUrlFeatureToggleOverride(a,l),this.getLocalStorageFeatureToggleOverride(a)];for(const y of E)if(null!==y)return y}return void 0!==this.features[a]&&this.features[a].enabled}setFeatures(a){var l=this;return(0,c.Z)(function*(){l.env=a;try{if("test"===a)return void(l.features=l.featureEnvMap[a]);yield l.loadRemoteToggles()}catch(f){w.error("INIT_APP_CONFIG",f),l.features=l.featureEnvMap[a]}})()}isOnSecurityLayer(a){return[""].includes(a)}}},551:(H,A,_)=>{_.d(A,{g:()=>se});var c=_(556),h=_(49),u=Object.defineProperty,b=(o,e,t)=>(((o,e,t)=>{e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t})(o,"symbol"!=typeof e?e+"":e,t),t);const I={clean:{enabled:!1,executionPlace:"AFTER_MERGE",values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}};class U{create(e){return"string"!=typeof e.event||0===e.event.length?{}:{context:{eventAction:e.event}}}}const k=(o,e)=>((o,e)=>{let t;for(t in o)if(o&&o[t]&&!1===e(o[t],t))return!1;return!0})(o,(t,s)=>{for(const d in o[s])if(!1===e(t[d],d,t,s))return!1;return!0}),L=o=>{for(const e in o)return!1;return!0},T=(o,e=(t=>null==(t=I.clean)?void 0:t.values)()||[])=>(k(o,(t,s,d,S)=>{e.includes(t)&&(delete d[s],L(d)&&delete o[S])}),o),r=o=>(k(o,(e,t,s)=>("function"!=typeof e||(s[t]=e()),!0)),o),n=(o,e)=>{const t=e.split(".");if(2!==t.length)return;const s=o[t[0]];return s?s[t[1]]:void 0},p=I.logging;var v=(o=>(o[o.error=0]="error",o[o.warn=1]="warn",o[o.log=2]="log",o))(v||{});const w=class{constructor(o,e){b(this,"prefix"),b(this,"settings"),this.prefix=o,this.settings={...p,...e}}_getMergedSettings(o){return o?{...this.settings,...o}:this.settings}_isAllowed(o,e){if(!w.isAvailable||!e.enabled)return!1;const t=v[e.level];switch(o){case"error":case"warn":return t>=v[o];case"info":case"log":case"debug":case"dir":return t>=2;default:return!1}}_log(o,e="log",t){const s=this._getMergedSettings(t);this._isAllowed(e,s)&&("dir"===e?(console.log(`[${this.prefix}] ${e}:`),console[e](o)):console[e](`[${this.prefix}] ${o}`))}log(o,e){this._log(o,"log",e)}dir(o,e){this._log(o,"dir",e)}debug(o,e){this._log(o,"debug",e)}error(o,e){this._log(o,"error",e)}info(o,e){this._log(o,"info",e)}warn(o,e){this._log(o,"warn",e)}};let O=w;b(O,"isAvailable",typeof console<"u");const g=(...o)=>{const e={};return o.forEach(t=>{if(L(t))return;const s={...e,...t};let d;for(d in s)e[d]="object"!=typeof s[d]||Array.isArray(s[d])?s[d]:{...e[d],...t[d]}}),e};class P{create(e){return T({context:{timestamp:e.timestamp,server:e.hostname},pageExperience:{pageId:e.url},visitor:{deviceBrowserBreakpoint:e.breakpoint,deviceBrowserHeight:e.height,deviceBrowserOrientation:e.orientation,deviceBrowserWidth:e.width,deviceType:e.deviceType,useragent:e.userAgent}},[void 0])}}const a=I.webProperties,l=()=>window.location.href.replace(/[?#].*/,""),y=()=>window.innerHeight.toString(),R=()=>window.innerHeight>window.innerWidth?"p":"l",j=()=>window.innerWidth.toString(),Z=o=>{if(!o.breakpoints||o.breakpoints.length<1)return;const{breakpoints:e}=o,t=()=>{const s=window.innerWidth;let d=0,S=0;for(;S<e.length&&s>=e[S];)d=e[S],S++;return d.toString()};return o.reactiveDimensions?t:t()},Q=(o,e)=>{switch(e){case"string":case"number":case"boolean":return typeof o===e;case"any[]":return Array.isArray(o)&&o.length>0;case"Record<string, any>":return"object"==typeof o&&!Array.isArray(o)&&Object.keys(o).length>0;case"any":return!0;default:if(e.indexOf("|")>0){const t=e.split("|").map(s=>s.trim().replace(/(^ ?'?|'? ?$)/g,""));return"string"==typeof o&&t.includes(o)}}return!0};class ee{constructor(e,t,s="GlobalDataLayer"){b(this,"_className"),b(this,"_settings"),b(this,"_defaultProperties"),b(this,"_logger"),b(this,"_webPropertiesHandled",!1),b(this,"_dataLayerStore"),b(this,"_extensions",new Map);const d=g(I,e||{});this._className=s,this._logger=new O(this._className,d.logging),this._settings=d,t?this._dataLayerStore=t:typeof window<"u"?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}setup(){this._handleDefaultWebProperties()}get Settings(){return this._settings}get DataLayerStore(){return this._dataLayerStore}getRegisteredExtension(e){const t=new e;return this.getRegisteredExtensionByClassName(t.className)}getRegisteredExtensionByClassName(e){return this._extensions.has(e)?this._extensions.get(e):void 0}getRegisteredExtensions(){const e=[];for(const t of this._extensions.values())e.push(t);return e}registerExtension(e,t=!1){t||!this._extensions.has(e.className)?(e.dataLayerInstance=this,this._extensions.set(e.className,e),this._logger.info(t?`Overriden registration for extension class <${e.className}>.`:`Registered extension class <${e.className}>.`)):this._logger.warn(`Tried to register extension class <${e.className}> which already exists.`)}removeExtension(e){const t=new e;this._extensions.has(t.className)?this._extensions.delete(t.className):this._logger.warn(`Tried to remove not existing extension class <${t.className}>.`)}removeExtensionByClassName(e){this._extensions.has(e)?this._extensions.delete(e):this._logger.warn(`Tried to remove not existing extension class <${e}>.`)}push(e,t=[{}],s){var d,S;if(0===e.length)return!1;const D=s&&!L(s)?g(this._settings,s):this._settings;Array.isArray(t)||(t=[t]),t.forEach(r);const Y=this._eventNamePayloadFactory.create({event:e}),V=r(this.getDefaultProperties(e));D.clean.enabled&&"BEFORE_MERGE"===D.clean.executionPlace&&[V||{},...t].forEach(C=>T(C,D.clean.values));const $=g(Y,V||{},...t);if(D.clean.enabled&&"AFTER_MERGE"===D.clean.executionPlace&&T($,D.clean.values),(null==(d=D?.validation)?void 0:d.enabled)&&(null==(S=D?.validation)?void 0:S.eventMatrix)){const C=((o,e,t)=>{const s={level:null,issues:[]};if(!t.enabled||!t.eventMatrix)return s;const{events:d,...S}=t.eventMatrix,D=d.indexOf(o);if(-1===D)return s.level="error",s.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:o,message:`'${o}': Event does not exist.`}),s;const Y=(o=>{if(!o)return[];const e=[];return k(o,(t,s,d,S)=>{e.push(`${S.toString()}.${s.toString()}`)}),e})(e),V=Object.keys(S),$=Y.filter(M=>!V.includes(M));let C;for(C in $.length>0&&(t.allowUnknown||((o,e)=>{o&&k(o,(t,s,d,S)=>{!e.includes(`${S.toString()}.${s.toString()}`)||(delete d[s],L(d)&&delete o[S])})})(e,$),$.forEach(M=>{var F;s.level=null!=(F=s.level)?F:"warn",s.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:M,message:`'${M}': Property does not exist in the given Event Matrix.${t.allowUnknown?"":" It was omitted from the DataLayer payload."}`})})),S){const M=S[C],F=typeof M.e[D]<"u",K=1===M.r,X=e?n(e,C):void 0,z=typeof X<"u";if(F&&K&&!z&&(s.level="error",s.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:C,message:`'${C}': The required property is missing.`}),!t.verbose)||z&&!Q(X,M.t)&&(s.level="error",s.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:C,message:`'${C}': Wrong type detected. Expected '${M.t}', got '${typeof X}'.`}),!t.verbose))return s}return s})(e,$,D.validation),M=C.issues.sort((F,K)=>F.level!==K.level&&"warn"===K.level?-1:0).map(F=>`- [${F.level}]: ${F.message}`).join("\n");switch(C.level){case"error":return this._logger.error(`Validation failed for event '${e}' with errors/warnings: \n${M}`,D.logging),!1;case"warn":this._logger.warn(`Validation success for event '${e}' with warnings: \n${M}`,D.logging);break;default:this._logger.info(`Validation success for event '${e}'.`,D.logging)}}return this._dataLayerStore.push($),!0}getDefaultProperties(e){const t={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach(d=>d.identifier===e?t.byName.push(d.data):Array.isArray(d.identifier)&&d.identifier.includes(e)?t.byArray.push(d.data):d.identifier instanceof RegExp&&d.identifier.test(e)?t.byRegex.push(d.data):void 0);const s=[...t.byRegex,...t.byArray,...t.byName];if(s.length)return g(...s)}setDefaultProperties(e,t){const s=this._defaultProperties.find(d=>d.identifier===e);s?s.data=g(s.data,t):this._defaultProperties.push({identifier:e,data:t})}_handleDefaultWebProperties(){if(this._webPropertiesHandled||!this._settings.webProperties.enabled)return;const e=((o,e)=>{const t={...a,...this._settings.webProperties},s={breakpoint:Z(t),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:t.reactiveUrl?l:l(),height:t.reactiveDimensions?y:y(),orientation:t.reactiveDimensions?R:R(),width:t.reactiveDimensions?j:j(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return e?e.create(s):s})(0,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,e),this._webPropertiesHandled=!0}}class te extends ee{constructor(e,t,s="GlobalDataLayer"){super(e,t,s),b(this,"_eventNamePayloadFactory"),b(this,"_webPayloadFactory"),this._eventNamePayloadFactory=new U,this._webPayloadFactory=new P,this.setup()}setup(){super.setup()}}function ne(o){switch(o){case c.b.PRODUCTION:return"P";case c.b.PREVIEW:return"PP";default:return"K"}}const se=new class oe{constructor(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}initialise(){this.gdl=new te}pushDataLayerEvent(e,t){t?this.gdl.push(e,t):this.gdl.push(e)}setEnvironment(e){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:ne(e)}})}setPageName(e){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:e}})}setUser(e,t){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:e},visitor:{loginStatus:t}})}setLocale(e){try{const{country:t,language:s}=(0,c.s)(e);this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:t,language:s}})}catch{}}setDefaultProperties(e,t){let s={context:{applicationId:c.c},visitor:{loginStatus:!1}};try{const{country:d,language:S}=(0,c.s)(e);s=Object.assign(Object.assign({},s),{context:Object.assign(Object.assign({},s.context),{country:d,language:S,applicationName:c.D})})}catch{}(0,h.i)(t)&&(s=Object.assign(Object.assign({},s),{pageExperience:{pageName:t}})),this.gdl.setDefaultProperties(this.homeNavEventId,s)}}},258:(H,A,_)=>{_.r(A),_.d(A,{phn_level_0_icons:()=>O});var c=_(565),h=_(862),u=_(49),x=_(551),b=_(556),N=_(181),I=_(946),U=_(916);function k(g,P){return N.f.isPcomSearchToggleActive()&&["de-DE","en-US","en-CN","zh-CN"].includes(g)&&P===u.A.pcom}function L(g){switch(g){case"de-DE":return"https://www.porsche.com/germany/search/";case"en-US":return"https://www.porsche.com/usa/search/";case"en-CN":return"https://www.porsche.com/china/en/search/";case"zh-CN":return"https://www.porsche.com/china/zh/search/";default:return""}}function T(){return(0,c.h)("div",{class:"skeleton-container"},(0,c.h)("div",{class:"pure-button-skeleton"}))}_(997);const i=({styleClass:g,theme:P,mode:a})=>{const{numberOfShoppingItems:f,shopInformation:E}=I.s.state;let y=E.numberOfShoppingItems;return 0===y&&(y=f),y<=0?"":(0,c.h)("span",{class:g,style:a===u.j.hero&&P===u.h.dark?{color:"black"}:{color:"white"}},y<99?y:"+99")},O=class{constructor(g){(0,c.r)(this,g),this.openDrawer=(0,c.c)(this,"openDrawer",7),this.locale=void 0,this.theme=u.h.light,this.mode=u.j.navbar,this.app=u.A.default,this.breakpoint=void 0,this.isLoading=void 0,this.isNavigationLoaded=void 0}render(){const g={locale:this.locale,app:this.app,mode:this.mode,theme:this.theme,isNavigationLoaded:this.isNavigationLoaded},l=(0,{pcom:()=>function r({locale:g,app:P,mode:a,theme:l,isNavigationLoaded:f}){return{leftIcons:k(g,P)?(0,c.h)("div",{class:"icon"},(0,c.h)("phn-p-link-pure",{icon:"search","hide-label":"true",stretch:"true",aria:"{ 'aria-haspopup': 'dialog', 'aria-label' : 'open the Porsche.com search' }","data-test-id":"pcom-search-button",target:"_self",href:L(g),onClick:()=>{!function E(y){x.g.pushDataLayerEvent(b.E.PCOM_SEARCH_CLICK,{componentClick:{clickElementId:"mainmenu.pcom.search",clickElementName:"Pcom Search",targetUrl:y}})}(L(g))},theme:(0,u.E)(l,a),style:f?{}:{display:"none"}}),f?null:T()):null,rightIcons:null}}(g),shop:()=>function n({locale:g,app:P,mode:a,theme:l,isNavigationLoaded:f}){function E(){var j;const W=null===(j=b.a.state.shop)||void 0===j?void 0:j.cart;return void 0!==W&&""!==W?`${W}`:""}return{leftIcons:(0,I.i)(g,P)?(0,c.h)("div",{class:"icon"},(0,c.h)("phn-p-button-pure",{icon:"search","hide-label":"true",stretch:"true",aria:"{ 'aria-haspopup': 'dialog', 'aria-label' : 'open the shop search field' }","data-test-id":"search-button",onClick:()=>{U.a.play("openContextualDrawer"),function p(){x.g.pushDataLayerEvent(b.E.CONTEXTUAL_BUTTON_CLICK,{componentClick:{clickElementId:"mainmenu.shop.search",clickElementName:"Shop search"}})}()},style:f?{}:{display:"none"},theme:(0,u.E)(l,a)}),f?null:T()):null,rightIcons:(0,I.i)(g,P)?(0,c.h)("div",{class:"icon"},(0,c.h)("phn-p-link-pure",{aria:function R(){const{shopInformation:j}=I.s.state;return`{ 'aria-label' : 'My shopping bag, ${j.numberOfShoppingItems} items, estimated subtotal ${j.subTotal}' }`}(),target:"_self","hide-label":"true",icon:"none",theme:(0,u.E)(l,a),style:f?{}:{display:"none"},class:"shopping-cart-link","data-test-id":"shopping-cart-link",onClick:()=>{!function v(g){x.g.pushDataLayerEvent(b.E.CONTEXTUAL_BUTTON_CLICK,{componentClick:{clickElementId:"mainmenu.shop.shoppingbag",clickElementName:"Shopping cart",targetUrl:g}})}(E())}},(0,c.h)("a",{href:E()},(0,c.h)("div",{class:"icon-flex"},(0,c.h)(i,{styleClass:"shopping-item-count",theme:l,mode:a}),(0,c.h)("phn-p-icon",{theme:(0,u.E)(l,a),name:function y(){const{numberOfShoppingItems:j,shopInformation:W}=I.s.state;let G=W.numberOfShoppingItems;switch(0===G&&(G=j),!0){case 0===G:return"shopping-bag";case G>0:return"shopping-bag-filled";default:return"shopping-bag"}}(),"data-test-id":"shopping-cart-link-icon"})))),f?null:T()):null}}(g),default:()=>({leftIcons:null,rightIcons:null})}[this.app])(),f=b.a.state.myPorsche;return(0,c.h)("div",{class:"contextual-icons"},(0,c.h)("div",{class:"left-icons"},(0,c.h)("phn-burger-button",{theme:this.theme,mode:this.mode,hideLabel:k(this.locale,this.app)||(0,I.i)(this.locale,this.app)?this.breakpoint<=u.q.xs:this.breakpoint<u.q.xs,alignLabel:"right",isLoading:this.isLoading,onClick:E=>{this.openDrawer.emit({initialRoutingKey:"",isKeyboardClick:(0,u.o)(E)})},style:this.isNavigationLoaded?{}:{display:"none"}}),this.isNavigationLoaded?null:function m(){return(0,c.h)("div",{class:"skeleton-container"},(0,c.h)("div",{class:"burger-button-skeleton"}))}(),this.breakpoint<=u.q.xs?l.leftIcons:null),(0,c.h)("slot",null),(0,c.h)("div",{class:"right-icons"},this.breakpoint>u.q.xs?l.leftIcons:null,l.rightIcons,f?(0,c.h)("div",{class:"icon"},(0,c.h)("phn-my-porsche-icon-button",{mode:this.mode,theme:this.theme,onClick:E=>{this.openDrawer.emit({initialRoutingKey:h.a.MY_PORSCHE,isKeyboardClick:(0,u.o)(E)})},style:this.isNavigationLoaded?{}:{display:"none"}}),this.isNavigationLoaded?null:T()):null))}};O.style='@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.phn-flex-col.sc-phn-level-0-icons{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-level-0-icons{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-level-0-icons{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-level-0-icons{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-level-0-icons{-ms-flex-pack:justify;justify-content:space-between}.contextual-icons.sc-phn-level-0-icons{display:grid;grid-template-columns:1fr auto 1fr;grid-template-rows:1fr;gap:0px 0px;grid-template-areas:"left center right";width:100%}.contextual-icons.sc-phn-level-0-icons div.left-icons.sc-phn-level-0-icons,.contextual-icons.sc-phn-level-0-icons div.right-icons.sc-phn-level-0-icons{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.contextual-icons.sc-phn-level-0-icons div.left-icons.sc-phn-level-0-icons{grid-area:left;justify-self:start}.contextual-icons.sc-phn-level-0-icons-s>*,.contextual-icons .sc-phn-level-0-icons-s>*{grid-area:center;justify-self:center}.contextual-icons.sc-phn-level-0-icons div.right-icons.sc-phn-level-0-icons{grid-area:right;justify-self:end}.contextual-icons.sc-phn-level-0-icons .icon-flex.sc-phn-level-0-icons{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons{position:relative;overflow:hidden;padding:0.375rem}.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons .shopping-cart-link.sc-phn-level-0-icons{position:relative;z-index:2}.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons .shopping-item-count.sc-phn-level-0-icons{position:absolute;z-index:12;font-size:7px;font-weight:600;line-height:28px;-ms-flex-pack:center;justify-content:center}@media (min-width: 1000px){.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons{padding:0.5rem}}@media (min-width: 1760px){.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons{padding:0.75rem}}.skeleton-container.sc-phn-level-0-icons{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;height:28px}.skeleton-container.sc-phn-level-0-icons .burger-button-skeleton.sc-phn-level-0-icons{margin-right:0.375rem;width:1.5rem;height:1.5rem;border-radius:4px;background:#e3e4e5}@media (min-width: 760px){.skeleton-container.sc-phn-level-0-icons .burger-button-skeleton.sc-phn-level-0-icons{width:4.75rem;height:1.5rem}}.skeleton-container.sc-phn-level-0-icons .pure-button-skeleton.sc-phn-level-0-icons{width:1.5rem;height:1.5rem;border-radius:4px;background:#e3e4e5}'},862:(H,A,_)=>{_.d(A,{R:()=>u,a:()=>h,b:()=>m,c:()=>I,d:()=>T,e:()=>x,f:()=>b,g:()=>k,h:()=>N,i:()=>B,j:()=>U,r:()=>L});var c=_(49);const h={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",SERVICES:"services",MODELS:"models"};var u=function(r){return r[r.LEVEL_ZERO=-1]="LEVEL_ZERO",r[r.LEVEL_ONE=0]="LEVEL_ONE",r[r.LEVEL_TWO=1]="LEVEL_TWO",r}(u||{});function x(...r){return r.reduce((n,i)=>[...n,...(0,c.g)(i).split("/")],[]).filter(Boolean).join("/")}function b(r){if((0,c.i)(r))return Object.values(h).find(n=>r.startsWith(n))}function N(...r){return x(h.MODELS,...r)}function I(...r){return x(h.DEALER_SEARCH,...r)}function U(...r){return x(h.MY_PORSCHE,...r)}function B(...r){return x(h.VEHICLE_PURCHASE,...r)}function k(r){return r.split("/").slice(-1)[0]}function L(r){return r.split("/").slice(0,-1).join("/")}function T(r){switch(b(r)){case h.MAIN_MENU:return 1;case r:return 2;default:return r.split("/").length+1}}function m(r){const n=L(r);return(0,c.i)(n)?n:h.MAIN_MENU}},946:(H,A,_)=>{_.d(A,{a:()=>N,b:()=>B,f:()=>U,g:()=>T,i:()=>x,l:()=>k,r:()=>I,s:()=>u});var c=_(49),h=_(556);const u=(0,h.d)({wishlistItemsNumber:0,numberOfShoppingItems:0,shopInformation:{numberOfShoppingItems:0,wishlistItemsNumber:0,subTotal:"0"}});function x(m,r){var n;const i=null===(n=h.a.state.shop)||void 0===n?void 0:n.availableLocales;return void 0!==i&&i.includes(m)&&r===c.A.shop}function N(m,r,n){return x(m,r)&&function b(m){var r,n;return(null===(n=null===(r=h.a.state.shop)||void 0===r?void 0:r.logoLinksToShopLocales)||void 0===n?void 0:n.includes(m))||!1}(m)&&null!==n}function I(m,r,n){const{shop:i,externalShop:p}=n;return null===i?n:p&&r!==c.A.shop?Object.assign(Object.assign({},n),{shop:Object.assign(Object.assign({},i),p)}):!i?.availableLocales.includes(m)||i?.availableLocalesOnlyForShop.includes(m)&&r!==c.A.shop?Object.assign(Object.assign({},n),{shop:Object.assign(Object.assign({},i),{text:""})}):n}function U(m,r){return m?.filter(n=>r.includes(null==n.authStatus?null:n.authStatus))}function B(){const{myPorsche:m}=h.a.state,{loggedInState:r}=h.n.state;let{wishlistItemsNumber:n}=u.state.shopInformation;return 0===n&&(n=u.state.wishlistItemsNumber),{wishlistItemsNumber:n,username:(0,c.z)(r,m?.loggedInFallback||"")}}function k(m){u.set("wishlistItemsNumber",m.wishlistItemsNumber),u.set("numberOfShoppingItems",m.numberOfShoppingItems),u.set("shopInformation",m.shopInformation)}function L(){const{shopInformation:m}=u.state,{wishlistItemsNumber:r}=u.state;return(m.wishlistItemsNumber>0?m.wishlistItemsNumber:r)>0?"heart-filled":"heart"}function T(m){const n={wishlist:L}[m];return"function"!=typeof n?null:n()}},997:(H,A,_)=>{_.d(A,{w:()=>m});var c=_(861),h=_(49);const k={base:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},m=new class L{constructor(){this.initialBodyStyleValues={top:"",position:"",inlineSize:"",overflowY:""},this.initialDocumentScrollTop=0}get location(){return window.location}set location(n){window.location=n}get sessionStorage(){return window.sessionStorage}get localStorage(){return window.localStorage}set version(n){Object.assign(window,{PHN_HEADER_VERSION:n})}set navigationLoaded(n){Object.assign(window,{PHN_NAVIGATION_LOADED:n})}get bodyOverflow(){return document.body.style.overflow}get bodyHeight(){return document.body.style.height}requestAnimationFrame(n){return window.requestAnimationFrame(n)}createDiv(){return window.document.createElement("div")}getBreakpoint(){const n=Math.max(window.document.documentElement.clientWidth,window.innerWidth||0),i=Object.keys(k).reverse().find(p=>(0,h.v)(k,p)&&n>=k[p]);return"string"==typeof i&&(0,h.v)(k,i)?k[i]:0}get redirected(){return!0===window.REDIRECTED||window.location.search.includes("cs_redirect=")}createIframe(n,i){const p=window.document.createElement("iframe");p.id=n,p.style.display="none",p.src=i,window.document.body.appendChild(p)}removeElement(n){var i;null===(i=window.document.getElementById(n))||void 0===i||i.remove()}redirectToUrl(n){window.location.assign(n)}generateRandom(n){const p=new Uint8Array(n);window.crypto.getRandomValues(p);const v=[];for(let w=0;w<p.byteLength;w+=1)v.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[p[w]%62]);return v.join("")}maybeCheckMarketingConsent(n){var i,p,v,w,O,g,P,a,l,f,E;const y={processorId:null!==(v=null===(p=null===(i=window.GlobalConsent)||void 0===i?void 0:i.Processor)||void 0===p?void 0:p.googleMaps)&&void 0!==v?v:"Google Maps",timeoutVar:{},mapContainer:"",callbacks:{success:n}};return"function"==typeof(null===(O=null===(w=window.PCOM)||void 0===w?void 0:w.globalConsent)||void 0===O?void 0:O.checkConsent)?(null===(a=null===(P=null===(g=window.PCOM)||void 0===g?void 0:g.globalConsent)||void 0===P?void 0:P.checkConsent)||void 0===a||a.call(P,y),!0):"function"==typeof(null===(l=window.ucPrivacyShield)||void 0===l?void 0:l.checkConsent)?(null===(E=null===(f=window.ucPrivacyShield)||void 0===f?void 0:f.checkConsent)||void 0===E||E.call(f,y),!0):(n(),!1)}deriveChallenge(n){return(0,c.Z)(function*(){if(n.length<43||n.length>128)throw new h.N("invalid code length",h.a.INVALID_INPUT);const i=new ArrayBuffer(n.length),p=new Uint8Array(i);for(let g=0;g<n.length;g++)p[g]=n.charCodeAt(g);const v=yield window.crypto.subtle.digest("SHA-256",p),w=new Uint8Array(v);let O="";for(let g=0;g<w.byteLength;g++)O+=String.fromCharCode(w[g]);return window.btoa(O).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")})()}hashString(n){return(0,c.Z)(function*(){const i=(new TextEncoder).encode(n),p=yield window.crypto.subtle.digest("SHA-256",i);return Array.from(new Uint8Array(p)).map(w=>w.toString(16).padStart(2,"0")).join("")})()}getScrollbarWidth(){const n=window.document.createElement("div");n.style.overflow="scroll",window.document.body.appendChild(n);const i=n.offsetWidth-n.clientWidth;return window.document.body.removeChild(n),Number.isNaN(i)?"0px":`${i}px`}fetchGoogleMapsApi(n,i=`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=places`){return(0,c.Z)(function*(){if(void 0!==window.google&&void 0!==window.google.maps&&void 0!==window.google.maps.version||document.getElementById("googleMaps"))return window.google;const v=document.createElement("script");return v.src=i,v.id="googleMaps",document.head.appendChild(v),new Promise((w,O)=>{v.onerror=()=>{O(new h.N("Failed to load google maps script.",h.a.GENERAL))},v.onload=()=>{w(window.google)}})})()}getNavigatorLatLong(){return(0,c.Z)(function*(){return new Promise((n,i)=>{window.navigator.geolocation.getCurrentPosition(({coords:{latitude:p,longitude:v}})=>{n({latitude:p,longitude:v})},p=>i(new h.N(`geolocation.getCurrentPosition failed with ${p.code}: ${p.message}`,function T(r){switch(r.code){case r.PERMISSION_DENIED:return h.a.GEOLOCATION_DENIED;case r.POSITION_UNAVAILABLE:case r.TIMEOUT:return h.a.RETRY;default:return h.a.GENERAL}}(p))))})})()}getCookie(n){var i;return(0,h.g)(null===(i=document.cookie.split("; ").find(p=>p.startsWith(`${n}=`)))||void 0===i?void 0:i.split("=")[1])}setCookie(n,i){document.cookie=`${n}=${i};domain=${h.C};expires=${new Date(Date.now()+10*h.M).toUTCString()};`}btoa(n){return window.btoa(n)}lockScroll(){this.initialBodyStyleValues=(0,h.x)(document.body.style,this.initialBodyStyleValues),this.initialDocumentScrollTop=document.documentElement.scrollTop,document.body.style.top=`-${document.documentElement.scrollTop}px`,document.body.style.position="fixed",document.body.style.inlineSize="100%",document.body.style.overflowY="scroll"}unlockScroll(){Object.entries(this.initialBodyStyleValues).forEach(([n,i])=>document.body.style.setProperty((0,h.y)(n),i)),document.documentElement.scrollTop=this.initialDocumentScrollTop}hasScrollbar(){return window.document.body.offsetHeight>window.innerHeight}waitForElement(n,i){return(0,c.Z)(function*(){if(!(0,h.i)(i))return n;const p=(0,h.u)(n.querySelector(i));return null!==p?p:new Promise(v=>{const w=new MutationObserver(()=>{const O=(0,h.u)(n.querySelector(i));null!==O&&(v(O),w.disconnect())});w.observe(n,{childList:!0,subtree:!0})})})()}}}}]);