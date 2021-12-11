(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),s=n.n(c),o=n(10),i=n(2),l=n(3),m=n(6),u=n(5),b=n(21),d=(n(15),n(16),n(4)),j=n(8),h=n(0),f={name:"",number:""},p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=Object(j.a)({},f),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(d.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState(Object(j.a)({},f))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleNameInput,n=e.handleNumberInput,a=e.addContact,r=this.state,c=r.name,s=r.number;return Object(h.jsxs)("form",{onSubmit:a,children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(h.jsx)("input",{className:"form-control",id:"name",type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:t})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"number",className:"form-label",children:"Number"}),Object(h.jsx)("input",{className:"form-control",id:"number",type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n})]}),Object(h.jsx)("input",{type:"submit",value:"Add contact",className:"btn btn-primary"})]})}}]),n}(a.Component);var v=function(e){var t=e.contact,n=e.removeContact;return Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsxs)("p",{children:[t.name," : ",t.number]}),Object(h.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return n(t.id)},children:"Delete"})]})},O=function(e){var t=e.contacts,n=e.removeContact;return Object(h.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e){return Object(h.jsx)(v,{contact:e,removeContact:n},e.id)}))})},N=function(e){var t=e.filter,n=e.handleFilterName;return Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"filter",className:"form-label",children:"Find contacts by name"}),Object(h.jsx)("input",{className:"form-control",id:"filter",type:"text",name:"filter-name",value:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n})]})};var C=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onChangeName=function(e){a.setState({name:e.target.value})},a.onFilterName=function(e){a.setState({filter:e.target.value})},a.onChangeNumber=function(e){a.setState({number:e.target.value})},a.addContact=function(e){e.preventDefault(),a.setState((function(e){var t={id:Object(b.a)(),name:e.name,number:e.number};if(!e.contacts.some((function(e){return n=e.name,a=t.name,"string"===typeof n&&"string"===typeof a?0===n.localeCompare(a,void 0,{sensitivity:"accent"}):n===a;var n,a})))return{contacts:[].concat(Object(o.a)(e.contacts),[t]),name:"",number:"",filter:""};alert("".concat(t.name," is already in contacts"))}))},a.removeContact=function(e){alert("\u0412\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0441 ID: "+e),a.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e})),name:"",number:"",filter:""}}))},a.filterContacts=function(){var e=a.state,t=e.contacts,n=e.filter.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},a.state={contacts:[],name:"",number:"",filter:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.filterContacts(),t=this.props,n=t.addContact,a=t.onChangeName,r=t.onChangeNumber,c=t.onFilterName,s=t.removeContact;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"h2",children:"Phonebook"}),Object(h.jsx)(p,{addContact:n,handleNameInput:a,handleNumberInput:r,name:this.state.name,number:this.state.number})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"h2",children:"Contacts"}),Object(h.jsx)(N,{handleFilterName:c,filter:this.state.filter}),Object(h.jsx)(O,{contacts:e,removeContact:s})]})]})}}]),n}(a.Component);n(18);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7770bc44.chunk.js.map