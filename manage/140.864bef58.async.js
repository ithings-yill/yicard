(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[140],{"4g83":function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("14J3");var d=l(a("BMrR"));a("iQDF");var o=l(a("+eQT"));a("jCWc");var i=l(a("kPKH"));a("5NDa");var u=l(a("5rEg"));a("+L6B");var s=l(a("2/Rp"));a("miYZ");var c=l(a("tsqr")),f=l(a("lwsE")),p=l(a("W8MJ")),m=l(a("a1gu")),h=l(a("Nsbk")),g=l(a("7W2i")),w=l(a("PJYZ")),x=l(a("MVZn"));a("2qtc");var v=l(a("kLXV"));a("y8nQ");var E,y,S,b,k=l(a("Vl3Y")),R=n(a("q1tI")),I=l(a("KLZ9")),T=l(a("HZnN")),F=a("MuoO"),z=l(a("EUZL")),D=l(a("ufQ4")),M=l(a("BbWs")),Y=k.default.Item,C=v.default.confirm,N=(E=k.default.create(),y=(0,F.connect)(function(e){var t=e.user,a=e.downtask,l=e.loading;return(0,x.default)({currentUser:t.currentUser},a,{loading:l.effects["downtask/list"]})}),S=T.default.Secured("/other/downtask"),(0,D.default)(b=E(b=y(b=S(b=function(e){function t(e){var a;return(0,f.default)(this,t),a=(0,m.default)(this,(0,h.default)(t).call(this,e)),a.columns=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u5ba2\u6237",dataIndex:"enterpriseName"},{title:"\u521b\u5efa\u7528\u6237",dataIndex:"userName"},{title:"\u72b6\u6001",dataIndex:"stateTxt",render:function(e,t){return R.default.createElement("span",{style:{color:0===t.state?"#F65327":"#17A05D"}},e)}},{title:"\u6587\u4ef6",dataIndex:"id",align:"center",render:function(e,t){return 1===t.state?R.default.createElement("a",{href:"".concat("https://api-prod.yi-ll.com/card/").concat("v1","/downloadtask/").concat(e)},"\u4e0b\u8f7d"):null}},{title:"\u65f6\u95f4",dataIndex:"updateTime"}],a.componentDidMount=function(){var e={pageIndex:0,pageSize:10},t=a.props.dispatch;t({type:"downtask/list",payload:e})},a.handleStandardTableChange=function(e,t,l){var n=a.props.dispatch,r=a.state.formValues,d=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},o=Object.keys(t).reduce(function(e,a){var l=(0,x.default)({},e);return l[a]=d(t[a]),l},{});a.setState({pageSize:e.pageSize});var i=(0,x.default)({pageIndex:e.current-1,pageSize:e.pageSize},r,o);l.field&&(i.sorter="".concat(l.field,"_").concat(l.order)),n({type:"downtask/list",payload:i})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=a.state.pageSize;n.validateFields(function(e,t){if(!e){var n=t.begin?"".concat(t.begin.format("YYYY-MM-DD HH:mm:ss")):null,d=t.end?"".concat(t.end.format("YYYY-MM-DD HH:mm:ss")):null,o=(0,x.default)({},t,{pageIndex:0,pageSize:r,begin:n,end:d});a.setState({formValues:t,begin:n,end:d}),l({type:"downtask/list",payload:o})}})},a.handleFormReset=function(){var e=a.state.pageSize,t=a.props,l=t.form,n=t.dispatch;l.resetFields(),a.setState({formValues:{}}),n({type:"downtask/list",payload:{pageIndex:0,pageSize:e}})},a.handleExport=function(){var e=a.state.selectedRows;0!==e.length?a.exportToFile(e):c.default.warning("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},a.handleExportAll=function(){var e=(0,w.default)((0,w.default)(a));C({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u5bfc\u51fa\u5168\u90e8?",onOk:function(){e.exportAll()}})},a.exportAll=function(){var e=a.props.dispatch,t=a.state,l=t.formValues,n=t.end,r=t.begin,d=(0,x.default)({},l,{pageSize:10,pageIndex:0,begin:r,end:n,downTask:!0});a.setState({exporting:!0}),e({type:"downtask/list",payload:d}).then(function(){e({type:"downtask/list",payload:{pageIndex:0,pageSize:10}}),a.setState({exporting:!1})})},a.exportToFile=function(e){if(e&&0!==e.length){var t=e.map(function(e){return{"\u6807\u9898":e.title,"\u5ba2\u6237":e.enterpriseName,"\u521b\u5efa\u7528\u6237":e.userName,"\u72b6\u6001":e.stateTxt,"\u65f6\u95f4":e.updateTime,"\u4e0b\u8f7d":e.attachedFile}}),a=z.default.utils.json_to_sheet(t),l=z.default.utils.book_new();z.default.utils.book_append_sheet(l,a,"ws"),z.default.writeFile(l,"\u4e0b\u4efb\u52a1\u8bb0\u5f55.xlsx")}else c.default.warning("\u65e0\u6570\u636e!")},a.renderOperator=function(){var e=a.state.exporting;return R.default.createElement(R.Fragment,null,R.default.createElement(s.default,{onClick:a.handleExport,loading:e,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),R.default.createElement(s.default,{style:{marginLeft:8},type:"primary",ghost:!0,loading:e,icon:"file-excel",onClick:a.handleExportAll},"\u5bfc\u51fa\u5168\u90e8"),R.default.createElement(s.default,{style:{marginLeft:8},loading:e,icon:"reload",shape:"circle",onClick:a.handleSearch}))},a.state={selectedRows:[],formValues:{},pageSize:10,exporting:!1,begin:null,end:null},a}return(0,g.default)(t,e),(0,p.default)(t,[{key:"renderSearchForm",value:function(){var e=this.props.form.getFieldDecorator;return R.default.createElement(k.default,{onSubmit:this.handleSearch,layout:"inline"},R.default.createElement(d.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},R.default.createElement(i.default,{md:8,sm:24},R.default.createElement(Y,{label:"\u6807\u9898"},e("title")(R.default.createElement(u.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898",allowClear:!0})))),R.default.createElement(i.default,{md:8,sm:24},R.default.createElement(Y,{label:"\u5f00\u59cb\u65f6\u95f4"},e("begin")(R.default.createElement(o.default,{showTime:!0,placeholder:"\u5f00\u59cb\u65f6\u95f4"}))))),R.default.createElement(d.default,{gutter:{md:8,lg:24,xl:48},style:{marginBottom:10}},R.default.createElement(i.default,{md:8,sm:24},R.default.createElement(Y,{label:"\u622a\u6b62\u65f6\u95f4"},e("end")(R.default.createElement(o.default,{showTime:!0,placeholder:"\u622a\u6b62\u65f6\u95f4"})))),R.default.createElement(i.default,{md:8,sm:24},R.default.createElement("span",{className:M.default.submitButtons},R.default.createElement(s.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),R.default.createElement(s.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e")))))}},{key:"render",value:function(){var e=this.props,t=e.pubData,a=e.loading,l=this.state.selectedRows,n={columns:this.columns,selectedRows:l,data:t,onChange:this.handleStandardTableChange,loading:a,onSelectRow:this.handleSelectRows,checkBox:!0,size:"small",expandedRowRender:this.expandedRowRender,className:"components-table-demo-nested"};return R.default.createElement(r.default,null,R.default.createElement(I.default,{tableInit:n,SearchForm:this.renderSearchForm(),Operator:this.renderOperator()}))}}]),t}(R.Component))||b)||b)||b)||b),B=N;t.default=B},BbWs:function(e,t,a){}}]);