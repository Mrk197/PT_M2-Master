(()=>{var t={883:t=>{t.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(t,r,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883),i={type:n},c={type:o};t.exports={incremento:i,decremento:c}},616:(t,r,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883),i={contador:0};t.exports=function(t=i,r){switch(r.type){case n:return{contador:t.contador+1};case o:return{contador:t.contador-1};default:return t}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}(()=>{"use strict";function t(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var r="function"==typeof Symbol&&Symbol.observable||"@@observable",n=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+n(),REPLACE:"@@redux/REPLACE"+n(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+n()}};function i(t){if("object"!=typeof t||null===t)return!1;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}const c=e(616),{incremento:u,decremento:f}=e(518);var s=function e(n,c,u){var f;if("function"==typeof c&&"function"==typeof u||"function"==typeof u&&"function"==typeof arguments[3])throw new Error(t(0));if("function"==typeof c&&void 0===u&&(u=c,c=void 0),void 0!==u){if("function"!=typeof u)throw new Error(t(1));return u(e)(n,c)}if("function"!=typeof n)throw new Error(t(2));var s=n,E=c,a=[],d=a,l=!1;function p(){d===a&&(d=a.slice())}function y(){if(l)throw new Error(t(3));return E}function v(r){if("function"!=typeof r)throw new Error(t(4));if(l)throw new Error(t(5));var e=!0;return p(),d.push(r),function(){if(e){if(l)throw new Error(t(6));e=!1,p();var n=d.indexOf(r);d.splice(n,1),a=null}}}function w(r){if(!i(r))throw new Error(t(7));if(void 0===r.type)throw new Error(t(8));if(l)throw new Error(t(9));try{l=!0,E=s(E,r)}finally{l=!1}for(var e=a=d,n=0;n<e.length;n++)(0,e[n])();return r}function h(r){if("function"!=typeof r)throw new Error(t(10));s=r,w({type:o.REPLACE})}function N(){var e,n=v;return(e={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(t(11));function e(){r.next&&r.next(y())}return e(),{unsubscribe:n(e)}}})[r]=function(){return this},e}return w({type:o.INIT}),(f={dispatch:w,subscribe:v,getState:y,replaceReducer:h})[r]=N,f}(c);s.subscribe((()=>{console.log(s.getState())}));var E=document.getElementById("valor");function a(){const t=s.getState().contador;console.log("actualState",t),E.innerHTML=t}console.log("valor",E),a(),s.subscribe(a),document.getElementById("incremento").addEventListener("click",(()=>s.dispatch(u))),document.getElementById("decremento").addEventListener("click",(()=>s.dispatch(f)))})()})();