"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[592],{885:(S,p,c)=>{c.d(p,{f:()=>C,g:()=>D});var R=c(861),f=c(587),e=c(598),d=c(766);const g=new Map;function C(n,t){return h.apply(this,arguments)}function h(){return(h=(0,R.Z)(function*(n,t){const s=(0,e.d)(n,t),a=g.get(s);if(void 0!==a)return a;const{country:o,language:_}=(0,f.s)(t),u=yield fetch(`${n}/${_}-${o}.json`,{headers:{"Cache-Control":"no-cache","Content-Type":"application/json"}});if(404===u.status)throw new d.N(`No content for locale ${t} found`,d.a.NO_RESULTS);if(!u.ok)throw new d.N(`Could not get content for locale ${t}`,d.a.GENERAL);const E=yield u.json();return g.set(s,E),E})).apply(this,arguments)}function D(n,t){return P.apply(this,arguments)}function P(){return(P=(0,R.Z)(function*(n,t){try{const{country:s}=(0,f.s)(t);let a=s;a.includes("-")&&(a=s.split("-")[0]);const o=`${n}/flags/${a}.svg`;if((yield fetch(o)).ok)return o}catch{}return""})).apply(this,arguments)}},807:(S,p,c)=>{c.d(p,{a:()=>P,b:()=>D,c:()=>g,d:()=>C,g:()=>h});var R=c(262),f=c(587),e=c(810),d=c(598);function g(n,t){try{const{country:s}=(0,f.s)(n);return"CN"!==s&&!(0,f.c)(s)&&t}catch{}return!0}function C(n,t,s,a){const{vehiclePurchase:o,experience:_,shop:u,legacyMore:E,legacyShop:r}=n,i={[e.R.VEHICLE_PURCHASE]:o,[e.R.EXPERIENCE]:_,[e.R.SHOP]:a?u:r,[e.R.MORE]:E}[s];if(void 0===i)return null;const l=(0,e.g)(t);return l===s?i:(0,R.f)(i,l)}function h(n,t,s){if(!(0,d.i)(t))return"";const a=(0,e.f)(t);switch(a){case e.R.MODELS:return n.models.text;case e.R.DEALER_SEARCH:return n.dealer.details.backToSearch;case e.R.SHOP:case e.R.VEHICLE_PURCHASE:case e.R.MORE:case e.R.EXPERIENCE:{const o=C(R.n.state,t,a,s);if(null!==o)return o.text;break}}return""}function D(n,t,s,a,o,_){const{dealer:u,models:E,myPorsche:r,vehiclePurchase:i,shop:l,experience:x}=n,{savedDealerCookie:L,ppnDealers:A}=t,I=null!==L?A[L.id]:void 0,M=[e.R.DEALER_SEARCH];void 0!==I&&M.push((0,e.a)(I.id));const O=[{elementId:e.R.MODELS,routingKeys:[e.R.MODELS],analyticsId:E.id,text:E.text},{elementId:e.R.VEHICLE_PURCHASE,routingKeys:[e.R.VEHICLE_PURCHASE],analyticsId:i.id,text:i.text},{elementId:e.R.SHOP,routingKeys:[e.R.SHOP],analyticsId:l.id,text:l.text},{elementId:e.R.EXPERIENCE,routingKeys:[e.R.EXPERIENCE],analyticsId:x.id,text:x.text}],m={elementId:e.R.DEALER_SEARCH,routingKeys:M,analyticsId:u.id,text:u.text};if(g(s,_)){const y=I?.name;(0,d.i)(y)&&(m.subtext=y)}else m.link=u.search.map.link,m.onClick=void 0;if(O.push(m),null!==r){const y=(0,d.b)(a),H=y?(0,d.v)(a,r.loggedInFallback):void 0;O.push({elementId:e.R.MY_PORSCHE,routingKeys:[e.R.MY_PORSCHE],analyticsId:r.id,text:r.text,subtext:H,showIconModifier:y&&o>0})}return O}function P(n,t,s,a,o,_,u){const E=(0,e.f)(_);switch(E){case _:break;case e.R.MODELS:return n.models.series.map(r=>({elementId:(0,e.b)(r.id),routingKeys:[(0,e.b)(r.id)],analyticsId:r.id,text:r.name,subtext:r.tags.map(i=>i.text).join(" | ")}));case e.R.SHOP:case e.R.VEHICLE_PURCHASE:case e.R.EXPERIENCE:{const r=(0,e.r)(_),i=C(n,r,E,!0);if(null!==i)return i.children.map(l=>({elementId:(0,e.c)(r,l.id),routingKeys:[(0,e.c)(r,l.id)],analyticsId:l.id,text:l.text,link:l.link}));break}}return D(n,t,s,a,o,u)}}}]);