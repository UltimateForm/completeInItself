(this["webpackJsonpcomplete-in-itself"]=this["webpackJsonpcomplete-in-itself"]||[]).push([[0],{12:function(e,t,a){e.exports=a(41)},17:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),o=a.n(r),l=(a(17),a(4)),c=a(2),s=a(48),m=Object(s.a)({info:{display:"flex",flexDirection:"column",textAlign:"start",height:c.isMobile?"unset":"100vh",position:c.isMobile?"relative":"sticky",top:5,minWidth:"35%",marginLeft:"1rem",marginRight:"1rem",marginBottom:c.isMobile?"1rem":"unset"},h1:{fontWeight:500,textTransform:"uppercase"},header:{textAlign:"center"},ul:{textAlign:"start",lineHeight:1.5},li:{position:"relative",display:"inline"},span:{display:"block"},minorSection:{fontSize:"medium",fontWeight:500},majorSection:{textTransform:"uppercase",fontWeight:500,marginBottom:"1.1rem"},sectionHeader:{backgroundColor:"RGB(21.18%, 45.1%, 46.67%, 0.7)",width:"fit-content",padding:"5px"},dotted:{borderBottom:"4px dotted",marginBottom:"8px",marginLeft:"2px",marginRight:"2px"},divComissionLineContainer:{display:"grid",gridTemplateColumns:"auto 1fr auto"},content:{display:"flex",flexDirection:"column"},note:{fontSize:"medium",textTransform:"initial",textAlign:"end"}}),d="isavic149@gmail.com",u=[{name:"Editing/colouring",price:"$20"},{name:"Portrait",price:"$30"},{name:"Character design",price:"$50"},{name:"Book cover illustration",price:"$80"},{name:"Fantasy artwork",price:"$50-100*"}];function p(){var e=m();return i.a.createElement("div",{className:e.info},i.a.createElement("style",{dangerouslySetInnerHTML:{__html:["li::before {",'  content: url("https://ultimateform.github.io/completeInItself/sort-right.png");',"  position: absolute;","  left: -20px;","  color: white;","}"].join("\n")}}),i.a.createElement("header",{className:e.header},i.a.createElement("h1",{className:e.h1},"Commissions are open!")),i.a.createElement("div",{className:e.majorSection},i.a.createElement("h2",{className:e.sectionHeader},"Pricings:"),i.a.createElement("ul",{className:e.ul},u.map((function(t){return i.a.createElement("li",{className:e.li,key:t.name+"#"+t.price},i.a.createElement("div",{className:e.divComissionLineContainer},i.a.createElement("a",{className:"cancelhref",href:"mailto:".concat(d,"?subject=").concat(t.name)},t.name),i.a.createElement("div",{className:e.dotted}),i.a.createElement("div",null,t.price)))}))),i.a.createElement("span",{className:e.note},"*Depending on complexity")),i.a.createElement("span",null,"If needed, PRINTING+SHIPING costs additional $10"),i.a.createElement("div",{className:e.minorSection},i.a.createElement("h3",{className:e.sectionHeader},"How to order?"),i.a.createElement("ul",{className:e.ul},i.a.createElement("li",{className:e.li},i.a.createElement("a",{href:"mailto:".concat(d),className:["cancelhref",e.li].join(" ")},"Email: ",d)))),i.a.createElement("div",{className:e.minorSection},i.a.createElement("h3",{className:e.sectionHeader},"Payment options:"),i.a.createElement("ul",{className:e.ul},i.a.createElement("li",{className:e.li},"Paypal or Western Union (fulll amount upfront or two instalments)"))))}var h=a(3),f=a.n(h),g=a(5),v=(a(9),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1];return window.addEventListener("scroll",(function(){!a&&window.pageYOffset>400?r(!0):a&&window.pageYOffset<=400&&r(!1)})),i.a.createElement("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{position:"sticky",width:"60px",height:"30px",color:"white",backgroundColor:"rgba(7, 59, 76, 0.5)",borderWidth:"thin thin 0 thin",borderColor:"white",borderRadius:"10px 10px 0 0",bottom:"0",display:a?"block":"none"}},"Back")}),b="https://api.imgur.com/3",E={Authorization:"Client-ID 3799ee171489f49"};function w(e){return y.apply(this,arguments)}function y(){return(y=Object(g.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/album/").concat(t,"/images"),{headers:E,method:"GET"});case 2:if(!((a=e.sent).status<200||a.status>=300)){e.next=5;break}return e.abrupt("return",Promise.reject(a.status));case 5:return e.next=7,a.json();case 7:if(void 0!==(null===(n=e.sent)||void 0===n?void 0:n.data)){e.next=10;break}return e.abrupt("return",Promise.reject("response data invalid"));case 10:return e.abrupt("return",Promise.resolve(n.data));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=a(11),N=a.n(x),k=Object(s.a)({overlay:{width:"100%",color:"white",position:"absolute",background:"linear-gradient(to bottom, rgba(15, 32, 39, 0.5), transparent 100%)",padding:"1rem 0 1.5rem 0",opacity:"0%",transition:"opacity 1s",borderRadius:"inherit"},imgContainer:{position:"relative",display:"flex",justifyContent:"center",width:"fit-content",flexDirection:"row-reverse","&:hover #overlay":{display:"block",opacity:"100%",transition:"opacity 1s"},borderRadius:"6px",marginBottom:"1rem"},galleryContainer:{width:"WebKit"===c.engineName||"Blink"===c.engineName?"-webkit-fill-available":"-moz-fill-available",display:"inline-grid",maxWidth:function(e){return e>768?"50%":"100%"},justifyItems:"center",padding:"1rem 5rem"},img:{maxWidth:"100%",maxHeight:"90vh",borderRadius:"inherit"}});function C(e){var t=e.loading,a=e.images,n=k(window.innerWidth);return i.a.createElement("div",{style:{padding:c.isMobile?"1rem 1rem 0 1rem":"1rem 5rem 1rem 5rem"},className:n.galleryContainer},t?i.a.createElement("div",{style:{alignSelf:"center"}},i.a.createElement(N.a,{type:"Rings",color:"#EDE6DE",height:80,width:80})):i.a.createElement(i.a.Fragment,null,a.map((function(e){return i.a.createElement("div",{className:n.imgContainer,key:e.id},e.description&&i.a.createElement("div",{className:n.overlay,id:"overlay"},e.description),i.a.createElement("img",{className:n.img,src:e.link,alt:e.description}))}))),c.isMobile&&i.a.createElement(v,null))}function j(){var e=i.a.useState([]),t=Object(l.a)(e,2),a=t[0],n=t[1],r=i.a.useState(!0),o=Object(l.a)(r,2),c=o[0],s=o[1];return i.a.useEffect((function(){Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w("lCFbQsC");case 3:t=e.sent,s((function(){return n(t),!1})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to load images from imgur album (".concat("lCFbQsC","), error: ").concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),i.a.createElement(C,{images:a,loading:c})}var S=Object(s.a)({container:{backgroundColor:"rgba(0,0,0,0.5)",minHeight:"100vh",minWidth:"100vw"},grid:{display:"flex",flexDirection:c.isMobile?"column":"row",height:"100%",width:"100%",boxSizing:"border-box"}});function W(){var e,t,a,n=S(),r=i.a.useState(0),o=Object(l.a)(r,2),s=o[0],m=o[1],d=function(){var e=document.body.scrollTop||document.documentElement.scrollTop;m(e/document.documentElement.clientHeight)};return i.a.useEffect((function(){return window.scrollTo({left:0,behavior:"smooth"}),window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}})),i.a.createElement("div",{className:n.container},i.a.createElement("div",{className:n.grid},!c.isMobile&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{height:"100vh",position:"sticky",top:0,minWidth:"30%",marginLeft:"-".concat((e=100*s,t=0,a=30,e<=t?t:e>=a?a:e),"%")},className:"composition"})),i.a.createElement(p,null),i.a.createElement(j,null)))}var O=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.c865a342.chunk.js.map