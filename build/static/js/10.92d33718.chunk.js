(this.webpackJsonpark=this.webpackJsonpark||[]).push([[10],{103:function(e,n,t){"use strict";t.r(n);var r=t(14),a=t(0),l=t.n(a),u=t(47);n.default=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(u.a,{fetchSuggestions:function(e){return fetch("https://api.github.com/search/users?q=".concat(e)).then((function(e){return e.json()})).then((function(e){var n=(e||{}).items;console.log(e.items);var t=n.slice(0,10).map((function(e){return Object(r.a)({value:e.login},e)}));return console.log(t),t}))},renderOption:function(e){return console.log("item",e),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"url: ",e.html_url),l.a.createElement("h2",null,"Name: ",e.value))}})))}}}]);
//# sourceMappingURL=10.92d33718.chunk.js.map