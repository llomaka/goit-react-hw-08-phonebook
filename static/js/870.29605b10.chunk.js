"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[870],{8107:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),r=t(885),s=t(2791);function o(){var e=(0,s.useState)({open:!1,message:""}),n=(0,r.Z)(e,2),t=n[0],o=n[1];return{open:t.open,setOpen:function(){return o((function(e){return(0,a.Z)((0,a.Z)({},e),{},{open:!0})}))},message:t.message,setMessage:function(e){return o((function(n){return(0,a.Z)((0,a.Z)({},n),{},{message:e})}))},handleClose:function(e,n){"clickaway"!==n&&o((function(e){return(0,a.Z)((0,a.Z)({},e),{},{open:!1})}))}}}},5870:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(5861),r=t(885),s=t(7757),o=t.n(s),i=t(2791),c=t(5048),l=t(6871),u=t(9888),m=t(8107),d=t(5646),p=t(3044),h=t(9860),g=t(9218),f=t(43),x=t(1889),Z=t(4554),w=t(403),j=t(890),v=t(1614),b=t(3329);function k(){var e=(0,i.useState)(""),n=(0,r.Z)(e,2),t=n[0],s=n[1],k=(0,i.useState)(""),C=(0,r.Z)(k,2),y=C[0],S=C[1],_=(0,i.useId)(),D=(0,c.I0)(),I=(0,l.s0)(),P=(0,m.Z)(),U=P.open,W=P.message,F=P.setOpen,q=P.setMessage,E=P.handleClose,M=(0,c.v9)(u.um.isSigningInUser),O=function(e){var n=e.target,t=n.name,a=n.value;"email"===t?s(a):"password"===t&&S(a)},A=function(){var e=(0,a.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),D(u.r5.loginUser({email:t,password:y})),q("User with ".concat(t," is successfully logged in!")),F(),s(""),S(""),I("/contacts");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(v.Z,{component:"main",maxWidth:"xs",children:(0,b.jsxs)(Z.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(p.Z,{sx:{m:1,bgcolor:"primary.main"},children:(0,b.jsx)(w.Z,{})}),(0,b.jsx)(j.Z,{component:"h2",variant:"h5",children:"Sign in"}),(0,b.jsxs)(Z.Z,{component:"form",onSubmit:A,noValidate:!0,sx:{mt:1},children:[(0,b.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Email Address",autoComplete:"email",autoFocus:!0,type:"email",name:"email",title:"Email address",id:_+"email",placeholder:"olomaka@gmail.com",onChange:O,value:t}),(0,b.jsx)(g.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Password",autoComplete:"current-password",type:"password",name:"password",minLength:8,title:"Password must be longer, than 8 characters, contain at least one number and one uppercase character, not contain spaces and parentheses",id:_+"password",placeholder:"pa$sw0rD",onChange:O,value:y}),(0,b.jsx)(h.Z,{onClick:A,type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},loading:M,children:"Sign In"}),(0,b.jsx)(x.ZP,{container:!0,justifyContent:"flex-end",children:(0,b.jsx)(x.ZP,{item:!0,children:(0,b.jsx)(f.Z,{href:"/goit-react-hw-08-phonebook/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})}),(0,b.jsx)(d.Z,{autoHideDuration:1e3,open:U,onClose:E,message:W})]})}function C(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(k,{})})}}}]);
//# sourceMappingURL=870.29605b10.chunk.js.map