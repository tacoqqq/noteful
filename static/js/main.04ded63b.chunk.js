(this.webpackJsonpnoteful=this.webpackJsonpnoteful||[]).push([[0],{23:function(e,t,n){e.exports=n(47)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),c=n.n(r),l=(n(28),n(17)),i=n(1),s=n(2),d=n(4),u=n(3),h=n(5),f=(n(29),n(30),n(6)),m="https://damp-bayou-07410.herokuapp.com/api",p=o.a.createContext({notes:[],folders:[],deleteNote:function(){},addFolder:function(){},addNote:function(){},updateNote:function(){},deleteFolder:function(){},updateFolder:function(){}}),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleDeleteNote=function(e,t){fetch("".concat(m,"/notes/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.status)})).then((function(n){t(e)})).catch((function(e){return console.error(e)}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"note"},o.a.createElement(f.b,{to:"/notes/".concat(this.props.id)},o.a.createElement("h2",null,this.props.title)),o.a.createElement("div",{className:"note-second-row"},o.a.createElement("p",null,"Date modified on ",this.props.date),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{className:"update-button"},o.a.createElement(f.b,{to:"/notes/".concat(this.props.id,"/update")},"Update")),o.a.createElement("button",{className:"delete-button",onClick:function(){return e.handleDeleteNote(e.props.id,e.context.deleteNote)}},"Delete"))))}}]),t}(a.Component);b.contextType=p;var E=b,v=(n(36),n(37),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).validateTitle=function(){n.setState({note:{title:n.state.note.title,content:n.state.note.content,folder:n.state.note.folder}}),0===n.state.note.title.length?n.setState({note:{title:n.state.note.title,content:n.state.note.content,folder:n.state.note.folder,errorMsg:"Title is required!"}}):n.setState({note:{title:n.state.note.title,content:n.state.note.content,folder:n.state.note.folder,errorMsg:""}})},n.handleCancel=function(){n.props.history.push("/")},n.state={note:{title:"",content:"",folder:"Super Important",errorMsg:""}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"updateTitle",value:function(e){this.setState({note:{title:e,content:this.state.note.content,folder:this.state.note.folder}})}},{key:"updateContent",value:function(e){this.setState({note:{title:this.state.note.title,content:e,folder:this.state.note.folder}})}},{key:"updateFolderOption",value:function(e){this.setState({note:{title:this.state.note.title,content:this.state.note.content,folder:e}})}},{key:"handleSubmitNote",value:function(e){var t=this;if(e.preventDefault(),this.validateTitle(),0!==this.state.note.title.length){var n=this.context.folders.find((function(e){return e.folder_name===t.state.note.folder})).id,a={title:this.state.note.title,folder_id:n,content:this.state.note.content};fetch("".concat(m,"/notes"),{method:"POST",body:JSON.stringify(a),headers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Something went wrong. please try again later.");return e.json()})).then((function(e){t.context.addNote(e),t.props.history.push("/")})).catch((function(e){return console.error(e)}))}}},{key:"render",value:function(){var e=this,t=this.context.folders.map((function(e,t){return o.a.createElement("option",{key:t,value:e.folder_name},e.folder_name)}));return o.a.createElement("div",{className:"add-note-container"},o.a.createElement("h2",null,"Add New Note"),o.a.createElement("form",{onSubmit:function(t){e.handleSubmitNote(t)}},o.a.createElement("div",{className:"form-section"},o.a.createElement("label",{htmlFor:"noteTitle"},"Title: "),o.a.createElement("input",{type:"textarea",id:"noteTitle",name:"noteTitle",onChange:function(t){return e.updateTitle(t.target.value)}}),o.a.createElement("div",{className:"error-message"},this.state.note.errorMsg)),o.a.createElement("div",{className:"form-section"},o.a.createElement("label",{htmlFor:"noteContent"},"Content: "),o.a.createElement("input",{type:"textarea",id:"noteContent",name:"noteContent",rows:"10",cols:"30",onChange:function(t){return e.updateContent(t.target.value)}})),o.a.createElement("div",{className:"form-section"},o.a.createElement("label",{htmlFor:"selectFolder"},"Save in which folder: "),o.a.createElement("select",{id:"selectFolder",name:"selectFolder",onChange:function(t){return e.updateFolderOption(t.target.value)},required:!0},o.a.createElement("option",{value:""},"Select"),t)),o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{type:"submit"},"Save"),o.a.createElement("button",{onClick:this.handleCancel},"Cancel"))))}}]),t}(a.Component));v.contextType=p;var N=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=(this.props.match.params.folderId?this.context.notes.filter((function(t){return t.folder_id===Number(e.props.match.params.folderId)})):this.context.notes).map((function(e){return o.a.createElement(E,{key:e.id,id:e.id,title:e.title,date:e.created_time})}));return o.a.createElement("div",{className:"note-list-container"},o.a.createElement("div",{className:"note-list"},t,o.a.createElement(f.b,{to:"/add-note"},o.a.createElement("button",{className:"add-button"},"Add Note"))))}}]),t}(a.Component);N.contextType=p;var y=N,O=n(10);n(38);var j=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header-title"},o.a.createElement(f.b,{to:"/"},"Noteful")))},g=(n(39),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onClickDelete=function(){fetch("".concat(m,"/folders/").concat(n.props.id),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.error);return e})).then((function(e){n.context.deleteFolder(n.props.id),n.props.history.push("/")})).catch((function(e){console.error(e.message)}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Number(this.props.params)===this.props.id?o.a.createElement("div",{className:"folder-button-group"},o.a.createElement(f.b,{to:"".concat(this.props.id,"/update")},o.a.createElement("button",null,"Update Folder Name")),o.a.createElement("button",{onClick:this.onClickDelete},"Delete Folder")):null;return o.a.createElement(f.c,{activeClassName:"active",exact:!0,to:"/folders/".concat(this.props.id)},o.a.createElement("li",null,this.props.name),e)}}]),t}(a.Component));g.contextType=p;var k=Object(O.e)(g),C=(n(40),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.context.folders.map((function(t){return o.a.createElement(k,{key:t.id,id:t.id,params:e.props.match.params.folderId?e.props.match.params.folderId:null,name:t.folder_name})}));return o.a.createElement("aside",{className:"sidebar"},o.a.createElement("ul",null,t),o.a.createElement("div",{className:"button-container"},o.a.createElement(f.b,{to:"/add-folder"},o.a.createElement("button",{className:"add-folder-button"},"Add folder"))))}}]),t}(a.Component));C.contextType=p;var S=C,w=(n(41),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onClickGoBack=function(){n.props.history.push("/")},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.context.folders.length>0?this.context.folders.find((function(t){return t.id===e.context.notes.find((function(t){return t.id===Number(e.props.match.params.noteId)})).folder_id})):[];return o.a.createElement("aside",{className:"sidebar"},o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{className:"go-back-button",onClick:this.onClickGoBack},"Go Back"),o.a.createElement("p",null,t.folder_name)))}}]),t}(a.Component));w.contextType=p;var F=w,x=(n(42),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleDeleteNote=function(e,t){fetch("".concat(m,"/notes/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.status)})).then((function(a){n.props.history.push("/"),t(e)})).catch((function(e){return console.error(e)}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.context.notes.length>0?this.context.notes.find((function(t){return t.id===Number(e.props.match.params.noteId)})):[];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"note"},o.a.createElement(f.b,{to:"/notes/".concat(t.id)},o.a.createElement("h2",null,t.title)),o.a.createElement("div",{className:"note-second-row"},o.a.createElement("p",null,"Date modified on ",t.created_time),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{className:"update-button"},o.a.createElement(f.b,{to:"/notes/".concat(t.id,"/update")},"Update")),o.a.createElement("button",{className:"delete-button",onClick:function(){return e.handleDeleteNote(t.id,e.context.deleteNote)}},"Delete")))),o.a.createElement("p",{className:"note-content"},t.content))}}]),t}(a.Component));x.contextType=p;var T=x,D=(n(43),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t={folder_name:e.target.folderName.value};fetch("".concat(m,"/folders"),{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Failed at adding new folder. Please try again later.");return e.json()})).then((function(e){n.props.history.push("/"),n.context.addFolder(e)})).catch((function(e){return console.error(e)}))},n.handleCancel=function(e){n.props.history.push("/")},n.state={folderName:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleAddFolderName",value:function(e){this.setState({folderName:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"add-folder-form"},o.a.createElement("h2",null,"Add New Folder"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"folderName"},"Folder Name: "),o.a.createElement("input",{id:"folderName",name:"folderName",type:"textarea",onChange:function(t){return e.handleAddFolderName(t.target.value)},required:!0})),o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{type:"submit"},"Save"),o.a.createElement("button",{onClick:this.handleCancel},"Cancel"))))}}]),t}(a.Component));D.contextType=p;n(44);var I=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleGoBack",value:function(e){this.props.history.push("/")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{className:"go-back-button",onClick:function(t){return e.handleGoBack(t)}},"< Go Back"))}}]),t}(a.Component),_=(n(45),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).validateTitle=function(){n.setState({note:{title:n.state.note.title,content:n.state.note.content,folder:n.state.note.folder}}),0===n.state.note.title.length?n.setState({note:{title:n.state.note.title,content:n.state.note.content,folder:n.state.note.folder,errorMsg:"Title is required!"}}):n.setState({note:{title:n.state.note.title,content:n.state.note.content,folder:n.state.note.folder,errorMsg:""}})},n.handleCancel=function(){n.props.history.push("/")},n.insertOriginalContent=function(e){n.setState({note:{title:e.title,content:e.content,folder:n.context.folders.find((function(t){return t.id===e.folder_id})).folder_name,errorMsg:""}})},n.state={note:{title:"",content:"",folder:"",errorMsg:""}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"updateTitle",value:function(e){this.setState({note:{title:e,content:this.state.note.content,folder:this.state.note.folder}})}},{key:"updateContent",value:function(e){this.setState({note:{title:this.state.note.title,content:e,folder:this.state.note.folder}})}},{key:"updateFolderOption",value:function(e){this.setState({note:{title:this.state.note.title,content:this.state.note.content,folder:e}})}},{key:"handleSubmitNote",value:function(e){var t=this;if(e.preventDefault(),this.validateTitle(),0!==this.state.note.title.length){var n=this.context.folders.find((function(e){return e.folder_name===t.state.note.folder})).id,a={title:this.state.note.title,folder_id:n,content:this.state.note.content};fetch("".concat(m,"/notes/").concat(this.props.match.params.noteId),{method:"PATCH",body:JSON.stringify(a),headers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Something went wrong. please try again later.")})).then((function(e){t.context.updateNote(),t.props.history.push("/")})).catch((function(e){return console.error(e)}))}}},{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/notes/").concat(this.props.match.params.noteId)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(t){e.insertOriginalContent(t)})).catch((function(t){e.setState({note:{title:"",content:"",folder:"",errorMsg:t.message}})}))}},{key:"render",value:function(){var e=this,t=this.context.folders.map((function(e,t){return o.a.createElement("option",{key:t,value:e.folder_name},e.folder_name)}));return o.a.createElement("div",{className:"update-note-container"},o.a.createElement("h2",null,"Update Note"),o.a.createElement("form",{onSubmit:function(t){e.handleSubmitNote(t)}},o.a.createElement("div",{className:"form-section"},o.a.createElement("label",{htmlFor:"noteTitle"},"Title: "),o.a.createElement("input",{type:"textarea",id:"noteTitle",name:"noteTitle",defaultValue:this.state.note.title,onChange:function(t){return e.updateTitle(t.target.value)}}),o.a.createElement("div",{className:"error-message"},this.state.note.errorMsg)),o.a.createElement("div",{className:"form-section"},o.a.createElement("label",{htmlFor:"noteContent"},"Content: "),o.a.createElement("input",{type:"textarea",id:"noteContent",name:"noteContent",rows:"10",cols:"30",defaultValue:this.state.note.content,onChange:function(t){return e.updateContent(t.target.value)}})),o.a.createElement("div",{className:"form-section"},o.a.createElement("label",{htmlFor:"selectFolder"},"Save in which folder: "),o.a.createElement("select",{id:"selectFolder",name:"selectFolder",onChange:function(t){return e.updateFolderOption(t.target.value)},required:!0},o.a.createElement("option",{value:""},"Select"),t)),o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{type:"submit"},"Save"),o.a.createElement("button",{onClick:this.handleCancel},"Cancel"))))}}]),t}(a.Component));_.contextType=p;n(46);var A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={folderName:""},n.handleSubmit=function(e){e.preventDefault();var t={id:n.props.match.params.folderId,folder_name:e.target.folderName.value,created_time:(new Date).toISOString()};fetch("".concat(m,"/folders/").concat(n.props.match.params.folderId),{method:"PATCH",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Failed at updating new folder. Please try again later.");return e})).then((function(e){n.props.history.push("/"),n.context.updateFolder(t)})).catch((function(e){return console.error(e)}))},n.handleCancel=function(e){n.props.history.push("/")},n.insertOriginalContent=function(e){n.setState({folderName:e.folder_name})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleUpdateFolderName",value:function(e){this.setState({folderName:e})}},{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/folders/").concat(this.props.match.params.folderId)).then((function(e){if(!e.ok)throw new Error(e.error);return e.json()})).then((function(t){e.insertOriginalContent(t)})).catch((function(e){console.error(e.message)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"update-folder-form"},o.a.createElement("h2",null,"Update New Folder"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"folderName"},"Folder Name: "),o.a.createElement("input",{id:"folderName",name:"folderName",type:"textarea",defaultValue:this.state.folderName,onChange:function(t){return e.handleUpdateFolderName(t.target.value)},required:!0})),o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{type:"submit"},"Save"),o.a.createElement("button",{onClick:this.handleCancel},"Cancel"))))}}]),t}(a.Component);A.contextType=p;var M=A,U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h2",null,"Something went wrong. Please try again."):this.props.children}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleDeleteNote=function(e){var t=n.state.notes.filter((function(t){return t.id!==e}));n.setState({notes:t})},n.handleAddFolder=function(e){var t=[].concat(Object(l.a)(n.state.folders),[e]);n.setState({folders:t})},n.handleAddNote=function(e){var t=[].concat(Object(l.a)(n.state.notes),[e]);n.setState({notes:t})},n.handleUpdateNote=function(){fetch("".concat(m,"/notes")).then((function(e){if(!e.ok)throw new U(e.status);return e.json()})).then((function(e){n.setState({notes:e})})).catch((function(e){return console.error(e)}))},n.handleDeleteFolder=function(e){var t=n.state.folders.filter((function(t){return t.id!==e})),a=n.state.notes.filter((function(t){return t.folder_id!==e}));n.setState({folders:t,notes:a})},n.handleUpdateFolder=function(e){var t=n.state.folders.map((function(t){return t.id!==Number(e.id)?t:e}));n.setState({folders:t})},n.state={folders:[],notes:[]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[],n=[];fetch("".concat(m,"/notes")).then((function(e){if(!e.ok)throw new U(e.status);return e.json()})).then((function(e){t=e})).then((function(a){fetch("".concat(m,"/folders")).then((function(e){if(!e.ok)throw new U(e.status);return e.json()})).then((function(e){n=e})).then((function(a){e.setState({folders:n,notes:t})})).catch((function(e){return console.error(e)}))})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p.Provider,{value:{folders:this.state.folders,notes:this.state.notes,deleteNote:this.handleDeleteNote,addFolder:this.handleAddFolder,addNote:this.handleAddNote,updateNote:this.handleUpdateNote,deleteFolder:this.handleDeleteFolder,updateFolder:this.handleUpdateFolder}},o.a.createElement(j,null),o.a.createElement("div",{className:"content-section"},o.a.createElement("nav",null,o.a.createElement(U,null,o.a.createElement(O.a,{exact:!0,path:"/",component:S}),o.a.createElement(O.a,{exact:!0,path:"/folders/:folderId",component:S}),o.a.createElement(O.a,{exact:!0,path:"/notes/:noteId",component:F}),o.a.createElement(O.a,{path:"/add-folder",component:I}),o.a.createElement(O.a,{path:"/add-note",component:I}),o.a.createElement(O.a,{path:"/notes/:noteId/update",component:I}),o.a.createElement(O.a,{path:"/folders/:folderId/update",component:I}))),o.a.createElement("main",null,o.a.createElement(U,null,o.a.createElement(O.a,{exact:!0,path:"/",component:y}),o.a.createElement(O.a,{exact:!0,path:"/folders/:folderId",component:y}),o.a.createElement(O.a,{exact:!0,path:"/notes/:noteId",component:T}),o.a.createElement(O.a,{path:"/add-folder",component:D}),o.a.createElement(O.a,{path:"/add-note",component:v}),o.a.createElement(O.a,{path:"/notes/:noteId/update",component:_}),o.a.createElement(O.a,{path:"/folders/:folderId/update",component:M}))))))}}]),t}(a.Component);c.a.render(o.a.createElement(f.a,null,o.a.createElement(P,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.04ded63b.chunk.js.map