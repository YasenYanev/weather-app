"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[617],{144:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(537),s=t.n(a),r=t(645),i=t.n(r)()(s());i.push([n.id,"main > * {\n  width: 100%;\n  /* height: 100%; */\n}\n\n.location-name {\n  font-size: large;\n  font-weight: bold;\n}\n.current-weather-wrapper,\n.current-weather {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.current-temp-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.weather-img {\n  width: 100%;\n}\n.current-temp {\n  font-size: 6rem;\n  font-weight: bold;\n}\n","",{version:3,sources:["webpack://./src/assets/styles/main.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;;EAEE,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,iBAAiB;AACnB",sourcesContent:["main > * {\r\n  width: 100%;\r\n  /* height: 100%; */\r\n}\r\n\r\n.location-name {\r\n  font-size: large;\r\n  font-weight: bold;\r\n}\r\n.current-weather-wrapper,\r\n.current-weather {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n.current-temp-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.weather-img {\r\n  width: 100%;\r\n}\r\n.current-temp {\r\n  font-size: 6rem;\r\n  font-weight: bold;\r\n}\r\n"],sourceRoot:""}]);const c=i},409:(n,e,t)=>{t.r(e),t.d(e,{default:()=>E});var a=t(532),s=t(111);const r=n=>{const e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstElementChild};var i=t(379),c=t.n(i),l=t(795),o=t.n(l),p=t(569),d=t.n(p),A=t(565),m=t.n(A),h=t(216),u=t.n(h),y=t(589),f=t.n(y),w=t(144),C={};async function E(n,e,t){t.innerHTML="";const i=await n;!function(n,e){e.appendChild(r(`\n      <section class='location'>\n        <h1 class='location-name'>${n.location.name}, ${n.location.country}</h1>\n        <p class='date-time'>${(0,a.Z)((0,s.Z)(n.current.last_updated,"yyyy-MM-dd HH:mm",new Date),"EEEE, MMMM dd, yyyy - HH:mm")}</p>\n      </section>\n\n  `))}(i,t),function(n,e,t){const a=n.current,s=a.condition,i="c"===t?a.temp_c:a.temp_f,c="c"===t?a.feelslike_c:a.feelslike_f;e.appendChild(r(`\n    <div class='current-weather-wrapper'>\n      <section class='current-weather'>\n        <img src='${s.icon}' class='weather-img' alt='weatherImg' />\n        <div class='current-temp-wrapper'>\n        <div>\n            <div class='current-temp'>${i}°${t.toUpperCase()}</div>\n            <div class='current-temp-desc'>\n              <p class='weather-condition'>${s.text}</p>\n              <p class='weather-feeling'>Feels like ${c}°${t.toUpperCase()}</p>\n            </div>\n        </div>\n      </section>\n    </div>\n  `))}(i,t,e),function(n,e,t){const a=n.current,s=n.forecast.forecastday[0],i="c"===t?(.277777778*a.wind_kph).toFixed(1)+"m/s":a.wind_mph+"mph",c="c"===t?a.vis_km:a.vis_miles,l=[["Wind",i],["Humidity",a.humidity+"%"],["UV index",a.uv],["Visibility",c+"km"],["Cloudiness",a.cloud+"%"],["Chance of rain",s.day.daily_chance_of_rain+"%"],["Sunrise",s.astro.sunrise],["Sunset",s.astro.sunset],["Moon phase",s.astro.moon_phase]];e.children[1].appendChild(r(`\n      <section class='current-weather-details'>\n          <ol class='weather-details'>\n          ${l.map((n=>`\n            <li>\n              <p class='detail-title'>${n[0]}</p>\n              <p class='detail-data'>${n[1]}</p>\n            </li>\n          `)).join("")}\n          </ol>\n      </section>\n  `))}(i,t,e),function(n,e,t){e.appendChild(r(`\n      <section class="weekly-forecast">\n        <h2 class="forecast-title">Weekly Forecast</h2>\n        <ol class="days-of-week">\n          ${(()=>{let e=[];for(let r=1;r<n.forecast.forecastday.length;r++){const i=n.forecast.forecastday[r];console.log(i);const c="c"===t?i.day.avgtemp_c:i.day.avgtemp_f,l="c"===t?i.day.mintemp_c:i.day.mintemp_f,o="c"===t?(.277777778*i.day.maxwind_kph).toFixed(1):i.day.maxwind_mph;e.push(`            \n            <li>\n              <p class="day">\n                <span class="day-name">${(0,a.Z)((0,s.Z)(i.date,"yyyy-MM-dd",new Date),"EEEE")}</span>\n                <span class="daily-temp">${c}°${t.toUpperCase()}</span>\n                <span class="daily-night-temp">${l}°${t.toUpperCase()}</span>\n                <span class="daily-wind-speed">${o}</span>\n              </p>\n            </li>`)}return e.join("")})()}\n        </ol>\n      </section>\n  `))}(i,t,e)}C.styleTagTransform=f(),C.setAttributes=m(),C.insert=d().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=u(),c()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals}}]);
//# sourceMappingURL=617.bundle.js.map