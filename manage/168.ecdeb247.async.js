(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[168],{EcrP:function(e,t,n){"use strict";var a=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("14J3");var o=a(n("BMrR"));n("jCWc");var r=a(n("kPKH"));n("sRBo");var i=a(n("kaz8"));n("+L6B");var l=a(n("2/Rp")),d=a(n("jehZ"));n("miYZ");var s=a(n("tsqr")),u=a(n("2Taf")),c=a(n("vZ4D")),f=a(n("rlhR")),m=a(n("MhPg")),p=a(n("l4Ni")),h=a(n("ujKo")),g=a(n("p0pE"));n("2qtc");var v,D,y,S=a(n("kLXV")),w=b(n("q1tI")),x=n("MuoO"),Y=a(n("EUZL")),C=a(n("wd/R")),M=a(n("ufQ4")),E=a(n("HZnN")),F=a(n("KLZ9")),T=a(n("wwJy")),I=a(n("j2WA")),k=a(n("/nlN")),B=a(n("TGaQ"));function P(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(P=function(e){return e?n:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=P(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}function R(e){var t=O();return function(){var n,a=(0,h.default)(e);if(t){var o=(0,h.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,p.default)(this,n)}}function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var z="YYYYMM",A=S.default.confirm,L=[{title:"\u8fd0\u8425\u5546",dataIndex:"oTypeTxt",sorter:!0,width:130},{title:"\u9500\u552e\u5ba2\u6237",dataIndex:"sName",width:230},{title:"\u4e3b\u5957\u9910",dataIndex:"packageName",width:200},{title:"\u5361\u72b6\u6001",dataIndex:"statusTxt",sorter:!0,width:100},{title:"\u672c\u6708\u7528\u91cf(M)",dataIndex:"uFlow",sorter:!0,width:120},{title:"\u5df2\u7528\u6d41\u91cf(M)",dataIndex:"uPFlow",sorter:!0,width:120},{title:"\u53ef\u7528\u6d41\u91cf(M)",dataIndex:"tPFlow",sorter:!0,width:120},{title:"\u5df2\u7528\u77ed\u4fe1(\u6761)",dataIndex:"uPSms",sorter:!0,width:120},{title:"\u53ef\u7528\u77ed\u4fe1(\u6761)",dataIndex:"tPSms",sorter:!0,width:120},{title:"\u77ed\u4fe1\u8d39(\u5143)",dataIndex:"uSms",width:100,render:function(e,t){return.1*t.uSms}},{title:"\u5df2\u7528\u5b9a\u4f4d(\u6b21)",dataIndex:"uPLbs",sorter:!0,width:120},{title:"\u53ef\u7528\u5b9a\u4f4d(\u6b21)",dataIndex:"tPLbs",sorter:!0,width:120},{title:"\u6fc0\u6d3b\u65e5\u671f",dataIndex:"aDateTxt",sorter:!0,width:100},{title:"\u670d\u52a1\u5f00\u59cb",dataIndex:"effDateTxt",sorter:!0,width:130},{title:"\u670d\u52a1\u622a\u6b62",dataIndex:"invDateTxt",sorter:!0,width:130}],V=(v=(0,x.connect)(function(e){var t=e.user,n=e.monthmodel,a=e.loading;return(0,g.default)({},n,{currentUser:t.currentUser,loading:a.effects["monthmodel/page"],Downloading:a.effects["monthmodel/list"],loadingcardtype:a.effects["monthmodel/fetchcardtype"]})}),D=E.default.Secured("/record/monthreport"),(0,M.default)(y=v(y=D(y=function(e){(0,m.default)(n,e);var t=R(n);function n(e){var a;return(0,u.default)(this,n),a=t.call(this,e),a.scrollX=2300,a.headColumns=[{title:"\u5361\u53f7",dataIndex:"msisdn",sorter:!0,fixed:"left",width:120},{title:"ICCID",dataIndex:"iccid",sorter:!0,fixed:"left",width:170}],a.columns=[],a.onStatistics=function(){var e=a.state,t=e.pageSize,n=e.entCode,o=e.isAdvanced,r=e.month,i=e.formValues,l=(0,g.default)({segmentsQuery:o},i,{pageIndex:0,pageSize:t,entCode:n,month:r,effDateBegin:i.effDateBegin?"".concat(i.effDateBegin.format("YYYY-MM-DD")," 00:00:00"):null,effDateEnd:i.effDateEnd?"".concat(i.effDateEnd.format("YYYY-MM-DD")," 00:00:00"):null,invDateBegin:i.invDateBegin?"".concat(i.invDateBegin.format("YYYY-MM-DD")," 00:00:00"):null,invDateEnd:i.invDateEnd?"".concat(i.invDateEnd.format("YYYY-MM-DD")," 00:00:00"):null}),d=a.props.dispatch;d({type:"monthmodel/queryStatistics",payload:l})},a.doCount=function(e){var t=a.props.dispatch;t({type:"monthmodel/getstockCount",payload:{month:e}}),setTimeout(function(){a.onStatistics()},1e3)},a.loadCost=function(e){var t,n=a.state.month,o=a.props,r=o.dispatch,i=o.currentUser;r({type:"monthmodel/getCost",payload:{month:n,entCode:null!==(t=e)&&void 0!==t?t:i.entCode}})},a.handleStandardTableChange=function(e,t,n){var o=null;if(n){var r=n.field,i=n.order;o={field:r,order:i}}var l=e.current;a.setState({pageSize:e.pageSize});var d=a.state,s=d.formValues,u=d.entCode,c=d.isAdvanced,f=(0,g.default)({segmentsQuery:c,pageIndex:l-1,pageSize:e.pageSize,entCode:u},s,{sorter:o});a.loadData(f,1===l)},a.loadData=function(e,t){var n=a.props.dispatch,o=a.state.month;if(e.month){var r="".concat(e.month.format(z));r!==o&&a.doCount(r)}var i=e.month?"".concat(e.month.format(z)):o;n({type:"monthmodel/page",payload:(0,g.default)({},e,{month:i})}).then(function(){t&&a.onStatistics()})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.onSelect=function(e){a.setState({entCode:e[0]});var t=a.state.pageSize,n={pageIndex:0,pageSize:t,entCode:e[0]};a.loadData(n,!0)},a.handleSearch=function(e){var t=a.state,n=t.pageSize,o=t.entCode,r=t.isAdvanced,i=(0,g.default)({segmentsQuery:r},e,{pageIndex:0,pageSize:n,entCode:o,effDateBegin:e.effDateBegin?"".concat(e.effDateBegin.format("YYYY-MM-DD")," 00:00:00"):null,effDateEnd:e.effDateEnd?"".concat(e.effDateEnd.format("YYYY-MM-DD")," 00:00:00"):null,invDateBegin:e.invDateBegin?"".concat(e.invDateBegin.format("YYYY-MM-DD")," 00:00:00"):null,invDateEnd:e.invDateEnd?"".concat(e.invDateEnd.format("YYYY-MM-DD")," 00:00:00"):null});a.setState({formValues:e,month:"".concat(e.month.format(z))}),a.loadData(i,!0)},a.handleFormReset=function(){var e=a.state,t=e.pageSize,n=e.entCode;a.setState({formValues:{}});var o={pageIndex:0,pageSize:t,entCode:n};a.loadData(o,!0)},a.onQueryTypeChange=function(e){a.setState({queryType:e})},a.handleExport=function(){var e=(0,f.default)(a);A({okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u5bfc\u51fa\u5168\u90e8?",onOk:function(){e.exportAll()}})},a.exportAll=function(){var e=a.props.dispatch,t=a.state,n=t.formValues,o=t.entCode,r=t.month,i=t.isAdvanced,l=(0,g.default)({segmentsQuery:i,entCode:o},n,{pageSize:1e6,pageIndex:0,month:r,downTask:!0});a.setState({exporting:!0}),e({type:"monthmodel/list",payload:l}).then(function(){a.setState({exporting:!1})})},a.downLoad=function(){var e=a.state.selectedRows;0!==e.length?(a.setState({exporting:!0}),a.exportToFile(e),a.setState({exporting:!1})):s.default.warning("\u8bf7\u5148\u52fe\u9009\u5217\u8868\u6570\u636e!")},a.exportToFile=function(e){var t=e.map(function(e){return{"\u5361\u53f7":e.msisdn,ICCID:e.iccid,"\u8fd0\u8425\u5546":e.oTypeTxt,"\u9500\u552e\u5ba2\u6237":e.sName,"\u4e3b\u5957\u9910":e.packageName,"\u5361\u72b6\u6001":e.statusTxt,"\u672c\u6708\u7528\u91cf":e.uFlow,"\u5df2\u7528\u6d41\u91cf":e.uPFlow,"\u53ef\u7528\u6d41\u91cf":e.tPFlow,"\u5df2\u7528\u77ed\u4fe1":e.uPSms,"\u53ef\u7528\u77ed\u4fe1":e.tPSms,"\u77ed\u4fe1\u8d39":.1*e.uPSms,"\u5df2\u7528\u5b9a\u4f4d":e.uPLbs,"\u53ef\u7528\u5b9a\u4f4d":e.tPLbs,"\u6fc0\u6d3b\u65e5\u671f":e.aDateTxt}}),n=Y.default.utils.json_to_sheet(t),a=Y.default.utils.book_new();Y.default.utils.book_append_sheet(a,n,"cardinfo"),Y.default.writeFile(a,"\u6708\u62a5\u8868".concat((0,C.default)().format("YYYY-MM-DD hh_mm"),".xlsx"))},a.toggleForm=function(){var e=a.state.isAdvanced;a.setState({isAdvanced:!e,queryType:0})},a.filterForm=function(){var e=a.state.filterFormVisible;a.setState({filterFormVisible:!e})},a.filterOk=function(){a.filterForm()},a.onFilterChange=function(e){e&&(a.columns=[],a.headColumns.map(function(e,t){return a.columns.splice(t,0,e)}),e.map(function(e,t){var n=L.find(function(t){return t.dataIndex===e});return a.columns.splice(t+2,0,n)}),a.scrollX=0,a.columns.map(function(e){return a.scrollX+=e.width}),a.scrollX<1e3&&(a.scrollX=1100))},a.getPreMonth=function(){var e=new Date;return e.setMonth(e.getMonth()-1),(0,C.default)(e).format(z)},a.costStatistics=function(){var e=a.state,t=e.pageSize,n=e.entCode,o=e.isAdvanced,r=e.month,i=e.formValues,l=(0,g.default)({segmentsQuery:o},i,{pageIndex:0,pageSize:t,entCode:n,month:r,effDateBegin:i.effDateBegin?"".concat(i.effDateBegin.format("YYYY-MM-DD")," 00:00:00"):null,effDateEnd:i.effDateEnd?"".concat(i.effDateEnd.format("YYYY-MM-DD")," 00:00:00"):null,invDateBegin:i.invDateBegin?"".concat(i.invDateBegin.format("YYYY-MM-DD")," 00:00:00"):null,invDateEnd:i.invDateEnd?"".concat(i.invDateEnd.format("YYYY-MM-DD")," 00:00:00"):null}),d=a.props.dispatch;d({type:"monthmodel/costStatistics",payload:l})},a.state={selectedRows:[],formValues:{},pageSize:10,exporting:!1,filterFormVisible:!1,month:a.getPreMonth(),isAdvanced:!1,queryType:0},a.columns=[],a.headColumns.map(function(e,t){return a.columns.splice(t,0,e)}),L.map(function(e,t){return a.columns.splice(t+2,0,e)}),a.scrollX=0,a.columns.map(function(e){return a.scrollX+=e.width?e.width:120}),a}return(0,c.default)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state.month;this.doCount(t),setTimeout(function(){e.loadCardType()},2e3);var n=this.props.currentUser,a=n&&n.entCode&&n.entCode.length<=4;a&&setTimeout(function(){e.loadOperator()},1e3)}},{key:"loadCardType",value:function(){var e=this.props.dispatch;e({type:"monthmodel/fetchcardtype"})}},{key:"loadOperator",value:function(){var e=this.props.dispatch;e({type:"monthmodel/queryOperator"})}},{key:"renderSimpleForm",value:function(){return w.default.createElement(I.default,(0,d.default)({},this.props,{monthDate:(0,C.default)(this.getPreMonth(),z),handleFormReset:this.handleFormReset,handleSearch:this.handleSearch,toggleForm:this.toggleForm,statisticsForm:w.default.createElement(k.default,{onStatistics:this.onStatistics})}))}},{key:"renderAdvancedForm",value:function(){var e=this.state,t=e.uBegin,n=e.uEnd,a=e.queryType,o=e.invDateBegin,r=e.invDateEnd,i=e.oType;return w.default.createElement(T.default,(0,d.default)({},this.props,{monthDate:(0,C.default)(this.getPreMonth(),z),oType:i,queryType:a,uBegin:t,uEnd:n,invDateBegin:o,invDateEnd:r,handleFormReset:this.handleFormReset,handleSearch:this.handleSearch,toggleForm:this.toggleForm,onQueryTypeChange:this.onQueryTypeChange,statisticsForm:w.default.createElement(k.default,{onStatistics:this.onStatistics})}))}},{key:"renderOperator",value:function(){var e=this.state.exporting,t=this.props.currentUser,n=t&&t.entCode&&4===t.entCode.length;return w.default.createElement(w.Fragment,null,w.default.createElement("span",null,w.default.createElement(l.default,{onClick:this.downLoad,icon:"download"},"\u5bfc\u51fa[\u9009\u4e2d]"),w.default.createElement(l.default,{style:{marginLeft:8},type:"primary",icon:"file-excel",loading:e,onClick:this.handleExport},"\u5bfc\u51fa\u5168\u90e8"),w.default.createElement(l.default,{style:{marginLeft:8},onClick:this.filterForm,icon:"filter"},"\u6570\u636e\u5217\u7b5b\u9009"),n&&w.default.createElement(l.default,{style:{marginLeft:8},type:"danger",ghost:!0,onClick:this.costStatistics,icon:"calculator"},"\u7535\u4fe1\u8d39\u7528\u8ba1\u7b97\u5668")))}},{key:"render",value:function(){var e=this.props,t=e.pageData,n=e.loading,a=e.currentUser,l=e.statisticsTotal,d=this.state,s=d.selectedRows,u=d.isAdvanced,c=d.filterFormVisible,f={onSelect:this.onSelect,defaultSelectedKeys:[a.entCode],limit:8,statisticsTotal:l,property:["inStock"],propertyColor:"#F65327",treeHeight:B.default.treeHeight},m={columns:this.columns,selectedRows:s,onChange:this.handleStandardTableChange,loading:n,onSelectRow:this.handleSelectRows,checkBox:!0,scroll:{x:this.scrollX},size:"small"};m.data=t;var p=u?this.renderAdvancedForm():this.renderSimpleForm();return w.default.createElement(w.default.Fragment,null,w.default.createElement(F.default,{entpriseInit:f,tableInit:m,SearchForm:p,Operator:this.renderOperator()}),w.default.createElement(S.default,{destroyOnClose:!0,title:"\u6570\u636e\u5217\u8fc7\u6ee4",visible:c,onOk:this.filterOk,onCancel:this.filterForm},w.default.createElement(i.default.Group,{style:{width:"100%"},defaultValue:this.columns.map(function(e){return e.dataIndex}),onChange:this.onFilterChange},w.default.createElement(o.default,null,L.map(function(e){return w.default.createElement(r.default,{key:e.dataIndex,span:8},w.default.createElement(i.default,{value:e.dataIndex},e.title))})))))}}]),n}(w.Component))||y)||y)||y),j=V;t.default=j}}]);