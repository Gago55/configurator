(window["webpackJsonpthree-app"]=window["webpackJsonpthree-app"]||[]).push([[0],{19:function(e,t,n){e.exports={colorsDiv:"ConfigBar_colorsDiv__1s971"}},20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n.n(a),c=(n(25),n(26),n(7)),l=n(8),s=n(11),u=n(9),f=n(12),d=n(1),p=n(4),m=function(e){return e.three.boxColor},h=n(10);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={boxColor:"#433F81"},O=function(e){return{type:"./threeReducer/CHANGE_BOX_COLOR",color:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"./threeReducer/CHANGE_BOX_COLOR":return w({},e,{boxColor:t.color});default:return e}},g=n(18),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).scene=new d.i,n.camera=new d.g(75,n.width/n.height,.1,1e3),n.renderer=new d.n({antialias:!0}),n.geometry=new d.a(1,1,1),n.material=new d.f({color:n.props.boxColor}),n.cube=new d.e(n.geometry,n.material),n.controls=new g.a(n.camera),n.handleWindowResize=function(){var e=.75*window.innerWidth,t=window.innerHeight;n.renderer.setSize(e,t),n.myDiv.parentElement.lastChild.setAttribute("style","width:".concat(.25*window.innerWidth,"px")),n.camera.aspect=e/t,n.camera.updateProjectionMatrix()},n.start=function(){n.frameId||(n.frameId=requestAnimationFrame(n.animate))},n.stop=function(){cancelAnimationFrame(n.frameId),window.removeEventListener("resize",n.handleWindowResize),n.controls.dispose()},n.animate=function(){n.renderScene(),n.frameId=window.requestAnimationFrame(n.animate)},n.renderScene=function(){n.renderer.render(n.scene,n.camera)},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.camera.position.z=4,this.renderer.setClearColor("#fffff3"),this.myDiv.appendChild(this.renderer.domElement),this.scene.add(this.cube),this.start(),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()}},{key:"componentDidUpdate",value:function(){this.material.color=new d.b(this.props.boxColor)}},{key:"componentWillUnmount",value:function(){this.stop(),this.myDiv.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"content",ref:function(t){e.myDiv=t}})}}]),t}(r.Component),E=Object(p.b)((function(e){return{boxColor:m(e)}}),{changeBoxColor:O})(j),C=n(5);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={colors:["#ffff00","#fffff8","#f92560","#ff0000","#000000","#ffff99"]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"C":return P({},e);default:return e}},B=Object(C.b)({three:y,config:x}),W=Object(C.c)(B),z=function(e){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Configurator"))},A=n(19),R=n.n(A),S=function(e){return e.config.colors},N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).colorsDivs=n.props.colors.map((function(e){return o.a.createElement("div",{onClick:function(){n.props.changeBoxColor(e)},className:R.a.colorsDiv,style:{backgroundColor:e}},e)})),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"configBar"},o.a.createElement("h2",null,"ConfigBar"),o.a.createElement("div",null,o.a.createElement("h2",null,"Select Model")),o.a.createElement("div",{style:{display:"grid"}},this.colorsDivs))}}]),t}(o.a.Component),_=Object(p.b)((function(e){return{colors:S(e)}}),{changeBoxColor:O})(N);var I=function(){return o.a.createElement(p.a,{store:W},o.a.createElement("div",{className:"appWrapper"},o.a.createElement(z,null),o.a.createElement(E,null),o.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.bbba98b0.chunk.js.map