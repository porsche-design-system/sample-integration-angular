"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[270],{837:function(e,t,n){n.d(t,{C:function(){return a},I:function(){return c},P:function(){return h},V:function(){return l},a:function(){return o},b:function(){return m},c:function(){return u}});var i=n(8082),r=n(599),s=n(5305);const o=(0,i.c)({applicationId:s.A,locale:new r.L,w:window,environment:s.e,loginStatus:!1,userId:void 0});var a=(()=>{return(e=a||(a={})).EventAction="eventAction",e.ApplicationId="applicationId",e.Language="language",e.Country="country",e.Timestamp="timestamp",e.Environment="environment",e.Server="server",a;var e})(),l=(()=>{return(e=l||(l={})).LoginStatus="loginStatus",e.DeviceBrowserHeight="deviceBrowserHeight",e.DeviceBrowserWidth="deviceBrowserWidth",e.DeviceBrowserBreakpoint="deviceBrowserBreakpoint",e.DeviceBrowserOrientation="deviceBrowserOrientation",e.DeviceType="deviceType",l;var e})(),h=(()=>{return(e=h||(h={})).PageId="pageId",e.PageName="pageName",h;var e})(),c=(()=>((c||(c={})).UserId="userId",c))(),u=(()=>{return(e=u||(u={})).ModelRangeCode="modelRangeCode",e.ModelRangeName="modelRangeName",e.ModelSeriesCode="modelSeriesCode",e.ModelSeriesName="modelSeriesName",e.ModelName="modelName",e.Bodytype="bodytype",u;var e})(),m=(()=>{return(e=m||(m={})).ClickElementType="clickElementType",e.ClickElementId="clickElementId",e.ClickElementName="clickElementName",e.TargetUrl="targetUrl",m;var e})()},5305:function(e,t,n){n.d(t,{A:function(){return l},B:function(){return K},C:function(){return O},D:function(){return x},E:function(){return h},F:function(){return L},G:function(){return R},H:function(){return y},I:function(){return E},J:function(){return C},K:function(){return I},L:function(){return d},M:function(){return k},N:function(){return T},O:function(){return F},P:function(){return V},R:function(){return u},V:function(){return f},a:function(){return p},b:function(){return m},c:function(){return s},d:function(){return o},e:function(){return a},f:function(){return U},g:function(){return W},h:function(){return j},i:function(){return $},j:function(){return B},k:function(){return i},l:function(){return r},m:function(){return H},n:function(){return g},o:function(){return A},p:function(){return w},q:function(){return z},r:function(){return M},s:function(){return P},t:function(){return _},u:function(){return v},v:function(){return D},w:function(){return c},x:function(){return N},y:function(){return G},z:function(){return S}});const i="de",r="CH",s=null,o=null,a="preview",l="nav",h={PhraseId:"",Name:"",Image:"",Models:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},c={PhraseId:"",Text:"",Link:"",Items:[]},u="REDACTED",m="loggedIn",d="loginOrRegister",p="loading",f="2.15.0",g=0,x={accessibilityStatement:s,countryRecommender:o,furtherLinks:null,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:{menuButton:c,login:c,logout:c,loggedIn:c,loginOrRegister:c,more:c,signup:c,signupText:c,messages:c,links:[]}};var w=(()=>{return(e=w||(w={})).TEXT="Text",e.LINK="Link",e.PHRASEID="PhraseId",e.ITEMS="Items",w;var e})();const b="metafunctionalities",v=`${b}.finddealer`,k=`${b}.myporsche`,C=`${k}.logout`,y=`${k}.${m}`,E=`${k}.${d}`,I=`${k}.messages`,N="mainmenu",P=`${N}.crest`,z=`${N}.menu`;var A=(()=>{return(e=A||(A={})).PRODUCTION="production",e.PREVIEW="preview",e.TEST="test",e.LOCAL="local",A;var e})();function S(e){switch(e){case A.PRODUCTION:return"P";case A.PREVIEW:return"PP";default:return"K"}}const H="featureOverrideEnabled",L="HOMENAV_1590",T="HOMENAV_1599",_='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button';var O=(()=>{return(e=O||(O={})).Link="link",e.Button="button",O;var e})(),M=(()=>{return(e=M||(M={})).Change="PAGHomeNav_CountryRecommenderChange_Click",e.Close="PAGHomeNav_CountryRecommenderClose_Click",e.Load="PAGHomeNav_CountryRecommender_Load",M;var e})(),R=(()=>{return(e=R||(R={})).metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",e.navigationClick="PAGHomeNav_Navigation_Click",R;var e})();const B={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},$=e=>"string"==typeof e&&e.length>0;function D(e){return"string"==typeof e?e:""}function j(e){return e instanceof HTMLElement?e:null}function G(e){return e.split(".").slice(0,-1).join(".")}function U(e){return 0===e.x&&0===e.y}function V(e){return e===p}function W(e){return!V(e)&&!function(e){return e===d}(e)}function F(e,t){return e===m?t:e}function K(e,t,n){return`${t}/as/authorization.oauth2?&client_id=${e}&response_type=code&redirect_uri=${n}/auth`}},8082:function(e,t,n){n.d(t,{c:function(){return o}});var i=n(4397);const r=e=>!("isConnected"in e)||e.isConnected,s=((e,t)=>{let n;return(...e)=>{n&&clearTimeout(n),n=setTimeout(()=>{n=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(r))})(...e)},2e3)}})(),o=(e,t)=>{const n=((e,t=((e,t)=>e!==t))=>{let n=new Map(Object.entries(null!=e?e:{}));const i={dispose:[],get:[],set:[],reset:[]},r=()=>{n=new Map(Object.entries(null!=e?e:{})),i.reset.forEach(e=>e())},s=e=>(i.get.forEach(t=>t(e)),n.get(e)),o=(e,r)=>{const s=n.get(e);t(r,s,e)&&(n.set(e,r),i.set.forEach(t=>t(e,r,s)))},a="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>s(t),ownKeys:e=>Array.from(n.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>n.has(t),set:(e,t,n)=>(o(t,n),!0)}),l=(e,t)=>(i[e].push(t),()=>{((e,t)=>{const n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)})(i[e],t)});return{state:a,get:s,set:o,on:l,onChange:(t,n)=>{const i=l("set",(e,i)=>{e===t&&n(i)}),r=l("reset",()=>n(e[t]));return()=>{i(),r()}},use:(...e)=>{const t=e.reduce((e,t)=>(t.set&&e.push(l("set",t.set)),t.get&&e.push(l("get",t.get)),t.reset&&e.push(l("reset",t.reset)),t.dispose&&e.push(l("dispose",t.dispose)),e),[]);return()=>t.forEach(e=>e())},dispose:()=>{i.dispose.forEach(e=>e()),r()},reset:r,forceUpdate:e=>{const t=n.get(e);i.set.forEach(n=>n(e,t,t))}}})(e,t);return n.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const n=(0,i.a)();n&&((e,t,n)=>{const i=e.get(t);i?i.includes(n)||i.push(n):e.set(t,[n])})(e,t,n)},set:t=>{const n=e.get(t);n&&e.set(t,n.filter(i.f)),s(e)},reset:()=>{e.forEach(e=>e.forEach(i.f)),s(e)}}})()),n}},8605:function(e,t,n){n.d(t,{b:function(){return i}});const i={xxs:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920}},599:function(e,t,n){n.d(t,{L:function(){return r}});var i=n(5305);class r{constructor(e){this.set=!1,(0,i.i)(e)&&this.setLocale(e)}get isSet(){return this.set}setLocale(e=""){const t=e.substr(0,e.indexOf("-")).toLowerCase();let n=e.substr(e.indexOf("-")+1);return-1===Object.values(i.j).indexOf(n)&&(n=n.toUpperCase()),(0,i.i)(t)&&(0,i.i)(n)?(this.language=t,this.country=n in i.j?i.j[n]:n):(this.language=i.k,this.country=i.l),this.set=!0,this}toString(){return(0,i.i)(this.language)&&(0,i.i)(this.country)?`${this.language}-${this.country}`:""}toHeaderString(){return this.toString().replace("-","_")}}},6416:function(e,t,n){n.r(t),n.d(t,{phn_headline:function(){return a},phn_list_item:function(){return l}});var i=n(4397),r=n(3980),s=n(837),o=n(5305);n(6430),n(8605),n(8082),n(599);let a=class{constructor(e){(0,i.r)(this,e)}render(){return(0,i.h)("phn-p-headline",{variant:"inherit",tag:"h2"},this.text)}};a.style='phn-p-headline.sc-phn-headline{border-bottom:1px solid #0e1418;margin-top:4rem;padding-bottom:0.5rem;font-size:1.75rem;line-height:1.4285714286;font-family:"Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){phn-p-headline.sc-phn-headline{font-size:2.25rem;line-height:1.3333333333}}@media (min-width: 1000px) and (max-width: 1299px){phn-p-headline.sc-phn-headline{font-size:2.75rem;line-height:1.1818181818}}@media (min-width: 1300px) and (max-width: 1759px){phn-p-headline.sc-phn-headline{font-size:3.25rem;line-height:1.2307692308}}@media (min-width: 1760px){phn-p-headline.sc-phn-headline{font-size:3.75rem;line-height:1.2}}@media (min-width: 1000px){phn-p-headline.sc-phn-headline{font-size:1.5rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;font-weight:600}}@media (min-width: 1000px) and (min-width: 760px) and (max-width: 999px){phn-p-headline.sc-phn-headline{font-size:1.875rem;line-height:1.3333333333}}@media (min-width: 1000px) and (min-width: 1000px) and (max-width: 1299px){phn-p-headline.sc-phn-headline{font-size:2.25rem;line-height:1.3333333333}}@media (min-width: 1000px) and (min-width: 1300px) and (max-width: 1759px){phn-p-headline.sc-phn-headline{font-size:2.625rem;line-height:1.2380952381}}@media (min-width: 1000px) and (min-width: 1760px){phn-p-headline.sc-phn-headline{font-size:3rem;line-height:1.25}}@media (min-width: 1300px){phn-p-headline.sc-phn-headline{padding-left:0.625rem;margin-bottom:1rem;margin-top:2.5rem;font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;font-weight:600}}@media (min-width: 1300px) and (min-width: 760px) and (max-width: 999px){phn-p-headline.sc-phn-headline{font-size:1.125rem;line-height:1.5555555556}}@media (min-width: 1300px) and (min-width: 1000px) and (max-width: 1299px){phn-p-headline.sc-phn-headline{font-size:1.25rem;line-height:1.4}}@media (min-width: 1300px) and (min-width: 1300px) and (max-width: 1759px){phn-p-headline.sc-phn-headline{font-size:1.375rem;line-height:1.4545454545}}@media (min-width: 1300px) and (min-width: 1760px){phn-p-headline.sc-phn-headline{font-size:1.5rem;line-height:1.5}}@media (min-width: 1760px){phn-p-headline.sc-phn-headline{margin-top:3rem}}';let l=class{constructor(e){(0,i.r)(this,e),this.item=o.w}render(){const{locale:e,environment:t,loginStatus:n,userId:a}=s.a.state;return(0,o.i)(this.item.Link)?(0,i.h)("div",{class:"list-item-link"},(0,i.h)("a",{href:this.item.Link,onClick:()=>{(0,r.s)(this.item,o.G.navigationClick,e,t,o.C.Link,n,a)},"data-id":this.item[o.p.PHRASEID]},this.item.Text),(0,i.h)("slot",null)):(0,i.h)("phn-button-extended",{class:"list-item-button",icon:"arrow-head-right",phraseId:this.item[o.p.PHRASEID],onClick:()=>{(0,r.s)(this.item,o.G.navigationClick,e,t,o.C.Button,n,a)}},(0,i.h)("span",{class:"list-item-text"},this.item.Text),(0,i.h)("slot",null))}};l.style='.sc-phn-list-item-h{display:block;white-space:pre-wrap}.sc-phn-list-item-h .list-item-link.sc-phn-list-item{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:1rem;border-bottom:1px solid #e3e4e5}.sc-phn-list-item-h .list-item-link.sc-phn-list-item:hover{color:#d5001c;cursor:pointer}@media (min-width: 760px) and (max-width: 999px){.sc-phn-list-item-h .list-item-link.sc-phn-list-item{font-size:1.125rem}}@media (min-width: 1300px){.sc-phn-list-item-h .list-item-link.sc-phn-list-item{border-bottom:0;padding-left:0}}.sc-phn-list-item-h .list-item-link.sc-phn-list-item a.sc-phn-list-item{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;font-weight:400;color:inherit;text-decoration:none;line-height:1.5rem;display:inline-block;padding:1rem 0 0.875rem 0.625rem}.sc-phn-list-item-h .list-item-link.sc-phn-list-item a.sc-phn-list-item::-moz-focus-inner{border:0}.sc-phn-list-item-h .list-item-link.sc-phn-list-item a.sc-phn-list-item{outline:transparent solid 1px;outline-offset:2px}.sc-phn-list-item-h .list-item-link.sc-phn-list-item a.sc-phn-list-item:focus{outline-color:currentColor}.sc-phn-list-item-h .list-item-link.sc-phn-list-item a.sc-phn-list-item:focus:not(:focus-visible){outline-color:transparent}@media (min-width: 760px) and (max-width: 999px){.sc-phn-list-item-h .list-item-link.sc-phn-list-item a.sc-phn-list-item{padding-top:1.125rem;padding-bottom:1.125rem}}@media (min-width: 1300px){.sc-phn-list-item-h .list-item-link.sc-phn-list-item a.sc-phn-list-item{padding-top:0.5rem;padding-bottom:0.5rem}}.sc-phn-list-item-h .list-item-button.sc-phn-list-item{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:1rem;border-bottom:1px solid #e3e4e5;height:3.3125rem;padding-left:0.625rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (min-width: 760px) and (max-width: 999px){.sc-phn-list-item-h .list-item-button.sc-phn-list-item{font-size:1.125rem;height:3.8125rem;padding-right:0.625rem}}@media (min-width: 1300px){.sc-phn-list-item-h .list-item-button.sc-phn-list-item{border-bottom:0;padding-left:0;padding-top:0.875rem}}.sc-phn-list-item-h .list-item-button.sc-phn-list-item .list-item-text.sc-phn-list-item{display:inline-block;line-height:24px}'}}]);