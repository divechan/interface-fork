"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5265],{85265:function(t,e,r){r.r(e),r.d(e,{CloverConnector:function(){return b},NoCloverProviderError:function(){return w},UserRejectedRequestError:function(){return m}});var n=r(2200);function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))}}function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function c(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,r){return f=h()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&s(o,r.prototype),o},f.apply(null,arguments)}function l(t){var e="function"===typeof Map?new Map:void 0;return l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,u(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)},l(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var v,d,y=(v=function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(R){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=h(t,e,r);if("normal"===u.type){if(n=r.done?v:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(R){return{type:"throw",arg:R}}}t.wrap=s;var f="suspendedStart",l="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function w(){}var m={};m[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==r&&n.call(x,i)&&(m=x);var C=w.prototype=y.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=C.constructor=w,w.constructor=g,g.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(C),u(C,c,"Generator"),C[i]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}},v(d={exports:{}},d.exports),d.exports);function g(t){return t.hasOwnProperty("result")?t.result:t}var w=function(t){function e(){var e;return(e=t.call(this)||this).name=e.constructor.name,e.message="No Clover provider was found on window.clover.",e}return c(e,t),e}(l(Error)),m=function(t){function e(){var e;return(e=t.call(this)||this).name=e.constructor.name,e.message="The user rejected the request.",e}return c(e,t),e}(l(Error)),b=function(t){function e(e){var r;return(r=t.call(this,e)||this).handleNetworkChanged=r.handleNetworkChanged.bind(p(r)),r.handleChainChanged=r.handleChainChanged.bind(p(r)),r.handleAccountsChanged=r.handleAccountsChanged.bind(p(r)),r.handleClose=r.handleClose.bind(p(r)),r.getCloverProvider=r.getCloverProvider.bind(p(r)),r}c(e,t);var r=e.prototype;return r.handleChainChanged=function(t){this.emitUpdate({chainId:t,provider:this.getCloverProvider()})},r.handleAccountsChanged=function(t){0===t.length?this.emitDeactivate():this.emitUpdate({account:t[0]})},r.handleClose=function(t,e){this.emitDeactivate()},r.handleNetworkChanged=function(t){this.emitUpdate({chainId:t,provider:this.getCloverProvider()})},r.getCloverProvider=function(){var t,e,r=window.clover;return null!=r&&null!=(t=r.providers)&&t.length?null!=(e=r.providers.find((function(t){return t.isClover})))?e:r.providers[0]:r},r.activate=function(){var t=i(y.mark((function t(){var e,r;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.clover){t.next=2;break}throw new w;case 2:return(e=this.getCloverProvider()).on&&(e.on("chainChanged",this.handleChainChanged),e.on("accountsChanged",this.handleAccountsChanged),e.on("close",this.handleClose),e.on("networkChanged",this.handleNetworkChanged)),e.isClover&&(e.autoRefreshOnNetworkChange=!1),t.prev=5,t.next=8,e.send("eth_requestAccounts").then((function(t){return g(t)[0]}));case 8:r=t.sent,t.next=16;break;case 11:if(t.prev=11,t.t0=t.catch(5),4001!==t.t0.code){t.next=15;break}throw new m;case 15:case 16:if(r){t.next=20;break}return t.next=19,e.enable().then((function(t){return t&&g(t)[0]}));case 19:r=t.sent;case 20:return t.abrupt("return",a({provider:e},r?{account:r}:{}));case 21:case"end":return t.stop()}}),t,this,[[5,11]])})));return function(){return t.apply(this,arguments)}}(),r.getProvider=function(){var t=i(y.mark((function t(){return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getCloverProvider());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),r.getChainId=function(){var t=i(y.mark((function t(){var e,r;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.clover){t.next=2;break}throw new w;case 2:return r=this.getCloverProvider(),t.prev=3,t.next=6,r.send("eth_chainId").then(g);case 6:e=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3);case 12:if(e){t.next=22;break}return t.prev=13,t.next=16,r.send("net_version").then(g);case 16:e=t.sent,t.next=22;break;case 19:t.prev=19,t.t1=t.catch(13);case 22:if(!e)try{e=g(r.send({method:"net_version"}))}catch(n){}return e||(e=r.isDapper?g(r.cachedResults.net_version):r.chainId||r.netVersion||r.networkVersion||r._chainId),t.abrupt("return",e);case 25:case"end":return t.stop()}}),t,this,[[3,9],[13,19]])})));return function(){return t.apply(this,arguments)}}(),r.getAccount=function(){var t=i(y.mark((function t(){var e,r;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.clover){t.next=2;break}throw new w;case 2:return r=this.getCloverProvider(),t.prev=3,t.next=6,r.send("eth_accounts").then((function(t){return g(t)[0]}));case 6:e=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3);case 12:if(e){t.next=22;break}return t.prev=13,t.next=16,r.enable().then((function(t){return g(t)[0]}));case 16:e=t.sent,t.next=22;break;case 19:t.prev=19,t.t1=t.catch(13);case 22:return e||(e=g(r.send({method:"eth_accounts"}))[0]),t.abrupt("return",e);case 24:case"end":return t.stop()}}),t,this,[[3,9],[13,19]])})));return function(){return t.apply(this,arguments)}}(),r.deactivate=function(){var t=this.getCloverProvider();null!=t&&t.removeListener&&(t.removeListener("chainChanged",this.handleChainChanged),t.removeListener("accountsChanged",this.handleAccountsChanged),t.removeListener("close",this.handleClose),t.removeListener("networkChanged",this.handleNetworkChanged))},r.isAuthorized=function(){var t=i(y.mark((function t(){var e;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.clover){t.next=2;break}return t.abrupt("return",!1);case 2:return e=this.getCloverProvider(),t.prev=3,t.next=6,e.send("eth_accounts").then((function(t){return g(t).length>0}));case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(3),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t,this,[[3,9]])})));return function(){return t.apply(this,arguments)}}(),e}(n.AbstractConnector)}}]);