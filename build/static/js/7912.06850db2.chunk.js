"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7912,7223],{64494:function(e,n,t){t.d(n,{x6:function(){return d},Lk:function(){return h},qh:function(){return x},tf:function(){return A},S8:function(){return S},ns:function(){return E},q3:function(){return R},cG:function(){return W}});var r=t(1413),a=t(72791),s=t(57689),c=[{path:"/bannerlist",exact:!0,name:"Home"},{path:"/addbanner",name:"Add",element:a.lazy((function(){return Promise.all([t.e(2388),t.e(4532)]).then(t.bind(t,74532))}))},{path:"/editbanner/:id",name:"Edit",element:a.lazy((function(){return e=function(){return Promise.all([t.e(2388),t.e(8205),t.e(5551),t.e(3860)]).then(t.bind(t,63860))},new Promise((function(n,t){var r=JSON.parse(window.sessionStorage.getItem("retry-lazy-refreshed")||"false");e().then((function(e){window.sessionStorage.setItem("retry-lazy-refreshed","false"),n(e)})).catch((function(e){if(!r)return window.sessionStorage.setItem("retry-lazy-refreshed","true"),window.location.reload();t(e)}))}));var e}))},{path:"/bannerlist",name:"Banners",element:a.lazy((function(){return Promise.all([t.e(2388),t.e(8205),t.e(1215)]).then(t.bind(t,41215))}))},{path:"/managerlist",name:"Manager list",element:a.lazy((function(){return Promise.all([t.e(2388),t.e(5328)]).then(t.bind(t,55328))}))},{path:"/addfood",name:"Add food excel",element:a.lazy((function(){return Promise.all([t.e(2388),t.e(1402)]).then(t.bind(t,91402))}))},{path:"/adddrink",name:"Add drink excel",element:a.lazy((function(){return Promise.all([t.e(2388),t.e(2336)]).then(t.bind(t,52336))}))}],o=t(78983),i=t(80184),l=function(){var e=(0,s.TH)().pathname,n=function(e){var n=[];return e.split("/").reduce((function(e,t,r,a){var s="".concat(e,"/").concat(t),o=function(e,n){var t=n.find((function(n){return n.path===e}));return!!t&&t.name}(s,c);return o&&n.push({pathname:s,name:o,active:r+1===a.length}),s})),n}(e);return(0,i.jsxs)(o.fj,{className:"m-0 ms-2",children:[(0,i.jsx)(o.Sd,{href:"/",children:"Home"}),n.map((function(e,n){return(0,a.createElement)(o.Sd,(0,r.Z)((0,r.Z)({},e.active?{active:!0}:{href:e.pathname}),{},{key:n}),e.name)}))]})},d=a.memo(l),u=t(47223),m=function(){return(0,i.jsx)(o.KB,{lg:!0,children:(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)(o.LQ,{color:"primary"}),children:(0,i.jsx)(s.Z5,{children:(0,i.jsx)(s.AW,{element:(0,i.jsx)(u.default,{}),children:c.map((function(e,n){return e.element&&(0,i.jsx)(s.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,i.jsx)(e.element,{})},n)}))})})})})},h=a.memo(m),f=function(){return(0,i.jsxs)(o.pG,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{href:"a",target:"_blank",rel:"noopener noreferrer",children:"F.M.L"}),(0,i.jsx)("span",{className:"ms-1",children:"\xa9 2022 Created."})]}),(0,i.jsxs)("div",{className:"ms-auto",children:[(0,i.jsx)("span",{className:"me-1",children:"Powered by"}),(0,i.jsx)("a",{href:"https://bpointer.com/",target:"_blank",rel:"noopener noreferrer",children:"Bpointer Private Limited"})]})]})},x=a.memo(f),j=t(59434),b=t(24846),p=t(92402);var v=function(){var e=(0,s.s0)();return(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"btn btn-danger",onClick:function(){localStorage.clear(),e("/login")},children:"LogOut"})})},g=function(){return(0,i.jsxs)(o.w5,{variant:"nav-item",children:[(0,i.jsx)(o.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,i.jsx)(o.cU,{src:p,size:"md"})}),(0,i.jsx)(o.$H,{className:"pt-0",placement:"bottom-end",children:(0,i.jsx)(o.$f,{children:(0,i.jsx)(v,{})})})]})},A=function(){var e=(0,j.I0)(),n=(0,j.v9)((function(e){return e.sidebarShow}));return(0,i.jsxs)(o.PO,{position:"sticky",className:"mb-4",children:[(0,i.jsxs)(o.KB,{children:[(0,i.jsx)(o.X4,{className:"ps-1",onClick:function(){return e({type:"set",sidebarShow:!n})}}),(0,i.jsx)(o.g3,{style:{display:"flex",justifyContent:"flex-end"},children:(0,i.jsx)(g,{})})]}),(0,i.jsx)(o.rc,{}),(0,i.jsx)(o.KB,{fluid:!0,children:(0,i.jsx)(d,{})})]})},w=t(44925),N=t(11087),M=["component","name","badge","icon"],Y=["component","name","icon","to"],P=function(e){var n=e.items,t=(0,s.TH)(),c=function(e,n,t){return(0,i.jsxs)(i.Fragment,{children:[n&&n,e&&e,t&&(0,i.jsx)(o.C_,{color:t.color,className:"ms-auto",children:t.text})]})},l=function(e,n){var t=e.component,s=e.name,o=e.badge,i=e.icon,l=(0,w.Z)(e,M),d=t;return(0,a.createElement)(d,(0,r.Z)((0,r.Z)({},l.to&&!l.items&&{component:N.OL}),{},{key:n},l),c(s,i,o))},d=function e(n,a){var s,o=n.component,d=n.name,u=n.icon,m=n.to,h=(0,w.Z)(n,Y),f=o;return(0,i.jsx)(f,(0,r.Z)((0,r.Z)({idx:String(a),toggler:c(d,u),visible:t.pathname.startsWith(m)},h),{},{children:null===(s=n.items)||void 0===s?void 0:s.map((function(n,t){return n.items?e(n,t):l(n,t)}))}),a)};return(0,i.jsx)(a.Fragment,{children:n&&n.map((function(e,n){return e.items?d(e,n):l(e,n)}))})},y=t.p+"static/media/bbq_logo.fa9853088754727f01a3.png",z=t(34358),I=(t(82454),[{component:o.U6,name:"Banners",to:"/bannerlist"},{component:o.U6,name:"Manager list",to:"/managerlist"},{component:o.U6,name:"Add food excel",to:"/addfood"},{component:o.U6,name:"Add drink excel",to:"/adddrink"}]),L=function(){var e=(0,j.I0)(),n=(0,j.v9)((function(e){return e.sidebarUnfoldable})),t=(0,j.v9)((function(e){return e.sidebarShow}));return(0,i.jsxs)(o.z3,{position:"fixed",unfoldable:n,visible:t,onVisibleChange:function(n){e({type:"set",sidebarShow:n})},children:[(0,i.jsx)(o.Dl,{className:"d-none d-md-flex",to:"/",children:(0,i.jsx)("img",{src:y,style:{width:"75px",height:"30px",backgroundColor:"#3c4b64",display:"flex",justifyContent:"left"}})}),(0,i.jsx)(o.Xk,{children:(0,i.jsx)(z.Z,{children:(0,i.jsx)(P,{items:I})})}),(0,i.jsx)(o.iv,{className:"d-none d-lg-flex",onClick:function(){return e({type:"set",sidebarUnfoldable:!n})}})]})},S=a.memo(L),k=function(e){var n=e.content,t=e.href,r=e.name,a="s"===r.slice(-1),s="https://coreui.io/react/docs/".concat(t);return(0,i.jsxs)(o.e_,{color:"info",className:"bg-white",children:[n||"A React ".concat(r," component ").concat(a?"have":"has"," been created as a native React.js version\n      of Bootstrap ").concat(r,". ").concat(r," ").concat(a?"are":"is"," delivered with some new features,\n      variants, and unique design that matches CoreUI Design System requirements."),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For more information please visit our official"," ",(0,i.jsx)(o.h7,{href:s,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})},E=a.memo(k),C=["href","name","text"],K=function(e){var n=e.href,t=e.name,a=e.text,s=(0,w.Z)(e,C),c=t?"https://coreui.io/react/docs/components/".concat(t):n;return(0,i.jsx)("div",{className:"float-end",children:(0,i.jsx)(o.h7,(0,r.Z)((0,r.Z)({},s),{},{href:c,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:(0,i.jsx)("small",{className:"text-medium-emphasis",children:a||"docs"})}))})},W=a.memo(K),H=t(52001),U=t(87857),O=function(e){var n=e.children,t=e.href,r="https://coreui.io/react/docs/".concat(t);return(0,i.jsxs)("div",{className:"example",children:[(0,i.jsxs)(o.n2,{variant:"tabs",children:[(0,i.jsx)(o.U6,{children:(0,i.jsxs)(o.AQ,{href:"#",active:!0,children:[(0,i.jsx)(b.Z,{icon:H.B,className:"me-2"}),"Preview"]})}),(0,i.jsx)(o.U6,{children:(0,i.jsxs)(o.AQ,{href:r,target:"_blank",children:[(0,i.jsx)(b.Z,{icon:U.I,className:"me-2"}),"Code"]})})]}),(0,i.jsx)(o.gr,{className:"rounded-bottom",children:(0,i.jsx)(o.IA,{className:"p-3 preview",visible:!0,children:n})})]})},R=a.memo(O)},66265:function(e,n,t){t.r(n);t(72791);var r=t(64494),a=t(80184);n.default=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(r.S8,{}),(0,a.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,a.jsx)(r.tf,{}),(0,a.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,a.jsx)(r.Lk,{})}),(0,a.jsx)(r.qh,{})]})]})}},47223:function(e,n,t){t.r(n);t(72791);var r=t(57689),a=t(80184);n.default=function(){return localStorage.getItem("auth_token")?(0,a.jsx)(r.j3,{}):(0,a.jsx)(r.Fg,{to:"/login"})}},92402:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=7912.06850db2.chunk.js.map