!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var r=document.querySelector(".slider");!function(e){e.map((function(e){var t=document.createElement("li"),n=document.createElement("img"),i=document.createElement("div");t.classList.add("slider-item"),n.classList.add("slider-item__img"),i.classList.add("slider-item__text"),n.setAttribute("src",e),t.append(n,i),r.append(t)}));var t=document.createElement("a"),n=document.createElement("a");t.classList.add("slider__prev"),t.innerHTML="&#10094;",n.classList.add("slider__next"),n.innerHTML="&#10095;",r.append(t,n)}(["img/slider2.jpg","img/slider1.jpg","img/Mountains-and-hills-julian-alps.png"]);var i=1;function l(e){var t,n=document.querySelectorAll(".slider-item");for(e>n.length&&(i=1),e<1&&(i=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[i-1].style.display="block"}l(i),r.onclick=function(e){e.target.classList.contains("slider__next")?l(i+=1):e.target.classList.contains("slider__prev")&&l(i-=1)}},function(e,t){}]);