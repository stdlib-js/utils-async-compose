// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function n(){var n,e,o;if((n=arguments.length)<2)throw new Error(t("1Qv1Y"));for(e=new Array(n),o=0;o<n;o++)if(e[o]=arguments[o],!r(e[o]))throw new TypeError(t("1QvAj",e[o]));return function(){var r,t,o;for(r=arguments[arguments.length-1],t=new Array(arguments.length-1),o=0;o<t.length;o++)t[o]=arguments[o];t.push((function t(n,s){return n?r(n):(o-=1)<0?r(null,s):void e[o](s,t)})),o=n-1,e[o].apply(null,t)}}export{n as default};
//# sourceMappingURL=index.mjs.map
