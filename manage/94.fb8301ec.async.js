(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{"+kxL":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),c=n(a("d6i3"));a("miYZ");var s=n(a("tsqr")),u=a("j6sm"),i={namespace:"operatorsync",state:{syncDatas:{}},effects:{sync:c.default.mark(function e(t,a){var n,r,i;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(u.sync,n);case 4:i=e.sent,i?s.default.info(i.message?i.message:"\u63d0\u4ea4\u6210\u529f"):s.default.info("\u63d0\u4ea4\u5931\u8d25");case 6:case"end":return e.stop()}},e)}),page:c.default.mark(function e(t,a){var n,r,s,i,p,l;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(u.page,n);case 4:if(i=e.sent,p=i.result,!p){e.next=10;break}return l={list:p,pagination:{total:p.length,pageSize:p.length,current:1}},e.next=10,s({type:"pageSet",payload:l});case 10:case"end":return e.stop()}},e)})},reducers:{pageSet:function(e,t){return(0,r.default)({},e,{syncDatas:t.payload})}}};t.default=i},j6sm:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.sync=i,t.page=l;var r=n(a("d6i3")),c=n(a("1l/V")),s=a("Qyje"),u=n(a("t3Un"));function i(e){return p.apply(this,arguments)}function p(){return p=(0,c.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/sync?").concat((0,s.stringify)(t))));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function l(e){return o.apply(this,arguments)}function o(){return o=(0,c.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/sync/list?").concat((0,s.stringify)(t))));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}}}]);