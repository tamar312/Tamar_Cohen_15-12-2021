(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,r){},46:function(e,t,r){},66:function(e,t,r){},72:function(e,t,r){},75:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),n=r(20),i=r.n(n),s=(r(27),r(17)),o=(r.p,r(46),r(24)),l=r(10),u=r.n(l),d=r(13),h=r(11),j=r.n(h);var f=new Proxy({},{get:function(e,t){return void 0===e[t]?function(e){return{type:(r=t,r.replace(/([A-Z])/g,"_$1").toUpperCase()),payload:e};var r}:e[t]}}),b=(r(66),r(3)),p=r(1);var m=function(e){var t=Object(b.c)((function(e){return e.WeatherReducer.flagColor})),r=(Object(b.c)((function(e){return e.WeatherReducer.isFavorite})),Object(b.c)((function(e){return e.WeatherReducer.cityArr}))),a=Object(b.c)((function(e){return e.WeatherReducer.weatherArr}));console.log("weathertu",a);var n=Object(b.c)((function(e){return e.WeatherReducer.flagTmp}));console.log("weatherarr",r);var i=Object(b.b)(),l=Object(b.c)((function(e){return e.WeatherReducer.currentCity})),h=Object(b.c)((function(e){return e.WeatherReducer.weatherText})),m=Object(b.c)((function(e){return e.WeatherReducer.key})),v=Object(b.c)((function(e){return e.WeatherReducer.temperture}));console.log("temper",v),Object(b.c)((function(e){return e.WeatherReducer.date}));var x=Object(c.useState)("c"),y=Object(s.a)(x,2),O=y[0],g=y[1],T=Object(c.useState)(),w=Object(s.a)(T,2),C=w[0],k=w[1],W=["Sun","Mon","Tue","Wed","Thu"],N={id:m,name:l,weatherText:h},S=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,j.a.get("".concat("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&q=").concat(t.target.value,"&language=en-us"));case 3:r=e.sent,console.log("resssss",r),i(f.getCityArr(r.data)),k(r.data),1==r.data.length&&F(r.data);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,c,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(f.setCurrentCity(t[0].LocalizedName)),r=t[0].Key,console.log("key",r),i(f.setKey(r)),e.next=7,j.a.get("http://dataservice.accuweather.com/currentconditions/v1/".concat(r,"?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8"));case 7:return c=e.sent,console.log("resssss2",c),i(f.setWeatherText(c.data[0].WeatherText)),a=c.data[0].Temperature.Metric.Value,a=Math.round(a),i(f.setTemp(a)),e.next=16,j.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(r,"?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&details=true&metric=true"));case 16:n=e.sent,i(f.setWeatherArr(n.data.DailyForecasts));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(u.a.mark((function e(){var t,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(f.setCurrentCity("Tel Aviv")),t=215854,i(f.setKey(t)),e.next=6,j.a.get("http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8");case 6:return r=e.sent,console.log("resssss2",r),i(f.setWeatherText(r.data[0].WeatherText)),i(f.setTemp(r.data[0].Temperature.Metric.Value)),e.next=14,j.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&details=true&metric=true"));case 14:c=e.sent,i(f.setWeatherArr(c.data.DailyForecasts));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l||A()}),[]),Object(c.useEffect)((function(){if(n){var e=j.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(m,"?apikey=qQfNRgVyzSfO6hHZLS2BlmjAGKpoUcE8&details=true&metric=true"));i(f.setWeatherArr(e.data.DailyForecasts)),i(f.setFlagTmp(!1))}}),[n]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:t?"dark":"light",style:{width:"100%",height:"100%"},children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:" row d-flex justify-content-center",children:[Object(p.jsx)("input",{type:"text",list:"city",className:"search",options:r,onChange:S,placeholder:"Search For Arae:"}),Object(p.jsx)("datalist",{id:"city",children:r?r.map((function(e){return Object(p.jsx)("option",{children:e.LocalizedName})})):""}),Object(p.jsx)("button",{style:{height:"fit-content",marginTop:"2vh",background:"lightblue"},onClick:function(){return F(C)},children:"Show"})]}),Object(p.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(p.jsx)("br",{}),Object(p.jsx)("button",{class:"btn btn-primary bshadow fontButtonds",style:{backgroundColor:"black",width:"30vmin"},onClick:function(){return i(f.addToFavorites(N))},children:"Add to favorites"}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{className:"d-flex justify-content-start",children:[Object(p.jsxs)("div",{style:{fontSize:"medium"},children:[l," "]}),Object(p.jsxs)("p",{style:{fontSize:"larger",marginTop:"1vh"},children:[v,O]})]}),Object(p.jsx)("p",{className:"d-flex justify-content-center",style:{fontSize:"large"},children:h}),Object(p.jsx)("button",{onClick:function(){return function(){if("c"==O)for(var e in i(f.setTemp(Math.round(9*v/5)+32)),g("f"),a)Math.round(9*a[e].Temperature.Maximum.Value/5+32),Math.round(9*a[e].Temperature.Minimum.Value/5+32);else for(var e in i(f.setTemp(Math.round(5*(v-32)/9))),g("c"),a)Math.round(5*(a[e].Temperature.Maximum.Value-32)/9),Math.round(5*(a[e].Temperature.Minimum.Value-32)/9)}()},children:"Convert Temperature"}),Object(p.jsx)("div",{className:"row",children:a?a.map((function(e,t){var r;return Object(p.jsxs)("div",{className:"col-md-2 stl",style:{background:"#7adced"},children:[Object(p.jsx)("div",{style:{marginTop:"3vh",fontSize:"large",fontWeight:"500"},className:"d-flex justify-content-center",children:W[t]}),Object(p.jsx)("div",{style:{marginTop:"1vh",fontSize:"large",fontWeight:"500"},className:"d-flex justify-content-center",children:e.date}),Object(p.jsxs)("div",{className:"d-flex justify-content-center",style:(r={fontSize:"large",marginTop:"3vh"},Object(o.a)(r,"fontSize","large"),Object(o.a)(r,"fontWeight","500"),r),children:[e.Temperature.Maximum.Value,O,"-",e.Temperature.Minimum.Value,O]})]})})):""})]})})})},v=(r(72),r(4));var x=function(){var e=Object(v.f)(),t=Object(b.b)(),r=Object(b.c)((function(e){return e.WeatherReducer.favorites})),c=function(){var r=Object(d.a)(u.a.mark((function r(c){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t(f.setCurrentCity(c.name)),t(f.setWeatherText(c.weatherText)),t(f.setKey(c.id)),t(f.setFlagTmp(!0)),e.push("/weather");case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:""!=r&&r.map((function(e,a){return Object(p.jsx)("div",{class:"col-sm-2",style:{width:"15rem"},children:Object(p.jsx)("div",{class:"card bshadow aa",style:{marginLeft:"10vh"},children:Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsx)("h5",{style:{marginTop:"2vh",fontSize:"large",cursor:"pointer"},className:"d-flex justify-content-center",onClick:function(){return c(e)},children:e.name}),Object(p.jsx)("p",{className:"d-flex justify-content-center",style:{marginTop:"3vh",fontSize:"initial"},children:e.weatherText}),Object(p.jsx)("button",{style:{marginTop:"3vh",background:"black",color:"white"},className:"d-flex justify-content-center",onClick:function(e){return t(f.deleteFromFavorites([a,r]))},children:"\u200f Remove From Favorites"})]})})})}))})},y=r(26),O=r(41),g=r(40);var T={cityArr:[],weatherArr:[],favorites:[],temperture:"13",currentCity:"",weatherText:"",key:"",flagTmp:!1,flagColor:!1,isFavorite:!1},w={getCityArr:function(e,t){e.cityArr=t.payload},setWeather:function(e,t){e.getWeather=t.payload},setCurrentCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;e.currentCity=t.payload},setKey:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;e.key=t.payload},setWeatherText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;e.weatherText=t.payload},addToFavorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,r=[].concat(Object(O.a)(e.favorites),[t.payload]);e.favorites=r,alert("Added successfully!")},deleteFromFavorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T.favorites,t=arguments.length>1?arguments[1]:void 0,r=t.payload[1];r=r.filter((function(e){return e.id!==t.payload[1][t.payload[0]].id})).map((function(e){return{id:e.id,name:e.name,weatherText:e.weatherText}})),e.favorites=r},setFlagTmp:function(e,t){e.flagTmp=t.payload},setWeatherArr:function(e,t){e.weatherArr=t.payload},setTemp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;e.temperture=t.payload},setFlagColor:function(e,t){e.flagColor=f.payload}},C=Object(g.a)((function(e,t){return function(e,t,r){var c=r[t.type.toLowerCase().replace(/_(\w)/g,(function(e){return e[1].toUpperCase()}))];c&&c(e,t)}(e,t,w)}),T),k=Object(y.a)({WeatherReducer:C}),W=Object(y.b)(k);window.store=W;var N=W,S=r(16);var F=function(){Object(b.b)();var e=Object(b.c)((function(e){return e.WeatherReducer.currentCity})),t=Object(c.useState)("light"),r=Object(s.a)(t,2);return r[0],r[1],Object(p.jsxs)("div",{children:[Object(p.jsx)("center",{children:Object(p.jsx)("div",{children:Object(p.jsx)("b",{children:" Weather"})})}),Object(p.jsx)(b.a,{store:N,children:Object(p.jsxs)(S.a,{children:[Object(p.jsxs)("nav",{style:{backgroundColor:"#35bfd7",height:"80px"},children:[Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col  col-sm-1",children:Object(p.jsx)("button",{className:"btn btn-outline-dark",children:Object(p.jsx)(S.b,{to:"/Weather",children:Object(p.jsx)("span",{style:{color:"white"},children:Object(p.jsx)("b",{children:"Weather"})})})})}),Object(p.jsx)("div",{className:"col  col-sm-1",children:Object(p.jsx)("button",{className:"btn btn-outline-dark",children:Object(p.jsx)(S.b,{to:"/Favorites",children:Object(p.jsx)("span",{style:{color:"white"},children:Object(p.jsx)("b",{children:"Favorites"})})})})}),Object(p.jsx)("div",{style:{color:"white",fontFamily:"cursive",fontSize:"medium"},className:"col col-sm-8   ",children:Object(p.jsx)("center",{children:e})})]})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{style:{backgroundColor:"black",height:"20px"}}),Object(p.jsxs)(v.c,{children:[Object(p.jsx)(v.a,{path:"/Weather",children:Object(p.jsx)(b.a,{store:N,children:Object(p.jsx)(m,{})})}),Object(p.jsx)(v.a,{path:"/Favorites",children:Object(p.jsx)(b.a,{store:N,children:Object(p.jsx)(x,{})})})]})]})})]})},A=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,78)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b.a,{store:N,children:Object(p.jsx)(F,{})})}),document.getElementById("root")),A()}},[[75,1,2]]]);
//# sourceMappingURL=main.ba1b2e9c.chunk.js.map