// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).composeAsync=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,l=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,t,r.get),y&&f&&f.call(e,t,r.set),e};var a=r;function p(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var w=b()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[g],i=g,t=null!=(o=e)&&v.call(o,i);try{e[g]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[g]=r:delete e[g],n}:function(e){return d.call(e)},m=Boolean.prototype.toString;var _=b();function h(e){return"object"==typeof e&&(e instanceof Boolean||(_?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===w(e)))}function j(e){return y(e)||h(e)}function S(){return new Function("return this;")()}p(j,"isPrimitive",y),p(j,"isObject",h);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof O?O:null;var B=function(e){if(arguments.length){if(!y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return S()}if(A)return A;if(E)return E;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,x=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;p(C,"REGEXP",V);var k=Array.isArray?Array.isArray:function(e){return"[object Array]"===w(e)};function G(e){return null!==e&&"object"==typeof e}function L(e){var t,r,n,o;if(("Object"===(r=w(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return G(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(G,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!k(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(G));var M="function"==typeof e||"object"==typeof x||"function"==typeof P?function(e){return L(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?L(e).toLowerCase():t};function F(e){return"function"===M(e)}function I(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(){var e,t,r;if((e=arguments.length)<2)throw new Error("insufficient arguments. Must provide multiple functions to compose.");for(t=new Array(e),r=0;r<e;r++)if(t[r]=arguments[r],!F(t[r]))throw new TypeError(I("0iJBQ",t[r]));return n;function n(){var r,n,o;for(r=arguments[arguments.length-1],n=new Array(arguments.length-1),o=0;o<n.length;o++)n[o]=arguments[o];function i(e,n){return e?r(e):(o-=1)<0?r(null,n):void t[o](n,i)}n.push(i),t[o=e-1].apply(null,n)}}}));
//# sourceMappingURL=browser.js.map
