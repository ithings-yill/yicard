(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{RyJt:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("MVZn")),u=n(a("o0o1"));a("miYZ");var c=n(a("tsqr")),s=a("Tt2s"),o={namespace:"balance",state:{pageData:[],account:{}},effects:{page:u.default.mark(function t(e,a){var n,r,o,p,i,l,d,f,h;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,o=a.put,p=n.pageSize,i=n.pageIndex,l=n.downTask,t.next=5,r(s.page,n);case 5:if(d=t.sent,!d){t.next=16;break}if(f=d.result,!f){t.next=16;break}if(!l||!f){t.next=13;break}c.default.info("\u63d0\u4ea4\u6210\u529f,\u8bf7\u5728\u3010\u4e0b\u8f7d\u4efb\u52a1\u3011\u4e2d\u67e5\u770b"),t.next=16;break;case 13:return h={list:f.data,pagination:{total:f.totalCount,pageSize:p,pageIndex:i}},t.next=16,o({type:"pageSet",payload:h});case 16:case"end":return t.stop()}},t,this)}),add:u.default.mark(function t(e,a){var n,r,o,p,i;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,o=a.put,t.next=4,r(s.batch,n);case 4:if(p=t.sent,!p){t.next=16;break}if(i=p.result,!i){t.next=13;break}return c.default.info("\u63d0\u4ea4\u6210\u529f"),t.next=11,o({type:"setOverdraft",payload:i});case 11:t.next=14;break;case 13:c.default.error(p.message?p.message:"\u63d0\u4ea4\u5931\u8d25");case 14:t.next=17;break;case 16:c.default.error("\u63d0\u4ea4\u5931\u8d25");case 17:case"end":return t.stop()}},t,this)}),getAccount:u.default.mark(function t(e,a){var n,r,c,o;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,c=a.put,t.next=4,r(s.get,n);case 4:if(o=t.sent,!o||!o.result){t.next=8;break}return t.next=8,c({type:"setAccount",payload:o.result});case 8:case"end":return t.stop()}},t,this)})},reducers:{setOverdraft:function(t){return(0,r.default)({},t)},setAccount:function(t,e){return(0,r.default)({},t,{account:e.payload})},pageSet:function(t,e){return(0,r.default)({},t,{pageData:e.payload})},clearAccount:function(t){return(0,r.default)({},t,{account:{}})}}};e.default=o},Tt2s:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.page=s,e.batch=p,e.get=l;var r=n(a("o0o1")),u=n(a("yXPU")),c=n(a("t3Un"));function s(t){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/balance/page"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),o.apply(this,arguments)}function p(t){return i.apply(this,arguments)}function i(){return i=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/balance/batch"),{method:"POST",body:e}));case 1:case"end":return t.stop()}},t,this)})),i.apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return d=(0,u.default)(r.default.mark(function t(e){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.default)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/account/").concat(e)));case 1:case"end":return t.stop()}},t,this)})),d.apply(this,arguments)}}}]);