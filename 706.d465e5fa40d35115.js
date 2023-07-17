"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[706],{261:(O,u,i)=>{i.d(u,{a:()=>H,m:()=>G});var a=i(861),s=i(491),d=i(383);const C={slideOutToLeftRelative:(e,t,{from:r=0,to:n=-100})=>{e.style.left=`calc(${t*n+r}%)`,e.style.position="relative"},slideInFromRightRelative:(e,t,{from:r=-100,to:n=0})=>{e.style.right=`calc(${(1-t)*r+n}%)`,e.style.position="relative"},slideInFromLeftRelative:(e,t,{from:r=-100,to:n=0})=>{e.style.left=`calc(${(1-t)*r+n}%)`,e.style.position="relative"},slideOutToRightRelative:(e,t,{from:r=0,to:n=-100})=>{e.style.right=`calc(${t*n+r}%)`,e.style.position="relative"},shrinkElement:(e,t,{to:r=100})=>{e.style.width=(1-t)*r+"%"},growElement:(e,t,{to:r=100})=>{e.style.width=t*r+"%"},slideInFromRight:(e,t,{from:r=-100,to:n=0})=>{e.style.right=`${(1-t)*r+n}px`},slideInFromLeft:(e,t,{from:r=-100,to:n=0})=>{e.style.left=`${(1-t)*r+n}px`},slideOutToRight:(e,t,{from:r=0,to:n=-100})=>{e.style.right=`${t*n+r}px`},slideOutToLeft:(e,t,{from:r=0,to:n=-100})=>{e.style.left=`${t*n+r}px`},fadeOut:(e,t,{from:r=1,to:n=0})=>{e.style.opacity=""+((1-t)*r+t*n)},fadeIn:(e,t,{from:r=0,to:n=1})=>{e.style.opacity=""+(t*n+(t-1)*r)},fadeInBackdrop:(e,t,{from:r=0,to:n=1})=>{e.style.backgroundColor=`rgba(0, 0, 0, ${t*n+(t-1)*r})`,e.style.opacity=`${t+(t-1)*r}`},fadeOutBackdrop:(e,t,{from:r=1,to:n=0})=>{e.style.backgroundColor=`rgba(0, 0, 0, ${(1-t)*r+t*n})`,e.style.opacity=""+(1-t+t*n)},slideInFromRightFixed:(e,t,{from:r=-100,to:n=0})=>{e.style.right=`calc(${(1-t)*r+n}%)`,e.style.position="fixed"},slideOutToRightFixed:(e,t,{from:r=0,to:n=-100})=>{e.style.right=`calc(${t*n+r}%)`,e.style.position="fixed"},slideInFromLeftFixed:(e,t,{from:r=-100,to:n=0})=>{e.style.left=`calc(${(1-t)*r+n}%)`,e.style.position="fixed"},slideOutToLeftFixed:(e,t,{from:r=0,to:n=-100})=>{e.style.left=`calc(${t*n+r}%)`,e.style.position="fixed"}};var P=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const F=e=>{e.removeAttribute("style")},N=e=>C[e],B={easeInOutSin:e=>-(Math.cos(Math.PI*e)-1)/2,easeInOutQuad:e=>e<.5?2*e/2:(2-2*(1-e))/2,linear:e=>e<0||e>1?Math.round(e):e};function M(e,t){const{duration:r=300,cleanUpAfterAnimation:n=!1}=t,o=P(t,["duration","cleanUpAfterAnimation"]);return new Promise(p=>{let l;const D=setTimeout(()=>{cancelAnimationFrame(l),L()},r+50);function L(){if(A(e,1,o),clearTimeout(D),"function"==typeof n){const w=n(e);if((0,s.q)(w))return void w.then(()=>p())}else!0===n&&F(e);p()}const Q=performance.now(),A=N(o.name);l=d.w.requestAnimationFrame(function v(w){let h=(0,B[o.timingFunction||"linear"])((w-Q)/r);h=Math.round(1e3*(h+Number.EPSILON))/1e3;const J=h<1;if(h>=1)return L();A(e,h,o),J&&(l=d.w.requestAnimationFrame(v))})})}const f={};let y=null;function _(){return(_=(0,a.Z)(function*(e){const t=f[e];return void 0===t?new Promise((r,n)=>n(new Error(`Sequence ${e} has not been registered`))):(t.running||(t.promise=new Promise((r,n)=>{t.resolve=()=>{t.running=!1,r()},t.reject=o=>{t.running=!1,n(o)},t.running=!0,S(t)})),t.promise)})).apply(this,arguments)}function S(e){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(function*(e){var t;if(e.currentStepIndex>=e.steps.length)return void function V(e){var t;e.currentStepIndex=0,null===(t=e.resolve)||void 0===t||t.call(e,null),e.promise=void 0}(e);const r=e.steps[e.currentStepIndex],n=[];for(const o of r)n.push(z(o));try{yield Promise.all(n)}catch(o){return void(null===(t=e.reject)||void 0===t||t.call(e,o))}e.currentStepIndex+=1,setTimeout(()=>S(e),0)})).apply(this,arguments)}function z(e){return E.apply(this,arguments)}function E(){return(E=(0,a.Z)(function*({onStart:e,onEnd:t,animation:r,elementSelector:n}){if(null===y)throw new Error("No root element present");if(e){const l=e();(0,s.q)(l)&&(yield l)}const o=Array.from(y.querySelectorAll(n)),p=[];for(const l of o){const D=M(l,r);p.push(D)}if(yield Promise.all(p),t){const l=t();(0,s.q)(l)&&(yield l)}})).apply(this,arguments)}function G(e,t){return{steps:e.map(r=>r.map(n=>Object.assign(Object.assign({},t),n))),currentStepIndex:0,running:!1}}const H={initialize:function j(e){y=e},play:function W(e){return _.apply(this,arguments)},isPlaying:function K(e){const t=f[e];if(void 0===t)throw new Error(`Sequence ${e} has not been registered`);return void 0!==t.promise},register:function $(e,t){f[e]=t},reset:function U(){Object.keys(f).forEach(e=>delete f[e])}}},782:(O,u,i)=>{i.d(u,{A:()=>a,a:()=>s});const a={OPEN_DOUBLE_DRAWER:"openDoubleDrawer",CLOSE_DOUBLE_DRAWER:"closeDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER:"transitionSameLevelDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER_REVERSE:"transitionSameLevelDoubleDrawerReverse",TRANSITION_NEXT_LEVEL_DOUBLE_DRAWER:"transitionNextLevelDoubleDrawer",TRANSITION_PREVIOUS_LEVEL_DOUBLE_DRAWER:"transitionPreviousLevelDoubleDrawer",OPEN_SINGLE_DRAWER:"openSingleDrawer",CLOSE_SINGLE_DRAWER:"closeSingleDrawer",TRANSITION_NEXT_LEVEL_SINGLE_DRAWER:"transitionNextLevelSingleDrawer",TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER:"transitionPreviousLevelSingleDrawer"},s={highlight:200,drawerContent:250,drawer:400,backdrop:400}},706:(O,u,i)=>{i.r(u),i.d(u,{contextual_drawer:()=>g});var a=i(965),s=i(261),d=i(782),m=i(491);i(383);const g=class{constructor(c){(0,a.r)(this,c),this.openBackdrop=(0,a.c)(this,"openBackdrop",7),this.phnContextualDrawerStatus=(0,a.c)(this,"phnContextualDrawerStatus",7),this.isDrawerOpened=!1}closeContextualDrawer(){this.closeDrawer()}openContextualDrawer(){s.a.play("openContextualDrawer")}closeDrawer(){s.a.play("closeContextualDrawer")}componentDidLoad(){(({onStartOpening:c,onFinishOpening:x})=>{s.a.register("openContextualDrawer",(0,s.m)([[{onStart:c,elementSelector:"contextual-drawer",animation:{name:"slideInFromLeft",to:0,duration:d.a.drawer,from:-1500}},{onEnd:x,elementSelector:".contextual-drawer-backdrop",animation:{name:"fadeInBackdrop",duration:d.a.backdrop,to:.6}}]],{timingFunction:"easeInOutQuad"}))})({onStartOpening:()=>{this.phnContextualDrawerStatus.emit({status:m.w.startOpening}),this.isDrawerOpened=!0;const c=document.getElementById("contextual-drawer-header");c&&(c.style.display="")},onFinishOpening:()=>{this.phnContextualDrawerStatus.emit({status:m.w.finishOpening})}}),(({onStartClosing:c,onEndClosing:x})=>{s.a.register("closeContextualDrawer",(0,s.m)([[{onStart:c,elementSelector:"contextual-drawer",animation:{name:"slideOutToLeft",to:-1500,duration:d.a.drawer}},{elementSelector:".contextual-drawer-backdrop",animation:{name:"fadeOutBackdrop",to:.6,duration:d.a.backdrop},onEnd:x}]],{timingFunction:"easeInOutQuad"}))})({onStartClosing:()=>{this.phnContextualDrawerStatus.emit({status:m.w.startClosing})},onEndClosing:()=>{this.phnContextualDrawerStatus.emit({status:m.w.finishClosing}),this.isDrawerOpened=!1}})}render(){return(0,a.h)(a.H,{style:{display:this.isDrawerOpened?"":"none"}},(0,a.h)("phn-p-button",{variant:"secondary",className:"close-button",theme:"dark","hide-label":"true",icon:"close","aria-label":"close modal dialog",onClick:()=>{this.closeDrawer()}}),(0,a.h)("div",{class:"contextual-drawer",id:"contextual-drawer"},(0,a.h)("div",{slot:"contextual_drawer_header"},(0,a.h)("slot",{name:"contextual_drawer_header"}))),(0,a.h)("div",{"aria-hidden":"true",class:"contextual-drawer-backdrop",onClick:()=>{this.closeDrawer()}}))}};g.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.phn-flex-col.sc-contextual-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-contextual-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-contextual-drawer{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-contextual-drawer{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-contextual-drawer{-ms-flex-pack:justify;justify-content:space-between}.sc-contextual-drawer-h{float:right;right:-150%;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;height:100vh;z-index:301}@media (min-width: 0px) and (max-width: 759px){.sc-contextual-drawer-h{width:100%}}.sc-contextual-drawer-h .contextual-drawer-backdrop.sc-contextual-drawer{position:fixed;z-index:300;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.8);cursor:pointer;backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px)}.sc-contextual-drawer-h .close-button.sc-contextual-drawer{position:absolute;right:-4.75rem;z-index:301;width:3rem;height:3rem;margin-top:1.75rem;cursor:pointer}@media (min-width: 0px) and (max-width: 759px){.sc-contextual-drawer-h .close-button.sc-contextual-drawer{display:none}}.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{background-color:#EEEFF2;position:relative;overflow-y:auto;overflow-x:hidden;width:20.625rem;border-radius:0 4px 4px 0;height:100vh;z-index:301}@media (min-width: 0px) and (max-width: 759px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:100%;border-radius:0;background-color:#FFFFFF}}@media (min-width: 1000px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:21rem}}@media (min-width: 1300px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:25.3125rem}}@media (min-width: 1920px){.sc-contextual-drawer-h .contextual-drawer.sc-contextual-drawer{width:37.875rem}}"}}]);