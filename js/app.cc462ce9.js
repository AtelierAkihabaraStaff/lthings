(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],f=0,h=[];f<o.length;f++)s=o[f],i[s]&&h.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/lthings/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"tile is-ancestor"},[n("div",{staticClass:"tile is-vertical is-1"},[n("div",{staticClass:"tile"},[n("div",{staticClass:"tile is-partent is-vertical"},[t._m(0),n("article",{staticClass:"tile is-child notification is-danger"},[n("div",{staticClass:"column is-half"},[n("div",{staticClass:"field is-grouped"},[n("button",{staticClass:"button is-info is-focused control",class:{"is-loading":this.loading},attrs:{disabled:t.loading},on:{click:t.startWork}},[t._v("出勤")]),n("button",{staticClass:"button is-success is-focused control",class:{"is-loading":this.loading},attrs:{disabled:t.loading},on:{click:t.startRest}},[t._v("休憩")]),n("button",{staticClass:"button is-warning is-focused control",class:{"is-loading":this.loading},attrs:{disabled:t.loading},on:{click:t.finishRest}},[t._v("戻り")]),n("button",{staticClass:"button is-primary is-focused control",class:{"is-loading":this.loading},attrs:{disabled:t.loading},on:{click:t.finishWork}},[t._v("退勤")])])])])])])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"tile is-child notification is-info"},[n("p",{staticClass:"title"},[t._v("アトリエ秋葉原勤怠")])])}],s=(n("ac6a"),n("5df3"),n("96cf"),n("3b8d")),o=(n("92c6"),n("bc3a")),c=n.n(o),u=n("4be7"),l=r["a"].extend({name:"home",data:function(){return{USER_SERVICE_UUID:"b7ea8954-0def-4aca-851e-612dc2d6ce2e",LED_CHARACTERISTIC_UUID:"E9062E71-9E62-4BC6-B0D3-35CDCD9B027B",bleConnect:!1,bleStatus:"Await Connecting A Device...",userId:null,loading:!1}},methods:{slackPost:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={method:"post",baseURL:"https://hooks.slack.com/services/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",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:{text:e}},t.next=4,c.a.request(n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert("エラーが発生しました。",t.t0);case 9:case"end":return t.stop()}},t,null,[[0,6]])}));function e(e){return t.apply(this,arguments)}return e}(),spreadsheetPost:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={method:"post",baseURL:"https://script.google.com/macros/s/AKfycbxHZl43hpSYjynZAUnnA7IYpV2mO3B_eFGkhVLtqYOo-5T-uXOE/exec",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:{id:this.userId,text:e}},t.next=4,c.a.request(n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert("エラーが発生しました。",t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(e){return t.apply(this,arguments)}return e}(),liffCheckAvailabilityAndDo:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,liff.bluetooth.getAvailability();case 3:n=t.sent,n?e():(this.bleStatus="Switch bluetooth on.",setTimeout(function(){return r.liffCheckAvailabilityAndDo(e)},1e4)),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),alert("Switch bluetooth on.");case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(e){return t.apply(this,arguments)}return e}(),liffRequestDevice:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,liff.bluetooth.requestDevice();case 2:return e=t.sent,t.next=5,e.gatt.connect();case 5:this.bleConnect=!0,this.bleStatus="Connected to the device.";case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initializeLiff:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,liff.initPlugins(["bluetooth"]);case 2:return this.liffCheckAvailabilityAndDo(function(){return n.liffRequestDevice()}),t.next=5,liff.getProfile();case 5:e=t.sent,this.userId=e.userId;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),post:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.userId){t.next=3;break}return alert("User not found."),t.abrupt("return");case 3:this.loading=!0,u["Promise"].all([this.slackPost("".concat(this.userId,"が").concat(e)),this.spreadsheetPost(n)]).then(function(t){alert(e,t)}).catch(function(t){return alert("失敗しました。",t)}).finally(function(){return r.loading=!1});case 6:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),startWork:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="出勤しました。",n="startWork",t.next=4,this.post(e,n);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),startRest:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="休憩に入りました。",n="startRest",t.next=4,this.post(e,n);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),finishRest:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="休憩から戻りました。",n="finishRest",t.next=4,this.post(e,n);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),finishWork:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="退勤しました。",n="finishWork",t.next=4,this.post(e,n);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;liff.init(function(){return t.initializeLiff()},function(t){return location.href="https://google.co.jp"})}}),f=l,h=n("2877"),p=Object(h["a"])(f,i,a,!1,null,null,null),d=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(d)}}).$mount("#app")}});