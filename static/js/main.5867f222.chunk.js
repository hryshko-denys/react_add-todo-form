(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(4),r=a.n(i),o=(a(15),a(2)),l=a(7),c=a(5),u=a(6),d=a(9),m=a(8),h=(a(16),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),p=(a(17),a(1)),g=a.n(p),b=g.a.shape({lat:g.a.string.isRequired,lng:g.a.string.isRequired}),y=g.a.shape({name:g.a.string.isRequired,catchPhrase:g.a.string.isRequired,bs:g.a.string.isRequired}),f=g.a.shape({street:g.a.string.isRequired,suite:g.a.string.isRequired,city:g.a.string.isRequired,zipcode:g.a.string.isRequired,geo:b}),k=(g.a.shape({id:g.a.number.isRequired,name:g.a.string.isRequired,username:g.a.string.isRequired,email:g.a.string.isRequired,address:f,phone:g.a.string.isRequired,website:g.a.string.isRequired,company:y}),g.a.shape({userId:g.a.number.isRequired,id:g.a.number.isRequired,title:g.a.string.isRequired,completed:g.a.bool.isRequired}),g.a.func,function(e){var t=e.users,a=e.value,s=e.onChangeUser;return n.a.createElement("label",null,n.a.createElement("select",{className:"form-control",id:"exampleSelect1",name:"select",value:a,placeholder:"Choose a user",onChange:s},n.a.createElement("option",{defaultValue:!0},"Choose a user"),t.map((function(e){return n.a.createElement("option",{key:e.name,value:e.id},e.name)}))))}),v=(a(20),function(){return n.a.createElement("button",{className:"btn btn-success",type:"submit"},"Add")}),E=function(e){var t=e.todoList,a=e.toggle;return n.a.createElement("table",{className:"table table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Status"),n.a.createElement("th",{scope:"col"},"Title"),n.a.createElement("th",{scope:"col"},"User ID"))),n.a.createElement("tbody",null,t.map((function(e){return n.a.createElement("tr",{className:e.completed?"table-success":"table-danger",key:e.id},n.a.createElement("th",{scope:"row"},n.a.createElement("input",{type:"checkbox",checked:e.completed,value:e.id,onChange:a})),n.a.createElement("td",null,e.title),n.a.createElement("td",null,"User id ".concat(e.userId)))}))))},w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={todosList:Object(l.a)(h),titleOfTask:"",userId:"",isValid:!1},e.getTask=function(t){var a=t.target.value.replace(/\d/g,"");e.setState({titleOfTask:a,isValid:!1})},e.getCurrentUser=function(t){var a=t.target.value;e.setState({userId:a,isValid:!1})},e.setTask=function(t){if(t.preventDefault(),e.state.titleOfTask&&e.state.userId){t.target.reset();var a={userId:e.state.userId,id:e.state.todosList.length+1,title:e.state.titleOfTask,completed:!1};e.setState((function(e){return e.todosList.push(a),{todosList:e.todosList,titleOfTask:"",userId:""}}))}else e.setState({isValid:!0})},e.toggleCheck=function(t){var a=t.target.value;e.setState((function(e){return{todosList:e.todosList.map((function(e){return e.id===+a?Object(o.a)(Object(o.a)({},e),{},{completed:!e.completed}):e}))}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e,t=this.state,a=t.todosList,s=t.titleOfTask,i=t.isValid,r=t.isErrorUser;return this.state.titleOfTask||this.state.userId?!this.state.titleOfTask&&this.state.userId?e="Please enter the title":this.state.titleOfTask&&!this.state.userId&&(e="Please choose a user"):e="Please type correct data",n.a.createElement("div",{className:"wrapper"},n.a.createElement("form",{className:"form",onSubmit:this.setTask},n.a.createElement("label",{className:"title-input"},i?n.a.createElement("span",{className:"error"},e):"",n.a.createElement("input",{className:"form-control-lg",type:"text",placeholder:"Type task here",onChange:this.getTask,value:s,maxLength:"30"})),n.a.createElement(k,{users:this.props.users,onChangeUser:this.getCurrentUser,onUserError:r}),n.a.createElement(v,null)),n.a.createElement("div",null,n.a.createElement(E,{todoList:a,toggle:this.toggleCheck})))}}]),a}(n.a.Component),S=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Add todo form"),n.a.createElement("p",null,n.a.createElement("span",null,"Users: "),S.length),n.a.createElement(w,{users:S}))};r.a.render(n.a.createElement(C,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.5867f222.chunk.js.map