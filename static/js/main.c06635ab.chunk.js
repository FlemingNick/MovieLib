(this.webpackJsonpmovie_list=this.webpackJsonpmovie_list||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),l=(a(20),a(2)),s=a(3),o=a(6),m=a.n(o),u=a(14),p=a(4),d=a(7),f=a.n(d);a(22);f.a.initializeApp({apiKey:"AIzaSyCgxM6ZIiK7UvNESsxpUaWnDx5qp1RLcmA",authDomain:"movielibrary-d9caa.firebaseapp.com",databaseURL:"https://movielibrary-d9caa.firebaseio.com",projectId:"movielibrary-d9caa",storageBucket:"movielibrary-d9caa.appspot.com",messagingSenderId:"885902700447",appId:"1:885902700447:web:1287fb87079aa8f5d1d7aa",measurementId:"G-HRHDM9GRDM"});var b=f.a,h=(a(26),function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)([]),o=Object(p.a)(c,2),d=o[0],f=o[1],h="",E=function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://imdb8.p.rapidapi.com/title/auto-complete?"+h,{method:"GET",headers:{"x-rapidapi-host":"imdb8.p.rapidapi.com","x-rapidapi-key":"b4b3d47079mshf8b4532b84c33a1p184711jsn39b88a9d16d1"}}).then((function(e){return e.json()})).catch((function(e){alert("Sorry, no such movie found")})).then((function(e){return i(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=Object(n.useState)({}),y=Object(p.a)(v,2),g=y[0],I=y[1];return Object(n.useEffect)((function(){var e=b.firestore().collection("movies").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}));f(t)}));return function(){return e()}}),[]),r.a.createElement("div",{className:"MovieContainer"},r.a.createElement("form",{onSubmit:function(e){e&&(e.preventDefault(),h="q="+g.name,E())},className:"SearchInput"},r.a.createElement("input",{className:"Inputfield",type:"name",placeholder:"Title...",name:"name",onChange:function(e){e.persist(),I((function(t){return Object(s.a)(Object(s.a)({},g),{},Object(l.a)({},e.target.name,e.target.value))}))},value:g.name}),r.a.createElement("input",{className:"Submit",type:"submit",value:"send"})),a&&r.a.createElement("ul",{className:"InputContainer"},r.a.createElement("ul",{className:"InputText"},r.a.createElement("li",{className:"InputTitle"},"Title: ",a.d[0].l),r.a.createElement("li",{className:"InputRelease"},"Release: ",a.d[0].y),r.a.createElement("li",{className:"InputCast"},"Cast: ",a.d[0].s),r.a.createElement("button",{onClick:function(){b.firestore().collection("movies").add({title:a.d[0].l,release:a.d[0].y,cast:a.d[0].s,img:a.d[0].i.imageUrl})}},"Hinzuf\xfcgen")),r.a.createElement("li",{className:"InputImage"},r.a.createElement("img",{src:a.d[0].i.imageUrl,style:{width:"130px",height:"200px"},alt:"title-cover"})," ")),r.a.createElement("div",{className:"Library"},r.a.createElement("h1",null,"Library"),d.length>0&&r.a.createElement("div",{className:"LibraryEntries"},d.map((function(e){return r.a.createElement("div",{className:"LibraryEntry",key:d.indexOf(e)},r.a.createElement("img",{className:"EntryImage",src:e.img,style:{width:"150px",height:"200px"},alt:"title-cover"}),r.a.createElement("ul",{className:"EntryText"},r.a.createElement("li",null,r.a.createElement("b",null,"Title: ",e.title)),r.a.createElement("li",null,"Release: ",e.release),r.a.createElement("li",null,"Cast: ",e.cast)),r.a.createElement("p",null,"Delete"))})))))});a(27);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c06635ab.chunk.js.map