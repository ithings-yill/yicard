(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{LN6y:function(e,t,a){e.exports={card:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-card",heading:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-heading",steps:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-steps",errorIcon:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-errorIcon",errorPopover:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-errorPopover",errorListItem:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-errorListItem",errorField:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-errorField",editable:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-editable",advancedForm:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-advancedForm",optional:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-optional",formHeight:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-formHeight"}},qPRP:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=l(a("bx4M"));a("+L6B");var r=l(a("2/Rp"));a("iQDF");var u=l(a("+eQT"));a("7Kak");var d=l(a("9yH6"));a("giR+");var i=l(a("fyUT")),o=l(a("jehZ"));a("5Dmo");var s=l(a("3S7+"));a("Pwec");var f=l(a("CtXQ"));a("miYZ");var c=l(a("tsqr")),p=l(a("2Taf")),m=l(a("vZ4D")),g=l(a("rlhR")),h=l(a("MhPg")),E=l(a("l4Ni")),v=l(a("ujKo")),y=l(a("p0pE"));a("OaEy");var b=l(a("2fM7"));a("5NDa");var P=l(a("5rEg"));a("y8nQ");var k=l(a("Vl3Y"));a("2qtc");var w,C,N,M,x=l(a("kLXV")),T=R(a("q1tI")),V=a("MuoO"),H=l(a("3a4m")),D=l(a("wd/R")),q=l(a("HZnN")),O=l(a("zHco")),z=l(a("ufQ4")),F=l(a("WmlG")),S=l(a("9dWe")),B=l(a("LN6y"));function L(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(L=function(e){return e?a:t})(e)}function R(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=L(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var u=n?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(l,r,u):l[r]=e[r]}return l.default=e,a&&a.set(e,l),l}function Y(e){var t=I();return function(){var a,l=(0,v.default)(e);if(t){var n=(0,v.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,E.default)(this,a)}}function I(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var j=x.default.confirm,A=k.default.Item,Q=P.default.TextArea,U=b.default.Option,W=(w=(0,V.connect)(function(e){var t=e.bizbindpkgModel,a=e.purchaseorders,l=e.bizsalecfg,n=e.bindpacakgecfg,r=e.loading;return(0,y.default)({},a,n,{newData:l.newData,postConfigLoading:r.effects["bizsalecfg/post"]},t,{pkgloading:r.effects["bizbindpkgModel/fetchPackage"],loading:r.effects["bizbindpkgModel/page"],loadingcardtype:r.effects["bizbindpkgModel/fetchcardtype"]})}),C=k.default.create(),N=q.default.Secured("/business/bizsales/add"),w(M=(0,z.default)(M=C(M=N(M=function(e){(0,h.default)(a,e);var t=Y(a);function a(e){var l;return(0,p.default)(this,a),l=t.call(this,e),l.loadPurchase=function(e){var t=l.props.dispatch;t({type:"purchaseorders/get",payload:e}).then(function(){var e=l.props.purchaseInfo;if(e){var t=l.state.data,a=e.segment,n=e.client,r=e.purchaseSpecifications;if(t.segment=a,t.inEntId=n,r){var u=r.activationMode,d=r.cardType,i=r.periodUnit,o=r.silencePeriod,s=r.testFlow,f=r.testPeriod,c=r.openDate,p=r.pkgNo;t.activationMode=u,t.cardType=d,t.periodUnit=i,o&&(t.silencePeriod=o),s&&(t.testFlow=s),f&&(t.testPeriod=f),t.oDate=c,p&&(t.pkgNo=p)}l.setState({data:t})}})},l.onCancel=function(){H.default.goBack()},l.stringTrim=function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},l.onChange=function(e){var t=l.props.dispatch;t({type:"bizbindpkgModel/page",enterprise:e})},l.handleSubmit=function(e){var t=l.props.form;e.preventDefault(),t.validateFieldsAndScroll(function(e,t){var a=t.segment,n=new RegExp("\n","g");if(a){var r=a.replace(n,"|").split("|");if(r&&r.length>0)for(var u=0;u<r.length;u+=1){var d=l.stringTrim(r[u]),i=d.split("-");if(i&&i.length>1){if(l.stringTrim(i[0]).length!==l.stringTrim(i[1]).length)return void c.default.error("\u53f7\u6bb5\u3010".concat(d,"\u3011\u957f\u5ea6\u4e0d\u4e00\u81f4"));for(var o=l.stringTrim(i[0]).split(""),s=l.stringTrim(i[1]).split(""),f=o.length,p=0,m=0;m<f;m+=1)if(o[m]!==s[m]){p=m;break}if(f-p>5)return void c.default.error("\u53f7\u6bb5\u3010".concat(d,"\u3011\u76f8\u540c\u90e8\u5206\u53ea\u6709\u3010").concat(p,"\u3011\u4f4d"))}}}if(!e){var h=(0,g.default)(l),E=t.oDate?"".concat(t.oDate.format("YYYY-MM-DD")," 00:00:00"):null;j({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u63d0\u4ea4?",onOk:function(){var e=(0,y.default)({},t,{firstYearPrice:0,renewPrice:0,oDate:E}),a=h.props.dispatch;a({type:"bizsalecfg/post",payload:e})}})}})},l.onQuotaChange=function(e){l.setState({showPercentage:e.target.value>0,showLevel:4===e.target.value})},l.linkToSpeedLevel=function(){H.default.push("/helpservice/speedlevel")},l.onActivationModeChange=function(e){var t=l.props.form,a=l.state.data;l.setState({data:(0,y.default)({},a,{activationMode:e.target.value})});var n=t.getFieldValue("testPeriod");t.setFieldsValue({testFlow:1===e.target.value&&n>0?20:null})},l.onTestPeriodChange=function(e){var t=l.props.form,a=l.state.data;t.setFieldsValue({testFlow:1===a.activationMode&&e>0?20:null})},l.state={showPercentage:!1,data:{expOp:0,quotaOp:0,renewPrice:60,firstYearPrice:60,pkgNum:1,percentage:100,outOperation:0,level:1,activationMode:1,segment:null,testPeriod:3,testFlow:20}},l}return(0,m.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.location;if(a){var l=a.state,n=a.search;if(l){var r=l.msisdns,u=l.order,d=this.state.data;r&&this.setState({data:(0,y.default)({},d,{segment:r.join("\r\n")})}),u&&this.loadPurchase(u)}var i=n;i&&t({type:"bindpacakgecfg/get",payload:{orderNo:i.replace(/\?/,"")}}),t({type:"bizbindpkgModel/fetchcardtype"})}}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"purchaseorders/clear"})}},{key:"render",value:function(){var e=this.props,t=e.instock,a=e.currentUser,l=e.flowpools,c=e.cardtypes,p=e.form.getFieldDecorator,m=e.submitting,g=e.loading,h=e.loadingcardtype,E=e.location.pathname,v=this.state,y=v.showLevel,P=v.showPercentage,w=v.data,C=!1;void 0!==g&&(C=g);var N={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},M={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},x=a&&a.entCode&&a.entCode.length<=4;return T.default.createElement(O.default,null,T.default.createElement(n.default,{bordered:!1},T.default.createElement(k.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},x&&T.default.createElement("div",null,T.default.createElement(q.default,{authority:[E,"bindpkg"]},T.default.createElement(A,(0,o.default)({},N,{label:T.default.createElement("span",null,"\u4e3b\u5957\u9910\xa0",T.default.createElement(s.default,{title:"\u65e0\u53ef\u9009\u5957\u9910?\u8bf7\u5728\u3010\u5957\u9910\u7ba1\u7406\u3011\u4e2d\u914d\u7f6e\u51fa\u5361\u5957\u9910\u4ef7\u683c"},T.default.createElement(f.default,{type:"question-circle-o"}))),className:B.default.formHeight}),p("pkgNo",{initialValue:w.pkgNo,rules:[{required:!0,message:"\u4e3b\u5957\u9910\u5fc5\u9009"}]})(T.default.createElement(S.default,{pType:1,showPrice:!0,toBind:1,bType:1,price:w.pkgPrice}))),T.default.createElement(A,(0,o.default)({},N,{label:"\u5957\u9910\u6570\u91cf",className:B.default.formHeight}),p("pkgNum",{initialValue:w.pkgNum,rules:[{required:!0,message:"\u5957\u9910\u6570\u91cf\u5fc5\u9009"}]})(T.default.createElement(i.default,{min:1,max:100,step:1,placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u6570\u91cf"}))),T.default.createElement(A,(0,o.default)({},N,{label:T.default.createElement("span",null,"\u9644\u52a0\u8bed\u97f3\u5957\u9910\xa0",T.default.createElement(s.default,{title:"\u65e0\u53ef\u9009\u5957\u9910?\u8bf7\u5728\u3010\u5957\u9910\u7ba1\u7406\u3011\u4e2d\u914d\u7f6e\u51fa\u5361\u5957\u9910\u4ef7\u683c\u3002"},T.default.createElement(f.default,{type:"question-circle-o"}))),className:B.default.formHeight}),p("voicePkgNo",{initialValue:w.voicePkgNo})(T.default.createElement(S.default,{pType:1,toBind:1,bType:4}))),T.default.createElement(A,(0,o.default)({},N,{label:T.default.createElement("span",null,"\u9644\u52a0\u77ed\u4fe1\u5957\u9910\xa0",T.default.createElement(s.default,{title:"\u65e0\u53ef\u9009\u5957\u9910?\u8bf7\u5728\u3010\u5957\u9910\u7ba1\u7406\u3011\u4e2d\u914d\u7f6e\u51fa\u5361\u5957\u9910\u4ef7\u683c"},T.default.createElement(f.default,{type:"question-circle-o"}))),className:B.default.formHeight}),p("smPkgNo",{initialValue:w.smPkgNo})(T.default.createElement(S.default,{pType:1,toBind:1,bType:2}))),T.default.createElement(A,(0,o.default)({},N,{label:T.default.createElement("span",null,"\u9644\u52a0\u5b9a\u4f4d\u5957\u9910\xa0",T.default.createElement(s.default,{title:"\u65e0\u53ef\u9009\u5957\u9910?\u8bf7\u5728\u3010\u5957\u9910\u7ba1\u7406\u3011\u4e2d\u914d\u7f6e\u51fa\u5361\u5957\u9910\u4ef7\u683c"},T.default.createElement(f.default,{type:"question-circle-o"}))),className:B.default.formHeight}),p("lbsPkgNo",{initialValue:w.lbsPkgNo})(T.default.createElement(S.default,{pType:1,toBind:1,bType:3}))),T.default.createElement(A,(0,o.default)({},N,{label:"\u5230\u671f\u64cd\u4f5c",className:B.default.formHeight}),p("expOp",{initialValue:w.expOp,rules:[{required:!0,message:"\u5230\u671f\u64cd\u4f5c\u5fc5\u9009"}]})(T.default.createElement(d.default.Group,null,T.default.createElement(d.default,{value:0},"\u65e0"),T.default.createElement(d.default,{value:1},"\u65ad\u7f51"),T.default.createElement(d.default,{value:2},"\u505c\u673a")))),T.default.createElement(A,(0,o.default)({},N,{label:"\u8fbe\u91cf\u64cd\u4f5c",className:B.default.formHeight}),p("quotaOp",{initialValue:w.quotaOp,rules:[{required:!0,message:"\u8fbe\u91cf\u64cd\u4f5c\u5fc5\u9009"}]})(T.default.createElement(d.default.Group,{onChange:this.onQuotaChange},T.default.createElement(d.default,{value:0},"\u65e0"),T.default.createElement(d.default,{value:1},"\u65ad\u7f51"),T.default.createElement(d.default,{value:2},"\u505c\u673a"),T.default.createElement(d.default,{value:4},"\u9650\u901f")))),T.default.createElement(A,(0,o.default)({style:{display:P?"":"none"}},N,{label:T.default.createElement("span",null,"\u8fbe\u91cf\u64cd\u4f5c\u6bd4\u4f8b\xa0",T.default.createElement(s.default,{title:"\u9009\u62e9\u3010\u8fbe\u91cf\u65ad\u7f51/\u9650\u901f\u3011\u65f6, \u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u767e\u5206\u6bd4\u4f8b, \u5982120%\u6216\u800580%, \u3010\u5df2\u7528\u6d41\u91cf\u3011\u4e0e\u3010\u53ef\u7528\u6d41\u91cf\u3011\u7684\u6bd4\u4f8b\u8fbe\u5230\u6216\u8d85\u8fc7\u6b64\u6bd4\u4f8b\u5c31\u8fdb\u884c\u65ad\u7f51/\u9650\u901f\u3002"},T.default.createElement(f.default,{type:"question-circle-o"}))),className:B.default.formHeight}),p("percentage",{initialValue:w.percentage})(T.default.createElement(i.default,{defaultValue:100,min:5,max:1e3,step:5,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")}}))),T.default.createElement(A,(0,o.default)({style:{display:y?"":"none"}},N,{label:T.default.createElement("span",null,"\u9650\u901f\u6321\u4f4d\xa0",T.default.createElement(s.default,{title:"\u9650\u901f\u6321\u4f4d:\u76ee\u524d\u4ec5\u652f\u6301\u79fb\u52a8\u65b0\u7cfb\u7edf(\u5f52\u5c5e\u6d41\u91cf\u6c60\u7684\u5361\u3001\u5df2\u7ecf\u8ba2\u8d2d\u81ea\u53d1\u8d77\u964d\u901f\u5546\u54c1)\u3001\u7535\u4fe1CMP/DCP\uff0c\u5176\u4ed6\u5361\u6e90\u7684\u8bbe\u7f6e\u65e0\u6548"},T.default.createElement(f.default,{type:"question-circle-o"}))),className:B.default.formHeight,extra:T.default.createElement("a",{onClick:this.linkToSpeedLevel,alt:"\u67e5\u770b\u9650\u901f\u6321\u4f4d\u53c2\u7167\u8868"},"\u67e5\u770b\u9650\u901f\u6321\u4f4d\u53c2\u7167\u8868")}),p("level",{initialValue:w.level||1,rules:[{required:y,message:"\u9650\u901f\u6321\u4f4d\u5fc5\u9009"}]})(T.default.createElement(b.default,{allowClear:!0},T.default.createElement(U,{value:1,key:1,title:"\u79fb\u52a8\u65b0EC/\u7535\u4fe1DCP=128Kbps\uff0c\u7535\u4fe1CMP=64Kbps"},"\u4e00\u6863"),T.default.createElement(U,{value:2,key:2,title:"\u79fb\u52a8\u65b0EC/\u7535\u4fe1DCP/\u7535\u4fe1CMP=512Kbps"},"\u4e8c\u6863"),T.default.createElement(U,{value:3,key:3,title:"\u79fb\u52a8\u65b0EC/\u7535\u4fe1DCP/\u7535\u4fe1CMP=1Mbps"},"\u4e09\u6863"),T.default.createElement(U,{value:4,key:4,title:"\u79fb\u52a8\u65b0EC=2Mbps,\u7535\u4fe1DCP/\u7535\u4fe1CMP=3Mbps"},"\u56db\u6863")))),T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:"\u5361\u4f53\u89c4\u683c",className:B.default.formHeight}),p("cardType",{initialValue:w.cardType})(T.default.createElement(b.default,{loading:h,placeholder:"\u8bf7\u9009\u62e9\u5361\u4f53\u89c4\u683c",showSearch:!0,optionFilterProp:"children"},c.map(function(e){return T.default.createElement(U,{key:e.value,value:e.value,label:e.title},e.title)})))),T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:T.default.createElement("span",null,"\u6fc0\u6d3b\u65b9\u5f0f\xa0",T.default.createElement(s.default,{title:"\u5361\u6e90\u6fc0\u6d3b->\u4ee5\u5361\u6e90\u6fc0\u6d3b\u65e5\u671f\u4e3a\u51c6\uff0c\u5f00\u59cb\u8ba1\u8d39; \u5e73\u53f0\u6fc0\u6d3b->\u4ee5\u5e73\u53f0\u6fc0\u6d3b\u65e5\u671f\u4e3a\u51c6[ A\u3001\u5982\u679c\u6d4b\u8bd5\u671f\u5185\u6240\u7528\u7684\u6d41\u91cf\u3010\u5927\u4e8e\u6216\u7b49\u4e8e\u3011\u8d60\u9001\u7684\u53ef\u7528\u6d41\u91cf\uff0c\u5219\u4f1a\u6fc0\u6d3b\uff0c\u5e76\u5f00\u59cb\u8ba1\u8d39\uff1b B\u3001\u5982\u679c\u6c89\u9ed8\u671f\u5185\u4ea7\u751f\u6d41\u91cf\uff0c\u5219\u4f1a\u6fc0\u6d3b\uff0c\u5e76\u5f00\u59cb\u8ba1\u8d39\uff1b C\u3001\u5982\u679c\u6c89\u9ed8\u671f\u8d85\u8fc7\u671f\u9650\uff0c\u5219\u4f1a\u5f3a\u5236\u6027\u6fc0\u6d3b\uff0c\u5e76\u5f00\u59cb\u8ba1\u8d39]"},T.default.createElement(f.default,{type:"question-circle-o"}))),className:B.default.formHeight}),p("activationMode",{initialValue:w.activationMode,rules:[{required:!0,message:"\u6fc0\u6d3b\u65b9\u5f0f\u5fc5\u9009"}]})(T.default.createElement(d.default.Group,{onChange:this.onActivationModeChange},T.default.createElement(d.default,{value:0},"\u5361\u6e90\u6fc0\u6d3b"),T.default.createElement(d.default,{value:1},T.default.createElement("span",{style:{color:"red",fontWeight:"bold"}},"\u5e73\u53f0\u6fc0\u6d3b"))))),T.default.createElement(A,(0,o.default)({},N,{label:T.default.createElement("span",null,"\u5f00\u6237\u65e5\u671f\xa0",T.default.createElement(s.default,{title:"\u5f00\u6237\u65e5\u671f\uff1a1\u3001\u6fc0\u6d3b\u65b9\u5f0f\u4e3a\u5e73\u53f0\u6fc0\u6d3b\u65f6\u6709\u6548\uff1b2\u3001\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4e3a\u5f53\u524d\u65e5\u671f"},T.default.createElement(f.default,{type:"question-circle-o"}))),style:{display:t||0===w.activationMode?"none":""},className:B.default.formHeight}),p("oDate",{initialValue:w.oDate?(0,D.default)(w.oDate,"YYYY-MM-DD"):null})(T.default.createElement(u.default,{placeholder:"\u8bf7\u9009\u62e9\u5f00\u6237\u65e5\u671f"}))),T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:"\u6d4b\u8bd5\u671f/\u6c89\u9ed8\u671f\u65f6\u957f\u5355\u4f4d",className:B.default.formHeight}),p("periodUnit",{initialValue:w.periodUnit||0})(T.default.createElement(d.default.Group,null,T.default.createElement(d.default,{value:0},"\u81ea\u7136\u6708"),T.default.createElement(d.default,{value:1},"\u65e5")))),T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:"\u6d4b\u8bd5\u671f\u65f6\u957f",className:B.default.formHeight}),p("testPeriod",{initialValue:w.testPeriod})(T.default.createElement(i.default,{min:0,max:360,step:1,style:{width:180},onChange:this.onTestPeriodChange,placeholder:"\u8bf7\u8f93\u5165\u6d4b\u8bd5\u671f\u65f6\u957f"}))),T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:"\u6d4b\u8bd5\u671f\u53ef\u7528\u6d41\u91cf(M)",className:B.default.formHeight}),p("testFlow",{initialValue:w.testFlow})(T.default.createElement(i.default,{min:0,max:1e6,step:1,style:{width:180},placeholder:"\u8bf7\u8f93\u5165\u6d4b\u8bd5\u671f\u53ef\u7528\u6d41\u91cf"}))),T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:"\u6d4b\u8bd5\u671f\u53ef\u7528\u77ed\u4fe1(\u6761)",className:B.default.formHeight}),p("testSms",{initialValue:w.testSms})(T.default.createElement(i.default,{min:0,max:1e6,step:1,style:{width:180},placeholder:"\u8bf7\u8f93\u5165\u6d4b\u8bd5\u671f\u53ef\u7528\u77ed\u4fe1"}))),T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:"\u6c89\u9ed8\u671f\u65f6\u957f",className:B.default.formHeight}),p("silencePeriod",{initialValue:w.silencePeriod})(T.default.createElement(i.default,{min:0,max:180,step:1,style:{width:180},placeholder:"\u8bf7\u8f93\u5165\u6c89\u9ed8\u671f\u65f6\u957f"}))),T.default.createElement(q.default,{authority:[E,"outOperation"]},T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:T.default.createElement("span",null,"\u51fa\u5e93\u64cd\u4f5c\xa0",T.default.createElement(s.default,{title:"\u51fa\u5e93\u6210\u529f\u540e\uff1a A\u3001\u5bf9\u51fa\u5e93\u7684\u5361\u4e0d\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\uff1b B\u3001\u5bf9\u51fa\u5e93\u7684\u5361\u8fdb\u884c\u7acb\u5373\u65ad\u7f51\u64cd\u4f5c\uff08\u524d\u63d0\uff1a\u6709\u652f\u6301\u5361\u65ad\u7f51\u7684\u63a5\u53e3\uff09\uff1b C\u3001\u5bf9\u51fa\u5e93\u7684\u5361\u8fdb\u884c\u7acb\u5373\u505c\u673a\u64cd\u4f5c\uff08\u524d\u63d0\uff1a\u6709\u652f\u6301\u5361\u505c\u673a\u7684\u63a5\u53e3\uff0c\u63d0\u9192\uff1a\u8c03\u7528\u505c\u673a\u63a5\u53e3\u53ef\u80fd\u4ea7\u751f\u505c\u673a\u8d39\u7528\u3001\u5177\u4f53\u4ee5\u8fd0\u8425\u5546\u4e3a\u51c6\uff09"},T.default.createElement(f.default,{type:"question-circle-o"}))),className:B.default.formHeight}),p("outOperation",{initialValue:w.outOperation,rules:[{required:!0,message:"\u51fa\u5e93\u64cd\u4f5c"}]})(T.default.createElement(d.default.Group,null,T.default.createElement(d.default,{value:0},"\u65e0"),T.default.createElement(d.default,{value:1},"\u7acb\u5373\u65ad\u7f51"),T.default.createElement(d.default,{value:2},"\u7acb\u5373\u505c\u673a"))))))),T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:"\u76ee\u6807\u5ba2\u6237",className:B.default.formHeight}),p("inEntId",{initialValue:w.inEntId,rules:[{required:!0,message:"\u76ee\u6807\u5ba2\u6237\u5fc5\u9009"}]})(T.default.createElement(F.default,{onChange:this.onChange}))),T.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},N,{label:"\u81ea\u8425\u6d41\u91cf\u6c60",className:B.default.formHeight}),p("flowPool",{initialValue:w.flowPool})(T.default.createElement(b.default,{showSearch:!0,loading:C,placeholder:"\u8bf7\u9009\u62e9\u81ea\u8425\u6d41\u91cf\u6c60",optionFilterProp:"children"},l.map(function(e){return T.default.createElement(U,{key:e.id,value:e.id},e.name)})))),T.default.createElement(A,(0,o.default)({},N,{label:T.default.createElement("span",null,"\u53f7\u6bb5",T.default.createElement("em",{className:B.default.optional},T.default.createElement(s.default,{title:"1\u3001\u53f7\u6bb5\u7528\u534a\u89d2-\u7b26\u53f7\u5206\u9694\uff1b2\u3001\u591a\u4e2a\u53f7\u6bb5\u4f7f\u7528\u6362\u884c"},T.default.createElement(f.default,{type:"info-circle-o",style:{marginRight:4}})))),className:B.default.formHeight}),p("segment",{initialValue:w.segment,rules:[{required:!0,message:"\u53f7\u6bb5\u5fc5\u586b"}]})(T.default.createElement(Q,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u53f7\u6bb5,\u4f8b\u5b50\uff1a100000001001-100000001100",rows:4})),x?T.default.createElement("div",{style:{lineHeight:1,color:"red"}},T.default.createElement("p",null," "),T.default.createElement("p",{style:{lineHeight:1.5}},"(1)\u3001\u4e3b\u5957\u9910\u7eed\u8d39\u65f6\uff0c\u5982\u679c\u6709\u9644\u52a0\u5957\u9910\uff0c\u5219\u7cfb\u7edf\u4e5f\u4f1a\u81ea\u52a8\u7eed\u8d39\u6240\u6709\u7684\u9644\u52a0\u5957\u9910"),T.default.createElement("p",null,"(2)\u3001\u53d8\u66f4\u4e3b\u5957\u9910\u65f6\uff0c\u4e0d\u4f1a\u5f71\u54cd\u9644\u52a0\u7684\u6240\u6709\u5957\u9910"),T.default.createElement("p",null,"\u793a\u4f8b\uff1a"),T.default.createElement("p",null,"(a)\u3001\u51fa\u5e93\u3010\u4e3b\u5957\u9910A\u3011\u4e14\u9644\u52a0\u3010\u8bed\u97f3\u5957\u9910V\u3011\u3002\u5982\u679c\u7eed\u8d39\u3010\u4e3b\u5957\u9910A\u3011\uff0c\u5219\u7cfb\u7edf\u4e5f\u4f1a\u81ea\u52a8\u7eed\u8d39\u3010\u8bed\u97f3\u5957\u9910V\u3011"),T.default.createElement("p",null,"(b)\u3001\u5f53\u3010\u4e3b\u5957\u9910A\u3011\u53d8\u66f4\u4e3b\u5957\u9910\u4e3a\u3010\u4e3b\u5957\u9910B\u3011\u6210\u529f\u540e\uff1b\u5bf9\u3010\u4e3b\u5957\u9910B\u3011\u7eed\u8d39\uff0c\u5219\u540c\u65f6\u7eed\u8d39\u4e86\u3010\u8bed\u97f3\u5957\u9910V\u3011")):null),T.default.createElement(A,(0,o.default)({},M,{style:{marginTop:32}}),T.default.createElement(r.default,{type:"primary",htmlType:"submit",loading:m},"\u63d0\u4ea4"),T.default.createElement(r.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),a}(T.Component))||M)||M)||M)||M),G=W;t.default=G}}]);