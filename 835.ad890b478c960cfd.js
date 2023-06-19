"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[835],{4777:(y,E,t)=>{t.d(E,{a:()=>M});var s=t(9579),e=t(6212),l=t(7892),r=t(61);const p={},M={setDrawerType:function D(u){p.drawerType=u},calculateDisplayElementId:function I(u){const{drawerType:h}=p,n=((0,l.i)(u)?(0,s.b)(u):e.r.state.routingKeyHistory[e.r.state.routingKeyPointer])||"",i=(0,s.g)(n),a=(0,s.d)(n),c=a-1;if(!(0,l.i)(n))return"level0";const f=(0,l.i)(n)?`level${a}-${i}`:`level${a-1}-unknown`;return"doubleDrawer"===h?""===n?`level${c}-unknown_level${a}-unknown`:`level${c}-${(0,r.g)(n)}_${f}`:f},calculateDisplayElementType:function C(u,h,n){const{drawerType:i}=p,a=(0,s.d)(u);if("doubleDrawer"===i){let c=a;return n&&(c-=1),`level${c}_${h}`}return(0,l.i)(u)?`level${a}_${h}`:`level${a-1}_${h}`},getModelName:function P(u){const h=u.link.split("/"),n=h[h.length-1];let i;return i=""===n?void 0===h[h.length-2]?"":h[h.length-2].split("-").join(" "):n.split("-").join(" "),i},getModelTargetElement:function v(u,h){if(u.includes("models"))return`level${(0,s.d)(u)}_${h.toLowerCase()}`}}},5273:(y,E,t)=>{t.d(E,{d:()=>r});var s=t(2583),e=t(2849),l=t(7892);const r=(0,s.c)({searchTerm:"",results:[],savedDealerCookie:function p(){try{return JSON.parse(e.w.getCookie(l.S))}catch{return null}}(),ppnDealers:{}});r.onChange("savedDealerCookie",D=>{e.w.setCookie(l.S,JSON.stringify(D))})},4346:(y,E,t)=>{t.d(E,{c:()=>D,g:()=>l,i:()=>r});var s=t(5861),e=t(1797);const l=()=>e.f.isOneUiToggleActive()?"default":"pds2";function r(){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)(function*(){if(e.f.isOneUiToggleActive()){const{load:C}=yield t.e(398).then(t.bind(t,2398));C({prefix:"phn"})}else{const{load:C}=yield t.e(351).then(t.bind(t,6351));C({prefix:"phn"})}})).apply(this,arguments)}function D(C){return I.apply(this,arguments)}function I(){return(I=(0,s.Z)(function*(C){let P;if(e.f.isOneUiToggleActive()){const{componentsReady:v}=yield t.e(398).then(t.bind(t,2398));P=v}else{const{componentsReady:v}=yield t.e(351).then(t.bind(t,6351));P=v}yield P(C)})).apply(this,arguments)}},61:(y,E,t)=>{t.d(E,{a:()=>M,b:()=>u,c:()=>h,d:()=>I,e:()=>D,f:()=>P,g:()=>C});var s=t(1797),e=t(9579),l=t(5273),r=t(7892),p=t(3713);function D(n,i,a,c,f,d){const{dealer:o,models:_,myPorsche:g,vehiclePurchase:m,shop:O,experience:x,services:w}=n,{savedDealerCookie:L,ppnDealers:K}=i,R=null!==L?K[L.id]:void 0,T=[e.a.DEALER_SEARCH];void 0!==R&&T.push((0,e.c)(R.ppnDealer.id));const A=[{elementId:e.a.MODELS,routingKeys:[e.a.MODELS],analyticsId:_.id,text:_.text},{elementId:e.a.VEHICLE_PURCHASE,routingKeys:[e.a.VEHICLE_PURCHASE],analyticsId:m.id,text:m.text},{elementId:e.a.SERVICES,routingKeys:[e.a.SERVICES],analyticsId:w.id,text:w.text},{elementId:e.a.EXPERIENCE,routingKeys:[e.a.EXPERIENCE],analyticsId:x.id,text:x.text}],b={elementId:e.a.DEALER_SEARCH,routingKeys:T,analyticsId:o.id,text:o.text};if(null!==O&&""!==O.text){const S={elementId:e.a.SHOP,routingKeys:[e.a.SHOP],analyticsId:O.id,text:O.text,link:(0,r.i)(O.link)?O.link:void 0,datalayerEventAction:s.E.NAVIGATION_LINK_CLICK,iconRight:"external"};A.splice(2,0,S)}if(function v(n,i){try{const{country:a}=(0,s.s)(n);return"CN"!==a&&!(0,s.i)(a)&&i}catch{}return!0}(a,d)){const S=R?.ppnDealer.nameLocalized?R?.ppnDealer.nameLocalized:R?.ppnDealer.name;(0,r.i)(S)&&(b.subtext=S)}else b.link=o.search.map.link,b.onClick=void 0;if(A.push(b),null!==g){const S=(0,r.I)(c),U=S?(0,r.w)(c,g.loggedInFallback):void 0;A.push({elementId:e.a.MY_PORSCHE,routingKeys:[e.a.MY_PORSCHE],analyticsId:g.id,text:g.text,subtext:U,showIconModifier:S&&f>0})}return A}function I(n,i,a,c,f,d,o){const _=s.f.isOneUiToggleActive(),g=(0,e.f)(d);switch(g){case d:break;case e.a.MODELS:return n.models.series.map(m=>({elementId:(0,e.h)(m.id),routingKeys:[(0,e.h)(m.id)],analyticsId:m.id,text:m.name,subtext:m.tags.map(O=>O.text).join(" | "),renderSignatures:_,datalayerEventAction:s.E.MODEL_RANGE_CLICK}));case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const m=(0,e.r)(d),O=P(n,m,g);if(null!==O)return O.children.map(x=>({elementId:(0,e.e)(m,x.id),routingKeys:[(0,e.e)(m,x.id)],analyticsId:x.id,text:x.text,link:x.link}));break}}return D(n,i,a,c,f,o)}function C(n){switch((0,e.f)(n)){case n:break;case e.a.DEALER_SEARCH:return e.a.DEALER_SEARCH;case e.a.MODELS:return e.a.MODELS;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.SERVICES:case e.a.EXPERIENCE:{const a=(0,e.r)(n);return(0,e.g)(a)}}return e.a.MAIN_MENU}function P(n,i,a){const{vehiclePurchase:c,experience:f,shop:d,legacyMore:o,services:_}=n,g={[e.a.VEHICLE_PURCHASE]:c,[e.a.EXPERIENCE]:f,[e.a.SHOP]:d,[e.a.MORE]:o,[e.a.SERVICES]:_}[a];if(void 0===g)return null;const m=(0,e.g)(i);return m===a?g:(0,s.d)(g,m)}function M(n,i){if(!(0,r.i)(i))return"";const a=(0,e.f)(i);switch(a){case e.a.MODELS:return n.models.text;case e.a.DEALER_SEARCH:return n.dealer.details.backToSearch;case e.a.SHOP:case e.a.VEHICLE_PURCHASE:case e.a.MORE:case e.a.EXPERIENCE:{const c=P(s.n.state,i,a);if(null!==c)return c.text;break}}return""}function u(n,i,a){var c;const{dealer:f,myPorsche:d,models:o,vehiclePurchase:_,experience:g,shop:m,legacyMore:O,services:x}=n;let w;switch(a){case e.a.MORE:case e.a.SHOP:case e.a.EXPERIENCE:case e.a.SERVICES:case e.a.VEHICLE_PURCHASE:{if(w={[e.a.VEHICLE_PURCHASE]:_,[e.a.EXPERIENCE]:g,[e.a.SHOP]:m,[e.a.MORE]:O,[e.a.SERVICES]:x}[a],void 0===w)return"";const L=(0,e.g)(i);return L===a?w?.text:null===(c=(0,s.d)(w,L))||void 0===c?void 0:c.text}case e.a.SERIES:case e.a.MODELS:{const L=(0,e.g)(i);return w=o.series.find(K=>L===K.id),void 0===w?o.text:w?.id}case e.a.DEALER_SEARCH:return f.search.text;case e.a.MY_PORSCHE:return d?.text}return""}function h(n,i){const{myPorsche:a,models:c}=s.n.state,{loggedInState:f}=p.n.state;if(n===e.a.MY_PORSCHE)return(0,r.I)(f)?(0,r.w)(f,a?.loggedInFallback||""):"";if(n===e.a.DEALER_SEARCH){const{savedDealerCookie:d,ppnDealers:o}=l.d.state;return d?o[d.id].ppnDealer.name:""}if(n===e.a.MODELS&&(0,r.i)(i)){const d=(0,e.g)(i),o=c.series.find(_=>d===_.id);if(o)return o.tags.map(_=>_.text).join(" | ")}return""}},3713:(y,E,t)=>{t.d(E,{n:()=>l});var s=t(2583),e=t(7892);const l=(0,s.c)({loggedInState:e.L,unreadMessagesCount:e.D,userConsent:!1,env:(0,s.g)(e.v)})},5835:(y,E,t)=>{t.r(E),t.d(E,{phn_side_drawer_item:()=>f});var s=t(8965),e=t(4777),l=t(5601),r=t(1797),p=t(7892),D=t(4346),I=t(21);function i({isActive:d,text:o,subtext:_,renderSignatures:g}){return(0,s.h)("div",{class:"text-container"},g&&(0,p.B)(o)?(0,s.h)("phn-p-model-signature",{model:o.toLowerCase(),size:"inherit",class:"model-signature"}):(0,s.h)("phn-p-text",{size:"inherit",weight:d?"semibold":"regular",color:"inherit",tag:"div"},o),(0,p.i)(_)&&!(0,p.E)(o)?(0,s.h)("phn-p-text",{color:"inherit",class:"subtext",weight:"regular",size:"x-small",tag:"div",ellipsis:"true","data-test-id":"subtext"},_):null)}t(9579),t(6212),t(2583),t(61),t(5273),t(2849),t(3713);const f=class{constructor(d){(0,s.r)(this,d),this.text=void 0,this.analyticsId=void 0,this.subtext="",this.elementId="",this.link="",this.iconRight="",this.datalayerEventAction=r.E.NAVIGATION_CLICK,this.customDatalayerProperties={},this.isActive=!1,this.hasDoubleDrawerAnimationFinished=!1,this.pdsMode=(0,D.g)(),this.renderSignatures=!1}sendDataLayerEvent(d,o){l.g.pushDataLayerEvent(this.datalayerEventAction,Object.assign(Object.assign(Object.assign({componentClick:Object.assign({clickElementId:this.analyticsId,clickElementName:this.text,targetElement:e.a.getModelTargetElement(o,this.text),clickElementType:d},d===r.C.Link?{targetUrl:this.link}:{})},this.customDatalayerProperties),{componentDisplay:{displayElementId:e.a.calculateDisplayElementId(),displayElementType:e.a.calculateDisplayElementType(o,r.c.sideDrawerItem,!0),displayElementName:this.text}}),this.datalayerEventAction===r.E.MODEL_RANGE_CLICK?{car:{modelRangeName:this.text.toLowerCase()}}:{}))}existsSlot(d){return null!==this.el.querySelector(`[slot="${d}"]`)}render(){const d=r.f.isOneUiToggleActive(),o=(0,s.h)("div",{class:"body-container phn-flex-row phn-align-center"},(0,s.h)(i,{isActive:!d&&this.isActive,text:this.text,subtext:this.subtext,renderSignatures:this.renderSignatures}),this.existsSlot("suffix")?(0,s.h)("div",null,(0,s.h)("slot",{name:"suffix"})):null);return(0,p.i)(this.link)?(0,s.h)(I.a,{href:this.link,icon:(0,p.i)(this.iconRight)?this.iconRight:"none","align-label":"left",stretch:"true","data-id":this.elementId,target:"_self",onClick:()=>{this.sendDataLayerEvent(r.C.Link,this.elementId)}},o):(0,s.h)(s.H,{class:this.isActive?"active":""},(0,s.h)(I.T,{active:this.isActive&&d,class:(0,p.B)(this.text)?"models":"",size:"inherit",stretch:"true","data-id":this.elementId,onClick:()=>{this.sendDataLayerEvent(r.C.Button,this.elementId)},aria:{"aria-expanded":this.isActive?"true":"false"},icon:d?"arrow-head-right":"none","align-label":"left"},o))}get el(){return(0,s.g)(this)}};f.style={default:".sc-phn-side-drawer-item-default-h{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:start;align-items:flex-start}.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default .models.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default .models.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default .models.sc-phn-side-drawer-item-default{padding:1rem 0.5rem}.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default{height:3.25rem}.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default phn-p-text.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default phn-p-text.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default phn-p-text.sc-phn-side-drawer-item-default{font-size:1.25rem}@media (min-width: 1300px){.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default phn-p-text.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default phn-p-text.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default phn-p-text.sc-phn-side-drawer-item-default{font-size:1.375rem}}@media (min-width: 1920px){.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default phn-p-text.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default phn-p-text.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default phn-p-text.sc-phn-side-drawer-item-default{font-size:1.5rem}}.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default{max-width:230px}@media (min-width: 1300px){.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default{max-width:270px}}@media (min-width: 1920px){.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default{max-width:400px}}.sc-phn-side-drawer-item-default-h phn-p-link-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default .text-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-p-button-pure.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default .text-container.sc-phn-side-drawer-item-default,.sc-phn-side-drawer-item-default-h phn-tmp-menu-item.sc-phn-side-drawer-item-default .body-container.sc-phn-side-drawer-item-default .text-container.sc-phn-side-drawer-item-default{width:100%}.sc-phn-side-drawer-item-default-h .model-signature.sc-phn-side-drawer-item-default{height:1.625rem}@media (min-width: 1920px){.sc-phn-side-drawer-item-default-h .model-signature.sc-phn-side-drawer-item-default{height:1.875rem}}",pds2:".sc-phn-side-drawer-item-pds2-h{display:block}.sc-phn-side-drawer-item-pds2-h phn-p-link-pure.sc-phn-side-drawer-item-pds2,.sc-phn-side-drawer-item-pds2-h phn-p-button-pure.sc-phn-side-drawer-item-pds2{-webkit-box-sizing:border-box;box-sizing:border-box;width:calc(100% - 2px)}.sc-phn-side-drawer-item-pds2-h phn-p-link-pure.sc-phn-side-drawer-item-pds2 phn-p-text.sc-phn-side-drawer-item-pds2,.sc-phn-side-drawer-item-pds2-h phn-p-button-pure.sc-phn-side-drawer-item-pds2 phn-p-text.sc-phn-side-drawer-item-pds2{font-size:1.25rem}@media (min-width: 1300px){.sc-phn-side-drawer-item-pds2-h phn-p-link-pure.sc-phn-side-drawer-item-pds2 phn-p-text.sc-phn-side-drawer-item-pds2,.sc-phn-side-drawer-item-pds2-h phn-p-button-pure.sc-phn-side-drawer-item-pds2 phn-p-text.sc-phn-side-drawer-item-pds2{font-size:1.375rem}}@media (min-width: 1920px){.sc-phn-side-drawer-item-pds2-h phn-p-link-pure.sc-phn-side-drawer-item-pds2 phn-p-text.sc-phn-side-drawer-item-pds2,.sc-phn-side-drawer-item-pds2-h phn-p-button-pure.sc-phn-side-drawer-item-pds2 phn-p-text.sc-phn-side-drawer-item-pds2{font-size:1.5rem}}.sc-phn-side-drawer-item-pds2-h phn-p-link-pure.sc-phn-side-drawer-item-pds2 phn-p-text.subtext.sc-phn-side-drawer-item-pds2,.sc-phn-side-drawer-item-pds2-h phn-p-button-pure.sc-phn-side-drawer-item-pds2 phn-p-text.subtext.sc-phn-side-drawer-item-pds2{color:rgb(176, 177, 178)}.sc-phn-side-drawer-item-pds2-h phn-p-link-pure.sc-phn-side-drawer-item-pds2{padding-right:1.5rem}"}},6212:(y,E,t)=>{t.d(E,{r:()=>e});const e=(0,t(2583).c)({routingKeyHistory:[],routingKeyPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})},9579:(y,E,t)=>{t.d(E,{R:()=>l,a:()=>e,b:()=>h,c:()=>I,d:()=>u,e:()=>r,f:()=>p,g:()=>v,h:()=>D,i:()=>P,j:()=>C,r:()=>M});var s=t(7892);const e={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",SERVICES:"services",MODELS:"models"};var l=(()=>((l=l||{})[l.LEVEL_ZERO=-1]="LEVEL_ZERO",l[l.LEVEL_ONE=0]="LEVEL_ONE",l[l.LEVEL_TWO=1]="LEVEL_TWO",l))();function r(...n){return n.reduce((i,a)=>[...i,...(0,s.g)(a).split("/")],[]).filter(Boolean).join("/")}function p(n){if((0,s.i)(n))return Object.values(e).find(i=>n.startsWith(i))}function D(...n){return r(e.MODELS,...n)}function I(...n){return r(e.DEALER_SEARCH,...n)}function C(...n){return r(e.MY_PORSCHE,...n)}function P(...n){return r(e.VEHICLE_PURCHASE,...n)}function v(n){return n.split("/").slice(-1)[0]}function M(n){return n.split("/").slice(0,-1).join("/")}function u(n){switch(p(n)){case e.MAIN_MENU:return 1;case n:return 2;default:return n.split("/").length+1}}function h(n){const i=M(n);return(0,s.i)(i)?i:e.MAIN_MENU}}}]);