(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[155],{LN6y:function(e,t,a){e.exports={card:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-card",heading:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-heading",steps:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-steps",errorIcon:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-errorIcon",errorPopover:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-errorPopover",errorListItem:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-errorListItem",errorField:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-errorField",editable:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-editable",advancedForm:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-advancedForm",optional:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-optional",formHeight:"antd-pro\\pages\\-business\\-biz-sales\\-add\\index-formHeight"}},qPRP:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var d=l(a("bx4M"));a("+L6B");var r=l(a("2/Rp"));a("iQDF");var u=l(a("+eQT"));a("7Kak");var i=l(a("9yH6"));a("giR+");var s=l(a("fyUT")),o=l(a("pVnL"));a("5Dmo");var f=l(a("3S7+"));a("Pwec");var c=l(a("CtXQ"));a("miYZ");var p=l(a("tsqr")),m=l(a("lwsE")),g=l(a("W8MJ")),E=l(a("a1gu")),h=l(a("Nsbk")),v=l(a("7W2i")),y=l(a("PJYZ")),b=l(a("MVZn"));a("OaEy");var P=l(a("2fM7"));a("5NDa");var k=l(a("5rEg"));a("y8nQ");var C=l(a("Vl3Y"));a("2qtc");var N,w,M,V,T,x=l(a("kLXV")),H=n(a("q1tI")),q=a("MuoO"),D=l(a("usdK")),z=l(a("wd/R")),F=l(a("HZnN")),S=l(a("zHco")),O=l(a("ufQ4")),L=l(a("WmlG")),Y=l(a("9dWe")),I=l(a("LN6y")),B=x.default.confirm,A=C.default.Item,Q=k.default.TextArea,R=P.default.Option,U=(N=(0,q.connect)(function(e){var t=e.bizbindpkgModel,a=e.purchaseorders,l=e.bizsalecfg,n=e.bindpacakgecfg,d=e.loading;return(0,b.default)({},a,n,{newData:l.newData,postConfigLoading:d.effects["bizsalecfg/post"]},t,{pkgloading:d.effects["bizbindpkgModel/fetchPackage"],loading:d.effects["bizbindpkgModel/page"],loadingcardtype:d.effects["bizbindpkgModel/fetchcardtype"]})}),w=C.default.create(),M=F.default.Secured("/business/bizsales/add"),N(V=(0,O.default)(V=w(V=M((T=function(e){function t(e){var a;return(0,m.default)(this,t),a=(0,E.default)(this,(0,h.default)(t).call(this,e)),a.loadPurchase=function(e){var t=a.props.dispatch;t({type:"purchaseorders/get",payload:e}).then(function(){var e=a.props.purchaseInfo;if(e){var t=a.state.data,l=e.segment,n=e.client,d=e.purchaseSpecifications;if(t.segment=l,t.inEntId=n,d){var r=d.activationMode,u=d.cardType,i=d.periodUnit,s=d.silencePeriod,o=d.testFlow,f=d.testPeriod,c=d.openDate,p=d.pkgNo;t.activationMode=r,t.cardType=u,t.periodUnit=i,s&&(t.silencePeriod=s),o&&(t.testFlow=o),f&&(t.testPeriod=f),t.oDate=c,p&&(t.pkgNo=p)}a.setState({data:t})}})},a.onCancel=function(){D.default.goBack()},a.stringTrim=function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},a.onChange=function(e){var t=a.props.dispatch;t({type:"bizbindpkgModel/page",enterprise:e})},a.handleSubmit=function(e){var t=a.props.form;e.preventDefault(),t.validateFieldsAndScroll(function(e,t){var l=t.segment,n=new RegExp("\n","g");if(l){var d=l.replace(n,"|").split("|");if(d&&d.length>0)for(var r=0;r<d.length;r+=1){var u=a.stringTrim(d[r]),i=u.split("-");if(i&&i.length>1){if(a.stringTrim(i[0]).length!==a.stringTrim(i[1]).length)return void p.default.error("\u53f7\u6bb5\u3010".concat(u,"\u3011\u957f\u5ea6\u4e0d\u4e00\u81f4"));for(var s=a.stringTrim(i[0]).split(""),o=a.stringTrim(i[1]).split(""),f=s.length,c=0,m=0;m<f;m+=1)if(s[m]!==o[m]){c=m;break}if(f-c>5)return void p.default.error("\u53f7\u6bb5\u3010".concat(u,"\u3011\u76f8\u540c\u90e8\u5206\u53ea\u6709\u3010").concat(c,"\u3011\u4f4d"))}}}if(!e){var g=(0,y.default)((0,y.default)(a)),E=t.oDate?"".concat(t.oDate.format("YYYY-MM-DD")," 00:00:00"):null;B({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u63d0\u4ea4?",onOk:function(){var e=(0,b.default)({},t,{firstYearPrice:0,renewPrice:0,oDate:E}),a=g.props.dispatch;a({type:"bizsalecfg/post",payload:e})}})}})},a.onQuotaChange=function(e){a.setState({showPercentage:e.target.value>0,showLevel:4===e.target.value})},a.linkToSpeedLevel=function(){D.default.push("/helpservice/speedlevel")},a.onActivationModeChange=function(e){var t=a.props.form,l=a.state.data;a.setState({data:(0,b.default)({},l,{activationMode:e.target.value})});var n=t.getFieldValue("testPeriod");t.setFieldsValue({testFlow:1===e.target.value&&n>0?20:null})},a.onTestPeriodChange=function(e){var t=a.props.form,l=a.state.data;t.setFieldsValue({testFlow:1===l.activationMode&&e>0?20:null})},a.state={showPercentage:!1,data:{expOp:0,quotaOp:0,renewPrice:60,firstYearPrice:60,pkgNum:1,percentage:100,outOperation:0,level:1,activationMode:1,segment:null,testPeriod:3,testFlow:20}},a}return(0,v.default)(t,e),(0,g.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.location;if(a){var l=a.state,n=a.search;if(l){var d=l.msisdns,r=l.order,u=this.state.data;d&&this.setState({data:(0,b.default)({},u,{segment:d.join("\r\n")})}),r&&this.loadPurchase(r)}var i=n;i&&t({type:"bindpacakgecfg/get",payload:{orderNo:i.replace(/\?/,"")}}),t({type:"bizbindpkgModel/fetchcardtype"})}}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"purchaseorders/clear"})}},{key:"render",value:function(){var e=this.props,t=e.instock,a=e.currentUser,l=e.flowpools,n=e.cardtypes,p=e.form.getFieldDecorator,m=e.submitting,g=e.loading,E=e.loadingcardtype,h=e.location.pathname,v=this.state,y=v.showLevel,b=v.showPercentage,k=v.data,N=!1;void 0!==g&&(N=g);var w={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},M={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},V=a&&a.entCode&&a.entCode.length<=4;return H.default.createElement(S.default,null,H.default.createElement(d.default,{bordered:!1},H.default.createElement(C.default,{onSubmit:this.handleSubmit,style:{marginTop:8}},V&&H.default.createElement("div",null,H.default.createElement(F.default,{authority:[h,"bindpkg"]},H.default.createElement(A,(0,o.default)({},w,{label:H.default.createElement("span",null,"\u4e3b\u5957\u9910\xa0",H.default.createElement(f.default,{title:"\u65e0\u53ef\u9009\u5957\u9910?\u8bf7\u5728\u3010\u5957\u9910\u7ba1\u7406\u3011\u4e2d\u914d\u7f6e\u51fa\u5361\u5957\u9910\u4ef7\u683c"},H.default.createElement(c.default,{type:"question-circle-o"}))),className:I.default.formHeight}),p("pkgNo",{initialValue:k.pkgNo,rules:[{required:!0,message:"\u4e3b\u5957\u9910\u5fc5\u9009"}]})(H.default.createElement(Y.default,{pType:1,showPrice:!0,toBind:1,bType:1,price:k.pkgPrice}))),H.default.createElement(A,(0,o.default)({},w,{label:"\u5957\u9910\u6570\u91cf",className:I.default.formHeight}),p("pkgNum",{initialValue:k.pkgNum,rules:[{required:!0,message:"\u5957\u9910\u6570\u91cf\u5fc5\u9009"}]})(H.default.createElement(s.default,{min:1,max:100,step:1,placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u6570\u91cf"}))),H.default.createElement(A,(0,o.default)({},w,{label:H.default.createElement("span",null,"\u9644\u52a0\u8bed\u97f3\u5957\u9910\xa0",H.default.createElement(f.default,{title:"\u65e0\u53ef\u9009\u5957\u9910?\u8bf7\u5728\u3010\u5957\u9910\u7ba1\u7406\u3011\u4e2d\u914d\u7f6e\u51fa\u5361\u5957\u9910\u4ef7\u683c\u3002"},H.default.createElement(c.default,{type:"question-circle-o"}))),className:I.default.formHeight}),p("voicePkgNo",{initialValue:k.voicePkgNo})(H.default.createElement(Y.default,{pType:1,toBind:1,bType:4}))),H.default.createElement(A,(0,o.default)({},w,{label:H.default.createElement("span",null,"\u9644\u52a0\u77ed\u4fe1\u5957\u9910\xa0",H.default.createElement(f.default,{title:"\u65e0\u53ef\u9009\u5957\u9910?\u8bf7\u5728\u3010\u5957\u9910\u7ba1\u7406\u3011\u4e2d\u914d\u7f6e\u51fa\u5361\u5957\u9910\u4ef7\u683c"},H.default.createElement(c.default,{type:"question-circle-o"}))),className:I.default.formHeight}),p("smPkgNo",{initialValue:k.smPkgNo})(H.default.createElement(Y.default,{pType:1,toBind:1,bType:2}))),H.default.createElement(A,(0,o.default)({},w,{label:H.default.createElement("span",null,"\u9644\u52a0\u5b9a\u4f4d\u5957\u9910\xa0",H.default.createElement(f.default,{title:"\u65e0\u53ef\u9009\u5957\u9910?\u8bf7\u5728\u3010\u5957\u9910\u7ba1\u7406\u3011\u4e2d\u914d\u7f6e\u51fa\u5361\u5957\u9910\u4ef7\u683c"},H.default.createElement(c.default,{type:"question-circle-o"}))),className:I.default.formHeight}),p("lbsPkgNo",{initialValue:k.lbsPkgNo})(H.default.createElement(Y.default,{pType:1,toBind:1,bType:3}))),H.default.createElement(A,(0,o.default)({},w,{label:"\u5230\u671f\u64cd\u4f5c",className:I.default.formHeight}),p("expOp",{initialValue:k.expOp,rules:[{required:!0,message:"\u5230\u671f\u64cd\u4f5c\u5fc5\u9009"}]})(H.default.createElement(i.default.Group,null,H.default.createElement(i.default,{value:0},"\u65e0"),H.default.createElement(i.default,{value:1},"\u65ad\u7f51"),H.default.createElement(i.default,{value:2},"\u505c\u673a")))),H.default.createElement(A,(0,o.default)({},w,{label:"\u8fbe\u91cf\u64cd\u4f5c",className:I.default.formHeight}),p("quotaOp",{initialValue:k.quotaOp,rules:[{required:!0,message:"\u8fbe\u91cf\u64cd\u4f5c\u5fc5\u9009"}]})(H.default.createElement(i.default.Group,{onChange:this.onQuotaChange},H.default.createElement(i.default,{value:0},"\u65e0"),H.default.createElement(i.default,{value:1},"\u65ad\u7f51"),H.default.createElement(i.default,{value:2},"\u505c\u673a"),H.default.createElement(i.default,{value:4},"\u9650\u901f")))),H.default.createElement(A,(0,o.default)({style:{display:b?"":"none"}},w,{label:H.default.createElement("span",null,"\u8fbe\u91cf\u64cd\u4f5c\u6bd4\u4f8b\xa0",H.default.createElement(f.default,{title:"\u9009\u62e9\u3010\u8fbe\u91cf\u65ad\u7f51/\u9650\u901f\u3011\u65f6, \u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u767e\u5206\u6bd4\u4f8b, \u5982120%\u6216\u800580%, \u3010\u5df2\u7528\u6d41\u91cf\u3011\u4e0e\u3010\u53ef\u7528\u6d41\u91cf\u3011\u7684\u6bd4\u4f8b\u8fbe\u5230\u6216\u8d85\u8fc7\u6b64\u6bd4\u4f8b\u5c31\u8fdb\u884c\u65ad\u7f51/\u9650\u901f\u3002"},H.default.createElement(c.default,{type:"question-circle-o"}))),className:I.default.formHeight}),p("percentage",{initialValue:k.percentage})(H.default.createElement(s.default,{defaultValue:100,min:5,max:1e3,step:5,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")}}))),H.default.createElement(A,(0,o.default)({style:{display:y?"":"none"}},w,{label:H.default.createElement("span",null,"\u9650\u901f\u6321\u4f4d\xa0",H.default.createElement(f.default,{title:"\u9650\u901f\u6321\u4f4d:\u76ee\u524d\u4ec5\u652f\u6301\u79fb\u52a8\u65b0\u7cfb\u7edf(\u5f52\u5c5e\u6d41\u91cf\u6c60\u7684\u5361\u3001\u5df2\u7ecf\u8ba2\u8d2d\u81ea\u53d1\u8d77\u964d\u901f\u5546\u54c1)\u3001\u7535\u4fe1CMP/DCP\uff0c\u5176\u4ed6\u5361\u6e90\u7684\u8bbe\u7f6e\u65e0\u6548"},H.default.createElement(c.default,{type:"question-circle-o"}))),className:I.default.formHeight,extra:H.default.createElement("a",{onClick:this.linkToSpeedLevel,alt:"\u67e5\u770b\u9650\u901f\u6321\u4f4d\u53c2\u7167\u8868"},"\u67e5\u770b\u9650\u901f\u6321\u4f4d\u53c2\u7167\u8868")}),p("level",{initialValue:k.level||1,rules:[{required:y,message:"\u9650\u901f\u6321\u4f4d\u5fc5\u9009"}]})(H.default.createElement(P.default,{allowClear:!0},H.default.createElement(R,{value:1,key:1,title:"\u79fb\u52a8\u65b0EC/\u7535\u4fe1DCP=128Kbps\uff0c\u7535\u4fe1CMP=64Kbps"},"\u4e00\u6863"),H.default.createElement(R,{value:2,key:2,title:"\u79fb\u52a8\u65b0EC/\u7535\u4fe1DCP/\u7535\u4fe1CMP=512Kbps"},"\u4e8c\u6863"),H.default.createElement(R,{value:3,key:3,title:"\u79fb\u52a8\u65b0EC/\u7535\u4fe1DCP/\u7535\u4fe1CMP=1Mbps"},"\u4e09\u6863"),H.default.createElement(R,{value:4,key:4,title:"\u79fb\u52a8\u65b0EC=2Mbps,\u7535\u4fe1DCP/\u7535\u4fe1CMP=3Mbps"},"\u56db\u6863")))),H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:"\u5361\u4f53\u89c4\u683c",className:I.default.formHeight}),p("cardType",{initialValue:k.cardType})(H.default.createElement(P.default,{loading:E,placeholder:"\u8bf7\u9009\u62e9\u5361\u4f53\u89c4\u683c",showSearch:!0,optionFilterProp:"children"},n.map(function(e){return H.default.createElement(R,{key:e.value,value:e.value,label:e.title},e.title)})))),H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:H.default.createElement("span",null,"\u6fc0\u6d3b\u65b9\u5f0f\xa0",H.default.createElement(f.default,{title:"\u5361\u6e90\u6fc0\u6d3b->\u4ee5\u5361\u6e90\u6fc0\u6d3b\u65e5\u671f\u4e3a\u51c6\uff0c\u5f00\u59cb\u8ba1\u8d39; \u5e73\u53f0\u6fc0\u6d3b->\u4ee5\u5e73\u53f0\u6fc0\u6d3b\u65e5\u671f\u4e3a\u51c6[\r A\u3001\u5982\u679c\u6d4b\u8bd5\u671f\u5185\u6240\u7528\u7684\u6d41\u91cf\u3010\u5927\u4e8e\u6216\u7b49\u4e8e\u3011\u8d60\u9001\u7684\u53ef\u7528\u6d41\u91cf\uff0c\u5219\u4f1a\u6fc0\u6d3b\uff0c\u5e76\u5f00\u59cb\u8ba1\u8d39\uff1b\r B\u3001\u5982\u679c\u6c89\u9ed8\u671f\u5185\u4ea7\u751f\u6d41\u91cf\uff0c\u5219\u4f1a\u6fc0\u6d3b\uff0c\u5e76\u5f00\u59cb\u8ba1\u8d39\uff1b\r C\u3001\u5982\u679c\u6c89\u9ed8\u671f\u8d85\u8fc7\u671f\u9650\uff0c\u5219\u4f1a\u5f3a\u5236\u6027\u6fc0\u6d3b\uff0c\u5e76\u5f00\u59cb\u8ba1\u8d39]"},H.default.createElement(c.default,{type:"question-circle-o"}))),className:I.default.formHeight}),p("activationMode",{initialValue:k.activationMode,rules:[{required:!0,message:"\u6fc0\u6d3b\u65b9\u5f0f\u5fc5\u9009"}]})(H.default.createElement(i.default.Group,{onChange:this.onActivationModeChange},H.default.createElement(i.default,{value:0},"\u5361\u6e90\u6fc0\u6d3b"),H.default.createElement(i.default,{value:1},H.default.createElement("span",{style:{color:"red",fontWeight:"bold"}},"\u5e73\u53f0\u6fc0\u6d3b"))))),H.default.createElement(A,(0,o.default)({},w,{label:H.default.createElement("span",null,"\u5f00\u6237\u65e5\u671f\xa0",H.default.createElement(f.default,{title:"\u5f00\u6237\u65e5\u671f\uff1a1\u3001\u6fc0\u6d3b\u65b9\u5f0f\u4e3a\u5e73\u53f0\u6fc0\u6d3b\u65f6\u6709\u6548\uff1b2\u3001\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4e3a\u5f53\u524d\u65e5\u671f"},H.default.createElement(c.default,{type:"question-circle-o"}))),style:{display:t||0===k.activationMode?"none":""},className:I.default.formHeight}),p("oDate",{initialValue:k.oDate?(0,z.default)(k.oDate,"YYYY-MM-DD"):null})(H.default.createElement(u.default,{placeholder:"\u8bf7\u9009\u62e9\u5f00\u6237\u65e5\u671f"}))),H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:"\u6d4b\u8bd5\u671f/\u6c89\u9ed8\u671f\u65f6\u957f\u5355\u4f4d",className:I.default.formHeight}),p("periodUnit",{initialValue:k.periodUnit||0})(H.default.createElement(i.default.Group,null,H.default.createElement(i.default,{value:0},"\u81ea\u7136\u6708"),H.default.createElement(i.default,{value:1},"\u65e5")))),H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:"\u6d4b\u8bd5\u671f\u65f6\u957f",className:I.default.formHeight}),p("testPeriod",{initialValue:k.testPeriod})(H.default.createElement(s.default,{min:0,max:360,step:1,style:{width:180},onChange:this.onTestPeriodChange,placeholder:"\u8bf7\u8f93\u5165\u6d4b\u8bd5\u671f\u65f6\u957f"}))),H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:"\u6d4b\u8bd5\u671f\u53ef\u7528\u6d41\u91cf(M)",className:I.default.formHeight}),p("testFlow",{initialValue:k.testFlow})(H.default.createElement(s.default,{min:0,max:1e6,step:1,style:{width:180},placeholder:"\u8bf7\u8f93\u5165\u6d4b\u8bd5\u671f\u53ef\u7528\u6d41\u91cf"}))),H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:"\u6d4b\u8bd5\u671f\u53ef\u7528\u77ed\u4fe1(\u6761)",className:I.default.formHeight}),p("testSms",{initialValue:k.testSms})(H.default.createElement(s.default,{min:0,max:1e6,step:1,style:{width:180},placeholder:"\u8bf7\u8f93\u5165\u6d4b\u8bd5\u671f\u53ef\u7528\u77ed\u4fe1"}))),H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:"\u6c89\u9ed8\u671f\u65f6\u957f",className:I.default.formHeight}),p("silencePeriod",{initialValue:k.silencePeriod})(H.default.createElement(s.default,{min:0,max:180,step:1,style:{width:180},placeholder:"\u8bf7\u8f93\u5165\u6c89\u9ed8\u671f\u65f6\u957f"}))),H.default.createElement(F.default,{authority:[h,"outOperation"]},H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:H.default.createElement("span",null,"\u51fa\u5e93\u64cd\u4f5c\xa0",H.default.createElement(f.default,{title:"\u51fa\u5e93\u6210\u529f\u540e\uff1a\r A\u3001\u5bf9\u51fa\u5e93\u7684\u5361\u4e0d\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\uff1b\r B\u3001\u5bf9\u51fa\u5e93\u7684\u5361\u8fdb\u884c\u7acb\u5373\u65ad\u7f51\u64cd\u4f5c\uff08\u524d\u63d0\uff1a\u6709\u652f\u6301\u5361\u65ad\u7f51\u7684\u63a5\u53e3\uff09\uff1b\r C\u3001\u5bf9\u51fa\u5e93\u7684\u5361\u8fdb\u884c\u7acb\u5373\u505c\u673a\u64cd\u4f5c\uff08\u524d\u63d0\uff1a\u6709\u652f\u6301\u5361\u505c\u673a\u7684\u63a5\u53e3\uff0c\u63d0\u9192\uff1a\u8c03\u7528\u505c\u673a\u63a5\u53e3\u53ef\u80fd\u4ea7\u751f\u505c\u673a\u8d39\u7528\u3001\u5177\u4f53\u4ee5\u8fd0\u8425\u5546\u4e3a\u51c6\uff09"},H.default.createElement(c.default,{type:"question-circle-o"}))),className:I.default.formHeight}),p("outOperation",{initialValue:k.outOperation,rules:[{required:!0,message:"\u51fa\u5e93\u64cd\u4f5c"}]})(H.default.createElement(i.default.Group,null,H.default.createElement(i.default,{value:0},"\u65e0"),H.default.createElement(i.default,{value:1},"\u7acb\u5373\u65ad\u7f51"),H.default.createElement(i.default,{value:2},"\u7acb\u5373\u505c\u673a"))))))),H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:"\u76ee\u6807\u5ba2\u6237",className:I.default.formHeight}),p("inEntId",{initialValue:k.inEntId,rules:[{required:!0,message:"\u76ee\u6807\u5ba2\u6237\u5fc5\u9009"}]})(H.default.createElement(L.default,{onChange:this.onChange}))),H.default.createElement(A,(0,o.default)({style:{display:t?"none":""}},w,{label:"\u81ea\u8425\u6d41\u91cf\u6c60",className:I.default.formHeight}),p("flowPool",{initialValue:k.flowPool})(H.default.createElement(P.default,{showSearch:!0,loading:N,placeholder:"\u8bf7\u9009\u62e9\u81ea\u8425\u6d41\u91cf\u6c60",optionFilterProp:"children"},l.map(function(e){return H.default.createElement(R,{key:e.id,value:e.id},e.name)})))),H.default.createElement(A,(0,o.default)({},w,{label:H.default.createElement("span",null,"\u53f7\u6bb5",H.default.createElement("em",{className:I.default.optional},H.default.createElement(f.default,{title:"1\u3001\u53f7\u6bb5\u7528\u534a\u89d2-\u7b26\u53f7\u5206\u9694\uff1b2\u3001\u591a\u4e2a\u53f7\u6bb5\u4f7f\u7528\u6362\u884c"},H.default.createElement(c.default,{type:"info-circle-o",style:{marginRight:4}})))),className:I.default.formHeight}),p("segment",{initialValue:k.segment,rules:[{required:!0,message:"\u53f7\u6bb5\u5fc5\u586b"}]})(H.default.createElement(Q,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u53f7\u6bb5,\u4f8b\u5b50\uff1a100000001001-100000001100",rows:4})),V?H.default.createElement("div",{style:{lineHeight:1,color:"red"}},H.default.createElement("p",null," "),H.default.createElement("p",{style:{lineHeight:1.5}},"(1)\u3001\u4e3b\u5957\u9910\u7eed\u8d39\u65f6\uff0c\u5982\u679c\u6709\u9644\u52a0\u5957\u9910\uff0c\u5219\u7cfb\u7edf\u4e5f\u4f1a\u81ea\u52a8\u7eed\u8d39\u6240\u6709\u7684\u9644\u52a0\u5957\u9910"),H.default.createElement("p",null,"(2)\u3001\u53d8\u66f4\u4e3b\u5957\u9910\u65f6\uff0c\u4e0d\u4f1a\u5f71\u54cd\u9644\u52a0\u7684\u6240\u6709\u5957\u9910"),H.default.createElement("p",null,"\u793a\u4f8b\uff1a"),H.default.createElement("p",null,"(a)\u3001\u51fa\u5e93\u3010\u4e3b\u5957\u9910A\u3011\u4e14\u9644\u52a0\u3010\u8bed\u97f3\u5957\u9910V\u3011\u3002\u5982\u679c\u7eed\u8d39\u3010\u4e3b\u5957\u9910A\u3011\uff0c\u5219\u7cfb\u7edf\u4e5f\u4f1a\u81ea\u52a8\u7eed\u8d39\u3010\u8bed\u97f3\u5957\u9910V\u3011"),H.default.createElement("p",null,"(b)\u3001\u5f53\u3010\u4e3b\u5957\u9910A\u3011\u53d8\u66f4\u4e3b\u5957\u9910\u4e3a\u3010\u4e3b\u5957\u9910B\u3011\u6210\u529f\u540e\uff1b\u5bf9\u3010\u4e3b\u5957\u9910B\u3011\u7eed\u8d39\uff0c\u5219\u540c\u65f6\u7eed\u8d39\u4e86\u3010\u8bed\u97f3\u5957\u9910V\u3011")):null),H.default.createElement(A,(0,o.default)({},M,{style:{marginTop:32}}),H.default.createElement(r.default,{type:"primary",htmlType:"submit",loading:m},"\u63d0\u4ea4"),H.default.createElement(r.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),t}(H.Component),V=T))||V)||V)||V)||V),G=U;t.default=G}}]);