(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{S0jO:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("AcIj");var r=n(a("Vz9s"));a("ufv1");var c=n(a("QYgq"));a("QE6f");var s=n(a("Xo8F"));a("5NDa");var i=n(a("5rEg"));a("Pwec");var o=n(a("CtXQ"));a("1Cgs");var d=n(a("zvbH"));a("Telt");var u=n(a("Tckk"));a("HVTF");var f=n(a("OT5E")),m=n(a("lwsE")),h=n(a("W8MJ")),g=n(a("a1gu")),p=n(a("Nsbk")),v=n(a("7W2i")),w=n(a("MVZn"));a("e3Tq");var y=n(a("n+tp"));a("puyI");var E,C,k=n(a("xZH1")),S=l(a("q1tI")),I=a("MuoO"),b=a("jYtE"),N=n(a("5+h1")),x="queryCardNos",T=k.default.alert,O=y.default.Item,z=5,J=(E=(0,I.connect)(function(e){var t=e.renewmodel;return(0,w.default)({},t)}),E(C=function(e){function t(e){var a;return(0,m.default)(this,t),a=(0,g.default)(this,(0,p.default)(t).call(this,e)),a.onClear=function(){a.setState({value:"",showTag:"none"})},a.onClick=function(e){if("sms"===e){var t=a.state.value;if(t&&t.length>10){var n=a.props.dispatch;f.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),n({type:"renewmodel/checkCard",payload:t}).then(function(){f.default.hide();var e=a.props.card;e?(a.addItem(t),window.location.href="../renew/sms/send/".concat(e.msisdn)):a.setState({showTag:""})})}else window.location.href="../renew/sms/list"}else{var l=a.state.value;if(!l||l.length<11)return void f.default.fail("\u8bf7\u8f93\u5165\u5361\u53f7",1,null,!1);var r=a.props.dispatch;f.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),r({type:"renewmodel/checkCard",payload:l}).then(function(){f.default.hide();var t=a.props.card;if(t)switch(a.addItem(l),e){case"history":window.location.href="../renew/history/".concat(t.msisdn);break;case"sms":window.location.href="../renew/sms/send/".concat(t.msisdn);break;default:window.location.href="../renew/".concat(t.msisdn);break}else a.setState({showTag:""})})}},a.onChange=function(e){a.setState({value:e.target.value}),e.target.value||a.setState({showTag:"none"})},a.loadData=function(){var e=JSON.parse(localStorage.getItem(x));a.setState({value:e&&e.length>0?e[0]:"",datas:e})},a.addItem=function(e){var t=JSON.parse(localStorage.getItem(x))||[],n=t.findIndex(function(t){return t===e});n<0&&(t.length>=z&&t.splice(t.length-1,1),t.unshift(e),a.setState({datas:t}),localStorage.setItem(x,JSON.stringify(t)))},a.deleteItem=function(e){T("","\u786e\u5b9a\u5220\u9664\u3010".concat(e,"\u3011?"),[{text:"\u53d6\u6d88"},{text:"\u786e\u8ba4",onPress:function(){var t=JSON.parse(localStorage.getItem(x))||[];t.splice(t.findIndex(function(t){return t===e}),1),localStorage.setItem(x,JSON.stringify(t)),a.setState({datas:t})}}])},a.selectClick=function(e){a.setState({value:e})},a.onScan=function(){(0,b.getQrCode)().then(function(e){e&&a.setState({value:e})})},a.state={value:"",showTag:"none",datas:[]},a}return(0,v.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){var e=window.location.href;(0,b.qrCodeLoader)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/getwxconfig?url=").concat(e)),this.loadData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.showTag,l=t.datas;return S.default.createElement("div",{className:N.default.renewbg1},S.default.createElement(d.default,{mode:"dark",icon:S.default.createElement(u.default,{src:"https://res.yi-ll.com/card/favicon.png"})},"\u6d41\u91cf\u67e5\u8be2\u5145\u503c\u670d\u52a1"),S.default.createElement(O,{align:"middle",style:{marginTop:"20px",background:"#F5F5F9"}},S.default.createElement(s.default,null,S.default.createElement(s.default.Item,{className:N.default.felxMainImg},S.default.createElement(i.default,{addonAfter:S.default.createElement(o.default,{onClick:this.onScan,type:"scan",style:{color:"green"}}),placeholder:"\u8bf7\u8f93\u5165SIM/ICCID",onChange:this.onChange,allowClear:!0,value:a})))),S.default.createElement(c.default,{size:"lg"}),S.default.createElement("div",{className:"sub-title",style:{display:n,marginLeft:25,marginRight:20,lineHeight:1,color:"red"}},S.default.createElement("p",null,"\u67e5\u4e0d\u5230\u5462\uff0c\u4eb2~"),S.default.createElement("p",null,"1\u3001\u8bf7\u786e\u8ba4\u8f93\u5165\u7684\u5361\u662f\u5426\u4e3a\u6211\u53f8\u7684\u7269\u8054\u7f51\u5361\uff1b"),S.default.createElement("p",null,"2\u3001\u5982\u679c\u60a8\u662f\u624b\u52a8\u8f93\u5165\uff0c\u8bf7\u68c0\u67e5\u8f93\u5165\u7684\u5185\u5bb9\u548c\u5361\u8eab\u53f7\u7801\u662f\u5426\u4e00\u81f4\uff1b"),S.default.createElement("p",null,"3\u3001\u5982\u679c\u60a8\u4f7f\u7528\u7535\u4fe1\u5361\u7684ICCID\u67e5\u8be2\uff0c\u8bf7\u5c06ICCID\u6700\u672b\u7aef\u7684\u5b57\u6bcd\u53bb\u6389\uff0c\u518d\u67e5\u8be2\uff1b")),S.default.createElement("div",{className:N.default.renewbtn},S.default.createElement("div",{className:N.default.renewbtnleft,onClick:function(){return e.onClick("")}},S.default.createElement("img",{alt:"",style:{maxWidth:32,marginRight:5,backgroundColor:"000000"},src:"https://res.yi-ll.com/card/renew/search.png"})," ","\u67e5\u8be2"),S.default.createElement("div",{className:N.default.renewbtnright,onClick:function(){return e.onClick("sms")}},S.default.createElement("img",{alt:"",style:{maxWidth:32,marginRight:5},src:"https://res.yi-ll.com/card/renew/sms.png"})," ","\u77ed\u4fe1")),S.default.createElement("div",{className:N.default.renewbtn},S.default.createElement("div",{className:N.default.renewbtnhistory,onClick:function(){return e.onClick("history")}},S.default.createElement("img",{alt:"",style:{maxWidth:32,marginRight:5},src:"https://res.yi-ll.com/card/renew/history.png"}),"\u8fd17\u65e5\u5185\u8fde\u63a5\u8bb0\u5f55(\u4e0d\u542b\u5f53\u65e5)")),S.default.createElement(c.default,{size:"lg"}),S.default.createElement(r.default,{style:{textAlign:"center"},icon:null},"\u6e29\u99a8\u63d0\u793a\uff1a\u5982\u4ecd\u65e0\u6cd5\u67e5\u8be2\uff0c\u8bf7\u8054\u7cfb\u5361\u4f9b\u5e94\u5546"),S.default.createElement("div",{className:N.default.historylist,style:{marginTop:0}},l&&l.length>0?S.default.createElement(y.default,{size:"small",renderHeader:function(){return"\u5386\u53f2\u8bb0\u5f55"}},l.map(function(t,a){return S.default.createElement(O,{style:{minHeight:20,fontSize:14},key:t,thumb:a+1,onClick:function(){return e.selectClick(t)},extra:S.default.createElement(o.default,{type:"cross-circle",size:"xxs",onClick:function(){return e.deleteItem(t)}})},S.default.createElement("span",{style:{minHeight:20,fontSize:12}},t))})):null))}}]),t}(S.Component))||C),D=J;t.default=D}}]);