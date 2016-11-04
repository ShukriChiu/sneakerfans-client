document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vue_min$1 = createCommonjsModule(function (module, exports) {
/*!
 * Vue.js v2.0.3
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t();}(commonjsGlobal,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++){ n[r[i]]=!0; }return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1){ return e.splice(n,1) }}}function i(e,t){return _r.call(e,t)}function a(e){return"string"==typeof e||"number"==typeof e}function o(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;){ r[n]=e[n+t]; }return r}function u(e,t){for(var n in t){ e[n]=t[n]; }return e}function l(e){return null!==e&&"object"==typeof e}function f(e){return kr.call(e)===Ar}function d(e){for(var t={},n=0;n<e.length;n++){ e[n]&&u(t,e[n]); }return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){return e==t||!(!l(e)||!l(t))&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++){ if(h(e[n],t)){ return n; } }return-1}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0});}function _(e){if(!Sr.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e){ return; }e=e[t[n]];}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){Hr.target&&Ur.push(Hr.target),Hr.target=e;}function w(){Hr.target=Ur.pop();}function C(){zr.length=0,Vr={},Jr=qr=!1;}function x(){for(qr=!0,zr.sort(function(e,t){return e.id-t.id}),Kr=0;Kr<zr.length;Kr++){var e=zr[Kr],t=e.id;Vr[t]=null,e.run();}Ir&&Tr.devtools&&Ir.emit("flush"),C();}function k(e){var t=e.id;if(null==Vr[t]){if(Vr[t]=!0,qr){for(var n=zr.length-1;n>=0&&zr[n].id>e.id;){ n--; }zr.splice(Math.max(n,Kr)+1,0,e);}else { zr.push(e); }Jr||(Jr=!0,Br(x));}}function A(e,t){var n,r;t||(t=Gr,t.clear());var i=Array.isArray(e),a=l(e);if((i||a)&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o)){ return; }t.add(o);}if(i){ for(n=e.length;n--;){ A(e[n],t); } }else if(a){ for(r=Object.keys(e),n=r.length;n--;){ A(e[r[n]],t); } }}}function O(e,t){e.__proto__=t;}function T(e,t,n){for(var r=0,i=n.length;r<i;r++){var a=n[r];y(e,a,t[a]);}}function S(e){if(l(e)){var t;return i(e,"__ob__")&&e.__ob__ instanceof ti?t=e.__ob__:ei.shouldConvert&&!Tr._isServer&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new ti(e)),t}}function E(e,t,n,r){var i=new Hr,a=Object.getOwnPropertyDescriptor(e,t);if(!a||a.configurable!==!1){var o=a&&a.get,s=a&&a.set,c=S(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=o?o.call(e):n;return Hr.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&N(t)),t},set:function(t){var r=o?o.call(e):n;t!==r&&(s?s.call(e,t):n=t,c=S(t),i.notify());}});}}function j(e,t,n){if(Array.isArray(e)){ return e.splice(t,1,n),n; }if(i(e,t)){ return void(e[t]=n); }var r=e.__ob__;if(!(e._isVue||r&&r.vmCount)){ return r?(E(r.value,t,n),r.dep.notify(),n):void(e[t]=n) }}function L(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify());}function N(e){for(var t=void 0,n=0,r=e.length;n<r;n++){ t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&N(t); }}function D(e){e._watchers=[],M(e),P(e),R(e),B(e),F(e);}function M(e){var t=e.$options.props;if(t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;ei.shouldConvert=i;for(var a=function(i){var a=r[i];E(e,a,Le(a,t,n,e));},o=0;o<r.length;o++){ a(o); }ei.shouldConvert=!0;}}function P(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,a=n.length;a--;){ r&&i(r,n[a])||z(e,n[a]); }S(t),t.__ob__&&t.__ob__.vmCount++;}function R(e){var t=e.$options.computed;if(t){ for(var n in t){var r=t[n];"function"==typeof r?(ni.get=I(r,e),ni.set=p):(ni.get=r.get?r.cache!==!1?I(r.get,e):s(r.get,e):p,ni.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,ni);} }}function I(e,t){var n=new Zr(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),Hr.target&&n.depend(),n.value}}function B(e){var t=e.$options.methods;if(t){ for(var n in t){ e[n]=null==t[n]?p:s(t[n],e); } }}function F(e){var t=e.$options.watch;if(t){ for(var n in t){var r=t[n];if(Array.isArray(r)){ for(var i=0;i<r.length;i++){ H(e,n,r[i]); } }else { H(e,n,r); }} }}function H(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r);}function U(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,"$data",t),e.prototype.$set=j,e.prototype.$delete=L,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new Zr(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown();}};}function z(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n;}});}function V(e){var t=new ri(e.tag,e.data,e.children,e.text,e.elm,e.ns,e.context,e.componentOptions);return t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function J(e){for(var t=new Array(e.length),n=0;n<e.length;n++){ t[n]=V(e[n]); }return t}function q(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var a=e[t];a?e[t]=function(){a.apply(this,arguments),n.apply(this,arguments);}:e[t]=n;}}function K(e,t,n,r,i){var a,o,s,c,u,l;for(a in e){ if(o=e[a],s=t[a],o){ if(s){if(o!==s){ if(Array.isArray(s)){s.length=o.length;for(var f=0;f<s.length;f++){ s[f]=o[f]; }e[a]=s;}else { s.fn=o,e[a]=s; } }}else { l="!"===a.charAt(0),u=l?a.slice(1):a,Array.isArray(o)?n(u,o.invoker=W(o),l):(o.invoker||(c=o,o=e[a]={},o.fn=c,o.invoker=Z(o)),n(u,o.invoker,l)); } }else{  } }for(a in t){ e[a]||(u="!"===a.charAt(0)?a.slice(1):a,r(u,t[a].invoker)); }}function W(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++){ r?e[i](t):e[i].apply(null,n); }}}function Z(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments);}}function G(e,t,n){if(a(e)){ return[Y(e)]; }if(Array.isArray(e)){for(var r=[],i=0,o=e.length;i<o;i++){var s=e[i],c=r[r.length-1];Array.isArray(s)?r.push.apply(r,G(s,t,(n||"")+"_"+i)):a(s)?c&&c.text?c.text+=String(s):""!==s&&r.push(Y(s)):s instanceof ri&&(s.text&&c&&c.text?c.text+=s.text:(t&&Q(s,t),s.tag&&null==s.key&&null!=n&&(s.key="__vlist"+n+"_"+i+"__"),r.push(s)));}return r}}function Y(e){return new ri(void 0,void 0,void 0,String(e))}function Q(e,t){if(e.tag&&!e.ns&&(e.ns=t,e.children)){ for(var n=0,r=e.children.length;n<r;n++){ Q(e.children[n],t); } }}function X(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function ee(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;){ n=n.$parent; }n.$children.push(e);}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1;}function te(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=ii),ne(n,"beforeMount"),n._watcher=new Zr(n,function(){n._update(n._render(),t);},p),t=!1,null==n.$vnode&&(n._isMounted=!0,ne(n,"mounted")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&ne(n,"beforeUpdate");var r=n.$el,i=ai;ai=n;var a=n._vnode;n._vnode=e,a?n.$el=n.__patch__(a,e):n.$el=n.__patch__(n.$el,e,t),ai=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&ne(n,"updated");},e.prototype._updateFromParent=function(e,t,n,r){var i=this,a=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$options._renderChildren=r,e&&i.$options.props){ei.shouldConvert=!1;for(var o=i.$options._propKeys||[],s=0;s<o.length;s++){var c=o[s];i[c]=Le(c,i.$options.props,e,i);}ei.shouldConvert=!0;}if(t){var u=i.$options._parentListeners;i.$options._parentListeners=t,i._updateListeners(t,u);}a&&(i.$slots=_e(r,i._renderContext),i.$forceUpdate());},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update();},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){ne(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;){ e._watchers[n].teardown(); }e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,ne(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null);}};}function ne(e,t){var n=e.$options[t];if(n){ for(var r=0,i=n.length;r<i;r++){ n[r].call(e); } }e.$emit("hook:"+t);}function re(e,t,n,r,i){if(e&&(l(e)&&(e=Ce.extend(e)),"function"==typeof e)){if(!e.cid){ if(e.resolved){ e=e.resolved; }else if(e=le(e,function(){n.$forceUpdate();}),!e){ return; } }t=t||{};var a=fe(t,e);if(e.options.functional){ return ie(e,a,t,n,r); }var o=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),pe(t);var s=e.options.name||i,c=new ri("vue-component-"+e.cid+(s?"-"+s:""),t,void 0,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:o,tag:i,children:r});return c}}function ie(e,t,n,r,i){var a={},o=e.options.props;if(o){ for(var c in o){ a[c]=Le(c,o,t); } }var u=e.options.render.call(null,s(he,{_self:Object.create(r)}),{props:a,data:n,parent:r,children:G(i),slots:function(){return _e(i,r)}});return u instanceof ri&&(u.functionalContext=r,n.slot&&((u.data||(u.data={})).slot=n.slot)),u}function ae(e,t){var n=e.componentOptions,r={_isComponent:!0,parent:t,propsData:n.propsData,_componentTag:n.tag,_parentVnode:e,_parentListeners:n.listeners,_renderChildren:n.children},i=e.data.inlineTemplate;return i&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns),new n.Ctor(r)}function oe(e,t){if(!e.child||e.child._isDestroyed){var n=e.child=ae(e,ai);n.$mount(t?e.elm:void 0,t);}}function se(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children);}function ce(e){e.child._isMounted||(e.child._isMounted=!0,ne(e.child,"mounted")),e.data.keepAlive&&(e.child._inactive=!1,ne(e.child,"activated"));}function ue(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,ne(e.child,"deactivated")):e.child.$destroy());}function le(e,t){if(!e.requested){e.requested=!0;var n=e.pendingCallbacks=[t],r=!0,i=function(t){if(l(t)&&(t=Ce.extend(t)),e.resolved=t,!r){ for(var i=0,a=n.length;i<a;i++){ n[i](t); } }},a=function(e){},o=e(i,a);return o&&"function"==typeof o.then&&!e.resolved&&o.then(i,a),r=!1,e.resolved}e.pendingCallbacks.push(t);}function fe(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,a=e.props,o=e.domProps;if(i||a||o){ for(var s in n){var c=xr(s);de(r,a,s,c,!0)||de(r,i,s,c)||de(r,o,s,c);} }return r}}function de(e,t,n,r,a){if(t){if(i(t,n)){ return e[n]=t[n],a||delete t[n],!0; }if(i(t,r)){ return e[n]=t[r],a||delete t[r],!0 }}return!1}function pe(e){e.hook||(e.hook={});for(var t=0;t<si.length;t++){var n=si[t],r=e.hook[n],i=oi[n];e.hook[n]=r?ve(i,r):i;}}function ve(e,t){return function(n,r){e(n,r),t(n,r);}}function he(e,t,n){return t&&(Array.isArray(t)||"object"!=typeof t)&&(n=t,t=void 0),me(this._self,e,t,n)}function me(e,t,n,r){if(!n||!n.__ob__){if(!t){ return ii(); }if("string"==typeof t){var i,a=Tr.getTagNamespace(t);return Tr.isReservedTag(t)?new ri(t,n,G(r,a),void 0,void 0,a,e):(i=je(e.$options,"components",t))?re(i,n,e,r,t):new ri(t,n,G(r,a),void 0,void 0,a,e)}return re(t,n,e,r)}}function ge(e){e.$vnode=null,e._vnode=null,e._staticTrees=null,e._renderContext=e.$options._parentVnode&&e.$options._parentVnode.context,e.$slots=_e(e.$options._renderChildren,e._renderContext),e.$createElement=s(he,e),e.$options.el&&e.$mount(e.$options.el);}function ye(n){n.prototype.$nextTick=function(e){Br(e,this);},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted){ for(var a in e.$slots){ e.$slots[a]=J(e.$slots[a]); } }r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var o;try{o=n.call(e._renderProxy,e.$createElement);}catch(t){if(Tr.errorHandler){ Tr.errorHandler.call(null,t,e); }else{if(Tr._isServer){ throw t; }setTimeout(function(){throw t},0);}o=e._vnode;}return o instanceof ri||(o=ii()),o.parent=i,o},n.prototype._h=he,n.prototype._s=e,n.prototype._n=t,n.prototype._e=ii,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];if(n&&!t){ return Array.isArray(n)?J(n):V(n); }if(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),Array.isArray(n)){ for(var r=0;r<n.length;r++){ "string"!=typeof n[r]&&(n[r].isStatic=!0,n[r].key="__static__"+e+"_"+r); } }else { n.isStatic=!0,n.key="__static__"+e; }return n};var r=function(e){return e};n.prototype._f=function(e){return je(this.$options,"filters",e,!0)||r},n.prototype._l=function(e,t){var n,r,i,a,o;if(Array.isArray(e)){ for(n=new Array(e.length),r=0,i=e.length;r<i;r++){ n[r]=t(e[r],r); } }else if("number"==typeof e){ for(n=new Array(e),r=0;r<e;r++){ n[r]=t(r+1,r); } }else if(l(e)){ for(a=Object.keys(e),n=new Array(a.length),r=0,i=a.length;r<i;r++){ o=a[r],n[r]=t(e[o],o,r); } }return n},n.prototype._t=function(e,t){var n=this.$slots[e];return n||t},n.prototype._b=function(e,t,n){if(t){ if(l(t)){Array.isArray(t)&&(t=d(t));for(var r in t){ if("class"===r||"style"===r){ e[r]=t[r]; }else{var i=n||Tr.mustUseProp(r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});i[r]=t[r];} }}else{  } }return e},n.prototype._k=function(e){return Tr.keyCodes[e]};}function _e(e,t){var n={};if(!e){ return n; }for(var r,i,a=G(e)||[],o=[],s=0,c=a.length;s<c;s++){ if(i=a[s],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var u=n[r]||(n[r]=[]);"template"===i.tag?u.push.apply(u,i.children):u.push(i);}else { o.push(i); } }return o.length&&(1!==o.length||" "!==o[0].text&&!o[0].isComment)&&(n.default=o),n}function be(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=s(e.$on,e),r=s(e.$off,e);e._updateListeners=function(t,i){K(t,i||{},n,r,e);},t&&e._updateListeners(t);}function $e(e){e.prototype.$on=function(e,t){var n=this;return(n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments);}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length){ return n._events=Object.create(null),n; }var r=n._events[e];if(!r){ return n; }if(1===arguments.length){ return n._events[e]=null,n; }for(var i,a=r.length;a--;){ if(i=r[a],i===t||i.fn===t){r.splice(a,1);break} }return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,a=n.length;i<a;i++){ n[i].apply(t,r); }}return t};}function we(e){function t(e,t){var r=e.$options=Object.create(n(e));r.parent=t.parent,r.propsData=t.propsData,r._parentVnode=t._parentVnode,r._parentListeners=t._parentListeners,r._renderChildren=t._renderChildren,r._componentTag=t._componentTag,t.render&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns);}function n(e){var t=e.constructor,n=t.options;if(t.super){var r=t.super.options,i=t.superOptions;r!==i&&(t.superOptions=r,n=t.options=Ee(r,t.extendOptions),n.name&&(n.components[n.name]=t));}return n}e.prototype._init=function(e){var r=this;r._uid=ci++,r._isVue=!0,e&&e._isComponent?t(r,e):r.$options=Ee(n(r),e||{},r),r._renderProxy=r,r._self=r,ee(r),be(r),ne(r,"beforeCreate"),D(r),ne(r,"created"),ge(r);};}function Ce(e){this._init(e);}function xe(e,t){var n,r,a;for(n in t){ r=e[n],a=t[n],i(e,n)?l(r)&&l(a)&&xe(r,a):j(e,n,a); }return e}function ke(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function Ae(e,t){var n=Object.create(e||null);return t?u(n,t):n}function Oe(e){if(e.components){var t,n=e.components;for(var r in n){var i=r.toLowerCase();yr(i)||Tr.isReservedTag(i)||(t=n[r],f(t)&&(n[r]=Ce.extend(t)));}}}function Te(e){var t=e.props;if(t){var n,r,i,a={};if(Array.isArray(t)){ for(n=t.length;n--;){ r=t[n],"string"==typeof r&&(i=$r(r),a[i]={type:null}); } }else if(f(t)){ for(var o in t){ r=t[o],i=$r(o),a[i]=f(r)?r:{type:r}; } }e.props=a;}}function Se(e){var t=e.directives;if(t){ for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r});} }}function Ee(e,t,n){function r(r){var i=fi[r]||di;l[r]=i(e[r],t[r],n,r);}Oe(t),Te(t),Se(t);var a=t.extends;if(a&&(e="function"==typeof a?Ee(e,a.options,n):Ee(e,a,n)),t.mixins){ for(var o=0,s=t.mixins.length;o<s;o++){var c=t.mixins[o];c.prototype instanceof Ce&&(c=c.options),e=Ee(e,c,n);} }var u,l={};for(u in e){ r(u); }for(u in t){ i(e,u)||r(u); }return l}function je(e,t,n,r){if("string"==typeof n){var i=e[t],a=i[n]||i[$r(n)]||i[wr($r(n))];return a}}function Le(e,t,n,r){var a=t[e],o=!i(n,e),s=n[e];if(Me(a.type)&&(o&&!i(a,"default")?s=!1:""!==s&&s!==xr(e)||(s=!0)),void 0===s){s=Ne(r,a,e);var c=ei.shouldConvert;ei.shouldConvert=!0,S(s),ei.shouldConvert=c;}return s}function Ne(e,t,n){if(i(t,"default")){var r=t.default;return l(r),"function"==typeof r&&t.type!==Function?r.call(e):r}}function De(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function Me(e){if(!Array.isArray(e)){ return"Boolean"===De(e); }for(var t=0,n=e.length;t<n;t++){ if("Boolean"===De(e[t])){ return!0; } }return!1}function Pe(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}};}function Re(e){e.mixin=function(t){e.options=Ee(e.options,t);};}function Ie(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=0===n.cid;if(r&&e._Ctor){ return e._Ctor; }var i=e.name||n.options.name,a=function(e){this._init(e);};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=Ee(n.options,e),a.super=n,a.extend=n.extend,Tr._assetTypes.forEach(function(e){a[e]=n[e];}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=e,r&&(e._Ctor=a),a};}function Be(e){Tr._assetTypes.forEach(function(t){e[t]=function(n,r){return r?("component"===t&&f(r)&&(r.name=r.name||n,r=e.extend(r)),"directive"===t&&"function"==typeof r&&(r={bind:r,update:r}),this.options[t+"s"][n]=r,r):this.options[t+"s"][n]};});}function Fe(e){var t={};t.get=function(){return Tr},Object.defineProperty(e,"config",t),e.util=pi,e.set=j,e.delete=L,e.nextTick=Br,e.options=Object.create(null),Tr._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null);}),u(e.options.components,hi),Pe(e),Re(e),Ie(e),Be(e);}function He(e){for(var t=e.data,n=e,r=e;r.child;){ r=r.child._vnode,r.data&&(t=Ue(r.data,t)); }for(;n=n.parent;){ n.data&&(t=Ue(t,n.data)); }return ze(t)}function Ue(e,t){return{staticClass:Ve(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function ze(e){var t=e.class,n=e.staticClass;return n||t?Ve(n,Je(t)):""}function Ve(e,t){return e?t?e+" "+t:e:t||""}function Je(e){var t="";if(!e){ return t; }if("string"==typeof e){ return e; }if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++){ e[r]&&(n=Je(e[r]))&&(t+=n+" "); }return t.slice(0,-1)}if(l(e)){for(var a in e){ e[a]&&(t+=a+" "); }return t.slice(0,-1)}return t}function qe(e){return Si(e)?"svg":"math"===e?"math":void 0}function Ke(e){if(!jr){ return!0; }if(ji(e)){ return!1; }if(e=e.toLowerCase(),null!=Li[e]){ return Li[e]; }var t=document.createElement(e);return e.indexOf("-")>-1?Li[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Li[e]=/HTMLUnknownElement/.test(t.toString())}function We(e){if("string"==typeof e){if(e=document.querySelector(e),!e){ return document.createElement("div") }}return e}function Ze(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&"multiple"in t.data.attrs&&n.setAttribute("multiple","multiple"),n)}function Ge(e,t){return document.createElementNS(xi[e],t)}function Ye(e){return document.createTextNode(e)}function Qe(e){return document.createComment(e)}function Xe(e,t,n){e.insertBefore(t,n);}function et(e,t){e.removeChild(t);}function tt(e,t){e.appendChild(t);}function nt(e){return e.parentNode}function rt(e){return e.nextSibling}function it(e){return e.tagName}function at(e,t){e.textContent=t;}function ot(e){return e.childNodes}function st(e,t,n){e.setAttribute(t,n);}function ct(e,t){var n=e.data.ref;if(n){var i=e.context,a=e.child||e.elm,o=i.$refs;t?Array.isArray(o[n])?r(o[n],a):o[n]===a&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].push(a):o[n]=[a]:o[n]=a;}}function ut(e){return null==e}function lt(e){return null!=e}function ft(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function dt(e,t,n){var r,i,a={};for(r=t;r<=n;++r){ i=e[r].key,lt(i)&&(a[i]=r); }return a}function pt(e){function t(e){return new ri(C.tagName(e).toLowerCase(),{},[],void 0,e)}function n(e,t){function n(){0===--n.listeners&&r(e);}return n.listeners=t,n}function r(e){var t=C.parentNode(e);C.removeChild(t,e);}function i(e,t,n){var r,i=e.data;if(e.isRootInsert=!n,lt(i)&&(lt(r=i.hook)&&lt(r=r.init)&&r(e),lt(r=e.child))){ return u(e,t),e.elm; }var a=e.children,s=e.tag;return lt(s)?(e.elm=e.ns?C.createElementNS(e.ns,s):C.createElement(s,e),l(e),o(e,a,t),lt(i)&&c(e,t)):e.isComment?e.elm=C.createComment(e.text):e.elm=C.createTextNode(e.text),e.elm}function o(e,t,n){if(Array.isArray(t)){ for(var r=0;r<t.length;++r){ C.appendChild(e.elm,i(t[r],n,!0)); } }else { a(e.text)&&C.appendChild(e.elm,C.createTextNode(e.text)); }}function s(e){for(;e.child;){ e=e.child._vnode; }return lt(e.tag)}function c(e,t){for(var n=0;n<$.create.length;++n){ $.create[n](Mi,e); }_=e.data.hook,lt(_)&&(_.create&&_.create(Mi,e),_.insert&&t.push(e));}function u(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,s(e)?(c(e,t),l(e)):(ct(e),t.push(e));}function l(e){var t;lt(t=e.context)&&lt(t=t.$options._scopeId)&&C.setAttribute(e.elm,t,""),lt(t=ai)&&t!==e.context&&lt(t=t.$options._scopeId)&&C.setAttribute(e.elm,t,"");}function f(e,t,n,r,a,o){for(;r<=a;++r){ C.insertBefore(e,i(n[r],o),t); }}function d(e){var t,n,r=e.data;if(lt(r)){ for(lt(t=r.hook)&&lt(t=t.destroy)&&t(e),t=0;t<$.destroy.length;++t){ $.destroy[t](e); } }if(lt(t=e.children)){ for(n=0;n<e.children.length;++n){ d(e.children[n]); } }}function p(e,t,n,r){for(;n<=r;++n){var i=t[n];lt(i)&&(lt(i.tag)?(v(i),d(i)):C.removeChild(e,i.elm));}}function v(e,t){if(t||lt(e.data)){var i=$.remove.length+1;for(t?t.listeners+=i:t=n(e.elm,i),lt(_=e.child)&&lt(_=_._vnode)&&lt(_.data)&&v(_,t),_=0;_<$.remove.length;++_){ $.remove[_](e,t); }lt(_=e.data.hook)&&lt(_=_.remove)?_(e,t):t();}else { r(e.elm); }}function h(e,t,n,r,a){for(var o,s,c,u,l=0,d=0,v=t.length-1,h=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],$=!a;l<=v&&d<=y;){ ut(h)?h=t[++l]:ut(g)?g=t[--v]:ft(h,_)?(m(h,_,r),h=t[++l],_=n[++d]):ft(g,b)?(m(g,b,r),g=t[--v],b=n[--y]):ft(h,b)?(m(h,b,r),$&&C.insertBefore(e,h.elm,C.nextSibling(g.elm)),h=t[++l],b=n[--y]):ft(g,_)?(m(g,_,r),$&&C.insertBefore(e,g.elm,h.elm),g=t[--v],_=n[++d]):(ut(o)&&(o=dt(t,l,v)),s=lt(_.key)?o[_.key]:null,ut(s)?(C.insertBefore(e,i(_,r),h.elm),_=n[++d]):(c=t[s],c.tag!==_.tag?(C.insertBefore(e,i(_,r),h.elm),_=n[++d]):(m(c,_,r),t[s]=void 0,$&&C.insertBefore(e,_.elm,h.elm),_=n[++d]))); }l>v?(u=ut(n[y+1])?null:n[y+1].elm,f(e,u,n,d,y,r)):d>y&&p(e,t,l,v);}function m(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&t.isCloned){ return void(t.elm=e.elm); }var i,a=t.data,o=lt(a);o&&lt(i=a.hook)&&lt(i=i.prepatch)&&i(e,t);var c=t.elm=e.elm,u=e.children,l=t.children;if(o&&s(t)){for(i=0;i<$.update.length;++i){ $.update[i](e,t); }lt(i=a.hook)&&lt(i=i.update)&&i(e,t);}ut(t.text)?lt(u)&&lt(l)?u!==l&&h(c,u,l,n,r):lt(l)?(lt(e.text)&&C.setTextContent(c,""),f(c,null,l,0,l.length-1,n)):lt(u)?p(c,u,0,u.length-1):lt(e.text)&&C.setTextContent(c,""):e.text!==t.text&&C.setTextContent(c,t.text),o&&lt(i=a.hook)&&lt(i=i.postpatch)&&i(e,t);}}function g(e,t,n){if(n&&e.parent){ e.parent.data.pendingInsert=t; }else { for(var r=0;r<t.length;++r){ t[r].data.hook.insert(t[r]); } }}function y(e,t,n){t.elm=e;var r=t.tag,i=t.data,a=t.children;if(lt(i)&&(lt(_=i.hook)&&lt(_=_.init)&&_(t,!0),lt(_=t.child))){ return u(t,n),!0; }if(lt(r)){if(lt(a)){var s=C.childNodes(e);if(s.length){var l=!0;if(s.length!==a.length){ l=!1; }else { for(var f=0;f<a.length;f++){ if(!y(s[f],a[f],n)){l=!1;break} } }if(!l){ return!1 }}else { o(t,a,n); }}lt(i)&&c(t,n);}return!0}var _,b,$={},w=e.modules,C=e.nodeOps;for(_=0;_<Pi.length;++_){ for($[Pi[_]]=[],b=0;b<w.length;++b){ void 0!==w[b][Pi[_]]&&$[Pi[_]].push(w[b][Pi[_]]); } }return function(e,n,r,a){if(!n){ return void(e&&d(e)); }var o,c,u=!1,l=[];if(e){var f=lt(e.nodeType);if(!f&&ft(e,n)){ m(e,n,l,a); }else{if(f){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&y(e,n,l)){ return g(n,l,!0),e; }e=t(e);}if(o=e.elm,c=C.parentNode(o),i(n,l),n.parent&&(n.parent.elm=n.elm,s(n))){ for(var v=0;v<$.create.length;++v){ $.create[v](Mi,n.parent); } }null!==c?(C.insertBefore(c,n.elm,C.nextSibling(o)),p(c,[e],0,0)):lt(e.tag)&&d(e);}}else { u=!0,i(n,l); }return g(n,l,u),n.elm}}function vt(e,t){if(e.data.directives||t.data.directives){var n,r,i,a=e===Mi,o=ht(e.data.directives,e.context),s=ht(t.data.directives,t.context),c=[],u=[];for(n in s){ r=o[n],i=s[n],r?(i.oldValue=r.value,gt(i,"update",t,e),i.def&&i.def.componentUpdated&&u.push(i)):(gt(i,"bind",t,e),i.def&&i.def.inserted&&c.push(i)); }if(c.length){var l=function(){c.forEach(function(n){gt(n,"inserted",t,e);});};a?q(t.data.hook||(t.data.hook={}),"insert",l,"dir-insert"):l();}if(u.length&&q(t.data.hook||(t.data.hook={}),"postpatch",function(){u.forEach(function(n){gt(n,"componentUpdated",t,e);});},"dir-postpatch"),!a){ for(n in o){ s[n]||gt(o[n],"unbind",e); } }}}function ht(e,t){var n=Object.create(null);if(!e){ return n; }var r,i;for(r=0;r<e.length;r++){ i=e[r],i.modifiers||(i.modifiers=Ii),n[mt(i)]=i,i.def=je(t.$options,"directives",i.name,!0); }return n}function mt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function gt(e,t,n,r){var i=e.def&&e.def[t];i&&i(n.elm,e,n,r);}function yt(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,a=t.elm,o=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=u({},s));for(n in s){ r=s[n],i=o[n],i!==r&&_t(a,n,r); }for(n in o){ null==s[n]&&($i(n)?a.removeAttributeNS(bi,wi(n)):yi(n)||a.removeAttribute(n)); }}}function _t(e,t,n){_i(t)?Ci(n)?e.removeAttribute(t):e.setAttribute(t,t):yi(t)?e.setAttribute(t,Ci(n)||"false"===n?"false":"true"):$i(t)?Ci(n)?e.removeAttributeNS(bi,wi(t)):e.setAttributeNS(bi,t,n):Ci(n)?e.removeAttribute(t):e.setAttribute(t,n);}function bt(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var a=He(t),o=n._transitionClasses;o&&(a=Ve(a,Je(o))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a);}}function $t(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{},i=t.elm._v_add||(t.elm._v_add=function(e,n,r){t.elm.addEventListener(e,n,r);}),a=t.elm._v_remove||(t.elm._v_remove=function(e,n){t.elm.removeEventListener(e,n);});K(n,r,i,a,t.context);}}function wt(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,a=e.data.domProps||{},o=t.data.domProps||{};o.__ob__&&(o=t.data.domProps=u({},o));for(n in a){ null==o[n]&&(i[n]=void 0); }for(n in o){ if("textContent"!==n&&"innerHTML"!==n||!t.children||(t.children.length=0),r=o[n],"value"===n){i._value=r;var s=null==r?"":String(r);i.value===s||i.composing||(i.value=s);}else { i[n]=r; } }}}function Ct(e,t){if(e.data&&e.data.style||t.data.style){var n,r,i=t.elm,a=e.data.style||{},o=t.data.style||{};if("string"==typeof o){ return void(i.style.cssText=o); }var s=o.__ob__;Array.isArray(o)&&(o=t.data.style=d(o)),s&&(o=t.data.style=u({},o));for(r in a){ null==o[r]&&(i.style[Ji(r)]=""); }for(r in o){ n=o[r],n!==a[r]&&(i.style[Ji(r)]=null==n?"":n); }}}function xt(e,t){if(e.classList){ t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t); }else{var n=" "+e.getAttribute("class")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim());}}function kt(e,t){if(e.classList){ t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t); }else{for(var n=" "+e.getAttribute("class")+" ",r=" "+t+" ";n.indexOf(r)>=0;){ n=n.replace(r," "); }e.setAttribute("class",n.trim());}}function At(e){ea(function(){ea(e);});}function Ot(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),xt(e,t);}function Tt(e,t){e._transitionClasses&&r(e._transitionClasses,t),kt(e,t);}function St(e,t,n){var r=Et(e,t),i=r.type,a=r.timeout,o=r.propCount;if(!i){ return n(); }var s=i===Wi?Yi:Xi,c=0,u=function(){e.removeEventListener(s,l),n();},l=function(t){t.target===e&&++c>=o&&u();};setTimeout(function(){c<o&&u();},a+1),e.addEventListener(s,l);}function Et(e,t){var n,r=window.getComputedStyle(e),i=r[Gi+"Delay"].split(", "),a=r[Gi+"Duration"].split(", "),o=jt(i,a),s=r[Qi+"Delay"].split(", "),c=r[Qi+"Duration"].split(", "),u=jt(s,c),l=0,f=0;t===Wi?o>0&&(n=Wi,l=o,f=a.length):t===Zi?u>0&&(n=Zi,l=u,f=c.length):(l=Math.max(o,u),n=l>0?o>u?Wi:Zi:null,f=n?n===Wi?a.length:c.length:0);var d=n===Wi&&ta.test(r[Gi+"Property"]);return{type:n,timeout:l,propCount:f,hasTransform:d}}function jt(e,t){return Math.max.apply(null,t.map(function(t,n){return Lt(t)+Lt(e[n])}))}function Lt(e){return 1e3*Number(e.slice(0,-1))}function Nt(e){var t=e.elm;t._leaveCb&&(t._leaveCb.cancelled=!0,t._leaveCb());var n=Mt(e.data.transition);if(n&&!t._enterCb&&1===t.nodeType){var r=n.css,i=n.type,a=n.enterClass,o=n.enterActiveClass,s=n.appearClass,c=n.appearActiveClass,u=n.beforeEnter,l=n.enter,f=n.afterEnter,d=n.enterCancelled,p=n.beforeAppear,v=n.appear,h=n.afterAppear,m=n.appearCancelled,g=ai.$vnode,y=g&&g.parent?g.parent.context:ai,_=!y._isMounted||!e.isRootInsert;if(!_||v||""===v){var b=_?s:a,$=_?c:o,w=_?p||u:u,C=_&&"function"==typeof v?v:l,x=_?h||f:f,k=_?m||d:d,A=r!==!1&&!Dr,O=C&&(C._length||C.length)>1,T=t._enterCb=Pt(function(){A&&Tt(t,$),T.cancelled?(A&&Tt(t,b),k&&k(t)):x&&x(t),t._enterCb=null;});e.data.show||q(e.data.hook||(e.data.hook={}),"insert",function(){var n=t.parentNode,r=n&&n._pending&&n._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),C&&C(t,T);},"transition-insert"),w&&w(t),A&&(Ot(t,b),Ot(t,$),At(function(){Tt(t,b),T.cancelled||O||St(t,i,T);})),e.data.show&&C&&C(t,T),A||O||T();}}}function Dt(e,t){function n(){m.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),u&&u(r),v&&(Ot(r,s),Ot(r,c),At(function(){Tt(r,s),m.cancelled||h||St(r,o,m);})),l&&l(r,m),v||h||m());}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Mt(e.data.transition);if(!i){ return t(); }if(!r._leaveCb&&1===r.nodeType){var a=i.css,o=i.type,s=i.leaveClass,c=i.leaveActiveClass,u=i.beforeLeave,l=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=a!==!1&&!Dr,h=l&&(l._length||l.length)>1,m=r._leaveCb=Pt(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),v&&Tt(r,c),m.cancelled?(v&&Tt(r,s),d&&d(r)):(t(),f&&f(r)),r._leaveCb=null;});p?p(n):n();}}function Mt(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&u(t,na(e.name||"v")),u(t,e),t}return"string"==typeof e?na(e):void 0}}function Pt(e){var t=!1;return function(){t||(t=!0,e());}}function Rt(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var a,o,s=0,c=e.options.length;s<c;s++){ if(o=e.options[s],i){ a=m(r,Bt(o))>-1,o.selected!==a&&(o.selected=a); }else if(h(Bt(o),r)){ return void(e.selectedIndex!==s&&(e.selectedIndex=s)); } }i||(e.selectedIndex=-1);}}function It(e,t){for(var n=0,r=t.length;n<r;n++){ if(h(Bt(t[n]),e)){ return!1; } }return!0}function Bt(e){return"_value"in e?e._value:e.value}function Ft(e){e.target.composing=!0;}function Ht(e){e.target.composing=!1,Ut(e.target,"input");}function Ut(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n);}function zt(e){return!e.child||e.data&&e.data.transition?e:zt(e.child._vnode)}function Vt(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Vt(X(t.children)):e}function Jt(e){var t={},n=e.$options;for(var r in n.propsData){ t[r]=e[r]; }var i=n._parentListeners;for(var a in i){ t[$r(a)]=i[a].fn; }return t}function qt(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function Kt(e){for(;e=e.parent;){ if(e.data.transition){ return!0 } }}function Wt(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb();
}function Zt(e){e.data.newPos=e.elm.getBoundingClientRect();}function Gt(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var a=e.elm.style;a.transform=a.WebkitTransform="translate("+r+"px,"+i+"px)",a.transitionDuration="0s";}}function Yt(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function Qt(e){return ma.innerHTML=e,ma.textContent}function Xt(e,t){return t&&(e=e.replace(Za,"\n")),e.replace(Ka,"<").replace(Wa,">").replace(Ga,"&").replace(Ya,'"')}function en(e,t){function n(t){f+=t,e=e.substring(t);}function r(){var t=e.match(Ca);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,a;!(i=e.match(xa))&&(a=e.match(ba));){ n(a[0].length),r.attrs.push(a); }if(i){ return r.unarySlash=i[1],n(i[0].length),r.end=f,r }}}function i(e){var n=e.tagName,r=e.unarySlash;u&&("p"===s&&Ti(n)&&a("",s),Oi(n)&&s===n&&a("",n));for(var i=l(n)||"html"===n&&"head"===s||!!r,o=e.attrs.length,f=new Array(o),d=0;d<o;d++){var p=e.attrs[d];Oa&&p[0].indexOf('""')===-1&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],""===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||"";f[d]={name:p[1],value:Xt(v,t.shouldDecodeNewlines)};}i||(c.push({tag:n,attrs:f}),s=n,r=""),t.start&&t.start(n,f,i,e.start,e.end);}function a(e,n,r,i){var a;if(null==r&&(r=f),null==i&&(i=f),n){var o=n.toLowerCase();for(a=c.length-1;a>=0&&c[a].tag.toLowerCase()!==o;a--){  }}else { a=0; }if(a>=0){for(var u=c.length-1;u>=a;u--){ t.end&&t.end(c[u].tag,r,i); }c.length=a,s=a&&c[a-1].tag;}else{ "br"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):"p"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i)); }}for(var o,s,c=[],u=t.expectHTML,l=t.isUnaryTag||Or,f=0;e;){if(o=e,s&&Ja(s)){var d=s.toLowerCase(),p=qa[d]||(qa[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,"script"!==d&&"style"!==d&&"noscript"!==d&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,a("</"+d+">",d,f-v,f);}else{var m=e.indexOf("<");if(0===m){if(/^<!--/.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if(/^<!\[/.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(Aa);if(_){n(_[0].length);continue}var b=e.match(ka);if(b){var $=f;n(b[0].length),a(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var C=void 0;m>=0?(C=e.substring(0,m),n(m)):(C=e,e=""),t.chars&&t.chars(C);}if(e===o){ throw new Error("Error parsing template:\n\n"+e) }}a();}function tn(e){function t(){(o||(o=[])).push(e.slice(d,i).trim()),d=i+1;}var n,r,i,a,o,s=!1,c=!1,u=0,l=0,f=0,d=0;for(i=0;i<e.length;i++){ if(r=n,n=e.charCodeAt(i),s){ 39===n&&92!==r&&(s=!s); }else if(c){ 34===n&&92!==r&&(c=!c); }else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||u||l||f){ switch(n){case 34:c=!0;break;case 39:s=!0;break;case 40:f++;break;case 41:f--;break;case 91:l++;break;case 93:l--;break;case 123:u++;break;case 125:u--;} }else { void 0===a?(d=i+1,a=e.slice(0,i).trim()):t(); } }if(void 0===a?a=e.slice(0,i).trim():0!==d&&t(),o){ for(i=0;i<o.length;i++){ a=nn(a,o[i]); } }return a}function nn(e,t){var n=t.indexOf("(");if(n<0){ return'_f("'+t+'")('+e+")"; }var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function rn(e,t){var n=t?eo(t):Qa;if(n.test(e)){for(var r,i,a=[],o=n.lastIndex=0;r=n.exec(e);){i=r.index,i>o&&a.push(JSON.stringify(e.slice(o,i)));var s=tn(r[1].trim());a.push("_s("+s+")"),o=i+r[0].length;}return o<e.length&&a.push(JSON.stringify(e.slice(o))),a.join("+")}}function an(e){console.error("[Vue parser]: "+e);}function on(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function sn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n});}function cn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n});}function un(e,t,n,r,i,a){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:a});}function ln(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t);var a;r&&r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var o={value:n,modifiers:r},s=a[t];Array.isArray(s)?i?s.unshift(o):s.push(o):s?a[t]=i?[o,s]:[s,o]:a[t]=o;}function fn(e,t,n){var r=dn(e,":"+t)||dn(e,"v-bind:"+t);if(null!=r){ return r; }if(n!==!1){var i=dn(e,t);if(null!=i){ return JSON.stringify(i) }}}function dn(e,t){var n;if(null!=(n=e.attrsMap[t])){ for(var r=e.attrsList,i=0,a=r.length;i<a;i++){ if(r[i].name===t){r.splice(i,1);break} } }return n}function pn(e,t){Ta=t.warn||an,Sa=t.getTagNamespace||Or,Ea=t.mustUseProp||Or,ja=t.isPreTag||Or,La=on(t.modules,"preTransformNode"),Na=on(t.modules,"transformNode"),Da=on(t.modules,"postTransformNode"),Ma=t.delimiters;var n,r,i=[],a=t.preserveWhitespace!==!1,o=!1,s=!1;return en(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,c){function u(e){}var l=r&&r.ns||Sa(e);t.isIE&&"svg"===l&&(a=En(a));var f={type:1,tag:e,attrsList:a,attrsMap:On(a,t.isIE),parent:r,children:[]};l&&(f.ns=l),Sn(f)&&(f.forbidden=!0);for(var d=0;d<La.length;d++){ La[d](f,t); }if(o||(vn(f),f.pre&&(o=!0)),ja(f.tag)&&(s=!0),o){ hn(f); }else{yn(f),_n(f),$n(f),mn(f),f.plain=!f.key&&!a.length,gn(f),wn(f),Cn(f);for(var p=0;p<Na.length;p++){ Na[p](f,t); }xn(f);}n||(n=f,u(n)),r&&!f.forbidden&&(f.else?bn(f,r):(r.children.push(f),f.parent=r)),c||(r=f,i.push(f));for(var v=0;v<Da.length;v++){ Da[v](f,t); }},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(o=!1),ja(e.tag)&&(s=!1);},chars:function(e){if(r&&(e=s||e.trim()?uo(e):a&&r.children.length?" ":"")){var t;!o&&" "!==e&&(t=rn(e,Ma))?r.children.push({type:2,expression:t,text:e}):(e=e.replace(co,""),r.children.push({type:3,text:e}));}}}),n}function vn(e){null!=dn(e,"v-pre")&&(e.pre=!0);}function hn(e){var t=e.attrsList.length;if(t){ for(var n=e.attrs=new Array(t),r=0;r<t;r++){ n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)}; } }else { e.pre||(e.plain=!0); }}function mn(e){var t=fn(e,"key");t&&(e.key=t);}function gn(e){var t=fn(e,"ref");t&&(e.ref=t,e.refInFor=kn(e));}function yn(e){var t;if(t=dn(e,"v-for")){var n=t.match(no);if(!n){ return; }e.for=n[2].trim();var r=n[1].trim(),i=r.match(ro);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r;}}function _n(e){var t=dn(e,"v-if");t&&(e.if=t),null!=dn(e,"v-else")&&(e.else=!0);}function bn(e,t){var n=Tn(t.children);n&&n.if&&(n.elseBlock=e);}function $n(e){var t=dn(e,"v-once");null!=t&&(e.once=!0);}function wn(e){if("slot"===e.tag){ e.slotName=fn(e,"name"); }else{var t=fn(e,"slot");t&&(e.slotTarget=t);}}function Cn(e){var t;(t=fn(e,"is"))&&(e.component=t),null!=dn(e,"inline-template")&&(e.inlineTemplate=!0);}function xn(e){var t,n,r,i,a,o,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++){ if(r=i=u[t].name,a=u[t].value,to.test(r)){ if(e.hasBindings=!0,s=An(r),s&&(r=r.replace(so,"")),io.test(r)){ r=r.replace(io,""),s&&s.prop&&(c=!0,r=$r(r),"innerHtml"===r&&(r="innerHTML")),c||Ea(r)?sn(e,r,a):cn(e,r,a); }else if(ao.test(r)){ r=r.replace(ao,""),ln(e,r,a,s); }else{r=r.replace(to,"");var l=r.match(oo);l&&(o=l[1])&&(r=r.slice(0,-(o.length+1))),un(e,r,i,a,o,s);} }else { cn(e,r,JSON.stringify(a)); } }}function kn(e){for(var t=e;t;){if(void 0!==t.for){ return!0; }t=t.parent;}return!1}function An(e){var t=e.match(so);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0;}),n}}function On(e,t){for(var n={},r=0,i=e.length;r<i;r++){ n[e[r].name]=e[r].value; }return n}function Tn(e){for(var t=e.length;t--;){ if(e[t].tag){ return e[t] } }}function Sn(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function En(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];lo.test(r.name)||(r.name=r.name.replace(fo,""),t.push(r));}return t}function jn(e,t){e&&(Pa=po(t.staticKeys||""),Ra=t.isReservedTag||function(){return!1},Nn(e),Dn(e,!1));}function Ln(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Nn(e){if(e.static=Mn(e),1===e.type){ for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Nn(r),r.static||(e.static=!1);} }}function Dn(e,t){if(1===e.type){if(e.once||e.static){ return e.staticRoot=!0,void(e.staticInFor=t); }if(e.children){ for(var n=0,r=e.children.length;n<r;n++){ Dn(e.children[n],t||!!e.for); } }}}function Mn(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||yr(e.tag)||!Ra(e.tag)||Pn(e)||!Object.keys(e).every(Pa))))}function Pn(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag){ return!1; }if(e.for){ return!0 }}return!1}function Rn(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e){ n+='"'+r+'":'+In(e[r])+","; }return n.slice(0,-1)+"}"}function In(e){if(e){if(Array.isArray(e)){ return"["+e.map(In).join(",")+"]"; }if(e.modifiers){var t="",n=[];for(var r in e.modifiers){ mo[r]?t+=mo[r]:n.push(r); }n.length&&(t=Bn(n)+t);var i=vo.test(e.value)?e.value+"($event)":e.value;return"function($event){"+t+i+"}"}return vo.test(e.value)?e.value:"function($event){"+e.value+"}"}return"function(){}"}function Bn(e){var t=1===e.length?Fn(e[0]):Array.prototype.concat.apply([],e.map(Fn));return Array.isArray(t)?"if("+t.map(function(e){return"$event.keyCode!=="+e}).join("&&")+")return;":"if($event.keyCode!=="+t+")return;"}function Fn(e){return parseInt(e,10)||ho[e]||"_k("+JSON.stringify(e)+")"}function Hn(e,t){e.wrapData=function(e){return"_b("+e+","+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"};}function Un(e,t){var n=Ua,r=Ua=[];za=t,Ia=t.warn||an,Ba=on(t.modules,"transformCode"),Fa=on(t.modules,"genData"),Ha=t.directives||{};var i=e?zn(e):'_h("div")';return Ua=n,{render:"with(this){return "+i+"}",staticRenderFns:r}}function zn(e){if(e.staticRoot&&!e.staticProcessed){ return e.staticProcessed=!0,Ua.push("with(this){return "+zn(e)+"}"),"_m("+(Ua.length-1)+(e.staticInFor?",true":"")+")"; }if(e.for&&!e.forProcessed){ return qn(e); }if(e.if&&!e.ifProcessed){ return Vn(e); }if("template"!==e.tag||e.slotTarget){if("slot"===e.tag){ return Qn(e); }var t;if(e.component){ t=Xn(e); }else{var n=Kn(e),r=e.inlineTemplate?null:Zn(e);t="_h('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")";}for(var i=0;i<Ba.length;i++){ t=Ba[i](e,t); }return t}return Zn(e)||"void 0"}function Vn(e){var t=e.if;return e.ifProcessed=!0,"("+t+")?"+zn(e)+":"+Jn(e)}function Jn(e){return e.elseBlock?zn(e.elseBlock):"_e()"}function qn(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+zn(e)+"})"}function Kn(e){if(!e.plain){var t="{",n=Wn(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.component&&(t+='tag:"'+e.tag+'",'),e.slotTarget&&(t+="slot:"+e.slotTarget+",");for(var r=0;r<Fa.length;r++){ t+=Fa[r](e); }if(e.attrs&&(t+="attrs:{"+er(e.attrs)+"},"),e.props&&(t+="domProps:{"+er(e.props)+"},"),e.events&&(t+=Rn(e.events)+","),e.nativeEvents&&(t+=Rn(e.nativeEvents,!0)+","),e.inlineTemplate){var i=e.children[0];if(1===i.type){var a=Un(i,za);t+="inlineTemplate:{render:function(){"+a.render+"},staticRenderFns:["+a.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}";}}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}}function Wn(e){var t=e.directives;if(t){var n,r,i,a,o="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],a=!0;var c=Ha[i.name]||go[i.name];c&&(a=!!c(e,i,Ia)),a&&(s=!0,o+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},");}return s?o.slice(0,-1)+"]":void 0}}function Zn(e){if(e.children.length){ return"["+e.children.map(Gn).join(",")+"]" }}function Gn(e){return 1===e.type?zn(e):Yn(e)}function Yn(e){return 2===e.type?e.expression:JSON.stringify(e.text)}function Qn(e){var t=e.slotName||'"default"',n=Zn(e);return n?"_t("+t+","+n+")":"_t("+t+")"}function Xn(e){var t=e.inlineTemplate?null:Zn(e);return"_h("+e.component+","+Kn(e)+(t?","+t:"")+")"}function er(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+r.value+",";}return t.slice(0,-1)}function tr(e,t){var n=pn(e.trim(),t);jn(n,t);var r=Un(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function nr(e,t){var n=(t.warn||an,dn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=fn(e,"class",!1);r&&(e.classBinding=r);}function rr(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function ir(e){var t=fn(e,"style",!1);t&&(e.styleBinding=t);}function ar(e){return e.styleBinding?"style:("+e.styleBinding+"),":""}function or(e,t,n){Va=n;var r=t.value,i=t.modifiers,a=e.tag,o=e.attrsMap.type;return"select"===a?lr(e,r):"input"===a&&"checkbox"===o?sr(e,r):"input"===a&&"radio"===o?cr(e,r):ur(e,r,i),!0}function sr(e,t){var n=fn(e,"value")||"null",r=fn(e,"true-value")||"true",i=fn(e,"false-value")||"false";sn(e,"checked","Array.isArray("+t+")?_i("+t+","+n+")>-1:_q("+t+","+r+")"),ln(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+r+"):("+i+");if(Array.isArray($$a)){var $$v="+n+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0);}function cr(e,t){var n=fn(e,"value")||"null";sn(e,"checked","_q("+t+","+n+")"),ln(e,"change",t+"="+n,null,!0);}function ur(e,t,n){var r=e.attrsMap.type,i=n||{},a=i.lazy,o=i.number,s=i.trim,c=a||Nr&&"range"===r?"change":"input",u=!a&&"range"!==r,l="input"===e.tag||"textarea"===e.tag,f=l?"$event.target.value"+(s?".trim()":""):"$event",d=o||"number"===r?t+"=_n("+f+")":t+"="+f;l&&u&&(d="if($event.target.composing)return;"+d),sn(e,"value",l?"_s("+t+")":"("+t+")"),ln(e,c,d,null,!0);}function lr(e,t){var n=t+'=Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){return "_value" in o ? o._value : o.value})'+(null==e.attrsMap.multiple?"[0]":"");ln(e,"change",n,null,!0);}function fr(e,t){t.value&&sn(e,"textContent","_s("+t.value+")");}function dr(e,t){t.value&&sn(e,"innerHTML","_s("+t.value+")");}function pr(e,t){return t=t?u(u({},Co),t):Co,tr(e,t)}function vr(e,t,n){var r=(t&&t.warn||li,t&&t.delimiters?String(t.delimiters)+e:e);if(wo[r]){ return wo[r]; }var i={},a=pr(e,t);i.render=hr(a.render);var o=a.staticRenderFns.length;i.staticRenderFns=new Array(o);for(var s=0;s<o;s++){ i.staticRenderFns[s]=hr(a.staticRenderFns[s]); }return wo[r]=i}function hr(e){try{return new Function(e)}catch(e){return p}}function mr(e){if(e.outerHTML){ return e.outerHTML; }var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var gr,yr=n("slot,component",!0),_r=Object.prototype.hasOwnProperty,br=/-(\w)/g,$r=o(function(e){return e.replace(br,function(e,t){return t?t.toUpperCase():""})}),wr=o(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Cr=/([^-])([A-Z])/g,xr=o(function(e){return e.replace(Cr,"$1-$2").replace(Cr,"$1-$2").toLowerCase()}),kr=Object.prototype.toString,Ar="[object Object]",Or=function(){return!1},Tr={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:Or,isUnknownElement:Or,getTagNamespace:p,mustUseProp:Or,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100,_isServer:!1},Sr=/[^\w\.\$]/,Er="__proto__"in{},jr="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),Lr=jr&&window.navigator.userAgent.toLowerCase(),Nr=Lr&&/msie|trident/.test(Lr),Dr=Lr&&Lr.indexOf("msie 9.0")>0,Mr=Lr&&Lr.indexOf("edge/")>0,Pr=Lr&&Lr.indexOf("android")>0,Rr=Lr&&/iphone|ipad|ipod|ios/.test(Lr),Ir=jr&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Br=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++){ e[t](); }}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){var i=Promise.resolve();t=function(){i.then(e),Rr&&setTimeout(p);};}else if("undefined"==typeof MutationObserver||!b(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString()){ t=function(){setTimeout(e,0);}; }else{var a=1,o=new MutationObserver(e),s=document.createTextNode(String(a));o.observe(s,{characterData:!0}),t=function(){a=(a+1)%2,s.data=String(a);};}return function(e,i){var a=i?function(){e.call(i);}:e;n.push(a),r||(r=!0,t());}}();gr="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null);}return e.prototype.has=function(e){return void 0!==this.set[e]},e.prototype.add=function(e){this.set[e]=1;},e.prototype.clear=function(){this.set=Object.create(null);},e}();var Fr=0,Hr=function(){this.id=Fr++,this.subs=[];};Hr.prototype.addSub=function(e){this.subs.push(e);},Hr.prototype.removeSub=function(e){r(this.subs,e);},Hr.prototype.depend=function(){Hr.target&&Hr.target.addDep(this);},Hr.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++){ e[t].update(); }},Hr.target=null;var Ur=[],zr=[],Vr={},Jr=!1,qr=!1,Kr=0,Wr=0,Zr=function(e,t,n,r){void 0===r&&(r={}),this.vm=e,e._watchers.push(this),this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.expression=t.toString(),this.cb=n,this.id=++Wr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new gr,this.newDepIds=new gr,"function"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get();};Zr.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&A(e),w(),this.cleanupDeps(),e},Zr.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this));},Zr.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e);}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0;},Zr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():k(this);},Zr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user){ try{this.cb.call(this.vm,e,t);}catch(e){if(!Tr.errorHandler){ throw e; }Tr.errorHandler.call(null,e,this.vm);} }else { this.cb.call(this.vm,e,t); }}}},Zr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1;},Zr.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;){ e.deps[t].depend(); }},Zr.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var t=this.deps.length;t--;){ e.deps[t].removeSub(e); }this.active=!1;}};var Gr=new gr,Yr=Array.prototype,Qr=Object.create(Yr);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=Yr[e];y(Qr,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;){ i[r]=n[r]; }var a,o=t.apply(this,i),s=this.__ob__;switch(e){case"push":a=i;break;case"unshift":a=i;break;case"splice":a=i.slice(2);}return a&&s.observeArray(a),s.dep.notify(),o});});var Xr=Object.getOwnPropertyNames(Qr),ei={shouldConvert:!0,isSettingProps:!1},ti=function(e){if(this.value=e,this.dep=new Hr,this.vmCount=0,y(e,"__ob__",this),Array.isArray(e)){var t=Er?O:T;t(e,Qr,Xr),this.observeArray(e);}else { this.walk(e); }};ti.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){ E(e,t[n],e[t[n]]); }},ti.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++){ S(e[t]); }};var ni={enumerable:!0,configurable:!0,get:p,set:p},ri=function(e,t,n,r,i,a,o,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=a,this.context=o,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=s,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1;},ii=function(){var e=new ri;return e.text="",e.isComment=!0,e},ai=null,oi={init:oe,prepatch:se,insert:ce,destroy:ue},si=Object.keys(oi),ci=0;we(Ce),U(Ce),$e(Ce),te(Ce),ye(Ce);var ui,li=p,fi=Tr.optionMergeStrategies;fi.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?xe(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return xe(t.call(this),e.call(this))}:t:e},Tr._lifecycleHooks.forEach(function(e){fi[e]=ke;}),Tr._assetTypes.forEach(function(e){fi[e+"s"]=Ae;}),fi.watch=function(e,t){if(!t){ return e; }if(!e){ return t; }var n={};u(n,e);for(var r in t){var i=n[r],a=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(a):[a];}return n},fi.props=fi.methods=fi.computed=function(e,t){if(!t){ return e; }if(!e){ return t; }var n=Object.create(null);return u(n,e),u(n,t),n};var di=function(e,t){return void 0===t?e:t},pi=Object.freeze({defineReactive:E,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:yr,remove:r,hasOwn:i,isPrimitive:a,cached:o,camelize:$r,capitalize:wr,hyphenate:xr,bind:s,toArray:c,extend:u,isObject:l,isPlainObject:f,toObject:d,noop:p,no:Or,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:Er,inBrowser:jr,UA:Lr,isIE:Nr,isIE9:Dr,isEdge:Mr,isAndroid:Pr,isIOS:Rr,devtools:Ir,nextTick:Br,get _Set(){return gr},mergeOptions:Ee,resolveAsset:je,warn:li,formatComponentName:ui,validateProp:Le}),vi={name:"keep-alive",abstract:!0,created:function(){this.cache=Object.create(null);},render:function(){var e=X(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=null==e.key?t.Ctor.cid+"::"+t.tag:e.key;this.cache[n]?e.child=this.cache[n].child:this.cache[n]=e,e.data.keepAlive=!0;}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];ne(n.child,"deactivated"),n.child.$destroy();}}},hi={KeepAlive:vi};Fe(Ce),Object.defineProperty(Ce.prototype,"$isServer",{get:function(){return Tr._isServer}}),Ce.version="2.0.3";var mi,gi=n("value,selected,checked,muted"),yi=n("contenteditable,draggable,spellcheck"),_i=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),bi="http://www.w3.org/1999/xlink",$i=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},wi=function(e){return $i(e)?e.slice(6,e.length):""},Ci=function(e){return null==e||e===!1},xi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ki=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),Ai=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),Oi=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),Ti=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),Si=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ei=function(e){return"pre"===e},ji=function(e){return ki(e)||Si(e)},Li=Object.create(null),Ni=Object.freeze({createElement:Ze,createElementNS:Ge,createTextNode:Ye,createComment:Qe,insertBefore:Xe,removeChild:et,appendChild:tt,parentNode:nt,nextSibling:rt,tagName:it,setTextContent:at,childNodes:ot,setAttribute:st}),Di={create:function(e,t){ct(t);},update:function(e,t){e.data.ref!==t.data.ref&&(ct(e,!0),ct(t));},destroy:function(e){ct(e,!0);}},Mi=new ri("",{},[]),Pi=["create","update","remove","destroy"],Ri={create:vt,update:vt,destroy:function(e){vt(e,Mi);}},Ii=Object.create(null),Bi=[Di,Ri],Fi={create:yt,update:yt},Hi={create:bt,update:bt},Ui={create:$t,update:$t},zi={create:wt,update:wt},Vi=["Webkit","Moz","ms"],Ji=o(function(e){if(mi=mi||document.createElement("div"),e=$r(e),"filter"!==e&&e in mi.style){ return e; }for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Vi.length;n++){var r=Vi[n]+t;if(r in mi.style){ return r }}}),qi={create:Ct,update:Ct},Ki=jr&&!Dr,Wi="transition",Zi="animation",Gi="transition",Yi="transitionend",Qi="animation",Xi="animationend";Ki&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Gi="WebkitTransition",Yi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Qi="WebkitAnimation",Xi="webkitAnimationEnd"));var ea=jr&&window.requestAnimationFrame||setTimeout,ta=/\b(transform|all)(,|$)/,na=o(function(e){return{enterClass:e+"-enter",leaveClass:e+"-leave",appearClass:e+"-enter",enterActiveClass:e+"-enter-active",leaveActiveClass:e+"-leave-active",appearActiveClass:e+"-enter-active"}}),ra=jr?{create:function(e,t){t.data.show||Nt(t);},remove:function(e,t){e.data.show?t():Dt(e,t);}}:{},ia=[Fi,Hi,Ui,zi,qi,ra],aa=ia.concat(Bi),oa=pt({nodeOps:Ni,modules:aa});Dr&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Ut(e,"input");});var sa={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Rt(e,t,n.context);};r(),(Nr||Mr)&&setTimeout(r,0);}else{ "textarea"!==n.tag&&"text"!==e.type||t.modifiers.lazy||(Pr||(e.addEventListener("compositionstart",Ft),e.addEventListener("compositionend",Ht)),Dr&&(e.vmodel=!0)); }},componentUpdated:function(e,t,n){if("select"===n.tag){Rt(e,t,n.context);var r=e.multiple?t.value.some(function(t){return It(t,e.options)}):t.value!==t.oldValue&&It(t.value,e.options);r&&Ut(e,"change");}}},ca={bind:function(e,t,n){var r=t.value;n=zt(n);var i=n.data&&n.data.transition;r&&i&&!Dr&&Nt(n);var a="none"===e.style.display?"":e.style.display;e.style.display=r?a:"none",e.__vOriginalDisplay=a;},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=zt(n);var a=n.data&&n.data.transition;a&&!Dr?r?(Nt(n),e.style.display=e.__vOriginalDisplay):Dt(n,function(){e.style.display="none";}):e.style.display=r?e.__vOriginalDisplay:"none";}}},ua={model:sa,show:ca},la={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String},fa={name:"transition",props:la,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(Kt(this.$vnode)){ return i; }var a=Vt(i);if(!a){ return i; }if(this._leaving){ return qt(e,i); }var o=a.key=null==a.key||a.isStatic?"__v"+(a.tag+this._uid)+"__":a.key,s=(a.data||(a.data={})).transition=Jt(this),c=this._vnode,l=Vt(c);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),l&&l.data&&l.key!==o){var f=l.data.transition=u({},s);if("out-in"===r){ return this._leaving=!0,q(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate();},o),qt(e,i); }if("in-out"===r){var d,p=function(){d();};q(s,"afterEnter",p,o),q(s,"enterCancelled",p,o),q(f,"delayLeave",function(e){d=e;},o);}}return i}}},da=u({tag:String,moveClass:String},la);delete da.mode;var pa={props:da,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],a=this.children=[],o=Jt(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(a.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o);}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d);}this.kept=e(t,null,u),this.removed=l;}return e(t,null,a)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept;},updated:function(){var e=this.prevChildren,t=this.moveClass||this.name+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(Wt),e.forEach(Zt),e.forEach(Gt);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ot(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Yi,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Yi,e),n._moveCb=null,Tt(n,t));});}});}},methods:{hasMove:function(e,t){if(!Ki){ return!1; }if(null!=this._hasMove){ return this._hasMove; }Ot(e,t);var n=Et(e);return Tt(e,t),this._hasMove=n.hasTransform}}},va={Transition:fa,TransitionGroup:pa};Ce.config.isUnknownElement=Ke,Ce.config.isReservedTag=ji,Ce.config.getTagNamespace=qe,Ce.config.mustUseProp=gi,u(Ce.options.directives,ua),u(Ce.options.components,va),Ce.prototype.__patch__=Tr._isServer?p:oa,Ce.prototype.$mount=function(e,t){return e=e&&!Tr._isServer?We(e):void 0,this._mount(e,t)},setTimeout(function(){Tr.devtools&&Ir&&Ir.emit("init",Ce);},0);var ha=!!jr&&Yt("\n","&#10;"),ma=document.createElement("div"),ga=/([^\s"'<>\/=]+)/,ya=/(?:=)/,_a=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],ba=new RegExp("^\\s*"+ga.source+"(?:\\s*("+ya.source+")\\s*(?:"+_a.join("|")+"))?"),$a="[a-zA-Z_][\\w\\-\\.]*",wa="((?:"+$a+"\\:)?"+$a+")",Ca=new RegExp("^<"+wa),xa=/^\s*(\/?)>/,ka=new RegExp("^<\\/"+wa+"[^>]*>"),Aa=/^<!DOCTYPE [^>]+>/i,Oa=!1;"x".replace(/x(.)?/g,function(e,t){Oa=""===t;});var Ta,Sa,Ea,ja,La,Na,Da,Ma,Pa,Ra,Ia,Ba,Fa,Ha,Ua,za,Va,Ja=n("script,style",!0),qa={},Ka=/&lt;/g,Wa=/&gt;/g,Za=/&#10;/g,Ga=/&amp;/g,Ya=/&quot;/g,Qa=/\{\{((?:.|\n)+?)\}\}/g,Xa=/[-.*+?^${}()|[\]\/\\]/g,eo=o(function(e){var t=e[0].replace(Xa,"\\$&"),n=e[1].replace(Xa,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),to=/^v-|^@|^:/,no=/(.*?)\s+(?:in|of)\s+(.*)/,ro=/\(([^,]*),([^,]*)(?:,([^,]*))?\)/,io=/^:|^v-bind:/,ao=/^@|^v-on:/,oo=/:(.*)$/,so=/\.[^\.]+/g,co=/\u2028|\u2029/g,uo=o(Qt),lo=/^xmlns:NS\d+/,fo=/^NS\d+:/,po=o(Ln),vo=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*\s*$/,ho={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},mo={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:"if($event.target !== $event.currentTarget)return;"},go={bind:Hn,cloak:p},yo=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),{staticKeys:["staticClass"],transformNode:nr,genData:rr}),_o={transformNode:ir,genData:ar},bo=[yo,_o],$o={model:or,text:fr,html:dr},wo=Object.create(null),Co={isIE:Nr,expectHTML:!0,modules:bo,staticKeys:v(bo),directives:$o,isReservedTag:ji,isUnaryTag:Ai,mustUseProp:gi,getTagNamespace:qe,isPreTag:Ei},xo=o(function(e){var t=We(e);return t&&t.innerHTML}),ko=Ce.prototype.$mount;return Ce.prototype.$mount=function(e,t){if(e=e&&We(e),e===document.body||e===document.documentElement){ return this; }var n=this.$options;if(!n.render){var r=n.template;if(r){ if("string"==typeof r){ "#"===r.charAt(0)&&(r=xo(r)); }else{if(!r.nodeType){ return this; }r=r.innerHTML;} }else { e&&(r=mr(e)); }if(r){var i=vr(r,{warn:li,shouldDecodeNewlines:ha,delimiters:n.delimiters},this),a=i.render,o=i.staticRenderFns;n.render=a,n.staticRenderFns=o;}}return ko.call(this,e,t)},Ce.compile=vr,Ce});
});

var vueRouter$1 = createCommonjsModule(function (module, exports) {
/**
 * vue-router v2.0.1
 * (c) 2016 Evan You
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueRouter = factory());
}(commonjsGlobal, (function () { 'use strict';

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});
    var depth = 0;
    var inactive = false;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }

    data.routerViewDepth = depth;
    var matched = route.matched[depth];
    if (!matched) {
      return h()
    }

    var name = props.name;
    var component = inactive
      ? cache[name]
      : (cache[name] = matched.components[name]);

    if (!inactive) {
      var hooks = data.hook || (data.hook = {});
      hooks.init = function (vnode) {
        matched.instances[name] = vnode.child;
      };
      hooks.destroy = function (vnode) {
        if (matched.instances[name] === vnode.child) {
          matched.instances[name] = undefined;
        }
      };
    }

    return h(component, data, children)
  }
};

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  if (relative.charAt(0) === '/') {
    return relative
  }

  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '.') {
      continue
    } else if (segment === '..') {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

/*  */

var encode = encodeURIComponent;
var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery
) {
  if ( extraQuery === void 0 ) { extraQuery = {}; }

  if (query) {
    var parsedQuery;
    try {
      parsedQuery = parseQuery(query);
    } catch (e) {
      warn(false, e.message);
      parsedQuery = {};
    }
    for (var key in extraQuery) {
      parsedQuery[key] = extraQuery[key];
    }
    return parsedQuery
  } else {
    return extraQuery
  }
}

function parseQuery (query) {
  var res = Object.create(null);

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).sort().map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

function createRoute (
  record,
  location,
  redirectedFrom
) {
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (ref) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) { query = {}; }
  var hash = ref.hash; if ( hash === void 0 ) { hash = ''; }

  return (path || '/') + stringifyQuery(query) + hash
}

var trailingSlashRE = /\/$/;
function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) { a = {}; }
  if ( b === void 0 ) { b = {}; }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.indexOf(target.path) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

function normalizeLocation (
  raw,
  current,
  append
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  if (next.name || next._normalized) {
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append)
    : (current && current.path) || '/';
  var query = resolveQuery(parsedPath.query, next.query);
  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var to = normalizeLocation(this.to, current, this.append);
    var resolved = router.match(to);
    var fullPath = resolved.redirectedFrom || resolved.fullPath;
    var base = router.history.base;
    var href = base ? cleanPath(base + fullPath) : fullPath;
    var classes = {};
    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
    var compareTarget = to.path ? createRoute(null, to) : resolved;
    classes[activeClass] = this.exact
      ? isSameRoute(current, compareTarget)
      : isIncludedRoute(current, compareTarget);

    var on = {
      click: function (e) {
        // don't redirect with control keys
        /* istanbul ignore if */
        if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
        // don't redirect when preventDefault called
        /* istanbul ignore if */
        if (e.defaultPrevented) { return }
        // don't redirect on right click
        /* istanbul ignore if */
        if (e.button !== 0) { return }
        e.preventDefault();
        if (this$1.replace) {
          router.replace(to);
        } else {
          router.push(to);
        }
      }
    };

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        var aData = a.data || (a.data = {});
        aData.on = on;
        var aAttrs = aData.attrs || (aData.attrs = {});
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get$1 () { return this.$root._route }
  });

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (this.$options.router) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);
}

var __moduleExports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = __moduleExports;

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string} str
 * @return {!Array}
 */
function parse (str) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || '/';
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?');

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: escapeGroup(pattern)
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @return {!function(Object=, Object=)}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path);
  var re = tokensToRegExp(tokens, options);

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i]);
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';
  var lastToken = tokens[tokens.length - 1];
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken);

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)';
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || [];

  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys);
    keys = [];
  } else if (!options) {
    options = {};
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

function createRouteMap (routes) {
  var pathMap = Object.create(null);
  var nameMap = Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathMap, nameMap, route);
  });

  return {
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  assert(path != null, "\"path\" is required in a route configuration.");

  var record = {
    path: normalizePath(path, parent),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {}
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    route.children.forEach(function (child) {
      addRouteRecord(pathMap, nameMap, child, record);
    });
  }

  if (route.alias) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path);
      });
    } else {
      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path);
    }
  }

  pathMap[record.path] = record;
  if (name) { nameMap[name] = record; }
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

var regexpCache = Object.create(null);

var regexpCompileCache = Object.create(null);

function createMatcher (routes) {
  var ref = createRouteMap(routes);
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var path in pathMap) {
        if (matchRoute(path, location.params, location.path)) {
          return _createRoute(pathMap[path], location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom)
  }

  return match
}

function matchRoute (
  path,
  params,
  pathname
) {
  var keys, regexp;
  var hit = regexpCache[path];
  if (hit) {
    keys = hit.keys;
    regexp = hit.regexp;
  } else {
    keys = [];
    regexp = index(path, keys);
    regexpCache[path] = { keys: keys, regexp: regexp };
  }
  var m = pathname.match(regexp);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) { params[key.name] = val; }
  }

  return true
}

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    assert(false, ("missing param for " + routeMsg + ": " + (e.message)));
    return ''
  }
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var inBrowser = typeof window !== 'undefined';

var supportsHistory = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */


var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.transitionTo = function transitionTo (location, cb) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    cb && cb(route);
    this$1.ensureURL();
  });
};

History.prototype.confirmTransition = function confirmTransition (route, cb) {
    var this$1 = this;

  var current = this.current;
  if (isSameRoute(route, current)) {
    this.ensureURL();
    return
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) { return }
    hook(route, current, function (to) {
      if (to === false) {
        // next(false) -> abort navigation, ensure current URL
        this$1.ensureURL();
      } else if (typeof to === 'string' || typeof to === 'object') {
        // next('/') or next({ path: '/' }) -> redirect
        this$1.push(to);
      } else {
        // confirm transition and pass on the value
        next(to);
      }
    });
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
      return this$1.current === route
    });
    // wait until async components are resolved before
    // extracting in-component enter guards
    runQueue(enterGuards, iterator, function () {
      if (this$1.pending === route) {
        this$1.pending = null;
        cb(route);
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { return cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl ? baseEl.getAttribute('href') : '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractLeaveGuards (matched) {
  return flatMapComponents(matched, function (def, instance) {
    var guard = def && def.beforeRouteLeave;
    if (guard) {
      return function routeLeaveGuard () {
        return guard.apply(instance, arguments)
      }
    }
  }).reverse()
}

function extractEnterGuards (
  matched,
  cbs,
  isValid
) {
  return flatMapComponents(matched, function (def, _, match, key) {
    var guard = def && def.beforeRouteEnter;
    if (guard) {
      return function routeEnterGuard (to, from, next) {
        return guard(to, from, function (cb) {
          next(cb);
          if (typeof cb === 'function') {
            cbs.push(function () {
              // #750
              // if a router-view is wrapped with an out-in transition,
              // the instance may not have been registered at this time.
              // we will need to poll for registration until current route
              // is no longer valid.
              poll(cb, match.instances, key, isValid);
            });
          }
        })
      }
    }
  })
}

function poll (cb, instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return flatMapComponents(matched, function (def, _, match, key) {
    // if it's a function and doesn't have Vue options attached,
    // assume it's an async component resolve function.
    // we are not using Vue's default async resolving mechanism because
    // we want to halt the navigation until the incoming component has been
    // resolved.
    if (typeof def === 'function' && !def.options) {
      return function (to, from, next) {
        var resolve = function (resolvedDef) {
          match.components[key] = resolvedDef;
          next();
        };

        var reject = function (reason) {
          warn(false, ("Failed to resolve async component " + key + ": " + reason));
          next(false);
        };

        var res = def(resolve, reject);
        if (res && typeof res.then === 'function') {
          res.then(resolve, reject);
        }
      }
    }
  })
}

function flatMapComponents (
  matched,
  fn
) {
  return Array.prototype.concat.apply([], matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

/*  */

function saveScrollPosition (key) {
  if (!key) { return }
  window.sessionStorage.setItem(key, JSON.stringify({
    x: window.pageXOffset,
    y: window.pageYOffset
  }));
}

function getScrollPosition (key) {
  if (!key) { return }
  return JSON.parse(window.sessionStorage.getItem(key))
}

function getElementPosition (el) {
  var docRect = document.documentElement.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */


var genKey = function () { return String(Date.now()); };
var _key = genKey();

var HTML5History = (function (History) {
  function HTML5History (router, base) {
    var this$1 = this;

    History.call(this, router, base);

    this.transitionTo(getLocation(this.base));

    var expectScroll = router.options.scrollBehavior;
    window.addEventListener('popstate', function (e) {
      _key = e.state && e.state.key;
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (next) {
        if (expectScroll) {
          this$1.handleScroll(next, current, true);
        }
      });
    });

    if (expectScroll) {
      window.addEventListener('scroll', function () {
        saveScrollPosition(_key);
      });
    }
  }

  if ( History ) { HTML5History.__proto__ = History; }
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location) {
    var this$1 = this;

    var current = this.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      this$1.handleScroll(route, current, false);
    });
  };

  HTML5History.prototype.replace = function replace (location) {
    var this$1 = this;

    var current = this.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      this$1.handleScroll(route, current, false);
    });
  };

  HTML5History.prototype.ensureURL = function ensureURL () {
    if (getLocation(this.base) !== this.current.fullPath) {
      replaceState(cleanPath(this.base + this.current.fullPath));
    }
  };

  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
    var router = this.router;
    if (!router.app) {
      return
    }

    var behavior = router.options.scrollBehavior;
    if (!behavior) {
      return
    }
    assert(typeof behavior === 'function', "scrollBehavior must be a function");

    // wait until re-render finishes before scrolling
    router.app.$nextTick(function () {
      var position = getScrollPosition(_key);
      var shouldScroll = behavior(to, from, isPop ? position : null);
      if (!shouldScroll) {
        return
      }
      var isObject = typeof shouldScroll === 'object';
      if (isObject && typeof shouldScroll.selector === 'string') {
        var el = document.querySelector(shouldScroll.selector);
        if (el) {
          position = getElementPosition(el);
        } else if (isValidPosition(shouldScroll)) {
          position = normalizePosition(shouldScroll);
        }
      } else if (isObject && isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }

      if (position) {
        window.scrollTo(position.x, position.y);
      }
    });
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

function pushState (url, replace) {
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
    saveScrollPosition(_key);
  } catch (e) {
    window.location[replace ? 'assign' : 'replace'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */


var HashHistory = (function (History) {
  function HashHistory (router, base, fallback) {
    var this$1 = this;

    History.call(this, router, base);

    // check history fallback deeplinking
    if (fallback && this.checkFallback()) {
      return
    }

    ensureSlash();
    this.transitionTo(getHash(), function () {
      window.addEventListener('hashchange', function () {
        this$1.onHashChange();
      });
    });
  }

  if ( History ) { HashHistory.__proto__ = History; }
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  HashHistory.prototype.checkFallback = function checkFallback () {
    var location = getLocation(this.base);
    if (!/^\/#/.test(location)) {
      window.location.replace(
        cleanPath(this.base + '/#' + location)
      );
      return true
    }
  };

  HashHistory.prototype.onHashChange = function onHashChange () {
    if (!ensureSlash()) {
      return
    }
    this.transitionTo(getHash(), function (route) {
      replaceHash(route.fullPath);
    });
  };

  HashHistory.prototype.push = function push (location) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
    });
  };

  HashHistory.prototype.replace = function replace (location) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
    });
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL () {
    if (getHash() !== this.current.fullPath) {
      replaceHash(this.current.fullPath);
    }
  };

  return HashHistory;
}(History));

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History) {
  function AbstractHistory (router) {
    History.call(this, router);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) { AbstractHistory.__proto__ = History; }
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
    });
  };

  AbstractHistory.prototype.replace = function replace (location) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
    });
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) { options = {}; }

  this.app = null;
  this.options = options;
  this.beforeHooks = [];
  this.afterHooks = [];
  this.match = createMatcher(options.routes || []);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsHistory;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;
};

var prototypeAccessors = { currentRoute: {} };

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.app = app;

  var ref = this;
    var mode = ref.mode;
    var options = ref.options;
    var fallback = ref.fallback;
  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this);
      break
    default:
      assert(false, ("invalid mode: " + mode));
  }

  this.history.listen(function (route) {
    this$1.app._route = route;
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  this.beforeHooks.push(fn);
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  this.afterHooks.push(fn);
};

VueRouter.prototype.push = function push (location) {
  this.history.push(location);
};

VueRouter.prototype.replace = function replace (location) {
  this.history.replace(location);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents () {
  if (!this.currentRoute) {
    return []
  }
  return [].concat.apply([], this.currentRoute.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

VueRouter.install = install;

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

return VueRouter;

})));
});

var App = {render: function(){with(this){return _h('div',{},[_h('div',{staticClass:"ui secondary menu"},[_m(0),_h('div',{staticClass:"right menu"},[_m(1),_h('a',{staticClass:"ui item"},[_h('router-link',{attrs:{"to":"/login"}},["Login"])])]),_h('div',{staticClass:"mainWindow"},[_h('router-view')])])])}},staticRenderFns: [function(){with(this){return _h('a',{staticClass:"item active"},["Home"])}},function(){with(this){return _h('div',{staticClass:"item"},[_h('div',{staticClass:"ui icon input"},[_h('input',{attrs:{"type":"text","placeholder":"Search..."}})," ",_h('i',{staticClass:"search link icon"})])])}}],
  data: function data() {
    return {
      msg: 'Vue.js - The Progressive JavaScript Framework'
    }
  }
};

var Login = {render: function(){with(this){return _m(0)}},staticRenderFns: [function(){with(this){return _h('form',{staticClass:"ui form"},[_h('div',{staticClass:"field"},[_h('label',["First Name"]),_h('input',{attrs:{"type":"text","name":"first-name","placeholder":"First Name"}})]),_h('div',{staticClass:"field"},[_h('label',["Last Name"]),_h('input',{attrs:{"type":"text","name":"last-name","placeholder":"Last Name"}})]),_h('div',{staticClass:"field"},[_h('div',{staticClass:"ui checkbox"},[_h('input',{staticClass:"hidden",attrs:{"type":"checkbox","tabindex":"0"}}),_h('label',["I agree to the Terms and Conditions"])])]),_h('button',{staticClass:"ui button",attrs:{"type":"submit"}},["Submit"])])}}],
  data: function data() {
    return {
      msg: 'Vue.js - The Progressive JavaScript Framework'
    }
  }
};

// import VueResource from 'resource'
vue_min$1.use(vueRouter$1);
// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
var routes = [
  { path: '/login', component: Login }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new vueRouter$1({
  mode: "history",
  routes: routes // short for routes: routes
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new vue_min$1({
  el: "#index",
  router: router,
  render: function (h) { return h(App); }
});
//# sourceMappingURL=app.js.map
