(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{aPun:function(e,t,a){e.exports={baseView:"antd-pro\\pages\\-account\\-settings-baseView",left:"antd-pro\\pages\\-account\\-settings-left",right:"antd-pro\\pages\\-account\\-settings-right",avatar_title:"antd-pro\\pages\\-account\\-settings-avatar_title",avatar:"antd-pro\\pages\\-account\\-settings-avatar",button_view:"antd-pro\\pages\\-account\\-settings-button_view"}},dUIO:function(e,t,a){"use strict";var l=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var s=l(a("5rEg")),n=l(a("MVZn")),i=l(a("lwsE")),u=l(a("W8MJ")),d=l(a("a1gu")),c=l(a("Nsbk")),o=l(a("7W2i"));a("DZo9");var f=l(a("8z0m"));a("+L6B");var p=l(a("2/Rp"));a("OaEy");var m=l(a("2fM7"));a("y8nQ");var g,v,b,h,E=l(a("Vl3Y")),y=r(a("q1tI")),M=a("LLXN"),w=a("MuoO"),k=l(a("ufQ4")),N=l(a("HZnN")),U=l(a("aPun")),V=l(a("6LTJ")),D=E.default.Item,F=m.default.Option,_=function(e){var t=e.avatar;return y.default.createElement(y.Fragment,null,y.default.createElement("div",{className:U.default.avatar_title},y.default.createElement(M.FormattedMessage,{id:"app.settings.basic.avatar",defaultMessage:"Avatar"})),y.default.createElement("div",{className:U.default.avatar},y.default.createElement("img",{src:t,alt:"avatar"})),y.default.createElement(f.default,{fileList:[]},y.default.createElement("div",{className:U.default.button_view},y.default.createElement(p.default,{icon:"upload"},y.default.createElement(M.FormattedMessage,{id:"app.settings.basic.change-avatar",defaultMessage:"Change avatar"})))))},I=function(e,t,a){if(t){var l=t.province,r=t.city;l.key||a("\u8bf7\u9009\u62e9\u7701\u4efd!"),r.key||a("\u8bf7\u9009\u62e9\u57ce\u5e02!"),a()}else a()},L=(g=E.default.create(),v=(0,w.connect)(function(e){var t=e.loading;return{submitting:t.effects["account/putCurrent"]}}),(0,k.default)(b=g(b=v((h=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return a=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(r))),a.setBaseInfo=function(){var e=a.props,t=e.currentUser,l=e.form;Object.keys(l.getFieldsValue()).forEach(function(e){var a={};if("geographic"===e){var r=t.province,s=t.city;a[e]={province:{key:r||"",label:""},city:{key:s||"",label:""}}}else a[e]=t[e]||null;l.setFieldsValue(a)})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.currentUser,r=t.form;r.validateFields(function(e,t){if(!e){var r=t.geographic,s=r.province,i=r.city,u=(0,n.default)({},l,t,{province:s.key,city:i.key});delete u.geographic;var d=a.props.dispatch;d({type:"account/putCurrent",payload:u})}})},a.getViewDom=function(e){a.view=e},a}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.setBaseInfo()}},{key:"componentDidUpdate",value:function(e){var t=e.currentUser,a=this.props.currentUser;t.id!==a.id&&this.setBaseInfo()}},{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e.avatar)return e.avatar;var t="https://res.yi-ll.com/template/boy-4.png";return t}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.location.pathname,l=e.submitting;return y.default.createElement("div",{className:U.default.baseView,ref:this.getViewDom},y.default.createElement("div",{className:U.default.left},y.default.createElement(E.default,{layout:"vertical",onSubmit:this.handleSubmit,hideRequiredMark:!0},y.default.createElement(D,{label:(0,M.formatMessage)({id:"app.settings.basic.email"})},t("eMail")(y.default.createElement(s.default,{placeholder:(0,M.formatMessage)({id:"app.settings.basic.email-message"})}))),y.default.createElement(D,{label:(0,M.formatMessage)({id:"app.settings.basic.nickname"})},t("name")(y.default.createElement(s.default,{placeholder:(0,M.formatMessage)({id:"app.settings.basic.nickname-message"})}))),y.default.createElement(D,{label:(0,M.formatMessage)({id:"app.settings.basic.introduce"})},t("introduce")(y.default.createElement(s.default.TextArea,{placeholder:(0,M.formatMessage)({id:"app.settings.basic.introduce-placeholder"}),rows:4}))),y.default.createElement(D,{label:(0,M.formatMessage)({id:"app.settings.basic.country"})},t("country")(y.default.createElement(m.default,{placeholder:"\u8bf7\u9009\u62e9\u56fd\u5bb6/\u5730\u533a",style:{maxWidth:220}},y.default.createElement(F,{value:"China"},"\u4e2d\u56fd")))),y.default.createElement(D,{label:(0,M.formatMessage)({id:"app.settings.basic.geographic"})},t("geographic",{rules:[{validator:I}]})(y.default.createElement(V.default,null))),y.default.createElement(D,{label:(0,M.formatMessage)({id:"app.settings.basic.address"})},t("address")(y.default.createElement(s.default,{placeholder:(0,M.formatMessage)({id:"app.settings.basic.address-message"})}))),y.default.createElement(D,{label:(0,M.formatMessage)({id:"app.settings.basic.mobile"})},t("mobile",{rules:[{pattern:/^1[3|4|5|7|8][0-9]{9}$/,message:(0,M.formatMessage)({id:"app.settings.basic.mobile-error"})}]})(y.default.createElement(s.default,{placeholder:(0,M.formatMessage)({id:"app.settings.basic.mobile-message"})}))),y.default.createElement(N.default,{authority:[a,"edit"]},y.default.createElement(p.default,{loading:l,type:"primary",htmlType:"submit"},y.default.createElement(M.FormattedMessage,{id:"app.settings.basic.update",defaultMessage:"Update Information"}))))),y.default.createElement("div",{className:U.default.right},y.default.createElement(_,{avatar:this.getAvatarURL()})))}}]),t}(y.Component),b=h))||b)||b)||b),O=L;t.default=O}}]);