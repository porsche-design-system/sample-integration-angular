"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[805],{315:(g,i,e)=>{e.d(i,{c:()=>c,g:()=>m,i:()=>a});var l=e(861),t=e(244);const m=()=>t.f.isOneUiToggleActive()?"default":"pds2";function a(){return o.apply(this,arguments)}function o(){return(o=(0,l.Z)(function*(){if(t.f.isOneUiToggleActive()){const{load:s}=yield e.e(996).then(e.bind(e,996));s({prefix:"phn"})}else{const{load:s}=yield e.e(351).then(e.bind(e,351));s({prefix:"phn"})}})).apply(this,arguments)}function c(s){return d.apply(this,arguments)}function d(){return(d=(0,l.Z)(function*(s){let r;if(t.f.isOneUiToggleActive()){const{componentsReady:h}=yield e.e(996).then(e.bind(e,996));r=h}else{const{componentsReady:h}=yield e.e(351).then(e.bind(e,351));r=h}yield r(s)})).apply(this,arguments)}},805:(g,i,e)=>{e.r(i),e.d(i,{phn_drawer_header:()=>p});var l=e(861),t=e(965),m=e(58),a=e(244),o=e(675),c=e(491),d=e(977),s=e(641),r=e(125),h=e(22),f=e(315);e(383),e(568),e(364);const p=class{constructor(n){(0,t.r)(this,n),this.clickDrawerHeaderBack=(0,t.c)(this,"clickDrawerHeaderBack",7),this.clickDrawerHeaderClose=(0,t.c)(this,"clickDrawerHeaderClose",7),this.backButtonText="",this.backButtonAnalyticsId=void 0,this.showBackButton=!1,this.activeRoutingKey=void 0,this.breakpoint=void 0,this.receivedContent=!1,this.pdsMode=(0,f.g)(),this.showSkeleton=!0}componentWillLoad(){this.waitForComponentsToLoad()}waitForComponentsToLoad(){var n=this;return(0,l.Z)(function*(){yield(0,r.c)(n.el,new h.T(5e3)),n.showSkeleton=!n.receivedContent})()}sendDataLayerEvent(){m.g.pushDataLayerEvent(a.E.MENU_CLOSE_CLICK,{componentClick:{clickElementId:"mainmenu.drawer.close",clickElementName:"X",clickElementType:a.C.Button,targetElement:"level-0"},componentDisplay:{displayElementId:o.a.calculateDisplayElementId(),displayElementType:o.a.calculateDisplayElementType(this.activeRoutingKey,a.h.closeButton),displayElementName:"X"}})}render(){const n=(0,s.f)(this.activeRoutingKey),_=a.f.isOneUiToggleActive()&&!(0,c.l)(this.breakpoint),u=void 0!==n?(0,d.b)(a.a.state,this.activeRoutingKey,n):"",y=u.includes("mainmenu.")?u.split("mainmenu.")[1]:"",E=(0,d.c)(n,this.activeRoutingKey);return(0,t.h)("div",{class:"drawer-header"},this.showBackButton?(0,t.h)(t.F,null,(0,t.h)("phn-back-button",{class:"back-button",onClick:()=>{this.clickDrawerHeaderBack.emit()},analyticsId:this.backButtonAnalyticsId,text:_?"":this.backButtonText,activeRoutingKey:this.activeRoutingKey,style:this.showSkeleton?{display:"none"}:{}}),this.showSkeleton?(0,t.h)("div",{class:"button-skeleton"}):null):(0,t.h)("div",{class:"spacer"}),_?""===y?(0,t.h)(t.F,null,this.showSkeleton&&this.showBackButton?(0,t.h)("div",{class:"skeleton-headline"}):null,(0,t.h)("phn-heading",{text:u,style:this.showSkeleton||!(0,c.i)(u)?{display:"none"}:{},class:"heading-items",subtext:E})):(0,t.h)(t.F,null,this.showSkeleton?(0,t.h)("div",{class:"skeleton-headline"}):null,(0,t.h)("phn-signature-heading",{text:y,subtext:E})):null,(0,t.h)(t.F,null,(0,t.h)("phn-p-button-pure",{class:"close-button",icon:"close",hideLabel:"true",aria:{"aria-label":"close dialog"},size:"small",style:this.showSkeleton?{display:"none"}:{},"data-test-id":"close-button",onClick:()=>{this.sendDataLayerEvent(),this.clickDrawerHeaderClose.emit()}},"Close Dialog"),this.showSkeleton?(0,t.h)("div",{class:"button-skeleton"}):null))}get el(){return(0,t.g)(this)}};p.style={default:".sc-phn-drawer-header-default-h{display:block}.drawer-header.sc-phn-drawer-header-default{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.heading-items.sc-phn-drawer-header-default{margin-bottom:0.25rem;-ms-flex-align:center;align-items:center}.skeleton-headline.sc-phn-drawer-header-default{width:9.375rem;height:1.5rem;background:#d8d8db;border-radius:4px}.button-skeleton.sc-phn-drawer-header-default{margin-left:0.5rem;border-radius:0.25rem;height:1.5rem;width:1.5rem;background:#d8d8db}",pds2:".sc-phn-drawer-header-pds2-h{display:block}.drawer-header.sc-phn-drawer-header-pds2{height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.heading-items.sc-phn-drawer-header-pds2{margin-bottom:0.375rem;align:center}.skeleton-headline.sc-phn-drawer-header-pds2{width:9.375rem;height:1.5rem;background:#e3e4e5;border-radius:4px}.button-skeleton.sc-phn-drawer-header-pds2{margin-left:0.5rem;border-radius:0.25rem;height:1.5rem;width:1.5rem;background:#e3e4e5}phn-p-model-signature.sc-phn-drawer-header-pds2{margin-top:0.375rem;align:center}@media (min-width: 0){phn-p-model-signature.sc-phn-drawer-header-pds2{height:1.625rem}}@media (min-width: 480px){phn-p-model-signature.sc-phn-drawer-header-pds2{height:2.25rem}}"}},568:(g,i,e)=>{e.d(i,{r:()=>t});const t=(0,e(244).d)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})}}]);