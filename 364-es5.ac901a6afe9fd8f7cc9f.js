!function(){"use strict";function n(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function e(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function t(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function i(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c=!0,a=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){a=!0,u=n},f:function(){try{c||null==t.return||t.return()}finally{if(a)throw u}}}}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[364],{837:function(n,e,t){t.d(e,{C:function(){return a},I:function(){return l},P:function(){return f},V:function(){return s},a:function(){return c},b:function(){return v},c:function(){return d}});var r,i=t(8082),o=t(599),u=t(5305),c=(0,i.c)({applicationId:u.A,locale:new o.L,w:window,environment:u.e,loginStatus:!1,userId:void 0}),a=((r=a||(a={})).EventAction="eventAction",r.ApplicationId="applicationId",r.Language="language",r.Country="country",r.Timestamp="timestamp",r.Environment="environment",r.Server="server",a),s=function(){return(n=s||(s={})).LoginStatus="loginStatus",n.DeviceBrowserHeight="deviceBrowserHeight",n.DeviceBrowserWidth="deviceBrowserWidth",n.DeviceBrowserBreakpoint="deviceBrowserBreakpoint",n.DeviceBrowserOrientation="deviceBrowserOrientation",n.DeviceType="deviceType",s;var n}(),f=function(){return(n=f||(f={})).PageId="pageId",n.PageName="pageName",f;var n}(),l=((l||(l={})).UserId="userId",l),d=function(){return(n=d||(d={})).ModelRangeCode="modelRangeCode",n.ModelRangeName="modelRangeName",n.ModelSeriesCode="modelSeriesCode",n.ModelSeriesName="modelSeriesName",n.ModelName="modelName",n.Bodytype="bodytype",d;var n}(),v=function(){return(n=v||(v={})).ClickElementType="clickElementType",n.ClickElementId="clickElementId",n.ClickElementName="clickElementName",n.TargetUrl="targetUrl",v;var n}()},5305:function(n,e,t){t.d(e,{A:function(){return s},B:function(){return J},C:function(){return _},D:function(){return y},E:function(){return f},F:function(){return T},G:function(){return H},H:function(){return I},I:function(){return P},J:function(){return b},K:function(){return x},L:function(){return p},M:function(){return C},N:function(){return M},O:function(){return q},P:function(){return K},R:function(){return d},V:function(){return h},a:function(){return g},b:function(){return v},c:function(){return u},d:function(){return c},e:function(){return a},f:function(){return G},g:function(){return z},h:function(){return U},i:function(){return j},j:function(){return V},k:function(){return i},l:function(){return o},m:function(){return N},n:function(){return m},o:function(){return L},p:function(){return w},q:function(){return A},r:function(){return R},s:function(){return S},t:function(){return D},u:function(){return E},v:function(){return W},w:function(){return l},x:function(){return O},y:function(){return F},z:function(){return B}});var r,i="de",o="CH",u=null,c=null,a="preview",s="nav",f={PhraseId:"",Name:"",Image:"",Models:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},l={PhraseId:"",Text:"",Link:"",Items:[]},d="REDACTED",v="loggedIn",p="loginOrRegister",g="loading",h="2.15.0",m=0,y={accessibilityStatement:u,countryRecommender:c,furtherLinks:null,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:{menuButton:l,login:l,logout:l,loggedIn:l,loginOrRegister:l,more:l,signup:l,signupText:l,messages:l,links:[]}},w=((r=w||(w={})).TEXT="Text",r.LINK="Link",r.PHRASEID="PhraseId",r.ITEMS="Items",w),k="metafunctionalities",E="".concat(k,".finddealer"),C="".concat(k,".myporsche"),b="".concat(C,".logout"),I="".concat(C,".").concat(v),P="".concat(C,".").concat(p),x="".concat(C,".messages"),O="mainmenu",S="".concat(O,".crest"),A="".concat(O,".menu"),L=function(){return(n=L||(L={})).PRODUCTION="production",n.PREVIEW="preview",n.TEST="test",n.LOCAL="local",L;var n}();function B(n){switch(n){case L.PRODUCTION:return"P";case L.PREVIEW:return"PP";default:return"K"}}var N="featureOverrideEnabled",T="HOMENAV_1590",M="HOMENAV_1599",D='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',_=function(){return(n=_||(_={})).Link="link",n.Button="button",_;var n}(),R=function(){return(n=R||(R={})).Change="PAGHomeNav_CountryRecommenderChange_Click",n.Close="PAGHomeNav_CountryRecommenderClose_Click",n.Load="PAGHomeNav_CountryRecommender_Load",R;var n}(),H=function(){return(n=H||(H={})).metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.navigationClick="PAGHomeNav_Navigation_Click",H;var n}(),V={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},j=function(n){return"string"==typeof n&&n.length>0};function W(n){return"string"==typeof n?n:""}function U(n){return n instanceof HTMLElement?n:null}function F(n){return n.split(".").slice(0,-1).join(".")}function G(n){return 0===n.x&&0===n.y}function K(n){return n===g}function z(n){return!K(n)&&!function(n){return n===p}(n)}function q(n,e){return n===v?e:n}function J(n,e,t){return"".concat(e,"/as/authorization.oauth2?&client_id=").concat(n,"&response_type=code&redirect_uri=").concat(t,"/auth")}},8082:function(n,e,t){t.d(e,{c:function(){return a}});var r,o=t(4397),u=function(n){return!("isConnected"in n)||n.isConnected},c=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];r&&clearTimeout(r),r=setTimeout(function(){r=0,(function(n){var e,t=i(n.keys());try{for(t.s();!(e=t.n()).done;){var r=e.value;n.set(r,n.get(r).filter(u))}}catch(o){t.e(o)}finally{t.f()}}).apply(void 0,e)},2e3)},a=function(n,e){var t=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n,e){return n!==e},t=new Map(Object.entries(null!=n?n:{})),r={dispose:[],get:[],set:[],reset:[]},i=function(){t=new Map(Object.entries(null!=n?n:{})),r.reset.forEach(function(n){return n()})},o=function(n){return r.get.forEach(function(e){return e(n)}),t.get(n)},u=function(n,i){var o=t.get(n);e(i,o,n)&&(t.set(n,i),r.set.forEach(function(e){return e(n,i,o)}))},c="undefined"==typeof Proxy?{}:new Proxy(n,{get:function(n,e){return o(e)},ownKeys:function(n){return Array.from(t.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(n,e){return t.has(e)},set:function(n,e,t){return u(e,t),!0}}),a=function(n,e){return r[n].push(e),function(){!function(n,e){var t=n.indexOf(e);t>=0&&(n[t]=n[n.length-1],n.length--)}(r[n],e)}};return{state:c,get:o,set:u,on:a,onChange:function(e,t){var r=a("set",function(n,r){n===e&&t(r)}),i=a("reset",function(){return t(n[e])});return function(){r(),i()}},use:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var r=e.reduce(function(n,e){return e.set&&n.push(a("set",e.set)),e.get&&n.push(a("get",e.get)),e.reset&&n.push(a("reset",e.reset)),e.dispose&&n.push(a("dispose",e.dispose)),n},[]);return function(){return r.forEach(function(n){return n()})}},dispose:function(){r.dispose.forEach(function(n){return n()}),i()},reset:i,forceUpdate:function(n){var e=t.get(n);r.set.forEach(function(t){return t(n,e,e)})}}}(n,e);return t.use(function(){if("function"!=typeof o.a)return{};var n=new Map;return{dispose:function(){return n.clear()},get:function(e){var t=(0,o.a)();t&&function(n,e,t){var r=n.get(e);r?r.includes(t)||r.push(t):n.set(e,[t])}(n,e,t)},set:function(e){var t=n.get(e);t&&n.set(e,t.filter(o.f)),c(n)},reset:function(){n.forEach(function(n){return n.forEach(o.f)}),c(n)}}}()),t}},8605:function(n,e,t){t.d(e,{b:function(){return r}});var r={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920}},5364:function(t,i,o){o.d(i,{L:function(){return l}});var u,c=o(8605),a=o(5305),s=o(837),f=((u=f||(f={})).Portrait="p",u.Landscape="l",f),l=function(){function t(n){e(this,t),this.initContext(),this.initVisitor(),this.initPageExperience(),this.initIds(),this.context.applicationId=n.applicationId,this.context.country=n.locale.country,this.context.language=n.locale.language,this.context.timestamp=(new Date).toISOString(),this.context.environment=this.getEnvironmentAbreviation(n.environment),this.populateVisitor(n.w,n.loginStatus),this.populatePageExperience(window),this.populateIds(n.userId)}return r(t,[{key:"event",value:function(){return{context:this.context,visitor:this.visitor,pageExperience:this.pageExperience,ids:this.ids}}},{key:"initContext",value:function(){var e;this.context=(n(e={},s.C.ApplicationId,void 0),n(e,s.C.Language,void 0),n(e,s.C.Country,void 0),n(e,s.C.EventAction,void 0),n(e,s.C.Timestamp,void 0),n(e,s.C.Environment,void 0),n(e,s.C.Server,void 0),e)}},{key:"initVisitor",value:function(){var e;this.visitor=(n(e={},s.V.LoginStatus,void 0),n(e,s.V.DeviceBrowserWidth,void 0),n(e,s.V.DeviceBrowserHeight,void 0),n(e,s.V.DeviceBrowserBreakpoint,void 0),n(e,s.V.DeviceBrowserOrientation,void 0),n(e,s.V.DeviceType,void 0),e)}},{key:"initPageExperience",value:function(){var e;this.pageExperience=(n(e={},s.P.PageId,void 0),n(e,s.P.PageName,void 0),e)}},{key:"initIds",value:function(){this.ids=n({},s.I.UserId,void 0)}},{key:"populateVisitor",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.visitor.loginStatus=e,this.visitor.deviceBrowserHeight=n.innerHeight.toString(),this.visitor.deviceBrowserWidth=n.innerWidth.toString(),this.visitor.deviceBrowserBreakpoint=this.getLowerBreakpointForWidth(n.innerWidth).toString(),this.visitor.deviceBrowserOrientation=t.getDeviceOrientation(n)}},{key:"populatePageExperience",value:function(n){this.pageExperience.pageId="".concat(n.location.protocol,"//").concat(n.location.host).concat(n.location.pathname),this.pageExperience.pageName=n.document.title.length>0?n.document.title:void 0}},{key:"populateIds",value:function(n){this.ids.userId=n}},{key:"getLowerBreakpointForWidth",value:function(n){return Object.values(c.b).filter(function(e){return e<=n}).reverse().shift()}},{key:"getEnvironmentAbreviation",value:function(n){return n===a.o.PRODUCTION?"P":n===a.o.PREVIEW?"PP":"K"}}],[{key:"getDeviceOrientation",value:function(n){var e;return n.matchMedia("(orientation: landscape)").matches?e=f.Landscape:n.matchMedia("(orientation: portrait)").matches&&(e=f.Portrait),e}}]),t}()},599:function(n,t,i){i.d(t,{L:function(){return u}});var o=i(5305),u=function(){function n(t){e(this,n),this.set=!1,(0,o.i)(t)&&this.setLocale(t)}return r(n,[{key:"isSet",get:function(){return this.set}},{key:"setLocale",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=n.substr(0,n.indexOf("-")).toLowerCase(),t=n.substr(n.indexOf("-")+1);return-1===Object.values(o.j).indexOf(t)&&(t=t.toUpperCase()),(0,o.i)(e)&&(0,o.i)(t)?(this.language=e,this.country=t in o.j?o.j[t]:t):(this.language=o.k,this.country=o.l),this.set=!0,this}},{key:"toString",value:function(){return(0,o.i)(this.language)&&(0,o.i)(this.country)?"".concat(this.language,"-").concat(this.country):""}},{key:"toHeaderString",value:function(){return this.toString().replace("-","_")}}]),n}()}}])}();