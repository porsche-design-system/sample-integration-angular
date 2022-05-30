!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function a(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[859],{8859:function(r,t,i){i.r(t),i.d(t,{phn_car_model_drawer:function(){return x},phn_dealer_details_drawer:function(){return k},phn_dealer_search_form:function(){return y},phn_drawer_shops_and_more:function(){return v},phn_menu_drawer_content:function(){return S},phn_menu_drawer_header:function(){return R},phn_menu_mobile_level_1:function(){return D},phn_myporsche_drawer_content:function(){return P}});var o=i(8239),s=i(5346),h=i(8605),c=i(7363),d=i(7321),m=i(5514),l=i(2747),p=i(1628),u=i(9035),f=i(2391),g=i(4413),w=i(7493),b=i(6202),x=function(){function e(r){n(this,e),(0,s.r)(this,r)}return a(e,[{key:"getImageSize",value:function(e){switch(e){case h.b.m:return 1024;case h.b.s:return 768;case h.b.xs:return 480;case h.b.xxs:return 375;default:return 320}}},{key:"render",value:function(){var e=this,r=d.a.state,n=r.locale,t=r.environment,a=r.loginStatus,i=r.userId,o=this.getImageSize(this.breakpoint),h=(0,s.d)("".concat(this.assetsURL,"/body-type-assets"));return(0,s.h)(s.H,null,(0,s.h)("phn-car-series-headline",{series:this.series,breakpoint:this.breakpoint}),this.series.ModelMeta.map(function(r){return(0,s.h)("phn-p-link",{variant:"tertiary",href:r.Link,icon:r.Icon,size:"inherit",class:"meta",onClick:function(){(0,c.a)({PhraseId:r.PhraseId,Text:r.Text,Link:r.Link,Items:[]},m.z.modelMetaFunctionClick,n,t,m.C.Link,a,i,e.series.Name)}},r.Text)}),(0,s.h)("phn-p-grid",{class:"car-models"},this.series.ModelList.map(function(e){return(0,s.h)("phn-p-grid-item",{size:"{base: 12, xs: 6, s: 4, m: 6}"},(0,s.h)("a",{href:e.Link,class:"center-grid-items",onClick:function(r){(0,c.a)({PhraseId:e.PhraseId,Text:e.Name,Link:e.Link,Items:[]},m.z.modelClick,n,t,"IMG"===r.target.tagName?m.C.Image:m.C.Link,a,i,e.Name)}},(0,s.h)("img",{srcSet:"".concat(h,"/").concat(o,"/").concat(e.Image,".jpg, ").concat(h,"/").concat(o,"/").concat(e.Image,"@2x.jpg 2x"),alt:""}),(0,s.h)("phn-p-text",{size:"inherit",color:"inherit",align:"center"},e.Name),(0,m.i)(e.Text)?(0,s.h)("phn-p-text",{class:"model-description",size:"x-small",align:"center"},e.Text):null))})),(0,s.h)("phn-p-link",{variant:"tertiary",href:this.furtherLinks.Link,size:"inherit",class:"further","data-test-id":"car-model-drawer-further-links-button",onClick:function(){(0,c.s)(e.furtherLinks,m.z.navigationClick,n,t,m.C.Link,a,i)}},this.furtherLinks.Text))}}],[{key:"assetsDirs",get:function(){return["body-type-assets"]}}]),e}();x.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-car-model-drawer-h{display:block;padding-top:2.25rem}@media (min-width: 480px){.sc-phn-car-model-drawer-h{padding-top:3rem}}.sc-phn-car-model-drawer-h phn-car-series-headline.sc-phn-car-model-drawer{border-bottom:0;padding-bottom:0}.sc-phn-car-model-drawer-h .meta.sc-phn-car-model-drawer{width:100%;padding-top:1rem}@media (min-width: 760px){.sc-phn-car-model-drawer-h .meta.sc-phn-car-model-drawer{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding-right:1.0625rem}}@media (min-width: 1000px){.sc-phn-car-model-drawer-h .meta.sc-phn-car-model-drawer{width:100%;padding-right:0}}.sc-phn-car-model-drawer-h .car-models.sc-phn-car-model-drawer{padding-top:2.25rem}@media (min-width: 480px){.sc-phn-car-model-drawer-h .car-models.sc-phn-car-model-drawer{padding-top:3rem}}@media (min-width: 760px){.sc-phn-car-model-drawer-h .car-models.sc-phn-car-model-drawer{padding-top:3.375rem}}@media (min-width: 1000px){.sc-phn-car-model-drawer-h .car-models.sc-phn-car-model-drawer{padding-top:3.75rem}}.sc-phn-car-model-drawer-h .car-models.sc-phn-car-model-drawer img.sc-phn-car-model-drawer{-o-object-fit:contain;object-fit:contain;width:100%;height:auto}.sc-phn-car-model-drawer-h .car-models.sc-phn-car-model-drawer a.sc-phn-car-model-drawer{color:inherit;text-decoration:none}.sc-phn-car-model-drawer-h .car-models.sc-phn-car-model-drawer a.sc-phn-car-model-drawer:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:currentColor}.sc-phn-car-model-drawer-h .car-models.sc-phn-car-model-drawer a.sc-phn-car-model-drawer:hover phn-p-text.sc-phn-car-model-drawer{color:#d5001c}.sc-phn-car-model-drawer-h .car-models.sc-phn-car-model-drawer a.sc-phn-car-model-drawer .model-description.sc-phn-car-model-drawer{padding-top:0.5rem}.sc-phn-car-model-drawer-h .center-grid-items.sc-phn-car-model-drawer{display:grid;justify-items:center;margin-bottom:2.625rem;font-size:1.375rem}@media (min-width: 480px){.sc-phn-car-model-drawer-h .center-grid-items.sc-phn-car-model-drawer{margin-bottom:3rem}}@media (min-width: 1000px){.sc-phn-car-model-drawer-h .center-grid-items.sc-phn-car-model-drawer{margin-bottom:3.4375rem}}.sc-phn-car-model-drawer-h .further.sc-phn-car-model-drawer{width:100%;padding-bottom:1.5rem}@media (min-width: 480px){.sc-phn-car-model-drawer-h .further.sc-phn-car-model-drawer{padding-bottom:3.1875rem}}@media (min-width: 760px){.sc-phn-car-model-drawer-h .further.sc-phn-car-model-drawer{padding-bottom:29.375rem}}@media (min-width: 1000px){.sc-phn-car-model-drawer-h .further.sc-phn-car-model-drawer{padding-bottom:4.3125rem}}";var k=function(){function e(r){n(this,e),(0,s.r)(this,r)}return a(e,[{key:"render",value:function(){var e,r,n,t,a,i,o,h,c=(0,m.i)(this.dealer.name),d=(0,m.i)(null===(e=this.dealer.address)||void 0===e?void 0:e.street)||(0,m.i)(null===(r=this.dealer.address)||void 0===r?void 0:r.postalCode)||(0,m.i)(null===(n=this.dealer.address)||void 0===n?void 0:n.city),l=(0,m.i)(null===(t=this.dealer.contactDetails)||void 0===t?void 0:t.phoneNumber),p=(0,m.i)(null===(a=this.dealer.contactDetails)||void 0===a?void 0:a.emailAddress),u=(0,m.i)(null===(i=this.dealer.contactDetails)||void 0===i?void 0:i.homePage);return(0,s.h)(s.H,null,c?(0,s.h)("phn-headline",{text:this.dealer.name,"data-test-id":"dealer-headline"}):null,d?(0,s.h)("phn-list-item",{phraseId:"TBD",text:"".concat(this.dealer.address.street,", ").concat(this.dealer.address.postalCode," ").concat(this.dealer.address.city),icon:"pin",showArrow:!1,"data-test-id":"dealer-address"}):null,l?(0,s.h)("phn-list-item",{phraseId:"TBD",text:this.dealer.contactDetails.phoneNumber,icon:"phone",showArrow:!1,"data-test-id":"dealer-phonenumber"}):null,p?(0,s.h)("phn-list-item",{phraseId:"TBD",text:this.dealer.contactDetails.emailAddress,icon:"email",showArrow:!1,"data-test-id":"dealer-email"}):null,u?(0,s.h)("phn-list-item",{phraseId:"TBD",text:this.dealer.contactDetails.homePage,icon:"globe",showArrow:!1,"data-test-id":"dealer-homepage"}):null,(0,m.i)(null===(o=this.finderCars)||void 0===o?void 0:o.PhraseId)?(0,s.h)("phn-list-item",{phraseId:this.finderCars.PhraseId,text:this.finderCars.Text,link:"tbd",icon:"car",showArrow:!1,"data-test-id":"dealer-finder-cars"}):null,(0,m.i)(null===(h=this.bookService)||void 0===h?void 0:h.PhraseId)?(0,s.h)("phn-list-item",{phraseId:this.bookService.PhraseId,text:this.bookService.Text,link:"tbd",icon:"wrench",showArrow:!1,"data-test-id":"dealer-book-service"}):null)}}]),e}();k.style=".sc-phn-dealer-details-drawer-h{display:block}";var y=function(){function e(r){n(this,e),(0,s.r)(this,r),this.searchDealers=(0,s.c)(this,"searchDealers",7),this.clearDealers=(0,s.c)(this,"clearDealers",7),this.mobileMenuItemClick=(0,s.c)(this,"mobileMenuItemClick",6),this.showClearButton=(0,m.i)(this.initialSearchTerm),this.animateResults=!1}return a(e,[{key:"showDrawer",value:function(e,r){this.mobileMenuItemClick.emit({isKeyboardClick:(0,m.h)(e),phraseId:r})}},{key:"onSubmit",value:function(){var e,r,n=null!==(r=null===(e=(0,m.J)(this.el.querySelector('input[type="text"]')))||void 0===e?void 0:e.value)&&void 0!==r?r:"";this.animateResults=!0,this.searchDealers.emit(n)}},{key:"getCurrentLocation",value:function(e){navigator.geolocation.getCurrentPosition(function(r){e.searchDealers.emit({latitude:r.coords.latitude,longitude:r.coords.longitude})})}},{key:"onClear",value:function(){var e=(0,m.J)(this.el.querySelector('input[type="text"]'));null!==e&&((0,m.i)(this.initialSearchTerm)?(this.clearDealers.emit(),this.showClearButton=!1):(e.value="",this.showClearButton=!1),"function"==typeof e.focus&&e.focus())}},{key:"render",value:function(){var e=this,r=this.dealers.length>0||this.isLoading;return(0,s.h)(s.H,null,(0,s.h)("phn-headline",{text:this.dealerContent.dealerSearch[m.o.TEXT]}),(0,s.h)("div",{class:"form-container "+(r?"inline-elements":"")},r?null:(0,s.h)("phn-p-button",{class:"geolocation",onClick:function(){return e.getCurrentLocation(e)},variant:"tertiary",icon:"locate"},this.dealerContent.geolocation[m.o.TEXT]),(0,s.h)("div",{class:"or-container "+(r?"inline-elements":"")},r?null:(0,s.h)("phn-p-text",{color:"inherit",size:"inherit",tag:"div","data-test-id":"dealer-search-or-label"},this.dealerContent.or[m.o.TEXT]),(0,s.h)("div",{class:"input-container "+(r?"inline-search-form":"")},(0,s.h)("input",{type:"text",placeholder:this.dealerContent.location[m.o.TEXT],value:this.initialSearchTerm,"data-test-id":"dealer-search-form-input",onKeyPress:function(r){"Enter"===r.key&&e.onSubmit()},onInput:function(r){var n;e.showClearButton=((null===(n=(0,m.J)(r.target))||void 0===n?void 0:n.value.length)||0)>0}}),this.showClearButton?(0,s.h)("button",{onClick:function(){return e.onClear()},"aria-label":"Clear search","data-test-id":"dealer-search-form-clear-button"},(0,s.h)("phn-p-icon",{name:"close"})):null)),(0,s.h)("phn-p-button",{class:"search-button "+(r?"inline-search-button":""),variant:"secondary",onClick:function(){return e.onSubmit()},"data-test-id":"dealer-search-form-search-button"},this.dealerContent.search[m.o.TEXT])),this.isLoading?(0,s.h)("div",{class:"spinner"},(0,s.h)("phn-p-spinner",{size:"medium",aria:"{ 'aria-label': 'Loading page content' }"})):this.dealers.map(function(r){return(0,s.h)("phn-p-button-pure",{class:"dealer-card "+(e.animateResults?"animated":""),key:r.PhraseId,onClick:function(n){e.showDrawer(n,r[m.o.PHRASEID])}},(0,s.h)("phn-p-text",{color:"inherit",weight:"semibold"},r.name),(0,s.h)("div",null,"".concat(r.address.street,", "),(0,s.h)("span",{class:"city"},r.address.postalCode," ",r.address.city)))}))}},{key:"el",get:function(){return(0,s.g)(this)}}]),e}();y.style='@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-dealer-search-form-h{display:block;padding-bottom:3.125rem}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form{margin-top:2.25rem;width:100%}.sc-phn-dealer-search-form-h .form-container.inline-elements.sc-phn-dealer-search-form{display:-ms-inline-flexbox;display:inline-flex}@media (min-width: 760px){.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:end;align-items:flex-end}}@media (min-width: 1000px){.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form{display:block}}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .geolocation.sc-phn-dealer-search-form{width:100%;margin-bottom:1rem}@media (min-width: 760px){.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .geolocation.sc-phn-dealer-search-form{margin-bottom:0}}@media (min-width: 1000px){.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .geolocation.sc-phn-dealer-search-form{margin-bottom:1rem}}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .or-container.sc-phn-dealer-search-form{width:100%}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .or-container.inline-elements.sc-phn-dealer-search-form{display:-ms-inline-flexbox;display:inline-flex;margin-left:0;margin-bottom:0}@media (min-width: 760px){.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .or-container.sc-phn-dealer-search-form{margin:0 1rem 0 1.5rem}}@media (min-width: 1000px){.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .or-container.sc-phn-dealer-search-form{margin-left:0;margin-bottom:1rem}}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .or-container.sc-phn-dealer-search-form phn-p-text.sc-phn-dealer-search-form{margin-bottom:0.25rem}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .input-container.sc-phn-dealer-search-form{display:-ms-flexbox;display:flex;background-color:teal;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-bottom:1rem;width:100%;border:0.0625rem solid #000;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 760px){.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .input-container.sc-phn-dealer-search-form{margin-bottom:0;margin-right:1rem}}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .input-container.sc-phn-dealer-search-form input.sc-phn-dealer-search-form{border:none;width:100%;font-size:1rem;font-family:"Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;padding:0.6875rem 0 0.6875rem 0.6875rem}@media (min-width: 760px){.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .input-container.sc-phn-dealer-search-form input.sc-phn-dealer-search-form{padding:0.6875rem 0 0.6875rem 0.6875rem}}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .input-container.sc-phn-dealer-search-form input.sc-phn-dealer-search-form:focus{outline:none}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .input-container.sc-phn-dealer-search-form button.sc-phn-dealer-search-form{background-color:transparent;border:none;margin-right:0.75rem;padding:0}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .input-container.sc-phn-dealer-search-form button.sc-phn-dealer-search-form:focus{outline:1px solid #000}.sc-phn-dealer-search-form-h .form-container.sc-phn-dealer-search-form .input-container.inline-search-form.sc-phn-dealer-search-form{margin-right:1rem}.sc-phn-dealer-search-form-h .search-button.sc-phn-dealer-search-form{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}@media (min-width: 480px){.sc-phn-dealer-search-form-h .search-button.sc-phn-dealer-search-form{width:auto}}.sc-phn-dealer-search-form-h .search-button.inline-search-button.sc-phn-dealer-search-form{width:auto}.sc-phn-dealer-search-form-h .spinner.sc-phn-dealer-search-form{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;margin-top:1.5rem}.sc-phn-dealer-search-form-h .dealer-card.sc-phn-dealer-search-form{-webkit-box-shadow:0 0 1.5rem 0 rgba(0, 0, 0, 0.12);box-shadow:0 0 1.5rem 0 rgba(0, 0, 0, 0.12);height:-webkit-max-content;height:-moz-max-content;height:max-content;width:100%;margin-top:1.5rem;padding:1rem 1.1875rem 1rem 1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box}.sc-phn-dealer-search-form-h .dealer-card.sc-phn-dealer-search-form .city.sc-phn-dealer-search-form{white-space:nowrap}.sc-phn-dealer-search-form-h .animated.sc-phn-dealer-search-form{-webkit-animation:fadeIn 0.75s ease-in-out 0s;animation:fadeIn 0.75s ease-in-out 0s}';var v=function(){function e(r){n(this,e),(0,s.r)(this,r),this.mobileMenuItemClick=(0,s.c)(this,"mobileMenuItemClick",6)}return a(e,[{key:"showDrawer",value:function(e,r){(0,m.i)(r[m.o.LINK])||this.mobileMenuItemClick.emit({phraseId:r[m.o.PHRASEID],isKeyboardClick:(0,m.h)(e)})}},{key:"render",value:function(){var e=this,r=1===this.item[m.o.ITEMS].length?this.item[m.o.ITEMS][0]:this.item;return(0,s.h)("div",{class:"drawer-shops-and-more"},(0,s.h)("phn-headline",{text:this.item[m.o.TEXT]}),r[m.o.ITEMS].map(function(r){return(0,s.h)("phn-list-item",{key:r[m.o.PHRASEID],showArrow:!0,phraseId:r.PhraseId,text:r.Text,link:r.Link,onClick:function(n){return e.showDrawer(n,r)}})}))}}]),e}();v.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-drawer-shops-and-more-h .drawer-shops-and-more.sc-phn-drawer-shops-and-more{padding-bottom:3.125rem}";var I,T=(I=(0,o.Z)(regeneratorRuntime.mark(function e(r,n,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){return setTimeout(e,1e3)});case 2:return e.abrupt("return",p.a.map(function(e){return function(e,r){var n=e.id,t=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(e,["id","market"]);return Object.assign({PhraseId:"".concat(r,".").concat(n)},t)}(e,t)}));case 3:case"end":return e.stop()}},e)})),function(e,r,n){return I.apply(this,arguments)}),L=(0,g.c)({searchTerm:"",coordinates:{latitude:0,longitude:0},results:[]});function C(e,r){var n,t;return r===e[m.o.PHRASEID]?e:Array.isArray(e[m.o.ITEMS])&&0!==e[m.o.ITEMS].length?1===e[m.o.ITEMS].length?null!==(n=(0,l.f)(e[m.o.ITEMS][0][m.o.ITEMS],r))&&void 0!==n?n:null:null!==(t=(0,l.f)(e[m.o.ITEMS],r))&&void 0!==t?t:null:null}var S=function(){function e(r){n(this,e),(0,s.r)(this,r),this.dealerResults=L.state.results,this.dealerSearchTerm=L.state.searchTerm,this.dealerIsLoading=!1}return a(e,[{key:"searchDealersHandler",value:function(e){var r=e.detail,n=r.coordinates,t=r.searchTerm,a=this;return(0,o.Z)(regeneratorRuntime.mark(function e(){var r,i,o,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.dealerIsLoading=!0,o=null!==(i=null===(r=w.n.state.dealer)||void 0===r?void 0:r[m.o.PHRASEID])&&void 0!==i?i:"",e.next=4,T(a.dealerApiUrl,n,o);case 4:s=e.sent,a.dealerSearchTerm=t,L.state={coordinates:n,searchTerm:t,results:s},a.dealerResults=s,a.dealerIsLoading=!1;case 6:case"end":return e.stop()}},e)}))()}},{key:"clearDealersHandler",value:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:L.state={searchTerm:"",results:[]},e.dealerResults=[],e.dealerSearchTerm="";case 1:case"end":return r.stop()}},r)}))()}},{key:"render",value:function(){var e=this,r=w.n.state,n=r.shops,t=r.more,a=r.myPorsche,i=r.dealer,o=r.furtherLinks,h=b.n.state,c=h.navigationLoaded,d=h.loggedInState,l=h.unreadMessagesCount;if(u.f.isFeatureEnabled(m.F,f.w.location.search)&&null!==i&&this.activePhraseId.startsWith(i[m.o.PHRASEID])){var p=this.dealerResults.find(function(r){return r[m.o.PHRASEID]===e.activePhraseId});return void 0!==p?(0,s.h)(s.H,null,(0,s.h)("phn-menu-drawer-header",{showBackButton:!0,backButtonText:i.backButton.Text}),(0,s.h)("phn-dealer-details-drawer",{dealer:p,finderCars:null==i?void 0:i.finderCars,bookService:null==i?void 0:i.bookService})):(0,s.h)(s.H,null,(0,s.h)("phn-menu-drawer-header",{showBackButton:!0}),(0,s.h)("phn-dealer-search-form",{dealerContent:i,dealers:this.dealerResults,initialSearchTerm:this.dealerSearchTerm,isLoading:this.dealerIsLoading}))}if(this.activePhraseId===m.M&&null!==a)return(0,s.h)(s.H,null,(0,s.h)("phn-menu-drawer-header",{showBackButton:!0}),(0,s.h)("phn-myporsche-drawer-content",{content:a,breakpoint:this.breakpoint,class:"overlay-content",loggedInState:d,assetsURL:this.assetsURL,loginURL:this.loginURL,unreadMessagesCount:l}));var g=[n[0],t[0]].find(function(r){return e.activePhraseId.startsWith(null==r?void 0:r[m.o.PHRASEID])});if(void 0!==g){var x=C(g,this.activePhraseId);if(null!==x){var k=C(g,(0,m.w)(this.activePhraseId));return(0,s.h)(s.H,null,(0,s.h)("phn-menu-drawer-header",{showBackButton:!0,backButtonText:null==k?void 0:k[m.o.TEXT]}),(0,s.h)("phn-drawer-shops-and-more",{item:x}))}}var y=w.n.state.seriesList.find(function(r){return e.activePhraseId===r[m.o.PHRASEID]});return void 0!==y?(0,s.h)(s.H,null,(0,s.h)("phn-menu-drawer-header",{showBackButton:!0}),u.f.isFeatureEnabled(m.K,f.w.location.search)?(0,s.h)("phn-car-model-drawer",{assetsURL:this.assetsURL,series:y,furtherLinks:o,breakpoint:this.breakpoint}):(0,s.h)("phn-car-series-model-overview",{assetsURL:this.assetsURL,series:y,furtherLinks:o,breakpoint:this.breakpoint})):(0,s.h)(s.H,null,(0,s.h)("phn-menu-drawer-header",null),(0,s.h)("phn-menu-mobile-level-1",{assetsURL:this.assetsURL,breakpoint:this.breakpoint,navigationLoaded:c,unreadMessagesCount:l,loggedInState:d}))}}]),e}();S.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-menu-drawer-content-h{display:block;min-width:18.75rem;width:100vw;height:100%;overflow-y:scroll;-webkit-box-sizing:border-box;box-sizing:border-box;padding:1.5rem 1.5rem 0}@media (min-width: 480px){.sc-phn-menu-drawer-content-h{padding:1.75rem 1.75rem 0}}@media (min-width: 760px){.sc-phn-menu-drawer-content-h{padding:1.5rem 3.375rem 0}}@media (min-width: 1000px){.sc-phn-menu-drawer-content-h{width:35.5rem;padding:1.5rem 2.25rem 0}}";var R=function(){function e(r){n(this,e),(0,s.r)(this,r),this.clickMenuDrawerHeaderBack=(0,s.c)(this,"clickMenuDrawerHeaderBack",7),this.clickMenuDrawerHeaderClose=(0,s.c)(this,"clickMenuDrawerHeaderClose",7),this.showBackButton=!1}return a(e,[{key:"render",value:function(){var e,r,n=this,t=null!==(e=w.n.state.menu.find(function(e){return e[m.o.PHRASEID]===m.p}))&&void 0!==e?e:{},a=this.backButtonText||t[m.o.TEXT];return(0,s.h)("phn-p-flex",{"justify-content":"space-between"},this.showBackButton?(0,s.h)("phn-back-button",{class:"back-button",onClick:function(e){n.clickMenuDrawerHeaderBack.emit((0,m.h)(e))},buttonId:null!==(r=t[m.o.PHRASEID])&&void 0!==r?r:"",text:null!=a?a:""}):(0,s.h)("div",{class:"spacer"}),(0,s.h)("phn-p-button-pure",{class:"close-button",icon:"close",hideLabel:"true","aria-label":"close dialog",size:"small",onClick:function(e){n.clickMenuDrawerHeaderClose.emit((0,m.h)(e))}},"Close Dialog"))}}]),e}();R.style="@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-menu-drawer-header-h{display:block}@media (min-width: 760px){.sc-phn-menu-drawer-header-h{height:3rem}}@media (min-width: 1000px){.sc-phn-menu-drawer-header-h{height:auto}}";var D=function(){function e(r){n(this,e),(0,s.r)(this,r),this.myPorscheIsActive=!1}return a(e,[{key:"render",value:function(){var e=this,r=w.n.state,n=r.shops,t=r.dealer,a=r.more,i=r.seriesList,o=r.metafunctionalities,h=r.myPorsche,c=(0,l.g)(o,m.t,m.o.TEXT),d=(0,l.g)(o,m.t,m.o.LINK);return(0,s.h)("nav",null,i.length>0?(0,s.h)("phn-mobile-car-series-list",{carSeries:i,assetsURL:this.assetsURL,breakpoint:this.breakpoint,navigationLoaded:this.navigationLoaded}):null,(0,s.h)("phn-mobile-shops-and-more-item",{class:"menu-item",item:n[0]||m.u,icon:"shoppingBag"}),u.f.isFeatureEnabled(m.F,f.w.location.search)&&null!==t?(0,s.h)("phn-menu-drawer-button",{item:t.menuButton,analyticsEventAction:m.z.metaFunctionClick,phraseId:t[m.o.PHRASEID],class:"menu-item","data-test-id":"dealer-search-menu-button"},(0,s.h)("phn-p-icon",{size:"small",color:"inherit",name:"pin",class:"dealer-icon"}),(0,s.h)("phn-p-text",{class:"dealer-text",color:"inherit",size:"inherit"},t.menuButton[m.o.TEXT])):(0,s.h)("phn-dealer-search",{class:"menu-item",dealerSearchText:(0,m.g)(c),dealerSearchLink:(0,m.g)(d),navigationLoaded:this.navigationLoaded}),null!==h&&h.logout.PhraseId===m.H?(0,s.h)("phn-menu-drawer-button",{item:h.menuButton,analyticsEventAction:m.z.metaFunctionClick,class:"menu-item","data-test-id":"myporsche-mobile-menu-button"},(0,s.h)("phn-myporsche-button-content",{myporscheText:h.menuButton[m.o.TEXT],loggedInText:h.loggedIn[m.o.TEXT],unreadMessagesCount:this.unreadMessagesCount,loggedInState:this.loggedInState,assetsURL:this.assetsURL,isActive:this.myPorscheIsActive,onMouseEnter:function(){e.myPorscheIsActive=!0},onMouseLeave:function(){e.myPorscheIsActive=!1}})):null,(0,s.h)("phn-mobile-shops-and-more-item",{class:"menu-item",item:a[0]||m.u,icon:"menuDotsVertical"}))}}]),e}();D.style=".sc-phn-menu-mobile-level-1-h{display:block;padding-bottom:3.125rem}.sc-phn-menu-mobile-level-1-h phn-mobile-car-series-list.sc-phn-menu-mobile-level-1{border-bottom:1px solid #e3e4e5;padding-bottom:1.5rem}@media (min-width: 760px){.sc-phn-menu-mobile-level-1-h phn-mobile-car-series-list.sc-phn-menu-mobile-level-1{padding-bottom:1.875rem}}.sc-phn-menu-mobile-level-1-h .menu-item.sc-phn-menu-mobile-level-1{border-bottom:1px solid #e3e4e5}.sc-phn-menu-mobile-level-1-h .menu-item.sc-phn-menu-mobile-level-1 .dealer-icon.sc-phn-menu-mobile-level-1{margin-right:0.25rem;width:1.5rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-menu-mobile-level-1-h .menu-item.sc-phn-menu-mobile-level-1 .dealer-icon.sc-phn-menu-mobile-level-1{width:1.75rem}}.sc-phn-menu-mobile-level-1-h .menu-item.sc-phn-menu-mobile-level-1 .dealer-text.sc-phn-menu-mobile-level-1{display:inline}";var P=function(){function r(e){n(this,r),(0,s.r)(this,e)}return a(r,[{key:"render",value:function(){var r=this.content,n=r.menuButton,t=r.loginOrRegister,a=r.login,i=r.loggedIn,o=r.more,c=r.signup,d=r.signupText,l=r.logout,p=r.messages,u=r.links,f=this.breakpoint<h.b.l,g=(0,m.f)(this.loggedInState),w=g?[].concat(e(u),[l]):u,b=(0,m.N)(this.loggedInState,i[m.o.TEXT]),x=(0,s.h)("phn-p-flex-item",{width:f?"full":"one-third",class:"myporsche-login"},(0,s.h)("phn-myporsche-login",{loginOrRegister:t,login:a,more:o,signup:c,signupText:d,loginURL:this.loginURL})),k=(0,s.h)("div",{class:"headline-container"},(0,s.h)("phn-p-headline",{variant:"inherit",tag:"h2",className:"myporsche-headline"},n[m.o.TEXT]),g?(0,s.h)(s.F,null,this.breakpoint>=h.b.xs?(0,s.h)("phn-p-divider",{orientation:"vertical",class:"headline-divider"}):null,(0,s.h)("div",{class:"user-container"},(0,s.h)("phn-p-icon",{"data-test-id":"user-icon",name:"user",size:"inherit",source:"".concat((0,s.d)("".concat(this.assetsURL,"/icon-assets")),"/user_filled.svg")}),(0,s.h)("phn-p-text",{size:"small","data-test-id":"user-name"},b))):null),y=w.map(function(e){return(0,s.h)("phn-p-grid-item",{size:"12",key:e[m.o.PHRASEID]},(0,s.h)("phn-list-item",{phraseId:e.PhraseId,text:e.Text,link:e.Link}))}),v=(0,s.h)("phn-p-grid-item",{size:"12",key:p[m.o.PHRASEID]},(0,s.h)("phn-list-item",{phraseId:p.PhraseId,text:p.Text,link:p.Link},this.unreadMessagesCount>0?(0,s.h)("span",{class:"unread-messages-count"},this.unreadMessagesCount):null));y.splice(1,0,v);var I=w.map(function(e){return(0,s.h)("phn-p-grid-item",{key:e[m.o.PHRASEID],size:g?"3":"4"},(0,s.h)("phn-p-link-pure",{icon:"none",href:e[m.o.LINK]},e[m.o.TEXT]))}),T=(0,s.h)("phn-p-grid-item",{key:p[m.o.PHRASEID],size:g?"3":"4"},(0,s.h)("phn-p-link-pure",{icon:"none",href:p[m.o.LINK]},p[m.o.TEXT],this.unreadMessagesCount>0?(0,s.h)("span",{class:"unread-messages-count"},this.unreadMessagesCount):null));return I.splice(1,0,T),f?(0,s.h)("phn-p-flex",{direction:"column","justify-content":"space-around","align-items":"top"},(0,s.h)("phn-p-flex-item",{width:"full"},k),g?null:x,(0,s.h)("phn-p-flex-item",{width:"full",class:"myporsche-links"},(0,s.h)("phn-p-grid",null,y))):(0,s.h)("phn-p-flex",{direction:"row","justify-content":"space-around","align-items":"top"},(0,s.h)("phn-p-flex-item",{class:"myporsche-links",width:g?"full":"half"},(0,s.h)("div",{class:"links-container"},k,(0,s.h)("phn-p-grid",null,I))),g?null:(0,s.h)(s.F,null,(0,s.h)("phn-p-flex-item",null,(0,s.h)("phn-p-divider",{orientation:"vertical",color:"neutral-contrast-low"})),x))}}]),r}();P.style='@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeIn{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}.sc-phn-myporsche-drawer-content-h{display:block;padding-top:4rem;padding-bottom:3.125rem}@media (min-width: 1300px){.sc-phn-myporsche-drawer-content-h{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 7vw;padding-top:3.125rem;padding-bottom:0}}@media (min-width: 1300px) and (min-width: 1000px){.sc-phn-myporsche-drawer-content-h{padding-left:var(--scrollbar-width)}}@media (min-width: 1300px) and (min-width: 1760px){.sc-phn-myporsche-drawer-content-h{margin:0 10vw}}@media (min-width: 1300px) and (min-width: 1920px){.sc-phn-myporsche-drawer-content-h{margin:0 auto;width:96rem}}.sc-phn-myporsche-drawer-content-h .links-container.sc-phn-myporsche-drawer-content{width:100%}@media (min-width: 1300px){.sc-phn-myporsche-drawer-content-h .links-container.sc-phn-myporsche-drawer-content phn-p-grid-item.sc-phn-myporsche-drawer-content{padding-bottom:0.875rem}}.sc-phn-myporsche-drawer-content-h .myporsche-links.sc-phn-myporsche-drawer-content{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center}.sc-phn-myporsche-drawer-content-h .myporsche-links.sc-phn-myporsche-drawer-content .unread-messages-count.sc-phn-myporsche-drawer-content{font-size:0.75rem;border:0.0625rem solid #d5001c;border-radius:0.9375rem;color:#d5001c;margin-left:0.625rem;padding:0 0.25rem}.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content{border-bottom:1px solid #0e1418}@media (min-width: 480px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content{padding-bottom:0.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}}@media (min-width: 760px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content{padding-bottom:1rem}}@media (min-width: 1000px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content{padding-bottom:0.5rem}}@media (min-width: 1300px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content{padding-bottom:1rem;border:none}}.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .myporsche-headline.sc-phn-myporsche-drawer-content{font-size:1.75rem;line-height:2.5rem;padding-bottom:0.5rem}@media (min-width: 760px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .myporsche-headline.sc-phn-myporsche-drawer-content{padding-bottom:0;font-size:1.875rem;line-height:2.5rem}}@media (min-width: 1000px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .myporsche-headline.sc-phn-myporsche-drawer-content{font-size:1.75rem;line-height:2.5rem}}@media (min-width: 1300px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .myporsche-headline.sc-phn-myporsche-drawer-content{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif;font-weight:600}}@media (min-width: 1300px) and (min-width: 760px) and (max-width: 999px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .myporsche-headline.sc-phn-myporsche-drawer-content{font-size:1.125rem;line-height:1.5555555556}}@media (min-width: 1300px) and (min-width: 1000px) and (max-width: 1299px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .myporsche-headline.sc-phn-myporsche-drawer-content{font-size:1.25rem;line-height:1.4}}@media (min-width: 1300px) and (min-width: 1300px) and (max-width: 1759px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .myporsche-headline.sc-phn-myporsche-drawer-content{font-size:1.375rem;line-height:1.4545454545}}@media (min-width: 1300px) and (min-width: 1760px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .myporsche-headline.sc-phn-myporsche-drawer-content{font-size:1.5rem;line-height:1.5}}.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .headline-divider.sc-phn-myporsche-drawer-content{padding:0 1.125rem 0 1rem;height:2rem}.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .user-container.sc-phn-myporsche-drawer-content{padding-bottom:1.0625rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}@media (min-width: 480px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .user-container.sc-phn-myporsche-drawer-content{padding-bottom:0}}.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .user-container.sc-phn-myporsche-drawer-content phn-p-icon.sc-phn-myporsche-drawer-content{padding-right:0.4375rem;width:1.25rem;height:1.25rem}.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .user-container.sc-phn-myporsche-drawer-content phn-p-text.sc-phn-myporsche-drawer-content{font-size:0.75rem}@media (min-width: 480px){.sc-phn-myporsche-drawer-content-h .headline-container.sc-phn-myporsche-drawer-content .user-container.sc-phn-myporsche-drawer-content phn-p-text.sc-phn-myporsche-drawer-content{padding:0}}.sc-phn-myporsche-drawer-content-h phn-p-divider.sc-phn-myporsche-drawer-content{display:block;height:100%;-ms-flex-item-align:center;align-self:center;padding:0 7.4375rem}@media (min-width: 1760px){.sc-phn-myporsche-drawer-content-h phn-p-divider.sc-phn-myporsche-drawer-content{padding:0 9.375rem}}'}}])}();