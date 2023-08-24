"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[657],{247:(z,T,f)=>{f.d(T,{a:()=>h});var d=f(862),s=f(843),$=f(556),p=f(49),D=f(945);const b={};function j(o){const{drawerType:l}=b,E=((0,p.i)(o)?(0,d.b)(o):s.r.state.routingKeyHistory[s.r.state.routingKeyPointer])||"",_=(0,d.g)(E),c=(0,d.d)(E),g=c-1;if(!(0,p.i)(E))return"level0";const r=(0,p.i)(E)?`level${c}-${_}`:`level${c-1}-unknown`;return"doubleDrawer"===l?""===E?`level${g}-unknown_level${c}-unknown`:`level${g}-${(0,D.g)(E)}_${r}`:r}function M(o,l,E){const{drawerType:_}=b,c=(0,d.d)(o);if("doubleDrawer"===_){let g=c;return E&&(g-=1),`level${g}_${l}`}return(0,p.i)(o)?`level${c}_${l}`:`level${c-1}_${l}`}function H(){return b.drawerType}const h={setDrawerType:function L(o){b.drawerType=o},getDealerResultsLoadDisplayElementId:function V(o){return"doubleDrawer"===H()?o:j()},calculateDisplayElementId:j,getDealerResultsLoadDisplayElementType:function u(){return"doubleDrawer"===H()?$.h:M("",$.f.dealerSearchForm)},calculateDisplayElementType:M,getModelName:function A(o){const l=o.link.split("/"),E=l[l.length-1];let _;return _=""===E?void 0===l[l.length-2]?"":l[l.length-2].split("-").join(" "):E.split("-").join(" "),_},getModelTargetElement:function N(o,l){if(o.includes("models"))return`level${(0,d.d)(o)}_${l.toLowerCase()}`}}},551:(z,T,f)=>{f.d(T,{g:()=>ae});var d=f(556),s=f(49),$=Object.defineProperty,D=(n,e,t)=>(((n,e,t)=>{e in n?$(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t})(n,"symbol"!=typeof e?e+"":e,t),t);const L={clean:{enabled:!1,executionPlace:"AFTER_MERGE",values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}};class j{create(e){return"string"!=typeof e.event||0===e.event.length?{}:{context:{eventAction:e.event}}}}const A=(n,e)=>((n,e)=>{let t;for(t in n)if(n&&n[t]&&!1===e(n[t],t))return!1;return!0})(n,(t,a)=>{for(const i in n[a])if(!1===e(t[i],i,t,a))return!1;return!0}),N=n=>{for(const e in n)return!1;return!0},H=(n,e=(t=>null==(t=L.clean)?void 0:t.values)()||[])=>(A(n,(t,a,i,v)=>{e.includes(t)&&(delete i[a],N(i)&&delete n[v])}),n),u=n=>(A(n,(e,t,a)=>("function"!=typeof e||(a[t]=e()),!0)),n),h=(n,e)=>{const t=e.split(".");if(2!==t.length)return;const a=n[t[0]];return a?a[t[1]]:void 0},l=L.logging;var E=(n=>(n[n.error=0]="error",n[n.warn=1]="warn",n[n.log=2]="log",n))(E||{});const _=class{constructor(n,e){D(this,"prefix"),D(this,"settings"),this.prefix=n,this.settings={...l,...e}}_getMergedSettings(n){return n?{...this.settings,...n}:this.settings}_isAllowed(n,e){if(!_.isAvailable||!e.enabled)return!1;const t=E[e.level];switch(n){case"error":case"warn":return t>=E[n];case"info":case"log":case"debug":case"dir":return t>=2;default:return!1}}_log(n,e="log",t){const a=this._getMergedSettings(t);this._isAllowed(e,a)&&("dir"===e?(console.log(`[${this.prefix}] ${e}:`),console[e](n)):console[e](`[${this.prefix}] ${n}`))}log(n,e){this._log(n,"log",e)}dir(n,e){this._log(n,"dir",e)}debug(n,e){this._log(n,"debug",e)}error(n,e){this._log(n,"error",e)}info(n,e){this._log(n,"info",e)}warn(n,e){this._log(n,"warn",e)}};let c=_;D(c,"isAvailable",typeof console<"u");const g=(...n)=>{const e={};return n.forEach(t=>{if(N(t))return;const a={...e,...t};let i;for(i in a)e[i]="object"!=typeof a[i]||Array.isArray(a[i])?a[i]:{...e[i],...t[i]}}),e};class r{create(e){return H({context:{timestamp:e.timestamp,server:e.hostname},pageExperience:{pageId:e.url},visitor:{deviceBrowserBreakpoint:e.breakpoint,deviceBrowserHeight:e.height,deviceBrowserOrientation:e.orientation,deviceBrowserWidth:e.width,deviceType:e.deviceType,useragent:e.userAgent}},[void 0])}}const m=L.webProperties,P=()=>window.location.href.replace(/[?#].*/,""),I=()=>window.innerHeight.toString(),k=()=>window.innerHeight>window.innerWidth?"p":"l",G=()=>window.innerWidth.toString(),J=n=>{if(!n.breakpoints||n.breakpoints.length<1)return;const{breakpoints:e}=n,t=()=>{const a=window.innerWidth;let i=0,v=0;for(;v<e.length&&a>=e[v];)i=e[v],v++;return i.toString()};return n.reactiveDimensions?t:t()},B=(n,e)=>{switch(e){case"string":case"number":case"boolean":return typeof n===e;case"any[]":return Array.isArray(n)&&n.length>0;case"Record<string, any>":return"object"==typeof n&&!Array.isArray(n)&&Object.keys(n).length>0;case"any":return!0;default:if(e.indexOf("|")>0){const t=e.split("|").map(a=>a.trim().replace(/(^ ?'?|'? ?$)/g,""));return"string"==typeof n&&t.includes(n)}}return!0};class O{constructor(e,t,a="GlobalDataLayer"){D(this,"_className"),D(this,"_settings"),D(this,"_defaultProperties"),D(this,"_logger"),D(this,"_webPropertiesHandled",!1),D(this,"_dataLayerStore"),D(this,"_extensions",new Map);const i=g(L,e||{});this._className=a,this._logger=new c(this._className,i.logging),this._settings=i,t?this._dataLayerStore=t:typeof window<"u"?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}setup(){this._handleDefaultWebProperties()}get Settings(){return this._settings}get DataLayerStore(){return this._dataLayerStore}getRegisteredExtension(e){const t=new e;return this.getRegisteredExtensionByClassName(t.className)}getRegisteredExtensionByClassName(e){return this._extensions.has(e)?this._extensions.get(e):void 0}getRegisteredExtensions(){const e=[];for(const t of this._extensions.values())e.push(t);return e}registerExtension(e,t=!1){t||!this._extensions.has(e.className)?(e.dataLayerInstance=this,this._extensions.set(e.className,e),this._logger.info(t?`Overriden registration for extension class <${e.className}>.`:`Registered extension class <${e.className}>.`)):this._logger.warn(`Tried to register extension class <${e.className}> which already exists.`)}removeExtension(e){const t=new e;this._extensions.has(t.className)?this._extensions.delete(t.className):this._logger.warn(`Tried to remove not existing extension class <${t.className}>.`)}removeExtensionByClassName(e){this._extensions.has(e)?this._extensions.delete(e):this._logger.warn(`Tried to remove not existing extension class <${e}>.`)}push(e,t=[{}],a){var i,v;if(0===e.length)return!1;const y=a&&!N(a)?g(this._settings,a):this._settings;Array.isArray(t)||(t=[t]),t.forEach(u);const q=this._eventNamePayloadFactory.create({event:e}),X=u(this.getDefaultProperties(e));y.clean.enabled&&"BEFORE_MERGE"===y.clean.executionPlace&&[X||{},...t].forEach(x=>H(x,y.clean.values));const U=g(q,X||{},...t);if(y.clean.enabled&&"AFTER_MERGE"===y.clean.executionPlace&&H(U,y.clean.values),(null==(i=y?.validation)?void 0:i.enabled)&&(null==(v=y?.validation)?void 0:v.eventMatrix)){const x=((n,e,t)=>{const a={level:null,issues:[]};if(!t.enabled||!t.eventMatrix)return a;const{events:i,...v}=t.eventMatrix,y=i.indexOf(n);if(-1===y)return a.level="error",a.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:n,message:`'${n}': Event does not exist.`}),a;const q=(n=>{if(!n)return[];const e=[];return A(n,(t,a,i,v)=>{e.push(`${v.toString()}.${a.toString()}`)}),e})(e),X=Object.keys(v),U=q.filter(S=>!X.includes(S));let x;for(x in U.length>0&&(t.allowUnknown||((n,e)=>{n&&A(n,(t,a,i,v)=>{!e.includes(`${v.toString()}.${a.toString()}`)||(delete i[a],N(i)&&delete n[v])})})(e,U),U.forEach(S=>{var C;a.level=null!=(C=a.level)?C:"warn",a.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:S,message:`'${S}': Property does not exist in the given Event Matrix.${t.allowUnknown?"":" It was omitted from the DataLayer payload."}`})})),v){const S=v[x],C=typeof S.e[y]<"u",Y=1===S.r,ee=e?h(e,x):void 0,te=typeof ee<"u";if(C&&Y&&!te&&(a.level="error",a.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:x,message:`'${x}': The required property is missing.`}),!t.verbose)||te&&!B(ee,S.t)&&(a.level="error",a.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:x,message:`'${x}': Wrong type detected. Expected '${S.t}', got '${typeof ee}'.`}),!t.verbose))return a}return a})(e,U,y.validation),S=x.issues.sort((C,Y)=>C.level!==Y.level&&"warn"===Y.level?-1:0).map(C=>`- [${C.level}]: ${C.message}`).join("\n");switch(x.level){case"error":return this._logger.error(`Validation failed for event '${e}' with errors/warnings: \n${S}`,y.logging),!1;case"warn":this._logger.warn(`Validation success for event '${e}' with warnings: \n${S}`,y.logging);break;default:this._logger.info(`Validation success for event '${e}'.`,y.logging)}}return this._dataLayerStore.push(U),!0}getDefaultProperties(e){const t={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach(i=>i.identifier===e?t.byName.push(i.data):Array.isArray(i.identifier)&&i.identifier.includes(e)?t.byArray.push(i.data):i.identifier instanceof RegExp&&i.identifier.test(e)?t.byRegex.push(i.data):void 0);const a=[...t.byRegex,...t.byArray,...t.byName];if(a.length)return g(...a)}setDefaultProperties(e,t){const a=this._defaultProperties.find(i=>i.identifier===e);a?a.data=g(a.data,t):this._defaultProperties.push({identifier:e,data:t})}_handleDefaultWebProperties(){if(this._webPropertiesHandled||!this._settings.webProperties.enabled)return;const e=((n,e)=>{const t={...m,...this._settings.webProperties},a={breakpoint:J(t),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:t.reactiveUrl?P:P(),height:t.reactiveDimensions?I:I(),orientation:t.reactiveDimensions?k:k(),width:t.reactiveDimensions?G:G(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return e?e.create(a):a})(0,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,e),this._webPropertiesHandled=!0}}class Z extends O{constructor(e,t,a="GlobalDataLayer"){super(e,t,a),D(this,"_eventNamePayloadFactory"),D(this,"_webPayloadFactory"),this._eventNamePayloadFactory=new j,this._webPayloadFactory=new r,this.setup()}setup(){super.setup()}}function ne(n){switch(n){case d.b.PRODUCTION:return"P";case d.b.PREVIEW:return"PP";default:return"K"}}const ae=new class se{constructor(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}initialise(){this.gdl=new Z}pushDataLayerEvent(e,t){t?this.gdl.push(e,t):this.gdl.push(e)}setEnvironment(e){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:ne(e)}})}setPageName(e){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:e}})}setUser(e,t){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:e},visitor:{loginStatus:t}})}setLocale(e){try{const{country:t,language:a}=(0,d.s)(e);this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:t,language:a}})}catch{}}setDefaultProperties(e,t){let a={context:{applicationId:d.c},visitor:{loginStatus:!1}};try{const{country:i,language:v}=(0,d.s)(e);a=Object.assign(Object.assign({},a),{context:Object.assign(Object.assign({},a.context),{country:i,language:v,applicationName:d.D})})}catch{}(0,s.i)(t)&&(a=Object.assign(Object.assign({},a),{pageExperience:{pageName:t}})),this.gdl.setDefaultProperties(this.homeNavEventId,a)}}},945:(z,T,f)=>{f.d(T,{a:()=>N,b:()=>H,c:()=>V,d:()=>L,e:()=>b,f:()=>M,g:()=>j});var d=f(556),s=f(862),$=f(213),p=f(49),D=f(181);function b(u,h,o,l,E,_){const{dealer:c,models:g,myPorsche:r,vehiclePurchase:m,shop:P,experience:K,services:w,legacyMore:I}=u,{savedDealerCookie:k,ppnDealers:G}=h,{app:Q}=d.n.state,R=null!==k?G[k.id]:void 0,J="en-SG"===o?I.children[2].children[2].link:void 0,F=[s.a.DEALER_SEARCH];void 0!==R&&F.push((0,s.c)(R.ppnDealer.id));const B=[{elementId:s.a.MODELS,routingKeys:[s.a.MODELS],analyticsId:g.id,text:g.text},{elementId:s.a.VEHICLE_PURCHASE,routingKeys:[s.a.VEHICLE_PURCHASE],analyticsId:m.id,text:m.text},{elementId:s.a.SERVICES,routingKeys:[s.a.SERVICES],analyticsId:w.id,text:w.text},{elementId:s.a.EXPERIENCE,routingKeys:[s.a.EXPERIENCE],analyticsId:K.id,text:K.text}],W={elementId:s.a.DEALER_SEARCH,routingKeys:F,analyticsId:c.id,text:c.text,link:J,iconRight:"en-SG"===o?"external":"arrow-head-right"};if(null!==P&&""!==P.text&&B.splice(2,0,{elementId:s.a.SHOP,routingKeys:[s.a.SHOP],analyticsId:P.id,text:P.text,link:Q!==p.A.shop?P.link:void 0,datalayerEventAction:d.E.NAVIGATION_LINK_CLICK,iconRight:"external"}),function A(u,h){try{const{country:o}=(0,d.s)(u),l=!(0,d.i)(o)&&h;return(D.f.isDealerSearchChinaEnabled()||"CN"!==o)&&l}catch{}return!0}(o,_)){const O="en"===(0,d.s)(o).language?R?.ppnDealer.name:(0,p.i)(R?.ppnDealer.nameLocalized)?R?.ppnDealer.nameLocalized:R?.ppnDealer.name;(0,p.i)(O)&&(W.subtext=O)}else W.link=c.search.map.link,W.onClick=void 0;if(B.push(W),null!==r){const O=(0,p.I)(l),Z=O?(0,p.z)(l,r.loggedInFallback):void 0;B.push({elementId:s.a.MY_PORSCHE,routingKeys:[s.a.MY_PORSCHE],analyticsId:r.id,text:r.text,subtext:Z,showIconModifier:O&&E>0})}return B}function L(u,h,o,l,E,_,c){const g=(0,s.f)(_);switch(g){case _:break;case s.a.MODELS:return u.models.series.map(r=>({elementId:(0,s.h)(r.id),routingKeys:[(0,s.h)(r.id)],analyticsId:r.id,text:r.name,subtext:r.tags.map(m=>m.text).join(" | "),renderSignatures:!0,datalayerEventAction:d.E.MODEL_RANGE_CLICK}));case s.a.SHOP:case s.a.VEHICLE_PURCHASE:case s.a.SERVICES:case s.a.EXPERIENCE:{const r=(0,s.r)(_),m=M(u,r,g);if(null!==m)return m.children.map(P=>({elementId:(0,s.e)(r,P.id),routingKeys:[(0,s.e)(r,P.id)],analyticsId:P.id,text:P.text,link:P.link}));break}}return b(u,h,o,l,E,c)}function j(u){switch((0,s.f)(u)){case u:break;case s.a.DEALER_SEARCH:return s.a.DEALER_SEARCH;case s.a.MODELS:return s.a.MODELS;case s.a.SHOP:case s.a.VEHICLE_PURCHASE:case s.a.SERVICES:case s.a.EXPERIENCE:{const o=(0,s.r)(u);return(0,s.g)(o)}}return s.a.MAIN_MENU}function M(u,h,o){const{vehiclePurchase:l,experience:E,shop:_,legacyMore:c,services:g}=u,r={[s.a.VEHICLE_PURCHASE]:l,[s.a.EXPERIENCE]:E,[s.a.SHOP]:_,[s.a.MORE]:c,[s.a.SERVICES]:g}[o];if(null==r)return null;(0,p.i)(r.experienceName)&&(r.children=(0,$.a)().executeContentChange(r));const m=(0,s.g)(h);return m===o?r:(0,d.j)(r,m)}function N(u,h){if(!(0,p.i)(h))return"";const o=(0,s.f)(h);switch(o){case s.a.MODELS:return u.models.text;case s.a.DEALER_SEARCH:return u.dealer.details.backToSearch;case s.a.SHOP:case s.a.VEHICLE_PURCHASE:case s.a.MORE:case s.a.EXPERIENCE:{const l=M(d.a.state,h,o);if(null!==l)return l.text;break}}return""}function H(u,h,o){var l;const{dealer:E,myPorsche:_,models:c,vehiclePurchase:g,experience:r,shop:m,legacyMore:P,services:K}=u;let w;switch(o){case s.a.MORE:case s.a.SHOP:case s.a.EXPERIENCE:case s.a.SERVICES:case s.a.VEHICLE_PURCHASE:{if(w={[s.a.VEHICLE_PURCHASE]:g,[s.a.EXPERIENCE]:r,[s.a.SHOP]:m,[s.a.MORE]:P,[s.a.SERVICES]:K}[o],void 0===w)return"";const I=(0,s.g)(h);return I===o?w?.text:null===(l=(0,d.j)(w,I))||void 0===l?void 0:l.text}case s.a.SERIES:case s.a.MODELS:{const I=(0,s.g)(h);return w=c.series.find(k=>I===k.id),void 0===w?c.text:w?.id}case s.a.DEALER_SEARCH:return E.search.text;case s.a.MY_PORSCHE:return _?.text}return""}function V(u,h,o){const{myPorsche:l,models:E}=d.a.state,{loggedInState:_}=d.n.state;if(u===s.a.MY_PORSCHE)return(0,p.I)(_)?(0,p.z)(_,l?.loggedInFallback||""):"";if(u===s.a.DEALER_SEARCH){const{savedDealerCookie:c,ppnDealers:g}=$.d.state,r=null!==c?g[c.id]:void 0,m=o&&"en"===(0,d.s)(o).language?r?.ppnDealer.name:(0,p.i)(r?.ppnDealer.nameLocalized)?r?.ppnDealer.nameLocalized:r?.ppnDealer.name;return c?m:""}if(u===s.a.MODELS&&(0,p.i)(h)){const c=(0,s.g)(h),g=E.series.find(r=>c===r.id);if(g)return g.tags.map(r=>r.text).join(" | ")}return""}},843:(z,T,f)=>{f.d(T,{r:()=>s});const s=(0,f(556).d)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})}}]);