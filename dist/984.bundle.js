"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[984],{984:(n,e,t)=>{async function c(n,e){const t=await n;console.log(t);const c=e.children[0],r=e.children[1],a=e.children[2];!function(n,e){e.children[0].textContent=`${n.location.name}, ${n.location.country}`,e.children[1].textContent=`${n.current.last_updated}`}(t,c),function(n,e){e.children[0].children[0].src=n.current.condition.icon,e.children[0].children[1].textContent=`${n.current.temp_c}°C`,e.children[0].children[2].children[0].textContent=n.current.condition.text,e.children[0].children[2].children[1].textContent=`Feels like ${n.current.feelslike_c}°C`}(t,r),function(n,e){const t=[...e.children[1].children[0].children],c=[n.current.gust_kph,n.current.humidity,n.current.uv,n.current.vis_km,n.current.cloud,n.forecast.forecastday[0].day.daily_chance_of_rain,n.forecast.forecastday[0].astro.sunrise,n.forecast.forecastday[0].astro.sunset,n.forecast.forecastday[0].astro.moon_phase];t.forEach((n=>{n.children[1].textContent=c[t.indexOf(n)]}))}(t,r),function(n,e){const t=[...e.children[1].children];t.forEach((e=>{const c=n.forecast.forecastday[t.indexOf(e)+1];e.innerHTML=`\n    <p>\n      <span class="day-name">${c.date}</span>\n      <span class="daily-temp">${c.day.avgtemp_c}°C</span>\n      <span class="daily-night-temp">${c.day.mintemp_c}°C</span>\n      <span class="daily-wind-speed">${c.day.maxwind_kph}</span>\n    </p>`}))}(t,a)}t.r(e),t.d(e,{default:()=>c})}}]);
//# sourceMappingURL=984.bundle.js.map