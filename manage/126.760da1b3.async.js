(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[126],{"9GnL":function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var u=l(a("bx4M"));a("+L6B");var r=l(a("2/Rp"));a("Telt");var d=l(a("Tckk")),o=l(a("pVnL")),f=l(a("lwsE")),c=l(a("W8MJ")),s=l(a("a1gu")),i=l(a("Nsbk")),p=l(a("7W2i"));a("y8nQ");var m,b,y,g,v=l(a("Vl3Y")),E=n(a("q1tI")),h=l(a("HZnN")),k=a("MuoO"),w=l(a("usdK")),N=l(a("ufQ4")),C=l(a("zHco")),S=v.default.Item,I=(m=(0,k.connect)(function(e){var t=e.publicno,a=e.loading;return{publicNoInfo:t.publicNoInfo,loading:a.effects["publicno/get"]}}),b=h.default.Secured("/baseManager/entmanager/publicNo/:id"),y=v.default.create(),m(g=(0,N.default)(g=b(g=y(g=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,s.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(n))),a.onCancel=function(){w.default.goBack()},a}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match,l=a.params.id;l&&t({type:"publicno/get",payload:l})}},{key:"render",value:function(){var e=this.props,t=e.publicNoInfo,a=e.loading,l={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},n={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return E.default.createElement(C.default,null,E.default.createElement(u.default,{bordered:!1,loading:a},E.default.createElement(v.default,{style:{marginTop:8}},E.default.createElement(S,(0,o.default)({},l,{label:"\u673a\u6784\u540d\u79f0"}),t.enterpriseName),E.default.createElement(S,(0,o.default)({},l,{label:"\u5b9e\u4f8bKey"}),t.instanceKey),E.default.createElement(S,(0,o.default)({},l,{label:"\u7528\u6237\u540d"}),null!=t.bodyStr?t.bodyStr.UserName:null),E.default.createElement(S,(0,o.default)({},l,{label:"\u6635\u79f0"}),null!=t.bodyStr?t.bodyStr.NickName:null),E.default.createElement(S,(0,o.default)({},l,{label:"\u5934\u50cf"}),E.default.createElement(d.default,{size:64,shape:"square",src:null!=t.bodyStr?t.bodyStr.HeadPicture:null})),E.default.createElement(S,(0,o.default)({},n,{style:{marginTop:32}}),E.default.createElement(r.default,{style:{marginLeft:8},onClick:this.onCancel},"\u8fd4\u56de")))))}}]),t}(E.Component))||g)||g)||g)||g),M=I;t.default=M}}]);