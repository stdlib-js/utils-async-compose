"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=g(function(y,m){
var l=require('@stdlib/assert-is-function/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function v(){var e,r,t;if(e=arguments.length,e<2)throw new Error(p('1Qv1Y'));for(r=new Array(e),t=0;t<e;t++)if(r[t]=arguments[t],!l(r[t]))throw new TypeError(p('1QvAj',r[t]));return c;function c(){var i,u,n;for(i=arguments[arguments.length-1],u=new Array(arguments.length-1),n=0;n<u.length;n++)u[n]=arguments[n];u.push(s),n=e-1,r[n].apply(null,u);function s(a,o){if(a)return i(a);if(n-=1,n<0)return i(null,o);r[n](o,s)}}}m.exports=v
});var h=f();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
