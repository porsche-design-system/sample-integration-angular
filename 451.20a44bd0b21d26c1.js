"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[451],{685:(K,D,l)=>{l.d(D,{a:()=>h,b:()=>y,c:()=>w,d:()=>M,e:()=>P,f:()=>b,g:()=>L});var o=l(195),e=l(598),k=l(499),m=l(681),I=l(250);function P(a,n,i,r,E,f){var s,c;const{dealer:t,models:p,myPorsche:g,vehiclePurchase:v,shop:d,experience:x,services:O}=a,{savedDealerCookie:A,ppnDealers:U}=n,{app:T}=o.n.state,u=null!==A?U[A.id]:void 0;let H;"en-SG"===i&&t.search.outboundLink&&(H=null===(s=t.search.outboundLink)||void 0===s?void 0:s.link);const j=[e.a.DEALER_SEARCH];void 0!==u&&1!=(null===(c=k.d.state.results)||void 0===c?void 0:c.length)&&j.push((0,e.c)(u.ppnDealer.id));const R=[{elementId:e.a.MODELS,routingKeys:[e.a.MODELS],analyticsId:p.id,text:p.text},{elementId:e.a.VEHICLE_PURCHASE,routingKeys:[e.a.VEHICLE_PURCHASE],analyticsId:v.id,text:v.text},{elementId:e.a.SERVICES,routingKeys:[e.a.SERVICES],analyticsId:O.id,text:O.text},{elementId:e.a.EXPERIENCE,routingKeys:[e.a.EXPERIENCE],analyticsId:x.id,text:x.text}],S={elementId:e.a.DEALER_SEARCH,routingKeys:j,analyticsId:t.id,text:t.text,link:H,iconRight:"en-SG"===i&&t.search.outboundLink?"external":"arrow-head-right"};if(null!==d&&""!==d.text&&R.splice(2,0,{elementId:e.a.SHOP,routingKeys:[e.a.SHOP],analyticsId:d.id,text:d.text,link:T!==m.A.shop?d.link:void 0,datalayerEventAction:o.E.NAVIGATION_LINK_CLICK,iconRight:"external"}),function C(a,n){try{const{country:i}=(0,o.s)(a),r=!(0,o.i)(i)&&n;return(I.f.isDealerSearchChinaEnabled()||"CN"!==i)&&r}catch{}return!0}(i,f)){const _="en"===(0,o.s)(i).language?u?.ppnDealer.name:(0,m.i)(u?.ppnDealer.nameLocalized)?u?.ppnDealer.nameLocalized:u?.ppnDealer.name;(0,m.i)(_)&&(S.subtext=_)}else S.link=t.search.map.link,S.onClick=void 0;if(R.push(S),null!==g){const _=(0,m.I)(r),N=_?(0,m.x)(r,g.loggedInFallback):void 0;R.push({elementId:e.a.MY_PORSCHE,routingKeys:[e.a.MY_PORSCHE],analyticsId:g.id,text:g.text,subtext:N,showIconModifier:_&&E>0})}return R}function M(a,n,i,r,E,f,s){const c=(0,e.f)(f);switch(c){case f:break;case e.a.MODELS:return a.models.series.map(t=>({elementId:(0,e.h)(t.id),routingKeys:[(0,e.h)(t.id)],analyticsId:t.id,text:t.name,subtext:t.tags.map(p=>p.text).join(" | "),renderSignatures:!0,datalayerEventAction:o.E.MODEL_RANGE_CLICK}));case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const t=(0,e.r)(f),p=b(a,t,c);if(null!==p)return p.children.map(g=>({elementId:(0,e.e)(t,g.id),routingKeys:[(0,e.e)(t,g.id)],analyticsId:g.id,text:g.text,link:g.link}));break}}return P(a,n,i,r,E,s)}function L(a){switch((0,e.f)(a)){case a:break;case e.a.DEALER_SEARCH:return e.a.DEALER_SEARCH;case e.a.MODELS:return e.a.MODELS;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const i=(0,e.r)(a);return(0,e.g)(i)}}return e.a.MAIN_MENU}function b(a,n,i){const{vehiclePurchase:r,experience:E,shop:f,legacyMore:s,services:c}=a,t={[e.a.VEHICLE_PURCHASE]:r,[e.a.EXPERIENCE]:E,[e.a.SHOP]:f,[e.a.MORE]:s,[e.a.SERVICES]:c}[i];if(null==t)return null;(0,m.i)(t.experienceName)&&(t.children=(0,k.a)().executeContentChange(t));const p=(0,e.g)(n);return p===i?t:(0,o.k)(t,p)}function h(a,n){if(!(0,m.i)(n))return"";const i=(0,e.f)(n);switch(i){case e.a.MODELS:return a.models.text;case e.a.DEALER_SEARCH:return 1===a.dealer.numberOfDealers?"":a.dealer.details.backToSearch;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.MORE:case e.a.EXPERIENCE:{const r=b(o.b.state,n,i);if(null!==r)return r.text;break}}return""}function y(a,n,i){var r;const{dealer:E,myPorsche:f,models:s,vehiclePurchase:c,experience:t,shop:p,legacyMore:g,services:v}=a;let d;switch(i){case e.a.MORE:case e.a.SHOP:case e.a.EXPERIENCE:case e.a.SERVICES:case e.a.VEHICLE_PURCHASE:{if(d={[e.a.VEHICLE_PURCHASE]:c,[e.a.EXPERIENCE]:t,[e.a.SHOP]:p,[e.a.MORE]:g,[e.a.SERVICES]:v}[i],void 0===d)return"";const x=(0,e.g)(n);return x===i?d?.text:null===(r=(0,o.k)(d,x))||void 0===r?void 0:r.text}case e.a.SERIES:case e.a.MODELS:{const x=(0,e.g)(n);return d=s.series.find(O=>x===O.id),void 0===d?s.text:d?.id}case e.a.DEALER_SEARCH:return E.search.text;case e.a.MY_PORSCHE:return f?.text}return""}function w(a,n,i){const{myPorsche:r,models:E}=o.b.state,{loggedInState:f}=o.n.state;if(a===e.a.MY_PORSCHE)return(0,m.I)(f)?(0,m.x)(f,r?.loggedInFallback||""):"";if(a===e.a.DEALER_SEARCH){const{savedDealerCookie:s,ppnDealers:c}=k.d.state,t=null!==s?c[s.id]:void 0,p=i&&"en"===(0,o.s)(i).language?t?.ppnDealer.name:(0,m.i)(t?.ppnDealer.nameLocalized)?t?.ppnDealer.nameLocalized:t?.ppnDealer.name;return s?p:""}if(a===e.a.MODELS&&(0,m.i)(n)){const s=(0,e.g)(n),c=E.series.find(t=>s===t.id);if(c)return c.tags.map(t=>t.text).join(" | ")}return""}},451:(K,D,l)=>{l.r(D),l.d(D,{phn_side_drawer:()=>C});var o=l(702),e=l(685),k=l(499),m=l(195),I=l(681);l(598),l(250);const C=class{constructor(h){(0,o.r)(this,h),this.sideDrawerItemClick=(0,o.c)(this,"sideDrawerItemClick",7),this.activeRoutingKey=void 0,this.locale=void 0}render(){const{loggedInState:h,unreadMessagesCount:y,userConsent:w}=m.n.state,a=(0,e.d)(m.b.state,k.d.state,this.locale,h,y,this.activeRoutingKey,w);return(0,o.h)("nav",null,a.map(n=>{var{routingKeys:i}=n,r=function(h,y){var w={};for(var a in h)Object.prototype.hasOwnProperty.call(h,a)&&y.indexOf(a)<0&&(w[a]=h[a]);if(null!=h&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(h);n<a.length;n++)y.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(h,a[n])&&(w[a[n]]=h[a[n]])}return w}(n,["routingKeys"]);const E=i.includes(this.activeRoutingKey);return(0,o.h)(o.F,null,(0,o.h)("phn-side-drawer-item",Object.assign({key:r.elementId,onClick:()=>{!(0,I.i)(r.link)&&!E&&this.sideDrawerItemClick.emit(i)},isActive:E,class:(0,I.B)(r.text)?"models":""},r)),E?(0,o.h)("div",{class:"item-highlight"}):null)}))}};C.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-side-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-side-drawer{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-side-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-side-drawer{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-side-drawer{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-side-drawer{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-side-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-side-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-side-drawer{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-side-drawer{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-side-drawer{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-side-drawer{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-side-drawer-h{display:block;width:100%}.sc-phn-side-drawer-h .item-highlight.sc-phn-side-drawer{display:none}.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:2.25rem}@media (min-width: 1000px){.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:0.85rem}}@media (min-width: 1920px){.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:1rem}}.sc-phn-side-drawer-h phn-side-drawer-item.models.sc-phn-side-drawer{margin-top:0.5rem}@media (min-width: 1920px){.sc-phn-side-drawer-h phn-side-drawer-item.models.sc-phn-side-drawer{margin-top:1rem}}.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer:first-of-type{margin-top:0}"}}]);