"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[333],{492:(A,g,i)=>{i.d(g,{a:()=>f});var r=i(598),e=i(554),k=i(195),m=i(681),h=i(685);const y={};function C(a){const{drawerType:n}=y,d=((0,m.i)(a)?(0,r.b)(a):e.r.state.routingKeyHistory[e.r.state.routingKeyPointer])||"",l=(0,r.g)(d),o=(0,r.d)(d),c=o-1;if(!(0,m.i)(d))return"level0";const t=(0,m.i)(d)?`level${o}-${l}`:`level${o-1}-unknown`;return"doubleDrawer"===n?""===d?`level${c}-unknown_level${o}-unknown`:`level${c}-${(0,h.g)(d)}_${t}`:t}function D(a,n,d){const{drawerType:l}=y,o=(0,r.d)(a);if("doubleDrawer"===l){let c=o;return d&&(c-=1),`level${c}_${n}`}return(0,m.i)(a)?`level${o}_${n}`:`level${o-1}_${n}`}function b(){return y.drawerType}const f={setDrawerType:function P(a){y.drawerType=a},getDealerResultsLoadDisplayElementId:function I(a){return"doubleDrawer"===b()?a:C()},calculateDisplayElementId:C,getDealerResultsLoadDisplayElementType:function s(){return"doubleDrawer"===b()?k.j:D("",k.h.dealerSearchForm)},calculateDisplayElementType:D,getModelName:function R(a){const n=a.link.split("/"),d=n[n.length-1];let l;return l=""===d?void 0===n[n.length-2]?"":n[n.length-2].split("-").join(" "):d.split("-").join(" "),l},getModelTargetElement:function v(a,n){if(a.includes("models"))return`level${(0,r.d)(a)}_${n.toLowerCase()}`}}},685:(A,g,i)=>{i.d(g,{a:()=>v,b:()=>b,c:()=>I,d:()=>P,e:()=>y,f:()=>D,g:()=>C});var r=i(195),e=i(598),k=i(499),m=i(681),h=i(250);function y(s,f,a,n,d,l){var o,c;const{dealer:t,models:E,myPorsche:_,vehiclePurchase:L,shop:u,experience:x,services:O}=s,{savedDealerCookie:H,ppnDealers:U}=f,{app:j}=r.n.state,p=null!==H?U[H.id]:void 0;let T;"en-SG"===a&&t.search.outboundLink&&(T=null===(o=t.search.outboundLink)||void 0===o?void 0:o.link);const K=[e.a.DEALER_SEARCH];void 0!==p&&1!=(null===(c=k.d.state.results)||void 0===c?void 0:c.length)&&K.push((0,e.c)(p.ppnDealer.id));const M=[{elementId:e.a.MODELS,routingKeys:[e.a.MODELS],analyticsId:E.id,text:E.text},{elementId:e.a.VEHICLE_PURCHASE,routingKeys:[e.a.VEHICLE_PURCHASE],analyticsId:L.id,text:L.text},{elementId:e.a.SERVICES,routingKeys:[e.a.SERVICES],analyticsId:O.id,text:O.text},{elementId:e.a.EXPERIENCE,routingKeys:[e.a.EXPERIENCE],analyticsId:x.id,text:x.text}],S={elementId:e.a.DEALER_SEARCH,routingKeys:K,analyticsId:t.id,text:t.text,link:T,iconRight:"en-SG"===a&&t.search.outboundLink?"external":"arrow-head-right"};if(null!==u&&""!==u.text&&M.splice(2,0,{elementId:e.a.SHOP,routingKeys:[e.a.SHOP],analyticsId:u.id,text:u.text,link:j!==m.A.shop?u.link:void 0,datalayerEventAction:r.E.NAVIGATION_LINK_CLICK,iconRight:"external"}),function R(s,f){try{const{country:a}=(0,r.s)(s),n=!(0,r.i)(a)&&f;return(h.f.isDealerSearchChinaEnabled()||"CN"!==a)&&n}catch{}return!0}(a,l)){const w="en"===(0,r.s)(a).language?p?.ppnDealer.name:(0,m.i)(p?.ppnDealer.nameLocalized)?p?.ppnDealer.nameLocalized:p?.ppnDealer.name;(0,m.i)(w)&&(S.subtext=w)}else S.link=t.search.map.link,S.onClick=void 0;if(M.push(S),null!==_){const w=(0,m.I)(n),B=w?(0,m.x)(n,_.loggedInFallback):void 0;M.push({elementId:e.a.MY_PORSCHE,routingKeys:[e.a.MY_PORSCHE],analyticsId:_.id,text:_.text,subtext:B,showIconModifier:w&&d>0})}return M}function P(s,f,a,n,d,l,o){const c=(0,e.f)(l);switch(c){case l:break;case e.a.MODELS:return s.models.series.map(t=>({elementId:(0,e.h)(t.id),routingKeys:[(0,e.h)(t.id)],analyticsId:t.id,text:t.name,subtext:t.tags.map(E=>E.text).join(" | "),renderSignatures:!0,datalayerEventAction:r.E.MODEL_RANGE_CLICK}));case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const t=(0,e.r)(l),E=D(s,t,c);if(null!==E)return E.children.map(_=>({elementId:(0,e.e)(t,_.id),routingKeys:[(0,e.e)(t,_.id)],analyticsId:_.id,text:_.text,link:_.link}));break}}return y(s,f,a,n,d,o)}function C(s){switch((0,e.f)(s)){case s:break;case e.a.DEALER_SEARCH:return e.a.DEALER_SEARCH;case e.a.MODELS:return e.a.MODELS;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const a=(0,e.r)(s);return(0,e.g)(a)}}return e.a.MAIN_MENU}function D(s,f,a){const{vehiclePurchase:n,experience:d,shop:l,legacyMore:o,services:c}=s,t={[e.a.VEHICLE_PURCHASE]:n,[e.a.EXPERIENCE]:d,[e.a.SHOP]:l,[e.a.MORE]:o,[e.a.SERVICES]:c}[a];if(null==t)return null;(0,m.i)(t.experienceName)&&(t.children=(0,k.a)().executeContentChange(t));const E=(0,e.g)(f);return E===a?t:(0,r.k)(t,E)}function v(s,f){if(!(0,m.i)(f))return"";const a=(0,e.f)(f);switch(a){case e.a.MODELS:return s.models.text;case e.a.DEALER_SEARCH:return 1===s.dealer.numberOfDealers?"":s.dealer.details.backToSearch;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.MORE:case e.a.EXPERIENCE:{const n=D(r.b.state,f,a);if(null!==n)return n.text;break}}return""}function b(s,f,a){var n;const{dealer:d,myPorsche:l,models:o,vehiclePurchase:c,experience:t,shop:E,legacyMore:_,services:L}=s;let u;switch(a){case e.a.MORE:case e.a.SHOP:case e.a.EXPERIENCE:case e.a.SERVICES:case e.a.VEHICLE_PURCHASE:{if(u={[e.a.VEHICLE_PURCHASE]:c,[e.a.EXPERIENCE]:t,[e.a.SHOP]:E,[e.a.MORE]:_,[e.a.SERVICES]:L}[a],void 0===u)return"";const x=(0,e.g)(f);return x===a?u?.text:null===(n=(0,r.k)(u,x))||void 0===n?void 0:n.text}case e.a.SERIES:case e.a.MODELS:{const x=(0,e.g)(f);return u=o.series.find(O=>x===O.id),void 0===u?o.text:u?.id}case e.a.DEALER_SEARCH:return d.search.text;case e.a.MY_PORSCHE:return l?.text}return""}function I(s,f,a){const{myPorsche:n,models:d}=r.b.state,{loggedInState:l}=r.n.state;if(s===e.a.MY_PORSCHE)return(0,m.I)(l)?(0,m.x)(l,n?.loggedInFallback||""):"";if(s===e.a.DEALER_SEARCH){const{savedDealerCookie:o,ppnDealers:c}=k.d.state,t=null!==o?c[o.id]:void 0,E=a&&"en"===(0,r.s)(a).language?t?.ppnDealer.name:(0,m.i)(t?.ppnDealer.nameLocalized)?t?.ppnDealer.nameLocalized:t?.ppnDealer.name;return o?E:""}if(s===e.a.MODELS&&(0,m.i)(f)){const o=(0,e.g)(f),c=d.series.find(t=>o===t.id);if(c)return c.tags.map(t=>t.text).join(" | ")}return""}},333:(A,g,i)=>{i.r(g),i.d(g,{phn_backdrop:()=>b});var r=i(702),e=i(492),k=i(974),m=i(250),h=i(195);i(598),i(681),i(554),i(685),i(499);const b=class{constructor(I){(0,r.r)(this,I),this.clickDrawerHeaderClose=(0,r.c)(this,"clickDrawerHeaderClose",7),this.backdropClosed=(0,r.c)(this,"backdropClosed",7),this.activeRoutingKey=void 0}handleClick(){this.sendDataAnalyticsEvent(),this.clickDrawerHeaderClose.emit()}sendDataAnalyticsEvent(){e.a.setDrawerType(h.f.DoubleDrawer),k.g.pushDataLayerEvent(h.E.MENU_CLOSE_CLICK,{componentClick:{clickElementId:"mainmenu.drawer.close",clickElementName:"backdrop",clickElementType:h.C.Button,targetElement:"level-0"},componentDisplay:{displayElementType:e.a.calculateDisplayElementType(this.activeRoutingKey,h.h.backdrop),displayElementId:e.a.calculateDisplayElementId(),displayElementName:"Double Drawer"}})}componentWillLoad(){m.w.hasScrollbar()&&m.w.lockScroll()}disconnectedCallback(){m.w.hasScrollbar()&&m.w.unlockScroll()}render(){return(0,r.h)(r.H,null)}get el(){return(0,r.g)(this)}};b.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-backdrop{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-backdrop{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-backdrop{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-backdrop{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-backdrop{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-backdrop{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-backdrop{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-backdrop{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-backdrop{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-backdrop{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-backdrop{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-backdrop{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-backdrop-h{position:fixed;z-index:300;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0);opacity:0;cursor:pointer;backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px)}.fade-in-animation.sc-phn-backdrop-h{-webkit-animation:fade-in-animation 400ms;animation:fade-in-animation 400ms}.fade-out-animation.sc-phn-backdrop-h{animation:fade-in-animation 400ms reverse}"},554:(A,g,i)=>{i.d(g,{r:()=>e});const e=(0,i(195).e)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})}}]);