(window["webpackJsonpthree-app"]=window["webpackJsonpthree-app"]||[]).push([[0],{21:function(e,t,r){e.exports=r(33)},26:function(e,t,r){},27:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(7),a=r.n(i),c=(r(26),r(27),r(8)),s=r(9),l=r(12),u=r(10),m=r(13),f=r(1),p=r(5),d=function(e){return e.three.boxColor},h=function(e){return e.three.activeGeometry},y=r(11);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){Object(y.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={boxColor:"#f45612",activeGeometry:new f.BoxGeometry(1,1,1)},O=function(e){return{type:"./threeReducer/CHANGE_BOX_COLOR",color:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"./threeReducer/CHANGE_BOX_COLOR":return w({},e,{boxColor:t.color});case"./threeReducer/CHANGE_ACTIVE_GEOMETRY":return w({},e,{activeGeometry:t.geometry});default:return e}},E=r(19),C=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).scene=new f.Scene,r.camera=new f.PerspectiveCamera(75,r.width/r.height,.1,1e3),r.renderer=new f.WebGLRenderer({antialias:!0}),r.geometry=r.props.activeGeometry,r.material=new f.MeshBasicMaterial({color:r.props.boxColor}),r.cube=new f.Mesh(r.geometry,r.material),r.controls=new E.a(r.camera),r.handleWindowResize=function(){var e=.75*window.innerWidth,t=window.innerHeight;r.renderer.setSize(e,t),r.myDiv.parentElement.lastChild.setAttribute("style","width:".concat(.25*window.innerWidth,"px")),r.camera.aspect=e/t,r.camera.updateProjectionMatrix()},r.start=function(){r.frameId||(r.frameId=requestAnimationFrame(r.animate))},r.stop=function(){cancelAnimationFrame(r.frameId),window.removeEventListener("resize",r.handleWindowResize),r.controls.dispose()},r.animate=function(){r.renderScene(),r.frameId=window.requestAnimationFrame(r.animate)},r.renderScene=function(){r.renderer.render(r.scene,r.camera)},r}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.camera.position.z=4,this.renderer.setClearColor("#fffff3"),this.myDiv.appendChild(this.renderer.domElement),this.scene.add(this.cube),this.start(),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),window.three=f,window.cube=this.cube}},{key:"componentDidUpdate",value:function(){this.material.color=new f.Color(this.props.boxColor),this.cube.geometry=this.props.activeGeometry}},{key:"componentWillUnmount",value:function(){this.stop(),this.myDiv.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"content",ref:function(t){e.myDiv=t}})}}]),t}(n.Component),j=Object(p.b)((function(e){return{boxColor:d(e),activeGeometry:h(e)}}),{changeBoxColor:O})(C),D=r(3),_=r(20);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(r,!0).forEach((function(t){Object(y.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k={colors:["#ffff00","#fffff8","#f92560","#ff0000","#000000","#ffff99"],geometrys:[{description:"Cube",geometry:new f.BoxGeometry(1,1,1)},{description:"Sphere",geometry:new f.SphereGeometry(1,15,15)},{description:"Cone",geometry:new f.ConeGeometry(1,2,15,15)}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"C":return P({},e);default:return e}},A=Object(D.c)({three:g,config:x}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,N=Object(D.e)(A,B(Object(D.a)(_.a))),R=function(e){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Configurator"))},S=r(6),W=r.n(S),M=function(e){return e.config.colors},z=function(e){return e.config.geometrys},I=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(r=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).colorsDivs=r.props.colors.map((function(e){return o.a.createElement("div",{onClick:function(){r.props.changeBoxColor(e)},className:W.a.itemsDiv,style:{backgroundColor:e}})})),r.geometryDivs=r.props.geometrys.map((function(e){return o.a.createElement("div",{onClick:function(){r.props.changeActiveGeometry(e.geometry)},className:W.a.itemsDiv},e.description)})),r}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"configBar"},o.a.createElement("h2",null,"ConfigBar"),o.a.createElement("div",null,o.a.createElement("h2",null,"Select Model"),o.a.createElement("div",{className:W.a.itemsContainer},this.geometryDivs)),o.a.createElement("hr",null),o.a.createElement("div",{className:W.a.itemsContainer},this.colorsDivs))}}]),t}(o.a.Component),L=Object(p.b)((function(e){return{colors:M(e),geometrys:z(e)}}),{changeBoxColor:O,changeActiveGeometry:function(e){return{type:"./threeReducer/CHANGE_ACTIVE_GEOMETRY",geometry:e}}})(I);var T=function(){return o.a.createElement(p.a,{store:N},o.a.createElement("div",{className:"appWrapper"},o.a.createElement(R,null),o.a.createElement(j,null),o.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,r){e.exports={itemsContainer:"ConfigBar_itemsContainer__3kfy9",itemsDiv:"ConfigBar_itemsDiv__3lvrK"}}},[[21,1,2]]]);
//# sourceMappingURL=main.e1c335eb.chunk.js.map