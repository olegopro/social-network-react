(this["webpackJsonpreact-first-project"]=this["webpackJsonpreact-first-project"]||[]).push([[0],{127:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(44),a=n(5),c="SEND-MESSAGE",s={messages:[{id:1,message:"Hello my name is"},{id:2,message:"How is your it kamasutra"},{id:3,message:"Yo"},{id:4,message:"Bye bye"}],dialogs:[{id:1,name:"Oleg"},{id:2,name:"Dima"},{id:3,name:"Olga"},{id:4,name:"Valentina"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:n}])});default:return e}}},136:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__17MJB"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(132),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"670cca21-4ec0-47bd-8966-00833f97feaf"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u043c\u0435\u0442\u043e\u0434"),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},163:function(e,t,n){},172:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},291:function(e,t,n){"use strict";n.r(t);n(163);var r=n(35),a=n(36),c=n(38),s=n(37),i=n(5),o=n(40),u=n(0),l=n.n(u),d=n(1),f=function(e){return function(t){return Object(d.jsx)(u.Suspense,{fallback:Object(d.jsx)(o.a,{}),children:Object(d.jsx)(e,Object(i.a)({},t))})}},j=n(13),b=n(10),p=n(9),g=(n(172),n(11)),h=n.n(g),O=n(17),m=n(45),v=n(15),x="samurai-network/auth/SET_USER_DATA",w={id:null,email:null,login:null,isAuth:!1},P=function(e,t,n,r){return{type:x,payload:{id:e,email:t,login:n,isAuth:r}}},y=function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var n,r,a,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,s=r.login,t(P(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}},_=n(21),S=n(92),k=n.n(S),I=function(e){return Object(d.jsxs)("header",{className:k.a.header,children:[Object(d.jsx)("img",{src:"https://bit.ly/3cul3r8",alt:""}),Object(d.jsx)("div",{className:k.a.loginBlock,children:e.isAuth?Object(d.jsxs)("div",{children:[e.login," - ",Object(d.jsx)("button",{onClick:e.logout,children:"logout"})]}):Object(d.jsx)(_.b,{to:"/login",children:"Login"})})]})},N=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)(I,Object(i.a)({},this.props))}}]),n}(l.a.Component),E=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.logout();case 2:0===e.sent.data.resultCode&&t(P(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(N),U=n(128),T=n(75),F=n(52),z=n.n(F),A=n(33),L=Object(U.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(d.jsxs)("form",{onSubmit:t,children:[Object(A.c)("Email","email",[T.b],A.a),Object(A.c)("Password","password",[T.b],A.a,{type:"password"}),Object(A.c)(null,"remeberMe",[],A.a,{type:"checkbox"},"Remember me"),n&&Object(d.jsx)("div",{className:z.a.formSummaryError,children:n}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Login"})})]})})),M=Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(O.a)(h.a.mark((function r(a){var c,s;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(y()):(s=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(m.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(d.jsx)(b.a,{to:"/profile"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"LOGIN"}),Object(d.jsx)(L,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),R=n(23),D=n.n(R);var B=function(){return Object(d.jsxs)("nav",{className:D.a.nav,children:[Object(d.jsx)("div",{className:D.a.item,children:Object(d.jsx)(_.b,{to:"/profile",activeClassName:D.a.active,children:"Profiles"})}),Object(d.jsx)("div",{className:D.a.item,children:Object(d.jsx)(_.b,{to:"/dialogs",activeClassName:D.a.active,children:"Dialogs"})}),Object(d.jsx)("div",{className:D.a.item,children:Object(d.jsx)(_.b,{to:"/users",activeClassName:D.a.active,children:"Users"})}),Object(d.jsx)("div",{className:D.a.item,children:Object(d.jsx)("a",{children:"News"})}),Object(d.jsx)("div",{className:D.a.item,children:Object(d.jsx)("a",{children:"Music"})}),Object(d.jsx)("div",{className:D.a.item,children:Object(d.jsx)("a",{children:"Settings"})})]})},G=n(44),H=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},J="FOLLOW",K="UNFOLLOW",V="SET_USERS",W="SET_CURRENT_PAGE",Y="SET_TOTAL_USERS_COUNT",X="TOGGLE_IS_FETCHING",Z="TOGGLE_IS_FOLLOWING_PROGRESS",q={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Q=function(e){return{type:J,userId:e}},$=function(e){return{type:K,userId:e}},ee=function(e){return{type:W,currentPage:e}},te=function(e){return{type:X,isFetching:e}},ne=function(e,t){return{type:Z,isFetching:e,userId:t}},re=function(){var e=Object(O.a)(h.a.mark((function e(t,n,r,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ne(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(ne(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(i.a)(Object(i.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!0})});case K:return Object(i.a)(Object(i.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!1})});case V:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case W:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case Y:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case X:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case Z:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(G.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ce=n(134),se=Object(ce.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ie=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.totalUsersCount},ue=function(e){return e.usersPage.currentPage},le=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProgress},fe=n(56),je=n(67),be=n(129),pe=n(71),ge=n.n(pe),he=n(135),Oe=n.n(he),me=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,c=e.portionSize,s=void 0===c?10:c,i=Math.ceil(t/n),o=[],l=1;l<=i;l++)o.push(l);var f=Math.ceil(i/s),j=Object(u.useState)(1),b=Object(be.a)(j,2),p=b[0],g=b[1],h=(p-1)*s+1,O=p*s;return Object(d.jsxs)("div",{className:ge.a.paginator,children:[p>1&&Object(d.jsx)("button",{onClick:function(){g(p)},children:"PREV"}),o.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(d.jsx)("span",{className:Oe()(Object(je.a)({},ge.a.selectedPage,r===e),ge.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),f>p&&Object(d.jsx)("button",{onClick:function(){g(p+1)},children:"NEXT"})]})},ve=n.p+"static/media/avatar.e582e4ba.png",xe=n(136),we=n.n(xe),Pe=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("div",{children:Object(d.jsx)(_.b,{to:"/profile/"+t.id,children:Object(d.jsx)("img",{src:null!=t.photos.small?t.photos.small:ve,className:we.a.userPhoto,alt:""})})})}),Object(d.jsx)("span",{children:Object(d.jsx)("div",{children:t.followed?Object(d.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"unfollow"}):Object(d.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"follow"})})}),Object(d.jsxs)("span",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:t.name}),Object(d.jsx)("div",{children:t.status})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:"user.location.city"}),Object(d.jsx)("div",{children:"user.location.country"})]})]})]})},ye=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,s=Object(fe.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(d.jsxs)("div",{children:[Object(d.jsx)(me,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),c.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(Pe,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)})}))]})},Ce=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[this.props.isFetching?Object(d.jsx)(o.a,{}):null,Object(d.jsx)(ye,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(l.a.Component),_e=Object(p.d)(Object(j.b)((function(e){return{users:se(e),pageSize:ie(e),totalUsersCount:oe(e),currentPage:ue(e),isFetching:le(e),followingInProgress:de(e)}}),{follow:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:re(n,e,v.c.follow.bind(v.c),Q);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:re(n,e,v.c.unfollow.bind(v.c),$);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:ee,toggleFollowingProgress:ne,getUsers:function(e,t){return function(){var n=Object(O.a)(h.a.mark((function n(r){var a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(te(!0)),r(ee(e)),n.next=4,v.c.getUsers(e,t);case 4:a=n.sent,r(te(!1)),r((s=a.items,{type:V,users:s})),r((c=a.totalCount,{type:Y,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ce),Se="INITIALIZED_SUCCESS",ke={initialized:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(i.a)(Object(i.a)({},e),{},{initialized:!0});default:return e}},Ne=l.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Ee=l.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),Ue=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(E,{}),Object(d.jsx)(B,{}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(b.b,{path:"/dialogs",render:f(Ne)}),Object(d.jsx)(b.b,{path:"/profile/:userId?",render:f(Ee)}),Object(d.jsx)(b.b,{path:"/users",render:function(){return Object(d.jsx)(_e,{})}}),Object(d.jsx)(b.b,{path:"/login",render:function(){return Object(d.jsx)(M,{})}})]})]}):Object(d.jsx)(o.a,{})}}]),n}(u.Component),Te=Object(p.d)(b.f,Object(j.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(y());Promise.all([t]).then((function(){e({type:Se})}))}}}))(Ue),Fe=n(65),ze=n.n(Fe),Ae=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,296)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},Le=n(130),Me=n(137),Re=n(127),De=n(97),Be={},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return e},He=Object(p.c)({profilePage:De.b,dialogsPage:Re.a,sidebar:Ge,usersPage:ae,auth:C,form:Le.a,app:Ie}),Je=Object(p.e)(He,Object(p.a)(Me.a));ze.a.render(Object(d.jsx)(_.a,{children:Object(d.jsx)(j.a,{store:Je,children:Object(d.jsx)(Te,{})})}),document.getElementById("root")),Ae()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(5),a=n(56),c=(n(0),n(90)),s=n(52),i=n.n(s),o=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(o.jsx)("div",{children:a}),c&&Object(o.jsx)("span",{children:r})]})},l=function(e){e.input,e.meta,e.child;var t=Object(a.a)(e,["input","meta","child"]);return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},e.input),t))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},s)),i]})}},40:function(e,t,n){"use strict";var r=n.p+"static/media/loader.c02004e4.svg",a=n(1);t.a=function(e){return Object(a.jsx)("img",{src:r,alt:""})}},52:function(e,t,n){e.exports={formControl:"FormControl_formControl__2tDgs",error:"FormControl_error__2w4xO",formSummaryError:"FormControl_formSummaryError__2J517"}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"},a=function(e){return function(t){if(t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},92:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return h}));var r=n(11),a=n.n(r),c=n(17),s=n(44),i=n(5),o=n(15),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f={posts:[{id:1,message:"Hello my name is",likesCount:12},{id:2,message:"How is your it kamasutra",likesCount:15},{id:3,message:"Yo"},{id:4,message:"Bye bye"}],profile:null,status:""},j=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});default:return e}}}},[[291,1,2]]]);
//# sourceMappingURL=main.36df7ae2.chunk.js.map