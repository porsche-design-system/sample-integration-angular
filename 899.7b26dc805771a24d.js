"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[899],{661:(S,b,n)=>{n.d(b,{a:()=>N,m:()=>x});var t=n(861),m=n(58);const g={},y={};function w(){return(w=(0,t.Z)(function*(e){const i=y[e];return void 0===i?new Promise((a,o)=>o(new Error(`Sequence ${e} has not been registered`))):(i.running||(i.promise=new Promise((a,o)=>{i.resolve=()=>{i.running=!1,a()},i.reject=f=>{i.running=!1,o(f)},i.running=!0,L(i)})),i.promise)})).apply(this,arguments)}function L(e){return E.apply(this,arguments)}function E(){return(E=(0,t.Z)(function*(e){var i;if(e.currentStepIndex>=e.steps.length)return void function T(e){var i;e.currentStepIndex=0,null===(i=e.resolve)||void 0===i||i.call(e,null),e.promise=void 0}(e);const a=e.steps[e.currentStepIndex],o=[];for(const f of a)o.push(P(f));try{yield Promise.all(o)}catch(f){return void(null===(i=e.reject)||void 0===i||i.call(e,f))}e.currentStepIndex+=1,setTimeout(()=>L(e),0)})).apply(this,arguments)}function O(e){const i=(0,m.t)(e.target);if(null===i)throw new Error(`${e.type} event target is null`);const a=i.dataset.phnAmId;null!=a&&R(a,i)}function P(e){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(function*({onStart:e,onEnd:i,animation:a,elementSelector:o}){if(e){const c=e();(0,m.q)(c)&&(yield c)}const f=Array.from((0,m.B)().querySelectorAll(o)),d=[];for(const c of f){const u=k(D)(c,a);d.push(u)}if(yield Promise.all(d),i){const c=i();(0,m.q)(c)&&(yield c)}})).apply(this,arguments)}function k(e){return function(){var i=(0,t.Z)(function*(a,o){const{cleanUpBeforeAnimation:f,cleanUpAfterAnimation:d}=o,c=e(a,o);if("function"==typeof f){const u=f(a);(0,m.q)(u)&&(yield u)}if(yield c,"function"==typeof d){const u=d(a);(0,m.q)(u)&&(yield u)}!1!==d&&a.classList.remove(o.className)});return function(a,o){return i.apply(this,arguments)}}()}const D=(e,i)=>{const a=Math.floor(1e7*Math.random());let o,f,d;e.classList.add(i.className),e.dataset.phnAmId=a.toString();const c=new Promise((u,M)=>{o=u,f=M,d=setTimeout(()=>{console.warn(`Animation with className ${i.className} didn't finish after 1000ms. Forcefully finishing animation and continuing with the rest of the sequence.`),R(String(a),e)},1e3)});return g[a]={animation:i,resolve:o,reject:f,promise:c,timeout:d},c};function R(e,i){const{resolve:a,timeout:o}=g[e];clearTimeout(o),delete g[e],delete i.dataset.phnAmId,a()}function x(e,i){return{steps:e.map(a=>a.map(o=>Object.assign(Object.assign({},i),o))),currentStepIndex:0,running:!1}}const N={initialize:function p(){(0,m.B)().addEventListener("transitionend",O),(0,m.B)().addEventListener("animationend",O)},play:function v(e){return w.apply(this,arguments)},isPlaying:function A(e){const i=y[e];if(void 0===i)throw new Error(`Sequence ${e} has not been registered`);return void 0!==i.promise},register:function h(e,i){y[e]=i},reset:function I(){Object.keys(y).forEach(e=>delete y[e])}}},205:(S,b,n)=>{n.d(b,{A:()=>t});const t={OPEN_DOUBLE_DRAWER:"openDoubleDrawer",CLOSE_DOUBLE_DRAWER:"closeDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER:"transitionSameLevelDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER_REVERSE:"transitionSameLevelDoubleDrawerReverse",TRANSITION_NEXT_LEVEL_DOUBLE_DRAWER:"transitionNextLevelDoubleDrawer",TRANSITION_PREVIOUS_LEVEL_DOUBLE_DRAWER:"transitionPreviousLevelDoubleDrawer",OPEN_SINGLE_DRAWER:"openSingleDrawer",CLOSE_SINGLE_DRAWER:"closeSingleDrawer",TRANSITION_NEXT_LEVEL_SINGLE_DRAWER:"transitionNextLevelSingleDrawer",TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER:"transitionPreviousLevelSingleDrawer"}},899:(S,b,n)=>{n.r(b),n.d(b,{phn_back_button:()=>l,phn_heading:()=>D,phn_signature_heading:()=>A});var t=n(702),m=n(685),g=n(172),y=n(670),_=n(588),p=n(58);n(740),n(63),n(135),n(416),n(35),n(355),n(661),n(205);const l=class{constructor(x){(0,t.r)(this,x),this.text="",this.analyticsId=""}sendDataLayerEvent(){m.g.pushDataLayerEvent(g.E.MENU_BACK_CLICK,{componentClick:{clickElementId:this.analyticsId,clickElementName:this.text,clickElementType:g.C.Button},componentDisplay:{displayElementId:y.a.calculateDisplayElementId(),displayElementType:y.a.calculateDisplayElementType((0,_.g)(),g.h.backButton,!0),displayElementName:this.text}})}render(){return(0,t.h)(t.H,null,(0,t.h)("phn-p-button-pure",{size:"inherit",icon:"arrow-head-left",class:"back-button-text-link",aria:{"aria-label":"Back to Menu"},onClick:()=>this.sendDataLayerEvent()},this.text))}};l.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-back-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-back-button{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-back-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-back-button{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-back-button{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-back-button{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-back-button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-back-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-back-button{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-back-button{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-back-button{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-back-button{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-back-button-h{font-size:1rem;display:-ms-flexbox;display:flex}@media (min-width: 480px){.sc-phn-back-button-h{font-size:1.25rem}}@media (min-width: 760px){.sc-phn-back-button-h{font-size:1.25rem}}";const D=class{constructor(x){(0,t.r)(this,x),this.text=void 0,this.subtext=void 0}render(){return(0,t.h)(t.H,null,(0,t.h)("phn-p-heading",{size:"inherit"},this.text),(0,p.i)(this.subtext)?(0,t.h)("div",{class:"text-limit"},(0,t.h)("phn-p-text",{color:"contrast-high",size:"xx-small",tag:"div",ellipsis:"true"},this.subtext)):null)}};D.style='@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-heading{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-heading{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-heading{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-heading{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-heading{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-heading{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-heading{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-heading{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-heading{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-heading{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-heading-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.sc-phn-heading-h phn-p-heading.sc-phn-heading{font:normal normal 600 clamp(1.27rem, 0.51vw + 1.16rem, 1.78rem)/calc(6px + 2.125ex) "Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif}@media (min-width: 480px){.sc-phn-heading-h phn-p-heading.sc-phn-heading{font:normal normal 600 clamp(1.42rem, 0.94vw + 1.23rem, 2.37rem)/calc(6px + 2.125ex) "Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif}}@media (min-width: 760px){.dealer-heading.sc-phn-heading-h phn-p-heading.sc-phn-heading{font-size:1.875rem;line-height:2.5rem}}@media (min-width: 1000px){.dealer-heading.sc-phn-heading-h phn-p-heading.sc-phn-heading{font-size:1.75rem;line-height:2.5rem}}@media (min-width: 0px){.sc-phn-heading-h div.text-limit.sc-phn-heading{width:180px}}@media (min-width: 480px){.sc-phn-heading-h div.text-limit.sc-phn-heading{width:100%}}';const A=class{constructor(x){(0,t.r)(this,x),this.text=void 0,this.subtext=void 0}render(){return(0,t.h)(t.F,null,(0,t.h)("phn-p-model-signature",{model:this.text.toLowerCase(),size:"inherit",class:"model-signature"}),(0,p.i)(this.subtext)&&!(0,p.O)(this.text)?(0,t.h)("phn-p-text",{color:"inherit",class:"subtext",weight:"regular",size:"x-small",tag:"div",ellipsis:"true","data-test-id":"subtext"},this.subtext):null)}};A.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-signature-heading{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-signature-heading{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-signature-heading{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-signature-heading{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-signature-heading{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-signature-heading{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-signature-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-signature-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-signature-heading{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-signature-heading{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-signature-heading{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-signature-heading{-ms-flex-wrap:wrap;flex-wrap:wrap}.model-signature.sc-phn-signature-heading{height:1.625rem}@media (min-width: 1920px){.model-signature.sc-phn-signature-heading{height:1.875rem}}phn-p-text.sc-phn-signature-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;color:#535457;font-size:1.25rem}@media (min-width: 1300px){phn-p-text.sc-phn-signature-heading{font-size:1.375rem}}@media (min-width: 1920px){phn-p-text.sc-phn-signature-heading{font-size:1.5rem}}"},588:(S,b,n)=>{n.d(b,{a:()=>d,b:()=>o,c:()=>D,d:()=>u,e:()=>i,f:()=>R,g:()=>l,h:()=>I,i:()=>f,j:()=>x,p:()=>A,r:()=>N,s:()=>M});var t=n(63),m=n(740),g=n(58),y=n(35),_=n(416),p=n(661),h=n(205);const I=()=>({OPENING:w,CLOSING:L,FORWARD:E,BACKWARDS:T,UNCHANGED:O}[function v(){return o()?"OPENING":c()?"CLOSING":i()?"FORWARD":a()?"BACKWARDS":"UNCHANGED"}()]()),w=()=>(p.a.play(h.A.OPEN_SINGLE_DRAWER),{nextRoute:"",currentRoute:l()}),L=()=>(p.a.play(h.A.CLOSE_SINGLE_DRAWER).then(()=>{}),{nextRoute:l()||"",currentRoute:k()||""}),E=()=>{var r,s;return setTimeout(()=>{p.a.play(h.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER)}),{nextRoute:null!==(r=l())&&void 0!==r?r:"",currentRoute:null!==(s=k())&&void 0!==s?s:""}},T=()=>{var r,s;return""!==l()&&setTimeout(()=>{p.a.play(h.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER)}),{nextRoute:null!==(r=k())&&void 0!==r?r:"",currentRoute:null!==(s=l())&&void 0!==s?s:""}},O=()=>({nextRoute:"",currentRoute:l()}),l=()=>{const{routingKeyHistory:r,routingKeyPointer:s}=t.r.state;return r[s]||""},k=()=>{const{routingKeyHistory:r,animatingPointer:s}=t.r.state;return r[s]||""},D=(...r)=>{const s=[m.a.MAIN_MENU,...r];t.r.state.routingKeyPointer=r.length,t.r.state.routingKeyHistory=s},R=()=>{(()=>{try{return[h.A.OPEN_SINGLE_DRAWER,h.A.CLOSE_SINGLE_DRAWER,h.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER,h.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER].some(s=>{try{return p.a.isPlaying(s)}catch{return!1}})}catch{return!1}})()||((0,m.f)(l())===m.a.DEALER_SEARCH&&(_.d.state.savedDealerCookie=null),t.r.state.routingKeyPointer=t.r.state.routingKeyPointer-1)},A=()=>{e()&&t.r.state.routingKeyHistory.pop()},x=r=>{if((0,g.l)(y.w.getBreakpoint()))(0,g.E)("phn-router","mobileMenuItemClick",{bubbles:!0,cancelable:!1,detail:[(0,m.c)(l(),...r)]});else{const s=[...t.r.state.routingKeyHistory,(0,m.c)(l(),...r)];t.r.state.routingKeyPointer=s.length-1,t.r.state.routingKeyHistory=s}},N=()=>{t.r.state.routingKeyPointer=-1},e=()=>t.r.state.routingKeyPointer<t.r.state.routingKeyHistory.length-1,i=()=>t.r.state.routingKeyPointer>t.r.state.animatingPointer,a=()=>t.r.state.routingKeyPointer<t.r.state.animatingPointer,o=()=>t.r.state.animatingPointer===m.R.LEVEL_ZERO&&t.r.state.routingKeyPointer>=0,f=()=>!d(),d=()=>t.r.state.routingKeyPointer===m.R.LEVEL_ZERO&&t.r.state.animatingPointer===m.R.LEVEL_ZERO,c=()=>-1===t.r.state.routingKeyPointer&&t.r.state.animatingPointer>=0,u=()=>{t.r.state.animatingPointer=t.r.state.routingKeyPointer},M=r=>t.r.state.routingKeyHistory.indexOf(r)>=m.R.LEVEL_TWO}}]);