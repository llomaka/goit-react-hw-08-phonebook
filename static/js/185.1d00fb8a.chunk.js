"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[185],{4185:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var a=t(885),s=t(2791);function o(){var e=(0,s.useState)(""),n=(0,a.Z)(e,2),t=n[0],o=n[1],r=(0,s.useState)(""),i=(0,a.Z)(r,2),c=i[0],l=i[1],d=(0,s.useId)(),u=(0,s.useState)(!1),m=(0,a.Z)(u,2),h=m[0],x=m[1];return{name:t,setName:o,number:c,setNumber:l,id:d,openModal:h,setOpenModal:x,handleInputChange:function(e){var n=e.target,t=n.name,a=n.value;"name"===t?o(a):"number"===t&&l(a)},resetForm:function(){o(""),l("")}}}var r=t(9860),i=t(4554),c=t(9218),l=t(5646),d=t(1413);function u(){var e=(0,s.useState)({open:!1,message:""}),n=(0,a.Z)(e,2),t=n[0],o=n[1];return{open:t.open,message:t.message,setMessage:function(e){return o((function(n){return{open:!0,message:e}}))},handleClose:function(e,n){"clickaway"!==n&&o((function(e){return(0,d.Z)((0,d.Z)({},e),{},{open:!1})}))}}}var m=t(2419),h=t(6400),x=t(3329);function p(){var e=o(),n=e.name,t=e.number,d=e.id,p=e.handleInputChange,f=e.resetForm,g=u(),Z=g.open,j=g.message,b=g.setMessage,C=g.handleClose,v=(0,h.bC)().data,y=(0,h.wf)(),k=(0,a.Z)(y,2),w=k[0],P=k[1],S=P.isLoading,M=P.isSuccess;(0,s.useEffect)((function(){M&&""!==n&&(b("".concat(n," is successfully added to Contacts List!")),f())}),[M,n,f,b]);var N=function(e){return e.preventDefault(),null!==v&&void 0!==v&&v.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?b("".concat(n," is already in Contacts List!")):""===n&&""===t?b("Please enter values into Name and Number fields!"):void w({name:n,number:t})};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(i.Z,{component:"form",autoComplete:"on",onSubmit:N,sx:{display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"row"},gap:{xs:"10px",md:"20px"},alignItems:{xs:"normal",md:"flex-end"},marginBottom:"30px"},children:[(0,x.jsx)(c.Z,{autoFocus:!0,margin:"dense",id:d+"name",label:"Full Name",name:"name",type:"text",variant:"standard",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"John Smith",onChange:p,value:n}),(0,x.jsx)(c.Z,{margin:"dense",id:d+"number",label:"Phone Number",name:"number",type:"tel",variant:"standard",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"050-123-23-23",onChange:p,value:t}),(0,x.jsx)(r.Z,{sx:{display:{xs:"none",md:"flex"}},startIcon:(0,x.jsx)(m.Z,{}),type:"submit",onClick:N,name:"submit_button",variant:"contained",loading:S,children:"Add contact"}),(0,x.jsx)(r.Z,{sx:{display:{xs:"block",md:"none"},lineHeight:"0"},type:"submit",onClick:N,name:"submit_button",variant:"contained",loading:S,children:(0,x.jsx)(m.Z,{})})]}),(0,x.jsx)(l.Z,{autoHideDuration:3e3,open:Z,onClose:C,message:j})]})}var f=t(5048),g=t(105),Z=t(9281),j=t(703),b=t(9836),C=t(6890),v=t(5855),y=t(3382),k=t(3418),w=t(493),P=t(4852),S=t(9900),M=t(2199),N=t(4518),F=t(6088),L=t(7247),I=t(1286),A=t(4942),z=t(8745),E=t(618),_=t(6934),D=(0,_.ZP)(z.Z)((function(e){var n,t=e.theme;return n={},(0,A.Z)(n,"&.".concat(E.Z.head),{backgroundColor:t.palette.primary.dark,color:t.palette.common.white}),(0,A.Z)(n,"&.".concat(E.Z.body),{fontSize:14}),n})),O=(0,_.ZP)(v.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),B=t(5289),W=t(5661),q=t(9157),H=t(7123);function J(e){var n=e.contactObj,t=e.openModal,i=e.setOpenModal,d=o(),m=d.name,p=d.setName,f=d.number,g=d.setNumber,Z=d.id,j=d.handleInputChange,b=d.resetForm,C=(0,h.bC)().data,v=u(),y=v.open,k=v.message,w=v.setMessage,P=v.handleClose,S=(0,h.zP)(),M=(0,a.Z)(S,2),F=M[0],L=M[1],A=L.isLoading,z=L.isSuccess;(0,s.useEffect)((function(){p(n.name),g(n.number)}),[n,p,g]),(0,s.useEffect)((function(){z&&""!==m&&(w("Contact ".concat(m," information is successfully changed!")),b(),i(!1))}),[z,m,b,w,i]);var E=function(e){return"edit"!==e.target.name?(i(!1),void b()):m.toLowerCase()===n.name.toLowerCase()&&f===n.number?w("Please make changes to contact ".concat(m," information or press Cancel to exit Edit Contact dialog.")):null!==C&&void 0!==C&&C.find((function(e){return e.name.toLowerCase()===m.toLowerCase()}))?w("".concat(m," is already in Contacts List!")):""===m&&""===f?w("Please enter values into Name and Number fields!"):void F({id:n.id,name:m,number:f})};return(0,x.jsxs)(x.Fragment,{children:[m&&(0,x.jsxs)(B.Z,{open:t,onClose:E,children:[(0,x.jsx)(W.Z,{children:"Contact Information"}),(0,x.jsxs)(q.Z,{children:[(0,x.jsx)(c.Z,{autoFocus:!0,margin:"dense",id:Z+"name",label:"Full Name",name:"name",type:"text",fullWidth:!0,variant:"standard",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"John Smith",onChange:j,value:m}),(0,x.jsx)(c.Z,{margin:"dense",id:Z+"number",label:"Phone Number",name:"number",type:"tel",fullWidth:!0,variant:"standard",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"050-123-23-23",onChange:j,value:f})]}),(0,x.jsxs)(H.Z,{children:[(0,x.jsx)(r.Z,{startIcon:(0,x.jsx)(I.Z,{}),onClick:E,name:"edit",variant:"contained",loading:A,children:"Edit"}),(0,x.jsx)(N.Z,{onClick:E,variant:"contained",children:"Cancel"})]})]}),(0,x.jsx)(l.Z,{autoHideDuration:1e3,open:y,onClose:P,message:k})]})}var $=t(890);function R(e){var n=e.contact,t=e.handleEdit,s=e.handleDelete,o=(0,h.W1)(),i=(0,a.Z)(o,2)[1].isLoading;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(z.Z,{component:"th",scope:"row",children:(0,x.jsx)($.Z,{children:n.name})}),(0,x.jsx)(z.Z,{children:(0,x.jsx)($.Z,{children:n.number})}),(0,x.jsx)(z.Z,{align:"right",children:(0,x.jsxs)(M.Z,{variant:"contained","aria-label":"edit/delete contact button group",children:[(0,x.jsx)(N.Z,{startIcon:(0,x.jsx)(I.Z,{}),onClick:function(){return t(n)},variant:"outlined",children:"Edit"}),(0,x.jsx)(r.Z,{startIcon:(0,x.jsx)(L.Z,{}),onClick:function(){return s(n.id,n.name)},variant:"contained",loading:i,children:"Delete"})]})})]})}function G(){var e=(0,s.useState)(0),n=(0,a.Z)(e,2),t=n[0],c=n[1],d=(0,s.useState)(1),m=(0,a.Z)(d,2),p=m[0],A=m[1],z=(0,s.useState)(10),E=(0,a.Z)(z,2),_=E[0],B=E[1],W=(0,s.useState)({}),q=(0,a.Z)(W,2),H=q[0],$=q[1],G=(0,s.useState)(""),K=(0,a.Z)(G,2),Q=K[0],T=K[1],U=(0,f.v9)(g.S),V=(0,h.bC)().data,X=void 0===V?[]:V,Y=(0,s.useMemo)((function(){return X.filter((function(e){return e.name.toLowerCase().includes(U.toLowerCase())})).sort((function(e,n){return e.name.localeCompare(n.name)}))}),[X,U]),ee=u(),ne=ee.open,te=ee.message,ae=ee.setMessage,se=ee.handleClose,oe=o(),re=oe.openModal,ie=oe.setOpenModal,ce=(0,h.W1)(),le=(0,a.Z)(ce,2),de=le[0],ue=le[1],me=ue.isLoading,he=ue.isSuccess,xe=ue.reset,pe=(0,f.I0)();(0,s.useEffect)((function(){pe(h.ZP.util.resetApiState())}),[pe]),(0,s.useEffect)((function(){he&&""!==Q&&(ae("Contact ".concat(Q," is successfully deleted!")),T(""),xe())}),[he,ae,xe,T,Q]);var fe=function(e){$(e),ie(!0)},ge=function(e,n){de(e),T(n)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z.Z,{component:j.Z,sx:{display:{xs:"none",md:"block"}},children:(0,x.jsxs)(b.Z,{sx:{minWidth:480},"aria-label":"contacts table",size:"small",children:[(0,x.jsx)(C.Z,{children:(0,x.jsxs)(v.Z,{children:[(0,x.jsx)(D,{children:"Full Name"}),(0,x.jsx)(D,{children:"Phone Number"}),(0,x.jsx)(D,{align:"right",children:"Edit/Delete Contact"})]})}),(0,x.jsx)(y.Z,{children:Y.slice(t*_,t*_+_).map((function(e){return(0,x.jsx)(O,{children:(0,x.jsx)(R,{contact:e,handleEdit:fe,handleDelete:ge})},e.id)}))})]})}),(0,x.jsx)(k.Z,{rowsPerPageOptions:[5,10,25,50],component:"div",count:Y.length,rowsPerPage:_,page:t,onPageChange:function(e,n){c(n)},onRowsPerPageChange:function(e){B(parseInt(e.target.value,10)),c(0)},sx:{display:{xs:"none",md:"block"}}}),(0,x.jsx)(w.Z,{sx:{display:{xs:"block",md:"none"}},children:Y.slice(10*(p-1),10*(p-1)+10).map((function(e){return(0,x.jsxs)(P.ZP,{children:[(0,x.jsxs)(S.Z,{children:[e.name,": ",e.number]}),(0,x.jsxs)(M.Z,{variant:"contained","aria-label":"edit/delete contact button group",children:[(0,x.jsx)(N.Z,{onClick:function(){return fe(e)},variant:"outlined",children:(0,x.jsx)(I.Z,{})}),(0,x.jsx)(r.Z,{onClick:function(){return ge(e.id,e.name)},variant:"contained",loading:me,children:(0,x.jsx)(L.Z,{})})]})]},e.id)}))}),(0,x.jsx)(i.Z,{my:2,sx:{display:{xs:"flex",md:"none"},justifyContent:"center"},children:(0,x.jsx)(F.Z,{count:Math.ceil(Y.length/10),page:p,onChange:function(e,n){A(n)}})}),(0,x.jsx)(l.Z,{autoHideDuration:1e3,open:ne,onClose:se,message:te}),(0,x.jsx)(J,{contactObj:H,openModal:re,setOpenModal:ie})]})}var K=t(1634),Q=t(5095),T=t.n(Q);function U(){var e=(0,f.v9)(g.S),n=(0,f.I0)(),t=T()((function(e){return n((0,K.M)(e))}),350);return(0,x.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center",marginBottom:"15px"},children:[(0,x.jsx)($.Z,{children:"Find contact by name"}),(0,x.jsx)(c.Z,{variant:"standard",type:"text",name:"filter",onChange:function(e){t(e.target.value)},value:e})]})}function V(){return(0,x.jsxs)(i.Z,{children:[(0,x.jsx)($.Z,{variant:"h4",component:"h1",align:"center",gutterBottom:!0,mt:2,children:"Phonebook Contacts"}),(0,x.jsx)(p,{}),(0,x.jsx)(U,{}),(0,x.jsx)(G,{})]})}}}]);
//# sourceMappingURL=185.1d00fb8a.chunk.js.map