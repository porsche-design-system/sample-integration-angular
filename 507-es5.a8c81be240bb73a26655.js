!function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function t(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function r(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,a=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return s=n.done,n},e:function(n){a=!0,c=n},f:function(){try{s||null==t.return||t.return()}finally{if(a)throw c}}}}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[507],{5514:function(n,e,t){t.d(e,{A:function(){return a},B:function(){return v},C:function(){return z},D:function(){return i},E:function(){return u},F:function(){return M},G:function(){return I},H:function(){return w},I:function(){return C},J:function(){return G},K:function(){return O},L:function(){return p},M:function(){return k},N:function(){return B},O:function(){return W},R:function(){return h},V:function(){return d},a:function(){return f},b:function(){return m},c:function(){return c},d:function(){return s},e:function(){return U},f:function(){return K},g:function(){return j},h:function(){return V},i:function(){return H},j:function(){return A},k:function(){return D},l:function(){return g},m:function(){return l},n:function(){return E},o:function(){return y},p:function(){return _},q:function(){return S},r:function(){return R},s:function(){return T},t:function(){return x},u:function(){return o},v:function(){return L},w:function(){return F},x:function(){return P},y:function(){return q},z:function(){return N}});var r,o={PhraseId:"",Text:"",Link:"",Items:[]},i=o,c=null,s="preview",a="nav",u={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},h="REDACTED",m="loggedIn",p="loginOrRegister",f="loading",d="2.16.0",l=0,g={accessibilityStatement:i,countryRecommender:c,furtherLinks:o,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null},y=((r=y||(y={})).TEXT="Text",r.LINK="Link",r.PHRASEID="PhraseId",r.ITEMS="Items",y),b="metafunctionalities",x="".concat(b,".finddealer"),k="".concat(b,".myporsche"),w="".concat(k,".logout"),v="".concat(k,".").concat(m),I="".concat(k,".").concat(p),C="".concat(k,".messages"),L="mainmenu",R="".concat(L,".crest"),_="".concat(L,".menu"),E=function(){return(n=E||(E={})).PRODUCTION="production",n.PREVIEW="preview",n.TEST="test",n.LOCAL="local",E;var n}();function P(n){switch(n){case E.PRODUCTION:return"P";case E.PREVIEW:return"PP";default:return"K"}}var A="featureOverrideEnabled",M="HOMENAV_1590",O="HOMENAV_1599",T='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',z=function(){return(n=z||(z={})).Link="link",n.Button="button",n.Image="image",z;var n}(),S=function(){return(n=S||(S={})).Change="PAGHomeNav_CountryRecommenderChange_Click",n.Close="PAGHomeNav_CountryRecommenderClose_Click",n.Load="PAGHomeNav_CountryRecommender_Load",S;var n}(),N=function(){return(n=N||(N={})).metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.navigationClick="PAGHomeNav_Navigation_Click",n.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.modelClick="PAGHomeNav_Model_Click",N;var n}(),D={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},H=function(n){return"string"==typeof n&&n.length>0};function j(n){return"string"==typeof n?n:""}function U(n){return n instanceof HTMLElement?n:null}function G(n){return n instanceof HTMLInputElement?n:null}function F(n){return n.split(".").slice(0,-1).join(".")}function V(n){return 0===n.x&&0===n.y}function W(n){return n===f}function K(n){return!W(n)&&!function(n){return n===p}(n)}function B(n,e){return n===m?e:n}function q(n,e,t){return"".concat(e,"/as/authorization.oauth2?&client_id=").concat(n,"&response_type=code&redirect_uri=").concat(t,"/auth")}},8605:function(n,e,t){t.d(e,{b:function(){return r}});var r={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920}},4413:function(n,e,t){t.d(e,{c:function(){return a}});var o,i=t(5346),c=function(n){return!("isConnected"in n)||n.isConnected},s=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];o&&clearTimeout(o),o=setTimeout(function(){o=0,(function(n){var e,t=r(n.keys());try{for(t.s();!(e=t.n()).done;){var o=e.value;n.set(o,n.get(o).filter(c))}}catch(i){t.e(i)}finally{t.f()}}).apply(void 0,e)},2e3)},a=function(n,e){var t=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n,e){return n!==e},t=new Map(Object.entries(null!=n?n:{})),r={dispose:[],get:[],set:[],reset:[]},o=function(){t=new Map(Object.entries(null!=n?n:{})),r.reset.forEach(function(n){return n()})},i=function(n){return r.get.forEach(function(e){return e(n)}),t.get(n)},c=function(n,o){var i=t.get(n);e(o,i,n)&&(t.set(n,o),r.set.forEach(function(e){return e(n,o,i)}))},s="undefined"==typeof Proxy?{}:new Proxy(n,{get:function(n,e){return i(e)},ownKeys:function(n){return Array.from(t.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(n,e){return t.has(e)},set:function(n,e,t){return c(e,t),!0}}),a=function(n,e){return r[n].push(e),function(){!function(n,e){var t=n.indexOf(e);t>=0&&(n[t]=n[n.length-1],n.length--)}(r[n],e)}};return{state:s,get:i,set:c,on:a,onChange:function(e,t){var r=a("set",function(n,r){n===e&&t(r)}),o=a("reset",function(){return t(n[e])});return function(){r(),o()}},use:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var r=e.reduce(function(n,e){return e.set&&n.push(a("set",e.set)),e.get&&n.push(a("get",e.get)),e.reset&&n.push(a("reset",e.reset)),e.dispose&&n.push(a("dispose",e.dispose)),n},[]);return function(){return r.forEach(function(n){return n()})}},dispose:function(){r.dispose.forEach(function(n){return n()}),o()},reset:o,forceUpdate:function(n){var e=t.get(n);r.set.forEach(function(t){return t(n,e,e)})}}}(n,e);return t.use(function(){if("function"!=typeof i.a)return{};var n=new Map;return{dispose:function(){return n.clear()},get:function(e){var t=(0,i.a)();t&&function(n,e,t){var r=n.get(e);r?r.includes(t)||r.push(t):n.set(e,[t])}(n,e,t)},set:function(e){var t=n.get(e);t&&n.set(e,t.filter(i.f)),s(n)},reset:function(){n.forEach(function(n){return n.forEach(i.f)}),s(n)}}}()),t}},1507:function(e,r,o){o.r(r),o.d(r,{phn_car_series:function(){return u},phn_myporsche_button_content:function(){return h}});var i=o(5346),c=o(6202),s=o(8605),a=o(5514);o(4413);var u=function(){function e(t){n(this,e),(0,i.r)(this,t),this.navigationLoaded=!1,this.wasRetrieved=!1,this.wasRegistered=!1}return t(e,[{key:"componentWillLoad",value:function(){this.breakpoint<s.b.l?c.n.state.imagesLoaded=!0:(c.n.state.imagesRegistered++,this.wasRegistered=!0)}},{key:"onImgLoad",value:function(){this.wasRegistered&&!this.wasRetrieved&&(c.n.state.imagesRetrieved++,this.wasRetrieved=!0)}},{key:"getImageSize",value:function(n){switch(n){case s.b.xxl:case s.b.xl:return 1920;case s.b.l:return 1366;case s.b.m:return 1024;case s.b.s:return 768;case s.b.xs:return 375;default:return 320}}},{key:"render",value:function(){var n=this,e=this.getImageSize(this.breakpoint),t=(0,i.d)("".concat(this.assetsURL,"/series-assets"));return(0,i.h)(i.H,null,(0,i.h)("img",{srcSet:"".concat(t,"/").concat(e,"/").concat(this.image,".jpg, ").concat(t,"/").concat(e,"/").concat(this.image,"@2x.jpg 2x"),alt:"",onLoad:function(){return n.onImgLoad()},style:this.navigationLoaded?{}:{display:"none"}}),this.navigationLoaded?(0,i.h)("p",{class:"car-series-text"},this.text):this.breakpoint>=s.b.l?(0,i.h)("div",{class:"car-series-skeleton"}):null)}}],[{key:"assetsDirs",get:function(){return["series-assets"]}}]),e}();u.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-car-series-h{display:block;text-align:center;text-decoration:none;color:#000}.sc-phn-car-series-h:hover{cursor:pointer;color:#d5001c}@media (min-width: 1300px){.sc-phn-car-series-h:hover{color:inherit;cursor:default}}.sc-phn-car-series-h .car-series-text.sc-phn-car-series{padding:0 0.1875rem 0 0;line-height:1.5rem;font-size:1rem;margin:-1.125rem 0 0 0}@media (min-width: 760px){.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-2.3125rem;padding:0 0.0625rem 0 0;font-size:1.125rem}}@media (min-width: 1000px){.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-2.0625rem;padding:0 0.125rem 0 0;font-size:1rem}}@media (min-width: 1300px){.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-1.0625rem;padding:0;font-size:0.875rem}}@media (min-width: 1760px){.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-1.1875rem;padding:0;font-size:1rem}}.sc-phn-car-series-h .car-series-skeleton.sc-phn-car-series{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;background:#e3e4e5;margin-top:1rem;height:2.6875rem;width:5.5625rem}@media (min-width: 1760px){.sc-phn-car-series-h .car-series-skeleton.sc-phn-car-series{margin-top:1.1875rem;width:6.5625rem}}";var h=function(){function e(t){n(this,e),(0,i.r)(this,t),this.myPorscheRendered=(0,i.c)(this,"myPorscheRendered",7)}return t(e,[{key:"componentDidRender",value:function(){this.myPorscheRendered.emit()}},{key:"render",value:function(){return(0,i.h)("phn-p-flex",null,(0,a.O)(this.loggedInState)?(0,i.h)("phn-p-spinner",null):(0,i.h)("div",{class:"icon-container"},(0,i.h)("phn-p-icon",{color:this.isActive?"brand":"",name:"user",size:"inherit",source:(0,a.f)(this.loggedInState)?"".concat((0,i.d)("".concat(this.assetsURL,"/icon-assets")),"/user_filled").concat(this.isActive?"_active":"",".svg"):null}),(0,a.f)(this.loggedInState)&&this.unreadMessagesCount>0?(0,i.h)("span",{"aria-hidden":"true",class:"myporsche-unread-messages-indicator","data-test-id":"unread-messages-indicator"}):null),(0,i.h)("div",null,(0,i.h)("phn-p-text",{class:"myporsche-menu-item-text",color:"inherit",size:"inherit",tag:"div"},this.myporscheText),(0,a.f)(this.loggedInState)?(0,i.h)("phn-p-text",{class:"username",color:"inherit",size:"x-small",ellipsis:"true","data-test-id":"username"},(0,a.N)(this.loggedInState,this.loggedInText)):null))}}],[{key:"assetsDirs",get:function(){return["icon-assets"]}}]),e}();h.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-myporsche-button-content-h{display:block;position:relative;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1rem}@media (min-width: 760px){.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1.125rem}}@media (min-width: 1000px){.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1.25rem}}.sc-phn-myporsche-button-content-h phn-p-text.username.sc-phn-myporsche-button-content{margin-top:-0.3125rem}.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{width:1.5rem;height:1.5rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{height:1.75rem;width:1.75rem}}@media (min-width: 1000px) and (max-width: 1759px){.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{width:1.5rem;height:1.5rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{width:1.75rem;height:1.75rem}}.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{margin-top:-0.6rem;margin-right:0.25rem}.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{position:relative;margin-right:0.25rem;width:1.5rem;height:1.5rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{height:1.75rem;width:1.75rem}}@media (min-width: 1000px) and (max-width: 1759px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{width:1.5rem;height:1.5rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{width:1.75rem;height:1.75rem}}.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{position:absolute;width:0.375rem;height:0.375rem;border-radius:50%;background-color:#d5001c;top:0;right:0.125rem}@media (min-width: 760px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{right:0.25rem}}@media (min-width: 1000px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{right:0.125rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{right:0.25rem}}"}}])}();