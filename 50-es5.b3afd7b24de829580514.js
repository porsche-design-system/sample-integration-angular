!function(){"use strict";function n(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var i=0,o=function(){};return{s:o,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){c=!0,u=n},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw u}}}}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[50],{7321:function(n,e,r){r.d(e,{C:function(){return f},I:function(){return h},L:function(){return s},P:function(){return m},V:function(){return d},a:function(){return l},b:function(){return g},c:function(){return p},s:function(){return a}});var o=r(4413),u=r(5514);function a(n){if(!(0,u.i)(n))throw new Error("empty locale passed");var e=n.substring(0,n.indexOf("-")).toLowerCase(),t=n.substring(n.indexOf("-")+1);if(-1===Object.values(u.k).indexOf(t)&&(t=t.toUpperCase()),!(0,u.i)(e)||!(0,u.i)(t))throw new Error("invalid locale ".concat(n," passed"));return{language:e,country:t in u.k?u.k[t]:t}}var c,s=function(){function n(e){t(this,n),this.isSet=!1,(0,u.i)(e)&&this.setLocale(e)}return i(n,[{key:"setLocale",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{var e=a(n),t=e.language,r=e.country;this.language=t,this.country=r,this.isSet=!0}catch(t){this.language="",this.country="",this.isSet=!1}return this}},{key:"toString",value:function(){return(0,u.i)(this.language)&&(0,u.i)(this.country)?"".concat(this.language,"-").concat(this.country):""}},{key:"toHeaderString",value:function(){return this.toString().replace("-","_")}}]),n}(),l=(0,o.c)({applicationId:u.A,locale:new s,w:window,environment:u.d,loginStatus:!1,userId:""}),f=((c=f||(f={})).EventAction="eventAction",c.ApplicationId="applicationId",c.Language="language",c.Country="country",c.Timestamp="timestamp",c.Environment="environment",c.Server="server",f),d=function(){return(n=d||(d={})).LoginStatus="loginStatus",n.DeviceBrowserHeight="deviceBrowserHeight",n.DeviceBrowserWidth="deviceBrowserWidth",n.DeviceBrowserBreakpoint="deviceBrowserBreakpoint",n.DeviceBrowserOrientation="deviceBrowserOrientation",n.DeviceType="deviceType",d;var n}(),m=function(){return(n=m||(m={})).PageId="pageId",n.PageName="pageName",m;var n}(),h=((h||(h={})).UserId="userId",h),p=function(){return(n=p||(p={})).ModelRangeCode="modelRangeCode",n.ModelRangeName="modelRangeName",n.ModelSeriesCode="modelSeriesCode",n.ModelSeriesName="modelSeriesName",n.ModelName="modelName",n.Bodytype="bodytype",p;var n}(),g=function(){return(n=g||(g={})).ClickElementType="clickElementType",n.ClickElementId="clickElementId",n.ClickElementName="clickElementName",n.TargetUrl="targetUrl",g;var n}()},5514:function(n,e,t){t.d(e,{A:function(){return c},B:function(){return C},C:function(){return L},D:function(){return o},E:function(){return s},F:function(){return S},G:function(){return x},H:function(){return w},I:function(){return E},J:function(){return G},K:function(){return O},L:function(){return d},M:function(){return b},N:function(){return K},O:function(){return V},R:function(){return l},V:function(){return h},a:function(){return m},b:function(){return f},c:function(){return u},d:function(){return a},e:function(){return z},f:function(){return W},g:function(){return j},h:function(){return F},i:function(){return B},j:function(){return _},k:function(){return D},l:function(){return g},m:function(){return p},n:function(){return P},o:function(){return v},p:function(){return N},q:function(){return H},r:function(){return I},s:function(){return T},t:function(){return k},u:function(){return i},v:function(){return A},w:function(){return U},x:function(){return M},y:function(){return q},z:function(){return R}});var r,i={PhraseId:"",Text:"",Link:"",Items:[]},o=i,u=null,a="preview",c="nav",s={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},l="REDACTED",f="loggedIn",d="loginOrRegister",m="loading",h="2.16.0",p=0,g={accessibilityStatement:o,countryRecommender:u,furtherLinks:i,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null},v=((r=v||(v={})).TEXT="Text",r.LINK="Link",r.PHRASEID="PhraseId",r.ITEMS="Items",v),y="metafunctionalities",k="".concat(y,".finddealer"),b="".concat(y,".myporsche"),w="".concat(b,".logout"),C="".concat(b,".").concat(f),x="".concat(b,".").concat(d),E="".concat(b,".messages"),A="mainmenu",I="".concat(A,".crest"),N="".concat(A,".menu"),P=function(){return(n=P||(P={})).PRODUCTION="production",n.PREVIEW="preview",n.TEST="test",n.LOCAL="local",P;var n}();function M(n){switch(n){case P.PRODUCTION:return"P";case P.PREVIEW:return"PP";default:return"K"}}var _="featureOverrideEnabled",S="HOMENAV_1590",O="HOMENAV_1599",T='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',L=function(){return(n=L||(L={})).Link="link",n.Button="button",n.Image="image",L;var n}(),H=function(){return(n=H||(H={})).Change="PAGHomeNav_CountryRecommenderChange_Click",n.Close="PAGHomeNav_CountryRecommenderClose_Click",n.Load="PAGHomeNav_CountryRecommender_Load",H;var n}(),R=function(){return(n=R||(R={})).metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.navigationClick="PAGHomeNav_Navigation_Click",n.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.modelClick="PAGHomeNav_Model_Click",R;var n}(),D={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},B=function(n){return"string"==typeof n&&n.length>0};function j(n){return"string"==typeof n?n:""}function z(n){return n instanceof HTMLElement?n:null}function G(n){return n instanceof HTMLInputElement?n:null}function U(n){return n.split(".").slice(0,-1).join(".")}function F(n){return 0===n.x&&0===n.y}function V(n){return n===m}function W(n){return!V(n)&&!function(n){return n===d}(n)}function K(n,e){return n===f?e:n}function q(n,e,t){return"".concat(e,"/as/authorization.oauth2?&client_id=").concat(n,"&response_type=code&redirect_uri=").concat(t,"/auth")}},8605:function(n,e,t){t.d(e,{b:function(){return r}});var r={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920}},4413:function(e,t,r){r.d(t,{c:function(){return c}});var i,o=r(5346),u=function(n){return!("isConnected"in n)||n.isConnected},a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];i&&clearTimeout(i),i=setTimeout(function(){i=0,(function(e){var t,r=n(e.keys());try{for(r.s();!(t=r.n()).done;){var i=t.value;e.set(i,e.get(i).filter(u))}}catch(o){r.e(o)}finally{r.f()}}).apply(void 0,t)},2e3)},c=function(n,e){var t=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n,e){return n!==e},t=new Map(Object.entries(null!=n?n:{})),r={dispose:[],get:[],set:[],reset:[]},i=function(){t=new Map(Object.entries(null!=n?n:{})),r.reset.forEach(function(n){return n()})},o=function(n){return r.get.forEach(function(e){return e(n)}),t.get(n)},u=function(n,i){var o=t.get(n);e(i,o,n)&&(t.set(n,i),r.set.forEach(function(e){return e(n,i,o)}))},a="undefined"==typeof Proxy?{}:new Proxy(n,{get:function(n,e){return o(e)},ownKeys:function(n){return Array.from(t.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(n,e){return t.has(e)},set:function(n,e,t){return u(e,t),!0}}),c=function(n,e){return r[n].push(e),function(){!function(n,e){var t=n.indexOf(e);t>=0&&(n[t]=n[n.length-1],n.length--)}(r[n],e)}};return{state:a,get:o,set:u,on:c,onChange:function(e,t){var r=c("set",function(n,r){n===e&&t(r)}),i=c("reset",function(){return t(n[e])});return function(){r(),i()}},use:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var r=e.reduce(function(n,e){return e.set&&n.push(c("set",e.set)),e.get&&n.push(c("get",e.get)),e.reset&&n.push(c("reset",e.reset)),e.dispose&&n.push(c("dispose",e.dispose)),n},[]);return function(){return r.forEach(function(n){return n()})}},dispose:function(){r.dispose.forEach(function(n){return n()}),i()},reset:i,forceUpdate:function(n){var e=t.get(n);r.set.forEach(function(t){return t(n,e,e)})}}}(n,e);return t.use(function(){if("function"!=typeof o.a)return{};var n=new Map;return{dispose:function(){return n.clear()},get:function(e){var t=(0,o.a)();t&&function(n,e,t){var r=n.get(e);r?r.includes(t)||r.push(t):n.set(e,[t])}(n,e,t)},set:function(e){var t=n.get(e);t&&n.set(e,t.filter(o.f)),a(n)},reset:function(){n.forEach(function(n){return n.forEach(o.f)}),a(n)}}}()),t}},7050:function(n,e,r){r.r(e),r.d(e,{phn_messages_link:function(){return l}});var o=r(5346),u=r(7321),a=r(5514),c=r(4869),s=r(6202);r(4413),r(4195),r(8605);var l=function(){function n(e){t(this,n),(0,o.r)(this,e),this.item=a.u}return i(n,[{key:"sendNavigationClickAnalyticsEvent",value:function(){var n=new c.N(u.a.state,this.item);(u.a.state.w.pagData=u.a.state.w.pagData||[]).push(n.event())}},{key:"render",value:function(){var n=this,e=s.n.get("unreadMessagesCount");return(0,o.h)("a",{href:this.item.Link,onClick:function(){return n.sendNavigationClickAnalyticsEvent()}},(0,o.h)("span",{class:"link-text"},this.item.Text),e>0?(0,o.h)("span",{class:"unread-messages-count"},e):null)}}]),n}();l.style='.sc-phn-messages-link-h{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:1rem;border-bottom:1px solid #e3e4e5}.sc-phn-messages-link-h:hover{color:#d5001c;cursor:pointer}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h{font-size:1.125rem}}@media (min-width: 1300px){.sc-phn-messages-link-h{border-bottom:0;padding-left:0}}.sc-phn-messages-link-h a.sc-phn-messages-link{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;font-weight:400;color:inherit;text-decoration:none;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;width:100%;padding:1rem 0 0.875rem 0.625rem}.sc-phn-messages-link-h a.sc-phn-messages-link::-moz-focus-inner{border:0}.sc-phn-messages-link-h a.sc-phn-messages-link{outline:transparent solid 1px;outline-offset:2px}.sc-phn-messages-link-h a.sc-phn-messages-link:focus{outline-color:currentColor}.sc-phn-messages-link-h a.sc-phn-messages-link:focus:not(:focus-visible){outline-color:transparent}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h a.sc-phn-messages-link{padding-top:1.125rem;padding-bottom:1.125rem}}@media (min-width: 1300px){.sc-phn-messages-link-h a.sc-phn-messages-link{padding-top:0.5rem;padding-bottom:0.5rem}}.sc-phn-messages-link-h .unread-messages-count.sc-phn-messages-link{height:1rem;margin-left:0.5rem;padding:0 0.3125rem;background-color:#d5001c;border-radius:8px;font-size:0.75rem;color:#fff;line-height:1rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h .unread-messages-count.sc-phn-messages-link{height:1.125rem;font-size:0.875rem;line-height:1.125rem}}.sc-phn-messages-link-h .unread-messages-count.sc-phn-messages-link:hover{color:#fff}'}}])}();