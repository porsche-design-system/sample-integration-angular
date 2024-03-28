"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[126],{126:(y,r,t)=>{t.r(r),t.d(r,{phn_drawer_header:()=>m});var p=t(467),e=t(430),k=t(114),i=t(436),s=t(951),b=t(367),l=t(915),n=t(778),d=t(496);t(129),t(171),t(283);const m=class{constructor(a){(0,e.r)(this,a),this.clickDrawerHeaderClose=(0,e.c)(this,"clickDrawerHeaderClose",7),this.backButtonText="",this.backButtonAnalyticsId=void 0,this.showBackButton=!1,this.route=void 0,this.breakpoint=void 0,this.receivedContent=!1,this.locale=void 0,this.showSkeleton=!0}componentWillLoad(){this.waitForComponentsToLoad()}waitForComponentsToLoad(){var a=this;return(0,p.A)(function*(){yield(0,l.c)(a.el,new l.T(5e3)),a.showSkeleton=!a.receivedContent})()}sendDataLayerEvent(){k.G.getInstance().pushDataLayerEvent(i.E.MENU_CLOSE_CLICK,{componentClick:{clickElementId:"mainmenu.drawer.close",clickElementName:"X",clickElementType:i.C.Button,targetElement:"level-0"},componentDisplay:{displayElementId:s.a.calculateDisplayElementId(),displayElementType:s.a.calculateDisplayElementType(this.route,i.c.closeButton),displayElementName:"X"}})}render(){const a=(0,b.f)(this.route),h=!(0,d.p)(this.breakpoint),o=void 0!==a?(0,n.x)(i.n.state,this.route,a):"",f=o.includes("mainmenu.")?o.split("mainmenu.")[1]:"",c=(0,n.y)(a,this.route,this.locale);return(0,e.h)("div",{class:"drawer-header"},this.showBackButton?(0,e.h)(e.F,null,(0,e.h)("phn-back-button",{class:"back-button",onClick:()=>{(0,n.v)()},analyticsId:this.backButtonAnalyticsId,text:h?"":this.backButtonText,style:this.showSkeleton?{display:"none"}:{}}),this.showSkeleton?(0,e.h)("div",{class:"button-skeleton"}):null):(0,e.h)("div",{class:"spacer"}),h?""===f?(0,e.h)(e.F,null,this.showSkeleton&&this.showBackButton?(0,e.h)("div",{class:"skeleton-headline"}):null,(0,e.h)("phn-heading",{text:o,style:this.showSkeleton||!(0,d.i)(o)?{display:"none"}:{},class:"heading-items",subtext:c})):(0,e.h)(e.F,null,this.showSkeleton?(0,e.h)("div",{class:"skeleton-headline"}):null,(0,e.h)("phn-signature-heading",{text:f,subtext:c})):null,(0,e.h)(e.F,null,(0,e.h)("phn-p-button-pure",{class:"close-button",icon:"close",hideLabel:"true",aria:{"aria-label":"close dialog"},size:"small",style:this.showSkeleton?{display:"none"}:{},"data-test-id":"close-button",onClick:()=>{this.sendDataLayerEvent(),(0,n.d)()}},"Close Dialog"),this.showSkeleton?(0,e.h)("div",{class:"button-skeleton"}):null))}get el(){return(0,e.a)(this)}};m.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-drawer-header{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-drawer-header{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-drawer-header{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-drawer-header{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-drawer-header{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-drawer-header{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-drawer-header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-drawer-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-drawer-header{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-drawer-header{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-drawer-header{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-drawer-header{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-drawer-header-h{display:block}.drawer-header.sc-phn-drawer-header{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.heading-items.sc-phn-drawer-header{margin-bottom:0.25rem;-ms-flex-align:center;align-items:center}.skeleton-headline.sc-phn-drawer-header{width:9.375rem;height:1.5rem;background:#d8d8db;border-radius:4px}.button-skeleton.sc-phn-drawer-header{margin-left:0.5rem;border-radius:0.25rem;height:1.5rem;width:1.5rem;background:#d8d8db}"}}]);