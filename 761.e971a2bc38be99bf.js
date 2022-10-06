"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[761],{761:(u,o,r)=>{r.r(o),r.d(o,{phn_car_series:()=>i,phn_dealer_search:()=>a,phn_myporsche_button_content:()=>h});var e=r(672),s=r(505),t=r(31),m=r(82);r(896);const i=class{constructor(n){(0,e.r)(this,n),this.navigationLoaded=!1,this.wasRetrieved=!1,this.wasRegistered=!1}componentWillLoad(){(0,t.n)(this.breakpoint)?(s.n.state.imagesRegistered++,this.wasRegistered=!0):s.n.state.imagesLoaded=!0}onImgLoad(){this.wasRegistered&&!this.wasRetrieved&&(s.n.state.imagesRetrieved++,this.wasRetrieved=!0)}render(){const n=function d(n){switch(n){case t.l.xxl:case t.l.xl:return 1920;case t.l.l:return 1366;case t.l.m:return 1024;case t.l.s:return 768;case t.l.xs:return 375;default:return 320}}(this.breakpoint),c=(0,e.d)(`${(0,t.f)(s.n.state.env).ASSETS_URL}/series-assets`);return(0,e.h)(e.H,null,(0,e.h)("img",{srcSet:`${c}/${n}/${this.image}.jpg, ${c}/${n}/${this.image}@2x.jpg 2x`,alt:"",onLoad:()=>this.onImgLoad(),style:this.navigationLoaded?{}:{display:"none"}}),this.navigationLoaded?(0,e.h)("phn-p-text",{class:"car-series-text",size:"inherit",align:"center",color:"inherit"},this.text):(0,t.n)(this.breakpoint)?(0,e.h)("div",{class:"car-series-skeleton"}):null)}static get assetsDirs(){return["series-assets"]}};i.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}.sc-phn-car-series-h{display:block;text-align:center}@media (min-width: 1300px){.sc-phn-car-series-h:hover{color:inherit;cursor:default}}.sc-phn-car-series-h .car-series-text.sc-phn-car-series{padding:0 0.1875rem 0 0;line-height:1.5rem;font-size:1rem;margin:-1.125rem 0 0 0}@media (min-width: 760px){.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-2.3125rem;padding:0 0.0625rem 0 0;font-size:1.125rem}}@media (min-width: 1000px){.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-2.0625rem;padding:0 0.125rem 0 0;font-size:1rem}}@media (min-width: 1300px){.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-1.0625rem;padding:0;font-size:0.875rem}}@media (min-width: 1760px){.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-1.1875rem;padding:0;font-size:1rem}}.sc-phn-car-series-h .car-series-skeleton.sc-phn-car-series{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;background:#e3e4e5;margin-top:1rem;height:2.6875rem;width:5.5625rem}@media (min-width: 1760px){.sc-phn-car-series-h .car-series-skeleton.sc-phn-car-series{margin-top:1.1875rem;width:6.5625rem}}";const a=class{constructor(n){(0,e.r)(this,n),this.dealerSearchText="",this.dealerSearchLink="",this.navigationLoaded=!1}sendDataLayerEvent(){m.g.pushDataLayerEvent(t.E.META_FUNCTION_CLICK,{componentClick:{clickElementId:"metafunctionalities.finddealer",clickElementName:this.dealerSearchText,clickElementType:t.v.Link,targetUrl:this.dealerSearchLink}})}render(){return this.navigationLoaded?(0,e.h)("phn-p-link-pure",{href:this.dealerSearchLink,size:"inherit",icon:"pin",class:"dealer-search-link",onClick:()=>{this.sendDataLayerEvent()}},(0,e.h)("span",null,this.dealerSearchText)):(0,e.h)("div",{class:"dealer-search-skeleton"})}};a.style=".sc-phn-dealer-search-h{display:block;font-size:1rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-dealer-search-h{font-size:1.125rem}}.sc-phn-dealer-search-h .dealer-search-link.sc-phn-dealer-search{padding:0.875rem 0 0.875rem 0;width:100%}.sc-phn-dealer-search-h .dealer-search-link.sc-phn-dealer-search span.sc-phn-dealer-search{display:inline-block;white-space:nowrap}@media (min-width: 760px) and (max-width: 999px){.sc-phn-dealer-search-h .dealer-search-link.sc-phn-dealer-search{padding:1.125rem 0 1.125rem 0}}@media (min-width: 1300px){.sc-phn-dealer-search-h .dealer-search-link.sc-phn-dealer-search{padding:0}}@media (min-width: 1300px){.sc-phn-dealer-search-h .dealer-search-skeleton.sc-phn-dealer-search{width:6.375rem;height:0.875rem;background-color:#e3e4e5;margin-top:0.125rem;width:8rem}}";const h=class{constructor(n){(0,e.r)(this,n),this.myPorscheRendered=(0,e.c)(this,"myPorscheRendered",7)}componentDidRender(){this.myPorscheRendered.emit()}render(){return(0,e.h)("phn-p-flex",null,(0,t.K)(this.loggedInState)?(0,e.h)("phn-p-spinner",null):(0,e.h)("div",{class:"icon-container"},(0,e.h)("phn-p-icon",{color:this.isActive?"brand":"default",name:"user",size:"inherit",source:(0,t.b)(this.loggedInState)?`${(0,e.d)(`${(0,t.f)(s.n.state.env).ASSETS_URL}/icon-assets`)}/user_filled${this.isActive?"_active":""}.svg`:void 0}),(0,t.b)(this.loggedInState)&&this.unreadMessagesCount>0?(0,e.h)("span",{"aria-hidden":"true",class:"myporsche-unread-messages-indicator","data-test-id":"unread-messages-indicator"}):null),(0,e.h)("div",null,(0,e.h)("phn-p-text",{class:"myporsche-menu-item-text",color:"inherit",size:"inherit",tag:"div"},this.myporscheText),(0,t.b)(this.loggedInState)?(0,e.h)("phn-p-text",{color:"inherit",size:"x-small",ellipsis:"true","data-test-id":"username"},(0,t.J)(this.loggedInState,this.loggedInText)):null))}static get assetsDirs(){return["icon-assets"]}};h.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}.sc-phn-myporsche-button-content-h{display:block;position:relative;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1rem}@media (min-width: 760px){.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1.125rem}}@media (min-width: 1000px){.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h phn-p-text.sc-phn-myporsche-button-content{font-size:1.25rem}}.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{width:1.5rem;height:1.5rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{height:1.75rem;width:1.75rem}}@media (min-width: 1000px) and (max-width: 1759px){.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{width:1.5rem;height:1.5rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h phn-p-icon.sc-phn-myporsche-button-content,.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{width:1.75rem;height:1.75rem}}.sc-phn-myporsche-button-content-h phn-p-spinner.sc-phn-myporsche-button-content{margin-top:-0.6rem;margin-right:0.25rem}.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{position:relative;margin-right:0.25rem;width:1.5rem;height:1.5rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{height:1.75rem;width:1.75rem}}@media (min-width: 1000px) and (max-width: 1759px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{width:1.5rem;height:1.5rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content{width:1.75rem;height:1.75rem}}.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{position:absolute;width:0.375rem;height:0.375rem;border-radius:50%;background-color:#d5001c;top:0;right:0.125rem}@media (min-width: 760px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{right:0.25rem}}@media (min-width: 1000px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{right:0.125rem}}@media (min-width: 1760px){.sc-phn-myporsche-button-content-h .icon-container.sc-phn-myporsche-button-content .myporsche-unread-messages-indicator.sc-phn-myporsche-button-content{right:0.25rem}}"}}]);