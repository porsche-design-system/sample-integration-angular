"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[50],{7321:function(e,n,t){t.d(n,{C:function(){return u},I:function(){return d},L:function(){return o},P:function(){return l},V:function(){return c},a:function(){return a},b:function(){return f},c:function(){return m},s:function(){return s}});var r=t(4413),i=t(5514);function s(e){if(!(0,i.i)(e))throw new Error("empty locale passed");const n=e.substring(0,e.indexOf("-")).toLowerCase();let t=e.substring(e.indexOf("-")+1);if(-1===Object.values(i.k).indexOf(t)&&(t=t.toUpperCase()),!(0,i.i)(n)||!(0,i.i)(t))throw new Error(`invalid locale ${e} passed`);return{language:n,country:t in i.k?i.k[t]:t}}class o{constructor(e){this.isSet=!1,(0,i.i)(e)&&this.setLocale(e)}setLocale(e=""){try{const{language:n,country:t}=s(e);this.language=n,this.country=t,this.isSet=!0}catch(n){this.language="",this.country="",this.isSet=!1}return this}toString(){return(0,i.i)(this.language)&&(0,i.i)(this.country)?`${this.language}-${this.country}`:""}toHeaderString(){return this.toString().replace("-","_")}}const a=(0,r.c)({applicationId:i.A,locale:new o,w:window,environment:i.d,loginStatus:!1,userId:""});var u=(()=>{return(e=u||(u={})).EventAction="eventAction",e.ApplicationId="applicationId",e.Language="language",e.Country="country",e.Timestamp="timestamp",e.Environment="environment",e.Server="server",u;var e})(),c=(()=>{return(e=c||(c={})).LoginStatus="loginStatus",e.DeviceBrowserHeight="deviceBrowserHeight",e.DeviceBrowserWidth="deviceBrowserWidth",e.DeviceBrowserBreakpoint="deviceBrowserBreakpoint",e.DeviceBrowserOrientation="deviceBrowserOrientation",e.DeviceType="deviceType",c;var e})(),l=(()=>{return(e=l||(l={})).PageId="pageId",e.PageName="pageName",l;var e})(),d=(()=>((d||(d={})).UserId="userId",d))(),m=(()=>{return(e=m||(m={})).ModelRangeCode="modelRangeCode",e.ModelRangeName="modelRangeName",e.ModelSeriesCode="modelSeriesCode",e.ModelSeriesName="modelSeriesName",e.ModelName="modelName",e.Bodytype="bodytype",m;var e})(),f=(()=>{return(e=f||(f={})).ClickElementType="clickElementType",e.ClickElementId="clickElementId",e.ClickElementName="clickElementName",e.TargetUrl="targetUrl",f;var e})()},5514:function(e,n,t){t.d(n,{A:function(){return a},B:function(){return C},C:function(){return O},D:function(){return i},E:function(){return u},F:function(){return A},G:function(){return w},H:function(){return x},I:function(){return b},J:function(){return z},K:function(){return L},L:function(){return d},M:function(){return y},N:function(){return W},O:function(){return F},R:function(){return c},V:function(){return f},a:function(){return m},b:function(){return l},c:function(){return s},d:function(){return o},e:function(){return B},f:function(){return V},g:function(){return D},h:function(){return U},i:function(){return $},j:function(){return _},k:function(){return R},l:function(){return g},m:function(){return h},n:function(){return M},o:function(){return p},p:function(){return I},q:function(){return S},r:function(){return N},s:function(){return T},t:function(){return v},u:function(){return r},v:function(){return E},w:function(){return G},x:function(){return P},y:function(){return j},z:function(){return H}});const r={PhraseId:"",Text:"",Link:"",Items:[]},i=r,s=null,o="preview",a="nav",u={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},c="REDACTED",l="loggedIn",d="loginOrRegister",m="loading",f="2.16.0",h=0,g={accessibilityStatement:i,countryRecommender:s,furtherLinks:r,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null};var p=(()=>{return(e=p||(p={})).TEXT="Text",e.LINK="Link",e.PHRASEID="PhraseId",e.ITEMS="Items",p;var e})();const k="metafunctionalities",v=`${k}.finddealer`,y=`${k}.myporsche`,x=`${y}.logout`,C=`${y}.${l}`,w=`${y}.${d}`,b=`${y}.messages`,E="mainmenu",N=`${E}.crest`,I=`${E}.menu`;var M=(()=>{return(e=M||(M={})).PRODUCTION="production",e.PREVIEW="preview",e.TEST="test",e.LOCAL="local",M;var e})();function P(e){switch(e){case M.PRODUCTION:return"P";case M.PREVIEW:return"PP";default:return"K"}}const _="featureOverrideEnabled",A="HOMENAV_1590",L="HOMENAV_1599",T='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button';var O=(()=>{return(e=O||(O={})).Link="link",e.Button="button",e.Image="image",O;var e})(),S=(()=>{return(e=S||(S={})).Change="PAGHomeNav_CountryRecommenderChange_Click",e.Close="PAGHomeNav_CountryRecommenderClose_Click",e.Load="PAGHomeNav_CountryRecommender_Load",S;var e})(),H=(()=>{return(e=H||(H={})).metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",e.navigationClick="PAGHomeNav_Navigation_Click",e.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",e.modelClick="PAGHomeNav_Model_Click",H;var e})();const R={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},$=e=>"string"==typeof e&&e.length>0;function D(e){return"string"==typeof e?e:""}function B(e){return e instanceof HTMLElement?e:null}function z(e){return e instanceof HTMLInputElement?e:null}function G(e){return e.split(".").slice(0,-1).join(".")}function U(e){return 0===e.x&&0===e.y}function F(e){return e===m}function V(e){return!F(e)&&!function(e){return e===d}(e)}function W(e,n){return e===l?n:e}function j(e,n,t){return`${n}/as/authorization.oauth2?&client_id=${e}&response_type=code&redirect_uri=${t}/auth`}},8605:function(e,n,t){t.d(n,{b:function(){return r}});const r={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920}},4413:function(e,n,t){t.d(n,{c:function(){return o}});var r=t(5346);const i=e=>!("isConnected"in e)||e.isConnected,s=((e,n)=>{let t;return(...e)=>{t&&clearTimeout(t),t=setTimeout(()=>{t=0,(e=>{for(let n of e.keys())e.set(n,e.get(n).filter(i))})(...e)},2e3)}})(),o=(e,n)=>{const t=((e,n=((e,n)=>e!==n))=>{let t=new Map(Object.entries(null!=e?e:{}));const r={dispose:[],get:[],set:[],reset:[]},i=()=>{t=new Map(Object.entries(null!=e?e:{})),r.reset.forEach(e=>e())},s=e=>(r.get.forEach(n=>n(e)),t.get(e)),o=(e,i)=>{const s=t.get(e);n(i,s,e)&&(t.set(e,i),r.set.forEach(n=>n(e,i,s)))},a="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,n)=>s(n),ownKeys:e=>Array.from(t.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,n)=>t.has(n),set:(e,n,t)=>(o(n,t),!0)}),u=(e,n)=>(r[e].push(n),()=>{((e,n)=>{const t=e.indexOf(n);t>=0&&(e[t]=e[e.length-1],e.length--)})(r[e],n)});return{state:a,get:s,set:o,on:u,onChange:(n,t)=>{const r=u("set",(e,r)=>{e===n&&t(r)}),i=u("reset",()=>t(e[n]));return()=>{r(),i()}},use:(...e)=>{const n=e.reduce((e,n)=>(n.set&&e.push(u("set",n.set)),n.get&&e.push(u("get",n.get)),n.reset&&e.push(u("reset",n.reset)),n.dispose&&e.push(u("dispose",n.dispose)),e),[]);return()=>n.forEach(e=>e())},dispose:()=>{r.dispose.forEach(e=>e()),i()},reset:i,forceUpdate:e=>{const n=t.get(e);r.set.forEach(t=>t(e,n,n))}}})(e,n);return t.use((()=>{if("function"!=typeof r.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:n=>{const t=(0,r.a)();t&&((e,n,t)=>{const r=e.get(n);r?r.includes(t)||r.push(t):e.set(n,[t])})(e,n,t)},set:n=>{const t=e.get(n);t&&e.set(n,t.filter(r.f)),s(e)},reset:()=>{e.forEach(e=>e.forEach(r.f)),s(e)}}})()),t}},7050:function(e,n,t){t.r(n),t.d(n,{phn_messages_link:function(){return u}});var r=t(5346),i=t(7321),s=t(5514),o=t(4869),a=t(6202);t(4413),t(4195),t(8605);const u=class{constructor(e){(0,r.r)(this,e),this.item=s.u}sendNavigationClickAnalyticsEvent(){const e=new o.N(i.a.state,this.item);(i.a.state.w.pagData=i.a.state.w.pagData||[]).push(e.event())}render(){const e=a.n.get("unreadMessagesCount");return(0,r.h)("a",{href:this.item.Link,onClick:()=>this.sendNavigationClickAnalyticsEvent()},(0,r.h)("span",{class:"link-text"},this.item.Text),e>0?(0,r.h)("span",{class:"unread-messages-count"},e):null)}};u.style='.sc-phn-messages-link-h{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:1rem;border-bottom:1px solid #e3e4e5}.sc-phn-messages-link-h:hover{color:#d5001c;cursor:pointer}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h{font-size:1.125rem}}@media (min-width: 1300px){.sc-phn-messages-link-h{border-bottom:0;padding-left:0}}.sc-phn-messages-link-h a.sc-phn-messages-link{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;font-weight:400;color:inherit;text-decoration:none;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;width:100%;padding:1rem 0 0.875rem 0.625rem}.sc-phn-messages-link-h a.sc-phn-messages-link::-moz-focus-inner{border:0}.sc-phn-messages-link-h a.sc-phn-messages-link{outline:transparent solid 1px;outline-offset:2px}.sc-phn-messages-link-h a.sc-phn-messages-link:focus{outline-color:currentColor}.sc-phn-messages-link-h a.sc-phn-messages-link:focus:not(:focus-visible){outline-color:transparent}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h a.sc-phn-messages-link{padding-top:1.125rem;padding-bottom:1.125rem}}@media (min-width: 1300px){.sc-phn-messages-link-h a.sc-phn-messages-link{padding-top:0.5rem;padding-bottom:0.5rem}}.sc-phn-messages-link-h .unread-messages-count.sc-phn-messages-link{height:1rem;margin-left:0.5rem;padding:0 0.3125rem;background-color:#d5001c;border-radius:8px;font-size:0.75rem;color:#fff;line-height:1rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h .unread-messages-count.sc-phn-messages-link{height:1.125rem;font-size:0.875rem;line-height:1.125rem}}.sc-phn-messages-link-h .unread-messages-count.sc-phn-messages-link:hover{color:#fff}'}}]);