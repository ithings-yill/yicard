(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[143],{GRju:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var d=n(a("bx4M")),r=n(a("pVnL"));a("Pwec");var i=n(a("CtXQ"));a("14J3");var u=n(a("BMrR"));a("+L6B");var o=n(a("2/Rp"));a("jCWc");var p=n(a("kPKH"));a("5NDa");var c=n(a("5rEg"));a("+BJd");var s=n(a("mr32"));a("miYZ");var f=n(a("tsqr"));a("/zsF");var g=n(a("PArb"));a("Awhp");var m=n(a("KrTs")),b=n(a("lwsE")),h=n(a("W8MJ")),y=n(a("a1gu")),v=n(a("Nsbk")),C=n(a("7W2i")),E=n(a("PJYZ")),T=n(a("MVZn"));a("Znn+");var k=n(a("ZTPi"));a("y8nQ");var S=n(a("Vl3Y"));a("2qtc");var z,x,V,I,P,M=n(a("kLXV")),w=l(a("q1tI")),D=a("MuoO"),F=n(a("ZhIB")),L=n(a("HZnN")),B=n(a("ufQ4")),N=n(a("KLZ9")),R=n(a("oVyD")),Z=n(a("Y1/D")),A=M.default.confirm,U=S.default.Item,J=k.default.TabPane,K=(z=(0,D.connect)(function(e){var t=e.bizpackagecfg,a=e.loading;return(0,T.default)({},t,{pageLoading:a.effects["bizpackagecfg/page"],delLoading:a.effects["bizpackagecfg/del"]})}),x=S.default.create(),V=L.default.Secured("/business/package/bizpackage"),z(I=x(I=(0,B.default)(I=V((P=function(e){function t(e){var a;(0,b.default)(this,t),a=(0,y.default)(this,(0,v.default)(t).call(this,e)),a.state={pageSize:10,updateModalVisible:!1,formValues:{},price:0,uType:1,entCode:null,pType:1,guidingPrice:0},a.columns=[{title:"\u7f16\u7801",dataIndex:"pkgNo",render:function(e){return w.default.createElement("span",null,e>0?"31".concat((Array(6).join(0)+e).slice(-6)):"--")}},{title:"\u5957\u9910\u540d\u79f0",dataIndex:"pName"},{title:"\u5957\u9910\u7c7b\u578b",dataIndex:"pTypeName"},{title:"\u6388\u6743",dataIndex:"id",render:function(e){return w.default.createElement("span",null,w.default.createElement(m.default,{status:e>0?"success":"error"}),e>0?"\u5df2\u6388\u6743":"\u672a\u6388\u6743")}},{title:"\u6807\u51c6\u8d44\u8d39",dataIndex:"guidingPrice",render:function(e){return w.default.createElement("span",{style:{color:"blue"}},"\xa5 ".concat((0,F.default)(e).format("0,0.00")))}},{title:"\u5957\u9910\u4ef7\u683c",dataIndex:"price",render:function(e){return w.default.createElement("span",{style:{color:"red"}},"\xa5 ".concat((0,F.default)(e).format("0,0.00")))}},{title:"\u5c5e\u6027",dataIndex:"oTypeTxt"},{title:"\u64cd\u4f5c",render:function(e,t){var n=a.props,l=n.location.pathname,d=n.currentUser,r=a.state.entCode,i=d.entCode!==r||4===d.entCode.length&&d.entCode===r;return w.default.createElement(w.Fragment,null,i?w.default.createElement(L.default,{authority:[l,"edit"]},w.default.createElement("a",{onClick:function(){return a.handleUpdateModalVisible("edit",t)}},t.id>0?"\u4fee\u6539\u5b9a\u4ef7":"\u5b9a\u4ef7\u6388\u6743")):null,i&&t.id>0&&(4!==d.entCode.length||4===d.entCode.length&&d.entCode!==r)?w.default.createElement(w.Fragment,null,w.default.createElement(g.default,{type:"vertical"}),w.default.createElement(L.default,{authority:[l,"edit"]},w.default.createElement("a",{onClick:function(){return a.delPkg(t)}},"\u53d6\u6d88\u6388\u6743"))):null)}}],a.colTags={title:"\u6807\u6ce8",dataIndex:"tags",width:100},a.delPkg=function(e){var t=(0,E.default)((0,E.default)(a)),n=a.props.dispatch;A({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u53d6\u6d88\u6388\u6743\u5e76\u5220\u9664\u5957\u9910\u3010".concat(e.pName,"\u3011\u4ef7\u683c\u914d\u7f6e\uff0c\u8be5\u64cd\u4f5c\u5c06\u540c\u65f6\u5220\u9664\u6240\u6709\u4e0b\u7ea7\u7684\u4f01\u4e1a\u5ba2\u6237\u3001\u516c\u4f17\u53f7\u4ef7\u683c\u914d\u7f6e?"),onOk:function(){n({type:"bizpackagecfg/delPkg",payload:e.id}).then(function(){var e={current:1,pageSize:10};t.handleStandardTableChange(e)})}})},a.handleStandardTableChange=function(e){a.setState({pageSize:e.pageSize});var t=a.state,n=t.uType,l=t.entCode,d=t.pType,r={pageIndex:e.current-1,pageSize:e.pageSize,uType:n,entCode:l,pType:d};a.loadData(r)},a.handleModalVisible=function(e){a.setState({updateModalVisible:!!e})},a.handleUpdateModalVisible=function(e,t){a.setState({updateModalVisible:!!e,formValues:t||{},price:t.price||0,guidingPrice:t.guidingPrice||0})},a.handleAdd=function(e){var t=a.props.dispatch,n=a.state,l=n.formValues,d=n.entCode,r=n.uType;if(d){if(e){var i=(0,T.default)({},l,{price:e.price,uType:r,entCode:d});t({type:"bizpackagecfg/post",payload:i}).then(function(){var e=a.state,t=e.pageSize,n=e.pType;a.loadData({pageIndex:0,pageSize:t,uType:r,entCode:d,pType:n})})}a.handleModalVisible()}else f.default.info("\u8bf7\u9009\u62e9\u673a\u6784")},a.onSelect=function(e){if(e&&0!==e.length&&e[0]){a.setState({entCode:e[0]});var t=a.state,n=t.uType,l=t.pageSize,d=t.pType;a.loadData({pageIndex:0,pageSize:l,uType:n,entCode:e[0],pType:d})}else f.default.info("\u8bf7\u91cd\u65b0\u9009\u62e9\u673a\u6784")},a.handleFormReset=function(){var e=a.props.form;e.resetFields(),a.setState({formValues:{}});var t=a.state,n=t.uType,l=t.pageSize,d=t.entCode,r=t.pType;a.loadData({pageIndex:0,pageSize:l,uType:n,entCode:d,pType:r})},a.handleSearch=function(e){e.preventDefault();var t=a.props.form,n=a.state,l=n.uType,d=n.pageSize,r=n.entCode,i=n.pType;t.validateFields(function(e,t){if(!e){var n=(0,T.default)({},t,{pageIndex:0,pageSize:d,uType:l,entCode:r,pType:i});a.setState({formValues:t}),a.loadData(n)}})},a.loadData=function(e){var t=a.props.dispatch;t({type:"bizpackagecfg/page",payload:e})},a.onChange=function(e){a.setState({pType:e});var t=a.props.form;t.resetFields(),a.setState({formValues:{}});var n=a.state,l=n.uType,d=n.pageSize,r=n.entCode;a.loadData({pageIndex:0,pageSize:d,uType:l,entCode:r,pType:e})},a.renderSimpleForm=function(){var e=a.props.currentUser,t=a.state.entCode,n=a.props.form.getFieldDecorator;return w.default.createElement("div",null,w.default.createElement("div",null,w.default.createElement("div",{style:{marginBottom:10}},e.entCode.length>4?w.default.createElement(s.default,{color:"blue"},e.entCode===t?"\u5f53\u524d\u7684\u5957\u9910\u3010\u4ee3\u7406\u4ef7\u683c\u3011":"1\u3001\u7ed9\u3010\u4e0b\u7ea7\u5ba2\u6237\u3011\u914d\u7f6e\u5957\u9910\u3010\u4ee3\u7406\u4ef7\u683c\u3011\uff1b2\u3001\u5220\u9664\u64cd\u4f5c\u5c06\u540c\u65f6\u5220\u9664\u5176\u6240\u6709\u4e0b\u7ea7\u7684\u4f01\u4e1a\u5ba2\u6237\u3001\u516c\u4f17\u53f7\u4ef7\u683c\u914d\u7f6e"):null,e.entCode.length<=4&&e.entCode!==t?w.default.createElement(s.default,{color:"blue"},"1\u3001\u7ed9\u3010\u4e0b\u7ea7\u5ba2\u6237\u3011\u914d\u7f6e\u5957\u9910\u3010\u4ee3\u7406\u4ef7\u683c\u3011\uff1b2\u3001\u5220\u9664\u64cd\u4f5c\u5c06\u540c\u65f6\u5220\u9664\u5176\u6240\u6709\u4e0b\u7ea7\u7684\u4f01\u4e1a\u5ba2\u6237\u3001\u516c\u4f17\u53f7\u4ef7\u683c\u914d\u7f6e"):null),e.entCode.length<=4?w.default.createElement("div",{style:{marginBottom:10}},w.default.createElement(s.default,{color:"magenta"},"\u5982\u679c\u65e0\u5957\u9910\u53ef\u4ee5\u914d\u7f6e\uff0c\u8bf7\u5230\u3010\u5957\u9910\u5b9a\u4e49\u3011\u4e2d\u6dfb\u52a0\u5957\u9910")):null),w.default.createElement("div",{style:{paddingBottom:10,paddingTop:10}},w.default.createElement(S.default,{onSubmit:a.handleSearch,layout:"inline"},w.default.createElement(u.default,{gutter:{md:8,lg:24,xl:48}},w.default.createElement(p.default,{md:8,sm:24},w.default.createElement(U,{label:"\u5957\u9910\u540d\u79f0"},n("pName")(w.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u540d\u79f0",allowClear:!0})))),w.default.createElement(p.default,{md:16,sm:24},w.default.createElement("span",{className:Z.default.submitButtons},w.default.createElement(o.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),w.default.createElement(o.default,{style:{marginLeft:8},onClick:a.handleFormReset},"\u91cd\u7f6e")))))),w.default.createElement("div",null,w.default.createElement(k.default,{defaultActiveKey:"1",onChange:a.onChange},w.default.createElement(J,{tab:w.default.createElement("span",null," ",w.default.createElement(i.default,{type:"fund"}),"\u57fa\u7840\u5305"),key:"1"}),w.default.createElement(J,{tab:w.default.createElement("span",null," ",w.default.createElement(i.default,{type:"rocket"}),"\u52a0\u6cb9\u5305"),key:"3"}))))};var n=a.props.currentUser,l=n&&n.entCode&&n.entCode.length<=4;return l&&a.columns.splice(6,0,a.colTags),a}return(0,C.default)(t,e),(0,h.default)(t,[{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"bizpackagecfg/clearRenew"})}},{key:"render",value:function(){var e=this.props,t=e.pageData,a=e.pageLoading,n=e.currentUser,l=this.state,i=l.updateModalVisible,u=l.price,o=l.guidingPrice,p={};t&&(p=t);var c={handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible},s={onSelect:this.onSelect,defaultSelectedKeys:[n.entCode],limit:4},f={columns:this.columns,data:p,onChange:this.handleStandardTableChange,loading:a,rowKey:"pkgNo",checkBox:!1,size:"small"};return w.default.createElement(d.default,{bordered:!1},w.default.createElement(N.default,{entpriseInit:s,tableInit:f,SearchForm:this.renderSimpleForm()}),w.default.createElement(R.default,(0,r.default)({},c,{price:u,guidingPrice:o,modalVisible:i})))}}]),t}(w.PureComponent),I=P))||I)||I)||I)||I),O=K;t.default=O},"Y1/D":function(e,t,a){e.exports={tableList:"antd-pro\\pages\\-business\\-package\\-biz-package\\index-tableList",tableListOperator:"antd-pro\\pages\\-business\\-package\\-biz-package\\index-tableListOperator",tableListForm:"antd-pro\\pages\\-business\\-package\\-biz-package\\index-tableListForm",submitButtons:"antd-pro\\pages\\-business\\-package\\-biz-package\\index-submitButtons",editableRow:"antd-pro\\pages\\-business\\-package\\-biz-package\\index-editableRow","ant-form-explain":"antd-pro\\pages\\-business\\-package\\-biz-package\\index-ant-form-explain"}}}]);