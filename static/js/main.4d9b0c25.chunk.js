(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{82:function(e,t,a){e.exports=a(92)},87:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),s=(a(87),a(60)),i=a(29),o=a(30),u=a(36),m=a(35),d=a(138),p=a(139),h=a(40),E=a(31),g=a(50),f=a(124),b=a(149),x=a(128),v=a(129),y=a(130),C=a(152),O=a(133),j=a(150),k=a(146),S=a(135),w=a(136),B=a(137),P=a(70),T=a.n(P),F=a(4),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={open:!1,exercise:{title:"",muscles:"",description:"",id:"123"}},e.handleToggle=function(){e.setState({open:!e.state.open})},e.handleChange=function(t){return function(a){var n=a.target.value;e.setState({exercise:Object(g.a)({},e.state.exercise,Object(E.a)({},t,n))})}},e.handleSubmit=function(){var t=e.state.exercise;console.log("aa"),console.log(t),e.props.onCreate(t),e.setState({open:!1,exercise:{title:"",description:"",muscles:""}})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.muscles,a=e.classes,c=this.state.exercise,l=c.title,s=c.muscle,i=c.description;return r.a.createElement(n.Fragment,null,r.a.createElement(f.a,{"aria-label":"add",size:"small",onClick:this.handleToggle,style:{position:"absolute",right:5}},r.a.createElement(T.a,null)),r.a.createElement(b.a,{open:this.state.open,onClose:this.handleToggle},r.a.createElement(x.a,{id:"form-dialog-title"},"Create Exercise"),r.a.createElement(v.a,null,r.a.createElement(y.a,null,"Fill these details to create an exercise"),r.a.createElement(C.a,{autoFocus:!0,margin:"dense",id:"title",label:"Exercise",type:"text",name:"title",value:l,onChange:this.handleChange("title"),className:a.formControl}),r.a.createElement(O.a,{className:a.formControl},r.a.createElement(j.a,null,"Muscles"),r.a.createElement(k.a,{labelId:"demo-simple-select-label",value:s,onChange:this.handleChange("muscles")},t.map(function(e,t){return r.a.createElement(S.a,{key:t,value:e},e)}))),r.a.createElement(C.a,{autoFocus:!0,margin:"dense",label:"Description",type:"text",value:i,onChange:this.handleChange("description"),className:a.formControl,multiline:!0,rows:2})),r.a.createElement(w.a,null,r.a.createElement(B.a,{color:"primary",variant:"contained",onClick:this.handleSubmit},"Create"))))}}]),a}(n.Component),D=Object(F.a)(function(e){return{formControl:{width:"100%"}}})(A),M=function(e){var t=e.muscles,a=e.onExerciseCreate;return r.a.createElement(d.a,{position:"static"},r.a.createElement(p.a,{variant:"dense"},r.a.createElement(h.a,{variant:"h5"},"Exercises"),r.a.createElement(D,{muscles:t,onCreate:a})))},z=a(93),I=a(147),N=a(140),q=function(e){var t=e.muscles,a=e.category,n=e.onSelect,c=a?t.findIndex(function(e){return e===a})+1:0;return r.a.createElement(z.a,null,r.a.createElement(I.a,{value:c,onChange:function(e,a){return n(0!==a?t[a-1]:"")},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},r.a.createElement(N.a,{label:"All"}),t.map(function(e,t){return r.a.createElement(N.a,{key:t,label:e})})))},J=a(74),L=a(153),W=a(94),G=a(142),U=a(134),Y=a(143),H=a(144),K=a(72),Q=a.n(K),R=a(73),V=a.n(R),X=a(141),Z=a(71),$=a.n(Z),_={Paper:{padding:15,marginTop:10,marginBottom:10,height:450,overflowY:"auto"}},ee=Object(L.a)(X.a)({minWidth:0,padding:2}),te=Object(L.a)(W.a)({paddingLeft:32,paddingBottom:0,paddingTop:0}),ae=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={open:{arms:!0,back:!0,chest:!0,legs:!0,shoulders:!0}},e.handleClick=function(t){console.log(t),e.setState(function(e){return{open:Object(g.a)({},e.open,Object(E.a)({},t,!e.open[t]))}})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.exercises,c=t.category,l=(t.onSelect,t.exercise),s=(l.id,l.title),i=void 0===s?"Welcome!":s,o=l.description,u=void 0===o?"Please select an exercise from left":o;return r.a.createElement(G.a,{container:!0},r.a.createElement(G.a,{item:!0,xs:!0},r.a.createElement(z.a,{style:_.Paper},r.a.createElement(U.a,{component:"nav"},a.map(function(t,a){var l=Object(J.a)(t,2),s=l[0],i=l[1];return c&&c!==s?null:r.a.createElement(n.Fragment,{key:a},r.a.createElement(W.a,{button:!0,dense:!0,disableGutters:!0,onClick:function(){return e.handleClick(s)}},r.a.createElement(ee,null,r.a.createElement($.a,{fontSize:"small"})),r.a.createElement(Y.a,{primary:s,style:{textTransform:"capitalize"}}),e.state.open[s]?r.a.createElement(Q.a,null):r.a.createElement(V.a,null)),r.a.createElement("div",{style:{borderBottom:"1px solid #eee"}}),r.a.createElement(H.a,{in:e.state.open[s],timeout:"auto",unmountOnExit:!0},r.a.createElement(U.a,{component:"div",disablePadding:!0},i.map(function(e,t){e.id;var a=e.title;return r.a.createElement(n.Fragment,{key:t},r.a.createElement(te,{button:!0},r.a.createElement(Y.a,{primary:a})))}))))})))),r.a.createElement(G.a,{item:!0,xs:!0},r.a.createElement(z.a,{style:_.Paper},r.a.createElement(h.a,{variant:"h6"},i),r.a.createElement(h.a,{variant:"body2"},u))))}}]),a}(n.Component),ne=["shoulders","chest","arms","back","legs"],re=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}],ce=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={exercises:re,category:"",exercise:{}},e.fetchExercisesByMuscles=function(){return Object.entries(e.state.exercises.reduce(function(e,t){var a=t.muscles;return e[a]=e[a]?[].concat(Object(s.a)(e[a]),[t]):[t],e},{}))},e.handleCategorySelect=function(t){console.log(t),e.setState({category:t})},e.handleExcerciseSelect=function(t){console.log(t),e.setState(function(e){return{exercise:e.exercises.find(function(e){return e.id===t})}})},e.handleExerciseCreate=function(t){console.log("bb"),console.log(t),console.log(e.state.exercises),e.setState(function(e){e.excercises;return{exercises:[].concat(Object(s.a)(re),[t])}})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.fetchExercisesByMuscles();return r.a.createElement("div",null,r.a.createElement(M,{muscles:ne,onExerciseCreate:this.handleExerciseCreate}),r.a.createElement(ae,{exercises:e,category:this.state.category,exercise:this.state.exercise,onSelect:this.handleExcerciseSelect}),r.a.createElement(q,{muscles:ne,category:this.state.category,onSelect:this.handleCategorySelect}))}}]),a}(n.Component),le=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),le)}},[[82,1,2]]]);
//# sourceMappingURL=main.4d9b0c25.chunk.js.map