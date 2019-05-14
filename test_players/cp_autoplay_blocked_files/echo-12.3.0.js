(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["echo_js"] = factory();
	else
		root["echo_js"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/ati/amd.smarttag-5.17.1.min.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/** START BBC ADDITION **/
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){
/** END BBC ADDITION **/

;(function(){var dfltPluginCfg={"sourceFile":"download","info":true};var dfltGlobalCfg={"site":596068,"log":"","logSSL":"","domain":"ati-host.net","collectDomain":"logw363.ati-host.net","collectDomainSSL":"logws1363.ati-host.net","secure":true,"pixelPath":"/hit.xiti","disableCookie":false,"disableStorage":false,"cookieSecure":false,"cookieDomain":"","preview":false,"plgs":["Campaigns","Clicks","ClientSideUserId","ContextVariables","Offline","OnSiteAds","Page","RichMedia"],"lazyLoadingPath":"","documentLevel":"document","redirect":false,"activateCallbacks":true,"medium":"","ignoreEmptyChapterValue":true,"base64Storage":false,"sendHitWhenOptOut":true};(function(a){a.Echo1200ATInternet=a.Echo1200ATInternet||{};a.Echo1200ATInternet.Tracker=a.Echo1200ATInternet.Tracker||{};a.Echo1200ATInternet.Tracker.Plugins=a.Echo1200ATInternet.Tracker.Plugins||{}})(window);
var Utils=function(){function a(q){var c=typeof q;if("object"!==c||null===q)return"string"===c&&(q='"'+q+'"'),String(q);var f,b,h=[],s=q&&q.constructor===Array;for(f in q)q.hasOwnProperty(f)&&(b=q[f],c=typeof b,"function"!==c&&"undefined"!==c&&("string"===c?b='"'+b.replace(/[^\\]"/g,'\\"')+'"':"object"===c&&null!==b&&(b=a(b)),h.push((s?"":'"'+f+'":')+String(b))));return(s?"[":"{")+String(h)+(s?"]":"}")}function k(a){return null===a?"":(a+"").replace(n,"")}function l(a){var c,f=null;return(a=k(a+""))&&
!k(a.replace(e,function(a,h,q,r){c&&h&&(f=0);if(0===f)return a;c=q||h;f+=!r-!q;return""}))?Function("return "+a)():null}var d=this,e=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,n=RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g");d.isLocalStorageAvailable=function(){try{var a=localStorage;a.setItem("__storage_test__","__storage_test__");a.removeItem("__storage_test__");return!0}catch(c){return!1}};
d.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var c="",f,b,h,s,r,e,g=0;for(a=d.Base64._utf8_encode(a);g<a.length;)f=a.charCodeAt(g++),b=a.charCodeAt(g++),h=a.charCodeAt(g++),s=f>>2,f=(f&3)<<4|b>>4,r=(b&15)<<2|h>>6,e=h&63,isNaN(b)?r=e=64:isNaN(h)&&(e=64),c=c+this._keyStr.charAt(s)+this._keyStr.charAt(f)+this._keyStr.charAt(r)+this._keyStr.charAt(e);return c},decode:function(a){var c="",f,b,h,e,r,g=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");g<
a.length;)f=this._keyStr.indexOf(a.charAt(g++)),b=this._keyStr.indexOf(a.charAt(g++)),e=this._keyStr.indexOf(a.charAt(g++)),r=this._keyStr.indexOf(a.charAt(g++)),f=f<<2|b>>4,b=(b&15)<<4|e>>2,h=(e&3)<<6|r,c+=String.fromCharCode(f),64!=e&&(c+=String.fromCharCode(b)),64!=r&&(c+=String.fromCharCode(h));return c=d.Base64._utf8_decode(c)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var c="",f=0;f<a.length;f++){var b=a.charCodeAt(f);128>b?c+=String.fromCharCode(b):(127<b&&2048>b?c+=String.fromCharCode(b>>
6|192):(c+=String.fromCharCode(b>>12|224),c+=String.fromCharCode(b>>6&63|128)),c+=String.fromCharCode(b&63|128))}return c},_utf8_decode:function(a){for(var c="",f=0,b,h,e;f<a.length;)b=a.charCodeAt(f),128>b?(c+=String.fromCharCode(b),f++):191<b&&224>b?(h=a.charCodeAt(f+1),c+=String.fromCharCode((b&31)<<6|h&63),f+=2):(h=a.charCodeAt(f+1),e=a.charCodeAt(f+2),c+=String.fromCharCode((b&15)<<12|(h&63)<<6|e&63),f+=3);return c}};d.loadScript=function(a,c){var f;c=c||function(){};f=document.createElement("script");
f.type="text/javascript";f.src=a.url;f.async=!1;f.defer=!1;f.onload=f.onreadystatechange=function(a){a=a||window.event;if("load"===a.type||/loaded|complete/.test(f.readyState)&&(!document.documentMode||9>document.documentMode))f.onload=f.onreadystatechange=f.onerror=null,c(null,a)};f.onerror=function(a){f.onload=f.onreadystatechange=f.onerror=null;c({msg:"script not loaded",event:a})};var b=document.head||document.getElementsByTagName("head")[0];b.insertBefore(f,b.lastChild)};d.cloneSimpleObject=
function(a,c){if("object"!==typeof a||null===a||a instanceof Date)return a;var f=new a.constructor,b;for(b in a)a.hasOwnProperty(b)&&(void 0===b||c&&void 0===a[b]||(f[b]=d.cloneSimpleObject(a[b])));return f};d.jsonSerialize=function(e){try{return"undefined"!==typeof JSON&&JSON.stringify?JSON.stringify(e):a(e)}catch(c){return null}};d.jsonParse=function(a){try{return"undefined"!==typeof JSON&&JSON.parse?JSON.parse(a+""):l(a)}catch(c){return null}};d.arrayIndexOf=function(a,c){return Array.indexOf?
a.indexOf(c):function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var e=0;1<arguments.length&&(e=Number(arguments[1]),e!=e?e=0:0!=e&&Infinity!=e&&-Infinity!=e&&(e=(0<e||-1)*Math.floor(Math.abs(e))));if(e>=c)return-1;for(e=0<=e?e:Math.max(c-Math.abs(e),0);e<c;e++)if(e in b&&b[e]===a)return e;return-1}.apply(a,[c])};d.uuid=function(){return{v4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var c=16*Math.random()|0;return("x"===
a?c:c&3|8).toString(16)})},num:function(a){var c=new Date,f=function(a){a-=100*Math.floor(a/100);return 10>a?"0"+a:String(a)};return f(c.getHours())+""+f(c.getMinutes())+""+f(c.getSeconds())+""+function(a){return Math.floor((9*Math.random()+1)*Math.pow(10,a-1))}(a-6)}}};d.getObjectKeys=function(a){var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f);return c};d.completeFstLevelObj=function(a,c,f){if(a){if(c)for(var b in c)!c.hasOwnProperty(b)||a[b]&&!f||(a[b]=c[b])}else a=c;return a};d.isPreview=
function(){return window.navigator&&"preview"===window.navigator.loadPurpose};d.isPrerender=function(a){var c,f=!1,b=["webkit","ms"];if("prerender"===document.visibilityState)c="visibilitychange";else for(var h=0;h<b.length;h++)"prerender"===document[b[h]+"VisibilityState"]&&(c=b[h]+"visibilitychange");if("undefined"!==typeof c){var e=function(b){a(b);d.removeEvtListener(document,c,e)};d.addEvtListener(document,c,e);f=!0}return f};var m=d.addEvtListener=function(a,c,f){a.addEventListener?a.addEventListener(c,
f,!1):a.attachEvent&&a.attachEvent("on"+c,f)},g=d.removeEvtListener=function(a,c,f){a.removeEventListener?a.removeEventListener(c,f,!1):a.detachEvent&&a.detachEvent("on"+c,f)};d.hashcode=function(a){var c=0;if(0===a.length)return c;for(var f=0;f<a.length;f++)var b=a.charCodeAt(f),c=(c<<5)-c+b,c=c|0;return c};d.setLocation=function(a){var c=a.location;a=window[a.target]||window;c&&(a.location.href=c)};d.dispatchCallbackEvent=function(a){var c;if("function"===typeof window.Event)c=new Event("ATCallbackEvent");
else try{c=document.createEvent("Event"),c.initEvent&&c.initEvent("ATCallbackEvent",!0,!0)}catch(f){}c&&"function"===typeof document.dispatchEvent&&(c.name=a,document.dispatchEvent(c))};d.addCallbackEvent=function(a){m(document,"ATCallbackEvent",a)};d.removeCallbackEvent=function(a){d.removeEvent("ATCallbackEvent",a)};(function(){function a(c,f){f=f||{bubbles:!1,cancelable:!1,detail:void 0};var b;try{b=document.createEvent("CustomEvent"),b.initCustomEvent(c,f.bubbles,f.cancelable,f.detail)}catch(h){}return b}
"function"===typeof window.CustomEvent?window.ATCustomEvent=window.CustomEvent:("function"===typeof window.Event&&(a.prototype=window.Event.prototype),window.ATCustomEvent=a)})();d.addEvent=function(a,c,f,b){d[a]=new ATCustomEvent(a,{detail:{name:c,id:f}});m(document,a,b)};d.removeEvent=function(a,c){g(document,a,c)};d.dispatchEvent=function(a,c){d[a]=d[a]||new ATCustomEvent(a,{detail:{name:c,id:-1}});try{document.dispatchEvent(d[a])}catch(f){}};d.addOptOutEvent=function(a,c){d.addEvent("ATOptOutEvent",
"clientsideuserid",a,c)};d.removeOptOutEvent=function(a){d.removeEvent("ATOptOutEvent",a)};d.dispatchOptOutEvent=function(a){d.optedOut=a;d.dispatchEvent("ATOptOutEvent","clientsideuserid")};d.userOptedOut=function(){d.dispatchOptOutEvent(!0)};d.userOptedIn=function(){d.dispatchOptOutEvent(!1)};d.isOptedOut=function(){if(null===d.optedOut){var a;a:{a=null;d.isLocalStorageAvailable()&&(a=localStorage.getItem("atoptedout"));if(null===a){var c=/(?:^| )atoptedout=([^;]+)/.exec(document.cookie);null!==
c&&(a=c[1])}if(null!==a)try{a=decodeURIComponent(a)}catch(f){}if(a&&(a=d.jsonParse(a)||d.jsonParse(d.Base64.decode(a)),null!==a)){a=!!a.val;break a}a=!1}d.optedOut=a}return!!d.optedOut};d.optedOut=null;d.consentReceived=function(a){d.consent=!!a};d.consent=!0;d.isTabOpeningAction=function(a){var c=!1;a&&(a.ctrlKey||a.shiftKey||a.metaKey||a.button&&1===a.button)&&(c=!0);return c}};window.Echo1200ATInternet.Utils=new Utils;
var BuildManager=function(a){var k=this,l=1600,d=["dz"],e=function(a,f,b,h,e,r,g){a="&"+a+"=";return{param:a,paramSize:a.length,str:f,strSize:f.length,truncate:b,multihit:h,separator:e||"",encode:r,last:g}},n=function(a,f){var b="",h=0,e=0,r=0,g=null,p=null,d;for(d in a)a.hasOwnProperty(d)&&(g=a[d])&&(h=f-e,g.last&&null!==p?p[d]=g:g.strSize+g.paramSize<=h?(b+=g.param+g.str,e+=g.paramSize+g.strSize):(p=p||{},p[d]=g,g.truncate&&(r=h-g.paramSize,g.separator&&(h=g.str.substring(0,h),r=g.encode?h.lastIndexOf(encodeURIComponent(g.separator))||
r:h.lastIndexOf(g.separator)||r),b+=g.param+g.str.substring(0,r),e+=g.paramSize+g.str.substring(0,r).size,p[d].str=g.str.substring(r,g.strSize),p[d].strSize=p[d].str.length)));return[b,p]},m=function(c,f,b,h){var g="",r=function(b){if(b==={})return[];var c=[],h;h={};var f=!1,r=void 0,p,m,q,k,w,t,v,y,z="",x;for(x in b)if(b.hasOwnProperty(x))if(t=w=k=q=!1,p=b[x].value,m=b[x].options||{},"boolean"===typeof m.encode&&(q=m.encode),"function"===typeof p&&(p=p()),p=p instanceof Array?p.join(m.separator||
","):"object"===typeof p?Echo1200ATInternet.Utils.jsonSerialize(p):"undefined"===typeof p?"undefined":p.toString(),q&&(p=encodeURIComponent(p)),-1<Echo1200ATInternet.Utils.arrayIndexOf(d,x)?k=!0:"boolean"===typeof m.truncate&&(k=m.truncate),"boolean"===typeof m.multihit&&(w=m.multihit),"boolean"===typeof m.last&&(t=m.last),p=e(x,p,k,w,m.separator,q,t),w)l-=p.paramSize+p.strSize,z+=p.param+p.str;else if(t)p.paramSize+p.strSize>l&&(p.str=p.str.substring(0,l-p.paramSize),p.strSize=p.str.length),v=x,y=p;else if(h[x]=
p,h[x].paramSize+h[x].strSize>l&&!h[x].truncate){a.emit("Tracker:Hit:Build:Error",{lvl:"ERROR",msg:'Too long parameter: "'+h[x].param+'"',details:{value:h[x].str}});f=!0;r=x;break}v&&(h[v]=y);h=[h,f,r,z];b=h[0];f=h[1];g=h[3];f&&(h=h[2],b=b[h],b.str=b.str.substring(0,l-b.paramSize),b.strSize=b.str.length,f={},f.mherr=e("mherr","1",!1,!1,"",!1),f[h]=b,b=f);b=n(b,l);if(null===b[1])c=b[0];else for(c.push(b[0]);null!==b[1];)b=n(b[1],l),c.push(b[0]);return c},m="";a.buffer.presentInFilters(b,"hitType")||
(b=a.buffer.addInFilters(b,"hitType",["page"]));b=a.buffer.addInFilters(b,"hitType",["all"]);var p;if("object"===typeof c&&null!==c){b=a.buffer.addInFilters(b,"permanent",!0);b=a.buffer.get(b,!0);var q,k,z,t;for(p in c)if(c.hasOwnProperty(p)){m=c[p];q={};if(f&&"object"===typeof c[p]){z=k=!1;for(t in c[p])c[p].hasOwnProperty(t)&&("value"===t?k=!0:"options"===t&&"object"===typeof c[p].options&&null!==c[p].options&&(z=!0));k&&z&&(m=c[p].value,q=c[p].options)}b[p]={value:m,options:q}}m=r(b)}else for(p in b=
a.buffer.get(b,!0),m=r(b),b)!b.hasOwnProperty(p)||b[p].options&&b[p].options.permanent||a.buffer.del(p);h&&h(m,g)},g=function(c,f){var b=a.getConfig("secure"),h="";if(c)h=c;else var h="https:"===document.location.protocol,e=(h=b||h)?a.getConfig("logSSL"):a.getConfig("log"),r=a.getConfig("domain"),h=e&&r?e+"."+r:h?a.getConfig("collectDomainSSL"):a.getConfig("collectDomain");e=a.getConfig("baseURL");r=(r=a.getConfig("pixelPath"))||"/";"/"!==r.charAt(0)&&(r="/"+r);var g=a.getConfig("site");if((e||h&&
r)&&g){var p="//";b&&(p="https:"+p);f&&f(null,(e?e:p+h+r)+("?s="+g))}else f&&f({message:"Config error"})},q=function(a,f,b,h,e){g(h,function(h,g){h?e&&e(h):(l=1600-(g.length+27),m(a,f,b,function(a,b){var c=[],h=Echo1200ATInternet.Utils.uuid().num(13);if(a instanceof Array)for(var f=1;f<=a.length;f++)c.push(g+b+"&mh="+f+"-"+a.length+"-"+h+a[f-1]);else c.push(g+b+a);e&&e(null,c)}))})};k.send=function(c,f,b,h,e){q(c,e,f,h,function(c,h){if(c)a.emit("Tracker:Hit:Build:Error",{lvl:"ERROR",msg:c.message,details:{}}),
b&&b();else for(var f=0;f<h.length;f++)k.sendUrl(h[f],b)})};k.sendUrl=function(c,f){var b=function(b,c,h){return function(){return function(e){var g="";if("/"===c.charAt(0))var g=a.getConfig("secure"),m="https:"===document.location.protocol,g=g||m?"https:":"http:";a.emit(b,{lvl:h,details:{hit:g+c,event:e}});f&&f()}}()};if(Echo1200ATInternet.Utils.isOptedOut()&&!a.getConfig("sendHitWhenOptOut"))b("Tracker:Hit:Sent:NoTrack",c,"INFO")();else{var h=new Image;h.onload=b("Tracker:Hit:Sent:Ok",c,"INFO");h.onerror=
b("Tracker:Hit:Sent:Error",c,"ERROR");h.src=c}}},TriggersManager=function(){function a(a,d,m){for(var g=[],q=0;q<a.length;q++)a[q].callback(d,m),a[q].singleUse||g.push(a[q]);return g}function k(a,d,m,g){var q=a.shift();if("*"===q)return d["*"]=d["*"]||[],d["*"].push({callback:m,singleUse:g}),d["*"].length-1;if(0===a.length)return k([q,"*"],d,m,g);d["*"]=d["*"]||[];d[q]=d[q]||{};return k(a,d[q],m,g)}function l(e,d,m,g){var q=d.shift();"*"!==q&&(0===d.length?l(e,[q,"*"],m,g):m[q]&&(m[q]["*"]=a(m[q]["*"],
e,g),l(e,d,m[q],g)))}var d={};this.on=function(a,n,m){m=m||!1;return k(a.split(":"),d,n,m)};this.emit=function(e,n){d["*"]&&(d["*"]=a(d["*"],e,n));l(e,e.split(":"),d,n)}},PluginsManager=function(a){var k={},l={},d=0,e={},n=0,m=function(a){var b=!1;k[a]&&(b=!0);return b},g=this.unload=function(b){m(b)?(k[b]=void 0,a.emit("Tracker:Plugin:Unload:"+b+":Ok",{lvl:"INFO"})):a.emit("Tracker:Plugin:Unload:"+b+":Error",{lvl:"ERROR",msg:"not a known plugin"});return a},q=this.load=function(b,c){"function"===
typeof c?"undefined"===typeof a.getConfig.plgAllowed||0===a.getConfig.plgAllowed.length||-1<a.getConfig.plgAllowed.indexOf(b)?(k[b]=new c(a),l[b]&&m(b)&&(l[b]=!1,d--,m(b+"_ll")&&g(b+"_ll"),0===d&&a.emit("Tracker:Plugin:Lazyload:File:Complete",{lvl:"INFO",msg:"LazyLoading triggers are finished"})),a.emit("Tracker:Plugin:Load:"+b+":Ok",{lvl:"INFO"})):a.emit("Tracker:Plugin:Load:"+b+":Error",{lvl:"ERROR",msg:"Plugin not allowed",details:{}}):a.emit("Tracker:Plugin:Load:"+b+":Error",{lvl:"ERROR",msg:"not a function",
details:{obj:c}});return a},c=this.isLazyloading=function(a){return a?!0===l[a]:0!==d},f=function(a){return!m(a)&&!c(a)&&m(a+"_ll")},b=function(b){l[b]=!0;d++;Echo1200ATInternet.Utils.loadScript({url:a.getConfig("lazyLoadingPath")+b+".js"})},h=function(a){return f(a)?(b(a),!0):!1},s=function(a){e[a]?e[a]++:e[a]=1;n++};this.isExecWaitingLazyloading=function(){return 0!==n};a.exec=this.exec=function(h,g,p,d){var q=null,l=function(a,b,c,h){b=b.split(".");m(a)&&k[a][b[0]]&&(q=1<b.length&&k[a][b[0]][b[1]]?k[a][b[0]][b[1]].apply(k[a],
c):k[a][b[0]].apply(k[a],c));h&&h(q)},t=function(b,c,h,f){s(b);a.onTrigger("Tracker:Plugin:Load:"+b+":Ok",function(){l(b,c,h,function(c){e[b]--;n--;0===n&&a.emit("Tracker:Plugin:Lazyload:Exec:Complete",{lvl:"INFO",msg:"All exec waiting for lazyloading are done"});f&&f(c)})},!0)};f(h)?(t(h,g,p,d),b(h)):c(h)?t(h,g,p,d):l(h,g,p,d)};this.waitForDependencies=function(b,c){var f=function(a){for(var b={mcount:0,plugins:{}},c=0;c<a.length;c++)k.hasOwnProperty(a[c])||(b.mcount++,b.plugins[a[c]]=!0);return b}(b);
if(0===f.mcount)a.emit("Tracker:Plugin:Dependencies:Loaded",{lvl:"INFO",details:{dependencies:b}}),c();else for(var e in f.plugins)f.plugins.hasOwnProperty(e)&&(a.emit("Tracker:Plugin:Dependencies:Error",{lvl:"WARNING",msg:"Missing plugin "+e}),a.onTrigger("Tracker:Plugin:Load:"+e,function(a,b){var h=a.split(":"),e=h[3];"Ok"===h[4]&&(f.plugins[e]=!1,f.mcount--,0===f.mcount&&c())},!0),h(e))};this.init=function(){for(var a in Echo1200ATInternet.Tracker.pluginProtos)Echo1200ATInternet.Tracker.pluginProtos.hasOwnProperty(a)&&
q(a,Echo1200ATInternet.Tracker.pluginProtos[a])}},CallbacksManager=function(a){var k=this,l={},d=function(a){if(a.name){var d=!0;"undefined"!==typeof configuration&&(configuration.include instanceof Array&&-1===Echo1200ATInternet.Utils.arrayIndexOf(configuration.include,a.name)&&(d=!1),configuration.exclude instanceof Array&&-1!==Echo1200ATInternet.Utils.arrayIndexOf(configuration.exclude,a.name)&&(d=!1));if(Echo1200ATInternet.Callbacks&&Echo1200ATInternet.Callbacks.hasOwnProperty(a.name)){var m={};m[a.name]={"function":Echo1200ATInternet.Callbacks[a.name]};
d&&k.load(a.name,m[a.name]["function"]);Echo1200ATInternet.Tracker.callbackProtos[a.name]||(Echo1200ATInternet.Tracker.callbackProtos[a.name]=m[a.name])}}};k.load=function(e,d){"function"===typeof d?(new d(a),a.emit("Tracker:Callback:Load:"+e+":Ok",{lvl:"INFO",details:{obj:d}})):a.emit("Tracker:Callback:Load:"+e+":Error",{lvl:"ERROR",msg:"not a function",details:{obj:d}});return a};k.init=function(){if(a.getConfig("activateCallbacks")){var e=a.getConfig("callbacks");if("undefined"!==typeof e&&e.include instanceof
Array)for(var n=0;n<e.include.length;n++)Echo1200ATInternet.Callbacks&&Echo1200ATInternet.Callbacks.hasOwnProperty(e.include[n])&&(l[e.include[n]]={"function":Echo1200ATInternet.Callbacks[e.include[n]]},Echo1200ATInternet.Tracker.callbackProtos[e.include[n]]||(Echo1200ATInternet.Tracker.callbackProtos[e.include[n]]=l[e.include[n]]));else for(n in Echo1200ATInternet.Callbacks)Echo1200ATInternet.Callbacks.hasOwnProperty(n)&&(l[n]={"function":Echo1200ATInternet.Callbacks[n]},Echo1200ATInternet.Tracker.callbackProtos[n]||(Echo1200ATInternet.Tracker.callbackProtos[n]=l[n]));if("undefined"!==
typeof e&&e.exclude instanceof Array)for(n=0;n<e.exclude.length;n++)l[e.exclude[n]]&&(l[e.exclude[n]]=void 0);for(var m in l)l.hasOwnProperty(m)&&l[m]&&k.load(m,l[m]["function"]);Echo1200ATInternet.Utils.addCallbackEvent(d)}};k.removeCallbackEvent=function(){Echo1200ATInternet.Utils.removeCallbackEvent(d)}},BufferManager=function(a){var k={};this.set=function(a,d,m){m=m||{};m.hitType=m.hitType||["page"];k[a]={value:d,options:m}};var l=function(a,d,m){return(a=window.Echo1200ATInternet.Utils.cloneSimpleObject(a[d]))&&!m?
a.value:a},d=function n(a,g){if(!(a&&g instanceof Array&&a instanceof Array))return[];if(0===a.length)return g;var d=a[0],c,f=[],b=window.Echo1200ATInternet.Utils.cloneSimpleObject(a);b.shift();for(var h=0;h<g.length;h++)if("object"!==typeof d[1])k[g[h]]&&k[g[h]].options[d[0]]===d[1]&&f.push(g[h]);else{c=d[1].length;for(var s=0;s<c;s++)if(k[g[h]]&&k[g[h]].options[d[0]]instanceof Array&&0<=window.Echo1200ATInternet.Utils.arrayIndexOf(k[g[h]].options[d[0]],d[1][s])){f.push(g[h]);break}}return n(b,f)};this.get=function(a,
m){var g={};if("string"===typeof a)g=l(k,a,m);else for(var q=d(a,window.Echo1200ATInternet.Utils.getObjectKeys(k)),c=0;c<q.length;c++)g[q[c]]=l(k,q[c],m);return g};this.presentInFilters=function m(a,d){return a&&0!==a.length?a[0][0]===d?!0:m(a.slice(1),d):!1};this.addInFilters=function g(a,c,f,b){if(!a||0===a.length)return b?[]:[[c,f]];var h=a[0][0],d=a[0][1];h===c&&(d instanceof Array&&-1===window.Echo1200ATInternet.Utils.arrayIndexOf(d,f[0])&&d.push(f[0]),b=!0);return[[h,d]].concat(g(a.slice(1),c,f,b))};this.del=
function(a){k[a]=void 0};this.clear=function(){k={}}},Tag=function(a,k,l){k=k||{};var d=this;d.version="5.17.1";var e=window.Echo1200ATInternet.Utils.cloneSimpleObject(k);d.triggers=new TriggersManager(d);d.emit=d.triggers.emit;d.onTrigger=d.triggers.on;var n=window.Echo1200ATInternet.Utils.cloneSimpleObject(dfltGlobalCfg)||{},m;for(m in a)a.hasOwnProperty(m)&&(n[m]=a[m]);d.getConfig=function(a){return n[a]};d.setConfig=function(a,e,c){void 0!==n[a]&&c||(d.emit("Tracker:Config:Set:"+a,{lvl:"INFO",details:{bef:n[a],
aft:e}}),n[a]=e)};d.configPlugin=function(a,e,c){n[a]=n[a]||{};for(var f in e)e.hasOwnProperty(f)&&void 0===n[a][f]&&(n[a][f]=e[f]);c&&(c(n[a]),d.onTrigger("Tracker:Config:Set:"+a,function(a,h){c(h.details.aft)}));return n[a]};d.getContext=function(a){return e[a]};d.setContext=function(a,m){d.emit("Tracker:Context:Set:"+a,{lvl:"INFO",details:{bef:e[a],aft:m}});e[a]=m};d.delContext=function(a,m){d.emit("Tracker:Context:Deleted:"+a+":"+m,{lvl:"INFO",details:{key1:a,key2:m}});if(a)e.hasOwnProperty(a)&&
(m?e[a]&&e[a].hasOwnProperty(m)&&(e[a][m]=void 0):e[a]=void 0);else if(m)for(var c in e)e.hasOwnProperty(c)&&e[c]&&e[c].hasOwnProperty(m)&&(e[c][m]=void 0)};d.plugins=new PluginsManager(d);d.buffer=new BufferManager(d);d.setParam=d.buffer.set;d.getParams=function(a){return d.buffer.get(a,!1)};d.getParam=d.buffer.get;d.delParam=d.buffer.del;d.builder=new BuildManager(d);d.sendHit=d.builder.send;d.sendUrl=d.builder.sendUrl;d.callbacks=new CallbacksManager(d);d.setParam("ts",function(){return(new Date).getTime()},
{permanent:!0,hitType:["all"]});(d.getConfig("disableCookie")||d.getConfig("disableStorage"))&&d.setParam("idclient","Consent-NO",{permanent:!0,hitType:["all"]});d.getConfig("medium")&&d.setParam("medium",d.getConfig("medium"),{permanent:!0,hitType:["all"]});d.plugins.init();d.callbacks.init();Echo1200ATInternet.Tracker.instances.push(d);d.emit("Tracker:Ready",{lvl:"INFO",msg:"Tracker initialized",details:{tracker:d,args:{config:a,context:k,callback:l}}});l&&l(d)};Echo1200ATInternet.Tracker.Tag=Tag;
Echo1200ATInternet.Tracker.instances=[];Echo1200ATInternet.Tracker.pluginProtos={};Echo1200ATInternet.Tracker.addPlugin=function(a,k){k=k||Echo1200ATInternet.Tracker.Plugins[a];if(!Echo1200ATInternet.Tracker.pluginProtos[a]){Echo1200ATInternet.Tracker.pluginProtos[a]=k;for(var l=0;l<Echo1200ATInternet.Tracker.instances.length;l++)Echo1200ATInternet.Tracker.instances[l].plugins.load(a,k)}};Echo1200ATInternet.Tracker.delPlugin=function(a){if(Echo1200ATInternet.Tracker.pluginProtos[a]){Echo1200ATInternet.Tracker.pluginProtos[a]=void 0;for(var k=0;k<Echo1200ATInternet.Tracker.instances.length;k++)Echo1200ATInternet.Tracker.instances[k].plugins.unload(a)}};
Echo1200ATInternet.Tracker.callbackProtos={};
}).call(window);;(function(){var dfltPluginCfg={"lifetime":30,"lastPersistence":true,"listEventsForExec":[],"domainAttribution":true,"info":true};var dfltGlobalCfg={"visitLifetime":30,"redirectionLifetime":30};window.Echo1200ATInternet.Tracker.Plugins.Campaigns=function(a){a.setConfig("visitLifetime",dfltGlobalCfg.visitLifetime,!0);a.setConfig("redirectionLifetime",dfltGlobalCfg.redirectionLifetime,!0);var k={},l,d;a.configPlugin("Campaigns",dfltPluginCfg||{},function(a){k=a});var e,n,m,g,q,c,f,b,h,s,r,w,p,y=function(){var b=function(a){var b="";a&&(b=isNaN(a)&&-1===a.search(/\[(.*?)\]/g)?"["+a+"]":a);return b},c=function(a){for(;"-"===a.charAt(a.length-1);)a=a.substring(0,a.length-1);return a};this.SponsoredLinks=
function(){var h={google:"goo",yahoo:"ysm",miva:"miv",orange:"wan",msn:"msn",mirago:"mir",sklik:"skl",adfox:"adf",etarget:"etg",yandex:"yan",ebay:"eba",searchalliance:"sal",bing:"bin",naver:"nav",baidu:"bdu",qwant:"qwt"},f={search:"s",content:"c"};this.at_medium="sl";this.at_term=this.at_network=this.at_variant=this.at_creation=this.at_platform=this.at_campaign="";this.format=function(){var a="sec",e=b(this.at_campaign),g=h[this.at_platform]||"",d=b(this.at_creation),p=b(this.at_variant),r=f[this.at_network]||
"",m=b(this.at_term);return c(a+("-"+e+"-"+g+"-"+d+"-"+p+"-"+r+"-"+m))};this.setProperties=function(b){this.at_campaign=a.utils.getQueryStringValue("at_campaign",b)||"";this.at_platform=a.utils.getQueryStringValue("at_platform",b)||"";this.at_creation=a.utils.getQueryStringValue("at_creation",b)||"";this.at_variant=a.utils.getQueryStringValue("at_variant",b)||"";this.at_network=a.utils.getQueryStringValue("at_network",b)||"";this.at_term=a.utils.getQueryStringValue("at_term",b)||""}};this.Email=function(){var h=
{acquisition:"erec",retention:"epr",promotion:"es"};this.at_medium="email";this.at_send_time=this.at_recipient_list=this.at_recipient_id=this.at_link=this.at_send_date=this.at_creation=this.at_campaign=this.at_emailtype="";this.format=function(){var a=h[this.at_emailtype]||h.promotion,f=b(this.at_campaign),e=b(this.at_creation),g=this.at_send_date,d=b(this.at_link),a=a+("-"+f+"-"+e+"-"+g+"-"+d+"-"+(this.at_recipient_id+(this.at_recipient_list?"@"+this.at_recipient_list:""))+"-"+this.at_send_time);
return c(a)};this.setProperties=function(b){this.at_emailtype=a.utils.getQueryStringValue("at_emailtype",b)||"";this.at_campaign=a.utils.getQueryStringValue("at_campaign",b)||"";this.at_creation=a.utils.getQueryStringValue("at_creation",b)||"";this.at_send_date=a.utils.getQueryStringValue("at_send_date",b)||"";this.at_link=a.utils.getQueryStringValue("at_link",b)||"";this.at_recipient_id=a.utils.getQueryStringValue("at_recipient_id",b)||"";this.at_recipient_list=a.utils.getQueryStringValue("at_recipient_list",
b)||"";this.at_send_time=a.utils.getQueryStringValue("at_send_time",b)||""}};this.Affiliate=function(){this.at_medium="affiliate";this.at_variant=this.at_creation=this.at_format=this.at_identifier=this.at_type=this.at_campaign="";this.format=function(){var a="al",h=b(this.at_campaign),f=b(this.at_type),e=b(this.at_identifier),g=b(this.at_format),d=b(this.at_creation),p=b(this.at_variant);return c(a+("-"+h+"-"+f+"-"+e+"-"+g+"-"+d+"-"+p))};this.setProperties=function(b){this.at_campaign=a.utils.getQueryStringValue("at_campaign",
b)||"";this.at_type=a.utils.getQueryStringValue("at_type",b)||"";this.at_identifier=a.utils.getQueryStringValue("at_identifier",b)||"";this.at_format=a.utils.getQueryStringValue("at_format",b)||"";this.at_creation=a.utils.getQueryStringValue("at_creation",b)||"";this.at_variant=a.utils.getQueryStringValue("at_variant",b)||""}};this.Display=function(){this.at_medium="display";this.at_detail_placement=this.at_general_placement=this.at_channel=this.at_format=this.at_variant=this.at_creation=this.at_campaign=
"";this.format=function(){var a="ad",h=b(this.at_campaign),f=b(this.at_creation),e=b(this.at_variant),g=b(this.at_format),d=b(this.at_channel),p=b(this.at_general_placement),r=b(this.at_detail_placement);return c(a+("-"+h+"-"+f+"-"+e+"-"+g+"-"+d+"-"+p+"-"+r))};this.setProperties=function(b){this.at_campaign=a.utils.getQueryStringValue("at_campaign",b)||"";this.at_creation=a.utils.getQueryStringValue("at_creation",b)||"";this.at_variant=a.utils.getQueryStringValue("at_variant",b)||"";this.at_format=
a.utils.getQueryStringValue("at_format",b)||"";this.at_channel=a.utils.getQueryStringValue("at_channel",b)||"";this.at_general_placement=a.utils.getQueryStringValue("at_general_placement",b)||"";this.at_detail_placement=a.utils.getQueryStringValue("at_detail_placement",b)||""}};this.Custom=function(){this.at_custom4=this.at_custom3=this.at_custom2=this.at_custom1=this.at_campaign=this.at_medium="";this.format=function(){var a="";/\d+$/.test(this.at_medium)&&(a=/\d+$/.exec(this.at_medium)[0]);var a=
"cs"+a,h=b(this.at_campaign),f=b(this.at_custom1),e=b(this.at_custom2),g=b(this.at_custom3),d=b(this.at_custom4);return c(a+("-"+h+"-"+f+"-"+e+"-"+g+"-"+d))};this.setProperties=function(b){this.at_medium=a.utils.getQueryStringValue("at_medium",b)||"";this.at_campaign=a.utils.getQueryStringValue("at_campaign",b)||"";this.at_custom1=a.utils.getQueryStringValue("at_custom1",b)||"";this.at_custom2=a.utils.getQueryStringValue("at_custom2",b)||"";this.at_custom3=a.utils.getQueryStringValue("at_custom3",
b)||"";this.at_custom4=a.utils.getQueryStringValue("at_custom4",b)||""}};this.medium={sl:this.SponsoredLinks,email:this.Email,affiliate:this.Affiliate,display:this.Display}},v=function(b,c){var h=a.storage[d](b);if(null!==h)return"object"===typeof h&&!(h instanceof Array);a.storage[l](b,{},c);return!0},z=function(b,c){var h=a.getContext("campaigns")||{};h[b]=c;a.setContext("campaigns",h)};(function(){a.plugins.waitForDependencies(["Storage","Utils"],function(){l="set"+(k.domainAttribution?"":"Private");
d="get"+(k.domainAttribution?"":"Private");e=a.storage[d](["atredir","gopc"]);n=a.storage[d](["atredir","gopc_err"]);m=a.storage[d](["atredir","camp"]);a.storage.del(["atredir","gopc"]);a.storage.del(["atredir","gopc_err"]);a.storage.del(["atredir","camp"]);g=a.storage[d](["atsession","histo_camp"]);q=a.storage[d](["atreman","camp"]);c=a.storage[d](["atreman","date"]);var t=a.utils.getLocation(),u=a.utils.getQueryStringValue("at_medium",t);if(u){var B=new y,u="function"===typeof B.medium[u]?new B.medium[u]:
new B.Custom;u.setProperties(t);f=u.format()}else f=a.utils.getQueryStringValue("xtor",t);b=a.utils.getQueryStringValue("xtdt",t);h=a.utils.getQueryStringValue("xts",t);s=a.getContext("forcedCampaign");r=!!a.getConfig("redirect");w=!!(f&&b&&h);p=!1;w&&(t=(new Date).getTime()/6E4,p=!r&&h!==a.getConfig("site")||0>t-b||t-b>=a.getConfig("visitLifetime"));t=s||m||f;r&&t&&v("atredir",{path:"/",end:a.getConfig("redirectionLifetime")})&&(a.storage[l](["atredir","camp"],t),u=t=!1,s||(m?(t=e,u=n):(t=w,u=p)),
a.storage[l](["atredir","gopc"],t),a.storage[l](["atredir","gopc_err"],u));!r&&q&&(z("xtor",q),t=(new Date).getTime()/36E5,t=Math.floor(t-c),z("roinbh",0<=t?t:0));r||(t=null,t=m?e?s||t:s||m:w?s:s||f||t,g&&g instanceof Array&&-1<g.indexOf(t)&&(t=null),t&&z("xto",t));if(!r&&!s){var A;m?n&&(A=m):p&&(A=f);A&&z("pgt",A)}if(!r&&(A=m?s||m:s||f||null)&&!(!s&&!m&&w&&p||!s&&m&&e&&n)){if((!g||g instanceof Array&&0>g.indexOf(A))&&v("atsession",{path:"/",session:60*a.getConfig("visitLifetime")}))a.storage[l](["atsession",
"histo_camp"],g&&g.push(A)?g:[A]);q&&!k.lastPersistence||!v("atreman",{path:"/",session:86400*k.lifetime})||(a.storage[l](["atreman","camp"],A),a.storage[l](["atreman","date"],(new Date).getTime()/36E5))}a.emit("Campaigns:process:done",{lvl:"INFO"})})})()};window.Echo1200ATInternet.Tracker.addPlugin("Campaigns");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.Echo1200ATInternet.Tracker.Plugins.Clicks=function(a){var k=function(a){var d="";switch(a){case "exit":d="S";break;case "download":d="T";break;case "action":d="A";break;case "navigation":d="N"}return d},l=function(e){var d=e.name;a.exec("Utils","manageChapters",[e,"chapter",3],function(a){d=a+(d?d:"")});return d},d=function(e){var d={p:l(e),s2:e.level2||"",click:k(e.type)||""},m=["click"],g=a.getContext("page")||{};d.pclick=l(g);d.s2click=g.level2||"";var g=e.customObject,q=!1;g&&(q=!0,g=a.processTagObject("stc",
m,g),d.stc={value:Echo1200ATInternet.Utils.jsonSerialize(g),options:{hitType:m,encode:!0,separator:",",truncate:!0}});a.sendHit(d,[["hitType",m]],e.callback,null,q)};a.click={};a.clickListener=this.clickListener={};a.click.send=this.send=function(e){var k=!0,m=null;e&&e.hasOwnProperty("event")&&(m=e.event||window.event);!Echo1200ATInternet.Utils.isTabOpeningAction(m)&&e.elem&&(k=a.techClicks.manageClick(e.elem,m));d(e);return k};a.clickListener.send=this.clickListener.send=function(e){if(e.elem){var k="click";a.plugins.exec("TechClicks",
"isFormSubmit",[e.elem],function(a){k=a?"submit":"click"});Echo1200ATInternet.Utils.addEvtListener(e.elem,k,function(m){Echo1200ATInternet.Utils.isTabOpeningAction(m)||a.techClicks.manageClick(e.elem,m);d(e)})}};a.click.set=this.set=function(e){a.dispatchSubscribe("click");a.setContext("click",{name:l(e),level2:e.level2||"",customObject:e.customObject});a.setParam("click",k(e.type)||"",{hitType:["click"]})};a.click.onDispatch=this.onDispatch=function(e){var d=["click"],m=a.getContext("click")||{},g=a.getContext("page")||
{};a.setParam("pclick",l(g),{hitType:d});a.setParam("s2click",g.level2||"",{hitType:d});a.setParam("p",m.name,{hitType:d});a.setParam("s2",m.level2,{hitType:d});(m=m.customObject)?a.processContextObjectAndSendHit("stc",{hitType:d,encode:!0,separator:",",truncate:!0},m,e):a.manageSend(function(){a.sendHit(null,[["hitType",d]],e)});a.setContext("click",void 0)}};window.Echo1200ATInternet.Tracker.addPlugin("Clicks");
}).call(window);;(function(){var dfltPluginCfg={"clientSideMode":"always","userIdCookieDuration":397,"userIdExpirationMode":"relative","optOut":"OPT-OUT","userIdStorageName":"atuserid","optOutStorageName":"atoptedout","info":true};var dfltGlobalCfg={};window.Echo1200ATInternet.Tracker.Plugins.ClientSideUserId=function(a){var k={},l=void 0,d=null,e=!1,n=!1,m=!1,g="",q="",c=!1,f=!1,b=-1;a.configPlugin("ClientSideUserId",dfltPluginCfg||{},function(a){k=a});var h=function(){if("relative"===k.userIdExpirationMode||"fixed"===k.userIdExpirationMode&&null===d||c){var b=new Date;b.setTime(b.getTime()+864E5*k.userIdCookieDuration);a.storage.set(q,g,{end:b,path:"/"},f);b=a.storage.get(q,!0);Echo1200ATInternet.Utils.consent&&!c&&g!==b&&a.setParam("idclient",g+"-NO",{multihit:!0,
permanent:!0,hitType:["all"]})}},s=function(){a.setParam("idclient",g,{multihit:!0,permanent:!0,hitType:["all"]});h()},r=function(){l=a.getContext("userIdentifier");d=a.storage.get("atuserid");var b=!1;if("required"===k.clientSideMode){var h="";window.navigator&&(h=window.navigator.userAgent);if(/Safari/.test(h)&&!/Chrome/.test(h)||/iPhone|iPod|iPad/.test(h))b=!0}else"always"===k.clientSideMode&&(b=!0);e=b;b=!1;h=Echo1200ATInternet.Utils.optedOut;!1===h&&(a.storage.del("atoptedout"),a.getParam("idclient")===
k.optOut&&a.delParam("idclient"));var r=a.storage.get("atoptedout",!0);if(!0===h||r===k.optOut)b=!0;b&&(Echo1200ATInternet.Utils.optedOut=!0);n=b;m="undefined"!==typeof l;if(e||n||m)q=k.userIdStorageName,f=c=!1,n?(g=k.optOut,q=k.optOutStorageName,f=c=!0):a.getConfig("disableCookie")||a.getConfig("disableStorage")?(g=a.getParam("idclient"),c=!0):m?(g=l,c=!0):g=null!==d?d:Echo1200ATInternet.Utils.uuid().v4(),s()},w=function(a){a&&(a=a.detail)&&"clientsideuserid"===a.name&&a.id===b&&r()};(function(){a.plugins.waitForDependencies(["Storage"],
function(){var a=Echo1200ATInternet.Utils.uuid();b=parseInt(a.num(8));Echo1200ATInternet.Utils.removeOptOutEvent(w);Echo1200ATInternet.Utils.addOptOutEvent(b,w);r()})})();a.clientSideUserId={};a.clientSideUserId.set=function(a){n||(g=a,c=!0,q=k.userIdStorageName,f=!1,s())};a.clientSideUserId.store=function(){f=c=!0;h()};a.clientSideUserId.get=function(){return g}};window.Echo1200ATInternet.Tracker.addPlugin("ClientSideUserId");
}).call(window);;(function(){var dfltPluginCfg={"domainAttribution":true,"info":true};var dfltGlobalCfg={"redirectionLifetime":30};window.Echo1200ATInternet.Tracker.Plugins.ContextVariables=function(a){var k="",l=null,d,e="",n="",m={};a.configPlugin("ContextVariables",dfltPluginCfg||{},function(a){m=a});a.setConfig("redirectionLifetime",dfltGlobalCfg.redirectionLifetime,!0);var g=function(b,c,f){var e=null;a.plugins.exec(b,c,f,function(a){e=a});return e},q=function(a,b){return g("Utils",a,b)},c=function(b,c){var f=null;a.plugins.exec("Storage",b,c,function(a){f=a});return f},f=function(){a.setParam("hl",function(){var a=new Date;return a.getHours()+
"x"+a.getMinutes()+"x"+a.getSeconds()},{permanent:!0,hitType:["all"]})},b=function(a){(a=d?d:"acc_dir"===k?"":null!==k?k:"acc_dir"===l?"":l?l:a?a.referrer:"")&&(a=a.replace(/[<>]/g,"").substring(0,1600).replace(/&/g,"$"));return a};a.plugins.waitForDependencies(["Storage","Utils"],function(){e="set"+(m.domainAttribution?"":"Private");n="get"+(m.domainAttribution?"":"Private");var h=q("getLocation",[]);k=q("getQueryStringValue",["xtref",h]);void 0===k&&(k="");d=a.getContext("forcedReferer");if(a.getConfig("redirect")){var h=
q("getDocumentLevel",[]),h=d?d:null!==k?k:h?h.referrer:"acc_dir",g;if(g=h){g={path:"/",end:a.getConfig("redirectionLifetime")};var r=c(n,["atredir"]);null!==r?g="object"===typeof r&&!(r instanceof Array):(c(e,["atredir",{},g]),g=!0)}g&&c(e,[["atredir","ref"],h])}else{l=c(n,[["atredir","ref"]]);c("del",[["atredir","ref"]]);a.setParam("vtag",a.version,{permanent:!0,hitType:["all"]});a.setParam("ptag","js",{permanent:!0,hitType:["all"]});h="";try{h+=window.screen.width+"x"+window.screen.height+"x"+window.screen.pixelDepth+
"x"+window.screen.colorDepth}catch(w){}a.setParam("r",h,{permanent:!0,hitType:["all"]});h="";window.innerWidth?h+=window.innerWidth+"x"+window.innerHeight:document.body&&document.body.offsetWidth&&(h+=document.body.offsetWidth+"x"+document.body.offsetHeight);a.setParam("re",h,{permanent:!0,hitType:["all"]});f();window.navigator&&a.setParam("lng",window.navigator.language||window.navigator.userLanguage,{permanent:!0,hitType:["all"]});h=Echo1200ATInternet.Utils.uuid().num(13);a.setParam("idp",h,{permanent:!0,
hitType:["page","clickzone"]});window.navigator&&a.setParam("jv",window.navigator.javaEnabled()?"1":"0",{hitType:["page"]});h=q("getDocumentLevel",[]);a.setParam("ref",b(h),{permanent:!0,last:!0,hitType:["page"]})}a.emit("ContextVariables:Ready",{lvl:"INFO"})})};window.Echo1200ATInternet.Tracker.addPlugin("ContextVariables");
}).call(window);;(function(){var dfltPluginCfg={"storageCapacity":1,"timeout":500,"info":true};var dfltGlobalCfg={};window.Echo1200ATInternet.Tracker.Plugins.Offline=function(a){var k={};a.configPlugin("Offline",dfltPluginCfg||{},function(a){k=a});var l=function(){var a=localStorage.getItem("ATOffline"),f={hits:[],length:0};if(a){var b=Echo1200ATInternet.Utils.jsonParse(a)||{hits:[]};f.hits=b.hits;f.length=a.length}return f},d=function(a){try{localStorage.setItem("ATOffline",Echo1200ATInternet.Utils.jsonSerialize(a))}catch(f){}},e=function(){return l().hits},n=function(a){if(a){a=a.split(/&ref=\.*/i);var f="&cn=offline&olt="+String(Math.floor((new Date).getTime()/
1E3));a=a[0]+f+"&ref="+(a[1]||"")}return a},m=function(a){var f=l(),b=a.length,e=!0;if(4*((f.length||11)+b)>1048576*k.storageCapacity){var e=!1,g=f.hits.shift();if("undefined"!==typeof g)for(var e=!0,r=g.length;r<b;)if(g=f.hits.shift(),"undefined"!==typeof g)r+=g.length;else{e=!1;break}}e&&(f.hits.push(a),d({hits:f.hits}))},g=function(c,f){if(window.navigator&&window.navigator.onLine){var b=e();if(0<b.length){var h=b.shift();d({hits:b});a.onTrigger("Tracker:Hit:Sent:Ok",function(){g(c,f)},!0);a.onTrigger("Tracker:Hit:Sent:Error",
function(){g(c,f)},!0);a.sendUrl(h)}else if(c){var l=null;a.plugins.exec("Utils","getQueryStringValue",["a",c],function(a){l=a});l?setTimeout(function(){a.sendUrl(c,f)},k.timeout):a.sendUrl(c,f)}}else c&&(m(n(c)),f&&f())},q=function(c){a.builder.sendUrl=function(a,b){c||window.navigator&&!window.navigator.onLine?(m(n(a)),b&&b()):g(a,b)}};a.offline={};a.offline.getLength=function(){return 4*l().length};a.offline.remove=function(){d({hits:[]})};a.offline.get=e;a.offline.send=function(){g(null,null)};
a.plugins.waitForDependencies(["Utils"],function(){var c=Echo1200ATInternet.Utils.isLocalStorageAvailable(),f;window.navigator&&(f=window.navigator.onLine);c&&"undefined"!==typeof f&&("required"===k.storageMode?q(!1):"always"===k.storageMode&&q(!0));a.emit("Offline:Ready",{lvl:"INFO",details:{isLocalStorageAvailable:c,storageMode:k.storageMode,isOnline:f}})})};window.Echo1200ATInternet.Tracker.addPlugin("Offline");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.Echo1200ATInternet.Tracker.Plugins.OnSiteAds=function(a){var k="",l=function(c){var f=c.name;a.exec("Utils","manageChapters",[c,"chapter",3],function(a){f=a+(f?f:"")});return f},d=function(a,f){return a[f]?a[f]:""},e=function(a,f){var b=d(a,f);if(b){var e=d(a,"prefix");if(b.campaignId){var e=e||"PUB",g=d(b,"campaignId"),k=d(b,"creation"),m=d(b,"variant"),p=d(b,"format"),l=d(b,"generalPlacement"),n=d(b,"detailedPlacement"),q=d(b,"advertiserId"),b=d(b,"url");return e+"-"+g+"-"+k+"-"+m+"-"+p+"-"+l+"-"+
n+"-"+q+"-"+b}if(b.adId)return e=e||"INT",g=d(b,"adId"),k=d(b,"format"),b=d(b,"productId"),e+"-"+g+"-"+k+"||"+b}return""},n=function(c){var f=["onSiteAdsImpression"],b={};b.ati={value:e(c,"impression"),options:{hitType:f,truncate:!0}};b.type="AT";Echo1200ATInternet.Utils.isPreview()&&a.getConfig("preview")&&(b.pvw=1);var d=c.customObject;d&&(d=a.processTagObject("stc",f,d),b.stc={value:Echo1200ATInternet.Utils.jsonSerialize(d),options:{hitType:f,encode:!0,separator:",",truncate:!0}});a.manageSend(function(){a.sendHit(b,
[["hitType",f]],c.callback,null,!0)})},m=function(c,f){var b=a.buffer.get("ati",!0)||{};b.value="string"===typeof b.value?[b.value]:b.value||[];b.options=b.options||{truncate:!0,hitType:[f,"page"]};b.value.push(c);a.buffer.set("ati",b.value,b.options)},g=function(c,f){c.click?a.setParam("atc",e(c,"click"),{truncate:!0,hitType:[f,"page"]}):c.impression&&a.setParam("ati",e(c,"impression"),{truncate:!0,hitType:[f,"page"]});if(c.customObject){a.setContext("onsiteads",{customObject:c.customObject});var b=
a.getContext("page")||{};b.customObject=Echo1200ATInternet.Utils.completeFstLevelObj(b.customObject,c.customObject,!1);a.setContext("page",b)}a.dispatchSubscribe("onSiteAds")};a.selfPromotion=this.selfPromotion={};a.publisher=this.publisher={};a.publisher.set=this.publisher.set=function(a){g(a,"publisher")};a.selfPromotion.set=this.selfPromotion.set=function(a){g(a,"selfPromotion")};a.publisher.add=this.publisher.add=function(c){m(e(c,"impression"),"publisher");a.dispatchSubscribe("onSiteAds")};a.selfPromotion.add=
this.selfPromotion.add=function(c){m(e(c,"impression"),"selfPromotion");a.dispatchSubscribe("onSiteAds")};var q=this.advertEvent=function(c){var f=!0,b=null;c&&c.hasOwnProperty("event")&&(b=c.event||window.event);!Echo1200ATInternet.Utils.isTabOpeningAction(b)&&c.elem&&(f=a.techClicks.manageClick(c.elem,b));if(c.click){var b=["onSiteAdsClick"],d=a.getContext("page")||{},g={};g.atc={value:e(c,"click"),options:{truncate:!0}};g.type="AT";g.patc=l(d);g.s2atc=d.level2||"";if(d=c.customObject)d=a.processTagObject("stc",
b,d),g.stc={value:Echo1200ATInternet.Utils.jsonSerialize(d),options:{hitType:b,encode:!0,separator:",",truncate:!0}};a.sendHit(g,[["hitType",b]],c.callback,null,!0)}else c.impression&&n(c);return f};a.publisher.send=this.publisher.send=function(a){return q(a)};a.selfPromotion.send=this.selfPromotion.send=function(a){return q(a)};a.onSiteAds={};a.onSiteAds.onDispatch=this.onDispatch=function(c){if(!a.dispatchSubscribed("page")){a.setParam("type","AT",{hitType:["publisher","selfPromotion"]});var f=a.getContext("page")||
{};a.getParam("atc")&&(a.setParam("patc",l(f),{hitType:["publisher","selfPromotion"]}),a.setParam("s2atc",f.level2||"",{hitType:["publisher","selfPromotion"]}));Echo1200ATInternet.Utils.isPreview()&&a.getConfig("preview")&&a.setParam("pvw",1);var b=["publisher","selfPromotion"];(f=(a.getContext("onsiteads")||{}).customObject)?a.processContextObjectAndSendHit("stc",{hitType:b,encode:!0,separator:",",truncate:!0},f,c):a.manageSend(function(){a.sendHit(null,[["hitType",b]],c)})}};a.plugins.waitForDependencies(["Utils",
"TechClicks"],function(){k=document.location.href;a.plugins.exec("Utils","getQueryStringValue",["xtatc",k],function(c){c&&a.setParam("atc",c,{hitType:["publisher","selfPromotion","page"]})});a.emit("OnSiteAds:Ready",{lvl:"INFO",details:{href:k}})})};window.Echo1200ATInternet.Tracker.addPlugin("OnSiteAds");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.Echo1200ATInternet.Tracker.Plugins.Page=function(a){var k=["pageId","chapterLabel","update"],l=["pid","pchap","pidt"],d=["page","site"],e=["f","x"],n=function(b){var c=b.name;a.exec("Utils","manageChapters",[b,"chapter",3],function(a){c=a+(c?c:"")});return c},m=function(a,b,c){b?a=b:a||"undefined"===typeof c||(a=c);return a},g=function(a,b,c){b.hasOwnProperty(c)&&(a[c]=m(a[c],b[c]))},q=function(b,c,f){if(c)for(var h=0;h<d.length;h++)if(c.hasOwnProperty(d[h])&&c[d[h]])for(var g in c[d[h]])c[d[h]].hasOwnProperty(g)&&
(f?b[e[h]+g]=c[d[h]][g]:a.setParam(e[h]+g,c[d[h]][g]))},c=function(b,c,f){if(c){a.exec("Utils","manageChapters",[c,"chapter",3],function(a){a&&(c.chapterLabel=a.replace(/::$/gi,""))});for(var d=0;d<l.length;d++)c.hasOwnProperty(k[d])&&(f?b[l[d]]=c[k[d]]:a.setParam(l[d],c[k[d]]))}},f=function(b,c,f){if(c&&c.keywords instanceof Array){var d=c.keywords.length;if(0<d){for(var e="",h=0;h<d;h++)e+="["+c.keywords[h]+"]"+(h<d-1?"|":"");f?b.tag=e:a.setParam("tag",e)}}},b=function(b,c,f){if(c){var d,e=function(a){return a?
a:"0"};d=""+(e(c.category1)+"-");d+=e(c.category2)+"-";d+=e(c.category3);f?b.ptype=d:a.setParam("ptype",d)}},h=function(b,c,f){if(c)for(var d in c)c.hasOwnProperty(d)&&"undefined"!==typeof c[d]&&(f?b[d]=c[d]:a.setParam(d,c[d]))};a.customVars=this.customVars={};a.customVars.set=this.customVars.set=function(b){var c=a.getContext("page")||{},f=c.customVars;if(f){if(b)for(var d in b)b.hasOwnProperty(d)&&(f[d]=Echo1200ATInternet.Utils.completeFstLevelObj(f[d],b[d],!0))}else f=b;c.customVars=f;a.setContext("page",
c)};a.dynamicLabel=this.dynamicLabel={};a.dynamicLabel.set=this.dynamicLabel.set=function(b){var c=a.getContext("page")||{};c.dynamicLabel=Echo1200ATInternet.Utils.completeFstLevelObj(c.dynamicLabel,b,!0);a.setContext("page",c)};a.tags=this.tags={};a.tags.set=this.tags.set=function(b){var c=a.getContext("page")||{};c.tags=Echo1200ATInternet.Utils.completeFstLevelObj(c.tags,b,!0);a.setContext("page",c)};a.customTreeStructure=this.customTreeStructure={};a.customTreeStructure.set=this.customTreeStructure.set=function(b){var c=
a.getContext("page")||{};c.customTreeStructure=Echo1200ATInternet.Utils.completeFstLevelObj(c.customTreeStructure,b,!0);a.setContext("page",c)};a.page={};a.page.reset=this.reset=function(){a.setContext("page",void 0)};a.page.set=this.set=function(b){a.dispatchSubscribe("page");var c=a.getContext("page")||{};c.name=m(c.name,b.name,"");c.level2=m(c.level2,b.level2,"");g(c,b,"chapter1");g(c,b,"chapter2");g(c,b,"chapter3");c.customObject=Echo1200ATInternet.Utils.completeFstLevelObj(c.customObject,b.customObject,!0);
a.setContext("page",c)};a.page.send=this.send=function(d){var e=!0,k={p:n(d),s2:d.level2||""},p=d.customObject,l=!1;if(p){var l=!0,v=["page"],p=a.processTagObject("stc",v,p);k.stc={value:Echo1200ATInternet.Utils.jsonSerialize(p),options:{hitType:v,encode:!0,separator:",",truncate:!0}}}p=a.getContext("page")||{};p.vrn&&(k.vrn=p.vrn,p.vrn=void 0,a.setContext("page",p));v=a.getContext("InternalSearch")||{};"undefined"!==typeof v.keyword&&(k.mc=Echo1200ATInternet.Utils.cloneSimpleObject(v.keyword),"undefined"!==typeof v.resultPageNumber&&
(k.np=Echo1200ATInternet.Utils.cloneSimpleObject(v.resultPageNumber)),a.setContext("InternalSearch",void 0));Echo1200ATInternet.Utils.isPreview()&&a.getConfig("preview")&&(k.pvw=1);q(k,d.customVars,!0);c(k,d.dynamicLabel,!0);f(k,d.tags,!0);b(k,d.customTreeStructure,!0);v=a.getContext("campaigns")||{};h(k,v,!0);a.setContext("campaigns",void 0);v=null;d&&d.hasOwnProperty("event")&&(v=d.event||window.event);!Echo1200ATInternet.Utils.isTabOpeningAction(v)&&d.elem&&(e=a.techClicks.manageClick(d.elem,v));a.manageSend(function(){a.sendHit(k,
null,d.callback,null,l)});p.name=m(p.name,d.name,"");p.level2=m(p.level2,d.level2,"");g(p,d,"chapter1");g(p,d,"chapter2");g(p,d,"chapter3");a.setContext("page",p);return e};a.page.onDispatch=this.onDispatch=function(d){var e=a.getContext("page")||{},g=a.getContext("InternalSearch")||{};a.setParam("p",n(e));a.setParam("s2",e.level2||"");e.vrn&&(a.setParam("vrn",e.vrn),e.vrn=void 0,a.setContext("page",e));"undefined"!==typeof g.keyword&&(a.setParam("mc",Echo1200ATInternet.Utils.cloneSimpleObject(g.keyword)),
"undefined"!==typeof g.resultPageNumber&&a.setParam("np",Echo1200ATInternet.Utils.cloneSimpleObject(g.resultPageNumber)),a.setContext("InternalSearch",void 0));Echo1200ATInternet.Utils.isPreview()&&a.getConfig("preview")&&a.setParam("pvw",1);q(null,e.customVars,!1);c(null,e.dynamicLabel,!1);f(null,e.tags,!1);b(null,e.customTreeStructure,!1);g=a.getContext("campaigns")||{};h(null,g,!1);a.setContext("campaigns",void 0);var k=["page"];(e=e.customObject)?a.processContextObjectAndSendHit("stc",{hitType:k,encode:!0,separator:",",
truncate:!0},e,d):a.manageSend(function(){a.sendHit(null,[["hitType",k]],d)})}};window.Echo1200ATInternet.Tracker.addPlugin("Page");
}).call(window);;(function(){var dfltPluginCfg={"info":true};var dfltGlobalCfg={};window.Echo1200ATInternet.Tracker.Plugins.RichMedia=function(a){var k=function(a,f){var b=parseInt(a,10);return b?Math.max(b,f):0},l=new function(){this.media=function(){this.type=void 0;this.plyr=0;this.clnk=this.s2=void 0;this.p="";this.m9=this.m6=this.m5=this.m1=this.rfsh=this.buf=this.a=void 0};this.mediaAll={};this.setMediaValue=function(a,f,b,d){"undefined"!==typeof d&&(this.mediaAll[a]=this.mediaAll[a]||{},this.mediaAll[a][f]=this.mediaAll[a][f]||new this.media,this.mediaAll[a][f][b]=d)};this.getMediaValue=
function(a,d,b){if(this.mediaAll[a]&&this.mediaAll[a][d])return this.mediaAll[a][d][b]};this.removePlayer=function(a){this.mediaAll[a]={}};this.removeAll=function(){this.mediaAll={}}},d=new function(){this.timeout={};this.setTimeout=function(c,d,b){this.timeout[c]=this.timeout[c]||{};this.timeout[c][d]&&window.clearTimeout(this.timeout[c][d]);this.timeout[c][d]=window.setTimeout(function(){a.richMedia.send({action:"refresh",playerId:c,mediaLabel:d})},1E3*b)};this.setTimeoutObject=function(c,d,b){this.timeout[c]=
this.timeout[c]||{};if("undefined"===typeof this.timeout[c][d]){var e=[],g;for(g in b)b.hasOwnProperty(g)&&e.push({delay:k(g,0),refresh:k(b[g],5)});e.sort(function(a,b){return a.delay<b.delay?-1:a.delay>b.delay?1:0});this.timeout[c][d]={refreshTab:e,backupRefreshTab:Echo1200ATInternet.Utils.cloneSimpleObject(e),delayConfiguration:{}}}b=this.timeout[c][d];if(0<b.refreshTab.length&&(e=b.refreshTab[0].delay,g=b.refreshTab[0].refresh,"number"===typeof e&&"number"===typeof g&&0<g)){b.delayConfiguration[e]=b.delayConfiguration[e]||
{};var m=void 0;"undefined"!==typeof b.refreshTab[1]&&(m=b.refreshTab[1].delay);var n=0;"undefined"===typeof m?n=1:"number"===typeof b.delayConfiguration[e].number?n="refresh"===l.getMediaValue(c,d,"a")?Math.max(b.delayConfiguration[e].number-1,0):b.delayConfiguration[e].number:"number"===typeof m&&(n=Math.floor(60*(m-e)/g)-1);b.delayConfiguration[e].number=n;b.delayConfiguration[e].timeout&&window.clearTimeout(b.delayConfiguration[e].timeout);0<n?b.delayConfiguration[e].timeout=window.setTimeout(function(){a.richMedia.send({action:"refresh",
playerId:c,mediaLabel:d})},1E3*g):(b.delayConfiguration[e].number=void 0,b.delayConfiguration[e].timeout=void 0,b.refreshTab.splice(0,1),window.setTimeout(function(){a.richMedia.send({action:"refresh",playerId:c,mediaLabel:d})},1E3*g));this.timeout[c][d]=b}};this.clearTimeout=function(a,d,b){this.timeout[a]=this.timeout[a]||{};var e=this.timeout[a][d];if("object"===typeof e){if("object"===typeof e.delayConfiguration){var g,k;for(k in e.delayConfiguration)e.delayConfiguration.hasOwnProperty(k)&&(g=
e.delayConfiguration[k].number,"undefined"!==typeof g&&0<g&&(e.delayConfiguration[k].timeout&&window.clearTimeout(e.delayConfiguration[k].timeout),e.delayConfiguration[k].timeout=void 0));b&&(e.refreshTab=Echo1200ATInternet.Utils.cloneSimpleObject(e.backupRefreshTab));this.timeout[a][d]=e}}else e&&window.clearTimeout(e)};this.removePlayer=function(c){for(var d in this.timeout[c])if(this.timeout[c].hasOwnProperty(d)){this.clearTimeout(c,d,!1);var b=l.getMediaValue(c,d,"a");"undefined"!==typeof this.timeout[c][d]&&
"stop"!==b&&a.richMedia.send({action:"stop",playerId:c,mediaLabel:d})}this.timeout[c]={}};this.removeAll=function(){for(var a in this.timeout)this.timeout.hasOwnProperty(a)&&this.removePlayer(a);this.timeout={}}},e=function(c,d,b){var e=c[b]||"";a.exec("Utils","manageChapters",[c,d,3],function(a){e=a+e});return e},n=function(a,d,b,e){var g=a[d];"boolean"===typeof a[d]&&(g=a[d]?e:b);return g},m=function(a){var d=0;/^(\-|\+)?([0-9]+)$/.test(a)&&(d=Number(a));return d},g=function(a,d,b,e,g){d=l.getMediaValue(d,
b,e);"undefined"!==typeof d&&(a[e]=g?encodeURIComponent(d):d)},q=function(a,d,b){"undefined"!==typeof b&&(a[d]=b)};a.richMedia={};a.richMedia.add=function(a){a=a||{};var d=m(a.playerId),b=e(a,"mediaTheme","mediaLabel"),g=n(a,"isEmbedded","int","ext");l.setMediaValue(d,b,"plyr",d);l.setMediaValue(d,b,"type",a.mediaType);l.setMediaValue(d,b,"s2",a.mediaLevel2);l.setMediaValue(d,b,"p",b);l.setMediaValue(d,b,"clnk",a.linkedContent||a.previousMedia);l.setMediaValue(d,b,"a",a.action);l.setMediaValue(d,
b,"rfsh",a.refreshDuration);l.setMediaValue(d,b,"m1",a.duration);l.setMediaValue(d,b,"m5",g);l.setMediaValue(d,b,"m6",a.broadcastMode);l.setMediaValue(d,b,"m9",a.webdomain)};a.richMedia.send=function(c){c=c||{};var f=m(c.playerId),b=e(c,"mediaTheme","mediaLabel"),h=c.action;l.setMediaValue(f,b,"a",h);var s={plyr:f,p:b};g(s,f,b,"a",!1);g(s,f,b,"type",!1);g(s,f,b,"s2",!1);g(s,f,b,"m1",!1);g(s,f,b,"m5",!1);g(s,f,b,"m6",!1);if("play"===h||"info"===h){c=n(c,"isBuffering","0","1");var r=a.getContext("page")||
{},w=e(r,"chapter","name")||void 0,r=r.level2||void 0;q(s,"buf",c);q(s,"prich",w);q(s,"s2rich",r);g(s,f,b,"clnk",!1);g(s,f,b,"m9",!0)}a.sendHit(s,[["hitType",["richmedia"]]]);"pause"===h?d.clearTimeout(f,b,!1):"stop"===h&&d.clearTimeout(f,b,!0);if("play"===h||"refresh"===h)h=l.getMediaValue(f,b,"rfsh"),"object"===typeof h&&null!==h?d.setTimeoutObject(f,b,h):(h=k(h,5),0!==h&&d.setTimeout(f,b,h))};a.richMedia.remove=function(a){d.removePlayer(a);l.removePlayer(a)};a.richMedia.removeAll=function(){d.removeAll();
l.removeAll()}};window.Echo1200ATInternet.Tracker.addPlugin("RichMedia");
}).call(window);;(function(){var dfltPluginCfg={"info":false};var dfltGlobalCfg={"storageMode":"cookie"};Echo1200ATInternet.Tracker.Plugins.Cookies=Echo1200ATInternet.Tracker.Plugins.Storage=function(a){var k=this,l={},d=!1,e=null;a.configPlugin("Storage",dfltPluginCfg||{},function(a){l=a;"localStorage"===l.storageMode&&(d=Echo1200ATInternet.Utils.isLocalStorageAvailable())});var n={},m=function(b){return a.getConfig("base64Storage")?Echo1200ATInternet.Utils.Base64.encode(b):encodeURIComponent(b)},g=function(b){return a.getConfig("base64Storage")?Echo1200ATInternet.Utils.Base64.decode(b):decodeURIComponent(b)},q=function(){this.getData=function(a){var b=
null;(a=RegExp("(?:^| )"+a+"=([^;]+)").exec(document.cookie)||null)&&(b=g(a[1]));return b};this.setData=function(b){var c=!1;if(b.name&&"string"===typeof b.name){var d=b.options||{},e=d.end||{},f=d.domain||a.getConfig("cookieDomain"),g=d.secure||a.getConfig("cookieSecure"),h=Echo1200ATInternet.Utils.jsonSerialize(b),h=b.name+"="+m(h),h=h+(d.path&&"string"===typeof d.path?";path="+d.path:""),h=h+(f&&"string"===typeof f?";domain="+f:"")+(g&&"boolean"===typeof g?";secure":"");"function"===typeof e.toUTCString?
h+=";expires="+e.toUTCString():"number"===typeof e&&(h+=";max-age="+e.toString());document.cookie=h;this.getData(b.name)&&(c=!0)}return c}};e=d?new function(){var a=function(a){var b=+new Date,c=!1,d;a.options&&("undefined"!==typeof a.options.expires?d=a.options.expires:(a=a.options.end||{},"function"===typeof a.getTime?d=a.getTime():"number"===typeof a&&(d=b+1E3*a)));"number"===typeof d&&b>=d&&(c=!0);return{itemToDelete:c,timestamp:d}},b=function(a){var b=!1;try{localStorage.removeItem(a),b=!0}catch(c){}return b};
this.getData=function(c){var d=null,e=localStorage.getItem(c);if(e){var e=g(e),f=Echo1200ATInternet.Utils.jsonParse(e);f&&"object"===typeof f?a(f).itemToDelete&&b(c)||(delete f.options.expires,d=Echo1200ATInternet.Utils.jsonSerialize(f)):d=e}return d};this.setData=function(c){var d=!1;if(c.name&&"string"===typeof c.name){var e=a(c);"number"===typeof e.timestamp&&(c.options.expires=e.timestamp);var f=Echo1200ATInternet.Utils.jsonSerialize(c);if(e.itemToDelete)d=b(c.name);else try{localStorage.setItem(c.name,m(f)),d=!0}catch(g){}}return d}}:
new q;var c=function(b,c){var d=!1;!Echo1200ATInternet.Utils.consent&&!c||a.getConfig("disableCookie")||a.getConfig("disableStorage")||!b||"object"!==typeof b||(d=e.setData(b));return d},f=function(a,b,c){a={name:a,val:b};c&&c.session&&"number"===typeof c.session&&(c.end=c.session);a.options=c||{};return a},b=function(b){var c=null,d=null;a.getConfig("disableCookie")||a.getConfig("disableStorage")||!b||"string"!==typeof b||(d=e.getData(b));(b=d)&&(c=Echo1200ATInternet.Utils.jsonParse(b));return c},h=function(a,b){var d=
Echo1200ATInternet.Utils.cloneSimpleObject(a);return c(d,b)?Echo1200ATInternet.Utils.jsonParse(Echo1200ATInternet.Utils.jsonSerialize(a)):null},s=function(a,c,d){if(!d&&n[a])d=n[a];else if(d=b(a))d.options=d.options||{},d.options.session&&"number"===typeof d.options.session&&(d.options.end=d.options.session,h(d,!1)),n[a]=d;return d?c?(a=null,!d||"object"!==typeof d.val||d.val instanceof Array||void 0===d.val[c]||(a=d.val[c]),a):d.val:null},r=function(a,c,d,e,g){if(c){if(g=b(a))!g||"object"!==typeof g.val||g.val instanceof
Array?g=null:"undefined"===typeof d?delete g.val[c]:g.val[c]=d,g&&(g=h(g,e))}else g=g||{},g=f(a,d,g),g=h(g,e);return g?(n[a]=g,g.val):null},w=function(a,b){if(b)r(a,b,void 0,!1,null);else{n[a]=void 0;var d=f(a,"",{end:new Date("Thu, 01 Jan 1970 00:00:00 UTC"),path:"/"});c(d,!1)}};a.storage={};a.storage.get=k.get=function(a,b){b=!!b;return a instanceof Array?s(a[0],a[1],b):s(a,"",b)};a.storage.getPrivate=k.getPrivate=function(b,c){b instanceof Array?b[0]+=a.getConfig("site"):b+=a.getConfig("site");
return k.get(b,c)};a.storage.set=k.set=function(a,b,c,d){return a instanceof Array?r(a[0],a[1],b,d,null):r(a,null,b,d,c)};a.storage.setPrivate=k.setPrivate=function(b,c,d){b instanceof Array?b[0]+=a.getConfig("site"):b+=a.getConfig("site");return k.set(b,c,d)};a.storage.del=k.del=function(a){a instanceof Array?w(a[0],a[1]):w(a,"")};a.storage.delPrivate=k.delPrivate=function(b){b instanceof Array?b[0]+=a.getConfig("site"):b+=a.getConfig("site");k.del(b)};a.storage.cacheInvalidation=k.cacheInvalidation=
function(){n={}}};Echo1200ATInternet.Tracker.addPlugin("Storage");Echo1200ATInternet.Tracker.addPlugin("Cookies");
}).call(window);;(function(){var dfltPluginCfg={"clicksAutoManagementEnabled":true,"clicksAutoManagementTimeout":500,"info":false};var dfltGlobalCfg={};window.Echo1200ATInternet.Tracker.Plugins.TechClicks=function(a){var k=this,l,d;a.configPlugin("TechClicks",dfltPluginCfg||{},function(a){l=a.clicksAutoManagementEnabled;d=a.clicksAutoManagementTimeout});k.deactivateAutoManagement=function(){l=!1};var e=function(a){switch(a.target){case "_top":window.top.location.href=a.url;break;case "_parent":window.parent.location.href=a.url;break;default:window.location.href=a.url}},n=function(a){var b=a.timeout;a.mailto?k.timeout=setTimeout(function(){window.location.href=
a.mailto},b):a.form?k.timeout=setTimeout(function(){a.form.submit()},b):a.url&&(k.timeout=setTimeout(function(){e({url:a.url,target:a.target})},b))},m=function(c){for(var b,g="_self",m=c.timeoutonly;c;){if(c.href&&0===c.href.indexOf("http")){b=c.href.split('"').join('\\"');g=c.target?c.target:g;break}c=c.parentNode}if(b){if(!m)a.onTrigger("Tracker:Hit:Sent:Ok",function(){k.timeout&&clearTimeout(k.timeout);e({url:b,target:g})});n({url:b,target:g,timeout:d})}},g=function(c){var b=c;for(c=b.timeoutonly;b&&
"FORM"!==b.nodeName;)b=b.parentNode;if(b){if(!c)a.onTrigger("Tracker:Hit:Sent:Ok",function(){k.timeout&&clearTimeout(k.timeout);b.submit()});n({form:b,timeout:d})}},q=function(c){var b=c;for(c=b.timeoutonly;b&&!(b.href&&0<=b.href.indexOf("mailto:"));)b=b.parentNode;if(b){if(!c)a.onTrigger("Tracker:Hit:Sent:Ok",function(){k.timeout&&clearTimeout(k.timeout);window.location.href=b.href});n({mailto:b.href,timeout:d})}},c=function(a){for(;a;){if(a.href){if(0<=a.href.indexOf("mailto:"))return"mailto";if(0===
a.href.indexOf("http"))return"redirection"}else if("FORM"===a.nodeName)return"form";a=a.parentNode}return""};a.techClicks={};a.techClicks.manageClick=k.manageClick=function(a,b){var d=!0;if(l&&a){var e;a:{for(e=a;e;){if("function"===typeof e.getAttribute&&("_blank"===e.getAttribute("target")||"no"===e.getAttribute("data-atclickmanagement"))){e=!0;break a}e=e.parentNode}e=a;for(var k=window.location.href,n;e;){if((n=e.href)&&0<=n.indexOf("#")&&k.substring(0,0<=k.indexOf("#")?k.indexOf("#"):k.length)===
n.substring(0,n.indexOf("#"))){e=!0;break a}e=e.parentNode}e=!1}k=c(a);if(!e&&k){switch(k){case "mailto":q(a);d=!1;break;case "form":g(a);d=!1;break;case "redirection":m(a),d=!1}b&&(e=b.defaultPrevented,"function"===typeof b.isDefaultPrevented&&(e=b.isDefaultPrevented()),e||b.preventDefault&&b.preventDefault())}}return d}};window.Echo1200ATInternet.Tracker.addPlugin("TechClicks");
}).call(window);;(function(){var dfltPluginCfg={"info":false};var dfltGlobalCfg={};window.Echo1200ATInternet.Tracker.Plugins.Utils=function(a){var k=this,l={};a.utils={};a.utils.getQueryStringValue=k.getQueryStringValue=function(a,d){var e=Echo1200ATInternet.Utils.hashcode(d).toString();if(!l[e]){l[e]={};var k=RegExp("[&#?]{1}([^&=#?]*)=([^&#]*)?","g"),c=k.exec(d);if(null!==c)for(;null!==c;)l[e][c[1]]=c[2],c=k.exec(d)}return l[e].hasOwnProperty(a)?l[e][a]:null};k.manageChapters=function(d,e,g){var k=a.getConfig("ignoreEmptyChapterValue"),c="";if(d){g=parseInt(g,10);for(var f=1;f<g+1;f++)var b=
d[e+f]||"",c=k?c+(b?b+"::":""):c+(d.hasOwnProperty(e+f)?b+"::":"")}return c};k.getDocumentLevel=function(){var d=a.getConfig("documentLevel");if(0>d.indexOf("."))return window[d]||document;d=d.split(".");return window[d[0]][d[1]]||document};a.utils.getLocation=k.getLocation=function(){return k.getDocumentLevel().location.href};a.dispatchIndex={};a.dispatchStack=[];a.dispatchEventFor={};var d=0;a.dispatchSubscribe=function(d){return a.dispatchIndex[d]?!1:(a.dispatchStack.push(d),a.dispatchIndex[d]=
!0)};a.dispatchSubscribed=function(d){return!0===a.dispatchIndex[d]};a.addSpecificDispatchEventFor=function(e){return a.dispatchEventFor[e]?!1:(a.dispatchEventFor[e]=!0,d++,!0)};a.processSpecificDispatchEventFor=function(e){a.dispatchEventFor[e]&&(a.dispatchEventFor[e]=!1,d--,0===d&&(a.dispatchEventFor={},a.emit("Tracker:Plugin:SpecificEvent:Exec:Complete",{lvl:"INFO"})))};a.dispatch=function(e){var k=function(){for(var d="",c=null;0<a.dispatchStack.length;)d=a.dispatchStack.pop(),0===a.dispatchStack.length&&
(c=e),a[d].onDispatch(c);a.dispatchIndex={};a.delContext(void 0,"customObject")},g=function(){if(a.plugins.isExecWaitingLazyloading())a.onTrigger("Tracker:Plugin:Lazyload:Exec:Complete",function(){k()},!0);else k()};if(0===d)g();else a.onTrigger("Tracker:Plugin:SpecificEvent:Exec:Complete",function(){g()},!0)};a.dispatchRedirect=function(d){var e=!0,g=null;d&&(g=null,d&&d.hasOwnProperty("event")&&(g=d.event||window.event),!Echo1200ATInternet.Utils.isTabOpeningAction(g)&&d.elem&&(d.elem.timeoutonly=!0,a.plugins.exec("TechClicks",
"manageClick",[d.elem,g],function(a){e=a})),g=d.callback);a.dispatch(g);return e};var e=a.manageSend=function(d){if(!Echo1200ATInternet.Utils.isPreview()||a.getConfig("preview"))Echo1200ATInternet.Utils.isPrerender(function(a){d(a)})||d()};a.processTagObject=function(d,e,g){if((d=a.getParam(d,!0))&&d.options.permanent){for(var k=!1,c=d.options.hitType||[],f=0;f<c.length;f++)if(-1!==Echo1200ATInternet.Utils.arrayIndexOf(e.concat("all"),c[f])){k=!0;break}k&&(g=Echo1200ATInternet.Utils.completeFstLevelObj(d.value||{},g,!0))}return g};
a.processContextObjectAndSendHit=function(d,k,g,l){var c=a.getParam(d,!0);if(c){for(var f=!1,b=c.options.hitType||[],h=0;h<b.length;h++)if(-1!==Echo1200ATInternet.Utils.arrayIndexOf(k.hitType.concat("all"),b[h])){f=!0;break}f?(f=Echo1200ATInternet.Utils.cloneSimpleObject(c),f.value=Echo1200ATInternet.Utils.completeFstLevelObj(f.value||{},g,!0),a.setParam(d,f.value,{hitType:k.hitType,encode:k.encode,separator:k.separator,truncate:k.truncate}),e(function(){a.sendHit(null,[["hitType",k.hitType]],l,null,!0)}),c.options.permanent&&
a.setParam(d,c.value,c.options)):(a.setParam(d,g,{hitType:k.hitType,encode:k.encode,separator:k.separator,truncate:k.truncate}),e(function(){a.sendHit(null,[["hitType",k.hitType]],l,null,!0)}),a.setParam(d,c.value,c.options))}else a.setParam(d,g,{hitType:k.hitType,encode:k.encode,separator:k.separator,truncate:k.truncate}),e(function(){a.sendHit(null,[["hitType",k.hitType]],l,null,!0)})}};window.Echo1200ATInternet.Tracker.addPlugin("Utils");
}).call(window);
if(typeof window.Echo1200ATInternet.onTrackerLoad==='function'){window.Echo1200ATInternet.onTrackerLoad();}

/** START BBC ADDITION **/
return Echo1200ATInternet;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/** END BBC ADDITION **/


/***/ }),

/***/ "./lib/comscore/amd.streamsense-6.2.3.180328.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var require;var require;!function(n){if(true)module.exports=n();else {}}(function(){return function o(u,s,a){function f(e,n){if(!s[e]){if(!u[e]){var t="function"==typeof require&&require;if(!n&&t)return require(e,!0);if(c)return c(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var r=s[e]={exports:{}};u[e][0].call(r.exports,function(n){var t=u[e][1][n];return f(t||n)},r,r.exports,o,u,s,a)}return s[e].exports}for(var c="function"==typeof require&&require,n=0;n<a.length;n++)f(a[n]);return f}({1:[function(n,t,e){var a=n(24),f=n(26),c=n(36);t.exports=function(t){var n=this,e=!1,i=-1,r=null;function o(n){i=n,t.t().set("plannedFlushTime",n+"")}function u(){t.flush(),o(-1),n.i()}function s(){r&&(c.clearTimeout(r),r=null)}a.extend(n,{start:function(){e=!0,!r&&0<t.getCacheFlushingInterval()&&null!=t.getCustomerC2()&&(t.t().has("plannedFlushTime")&&(i=f.o(t.t().get("plannedFlushTime"),-1)),n.i())},stop:function(){e=!1,s()},update:function(){0<t.getCacheFlushingInterval()&&null!=t.getCustomerC2()?!r&&e?(o(-1),n.start()):null!=r&&(o(0<t.getCacheFlushingInterval()?+new Date+1e3*t.getCacheFlushingInterval():-1),r&&(c.clearTimeout(r),n.i())):(o(-1),s())},i:function(){i<0&&o(+new Date+1e3*t.getCacheFlushingInterval()),r=c.setTimeout(u,i-+new Date)}})}},{24:24,26:26,36:36}],2:[function(n,t,e){var i=n(5),r=n(8).TransmissionMode,o=n(8).u,u=new i,s={TransmissionMode:r,getCore:function(){return u},setAppContext:function(n){u.setAppContext(n)},setEnabled:function(n){u.setEnabled(n)},getEnabled:function(){return u.getEnabled()},onUxActive:function(){u.onUxActive()},onUxInactive:function(){u.onUxInactive()},onEnterForeground:function(){u.onEnterForeground()},onExitForeground:function(){u.onExitForeground()},onUserInteraction:function(){u.onUserInteraction()},update:function(){u.update()},enableAutoUpdate:function(n,t){u.enableAutoUpdate(n,void 0===t||t)},disableAutoUpdate:function(){u.disableAutoUpdate()},isAutoUpdateEnabled:function(){return u.isAutoUpdateEnabled()},start:function(n){u.s(o.l,n||{})},view:function(n){u.s(o.v,n||{})},hidden:function(n){u.s(o.HIDDEN,n||{})},close:function(n){u.s(o.h,n)},aggregate:function(n){u.s(o._,n)},getPixelURL:function(){return u.getPixelURL()},setPixelURL:function(n){u.setPixelURL(n)},getCustomerC2:function(){return u.getCustomerC2()},setCustomerC2:function(n){u.setCustomerC2(n)},getAppName:function(){return u.getAppName()},setAppName:function(n){u.setAppName(n)},getAppVersion:function(){return u.getAppVersion()},setAppVersion:function(n){u.setAppVersion(n)},getGenesis:function(){return u.getGenesis()},getVisitorID:function(){return u.getVisitorId()},setVisitorId:function(n,t){u.setVisitorId(n,t)},getCrossPublisherId:function(){return u.getCrossPublisherId()},getOfflineTransmissionMode:function(){return u.getOfflineTransmissionMode()},allowOfflineTransmission:function(n){u.allowOfflineTransmission(n)},getLiveTransmissionMode:function(){return u.getLiveTransmissionMode()},allowLiveTransmission:function(n){u.allowLiveTransmission(n)},getPublisherSecret:function(){return u.g()},setPublisherSecret:function(n){u.m(n)},flushCache:function(){u.flush()},clearOfflineCache:function(){u.I().clear()},setLabel:function(n,t){u.setLabel(n,t)},getLabel:function(n){return u.getLabel(n)},setLabels:function(n){u.setLabels(n)},getLabels:function(){return u.getLabels()},setAutoStartLabels:function(n){u.setAutoStartLabels(n)},getAutoStartLabel:function(n){return u.getAutoStartLabel(n)},getAutoStartLabels:function(){return u.getAutoStartLabels()},setAutoStartLabel:function(n,t){u.setAutoStartLabel(n,t)},isKeepAliveEnabled:function(){return u.S().isEnabled()},setKeepAliveEnabled:function(n){u.setKeepAliveEnabled(!!n)},setCacheMaxMeasurements:function(n){u.setCacheMaxMeasurements(n)},getCacheMaxMeasurements:function(){return u.getCacheMaxMeasurements()},setCacheMaxBatchFiles:function(n){u.setCacheMaxBatchFiles(n)},getCacheMaxBatchFiles:function(){return u.getCacheMaxBatchFiles()},setCacheMaxFlushesInARow:function(n){u.setCacheMaxFlushesInARow(n)},getCacheMaxFlushesInARow:function(){return u.getCacheMaxFlushesInARow()},setCacheMinutesToRetry:function(n){u.setCacheMinutesToRetry(n)},getCacheMinutesToRetry:function(){return u.getCacheMinutesToRetry()},setCacheMeasurementExpiry:function(n){u.setCacheMeasurementExpiry(n)},getCacheMeasurementExpiry:function(){return u.getCacheMeasurementExpiry()},getCacheFlushingInterval:function(){return u.getCacheFlushingInterval()},setCacheFlushingInterval:function(n){u.setCacheFlushingInterval(n)},setSecure:function(n){u.setSecure(n)},isSecure:function(){return u.isSecure()},getMeasurementLabelOrder:function(){return u.getMeasurementLabelOrder()},setMeasurementLabelOrder:function(n){u.setMeasurementLabelOrder(n)},setAutoStartEnabled:function(n){u.setAutoStartEnabled(n)},isAutoStartEnabled:function(){return u.isAutoStartEnabled()},getVersion:function(){return u.getVersion()},getPlatformAPI:function(){return u.getPlatformAPI()},setPlatformAPI:function(n){u.setPlatformAPI(n)},setOfflineURL:function(n){u.setOfflineURL(n)},clearInternalData:function(){u.clearInternalData()},cacheHttpRedirects:function(){u.cacheHttpRedirects()}};t.exports=s},{5:5,8:8}],3:[function(n,t,e){var p=n(24),v=n(36),d=n(8).TransmissionMode,h=30;t.exports=function(t){var e,i=1e3,r=!1,o=null,u=null,s=-1;function a(){t.flush(),s=-1,o=null}function f(){o&&(v.clearTimeout(o),o=null)}function c(n){var t=+new Date;r?(f(),(s<t||s<0||!n)&&(s=t+1e3*h),o=v.setTimeout(a,s-t)):s<0&&(s=t+1e3*h)}function l(){var n=v.isConnectionAvailable();n!=e&&((e=n)?t.getOfflineTransmissionMode()!=d.NEVER&&t.getOfflineTransmissionMode()!=d.DISABLED&&c(!1):(f(),s=-1)),r&&(u=v.setTimeout(l,i))}p.extend(this,{start:function(){r=!0,e&&0<s&&c(!0),u=v.setTimeout(l,i)},stop:function(){v.clearTimeout(u),u=null,r=!1,f()}})}},{24:24,36:36,8:8}],4:[function(n,t,e){t.exports={PAGE_NAME_LABEL:"name",P:2048,A:4096,C:"previousVersion",k:["c1","c2","ca2","cb2","cc2","cd2","ns_site","ca_ns_site","cb_ns_site","cc_ns_site","cd_ns_site","ns_vsite","ca_ns_vsite","cb_ns_vsite","cc_ns_vsite","cd_ns_vsite","ns_alias","ca_ns_alias","cb_ns_alias","cc_ns_alias","cd_ns_alias","ns_ap_an","ca_ns_ap_an","cb_ns_ap_an","cc_ns_ap_an","cd_ns_ap_an","ns_ap_pn","ns_ap_pv","c12","ca12","cb12","cc12","cd12","ns_ak","ns_ap_hw","name","ns_ap_ni","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ca_ns_ap_ver","cb_ns_ap_ver","cc_ns_ap_ver","cd_ns_ap_ver","ns_ap_sv","ns_ap_bv","ns_ap_cv","ns_ap_smv","ns_type","ca_ns_type","cb_ns_type","cc_ns_type","cd_ns_type","ns_radio","ns_nc","cs_partner","cs_xcid","cs_impid","ns_ap_ui","ca_ns_ap_ui","cb_ns_ap_ui","cc_ns_ap_ui","cd_ns_ap_ui","ns_ap_gs","ns_ap_ie","ns_st_sv","ns_st_pv","ns_st_smv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sc","ns_st_psq","ns_st_asq","ns_st_sq","ns_st_ppc","ns_st_apc","ns_st_spc","ns_st_atpc","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_sl","ns_st_pb","ns_st_hc","ns_st_mp","ca_ns_st_mp","cb_ns_st_mp","cc_ns_st_mp","cd_ns_st_mp","ns_st_mv","ca_ns_st_mv","cb_ns_st_mv","cc_ns_st_mv","cd_ns_st_mv","ns_st_pn","ns_st_tp","ns_st_ad","ns_st_li","ns_st_ci","ns_st_si","ns_st_pt","ns_st_dpt","ns_st_ipt","ns_st_ap","ns_st_dap","ns_st_et","ns_st_det","ns_st_upc","ns_st_dupc","ns_st_iupc","ns_st_upa","ns_st_dupa","ns_st_iupa","ns_st_lpc","ns_st_dlpc","ns_st_lpa","ns_st_dlpa","ns_st_pa","ns_st_ldw","ns_st_ldo","ns_st_ie","ns_ap_jb","ns_ap_et","ns_ap_res","ns_ap_sd","ns_ap_po","ns_ap_ot","ns_ap_c12m","cs_c12u","ca_cs_c12u","cb_cs_c12u","cc_cs_c12u","cd_cs_c12u","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_ar","ns_ap_miss","ns_ts","ns_ap_cfg","ns_ap_env","ns_ap_ais","ns_st_ca","ns_st_cp","ns_st_er","ca_ns_st_er","cb_ns_st_er","cc_ns_st_er","cd_ns_st_er","ns_st_pe","ns_st_ui","ca_ns_st_ui","cb_ns_st_ui","cc_ns_st_ui","cd_ns_st_ui","ns_st_bc","ns_st_dbc","ns_st_bt","ns_st_dbt","ns_st_bp","ns_st_lt","ns_st_skc","ns_st_dskc","ns_st_ska","ns_st_dska","ns_st_skd","ns_st_skt","ns_st_dskt","ns_st_pc","ns_st_dpc","ns_st_pp","ns_st_br","ns_st_pbr","ns_st_rt","ns_st_prt","ns_st_ub","ns_st_vo","ns_st_pvo","ns_st_ws","ns_st_pws","ns_st_ki","ns_st_rp","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pl","ns_st_pr","ns_st_tpr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_tep","ns_st_sr","ns_st_ty","ns_st_ct","ns_st_cs","ns_st_ge","ns_st_st","ns_st_stc","ns_st_ce","ns_st_ia","ns_st_dt","ns_st_ddt","ns_st_tdt","ns_st_tm","ns_st_dtm","ns_st_ttm","ns_st_de","ns_st_pu","ns_st_ti","ns_st_cu","ns_st_fee","ns_st_ft","ns_st_at","ns_st_pat","ns_st_vt","ns_st_pvt","ns_st_tt","ns_st_ptt","ns_st_cdn","ns_st_pcdn","ns_st_amg","ns_st_ami","ns_st_amp","ns_st_amt","ns_st_ams","ns_ap_i1","ns_ap_i2","ns_ap_i3","ns_ap_i4","ns_ap_i5","ns_ap_i6","ns_ap_referrer","ns_clid","ns_campaign","ns_source","ns_mchannel","ns_linkname","ns_fee","gclid","utm_campaign","utm_source","utm_medium","utm_term","utm_content","ns_ecommerce","ns_ec_sv","ns_client_id","ns_order_id","ns_ec_cur","ns_orderline_id","ns_orderlines","ns_prod_id","ns_qty","ns_prod_price","ns_prod_grp","ns_brand","ns_shop","ns_category","category","ns_c","ns_search_term","ns_search_result","ns_m_exp","ns_m_chs","c3","ca3","cb3","cc3","cd3","c4","ca4","cb4","cc4","cd4","c5","ca5","cb5","cc5","cd5","c6","ca6","cb6","cc6","cd6","c10","c11","c13","c14","c15","c16","c7","c8","c9","ns_ap_er","ns_st_amc"]}},{}],5:[function(n,t,e){var Pn=n(8).T,An=n(8).N,Cn=n(4),kn=n(26),i=n(17),En=n(8).u,Tn=n(36),Nn=n(21),Ln=n(24),Dn=n(22),Rn=n(25),Mn=n(6),On=n(11),Wn=n(7),Vn=n(9),xn=n(12).L,Un=n(1),Bn=n(3),Fn="undefined",jn=i.D,Gn="6.2.3.180328",Kn="http://b.scorecardresearch.com/p2?",qn="https://sb.scorecardresearch.com/p2?",Hn=18e5,Yn=3e5,Jn=60,zn="exitCode",Qn="lastApplicationAccumulationTimestamp",Xn="lastSessionAccumulationTimestamp",Zn="lastApplicationSessionTimestamp",$n="lastUserSessionTimestamp",nt="lastActiveUserSessionTimestamp",tt="foregroundTransitionsCount",et="accumulatedForegroundTime",it="accumulatedBackgroundTime",rt="accumulatedInactiveTime",ot="totalForegroundTime",ut="totalBackgroundTime",st="totalInactiveTime",at="accumulatedApplicationSessionTime",ft="accumulatedActiveUserSessionTime",ct="accumulatedUserSessionTime",lt="activeUserSessionCount",pt="userSessionCount",vt="lastUserInteractionTimestamp",dt="userInteractionCount",ht="applicationSessionCountKey",_t="genesis",gt="previousGenesis",mt="installId",wt="firstInstallId",yt="currentVersion",bt="runs",It="coldStartCount",St="vid",Pt="crossPublisherIdHashed",At="crossPublisherId";t.exports=function(){var t,r,s,a,f,c,e,i,o,u,l,n,p,v,d,h,_,g,m,w,y,b,I,S,P,A,C,k,E,T,N,L,D,R,M,O,W,V,x,U,B,F,j,G,K,q,H,Y,J,z,Q,X,Z,$,nn=this,tn=!0,en=!1,rn=!0,on=Pn.R,un=An.R,sn=!1,an=!1,fn=!1,cn=!0,ln=!1,pn=0;function vn(){nn.M(),f=new Wn(nn),s=new Vn(nn),nn.O(),nn.W(),nn.V(),o=new On(nn),e=new Mn,function(){T=kn.o(r.get(Qn),-1),F=kn.o(r.get(Xn),-1),W=kn.o(r.get(Zn),-1),V=kn.o(r.get($n),-1),x=kn.o(r.get(nt),-1),y=kn.U(r.get(tt)),A=kn.o(r.get(et)),P=kn.o(r.get(it)),C=kn.o(r.get(rt)),b=kn.o(r.get(ot)),I=kn.o(r.get(ut)),S=kn.o(r.get(st)),N=kn.o(r.get(at)),D=kn.o(r.get(ft)),L=kn.o(r.get(ct)),O=kn.U(r.get(lt),-1),M=kn.U(r.get(pt),-1),B=kn.o(r.get(vt),-1),U=kn.U(r.get(dt),0),R=kn.U(r.get(ht),0),z=r.get(zn)?parseInt(r.get(zn)):0,h=Tn.getAppVersion(),E=kn.o(r.get(gt),0),(k=kn.o(r.get(_t),-1))<0?(k=+new Date,E=0,W=k,R++):(_n()||(N+=+new Date-F,r.set(at,N+"")),W=k),(d=kn.o(r.get(wt),-1))<0?(v=d=k,h&&h!=jn&&r.set(yt,h+""),r.set(wt,d+""),r.set(mt,v+"")):nn.setAppVersion(h),r.set(_t,k+""),r.set(gt,E+""),nn.B(k);var n=+new Date;if(0<=T){var t=n-T;C+=t,r.set(rt,C+""),S+=t,r.set(st,S+"")}F=T=n,r.set(Qn,T+""),r.set(Xn,F+""),r.set(Zn,W+""),r.has(bt)||r.set(bt,"0"),l=kn.U(r.get(bt)),p=kn.U(r.get(It))}()}function dn(n){return r.has(n)?r.get(n)+"":null}function hn(n){if(Z)switch(n){case An.F:e=+new Date,Yn<=e-x&&O++,x=e,nn.j();case An.G:t=+new Date,Yn<=t-V&&M++,V=t;case An.K:_n();break;case An.R:}var t,e}function _n(){var n=+new Date,t=!1;return Hn<n-W&&(E=k,k=n,R++,t=!0),W=n,t}function gn(n){if(Z){n=typeof n===Fn||n;var t=+new Date,e=t-T;switch(on){case Pn.H:A+=e,b+=e;break;case Pn.Y:P+=e,I+=e;break;case Pn.R:C+=e,S+=e}T=t,n&&(r.set(Qn,T+""),r.set(tt,y+""),r.set(et,A+""),r.set(it,P+""),r.set(rt,C+""),r.set(ot,b+""),r.set(ut,I+""),r.set(st,S+""))}}function mn(n){if(Z){n=typeof n===Fn||n;var t=+new Date,e=t-F;switch(un){case An.F:D+=e,x=t;case An.G:L+=e,V=t;case An.K:N+=e,W=t;break;case An.R:}F=t,n&&(r.set(Xn,F+""),r.set(Zn,W+""),r.set($n,V+""),r.set(nt,x+""),r.set(at,N+""),r.set(ft,D+""),r.set(ct,L+""),r.set(lt,O+""),r.set(pt,M+""),r.set(vt,B+""),r.set(dt,U+""),r.set(gt,E+""),r.set(_t,k+""),r.set(ht,R+""))}}function wn(){if(Z){var n,t,e=+new Date;n=0<m?Pn.H:0<w?Pn.Y:Pn.R,t=e-B<Yn?An.F:0<w?An.G:0<m?An.K:An.R;var i,r=on,o=un;if(n!=r||t!=o){var u=!1;r!=n&&(function(n){if(Z)switch(n){case Pn.R:f.J(!1),s.X(),s.Z(),c.start(),a.start();break;case Pn.Y:In();break;case Pn.H:nn.nn(null),In()}}(on),function(n){if(Z)switch(n){case Pn.R:c.stop(),s.pause(),a.stop(),In(),f.J(!0);break;case Pn.Y:tn||bn();break;case Pn.H:bn(),y++}}(n),gn(),on=n,u=!0),o!=t&&(function(n){if(Z){var t=+new Date;switch(n){case An.F:null!=j&&(Tn.clearTimeout(j),j=null),x=t;case An.G:V=t;case An.K:W=t;break;case An.R:_n()||(N+=t-F)}}}(un),hn(t),mn(),un=t),u&&(i=on,Z&&i!=Pn.R&&nn.isAutoStartEnabled()&&!en&&nn.s(En.l,X))}}}function yn(n,t){Z&&(Nn.tn(n)?(t=Nn.tn(t)?"-cs"+t:"",K=n+t):null==K&&ln&&(K=Dn(Tn.getVisitorId()+nn.g()),"function"==typeof Tn.getVisitorIdSuffix&&null!=Tn.getVisitorIdSuffix()&&(K=K+"-cs"+Tn.getVisitorIdSuffix())),r.set(St,K+""))}function bn(){if(Z){In();var n=function(){nn.update(),null!=i&&Tn.setTimeout(n,u)};i=Tn.setTimeout(n,u)}}function In(){Z&&null!=i&&(Tn.clearTimeout(u),i=null)}function Sn(){return!ln||null==Y||0===Y.length||null==G||0===G.length}Ln.extend(nn,{isProperlyInitialized:function(){return!Sn()},reset:function(){Z&&(e.reset(),on=Pn.R,un=An.R,en=!1,_=h=null,z=U=E=L=D=N=C=A=P=S=I=b=w=m=p=l=0,an=sn=!(d=v=x=V=W=F=T=B=M=O=k=v=d=n=-1),nn.disableAutoUpdate(),null!=j&&(Tn.clearTimeout(j),j=null),null!=s&&s.cancel(),null!=a&&a.stop(),null!=f&&(f.en(),f=new Wn(nn)))},M:function(n){r=n||new Tn.Storage},O:function(n){t=n||new xn(nn)},W:function(n){a=n||new Un(nn)},V:function(n){c=new Bn(nn)},in:function(){var n=dn("AppName");null!=n&&nn.setAppName(n);var t=dn("AppVersion");null!=t&&nn.setAppVersion(t)},rn:function(){Z&&r.has(St)&&(K=r.get(St))},un:function(){Z&&(l++,r.set(bt,l+""))},sn:function(){return!en&&(en=!0,p++,r.set(It,p+""),n=+new Date,!0)},j:function(){Z&&(null!=j&&(Tn.clearTimeout(j),j=null),j=Tn.setTimeout(function(){null!=j&&(Tn.clearTimeout(j),j=null),wn()},Yn))},I:function(){return t},an:function(){return c},t:function(){return r},fn:function(){return f},S:function(){return s},cn:function(){return a},ln:function(){return e},onUxActive:function(){Z&&(Sn()||(M<0&&(M=0),w++,wn()))},onUxInactive:function(){Z&&(Sn()||0<w&&(w--,wn()))},onEnterForeground:function(){Z&&(Sn()||(m++,wn()))},onExitForeground:function(){Z&&(Sn()||0<m&&(m--,wn()))},onUserInteraction:function(){Z&&(Sn()||(M<0&&(M=0),O<0&&(O=0),B=+new Date,U++,un!=An.F?wn():nn.j()))},pn:function(){return on},vn:function(){return un},dn:function(){return l},hn:function(){return v},_n:function(){return d},gn:function(){return n},mn:function(){return p},wn:function(){return _},yn:function(n){_=n},bn:function(n){var t=y;return(n=typeof n===Fn||n)&&(y=0,r.set(tt,y+"")),t},In:function(n){var t=b;return(n=typeof n===Fn||n)&&(b=0,r.set(ot,b+"")),t},Sn:function(n){var t=A;return(n=typeof n===Fn||n)&&(A=0,r.set(et,A+"")),t},Pn:function(n){var t=I;return(n=typeof n===Fn||n)&&(I=0,r.set(ut,I+"")),t},An:function(n){var t=P;return(n=typeof n===Fn||n)&&(P=0,r.set(it,P+"")),t},Cn:function(n){var t=S;return(n=typeof n===Fn||n)&&(S=0,r.set(st,S+"")),t},kn:function(n){var t=C;return(n=typeof n===Fn||n)&&(C=0,r.set(rt,C+"")),t},En:function(n){var t=N;return(n=typeof n===Fn||n)&&(N=0,r.set(at,N+"")),t},Tn:function(n){var t=D;return(n=typeof n===Fn||n)&&(D=0,r.set(ft,D+"")),t},Nn:function(n){var t=L;return(n=typeof n===Fn||n)&&(L=0,r.set(ct,L+"")),t},Ln:function(){return u},Dn:function(n){var t=R;return(n=typeof n===Fn||n)&&(R=0,r.set(ht,R+"")),t},Rn:function(n){n=typeof n===Fn||n;var t=-1;return 0<=O&&(t=O,n&&(O=0,r.set(lt,O+""))),t},Mn:function(n){n=typeof n===Fn||n;var t=-1;return 0<=M&&(t=M,n&&(M=0,r.set(pt,M+""))),t},On:function(n){var t=U;return(n=typeof n===Fn||n)&&(U=0,r.set(dt,U+"")),t},setAppContext:function(){ln||(Tn.autoDetect(),vn(),nn.in(),nn.rn(),ln=!0)},setEnabled:function(n){Z&&null!=n&&!n&&(Z=!1,a.stop(),c.stop(),s.pause())},getEnabled:function(){return Z},Wn:function(){return{}},Vn:function(){return g},nn:function(n){g=n},setPixelURL:function(n){if(Z){if(null==n||0===n.length)return null;sn=!0;var t=n.indexOf("?");if(0<=t){if(t<n.length-1){for(var e=n.substring(t+1).split("&"),i=0,r=e.length;i<r;i++){var o=e[i].split("=");2==o.length?nn.setLabel(o[0],o[1]):1==o.length&&nn.setLabel(Cn.PAGE_NAME_LABEL,o[0])}n=n.substring(0,t+1)}}else n+="?";return G=n}},setKeepAliveEnabled:function(n){Z&&s.xn(n)},getPixelURL:function(){return G},getCrossPublisherId:function(){return q},isCrossPublisherIdChanged:function(){return Tn.isCrossPublisherIdChanged()||fn},getVisitorId:function(){return null==K&&yn(),K},setVisitorId:yn,Un:function(){var n=(Tn.getCrossPublisherId()||"null").split(" "),t=n[0]&&"null"!=n[0]?n[0]:null,e="true"==n[1];if(null!=t){q||(H=r.get(Pt),q=r.get(At));var i=null;q?"none"==t&&"none"==q||!cn&&"none"==q||"none"!=t&&(i=Dn(t))==H||(e?"none"==t?(H=null,q="none"):(H=i,q=Rn(t)):(fn=!0,cn&&"none"!=t?(H=Dn(t),q=Rn(t)):(H=null,q="none")),r.set(At,q),null==H?r.remove(Pt):r.set(Pt,H)):("none"==t?(H=null,q="none"):(H=Dn(t),q=Rn(t)),r.set(At,q),null==H?r.remove(Pt):r.set(Pt,H)),cn=!1}else q=H=null},m:function(n){return null==n||0===n.length||(Y=n),nn},g:function(){return null==Y&&(Y=""),Y},setAppName:function(n){Z&&(J=n)},getAppName:function(){return null!=J&&0!==J.length||nn.setAppName(Tn.getAppName()),J},setAppVersion:function(n){var t;r&&(n&&n!=jn?(r.has(Cn.C)&&(_=r.get(Cn.C)+""),r.has(yt)&&(t=r.get(yt)+""),t&&t!==n?(_=t,r.set(Cn.C,_+""),v=k,r.set(mt,v+"")):v=kn.o(r.get(mt),-1),r.set(yt,n+"")):v=kn.o(r.get(mt),-1)),h=n},getAppVersion:function(){return h},getVersion:function(){return Gn},getGenesis:function(){return k},Bn:function(){return E},B:function(n){r.set(zn,n.toString(10))},Fn:function(){return z},getLabels:function(){return Q},setLabels:function(n){if(Z)for(var t in n)n.hasOwnProperty(t)&&nn.setLabel(t,n[t])},getLabel:function(n){return Q[n]},setLabel:function(n,t){Z&&(!n||t?Q[n]=t:delete Q[n])},setAutoStartLabels:function(n){Z&&null!=n&&Ln.extend(X,n)},getAutoStartLabel:function(n){return X[n]},getAutoStartLabels:function(){return X},setAutoStartLabel:function(n,t){Z&&(X[n]=t)},getCustomerC2:function(){return Q.c2},setCustomerC2:function(n){if(Z&&null!=n&&0!==n.length){var t=e.isSecure()?qn:Kn;nn.setPixelURL(t),sn=!1,nn.setLabel("c2",n)}},getLiveTransmissionMode:function(){return e.getLiveTransmissionMode()},allowLiveTransmission:function(n){Z&&e.getLiveTransmissionMode()!=n&&e.allowLiveTransmission(n)},getOfflineTransmissionMode:function(){return e.getOfflineTransmissionMode()},allowOfflineTransmission:function(n){Z&&e.getOfflineTransmissionMode()!=n&&e.allowOfflineTransmission(n)},setSecure:function(n){Z&&(this.getCustomerC2()||(an=!0,e.isSecure()!=n&&e.setSecure(n)))},jn:function(n){if(!an&&(e.setSecure(!!n),null!=f&&f.Gn(Mn.Kn,!!n),nn.getCustomerC2()&&!sn)){var t=e.isSecure()?qn:Kn;nn.setPixelURL(t),sn=!1}},setAutoStartEnabled:function(n){Z&&(rn=n)},isAutoStartEnabled:function(){return rn},isSecure:function(){return e.isSecure()},setCacheMaxMeasurements:function(n){null!=t&&t.setCacheMaxMeasurements(n)},getCacheMaxMeasurements:function(){return null!=t?t.getCacheMaxMeasurements():xn.qn},setCacheMaxBatchFiles:function(n){null!=t&&t.setCacheMaxBatchFiles(n)},getCacheMaxBatchFiles:function(){return null!=t?t.getCacheMaxBatchFiles():xn.Hn},setCacheMaxFlushesInARow:function(n){null!=t&&t.Yn(n)},getCacheMaxFlushesInARow:function(){return null!=t?t.Jn():xn.zn},setCacheMinutesToRetry:function(n){null!=t&&t.Qn(n)},getCacheMinutesToRetry:function(){return null!=t?t.Xn():xn.Zn},setCacheMeasurementExpiry:function(n){null!=t&&t.setCacheMeasurementExpiry(n)},getCacheMeasurementExpiry:function(){return null!=t?t.getCacheMeasurementExpiry():xn.$n},getCacheFlushingInterval:function(){return pn},setCacheFlushingInterval:function(n){Z&&pn!=n&&(pn=n,null!=a&&a.update())},getMeasurementLabelOrder:function(){return e.getMeasurementLabelOrder()},setMeasurementLabelOrder:function(n){Z&&n!=e.getMeasurementLabelOrder()&&e.setMeasurementLabelOrder(n)},flush:function(){t.flush(e,function(){})},update:function(n){Z&&(gn(n=typeof n===Fn||n),mn(n))},enableAutoUpdate:function(n,t){Z&&(n=n||Jn,In(),n<Jn&&(n=Jn),tn=t,u=1e3*n,on==Pn.H?bn():on!=Pn.Y||tn||bn())},disableAutoUpdate:function(){Z&&(In(),tn=!0,u=-1)},isAutoUpdateEnabled:function(){return 0<u},s:function(n,t){Z&&(Sn()||(en||n==En.l||o.send(En.l,{},sn?G:null),n==En.h?(nn.B(0),nn.update(!0)):o.send(n,t,sn?G:null)))},nt:function(n,t){o.send(En.HIDDEN,n,t)},setOfflineURL:function(n){Z&&t.tt(n)},getPlatformAPI:function(){return Tn},setPlatformAPI:function(n){Tn.setPlatformAPI(n)},et:function(){return o},clearInternalData:function(){r&&r.clear()},cacheHttpRedirects:function(n){$=n},it:function(){return $}}),e=new Mn,Q={},X={},$=Z=!0,nn.reset()}},{1:1,11:11,12:12,17:17,21:21,22:22,24:24,25:25,26:26,3:3,36:36,4:4,6:6,7:7,8:8,9:9}],6:[function(n,t,e){var o=n(24),u=n(8).TransmissionMode,s=n(36),a=n(4),f=0,c=1,l=2,p=3;function i(){var t,e,i,r;o.extend(this,{reset:function(){t=u.DEFAULT,e=u.DEFAULT,i=s.isConnectionSecure(),r=a.k},rt:function(n){t=n.getLiveTransmissionMode(),e=n.getOfflineTransmissionMode(),r=n.getMeasurementLabelOrder(),i=n.isSecure()},ot:function(n,t){switch(n){case f:this.allowLiveTransmission(t);break;case c:this.allowOfflineTransmission(t);break;case l:this.setSecure(t);break;case p:this.setMeasurementLabelOrder(t)}},getLiveTransmissionMode:function(){return t},allowLiveTransmission:function(n){null!=n&&(t=n)},getOfflineTransmissionMode:function(){return e},allowOfflineTransmission:function(n){null!=n&&(e=n)},isSecure:function(){return i},setSecure:function(n){i=n},getMeasurementLabelOrder:function(){return r},setMeasurementLabelOrder:function(n){null!=n&&0<n.length&&(r=n)}}),this.reset()}i.ut=f,i.st=c,i.Kn=l,i.at=p,t.exports=i},{24:24,36:36,4:4,8:8}],7:[function(n,t,e){var r=n(24),_=n(13),g=1e3,m=864e5,o="q_dcf",w="q_dcc",y=20,b=6e3;t.exports=function(u){var e,s,i,a,f,n,c=[],l=!1;function p(n){return n-s<g&&y<=e}function v(n){return n-a<m&&b<=i}function d(n){m<n-a&&(i=0,a=n),g<n-s&&(e=0,s=n),i++,e++;var t=u.t();t.set(w,i+""),t.set(o,a+"")}function h(){var n,t=+new Date;if(l)for(;c.length;){var e=c.shift();i=e,u.I().ft(i)}else{for(var i,r,o;c.length&&!p(o=t)&&!v(o);)d(t),e=c.shift(),r=e,new _(u,u.ln(),r).send();n=t,c.length&&(f||(p(n)?f=u.getPlatformAPI().setTimeout(function(){f=null,h()},s+g-n):v(n)&&(f=u.getPlatformAPI().setTimeout(function(){f=null,h()},a+m-n))))}}r.extend(this,{ct:function(n){u.getEnabled()&&(c.push(n),h())},en:function(){u.getPlatformAPI().clearTimeout(f),c.length=0},J:function(n){l=n,u.getPlatformAPI().clearTimeout(f),h()}}),(n=u.t()).has(w)&&n.has(o)?(i=parseInt(n.get(w)),a=parseInt(n.get(o))):(i=0,a=+new Date),e=0,s=+new Date}},{13:13,24:24}],8:[function(n,t,e){var i={DEFAULT:0,NEVER:1,WIFIONLY:2,PIGGYBACK:3,DISABLED:4,valueOf:function(n){return null==n||"DEFAULT"==n?i.DEFAULT:"NEVER"==n?i.NEVER:"WIFIONLY"==n?i.WIFIONLY:"PIGGYBACK"==n?i.PIGGYBACK:"DISABLED"==n?i.DISABLED:void 0}};e.TransmissionMode=i,e.N={R:0,K:1,G:2,F:3},e.T={R:0,Y:1,H:2},e.u={l:"start",v:"view",h:"close",_:"aggregate",HIDDEN:"hidden",KEEPALIVE:"keep-alive"}},{}],9:[function(n,t,e){var a=n(36),f=n(8).u,c=n(24);t.exports=function(n){var t=this,e=null,i=NaN,r=!0,o=864e5;function u(){i=+new Date+o,s()}function s(){n.et().send(f.KEEPALIVE)}c.extend(t,{xn:function(n){(r=n)?(t.X(),t.Z()):t.cancel()},isEnabled:function(){return r},Z:function(){r&&(t.cancel(),i=+new Date+o,e=a.setInterval(u,o))},X:function(){if(r){var n=+new Date;i&&i<=n&&s()}},pause:function(){t.cancel()},cancel:function(){e&&(a.clearInterval(e),e=null)}})}},{24:24,36:36,8:8}],10:[function(n,t,e){var c=n(24),i=n(21),s=n(8).u,r=n(17),a=n(36),u=n(4),y="undefined",o=r.D,l=typeof encodeURIComponent!=y?encodeURIComponent:escape,f=function(n){return i.lt(n)?n:o},p=function(n){return n==s.l||n==s.h||n==s.v?s.v:s.HIDDEN};function v(n){var t,f={};c.extend(this,{pt:function(n){delete f[n]},vt:function(n){if(null!=n)for(var t in n)n.hasOwnProperty(t)&&this.setLabel(t,n[t])},setLabel:function(n,t){f[n]=t},getLabel:function(n){return f[n]},getLabels:function(){return f},dt:function(n){return f.hasOwnProperty(n)},ht:function(n){for(var t=[],e=c.extend({},f),i=0,r=n.length;i<r;i++){var o=n[i],u=e[o];null!=u&&""!==u&&(t.push("&",l(o),"=",l(u)),delete e[o])}for(var s in e)if(e.hasOwnProperty(s)){var a=e[s];null!=a&&""!==a&&t.push("&",l(s),"=",l(e[s]))}return 0<(t=t.join("")).length&&"&"==t.charAt(0)?t.substring(1):t},setPixelURL:function(n){t=n},getPixelURL:function(){return t}}),n&&this.setPixelURL(n.getPixelURL())}function d(n,t,e,i){if(v.call(this,n),n){null!=e&&this.setPixelURL(e),this.setLabel("c1","19"),this.setLabel("ns_ap_an",f(n.getAppName())),this.setLabel("ns_ap_pn",f(a.getPlatformName())),this.setLabel("ns_ap_pv",f(a.getRuntimeVersion())),this.setLabel("c12",n.getVisitorId()),n.Un();var r=n.getCrossPublisherId();r&&(this.setLabel("ns_ak",r),n.isCrossPublisherIdChanged()&&this.setLabel("ns_ap_ni","1")),this.setLabel("ns_ap_device",f(a.getDeviceModel())),this.setLabel("ns_ap_ar",f(a.getDeviceArchitecture())),this.setLabel("ns_radio",f(a.getConnectionType())),this.setLabel("ns_type",p(t)),this.setLabel("ns_nc","1"),this.setLabel("ns_ap_pfv",f(a.getPlatformVersion())),this.setLabel("ns_ap_pfm",f(a.getRuntimeName())),this.setLabel("ns_ap_ev",t),this.setLabel("ns_ap_ver",f(n.getAppVersion())),this.setLabel("ns_ap_sd",a.getDisplayResolution()),this.setLabel("ns_ap_res",a.getApplicationResolution()),this.setLabel("ns_ap_lang",a.getLanguage()),this.setLabel("ns_ap_sv",n.getVersion()),t==s.KEEPALIVE&&this.setLabel("ns_ap_oc",n.I()._t()+"");var o=n.gn(),u=n.mn();this.setLabel("ns_ap_id",o+""),this.setLabel("ns_ap_cs",u+""),this.setLabel("ns_ap_bi",a.getPackageName()),this.setLabel("ns_ap_jb",f(a.getDeviceJailBrokenFlag()))}}function h(n,t,e,i){d.call(this,n,t,e,i),this.setLabel("ns_ap_gs",n._n()+""),this.setLabel("ns_ap_install",n.hn()+""),this.setLabel("ns_ap_runs",n.dn()+""),i&&this.setLabel("ns_ap_csf","1"),this.setLabel("ns_ap_lastrun",n.Bn()+"");var r=n.Fn();0<r&&this.setLabel("ns_ap_miss",r.toString());var o=n.wn();o&&(this.setLabel("ns_ap_updated",o+""),n.t().remove(u.C),n.yn(null)),this.setLabel("ns_ap_jb",f(a.getDeviceJailBrokenFlag()))}d.gt=function(n,t){var e=t.wt,i=t.yt,r=t.bt;if(i=typeof i===y||i,r=typeof r===y||r,n.update(r),r){var o=n.bn(),u=n.In(e),s=n.Sn(i),a=n.Pn(e),f=n.An(i),c=n.Cn(e),l=n.kn(i),p=n.En(i),v=n.Tn(i),d=n.Nn(i),h=n.Ln(),_=n.Dn(i),g=n.Rn(i),m=n.Mn(i),w=n.On(i);t.labels.ns_ap_fg=o+"",t.labels.ns_ap_ft=u+"",t.labels.ns_ap_dft=s+"",t.labels.ns_ap_bt=a+"",t.labels.ns_ap_dbt=f+"",t.labels.ns_ap_it=c+"",t.labels.ns_ap_dit=l+"",t.labels.ns_ap_ut=h+"",t.labels.ns_ap_as=_+"",t.labels.ns_ap_das=p+"",0<=g&&(t.labels.ns_ap_aus=g+"",t.labels.ns_ap_daus=v+"",t.labels.ns_ap_uc=w+""),0<=m&&(t.labels.ns_ap_us=m+"",t.labels.ns_ap_dus=d+""),t.labels.ns_ap_usage=t.It-n.getGenesis()+""}t.labels.ns_ts=t.It+""},d.prototype=new v,d.St=function(n,t,e,i){var r=n.et(),o=r.Pt(t,e,i);return r.At(o)},h.prototype=new d,t.exports.Ct=v,t.exports.kt=d,t.exports.Et=h},{17:17,21:21,24:24,36:36,4:4,8:8}],11:[function(n,t,e){var f=n(10).kt,c=n(10).Et,l=n(36),p=n(8).u,v=n(8).T,d=n(4),h=n(14).Tt,_="start",g="foreground",m="background";t.exports=function(o){var r=this,i=0,u=[],t=!1,s=0,a={};r.Nt=function(){i++;var t=!1;return function(n){t||(t=!0,i--,n&&r.Lt())}},r.Dt=function(){if(!t){var n=r.Nt();t=!0,l.onDataFetch(function(){n(!(t=!1))},function(){n(t=!1)})}},r.Lt=function(){if(!(0<i)){for(var n=0;n<u.length;++n){var t=u[n],e=r.At(t);r.Rt(t,e)}u.length=0}},r.Mt=function(n){u.push(n),r.Dt()},r.Rt=function(n,t){o.fn().ct(t),o.S().Z()},r.send=function(n,t,e){if(n!=p._){var i=r.Pt(n,t,e);r.Mt(i)}else r.Ot(t)},r.Pt=function(n,t,e){var i={It:+new Date,Wt:n,Vt:e,wt:!1,yt:void 0,bt:void 0,labels:{}};return s++,i.labels.ns_ap_ec=s+"",n==p.l?(o.un(),i.wt=o.sn()):(i.yt=!(null!=t&&t.hasOwnProperty("ns_st_ev")&&"hb"==t.ns_st_ev),i.bt=!(null!=t&&t.hasOwnProperty("ns_st_ev"))),i.xt=o.getLabels(),i.Ut=t,null!=o.Vn()?i.Bt=o.Vn():n==p.l?i.Bt=_:o.pn()==v.H?i.Bt=g:i.Bt=m,f.gt(o,i),i},r.At=function(n){var t=null,e=n.Wt,i=n.Vt,r=n.wt;return(t=e===p.l?new c(o,e,i,r):new f(o,e,i,r)).vt(n.labels),t.vt(n.xt),t.vt(n.Ut),t.dt(d.PAGE_NAME_LABEL)||t.setLabel(d.PAGE_NAME_LABEL,n.Bt),l.processMeasurementLabels(t),t.vt(a),a={},t},r.Ot=function(n){h(a,n)}}},{10:10,14:14,36:36,4:4,8:8}],12:[function(n,t,e){var A=n(36),C=n(24),k=n(21),E=n(19),T=n(22),N=n(8).TransmissionMode,L=n(15),D=n(14).Ft,R="cs_cache_",M="CACHE_DROPPED_MEASUREMENTS",O=2e3,W=100,V=10,x=30,U=31,B="http://udm.scorecardresearch.com/offline",F="https://udm.scorecardresearch.com/offline";function i(u,o){var t,e,i,r,s,a,f,c,l,p,n=this,v=0;function d(){if(u.getEnabled()&&A.isConnectionAvailable()&&!n.jt()&&null!=u.getCustomerC2()){if(!(i<=c))return!0;if(1e3*r*60-(+new Date-l)<=0)return!(l=c=0)}return!1}function h(){v=0,null!=f&&(f=null)}function _(){for(var n,t=m(),e=!1,i=t.length;0<i;i--){var r=(n=t[i-1],Number(n.substring(o.length)));e?y(t[i-1],!0):e=S(r)}}function g(n){if(u.getEnabled()){var t=u.t();t.has(M)&&(n+=Number(t.get(M))),t.set(M,n+"")}}function m(){return null==a&&(a=D.Gt()),a}function w(n){var t=o+L.Kt(n,"ns_ts");D.qt(u,t,n),null==a&&(a=[]),a.push(t),h()}function y(n,t){if(null!=n){t&&(i=n,(r=u.t()).has(i)&&g(Number(r.get(i)))),D.deleteFile(u,n);var e=E.indexOf(n,a);0<=e&&a.splice(e,1)}var i,r}function b(){return null!=a&&0<a.length?a[a.length-1]:null}function I(n){var t=u.t(),e=0;return null!=n&&(e=t.has(n)?Number(t.get(n)):D.Ht(u,n).length),e}function S(n){var t=+new Date;return 24*s*60*60*1e3-(t-n)<=0}function P(t,e){var i=u.t();if(d()){var n=null,r=null;if(null==f&&null!=(n=function(n){for(var t=0,e=D.Ht(u,n),i=!1;t<e.length&&!(i=!S(Number(L.Kt(e[t],"ns_ts"))));t++);return i?(g(t),e=e.slice(t,e.length)):(y(n,!0),e=null),e}(r=b()))&&0<n.length){var o=i.has(M)?i.get(M):"0";f=L.Yt(n,o)}if(null!=f&&0<f.length)return void A.httpPost(function(n){var t,e=!0;-1==(t=k.tn(p)&&k.lt(p)?p:n.isSecure()?F:B).indexOf("?")&&(t+="?",e=!1);var i=u.getCustomerC2();k.lt(i)&&(e&&(t+="&"),t+="c2="+i,e=!0);var r="JetportGotAMaskOfThe"+u.g()+"S.D_K-";return r=T(r),k.lt(r)&&(e&&(t+="&"),t+="s="+r),t.toLowerCase()}(t),f,function(n){if(200==n)return c++,y(r,!1),h(),l=+new Date,i.remove(M),void A.setTimeout(function(){P(t,e)},0);e()})}e()}o=o||R,C.extend(this,{flush:function(n,t){u.getEnabled()&&(_(),1e3*r*60-(+new Date-v)<=0?(v=0,P(n,t)):t())},setCacheMaxMeasurements:function(n){t=n},getCacheMaxMeasurements:function(){return t},setCacheMaxBatchFiles:function(n){n<=0||(e=n)},getCacheMaxBatchFiles:function(){return e},Yn:function(n){i=n},Jn:function(){return i},Qn:function(n){r=n},Xn:function(){return r},setCacheMeasurementExpiry:function(n){s=n},getCacheMeasurementExpiry:function(){return s},ft:function(n){if(u.getEnabled()){var t=u.ln();if("string"!=typeof n&&(n=n.ht(t.getMeasurementLabelOrder())),t.getOfflineTransmissionMode()!=N.DISABLED&&null!=u.getCustomerC2()&&k.lt(L.Kt(n,"ns_ts"))){var e=b();if(null!=e)I(e)<this.getCacheMaxBatchFiles()?(n="\n"+n,D.qt(u,e,n),h()):(m().length>=this.getCacheMaxMeasurements()/this.getCacheMaxBatchFiles()&&y(null!=a&&0<a.length?a[0]:null,!0),w(n));else w(n)}}},_t:function(){var n=I(b());return 0<m().length&&(n+=(m().length-1)*this.getCacheMaxBatchFiles()),n},jt:function(){return 0==this._t()},clear:function(){for(var n=m(),t=n.length;0<t;t--)y(n[t-1],!0);u.t().remove(M)},tt:function(n){p=n}}),this.setCacheMaxMeasurements(O),this.setCacheMaxBatchFiles(W),this.Yn(V),this.Qn(x),this.setCacheMeasurementExpiry(U),_()}i.qn=O,i.Hn=W,i.zn=V,i.Zn=x,i.$n=U,e.L=i},{14:14,15:15,19:19,21:21,22:22,24:24,36:36,8:8}],13:[function(n,t,e){var f=n(24),c=n(20),l=n(36),p=n(4),v=n(8).TransmissionMode;t.exports=function(t,n,e,i){var r=this,o=n,u=e;function s(n){200!=n&&(302!=n&&301!=n||t.it())&&t.I().ft(u.ht(o.getMeasurementLabelOrder()),o),i&&i()}function a(){var n=r.process(u.getPixelURL());l.httpGet(n,s)}f.extend(r,{process:function(n){n+=u.ht(o.getMeasurementLabelOrder());var t=c.Jt()?p.A:p.P;if(n.length>t&&0<n.indexOf("&")){var e=n.substring(0,t-8).lastIndexOf("&"),i=encodeURIComponent(n.substring(e+1));n=n.substring(0,e)+"&ns_cut="+i}return n.length>t&&(n=n.substring(0,t)),n},send:function(){var n=o.getLiveTransmissionMode();return n==v.NEVER||n==v.DISABLED?(t.I().ft(u.ht(o.getMeasurementLabelOrder()),o),i&&i()):o.getOfflineTransmissionMode()!=v.NEVER&&0<t.I()._t()?t.I().flush(o,a):a(),!0}})}},{20:20,24:24,36:36,4:4,8:8}],14:[function(n,t,e){var o=n(36),u="cache_dir",i={Gt:function(){return o.IO.dir(u)||[]},qt:function(n,t,e){var i=n.t(),r=Number(i.get(t))||0;o.IO.append(u,t,e),r++,i.set(t,r+"")},deleteFile:function(n,t){o.IO.deleteFile(u,t),n.t().remove(t)},Ht:function(n,t){var e=o.IO.read(u,t);return e?e.split("\n"):[]}};function s(n){return!((n+="").indexOf(",")<0)&&n.indexOf(" ")<0}function a(n){return!isNaN(parseInt(n))&&isFinite(n)}function f(n,t){for(var e=t,i=n.split(","),r=0,o=i.length;r<o;r++){var u=i[r];if(0<u.length)if(e.indexOf(u)<0)0==e.length?e+=u+":1":e+=";"+u+":1";else for(var s=e.split(";"),a=0,f=s.length;a<f;a++)if(0<=s[a].indexOf(u)){var c=s[a].split(":"),l=Number(c[1]);l++;var p=c[0]+":"+l,v=e.indexOf(s[a]);e=e.substring(0,v)+p+e.substring(v+s[a].length)}}return e}e.Tt=function(n,t){for(var e in t)if(t.hasOwnProperty(e)){var i=n[e],r=t[e];null==i?s(r)?n[e]=f(r,""):n[e]=r:a(i)&&a(r)?n[e]=parseInt(i)+parseInt(r)+"":s(r)?n[e]=f(r,i):(o=r,0<=i.indexOf(o)||(n[e]=i+","+r))}var o},e.Ft=i},{36:36}],15:[function(n,t,e){var o=n(22),l=n(21),p=[],v=-1,d=-1,f=["c12","c1","ns_ap_an","ns_ap_pn","ns_ap_pv","ns_ap_device","ns_ak"],h=["c12","c1","ns_ap_an","ns_ap_pn","ns_ap_pv","ns_ap_device","ns_ts","ns_ak"],_=(1<<h.length)-1,c=-1;function g(n,t){v=d=-1;var e=0;do{if(0<=(e=n.indexOf(t,e))){var i=e+t.length;if((0==e||"&"==n.charAt(e-1))&&i<n.length&&"="==n.charAt(i))return v=i+1,void(-1==(d=n.indexOf("&",v))&&(d=n.length));e=i+1}}while(0<=e&&e<n.length)}function u(n,t){var e=0;if(g(n,"ns_ts"),-1!=v&&v<d){t.push('<event t="',n.substring(v,d),'">');for(var i,r,o=0,u=0;o<n.length;){if(-1==(i=n.indexOf("&",o))&&(i=n.length),o<i&&o<(r=n.indexOf("=",o))){var s=!0;if(e!=_)for(var a=0,f=h.length;a<f;a++){var c=1<<a;if(0==(e&c)&&h[a].length==r-o&&l.zt(h[a],0,n,o,h[a].length)){s=!1,e|=c;break}}s&&(0<u&&(p.push("&"),t.push("&")),p.push(n.substring(o,i)),t.push(n.substring(o,i)),u++)}o=i+1}t.push("</event>")}}var i={Yt:function(n,t){var e,i,r=['<?xml version="1.0" encoding="UTF-8" ?>'];return function(n,t,e){var i,r,o,u=+new Date+"";n.push('<events t="',u,'" ');for(var s=0,a=f.length;s<a;s++)i=n,r=t,o=f[s],g(r,o),-1!=v&&v<d&&i.push(o,'="',r.substring(v,d),'" ');n.push('dropped="',e,'" md5="','">'),c=n.length-1}(r,n[0],t),function(n,t){p=[];for(var e=0,i=n.length;e<i;e++)l.lt(n[e])&&u(n[e],t)}(n,r),e=r,i=o(p.join("")).toLowerCase(),e.splice(c,0,i),r.push("</events>"),r.join("")},Kt:function(n,t){return g(n,t),-1!=v&&v<d?n.substring(v,d):null}};t.exports=i},{21:21,22:22}],16:[function(t,r,n){(function(n){var e=t(24),i=r.exports=n.ns_||{};"undefined"!=typeof window&&(window.ns_=i),i.comScore=t(2),i.loadModule=i.loadModule||function(n){for(var t in n)"ns_"!==t&&e.extend(i,n);return n.ns_=i},i.PlatformAPIs=t(32),t(39),i.StreamingAnalytics=t(67),i.ReducedRequirementsStreamingAnalytics=t(64)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2,24:24,32:32,39:39,64:64,67:67}],17:[function(n,t,e){t.exports={D:"unknown",Qt:"0x0",Xt:"-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD0+fCVxGq3Bk24jUKO1PzsiUs3\nvqww6zR4n2e3AweVLUAgsrDRbAWJ/EjZm1WBLBVNMiTLpSAkV6sjOIrUs03xdUEj\nQZJHwOGK+MfzFaZukoo0qAsEMPwQ5posv0JdkBdUGhKchPk6+NYmD6Hb44Lkp7/a\nQnVeWzvfAPQyTJR5wQIDAQAB\n-----END PUBLIC KEY-----"}},{}],18:[function(n,t,e){var a=1e4,f="undefined",c="function";t.exports=function(e,o){var n=this,i="comScore",r=[];function t(n){n=n||[];var t=[i,+new Date];return e&&t.push(e),n=Array.prototype.slice.call(n),t=t.concat(n)}function u(n){var t,e,i;if("boolean"==typeof o||!o)return!!o;if(i=n.join(" "),o instanceof Array&&0<o.length){for(t=0;t<o.length;++t)if((e=o[t])instanceof RegExp&&e.test(i))return!0;return!1}if("object"==typeof o){var r=!1;if(o.hide instanceof Array)for(t=0;t<o.hide.length;++t)if((e=o.hide[t])instanceof RegExp&&e.test(i)){r=!0;break}if(o.show instanceof Array)for(t=0;t<o.show.length;++t)if((e=o.show[t])instanceof RegExp&&e.test(i))return!0;return!r&&!o.show}return!0}function s(n){var t=r.length;if(a<t||"object"==typeof o&&o.max&&t>o.max){var e="object"==typeof o&&o.max||a;r.splice(0,r.length-e+1)}r.push(n)}n.log=function(){var n=t(arguments);s(n),typeof console!=f&&typeof console.log==c&&u(n)&&console.log.apply(console,n)},n.warn=function(){var n=t(arguments);s(n),typeof console!=f&&typeof console.warn==c&&u(n)&&console.warn.apply(console,n)},n.error=function(){var n=t(arguments);s(n),typeof console!=f&&typeof console.error==c&&u(n)&&console.error.apply(console,n)},n.Zt=function(n){for(var t=["API call to:",n],e=1;e<arguments.length;++e)t.push("arg"+e+":",arguments[e]);this.log.apply(this,t)},n.$t=function(){var n=["Trace log:"];n.push.apply(n,Array.prototype.slice.call(arguments)),this.log.apply(this,n)},n.ne=function(n,t){var e=["Deprecated API:",n,"is deprecated and will be eventually removed."];t&&e.push("Use",t,"instead."),this.warn.apply(this,e)},n.te=function(){return r}}},{}],19:[function(n,t,e){var r={},s="undefined";r.indexOf=function(e,n){var i=-1;return r.forEach(n,function(n,t){n==e&&(i=t)}),i},r.forEach=function(n,t,e){try{if("function"==typeof t)if(e=typeof e!=s?e:null,"number"!=typeof n.length||typeof n[0]==s){var i=typeof n.__proto__!=s;for(var r in n)n.hasOwnProperty(r)&&(!i||i&&typeof n.__proto__[r]==s)&&"function"!=typeof n[r]&&t.call(e,n[r],r)}else for(var o=0,u=n.length;o<u;o++)t.call(e,n[o],o)}catch(n){}},e.indexOf=r.indexOf,e.forEach=r.forEach},{}],20:[function(n,t,e){var i={},r="undefined",o=typeof document!=r&&document||void 0;i.ee=function(){if(!o)return!1;var n=!1;return typeof o.hidden!==r?n=!0:typeof o.mozHidden!==r?n=!0:typeof o.msHidden!==r?n=!0:typeof o.webkitHidden!==r&&(n=!0),function(){return n}}(),i.ie=function(){if(!o)return null;var n,t,e;typeof o.hidden!==r?(n="hidden",t="visibilitychange",e="visibilityState"):typeof o.mozHidden!==r?(n="mozHidden",t="mozvisibilitychange",e="mozVisibilityState"):typeof o.msHidden!==r?(n="msHidden",t="msvisibilitychange",e="msVisibilityState"):typeof o.webkitHidden!==r&&(n="webkitHidden",t="webkitvisibilitychange",e="webkitVisibilityState");var i={hidden:n,re:t,state:e};return function(){return i}}(),i.oe=function(){if(!o)return null;var n=i.ie();return function(){return o[n.hidden]}}(),i.ue=function(){if(!navigator)return"";var n,t,e=navigator.userAgent||"",i=navigator.appName||"";return-1!=(t=e.indexOf("Opera"))||-1!=(t=e.indexOf("OPR/"))?i="Opera":-1!=(t=e.indexOf("Android"))?i="Android":-1!=(t=e.indexOf("Chrome"))?i="Chrome":-1!=(t=e.indexOf("Safari"))?i="Safari":-1!=(t=e.indexOf("Firefox"))?i="Firefox":-1!=(t=e.indexOf("IEMobile"))?i="Internet Explorer Mobile":"Microsoft Internet Explorer"==i||"Netscape"==i?i="Internet Explorer":(n=e.lastIndexOf(" ")+1)<(t=e.lastIndexOf("/"))?(i=e.substring(n,t)).toLowerCase()==i.toUpperCase()&&(i=navigator.appName):i="unknown",i},i.se=function(){if(!navigator)return"";var n,t,e,i=navigator.userAgent||"",r=navigator.appName||"",o=navigator.appVersion?""+parseFloat(navigator.appVersion):"";return-1!=(t=i.indexOf("Opera"))?(o=i.substring(t+6),-1!=(t=i.indexOf("Version"))&&(o=i.substring(t+8))):-1!=(t=i.indexOf("OPR/"))?o=i.substring(t+4):-1!=(t=i.indexOf("Android"))?o=i.substring(t+11):-1!=(t=i.indexOf("Chrome"))?o=i.substring(t+7):-1!=(t=i.indexOf("Safari"))?(o=i.substring(t+7),-1!=(t=i.indexOf("Version"))&&(o=i.substring(t+8))):-1!=(t=i.indexOf("Firefox"))?o=i.substring(t+8):"Microsoft Internet Explorer"==r?null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(i)&&(o=parseFloat(RegExp.$1)):"Netscape"==r?null!=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(i)&&(o=parseFloat(RegExp.$1)):o=i.lastIndexOf(" ")+1<(t=i.lastIndexOf("/"))?i.substring(t+1):"unknown",-1!=(e=(o=o.toString()).indexOf(";"))&&(o=o.substring(0,e)),-1!=(e=o.indexOf(" "))&&(o=o.substring(0,e)),-1!=(e=o.indexOf(")"))&&(o=o.substring(0,e)),n=parseInt(""+o,10),isNaN(n)&&(o=""+parseFloat(navigator.appVersion)),o},i.Jt=function(){return typeof window!=r&&window.ae,!0},i.fe=function(){return typeof window!=r&&o},i.ce=function(){return!!o&&"s"===o.location.href.charAt(4)},t.exports.ee=i.ee,t.exports.ie=i.ie,t.exports.oe=i.oe,t.exports.ue=i.ue,t.exports.se=i.se,t.exports.Jt=i.Jt,t.exports.fe=i.fe,t.exports.ce=i.ce},{}],21:[function(n,t,e){var i,r=r||{},o="undefined";r.le=(i=1,function(){return+new Date+"_"+i++}),r.jt=function(n){return null==n||""===n||n instanceof Array&&0===n.length},r.lt=function(n){return!this.jt(n)},r.pe=function(n,t){return t=this.tn(t)?t:"",this.tn(n)?n:t},r.ve=function(n){return typeof n!=o&&("string"==typeof n?"true"===(n=n.toLowerCase())||"1"===n||"on"===n:!!n)},r.zt=function(n,t,e,i,r){if(t<0||i<0||t+r>n.length||i+r>e.length)return!1;for(;0<=--r;){if(n.charAt(t++)!=e.charAt(i++))return!1}return!0},r.tn=function(n){return typeof n!=o&&null!=n},t.exports.tn=r.tn,t.exports.zt=r.zt,t.exports.ve=r.ve,t.exports.pe=r.pe,t.exports.lt=r.lt,t.exports.jt=r.jt,t.exports.le=r.le},{}],22:[function(n,t,e){var i={};i.de=function(){function o(n,t){var e=n[0],i=n[1],r=n[2],o=n[3];i=c(i=c(i=c(i=c(i=f(i=f(i=f(i=f(i=a(i=a(i=a(i=a(i=u(i=u(i=u(i=u(i,r=u(r,o=u(o,e=u(e,i,r,o,t[0],7,-680876936),i,r,t[1],12,-389564586),e,i,t[2],17,606105819),o,e,t[3],22,-1044525330),r=u(r,o=u(o,e=u(e,i,r,o,t[4],7,-176418897),i,r,t[5],12,1200080426),e,i,t[6],17,-1473231341),o,e,t[7],22,-45705983),r=u(r,o=u(o,e=u(e,i,r,o,t[8],7,1770035416),i,r,t[9],12,-1958414417),e,i,t[10],17,-42063),o,e,t[11],22,-1990404162),r=u(r,o=u(o,e=u(e,i,r,o,t[12],7,1804603682),i,r,t[13],12,-40341101),e,i,t[14],17,-1502002290),o,e,t[15],22,1236535329),r=a(r,o=a(o,e=a(e,i,r,o,t[1],5,-165796510),i,r,t[6],9,-1069501632),e,i,t[11],14,643717713),o,e,t[0],20,-373897302),r=a(r,o=a(o,e=a(e,i,r,o,t[5],5,-701558691),i,r,t[10],9,38016083),e,i,t[15],14,-660478335),o,e,t[4],20,-405537848),r=a(r,o=a(o,e=a(e,i,r,o,t[9],5,568446438),i,r,t[14],9,-1019803690),e,i,t[3],14,-187363961),o,e,t[8],20,1163531501),r=a(r,o=a(o,e=a(e,i,r,o,t[13],5,-1444681467),i,r,t[2],9,-51403784),e,i,t[7],14,1735328473),o,e,t[12],20,-1926607734),r=f(r,o=f(o,e=f(e,i,r,o,t[5],4,-378558),i,r,t[8],11,-2022574463),e,i,t[11],16,1839030562),o,e,t[14],23,-35309556),r=f(r,o=f(o,e=f(e,i,r,o,t[1],4,-1530992060),i,r,t[4],11,1272893353),e,i,t[7],16,-155497632),o,e,t[10],23,-1094730640),r=f(r,o=f(o,e=f(e,i,r,o,t[13],4,681279174),i,r,t[0],11,-358537222),e,i,t[3],16,-722521979),o,e,t[6],23,76029189),r=f(r,o=f(o,e=f(e,i,r,o,t[9],4,-640364487),i,r,t[12],11,-421815835),e,i,t[15],16,530742520),o,e,t[2],23,-995338651),r=c(r,o=c(o,e=c(e,i,r,o,t[0],6,-198630844),i,r,t[7],10,1126891415),e,i,t[14],15,-1416354905),o,e,t[5],21,-57434055),r=c(r,o=c(o,e=c(e,i,r,o,t[12],6,1700485571),i,r,t[3],10,-1894986606),e,i,t[10],15,-1051523),o,e,t[1],21,-2054922799),r=c(r,o=c(o,e=c(e,i,r,o,t[8],6,1873313359),i,r,t[15],10,-30611744),e,i,t[6],15,-1560198380),o,e,t[13],21,1309151649),r=c(r,o=c(o,e=c(e,i,r,o,t[4],6,-145523070),i,r,t[11],10,-1120210379),e,i,t[2],15,718787259),o,e,t[9],21,-343485551),n[0]=p(e,n[0]),n[1]=p(i,n[1]),n[2]=p(r,n[2]),n[3]=p(o,n[3])}function s(n,t,e,i,r,o){return t=p(p(t,n),p(i,o)),p(t<<r|t>>>32-r,e)}function u(n,t,e,i,r,o,u){return s(t&e|~t&i,n,t,r,o,u)}function a(n,t,e,i,r,o,u){return s(t&i|e&~i,n,t,r,o,u)}function f(n,t,e,i,r,o,u){return s(t^e^i,n,t,r,o,u)}function c(n,t,e,i,r,o,u){return s(e^(t|~i),n,t,r,o,u)}function l(n){var t,e=[];for(t=0;t<64;t+=4)e[t>>2]=n.charCodeAt(t)+(n.charCodeAt(t+1)<<8)+(n.charCodeAt(t+2)<<16)+(n.charCodeAt(t+3)<<24);return e}var i="0123456789abcdef".split("");function e(n){for(var t="",e=0;e<4;e++)t+=i[n>>8*e+4&15]+i[n>>8*e&15];return t}function n(n){return function(n){for(var t=0;t<n.length;t++)n[t]=e(n[t]);return n.join("")}(function(n){var t,e=n.length,i=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=n.length;t+=64)o(i,l(n.substring(t-64,t)));n=n.substring(t-64);var r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<n.length;t++)r[t>>2]|=n.charCodeAt(t)<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),55<t)for(o(i,r),t=0;t<16;t++)r[t]=0;return r[14]=8*e,o(i,r),i}(n))}function p(n,t){return n+t&4294967295}if("5d41402abc4b2a76b9719d911017c592"!=n("hello"))function p(n,t){var e=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(e>>16)<<16|65535&e}return n}(),t.exports=i.de},{}],23:[function(n,t,e){var o=function(n){if("object"!=typeof n)return n;var t;if(n instanceof Array){t=[];for(var e=0,i=n.length;e<i;e++)t[e]=o(n[e]);return t}for(var r in t={},n)n.hasOwnProperty(r)&&(t[r]=n[r]);return t};t.exports=o},{}],24:[function(n,t,e){var i=i||{};i.filter=function(n,t){var e={};for(var i in t)t.hasOwnProperty(i)&&n(t[i])&&(e[i]=t[i]);return e},i.extend=function(n){var t,e=arguments.length;n=n||{};for(var i=1;i<e;i++)if(t=arguments[i])for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n},t.exports.filter=i.filter,t.exports.extend=i.extend},{}],25:[function(n,t,e){var K=n(17),i={};i.encrypt=function(){var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=function(n,t){var e=i.indexOf(n.charAt(t));if(-1===e)throw new Error;return e},r=function(n){var t,e,i,r=(n=""+n).length;if(0===r)return n;if(r%4!=0)throw new Error;t=0,"="===n.charAt(r-1)&&(t=1,"="===n.charAt(r-2)&&(t=2),r-=4);var o=[];for(e=0;e<r;e+=4)i=u(n,e)<<18|u(n,e+1)<<12|u(n,e+2)<<6|u(n,e+3),o.push(String.fromCharCode(i>>16,i>>8&255,255&i));switch(t){case 1:i=u(n,e)<<18|u(n,e+1)<<12|u(n,e+2)<<6,o.push(String.fromCharCode(i>>16,i>>8&255));break;case 2:i=u(n,e)<<18|u(n,e+1)<<12,o.push(String.fromCharCode(i>>16))}return o.join("")};function w(n,t,e){null!=n&&("number"==typeof n?this.he(n,t,e):null==t&&"string"!=typeof n?this._e(n,256):this._e(n,t))}function y(){return new w(null)}w.prototype.ge=function(n,t,e,i,r,o){for(var u=16383&t,s=t>>14;0<=--o;){var a=16383&this[n],f=this[n++]>>14,c=s*a+f*u;r=((a=u*a+((16383&c)<<14)+e[i]+r)>>28)+(c>>14)+s*f,e[i++]=268435455&a}return r},w.prototype.me=28,w.prototype.we=268435455,w.prototype.ye=1<<28;w.prototype.be=Math.pow(2,52),w.prototype.Ie=24,w.prototype.Se=4;var n,t,e="0123456789abcdefghijklmnopqrstuvwxyz",o=[];for(n="0".charCodeAt(0),t=0;t<=9;++t)o[n++]=t;for(n="a".charCodeAt(0),t=10;t<36;++t)o[n++]=t;for(n="A".charCodeAt(0),t=10;t<36;++t)o[n++]=t;function a(n){return e.charAt(n)}function f(n,t){var e=o[n.charCodeAt(t)];return null==e?-1:e}function _(n){var t=y();return t.Pe(n),t}function b(n){var t,e=1;return 0!=(t=n>>>16)&&(n=t,e+=16),0!=(t=n>>8)&&(n=t,e+=8),0!=(t=n>>4)&&(n=t,e+=4),0!=(t=n>>2)&&(n=t,e+=2),0!=(t=n>>1)&&(n=t,e+=1),e}function g(n){this.Ae=n}function m(n){this.Ae=n,this.Ce=n.ke(),this.Ee=32767&this.Ce,this.Te=this.Ce>>15,this.Ne=(1<<n.me-15)-1,this.Le=2*n.De}function s(n,t){return n&t}function c(n,t){return n|t}function l(n,t){return n^t}function p(n,t){return n&~t}function v(n){if(0==n)return-1;var t=0;return 0==(65535&n)&&(n>>=16,t+=16),0==(255&n)&&(n>>=8,t+=8),0==(15&n)&&(n>>=4,t+=4),0==(3&n)&&(n>>=2,t+=2),0==(1&n)&&++t,t}function d(n){for(var t=0;0!=n;)n&=n-1,++t;return t}function h(){}function I(n){return n}function S(n){this.r2=y(),this.Re=y(),w.ONE.Me(2*n.De,this.r2),this.Oe=this.r2.We(n),this.Ae=n}g.prototype.Ve=function(n){return n.xe<0||0<=n.Ue(this.Ae)?n.Be(this.Ae):n},g.prototype.Fe=function(n){return n},g.prototype.reduce=function(n){n.je(this.Ae,null,n)},g.prototype.Ge=function(n,t,e){n.Ke(t,e),this.reduce(e)},g.prototype.qe=function(n,t){n.He(t),this.reduce(t)},m.prototype.Ve=function(n){var t=y();return n.abs().Me(this.Ae.De,t),t.je(this.Ae,null,t),n.xe<0&&0<t.Ue(w.ZERO)&&this.Ae.Ye(t,t),t},m.prototype.Fe=function(n){var t=y();return n.Je(t),this.reduce(t),t},m.prototype.reduce=function(n){for(;n.De<=this.Le;)n[n.De++]=0;for(var t=0;t<this.Ae.De;++t){var e=32767&n[t],i=e*this.Ee+((e*this.Te+(n[t]>>15)*this.Ee&this.Ne)<<15)&n.we;for(n[e=t+this.Ae.De]+=this.Ae.ge(0,i,n,t,0,this.Ae.De);n[e]>=n.ye;)n[e]-=n.ye,n[++e]++}n.ze(),n.Qe(this.Ae.De,n),0<=n.Ue(this.Ae)&&n.Ye(this.Ae,n)},m.prototype.Ge=function(n,t,e){n.Ke(t,e),this.reduce(e)},m.prototype.qe=function(n,t){n.He(t),this.reduce(t)},w.prototype.Je=function(n){for(var t=this.De-1;0<=t;--t)n[t]=this[t];n.De=this.De,n.xe=this.xe},w.prototype.Pe=function(n){this.De=1,this.xe=n<0?-1:0,0<n?this[0]=n:n<-1?this[0]=n+DV:this.De=0},w.prototype._e=function(n,t){var e;if(16==t)e=4;else if(8==t)e=3;else if(256==t)e=8;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return void this.Xe(n,t);e=2}this.De=0,this.xe=0;for(var i=n.length,r=!1,o=0;0<=--i;){var u=8==e?255&n[i]:f(n,i);u<0?"-"==n.charAt(i)&&(r=!0):(r=!1,0==o?this[this.De++]=u:o+e>this.me?(this[this.De-1]|=(u&(1<<this.me-o)-1)<<o,this[this.De++]=u>>this.me-o):this[this.De-1]|=u<<o,(o+=e)>=this.me&&(o-=this.me))}8==e&&0!=(128&n[0])&&(this.xe=-1,0<o&&(this[this.De-1]|=(1<<this.me-o)-1<<o)),this.ze(),r&&w.ZERO.Ye(this,this)},w.prototype.ze=function(){for(var n=this.xe&this.we;0<this.De&&this[this.De-1]==n;)--this.De},w.prototype.Me=function(n,t){var e;for(e=this.De-1;0<=e;--e)t[e+n]=this[e];for(e=n-1;0<=e;--e)t[e]=0;t.De=this.De+n,t.xe=this.xe},w.prototype.Qe=function(n,t){for(var e=n;e<this.De;++e)t[e-n]=this[e];t.De=Math.max(this.De-n,0),t.xe=this.xe},w.prototype.Ze=function(n,t){var e,i=n%this.me,r=this.me-i,o=(1<<r)-1,u=Math.floor(n/this.me),s=this.xe<<i&this.we;for(e=this.De-1;0<=e;--e)t[e+u+1]=this[e]>>r|s,s=(this[e]&o)<<i;for(e=u-1;0<=e;--e)t[e]=0;t[u]=s,t.De=this.De+u+1,t.xe=this.xe,t.ze()},w.prototype.$e=function(n,t){t.xe=this.xe;var e=Math.floor(n/this.me);if(e>=this.De)t.De=0;else{var i=n%this.me,r=this.me-i,o=(1<<i)-1;t[0]=this[e]>>i;for(var u=e+1;u<this.De;++u)t[u-e-1]|=(this[u]&o)<<r,t[u-e]=this[u]>>i;0<i&&(t[this.De-e-1]|=(this.xe&o)<<r),t.De=this.De-e,t.ze()}},w.prototype.Ye=function(n,t){for(var e=0,i=0,r=Math.min(n.De,this.De);e<r;)i+=this[e]-n[e],t[e++]=i&this.we,i>>=this.me;if(n.De<this.De){for(i-=n.xe;e<this.De;)i+=this[e],t[e++]=i&this.we,i>>=this.me;i+=this.xe}else{for(i+=this.xe;e<n.De;)i-=n[e],t[e++]=i&this.we,i>>=this.me;i-=n.xe}t.xe=i<0?-1:0,i<-1?t[e++]=this.ye+i:0<i&&(t[e++]=i),t.De=e,t.ze()},w.prototype.Ke=function(n,t){var e=this.abs(),i=n.abs(),r=e.De;for(t.De=r+i.De;0<=--r;)t[r]=0;for(r=0;r<i.De;++r)t[r+e.De]=e.ge(0,i[r],t,r,0,e.De);t.xe=0,t.ze(),this.xe!=n.xe&&w.ZERO.Ye(t,t)},w.prototype.He=function(n){for(var t=this.abs(),e=n.De=2*t.De;0<=--e;)n[e]=0;for(e=0;e<t.De-1;++e){var i=t.ge(e,t[e],n,2*e,0,1);(n[e+t.De]+=t.ge(e+1,2*t[e],n,2*e+1,i,t.De-e-1))>=t.ye&&(n[e+t.De]-=t.ye,n[e+t.De+1]=1)}0<n.De&&(n[n.De-1]+=t.ge(e,t[e],n,2*e,0,1)),n.xe=0,n.ze()},w.prototype.je=function(n,t,e){var i=n.abs();if(!(i.De<=0)){var r=this.abs();if(r.De<i.De)return null!=t&&t.Pe(0),void(null!=e&&this.Je(e));null==e&&(e=y());var o=y(),u=this.xe,s=n.xe,a=this.me-b(i[i.De-1]);0<a?(i.Ze(a,o),r.Ze(a,e)):(i.Je(o),r.Je(e));var f=o.De,c=o[f-1];if(0!=c){var l=c*(1<<this.Ie)+(1<f?o[f-2]>>this.Se:0),p=this.be/l,v=(1<<this.Ie)/l,d=1<<this.Se,h=e.De,_=h-f,g=null==t?y():t;for(o.Me(_,g),0<=e.Ue(g)&&(e[e.De++]=1,e.Ye(g,e)),w.ONE.Me(f,g),g.Ye(o,o);o.De<f;)o[o.De++]=0;for(;0<=--_;){var m=e[--h]==c?this.we:Math.floor(e[h]*p+(e[h-1]+d)*v);if((e[h]+=o.ge(0,m,e,_,0,f))<m)for(o.Me(_,g),e.Ye(g,e);e[h]<--m;)e.Ye(g,e)}null!=t&&(e.Qe(f,t),u!=s&&w.ZERO.Ye(t,t)),e.De=f,e.ze(),0<a&&e.$e(a,e),u<0&&w.ZERO.Ye(e,e)}}},w.prototype.ke=function(){if(this.De<1)return 0;var n=this[0];if(0==(1&n))return 0;var t=3&n;return 0<(t=(t=(t=(t=t*(2-(15&n)*t)&15)*(2-(255&n)*t)&255)*(2-((65535&n)*t&65535))&65535)*(2-n*t%this.ye)%this.ye)?this.ye-t:-t},w.prototype.ni=function(){return 0==(0<this.De?1&this[0]:this.xe)},w.prototype.exp=function(n,t){if(4294967295<n||n<1)return w.ONE;var e=y(),i=y(),r=t.Ve(this),o=b(n)-1;for(r.Je(e);0<=--o;)if(t.qe(e,i),0<(n&1<<o))t.Ge(i,r,e);else{var u=e;e=i,i=u}return t.Fe(e)},w.prototype.toString=function(n){if(this.xe<0)return"-"+this.ti().toString(n);var t;if(16==n)t=4;else if(8==n)t=3;else if(2==n)t=1;else if(32==n)t=5;else{if(4!=n)return this.ei(n);t=2}var e,i=(1<<t)-1,r=!1,o="",u=this.De,s=this.me-u*this.me%t;if(0<u--)for(s<this.me&&0<(e=this[u]>>s)&&(r=!0,o=a(e));0<=u;)s<t?(e=(this[u]&(1<<s)-1)<<t-s,e|=this[--u]>>(s+=this.me-t)):(e=this[u]>>(s-=t)&i,s<=0&&(s+=this.me,--u)),0<e&&(r=!0),r&&(o+=a(e));return r?o:"0"},w.prototype.ti=function(){var n=y();return w.ZERO.Ye(this,n),n},w.prototype.abs=function(){return this.xe<0?this.ti():this},w.prototype.Ue=function(n){var t=this.xe-n.xe;if(0!=t)return t;var e=this.De;if(0!=(t=e-n.De))return this.xe<0?-t:t;for(;0<=--e;)if(0!=(t=this[e]-n[e]))return t;return 0},w.prototype.ii=function(){return this.De<=0?0:this.me*(this.De-1)+b(this[this.De-1]^this.xe&this.we)},w.prototype.Be=function(n){var t=y();return this.abs().je(n,null,t),this.xe<0&&0<t.Ue(w.ZERO)&&n.Ye(t,t),t},w.prototype.ri=function(n,t){var e;return e=n<256||t.ni()?new g(t):new m(t),this.exp(n,e)},w.ZERO=_(0),w.ONE=_(1),h.prototype.Ve=I,h.prototype.Fe=I,h.prototype.Ge=function(n,t,e){n.Ke(t,e)},h.prototype.qe=function(n,t){n.He(t)},S.prototype.Ve=function(n){if(n.xe<0||n.De>2*this.Ae.De)return n.Be(this.Ae);if(n.Ue(this.Ae)<0)return n;var t=y();return n.Je(t),this.reduce(t),t},S.prototype.Fe=function(n){return n},S.prototype.reduce=function(n){for(n.Qe(this.Ae.De-1,this.r2),n.De>this.Ae.De+1&&(n.De=this.Ae.De+1,n.ze()),this.Oe.oi(this.r2,this.Ae.De+1,this.Re),this.Ae.ui(this.Re,this.Ae.De+1,this.r2);n.Ue(this.r2)<0;)n.si(1,this.Ae.De+1);for(n.Ye(this.r2,n);0<=n.Ue(this.Ae);)n.Ye(this.Ae,n)},S.prototype.Ge=function(n,t,e){n.Ke(t,e),this.reduce(e)},S.prototype.qe=function(n,t){n.He(t),this.reduce(t)};var P=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],A=(1<<26)/P[P.length-1];function C(){this.ai=0,this.fi=0,this.ci=[]}w.prototype.li=function(n){return Math.floor(Math.LN2*this.me/Math.log(n))},w.prototype.ei=function(n){if(null==n&&(n=10),0==this.pi()||n<2||36<n)return"0";var t=this.li(n),e=Math.pow(n,t),i=_(e),r=y(),o=y(),u="";for(this.je(i,r,o);0<r.pi();)u=(e+o.vi()).toString(n).substr(1)+u,r.je(i,r,o);return o.vi().toString(n)+u},w.prototype.Xe=function(n,t){this.Pe(0),null==t&&(t=10);for(var e=this.li(t),i=Math.pow(t,e),r=!1,o=0,u=0,s=0;s<n.length;++s){var a=f(n,s);a<0?"-"==n.charAt(s)&&0==this.pi()&&(r=!0):(u=t*u+a,++o>=e&&(this.di(i),this.si(u,0),u=o=0))}0<o&&(this.di(Math.pow(t,o)),this.si(u,0)),r&&w.ZERO.Ye(this,this)},w.prototype.he=function(n,t,e){if("number"==typeof t)if(n<2)this.Pe(1);else for(this.he(n,e),this.hi(n-1)||this._i(w.ONE.shiftLeft(n-1),c,this),this.ni()&&this.si(1,0);!this.gi(t);)this.si(2,0),this.ii()>n&&this.Ye(w.ONE.shiftLeft(n-1),this);else{var i=[],r=7&n;i.length=1+(n>>3),t.mi(i),0<r?i[0]&=(1<<r)-1:i[0]=0,this._e(i,256)}},w.prototype._i=function(n,t,e){var i,r,o=Math.min(n.De,this.De);for(i=0;i<o;++i)e[i]=t(this[i],n[i]);if(n.De<this.De){for(r=n.xe&this.we,i=o;i<this.De;++i)e[i]=t(this[i],r);e.De=this.De}else{for(r=this.xe&this.we,i=o;i<n.De;++i)e[i]=t(r,n[i]);e.De=n.De}e.xe=t(this.xe,n.xe),e.ze()},w.prototype.wi=function(n,t){var e=w.ONE.shiftLeft(n);return this._i(e,t,e),e},w.prototype.yi=function(n,t){for(var e=0,i=0,r=Math.min(n.De,this.De);e<r;)i+=this[e]+n[e],t[e++]=i&this.we,i>>=this.me;if(n.De<this.De){for(i+=n.xe;e<this.De;)i+=this[e],t[e++]=i&this.we,i>>=this.me;i+=this.xe}else{for(i+=this.xe;e<n.De;)i+=n[e],t[e++]=i&this.we,i>>=this.me;i+=n.xe}t.xe=i<0?-1:0,0<i?t[e++]=i:i<-1&&(t[e++]=this.ye+i),t.De=e,t.ze()},w.prototype.di=function(n){this[this.De]=this.ge(0,n-1,this,0,0,this.De),++this.De,this.ze()},w.prototype.si=function(n,t){if(0!=n){for(;this.De<=t;)this[this.De++]=0;for(this[t]+=n;this[t]>=this.ye;)this[t]-=this.ye,++t>=this.De&&(this[this.De++]=0),++this[t]}},w.prototype.ui=function(n,t,e){var i,r=Math.min(this.De+n.De,t);for(e.xe=0,e.De=r;0<r;)e[--r]=0;for(i=e.De-this.De;r<i;++r)e[r+this.De]=this.ge(0,n[r],e,r,0,this.De);for(i=Math.min(n.De,t);r<i;++r)this.ge(0,n[r],e,r,0,t-r);e.ze()},w.prototype.oi=function(n,t,e){--t;var i=e.De=this.De+n.De-t;for(e.xe=0;0<=--i;)e[i]=0;for(i=Math.max(t-this.De,0);i<n.De;++i)e[this.De+i-t]=this.ge(t-i,n[i],e,0,0,this.De+i-t);e.ze(),e.Qe(1,e)},w.prototype.bi=function(n){if(n<=0)return 0;var t=this.ye%n,e=this.xe<0?n-1:0;if(0<this.De)if(0==t)e=this[0]%n;else for(var i=this.De-1;0<=i;--i)e=(t*e+this[i])%n;return e},w.prototype.Ii=function(n){var t=this.Si(w.ONE),e=t.Pi();if(e<=0)return!1;var i=t.Ai(e);(n=n+1>>1)>P.length&&(n=P.length);for(var r=y(),o=0;o<n;++o){r.Pe(P[Math.floor(Math.random()*P.length)]);var u=r.Ci(i,this);if(0!=u.Ue(w.ONE)&&0!=u.Ue(t)){for(var s=1;s++<e&&0!=u.Ue(t);)if(0==(u=u.ri(2,this)).Ue(w.ONE))return!1;if(0!=u.Ue(t))return!1}}return!0},w.prototype.clone=function(){var n=y();return this.Je(n),n},w.prototype.vi=function(){if(this.xe<0){if(1==this.De)return this[0]-this.ye;if(0==this.De)return-1}else{if(1==this.De)return this[0];if(0==this.De)return 0}return(this[1]&(1<<32-this.me)-1)<<this.me|this[0]},w.prototype.ki=function(){return 0==this.De?this.xe:this[0]<<24>>24},w.prototype.Ei=function(){return 0==this.De?this.xe:this[0]<<16>>16},w.prototype.pi=function(){return this.xe<0?-1:this.De<=0||1==this.De&&this[0]<=0?0:1},w.prototype.Ti=function(){var n=this.De,t=[];t[0]=this.xe;var e,i=this.me-n*this.me%8,r=0;if(0<n--)for(i<this.me&&(e=this[n]>>i)!=(this.xe&this.we)>>i&&(t[r++]=e|this.xe<<this.me-i);0<=n;)i<8?(e=(this[n]&(1<<i)-1)<<8-i,e|=this[--n]>>(i+=this.me-8)):(e=this[n]>>(i-=8)&255,i<=0&&(i+=this.me,--n)),0!=(128&e)&&(e|=-256),0==r&&(128&this.xe)!=(128&e)&&++r,(0<r||e!=this.xe)&&(t[r++]=e);return t},w.prototype.Ni=function(n){return 0==this.Ue(n)},w.prototype.min=function(n){return this.Ue(n)<0?this:n},w.prototype.max=function(n){return 0<this.Ue(n)?this:n},w.prototype.Li=function(n){var t=y();return this._i(n,s,t),t},w.prototype.Di=function(n){var t=y();return this._i(n,c,t),t},w.prototype.Ri=function(n){var t=y();return this._i(n,l,t),t},w.prototype.Mi=function(n){var t=y();return this._i(n,p,t),t},w.prototype.Oi=function(){for(var n=y(),t=0;t<this.De;++t)n[t]=this.we&~this[t];return n.De=this.De,n.xe=~this.xe,n},w.prototype.shiftLeft=function(n){var t=y();return n<0?this.$e(-n,t):this.Ze(n,t),t},w.prototype.Ai=function(n){var t=y();return n<0?this.Ze(-n,t):this.$e(n,t),t},w.prototype.Pi=function(){for(var n=0;n<this.De;++n)if(0!=this[n])return n*this.me+v(this[n]);return this.xe<0?this.De*this.me:-1},w.prototype.Wi=function(){for(var n=0,t=this.xe&this.we,e=0;e<this.De;++e)n+=d(this[e]^t);return n},w.prototype.hi=function(n){var t=Math.floor(n/this.me);return t>=this.De?0!=this.xe:0!=(this[t]&1<<n%this.me)},w.prototype.Vi=function(n){return this.wi(n,c)},w.prototype.xi=function(n){return this.wi(n,p)},w.prototype.Ui=function(n){return this.wi(n,l)},w.prototype.add=function(n){var t=y();return this.yi(n,t),t},w.prototype.Si=function(n){var t=y();return this.Ye(n,t),t},w.prototype.multiply=function(n){var t=y();return this.Ke(n,t),t},w.prototype.We=function(n){var t=y();return this.je(n,t,null),t},w.prototype.Bi=function(n){var t=y();return this.je(n,null,t),t},w.prototype.Fi=function(n){var t=y(),e=y();return this.je(n,t,e),[t,e]},w.prototype.Ci=function(n,t){var e,i,r=n.ii(),o=_(1);if(r<=0)return o;e=r<18?1:r<48?3:r<144?4:r<768?5:6,i=r<8?new g(t):t.ni()?new S(t):new m(t);var u=[],s=3,a=e-1,f=(1<<e)-1;if(u[1]=i.Ve(this),1<e){var c=y();for(i.qe(u[1],c);s<=f;)u[s]=y(),i.Ge(c,u[s-2],u[s]),s+=2}var l,p,v=n.De-1,d=!0,h=y();for(r=b(n[v])-1;0<=v;){for(a<=r?l=n[v]>>r-a&f:(l=(n[v]&(1<<r+1)-1)<<a-r,0<v&&(l|=n[v-1]>>this.me+r-a)),s=e;0==(1&l);)l>>=1,--s;if((r-=s)<0&&(r+=this.me,--v),d)u[l].Je(o),d=!1;else{for(;1<s;)i.qe(o,h),i.qe(h,o),s-=2;0<s?i.qe(o,h):(p=o,o=h,h=p),i.Ge(h,u[l],o)}for(;0<=v&&0==(n[v]&1<<r);)i.qe(o,h),p=o,o=h,h=p,--r<0&&(r=this.me-1,--v)}return i.Fe(o)},w.prototype.ji=function(n){var t=n.ni();if(this.ni()&&t||0==n.pi())return w.ZERO;for(var e=n.clone(),i=this.clone(),r=_(1),o=_(0),u=_(0),s=_(1);0!=e.pi();){for(;e.ni();)e.$e(1,e),t?(r.ni()&&o.ni()||(r.yi(this,r),o.Ye(n,o)),r.$e(1,r)):o.ni()||o.Ye(n,o),o.$e(1,o);for(;i.ni();)i.$e(1,i),t?(u.ni()&&s.ni()||(u.yi(this,u),s.Ye(n,s)),u.$e(1,u)):s.ni()||s.Ye(n,s),s.$e(1,s);0<=e.Ue(i)?(e.Ye(i,e),t&&r.Ye(u,r),o.Ye(s,o)):(i.Ye(e,i),t&&u.Ye(r,u),s.Ye(o,s))}return 0!=i.Ue(w.ONE)?w.ZERO:0<=s.Ue(n)?s.Si(n):s.pi()<0?(s.yi(n,s),s.pi()<0?s.add(n):s):s},w.prototype.pow=function(n){return this.exp(n,new h)},w.prototype.Gi=function(n){var t=this.xe<0?this.ti():this.clone(),e=n.xe<0?n.ti():n.clone();if(t.Ue(e)<0){var i=t;t=e,e=i}var r=t.Pi(),o=e.Pi();if(o<0)return t;for(r<o&&(o=r),0<o&&(t.$e(o,t),e.$e(o,e));0<t.pi();)0<(r=t.Pi())&&t.$e(r,t),0<(r=e.Pi())&&e.$e(r,e),0<=t.Ue(e)?(t.Ye(e,t),t.$e(1,t)):(e.Ye(t,e),e.$e(1,e));return 0<o&&e.Ze(o,e),e},w.prototype.gi=function(n){var t,e=this.abs();if(1==e.De&&e[0]<=P[P.length-1]){for(t=0;t<P.length;++t)if(e[0]==P[t])return!0;return!1}if(e.ni())return!1;for(t=1;t<P.length;){for(var i=P[t],r=t+1;r<P.length&&i<A;)i*=P[r++];for(i=e.bi(i);t<r;)if(i%P[t++]==0)return!1}return e.Ii(n)},w.prototype.Ki=function(){var n=y();return this.He(n),n},C.prototype.init=function(n){var t,e,i;for(t=0;t<256;++t)this.ci[t]=t;for(t=e=0;t<256;++t)e=e+this.ci[t]+n[t%n.length]&255,i=this.ci[t],this.ci[t]=this.ci[e],this.ci[e]=i;this.ai=0,this.fi=0},C.prototype.next=function(){var n;return this.ai=this.ai+1&255,this.fi=this.fi+this.ci[this.ai]&255,n=this.ci[this.ai],this.ci[this.ai]=this.ci[this.fi],this.ci[this.fi]=n,this.ci[n+this.ci[this.ai]&255]};var k,E,T,N=256;function L(){var n;n=(new Date).getTime(),E[T++]^=255&n,E[T++]^=n>>8&255,E[T++]^=n>>16&255,E[T++]^=n>>24&255,N<=T&&(T-=N)}if(null==E){var D;for(E=[],T=0;T<N;)D=Math.floor(65536*Math.random()),E[T++]=D>>>8,E[T++]=255&D;T=0,L()}function R(){if(null==k){for(L(),(k=new C).init(E),T=0;T<E.length;++T)E[T]=0;T=0}return k.next()}function M(){}function O(n,t){return new w(n,t)}function W(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}M.prototype.mi=function(n){var t;for(t=0;t<n.length;++t)n[t]=R()},W.prototype.qi=function(n){return n.ri(this.e,this.n)},W.prototype.Hi=function(n,t){null!=n&&null!=t&&0<n.length&&0<t.length?(this.n=O(n,16),this.e=parseInt(t,16)):alert("Invalid RSA public key")},W.prototype.encrypt=function(n){var t=function(n,t){if(t<n.length+11)return alert("Message too long for RSA"),null;for(var e=[],i=n.length-1;0<=i&&0<t;){var r=n.charCodeAt(i--);r<128?e[--t]=r:127<r&&r<2048?(e[--t]=63&r|128,e[--t]=r>>6|192):(e[--t]=63&r|128,e[--t]=r>>6&63|128,e[--t]=r>>12|224)}e[--t]=0;for(var o=new M,u=[];2<t;){for(u[0]=0;0==u[0];)o.mi(u);e[--t]=u[0]}return e[--t]=2,e[--t]=0,new w(e)}(n,this.n.ii()+7>>3);if(null==t)return null;var e=this.qi(t);if(null==e)return null;var i=e.toString(16);return 0==(1&i.length)?i:"0"+i},W.prototype.Yi=function(n){if(null==this.p||null==this.q)return n.Ci(this.d,this.n);for(var t=n.Be(this.p).Ci(this.dmp1,this.p),e=n.Be(this.q).Ci(this.dmq1,this.q);t.Ue(e)<0;)t=t.add(this.p);return t.Si(e).multiply(this.coeff).Be(this.p).multiply(this.q).add(e)},W.prototype.Ji=function(n,t,e){null!=n&&null!=t&&0<n.length&&0<t.length?(this.n=O(n,16),this.e=parseInt(t,16),this.d=O(e,16)):alert("Invalid RSA private key")},W.prototype.zi=function(n,t,e,i,r,o,u,s){null!=n&&null!=t&&0<n.length&&0<t.length?(this.n=O(n,16),this.e=parseInt(t,16),this.d=O(e,16),this.p=O(i,16),this.q=O(r,16),this.dmp1=O(o,16),this.dmq1=O(u,16),this.coeff=O(s,16)):alert("Invalid RSA private key")},W.prototype.Qi=function(n,t){var e=new M,i=n>>1;this.e=parseInt(t,16);for(var r=new w(t,16);;){for(;this.p=new w(n-i,1,e),0!=this.p.Si(w.ONE).Gi(r).Ue(w.ONE)||!this.p.gi(10););for(;this.q=new w(i,1,e),0!=this.q.Si(w.ONE).Gi(r).Ue(w.ONE)||!this.q.gi(10););if(this.p.Ue(this.q)<=0){var o=this.p;this.p=this.q,this.q=o}var u=this.p.Si(w.ONE),s=this.q.Si(w.ONE),a=u.multiply(s);if(0==a.Gi(r).Ue(w.ONE)){this.n=this.p.multiply(this.q),this.d=r.ji(a),this.dmp1=this.d.Be(u),this.dmq1=this.d.Be(s),this.coeff=this.q.ji(this.p);break}}},W.prototype.decrypt=function(n){var t=O(n,16),e=this.Yi(t);return null==e?null:function(n,t){for(var e=n.Ti(),i=0;i<e.length&&0==e[i];)++i;if(e.length-i!=t-1||2!=e[i])return null;for(++i;0!=e[i];)if(++i>=e.length)return null;for(var r="";++i<e.length;){var o=255&e[i];o<128?r+=String.fromCharCode(o):191<o&&o<224?(r+=String.fromCharCode((31&o)<<6|63&e[i+1]),++i):(r+=String.fromCharCode((15&o)<<12|(63&e[i+1])<<6|63&e[i+2]),i+=2)}return r}(e,this.n.ii()+7>>3)};var V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",x="=";function U(n){var t,e,i="";for(t=0;t+3<=n.length;t+=3)e=parseInt(n.substring(t,t+3),16),i+=V.charAt(e>>6)+V.charAt(63&e);for(t+1==n.length?(e=parseInt(n.substring(t,t+1),16),i+=V.charAt(e<<2)):t+2==n.length&&(e=parseInt(n.substring(t,t+2),16),i+=V.charAt(e>>2)+V.charAt((3&e)<<4));0<(3&i.length);)i+=x;return i}function B(n){var t,e,i="",r=0;for(t=0;t<n.length&&n.charAt(t)!=x;++t){var o=V.indexOf(n.charAt(t));o<0||(0==r?(i+=a(o>>2),e=3&o,r=1):1==r?(i+=a(e<<2|o>>4),e=15&o,r=2):2==r?(i+=a(e),i+=a(o>>2),e=3&o,r=3):(i+=a(e<<2|o>>4),i+=a(15&o),r=0))}return 1==r&&(i+=a(e<<2)),i}W.prototype.Xi=function(n){n=this.Zi(n);var t=this.$i(),e=0,i=null,r=null,o=0;for(var u in t)t.hasOwnProperty(u)&&((i=t[u]).hasOwnProperty("offset")&&(e+=2*i.offset),o="string"==typeof i.length?this[i.length]:i.length,o*=2,r=n.substr(e,o),i.hasOwnProperty("type")&&("int"==i.type?r=parseInt(r,16):"bigint"==i.type&&(r=O(r,16))),e+=o,this[u]=r)},W.prototype.nr=function(n){var t="";n=r(n);for(var e=0;e<n.length;++e){var i=n.charCodeAt(e).toString(16);1===i.length&&(i="0"+i),t+=i}return t},W.prototype.Zi=function(n){var t=(n=n.replace(/^\s+|\s+$/g,"")).split(/\r?\n/);return"-----BEGIN"==t[0].substring(0,10)&&(t=t.slice(1,t.length-1)),n=t.join(""),this.nr(n)},W.prototype.tr=function(){var n="",t=this.$i(),e=null,i=null,r=0;for(var o in t)t.hasOwnProperty(o)&&(e=t[o]).er&&((i=this[o].toString(16)).length%2&&(i="0"+i),e.hasOwnProperty("padded")&&e.ir&&(i="00"+i),(r=(r=i.length/2).toString(16)).length%2&&(r="0"+r),e.hasOwnProperty("extraspace")&&(n+=r),n+=r,n+=i,n+="02");return n.slice(0,-2)},W.prototype.rr=function(n,t){if(!n)return n;var e="(.{1,"+(t=t||64)+"})( +|$\n?)|(.{1,"+t+"})";return n.match(new RegExp(e,"g")).join("\n")},W.prototype.or=function(){var n="-----BEGIN RSA PRIVATE KEY-----\n",t="3082025e02010002";return t+=this.tr(),n+=this.rr(U(t))+"\n",n+="-----END RSA PRIVATE KEY-----"},W.prototype.ur=function(){var n="-----BEGIN PUBLIC KEY-----\n",t="30819f300d06092a864886f70d010101050003818d0030818902";return t+=this.tr(),n+=this.rr(U(t))+"\n",n+="-----END PUBLIC KEY-----"};var F=function(n){W.call(this),n&&this.Xi(n)};((F.prototype=new W).constructor=F).prototype.$i=function(){return{header:{length:4},versionlength:{length:1,offset:1,type:"int"},version:{length:"versionlength",type:"int"},n_length:{length:1,offset:2,type:"int"},n:{length:"n_length",type:"bigint",er:!0,ir:!0,sr:!0},e_length:{length:1,offset:1,type:"int"},e:{length:"e_length",type:"int",er:!0},d_length:{length:1,offset:2,type:"int"},d:{length:"d_length",type:"bigint",er:!0,ir:!0,sr:!0},p_length:{length:1,offset:1,type:"int"},p:{length:"p_length",type:"bigint",er:!0,ir:!0},q_length:{length:1,offset:1,type:"int"},q:{length:"q_length",type:"bigint",er:!0,ir:!0},dmp1_length:{length:1,offset:1,type:"int"},dmp1:{length:"dmp1_length",type:"bigint",er:!0},dmq1_length:{length:1,offset:1,type:"int"},dmq1:{length:"dmq1_length",type:"bigint",er:!0,ir:!0},coeff_length:{length:1,offset:1,type:"int"},coeff:{length:"coeff_length",type:"bigint",er:!0,ir:!0}}};var j=function(n){W.call(this),n&&("string"==typeof n?this.Xi(n):n.hasOwnProperty("n")&&n.hasOwnProperty("e")&&(this.n=n.n,this.e=n.e))};((j.prototype=new W).constructor=j).prototype.$i=function(){return{header:{length:25},n_length:{length:1,offset:2,type:"int"},n:{length:"n_length",type:"bigint",er:!0,ir:!0,sr:!0},e_length:{length:1,offset:1,type:"int"},e:{length:"e_length",type:"int",er:!0}}};var G=function(){this.ar=null,this.cr=null};return G.prototype.lr=function(n){this.ar=new F(n),this.cr=new j(this.ar)},G.prototype.pr=function(n){this.cr=new j(n)},G.prototype.decrypt=function(n){return!!this.ar&&this.ar.decrypt(B(n))},G.prototype.encrypt=function(n){var t=this.cr||this.ar;return!!t&&U(t.encrypt(n))},G.prototype.or=function(){return this.ar||(this.ar=new F,this.ar.Qi(1024,"010001"),this.cr=new j(this.ar)),this.ar.or()},G.prototype.ur=function(){return this.cr||(this.cr=new j,this.cr.Qi(1024,"010001")),this.cr.ur()},function(n){var t=new G;return t.pr(K.Xt),t.encrypt(n)}}(),t.exports=i.encrypt},{17:17}],26:[function(n,t,e){var i=i||{},r="undefined";i.vr=function(n,t){return t=t||!1,n?"0"!=n:t},i.U=function(n,t){return null==n||isNaN(n)?t||0:parseInt(n)},i.o=function(n,t){var e=Number(n);return null==n||isNaN(e)?t||0:e},i.toString=function(n){if(typeof n==r)return r;if("string"==typeof n)return n;if(n instanceof Array)return n.join(",");var t="";for(var e in n)n.hasOwnProperty(e)&&(t+=e+":"+n[e]+";");return t||n.toString()},t.exports.vr=i.vr,t.exports.U=i.U,t.exports.o=i.o,t.exports.toString=i.toString},{}],27:[function(n,t,e){var s=n(19),i="undefined",a=typeof encodeURIComponent!==i?encodeURIComponent:escape,u=typeof decodeURIComponent!==i?decodeURIComponent:unescape,f="cs_dir_",c="cs_file_",l=typeof localStorage!==i?localStorage:null,p={},v="|",d=l&&a&&u;var o={dir:function(n){if(!d)return null;var t=f+n,e=p[t];if(e)return e.slice();var i=l.getItem(t);if(i){e=[];for(var r=0,o=(i=i.split(v)).length;r<o;r++)0<i[r].length&&e.push(u(i[r]));return(p[t]=e).slice()}return null},append:function(n,t,e){if(d){var i=o.read(n,t);i?i+=e:i=e,o.write(n,t,i)}},write:function(n,t,e){if(d){var i,r=o.dir(n);r||(i=f+n,"function"==typeof l.setItem?l.setItem(i,""):l[i]="",p[i]=[],r=[]),-1==s.indexOf(t,r)&&function(n,t){var e=f+n;try{"function"==typeof l.setItem?l.setItem(e,l.getItem(e)+v+a(t)):l[e]=l.getItem(e)+v+a(t)}catch(n){}p[e].push(t)}(n,t),function(n,t,e){try{"function"==typeof l.setItem?l.setItem(c+n+t,e):l[c+n+t]=e}catch(n){}}(n,t,e)}},deleteFile:function(n,t){if(!d)return!1;var e=o.dir(n);return!!e&&(-1!=s.indexOf(t,e)&&(function(n,t){var e=f+n,i=p[e];i.splice(s.indexOf(t,i),1);for(var r=[],o=0,u=i.length;o<u;o++)r.push(a(i[o]));try{"function"==typeof l.setItem?l.setItem(e,r.join(v)):l[e]=r.join(v),"function"==typeof l.removeItem?l.removeItem(c+n+t):delete l[c+n+t]}catch(n){}}(n,t),!0))},read:function(n,t){if(!d)return null;var e=o.dir(n);return e?-1==s.indexOf(t,e)?null:function(n,t){try{return"function"==typeof l.getItem?l.getItem(c+n+t):l[c+n+t]}catch(n){}}(n,t):null}};t.exports=o},{19:19}],28:[function(n,t,e){var u,r,o=n(19),i="undefined",s=null,a=null,f="cs_dir_",c="|",l={},p=!1;function v(){s=typeof FileSystem!=i?new FileSystem:null,a=typeof curWidget!=i?curWidget.id:null,typeof sf!==i&&(r=u=function(n,t){sf.core.localData(n,t)}),null==s||typeof s.isValidCommonPath==i||s.isValidCommonPath(a)||s.createCommonDir(a),p=!0}function d(n){return n.replace(/^\s+|\s+$/g,"")}function h(n,t){var e=l[n];e?e.push(t):e=l[n]=[t],r(f+n,e.join(c))}function _(n,t){var e=l[n],i=o.indexOf(t,e);0<=i&&(e.splice(i,1),r(f+n,0===e.length?null:e.join(c)))}var g={dir:function(n){if(p||v(),s.isValidCommonPath(a+"/"+n)){var t=l[n];if(!t){if(!(t=u(f+n)))return null;t=l[n]=t.split(c)}for(var e=t.slice(),i=0,r=e.length;i<r;i++){var o=t[i];s.isValidCommonPath(a+"/"+n+"/"+o)||_(n,o)}return e}return null},append:function(n,t,e){p||v();var i=a+"/"+n;s.isValidCommonPath(i)||s.createCommonDir(i),s.isValidCommonPath(i+"/"+t)||h(n,t);var r=s.openCommonFile(i+"/"+t,"a");r.writeLine(d(e)),s.closeCommonFile(r)},write:function(n,t,e){p||v();var i=a+"/"+n;s.isValidCommonPath(i)||s.createCommonDir(i),s.isValidCommonPath(i+"/"+t)||h(n,t);var r=s.openCommonFile(i+"/"+t,"w");r.writeLine(d(e)),s.closeCommonFile(r)},deleteFile:function(n,t){p||v();var e=a+"/"+n;return!!s.isValidCommonPath(e)&&(_(n,t),s.deleteCommonFile(e+"/"+t))},read:function(n,t){p||v();var e=a+"/"+n;if(!s.isValidCommonPath(e))return null;var i=s.openCommonFile(e+"/"+t,"r");if(i){for(var r,o=[];r=i.readLine();)o.push(r);return s.closeCommonFile(i),o.join("\n")}return _(n,t),""}};t.exports=g},{19:19}],29:[function(n,t,e){t.exports={dir:function(){return null},append:function(n,t,e){},write:function(n,t,e){},deleteFile:function(){return!1},read:function(){return null}}},{}],30:[function(n,t,e){var i=n(21),r=n(17),o=n(49).dr,u=n(49).hr(),s=n(45),a=n(29),f="undefined",c=r.D,l=r.Qt,p=null,v=null,d=null;function h(){null==p&&(typeof atv!=f&&typeof atv.device!=f&&atv.device.idForVendor?(p=i.pe(atv.device.idForVendor,""),v="62"):(p=+new Date+~~(1e3*Math.random()),v="72"),d=null)}var _={PLATFORM:"atv",httpGet:o,httpPost:u,Storage:s,IO:a,getCrossPublisherId:function(){return h(),d},getAppName:function(){return c},getAppVersion:function(){return c},getVisitorId:function(){return h(),p},getVisitorIdSuffix:function(){return v},getDeviceModel:function(){return"Apple TV"},getPlatformVersion:function(){return typeof atv!=f&&typeof atv.device!=f&&i.pe(atv.device.softwareVersion,c)},getPlatformName:function(){return"js"},getRuntimeName:function(){return"atv"},getRuntimeVersion:function(){return typeof atv!=f&&typeof atv.device!=f&&i.pe(atv.device.softwareVersion,c)},getDisplayResolution:function(){return typeof atv.device!=f&&typeof atv.device.screenFrame!=f&&typeof atv.device.screenFrame.height!=f&&typeof atv.device.screenFrame.width!=f?atv.device.screenFrame.height+"x"+atv.device.screenFrame.width:l},getLanguage:function(){return typeof atv!=f&&typeof atv.device!=f&&i.pe(atv.device.language,"")},getPackageName:function(){return""},isConnectionAvailable:function(){return!0},setTimeout:function(n,t){return typeof atv!=f&&typeof atv.setTimeout!=f&&atv.setTimeout(n,t)},setInterval:function(n,t){return typeof atv!=f&&typeof atv.setInterval!=f&&atv.setInterval(n,t)},clearTimeout:function(n){return typeof atv!=f&&typeof atv.clearTimeout!=f&&atv.clearTimeout(n)},clearInterval:function(n){return typeof atv!=f&&typeof atv.clearInterval!=f&&atv.clearInterval(n)},isCompatible:function(){return typeof window==f&&typeof atv!=f},isConnectionSecure:function(){return typeof document!=f&&null!=document&&"s"===document.location.href.charAt(4)}};t.exports=_},{17:17,21:21,29:29,45:45,49:49}],31:[function(n,t,e){var i=n(21),r=n(20),o=n(17),u=n(50),s=n(48)._r,a=n(46),f=n(27),c="undefined",l=o.D,p=o.Qt;var v={PLATFORM:"chromecast",httpGet:u,httpPost:s,Storage:a,IO:f,getCrossPublisherId:function(){return null},getAppName:function(){return typeof ns_.crm===c?l:ns_.crm.getApplicationData().name},getAppVersion:function(){return l},getVisitorId:function(){return+new Date+~~(1e3*Math.random())},getVisitorIdSuffix:function(){return"72"},getDeviceModel:function(){return"chromecast"},getPlatformVersion:function(){return cast.receiver.VERSION+"-"+i.pe(r.ue()+" "+r.se(),l)},getPlatformName:function(){return"js"},getRuntimeName:function(){return"html"},getRuntimeVersion:function(){return"5"},getDisplayResolution:function(){var n=typeof window!=c&&i.tn(window.screen)&&i.tn(window.screen.availWidth)?window.screen.availWidth:0,t=typeof window!=c&&i.tn(window.screen)&&i.tn(window.screen.availHeight)?window.screen.availHeight:0;return 0<n&&0<t?n+"x"+t:p},getLanguage:function(){return typeof window!=c&&i.tn(window.navigator)&&i.pe(window.navigator.language,"")||l},getPackageName:function(){return l},isConnectionAvailable:function(){return!0},isCompatible:function(){return typeof window!==c&&!i.jt(window.cast)&&!i.jt(cast.receiver)},isConnectionSecure:function(){return typeof document!=c&&null!=document&&"s"===document.location.href.charAt(4)}};t.exports=v},{17:17,20:20,21:21,27:27,46:46,48:48,50:50}],32:[function(n,t,e){t.exports={SmartTV:0,Netcast:1,Cordova:2,Trilithium:3,AppleTV:4,Chromecast:5,Xbox:6,webOS:7,tvOS:8,nodejs:9,html5:10,JSMAF:11,Skeleton:12}},{}],33:[function(n,t,e){var i=n(21),r=n(17),o=n(50),u=n(48).gr,s=n(48)._r,a=n(46),f=n(27),c="undefined",l=r.D,p=r.Qt,v=null,d=null,h=null;function _(){return typeof device!=c&&typeof device.available!=c&&device.available&&typeof window!=c&&typeof window.navigator!=c}function g(){if(null==v){var n=_()&&typeof device!=c&&i.tn(device.uuid)&&0<device.uuid.length?device.uuid:null;null!=n?(d="31",h=v=n):(v=+new Date+~~(1e3*Math.random()),d="72",h=null)}}var m={PLATFORM:"cordova",httpGet:function(){return typeof Image!=c?o.apply(this,arguments):u.apply(this,arguments)},httpPost:s,Storage:a,IO:f,getCrossPublisherId:function(){return g(),h},getAppName:function(){return l},getAppVersion:function(){return l},getVisitorId:function(){return g(),v},getVisitorIdSuffix:function(){return d},getDeviceModel:function(){return typeof device!=c&&i.tn(device.model)||l},getPlatformVersion:function(){return typeof device!=c&&i.tn(device.cordova)&&device.cordova||l},getPlatformName:function(){return"js"},getRuntimeName:function(){return typeof device!=c&&i.tn(device.platform)&&"cordova"+device.platform||"cordova"},getRuntimeVersion:function(){return typeof device!=c&&i.tn(device.version)||l},getDisplayResolution:function(){var n=typeof window!=c&&i.tn(window.screen)&&i.tn(window.screen.availWidth)&&window.screen.availWidth||0,t=typeof window!=c&&i.tn(window.screen)&&i.tn(window.screen.availHeight)&&window.screen.availHeight||0;return 0<n&&0<t?n+"x"+t:p},getLanguage:function(){return typeof window!=c&&i.tn(window.navigator)&&i.tn(window.navigator.language)&&window.navigator.language||l},getPackageName:function(){return""},isConnectionAvailable:function(){return typeof window==c||(!i.tn(window.navigator)||!i.tn(window.navigator.onLine)||window.navigator.onLine)},isCompatible:_,isConnectionSecure:function(){return typeof document!=c&&null!=document&&"s"===document.location.href.charAt(4)}};t.exports=m},{17:17,21:21,27:27,46:46,48:48,50:50}],34:[function(n,t,e){var i=n(21),r=n(20),o=n(17),u=n(50),s=n(48).gr,a=n(48)._r,f=n(46),c=n(27),l="undefined",p=typeof document!=l&&document||void 0,v=o.D,d=o.Qt,h={PLATFORM:"html5",httpGet:function(){return typeof Image!=l?u.apply(this,arguments):s.apply(this,arguments)},httpPost:a,Storage:f,IO:c,getCrossPublisherId:function(){return null},getAppName:function(){return p&&i.tn(p.title)&&p.title||v},getAppVersion:function(){return v},getVisitorId:function(){return this.getDeviceModel()+ +new Date+~~(1e3*Math.random())},getVisitorIdSuffix:function(){return"72"},getDeviceModel:function(){return typeof window!=l&&i.tn(window.navigator)&&i.pe(window.navigator.platform,"")||""},getPlatformVersion:function(){return i.pe(r.ue()+" "+r.se(),"")},getPlatformName:function(){return"js"},getRuntimeName:function(){return"html"},getRuntimeVersion:function(){return"5"},getDisplayResolution:function(){var n,t;typeof window!=l&&window.screen&&window.screen.width&&(n=window.screen.width),typeof window!=l&&window.screen&&window.screen.width&&(t=window.screen.height);var e=1;return typeof window!=l&&window.devicePixelRatio&&(e=window.devicePixelRatio),0<n&&0<t?(n*=e)+"x"+(t*=e):d},getApplicationResolution:function(){var n,t;typeof window!=l&&window.innerWidth&&(n=window.innerWidth),typeof window!=l&&window.innerHeight&&(t=window.innerHeight);var e=1;return typeof window!=l&&window.devicePixelRatio&&(e=window.devicePixelRatio),0<n&&0<t?(n*=e)+"x"+(t*=e):d},getLanguage:function(){return typeof window!=l&&i.tn(window.navigator)&&i.pe(window.navigator.language,"")||v},getPackageName:function(){return""},isConnectionAvailable:function(){return typeof window==l||(!i.tn(window.navigator)||!i.tn(window.navigator.onLine)||window.navigator.onLine)},isCompatible:function(){return typeof window!==l&&i.tn(window.navigator)&&i.tn(window.localStorage)&&i.tn(p)&&!!p.createElement("canvas").getContext},isConnectionSecure:function(){return!!p&&"s"===p.location.href.charAt(4)}};t.exports=h},{17:17,20:20,21:21,27:27,46:46,48:48,50:50}],35:[function(n,t,e){var i=n(21),r=n(17),o=n(48).gr,u=n(48)._r,s=n(46),a=n(27),f="undefined",c=r.D,l=r.Qt,p=null,v=null,d=null;function h(){if(null==p)if(typeof jsmaf!=f&&i.tn(jsmaf.hardwareId)){var n=jsmaf.hardwareId;v="31",d=p=n}else p=+new Date+~~(1e3*Math.random()),v="72",d=null}function _(){return typeof jsmaf==f||!i.tn(jsmaf.networkStatus)||"connected"==jsmaf.networkStatus}var g={PLATFORM:"jsmaf",httpGet:o,httpPost:u,Storage:s,IO:a,getCrossPublisherId:function(){return h(),d},getAppName:function(){return c},getAppVersion:function(){return c},getVisitorId:function(){return h(),p},getVisitorIdSuffix:function(){return h(),v},getDeviceModel:function(){return typeof jsmaf!=f&&i.tn(jsmaf.platform)?jsmaf.platform:c},getPlatformName:function(){return"js"},getPlatformVersion:function(){return c},getRuntimeName:function(){return"jsmaf"},getRuntimeVersion:function(){return typeof jsmaf!=f&&i.tn(jsmaf.version)?jsmaf.version:c},getDisplayResolution:function(){return typeof jsmaf!=f&&i.tn(jsmaf.screenWidth)&&i.tn(jsmaf.screenHeight)?jsmaf.screenWidth+"x"+jsmaf.screenHeight:l},getLanguage:function(){return typeof jsmaf!=f&&i.tn(jsmaf.locale)?jsmaf.locale:c},getPackageName:function(){return null},isConnectionAvailable:_,isCompatible:function(){return typeof jsmaf!=f},setTimeout:function(n,t){return jsmaf.setTimeout(n,t)},setInterval:function(n,t){return jsmaf.setInterval(n,t)},clearTimeout:function(n){return jsmaf.clearTimeout(n)},clearInterval:function(n){return jsmaf.clearInterval(n)},getDeviceArchitecture:function(){if(typeof jsmaf==f||!i.tn(jsmaf.platform))var n=c;return"ps3"==jsmaf.platform?n="cell":"ps4"==jsmaf.platform?n="ps4":"vita"==jsmaf.platform&&(n="vita"),n},getConnectionType:function(){return _()&&typeof jsmaf!=f&&i.tn(jsmaf.connectionType)?"wired"==jsmaf.connectionType?"eth":"wireless"==jsmaf.connectionType?"wifi":"phone"==jsmaf.connectionType?"wwan":c:c},getDeviceJailBrokenFlag:function(){return c},isConnectionSecure:function(){return typeof document!=f&&null!=document&&"s"===document.location.href.charAt(4)}};t.exports=g},{17:17,21:21,27:27,46:46,48:48}],36:[function(n,t,e){var i=n(50),r=n(52).mr,o=n(46),u=n(29),s=n(17),a=s.D,f=s.Qt,c={PLATFORM:"generic",httpGet:i,httpPost:r,Storage:o,IO:u,onDataFetch:function(n){n()},getCrossPublisherId:function(){return null},getAppName:function(){return a},getAppVersion:function(){return a},getVisitorId:function(){return+new Date+~~(1e3*Math.random())},getVisitorIdSuffix:function(){return"72"},getDeviceModel:function(){return a},getPlatformVersion:function(){return a},getPlatformName:function(){return"js"},getRuntimeName:function(){return a},getRuntimeVersion:function(){return a},getDisplayResolution:function(){return f},getApplicationResolution:function(){return f},getLanguage:function(){return a},getPackageName:function(){return null},isConnectionAvailable:function(){return!0},isCompatible:function(){return!0},autoSelect:function(){},autoDetect:function(){},setPlatformAPI:function(){},isCrossPublisherIdChanged:function(){return!1},setTimeout:function(n,t){return setTimeout(n,t)},setInterval:function(n,t){return setInterval(n,t)},clearTimeout:function(n){return clearTimeout(n)},clearInterval:function(n){return clearInterval(n)},getDeviceArchitecture:function(){return a},getConnectionType:function(){return a},getDeviceJailBrokenFlag:function(){return a},isConnectionSecure:function(){return!1},processMeasurementLabels:function(){}};t.exports=c},{17:17,29:29,46:46,50:50,52:52}],37:[function(n,t,e){var i=n(21),r=n(17),o=n(50),u=n(48).gr,s=n(52).mr,a=n(46),f=n(29),c="undefined",l=r.D,p=r.Qt,v=null,d=null,h=null;function _(){if(null==v){var n=function(){if(typeof ns_!=c&&i.tn(ns_.netcastDevice)){if(i.tn(ns_.netcastDevice.net_macAddress)&&i.lt(ns_.netcastDevice.net_macAddress))return ns_.netcastDevice.net_macAddress;if(i.tn(ns_.netcastDevice.serialNumber)&&i.lt(ns_.netcastDevice.serialNumber))return ns_.netcastDevice.serialNumber}return null}();null!=n?(d="31",h=v=n):(v=+new Date+~~(1e3*Math.random()),d="72",h=null)}}var g={PLATFORM:"netcast",httpGet:function(){return typeof Image!=c?o.apply(this,arguments):u.apply(this,arguments)},httpPost:s,Storage:a,IO:f,getCrossPublisherId:function(){return _(),h},getAppName:function(){return l},getAppVersion:function(){return l},getVisitorId:function(){return _(),v},getVisitorIdSuffix:function(){return d},getDeviceModel:function(){return typeof ns_!=c&&i.tn(ns_.netcastDevice)&&i.tn(ns_.netcastDevice.modelName)&&ns_.netcastDevice.modelName||l},getPlatformVersion:function(){return typeof ns_!=c&&i.tn(ns_.netcastDevice)&&i.pe(ns_.netcastDevice.version,l)||l},getPlatformName:function(){return"js"},getRuntimeName:function(){return typeof ns_!=c&&i.tn(ns_.netcastDevice)?"lg-ott"+i.pe(ns_.netcastDevice.platform,l):l},getRuntimeVersion:function(){if(typeof ns_!=c&&i.tn(ns_.netcastDevice)){if(i.tn(ns_.netcastDevice.version))return ns_.netcastDevice.version;if(i.tn(ns_.netcastDevice.hwVersion))return ns_.netcastDevice.hwVersion;if(i.tn(ns_.netcastDevice.swVersion))return ns_.netcastDevice.swVersion}return l},getDisplayResolution:function(){if(typeof ns_!=c&&i.tn(ns_.netcastDevice)&&i.tn(ns_.netcastDevice.osdResolution))switch(ns_.netcastDevice.osdResolution){case 0:return"640x480";case 1:return"720x576";case 2:return"1280x720";case 3:return"1920x1080";case 4:return"1366x768"}return p},getLanguage:function(){return typeof ns_!=c&&i.tn(ns_.netcastDevice)&&i.pe(ns_.netcastDevice.tvLanguage2,i.pe(window.navigator.language))||l},getPackageName:function(){return null},isConnectionAvailable:function(){return typeof ns_.netcastDevice===c||!!ns_.netcastDevice.net_isConnected},getConnectionType:function(){if(typeof ns_.netcastDevice!==c){if(0===ns_.netcastDevice.networkType)return"eth";if(1===ns_.netcastDevice.networkType)return"wifi"}return l},isCompatible:function(){return typeof ns_!=c&&typeof ns_.netcastDevice!=c&&typeof ns_.netcastDevice.version!=c&&typeof window!=c&&typeof window.navigator!=c},isConnectionSecure:function(){return typeof document!=c&&null!=document&&"s"===document.location.href.charAt(4)}};t.exports=g},{17:17,21:21,29:29,46:46,48:48,50:50,52:52}],38:[function(d,h,_){(function(n){var t=d(21),e=d(17),i=d(52).mr,r=d(46),o=d(29),u="undefined",s=e.D,a=e.Qt,f=null,c=null,l=null;function p(){null==f&&(f=+new Date+~~(1e3*Math.random()),c="72",l=null)}var v={PLATFORM:"nodejs",httpGet:function(n,t){new function(e){var i=this,r=0;i.send=function(n){d("http").get(n,function(n){var t=n.statusCode;if((302==t||301==t)&&r<20&&n.headers&&n.headers.location)return r++,void i.send(n.headers.location);e(t)}).on("error",function(){e()})}}(t).send(n)},httpPost:i,Storage:r,IO:o,getCrossPublisherId:function(){return p(),l},getVisitorId:function(){return p(),f},getVisitorIdSuffix:function(){return c},getPlatformVersion:function(){var n=d("os");return[n.type(),n.platform(),n.release()].join(";")},getPlatformName:function(){return"js"},getRuntimeName:function(){return"nodejs"},getRuntimeVersion:function(){return typeof process===u||t.jt(process.version)?s:process.version},getDisplayResolution:function(){return a},isCompatible:function(){return typeof window===u&&typeof h!==u&&typeof _!==u&&typeof n!==u&&typeof process!==u&&t.tn(process.version)},isConnectionSecure:function(){return!1}};h.exports=v}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{17:17,21:21,29:29,46:46,52:52,undefined:void 0}],39:[function(n,t,e){var i=n(24),r=n(32),o=n(36),u=n(40),s=n(37),a=n(43),f=n(33),c=n(41),l=n(30),p=n(44),v=n(31),d=n(42),h=n(35),_=n(38),g=n(34),m=!1;o.autoDetect=function(){m||(m=!0,u.isCompatible()?i.extend(o,u):s.isCompatible()?i.extend(o,s):a.isCompatible()?i.extend(o,a):f.isCompatible()?i.extend(o,f):c.isCompatible()?i.extend(o,c):l.isCompatible()?i.extend(o,l):p.isCompatible()?i.extend(o,p):v.isCompatible()?i.extend(o,v):d.isCompatible()?i.extend(o,d):h.isCompatible()?i.extend(o,h):_.isCompatible()?i.extend(o,_):g.isCompatible()&&i.extend(o,g))},o.autoSelect=o.autoDetect,o.setPlatformAPI=function(n){switch(m=!0,n){case r.SmartTV:i.extend(o,u);break;case r.Netcast:i.extend(o,s);break;case r.Cordova:i.extend(o,f);break;case r.Trilithium:i.extend(o,c);break;case r.AppleTV:i.extend(o,l);break;case r.Chromecast:i.extend(o,v);break;case r.Xbox:i.extend(o,p);break;case r.webOS:i.extend(o,a);break;case r.tvOS:i.extend(o,d);break;case r.JSMAF:i.extend(o,h);break;case r.nodejs:i.extend(o,_);break;case r.html5:i.extend(o,g);break;case r.Skeleton:break;default:m=!1}}},{24:24,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,40:40,41:41,42:42,43:43,44:44}],40:[function(n,t,e){var i=n(21),r=n(17),o=n(48).gr,u=n(52).mr,s=n(47),a=n(28),f="undefined",c=r.D,l=r.Qt,p=null,v=null,d=null;function h(){if(null==p){var n=function(){if("object"!=typeof sf||"object"!=typeof sf.core||"function"!=typeof sf.core.sefplugin)return null;var n=sf.core.sefplugin("NNAVI");if("function"!=typeof n.Open||"function"!=typeof n.Execute)return null;n.Open("Network","1.001","Network");var t=n.Execute("GetMAC","0");if(!i.jt(t))return t;if(t=n.Execute("GetMAC","1"),!i.jt(t))return t;var e=n.Execute("GetDeviceID");return i.jt(e)?null:e}();null!=n?(v="31",d=p=n):(p=+new Date+~~(1e3*Math.random()),v="72",d=null)}}var _={PLATFORM:"smarttv",httpGet:o,httpPost:u,Storage:s,IO:a,getCrossPublisherId:function(){return h(),d},getAppName:function(){return c},getAppVersion:function(){return typeof sf!=f&&i.tn(sf.env)&&i.tn(sf.env.getAppVersion)&&sf.env.getAppVersion()||c},getVisitorId:function(){return h(),p},getVisitorIdSuffix:function(){return v},getDeviceModel:function(){return typeof sf!=f&&i.tn(sf.core)&&i.tn(sf.core.getEnvValue)&&sf.core.getEnvValue("modelid")||c},getPlatformVersion:function(){return"2.0.0"},getPlatformName:function(){return"js"},getRuntimeName:function(){if(typeof sf!==f&&i.tn(sf.env)&&i.tn(sf.env.getProductType)&&i.tn(sf.env.PRODUCTTYPE_TV)&&i.tn(sf.env.PRODUCTTYPE_MONITOR)&&i.tn(sf.env.PRODUCTTYPE_BD)){var n=[];return n[sf.env.PRODUCTTYPE_TV]="samsung-smarttv-tv",n[sf.env.PRODUCTTYPE_MONITOR]="samsung-smarttv-monitor",n[sf.env.PRODUCTTYPE_BD]="samsung-smarttv-bd",n[sf.env.getProductType()]}},getRuntimeVersion:function(){return typeof sf!=f&&i.tn(sf.env)&&i.tn(sf.env.getFirmwareVer)&&sf.env.getFirmwareVer().version},getDisplayResolution:function(){if(typeof sf===f||!i.tn(sf.env)||!i.tn(sf.env.getScreenSize))return l;var n=sf.env.getScreenSize();return n.width+"x"+n.height},getLanguage:function(){if(typeof sf!==f&&i.tn(sf.env)&&i.tn(sf.env.getLanguageCode))return sf.env.getLanguageCode()},getPackageName:function(){return null},isConnectionAvailable:function(){return!0},isCompatible:function(){return typeof window!=f&&typeof window.navigator!=f&&typeof sf!=f&&typeof sf.env!=f},getConnectionType:function(){if("object"!=typeof sf||"object"!=typeof sf.core||"function"!=typeof sf.core.sefplugin)return c;var n=sf.core.sefplugin("NETWORK");if("function"!=typeof n.Open||"function"!=typeof n.Execute)return c;n.Open("Network","1.001","Network");var t=n.Execute("GetActiveType");return 0===t?"wired":1===t?"wireless":c},isConnectionSecure:function(){return typeof document!=f&&null!=document&&"s"===document.location.href.charAt(4)}};t.exports=_},{17:17,21:21,28:28,47:47,48:48,52:52}],41:[function(n,t,e){var i=n(21),r=n(17),o=n(51),u=n(52),s=n(46),a=n(29),f="undefined",c=r.D,l=r.Qt,p=null,v=null,d=null;function h(){if(null==p){var n=i.lt(engine.stats.device.id)?engine.stats.device.id:i.lt(engine.stats.network.mac)?engine.stats.network.mac:null;null!=n?(v="31",d=p=n):(p=+new Date+~~(1e3*Math.random()),v="72",d=null)}}var _={PLATFORM:"trilithium",httpGet:o,httpPost:u,Storage:s,IO:a,getCrossPublisherId:function(){return h(),d},getAppName:function(){return i.lt(engine.stats.application.name)?engine.stats.application.name:c},getAppVersion:function(){return i.lt(engine.stats.application.version)?engine.stats.application.version:c},getVisitorId:function(){return h(),p},getVisitorIdSuffix:function(){return v},getDeviceModel:function(){return i.pe(engine.stats.device.platform,c)},getPlatformVersion:function(){return""},getPlatformName:function(){return"js"},getRuntimeName:function(){return"trilithium"},getRuntimeVersion:function(){return i.pe(engine.stats.device.version,c)},getDisplayResolution:function(){return typeof screen!=f&&typeof screen.height!=f&&typeof screen.width!=f?screen.height+"x"+screen.width:l},getLanguage:function(){return c},getPackageName:function(){return null},isConnectionAvailable:function(){return!0},isCompatible:function(){return typeof engine!=f&&typeof engine.stats!=f},isConnectionSecure:function(){return typeof document!=f&&null!=document&&"s"===document.location.href.charAt(4)}};t.exports=_},{17:17,21:21,29:29,46:46,51:51,52:52}],42:[function(n,t,e){var i=n(21),r=n(17),o=n(48).gr,u=n(48)._r,s=n(46),a=n(27),f="undefined",c=r.D,l=r.Qt,p=null,v=null,d=null;function h(){null==p&&(i.jt(Device.vendorIdentifier)?(p=+new Date+~~(1e3*Math.random()),v="72"):(p=Device.vendorIdentifier,v="62"),d=p)}var _={PLATFORM:"tvos",httpGet:o,httpPost:u,Storage:s,IO:a,getCrossPublisherId:function(){return h(),d},getAppName:function(){return Device.appIdentifier},getAppVersion:function(){return Device.appVersion},getVisitorId:function(){return h(),p},getVisitorIdSuffix:function(){return v},getDeviceModel:function(){return Device.productType},getPlatformVersion:function(){return Device.systemVersion},getPlatformName:function(){return"js"},getRuntimeName:function(){return"tvos"},getRuntimeVersion:function(){return Device.systemVersion},getDisplayResolution:function(){return l},getLanguage:function(){return Settings.language},getPackageName:function(){return c},isConnectionAvailable:function(){return!0},isCompatible:function(){return typeof window===f&&typeof Device!==f&&"Apple TV"===Device.model},isConnectionSecure:function(){return!0}};t.exports=_},{17:17,21:21,27:27,46:46,48:48}],43:[function(n,t,e){var s,a,f,i=n(21),r=n(17),o=n(50),u=n(48)._r,c=n(46),l=n(27),p="undefined",v=r.D,d=r.Qt;var h={PLATFORM:"webos",httpGet:o,httpPost:u,Storage:c,IO:l,onDataFetch:function(n,t){var e,i,r,o=3,u=function(){0==--o&&n()};e=u,webOS.service.request("luna://com.webos.service.tv.systemproperty",{method:"getSystemInfo",parameters:{keys:["modelName","firmwareVersion","UHD","sdkVersion"]},onSuccess:function(n){n.returnValue&&(s=n),e()},onFailure:function(){e()}}),i=u,webOS.service.request("luna://com.webos.settingsservice",{method:"getSystemSettings",parameters:{category:"option"},onSuccess:function(n){n.returnValue&&(a=n),i()},onFailure:function(){i()}}),r=u,webOS.service.request("luna://com.webos.service.connectionmanager",{method:"getStatus",onSuccess:function(n){n.returnValue&&(f=n),r()},onFailure:function(){r()}})},getCrossPublisherId:function(){return typeof webOS!==p&&webOS.device&&webOS.device.serialNumber&&"Unknown"!=webOS.device.serialNumber?webOS.device.serialNumber:null},getAppName:function(){return v},getAppVersion:function(){return v},getVisitorId:function(){return+new Date+~~(1e3*Math.random())},getVisitorIdSuffix:function(){return"72"},getDeviceModel:function(){return s&&s.modelName?s.modelName:v},getPlatformVersion:function(){return s&&s.sdkVersion?s.sdkVersion:v},getPlatformName:function(){return"js"},getRuntimeName:function(){return"webOS"},getRuntimeVersion:function(){return typeof webOS!==p&&webOS.device?webOS.device.platformVersion:v},getDisplayResolution:function(){var n=0;typeof webOS!==p&&webOS.device?n=webOS.device.screenWidth:typeof window!=p&&window.screen&&(n=window.screen.availWidth);var t=0;return typeof webOS!==p&&typeof webOS.device!==p?t=webOS.device.screenHeight:typeof window!=p&&window.screen&&(t=window.screen.availHeight),0<n&&0<t?n+"x"+t:d},getLanguage:function(){return a&&a.locales&&(a.locales.UI||a.locales.TV)||v},getPackageName:function(){return v},isConnectionAvailable:function(){return!f||!f.isInternetConnectionAvailable||f.isInternetConnectionAvailable},isCompatible:function(){return typeof window!==p&&!i.jt(window.webOS)&&!i.jt(webOS.service)&&!i.jt(webOS.service.request)},getConnectionType:function(){if(f&&(f.wired||f.wifi)){if("connected"===f.wired.state&&"yes"===f.wired.onInternet)return"eth";if("connected"===f.wifi.state&&"yes"===f.wifi.onInternet)return"wifi"}return v},isConnectionSecure:function(){return typeof document!=p&&null!=document&&"s"===document.location.href.charAt(4)}};t.exports=h},{17:17,21:21,27:27,46:46,48:48,50:50}],44:[function(n,t,e){var i=n(17),r=n(53).wr,o=n(53).yr,u=n(46),s=n(27),a="undefined",f=i.D,c=i.Qt,l=null,p=null,v=null,d=!1,h=!1,_=!1;function g(){typeof Windows!=a&&Windows&&Windows.Xbox&&Windows.Xbox.ApplicationModel&&Windows.Xbox.ApplicationModel.Core&&Windows.Xbox.ApplicationModel.Core.CoreApplicationContext&&Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.addEventListener("currentuserchanged",function(){h=!0}),m(),_=!0}function m(){var n=null;if(typeof Windows!=a&&Windows&&Windows.Xbox&&Windows.Xbox.ApplicationModel&&Windows.Xbox.ApplicationModel.Core&&Windows.Xbox.ApplicationModel.Core.CoreApplicationContext&&Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentUser){var t=Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentUser;null!=t&&!t.br&&t.Ir&&(n=Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentUser.xboxUserId)}v=n}var w={PLATFORM:"xbox",httpGet:r,httpPost:o,Storage:u,IO:s,getCrossPublisherId:function(){return _||g(),h&&m(),v},getAppName:function(){var n=f;return typeof Windows!=a&&Windows&&Windows.ApplicationModel&&Windows.ApplicationModel.Package&&Windows.ApplicationModel.Package.current&&Windows.ApplicationModel.Package.current.id&&Windows.ApplicationModel.Package.current.id.name&&(n=Windows.ApplicationModel.Package.current.id.name),n},getAppVersion:function(){var n=f;if(typeof Windows!=a&&Windows&&Windows.ApplicationModel&&Windows.ApplicationModel.Package&&Windows.ApplicationModel.Package.current&&Windows.ApplicationModel.Package.current.id&&Windows.ApplicationModel.Package.current.id.version){var t=Windows.ApplicationModel.Package.current.id.version;n=t.major+"."+t.minor+"."+t.build+"."+t.revision}return n},getVisitorId:function(){return d||function(){l=typeof Windows!=a&&Windows&&Windows.Xbox&&Windows.Xbox.System&&Windows.Xbox.System.Console&&Windows.Xbox.System.Console.applicationSpecificDeviceId?Windows.Xbox.System.Console.applicationSpecificDeviceId:this.getDeviceModel()+ +new Date+~~(1e3*Math.random()),p="72",d=!0}(),l},getVisitorIdSuffix:function(){return p},getDeviceModel:function(){return"xbox one"},getPlatformVersion:function(){var t=f;return typeof navigator!=a&&navigator&&navigator.userAgent&&navigator.userAgent.split(";").filter(function(n){return-1!=n.indexOf("Windows NT")}).forEach(function(n){t=n.substr(n.indexOf("Windows NT")+11,n.length-1)}),t},getPlatformName:function(){return"xbox"},getRuntimeName:function(){return"winjs"},getRuntimeVersion:function(){var t=f;return typeof Windows!=a&&Windows&&Windows.ApplicationModel&&Windows.ApplicationModel.Package&&Windows.ApplicationModel.Package.current&&Windows.ApplicationModel.Package.current.dependencies&&Windows.ApplicationModel.Package.current.dependencies.filter(function(n){return n&&n.id&&n.id.name&&-1!=n.id.name.indexOf("WinJS")&&n.id.version}).forEach(function(n){t=n.id.version.major+"."+n.id.version.minor+"."+n.id.version.build+"."+n.id.version.revision}),t},getDisplayResolution:function(){var n=c;if(typeof Windows!=a&&Windows&&Windows.Xbox&&Windows.Xbox.Graphics&&Windows.Xbox.Graphics.Display&&Windows.Xbox.Graphics.Display.DisplayConfiguration&&Windows.Xbox.Graphics.Display.DisplayConfiguration.getForCurrentView&&Windows.Xbox.Graphics.Display.DisplayConfiguration.getForCurrentView()&&Windows.Xbox.Graphics.Display.DisplayConfiguration.getForCurrentView().currentDisplayMode&&Windows.Xbox.Graphics.Display.DisplayConfiguration.getForCurrentView().currentDisplayMode.rawWidth&&Windows.Xbox.Graphics.Display.DisplayConfiguration.getForCurrentView().currentDisplayMode.rawHeight){var t=Windows.Xbox.Graphics.Display.DisplayConfiguration.getForCurrentView().currentDisplayMode;n=t.rawWidth+"x"+t.rawHeight}return n},getApplicationResolution:function(){var n=c;return typeof window!=a&&window.innerWidth&&window.innerHeight&&(n=window.innerWidth+"x"+window.innerHeight),n},getLanguage:function(){var n=f;return typeof Windows!=a&&Windows&&Windows.System&&Windows.System.UserProfile&&Windows.System.UserProfile.GlobalizationPreferences&&Windows.System.UserProfile.GlobalizationPreferences.languages&&(n=Windows.System.UserProfile.GlobalizationPreferences.languages.getAt(0)),n},getPackageName:function(){var n=f;return typeof Windows!=a&&Windows&&Windows.ApplicationModel&&Windows.ApplicationModel.Package&&Windows.ApplicationModel.Package.current&&Windows.ApplicationModel.Package.current.id&&Windows.ApplicationModel.Package.current.id.name&&(n=Windows.ApplicationModel.Package.current.id.name),n},isConnectionAvailable:function(){return!(typeof Windows!=a&&Windows&&Windows.Networking&&Windows.Networking.Connectivity&&Windows.Networking.Connectivity.NetworkInformation&&Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile&&Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile()&&Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile().getNetworkConnectivityLevel&&Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile().getNetworkConnectivityLevel())||4==Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile().getNetworkConnectivityLevel()},isCompatible:function(){return typeof WinJS!=a&&WinJS&&typeof Windows!=a&&Windows&&Windows.Xbox},setPlatformAPI:function(){},isCrossPublisherIdChanged:function(){return _||g(),h},getDeviceArchitecture:function(){var n="unknown";if(typeof Windows!=a&&Windows&&Windows.ApplicationModel&&Windows.ApplicationModel.Package&&Windows.ApplicationModel.Package.current&&Windows.ApplicationModel.Package.current.id&&Windows.ApplicationModel.Package.current.id.architecture)switch(Windows.ApplicationModel.Package.current.id.architecture){case 5:n="arm";break;case 11:n="neutral";break;case 9:n="x64";break;case 0:n="x86"}return n},getConnectionType:function(){var n=f;if(typeof Windows!=a&&Windows&&Windows.Networking&&Windows.Networking.Connectivity&&Windows.Networking.Connectivity.NetworkInformation&&Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile&&Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile()&&Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile().networkAdapter&&Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile().networkAdapter.ianaInterfaceType)switch(Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile().networkAdapter.ianaInterfaceType){case 6:n="eth";break;case 71:n="wifi"}return n},getDeviceJailBrokenFlag:function(){return f},isConnectionSecure:function(){return typeof document!=a&&null!=document&&"s"===document.location.href.charAt(4)}};t.exports=w},{17:17,27:27,46:46,53:53}],45:[function(n,t,e){var i=n(24),r="undefined",o="cs_";t.exports=function(){var e=typeof atv!=r&&typeof atv.localStorage!=r&&atv.localStorage||null;i.extend(this,{get:function(n){return e&&n&&e.getItem(o+n)||null},set:function(n,t){e&&n&&(e[o+n]=t)},has:function(n){return e&&n&&null!=e.getItem(o+n)||!1},remove:function(n){e&&n&&e.removeItem(o+n)},clear:function(){}})}},{24:24}],46:[function(n,t,e){var i=n(24),r="cs_";t.exports=function(){var e="undefined"!=typeof localStorage?localStorage:null;i.extend(this,{get:function(n){try{return e&&"function"==typeof e.getItem?e.getItem(r+n):e?e[r+n]:e}catch(n){}},set:function(n,t){try{e&&"function"==typeof e.setItem?e.setItem(r+n,t):e&&(e[r+n]=t)}catch(n){}},has:function(n){try{return e&&"function"==typeof e.getItem?e.getItem(r+n):e?e[r+n]:e}catch(n){}},remove:function(n){try{e&&"function"==typeof e.removeItem?e.removeItem(r+n):e&&delete e[r+n]}catch(n){}},clear:function(){try{for(var n=0;e&&n<e.length;++n){var t=e.key(n);t.substr(0,r.length)===r&&("function"==typeof e.removeItem?e.removeItem(t):delete e[t])}}catch(n){}}})}},{24:24}],47:[function(n,t,e){var i,r,o=n(24),u="cs_";"undefined"!=typeof sf?r=i=function(n,t){sf.core.localData(n,t)}:(r=function(n,t){$.sf.setData(n,void 0===t?null:t)},i=function(n){return $.sf.getData(n)});t.exports=function(){o.extend(this,{get:function(n){return i(u+n)},set:function(n,t){r(u+n,t)},has:function(n){return void 0!==i(u+n)},remove:function(n){r(u+n,null)}})}},{24:24}],48:[function(n,t,e){var r="undefined";e.gr=function(n,t){if(typeof XMLHttpRequest!=r){var e=new XMLHttpRequest;e.open("GET",n,!0),e.onreadystatechange=function(){4===e.readyState&&(t&&t(e.status),e=null)},e.send()}else"function"==typeof setTimeout?t&&setTimeout(t,0):t&&t()},e._r=function(n,t,e){if(typeof XMLHttpRequest!=r){var i=new XMLHttpRequest;i.open("POST",n,!0),i.onreadystatechange=function(){4===i.readyState&&(e&&e(i.status),i=null)},i.send(t)}else"function"==typeof setTimeout?e&&setTimeout(e,0):e&&e()}},{}],49:[function(n,t,e){var r="undefined";e.dr=function(n,t){if(typeof atv!=r&&typeof XMLHttpRequest!=r){var e=new XMLHttpRequest;e.open("GET",n,!0),e.onreadystatechange=function(){4==e.readyState&&(t&&t(e.status),e=null)},e.send()}else typeof atv!=r&&"function"==typeof atv.setTimeout?t&&atv.setTimeout(t,0):t&&t()},e.hr=function(n,t,e){if(typeof atv!=r&&typeof XMLHttpRequest!=r){var i=new XMLHttpRequest;i.open("POST",n,!0),i.onreadystatechange=function(){4===i.readyState&&(e&&e(i.status),i=null)},i.send(t)}else typeof atv!=r&&"function"==typeof atv.setTimeout?e&&atv.setTimeout(e,0):e&&e()}},{}],50:[function(n,t,e){t.exports=function(n,t){if("undefined"!=typeof Image){var e=new Image;e.onload=function(){t&&t(200),e=null},e.onerror=function(){t&&t(),e=null},e.src=n}else"function"==typeof setTimeout?t&&setTimeout(t,0):t&&t()}},{}],51:[function(n,t,e){t.exports=function(n,t){"undefined"!=typeof engine?(engine.createHttpClient().createRequest("GET",n,null).start(),t&&setTimeout(t,0)):"function"==typeof setTimeout?t&&setTimeout(t,0):t&&t()}},{}],52:[function(n,t,e){t.exports.Sr=function(n,t){"function"==typeof setTimeout?t&&setTimeout(function(){t(200)},0):t&&t(200)},t.exports.mr=function(n,t,e){"function"==typeof setTimeout?e&&setTimeout(function(){e(200)},0):e&&e(200)}},{}],53:[function(n,t,e){var i="undefined";e.wr=function(n,t){typeof WinJS!=i&&typeof WinJS.xhr!=i?WinJS.xhr({url:n}).then(function(n){t&&t(n.status)},function(){t&&t()}):"function"==typeof setTimeout?t&&setTimeout(t,0):t&&t()},e.yr=function(n,t,e){typeof WinJS!=i&&typeof WinJS.xhr!=i?WinJS.xhr({type:"post",url:n,data:t,headers:{"Content-type":"application/xml"}}).then(function(n){e&&e(n.status)},function(){e&&e()}):"function"==typeof setTimeout?e&&setTimeout(e,0):e&&e()}},{}],54:[function(n,t,e){var on=n(24),un=n(17),sn=n(21),an=n(68),fn=n(23),cn=500,ln=100;function i(){var t,e,I,S,i,r,o,u,P,A,C,k,s,a,E,T,f,N,L,c,D,R,M,O,W,V,x,U,B,F,j,l,G,K,n,q,p,v,d,H,h,_,g,Y,m,w,J,y,z,Q,X,Z,$,nn,b,tn,en=this,rn=cn;on.extend(en,{Pr:function(){return t},Ar:function(n){t=n},setPlaybackIntervalMergeTolerance:function(n){rn=n},getPlaybackIntervalMergeTolerance:function(){return rn},Cr:function(n,t){S[n]=t},kr:function(n){return S[n]},Er:function(n){return null!=S[n]},setLabels:function(n){n&&on.extend(i,n)},getLabels:function(){return i},setLabel:function(n,t){i[n]=t},getLabel:function(n){return i[n]},dt:function(n){return n in i},Tr:function(){return parseInt(en.kr("ns_st_cn"))},Nr:function(n){en.Cr("ns_st_cn",n+"")},Lr:function(){return en.dt("ns_st_pn")?parseInt(en.getLabel("ns_st_pn")):parseInt(en.kr("ns_st_pn"))},Dr:function(n,t,e){var i=n,r=parseInt(i.ns_st_po),o=sn.jt(i.ns_st_ap)?D:parseInt(i.ns_st_ap);e&&tn<0&&0<k-r?(i.ns_st_ap=o+k-r,i.ns_st_dap=o+k-r-R):e&&0<tn&&0<r-k?(i.ns_st_ap=o+r-k,i.ns_st_dap=o+r-k-R):(i.ns_st_ap=o,i.ns_st_dap=o-R);var u=sn.jt(i.ns_st_pt)?en.Rr():parseInt(i.ns_st_pt);i.ns_st_pt=u+(isNaN(P)?0:t-P)+"",i.ns_st_dpt=u+(isNaN(P)?0:t-P)-A+"",i.ns_st_ipt=u+(isNaN(P)?0:t-P)-C+"";var s=sn.jt(i.ns_st_et)?en.Mr():parseInt(i.ns_st_et);i.ns_st_et=s+(isNaN(E)?0:t-E)+"",i.ns_st_det=s+(isNaN(E)?0:t-E)-T+"";var a=sn.jt(i.ns_st_bt)?en.Or():parseInt(i.ns_st_bt);i.ns_st_bt=a+"",i.ns_st_dbt=a+(isNaN(G)?0:t-G)-K+"";var f=M,c=O;e&&(f=an.Wr(fn(M),tn<0?r:W,tn<0?W:r,rn),c=an.Wr(fn(O),tn<0?r:W,tn<0?W:r,rn));for(var l,p=0,v=0,d=0;d<f.length;d++)p+=l=Math.abs(f[d].end-f[d].start),v<l&&(v=l);var h=0,_=0;for(d=0;d<c.length;d++)h+=l=Math.abs(c[d].end-c[d].start),_<l&&(_=l);i.ns_st_upc=p+"",i.ns_st_dupc=p-V+"",i.ns_st_iupc=p-x+"",i.ns_st_iupc=x<p?p-x+"":"0",i.ns_st_lpc=v+"",i.ns_st_dlpc=v-U+"",i.ns_st_upa=h+"",i.ns_st_dupa=h-B+"",i.ns_st_iupa=F<h?h-F+"":"0",i.ns_st_lpa=_+"",i.ns_st_dlpa=_-j+"";var g=sn.jt(i.ns_st_pc)?en.Vr():parseInt(i.ns_st_pc);i.ns_st_pc=g+"",i.ns_st_dpc=g-J+"";var m=sn.jt(i.ns_st_skc)?en.xr():parseInt(i.ns_st_skc);i.ns_st_skc=m+"",i.ns_st_dskc=m-z+"";var w=sn.jt(i.ns_st_bc)?en.Ur():parseInt(i.ns_st_bc);i.ns_st_bc=w+"",i.ns_st_dbc=w-q+"";var y=sn.jt(i.ns_st_skt)?en.Br():parseInt(i.ns_st_skt);i.ns_st_skt=y+"",i.ns_st_dskt=y-H+"";var b=sn.jt(i.ns_st_ska)?en.Fr():parseInt(i.ns_st_ska);i.ns_st_ska=b+"",i.ns_st_dska=b-Y+"",I&&(i.ns_st_spc=Q+"",i.ns_st_apc=X+"",i.ns_st_sq=Z+"",i.ns_st_asq=$+""),i.ns_st_sc=I||0!=nn?nn+"":"1",i.ns_st_rt=tn+"",i.ns_st_ldw=N,i.ns_st_ldo=L,on.extend(i,S)},jr:function(n){A=parseInt(n.ns_st_pt),R=parseInt(n.ns_st_ap),T=parseInt(n.ns_st_et),K=parseInt(n.ns_st_bt),V=parseInt(n.ns_st_upc),U=parseInt(n.ns_st_lpc),B=parseInt(n.ns_st_upa),j=parseInt(n.ns_st_lpa),J=parseInt(n.ns_st_pc),z=parseInt(n.ns_st_skc),q=parseInt(n.ns_st_bc),H=parseInt(n.ns_st_skt),Y=parseInt(n.ns_st_ska),en.Gr(0)},Kr:function(n){C=parseInt(n.ns_st_pt),x=parseInt(n.ns_st_upc),F=parseInt(n.ns_st_upa)},qr:function(){return en.kr("ns_st_vt")},Hr:function(n){en.Cr("ns_st_vt",n+"")},Yr:function(){return en.kr("ns_st_at")},Jr:function(n){en.Cr("ns_st_at",n+"")},zr:function(){return en.kr("ns_st_tt")},Qr:function(n){en.Cr("ns_st_tt",n+"")},Xr:function(){return en.kr("ns_st_cdn")},Zr:function(n){en.Cr("ns_st_cdn",n+"")},$r:function(){return M},no:function(n){M=n},to:function(){return O},eo:function(){w++},io:function(){y++},ro:function(){Z++},oo:function(){return Z},Or:function(){return l},uo:function(n){l=n},so:function(n){if(!isNaN(G)){var t=en.Or();t+=n-G,en.uo(t),G=NaN}},ao:function(n){W=parseInt(n)},fo:function(){return W},co:function(n){isNaN(W)||isNaN(n)||(M=an.Wr(M,tn<0?n:W,tn<0?W:n,rn),O=an.Wr(O,tn<0?n:W,tn<0?W:n,rn),W=NaN)},Mr:function(){return a},lo:function(n){a=n},po:function(n){if(!isNaN(E)){var t=en.Mr();t+=n-E,en.lo(t),E=NaN}},vo:function(){return E},do:function(n){E=n},ho:function(n){isNaN(P)||(u+=n-P,P=NaN)},Rr:function(){return u},_o:function(n){var t=k+c-L;return!o&&isNaN(P)||(t+=Math.floor((n-s)*tn/100)),t},mo:function(n,t){return o?k-n+Math.floor((t-s)*tn/100)+c:0},wo:function(n,t){k=n,s=t},yo:function(){return P},bo:function(n){P=n},Io:function(n){A=n},So:function(){return G},Po:function(n){G=n},Vr:function(){return w},Ao:function(n){w=n},xr:function(){return y},Co:function(n){y=n},ko:function(n){p=n},Eo:function(){return p},To:function(n){_=n},No:function(){return _},Lo:function(n){e=n},Do:function(){return e},Ro:function(n){I=n},Mo:function(){return I},Oo:function(n){v=n},Wo:function(){return v},Vo:function(n){if(!isNaN(v)){var t=en.Br();t+=n-v,en.xo(t),v=NaN}},Br:function(){return d},xo:function(n){d=n},Uo:function(n){m=n},Bo:function(){return m},Fo:function(n){h=n},jo:function(){return h},Go:function(n){g=n},Fr:function(){return g},Ko:function(n){var t,e=en.Fr();e+=Math.abs(n-h),en.Go(e),h==n?t=0:n<h?t=-1:h<n&&(t=1),en.Gr(t),h=0},qo:function(){return parseInt(en.kr("ns_st_skd"))},Gr:function(n){en.Cr("ns_st_skd",n+"")},Ho:function(){O=[],z=y=Y=g=H=d=T=a=j=F=B=Z=J=w=q=n=K=l=C=A=u=R=D=0},Yo:function(){Q++},Jo:function(){nn++},zo:function(){X++},Qo:function(){return V},Xo:function(n){V=n},Zo:function(){return x},$o:function(n){x=n},nu:function(n){U=n},tu:function(){return U},eu:function(){O=[],j=F=B=0},iu:function(n){Q=n},ru:function(n){nn=n},ou:function(n){X=n},uu:function(n){f=n},su:function(){return Q},au:function(){return nn},fu:function(){return X},cu:function(){return f},Ur:function(){return n},lu:function(){n++},pu:function(){return K},vu:function(n){$=n},du:function(){$++},hu:function(){return $},_u:function(){return b},gu:function(n){b=n},mu:function(n){r=!!n},wu:function(){return r},yu:function(){return tn},bu:function(n){tn=n},Iu:function(n){tn<0&&0<k-n?D+=k-n:0<tn&&0<n-k&&(D+=n-k)},Su:function(n){N=n},Pu:function(){return N},Au:function(n){L=n},Cu:function(){return L},ku:function(n){c=n},Eu:function(n){o=n}}),(S={}).ns_st_cl="0",S.ns_st_pn="1",S.ns_st_tp="0",S.ns_st_cn="1",S.ns_st_skd="0",S.ns_st_ci="0",S.c3="*null",S.c4="*null",S.c6="*null",S.ns_st_st="*null",S.ns_st_pu="*null",S.ns_st_pr="*null",S.ns_st_ep="*null",S.ns_st_sn="*null",S.ns_st_en="*null",S.ns_st_ct="*null",e=I=!(i={}),t=un.D,o=!(r=!0),M=[],v=G=W=E=P=NaN,nn=$=Z=X=Q=z=y=J=w=Y=g=H=d=m=h=q=n=K=l=j=F=B=U=x=V=R=D=c=L=N=C=T=f=a=A=k=u=0,b=_=p=!(O=[]),tn=ln}i.Tu=function(n,t,e){for(var i=n.getLabels(),r={},o=0;e&&o<e.length;++o)i.hasOwnProperty(e[o])&&(r[e[o]]=i[e[o]]);t.setLabels(r),t.setPlaybackIntervalMergeTolerance(n.getPlaybackIntervalMergeTolerance())},t.exports=i},{17:17,21:21,23:23,24:24,68:68}],55:[function(n,t,e){t.exports={PAGE_NAME_LABEL:"name",HASH_LABELS:["ns_st_st","ns_st_ci","ns_st_pr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_ty","ns_st_ct","ns_st_li","ns_st_ad","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pu","c3","c4","c6"]}},{}],56:[function(n,t,e){var f=n(73),p=n(74),v=n(76),d=n(77),h=n(69),g=n(71),m=n(72),w=n(70),y=n(75),Q=n(78),X=n(79),Z=n(80),$=n(81),nn=n(55),tn=n(68),en=n(65),rn=n(20),on=n(24),un=n(19),sn=n(82),an=n(62),fn=n(63),cn=n(58).Nu,ln=n(58).Lu,pn=n(58).Du,vn=n(61),dn=n(60),hn=n(59),_n=n(18),gn=n(66),mn=n(17),wn=n(2),yn="undefined",bn="6.2.3.180328",In="5.10",Sn="STA",Pn="js_api",An=500,Cn=500;t.exports=function(b){var I,S,P,A,C,k,E,T,N,L,D,R,M,O,t,e,W,V,i,r,o,x,U,s,c,B,F,j=this,n={},u=An,a=Cn,_={},l=!1,G=!0,K=!1,q=!1;function H(n){var t=I.Mu().Ru();if(t==cn.IDLE||t==cn.PLAYBACK_NOT_STARTED||t==cn.BUFFERING_BEFORE_PLAYBACK||t==cn.SEEKING_BEFORE_PLAYBACK){if(n==ln.PLAY)return!0}else if(t==cn.PLAYING){if(n==ln.END||n==ln.AD_SKIP||n==ln.SEEK_START||n==ln.PAUSE)return!0}else if(t==cn.PAUSED||t==cn.BUFFERING_DURING_PAUSE||t==cn.SEEKING_DURING_PLAYBACK||t==cn.SEEKING_DURING_BUFFERING||t==cn.SEEKING_DURING_PAUSE){if(n==ln.END||n==ln.AD_SKIP||n==ln.PLAY)return!0}else if(t==cn.BUFFERING_DURING_PLAYBACK){if(n==ln.PAUSE_ON_BUFFERING||n==ln.END||n==ln.AD_SKIP||n==ln.SEEK_START||n==ln.PAUSE||n==ln.PLAY)return!0}else if(t==cn.BUFFERING_DURING_SEEKING){if(n==ln.END||n==ln.AD_SKIP||n==ln.PAUSE||n==ln.PLAY)return!0}else if(t==cn.PAUSED_DURING_BUFFERING&&(n==ln.END||n==ln.AD_SKIP||n==ln.BUFFER_STOP||n==ln.PLAY))return!0;return!1}function Y(){K||(K=!0,sn.Ou(J))}function J(n){F=n,q=!0}function z(){var n={},t=tn.Wu(n);j.Vu(ln.END,t,n)}on.extend(j,{getConfiguration:function(){return b||{}},Dr:function(n,t,e){var i=I.getPlaybackSession(),r=i.getAsset(),o=!1;if(n==ln.HEARTBEAT){var u=isNaN(V)?W:V;((V=e)<u||q)&&(q=!(o=!0),e<u?(i.xu("1"),I.Uu().$t("System clock jump detected","to the far past")):F?(i.xu("3"),I.Uu().$t("System clock jump detected","to the future")):(i.xu("2"),I.Uu().$t("System clock jump detected","to the near past")),e=u)}var s={};if(l&&(s.c2=c),typeof document!=yn){var a=document;s.c7=a.URL,s.c8=a.title,s.c9=a.referrer}s.ns_ts=+new Date+"",s.ns_st_ev=ln.toString(n),s.ns_st_mp=Pn,s.ns_st_mv=bn,s.ns_st_ub="0",s.ns_st_br="0",s.ns_st_pn="1",s.ns_st_tp="0",s.ns_st_it=pn.toString(pn.Bu),s.ns_st_sv=bn,s.ns_st_smv=In,s.ns_type="hidden",s.ns_st_ec=I.ju().Fu()+"",s.ns_st_ki=I.S().Gu()+"",t.ns_st_po?s.ns_st_po=t.ns_st_po+"":r.wu()?s.ns_st_po=r._o(e)+"":s.ns_st_po=B+"",B=parseInt(s.ns_st_po),i.Dr(s,e),i.getAsset().Dr(s,e,n==ln.HEARTBEAT);var f={};return on.extend(f,_),on.extend(f,i.getLabels()),on.extend(f,i.getAsset().getLabels()),on.extend(f,t),o&&(r.wo(B,V),i.bo(V-parseInt(s.ns_st_dpt)),r.bo(V-parseInt(s.ns_st_dpt)),r.do(V-parseInt(s.ns_st_det))),{Wt:n,Ut:s,Ku:f}},Vu:function(n,t,e,i){j.qu();var r=I.Mu().Ru(),o=I.Mu().Hu(n);if(null!=o&&o!=r)if(!j.isThrottlingEnabled()||r!=cn.PLAYING&&r!=cn.PAUSED||o!=cn.PLAYING&&o!=cn.PAUSED||i){var u,s;b.systemClockJumpDetection&&(o==cn.IDLE?(sn.Yu(J),K=!1):r==cn.IDLE&&Y()),G&&tn.Ju(r)&&!tn.Ju(o)?an.zu(z):G&&!tn.Ju(r)&&tn.Ju(o)&&an.Qu(z);var a=I.getPlaybackSession(),f=a.getAsset(),c=isNaN(V)?W:V,l=!1;((V=t)<c||q)&&(q=!(l=!0),t<c?(a.xu("1"),I.Uu().$t("System clock jump detected","to the far past")):F?(a.xu("3"),I.Uu().$t("System clock jump detected","to the future")):(a.xu("2"),I.Uu().$t("System clock jump detected","to the near past")),t=c),e.ns_st_po?I.Mu().Ru()==cn.IDLE?f.Au(f.Pu()-parseInt(e.ns_st_po)):f.Au(f.mo(parseInt(e.ns_st_po),t)):f.wu()?I.Mu().Ru()==cn.IDLE?e.ns_st_po=f.Pu()-f.Cu()+"":e.ns_st_po=f._o(t)+"":e.ns_st_po=B+"";var p,v,d,h,_=parseInt(e.ns_st_po);B=_,p=n,v=t,d=e,h=I.Mu().Ru(),p==ln.AD_SKIP&&!d.hasOwnProperty("ns_st_ui")&&H(p)?d.ns_st_ui="skip":p==ln.SEEK_START&&!d.hasOwnProperty("ns_st_ui")&&H(p)&&(d.ns_st_ui="seek"),h==cn.IDLE?p==ln.BUFFER?S.Xu(v,d):p==ln.SEEK_START?S.Zu(v,d):p==ln.PLAY&&S.$u(v,d):h==cn.PLAYBACK_NOT_STARTED?p==ln.END||p==ln.AD_SKIP?A.ns(v,d):p==ln.SEEK_START?A.Zu(v,d):p==ln.PLAY?A.$u(v,d):p==ln.BUFFER&&A.Xu(v,d):h==cn.PLAYING?p==ln.END||p==ln.AD_SKIP?C.ns(v,d):p==ln.BUFFER?C.Xu(v,d):p==ln.SEEK_START?C.Zu(v,d):p==ln.PAUSE&&C.ts(v,d):h==cn.PAUSED?p==ln.END||p==ln.AD_SKIP?P.ns(v,d):p==ln.PLAY?P.$u(v,d):p==ln.BUFFER?O.es(v,d):p==ln.SEEK_START&&O.rs(v,d):h==cn.BUFFERING_BEFORE_PLAYBACK?p==ln.END||p==ln.AD_SKIP?k.ns(v,d):p==ln.BUFFER_STOP?k.os(v,d):p==ln.SEEK_START?k.Zu(v,d):p==ln.PAUSE?k.ts(v,d):p==ln.PLAY&&k.$u(v,d):h==cn.BUFFERING_DURING_PLAYBACK?p==ln.PAUSE_ON_BUFFERING?E.us(v,d):p==ln.BUFFER_STOP?O.ss(v,d):p==ln.END||p==ln.AD_SKIP?E.ns(v,d):p==ln.SEEK_START?E.Zu(v,d):p==ln.PAUSE?E.ts(v,d):p==ln.PLAY&&O.ss(v,d):h==cn.BUFFERING_DURING_SEEKING?p==ln.END||p==ln.AD_SKIP?T.ns(v,d):p==ln.PAUSE?T.ts(v,d):p==ln.PLAY?T.$u(v,d):p==ln.BUFFER_STOP&&O.as(v,d):h==cn.BUFFERING_DURING_PAUSE?p==ln.END||p==ln.AD_SKIP?N.fs(v,d):p==ln.PAUSE?N.ts(v,d):p==ln.PLAY?N.$u(v,d):p==ln.SEEK_START?O.rs(v,d):p==ln.BUFFER_STOP&&O.as(v,d):h==cn.SEEKING_BEFORE_PLAYBACK?p==ln.END||p==ln.AD_SKIP?D.ns(v,d):p==ln.PAUSE?D.ts(v,d):p==ln.PLAY?D.$u(v,d):p==ln.BUFFER&&O.es(v,d):h==cn.SEEKING_DURING_PLAYBACK?p==ln.END||p==ln.AD_SKIP?M.ns(v,d):p==ln.PLAY?M.$u(v,d):p==ln.BUFFER?O.es(v,d):p==ln.PAUSE&&O.cs(v,d):h==cn.SEEKING_DURING_BUFFERING?p==ln.PAUSE?R.ts(v,d):p==ln.BUFFER?O.es(v,d):p==ln.PLAY?O.ls(v,d):p==ln.END||p==ln.AD_SKIP?O.ps(v,d):p==ln.BUFFER_STOP&&O.vs(v,d):h==cn.PAUSED_DURING_BUFFERING?p==ln.END||p==ln.AD_SKIP?L.ns(v,d):p==ln.BUFFER_STOP?L.ds(v,d):p==ln.SEEK_START?L.Zu(v,d):p==ln.PAUSE?L.ts(v,d):p==ln.PLAY&&L.ds(v,d):h==cn.SEEKING_DURING_PAUSE&&(p==ln.BUFFER?O.es(v,d):p==ln.PLAY?O.ls(v,d):p==ln.PAUSE?O.cs(v,d):p==ln.END||p==ln.AD_SKIP?O.ps(v,d):p==ln.BUFFER_STOP&&O.vs(v,d)),H(p)&&I.getPlaybackSession().hs(!0),f.wo(_,t),f.ku(f.Cu());var g=0;isNaN(I.Mu()._s())||(g=t-I.Mu()._s()),I.Mu().Vu(n,t),l&&(f.wo(_,V),o!=cn.IDLE&&o!=cn.PLAYBACK_NOT_STARTED&&o!=cn.SEEKING_BEFORE_PLAYBACK&&o!=cn.BUFFERING_BEFORE_PLAYBACK&&f.do(V),o!=cn.BUFFERING_BEFORE_PLAYBACK&&o!=cn.BUFFERING_DURING_PAUSE&&o!=cn.BUFFERING_DURING_PLAYBACK&&o!=cn.BUFFERING_DURING_SEEKING&&o!=cn.PAUSED_DURING_BUFFERING||(a.Po(V),f.Po(V)),o==cn.PLAYING&&(a.bo(V),f.bo(V)),o!=cn.SEEKING_BEFORE_PLAYBACK&&o!=cn.SEEKING_DURING_BUFFERING&&o!=cn.SEEKING_DURING_PAUSE&&o!=cn.SEEKING_DURING_PLAYBACK&&o!=cn.BUFFERING_DURING_SEEKING||f.Oo(V)),I.Uu().log("Transition from",tn.gs(r),"to",tn.gs(o),"due to event:",ln.toString(n));for(var m=0,w=U.length;m<w;m++)U[m](r,o,e,g)}else{I.Uu().$t("Throttled event:",ln.toString(n),"during state",tn.gs(r),e,j.getThrottlingDelay(),"ms");var y=(u=n,s=e,function(){j.Vu(u,t,s,!0)});x=j.getPlatformAPI().setTimeout(y,j.getThrottlingDelay())}else I.Uu().$t("Ignored event:",ln.toString(n),"during state",tn.gs(r),e)},ms:function(n,t,e){var i=I.Mu().Ru();if(n!=ln.LOAD&&n!=ln.ENGAGE||i==cn.IDLE){n==ln.ERROR&&null==e.ns_st_er&&(e.ns_st_er=mn.D),n==ln.TRANSFER&&null==e.ns_st_rp&&(e.ns_st_rp=mn.D);var r,o,u,s,a=!0,f=!1;switch(n){case ln.BIT_RATE:r="ns_st_br",o="ns_st_pbr";break;case ln.PLAYBACK_RATE:r="ns_st_rt",o="ns_st_prt";break;case ln.VOLUME:r="ns_st_vo",o="ns_st_pvo";break;case ln.WINDOW_STATE:r="ns_st_ws",o="ns_st_pws";break;case ln.AUDIO:r="ns_st_at",o="ns_st_pat";break;case ln.VIDEO:r="ns_st_vt",o="ns_st_pvt";break;case ln.SUBS:r="ns_st_tt",o="ns_st_ptt";break;case ln.CDN:r="ns_st_cdn",o="ns_st_pcdn";break;default:a=!1}var c=I.getPlaybackSession(),l=c.getAsset();if(a&&r in e)switch(s=e[r],n){case ln.BIT_RATE:case ln.VOLUME:case ln.WINDOW_STATE:r in _&&(u=_[r],f=s==(e[o]=u)+""),_[r]=e[r];break;case ln.AUDIO:case ln.VIDEO:case ln.SUBS:case ln.CDN:l.Er(r)&&(u=l.kr(r),f=s==(e[o]=u)+""),l.Cr(r,e[r]);break;case ln.PLAYBACK_RATE:u=l.yu(),e[o]=u+""}if(a&&i!=cn.PLAYING&&i!=cn.BUFFERING_DURING_PLAYBACK||a&&f)return n==ln.PLAYBACK_RATE&&l.bu(parseInt(e.ns_st_rt)),void I.Uu().$t("No measurement send for the pseudo-event:",ln.toString(n),"during state",tn.gs(i),e);var p=isNaN(V)?W:V,v=!1;((V=t)<p||q)&&(q=!(v=!0),t<p?(c.xu("1"),I.Uu().$t("System clock jump detected","to the far past")):F?(c.xu("3"),I.Uu().$t("System clock jump detected","to the future")):(c.xu("2"),I.Uu().$t("System clock jump detected","to the near past")),t=p),e.ns_st_po?l.Au(l.mo(parseInt(e.ns_st_po),t)):l.wu()?e.ns_st_po=l._o(t)+"":e.ns_st_po=B+"";var d=parseInt(e.ns_st_po);B=d,I.getPlaybackSession().getAsset().wo(d,t),l.ku(l.Cu()),i!=cn.IDLE&&i!=cn.PLAYBACK_NOT_STARTED&&i!=cn.SEEKING_BEFORE_PLAYBACK&&i!=cn.BUFFERING_BEFORE_PLAYBACK&&(l.po(t),l.do(t)),i==cn.PLAYING&&(c.ho(t),c.bo(t),l.ho(t),l.bo(t),l.Iu(d),l.co(parseInt(e.ns_st_po)),l.ao(parseInt(e.ns_st_po))),i!=cn.BUFFERING_BEFORE_PLAYBACK&&i!=cn.BUFFERING_DURING_PAUSE&&i!=cn.BUFFERING_DURING_PLAYBACK&&i!=cn.BUFFERING_DURING_SEEKING||(c.so(t),c.Po(t),l.so(t),l.Po(t));var h=j.Dr(n,e,t);l.jr(h.Ut),l.Kr(h.Ut),I.ju().Vu(h),n==ln.PLAYBACK_RATE&&l.bu(parseInt(e.ns_st_rt)),v&&(l.wo(d,V),i==cn.PLAYING&&(c.bo(V),l.bo(V)),i!=cn.IDLE&&i!=cn.PLAYBACK_NOT_STARTED&&i!=cn.SEEKING_BEFORE_PLAYBACK&&i!=cn.BUFFERING_BEFORE_PLAYBACK&&l.do(V),i!=cn.BUFFERING_BEFORE_PLAYBACK&&i!=cn.BUFFERING_DURING_PAUSE&&i!=cn.BUFFERING_DURING_PLAYBACK&&i!=cn.BUFFERING_DURING_SEEKING&&i!=cn.PAUSED_DURING_BUFFERING||(c.Po(V),l.Po(V)),i!=cn.SEEKING_BEFORE_PLAYBACK&&i!=cn.SEEKING_DURING_BUFFERING&&i!=cn.SEEKING_DURING_PAUSE&&i!=cn.SEEKING_DURING_PLAYBACK&&i!=cn.BUFFERING_DURING_SEEKING||l.Oo(V))}else I.Uu().$t("Ignored pseudo-event:",ln.toString(n),"during state",tn.gs(i),e)},getState:function(){return I.Mu().Ru()},addListener:function(n){U.push(n)},removeListener:function(n){U.splice(un.indexOf(n,U),1)},getLabel:function(n){return _[n]},getLabels:function(){return _},setLabel:function(n,t){null==t?delete _[n]:_[n]=t},setLabels:function(n){for(var t in n)n.hasOwnProperty(t)&&j.setLabel(t,n[t])},getPlatformAPI:function(){return I.ws().getPlatformAPI()},ys:function(){return n},isProperlyInitialized:function(){var n=I.ws().Wn(),t=I.ws().g(),e=I.ws().getPixelURL();return n&&e&&t},setThrottlingDelay:function(n){a=n},getThrottlingDelay:function(){return a},isThrottlingEnabled:function(){return o},setThrottlingEnabled:function(n){o=n},bs:function(){return t},Is:function(n){t=n},getLoadTimeOffset:function(){return e},setLoadTimeOffset:function(n){e=n},Ss:function(){return W},setPauseOnBufferingInterval:function(n){u=n},getPauseOnBufferingInterval:function(){return u},isPauseOnBufferingEnabled:function(){return i},setPauseOnBufferingEnabled:function(n){i=n},setExitEndEventEnabled:function(n){if(G!=n){var t=I.Mu().Ru();n||tn.Ju(t)?n&&!tn.Ju(t)&&an.zu(z):an.Qu(z)}G=n},isExitEndEventEnabled:function(){return G},Ps:function(n,i){j.As(),r=j.getPlatformAPI().setTimeout(function(){var n={},t=tn.Wu(n),e=parseInt(i.ns_st_po);n.ns_st_po=e+"",j.Vu(ln.PAUSE_ON_BUFFERING,t,n)},u)},As:function(){null!=r&&(j.getPlatformAPI().clearTimeout(r),r=null)},qu:function(){x&&(j.getPlatformAPI().clearTimeout(x),x=null)},setLiveEndpointURL:function(n){if(null==n||0==n.length)return null;var t=decodeURIComponent||unescape,e=n.indexOf("?");if(0<=e){if(e<n.length-1){for(var i=n.substring(e+1).split("&"),r=0,o=i.length;r<o;r++){var u=i[r].split("=");2==u.length?j.setLabel(u[0],t(u[1])):1==u.length&&j.setLabel(nn.PAGE_NAME_LABEL,t(u[0]))}n=n.substring(0,e+1)}}else n+="?";return s=n},getLiveEndpointURL:function(){return s||(typeof ns_p!==yn&&"string"==typeof ns_p.src?s=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):"string"==typeof ns_pixelUrl?s=ns_pixelUrl.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null)},Cs:function(){return I},ks:function(n){var t=I.getPlaybackSession();I.Es(new fn(I)),fn.ks(I,t,n)},Ts:function(){I.Ns().pause();var n=I.Ns().Ls();I.Ds(new dn(I)),I.Ns().Rs(n)},getVersion:function(){return bn}}),function(){if((I=new en(j)).Ms(wn.getCore()),I.Os(new vn(I)),I.Ds(new dn(I)),I.Ws(new hn(I)),I.Vs(new gn),I.xs(new _n(Sn,b.debug)),I.Es(new fn(I)),S=new f(I),P=new p(I),A=new v(I),C=new d(I),k=new h(I),E=new g(I),T=new m(I),N=new w(I),L=new y(I),D=new Q(I),R=new X(I),M=new Z(I),O=new $(I),t=!1,e=0,W=+new Date,o=!(i=!0),U=[],b.publisherId){l=!0,c=b.publisherId+"";var n=(("secure"in b?b.secure:I.ws()&&I.ws().isProperlyInitialized()?I.ws().isSecure():tn.fe()&&rn.ce())?"https://sb":"http://b")+".scorecardresearch.com/p?c1=2";j.setLiveEndpointURL(n)}b.liveEndpointURL&&j.setLiveEndpointURL(b.liveEndpointURL),b.systemClockJumpDetection&&(sn.setPlatformAPI(j.getPlatformAPI()),b.systemClockJumpDetectionInterval?sn.Us(parseInt(b.systemClockJumpDetectionInterval),!0):sn.Us(),b.systemClockJumpDetectionPrecision?sn.Bs(parseInt(b.systemClockJumpDetectionPrecision),!0):sn.Bs(),Y())}()}},{17:17,18:18,19:19,2:2,20:20,24:24,55:55,58:58,59:59,60:60,61:61,62:62,63:63,65:65,66:66,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82}],57:[function(n,t,e){var S,P,A=n(20),C=n(4),k="undefined";A.fe()?(S=window,P=document):(S={},P={location:{href:""},title:"",URL:"",referrer:"",cookie:""}),t.exports=function(n,t){for(var e,i=S.encodeURIComponent||escape,r=[],o=C.k,u=n.split("?"),s=u[0],a=u[1].split("&"),f=0,c=a.length;f<c;f++){var l=a[f].split("="),p=unescape(l[0]),v=unescape(l[1]);p&&(t[p]=v)}for(var d={},h=0,_=o.length;h<_;h++){var g=o[h];if(t.hasOwnProperty(g)){var m=t[g];typeof m!==k&&null!=m&&(d[g]=!0,r.push(i(g)+"="+i(t[g])))}}for(var w in t)if(t.hasOwnProperty(w)){if(d[w])continue;var y=t[w];typeof y!==k&&null!=y&&r.push(i(w)+"="+i(t[w]))}e=(e=s+"?"+r.join("&"))+(e.indexOf("&c8=")<0?"&c8="+i(P.title):"")+(e.indexOf("&c7=")<0?"&c7="+i(P.URL):"")+(e.indexOf("&c9=")<0?"&c9="+i(P.referrer):"");var b=A.Jt()?C.A:C.P;if(e.length>b&&0<e.indexOf("&")){var I=e.substr(0,b-8).lastIndexOf("&");e=(e.substring(0,I)+"&ns_cut="+i(e.substring(I+1))).substr(0,b)}return e}},{20:20,4:4}],58:[function(n,t,e){var i,r,o=(i=["play","pause","pause-on-buffering","end","buffer","buffer-stop","keep-alive","hb","custom","load","start","skstart","adskip","cta","error","trans","drmfa","drmap","drmde","bitrt","playrt","volume","window","audio","video","subs","cdn"],{PLAY:0,PAUSE:1,PAUSE_ON_BUFFERING:2,END:3,BUFFER:4,BUFFER_STOP:5,KEEPALIVE:6,HEARTBEAT:7,CUSTOM:8,LOAD:9,ENGAGE:10,SEEK_START:11,AD_SKIP:12,CTA:13,ERROR:14,TRANSFER:15,DRM_FAILED:16,DRM_APPROVED:17,DRM_DENIED:18,BIT_RATE:19,PLAYBACK_RATE:20,VOLUME:21,WINDOW_STATE:22,AUDIO:23,VIDEO:24,SUBS:25,CDN:26,toString:function(n){return i[n]}}),u=(r=["c","s","r"],{Bu:0,Fs:1,js:2,toString:function(n){return r[n]}});t.exports.Lu=o,t.exports.Nu={IDLE:0,PLAYBACK_NOT_STARTED:1,PLAYING:2,PAUSED:3,BUFFERING_BEFORE_PLAYBACK:4,BUFFERING_DURING_PLAYBACK:5,BUFFERING_DURING_SEEKING:6,BUFFERING_DURING_PAUSE:7,SEEKING_BEFORE_PLAYBACK:8,SEEKING_DURING_PLAYBACK:9,SEEKING_DURING_BUFFERING:10,SEEKING_DURING_PAUSE:11,PAUSED_DURING_BUFFERING:12},t.exports.Du=u},{}],59:[function(n,t,e){var s=n(24),a=n(57),f=n(58).Lu;t.exports=function(i){var t,r,o=this,u=[];s.extend(this,{Vu:function(n){for(var t=s.extend({},n.Ut,n.Ku),e=0;e<u.length;++e)u[e](t);!function(n){r=s.extend({},n);var t=i.Gs().getLiveEndpointURL();i.Gs().isProperlyInitialized()?i.ws().nt(n,t):t&&i.Gs().getPlatformAPI().httpGet(a(t,n))}(t),n.Wt!=f.HEARTBEAT&&o.Ks()},addMeasurementListener:function(n){"function"==typeof n&&u.push(n)},removeMeasurementListener:function(n){for(var t=NaN,e=0;e<u.length;++e)if(u[e]==n){t=e;break}isNaN(t)||u.splice(t,1)},Fu:function(){return t},Ks:function(){t++},qs:function(n){t=n},Hs:function(){return r}}),t=1}},{24:24,57:57,58:58}],60:[function(n,t,e){var c=n(58).Lu,l=n(68),p=n(24),v=[{Ys:6e4,interval:1e4},{Ys:null,interval:6e4}];t.exports=function(i){var e,r,o,u=this,s=v;function a(){o++;var n={},t=l.Wu(n);n.ns_st_hc=i.Ns().Js()+"";var e=i.Gs().Dr(c.HEARTBEAT,n,t);i.getPlaybackSession().getAsset().Kr(e.Ut),i.ju().Vu(e),r=0,u.resume()}function f(){null!=e&&(i.Gs().getPlatformAPI().clearTimeout(e),e=null)}p.extend(this,{Js:function(){return o},Rs:function(n){s=n},Gu:function(n){var t=0;if(null!=s)for(var e=0;e<s.length;e++){var i=s[e],r=i.Ys;if(!r||n<r){t=i.interval;break}}return t},Ls:function(){return s},resume:function(){f();var n=u.Gu(i.getPlaybackSession().getAsset().Rr()+(+new Date-i.getPlaybackSession().getAsset().yo()));if(0<n){var t=0<r?r:n;e=i.Gs().getPlatformAPI().setTimeout(a,t)}r=0},pause:function(){f();var n=u.Gu(i.getPlaybackSession().getAsset().Rr()+(+new Date-i.getPlaybackSession().getAsset().yo()));r=n-(i.getPlaybackSession().getAsset().Rr()+(+new Date-i.getPlaybackSession().getAsset().yo()))%n}}),o=r=0}},{24:24,58:58,68:68}],61:[function(n,t,e){var u=n(58).Lu,s=n(24),a=n(68),f=12e5;t.exports=function(e){var n,i=this,t=f;function r(){var n={},t=a.Wu(n);e.Gs().ms(u.KEEPALIVE,t,n),i.start()}function o(){null!=n&&(e.Gs().getPlatformAPI().clearTimeout(n),n=null)}s.extend(i,{start:function(){o(),n=e.Gs().getPlatformAPI().setTimeout(r,t)},stop:o,setInterval:function(n){t=n},Gu:function(){return t}})}},{24:24,58:58,68:68}],62:[function(n,t,e){var i=n(20),r=[],o=!1;function u(){for(var n=0;n<r.length;++n)r[n]()}t.exports={zu:function(n){r.push(n),o||i.fe()&&(window.addEventListener?(window.addEventListener("unload",u,!1),o=!0):window.attachEvent&&(window.attachEvent("onunload",u),o=!0))},Qu:function(n){for(var t=0;t<r.length;++t)if(r[t]==n){r.splice(t,1);break}0==r.length&&i.fe()&&(window.removeEventListener?(window.removeEventListener("unload",u,!1),o=!1):window.detachEvent&&(window.detachEvent("onunload",u),o=!1))}}},{20:20}],63:[function(n,t,e){var w=n(24),y=n(54),b=n(68),I=n(21),S=n(55).HASH_LABELS,P=n(58).Nu,A=n(58).Lu;function i(c){var r,e,t,o,u,i,s,a,f,l,p,v,d,h,_,g,m=this;w.extend(this,{Tu:function(){var n=r;r=new y,y.Tu(n,r)},zs:function(n){return null!=a[n]},Qs:function(n){a[n]={}},Xs:function(n){delete a[n]},Zs:function(){for(var n in a)if(a.hasOwnProperty(n)&&a[n].$s===r.Tr()){w.extend(a[n],{na:r.su(),ta:r.au(),ea:r.fu(),ia:r.cu(),seeking:r.Eo(),ra:r.Bo(),oa:r.jo(),ua:r.$r(),sa:r.qr(),aa:r.Yr(),fa:r.zr(),ca:r.Xr(),la:r.hu(),pa:r.Qo(),va:r.Zo(),da:r.tu()});break}},ha:function(n){return a[n]},Tr:function(n){return a[n].$s},_a:function(){return f},ga:function(n,t){a[n].$s=t,f<t&&(f=t)},setLabels:function(n){null!=n&&w.extend(i,n)},getLabels:function(){return i},setLabel:function(n,t){var e={};e[n]=t,m.setLabels(e)},getLabel:function(n){return i[n]},getAsset:function(){return r},xu:function(n){for(var t=0;t<g.length;++t)if(g[t]==n)return;g.push(n)},Dr:function(n,t){var e=n,i=I.jt(e.ns_st_pa)?m.Rr():parseInt(e.ns_st_pa);e.ns_st_pa=i+(isNaN(o)?0:t-o)+"",e.ns_st_pp=d+"",e.ns_st_sp=h+"",e.ns_st_bp=_+"",l||(e.ns_st_pb=null!=e.ns_st_pb?e.ns_st_pb:"1"),r.Mo()&&(e.ns_st_ppc=p+"",e.ns_st_psq=v+""),0<g.length&&(e.ns_st_ie=(e.ns_st_ie?e.ns_st_ie+";":"")+g.join(";")),w.extend(e,u)},ro:function(){h++},eo:function(){d++},ho:function(n){if(!isNaN(o)){var t=m.Rr();t+=n-o,m.ma(t),o=NaN}},so:function(n){if(!isNaN(e)){var t=m.Or();t+=n-e,m.uo(t),e=NaN}},Or:function(){return _},uo:function(n){_=n},Rr:function(){return t},Po:function(n){e=n},So:function(){return e},ma:function(n){t=n},bo:function(n){o=n},yo:function(){return o},Vr:function(){return d},Ao:function(n){d=n},wa:function(){return s},ya:function(n){s=n},ba:function(){return p},Ia:function(){p++},hs:function(n){l=n},vu:function(n){v=n},du:function(){v++},Sa:function(){return u.ns_st_id},setAsset:function(n,t){c.Uu().Zt("setAsset",n,t),n=b.Pa(n);var e=c.Mu().Ru();if(e!=P.IDLE){c.Uu().$t("Ending the current Clip. It was in state:",b.gs(e));var i={};c.Gs().Vu(A.END,b.Wu(i),i)}var r="",o=0;if(null!=n.ns_st_cn)r=n.ns_st_cn;else for(var u=0;u<S.length;u++)n[S[u]]&&(r+=S[u]+":"+n[S[u]]+";");var s=m,a=s.getAsset();a.Do()?(s.zs(a.Pr())||(s.Qs(a.Pr()),s.ga(a.Pr(),a.Tr())),s.Zs(),o=s.zs(r)?s.Tr(r):I.tn(n.ns_st_cn)?parseInt(n.ns_st_cn):s._a()+1):o=s.zs(r)?s.Tr(r):a.Tr(),s.Tu(),(a=s.getAsset()).Ar(r),a.Nr(o),a.setLabels(n);var f=s.ha(r);f&&(a.Lo(!0),a.iu(f.na),a.ru(f.ta),a.ou(f.ea),a.uu(f.ia),a.ko(f.seeking),a.Uo(f.ra),a.Fo(f.oa),a.no(f.ua),f.sa&&a.Hr(f.sa),f.aa&&a.Jr(f.aa),f.fa&&a.Qr(f.fa),f.ca&&a.Zr(f.ca),a.vu(f.la),a.Xo(f.pa),a.$o(f.va),a.nu(f.da)),a.Jo(),a.Do()&&t&&s.ro(),t&&(s.vu(0),a.gu(!0)),!I.tn(n.ns_st_tp)&&I.tn(n.ns_st_ad)&&I.lt(n.ns_st_ad)&&"0"!==n.ns_st_ad&&a.Cr("ns_st_tp","1")}}),r=new y,(u={}).ns_st_id=+new Date+"",i={},o=e=NaN,l=s=!(a={}),h=1,_=v=d=p=f=t=0,g=[]}i.ks=function(n,t,e){for(var i=t.getAsset(),r=t.getLabels(),o={},u=0;e&&u<e.length;u++)r.hasOwnProperty(e[u])&&(o[e[u]]=r[e[u]]);n.getPlaybackSession().setLabels(o),y.Tu(i,n.getPlaybackSession().getAsset(),e)},t.exports=i},{21:21,24:24,54:54,55:55,58:58,68:68}],64:[function(n,t,e){var p={LongFormOnDemand:"12",ShortFormOnDemand:"11",Live:"13",UserGeneratedLongFormOnDemand:"22",UserGeneratedShortFormOnDemand:"21",UserGeneratedLive:"23",Bumper:"99",Other:"00"},v={LinearOnDemandPreRoll:"11",LinearOnDemandMidRoll:"12",LinearOnDemandPostRoll:"13",LinearLive:"21",BrandedOnDemandPreRoll:"31",BrandedOnDemandMidRoll:"32",BrandedOnDemandPostRoll:"33",BrandedOnDemandContent:"34",BrandedOnDemandLive:"35",Other:"00"},d=n(67),h=n(58).Nu,_=n(58).Du,g=n(55).HASH_LABELS,m=n(21),w=n(24),y=n(18),i=function(n){var o=null,e=0,i=!1,r=null,u={Aa:0,Ca:1,ka:2},s=u.Aa,a=new y("TTSTA",(n||{}).debug);function f(n){r.getPlaybackSession().setAsset(n),o=n,r.notifyPlay()}function c(n){var t=n||{};t.ns_st_ad="1",t.ns_st_an=++e+"",r.getPlaybackSession().setAsset(t),r.notifyPlay(),i=!1}function l(n,t){s==u.Aa&&(s=t),i&&s==t?!function(n){for(var t in g)if(g.hasOwnProperty(t)&&(e=g[t],i=o,r=n,!(m.tn(e)&&m.tn(i)&&m.tn(r)&&(i.hasOwnProperty(e)&&r.hasOwnProperty(e)&&i[e]===r[e]||!i.hasOwnProperty(e)&&!r.hasOwnProperty(e)))))return!1;var e,i,r;return!0}(n)?f(n):(r.getPlaybackSession().getAsset().setLabels(n),r.getState()!=h.PLAYING&&r.notifyPlay()):f(n),i=!0,s=t}w.extend(this,{playVideoAdvertisement:function(n,t){a.Zt("playVideoAdvertisement",n,t);var e={ns_st_ct:"va"};t?e.ns_st_ct="va"+t:a.warn("Calling 'playVideoAdvertisement' without specifying the media type as a second parameter."),t!=v.LinearLive&&t!=v.BrandedOnDemandLive||(e.ns_st_li="1"),n&&w.extend(e,n),c(e)},playAudioAdvertisement:function(n,t){a.Zt("playAudioAdvertisement",n,t);var e={ns_st_ct:"aa"};t?e.ns_st_ct="aa"+t:a.warn("Calling 'playAudioAdvertisement' without specifying the media type as a second parameter."),t!=v.LinearLive&&t!=v.BrandedOnDemandLive||(e.ns_st_li="1"),n&&w.extend(e,n),c(e)},playVideoContentPart:function(n,t){a.Zt("playVideoContentPart",n,t);var e={ns_st_ct:"vc"};t?e.ns_st_ct="vc"+t:a.warn("Calling 'playVideoContentPart' without specifying the media type as a second parameter."),t!=p.Live&&t!=p.UserGeneratedLive||(e.ns_st_li="1"),n&&w.extend(e,n),l(e,u.ka)},playAudioContentPart:function(n,t){a.Zt("playAudioContentPart",n,t);var e={ns_st_ct:"ac"};t?e.ns_st_ct="ac"+t:a.warn("Calling 'playAudioContentPart' without specifying the media type as a second parameter."),t!=p.Live&&t!=p.UserGeneratedLive||(e.ns_st_li="1"),n&&w.extend(e,n),l(e,u.Ca)},stop:function(){a.Zt("stop"),r.notifyPause()}}),(r=new d(n)).setLabel("ns_st_it",_.toString(_.js))};i.ContentType=p,i.AdType=v,t.exports=i},{18:18,21:21,24:24,55:55,58:58,67:67}],65:[function(n,t,e){var a=n(24);t.exports=function(n){var t,e,i,r,o,u,s;a.extend(this,{ws:function(){return t},Gs:function(){return n},ju:function(){return e},Mu:function(){return i},Ns:function(){return r},S:function(){return o},getPlaybackSession:function(){return u},Uu:function(){return s},Ms:function(n){t=n},Os:function(n){o=n},Ds:function(n){r=n},Ws:function(n){e=n},Vs:function(n){i=n},Es:function(n){u=n},xs:function(n){s=n}})}},{24:24}],66:[function(n,t,e){var s=n(58).Nu,a=n(24),f=n(58).Lu;t.exports=function(n){var i,r,o,u=this;a.extend(u,{Hu:function(n){if(o==s.IDLE){if(n==f.PLAY)return s.PLAYING;if(n==f.SEEK_START)return s.SEEKING_BEFORE_PLAYBACK;if(n==f.BUFFER)return s.BUFFERING_BEFORE_PLAYBACK}else if(o==s.PLAYBACK_NOT_STARTED){if(n==f.PLAY)return s.PLAYING;if(n==f.SEEK_START)return s.SEEKING_BEFORE_PLAYBACK;if(n==f.BUFFER)return s.BUFFERING_BEFORE_PLAYBACK;if(n==f.END||n==f.AD_SKIP)return s.IDLE}else if(o==s.PLAYING){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.BUFFER)return s.BUFFERING_DURING_PLAYBACK;if(n==f.PAUSE)return s.PAUSED;if(n==f.SEEK_START)return s.SEEKING_DURING_PLAYBACK}else if(o==s.PAUSED){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.BUFFER)return s.BUFFERING_DURING_PAUSE;if(n==f.PLAY)return s.PLAYING;if(n==f.SEEK_START)return s.SEEKING_DURING_PAUSE}else if(o==s.BUFFERING_BEFORE_PLAYBACK){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.PAUSE||n==f.BUFFER_STOP)return s.PLAYBACK_NOT_STARTED;if(n==f.PLAY)return s.PLAYING;if(n==f.SEEK_START)return s.SEEKING_BEFORE_PLAYBACK}else if(o==s.BUFFERING_DURING_PLAYBACK){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.PLAY||n==f.BUFFER_STOP)return s.PLAYING;if(n==f.PAUSE_ON_BUFFERING)return s.PAUSED_DURING_BUFFERING;if(n==f.SEEK_START)return s.SEEKING_DURING_BUFFERING;if(n==f.PAUSE)return s.PAUSED}else if(o==s.BUFFERING_DURING_SEEKING){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.PLAY)return s.PLAYING;if(n==f.BUFFER_STOP)return s.SEEKING_DURING_PLAYBACK;if(n==f.PAUSE)return s.PAUSED}else if(o==s.BUFFERING_DURING_PAUSE){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.PLAY)return s.PLAYING;if(n==f.SEEK_START)return s.SEEKING_DURING_PAUSE;if(n==f.BUFFER_STOP||n==f.PAUSE)return s.PAUSED}else if(o==s.SEEKING_BEFORE_PLAYBACK){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.PAUSE)return s.PLAYBACK_NOT_STARTED;if(n==f.PLAY)return s.PLAYING;if(n==f.BUFFER)return s.BUFFERING_BEFORE_PLAYBACK}else if(o==s.SEEKING_DURING_PLAYBACK){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.PLAY)return s.PLAYING;if(n==f.PAUSE)return s.PAUSED;if(n==f.BUFFER)return s.BUFFERING_DURING_SEEKING}else if(o==s.SEEKING_DURING_BUFFERING){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.PLAY)return s.PLAYING;if(n==f.PAUSE||n==f.BUFFER_STOP)return s.PAUSED;if(n==f.BUFFER)return s.BUFFERING_DURING_SEEKING}else if(o==s.SEEKING_DURING_PAUSE){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.PLAY)return s.PLAYING;if(n==f.PAUSE||n==f.BUFFER_STOP)return s.PAUSED;if(n==f.BUFFER)return s.BUFFERING_DURING_PAUSE}else if(o==s.PAUSED_DURING_BUFFERING){if(n==f.END||n==f.AD_SKIP)return s.IDLE;if(n==f.SEEK_START)return s.SEEKING_DURING_BUFFERING;if(n==f.PAUSE)return s.PAUSED;if(n==f.PLAY||n==f.BUFFER_STOP)return s.PLAYING}return null},Ru:function(){return o},Vu:function(n,t){var e=u.Hu(n);o!=e&&(r=o,o=e,i=t)},Ea:function(){return r},_s:function(){return i}}),o=s.IDLE,r=null,i=NaN}},{24:24,58:58}],67:[function(n,t,e){var r=n(24),o=n(68),u=n(56),s=n(58).Lu,c=n(58).Nu,l=n(63),i=n(55),p={notifyPlay:s.PLAY,notifyPause:s.PAUSE,notifyEnd:s.END,notifyBufferStart:s.BUFFER,notifyBufferStop:s.BUFFER_STOP,notifyLoad:s.LOAD,notifyEngage:s.ENGAGE,notifySeekStart:s.SEEK_START,notifySkipAd:s.AD_SKIP,notifyCallToAction:s.CTA,notifyError:s.ERROR,notifyTransferPlayback:s.TRANSFER,notifyDrmFail:s.DRM_FAILED,notifyDrmApprove:s.DRM_APPROVED,notifyDrmDeny:s.DRM_DENIED,notifyCustomEvent:s.CUSTOM},v={notifyChangeBitrate:[s.BIT_RATE,"ns_st_br"],notifyChangePlaybackRate:[s.PLAYBACK_RATE,"ns_st_rt"],notifyChangeVolume:[s.VOLUME,"ns_st_vo"],notifyChangeWindowState:[s.WINDOW_STATE,"ns_st_ws"],notifyChangeAudioTrack:[s.AUDIO,"ns_st_at"],notifyChangeVideoTrack:[s.VIDEO,"ns_st_vt"],notifyChangeSubtitleTrack:[s.SUBS,"ns_st_tt"],notifyChangeCdn:[s.CDN,"ns_st_cdn"]};function a(n){var a,e=this;function f(n,t,e){if(s.toString(n)){e=o.Pa(e);var i=o.Wu(e);e.ns_st_po||isNaN(t)||(e.ns_st_po=parseInt(t)+""),n==s.PLAY||n==s.PAUSE||n==s.BUFFER||n==s.END||n==s.SEEK_START||n==s.AD_SKIP||n==s.BUFFER_STOP?a.Vu(n,i,e):a.ms(n,i,e)}}for(var t in r.extend(e,{isProperlyInitialized:function(){return a.isProperlyInitialized()},reset:function(n){f(s.END);var t=a;t.Cs().S().stop(),t.Cs().Ns().pause(),a=new u(t.getConfiguration()),l.ks(a.Cs(),t.Cs().getPlaybackSession(),n)},setPauseOnBufferingInterval:function(n){a.setPauseOnBufferingInterval(n)},getPauseOnBufferingInterval:function(){return a.getPauseOnBufferingInterval()},setKeepAliveInterval:function(n){a.Cs().S().setInterval(n)},getKeepAliveInterval:function(){return a.Cs().S().Gu()},setHeartbeatIntervals:function(n){a.Cs().Ns().Rs(n)},getLabels:function(){return a.getLabels()},getState:function(){return a.Cs().Mu().Ru()},setLabels:function(n){a.setLabels(n)},getLabel:function(n){return a.getLabel(n)},setLabel:function(n,t){a.setLabel(n,t)},getLoadTimeOffset:function(){return a.getLoadTimeOffset()},setLoadTimeOffset:function(n){a.setLoadTimeOffset(n)},setLiveEndpointURL:function(n){return a.setLiveEndpointURL(n)},getLiveEndpointURL:function(){return a.getLiveEndpointURL()},isPauseOnBufferingEnabled:function(){return a.isPauseOnBufferingEnabled()},setPauseOnBufferingEnabled:function(n){a.setPauseOnBufferingEnabled(n)},isThrottlingEnabled:function(){return a.isThrottlingEnabled()},setThrottlingEnabled:function(n){a.setThrottlingEnabled(n)},setThrottlingDelay:function(n){a.setThrottlingDelay(n)},getThrottlingDelay:function(){return a.getThrottlingDelay()},setPlaybackIntervalMergeTolerance:function(n){a.Cs().getPlaybackSession().getAsset().setPlaybackIntervalMergeTolerance(n)},getPlaybackIntervalMergeTolerance:function(){return a.Cs().getPlaybackSession().getAsset().getPlaybackIntervalMergeTolerance()},createPlaybackSession:function(n){a.Cs().Uu().Zt("createPlaybackSession",n),n=o.Pa(n);var t=a.Cs().Mu().Ru();t!=c.IDLE&&(a.Cs().Uu().$t("Ending the current Clip. It was in state:",o.gs(t)),e.notifyEnd()),a.Cs().getPlaybackSession().wa()&&a.ks(),a.Cs().getPlaybackSession().setLabels(n)},getVersion:function(){return a.getVersion()},addListener:function(n){a.addListener(n)},removeListener:function(n){a.removeListener(n)},addMeasurementListener:function(n){a.Cs().ju().addMeasurementListener(n)},removeMeasurementListener:function(n){a.Cs().ju().removeMeasurementListener(n)},getPlaybackSession:function(){return a.Cs().getPlaybackSession()},setExitEndEventEnabled:function(n){a.setExitEndEventEnabled(!!n)},isExitEndEventEnabled:function(){return a.isExitEndEventEnabled()},setDvrWindowLength:function(n){a.Cs().getPlaybackSession().getAsset().Su(n),a.Cs().getPlaybackSession().getAsset().Eu(!0)},setDvrWindowOffset:function(n){a.Cs().getPlaybackSession().getAsset().Au(n),a.Cs().getPlaybackSession().getAsset().Eu(!0)},getPlatformAPI:function(){return a.getPlatformAPI()},_getLogHistory:function(){return a.Cs().Uu().te()}}),p)!function(r,o){e[r]=function(n,t){a.Cs().Uu().Zt(r,n,t);var e={},i=NaN;"object"==typeof n?e=n:"object"==typeof t&&(e=t),"number"==typeof n?i=n:"number"==typeof t&&(i=t),f(o,i,e)}}(t,p[t]);for(var i in v)!function(o,u,s){e[o]=function(n,t,e){if(a.Cs().Uu().Zt(o,n,t,e),null!=n){var i={},r=NaN;"object"==typeof t?i=t:"object"==typeof e&&(i=e),"number"==typeof t?r=t:"number"==typeof e&&(r=e),i[s]=n+"",f(u,r,i)}}}(i,v[i][0],v[i][1]);n=r.extend({},n),(a=new u(n)).Cs().Uu().log("New StreamingAnalytics instance with configuration",n)}a.PlayerEvents=s,a.InternalStates=c,a.Constants=i,t.exports=a},{24:24,55:55,56:56,58:58,63:63,68:68}],68:[function(n,t,e){var f=n(23),i=n(58).Nu,r="undefined";e.Pa=function(n){var t={};for(var e in n){var i=n[e];t[e]=null==i?i:n[e]+""}return t},e.Ta=function(n,t){var e,i=[];for(e in n)t&&!t.test(e)||!n.hasOwnProperty(e)||(i[i.length]=e);return i},e.Wu=function(n){if(n.ns_ts)return parseInt(n.ns_ts);var t=+new Date;return n.ns_ts=t+"",t},e.fe=function(){return typeof window!=r&&typeof document!=r},e.Wr=function(n,t,e,i){var r,o,u={};if(!(t<=e))return f(n);if(u.start=t,u.end=e,0==n.length)return n.push(u),f(n);for(r=0;r<n.length;r++)if(u.start>=n[r].start&&u.end<=n[r].end)return f(n);var s=!1;for(o=0;o<n.length;o++)if(o+1===n.length&&u.start>=n[o].start||u.start>=n[o].start&&u.start<n[o+1].start){n.splice(o+1,0,u),s=!0;break}s||n.splice(0,0,u);var a=[n[0]];for(r=1;r<n.length;r++)a[a.length-1].end+i<n[r].start?a.push(n[r]):a[a.length-1].end<n[r].end&&(a[a.length-1].end=n[r].end);return f(a)},e.gs=function(n){for(var t in i)if(i.hasOwnProperty(t)&&i[t]==n)return t},e.Ju=function(n){return n==i.IDLE||n==i.BUFFERING_BEFORE_PLAYBACK||n==i.SEEKING_BEFORE_PLAYBACK||n==i.PLAYBACK_NOT_STARTED}},{23:23,58:58}],69:[function(n,t,e){var i=n(24),r=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{ns:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.so(n),i.so(n),i.Eo()&&i.No()&&i.Uo(n-i.Wo()),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&r.vr(t.ns_st_pe,!1)&&u.Gs().ks()},os:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.so(n),i.so(n),i.Eo()&&i.No()&&(i.Vo(n),i.To(!1))},Zu:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.so(n),i.so(n),i.Eo()?i.No()||(i.Oo(n),i.To(!0)):i.io(),i.Eo()||(i.ko(!0),i.To(!0),i.Fo(r),i.Oo(n))},ts:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.so(n),i.so(n),i.Eo()&&i.No()&&(i.Vo(n),i.To(!1))},$u:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.so(n),i.so(n),i.Eo()&&(i.No()&&(i.Vo(n),i.To(!1)),i.Ko(r),i.ko(!1)),i.Ro(!0),(i._u()||0==e.ba())&&(e.Ia(),i.gu(!1)),e.du(),i.Ro(!0),i.Yo(),i.ro(),e.bo(n),i.bo(n),i.do(n),i.ao(r),(0==i.cu()||i.Lr()<=i.cu())&&(i.uu(i.Lr()),i.zo(),i.vu(0),i.eu()),i.du(),u.Gs().bs()||(t.ns_st_lt=u.Gs().getLoadTimeOffset()+n-u.Gs().Ss()+"",u.Gs().Is(!0)),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)}})}},{24:24,26:26,58:58}],70:[function(n,t,e){var i=n(24),o=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{fs:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();u.Gs().Ts(),u.S().stop(),e.so(n),i.so(n),i.po(n);var r=u.Gs().Dr(s.END,t,n);i.jr(r.Ut),i.Kr(r.Ut),u.ju().Vu(r),i.Eo()&&i.No()&&(i.Uo(n-i.Wo()),i.To(!1)),e.Zs(),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&o.vr(t.ns_st_pe,!1)&&u.Gs().ks()},ts:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.so(n),i.so(n),i.po(n),i.do(n)},$u:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.du(),i.du(),i.ro(),e.so(n),i.so(n),i.Eo()&&(i.No()&&(i.Vo(n),i.To(!1)),i.Ko(r),i.ko(!1)),i.po(n),i.do(n),e.bo(n),i.bo(n),i.ao(r),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)}})}},{24:24,26:26,58:58}],71:[function(n,t,e){var i=n(24),o=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{us:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();u.Gs().As(),i.po(n),i.do(n),e.so(n),i.so(n),e.eo(),i.eo();var r=u.Gs().Dr(s.PAUSE,t,n);i.jr(r.Ut),i.Kr(r.Ut),u.ju().Vu(r),e.Po(n),i.Po(n)},ns:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();u.Gs().As(),u.Gs().Ts(),u.S().stop(),e.so(n),i.so(n),i.po(n);var r=u.Gs().Dr(s.END,t,n);i.jr(r.Ut),i.Kr(r.Ut),u.ju().Vu(r),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&o.vr(t.ns_st_pe,!1)&&u.Gs().ks()},Zu:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);u.Gs().As(),u.Ns().pause(),u.S().stop(),i.po(n),i.do(n),e.so(n),i.so(n),i.io(),i.ko(!0),i.To(!0),i.Fo(r),i.Oo(n),e.eo(),i.eo();var o=u.Gs().Dr(s.PAUSE,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)},ts:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();u.Gs().As(),i.po(n),i.do(n),e.so(n),i.so(n),e.eo(),i.eo();var r=u.Gs().Dr(s.PAUSE,t,n);i.jr(r.Ut),i.Kr(r.Ut),u.ju().Vu(r)}})}},{24:24,26:26,58:58}],72:[function(n,t,e){var i=n(24),o=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{ns:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();u.Gs().Ts(),u.S().stop(),u.Gs().As(),e.so(n),i.so(n),i.po(n);var r=u.Gs().Dr(s.END,t,n);i.jr(r.Ut),i.Kr(r.Ut),u.ju().Vu(r),i.Eo()&&i.No()&&(i.Uo(n-i.Wo()),i.To(!1)),e.Zs(),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&o.vr(t.ns_st_pe,!1)&&u.Gs().ks()},ts:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.so(n),i.so(n),e.eo(),i.eo(),i.Eo()&&i.No()&&(i.Vo(n),i.To(!1)),i.po(n),i.do(n)},$u:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.du(),i.du(),i.ro(),e.so(n),i.so(n),i.Eo()&&(i.No()&&(i.Vo(n),i.To(!1)),i.Ko(r),i.ko(!1)),i.po(n),i.do(n),e.bo(n),i.bo(n),i.ao(r),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)}})}},{24:24,26:26,58:58}],73:[function(n,t,e){var i=n(24),s=n(58).Lu;t.exports=function(u){i.extend(this,{Xu:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.ya(!0),i.Lo(!0),i.Eo()&&i.xo(i.Bo()),e.Po(n),i.Po(n)},Zu:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.ya(!0),i.Lo(!0),i.Eo()&&i.xo(i.Bo()),i.io(),i.ko(!0),i.To(!0),i.Fo(r),i.Oo(n)},$u:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.ya(!0),i.Lo(!0),(i._u()||0==e.ba())&&(e.Ia(),i.gu(!1)),i.Eo()&&(i.xo(i.Bo()),i.Ko(r),i.ko(!1)),e.du(),i.Ro(!0),i.Yo(),(0==i.cu()||i.Lr()<=i.cu())&&(i.uu(i.Lr()),i.zo(),i.vu(0),i.eu()),i.du(),i.ro(),e.bo(n),i.bo(n),i.do(n),i.ao(r),u.Gs().bs()||(t.ns_st_lt=u.Gs().getLoadTimeOffset()+n-u.Gs().Ss()+"",u.Gs().Is(!0)),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)}})}},{24:24,58:58}],74:[function(n,t,e){var i=n(24),o=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{ns:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();u.Gs().Ts(),u.S().stop(),i.po(n);var r=u.Gs().Dr(s.END,t,n);i.jr(r.Ut),i.Kr(r.Ut),u.ju().Vu(r),i.Eo()&&i.No()&&(i.Uo(n-i.Wo()),i.ko(!1)),e.Zs(),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&o.vr(t.ns_st_pe,!1)&&u.Gs().ks()},$u:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.du(),i.Eo()&&(i.No()&&(i.Vo(n),i.To(!1)),i.Ko(r),i.ko(!1)),i.ro(),i.du(),e.bo(n),i.bo(n),i.po(n),i.do(n),i.ao(r),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)}})}},{24:24,26:26,58:58}],75:[function(n,t,e){var i=n(24),o=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{ns:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();u.Gs().Ts(),u.S().stop(),e.so(n),i.so(n),i.po(n),i.Eo()&&i.No()&&(i.Uo(n-i.Wo()),i.To(!1));var r=u.Gs().Dr(s.END,t,n);i.jr(r.Ut),i.Kr(r.Ut),u.ju().Vu(r),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&o.vr(t.ns_st_pe,!1)&&u.Gs().ks()},Zu:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.so(n),i.so(n),i.Eo()?i.No()||(i.Oo(n),i.To(!0)):i.io(),i.Eo()||(i.ko(!0),i.To(!0),i.Fo(r),i.Oo(n)),i.po(n),i.do(n)},ts:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.so(n),i.so(n),i.po(n),i.do(n)},ds:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.du(),i.du(),e.so(n),i.so(n),i.ro(),e.bo(n),i.bo(n),i.po(n),i.do(n),i.ao(r),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)}})}},{24:24,26:26,58:58}],76:[function(n,t,e){var i=n(24),r=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{ns:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();i.Eo()&&i.No()&&(i.Uo(n-i.Wo()),i.To(!1)),e.Zs(),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&r.vr(t.ns_st_pe,!1)&&u.Gs().ks()},Zu:function(n,t){var e=u.getPlaybackSession().getAsset(),i=parseInt(t.ns_st_po);e.Eo()?e.Oo(n):e.io(),e.Eo()||(e.ko(!0),e.To(!0),e.Fo(i),e.Oo(n))},$u:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);i.Eo()&&(i.Ko(r),i.ko(!1)),e.ya(!0),(i._u()||0==e.ba())&&(e.Ia(),i.gu(!1)),e.du(),i.Ro(!0),i.Yo(),(0==i.cu()||i.Lr()<=i.cu())&&(i.uu(i.Lr()),i.zo(),i.vu(0),i.eu()),i.du(),i.ro(),e.bo(n),i.bo(n),i.do(n),i.ao(r),u.Gs().bs()||(t.ns_st_lt=u.Gs().getLoadTimeOffset()+n-u.Gs().Ss()+"",u.Gs().Is(!0)),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)},Xu:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.Po(n),i.Po(n)}})}},{24:24,26:26,58:58}],77:[function(n,t,e){var i=n(24),s=n(26),a=n(58).Lu;t.exports=function(u){i.extend(this,{ns:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);u.Gs().Ts(),u.S().stop(),e.ho(n),i.ho(n),i.Iu(r),i.po(n),i.co(r);var o=u.Gs().Dr(a.END,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&s.vr(t.ns_st_pe,!1)&&u.Gs().ks()},Xu:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);u.Ns().pause(),u.S().stop(),e.ho(n),i.ho(n),i.Iu(r),i.co(r),u.Gs().isPauseOnBufferingEnabled()&&u.Gs().Ps(n,t),i.lu(),e.Po(n),i.Po(n),i.po(n),i.do(n)},Zu:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);u.Ns().pause(),u.S().stop(),e.ho(n),i.ho(n),i.Iu(r),i.co(r),i.io(),i.ko(!0),i.To(!0),i.Fo(r),i.Oo(n),i.po(n),i.do(n),e.eo(),i.eo();var o=u.Gs().Dr(a.PAUSE,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)},ts:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);u.Ns().pause(),u.S().stop(),e.ho(n),i.ho(n),i.Iu(r),i.co(r),i.po(n),i.do(n),e.eo(),i.eo();var o=u.Gs().Dr(a.PAUSE,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)}})}},{24:24,26:26,58:58}],78:[function(n,t,e){var i=n(24),r=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{ns:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();i.Eo()&&i.No()&&(i.Uo(n-i.Wo()),i.To(!1)),e.Zs(),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&r.vr(t.ns_st_pe,!1)&&u.Gs().ks()},ts:function(n,t){var e=u.getPlaybackSession().getAsset();e.Eo()&&e.No()&&(e.Vo(n),e.To(!1))},$u:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);i.Eo()&&(i.No()&&(i.Vo(n),i.To(!1)),i.Ko(r),i.ko(!1)),(i._u()||0==e.ba())&&(e.Ia(),i.gu(!1)),e.du(),i.du(),i.ro(),i.Ro(!0),i.Yo(),(0==i.cu()||i.Lr()<=i.cu())&&(i.uu(i.Lr()),i.zo(),i.vu(0),i.eu()),e.bo(n),i.bo(n),i.do(n),i.ao(r),u.Gs().bs()||(t.ns_st_lt=u.Gs().getLoadTimeOffset()+n-u.Gs().Ss()+"",u.Gs().Is(!0)),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)}})}},{24:24,26:26,58:58}],79:[function(n,t,e){var i=n(24);t.exports=function(r){i.extend(this,{ts:function(n,t){var e=r.getPlaybackSession(),i=e.getAsset();e.eo(),i.eo(),i.Eo()&&i.No()&&(i.Vo(n),i.To(!1)),i.po(n),i.do(n)}})}},{24:24}],80:[function(n,t,e){var i=n(24),o=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{ns:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();u.Gs().Ts(),u.S().stop(),i.po(n);var r=u.Gs().Dr(s.END,t,n);i.jr(r.Ut),i.Kr(r.Ut),u.ju().Vu(r),i.Eo()&&i.No()&&(i.Uo(n-i.Wo()),i.To(!1)),e.Zs(),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&o.vr(t.ns_st_pe,!1)&&u.Gs().ks()},$u:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.du(),i.du(),i.ro(),i.Eo()&&(i.No()&&(i.Vo(n),i.To(!1)),i.Ko(r),i.ko(!1)),i.po(n),i.do(n),e.bo(n),i.bo(n),i.ao(r),u.Gs().bs()||(t.ns_st_lt=u.Gs().getLoadTimeOffset()+n-u.Gs().Ss()+"",u.Gs().Is(!0)),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)}})}},{24:24,26:26,58:58}],81:[function(n,t,e){var i=n(24),o=n(26),s=n(58).Lu;t.exports=function(u){i.extend(this,{rs:function(n,t){var e=u.getPlaybackSession().getAsset(),i=parseInt(t.ns_st_po);e.Eo()?e.No()||(e.Oo(n),e.To(!0)):e.io(),e.Eo()||(e.ko(!0),e.To(!0),e.Fo(i),e.Oo(n)),e.po(n),e.do(n)},es:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.Po(n),i.Po(n),i.po(n),i.do(n)},ls:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);e.du(),i.du(),i.Eo()&&(i.No()&&(i.Vo(n),i.To(!1)),i.Ko(r),i.ko(!1)),i.ro(),e.bo(n),i.bo(n),i.po(n),i.do(n),i.ao(r),u.Ns().resume(),u.S().start();var o=u.Gs().Dr(s.PLAY,t,n);i.jr(o.Ut),i.Kr(o.Ut),u.ju().Vu(o)},as:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();e.so(n),i.so(n),i.po(n),i.do(n)},cs:function(n,t){var e=u.getPlaybackSession().getAsset();e.Eo()&&e.No()&&(e.Vo(n),e.To(!1)),e.po(n),e.do(n)},ps:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset();u.Gs().Ts(),u.S().stop(),i.po(n);var r=u.Gs().Dr(s.END,t,n);i.jr(r.Ut),i.Kr(r.Ut),u.ju().Vu(r),i.Eo()&&i.No()&&(i.Uo(n-i.Wo()),i.To(!1)),e.Zs(),i.Ho(),i.Ro(!1),t.hasOwnProperty("ns_st_pe")&&o.vr(t.ns_st_pe,!1)&&u.Gs().ks()},vs:function(n,t){var e=u.getPlaybackSession().getAsset();e.Eo()&&e.No()&&(e.Vo(n),e.To(!1)),e.po(n),e.do(n)},ss:function(n,t){var e=u.getPlaybackSession(),i=e.getAsset(),r=parseInt(t.ns_st_po);u.Gs().As(),e.so(n),i.so(n),e.bo(n),i.bo(n),i.ao(r),i.po(n),i.do(n),u.Ns().resume(),u.S().start()}})}},{24:24,26:26,58:58}],82:[function(n,t,e){var u,s,i,r=null,a=[],o=1e3,f=1e3;function c(){var o=+new Date;r=i.setInterval(function(){var n=o+u,t=+new Date,e=t-n;if(o=t,Math.abs(e)>s)for(var i=0<e,r=0;r<a.length;++r)a[r](i)},u)}function l(){clearInterval(r),r=null}t.exports={Ou:function(n){a.push(n),r||c()},Yu:function(n){for(var t=0;t<a.length;++t)if(a[t]==n){a.splice(t,1);break}a.length||l()},setPlatformAPI:function(n){i=n},Us:function(n,t){!t&&u||(u=n||o),(r&&t||!r)&&(l(),c())},Bs:function(n,t){s=n||f}}},{}]},{},[16])(16)});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/spring/amd.springstreams-2.0.0.beauty.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/** START BBC ADDITION **/
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){
/** END BBC ADDITION **/

function SpringStreams(f) {
    this.version = "2.0.0";
    var p = "2cnt.net";
    var e = 200;
    var m = 2000;
    var P = "default";
    var G = new Array();
    this.namespace = "com.kma.springstreams";
    this.syncrate = 20;
    this.pausesync = 6;
    this.maxstates = 50;
    var a = this;
    this.pageContext;
    var N;
    A(n());
    if (f) {
        P = f
    }
    x();

    function n() {
        var Q = {
            "2cnt.net": {
                syncrates: [3, 7, 10, 10, 10, 10, 10, 60]
            }
        };
        return Q
    }

    function A(R) {
        var S;
        if (R) {
            for (var Q in R) {
                if (Q == p) {
                    S = R[Q]
                }
            }
            if (S) {
                C(S.syncrates)
            }
        }
    }

    function C(Q) {
        if (Q) {
            N = Q
        }
    }

    function H() {
        return N
    }
    this.getSyncRates = H;

    function t(T, R, Q) {
        if (a.pageContext === undefined) {
            a.pageContext = a.defaultPageContext
        }
        if (!T) {
            return
        }
        var S = new w(this, T, R, Q);
        G.push(S);
        return S
    }
    this.track = t;

    function x() {
        setInterval(k, e);
        setInterval(r, m)
    }

    function b() {
        for (var Q = 0; Q < G.length; ++Q) {
            try {
                G[Q].stop()
            } catch (R) {
                D(R)
            }
        }
    }
    this.unload = b;

    function k(S) {
        for (var Q = 0; Q < G.length; ++Q) {
            try {
                G[Q].update(S)
            } catch (R) {
                D(R)
            }
        }
    }
    this.doUpdate = k;

    function r(S) {
        for (var Q = 0; Q < G.length; ++Q) {
            try {
                G[Q].sync(S)
            } catch (R) {
                D(R)
            }
        }
    }
    this.doSync = r;

    function D(Q) {
        E("", Q)
    }
    this.error = D;

    function u(R, Q) {
        return v([
            [R, Q]
        ])
    }

    function F(Q) {
        if (Q && Q.site != undefined) {
            return Q.site
        }
        return P
    }

    function y(Q) {}
    this.debug = y;

    function l() {
        if (a.pageContext.getWindowLocationURL() === undefined) {
            return "http://"
        }
        if ("https" == a.pageContext.getWindowLocationURL().slice(0, 5)) {
            return "https://ssl-"
        } else {
            return "http://"
        }
    }

    function J() {
        if (!this.nlso) {
            try {
                var Q = "";
                Q = a.pageContext.getLocalStorageItem("i00");
                if (Q) {
                    return "&c=" + Q
                } else {
                    var R = "0000",
                        T = R + Math.ceil((new Date()).getTime() / 1000).toString(16) + (32768 | Math.random() * 65535).toString(16) + R;
                    a.pageContext.setLocalStorageItem("i00", T)
                }
            } catch (S) {
                console.log("error" + S)
            }
        }
        return ""
    }

    function E(S, R) {
        var Q = l() + F(R) + "." + p + "/j0=" + u(S, R) + "?lt=" + (new Date()).getTime().toString(36) + J();
        a.pageContext.preloadImage(Q);
        this.debug(Q)
    }
    this.send = E;

    function v(U) {
        var S;
        var V;
        var T;
        var R;
        var W = /[+&,;=~]/g;
        var X;
        var Q;
        switch (typeof U) {
            case "string":
                return W.test(U) ? escape(U).replace(W, function(Y) {
                    var Z = Q[Y];
                    if (Z) {
                        return Z
                    }
                    return Y
                }) : escape(U);
            case "number":
                return isFinite(U) ? U.toString() : "null";
            case "boolean":
            case "null":
                return U.toString();
            case "object":
                if (!U) {
                    return "null"
                }
                S = [];
                if (typeof U.length == "number" && !(U.propertyIsEnumerable("length"))) {
                    R = U.length;
                    for (V = 0; V < R; V += 1) {
                        S.push(v(U[V]) || "null")
                    }
                    return "," + S.join("+") + ";"
                }
                for (T in U) {
                    if (typeof T == "string") {
                        if (T != "site") {
                            X = v(U[T]);
                            if (X) {
                                S.push(v(T) + "=" + X)
                            }
                        }
                    }
                }
                return "," + S.join("+") + ";"
        }
        return ""
    }

    function w(am, aj, an, ai) {
        var ag = Math.round((Math.random() * 10000000000)).toString(36);
        var V = Math.round(new Date().getTime() / 1000);
        var ac;
        var ao;
        var ae;
        var aa;
        var W = [0, 0, V.toString(36)];
        var X = 0;
        var ap = 0;
        var Y = true;
        var S = false;
        var af;
        var U;
        var R;
        var Q;
        ac = am;
        ao = aj;
        if (ai) {
            af = ai
        } else {
            af = ac.HTML5Adapter
        }
        aa = ah(an);
        ae = new Array();
        ae.push(W);
        Q = 0;
        U = am.syncrate;
        R = am.getSyncRates();
        ad();

        function ah(at) {
            var aq = new Object();
            for (var ar in at) {
                aq[ar] = at[ar]
            }
            return aq
        }

        function al(aq) {
            if (ae.length < ac.maxstates) {
                ae.push(aq)
            }
        }

        function T(aq) {
            W = [aq, aq, Math.round(new Date().getTime() / 1000).toString(36)];
            al(W);
            Y = true;
            X = 0
        }

        function ad() {
            if (R != null) {
                if (Q < R.length) {
                    U = R[Q++];
                    ac.debug("switch syncrate to " + U)
                }
            }
        }

        function Z(au) {
            if (S) {
                return
            }
            var aq = W[1];
            var ar = aq;
            try {
                ar = Math.round(af.getPosition(ao))
            } catch (av) {}
            try {
                if (aq == ar) {
                    if (X >= 0) {
                        X++;
                        if (X == ac.pausesync) {
                            Y = true
                        }
                    }
                    return
                }
                if (X >= ac.pausesync) {
                    T(ar)
                } else {
                    if (aq < ar - 1) {
                        T(ar)
                    } else {
                        if (aq > ar) {
                            T(ar)
                        } else {
                            W[1] = ar;
                            if (W[1] - W[0] >= U) {
                                if (ar - ap >= U) {
                                    Y = true;
                                    ad()
                                }
                            }
                            X = 0
                        }
                    }
                }
            } catch (at) {
                D = true;
                ac.error(at)
            }
        }
        this.update = Z;

        function ak() {
            if (S) {
                return
            }
            Y = true;
            S = true;
            ab(null)
        }
        this.stop = ak;

        function ab(at) {
            if (Y) {
                try {
                    if (ao.width) {
                        aa.sx = ao.width
                    }
                    if (ao.videoWidth) {
                        aa.sx = ao.videoWidth
                    }
                    if (ao.height) {
                        aa.sy = ao.height
                    }
                    if (ao.videoHeight) {
                        aa.sy = ao.videoHeight
                    }
                } catch (ar) {}
                if (a.pageContext.getDeviceID !== undefined && a.pageContext.getDeviceID() !== undefined) {
                    aa[a.pageContext.getDeviceID()["id_name"]] = a.pageContext.getDeviceID()["id_value"]
                }
                aa.uid = ag;
                aa.pst = ae;
                var aq;
                try {
                    if (!aa.dur || aa.dur == 0) {
                        aa.dur = af.getDuration(ao)
                    }
                } catch (ar) {}
                try {
                    aq = af.getMeta(ao)
                } catch (ar) {}
                aa.vt = (Math.round(new Date().getTime() / 1000)) - V;
                ac.send(aq, aa);
                ap = W[1]
            }
            Y = false
        }
        this.sync = ab
    }
    this.defaultPageContext = {
        getLocalStorageItem: h,
        setLocalStorageItem: c,
        preloadImage: z,
        getWindowLocationURL: d,
    };
    this.HTML5Adapter = {
        getMeta: B,
        getPosition: q,
        getDuration: o
    };
    this.DefaultAdapter = {
        getMeta: j,
        getPosition: L,
        getDuration: M
    };
    this.WMStreamAdapter = {
        getMeta: s,
        getPosition: i,
        getDuration: g
    };
    this.RVStreamAdapter = {
        getMeta: O,
        getPosition: K,
        getDuration: I
    };

    function B(Q) {
        return {
            pl: "HTML 5 Video",
            pv: "HTML 5",
            sx: screen.width,
            sy: screen.height
        }
    }

    function o(Q) {
        return Math.round(Q.duration)
    }

    function q(Q) {
        return Q.currentTime
    }

    function j(Q) {
        return {
            pl: "DEF",
            pv: version,
            sx: screen.width,
            sy: screen.height
        }
    }

    function L(Q) {
        return new Date().getTime() / 1000
    }

    function M(Q) {
        return 0
    }

    function s(Q) {
        return {
            pl: "MSWM",
            plv: Q.versionInfo,
            sx: screen.width,
            sy: screen.height
        }
    }

    function i(Q) {
        if (Q.CurrentPosition) {
            return Q.CurrentPosition
        }
        if (Q.currentPosition) {
            return Q.currentPosition
        }
        if (Q.controls) {
            if (Q.controls.currentPosition) {
                return Q.controls.currentPosition
            }
        }
        if (Q.Controls) {
            if (Q.Controls.currentPosition) {
                return Q.Controls.currentPosition
            }
        }
        return 0
    }

    function g(Q) {
        if (Q.currentMedia) {
            if (Q.currentMedia.Duration) {
                return Q.currentMedia.Duration
            }
            if (Q.currentMedia.duration) {
                return Q.currentMedia.duration
            }
        } else {
            if (Q.CurrentMedia) {
                if (Q.CurrentMedia.duration) {
                    return Q.CurrentMedia.duration
                }
                if (Q.CurrentMedia.Duration) {
                    return Q.CurrentMedia.Duration
                }
            }
        }
    }

    function O(Q) {
        return {
            pl: "RV",
            plv: Q.GetVersionInfo(),
            sx: screen.width,
            sy: screen.height
        }
    }

    function K(Q) {
        return (Q.GetPosition() / 1000)
    }

    function I(Q) {
        return (Q.GetLength() / 1000)
    }

    function c(Q, R) {
        localStorage.setItem(Q, R)
    }

    function h(Q) {
        return localStorage.getItem(Q)
    }

    function z(Q) {
        (new Image()).src = Q
    }

    function d() {
        return document.location.href
    }
}
SpringStreams.prototype.setPageContext = function(a) {
    this.pageContext = a
};

/** START BBC ADDITION **/
return SpringStreams;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/** END BBC ADDITION **/

/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/ssc-js/src/ssc_helper.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global, factory) {
  if (true) {
    return !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {

  var sscPerformanceCookieName;
  var sscNecessaryCookieName;
  var s1CookieName;
  var uidPerformanceCookieName;
  var uidNecessaryCookieName;
  var sscCoUkHostname;
  var sscComHostname;
  var scorecardresearchHttpHostname;
  var scorecardresearchHttpsHostname;

  sscPerformanceCookieName = "ckpf_sscid";
  sscNecessaryCookieName = "ckns_sscid";
  s1CookieName = "s1";
  uidPerformanceCookieName = "ckpf_uid";
  uidNecessaryCookieName = "ckns_uid";
  sscCoUkHostname = "ssc.api.bbc.co.uk";
  sscComHostname = "ssc.api.bbc.com";
  scorecardresearchHttpHostname = "b.scorecardresearch.com";
  scorecardresearchHttpsHostname = "sb.scorecardresearch.com";

  /**
   * @constructor
   */
  function SSCHelper(options) { 
    options = options || {};
    this.alwaysUseHttps = true === options.alwaysUseHttps || false;
    this.forceBBCHost = false;
    this._sscCookieId = undefined;
    this._s1CookieId = undefined;
    this._uidCookieId = undefined;
    if (".co.uk" === options.forceBBCHost) {
      this.forceBBCHost = ".co.uk";
    } else if (".com" === options.forceBBCHost) {
      this.forceBBCHost = ".com";
    }
  }

   /**
    * Get a cookie value by key
    *
    * @param {String} key
    *
    * @return {*}
    */
  SSCHelper.prototype.getCookie = function(key) {
    return decodeURIComponent(
      document.cookie.replace(
        new RegExp(
          "(?:(?:^|.*;)\\s*" +
          encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") +
          "\\s*\\=\\s*([^;]*).*$)|^.*$"
        ),
        "$1"
      )
    ) || null;
  };

  /**
   * Returns the window location. 
   *
   * @return {Boolean}
   */
  SSCHelper.prototype.getLocation = function() {
    return window.location;
  };

  /**
   * Returns the most precedent ID.
   * May be one of ckpf_sscid or s1 depending on configuration.
   *
   * @return {String|null}
   */
  SSCHelper.prototype.getCookieId = function() {
    var id;
    var sscHostname;
    var location;
    var isCoUKSSCHostnameAndPage;
    var isComSSCHostnameAndPage;

    sscHostname = this.getSSCHostname();
    location = this.getLocation();

    /**
     * Ensure that the page hostname is in the same scope as the cookie server.
     * We do not want to use the .co.uk page cookie if reporting to the .com 
     * SSC server.
     */
    isCoUKSSCHostnameAndPage = sscHostname === sscCoUkHostname && -1 !== location.hostname.search(/bbc.co.uk$/);
    isComSSCHostnameAndPage = sscHostname === sscComHostname && -1 !== location.hostname.search(/bbc.com$/);
    if (isCoUKSSCHostnameAndPage || isComSSCHostnameAndPage) {
      id = this.getSSCCookieId();
      if (null === id || undefined === id) {
        if (isCoUKSSCHostnameAndPage) {
          id = this.getS1CookieId();
        } else if (isComSSCHostnameAndPage) {
          id = this.getUidCookieId();
        }
      }
    }

    return id;
  };

  /**
   * Returns the s1 cookie ID
   *
   * @return {String|null}
   */
  SSCHelper.prototype.getS1CookieId = function() {
    var cookieId;
    if (undefined === this._s1CookieValue) {
      // returns a string or null
      this._s1CookieValue = this.getCookie(s1CookieName);
    }

    return this._s1CookieValue;
  };

  /**
   * Returns the ckpf_uid cookie ID
   *
   * @return {String|null}
   */
  SSCHelper.prototype.getUidCookieId = function() {
    var cookieId;
    if (undefined === this._uidCookieValue) {
      // returns a string from the necessary cookie or null
      this._uidCookieValue = this.getCookie(uidNecessaryCookieName);
      if (this._uidCookieValue === null) {
        // returns a string from the performance cookie or null
        this._uidCookieValue = this.getCookie(uidPerformanceCookieName);
      }
    }

    return this._uidCookieValue;
  };

  /**
   * Returns the SSC cookie ID
   *
   * @return {String|null}
   */
  SSCHelper.prototype.getSSCCookieId = function() {
    var cookieId;
    /**
     * This logic prevent the cookie value being checked more than 
     * once per instance. On a users first page impression it 
     * may be desirable to check > 1 time as the cookie may be set 
     * on the second check in which case we could report directly
     * to scorecardresearch.com avoiding a redirect.
     */
    if (undefined === this._sscCookieValue) {
      // returns a string from the necessary cookie or null
      this._sscCookieValue = this.getCookie(sscNecessaryCookieName);
      if (this._sscCookieValue === null) {
        // returns a string from the performance cookie or null
        this._sscCookieValue = this.getCookie(sscPerformanceCookieName);
      }
    }

    return this._sscCookieValue;
  };

  /**
   * @todo test this
   *
   * Validate that a string is a valid Id. An ID may be
   * - a legacy S1 cookie eg 61.162.156542A1600C59201D58DE32985
   * - a RCF 4122 v4 UUID eg cc6b02c3-313e-428b-a760-1b482f5899d7
   *
   * @param {String} id the value to test
   *
   * @return Boolean is the value valid
   */
  SSCHelper.prototype.isValidId = function(id) {
    var matches;
    var isValid;
    isValid = false;
    /**
     * comscore labels can contain any character excluding < and >
     * the regex matches any string that does not contain a <, > or space
     */
    if ("string" === typeof id && -1 !== id.search(/^[^(?!<>\s)]+$/)) {
      isValid = true;
    }
    return isValid;
  };  

  /**
   * Returns an object describing the analytics request location
   *
   * @param  {String} search An optional query string
   * @param  {String} id Optional ID to use for ns_alias
   *
   * @return {Boolean}
   */
  SSCHelper.prototype.getAnalyticsLocation = function(search, id) {
    var result;
    var location;
    var useBBCDotComHost;
    var sscHostname;
    var isCoUKSSCHostnameAndPage;
    var queryStringPosition;
    var searchContainsNsAliasParameter;
    var isValidId;
    sscHostname = this.getSSCHostname();
    location = this.getLocation();

    result = {
      sscId: undefined
    };

    if ("string" !== typeof search) {
      search = "";
    }

    if (undefined === id || false === this.isValidId(id)) {
      id = this.getCookieId();
    }

    if (this.alwaysUseHttps || location.protocol === "https:") {
      result.protocol = "https:";
    } else {
      result.protocol = "http:";
    }

    searchContainsNsAliasParameter = -1 !== search.search(/ns_alias=/);
    isValidId = this.isValidId(id);
    if (searchContainsNsAliasParameter || isValidId) {
      result.hostname = this.getScorecardresearchHostname();
    } else {
      result.hostname = this.getSSCHostname();
    }

    if (isValidId) {
      if (search === "") {
        search = "?ns_alias=" + id;
      } else {
        /**
         * We always insert ns_alias at the start of the query string 
         * before and other labels.
         */
        queryStringPosition = search.search(/\?/) + 1;
        search = [
          search.slice(0, queryStringPosition), 
          "ns_alias=" + id + "&", 
          search.slice(queryStringPosition)
        ].join("");
      }
      result.sscId = id;
    }
    result.search = search;

    if (-1 !== result.hostname.search(/scorecardresearch.com$/)) {
      result.pathname = "/p";  
    } else {
      result.pathname = "/";  
    }

    result.href = result.protocol + "//" + result.hostname + result.pathname + result.search;

    return result;
  };

  /**
   * Returns the appropriate SSC server hostname.
   *
   * @return {Boolean}
   */
  SSCHelper.prototype.getSSCHostname = function() {
    var hostname;
    var location;
    location = this.getLocation();

    if (
      this.forceBBCHost !== ".com" &&
      (
        this.forceBBCHost === ".co.uk" || -1 !== location.hostname.search(/bbc\.co\.uk$/)
      )
    ) {
      hostname = sscCoUkHostname;
    } else {
      hostname = sscComHostname;
    }

    return hostname;
  };

  /**
   * Returns the appropriate scorecardresearch server hostname.
   *
   * @return {Boolean}
   */
  SSCHelper.prototype.getScorecardresearchHostname = function() {
    var hostname;
    var location;
    location = this.getLocation();

    if (location.protocol === "https:") {
      hostname = scorecardresearchHttpsHostname;
    } else {
      hostname = scorecardresearchHttpHostname;
    }

    return hostname;
  };

  return SSCHelper;

}));


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"name":"@bbc/echo-client-js","description":"Client library for sending events","version":"12.3.0","main":"dist/echo.js","scripts":{"test":"grunt build","build":"grunt build","build:dev":"webpack --mode=development --config ./config/webpack.dev.config.js","build:dist":"webpack --mode=production --config ./config/webpack.prod.config.js"},"pre-commit":["test"],"echo-client-js":{"barb-spring-version":"2.0.0","comscore-streamsense-version":"6.2.3.180328","ati-smarttag-version":"5.17.1"},"devDependencies":{"ajv":"^6.6.2","es6-promise":"^4.2.5","eslint":"^5.12.0","grunt":"^1.0.3","grunt-cli":"^1.3.2","grunt-contrib-jshint":"^2.0.0","grunt-contrib-watch":"^1.1.0","grunt-jscs":"^3.0.1","grunt-karma":"^3.0.1","grunt-shell":"^2.1.0","gulp":"^4.0.0","hoek":"^6.1.2","istanbul-instrumenter-loader":"^3.0.1","jasmine":"^3.3.1","jasmine-core":"^3.3.0","jquery":"^3.3.1","karma":"^3.1.4","karma-chrome-launcher":"*","karma-coverage-istanbul-reporter":"^2.0.4","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^2.0.1","karma-jasmine-html-reporter":"^1.4.0","karma-phantomjs-launcher":"^1.0.4","karma-requirejs":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-story-reporter":"^0.3.1","karma-webpack":"^3.0.0","load-grunt-tasks":"^4.0.0","lodash":"^4.17.11","phantomjs-prebuilt":"^2.1.16","pre-commit":"^1.2.2","requirejs":"^2.3.6","sinon":"^7.2.2","ssc-js":"git+ssh://git@github.com/bbc/ssc-js.git#1.2.0","time-grunt":"^2.0.0","uglifyjs-webpack-plugin":"^2.1.1","webpack":"^4.28.4","webpack-cli":"^3.2.1","webpack-merge":"^4.2.1"}};

/***/ }),

/***/ "./src/echo.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./src/echo/bootstrap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(bootstrap) {
    'use strict';

    if (window && window.bbccookies) {
      bootstrap.Environment.setOrbCookies(window.bbccookies);
    }

    return bootstrap;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  /**
   * Exports the EchoClient class, used for sending usage events
   * @exports Echo
   * @author James Skinner <james.skinner1@bbc.co.uk>
   * @example
  require(['echo'],function(Echo){
    var Media = Echo.Media,             // Media class
      EchoClient = Echo.EchoClient,   // Echo Client class
      Enums = Echo.Enums,             // Enums
      ConfigKeys = Echo.ConfigKeys,   // Key names to use in config
      Environment = Echo.Environment;

    // ** Enable Debug mode (for testing)
    Echo.Debug.enable();
  });

 */
  var meta = __webpack_require__("./src/echo/meta.js");

  var Environment = __webpack_require__("./src/echo/environment.js");

  var exports = {
    /** EchoClient class */
    EchoClient: __webpack_require__("./src/echo/client.js"),
    /** Media class */
    Media: __webpack_require__("./src/echo/media.js"),
    /** Media Id class */
    MediaId: __webpack_require__("./src/echo/media-id.js"),
    /** Environment class */
    Environment: Environment,
    /** Enumerations */
    Enums: __webpack_require__("./src/echo/enumerations.js"),
    /** Keys to use in config for EchoClient */
    ConfigKeys: __webpack_require__("./src/echo/config/keys.js"),
    /** Used to turn debugging on */
    Debug: __webpack_require__("./src/echo/util/debug.js"),

    getImplementationVersion: function() {
      return meta.VERSION;
    }
  };

  return exports;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/client.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Exports the EchoClient class, used for sending usage events
 * @exports Echo/EchoClient
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  'use strict';

  var DEBUG = __webpack_require__("./src/echo/util/debug.js");
  var Util = __webpack_require__("./src/echo/util/methods.js");

  // some conditions that are illegal from echo's viewpoint (e.g. seek after end event)
  // are considereed legal from the player's viewpoint
  // setting the flag to false will throw an error instead of logging for these cases
  // https://jira.dev.bbc.co.uk/browse/MYSTATS-2863
  var FailSilently = true;

  var ConfigKeys = __webpack_require__("./src/echo/config/keys.js");
  var Destinations = __webpack_require__("./src/echo/config/destinations.js");
  var Producers = __webpack_require__("./src/echo/config/producers.js");
  var Enums = __webpack_require__("./src/echo/enumerations.js");
  var LiveBroker = __webpack_require__("./src/echo/live-broker.js");
  var OnDemandBroker = __webpack_require__("./src/echo/on-demand-broker.js");
  var CSKeys = __webpack_require__("./src/echo/delegate/comscore/label-keys.js");
  var Schedule = __webpack_require__("./src/echo/schedule.js");
  var CookieHelper = __webpack_require__("./src/echo/util/cookies.js");

  var saHostname = 'sa.bbc.co.uk';
  var oldEchoDeviceIdCookieName = 'ckpf_echo_device_id';
  var echoDeviceIdCookieName = 'ckns_echo_device_id';

  var OrbitVariables = __webpack_require__("./src/echo/delegate/ati/orbit-variables.js");
  var Promise = __webpack_require__("./node_modules/es6-promise/dist/es6-promise.js").Promise;

  /**
   * Initialise an EchoClient object
   * @constructor
   * @param {string} appName Application Name
   * @param {string} appType Application Type (one of Enums.AplicationType)
   * @param {object} [config] config key-value pairs to override default config
   * @param {Environment} [env] Environment instance
   *
   * @example
   * var echo = new EchoClient('MyApp',ApplicationType.WEB,"abcdeffedcba");
   */
  function EchoClient(appName, appType, config, env, callback) {
    var self = this;

    config = config || {};

    Util.assertContainsValue(Enums.ApplicationType, appType,
      'appType should be one of Enums.ApplicationType, got "' +
      appType + '"');

    // Create space to hold state for the Application
    this.state = {
      counterNameSet: false
    };

    var c = EchoClient.ConfigGenerator.generate(config);

    this._env = env !== undefined ? env : new EchoClient.Environment();

    // set deviceid and clean of any whitespace
    var deviceId;
    if (c && typeof c[ConfigKeys.ECHO_DEVICE_ID] === 'string') {
      deviceId = Util.trim(c[ConfigKeys.ECHO_DEVICE_ID]);
      if (deviceId.length > 0) {
        c[ConfigKeys.ECHO_DEVICE_ID] = deviceId;
        this._deviceId  = deviceId;
      } else {
        c[ConfigKeys.ECHO_DEVICE_ID] = undefined;
      }
    }

    // if reporting sa.bbc.co.uk and the ckpf_echo_device_id cookie is present
    // use it as the device ID to override the s1 cookie. See MYSTATS-2684
    if (c && c[ConfigKeys.COMSCORE_HOST] === saHostname && !c[ConfigKeys.ECHO_DEVICE_ID]) {
      deviceId = CookieHelper.getCookieValueByName(echoDeviceIdCookieName);
      if (!deviceId) {
        deviceId = CookieHelper.getCookieValueByName(oldEchoDeviceIdCookieName);
      }

      if (deviceId) {
        this._deviceId = deviceId;
        c[ConfigKeys.ECHO_DEVICE_ID] = deviceId;
      }
    }

    if (c && c[ConfigKeys.ECHO_AUTO_START] === false) {
      this._autoStart = false;
    } else {
      this._autoStart = true;
    }

    // Create set of 'consumers'
    this._setConsumers(appName, appType, c, this._env);

    if (c && c[ConfigKeys.USE_ESS]) {
      this._essEnabled = true;
    } else {
      this._essEnabled = false;
    }

    if (c && c[ConfigKeys.ESS_HOSTNAME]) {
      Schedule.essHost = c[ConfigKeys.ESS_HOSTNAME];
    }

    if (c && c[ConfigKeys.ECHO_ENABLED] === false) {
      this._isEnabled = false;
    } else {
      this._isEnabled = true;
    }

    if (c && c[ConfigKeys.DEBUG_MODE] === true) {
      DEBUG.enable();
    } else {
      DEBUG.disable();
    }

    this._liveBroker = null;
    this._onDemandBroker = null;

    this._suppressingPlayEvent = false;
    this._suppressedPlayEventLabels = null;

    this.addLabel('bbc_id_wait', '1');
    EchoClient.Environment.getOrbIdCta(function(orbIdCta) {
      self.removeLabel('bbc_id_wait');
      if (orbIdCta && typeof orbIdCta.getIStatsLabels === 'function') {
        self.addLabels({
          bbc_identity: orbIdCta.getIStatsLabels().bbc_identity,
          bbc_hid: encodeURIComponent(orbIdCta.getIStatsLabels().bbc_hid || 'unidentified-user')
        });
      }
    });

    if (c && c[ConfigKeys.ECHO_CACHE_MODE]) {
      this._cacheMode = c[ConfigKeys.ECHO_CACHE_MODE];
    }

    if (this._isEnabled && this._autoStart) {
      this.start().then(callback);
    }
  }

  EchoClient.prototype.getDebugMode = function() {
    return DEBUG.getState();
  };

  EchoClient.prototype.start = function() {
    if (this._isEnabled && !this._hasStarted) {
      this._hasStarted = true;
      return OrbitVariables.get().then((function (orbitVars) {
        this._delegate('start', [orbitVars]);
        if (orbitVars.pageName &&
            orbitVars.pageName !== '' &&
            orbitVars.pageName !== 'orb.page') {
          this.setCounterName(orbitVars.pageName);
        }
      }).bind(this));
    } else {
      return Promise.reject();
    }
  };

  EchoClient.prototype.enable = function() {
    if (!this._isEnabled) {
      this._isEnabled = true;
      this._delegate('enable');

      if (this._autoStart && !this._hasStarted) {
        this.start();
      }
    }

    return this;
  };

  EchoClient.prototype.disable = function() {
    if (this._isEnabled) {
      this._clearMedia();
      this._isEnabled = false;
      this._delegate('disable');
    }

    return this;
  };

  EchoClient.prototype.isEnabled = function() {
    return this._isEnabled;
  };

  /**
   * @return {String|null}
   */
  EchoClient.prototype.getComScoreDeviceId = function() {
    var delegate;

    if (this.consumers[EchoClient.Consumers.COMSCORE]) {
      delegate = this.consumers[EchoClient.Consumers.COMSCORE];
      if (
        delegate instanceof EchoClient.ComScoreDelegate &&
        typeof delegate.getDeviceId === 'function'
      ) {
        return delegate.getDeviceId();
      }
    }

    return null;
  };

  /**
  * @return {String|null}
  */
  EchoClient.prototype.getAtiDeviceId = function() {
    var delegate;

    if (this.consumers[EchoClient.Consumers.ATI]) {
      delegate = this.consumers[EchoClient.Consumers.ATI];
      if (
        delegate instanceof EchoClient.AtiDelegate &&
        typeof delegate.getDeviceId === 'function'
      ) {
        return delegate.getDeviceId();
      }
    }

    return null;
  };

  /**
   * Set the trace identifier. This can then be used to retrieve the events
   * under test.
   *
   * @param {String} id
   */
  EchoClient.prototype.setTraceId = function(id) {
    this._delegate('setTraceId', [id]);
  };

  // Dependencies, saved here so we can mock them
  EchoClient.ConfigGenerator = __webpack_require__("./src/echo/config/generator.js");
  EchoClient.LabelCleanser = __webpack_require__("./src/echo/util/cleansing/label-cleanser.js");
  EchoClient.Util = __webpack_require__("./src/echo/util/methods.js");
  EchoClient.ComScoreDelegate = __webpack_require__(
    "./src/echo/delegate/comscore/comscore-delegate.js"
  );
  EchoClient.SpringDelegate = __webpack_require__("./src/echo/delegate/spring/spring-delegate.js");
  EchoClient.AtiDelegate = __webpack_require__("./src/echo/delegate/ati/ati-delegate.js");
  EchoClient.Environment = __webpack_require__("./src/echo/environment.js");

  /* *
   * --------------------------------------------------------------------
   * Private Methods
   * --------------------------------------------------------------------
   * */

  EchoClient.prototype._eventsEnabled = function() {
    return this._isEnabled && this._hasStarted;
  };

  EchoClient.prototype._setConsumers = function (appName, appType, conf, env) {
    this.consumers = {};
    var cleanAppName = EchoClient.LabelCleanser.cleanLabelValue(
      'app_name', appName
    );

    if (conf && conf[ConfigKeys.COMSCORE_ENABLED]) {
      this.consumers[EchoClient.Consumers.COMSCORE] =
        new EchoClient.ComScoreDelegate(cleanAppName, appType, conf, env);
    }

    if (conf && conf[ConfigKeys.ATI_ENABLED]) {
      this.consumers[EchoClient.Consumers.ATI] =
        new EchoClient.AtiDelegate(cleanAppName, appType, conf, env);
    }

    if (conf && conf[ConfigKeys.BARB_ENABLED]) {
      this.consumers[EchoClient.Consumers.BARB] =
        new EchoClient.SpringDelegate(cleanAppName, appType, conf, env);
    }

    return this;
  };

  /**
   * Call the specified function on all objects in this.consumers
   * @private
   * @param {String} fName Name of the function
   * @param {Array} args Arguments
   * @param {Array} cleanArgs Cleansed arguments to be used if the consumer requires label cleansing
   */
  EchoClient.prototype._delegate = function(fName, args, cleanArgs) {
    var index;
    var consumer;
    var promises = [];

    for (index in this.consumers) {
      if (index) {
        consumer = this.consumers[index];

        if (cleanArgs && consumer.requiresLabelCleansing()) {
          promises.push(consumer[fName].apply(consumer, cleanArgs));
        } else {
          promises.push(consumer[fName].apply(consumer, args));
        }
      }
    }

    return Promise.all(promises);
  };

  /* *
   * --------------------------------------------------------------------
   * Application state Methods
   * --------------------------------------------------------------------
   * */

  /**
   * Add labels to be sent with every event. Multiple calls to
   * this function will append labels to the current list.
   * Label keys must only contain the following chars : [a-z0-9_-.]
   * Label values must be a string or number
   * @param {object} labels Key-value pairs
   * @returns {EchoClient} `this`
   * @example
   * // set a label
   * echo.addLabels({bun:'cinnamon'});
   * // Update it and set another
   * echo.addLabels({bun:'sticky',princess:'hotdog'});
   */
  EchoClient.prototype.addLabels = function(labels) {
    this._delegate('addLabels', [EchoClient.LabelCleanser.cleanLabels(labels)]);
    return this;
  };

  /**
   * Add a single label
   * @param {string} key
   * @param {string|int} value
   * @returns {EchoClient} `this`
   */
  EchoClient.prototype.addLabel = function(key, value) {
    if (typeof key !== 'string') {
      DEBUG.error('Label key must be a string');
      return;
    }

    if (value === null || typeof value === 'undefined') {
      DEBUG.error('Label cannot be null/undefined');
      return;
    }

    var labels = {};
    labels[key] = value;

    return this.addLabels(labels);
  };

  /**
   * Add a single label that is known by Echo
   * @param {string} key
   * @param {string|int} value
   * @returns {this} `this`
   */
  EchoClient.prototype.addManagedLabel = function(key, value) {
    this._delegate('addManagedLabel', [
      EchoClient.LabelCleanser.cleanLabelKey(key),
      EchoClient.LabelCleanser.cleanLabelValue(key, value)
    ]);

    return this;
  };

  /**
   * Remove the specified labels
   * @param {array} labels A list of label names (keys) that need removing
   * @returns {this} `this`
   */
  EchoClient.prototype.removeLabels = function(labels) {
    var cleanLabels = [];
    for (var i = 0, j = labels.length; i < j; i++) {
      cleanLabels.push(EchoClient.LabelCleanser.cleanLabelKey(labels[i]));
    }

    this._delegate('removeLabels', [cleanLabels]);

    return this;
  };

  /**
   * Remove a single label
   * @param {string} label
   * @returns {this} `this`
   */
  EchoClient.prototype.removeLabel = function(label) {
    return this.removeLabels([label]);
  };

  /**
   * Set whether a product user as logged into the bbc
   * @param {string} hid
   * @returns {this} `this`
   */
  EchoClient.prototype.setLoggedInToBBCId = function(hid) {
    this._delegate('setLoggedInToBBCId', [hid]);
    return this;
  };

  /**
   * Set whether a product user is logged into the bbc or not
   * @returns {this} `this`
   */
  EchoClient.prototype.setLoggedOutOfBBCId = function() {
    this._delegate('setLoggedOutOfBBCId');
    return this;
  };

  /**
   * Set the version of the application (this is optional)
   * @param {string} version The version string for the application
   * @returns {this} `this`
   */
  EchoClient.prototype.setAppVersion = function(version) {
    this._delegate('setAppVersion', [version]);
    return this;
  };

  EchoClient.prototype.setDestination = function(destinationCode) {
    this._delegate('setDestination', [Destinations.get(destinationCode)]);
    return this;
  };

  EchoClient.prototype.setProducer = function(producerCode) {
    var producerId;
    if (producerCode) {
      producerId = Producers.getId(producerCode);
    } else {
      // The producer ID should be set to 0 so that it is removed by ATI
      producerId = '0';
    }

    if (producerId) {
      this._delegate('setProducer', [producerId]);
    } else {
      DEBUG.info('Producer [' + producerCode + '] not recognised');
    }

    return this;
  };

  EchoClient.prototype.setProducerById = function(producerId) {
    if (!producerId || !Producers.hasId(producerId)) {
      // Use BBC as the default producer
      producerId = Producers.BBC;
    } else {
      producerId = parseInt(producerId, 10);
    }

    this._delegate('setProducer', [producerId]);

    return this;
  };

  /**
   * Set the countername for this page, this can also be set when
   * a viewEvent is sent. This method provides a way of setting the
   * countername without sending a view event.
   *
   * @param {string} countername The countername
   *
   * @returns {this} `this`
   */
  EchoClient.prototype.setCounterName = function(countername) {
    var cleanCounterName = EchoClient.LabelCleanser.cleanCounterName(countername);

    var returnValue = this._delegate('setCounterName', [countername], [cleanCounterName]);
    this.state.counterNameSet = true;

    return returnValue;
  };

  /**
   * Set the language of the content being displayed, as opposed to
   * the locale language (which can be set on the Environment object)
   * the format for the tag still needs guidance from M&A, though I suspect
   * that following these
   * [instructions](http://www.w3.org/International/questions/qa-choosing-language-tags)
   * will work out fine
   * @param {string} language The language (code) of the content
   * @returns {this} `this`
   */
  EchoClient.prototype.setContentLanguage = function(language) {
    this._delegate('setContentLanguage', [language]);
    return this;
  };

  /**
   * Sets the cache mode for offline-enabled apps
   * @param {string} mode The cache mode
   * @returns {this} `this`
   */
  EchoClient.prototype.setCacheMode = function(mode) {
    this._delegate('setCacheMode', [mode]);
    this._cacheMode = mode;
    return this;
  };

  EchoClient.prototype.getCacheMode = function() {
    return this._cacheMode;
  };

  EchoClient.prototype.clearCache = function() {
    if (!this._isEnabled) {
      return;
    }

    this._delegate('clearCache');
  };

  EchoClient.prototype.flushCache = function() {
    if (!this._isEnabled) {
      return;
    }

    this._delegate('flushCache');
  };

  /* *
   * ------------------------------------------------------------------------
   * Basic Analytics Methods
   * ------------------------------------------------------------------------
   * */

  /**
   * Register a 'view event'. This indicates a new 'page' has been displayed.
   * See
   * [here](https://confluence.dev.bbc.co.uk/display/echo/Echo+Client+for+Product+Managers#EchoClientforProductManagers-Counternames)
   * for guidance on setting the countername. The '.page' suffix will be added
   * automatically if not provided.
   *
   * @param {string} countername The countername for this page
   * @param {object} eventLabels
   * @returns {this} `this`
   * @example
   * echo.viewEvent('news.scotland.page',{label1Key:'label1Value'});
   */
  EchoClient.prototype.viewEvent = function(countername, eventLabels) {
    if (!this._eventsEnabled()) {
      return;
    }

    var cleanCounterName = EchoClient.LabelCleanser.cleanCounterName(countername);
    var cleanEventLabels = EchoClient.LabelCleanser.cleanLabels(eventLabels);

    // Note down that we have evented to comScore at least once
    if (this.consumers[EchoClient.Consumers.COMSCORE]) {
      this.state.comscoreEventSent = true;
    }

    var returnValue = this._delegate('viewEvent', [countername, eventLabels], [cleanCounterName, cleanEventLabels]);
    this.state.counterNameSet = true;

    if (this.consumers[EchoClient.Consumers.COMSCORE]) {
      this.state.comscoreEventSent = true;
    }

    return returnValue;
  };

  /**
   * Register a bespoke event.
   * See
   * [here](https://confluence.dev.bbc.co.uk/display/echo/Echo+Client+for+Product+Managers#EchoClientforProductManagers-Useractiontypesandnames)
   * for advice on setting the actionType and actionName values
   *
   * @param {string} actionType The type of the event (e.g. 'click')
   * @param {string} actionName A description of the event (e.g. 'Button Z')
   * @param {object} [eventLabels] Additional labels
   * @returns {this} `this`
   * @example
   * Register a UserAction event (sent to Analytics (ComScore) only)
   * echo.userActionEvent('click','massive button',{info:'somrthing'});
   * Register a UserAction event also
   * echo.userActionEvent('click','massive button',{info:'somrthing'},
   *  EchoClient.Routing.ANALYTICS | EchoClient.Routing.BBC);
   */
  EchoClient.prototype.userActionEvent = function(
    actionType,
    actionName,
    eventLabels
  ) {
    if (!this._eventsEnabled()) {
      return;
    }

    if (!this.state.counterNameSet) {
      DEBUG.error('userActionEvent not available before a call to ' +
        'viewEvent (to set counter name).');
      return this;
    }

    // By default only send this to analytics
    this._delegate('userActionEvent', [actionType, actionName,
      EchoClient.LabelCleanser.cleanLabels(eventLabels)
    ]);

    // Note down that we have evented to comScore at least once
    if (this.consumers[EchoClient.Consumers.COMSCORE]) {
      this.state.comscoreEventSent = true;
    }

    return this;
  };

  /**
   * Register an error event
   *
   * @param {Error} [error] An Error object (or any object with at
   *                        least "name" and "message" properties)
   * @param {object} [eventLabels] Labels to send with this event
   * @returns {this} `this`
   */
  EchoClient.prototype.errorEvent = function(error, eventLabels) {
    if (!this._eventsEnabled()) {
      return;
    }

    this._delegate(
      'errorEvent', [error, EchoClient.LabelCleanser.cleanLabels(eventLabels)]
    );

    return this;
  };

  /* *
   * ------------------------------------------------------------------------
   * Media Player Attributes
   * ------------------------------------------------------------------------
   * */

  /**
   * Set the name of the AV Media Player being used
   * @param {string} name
   * @returns {this} `this`
   */
  EchoClient.prototype.setPlayerName = function(name) {
    Util.assert(typeof name === 'string' && name.length > 0,
      'setPlayerName: name must be string with length, got "' + name + '"');

    var cleanName = EchoClient.LabelCleanser.cleanLabelValue(
      'player_name', name);

    return this._delegate('setPlayerName', [name], [cleanName]);
  };

  /**
   * Set the version of the AV Media Player
   * @param {string} version The version string
   * @returns {this} `this`
   */
  EchoClient.prototype.setPlayerVersion = function(version) {
    Util.assert(typeof version === 'string' && version.length > 0,
      'setPlayerVersion: version must be string with length, got "' +
      version + '"');

    var cleanVersion = EchoClient.LabelCleanser.cleanLabelValue(
      'player_version', version);

    return this._delegate('setPlayerVersion', [version], [cleanVersion]);
  };

  /**
   * Specify if the player has popped out to a new window
   * *Note: Changing this value will not generate an event,
   * but will change the value sent with all subsequent AV events*
   * @param {boolean} isPopped
   * @returns {this} `this`
   */
  EchoClient.prototype.setPlayerIsPopped = function(isPopped) {
    Util.assert(
      typeof isPopped === 'boolean',
      'setPlayerIsPopped: isPopped must be boolean, got "' + isPopped + '"'
    );
    this._delegate('setPlayerIsPopped', [isPopped]);
    return this;
  };

  /**
   * Set the Media Player window state
   * *Note: Changing this value will not generate an event,
   * but will change the value sent with all subsequent AV events*
   * @param {string} state Should be one of Echo.WindowState, can be any string
   * @returns {this} `this`
   * @example
   * echo.setPlayerWindowState(Echo.WindowState.FULL);
   */
  EchoClient.prototype.setPlayerWindowState = function(state) {
    Util.assertContainsValue(Enums.WindowState, state,
      'The window state must be set as a member' +
      ' of Enums.WindowState, got "' + state + '"');
    this._delegate('setPlayerWindowState', [state]);
    return this;
  };

  /**
   * Set the volume
   * *Note: Changing this value will not generate an event,
   * but will change the value sent with all subsequent AV events*
   * @param {integer} volume Should be an integer in the range 0-100
   * @returns {this} `this`
   */
  EchoClient.prototype.setPlayerVolume = function(volume) {
    Util.assert(
      volume <= 100 && volume >= 0,
      'volume must be 0-100, got: ' + volume
    );

    if ((volume <= 100) && (volume >= 0)) {
      this._delegate(
        'setPlayerVolume', [volume]
      );
    }

    return this;
  };

  /**
   * Indicate whether subtitles are turned on/off
   * *Note: Changing this value will not generate an event,
   * but will change the value sent with all subsequent AV events*
   * @param {boolean} isSubtitled (true for subtitles on)
   * @returns {this} `this`
   */
  EchoClient.prototype.setPlayerIsSubtitled = function(isSubtitled) {
    Util.assert(
      typeof isSubtitled === 'boolean',
      'setPlayerIsSubtitled: isSubtitled must be a boolean, got "' +
      isSubtitled + '"'
    );

    this._delegate('setPlayerIsSubtitled', [isSubtitled]);
    return this;
  };

  /**
   * The player delegate is responsible for reporting the current state of the
   * player. You must implement the following methods.
   *
   * - getTimestamp {Function} that returns a number denoting the players
   * timestamp expressed in Unix Epoch and in milliseconds
   * - getPosition {Function} the current position that the player is at
   *
   * @param {Object} delegate
   * @return EchoClient
   */
  EchoClient.prototype.setPlayerDelegate = function(delegate) {
    delegate = delegate || {};

    // required functions
    var functions = ['getTimestamp', 'getPosition'];
    var methodName;
    var i;
    var valid;

    // failed to initialise the echo client as interface is not met
    var fail = false;

    // check that the `delegate` contains the correct functions and log to
    // console if in debug mode.
    for (i = 0; i < functions.length; i++) {
      methodName = functions[i];

      // check delegate has the method and that it is a function
      valid = (
        delegate.hasOwnProperty(methodName) &&
        typeof delegate[methodName] === 'function'
      );

      Util.assert(
        valid,
        'The player delegate must implement "' + methodName + '"'
      );

      if (!valid) {
        fail = true;
      }
    }

    if (!fail) {
      this._playerDelegate = delegate;
    }

    return this;
  };

  /* *
   * ------------------------------------------------------------------------
   * Media Attributes
   * ------------------------------------------------------------------------
   * */

  /**
   * Set details of the media which the player is about to play.
   *
   * **WARNING: Any updates made to the Media object after it is passed in to
   * Echo will NOT have any effect.**
   *
   * This method should be the first method called when the user requests a
   * new piece of content and must be called before the avEvent methods are
   * called. AV event messages will include all of the attributes of the media
   * object passed via (the most recent call to) this method.
   *
   * This method should only be called when the player is in a stopped state,
   * i.e. before a play event or after an end event.
   *
   * @param {Media} media A Media object defining the content being consumed.
   * @returns {this} `this`
   */
  EchoClient.prototype.setMedia = function(media) {
    if (!this._eventsEnabled()) {
      return;
    }

    this._clearMedia();

    var clonedMedia = media.getClone();

    if (!this.state.counterNameSet) {
      DEBUG.error(
        'setMedia: Must have a countername set ' +
        'or view event sent first'
      );
      return;
    }

    this.media = clonedMedia;

    this.addLabel(CSKeys.ESS_ENABLED, this._essEnabled ? 'true' : 'false');

    var live = Enums.MediaConsumptionMode.LIVE;
    if (this.media.getMediaConsumptionMode() === live) {
      this._initLiveBroker();
    } else {
      this._initOnDemandBroker();
    }

    this._delegate('setMedia', [this.media]);
  };

  /**
   * Invoked from the LiveBroker when a broadcast has been detected.
   *
   * @param {Media} newMedia
   * @param {Number} newPosition the previous position of the player
   * @param {Number} oldPosition the new position
   */
  EchoClient.prototype.liveMediaUpdate = function(
    newMedia,
    newPosition,
    oldPosition
  ) {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    if (!newMedia) {
      return;
    }

    this._suppressingPlayEvent = false;

    this.media = newMedia;
    this._delegate('liveMediaUpdate', [newMedia, newPosition, oldPosition]);
  };

  /**
   * Set the length of the media (in milliseconds).
   *
   * Media length can be specified on the Media object prior to passing it to
   * Echo if the length is known up front. This method is provided to allow
   * players which do not know the length of piece of content before it starts
   * playing to report the length once it becomes available.
   *
   * For on-demand content, this This method must be called within the first
   * 60 seconds of playback (if the length has not already been passed to Echo
   * via the Media object). Failure to do so will result in inaccurate
   * consumption statistics for the content. This method should be called at
   * most once for each new piece of media passed to Echo.
   *
   * This method is not expected to be called for live content as a length of
   * zero should have been specified on the Media object passed to Echo.
   *
   * @param {integer} length The length of the media in ms.
   * @returns {this} `this`
   */
  EchoClient.prototype.setMediaLength = function(length) {
    if (!this.media) {
      DEBUG.error('setMediaLength: Must call setMedia first');
      return this;
    } else if (!this.media.isOnDemand()) {
      DEBUG.error(
        'setMediaLength: Length should be set to zero prior to ' +
        'passing the media object to Echo for live media'
      );
      return this;
    }

    length = this._cleanPosition(length);

    if (typeof length !== 'number') {
      DEBUG.error(
        'setMediaLength: Length must be a positive number'
      );
      return this;
    }

    this._delegate('setMediaLength', [length]);
    this.media.setLength(length);

    return this;
  };

  /**
   * @deprecated Field is no longer used
   */
  EchoClient.prototype.setMediaBitrate = function() {
  };

  /**
   * @deprecated Field is no longer used
   */
  EchoClient.prototype.setMediaCodec = function() {
  };

  /**
   * @deprecated Field is no longer used
   */
  EchoClient.prototype.setMediaCDN = function() {
  };

  EchoClient.prototype.setEssSuccess = function(isSuccess) {
    this.addLabel(CSKeys.ESS_SUCCESS, isSuccess ? 'true' : 'false');
  };

  EchoClient.prototype.setEssError = function(error, code) {
    this.addLabel(CSKeys.ESS_ERROR, error.toString().toLowerCase());

    if (error.toString() === Enums.EssError.STATUS_CODE.toString()) {
      this.addLabel(CSKeys.ESS_STATUS_CODE, code);
    }

    this._delegate('liveEnrichmentFailed');
  };

  /* *
   * ------------------------------------------------------------------------
   * Media Events
   * ------------------------------------------------------------------------
   * */

  /**
   * Both content Id and AV Type must have been set before trying to use the
   * AV event methods.
   *
   * This method throws an exception in debug mode if both of these attributes
   * have not been set. It returns false in non-debug mode if both of these
   * attributes have not been set.
   *
   * @private
   * @returns {Boolean} True if the appropriate state is set up to use the av
   *         even methods. Returns false if state is not set up in non-debug
   *         mode or throws an exception in debug mode.
   */
  EchoClient.prototype._avEventsEnabled = function() {

    return (
      Util.assert(
        Boolean(this.media), 'setMedia() must be called prior to this method', FailSilently
      ) &&
      Util.assert(
        Boolean(this._playerDelegate),
        'setPlayerDelegate not called or not configured correctly', FailSilently
      )
    );
  };

  /**
   * Get the live broker.
   *
   * @public
   */
  EchoClient.prototype.getLiveBroker = function() {
    return this._liveBroker;
  };

  /**
   * Init the Live broker.
   *
   * @private
   */
  EchoClient.prototype._initLiveBroker = function() {
    if (!this._avEventsEnabled() ||
      this.media.getMediaConsumptionMode() !== Enums.MediaConsumptionMode.LIVE
    ) {
      return;
    }

    this._liveBroker = new LiveBroker(
      this._playerDelegate, this.media, this, this._env, this._essEnabled
    );
    this._delegate('setBroker', [this._liveBroker]);
  };

  /**
   * Get the On-demand broker.
   *
   * @public
   */
  EchoClient.prototype.getOnDemandBroker = function() {
    return this._onDemandBroker;
  };

  /**
   * Init the On-demand broker.
   *
   * @private
   */
  EchoClient.prototype._initOnDemandBroker = function() {
    if (!this._avEventsEnabled() ||
      this.media.getMediaConsumptionMode() === Enums.MediaConsumptionMode.LIVE
    ) {
      return;
    }

    this._onDemandBroker = new OnDemandBroker(
      this._playerDelegate,
      this.media,
      this
    );
    this._delegate('setBroker', [this._onDemandBroker]);
  };

  /**
   * Clean a position value.
   *
   * @param {Number|string} value The value to clean
   * @returns {integer|false}
   */
  EchoClient.prototype._cleanPosition = function(value) {

    if (value !== undefined && value !== null) {
      value = Math.floor(value);
    }

    if (value === undefined || isNaN(value) || !isFinite(value) || value < 0) {
      value = 0;
    }

    return value;
  };

  /**
   * Register an AV Play event
   *
   * @param {integer} position Position through the media in ms
   * @param {object} [eventLabels] Custom labels to set for this event
   * @returns {this} `this`
   */
  EchoClient.prototype.avPlayEvent = function(position, eventLabels) {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    var isLive = this.media.isLive();

    this._isPlaying = true;

    if (isLive && this._liveBroker) {
      position = this._liveBroker.getPosition();
      this._liveBroker.start();
    } else if (!isLive && this._onDemandBroker) {
      position = this._cleanPosition(position);
      this._previousPlayPosition = position;

      if (this._positionExceedsMediaLength(position)) {
        return;
      }

      this._onDemandBroker.setPosition(position);
      this._onDemandBroker.start();
    }

    if (isLive && this.media.isEssEnriched() && this._suppressingPlayEvent) {
      this._suppressedPlayEventLabels = eventLabels;
    } else {
      this._delegate(
        'avPlayEvent',
        [position, EchoClient.LabelCleanser.cleanLabels(eventLabels)]
      );
      this.media.setBuffering(false);
      this.media.setPlaying(true);
    }

    if (this.consumers[EchoClient.Consumers.COMSCORE]) {
      this.state.comscoreEventSent = true;
    }

    return this;
  };

  /**
   * Perform common av event actions.
   *
   * @param {string}  methodToDelegate The method to delegate
   * @param {integer} position Position through the media in ms
   * @param {object}  eventLabels Optional object of labels
   * @param {integer} rate Optional rate for rwd/ffwd
   * @returns {this} `this`
   */
  EchoClient.prototype._avNavigationEvent = function(
    methodToDelegate, position, eventLabels, rate
  ) {

    if (!this._avEventsEnabled()) {
      return;
    }

    this._isPlaying = false;

    if (this.media.isLive()) {
      if (this._liveBroker) {
        this._liveBroker.stop();
        position = this._liveBroker.getPosition();
      }

      if (this.media.isEssEnriched() && !this._suppressingPlayEvent) {
        this._suppressingPlayEvent = true;
      }

    } else if (this._onDemandBroker) {
      position = this._cleanPosition(position);
      position = this._preventPositionExceedingMediaLength(position);
      this._onDemandBroker.stop();
    }

    if (methodToDelegate === 'avRewindEvent' || methodToDelegate === 'avFastForwardEvent') {
      this._delegate(
        methodToDelegate,
        [position, rate, EchoClient.LabelCleanser.cleanLabels(eventLabels)]
      );
    } else {
      this._delegate(
        methodToDelegate,
        [position, EchoClient.LabelCleanser.cleanLabels(eventLabels)]
      );
    }

  };

  /**
   * Register an AV Pause event
   *
   * @param {Number} position Position through the media in ms
   * @param {object} [eventLabels] Custom labels to set for this event
   * @returns {this} `this`
   */
  EchoClient.prototype.avPauseEvent = function(position, eventLabels) {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    this.media.setPlaying(false);
    this._avNavigationEvent('avPauseEvent', position, eventLabels);

    return this;
  };

  /**
   * Register an AV Buffer event
   *
   * @param {integer} position Position through the media in ms
   * @param {object} [eventLabels] Custom labels to set for this event
   * @returns {this} `this`
   */
  EchoClient.prototype.avBufferEvent = function(position, eventLabels) {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    this.media.setPlaying(false);
    this._avNavigationEvent('avBufferEvent', position, eventLabels);
    this.media.setBuffering(true);

    return this;
  };

  /**
   * Register an AV End event
   *
   * @param {integer} position Position through the media in ms
   * @param {object} [eventLabels] Custom labels to set for this event
   * @returns {this} `this`
   */
  EchoClient.prototype.avEndEvent = function(position, eventLabels) {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    this.media.setPlaying(false);
    this._avNavigationEvent('avEndEvent', position, eventLabels);

    this.media = null;

    return this;
  };

  /**
   * Register an AV Rewind event
   *
   * @param {integer} position Position through the media in ms
   * @param {integer} rate The rate of the rewind (i.e. 2 = double-speed)
   * @param {object} [eventLabels] Custom labels to set for this event
   * @returns {this} `this`
   */
  EchoClient.prototype.avRewindEvent = function(position, rate, eventLabels) {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    this._avNavigationEvent('avRewindEvent', position, eventLabels, rate);

    return this;
  };

  /**
   * Register an AV Fast Forward event
   *
   * @param {integer} position Position through the media in ms
   * @param {integer} rate The rate of the fast-forward (i.e. 2 = double-speed)
   * @param {object} [eventLabels] Custom labels to set for this event
   * @returns {this} `this`
   */
  EchoClient.prototype.avFastForwardEvent = function(
    position,
    rate,
    eventLabels
  ) {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    this._avNavigationEvent('avFastForwardEvent', position, eventLabels, rate);

    return this;
  };

  /**
   * Register an AV Seek event
   *
   * @param {integer} position Position through the media in ms
   * @param {object} [eventLabels] Custom labels to set for this event
   * @returns {this} `this`
   */
  EchoClient.prototype.avSeekEvent = function(position, eventLabels) {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    this._avNavigationEvent('avSeekEvent', position, eventLabels);

    return this;
  };

  /**
   * Register a custom AV event
   *
   * @param {string} actionType The type of action
   * @param {string} actionName The name of the action
   * @param {integer} position Position in media in ms (0 for simulcast)
   * @param {object} [eventLabels] Custom labels to set for this event
   * @returns {this} `this`
   * @example
   * echo.avUserActionEvent('click','av_related_button',5000);
   */
  EchoClient.prototype.avUserActionEvent = function(
    actionType,
    actionName,
    position,
    eventLabels
  ) {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    if (this._liveBroker) {
      position = this._liveBroker.getPosition();
    } else {
      position = this._cleanPosition(position);
      position = this._preventPositionExceedingMediaLength(position);
    }

    var cleanLabels = EchoClient.LabelCleanser.cleanLabels(eventLabels);
    this._delegate(
      'avUserActionEvent',
      [actionType, actionName, position, cleanLabels]
    );
    return this;
  };

  /**
   * Release a suppressed play event
   *
   * @returns {this} `this`
   */
  EchoClient.prototype.releaseSuppressedPlay = function() {
    if (!this._eventsEnabled() || !this._avEventsEnabled()) {
      return;
    }

    if (this._suppressingPlayEvent) {
      this._suppressingPlayEvent = false;
      this.avPlayEvent(this._liveBroker.getPosition(),
        this._suppressedPlayEventLabels);
    }

    return this;
  };

  /**
   *
   * @private
   */
  EchoClient.prototype._clearMedia = function() {
    this.removeLabel(CSKeys.MEDIA_TIMESTAMP);
    this.removeLabel(CSKeys.ESS_ENABLED);
    this.removeLabel(CSKeys.ESS_ENRICHED);
    this.removeLabel(CSKeys.ESS_SUCCESS);
    this.removeLabel(CSKeys.ESS_ERROR);
    this.removeLabel(CSKeys.ESS_STATUS_CODE);

    if (this.media !== null) {
      this.media = null;
    }

    if (this._liveBroker instanceof LiveBroker) {
      this._liveBroker.stop();
      this._liveBroker = null;
    }

    if (this._onDemandBroker instanceof OnDemandBroker) {
      this._onDemandBroker.stop();
      this._onDemandBroker = null;
    }

    this._isPlaying = undefined;
    this._previousPlayPosition = undefined;
  };

  /**
   *
   * @private
   */
  EchoClient.prototype._positionExceedsMediaLength = function(position) {

    if (this.media && this.media.length > 0 && position >= (this.media.length - 1000)) {
      return true;
    }

    return false;
  };

  /**
   *
   * @private
   */
  EchoClient.prototype._preventPositionExceedingMediaLength = function(position) {

    if (this._positionExceedsMediaLength(position)) {
      return this.media.length;
    }

    return position;
  };

  EchoClient.Consumers = { //NOTE: must be powers of 2
    COMSCORE: 1 << 0,
    BARB: 1 << 1,
    ATI: 1 << 2
  };

  return EchoClient;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/config/destinations.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  var Producers = __webpack_require__("./src/echo/config/producers.js");

  var destinations = {
    // Permitted values for setting Destination site ids
    DEFAULT: {
      id: '596068', defaultProducer: Producers.BBC, isTest: true
    },
    ACCOUNT: {
      id: '598250', defaultProducer: Producers.ACCOUNT, isTest: false
    },
    ACCOUNT_TEST: {
      id: '598252', defaultProducer: Producers.ACCOUNT, isTest: true
    },
    AUDIENCE_PORTAL: {
      id: '602136', defaultProducer: Producers.AUDIENCE_SERVICES, isTest: false
    },
    AUDIENCE_PORTAL_TEST: {
      id: '602137', defaultProducer: Producers.AUDIENCE_SERVICES, isTest: true
    },
    AUDIENCE_SERVICES_PS: {
      id: '602167', defaultProducer: Producers.AUDIENCE_SERVICES, isTest: false
    },
    AUDIENCE_SERVICES_PS_TEST: {
      id: '602168', defaultProducer: Producers.AUDIENCE_SERVICES, isTest: true
    },
    BBC_CORPORATE_PS: {
      id: '603550', defaultProducer: Producers.BBC, isTest: false
    },
    BBC_CORPORATE_PS_TEST: {
      id: '603551', defaultProducer: Producers.BBC, isTest: true
    },
    BBC_SHOP: {
      id: '598253', defaultProducer: Producers.BBC_SHOP, isTest: false
    },
    BBC_SHOP_TEST: {
      id: '598254', defaultProducer: Producers.BBC_SHOP, isTest: true
    },
    BBC_SYNDICATION: {
      id: '601718', defaultProducer: Producers.BBC, isTest: false
    },
    BBC_SYNDICATION_TEST: {
      id: '601719', defaultProducer: Producers.BBC, isTest: true
    },
    BBC_THREE: {
      id: '598255', defaultProducer: Producers.BBC_THREE, isTest: false
    },
    BBC_THREE_TEST: {
      id: '598256', defaultProducer: Producers.BBC_THREE, isTest: true
    },
    BITESIZE: {
      id: '598257', defaultProducer: Producers.BITESIZE, isTest: false
    },
    BITESIZE_TEST: {
      id: '598258', defaultProducer: Producers.BITESIZE, isTest: true
    },
    BLOGS_PS: {
      id: '603546', defaultProducer: Producers.BBC, isTest: false
    },
    BLOGS_PS_TEST: {
      id: '603547', defaultProducer: Producers.BBC, isTest: true
    },
    BRITBOX: {
      id: '598259', defaultProducer: Producers.BRITBOX, isTest: false
    },
    BRITBOX_TEST: {
      id: '598260', defaultProducer: Producers.BRITBOX, isTest: true
    },
    CBBC: {
      id: '598261', defaultProducer: Producers.CBBC, isTest: false
    },
    CBBC_TEST: {
      id: '598262', defaultProducer: Producers.CBBC, isTest: true
    },
    CBEEBIES: {
      id: '598263', defaultProducer: Producers.CBEEBIES, isTest: false
    },
    CBEEBIES_TEST: {
      id: '598264', defaultProducer: Producers.CBEEBIES, isTest: true
    },
    FEATURE_SITES_GNL: {
      id: '598265', defaultProducer: Producers.GNL_HOMEPAGE, isTest: false
    },
    FEATURE_SITES_GNL_TEST: {
      id: '598266', defaultProducer: Producers.GNL_HOMEPAGE, isTest: true
    },
    FOOD: {
      id: '598267', defaultProducer: Producers.BBC_FOOD, isTest: false
    },
    FOOD_TEST: {
      id: '598268', defaultProducer: Producers.BBC_FOOD, isTest: true
    },
    GAMES_PS: {
      id: '599452', defaultProducer: Producers.BBC, isTest: false
    },
    GAMES_PS_TEST: {
      id: '599454', defaultProducer: Producers.BBC, isTest: true
    },
    GATEWAY: {
      id: '598269', defaultProducer: Producers.GATEWAY, isTest: false
    },
    GATEWAY_TEST: {
      id: '598270', defaultProducer: Producers.GATEWAY, isTest: true
    },
    HOMEPAGE_GNL: {
      id: '598271', defaultProducer: Producers.GNL_HOMEPAGE, isTest: false
    },
    HOMEPAGE_GNL_TEST: {
      id: '598272', defaultProducer: Producers.GNL_HOMEPAGE, isTest: true
    },
    HOMEPAGE_PS: {
      id: '598273', defaultProducer: Producers.PS_HOMEPAGE, isTest: false
    },
    HOMEPAGE_PS_TEST: {
      id: '598274', defaultProducer: Producers.PS_HOMEPAGE, isTest: true
    },
    IDEAS: {
      id: '598275', defaultProducer: Producers.BBC, isTest: false
    },
    IDEAS_TEST: {
      id: '598276', defaultProducer: Producers.BBC, isTest: true
    },
    IPLAYER: {
      id: '598277', defaultProducer: Producers.IPLAYER, isTest: false
    },
    IPLAYER_TEST: {
      id: '598278', defaultProducer: Producers.IPLAYER, isTest: true
    },
    MEDIA_ACTION: {
      id: '598279', defaultProducer: Producers.MEDIA_ACTION, isTest: false
    },
    MEDIA_ACTION_TEST: {
      id: '598280', defaultProducer: Producers.MEDIA_ACTION, isTest: true
    },
    MONITORING: {
      id: '598281', defaultProducer: Producers.MONITORING, isTest: false
    },
    MONITORING_TEST: {
      id: '598282', defaultProducer: Producers.MONITORING, isTest: true
    },
    MUSIC: {
      id: '598283', defaultProducer: Producers.BBC_MUSIC, isTest: false
    },
    MUSIC_TEST: {
      id: '598284', defaultProducer: Producers.BBC_MUSIC, isTest: true
    },
    NEWS_PS: {
      id: '598285', defaultProducer: Producers.NEWS, isTest: false
    },
    NEWS_PS_TEST: {
      id: '598286', defaultProducer: Producers.NEWS, isTest: true
    },
    NEWS_GNL: {
      id: '598287', defaultProducer: Producers.NEWS, isTest: false
    },
    NEWS_GNL_TEST: {
      id: '598288', defaultProducer: Producers.NEWS, isTest: true
    },
    NEWS_LANGUAGES_GNL: {
      id: '598289', defaultProducer: Producers.NEWS, isTest: false
    },
    NEWS_LANGUAGES_GNL_TEST: {
      id: '598290', defaultProducer: Producers.NEWS, isTest: true
    },
    NEWS_LANGUAGES_PS: {
      id: '598291', defaultProducer: Producers.NEWS, isTest: false
    },
    NEWS_LANGUAGES_PS_TEST: {
      id: '598292', defaultProducer: Producers.NEWS, isTest: true
    },
    NEWSROUND: {
      id: '598293', defaultProducer: Producers.NEWSROUND, isTest: false
    },
    NEWSROUND_TEST: {
      id: '598294', defaultProducer: Producers.NEWSROUND, isTest: true
    },
    OTHER: {
      id: '598295', defaultProducer: Producers.OTHER, isTest: false
    },
    OTHER_TEST: {
      id: '598297', defaultProducer: Producers.OTHER, isTest: true
    },
    OWN_IT: {
      id: '598298', defaultProducer: Producers.CBBC, isTest: false
    },
    OWN_IT_TEST: {
      id: '598299', defaultProducer: Producers.CBBC, isTest: true
    },
    PROGRAMMES_PS: {
      id: '598300', defaultProducer: Producers.PROGRAMMES, isTest: false
    },
    PROGRAMMES_PS_TEST: {
      id: '598301', defaultProducer: Producers.PROGRAMMES, isTest: true
    },
    RED_BUTTON_PS: {
      id: '601192', defaultProducer: Producers.BBC, isTest: false
    },
    RED_BUTTON_PS_TEST: {
      id: '601193', defaultProducer: Producers.BBC, isTest: true
    },
    REWIND_PS: {
      id: '603552', defaultProducer: Producers.BBC, isTest: false
    },
    REWIND_PS_TEST: {
      id: '603553', defaultProducer: Producers.BBC, isTest: true
    },
    SEARCH_GNL: {
      id: '598302', defaultProducer: Producers.SEARCH, isTest: false
    },
    SEARCH_GNL_TEST: {
      id: '598303', defaultProducer: Producers.SEARCH, isTest: true
    },
    SEARCH_PS: {
      id: '598304', defaultProducer: Producers.SEARCH, isTest: false
    },
    SEARCH_PS_TEST: {
      id: '598305', defaultProducer: Producers.SEARCH, isTest: true
    },
    SOUNDS: {
      id: '598306', defaultProducer: Producers.SOUNDS, isTest: false
    },
    SOUNDS_TEST: {
      id: '598307', defaultProducer: Producers.SOUNDS, isTest: true
    },
    SPORT_GNL: {
      id: '598308', defaultProducer: Producers.SPORT, isTest: false
    },
    SPORT_GNL_TEST: {
      id: '598309', defaultProducer: Producers.SPORT, isTest: true
    },
    SPORT_PS: {
      id: '598310', defaultProducer: Producers.SPORT, isTest: false
    },
    SPORT_PS_TEST: {
      id: '598311', defaultProducer: Producers.SPORT, isTest: true
    },
    STORYWORKS_GNL: {
      id: '598312', defaultProducer: Producers.GNL_STORYWORKS, isTest: false
    },
    STORYWORKS_GNL_TEST: {
      id: '598313', defaultProducer: Producers.GNL_STORYWORKS, isTest: true
    },
    SUBTITLES_PS: {
      id: '603548', defaultProducer: Producers.PROGRAMMES, isTest: false
    },
    SUBTITLES_PS_TEST: {
      id: '603549', defaultProducer: Producers.PROGRAMMES, isTest: true
    },
    SYNDICATION_PARTNERS_GNL: {
      id: '598314', defaultProducer: Producers.WS_PARTNERS_B2B, isTest: false
    },
    SYNDICATION_PARTNERS_GNL_TEST: {
      id: '598315', defaultProducer: Producers.WS_PARTNERS_B2B, isTest: true
    },
    TASTER: {
      id: '598316', defaultProducer: Producers.TASTER, isTest: false
    },
    TASTER_TEST: {
      id: '598317', defaultProducer: Producers.TASTER, isTest: true
    },
    TEACH: {
      id: '598318', defaultProducer: Producers.BBC, isTest: false
    },
    TEACH_TEST: {
      id: '598320', defaultProducer: Producers.BBC, isTest: true
    },
    VOICE: {
      id: '598326', defaultProducer: Producers.VOICE, isTest: false
    },
    VOICE_TEST: {
      id: '598328', defaultProducer: Producers.VOICE, isTest: true
    },
    WEATHER_GNL: {
      id: '598330', defaultProducer: Producers.WEATHER, isTest: false
    },
    WEATHER_GNL_TEST: {
      id: '598332', defaultProducer: Producers.WEATHER, isTest: true
    },
    WEATHER_PS: {
      id: '598338', defaultProducer: Producers.WEATHER, isTest: false
    },
    WEATHER_PS_TEST: {
      id: '598339', defaultProducer: Producers.WEATHER, isTest: true
    },
    WS_LEARNING_ENGLISH: {
      id: '598340', defaultProducer: Producers.WS_LEARNING_ENGLISH, isTest: false
    },
    WS_LEARNING_ENGLISH_TEST: {
      id: '598341', defaultProducer: Producers.WS_LEARNING_ENGLISH, isTest: true
    },
    WS_NEWS_LANGUAGES: {
      id: '598342', defaultProducer: Producers.BBC_WORLD_NEWS, isTest: false
    },
    WS_NEWS_LANGUAGES_TEST: {
      id: '598343', defaultProducer: Producers.BBC_WORLD_NEWS, isTest: true
    },
    WS_PARTNERS_B2B: {
      id: '598820', defaultProducer: Producers.WS_PARTNERS_B2B, isTest: false
    },
    WS_PARTNERS_B2B_TEST: {
      id: '598823', defaultProducer: Producers.WS_PARTNERS_B2B, isTest: true
    },
    WS_PROGRAMMES: {
      id: '598344', defaultProducer: Producers.PROGRAMMES, isTest: false
    },
    WS_PROGRAMMES_TEST: {
      id: '598345', defaultProducer: Producers.PROGRAMMES, isTest: true
    },
    WS_SYNDICATION_PARTNERS: {
      id: '598346', defaultProducer: Producers.WS_PARTNERS_B2B, isTest: false
    },
    WS_SYNDICATION_PARTNERS_TEST: {
      id: '598347', defaultProducer: Producers.WS_PARTNERS_B2B, isTest: true
    },

    get: function(destinationCode) {
      var destination;
      if (destinationCode) {
        destination = this[destinationCode.toUpperCase()];
      }

      return destination;
    }
  };

  return destinations;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/config/generator.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Wrapper for the config for each consumer
 * This approach could change, might push this all
 * into the delegates...
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var DEBUG = __webpack_require__("./src/echo/util/debug.js");
  var Enums = __webpack_require__("./src/echo/enumerations.js");
  var Utils = __webpack_require__("./src/echo/util/methods.js");
  var meta = __webpack_require__("./src/echo/meta.js");
  var KEYS = __webpack_require__("./src/echo/config/keys.js");

  var defaultConfig = {};

  // Echo
  defaultConfig[KEYS.ECHO_ENABLED] = true;
  defaultConfig[KEYS.ECHO_AUTO_START] = true;
  defaultConfig[KEYS.ECHO_DEVICE_ID] = null;
  defaultConfig[KEYS.REPORTING_PROFILE] = 'PUBLIC_SERVICE';
  defaultConfig[KEYS.ECHO_CACHE_MODE] = 'OFFLINE';

  // ComScore
  defaultConfig[KEYS.COMSCORE_ENABLED] = false;

  // AT Internet
  defaultConfig[KEYS.ATI_ENABLED] = true;

  // BARB
  defaultConfig[KEYS.BARB_ENABLED] = false;
  defaultConfig[KEYS.BARB_DEBUG] = false;
  defaultConfig[KEYS.BARB_SITE_CODE] = 'bbcdotcom';

  // Echo chamber
  defaultConfig[KEYS.TEST_SERVICE_ENABLED] = false;

  // ESS
  defaultConfig[KEYS.USE_ESS] = false;
  defaultConfig[KEYS.ESS_HOSTNAME] = 'ess.api.bbci.co.uk';

  // SSC
  defaultConfig[KEYS.USE_SSC] = false;
  defaultConfig[KEYS.SSC_HOSTNAME] = null;

  // Config values that we do not want the user to overwrite
  var fixedConfig = {};
  fixedConfig[KEYS.ECHO_NAME] = meta.NAME;
  fixedConfig[KEYS.ECHO_VERSION] = meta.VERSION;

  function hasLength(val) {
    return (typeof val === 'string' && val.length > 0);
  }

  function isStringWithNoParams(str) {
    return str.match(/[a-zA-Z]+/);
  }

  function isValidReportingProfile(profileId) {
    if (typeof profileId === 'string') {
      profileId = profileId.toUpperCase();
      return Enums.ReportingProfiles.hasOwnProperty(profileId);
    } else {
      return false;
    }
  }

  function isValidCacheMode(mode) {
    if (typeof mode === 'string') {
      mode = mode.toUpperCase();
      return Enums.EchoCacheMode.hasOwnProperty(mode);
    } else {
      return false;
    }
  }

  function validate(conf) {
    if (!isValidCacheMode(conf[KEYS.ECHO_CACHE_MODE])) {
      DEBUG.error('Config Error: KEYS.ECHO_CACHE_MODE Invalid' +
        ' cache mode specified');
      return false;
    }

    return Utils.assert(
      typeof conf[KEYS.ECHO_ENABLED] === 'boolean',
      'Config: "enabled" must be boolean, got ' +
      conf[KEYS.ECHO_ENABLED]
    ) && Utils.assert(
      typeof conf[KEYS.ECHO_AUTO_START] === 'boolean',
      'Config: "auto_start" must be boolean, got ' +
      conf[KEYS.ECHO_AUTO_START]
    ) && Utils.assert(
      conf[KEYS.ECHO_DEVICE_ID] === null ||
      (typeof conf[KEYS.ECHO_DEVICE_ID] === 'string' &&
      conf[KEYS.ECHO_DEVICE_ID].length),
      'ECHO.DEVICE_ID must be an non-empty string'
    );
  }

  function validateComScore(config) {
    // Don't bother validating if disabled
    if (config[KEYS.COMSCORE_ENABLED] === false) {
      return true;
    }

    if (!hasLength(config[KEYS.REPORTING_PROFILE])) {
      if (!hasLength(config[KEYS.COMSCORE_HOST])) {
        DEBUG.error('Config Error: Must have config value for COMSCORE_HOST' +
          ' or REPORTING_PROFILE'
        );
        return false;
      }

      if (config[KEYS.COMSCORE_HOST] !== 'scorecardresearch.com' &&
        config[KEYS.COMSCORE_HOST] !== 'sa.bbc.co.uk') {
        DEBUG.error('Config Error: KEYS.COMSCORE_HOST Should be one of ' +
          'scorecardresearch.com or sa.bbc.co.uk');
        return false;
      }
    }

    if (!isValidReportingProfile(config[KEYS.REPORTING_PROFILE])) {
      DEBUG.error('Config Error: KEYS.REPORTING_PROFILE Invalid' +
        ' reporting profile specified');
      return false;
    }

    return Utils.assert(
      typeof config[KEYS.COMSCORE_ENABLED] === 'boolean',
      'ComScore config: "ENABLED" must be boolean'
    );
  }

  function validateSpring(config) {
    // Don't bother validating if disabled
    if (config[KEYS.BARB_ENABLED] === false) {
      return true;
    }

    if (!hasLength(config[KEYS.BARB_SITE_CODE])) {
      DEBUG.error('Config Error: KEYS.BARB_SITE_CODE must have a value');
      return false;
    }

    if (!isStringWithNoParams(config[KEYS.BARB_SITE_CODE])) {
      DEBUG.error('Config Error: KEYS.BARB_SITE_CODE must match [a-zA-Z]');
      return false;
    }

    if (typeof config[KEYS.BARB_DEBUG] !== 'boolean') {
      DEBUG.error('Config Error: KEYS.BARB_DEBUG must be a boolean');
      return false;
    }

    return true;
  }

  function validateSscConfig(config) {

    var hostname = config[KEYS.SSC_HOSTNAME];

    if (typeof config[KEYS.USE_SSC] !== 'boolean') {
      DEBUG.error('Config Error: KEYS.USE_SSC must be boolean');
      return false;
    }

    if (hostname !== null && hostname !== '.com' && hostname !== '.co.uk') {
      DEBUG.error(
        'Config Error: SSC_HOSTNAME must be one of .com, .co.uk or null'
      );
      return false;
    }

    return true;
  }

  function getReportingProfile(profileId) {
    if (typeof profileId === 'string') {
      profileId = profileId.toUpperCase();
      if (Enums.ReportingProfiles.hasOwnProperty(profileId)) {
        return Enums.ReportingProfiles[profileId];
      }
    }

    return null;
  }

  function getCacheMode(mode) {
    if (typeof mode === 'string') {
      mode = mode.toUpperCase();
      if (Enums.EchoCacheMode.hasOwnProperty(mode)) {
        return Enums.EchoCacheMode[mode];
      }
    }

    return null;
  }

  // combine and validate the config with each
  // consumer
  function combineWithBaseConfig(userConfig) {

    var reportingProfile;
    var cacheMode;

    userConfig = userConfig || {};

    if (userConfig[KEYS.REPORTING_PROFILE]) {
      reportingProfile = getReportingProfile(userConfig[KEYS.REPORTING_PROFILE]);
    }

    if (!reportingProfile) {
      reportingProfile = getReportingProfile('PUBLIC_SERVICE');
    }

    if (userConfig[KEYS.ECHO_CACHE_MODE]) {
      cacheMode = getCacheMode(userConfig[KEYS.ECHO_CACHE_MODE]);
    }

    if (!cacheMode) {
      cacheMode = getCacheMode('OFFLINE');
    }

    var conf = Utils.extend(defaultConfig, true, reportingProfile, userConfig || {}, fixedConfig);
    if (
      !(validate(conf) && validateComScore(conf) &&
      validateSpring(conf) && validateSscConfig(conf))
    ) {
      return null;
    }

    return conf;
  }

  return {
    defaultConfig: defaultConfig,
    fixedConfig: fixedConfig,
    generate: combineWithBaseConfig
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/config/keys.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Keys for passing in config values. Available via Echo.ConfigKeys.
 * These valuse shoud be used as the keys in the config object passed
 * to the `EchoClient` constructor
 * @exports Echo/ConfigKeys
 * @example
 * //Example config for testing
 * var Enums = Echo.Enums,
 *     conf = {};
 *
 * // Add a "trace" so we can find the vents we generate
 * conf[Enums.ECHO.TRACE] = 'mytestabcd';
 * //Point the ComScore events at the ComScore test site (so we don't
 * //dilute the live data (also it's unsampled)
 * conf[Enums.COMSCORE.URL] = 'http://sa.bbc.co.uk/bbc/test/s';
 *
 * //...now we can pass conf into new EchoClient();
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  var exports = {
    /**
     * General Echo config
     * @property [ENABLED=true] Set to false to switch off eventing in Echo
     * @property [TRACE] For testing purposes you can set this to a unique ID
     * for your instance so events can be easily found later on
     * @property [DEVICE_ID] Use to set the device ID, this can also be set via
     * a method call on the EchoClient instance. This value will override the s1
     * cookie in DAx
     */
    ECHO_ENABLED: 'enabled',
    ECHO_AUTO_START: 'auto_start',
    ECHO_TRACE: 'trace',
    ECHO_DEVICE_ID: 'device_id',
    REPORTING_PROFILE: 'reporting_profile',
    ECHO_CACHE_MODE: 'cache_mode',
    DEBUG_MODE: 'disabled',

    // These are managed internally and should not be set manually
    ECHO_NAME: 'lib_name',
    ECHO_VERSION: 'lib_version',

    // SSC
    USE_SSC: 'use_ssc',
    SSC_HOSTNAME: 'ssc_hostname',

    /**
     * ComScore specific config
     * @property [ENABLED=`true`] Set to `false` to disable eventing to ComScore
     * @property [HOST='sa.bbc.co.uk']
     * The domain for ComScore events.
     * Results in a comscore endpoint of 'http://sa.bbc.co.uk/bbc/bbc/s' by
     * default
     */
    COMSCORE_ENABLED: 'comscore.enabled',
    COMSCORE_HOST: 'comscore.host',
    COMSCORE_SITE: 'comscore.site',

    COMSCORE_CUSTOMER_ID: 'comscore.customer_id',
    COMSCORE_PUBLISHER_SECRET: 'comscore.publisher_secret',

    /**
     * AT Internet specific config
     * @property [ENABLED=`true`] Set to `false` to disable eventing to AT Internet
     * @property [SITE=`596068`] The ATI site code
     * @property [LOG=`logw363`] The subdomain for the ATI URL
     * @property [DOMAIN=`ati-host.net`] The domain for the ATI URL
     * @property [PIXEL_PATH=`hit.xiti`] The ATI pixel path
     * @property [FORCE_HTTPS=`false`] Whether https is forced
     */
    ATI_ENABLED: 'ati.enabled',
    ATI_LOG: 'ati.log',
    ATI_SSL_LOG: 'ati.ssl_log',
    ATI_DOMAIN: 'ati.domain',
    ATI_PIXEL_PATH: 'ati.pixel_path',
    ATI_FORCE_HTTPS: 'ati.force_https',
    ATI_CACHE_MODE_ALWAYS: 'always',
    ATI_CACHE_MODE_REQUIRED: 'required',
    APP_CATEGORY: 'app_category',
    KEEPALIVE_DURATION: 'keepalive_duration',

    /**
    * Set the destination label for reporting
    */
    DESTINATION: 'bbc_destination',

    /**
    * Set the producer label for reporting
    */
    PRODUCER: 'bbc_producer',

    /**
     * <p>
     * The URL for the test service end point.
     * </p>
     */
    TEST_SERVICE_ENABLED: 'test.enabled',
    TEST_SERVICE_URL: 'test.url',

    /**
     * Spring-specific config (for BARB reporting).
     * There are no configurable values help
     */
    BARB_ENABLED: 'barb.enabled',
    BARB_SITE_CODE: 'barb.site_code',

    // Set to true to turn on debug statements in the spring lib
    BARB_DEBUG: 'barb.debug',

    /**
     * ESS
     */
    USE_ESS: 'use_ess',
    ESS_HOSTNAME: 'ess.hostname'
  };

  return exports;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/config/producers.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  var producers = {
    // Permitted values for setting the Producer Name
    ACCOUNT: 1,
    AFAAN_OROMOO: 2,
    AFRIQUE: 3,
    AMHARIC: 4,
    ARABIC: 5,
    AZERI: 6,
    BBC: 7,
    BBC_ALBA: 8,
    BBC_ARTS: 9,
    BBC_ASIAN_NETWORK: 10,
    BBC_FOOD: 11,
    BBC_FOUR: 12,
    BBC_HD: 13,
    BBC_MUSIC: 14,
    BBC_NEWS_CHANNEL: 15,
    BBC_ONE: 16,
    BBC_PARLIAMENT_CHANNEL: 17,
    BBC_RADIO: 18,
    BBC_RADIO_1: 19,
    BBC_RADIO_1XTRA: 20,
    BBC_RADIO_2: 21,
    BBC_RADIO_3: 22,
    BBC_RADIO_4: 23,
    BBC_RADIO_4_EXTRA: 24,
    BBC_RADIO_5_LIVE: 25,
    BBC_RADIO_6_MUSIC: 26,
    BBC_SCOTLAND: 120,
    BBC_SEND: 121,
    BBC_SHOP: 27,
    BBC_THREE: 28,
    BBC_TWO: 29,
    BBC_WORLD_NEWS: 30,
    BENGALI: 31,
    BITESIZE: 32,
    BRASIL: 33,
    BRITBOX: 34,
    BURMESE: 35,
    CBBC: 36,
    CBEEBIES: 37,
    CHINESE: 38,
    ENGLISH_REGIONS: 39,
    GAHUZA: 40,
    GATEWAY: 41,
    GNL_AUTOS: 42,
    GNL_CAPITAL: 43,
    GNL_CULTURE: 44,
    GNL_EARTH: 45,
    GNL_FUTURE: 46,
    GNL_HOMEPAGE: 47,
    GNL_STORYWORKS: 48,
    GNL_TRAVEL: 49,
    GUJARATI: 50,
    HAUSA: 51,
    HINDI: 52,
    IGBO: 53,
    INDONESIAN: 54,
    IPLAYER: 55,
    JAPANESE: 56,
    KOREAN: 57,
    KYRGYZ: 58,
    MARATHI: 59,
    MEDIA_ACTION: 60,
    MONITORING: 61,
    MUNDO: 62,
    NEPALI: 63,
    NEWS: 64,
    NEWSROUND: 65,
    NORTHERN_IRELAND: 66,
    OTHER: 67,
    OWN_IT: 118,
    PASHTO: 68,
    PERSIAN: 69,
    PIDGIN: 70,
    PROGRAMMES: 71,
    PS_HOMEPAGE: 72,
    PUNJABI: 73,
    REEL: 74,
    RUSSIAN: 75,
    S4C: 76,
    SCHOOL_RADIO: 77,
    SCHOOL_REPORT: 78,
    SCOTLAND: 79,
    SEARCH: 80,
    SERBIAN: 81,
    SINHALA: 82,
    SOMALI: 83,
    SOUNDS: 84,
    SPORT: 85,
    SWAHILI: 86,
    TAMIL: 87,
    TASTER: 88,
    TEACH: 119,
    TELUGU: 89,
    THAI: 90,
    TIGRINYA: 91,
    TURKISH: 92,
    UK_CHINA: 93,
    UKRAINIAN: 94,
    URDU: 95,
    UZBEK: 96,
    VIETNAMESE: 97,
    VOICE: 98,
    VOICE_FIRST_FORMATS: 99,
    WALES: 100,
    WEATHER: 101,
    WEATHER_WATCHERS: 102,
    WORLD_SERVICE_ENGLISH: 103,
    WORKLIFE: 104,
    WS_LEARNING_ENGLISH: 105,
    WS_PARTNERS_B2B: 106,
    YORUBA: 107,
    NEWS_ENGLISH_REGIONS: 108,
    SPORT_ENGLISH_REGIONS: 109,
    NEWS_SCOTLAND: 110,
    SPORT_SCOTLAND: 111,
    NEWS_WALES: 112,
    SPORT_WALES: 113,
    NEWS_NORTHERN_IRELAND: 114,
    SPORT_NORTHERN_IRELAND: 115,
    AUDIENCE_SERVICES: 116,
    WORLD_NEWS_PROGRAMMES: 117,

    // Returns the ID associated with a given producer code
    // (e.g. passing in 'WORLD_NEWS_PROGRAMMES' returns 117.
    getId: function(producerCode) {
      var id;
      if (producerCode) {
        id = this[producerCode.toUpperCase()];
      }

      return id;
    },

    // Returns a boolean indicating whether or not here is a Producer with the ID passed in
    // (e.g. passing in 117 returns true, 999 returns false).
    hasId: function(producerId) {
      var self = this;

      if (producerId) {
        producerId = producerId.toString();
      }

      var keys = Object.getOwnPropertyNames(this);

      function findProducer(key) {
        return self[key].toString() === producerId;
      }

      return Boolean(keys.filter(findProducer).length);
    }
  };

  return producers;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/ati/ati-delegate.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var SmartTag = __webpack_require__("./lib/ati/amd.smarttag-5.17.1.min.js");

  var OrbitVariables = __webpack_require__("./src/echo/delegate/ati/orbit-variables.js");

  var ATILabelKeys = __webpack_require__("./src/echo/delegate/ati/label-keys.js");
  var ConfigKeys = __webpack_require__("./src/echo/config/keys.js");
  var CustomEvent = __webpack_require__("./src/echo/delegate/ati/custom-event.js");
  var CustomVariables = __webpack_require__("./src/echo/delegate/ati/custom-variables.js");
  var MediaThemes = __webpack_require__("./src/echo/delegate/ati/media-themes.js");
  var MediaEvent = __webpack_require__("./src/echo/delegate/ati/media-event.js");
  var UserActionEvent = __webpack_require__("./src/echo/delegate/ati/user-action-event.js");

  var Destinations = __webpack_require__("./src/echo/config/destinations.js");
  var Producers = __webpack_require__("./src/echo/config/producers.js");

  var Utils = __webpack_require__("./src/echo/util/methods.js");
  var DEBUG = __webpack_require__("./src/echo/util/debug.js");
  var LabelCleanser = __webpack_require__("./src/echo/util/cleansing/label-cleanser.js");
  var Enums = __webpack_require__("./src/echo/enumerations.js");
  var Environment = __webpack_require__("./src/echo/environment.js");
  var CookieHelper = __webpack_require__("./src/echo/util/cookies.js");

  var INVALID_DATA_STRING = 'invalid-data';

  var AV_EVENT_TYPES = {
    INFO: 'info',
    MOVE: 'move',
    PAUSE: 'pause',
    PLAY: 'play',
    STOP: 'stop'
  };

  var BROADCAST_MODE = {
    CLIP: 'clip',
    LIVE: 'live'
  };

  var COLLECTION_DOMAIN = {
    testHost: 'ati-host.net',
    test: 'logw363.ati-host.net',
    testSSL: 'logws1363.ati-host.net',
    liveHost: 'api.bbc.co.uk',
    live: 'a1.api.bbc.co.uk',
    liveSSL: 'a1.api.bbc.co.uk'
  };

  var KEEPALIVE_DURATION_DEFAULT = 300000;
  var KEEPALIVE_COUNTERNAME = 'keepalive';

  //function to use when we are ignoring a function
  function dummy() {
    return -1;
  }

  function AtiDelegate(appName, appType, config, env) { // jshint ignore:line
    this._tag = null;
    this._broker = null;
    this._media = null;
    this._mediaLength = null;
    this._commonMediaParams = null;
    this._env = env;
    this._pageValues = {};
    this._customParams = {};
    this._appName = appName;
    this._appType = appType;
    this._config = config;
    this._bbc_hid = null;
    this._lastHitUrl = null;
    this._lastPlayHitUrl = null;
    this._lastPage = null;

    // set device id from config value
    this._deviceId = config[ConfigKeys.ECHO_DEVICE_ID] || undefined;

    // or from 3rd party cookie
    if (!this._deviceId) {
      this._deviceId = CookieHelper.getCookieValueByName('idrxvr');
    }

    // or from 1st party cookie
    if (!this._deviceId) {
      var cookieValue = CookieHelper.getCookieValueByName('atuserid');
      if (cookieValue) {
        this._deviceId = JSON.parse(decodeURIComponent(cookieValue)).val;
      }
    }

    if (config[ConfigKeys.ECHO_TRACE]) {
      this.setTraceId(config[ConfigKeys.ECHO_TRACE]);
    }

    this._isEnabled = (config && config[ConfigKeys.ECHO_ENABLED]);

    if (config && config[ConfigKeys.KEEPALIVE_DURATION]) {
      this._keepAliveDuration = Number(config[ConfigKeys.KEEPALIVE_DURATION]);
    } else {
      this._keepAliveDuration = KEEPALIVE_DURATION_DEFAULT;
    }
  }

  AtiDelegate.SmartTag = SmartTag;

  AtiDelegate.prototype._getHttpGetMethod = function() {
    return this._env.getHttpGet() || Environment._defaultHttpGet;
  };

  // Provide ability to use a custom HTTP GET method so that cross-domain clients can use another method instead (e.g. JSONP)
  AtiDelegate.prototype._setHTTPGetMethod = function(callback) {
    var httpGet = this._getHttpGetMethod();

    var self = this;

    // Override the ATI sendUrl method so that it uses the custom GET method. This implementation preserves the ATI event caching feature
    // whilst still allowing the custom GET method to be used
    self._tag.sendUrl = function(hit, tagCallback) {

      var makeTriggerCallback = function (trigger, hit, level) {
        return (function () {
          return function (evt) {

            self._tag.emit(trigger, {
              lvl: level,
              details: {
                hit: hit,
                event: evt
              }
            });

            if (tagCallback && typeof tagCallback === 'function') {
              tagCallback();
            }

            if (callback && typeof callback === 'function') {
              callback();
            }
          };
        })();
      };

      hit = self._addLengthToMediaHit(hit);

      var onSuccess = makeTriggerCallback('Tracker:Hit:Sent:Ok', hit, 'INFO');
      var onError = makeTriggerCallback('Tracker:Hit:Sent:Error', hit, 'ERROR');

      httpGet(hit, onSuccess, onError);
    };
  };

  AtiDelegate.prototype._getDestination = function(config, orbitVars) {
    var destination;

    if (config) {
      destination = Destinations.get(config[ConfigKeys.DESTINATION]);
    }

    if (!destination && orbitVars) {
      destination = Destinations.get(orbitVars.destination);
    }

    if (!destination) {
      // Log the fact that the default Destination is being used instead
      DEBUG.info('Destination not found, using default site');

      // Set to the default ATI site
      destination = Destinations.DEFAULT;
    }

    return destination;
  };

  AtiDelegate.prototype._getProducer = function(config, orbitVars, destination) {
    var producer;

    if (config) {
      producer = Producers.getId(config[ConfigKeys.PRODUCER]);
    }

    if (!producer && orbitVars) {
      producer = Producers.getId(orbitVars.producer);
    }

    if (!producer && destination) {
      DEBUG.info('Producer not found, using default producer');
      producer = destination.defaultProducer;
    }

    return producer;
  };

  AtiDelegate.prototype.setDestination = function(destination) {
    if (!destination) {
      // Use the default destination if the passed in destination code was not found or empty
      destination = Destinations.DEFAULT;

      // Log the fact that the default Destination is being used instead
      DEBUG.info('Destination not found, using default site instead');
    }

    if (destination) {
      this.setProducer(destination.defaultProducer);
      this._setDomain(destination.isTest);
      this._tag.setConfig(ATILabelKeys.LEVEL_1_SITE, destination.id);
    }
  };

  AtiDelegate.prototype.setProducer = function(producerId) {
    this.addLabel(ATILabelKeys.LEVEL_2_SITE, producerId);
  };

  AtiDelegate.prototype._getCookieDomain = function(window) {
    var cookieDomain;

    // Look for .bbc.com at the end of the hostname
    if (window && window.location && window.location.hostname && window.location.hostname.match(/.bbc.com$/)) {
      cookieDomain = 'bbc.com';
    } else {
      cookieDomain = 'bbc.co.uk';
    }

    return cookieDomain;
  };

  AtiDelegate.prototype._setDomain = function(isTest) {
    if (isTest) {
      this._tag.setConfig('domain', COLLECTION_DOMAIN.testHost);
      this._tag.setConfig('collectDomain', COLLECTION_DOMAIN.test);
      this._tag.setConfig('collectDomainSSL', COLLECTION_DOMAIN.testSSL);
    } else {
      this._tag.setConfig('domain', COLLECTION_DOMAIN.liveHost);
      this._tag.setConfig('collectDomain', COLLECTION_DOMAIN.live);
      this._tag.setConfig('collectDomainSSL', COLLECTION_DOMAIN.liveSSL);
    }
  };

  AtiDelegate.prototype._setSection = function(clonedLabels, eventValues, orbitVars) {
    if (!eventValues) {
      return;
    }

    if (clonedLabels && clonedLabels[ATILabelKeys.SECTION]) {
      // Use the label value for the section if it is provided
      eventValues[ATILabelKeys.CHAPTER_1] = LabelCleanser.cleanCustomVariable(clonedLabels[ATILabelKeys.SECTION]);

      if (eventValues.customObject) {
        delete eventValues.customObject[ATILabelKeys.SECTION];
      }

    } else if (orbitVars && orbitVars.section) {
      // Otherwise, default to the Orbit section (if there is one)
      eventValues[ATILabelKeys.CHAPTER_1] = LabelCleanser.cleanCustomVariable(orbitVars.section);
    }
  };

  AtiDelegate.prototype._createAtiOptions = function(config, destination) {
    var atiOpts;
    if (config) {
      atiOpts = {
        collectDomain: destination.isTest ? COLLECTION_DOMAIN.test : COLLECTION_DOMAIN.live,
        collectDomainSSL: destination.isTest ? COLLECTION_DOMAIN.testSSL : COLLECTION_DOMAIN.liveSSL,
        cookieDomain: this._getCookieDomain(window),
        domain: destination.isTest ? COLLECTION_DOMAIN.testHost : COLLECTION_DOMAIN.liveHost,
        pixelPath: config[ConfigKeys.ATI_PIXEL_PATH] || '/hit.xiti',
        secure: config[ConfigKeys.ATI_FORCE_HTTPS] === false ? false : true,
        site: destination.id
      };

      if (config[ConfigKeys.ATI_LOG]) {
        atiOpts.log = config[ConfigKeys.ATI_LOG];
      }

      if (config[ConfigKeys.ATI_SSL_LOG]) {
        atiOpts.logSSL = config[ConfigKeys.ATI_SSL_LOG];
      }

      if (config[ConfigKeys.ECHO_DEVICE_ID]) {
        atiOpts.ClientSideUserId = {
          clientSideMode: 'required',
          userIdCookieDuration: 397,
          userIdExpirationMode: 'fixed'
        };
      }

      // Configure the cache mode
      switch (config[ConfigKeys.ECHO_CACHE_MODE]) {
        case Enums.EchoCacheMode.ALL:
          atiOpts.Offline = {
            storageMode: ConfigKeys.ATI_CACHE_MODE_ALWAYS
          };
          break;
        default:
          atiOpts.Offline = {
            storageMode: ConfigKeys.ATI_CACHE_MODE_REQUIRED
          };
      }
    }

    return atiOpts;
  };

  // PRIVATE
  AtiDelegate.prototype._createTag = function(atiOpts) {
    return new AtiDelegate.SmartTag.Tracker.Tag(atiOpts);
  };

  AtiDelegate.prototype._initTag = function(orbitVars) {
    if (this._tag) {
      return;
    }

    var config = this._config;

    var destination = this._getDestination(config, orbitVars);
    var atiOpts = this._createAtiOptions(config, destination);

    this._tag = this._createTag(atiOpts);
    this._tag.onTrigger('Tracker:Hit:Sent:Ok', this._onHitSent.bind(this));

    if (this._debug) {
      this._tag.debug = function(info) {
        DEBUG.info('ATI DEBUG: ' + info);
      };
    }

    if (this._deviceId) {
      this._tag.clientSideUserId.set(this._deviceId);
    }

    if (this._bbc_hid) {
      this._tag.setParam(ATILabelKeys.HASHED_ID, this._bbc_hid, { hitType: ['all'], permanent: true });
    }

    var producer = this._getProducer(config, orbitVars, destination);
    this.setProducer(producer);

    if (config && config[ConfigKeys.APP_CATEGORY]) {
      this.addLabel(ATILabelKeys.APP_CATEGORY, config[ConfigKeys.APP_CATEGORY]);
    }

    // Provide custom GET method if specified
    this._setHTTPGetMethod();
  };

  AtiDelegate.prototype.start = function(orbitVars) {
    if (this._isEnabled && !this._hasStarted) {
      this._hasStarted = true;
      return this._initTag(orbitVars);
    }
  };

  AtiDelegate.prototype.enable = function() {
    if (!this._isEnabled) {
      this._isEnabled = true;
    }
  };

  AtiDelegate.prototype.disable = function() {
    if (this._isEnabled) {
      this._isEnabled = false;
      this.clearMedia();
    }
  };

  AtiDelegate.prototype._onHitSent = function(trigger, hit) {
    if (hit && hit.details && hit.details.hit) {
      this._setLastHitUrl(hit.details.hit);
    }
  };

  AtiDelegate.prototype._addLengthToMediaHit = function(hitUrl) {
    //If the hit is a rich media event, make sure we have the most recent media length (m1)
    if (hitUrl && typeof hitUrl === 'string' && hitUrl.match(/a\=(play|pause|stop|info|refresh|move)/)) {
      if (this._mediaLength) {
        var length = 'm1=' + Math.ceil(this._mediaLength / 1000);
        hitUrl = hitUrl.replace(/m1\=\d+/g, length);
      }
    }

    return hitUrl;
  };

  AtiDelegate.prototype._setLastHitUrl = function(hitUrl) {
    if (hitUrl && typeof hitUrl === 'string' && hitUrl.match(/a\=play/)) {
      this._lastPlayHitUrl = hitUrl;
    } else {
      this._lastHitUrl = hitUrl;
    }
  };

  AtiDelegate.prototype.setTraceId = function(id) {
    this.addLabel(ConfigKeys.ECHO_TRACE, id);
  };

  // Application State Methods
  AtiDelegate.prototype.addLabels = function(labels) {
    if (typeof labels === 'object') {
      if (labels.bbc_identity) {

        this.setBBCUser({
          bbc_hid: labels.bbc_hid,
          signed_in: labels.bbc_identity === '1'
        });

        delete labels.bbc_hid;
        delete labels.bbc_identity;
      }

      for (var label in labels) {
        if (labels.hasOwnProperty(label)) {
          this.addLabel(label, labels[label]);
        }
      }
    }
  };

  AtiDelegate.prototype.addLabel = function(label, value) {
    // if (this._isExcludedLabel(label) === true) {
    //   return;
    // }

    // add known labels to ATI page values, unknown to customObject
    if (label === ATILabelKeys.BBC_COUNTER_NAME || label === ATILabelKeys.LEVEL_2_SITE) {
      this._pageValues[label] = value;
    } else {
      this._customParams[label] = value;
    }
  };

  AtiDelegate.prototype.setLoggedInToBBCId = function(hid) {
    this.setBBCUser({
      bbc_hid: hid,
      signed_in: true
    });
  };

  AtiDelegate.prototype.setLoggedOutOfBBCId = function() {
    if (this._tag) {
      this._tag.delParam(ATILabelKeys.HASHED_ID);
    }

    this._bbc_hid = null;
  };

  AtiDelegate.prototype.setAppVersion = function (version) {
    if (version && this._tag) {
      this._tag.setParam(ATILabelKeys.APP_VERSION, '[' + version + ']', { hitType: ['all'], permanent: true });
    }
  };

  AtiDelegate.prototype.setBBCUser = function(userInfo) {
    if (userInfo.bbc_hid) {
      this._bbc_hid = userInfo.bbc_hid;
    } else if (userInfo.signed_in) {
      this._bbc_hid = 'unidentified-user';
    }

    if (this._tag && !this._customParams.bbc_id_wait) {
      this._tag.setParam(ATILabelKeys.HASHED_ID, this._bbc_hid, { hitType: ['all'], permanent: true });
    }
  };

  AtiDelegate.prototype.addManagedLabel = dummy;

  AtiDelegate.prototype.removeLabels = function(keysArray) {
    for (var i = 0, len = keysArray.length; i < len; i++) {
      this.removeLabel(keysArray[i]);
    }
  };

  AtiDelegate.prototype.removeLabel = function(label) {
    if (label === ATILabelKeys.BBC_COUNTER_NAME || label === ATILabelKeys.LEVEL_2_SITE) {
      delete this._pageValues[label];
    } else {
      delete this._customParams[label];
    }
  };

  AtiDelegate.prototype.setCounterName = function (counterName) {
    this._tag.page.set({
      name: counterName,
      level2: this._pageValues[ATILabelKeys.LEVEL_2_SITE]
    });
  };

  AtiDelegate.prototype.setContentLanguage = dummy;
  AtiDelegate.prototype.setCacheMode = dummy;

  AtiDelegate.prototype.clearCache = function() {
    this._tag.offline.remove();
  };

  AtiDelegate.prototype.flushCache = function() {
    this._tag.offline.send();
  };

  AtiDelegate.prototype.setESSEnabled = dummy;

  // Analytics Methods
  AtiDelegate.prototype.viewEvent = function(counterName, eventLabels) {
    if (!this._eventsEnabled()) {
      return;
    }

    // Set countername as a persistent label so it's included on all subsequent events.
    this.addLabel(ATILabelKeys.BBC_COUNTER_NAME, counterName);

    this.counterName = counterName;

    return OrbitVariables.get().then((function (orbitVars) {

      var clonedCustomParams =  Utils.clone(this._customParams);
      var customVars = CustomVariables.create(this._appName, this._appType, clonedCustomParams, eventLabels, orbitVars, document);

      // This sets custom/event labels to the customObject
      var clonedLabels = Utils.extend(
        eventLabels, true,
        ATILabelKeys.ECHO_EVENT_NAME, 'view'
      );

      var customObject = Utils.combineObjects(clonedCustomParams, clonedLabels, false);
      var eventValues = Utils.clone(this._pageValues);
      eventValues.customObject = customObject;
      if (customVars) {
        eventValues.customVars = customVars;
      }

      // Set the section
      this._setSection(clonedLabels, eventValues, orbitVars);

      this._tag.page.send(eventValues);
      this._lastPage = eventValues;

    }).bind(this));
  };

  AtiDelegate.prototype.errorEvent = dummy;

  AtiDelegate.prototype.userActionEvent = function(actionType, actionName, eventLabels) {
    if (!this._eventsEnabled()) {
      return;
    }

    // This sets custom/event labels to the customObject
    var clonedLabels = Utils.extend(
      eventLabels, true,
      ATILabelKeys.ECHO_EVENT_NAME, 'userAct'
    );

    var customObject = Utils.combineObjects(this._customParams, clonedLabels, false);
    var eventValues = Utils.clone(this._pageValues);

    if (eventValues) {
      eventValues.actionName = actionName;
      eventValues.actionType = actionType;
      eventValues.user = this._bbc_hid;
      eventValues[ATILabelKeys.BBC_COUNTER_NAME] = this.counterName;
      eventValues.customObject = customObject;

      var isBackgroundEvent = Boolean(eventValues.customObject[ATILabelKeys.IS_BACKGROUND]);

      if (isBackgroundEvent) {
        UserActionEvent.sendImpressionEvent(this._tag, eventValues);
      } else {
        UserActionEvent.sendClickEvent(this._tag, eventValues);
      }
    }
  };

  // Media Player attributes
  AtiDelegate.prototype.setPlayerName = function(mediaPlayerName) {
    this._mediaPlayerName = mediaPlayerName;
  };

  AtiDelegate.prototype.setPlayerVersion = function(mediaPlayerVersion) {
    this._mediaPlayerVersion = mediaPlayerVersion;
  };

  AtiDelegate.prototype.setPlayerIsPopped = dummy;
  AtiDelegate.prototype.setPlayerWindowState = dummy;
  AtiDelegate.prototype.setPlayerVolume = dummy;
  AtiDelegate.prototype.setPlayerIsSubtitled = dummy;

  /**
   * Sets the broker.
   *
   * This method should only be called by the EchoClient class to
   * ensure the interface is implemented.
   *
   * @param {Object} broker An object conforming to the broker interface.
   *
   * @return {AtiDelegate}
   */
  AtiDelegate.prototype.setBroker = function(broker) {
    this._broker = broker;
    return this;
  };

  // Media Attributes
  AtiDelegate.prototype.setMedia = function(media) {
    if (!this._eventsEnabled()) {
      return;
    }

    // If the media player name has previously provided and isn't set in this media object
    // then use the previously provided value
    if (this._mediaPlayerName && !media.getMediaPlayerName()) {
      media.setMediaPlayerName(this._mediaPlayerName);
    }

    // If the media player version has previously provided and isn't set in this media object
    // then use the previously provided value
    if (this._mediaPlayerVersion && !media.getMediaPlayerVersion()) {
      media.setMediaPlayerVersion(this._mediaPlayerVersion);
    }

    this.clearMedia();
    this._media = media;
    this.addMedia(this._media);
  };

  AtiDelegate.prototype.setMediaLength = function(length) {
    this._mediaLength = length;
    this._media.setLength(length);
  };

  AtiDelegate.prototype.setMediaBitrate = dummy;
  AtiDelegate.prototype.setMediaCodec = dummy;
  AtiDelegate.prototype.setMediaCDN = dummy;

  /**
   * Handles an updated clip from the LiveBroker
   *
   * @param {Media} newMedia
   * @param {Number} newPosition
   * @param {Number} oldPosition
   */
  AtiDelegate.prototype.liveMediaUpdate = function(newMedia, newPosition, oldPosition) {

    Utils.assert(
      typeof newPosition === 'number',
      'newPosition must be a number'
    );

    Utils.assert(
      typeof oldPosition === 'number',
      'oldPosition must be a number'
    );
    newMedia.setProducerById(this._media.getProducer());

    // stop playback
    this._sendMediaEvent(AV_EVENT_TYPES.STOP);
    this._media = newMedia;
    this.addMedia(this._media);

    this._sendMediaEvent(AV_EVENT_TYPES.PLAY);
  };

  AtiDelegate.prototype.liveEnrichmentFailed = dummy;

  AtiDelegate.prototype._getIdObjectValue = function(_idObject) {
    if (_idObject !== null && _idObject.isValueValid()) {
      return _idObject.getValue();
    }

    return INVALID_DATA_STRING;
  };

  AtiDelegate.prototype._getMostPrecedentIdObject = function() {
    var versionId = this._media.getVersionIdObject();
    var episodeId = this._media.getEpisodeIdObject();
    var clipId    = this._media.getClipIdObject();
    var vpId      = this._media.getVpIdObject();
    var serviceId = this._media.getServiceIdObject();

    if (versionId.isValueValid()) {
      return versionId;
    } else if (episodeId.isValueValid()) {
      return episodeId;
    } else if (clipId.isValueValid()) {
      return clipId;
    } else if (vpId.isValueValid()) {
      return vpId;
    } else if (serviceId.isValueValid()) {
      return serviceId;
    }

    return null;
  };

  AtiDelegate.prototype._eventsEnabled = function() {
    return this._isEnabled && this._hasStarted;
  };

  AtiDelegate.prototype.addMedia = function(media) {
    if (this._tag && this._tag.richMedia) {

      // Build the set of common media params that are sent with every event
      this._commonMediaParams = {
        playerId: media.getPlayerId(),
        mediaLabel: this._getIdObjectValue(this._getMostPrecedentIdObject()),
        mediaTheme1: MediaThemes.constructThemeOne(media),
        mediaTheme2: MediaThemes.constructThemeTwo(media),
        mediaTheme3: MediaThemes.constructThemeThree(media)
      };

      var richMediaParams = {
        mediaType: media.getAvType(),
        playerId: this._commonMediaParams.playerId,
        duration: (!media || !media.getLength()) ?
          0 : Math.ceil(media.getLength() / 1000),
        mediaLabel: this._commonMediaParams.mediaLabel,
        mediaTheme1: this._commonMediaParams.mediaTheme1,
        mediaTheme2: this._commonMediaParams.mediaTheme2,
        mediaTheme3: this._commonMediaParams.mediaTheme3,
        isEmbedded: media.isEmbedded(),
        broadcastMode: media.getMediaConsumptionMode() === BROADCAST_MODE.LIVE ? BROADCAST_MODE.LIVE : BROADCAST_MODE.CLIP,
        refreshDuration: {
          0: 10,
          1: 60
        }
      };
      if (media.getProducer()) {
        richMediaParams.mediaLevel2 = media.getProducer();
      }

      this._tag.richMedia.add(richMediaParams);
    }
  };

  // Media Events

  AtiDelegate.prototype._sendMediaEvent = function(action, additionalEventArgs) {
    if (this._commonMediaParams) {
      MediaEvent.sendEvent(this._tag, this._commonMediaParams, action, additionalEventArgs);
    }
  };

  AtiDelegate.prototype.avPlayEvent = function(position, eventLabels) { // jshint ignore:line
    if (!this._eventsEnabled() || this._media.getPlaying()) {
      // return if events disabled or already playing
      return;
    }

    if (this._media.getBuffering()) {
      this._sendMediaEvent(AV_EVENT_TYPES.INFO, {
        isBuffering: false
      });
    } else {
      this._sendMediaEvent(AV_EVENT_TYPES.PLAY);
      this._addKeepAliveEventSchedule();
    }
  };

  AtiDelegate.prototype._addKeepAliveEventSchedule = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    if (!this._keepAliveIntervalId) {
      this._keepAliveIntervalId = setInterval(
        this._sendKeepAliveEvent.bind(this),
        this._keepAliveDuration);
    }
  };

  AtiDelegate.prototype._removeKeepAliveEventSchedule = function() {
    if (this._keepAliveIntervalId) {
      clearInterval(this._keepAliveIntervalId);
      this._keepAliveIntervalId = undefined;
    }
  };

  AtiDelegate.prototype._sendKeepAliveEvent = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    var producerId =  (this._media && this._media.getProducer()) ? this._media.getProducer() : 0;

    var event = {
      name: KEEPALIVE_COUNTERNAME,
      level2: producerId
    };

    this._tag.page.send(event);

    //re-add the previous page so subsequent events are correctly attributed
    if (this._lastPage) {
      this._tag.page.set(this._lastPage);
    }
  };

  AtiDelegate.prototype.avPauseEvent = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    this._sendMediaEvent(AV_EVENT_TYPES.PAUSE);
  };

  AtiDelegate.prototype.avBufferEvent = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    this._sendMediaEvent(AV_EVENT_TYPES.INFO, {
      isBuffering: true
    });
  };

  AtiDelegate.prototype.avEndEvent = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    this._isMediaLoaded = false;

    this._removeKeepAliveEventSchedule();

    this._sendMediaEvent(AV_EVENT_TYPES.STOP);

    if (this.isValidMedia()) {
      this.clearMedia();
    }
  };

  AtiDelegate.prototype.avRewindEvent = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    this._sendMediaEvent(AV_EVENT_TYPES.MOVE);
  };

  AtiDelegate.prototype.avFastForwardEvent = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    this._sendMediaEvent(AV_EVENT_TYPES.MOVE);
  };

  AtiDelegate.prototype.avSeekEvent = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    this._sendMediaEvent(AV_EVENT_TYPES.MOVE);
  };

  AtiDelegate.prototype.avUserActionEvent = function(actionType, actionName, position, eventLabels) { // jshint ignore:line
    if (actionType === 'echo_hb' && actionName === 'echo_hb_5') {
      var hitUrl = this._addLengthToMediaHit(this._lastPlayHitUrl);
      CustomEvent.sendRefreshEvent(this._tag, this._getHttpGetMethod(), hitUrl);
    }
  };

  AtiDelegate.prototype.clearMedia = function() {
    if (this.isValidMedia()) {
      if (this._isMediaLoaded) {
        this.avEndEvent();
      }

      this._stream = null;
      this._media = null;
      this._commonMediaParams = null;
      this._tag.richMedia.removeAll();
    }
  };

  AtiDelegate.prototype.isValidMedia = function() {
    return this._media !== null && this._media.avType === Enums.AvType.VIDEO;
  };

  AtiDelegate.prototype.isValidLiveMedia = function() {
    return this.isValidMedia() && this._media.isLive();
  };

  /**
   * Gets the device ID that was used to report to ATI.
   *
   * @returns {String|null}
   */
  AtiDelegate.prototype.getDeviceId = function() {
    return this._deviceId;
  };

  AtiDelegate.prototype.requiresLabelCleansing = function() {
    return true;
  };

  return AtiDelegate;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/ati/custom-event.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  function CustomEvent() {}

  CustomEvent.sendRefreshEvent = function(tag, httpGet, lastPlayHitUrl) {
    if (lastPlayHitUrl) {
      var refreshHitUrl = lastPlayHitUrl;
      refreshHitUrl = refreshHitUrl.replace(/a\=play/g, 'a=refresh');
      refreshHitUrl = refreshHitUrl.replace(/ts\=[0-9\.]+/g, 'ts=' + new Date().getTime());
      refreshHitUrl = refreshHitUrl.replace(/(prich\=|s2rich\=).*?(&|$)/g, '');

      httpGet(refreshHitUrl, function() {
        tag.emit('Tracker:Hit:Sent:Ok', refreshHitUrl);
      }.bind(tag));
    }
  };

  return CustomEvent;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/ati/custom-variables.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var ATILabelKeys = __webpack_require__("./src/echo/delegate/ati/label-keys.js");
  var LabelCleanser = __webpack_require__("./src/echo/util/cleansing/label-cleanser.js");
  var LibraryInfo = __webpack_require__("./src/echo/util/library-info.js");

  var customVariables = {

    APP_NAME: undefined,
    APP_CATEGORY: undefined,

    // NB - These custom variable keys are defined as string values in label-key.js
    bbc_content_id: 1,
    bbc_app_type: 2,
    bbc_app_name: 3,
    language: 4,
    bbc_url: 5,
    bbc_referrer_url: 6,
    bbc_content_type: 7,
    bbc_library_version: 8,
    page_title: 9,

    custom_var_1: 11,
    custom_var_2: 12,
    custom_var_3: 13,
    custom_var_4: 14,
    custom_var_5: 15,
    custom_var_6: 16,
    custom_var_7: 17,
    custom_var_8: 18,
    custom_var_9: 19,
    custom_var_10: 20,

    // Creates a custom variables object
    create: function(appName, appType, customParams, eventLabels, orbitVars, document) {
      var customVars;
      this.APP_NAME = appName;

      if (customParams && customParams[ATILabelKeys.APP_CATEGORY]) {
        this.APP_CATEGORY = customParams[ATILabelKeys.APP_CATEGORY];
      } else {
        this.APP_CATEGORY = '';
      }

      // The _setCustomVariable method will lazily initialie the custom variables object and return the
      // complete set of custom variables added so far
      customVars = this._setCustomVariable(customVars, ATILabelKeys.APP_TYPE, appType);
      customVars = this._setCustomVariable(customVars, ATILabelKeys.APP_NAME, appName);

      customVars = this._setCustomVariable(customVars, ATILabelKeys.LIBRARY_VERSION, LibraryInfo.getLibraryName() + '-' + LibraryInfo.getLibraryVersion());

      if (document) {
        customVars = this._setDocumentCustomVariables(customVars, document);
      }

      if (orbitVars) {
        customVars = this._setOrbitCustomVariables(customVars, orbitVars);
      }

      this._applyLabels(customVars, customParams);
      this._applyLabels(customVars, eventLabels);

      return customVars;
    },

    // Initialises a custom variables object ready for custom variables to be added
    _initialise: function() {
      // Initialise the custom variables object
      return {
        site: {}
      };
    },

    // Iterates through the labels and adds recognised custom variables
    _applyLabels: function(customVars, labels) {
      if (labels) {
        var appName = this._getAppName(labels);
        if (labels[ATILabelKeys.APP_CATEGORY]) {
          customVars = this._setCustomVariable(customVars, ATILabelKeys.APP_NAME, appName);
          delete labels[ATILabelKeys.APP_CATEGORY];
        }

        Object.keys(labels).forEach(function(key) {
          if (this._isCustomVariable(key)) {
            if (key === ATILabelKeys.APP_NAME) {
              labels[key] = appName;
            }

            customVars = this._setCustomVariable(customVars, key, labels[key]);

            // Remove the label as it has been added to the custom variables
            delete labels[key];
          }
        }, this);
      }
    },

    // Fetch the app category and app name from the provided labels, app category prepended to app name
    _getAppName: function(labels) {

      var appName = '';
      if (labels[ATILabelKeys.APP_CATEGORY]) {
        appName = labels[ATILabelKeys.APP_CATEGORY] + '-';
      } else if (this.APP_CATEGORY) {
        appName = this.APP_CATEGORY + '-';
      }

      if (labels[ATILabelKeys.APP_NAME]) {
        appName += labels[ATILabelKeys.APP_NAME];
      } else {
        appName += this.APP_NAME;
      }

      return appName;
    },

    // Tests whether the label passed in represents the key of a custom variable
    _isCustomVariable: function(label) {
      return (this[label] !== undefined && this.hasOwnProperty(label) && typeof this[label] !== 'function');
    },

    // Lazily initialies the custom variables object and returns the custom variables object containing the complete
    // set of custom variables added so far
    _setCustomVariable: function(customVars, key, value) {
      if (value) {
        if (!customVars) {
          customVars = this._initialise();
        }

        var nonSensitive = LabelCleanser.removeSensitiveInfo(value);
        var cleansedValue = LabelCleanser.cleanCustomVariable(nonSensitive);

        var siteKey = this[key];
        customVars.site[siteKey] = '[' + encodeURIComponent(cleansedValue) + ']';
      }

      return customVars;
    },

    // Sets the document-based properties on the custom variables object
    _setDocumentCustomVariables: function(customVars, document) {
      if (document) {
        customVars = this._setCustomVariable(customVars, ATILabelKeys.URL, document.URL);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.REFERRER_URL, document.referrer);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.PAGE_TITLE, document.title);
      }

      return customVars;
    },

    // Sets the Orbit-based properties on the custom variables object (if available)
    _setOrbitCustomVariables: function(customVars, orbitVars) {
      if (orbitVars) {
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CONTENT_ID, orbitVars.contentId);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CONTENT_TYPE, orbitVars.contentType);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.LANGUAGE, orbitVars.language);
        customVars = this._setProductCustomVariables(customVars, orbitVars.additionalProperties);
      }

      return customVars;
    },

    _setProductCustomVariables: function(customVars, productVars) {
      if (productVars) {
        if (productVars.app_category) {
          customVars = this._setCustomVariable(customVars, ATILabelKeys.APP_NAME, this._getAppName(productVars));
        }

        if (productVars.content_language) {
          customVars = this._setCustomVariable(customVars, ATILabelKeys.LANGUAGE, productVars.content_language);
        }

        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_1, productVars.custom_var_1);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_2, productVars.custom_var_2);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_3, productVars.custom_var_3);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_4, productVars.custom_var_4);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_5, productVars.custom_var_5);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_6, productVars.custom_var_6);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_7, productVars.custom_var_7);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_8, productVars.custom_var_8);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_9, productVars.custom_var_9);
        customVars = this._setCustomVariable(customVars, ATILabelKeys.CUSTOM_VAR_10, productVars.custom_var_10);
      }

      return customVars;
    }
  };

  return customVariables;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/ati/label-keys.js":
/***/ (function(module, exports, __webpack_require__) {

!(module.exports = {
  BBC_COUNTER_NAME: 'name',
  ECHO_EVENT_NAME: 'echo_event',
  APP_VERSION: 'apvr',
  HASHED_ID: 'at',

  // Page variables
  LEVEL_1_SITE: 'site',
  LEVEL_2_SITE: 'level2',
  SECTION: 'section',
  CHAPTER_1: 'chapter1',

  // Custom site variables
  CONTENT_ID: 'bbc_content_id',
  APP_TYPE: 'bbc_app_type',
  APP_NAME: 'bbc_app_name',
  APP_CATEGORY: 'app_category',
  LANGUAGE: 'language',
  URL: 'bbc_url',
  REFERRER_URL: 'bbc_referrer_url',
  CONTENT_TYPE: 'bbc_content_type',
  LIBRARY_VERSION: 'bbc_library_version',
  PAGE_TITLE: 'page_title',
  CUSTOM_VAR_1: 'custom_var_1',
  CUSTOM_VAR_2: 'custom_var_2',
  CUSTOM_VAR_3: 'custom_var_3',
  CUSTOM_VAR_4: 'custom_var_4',
  CUSTOM_VAR_5: 'custom_var_5',
  CUSTOM_VAR_6: 'custom_var_6',
  CUSTOM_VAR_7: 'custom_var_7',
  CUSTOM_VAR_8: 'custom_var_8',
  CUSTOM_VAR_9: 'custom_var_9',
  CUSTOM_VAR_10: 'custom_var_10',

  MEDIA_PLAYER: 'bbc_media_player',

  LOGGED_IN: 'bbc_identity',
  BBC_HID: 'bbc_hid',

  MEDIA_BRAND: 'brand',
  MEDIA_SERIES: 'series',

  // Set to determine if the user action is an interaction or a background event
  IS_BACKGROUND: 'is_background',

  // Set the additional source details for the event
  SOURCE: 'source',

  // Set the container as the first level of the data hierarchy for reporting
  CONTAINER: 'container',

  // Set metadata to add additional detail to events for reporting
  METADATA: 'metadata',

  // Set personalisation for reporting
  PERSONALISATION: 'personalisation',

  // Set result of what you would like to track
  RESULT: 'result'
});


/***/ }),

/***/ "./src/echo/delegate/ati/media-event.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  function MediaEvent() {}

  MediaEvent.sendEvent = function(tag, commonMediaParams, action, additionalEventArgs) {
    if (commonMediaParams) {
      var event = {
        action: action,
        playerId: commonMediaParams.playerId,
        mediaLabel: commonMediaParams.mediaLabel,
        mediaTheme1: commonMediaParams.mediaTheme1,
        mediaTheme2: commonMediaParams.mediaTheme2,
        mediaTheme3: commonMediaParams.mediaTheme3
      };

      // Merge in any additional event arguments
      for (var key in additionalEventArgs) {
        if (additionalEventArgs.hasOwnProperty(key)) {
          event[key] = additionalEventArgs[key];
        }
      }

      tag.richMedia.send(event);
    }
  };

  return MediaEvent;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/ati/media-themes.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  var LibraryInfo = __webpack_require__("./src/echo/util/library-info.js");

  var SEPARATOR_CHAR = '~';

  var keys = {
    THEME_ONE: {
      BRAND: 'brand',
      SERIES: 'series',
      EPISODE: 'episode',
      CLIP: 'clip',
      NAME: 'name',
      TYPE: 'type',
      PLIST: 'pList'
    },
    THEME_TWO: {
      RETRIEVAL_TYPE: 'retType',
      INITATION_TYPE: 'init',
      ADS_ENABLED: 'adEna'
    },
    THEME_THREE: {
      PLAYER_NAME: 'mpN',
      PLAYER_VERSION: 'mpV',
      TRANSPORT_MODE: 'tMod',
      LIBRARY_NAME: 'mlN',
      LIBRARY_VERSION: 'mlV'
    }
  };

  function nullToStr(value) {
    return value ? value : '';
  }

  var mediaThemes = {

    buildTheme: function(key, value, omitSeparator) {
      return key + '=' + encodeURIComponent(nullToStr(value)) + (omitSeparator ? '' : SEPARATOR_CHAR);
    },

    constructThemeOne: function(media) {
      var themeOne = '';
      if (media) {
        themeOne = this.buildTheme(keys.THEME_ONE.BRAND, media.getBrandId());
        themeOne += this.buildTheme(keys.THEME_ONE.SERIES, media.getSeriesId());
        themeOne += this.buildTheme(keys.THEME_ONE.EPISODE, media.getEpisodeId());
        themeOne += this.buildTheme(keys.THEME_ONE.CLIP, media.getClipId());
        themeOne += this.buildTheme(keys.THEME_ONE.NAME, media.getName());
        themeOne += this.buildTheme(keys.THEME_ONE.TYPE, media.getType());
        if (media.isLive()) {
          themeOne += this.buildTheme(keys.THEME_ONE.PLIST, media.getServiceId(), true);
        } else {
          themeOne += this.buildTheme(keys.THEME_ONE.PLIST, media.getPlaylist(), true);
        }
      }

      return themeOne;
    },

    constructThemeTwo: function(media) {
      var themeTwo = '';
      if (media) {
        themeTwo = this.buildTheme(keys.THEME_TWO.RETRIEVAL_TYPE, media.getRetrievalType());
        themeTwo += this.buildTheme(keys.THEME_TWO.INITATION_TYPE, media.getInitiationType());
        themeTwo += this.buildTheme(keys.THEME_TWO.ADS_ENABLED, media.isAdsEnabled() ? '1' : '0', true);
      }

      return themeTwo;
    },

    constructThemeThree: function(media) {
      var themeThree = '';
      if (media) {
        themeThree = this.buildTheme(keys.THEME_THREE.PLAYER_NAME, media.getMediaPlayerName());
        themeThree += this.buildTheme(keys.THEME_THREE.PLAYER_VERSION, media.getMediaPlayerVersion());
        themeThree += this.buildTheme(keys.THEME_THREE.TRANSPORT_MODE, media.getTransportMode());
        themeThree += this.buildTheme(keys.THEME_THREE.LIBRARY_NAME, LibraryInfo.getLibraryName());
        themeThree += this.buildTheme(keys.THEME_THREE.LIBRARY_VERSION, LibraryInfo.getLibraryVersion(), true);
      }

      return themeThree;
    }
  };

  return mediaThemes;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/ati/orbit-variables.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  var Promise = __webpack_require__("./node_modules/es6-promise/dist/es6-promise.js").Promise;

  function OrbitVariables() {}

  OrbitVariables.get = function() {
    if (window && window.bbcpage) {

      // Allows the passed in method to be called, even though it might not exist on the window.bbcpage object
      // Call the method if it exists, otherwise return a resolved promise instead
      var wrapMethod = function(methodName) {
        return window.bbcpage[methodName] && typeof window.bbcpage[methodName] === 'function' ? window.bbcpage[methodName]() : Promise.resolve(null);
      };

      // Call all of these async methods in parallel
      return Promise.all([
        'getDestination',
        'getProducer',
        'getSection',
        'getContentId',
        'getContentType',
        'getLanguage',
        'getAdditionalProperties',
        'getName'
      ]

        // Handle the fact that the async mathods may not exist on the window.bbcpage object
        .map(function(methodName) {
          return wrapMethod(methodName);
        }))

        // Build the returned result object
        .then(function (orbitVars) {
          return {
            destination: orbitVars[0],
            producer: orbitVars[1],
            section: orbitVars[2],
            contentId: orbitVars[3],
            contentType: orbitVars[4],
            language: orbitVars[5],
            additionalProperties: orbitVars[6],
            pageName: orbitVars[7]
          };
        });
    } else {
      return Promise.resolve(undefined);
    }
  };

  return OrbitVariables;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/ati/user-action-event.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  var ATILabelKeys = __webpack_require__("./src/echo/delegate/ati/label-keys.js");
  var LabelCleanser = __webpack_require__("./src/echo/util/cleansing/label-cleanser.js");

  var SEPARATOR_CHAR = '~';

  var EventDefaults = {
    ACTION_NAME: 'unknown',
    CAMPAIGN_ID: 'Page',
    VARIANT: '',
    FORMAT: '',
    GENERAL_PLACEMENT: 'unknown',
    DETAILED_PLACEMENT: '',
    ADVERTISER_ID: '',
    URL: 'unknown'
  };

  var EventType = {
    CLICK: 'click',
    IMPRESSION: 'impression'
  };

  function UserActionEvent() {}

  UserActionEvent.sendClickEvent = function(tag, eventValues) {
    this._sendEvent(tag, eventValues, EventType.CLICK);
  };

  UserActionEvent.sendImpressionEvent = function(tag, eventValues) {
    this._sendEvent(tag, eventValues, EventType.IMPRESSION);
  };

  UserActionEvent._sendEvent = function(tag, eventValues, eventType) {
    if (!eventValues) {
      eventValues = {
        customObject: {}
      };
    }

    if (!eventValues.customObject) {
      eventValues.customObject = {};
    }

    var eventPayload = {
      creation:           this._formatEventValue(UserActionEvent._buildCreation(eventValues)),
      campaignId:         this._formatEventValue(eventValues.customObject[ATILabelKeys.CONTAINER] || EventDefaults.CAMPAIGN_ID),
      variant:            this._formatEventValue(eventValues.customObject[ATILabelKeys.PERSONALISATION] || EventDefaults.VARIANT),
      format:             this._formatEventValue(eventValues.customObject[ATILabelKeys.METADATA] || EventDefaults.FORMAT),
      generalPlacement:   this._formatEventValue(eventValues[ATILabelKeys.BBC_COUNTER_NAME] || EventDefaults.GENERAL_PLACEMENT),
      detailedPlacement:  this._formatEventValue(eventValues.user || EventDefaults.DETAILED_PLACEMENT),
      advertiserId:       this._formatEventValue(eventValues.customObject[ATILabelKeys.SOURCE] || EventDefaults.ADVERTISER_ID),
      url:                this._formatEventValue(eventValues.customObject[ATILabelKeys.RESULT] || EventDefaults.URL)
    };

    var event = {};
    if (eventType === EventType.CLICK) {
      event.click = eventPayload;
    } else {
      event.impression = eventPayload;
    }

    if (tag) {
      tag.publisher.send(event);
    }
  };

  UserActionEvent._buildCreation = function(eventValues) {
    var creation = (eventValues && eventValues.actionName) || EventDefaults.ACTION_NAME;
    if (eventValues && eventValues.actionType) {
      creation += (SEPARATOR_CHAR + eventValues.actionType);
    }

    return creation;
  };

  UserActionEvent._formatEventValue = function(value) {
    return '[' + LabelCleanser.cleanCustomVariable(value) + ']';
  };

  return UserActionEvent;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/comscore/app-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * This module is meant as a replacement for comScore's UDM tag
 * It extends the udm by:
 *  - adding the option to define the httpGet method
 *  - managing persistant labels
 */

/**
 * TODO
 * * Tests
 * * "comScore=" cookie
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./src/echo/delegate/comscore/label-keys.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(CSLabelKeys) {
  'use strict';

  function AppTag(customHttpGet, isApp, isScorecardDomain) {
    // init persistent labels
    this._persistantLabels = {};
    this._urlParams = '';
    this._cut = '';
    this._httpGet = customHttpGet;
    this._eventCount = 0;
    this._isApp = isApp;
    this._isScorecardDomain = (isScorecardDomain === true);
    this._hasStarted = false;
  }

  AppTag.IS_ECHO_APP_TAG = true;
  AppTag.URL_LIMIT = 2048;

  AppTag.prototype.setPixelURL = function(pixelURL) {
    this._url = this._makeBaseUrl(pixelURL);
  };

  AppTag.prototype.setCustomerC2 = function(customerC2) {
    this.setLabel(CSLabelKeys.COMSCORE_CUSTOMER, customerC2);
  };

  AppTag.prototype.start = function() {
    if (!this._hasStarted) {
      this._hasStarted = true;
    }
  };

  /** Public **/

  /**
   * Set single persistant label
   */
  AppTag.prototype.setLabel = function(key, val) {
    if (val === null) {
      this.removeLabel(key);
    } else {
      this._persistantLabels[key] = val;
    }
  };

  /**
   * Delete persistant Labels
   */
  AppTag.prototype.removeLabels = function(keys) {
    for (var i in keys) {
      if (typeof this._persistantLabels[keys[i]] !== 'undefined') {
        delete this._persistantLabels[keys[i]];
      }
    }
  };

  /**
   * Delete single persistant label
   */
  AppTag.prototype.removeLabel = function(label) {
    if (typeof this._persistantLabels[label] !== 'undefined') {
      delete this._persistantLabels[label];
    }
  };

  AppTag.prototype.view = function(eventLabels) {
    this.send('view', eventLabels);
  };

  AppTag.prototype.hidden = function(eventLabels) {
    this.send('hidden', eventLabels);
  };

  /**
   * Send an event,
   * type should be "hidden" or "view"
   */
  AppTag.prototype.send = function(type, eventLabels, callback) {
    var pLabels = this._persistantLabels;
    var allLabels = {};
    var finalUrl;
    var k;

    if (!this._hasStarted) {
      return;
    }

    this._eventCount++;

    for (k in pLabels) {
      allLabels[k] = pLabels[k];
    }

    for (k in eventLabels) {
      allLabels[k] = eventLabels[k];
    }

    /* jshint ignore:start */
    allLabels.ns_type = type;
    if (this._isApp) { // ECHO-56
      allLabels.ns_ap_ev = type;
      allLabels.ns_ap_ec = this._eventCount;
    }
    /* jshint ignore:end */

    // ECHO-56
    allLabels[this._isApp ? 'ns_ts' : 'ns__t'] = (+new Date());

    finalUrl = this._createUrl(allLabels);

    this._httpGet(finalUrl, callback);
  };

  /** Private **/

  /**
   * Turn kv pairs (in an object) into a url param string
   * if the string is to exceed limit, the params are
   * encoded and added against the "ns_cut=" key
   */
  AppTag.prototype._createUrl = function(params) {
    var encode = window.encodeURIComponent || escape; // jshint ignore:line
    var url = this._url;
    var k;

    this._urlParams = '';
    this._cut = '';

    // Name *must* be first param in url
    if (params.hasOwnProperty('name')) {
      this._addUrlParam('name', params.name);
    }

    for (k in params) {
      if (k !== 'name' && k !== 'ns_referrer') {
        this._addUrlParam(k, params[k]);
      }
    }

    // ns_referrer *must* be last param in url
    if (params.hasOwnProperty('ns_referrer')) {
      // Should us c9 when reporting to scorecard research MYSTATS-1427
      this._addUrlParam(
        this._isScorecardDomain ? CSLabelKeys.ENV_REFERRER : 'ns_referrer',
        params.ns_referrer // jshint ignore:line
      );
    }

    url += this._urlParams;

    if (this._cut.length) {
      url += 'ns_cut=' + encode(this._cut.replace(/&$/, ''));
    } else {
      url = url.replace(/&$/, '');
    }

    return url;
  };

  AppTag.prototype._addUrlParam = function(key, val) {
    var encode = window.encodeURIComponent || escape; // jshint ignore:line
    var kv = encode(key) + '=' + encode(val) + '&';
    var limit = AppTag.URL_LIMIT - 8;

    if ((this._url.length + this._urlParams.length + kv.length) < limit) {
      this._urlParams += kv;
    } else {
      this._cut += kv;
    }
  };

  /**
   * If the url does not have a trailing '?' or '&', add one
   */
  AppTag.prototype._makeBaseUrl = function(url) {
    var mark = -1;
    var last = url.charAt(url.length - 1);

    for (var i = 0, j = url.length; i < j; i++) {
      if (url.charAt(i) === '?') {
        mark = i;
      }
    }

    if (mark === -1) {
      url += '?';
    } else if (last !== '?' && last !== '&') {
      url += '&';
    }

    return url;
  };

  return AppTag;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/comscore/comscore-delegate.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var CSLabelKeys = __webpack_require__("./src/echo/delegate/comscore/label-keys.js");
  var ConfigKeys = __webpack_require__("./src/echo/config/keys.js");
  var PlayerState = __webpack_require__("./src/echo/delegate/comscore/player-state.js");
  var Environment = __webpack_require__("./src/echo/environment.js");
  var Utils = __webpack_require__("./src/echo/util/methods.js");
  var LabelValidator = __webpack_require__("./src/echo/util/cleansing/label-validator.js");
  var Enums = __webpack_require__("./src/echo/enumerations.js");
  var INVALID_DATA_STRING = 'invalid-data';
  var SSCHelper = __webpack_require__("./node_modules/ssc-js/src/ssc_helper.js");
  var CookieHelper = __webpack_require__("./src/echo/util/cookies.js");

  var DOMAIN_SA = 'sa.bbc.co.uk/bbc';
  var DOMAIN_SCR = 'scorecardresearch.com';

  var WEB_TYPES = [
    Enums.ApplicationType.WEB,
    Enums.ApplicationType.MOBILE_WEB,
    Enums.ApplicationType.RESPONSIVE
  ];

  // a list of labels that should not be sent to comscore/ssc
  var sscExcludedLabels = [
    CSLabelKeys.NO_COOKIES
  ];

  // special labels that are overridden by streamsense with each new asset (clip)
  var ASSET_LABELS = [
    'ns_st_pr', 'ns_st_sn', 'ns_st_en', 'ns_st_ep',
    'ns_st_ty', 'ns_st_ct', 'ns_st_st', 'ns_st_pu'
  ];

  /*
   * ------------------------------------------------------------------------
   * Private Helpers
   * ------------------------------------------------------------------------
   */

  function dummy() {
    return -1;
  }

  function _getScoreCardUrl(protocol) {
    var protocolPrefix = (protocol === 'https:') ? 's' : '';

    return protocol + '//' + protocolPrefix + 'b.' + DOMAIN_SCR + '/p?';
  }

  function _getSAUrl(protocol, csSite) {
    return protocol + '//' + DOMAIN_SA + '/' + csSite + '/s';
  }

  function _getCSEndpoint(comscoreHost, envProtocol, csSite) {
    if (comscoreHost === DOMAIN_SCR) {
      return _getScoreCardUrl(envProtocol);
    }

    return _getSAUrl(envProtocol, csSite);
  }

  function _validateClipLabel(_clipLabel) {
    var checkedLabel =
      (_clipLabel === null) ?
      INVALID_DATA_STRING :
      _clipLabel;

    return checkedLabel;
  }

  function _getIdObjectValue(_idObject) {
    if (_idObject !== null && _idObject.isValueValid()) {
      return _idObject.getValue();
    }

    return INVALID_DATA_STRING;
  }

  function _getMostPrecedentIdObject(media) {

    var consumptionMode = media.getMediaConsumptionMode();

    var serviceIdObject = media.getServiceIdObject();
    var versionIdObject = media.getVersionIdObject();
    var clipIdObject = media.getClipIdObject();
    var episodeIdObject = media.getEpisodeIdObject();
    var vpIdObject = media.getVpIdObject();
    var nonPipsContentIdObject = media.getNonPipsContentIdObject();

    // Order of if statement is important for this function
    // Service if consumption mode is live
    if (consumptionMode === Enums.MediaConsumptionMode.LIVE &&
        media.isEssEnriched() === true &&
        versionIdObject.isValueValid()
    ) {
      return versionIdObject;
    } else if (
      consumptionMode === Enums.MediaConsumptionMode.LIVE &&
      serviceIdObject.isValueValid()
    ) {
      return serviceIdObject;

      // Non Pips Content Id
    } else if (nonPipsContentIdObject.isValueValid()) {
      return nonPipsContentIdObject;

      // Version Id
    } else if (versionIdObject.isValueValid()) {
      return versionIdObject;

      // ClipId
    } else if (clipIdObject.isValueValid()) {
      return clipIdObject;

      // Episode Id
    } else if (episodeIdObject.isValueValid()) {
      return episodeIdObject;

      // vPid
    } else if (vpIdObject.isValueValid()) {
      return vpIdObject;

      // Service id is last if not live
    } else if (serviceIdObject.isValueValid()) {
      return serviceIdObject;
    }

    return null;
  }

  function _hasAmbiguousPrecedentId(media) {
    var precedentObject = _getMostPrecedentIdObject(media);
    var versionId = media.getVersionIdObject();
    var episodeId = media.getEpisodeIdObject();
    var clipId = media.getClipIdObject();

    if (precedentObject !== null) {
      var idType = precedentObject.getIdType();

      if (media.isLive()) {

        if (idType === Enums.MediaIdType.SERVICE || media.isEssEnriched()) {
          return false;
        }
      } else if (
        idType === Enums.MediaIdType.SERVICE &&
        !versionId.isValueSet() &&
        !episodeId.isValueSet() &&
        !clipId.isValueSet()
      ) {
        return true;
      } else if (idType !== Enums.MediaIdType.VPID) {
        return false;
      }
    }

    return true;
  }

  function _buildStreamSensePlaylist(media) {
    var playlist = {};
    var precedentObject = _getMostPrecedentIdObject(media);

    // Playlist labels:
    playlist[CSLabelKeys.PLAYLIST_NAME] =
      (precedentObject === null) ?
      INVALID_DATA_STRING :
      precedentObject.getValue();

    return playlist;
  }

  /**
   * Build a set of labels from a media object.
   *
   * @param {Media} media
   * @returns {Object}
   * @private
   */
  function _buildStreamSenseClip(media) {

    var clip = {};
    var precedentObject = _getMostPrecedentIdObject(media);

    var avType = _validateClipLabel(media.getAvType());
    var length = _validateClipLabel(media.getLength());
    var retrievalType = _validateClipLabel(media.getRetrievalType());

    // Clip labels:
    clip[CSLabelKeys.MEDIA_PART_NUMBER] = 1;
    clip[CSLabelKeys.MEDIA_TOTAL_PARTS] = 1;
    clip[CSLabelKeys.MEDIA_LENGTH] = length;
    clip[CSLabelKeys.MEDIA_MEDIUM] = avType;
    clip[CSLabelKeys.MEDIA_RETRIEVAL_TYPE] = retrievalType;

    var consumeMode = media.getMediaConsumptionMode();

    if (consumeMode === null) {
      clip[CSLabelKeys.MEDIA_STREAM_TYPE] = INVALID_DATA_STRING;
      clip[CSLabelKeys.MEDIA_LIVE_OR_ONDEMAND] = INVALID_DATA_STRING;
    } else if (!media.isLive() && avType === INVALID_DATA_STRING) {
      clip[CSLabelKeys.MEDIA_STREAM_TYPE] = INVALID_DATA_STRING;
    } else if (media.isOnDemand() || media.isDownload()) {
      //On Demand Media
      clip[CSLabelKeys.MEDIA_STREAM_TYPE] = media.isVideo() ? 'vod' : 'aod';
      clip[CSLabelKeys.MEDIA_LIVE_OR_ONDEMAND] = 'on-demand';
    } else {
      //Live media
      if (media.isEssEnriched()) {
        clip[CSLabelKeys.ESS_ENRICHED] = 'true';
      } else {
        clip[CSLabelKeys.ESS_ENRICHED] = 'false';
        clip[CSLabelKeys.MEDIA_IS_LIVE] = '1';
      }

      clip[CSLabelKeys.MEDIA_STREAM_TYPE] = 'live';
      clip[CSLabelKeys.MEDIA_LIVE_OR_ONDEMAND] = 'live';
    }

    var versionId = media.getVersionIdObject();
    var serviceId = media.getServiceIdObject();
    var clipId = media.getClipIdObject();
    var episodeId = media.getEpisodeIdObject();
    var nonPipsContentId = media.getNonPipsContentIdObject();

    clip[CSLabelKeys.MEDIA_PID] = _getIdObjectValue(precedentObject);

    // if consumption mode is live and ess has not enriched the media object
    // then we need to prefix the content id if we are not using the service id
    if (media.isLive() &&
        !media.getServiceId() &&
        media.isEssEnriched() === false &&
        (media.getVersionId() || media.getVpId())
    ) {
      var contentId = media.getVersionId() || media.getVpId();
      clip[CSLabelKeys.MEDIA_PID] = 'unverified_' + contentId;
    }

    if (nonPipsContentId.isValueSet()) {
      clip[CSLabelKeys.MEDIA_NON_PIPS_CONTENT_ID] = _getIdObjectValue(nonPipsContentId);
    }

    if (versionId.isValueSet()) {
      clip[CSLabelKeys.MEDIA_VERSION_ID] = _getIdObjectValue(versionId);
    }

    if (serviceId.isValueSet()) {
      clip[CSLabelKeys.MEDIA_SERVICE_ID] = _getIdObjectValue(serviceId);
    }

    if (clipId.isValueSet()) {
      clip[CSLabelKeys.MEDIA_CLIP_ID] = _getIdObjectValue(clipId);
    }

    if (episodeId.isValueSet()) {
      clip[CSLabelKeys.MEDIA_EPISODE_ID] = _getIdObjectValue(episodeId);
    }

    if (_hasAmbiguousPrecedentId(media)) {
      clip[CSLabelKeys.MEDIA_AMBIGUOUS_ID] = '1';
    }

    return clip;
  }

  /**
   * Comscore delegate.
   * @namespace ComScoreDelegate
   * @constructor
   *
   */
  function ComScoreDelegate(appName, appType, config, environment) {
    var csSite = config[ConfigKeys.COMSCORE_SITE];
    var endpoint;
    var offlineEndpoint;
    var derivedEndpoint;
    var isScorecardDomain;
    var csHost;
    var customGet;
    var sscHelper;
    var orbCookiesPolicy;
    var cookiePolicy;
    this._deviceId = null;
    this._broker = null;
    this.media = null;
    this.SSPlayerEvent = ComScoreDelegate.StreamSense.PlayerEvents;
    this.SSPlayerState = ComScoreDelegate.StreamSense.InternalStates;
    this._clips = [];
    this._isEnabled = true;
    this._hasStartedAppTag = false;
    this._hasCreatedAsset = false;
    this._storedAssetLabels = {};

    csHost = config[ConfigKeys.COMSCORE_HOST];
    csSite = config[ConfigKeys.COMSCORE_SITE];

    // SSC settings
    this.useSsc = (config[ConfigKeys.USE_SSC] === true) &&
      (csHost !== 'sa.bbc.co.uk');

    // set device id
    this._deviceId = config[ConfigKeys.ECHO_DEVICE_ID] || undefined;

    // if SSC is enabled and device id is not set, attempt to get it from
    // the cookie using the SSC helper.
    if (this.useSsc === true && !this._deviceId) {
      sscHelper = ComScoreDelegate._createSscHelper({
        forceBBCHost: config[ConfigKeys.SSC_HOSTNAME]
      });
      this._deviceId = sscHelper.getCookieId();
    }

    if (!Utils.containsValue(Enums.ApplicationType, appType)) {
      appType = INVALID_DATA_STRING;
    }

    endpoint = _getCSEndpoint(csHost, environment.getProtocol(), csSite);

    if (this.useSsc === true && !this._deviceId) {
      endpoint = sscHelper.getLocation().protocol +
        '//' + sscHelper.getSSCHostname();
    }

    // if using test service, save the endpoint then replace with test url
    if (config[ConfigKeys.TEST_SERVICE_ENABLED] === true) {
      derivedEndpoint = endpoint;
      endpoint = config[ConfigKeys.TEST_SERVICE_URL] + '/comscore';
      if (this._isUsingComscoreOTTLibrary) {
        offlineEndpoint = config[ConfigKeys.TEST_SERVICE_URL] + '/offline';
      }
    }

    // Are we an App (as ComScore defines it, which is, not a web page?
    // (ECHO-56)
    this._isApp = !Utils.containsValue(WEB_TYPES, appType);

    customGet = environment.getHttpGet();
    isScorecardDomain = (csHost === DOMAIN_SCR);

    // ternary operator ensures this is a binary value and not
    // undefined
    this._isUsingComscoreOTTLibrary =
      (ComScoreDelegate.AppTag && ComScoreDelegate.AppTag.ns_) ? true : false;

    if (this._isUsingComscoreOTTLibrary) {
      this.appTag = ComScoreDelegate.AppTag.ns_.comScore;
      this.appTag.setPlatformAPI(ComScoreDelegate.AppTag.ns_.PlatformAPIs.html5);
      if (customGet) {
        this.appTag.getPlatformAPI().httpGet = customGet;
      }

      this.appTag.setPublisherSecret(config[ConfigKeys.COMSCORE_PUBLISHER_SECRET]);
      this.appTag.setAppContext();
    } else {
      this.appTag = new ComScoreDelegate.AppTag(
        customGet || Environment._defaultHttpGet,
        this._isApp,
        isScorecardDomain
      );
    }

    this.ss = new ComScoreDelegate.StreamSense.StreamingAnalytics(
      { liveEndpointURL: endpoint, systemClockJumpDetection: true });
    if (customGet) {
      this.ss.getPlatformAPI().httpGet = customGet;
    }

    // set C1 and C2 if host is SCR
    if (isScorecardDomain) {
      this.appTag.setCustomerC2(config[ConfigKeys.COMSCORE_CUSTOMER_ID]);
      this.ss.setLabel(CSLabelKeys.COMSCORE_CUSTOMER, config[ConfigKeys.COMSCORE_CUSTOMER_ID]);
      this.addLabel(CSLabelKeys.COMSCORE_C1, '2');
      this.addLabel(CSLabelKeys.COMSCORE_SITE, csSite);
    }

    this.appTag.setPixelURL(endpoint);

    if (this._deviceId) {
      this.addLabel(CSLabelKeys.DEVICE_ID, this._deviceId);
    } else if (!this.useSsc && csHost === 'sa.bbc.co.uk') {
      this._deviceId = CookieHelper.getCookieValueByName('s1');
    }

    if (config[ConfigKeys.TEST_SERVICE_ENABLED] === true) {
      this.addLabel(CSLabelKeys.COMSCORE_ENDPOINT, derivedEndpoint);
      if (this._isUsingComscoreOTTLibrary) {
        this.appTag.setOfflineURL(offlineEndpoint);
      }
    }

    this.addLabel(CSLabelKeys.BBC_APPLICATION_NAME, appName);
    this.addLabel(CSLabelKeys.BBC_APPLICATION_TYPE, appType);
    this.setCacheMode(config[ConfigKeys.ECHO_CACHE_MODE]);
    this.addLabel(
      CSLabelKeys.BBC_MEASUREMENT_LIB_NAME,
      config[ConfigKeys.ECHO_NAME]
    );
    this.addLabel(
      CSLabelKeys.BBC_MEASUREMENT_LIB_VERSION,
      config[ConfigKeys.ECHO_VERSION]
    );

    // Labels to set for "Apps" only
    if (this._isApp) {

      if (this._isUsingComscoreOTTLibrary) {
        this.appTag.setAppName(appName);
      }  else {
        this.addLabel(CSLabelKeys.APP_NAME, appName);
      }

      this.addLabel(
        CSLabelKeys.APP_PLATFORM_NAME,
        environment.getPlatformName()
      );
      this.addLabel(
        CSLabelKeys.APP_PLATFORM_RUNTIME,
        environment.getPlatformRuntimeEnvironment()
      );
      this.addLabel(
        CSLabelKeys.APP_OS_VERSION,
        environment.getPlatformOSVersion()
      );
      this.addLabel(CSLabelKeys.APP_DEVICE_NAME, environment.getDeviceName());
      this.addLabel(CSLabelKeys.APP_SCREEN_RESOLUTION,
        environment.getScreenResolution());
      this.addLabel(CSLabelKeys.APP_LANGUAGE, environment.getLanguage());
    } else {
      this.addLabel(
        CSLabelKeys.WEB_SCREEN_RES,
        environment.getScreenResolution()
      );
    }

    this.addLabel(CSLabelKeys.ENV_CHAR_SET, environment.getCharSet());
    this.addLabel(CSLabelKeys.ENV_TITLE, environment.getTitle());
    this.addLabel(CSLabelKeys.ENV_REFERRER, environment.getReferrer());

    // hide file paths in c7
    if (environment.getURL().indexOf('file:', 0) === -1) {
      this.addLabel(CSLabelKeys.ENV_URL, environment.getURL());
    }

    if (config[ConfigKeys.ECHO_TRACE]) {
      this.setTraceId(config[ConfigKeys.ECHO_TRACE]);
    }

    orbCookiesPolicy = Environment.getOrbCookiesPolicy();
    if (orbCookiesPolicy) {
      cookiePolicy =
        'ad' + (orbCookiesPolicy.ads ? '1' : '0') +
        'ps' + (orbCookiesPolicy.personalisation ? '1' : '0') +
        'pf' + (orbCookiesPolicy.performance ? '1' : '0');

      this.addLabel(CSLabelKeys.COOKIE_POLICY, cookiePolicy);
    }

    // Default is to send invalid-data for site
    this.addLabel(Enums.ManagedLabels.BBC_SITE, INVALID_DATA_STRING);

    this._mediaIsLive = null;

    if (config && config[ConfigKeys.ECHO_ENABLED] === false) {
      this._isEnabled = false;
    } else {
      this._isEnabled = true;
    }
  }

  ComScoreDelegate.prototype.start = function() {
    if (this._isEnabled && !this._hasStartedAppTag) {
      this.appTag.start();
      this._hasStartedAppTag = true;
    }
  };

  ComScoreDelegate.prototype.enable = function() {
    if (!this._isEnabled) {
      this._isEnabled = true;
    }
  };

  ComScoreDelegate.prototype.disable = function() {
    if (this._isEnabled) {
      this.clearMedia();
      this._isEnabled = false;
    }
  };

  /**
   * Gets the device ID that was used to report to ComScore.
   *
   * @returns {String|null}
   */
  ComScoreDelegate.prototype.getDeviceId = function() {
    return this._deviceId;
  };

  /**
   * @param {Media} media
   * @return {Object}
   * @private
   */
  ComScoreDelegate.prototype._buildStreamSenseClip = function(media) {

    var i;
    var clip = _buildStreamSenseClip(media);
    var clipPid = clip[CSLabelKeys.MEDIA_PID];

    for (i = 0; i < this._clips.length; i++) {
      if (this._clips[i][CSLabelKeys.MEDIA_PID] === clipPid) {
        return this._clips[i];
      }
    }

    clip[CSLabelKeys.MEDIA_CLIP_NUMBER] = this._clips.length + 1;
    this._clips.push(clip);

    return clip;
  };

  ComScoreDelegate.prototype.setTraceId = function(id) {
    this.addLabel(ConfigKeys.ECHO_TRACE, id);
  };

  ComScoreDelegate._createSscHelper = function(options) {
    return new SSCHelper(options || {});
  };

  ComScoreDelegate.StreamSense = __webpack_require__("./lib/comscore/amd.streamsense-6.2.3.180328.min.js");
  ComScoreDelegate.AppTag = __webpack_require__("./src/echo/delegate/comscore/app-tag.js");

  /*
   * ------------------------------------------------------------------------
   * Application State Methods
   * ------------------------------------------------------------------------
   */

  // produces a string out of a list of labels that is easy to pass a regex
  // pattern over e.g. given the labels ['foo', 'bar'] the string will be
  // <foo><bar>
  var sscExcludedString = '<' + sscExcludedLabels.join('><') + '>';

  /**
   * Check to see if a label should be excluded from being set. This will check
   * for labels that should not be sent to comscore when ssc is enabled.
   *
   * @param {String} label
   * @return {Boolean}
   */
  ComScoreDelegate.prototype._isExcludedLabel = function(label) {
    if (this.useSsc === true) {
      return !!sscExcludedString.match(new RegExp('<' + label + '>'));
    }

    return false;
  };

  /**
   * Set multiple persistent labels.
   *
   * @param {Object} labels
   */
  ComScoreDelegate.prototype.addLabels = function(labels) {

    if (typeof labels === 'object') {
      for (var label in labels) {
        if (labels.hasOwnProperty(label)) {
          this.addLabel(label, labels[label]);
        }
      }
    }

  };

  /**
   * Set a persistent label
   *
   * @param {String} label
   * @param {*} value
   */
  ComScoreDelegate.prototype.addLabel = function(label, value) {

    if (this._isExcludedLabel(label) === true) {
      return;
    }

    this.appTag.setLabel(label, value);

    // is this label an asset label?
    if (ASSET_LABELS.indexOf(label) > -1) {
      // set label on streamsense asset if it's created, or save for later
      if (this._hasCreatedAsset) {
        this.ss.getPlaybackSession().getAsset().setLabel(label, value);
      } else {
        this._storedAssetLabels[label] = value;
      }
    } else {
      // not an asset label so set it in the usual way
      this.ss.setLabel(label, value);
    }

  };

  ComScoreDelegate.prototype.addManagedLabel = function(label, value) {
    var labelIsValid = LabelValidator.isValidManagedLabel(label, value);
    var valueToUse = labelIsValid ? value : INVALID_DATA_STRING;

    for (var key in Enums.ManagedLabels) {
      if (Enums.ManagedLabels[key] === label) {
        this.addLabel(label, valueToUse);
      }
    }
  };

  ComScoreDelegate.prototype.removeLabels = function(keysArray) {
    for (var i = 0, len = keysArray.length; i < len; i++) {
      this.removeLabel(keysArray[i]);
    }
  };

  ComScoreDelegate.prototype.removeLabel = function(label) {
    this.appTag.setLabel(label, null);

    // is this label an asset label?
    if (ASSET_LABELS.indexOf(label) > -1) {
      // set label on streamsense asset if it's created, or save for later
      if (this._hasCreatedAsset) {
        this.ss.getPlaybackSession().getAsset().setLabel(label, null);
      } else {
        delete this._storedAssetLabels[label];
      }
    } else {
      // not an asset label so set it in the usual way
      this.ss.setLabel(label, null);
    }

  };

  ComScoreDelegate.prototype.setLoggedInToBBCId = function(hid) {
    this.addLabel(CSLabelKeys.BBC_ID_LOGGED_IN, '1');
    if (hid && hid.length > 0) {
      this.addManagedLabel(Enums.ManagedLabels.BBC_HASHED_ID, hid);
    } else {
      this.removeLabel(Enums.ManagedLabels.BBC_HASHED_ID);
    }
  };

  ComScoreDelegate.prototype.setLoggedOutOfBBCId = function() {
    this.removeLabels([
      CSLabelKeys.BBC_ID_LOGGED_IN,
      Enums.ManagedLabels.BBC_HASHED_ID
    ]);
  };

  ComScoreDelegate.prototype.setAppVersion = function (version) {
    if (typeof this.appTag.setAppVersion === 'function') {
      this.appTag.setAppVersion(version);
    } else if (version && this._isApp) {
      this.addLabel(CSLabelKeys.APP_VERSION, version.toString());
    } else if (version) {
      this.addLabel(CSLabelKeys.BBC_APPLICATION_VERSION, version.toString());
    }
  };

  ComScoreDelegate.prototype.setCounterName = function(name) {
    if (!this._isEnabled) {
      return;
    }

    this.addLabel(CSLabelKeys.BBC_COUNTER_NAME, name);
  };

  ComScoreDelegate.prototype.setDestination = function(destinationId) {
    this.addLabel(CSLabelKeys.DESTINATION, destinationId);
  };

  ComScoreDelegate.prototype.setProducer = function(producerId) {
    this.addLabel(CSLabelKeys.PRODUCER, producerId);
  };

  ComScoreDelegate.prototype.setContentLanguage = function(language) {
    this.addLabel(CSLabelKeys.BBC_LANGUAGE, language);
  };

  ComScoreDelegate.prototype.setCacheMode = function(mode) {
    if (!this._isUsingComscoreOTTLibrary || mode === this._cacheMode) {
      return;
    }

    switch (mode) {
      case Enums.EchoCacheMode.ALL:
        this.appTag.allowLiveTransmission(this.appTag.TransmissionMode.NEVER);
        this.appTag.allowOfflineTransmission(this.appTag.TransmissionMode.NEVER);
        break;
      case Enums.EchoCacheMode.OFFLINE:
        this.appTag.allowLiveTransmission(this.appTag.TransmissionMode.DEFAULT);
        this.appTag.allowOfflineTransmission(this.appTag.TransmissionMode.DEFAULT);
        break;
    }

    this._cacheMode = mode;
  };

  ComScoreDelegate.prototype.flushCache = function() {
    if (!this._isUsingComscoreOTTLibrary) {
      return;
    }

    this.appTag.flushCache();
  };

  ComScoreDelegate.prototype.clearCache = dummy;

  /*
   * ------------------------------------------------------------------------
   * Basic Analytics Methods
   * ------------------------------------------------------------------------
   */

  ComScoreDelegate.prototype.viewEvent = function(counterName, eventLabels) {
    if (!this._eventsEnabled()) {
      return;
    }

    /*
     * Set countername as a persistent label so it's included on all
     * subsequent events.
     */
    this.addLabel(CSLabelKeys.BBC_COUNTER_NAME, counterName);
    var clonedLabels = Utils.extend(
      eventLabels, true,
      CSLabelKeys.ECHO_EVENT_NAME, 'view'
    );

    clonedLabels.name = counterName;
    this.appTag.view(clonedLabels);
  };

  ComScoreDelegate.prototype.errorEvent = dummy;

  ComScoreDelegate.prototype.userActionEvent =
  function(actionType, actionName, eventLabels) {
    if (!this._eventsEnabled()) {
      return;
    }

    var clonedLabels = Utils.extend(
      eventLabels, true,
      CSLabelKeys.USER_ACTION_TYPE, actionType,
      CSLabelKeys.USER_ACTION_NAME, actionName,
      CSLabelKeys.ECHO_EVENT_NAME, 'userAct'
    );

    this.appTag.hidden(clonedLabels);
  };

  /*
   * ------------------------------------------------------------------------
   * Media Player Attributes
   * ------------------------------------------------------------------------
   */

  /**
   * Media player information converted to Application i.e. Persistent labels
   * on Stream Sense. Included in all measurement events sent
   */
  ComScoreDelegate.prototype.setPlayerName = function(name) {
    this.addLabel(CSLabelKeys.PLAYER_NAME, name);
  };

  ComScoreDelegate.prototype.setPlayerVersion = function(version) {
    this.addLabel(CSLabelKeys.PLAYER_VERSION, version);
  };

  ComScoreDelegate.prototype.setPlayerIsPopped = function(isPopped) {
    this.ss.setLabel(CSLabelKeys.PLAYER_POPPED, isPopped ? 1 : 0);
  };

  ComScoreDelegate.prototype.setPlayerWindowState = function(windowState) {
    this.ss.setLabel(CSLabelKeys.PLAYER_WINDOW_STATE, windowState);
  };

  ComScoreDelegate.prototype.setPlayerVolume = function(volume) {
    this.ss.setLabel(CSLabelKeys.PLAYER_VOLUME, volume);
  };

  ComScoreDelegate.prototype.setPlayerIsSubtitled = function(isSubtitled) {
    this.ss.setLabel(CSLabelKeys.PLAYER_SUBTITLED, isSubtitled ? 1 : 0);
  };

  /**
   * Sets the broker.
   *
   * This method should only be called by the EchoClient class to
   * ensure the interface is implemented.
   *
   * @param {Object} broker An object conforming to the broker interface.
   *
   * @return {ComScoreDelegate}
   */
  ComScoreDelegate.prototype.setBroker = function(broker) {
    this._broker = broker;
    return this;
  };

  /*
   * ------------------------------------------------------------------------
   * Media Attributes
   * ------------------------------------------------------------------------
   */
  ComScoreDelegate.prototype.setMedia = function(media) {
    if (!this._eventsEnabled()) {
      return;
    }

    this.clearMedia();

    if (media) {
      this.media = media;
      var clip = this._buildStreamSenseClip(this.media);
      var playList = _buildStreamSensePlaylist(this.media);
      this._mediaIsLive = media.isOnDemand() ? false : true;
      this.ss.createPlaybackSession(playList);

      // Put the clip on StreamSense
      if (this.ss.getPlaybackSession()) {
        this.ss.getPlaybackSession().setAsset(clip);
        this._hasCreatedAsset = true;

        // add previously stored labels
        this.ss.getPlaybackSession().getAsset().setLabels(this._storedAssetLabels);
      }
    }

  };

  /**
   * Handles an updated clip from the LiveBroker
   *
   * @param {Media} newMedia
   * @param {Number} newPosition
   * @param {Number} oldPosition
   */
  ComScoreDelegate.prototype.liveMediaUpdate = function(
    newMedia,
    newPosition,
    oldPosition
  ) {

    Utils.assert(
      typeof newPosition === 'number',
      'newPosition must be a number'
    );

    Utils.assert(
      typeof oldPosition === 'number',
      'oldPosition must be a number'
    );

    this.media = newMedia;

    var clip = this._buildStreamSenseClip(newMedia);

    // stop playback
    this.ss.notifyEnd(oldPosition);
    this.ss.getPlaybackSession().setAsset(clip);

    // add previously stored labels
    this.ss.getPlaybackSession().getAsset().setLabels(this._storedAssetLabels);
    this.ss.notifyPlay(newPosition);
  };

  ComScoreDelegate.prototype.liveEnrichmentFailed = dummy;

  /**
   * Update the media length of the clip and playlist.
   *
   * @param {Number} length
   */
  ComScoreDelegate.prototype.setMediaLength = function(length) {
    if (!this._eventsEnabled()) {
      return;
    }

    if (this.media == null) {
      return;
    }

    if (!length || length < 0) {
      length = 0;
    }

    this.ss.getPlaybackSession().getAsset().setLabel(CSLabelKeys.MEDIA_LENGTH, length);
  };

  /*
   * ------------------------------------------------------------------------
   * Media Events
   * ------------------------------------------------------------------------
   */
  /*
   * Uses the addLabel method to add to both av and non-av events
   */
  ComScoreDelegate.prototype.avPlayEvent = function(position, eventLabels) { // jshint ignore:line
    if (!this._eventsEnabled()) {
      return;
    }

    var clonedLabels = Utils.extend(
      eventLabels, true,
      CSLabelKeys.ECHO_EVENT_NAME, 'avPlay'
    );

    if (this.media.isLive() && this.media.isEssEnriched() === false) {
      position = 0;
    }

    this.ss.notifyPlay(clonedLabels, position);
  };

  ComScoreDelegate.prototype.avPauseEvent = function(position, eventLabels) {
    if (!this._eventsEnabled()) {
      return;
    }

    var clonedLabels = Utils.extend(
      eventLabels, true,
      CSLabelKeys.ECHO_EVENT_NAME, 'avPause'
    );
    var isLive = this.media.isLive();

    if (isLive && this.media.isEssEnriched() === false) {
      position = 0;
    } else if (!isLive && this._broker && position === 0) {
      position = this._broker.getCurrentIntervalMaxPosition();
    }

    this.ss.notifyPause(clonedLabels, position);
  };

  ComScoreDelegate.prototype.avBufferEvent = function(position, eventLabels) {// jshint ignore:line
    if (!this._eventsEnabled()) {
      return;
    }

    if (this.media.isLive() && this.media.isEssEnriched() === false) {
      position = 0;
    }

    this.ss.notifyBufferStart(position);
  };

  ComScoreDelegate.prototype.avEndEvent = function(position, eventLabels) {
    if (!this._eventsEnabled()) {
      return;
    }

    var clonedLabels = Utils.extend(
      eventLabels, true,
      CSLabelKeys.ECHO_EVENT_NAME, 'avEnd',
      CSLabelKeys.PLAYLIST_END, 1
    );

    if (this.media.isLive() && this.media.isEssEnriched() === false) {
      position = 0;
    }

    this.ss.notifyEnd(position, clonedLabels);

    this.clearMedia();
  };

  ComScoreDelegate.prototype.avRewindEvent = function(
    position, rate, eventLabels
  ) {
    if (!this._eventsEnabled()) {
      return;
    }

    /*
     * We assume rewind, ff and seek are always user interaction triggered.
     * See Pg 18 StreamSense docs.
     */
    var clonedLabels = Utils.extend(
      eventLabels, true,
      CSLabelKeys.ECHO_EVENT_NAME, 'avRW',
      CSLabelKeys.EVENT_TRIGGERED_BY_USER, 'rewind',
      CSLabelKeys.REWIND_FF_RATE, rate
    );

    if (this.media.isLive() && this.media.isEssEnriched() === false) {
      position = 0;
    }

    // Comscore require a pause when the content stops playing
    this.ss.notifyPause(position, clonedLabels);
  };

  ComScoreDelegate.prototype.avFastForwardEvent = function(
    position, rate, eventLabels
  ) {
    if (!this._eventsEnabled()) {
      return;
    }

    /*
     * We assume rewind, ff and seek are always user interaction triggered.
     * See Pg 18 StreamSense docs.
     */
    var clonedLabels = Utils.extend(
      eventLabels, true,
      CSLabelKeys.ECHO_EVENT_NAME, 'avFF',
      CSLabelKeys.EVENT_TRIGGERED_BY_USER, 'fastforward',
      CSLabelKeys.REWIND_FF_RATE, rate
    );

    if (this.media.isLive() && this.media.isEssEnriched() === false) {
      position = 0;
    }

    // Comscore require a pause when the content stops playing
    this.ss.notifyPause(clonedLabels, position);
  };

  ComScoreDelegate.prototype.avSeekEvent = function(position, eventLabels) {
    if (!this._eventsEnabled()) {
      return;
    }

    /*
     * We assume rewind, ff and seek are always user interaction triggered.
     * See Pg 18 StreamSense docs.
     */
    var clonedLabels = Utils.extend(
      eventLabels, true,
      CSLabelKeys.ECHO_EVENT_NAME, 'avSeek',
      CSLabelKeys.EVENT_TRIGGERED_BY_USER, 'seek'
    );

    if (this.media.isLive() && this.media.isEssEnriched() === false) {
      position = 0;
    }

    // Comscore require a pause when the content stops playing
    this.ss.notifyPause(position, clonedLabels);
  };

  ComScoreDelegate.prototype.avUserActionEvent = function(
      actionType, actionName, position, eventLabels
    ) {
    if (!this._eventsEnabled()) {
      return;
    }

    var clonedLabels = Utils.extend(
      eventLabels, true,
      CSLabelKeys.ECHO_EVENT_NAME, 'avUserAct',
      CSLabelKeys.STREAMSENSE_CUSTOM_EVENT_TYPE, actionType,
      CSLabelKeys.USER_ACTION_TYPE, actionType,
      CSLabelKeys.USER_ACTION_NAME, actionName
    );

    if (this.media.isLive() && this.media.isEssEnriched() === false) {
      position = 0;
    }

    this.ss.notifyCustomEvent(position, clonedLabels);
  };

  ComScoreDelegate.prototype.clearMedia = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    this._clips = [];
    this._hasCreatedAsset = false;

    if (this.media !== null) {
      // If the stream is still active we need to send an avEndEvent
      // Debug mode should warn this
      if (this.ss.getState() === PlayerState.PLAYING) {
        this.avEndEvent(0);
      }

      this.media = null;
    }
  };

  ComScoreDelegate.prototype.requiresLabelCleansing = function() {
    return true;
  };

  ComScoreDelegate.prototype._eventsEnabled = function() {
    return this._isEnabled && this._hasStartedAppTag;
  };

  return ComScoreDelegate;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/comscore/label-keys.js":
/***/ (function(module, exports, __webpack_require__) {

!(module.exports = {
  BBC_APPLICATION_NAME: 'app_name', // Legacy BBC label
  BBC_APPLICATION_TYPE: 'app_type', // Legacy BBC label
  BBC_APPLICATION_VERSION: 'app_version', // Legacy BBC label
  BBC_COUNTER_NAME: 'name', // Legacy BBC label
  DESTINATION: 'bbc_destination', // Level 1 site
  PRODUCER: 'bbc_producer',  // Level 2 site
  BBC_LANGUAGE: 'language', //ECHO-151
  DEVICE_ID: 'ns_alias', // Overrides using s1
  COMSCORE_C1: 'c1',
  COMSCORE_C7: 'c7',

  BBC_MEASUREMENT_LIB_NAME: 'ml_name',
  BBC_MEASUREMENT_LIB_VERSION: 'ml_version',
  ECHO_TRACE: 'trace',
  ECHO_EVENT_NAME: 'echo_event',

  // Event was triggered by user interaction
  EVENT_TRIGGERED_BY_USER: 'ns_st_ui', //ComScore label

  // See https://confluence.dev.bbc.co.uk/display/iStats/Measurement+Events
  STREAMSENSE_CUSTOM_EVENT_TYPE: 'ns_st_ev', //ComScore label
  USER_ACTION_TYPE: 'action_type', // Legacy BBC label
  USER_ACTION_NAME: 'action_name', // Legacy BBC label
  PLAYLIST_END: 'ns_st_pe', //ComScore label

  REWIND_FF_RATE: 'ffrw_rate', // BBC label - made up by Echo team

  //Site key
  COMSCORE_SITE: 'ns_site', //ComScore label
  COMSCORE_CUSTOMER: 'c2', //ComScore label

  // Test service label keys
  COMSCORE_ENDPOINT: 'comscore_endpoint', //ComScore endpoint

  // Player Keys
  PLAYER_NAME: 'ns_st_mp', //ComScore label
  PLAYER_VERSION: 'ns_st_mv', //ComScore label
  PLAYER_WINDOW_STATE: 'ns_st_ws', //ComScore label
  PLAYER_VOLUME: 'ns_st_vo', //ComScore label
  PLAYER_POPPED: 'bbc_st_pop',
  PLAYER_SUBTITLED: 'bbc_st_sub',

  // Playlist Keys
  PLAYLIST_NAME: 'ns_st_pl', //ComScore label
  PLAYLIST_CLIP_COUNT: 'ns_st_cp', //ComScore label
  PLAYLIST_LENGTH: 'ns_st_ca', //ComScore label

  // Media Keys
  MEDIA_PID: 'ns_st_ci', //ComScore label
  MEDIA_LENGTH: 'ns_st_cl', //ComScore label
  MEDIA_STREAM_TYPE: 'ns_st_ty', //ComScore label
  MEDIA_IS_LIVE: 'ns_st_li', //ComScore label
  MEDIA_EPISODE_ID: 'episode_id', //Legacy BBC label
  MEDIA_CLIP_ID: 'clip_id', //Legacy BBC label
  MEDIA_CLIP_NUMBER: 'ns_st_cn', //ComScore label
  MEDIA_PART_NUMBER: 'ns_st_pn', //ComScore label
  MEDIA_TOTAL_PARTS: 'ns_st_tp', //ComScore label
  MEDIA_MEDIUM: 'bbc_st_med', //New BBC label from Echo
  MEDIA_LIVE_OR_ONDEMAND: 'bbc_st_lod', //New BBC label from Echo
  MEDIA_FORM: 'bbc_st_mf', //New BBC label from Echo
  MEDIA_RETRIEVAL_TYPE: 'bbc_st_ret', //New BBC label from Echo
  MEDIA_SCHEDULE_INDICATOR: 'bbc_st_sch', //New BBC label from Echo
  MEDIA_VERSION_ID: 'version_id', //NKDATA-467
  MEDIA_SERVICE_ID: 'service_id', //NKDATA-467
  MEDIA_NON_PIPS_CONTENT_ID: 'non_pips_content_id', //MYSTATS-1513
  MEDIA_AMBIGUOUS_ID: 'ambig_ci', // MYSTATS-891
  MEDIA_TIMESTAMP: 'bbc_st_live_ts', // MYSTATECHO-36 live timestamp
  ESS_SUCCESS: 'ess_success',
  ESS_ERROR: 'ess_error',
  ESS_STATUS_CODE: 'ess_status_code',

  // App Tag SDK compatibility
  APP_PLATFORM_NAME: 'ns_ap_pn',
  APP_PLATFORM_RUNTIME: 'ns_ap_pfm',
  APP_OS_VERSION: 'ns_ap_pfv',
  APP_DEVICE_NAME: 'ns_ap_device',
  APP_SCREEN_RESOLUTION: 'ns_ap_res',
  APP_LANGUAGE: 'ns_ap_lang',
  ENV_CHAR_SET: 'ns_c',
  ENV_TITLE: 'c8',
  ENV_URL: 'c7',
  ENV_REFERRER: 'c9',

  APP_NAME: 'ns_ap_an',
  APP_VERSION: 'ns_ap_ver',
  NO_COOKIES: 'ns_nc',
  COOKIE_POLICY: 'bbc_mc',
  BBC_ID_LOGGED_IN: 'bbc_identity',

  // WEB istats compatibility
  WEB_SCREEN_RES: 'screen_resolution',

  ESS_ENABLED: 'ess_enabled',
  ESS_ENRICHED: 'ess_enriched'
});


/***/ }),

/***/ "./src/echo/delegate/comscore/player-state.js":
/***/ (function(module, exports, __webpack_require__) {

!(module.exports = {
  IDLE: 0,
  PLAYBACK_NOT_STARTED: 1,
  PLAYING: 2,
  PAUSED: 3,
  BUFFERING_BEFORE_PLAYBACK: 4,
  BUFFERING_DURING_PLAYBACK: 5,
  BUFFERING_DURING_SEEKING: 6,
  BUFFERING_DURING_PAUSE: 7,
  SEEKING_BEFORE_PLAYBACK: 8,
  SEEKING_DURING_PLAYBACK: 9,
  SEEKING_DURING_BUFFERING: 10,
  SEEKING_DURING_PAUSE: 11,
  PAUSED_DURING_BUFFERING: 12
});


/***/ }),

/***/ "./src/echo/delegate/spring/label-keys.js":
/***/ (function(module, exports, __webpack_require__) {

!(module.exports = {
  STREAM: 'stream',
  PID: 'cq',
  WIDTH: 'sx',
  HEIGHT: 'sy',
  PLAYER_DESC: 'pl',
  PLAYER_VERSION: 'plv'
});


/***/ }),

/***/ "./src/echo/delegate/spring/page-context.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  function PageContext(namespace, env) {
    this.namespace = namespace;
    this.env = env;
  }

  PageContext.prototype.preloadImage = function (s) {
    var httpGet = this.env.getHttpGet();
    return httpGet(s);
  };

  PageContext.prototype.getLocalStorageItem = function (key) {
    var getLocalStorageItem = this.env.getGetLocalStorageItem();
    return getLocalStorageItem(key);
  };

  PageContext.prototype.setLocalStorageItem = function (key, value) {
    var setLocalStorageItem = this.env.getSetLocalStorageItem();
    return setLocalStorageItem(key, value);
  };

  PageContext.prototype.getWindowLocationURL = function () {
    return this.env.getURL();
  };

  return PageContext;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/delegate/spring/spring-delegate.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var Keys = __webpack_require__("./src/echo/delegate/spring/label-keys.js");
  var ConfigKeys = __webpack_require__("./src/echo/config/keys.js");
  var DEBUG = __webpack_require__("./src/echo/util/debug.js");
  var Enums = __webpack_require__("./src/echo/enumerations.js");
  var PageContext = __webpack_require__("./src/echo/delegate/spring/page-context.js");

  //function to use when we are ignoring a function
  function dummy() {
    return -1;
  }

  function SpringDelegate(appName, appType, config, env) { // jshint ignore:line

    // No point in initialising this until we know
    // we are going to play some media
    this._sensors = null;
    this._broker = null;
    this._media = null;
    this._meta = {};
    this._stream = null;
    this._env = env;
    this._siteCode = config[ConfigKeys.BARB_SITE_CODE];
    this._debug = config[ConfigKeys.BARB_DEBUG];
    this._traceId = null;
    this._isPlaying = false;
    this._isEssEnabled = false;
    this._isEnabled = true;
    this._hasStarted = false;

    if (config[ConfigKeys.ECHO_TRACE]) {
      this.setTraceId(config[ConfigKeys.ECHO_TRACE]);
    }

    if (config[ConfigKeys.USE_ESS]) {
      this._isEssEnabled = true;
    }

    if (config && config[ConfigKeys.ECHO_ENABLED] === false) {
      this._isEnabled = false;
    } else {
      this._isEnabled = true;
    }
  }

  SpringDelegate.prototype.start = function() {
    if (!this._hasStarted) {
      this._hasStarted = true;
    }
  };

  SpringDelegate.prototype.enable = function() {
    if (!this._isEnabled) {
      this._isEnabled = true;
    }
  };

  SpringDelegate.prototype.disable = function() {
    if (this._isEnabled) {
      this._isEnabled = false;
      this.clearMedia();
    }
  };

  SpringDelegate.prototype.setTraceId = function(id) {
    this._traceId = id;
  };

  SpringDelegate.SpringStreams = __webpack_require__("./lib/spring/amd.springstreams-2.0.0.beauty.js");

  // Application State Methods
  SpringDelegate.prototype.addLabels = dummy;
  SpringDelegate.prototype.addLabel = dummy;
  SpringDelegate.prototype.addManagedLabel = dummy;
  SpringDelegate.prototype.removeLabels = dummy;
  SpringDelegate.prototype.removeLabel = dummy;
  SpringDelegate.prototype.setLoggedInToBBCId = dummy;
  SpringDelegate.prototype.setLoggedOutOfBBCId = dummy;
  SpringDelegate.prototype.setAppVersion = dummy;
  SpringDelegate.prototype.setCounterName = dummy;
  SpringDelegate.prototype.setContentLanguage = dummy;
  SpringDelegate.prototype.setCacheMode = dummy;
  SpringDelegate.prototype.clearCache = dummy;
  SpringDelegate.prototype.flushCache = dummy;
  SpringDelegate.prototype.setESSEnabled = dummy;

  // Analytics Methods
  SpringDelegate.prototype.viewEvent = dummy;
  SpringDelegate.prototype.errorEvent = dummy;
  SpringDelegate.prototype.userActionEvent = dummy;

  // Media Player attributes
  SpringDelegate.prototype.setPlayerName = function(name) {
    this._meta[Keys.PLAYER_DESC] = name;
  };

  SpringDelegate.prototype.setPlayerVersion = function(version) {
    this._meta[Keys.PLAYER_VERSION] = version;
  };

  SpringDelegate.prototype.setPlayerIsPopped = dummy;
  SpringDelegate.prototype.setPlayerWindowState = dummy;
  SpringDelegate.prototype.setPlayerVolume = dummy;
  SpringDelegate.prototype.setPlayerIsSubtitled = dummy;

  SpringDelegate.prototype.setDestination = dummy;
  SpringDelegate.prototype.setProducer = dummy;

  /**
   * Sets the broker.
   *
   * This method should only be called by the EchoClient class to
   * ensure the interface is implemented.
   *
   * @param {Object} broker An object conforming to the broker interface.
   *
   * @return {SpringDelegate}
   */
  SpringDelegate.prototype.setBroker = function(broker) {
    this._broker = broker;
    return this;
  };

  // Media Attributes
  SpringDelegate.prototype.setMedia = function(media) {
    if (!this._eventsEnabled()) {
      return;
    }

    this.clearMedia();
    this._media = media.getClone();
  };

  SpringDelegate.prototype.setMediaLength = function(length) {
    this._media.setLength(length);
  };

  /**
   * Handles an updated clip from the LiveBroker
   *
   * @param {Media} newMedia
   */
  SpringDelegate.prototype.liveMediaUpdate = function(newMedia) {
    this._media = newMedia.getClone();

    if (this._isPlaying) {
      this._startTracking();
    }
  };

  SpringDelegate.prototype.liveEnrichmentFailed = function() {

    if (!this._media.getServiceId()) {
      this._media.setServiceId('no-service-id-found');
    }

    if (this._isPlaying) {
      this._startTracking();
    }
  };

  // Media Events
  SpringDelegate.prototype.avPlayEvent = function(position, eventLabels) { // jshint ignore:line
    if (!this._eventsEnabled()) {
      return;
    }

    if (this.isValidMedia() && this._broker) {

      this._initSensors();

      this._isPlaying = true;

      if (this._media.isLive() && !this._media.getServiceId()) {
        if (!this._isEssEnabled || (!this._media.getVersionId() && !this._media.getVpId())) {
          this._media.setServiceId('invalid-data');
          this._startTracking();
        }
      } else {
        this._startTracking();
      }
    }
  };

  // PRIVATE
  SpringDelegate.prototype._initSensors = function() {
    if (this._sensors === null) {
      this._sensors = new SpringDelegate.SpringStreams(this._siteCode);

      if (this._env.getSetLocalStorageItem() !== null &&
        this._env.getGetLocalStorageItem() !== null &&
        this._env.getHttpGet() !== null) {
        DEBUG.info('Using custom PageContext for BARB');
        var pageContext = new PageContext('com.kma.springstreams', this._env);
        this._sensors.setPageContext(pageContext);
      }

      if (this._debug) {
        this._sensors.debug = function(x) {
          DEBUG.info('Spring DEBUG: ' + x);
        };
      }
    }
  };

  SpringDelegate.prototype._startTracking = function() {
    if (this._stream === null) {
      var attr = this._getAttributes();
      var id = attr[Keys.PID] || ' ';

      // Start to track the media
      this._stream = this._sensors.track(id, attr, this._getAdaptor());
    }

  };

  SpringDelegate.prototype._getMostPrecedentIdObject = function() {
    var versionId = this._media.getVersionIdObject();
    var episodeId = this._media.getEpisodeIdObject();
    var clipId    = this._media.getClipIdObject();
    var vpId      = this._media.getVpIdObject();
    var serviceId = this._media.getServiceIdObject();

    if (versionId.isValueValid()) {
      return versionId;
    } else if (episodeId.isValueValid()) {
      return episodeId;
    } else if (clipId.isValueValid()) {
      return clipId;
    } else if (vpId.isValueValid()) {
      return vpId;
    } else if (serviceId.isValueValid()) {
      return serviceId;
    }

    return null;
  };

  SpringDelegate.prototype._getAttributes = function() {
    var media = this._media;

    // Create desc object
    var desc = {};

    if (this._traceId) {
      desc[ConfigKeys.ECHO_TRACE] = this._traceId;
    }

    if (!media.isLive()) {
      var precedentId = this._getMostPrecedentIdObject();

      if (precedentId !== null) {
        desc[Keys.PID] = precedentId.getValue();
      }
    }

    if (media.isOnDemand()) {
      desc[Keys.STREAM] = 'od';
    } else if (media.isDownload()) {
      desc[Keys.STREAM] = 'dwn';
    } else if (media.isLive()) {
      if (media.getServiceIdObject().isValueValid()) {
        desc[Keys.STREAM] = 'live/' + media.getServiceId();
      }
    }

    return desc;
  };

  SpringDelegate.prototype._getAdaptor = function() {
    // Create adaptor
    var self = this;
    var positionGetter;

    if (this._media.isLive()) {
      positionGetter = function() {
        return self._broker.getTimestamp();
      };
    } else {
      positionGetter = function() {
        return self._broker.getPosition();
      };
    }

    return {
      getMeta: function(id) { // jshint ignore:line
        return self._meta;
      },

      getDuration: function(id) { // jshint ignore:line
        var secs = 0;

        if (!self._media.isLive()) {
          secs = Math.floor(self._media.getLength() / 1000);
        }

        return secs;
      },

      getPosition: function(id) { // jshint ignore:line
        return Math.floor(positionGetter() / 1000);
      }
    };
  };

  SpringDelegate.prototype._eventsEnabled = function() {
    return this._isEnabled && this._hasStarted;
  };

  SpringDelegate.prototype.avPauseEvent = function() {
  };

  SpringDelegate.prototype.avBufferEvent = function() {
  };

  SpringDelegate.prototype.avEndEvent = function() {
    if (!this._eventsEnabled()) {
      return;
    }

    this._isPlaying = false;

    if (this.isValidMedia()) {
      this.clearMedia();
    }
  };

  SpringDelegate.prototype.avRewindEvent = function() {
  };

  SpringDelegate.prototype.avFastForwardEvent = function() {
  };

  SpringDelegate.prototype.avSeekEvent = function() {
  };

  SpringDelegate.prototype.avUserActionEvent  = dummy;

  SpringDelegate.prototype.clearMedia = function() {
    if (this.isValidMedia()) {
      if (this._stream) {
        this._stream.stop();
      }

      this._stream = null;
      this._media = null;
    }
  };

  SpringDelegate.prototype.isValidMedia = function() {
    return this._media !== null && this._media.avType === Enums.AvType.VIDEO;
  };

  SpringDelegate.prototype.isValidLiveMedia = function() {
    return this.isValidMedia() && this._media.isLive();
  };

  SpringDelegate.prototype.requiresLabelCleansing = function() {
    return true;
  };

  return SpringDelegate;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/enumerations.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * ENUM values. Available via Echo.Enums. These values are used to pass in to
 * various methods in `EchoClient` and `Media`
 * @exports Echo/Enums
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var ConfigKeys = __webpack_require__("./src/echo/config/keys.js");
  var ATILabelKeys = __webpack_require__("./src/echo/delegate/ati/label-keys.js");

  // Create a list of destinations that can be used as an enumeration
  var destinations = {};
  var origDestinations = __webpack_require__("./src/echo/config/destinations.js");
  Object.keys(origDestinations).map(function(key) {
    destinations[key] = key;
  });

  // Create a list of producers that can be used as an enumeration
  var producers = {};
  var origProducers = __webpack_require__("./src/echo/config/producers.js");
  Object.keys(origProducers).map(function(key) {
    producers[key] = key;
  });

  var comscoreCustomerId = {
    PUBLIC_SERVICE: '16060501',
    GNL: '19293874',
    WORLD_SERVICE: '19999701',
    WORLDWIDE_FEATURES: '19774467',
    STORE_NONCOMMERCIAL: '19774474',
    STORE_COMMERCIAL: '19774472',
    AFFILIATES_ACCEPTANCE: '18897612',
    BRITBOX: '23239715',
    BRITBOX_ACCEPTANCE: '18897612'
  };

  function createReportingProfile(comscoreCustomerId, comscoreSite, comscoreHost, sscHost) {
    var profile = {};
    profile[ConfigKeys.COMSCORE_CUSTOMER_ID] = comscoreCustomerId;
    profile[ConfigKeys.COMSCORE_SITE] = comscoreSite;
    profile[ConfigKeys.COMSCORE_HOST] = comscoreHost;
    profile[ConfigKeys.SSC_HOSTNAME] = sscHost;
    return profile;
  }

  function createPublicServiceReportingProfile(comscoreSite) {
    return createReportingProfile(
      comscoreCustomerId.PUBLIC_SERVICE,
      comscoreSite,
      'sa.bbc.co.uk',
      '.co.uk'
    );
  }

  function createAffiliateReportingProfile(comscoreCustomerId, comscoreSite) {
    return createReportingProfile(
      comscoreCustomerId,
      comscoreSite,
      'scorecardresearch.com',
      '.com'
    );
  }

  var reportingProfiles = {};
  reportingProfiles.PUBLIC_SERVICE = createPublicServiceReportingProfile('bbc');
  reportingProfiles.PUBLIC_SERVICE_STAGE = createPublicServiceReportingProfile('stage');
  reportingProfiles.PUBLIC_SERVICE_TEST = createPublicServiceReportingProfile('test');
  reportingProfiles.PUBLIC_SERVICE_INT = createPublicServiceReportingProfile('int');
  reportingProfiles.PUBLIC_SERVICE_INTRANET = createPublicServiceReportingProfile('intranet');

  reportingProfiles.GNL = createAffiliateReportingProfile(
    comscoreCustomerId.GNL, 'bbc'
  );
  reportingProfiles.GNL_ACCEPTANCE = createAffiliateReportingProfile(
    comscoreCustomerId.AFFILIATES_ACCEPTANCE, 'gnl-test'
  );
  reportingProfiles.WORLD_SERVICE = createAffiliateReportingProfile(
    comscoreCustomerId.WORLD_SERVICE, 'bbc'
  );
  reportingProfiles.WORLD_SERVICE_ACCEPTANCE = createAffiliateReportingProfile(
    comscoreCustomerId.AFFILIATES_ACCEPTANCE, 'ws-test'
  );
  reportingProfiles.WORLDWIDE_FEATURES = createAffiliateReportingProfile(
    comscoreCustomerId.WORLDWIDE_FEATURES, 'bbc'
  );
  reportingProfiles.WORLDWIDE_FEATURES_ACCEPTANCE = createAffiliateReportingProfile(
    comscoreCustomerId.AFFILIATES_ACCEPTANCE, 'features-test'
  );
  reportingProfiles.STORE_NONCOMMERCIAL = createAffiliateReportingProfile(
    comscoreCustomerId.STORE_NONCOMMERCIAL, 'bbc'
  );
  reportingProfiles.STORE_COMMERCIAL = createAffiliateReportingProfile(
    comscoreCustomerId.STORE_COMMERCIAL, 'bbc'
  );
  reportingProfiles.BRITBOX_ACCEPTANCE = createAffiliateReportingProfile(
    comscoreCustomerId.BRITBOX_ACCEPTANCE, 'bbc-global-test'
  );
  reportingProfiles.BRITBOX = createAffiliateReportingProfile(
    comscoreCustomerId.BRITBOX, 'bbc'
  );

  var exports = {
    /** COMSCORE CONFIG **/

    /** ECHO CLIENT **/
    /**
     * Type of application, used in the construction of an `EchoClient` object
     * @property WEB Standard desktop web sites
     * @property MOBILE_WEB Mobile sites
     * @property RESPONSIVE Responsive sites
     * @property MOBILE_APP Native mobile applications
     * @property BIGSCREEN_HTML Connected Tv's and STB's
     * @property BIGSCREEN_FLASH Connected Tv's and STB's
     * @property BIGSCREEN_APP TiVo Xbox Wii etc.
     * @property BIGSCREEN_CAST Chromecast Analyitics.
     * @property DESKTOP_APP Desktop apps, eg iplayer downloader
     */
    ApplicationType: {
      WEB: 'web',
      MOBILE_WEB: 'mobile-web',
      RESPONSIVE: 'responsive',
      MOBILE_APP: 'mobile-app',
      BIGSCREEN_HTML: 'bigscreen-html',
      BIGSCREEN_FLASH: 'bigscreen-flash',
      BIGSCREEN_APP: 'bigscreen-app',
      BIGSCREEN_CAST: 'bigscreen-cast',
      DESKTOP_APP: 'desktop-app'
    },

    /**
     * Window states, used as an argument to the EchoClient method
     * `setPlayerWindowState()`
     * @property FULL
     * @property NORMAL
     * @property MINIMISED
     * @property MAXIMISED
     * @property PICTUREINPICTURE
     */
    WindowState: {
      FULL: 'full',
      NORMAL: 'norm',
      MINIMISED: 'min',
      MAXIMISED: 'max',
      PICTUREINPICTURE: 'picture-in-picture'
    },

    /** MEDIA **/

    /**
     * Type of MediaId used by MediaID
     *
     */
    MediaIdType: {
      VERSION: 'version',
      CLIP: 'clip',
      EPISODE: 'episode',
      SERVICE: 'service',
      VPID: 'vpid',
      NONPIPSCONTENTID: 'nonpipscontentid',
      PRODUCER: 'producer',
      BRAND: 'brand',
      SERIES: 'series'
    },

    MediaClipType: {
      UNDEFINED: undefined,
      CLIP: 'clip',
      EPISODE: 'episode'
    },

    MediaInitiationType: {
      UNDEFINED: undefined,
      USER: 'user',
      AUTO: 'auto'
    },

    /**
     * Type of AV content. Used in the construction of a `Media` object
     * @property AUDIO Audio content
     * @property VIDEO Video content
     */
    AvType: {
      AUDIO: 'audio',
      VIDEO: 'video'
    },

    /**
     * Retrieval Type of AV content. Used in the `Media`
     * object
     * @property STREAM Content is being streamed
     * @property DOWNLOAD Content is downloaded
     */
    RetrievalType: {
      STREAM: 'stream',
      DOWNLOAD: 'download'
    },

    /**
     * Retrieval Type of AV content. Used as an argument to `media.setForm()`
     * @property LONG Content is "long" (an episode)
     * @property SHORT Content is "short" (a clip)
     */
    Form: {
      LONG: 'long',
      SHORT: 'short'
    },

    /**
     * AV type to differentiate between episode and clip,
     * this is used to decide whether the content ID is
     * a clip or episode
     * @property CLIP Content is a clip
     * @property EPISODE Copntent is an episode
     */
    PIPsType: {
      CLIP: 'clip',
      EPISODE: 'ep'
    },

    /**
     * Used in the construction of a Media object, this value
     * indeicates whether the stream is "live" or "on-demand"
     * @property ON_DEMAND Content is On Demand
     * @property LIVE Content is Live
     */
    MediaConsumptionMode: {
      ON_DEMAND: 'ondemand',
      LIVE: 'live',
      DOWNLOAD: 'download'
    },

    EchoCacheMode: {
      OFFLINE: 'offline',
      ALL: 'all'
    },

    ManagedLabels: {
      EVENT_MASTER_BRAND: 'event_master_brand',
      BBC_SITE: 'bbc_site',
      IPLAYER_STATE: 'iplayer_state',
      STORE_ED_TYPE: 'store_ed_type',
      IPLAYER_AVAIL: 'iplayer_avail',
      STORE_REFERRAL: 'store_referral',
      BBC_HASHED_ID: 'bbc_hid'
    },

    ReportingProfiles: reportingProfiles,

    EssError: {
      STATUS_CODE: 'status_code',
      TIMEOUT: 'timeout',
      JSON: 'json',
      RUNTIME: 'runtime_error'
    },

    Destinations: destinations,

    Producers: producers,

    EchoLabelKeys: ATILabelKeys
  };

  return exports;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/environment.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * A class to allow for varied enrionments.
 * An instance of this can be passed into EchoClient constructor.
 * Default values are for a standard web environment.
 * @exports Echo/Environment
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var LabelCleanser = __webpack_require__("./src/echo/util/cleansing/label-cleanser.js");
  var Cookies = __webpack_require__("./src/echo/util/cookies.js");
  var Networking = __webpack_require__("./src/echo/util/networking.js");

  var orbCookies;
  var orbIdCta;

  // must be initialised as undefined
  var orbIdCtaIsAvailable;
  var orbIdCtaIsLoading = false;
  var orbIdCtaCallbacks = [];

  /**
   * Initialise an Environment object
   * An instance of this can be passed into EchoClient constructor
   * Default values are for a standard web environment. If these are fine
   * for your purposes, then this class does not need to be used and nothing
   * need be passed into `new EchoClient()`
   * @constructor
   */
  function Environment() {
    var screen = window.screen || {};
    var navigator = window.navigator || {};
    var document = window.document || {};

    this._platformRuntimeEnvironment = 'html';
    this._platformOSVersion = '5'; //TODO

    this._screenResolution = (screen.width || '-') +
      'x' + (screen.height || '-');

    this._language = navigator.language || '';
    this._platformName = navigator.platform || '';

    this._charset = document.characterSet || document.defaultCharset || '';
    this._title = document.title || '';
    this._url = document.URL || '';
    this._referrer = document.referrer || '';

    this._deviceName = null; // Dont send if not set

    this._httpGet = null;
    this._executeCrossDomainGet = null;

    this._getCookie = null; // similarly
    this._setCookie = null;

    this._setLocalStorageItem = null;
    this._getLocalStorageItem = null;
  }

  Environment._defaultHttpGet = Networking.httpGet;
  Environment._defaultGetCookie = Cookies.getCookieValueByName;

  Environment.prototype.getPlatformName = function() {
    return this._platformName;
  };

  Environment.prototype.getPlatformRuntimeEnvironment = function() {
    return this._platformRuntimeEnvironment;
  };

  Environment.prototype.getPlatformOSVersion = function() {
    return this._platformOSVersion;
  };

  Environment.prototype.getDeviceName = function() {
    return this._deviceName;
  };

  Environment.prototype.getScreenResolution = function() {
    return this._screenResolution;
  };

  Environment.prototype.getLanguage = function() {
    return this._language;
  };

  Environment.prototype.getHttpGet = function() {
    return this._httpGet;
  };

  Environment.prototype.setExecuteCrossDomainGet = function(executeCrossDomainGet) {
    this._executeCrossDomainGet = executeCrossDomainGet;
  };

  Environment.prototype.getExecuteCrossDomainGet = function() {
    var executeCrossDomainGet;
    if (this._executeCrossDomainGet) {
      executeCrossDomainGet = this._executeCrossDomainGet;
    } else {
      executeCrossDomainGet = Networking.executeCrossDomainGet;
    }

    return executeCrossDomainGet;
  };

  Environment.prototype.getCookieGetter = function() {
    return this._getCookie;
  };

  Environment.prototype.getCookieSetter = function() {
    return this._setCookie;
  };

  Environment.prototype.getCharSet = function() {
    return this._charset;
  };

  Environment.prototype.getTitle = function() {
    return this._title;
  };

  Environment.prototype.getURL = function() {
    return this._url;
  };

  Environment.prototype.getProtocol = function() {
    return this.getURL().toLowerCase().indexOf('http:', 0) !== 0 ? 'https:' : 'http:';
  };

  Environment.prototype.getReferrer = function() {
    return this._referrer;
  };

  Environment.prototype.setSetLocalStorageItem = function(setLocalStorageItem) {
    this._setLocalStorageItem = setLocalStorageItem;
  };

  Environment.prototype.getSetLocalStorageItem = function() {
    return this._setLocalStorageItem;
  };

  Environment.prototype.setGetLocalStorageItem = function(getLocalStorageItem) {
    this._getLocalStorageItem = getLocalStorageItem;
  };

  Environment.prototype.getGetLocalStorageItem = function () {
    return this._getLocalStorageItem;
  };

  /**
   * Set the "Platform Name". If this method is not called the
   * default value will be `window.navigator.platform`
   * @param {string} name
   * @returns {this} `this`
   */
  Environment.prototype.setPlatformName = function(name) {
    this._platformName = name;
    return this;
  };

  /**
   * Set the "Platform Runtime Environment" and the "Platform OS Version".
   * If this method is not called the defaults will be `'html'` and `'5'`
   * @param {string} platformRuntimeEnvironment
   * @param {string} platformOSVersion
   * @returns {this} `this`
   */
  Environment.prototype.setPlatform =
    function(platformRuntimeEnvironment, platformOSVersion) {
    this._platformRuntimeEnvironment = platformRuntimeEnvironment;
    this._platformOSVersion = platformOSVersion;
    return this;
  };

  /**
   * Set the "Device Name". If this method is not called the
   * default value will not be set (and potentially popluated server-side)
   * @param {string} deviceName
   * @returns {this} `this`
   */
  Environment.prototype.setDeviceName = function(deviceName) {
    this._deviceName = deviceName;
    return this;
  };

  /**
   * Set the Screen Resoultion. If this method is not called the
   * default will be `window.screen.availWidth + 'x' +
   * window.screen.availHeight`
   * @param {string} screenResolution
   * @example env.setScreenResolution('200x300');
   */
  Environment.prototype.setScreenResolution = function(screenResolution) {
    this._screenResolution = screenResolution;
    return this;
  };

  /**
   * Set the "device Language (locale)". If this method is not called the
   * default value will be `window.navigator.language`. This should not be
   * confused with the `setContentLanguage()` EchoClient instance method which
   * asks for the language being displayed
   * @param {string} language
   * @returns {this} `this`
   */
  Environment.prototype.setLanguage = function(language) {
    // ECHO-12
    this._language = LabelCleanser.cleanLanguage(language);
    return this;
  };

  /**
   * Set a function to use for httpGet request. If this method is not called
   * AJAX or an `Image` object will be used
   * @param {function} httpGet
   * @returns {this} `this`
   * @example
   * env.setHttpGet(function(url,headers,onSuccess,onError){
   *     var img = new Image();
   *     img.src = url;
   *     if(onSuccess){
   *         img.onload = onSuccess;
   *     }
   *     if(onError){
   *         img.onerror = onError;
   *     }
   * });
   */
  Environment.prototype.setHttpGet = function(httpGet) {
    this._httpGet = httpGet;
    return this;
  };

  /**
   * Set a function to use for getting cookies from the environment.
   * If this method is not called, cookies will be searched for in
   * `document.cookie`
   * @param {function} getCookie
   * @returns {this} `this`
   * @example
   * env.setCookieGetter(function(name){
   *     // get and return the "name" cookie
   * });
   */
  Environment.prototype.setCookieGetter = function(getCookie) {
    this._getCookie = getCookie;
    return this;
  };

  /**
   * Set a function to use for setting cookies.
   * If this method is not called, cookies will be set on `document.cookie`
   * See the example for an example that will work on the web. The passed
   * method should accept all the parameters which the exmaple method does:
   *
   * |Name|Type|Description|
   * |----|----|-----------|
   * |`key`|String|The name of the cookie|
   * |`value`|String|The cookie value|
   * |`path`|String|The path to set the cookie on|
   * |`maxAge`|Integer|The number of milliseconds until the cookie expires|
   *
   * @param {function} setCookie
   * @returns {this} `this`
   * @example
   * env.setCookieSetter(function(key,value,path,maxAge){
   *     var t = new Date();
   *     t.setTime(t.getTime() + maxAge);
   *
   *     document.cookie = key + '=' + value + ';' +
   *                       ' expires=' + t.toUTCString() + ';' +
   *                       ' path=' + path + ';';
   * });
   */
  Environment.prototype.setCookieSetter = function(setCookie) {
    this._setCookie = setCookie;
    return this;
  };

  /**
   * Set the "Character Set". If this method is not called the
   * default value will be `document.characterSet` or, failing that
   * `document.defaultCharset`
   * @param {string} charSet
   * @returns {this} `this`
   */
  Environment.prototype.setCharSet = function(charSet) {
    this._charset = charSet;
    return this;
  };

  /**
   * Set the page title. If this method is not called the
   * default value will be `document.title`
   * @param {string} title
   * @returns {this} `this`
   */
  Environment.prototype.setTitle = function(title) {
    this._title = title;
    return this;
  };

  /**
   * Set the current URL. If this method is not called the
   * default value will be `document.URL`
   * @param {string} url
   * @returns {this} `this`
   */
  Environment.prototype.setURL = function(url) {
    this._url = url;
    return this;
  };

  /**
   * Set the referrer url. If this method is not called the
   * default value will be `document.referrer`
   * @param {string} ref
   * @returns {this} `this`
   */
  Environment.prototype.setReferrer = function(ref) {
    this._referrer = ref;
    return this;
  };

  Environment.setOrbCookies = function(value) {
    orbCookies = value;
    return this;
  };

  Environment.getOrbCookies = function() {
    return orbCookies;
  };

  Environment.getOrbCookiesPolicy = function() {
    if (orbCookies && typeof orbCookies.readPolicy === 'function') {
      return orbCookies.readPolicy();
    }
  };

  Environment.setOrbIdCta = function(value) {
    orbIdCta = value;
    return this;
  };

  Environment.getOrbIdCta = function(callback) {

    var callbackIndex;

    var safeCallback = function(potentialCallback, orbIdCta) {
      if (potentialCallback && typeof potentialCallback === 'function') {
        potentialCallback(orbIdCta);
      }
    };

    if (orbIdCta !== undefined) {
      safeCallback(callback, orbIdCta);
      return;
    } else if (orbIdCtaIsAvailable === false) {
      safeCallback(callback);
      return;
    }

    orbIdCtaCallbacks.push(callback);

    /**
     * We use window.require here rather than the local require (from 'echo.js')
     * as we want to be able to control require behaviour in integration tests.
     */
    var require = window.require;
    if (orbIdCtaIsAvailable === undefined && require) {
      orbIdCtaIsAvailable = typeof require.defined === 'function' &&
        require.defined('idcta/idcta-1');

      // we are looking into the interals of require so be
      // as defensive as possible
      if (
        !orbIdCtaIsAvailable &&
        require.s &&
        require.s.contexts &&
        require.s.contexts._ &&
        require.s.contexts._.config &&
        require.s.contexts._.config.paths &&
        require.s.contexts._.config.paths.idcta
      ) {
        orbIdCtaIsAvailable = true;
      }

    } else {
      orbIdCtaIsAvailable = false;
    }

    // load the idcta is available and not already being loaded
    if (orbIdCtaIsAvailable && !orbIdCtaIsLoading) {
      orbIdCtaIsLoading = true;

      window.require(['idcta/idcta-1'], function(idcta) {
        orbIdCta = idcta;
        for (callbackIndex = 0; callbackIndex < orbIdCtaCallbacks.length; orbIdCtaCallbacks++) {
          if (
            orbIdCtaCallbacks[callbackIndex] &&
            typeof orbIdCtaCallbacks[callbackIndex] === 'function'
          ) {
            safeCallback(orbIdCtaCallbacks[callbackIndex], orbIdCta);
          }
        }
      });
    } else if (orbIdCtaIsAvailable === false) {
      safeCallback(callback);
    }
  };

  return Environment;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/live-broker.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__("./src/echo/playhead.js"),
  __webpack_require__("./src/echo/delegate/comscore/label-keys.js"),
  __webpack_require__("./src/echo/schedule.js"),
  __webpack_require__("./src/echo/media.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Playhead, CSKeys, Schedule, Media) {

  'use strict';

  var NO_BROADCAST = 'no-broadcast';
  var UPDATE_INTERVAL = 1000;
  var TIMESTAMP_DRIFT_TOLERANCE = 1500;

  /**
   * @param {Object} playerDelegate
   * @param {Media} media the current media item
   * @param {EchoClient} echoClient
   * @param {Obect} environment
   * @param {Boolean} essEnabled
   * @constructor
   */
  function LiveBroker(
    playerDelegate, media, echoClient, environment, essEnabled
  ) {

    this._playerDelegate = playerDelegate;
    this._playhead = new Playhead();
    this._isStarted = false;
    this._interval = null;
    this._echoClient = echoClient;
    this._broadcast = NO_BROADCAST;
    this._playerDelegateTimestamp = 0;
    this._previousPosition = 0;
    this._playingTime = 0;
    this._media = media;
    this._environment = environment;
    this._essEnabled = essEnabled;
    this._hb3NotSentYet = true;
    this._hb5NotSentYet = true;

    this._isRecievingPlayerTimestamp = false;
    this._updateTime = 0;

    if (this._essEnabled) {
      this._schedule = new Schedule(media, environment, echoClient);
    }
  }

  /**
   * Start up the broker
   */
  LiveBroker.prototype.start = function() {

    var self = this;

    if (this._isStarted) {
      return;
    }

    this._interval = setInterval(function() {
      self._update();
    }, UPDATE_INTERVAL);

    this._isStarted = true;

    if (!this._isRecievingPlayerTimestamp) {
      this._playhead.start();
    }
  };

  /**
   * Stop the broker
   */
  LiveBroker.prototype.stop = function() {
    clearInterval(this._interval);
    this._playhead.stop();
    this._isStarted = false;
  };

  /**
   * Check to see if the broadcast has changed based on the current player time.
   *
   * @private
   */
  LiveBroker.prototype._update = function() {
    var playerDelegateTimestamp = parseInt(this._playerDelegate.getTimestamp(), 10);
    var playerDelegateTimestampHasChanged = false;
    var playerDelegateTimestampIsValid = false;
    var hasRealignedTimestampToPlayerDelegate = false;

    var timestamp = this.getTimestamp();
    var timestampDelta;
    var now = new Date();
    now = now.getTime();
    var updateDelta = now - this._updateTime;
    this._updateTime = now;

    if ((typeof playerDelegateTimestamp === 'number') &&
        playerDelegateTimestamp > 0
    ) {
      playerDelegateTimestampIsValid = true;
      this._isRecievingPlayerTimestamp = true;

      if (this._playerDelegateTimestamp !== playerDelegateTimestamp) {
        playerDelegateTimestampHasChanged = true;
        this._echoClient.addLabel(CSKeys.MEDIA_TIMESTAMP, playerDelegateTimestamp);
      }

      // Determine if our internal representation of time (via this.getTimestamp()
      // or this._playerDelegateTimestamp + this._playhead.getPosition()) is aligned
      // with the value recieved from the player delegate.
      timestampDelta = playerDelegateTimestamp - timestamp;

      if (
        playerDelegateTimestampIsValid &&
        (
          this._playerDelegateTimestamp === 0 ||
          timestampDelta < (0 - updateDelta - TIMESTAMP_DRIFT_TOLERANCE) ||
          timestampDelta > (updateDelta + TIMESTAMP_DRIFT_TOLERANCE)
        )
      ) {
        hasRealignedTimestampToPlayerDelegate = true;
        this._playerDelegateTimestamp = playerDelegateTimestamp;
        this._playingTime += this._playhead.getPosition();
        this._restartPlayhead();
        timestamp = this.getTimestamp();
      }
    }

    if (!hasRealignedTimestampToPlayerDelegate) {
      if (
        (this._playerDelegateTimestamp !== 0 && !playerDelegateTimestampHasChanged) ||
        (this._isRecievingPlayerTimestamp && !playerDelegateTimestampIsValid)
      ) {
        this._playhead.stop();
      } else {
        this._playhead.start();
      }
    }

    // Now we have determined the current timestamp we need to check where
    // we are in the schedule and update the media item if necessary.
    var hasUpdatedMedia = this._updateSchedule(timestamp);

    // if we have created a new media item we need to reset playing time
    // playhead and Echo heartbeat flags so the heartbeats are sent again
    // for the new media item
    if (hasUpdatedMedia) {
      this._playingTime = 0;
      this._playerDelegateTimestamp = playerDelegateTimestamp;
      this._restartPlayhead();
      this._hb3NotSentYet = true;
      this._hb5NotSentYet = true;
    } else if (playerDelegateTimestampHasChanged) {
      this._echoClient.releaseSuppressedPlay();
    }

    this._updateHeartbeats();

    this._previousPosition = this.getPosition();

  };

  /**
   * Check to see if the broadcast has changed based on the
   * provided timestamp.
   *
   * @param {Number} timestamp  The timestamp to compare with the schedule
   *
   * @private
   */
  LiveBroker.prototype._updateSchedule = function(timestamp) {
    var broadcast;
    var broadcastTime;
    var clipLength;
    var media;
    var hasUpdatedMedia = false;

    if (this._essEnabled && this._schedule.hasData() && timestamp > 0) {

      broadcast = this._schedule.getBroadcast(timestamp);

      media = new Media(
        this._media.getAvType(),
        this._media.getMediaConsumptionMode()
      );
      media.setServiceId(this._schedule.serviceId);
      media.setTransportMode(this._media.getTransportMode());
      media.setMediaPlayerName(this._media.getMediaPlayerName());
      media.setMediaPlayerVersion(this._media.getMediaPlayerVersion());

      if (!broadcast && this._broadcast !== NO_BROADCAST) {
        // we were previously in a broadcast and have now gone into dead space
        this._broadcast = NO_BROADCAST;
        this._updateMedia(media);
        hasUpdatedMedia = true;
      } else if (
        broadcast && (
          this._broadcast === NO_BROADCAST ||
          broadcast.version.id !== this._broadcast.version.id
        )
      ) {
        /**
         * if we don't already have a broadcast, or if the cached broadcast is
         * different i.e. crossed boundary.
         */

        this._broadcast = broadcast;
        broadcastTime = broadcast.published_time;
        clipLength = broadcastTime.end - broadcastTime.start;

        media.setEssEnriched(true);
        media.setVersionId(broadcast.version.id);
        media.setLength(clipLength);

        if (broadcast.episode && broadcast.episode.id) {
          media.setEpisodeId(broadcast.episode.id);
        }

        this._updateMedia(media);
        hasUpdatedMedia = true;
      }
    }

    return hasUpdatedMedia;
  };

  /**
   * Send heartbeat events if necessary.
   *
   * @private
   */
  LiveBroker.prototype._updateHeartbeats = function() {

    var playingTime;
    var position;

    if (this._broadcast === NO_BROADCAST || (!this._hb3NotSentYet && !this._hb5NotSentYet)) {
      return;
    }

    playingTime = this._playingTime + this._playhead.getPosition();
    position = this.getPosition();

    // send 3 second heartbeat
    if (playingTime >= 3000 && this._hb3NotSentYet) {
      this._echoClient.avUserActionEvent('echo_hb', 'echo_hb_3', position);
      this._hb3NotSentYet = false;
    }

    // send 5 second heartbeat
    if (playingTime >= 5000 && this._hb5NotSentYet) {
      this._echoClient.avUserActionEvent('echo_hb', 'echo_hb_5', position);
      this._hb5NotSentYet = false;
    }
  };

  /**
   * Broadcast the live media update.
   *
   * @param {Media} media a new media item
   * @private
   */
  LiveBroker.prototype._updateMedia = function(media) {

    var position = this.getPosition();

    this._echoClient.liveMediaUpdate(
      media,
      position,
      this._previousPosition
    );

    this._previousPosition = position;
  };

  /**
   * Convenience method for reseting and playing the playhead.
   *
   * @private
   */
  LiveBroker.prototype._restartPlayhead = function() {
    this._playhead.reset();
    this._playhead.start();
  };

  /**
   * Represents the true position a player is at within a piece of media.
   *
   * @returns {Number}
   */
  LiveBroker.prototype.getPosition = function() {

    var position;

    if (this._broadcast && this._broadcast !== NO_BROADCAST) {
      position = (
        this._playerDelegateTimestamp - this._broadcast.published_time.start
      ) + this._playhead.getPosition();
    } else {
      position = this._playhead.getPosition();
    }

    return position;
  };

  /**
   * Represents the timestamp a player is at within a piece of media.
   *
   * @returns {Number}
   */
  LiveBroker.prototype.getTimestamp = function() {
    return this._playerDelegateTimestamp + this._playhead.getPosition();
  };

  return LiveBroker;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/media-id.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Exports the Media Id class
 * @exports Echo/Media
 * @author Dai Williams <dai.williams@bbc.co.uk>
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var Utils = __webpack_require__("./src/echo/util/methods.js");

  /**
   * Initialise a Media Id Object.
   * @namespace MediaId
   * @constructor
   * @param {MediaIdType} _idType The Media type identifier
   * for a piece of media. 'Enums.MediaIdType'
   *
   * @description The MediaId object is used within the Media object
   * so set values for specific identifiers within the Media object itself.
   * these types can be:
   *
   *   VERSION
   *   CLIP
   *   EPISODE
   *   SERVICE
   *   VPID
   *   NONPIPSCONTENTID
   *
   */
  var MediaId = function(_idType, _requiresValidation) {
    this.idType = _idType;
    this.validValueRegex = /^[a-z0-9A-Z_-]+$/;
    this.value = null;
    this.isSet = false;
    this.isValid = false;
    this.requiresValidation = _requiresValidation;
  };

  /**
   * @memberOf MediaId
   * @instance
   * @method getIdType
   *
   * @returns {MediaIdType} The MediaId type
   */
  MediaId.prototype.getIdType = function() {
    return this.idType;
  };

  /**
   * @memberOf MediaId
   * @instance
   * @method setValue
   *
   * @param {string} _value The value to set for MediaId
   * @returns {MediaIdType} The MediaId type
   */
  MediaId.prototype.setValue = function(_value) {
    this.isSet = true;

    if (_value == null) {
      this.isValid = false;
    } else if (this.requiresValidation) {
      this.isValid = this._validateValue(_value);
    } else {
      this.isValid = true;
    }

    Utils.assert(this.isValid, 'MediaId: The value for ' + this.idType + 'Id is invalid', true);

    this.value = _value;
  };

  /**
   * @memberOf MediaId
   * @instance
   * @method getValue
   *
   * @returns {string} The MediaId value
   */
  MediaId.prototype.getValue = function() {
    return this.value;
  };

  /**
   * @memberOf MediaId
   * @instance
   * @method isValueSet
   *
   * @description Confirms whether a value has been set for the value
   * invalid or valid
   * @returns {bool}
   */
  MediaId.prototype.isValueSet = function() {
    return this.isSet;
  };

  /**
   * @memberOf MediaId
   * @instance
   * @method isValueValid
   *
   * @description Confirms whether the value set is valid. If not set or invalid
   * it returns false
   * @returns {bool}
   */
  MediaId.prototype.isValueValid = function() {
    return this.isValid;
  };

  /**
   * @memberOf MediaId
   * @private
   * @method isValueSet
   *
   * @description Private helper to check if the value being set is
   * a valid value
   * @returns {bool}
   */
  MediaId.prototype._validateValue = function(value) {
    if (typeof value === 'string') {
      return this.validValueRegex.test(value);
    } else {
      return false;
    }
  };

  return MediaId;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/media.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Exports the Media class, used for setting meta-data associated with
 * a piece of AV content
 * @exports Echo/Media
 * @author Dai Williams <dai.williams@bbc.co.uk>
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var Producers = __webpack_require__("./src/echo/config/producers.js");
  var MediaId = __webpack_require__("./src/echo/media-id.js");
  var Enums = __webpack_require__("./src/echo/enumerations.js");
  var Utils = __webpack_require__("./src/echo/util/methods.js");
  var LabelKeys = __webpack_require__("./src/echo/delegate/ati/label-keys.js");
  var CSLabelKeys = __webpack_require__("./src/echo/delegate/comscore/label-keys.js");
  var LabelCleanser = __webpack_require__("./src/echo/util/cleansing/label-cleanser.js");
  var DEBUG = __webpack_require__("./src/echo/util/debug.js");
  var CONSUMPTION_MODE = Enums.MediaConsumptionMode;

  /**
   * @memberOf Media
   * @private
   * @method _isValidAvType
   *
   * @description Private helper to determine valid av type
   *
   * @param {AvType} _avType The AV type of the media,
   * one of `Echo.Enums.AvType`.
   * @returns {bool}
   */
  function _isValidAvType(_avType) {
    return (_avType === Enums.AvType.AUDIO || _avType === Enums.AvType.VIDEO);
  }

  /**
   * @memberOf Media
   * @private
   * @method _isValidConsumptionMode
   *
   * @description Private helper to determine valid av type
   *
   * @param {MediaConsumptionMode} _consumptionMode Whether the media is
   * on-demand, download or live.
   * @returns {bool}
   */
  function _isValidConsumptionMode(_consumptionMode) {
    return (
      _consumptionMode === CONSUMPTION_MODE.ON_DEMAND ||
      _consumptionMode === CONSUMPTION_MODE.DOWNLOAD ||
      _consumptionMode === CONSUMPTION_MODE.LIVE
    );
  }

  /**
   * Initialise a Media object.
   * @namespace Media
   * @constructor
   * @param {AvType} _avType The AV type of the media,
   * one of `Echo.Enums.AvType`.
   * @param {MediaConsumptionMode} _consumptionMode Whether the media is
   *                            on-demand, download or live.
   *
   * When determining how to set this flag, consider the experience
   * from the user's perspective. Did they need to plan their time
   * around the BBC in order to view this content? i.e. They had to
   * be in front of a screen / radio at 3pm on a given day in order
   * to watch it. If so, the content is live (regardless of whether
   * the 'screen' is big-screen, console, browser etc). If they
   * didn't need to be there at a particular time, rather they sat
   * down when they wanted and asked the BBC to serve the content
   * at that point (again, regardless of screen type) it is
   * on-demand.
   *
   * @example
   * var media = new Media(Echo.Enums.AvType.VIDEO,
   *                       Echo.Enums.MediaConsumptionMode.ON_DEMAND);
   */
  var Media = function(_avType, _consumptionMode) {
    this.avType = _isValidAvType(_avType) ? _avType : null;

    this.consumptionMode = _isValidConsumptionMode(_consumptionMode) ?
      _consumptionMode : null;

    Utils.assert(this.avType, 'Media: Invalid avType: ' + this.avType, true);
    Utils.assert(
      this.consumptionMode, 'Media: Invalid consumptionMode: ' +
      this.consumptionMode, true
    );

    //Create all Media Id Objects
    this.serviceIdObject = new MediaId(Enums.MediaIdType.SERVICE, true);
    this.versionIdObject = new MediaId(Enums.MediaIdType.VERSION, true);
    this.clipIdObject = new MediaId(Enums.MediaIdType.CLIP, true);
    this.episodeIdObject = new MediaId(Enums.MediaIdType.EPISODE, true);
    this.vpIdObject = new MediaId(Enums.MediaIdType.VPID, true);
    this.nonPipsContentIdObject = new MediaId(Enums.MediaIdType.NONPIPSCONTENT, false);
    this.producerObject = new MediaId(Enums.MediaIdType.PRODUCER, false);
    this.brandIdObject = new MediaId(Enums.MediaIdType.BRAND, false);
    this.seriesIdObject = new MediaId(Enums.MediaIdType.SERIES, false);

    this.length = 0;

    // Optional Values
    this.bufferLength = 0;
    this.supplier = null;
    this.mediaSet = null;
    this.transferFormat = null;

    // flag to check if this media object has been enriched by ESS. a null value
    // means that this media object has not gone through the live broker, so it
    // is always safer to assert equality (===) when you want to check that the
    // media has gone through the live broker *and* whether it has been enriched
    this.essEnrichedData = false;

    // whether or not the media is currently playing
    this._isPlaying = false;

    // whether or not the media is currently buffering (for ATI)
    this._isBuffering = false;

    this._isEmbedded = false;

    //set producer to be default of current page

    this.name = '';
    this.type = Enums.MediaClipType.UNDEFINED;
    this.playlist = '';

    // Media theme 2
    this.initiationType = Enums.MediaInitiationType.UNDEFINED;
    this.adsEnabled = false;

    // Media theme 3
    this.mediaPlayerName = '';
    this.mediaPlayerVersion = '';
    this.transportMode = '';
  };

  /**
   * Check to see if this media object has been enriched by ESS.
   *
   * @returns {Boolean}
   */
  Media.prototype.isEssEnriched = function() {
    return this.essEnrichedData === true;
  };

  /**
   * Set whether this media object has been enriched by ESS.
   *
   * @param {Boolean} isEnriched
   */
  Media.prototype.setEssEnriched = function(isEnriched) {
    this.essEnrichedData = isEnriched;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getAvType
   *
   * @returns {AvType} The av type for the Media Object
   */
  Media.prototype.getAvType = function() {
    return this.avType;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getMediaConsumptionMode
   *
   * @returns {MediaConsumptionMode} The consumption mode for the Media Object
   */
  Media.prototype.getMediaConsumptionMode = function() {
    return this.consumptionMode;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getClone
   *
   * @returns {Media} A new Media object which is an exact clone of
   * itself
   */
  Media.prototype.getClone = function() {
    var clonedMedia = new Media(this.avType, this.consumptionMode);

    //Create all Media Id Objects
    clonedMedia.brandIdObject = this.brandIdObject;
    clonedMedia.seriesIdObject = this.seriesIdObject;
    clonedMedia.serviceIdObject = this.serviceIdObject;
    clonedMedia.versionIdObject = this.versionIdObject;
    clonedMedia.clipIdObject = this.clipIdObject;
    clonedMedia.episodeIdObject = this.episodeIdObject;
    clonedMedia.vpIdObject = this.vpIdObject;
    clonedMedia.name = this.name;
    clonedMedia.type = this.type;
    clonedMedia.playlist = this.playlist;
    clonedMedia.initiationType = this.initiationType;
    clonedMedia.adsEnabled = this.adsEnabled;
    clonedMedia.mediaPlayerVersion = this.mediaPlayerVersion;
    clonedMedia.mediaPlayerName = this.mediaPlayerName;
    clonedMedia.transportMode = this.transportMode;
    clonedMedia.nonPipsContentIdObject = this.nonPipsContentIdObject;
    clonedMedia.producerObject = this.producerObject;
    clonedMedia.bufferLength = this.bufferLength;
    clonedMedia.mediaSet = this.mediaSet;
    clonedMedia.supplier = this.supplier;
    clonedMedia.transferFormat = this.transferFormat;
    clonedMedia.length = this.length;

    clonedMedia.essEnrichedData = this.essEnrichedData;

    return clonedMedia;
  };

  // ** Object ID Setters ** //

  Media.prototype.isEmbedded = function() {
    return this._isEmbedded;
  };

  Media.prototype.setIsEmbedded = function(value) {
    this._isEmbedded = value;
    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method setVersionId
   *
   * @description sets the value of the version id for the piece of media
   * @param {string} value The version id value
   * @returns {this} `this`
   */
  Media.prototype.setVersionId = function(value) {
    this.versionIdObject.setValue(value);
    return this;
  };

  Media.prototype.setBrandId = function(value) {
    this.brandIdObject.setValue(LabelCleanser.cleanLabelValue(LabelKeys.MEDIA_BRAND, value));
    return this;
  };

  Media.prototype.setSeriesId = function(value) {
    this.seriesIdObject.setValue(LabelCleanser.cleanLabelValue(LabelKeys.MEDIA_SERIES, value));
    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method setClipId
   *
   * @description sets the value of the clip id for
   * the piece of media
   * @param {string} value The clip id value
   * @returns {this} `this`
   */
  Media.prototype.setClipId = function(value) {
    this.clipIdObject.setValue(value);
    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method setServiceId
   *
   * @description sets the value of the service id for
   * the piece of media
   * @param {string} value The service id value
   * @returns {this} `this`
   */
  Media.prototype.setServiceId = function(value) {
    this.serviceIdObject.setValue(value);
    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method setEpisodeId
   *
   * @description sets the value of the episode id for
   * the piece of media
   * @param {string} value The episode id value
   * @returns {this} `this`
   */
  Media.prototype.setEpisodeId = function(value) {
    this.episodeIdObject.setValue(value);
    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method setVpId
   *
   * @description sets the value of the vp id for
   * the piece of media
   * @param {string} value The length of the media content (in ms)
   * @returns {this} `this`
   */
  Media.prototype.setVpId = function(value) {
    this.vpIdObject.setValue(value);
    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method setNonPipsContentId
   *
   * @description sets the value of the non pips content id for
   * the piece of media
   * @param {string} value
   * @returns {this} `this`
   */
  Media.prototype.setNonPipsContentId = function(value) {
    this.nonPipsContentIdObject.setValue(LabelCleanser.cleanLabelValue(CSLabelKeys.MEDIA_NON_PIPS_CONTENT_ID, value));
    return this;
  };

  Media.prototype.getSupplier = function () {
    return this.supplier;
  };

  /**
   * Indicate the supplier of the media.
   * Calling this method is optional but products are advised to do so
   * if the information is available to improve analytics insights.
   *
   * @param {String} supplier The supplier of the media
   */
  Media.prototype.setSupplier = function (supplier) {
    if (supplier !== null) {
      var s = Utils.trim(supplier);
      if (s.length !== 0) {
        this.supplier = s;
      }
    }

    return this;
  };

  Media.prototype.getMediaSet = function () {
    return this.mediaSet;
  };

  /**
   * Indicate the mediaset of the media.
   * Calling this method is optional but products are advised to do so
   * if the information is available to improve analytics insights.
   *
   * @param {String} mediaSet The mediaset of the media
   */
  Media.prototype.setMediaSet = function (mediaSet) {
    if (mediaSet !== null) {
      var s = Utils.trim(mediaSet);
      if (s.length !== 0) {
        this.mediaSet = s;
      }
    }

    return this;
  };

  Media.prototype.getTransferFormat = function () {
    return this.transferFormat;
  };

  /**
   * Indicate the transfer format of the media.
   * Calling this method is optional but products are advised to do so
   * if the information is available to improve analytics insights.
   *
   * @param {String} transferFormat The transfer format of the media
   */
  Media.prototype.setTransferFormat = function (transferFormat) {
    if (transferFormat !== null) {
      var s = Utils.trim(transferFormat);
      if (s.length !== 0) {
        this.transferFormat = s;
      }
    }

    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method isAdsEnabled
   *
   * @description Convenience helper method to determine if ads are enabled
   *
   * @returns {bool}
   */
  Media.prototype.isAdsEnabled = function() {
    return this.adsEnabled;
  };

  Media.prototype.setAdsEnabled = function(value) {
    this.adsEnabled = value;
    return this;
  };

  Media.prototype.getName = function () {
    return this.name;
  };

  Media.prototype.setName = function(value) {
    this.name = value;
    return this;
  };

  Media.prototype.getType = function () {
    return this.type;
  };

  Media.prototype.setType = function(value) {
    this.type = value;
    return this;
  };

  Media.prototype.getPlaylist = function () {
    return this.playlist;
  };

  Media.prototype.setPlaylist = function(value) {
    this.playlist = value;
    return this;
  };

  Media.prototype.getInitiationType = function () {
    return this.initiationType;
  };

  Media.prototype.setInitiationType = function(value) {
    this.initiationType = value;
    return this;
  };

  Media.prototype.getMediaPlayerName = function () {
    return this.mediaPlayerName;
  };

  Media.prototype.setMediaPlayerName = function(value) {
    this.mediaPlayerName = value;
    return this;
  };

  Media.prototype.getMediaPlayerVersion = function () {
    return this.mediaPlayerVersion;
  };

  Media.prototype.setMediaPlayerVersion = function(value) {
    this.mediaPlayerVersion = value;
    return this;
  };

  Media.prototype.getTransportMode = function () {
    return this.transportMode;
  };

  Media.prototype.setTransportMode = function(value) {
    this.transportMode = value;
    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getLength
   *
   * @returns {Number} The media length value
   */
  Media.prototype.getLength = function() {
    return this.length;
  };

  /**
   * @memberOf Media
   * @instance
   * @method setLength
   *
   * @description Set the length of the media. This attribute can also be set on
   * the EchoClient instance after calling `setMedia()` with the
   *`setMediaLength()` method.
   *
   * @param {Number} _length The length of the media content (in ms)
   * @returns {Media} `this`
   */
  Media.prototype.setLength = function(value) {

    if (value !== undefined && value !== null) {
      value = Math.floor(value);
    }

    if (value === undefined || isNaN(value) || !isFinite(value) || value < 0) {
      DEBUG.warn('Media: length must be an integer of 0 or greater. Echo will report as 0.');
      value = 0;
    }

    this.length = value;

    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getProducer
   *
   * @returns {string} The media producer
   */
  Media.prototype.getProducer = function() {
    return this.producerObject.getValue();
  };

  /**
   * @memberOf Media
   * @instance
   * @method producer
   *
   * @description sets the value of the Producer for the piece of media
   * @param {string} producerCode
   * @returns {this} `this`
   */
  Media.prototype.setProducer = function(producerCode) {
    var producerId;

    if (producerCode) {
      producerId = Producers.getId(producerCode);
    } else {
      // The producer ID should be set to 0 so that it is removed by ATI
      producerId = '0';
    }

    if (producerId) {
      this.producerObject.setValue(producerId);
    }

    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method setProducerById
   *
   * @description sets the value of the Producer for the piece of media
   * @param {Number} producerId
   * @returns {this} `this`
   */
  Media.prototype.setProducerById = function(producerId) {
    if (producerId) {
      this.producerObject.setValue(producerId);
    }

    return this;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getVersionIdObject
   *
   * @returns {MediaId} The VersionId object
   */
  Media.prototype.getVersionIdObject = function() {
    return this.versionIdObject;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getClipIdObject
   *
   * @returns {MediaId} The ClipId object
   */
  Media.prototype.getClipIdObject = function() {
    return this.clipIdObject;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getServiceIdObject
   *
   * @returns {MediaId} The ServiceId object
   */
  Media.prototype.getServiceIdObject = function() {

    return this.serviceIdObject;

  };

  /**
   * @memberOf Media
   * @instance
   * @method getEpisodeIdObject
   *
   * @returns {MediaId} The EpisodeId object
   */
  Media.prototype.getEpisodeIdObject = function() {
    return this.episodeIdObject;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getVpIdObject
   *
   * @returns {MediaId} The VpId object
   */
  Media.prototype.getVpIdObject = function() {
    return this.vpIdObject;
  };

  /**
   * @memberOf Media
   * @instance
   * @method getNonPipsContentIdObject
   *
   * @returns {MediaId} The NonPipsContentId object
   */
  Media.prototype.getNonPipsContentIdObject = function() {
    return this.nonPipsContentIdObject;
  };

  Media.prototype.getBrandIdObject = function() {
    return this.brandIdObject;
  };

  Media.prototype.getBrandId = function() {
    return this.brandIdObject.getValue();
  };

  Media.prototype.getSeriesIdObject = function() {
    return this.seriesIdObject;
  };

  Media.prototype.getSeriesId = function() {
    return this.seriesIdObject.getValue();
  };

  /**
   * @memberOf Media
   * @instance
   * @method getVersionId
   *
   * @returns {string} The VersionId value
   */
  Media.prototype.getVersionId = function() {
    return this.versionIdObject.getValue();
  };

  /**
   * @memberOf Media
   * @instance
   * @method getClipId
   *
   * @returns {string} The ClipId value
   */
  Media.prototype.getClipId = function() {
    return this.clipIdObject.getValue();
  };

  /**
   * @memberOf Media
   * @instance
   * @method getServiceId
   *
   * @returns {string} The ServiceId value
   */
  Media.prototype.getServiceId = function() {
    return this.serviceIdObject.getValue();
  };

  /**
   * @memberOf Media
   * @instance
   * @method getEpisodeId
   *
   * @returns {string} The EpisodeId value
   */
  Media.prototype.getEpisodeId = function() {
    return this.episodeIdObject.getValue();
  };

  /**
   * @memberOf Media
   * @instance
   * @method getVpId
   *
   * @returns {string} The getVpId value
   */
  Media.prototype.getVpId = function() {
    return this.vpIdObject.getValue();
  };

  /**
   * @memberOf Media
   * @instance
   * @method getNonPipsContentId
   *
   * @returns {string} The getNonPipsContentId value
   */
  Media.prototype.getNonPipsContentId = function() {
    return this.nonPipsContentIdObject.getValue();
  };

  /**
   * @memberOf Media
   * @instance
   * @method getRetrievalType
   *
   * @returns {EchoRetrievalType} The retrieval type (Download or Stream)
   * or null if consumption mode is invalid
   */
  Media.prototype.getRetrievalType = function() {
    if (this.consumptionMode === null) {
      return null;
    } else {
      var retrievalType = (this.consumptionMode === CONSUMPTION_MODE.DOWNLOAD) ?
        Enums.RetrievalType.DOWNLOAD : Enums.RetrievalType.STREAM;

      return retrievalType;
    }
  };

  /**
   * @memberOf Media
   * @instance
   * @method isOnDemand
   *
   * @description Convenience helper method to determine
   * if media is onDemand
   *
   * @returns {bool}
   */
  Media.prototype.isOnDemand = function() {
    return this.consumptionMode === CONSUMPTION_MODE.ON_DEMAND;
  };

  /**
   * @memberOf Media
   * @instance
   * @method isDownload
   *
   * @description Convenience helper method to determine
   * if media is downloaded
   *
   * @returns {bool}
   */
  Media.prototype.isDownload = function() {
    return this.consumptionMode === CONSUMPTION_MODE.DOWNLOAD;
  };

  /**
   * @memberOf Media
   * @instance
   * @method isLive
   *
   * @description Convenience helper method to determine
   * if media is Live
   *
   * @returns {bool}
   */
  Media.prototype.isLive = function() {
    return this.consumptionMode === CONSUMPTION_MODE.LIVE;
  };

  /**
   * @memberOf Media
   * @instance
   * @method isVideo
   *
   * @description Convenience helper method to determine
   * if media is a video
   *
   * @returns {bool}
   */
  Media.prototype.isVideo = function() {
    return this.avType === Enums.AvType.VIDEO;
  };

  Media.prototype.getPlayerId = function() {
    return '1';
  };

  Media.prototype.setPlaying = function(isPlaying) {
    this._isPlaying = Boolean(isPlaying);

    return this;
  };

  Media.prototype.getPlaying = function() {
    return this._isPlaying;
  };

  Media.prototype.setBuffering = function(isBuffering) {
    this._isBuffering = Boolean(isBuffering);

    return this;
  };

  Media.prototype.getBuffering = function() {
    return this._isBuffering;
  };

  return Media;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/meta.js":
/***/ (function(module, exports, __webpack_require__) {

/* Meta information about echo */
!(module.exports = {
  NAME: 'echo_js',
  VERSION: '12.3.0'
});


/***/ }),

/***/ "./src/echo/on-demand-broker.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__("./src/echo/playhead.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Playhead) {

  'use strict';

  var UPDATE_INTERVAL = 1000;
  var POSITION_DRIFT_TOLERANCE = 1500;
  var CLOCK_JUMP_TOLERANCE = 1500;

  /**
   * @param {Object} playerDelegate
   * @constructor
   */
  function OnDemandBroker(playerDelegate, media, echoClient) {
    this._playerDelegate = playerDelegate;
    this._media = media;
    this._echoClient = echoClient;
    this._playhead = new Playhead();
    this._isStarted = false;
    this._interval = null;
    this._playerDelegatePosition = 0;
    this._playingTime = 0;
    this._currentIntervalMaxPosition = 0;
    this._hb3NotSentYet = true;
    this._hb5NotSentYet = true;
    this._previousPlayingTime = 0;
  }

  /**
   * Set the playhead.
   */
  OnDemandBroker.prototype.setPlayhead = function(playhead) {
    this._playhead = playhead;
  };

  /**
   * Start up the broker
   */
  OnDemandBroker.prototype.start = function() {

    var self = this;

    if (this._isStarted) {
      return;
    }

    this._interval = setInterval(function() {
      self._update();
    }, UPDATE_INTERVAL);

    this._isStarted = true;
    this._playhead.start();
  };

  /**
   * Stop the broker
   */
  OnDemandBroker.prototype.stop = function() {
    clearInterval(this._interval);
    this._playhead.stop();

    this._isStarted = false;
  };

  /**
   * Set the current position in ms.
   *
   * Should be called inside an EchoClient av Event that
   * accepts a position eg avPlay, avPause, avSeek etc.
   *
   * @param {Number} position
   */
  OnDemandBroker.prototype.setPosition = function(position) {
    if (
      (typeof position === 'number') &&
      position >= 0 &&
      !this.arePositionsWithinTolerance(this.getPosition(), position)
    ) {
      this._playerDelegatePosition = position;
      this._playingTime += this._playhead.getPosition();
      this._restartPlayhead();
      this._currentIntervalMaxPosition = position;
    }
  };

  /**
   * Get the maximum position sampled from the player delegate in
   * the current interval.
   *
   * @return {Number}
   */
  OnDemandBroker.prototype.getCurrentIntervalMaxPosition = function() {
    return this._currentIntervalMaxPosition;
  };

  /**
   * Check to see if the broadcast has changed based on the current player time.
   *
   * @private
   */
  OnDemandBroker.prototype._update = function() {
    var playerDelegatePosition = parseInt(this._playerDelegate.getPosition(), 10);
    var position = this.getPosition();
    var playingTime = this._playingTime + this._playhead.getPosition();
    var playingTimeDiff = Math.abs(playingTime - (this._previousPlayingTime || playingTime));
    this._previousPlayingTime = playingTime;

    if ((typeof playerDelegatePosition === 'number') &&
        playerDelegatePosition !== this._playerDelegatePosition &&
        playerDelegatePosition > 0
    ) {
      if (
        this._playerDelegatePosition === 0 ||
        !this.arePositionsWithinTolerance(
          playerDelegatePosition, position
        )
      ) {
        this._playerDelegatePosition = playerDelegatePosition;
        position = this._playerDelegatePosition;
        this._restartPlayhead();
      }
    }

    if (position > this._currentIntervalMaxPosition) {
      this._currentIntervalMaxPosition = position;
    }

    // send 3 second heartbeat
    if (playingTime >= 3000 && this._hb3NotSentYet && playingTimeDiff < CLOCK_JUMP_TOLERANCE) {
      this._echoClient.avUserActionEvent('echo_hb', 'echo_hb_3', position);
      this._hb3NotSentYet = false;
    }

    // send 5 second heartbeat
    if (playingTime >= 5000 && this._hb5NotSentYet && playingTimeDiff < CLOCK_JUMP_TOLERANCE) {
      this._echoClient.avUserActionEvent('echo_hb', 'echo_hb_5', position);
      this._hb5NotSentYet = false;
    }

    if (this._media.length > 0 && position >= this._media.length) {
      this._echoClient.avPauseEvent(this._media.length, {
        echo_pause_at_media_length: 1
      });
    }

  };

  /**
   * Convenience method for reseting and playing the playhead.
   *
   * @private
   */
  OnDemandBroker.prototype._restartPlayhead = function() {
    this._playhead.reset();
    this._playhead.start();
  };

  /**
   * Represents the true position a player is at within a piece of media.
   *
   * @returns {Number}
   */
  OnDemandBroker.prototype.getPosition = function() {
    var playheadPosition = this._playhead.getPosition();
    var position =  this._playerDelegatePosition + playheadPosition;
    return position;
  };

  /**
   * Represents the timestamp a player is at within a piece of media.
   *
   * @returns {Number}
   */
  OnDemandBroker.prototype.getTimestamp = function() {
    return 0;
  };

  /**
   * Are two positions within allowable tolerance
   *
   * @private
   */
  OnDemandBroker.prototype.arePositionsWithinTolerance = function(position1, position2) {
    var positionDelta = position1 - position2;
    return positionDelta >= -POSITION_DRIFT_TOLERANCE &&
      positionDelta <= POSITION_DRIFT_TOLERANCE;
  };

  return OnDemandBroker;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/playhead.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

  'use strict';

  function Playhead() {
    this.reset();
  }

  /**
   * Start
   */
  Playhead.prototype.start = function() {

    if (this._isPlaying === true) {
      return;
    }

    this._isPlaying = true;
    this._startTime = this._getCurrentTime();
  };

  /**
   * Stop and reset the timer.
   */
  Playhead.prototype.reset = function() {

    this._isPlaying = false;
    this._position = 0;
    this._startTime = 0;
  };

  /**
   * Simulate a pause in time.
   */
  Playhead.prototype.stop = function() {

    if (!this._isPlaying) {
      return;
    }

    this._isPlaying = false;
    this._position += this._getCurrentTime() - this._startTime;
    this._startTime = 0;
  };

  /**
   * @returns {Number} the current position
   */
  Playhead.prototype.getPosition = function() {

    var position = this._position;

    if (this._isPlaying === true) {
      position += this._getCurrentTime() - this._startTime;
    }

    return position;
  };

  /**
   * Get the current unix epoch time.
   *
   * @returns {Number} the time in milliseconds
   * @private
   */
  Playhead.prototype._getCurrentTime = function() {

    // Date.now not available in IE <= 8
    if (!Date.now) {
      Date.now = function() {
        return (new Date()).getTime();
      };
    }

    return Date.now();
  };

  return Playhead;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/schedule.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./src/echo/util/methods.js"), __webpack_require__("./src/echo/util/debug.js"), __webpack_require__("./src/echo/enumerations.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Utils, Debug, Enums) {

  'use strict';

  /**
   * Perform a lookup for the TV schedule for a specific service.
   *
   * @param {Media} media
   * @param {Environment} environment
   * @constructor
   */
  function Schedule(media, environment, echoClient) {

    this._schedule = [];
    this.serviceId = null;
    this._media = media;
    this._environment = environment;
    this._echoClient = echoClient;

    this._fetchData();
  }

  /**
   * Get the broadcast for the given timestamp.
   *
   * @param {Number} timestamp
   */
  Schedule.prototype.getBroadcast = function(timestamp) {

    var i;
    var item;

    for (i = 0; i < this._schedule.length; i++) {
      item = this._schedule[i].published_time;
      if ((timestamp < item.end) && (timestamp >= item.start)) {
        return this._schedule[i];
      }
    }
  };

  // static property to set the ESS host globally.
  Schedule.essHost = 'ess.api.bbci.co.uk';

  /**
   * @private
   */
  Schedule.prototype._fetchData = function() {

    var self = this;
    var executeCrossDomainGet;
    var protocol;
    executeCrossDomainGet = this._environment.getExecuteCrossDomainGet();
    protocol = this._environment.getProtocol();

    var url = protocol + Schedule.essHost.replace(/^(\/+)?/, '//') + '/schedules';

    if (!this._media) {
      return;
    }

    if (this._media.getServiceId()) {
      url += '?serviceId=' + encodeURIComponent(this._media.getServiceId());
    } else if (this._media.getVersionId()) {
      url += '?versionId=' + encodeURIComponent(this._media.getVersionId());
    } else if (this._media.getVpId()) {
      url += '?vpid=' + encodeURIComponent(this._media.getVpId());
    } else {
      Debug.info(
        'Unable to determine serviceId, versionId or VpId for schedule'
      );
      return;
    }

    executeCrossDomainGet(url, {
      onSuccess: function(data) {
        self._dataSuccessHandler(data);
      },
      onError: function(error, status) {
        var errorType = 'error';
        if (error === 'json') {
          errorType = 'json';
        } else if (typeof error === 'object' && error.type === 'timeout') {
          errorType = 'timeout';
        }

        self._dataErrorHandler(errorType, status);
      }
    });
  };

  /**
   * Indicates when the fetching of data has completed.
   *
   * @returns {Boolean}
   */
  Schedule.prototype.hasData = function() {
    return this._schedule.length > 0;
  };

  /**
   * @param {Object} data Json data string from ESS.
   * @private
   */
  Schedule.prototype._dataSuccessHandler = function(data) {

    var i;
    var items = [];
    var item;
    var start;
    var end;

    Debug.info('Cross-domain schedule request success.');

    if (data) {

      this._echoClient.setEssSuccess(true);

      this.serviceId = data.service.id;

      data.items = data.items || [];

      for (i = 0; i < data.items.length; i++) {
        start = data.items[i].published_time.start;
        end = data.items[i].published_time.end;

        item = data.items[i];
        item.published_time.start = (new Date(start)).getTime();
        item.published_time.end = (new Date(end)).getTime();
        items.push(item);
      }

      this._schedule = items;

    }
  };

  /**
   * @private
   */
  Schedule.prototype._dataErrorHandler = function(errorType, code) {
    this._schedule = [];
    Debug.error('There was a problem requesting the schedule from ESS: ' + errorType);

    this._echoClient.setEssSuccess(false);

    if (errorType === 'json') {
      this._echoClient.setEssError(Enums.EssError.JSON, code);
    } else if (errorType === 'timeout') {
      this._echoClient.setEssError(Enums.EssError.TIMEOUT, code);
    } else if (errorType === 'error' && code !== undefined) {
      this._echoClient.setEssError(Enums.EssError.STATUS_CODE, code);
    } else {
      this._echoClient.setEssError(Enums.EssError.RUNTIME, '0');
    }
  };

  return Schedule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/util/cleansing/label-cleanser.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var Util = __webpack_require__("./src/echo/util/methods.js");
  var DEBUG = __webpack_require__("./src/echo/util/debug.js");
  var Enums = __webpack_require__("./src/echo/enumerations.js");
  var LabelRules = __webpack_require__("./src/echo/util/cleansing/label-rules.js");

  var strictLabels = [
    'player_name', 'ns_st_ws', 'bbc_site', 'app_type', 'app_name',
    'bbc_store_pf', 'bbc_store_ed', 'bbc_store_fr', 'bbc_store_src'
  ];

  var sensitiveParams = ['token', 'guardianToken', 'nonce', 'dateOfBirthDay', 'dateOfBirthMonth', 'dateOfBirthYear', 'dateOfBirth', 'permissionToken'];

  var labelRuleMap = {
    name: LabelRules.COUNTERNAME
  };

  labelRuleMap[Enums.ManagedLabels.EVENT_MASTER_BRAND] =
    LabelRules.EVENT_MASTER_BRAND;

  // Initialise rule map for later use
  for (var i = 0; i < strictLabels.length; i++) {
    labelRuleMap[strictLabels[i]] = LabelRules.STRICT;
  }

  function _lookupRule(key) {
    if (labelRuleMap.hasOwnProperty(key)) {
      return labelRuleMap[key];
    }

    return LabelRules.CUSTOM;
  }

  /**
   * Cleans the label using base (event mb/label key) rules
   * @param {string} item - The label key/value to clean
   * @returns {string} a cleaned label key/value
   */
  function _cleanBase(item) {
    return item && item
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_') // Caret matches opposite
      .replace(/(^_+)|(_+$)/g, '');
  }

  /**
   * Cleans the key used for a particular label
   * @param {string} labelKey - The label key to clean
   * @returns {string} a cleaned label value
   */
  function cleanLabelKey(labelKey) {
    var newkey = _cleanBase(labelKey);

    Util.assert(labelKey === newkey,
      'Label key can only contain: [a-z0-9_], and no consecutive "_"s or ' +
      '"_" at the begining or end, got "' + labelKey +
      '". This will be sent as "' + newkey + '"', true);

    return newkey;
  }

  /**
   * Cleans the label using event master brand rules
   * @param {string} labelValue - The label value to clean
   * @returns {string} a cleaned label value
   */
  function _cleanEventMasterBrand(labelValue) {
    return _cleanBase(labelValue);
  }

  /**
   * Cleans the label using strict rules
   * @param {string} labelValue   - The label value to clean
   * @returns {string} a cleaned label value
   */
  function _cleanStrict(labelValue) {
    return labelValue && labelValue
      .toLowerCase()
      .replace(/(^\s+)|(\s+$)/g, '')
      .replace(/[^a-z0-9]+/g, '-') // Caret matches opposite
      .replace(/(^-+)|(-+$)/g, '');
  }

  /**
   * Cleans the label using custom rules
   * @param {string} labelValue   - The label value to clean
   * @returns {string} a cleaned label value
   */
  function _cleanCustom(labelValue) {
    return labelValue && labelValue
      .replace(/(^\s+)|(\s+$)/g, '')
      .replace(/\|/g, '!');
  }

  /**
   * Cleans the label using countername rules
   * @param {string} name - The countername to clean
   * @returns {string} a cleaned label value
   */
  function cleanCounterName(name) {
    var countername = name && name
      .toLowerCase()
      .replace(/[^a-z0-9\.]+/g, '_') // Caret matches opposite
      .replace(/\.+/g, '.')
      .replace(/(^_+)|(_+$)/g, '') || 'no.name.page';

    if (name !== countername) {
      if (
        name === null ||
        typeof name !== 'string' ||
        name.replace(/ */, '').length === 0
      ) {
        DEBUG.error('Countername must be a non-empty string');
      }

      // If there are dashes, print warning as it is actualy OK
      if (name && name.search(/-/) !== -1) {
        DEBUG.warn('Submitted countername ("' + name + '") contains at least ' +
          'one "-". Dashes are not permitted but, for legacy reasons, "-" ' +
          'and "_" are equivalent in DAx. Echo converts dashes to ' +
          'underscores, so the countername will be sent as "' +
          countername + '"');
      } else {
        DEBUG.warn('countername may only contain: [a-z0-9._], got "' +
          name + '". This will be cleaned up and sent as "' +
          countername + '"');
      }
    }

    // counternames must end in .page, silently add this
    if (countername.search(/\.page$/) === -1) {
      countername += '.page';
    }

    return countername;
  }

  /**
   * Helper method to determine rules and
   * clean label values based on set rules
   *
   * @param {string} labelKey   - The label key to help look up rules
   * @param {string} labelValue - The label value you need to clean
   * @returns {string} a cleaned label value
   */
  function cleanLabelValue(labelKey, labelValue) {
    var debugInfo = '';
    var newValue = labelValue;
    var cleanType = _lookupRule(labelKey);

    // Countername appends page
    if (cleanType === LabelRules.COUNTERNAME) {
      labelValue = cleanCounterName(labelValue);
    }

    if (typeof labelValue === 'number' || typeof labelValue === 'boolean') {
      return labelValue.toString();
    }

    // Block non-strings that don't co-erce to empty
    if (typeof labelValue !== 'string') {
      DEBUG.error('Label must have number, boolean or string value');
      return;
    }

    switch (cleanType) {
      case LabelRules.EVENT_MASTER_BRAND:
        debugInfo =  'Label value can only contain [0-9a-z], and ' +
          'no consecutive "_"s and no "_"s or whitespace at the start or end.';
        newValue = _cleanEventMasterBrand(labelValue);
        break;

      case LabelRules.STRICT:
        debugInfo = 'Strict Label values can only contain [ 0-9a-z-], and no ' +
          'consecutive "-"s and no "-"s or whitespace at the start or end.';
        newValue = _cleanStrict(labelValue);
        break;

      case LabelRules.NO_CLEANSING:
        break;

      default:
        debugInfo = 'Custom Label value cannot contain whitespace ' +
          'at start or end or pipes (|).';
        newValue = _cleanCustom(labelValue);
    }

    debugInfo += 'Got "' + labelValue + '", will be ' + 'replaced with "' + newValue + '"';
    Util.assert(labelValue === newValue, debugInfo, true);

    return newValue;
  }

  function cleanLanguage(value) { // Same as managed label except allows CAPS
    if (typeof value === 'number' || typeof value === 'boolean') {
      return value.toString();
    }

    var newVal = value && value
      .replace(/(^\s*)|(\s*$)/g, '')
      .replace(/[^0-9a-zA-Z._]+/g, '-')
      .replace(/(^-)|(-$)/g, '') || '';

    Util.assert(
      value === newVal,
      'Language label value can only contain [0-9a-zA-Z._-], and no ' +
      'consecutive "-"s and no - at the start or end. Got "' + value +
      '", will be replaced with "' + newVal + '"', true
    );

    return newVal;
  }

  /**
   * Cleans the string of any unauthorized characters by removing leading and trailing whitespace characters,
   * removing square brackets and replacing one or more consecutive whitespace characters with a single
   * underscore character.
   * @param {string} value
   * @returns {string} a cleaned label value
   */
  function cleanCustomVariable(value) {
    return value && value

      // Strip leading and trailing whitespace
      .trim()

      // Strip square brackets
      .replace(/\[|\]/g, '')

      // Replace & with $
      .replace(/&/g, '$')

      // Replace consecutive whitespace characters with a single space
      .replace(/\s{1,}/g, ' ');
  }

  function cleanLabels(labels) {
    var newLabels = {};
    var newKey;

    for (var key in labels) {
      newKey = cleanLabelKey(key);
      newLabels[newKey] = cleanLabelValue(newKey, labels[key]);
    }

    return newLabels;
  }

  /**
   * Removes potentially senstive information from URL parameters in a custom variable.
   * Must be called before cleanCustomVariable.
   * @param {string} value
   * @returns {string} a string with any sensitive url params obfuscated
   */
  function removeSensitiveInfo(value) {
    if (value && typeof value === 'string') {
      for (i = 0; i < sensitiveParams.length; i++) {
        var regex = new RegExp(sensitiveParams[i] + '=[^\&]*', 'g');
        value = value.replace(regex, sensitiveParams[i] + '=XXXX');
      }
    }

    return value;
  }

  return {
    cleanCounterName: cleanCounterName,
    cleanLabelKey: cleanLabelKey,
    cleanLabelValue: cleanLabelValue,
    cleanLanguage: cleanLanguage,
    cleanLabels: cleanLabels,
    cleanCustomVariable: cleanCustomVariable,
    removeSensitiveInfo: removeSensitiveInfo
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/util/cleansing/label-rules.js":
/***/ (function(module, exports, __webpack_require__) {

!(module.exports = {
  STRICT: 'strict',
  COUNTERNAME: 'countername',
  EVENT_MASTER_BRAND: 'event_master_brand',
  NO_CLEANSING: 'no_cleansing',
  CUSTOM: 'custom'
});


/***/ }),

/***/ "./src/echo/util/cleansing/label-validator.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var Enums = __webpack_require__("./src/echo/enumerations.js");
  var Utils = __webpack_require__("./src/echo/util/methods.js");

  function isValidManagedLabel(label, value) {
    // validate store labels
    switch (label) {
      case Enums.ManagedLabels.IPLAYER_STATE:
        if (value !== 'purchased' && value !== 'free') {
          return false;
        }

        break;

      case Enums.ManagedLabels.STORE_ED_TYPE:
        if (value !== 'archive' && value !== 'standard') {
          return false;
        }

        break;

      case Enums.ManagedLabels.IPLAYER_AVAIL:
        if (value !== 'avail' && value !== 'unavail' && value !== 'soon') {
          return false;
        }

        break;

      case Enums.ManagedLabels.STORE_REFERRAL:
        if (value !== 'iplayer' && value !== 'store') {
          return false;
        }

        break;

      case Enums.ManagedLabels.BBC_HASHED_ID:
        if (typeof value !== 'string' || Utils.trim(value).length === 0) {
          return false;
        }

        break;
    }

    return true;
  }

  return {
    isValidManagedLabel: isValidManagedLabel
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/util/cookies.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  'use strict';

  /**
   * CookiesModule is a helper module to obtain cookie values from the
   * stored cookie string on the window.document
   *
   * @type {{getCookieValueByName: getCookieValueByName}}
   */
  var CookiesModule = {

    /**
     *
     * @function getCookieValueByName
     * @description - helper function to get the cookie
     * value from the Browser's cookies
     *
     * name - name of cookie you require the value off
     * _window - Browser Window (optional parameter)
     * @returns {string} - The cookie value requested or
     * null if does not exist
     */
    getCookieValueByName: function(name, _window) {
      var win = _window || window;
      var cookieName = name + '=';
      var document = win.document;
      var cookiesArray = {};

      if (typeof document === 'undefined' || typeof document.cookie !== 'string') {
        return null;
      } else {
        cookiesArray = document.cookie.split(';');
      }

      for (var i = 0, length = cookiesArray.length; i < length; i++) {
        var cookie = cookiesArray[i];

        if (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
        }

        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }

      return null;
    }
  };

  return CookiesModule;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/util/debug.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Simply wraps and 'console.x' method into a module
 * this way any 'console' functionality can be used without
 * worrying about cases where the 'console' object is undefined
 */

/**
 * Module used to print debug/error statements to the console.
 * Exports a method "enable"
 * @exports Echo/Debug
 * @example
 * Echo.Debug.enable();
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) { // jshint ignore:line
  'use strict';
  var ENABLED = false; // Is DEBUG enabled?

  /**
   * Returns a function calling the console
   * method sent as a argument. Passes any arguments
   * from the final calling method onto the console.
   */
  function callConsole(method, message) {
    if (typeof console === 'object' && typeof console[method] === 'function') {
      console[method](message);
    }

  }

  /**
   * Enable debug mode. Calling this method will result in errors
   * encountered by Echo (due to bad config/use) to be printed
   * to the console. The default behaviour is to silently fail.
   */
  function enable() {
    ENABLED = true;
  }

  function disable() {
    ENABLED = false;
  }

  function getState() {
    return ENABLED;
  }

  function info(message) {
    if (ENABLED) {
      callConsole('log', message);
    }
  }

  function error(message) {
    if (ENABLED) {
      throw new Error('ECHO_DEBUG: ' + message);
    }
  }

  // Map warn to info to keep backward compatibility
  return {
    enable: enable,
    disable: disable,
    getState: getState,
    info: info,
    warn: info,
    error: error
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/util/library-info.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var packageJson = __webpack_require__("./package.json");

  var LIBRARY_VERSION = packageJson.version;
  var LIRBARY_NAME = 'echo_js';

  var libraryInfo = {

    getLibraryName: function() {
      return LIRBARY_NAME;
    },

    getLibraryVersion: function() {
      return LIBRARY_VERSION;
    }
  };

  return libraryInfo;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/util/methods.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  'use strict';

  var DEBUG = __webpack_require__("./src/echo/util/debug.js");

  // Just copy an object
  function clone(obj) {
    var ret = {};

    for (var p in obj) {
      try {
        if (obj[p].constructor === Object) {
          ret[p] = clone(obj[p]);
        } else {
          ret[p] = obj[p];
        }
      } catch (e) {
        ret[p] = obj[p];
      }
    }

    return ret;
  }

  function combineObjects(obj1, obj2, noclone) {
    var base = noclone ? obj1 : clone(obj1);
    for (var p in obj2) {
      try {
        if (obj2[p].constructor === Object) {
          base[p] = combineObjects(base[p], obj2[p]);
        } else {
          base[p] = obj2[p];
        }
      } catch (e) {
        base[p] = obj2[p];
      }
    }

    return base;
  }

  function containsValue(obj, val) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop) && obj[prop] === val) {
        return true;
      }
    }

    return false;
  }

  function extend(obj, fresh) {
    // If fresh, clone it dont alter it
    var o = (fresh ? clone(obj) : obj) || {};
    var args = arguments;

    for (var i = 2, t = args.length; i < t; i++) {
      if (typeof args[i] === 'object') {
        combineObjects(o, args[i], true);
      } else {
        o[args[i]] = args[++i];
      }
    }

    return o;
  }

  function addKV(obj, a, b) {
    if (b) {
      return extend(obj, true, a, b);
    } else {
      return extend(obj, true, a);
    }
  }

  /**
   * Checks a condition and DEBUGs an error
   * if it fails. returns the result
   */
  function assert(test, message, warn) {
    if (!test) {
      if (warn) {
        DEBUG.warn('AssertionFailed: ' + message);
      } else {
        DEBUG.error('AssertionFailed: ' + message);
      }
    }

    return test;
  }

  /**
   * Checks that an object contains a value and DEBUGs
   * an error if not. Returns the result
   */
  function assertContainsValue(object, value, message) {
    return assert(containsValue(object, value), message);
  }

  /**
   * Use native trim() if supported, else use regexp
   * String.trim() was added in ECMAScript 5.1 and is not available in older browsers (e.g. IE8)
   */

  function trim(value) {
    if (typeof value === 'string') {
      if (String.prototype.trim) {
        value = value.trim();
      } else {
        value = value.replace(/^\s+|\s+$/g, '');
      }

      return value;
    }
  }

  return {
    clone: clone,
    combineObjects: combineObjects,
    addKV: addKV,
    containsValue: containsValue,
    extend: extend,
    assert: assert,
    assertContainsValue: assertContainsValue,
    trim: trim
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/echo/util/networking.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

  'use strict';

  var xhrTimeout = 10000;

  /**
   * Perform a http get
   *
   * @param {String} url
   * @param {Function} onSuccess
   * @param {Function} onError
   */
  function httpGet(url, onSuccess, onError) {
    var img = new Image();
    img.onload = onSuccess;
    img.onerror = onError;
    img.src = url;
  }

  /**
   * Perform a cross domain http get (CORS only).
   *
   * @param {String} url
   * @param {Object} callbacks Object containing callbacks
   * @param {Function} [callbacks.onSuccess] Will be called with the
   * decoded JSON object if the call is successful.
   * @param {Function} [callbacks.onError] Will be called with error text,
   * and HTTP status for CORS requests, if the calls fails.
   */
  function executeCrossDomainGet(url, callbacks) {
    var xhr;
    var isAbort;
    var deviceSupportsCrossDomainGetAndJsonParse;
    isAbort = false;
    deviceSupportsCrossDomainGetAndJsonParse = false;

    var abort = function() {
      isAbort = true;
      xhr.onload = xhr.onerror  = xhr.onreadystatechange = null;
      xhr.abort();
    };

    var onError = function(error, status) {
      if (callbacks.onError) {
        callbacks.onError(error, status);
      }
    };

    var handleFirefoxAccessException = function(firefoxAccessException) {
      if (!isAbort) {
        onError(firefoxAccessException);
      }
    };

    var handleResponse = function() {
      var responseData;
      if (callbacks.onSuccess) {
        try {
          responseData = window.JSON.parse(xhr.responseText);
        } catch (error) {
          onError('json');
        }

        if (typeof responseData === 'object') {
          setTimeout(function() {
            callbacks.onSuccess(responseData);
          });
        }
      }
    };

    if (
      window.JSON && window.JSON.parse &&
      typeof window.XMLHttpRequest !== 'undefined'
    ) {
      xhr = new XMLHttpRequest();
      if ('withCredentials' in xhr) {
        deviceSupportsCrossDomainGetAndJsonParse = true;
      }
    }

    if (!deviceSupportsCrossDomainGetAndJsonParse) {
      onError();
      return;
    }

    try {
      xhr.open('GET', url, true);
      xhr.onload = function() {
        if (
          (
            typeof xhr.status === 'undefined' ||
            xhr.status < 400
          ) && xhr.responseText !== null
        ) {
          handleResponse();
        } else {
          onError(xhr.responseText, xhr.status);
        }
      };

      xhr.onerror = function(error) {
        onError(error);
      };

      xhr.timeout = xhrTimeout;
      xhr.ontimeout = function(error) {
        onError(error);
      };

    } catch (firefoxAccessException) {
      handleFirefoxAccessException(firefoxAccessException);
    }

    try {
      xhr.send(null);
    } catch (error) {
      abort();
      onError(error);
    }
  }

  return {
    httpGet: httpGet,
    executeCrossDomainGet: executeCrossDomainGet
  };

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/echo.js");


/***/ })

/******/ });
});