(()=>{"use strict";var e,t,r={},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,a),n.exports}async function n(e,t){let r,o;o=""==e?t:e;try{return r=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=86126fe4908948ad893172220231309&q=${o}&days=9`,{mode:"cors"}),r.json()}catch(e){throw new Error(e)}}a.m=r,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".bundle.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="weather-app:",a.l=(r,o,n,i)=>{if(e[r])e[r].push(o);else{var c,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+n){c=d;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",t+n),c.src=r),e[r]=[o];var p=(t,o)=>{c.onerror=c.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=n);var i=a.p+a.u(t),c=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,o[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[i,c,l]=r,u=0;if(i.some((t=>0!==e[t]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);l&&l(a)}for(t&&t(r);u<i.length;u++)n=i[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkweather_app=self.webpackChunkweather_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();const i=document.querySelector("form"),c=document.querySelector(".search-bar"),l=document.querySelector("main"),u=document.querySelectorAll("[data-toggle]");let s,d="",p="c";i.addEventListener("submit",(async e=>{e.preventDefault(),""==c.value&&alert("Not correct"),d=c.value,s=(await Promise.all([a.e(480),a.e(617)]).then(a.bind(a,617))).default,s(n(c.value,d),p,l),i.reset()})),u.forEach((e=>{e.addEventListener("click",(()=>{""==d?p="c"===e.dataset.toggle?"c":"f":""!==d&&(p="c"===e.dataset.toggle?"c":"f",s(n(c.value,d),p,l))}))}))})();
//# sourceMappingURL=main.bundle.js.map