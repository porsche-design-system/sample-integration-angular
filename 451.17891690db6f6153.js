"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[451],{477:(K,C,d)=>{d.d(C,{a:()=>v,b:()=>f,c:()=>y,d:()=>L,e:()=>P,f:()=>I,g:()=>M});var s=d(62),e=d(376),D=d(97),m=d(243),w=d(926);function P(r,n,a,i,E,o){var l,u;const{dealer:t,models:h,myPorsche:g,vehiclePurchase:k,shop:c,experience:_,services:O}=r,{savedDealerCookie:A,ppnDealers:U}=n,{app:T}=s.n.state,p=null!==A?U[A.id]:void 0;let H;"en-SG"===a&&t.search.outboundLink&&(H=null===(l=t.search.outboundLink)||void 0===l?void 0:l.link);const j=[e.a.DEALER_SEARCH];void 0!==p&&1!=(null===(u=D.d.state.results)||void 0===u?void 0:u.length)&&j.push((0,e.c)(p.ppnDealer.id));const b=[{elementId:e.a.MODELS,routingKeys:[e.a.MODELS],analyticsId:h.id,text:h.text},{elementId:e.a.VEHICLE_PURCHASE,routingKeys:[e.a.VEHICLE_PURCHASE],analyticsId:k.id,text:k.text},{elementId:e.a.SERVICES,routingKeys:[e.a.SERVICES],analyticsId:O.id,text:O.text},{elementId:e.a.EXPERIENCE,routingKeys:[e.a.EXPERIENCE],analyticsId:_.id,text:_.text}],R={elementId:e.a.DEALER_SEARCH,routingKeys:j,analyticsId:t.id,text:t.text,link:H,iconRight:"en-SG"===a&&t.search.outboundLink?"external":"arrow-head-right"};if(null!==c&&""!==c.text&&b.splice(2,0,{elementId:e.a.SHOP,routingKeys:[e.a.SHOP],analyticsId:c.id,text:c.text,link:T!==m.A.shop?c.link:void 0,datalayerEventAction:s.E.NAVIGATION_LINK_CLICK,iconRight:"external"}),function S(r,n){try{const{country:a}=(0,s.s)(r),i=!(0,s.i)(a)&&n;return(w.f.isDealerSearchChinaEnabled()||"CN"!==a)&&i}catch{}return!0}(a,o)){const x="en"===(0,s.s)(a).language?p?.ppnDealer.name:(0,m.i)(p?.ppnDealer.nameLocalized)?p?.ppnDealer.nameLocalized:p?.ppnDealer.name;(0,m.i)(x)&&(R.subtext=x)}else R.link=t.search.map.link,R.onClick=void 0;if(b.push(R),null!==g){const x=(0,m.I)(i),N=x?(0,m.z)(i,g.loggedInFallback):void 0;b.push({elementId:e.a.MY_PORSCHE,routingKeys:[e.a.MY_PORSCHE],analyticsId:g.id,text:g.text,subtext:N,showIconModifier:x&&E>0})}return b}function L(r,n,a,i,E,o,l){const u=(0,e.f)(o);switch(u){case o:break;case e.a.MODELS:return r.models.series.map(t=>({elementId:(0,e.h)(t.id),routingKeys:[(0,e.h)(t.id)],analyticsId:t.id,text:t.name,subtext:t.tags.map(h=>h.text).join(" | "),renderSignatures:!0,datalayerEventAction:s.E.MODEL_RANGE_CLICK}));case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const t=(0,e.r)(o),h=I(r,t,u);if(null!==h)return h.children.map(g=>({elementId:(0,e.e)(t,g.id),routingKeys:[(0,e.e)(t,g.id)],analyticsId:g.id,text:g.text,link:g.link}));break}}return P(r,n,a,i,E,l)}function M(r){switch((0,e.f)(r)){case r:break;case e.a.DEALER_SEARCH:return e.a.DEALER_SEARCH;case e.a.MODELS:return e.a.MODELS;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const a=(0,e.r)(r);return(0,e.g)(a)}}return e.a.MAIN_MENU}function I(r,n,a){const{vehiclePurchase:i,experience:E,shop:o,legacyMore:l,services:u}=r,t={[e.a.VEHICLE_PURCHASE]:i,[e.a.EXPERIENCE]:E,[e.a.SHOP]:o,[e.a.MORE]:l,[e.a.SERVICES]:u}[a];if(null==t)return null;(0,m.i)(t.experienceName)&&(t.children=(0,D.a)().executeContentChange(t));const h=(0,e.g)(n);return h===a?t:(0,s.j)(t,h)}function v(r,n){if(!(0,m.i)(n))return"";const a=(0,e.f)(n);switch(a){case e.a.MODELS:return r.models.text;case e.a.DEALER_SEARCH:return 1===r.dealer.numberOfDealers?"":r.dealer.details.backToSearch;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.MORE:case e.a.EXPERIENCE:{const i=I(s.a.state,n,a);if(null!==i)return i.text;break}}return""}function f(r,n,a){var i;const{dealer:E,myPorsche:o,models:l,vehiclePurchase:u,experience:t,shop:h,legacyMore:g,services:k}=r;let c;switch(a){case e.a.MORE:case e.a.SHOP:case e.a.EXPERIENCE:case e.a.SERVICES:case e.a.VEHICLE_PURCHASE:{if(c={[e.a.VEHICLE_PURCHASE]:u,[e.a.EXPERIENCE]:t,[e.a.SHOP]:h,[e.a.MORE]:g,[e.a.SERVICES]:k}[a],void 0===c)return"";const _=(0,e.g)(n);return _===a?c?.text:null===(i=(0,s.j)(c,_))||void 0===i?void 0:i.text}case e.a.SERIES:case e.a.MODELS:{const _=(0,e.g)(n);return c=l.series.find(O=>_===O.id),void 0===c?l.text:c?.id}case e.a.DEALER_SEARCH:return E.search.text;case e.a.MY_PORSCHE:return o?.text}return""}function y(r,n,a){const{myPorsche:i,models:E}=s.a.state,{loggedInState:o}=s.n.state;if(r===e.a.MY_PORSCHE)return(0,m.I)(o)?(0,m.z)(o,i?.loggedInFallback||""):"";if(r===e.a.DEALER_SEARCH){const{savedDealerCookie:l,ppnDealers:u}=D.d.state,t=null!==l?u[l.id]:void 0,h=a&&"en"===(0,s.s)(a).language?t?.ppnDealer.name:(0,m.i)(t?.ppnDealer.nameLocalized)?t?.ppnDealer.nameLocalized:t?.ppnDealer.name;return l?h:""}if(r===e.a.MODELS&&(0,m.i)(n)){const l=(0,e.g)(n),u=E.series.find(t=>l===t.id);if(u)return u.tags.map(t=>t.text).join(" | ")}return""}},451:(K,C,d)=>{d.r(C),d.d(C,{phn_side_drawer:()=>v});var s=d(510),e=d(477),D=d(97),m=d(62),w=d(243);d(376),d(926),d(273);const v=class{constructor(f){(0,s.r)(this,f),this.sideDrawerItemClick=(0,s.c)(this,"sideDrawerItemClick",7),this.activeRoutingKey=void 0,this.locale=void 0}render(){const{loggedInState:f,unreadMessagesCount:y,userConsent:r}=m.n.state,n=(0,e.d)(m.a.state,D.d.state,this.locale,f,y,this.activeRoutingKey,r);return(0,s.h)("nav",null,n.map(a=>{var{routingKeys:i}=a,E=function(f,y){var r={};for(var n in f)Object.prototype.hasOwnProperty.call(f,n)&&y.indexOf(n)<0&&(r[n]=f[n]);if(null!=f&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(f);a<n.length;a++)y.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(f,n[a])&&(r[n[a]]=f[n[a]])}return r}(a,["routingKeys"]);const o=i.includes(this.activeRoutingKey);return(0,s.h)(s.F,null,(0,s.h)("phn-side-drawer-item",Object.assign({key:E.elementId,onClick:()=>{!(0,w.i)(E.link)&&!o&&this.sideDrawerItemClick.emit(i)},isActive:o,class:(0,w.G)(E.text)?"models":""},E)),o?(0,s.h)("div",{class:"item-highlight"}):null)}))}};v.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.phn-flex-col.sc-phn-side-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-side-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-side-drawer{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-side-drawer{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-side-drawer{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-side-drawer{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-side-drawer-h{display:block;width:100%}.sc-phn-side-drawer-h .item-highlight.sc-phn-side-drawer{display:none}.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:2.25rem}@media (min-width: 1000px){.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:0.85rem}}@media (min-width: 1920px){.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer{margin-top:1rem}}.sc-phn-side-drawer-h phn-side-drawer-item.models.sc-phn-side-drawer{margin-top:0.5rem}@media (min-width: 1920px){.sc-phn-side-drawer-h phn-side-drawer-item.models.sc-phn-side-drawer{margin-top:1rem}}.sc-phn-side-drawer-h phn-side-drawer-item.sc-phn-side-drawer:first-of-type{margin-top:0}"}}]);