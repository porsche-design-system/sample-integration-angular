"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[345],{5305:function(n,t,e){e.d(t,{A:function(){return c},B:function(){return K},C:function(){return H},D:function(){return x},E:function(){return s},F:function(){return $},G:function(){return z},H:function(){return C},I:function(){return _},J:function(){return w},K:function(){return I},L:function(){return p},M:function(){return v},N:function(){return A},O:function(){return B},P:function(){return U},R:function(){return l},V:function(){return m},a:function(){return h},b:function(){return f},c:function(){return i},d:function(){return u},e:function(){return a},f:function(){return S},g:function(){return W},h:function(){return j},i:function(){return G},j:function(){return D},k:function(){return r},l:function(){return o},m:function(){return T},n:function(){return b},o:function(){return R},p:function(){return g},q:function(){return L},r:function(){return O},s:function(){return E},t:function(){return M},u:function(){return y},v:function(){return V},w:function(){return d},x:function(){return P},y:function(){return F},z:function(){return N}});const r="de",o="CH",i=null,u=null,a="preview",c="nav",s={PhraseId:"",Name:"",Image:"",Models:[],Further:[],Meta:[],ModelMeta:[],Tags:[]},d={PhraseId:"",Text:"",Link:"",Items:[]},l="REDACTED",f="loggedIn",p="loginOrRegister",h="loading",m="2.15.0",b=0,x={accessibilityStatement:i,countryRecommender:u,furtherLinks:null,seriesList:[],shops:[],more:[],metafunctionalities:[],menu:[],myPorsche:{menuButton:d,login:d,logout:d,loggedIn:d,loginOrRegister:d,more:d,signup:d,signupText:d,messages:d,links:[]}};var g=(()=>{return(n=g||(g={})).TEXT="Text",n.LINK="Link",n.PHRASEID="PhraseId",n.ITEMS="Items",g;var n})();const k="metafunctionalities",y=`${k}.finddealer`,v=`${k}.myporsche`,w=`${v}.logout`,C=`${v}.${f}`,_=`${v}.${p}`,I=`${v}.messages`,P="mainmenu",E=`${P}.crest`,L=`${P}.menu`;var R=(()=>{return(n=R||(R={})).PRODUCTION="production",n.PREVIEW="preview",n.TEST="test",n.LOCAL="local",R;var n})();function N(n){switch(n){case R.PRODUCTION:return"P";case R.PREVIEW:return"PP";default:return"K"}}const T="featureOverrideEnabled",$="HOMENAV_1590",A="HOMENAV_1599",M='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button';var H=(()=>{return(n=H||(H={})).Link="link",n.Button="button",H;var n})(),O=(()=>{return(n=O||(O={})).Change="PAGHomeNav_CountryRecommenderChange_Click",n.Close="PAGHomeNav_CountryRecommenderClose_Click",n.Load="PAGHomeNav_CountryRecommender_Load",O;var n})(),z=(()=>{return(n=z||(z={})).metaFunctionClick="PAGHomeNav_ModelMetaFunction_Click",n.navigationClick="PAGHomeNav_Navigation_Click",z;var n})();const D={AP:"asia-pacific",CE:"eastern-europe",ME:"middle-east",LL:"latin-america",WW:"international"},G=n=>"string"==typeof n&&n.length>0;function V(n){return"string"==typeof n?n:""}function j(n){return n instanceof HTMLElement?n:null}function F(n){return n.split(".").slice(0,-1).join(".")}function S(n){return 0===n.x&&0===n.y}function U(n){return n===h}function W(n){return!U(n)&&!function(n){return n===p}(n)}function B(n,t){return n===f?t:n}function K(n,t,e){return`${t}/as/authorization.oauth2?&client_id=${n}&response_type=code&redirect_uri=${e}/auth`}},3345:function(n,t,e){e.r(t),e.d(t,{phn_button_extended:function(){return i}});var r=e(4397),o=e(5305);let i=class{constructor(n){(0,r.r)(this,n)}render(){return(0,r.h)("button",{"data-id":this.phraseId},(0,r.h)("phn-p-text",{color:"inherit",size:"inherit",tag:"div"},(0,r.h)("slot",null)),(0,o.i)(this.icon)?(0,r.h)("phn-p-icon",{color:"inherit",size:"small",name:this.icon}):null)}};i.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}button.sc-phn-button-extended{display:-ms-flexbox;display:flex;width:100%;position:relative;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;text-align:left;background:transparent;color:inherit;font-size:inherit;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}button.sc-phn-button-extended::-moz-focus-inner{border:0}button.sc-phn-button-extended:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:currentColor;height:100%}button.sc-phn-button-extended:hover,button.sc-phn-button-extended:hover phn-p-text.sc-phn-button-extended,button.sc-phn-button-extended:hover phn-p-icon.sc-phn-button-extended{color:#d5001c;cursor:pointer}@media (min-width: 1300px){button.sc-phn-button-extended:hover,button.sc-phn-button-extended:hover phn-p-text.sc-phn-button-extended,button.sc-phn-button-extended:hover phn-p-icon.sc-phn-button-extended{cursor:default;color:inherit}}button.sc-phn-button-extended:enabled:hover,button.sc-phn-button-extended:enabled:active,button.sc-phn-button-extended:not([disabled]):hover,button.sc-phn-button-extended:not([disabled]):active{color:#d5001c}button.sc-phn-button-extended phn-p-icon.sc-phn-button-extended{display:-ms-flexbox;display:flex}button.sc-phn-button-extended phn-p-text.sc-phn-button-extended{display:-ms-flexbox;display:flex}"}}]);