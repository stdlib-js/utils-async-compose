// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(){var r,e,s;if((r=arguments.length)<2)throw new Error("insufficient arguments. Must provide multiple functions to compose.");for(e=new Array(r),s=0;s<r;s++)if(e[s]=arguments[s],!n(e[s]))throw new TypeError(t("invalid argument. All arguments must be functions. Value: `%s`.",e[s]));return i;function i(){var n,t,s;for(n=arguments[arguments.length-1],t=new Array(arguments.length-1),s=0;s<t.length;s++)t[s]=arguments[s];function i(t,r){return t?n(t):(s-=1)<0?n(null,r):void e[s](r,i)}t.push(i),e[s=r-1].apply(null,t)}}export{r as default};
//# sourceMappingURL=index.mjs.map
