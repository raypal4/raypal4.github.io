(this.webpackJsonpraypal4=this.webpackJsonpraypal4||[]).push([[0],{34:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c,a=n(0),i=n.n(a),s=n(25),o=n.n(s),r=n(17),l=n(8),j=n(9),b=n(11),d=n(10),u=n(18),h=n.n(u),m=(n(34),n.p+"static/media/profile.64a59700.jpg"),O=n(12),x=n(1),p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"menuButtonClick",value:function(){document.querySelector(".side-bar").classList.toggle("active")}},{key:"render",value:function(){return document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".tooltipped");h.a.Tooltip.init(e)})),Object(x.jsxs)("div",{className:"side-bar z-depth-1",children:[Object(x.jsxs)("div",{className:"logo-content",children:[Object(x.jsx)("div",{className:"logo",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col s4",children:Object(x.jsx)("img",{className:"responsive-img",src:m})}),Object(x.jsxs)("div",{className:"col s8",children:[Object(x.jsx)("div",{className:"logo-name",children:"Raynold Tan"}),Object(x.jsx)("div",{className:"logo-subtext",children:"SE Developer"})]})]})}),Object(x.jsx)("i",{className:"material-icons",id:"menuBtn",onClick:this.menuButtonClick.bind(this),children:"menu"})]}),Object(x.jsx)("ul",{className:"nav-list",children:[{title:"Home",link:"/",icon:"home"},{title:"About",link:"/about",icon:"person"}].map((function(e,t){return Object(x.jsx)("li",{children:Object(x.jsxs)(O.b,{className:"tooltipped",to:e.link,"data-position":"right","data-tooltip":e.title,children:[Object(x.jsx)("i",{className:"material-icons",children:e.icon}),Object(x.jsx)("span",{className:"link-name",children:e.title})]})},t)}))})]})}}]),n}(a.Component),v=(n(40),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(x.jsx)("h1",{children:"Hello world"})}}]),n}(a.Component)),g=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(x.jsx)("h1",{children:"About"})}}]),n}(a.Component),f=n(2),k=n(15),y=n(26),N=Object(k.b)(c||(c=Object(y.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.50s linear;\n  }\n  "])),(function(e){return e.theme.body}),(function(e){return e.theme.text})),w={body:"white",text:"black",background:"white"},C={body:"black",text:"white",background:"black"},S=function(e){e.theme;var t=e.toggleTheme;return Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)("p",{children:"Dark Mode"}),Object(x.jsx)("div",{className:"switch",onChange:t,children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox"}),Object(x.jsx)("span",{className:"lever"})]})})]})},A=function(){var e=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(r.a)(i,2),o=s[0],l=s[1],j=function(e){window.localStorage.setItem("theme",e),c(e)};return Object(a.useEffect)((function(){var e=window.localStorage.getItem("theme");e?c(e):j("light"),l(!0)}),[]),[n,function(){j("light"===n?"dark":"light")},o]}(),t=Object(r.a)(e,3),n=t[0],c=t[1],s=(t[2],"light"===n?w:C);return Object(x.jsx)(i.a.Fragment,{children:Object(x.jsx)(k.a,{theme:s,children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{}),Object(x.jsx)(p,{}),Object(x.jsxs)("main",{className:"content-container",children:[Object(x.jsx)(S,{theme:n,toggleTheme:c}),Object(x.jsx)(f.a,{path:"/",exact:!0,component:v}),Object(x.jsx)(f.a,{path:"/about",component:g})]})]})})})};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(O.a,{children:Object(x.jsx)(A,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1d13fc2f.chunk.js.map