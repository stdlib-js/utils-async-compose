// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(){var n,e,o;if((n=arguments.length)<2)throw new Error("insufficient arguments. Must provide multiple functions to compose.");for(e=new Array(n),o=0;o<n;o++)if(e[o]=arguments[o],!r(e[o]))throw new TypeError(t("0iJBQ",e[o]));return s;function s(){var r,t,o;for(r=arguments[arguments.length-1],t=new Array(arguments.length-1),o=0;o<t.length;o++)t[o]=arguments[o];function s(t,n){return t?r(t):(o-=1)<0?r(null,n):void e[o](n,s)}t.push(s),e[o=n-1].apply(null,t)}}export{n as default};
//# sourceMappingURL=index.mjs.map
