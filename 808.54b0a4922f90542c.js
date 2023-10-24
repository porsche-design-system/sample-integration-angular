"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[808],{808:(C,b,o)=>{o.r(b),o.d(b,{phn_double_drawer:()=>k});var w=o(861),r=o(702),s=o(598),c=o(492),y=o(974),h=o(233),x=o(685),l=o(195),i=o(681),m=o(374),E=o(519);o(554),o(499),o(250),o(205);const _=({activeRoutingKey:e,locale:t,breakpoint:a,backButtonText:n,onClickBack:d,receivedContent:p})=>(0,r.h)("div",{class:"drawer-content"},(0,r.h)("div",{class:"main-drawer-header"},(0,i.i)(n)?(0,r.h)("phn-back-button",{class:"back-button",onClick:d,text:n,analyticsId:l.b.state.menu.id,activeRoutingKey:e}):null),(0,r.h)("phn-router",{activeRoutingKey:e,breakpoint:a,locale:t,receivedContent:p})),v=({activeRoutingKey:e,locale:t,backButtonText:a,onClickBack:n})=>(0,r.h)("div",{class:"drawer-content"},(0,r.h)("span",{class:"first-focus",tabIndex:-1,"aria-hidden":"true"}),(0,r.h)("div",{class:"side-drawer-header"},(0,i.i)(a)?(0,r.h)("phn-back-button",{class:"back-button",onClick:n,text:a,analyticsId:l.b.state.menu.id,activeRoutingKey:e}):null),(0,r.h)("phn-side-drawer",{activeRoutingKey:e,locale:t})),k=class{constructor(e){(0,r.r)(this,e),this.clickDrawerHeaderClose=(0,r.c)(this,"clickDrawerHeaderClose",7),this.clickDrawerHeaderBack=(0,r.c)(this,"clickDrawerHeaderBack",7),this.drawerClosed=(0,r.c)(this,"drawerClosed",7),this.drawerChanged=(0,r.c)(this,"drawerChanged",7),this.backdropClosed=(0,r.c)(this,"backdropClosed",7),this.phnDrawerStatus=(0,r.c)(this,"phnDrawerStatus",7),this.breakpoint=void 0,this.locale=void 0,this.initialUsingKeyboard=!1,this.routingKeyHistory=[],this.routingKeyPointer=s.R.LEVEL_ZERO,this.receivedContent=void 0,this.usingKeyboard=!1,this.animatingRoutingKeyPointer=s.R.LEVEL_ZERO,this.isAnimating=!0,this.animatingRoutingKey=""}watchRoutingKeyPointer(e,t){t<e&&((0,s.f)(this.routingKeyHistory[this.routingKeyPointer])===s.a.DEALER_SEARCH?h.a.play("transitionSameLevelDoubleDrawer").then(()=>this.focusOnInitialElement()):h.a.play("transitionNextLevelDoubleDrawer").then(()=>this.focusOnInitialElement()))}watchRoutingKeyHistory(e,t){(e.length<t.length||this.animateIfSameLength(e,t))&&h.a.play("transitionSameLevelDoubleDrawer").then(()=>this.focusOnInitialElement())}onResizeWindow(){this.animatingRoutingKeyPointer!==this.routingKeyPointer&&(this.animatingRoutingKey=this.routingKeyHistory[this.routingKeyPointer],this.animatingRoutingKeyPointer=this.routingKeyPointer)}handleKeyDown(e){if("Tab"!==e.key)return;let t=this.routingKeyHistory[this.routingKeyPointer];t.startsWith(s.a.DEALER_SEARCH)&&(t=t.split("/")[0]);const a=(0,i.r)(e.target);if(null===a)return;const n=(0,E.g)(this.el.querySelector("#side-drawer"));let d=(0,E.g)(this.el.querySelector("#main-drawer"));if(0===n.length||0===d.length)return;const p=n.findIndex(u=>u.getAttribute("data-id")===t),f=n[p];t===s.a.DEALER_SEARCH&&(d=d.filter(u=>"BUTTON"!==u.nodeName&&"A"!==u.nodeName));const D=n[n.length-1],R=d[d.length-1],g=this.el.querySelector(".close-button");if(e.shiftKey)e.shiftKey&&(a===d[0]&&(e.preventDefault(),null!==f&&(0,i.n)(f)),a===g&&(e.preventDefault(),(0,i.n)(D)));else{if(a===f)return e.preventDefault(),void(0,i.n)(d[0]);if(a===D&&(e.preventDefault(),null!==g&&(0,i.n)(g)),a===R){e.preventDefault();const P=(0,i.r)(n[p+1>=n.length?0:p+1]);(0,i.n)(P)}a===g&&(e.preventDefault(),(0,i.n)(n[0]))}}handleMobileMenuItemClick(e){h.a.isPlaying("transitionNextLevelDoubleDrawer")&&e.stopPropagation()}handleSideDrawerItemClick(e){h.a.isPlaying("transitionSameLevelDoubleDrawer")&&e.stopPropagation()}focusOnInitialElement(){let t=this.routingKeyPointer<this.routingKeyHistory.length-1?this.routingKeyHistory[this.routingKeyPointer+1]:this.routingKeyHistory[this.routingKeyPointer];t.startsWith(s.a.DEALER_SEARCH)&&(t=t.split("/")[0]);const a=(0,i.r)(this.el.querySelector(".autofocus"));if(null!==a)return void(0,i.n)(a);if(this.usingKeyboard){let d=null;return(0,i.i)(t)&&(d=(0,i.r)(this.el.querySelector(`[data-id="${t}"]`))),null===d&&(d=(0,i.r)(this.el.querySelector(`${i.F}`))),void(null!==d&&(0,i.n)(d))}const n=(0,i.r)(this.el.querySelector(".first-focus"));null!==n&&(0,i.n)(n)}goBackToPreviousMenu(){var e=this;return(0,w.Z)(function*(){e.routingKeyPointer===e.animatingRoutingKeyPointer&&(e.clickDrawerHeaderBack.emit(),(0,s.f)(e.routingKeyHistory[e.routingKeyPointer])===s.a.DEALER_SEARCH?h.a.play("transitionSameLevelDoubleDrawerReverse").then(()=>e.focusOnInitialElement()):h.a.play("transitionPreviousLevelDoubleDrawer").then(()=>e.focusOnInitialElement()))})()}updateRouting(){var e=this;return(0,w.Z)(function*(){e.animatingRoutingKey=e.routingKeyHistory[e.routingKeyPointer],e.animatingRoutingKeyPointer=e.routingKeyPointer,e.drawerChanged.emit(e.routingKeyPointer<e.routingKeyHistory.length-1),e.sendDoubleDrawerLoadDataEvent()})()}sendDoubleDrawerLoadDataEvent(){c.a.setDrawerType(l.f.DoubleDrawer),y.g.pushDataLayerEvent(l.E.DRAWER_LOAD,{componentDisplay:{displayElementType:c.a.calculateDisplayElementType(this.animatingRoutingKey||"",l.h.doubleDrawer),displayElementId:c.a.calculateDisplayElementId(),displayElementName:"Double Drawer"}})}sendDataEventOfCloseButtonClick(){y.g.pushDataLayerEvent(l.E.MENU_CLOSE_CLICK,{componentClick:{clickElementId:"mainmenu.drawer.close",clickElementName:"X",clickElementType:l.C.Button,targetElement:"level-0"},componentDisplay:{displayElementType:c.a.calculateDisplayElementType(this.animatingRoutingKey||"",l.h.closeButton),displayElementId:c.a.calculateDisplayElementId(),displayElementName:"Double Drawer"}})}animateIfSameLength(e,t){return e.length===t.length&&this.routingKeyPointer===e.length-1&&e[e.length-1]!==t[t.length-1]}componentWillLoad(){this.animatingRoutingKey=this.routingKeyHistory[this.routingKeyPointer],this.animatingRoutingKeyPointer=this.routingKeyPointer,this.usingKeyboard=this.initialUsingKeyboard}componentDidLoad(){var e=this;const t={onSlideMainDrawerOutEnd:(a=(0,w.Z)(function*(){return e.updateRouting()}),function(){return a.apply(this,arguments)})};var a;(0,m.r)({onAnimationStarts:()=>{this.phnDrawerStatus.emit({status:i.y.startOpening})},onAnimationEnds:()=>{this.phnDrawerStatus.emit({status:i.y.finishOpening}),this.focusOnInitialElement()}}),(0,m.a)({onBackdropFadeOutEnd:function(){var a=(0,w.Z)(function*(){e.backdropClosed.emit()});return function(){return a.apply(this,arguments)}}(),onAnimationStarts:()=>{this.phnDrawerStatus.emit({status:i.y.startClosing})},onAnimationEnds:()=>{this.phnDrawerStatus.emit({status:i.y.finishClosing})}}),(0,m.b)(t),(0,m.c)(t),(0,m.d)(t),(0,m.d)(t,"reverse"),this.sendDoubleDrawerLoadDataEvent()}render(){const e=this.routingKeyHistory[this.animatingRoutingKeyPointer-1],t=(0,x.a)(l.b.state,e),a=(0,s.f)(this.animatingRoutingKey),n=(0,s.f)(e)===s.a.DEALER_SEARCH,d=a===s.a.DEALER_SEARCH&&this.animatingRoutingKey!==a;return(0,r.h)(r.H,{role:"dialog","aria-modal":"true","aria-label":"navigation modal dialog"},(0,r.h)("phn-p-button",{variant:"secondary",class:"close-button",theme:"dark","hide-label":"true",icon:"close",aria:"{ 'aria-label': 'close modal dialog' }","data-test-id":"close-button",onClick:()=>{this.sendDataEventOfCloseButtonClick(),this.clickDrawerHeaderClose.emit()}}),(0,i.i)(this.animatingRoutingKey)?(0,r.h)(r.F,null,(0,r.h)("div",{class:"drawer",id:"side-drawer"},(0,r.h)(v,{activeRoutingKey:this.animatingRoutingKey,locale:this.locale,backButtonText:n?"":t,onClickBack:()=>this.goBackToPreviousMenu()})),(0,r.h)("div",{class:"drawer",id:"main-drawer"},(0,r.h)(_,{activeRoutingKey:this.animatingRoutingKey,breakpoint:this.breakpoint,locale:this.locale,backButtonText:d?t:"",receivedContent:this.receivedContent,onClickBack:()=>this.goBackToPreviousMenu()}),(0,r.h)("div",{class:"bottom-gradient"}))):null)}get el(){return(0,r.g)(this)}static get watchers(){return{routingKeyPointer:["watchRoutingKeyPointer"],routingKeyHistory:["watchRoutingKeyHistory"]}}};k.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-double-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-double-drawer{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-double-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-double-drawer{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-double-drawer{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-double-drawer{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-double-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-double-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-double-drawer{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-double-drawer{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-double-drawer{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-double-drawer{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-double-drawer-h{position:fixed;top:0;left:-1000px;height:100vh;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:301}@media (min-width: 1920px){.sc-phn-double-drawer-h{left:-1300px}}.opening-animation.sc-phn-double-drawer-h{left:0px;-webkit-transition:left 600ms;transition:left 600ms}.closing-animation.sc-phn-double-drawer-h{left:-1000px;-webkit-transition:left 600ms;transition:left 600ms}@media (min-width: 1920px){.closing-animation.sc-phn-double-drawer-h{left:-1300px}}.sc-phn-double-drawer-h .close-button.sc-phn-double-drawer{position:absolute;right:-4.75rem;z-index:301;width:3rem;height:3rem;margin-top:1.75rem;cursor:pointer}.sc-phn-double-drawer-h .drawer.sc-phn-double-drawer{overflow-y:auto;overflow-x:hidden;position:relative;background-color:#fff;height:100vh;-webkit-transition:left 400ms;transition:left 400ms}.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer{z-index:302;float:left;width:17.125rem;padding-left:1.75rem;padding-right:1.75rem}@media (min-width: 1000px){.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer{width:16.5rem;padding-left:2.25rem;padding-right:2.25rem}}@media (min-width: 1300px){.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer{width:19.3125rem;padding-left:3rem;padding-right:3rem}}@media (min-width: 1920px){.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer{width:27.375rem;padding-left:5.25rem;padding-right:5.25rem}}.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer>div.sc-phn-double-drawer{left:0}.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer phn-side-drawer.sc-phn-double-drawer{padding-bottom:6rem}.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer .side-drawer-header.sc-phn-double-drawer{-webkit-box-sizing:border-box;box-sizing:border-box;height:5.75rem;padding-top:2.625rem}@media (min-width: 1300px){.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer .side-drawer-header.sc-phn-double-drawer{height:6rem}}@media (min-width: 1920px){.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer .side-drawer-header.sc-phn-double-drawer{height:8rem;padding-top:3.75rem}}.sc-phn-double-drawer-h .drawer#side-drawer.sc-phn-double-drawer .side-drawer-header.sc-phn-double-drawer phn-back-button.sc-phn-double-drawer{margin-left:-0.5rem;height:1.5rem}.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer{z-index:301;float:right;border-radius:0 4px 4px 0;background-color:#EEEFF2;-webkit-box-sizing:border-box;box-sizing:border-box;position:static;width:20.625rem;padding-left:1.75rem;padding-right:1.75rem}@media (min-width: 1000px){.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer{width:21rem;padding-left:2.25rem;padding-right:2.25rem}}@media (min-width: 1300px){.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer{width:25.3125rem;padding-left:3rem;padding-right:3rem}}@media (min-width: 1920px){.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer{width:37.875rem;padding-left:5.25rem;padding-right:5.25rem}}.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer>div.sc-phn-double-drawer{left:0}.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer phn-router.sc-phn-double-drawer{padding-bottom:6rem}.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer .main-drawer-header.sc-phn-double-drawer{-webkit-box-sizing:border-box;box-sizing:border-box;height:4.125rem;padding-top:2.5rem;margin-bottom:1.625rem}@media (min-width: 1300px){.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer .main-drawer-header.sc-phn-double-drawer{margin-bottom:1.875rem}}@media (min-width: 1920px){.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer .main-drawer-header.sc-phn-double-drawer{height:5.25rem;margin-bottom:2.75rem;padding-top:2.5rem}}.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer .main-drawer-header.sc-phn-double-drawer phn-back-button.sc-phn-double-drawer{margin-left:-0.5rem;height:1.5rem}.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer .bottom-gradient.sc-phn-double-drawer{z-index:302;height:10rem;background:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(#EEEFF2));background:linear-gradient(to bottom, rgba(255, 255, 255, 0), #EEEFF2);opacity:1;position:absolute;width:100%;bottom:0;margin-left:-1.5rem;pointer-events:none;width:20.625rem;margin-left:20.625rem;border-radius:0 0 4px 0}@media (min-width: 1000px){.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer .bottom-gradient.sc-phn-double-drawer{width:21rem;margin-left:21rem}}@media (min-width: 1300px){.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer .bottom-gradient.sc-phn-double-drawer{width:25.3125rem;margin-left:25.3125rem}}@media (min-width: 1920px){.sc-phn-double-drawer-h .drawer#main-drawer.sc-phn-double-drawer .bottom-gradient.sc-phn-double-drawer{width:37.875rem;margin-left:37.875rem}}"}}]);