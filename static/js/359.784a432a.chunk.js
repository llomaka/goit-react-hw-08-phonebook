"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[359],{2835:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(2007),a=t.n(s),r="Header_text__4jGdp",o=t(3329);function i(e){var n=e.text;return(0,o.jsx)("h1",{className:r,children:n})}Notification.propTypes={text:a().string.isRequired}},8107:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(1413),a=t(885),r=t(2791);function o(){var e=(0,r.useState)({open:!1,message:""}),n=(0,a.Z)(e,2),t=n[0],o=n[1];return{open:t.open,setOpen:function(){return o((function(e){return(0,s.Z)((0,s.Z)({},e),{},{open:!0})}))},message:t.message,setMessage:function(e){return o((function(n){return(0,s.Z)((0,s.Z)({},n),{},{message:e})}))},handleClose:function(e,n){"clickaway"!==n&&o((function(e){return(0,s.Z)((0,s.Z)({},e),{},{open:!1})}))}}}},9359:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var s=t(2835),a=t(5861),r=t(885),o=t(7757),i=t.n(o),u=t(2791),c=t(9434),l=t(6871),m=t(9888),d=t(8107),p=t(5646),h="LoginForm_form__gPEx5",f="LoginForm_fields__ZPX58",g="LoginForm_label__F7sLE",_="LoginForm_input__aQRtt",x="LoginForm_button__LodJg",w=t(3329);function Z(){var e=(0,u.useState)(""),n=(0,r.Z)(e,2),t=n[0],s=n[1],o=(0,u.useState)(""),Z=(0,r.Z)(o,2),b=Z[0],j=Z[1],v=(0,u.useId)(),F=(0,c.I0)(),N=(0,l.s0)(),k=(0,d.Z)(),C=k.open,L=k.message,y=k.setOpen,E=k.setMessage,S=k.handleClose,P=function(e){var n=e.target,t=n.name,a=n.value;"email"===t?s(a):"password"===t&&j(a)},q=function(){var e=(0,a.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),F(m.r5.loginUser({email:t,password:b})),E("User with ".concat(t," is successfully logged in!")),y(),s(""),j(""),N("/contacts");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("form",{className:h,autoComplete:"on",onSubmit:q,children:[(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)("label",{className:g,htmlFor:v+"email",children:"Email *"}),(0,w.jsx)("input",{className:_,type:"email",name:"email",title:"Email address",required:!0,id:v+"email",placeholder:"olomaka@gmail.com",onChange:P,value:t})]}),(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)("label",{className:g,htmlFor:v+"password",children:"Password *"}),(0,w.jsx)("input",{className:_,type:"password",name:"password",minLength:8,title:"Password must be longer, than 8 characters, contain at least one number and one uppercase character, not contain spaces and parentheses",required:!0,id:v+"password",placeholder:"pa$sw0rD",onChange:P,value:b})]}),(0,w.jsx)("button",{className:x,type:"submit",name:"submit_button",children:"Sign In"})]}),(0,w.jsx)(p.Z,{autoHideDuration:1e3,open:C,onClose:S,message:L})]})}function b(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s.Z,{text:"Enter Login Credentials"}),(0,w.jsx)(Z,{})]})}}}]);
//# sourceMappingURL=359.784a432a.chunk.js.map