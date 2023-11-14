"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[685],{685:(re,M,w)=>{w.d(M,{g:()=>ie});var d=w(172),L=w(58),k=Object.defineProperty,o=(n,e,t)=>(((n,e,t)=>{e in n?k(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t})(n,"symbol"!=typeof e?e+"":e,t),t);const p={clean:{enabled:!1,executionPlace:"AFTER_MERGE",values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}};class j{create(e){return"string"!=typeof e.event||0===e.event.length?{}:{context:{eventAction:e.event}}}}const f=(n,e)=>((n,e)=>{let t;for(t in n)if(n&&n[t]&&!1===e(n[t],t))return!1;return!0})(n,(t,s)=>{for(const i in n[s])if(!1===e(t[i],i,t,s))return!1;return!0}),v=n=>{for(const e in n)return!1;return!0},b=(n,e=(t=>null==(t=p.clean)?void 0:t.values)()||[])=>(f(n,(t,s,i,r)=>{e.includes(t)&&(delete i[s],v(i)&&delete n[r])}),n),N=n=>(f(n,(e,t,s)=>("function"!=typeof e||(s[t]=e()),!0)),n),B=(n,e)=>{const t=e.split(".");if(2!==t.length)return;const s=n[t[0]];return s?s[t[1]]:void 0},W=p.logging;var E=(n=>(n[n.error=0]="error",n[n.warn=1]="warn",n[n.log=2]="log",n))(E||{});const D=class T{constructor(e,t){o(this,"prefix"),o(this,"settings"),this.prefix=e,this.settings={...W,...t}}_getMergedSettings(e){return e?{...this.settings,...e}:this.settings}_isAllowed(e,t){if(!T.isAvailable||!t.enabled)return!1;const s=E[t.level];switch(e){case"error":case"warn":return s>=E[e];case"info":case"log":case"debug":case"dir":return s>=2;default:return!1}}_log(e,t="log",s){const i=this._getMergedSettings(s);this._isAllowed(t,i)&&("dir"===t?(console.log(`[${this.prefix}] ${t}:`),console[t](e)):console[t](`[${this.prefix}] ${e}`))}log(e,t){this._log(e,"log",t)}dir(e,t){this._log(e,"dir",t)}debug(e,t){this._log(e,"debug",t)}error(e,t){this._log(e,"error",t)}info(e,t){this._log(e,"info",t)}warn(e,t){this._log(e,"warn",t)}};o(D,"isAvailable",typeof console<"u");let C=D;const u=(...n)=>{const e={};return n.forEach(t=>{if(v(t))return;const s={...e,...t};let i;for(i in s)e[i]="object"!=typeof s[i]||Array.isArray(s[i])?s[i]:{...e[i],...t[i]}}),e};class H{create(e){return b({context:{timestamp:e.timestamp,server:e.hostname},pageExperience:{pageId:e.url},visitor:{deviceBrowserBreakpoint:e.breakpoint,deviceBrowserHeight:e.height,deviceBrowserOrientation:e.orientation,deviceBrowserWidth:e.width,deviceType:e.deviceType,useragent:e.userAgent}},[void 0])}}const V=p.webProperties,R=()=>window.location.href.replace(/[?#].*/,""),$=()=>window.innerHeight.toString(),O=()=>window.innerHeight>window.innerWidth?"p":"l",S=()=>window.innerWidth.toString(),z=n=>{if(!n.breakpoints||n.breakpoints.length<1)return;const{breakpoints:e}=n,t=()=>{const s=window.innerWidth;let i=0,r=0;for(;r<e.length&&s>=e[r];)i=e[r],r++;return i.toString()};return n.reactiveDimensions?t:t()},Z=(n,e)=>{switch(e){case"string":case"number":case"boolean":return typeof n===e;case"any[]":return Array.isArray(n)&&n.length>0;case"Record<string, any>":return"object"==typeof n&&!Array.isArray(n)&&Object.keys(n).length>0;case"any":return!0;default:if(("boolean"==typeof n||"number"==typeof n||"string"==typeof n)&&e.indexOf("|")>0)return e.split("|").map(t=>{const s=t.trim();return/^'.*'$/.test(s)?s.replace(/(^ ?'?|'? ?$)/g,""):/^(true|false)$/.test(s)?"true"===s:/^-?(\d*\.)?\d+$/.test(s)?Number.parseFloat(s):s.replace(/(^ ?'?|'? ?$)/g,"")}).includes(n)}return!0};class ee{constructor(e,t,s="GlobalDataLayer"){o(this,"_className"),o(this,"_settings"),o(this,"_defaultProperties"),o(this,"_logger"),o(this,"_webPropertiesHandled",!1),o(this,"_dataLayerStore"),o(this,"_extensions",new Map);const i=u(p,e||{});this._className=s,this._logger=new C(this._className,i.logging),this._settings=i,t?this._dataLayerStore=t:typeof window<"u"?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}setup(){this._handleDefaultWebProperties()}get Settings(){return this._settings}get DataLayerStore(){return this._dataLayerStore}getRegisteredExtension(e){const t=new e;return this.getRegisteredExtensionByClassName(t.className)}getRegisteredExtensionByClassName(e){return this._extensions.has(e)?this._extensions.get(e):void 0}getRegisteredExtensions(){const e=[];for(const t of this._extensions.values())e.push(t);return e}registerExtension(e,t=!1){t||!this._extensions.has(e.className)?(e.dataLayerInstance=this,this._extensions.set(e.className,e),this._logger.info(t?`Overriden registration for extension class <${e.className}>.`:`Registered extension class <${e.className}>.`)):this._logger.warn(`Tried to register extension class <${e.className}> which already exists.`)}removeExtension(e){const t=new e;this._extensions.has(t.className)?this._extensions.delete(t.className):this._logger.warn(`Tried to remove not existing extension class <${t.className}>.`)}removeExtensionByClassName(e){this._extensions.has(e)?this._extensions.delete(e):this._logger.warn(`Tried to remove not existing extension class <${e}>.`)}push(e,t=[{}],s){var i,r;if(0===e.length)return!1;const a=s&&!v(s)?u(this._settings,s):this._settings;Array.isArray(t)||(t=[t]),t.forEach(N);const P=this._eventNamePayloadFactory.create({event:e}),_=N(this.getDefaultProperties(e));a.clean.enabled&&"BEFORE_MERGE"===a.clean.executionPlace&&[_||{},...t].forEach(l=>b(l,a.clean.values));const g=u(P,_||{},...t);if(a.clean.enabled&&"AFTER_MERGE"===a.clean.executionPlace&&b(g,a.clean.values),null!=(i=a?.validation)&&i.enabled&&null!=(r=a?.validation)&&r.eventMatrix){const l=((n,e,t)=>{const s={level:null,issues:[]};if(!t.enabled||!t.eventMatrix)return s;const{events:i,...r}=t.eventMatrix,a=i.indexOf(n);if(-1===a)return s.level="error",s.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:n,message:`'${n}': Event does not exist.`}),s;const P=(n=>{if(!n)return[];const e=[];return f(n,(t,s,i,r)=>{e.push(`${r.toString()}.${s.toString()}`)}),e})(e),_=Object.keys(r),g=P.filter(c=>!_.includes(c));let l;for(l in g.length>0&&(t.allowUnknown||((n,e)=>{n&&f(n,(t,s,i,r)=>{e.includes(`${r.toString()}.${s.toString()}`)&&(delete i[s],v(i)&&delete n[r])})})(e,g),g.forEach(c=>{s.level=s.level??"warn",s.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:c,message:`'${c}': Property does not exist in the given Event Matrix.${t.allowUnknown?"":" It was omitted from the DataLayer payload."}`})})),r){const c=r[l],h=typeof c.e[a]<"u",y=1===c.r,x=e?B(e,l):void 0,A=typeof x<"u";if(h&&y&&!A&&(s.level="error",s.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:l,message:`'${l}': The required property is missing.`}),!t.verbose)||A&&!Z(x,c.t)&&(s.level="error",s.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:l,message:`'${l}': Wrong type detected. Expected '${c.t}', got '${typeof x}'.`}),!t.verbose))return s}return s})(e,g,a.validation),c=l.issues.sort((h,y)=>h.level!==y.level&&"warn"===y.level?-1:0).map(h=>`- [${h.level}]: ${h.message}`).join("\n");switch(l.level){case"error":return this._logger.error(`Validation failed for event '${e}' with errors/warnings: \n${c}`,a.logging),!1;case"warn":this._logger.warn(`Validation success for event '${e}' with warnings: \n${c}`,a.logging);break;default:this._logger.info(`Validation success for event '${e}'.`,a.logging)}}return this._dataLayerStore.push(g),!0}getDefaultProperties(e){const t={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach(i=>i.identifier===e?t.byName.push(i.data):Array.isArray(i.identifier)&&i.identifier.includes(e)?t.byArray.push(i.data):i.identifier instanceof RegExp&&i.identifier.test(e)?t.byRegex.push(i.data):void 0);const s=[...t.byRegex,...t.byArray,...t.byName];if(s.length)return u(...s)}setDefaultProperties(e,t){const s=this._defaultProperties.find(i=>i.identifier===e);s?s.data=u(s.data,t):this._defaultProperties.push({identifier:e,data:t})}_handleDefaultWebProperties(){if(this._webPropertiesHandled||!this._settings.webProperties.enabled)return;const e=((n,e)=>{const t={...V,...this._settings.webProperties},s={breakpoint:z(t),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:t.reactiveUrl?R:R(),height:t.reactiveDimensions?$:$(),orientation:t.reactiveDimensions?O:O(),width:t.reactiveDimensions?S:S(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return e?e.create(s):s})(0,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,e),this._webPropertiesHandled=!0}}class te extends ee{constructor(e,t,s="GlobalDataLayer"){super(e,t,s),o(this,"_eventNamePayloadFactory"),o(this,"_webPayloadFactory"),this._eventNamePayloadFactory=new j,this._webPayloadFactory=new H,this.setup()}setup(){super.setup()}}function se(n){switch(n){case d.c.PRODUCTION:return"P";case d.c.PREVIEW:return"PP";default:return"K"}}const ie=new class ne{constructor(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}initialise(){this.gdl=new te}pushDataLayerEvent(e,t){t?this.gdl.push(e,t):this.gdl.push(e)}setEnvironment(e){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:se(e)}})}setPageName(e){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:e}})}setUser(e,t){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:e},visitor:{loginStatus:t}})}setLocale(e){try{const{country:t,language:s}=(0,d.s)(e);this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:t,language:s}})}catch{}}setDefaultProperties(e,t){let s={context:{applicationId:d.d},visitor:{loginStatus:!1}};try{const{country:i,language:r}=(0,d.s)(e);s=Object.assign(Object.assign({},s),{context:Object.assign(Object.assign({},s.context),{country:i,language:r,applicationName:d.D})})}catch{}(0,L.i)(t)&&(s=Object.assign(Object.assign({},s),{pageExperience:{pageName:t}})),this.gdl.setDefaultProperties(this.homeNavEventId,s)}}}}]);