(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{boUy:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("AcIj");var r=n(a("Vz9s"));a("R9oj");var o=n(a("ECub"));a("KklG");var s=n(a("Zrtv"));a("QE6f");var d=n(a("Xo8F"));a("5NDa");var i=n(a("5rEg"));a("+L6B");var u=n(a("2/Rp"));a("Pwec");var c=n(a("CtXQ"));a("HVTF");var f=n(a("OT5E")),m=n(a("lwsE")),p=n(a("W8MJ")),g=n(a("a1gu")),h=n(a("Nsbk")),v=n(a("7W2i")),E=n(a("MVZn"));a("puyI");var w=n(a("xZH1"));a("e3Tq");var y,k,S=n(a("n+tp")),C=l(a("q1tI")),b=a("MuoO"),I=a("jYtE"),x=n(a("usdK")),L=n(a("cRrO")),N=S.default.Item,B="smsHistory",O=w.default.alert,R=(y=(0,b.connect)(function(e){var t=e.renewmodel;return(0,E.default)({},t)}),y(k=function(e){function t(e){var a;return(0,m.default)(this,t),a=(0,g.default)(this,(0,h.default)(t).call(this,e)),a.onClear=function(){a.setState({value:""})},a.onClick=function(){var e=a.state.value;if(!e||e.length<11)f.default.fail("\u8bf7\u8f93\u5165\u5361\u53f7",1,null,!1);else{var t=a.props.dispatch;f.default.loading("\u6570\u636e\u52a0\u8f7d\u4e2d..."),t({type:"renewmodel/checkCard",payload:e}).then(function(){f.default.hide();var t=a.props.card;t?window.location.href="/renew/sms/send/".concat(e):f.default.fail("\u67e5\u4e0d\u5230\u5462\uff0c\u8bf7\u786e\u8ba4\u8f93\u5165\u7684\u5361\u662f\u5426\u4e3a\u6211\u53f8\u7684\u7269\u8054\u7f51\u5361!",1,null,!1)})}},a.onChange=function(e){a.setState({value:e.target.value})},a.onRefresh=function(){var e=a.state,t=e.pages,n=e.pageIndex;n+1<t?(a.setState({refreshing:!0,loaded:!1}),a.loadData(n+1,!1)):a.setState({loaded:!1})},a.loadData=function(e,t){var n=a.state,l=n.pageSize,r=n.datas,o=JSON.parse(localStorage.getItem(B))||[],s=a.pagination(e,l,o);t||a.setState({refreshing:!1}),t?a.setState({datas:s}):a.setState({datas:r.concat(s)}),a.setState({pages:parseInt((o.length+l-1)/l,0),pageIndex:e})},a.pagination=function(e,t,a){var n=e*t;return n+t>=a.length?a.slice(n,a.length):a.slice(n,n+t)},a.handleClick=function(e,t){switch(t){case"1":window.location.href="/renew/sms/send/".concat(e);break;case"2":O("\u5220\u9664\u8bb0\u5f55","\u786e\u5b9a\u5220\u9664[".concat(e,"]\u8bb0\u5f55\u5417\uff1f"),[{text:"\u53d6\u6d88"},{text:"\u786e\u8ba4",onPress:function(){return a.deleteItem(e)}}]);break;default:break}},a.deleteItem=function(e){var t=JSON.parse(localStorage.getItem(B))||[];t.splice(t.findIndex(function(t){return t===e}),1),localStorage.setItem(B,JSON.stringify(t));var n=a.state.datas;n.splice(n.findIndex(function(t){return t===e}),1),a.setState({datas:n})},a.handleBack=function(){x.default.goBack()},a.handleMessage=function(e){if(!e)return null;var t=[];return e.map(function(e,n){t.push(C.default.createElement(S.default.Item,{key:n,extra:C.default.createElement(c.default,{type:"close",onClick:function(){return a.handleClick(e,"2")},style:{fontSize:12,color:"#DC4C25"}})},C.default.createElement("div",{onClick:function(){return a.handleClick(e,"1")},style:{color:"#36A3F0"}},C.default.createElement(c.default,{type:"idcard",style:{paddingRight:15}}),C.default.createElement("span",{style:{fontSize:12,color:"#000000"}},e))))}),t},a.onScan=function(){(0,I.getQrCode)().then(function(e){e&&a.setState({value:e})})},a.state={value:null,refreshing:!1,down:!1,height:document.documentElement.clientHeight,datas:[],pageIndex:0,pages:1,pageSize:20,loaded:!1},a}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0);var e=this.props.location.state;e&&this.setState({value:e}),this.loadData(0,!0);var t=window.location.href;(0,I.qrCodeLoader)("".concat("https://api-prod.yi-ll.com/card/").concat("v1","/getwxconfig?url=").concat(t))}},{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.datas,l=t.height,f=t.down,m=t.refreshing,p=t.loaded;return C.default.createElement("div",{className:L.default.renewbg},C.default.createElement("div",{className:L.default.smstop},C.default.createElement(N,{align:"middle",style:{marginTop:"10px",background:"#EBEBEB"}},C.default.createElement(d.default,null,C.default.createElement(d.default.Item,{className:L.default.felxImg},C.default.createElement(u.default,{style:{width:6},onClick:this.handleBack},C.default.createElement(c.default,{style:{marginLeft:-6},type:"left"})),C.default.createElement(i.default,{addonAfter:C.default.createElement(c.default,{onClick:this.onScan,type:"scan",style:{color:"green"}}),style:{width:"70%"},placeholder:"\u8bf7\u8f93\u5165\u6536\u4fe1\u5361\u53f7",onChange:this.onChange,allowClear:!0,value:a}),C.default.createElement(u.default,{style:{marginLeft:4},onClick:this.onClick},"\u67e5\u8be2"))))),C.default.createElement("h3",{style:{marginTop:8,marginBottom:8,fontSize:12,textAlign:"center"}},"\u6700\u8fd1\u53d1\u77ed\u4fe1\u7684\u5361\u8bb0\u5f55(\u4e0a\u62c9\u5237\u65b0)"),C.default.createElement("div",{className:L.default.smslist},n&&n.length>0?C.default.createElement(s.default,{damping:60,ref:function(t){return e.ptr=t},style:{height:l||1,overflow:"auto"},indicator:f?{deactivate:"\u4e0a\u62c9\u53ef\u4ee5\u5237\u65b0"}:{},direction:f?"down":"up",refreshing:m,onRefresh:this.onRefresh},C.default.createElement(S.default,{size:"small"},this.handleMessage(n))):C.default.createElement(o.default,{image:o.default.PRESENTED_IMAGE_SIMPLE})),C.default.createElement("div",{className:L.default.smsbottom},C.default.createElement(r.default,{style:{display:p?"block":"none"},icon:null},"\u5df2\u7ecf\u52a0\u8f7d\u5168\u90e8\u6570\u636e")))}}]),t}(C.Component))||k),M=R;t.default=M},cRrO:function(e,t,a){e.exports={tableList:"antd-pro\\pages\\-renew\\-sms\\-list\\index-tableList",tableListOperator:"antd-pro\\pages\\-renew\\-sms\\-list\\index-tableListOperator",tableListForm:"antd-pro\\pages\\-renew\\-sms\\-list\\index-tableListForm",submitButtons:"antd-pro\\pages\\-renew\\-sms\\-list\\index-submitButtons"}}}]);