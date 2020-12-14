(this.webpackJsonpannouncement_website_for_nerdysoft=this.webpackJsonpannouncement_website_for_nerdysoft||[]).push([[0],{16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var s=t(0),i=t(2),c=t.n(i),o=t(9),a=t.n(o),l=t(10),d=t(3),u=t(4),r=t(1),m=t(6),h=t(5),j=t(19);var b=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("button",{name:"showAddNewAnnouncementFields",onClick:e.toggleAddAnnouncementFields,children:"ADD NEW ANNOUNCEMENT"})})},p=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h1",{children:"Your Announcements"}),Object(s.jsx)(b,{toggleAddAnnouncementFields:this.props.toggleAddAnnouncementFields})]})}}]),t}(i.Component),O=t(7),A=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(e){var s;return Object(d.a)(this,t),(s=n.call(this,e)).state={title:"",description:"",selected:!1},s.onChange=s.onChange.bind(Object(r.a)(s)),s.onSubmit=s.onSubmit.bind(Object(r.a)(s)),s.onReset=s.onReset.bind(Object(r.a)(s)),s}return Object(u.a)(t,[{key:"onChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.addNewAnnouncement(this.state),this.setState({title:"",description:"",selected:!1})}},{key:"onReset",value:function(e){this.props.toggleAddAnnouncementFields(e),this.setState({title:"",description:"",selected:!1})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"addNewAnnouncementFields",style:{display:this.props.display},children:[Object(s.jsx)("h2",{children:"Post your announcement"}),Object(s.jsxs)("form",{onSubmit:this.onSubmit,onReset:this.onReset,children:[Object(s.jsxs)("div",{className:"inputFields",children:[Object(s.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{id:"title",name:"title",type:"text",required:!0,placeholder:"title",value:this.state.title,onChange:this.onChange}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{id:"description",name:"description",required:!0,placeholder:"description",value:this.state.description,onChange:this.onChange}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("input",{type:"submit",value:"Add new announcement"}),Object(s.jsx)("input",{name:"hideAddNewAnnouncementFields",type:"reset",value:"Cancel"})]})]})]})}}]),t}(i.Component),g=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(e){var s;return Object(d.a)(this,t),(s=n.call(this,e)).onChange=s.onChange.bind(Object(r.a)(s)),s}return Object(u.a)(t,[{key:"onChange",value:function(e){this.props.searchAnnouncement(e.target.value)}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"searchField",children:Object(s.jsx)("input",{type:"search",placeholder:"Search...",onChange:this.onChange})})}}]),t}(i.Component);var v=function(e){var n=e.date,t=n.getHours(),i=n.getMinutes(),c=n.getDate(),o=n.getMonth(),a=n.getFullYear();switch(t=t<10?"0"+t:t,i=i<10?"0"+i:i,o){case 0:o="Jan";break;case 1:o="Feb";break;case 2:o="Mar";break;case 3:o="Apr";break;case 4:o="May";break;case 5:o="Jun";break;case 6:o="Jul";break;case 7:o="Aug";break;case 8:o="Sep";break;case 9:o="Oct";break;case 10:o="Nov";break;case 11:o="Dec";break;default:o="error"}return Object(s.jsxs)("p",{className:"dateDisplay",children:[t,":",i," ",c,"-",o,"-",a]})};var f=function(e){return Object(s.jsxs)("div",{className:"announcement",onClick:e.selectAnnouncement.bind(this,e.announcement.id),children:[Object(s.jsx)("p",{children:e.announcement.title}),Object(s.jsx)(v,{date:e.announcement.date})]})};var x=function(e){return Object(s.jsx)("button",{onClick:e.deleteAnnouncement.bind(this,e.id),children:"Delete"})};var y=function(e){return Object(s.jsx)("button",{onClick:e.toggleEditingFields,children:"Edit"})};var k=function(e){var n=this,t=e.announcements.filter((function(n){return n.id!==e.announcement.id&&e.announcement.title.toString().toLowerCase().split(" ").some((function(e){return n.title.toString().toLowerCase().includes(e)}))&&e.announcement.description.toString().toLowerCase().split(" ").some((function(e){return n.description.toLowerCase().toString().includes(e)}))}));return 0!==t.length?Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"You might also like this announcements:"}),t.slice(0,3).map((function(t){return Object(s.jsx)("div",{onClick:e.selectAnnouncement.bind(n,t.id),children:t.title},t.id)}))]}):Object(s.jsx)("p",{children:"Similar announcements not found"})},F=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(e){var s;return Object(d.a)(this,t),(s=n.call(this,e)).state={id:"",title:"",description:""},s.onChange=s.onChange.bind(Object(r.a)(s)),s.onSubmit=s.onSubmit.bind(Object(r.a)(s)),s.onReset=s.onReset.bind(Object(r.a)(s)),s}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({id:this.props.announcement.id,title:this.props.announcement.title,description:this.props.announcement.description})}},{key:"onChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.editAnnouncement(this.state),this.props.toggleEditingFields(),this.setState({title:this.props.announcement.title,description:this.props.announcement.description})}},{key:"onReset",value:function(){this.props.toggleEditingFields(),this.setState({title:this.props.announcement.title,description:this.props.announcement.description})}},{key:"render",value:function(){return Object(s.jsx)("div",{style:{display:this.props.displayEditAnnouncementFields},children:Object(s.jsxs)("form",{className:"editAnnouncementFields",onSubmit:this.onSubmit,onReset:this.onReset,children:[Object(s.jsx)("label",{children:"Title:"}),Object(s.jsx)("input",{name:"title",type:"text",required:!0,value:this.state.title,onChange:this.onChange}),Object(s.jsx)("label",{children:"Description:"}),Object(s.jsx)("textarea",{name:"description",required:!0,value:this.state.description,onChange:this.onChange}),Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"submit",value:"Edit announcement"}),Object(s.jsx)("input",{type:"reset",value:"Cancel"})]})]})})}}]),t}(i.Component),S=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(e){var s;return Object(d.a)(this,t),(s=n.call(this,e)).state={displayEditAnnouncementFields:"none",displayAnnouncementInfo:"block"},s.toggleEditingFields=s.toggleEditingFields.bind(Object(r.a)(s)),s}return Object(u.a)(t,[{key:"toggleEditingFields",value:function(){this.setState({displayEditAnnouncementFields:"none"===this.state.displayEditAnnouncementFields?"block":"none",displayAnnouncementInfo:"none"===this.state.displayAnnouncementInfo?"block":"none"})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"selectedAnnouncementWrapper",children:[Object(s.jsxs)("div",{className:"selectedAnnouncementInfo",children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{style:{display:this.state.displayAnnouncementInfo},children:[Object(s.jsx)("p",{children:Object(s.jsx)("span",{children:this.props.announcement.title})}),Object(s.jsx)("p",{children:this.props.announcement.description})]}),Object(s.jsx)(F,{editAnnouncement:this.props.editAnnouncement,announcement:this.props.announcement,toggleEditingFields:this.toggleEditingFields,displayEditAnnouncementFields:this.state.displayEditAnnouncementFields}),Object(s.jsx)(v,{date:this.props.announcement.date})]}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{className:"closeDetails",onClick:this.props.closeDetails,children:"X"}),Object(s.jsxs)("div",{className:"editDeleteBtns",style:{display:this.state.displayAnnouncementInfo},children:[Object(s.jsx)(y,{toggleEditingFields:this.toggleEditingFields}),Object(s.jsx)(x,{id:this.props.announcement.id,deleteAnnouncement:this.props.deleteAnnouncement})]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(k,{announcements:this.props.announcements,announcement:this.props.announcement,selectAnnouncement:this.props.selectAnnouncement})]})}}]),t}(i.Component);var C=function(e){return e.announcements.sort((function(e,n){return n.selected-e.selected})).filter((function(n){return e.searchedAnnouncementTitle?n.title.toString().toLowerCase().includes(e.searchedAnnouncementTitle.toLowerCase())||n.selected:n})).map((function(n){return n.selected?Object(s.jsx)("div",{children:Object(s.jsx)(S,{announcements:e.announcements,announcement:n,closeDetails:e.closeDetails,deleteAnnouncement:e.deleteAnnouncement,editAnnouncement:e.editAnnouncement,selectAnnouncement:e.selectAnnouncement})},n.id):Object(s.jsx)(f,{announcement:n,selectAnnouncement:e.selectAnnouncement},n.id)}))},w=(t(16),function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(e){var s;return Object(d.a)(this,t),(s=n.call(this,e)).state={announcements:[],newAnnouncementFieldsDisplay:"none",searchedAnnouncementTitle:""},s.toggleAddAnnouncementFields=s.toggleAddAnnouncementFields.bind(Object(r.a)(s)),s.addNewAnnouncement=s.addNewAnnouncement.bind(Object(r.a)(s)),s.selectAnnouncement=s.selectAnnouncement.bind(Object(r.a)(s)),s.closeDetails=s.closeDetails.bind(Object(r.a)(s)),s.deleteAnnouncement=s.deleteAnnouncement.bind(Object(r.a)(s)),s.searchAnnouncement=s.searchAnnouncement.bind(Object(r.a)(s)),s.editAnnouncement=s.editAnnouncement.bind(Object(r.a)(s)),s}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("announcements"))||[];e.forEach((function(e){return e.date=new Date(e.date)})),this.setState({announcements:e})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("announcements",JSON.stringify(this.state.announcements))}},{key:"toggleAddAnnouncementFields",value:function(e){"showAddNewAnnouncementFields"===e.target.name?this.setState({newAnnouncementFieldsDisplay:"flex"}):"hideAddNewAnnouncementFields"===e.target.querySelector("input[name='hideAddNewAnnouncementFields']").name&&this.setState({newAnnouncementFieldsDisplay:"none"})}},{key:"addNewAnnouncement",value:function(e){var n={id:Object(j.a)(),title:e.title,description:e.description,date:new Date,selected:e.selected};this.setState({announcements:[].concat(Object(l.a)(this.state.announcements),[n]),newAnnouncementFieldsDisplay:"none"})}},{key:"searchAnnouncement",value:function(e){this.setState({searchedAnnouncementTitle:e})}},{key:"selectAnnouncement",value:function(e){this.setState({announcement:this.state.announcements.map((function(n){return n.selected=!1,n.id===e&&(n.selected=!n.selected),n}))})}},{key:"closeDetails",value:function(){this.setState({announcement:this.state.announcements.map((function(e){return e.selected=!1}))})}},{key:"deleteAnnouncement",value:function(e){this.setState({announcements:this.state.announcements.filter((function(n){return n.id!==e}))})}},{key:"editAnnouncement",value:function(e){this.setState({announcement:this.state.announcements.map((function(n){return n.id===e.id&&(n.title=e.title,n.description=e.description),n}))})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(p,{toggleAddAnnouncementFields:this.toggleAddAnnouncementFields}),Object(s.jsx)(A,{display:this.state.newAnnouncementFieldsDisplay,addNewAnnouncement:this.addNewAnnouncement,toggleAddAnnouncementFields:this.toggleAddAnnouncementFields}),Object(s.jsx)(g,{searchAnnouncement:this.searchAnnouncement}),Object(s.jsx)(C,{announcements:this.state.announcements,searchedAnnouncementTitle:this.state.searchedAnnouncementTitle,selectAnnouncement:this.selectAnnouncement,closeDetails:this.closeDetails,deleteAnnouncement:this.deleteAnnouncement,editAnnouncement:this.editAnnouncement})]})}}]),t}(i.Component));a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.99b33a08.chunk.js.map