"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{390:function(e,t,n){n.r(t);var r=n(439),c=n(791),a=n(689),o=n(565),s=n(184);t.default=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)(null),n=(0,r.Z)(t,2),u=n[0],i=n[1];if((0,c.useEffect)((function(){o.E.getMoviesCredits(e).then((function(e){return i(e.cast)}))}),[e]),u)return(0,s.jsx)("ul",{children:u.map((function(e){var t=e.profile_path,n=e.name,r=e.character,c=e.id;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:n,width:"120px"}),(0,s.jsx)("p",{children:n}),(0,s.jsxs)("p",{children:["Character: ",r]})]},c)}))})}},565:function(e,t,n){n.d(t,{E:function(){return h}});var r=n(861),c=n(671),a=n(144),o=n(757),s=n.n(o),u="https://api.themoviedb.org/3/",i="aa05d9ef1feff0e96ac321d8773a5c67",p=function(){function e(){(0,c.Z)(this,e),this.searchQuery="",this.page=1}return(0,a.Z)(e,[{key:"getPopularMovies",value:function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"trending/movie/day?api_key=").concat(i,"&page=").concat(this.page));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,r=n,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMovieByQuery",value:function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(this.searchQuery,"&page=").concat(this.page));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMoviesDetails",value:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=").concat(this.lang));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("error");case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMoviesCredits",value:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=").concat(this.lang));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("error");case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMoviesRewiews",value:function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=").concat(this.lang));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("error");case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"pages",get:function(){return this.page},set:function(e){this.page=e}}]),e}(),h=new p},861:function(e,t,n){function r(e,t,n,r,c,a,o){try{var s=e[a](o),u=s.value}catch(i){return void n(i)}s.done?t(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var o=e.apply(t,n);function s(e){r(o,c,a,s,u,"next",e)}function u(e){r(o,c,a,s,u,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=390.94dcf94f.chunk.js.map