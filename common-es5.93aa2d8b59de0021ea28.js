!function(){"use strict";function e(){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,i){var o=t(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(arguments.length<3?e:i):r.value}}).apply(this,arguments)}function t(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return r(this,n)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[592],{7363:function(e,t,n){n.d(t,{a:function(){return c},s:function(){return s}});var i=n(5514),o=n(2391),r=n(7321);function a(e,t,n,a,s){var c,u,d;return{context:(c={},l(c,r.C.EventAction,n),l(c,r.C.ApplicationId,i.A),l(c,r.C.Language,e.language),l(c,r.C.Country,e.country),l(c,r.C.Timestamp,(new Date).toISOString()),l(c,r.C.Environment,(0,i.x)(t)),l(c,r.C.Server,o.w.getServerDomain()),c),visitor:(u={},l(u,r.V.LoginStatus,a),l(u,r.V.DeviceBrowserHeight,o.w.innerHeight.toString()),l(u,r.V.DeviceBrowserWidth,o.w.innerWidth.toString()),l(u,r.V.DeviceBrowserBreakpoint,o.w.getBreakpoint().toString()),l(u,r.V.DeviceBrowserOrientation,o.w.getDeviceOrientation()),l(u,r.V.DeviceType,o.w.getDeviceType()),u),pageExperience:(d={},l(d,r.P.PageId,o.w.getPageId()),l(d,r.P.PageName,o.w.getPageName()),d),ids:l({},r.I.UserId,s)}}function s(e,t,n,s,c,u,d){var m,g=Object.assign(Object.assign({},a(n,s,t,u,d)),{componentClick:(m={},l(m,r.b.ClickElementId,e.PhraseId),l(m,r.b.ClickElementName,e.Text),l(m,r.b.ClickElementType,c),l(m,r.b.TargetUrl,(0,i.i)(e.Link)?e.Link:void 0),m)});o.w.addToPagData(g)}function c(e,t,n,s,c,u,d,m){var g,p=Object.assign(Object.assign({},a(n,s,t,u,d)),{componentClick:(g={},l(g,r.b.ClickElementId,e.PhraseId),l(g,r.b.ClickElementName,e.Text),l(g,r.b.ClickElementType,c),l(g,r.b.TargetUrl,(0,i.i)(e.Link)?e.Link:void 0),g),car:{modelRangeName:m,bodytype:void 0,modelName:void 0,modelRangeCode:void 0,modelSeriesCode:void 0,modelSeriesName:void 0}});o.w.addToPagData(p)}},9035:function(e,t,n){n.d(t,{f:function(){return r}});var i=n(5514),o={local:{featureOverrideEnabled:!0},preview:{featureOverrideEnabled:!0,HOMENAV_1590:!1,HOMENAV_1599:!0},test:{featureOverrideEnabled:!0,HOMENAV_1590:!0,HOMENAV_1599:!0},production:{featureOverrideEnabled:!1,HOMENAV_1590:!1,HOMENAV_1599:!0}},r=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;s(this,e),this.features={},this.featureMap=n||{},this.setFeatures(t)}return u(e,[{key:"isFeatureEnabled",value:function(e,t){var n,o;if(void 0===this.features)return!1;if(this.features[i.j]){var r=null===(o=null===(n=t.split("?")[1])||void 0===n?void 0:n.split("&").find(function(t){return t.includes(e)}))||void 0===o?void 0:o.split("=")[1];if("true"===r)return!0;if("false"===r)return!1}return Boolean(this.features[e])}},{key:"setFeatures",value:function(e){(0,i.i)(e)&&(this.features=this.featureMap[e])}}]),e}())},2747:function(e,t,n){n.d(t,{f:function(){return r},g:function(){return a},h:function(){return o}});var i=n(5514);function o(e){return Array.isArray(e[i.o.ITEMS])&&e[i.o.ITEMS].some(function(e){return(0,i.i)(e[i.o.LINK])})}function r(e,t){return e.find(function(e){return e[i.o.PHRASEID]===t})}function a(e,t,n){var i;return null===(i=r(e,t))||void 0===i?void 0:i[n]}},4195:function(e,t,n){n.d(t,{L:function(){return d}});var i,o=n(8605),r=n(5514),a=n(7321),c=((i=c||(c={})).Portrait="p",i.Landscape="l",c),d=function(){function e(t){s(this,e),this.initContext(),this.initVisitor(),this.initPageExperience(),this.initIds(),this.context.applicationId=t.applicationId,this.context.country=t.locale.country,this.context.language=t.locale.language,this.context.timestamp=(new Date).toISOString(),this.context.environment=this.getEnvironmentAbreviation(t.environment),this.populateVisitor(t.w,t.loginStatus),this.populatePageExperience(window),this.populateIds(t.userId)}return u(e,[{key:"event",value:function(){return{context:this.context,visitor:this.visitor,pageExperience:this.pageExperience,ids:this.ids}}},{key:"initContext",value:function(){var e;this.context=(l(e={},a.C.ApplicationId,void 0),l(e,a.C.Language,void 0),l(e,a.C.Country,void 0),l(e,a.C.EventAction,void 0),l(e,a.C.Timestamp,void 0),l(e,a.C.Environment,void 0),l(e,a.C.Server,void 0),e)}},{key:"initVisitor",value:function(){var e;this.visitor=(l(e={},a.V.LoginStatus,!1),l(e,a.V.DeviceBrowserWidth,""),l(e,a.V.DeviceBrowserHeight,""),l(e,a.V.DeviceBrowserBreakpoint,""),l(e,a.V.DeviceBrowserOrientation,""),l(e,a.V.DeviceType,""),e)}},{key:"initPageExperience",value:function(){var e;this.pageExperience=(l(e={},a.P.PageId,void 0),l(e,a.P.PageName,void 0),e)}},{key:"initIds",value:function(){this.ids=l({},a.I.UserId,"")}},{key:"populateVisitor",value:function(t){var n,i,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.visitor.loginStatus=o,this.visitor.deviceBrowserHeight=t.innerHeight.toString(),this.visitor.deviceBrowserWidth=t.innerWidth.toString(),this.visitor.deviceBrowserBreakpoint=null!==(i=null===(n=this.getLowerBreakpointForWidth(t.innerWidth))||void 0===n?void 0:n.toString())&&void 0!==i?i:"xxs",this.visitor.deviceBrowserOrientation=e.getDeviceOrientation(t)}},{key:"populatePageExperience",value:function(e){this.pageExperience.pageId="".concat(e.location.protocol,"//").concat(e.location.host).concat(e.location.pathname),this.pageExperience.pageName=e.document.title.length>0?e.document.title:void 0}},{key:"populateIds",value:function(e){this.ids.userId=e}},{key:"getLowerBreakpointForWidth",value:function(e){return Object.values(o.b).filter(function(t){return t<=e}).reverse().shift()}},{key:"getEnvironmentAbreviation",value:function(e){return e===r.n.PRODUCTION?"P":e===r.n.PREVIEW?"PP":"K"}}],[{key:"getDeviceOrientation",value:function(e){return e.matchMedia("(orientation: landscape)").matches?c.Landscape:c.Portrait}}]),e}()},6632:function(e,t,n){n.d(t,{d:function(){return c},e:function(){return u},i:function(){return s}});var i=n(7321),o=n(5514),r=n(2391);function a(e,t,n){var a=i.a.state.environment,s=JSON.stringify({level:e,env:a,pageUrl:r.w.location.origin,message:{id:t,data:n}});a===o.n.LOCAL?console[e](s):a===o.n.PRODUCTION&&"debug"!==e&&fetch("https://logs.nav.porsche.com",{method:"POST",body:s,mode:"no-cors"})}var s=a.bind(null,"info"),c=a.bind(null,"debug"),u=a.bind(null,"error")},1815:function(t,i,r){r.d(i,{M:function(){return m}});var c=r(4195),d=r(7321),m=function(t){n(r,t);var i=o(r);function r(e,t){var n;return s(this,r),(n=i.call(this,e)).context.eventAction="PAGHomeNav_ModelSeries_Click",n.initCar(),n.initComponentClick(),n.populateCar(t),n}return u(r,[{key:"initCar",value:function(){var e;this.car=(l(e={},d.c.ModelRangeCode,void 0),l(e,d.c.ModelRangeName,void 0),l(e,d.c.ModelSeriesName,void 0),l(e,d.c.ModelSeriesCode,void 0),l(e,d.c.ModelName,void 0),l(e,d.c.Bodytype,void 0),e)}},{key:"initComponentClick",value:function(){var e;this.componentClick=(l(e={},d.b.ClickElementId,void 0),l(e,d.b.ClickElementName,void 0),l(e,d.b.ClickElementType,void 0),l(e,d.b.TargetUrl,void 0),e)}},{key:"populateCar",value:function(e){this.car.modelRangeName=e}},{key:"event",value:function(){var t=this.car,n=this.componentClick;return Object.assign(Object.assign({},e(a(r.prototype),"event",this).call(this)),{car:t,componentClick:n})}}]),r}(c.L)},7493:function(e,t,n){n.d(t,{n:function(){return r}});var i=n(4413),o=n(5514),r=(0,i.c)(o.l)},6202:function(e,t,n){n.d(t,{n:function(){return r}});var i=n(4413),o=n(5514),r=(0,i.c)({imagesRegistered:0,imagesRetrieved:0,imagesLoaded:!0,navigationLoaded:!1,crestLoaded:!1,loggedInState:o.L,unreadMessagesCount:o.m,applicationClientId:""});r.onChange("imagesRetrieved",function(){r.set("imagesLoaded",r.get("imagesRetrieved")===r.get("imagesRegistered"))}),r.onChange("imagesRegistered",function(){r.set("imagesLoaded",r.get("imagesRetrieved")===r.get("imagesRegistered"))}),r.onChange("imagesLoaded",function(){r.set("navigationLoaded",r.get("crestLoaded")&&r.get("imagesLoaded"))}),r.onChange("crestLoaded",function(){r.set("navigationLoaded",r.get("crestLoaded")&&r.get("imagesLoaded"))})},4869:function(t,i,r){r.d(i,{N:function(){return m}});var c=r(4195),d=r(7321),m=function(t){n(r,t);var i=o(r);function r(e,t){var n;return s(this,r),(n=i.call(this,e)).context.eventAction="PAGHomeNav_Navigation_Click",n.initComponentClick(),n.populateComponentClickFromContentItem(t),n}return u(r,[{key:"initComponentClick",value:function(){var e;this.componentClick=(l(e={},d.b.ClickElementId,void 0),l(e,d.b.ClickElementName,void 0),l(e,d.b.ClickElementType,void 0),l(e,d.b.TargetUrl,void 0),e)}},{key:"populateComponentClickFromContentItem",value:function(e){this.componentClick.clickElementId=e.PhraseId,this.componentClick.clickElementName=e.Text,this.componentClick.clickElementType=e.Link&&""!==e.Link?"link":"button",this.componentClick.targetUrl=""!==e.Link?e.Link:void 0}},{key:"event",value:function(){var t=this.componentClick;return Object.assign(Object.assign({},e(a(r.prototype),"event",this).call(this)),{componentClick:t})}}]),r}(c.L)},5394:function(t,i,r){r.d(i,{N:function(){return m}});var c=r(4195),d=r(7321),m=function(t){n(r,t);var i=o(r);function r(e,t){var n;return s(this,r),(n=i.call(this,e)).context.eventAction="PAGHomeNav_Navigation_Load",n.initComponentClick(),n.populateComponentClickFromContentItem(t),n}return u(r,[{key:"initComponentClick",value:function(){var e;this.componentClick=(l(e={},d.b.ClickElementId,void 0),l(e,d.b.ClickElementName,void 0),l(e,d.b.ClickElementType,void 0),l(e,d.b.TargetUrl,void 0),e)}},{key:"populateComponentClickFromContentItem",value:function(e){this.componentClick.clickElementId=e.PhraseId,this.componentClick.clickElementName=e.Text,this.componentClick.clickElementType="button",this.componentClick.targetUrl=void 0}},{key:"event",value:function(){var t=this.componentClick;return Object.assign(Object.assign({},e(a(r.prototype),"event",this).call(this)),{componentClick:t})}}]),r}(c.L)},1628:function(e,t,n){n.d(t,{a:function(){return s},m:function(){return a}});var i=n(7321),o=n(5514);new i.L("de-DE");var r={menuButton:{PhraseId:"metafunctionalities.myporsche",Text:"My Porsche",Link:"myporsche-menubutton-link",Items:[]},loginOrRegister:{PhraseId:"metafunctionalities.myporsche.loginOrRegister",Text:"Login / Register",Link:"",Items:[]},login:{PhraseId:"metafunctionalities.myporsche.login",Text:"Login",Link:"myporsche-login-link",Items:[]},loggedIn:{PhraseId:"metafunctionalities.myporsche.loggedIn",Text:"Logged In",Link:"",Items:[]},logout:{PhraseId:"metafunctionalities.myporsche.logout",Text:"Log Out",Link:"https://login.porsche.com/auth/api/v1/gb/en_GB/public/logout",Items:[]},more:{PhraseId:"metafunctionalities.myporsche.more",Text:"Learn more",Link:"fake link",Items:[]},signup:{PhraseId:"metafunctionalities.myporsche.signup",Text:"Register now,",Link:"www.test-signupMyPorsche.com",Items:[]},signupText:{PhraseId:"metafunctionalities.myporsche.signupText",Text:"now now now now now now now now now now now now now now now now. please.....",Link:"",Items:[]},messages:{PhraseId:"metafunctionalities.myporsche.messages",Text:"Messages",Link:"https://inbox.porsche.com/gb/en_GB/messages",Items:[]},links:[{PhraseId:"metafunctionalities.myporsche.overview",Text:"Overview",Link:"https://my.porsche.com/core/gb/en_GB/home",Items:[]},{PhraseId:"metafunctionalities.myporsche.accountadministration",Text:"Personal Data",Link:"https://profile.porsche.com/myprofile/gb/en_GB/personal-data",Items:[]},{PhraseId:"metafunctionalities.myporsche.contact",Text:"Contact & Support",Link:"https://my.porsche.com/core/gb/en_GB/contact",Items:[]}]},a={PhraseId:"mainmenu.dealer",menuButton:{PhraseId:"mainmenu.dealer.menuButton",Text:"Dealers",Link:"",Items:[]},dealerSearch:{PhraseId:"mainmenu.dealer.dealerSearch",Text:"Find a dealer",Link:"",Items:[]},search:{PhraseId:"mainmenu.dealer.search",Text:"Search",Link:"",Items:[]},or:{PhraseId:"mainmenu.dealer.or",Text:"Or",Link:"",Items:[]},location:{PhraseId:"mainmenu.dealer.location",Text:"City or ZIP",Link:"",Items:[]},finderCars:{PhraseId:"mainmenu.dealer.finderCars",Text:"H\xe4ndlerfahrzeuge anzeigen",Link:"",Items:[]},bookService:{PhraseId:"mainmenu.dealer.bookService",Text:"Fahrzeugservice buchen",Link:"",Items:[]},backButton:{PhraseId:"mainmenu.dealer.backButton",Text:"Zur\xfcck",Link:"",Items:[]},geolocation:{PhraseId:"mainmenu.dealer.geolocation",Text:"Use current location",Link:"",Items:[]}};Object.assign(Object.assign({},o.l),{seriesList:[Object.assign(Object.assign({},o.E),{Name:"718 DE",Image:"718 DE"})],myPorsche:Object.assign({},r),dealer:a,metafunctionalities:[{PhraseId:"metafunctionalities.finddealer",Text:"Find a Centre",Link:"https://www.porsche.com/uk/dealersearch/",Items:[]},{PhraseId:"metafunctionalities.myporsche",Text:"My Porsche",Link:"https://connect-portal.porsche.com/core/gb/en_GB/home",Items:[{PhraseId:"metafunctionalities.myporsche.loginOrRegister",Id:"metafunctionalities.myporsche.loginOrRegister",Text:"Login or register",Link:"",Items:[]},{PhraseId:"metafunctionalities.myporsche.loggedIn",Id:"metafunctionalities.myporsche.loggedIn",Text:"Logged in",Link:"",Items:[]},{PhraseId:"metafunctionalities.myporsche.logout",Id:"metafunctionalities.myporsche.logout",Text:"Logout",Link:"https://login.porsche.com/auth/api/v1/gb/en_GB/public/logout",Items:[]}]}]}),Object.assign(Object.assign({},o.l),{seriesList:[Object.assign(Object.assign({},o.E),{Name:"718 IT",Image:"718 IT"})],myPorsche:Object.assign({},r),dealer:a,countryRecommender:{statement:{Text:"You are currently viewing content for:",PhraseId:"",Link:"",Items:[]},region:{Text:"Germany",PhraseId:"",Link:"",Items:[]},language:{Text:"German",PhraseId:"",Link:"",Items:[]},change:{Text:"Change preference",PhraseId:"",Link:"",Items:[]}}}),Object.assign(Object.assign({},o.l),{accessibilityStatement:{PhraseId:"mainmenu.accessibilitystatement",Text:"Accessibility Statement",Link:"https://preview.ppn.porsche.com/usa/accessibilitystatement/"}}),Object.assign(Object.assign({},o.l),{metafunctionalities:[{PhraseId:"metafunctionalities.finddealer",Text:"Find a Centre",Link:"https://www.porsche.com/uk/dealersearch/"},{PhraseId:"metafunctionalities.myporsche",Text:"My Porsche",Link:"https://connect-portal.porsche.com/core/gb/en_GB/home",Items:[{PhraseId:"metafunctionalities.myporsche.loginOrRegister",Id:"metafunctionalities.myporsche.loginOrRegister",Text:"Login or register"},{PhraseId:"metafunctionalities.myporsche.loggedIn",Id:"metafunctionalities.myporsche.loggedIn",Text:"Logged in"},{PhraseId:"metafunctionalities.myporsche.logout",Id:"metafunctionalities.myporsche.logout",Text:"Logout",Link:"https://login.porsche.com/auth/api/v1/gb/en_GB/public/logout"}]}]});var s=[{id:"14f3b8a2-b78d-4f96-b7b5-7b1b47b23542",name:"Niederlassungen Stuttgart",address:{street:"Porschestr. 1",postalCode:"70000",city:"Stuttgart",state:"",countryCode:"DE"},contactDetails:{phoneNumber:"+49-711-911-12345",emailAddress:"none@none.com",homePage:"www.iamahome.page"},market:""},{id:"6a6d8e8c-5b04-4a4b-a119-66021b528788",name:"Porsche Niederlassung Stuttgart GmbH",address:{street:"Porscheplatz 9",postalCode:"70435",city:"Stuttgart",state:"BW",countryCode:"DE"},contactDetails:{phoneNumber:"+49 711 91126220",emailAddress:"info@porsche-stuttgart.de",homePage:"www.iamalsoahome.page"},market:"Germany"}]}}])}();