(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{37:function(e,t,n){},78:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(48),r=n.n(s),l=(n(37),n(14)),o=n.n(l),i=n(18),u=n(16),j=n(26),b=n(6),d=n(22),O=n(96),p=n(97),h=n(17),m=n.n(h),x=n(52),f=(n(78),n(95)),g=n(3),v=function(e){var t=e.setShowRegister,n=Object(c.useState)(null),a=Object(b.a)(n,2),s=a[0],r=a[1],l=Object(c.useState)(null),i=Object(b.a)(l,2),j=i[0],d=i[1],O=Object(c.useRef)(),p=Object(c.useRef)(),h=Object(c.useRef)(),x=function(){var e=Object(u.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),c={username:O.current.value,email:p.current.value,password:h.current.value};try{m.a.post("/register",c),r(!0)}catch(j){d(!0)}setTimeout((function(){t(!1)}),2e3);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"bg",children:Object(g.jsxs)("div",{className:"registerContainer",children:[Object(g.jsx)("div",{className:"logo",children:Object(g.jsx)("img",{src:"/images/logo.png",alt:"logo"})}),Object(g.jsxs)("form",{onSubmit:x,children:[Object(g.jsx)("input",{type:"text",placeholder:"Username",ref:O}),Object(g.jsx)("input",{type:"email",placeholder:"Email",ref:p}),Object(g.jsx)("input",{type:"password",placeholder:"Password",ref:h}),Object(g.jsx)("button",{type:"submit",children:"Register"}),s&&Object(g.jsx)("span",{className:"success",children:"Success, you can login"}),j&&Object(g.jsx)("span",{className:"error",children:"Something went wrong"})]}),Object(g.jsx)(f.a,{className:"registerCancel",onClick:function(){return t(!1)}})]})})};n(82);function w(e){var t=e.setShowLogin,n=e.setCurrentUsername,a=e.myStorage,s=Object(c.useState)(!1),r=Object(b.a)(s,2),l=r[0],i=r[1],j=Object(c.useRef)(),d=Object(c.useRef)(),O=function(){var e=Object(u.a)(o.a.mark((function e(c){var s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s={username:j.current.value,password:d.current.value},e.prev=2,e.next=5,m.a.post("/login",s);case 5:r=e.sent,n(r.data),console.log(r.data.user.username),a.setItem("user",r.data.user.username),t(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),i(!0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"bg",children:Object(g.jsxs)("div",{className:"loginContainer",children:[Object(g.jsx)("div",{className:"logo",children:Object(g.jsx)("img",{src:"/images/logo.png",alt:"logo"})}),Object(g.jsxs)("form",{onSubmit:O,children:[Object(g.jsx)("input",{autoFocus:!0,placeholder:"username",ref:j}),Object(g.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:d}),Object(g.jsx)("button",{className:"loginBtn",type:"submit",children:"Login"}),l&&Object(g.jsx)("span",{className:"failure",children:"Something went wrong!"})]}),Object(g.jsx)(f.a,{className:"loginCancel",onClick:function(){return t(!1)}})]})})}var S=function(){var e=window.localStorage,t=Object(c.useState)(e.getItem("user")),n=Object(b.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),l=Object(b.a)(r,2),h=l[0],f=l[1],S=Object(c.useState)(null),y=Object(b.a)(S,2),N=y[0],C=y[1],k=Object(c.useState)(null),R=Object(b.a)(k,2),z=R[0],I=R[1],L=Object(c.useState)(null),E=Object(b.a)(L,2),B=E[0],D=E[1],T=Object(c.useState)(null),A=Object(b.a)(T,2),F=A[0],U=A[1],G=Object(c.useState)(0),J=Object(b.a)(G,2),P=J[0],Q=J[1],Y=Object(c.useState)({latitude:47.040182,longitude:17.071727,zoom:4}),_=Object(b.a)(Y,2),X=_[0],Z=_[1],H=Object(c.useState)(!1),M=Object(b.a)(H,2),V=M[0],W=M[1],q=Object(c.useState)(!1),K=Object(b.a)(q,2),$=K[0],ee=K[1],te=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:a,title:B,desc:F,rating:P,lat:z.lat,long:z.long},e.prev=2,e.next=5,m.a.post("/pins",n);case 5:c=e.sent,f([].concat(Object(i.a)(h),[c.data])),I(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/pins");case 3:t=e.sent,f(t.data.pins),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(g.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(g.jsxs)(d.c,Object(j.a)(Object(j.a)({},X),{},{mapboxApiAccessToken:"pk.eyJ1Ijoic2U3ZW5zIiwiYSI6ImNrcmpmbGF0czEydGEyb3BndXpnemZnYnUifQ.QRQXLCToGvOHwrrYxR29Ew",width:"100%",height:"100%",transitionDuration:"100",mapStyle:"mapbox://styles/se7ens/ckrjhrly78bpr19nzwh89oxzu",onViewportChange:function(e){return Z(e)},onDblClick:a&&function(e){var t=Object(b.a)(e.lngLat,2),n=t[0],c=t[1];I({lat:c,long:n})},children:[h.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{latitude:e.lat,longitude:e.long,offsetLeft:-3.5*X.zoom,offsetTop:-7*X.zoom,children:Object(g.jsx)(O.a,{style:{fontSize:7*X.zoom,color:a===e.username?"tomato":"slateblue",cursor:"pointer"},onClick:function(){return t=e._id,n=e.lat,c=e.long,C(t),void Z(Object(j.a)(Object(j.a)({},X),{},{latitude:n,longitude:c}));var t,n,c}})}),e._id===N&&Object(g.jsx)(d.b,{latitude:e.lat,longitude:e.long,closeButton:!0,closeOnClick:!1,onClose:function(){return C(null)},anchor:"left",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("label",{children:"Place"}),Object(g.jsx)("h4",{className:"place",children:e.title}),Object(g.jsx)("label",{children:"Review"}),Object(g.jsx)("p",{className:"desc",children:e.desc}),Object(g.jsx)("label",{children:"Rating"}),Object(g.jsx)("div",{className:"stars",children:Array(e.rating).fill(Object(g.jsx)(p.a,{className:"star"}))}),Object(g.jsx)("label",{children:"Information"}),Object(g.jsxs)("span",{className:"username",children:["Created by ",Object(g.jsx)("b",{children:e.username})]}),Object(g.jsx)("span",{className:"date",children:Object(x.a)(e.createdAt)})]})},e._id)]})})),z&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{latitude:z.lat,longitude:z.long,offsetLeft:-3.5*X.zoom,offsetTop:-7*X.zoom,children:Object(g.jsx)(O.a,{style:{fontSize:7*X.zoom,color:"tomato",cursor:"pointer"}})}),Object(g.jsx)(d.b,{latitude:z.lat,longitude:z.long,closeButton:!0,closeOnClick:!1,onClose:function(){return I(null)},anchor:"left",children:Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:te,children:[Object(g.jsx)("label",{children:"Title"}),Object(g.jsx)("input",{placeholder:"Enter a title",autoFocus:!0,onChange:function(e){return D(e.target.value)}}),Object(g.jsx)("label",{children:"Description"}),Object(g.jsx)("textarea",{placeholder:"Say us something about this place.",onChange:function(e){return U(e.target.value)}}),Object(g.jsx)("label",{children:"Rating"}),Object(g.jsxs)("select",{onChange:function(e){return Q(e.target.value)},children:[Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"})]}),Object(g.jsx)("button",{type:"submit",className:"submitButton",children:"Add Pin"})]})})})]}),a?Object(g.jsx)("button",{className:"button logout",onClick:function(){s(null),e.removeItem("user")},children:"Log out"}):Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("button",{className:"button login",onClick:function(){return ee(!0)},children:"Log in"}),Object(g.jsx)("button",{className:"button register",onClick:function(){return W(!0)},children:"Register"})]}),V&&Object(g.jsx)(v,{setShowRegister:W}),$&&Object(g.jsx)(w,{setShowLogin:ee,setCurrentUsername:s,myStorage:e})]}))})};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.507bcc31.chunk.js.map