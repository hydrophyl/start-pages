(this["webpackJsonpstart-pages"]=this["webpackJsonpstart-pages"]||[]).push([[0],{44:function(e){e.exports=JSON.parse('[{"categoryname":["main"],"links":[{"name":"Github","url":"https://github.com/"},{"name":"Facebook","url":"https://facebook.com"},{"name":"Instagram","url":"https://instagram.com"},{"name":"Youtube","url":"https://youtube.com"},{"name":"Whatsapp","url":"https://web.whatsapp.com/"},{"name":"Washing machines","url":"https://docs.google.com/spreadsheets/d/1yRncrPSWK4jXz4R6M8Y5_Wnp3e3WVjHi3q_Ksz8vzlY/edit#gid=759655960"},{"name":"EMIL","url":"https://emil.haw-hamburg.de/my/"},{"name":"HAW-Mailer","url":"https://haw-mailer.haw-hamburg.de/owa"},{"name":"myHAW","url":"https://myhaw.haw-hamburg.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces?chco=y"},{"name":"FluentUI","url":"https://developer.microsoft.com/en-us/fluentui#/controls/web"},{"name":"AntDesign","url":"https://ant.design/"},{"name":"Bootswatch","url":"https://bootswatch.com/"},{"name":"ReactExamples","url":"https://reactjsexample.com/"}]},{"categoryname":["haw"],"links":[{"name":"EMIL","url":"https://emil.haw-hamburg.de/my/"},{"name":"HAW-Mailer","url":"https://haw-mailer.haw-hamburg.de/owa"},{"name":"myHAW","url":"https://myhaw.haw-hamburg.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces?chco=y"},{"name":"AWAL","url":"https://emil.haw-hamburg.de/course/view.php?id=42198"},{"name":"CAD","url":"https://emil.haw-hamburg.de/course/view.php?id=41771"},{"name":"CAD L3","url":"file:///C:/Users/Admin/Downloads/Aufgabe%20L3.pdf"},{"name":"UVT","url":"https://emil.haw-hamburg.de/course/view.php?id=42204"}]},{"categoryname":["social"],"links":[{"name":"Facebook","url":"https://facebook.com"},{"name":"Instagram","url":"https://instagram.com"},{"name":"Youtube","url":"https://youtube.com"},{"name":"Whatsapp","url":"https://web.whatsapp.com/"}]},{"categoryname":["frontend"],"links":[{"name":"FluentUI","url":"https://developer.microsoft.com/en-us/fluentui#/controls/web"},{"name":"AntDesign","url":"https://ant.design/"},{"name":"Bootswatch","url":"https://bootswatch.com/"},{"name":"ReactExamples","url":"https://reactjsexample.com/"}]},{"categoryname":["grandweg"],"links":[{"name":"Washing machines","url":"https://docs.google.com/spreadsheets/d/1yRncrPSWK4jXz4R6M8Y5_Wnp3e3WVjHi3q_Ksz8vzlY/edit#gid=759655960"}]}]')},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(1),s=a.n(r),o=a(25),c=a.n(o),i=(a(75),a(76),a(17)),l=a(120),u=a(119),h=a(116),m=a(55),d=a(122),p=a(118),b=(a(77),a(42)),g=a(43),f=a(57),y=a(56);function j(e){return e<10&&(e="0"+e),e}var w=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={date:""},e}return Object(g.a)(a,[{key:"startTime",value:function(){var e=this,t=new Date,a=t.getHours(),n=j(t.getMinutes()),r=j(t.getSeconds());this.setState({date:a+":"+n+":"+r}),this.timeout=setTimeout((function(){return e.startTime()}),500)}},{key:"componentDidMount",value:function(){this.startTime()}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:this.state.date})})}}]),a}(s.a.Component),v=a(44),k=Object(i.t)(),x=function(){var e=new Date;return Object(n.jsxs)("div",{id:"start",style:{textAlign:"center"},children:[Object(n.jsx)("div",{className:"background"}),Object(n.jsx)(l.a,{variant:"xxLarge",block:!0,className:"title",children:"Welcome to the abyss!"}),Object(n.jsxs)(u.a,{className:"nav-board",style:{boxShadow:i.c.elevation8,background:k.palette.neutralPrimary},children:[Object(n.jsx)(h.a,{"aria-label":"List of hypes",className:"pivot-board",children:Object.values(v).map((function(e){return Object(n.jsx)(m.a,{headerText:e.categoryname,itemCount:e.links.length,children:Object(n.jsx)(u.a,{horizontal:!0,wrap:!0,horizontalAlign:"space-evenly",style:{marginTop:"0.8em",maxWidth:"600px"},children:Object.values(e.links).map((function(e){return Object(n.jsx)(d.a,{className:"link",href:e.url,children:e.name})}))})})}))}),Object(n.jsx)(p.a,{underlined:!0,style:{background:k.palette.neutralPrimary,border:"none"},placeholder:"d/g/y/di/",onSearch:function(e){return function(e){return window.location.replace("https://duckduckgo.com/?q="+e),null}(e)}})]}),Object(n.jsxs)(u.a,{horizontal:!0,horizontalAlign:"center",children:[Object(n.jsx)("iframe",{title:"spotify",src:"https://open.spotify.com/embed/playlist/55z05L7uSns7aPVkeHvRkO",width:"500",height:"260",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}),Object(n.jsx)("iframe",{title:"youtube",width:"500",height:"260",src:"https://www.youtube.com/embed/szDnqw-Tz5I?controls=0",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),Object(n.jsxs)("h1",{children:[e.getDate(),"/",e.getMonth()+1]}),Object(n.jsx)(w,{})]})};Object(i.v)({defaultFontStyle:{fontFamily:"SegoeUI, Montserrat, Quicksand , Consolas",fontWeight:"regular"},palette:{themePrimary:"#c239b3",themeLighterAlt:"#fdf5fc",themeLighter:"#f5d9f2",themeLight:"#edbae7",themeTertiary:"#da7dcf",themeSecondary:"#c94bba",themeDarkAlt:"#ae33a0",themeDark:"#932b87",themeDarker:"#6d1f64",neutralLighterAlt:"#faf9f8",neutralLighter:"#f3f2f1",neutralLight:"#edebe9",neutralQuaternaryAlt:"#e1dfdd",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c6c4",neutralTertiary:"#a19f9d",neutralSecondary:"#605e5c",neutralPrimaryAlt:"#3b3a39",neutralPrimary:"#323130",neutralDark:"#201f1e",black:"#000000",white:"#ffffff"}});var O=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(x,{})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,127)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),A()}},[[79,1,2]]]);
//# sourceMappingURL=main.3e6d8026.chunk.js.map