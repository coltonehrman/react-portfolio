(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(4),r=n.n(o),s=n(1),c=(n(11),function(e){var t=e.upperText,n=e.lowerText,i=e.children,o=function(e){for(var t=[],n=0;n<e;++n)t.push(a.a.createElement("div",{key:n,className:"spinner__sector"}));return t};return a.a.createElement("div",{className:"spinner",onClick:function(){return console.log("click")}},i,a.a.createElement("div",{className:"spinner__ring"},t.split("").map((function(e,t){return a.a.createElement("div",{key:t,className:"spinner__sector"},e)})),o(30-t.length)),a.a.createElement("div",{className:"spinner__ring"},n.split("").map((function(e,t){return a.a.createElement("div",{key:t,className:"spinner__sector"},e)})),o(30-n.length)))}),l=n(2),u=(n(12),function(){}),m=function(e){var t=e.text,n=void 0===t?"":t,o=e.size,r=e.angle,c=e.link,m=void 0===c?null:c,p=e.picture,f=void 0===p?null:p,g=e.center,h=void 0===g?null:g,v=e.styles,d=void 0===v?{}:v,E=e.ringRadius,b=e.offset,S=void 0===b?0:b,x=e.spin,z=void 0===x?null:x,y=e.spinDirection,j=void 0===y?-1:y,M=e.setSpinning,k=void 0===M?u:M,O=e.children,w=Object(i.useState)(r),N=Object(s.a)(w,2),R=N[0],_=N[1],L=Object(i.useState)(!1),C=Object(s.a)(L,2),D=C[0],I=C[1];Object(i.useEffect)((function(){var e;return z&&(e=setInterval((function(){_(R+j)}),20)),function(){return clearInterval(e)}}));var T=Object(l.a)({},d,{width:"".concat(o,"px"),height:"".concat(o,"px")});if(!h){var W=function(e){var t=e.radius,n=e.angle,i=e.cx,a=e.cy;return n*=Math.PI/180,{x:i+t*Math.cos(n),y:a+t*Math.sin(n)}}({radius:E,angle:R,cx:E,cy:E}),Y=W.x,P=W.y;Y-=o/2,P-=o/2,T.top="".concat(Y+S,"px"),T.left="".concat(P+S,"px")}return D&&(T.color="#3df1f1",T.borderColor="#3df1f1",T.boxShadow="0px 0px 20px 0px hsla(208, 100%, 85%, 1.0)"),f&&(T.background='url("'.concat(f,'") center center / contain no-repeat')),a.a.createElement("div",{className:"circle",style:T,onMouseEnter:function(){I(!0),k(!1)},onMouseLeave:function(){I(!1),k(!0)}},O,a.a.createElement("a",{style:{color:T.color},href:m,target:"_blank",rel:"noopener noreferrer"},n))},p=(n(13),function(){}),f=function(e){var t=e.size,n=e.styles,i=void 0===n?{}:n,o=e.title,r=void 0===o?null:o,s=e.onMouseEnter,c=void 0===s?p:s,u=e.onMouseLeave,m=void 0===u?p:u,f=e.hovering,g=void 0!==f&&f,h=e.children,v=Object(l.a)({},i,{width:"".concat(t,"px"),height:"".concat(t,"px")});return a.a.createElement("div",{className:"ring ".concat(g?"hovering":""),style:v,onMouseEnter:c,onMouseLeave:m},r&&a.a.createElement("h4",{className:"ring-title ".concat(g?"hovering":"")},r),h)},g=(n(14),function(e){var t=e.onZoomIn,n=e.onZoomOut;return a.a.createElement("div",{className:"mid"},a.a.createElement("label",{className:"switch"},a.a.createElement("span",{className:"switch-left",onClick:n},"-"),a.a.createElement("span",{className:"switch-right",onClick:t},"+")))}),h=n(5),v=n.n(h),d=function(e){var t=e.children,n=e.circleSize,o=e.hovering,r=e.onMouseEnter,c=e.onMouseLeave,l=3.5*n*1.2,u=[45,135,225,315],p=Object(i.useState)(!0),g=Object(s.a)(p,2),h=g[0],v=g[1];return a.a.createElement(f,{title:"42 Projects",size:l,onMouseEnter:r,onMouseLeave:c,hovering:o},t,a.a.createElement(m,{text:"libft",link:"https://github.com/coltonehrman/42sv_libft",angle:u[0],size:n,ringRadius:l/2,setSpinning:v,spin:o&&h}),a.a.createElement(m,{text:"fillit",link:"https://github.com/coltonehrman/42sv_fillit",angle:u[1],size:n,ringRadius:l/2,setSpinning:v,spin:o&&h}),a.a.createElement(m,{text:"printf",link:"https://github.com/coltonehrman/42sv_printf",angle:u[2],size:n,ringRadius:l/2,setSpinning:v,spin:o&&h}),a.a.createElement(m,{text:"gnl",link:"https://github.com/coltonehrman/42sv_getnextline",angle:u[3],size:n,ringRadius:l/2,setSpinning:v,spin:o&&h}))},E=function(e){var t=e.circleSize,n=e.children,o=e.hovering,r=e.onMouseEnter,c=e.onMouseLeave,l=e.translateX,u=e.translateY,p=3.5*t*2.5,g=[0,72,144,216,288],h=Object(i.useState)(!0),v=Object(s.a)(h,2),d=v[0],E=v[1];return a.a.createElement(f,{title:"C0D3 Projects",size:p,onMouseEnter:r,onMouseLeave:c,hovering:o,styles:{transform:"translate(".concat(l,"px, ").concat(u,"px)")}},a.a.createElement(m,{text:"Kanban",link:"https://github.com/coltonehrman/js-kanban-board",angle:g[0],size:t,ringRadius:p/2,spinDirection:1,styles:{fontSize:"0.95rem"},setSpinning:E,spin:o&&d},a.a.createElement(m,{text:"JS",size:.65*t,angle:0,ringRadius:t,offset:-t/2,styles:{fontSize:"0.95rem"},spin:!0}),a.a.createElement(m,{text:"HTML5",size:.65*t,angle:72,ringRadius:t,offset:-t/2,styles:{fontSize:"0.6rem"},spin:!0}),a.a.createElement(m,{text:"CSS3",size:.65*t,angle:144,ringRadius:t,offset:-t/2,styles:{fontSize:"0.75rem"},spin:!0}),a.a.createElement(m,{text:"OOP",size:.65*t,angle:216,ringRadius:t,offset:-t/2,styles:{fontSize:"0.95rem"},spin:!0}),a.a.createElement(m,{text:"Local Storage",size:.65*t,angle:288,ringRadius:t,offset:-t/2,styles:{fontSize:"0.75rem"},spin:!0})),a.a.createElement(m,{text:"Mine Sweeper",link:"https://github.com/coltonehrman/js-minesweeper",angle:g[1],size:t,ringRadius:p/2,spinDirection:1,styles:{fontSize:"0.65rem"},setSpinning:E,spin:o&&d}),a.a.createElement(m,{text:"Selection Box",link:"https://github.com/coltonehrman/js-selection-box",angle:g[2],size:t,ringRadius:p/2,spinDirection:1,styles:{fontSize:"0.65rem"},setSpinning:E,spin:o&&d}),a.a.createElement(m,{text:"Lights Out",link:"https://github.com/coltonehrman/js-lights-out",angle:g[3],size:t,ringRadius:p/2,spinDirection:1,styles:{fontSize:"0.75rem"},setSpinning:E,spin:o&&d}),a.a.createElement(m,{text:"Google Fair",link:"https://github.com/coltonehrman/js-google-fair",angle:g[4],size:t,ringRadius:p/2,spinDirection:1,styles:{fontSize:"0.75rem"},setSpinning:E,spin:o&&d}),n)},b=function(e){var t=e.circleSize;return a.a.createElement(m,{picture:"https://avatars0.githubusercontent.com/u/12456288?s=460&u=7f9937308ca40060e5322c48a35315b7caf0b4bf&v=4",link:"https://github.com/coltonehrman",size:1.5*t,styles:{color:"#fff",borderWidth:"5px",borderColor:"#fff"},center:!0})},S=function(){var e=[Object(i.useState)(!1),Object(i.useState)(!1)],t=Object(i.useState)(50),n=Object(s.a)(t,2),o=n[0],r=n[1],l=Object(i.useState)(0),u=Object(s.a)(l,2),m=u[0],p=u[1],f=Object(i.useState)(0),h=Object(s.a)(f,2),S=h[0],x=h[1];return a.a.createElement(v.a,{className:"swipe-container",allowMouseEvents:!0,onSwipeMove:function(e,t){var n=e.x,i=e.y,a=m,o=S;"number"===typeof t.movementX&&"number"===typeof t.movementY?(a+=t.movementX,o+=t.movementY):(a+=.015*n,o+=.015*i),p(a),x(o)}},a.a.createElement("div",{onWheel:function(e){var t=e.deltaY;r(t>0?o+1:o-1)},className:"projects"},a.a.createElement(g,{onZoomIn:function(){return r(o+5)},onZoomOut:function(){return r(o-5)}}),a.a.createElement(E,{translateX:m,translateY:S,circleSize:1*o,hovering:e[0][0],onMouseEnter:function(){e[0][1](!0),e[1][1](!1)},onMouseLeave:function(){return e[0][1](!1)}},a.a.createElement(d,{circleSize:o,hovering:e[1][0],onMouseEnter:function(){e[1][1](!0),e[0][1](!1)},onMouseLeave:function(){e[1][1](!1),e[0][1](!0)}},a.a.createElement(c,{upperText:"Colton Ehrman",lowerText:"Web Developer"},a.a.createElement(b,{circleSize:o}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19);r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.854ed590.chunk.js.map