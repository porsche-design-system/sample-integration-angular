"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[592],{7363:function(e,t,i){i.d(t,{a:function(){return c},s:function(){return r}});var n=i(5514),o=i(2391),s=i(7321);function a(e,t,i,a,r){return{context:{[s.C.EventAction]:i,[s.C.ApplicationId]:n.A,[s.C.Language]:e.language,[s.C.Country]:e.country,[s.C.Timestamp]:(new Date).toISOString(),[s.C.Environment]:(0,n.x)(t),[s.C.Server]:o.w.getServerDomain()},visitor:{[s.V.LoginStatus]:a,[s.V.DeviceBrowserHeight]:o.w.innerHeight.toString(),[s.V.DeviceBrowserWidth]:o.w.innerWidth.toString(),[s.V.DeviceBrowserBreakpoint]:o.w.getBreakpoint().toString(),[s.V.DeviceBrowserOrientation]:o.w.getDeviceOrientation(),[s.V.DeviceType]:o.w.getDeviceType()},pageExperience:{[s.P.PageId]:o.w.getPageId(),[s.P.PageName]:o.w.getPageName()},ids:{[s.I.UserId]:r}}}function r(e,t,i,r,c,m,d){const l=Object.assign(Object.assign({},a(i,r,t,m,d)),{componentClick:{[s.b.ClickElementId]:e.PhraseId,[s.b.ClickElementName]:e.Text,[s.b.ClickElementType]:c,[s.b.TargetUrl]:(0,n.i)(e.Link)?e.Link:void 0}});o.w.addToPagData(l)}function c(e,t,i,r,c,m,d,l){const u=Object.assign(Object.assign({},a(i,r,t,m,d)),{componentClick:{[s.b.ClickElementId]:e.PhraseId,[s.b.ClickElementName]:e.Text,[s.b.ClickElementType]:c,[s.b.TargetUrl]:(0,n.i)(e.Link)?e.Link:void 0},car:{modelRangeName:l,bodytype:void 0,modelName:void 0,modelRangeCode:void 0,modelSeriesCode:void 0,modelSeriesName:void 0}});o.w.addToPagData(u)}},9035:function(e,t,i){i.d(t,{f:function(){return s}});var n=i(5514);const o={local:{featureOverrideEnabled:!0},preview:{featureOverrideEnabled:!0,HOMENAV_1590:!1,HOMENAV_1599:!0},test:{featureOverrideEnabled:!0,HOMENAV_1590:!0,HOMENAV_1599:!0},production:{featureOverrideEnabled:!1,HOMENAV_1590:!1,HOMENAV_1599:!0}},s=new class{constructor(e="",t=o){this.features={},this.featureMap=t||{},this.setFeatures(e)}isFeatureEnabled(e,t){var i,o;if(void 0===this.features)return!1;if(this.features[n.j]){const n=null===(o=null===(i=t.split("?")[1])||void 0===i?void 0:i.split("&").find(t=>t.includes(e)))||void 0===o?void 0:o.split("=")[1];if("true"===n)return!0;if("false"===n)return!1}return Boolean(this.features[e])}setFeatures(e){(0,n.i)(e)&&(this.features=this.featureMap[e])}}},2747:function(e,t,i){i.d(t,{f:function(){return s},g:function(){return a},h:function(){return o}});var n=i(5514);function o(e){return Array.isArray(e[n.o.ITEMS])&&e[n.o.ITEMS].some(e=>(0,n.i)(e[n.o.LINK]))}function s(e,t){return e.find(e=>e[n.o.PHRASEID]===t)}function a(e,t,i){var n;return null===(n=s(e,t))||void 0===n?void 0:n[i]}},4195:function(e,t,i){i.d(t,{L:function(){return r}});var n=i(8605),o=i(5514),s=i(7321),a=(()=>{return(e=a||(a={})).Portrait="p",e.Landscape="l",a;var e})();class r{constructor(e){this.initContext(),this.initVisitor(),this.initPageExperience(),this.initIds(),this.context.applicationId=e.applicationId,this.context.country=e.locale.country,this.context.language=e.locale.language,this.context.timestamp=(new Date).toISOString(),this.context.environment=this.getEnvironmentAbreviation(e.environment),this.populateVisitor(e.w,e.loginStatus),this.populatePageExperience(window),this.populateIds(e.userId)}event(){return{context:this.context,visitor:this.visitor,pageExperience:this.pageExperience,ids:this.ids}}initContext(){this.context={[s.C.ApplicationId]:void 0,[s.C.Language]:void 0,[s.C.Country]:void 0,[s.C.EventAction]:void 0,[s.C.Timestamp]:void 0,[s.C.Environment]:void 0,[s.C.Server]:void 0}}initVisitor(){this.visitor={[s.V.LoginStatus]:!1,[s.V.DeviceBrowserWidth]:"",[s.V.DeviceBrowserHeight]:"",[s.V.DeviceBrowserBreakpoint]:"",[s.V.DeviceBrowserOrientation]:"",[s.V.DeviceType]:""}}initPageExperience(){this.pageExperience={[s.P.PageId]:void 0,[s.P.PageName]:void 0}}initIds(){this.ids={[s.I.UserId]:""}}populateVisitor(e,t=!1){var i,n;this.visitor.loginStatus=t,this.visitor.deviceBrowserHeight=e.innerHeight.toString(),this.visitor.deviceBrowserWidth=e.innerWidth.toString(),this.visitor.deviceBrowserBreakpoint=null!==(n=null===(i=this.getLowerBreakpointForWidth(e.innerWidth))||void 0===i?void 0:i.toString())&&void 0!==n?n:"xxs",this.visitor.deviceBrowserOrientation=r.getDeviceOrientation(e)}populatePageExperience(e){this.pageExperience.pageId=`${e.location.protocol}//${e.location.host}${e.location.pathname}`,this.pageExperience.pageName=e.document.title.length>0?e.document.title:void 0}populateIds(e){this.ids.userId=e}getLowerBreakpointForWidth(e){return Object.values(n.b).filter(t=>t<=e).reverse().shift()}getEnvironmentAbreviation(e){return e===o.n.PRODUCTION?"P":e===o.n.PREVIEW?"PP":"K"}static getDeviceOrientation(e){return e.matchMedia("(orientation: landscape)").matches?a.Landscape:a.Portrait}}},6632:function(e,t,i){i.d(t,{d:function(){return c},e:function(){return m},i:function(){return r}});var n=i(7321),o=i(5514),s=i(2391);function a(e,t,i){const a=n.a.state.environment,r=JSON.stringify({level:e,env:a,pageUrl:s.w.location.origin,message:{id:t,data:i}});a===o.n.LOCAL?console[e](r):a===o.n.PRODUCTION&&"debug"!==e&&fetch("https://logs.nav.porsche.com",{method:"POST",body:r,mode:"no-cors"})}const r=a.bind(null,"info"),c=a.bind(null,"debug"),m=a.bind(null,"error")},1815:function(e,t,i){i.d(t,{M:function(){return s}});var n=i(4195),o=i(7321);class s extends n.L{constructor(e,t){super(e),this.context.eventAction="PAGHomeNav_ModelSeries_Click",this.initCar(),this.initComponentClick(),this.populateCar(t)}initCar(){this.car={[o.c.ModelRangeCode]:void 0,[o.c.ModelRangeName]:void 0,[o.c.ModelSeriesName]:void 0,[o.c.ModelSeriesCode]:void 0,[o.c.ModelName]:void 0,[o.c.Bodytype]:void 0}}initComponentClick(){this.componentClick={[o.b.ClickElementId]:void 0,[o.b.ClickElementName]:void 0,[o.b.ClickElementType]:void 0,[o.b.TargetUrl]:void 0}}populateCar(e){this.car.modelRangeName=e}event(){const e=this.car,t=this.componentClick;return Object.assign(Object.assign({},super.event()),{car:e,componentClick:t})}}},7493:function(e,t,i){i.d(t,{n:function(){return s}});var n=i(4413),o=i(5514);const s=(0,n.c)(o.l)},6202:function(e,t,i){i.d(t,{n:function(){return s}});var n=i(4413),o=i(5514);const s=(0,n.c)({imagesRegistered:0,imagesRetrieved:0,imagesLoaded:!0,navigationLoaded:!1,crestLoaded:!1,loggedInState:o.L,unreadMessagesCount:o.m,applicationClientId:""});s.onChange("imagesRetrieved",()=>{s.set("imagesLoaded",s.get("imagesRetrieved")===s.get("imagesRegistered"))}),s.onChange("imagesRegistered",()=>{s.set("imagesLoaded",s.get("imagesRetrieved")===s.get("imagesRegistered"))}),s.onChange("imagesLoaded",()=>{s.set("navigationLoaded",s.get("crestLoaded")&&s.get("imagesLoaded"))}),s.onChange("crestLoaded",()=>{s.set("navigationLoaded",s.get("crestLoaded")&&s.get("imagesLoaded"))})},4869:function(e,t,i){i.d(t,{N:function(){return s}});var n=i(4195),o=i(7321);class s extends n.L{constructor(e,t){super(e),this.context.eventAction="PAGHomeNav_Navigation_Click",this.initComponentClick(),this.populateComponentClickFromContentItem(t)}initComponentClick(){this.componentClick={[o.b.ClickElementId]:void 0,[o.b.ClickElementName]:void 0,[o.b.ClickElementType]:void 0,[o.b.TargetUrl]:void 0}}populateComponentClickFromContentItem(e){this.componentClick.clickElementId=e.PhraseId,this.componentClick.clickElementName=e.Text,this.componentClick.clickElementType=e.Link&&""!==e.Link?"link":"button",this.componentClick.targetUrl=""!==e.Link?e.Link:void 0}event(){const e=this.componentClick;return Object.assign(Object.assign({},super.event()),{componentClick:e})}}},5394:function(e,t,i){i.d(t,{N:function(){return s}});var n=i(4195),o=i(7321);class s extends n.L{constructor(e,t){super(e),this.context.eventAction="PAGHomeNav_Navigation_Load",this.initComponentClick(),this.populateComponentClickFromContentItem(t)}initComponentClick(){this.componentClick={[o.b.ClickElementId]:void 0,[o.b.ClickElementName]:void 0,[o.b.ClickElementType]:void 0,[o.b.TargetUrl]:void 0}}populateComponentClickFromContentItem(e){this.componentClick.clickElementId=e.PhraseId,this.componentClick.clickElementName=e.Text,this.componentClick.clickElementType="button",this.componentClick.targetUrl=void 0}event(){const e=this.componentClick;return Object.assign(Object.assign({},super.event()),{componentClick:e})}}},1628:function(e,t,i){i.d(t,{a:function(){return r},m:function(){return a}});var n=i(7321),o=i(5514);new n.L("de-DE");const s={menuButton:{PhraseId:"metafunctionalities.myporsche",Text:"My Porsche",Link:"myporsche-menubutton-link",Items:[]},loginOrRegister:{PhraseId:"metafunctionalities.myporsche.loginOrRegister",Text:"Login / Register",Link:"",Items:[]},login:{PhraseId:"metafunctionalities.myporsche.login",Text:"Login",Link:"myporsche-login-link",Items:[]},loggedIn:{PhraseId:"metafunctionalities.myporsche.loggedIn",Text:"Logged In",Link:"",Items:[]},logout:{PhraseId:"metafunctionalities.myporsche.logout",Text:"Log Out",Link:"https://login.porsche.com/auth/api/v1/gb/en_GB/public/logout",Items:[]},more:{PhraseId:"metafunctionalities.myporsche.more",Text:"Learn more",Link:"fake link",Items:[]},signup:{PhraseId:"metafunctionalities.myporsche.signup",Text:"Register now,",Link:"www.test-signupMyPorsche.com",Items:[]},signupText:{PhraseId:"metafunctionalities.myporsche.signupText",Text:"now now now now now now now now now now now now now now now now. please.....",Link:"",Items:[]},messages:{PhraseId:"metafunctionalities.myporsche.messages",Text:"Messages",Link:"https://inbox.porsche.com/gb/en_GB/messages",Items:[]},links:[{PhraseId:"metafunctionalities.myporsche.overview",Text:"Overview",Link:"https://my.porsche.com/core/gb/en_GB/home",Items:[]},{PhraseId:"metafunctionalities.myporsche.accountadministration",Text:"Personal Data",Link:"https://profile.porsche.com/myprofile/gb/en_GB/personal-data",Items:[]},{PhraseId:"metafunctionalities.myporsche.contact",Text:"Contact & Support",Link:"https://my.porsche.com/core/gb/en_GB/contact",Items:[]}]},a={PhraseId:"mainmenu.dealer",menuButton:{PhraseId:"mainmenu.dealer.menuButton",Text:"Dealers",Link:"",Items:[]},dealerSearch:{PhraseId:"mainmenu.dealer.dealerSearch",Text:"Find a dealer",Link:"",Items:[]},search:{PhraseId:"mainmenu.dealer.search",Text:"Search",Link:"",Items:[]},or:{PhraseId:"mainmenu.dealer.or",Text:"Or",Link:"",Items:[]},location:{PhraseId:"mainmenu.dealer.location",Text:"City or ZIP",Link:"",Items:[]},finderCars:{PhraseId:"mainmenu.dealer.finderCars",Text:"H\xe4ndlerfahrzeuge anzeigen",Link:"",Items:[]},bookService:{PhraseId:"mainmenu.dealer.bookService",Text:"Fahrzeugservice buchen",Link:"",Items:[]},backButton:{PhraseId:"mainmenu.dealer.backButton",Text:"Zur\xfcck",Link:"",Items:[]},geolocation:{PhraseId:"mainmenu.dealer.geolocation",Text:"Use current location",Link:"",Items:[]}};Object.assign(Object.assign({},o.l),{seriesList:[Object.assign(Object.assign({},o.E),{Name:"718 DE",Image:"718 DE"})],myPorsche:Object.assign({},s),dealer:a,metafunctionalities:[{PhraseId:"metafunctionalities.finddealer",Text:"Find a Centre",Link:"https://www.porsche.com/uk/dealersearch/",Items:[]},{PhraseId:"metafunctionalities.myporsche",Text:"My Porsche",Link:"https://connect-portal.porsche.com/core/gb/en_GB/home",Items:[{PhraseId:"metafunctionalities.myporsche.loginOrRegister",Id:"metafunctionalities.myporsche.loginOrRegister",Text:"Login or register",Link:"",Items:[]},{PhraseId:"metafunctionalities.myporsche.loggedIn",Id:"metafunctionalities.myporsche.loggedIn",Text:"Logged in",Link:"",Items:[]},{PhraseId:"metafunctionalities.myporsche.logout",Id:"metafunctionalities.myporsche.logout",Text:"Logout",Link:"https://login.porsche.com/auth/api/v1/gb/en_GB/public/logout",Items:[]}]}]}),Object.assign(Object.assign({},o.l),{seriesList:[Object.assign(Object.assign({},o.E),{Name:"718 IT",Image:"718 IT"})],myPorsche:Object.assign({},s),dealer:a,countryRecommender:{statement:{Text:"You are currently viewing content for:",PhraseId:"",Link:"",Items:[]},region:{Text:"Germany",PhraseId:"",Link:"",Items:[]},language:{Text:"German",PhraseId:"",Link:"",Items:[]},change:{Text:"Change preference",PhraseId:"",Link:"",Items:[]}}}),Object.assign(Object.assign({},o.l),{accessibilityStatement:{PhraseId:"mainmenu.accessibilitystatement",Text:"Accessibility Statement",Link:"https://preview.ppn.porsche.com/usa/accessibilitystatement/"}}),Object.assign(Object.assign({},o.l),{metafunctionalities:[{PhraseId:"metafunctionalities.finddealer",Text:"Find a Centre",Link:"https://www.porsche.com/uk/dealersearch/"},{PhraseId:"metafunctionalities.myporsche",Text:"My Porsche",Link:"https://connect-portal.porsche.com/core/gb/en_GB/home",Items:[{PhraseId:"metafunctionalities.myporsche.loginOrRegister",Id:"metafunctionalities.myporsche.loginOrRegister",Text:"Login or register"},{PhraseId:"metafunctionalities.myporsche.loggedIn",Id:"metafunctionalities.myporsche.loggedIn",Text:"Logged in"},{PhraseId:"metafunctionalities.myporsche.logout",Id:"metafunctionalities.myporsche.logout",Text:"Logout",Link:"https://login.porsche.com/auth/api/v1/gb/en_GB/public/logout"}]}]});const r=[{id:"14f3b8a2-b78d-4f96-b7b5-7b1b47b23542",name:"Niederlassungen Stuttgart",address:{street:"Porschestr. 1",postalCode:"70000",city:"Stuttgart",state:"",countryCode:"DE"},contactDetails:{phoneNumber:"+49-711-911-12345",emailAddress:"none@none.com",homePage:"www.iamahome.page"},market:""},{id:"6a6d8e8c-5b04-4a4b-a119-66021b528788",name:"Porsche Niederlassung Stuttgart GmbH",address:{street:"Porscheplatz 9",postalCode:"70435",city:"Stuttgart",state:"BW",countryCode:"DE"},contactDetails:{phoneNumber:"+49 711 91126220",emailAddress:"info@porsche-stuttgart.de",homePage:"www.iamalsoahome.page"},market:"Germany"}]}}]);