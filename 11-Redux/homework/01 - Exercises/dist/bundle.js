(()=>{var r={883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883),i={type:n},u={type:o};r.exports={incremento:i,decremento:u}},616:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883),i={contador:0};r.exports=function(r=i,t){switch(t.type){case n:return r++;case o:return r--;default:return r}}}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n](i,i.exports,e),i.exports}(()=>{"use strict";function r(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var t="function"==typeof Symbol&&Symbol.observable||"@@observable",n=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+n(),REPLACE:"@@redux/REPLACE"+n(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+n()}};function i(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}const u=e(616),{incremento:f,decremento:c}=e(518);var s=function e(n,u,f){var c;if("function"==typeof u&&"function"==typeof f||"function"==typeof f&&"function"==typeof arguments[3])throw new Error(r(0));if("function"==typeof u&&void 0===f&&(f=u,u=void 0),void 0!==f){if("function"!=typeof f)throw new Error(r(1));return f(e)(n,u)}if("function"!=typeof n)throw new Error(r(2));var s=n,E=u,p=[],l=p,d=!1;function a(){l===p&&(l=p.slice())}function y(){if(d)throw new Error(r(3));return E}function w(t){if("function"!=typeof t)throw new Error(r(4));if(d)throw new Error(r(5));var e=!0;return a(),l.push(t),function(){if(e){if(d)throw new Error(r(6));e=!1,a();var n=l.indexOf(t);l.splice(n,1),p=null}}}function h(t){if(!i(t))throw new Error(r(7));if(void 0===t.type)throw new Error(r(8));if(d)throw new Error(r(9));try{d=!0,E=s(E,t)}finally{d=!1}for(var e=p=l,n=0;n<e.length;n++)(0,e[n])();return t}function v(t){if("function"!=typeof t)throw new Error(r(10));s=t,h({type:o.REPLACE})}function N(){var e,n=w;return(e={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(r(11));function e(){t.next&&t.next(y())}return e(),{unsubscribe:n(e)}}})[t]=function(){return this},e}return h({type:o.INIT}),(c={dispatch:h,subscribe:w,getState:y,replaceReducer:v})[t]=N,c}(u),E=document.getElementById("valor");function p(){let r=s.getState().contador;console.log(r),E.innerHTML=r}p(),s.subscribe(p),document.getElementById("incremento").onclick(s.dispatch(f)),document.getElementById("decremento").onclick(s.dispatch(c))})()})();