"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[278],{492:(A,_,s)=>{s.d(_,{a:()=>o});var t=s(598),e=s(554),l=s(195),c=s(681),I=s(685);const g={};function y(n){const{drawerType:m}=g,p=((0,c.i)(n)?(0,t.b)(n):e.r.state.routingKeyHistory[e.r.state.routingKeyPointer])||"",r=(0,t.g)(p),h=(0,t.d)(p),u=h-1;if(!(0,c.i)(p))return"level0";const i=(0,c.i)(p)?`level${h}-${r}`:`level${h-1}-unknown`;return"doubleDrawer"===m?""===p?`level${u}-unknown_level${h}-unknown`:`level${u}-${(0,I.g)(p)}_${i}`:i}function v(n,m,p){const{drawerType:r}=g,h=(0,t.d)(n);if("doubleDrawer"===r){let u=h;return p&&(u-=1),`level${u}_${m}`}return(0,c.i)(n)?`level${h}_${m}`:`level${h-1}_${m}`}function w(){return g.drawerType}const o={setDrawerType:function C(n){g.drawerType=n},getDealerResultsLoadDisplayElementId:function D(n){return"doubleDrawer"===w()?n:y()},calculateDisplayElementId:y,getDealerResultsLoadDisplayElementType:function a(){return"doubleDrawer"===w()?l.j:v("",l.h.dealerSearchForm)},calculateDisplayElementType:v,getModelName:function L(n){const m=n.link.split("/"),p=m[m.length-1];let r;return r=""===p?void 0===m[m.length-2]?"":m[m.length-2].split("-").join(" "):p.split("-").join(" "),r},getModelTargetElement:function P(n,m){if(n.includes("models"))return`level${(0,t.d)(n)}_${m.toLowerCase()}`}}},685:(A,_,s)=>{s.d(_,{a:()=>P,b:()=>w,c:()=>D,d:()=>C,e:()=>g,f:()=>v,g:()=>y});var t=s(195),e=s(598),l=s(499),c=s(681),I=s(250);function g(a,o,n,m,p,r){var h,u;const{dealer:i,models:f,myPorsche:E,vehiclePurchase:R,shop:d,experience:k,services:O}=a,{savedDealerCookie:H,ppnDealers:U}=o,{app:j}=t.n.state,x=null!==H?U[H.id]:void 0;let T;"en-SG"===n&&i.search.outboundLink&&(T=null===(h=i.search.outboundLink)||void 0===h?void 0:h.link);const K=[e.a.DEALER_SEARCH];void 0!==x&&1!=(null===(u=l.d.state.results)||void 0===u?void 0:u.length)&&K.push((0,e.c)(x.ppnDealer.id));const M=[{elementId:e.a.MODELS,routingKeys:[e.a.MODELS],analyticsId:f.id,text:f.text},{elementId:e.a.VEHICLE_PURCHASE,routingKeys:[e.a.VEHICLE_PURCHASE],analyticsId:R.id,text:R.text},{elementId:e.a.SERVICES,routingKeys:[e.a.SERVICES],analyticsId:O.id,text:O.text},{elementId:e.a.EXPERIENCE,routingKeys:[e.a.EXPERIENCE],analyticsId:k.id,text:k.text}],S={elementId:e.a.DEALER_SEARCH,routingKeys:K,analyticsId:i.id,text:i.text,link:T,iconRight:"en-SG"===n&&i.search.outboundLink?"external":"arrow-head-right"};if(null!==d&&""!==d.text&&M.splice(2,0,{elementId:e.a.SHOP,routingKeys:[e.a.SHOP],analyticsId:d.id,text:d.text,link:j!==c.A.shop?d.link:void 0,datalayerEventAction:t.E.NAVIGATION_LINK_CLICK,iconRight:"external"}),function L(a,o){try{const{country:n}=(0,t.s)(a),m=!(0,t.i)(n)&&o;return(I.f.isDealerSearchChinaEnabled()||"CN"!==n)&&m}catch{}return!0}(n,r)){const b="en"===(0,t.s)(n).language?x?.ppnDealer.name:(0,c.i)(x?.ppnDealer.nameLocalized)?x?.ppnDealer.nameLocalized:x?.ppnDealer.name;(0,c.i)(b)&&(S.subtext=b)}else S.link=i.search.map.link,S.onClick=void 0;if(M.push(S),null!==E){const b=(0,c.I)(m),z=b?(0,c.x)(m,E.loggedInFallback):void 0;M.push({elementId:e.a.MY_PORSCHE,routingKeys:[e.a.MY_PORSCHE],analyticsId:E.id,text:E.text,subtext:z,showIconModifier:b&&p>0})}return M}function C(a,o,n,m,p,r,h){const u=(0,e.f)(r);switch(u){case r:break;case e.a.MODELS:return a.models.series.map(i=>({elementId:(0,e.h)(i.id),routingKeys:[(0,e.h)(i.id)],analyticsId:i.id,text:i.name,subtext:i.tags.map(f=>f.text).join(" | "),renderSignatures:!0,datalayerEventAction:t.E.MODEL_RANGE_CLICK}));case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const i=(0,e.r)(r),f=v(a,i,u);if(null!==f)return f.children.map(E=>({elementId:(0,e.e)(i,E.id),routingKeys:[(0,e.e)(i,E.id)],analyticsId:E.id,text:E.text,link:E.link}));break}}return g(a,o,n,m,p,h)}function y(a){switch((0,e.f)(a)){case a:break;case e.a.DEALER_SEARCH:return e.a.DEALER_SEARCH;case e.a.MODELS:return e.a.MODELS;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const n=(0,e.r)(a);return(0,e.g)(n)}}return e.a.MAIN_MENU}function v(a,o,n){const{vehiclePurchase:m,experience:p,shop:r,legacyMore:h,services:u}=a,i={[e.a.VEHICLE_PURCHASE]:m,[e.a.EXPERIENCE]:p,[e.a.SHOP]:r,[e.a.MORE]:h,[e.a.SERVICES]:u}[n];if(null==i)return null;(0,c.i)(i.experienceName)&&(i.children=(0,l.a)().executeContentChange(i));const f=(0,e.g)(o);return f===n?i:(0,t.k)(i,f)}function P(a,o){if(!(0,c.i)(o))return"";const n=(0,e.f)(o);switch(n){case e.a.MODELS:return a.models.text;case e.a.DEALER_SEARCH:return 1===a.dealer.numberOfDealers?"":a.dealer.details.backToSearch;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.MORE:case e.a.EXPERIENCE:{const m=v(t.b.state,o,n);if(null!==m)return m.text;break}}return""}function w(a,o,n){var m;const{dealer:p,myPorsche:r,models:h,vehiclePurchase:u,experience:i,shop:f,legacyMore:E,services:R}=a;let d;switch(n){case e.a.MORE:case e.a.SHOP:case e.a.EXPERIENCE:case e.a.SERVICES:case e.a.VEHICLE_PURCHASE:{if(d={[e.a.VEHICLE_PURCHASE]:u,[e.a.EXPERIENCE]:i,[e.a.SHOP]:f,[e.a.MORE]:E,[e.a.SERVICES]:R}[n],void 0===d)return"";const k=(0,e.g)(o);return k===n?d?.text:null===(m=(0,t.k)(d,k))||void 0===m?void 0:m.text}case e.a.SERIES:case e.a.MODELS:{const k=(0,e.g)(o);return d=h.series.find(O=>k===O.id),void 0===d?h.text:d?.id}case e.a.DEALER_SEARCH:return p.search.text;case e.a.MY_PORSCHE:return r?.text}return""}function D(a,o,n){const{myPorsche:m,models:p}=t.b.state,{loggedInState:r}=t.n.state;if(a===e.a.MY_PORSCHE)return(0,c.I)(r)?(0,c.x)(r,m?.loggedInFallback||""):"";if(a===e.a.DEALER_SEARCH){const{savedDealerCookie:h,ppnDealers:u}=l.d.state,i=null!==h?u[h.id]:void 0,f=n&&"en"===(0,t.s)(n).language?i?.ppnDealer.name:(0,c.i)(i?.ppnDealer.nameLocalized)?i?.ppnDealer.nameLocalized:i?.ppnDealer.name;return h?f:""}if(a===e.a.MODELS&&(0,c.i)(o)){const h=(0,e.g)(o),u=p.series.find(i=>h===i.id);if(u)return u.tags.map(i=>i.text).join(" | ")}return""}},278:(A,_,s)=>{s.r(_),s.d(_,{phn_menu_item:()=>o});var t=s(702),e=s(195),l=s(681),c=s(896);function w({text:n,size:m,subtext:p,fontWeight:r}){return(0,t.h)("div",{class:"skeleton-item"},(0,t.h)("phn-p-text",{size:m,color:"inherit",tag:"div",weight:r},n),(0,l.i)(p)?(0,t.h)("div",{class:"text-limit"},(0,t.h)("phn-p-text",{class:"subtext",color:"inherit",weight:"regular",size:"x-small",tag:"div",ellipsis:"true","data-test-id":"subtext"},p)):null)}function D({isLoading:n,icon:m}){return n?(0,t.h)("div",{class:"icon-container"},(0,t.h)("phn-p-spinner",{color:"inherit",size:"inherit"})):(0,l.i)(m)?(0,t.h)("div",{class:"icon-container skeleton-item"},(0,t.h)("phn-p-icon",{color:"inherit",size:"inherit",source:m}),(0,t.h)("slot",{name:"icon-modifier"})):null}s(974),s(492),s(598),s(554),s(685),s(499),s(250);const o=class{constructor(n){(0,t.r)(this,n),this.text="",this.analyticsId=void 0,this.subtext="",this.fontWeight="regular",this.elementId="",this.size="inherit",this.iconLeft="",this.iconRight="",this.link="",this.isLoading=!1,this.datalayerEventAction=e.E.NAVIGATION_CLICK,this.customDatalayerProperties={},this.target="_self",this.variant="",this.isModels=!1}sendDataLayerEvent(n,m){(0,c.s)({analyticsId:this.analyticsId,text:this.text,elementId:m,clickElementType:n,link:this.link,customDatalayerProperties:this.customDatalayerProperties,datalayerEventAction:this.datalayerEventAction})}existsSlot(n){return null!==this.el.querySelector(`[slot="${n}"]`)}render(){const n=(0,t.h)("div",{class:"phn-flex-row phn-align-center"},this.existsSlot("media")?(0,t.h)("div",{class:"media-container skeleton-item"},(0,t.h)("slot",{name:"media"})):null,(0,t.h)(D,{isLoading:this.isLoading,icon:this.iconLeft}),!this.isModels&&(0,l.i)(this.text)?(0,t.h)(w,{size:this.size,text:this.text,subtext:this.subtext,fontWeight:this.fontWeight}):void 0,this.existsSlot("suffix")?(0,t.h)("div",null,(0,t.h)("slot",{name:"suffix"})):null);return(0,l.i)(this.link)?(0,t.h)(t.H,{class:this.variant},(0,t.h)("phn-p-link-pure",{class:(0,l.i)(this.iconLeft)?"has-icon":"",icon:(0,l.i)(this.iconRight)?this.iconRight:"none","align-label":"left",stretch:(0,l.i)(this.iconRight)?"true":"false","data-id":this.elementId,target:this.target,onClick:()=>{this.sendDataLayerEvent(e.C.Link,this.elementId)}},(0,t.h)("a",{href:this.link},n))):(0,t.h)(t.H,{class:this.variant},(0,t.h)("phn-p-button-pure",{class:(0,l.i)(this.iconLeft)?"has-icon":"",size:"inherit",icon:(0,l.i)(this.iconRight)?this.iconRight:"none","align-label":"left",stretch:(0,l.i)(this.iconRight)?"true":"false","data-id":this.elementId,onClick:()=>{this.sendDataLayerEvent(e.C.Button,this.elementId)}},n))}get el(){return(0,t.g)(this)}};o.style='@charset "UTF-8";@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-menu-item{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-menu-item{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-menu-item{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-menu-item{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-menu-item{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-menu-item{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-menu-item{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-menu-item{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-menu-item{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-menu-item{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-menu-item{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-menu-item{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-menu-item-h{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:start;align-items:flex-start}@media (min-width: 1300px){.sc-phn-menu-item-h{border-bottom:0}}.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 8px}@media (min-width: 1300px){.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item{padding-left:0;border-bottom:0}}.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1rem}@media (min-width: 480px) and (max-width: 759px){.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.25rem}}@media (min-width: 760px) and (max-width: 1299px){.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.125rem}}@media (min-width: 1300px){.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.25rem}}.sc-phn-menu-item-h phn-p-link-pure.has-icon.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.has-icon.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.has-icon.sc-phn-menu-item{padding-left:0}.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item .icon-container.sc-phn-menu-item{position:relative;margin-right:0.25rem;width:1.5rem;height:1.5rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item .icon-container.sc-phn-menu-item{height:1.75rem;width:1.75rem}}@media (min-width: 1000px) and (max-width: 1759px){.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item .icon-container.sc-phn-menu-item{width:1.5rem;height:1.5rem}}@media (min-width: 1760px){.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item .icon-container.sc-phn-menu-item{width:1.75rem;height:1.75rem}}.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item phn-p-icon.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item phn-p-icon.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item .icon-container.sc-phn-menu-item phn-p-icon.sc-phn-menu-item{margin-right:0.25rem;width:1.5rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item phn-p-icon.sc-phn-menu-item,.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item phn-p-icon.sc-phn-menu-item,.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item .icon-container.sc-phn-menu-item phn-p-icon.sc-phn-menu-item{width:1.75rem}}.skeleton.sc-phn-menu-item-h .skeleton-item.sc-phn-menu-item{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#d8d8db;border-radius:4px}.skeleton.sc-phn-menu-item-h .skeleton-item.sc-phn-menu-item *.sc-phn-menu-item{visibility:hidden}.skeleton.sc-phn-menu-item-h .skeleton-item.sc-phn-menu-item:empty::after,.skeleton.sc-phn-menu-item-h .skeleton-item.sc-phn-menu-item *.sc-phn-menu-item:empty::after{content:"\xa0"}.model-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.125rem}@media (min-width: 480px){.model-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.25rem}}@media (min-width: 760px){.model-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1rem}}@media (min-width: 1300px){.model-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.125rem}}@media (min-width: 1920px){.model-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.model-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.25rem}}.model-variant.skeleton.sc-phn-menu-item-h .media-container.skeleton-item.sc-phn-menu-item{width:9.625rem;height:5.375rem;border-radius:4px}@media (min-width: 480px){.model-variant.skeleton.sc-phn-menu-item-h .media-container.skeleton-item.sc-phn-menu-item{width:10.25rem;height:5.75rem}}@media (min-width: 760px){.model-variant.skeleton.sc-phn-menu-item-h .media-container.skeleton-item.sc-phn-menu-item{width:9.375rem;height:5.3125rem}}@media (min-width: 1300px){.model-variant.skeleton.sc-phn-menu-item-h .media-container.skeleton-item.sc-phn-menu-item{width:10.9375rem;height:6.125rem}}@media (min-width: 1920px){.model-variant.skeleton.sc-phn-menu-item-h .media-container.skeleton-item.sc-phn-menu-item{width:12.5rem;height:7rem}}.sc-phn-menu-item-h.model-variant.skeleton .media-container.skeleton-item.sc-phn-menu-item-s>img{visibility:hidden}.model-variant.skeleton.sc-phn-menu-item-h .skeleton-item.sc-phn-menu-item{width:6.25rem}@media (min-width: 480px){.model-variant.skeleton.sc-phn-menu-item-h .skeleton-item.sc-phn-menu-item{width:7.75rem}}@media (min-width: 760px){.model-variant.skeleton.sc-phn-menu-item-h .skeleton-item.sc-phn-menu-item{width:5.4375rem}}@media (min-width: 1300px){.model-variant.skeleton.sc-phn-menu-item-h .skeleton-item.sc-phn-menu-item{width:7.75rem}}.dealer-details-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.dealer-details-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.dealer-details-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1rem}.dealer-details-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item phn-p-icon.sc-phn-menu-item,.dealer-details-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item .icon-container.sc-phn-menu-item phn-p-icon.sc-phn-menu-item,.dealer-details-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item .icon-container.sc-phn-menu-item phn-p-icon.sc-phn-menu-item{margin-right:0.25rem;width:1.5rem}.level1-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.25rem}@media (min-width: 480px){.level1-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.5rem}}@media (min-width: 760px){.level1-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.125rem}}@media (min-width: 1000px){.level1-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.25rem}}@media (min-width: 1300px){.level1-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.375rem}}@media (min-width: 1920px){.level1-variant.sc-phn-menu-item-h phn-p-link-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-p-button-pure.sc-phn-menu-item phn-p-text.sc-phn-menu-item,.level1-variant.sc-phn-menu-item-h phn-menu-item.sc-phn-menu-item phn-p-text.sc-phn-menu-item{font-size:1.5rem}}@media (min-width: 0px){div.text-limit.sc-phn-menu-item{width:220px}}@media (min-width: 480px){div.text-limit.sc-phn-menu-item{width:100%}}'},554:(A,_,s)=>{s.d(_,{r:()=>e});const e=(0,s(195).e)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})}}]);