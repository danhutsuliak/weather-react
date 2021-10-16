(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(5),s=a.n(c),i=(a(14),a(2)),o=a.n(i),l=a(4),d=a(6),h=a(7),u=a(9),j=a(8),p=(a(16),a(17),a(0)),m=function(e){var t=e.date,a=e.imgSrc,n=e.degree,r=e.text;return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("p",{className:"date",children:t}),Object(p.jsx)("img",{src:a,alt:"cloudy",className:"daily-img"}),Object(p.jsx)("p",{className:"degree",children:n}),Object(p.jsx)("p",{className:"text",children:r})]})},b=(a(19),function(e){var t=e.daily;if(!t)return Object(p.jsx)("div",{});for(var a=[],n=0;n<8;n++){var r=new Date(1e3*t[n].dt).toDateString();a.push(Object(p.jsx)(m,{date:r.slice(0,3)+r.slice(7,10),imgSrc:"http://openweathermap.org/img/w/".concat(t[n].weather[0].icon,".png"),degree:Math.round(t[n].temp.max)+"\xb0",text:t[n].weather[0].description[0].toUpperCase()+t[n].weather[0].description.slice(1)},n))}return Object(p.jsxs)("div",{className:"daily",children:[Object(p.jsx)("h2",{children:"Daily"}),Object(p.jsx)("div",{className:"card-wrapper",children:Object(p.jsx)("div",{className:"cards",children:a})})]})}),x=(a(20),function(e){var t=e.text,a=e.isShown;return Object(p.jsx)("div",{id:"myModal",className:"modal",style:{display:a&&"block"},children:Object(p.jsx)("div",{className:"modal-content",children:Object(p.jsx)("p",{children:t})})})}),f=(a(21),function(e){var t=e.current;if(!t)return Object(p.jsx)("div",{});var a=Math.round(t.temp)+"\xb0",n="http://openweathermap.org/img/w/".concat(t.weather[0].icon,".png"),r=t.weather[0].description[0].toUpperCase()+t.weather[0].description.slice(1);return Object(p.jsxs)("div",{className:"weather",children:[Object(p.jsx)("h2",{id:"place",children:"Chernivtsi"}),Object(p.jsxs)("div",{className:"weather-value-container",children:[Object(p.jsx)("img",{className:"main-img",src:n,alt:"sunny"}),Object(p.jsx)("p",{className:"degree",children:a}),Object(p.jsxs)("div",{className:"cel-fahr-container",children:[Object(p.jsx)("p",{className:"celsius",children:"C"}),Object(p.jsx)("p",{className:"fahrenheit",children:"F"})]})]}),Object(p.jsx)("h2",{className:"weather-desc",children:r})]})}),O=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).API_Key="19ffda1a93323f52e689caab91528bf8",e.units="metric",e.state={weather:{},isModalShown:!0,modalText:"Please Wait..."},e}return Object(h.a)(a,[{key:"getWeather",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.lat,"&lon=").concat(t.lon,"&exclude=minutely,hourly,alerts&appid=").concat(this.API_Key,"&units=").concat(this.units));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Failed to fetch coordinates. Please try again!");case 5:return e.next=7,a.json();case 7:if(!(n=e.sent).error_message){e.next=10;break}throw new Error(n.error_message);case 10:return console.log(n),e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(){var t=Object(l.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={lat:a.coords.latitude,lon:a.coords.longitude},t.t0=e,t.next=4,e.getWeather(n);case 4:t.t1=t.sent,t.t2={weather:t.t1},t.t0.setState.call(t.t0,t.t2),e.setState({isModalShown:!1});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){e.setState({modalText:"Error! "+t.message})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(x,{isShown:this.state.isModalShown,text:this.state.modalText}),Object(p.jsx)(f,{current:this.state.weather.current}),Object(p.jsx)(b,{daily:this.state.weather.daily})]})}}]),a}(r.a.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},w=(a(22),function(){return Object(p.jsx)("header",{className:"header",children:Object(p.jsx)("h1",{className:"title",children:"Weather App"})})}),v=(a(23),function(){return Object(p.jsx)("footer",{children:Object(p.jsx)("a",{className:"title",href:"https://github.com/danhutsuliak",target:"_blank",rel:"noreferrer",children:"@danhutsuliak"})})});s.a.render(Object(p.jsxs)(r.a.StrictMode,{children:[Object(p.jsx)(w,{}),Object(p.jsx)(O,{}),Object(p.jsx)(v,{})]}),document.getElementById("root")),g()}],[[24,1,2]]]);
//# sourceMappingURL=main.fada0578.chunk.js.map