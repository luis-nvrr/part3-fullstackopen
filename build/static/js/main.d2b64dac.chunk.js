(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var c=t(1),r=t(15),u=t.n(r),o=(t(20),t(4)),a=t(3),i=t(0),s=function(n){var e=n.value,t=n.onChange,c=n.onBlur;return Object(i.jsxs)("div",{children:["filter starts with",Object(i.jsx)("input",{value:e,onChange:t,onBlur:c})]})},f=function(n){var e=Object(o.a)({},n),t=e.onSubmit,c=e.nameValue,r=e.nameOnChange,u=e.numberValue,a=e.numberOnChange;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:c,onChange:r})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:u,onChange:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(n){var e=n.name,t=n.number,c=n.id,r=n.onDelete;return Object(i.jsxs)("div",{children:[e," ",t," ",Object(i.jsx)("button",{onClick:r(c),children:"delete"})]})},b=function(n){var e=n.personsArray,t=n.onDelete;return Object(i.jsx)("div",{children:e.map((function(n){return Object(i.jsx)(d,{name:n.name,number:n.number,id:n.id,onDelete:t},n.name)}))})},j=t(5),l=t.n(j),m="/api/persons",h=function(){return l.a.get(m).then((function(n){return n.data}))},O=function(n){return l.a.post(m,n).then((function(n){return n.data}))},v=function(n,e){return l.a.put("".concat(m,"/").concat(n),e).then((function(n){return n.data}))},p=function(n){return l.a.delete("".concat(m,"/").concat(n)).then((function(n){return n.data}))},x=function(n){var e=n.message,t=n.notificationType;return null===e?null:Object(i.jsx)("div",{className:t,children:e})},g=function(){var n=Object(c.useState)([]),e=Object(a.a)(n,2),t=e[0],r=e[1],u=Object(c.useState)([]),d=Object(a.a)(u,2),j=d[0],l=d[1],m=Object(c.useState)(""),g=Object(a.a)(m,2),w=g[0],C=g[1],y=Object(c.useState)(""),S=Object(a.a)(y,2),k=S[0],D=S[1],B=Object(c.useState)(""),L=Object(a.a)(B,2),N=L[0],V=L[1],A=Object(c.useState)(null),E=Object(a.a)(A,2),T=E[0],I=E[1],J=Object(c.useState)(""),P=Object(a.a)(J,2),q=P[0],z=P[1];Object(c.useEffect)((function(){h().then((function(n){r(n)}))}),[]);var F=function(n){l(G(n))},G=function(n){return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},H=function(){O({name:w,number:k}).then((function(n){r(t.concat(n)),U()})).catch((function(n){Y(n.response.data.error)}))},K=function(n){return t.find((function(e){return e.id===n}))},M=function(){var n=_(w),e=Object(o.a)(Object(o.a)({},n),{},{number:k});v(e.id,e).then((function(n){r(t.map((function(e){return e.id!==n.id?e:n}))),W()})).catch((function(n){Z(e.name),Q(e.name)}))},Q=function(n){r(t.filter((function(e){return e.id!==n})))},R=function(){setTimeout((function(){return I(null)}),5e3)},U=function(){I("New person added: ".concat(w)),z("success"),R()},W=function(){I("Successfully updated ".concat(w)),z("success"),R()},X=function(n){I("Successfully removed ".concat(n)),z("success"),R()},Y=function(n){I("".concat(n)),z("error"),R()},Z=function(n){I("Error updating ".concat(n)),z("error"),R()},$=function(n){I("".concat(n," has been already removed from the server")),z("error"),R()},_=function(n){return t.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))},nn=function(){C(""),D("")},en=function(){V(""),l([])},tn=function(n){return-1!==t.findIndex((function(e){return e.name===n}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(x,{message:T,notificationType:q}),Object(i.jsx)(s,{value:N,onChange:function(n){var e=n.target.value;V(e),F(e)},onBlur:en}),Object(i.jsx)("h3",{children:"add a new person"}),Object(i.jsx)(f,{onSubmit:function(n){return n.preventDefault(),""===w?alert("Not a valid name"):tn(w)?window.confirm("".concat(w," is already on the phonebook, replace the old number with a new one?"))?(M(),void nn()):void nn():(H(),void nn())},nameValue:w,nameOnChange:function(n){en(),C(n.target.value)},numberValue:k,numberOnChange:function(n){D(n.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(b,{personsArray:""===N?t:j,onDelete:function(n){return function(){var e=K(n);window.confirm("Are you sure you want to delete ".concat(e.name))&&p(n).then((function(){r(t.filter((function(n){return n.name!==e.name}))),X(e.name)})).catch((function(t){$(e.name),Q(n)}))}}})]})};u.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d2b64dac.chunk.js.map