"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[580],{580:(M,g,d)=>{d.r(g),d.d(g,{phn_menu_desktop_level_1:()=>x});var v=d(861),o=d(546),c=d(556),f=d(624),O=d(474),e=d(349),b=d(174);function k([t,n],[s,l],[i,a]){return Math.abs((i*(n-l)+t*(l-a)+s*(a-n))/2)}function y(t,n,s,l){const i=k(t,n,s),a=k(l,n,s);return i===k(t,l,s)+a+k(t,n,l)}function E({activeRoutingKey:t,legacyShop:n,legacyMore:s,models:l,breakpoint:i}){if(!(0,e.i)(t))return null;if(t===e.n.SHOP)return(0,o.h)("phn-shops-and-more-overview",{content:n,class:"overlay-content",routingKey:e.n.SHOP});if(t===e.n.MORE)return(0,o.h)("phn-shops-and-more-overview",{content:s,class:"overlay-content",routingKey:e.n.MORE});if(t.startsWith(e.n.SERIES)){const a=l.series.find(({id:h})=>t===(0,e.x)(h));if(void 0!==a)return(0,o.h)("phn-car-series-overview",{series:a,allModels:l.all,class:"overlay-content",breakpoint:i})}return null}d(480);const x=class{constructor(t){(0,o.r)(this,t),this.scrolledPastHeader=!1,this.activeOverlayRoutingKey="",this.previousOverlayRoutingKey="",this.mouseOnOverlay="",this.mouseOnButton="",this.overlayLabelledBy="",this.myPorscheFlyoutIsActive=!1,this.triggerOverlayAction=new b.T(100),this.triggerDataLayerEvent=new b.T(500),this.overlayTriangleOffsetY=50,this.overlayTriangleOffsetX=80,this.topPoint=[0,0]}get leftPoint(){return[this.el.offsetLeft+this.overlayTriangleOffsetX,this.el.offsetTop+this.el.offsetHeight+this.overlayTriangleOffsetY]}get rightPoint(){return[this.el.offsetLeft+this.el.offsetWidth-this.overlayTriangleOffsetX,this.el.offsetTop+this.el.offsetHeight+this.overlayTriangleOffsetY]}handleMenuItemClick({target:t,detail:n}){var s,l;const i=null!==(l=null===(s=(0,e.p)(t))||void 0===s?void 0:s.getAttribute("id"))&&void 0!==l?l:"";this.setActiveOverlayRoutingKey(n,i)}handleMenuItemMouseEnter({detail:t}){this.mouseOnButton=t}handleMenuItemMouseLeave({detail:t}){var n=this;this.mouseOnButton="",this.triggerOverlayAction.set((0,v.Z)(function*(){!(0,e.i)(n.mouseOnOverlay)&&!(0,e.i)(n.mouseOnButton)&&!y(n.leftPoint,n.rightPoint,n.topPoint,t)&&n.setActiveOverlayRoutingKey("")}))}handleOverlayMouseEnter(){this.mouseOnOverlay=this.activeOverlayRoutingKey}handleOverlayMouseLeave(){var t=this;this.mouseOnOverlay="",this.triggerOverlayAction.set((0,v.Z)(function*(){!(0,e.i)(t.mouseOnOverlay)&&!(0,e.i)(t.mouseOnButton)&&t.setActiveOverlayRoutingKey("")}))}handleMenuMouseMove(t){var n=this;if((0,e.i)(this.mouseOnOverlay)||!(0,e.i)(this.mouseOnButton))return;const s=[t.clientX,t.clientY];if(this.mouseOnButton===this.activeOverlayRoutingKey)return void(y(this.leftPoint,this.rightPoint,this.topPoint,s)||(this.topPoint=s));let l="";if("function"==typeof t.composedPath){const i=t.composedPath().find(h=>{var r;return(0,e.i)(null===(r=(0,e.p)(h))||void 0===r?void 0:r.id)}),a=(0,e.p)(i);null!==a&&(l=a.id)}if((0,e.i)(this.activeOverlayRoutingKey)&&y(this.leftPoint,this.rightPoint,this.topPoint,s)){const i=this.mouseOnButton;this.triggerOverlayAction.set((0,v.Z)(function*(){n.mouseOnButton===i&&n.mouseOnButton!==n.activeOverlayRoutingKey&&(n.setActiveOverlayRoutingKey(n.mouseOnButton,l),n.topPoint=s,n.triggerDataLayerEvent.set((0,v.Z)(function*(){n.mouseOnButton===n.activeOverlayRoutingKey&&n.sendDataLayerEvent(n.mouseOnButton)})))}))}else this.setActiveOverlayRoutingKey(this.mouseOnButton,l),this.triggerDataLayerEvent.set((0,v.Z)(function*(){n.mouseOnButton===n.activeOverlayRoutingKey&&n.sendDataLayerEvent(n.mouseOnButton)})),this.topPoint=s}recalculateWidths(){const t=(0,e.p)(this.el.querySelector(".expandable"));if(null!==t){const n=(0,e.p)(t.querySelector(".wrappable"));if(null!==n){const s=Array.from(t.querySelectorAll(".expandable-item")).reduce((l,i)=>l+i.clientWidth,0);t.clientWidth<=s?n.classList.add("wrapped"):n.classList.remove("wrapped")}}}myPorscheRendered(){this.recalculateWidths()}resizeHandler(){this.recalculateWidths()}handleAnimationEnd(t){var n,s;"slideUp"===t.animationName?(null===(n=(0,e.p)(t.target))||void 0===n||n.classList.remove("hiding"),this.overlayLabelledBy="",this.previousOverlayRoutingKey=""):"slideDown"===t.animationName&&(null===(s=(0,e.p)(t.target))||void 0===s||s.classList.remove("showing"))}componentDidLoad(){this.recalculateWidths()}disconnectedCallback(){this.triggerDataLayerEvent.cancel(),this.triggerOverlayAction.cancel()}sendDataLayerEvent(t){const{legacyShop:n,legacyMore:s,models:l}=f.n.state;if(e.n.SHOP===t)return void c.g.pushDataLayerEvent(e.h.NAVIGATION_LOAD,{componentClick:{clickElementId:n.id,clickElementName:n.text,clickElementType:e.v.Button}});if(e.n.MORE===t)return void c.g.pushDataLayerEvent(e.h.NAVIGATION_LOAD,{componentClick:{clickElementId:s.id,clickElementName:s.text,clickElementType:e.v.Button}});const i=l.series.find(({id:a})=>(0,e.x)(a)===t);void 0===i||c.g.pushDataLayerEvent(e.h.MODEL_OVERLAY_LOAD,{componentClick:{clickElementId:i.id,clickElementName:i.name,clickElementType:e.v.Button},car:{modelRangeName:i.name}})}setActiveOverlayRoutingKey(t,n=""){if(this.overlayLabelledBy=n,this.previousOverlayRoutingKey=this.activeOverlayRoutingKey,this.activeOverlayRoutingKey=t,(0,e.i)(t));else{this.triggerDataLayerEvent.cancel();const s=this.el.querySelector(".overlay");null!==s&&(s.classList.remove("showing"),s.classList.add("hiding"))}}handleMenuKeyDown(t){var n,s,l;if("Tab"!==t.key)return;const i=(0,e.p)(t.target);if(null===i)return;const a=(0,e.p)(this.el.querySelector(".overlay-content"));if(null===a)return;const h=a.querySelectorAll(e.w),r=(0,e.p)(h[0]);if(null!==(n=i.parentElement)&&void 0!==n&&n.matches("phn-menu-button.active"))return void((0,e.i)(this.activeOverlayRoutingKey)&&(t.shiftKey?this.setActiveOverlayRoutingKey(""):null!==r&&(t.preventDefault(),r.focus())));const u=(0,e.p)(null===(s=this.el.querySelector("phn-menu-button.active"))||void 0===s?void 0:s.firstElementChild);if(null===u)return;if(t.shiftKey)return void(i===r&&(t.preventDefault(),u.focus(),this.setActiveOverlayRoutingKey("")));const m=(0,e.p)(h[h.length-1]),p=null===(l=this.el.querySelector(".menu-bar"))||void 0===l?void 0:l.querySelectorAll(e.w),_=(0,e.p)(null==p?void 0:p[p.length-1]);return i===m?(u!==_&&u.focus(),void this.setActiveOverlayRoutingKey("")):void 0}render(){const{legacyShop:t,legacyMore:n,dealer:s,myPorsche:l,models:i}=f.n.state,{navigationLoaded:a,unreadMessagesCount:h,loggedInState:r}=O.n.state,u=(0,e.i)(null==l?void 0:l.text),m=this.activeOverlayRoutingKey||this.previousOverlayRoutingKey;return(0,o.h)("nav",{onKeyDown:p=>this.handleMenuKeyDown(p),onMouseMove:p=>this.handleMenuMouseMove(p)},(0,o.h)("phn-p-flex",{direction:"row",role:"menubar",class:"menu-bar"},i.series.map(p=>(0,o.h)("phn-menu-button",{class:"car-series-menu-item"+(this.activeOverlayRoutingKey===(0,e.x)(p.id)?" active":""),isExpanded:this.activeOverlayRoutingKey===(0,e.x)(p.id),onClick:()=>{c.g.pushDataLayerEvent(e.h.MODEL_OVERLAY_LOAD,{componentClick:{clickElementId:p.id,clickElementName:p.name,clickElementType:e.v.Button},car:{modelRangeName:p.name}})},routingKey:(0,e.x)(p.id),id:`car-series-mega-menu-${p.name}`,screenReaderDescription:`Porsche Model Series ${p.name}`},(0,o.h)("phn-car-series",{text:p.name,image:p.image,breakpoint:this.breakpoint,navigationLoaded:a}))),(0,o.h)("phn-p-flex",{"justify-content":"flex-end",class:"expandable"},(0,o.h)("div",{class:"spacer expandable-item"}),a?(0,o.h)("phn-menu-button",{class:"shops-menu-item "+(this.activeOverlayRoutingKey===e.n.SHOP?"active":""),isExpanded:this.activeOverlayRoutingKey===e.n.SHOP,routingKey:e.n.SHOP,role:"none",onClick:()=>{c.g.pushDataLayerEvent(e.h.NAVIGATION_LOAD,{componentClick:{clickElementId:t.id,clickElementName:t.text,clickElementType:e.v.Button}})}},(0,o.h)("phn-p-flex",{class:"expandable-item"},(0,o.h)("phn-p-icon",{color:this.mouseOnButton===e.n.SHOP?"brand":"default",size:"inherit",name:"shoppingBag",class:"shops-menu-item-icon"}),(0,o.h)("phn-p-text",{class:"shops-menu-item-text",color:"inherit",size:"inherit",tag:"div"},t.text))):(0,o.h)("div",{class:"expandable-item skeleton shops-skeleton"},(0,o.h)("div",null)),(0,o.h)("phn-p-flex",{wrap:"wrap","align-items":"center",class:"wrappable"},(0,o.h)("phn-dealer-search",{class:"expandable-item metafunctionalities-item",dealerSearchText:s.text,dealerSearchLink:s.search.map.link,navigationLoaded:a}),u?a?(0,o.h)("div",{class:"myporsche-container expandable-item metafunctionalities-item",onMouseEnter:()=>{(0,e.b)(r)&&(this.myPorscheFlyoutIsActive=!0)},onMouseLeave:()=>this.myPorscheFlyoutIsActive=!1},(0,o.h)("phn-myporsche-desktop-link",{loggedInState:r,unreadMessagesCount:h,onMyPorscheFlyoutTriggered:({detail:p})=>{this.myPorscheFlyoutIsActive=p}}),this.myPorscheFlyoutIsActive?(0,o.h)("div",{class:"myporsche-flyout","aria-labelledby":"myporsche-flyout"},(0,o.h)("phn-myporsche-items",{myPorscheCloseHandler:()=>{this.myPorscheFlyoutIsActive=!1},breakpoint:this.breakpoint})):null):(0,o.h)("div",{class:"myporsche-skeleton"}):null),a?(0,o.h)("div",{class:"menu-separator expandable-item"},(0,o.h)("div",null)):null,a?(0,o.h)("phn-menu-button",{class:"more-menu-item  "+(this.activeOverlayRoutingKey===e.n.MORE?" active":""),isExpanded:this.activeOverlayRoutingKey===e.n.MORE,onClick:()=>{c.g.pushDataLayerEvent(e.h.NAVIGATION_LOAD,{componentClick:{clickElementId:n.id,clickElementName:n.text,clickElementType:e.v.Button}})},routingKey:e.n.MORE,role:"none",screenReaderDescription:n.text},(0,o.h)("phn-p-icon",{class:"more-menu-item-icon expandable-item",color:this.mouseOnButton===e.n.MORE?"brand":"default",name:"menuDotsVertical"})):(0,o.h)("div",{class:"expandable-item skeleton more-skeleton"},(0,o.h)("div",null)))),(0,e.i)(m)?(0,o.h)("div",{class:"backdrop"+(this.scrolledPastHeader?" at-top":"")}):null,(0,e.i)(m)?(0,o.h)("div",{class:"overlay showing","aria-labelledby":this.overlayLabelledBy,"aria-hidden":!(0,e.i)(m),"data-phn-test-id":m},(0,o.h)("div",{class:"content-wrapper",onMouseEnter:()=>this.handleOverlayMouseEnter(),onMouseLeave:()=>this.handleOverlayMouseLeave()},(0,o.h)(E,{activeRoutingKey:m,legacyShop:t,legacyMore:n,models:i,breakpoint:this.breakpoint}))):null)}get el(){return(0,o.g)(this)}};x.style='@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}.sc-phn-menu-desktop-level-1-h{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:1.625rem 0 0 1.25rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h{padding:1.3125rem 0 0 1.9375rem}}.sc-phn-menu-desktop-level-1-h .menu-bar.sc-phn-menu-desktop-level-1{height:100%}.sc-phn-menu-desktop-level-1-h nav.sc-phn-menu-desktop-level-1{height:100%}.sc-phn-menu-desktop-level-1-h .car-series-menu-item.sc-phn-menu-desktop-level-1{padding:0 0.25rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .car-series-menu-item.sc-phn-menu-desktop-level-1{padding:0 0.5625rem}}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1{display:block;position:relative}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;background:#fff;left:-3.25rem;z-index:303;width:14.625rem;top:4.375rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1{width:17.125rem;top:5rem;left:-3.5rem}}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1 phn-myporsche-items.sc-phn-menu-desktop-level-1{-webkit-box-sizing:inherit;box-sizing:inherit;border:1px solid #e3e4e5;position:relative;background:#fff;padding:0.625rem 1.5rem 2.25rem 1.5rem}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1 phn-myporsche-items.sc-phn-menu-desktop-level-1:before{content:"";width:0;height:0;position:absolute;top:-0.375rem;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%);border-style:solid;border-width:0 0.3125rem 0.3125rem;border-color:transparent transparent #e3e4e5}.sc-phn-menu-desktop-level-1-h .myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1 phn-myporsche-items.sc-phn-menu-desktop-level-1:after{content:"";width:0;height:0;position:absolute;top:-0.3125rem;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%);border-style:solid;border-width:0 0.3125rem 0.3125rem;border-color:transparent transparent #fff}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1{-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.sc-phn-menu-desktop-level-1{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:1.3125rem 0.5625rem 0}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.sc-phn-menu-desktop-level-1{padding:1.6875rem 0.875rem 0}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.menu-separator.sc-phn-menu-desktop-level-1{padding:0.875rem 0.5625rem 2.3125rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.menu-separator.sc-phn-menu-desktop-level-1{padding:1.0625rem 0.875rem 2.3125rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.menu-separator.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{width:1px;height:100%;background-color:#e3e4e5}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item.sc-phn-menu-desktop-level-1 phn-p-flex.sc-phn-menu-desktop-level-1{height:100%}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item.sc-phn-menu-desktop-level-1 .shops-menu-item-text.sc-phn-menu-desktop-level-1{padding-left:0.25rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item.sc-phn-menu-desktop-level-1 .shops-menu-item-icon.sc-phn-menu-desktop-level-1{display:block;width:1.5rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item.sc-phn-menu-desktop-level-1 .shops-menu-item-icon.sc-phn-menu-desktop-level-1{width:1.75rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .myporsche-menu-item.sc-phn-menu-desktop-level-1{height:100%;padding-bottom:0.875rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .more-menu-item.sc-phn-menu-desktop-level-1{margin-right:-0.5625rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .more-menu-item.sc-phn-menu-desktop-level-1{margin-right:-0.875rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .more-menu-item.sc-phn-menu-desktop-level-1 .more-menu-item-icon.sc-phn-menu-desktop-level-1{display:block;height:100%}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.sc-phn-menu-desktop-level-1,.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item-text.sc-phn-menu-desktop-level-1{font-size:1rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .expandable-item.sc-phn-menu-desktop-level-1,.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-menu-item-text.sc-phn-menu-desktop-level-1{font-size:1.25rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .skeleton.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{background:#e3e4e5;height:0.875rem;margin-top:0.125rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-skeleton.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{width:2.8125rem}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .shops-skeleton.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{width:3.4375rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .more-skeleton.sc-phn-menu-desktop-level-1 div.sc-phn-menu-desktop-level-1{width:1.5rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .spacer.sc-phn-menu-desktop-level-1{-webkit-box-sizing:content-box;box-sizing:content-box;width:0.9375rem;padding:0}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .spacer.sc-phn-menu-desktop-level-1{width:0.625rem}}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.sc-phn-menu-desktop-level-1{width:auto}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.wrapped.sc-phn-menu-desktop-level-1{width:-webkit-min-content;width:-moz-min-content;width:min-content;padding-bottom:1.25rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.wrapped.sc-phn-menu-desktop-level-1 .metafunctionalities-item.sc-phn-menu-desktop-level-1{height:auto;padding-top:0.375rem;padding-bottom:0}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.wrapped.sc-phn-menu-desktop-level-1 .metafunctionalities-item.myporsche-container.sc-phn-menu-desktop-level-1{padding-top:0.625rem}.sc-phn-menu-desktop-level-1-h .expandable.sc-phn-menu-desktop-level-1 .wrappable.wrapped.sc-phn-menu-desktop-level-1 .metafunctionalities-item.myporsche-container.sc-phn-menu-desktop-level-1 .myporsche-flyout.sc-phn-menu-desktop-level-1{top:3.5625rem;left:-3.5rem}.sc-phn-menu-desktop-level-1-h .backdrop.sc-phn-menu-desktop-level-1{position:fixed;left:0;right:0;background:rgba(0, 0, 0, 0.5);height:100vh;margin-top:1px;z-index:300}.sc-phn-menu-desktop-level-1-h .backdrop.at-top.sc-phn-menu-desktop-level-1{top:0}.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1{display:block;width:100%;position:absolute;left:0;overflow:hidden;top:100%;z-index:301}.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1:focus{outline:none}.sc-phn-menu-desktop-level-1-h .overlay.showing.sc-phn-menu-desktop-level-1{-webkit-animation:slideDown 0.54s ease-in-out;animation:slideDown 0.54s ease-in-out}.sc-phn-menu-desktop-level-1-h .overlay.hiding.sc-phn-menu-desktop-level-1{-webkit-animation:slideUp 0.43s ease-in-out;animation:slideUp 0.43s ease-in-out}.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1 .content-wrapper.sc-phn-menu-desktop-level-1{position:relative;background-color:#fff;border-top:1px solid #e3e4e5}@media (min-width: 1300px) and (max-width: 1759px){.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1 .content-wrapper.sc-phn-menu-desktop-level-1{padding-bottom:5rem}}@media (min-width: 1760px){.sc-phn-menu-desktop-level-1-h .overlay.sc-phn-menu-desktop-level-1 .content-wrapper.sc-phn-menu-desktop-level-1{padding-bottom:6rem}}'}}]);