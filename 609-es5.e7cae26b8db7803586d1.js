!function(){"use strict";function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function t(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var o=0,u=function(){};return{s:u,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[609],{5514:function(n,t,e){e.d(t,{A:function(){return c},B:function(){return x},C:function(){return H},D:function(){return u},E:function(){return f},F:function(){return L},G:function(){return C},H:function(){return w},I:function(){return E},J:function(){return U},K:function(){return O},L:function(){return m},M:function(){return v},N:function(){return B},O:function(){return W},R:function(){return s},V:function(){return h},a:function(){return d},b:function(){return l},c:function(){return i},d:function(){return a},e:function(){return F},f:function(){return z},g:function(){return G},h:function(){return K},i:function(){return S},j:function(){return T},k:function(){return D},l:function(){return g},m:function(){return p},n:function(){return M},o:function(){return y},p:function(){return A},q:function(){return R},r:function(){return P},s:function(){return N},t:function(){return b},u:function(){return o},v:function(){return _},w:function(){return V},x:function(){return I},y:function(){return X},z:function(){return j}});var r,o={PhraseId:"",Text:"",Link:"",Items:[]},u=o,i=null,a="preview",c="nav",f={PhraseId:"",Name:"",Image:"",Models:[],ModelList:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},s="REDACTED",l="loggedIn",m="loginOrRegister",d="loading",h="2.16.0",p=0,g={accessibilityStatement:u,countryRecommender:i,furtherLinks:o,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:null,dealer:null},y=((r=y||(y={})).TEXT="Text",r.LINK="Link",r.PHRASEID="PhraseId",r.ITEMS="Items",y),k="metafunctionalities",b="".concat(k,".finddealer"),v="".concat(k,".myporsche"),w="".concat(v,".logout"),x="".concat(v,".").concat(l),C="".concat(v,".").concat(m),E="".concat(v,".messages"),_="mainmenu",P="".concat(_,".crest"),A="".concat(_,".menu"),M=function(){return(n=M||(M={})).PRODUCTION="production",n.PREVIEW="preview",n.TEST="test",n.LOCAL="local",M;var n}();function I(n){switch(n){case M.PRODUCTION:return"P";case M.PREVIEW:return"PP";default:return"K"}}var T="featureOverrideEnabled",L="HOMENAV_1590",O="HOMENAV_1599",N='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button',H=function(){return(n=H||(H={})).Link="link",n.Button="button",n.Image="image",H;var n}(),R=function(){return(n=R||(R={})).Change="PAGHomeNav_CountryRecommenderChange_Click",n.Close="PAGHomeNav_CountryRecommenderClose_Click",n.Load="PAGHomeNav_CountryRecommender_Load",R;var n}(),j=function(){return(n=j||(j={})).metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.navigationClick="PAGHomeNav_Navigation_Click",n.modelMetaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.modelClick="PAGHomeNav_Model_Click",j;var n}(),D={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},S=function(n){return"string"==typeof n&&n.length>0};function G(n){return"string"==typeof n?n:""}function F(n){return n instanceof HTMLElement?n:null}function U(n){return n instanceof HTMLInputElement?n:null}function V(n){return n.split(".").slice(0,-1).join(".")}function K(n){return 0===n.x&&0===n.y}function W(n){return n===d}function z(n){return!W(n)&&!function(n){return n===m}(n)}function B(n,t){return n===l?t:n}function X(n,t,e){return"".concat(t,"/as/authorization.oauth2?&client_id=").concat(n,"&response_type=code&redirect_uri=").concat(e,"/auth")}},4413:function(n,e,r){r.d(e,{c:function(){return c}});var o,u=r(5346),i=function(n){return!("isConnected"in n)||n.isConnected},a=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];o&&clearTimeout(o),o=setTimeout(function(){o=0,(function(n){var e,r=t(n.keys());try{for(r.s();!(e=r.n()).done;){var o=e.value;n.set(o,n.get(o).filter(i))}}catch(u){r.e(u)}finally{r.f()}}).apply(void 0,e)},2e3)},c=function(n,t){var e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n,t){return n!==t},e=new Map(Object.entries(null!=n?n:{})),r={dispose:[],get:[],set:[],reset:[]},o=function(){e=new Map(Object.entries(null!=n?n:{})),r.reset.forEach(function(n){return n()})},u=function(n){return r.get.forEach(function(t){return t(n)}),e.get(n)},i=function(n,o){var u=e.get(n);t(o,u,n)&&(e.set(n,o),r.set.forEach(function(t){return t(n,o,u)}))},a="undefined"==typeof Proxy?{}:new Proxy(n,{get:function(n,t){return u(t)},ownKeys:function(n){return Array.from(e.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(n,t){return e.has(t)},set:function(n,t,e){return i(t,e),!0}}),c=function(n,t){return r[n].push(t),function(){!function(n,t){var e=n.indexOf(t);e>=0&&(n[e]=n[n.length-1],n.length--)}(r[n],t)}};return{state:a,get:u,set:i,on:c,onChange:function(t,e){var r=c("set",function(n,r){n===t&&e(r)}),o=c("reset",function(){return e(n[t])});return function(){r(),o()}},use:function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];var r=t.reduce(function(n,t){return t.set&&n.push(c("set",t.set)),t.get&&n.push(c("get",t.get)),t.reset&&n.push(c("reset",t.reset)),t.dispose&&n.push(c("dispose",t.dispose)),n},[]);return function(){return r.forEach(function(n){return n()})}},dispose:function(){r.dispose.forEach(function(n){return n()}),o()},reset:o,forceUpdate:function(n){var t=e.get(n);r.set.forEach(function(e){return e(n,t,t)})}}}(n,t);return e.use(function(){if("function"!=typeof u.a)return{};var n=new Map;return{dispose:function(){return n.clear()},get:function(t){var e=(0,u.a)();e&&function(n,t,e){var r=n.get(t);r?r.includes(e)||r.push(e):n.set(t,[e])}(n,t,e)},set:function(t){var e=n.get(t);e&&n.set(t,e.filter(u.f)),a(n)},reset:function(){n.forEach(function(n){return n.forEach(u.f)}),a(n)}}}()),e}},3609:function(t,e,r){r.r(e),r.d(e,{phn_myporsche_items_drawer:function(){return c}});var o=r(5346),u=r(2747),i=r(7493),a=r(5514);r(4413);var c=function(){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(0,o.r)(this,n)}var e,r,c;return e=t,(r=[{key:"render",value:function(){var n=i.n.state.metafunctionalities,t=(0,u.g)(n,a.M,a.o.TEXT);return(0,o.h)(o.H,null,(0,o.h)("phn-headline",{text:(0,a.g)(t),class:"drawer-headline"}),(0,o.h)("phn-myporsche-items",{breakpoint:this.breakpoint}))}}])&&n(e.prototype,r),c&&n(e,c),Object.defineProperty(e,"prototype",{writable:!1}),t}();c.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-myporsche-items-drawer-h{padding-bottom:3.125rem}"}}])}();