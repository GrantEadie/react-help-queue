(this["webpackJsonphelp-queue"]=this["webpackJsonphelp-queue"]||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(3),c=n.n(l);n(25);var r=function(){return i.a.createElement("h1",null,"Help Queue")},s=n(13),u=n(14),o=n(19),m=n(18),d=n(15);var E=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onNewTicketCreation({names:t.target.names.value,location:t.target.location.value,issue:t.target.issue.value,id:Object(d.v4)()})}},i.a.createElement("input",{type:"text",name:"names",placeholder:"Pair Names"}),i.a.createElement("input",{type:"text",name:"location",placeholder:"Location"}),i.a.createElement("textarea",{name:"issue",placeholder:"Describe your issue."}),i.a.createElement("button",{type:"submit"},"Help!")))};var k=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:function(){return e.whenTicketClicked(e.id)}},i.a.createElement("h3",null,e.location," - ",e.names),i.a.createElement("p",null,i.a.createElement("em",null,e.issue)),i.a.createElement("hr",null)))};var h=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",null),Object.values(e.ticketList).map((function(t){return i.a.createElement(k,{whenTicketClicked:e.onTicketSelection,names:t.names,location:t.location,issue:t.issue,id:t.id,key:t.id})})))};var T=function(e){var t=e.ticket,n=e.onClickingDelete;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Ticket Detail"),i.a.createElement("h3",null,t.location," - ",t.names),i.a.createElement("p",null,i.a.createElement("em",null,t.issue)),i.a.createElement("button",{onClick:e.onClickingEdit},"Update Ticket"),i.a.createElement("button",{onClick:function(){return n(t.id)}},"Close Ticket"),i.a.createElement("hr",null))};var p=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:e.formSubmissionHandler},i.a.createElement("input",{type:"text",name:"names",placeholder:"Pair Names"}),i.a.createElement("input",{type:"text",name:"location",placeholder:"Location"}),i.a.createElement("textarea",{name:"issue",placeholder:"Describe your issue."}),i.a.createElement("button",{type:"submit"},e.buttonText)))};var g=function(e){var t=e.ticket;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{formSubmissionHandler:function(n){n.preventDefault(),e.onEditTicket({names:n.target.names.value,location:n.target.location.value,issue:n.target.issue.value,id:t.id})},buttonText:"Update Ticket"}))},f=n(6),b=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleClick=function(){null!=a.state.selectedTicket?a.setState({formVisibleOnPage:!1,selectedTicket:null,editing:!1}):a.setState((function(e){return{formVisibleOnPage:!e.formVisibleOnPage}}))},a.handleAddingNewTicketToList=function(e){(0,a.props.dispatch)({type:"ADD_TICKET",id:e.id,names:e.names,location:e.location,issue:e.issue}),a.setState({formVisibleOnPage:!1})},a.handleChangingSelectedTicket=function(e){var t=a.props.masterTicketList[e];a.setState({selectedTicket:t})},a.handleDeletingTicket=function(e){(0,a.props.dispatch)({type:"DELETE_TICKET",id:e}),a.setState({selectedTicket:null})},a.handleEditClick=function(){a.setState({editing:!0})},a.handleEditingTicketInList=function(e){(0,a.props.dispatch)({type:"ADD_TICKET",id:e.id,names:e.names,location:e.location,issue:e.issue}),a.setState({editing:!1,selectedTicket:null})},a.state={formVisibleOnPage:!1,selectedTicket:null,editing:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=null,t=null;return this.state.editing?(e=i.a.createElement(g,{ticket:this.state.selectedTicket,onEditTicket:this.handleEditingTicketInList}),t="Return to Ticket List"):null!=this.state.selectedTicket?(e=i.a.createElement(T,{ticket:this.state.selectedTicket,onClickingDelete:this.handleDeletingTicket,onClickingEdit:this.handleEditClick}),t="Return to Ticket List"):this.state.formVisibleOnPage?(e=i.a.createElement(E,{onNewTicketCreation:this.handleAddingNewTicketToList}),t="Return to Ticket List"):(e=i.a.createElement(h,{ticketList:this.props.masterTicketList,onTicketSelection:this.handleChangingSelectedTicket}),t="Add Ticket"),i.a.createElement(i.a.Fragment,null,e,i.a.createElement("button",{onClick:this.handleClick},t))}}]),n}(i.a.Component),v=b=Object(f.b)((function(e){return{masterTicketList:e}}))(b);var C=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r,null),i.a.createElement(v,null))},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),l(e),c(e)}))},L=n(4),O=n(17),S=n(5),y=Object(L.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.names,a=t.location,i=t.issue,l=t.id;switch(t.type){case"ADD_TICKET":return Object.assign({},e,Object(S.a)({},l,{names:n,location:a,issue:i,id:l}));case"DELETE_TICKET":var c=Object(O.a)({},e);return delete c[l],c;default:return e}}));y.subscribe((function(){return console.log(y.getState())})),c.a.render(i.a.createElement(f.a,{store:y},i.a.createElement(C,null)),document.getElementById("root")),D()}},[[20,1,2]]]);
//# sourceMappingURL=main.84d1756f.chunk.js.map