(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110],{HN4J:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("pVnL"));a("5NDa");var d=l(a("5rEg"));a("14J3");var i=l(a("BMrR"));a("+L6B");var s=l(a("2/Rp"));a("jCWc");var o=l(a("kPKH"));a("+BJd");var u=l(a("mr32"));a("5Dmo");var p=l(a("3S7+"));a("Pwec");var c=l(a("CtXQ")),f=l(a("lwsE")),m=l(a("W8MJ")),g=l(a("a1gu")),h=l(a("Nsbk")),v=l(a("7W2i")),E=l(a("PJYZ")),S=l(a("MVZn"));a("y8nQ");var y=l(a("Vl3Y"));a("2qtc");var C,x,b,w,N=l(a("kLXV")),k=n(a("q1tI")),z=l(a("KLZ9")),I=l(a("HZnN")),V=a("MuoO"),M=l(a("ufQ4")),F=l(a("+b2g")),L=l(a("s98B")),D=N.default.confirm,T=y.default.Item,B=(C=y.default.create(),x=(0,V.connect)(function(e){var t=e.user,a=e.servicepassword,l=e.loading;return(0,S.default)({currentUser:t.currentUser},a,{loading:l.effects["servicepassword/page"]})}),b=I.default.Secured("/helpservice/servicepassword"),(0,M.default)(w=C(w=x(w=b(w=function(e){function t(e){var a;return(0,f.default)(this,t),a=(0,g.default)(this,(0,h.default)(t).call(this,e)),a.columns=[{title:"\u5ba2\u6237",dataIndex:"enterpriseName",width:250},{title:"\u5bc6\u7801",dataIndex:"password",width:80},{title:k.default.createElement("span",null,"\u9009\u9879\xa0",k.default.createElement(p.default,{title:"\u9002\u7528\u9a8c\u8bc1\u9009\u9879\uff1a\u77ed\u4fe1=\u9002\u7528\u77ed\u4fe1\u6536\u53d1\u3001\u67e5\u770b\u65f6\u9a8c\u8bc1\uff1b\u767d\u540d\u5355=\u9002\u7528\u767d\u540d\u5355\u8bbe\u7f6e\u65f6\u9a8c\u8bc1\uff1b\u5168\u90e8\uff08\u5305\u62ec\u77ed\u4fe1\u3001\u767d\u540d\u5355\uff09"},k.default.createElement(c.default,{type:"question-circle-o"}))),dataIndex:"optionTxt",width:80},{title:"\u65f6\u95f4",dataIndex:"updateTime",width:180},{title:"\u64cd\u4f5c",dataIndex:"id",width:80,render:function(e,t){return k.default.createElement("a",{onClick:function(){return a.delOption(t)}},"\u5220\u9664")}}],a.loadData=function(e){var t=a.props.dispatch;t({type:"servicepassword/page",payload:e})},a.delOption=function(e){N.default.confirm({title:"\u5220\u9664\u670d\u52a1\u5bc6\u7801",content:"\u786e\u5b9a\u5220\u9664\u3010".concat(e.enterpriseName,"\u3011\u670d\u52a1\u5bc6\u7801\u5417\uff1f"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return a.deleteItem(e)}})},a.deleteItem=function(e){var t=a.props,l=t.dispatch,n=t.currentUser,r=a.state,d=r.pageSize,i=r.entCode;l({type:"servicepassword/del",payload:{entCode:i||n.entCode,id:e.id,pageIndex:0,pageSize:d}})},a.handleStandardTableChange=function(e){var t=a.props.currentUser,l=a.state,n=l.formValues,r=l.entCode;a.setState({pageSize:e.pageSize});var d=(0,S.default)({pageIndex:e.current-1,pageSize:e.pageSize,entCode:r||t.entCode},n);a.loadData(d)},a.onSelect=function(e,t){t&&t.selectedNodes&&t.selectedNodes.length>0&&a.setState({selectEnterpriseName:t.selectedNodes[0].props.title,enterprise:t.selectedNodes[0].props.dataRef.id}),a.setState({entCode:e[0]});var l=a.state.pageSize,n=a.props.currentUser;a.loadData({pageIndex:0,pageSize:l,entCode:e[0]||n.entCode})},a.handleFormReset=function(){var e=a.props,t=e.form,l=e.currentUser;t.resetFields(),a.setState({formValues:{}});var n=a.state.pageSize;a.loadData({pageIndex:0,pageSize:n,entCode:l.entCode,enterprise:l.enterprise})},a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.form,n=t.currentUser,r=a.state.pageSize;l.validateFields(function(e,t){if(!e){var l=(0,S.default)({},t,{pageIndex:0,pageSize:r,entCode:n.entCode});a.setState({formValues:t}),a.loadData(l)}})},a.handleExport=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=t.currentUser,d=a.state.pageSize;n.validateFields(function(e,t){if(!e){a.setState({exporting:!0});var n=(0,S.default)({},t,{pageIndex:0,pageSize:d,entCode:r.entCode,downTask:!0});a.setState({formValues:t}),l({type:"servicepassword/page",payload:n}).then(function(){a.setState({exporting:!1})})}})},a.handleModalVisible=function(){a.setState({updateModalVisible:!1})},a.showModal=function(){a.setState({updateModalVisible:!0})},a.handleAdd=function(e){var t=(0,E.default)((0,E.default)(a)),l=a.state,n=l.enterprise,r=l.entCode,d=l.pageSize;if(e){var i={password:e.password,destType:e.destType,enterprise:n,entCode:r};D({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u8bbe\u7f6e\u670d\u52a1\u5bc6\u7801?",onOk:function(){t.handleModalVisible();var e=t.props.dispatch;e({type:"servicepassword/add",payload:i}).then(function(){t.loadData({pageIndex:0,pageSize:d,entCode:r})})}})}},a.state={formValues:{},pageSize:10,entCode:void 0,exporting:!1,selectEnterpriseName:void 0,updateModalVisible:!1,enterprise:void 0},a}return(0,v.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentUser;this.setState({entCode:e.entCode,selectEnterpriseName:e.enterpriseName,enterprise:e.enterprise})}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,a=t.exporting,l=t.selectEnterpriseName;return k.default.createElement("div",{style:{marginLeft:10,paddingBottom:10}},k.default.createElement("div",{style:{marginBottom:10,paddingTop:20,backgroundColor:"#FFFBE5",border:"1px solid",borderColor:"#FDCC9B"}},k.default.createElement("div",null,k.default.createElement("p",null,k.default.createElement(u.default,{style:{marginLeft:30},color:"#f50"},"\u8bf4\u660e\uff1a\u670d\u52a1\u5bc6\u7801\u4ec5\u9002\u7528\u5ba2\u6237\u76f4\u5c5e\u7684\u5361")),k.default.createElement("p",null,k.default.createElement(u.default,{style:{marginLeft:30},color:"magenta"},"\u670d\u52a1\u5bc6\u7801\u8bbe\u7f6e\u6d41\u7a0b\uff1a")),k.default.createElement("p",null,k.default.createElement(u.default,{style:{marginLeft:60},color:"magenta"},"1\u3001\u8bf7\u5728\u5de6\u8fb9\u3010\u5ba2\u6237\u6811\u5217\u3011\u4e2d\u3010\u9009\u4e2d\u3011\u8981\u64cd\u4f5c\u7684\u3010\u76ee\u6807\u5ba2\u6237\u3011")),k.default.createElement("p",null,k.default.createElement(u.default,{style:{marginLeft:60},color:"magenta"},"2\u3001\u70b9\u51fb\u3010\u53f3\u8fb9\u3011\u6309\u94ae\u3010\u8bbe\u7f6e\u670d\u52a1\u5bc6\u7801\u3011")),k.default.createElement("p",null,k.default.createElement(u.default,{style:{marginLeft:60},color:"magenta"},"3\u3001\u4e0a\u7ea7\u53ef\u4ee5\u7ed9\u81ea\u5df1\u3001\u76f4\u5c5e\u4e0b\u7ea7\u5ba2\u6237\u6216\u6240\u6709\u4e0b\u7ea7\u5ba2\u6237\u8bbe\u7f6e\uff1b\u4e0b\u7ea7\u5ba2\u6237\u4e5f\u53ef\u4ee5\u81ea\u884c\u8bbe\u7f6e"))),k.default.createElement(i.default,{gutter:{md:8,lg:24,xl:48},style:{marginLeft:5}},k.default.createElement(o.default,{md:12,sm:24},k.default.createElement(T,{label:"\u76ee\u6807\u5ba2\u6237"},l)),k.default.createElement(o.default,{md:12,sm:24},k.default.createElement(s.default,{type:"primary",onClick:this.showModal},"\u8bbe\u7f6e\u670d\u52a1\u5bc6\u7801")))),k.default.createElement(y.default,{onSubmit:this.handleSearch,layout:"inline"},k.default.createElement(i.default,{gutter:{md:8,lg:24,xl:48}},k.default.createElement(o.default,{md:12,sm:24},k.default.createElement(T,{label:"\u5ba2\u6237"},e("enterpriseName")(k.default.createElement(d.default,{style:{maxWidth:300},placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237",allowClear:!0})))),k.default.createElement(o.default,{md:12,sm:24},k.default.createElement("span",{className:L.default.submitButtons},k.default.createElement(s.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),k.default.createElement(s.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),k.default.createElement(s.default,{style:{marginLeft:8},type:"primary",icon:"file-excel",loading:a,onClick:this.handleExport},"\u5bfc\u51fa\u5168\u90e8"))))))}},{key:"render",value:function(){var e=this.props,t=e.pageData,a=e.loading,l=e.currentUser,n=this.state,d=n.updateModalVisible,i=n.selectEnterpriseName,s={handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible},o={onSelect:this.onSelect,defaultSelectedKeys:[l.entCode]},u={scrollX:800,rowKey:"id",columns:this.columns,data:t,onChange:this.handleStandardTableChange,loading:a,size:"small"};return k.default.createElement("div",null,k.default.createElement("div",null,k.default.createElement(z.default,{entpriseInit:o,SearchForm:this.renderSimpleForm(),tableInit:u})),k.default.createElement(F.default,(0,r.default)({},s,{entName:i,modalVisible:d})))}}]),t}(k.Component))||w)||w)||w)||w),U=B;t.default=U},s98B:function(e,t,a){e.exports={tableListForm:"antd-pro\\pages\\-help-service\\-service-password\\index-tableListForm",submitButtons:"antd-pro\\pages\\-help-service\\-service-password\\index-submitButtons",tableAlert:"antd-pro\\pages\\-help-service\\-service-password\\index-tableAlert"}}}]);