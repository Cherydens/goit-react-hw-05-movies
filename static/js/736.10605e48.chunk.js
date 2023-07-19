"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,o=e(5861),u=e(9439),i=e(4687),s=e.n(i),p=e(2791),d=e(7689),f=e(5135),l=e(168),h=e(5706),g=h.Z.ul(r||(r=(0,l.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 12px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=h.Z.li(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),v=h.Z.div(c||(c=(0,l.Z)(["\n  padding: 24px;\n"]))),x=e(157),w=e(5067),y=e(184);function Z(){var n=(0,d.UO)().movieId,t=(0,p.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],c=(0,p.useState)("idle"),i=(0,u.Z)(c,2),l=i[0],h=i[1];return(0,p.useEffect)((function(){if(n){var t=function(){var n=(0,o.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h("pending"),n.prev=1,n.next=4,(0,f.eH)(t);case 4:if(e=n.sent,0!==(r=e.cast).length){n.next=9;break}return h("notFound"),n.abrupt("return");case 9:a(r),h("resolved"),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(1),console.error(n.t0.message),h("rejected");case 17:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(t){return n.apply(this,arguments)}}();t(n)}}),[n]),(0,y.jsxs)(y.Fragment,{children:["pending"===l&&(0,y.jsx)(w.Z,{}),"resolved"===l&&(0,y.jsx)(g,{children:r.map((function(n){var t=n.credit_id,e=n.name,r=n.profile_path,a=n.character;return(0,y.jsxs)(m,{children:[(0,y.jsx)("img",{src:r?["https://image.tmdb.org/t/p/w500".concat(r)]:x,alt:e,width:120}),e&&(0,y.jsx)("p",{children:e}),a&&(0,y.jsxs)("p",{children:["Character: ",a]})]},t)}))}),"notFound"===l&&(0,y.jsx)(v,{children:"We don't have any cast for this movie."}),"rejected"===l&&(0,y.jsx)("div",{children:"Ooops...... Something went wrong!"})]})}},5135:function(n,t,e){e.d(t,{$7:function(){return k},MF:function(){return h},Mc:function(){return m},eH:function(){return x},oJ:function(){return y}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),u="55796f17387279855c720b27f49c25f1",i="https://api.themoviedb.org/3";o.Z.defaults.baseURL=i,o.Z.defaults.headers.common.Authorization=u;var s="/trending/movie/day",p="/movie",d="/search/movie",f="en-US",l="false";function h(){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,o.Z.get("".concat(i).concat(s,"?api_key=").concat(u,"&page=").concat(t,"&language=").concat(f));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i).concat(p,"/").concat(t,"?api_key=").concat(u,"&language=").concat(f));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i).concat(p,"/").concat(t,"/credits?api_key=").concat(u,"&language=").concat(f));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i).concat(p,"/").concat(t,"/reviews?api_key=").concat(u,"&language=").concat(f));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return b.apply(this,arguments)}function b(){return b=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,o.Z.get("".concat(i).concat(d,"?query=").concat(t,"&api_key=").concat(u,"&page=").concat(e,"&include_adult=").concat(l,"&language=").concat(f));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)}))),b.apply(this,arguments)}},157:function(n,t,e){n.exports=e.p+"static/media/no-photo.450bbce1ab9d3c34aee3.jpg"}}]);
//# sourceMappingURL=736.10605e48.chunk.js.map