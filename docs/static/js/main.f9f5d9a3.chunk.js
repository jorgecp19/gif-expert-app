(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(8),a=n.n(r),i=n(2),s=n(10),u=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:[Object(u.jsx)("h2",{children:"Add Category"}),Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}}),Object(u.jsx)("button",{children:"Add"})]})},j=n(11),d=n(6),l=n.n(d),b=n(9),p=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,c,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"mlH3MaWG05V2n8uiWlq2Kks7bUcij1zP","http://api.giphy.com/v1/gifs",n="".concat("http://api.giphy.com/v1/gifs","/search?api_key=").concat("mlH3MaWG05V2n8uiWlq2Kks7bUcij1zP","&q=").concat(encodeURI(e),"&limit=10"),t.next=5,fetch(n);case 5:return c=t.sent,t.next=8,c.json();case 8:return r=t.sent,a=r.data.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=(n(7),function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInUp",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})}),h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){return a({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a?"Cargando...":Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)(["TS madison"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})};a.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))},7:function(t,e,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.f9f5d9a3.chunk.js.map