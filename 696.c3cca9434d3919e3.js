"use strict";(self.webpackChunksample_integration_angular=self.webpackChunksample_integration_angular||[]).push([[696],{696:(C,_,t)=>{t.r(_),t.d(_,{phn_logo:()=>d});var i=t(430),h=t(46),l=t(436),o=t(496),c=t(562),g=t(114);function r(e){g.G.getInstance().pushDataLayerEvent(l.E.CREST_CLICK,{componentClick:{clickElementId:e.id,clickElementName:e.text,clickElementType:l.C.Link,targetUrl:e.link}})}t(129);const d=class{constructor(e){(0,i.r)(this,e),this.logoLoaded=(0,i.c)(this,"logoLoaded",7),this.size=void 0,this.app=void 0,this.theme=o.N.light,this.mode=o.o.navbar,this.breakpoint=void 0}componentWillLoad(){h.c.componentsReady(this.el).then(()=>h.c.componentsReady(this.el)).then(()=>{this.logoLoaded.emit()}).catch(()=>{this.logoLoaded.emit()})}render(){const{locale:e}=o.n.state,{crest:a,shop:s}=l.n.state,n=function L(e,a,s,n){return n&&(0,c.a)(e,a,n)?n.link:s.link}(e,this.app,a,s),E=function m(e,a,s){return(0,c.a)(e,a,s)?"Porsche Shop Homepage":"Porsche.com Homepage"}(e,this.app,s);return(0,o.p)(this.breakpoint)?(0,i.h)("phn-p-wordmark",{onClick:()=>r(a),href:(0,o.i)(n)?n:void 0,aria:{"aria-label":E},size:"small",theme:(0,o.H)(this.theme,this.mode)}):(0,i.h)("phn-p-crest",{onClick:()=>r(a),href:(0,o.i)(n)?n:void 0,aria:{"aria-label":E}})}get el(){return(0,i.a)(this)}};d.style=""}}]);