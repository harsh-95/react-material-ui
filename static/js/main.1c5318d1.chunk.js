(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{77:function(e,t,a){e.exports=a(88)},82:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=(a(82),a(55)),i=a(41),o=a(42),u=a(50),m=a(49),d=a(132),h=a(133),p=a(34),E=a(43),g=a(64),f=a(118),x=a(140),b=a(122),v=a(123),y=a(124),C=a(143),S=a(127),k=a(141),O=a(137),j=a(129),w=a(130),B=a(131),P=a(69),T=a.n(P),F=a(4),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={open:!1,exercise:{title:"",muscles:"",description:"",id:"123"}},e.handleToggle=function(){e.setState({open:!e.state.open})},e.handleChange=function(t){return function(a){var n=a.target.value;e.setState({exercise:Object(g.a)({},e.state.exercise,Object(E.a)({},t,n))})}},e.handleSubmit=function(){var t=e.state.exercise;console.log("aa"),console.log(t),e.props.onCreate(t),e.setState({open:!1,exercise:{title:"",description:"",muscles:""}})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.muscles,a=e.classes,c=this.state.exercise,l=c.title,s=c.muscle,i=c.description;return r.a.createElement(n.Fragment,null,r.a.createElement(f.a,{"aria-label":"add",size:"small",onClick:this.handleToggle,style:{position:"absolute",right:5}},r.a.createElement(T.a,null)),r.a.createElement(x.a,{open:this.state.open,onClose:this.handleToggle},r.a.createElement(b.a,{id:"form-dialog-title"},"Create Exercise"),r.a.createElement(v.a,null,r.a.createElement(y.a,null,"Fill these details to create an exercise"),r.a.createElement(C.a,{autoFocus:!0,margin:"dense",id:"title",label:"Exercise",type:"text",name:"title",value:l,onChange:this.handleChange("title"),className:a.formControl}),r.a.createElement(S.a,{className:a.formControl},r.a.createElement(k.a,null,"Age"),r.a.createElement(O.a,{labelId:"demo-simple-select-label",value:s,onChange:this.handleChange("muscles")},t.map(function(e,t){return r.a.createElement(j.a,{key:t,value:e},e)}))),r.a.createElement(C.a,{autoFocus:!0,margin:"dense",label:"Description",type:"text",value:i,onChange:this.handleChange("description"),className:a.formControl,multiline:!0,rows:2})),r.a.createElement(w.a,null,r.a.createElement(B.a,{color:"primary",variant:"contained",onClick:this.handleSubmit},"Create"))))}}]),a}(n.Component),D=Object(F.a)(function(e){return{formControl:{width:"100%"}}})(A),I=function(e){var t=e.muscles,a=e.onExerciseCreate;return r.a.createElement(d.a,{position:"static"},r.a.createElement(h.a,{variant:"dense"},r.a.createElement(p.a,{variant:"h5"},"Exercises"),r.a.createElement(D,{muscles:t,onCreate:a})))},M=a(89),N=a(138),q=a(134),z=function(e){var t=e.muscles,a=e.category,n=e.onSelect,c=a?t.findIndex(function(e){return e===a})+1:0;return r.a.createElement(M.a,null,r.a.createElement(N.a,{value:c,onChange:function(e,a){return n(0!==a?t[a-1]:"")},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(q.a,{label:"All"}),t.map(function(e,t){return r.a.createElement(q.a,{key:t,label:e})})))},J=a(70),L=a(135),U=a(128),W=a(90),Y=a(136),G={Paper:{padding:20,marginTop:10,marginBottom:10,height:450,overflowY:"auto"}},H=function(e){var t=e.exercises,a=e.category,c=e.onSelect,l=e.exercise,s=(l.id,l.title),i=void 0===s?"Welcome!":s,o=l.description,u=void 0===o?"Please select an exercise from left":o;return r.a.createElement(L.a,{container:!0},r.a.createElement(L.a,{item:!0,xs:!0},r.a.createElement(M.a,{style:G.Paper},t.map(function(e,t){var l=Object(J.a)(e,2),s=l[0],i=l[1];return a&&a!==s?null:r.a.createElement(n.Fragment,{key:t},r.a.createElement(p.a,{variant:"h6",style:{textTransform:"capitalize"}},s),r.a.createElement(U.a,{component:"ul"},i.map(function(e,t){var a=e.id,n=e.title;return r.a.createElement(W.a,{button:!0,key:t,onClick:function(){return c(a)}},r.a.createElement(Y.a,{primary:n}))})))}))),r.a.createElement(L.a,{item:!0,xs:!0},r.a.createElement(M.a,{style:G.Paper},r.a.createElement(p.a,{variant:"h5"},i),r.a.createElement(p.a,{variant:"body2"},u))))},K=["shoulders","chest","arms","back","legs"],Q=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}],R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={exercises:Q,category:"",exercise:{}},e.fetchExercisesByMuscles=function(){return Object.entries(e.state.exercises.reduce(function(e,t){var a=t.muscles;return e[a]=e[a]?[].concat(Object(s.a)(e[a]),[t]):[t],e},{}))},e.handleCategorySelect=function(t){console.log(t),e.setState({category:t})},e.handleExcerciseSelect=function(t){console.log(t),e.setState(function(e){return{exercise:e.exercises.find(function(e){return e.id===t})}})},e.handleExerciseCreate=function(t){console.log("bb"),console.log(t),console.log(e.state.exercises),e.setState(function(e){e.excercises;return{exercises:[].concat(Object(s.a)(Q),[t])}})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.fetchExercisesByMuscles();return r.a.createElement("div",null,r.a.createElement(I,{muscles:K,onExerciseCreate:this.handleExerciseCreate}),r.a.createElement(H,{exercises:e,category:this.state.category,exercise:this.state.exercise,onSelect:this.handleExcerciseSelect}),r.a.createElement(z,{muscles:K,category:this.state.category,onSelect:this.handleCategorySelect}))}}]),a}(n.Component),V=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),V)}},[[77,1,2]]]);
//# sourceMappingURL=main.1c5318d1.chunk.js.map