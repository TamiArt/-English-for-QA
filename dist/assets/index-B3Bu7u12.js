(function(){const k=document.createElement("link").relList;if(k&&k.supports&&k.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))f(O);new MutationObserver(O=>{for(const H of O)if(H.type==="childList")for(const G of H.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&f(G)}).observe(document,{childList:!0,subtree:!0});function T(O){const H={};return O.integrity&&(H.integrity=O.integrity),O.referrerPolicy&&(H.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?H.credentials="include":O.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function f(O){if(O.ep)return;O.ep=!0;const H=T(O);fetch(O.href,H)}})();var Sc={exports:{}},ia={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a2;function _3(){if(a2)return ia;a2=1;var d=Symbol.for("react.transitional.element"),k=Symbol.for("react.fragment");function T(f,O,H){var G=null;if(H!==void 0&&(G=""+H),O.key!==void 0&&(G=""+O.key),"key"in O){H={};for(var q in O)q!=="key"&&(H[q]=O[q])}else H=O;return O=H.ref,{$$typeof:d,type:f,key:G,ref:O!==void 0?O:null,props:H}}return ia.Fragment=k,ia.jsx=T,ia.jsxs=T,ia}var i2;function D3(){return i2||(i2=1,Sc.exports=_3()),Sc.exports}var s=D3(),zc={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u2;function M3(){if(u2)return Z;u2=1;var d=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),G=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),mt=Symbol.iterator;function _t(m){return m===null||typeof m!="object"?null:(m=mt&&m[mt]||m["@@iterator"],typeof m=="function"?m:null)}var ct={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,It={};function un(m,w,Y){this.props=m,this.context=w,this.refs=It,this.updater=Y||ct}un.prototype.isReactComponent={},un.prototype.setState=function(m,w){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,w,"setState")},un.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Ie(){}Ie.prototype=un.prototype;function Bn(m,w,Y){this.props=m,this.context=w,this.refs=It,this.updater=Y||ct}var Vn=Bn.prototype=new Ie;Vn.constructor=Bn,M(Vn,un.prototype),Vn.isPureReactComponent=!0;var sn=Array.isArray;function F(){}var it={H:null,A:null,T:null,S:null},qn=Object.prototype.hasOwnProperty;function En(m,w,Y){var B=Y.ref;return{$$typeof:d,type:m,key:w,ref:B!==void 0?B:null,props:Y}}function Sn(m,w){return En(m.type,w,m.props)}function cn(m){return typeof m=="object"&&m!==null&&m.$$typeof===d}function ge(m){var w={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(Y){return w[Y]})}var We=/\/+/g;function Mt(m,w){return typeof m=="object"&&m!==null&&m.key!=null?ge(""+m.key):w.toString(36)}function x(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(F,F):(m.status="pending",m.then(function(w){m.status==="pending"&&(m.status="fulfilled",m.value=w)},function(w){m.status==="pending"&&(m.status="rejected",m.reason=w)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function L(m,w,Y,B,rt){var lt=typeof m;(lt==="undefined"||lt==="boolean")&&(m=null);var ut=!1;if(m===null)ut=!0;else switch(lt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(m.$$typeof){case d:case k:ut=!0;break;case A:return ut=m._init,L(ut(m._payload),w,Y,B,rt)}}if(ut)return rt=rt(m),ut=B===""?"."+Mt(m,0):B,sn(rt)?(Y="",ut!=null&&(Y=ut.replace(We,"$&/")+"/"),L(rt,w,Y,"",function(re){return re})):rt!=null&&(cn(rt)&&(rt=Sn(rt,Y+(rt.key==null||m&&m.key===rt.key?"":(""+rt.key).replace(We,"$&/")+"/")+ut)),w.push(rt)),1;ut=0;var U=B===""?".":B+":";if(sn(m))for(var X=0;X<m.length;X++)B=m[X],lt=U+Mt(B,X),ut+=L(B,w,Y,lt,rt);else if(X=_t(m),typeof X=="function")for(m=X.call(m),X=0;!(B=m.next()).done;)B=B.value,lt=U+Mt(B,X++),ut+=L(B,w,Y,lt,rt);else if(lt==="object"){if(typeof m.then=="function")return L(x(m),w,Y,B,rt);throw w=String(m),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return ut}function Q(m,w,Y){if(m==null)return m;var B=[],rt=0;return L(m,B,"","",function(lt){return w.call(Y,lt,rt++)}),B}function bt(m){if(m._status===-1){var w=m._result,Y=w();Y.then(function(B){(m._status===0||m._status===-1)&&(m._status=1,m._result=B,Y.status===void 0&&(Y.status="fulfilled",Y.value=B))},function(B){(m._status===0||m._status===-1)&&(m._status=2,m._result=B,Y.status===void 0&&(Y.status="rejected",Y.reason=B))}),m._status===-1&&(m._status=0,m._result=Y)}if(m._status===1)return m._result.default;throw m._result}var ft=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function Cn(m){var w=it.T,Y={};Y.types=w!==null?w.types:null,it.T=Y;try{var B=m(),rt=it.S;rt!==null&&rt(Y,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(F,ft)}catch(lt){ft(lt)}finally{w!==null&&Y.types!==null&&(w.types=Y.types),it.T=w}}function ee(m){var w=it.T;if(w!==null){var Y=w.types;Y===null?w.types=[m]:Y.indexOf(m)===-1&&Y.push(m)}else Cn(ee.bind(null,m))}var Fe={map:Q,forEach:function(m,w,Y){Q(m,function(){w.apply(this,arguments)},Y)},count:function(m){var w=0;return Q(m,function(){w++}),w},toArray:function(m){return Q(m,function(w){return w})||[]},only:function(m){if(!cn(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return Z.Activity=E,Z.Children=Fe,Z.Component=un,Z.Fragment=T,Z.Profiler=O,Z.PureComponent=Bn,Z.StrictMode=f,Z.Suspense=j,Z.ViewTransition=_,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=it,Z.__COMPILER_RUNTIME={__proto__:null,c:function(m){return it.H.useMemoCache(m)}},Z.addTransitionType=ee,Z.cache=function(m){return function(){return m.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(m,w,Y){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var B=M({},m.props),rt=m.key;if(w!=null)for(lt in w.key!==void 0&&(rt=""+w.key),w)!qn.call(w,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&w.ref===void 0||(B[lt]=w[lt]);var lt=arguments.length-2;if(lt===1)B.children=Y;else if(1<lt){for(var ut=Array(lt),U=0;U<lt;U++)ut[U]=arguments[U+2];B.children=ut}return En(m.type,rt,B)},Z.createContext=function(m){return m={$$typeof:G,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:H,_context:m},m},Z.createElement=function(m,w,Y){var B,rt={},lt=null;if(w!=null)for(B in w.key!==void 0&&(lt=""+w.key),w)qn.call(w,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(rt[B]=w[B]);var ut=arguments.length-2;if(ut===1)rt.children=Y;else if(1<ut){for(var U=Array(ut),X=0;X<ut;X++)U[X]=arguments[X+2];rt.children=U}if(m&&m.defaultProps)for(B in ut=m.defaultProps,ut)rt[B]===void 0&&(rt[B]=ut[B]);return En(m,lt,rt)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(m){return{$$typeof:q,render:m}},Z.isValidElement=cn,Z.lazy=function(m){return{$$typeof:A,_payload:{_status:-1,_result:m},_init:bt}},Z.memo=function(m,w){return{$$typeof:K,type:m,compare:w===void 0?null:w}},Z.startTransition=Cn,Z.unstable_useCacheRefresh=function(){return it.H.useCacheRefresh()},Z.use=function(m){return it.H.use(m)},Z.useActionState=function(m,w,Y){return it.H.useActionState(m,w,Y)},Z.useCallback=function(m,w){return it.H.useCallback(m,w)},Z.useContext=function(m){return it.H.useContext(m)},Z.useDebugValue=function(){},Z.useDeferredValue=function(m,w){return it.H.useDeferredValue(m,w)},Z.useEffect=function(m,w){return it.H.useEffect(m,w)},Z.useEffectEvent=function(m){return it.H.useEffectEvent(m)},Z.useId=function(){return it.H.useId()},Z.useImperativeHandle=function(m,w,Y){return it.H.useImperativeHandle(m,w,Y)},Z.useInsertionEffect=function(m,w){return it.H.useInsertionEffect(m,w)},Z.useLayoutEffect=function(m,w){return it.H.useLayoutEffect(m,w)},Z.useMemo=function(m,w){return it.H.useMemo(m,w)},Z.useOptimistic=function(m,w){return it.H.useOptimistic(m,w)},Z.useReducer=function(m,w,Y){return it.H.useReducer(m,w,Y)},Z.useRef=function(m){return it.H.useRef(m)},Z.useState=function(m){return it.H.useState(m)},Z.useSyncExternalStore=function(m,w,Y){return it.H.useSyncExternalStore(m,w,Y)},Z.useTransition=function(){return it.H.useTransition()},Z.version="19.3.0",Z}var s2;function xc(){return s2||(s2=1,zc.exports=M3()),zc.exports}var dt=xc(),Tc={exports:{}},ua={},wc={exports:{}},Oc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c2;function U3(){return c2||(c2=1,(function(d){function k(x,L){var Q=x.length;x.push(L);t:for(;0<Q;){var bt=Q-1>>>1,ft=x[bt];if(0<O(ft,L))x[bt]=L,x[Q]=ft,Q=bt;else break t}}function T(x){return x.length===0?null:x[0]}function f(x){if(x.length===0)return null;var L=x[0],Q=x.pop();if(Q!==L){x[0]=Q;t:for(var bt=0,ft=x.length,Cn=ft>>>1;bt<Cn;){var ee=2*(bt+1)-1,Fe=x[ee],m=ee+1,w=x[m];if(0>O(Fe,Q))m<ft&&0>O(w,Fe)?(x[bt]=w,x[m]=Q,bt=m):(x[bt]=Fe,x[ee]=Q,bt=ee);else if(m<ft&&0>O(w,Q))x[bt]=w,x[m]=Q,bt=m;else break t}}return L}function O(x,L){var Q=x.sortIndex-L.sortIndex;return Q!==0?Q:x.id-L.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var H=performance;d.unstable_now=function(){return H.now()}}else{var G=Date,q=G.now();d.unstable_now=function(){return G.now()-q}}var j=[],K=[],A=1,E=null,_=3,mt=!1,_t=!1,ct=!1,M=!1,It=typeof setTimeout=="function"?setTimeout:null,un=typeof clearTimeout=="function"?clearTimeout:null,Ie=typeof setImmediate<"u"?setImmediate:null;function Bn(x){for(var L=T(K);L!==null;){if(L.callback===null)f(K);else if(L.startTime<=x)f(K),L.sortIndex=L.expirationTime,k(j,L);else break;L=T(K)}}function Vn(x){if(ct=!1,Bn(x),!_t)if(T(j)!==null)_t=!0,sn||(sn=!0,cn());else{var L=T(K);L!==null&&Mt(Vn,L.startTime-x)}}var sn=!1,F=-1,it=5,qn=-1;function En(){return M?!0:!(d.unstable_now()-qn<it)}function Sn(){if(M=!1,sn){var x=d.unstable_now();qn=x;var L=!0;try{t:{_t=!1,ct&&(ct=!1,un(F),F=-1),mt=!0;var Q=_;try{n:{for(Bn(x),E=T(j);E!==null&&!(E.expirationTime>x&&En());){var bt=E.callback;if(typeof bt=="function"){E.callback=null,_=E.priorityLevel;var ft=bt(E.expirationTime<=x);if(x=d.unstable_now(),typeof ft=="function"){E.callback=ft,Bn(x),L=!0;break n}E===T(j)&&f(j),Bn(x)}else f(j);E=T(j)}if(E!==null)L=!0;else{var Cn=T(K);Cn!==null&&Mt(Vn,Cn.startTime-x),L=!1}}break t}finally{E=null,_=Q,mt=!1}L=void 0}}finally{L?cn():sn=!1}}}var cn;if(typeof Ie=="function")cn=function(){Ie(Sn)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,We=ge.port2;ge.port1.onmessage=Sn,cn=function(){We.postMessage(null)}}else cn=function(){It(Sn,0)};function Mt(x,L){F=It(function(){x(d.unstable_now())},L)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(x){x.callback=null},d.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):it=0<x?Math.floor(1e3/x):5},d.unstable_getCurrentPriorityLevel=function(){return _},d.unstable_next=function(x){switch(_){case 1:case 2:case 3:var L=3;break;default:L=_}var Q=_;_=L;try{return x()}finally{_=Q}},d.unstable_requestPaint=function(){M=!0},d.unstable_runWithPriority=function(x,L){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var Q=_;_=x;try{return L()}finally{_=Q}},d.unstable_scheduleCallback=function(x,L,Q){var bt=d.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?bt+Q:bt):Q=bt,x){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=Q+ft,x={id:A++,callback:L,priorityLevel:x,startTime:Q,expirationTime:ft,sortIndex:-1},Q>bt?(x.sortIndex=Q,k(K,x),T(j)===null&&x===T(K)&&(ct?(un(F),F=-1):ct=!0,Mt(Vn,Q-bt))):(x.sortIndex=ft,k(j,x),_t||mt||(_t=!0,sn||(sn=!0,cn()))),x},d.unstable_shouldYield=En,d.unstable_wrapCallback=function(x){var L=_;return function(){var Q=_;_=L;try{return x.apply(this,arguments)}finally{_=Q}}}})(Oc)),Oc}var f2;function R3(){return f2||(f2=1,wc.exports=U3()),wc.exports}var jc={exports:{}},Kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o2;function Y3(){if(o2)return Kt;o2=1;var d=xc();function k(A){var E="https://react.dev/errors/"+A;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)E+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+A+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(){}var f={d:{f:T,r:function(){throw Error(k(522))},D:T,C:T,L:T,m:T,X:T,S:T,M:T},p:0,findDOMNode:null},O=Symbol.for("react.portal"),H=Symbol.for("react.recoverable"),G=Symbol.for("react.optimistic_key");function q(A,E,_){var mt=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:mt==null?null:mt===G?G:""+mt,children:A,containerInfo:E,implementation:_}}var j=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function K(A,E){if(A==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Kt.browser=function(A){return{$$typeof:H,_reason:A}},Kt.createPortal=function(A,E){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(k(299));return q(A,E,null,_)},Kt.flushSync=function(A){var E=j.T,_=f.p;try{if(j.T=null,f.p=2,A)return A()}finally{j.T=E,f.p=_,f.d.f()}},Kt.preconnect=function(A,E){typeof A=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,f.d.C(A,E))},Kt.prefetchDNS=function(A){typeof A=="string"&&f.d.D(A)},Kt.preinit=function(A,E){if(typeof A=="string"&&E&&typeof E.as=="string"){var _=E.as,mt=K(_,E.crossOrigin),_t=typeof E.integrity=="string"?E.integrity:void 0,ct=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;_==="style"?f.d.S(A,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:mt,integrity:_t,fetchPriority:ct}):_==="script"&&f.d.X(A,{crossOrigin:mt,integrity:_t,fetchPriority:ct,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Kt.preinitModule=function(A,E){if(typeof A=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var _=K(E.as,E.crossOrigin);f.d.M(A,{crossOrigin:_,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0})}}else E==null&&f.d.M(A)},Kt.preload=function(A,E){if(typeof A=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var _=E.as,mt=K(_,E.crossOrigin);f.d.L(A,_,{crossOrigin:mt,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Kt.preloadModule=function(A,E){if(typeof A=="string")if(E){var _=K(E.as,E.crossOrigin);f.d.m(A,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:_,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0})}else f.d.m(A)},Kt.requestFormReset=function(A){f.d.r(A)},Kt.unstable_batchedUpdates=function(A,E){return A(E)},Kt.useFormState=function(A,E,_){return j.H.useFormState(A,E,_)},Kt.useFormStatus=function(){return j.H.useHostTransitionStatus()},Kt.version="19.3.0",Kt}var d2;function B3(){if(d2)return jc.exports;d2=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(k){console.error(k)}}return d(),jc.exports=Y3(),jc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m2;function V3(){if(m2)return ua;m2=1;var d=R3(),k=xc(),T=B3();function f(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function H(t){for(var n=t,e=n;e&&!e.alternate;)n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function G(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function q(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function j(t){if(H(t)!==t)throw Error(f(188))}function K(t){var n=t.alternate;if(!n){if(n=H(t),n===null)throw Error(f(188));return n!==t?null:t}for(var e=t,r=n;;){var l=e.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){e=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===e)return j(l),t;if(a===r)return j(l),n;a=a.sibling}throw Error(f(188))}if(e.return!==r.return)e=l,r=a;else{for(var i=!1,u=l.child;u;){if(u===e){i=!0,e=l,r=a;break}if(u===r){i=!0,r=l,e=a;break}u=u.sibling}if(!i){for(u=a.child;u;){if(u===e){i=!0,e=a,r=l;break}if(u===r){i=!0,r=a,e=l;break}u=u.sibling}if(!i)throw Error(f(189))}}if(e.alternate!==r)throw Error(f(190))}if(e.tag!==3)throw Error(f(188));return e.stateNode.current===e?t:n}function A(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=A(t),n!==null)return n;t=t.sibling}return null}function E(t,n,e,r,l,a){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&e(t,r,l,a)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&E(t.child,n,e,r,l,a))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function mt(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function _t(t){var n=[null,null],e=_(t);return e===null||ct(n,t,e.child,{foundSelf:!1}),n}function ct(t,n,e,r){for(;e!==null;){if(e===n)r.foundSelf=!0;else if(e.tag===5||e.tag===27||e.tag===6){if(r.foundSelf)return t[1]=e,!0;t[0]=e}else if((e.tag!==22||e.memoizedState===null)&&ct(t,n,e.child,r))return!0;e=e.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(f(559))}}var It=null,un=null;function Ie(t,n,e){return t===e?!0:t===n?(It=t,!0):!1}function Bn(t,n,e){return t===e?(un=t,!1):t===n?(un!==null&&(It=t),!0):!1}function Vn(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function sn(t,n,e){for(var r=0,l=t;l;l=e(l))r++;l=0;for(var a=n;a;a=e(a))l++;for(;0<r-l;)t=e(t),r--;for(;0<l-r;)n=e(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=e(t),n=e(n)}return null}var F=Object.assign,it=Symbol.for("react.element"),qn=Symbol.for("react.transitional.element"),En=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),cn=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),We=Symbol.for("react.consumer"),Mt=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),bt=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Cn=Symbol.for("react.activity"),ee=Symbol.for("react.legacy_hidden"),Fe=Symbol.for("react.memo_cache_sentinel"),m=Symbol.for("react.view_transition"),w=Symbol.for("react.recoverable"),Y=Symbol.iterator;function B(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sn:return"Fragment";case ge:return"Profiler";case cn:return"StrictMode";case L:return"Suspense";case Q:return"SuspenseList";case Cn:return"Activity";case m:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case En:return"Portal";case Mt:return t.displayName||"Context";case We:return(t._context.displayName||"Context")+".Consumer";case x:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bt:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case ft:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var ut=Array.isArray,U=k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},qi=[],Er=-1;function Gn(t){return{current:t}}function Vt(t){0>Er||(t.current=qi[Er],qi[Er]=null,Er--)}function kt(t,n){Er++,qi[Er]=t.current,t.current=n}var Ln=Gn(null),dl=Gn(null),ke=Gn(null),ca=Gn(null);function fa(t,n){switch(kt(ke,n),kt(dl,t),kt(Ln,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?hd(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=hd(n),t=pd(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Vt(Ln),kt(Ln,t)}function Sr(){Vt(Ln),Vt(dl),Vt(ke)}function Gi(t){var n=t.memoizedState;n!==null&&(cl._currentValue=n.memoizedState,kt(ca,t)),n=Ln.current;var e=pd(n,t.type);n!==e&&(kt(dl,t),kt(Ln,e))}function oa(t){dl.current===t&&(Vt(Ln),Vt(dl)),ca.current===t&&(Vt(ca),cl._currentValue=re)}var Li,_c;function Ee(t){if(Li===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Li=n&&n[1]||"",_c=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Li+t+_c}var Qi=!1;function Xi(t,n){if(!t||Qi)return"";Qi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(N){var h=N}Reflect.construct(t,[],z)}else{try{z.call()}catch(N){h=N}z=!1;try{var b=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),z=!0,new t}finally{z&&(b!==void 0?Object.defineProperty(t.prototype,"props",b):delete t.prototype.props)}}}else{try{throw Error()}catch(N){h=N}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(N){if(N&&h&&typeof N.stack=="string")return[N.stack,h.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),i=a[0],u=a[1];if(i&&u){var c=i.split(`
`),v=u.split(`
`);for(l=r=0;r<c.length&&!c[r].includes("DetermineComponentFrameRoot");)r++;for(;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;if(r===c.length||l===v.length)for(r=c.length-1,l=v.length-1;1<=r&&0<=l&&c[r]!==v[l];)l--;for(;1<=r&&0<=l;r--,l--)if(c[r]!==v[l]){if(r!==1||l!==1)do if(r--,l--,0>l||c[r]!==v[l]){var g=`
`+c[r].replace(" at new "," at ");return t.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",t.displayName)),g}while(1<=r&&0<=l);break}}}finally{Qi=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ee(e):""}function R2(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Xi(t.type,!1);case 11:return Xi(t.type.render,!1);case 1:return Xi(t.type,!0);case 31:return Ee("Activity");case 30:return Ee("ViewTransition");default:return""}}function Dc(t){try{var n="",e=null;do n+=R2(t,e),e=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Zi=Object.prototype.hasOwnProperty,Ki=d.unstable_scheduleCallback,Ji=d.unstable_cancelCallback,Y2=d.unstable_shouldYield,B2=d.unstable_requestPaint,fn=d.unstable_now,V2=d.unstable_getCurrentPriorityLevel,Mc=d.unstable_ImmediatePriority,Uc=d.unstable_UserBlockingPriority,da=d.unstable_NormalPriority,q2=d.unstable_LowPriority,Rc=d.unstable_IdlePriority,G2=d.log,L2=d.unstable_setDisableYieldValue,ml=null,on=null;function Se(t){if(typeof G2=="function"&&L2(t),on&&typeof on.setStrictMode=="function")try{on.setStrictMode(ml,t)}catch{}}var dn=Math.clz32?Math.clz32:Z2,Q2=Math.log,X2=Math.LN2;function Z2(t){return t>>>=0,t===0?32:31-(Q2(t)/X2|0)|0}var ma=256,ha=262144,pa=4194304;function $e(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function va(t,n,e){var r=t.pendingLanes;if(r===0)return 0;var l=0,a=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var u=r&134217727;return u!==0?(r=u&~a,r!==0?l=$e(r):(i&=u,i!==0?l=$e(i):e||(e=u&~t,e!==0&&(l=$e(e))))):(u=r&~a,u!==0?l=$e(u):i!==0?l=$e(i):e||(e=r&~t,e!==0&&(l=$e(e)))),l===0?0:n!==0&&n!==l&&(n&a)===0&&(a=l&-l,e=n&-n,a>=e||a===32&&(e&4194048)!==0)?n:l}function hl(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Yc(t,n){(n&8)!==0&&(n|=n&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=n;0<e;){var r=31-dn(e),l=1<<r;n|=t[r],e&=~l}return n}function K2(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bc(){var t=pa;return pa<<=1,(pa&62914560)===0&&(pa=4194304),t}function Ii(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function pl(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function J2(t,n,e,r,l,a){var i=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var u=t.entanglements,c=t.expirationTimes,v=t.hiddenUpdates;for(e=i&~e;0<e;){var g=31-dn(e),z=1<<g;u[g]=0,c[g]=-1;var h=v[g];if(h!==null)for(v[g]=null,g=0;g<h.length;g++){var b=h[g];b!==null&&(b.lane&=-536870913)}e&=~z}r!==0&&Vc(t,r,0),a!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=a&~(i&~n))}function Vc(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-dn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|e&261930}function qc(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var r=31-dn(e),l=1<<r;l&n|t[r]&n&&(t[r]|=n),e&=~l}}function Gc(t,n){var e=n&-n;return e=(e&42)!==0?1:Wi(e),(e&(t.suspendedLanes|n))!==0?0:e}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Lc(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:$d(t.type))}function Qc(t,n){var e=X.p;try{return X.p=t,n()}finally{X.p=e}}var le=Math.random().toString(36).slice(2),qt="__reactFiber$"+le,tn="__reactProps$"+le,zr="__reactContainer$"+le,Xc="__reactEvents$"+le,I2="__reactListeners$"+le,W2="__reactHandles$"+le,Zc="__reactResources$"+le,vl="__reactMarker$"+le,ya="__reactLoad$"+le;function ba(t){delete t[qt],delete t[tn],delete t[I2],delete t[W2]}function Pe(t){var n;if(n=t[qt])return n;for(var e=t.parentNode;e;){if(n=e[zr]||e[qt]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=Cd(t);t!==null;){if(e=t[qt])return e;t=Cd(t)}return n}t=e,e=t.parentNode}return null}function Tr(t){if(t=t[qt]||t[zr]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function yl(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(f(33))}function wr(t){var n=t[Zc];return n||(n=t[Zc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ut(t){t[vl]=!0}function Kc(t){t[ya]=void 0}var Jc=new Set,Ic={};function tr(t,n){Or(t,n),Or(t+"Capture",n)}function Or(t,n){for(Ic[t]=n,t=0;t<n.length;t++)Jc.add(n[t])}var F2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wc={},Fc={};function $2(t){return Zi.call(Fc,t)?!0:Zi.call(Wc,t)?!1:F2.test(t)?Fc[t]=!0:(Wc[t]=!0,!1)}var at=!1;function $c(){var t=at;return at=!1,t}function ga(t,n,e){if($2(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,e)}}function ka(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,e)}}function ae(t,n,e,r){if(r===null)t.removeAttribute(e);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,r)}}function mn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pc(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function P2(t,n,e){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,a=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){e=""+i,a.call(this,i)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function $i(t){if(!t._valueTracker){var n=Pc(t)?"checked":"value";t._valueTracker=P2(t,n,""+t[n])}}function tf(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),r="";return t&&(r=Pc(t)?t.checked?"true":"false":t.value),t=r,t!==e?(n.setValue(t),!0):!1}var tm=/[\n"\\]/g;function zn(t){return t.replace(tm,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(t,n,e,r,l,a,i,u){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),n!=null?i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+mn(n)):t.value!==""+mn(n)&&(t.value=""+mn(n)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),n!=null?i==="number"&&t.value==n?tu(t,mn(t.value)):tu(t,mn(n)):e!=null?tu(t,mn(e)):r!=null&&t.removeAttribute("value"),l==null&&a!=null&&(t.defaultChecked=!!a),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.name=""+mn(u):t.removeAttribute("name")}function nf(t,n,e,r,l,a,i,u){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.type=a),n!=null||e!=null){if(!(a!=="submit"&&a!=="reset"||n!=null)){$i(t);return}e=e!=null?""+mn(e):"",n=n!=null?""+mn(n):e,u||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=u?t.checked:!!r,t.defaultChecked=!!r,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),$i(t)}function tu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function jr(t,n,e,r){if(t=t.options,n){n={};for(var l=0;l<e.length;l++)n["$"+e[l]]=!0;for(e=0;e<t.length;e++)l=n.hasOwnProperty("$"+t[e].value),t[e].selected!==l&&(t[e].selected=l),l&&r&&(t[e].defaultSelected=!0)}else{for(e=""+mn(e),n=null,l=0;l<t.length;l++){if(t[l].value===e){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function ef(t,n,e){if(n!=null&&(n=""+mn(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+mn(e):""}function rf(t,n,e,r){if(n==null){if(r!=null){if(e!=null)throw Error(f(92));if(ut(r)){if(1<r.length)throw Error(f(93));r=r[0]}e=r}e==null&&(e=""),n=e}e=mn(n),t.defaultValue=e,r=t.textContent,r===e&&r!==""&&r!==null&&(t.value=r),$i(t)}function Nr(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var nm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lf(t,n,e){var r=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,e):typeof e!="number"||e===0||nm.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function af(t,n,e){if(n!=null&&typeof n!="object")throw Error(f(62));if(t=t.style,e!=null){for(var r in e)!e.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",at=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&e[l]!==r&&(lf(t,l,r),at=!0)}else for(var a in n)n.hasOwnProperty(a)&&lf(t,a,n[a])}function nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var em=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ea(t){return rm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qn(){}var eu=null;function ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,Hr=null;function uf(t){var n=Tr(t);if(n&&(t=n.stateNode)){var e=t[tn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pi(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+zn(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var r=e[n];if(r!==t&&r.form===t.form){var l=r[tn]||null;if(!l)throw Error(f(90));Pi(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<e.length;n++)r=e[n],r.form===t.form&&tf(r)}break t;case"textarea":ef(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&jr(t,!!e.multiple,n,!1)}}}var lu=!1;function sf(t,n,e){if(lu)return t(n,e);lu=!0;try{var r=t(n);return r}finally{if(lu=!1,(Ar!==null||Hr!==null)&&(Ei(),Ar&&(n=Ar,t=Hr,Hr=Ar=null,uf(n),t)))for(n=0;n<t.length;n++)uf(t[n])}}function bl(t,n){var e=t.stateNode;if(e===null)return null;var r=e[tn]||null;if(r===null)return null;e=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(f(231,n,typeof e));return e}var ie=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(ie)try{var gl={};Object.defineProperty(gl,"passive",{get:function(){au=!0}}),window.addEventListener("test",gl,gl),window.removeEventListener("test",gl,gl)}catch{au=!1}var ze=null,iu=null,Sa=null;function cf(){if(Sa)return Sa;var t,n=iu,e=n.length,r,l="value"in ze?ze.value:ze.textContent,a=l.length;for(t=0;t<e&&n[t]===l[t];t++);var i=e-t;for(r=1;r<=i&&n[e-r]===l[a-r];r++);return Sa=l.slice(t,1<r?1-r:void 0)}function za(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ta(){return!0}function ff(){return!1}function Wt(t){function n(e,r,l,a,i){this._reactName=e,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(e=t[u],this[u]=e?e(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ta:ff,this.isPropagationStopped=ff,this}return F(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),n}var Te={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=Wt(Te),kl=F({},Te,{view:0,detail:0}),lm=Wt(kl),uu,su,El,Oa=F({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==El&&(El&&t.type==="mousemove"?(uu=t.screenX-El.screenX,su=t.screenY-El.screenY):su=uu=0,El=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:su}}),of=Wt(Oa),am=F({},Oa,{dataTransfer:0}),im=Wt(am),um=F({},kl,{relatedTarget:0}),cu=Wt(um),sm=F({},Te,{animationName:0,elapsedTime:0,pseudoElement:0}),cm=Wt(sm),fm=F({},Te,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),om=Wt(fm),dm=F({},Te,{data:0}),df=Wt(dm),mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=pm[t])?!!n[t]:!1}function fu(){return vm}var ym=F({},kl,{key:function(t){if(t.key){var n=mm[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bm=Wt(ym),gm=F({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=Wt(gm),km=F({},Te,{submitter:0}),Em=Wt(km),Sm=F({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),zm=Wt(Sm),Tm=F({},Te,{propertyName:0,elapsedTime:0,pseudoElement:0}),wm=Wt(Tm),Om=F({},Oa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jm=Wt(Om),Nm=F({},Te,{newState:0,oldState:0,source:0}),Am=Wt(Nm),Hm=[9,13,27,32],ou=ie&&"CompositionEvent"in window,Sl=null;ie&&"documentMode"in document&&(Sl=document.documentMode);var xm=ie&&"TextEvent"in window&&!Sl,hf=ie&&(!ou||Sl&&8<Sl&&11>=Sl),pf=" ",vf=!1;function yf(t,n){switch(t){case"keyup":return Hm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xr=!1;function Cm(t,n){switch(t){case"compositionend":return bf(n);case"keypress":return n.which!==32?null:(vf=!0,pf);case"textInput":return t=n.data,t===pf&&vf?null:t;default:return null}}function _m(t,n){if(xr)return t==="compositionend"||!ou&&yf(t,n)?(t=cf(),Sa=iu=ze=null,xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hf&&n.locale!=="ko"?null:n.data;default:return null}}var Dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Dm[t.type]:n==="textarea"}function kf(t,n,e,r){Ar?Hr?Hr.push(r):Hr=[r]:Ar=r,n=ji(n,"onChange"),0<n.length&&(e=new wa("onChange","change",null,e,r),t.push({event:e,listeners:n}))}var zl=null,Tl=null;function Mm(t){sd(t,0)}function ja(t){var n=yl(t);if(tf(n))return t}function Ef(t,n){if(t==="change")return n}var Sf=!1;if(ie){var du;if(ie){var mu="oninput"in document;if(!mu){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),mu=typeof zf.oninput=="function"}du=mu}else du=!1;Sf=du&&(!document.documentMode||9<document.documentMode)}function Tf(){zl&&(zl.detachEvent("onpropertychange",wf),Tl=zl=null)}function wf(t){if(t.propertyName==="value"&&ja(Tl)){var n=[];kf(n,Tl,t,ru(t)),sf(Mm,n)}}function Um(t,n,e){t==="focusin"?(Tf(),zl=n,Tl=e,zl.attachEvent("onpropertychange",wf)):t==="focusout"&&Tf()}function Rm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ja(Tl)}function Ym(t,n){if(t==="click")return ja(n)}function Bm(t,n){if(t==="input"||t==="change")return ja(n)}function Vm(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var hn=typeof Object.is=="function"?Object.is:Vm;function wl(t,n){if(hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;for(r=0;r<e.length;r++){var l=e[r];if(!Zi.call(n,l)||!hn(t[l],n[l]))return!1}return!0}function hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jf(t,n){var e=Of(t);t=0;for(var r;e;){if(e.nodeType===3){if(r=t+e.textContent.length,t<=n&&r>=n)return{node:e,offset:n-t};t=r}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Of(e)}}function Nf(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Nf(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Af(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=hu(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=hu(t.document)}return n}function pu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var qm=ie&&"documentMode"in document&&11>=document.documentMode,Cr=null,vu=null,Ol=null,yu=!1;function Hf(t,n,e){var r=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;yu||Cr==null||Cr!==hu(r)||(r=Cr,"selectionStart"in r&&pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ol&&wl(Ol,r)||(Ol=r,r=ji(vu,"onSelect"),0<r.length&&(n=new wa("onSelect","select",null,n,e),t.push({event:n,listeners:r}),n.target=Cr)))}function nr(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var _r={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},bu={},xf={};ie&&(xf=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function er(t){if(bu[t])return bu[t];if(!_r[t])return t;var n=_r[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in xf)return bu[t]=n[e];return t}var Cf=er("animationend"),_f=er("animationiteration"),Df=er("animationstart"),Gm=er("transitionrun"),Lm=er("transitionstart"),Qm=er("transitioncancel"),Mf=er("transitionend"),Uf=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function _n(t,n){Uf.set(t,n),tr(n,[t])}var Xm=0;function ue(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Rn.identifierPrefix;var e=Xm++;return t="_"+t+"t_"+e.toString(32)+"_",n.autoName=t}function Rf(t){if(t==null||typeof t=="string")return t;var n=null,e=Pr;if(e!==null)for(var r=0;r<e.length;r++){var l=t[e[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function se(t,n){return t=Rf(t),n=Rf(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Na=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Tn=[],Dr=0,ku=0;function Aa(){for(var t=Dr,n=ku=Dr=0;n<t;){var e=Tn[n];Tn[n++]=null;var r=Tn[n];Tn[n++]=null;var l=Tn[n];Tn[n++]=null;var a=Tn[n];if(Tn[n++]=null,r!==null&&l!==null){var i=r.pending;i===null?l.next=l:(l.next=i.next,i.next=l),r.pending=l}a!==0&&Yf(e,l,a)}}function Ha(t,n,e,r){Tn[Dr++]=t,Tn[Dr++]=n,Tn[Dr++]=e,Tn[Dr++]=r,ku|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Eu(t,n,e,r){return Ha(t,n,e,r),xa(t)}function rr(t,n){return Ha(t,null,null,n),xa(t)}function Yf(t,n,e){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e);for(var l=!1,a=t.return;a!==null;)a.childLanes|=e,r=a.alternate,r!==null&&(r.childLanes|=e),a.tag===22&&(t=a.stateNode,t===null||t._visibility&1||(l=!0)),t=a,a=a.return;return t.tag===3?(a=t.stateNode,l&&n!==null&&(l=31-dn(e),t=a.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=e|536870912),a):null}function xa(t){if(50<Jl)throw Jl=0,ki=null,Error(f(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Mr={};function Zm(t,n,e,r){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,n,e,r){return new Zm(t,n,e,r)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ce(t,n){var e=t.alternate;return e===null?(e=nn(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&1206910976,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function Bf(t,n){t.flags&=1206910978;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ca(t,n,e,r,l,a){var i=0;if(r=t,typeof r=="function")Su(r)&&(i=1);else if(typeof r=="string")i=k3(t,e,Ln.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Cn:return t=nn(31,e,n,l),t.elementType=Cn,t.lanes=a,t;case Sn:return lr(e.children,l,a,n);case cn:i=8,l|=24;break;case ge:return t=nn(12,e,n,l|2),t.elementType=ge,t.lanes=a,t;case L:return t=nn(13,e,n,l),t.elementType=L,t.lanes=a,t;case Q:return t=nn(19,e,n,l),t.elementType=Q,t.lanes=a,t;case ee:case m:return t=l|32,t=nn(30,e,n,t),t.elementType=m,t.lanes=a,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Mt:i=10;break t;case We:i=9;break t;case x:i=11;break t;case bt:i=14;break t;case ft:i=16,r=null;break t}i=29,e=Error(f(130,t===null?"null":typeof t,"")),r=null}return n=nn(i,e,n,l),n.elementType=t,n.type=r,n.lanes=a,n}function lr(t,n,e,r){return t=nn(7,t,r,n),t.lanes=e,t}function zu(t,n,e){return t=nn(6,t,null,n),t.lanes=e,t}function Vf(t){var n=nn(18,null,null,0);return n.stateNode=t,n}function Tu(t,n,e){return n=nn(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qf=new WeakMap;function wn(t,n){if(typeof t=="object"&&t!==null){var e=qf.get(t);return e!==void 0?e:(n={value:t,source:n,stack:Dc(n)},qf.set(t,n),n)}return{value:t,source:n,stack:Dc(n)}}var Ur=[],Rr=0,_a=null,jl=0,On=[],jn=0,we=null,Xn=1,Zn="";function fe(t,n){Ur[Rr++]=jl,Ur[Rr++]=_a,_a=t,jl=n}function Gf(t,n,e){On[jn++]=Xn,On[jn++]=Zn,On[jn++]=we,we=t;var r=Xn;t=Zn;var l=32-dn(r)-1;r&=~(1<<l),e+=1;var a=32-dn(n)+l;if(30<a){var i=l-l%5;a=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Xn=1<<32-dn(n)+l|e<<l|r,Zn=a+t}else Xn=1<<a|e<<l|r,Zn=t}function Da(t){t.return!==null&&(fe(t,1),Gf(t,1,0))}function wu(t){for(;t===_a;)_a=Ur[--Rr],Ur[Rr]=null,jl=Ur[--Rr],Ur[Rr]=null;for(;t===we;)we=On[--jn],On[jn]=null,Zn=On[--jn],On[jn]=null,Xn=On[--jn],On[jn]=null}function Lf(t,n){On[jn++]=Xn,On[jn++]=Zn,On[jn++]=we,Xn=n.id,Zn=n.overflow,we=t}var Rt=null,Et=null,W=!1,Oe=null,Nn=!1,Ou=Error(f(519));function je(t){var n=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nl(wn(n,t)),Ou}function Qf(t){var n=t.stateNode,e=t.type,r=t.memoizedProps;switch(n[qt]=t,n[tn]=r,e){case"dialog":P("cancel",n),P("close",n);break;case"iframe":case"object":case"embed":P("load",n);break;case"video":case"audio":for(e=0;e<Wl.length;e++)P(Wl[e],n);break;case"source":P("error",n);break;case"img":case"image":case"link":P("error",n),P("load",n);break;case"details":P("toggle",n);break;case"input":P("invalid",n),nf(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":P("invalid",n);break;case"textarea":P("invalid",n),rf(n,r.value,r.defaultValue,r.children)}e=r.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||r.suppressHydrationWarning===!0||dd(n.textContent,e)?(r.popover!=null&&(P("beforetoggle",n),P("toggle",n)),r.onScroll!=null&&P("scroll",n),r.onScrollEnd!=null&&P("scrollend",n),r.onClick!=null&&(n.onclick=Qn),n=!0):n=!1,n||je(t,!0)}function Ma(t){for(Rt=t.return;Rt;)switch(Rt.tag){case 5:case 31:case 13:Nn=!1;return;case 27:case 3:Nn=!0;return;default:Rt=Rt.return}}function Yr(t){if(t!==Rt)return!1;if(!W)return Ma(t),W=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||ec(t.type,t.memoizedProps)),e=!e),e&&Et&&je(t),Ma(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));Et=xd(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));Et=xd(t)}else n===27?(n=Et,Le(t.type)?(t=oc,oc=null,Et=t):Et=n):Et=Rt?Hn(t.stateNode.nextSibling):null;return!0}function ar(){Et=Rt=null,W=!1}function ju(){var t=Oe;return t!==null&&(ln===null?ln=t:ln.push.apply(ln,t),Oe=null),t}function Nl(t){Oe===null?Oe=[t]:Oe.push(t)}var Nu=Gn(null),ir=null,oe=null;function Ne(t,n,e){kt(Nu,n._currentValue),n._currentValue=e}function de(t){t._currentValue=Nu.current,Vt(Nu)}function Ua(t,n,e){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===e)break;t=t.return}}function Au(t,n,e,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){var i=l.child;a=a.firstContext;t:for(;a!==null;){var u=a;a=l;for(var c=0;c<n.length;c++)if(u.context===n[c]){a.lanes|=e,u=a.alternate,u!==null&&(u.lanes|=e),Ua(a.return,e,t),r||(i=null);break t}a=u.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error(f(341));i.lanes|=e,a=i.alternate,a!==null&&(a.lanes|=e),Ua(i,e,t),i=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=e,i=l.alternate,i!==null&&(i.lanes|=e),Ua(l.return,e,t),i=l.child,i=i!==null?i.sibling:null):i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function ur(t,n,e,r){t=null;for(var l=n,a=!1;l!==null;){if(!a){if((l.flags&524288)!==0)a=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error(f(387));if(i=i.memoizedProps,i!==null){var u=l.type;hn(l.pendingProps.value,i.value)||(t!==null?t.push(u):t=[u])}}else if(l===ca.current){if(i=l.alternate,i===null)throw Error(f(387));i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(cl):t=[cl])}l=l.return}return t!==null&&Au(n,t,e,r),n.flags|=262144,t!==null}function Ra(t){for(t=t.firstContext;t!==null;){if(!hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sr(t){ir=t,oe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gt(t){return Xf(ir,t)}function Ya(t,n){return ir===null&&sr(t),Xf(t,n)}function Xf(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},oe===null){if(t===null)throw Error(f(308));oe=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oe=oe.next=n;return e}var Km=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},Jm=d.unstable_scheduleCallback,Im=d.unstable_NormalPriority,At={$$typeof:Mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Km,data:new Map,refCount:0}}function Al(t){t.refCount--,t.refCount===0&&Jm(Im,function(){t.controller.abort()})}function Zf(t,n){if((t.pendingLanes&4194048)!==0){var e=t.transitionTypes;for(e===null&&(e=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];e.indexOf(r)===-1&&e.push(r)}}}var Hl=null;function Wm(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var xl=null,xu=0,cr=0,Br=null;function Fm(t,n){if(xl===null){var e=xl=[];xu=0,cr=Ks(),Br={status:"pending",value:void 0,then:function(r){e.push(r)}}}return xu++,n.then(Kf,Kf),n}function Kf(){if(--xu===0&&(Hl=null,xl!==null)){Br!==null&&(Br.status="fulfilled");var t=xl;xl=null,cr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $m(t,n){var e=[],r={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<e.length;l++)(0,e[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),r}var Jf=U.S;U.S=function(t,n){if(q1=fn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Fm(t,n),Hl!==null)for(var e=rl;e!==null;)Zf(e,Hl),e=e.next;if(e=t.types,e!==null){for(var r=rl;r!==null;)Zf(r,e),r=r.next;if(cr!==0){r=Hl,r===null&&(r=Hl=[]);for(var l=0;l<e.length;l++){var a=e[l];r.indexOf(a)===-1&&r.push(a)}}}Jf!==null&&Jf(t,n)};var fr=Gn(null);function Cu(){var t=fr.current;return t!==null?t:gt.pooledCache}function Ba(t,n){n===null?kt(fr,fr.current):kt(fr,n.pool)}function If(){var t=Cu();return t===null?null:{parent:At._currentValue,pool:t}}var Vr=Error(f(460)),_u=Error(f(474)),Va=Error(f(542)),qa={then:function(){}};function Wf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ff(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(Qn,Qn),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pf(t),t===void 0&&!("reason"in n)?Error(f(600)):t;default:if(typeof n.status=="string")n.then(Qn,Qn);else{if(t=gt,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pf(t),t}throw dr=n,Vr}}function or(t){try{var n=t._init;return n(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(dr=e,Vr):e}}var dr=null;function $f(){if(dr===null)throw Error(f(459));var t=dr;return dr=null,t}function Pf(t){if(t===Vr||t===Va)throw Error(f(483))}var qr=null,Cl=0;function Ga(t){var n=Cl;return Cl+=1,qr===null&&(qr=[]),Ff(qr,t,n)}function Ae(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function La(t,n){throw n.$$typeof===it?Error(f(525)):(t=Object.prototype.toString.call(n),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function to(t){function n(p,o){if(t){var y=p.deletions;y===null?(p.deletions=[o],p.flags|=16):y.push(o)}}function e(p,o){if(!t)return null;for(;o!==null;)n(p,o),o=o.sibling;return null}function r(p){for(var o=new Map;p!==null;)p.key===null?o.set(p.index,p):o.set(p.key,p),p=p.sibling;return o}function l(p,o){return p=ce(p,o),p.index=0,p.sibling=null,p}function a(p,o,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<o?(p.flags|=2,o):y):(p.flags|=134217730,o)):(p.flags|=1048576,o)}function i(p){return t&&p.alternate===null&&(p.flags|=134217730),p}function u(p,o,y,S){return o===null||o.tag!==6?(o=zu(y,p.mode,S),o.return=p,o):(o=l(o,y),o.return=p,o)}function c(p,o,y,S){var C=y.type;return C===Sn?(p=g(p,o,y.props.children,S,y.key),Ae(p,y),p):o!==null&&(o.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ft&&or(C)===o.type)?(o=l(o,y.props),Ae(o,y),o.return=p,o):(o=Ca(y.type,y.key,y.props,null,p.mode,S),Ae(o,y),o.return=p,o)}function v(p,o,y,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==y.containerInfo||o.stateNode.implementation!==y.implementation?(o=Tu(y,p.mode,S),o.return=p,o):(o=l(o,y.children||[]),o.return=p,o)}function g(p,o,y,S,C){return o===null||o.tag!==7?(o=lr(y,p.mode,S,C),o.return=p,o):(o=l(o,y),o.return=p,o)}function z(p,o,y){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=zu(""+o,p.mode,y),o.return=p,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case qn:return y=Ca(o.type,o.key,o.props,null,p.mode,y),Ae(y,o),y.return=p,y;case En:return o=Tu(o,p.mode,y),o.return=p,o;case ft:return o=or(o),z(p,o,y)}if(ut(o)||B(o))return o=lr(o,p.mode,y,null),o.return=p,o;if(typeof o.then=="function")return z(p,Ga(o),y);if(o.$$typeof===Mt)return z(p,Ya(p,o),y);La(p,o)}return null}function h(p,o,y,S){var C=o!==null?o.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return C!==null?null:u(p,o,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qn:return y.key===C?c(p,o,y,S):null;case En:return y.key===C?v(p,o,y,S):null;case ft:return y=or(y),h(p,o,y,S)}if(ut(y)||B(y))return C!==null?null:g(p,o,y,S,null);if(typeof y.then=="function")return h(p,o,Ga(y),S);if(y.$$typeof===Mt)return h(p,o,Ya(p,y),S);La(p,y)}return null}function b(p,o,y,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return p=p.get(y)||null,u(o,p,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qn:return p=p.get(S.key===null?y:S.key)||null,c(o,p,S,C);case En:return p=p.get(S.key===null?y:S.key)||null,v(o,p,S,C);case ft:return S=or(S),b(p,o,y,S,C)}if(ut(S)||B(S))return p=p.get(y)||null,g(o,p,S,C,null);if(typeof S.then=="function")return b(p,o,y,Ga(S),C);if(S.$$typeof===Mt)return b(p,o,y,Ya(o,S),C);La(o,S)}return null}function N(p,o,y,S){for(var C=null,nt=null,R=o,V=o=0,Ct=null;R!==null&&V<y.length;V++){R.index>V?(Ct=R,R=null):Ct=R.sibling;var et=h(p,R,y[V],S);if(et===null){R===null&&(R=Ct);break}t&&R&&et.alternate===null&&n(p,R),o=a(et,o,V),nt===null?C=et:nt.sibling=et,nt=et,R=Ct}if(V===y.length)return e(p,R),W&&fe(p,V),C;if(R===null){for(;V<y.length;V++)R=z(p,y[V],S),R!==null&&(o=a(R,o,V),nt===null?C=R:nt.sibling=R,nt=R);return W&&fe(p,V),C}for(R=r(R);V<y.length;V++)Ct=b(R,p,V,y[V],S),Ct!==null&&(t&&(et=Ct.alternate,et!==null&&R.delete(et.key===null?V:et.key)),o=a(Ct,o,V),nt===null?C=Ct:nt.sibling=Ct,nt=Ct);return t&&R.forEach(function(Je){return n(p,Je)}),W&&fe(p,V),C}function D(p,o,y,S){if(y==null)throw Error(f(151));for(var C=null,nt=null,R=o,V=o=0,Ct=null,et=y.next();R!==null&&!et.done;V++,et=y.next()){R.index>V?(Ct=R,R=null):Ct=R.sibling;var Je=h(p,R,et.value,S);if(Je===null){R===null&&(R=Ct);break}t&&R&&Je.alternate===null&&n(p,R),o=a(Je,o,V),nt===null?C=Je:nt.sibling=Je,nt=Je,R=Ct}if(et.done)return e(p,R),W&&fe(p,V),C;if(R===null){for(;!et.done;V++,et=y.next())et=z(p,et.value,S),et!==null&&(o=a(et,o,V),nt===null?C=et:nt.sibling=et,nt=et);return W&&fe(p,V),C}for(R=r(R);!et.done;V++,et=y.next())et=b(R,p,V,et.value,S),et!==null&&(t&&(Ct=et.alternate,Ct!==null&&R.delete(Ct.key===null?V:Ct.key)),o=a(et,o,V),nt===null?C=et:nt.sibling=et,nt=et);return t&&R.forEach(function(C3){return n(p,C3)}),W&&fe(p,V),C}function I(p,o,y,S){if(typeof y=="object"&&y!==null&&y.type===Sn&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qn:t:{for(var C=y.key;o!==null;){if(o.key===C){if(C=y.type,C===Sn){if(o.tag===7){e(p,o.sibling),S=l(o,y.props.children),Ae(S,y),S.return=p,p=S;break t}}else if(o.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ft&&or(C)===o.type){e(p,o.sibling),S=l(o,y.props),Ae(S,y),S.return=p,p=S;break t}e(p,o);break}else n(p,o);o=o.sibling}y.type===Sn?(S=lr(y.props.children,p.mode,S,y.key),Ae(S,y),S.return=p,p=S):(S=Ca(y.type,y.key,y.props,null,p.mode,S),Ae(S,y),S.return=p,p=S)}return i(p);case En:t:{for(C=y.key;o!==null;){if(o.key===C)if(o.tag===4&&o.stateNode.containerInfo===y.containerInfo&&o.stateNode.implementation===y.implementation){e(p,o.sibling),S=l(o,y.children||[]),S.return=p,p=S;break t}else{e(p,o);break}else n(p,o);o=o.sibling}S=Tu(y,p.mode,S),S.return=p,p=S}return i(p);case ft:return y=or(y),I(p,o,y,S)}if(ut(y))return N(p,o,y,S);if(B(y)){if(C=B(y),typeof C!="function")throw Error(f(150));return y=C.call(y),D(p,o,y,S)}if(typeof y.then=="function")return I(p,o,Ga(y),S);if(y.$$typeof===Mt)return I(p,o,Ya(p,y),S);La(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,o!==null&&o.tag===6?(e(p,o.sibling),S=l(o,y),S.return=p,p=S):(e(p,o),S=zu(y,p.mode,S),S.return=p,p=S),i(p)):e(p,o)}return function(p,o,y,S){try{Cl=0;var C=I(p,o,y,S);return qr=null,C}catch(R){if(R===Vr||R===Va)throw R;var nt=nn(29,R,null,p.mode);return nt.lanes=S,nt.return=p,nt}finally{}}}var mr=to(!0),no=to(!1),He=!1;function Du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xe(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ce(t,n,e){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(st&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=xa(t),Yf(t,null,e),n}return Ha(t,r,n,e),xa(t)}function _l(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,e|=r,n.lanes=e,qc(t,e)}}function Uu(t,n){var e=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,e===r)){var l=null,a=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};a===null?l=a=i:a=a.next=i,e=e.next}while(e!==null);a===null?l=a=n:a=a.next=n}else l=a=n;e={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var Ru=!1;function Dl(){if(Ru){var t=Br;if(t!==null)throw t}}function Ml(t,n,e,r){Ru=!1;var l=t.updateQueue;He=!1;var a=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var c=u,v=c.next;c.next=null,i===null?a=v:i.next=v,i=c;var g=t.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==i&&(u===null?g.firstBaseUpdate=v:u.next=v,g.lastBaseUpdate=c))}if(a!==null){var z=l.baseState;i=0,g=v=c=null,u=a;do{var h=u.lane&-536870913,b=h!==u.lane;if(b?(tt&h)===h:(r&h)===h){h!==0&&h===cr&&(Ru=!0),g!==null&&(g=g.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});t:{var N=t,D=u;h=n;var I=e;switch(D.tag){case 1:if(N=D.payload,typeof N=="function"){z=N.call(I,z,h);break t}z=N;break t;case 3:N.flags=N.flags&-65537|128;case 0:if(N=D.payload,h=typeof N=="function"?N.call(I,z,h):N,h==null)break t;z=F({},z,h);break t;case 2:He=!0}}h=u.callback,h!==null&&(t.flags|=64,b&&(t.flags|=8192),b=l.callbacks,b===null?l.callbacks=[h]:b.push(h))}else b={lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(v=g=b,c=z):g=g.next=b,i|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;b=u,u=b.next,b.next=null,l.lastBaseUpdate=b,l.shared.pending=null}}while(!0);g===null&&(c=z),l.baseState=c,l.firstBaseUpdate=v,l.lastBaseUpdate=g,a===null&&(l.shared.lanes=0),Be|=i,t.lanes=i,t.memoizedState=z}}function eo(t,n){if(typeof t!="function")throw Error(f(191,t));t.call(n)}function ro(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)eo(e[t],n)}var _e=Gn(null),Qa=Gn(0);function lo(t,n){t=ye,kt(Qa,t),kt(_e,n),ye=t|n.baseLanes}function Yu(){kt(Qa,ye),kt(_e,_e.current)}function Bu(){ye=Qa.current,Vt(_e),Vt(Qa)}var Lt=Gn(null),Jt=null;function De(t){var n=t.alternate;kt(Qt,Qt.current&1),kt(Lt,t),Jt===null&&(n===null||_e.current!==null||n.memoizedState!==null)&&(Jt=t)}function Vu(t){kt(Qt,Qt.current),kt(Lt,t),Jt===null&&(Jt=t)}function ao(t){t.tag===22?(kt(Qt,Qt.current),kt(Lt,t),Jt===null&&(Jt=t)):Me()}function Me(){kt(Qt,Qt.current),kt(Lt,Lt.current)}function pn(t){Vt(Lt),Jt===t&&(Jt=null),Vt(Qt)}var Qt=Gn(0);function Ul(t,n){kt(Lt,Lt.current),kt(Qt,n)}function qu(t){Vt(Qt),Vt(Lt),Jt===t&&(Jt=null)}function Xa(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||cc(e)||fc(e)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var me=0,J=null,yt=null,Ht=null,Za=!1,Gr=!1,hr=!1,Ka=0,Rl=0,Lr=null,Pm=0;function Ot(){throw Error(f(321))}function Gu(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!hn(t[e],n[e]))return!1;return!0}function Lu(t,n,e,r,l,a){return me=a,J=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?Lo:Qo,hr=!1,a=e(r,l),hr=!1,Gr&&(a=uo(n,e,r,l)),io(t),a}function io(t){U.H=ti;var n=yt!==null&&yt.next!==null;if(me=0,Ht=yt=J=null,Za=!1,Rl=0,Lr=null,n)throw Error(f(300));t===null||xt||(t=t.dependencies,t!==null&&Ra(t)&&(xt=!0))}function uo(t,n,e,r){J=t;var l=0;do{if(Gr&&(Lr=null),Rl=0,Gr=!1,25<=l)throw Error(f(301));if(l+=1,Ht=yt=null,t.updateQueue!=null){var a=t.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}U.H=u0,a=n(e,r)}while(Gr);return a}function t0(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?Yl(n):n,t=t.useState()[0],(yt!==null?yt.memoizedState:null)!==t&&(J.flags|=1024),n}function Qu(){var t=Ka!==0;return Ka=0,t}function Xu(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function Zu(t){if(Za){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Za=!1}me=0,Ht=yt=J=null,Gr=!1,Rl=Ka=0,Lr=null}function Ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?J.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Nt(){if(yt===null){var t=J.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var n=Ht===null?J.memoizedState:Ht.next;if(n!==null)Ht=n,yt=t;else{if(t===null)throw J.alternate===null?Error(f(467)):Error(f(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Ht===null?J.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Ja(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yl(t){var n=Rl;return Rl+=1,Lr===null&&(Lr=[]),t=Ff(Lr,t,n),n=J,(Ht===null?n.memoizedState:Ht.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Lo:Qo),t}function Ia(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yl(t);if(t.$$typeof===w)return;if(t.$$typeof===Mt)return Gt(t)}throw Error(f(438,String(t)))}function Ku(t){var n=null,e=J.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var r=J.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=Ja(),J.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),r=0;r<t;r++)e[r]=Fe;return n.index++,e}function he(t,n){return typeof n=="function"?n(t):n}function Wa(t){var n=Nt();return Ju(n,yt,t)}function Ju(t,n,e){var r=t.queue;if(r===null)throw Error(f(311));r.lastRenderedReducer=e;var l=t.baseQueue,a=r.pending;if(a!==null){if(l!==null){var i=l.next;l.next=a.next,a.next=i}n.baseQueue=l=a,r.pending=null}if(a=t.baseState,l===null)t.memoizedState=a;else{n=l.next;var u=i=null,c=null,v=n,g=!1;do{var z=v.lane&-536870913;if(z!==v.lane?(tt&z)===z:(me&z)===z){var h=v.revertLane;if(h===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),z===cr&&(g=!0);else if((me&h)===h){v=v.next,h===cr&&(g=!0);continue}else z={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},c===null?(u=c=z,i=a):c=c.next=z,J.lanes|=h,Be|=h;z=v.action,hr&&e(a,z),a=v.hasEagerState?v.eagerState:e(a,z)}else h={lane:z,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},c===null?(u=c=h,i=a):c=c.next=h,J.lanes|=z,Be|=z;v=v.next}while(v!==null&&v!==n);if(c===null?i=a:c.next=u,!hn(a,t.memoizedState)&&(xt=!0,g&&(e=Br,e!==null)))throw e;t.memoizedState=a,t.baseState=i,t.baseQueue=c,r.lastRenderedState=a}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Iu(t){var n=Nt(),e=n.queue;if(e===null)throw Error(f(311));e.lastRenderedReducer=t;var r=e.dispatch,l=e.pending,a=n.memoizedState;if(l!==null){e.pending=null;var i=l=l.next;do a=t(a,i.action),i=i.next;while(i!==l);hn(a,n.memoizedState)||(xt=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),e.lastRenderedState=a}return[a,r]}function so(t,n,e){var r=J,l=Nt(),a=W;if(a){if(e===void 0)throw Error(f(407));e=e()}else e=n();var i=!hn((yt||l).memoizedState,e);if(i&&(l.memoizedState=e,xt=!0),l=l.queue,$u(oo.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||i||Ht!==null&&(Ht.memoizedState.tag&1)!==0,Qr(t?9:8,{destroy:void 0},fo.bind(null,r,l,e,n),null),t){if(r.flags|=2048,gt===null)throw Error(f(349));a||(me&127)!==0||co(r,n,e)}return e}function co(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=J.updateQueue,n===null?(n=Ja(),J.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function fo(t,n,e,r){n.value=e,n.getSnapshot=r,mo(n)&&ho(t)}function oo(t,n,e){return e(function(){mo(n)&&ho(t)})}function mo(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!hn(t,e)}catch{return!0}}function ho(t){var n=rr(t,2);n!==null&&an(n,t,2)}function Wu(t){var n=Ft();if(typeof t=="function"){var e=t;if(t=e(),hr){Se(!0);try{e()}finally{Se(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:he,lastRenderedState:t},n}function po(t,n,e,r){return t.baseState=e,Ju(t,yt,typeof r=="function"?r:he)}function n0(t,n,e,r,l){if(Pa(t))throw Error(f(485));if(t=n.action,t!==null){var a={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){a.listeners.push(i)}};U.T!==null?e(!0):a.isTransition=!1,r(a),e=n.pending,e===null?(a.next=n.pending=a,vo(n,a)):(a.next=e.next,n.pending=e.next=a)}}function vo(t,n){var e=n.action,r=n.payload,l=t.state;if(n.isTransition){var a=U.T,i={};i.types=a!==null?a.types:null,U.T=i;try{var u=e(l,r),c=U.S;c!==null&&c(i,u),yo(t,n,u)}catch(v){Fu(t,n,v)}finally{a!==null&&i.types!==null&&(a.types=i.types),U.T=a}}else try{a=e(l,r),yo(t,n,a)}catch(v){Fu(t,n,v)}}function yo(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(r){bo(t,n,r)},function(r){return Fu(t,n,r)}):bo(t,n,e)}function bo(t,n,e){n.status="fulfilled",n.value=e,go(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,vo(t,e)))}function Fu(t,n,e){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=e,go(n),n=n.next;while(n!==r)}t.action=null}function go(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ko(t,n){return n}function Eo(t,n){if(W){var e=gt.formState;if(e!==null){t:{var r=J;if(W){if(Et){n:{for(var l=Et,a=Nn;l.nodeType!==8;){if(!a){l=null;break n}if(l=Hn(l.nextSibling),l===null){l=null;break n}}a=l.data,l=a==="F!"||a==="F"?l:null}if(l){Et=Hn(l.nextSibling),r=l.data==="F!";break t}}je(r)}r=!1}r&&(n=e[0])}}return e=Ft(),e.memoizedState=e.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},e.queue=r,e=Vo.bind(null,J,r),r.dispatch=e,r=Wu(!1),a=rs.bind(null,J,!1,r.queue),r=Ft(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,e=n0.bind(null,J,l,a,e),l.dispatch=e,r.memoizedState=t,[n,e,!1]}function So(t){var n=Nt();return zo(n,yt,t)}function zo(t,n,e){if(n=Ju(t,n,ko)[0],t=Wa(he)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Yl(n)}catch(i){throw i===Vr?Va:i}else r=n;n=Nt();var l=n.queue,a=l.dispatch;return e!==n.memoizedState&&(J.flags|=2048,Qr(9,{destroy:void 0},e0.bind(null,l,e),null)),[r,a,t]}function e0(t,n){t.action=n}function To(t){var n=Nt(),e=yt;if(e!==null)return zo(n,e,t);Nt(),n=n.memoizedState,e=Nt();var r=e.queue.dispatch;return e.memoizedState=t,[n,r,!1]}function Qr(t,n,e,r){return t={tag:t,create:e,deps:r,inst:n,next:null},n=J.updateQueue,n===null&&(n=Ja(),J.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(r=e.next,e.next=t,t.next=r,n.lastEffect=t),t}function wo(){return Nt().memoizedState}function Fa(t,n,e,r){var l=Ft();J.flags|=t,l.memoizedState=Qr(1|n,{destroy:void 0},e,r===void 0?null:r)}function $a(t,n,e,r){var l=Nt();r=r===void 0?null:r;var a=l.memoizedState.inst;yt!==null&&r!==null&&Gu(r,yt.memoizedState.deps)?l.memoizedState=Qr(n,a,e,r):(J.flags|=t,l.memoizedState=Qr(1|n,a,e,r))}function Oo(t,n){Fa(8390656,8,t,n)}function $u(t,n){$a(2048,8,t,n)}function r0(t){J.flags|=4;var n=J.updateQueue;if(n===null)n=Ja(),J.updateQueue=n,n.events=[t];else{var e=n.events;e===null?n.events=[t]:e.push(t)}}function jo(t){var n=Nt().memoizedState;return r0({ref:n,nextImpl:t}),function(){if((st&2)!==0)throw Error(f(440));return n.impl.apply(void 0,arguments)}}function No(t,n){return $a(4,2,t,n)}function Ao(t,n){return $a(4,4,t,n)}function Ho(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function xo(t,n,e){e=e!=null?e.concat([t]):null,$a(4,4,Ho.bind(null,n,t),e)}function Pu(){}function Co(t,n){var e=Nt();n=n===void 0?null:n;var r=e.memoizedState;return n!==null&&Gu(n,r[1])?r[0]:(e.memoizedState=[t,n],t)}function _o(t,n){var e=Nt();n=n===void 0?null:n;var r=e.memoizedState;if(n!==null&&Gu(n,r[1]))return r[0];if(r=t(),hr){Se(!0);try{t()}finally{Se(!1)}}return e.memoizedState=[r,n],r}function ts(t,n,e){return e===void 0||(me&1073741824)!==0&&(tt&261930)===0?t.memoizedState=n:(t.memoizedState=e,t=L1(),J.lanes|=t,Be|=t,e)}function Do(t,n,e,r){return hn(e,n)?e:_e.current!==null?(t=ts(t,e,r),hn(t,n)||(xt=!0),t):(me&106)===0||(me&1073741824)!==0&&(tt&261930)===0?(xt=!0,t.memoizedState=e):(t=L1(),J.lanes|=t,Be|=t,n)}function Mo(t,n,e,r,l){var a=X.p;X.p=a!==0&&8>a?a:8;var i=U.T,u={};u.types=i!==null?i.types:null,U.T=u,rs(t,!1,n,e);try{var c=l(),v=U.S;if(v!==null&&v(u,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=$m(c,r);Bl(t,n,g,gn(t))}else Bl(t,n,r,gn(t))}catch(z){Bl(t,n,{then:function(){},status:"rejected",reason:z},gn())}finally{X.p=a,i!==null&&u.types!==null&&(i.types=u.types),U.T=i}}function l0(){}function ns(t,n,e,r){if(t.tag!==5)throw Error(f(476));var l=Uo(t).queue;Mo(t,l,n,re,e===null?l0:function(){return Ro(t),e(r)})}function Uo(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:he,lastRenderedState:re},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:he,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ro(t){var n=Uo(t);n.next===null&&(n=t.alternate.memoizedState),Bl(t,n.next.queue,{},gn())}function es(){return Gt(cl)}function Yo(){return Nt().memoizedState}function Bo(){return Nt().memoizedState}function a0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=gn();t=xe(e);var r=Ce(n,t,e);r!==null&&(an(r,n,e),_l(r,n,e)),n={cache:Hu()},t.payload=n;return}n=n.return}}function i0(t,n,e){var r=gn();e={lane:r,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Pa(t)?qo(n,e):(e=Eu(t,n,e,r),e!==null&&(an(e,t,r),Go(e,n,r)))}function Vo(t,n,e){var r=gn();Bl(t,n,e,r)}function Bl(t,n,e,r){var l={lane:r,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Pa(t))qo(n,l);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var i=n.lastRenderedState,u=a(i,e);if(l.hasEagerState=!0,l.eagerState=u,hn(u,i))return Ha(t,n,l,0),gt===null&&Aa(),!1}catch{}finally{}if(e=Eu(t,n,l,r),e!==null)return an(e,t,r),Go(e,n,r),!0}return!1}function rs(t,n,e,r){if(r={lane:2,revertLane:Ks(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Pa(t)){if(n)throw Error(f(479))}else n=Eu(t,e,r,2),n!==null&&an(n,t,2)}function Pa(t){var n=t.alternate;return t===J||n!==null&&n===J}function qo(t,n){Gr=Za=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function Go(t,n,e){if((e&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,e|=r,n.lanes=e,qc(t,e)}}var ti={readContext:Gt,use:Ia,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useLayoutEffect:Ot,useInsertionEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useSyncExternalStore:Ot,useId:Ot,useHostTransitionStatus:Ot,useFormState:Ot,useActionState:Ot,useOptimistic:Ot,useMemoCache:Ot,useCacheRefresh:Ot,useEffectEvent:Ot},Lo={readContext:Gt,use:Ia,useCallback:function(t,n){return Ft().memoizedState=[t,n===void 0?null:n],t},useContext:Gt,useEffect:Oo,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,Fa(4194308,4,Ho.bind(null,n,t),e)},useLayoutEffect:function(t,n){return Fa(4194308,4,t,n)},useInsertionEffect:function(t,n){Fa(4,2,t,n)},useMemo:function(t,n){var e=Ft();n=n===void 0?null:n;var r=t();if(hr){Se(!0);try{t()}finally{Se(!1)}}return e.memoizedState=[r,n],r},useReducer:function(t,n,e){var r=Ft();if(e!==void 0){var l=e(n);if(hr){Se(!0);try{e(n)}finally{Se(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=i0.bind(null,J,t),[r.memoizedState,t]},useRef:function(t){var n=Ft();return t={current:t},n.memoizedState=t},useState:function(t){t=Wu(t);var n=t.queue,e=Vo.bind(null,J,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:Pu,useDeferredValue:function(t,n){var e=Ft();return ts(e,t,n)},useTransition:function(){var t=Wu(!1);return t=Mo.bind(null,J,t.queue,!0,!1),Ft().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var r=J,l=Ft();if(W){if(e===void 0)throw Error(f(407));e=e()}else{if(e=n(),gt===null)throw Error(f(349));(tt&127)!==0||co(r,n,e)}l.memoizedState=e;var a={value:e,getSnapshot:n};return l.queue=a,Oo(oo.bind(null,r,a,t),[t]),r.flags|=2048,Qr(9,{destroy:void 0},fo.bind(null,r,a,e,n),null),e},useId:function(){var t=Ft(),n=gt.identifierPrefix;if(W){var e=Zn,r=Xn;e=(r&~(1<<32-dn(r)-1)).toString(32)+e,n="_"+n+"R_"+e,e=Ka++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=Pm++,n="_"+n+"r_"+e.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:es,useFormState:Eo,useActionState:Eo,useOptimistic:function(t){var n=Ft();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=rs.bind(null,J,!0,e),e.dispatch=n,[t,n]},useMemoCache:Ku,useCacheRefresh:function(){return Ft().memoizedState=a0.bind(null,J)},useEffectEvent:function(t){var n=Ft(),e={impl:t};return n.memoizedState=e,function(){if((st&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}},Qo={readContext:Gt,use:Ia,useCallback:Co,useContext:Gt,useEffect:$u,useImperativeHandle:xo,useInsertionEffect:No,useLayoutEffect:Ao,useMemo:_o,useReducer:Wa,useRef:wo,useState:function(){return Wa(he)},useDebugValue:Pu,useDeferredValue:function(t,n){var e=Nt();return Do(e,yt.memoizedState,t,n)},useTransition:function(){var t=Wa(he)[0],n=Nt().memoizedState;return[typeof t=="boolean"?t:Yl(t),n]},useSyncExternalStore:so,useId:Yo,useHostTransitionStatus:es,useFormState:So,useActionState:So,useOptimistic:function(t,n){var e=Nt();return po(e,yt,t,n)},useMemoCache:Ku,useCacheRefresh:Bo,useEffectEvent:jo},u0={readContext:Gt,use:Ia,useCallback:Co,useContext:Gt,useEffect:$u,useImperativeHandle:xo,useInsertionEffect:No,useLayoutEffect:Ao,useMemo:_o,useReducer:Iu,useRef:wo,useState:function(){return Iu(he)},useDebugValue:Pu,useDeferredValue:function(t,n){var e=Nt();return yt===null?ts(e,t,n):Do(e,yt.memoizedState,t,n)},useTransition:function(){var t=Iu(he)[0],n=Nt().memoizedState;return[typeof t=="boolean"?t:Yl(t),n]},useSyncExternalStore:so,useId:Yo,useHostTransitionStatus:es,useFormState:To,useActionState:To,useOptimistic:function(t,n){var e=Nt();return yt!==null?po(e,yt,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Bo,useEffectEvent:jo};function ls(t,n,e,r){n=t.memoizedState,e=e(r,n),e=e==null?n:F({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var as={enqueueSetState:function(t,n,e){t=t._reactInternals;var r=gn(),l=xe(r);l.payload=n,e!=null&&(l.callback=e),n=Ce(t,l,r),n!==null&&(an(n,t,r),_l(n,t,r))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var r=gn(),l=xe(r);l.tag=1,l.payload=n,e!=null&&(l.callback=e),n=Ce(t,l,r),n!==null&&(an(n,t,r),_l(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=gn(),r=xe(e);r.tag=2,n!=null&&(r.callback=n),n=Ce(t,r,e),n!==null&&(an(n,t,e),_l(n,t,e))}};function Xo(t,n,e,r,l,a,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,i):n.prototype&&n.prototype.isPureReactComponent?!wl(e,r)||!wl(l,a):!0}function Zo(t,n,e,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,r),n.state!==t&&as.enqueueReplaceState(n,n.state,null)}function pr(t,n){var e=n;if("ref"in n){e={};for(var r in n)r!=="ref"&&(e[r]=n[r])}if(t=t.defaultProps){e===n&&(e=F({},e));for(var l in t)e[l]===void 0&&(e[l]=t[l])}return e}function Ko(t){Na(t)}function Jo(t){console.error(t)}function Io(t){Na(t)}function ni(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Wo(t,n,e){try{var r=t.onCaughtError;r(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function is(t,n,e){return e=xe(e),e.tag=3,e.payload={element:null},e.callback=function(){ni(t,n)},e}function Fo(t){return t=xe(t),t.tag=3,t}function $o(t,n,e,r){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var a=r.value;t.payload=function(){return l(a)},t.callback=function(){Wo(n,e,r)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Wo(n,e,r),typeof l!="function"&&(Ve===null?Ve=new Set([this]):Ve.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})})}function s0(t,n,e,r,l){if(e.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=e.alternate,n!==null&&ur(n,e,l,!0),e=Lt.current,e!==null){switch(e.tag){case 31:case 13:case 19:return Jt===null?Si():e.alternate===null&&jt===0&&(jt=3),e.flags&=-257,e.flags|=65536,e.lanes=l,r===qa?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([r]):n.add(r),Qs(t,r,l)),!1;case 22:return e.flags|=65536,r===qa?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([r]):e.add(r)),Qs(t,r,l)),!1}throw Error(f(435,e.tag))}return Qs(t,r,l),Si(),!1}if(W)return n=Lt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Ou&&(t=Error(f(422),{cause:r}),Nl(wn(t,e)))):(r!==Ou&&(n=Error(f(423),{cause:r}),Nl(wn(n,e))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=wn(r,e),l=is(t.stateNode,r,l),Uu(t,l),jt!==4&&(jt=2)),!1;var a=Error(f(520),{cause:r});if(a=wn(a,e),Kl===null?Kl=[a]:Kl.push(a),jt!==4&&(jt=2),n===null)return!0;r=wn(r,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=l&-l,e.lanes|=t,t=is(e.stateNode,r,t),Uu(e,t),!1;case 1:if(n=e.type,a=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ve===null||!Ve.has(a))))return e.flags|=65536,l&=-l,e.lanes|=l,l=Fo(l),$o(l,t,e,r),Uu(e,l),!1;break;case 22:if(e.memoizedState!==null)return e.flags|=65536,!1}e=e.return}while(e!==null);return!1}var us=Error(f(461)),xt=!1;function Dt(t,n,e,r){n.child=t===null?no(n,null,e,r):mr(n,t.child,e,r)}function Po(t,n,e,r,l){e=e.render;var a=n.ref;if("ref"in r){var i={};for(var u in r)u!=="ref"&&(i[u]=r[u])}else i=r;return sr(n),r=Lu(t,n,e,i,a,l),u=Qu(),t!==null&&!xt?(Xu(t,n,l),pe(t,n,l)):(W&&u&&Da(n),n.flags|=1,Dt(t,n,r,l),n.child)}function t1(t,n,e,r,l){if(t===null){var a=e.type;return typeof a=="function"&&!Su(a)&&a.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=a,n1(t,n,a,r,l)):(t=Ca(e.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(a=t.child,!ps(t,l)){var i=a.memoizedProps;if(e=e.compare,e=e!==null?e:wl,e(i,r)&&t.ref===n.ref)return pe(t,n,l)}return n.flags|=1,t=ce(a,r),t.ref=n.ref,t.return=n,n.child=t}function n1(t,n,e,r,l){if(t!==null){var a=t.memoizedProps;if(wl(a,r)&&t.ref===n.ref)if(xt=!1,n.pendingProps=r=a,ps(t,l))(t.flags&131072)!==0&&(xt=!0);else return n.lanes=t.lanes,pe(t,n,l)}return ss(t,n,e,r,l)}function e1(t,n,e,r){var l=r.children,a=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(a=a!==null?a.baseLanes|e:e,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~a}else r=0,n.child=null;return r1(t,n,a,e,r)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ba(n,a!==null?a.cachePool:null),a!==null?lo(n,a):Yu(),ao(n);else return r=n.lanes=536870912,r1(t,n,a!==null?a.baseLanes|e:e,e,r)}else a!==null?(Ba(n,a.cachePool),lo(n,a),Me(),n.memoizedState=null):(t!==null&&Ba(n,null),Yu(),Me());return Dt(t,n,l,e),n.child}function Vl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function r1(t,n,e,r,l){var a=Cu();return a=a===null?null:{parent:At._currentValue,pool:a},n.memoizedState={baseLanes:e,cachePool:a},t!==null&&Ba(n,null),Yu(),ao(n),t!==null&&ur(t,n,r,!0),n.childLanes=l,null}function ei(t,n){return n=ri({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function l1(t,n,e){return mr(n,t.child,null,e),t=ei(n,n.pendingProps),t.flags|=2,pn(n),n.memoizedState=null,t}function c0(t,n,e){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(W){if(r.mode==="hidden")return t=ei(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Vl(null,t);if(Vu(n),(t=Et)?(t=Hd(t,Nn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:we!==null?{id:Xn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},e=Vf(t),e.return=n,n.child=e,Rt=n,Et=null)):t=null,t===null)throw je(n);return n.lanes=536870912,null}return ei(n,r)}var a=t.memoizedState;if(a!==null){var i=a.dehydrated;if(Vu(n),l)if(n.flags&256)n.flags&=-257,n=l1(t,n,e);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(f(558));else if(xt||ur(t,n,e,!1),l=(e&t.childLanes)!==0,xt||l){if(_e.current===null){if(r=gt,r!==null&&(i=Gc(r,e),i!==0&&i!==a.retryLane))throw a.retryLane=i,rr(t,i),an(r,t,i),us;Si()}n=l1(t,n,e)}else t=a.treeContext,Et=Hn(i.nextSibling),Rt=n,W=!0,Oe=null,Nn=!1,t!==null&&Lf(n,t),n=ei(n,r),n.flags|=134221824;return n}return t=ce(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Xr(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(f(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function ss(t,n,e,r,l){return sr(n),e=Lu(t,n,e,r,void 0,l),r=Qu(),t!==null&&!xt?(Xu(t,n,l),pe(t,n,l)):(W&&r&&Da(n),n.flags|=1,Dt(t,n,e,l),n.child)}function a1(t,n,e,r,l,a){return sr(n),n.updateQueue=null,e=uo(n,r,e,l),io(t),r=Qu(),t!==null&&!xt?(Xu(t,n,a),pe(t,n,a)):(W&&r&&Da(n),n.flags|=1,Dt(t,n,e,a),n.child)}function i1(t,n,e,r,l){if(sr(n),n.stateNode===null){var a=Mr,i=e.contextType;typeof i=="object"&&i!==null&&(a=Gt(i)),a=new e(r,a),n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=as,n.stateNode=a,a._reactInternals=n,a=n.stateNode,a.props=r,a.state=n.memoizedState,a.refs={},Du(n),i=e.contextType,a.context=typeof i=="object"&&i!==null?Gt(i):Mr,a.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ls(n,e,i,r),a.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(i=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),i!==a.state&&as.enqueueReplaceState(a,a.state,null),Ml(n,r,a,l),Dl(),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){a=n.stateNode;var u=n.memoizedProps,c=pr(e,u);a.props=c;var v=a.context,g=e.contextType;i=Mr,typeof g=="object"&&g!==null&&(i=Gt(g));var z=e.getDerivedStateFromProps;g=typeof z=="function"||typeof a.getSnapshotBeforeUpdate=="function",u=n.pendingProps!==u,g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u||v!==i)&&Zo(n,a,r,i),He=!1;var h=n.memoizedState;a.state=h,Ml(n,r,a,l),Dl(),v=n.memoizedState,u||h!==v||He?(typeof z=="function"&&(ls(n,e,z,r),v=n.memoizedState),(c=He||Xo(n,e,c,r,h,v,i))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=i,r=c):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Mu(t,n),i=n.memoizedProps,g=pr(e,i),a.props=g,z=n.pendingProps,h=a.context,v=e.contextType,c=Mr,typeof v=="object"&&v!==null&&(c=Gt(v)),u=e.getDerivedStateFromProps,(v=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==z||h!==c)&&Zo(n,a,r,c),He=!1,h=n.memoizedState,a.state=h,Ml(n,r,a,l),Dl();var b=n.memoizedState;i!==z||h!==b||He||t!==null&&t.dependencies!==null&&Ra(t.dependencies)?(typeof u=="function"&&(ls(n,e,u,r),b=n.memoizedState),(g=He||Xo(n,e,g,r,h,b,c)||t!==null&&t.dependencies!==null&&Ra(t.dependencies))?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,c)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=b),a.props=r,a.state=b,a.context=c,r=g):(typeof a.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(n.flags|=1024),r=!1)}return a=r,Xr(t,n),r=(n.flags&128)!==0,a||r?(a=n.stateNode,e=r&&typeof e.getDerivedStateFromError!="function"?null:a.render(),n.flags|=1,t!==null&&r?(n.child=mr(n,t.child,null,l),n.child=mr(n,null,e,l)):Dt(t,n,e,l),n.memoizedState=a.state,t=n.child):t=pe(t,n,l),t}function u1(t,n,e,r){return ar(),n.flags|=256,Dt(t,n,e,r),n.child}var cs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fs(t){return{baseLanes:t,cachePool:If()}}function os(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=bn),t}function s1(t,n,e){var r=n.pendingProps,l=!1,a=(n.flags&128)!==0,i;if((i=a)||(i=t!==null&&t.memoizedState===null?!1:(Qt.current&2)!==0),i&&(l=!0,n.flags&=-129),i=(n.flags&32)!==0,n.flags&=-33,t===null){if(W){if(l?De(n):Me(),(t=Et)?(t=Hd(t,Nn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:we!==null?{id:Xn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},e=Vf(t),e.return=n,n.child=e,Rt=n,Et=null)):t=null,t===null)throw je(n);return fc(t)?n.lanes=32:n.lanes=536870912,null}return a=r.children,r=r.fallback,l?(Me(),l=n.mode,a=ri({mode:"hidden",children:a},l),r=lr(r,l,e,null),a.return=n,r.return=n,a.sibling=r,n.child=a,r=n.child,r.memoizedState=fs(e),r.childLanes=os(t,i,e),n.memoizedState=cs,Vl(null,r)):(De(n),ds(n,a))}var u=t.memoizedState;if(u!==null){var c=u.dehydrated;if(c!==null)return f0(t,n,a,i,r,c,u,e)}return l?(Me(),l=r.fallback,a=n.mode,u=t.child,c=u.sibling,r=ce(u,{mode:"hidden",children:r.children}),r.subtreeFlags=u.subtreeFlags&1206910976,c!==null?l=ce(c,l):(l=lr(l,a,e,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Vl(null,r),r=n.child,l=t.child.memoizedState,l===null?l=fs(e):(a=l.cachePool,a!==null?(u=At._currentValue,a=a.parent!==u?{parent:u,pool:u}:a):a=If(),l={baseLanes:l.baseLanes|e,cachePool:a}),r.memoizedState=l,r.childLanes=os(t,i,e),n.memoizedState=cs,Vl(t.child,r)):(De(n),e=t.child,t=e.sibling,e=ce(e,{mode:"visible",children:r.children}),e.return=n,e.sibling=null,t!==null&&(i=n.deletions,i===null?(n.deletions=[t],n.flags|=16):i.push(t)),n.child=e,n.memoizedState=null,e)}function ds(t,n){return n=ri({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ri(t,n){return t=nn(22,t,null,n),t.lanes=0,t}function li(t,n,e){return mr(n,t.child,null,e),t=ds(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function f0(t,n,e,r,l,a,i,u){if(e)return n.flags&256?(De(n),n.flags&=-257,li(t,n,u)):n.memoizedState!==null?(Me(),n.child=t.child,n.flags|=128,null):(Me(),a=l.fallback,i=n.mode,l=ri({mode:"visible",children:l.children},i),a=lr(a,i,u,null),a.flags|=2,l.return=n,a.return=n,l.sibling=a,n.child=l,mr(n,t.child,null,u),l=n.child,l.memoizedState=fs(u),l.childLanes=os(t,r,u),n.memoizedState=cs,Vl(null,l));if(De(n),fc(a)){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;return r=c,r!==""&&(l=Error(f(419)),l.stack="",l.digest=r,Nl({value:l,source:null,stack:null})),li(t,n,u)}if(xt||ur(t,n,u,!1),r=(u&t.childLanes)!==0,xt||r){if(_e.current!==null)return li(t,n,u);if(r=gt,r!==null&&(l=Gc(r,u),l!==0&&l!==i.retryLane))throw i.retryLane=l,rr(t,l),an(r,t,l),us;return cc(a)||Si(),li(t,n,u)}return cc(a)?(n.flags|=192,n.child=t.child,null):(t=i.treeContext,Et=Hn(a.nextSibling),Rt=n,W=!0,Oe=null,Nn=!1,t!==null&&Lf(n,t),n=ds(n,l.children),n.flags|=134221824,n)}function c1(t,n,e){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Ua(t.return,n,e)}function f1(t){for(var n=null;t!==null;){var e=t.alternate;e!==null&&Xa(e)===null&&(n=t),t=t.sibling}return n}function ai(t,n,e,r,l,a){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:e,tailMode:l,treeForkCount:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=e,i.tailMode=l,i.treeForkCount=a)}function ms(t){var n=t.child;for(t.child=null;n!==null;){var e=n.sibling;n.sibling=t.child,t.child=n,n=e}}function hs(t,n,e){var r=n.pendingProps,l=r.revealOrder,a=r.tail;r=r.children;var i=Qt.current;if(n.flags&128)return Ul(n,i),null;var u=(i&2)!==0;if(u?(i=i&1|2,n.flags|=128):i&=1,Ul(n,i),l==="backwards"&&t!==null?(ms(t),Dt(t,n,r,e),ms(t)):Dt(t,n,r,e),r=W?jl:0,!u&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&c1(t,e,n);else if(t.tag===19)c1(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":e=f1(n.child),e===null?(l=n.child,n.child=null):(l=e.sibling,e.sibling=null,ms(n)),ai(n,!0,l,null,a,r);break;case"unstable_legacy-backwards":for(e=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Xa(t)===null){n.child=l;break}t=l.sibling,l.sibling=e,e=l,l=t}ai(n,!0,e,null,a,r);break;case"together":ai(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:e=f1(n.child),e===null?(l=n.child,n.child=null):(l=e.sibling,e.sibling=null),ai(n,!1,l,e,a,r)}return n.child}function o1(t,n,e){var r=n.pendingProps;return Ne(n,n.type,r.value),Dt(t,n,r.children,e),n.child}function pe(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),Be|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(ur(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(f(153));if(n.child!==null){for(t=n.child,e=ce(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=ce(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function ps(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ra(t)))}function o0(t,n,e){switch(n.tag){case 3:fa(n,n.stateNode.containerInfo),Ne(n,At,t.memoizedState.cache),ar();break;case 27:case 5:Gi(n);break;case 4:fa(n,n.stateNode.containerInfo);break;case 10:Ne(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vu(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return De(n),n.flags|=128,null;r=ur(t,n,e,!1);var l=n.child.childLanes;return r||(e&l)!==0?s1(t,n,e):(De(n),t=pe(t,n,e),t!==null?t.sibling:null)}De(n);break;case 19:if(n.flags&128)return hs(t,n,e);if(l=(t.flags&128)!==0,r=(e&n.childLanes)!==0,r||(ur(t,n,e,!1),r=(e&n.childLanes)!==0),l){if(r)return hs(t,n,e);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ul(n,Qt.current),r)break;return null;case 22:return n.lanes=0,e1(t,n,e,n.pendingProps);case 24:Ne(n,At,t.memoizedState.cache)}return pe(t,n,e)}function d1(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)xt=!0;else{if(!ps(t,e)&&(n.flags&128)===0)return xt=!1,o0(t,n,e);xt=(t.flags&131072)!==0}else xt=!1,W&&(n.flags&1048576)!==0&&Gf(n,jl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=or(n.elementType),n.type=t,typeof t=="function")Su(t)?(r=pr(t,r),n.tag=1,n=i1(null,n,t,r,e)):(n.tag=0,n=ss(null,n,t,r,e));else{if(t!=null){var l=t.$$typeof;if(l===x){n.tag=11,n=Po(null,n,t,r,e);break t}else if(l===bt){n.tag=14,n=t1(null,n,t,r,e);break t}else if(l===Mt){n.tag=10,n.type=t,n=o1(null,n,e);break t}}throw n=lt(t)||t,Error(f(306,n,""))}}return n;case 0:return ss(t,n,n.type,n.pendingProps,e);case 1:return r=n.type,l=pr(r,n.pendingProps),i1(t,n,r,l,e);case 3:t:{if(fa(n,n.stateNode.containerInfo),t===null)throw Error(f(387));r=n.pendingProps;var a=n.memoizedState;l=a.element,Mu(t,n),Ml(n,r,null,e);var i=n.memoizedState;if(r=i.cache,Ne(n,At,r),r!==a.cache&&Au(n,[At],e,!0),Dl(),r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){n=u1(t,n,r,e);break t}else if(r!==l){l=wn(Error(f(424)),n),Nl(l),n=u1(t,n,r,e);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=Hn(t.firstChild),Rt=n,W=!0,Oe=null,Nn=!0,e=no(n,null,r,e),n.child=e;e;)e.flags=e.flags&-3|134221824,e=e.sibling}else{if(ar(),r===l){n=pe(t,n,e);break t}Dt(t,n,r,e)}n=n.child}return n;case 26:return Xr(t,n),t===null?(e=Rd(n.type,null,n.pendingProps,null))?n.memoizedState=e:W||(n.stateNode=vd(n.type,n.pendingProps,ke.current,n)):n.memoizedState=Rd(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Gi(n),t===null&&W&&(r=n.stateNode=_d(n.type,n.pendingProps,ke.current),Rt=n,Nn=!0,l=Et,Le(n.type)?(oc=l,Et=Hn(r.firstChild)):Et=l),Dt(t,n,n.pendingProps.children,e),Xr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&W&&((l=r=Et)&&(r=a3(r,n.type,n.pendingProps,Nn),r!==null?(n.stateNode=r,Rt=n,Et=Hn(r.firstChild),Nn=!1,l=!0):l=!1),l||je(n)),Gi(n),l=n.type,a=n.pendingProps,i=t!==null?t.memoizedProps:null,r=a.children,ec(l,a)?r=null:i!==null&&ec(l,i)&&(n.flags|=32),n.memoizedState!==null&&(l=Lu(t,n,t0,null,null,e),cl._currentValue=l),Xr(t,n),Dt(t,n,r,e),n.child;case 6:return t===null&&W&&((t=e=Et)&&(e=i3(e,n.pendingProps,Nn),e!==null?(n.stateNode=e,Rt=n,Et=null,t=!0):t=!1),t||je(n)),null;case 13:return s1(t,n,e);case 4:return fa(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=mr(n,null,r,e):Dt(t,n,r,e),n.child;case 11:return Po(t,n,n.type,n.pendingProps,e);case 7:return r=n.pendingProps,Xr(t,n),Dt(t,n,r,e),n.child;case 8:return Dt(t,n,n.pendingProps.children,e),n.child;case 12:return Dt(t,n,n.pendingProps.children,e),n.child;case 10:return o1(t,n,e);case 9:return l=n.type._context,r=n.pendingProps.children,sr(n),l=Gt(l),r=r(l),n.flags|=1,Dt(t,n,r,e),n.child;case 14:return t1(t,n,n.type,n.pendingProps,e);case 15:return n1(t,n,n.type,n.pendingProps,e);case 19:return hs(t,n,e);case 31:return c0(t,n,e);case 22:return e1(t,n,e,n.pendingProps);case 24:return sr(n),r=Gt(At),t===null?(l=Cu(),l===null&&(l=gt,a=Hu(),l.pooledCache=a,a.refCount++,a!==null&&(l.pooledCacheLanes|=e),l=a),n.memoizedState={parent:r,cache:l},Du(n),Ne(n,At,l)):((t.lanes&e)!==0&&(Mu(t,n),Ml(n,null,null,e),Dl()),l=t.memoizedState,a=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Ne(n,At,r)):(r=a.cache,Ne(n,At,r),r!==l.cache&&Au(n,[At],e,!0))),Dt(t,n,n.pendingProps.children,e),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:W&&Da(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Xr(t,n),Dt(t,n,r.children,e),n.child;case 29:throw n.pendingProps}throw Error(f(156,n.tag))}function ve(t){t.flags|=4}function vs(t,n,e,r,l){var a;if((a=(t.mode&32)!==0)&&(a=e===null?qd(n,r):qd(n,r)&&(r.src!==e.src||r.srcSet!==e.srcSet)),a){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(K1())t.flags|=8192;else throw dr=qa,_u}else t.flags&=-16777217}function m1(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Gd(n))if(K1())t.flags|=8192;else throw dr=qa,_u}function ii(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Bc():536870912,t.lanes|=n,Wr|=n)}function ql(t,n){if(!W)switch(t.tailMode){case"visible":break;case"collapsed":for(var e=t.tail,r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null}}function St(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,r=0;if(n)for(var l=t.child;l!==null;)e|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)e|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=e,n}function d0(t,n,e){var r=n.pendingProps;switch(wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(n),null;case 1:return St(n),null;case 3:return e=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),de(At),Sr(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(Yr(n)?ve(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),St(n),null;case 26:var l=n.type,a=n.memoizedState;return t===null?(ve(n),a!==null?(St(n),m1(n,a)):(St(n),vs(n,l,null,r,e))):a?a!==t.memoizedState?(ve(n),St(n),m1(n,a)):(St(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ve(n),St(n),vs(n,l,t,r,e)),null;case 27:if(oa(n),e=ke.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ve(n);else{if(!r){if(n.stateNode===null)throw Error(f(166));return St(n),n.subtreeFlags&=-33554433,null}t=Ln.current,Yr(n)?Qf(n):(t=_d(l,r,e),n.stateNode=t,ve(n))}return St(n),n.subtreeFlags&=-33554433,null;case 5:if(oa(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ve(n);else{if(!r){if(n.stateNode===null)throw Error(f(166));return St(n),n.subtreeFlags&=-33554433,null}if(a=Ln.current,Yr(n))Qf(n);else{var i=$l(ke.current);switch(a){case 1:a=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:a=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":a=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":a=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":a=i.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof r.is=="string"?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is=="string"?i.createElement(l,{is:r.is}):i.createElement(l)}}a[qt]=n,a[tn]=r;t:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)a.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=a;t:switch(Zt(a,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ve(n)}}return St(n),n.subtreeFlags&=-33554433,vs(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,e),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ve(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(f(166));if(t=ke.current,Yr(n)){if(t=n.stateNode,e=n.memoizedProps,r=null,l=Rt,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[qt]=n,t=!!(t.nodeValue===e||r!==null&&r.suppressHydrationWarning===!0||dd(t.nodeValue,e)),t||je(n,!0)}else t=$l(t).createTextNode(r),t[qt]=n,n.stateNode=t}return St(n),null;case 31:if(e=n.memoizedState,t===null||t.memoizedState!==null){if(r=Yr(n),e!==null){if(t===null){if(!r)throw Error(f(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[qt]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;St(n),t=!1}else e=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return n.flags&256?(pn(n),n):(pn(n),null);if((n.flags&128)!==0)throw Error(f(558))}return St(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Yr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(f(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));l[qt]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;St(n),l=!1}else l=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(pn(n),n):(pn(n),null)}return pn(n),(n.flags&128)!==0?(n.lanes=e,n):(e=r!==null,t=t!==null&&t.memoizedState!==null,e&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==l&&(r.flags|=2048)),e!==t&&e&&(n.child.flags|=8192),ii(n,n.updateQueue),St(n),null);case 4:return Sr(),t===null&&Fs(n.stateNode.containerInfo),n.flags|=67108864,St(n),null;case 10:return de(n.type),St(n),null;case 19:if(qu(n),r=n.memoizedState,r===null)return St(n),null;if(l=(n.flags&128)!==0,a=r.rendering,a===null)if(l)ql(r,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(a=Xa(t),a!==null){for(n.flags|=128,ql(r,!1),t=a.updateQueue,n.updateQueue=t,ii(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)Bf(e,t),e=e.sibling;return Ul(n,Qt.current&1|2),W&&fe(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&fn()>bi&&(n.flags|=128,l=!0,ql(r,!1),n.lanes=4194304)}else{if(!l)if(t=Xa(a),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,ii(n,t),ql(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!a.alternate&&!W)return St(n),null}else 2*fn()-r.renderingStartTime>bi&&e!==536870912&&(n.flags|=128,l=!0,ql(r,!1),n.lanes=4194304);r.isBackwards?(a.sibling=n.child,n.child=a):(t=r.last,t!==null?t.sibling=a:n.child=a,r.last=a)}if(r.tail!==null){t=r.tail;t:{for(e=t;e!==null;){if(e.alternate!==null){e=!1;break t}e=e.sibling}e=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=fn(),t.sibling=null,a=Qt.current,a=l?a&1|2:a&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!e||W?Ul(n,a):(e=a,kt(Lt,n),kt(Qt,e),Jt===null&&(Jt=n)),W&&fe(n,r.treeForkCount),t}return St(n),null;case 22:case 23:return pn(n),Bu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(e&536870912)!==0&&(n.flags&128)===0&&(St(n),n.subtreeFlags&6&&(n.flags|=8192)):St(n),e=n.updateQueue,e!==null&&ii(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==e&&(n.flags|=2048),t!==null&&Vt(fr),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),de(At),St(n),null;case 25:return null;case 30:return n.flags|=33554432,St(n),null}throw Error(f(156,n.tag))}function m0(t,n){switch(wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return de(At),Sr(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return oa(n),null;case 31:if(n.memoizedState!==null){if(pn(n),n.alternate===null)throw Error(f(340));ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(pn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(f(340));ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return qu(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return Sr(),null;case 10:return de(n.type),null;case 22:case 23:return pn(n),Bu(),t!==null&&Vt(fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return de(At),null;case 25:return null;default:return null}}function h1(t,n){switch(wu(n),n.tag){case 3:de(At),Sr();break;case 26:case 27:case 5:oa(n);break;case 4:Sr();break;case 31:n.memoizedState!==null&&pn(n);break;case 13:pn(n);break;case 19:qu(n);break;case 10:de(n.type);break;case 22:case 23:pn(n),Bu(),t!==null&&Vt(fr);break;case 24:de(At)}}function Gl(t,n){try{var e=n.updateQueue,r=e!==null?e.lastEffect:null;if(r!==null){var l=r.next;e=l;do{if((e.tag&t)===t){r=void 0;var a=e.create,i=e.inst;r=a(),i.destroy=r}e=e.next}while(e!==l)}}catch(u){pt(n,n.return,u)}}function Ue(t,n,e){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var a=l.next;r=a;do{if((r.tag&t)===t){var i=r.inst,u=i.destroy;if(u!==void 0){i.destroy=void 0,l=n;var c=e,v=u;try{v()}catch(g){pt(l,c,g)}}}r=r.next}while(r!==a)}}catch(g){pt(n,n.return,g)}}function p1(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{ro(n,e)}catch(r){pt(t,t.return,r)}}}function v1(t,n,e){e.props=pr(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(r){pt(t,n,r)}}function Kn(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,a=ue(t.memoizedProps,l);(l.ref===null||l.ref.name!==a)&&(l.ref=zd(a)),r=l.ref;break;case 7:if(t.stateNode===null){var i=new kn(t);E(t.child,!1,r3,i,void 0,void 0),t.stateNode=i}r=t.stateNode;break;default:r=t.stateNode}typeof e=="function"?t.refCleanup=e(r):e.current=r}}catch(u){pt(t,n,u)}}function Xt(t,n){var e=t.ref,r=t.refCleanup;if(e!==null)if(typeof r=="function")try{r()}catch(l){pt(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){pt(t,n,l)}else e.current=null}function ui(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var e=0;e<n.length;e++)Ad(t.stateNode,n[e])}function y1(t){for(var n=t.return;n!==null&&(bs(n)&&Ad(t.stateNode,n.stateNode),!ys(n));)n=n.return}function Ll(t){for(var n=t.return;n!==null&&(bs(n)&&l3(t.stateNode,n.stateNode),!ys(n));)n=n.return}function ys(t){return t.tag===5||t.tag===3||t.tag===27}function bs(t){return t&&t.tag===7&&t.stateNode!==null}function gs(t){var n=t.type,e=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&r.focus();break t;case"img":e.src?r.src=e.src:e.srcSet&&(r.srcset=e.srcSet)}}catch(l){pt(t,t.return,l)}}function ks(t,n,e){try{var r=t.stateNode;B0(r,t.type,e,n),r[tn]=n}catch(l){pt(t,t.return,l)}}function b1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Le(t.type)||t.tag===4}function Es(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||b1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Le(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ss(t,n,e,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(l),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=Qn)),ui(t,r),at=!0;else if(l!==4&&(l===27&&(ui(t,r),r=null,Le(t.type)&&(e=t.stateNode,n=null)),t=t.child,t!==null))for(Ss(t,n,e,r),t=t.sibling;t!==null;)Ss(t,n,e,r),t=t.sibling}function si(t,n,e,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?e.insertBefore(l,n):e.appendChild(l),ui(t,r),at=!0;else if(l!==4&&(l===27&&(ui(t,r),r=null,Le(t.type)&&(e=t.stateNode)),t=t.child,t!==null))for(si(t,n,e,r),t=t.sibling;t!==null;)si(t,n,e,r),t=t.sibling}function g1(t){var n=t.stateNode,e=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Zt(n,r,e),n[qt]=t,n[tn]=e}catch(a){pt(t,t.return,a)}}var ci=!1,vn=null;function k1(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(ci=!0)}var Jn=null;function E1(){var t=Jn;return Jn=null,t}var en=0;function Zr(t,n,e,r,l){return en=0,S1(t.child,n,e,r,l)}function S1(t,n,e,r,l){for(var a=!1;t!==null;){if(t.tag===5){var i=t.stateNode;if(r!==null){var u=ac(i);r.push(u),u.view&&(a=!0)}else a||ac(i).view&&(a=!0);ci=!0,Ed(i,en===0?n:n+"_"+en,e),en++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||S1(t.child,n,e,r,l)&&(a=!0));t=t.sibling}return a}function In(t,n){for(;t!==null;)t.tag===5?Sd(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||In(t.child,n)),t=t.sibling}function fi(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(fi(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(f(544));var e=n.name;n=se(n.default,n.share),n!=="none"&&(Zr(t,e,n,null,!1)||In(t.child,!1))}t=t.sibling}}function zs(t,n){if(t.tag===30){var e=t.stateNode,r=t.memoizedProps,l=ue(r,e),a=se(r.default,e.paired?r.share:r.enter);a!=="none"?Zr(t,l,a,null,!1)?(fi(t),e.paired||n||tl(t,r.onEnter)):In(t.child,!1):fi(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zs(t,n),t=t.sibling;else fi(t)}function Ts(t){if(vn!==null&&vn.size!==0){var n=vn;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.memoizedProps,r=e.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var a=se(e.default,e.share);if(a!=="none"&&(Zr(t,r,a,null,!1)?(a=t.stateNode,l.paired=a,a.paired=l,tl(t,e.onShare)):In(t.child,!1)),n.delete(r),n.size===0)break}}}Ts(t)}t=t.sibling}}}function ws(t){if(t.tag===30){var n=t.memoizedProps,e=ue(n,t.stateNode),r=vn!==null?vn.get(e):void 0,l=se(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Zr(t,e,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,vn.delete(e),tl(t,n.onShare)):tl(t,n.onExit):In(t.child,!1)),vn!==null&&Ts(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ws(t),t=t.sibling;else vn!==null&&Ts(t)}function z1(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,e=ue(n,t.stateNode);n=se(n.default,n.update),t.flags&=-5,n!=="none"&&Zr(t,e,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&z1(t);t=t.sibling}}function Os(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,In(t.child,!1))}Os(t)}t=t.sibling}}function oi(t){if(t.tag===30)t.stateNode.paired=null,In(t.child,!1),Os(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)oi(t),t=t.sibling;else Os(t)}function T1(t){for(t=t.child;t!==null;)t.tag===30?In(t.child,!1):(t.subtreeFlags&33554432)!==0&&T1(t),t=t.sibling}function js(t,n,e,r,l,a,i){for(var u=!1;n!==null;){if(n.tag===5){var c=n.stateNode;if(a!==null&&en<a.length){var v=a[en],g=ac(c);(v.view||g.view)&&(u=!0);var z;if(z=(t.flags&4)===0)if(g.clip)z=!0;else{z=v.rect;var h=g.rect;z=z.y!==h.y||z.x!==h.x||z.height!==h.height||z.width!==h.width}z&&(t.flags|=4),g.abs?g=!v.abs:(v=v.rect,g=g.rect,g=v.height!==g.height||v.width!==g.width),g&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Ed(c,en===0?e:e+"_"+en,l),u&&(t.flags&4)!==0||(Jn===null&&(Jn=[]),Jn.push(c,en===0?r:r+"_"+en,n.memoizedProps)),en++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i?t.flags|=n.flags&32:js(t,n.child,e,r,l,a,i)&&(u=!0));n=n.sibling}return u}function w1(t,n){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,r=t.stateNode,l=ue(e,r),a=se(e.default,e.update),i;i=t.memoizedState,t.memoizedState=null,r=t;var u=t.child;en=0,l=js(r,u,l,l,a,i,!1),(t.flags&4)!==0&&l&&tl(t,e.onUpdate)}else(t.subtreeFlags&33554432)!==0&&w1(t);t=t.sibling}}var Yt=!1,ot=!1,Wn=!1,Ns=!1,O1=typeof WeakSet=="function"?WeakSet:Set,Bt=null,Fn=!1,Ql=!1,di=!1,As=!1;function h0(t,n,e){if(t=t.containerInfo,tc=fl,t=Af(t),pu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break t}var u=0,c=-1,v=-1,g=0,z=0,h=t,b=null;n:for(;;){for(var N;h!==r||a!==0&&h.nodeType!==3||(c=u+a),h!==i||l!==0&&h.nodeType!==3||(v=u+l),h.nodeType===3&&(u+=h.nodeValue.length),(N=h.firstChild)!==null;)b=h,h=N;for(;;){if(h===t)break n;if(b===r&&++g===a&&(c=u),b===i&&++z===l&&(v=u),(N=h.nextSibling)!==null)break;h=b,b=h.parentNode}h=N}r=c===-1||v===-1?null:{start:c,end:v}}else r=null}r=r||{start:0,end:0}}else r=null;for(nc={focusedElem:t,selectionRange:r},fl=!1,e=(e&335544064)===e,Bt=n,n=e?9270:1024;Bt!==null;){if(t=Bt,e&&(r=t.deletions,r!==null))for(a=0;a<r.length;a++)e&&ws(r[a]);if(t.alternate===null&&(t.flags&2)!==0)e&&k1(t),mi(e);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&e&&ws(r),mi(e);continue}else if(r!==null&&r.memoizedState!==null){e&&k1(t),mi(e);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Bt=r):(e&&z1(t),mi(e))}}vn=null}function mi(t){for(;Bt!==null;){var n=Bt,e=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){e=void 0,l=r.memoizedProps,r=r.memoizedState;var a=n.stateNode;try{var i=pr(n.type,l);e=a.getSnapshotBeforeUpdate(i,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(u){pt(n,n.return,u)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,e=r.nodeType,e===9)sc(r);else if(e===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":sc(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:e&&r!==null&&(e=ue(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=se(l.default,l.update),l!=="none"&&Zr(r,e,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(f(163))}if(r=n.sibling,r!==null){r.return=n.return,Bt=r;break}Bt=n.return}}function j1(t,n,e){var r=e.flags;switch(e.tag){case 0:case 11:case 15:$n(t,e),r&4&&Gl(5,e);break;case 1:if($n(t,e),r&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(i){pt(e,e.return,i)}else{var l=pr(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(i){pt(e,e.return,i)}}r&64&&p1(e),r&512&&Kn(e,e.return);break;case 3:if($n(t,e),r&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{ro(t,n)}catch(i){pt(e,e.return,i)}}break;case 27:n===null&&r&4&&g1(e);case 26:case 5:$n(t,e),n===null&&r&4&&gs(e),r&512&&Kn(e,e.return);break;case 12:$n(t,e);break;case 31:$n(t,e),r&4&&x1(t,e);break;case 13:$n(t,e),r&4&&C1(t,e),r&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=O0.bind(null,e),u3(t,e))));break;case 22:if(r=e.memoizedState!==null||Yt,!r){var a=n!==null&&n.memoizedState!==null||ot;n=Yt,l=ot,Yt=r,(ot=a)&&!l?(r=2,(e.subtreeFlags&8772)!==0&&(r|=1),Un(t,e,r)):$n(t,e),Yt=n,ot=l}break;case 30:$n(t,e),r&512&&Kn(e,e.return);break;case 7:r&512&&Kn(e,e.return);default:$n(t,e)}}function Hs(t,n){for(t=t.child;t!==null;)N1(t,n),t=t.sibling}function N1(t,n){switch(t.tag){case 5:case 26:try{var e=t.stateNode;if(n){var r=e.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,a=t.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null;l.style.display=i==null||typeof i=="boolean"?"":(""+i).trim()}}catch(c){pt(t,t.return,c)}xs(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,at=!0}catch(c){pt(t,t.return,c)}break;case 18:try{var u=t.stateNode;n?kd(u,!0):kd(t.stateNode,!1)}catch(c){pt(t,t.return,c)}break;case 22:case 23:t.memoizedState===null&&Hs(t,n);break;default:Hs(t,n)}}function xs(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var e=t,r=n;switch(e.tag){case 4:N1(e,r);break t;case 22:e.memoizedState===null&&xs(e,r);break t;default:xs(e,r)}}t=t.sibling}}function A1(t){var n=t.alternate;n!==null&&(t.alternate=null,A1(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ba(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var zt=null,rn=!1;function Dn(t,n,e){for(e=e.child;e!==null;)H1(t,n,e),e=e.sibling}function H1(t,n,e){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(ml,e)}catch{}switch(e.tag){case 26:ot||Xt(e,n),Dn(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&!ot&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:ot||Xt(e,n),Ll(e);var r=zt,l=rn;Le(e.type)&&(zt=e.stateNode,rn=!1),Dn(t,n,e),Dd(e.stateNode,e.type,e.memoizedProps),zt=r,rn=l;break;case 5:ot||Xt(e,n),Ll(e);case 6:if(e.tag===6&&Ll(e),r=zt,l=rn,zt=null,Dn(t,n,e),zt=r,rn=l,zt!==null)if(rn)try{(zt.nodeType===9?zt.body:zt.nodeName==="HTML"?zt.ownerDocument.body:zt).removeChild(e.stateNode),at=!0}catch(a){pt(e,n,a)}else try{zt.removeChild(e.stateNode),at=!0}catch(a){pt(e,n,a)}break;case 18:zt!==null&&(rn?(t=zt,gd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),ol(t)):gd(zt,e.stateNode));break;case 4:r=zt,l=rn,zt=e.stateNode.containerInfo,rn=!0,Dn(t,n,e),zt=r,rn=l;break;case 0:case 11:case 14:case 15:Ue(2,e,n),ot||Ue(4,e,n),Dn(t,n,e);break;case 1:ot||(Xt(e,n),r=e.stateNode,typeof r.componentWillUnmount=="function"&&v1(e,n,r)),Dn(t,n,e);break;case 21:Dn(t,n,e);break;case 22:ot=(r=ot)||e.memoizedState!==null,Dn(t,n,e),ot=r;break;case 30:Xt(e,n),Dn(t,n,e);break;case 7:ot||Xt(e,n),Dn(t,n,e);break;default:Dn(t,n,e)}}function x1(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ol(t)}catch(e){pt(n,n.return,e)}}}function C1(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ol(t)}catch(e){pt(n,n.return,e)}}function p0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new O1),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new O1),n;default:throw Error(f(435,t.tag))}}function hi(t,n){var e=p0(t);n.forEach(function(r){if(!e.has(r)){e.add(r);var l=j0.bind(null,t,r);r.then(l,l)}})}function $t(t,n,e){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l],i=t,u=n,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(Le(c.type)){zt=c.stateNode,rn=!1;break t}break;case 5:zt=c.stateNode,rn=!1;break t;case 3:case 4:zt=c.stateNode.containerInfo,rn=!0;break t}c=c.return}if(zt===null)throw Error(f(160));H1(i,u,a),zt=null,rn=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_1(n,t,e),n=n.sibling}var Mn=null;function _1(t,n,e){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var a=0;a<r.length;a++){var i=r[a];i.ref.impl=i.nextImpl}$t(n,t,e),Pt(t),l&4&&(Ue(3,t,t.return),Gl(3,t),Ue(5,t,t.return));break;case 1:$t(n,t,e),Pt(t),l&512&&(ot||r===null||Xt(r,r.return)),l&64&&Yt&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:if(a=Mn,$t(n,t,e),Pt(t),l&512&&(ot||r===null||Xt(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null)if(Yt)t.stateNode=vd(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,e=t.memoizedProps,l=a.ownerDocument||a;n:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[vl]||r[qt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Zt(r,n,e),r[qt]=t,Ut(r),n=r;break t;case"link":if(a=Vd("link","href",l).get(n+(e.href||""))){for(i=0;i<a.length;i++)if(r=a[i],r.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&r.getAttribute("rel")===(e.rel==null?null:e.rel)&&r.getAttribute("title")===(e.title==null?null:e.title)&&r.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){a.splice(i,1);break n}}r=l.createElement(n),Zt(r,n,e),l.head.appendChild(r);break;case"meta":if(a=Vd("meta","content",l).get(n+(e.content||""))){for(i=0;i<a.length;i++)if(r=a[i],r.getAttribute("content")===(e.content==null?null:""+e.content)&&r.getAttribute("name")===(e.name==null?null:e.name)&&r.getAttribute("property")===(e.property==null?null:e.property)&&r.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&r.getAttribute("charset")===(e.charSet==null?null:e.charSet)){a.splice(i,1);break n}}r=l.createElement(n),Zt(r,n,e),l.head.appendChild(r);break;default:throw Error(f(468,n))}r[qt]=t,Ut(r),n=r}t.stateNode=n}else Yt||pc(a,t.type,t.stateNode);else t.stateNode=Bd(a,e,t.memoizedProps);else l!==e?(l===null?(n=r.stateNode,n===null||ot||n.parentNode.removeChild(n)):l.count--,e===null?Yt||pc(a,t.type,t.stateNode):Bd(a,e,t.memoizedProps)):e===null&&t.stateNode!==null&&ks(t,t.memoizedProps,r.memoizedProps);break;case 27:$t(n,t,e),Pt(t),l&512&&(ot||r===null||Xt(r,r.return)),r!==null&&l&4&&ks(t,t.memoizedProps,r.memoizedProps);break;case 5:if(a=Wn,Wn=!1,$t(n,t,e),Wn=a,Pt(t),l&512&&(ot||r===null||Xt(r,r.return)),t.flags&32){n=t.stateNode;try{Nr(n,""),at=!0}catch(g){pt(t,t.return,g)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,ks(t,n,r!==null?r.memoizedProps:n)),l&1024&&(Ns=!0);break;case 6:if($t(n,t,e),Pt(t),l&4){if(t.stateNode===null)throw Error(f(162));n=t.memoizedProps,e=t.stateNode;try{e.nodeValue=n,at=!0}catch(g){pt(t,t.return,g)}}break;case 3:if(at=!1,Ai=null,a=Mn,Mn=Pl(n.containerInfo),$t(n,t,e),Mn=a,Pt(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{ol(n.containerInfo)}catch(g){pt(t,t.return,g)}Ns&&(Ns=!1,D1(t)),at=!1;break;case 4:l=Wn,Wn=Yt,r=$c(),a=Mn,Mn=Pl(t.stateNode.containerInfo),$t(n,t,e),Pt(t),Mn=a,at&&Ql&&(di=!0),at=r,Wn=l;break;case 12:$t(n,t,e),Pt(t);break;case 31:$t(n,t,e),Pt(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,hi(t,n)));break;case 13:$t(n,t,e),Pt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(yi=fn()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,hi(t,n)));break;case 22:a=t.memoizedState!==null,i=r!==null&&r.memoizedState!==null;var u=Yt,c=ot,v=Wn;Yt=u||a,Wn=v||a,ot=c||i,$t(n,t,e),ot=c,Wn=v,Yt=u,Pt(t),l&8192&&(n=t.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,!a||r===null||i||Yt||ot||(n=i||ot,e=Yt,r=ot,Yt=a||Yt,ot=n,Re(t,2),Yt=e,ot=r),!a&&Wn||Hs(t,a)),l&4&&(n=t.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,hi(t,e))));break;case 19:$t(n,t,e),Pt(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,hi(t,n)));break;case 30:l&512&&(ot||r===null||Xt(r,r.return)),l=$c(),a=Ql,i=(e&335544064)===e,u=t.memoizedProps,Ql=i&&se(u.default,u.update)!=="none",$t(n,t,e),Pt(t),i&&r!==null&&at&&(t.flags|=4),Ql=a,at=l;break;case 21:break;case 7:l&512&&(ot||r===null||Xt(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:$t(n,t,e),Pt(t)}}function Pt(t){var n=t.flags;if(n&2){try{for(var e,r=t.return;r!==null;){if(b1(r)){e=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(bs(l)){var a=l.stateNode;r===null?r=[a]:r.push(a)}if(ys(l))break;l=l.return}var i=r;if(e==null)throw Error(f(160));switch(e.tag){case 27:var u=e.stateNode,c=Es(t);si(t,c,u,i);break;case 5:var v=e.stateNode;e.flags&32&&(Nr(v,""),e.flags&=-33);var g=Es(t);si(t,g,v,i);break;case 3:case 4:var z=e.stateNode.containerInfo,h=Es(t);Ss(t,h,z,i);break;default:throw Error(f(161))}}catch(b){pt(t,t.return,b)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D1(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,fl=!0,n.reset(),fl=!1),t=t.sibling}}function Kr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)M1(n,t),n=n.sibling;else w1(n)}function M1(t,n){var e=t.alternate;if(e===null)zs(t,!1);else switch(t.tag){case 3:if(As=Fn=!1,E1(),Kr(n,t),!Fn&&!di){if(t=Jn,t!==null)for(var r=0;r<t.length;r+=3){e=t[r];var l=t[r+1];Sd(e,t[r+2]),e=e.ownerDocument.documentElement,e!==null&&e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),As=!0}Jn=null;break;case 5:Kr(n,t);break;case 4:r=Fn,Fn=!1,Kr(n,t),Fn&&(di=!0),Fn=r;break;case 22:t.memoizedState===null&&(e.memoizedState!==null?zs(t,!1):Kr(n,t));break;case 30:r=Fn,l=E1(),Fn=!1,Kr(n,t),Fn&&(t.flags|=4);var a=t.memoizedProps,i=t.stateNode;n=ue(a,i),i=ue(e.memoizedProps,i);var u=se(a.default,a.update);u==="none"?n=!1:(a=e.memoizedState,e.memoizedState=null,e=t.child,en=0,n=js(t,e,n,i,u,a,!0),en!==(a===null?0:a.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(tl(t,t.memoizedProps.onUpdate),Jn=l):l!==null&&(l.push.apply(l,Jn),Jn=l),Fn=(t.flags&32)!==0?!0:r;break;default:Kr(n,t)}}function $n(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)j1(t,n.alternate,n),n=n.sibling}function Re(t,n){for(t=t.child;t!==null;){var e=t,r=n;switch(e.tag){case 0:case 11:case 14:case 15:Ue(4,e,e.return),Re(e,r);break;case 1:Xt(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&v1(e,e.return,l),Re(e,r);break;case 27:(r&2)!==0&&Dd(e.stateNode,e.type,e.memoizedProps);case 5:Xt(e,e.return),e.tag!==5&&e.tag!==27||Ll(e),Re(e,r);break;case 6:Ll(e);break;case 26:Xt(e,e.return),l=e.stateNode,e.memoizedState!==null||l===null||ot||l.parentNode.removeChild(l),Re(e,r);break;case 22:e.memoizedState===null&&Re(e,r);break;case 30:Xt(e,e.return),Re(e,r);break;case 7:Xt(e,e.return);default:Re(e,r)}t=t.sibling}}function Un(t,n,e){for(e=(n.subtreeFlags&8772)!==0?e:e&-2,n=n.child;n!==null;){var r=n.alternate,l=t,a=n,i=a.flags,u=(e&1)!==0;switch(a.tag){case 0:case 11:case 15:Un(l,a,e),Gl(4,a);break;case 1:if(Un(l,a,e),r=a,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(g){pt(r,r.return,g)}if(r=a,l=r.updateQueue,l!==null){var c=r.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)eo(v[l],c)}catch(g){pt(r,r.return,g)}}u&&i&64&&p1(a),Kn(a,a.return);break;case 27:(e&2)!==0&&g1(a);case 5:a.tag!==5&&a.tag!==27||y1(a),Un(l,a,e),u&&r===null&&i&4&&gs(a),Kn(a,a.return);break;case 6:y1(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Yt||pc(Pl(c.ownerDocument),a.type,c),Un(l,a,e),u&&r===null&&i&4&&gs(a),Kn(a,a.return);break;case 12:Un(l,a,e);break;case 31:Un(l,a,e),u&&i&4&&x1(l,a);break;case 13:Un(l,a,e),u&&i&4&&C1(l,a);break;case 22:a.memoizedState===null&&Un(l,a,e),Kn(a,a.return);break;case 30:Un(l,a,e),Kn(a,a.return);break;case 7:Kn(a,a.return);default:Un(l,a,e)}n=n.sibling}}function Cs(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Al(e))}function _s(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Al(t))}function An(t,n,e,r){var l=(e&335544064)===e;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)U1(t,n,e,r),n=n.sibling;else l&&T1(n)}function U1(t,n,e,r){var l=(e&335544064)===e;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&oi(n);var a=n.flags;switch(n.tag){case 0:case 11:case 15:An(t,n,e,r),a&2048&&Gl(9,n);break;case 1:An(t,n,e,r);break;case 3:An(t,n,e,r),l&&As&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),a&2048&&(a=null,n.alternate!==null&&(a=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==a&&(n.refCount++,a!=null&&Al(a)));break;case 12:if(a&2048){An(t,n,e,r),a=n.stateNode;try{var i=n.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,n.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(v){pt(n,n.return,v)}}else An(t,n,e,r);break;case 31:An(t,n,e,r);break;case 13:An(t,n,e,r);break;case 23:break;case 22:i=n.stateNode,u=n.alternate,n.memoizedState!==null?(l&&u!==null&&u.memoizedState===null&&oi(u),i._visibility&2?An(t,n,e,r):Xl(t,n)):(l&&u!==null&&u.memoizedState!==null&&oi(n),i._visibility&2?An(t,n,e,r):(i._visibility|=2,Jr(t,n,e,r,(n.subtreeFlags&10256)!==0||!1))),a&2048&&Cs(u,n);break;case 24:An(t,n,e,r),a&2048&&_s(n.alternate,n);break;case 30:l&&(a=n.alternate,a!==null&&(In(a.child,!0),In(n.child,!0))),An(t,n,e,r);break;default:An(t,n,e,r)}}function Jr(t,n,e,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var a=t,i=n,u=e,c=r,v=i.flags;switch(i.tag){case 0:case 11:case 15:Jr(a,i,u,c,l),Gl(8,i);break;case 23:break;case 22:var g=i.stateNode;i.memoizedState!==null?g._visibility&2?Jr(a,i,u,c,l):Xl(a,i):(g._visibility|=2,Jr(a,i,u,c,l)),l&&v&2048&&Cs(i.alternate,i);break;case 24:Jr(a,i,u,c,l),l&&v&2048&&_s(i.alternate,i);break;default:Jr(a,i,u,c,l)}n=n.sibling}}function Xl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,r=n,l=r.flags;switch(r.tag){case 22:Xl(e,r),l&2048&&Cs(r.alternate,r);break;case 24:Xl(e,r),l&2048&&_s(r.alternate,r);break;default:Xl(e,r)}n=n.sibling}}var vr=8192;function yr(t,n,e){if(t.subtreeFlags&vr)for(t=t.child;t!==null;)R1(t,n,e),t=t.sibling}function R1(t,n,e){switch(t.tag){case 26:yr(t,n,e),t.flags&vr&&(t.memoizedState!==null?E3(e,Mn,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Qd(e,t)));break;case 5:yr(t,n,e),t.flags&vr&&(t=t.stateNode,(n&335544128)===n&&Qd(e,t));break;case 3:case 4:var r=Mn;Mn=Pl(t.stateNode.containerInfo),yr(t,n,e),Mn=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=vr,vr=16777216,yr(t,n,e),vr=r):yr(t,n,e));break;case 30:if((t.flags&vr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,vn===null&&(vn=new Map),vn.set(r,l)}yr(t,n,e);break;default:yr(t,n,e)}}function Y1(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var r=n[e];Bt=r,V1(r,t)}Y1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)B1(t),t=t.sibling}function B1(t){switch(t.tag){case 0:case 11:case 15:Zl(t),t.flags&2048&&Ue(9,t,t.return);break;case 3:Zl(t);break;case 12:Zl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,pi(t)):Zl(t);break;default:Zl(t)}}function pi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var r=n[e];Bt=r,V1(r,t)}Y1(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ue(8,n,n.return),pi(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,pi(n));break;default:pi(n)}t=t.sibling}}function V1(t,n){for(;Bt!==null;){var e=Bt;switch(e.tag){case 0:case 11:case 15:Ue(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var r=e.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Al(e.memoizedState.cache)}if(r=e.child,r!==null)r.return=e,Bt=r;else t:for(e=t;Bt!==null;){r=Bt;var l=r.sibling,a=r.return;if(A1(r),r===e){Bt=null;break t}if(l!==null){l.return=a,Bt=l;break t}Bt=a}}}var v0={getCacheForType:function(t){var n=Gt(At),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e},cacheSignal:function(){return Gt(At).controller.signal}},y0=typeof WeakMap=="function"?WeakMap:Map,st=0,gt=null,$=null,tt=0,ht=0,yn=null,Ye=!1,Ir=!1,Ds=!1,ye=0,jt=0,Be=0,br=0,vi=0,bn=0,Wr=0,Kl=null,ln=null,Ms=!1,yi=0,q1=0,bi=1/0,gi=null,Ve=null,wt=0,Rn=null,gr=null,Pn=0,Us=0,Rs=null,G1=null,Fr=null,$r=null,Pr=null,Jl=0,ki=null;function gn(){return(st&2)!==0&&tt!==0?tt&-tt:U.T!==null?Ks():Lc()}function L1(){if(bn===0)if((tt&536870912)===0||W){var t=ha;ha<<=1,(ha&3932160)===0&&(ha=262144),bn=t}else bn=536870912;return t=Lt.current,t!==null&&(t.flags|=32),bn}function tl(t,n){if(n!=null){var e=t.stateNode,r=e.ref;r===null&&(r=e.ref=zd(ue(t.memoizedProps,e))),$r===null&&($r=[]),$r.push(n.bind(null,r))}}function an(t,n,e){(t===gt&&(ht===2||ht===9)||t.cancelPendingCommit!==null)&&(nl(t,0),qe(t,tt,bn,!1)),pl(t,e),((st&2)===0||t!==gt)&&(t===gt&&((st&2)===0&&(br|=e),jt===4&&qe(t,tt,bn,!1)),te(t))}function Q1(t,n,e){if((st&6)!==0)throw Error(f(327));var r=!e&&(n&127)===0&&(n&t.expiredLanes)===0||hl(t,n),l=r?k0(t,n):Bs(t,n,!0),a=r;do{if(l===0){Ir&&!r&&qe(t,n,0,!1);break}else{if(e=t.current.alternate,a&&!b0(e)){l=Bs(t,n,!1),a=!1;continue}if(l===2){if(a=n,t.errorRecoveryDisabledLanes&a)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){n=i;t:{var u=t;l=Kl;var c=u.current.memoizedState.isDehydrated;if(c&&(nl(u,i).flags|=256),i=Bs(u,i,!1),i!==2&&i!==6){if(Ds&&!c){u.errorRecoveryDisabledLanes|=a,br|=a,l=4;break t}a=ln,ln=l,a!==null&&(ln===null?ln=a:ln.push.apply(ln,a))}l=i}if(a=!1,l!==2)continue}}if(l===1){nl(t,0),qe(t,n,0,!0);break}t:{switch(r=t,a=l,a){case 0:case 1:throw Error(f(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:qe(r,n,bn,!Ye);break t;case 2:ln=null;break;case 3:case 5:break;default:throw Error(f(329))}if((n&62914560)===n&&(l=yi+300-fn(),10<l)){if(qe(r,n,bn,!Ye),va(r,0,!0)!==0)break t;Pn=n,r.timeoutHandle=lc(X1.bind(null,r,e,ln,gi,Ms,n,bn,br,Wr,Ye,a,"Throttled",-0,0),l);break t}X1(r,e,ln,gi,Ms,n,bn,br,Wr,Ye,a,null,-0,0)}}break}while(!0);te(t)}function X1(t,n,e,r,l,a,i,u,c,v,g,z,h,b){t.timeoutHandle=-1;var N=n.subtreeFlags,D=(a&335544064)===a;if(z=null,(D||N&8192||(N&16785408)===16785408)&&(z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qn},vn=null,R1(n,a,z),D&&(N=z,D=t.containerInfo,D=(D.nodeType===9?D:D.ownerDocument).__reactViewTransition,D!=null&&(N.count++,N.waitingForViewTransition=!0,N=ea.bind(N),D.finished.then(N,N))),N=(a&62914560)===a?yi-fn():(a&4194048)===a?q1-fn():0,N=S3(z,N),N!==null)){Pn=a,t.cancelPendingCommit=N(P1.bind(null,t,n,a,e,r,l,i,u,c,v,g,z,null,h,b)),qe(t,a,i,!v);return}P1(t,n,a,e,r,l,i,u,c,v,g,z)}function b0(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var r=0;r<e.length;r++){var l=e[r],a=l.getSnapshot;l=l.value;try{if(!hn(a(),l))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qe(t,n,e,r){n=Yc(t,n),n&=~vi,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var a=31-dn(l),i=1<<a;r[a]=-1,l&=~i}e!==0&&Vc(t,e,n)}function Ei(){return(st&6)===0?(Il(0),!1):!0}function Ys(){if($!==null){if(ht===0)var t=$.return;else t=$,oe=ir=null,Zu(t),qr=null,Cl=0,t=$;for(;t!==null;)h1(t.alternate,t),t=t.return;$=null}}function nl(t,n){var e=t.timeoutHandle;return e!==-1&&(t.timeoutHandle=-1,G0(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Pn=0,Ys(),gt=t,$=e=ce(t.current,null),tt=n,ht=0,yn=null,Ye=!1,Ir=hl(t,n),Ds=!1,Wr=bn=vi=br=Be=jt=0,ln=Kl=null,Ms=!1,ye=Yc(t,n),Aa(),e}function Z1(t,n){J=null,U.H=ti,n===Vr||n===Va?(n=$f(),ht=3):n===_u?(n=$f(),ht=4):ht=n===us?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yn=n,$===null&&(jt=1,ni(t,wn(n,t.current)))}function K1(){var t=Lt.current;return t===null?!0:(tt&4194048)===tt?Jt===null:(tt&62914560)===tt||(tt&536870912)!==0?t===Jt:!1}function J1(){var t=U.H;return U.H=ti,t===null?ti:t}function I1(){var t=U.A;return U.A=v0,t}function Si(){jt=4,Ye||(tt&4194048)!==tt&&Lt.current!==null||(Ir=!0),(Be&134217727)===0&&(br&134217727)===0||gt===null||qe(gt,tt,bn,!1)}function Bs(t,n,e){var r=st;st|=2;var l=J1(),a=I1();(gt!==t||tt!==n)&&(gi=null,nl(t,n)),n=!1;var i=jt;t:do try{if(ht!==0&&$!==null){var u=$,c=yn;switch(ht){case 8:Ys(),i=6;break t;case 3:case 2:case 9:case 6:Lt.current===null&&(n=!0);var v=ht;if(ht=0,yn=null,el(t,u,c,v),e&&Ir){i=0;break t}break;default:v=ht,ht=0,yn=null,el(t,u,c,v)}}g0(),i=jt;break}catch(g){Z1(t,g)}while(!0);return n&&t.shellSuspendCounter++,oe=ir=null,st=r,U.H=l,U.A=a,$===null&&(gt=null,tt=0,Aa()),i}function g0(){for(;$!==null;)W1($)}function k0(t,n){var e=st;st|=2;var r=J1(),l=I1();gt!==t||tt!==n?(gi=null,bi=fn()+500,nl(t,n)):Ir=hl(t,n);t:do try{if(ht!==0&&$!==null){n=$;var a=yn;n:switch(ht){case 1:ht=0,yn=null,el(t,n,a,1);break;case 2:case 9:if(Wf(a)){ht=0,yn=null,F1(n);break}n=function(){ht!==2&&ht!==9||gt!==t||(ht=7),te(t)},a.then(n,n);break t;case 3:ht=7;break t;case 4:ht=5;break t;case 7:Wf(a)?(ht=0,yn=null,F1(n)):(ht=0,yn=null,el(t,n,a,7));break;case 5:var i=null;switch($.tag){case 26:i=$.memoizedState;case 5:case 27:var u=$;if(i?Gd(i):u.stateNode.complete){ht=0,yn=null;var c=u.sibling;if(c!==null)$=c;else{var v=u.return;v!==null?($=v,zi(v)):$=null}break n}}ht=0,yn=null,el(t,n,a,5);break;case 6:ht=0,yn=null,el(t,n,a,6);break;case 8:Ys(),jt=6;break t;default:throw Error(f(462))}}E0();break}catch(g){Z1(t,g)}while(!0);return oe=ir=null,U.H=r,U.A=l,st=e,$!==null?0:(gt=null,tt=0,Aa(),jt)}function E0(){for(;$!==null&&!Y2();)W1($)}function W1(t){var n=d1(t.alternate,t,ye);t.memoizedProps=t.pendingProps,n===null?zi(t):$=n}function F1(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=a1(e,n,n.pendingProps,n.type,void 0,tt);break;case 11:n=a1(e,n,n.pendingProps,n.type.render,n.ref,tt);break;case 5:Zu(n);var r=n;r===Rt&&(W?(Ma(r),r.tag===5&&r.stateNode!=null&&(Et=r.stateNode)):(Ma(r),W=!0));default:h1(e,n),n=$=Bf(n,ye),n=d1(e,n,ye)}t.memoizedProps=t.pendingProps,n===null?zi(t):$=n}function el(t,n,e,r){oe=ir=null,Zu(n),qr=null,Cl=0;var l=n.return;try{if(s0(t,l,n,e,tt)){jt=1,ni(t,wn(e,t.current)),$=null;return}}catch(a){if(l!==null)throw $=l,a;jt=1,ni(t,wn(e,t.current)),$=null;return}n.flags&32768?(W||r===1?t=!0:Ir||(tt&536870912)!==0?t=!1:(Ye=t=!0,(r===2||r===9||r===3||r===6)&&(r=Lt.current,r!==null&&r.tag===13&&(r.flags|=16384))),$1(n,t)):zi(n)}function zi(t){var n=t;do{if((n.flags&32768)!==0){$1(n,Ye);return}t=n.return;var e=d0(n.alternate,n,ye);if(e!==null){$=e;return}if(n=n.sibling,n!==null){$=n;return}$=n=t}while(n!==null);jt===0&&(jt=5)}function $1(t,n){do{var e=m0(t.alternate,t);if(e!==null){e.flags&=32767,$=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){$=t;return}$=t=e}while(t!==null);jt=6,$=null}function P1(t,n,e,r,l,a,i,u,c,v,g,z){t.cancelPendingCommit=null;do Ti();while(wt!==0);if((st&6)!==0)throw Error(f(327));if(n!==null){if(n===t.current)throw Error(f(177));t===gt&&($=gt=null,tt=0),gr=n,Rn=t,Pn=e,Rs=l,G1=r,S0(t,n,e,i,u,c,z)}}function S0(t,n,e,r,l,a,i){var u=n.lanes|n.childLanes;if(Us=u,u|=ku,J2(t,e,u,r,l,a),$r=null,(e&335544064)===e?(Pr=Wm(t),r=10262):(Pr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,N0(da,function(){return Ls(),null})):(t.callbackNode=null,t.callbackPriority=0),ci=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,l=X.p,X.p=2,a=st,st|=4;try{h0(t,n,e)}finally{st=a,X.p=l,U.T=r}}wt=1,ci?Fr=J0(i,t.containerInfo,Pr,Vs,qs,T0,Gs,Ls,z0):(Vs(),qs(),Gs())}function z0(t){if(wt!==0){var n=Rn.onRecoverableError;n(t,{componentStack:null})}}function T0(){wt===3&&(wt=0,M1(gr,Rn),wt=4)}function Vs(){if(wt===1){wt=0;var t=Rn,n=gr,e=Pn,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null;var l=X.p;X.p=2;var a=st;st|=4;try{Ql=di=!1,_1(n,t,e),e=nc;var i=Af(t.containerInfo),u=e.focusedElem,c=e.selectionRange;if(i!==u&&u&&u.ownerDocument&&Nf(u.ownerDocument.documentElement,u)){if(c!==null&&pu(u)){var v=c.start,g=c.end;if(g===void 0&&(g=v),"selectionStart"in u)u.selectionStart=v,u.selectionEnd=Math.min(g,u.value.length);else{var z=u.ownerDocument||document,h=z&&z.defaultView||window;if(h.getSelection){var b=h.getSelection(),N=u.textContent.length,D=Math.min(c.start,N),I=c.end===void 0?D:Math.min(c.end,N);!b.extend&&D>I&&(i=I,I=D,D=i);var p=jf(u,D),o=jf(u,I);if(p&&o&&(b.rangeCount!==1||b.anchorNode!==p.node||b.anchorOffset!==p.offset||b.focusNode!==o.node||b.focusOffset!==o.offset)){var y=z.createRange();y.setStart(p.node,p.offset),b.removeAllRanges(),D>I?(b.addRange(y),b.extend(o.node,o.offset)):(y.setEnd(o.node,o.offset),b.addRange(y))}}}}for(z=[],b=u;b=b.parentNode;)b.nodeType===1&&z.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<z.length;u++){var S=z[u];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}fl=!!tc,nc=tc=null}finally{st=a,X.p=l,U.T=r}}t.current=n,wt=2}}function qs(){if(wt===2){wt=0;var t=Rn,n=gr,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=U.T,U.T=null;var r=X.p;X.p=2;var l=st;st|=4;try{j1(t,n.alternate,n)}finally{st=l,X.p=r,U.T=e}}wt=3}}function Gs(){if(wt===4||wt===3){wt=0;var t=Fr;Fr=null,B2();var n=Rn,e=gr,r=Pn,l=G1,a=(r&335544064)===r?10262:10256;if((e.subtreeFlags&a)!==0||(e.flags&a)!==0?wt=5:(wt=0,gr=Rn=null,td(n,n.pendingLanes)),a=n.pendingLanes,a===0&&(Ve=null),Fi(r),e=e.stateNode,on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=U.T,a=X.p,X.p=2,U.T=null;try{for(var i=n.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{U.T=e,X.p=a}}if(l=$r,i=Pr,Pr=null,l!==null&&($r=null,i===null&&(i=[]),t!==null))for(c=0;c<l.length;c++)e=(0,l[c])(i),e!==void 0&&t.finished.finally(e);(Pn&3)!==0&&Ti(),te(n),a=n.pendingLanes,(r&261930)!==0&&(a&42)!==0?n===ki?Jl++:(Jl=0,ki=n):(Jl=0,ki=null),Il(0)}}function td(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Al(n)))}function Ti(){return Fr!==null&&(Fr.skipTransition(),Fr=null),Vs(),qs(),Gs(),Ls()}function Ls(){if(wt!==5)return!1;var t=Rn,n=Us;Us=0;var e=Fi(Pn),r=U.T,l=X.p;try{X.p=32>e?32:e,U.T=null,e=Rs,Rs=null;var a=Rn,i=Pn;if(wt=0,gr=Rn=null,Pn=0,(st&6)!==0)throw Error(f(331));var u=st;if(st|=4,B1(a.current),U1(a,a.current,i,e),st=u,Il(0,!1),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(ml,a)}catch{}return!0}finally{X.p=l,U.T=r,td(t,n)}}function nd(t,n,e){n=wn(e,n),n=is(t.stateNode,n,2),t=Ce(t,n,2),t!==null&&(pl(t,2),te(t))}function pt(t,n,e){if(t.tag===3)nd(t,t,e);else for(;n!==null;){if(n.tag===3){nd(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ve===null||!Ve.has(r))){t=wn(e,t),e=Fo(2),r=Ce(n,e,2),r!==null&&($o(e,r,n,t),pl(r,2),te(r));break}}n=n.return}}function Qs(t,n,e){var r=t.pingCache;if(r===null){r=t.pingCache=new y0;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(e)||(Ds=!0,l.add(e),t=w0.bind(null,t,n,e),n.then(t,t))}function w0(t,n,e){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,gt===t&&(tt&e)===e&&((jt===4||jt===3&&(tt&62914560)===tt&&300>fn()-yi)&&(st&2)===0?nl(t,0):vi|=e,Wr===tt&&(Wr=0)),te(t)}function ed(t,n){n===0&&(n=Bc()),t=rr(t,n),t!==null&&(pl(t,n),te(t))}function O0(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),ed(t,e)}function j0(t,n){var e=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(e=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(f(314))}r!==null&&r.delete(n),ed(t,e)}function N0(t,n){return Ki(t,n)}var rl=null,ll=null,Xs=!1,wi=!1,Zs=!1,Ge=0;function te(t){t!==ll&&t.next===null&&(ll===null?rl=ll=t:ll=ll.next=t),wi=!0,Xs||(Xs=!0,H0())}function Il(t,n){if(!Zs&&wi){Zs=!0;do for(var e=!1,r=rl;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var a=0;else{var i=r.suspendedLanes,u=r.pingedLanes;a=(1<<31-dn(42|t)+1)-1,a&=l&~(i&~u),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(e=!0,id(r,a))}else a=tt,a=va(r,r===gt?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(a&3)===0||hl(r,a)||(e=!0,id(r,a));r=r.next}while(e);Zs=!1}}function A0(){rd()}function rd(){wi=Xs=!1;var t=0;Ge!==0&&q0()&&(t=Ge);for(var n=fn(),e=null,r=rl;r!==null;){var l=r.next,a=ld(r,n);a===0?(r.next=null,e===null?rl=l:e.next=l,l===null&&(ll=e)):(e=r,(t!==0||(a&3)!==0)&&(wi=!0)),r=l}wt!==0&&wt!==5||Il(t),Ge!==0&&(Ge=0)}function ld(t,n){for(var e=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,a=t.pendingLanes&-62914561;0<a;){var i=31-dn(a),u=1<<i,c=l[i];c===-1?((u&e)===0||(u&r)!==0)&&(l[i]=K2(u,n)):c<=n&&(t.expiredLanes|=u),a&=~u}if(n=gt,e=tt,e=va(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,e===0||t===n&&(ht===2||ht===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ji(r),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||hl(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(r!==null&&Ji(r),Fi(e)){case 2:case 8:e=Uc;break;case 32:e=da;break;case 268435456:e=Rc;break;default:e=da}return r=ad.bind(null,t),e=Ki(e,r),t.callbackPriority=n,t.callbackNode=e,n}return r!==null&&r!==null&&Ji(r),t.callbackPriority=2,t.callbackNode=null,2}function ad(t,n){if(wt!==0&&wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Ti()&&t.callbackNode!==e)return null;var r=tt;return r=va(t,t===gt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Q1(t,r,n),ld(t,fn()),t.callbackNode!=null&&t.callbackNode===e?ad.bind(null,t):null)}function id(t,n){if(Ti())return null;Q1(t,n,!0)}function H0(){L0(function(){(st&6)!==0?Ki(Mc,A0):rd()})}function Ks(){if(Ge===0){var t=cr;t===0&&(t=ma,ma<<=1,(ma&261888)===0&&(ma=256)),Ge=t}return Ge}function ud(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ea(t)}function x0(t,n,e,r,l){if(n==="submit"&&e&&e.stateNode===l){var a=ud((l[tn]||null).action),i=r.submitter;i&&(n=(n=i[tn]||null)?ud(n.formAction):i.getAttribute("formAction"),n!==null&&(a=n,i=null));var u=new wa("action","action",null,r,l);t.push({event:u,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ge!==0){var c=new FormData(l,i);ns(e,{pending:!0,data:c,method:l.method,action:a},null,c)}}else typeof a=="function"&&(u.preventDefault(),c=new FormData(l,i),ns(e,{pending:!0,data:c,method:l.method,action:a},a,c))},currentTarget:l}]})}}for(var Js=0;Js<gu.length;Js++){var Is=gu[Js],C0=Is.toLowerCase(),_0=Is[0].toUpperCase()+Is.slice(1);_n(C0,"on"+_0)}_n(Cf,"onAnimationEnd"),_n(_f,"onAnimationIteration"),_n(Df,"onAnimationStart"),_n("dblclick","onDoubleClick"),_n("focusin","onFocus"),_n("focusout","onBlur"),_n(Gm,"onTransitionRun"),_n(Lm,"onTransitionStart"),_n(Qm,"onTransitionCancel"),_n(Mf,"onTransitionEnd"),Or("onMouseEnter",["mouseout","mouseover"]),Or("onMouseLeave",["mouseout","mouseover"]),Or("onPointerEnter",["pointerout","pointerover"]),Or("onPointerLeave",["pointerout","pointerover"]),tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tr("onBeforeInput",["compositionend","keypress","textInput","paste"]),tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function sd(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var r=t[e],l=r.event;r=r.listeners;t:{var a=void 0;if(n)for(var i=r.length-1;0<=i;i--){var u=r[i],c=u.instance,v=u.currentTarget;if(u=u.listener,c!==a&&l.isPropagationStopped())break t;a=u,l.currentTarget=v;try{a(l)}catch(g){Na(g)}l.currentTarget=null,a=c}else for(i=0;i<r.length;i++){if(u=r[i],c=u.instance,v=u.currentTarget,u=u.listener,c!==a&&l.isPropagationStopped())break t;a=u,l.currentTarget=v;try{a(l)}catch(g){Na(g)}l.currentTarget=null,a=c}}}}function P(t,n){var e=n[Xc];e===void 0&&(e=n[Xc]=new Set);var r=t+"__bubble";e.has(r)||(cd(n,t,2,!1),e.add(r))}function Ws(t,n,e){var r=0;n&&(r|=4),cd(e,t,r,n)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function Fs(t){if(!t[Oi]){t[Oi]=!0,Jc.forEach(function(e){e!=="selectionchange"&&(D0.has(e)||Ws(e,!1,t),Ws(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Oi]||(n[Oi]=!0,Ws("selectionchange",!1,n))}}function cd(t,n,e,r){switch($d(n)){case 2:var l=O3;break;case 8:l=j3;break;default:l=yc}e=l.bind(null,n,e,t),l=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,e,{capture:!0,passive:l}):t.addEventListener(n,e,!0):l!==void 0?t.addEventListener(n,e,{passive:l}):t.addEventListener(n,e,!1)}function $s(t,n,e,r,l){var a=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;u!==null;){if(i=Pe(u),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){r=a=i;continue t}u=u.parentNode}}r=r.return}sf(function(){var v=a,g=ru(e),z=[];t:{var h=Uf.get(t);if(h!==void 0){var b=wa,N=t;switch(t){case"keypress":if(za(e)===0)break t;case"keydown":case"keyup":b=bm;break;case"focusin":N="focus",b=cu;break;case"focusout":N="blur",b=cu;break;case"beforeblur":case"afterblur":b=cu;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=zm;break;case Cf:case _f:case Df:b=cm;break;case Mf:b=wm;break;case"scroll":case"scrollend":b=lm;break;case"wheel":b=jm;break;case"copy":case"cut":case"paste":b=om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=mf;break;case"submit":b=Em;break;case"toggle":case"beforetoggle":b=Am}var D=(n&4)!==0,I=!D&&(t==="scroll"||t==="scrollend"),p=D?h!==null?h+"Capture":null:h;D=[];for(var o=v,y;o!==null;){var S=o;if(y=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||y===null||p===null||(S=bl(o,p),S!=null&&D.push(Fl(o,S,y))),I)break;o=o.return}0<D.length&&(h=new b(h,N,null,e,g),z.push({event:h,listeners:D}))}}if((n&7)===0){t:{if(b=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",b&&e!==eu&&(N=e.relatedTarget||e.fromElement)&&(Pe(N)||N[zr]))break t;(h||b)&&(N=g.window===g?g:(b=g.ownerDocument)?b.defaultView||b.parentWindow:window,h?(b=e.relatedTarget||e.toElement,h=v,b=b?Pe(b):null,b!==null&&(I=H(b),D=b.tag,b!==I||D!==5&&D!==27&&D!==6)&&(b=null)):(h=null,b=v),h!==b&&(D=of,S="onMouseLeave",p="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(D=mf,S="onPointerLeave",p="onPointerEnter",o="pointer"),I=h==null?N:yl(h),y=b==null?N:yl(b),N=new D(S,o+"leave",h,e,g),N.target=I,N.relatedTarget=y,S=null,Pe(g)===v&&(D=new D(p,o+"enter",b,e,g),D.target=y,D.relatedTarget=I,S=D),I=S,D=h&&b?sn(h,b,M0):null,h!==null&&fd(z,N,h,D,!1),b!==null&&I!==null&&fd(z,I,b,D,!0)))}t:{if(h=v?yl(v):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var C=Ef;else if(gf(h))if(Sf)C=Bm;else{C=Rm;var nt=Um}else b=h.nodeName,!b||b.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?v&&nu(v.elementType)&&(C=Ef):C=Ym;if(C&&(C=C(t,v))){kf(z,C,e,g);break t}nt&&nt(t,h,v)}switch(nt=v?yl(v):window,t){case"focusin":(gf(nt)||nt.contentEditable==="true")&&(Cr=nt,vu=v,Ol=null);break;case"focusout":Ol=vu=Cr=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Hf(z,e,g);break;case"selectionchange":if(qm)break;case"keydown":case"keyup":Hf(z,e,g)}var R;if(ou)t:{switch(t){case"compositionstart":var V="onCompositionStart";break t;case"compositionend":V="onCompositionEnd";break t;case"compositionupdate":V="onCompositionUpdate";break t}V=void 0}else xr?yf(t,e)&&(V="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(V="onCompositionStart");V&&(hf&&e.locale!=="ko"&&(xr||V!=="onCompositionStart"?V==="onCompositionEnd"&&xr&&(R=cf()):(ze=g,iu="value"in ze?ze.value:ze.textContent,xr=!0)),nt=ji(v,V),0<nt.length&&(V=new df(V,t,null,e,g),z.push({event:V,listeners:nt}),R?V.data=R:(R=bf(e),R!==null&&(V.data=R)))),(R=xm?Cm(t,e):_m(t,e))&&(V=ji(v,"onBeforeInput"),0<V.length&&(nt=new df("onBeforeInput","beforeinput",null,e,g),z.push({event:nt,listeners:V}),nt.data=R)),x0(z,t,v,e,g)}sd(z,n)})}function Fl(t,n,e){return{instance:t,listener:n,currentTarget:e}}function ji(t,n){for(var e=n+"Capture",r=[];t!==null;){var l=t,a=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||a===null||(l=bl(t,e),l!=null&&r.unshift(Fl(t,l,a)),l=bl(t,n),l!=null&&r.push(Fl(t,l,a))),t.tag===3)return r;t=t.return}return[]}function M0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function fd(t,n,e,r,l){for(var a=n._reactName,i=[];e!==null&&e!==r;){var u=e,c=u.alternate,v=u.stateNode;if(u=u.tag,c!==null&&c===r)break;u!==5&&u!==26&&u!==27||v===null||(c=v,l?(v=bl(e,a),v!=null&&i.unshift(Fl(e,v,c))):l||(v=bl(e,a),v!=null&&i.push(Fl(e,v,c)))),e=e.return}i.length!==0&&t.push({event:n,listeners:i})}var U0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function od(t){return(typeof t=="string"?t:""+t).replace(U0,`
`).replace(R0,"")}function dd(t,n){return n=od(n),od(t)===n}function vt(t,n,e,r,l,a){switch(e){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Nr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Nr(t,""+r);else return;break;case"className":ka(t,"class",r);break;case"tabIndex":ka(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ka(t,e,r);break;case"style":af(t,r,a);return;case"data":if(n!=="object"){ka(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(e);break}r=Ea(r),t.setAttribute(e,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(e==="formAction"?(n!=="input"&&vt(t,n,"name",l.name,l,null),vt(t,n,"formEncType",l.formEncType,l,null),vt(t,n,"formMethod",l.formMethod,l,null),vt(t,n,"formTarget",l.formTarget,l,null)):(vt(t,n,"encType",l.encType,l,null),vt(t,n,"method",l.method,l,null),vt(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(e);break}r=Ea(r),t.setAttribute(e,r);break;case"onClick":r!=null&&(t.onclick=Qn);return;case"onScroll":r!=null&&P("scroll",t);return;case"onScrollEnd":r!=null&&P("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(f(61));if(e=r.__html,e!=null){if(l.children!=null)throw Error(f(60));(a!=null?a.__html:void 0)!==e&&(t.innerHTML=e)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}e=Ea(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(e,r):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":r===!0?t.setAttribute(e,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(e,r):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(e,r):t.removeAttribute(e);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(e):t.setAttribute(e,r);break;case"popover":P("beforetoggle",t),P("toggle",t),ga(t,"popover",r);break;case"xlinkActuate":ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ae(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ae(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ae(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ae(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ga(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")e=em.get(e)||e,ga(t,e,r);else return}at=!0}function Ps(t,n,e,r,l,a){switch(e){case"style":af(t,r,a);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(f(61));if(e=r.__html,e!=null){if(l.children!=null)throw Error(f(60));(a!=null?a.__html:void 0)!==e&&(t.innerHTML=e)}}break;case"children":if(typeof r=="string")Nr(t,r);else if(typeof r=="number"||typeof r=="bigint")Nr(t,""+r);else return;break;case"onScroll":r!=null&&P("scroll",t);return;case"onScrollEnd":r!=null&&P("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Qn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ic.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),a=e.slice(2,l?e.length-7:void 0),n=t[tn]||null,n=n!=null?n[e]:null,typeof n=="function"&&t.removeEventListener(a,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(a,r,l);break t}at=!0,e in t?t[e]=r:r===!0?t.setAttribute(e,""):ga(t,e,r)}return}at=!0}function Zt(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":P("error",t),P("load",t);var r=!1,l=!1,a;for(a in e)if(e.hasOwnProperty(a)){var i=e[a];if(i!=null)switch(a){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:vt(t,n,a,i,e,null)}}l&&vt(t,n,"srcSet",e.srcSet,e,null),r&&vt(t,n,"src",e.src,e,null);return;case"input":P("invalid",t);var u=a=i=l=null,c=null,v=null;for(r in e)if(e.hasOwnProperty(r)){var g=e[r];if(g!=null)switch(r){case"name":l=g;break;case"type":i=g;break;case"checked":c=g;break;case"defaultChecked":v=g;break;case"value":a=g;break;case"defaultValue":u=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,n));break;default:vt(t,n,r,g,e,null)}}nf(t,a,u,c,v,i,l,!1);return;case"select":P("invalid",t),r=i=a=null;for(l in e)if(e.hasOwnProperty(l)&&(u=e[l],u!=null))switch(l){case"value":a=u;break;case"defaultValue":i=u;break;case"multiple":r=u;default:vt(t,n,l,u,e,null)}n=a,e=i,t.multiple=!!r,n!=null?jr(t,!!r,n,!1):e!=null&&jr(t,!!r,e,!0);return;case"textarea":P("invalid",t),a=l=r=null;for(i in e)if(e.hasOwnProperty(i)&&(u=e[i],u!=null))switch(i){case"value":r=u;break;case"defaultValue":l=u;break;case"children":a=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(f(91));break;default:vt(t,n,i,u,e,null)}rf(t,r,l,a);return;case"option":for(c in e)if(e.hasOwnProperty(c)&&(r=e[c],r!=null))switch(c){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:vt(t,n,c,r,e,null)}return;case"dialog":P("beforetoggle",t),P("toggle",t),P("cancel",t),P("close",t);break;case"iframe":case"object":P("load",t);break;case"video":case"audio":for(r=0;r<Wl.length;r++)P(Wl[r],t);break;case"image":P("error",t),P("load",t);break;case"details":P("toggle",t);break;case"embed":case"source":case"link":P("error",t),P("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in e)if(e.hasOwnProperty(v)&&(r=e[v],r!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,n));default:vt(t,n,v,r,e,null)}return;default:if(nu(n)){for(g in e)e.hasOwnProperty(g)&&(r=e[g],r!==void 0&&Ps(t,n,g,r,e,void 0));return}}for(u in e)e.hasOwnProperty(u)&&(r=e[u],r!=null&&vt(t,n,u,r,e,null))}var Y0={};function B0(t,n,e,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,a=null,i=null,u=null,c=null,v=null,g=null;for(b in e){var z=e[b];if(e.hasOwnProperty(b)&&z!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":c=z;default:r.hasOwnProperty(b)||vt(t,n,b,null,r,z)}}for(var h in r){var b=r[h];if(z=e[h],r.hasOwnProperty(h)&&(b!=null||z!=null))switch(h){case"type":b!==z&&(at=!0),a=b;break;case"name":b!==z&&(at=!0),l=b;break;case"checked":b!==z&&(at=!0),v=b;break;case"defaultChecked":b!==z&&(at=!0),g=b;break;case"value":b!==z&&(at=!0),i=b;break;case"defaultValue":b!==z&&(at=!0),u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,n));break;default:b!==z&&vt(t,n,h,b,r,z)}}Pi(t,i,u,c,v,g,a,l);return;case"select":b=i=u=h=null;for(a in e)if(c=e[a],e.hasOwnProperty(a)&&c!=null)switch(a){case"value":break;case"multiple":b=c;default:r.hasOwnProperty(a)||vt(t,n,a,null,r,c)}for(l in r)if(a=r[l],c=e[l],r.hasOwnProperty(l)&&(a!=null||c!=null))switch(l){case"value":a!==c&&(at=!0),h=a;break;case"defaultValue":a!==c&&(at=!0),u=a;break;case"multiple":a!==c&&(at=!0),i=a;default:a!==c&&vt(t,n,l,a,r,c)}n=u,e=i,r=b,h!=null?jr(t,!!e,h,!1):!!r!=!!e&&(n!=null?jr(t,!!e,n,!0):jr(t,!!e,e?[]:"",!1));return;case"textarea":b=h=null;for(u in e)if(l=e[u],e.hasOwnProperty(u)&&l!=null&&!r.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:vt(t,n,u,null,r,l)}for(i in r)if(l=r[i],a=e[i],r.hasOwnProperty(i)&&(l!=null||a!=null))switch(i){case"value":l!==a&&(at=!0),h=l;break;case"defaultValue":l!==a&&(at=!0),b=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(f(91));break;default:l!==a&&vt(t,n,i,l,r,a)}ef(t,h,b);return;case"option":for(var N in e)if(h=e[N],e.hasOwnProperty(N)&&h!=null&&!r.hasOwnProperty(N))switch(N){case"selected":t.selected=!1;break;default:vt(t,n,N,null,r,h)}for(c in r)if(h=r[c],b=e[c],r.hasOwnProperty(c)&&h!==b&&(h!=null||b!=null))switch(c){case"selected":h!==b&&(at=!0),t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:vt(t,n,c,h,r,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var D in e)h=e[D],e.hasOwnProperty(D)&&h!=null&&!r.hasOwnProperty(D)&&vt(t,n,D,null,r,h);for(v in r)if(h=r[v],b=e[v],r.hasOwnProperty(v)&&h!==b&&(h!=null||b!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(f(137,n));break;default:vt(t,n,v,h,r,b)}return;default:if(nu(n)){for(var I in e)h=e[I],e.hasOwnProperty(I)&&h!==void 0&&!r.hasOwnProperty(I)&&Ps(t,n,I,void 0,r,h);for(g in r)h=r[g],b=e[g],!r.hasOwnProperty(g)||h===b||h===void 0&&b===void 0||Ps(t,n,g,h,r,b);return}}for(var p in e)h=e[p],e.hasOwnProperty(p)&&h!=null&&!r.hasOwnProperty(p)&&vt(t,n,p,null,r,h);for(z in r)h=r[z],b=e[z],!r.hasOwnProperty(z)||h===b||h==null&&b==null||vt(t,n,z,h,r,b)}function md(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function V0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,e=performance.getEntriesByType("resource"),r=0;r<e.length;r++){var l=e[r],a=l.transferSize,i=l.initiatorType,u=l.duration;if(a&&u&&md(i)){for(i=0,u=l.responseEnd,r+=1;r<e.length;r++){var c=e[r],v=c.startTime;if(v>u)break;var g=c.transferSize,z=c.initiatorType;g&&md(z)&&(c=c.responseEnd,i+=g*(c<u?1:(u-v)/(c-v)))}if(--r,n+=8*(a+i)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var tc=null,nc=null;function $l(t){return t.nodeType===9?t:t.ownerDocument}function hd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pd(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vd(t,n,e,r){return e=$l(e).createElement(t),e[qt]=r,e[tn]=n,Zt(e,t,n),Ut(e),e}function ec(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rc=null;function q0(){var t=window.event;return t&&t.type==="popstate"?t===rc?!1:(rc=t,!0):(rc=null,!1)}var lc=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,bd=typeof requestAnimationFrame=="function"?requestAnimationFrame:lc,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(t){return yd.resolve(null).then(t).catch(Q0)}:lc;function Q0(t){setTimeout(function(){throw t})}function Le(t){return t==="head"}function gd(t,n){var e=n,r=0;do{var l=e.nextSibling;if(t.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"||e==="/&"){if(r===0){t.removeChild(l),ol(n);return}r--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")r++;else if(e==="html")dc(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,dc(e);for(var a=e.firstChild;a;){var i=a.nextSibling,u=a.nodeName;a[vl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&a.rel.toLowerCase()==="stylesheet"||e.removeChild(a),a=i}}else e==="body"&&dc(t.ownerDocument.body);e=l}while(e);ol(n)}function kd(t,n){var e=t;t=0;do{var r=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),r&&r.nodeType===8)if(e=r.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=r}while(e)}function Ed(t,n,e){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,e!=null&&(t.style.viewTransitionClass=e),e=getComputedStyle(t),e.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var a=n[l];0<a.width&&0<a.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+e.paddingTop,t.marginBottom="-"+e.paddingBottom)}}function Sd(t,n){t=t.style,n=n.style;var e=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=e==null||typeof e=="boolean"?"":(""+e).trim(),e=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=e==null||typeof e=="boolean"?"":(""+e).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(e=n.display,t.display=e==null||typeof e=="boolean"?"":e,e=n.margin,e!=null?t.margin=e:(e=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=e==null||typeof e=="boolean"?"":e,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function X0(t,n,e){return e=e.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=e.innerHeight&&t.left<=e.innerWidth}}function ac(t){var n=t.getBoundingClientRect(),e=getComputedStyle(t);return X0(n,e,t)}function Z0(t){return t.documentElement.clientHeight}function K0(t){this.addEventListener("load",t),this.addEventListener("error",t)}function J0(t,n,e,r,l,a,i,u,c){var v=n.nodeType===9?n:n.ownerDocument;try{var g=v.startViewTransition({update:function(){var h=v.defaultView,b=h.navigation&&h.navigation.transition,N=v.fonts.status;r();var D=[];if(N==="loaded"&&(Z0(v),v.fonts.status==="loading"&&D.push(v.fonts.ready)),N=D.length,t!==null)for(var I=t.suspenseyImages,p=0,o=0;o<I.length;o++){var y=I[o];if(!y.complete){var S=y.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<h.innerHeight&&S.left<h.innerWidth){if(p+=Ld(y),p>Hi){D.length=N;break}y=new Promise(K0.bind(y)),D.push(y)}}}if(0<D.length)return h=Promise.race([Promise.all(D),new Promise(function(C){return setTimeout(C,500)})]).then(l,l),(b?Promise.allSettled([b.finished,h]):h).then(a,a);if(l(),b)return b.finished.then(a,a);a()},types:e});v.__reactViewTransition=g;var z=[];return g.ready.then(function(){for(var h=v.documentElement.getAnimations({subtree:!0}),b=0;b<h.length;b++){var N=h[b],D=N.effect,I=D.pseudoElement;if(I!=null&&I.startsWith("::view-transition")){z.push(N),N=D.getKeyframes();for(var p=I=void 0,o=!0,y=0;y<N.length;y++){var S=N[y],C=S.width;if(I===void 0)I=C;else if(I!==C){o=!1;break}if(C=S.height,p===void 0)p=C;else if(p!==C){o=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}o&&I!==void 0&&p!==void 0&&(D.setKeyframes(N),o=getComputedStyle(D.target,D.pseudoElement),o.width!==I||o.height!==p)&&(o=N[0],o.width=I,o.height=p,o=N[N.length-1],o.width=I,o.height=p,D.setKeyframes(N))}}i()},function(h){v.__reactViewTransition===g&&(v.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&c(h)}finally{r(),l(),i()}}),g.finished.finally(function(){for(var h=0;h<z.length;h++)z[h].cancel();v.__reactViewTransition===g&&(v.__reactViewTransition=null),u()}),g}catch{return r(),l(),i(),null}}function kr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}kr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:F({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},kr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,e=t.getAnimations({subtree:!0}),r=[],l=0;l<e.length;l++){var a=e[l].effect;a!==null&&a.target===t&&a.pseudoElement===n&&r.push(e[l])}return r},kr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function zd(t){return{name:t,group:new kr("group",t),imagePair:new kr("image-pair",t),old:new kr("old",t),new:new kr("new",t)}}function kn(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}kn.prototype.addEventListener=function(t,n,e){var r=null,l=null;if(!(e!=null&&typeof e!="boolean"&&(r=e.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(wd(a,t,n,e)===-1){var i=this,u=n;e!=null&&typeof e!="boolean"&&e.once===!0&&(u=function(c){i.removeEventListener(t,n,e),typeof n=="function"?n.call(this,c):n.handleEvent(c)}),r!==null&&(l=i.removeEventListener.bind(i,t,n,e),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=al(e),a.push({type:t,listener:n,optionsOrUseCapture:e,attachedListener:u,cleanup:l}),E(this._fragmentFiber.child,!1,I0,t,u,r)}this._eventListeners=a}};function I0(t,n,e,r){return M(t).addEventListener(n,e,r),!1}kn.prototype.removeEventListener=function(t,n,e){var r=this._eventListeners;if(r!==null&&(n=wd(r,t,n,e),n!==-1)){var l=r[n];e=l.attachedListener;var a=l.cleanup;l=al(l.optionsOrUseCapture),E(this._fragmentFiber.child,!1,W0,t,e,l),r.splice(n,1),a!==null&&a()}};function W0(t,n,e,r){return M(t).removeEventListener(n,e,r),!1}function al(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Td(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function wd(t,n,e,r){if(t.length===0)return-1;r=Td(r);for(var l=0;l<t.length;l++){var a=t[l];if(a.type===n&&a.listener===e&&Td(a.optionsOrUseCapture)===r)return l}return-1}kn.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var e=this._eventListeners;if(e!==null&&0<e.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(e)for(var l=0;l<e.length;l++){var a=e[l];r.addEventListener(a.type,a.attachedListener,al(a.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),e)for(l=0;l<e.length;l++)a=e[l],r.removeEventListener(a.type,a.attachedListener,al(a.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},kn.prototype.focus=function(t){E(this._fragmentFiber.child,!0,Od,t,void 0,void 0)};function Od(t,n){return t.tag===6?!1:(t=M(t),s3(t,n))}kn.prototype.focusLast=function(t){var n=[];E(this._fragmentFiber.child,!0,ic,n,void 0,void 0);for(var e=n.length-1;0<=e&&!Od(n[e],t);e--);};function ic(t,n){return n.push(t),!1}kn.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=M(t),t=$l(t).activeElement,t!==null&&E(this._fragmentFiber.child,!1,F0,t,void 0,void 0))};function F0(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}kn.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),E(this._fragmentFiber.child,!1,$0,t,void 0,void 0)};function $0(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}kn.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),E(this._fragmentFiber.child,!1,P0,t,void 0,void 0);for(var e=n=0;e<Yn.length;e++){var r=Yn[e];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Yn[n++]=r}Yn.length=n}};function P0(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Yn=[],uc=!1;function t3(t,n,e){Yn.push({fragmentInstance:t,observer:n,instance:e}),uc||(uc=!0,c3(function(){uc=!1;var r=Yn;Yn=[];for(var l=0;l<r.length;l++){var a=r[l];a.observer.unobserve(a.instance)}}))}kn.prototype.getClientRects=function(){var t=[];return E(this._fragmentFiber.child,!1,n3,t,void 0,void 0),t};function n3(t,n){if(t.tag===6){t=t.stateNode;var e=t.ownerDocument.createRange();e.selectNodeContents(t),n.push.apply(n,e.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}kn.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},kn.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var e=[];E(this._fragmentFiber.child,!1,ic,e,void 0,void 0);var r=M(n);if(e.length===0){if(e=r,mt(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(e=n)}n=this._fragmentFiber;var l=r=e.compareDocumentPosition(t);return e===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(e=_t(n)[1],e===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(e).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(e[0]),l=M(e[e.length-1]);var a=mt(this._fragmentFiber)?n.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=n.compareDocumentPosition(t),u=l.compareDocumentPosition(t),c=i&Node.DOCUMENT_POSITION_CONTAINED_BY||u&Node.DOCUMENT_POSITION_CONTAINED_BY;return u=r&&a&&i&Node.DOCUMENT_POSITION_FOLLOWING&&u&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||a&&l===t||c||u?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!a&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||e3(n,this._fragmentFiber,e[0],e[e.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function e3(t,n,e,r,l){var a=Pe(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(e=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===n||a.alternate===n)){e=!0;break t}a=a.return}e=!1}return e}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=l.ownerDocument,l===a||l===a.documentElement||l===a.body;t:{for(a=n,n=_(n);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==n&&a.alternate!==n)){a=!0;break t}a=a.return}a=!1}return a}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!a)&&!(n=a===e)&&(n=sn(e,a,Vn),n===null?n=!1:(E(n,!0,Ie,a,e),a=It,It=null,n=a!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!a)&&!(n=a===r)&&(n=sn(r,a,Vn),n===null?n=!1:(E(n,!0,Bn,a,r),a=It,un=It=null,n=a!==null)),n):!1}function jd(t,n){var e=t.ownerDocument.createRange();e.selectNodeContents(t),t=e.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}kn.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(f(566));var n=[];E(this._fragmentFiber.child,!1,ic,n,void 0,void 0);var e=t!==!1;if(n.length===0){var r=_t(this._fragmentFiber);if(r=e?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),jd(t,e);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){e="host"in r?r.host:null,e!==null&&e.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=e?n.length-1:0;r!==(e?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),jd(l,e)):M(l).scrollIntoView(t),r+=e?-1:1}};function r3(t,n){return t=M(t),Nd(t,n),!1}function Nd(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Ad(t,n){var e=n._eventListeners;if(e!==null)for(var r=0;r<e.length;r++){var l=e[r];t.addEventListener(l.type,l.attachedListener,al(l.optionsOrUseCapture))}t.nodeType!==3&&(e=n._observers,e!==null&&e.forEach(function(a){for(var i=0,u=0;u<Yn.length;u++){var c=Yn[u];(c.fragmentInstance!==n||c.observer!==a||c.instance!==t)&&(Yn[i++]=c)}Yn.length=i,a.observe(t)}),Nd(t,n))}function l3(t,n){var e=n._eventListeners;if(e!==null)for(var r=0;r<e.length;r++){var l=e[r];t.removeEventListener(l.type,l.attachedListener,al(l.optionsOrUseCapture))}t.nodeType!==3&&(e=n._observers,e!==null&&e.forEach(function(a){typeof a.rootMargin=="string"?t3(n,a,t):a.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function sc(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":sc(e),ba(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function a3(t,n,e,r){for(;t.nodeType===1;){var l=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[vl])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(a=t.getAttribute("rel"),a==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(a!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(a=t.getAttribute("src"),(a!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&a&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var a=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===a)return t}else return t;if(t=Hn(t.nextSibling),t===null)break}return null}function i3(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Hn(t.nextSibling),t===null))return null;return t}function Hd(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Hn(t.nextSibling),t===null))return null;return t}function cc(t){return t.data==="$?"||t.data==="$~"}function fc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function u3(t,n){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||e.readyState!=="loading")n();else{var r=function(){n(),e.removeEventListener("DOMContentLoaded",r)};e.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Hn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var oc=null;function xd(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(n===0)return Hn(t.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}t=t.nextSibling}return null}function Cd(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return t;n--}else e!=="/$"&&e!=="/&"||n++}t=t.previousSibling}return null}function s3(t,n){function e(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",e,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",e,!0)}return r}function c3(t){bd(function(){bd(function(n){return t(n)})})}function _d(t,n,e){switch(n=$l(e),t){case"html":if(t=n.documentElement,!t)throw Error(f(452));return t;case"head":if(t=n.head,!t)throw Error(f(453));return t;case"body":if(t=n.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function Dd(t,n,e){for(var r in e){var l=e[r];e.hasOwnProperty(r)&&l!=null&&vt(t,n,r,null,Y0,l)}e.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Qn&&(t.onclick=null),ba(t)}function dc(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ba(t)}var xn=new Map,Md=new Set;function Pl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var be=X.d;X.d={f:f3,r:o3,D:d3,C:m3,L:h3,m:p3,X:y3,S:v3,M:b3};function f3(){var t=be.f(),n=Ei();return t||n}function o3(t){var n=Tr(t);n!==null&&n.tag===5&&n.type==="form"?Ro(n):be.r(t)}var il=typeof document>"u"?null:document;function Ud(t,n,e){var r=il;if(r&&typeof n=="string"&&n){var l=zn(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),Md.has(l)||(Md.add(l),t={rel:t,crossOrigin:e,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Zt(n,"link",t),Ut(n),r.head.appendChild(n)))}}function d3(t){be.D(t),Ud("dns-prefetch",t,null)}function m3(t,n){be.C(t,n),Ud("preconnect",t,n)}function h3(t,n,e){be.L(t,n,e);var r=il;if(r&&t&&n){var l='link[rel="preload"][as="'+zn(n)+'"]';n==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+zn(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+zn(e.imageSizes)+'"]')):l+='[href="'+zn(t)+'"]';var a=l;switch(n){case"style":a=ul(t);break;case"script":a=sl(t)}if(!(xn.has(a)||(t=F({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),xn.set(a,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(ta(a))||n==="script"&&r.querySelector(na(a))))){var i=r.createElement("link");Zt(i,"link",t),n==="style"&&(i[ya]=!0,i.onload=i.onerror=function(){Kc(i)}),Ut(i),r.head.appendChild(i)}}}function p3(t,n){be.m(t,n);var e=il;if(e&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+zn(r)+'"][href="'+zn(t)+'"]',a=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=sl(t)}if(!xn.has(a)&&(t=F({rel:"modulepreload",href:t},n),xn.set(a,t),e.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(na(a)))return}r=e.createElement("link"),Zt(r,"link",t),Ut(r),e.head.appendChild(r)}}}function v3(t,n,e){be.S(t,n,e);var r=il;if(r&&t){var l=wr(r).hoistableStyles,a=ul(t);n=n||"default";var i=l.get(a);if(!i){var u={loading:0,preload:null};if(i=r.querySelector(ta(a)))u.loading=5;else{t=F({rel:"stylesheet",href:t,"data-precedence":n},e),(e=xn.get(a))&&mc(t,e);var c=i=r.createElement("link");Ut(c),Zt(c,"link",t),c._p=new Promise(function(v,g){c.onload=v,c.onerror=g}),c.addEventListener("load",function(){u.loading|=1}),c.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ni(i,n,r)}i={type:"stylesheet",instance:i,count:1,state:u},l.set(a,i)}}}function y3(t,n){be.X(t,n);var e=il;if(e&&t){var r=wr(e).hoistableScripts,l=sl(t),a=r.get(l);a||(a=e.querySelector(na(l)),a||(t=F({src:t,async:!0},n),(n=xn.get(l))&&hc(t,n),a=e.createElement("script"),Ut(a),Zt(a,"link",t),e.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(l,a))}}function b3(t,n){be.M(t,n);var e=il;if(e&&t){var r=wr(e).hoistableScripts,l=sl(t),a=r.get(l);a||(a=e.querySelector(na(l)),a||(t=F({src:t,async:!0,type:"module"},n),(n=xn.get(l))&&hc(t,n),a=e.createElement("script"),Ut(a),Zt(a,"link",t),e.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(l,a))}}function Rd(t,n,e,r){var l=(l=ke.current)?Pl(l):null;if(!l)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(e=ul(e.href),n=wr(l).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=ul(e.href);var a=wr(l).hoistableStyles,i=a.get(t);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(t,i),(a=l.querySelector(ta(t)))?a._p||(i.instance=a,i.state.loading=5):(a=xn.get(t),a||(a={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},xn.set(t,a)),g3(l,t,a,i.state))),n&&r===null)throw Error(f(528,""));return i}if(n&&r!==null)throw Error(f(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(e=sl(e),n=wr(l).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function ul(t){return'href="'+zn(t)+'"'}function ta(t){return'link[rel="stylesheet"]['+t+"]"}function Yd(t){return F({},t,{"data-precedence":t.precedence,precedence:null})}function g3(t,n,e,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ya]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[ya]=!0,n.onload=n.onerror=Kc.bind(null,n),Zt(n,"link",e),Ut(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function sl(t){return'[src="'+zn(t)+'"]'}function na(t){return"script[async]"+t}function Bd(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+zn(e.href)+'"]');if(r)return n.instance=r,Ut(r),r;var l=F({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ut(r),Zt(r,"style",l),Ni(r,e.precedence,t),n.instance=r;case"stylesheet":l=ul(e.href);var a=t.querySelector(ta(l));if(a)return n.state.loading|=4,n.instance=a,Ut(a),a;r=Yd(e),(l=xn.get(l))&&mc(r,l),a=(t.ownerDocument||t).createElement("link"),Ut(a);var i=a;return i._p=new Promise(function(u,c){i.onload=u,i.onerror=c}),Zt(a,"link",r),n.state.loading|=4,Ni(a,e.precedence,t),n.instance=a;case"script":return a=sl(e.src),(l=t.querySelector(na(a)))?(n.instance=l,Ut(l),l):(r=e,(l=xn.get(a))&&(r=F({},e),hc(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ut(l),Zt(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(f(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ni(r,e.precedence,t));return n.instance}function Ni(t,n,e){for(var r=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,a=l,i=0;i<r.length;i++){var u=r[i];if(u.dataset.precedence===n)a=u;else if(a!==l)break}a?a.parentNode.insertBefore(t,a.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function mc(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hc(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ai=null;function Vd(t,n,e){if(Ai===null){var r=new Map,l=Ai=new Map;l.set(e,r)}else l=Ai,r=l.get(e),r||(r=new Map,l.set(e,r));if(r.has(t))return r;for(r.set(t,null),e=e.getElementsByTagName(t),l=0;l<e.length;l++){var a=e[l];if(!(a[vl]||a[qt]||t==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var i=a.getAttribute(n)||"";i=t+i;var u=r.get(i);u?u.push(a):r.set(i,[a])}}return r}function pc(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function k3(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qd(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Gd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ld(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Qd(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Ld(n),t.suspenseyImages.push(n)),t=z3.bind(t),n.decode().then(t,t))}function E3(t,n,e,r){if(e.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=ul(r.href),a=n.querySelector(ta(l));if(a){n=a._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ea.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=a,Ut(a);return}a=n.ownerDocument||n,r=Yd(r),(l=xn.get(l))&&mc(r,l),a=a.createElement("link"),Ut(a);var i=a;i._p=new Promise(function(u,c){i.onload=u,i.onerror=c}),Zt(a,"link",r),e.instance=a}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=ea.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}var Hi=0;function S3(t,n){return t.stylesheets&&t.count===0&&Ci(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var r=setTimeout(function(){if(t.stylesheets&&Ci(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4+n);0<t.imgBytes&&Hi===0&&(Hi=62500*V0());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ci(t,t.stylesheets),t.unsuspend)){var a=t.unsuspend;t.unsuspend=null,a()}},(t.imgBytes>Hi?50:800)+n);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Xd(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Ci(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ea(){this.count--,Xd(this)}function z3(){this.imgCount--,Xd(this)}var xi=null;function Ci(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xi=new Map,n.forEach(T3,t),xi=null,ea.call(t))}function T3(t,n){if(!(n.state.loading&4)){var e=xi.get(t);if(e)var r=e.get(null);else{e=new Map,xi.set(t,e);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<l.length;a++){var i=l[a];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),r=i)}r&&e.set(null,r)}l=n.instance,i=l.getAttribute("data-precedence"),a=e.get(i)||r,a===r&&e.set(null,l),e.set(i,l),this.count++,r=ea.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),a?a.parentNode.insertBefore(l,a.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var cl={$$typeof:Mt,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function w3(t,n,e,r,l,a,i,u,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ii(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.hiddenUpdates=Ii(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function Zd(t,n,e,r,l,a,i,u,c,v,g,z){return t=new w3(t,n,e,i,c,v,g,z,u),n=1,a===!0&&(n|=24),a=nn(3,null,null,n),t.current=a,a.stateNode=t,n=Hu(),n.refCount++,t.pooledCache=n,n.refCount++,a.memoizedState={element:r,isDehydrated:e,cache:n},Du(a),t}function Kd(t){return t?(t=Mr,t):Mr}function Jd(t,n,e,r,l,a){l=Kd(l),r.context===null?r.context=l:r.pendingContext=l,r=xe(n),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=Ce(t,r,n),e!==null&&(an(e,t,n),_l(e,t,n))}function Id(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function vc(t,n){Id(t,n),(t=t.alternate)&&Id(t,n)}function Wd(t){if(t.tag===13||t.tag===31){var n=rr(t,67108864);n!==null&&an(n,t,67108864),vc(t,67108864)}}function Fd(t){if(t.tag===13||t.tag===31){var n=gn();n=Wi(n);var e=rr(t,n);e!==null&&an(e,t,n),vc(t,n)}}var fl=!0;function O3(t,n,e,r){var l=U.T;U.T=null;var a=X.p;try{X.p=2,yc(t,n,e,r)}finally{X.p=a,U.T=l}}function j3(t,n,e,r){var l=U.T;U.T=null;var a=X.p;try{X.p=8,yc(t,n,e,r)}finally{X.p=a,U.T=l}}function yc(t,n,e,r){if(fl){var l=bc(r);if(l===null)$s(t,n,r,_i,e),Pd(t,r);else if(A3(l,t,n,e,r))r.stopPropagation();else if(Pd(t,r),n&4&&-1<N3.indexOf(t)){for(;l!==null;){var a=Tr(l);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var i=$e(a.pendingLanes);if(i!==0){var u=a;for(u.pendingLanes|=2,u.entangledLanes|=2;i;){var c=1<<31-dn(i);u.entanglements[1]|=c,i&=~c}te(a),(st&6)===0&&(bi=fn()+500,Il(0))}}break;case 31:case 13:u=rr(a,2),u!==null&&an(u,a,2),Ei(),vc(a,2)}if(a=bc(r),a===null&&$s(t,n,r,_i,e),a===l)break;l=a}l!==null&&r.stopPropagation()}else $s(t,n,r,null,e)}}function bc(t){return t=ru(t),gc(t)}var _i=null;function gc(t){if(_i=null,t=Pe(t),t!==null){var n=H(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=G(n),t!==null)return t;t=null}else if(e===31){if(t=q(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _i=t,null}function $d(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(V2()){case Mc:return 2;case Uc:return 8;case da:case q2:return 32;case Rc:return 268435456;default:return 32}default:return 32}}var kc=!1,Qe=null,Xe=null,Ze=null,ra=new Map,la=new Map,Ke=[],N3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pd(t,n){switch(t){case"focusin":case"focusout":Qe=null;break;case"dragenter":case"dragleave":Xe=null;break;case"mouseover":case"mouseout":Ze=null;break;case"pointerover":case"pointerout":ra.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(n.pointerId)}}function aa(t,n,e,r,l,a){return t===null||t.nativeEvent!==a?(t={blockedOn:n,domEventName:e,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},n!==null&&(n=Tr(n),n!==null&&Wd(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function A3(t,n,e,r,l){switch(n){case"focusin":return Qe=aa(Qe,t,n,e,r,l),!0;case"dragenter":return Xe=aa(Xe,t,n,e,r,l),!0;case"mouseover":return Ze=aa(Ze,t,n,e,r,l),!0;case"pointerover":var a=l.pointerId;return ra.set(a,aa(ra.get(a)||null,t,n,e,r,l)),!0;case"gotpointercapture":return a=l.pointerId,la.set(a,aa(la.get(a)||null,t,n,e,r,l)),!0}return!1}function t2(t){var n=Pe(t.target);if(n!==null){var e=H(n);if(e!==null){if(n=e.tag,n===13){if(n=G(e),n!==null){t.blockedOn=n,Qc(t.priority,function(){Fd(e)});return}}else if(n===31){if(n=q(e),n!==null){t.blockedOn=n,Qc(t.priority,function(){Fd(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Di(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=bc(t.nativeEvent);if(e===null){e=t.nativeEvent;var r=new e.constructor(e.type,e);eu=r,e.target.dispatchEvent(r),eu=null}else return n=Tr(e),n!==null&&Wd(n),t.blockedOn=e,!1;n.shift()}return!0}function n2(t,n,e){Di(t)&&e.delete(n)}function H3(){kc=!1,Qe!==null&&Di(Qe)&&(Qe=null),Xe!==null&&Di(Xe)&&(Xe=null),Ze!==null&&Di(Ze)&&(Ze=null),ra.forEach(n2),la.forEach(n2)}function Mi(t,n){t.blockedOn===n&&(t.blockedOn=null,kc||(kc=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,H3)))}var Ui=null;function e2(t){Ui!==t&&(Ui=t,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){Ui===t&&(Ui=null);for(var n=0;n<t.length;n+=3){var e=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(gc(r||e)===null)continue;break}var a=Tr(e);a!==null&&(t.splice(n,3),n-=3,ns(a,{pending:!0,data:l,method:e.method,action:r},r,l))}}))}function ol(t){function n(c){return Mi(c,t)}Qe!==null&&Mi(Qe,t),Xe!==null&&Mi(Xe,t),Ze!==null&&Mi(Ze,t),ra.forEach(n),la.forEach(n);for(var e=0;e<Ke.length;e++){var r=Ke[e];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ke.length&&(e=Ke[0],e.blockedOn===null);)t2(e),e.blockedOn===null&&Ke.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(r=0;r<e.length;r+=3){var l=e[r],a=e[r+1],i=l[tn]||null;if(typeof a=="function")i||e2(e);else if(i){var u=null;if(a&&a.hasAttribute("formAction")){if(l=a,i=a[tn]||null)u=i.formAction;else if(gc(l)!==null)continue}else u=i.action;typeof u=="function"?e[r+1]=u:(e.splice(r,3),r-=3),e2(e)}}}function r2(){function t(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(i){return l=i})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(e,20)}function e(){if(!r&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Ec(t){this._internalRoot=t}Ri.prototype.render=Ec.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(f(409));var e=n.current,r=gn();Jd(e,r,t,n,null,null)},Ri.prototype.unmount=Ec.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jd(t.current,2,null,t,null,null),Ei(),n[zr]=null}};function Ri(t){this._internalRoot=t}Ri.prototype.unstable_scheduleHydration=function(t){if(t){var n=Lc();t={blockedOn:null,target:t,priority:n};for(var e=0;e<Ke.length&&n!==0&&n<Ke[e].priority;e++);Ke.splice(e,0,t),e===0&&t2(t)}};var l2=k.version;if(l2!=="19.3.0")throw Error(f(527,l2,"19.3.0"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=K(n),t=t!==null?A(t):null,t=t===null?null:t.stateNode,t};var x3={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{ml=Yi.inject(x3),on=Yi}catch{}}return ua.createRoot=function(t,n){if(!O(t))throw Error(f(299));var e=!1,r="",l=Ko,a=Jo,i=Io;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Zd(t,1,!1,null,null,e,r,null,l,a,i,r2),t[zr]=n.current,Fs(t),new Ec(n)},ua.hydrateRoot=function(t,n,e){if(!O(t))throw Error(f(299));var r=!1,l="",a=Ko,i=Jo,u=Io,c=null;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.formState!==void 0&&(c=e.formState)),n=Zd(t,1,!0,n,e??null,r,l,c,a,i,u,r2),n.context=Kd(null),e=n.current,r=gn(),r=Wi(r),l=xe(r),l.callback=null,Ce(e,l,r),e=r,n.current.lanes=e,pl(n,e),te(n),t[zr]=n.current,Fs(t),new Ri(n)},ua.version="19.3.0",ua}var h2;function q3(){if(h2)return Tc.exports;h2=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(k){console.error(k)}}return d(),Tc.exports=V3(),Tc.exports}var G3=q3();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=d=>d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S2=(...d)=>d.filter((k,T,f)=>!!k&&k.trim()!==""&&f.indexOf(k)===T).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=dt.forwardRef(({color:d="currentColor",size:k=24,strokeWidth:T=2,absoluteStrokeWidth:f,className:O="",children:H,iconNode:G,...q},j)=>dt.createElement("svg",{ref:j,...Q3,width:k,height:k,stroke:d,strokeWidth:f?Number(T)*24/Number(k):T,className:S2("lucide",O),...q},[...G.map(([K,A])=>dt.createElement(K,A)),...Array.isArray(H)?H:[H]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(d,k)=>{const T=dt.forwardRef(({className:f,...O},H)=>dt.createElement(X3,{ref:H,iconNode:k,className:S2(`lucide-${L3(d)}`,f),...O}));return T.displayName=`${d}`,T};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=Tt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=Tt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=Tt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=Tt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=Tt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=Tt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=Tt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=Tt("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=Tt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=Tt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=Tt("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=Tt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=Tt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=Tt("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=Tt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=Tt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=Tt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=Tt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=Tt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=Tt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=Tt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=Tt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=Tt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=Tt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),uh=`Блок 1: Местоимения и базовые указатели\r
1.	I [aɪ] — я (ай)\r
2.	you [juː] — ты / вы (ю)\r
3.	he [hiː] — он (хи)\r
4.	she [ʃiː] — она (ши)\r
5.	it [ɪt] — оно / это (о предметах и животных) (ит)\r
6.	we [wiː] — мы (уи)\r
7.	they [ðeɪ] — они (зей)\r
8.	my [maɪ] — мой / моя / мое (май)\r
9.	your [jɔː(r)] — твой / ваш (уор)\r
10.	his [hɪz] — его (хиз)\r
11.	her [hɜː(r)] — её (хёр)\r
12.	our [ˈaʊə(r)] — наш (ауэр)\r
13.	their [ðeə(r)] — их (зеэр)\r
14.	this [ðɪs] — этот / эта / это (зис)\r
15.	that [ðæt] — тот / та / то (зэт)\r
Блок 2: Семья и люди (Family & People)\r
16.	family [ˈfæməli] — семья (фэмэли)\r
17.	mother (mom) [ˈmʌðə(r)] — мать (мама) (мазэ / мам)\r
18.	father (dad) [ˈfɑːðə(r)] — отец (папа) (фазэ / дэд)\r
19.	parents [ˈpeərənts] — родители (пэрэнтс)\r
20.	son [sʌn] — сын (сан)\r
21.	daughter [ˈdɔːtə(r)] — дочь (дотэ)\r
22.	brother [ˈbrʌðə(r)] — брат (бразэ)\r
23.	sister [ˈsɪstə(r)] — сестра (систэ)\r
24.	child [tʃaɪld] — ребенок (чайлд)\r
25.	children [ˈtʃɪldrən] — дети (чилдрэн)\r
26.	man [mæn] — мужчина (мэн)\r
27.	woman [ˈwʊmən] — женщина (вумэн)\r
28.	boy [bɔɪ] — мальчик (бой)\r
29.	girl [ɡɜːl] — девочка / девушка (гёрл)\r
30.	friend [frend] — друг (френд)\r
31.	people [ˈpiːpl] — люди (пипл)\r
32.	name [neɪm] — имя (нейм)\r
Блок 3: Дом, предметы и город (Home & City)\r
33.	house [haʊs] — дом (здание) (хаус)\r
34.	home [həʊm] — дом (очаг) (хоум)\r
35.	room [ruːm] — комната (рум)\r
36.	door [dɔː(r)] — дверь (дор)\r
37.	window [ˈwɪndəʊ] — окно (уиндоу)\r
38.	table [ˈteɪbl] — стол (тейбл)\r
39.	chair [tʃeə(r)] — стул (чеэ)\r
40.	bed [bed] — кровать (бед)\r
41.	city [ˈsɪti] — город (сити)\r
42.	street [striːt] — улица (стрит)\r
43.	car [kɑː(r)] — машина (кар)\r
44.	bus [bʌs] — автобус (бас)\r
45.	shop [ʃɒp] — магазин (шоп)\r
46.	school [skuːl] — школа (скул)\r
Блок 4: Время, дни и числа (Time & Numbers)\r
47.	day [deɪ] — день (дей)\r
48.	time [taɪm] — время (тайм)\r
49.	today [təˈdeɪ] — сегодня (тудей)\r
50.	yesterday [ˈjestədeɪ] — вчера (йэстэдей)\r
51.	tomorrow [təˈmɒrəʊ] — завтра (томороу)\r
52.	morning [ˈmɔːnɪŋ] — утро (морнинъ)\r
53.	night [naɪt] — ночь (найт)\r
54.	year [jɪə(r)] — год (йиэр)\r
55.	week [wiːk] — неделя (уик)\r
56.	now [naʊ] — сейчас (нау)\r
57.	one [wʌn] — один (уан)\r
58.	two [tuː] — два (ту)\r
59.	three [θriː] — три (фри)\r
60.	four [fɔː(r)] — четыре (фор)\r
61.	five [faɪv] — пять (файв)\r
Блок 5: Ключевые глаголы действия (Core Verbs)\r
62.	be [biː] — быть / находиться (би)\r
63.	have [hæv] — иметь (хэв)\r
64.	do [duː] — делать (ду)\r
65.	go [ɡəʊ] — идти / ехать (гоу)\r
66.	come [kʌm] — приходить (кам)\r
67.	see [siː] — видеть (си)\r
68.	look [lʊk] — смотреть (лук)\r
69.	like [laɪk] — нравиться (лайк)\r
70.	love [lʌv] — любить (лав)\r
71.	want [wɒnt] — хотеть (уонт)\r
72.	live [lɪv] — жить (лив)\r
73.	work [wɜːk] — работать (уорк)\r
74.	speak [spiːk] — говорить (спик)\r
75.	eat [iːt] — есть / кушать (ит)\r
76.	drink [drɪŋk] — пить (дринк)\r
77.	know [nəʊ] — знать (ноу)\r
78.	think [θɪŋk] — думать (финк)\r
79.	make [meɪk] — делать / создавать (мейк)\r
80.	take [teɪk] — брать (тейк)\r
81.	give [ɡɪv] — давать (гив)\r
82.	help [help] — помогать (хэлп)\r
Блок 6: Прилагательные, предлоги и союзы (Adjectives & Connectors)\r
83.	good [ɡʊd] — хороший (гуд)\r
84.	bad [bæd] — плохой (бэд)\r
85.	big [bɪɡ] — большой (биг)\r
86.	small [smɔːl] — маленький (смол)\r
87.	new [njuː] — новый (нью)\r
88.	old [əʊld] — старый (оулд)\r
89.	hot [hɒt] — горячий (хот)\r
90.	cold [kəʊld] — холодный (коулд)\r
91.	happy [ˈhæpi] — счастливый (хэпи)\r
92.	in [ɪn] — в (ин)\r
93.	on [ɒn] — на (он)\r
94.	at [æt] — у / в (эт)\r
95.	with [wɪð] — с (уиз)\r
96.	without [wɪˈðaʊt] — без (уизаут)\r
97.	and [ænd] — и (энд)\r
98.	but [bʌt] — но (бат)\r
99.	because [bɪˈkɒz] — потому что (бикоз)\r
100.	yes / no [jes / nəʊ] — да / нет (йес / ноу)\r
Блок 1: Еда, напитки и посуда (Food, Drinks & Tableware)\r
101.	bread [bred] — хлеб (бред)\r
102.	milk [mɪlk] — молоко (милк)\r
103.	tea [tiː] — чай (ти)\r
104.	coffee [ˈkɒfi] — кофе (кофи)\r
105.	apple [ˈæpl] — яблоко (эпл)\r
106.	banana [bəˈnɑːnə] — банан (банана)\r
107.	cheese [tʃiːz] — сыр (чиз)\r
108.	meat [miːt] — мясо (мит)\r
109.	chicken [ˈtʃɪkɪn] — курица (чикин)\r
110.	fish [fɪʃ] — рыба (фиш)\r
111.	egg [eɡ] — яйцо (эг)\r
112.	sugar [ˈʃʊɡə(r)] — сахар (шугэ)\r
113.	salt [sɔːlt] — соль (солт)\r
114.	fruit [fruːt] — фрукт / фрукты (фрут)\r
115.	vegetable [ˈvedʒtəbl] — овощ (веджтэбл)\r
116.	soup [suːp] — суп (суп)\r
117.	cake [keɪk] — торт / пирожное (кейк)\r
118.	plate [pleɪt] — тарелка (плейт)\r
119.	cup [kʌp] — чашка (кап)\r
120.	glass [ɡlɑːs] — стакан / стекло (глас)\r
Блок 2: Одежда и аксессуары (Clothes & Accessories)\r
121.	shirt [ʃɜːt] — рубашка (шёрт)\r
122.	T-shirt [ˈtiː ʃɜːt] — футболка (ти-шёрт)\r
123.	pants (trousers) [pænts / ˈtraʊzəz] — брюки / штаны (пэнтс / траузэрз)\r
124.	dress [dres] — платье (дрес)\r
125.	skirt [skɜːt] — юбка (скёрт)\r
126.	coat [kəʊt] — пальто / куртка (коут)\r
127.	jacket [ˈdʒækɪt] — куртка / пиджак (джэкит)\r
128.	shoes [ʃuːz] — обувь / туфли (шуз)\r
129.	hat [hæt] — шляпа / шапка (хэт)\r
130.	bag [bæɡ] — сумка (бэг)\r
Блок 3: Цвета и качество (Colors & Quality)\r
131.	red [red] — красный (ред)\r
132.	blue [bluː] — синий / голубой (блу)\r
133.	green [ɡriːn] — зеленый (грин)\r
134.	yellow [ˈjeləʊ] — желтый (йелоу)\r
135.	black [blæk] — черный (блэк)\r
136.	white [waɪt] — белый (уайт)\r
137.	grey [ɡreɪ] — серый (грей)\r
138.	brown [braʊn] — коричневый (браун)\r
139.	pink [pɪŋk] — розовый (пинк)\r
140.	orange [ˈɒrɪndʒ] — оранжевый (ориндж)\r
141.	beautiful [ˈbjuːtɪfl] — красивый (бьютифул)\r
142.	nice [naɪs] — хороший / приятный (найс)\r
143.	cheap [tʃiːp] — дешевый (чип)\r
144.	expensive [ɪkˈspensɪv] — дорогой (экспенсив)\r
145.	clean [kliːn] — чистый (клин)\r
146.	dirty [ˈdɜːti] — грязный (дёрти)\r
Блок 4: Чувства, здоровье и состояние (Feelings & Body)\r
147.	head [hed] — голова (хед)\r
148.	face [feɪs] — лицо (фейс)\r
149.	eye [aɪ] — глаз (ай)\r
150.	ear [ɪə(r)] — ухо (иэр)\r
151.	nose [nəʊz] — нос (ноуз)\r
152.	mouth [maʊθ] — рот (мауф)\r
153.	hand [hænd] — кисть руки / рука (хэнд)\r
154.	leg [leɡ] — нога (лег)\r
155.	body [ˈbɒdi] — тело (боди)\r
156.	tired [ˈtaɪəd] — уставший (тайэрд)\r
157.	sick [sɪk] — больной (сик)\r
158.	hungry [ˈhʌŋɡri] — голодный (хангри)\r
159.	thirsty [ˈθɜːsti] — испытывающий жажду (фёрсти)\r
160.	sad [sæd] — грустный (сэд)\r
Блок 5: Глаголы восприятия и движения (Action Verbs)\r
161.	walk [wɔːk] — ходить пешком (уок)\r
162.	run [rʌn] — бегать (ран)\r
163.	stop [stɒp] — останавливаться (стоп)\r
164.	turn [tɜːn] — поворачивать (тёрн)\r
165.	open [ˈəʊpən] — открывать (оупэн)\r
166.	close [kləʊz] — закрывать (клоуз)\r
167.	play [pleɪ] — играть (плей)\r
168.	listen [ˈlɪsn] — слушать (лисн)\r
169.	hear [hɪə(r)] — слышать (хиэр)\r
170.	read [riːd] — читать (рид)\r
171.	write [raɪt] — писать (райт)\r
172.	sit [sɪt] — сидеть (сит)\r
173.	stand [stænd] — стоять (стэнд)\r
174.	sleep [sliːp] — спать (слип)\r
175.	wake up [weɪk ʌp] — просыпаться (уэйк ап)\r
176.	wash [wɒʃ] — мыть / умываться (уош)\r
177.	cook [kʊk] — готовить еду (кук)\r
178.	pay [peɪ] — платить (пей)\r
179.	buy [baɪ] — покупать (бай)\r
180.	sell [sel] — продавать (сел)\r
Блок 6: Вопросительные слова и время (Question Words & Time)\r
181.	what [wɒt] — что / какой (уот)\r
182.	who [huː] — кто (ху)\r
183.	where [weə(r)] — где / куда (уээ)\r
184.	when [wen] — когда (уэн)\r
185.	why [waɪ] — почему / зачем (уай)\r
186.	how [haʊ] — как (хау)\r
187.	how much [haʊ mʌtʃ] — сколько (о неисчисляемых / о цене) (хау мач)\r
188.	how many [haʊ ˈmeni] — сколько (о исчисляемых) (хау мени)\r
189.	minute [ˈmɪnɪt] — минута (минит)\r
190.	hour [ˈaʊə(r)] — час (ауэр)\r
191.	month [mʌnθ] — месяц (манф)\r
192.	season [ˈsiːzn] — время года / сезон (сизн)\r
193.	spring [sprɪŋ] — весна (спринъ)\r
194.	summer [ˈsʌmə(r)] — лето (самэ)\r
195.	autumn (fall) [ˈɔːtəm / fɔːl] — осень (отом / фол)\r
196.	winter [ˈwɪntə(r)] — зима (уинтэ)\r
197.	Monday [ˈmʌndeɪ] — понедельник (мандей)\r
198.	Friday [ˈfraɪdeɪ] — пятница (фрайдей)\r
199.	Saturday [ˈsætədeɪ] — суббота (сэтэдей)\r
200.	Sunday [ˈsʌndeɪ] — воскресенье (сандей)\r
Часть 3: Слова 201–300 уровня A1\r
Блок 1: Природа, погода и мир (Nature, Weather & World)\r
201.	sun [sʌn] — солнце (сан)\r
202.	moon [muːn] — луна (мун)\r
203.	sky [skaɪ] — небо (скай)\r
204.	star [stɑː(r)] — звезда (стар)\r
205.	tree [triː] — дерево (три)\r
206.	flower [ˈflaʊə(r)] — цветок (флауэр)\r
207.	grass [ɡrɑːs] — трава (грас)\r
208.	sea [siː] — море (си)\r
209.	river [ˈrɪvə(r)] — река (ривэ)\r
210.	mountain [ˈmaʊntən] — гора (маунтэн)\r
211.	rain [reɪn] — дождь (рейн)\r
212.	snow [snəʊ] — снег (сноу)\r
213.	wind [wɪnd] — ветер (винд)\r
214.	weather [ˈweðə(r)] — погода (уэзэ)\r
215.	world [wɜːld] — мир / Земля (уорлд)\r
Блок 2: Животные (Animals)\r
216.	cat [kæt] — кот / кошка (кэт)\r
217.	dog [dɒɡ] — собака (дог)\r
218.	bird [bɜːd] — птица (бёрд)\r
219.	fish [fɪʃ] — рыба (фиш)\r
220.	horse [hɔːs] — лошадь (хорс)\r
221.	cow [kaʊ] — корова (кау)\r
222.	pig [pɪɡ] — свинья (пиг)\r
223.	sheep [ʃiːp] — овца (шип)\r
224.	mouse [maʊs] — мышь (маус)\r
225.	bear [beə(r)] — медведь (беэ)\r
Блок 3: Транспорт и путешествия (Transport & Travel)\r
226.	train [treɪn] — поезд (трейн)\r
227.	plane [pleɪn] — самолет (плейн)\r
228.	ship [ʃɪp] — корабль (шип)\r
229.	boat [bəʊt] — лодка (боут)\r
230.	bicycle (bike) [ˈbaɪsɪkl / baɪk] — велосипед (байсикл / байк)\r
231.	taxi [ˈtæksi] — такси (тэкси)\r
232.	ticket [ˈtɪkɪt] — билет (тикит)\r
233.	station [ˈsteɪʃn] — станция / вокзал (стейшн)\r
234.	airport [ˈeəpɔːt] — аэропорт (эапорт)\r
235.	hotel [həʊˈtel] — отель / гостиница (хоутел)\r
236.	map [mæp] — карта (мэп)\r
237.	trip [trɪp] — поездка (трип)\r
Блок 4: Учеба, работа и офис (Study, Work & Office)\r
238.	pen [pen] — ручка (пен)\r
239.	pencil [ˈpensl] — карандаш (пенсл)\r
240.	paper [ˈpeɪpə(r)] — бумага (пейпэ)\r
241.	page [peɪdʒ] — страница (пейдж)\r
242.	word [wɜːd] — слово (уорд)\r
243.	letter [ˈletə(r)] — письмо / буква (летэ)\r
244.	computer [kəmˈpjuːtə(r)] — компьютер (компьютэ)\r
245.	phone [fəʊn] — телефон (фоун)\r
246.	internet [ˈɪntənet] — интернет (интернет)\r
247.	desk [desk] — письменный стол / парта (деск)\r
248.	bag [bæɡ] — портфель / сумка (бэг)\r
249.	lesson [ˈlesn] — урок (лесн)\r
250.	test [test] — тест / проверка (тест)\r
Блок 5: Ежедневные действия и быт (Daily Actions & Housework)\r
251.	clean [kliːn] — убирать / чистить (клин)\r
252.	wash [wɒʃ] — мыть / стирать (уош)\r
253.	cook [kʊk] — готовить (кук)\r
254.	open [ˈəʊpən] — открывать (оупэн)\r
255.	close [kləʊz] — закрывать (клоуз)\r
256.	start [stɑːt] — начинать (старт)\r
257.	finish [ˈfɪnɪʃ] — заканчивать (финиш)\r
258.	call [kɔːl] — звонить / звать (кол)\r
259.	answer [ˈɑːnsə(r)] — отвечать (ансэ)\r
260.	ask [ɑːsk] — спрашивать (аск)\r
261.	wait [weɪt] — ждать (уэйт)\r
262.	meet [miːt] — встречать / знакомиться (мит)\r
263.	send [send] — отправлять (сенд)\r
264.	get [ɡet] — получать / становиться (гет)\r
265.	bring [brɪŋ] — приносить (бринъ)\r
Блок 6: Характеристики и состояния (Adjectives & Adverbs)\r
266.	young [jʌŋ] — молодой (янъ)\r
267.	old [əʊld] — старый (оулд)\r
268.	tall [tɔːl] — высокий (тол)\r
269.	short [ʃɔːt] — короткий / низкий (шорт)\r
270.	long [lɒŋ] — длинный (лонъ)\r
271.	fat [fæt] — толстый (фэт)\r
272.	thin [θɪn] — тонкий / худой (фин)\r
273.	strong [strɒŋ] — сильный (стронъ)\r
274.	weak [wiːk] — слабый (вик)\r
275.	rich [rɪtʃ] — богатый (рич)\r
276.	poor [pɔː(r)] — бедный (пор)\r
277.	kind [kaɪnd] — добрый (кайнд)\r
278.	nice [naɪs] — милый / приятный (найс)\r
279.	angry [ˈæŋɡri] — злой (энгри)\r
280.	busy [ˈbɪzi] — занятой (бизи)\r
281.	free [friː] — свободный / бесплатный (фри)\r
282.	early [ˈɜːli] — ранний / рано (ёрли)\r
283.	late [leɪt] — поздний / поздно (лейт)\r
284.	dark [dɑːk] — темный (дарк)\r
285.	light [laɪt] — светлый / легкий (лайт)\r
Блок 7: Покупки, деньги и заведения (Shopping & Places)\r
286.	store / shop [stɔː(r) / ʃɒp] — магазин (стор / шоп)\r
287.	supermarket [ˈsuːpəmɑːkɪt] — супермаркет (супэрмаркит)\r
288.	market [ˈmɑːkɪt] — рынок (маркит)\r
289.	bank [bæŋk] — банк (бэнк)\r
290.	cafe [ˈkæfeɪ] — кафе (кэфэй)\r
291.	restaurant [ˈrestrɒnt] — ресторан (рестрант)\r
292.	park [pɑːk] — парк (парк)\r
293.	hospital [ˈhɒspɪtl] — больница (хоспитл)\r
294.	dollar [ˈdɒlə(r)] — доллар (долэр)\r
295.	euro [ˈjʊərəʊ] — евро (юроу)\r
296.	price [praɪs] — цена (прайс)\r
297.	cash [kæʃ] — наличные деньги (кэш)\r
298.	card [kɑːd] — карта (банковская) (кард)\r
299.	cost [kɒst] — стоить / стоимость (кост)\r
300.	buy [baɪ] — покупать (бай)\r
Часть 4: Слова 301–400 уровня A1\r
Блок 1: Расписание, месяцы и дни недели (Time, Months & Days)\r
301.	January [ˈdʒænjuəri] — январь (джэньюэри)\r
302.	February [ˈfebruəri] — февраль (фебруэри)\r
303.	March [mɑːtʃ] — март (март)\r
304.	April [ˈeɪprəl] — апрель (эйпрал)\r
305.	May [meɪ] — май (мей)\r
306.	June [dʒuːn] — июнь (джюн)\r
307.	July [dʒuˈlaɪ] — июль (джюлай)\r
308.	August [ˈɔːɡəst] — август (огаст)\r
309.	September [sepˈtembə(r)] — сентябрь (сэптэмбэ)\r
310.	October [ɒkˈtəʊbə(r)] — октябрь (октоубэ)\r
311.	November [nəʊˈvembə(r)] — ноябрь (ноувэмбэ)\r
312.	December [dɪˈsembə(r)] — декабрь (дисэмбэ)\r
313.	Tuesday [ˈtjuːzdeɪ] — вторник (тьюздей)\r
314.	Wednesday [ˈwenzdeɪ] — среда (уэнздей)\r
315.	Thursday [ˈθɜːzdeɪ] — четверг (фёрздей)\r
Блок 2: Предметы быта и дома (Around the House)\r
316.	kitchen [ˈkɪtʃɪn] — кухня (кичин)\r
317.	bathroom [ˈbɑːθruːm] — ванная комната (бафрум)\r
318.	bedroom [ˈbedruːm] — спальня (бедрум)\r
319.	flat (apartment) [flæt / əˈpɑːtmənt] — квартира (флэт / апартмэнт)\r
320.	floor [flɔː(r)] — пол / этаж (флор)\r
321.	wall [wɔːl] — стена (уол)\r
322.	doorbell [ˈdɔːbel] — дверной звонок (дорбел)\r
323.	key [kiː] — ключ (ки)\r
324.	clock [klɒk] — часы (настенные/настольные) (клок)\r
325.	watch [wɒtʃ] — часы (наручные) (уотч)\r
326.	picture [ˈpɪktʃə(r)] — картина / фото (пикчэ)\r
327.	mirror [ˈmɪrə(r)] — зеркало (мирэ)\r
328.	sofa [ˈsəʊfə] — диван (соуфэ)\r
329.	box [bɒks] — коробка (бокс)\r
330.	bag [bæɡ] — сумка / пакет (бэг)\r
Блок 3: Еда, напитки и приготовление (Food & Cooking)\r
331.	water [ˈwɔːtə(r)] — вода (уотэ)\r
332.	juice [dʒuːs] — сок (джюс)\r
333.	butter [ˈbʌtə(r)] — сливочное масло (батэ)\r
334.	oil [ɔɪl] — растительное масло (ойл)\r
335.	rice [raɪs] — рис (райс)\r
336.	pasta [ˈpæstə] — макароны / паста (паста)\r
337.	pizza [ˈpiːtsə] — пицца (пицца)\r
338.	sandwich [ˈsænwɪdʒ] — бутерброд / сэндвич (сэнэвидж)\r
339.	potato [pəˈteɪtəʊ] — картофель (потейтоу)\r
340.	tomato [təˈmɑːtəʊ] — помидор (томатоу)\r
341.	onion [ˈʌnjən] — лук (анйэн)\r
342.	sugar [ˈʃʊɡə(r)] — сахар (шугэ)\r
343.	sweet [swiːt] — конфета / сладкий (суит)\r
344.	ice cream [ˌaɪs ˈkriːm] — мороженое (айс крим)\r
345.	breakfast [ˈbrekfəst] — завтрак (брекфэст)\r
346.	lunch [lʌntʃ] — обед (ланч)\r
347.	dinner [ˈdɪnə(r)] — ужин (динэ)\r
Блок 4: Чувства, внешность и личность (Feelings & Appearance)\r
348.	hair [heə(r)] — волосы (хеэ)\r
349.	skin [skɪn] — кожа (скин)\r
350.	smile [smaɪl] — улыбка / улыбаться (смайл)\r
351.	laugh [lɑːf] — смех / смеяться (лаф)\r
352.	cry [kraɪ] — плакать / кричать (край)\r
353.	afraid [əˈfreɪd] — испуганный (эфрейд)\r
354.	cold [kəʊld] — замёрзший (коулд)\r
355.	hot [hɒt] — перегретый / горячий (хот)\r
356.	hungry [ˈhʌŋɡri] — голодный (хангри)\r
357.	funny [ˈfʌni] — смешной / забавный (фани)\r
358.	quiet [ˈkwaɪət] — тихий / спокойный (куайэт)\r
359.	loud [laʊd] — громкий (лауд)\r
360.	clever (smart) [ˈklevə(r) / smɑːt] — умный (клевэ / смарт)\r
Блок 5: Ежедневные действия и общение (Daily Actions & Communication)\r
361.	say [seɪ] — сказать (сей)\r
362.	tell [tel] — рассказывать (тел)\r
363.	talk [tɔːk] — разговаривать (ток)\r
364.	understand [ˌʌndəˈstænd] — понимать (андэстэнд)\r
365.	learn [lɜːn] — учить / изучать (лёрн)\r
366.	study [ˈstʌdi] — учиться (в заведении) (стади)\r
367.	remember [rɪˈmembə(r)] — помнить (римембэ)\r
368.	forget [fəˈɡet] — забывать (фэгет)\r
369.	try [traɪ] — пробовать / пытаться (трай)\r
370.	use [juːz] — использовать (юз)\r
371.	change [tʃeɪndʒ] — менять (чейндж)\r
372.	show [ʃəʊ] — показывать (шоу)\r
373.	pay [peɪ] — платить (пей)\r
374.	buy [baɪ] — покупать (бай)\r
375.	sell [sel] — продавать (сел)\r
Блок 6: Ориентация в пространстве и места (Directions & Places)\r
376.	left [left] — лево / левый (лефт)\r
377.	right [raɪt] — право / правый (райт)\r
378.	straight [streɪt] — прямо (стрейт)\r
379.	near [nɪə(r)] — близко / рядом (ниэр)\r
380.	far [fɑː(r)] — далеко (фар)\r
381.	here [hɪə(r)] — здесь (хиэр)\r
382.	there [ðeə(r)] — там (зеэр)\r
383.	street [striːt] — улица (стрит)\r
384.	road [rəʊd] — дорога (роуд)\r
385.	bus stop [bʌs stɒp] — автобусная остановка (бас стоп)\r
386.	school [skuːl] — школа (скул)\r
387.	shop [ʃɒp] — магазин (шоп)\r
388.	park [pɑːk] — парк (парк)\r
389.	center [ˈsentə(r)] — центр (сэнтэр)\r
390.	address [əˈdres] — адрес (адрэс)\r
Блок 7: Полезные слова и связки (Useful Connectors & Adverbs)\r
391.	always [ˈɔːlweɪz] — всегда (олвэйз)\r
392.	never [ˈnevə(r)] — никогда (нэвэ)\r
393.	sometimes [ˈsʌmtaɪmz] — иногда (самтаймз)\r
394.	often [ˈɒfn] — часто (офн)\r
395.	usually [ˈjuːʒuəli] — обычно (южуэли)\r
396.	again [əˈɡen] — снова / опять (эген)\r
397.	together [təˈɡeðə(r)] — вместе (тугезэ)\r
398.	also [ˈɔːlsəʊ] — также (олсоу)\r
399.	very [ˈveri] — очень (вери)\r
400.	too [tuː] — тоже / слишком (ту)\r
Часть 5: Слова 401–500 уровня A1\r
Блок 1: Отдых, хобби и развлечения (Leisure, Hobbies & Media)\r
401.	game [ɡeɪm] — игра (гейм)\r
402.	music [ˈmjuːzɪk] — музыка (мьюзик)\r
403.	song [sɒŋ] — песня (сонъ)\r
404.	movie (film) [ˈmuːvi / fɪlm] — фильм (муви / филм)\r
405.	cinema [ˈsɪnəmɑː] — кинотеатр (синэма)\r
406.	sport [spɔːt] — спорт (спорт)\r
407.	football [ˈfʊtbɔːl] — футбол (футбол)\r
408.	tennis [ˈtenɪs] — теннис (тенис)\r
409.	dance [dɑːns] — танец / танцевать (данс)\r
410.	party [ˈpɑːti] — вечеринка (парти)\r
411.	toy [tɔɪ] — игрушка (той)\r
412.	photo [ˈfəʊtəʊ] — фотография (фоутоу)\r
413.	camera [ˈkæmrə] — фотоаппарат / камера (кэмрэ)\r
414.	art [ɑːt] — искусство (арт)\r
415.	holiday [ˈhɒlədeɪ] — праздник / отпуск (холидей)\r
Блок 2: Цифровой мир и устройства (Digital & Technology)\r
416.	computer [kəmˈpjuːtə(r)] — компьютер (компьютэ)\r
417.	laptop [ˈlæptɒp] — ноутбук (лэптоп)\r
418.	screen [skriːn] — экран (скрин)\r
419.	keyboard [ˈkiːbɔːd] — клавиатура (киборд)\r
420.	mouse [maʊs] — компьютерная мышь (маус)\r
421.	message [ˈmesɪdʒ] — сообщение (месидж)\r
422.	email [ˈiːmeɪl] — электронное письмо (имейл)\r
423.	site (website) [saɪt / ˈwebsaɪt] — сайт (сайт / вебсайт)\r
424.	online [ˌɒnˈlaɪn] — онлайн / в сети (онлайн)\r
425.	offline [ˌɒfˈlaɪn] — офлайн / не в сети (офлайн)\r
426.	text [tekst] — текст / писать сообщение (текст)\r
427.	video [ˈvɪdiəʊ] — видео (видео)\r
428.	file [faɪl] — файл (файл)\r
429.	link [lɪŋk] — ссылка (линк)\r
430.	app (application) [æp] — приложение (эп)\r
Блок 3: Здоровье, гигиена и самочувствие (Health & Hygiene)\r
431.	doctor [ˈdɒktə(r)] — врач (доктэ)\r
432.	medicine [ˈmedsn] — лекарство (медсн)\r
433.	hospital [ˈhɒspɪtl] — больница (хоспитл)\r
434.	pain [peɪn] — боль (пейн)\r
435.	tooth [tuːθ] — зуб (туф)\r
436.	soap [səʊp] — мыло (соуп)\r
437.	towel [ˈtaʊəl] — полотенце (тауэл)\r
438.	shampoo [ʃæmˈpuː] — шампунь (шэмпу)\r
439.	water [ˈwɔːtə(r)] — вода (уотэ)\r
440.	well [wel] — хорошо / здоровый (вел)\r
Блок 4: Еда, посуда и кафе (Food, Utensils & Dining)\r
441.	spoon [spuːn] — ложка (спун)\r
442.	fork [fɔːk] — вилка (форк)\r
443.	knife [naɪf] — нож (найф)\r
444.	menu [ˈmenjuː] — меню (менью)\r
445.	bill [bɪl] — счёт (бил)\r
446.	tea [tiː] — чай (ти)\r
447.	coffee [ˈkɒfi] — кофе (кофи)\r
448.	sugar [ˈʃʊɡə(r)] — сахар (шугэ)\r
449.	fruit [fruːt] — фрукты (фрут)\r
450.	apple [ˈæpl] — яблоко (эпл)\r
Блок 5: Природа и окружающая среда (Nature & Environment)\r
451.	forest [ˈfɒrɪst] — лес (форист)\r
452.	lake [leɪk] — озеро (лейк)\r
453.	beach [biːtʃ] — пляж (бич)\r
454.	island [ˈaɪlənd] — остров (айлэнд)\r
455.	plant [plɑːnt] — растение (плант)\r
456.	stone [stəʊn] — камень (стоун)\r
457.	air [eə(r)] — воздух (эар)\r
458.	fire [ˈfaɪə(r)] — огонь (файэр)\r
459.	earth [ɜːθ] — земля / планета Земля (ёф)\r
460.	field [fiːld] — поле (филд)\r
Блок 6: Вспомогательные и модальные глаголы (Modal & Auxiliary Verbs)\r
461.	can [kæn] — мочь / уметь (кэн)\r
462.	could [kʊd] — мог бы / умел (куд)\r
463.	must [mʌst] — должен / обязан (маст)\r
464.	should [ʃʊd] — следует / стоит (шуд)\r
465.	may [meɪ] — мочь (разрешение) (мей)\r
466.	will [wɪl] — вспомогательный глагол будущего времени (уил)\r
467.	would [wʊd] — бы (было бы) (вуд)\r
468.	need [niːd] — нуждаться (нид)\r
469.	have to [hæv tuː] — быть должным (хэв ту)\r
470.	let [let] — позволять / давать (лет)\r
Блок 7: Наречия, степени и неопределенные слова (Adverbs & Quantifiers)\r
471.	some [sʌm] — немного / несколько (сам)\r
472.	any [ˈeni] — какой-либо / сколько-нибудь (эни)\r
473.	many [ˈmeni] — много (для исчисляемых) (мени)\r
474.	much [mʌtʃ] — много (для неисчисляемых) (мач)\r
475.	more [mɔː(r)] — больше (мор)\r
476.	less [les] — меньше (лес)\r
477.	all [ɔːl] — всё / все (ол)\r
478.	every [ˈevri] — каждый (эври)\r
479.	each [iːtʃ] — каждый (по отдельности) (ич)\r
480.	other [ˈʌðə(r)] — другой (азэ)\r
481.	another [əˈnʌðə(r)] — ещё один / другой (эназэ)\r
482.	same [seɪm] — тот же самый / одинаковый (сейм)\r
483.	such [sʌtʃ] — такой (сач)\r
484.	so [səʊ] — так / поэтому (соу)\r
485.	then [ðen] — затем / тогда (зен)\r
486.	than [ðæn] — чем (при сравнении) (зэн)\r
487.	just [dʒʌst] — просто / только что (джаст)\r
488.	only [ˈəʊnli] — только (оунли)\r
489.	already [ɔːlˈredi] — уже (олреди)\r
490.	still [stɪl] — всё ещё (стил)\r
491.	yet [jet] — ещё (в отрицаниях/вопросах) (йет)\r
492.	almost [ˈɔːlməʊst] — почти (олмоуст)\r
493.	enough [ɪˈnʌf] — достаточно (инаф)\r
494.	maybe [ˈmeɪbi] — может быть (мейби)\r
495.	together [təˈɡeðə(r)] — вместе (тугезэ)\r
496.	well [wel] — хорошо (вел)\r
497.	fast [fɑːst] — быстро (фаст)\r
498.	slowly [ˈsləʊli] — медленно (слоули)\r
499.	here [hɪə(r)] — здесь (хиэр)\r
500.	there [ðeə(r)] — там (зеэр)\r
Часть 6: Слова 501–600 уровня A1\r
Блок 1: Одежда, аксессуары и покупки (Clothing & Shopping)\r
501.	shirt [ʃɜːt] — рубашка (шёрт)\r
502.	pants (trousers) [pænts / ˈtraʊzəz] — брюки / штаны (пэнтс / траузэрз)\r
503.	skirt [skɜːt] — юбка (скёрт)\r
504.	dress [dres] — платье (дрес)\r
505.	jacket [ˈdʒækɪt] — куртка / пиджак (джэкит)\r
506.	coat [kəʊt] — пальто (коут)\r
507.	sweater [ˈswetə(r)] — свитер (суэтэ)\r
508.	socks [sɒks] — носки (сокс)\r
509.	shoes [ʃuːz] — туфли / обувь (шуз)\r
510.	boots [buːts] — ботинки / сапоги (бутс)\r
511.	hat [hæt] — шляпа / шапка (хэт)\r
512.	cap [kæp] — кепка (кэп)\r
513.	gloves [ɡlʌvz] — перчатки (главз)\r
514.	scarf [skɑːf] — шарф (скарф)\r
515.	belt [belt] — ремень / пояс (белт)\r
Блок 2: Дом, мебель и интерьер (House, Furniture & Decor)\r
516.	kitchen [ˈkɪtʃɪn] — кухня (кичин)\r
517.	living room [ˈlɪvɪŋ ruːm] — гостиная (ливинъ рум)\r
518.	bathroom [ˈbɑːθruːm] — ванная комната (бафрум)\r
519.	bedroom [ˈbedruːm] — спальня (бедрум)\r
520.	wall [wɔːl] — стена (уол)\r
521.	floor [flɔː(r)] — пол / этаж (флор)\r
522.	door [dɔː(r)] — дверь (дор)\r
523.	window [ˈwɪndəʊ] — окно (уиндоу)\r
524.	table [ˈteɪbl] — стол (тейбл)\r
525.	chair [tʃeə(r)] — стул (чеэ)\r
526.	sofa [ˈsəʊfə] — диван (соуфэ)\r
527.	bed [bed] — кровать (бед)\r
528.	lamp [læmp] — лампа (лэмп)\r
529.	picture [ˈpɪktʃə(r)] — картина / фото (пикчэ)\r
530.	shelf [ʃelf] — полка (шелф)\r
Блок 3: Учеба, офисные принадлежности и работа (Study & Office)\r
531.	pencil [ˈpensl] — карандаш (пенсл)\r
532.	pen [pen] — ручка (пен)\r
533.	paper [ˈpeɪpə(r)] — бумага (пейпэ)\r
534.	notebook [ˈnəʊtbʊk] — тетрадь / блокнот (ноутбук)\r
535.	book [bʊk] — книга (бук)\r
536.	dictionary [ˈdɪkʃənri] — словарь (дикшэнри)\r
537.	textbook [ˈtekstbʊk] — учебник (текстбук)\r
538.	page [peɪdʒ] — страница (пейдж)\r
539.	desk [desk] — парта / письменный стол (деск)\r
540.	board [bɔːd] — доска (борд)\r
541.	student [ˈstjuːdnt] — студент / ученик (стьюднт)\r
542.	teacher [ˈtiːtʃə(r)] — учитель (титчэ)\r
543.	lesson [ˈlesn] — урок (лесн)\r
544.	homework [ˈhəʊmwɜːk] — домашнее задание (хоумуорк)\r
545.	question [ˈkwestʃən] — вопрос (куэстчэн)\r
Блок 4: Чувства, эмoции и состояния (Emotions & States)\r
546.	happy [ˈhæpi] — счастливый (хэпи)\r
547.	sad [sæd] — грустный (сэд)\r
548.	angry [ˈæŋɡri] — злой / сердитый (энгри)\r
549.	tired [ˈtaɪəd] — уставший (тайэрд)\r
550.	sick [sɪk] — больной (сик)\r
551.	hungry [ˈhʌŋɡri] — голодный (хангри)\r
552.	thirsty [ˈθɜːsti] — испытывающий жажду (фёрсти)\r
553.	afraid [əˈfreɪd] — испуганный (эфрейд)\r
554.	surprised [səˈpraɪzd] — удивленный (сэпрайзд)\r
555.	calm [kɑːm] — спокойный (кам)\r
Блок 5: Ежедневные действия и привычки (Routine Actions)\r
556.	wake up [weɪk ʌp] — просыпаться (уэйк ап)\r
557.	get up [ɡet ʌp] — вставать с кровати (гет ап)\r
558.	wash [wɒʃ] — мыть / умываться (уош)\r
559.	brush [brʌʃ] — чистить (зубы, волосы) (браш)\r
560.	cook [kʊk] — готовить (кук)\r
561.	clean [kliːn] — чистить / убирать (клин)\r
562.	work [wɜːk] — работать (уорк)\r
563.	rest [rest] — отдыхать (рест)\r
564.	sleep [sliːp] — спать (слип)\r
565.	drink [drɪŋk] — пить (дринк)\r
566.	eat [iːt] — есть / кушать (ит)\r
567.	talk [tɔːk] — разговаривать (ток)\r
568.	listen [ˈlɪsn] — слушать (лисн)\r
569.	watch [wɒtʃ] — смотреть / наблюдать (уотч)\r
570.	read [riːd] — читать (рид)\r
Блок 6: Описание предметов и цвета (Descriptions & Colors)\r
571.	black [blæk] — черный (блэк)\r
572.	white [waɪt] — белый (уайт)\r
573.	red [red] — красный (ред)\r
574.	blue [bluː] — синий / голубой (блу)\r
575.	green [ɡriːn] — зеленый (грин)\r
576.	yellow [ˈjeləʊ] — желтый (йелоу)\r
577.	brown [braʊn] — коричневый (браун)\r
578.	grey [ɡreɪ] — серый (грей)\r
579.	orange [ˈɒrɪndʒ] — оранжевый (ориндж)\r
580.	pink [pɪŋk] — розовый (пинк)\r
581.	big [bɪɡ] — большой (биг)\r
582.	small [smɔːl] — маленький (смол)\r
583.	long [lɒŋ] — длинный (лонъ)\r
584.	short [ʃɔːt] — короткий (шорт)\r
585.	heavy [ˈhevi] — тяжелый (хэви)\r
Блок 7: Предлоги места и времени (Prepositions)\r
586.	in [ɪn] — в (ин)\r
587.	on [ɒn] — на (он)\r
588.	at [æt] — у / в (эт)\r
589.	under [ˈʌndə(r)] — под (андэ)\r
590.	over [ˈəʊvə(r)] — над / через (оувэ)\r
591.	behind [bɪˈhaɪnd] — за / сзади (бихаинд)\r
592.	in front of [ɪn frʌnt ɒv] — перед (ин франт оф)\r
593.	next to [nekst tuː] — рядом с (некст ту)\r
594.	between [bɪˈtwiːn] — между (битвин)\r
595.	near [nɪə(r)] — около / вблизи (ниэр)\r
596.	before [bɪˈfɔː(r)] — до / перед (бифор)\r
597.	after [ˈɑːftə(r)] — после (афтэ)\r
598.	during [ˈdjʊərɪŋ] — во время (дьюринъ)\r
599.	for [fɔː(r)] — для / в течение (фор)\r
600.	with [wɪð] — с (уиз)\r
Часть 7: Слова 601–700 уровня A1\r
Блок 1: Связующие слова, наречия и местоимения (Connectors & Pronouns)\r
601.	who [huː] — кто / который (ху)\r
602.	whose [huːz] — чей (хуз)\r
603.	which [wɪtʃ] — который / какой из (уитч)\r
604.	somebody (someone) [ˈsʌmbədi] — кто-то / кто-нибудь (самбади)\r
605.	something [ˈsʌmθɪŋ] — что-то / что-нибудь (самфинъ)\r
606.	nobody (no one) [ˈnəʊbədi] — никто (ноубади)\r
607.	nothing [ˈnʌθɪŋ] — ничто / ничего (нафинъ)\r
608.	everybody (everyone) [ˈevribɒdi] — все / каждый (эврибади)\r
609.	everything [ˈevriθɪŋ] — всё (эврифинъ)\r
610.	anybody (anyone) [ˈenibɒdi] — кто-нибудь / любой (энибади)\r
611.	anything [ˈeniθɪŋ] — что-нибудь / всё что угодно (энифинъ)\r
612.	somewhere [ˈsʌmweə(r)] — где-то / куда-то (самуээ)\r
613.	nowhere [ˈnəʊweə(r)] — нигде / никуда (ноууээ)\r
614.	everywhere [ˈevriweə(r)] — везде / повсюду (эвриуээ)\r
615.	anywhere [ˈeniweə(r)] — где-нибудь / куда-нибудь (эниуээ)\r
Блок 2: Город, заведения и ориентирование (Town, Places & Direction)\r
616.	cinema [ˈsɪnəmɑː] — кинотеатр (синэма)\r
617.	theatre [ˈθɪətə(r)] — театр (фиэтэ)\r
618.	museum [mjuːˈziːəm] — музей (мьюзиэм)\r
619.	library [ˈlaɪbrəri] — библиотека (лайбрари)\r
620.	pharmacy (chemist's) [ˈfɑːməsi] — аптека (фармаси)\r
621.	post office [ˈpəʊst ɒfɪs] — почтовое отделение (поуст оффис)\r
622.	police station [pəˈliːs steɪʃn] — полицейский участок (полис стейшн)\r
623.	bridge [brɪdʒ] — мост (бридж)\r
624.	square [skweə(r)] — площадь / квадрат (скуээ)\r
625.	corner [ˈkɔːnə(r)] — угол (корнэ)\r
626.	crossroad [ˈkrɒsrəʊd] — перекресток (кросроуд)\r
627.	bus stop [bʌs stɒp] — автобусная остановка (бас стоп)\r
628.	traffic light [ˈtræfɪk laɪt] — светофор (трэфик лайт)\r
629.	building [ˈbɪldɪŋ] — здание / строение (билдинъ)\r
630.	center [ˈsentə(r)] — центр (сэнтэр)\r
Блок 3: Здоровье, тело и гигиена (Body & Health)\r
631.	finger [ˈfɪŋɡə(r)] — палец на руке (фингэ)\r
632.	toe [təʊ] — палец на ноге (тоу)\r
633.	arm [ɑːm] — рука (от плеча до кисти) (арм)\r
634.	back [bæk] — спина (бэк)\r
635.	neck [nek] — шея (нек)\r
636.	shoulder [ˈʃəʊldə(r)] — плечо (шоулдэ)\r
637.	stomach [ˈstʌmək] — желудок / живот (стамак)\r
638.	tooth (teeth) [tuːθ / tiːθ] — зуб (зубы) (туф / тиф)\r
639.	foot (feet) [fʊt / fiːt] — ступня (ступни) (фут / фит)\r
640.	heart [hɑːt] — сердце (харт)\r
641.	blood [blʌd] — кровь (блад)\r
642.	ill [ɪl] — больной (ил)\r
643.	healthy [ˈhelθi] — здоровый (хэлфи)\r
644.	fever (temperature) [ˈfiːvə(r)] — жар / температура (фивэ)\r
645.	pain [peɪn] — боль (пейн)\r
Блок 4: Профессии и занятость (Jobs & Occupations)\r
646.	worker [ˈwɜːkə(r)] — рабочий (уоркэ)\r
647.	driver [ˈdraɪvə(r)] — водитель (драйвэ)\r
648.	doctor [ˈdɒktə(r)] — врач (доктэ)\r
649.	nurse [nɜːs] — медсестра / медбрат (нёрс)\r
650.	teacher [ˈtiːtʃə(r)] — учитель (титчэ)\r
651.	student [ˈstjuːdnt] — студент / ученик (стьюднт)\r
652.	seller (shop assistant) [ˈselə(r)] — продавец (селэ)\r
653.	waiter [ˈweɪtə(r)] — официант (уэйтэ)\r
654.	chef (cook) [ʃef / kʊk] — повар (шеф / кук)\r
655.	police officer [pəˈliːs ɒfɪsə(r)] — полицейский (полис оффисэ)\r
656.	artist [ˈɑːtɪst] — художник / артист (артист)\r
657.	singer [ˈsɪŋə(r)] — певец / певица (синъэ)\r
658.	actor [ˈæktə(r)] — актер (актэ)\r
659.	businessmen [ˈbɪznəsmən] — бизнесмен (бизнесмэн)\r
660.	manager [ˈmænɪdʒə(r)] — менеджер / управляющий (мэниджэ)\r
Блок 5: Еда, напитки и десерты (Food & Desserts)\r
661.	tea [tiː] — чай (ти)\r
662.	coffee [ˈkɒfi] — кофе (кофи)\r
663.	water [ˈwɔːtə(r)] — вода (уотэ)\r
664.	milk [mɪlk] — молоко (милк)\r
665.	juice [dʒuːs] — сок (джюс)\r
666.	beer [bɪə(r)] — пиво (биэр)\r
667.	wine [waɪn] — вино (уайн)\r
668.	soup [suːp] — суп (суп)\r
669.	salad [ˈsæləd] — салат (сэлэд)\r
670.	pizza [ˈpiːtsə] — пицца (пицца)\r
671.	burger [ˈbɜːɡə(r)] — бургер (бёргэ)\r
672.	cake [keɪk] — торт / пирожное (кейк)\r
673.	chocolate [ˈtʃɒklət] — шоколад (чоклэт)\r
674.	ice cream [ˌaɪs ˈkriːm] — мороженое (айс крим)\r
675.	cookie (biscuit) [ˈkʊki] — печенье (куки)\r
Блок 6: Описание предметов и материалов (Materials & Properties)\r
676.	wood [wʊd] — дерево (материал) (вуд)\r
677.	metal [ˈmetl] — металл (метал)\r
678.	plastic [ˈplæstɪk] — пластик (пластик)\r
679.	glass [ɡlɑːs] — стекло (глас)\r
680.	paper [ˈpeɪpə(r)] — бумага (пейпэ)\r
681.	stone [stəʊn] — камень (стоун)\r
682.	hard [hɑːd] — твердый / тяжелый (хард)\r
683.	soft [sɒft] — мягкий (софт)\r
684.	heavy [ˈhevi] — тяжелый (хэви)\r
685.	light [laɪt] — легкий (лайт)\r
686.	fast [fɑːst] — быстрый (фаст)\r
687.	slow [sləʊ] — медленный (слоу)\r
688.	full [fʊl] — полный (фул)\r
689.	empty [ˈempti] — пустой (эмпти)\r
690.	warm [wɔːm] — теплый (уорм)\r
Блок 7: Повседневные действия и фразы (Everyday Verbs)\r
691.	open [ˈəʊpən] — открывать (оупэн)\r
692.	close [kləʊz] — закрывать (клоуз)\r
693.	push [pʊʃ] — толкать (пуш)\r
694.	pull [pʊl] — тянуть (пул)\r
695.	cut [kʌt] — резать (кат)\r
696.	break [breɪk] — ломать (брейк)\r
697.	fix (repair) [fɪks] — чинить / ремонтировать (фикс)\r
698.	build [bɪld] — строить (билд)\r
699.	draw [drɔː] — рисовать (дро)\r
700.	paint [peɪnt] — красить / писать красками (пейнт)\r
Часть 8: Слова 701–800 уровня A1\r
Блок 1: Природа, погода и земля (Nature & Earth)\r
701.	earth [ɜːθ] — земля / почва (ёф)\r
702.	sand [sænd] — песок (сэнд)\r
703.	island [ˈaɪlənd] — остров (айлэнд)\r
704.	ocean [ˈəʊʃn] — океан (оушн)\r
705.	lake [leɪk] — озеро (лейк)\r
706.	hill [hɪl] — холм (хил)\r
707.	forest [ˈfɒrɪst] — лес (форист)\r
708.	plant [plɑːnt] — растение (плант)\r
709.	leaf [liːf] — лист (растения) (лиф)\r
710.	sky [skaɪ] — небо (скай)\r
711.	cloud [klaʊd] — облако (клауд)\r
712.	fog [fɒɡ] — туман (фог)\r
713.	ice [aɪs] — лёд (айс)\r
714.	storm [stɔːm] — буря / шторм (сторм)\r
715.	windy [ˈwɪndi] — ветрено (уинди)\r
Блок 2: Путешествия и транспорт (Travel & Transport)\r
716.	passport [ˈpɑːspɔːt] — паспорт (паспорт)\r
717.	luggage (baggage) [ˈlʌɡɪdʒ] — багаж (лагидж)\r
718.	suitcase [ˈsuːtkeɪs] — чемодан (суткейс)\r
719.	passenger [ˈpæsɪndʒə(r)] — пассажир (пэсинджэ)\r
720.	driver [ˈdraɪvə(r)] — водитель (драйвэ)\r
721.	flight [flaɪt] — полёт / рейс (флайт)\r
722.	plane [pleɪn] — самолёт (плейн)\r
723.	train [treɪn] — поезд (трейн)\r
724.	bus [bʌs] — автобус (бас)\r
725.	ship [ʃɪp] — корабль (шип)\r
726.	boat [bəʊt] — лодка (боут)\r
727.	tram [træm] — трамвай (трэм)\r
728.	metro (subway) [ˈmetrəʊ] — метро (метро)\r
729.	station [ˈsteɪʃn] — станция / вокзал (стейшн)\r
730.	stop [stɒp] — остановка (стоп)\r
Блок 3: Общение, эмоции и мнение (Communication & Opinion)\r
731.	speak [spiːk] — говорить (спик)\r
732.	talk [tɔːk] — разговаривать (ток)\r
733.	call [kɔːl] — звонить / звать (кол)\r
734.	shout [ʃaʊt] — кричать (шаут)\r
735.	whisper [ˈwɪspə(r)] — шептать (уиспэ)\r
736.	agree [əˈɡriː] — соглашаться (эгри)\r
737.	disagree [ˌdɪsəˈɡriː] — не соглашаться (дисэгри)\r
738.	promise [ˈprɒmɪs] — обещать (промис)\r
739.	idea [aɪˈdɪə] — идея (айдиа)\r
740.	opinion [əˈpɪnjən] — мнение (эпиньэн)\r
741.	thought [θɔːt] — мысль (фот)\r
742.	mind [maɪnd] — разум / ум (майнд)\r
743.	problem [ˈprɒbləm] — проблема (проблэм)\r
744.	secret [ˈsiːkrət] — секрет (сикрат)\r
745.	truth [truːθ] — правда (труф)\r
Блок 4: Время, даты и периодичность (Time & Frequency)\r
746.	second [ˈsekənd] — секунда (сэкэнд)\r
747.	minute [ˈmɪnɪt] — минута (минит)\r
748.	hour [ˈaʊə(r)] — час (ауэр)\r
749.	day [deɪ] — день (дей)\r
750.	week [wiːk] — неделя (уик)\r
751.	month [mʌnθ] — месяц (манф)\r
752.	year [jɪə(r)] — год (йиэр)\r
753.	century [ˈsentʃəri] — век / столетие (сэнтчури)\r
754.	moment [ˈməʊmənt] — момент (моумэнт)\r
755.	past [pɑːst] — прошлое (паст)\r
756.	future [ˈfjuːtʃə(r)] — будущее (фьючэ)\r
757.	now [naʊ] — сейчас (нау)\r
758.	soon [suːn] — скоро (сун)\r
759.	later [ˈleɪtə(r)] — позже (лейтэ)\r
760.	always [ˈɔːlweɪz] — всегда (олвэйз)\r
Блок 5: Еда, напитки и кулинария (Food & Cooking)\r
761.	fruit [fruːt] — фрукт / фрукты (фрут)\r
762.	lemon [ˈlemən] — лимон (лемэн)\r
763.	banana [bəˈnɑːnə] — банан (банана)\r
764.	orange [ˈɒrɪndʒ] — апельсин (ориндж)\r
765.	apple [ˈæpl] — яблоко (эпл)\r
766.	berry [ˈberi] — ягода (бери)\r
767.	strawberry [ˈstrɔːbəri] — клубника (стробэри)\r
768.	vegetable [ˈvedʒtəbl] — овощ (веджтэбл)\r
769.	potato [pəˈteɪtəʊ] — картошка (потейтоу)\r
770.	carrot [ˈkærət] — морковь (кэрэт)\r
771.	onion [ˈʌnjən] — лук (анйэн)\r
772.	cucumber [ˈkjuːkʌmbə(r)] — огурец (кьюкамбэ)\r
773.	salt [sɔːlt] — соль (солт)\r
774.	pepper [ˈpepə(r)] — перец (пепэ)\r
775.	oil [ɔɪl] — масло (растительное) (ойл)\r
Блок 6: Описание предметов и состояния (Adjectives)\r
776.	warm [wɔːm] — тёплый (уорм)\r
777.	cool [kuːl] — прохладный / крутой (кул)\r
778.	dry [draɪ] — сухой (драй)\r
779.	wet [wet] — мокрый (уэт)\r
780.	clean [kliːn] — чистый (клин)\r
781.	dirty [ˈdɜːti] — грязный (дёрти)\r
782.	sweet [swiːt] — сладкий (суит)\r
783.	salty [ˈsɔːlti] — солёный (солти)\r
784.	sour [ˈsaʊə(r)] — кислый (сауэр)\r
785.	bitter [ˈbɪtə(r)] — горький (битэ)\r
786.	delicious [dɪˈlɪʃəs] — вкусный (дилишэс)\r
787.	fresh [freʃ] — свежий (фреш)\r
788.	soft [sɒft] — мягкий (софт)\r
789.	hard [hɑːd] — твёрдый / сложный (хард)\r
790.	smooth [smuːð] — гладкий (смуз)\r
Блок 7: Повседневные действия (Everyday Verbs)\r
791.	buy [baɪ] — покупать (бай)\r
792.	sell [sel] — продавать (сел)\r
793.	pay [peɪ] — платить (пей)\r
794.	spend [spend] — тратить (деньги, время) (спенд)\r
795.	save [seɪv] — сохранять / копить (сейв)\r
796.	choose [tʃuːz] — выбирать (чуз)\r
797.	find [faɪnd] — находить (файнд)\r
798.	lose [luːz] — терять (луз)\r
799.	keep [kiːp] — держать / хранить (кип)\r
800.	change [tʃeɪndʒ] — менять (чейндж)\r
Часть 9: Слова 801–900 уровня A1\r
Блок 1: Дом, интерьер и бытовая техника (Home & Appliances)\r
801.	fridge (refrigerator) [frɪdʒ] — холодильник (фридж)\r
802.	cooker (stove) [ˈkʊkə(r)] — кухонная плита (кукэ)\r
803.	oven [ˈʌvn] — духовка (авн)\r
804.	washing machine [ˈwɒʃɪŋ məˈʃiːn] — стиральная машина (уошинъ машин)\r
805.	kettle [ˈketl] — чайник (кетл)\r
806.	sink [sɪŋk] — раковина (синк)\r
807.	shower [ˈʃaʊə(r)] — душ (шауэр)\r
808.	bath [bɑːθ] — ванна (баф)\r
809.	towel [ˈtaʊəl] — полотенце (тауэл)\r
810.	blanket [ˈblæŋkɪt] — одеяло (блэнкит)\r
811.	pillow [ˈpɪləʊ] — подушка (пилоу)\r
812.	carpet [ˈkɑːpɪt] — ковер (карпит)\r
813.	curtain [ˈkɜːtn] — штора / занавеска (кёртн)\r
814.	armchair [ˈɑːmtʃeə(r)] — кресло (армчеэ)\r
815.	cupboard [ˈkʌbəd] — шкаф для посуды / буфет (кабэд)\r
Блок 2: Работа, учеба и карьера (Work & Study)\r
816.	job [dʒɒb] — работа / профессия (джоб)\r
817.	career [kəˈrɪə(r)] — карьера (кэриэр)\r
818.	office [ˈɒfɪs] — офис / кабинет (офис)\r
819.	company [ˈkʌmpəni] — компания / фирма (кампани)\r
820.	boss [bɒs] — босс / начальник (бос)\r
821.	colleague [ˈkɒliːɡ] — коллега (колиг)\r
822.	salary [ˈsæləri] — зарплата (сэлэри)\r
823.	meeting [ˈmiːtɪŋ] — встреча / собрание (митинъ)\r
824.	task [tɑːsk] — задача / задание (таск)\r
825.	project [ˈprɒdʒekt] — проект (проджект)\r
826.	course [kɔːs] — курс / обучение (корс)\r
827.	exam [ɪɡˈzæm] — экзамен (игзэм)\r
828.	mark (grade) [mɑːk] — оценка / отметка (марк)\r
829.	knowledge [ˈnɒlɪdʒ] — знания (нолидж)\r
830.	skill [skɪl] — навык / умение (скил)\r
Блок 3: Здоровье и самочувствие (Health & Well-being)\r
831.	health [helθ] — здоровье (хэлф)\r
832.	disease (illness) [dɪˈziːz] — болезнь (дизиз)\r
833.	cold [kəʊld] — простуда (коулд)\r
834.	flu [fluː] — грипп (флу)\r
835.	cough [kɒf] — кашель / кашлять (коф)\r
836.	headache [ˈhedeɪk] — головная боль (хедейк)\r
837.	pill [pɪl] — таблетка (пил)\r
838.	chemist (pharmacy) [ˈkemɪst] — аптека (кемист)\r
839.	rest [rest] — отдых / отдыхать (рест)\r
840.	sleep [sliːp] — сон / спать (слип)\r
Блок 4: Чувства, эмоции и характеристики (Feelings & Personality)\r
841.	glad [ɡlæd] — довольный / рад (глэд)\r
842.	bored [bɔːd] — скучающий (борд)\r
843.	boring [ˈbɔːrɪŋ] — скучный (боринъ)\r
844.	excited [ɪkˈsaɪtɪd] — взволнованный / в восторге (эксайтид)\r
845.	interesting [ˈɪntrestɪŋ] — интересный (интрестинъ)\r
846.	polite [pəˈlaɪt] — вежливый (палайт)\r
847.	rude [ruːd] — грубый (руд)\r
848.	honest [ˈɒnɪst] — честный (онист)\r
849.	lazy [ˈleɪzi] — ленивый (лейзи)\r
850.	brave [breɪv] — храбрый / смелый (брейв)\r
Блок 5: Ежедневные действия и процессы (Daily Actions)\r
851.	carry [ˈkæri] — нести / переносить (кэри)\r
852.	drop [drɒp] — ронять / капать (дроп)\r
853.	fall [fɔːl] — падать (фол)\r
854.	throw [θrəʊ] — бросать / кидать (фроу)\r
855.	catch [kætʃ] — ловить / успевать (кэтч)\r
856.	hold [həʊld] — держать (хоулд)\r
857.	push [pʊʃ] — толкать (пуш)\r
858.	pull [pʊl] — тянуть (пул)\r
859.	fill [fɪl] — наполнять (фил)\r
860.	cover [ˈkʌvə(r)] — накрывать / покрывать (кавэ)\r
861.	mix [mɪks] — смешивать (микс)\r
862.	add [æd] — добавлять (эд)\r
863.	cut [kʌt] — резать (кат)\r
864.	share [ʃeə(r)] — делиться (шеэ)\r
865.	join [dʒɔɪn] — присоединяться (джэйн)\r
Блок 6: Описание и свойства предметов (Properties & Quality)\r
866.	same [seɪm] — такой же / одинаковый (сейм)\r
867.	different [ˈdɪfrənt] — разный / другой (дифрэнт)\r
868.	special [ˈspeʃl] — особенный / специальный (спешл)\r
869.	simple [ˈsɪmpl] — простой (симпл)\r
870.	difficult (hard) [ˈdɪfɪkəlt] — сложный / трудный (дификалт)\r
871.	easy [ˈiːzi] — легкий / простой (изи)\r
872.	possible [ˈpɒsəbl] — возможный (посабл)\r
873.	impossible [ɪmˈpɒsəbl] — невозможный (импосабл)\r
874.	real [rɪəl] — настоящий / реальный (риэл)\r
875.	fake [feɪk] — фальшивый / поддельный (фейк)\r
876.	safe [seɪf] — безопасный (сейф)\r
877.	dangerous [ˈdeɪndʒərəs] — опасный (дейнджэрас)\r
878.	important [ɪmˈpɔːtnt] — важный (импортнт)\r
879.	main [meɪn] — главный / основной (мейн)\r
880.	famous [ˈfeɪməs] — знаменитый (феймас)\r
Блок 7: Полезные вводные и связующие слова (Useful Connectors)\r
881.	if [ɪf] — если (иф)\r
882.	or [ɔː(r)] — или (ор)\r
883.	so [səʊ] — так что / поэтому (соу)\r
884.	because [bɪˈkɒz] — потому что (бикоз)\r
885.	that's why [ðæts waɪ] — вот почему (зэтс уай)\r
886.	however [haʊˈevə(r)] — однако (хауэвэ)\r
887.	for example [fər ɪɡˈzɑːmpl] — например (фор игзампл)\r
888.	such as [sʌtʃ æz] — такой как (сач эз)\r
889.	of course [əv kɔːs] — конечно (ов корс)\r
890.	maybe (perhaps) [ˈmeɪbi] — может быть (мейби)\r
891.	actually [ˈæktʃuəli] — на самом деле / фактически (эктчуэли)\r
892.	finally [ˈfaɪnəli] — в конце концов / наконец (файнэли)\r
893.	suddenly [ˈsʌdənli] — внезапно / вдруг (садэнли)\r
894.	especially [ɪˈspeʃəli] — особенно (эспешэли)\r
895.	instead of [ɪnˈsted əv] — вместо (инстед оф)\r
896.	together [təˈɡeðə(r)] — вместе (тугезэ)\r
897.	alone [əˈləʊn] — один / в одиночестве (элоун)\r
898.	almost [ˈɔːlməʊst] — почти (олмоуст)\r
899.	really [ˈrɪəli] — действительно / правда (риэли)\r
900.	well [wel] — ну... / что ж... (вел)\r
Часть 10: Слова 901–1000 уровня A1 (Финал!)\r
Блок 1: Покупки, деньги и услуги (Shopping & Money)\r
901.	price [praɪs] — цена (прайс)\r
902.	cost [kɒst] — стоимость / стоить (кост)\r
903.	cash [kæʃ] — наличные деньги (кэш)\r
904.	card [kɑːd] — карта (банковская) (кард)\r
905.	discount [ˈdɪskaʊnt] — скидка (дискаунт)\r
906.	sale [seɪl] — распродажа (сейл)\r
907.	receipt [rɪˈsiːt] — чек / квитанция (рисит)\r
908.	change [tʃeɪndʒ] — сдача / мелкая монета (чейндж)\r
909.	customer [ˈkʌstəmə(r)] — покупатель / клиент (кастэмэ)\r
910.	queue (line) [kjuː] — очередь (кью)\r
911.	size [saɪz] — размер (сайз)\r
912.	try on [traɪ ɒn] — примерять (трай он)\r
913.	pay by card [peɪ baɪ kɑːd] — платить картой (пей бай кард)\r
914.	pay in cash [peɪ ɪn kæʃ] — платить наличными (пей ин кэш)\r
915.	cheap [tʃiːp] — дешевый (чип)\r
Блок 2: Путешествия, отель и навигация (Travel & Hotel)\r
916.	hotel [həʊˈtel] — отель / гостиница (хоутел)\r
917.	room [ruːm] — номер / комната (рум)\r
918.	key [kiː] — ключ (ки)\r
919.	reception [rɪˈsepʃn] — стойка регистрации (рисепшн)\r
920.	booking (reservation) [ˈbʊkɪŋ] — бронирование (букинъ)\r
921.	map [mæp] — карта (местности) (мэп)\r
922.	tourist [ˈtʊərɪst] — турист (турист)\r
923.	trip (journey) [trɪp] — поездка / путешествие (трип)\r
924.	guide [ɡaɪd] — гид / экскурсовод (гайд)\r
925.	sight (attraction) [saɪt] — достопримечательность (сайт)\r
926.	ticket [ˈtɪkɪt] — билет (тикит)\r
927.	information [ˌɪnfəˈmeɪʃn] — информация (инфэмейшн)\r
928.	way [weɪ] — путь / дорога (уэй)\r
929.	address [əˈdres] — адрес (эдрес)\r
930.	lost [lɒst] — потерявшийся (лост)\r
Блок 3: Абстрактные понятия и социум (Society & Abstract Concepts)\r
931.	life [laɪf] — жизнь (лайф)\r
932.	death [deθ] — смерть (деф)\r
933.	world [wɜːld] — мир (уорлд)\r
934.	peace [piːs] — мир (отсутствие войны) / покой (пис)\r
935.	war [wɔː(r)] — война (уор)\r
936.	country [ˈkʌntri] — страна (кантри)\r
937.	city [ˈsɪti] — город (крупный) (сити)\r
938.	town [taʊn] — город (небольшой) (таун)\r
939.	village [ˈvɪlɪdʒ] — деревня / село (вилидж)\r
940.	people [ˈpiːpl] — люди / народ (пипл)\r
941.	person [ˈpɜːsn] — человек / личность (пёрсн)\r
942.	group [ɡruːp] — группа (груп)\r
943.	team [tiːm] — команда (тим)\r
944.	rule [ruːl] — правило (рул)\r
945.	law [lɔː] — закон (ло)\r
Блок 4: Мыслительные процессы и восприятие (Mental Verbs)\r
946.	think [θɪŋk] — думать / считать (финк)\r
947.	know [nəʊ] — знать (ноу)\r
948.	understand [ˌʌndəˈstænd] — понимать (андэстэнд)\r
949.	remember [rɪˈmembə(r)] — помнить / запоминать (римембэ)\r
950.	forget [fəˈɡet] — забывать (фэгет)\r
951.	believe [bɪˈliːv] — верить (билив)\r
952.	hope [həʊp] — надеяться (хоуп)\r
953.	wish [wɪʃ] — желать (уиш)\r
954.	mean [miːn] — иметь в виду / означать (мин)\r
955.	guess [ɡes] — угадывать / предполагать (гес)\r
956.	wonder [ˈwʌndə(r)] — интересоваться / удивляться (уандэ)\r
957.	learn [lɜːn] — учиться / узнавать (лёрн)\r
958.	teach [tiːtʃ] — обучать / преподавать (титч)\r
959.	explain [ɪkˈspleɪn] — объяснять (эксплейн)\r
960.	describe [dɪˈskraɪb] — описывать (дискайб)\r
Блок 5: События, время и изменения (Events & Time)\r
961.	event [ɪˈvent] — событие (ивент)\r
962.	party [ˈpɑːti] — вечеринка / праздник (парти)\r
963.	holiday [ˈhɒlədeɪ] — праздник / отпуск (холидей)\r
964.	birthday [ˈbɜːθdeɪ] — день рождения (бёрфдей)\r
965.	wedding [ˈwedɪŋ] — свадьба (вединъ)\r
966.	meeting [ˈmiːtɪŋ] — встреча (митинъ)\r
967.	beginning [bɪˈɡɪnɪŋ] — начало (бигининъ)\r
968.	end [end] — конец / завершение (енд)\r
969.	history [ˈhɪstri] — история (хистри)\r
970.	story [ˈstɔːri] — история / рассказ (стори)\r
971.	news [njuːz] — новости (ньюз)\r
972.	fact [fækt] — факт (фэкт)\r
973.	chance [tʃɑːns] — шанс / возможность (чанс)\r
974.	change [tʃeɪndʒ] — изменение / перемены (чейндж)\r
975.	future [ˈfjuːtʃə(r)] — будущее (фьючэ)\r
Блок 6: Обобщающие прилагательные и характеристики (General Adjectives)\r
976.	good [ɡʊd] — хороший (гуд)\r
977.	bad [bæd] — плохой (бэд)\r
978.	fine [faɪn] — прекрасный / в порядке (файн)\r
979.	great [ɡreɪt] — отличный / великий (грейт)\r
980.	wonderful [ˈwʌndəfl] — замечательный (уандэфул)\r
981.	terrible [ˈterəbl] — ужасный (терэбл)\r
982.	perfect [ˈpɜːfɪkt] — идеальный (пёрфикт)\r
983.	wrong [rɒŋ] — неправильный / неверный (ронъ)\r
984.	right [raɪt] — правильный / верный (райт)\r
985.	true [truː] — правдивый / верный (тру)\r
986.	false [fɔːls] — ложный (фолс)\r
987.	busy [ˈbɪzi] — занятой (бизи)\r
988.	free [friː] — свободный / бесплатный (фри)\r
989.	ready [ˈredi] — готовый (реди)\r
990.	sure [ʃʊə(r)] — уверенный (шуэ)\r
Блок 7: Финальные глаголы и выражения (Final Core Verbs)\r
991.	start (begin) [stɑːt] — начинать (старт)\r
992.	finish (stop) [ˈfɪnɪʃ] — заканчивать (финиш)\r
993.	continue [kənˈtɪnjuː] — продолжать (кантинью)\r
994.	try [traɪ] — пробовать / пытаться (трай)\r
995.	use [juːz] — использовать (ьюз)\r
996.	help [help] — помогать (хелп)\r
997.	wait [weɪt] — ждать (уэйт)\r
998.	hope [həʊp] — надеяться (хоуп)\r
999.	welcome [ˈwelkəm] — приветствовать / добро пожаловать (велкам)\r
1000.	win [wɪn] — побеждать / выигрывать (уин)\r
Часть 1: Слова 1001–1100 уровня A2 (Elementary / Pre-Intermediate)\r
Блок 1: Связь, технологии и цифровой мир (Tech & Communication)\r
1001.	screen [skriːn] — экран / монитор (скрин)\r
1002.	keyboard [ˈkiːbɔːd] — клавиатура (киборд)\r
1003.	mouse [maʊs] — компьютерная мышь (маус)\r
1004.	laptop [ˈlæptɒp] — ноутбук (лэптоп)\r
1005.	charger [ˈtʃɑːdʒə(r)] — зарядное устройство (чарджэ)\r
1006.	battery [ˈbætəri] — батарея / аккумулятор (бэтэри)\r
1007.	cable [ˈkeɪbl] — кабель / шнур (кейбл)\r
1008.	app (application) [æp] — приложение (эп)\r
1009.	website [ˈwebsaɪt] — веб-сайт (вебсайт)\r
1010.	link [lɪŋk] — ссылка (линк)\r
1011.	password [ˈpɑːswɜːd] — пароль (пасвоорд)\r
1012.	account [əˈkaʊnt] — аккаунт / учетная запись (экаунт)\r
1013.	connection [kəˈnekʃn] — связь / соединение (конэкшн)\r
1014.	file [faɪl] — файл / документ (файл)\r
1015.	folder [ˈfəʊldə(r)] — папка (фоулдэ)\r
Блок 2: Работа с технологиями (Digital Actions)\r
1016.	download [ˌdaʊnˈləʊd] — скачивать (даунлоуд)\r
1017.	upload [ˌʌpˈləʊd] — загружать (в сеть) (аплоуд)\r
1018.	save [seɪv] — сохранять (сейв)\r
1019.	delete [dɪˈliːt] — удалять (дилийт)\r
1020.	press [pres] — нажимать (прес)\r
1021.	click [klɪk] — кликать / щелкать (клик)\r
1022.	type [taɪp] — печатать на клавиатуре (тайп)\r
1023.	search [sɜːtʃ] — искать (сёрч)\r
1024.	share [ʃeə(r)] — делиться / отправлять (шеэ)\r
1025.	attach [əˈtætʃ] — прикреплять (файл) (этэтч)\r
1026.	install [ɪnˈstɔːl] — устанавливать (инстол)\r
1027.	update [ˌʌpˈdeɪt] — обновлять (апдейт)\r
1028.	connect [kəˈnekt] — подключать(ся) (конэкт)\r
1029.	print [prɪnt] — печатать на принтере (принт)\r
1030.	scan [skæn] — сканировать (скэн)\r
Блок 3: Чувства, черты характера и поведение (Personality & Emotion)\r
1031.	kind [kaɪnd] — добрый / отзывчивый (кайнд)\r
1032.	friendly [ˈfrendli] — дружелюбный (френдли)\r
1033.	quiet [ˈkwaɪət] — тихий / скромный (куайэт)\r
1034.	lazy [ˈleɪzi] — ленивый (лейзи)\r
1035.	creative [kriˈeɪtɪv] — творческий / креативный (криэйтив)\r
1036.	smart (clever) [smɑːt] — умный / сообразительный (смарт)\r
1037.	active [ˈæktɪv] — активный (актив)\r
1038.	brave [breɪv] — смелый / храбрый (брейв)\r
1039.	calm [kɑːm] — спокойный (кам)\r
1040.	curious [ˈkjʊəriəs] — любопытный (кьюриас)\r
1041.	patient [ˈpeɪʃnt] — терпеливый (пейшнт)\r
1042.	careful [ˈkeəfl] — внимательный / осторожный (кеэфул)\r
1043.	careless [ˈkeələs] — невнимательный / беспечный (кеэлас)\r
1044.	serious [ˈsɪəriəs] — серьезный (сириас)\r
1045.	funny [ˈfʌni] — смешной / забавный (фани)\r
Блок 4: Еда, приготовление и посуда (Food, Cooking & Utensils)\r
1046.	plate [pleɪt] — тарелка (плейт)\r
1047.	bowl [bəʊl] — миска / глубокая пиала (боул)\r
1048.	glass [ɡlɑːs] — стакан (глас)\r
1049.	cup [kʌp] — чашка (кап)\r
1050.	pan (frying pan) [pæn] — сковорода (пэн)\r
1051.	pot [pɒt] — кастрюля (пот)\r
1052.	knife [naɪf] — нож (найф)\r
1053.	spoon [spuːn] — ложка (спун)\r
1054.	fork [fɔːk] — вилка (форк)\r
1055.	napkin [ˈnæpkɪn] — салфетка (нэпкин)\r
1056.	bake [beɪk] — печь / выпекать (бейк)\r
1057.	fry [fraɪ] — жарить (фрай)\r
1058.	boil [bɔɪl] — варить / кипятить (бойл)\r
1059.	slice [slaɪs] — нарезать ломтиками (слайс)\r
1060.	taste [teɪst] — пробовать на вкус / вкус (тейст)\r
Блок 5: Погода, окружающая среда и климат (Environment & Weather)\r
1061.	sunshine [ˈsʌnʃaɪn] — солнечный свет (саншайн)\r
1062.	cloudy [ˈklaʊdi] — облачно (клауди)\r
1063.	rainy [ˈreɪni] — дождливо (рейни)\r
1064.	stormy [ˈstɔːmi] — грозовой / штормовой (сторми)\r
1065.	foggy [ˈfɒɡi] — туманно (фоги)\r
1066.	snowy [ˈsnəʊi] — снежно (сноуи)\r
1067.	dry [draɪ] — сухой (драй)\r
1068.	wet [wet] — мокрый / влажный (уэт)\r
1069.	temperature [ˈtemprətʃə(r)] — температура (темпрэчэ)\r
1070.	degree [dɪˈɡriː] — градус (дигри)\r
1071.	nature [ˈneɪtʃə(r)] — природа (нейчэ)\r
1072.	environment [ɪnˈvaɪrənmənt] — окружающая среда (инвайронмэнт)\r
1073.	plant [plɑːnt] — растение / сажать (плант)\r
1074.	leaf (leaves) [liːf] — лист (листья) (лиф / ливз)\r
1075.	flower [ˈflaʊə(r)] — цветок (флауэр)\r
Блок 6: Путешествия, транспорт и отели (Travel & Accommodations)\r
1076.	journey [ˈdʒɜːni] — длительное путешествие (джёрни)\r
1077.	passenger [ˈpæsɪndʒə(r)] — пассажир (пэсинджэ)\r
1078.	platform [ˈplætfɔːm] — платформа / перрон (плэтформ)\r
1079.	delay [dɪˈleɪ] — задержка / откладывать (дилей)\r
1080.	departure [dɪˈpɑːtʃə(r)] — отправление / вылет (дипарчэ)\r
1081.	arrival [əˈraɪvl] — прибытие (эрайвл)\r
1082.	single ticket [ˈsɪŋɡl ˈtɪkɪt] — билет в один конец (сингл тикит)\r
1083.	return ticket [rɪˈtɜːn ˈtɪkɪt] — билет туда и обратно (ритёрн тикит)\r
1084.	guidebook [ˈɡaɪdbʊk] — путеводитель (гайдбук)\r
1085.	sightseeing [ˈsaɪtsiːɪŋ] — осмотр достопримечательностей (сайтсиинъ)\r
1086.	pack [pæk] — собирать вещи (пэк)\r
1087.	unpack [ˌʌnˈpæk] — распаковывать (анпэк)\r
1088.	rent [rent] — арендовать / снимать (рент)\r
1089.	book [bʊk] — бронировать (бук)\r
1090.	cancel [ˈkænsl] — отменять (кэнсл)\r
Блок 7: Полезные вводные конструкции и фразовые глаголы (Connectors & Phrasal Verbs)\r
1091.	look for [lʊk fɔː(r)] — искать (лук фор)\r
1092.	look after [lʊk ˈɑːftə(r)] — присматривать / ухаживать (лук афтэ)\r
1093.	turn on [tɜːn ɒn] — включать (тёрн он)\r
1094.	turn off [tɜːn ɒf] — выключать (тёрн оф)\r
1095.	give up [ɡɪv ʌp] — сдаваться / бросать (гив ап)\r
1096.	find out [faɪnd aʊt] — узнавать / выяснять (файнд аут)\r
1097.	grow up [ɡrəʊ ʌp] — расти / взрослеть (гроу ап)\r
1098.	come back [kʌm bæk] — возвращаться (кам бэк)\r
1099.	go out [ɡəʊ aʊt] — выходить в свет / гулять (гоу аут)\r
1100.	carry on [ˈkæri ɒn] — продолжать (кэри он)\r
Часть 2: Слова 1101–1200 уровня A2\r
Блок 1: Покупки, одежда и стиль (Shopping & Clothing)\r
1101.	fitting room [ˈfɪtɪŋ ruːm] — примерку / примерочная кабина (фитинъ рум)\r
1102.	fashionable [ˈfæʃnəbl] — модный (фэшнэбл)\r
1103.	comfortable [ˈkʌmftəbl] — удобный / комфортный (камфтэбл)\r
1104.	uncomfortable [ʌnˈkʌmftəbl] — неудобный (анкамфтэбл)\r
1105.	brand [brænd] — бренд / марка (брэнд)\r
1106.	cotton [ˈkɒtn] — хлопок (котн)\r
1107.	wool [wʊl] — шерсть (вул)\r
1108.	leather [ˈleðə(r)] — кожа / кожаный (лезэ)\r
1109.	silk [sɪlk] — шёлк (силк)\r
1110.	tight [taɪt] — облегающий / тесный (тайт)\r
1111.	loose [luːs] — свободный / широковатый (лус)\r
1112.	match [mætʃ] — подходить по цвету/стилю (мэтч)\r
1113.	suit [suːt] — подходить / идти к лицу (сут)\r
1114.	order [ˈɔːdə(r)] — зазывать / заказ (ордэ)\r
1115.	delivery [dɪˈlɪvəri] — доставка (диливэри)\r
Блок 2: Обучение, навыки и языки (Education & Language)\r
1116.	subject [ˈsʌbdʒɪkt] — учебный предмет / тема (сабджикт)\r
1117.	vocabulary [vəˈkæbjələri] — словарный запас (вокэбьюлэри)\r
1118.	grammar [ˈɡræmə(r)] — грамматика (грэмэ)\r
1119.	pronunciation [prəˌnʌnsiˈeɪʃn] — произношение (пронансиэйшн)\r
1120.	accent [ˈæksent] — акцент (аксент)\r
1121.	mistake [mɪˈsteɪk] — ошибка (мистейк)\r
1122.	level [ˈlevl] — уровень (левл)\r
1123.	fluent [ˈfluːənt] — беглый (о речи) (флуэнт)\r
1124.	practice [ˈpræktɪs] — практика / тренировка (практис)\r
1125.	improve [ɪmˈpruːv] — улучшать / совершенствовать (импрув)\r
1126.	review [rɪˈvjuː] — повторение / обзор (ривью)\r
1127.	rule [ruːl] — правило (рул)\r
1128.	example [ɪɡˈzɑːmpl] — пример (игзампл)\r
1129.	exercise [ˈeksəsaɪz] — упражнение (эксэрсайз)\r
1130.	task [tɑːsk] — задание / задача (таск)\r
Блок 3: Город, здания и услуги (City & Services)\r
1131.	sightseeing [ˈsaɪtsiːɪŋ] — осмотр мест (сайтсиинъ)\r
1132.	suburb [ˈsʌbɜːb] — пригород (сабёрб)\r
1133.	neighbourhood [ˈneɪbəhʊd] — район / окрестности (нейбэхуд)\r
1134.	bakery [ˈbeɪkəri] — пекарня / булочная (бейкэри)\r
1135.	laundry [ˈlɔːndri] — прачечная / стирка (лондри)\r
1136.	hairdresser [ˈheədresə(r)] — парикмахер (хеэдрэсэ)\r
1137.	beauty salon [ˈbjuːti sælɒn] — салон красоты (бьюти салон)\r
1138.	gym [dʒɪm] — спортзал (джим)\r
1139.	chemist's [ˈkemɪsts] — аптека (кемистс)\r
1140.	stationery shop [ˈsteɪʃənri ʃɒp] — канцелярский магазин (стейшэнри шоп)\r
1141.	gas station (petrol station) [ˈpetrəl ˈsteɪʃn] — заправка (пэтрол стейшн)\r
1142.	parking lot [ˈpɑːkɪŋ lɒt] — парковка (паркинъ лот)\r
1143.	crowded [ˈkraʊdɪd] — многолюдный / переполненный (краудид)\r
1144.	noisy [ˈnɔɪzi] — шумный (нойзи)\r
1145.	peaceful [ˈpiːsfl] — спокойный / тихий (мисфул)\r
Блок 4: Еда, общепит и вкусы (Dining & Food)\r
1146.	bill (check) [bɪl] — счёт (бил)\r
1147.	tip [tɪp] — чаевые (тип)\r
1148.	service [ˈsɜːvɪs] — обслуживание / сервис (сёрвис)\r
1149.	waiter / waitress [ˈweɪtə(r) / ˈweɪtrəs] — официант / официантка (уэйтэ / уэйтрэс)\r
1150.	dish [dɪʃ] — блюдо (диш)\r
1151.	meal [miːl] — прием пищи / еда (мил)\r
1152.	snack [snæk] — перекус (снэк)\r
1153.	spicy [ˈspaɪsi] — острый / пикантный (спайси)\r
1154.	sweet [swiːt] — сладкий (суит)\r
1155.	salty [ˈsɔːlti] — солёный (солти)\r
1156.	sour [ˈsaʊə(r)] — кислый (сауэр)\r
1157.	fresh [freʃ] — свежий (фреш)\r
1158.	recipe [ˈresəpi] — рецепт (рэсэпи)\r
1159.	ingredient [ɪnˈɡriːdiənt] — ингредиент / составная часть (ингридиэнт)\r
1160.	order [ˈɔːdə(r)] — заказывать (ордэ)\r
Блок 5: Время, планирование и график (Time Management)\r
1161.	schedule [ˈʃedjuːl] — расписание / график (шедъюл)\r
1162.	timetable [ˈtaɪmteɪbl] — расписание поездов/уроков (таймтейбл)\r
1163.	deadline [ˈdedlaɪn] — крайний срок (дэдлайн)\r
1164.	appointment [əˈpɔɪntmənt] — назначенная встреча (к врачу/мастеру) (эпойнтмэнт)\r
1165.	event [ɪˈvent] — событие (ивент)\r
1166.	in advance [ɪn ədˈvɑːns] — заранее (ин эдванс)\r
1167.	on time [ɒn taɪm] — вовремя (он тайм)\r
1168.	early [ˈɜːli] — рано (ёрли)\r
1169.	late [leɪt] — поздно (лейт)\r
1170.	delay [dɪˈleɪ] — задержка (дилей)\r
1171.	duration [djuˈreɪʃn] — продолжительность (дьюрейшн)\r
1172.	period [ˈpɪəriəd] — период / отрезок времени (пириад)\r
1173.	term [tɜːm] — семестр / срок (тёрм)\r
1174.	century [ˈsentʃəri] — век (сэнтчури)\r
1175.	decade [ˈdekeɪd] — десятилетие (дэкейд)\r
Блок 6: Финансы, работа и карьера (Money & Career)\r
1176.	income [ˈɪnkʌm] — доход (инкам)\r
1177.	expense [ɪkˈspens] — расход / трата (экспенс)\r
1178.	budget [ˈbʌdʒɪt] — бюджет (баджет)\r
1179.	save money [seɪv ˈmʌni] — копить деньги (сейв мани)\r
1180.	borrow [ˈbɒrəʊ] — брати взаймы (бороу)\r
1181.	lend [lend] — одалживать кому-то (ленд)\r
1182.	earn [ɜːn] — зарабатывать (ёрн)\r
1183.	pay check (pay slip) [ˈpeɪtʃek] — расчетный листок / зарплата (пейчек)\r
1184.	taxes [ˈtæksɪz] — налоги (тэксиз)\r
1185.	employer [ɪmˈplɔɪə(r)] — работодатель (имплойэр)\r
1186.	employee [ɪmˈplɔɪiː] — сотрудник / служащий (имплойи)\r
1187.	experience [ɪkˈspɪəriəns] — опыт (экспирианс)\r
1188.	interview [ˈɪntəvjuː] — собеседование (интэрвью)\r
1189.	resume (CV) [ˈrezjumeɪ] — резюме (резюмей)\r
1190.	contract [ˈkɒntrækt] — договор / контракт (контракт)\r
Блок 7: Фразовые глаголы и повседневные действия (Phrasal Verbs)\r
1191.	get on [ɡet ɒn] — садиться в транспорт / ладить (гет он)\r
1192.	get off [ɡet ɒf] — выходить из транспорта (гет оф)\r
1193.	take off [teɪk ɒf] — снимать одежду / взлетать (тейк оф)\r
1194.	put on [pʊt ɒn] — надевать (пут он)\r
1195.	pick up [pɪk ʌp] — подбирать / забирать (пик ап)\r
1196.	drop off [drɒp ɒf] — подвозить / высаживать (дроп оф)\r
1197.	wake up [weɪk ʌp] — просыпаться (уэйк ап)\r
1198.	sit down [sɪt daʊn] — садиться (сит даун)\r
1199.	stand up [stænd ʌp] — вставать (стэнд ап)\r
1200.	go back [ɡəʊ bæk] — возвращаться (гоу бэк)\r
Часть 3: Слова 1201–1300 уровня A2\r
Блок 1: Повседневные действия и привычки (Daily Routines & Habits)\r
1201.	get dressed [ɡet drest] — одеваться (гет дрест)\r
1202.	comb [kəʊm] — расчесывать / расческа (коум)\r
1203.	shave [ʃeɪv] — бриться (шейв)\r
1204.	brush [brʌʃ] — чистить щеткой / щетка (браш)\r
1205.	tidy [ˈtaɪdi] — наводить порядок / аккуратный (тайди)\r
1206.	wash up [wɒʃ ʌp] — мыть посуду (уош ап)\r
1207.	iron [ˈaɪən] — гладить (одежду) / утюг (айэн)\r
1208.	dust [dʌst] — вытирать пыль / пыль (даст)\r
1209.	sweep [swiːp] — подметать (суип)\r
1210.	vacuum [ˈvækjuəm] — пылесосить / пылесос (вэкьюэм)\r
1211.	feed [fiːd] — кормить (фид)\r
1212.	take out [teɪk aʊt] — выносить (мусор) (тейк аут)\r
1213.	habit [ˈhæbɪt] — привычка (хэбит)\r
1214.	lifestyle [ˈlaɪfstaɪl] — образ жизни (лайфстайл)\r
1215.	routine [ruːˈtiːn] — распорядок / рутина (рутин)\r
Блок 2: Состояние здоровья и симптомы (Health & Symptoms)\r
1216.	sore throat [sɔː θrəʊt] — больное горло (сор фроут)\r
1217.	fever (temperature) [ˈfiːvə(r)] — жар / высокая температура (фивэ)\r
1218.	stomach ache [ˈstʌmək eɪk] — боль в животе (стамак ейк)\r
1219.	toothache [ˈtuːθeɪk] — зубная боль (туфейк)\r
1220.	pain [peɪn] — боль (пейн)\r
1221.	dizzy [ˈdɪzi] — чувствующий головокружение (дизи)\r
1222.	sick (ill) [sɪk] — больной / тошнящий (сик)\r
1223.	bleed [bliːd] — кровоточить (блид)\r
1224.	burn [bɜːn] — ожог / обжигать (бёрн)\r
1225.	injury [ˈɪndʒəri] — травма / повреждение (инджери)\r
1226.	bandage [ˈbændɪdʒ] — бинт / повязка (бэндидж)\r
1227.	medicine [ˈmedsn] — лекарство (медсн)\r
1228.	prescription [prɪˈskrɪpʃn] — рецепт от врача (прискрипшн)\r
1229.	appointment [əˈpɔɪntmənt] — запись к врачу (эпойнтмэнт)\r
1230.	recover [rɪˈkʌvə(r)] — выздоравливать / восстанавливаться (рикавэ)\r
Блок 3: Чувства, эмоции и оценки (Feelings & Judgments)\r
1231.	nervous [ˈnɜːvəs] — нервный / волнующийся (нёрвас)\r
1232.	upset [ʌpˈset] — расстроенный (апсет)\r
1233.	lonely [ˈləʊnli] — одинокий (лоунли)\r
1234.	disappointed [ˌdɪsəˈpɔɪntɪd] — разочарованный (дисэпойнтид)\r
1235.	surprised [səˈpraɪzd] — удивленный (сэпрайзд)\r
1236.	jealous [ˈdʒeləs] — ревнивый / завистливый (джелас)\r
1237.	satisfied [ˈsætɪsfaɪd] — удовлетворенный / довольный (сэтисфайд)\r
1238.	proud [praʊd] — гордый (прауд)\r
1239.	embarrassed [ɪmˈbærəst] — смущенный (имбэрэст)\r
1240.	relaxed [rɪˈlækst] — расслабленный (рилэкст)\r
1241.	furious [ˈfjʊəriəs] — разъяренный (фьюриас)\r
1242.	annoyed [əˈnɔɪd] — раздраженный (энойд)\r
1243.	anxious [ˈæŋkʃəs] — тревожный (энкшэс)\r
1244.	confident [ˈkɒnfɪdənt] — уверенный в себе (конфидэнт)\r
1245.	grateful [ˈɡreɪtfl] — благодарный (грейтфул)\r
Блок 4: Жилье, ремонт и обустройство (Home & Maintenance)\r
1246.	roof [ruːf] — крыша (руф)\r
1247.	ceiling [ˈsiːlɪŋ] — потолок (силинъ)\r
1248.	floor [flɔː(r)] — пол / этаж (флор)\r
1249.	wall [wɔːl] — стена (уол)\r
1250.	basement [ˈbeɪsmənt] — подвал / цокольный этаж (бейсмэнт)\r
1251.	attic [ˈætɪk] — чердак (этик)\r
1252.	balcony [ˈbælkəni] — балкон (бэлкэни)\r
1253.	stairs [steəz] — лестница (стеэз)\r
1254.	gate [ɡeɪt] — ворота / калитка (гейт)\r
1255.	fence [fens] — забор (фенс)\r
1256.	fix (repair) [fɪks] — чинить / ремонтировать (фикс)\r
1257.	paint [peɪnt] — красить / краска (пейнт)\r
1258.	tile [taɪl] — плитка / кафель (тайл)\r
1259.	lamp [læmp] — лампа / светильник (лэмп)\r
1260.	plug [plʌɡ] — вилка / штепсель (плаг)\r
Блок 5: Творчество, искусство и хобби (Art & Leisure)\r
1261.	artist [ˈɑːtɪst] — художник / артист (артист)\r
1262.	drawing [ˈdrɔːɪŋ] — рисунок (карандашом/цифровой) (дроинъ)\r
1263.	painting [ˈpeɪntɪŋ] — живопись / картина маслом (пейнтинъ)\r
1264.	sketch [sketʃ] — набросок / эскиз (скетч)\r
1265.	brush [brʌʃ] — кисть (художественная) (браш)\r
1266.	canvas [ˈkænvəs] — холст (кэнвэс)\r
1267.	gallery [ˈɡæləri] — галерея (гэлэри)\r
1268.	exhibition [ˌeksɪˈbɪʃn] — выставка (эксибишн)\r
1269.	craft [krɑːft] — ремесло / рукоделие (крафт)\r
1270.	creative [kriˈeɪtɪv] — творческий (криэйтив)\r
1271.	tool [tuːl] — инструмент (тул)\r
1272.	design [dɪˈzaɪn] — дизайн / проектировать (дизайн)\r
1273.	style [staɪl] — стиль (стайл)\r
1274.	shade [ʃeɪd] — оттенок / тень (шейд)\r
1275.	bright [braɪt] — яркий (брайт)\r
Блок 6: Описание свойств и материалов (Properties & Materials)\r
1276.	glass [ɡlɑːs] — стекло (глас)\r
1277.	wood [wʊd] — древесина / дерево (вуд)\r
1278.	metal [ˈmetl] — металл (метл)\r
1279.	plastic [ˈplæstɪk] — пластик (плэстик)\r
1280.	paper [ˈpeɪpə(r)] — бумага (пейпэ)\r
1281.	stone [stəʊn] — камень (стоун)\r
1282.	heavy [ˈhevi] — тяжелый (хеви)\r
1283.	light [laɪt] — легкий (по весу) (лайт)\r
1284.	hard [hɑːd] — твердый (хард)\r
1285.	soft [sɒft] — мягкий (софт)\r
1286.	rough [rʌf] — шершавый / шероховатый (раф)\r
1287.	smooth [smuːð] — гладкий / ровный (смуз)\r
1288.	thick [θɪk] — толстый / густой (фик)\r
1289.	thin [θɪn] — тонкий (фин)\r
1290.	narrow [ˈnærəʊ] — узкий (нэроу)\r
Блок 7: Полезные фразовые глаголы (Phrasal Verbs A2)\r
1291.	look up [lʊk ʌp] — искать (в словаре/интернете) (лук ап)\r
1292.	fill in [fɪl ɪn] — заполнять (анкету/форму) (фил ин)\r
1293.	plug in [plʌɡ ɪn] — включать в розетку (плаг ин)\r
1294.	switch off [swɪtʃ ɒf] — выключать (прибор) (суитч оф)\r
1295.	switch on [swɪtʃ ɒn] — включать (прибор) (суитч он)\r
1296.	throw away [θrəʊ əˈweɪ] — выбрасывать (фроу эуэй)\r
1297.	try on [traɪ ɒn] — примерять (одежду) (трай он)\r
1298.	write down [raɪt daʊn] — записывать (райт даун)\r
1299.	break down [breɪk daʊn] — ломаться (о технике/машине) (брейк даун)\r
1300.	grow up [ɡrəʊ ʌp] — вырастать (гроу ап)\r
Часть 4: Слова 1301–1400 уровня A2\r
Блок 1: Растения, садоводство и уход (Plants & Gardening)\r
1301.	plant [plɑːnt] — растение / сажать (плант)\r
1302.	soil [sɔɪl] — почва / грунт (сойл)\r
1303.	pot [pɒt] — горшок (цветочный) (пот)\r
1304.	root [ruːt] — корень (рут)\r
1305.	stem [stem] — стебель (стем)\r
1306.	leaf (leaves) [liːf] — лист (листья) (лиф / ливз)\r
1307.	bark [bɑːk] — кора (барк)\r
1308.	moss [mɒs] — мох (мос)\r
1309.	seed [siːd] — семя / семечка (сид)\r
1310.	fertilizer [ˈfɜːtəlaɪzə(r)] — удобрение (фёртилайзэ)\r
1311.	water [ˈwɔːtə(r)] — поливать / вода (уотэ)\r
1312.	grow [ɡrəʊ] — расти / выращивать (гроу)\r
1313.	care [keə(r)] — уход / ухаживать (кеэ)\r
1314.	light [laɪt] — свет (лайт)\r
1315.	shade [ʃeɪd] — тень (шейд)\r
Блок 2: Описание действий и процессов (Actions & Processes)\r
1316.	mix [mɪks] — смешивать (микс)\r
1317.	add [æd] — добавлять (эд)\r
1318.	prepare [prɪˈpeə(r)] — готовить / подготавливать (припеэ)\r
1319.	collect [kəˈlekt] — собирать (колект)\r
1320.	combine [kəmˈbaɪn] — соединять / сочетать (комбайн)\r
1321.	change [tʃeɪndʒ] — менять / изменять (чейндж)\r
1322.	replace [rɪˈpleɪs] — заменять (риплейс)\r
1323.	improve [ɪmˈpruːv] — улучшать (импрув)\r
1324.	protect [prəˈtekt] — защищать (протект)\r
1325.	keep [kiːp] — держать / сохранять (кип)\r
1326.	support [səˈpɔːt] — поддерживать / поддержка (сапорт)\r
1327.	cover [ˈkʌvə(r)] — накрывать / покрывать (кавэ)\r
1328.	fill [fɪl] — наполнять (фил)\r
1329.	empty [ˈempti] — опустошать / пустой (эмпти)\r
1330.	clean [kliːn] — чистить / чистый (клин)\r
Блок 3: Природа, погода и явления (Nature & Phenomena)\r
1331.	climate [ˈklaɪmət] — климат (клаймэт)\r
1332.	air [eə(r)] — воздух (ээ)\r
1333.	humidity [hjuːˈmɪdəti] — влажность (хьюмидэти)\r
1334.	dryness [ˈdraɪnəs] — сухость (драйнэс)\r
1335.	heat [hiːt] — жара / тепло (хит)\r
1336.	cold [kəʊld] — холод (коулд)\r
1337.	breeze [briːz] — лёгкий ветерок / бриз (бриз)\r
1338.	sunlight [ˈsʌnlaɪt] — солнечный свет (санлайт)\r
1339.	shadow [ˈʃædəʊ] — тень (от предмета) (шэдоу)\r
1340.	field [fiːld] — поле (филд)\r
1341.	ground [ɡraʊnd] — земля / поверхность (граунд)\r
1342.	stone [stəʊn] — камень (стоун)\r
1343.	river [ˈrɪvə(r)] — река (ривэ)\r
1344.	stream [striːm] — ручей / поток (стрим)\r
1345.	nature [ˈneɪtʃə(r)] — природа (нейчэ)\r
Блок 4: Досуг, творчество и медиа (Leisure & Media)\r
1346.	content [ˈkɒntent] — контент / содержание (контент)\r
1347.	video [ˈvɪdiəʊ] — видео (видео)\r
1348.	photo [ˈfəʊtəʊ] — фотография (фоутоу)\r
1349.	lesson [ˈlesn] — урок / занятие (лессн)\r
1350.	camera [ˈkæmrə] — камера / фотоаппарат (кэмрэ)\r
1351.	record [rɪˈkɔːd] — записывать (видео/звук) (рикорд)\r
1352.	shoot [ʃuːt] — снимать (фото/видео) (шут)\r
1353.	edit [ˈedɪt] — редактировать / монтировать (эдит)\r
1354.	space [speɪs] — пространство / место (спейс)\r
1355.	table [ˈteɪbl] — стол (тейбл)\r
1356.	light [laɪt] — освещение / свет (лайт)\r
1357.	setup [ˈsetʌp] — настройка / организация рабочего места (сетап)\r
1358.	screen [skriːn] — экран (скрин)\r
1359.	frame [freɪm] — кадр / рамка (фрейм)\r
1360.	quality [ˈkwɒləti] — качество (куолити)\r
Блок 5: Еда, готовка и кулинария (Food & Cooking)\r
1361.	fryer [ˈfraɪə(r)] — фритюрница / аэрогриль (фрайэр)\r
1362.	bake [beɪk] — запекать (бейк)\r
1363.	roast [rəʊst] — жарить в духовке (роуст)\r
1364.	grill [ɡrɪl] — жарить на гриле (гриль)\r
1365.	slice [slaɪs] — нарезать ломтиками (слайс)\r
1366.	chop [tʃɒp] — нарезать / рубить (чоп)\r
1367.	sauce [sɔːs] — соус (сос)\r
1368.	spice [spaɪs] — специя / приправа (спайс)\r
1369.	pork [pɔːk] — свинина (порк)\r
1370.	potato [pəˈteɪtəʊ] — картофель (потейтоу)\r
1371.	crispy [ˈkrɪspi] — хрустящий (криспи)\r
1372.	sweet [swiːt] — сладкий (суит)\r
1373.	cream [kriːm] — сливки / крем (крим)\r
1374.	dessert [dɪˈzɜːt] — десерт (дизёрт)\r
1375.	step [step] — шаг / этап (степ)\r
Блок 6: Описание свойств и качества (Properties & Features)\r
1376.	natural [ˈnætʃrəl] — натуральный / природный (нэчрэл)\r
1377.	fresh [freʃ] — свежий (фреш)\r
1378.	soft [sɒft] — мягкий (софт)\r
1379.	hard [hɑːd] — твёрдый / жёсткий (хард)\r
1380.	dry [draɪ] — сухой (драй)\r
1381.	wet [wet] — влажный / мокрый (уэт)\r
1382.	simple [ˈsɪmpl] — простой (симпл)\r
1383.	complex [ˈkɒmpleks] — сложный / составной (комплекс)\r
1384.	special [ˈspeʃl] — специальный / особый (спешл)\r
1385.	suitable [ˈsuːtəbl] — подходящий (сутэбл)\r
1386.	useful [ˈjuːsfl] — полезный (ьюсфул)\r
1387.	modern [ˈmɒdn] — современный (модн)\r
1388.	traditional [trəˈdɪʃənl] — традиционный (трэдишнл)\r
1389.	correct [kəˈrekt] — правильный / верный (корект)\r
1390.	clear [klɪə(r)] — понятный / чистый (клиэ)\r
Блок 7: Полезные связующие конструкции (Connectors & Transitions)\r
1391.	firstly [ˈfɜːstli] — во-первых (фёрстли)\r
1392.	secondly [ˈsekəndli] — во-вторых (секандли)\r
1393.	then [ðen] — затем / потом (зен)\r
1394.	after that [ˈɑːftə ðæt] — после этого (афтэ зэт)\r
1395.	finally [ˈfaɪnəli] — в конце / наконец (файнэли)\r
1396.	also [ˈɔːlsəʊ] — также (олсоу)\r
1397.	as well [æz wel] — тоже / также (эз вел)\r
1398.	because of [bɪˈkɒz əv] — из-за (бикоз оф)\r
1399.	in order to [ɪn ˈɔːdə tə] — для того чтобы (ин ордэ ту)\r
1400.	for example [fər ɪɡˈzɑːmpl] — например (фор игзампл)\r
Часть 5: Слова 1401–1500 уровня A2\r
Блок 1: Программирование, ИТ и веб-разработка (Tech & Code)\r
1401.	code [kəʊd] — код / кодировать (коуд)\r
1402.	developer [dɪˈveləpə(r)] — разработчик (дивелопэ)\r
1403.	component [kəmˈpəʊnənt] — компонент / составная часть (компоунэнт)\r
1404.	structure [ˈstrʌktʃə(r)] — структура / устройство (страктчэ)\r
1405.	style [staɪl] — стиль / оформление (стайл)\r
1406.	file [faɪl] — файл (файл)\r
1407.	bug [bʌɡ] — ошибка в коде / баг (баг)\r
1408.	test [test] — тест / проверять (тест)\r
1409.	automation [ˌɔːtəˈmeɪʃn] — автоматизация (отэмэйшн)\r
1410.	error [ˈerə(r)] — ошибка / сбой (эрор)\r
1411.	screen [skriːn] — экран / монитор (скрин)\r
1412.	display [dɪˈspleɪ] — дисплей / отображать (дисплей)\r
1413.	setting [ˈsetɪŋ] — настройка (сетинъ)\r
1414.	resolution [ˌrezəˈluːʃn] — разрешение (экрана) (резэлюшн)\r
1415.	system [ˈsɪstəm] — система (систэм)\r
Блок 2: Действия в IT и работе с ПО (Tech Actions)\r
1416.	create [kriˈeɪt] — создавать (криэйт)\r
1417.	run [rʌn] — запускать (программу/код) (ран)\r
1418.	check [tʃek] — проверять (чек)\r
1419.	fix [fɪks] — исправлять / чинить (фикс)\r
1420.	change [tʃeɪndʒ] — менять (чейндж)\r
1421.	add [æd] — добавлять (эд)\r
1422.	remove [rɪˈmuːv] — удалять / перемещать (римув)\r
1423.	open [ˈəʊpən] — открывать (оупэн)\r
1424.	close [kləʊz] — закрывать (клоуз)\r
1425.	save [seɪv] — сохранять (сейв)\r
1426.	load [ləʊd] — загружать (лоуд)\r
1427.	setup [ˈsetʌp] — настраивать / наладка (сетап)\r
1428.	connect [kəˈnekt] — подключать (конэкт)\r
1429.	solve [sɒlv] — решать (проблему/задачу) (солв)\r
1430.	build [bɪld] — собирать / строить (билд)\r
Блок 3: Искусство, живопись и стили (Art & Painting)\r
1431.	landscape [ˈlændskeɪp] — пейзаж (лэндскейп)\r
1432.	master [ˈmɑːstə(r)] — мастер / знаток (мастэ)\r
1433.	atmosphere [ˈæt məsfiə(r)] — атмосфера / настроение (атмосфиэ)\r
1434.	light [laɪt] — свет (лайт)\r
1435.	color (colour) [ˈkʌlə(r)] — цвет (калэ)\r
1436.	oil [ɔɪl] — масло / масляные краски (ойл)\r
1437.	brush [brʌʃ] — кисть (браш)\r
1438.	canvas [ˈkænvəs] — холст (кэнвэс)\r
1439.	technique [tekˈniːk] — техника / метод (текник)\r
1440.	picture [ˈpɪktʃə(r)] — картина / изображение (пиктчэ)\r
1441.	art [ɑːt] — искусство (арт)\r
1442.	artist [ˈɑːtɪst] — художник (артист)\r
1443.	gallery [ˈɡæləri] — галерея (гэлэри)\r
1444.	view [vjuː] — вид / обзор (вью)\r
1445.	detail [ˈdiːteɪl] — деталь / подробность (дитейл)\r
Блок 4: Домашние животные и уход (Pets & Cat Care)\r
1446.	cat [kæt] — кошка / кот (кэт)\r
1447.	pet [pet] — домашний питомец (пет)\r
1448.	food [fuːd] — еда / корм (фуд)\r
1449.	care [keə(r)] — уход / забота (кеэ)\r
1450.	grooming [ˈɡruːmɪŋ] — уход за шерстью / груминг (груминъ)\r
1451.	fur [fɜː(r)] — шерсть / мех (фёр)\r
1452.	feed [fiːd] — кормить (фид)\r
1453.	bowl [bəʊl] — миска (боул)\r
1454.	water [ˈwɔːtə(r)] — вода (уотэ)\r
1455.	healthy [ˈhelθi] — здоровый (хэлфи)\r
1456.	clean [kliːn] — чистый / чистить (клин)\r
1457.	play [pleɪ] — играть (плей)\r
1458.	toy [tɔɪ] — игрушка (той)\r
1459.	sleep [sliːp] — спать / сон (слип)\r
1460.	home [həʊm] — дом (хоум)\r
Блок 5: Социальные сети и контент (Social Media & Content)\r
1461.	post [pəʊst] — публикация / пост / публиковать (поуст)\r
1462.	video [ˈvɪdiəʊ] — видео (видео)\r
1463.	lesson [ˈlesn] — урок (лессн)\r
1464.	schedule [ˈʃedjuːl] — расписание / график (шедъюл)\r
1465.	time [taɪm] — время (тайм)\r
1466.	platform [ˈplætfɔːm] — платформа / площадка (плэтформ)\r
1467.	page [peɪdʒ] — страница (пейдж)\r
1468.	view [vjuː] — просмотр (вью)\r
1469.	subscriber (follower) [səbˈskraɪbə(r)] — подписчик (сабскрайбэ)\r
1470.	share [ʃeə(r)] — делиться (шеэ)\r
1471.	comment [ˈkɒment] — комментарий (комэнт)\r
1472.	like [laɪk] — отметка «нравится» (лайк)\r
1473.	profile [ˈprəʊfaɪl] — профиль (проуфайл)\r
1474.	media [ˈmiːdiə] — медиа / средства информации (мидиа)\r
1475.	audience [ˈɔːdiəns] — аудитория / зрители (одиэнс)\r
Блок 6: Ремонт, стройка и интерьер (Home Repair & Tile)\r
1476.	tile [taɪl] — плитка / кафель (тайл)\r
1477.	floor [flɔː(r)] — пол (флор)\r
1478.	service [ˈsɜːvɪs] — услуга / сервис (сёрвис)\r
1479.	price [praɪs] — цена / стоимость (прайс)\r
1480.	rate [reɪt] — тариф / ставка (рейт)\r
1481.	work [wɜːk] — работа (уорк)\r
1482.	installation [ˌɪnstəˈleɪʃn] — установка / укладка (инстэлейшн)\r
1483.	master (specialist) [ˈmɑːstə(r)] — мастер / специалист (мастэ)\r
1484.	size [saɪz] — размер (сайз)\r
1485.	room [ruːm] — комната / помещение (рум)\r
1486.	flat (apartment) [flæt] — квартира (флэт)\r
1487.	surface [ˈsɜːfɪs] — поверхность (сёрфис)\r
1488.	material [məˈtɪəriəl] — материал (матириал)\r
1489.	cost [kɒst] — стоимость (кост)\r
1490.	quality [ˈkwɒləti] — качество (куолити)\r
Блок 7: Полезные глаголы и выражения состояния (A2 State Verbs)\r
1491.	choose [tʃuːz] — выбирать (чуз)\r
1492.	compare [kəmˈpeə(r)] — сравнивать (компеэ)\r
1493.	evaluate [ɪˈvæljueɪt] — оценивать (ивэльюэйт)\r
1494.	analyze [ˈænəlaɪz] — анализировать (энэлайз)\r
1495.	plan [plæn] — планировать (плэн)\r
1496.	prepare [prɪˈpeə(r)] — подготавливать (припеэ)\r
1497.	discuss [dɪˈskʌs] — обсуждать (дискас)\r
1498.	decide [dɪˈsaɪd] — решать / принимать решение (дисайд)\r
1499.	complete [kəmˈpliːt] — завершать / полный (комплит)\r
1500.	continue [kənˈtɪnjuː] — продолжать (кантинью)\r
Часть 6: Слова 1501–1600 уровня A2\r
Блок 1: Дизайн, верстка и презентация (Design & Layout)\r
1501.	layout [ˈleɪaʊt] — макет / верстка (лейаут)\r
1502.	header [ˈhedə(r)] — шапка сайта / верхний колонтитул (хэдэ)\r
1503.	banner [ˈbænə(r)] — баннер / транспарант (бэнэ)\r
1504.	font [fɒnt] — шрифт (фонт)\r
1505.	color palette [ˈkʌlə ˈpælət] — цветовая палитра (калэ пэлэт)\r
1506.	contrast [ˈkɒntrɑːst] — контраст (контраст)\r
1507.	background [ˈbækɡraʊnd] — фон (бэкграунд)\r
1508.	foreground [ˈfɔːɡraʊnd] — передний план (форграунд)\r
1509.	alignment [əˈlaɪnmənt] — выравнивание (элайнмэнт)\r
1510.	margin [ˈmɑːdʒɪn] — поле / отступ (марджин)\r
1511.	padding [ˈpædɪŋ] — внутренний отступ (пэдинъ)\r
1512.	grid [ɡrɪd] — сетка (грид)\r
1513.	template [ˈtempleɪt] — шаблон (темплейт)\r
1514.	carousel [ˌkærəˈsel] — карусель (галерея слайдов) (карэсел)\r
1515.	portfolio [pɔːtˈfəʊliəʊ] — портфолио (портфолио)\r
Блок 2: Традиционная и цифровая живопись (Digital & Traditional Art)\r
1516.	layer [ˈleɪə(r)] — слой (лейэ)\r
1517.	stroke [strəʊk] — мазок / штрих (строук)\r
1518.	texture [ˈtekstʃə(r)] — текстура / фактура (текстчэ)\r
1519.	shadow [ˈʃædəʊ] — тень (шэдоу)\r
1520.	highlight [ˈhaɪlaɪt] — блик / светлое место (хайлайт)\r
1521.	opacity [əʊˈpæsəti] — непрозрачность (оупасэти)\r
1522.	transparency [trænsˈpærənsi] — прозрачность (трэнспэрэнси)\r
1523.	blend [blend] — смешивать / растушевывать (бленд)\r
1524.	erase [ɪˈreɪz] — стирать / ластик (ирейз)\r
1525.	fill [fɪl] — заливка / заливать (фил)\r
1526.	gradient [ˈɡreɪdiənt] — градиент (грейдиэнт)\r
1527.	canvas size [ˈkænvəs saɪz] — размер холста (кэнвэс сайз)\r
1528.	resolution [ˌrezəˈluːʃn] — разрешение изображения (резэлюшн)\r
1529.	export [ɪkˈspɔːt] — экспортировать / сохранять в файл (экспорт)\r
1530.	illustration [ˌɪləˈstreɪʃn] — иллюстрация (илэстрейшн)\r
Блок 3: Тестирование ПО и качество (QA & Software Testing)\r
1531.	testing [ˈtestɪŋ] — тестирование (тестинъ)\r
1532.	bug report [bʌɡ rɪˈpɔːt] — отчёт об ошибке (баг рипорт)\r
1533.	feature [ˈfiːtʃə(r)] — функция / фича (фичэ)\r
1534.	expected result [ɪkˈspektɪd rɪˈzʌlt] — ожидаемый результат (экспектид ризалт)\r
1535.	actual result [ˈæktʃuəl rɪˈzʌlt] — фактический результат (эктчуэл ризалт)\r
1536.	pass [pɑːs] — прошёл (тест) (пас)\r
1537.	fail [feɪl] — провалился (тест) (фейл)\r
1538.	step-by-step [step baɪ step] — пошаговый (степ бай степ)\r
1539.	manual [ˈmænjuəl] — ручной (мэньюэл)\r
1540.	automated [ˈɔːtəmeɪtɪd] — автоматизированный (отэмейтид)\r
1541.	framework [ˈfreɪmwɜːk] — фреймворк / структура (фреймуорк)\r
1542.	environment [ɪnˈvaɪrənmənt] — тестовое окружение / среда (инвайронмэнт)\r
1543.	script [skrɪpt] — скрипт / сценарий (скрипт)\r
1544.	log [lɒɡ] — лог / журнал событий (лог)\r
1545.	verify [ˈverɪfaɪ] — проверять / подтверждать (верифай)\r
Блок 4: Комнатные растения и субстраты (Houseplants & Substrates)\r
1546.	houseplant [ˈhaʊsplɑːnt] — комнатное растение (хаусплант)\r
1547.	substrate [ˈsʌbstreɪt] — субстрат / почвосмесь (сабстрейт)\r
1548.	peat [piːt] — торф (пит)\r
1549.	pine bark [paɪn bɑːk] — сосновая кора (пайн барк)\r
1550.	coconut chips [ˈkəʊkənʌt tʃɪps] — кокосовые чипсы (коуканэт чипс)\r
1551.	perlite [ˈpɜːlaɪt] — перлит (пёрлайт)\r
1552.	zeolite [ˈziːəlaɪt] — цеолит (зиэлайт)\r
1553.	drainage [ˈdreɪnɪdʒ] — дренаж (дрейнидж)\r
1554.	wick watering [wɪk ˈwɔːtərɪŋ] — фитильный полив (уик уотэринъ)\r
1555.	cord [kɔːd] — шнур / фитиль (корд)\r
1556.	humidity [hjuːˈmɪdəti] — влажность (хьюмидэти)\r
1557.	phytolamp [ˈfaɪtəʊlæmp] — фитолампа (файтоулэмп)\r
1558.	spectrum [ˈspektrəm] — спектр (света) (спектрэм)\r
1559.	repotting [ˌriːˈpɒtɪŋ] — пересадка (в новый горшок) (рипотинъ)\r
1560.	rot [rɒt] — гниль / гнить (рот)\r
Блок 5: Кулинария и рецепты (Culinary & Cooking)\r
1561.	ingredient list [ɪnˈɡriːdiənt lɪst] — список ингредиентов (ингридиэнт лист)\r
1562.	portion [ˈpɔːʃn] — порция (поршн)\r
1563.	oven-baked [ˈʌvn beɪkt] — запечённый в духовке (авн бейкт)\r
1564.	temperature [ˈtemprətʃə(r)] — температура (темпрэчэ)\r
1565.	air-fryer [eə ˈfraɪə(r)] — аэрогриль / фритюрница (ээ фрайэр)\r
1566.	chop [tʃɒp] — отбивная / кусок мяса на кости (чоп)\r
1567.	barbecue (BBQ) [ˈbɑːbɪkjuː] — барбекю (барбикью)\r
1568.	panna cotta [ˈpænə ˈkɒtə] — панна-котта (пана кота)\r
1569.	gelatin [ˈdʒelətɪn] — желатин (джелэтин)\r
1570.	cream [kriːm] — сливки (крим)\r
1571.	crispy [ˈkrɪspi] — хрустящий (криспи)\r
1572.	seasoning [ˈsiːzənɪŋ] — приправа / специя (сизэнинъ)\r
1573.	sear [sɪə(r)] — обжаривать до корочки (сиэ)\r
1574.	chill [tʃɪl] — охлаждать (чил)\r
1575.	serve [sɜːv] — подавать на стол (сёрв)\r
Блок 6: Организация, общение и праздники (Social & Planning)\r
1576.	greeting [ˈɡriːtɪŋ] — поздравление / приветствие (гритинъ)\r
1577.	congratulation [kənˌɡrætʃuˈleɪʃn] — поздравление (конгрэчулейшн)\r
1578.	wishes [ˈwɪʃɪz] — пожелания (уишиз)\r
1579.	bride-to-be [braɪd tə bi] — невеста (брайд ту би)\r
1580.	engagement [ɪnˈɡeɪdʒmənt] — помолвка (ингейджмэнт)\r
1581.	celebration [ˌselɪˈbreɪʃn] — празднование / торжество (селибрейшн)\r
1582.	invitation [ˌɪnvɪˈteɪʃn] — приглашение (инвитейшн)\r
1583.	guest [ɡest] — гость (гест)\r
1584.	gift (present) [ɡɪft] — подарок (гифт)\r
1585.	dear [dɪə(r)] — дорогой / милый (диэ)\r
1586.	friendship [ˈfrendʃɪp] — дружба (френдшип)\r
1587.	acquaintance [əˈkweɪntəns] — знакомый / знакомство (экуэйнтэнс)\r
1588.	message [ˈmesɪdʒ] — сообщение (месидж)\r
1589.	card [kɑːd] — открытка (кард)\r
1590.	surprise [səˈpraɪz] — сюрприз (сэпрайз)\r
Блок 7: Мыслительные процессы и принятие решений (Cognitive & Decisions)\r
1591.	explore [ɪkˈsplɔː(r)] — исследовать / изучать (эксплор)\r
1592.	analyze [ˈænəlaɪz] — анализировать (энэлайз)\r
1593.	evaluate [ɪˈvæljueɪt] — оценивать / взвешивать (ивэльюэйт)\r
1594.	consider [kənˈsɪdə(r)] — рассматривать / обдумывать (консидэ)\r
1595.	compare [kəmˈpeə(r)] — сравнивать (компеэ)\r
1596.	adjust [əˈdʒʌst] — настраивать / регулировать (эджаст)\r
1597.	solution [səˈluːʃn] — решение (задачи) (солюшн)\r
1598.	pathway (learning path) [ˈpɑːθweɪ] — путь обучения / траектория (пафуэй)\r
1599.	goal [ɡəʊl] — цель (гоул)\r
1600.	result [rɪˈzʌlt] — результат (ризалт)\r
Часть 7: Слова 1601–1700 уровня A2\r
Блок 1: Настройка оборудования и Дисплеи (Hardware & Displays)\r
1601.	monitor [ˈmɒnɪtə(r)] — монитор (монитэ)\r
1602.	screen resolution [skriːn ˌrezəˈluːʃn] — разрешение экрана (скрин резэлюшн)\r
1603.	display settings [dɪˈspleɪ ˈsetɪŋz] — настройки экрана (дисплей сетинъз)\r
1604.	cable [ˈkeɪbl] — кабель / провод (кейбл)\r
1605.	port [pɔːt] — порт / разъем (порт)\r
1606.	refresh rate [rɪˈfreʃ reɪt] — частота обновления экрана (рифреш рейт)\r
1607.	brightness [ˈbraɪtnəs] — яркость (брайтнэс)\r
1608.	aspect ratio [ˈæspekt ˈreɪʃiəʊ] — соотношение сторон (аспект рейшио)\r
1609.	plug in [plʌɡ ɪn] — подключать к сети/разъему (плаг ин)\r
1610.	unplug [ˌʌnˈplʌɡ] — отключать от сети (анплаг)\r
1611.	adapter [əˈdæptə(r)] — переходник / адаптер (эдэптэ)\r
1612.	device [dɪˈvaɪs] — устройство / прибор (дивайс)\r
1613.	hardware [ˈhɑːdweə(r)] — аппаратное обеспечение / «железо» (хардвеэ)\r
1614.	driver [ˈdraɪvə(r)] — драйвер (драйвэ)\r
1615.	graphics card [ˈɡræfɪks kɑːd] — видеокарта (грэфикс кард)\r
Блок 2: Обучение, курсы и развитие (Learning & Career Path)\r
1616.	training [ˈtreɪnɪŋ] — обучение / тренинг (трейнинъ)\r
1617.	course [kɔːs] — курс (корс)\r
1618.	timeline [ˈtaɪmlaɪn] — временные рамки / график (таймлайн)\r
1619.	path [pɑːθ] — путь / траектория (паф)\r
1620.	skill [skɪl] — навык (скил)\r
1621.	level [ˈlevl] — уровень (левл)\r
1622.	beginner [bɪˈɡɪnə(r)] — новичок / начинающий (бигинэ)\r
1623.	advanced [ədˈvɑːnst] — продвинутый (эдванст)\r
1624.	practice [ˈpræktɪs] — практика (практис)\r
1625.	knowledge [ˈnɒlɪdʒ] — знания (нолидж)\r
1626.	fullstack [fʊl stæk] — фулстек / полный стек (фулстэк)\r
1627.	career [kəˈrɪə(r)] — карьера (кэриэр)\r
1628.	certificate [səˈtɪfɪkət] — сертификат (сэртификэт)\r
1629.	progress [ˈprəʊɡres] — прогресс / продвижение (прогрес)\r
1630.	opportunity [ˌɒpəˈtjuːnəti] — возможность (опэтьюнэти)\r
Блок 3: Живопись, свет и композиция (Art, Light & Atmosphere)\r
1631.	atmosphere [ˈætməsfiə(r)] — атмосфера / настроение (атмосфиэ)\r
1632.	sunlight [ˈsʌnlaɪt] — солнечный свет (санлайт)\r
1633.	shade [ʃeɪd] — оттенок / тень (шейд)\r
1634.	shadow [ˈʃædəʊ] — тень (от объекта) (шэдоу)\r
1635.	color scheme [ˈkʌlə skiːm] — цветовая гамма (калэ ским)\r
1636.	warm colors [wɔːm ˈkʌləz] — тёплые цвета (уорм калэз)\r
1637.	cool colors [kuːl ˈkʌləz] — холодные цвета (кул калэз)\r
1638.	contrast [ˈkɒntrɑːst] — контраст (контраст)\r
1639.	composition [ˌkɒmpəˈzɪʃn] — композиция (компэзишн)\r
1640.	perspective [pəˈspektɪv] — перспектива (пэрспектив)\r
1641.	focal point [ˈfəʊkl pɔɪnt] — фокусная точка / центр внимания (фоукл пойнт)\r
1642.	oil painting [ɔɪl ˈpeɪntɪŋ] — масляная живопись (ойл пейнтинъ)\r
1643.	masterpiece [ˈmɑːstəpiːs] — шедевр (мастэпис)\r
1644.	nature [ˈneɪtʃə(r)] — природа (нейчэ)\r
1645.	depth [depθ] — глубина (депф)\r
Блок 4: Уход за домашними животными (Pet Care & Behavior)\r
1646.	pet food [pet fuːd] — корм для питомцев (пет фуд)\r
1647.	vet (veterinarian) [vet] — ветеринар (вет)\r
1648.	health [helθ] — здоровье (хэлф)\r
1649.	paws [pɔːz] — лапы (поз)\r
1650.	tail [teɪl] — хвост (тейл)\r
1651.	whiskers [ˈwɪskəz] — усы (у кошек) (уискэз)\r
1652.	grooming product [ˈɡruːmɪŋ ˈprɒdʌkt] — средство для ухода / груминга (груминъ продакт)\r
1653.	scratching post [ˈskrætʃɪŋ pəʊst] — когтеточка (скрэчинъ поуст)\r
1654.	litter box [ˈlɪtə bɒks] — лоток (литэ бокс)\r
1655.	diet [ˈdaɪət] — рацион / диета (дайэт)\r
1656.	purebred [ˈpjʊəbred] — породистый (пьюрбред)\r
1657.	playful [ˈpleɪfl] — игривый (плейфул)\r
1658.	fluffy [ˈflʌfi] — пушистый (флафи)\r
1659.	active [ˈæktɪv] — активный (актив)\r
1660.	sleepy [ˈsliːpi] — сонный (слипи)\r
Блок 5: Съемка контента и рабочее место (Content Creation Setup)\r
1661.	workspace [ˈwɜːkspeɪs] — рабочее место (уоркспейс)\r
1662.	tripod [ˈtraɪpɒd] — штатив (трайпод)\r
1663.	holder [ˈhəʊldə(r)] — держатель (хоулдэ)\r
1664.	lighting [ˈlaɪtɪŋ] — освещение (лайтинъ)\r
1665.	angle [ˈæŋɡl] — угол съемки / ракурс (энгл)\r
1666.	tutorial [tjuːˈtɔːriəl] — обучающее видео / туториал (тьюториэл)\r
1667.	recording [rɪˈkɔːdɪŋ] — запись (рикординъ)\r
1668.	clip [klɪp] — видеоролик / клип (клип)\r
1669.	sound [saʊnd] — звук (саунд)\r
1670.	microphone [ˈmaɪkrəfəʊn] — микрофон (майкрафоун)\r
1671.	background music [ˈbækɡraʊnd ˈmjuːzɪk] — фоновая музыка (бэкграунд мьюзик)\r
1672.	editing app [ˈedɪtɪŋ æp] — приложение для монтажа (эдитинъ эп)\r
1673.	filter [ˈfɪltə(r)] — фильтр (филтэ)\r
1674.	caption [ˈkæpʃn] — подпись / субтитры (кэпшн)\r
1675.	trend [trend] — тренд / тенденция (тренд)\r
Блок 6: Ремонт и отделка помещения (Renovation & Materials)\r
1676.	renovation [ˌrenəˈveɪʃn] — ремонт / обновление (ренэвейшн)\r
1677.	wall [wɔːl] — стена (уол)\r
1678.	floor [flɔː(r)] — пол (флор)\r
1679.	measurement [ˈmeʒəmənt] — измерение / замер (межэмэнт)\r
1680.	area [ˈeəriə] — площадь / зона (эриа)\r
1681.	square meter [skweə ˈmiːtə(r)] — квадратный метр (сквеэ митэ)\r
1682.	glue (adhesive) [ɡluː] — клей (глу)\r
1683.	joint [dʒɔɪnt] — шов / стык (джойнт)\r
1684.	level [ˈlevl] — уровень (строительный) (левл)\r
1685.	estimate [ˈestɪmət] — смета / оценка стоимости (эстимэт)\r
1686.	worker [ˈwɜːkə(r)] — рабочий (уоркэ)\r
1687.	tool [tuːl] — инструмент (тул)\r
1688.	smooth [smuːð] — ровный / гладкий (смуз)\r
1689.	flat [flæt] — ровный / плоский (флэт)\r
1690.	durable [ˈdjʊərəbl] — прочный / долговечный (дьюрэбл)\r
Блок 7: Полезные фразовые глаголы и выражения (Phrasal Verbs & Idioms A2)\r
1691.	figure out [ˈfɪɡər aʊt] — разобраться / понять (фигэр аут)\r
1692.	set up [set ʌp] — настраивать / организовывать (сет ап)\r
1693.	turn out [tɜːn aʊt] — оказываться (тёрн аут)\r
1694.	look forward to [lʊk ˈfɔːwəd tu] — ждать с нетерпением (лук форвэд ту)\r
1695.	deal with [diːl wɪð] — иметь дело с / справляться (дил уиз)\r
1696.	depends on [dɪˈpendz ɒn] — зависит от (дипендз он)\r
1697.	make sense [meɪk sens] — иметь смысл (мейк сенс)\r
1698.	keep in mind [kiːp ɪn maɪnd] — иметь в виду / помнить (кип ин майнд)\r
1699.	pay attention [peɪ əˈtenʃn] — обращать внимание (пей этеншн)\r
1700.	take time [teɪk taɪm] — занимать время (тейк тайм)\r
Часть 8: Слова 1701–1800 уровня A2\r
Блок 1: Графический дизайн, веб-элементы и верстка (Graphic Design & UI)\r
1701.	graphics [ˈɡræfɪks] — графика (грэфикс)\r
1702.	element [ˈelɪmənt] — элемент (элимэнт)\r
1703.	icon [ˈaɪkɒn] — иконка / значок (айкон)\r
1704.	shape [ʃeɪp] — форма / фигура (шейп)\r
1705.	size [saɪz] — размер (сайз)\r
1706.	space [speɪs] — пространство / отступ (спейс)\r
1707.	spacing [ˈspeɪsɪŋ] — расстояние между элементами (спейсинъ)\r
1708.	width [wɪdtθ] — ширина (видф)\r
1709.	height [haɪt] — высота (хайт)\r
1710.	border [ˈbɔːdə(r)] — рамка / граница (бордэ)\r
1711.	card [kɑːd] — карточка (элемент интерфейса) (кард)\r
1712.	button [ˈbʌtn] — кнопка (батн)\r
1713.	navigation [ˌnævɪˈɡeɪʃn] — навигация (нэвигейшн)\r
1714.	menu [ˈmenjuː] — меню (менью)\r
1715.	footer [ˈfʊtə(r)] — подвал сайта / нижний колонтитул (футэ)\r
Блок 2: Традиционная живопись и материалы (Traditional Painting)\r
1716.	pigment [ˈpɪɡmənt] — пигмент (пигмэнт)\r
1717.	binder [ˈbaɪndə(r)] — связующее вещество (байндэ)\r
1718.	thinners (turpentine) [ˈθɪnəz] — разбавитель / скипидар (финэз)\r
1719.	varnish [ˈvɑːnɪʃ] — лак / покрывать лаком (варниш)\r
1720.	easel [ˈiːzl] — мольберт (изл)\r
1721.	palette knife [ˈpælət naɪf] — мастихин (пэлэт найф)\r
1722.	sketchbook [ˈsketʃbʊk] — скетчбук / альбом (скетчбук)\r
1723.	drawing [ˈdrɔːɪŋ] — рисунок (дроинъ)\r
1724.	study [ˈstʌdi] — этюд / проработка (стади)\r
1725.	impression [ɪmˈpreʃn] — впечатление (импрешн)\r
1726.	shading [ˈʃeɪdɪŋ] — штриховка / тушевка (шейдинъ)\r
1727.	natural light [ˈnætʃrəl laɪt] — естественный свет (нэчрэл лайт)\r
1728.	studio [ˈstjuːdiəʊ] — мастерская / студия (стьюдио)\r
1729.	exhibition [ˌeksɪˈbɪʃn] — выставка (эксибишн)\r
1730.	collection [kəˈlekʃn] — коллекция (коллекшн)\r
Блок 3: Программирование и работа с кодом (Coding & Syntax)\r
1731.	variable [ˈveəriəbl] — переменная (вээриэбл)\r
1732.	function [ˈfʌŋkʃn] — функция (фанкшн)\r
1733.	method [ˈmeθəd] — метод (мефэд)\r
1734.	class [klɑːs] — класс (клас)\r
1735.	object [ˈɒbdʒɪkt] — объект (обджикт)\r
1736.	string [strɪŋ] — строка (тип данных) (стринъ)\r
1737.	array (list) [əˈreɪ] — массив / список (эрей)\r
1738.	loop [luːp] — цикл (луп)\r
1739.	condition [kənˈdɪʃn] — условие (кондишн)\r
1740.	statement [ˈsteɪtmənt] — инструкция / оператор (стейтмэнт)\r
1741.	import [ɪmˈpɔːt] — импортировать (импорт)\r
1742.	library [ˈlaɪbrəri] — библиотека (кода) (лайбрари)\r
1743.	module [ˈmɒdjuːl] — модуль (модьюл)\r
1744.	console [kənˈsəʊl] — консоль (консоул)\r
1745.	output [ˈaʊtpʊt] — вывод данных (аутпут)\r
Блок 4: Комнатные растения и субстраты (Plant Care & Soil)\r
1746.	soil [sɔɪl] — почва / грунт (сойл)\r
1747.	root system [ruːt ˈsɪstəm] — корневая система (рут систэм)\r
1748.	sphagnum moss [ˈsfæɡnəm mɒs] — мох сфагнум (сфэгнэм мос)\r
1749.	diatomite [ˌdaɪəˈtɒmɪt] — диатомит (дайэтомит)\r
1750.	fertilizer [ˈfɜːtəlaɪzə(r)] — удобрение (фёртилайзэ)\r
1751.	mix (blend) [mɪks] — смесь / смешивать (микс)\r
1752.	moisture [ˈmɔɪstʃə(r)] — влага (мойстчэ)\r
1753.	pot [pɒt] — горшок (пот)\r
1754.	planter [ˈplɑːntə(r)] — кашпо (плантэ)\r
1755.	leaf [liːf] — лист (лиф)\r
1756.	leaves [liːvz] — листья (ливз)\r
1757.	stem [stem] — стебель / черешок (стем)\r
1758.	growth [ɡrəʊθ] — рост / развитие (гроуф)\r
1759.	pest [pest] — вредитель (пест)\r
1760.	water control [ˈwɔːtə kənˈtrəʊl] — контроль полива (уотэ контроул)\r
Блок 5: Съемка и монтаж видео (Video & Production)\r
1761.	shot [ʃɒt] — кадр / съемочный план (шот)\r
1762.	close-up [kləʊs ʌp] — крупный план (клоус ап)\r
1763.	frame [freɪm] — кадр / рамка (фрейм)\r
1764.	focus [ˈfəʊkəs] — фокус / наводить фокус (фоукэс)\r
1765.	record [rɪˈkɔːd] — записывать (рикорд)\r
1766.	playback [ˈpleɪbæk] — воспроизведение (плейбэк)\r
1767.	trim [trɪm] — обрезать (видео) (трим)\r
1768.	transition [trænˈzɪʃn] — переход (трэнзишн)\r
1769.	speed [spiːd] — скорость (спид)\r
1770.	fast forward [fɑːst ˈfɔːwəd] — ускоренная перемотка (фаст форвэд)\r
1771.	slow motion [sləʊ ˈməʊʃn] — замедленная съемка (слоу моушн)\r
1772.	audio track [ˈɔːdiəʊ træk] — аудиодорожка (одио трэк)\r
1773.	voiceover [ˈvɔɪsəʊvə(r)] — озвучка / закадровый голос (войсоувэ)\r
1774.	export settings [ɪkˈspɔːt ˈsetɪŋz] — настройки экспорта (экспорт сетинъз)\r
1775.	quality [ˈkwɒləti] — качество (куолити)\r
Блок 6: Кулинария и запекание (Cooking & Preparation)\r
1776.	recipe [ˈresəpi] — рецепт (рэсэпи)\r
1777.	bake [beɪk] — печь / запекать (бейк)\r
1778.	fry [fraɪ] — жарить (фрай)\r
1779.	boil [bɔɪl] — варить / кипеть (бойл)\r
1780.	mix [mɪks] — смешивать (микс)\r
1781.	stir [stɜː(r)] — помешивать (стёр)\r
1782.	slice [slaɪs] — ломтик / нарезать ломтиками (слайс)\r
1783.	sauce [sɔːs] — соус (сос)\r
1784.	dish [dɪʃ] — блюдо / тарелка (диш)\r
1785.	flavor (flavour) [ˈfleɪvə(r)] — вкус / аромат (флейвэ)\r
1786.	taste [teɪst] — вкус / пробовать (тейст)\r
1787.	sweet [swiːt] — сладкий (суит)\r
1788.	savory [ˈseɪvəri] — пикантный / соленый (сейвэри)\r
1789.	fresh [freʃ] — свежий (фреш)\r
1790.	snack [snæk] — закуска / перекус (снэк)\r
Блок 7: Полезные рабочие фразы и выражения (Workplace & Planning)\r
1791.	deadline [ˈdedlaɪn] — крайний срок / дедлайн (дедлайн)\r
1792.	project [ˈprɒdʒekt] — проект (дроджект)\r
1793.	stage [steɪdʒ] — этап / стадия (стейдж)\r
1794.	task [tɑːsk] — задача (таск)\r
1795.	step [step] — шаг (степ)\r
1796.	feedback [ˈfiːdbæk] — обратная связь / отзыв (фидбэк)\r
1797.	update [ˌʌpˈdeɪt] — обновление / обновлять (апдейт)\r
1798.	organize [ˈɔːɡənaɪz] — организовывать (органайз)\r
1799.	improve [ɪmˈpruːv] — улучшать (импрув)\r
1800.	achieve [əˈtʃiːv] — достигать (эчив)\r
Часть 9: Слова 1801–1900 уровня A2\r
Блок 1: Код, структуры данных и логика (Data & Code Logic)\r
1801.	data [ˈdeɪtə] — данные / информация (дейтэ)\r
1802.	value [ˈvæljuː] — значение (вэлью)\r
1803.	type [taɪp] — тип / печатать (тайп)\r
1804.	key [kiː] — ключ / ключевой (ки)\r
1805.	index [ˈɪndeks] — индекс / порядковый номер (индекс)\r
1806.	element [ˈelɪmənt] — элемент (элимэнт)\r
1807.	property [ˈprɒpəti] — свойство (пропэти)\r
1808.	condition [kənˈdɪʃn] — условие (кондишн)\r
1809.	statement [ˈsteɪtmənt] — оператор / утверждение (стейтмэнт)\r
1810.	event [ɪˈvent] — событие (ивент)\r
1811.	handler [ˈhændlə(r)] — обработчик (хэндлэ)\r
1812.	output [ˈaʊtpʊt] — вывод данных (аутпут)\r
1813.	input [ˈɪnpʊt] — ввод данных (инпут)\r
1814.	default [dɪˈfɔːlt] — по умолчанию (дифолт)\r
1815.	constant [ˈkɒnstənt] — константа / постоянная (констэнт)\r
Блок 2: Дизайн, иллюстрации и цвета (Illustration & Visuals)\r
1816.	stroke width [strəʊk wɪdtθ] — толщина линии/мазка (строук видф)\r
1817.	palette [ˈpælət] — палитра (пэлэт)\r
1818.	tone [təʊn] — тон / оттенок (тоун)\r
1819.	saturation [ˌsætʃəˈreɪʃn] — насыщенность (сэчэрейшн)\r
1820.	brightness [ˈbraɪtnəs] — яркость (брайтнэс)\r
1821.	sketch [sketʃ] — эскиз / набросок (скеч)\r
1822.	concept [ˈkɒnsept] — концепт / идея (концепт)\r
1823.	vector [ˈvektə(r)] — вектор (вектэ)\r
1824.	raster [ˈrɑːstə(r)] — растр (растэ)\r
1825.	brush size [brʌʃ saɪz] — размер кисти (браш сайз)\r
1826.	smoothness [ˈsmuːðnəs] — гладкость / плавность (смузнэс)\r
1827.	canvas [ˈkænvəs] — холст / рабочее поле (кэнвэс)\r
1828.	preview [ˈpriːvjuː] — предпросмотр (привью)\r
1829.	pattern [ˈpætn] — узор / паттерн (пэтн)\r
1830.	style guide [staɪl ɡaɪd] — гайд по стилю (стайл гайд)\r
Блок 3: Тестирование и отладка ПО (QA & Debugging)\r
1831.	issue [ˈɪʃuː] — проблема / задача в трекере (ишу)\r
1832.	defect [ˈdiːfekt] — дефект / баг (дифект)\r
1833.	priority [praɪˈɒrəti] — приоритет (прайорэти)\r
1834.	severity [sɪˈverəti] — критичность ошибки (сиверэти)\r
1835.	test case [test keɪs] — тест-кейс / тестовый сценарий (тест кейс)\r
1836.	suite [swiːt] — набор тестов (суит)\r
1837.	coverage [ˈkʌvərɪdʒ] — покрытие (тестами) (кавэридж)\r
1838.	expected [ɪkˈspektɪd] — ожидаемый (экспектид)\r
1839.	actual [ˈæktʃuəl] — фактический (эктчуэл)\r
1840.	reproduce [ˌriːprəˈdjuːs] — воспроизвести (ошибку) (рипрэдьюс)\r
1841.	status [ˈsteɪtəs] — статус / состояние (стейтэс)\r
1842.	resolution [ˌrezəˈluːʃn] — резолюция / решение (резэлюшн)\r
1843.	log file [lɒɡ faɪl] — файл логов (лог файл)\r
1844.	console error [kənˈsəʊl ˈerə(r)] — ошибка в консоли (консоул эрор)\r
1845.	assertion [əˈsɜːʃn] — проверка / утверждение (эсёршн)\r
Блок 4: Уход за комнатными растениями (Plants & Substrates)\r
1846.	bark [bɑːk] — кора (барк)\r
1847.	moss [mɒs] — мох (мос)\r
1848.	drainage hole [ˈdreɪnɪdʒ həʊl] — дренажное отверстие (дрейнидж хоул)\r
1849.	component [kəmˈpəʊnənt] — компонент смеси (компоунэнт)\r
1850.	mix ratio [mɪks ˈreɪʃiəʊ] — пропорция смеси (микс рейшио)\r
1851.	light level [laɪt ˈlevl] — уровень освещения (лайт левл)\r
1852.	full spectrum [fʊl ˈspektrəm] — полный спектр (фул спектрэм)\r
1853.	watering cord [ˈwɔːtərɪŋ kɔːd] — поливочный шнур / фитиль (уотэринъ корд)\r
1854.	pot size [pɒt saɪz] — размер горшка (пот сайз)\r
1855.	root rot [ruːt rɒt] — корневая гниль (рут рот)\r
1856.	humidity level [hjuːˈmɪdəti ˈlevl] — уровень влажности (хьюмидэти левл)\r
1857.	spray [spreɪ] — опрыскивать / спрей (спрей)\r
1858.	fertilize [ˈfɜːtəlaɪz] — удобрять (фёртилайз)\r
1859.	growth rate [ɡrəʊθ reɪt] — скорость роста (гроуф рейт)\r
1860.	indoor plant [ˈɪndɔː(r) plɑːnt] — комнатное растение (индор плант)\r
Блок 5: Контент, видео и соцсети (SMM & Video Creation)\r
1861.	carousel [ˌkærəˈsel] — карусель (слайд-пост) (карэсел)\r
1862.	slide [slaɪd] — слайд (слайд)\r
1863.	caption [ˈkæpʃn] — подпись к посту (кэпшн)\r
1864.	hashtag [ˈhæʃtæɡ] — хэштег (хэштэг)\r
1865.	engagement [ɪnˈɡeɪdʒmənt] — вовлеченность (ингейджмэнт)\r
1866.	reach [riːtʃ] — охват (рич)\r
1867.	view count [vjuː kaʊnt] — количество просмотров (вью каунт)\r
1868.	recording setup [rɪˈkɔːdɪŋ ˈsetʌp] — сетап для записи (рикординъ сетап)\r
1869.	lighting setup [ˈlaɪtɪŋ ˈsetʌp] — схема света (лайтинъ сетап)\r
1870.	audio quality [ˈɔːdiəʊ ˈkwɒləti] — качество звука (одио куолити)\r
1871.	export format [ɪkˈspɔːt ˈfɔːmæt] — формат экспорта (экспорт формат)\r
1872.	cover [ˈkʌvə(r)] — обложка (кавэ)\r
1873.	thumbnail [ˈθʌmneɪl] — миниатюра / превью (фамнейл)\r
1874.	content plan [ˈkɒntent plæn] — контент-план (контент плэн)\r
1875.	posting time [ˈpəʊstɪŋ taɪm] — время публикации (поустинъ тайм)\r
Блок 6: Ремонт и обустройство дома (Home Renovation)\r
1876.	tile size [taɪl saɪz] — размер плитки (тайл сайз)\r
1877.	floor area [flɔː(r) ˈeəriə] — площадь пола (флор эриа)\r
1878.	service rate [ˈsɜːvɪs reɪt] — стоимость услуги (сёрвис рейт)\r
1879.	workmanship [ˈwɜːkmənʃɪp] — мастерство / качество работы (уоркмэншип)\r
1880.	glue layer [ɡluː ˈleɪə(r)] — слой клея (глу лейэ)\r
1881.	leveling [ˈlevəlɪŋ] — выравнивание (левэлинъ)\r
1882.	surface prep [ˈsɜːfɪs prep] — подготовка поверхности (сёрфис преп)\r
1883.	corner [ˈkɔːnə(r)] — угол (корнэ)\r
1884.	gap [ɡæp] — зазор / щель (гэп)\r
1885.	measure [ˈmeʒə(r)] — измерять (межэ)\r
1886.	cut [kʌt] — резать / срез (кат)\r
1887.	grout [ɡraʊt] — затирка для швов (граут)\r
1888.	smooth finish [smuːð ˈfɪnɪʃ] — гладкая отделка (смуз финиш)\r
1889.	total cost [ˈtəʊtl kɒst] — общая стоимость (тоутл кост)\r
1890.	completion [kəmˈpliːʃn] — завершение работы (комплишн)\r
Блок 7: Полезные рабочие выражения (Action & State Verbs)\r
1891.	configure [kənˈfɪɡə(r)] — настраивать / конфигурировать (конфигэ)\r
1892.	optimize [ˈɒptɪmaɪz] — оптимизировать (оптимайз)\r
1893.	review [rɪˈvjuː] — делать обзор / проверять (ривью)\r
1894.	organize [ˈɔːɡənaɪz] — упорядочивать / организовывать (органайз)\r
1895.	define [dɪˈfaɪn] — определять / задавать (дифайн)\r
1896.	implement [ˈɪmplɪment] — внедрять / реализовывать (имплимент)\r
1897.	maintain [meɪnˈteɪn] — поддерживать / обслуживать (мейнтейн)\r
1898.	verify [ˈverɪfaɪ] — сверять / подтверждать (верифай)\r
1899.	transform [trænsˈfɔːm] — преобразовывать (трэнсформ)\r
1900.	achieve [əˈtʃiːv] — достигать / добиваться (эчив)\r
Часть 10: Слова 1901–2000 уровня A2\r
Блок 1: Программное обеспечение, среды и инструменты (IDE & Tools)\r
1901.	environment [ɪnˈvaɪrənmənt] — среда разработки / окружение (инвайронмэнт)\r
1902.	project structure [ˈprɒdʒekt ˈstrʌktʃə(r)] — структура проекта (проджект страктчэ)\r
1903.	workspace [ˈwɜːkspeɪs] — рабочее пространство (уоркспейс)\r
1904.	directory (folder) [dəˈrektəri] — директория / папка (директэри)\r
1905.	extension [ɪkˈstenʃn] — расширение (экстеншн)\r
1906.	plugin [ˈplʌɡɪn] — плагин / модуль (плагин)\r
1907.	shortcut [ˈʃɔːtkʌt] — сочетание клавиш / ярлык (шорткат)\r
1908.	terminal [ˈtɜːmɪnl] — терминал / командная строка (тёрминл)\r
1909.	path [pɑːθ] — путь к файлу (паф)\r
1910.	dependencies [dɪˈpendənsiz] — зависимости (дипендэнсиз)\r
1911.	package [ˈpækɪdʒ] — пакет / библиотека (пэкидж)\r
1912.	version [ˈvɜːʃn] — версия (вёршн)\r
1913.	update [ˌʌpˈdeɪt] — обновление / обновлять (апдейт)\r
1914.	install [ɪnˈstɔːl] — устанавливать (инстол)\r
1915.	reboot (restart) [ˌriːˈbuːt] — перезапускать (рибут)\r
Блок 2: Цифровая графика и верстка (Digital Graphics & Layout)\r
1916.	canvas scale [ˈkænvəs skeɪl] — масштаб холста (кэнвэсскейл)\r
1917.	resolution [ˌrezəˈluːʃn] — разрешение / чёткость (резэлюшн)\r
1918.	export options [ɪkˈspɔːt ˈɒpʃnz] — параметры экспорта (экспорт опшнз)\r
1919.	aspect ratio [ˈæspekt ˈreɪʃiəʊ] — соотношение сторон (аспект рейшио)\r
1920.	layer mask [ˈleɪə mɑːsk] — маска слоя (лейэ маск)\r
1921.	opacity [əʊˈpæsəti] — непрозрачность (оупасэти)\r
1922.	blend mode [blend məʊd] — режим наложения (бленд моуд)\r
1923.	brush preset [brʌʃ ˌpriːˈset] — пресет / кисть (браш присет)\r
1924.	color picker [ˈkʌlə ˈpɪkə(r)] — пипетка / выбор цвета (калэ пикэ)\r
1925.	gradient tool [ˈɡreɪdiənt tuːl] — инструмент градиента (грейдиэнт тул)\r
1926.	text tool [tekst tuːl] — инструмент текста (текст тул)\r
1927.	alignment [əˈlaɪnmənt] — выравнивание (элайнмэнт)\r
1928.	spacing [ˈspeɪsɪŋ] — интервал / отступ (спейсинъ)\r
1929.	visual balance [ˈvɪʒuəl ˈbæləns] — визуальный баланс (вижуэл бэлэнс)\r
1930.	portfolio piece [pɔːtˈfəʊliəʊ piːs] — работа в портфолио (портфолио пис)\r
Блок 3: Тестирование и качество кода (QA & Code Quality)\r
1931.	assertion [əˈsɜːʃn] — утверждение / проверять условие (эсёршн)\r
1932.	test runner [test ˈrʌnə(r)] — сбоpщик / запуск тестов (тест ранэ)\r
1933.	test scope [test skəʊp] — область тестирования (тест скоуп)\r
1934.	bug tracking [bʌɡ ˈtrækɪŋ] — отслеживание ошибок (баг трэкинъ)\r
1935.	reproducible [ˌriːprəˈdjuːsəbl] — воспроизводимый (рипрэдьюсэбл)\r
1936.	flaky test [ˈfleɪki test] — нестабильный тест (флейки тест)\r
1937.	execution [ˌeksɪˈkjuːʃn] — выполнение / запуск (эксикьюшн)\r
1938.	pass rate [pɑːs reɪt] — процент успешных тестов (пас рейт)\r
1939.	fail status [feɪl ˈsteɪtəs] — статус «не пройден» (фейл стейтэс)\r
1940.	log output [lɒɡ ˈaʊtpʊt] — вывод логов (лог аутпут)\r
1941.	integration [ˌɪntɪˈɡreɪʃn] — интеграция (интигрейшн)\r
1942.	functional [ˈfʌŋkʃənl] — функциональный (фанкшнл)\r
1943.	performance [pəˈfɔːməns] — производительность (пэрформэнс)\r
1944.	validation [ˌvælɪˈdeɪʃn] — валидация / проверка (вэлидейшн)\r
1945.	checklist [ˈtʃeklɪst] — чек-лист (чеклист)\r
Блок 4: Растения, субстраты и микроклимат (Plants & Climate)\r
1946.	pine bark [paɪn bɑːk] — сосновая кора (пайн барк)\r
1947.	sphagnum [ˈsfæɡnəm] — сфагнум (сфэгнэм)\r
1948.	zeolite [ˈziːəlaɪt] — цеолит (зиэлайт)\r
1949.	perlite [ˈpɜːlaɪt] — перлит (пёрлайт)\r
1950.	peat substrate [piːt ˈsʌbstreɪt] — торфяной субстрат (пит сабстрейт)\r
1951.	wick cord [wɪk kɔːd] — фитильный шнур (уик корд)\r
1952.	phytolamp [ˈfaɪtəʊlæmp] — фитолампа (файтоулэмп)\r
1953.	light spectrum [laɪt ˈspektrəm] — спектр света (лайт спектрэм)\r
1954.	potting mix [ˈpɒtɪŋ mɪks] — почвосмесь (потинъ микс)\r
1955.	drainage layer [ˈdreɪnɪdʒ ˈleɪə(r)] — дренажный слой (дрейнидж лейэ)\r
1956.	air flow [eə fləʊ] — движение воздуха / циркуляция (ээ флоу)\r
1957.	humidity level [hjuːˈmɪdəti ˈlevl] — уровень влажности (хьюмидэти левл)\r
1958.	repotting [ˌriːˈpɒtɪŋ] — пересадка (рипотинъ)\r
1959.	root growth [ruːt ɡrəʊθ] — рост корней (рут гроуф)\r
1960.	plant care [plɑːnt keə(r)] — уход за растениями (плант кеэ)\r
Блок 5: Съёмка, монтаж и контент (Content & Production)\r
1961.	tripod angle [ˈtraɪpɒd ˈæŋɡl] — угол штатива (трайпод энгл)\r
1962.	overhead shot [ˌəʊvərˈhed ʃɒt] — съёмка сверху (оувэрхед шот)\r
1963.	lesson format [ˈlesn ˈfɔːmæt] — формат урока (лессн формат)\r
1964.	video edit [ˈvɪdiəʊ ˈedɪt] — монтаж видео (видео эдит)\r
1965.	cut scene [kʌt siːn] — срез / скроенный кадр (кат син)\r
1966.	transitions [trænˈzɪʃnz] — переходы (трэнзишнз)\r
1967.	audio sync [ˈɔːdiəʊ sɪŋk] — синхронизация звука (одио синк)\r
1968.	cover image [ˈkʌvər ˈɪmɪdʒ] — обложка (кавэр имидж)\r
1969.	engagement rate [ɪnˈɡeɪdʒmənt reɪt] — уровень вовлечённости (ингейджмэнт рейт)\r
1970.	reach [riːtʃ] — охват (рич)\r
1971.	target audience [ˈtɑːɡɪt ˈɔːdiəns] — целевая аудитория (таргит одиэнс)\r
1972.	posting schedule [ˈpəʊstɪŋ ˈʃedjuːl] — график публикаций (поустинъ шедьюл)\r
1973.	carousel slides [ˌkærəˈsel slaɪdz] — слайды карусели (карэсел слайдз)\r
1974.	caption text [ˈkæpʃn tekst] — текст подписи (кэпшн текст)\r
1975.	visual feed [ˈvɪʒuəl fiːd] — визуальная лента (вижуэл фид)\r
Блок 6: Ремонт и работы в интерьере (Finishing & Renovation)\r
1976.	tile layout [taɪl ˈleɪaʊt] — раскладка плитки (тайл лейаут)\r
1977.	floor level [flɔː(r) ˈlevl] — уровень пола (флор левл)\r
1978.	tile size [taɪl saɪz] — размер плитки (тайл сайз)\r
1979.	adhesive mix [ədˈhiːsɪv mɪks] — клеевая смесь (эдхисив микс)\r
1980.	grout lines [ɡraʊt laɪnz] — затирочные швы (граут лайнз)\r
1981.	surface prep [ˈsɜːfɪs prep] — подготовка поверхности (сёрфис преп)\r
1982.	workmanship [ˈwɜːkmənʃɪp] — качество исполнения (уоркмэншип)\r
1983.	labor cost [ˈleɪbə kɒst] — стоимость работ (лейбэ кост)\r
1984.	measurement [ˈmeʒəmənt] — замер (межэмэнт)\r
1985.	corner joint [ˈkɔːnə dʒɔɪnt] — угловой стык (корнэ джойнт)\r
1986.	flat surface [flæt ˈsɜːfɪs] — ровная поверхность (флэт сёрфис)\r
1987.	durable material [ˈdjʊərəbl məˈtɪəriəl] — прочный материал (дьюрэбл матириал)\r
1988.	renovation plan [ˌrenəˈveɪʃn plæn] — план ремонта (ренэвейшн плэн)\r
1989.	estimate [ˈestɪmət] — смета (эстимэт)\r
1990.	final touch [ˈfaɪnl tʌtʃ] — финальный штрих (файнл тач)\r
Блок 7: Профессиональные и аналитические действия (Action Verbs A2+)\r
1991.	evaluate [ɪˈvæljueɪt] — оценивать / взвешивать (ивэльюэйт)\r
1992.	optimize [ˈɒptɪmaɪz] — оптимизировать (оптимайз)\r
1993.	configure [kənˈfɪɡə(r)] — настраивать (конфигэ)\r
1994.	implement [ˈɪmplɪment] — внедрять (имплимент)\r
1995.	analyze [ˈænəlaɪz] — анализировать (энэлайз)\r
1996.	adjust [əˈdʒʌst] — корректировать (эджаст)\r
1997.	structure [ˈstrʌktʃə(r)] — структурировать (страктчэ)\r
1998.	verify [ˈverɪfaɪ] — сверять (верифай)\r
1999.	transform [trænsˈfɔːm] — преобразовывать (трэнсформ)\r
2000.	accomplish [əˈkʌmplɪʃ] — завершать / выполнять (экамплиш)\r
\r
`,sh=`\r
УРОВЕНЬ B1 (Часть 1: 2001–2100)\r
Блок 1: Коммуникация и информация\r
2001.	message [ˈmesɪdʒ] — сообщение (месидж)\r
2002.	conversation [ˌkɒnvəˈseɪʃn] — разговор / беседа (конвэсэйшн)\r
2003.	opinion [əˈpɪnjən] — мнение (эпиньэн)\r
2004.	advice [ədˈvaɪs] — совет (эдвайс)\r
2005.	suggestion [səˈdʒestʃən] — предложение / совет (сэджестчэн)\r
2006.	discussion [dɪˈskʌʃn] — обсуждение (дискашн)\r
2007.	announcement [əˈnaʊnsmənt] — объявление (энаунсмэнт)\r
2008.	article [ˈɑːtɪkl] — статья (артикл)\r
2009.	information [ˌɪnfəˈmeɪʃn] — информация (инфэмейшн)\r
2010.	contact [ˈkɒntækt] — контакт / связываться (контэкт)\r
2011.	reply [rɪˈplaɪ] — ответ / отвечать (риплай)\r
2012.	express [ɪkˈspres] — выражать (экспрес)\r
2013.	explain [ɪkˈspleɪn] — объяснять (эксплейн)\r
2014.	describe [dɪˈskraɪb] — описывать (дискрайб)\r
2015.	mention [ˈmenʃn] — упоминать (меншн)\r
Блок 2: Город, места и сервисы\r
2016.	neighborhood [ˈneɪbəhʊd] — район / соседство (нейбэхуд)\r
2017.	suburb [ˈsʌbɜːb] — пригород (сабёрб)\r
2018.	facility [fəˈsɪləti] — объект / удобство / услуга (фэсилэти)\r
2019.	pavement (sidewalk) [ˈpeɪvmənt] — тротуар (пейвмэнт)\r
2020.	traffic light [ˈtræfɪk laɪt] — светофор (трэфик лайт)\r
2021.	crossroad [ˈkrɒsrəʊd] — перекресток (кросроуд)\r
2022.	pedestrian [pəˈdestriən] — пешеход (пэдэстриэн)\r
2023.	bus stop [bʌs stɒp] — автобусная остановка (бас стоп)\r
2024.	petrol station [ˈpetrəl ˈsteɪʃn] — заправка (пэтрэл стейшн)\r
2025.	post office [pəʊst ˈɒfɪs] — почтовое отделение (поуст офис)\r
2026.	pharmacy (chemist's) [ˈfɑːməsi] — аптека (фармаси)\r
2027.	library [ˈlaɪbrəri] — библиотека (лайбрари)\r
2028.	department store [dɪˈpɑːtmənt stɔː(r)] — универмаг (дипартмэнт стор)\r
2029.	market [ˈmɑːkɪt] — рынок (маркит)\r
2030.	police station [pəˈliːs ˈsteɪʃn] — полицейский участок (пэлис стейшн)\r
Блок 3: Повседневные действия и финансы\r
2031.	prepare [prɪˈpeə(r)] — готовить / подготавливать (припеэ)\r
2032.	organize [ˈɔːɡənaɪz] — организовывать (органайз)\r
2033.	arrange [əˈreɪndʒ] — устраивать / договариваться (эрейндж)\r
2034.	borrow [ˈbɒrəʊ] — брать взаймы (бороу)\r
2035.	lend [lend] — давать в долг (ленд)\r
2036.	spend [spend] — тратить (деньги/время) (спенд)\r
2037.	waste [weɪst] — тратить впустую (вейст)\r
2038.	save [seɪv] — сохранять / копить (сейв)\r
2039.	afford [əˈfɔːd] — позволить себе (финансово) (эфорд)\r
2040.	collect [kəˈlekt] — собирать / забирать (колект)\r
2041.	deliver [dɪˈlɪvə(r)] — доставлять (диливэ)\r
2042.	receive [rɪˈsiːv] — получать (рисив)\r
2043.	accept [əkˈsept] — принимать / соглашаться (аксепт)\r
2044.	refuse [rɪˈfjuːz] — отказываться (рифьюз)\r
2045.	decide [dɪˈsaɪd] — решать (дисайд)\r
Блок 4: Характер и эмоции\r
2046.	polite [pəˈlaɪt] — вежливый (пэлайт)\r
2047.	rude [ruːd] — грубый (руд)\r
2048.	honest [ˈɒnɪst] — честный (онист)\r
2049.	patient [ˈpeɪʃnt] — терпеливый (пейшнт)\r
2050.	lazy [ˈleɪzi] — ленивый (лейзи)\r
2051.	brave [breɪv] — смелый (брэйв)\r
2052.	smart [smɑːt] — умный / сообразительный (смарт)\r
2053.	friendly [ˈfrendli] — дружелюбный (френдли)\r
2054.	calm [kɑːm] — спокойный (кам)\r
2055.	nervous [ˈnɜːvəs] — нервный / волнующийся (нёвэс)\r
2056.	surprised [səˈpraɪzd] — удивленный (сэпрайзд)\r
2057.	upset [ˌʌpˈset] — расстроенный (апсет)\r
2058.	bored [bɔːd] — скучающий (борд)\r
2059.	confused [kənˈfjuːzd] — запутанный / растерянный (конфьюзд)\r
2060.	proud [praʊd] — гордый (прауд)\r
Блок 5: Ключевые глаголы и качества (2061–2100)\r
2061.	agree [əˈɡriː] — соглашаться (эгри)\r
2062.	disagree [ˌdɪsəˈɡriː] — не соглашаться (дисэгри)\r
2063.	allow [əˈlaʊ] — разрешать (элау)\r
2064.	forbid [fəˈbɪd] — запрещать (фэбид)\r
2065.	believe [bɪˈliːv] — верить / считать (билив)\r
2066.	forget [fəˈɡet] — забывать (фэгет)\r
2067.	remember [rɪˈmembə(r)] — помнить / вспоминать (римембэ)\r
2068.	remind [rɪˈmaɪnd] — напоминать (римайнд)\r
2069.	happen [ˈhæpən] — происходить (хэпэн)\r
2070.	seem [siːm] — казаться (сим)\r
2071.	mean [miːn] — означать / иметь в виду (мин)\r
2072.	understand [ˌʌndəˈstænd] — понимать (андэстэнд)\r
2073.	prefer [prɪˈfɜː(r)] — предпочитать (прифёр)\r
2074.	suggest [səˈdʒest] — предлагать (сэджест)\r
2075.	offer [ˈɒfə(r)] — предлагать (вещь, помощь) (офэ)\r
2076.	choose [tʃuːz] — выбирать (чуз)\r
2077.	compare [kəmˈpeə(r)] — сравнивать (компеэ)\r
2078.	continue [kənˈtɪnjuː] — продолжать (континью)\r
2079.	include [ɪnˈkluːd] — включать в себя (инклюд)\r
2080.	depend [dɪˈpend] — зависеть (дипенд)\r
2081.	important [ɪmˈpɔːtnt] — важный (импортнт)\r
2082.	necessary [ˈnesəsəri] — необходимый (нэсэсэри)\r
2083.	possible [ˈpɒsəbl] — возможный (посэбл)\r
2084.	impossible [ɪmˈpɒsəbl] — невозможный (импосэбл)\r
2085.	useful [ˈjuːsfl] — полезный (ьюсфл)\r
2086.	useless [ˈjuːsləs] — бесполезный (ьюслэс)\r
2087.	different [ˈdɪfrənt] — разный / другой (дифрэнт)\r
2088.	similar [ˈsɪmələ(r)] — похожий (симэлэ)\r
2089.	main [meɪn] — главный (мейн)\r
2090.	common [ˈkɒmən] — общий / частый (комэн)\r
2091.	available [əˈveɪləbl] — доступный (эвейлэбл)\r
2092.	suitable [ˈsuːtəbl] — подходящий (сьютэбл)\r
2093.	convenient [kənˈviːniənt] — удобный (по времени/месту) (конвиниэнт)\r
2094.	comfortable [ˈkʌmftəbl] — удобный (физически) (камфтэбл)\r
2095.	dangerous [ˈdeɪndʒərəs] — опасный (дейнджэрэс)\r
2096.	safe [seɪf] — безопасный (сейф)\r
2097.	expensive [ɪkˈspensɪv] — дорогой (експенсив)\r
2098.	cheap [tʃiːp] — дешевый (чип)\r
2099.	popular [ˈpɒpjələ(r)] — популярный (попьюлэ)\r
2100.	famous [ˈfeɪməs] — знаменитый (феймэс)\r
УРОВЕНЬ B1 (Часть 2: 2101–2200)\r
Блок 1: Покупки, одежда и внешний вид\r
2101.	receipt [rɪˈsiːt] — чек (рисит)\r
2102.	discount [ˈdɪskaʊnt] — скидка (дискаунт)\r
2103.	refund [ˈriːfʌnd] — возврат денег (рифанд)\r
2104.	exchange [ɪksˈtʃeɪndʒ] — обмен / обменивать (иксчейндж)\r
2105.	cashier [kæˈʃɪə(r)] — кассир (кэшиэ)\r
2106.	fitting room [ˈfɪtɪŋ ruːm] — примерочная (фитинъ рум)\r
2107.	fashionable [ˈfæʃnəbl] — модный (фэшнэбл)\r
2108.	suit [suːt] — костюм / подходить по стилю (сьют)\r
2109.	fit [fɪt] — подходить по размеру (фит)\r
2110.	match [mætʃ] — сочетаться по цвету/виду (мэтч)\r
2111.	jewellery [ˈdʒuːəlri] — украшения (джуэлри)\r
2112.	leather [ˈleðə(r)] — кожаный / кожа (лезэ)\r
2113.	cotton [ˈkɒtn] — хлопковый / хлопок (котн)\r
2114.	wool [wʊl] — шерсть (вул)\r
2115.	pattern [ˈpætn] — узор / шаблон (пэтн)\r
Блок 2: Здоровье, медицина и тело\r
2116.	appointment [əˈpɔɪntmənt] — запись (к врачу) (эпойнтмэнт)\r
2117.	prescription [prɪˈskrɪpʃn] — рецепт врача (прискрипшн)\r
2118.	symptom [ˈsɪmptəm] — симптом (симптом)\r
2119.	fever [ˈfiːvə(r)] — жар / температура (фивэ)\r
2120.	headache [ˈhedeɪk] — головная боль (хедэйк)\r
2121.	cough [kɒf] — кашель / кашлять (коф)\r
2122.	painkiller [ˈpeɪnkɪlə(r)] — обезболивающее (пейнкилэ)\r
2123.	treatment [ˈtriːtmənt] — лечение (тритмэнт)\r
2124.	recovery [rɪˈkʌvəri] — выздоровление (рикавэри)\r
2125.	injury [ˈɪndʒəri] — травма (инджэри)\r
2126.	bleed [bliːd] — кровоточить (блид)\r
2127.	dizzy [ˈdɪzi] — чувствующий головокружение (дизи)\r
2128.	cure [kjʊə(r)] — лекарство / исцелять (кьюэ)\r
2129.	disease [dɪˈziːz] — болезнь (дизиз)\r
2130.	patient [ˈpeɪʃnt] — пациент (пейшнт)\r
Блок 3: Путешествия и транспорт\r
2131.	destination [ˌdestɪˈneɪʃn] — пункт назначения (дэстинэйшн)\r
2132.	passenger [ˈpæsɪndʒə(r)] — пассажир (пэсинджэ)\r
2133.	delay [dɪˈleɪ] — задержка / откладывать (дилэй)\r
2134.	cancellation [ˌkænsəˈleɪʃn] — отмена (кэнсэлейшн)\r
2135.	luggage [ˈlʌɡɪdʒ] — багаж (лагидж)\r
2136.	boarding pass [ˈbɔːdɪŋ pɑːs] — посадочный талон (бординъ пас)\r
2137.	timetable [ˈtaɪmteɪbl] — расписание (таймтейбл)\r
2138.	fare [feə(r)] — стоимость проезда (феэ)\r
2139.	single ticket [ˈsɪŋɡl ˈtɪkɪt] — билет в один конец (сингл тикит)\r
2140.	return ticket [rɪˈtɜːn ˈtɪkɪt] — билет туда и обратно (ритёрн тикит)\r
2141.	accommodation [əˌkɒməˈdeɪʃn] — жилье / проживание (экомэдейшн)\r
2142.	reservation [ˌrezəˈveɪʃn] — бронирование (резэрвейшн)\r
2143.	sightseeing [ˈsaɪtsiːɪŋ] — осмотр достопримечательностей (сайтсиинъ)\r
2144.	guidebook [ˈɡaɪdbʊk] — путеводитель (гайдбук)\r
2145.	souvenir [ˌsuːvəˈnɪə(r)] — сувенир (сувэниэ)\r
Блок 4: Учеба и работа\r
2146.	assignment [əˈsaɪnmənt] — задание (эсайнмэнт)\r
2147.	deadline [ˈdedlaɪn] — крайний срок (дедлайн)\r
2148.	lecture [ˈlektʃə(r)] — лекция (лекчэ)\r
2149.	degree [dɪˈɡriː] — ученая степень / диплом (дигри)\r
2150.	qualification [ˌkwɒlɪfɪˈkeɪʃn] — квалификация (куолификейшн)\r
2151.	applicant [ˈæplɪkənt] — кандидат / соискатель (эпликэнт)\r
2152.	interview [ˈɪntəvjuː] — собеседование (интэвью)\r
2153.	experience [ɪkˈspɪəriəns] — опыт (экспириэнс)\r
2154.	salary [ˈsæləri] — оклад / зарплата (сэлэри)\r
2155.	promotion [prəˈməʊʃn] — повышение (прэмоушн)\r
2156.	colleague [ˈkɒliːɡ] — коллега (колиг)\r
2157.	employer [ɪmˈplɔɪə(r)] — работодатель (имплойэ)\r
2158.	employee [ɪmˈplɔɪiː] — работник / сотрудник (имплойи)\r
2159.	retire [rɪˈtaɪə(r)] — выходить на пенсию (ритайэ)\r
2160.	unemployed [ˌʌnɪmˈplɔɪd] — безработный (анимплойд)\r
Блок 5: Прилагательные и глаголы действия (2161–2200)\r
2161.	anxious [ˈæŋkʃəs] — тревожный (энкшэс)\r
2162.	embarrassed [ɪmˈbærəst] — смущенный (имбэрэст)\r
2163.	disappointed [ˌdɪsəˈpɔɪntɪd] — разочарованный (дисэпойнтид)\r
2164.	exhausted [ɪɡˈzɔːstɪd] — обессиленный (игзостид)\r
2165.	confident [ˈkɒnfɪdənt] — уверенный (конфидэнт)\r
2166.	reliable [rɪˈlaɪəbl] — надежный (рилайэбл)\r
2167.	sensible [ˈsensəbl] — разумный / здравый (сэнсэбл)\r
2168.	sensitive [ˈsensətɪv] — чувствительный (сэнсэтив)\r
2169.	stubborn [ˈstʌbən] — упрямый (стабэн)\r
2170.	jealous [ˈdʒeləs] — ревнивый / завистливый (джелэс)\r
2171.	achieve [əˈtʃiːv] — достигать (эчив)\r
2172.	avoid [əˈvɔɪd] — избегать (эвойд)\r
2173.	consider [kənˈsɪdə(r)] — обдумывать / считать (консидэ)\r
2174.	expect [ɪkˈspekt] — ожидать (экспект)\r
2175.	improve [ɪmˈpruːv] — улучшать (импрув)\r
2176.	manage [ˈmænɪdʒ] — справляться / управлять (мэнидж)\r
2177.	prevent [prɪˈvent] — предотвращать (привэнт)\r
2178.	require [rɪˈkwaɪə(r)] — требовать (рикуайэ)\r
2179.	protect [prəˈtekt] — защищать (прэтект)\r
2180.	solve [sɒlv] — решать (проблему) (солв)\r
2181.	accurate [ˈækjərət] — точный (экьюрэт)\r
2182.	ancient [ˈeɪnʃənt] — древний (ейншэнт)\r
2183.	annual [ˈænjuəl] — ежегодный (эньюэл)\r
2184.	automatic [ˌɔːtəˈmætɪk] — автоматический (ортомэтик)\r
2185.	essential [ɪˈsenʃl] — жизненно важный (эсеншл)\r
2186.	extreme [ɪkˈstriːm] — крайний / экстремальный (экстрим)\r
2187.	familiar [fəˈmɪliə(r)] — знакомый (фэмилиэ)\r
2188.	frequent [ˈfriːkwənt] — частый (фрикуэнт)\r
2189.	general [ˈdʒenrəl] — общий (дженрэл)\r
2190.	international [ˌɪntəˈnæʃnəl] — международный (интэнэшнл)\r
2191.	modern [ˈmɒdn] — современный (модн)\r
2192.	natural [ˈnætʃrəl] — естественный / природный (нэтчрэл)\r
2193.	ordinary [ˈɔːdnri] — обычный (однри)\r
2194.	particular [pəˈtɪkjələ(r)] — конкретный (пэтикьюлэ)\r
2195.	private [ˈpraɪvət] — частный / личный (прайвэт)\r
2196.	public [ˈpʌblɪk] — общественный (паблик)\r
2197.	recent [ˈriːsnt] — недавний (риснт)\r
2198.	regular [ˈreɡjələ(r)] — регулярный (регьюлэ)\r
2199.	temporary [ˈtemprəri] — временный (тэмпрэри)\r
2200.	traditional [trəˈdɪʃənl] — традиционный (трэдишнл)\r
УРОВЕНЬ B1 (Часть 3: 2201–2300)\r
Блок 1: Дом, быт и техника\r
2201.	appliance [əˈplaɪəns] — бытовой прибор (эплайэнс)\r
2202.	maintenance [ˈmeɪntənəns] — техобслуживание / уход (мейнтинэнс)\r
2203.	electricity [ɪˌlekˈtrɪsəti] — электричество (электрисити)\r
2204.	central heating [ˈsentrəl ˈhiːtɪŋ] — центральное отопление (сэнтрэл хитинъ)\r
2205.	plumber [ˈplʌmə(r)] — сантехник (пламэ)\r
2206.	leak [liːk] — утечка / протекать (лик)\r
2207.	repair [rɪˈpeə(r)] — ремонт / чинить (рипеэ)\r
2208.	landlord [ˈlændlɔːd] — арендодатель (лэндлорд)\r
2209.	tenant [ˈtenənt] — арендатор / жилец (тенэнт)\r
2210.	rent [rent] — арендная плата / снимать (рент)\r
2211.	furniture [ˈfɜːnɪtʃə(r)] — мебель (фёрничэ)\r
2212.	curtain [ˈkɜːtn] — штора (кётн)\r
2213.	duvet [ˈduːveɪ] — одеяло (дувей)\r
2214.	pillow [ˈpɪləʊ] — подушка (пилоу)\r
2215.	balcony [ˈbælkəni] — балкон (бэлкэни)\r
Блок 2: Погода и экология\r
2216.	forecast [ˈfɔːkɑːst] — прогноз погоды (форкаст)\r
2217.	humidity [hjuːˈmɪdəti] — влажность (хьюмидэти)\r
2218.	thunderstorm [ˈθʌndəstɔːm] — гроза (фандэсторм)\r
2219.	breeze [briːz] — легкий ветерок (бриз)\r
2220.	climate change [ˈklaɪmət tʃeɪndʒ] — изменение климата (клаймэт чейндж)\r
2221.	pollution [pəˈluːʃn] — загрязнение (пэлюшн)\r
2222.	recycling [ˌriːˈsaɪklɪŋ] — переработка отходов (рисайклинъ)\r
2223.	environment [ɪnˈvaɪrənmənt] — окружающая среда (инвайронмэнт)\r
2224.	renewable [rɪˈnjuːəbl] — возобновляемый (риньюэбл)\r
2225.	flood [flʌd] — наводнение (флад)\r
2226.	drought [draʊt] — засуха (драут)\r
2227.	earthquake [ˈɜːθkweɪk] — землетрясение (ёрфквейк)\r
2228.	disaster [dɪˈzɑːstə(r)] — катастрофа (дизастэ)\r
2229.	protect [prəˈtekt] — защищать (прэтект)\r
2230.	survive [səˈvaɪv] — выживать (сэвайв)\r
Блок 3: Еда и общепит\r
2231.	ingredient [ɪnˈɡriːdiənt] — ингредиент (ингридиэнт)\r
2232.	recipe [ˈresəpi] — рецепт (рэсэпи)\r
2233.	bill [bɪl] — счет в ресторане (бил)\r
2234.	tip [tɪp] — чаевые (тип)\r
2235.	starter [ˈstɑːtə(r)] — закуска (статэ)\r
2236.	main course [meɪn kɔːs] — основное блюдо (мейн корс)\r
2237.	dessert [dɪˈzɜːt] — десерт (дизёрт)\r
2238.	beverage [ˈbevərɪdʒ] — напиток (бэвэридж)\r
2239.	vegetarian [ˌvedʒəˈteəriən] — вегетарианский (веджитээриэн)\r
2240.	delicious [dɪˈlɪʃəs] — вкусный (дилишэс)\r
2241.	spicy [ˈspaɪsi] — острый (спайси)\r
2242.	sour [ˈsaʊə(r)] — кислый (сауэ)\r
2243.	bitter [ˈbɪtə(r)] — горький (битэ)\r
2244.	baked [beɪkt] — запеченный (бейкт)\r
2245.	boiled [bɔɪld] — вареный (бойлд)\r
Блок 4: Технологии и медиа\r
2246.	device [dɪˈvaɪs] — устройство (дивайс)\r
2247.	charger [ˈtʃɑːdʒə(r)] — зарядник (чаджэ)\r
2248.	wireless [ˈwaɪələs] — беспроводной (уайэлэс)\r
2249.	connection [kəˈnekʃn] — соединение (конэкшн)\r
2250.	password [ˈpɑːswɜːd] — пароль (пасуорд)\r
2251.	settings [ˈsetɪŋz] — настройки (сетинъз)\r
2252.	attachment [əˈtætʃmənt] — вложение в письмо (этэчмэнт)\r
2253.	download [ˌdaʊnˈləʊd] — скачивать (даунлоуд)\r
2254.	upload [ˌʌpˈləʊd] — загружать в сеть (аплоуд)\r
2255.	software [ˈsɒftweə(r)] — программное обеспечение (софтвээ)\r
2256.	screen [skriːn] — экран (скрин)\r
2257.	keyboard [ˈkiːbɔːd] — клавиатура (киборд)\r
2258.	delete [dɪˈliːt] — удалять (дилит)\r
2259.	search engine [sɜːtʃ ˈendʒɪn] — поисковик (сёрч энджин)\r
2260.	privacy [ˈprɪvəsi] — конфиденциальность (привэси)\r
Блок 5: Общество, закон и общие понятия (2261–2300)\r
2261.	crime [kraɪm] — преступление (крайм)\r
2262.	witness [ˈwɪtnəs] — свидетель (уитнэс)\r
2263.	victim [ˈvɪktɪm] — жертва (виктим)\r
2264.	lawyer [ˈlɔːjə(r)] — юрист (лойэ)\r
2265.	court [kɔːt] — суд (корт)\r
2266.	fine [faɪn] — штраф (файн)\r
2267.	theft [θeft] — кража (фефт)\r
2268.	safety [ˈseɪfti] — безопасность (сейфти)\r
2269.	emergency [ɪˈmɜːdʒənsi] — чрезвычайная ситуация (имёрджэнси)\r
2270.	society [səˈsaɪəti] — общество (сосайэти)\r
2271.	government [ˈɡʌvənmənt] — правительство (гавэнмэнт)\r
2272.	election [ɪˈlekʃn] — выборы (илекшн)\r
2273.	population [ˌpɒpjuˈleɪʃn] — население (попьюлейшн)\r
2274.	culture [ˈkʌltʃə(r)] — культура (калтчэ)\r
2275.	tradition [trəˈdɪʃn] — традиция (трэдишн)\r
2276.	charity [ˈtʃærəti] — благотворительность (чэрэти)\r
2277.	volunteer [ˌvɒlənˈtɪə(r)] — волонтер (волэнтиэ)\r
2278.	apologize [əˈpɒlədʒaɪz] — извиняться (эполэджайз)\r
2279.	complain [kəmˈpleɪn] — жаловаться (комплейн)\r
2280.	convince [kənˈvɪns] — убеждать (конвинс)\r
2281.	interrupt [ˌɪntəˈrʌpt] — перебивать (интэрапт)\r
2282.	warn [wɔːn] — предупреждать (уорн)\r
2283.	confirm [kənˈfɜːm] — подтверждать (конфёрм)\r
2284.	cancel [ˈkænsl] — отменять (кэнсл)\r
2285.	postpone [pəʊstˈpəʊn] — откладывать (поустпоун)\r
2286.	inform [ɪnˈfɔːm] — информировать (информ)\r
2287.	request [rɪˈkwest] — запрашивать (риквест)\r
2288.	provide [prəˈvaɪd] — предоставлять (прэвайд)\r
2289.	urgent [ˈɜːdʒənt] — срочный (ёрджэнт)\r
2290.	current [ˈkʌrənt] — текущий (карэнт)\r
2291.	previous [ˈpriːviəs] — предыдущий (привиэс)\r
2292.	following [ˈfɒləʊɪŋ] — следующий (фолоуинъ)\r
2293.	additional [əˈdɪʃənl] — дополнительный (эдишнл)\r
2294.	average [ˈævərɪdʒ] — средний (эвэридж)\r
2295.	entire [ɪnˈtaɪə(r)] — целый / весь (интайэ)\r
2296.	equal [ˈiːkwəl] — равный (икуэл)\r
2297.	main [meɪn] — главный (мейн)\r
2298.	rare [reə(r)] — редкий (реэ)\r
2299.	similar [ˈsɪmələ(r)] — похожий (симэлэ)\r
2300.	total [ˈtəʊtl] — общий / итоговый (тоутл)\r
Продолжаем! Ниже — следующая крупная порция уровня B1 (2301–2600).\r
УРОВЕНЬ B1 (Часть 4: 2301–2400)\r
Блок 1: Город, транспорт и ориентация на местности\r
2301.	roundabout [ˈraʊndəbaʊt] — кольцевое движение (раундабаут)\r
2302.	traffic jam [ˈtræfɪk dʒæm] — дорожная пробка (трэфик джэм)\r
2303.	intersection [ˌɪntəˈsekʃn] — перекресток (интэсекшн)\r
2304.	route [ruːt] — маршрут (рут)\r
2305.	directions [dəˈrekʃnz] — указания пути / маршрут (дирекшнз)\r
2306.	public transport [ˈpʌblɪk ˈtrænspɔːt] — общественный транспорт (паблик трэнспорт)\r
2307.	underground (metro/subway) [ˈʌndəɡraʊnd] — метро (андэграунд)\r
2308.	platform [ˈplætfɔːm] — платформа / перрон (плэтформ)\r
2309.	ticket machine [ˈtɪkɪt məˈʃiːn] — автомат по продаже билетов (тикит мэшин)\r
2310.	conductor [kənˈdʌktə(r)] — кондуктор (кондактэ)\r
2311.	lost and found [lɒst ənd faʊnd] — бюро находок (лост энд фаунд)\r
2312.	corner [ˈkɔːnə(r)] — угол (корнэ)\r
2313.	straight ahead [streɪt əˈhed] — прямо вперед (стрейт эхед)\r
2314.	opposite [ˈɒpəzɪt] — напротив (опозит)\r
2315.	nearby [ˌnɪəˈbaɪ] — поблизости (ниэбай)\r
Блок 2: Магазины, покупки и возврат\r
2316.	bargain [ˈbɑːɡən] — выгодная покупка / сделка (багэн)\r
2317.	in stock [ɪn stɒk] — в наличии (ин сток)\r
2318.	out of stock [aʊt əv stɒk] — нет в наличии (аут ов сток)\r
2319.	guarantee (warranty) [ˌɡærənˈtiː] — гарантия (гэрэнти)\r
2320.	delivery fee [dɪˈlɪvəri fiː] — стоимость доставки (диливэри фи)\r
2321.	payment method [ˈpeɪmənt ˈmeθəd] — способ оплаты (пеймэнт мефэд)\r
2322.	checkout [ˈtʃekaʊt] — касса / оформление заказа (чекаут)\r
2323.	customer service [ˈkʌstəmə ˈsɜːvɪs] — служба поддержки клиентов (кастэмэ сёрвис)\r
2324.	trolley (cart) [ˈtrɒli] — тележка для покупок (троли)\r
2325.	basket [ˈbɑːskɪt] — корзина (баскит)\r
2326.	sales assistant [seɪlz əˈsɪstənt] — продавец-консультант (сейлз эсистэнт)\r
2327.	price tag [praɪs tæɡ] — ценник (прайс тэг)\r
2328.	self-service [self ˈsɜːvɪs] — самообслуживание (селф сёрвис)\r
2329.	wrap [ræp] — заворачивать / упаковывать (рэп)\r
2330.	order [ˈɔːdə(r)] — заказ / зазывать (ордэ)\r
Блок 3: Чувства, эмоции и особенности характера\r
2331.	relieved [rɪˈliːvd] — испытывающий облегчение (риливд)\r
2332.	patience [ˈpeɪʃns] — терпение (пейшнс)\r
2333.	generous [ˈdʒenərəs] — щедрый (дженирэс)\r
2334.	curious [ˈkjʊəriəs] — любопытный (кьюриэс)\r
2335.	mood [muːd] — настроение (муд)\r
2336.	cheerful [ˈtʃɪəfl] — веселый / жизнерадостный (чиэфл)\r
2337.	miserable [ˈmɪzrəbl] — несчастный / жалкий (мизрэбл)\r
2338.	frightened [ˈfraɪtnd] — испуганный (фрайтнд)\r
2339.	lonely [ˈləʊnli] — одинокий (лоунли)\r
2340.	furious [ˈfjʊəriəs] — разъяренный (фьюриэс)\r
2341.	jealousy [ˈdʒeləsi] — ревность / зависть (джелэси)\r
2342.	sympathy [ˈsɪmpəθi] — сочувствие (симпэфи)\r
2343.	praise [preɪz] — хвалить / похвала (прейз)\r
2344.	blame [bleɪm] — винить / вина (блейм)\r
2345.	forgive [fəˈɡɪv] — прощать (фэгив)\r
Блок 4: Общение и социальное взаимодействие\r
2346.	relationship [rɪˈleɪʃnʃɪp] — отношения (рилейшншип)\r
2347.	acquaintance [əˈkweɪntəns] — знакомый / знакомство (эквейнтэнс)\r
2348.	stranger [ˈstreɪndʒə(r)] — незнакомец (стрейнджэ)\r
2349.	guest [ɡest] — гость (гест)\r
2350.	host [həʊst] — хозяин (принимающий гостей) (хоуст)\r
2351.	gathering [ˈɡæðərɪŋ] — встреча / собрание (гэзэринъ)\r
2352.	invitation [ˌɪnvɪˈteɪʃn] — приглашение (инвитэйшн)\r
2353.	celebration [ˌselɪˈbreɪʃn] — празднование (селибрэйшн)\r
2354.	congratulate [kənˈɡrætʃuleɪt] — поздравлять (конгрэчулейт)\r
2355.	introduce [ˌɪntrəˈdjuːs] — знакомить / представлять (интрэдьюс)\r
2356.	welcome [ˈwelkəm] — приветствовать (велкэм)\r
2357.	farewell [ˌfeəˈwel] — прощание (феэвел)\r
2358.	support [səˈpɔːt] — поддержка / поддерживать (сэпорт)\r
2359.	trust [trʌst] — доверие / доверять (траст)\r
2360.	respect [rɪˈspekt] — уважение / уважать (риспект)\r
Блок 2361–2400: Повседневные действия и состояния\r
2361.	attract [əˈtrækt] — привлекать (этрэкт)\r
2362.	belong [bɪˈlɒŋ] — принадлежать (билонъ)\r
2363.	contain [kənˈteɪn] — содержать в себе (контейн)\r
2364.	exist [ɪɡˈzɪst] — существовать (игзист)\r
2365.	fit [fɪt] — подходить по размеру (фит)\r
2366.	include [ɪnˈkluːd] — включать (инклюд)\r
2367.	involve [ɪnˈvɒlv] — вовлекать / включать в себя (инволв)\r
2368.	matter [ˈmætə(r)] — иметь значение (мэтэ)\r
2369.	measure [ˈmeʒə(r)] — измерять (межэ)\r
2370.	notice [ˈnəʊtɪs] — замечать (ноутис)\r
2371.	realize [ˈriːəlaɪz] — осознавать (риэлайз)\r
2372.	recognize [ˈrekəɡnaɪz] — узнавать (кого-то/что-то) (рекэгнайз)\r
2373.	suppose [səˈpəʊz] — предполагать (сэпоуз)\r
2374.	wonder [ˈwʌndə(r)] — интересоваться / удивляться (вандэ)\r
2375.	appear [əˈpɪə(r)] — появляться / казаться (эпиэ)\r
2376.	disappear [ˌdɪsəˈpɪə(r)] — исчезать (дисэпиэ)\r
2377.	damage [ˈdæmɪdʒ] — повреждать / ущерб (дэмидж)\r
2378.	destroy [dɪˈstrɔɪ] — уничтожать (дистрой)\r
2379.	drop [drɒp] — ронять / капля (дроп)\r
2380.	fall [fɔːl] — падать (фол)\r
2381.	fill [fɪl] — наполнять (фил)\r
2382.	fix [fɪks] — чинить / фиксировать (фикс)\r
2383.	hold [həʊld] — держать (хоулд)\r
2384.	join [dʒɔɪn] — присоединяться (джойн)\r
2385.	knock [nɒk] — стучать (нок)\r
2386.	lift [lɪft] — поднимать (лифт)\r
2387.	pack [pæk] — упаковывать (пэк)\r
2388.	press [pres] — нажимать (прес)\r
2389.	pull [pʊl] — тянуть на себя (пул)\r
2390.	push [pʊʃ] — толкать от себя (пуш)\r
2391.	raise [reɪz] — поднимать (что-то) (рейз)\r
2392.	reach [riːtʃ] — достигать / добираться (рич)\r
2393.	shake [ʃeɪk] — трясти / трястись (шейк)\r
2394.	shut [ʃʌt] — закрывать (шат)\r
2395.	touch [tʌtʃ] — трогать / касаться (тач)\r
2396.	turn [tɜːn] — поворачивать (тёрн)\r
2397.	brief [briːf] — краткий (бриф)\r
2398.	broad [brɔːd] — широкий (брод)\r
2399.	deep [diːp] — глубокий (дип)\r
2400.	flat [flæt] — плоский / ровный (флэт)\r
УРОВЕНЬ B1 (Часть 5: 2401–2500)\r
Блок 1: Образование и академическая жизнь\r
2401.	coursework [ˈkɔːswɜːk] — курсовая работа (корсуорк)\r
2402.	seminar [ˈsemɪnɑː(r)] — семинар (семинар)\r
2403.	scholarship [ˈskɒləʃɪp] — стипендия (сколэшип)\r
2404.	research [rɪˈsɜːtʃ] — исследование (рисёрч)\r
2405.	certificate [səˈtɪfɪkət] — сертификат / свидетельство (сэртификэт)\r
2406.	revision [rɪˈvɪʒn] — повторение материала (ривижн)\r
2407.	tutor [ˈtjuːtə(r)] — репетитор / преподаватель (тьютэ)\r
2408.	attendance [əˈtendəns] — посещаемость (этэндэнс)\r
2409.	subject [ˈsʌbdʒɪkt] — учебный предмет (сабджект)\r
2410.	term [tɜːm] — семестр / триместр (тёрм)\r
2411.	timetable [ˈtaɪmteɪbl] — расписание занятий (таймтейбл)\r
2412.	knowledge [ˈnɒlɪdʒ] — знания (нолидж)\r
2413.	skill [skɪl] — навык / умение (скил)\r
2414.	ability [əˈbɪləti] — способность (эбилэти)\r
2415.	progress [ˈprəʊɡres] — прогресс / успехи (прогрес)\r
Блок 2: Погода, география и природные явления\r
2416.	shower [ˈʃaʊə(r)] — кратковременный дождь (шауэ)\r
2417.	foggy [ˈfɒɡi] — туманный (фоги)\r
2418.	stormy [ˈstɔːmi] — штормовой / бурный (сторми)\r
2419.	freezing [ˈfriːzɪŋ] — ледяной / очень холодный (фризинъ)\r
2420.	mild [maɪld] — мягкий (о погоде) (майлд)\r
2421.	ocean [ˈəʊʃn] — океан (оушн)\r
2422.	valley [ˈvæli] — долина (вэли)\r
2423.	coast [kəʊst] — побережье (коуст)\r
2424.	island [ˈaɪlənd] — остров (айлэнд)\r
2425.	desert [ˈdezət] — пустыня (дезэт)\r
2426.	jungle [ˈdʒʌŋɡl] — джунгли (джангл)\r
2427.	waterfall [ˈwɔːtəfɔːl] — водопад (уотэфол)\r
2428.	cave [keɪv] — пещера (кейв)\r
2429.	soil [sɔɪl] — почва / грунт (сойл)\r
2430.	wildlife [ˈwaɪldlaɪf] — дикая природа (уайлдлайф)\r
Блок 3: Еда, кулинария и рестораны\r
2431.	service included [ˈsɜːvɪs ɪnˈkluːdɪd] — обслуживание включено (сёрвис инклюдид)\r
2432.	allergic to [əˈlɜːdʒɪk tə] — аллергия на... (элёрджик ту)\r
2433.	raw [rɔː] — сырой (ро)\r
2434.	salty [ˈsɔːlti] — соленый (соли)\r
2435.	sweet [swiːt] — сладкий (суит)\r
2436.	fresh [freʃ] — свежий (фреш)\r
2437.	frozen [ˈfrəʊzn] — замороженный (фроузн)\r
2438.	roast [rəʊst] — жареный в духовке (роуст)\r
2439.	fried [fraɪd] — жареный на сковороде (фрайд)\r
2440.	grilled [ɡrɪld] — приготовленный на гриле (грилд)\r
2441.	steam [stiːm] — готовить на пару / пар (стим)\r
2442.	chop [tʃɒp] — нарезать / нашинковать (чоп)\r
2443.	slice [slaɪs] — резать ломтиками (слайс)\r
2444.	mix [mɪks] — смешивать (микс)\r
2445.	stir [stɜː(r)] — помешивать (стёр)\r
Блок 4: Досуг, культура и развлечения\r
2446.	leisure time [ˈleʒə taɪm] — свободное время (лежэ тайм)\r
2447.	exhibition [ˌeksɪˈbɪʃn] — выставка (эксибишн)\r
2448.	performance [pəˈfɔːməns] — представление / выступление (пэрформэнс)\r
2449.	audience [ˈɔːdiəns] — зрители / публика (одиэнс)\r
2450.	ticket office [ˈtɪkɪt ˈɒfɪs] — билетная касса (тикит офис)\r
2451.	review [rɪˈvjuː] — отзыв / рецензия (ривью)\r
2452.	plot [plɒt] — сюжет (плот)\r
2453.	character [ˈkærəktə(r)] — персонаж (кэрэктэ)\r
2454.	subtitles [ˈsʌbtaɪtlz] — субтитры (сабтайтлз)\r
2455.	dubbed [dʌbd] — дублированный (о фильме) (дабд)\r
Блок 2456–2500: Технологии и общество\r
2456.	notifications [ˌnəʊtɪfɪˈkeɪʃnz] — уведомления (ноутификейшнз)\r
2457.	police officer [pəˈliːs ˈɒfɪsə(r)] — полицейский (пэлис офисэ)\r
2458.	equality [iˈkwɒləti] — равенство (икуолити)\r
2459.	poverty [ˈpɒvəti] — бедность (повэти)\r
2460.	narrow [ˈnærəʊ] — узкий (нэроу)\r
2461.	wide [waɪd] — широкий (уайд)\r
2462.	thick [θɪk] — толстый / плотный (фик)\r
2463.	thin [θɪn] — тонкий (фин)\r
2464.	heavy [ˈhevi] — тяжелый (хеви)\r
2465.	light [laɪt] — легкий (лайт)\r
2466.	smooth [smuːð] — гладкий (смуз)\r
2467.	rough [rʌf] — шершавый / грубый (раф)\r
2468.	soft [sɒft] — мягкий (софт)\r
2469.	hard [hɑːd] — твердый / жесткий (хард)\r
2470.	bright [braɪt] — яркий (брайт)\r
2471.	dark [dɑːk] — темный (дарк)\r
2472.	empty [ˈempti] — пустой (емпти)\r
2473.	full [fʊl] — полный (фул)\r
2474.	loud [laʊd] — громкий (лауд)\r
2475.	quiet [ˈkwaɪət] — тихий (куайэт)\r
2476.	sharp [ʃɑːp] — острый (шарп)\r
2477.	untidy [ʌnˈtaɪdi] — неопрятный / неубранный (антайди)\r
2478.	neat [niːt] — аккуратный / опрятный (нит)\r
2479.	tight [taɪt] — тесный / обтягивающий (тайт)\r
2480.	loose [luːs] — свободный / широкой (лус)\r
2481.	dull [dʌl] — скучный / тусклый (дал)\r
2482.	lively [ˈlaɪvli] — оживленный / оживленно (лайвли)\r
2483.	peaceful [ˈpiːsfl] — мирный / спокойный (писфл)\r
2484.	noisy [ˈnɔɪzi] — шумный (нойзи)\r
2485.	crowded [ˈkraʊdɪd] — переполненный людьми (краудид)\r
2486.	ancient [ˈeɪnʃənt] — древний (ейншэнт)\r
2487.	modern [ˈmɒdn] — современный (модн)\r
2488.	valuable [ˈvæljuəbl] — ценный (вэльюэбл)\r
2489.	worthless [ˈwɜːθləs] — бесполезный / не имеющий ценности (уёрфлэс)\r
2490.	huge [hjuːdʒ] — огромный (хьюдж)\r
2491.	tiny [ˈtaɪni] — крошечный (тайни)\r
2492.	enormous [ɪˈnɔːməs] — громадный (энормэс)\r
2493.	slight [slaɪt] — незначительный (слайт)\r
2494.	major [ˈmeɪdʒə(r)] — крупный / главный (мейджэ)\r
2495.	minor [ˈmaɪnə(r)] — незначительный / мелкий (майнэ)\r
2496.	pleasant [ˈpleznt] — приятный (плезнт)\r
2497.	unpleasant [ʌnˈpleznt] — неприятный (анплезнт)\r
2498.	proper [ˈprɒpə(r)] — надлежащий / правильный (пропэ)\r
2499.	improper [ɪmˈprɒpə(r)] — ненадлежащий (импропэ)\r
2500.	fair [feə(r)] — справедливый (феэ)\r
УРОВЕНЬ B1 (Часть 6: 2501–2600)\r
Блок 1: Деловое общение и документы\r
2501.	inquiry [ɪnˈkwaɪəri] — запрос / расспрос (инкуайэри)\r
2502.	response [rɪˈspɒns] — ответ (риспонс)\r
2503.	confirmation [ˌkɒnfəˈmeɪʃn] — подтверждение (конфэрмейшн)\r
2504.	proposal [prəˈpəʊzl] — предложение / проект (прэпоузл)\r
2505.	agreement [əˈɡriːmənt] — соглашение / договор (эгримэнт)\r
2506.	contract [ˈkɒntrækt] — контракт (конктрэкт)\r
2507.	terms and conditions [tɜːmz ənd kənˈdɪʃnz] — условия и положения (тёрмз энд кондишнз)\r
2508.	invoice [ˈɪnvɔɪs] — счет на оплату (инвойс)\r
2509.	payment terms [ˈpeɪmənt tɜːmz] — условия оплаты (пеймэнт тёрмз)\r
2510.	schedule [ˈʃedjuːl] — график / расписание (шедьюл)\r
2511.	meeting room [ˈmiːtɪŋ ruːm] — переговорная (митинъ рум)\r
2512.	agenda [əˈdʒendə] — повестка дня (эджендэ)\r
2513.	minutes of meeting [ˈmɪnɪts əv ˈmiːtɪŋ] — протокол встречи (минитс ов митинъ)\r
2514.	presentation [ˌpreznˈteɪʃn] — презентация (презэнтэйшн)\r
2515.	feedback [ˈfiːdbæk] — обратная связь (фидбэк)\r
Блок 2: Коммунальные услуги и дом\r
2516.	utility bills [juːˈtɪləti bɪlz] — коммунальные платежи (ютилэти билз)\r
2517.	heating [ˈhiːtɪŋ] — отопление (хитинъ)\r
2518.	water supply [ˈwɔːtə səˈplaɪ] — водоснабжение (уотэ сэплай)\r
2519.	garbage collection [ˈɡɑːbɪdʒ kəˈlekʃn] — вывоз мусора (гарбидж колэкшн)\r
2520.	repair work [rɪˈpeə wɜːk] — ремонтные работы (рипеэ уорк)\r
2521.	maintenance fee [ˈmeɪntənəns fiː] — плата за обслуживание (мейнтивэнс фи)\r
2522.	appliance repair [əˈplaɪəns rɪˈpeə(r)] — ремонт бытовой техники (эплайэнс рипеэ)\r
2523.	plumbing [ˈplʌmɪŋ] — водопровод / сантехника (пламинъ)\r
2524.	electrician [ɪˌlekˈtrɪʃn] — электрик (электришн)\r
2525.	locksmith [ˈlɒksmɪθ] — слесарь / мастер по замкам (локсмиф)\r
2526.	rent payment [rent ˈpeɪmənt] — арендная плата (рент пеймэнт)\r
2527.	deposit [dɪˈpɒzɪt] — залог / депозит (дипозит)\r
2528.	lease agreement [liːs əˈɡriːmənt] — договор аренды (лис эгримэнт)\r
2529.	housemate [ˈhaʊsmeɪt] — сосед по дому (хаусмейт)\r
2530.	neighbourhood [ˈneɪbəhʊd] — окружение / микрорайон (нейбэхуд)\r
Блок 3: Аэропорт и гостиницы\r
2531.	check-in desk [tʃek ɪn desk] — стойка регистрации (чек ин деск)\r
2532.	hand luggage [hænd ˈlʌɡɪdʒ] — ручная кладь (хэнд лагидж)\r
2533.	excess baggage [ɪkˈses ˈlʌɡɪdʒ] — перевес багажа (иксес лагидж)\r
2534.	flight attendant [flaɪt əˈtendənt] — бортпроводник (флайт этэндэнт)\r
2535.	gate number [ɡeɪt ˈnʌmbə(r)] — номер выхода на посадку (гейт намбэ)\r
2536.	layover (stopover) [ˈleɪəʊvə(r)] — пересадка / остановка (лейоувэ)\r
2537.	currency exchange [ˈkʌrənsi ɪksˈtʃeɪndʒ] — обмен валюты (карэнси иксчейндж)\r
2538.	hotel lobby [həʊˈtel ˈlɒbi] — холл отеля (хоутел лоби)\r
2539.	room service [ruːm ˈsɜːvɪs] — обслуживание номеров (рум сёрвис)\r
2540.	single room [ˈsɪŋɡl ruːm] — одноместный номер (сингл рум)\r
2541.	double room [ˈdʌbl ruːm] — номер с двуспальной кроватью (дабл рум)\r
2542.	twin room [twɪn ruːm] — номер с двумя кроватями (твин рум)\r
2543.	shuttle bus [ˈʃʌtl bʌs] — трансферный автобус (шатл бас)\r
2544.	sightseeing tour [ˈsaɪtsiːɪŋ tʊə(r)] — экскурсия (сайтсиинъ тур)\r
2545.	tour guide [tʊə ɡaɪd] — экскурсовод (тур гайд)\r
Блок 2546–2600: Финансы, интернет и медицинская помощь\r
2546.	emergency room [ɪˈmɜːdʒənsi ruːm] — отделение скорой помощи (имёрджэнси рум)\r
2547.	ambulance [ˈæmbjələns] — машина скорой помощи (эмбьюлэнс)\r
2548.	first aid kit [fɜːst eɪd kɪt] — аптечка первой помощи (фёрст эйд кит)\r
2549.	bandage [ˈbændɪdʒ] — бинт / повязка (бэндидж)\r
2550.	ointment [ˈɔɪntmənt] — мазь (оинтмэнт)\r
2551.	side effects [saɪd ɪˈfekts] — побочные эффекты (сайд ифектс)\r
2552.	dosage [ˈdəʊsɪdʒ] — дозировка (доусидж)\r
2553.	appointment card [əˈpɔɪntmənt kɑːd] — талон на прием (эпойнтмэнт кард)\r
2554.	medical history [ˈmedɪkl ˈhɪstri] — медицинская карта (медикл хистри)\r
2555.	health insurance [helθ ɪnˈʃʊərəns] — медицинская страховка (хелф иншурэнс)\r
2556.	cash payment [kæʃ ˈpeɪmənt] — оплата наличными (кэш пеймэнт)\r
2557.	card payment [kɑːd ˈpeɪmənt] — оплата картой (кард пеймэнт)\r
2558.	contactless [ˈkɒntæktləs] — бесконтактная оплата (контэктлэс)\r
2559.	transaction [trænˈzækʃn] — транзакция / перевод (трэнзэкшн)\r
2560.	bank statement [bæŋk ˈsteɪtmənt] — выписка со счета (бэнк стейтмэнт)\r
2561.	transfer fee [ˈtrænsfɜː fiː] — комиссия за перевод (трэнсфёр фи)\r
2562.	savings account [ˈseɪvinɡz əˈkaʊnt] — сберегательный счет (сейвинъз экаунт)\r
2563.	credit limit [ˈkredɪt ˈlɪmɪt] — кредитный лимит (кредит лимит)\r
2564.	exchange rate [ɪksˈtʃeɪndʒ reɪt] — курс обмена (иксчейндж рейт)\r
2565.	PIN code [pɪn kəʊd] — ПИН-код (пин коуд)\r
2566.	browser tab [ˈbraʊzə tæb] — вкладка браузера (браузэ тэб)\r
2567.	user account [ˈjuːzər əˈkaʊnt] — аккаунт пользователя (ьюзэр экаунт)\r
2568.	privacy policy [ˈprɪvəsi ˈpɒləsi] — политика конфиденциальности (привэси полэси)\r
2569.	terms of service [tɜːmz əv ˈsɜːvɪs] — условия использования (тёрмз ов сёрвис)\r
2570.	cloud storage [klaʊd ˈstɔːrɪdʒ] — облачное хранилище (клауд сторидж)\r
2571.	file format [faɪl ˈfɔːmæt] — формат файла (файл формат)\r
2572.	software update [ˈsɒftweə ˌʌpˈdeɪt] — обновление ПО (софтвээ апдейт)\r
2573.	error message [ˈerə ˈmesɪdʒ] — сообщение об ошибке (эрорэ месидж)\r
2574.	technical support [ˈteknɪkl səˈpɔːt] — техническая поддержка (текникал сэпорт)\r
2575.	resolve [rɪˈzɒlv] — решать (проблему) (ризолв)\r
2576.	permanent [ˈpɜːmənənt] — постоянный (пёрмэнэнт)\r
2577.	unavailable [ˌʌnəˈveɪləbl] — недоступный (анэвейлэбл)\r
2578.	rare [reə(r)] — редкий (реэ)\r
2579.	particular [pəˈtɪkjələ(r)] — конкретный (пэтикьюлэ)\r
2580.	solve [sɒlv] — находить решение (солв)\r
2581.	cause [kɔːz] — причина / вызывать (коз)\r
2582.	effect [ɪˈfekt] — эффект / следствие (ифект)\r
2583.	result [rɪˈzʌlt] — результат (ризалт)\r
2584.	purpose [ˈpɜːpəs] — цель (пёрпэс)\r
2585.	reason [ˈriːzn] — причина / повод (ризн)\r
2586.	goal [ɡəʊl] — цель / задача (гоул)\r
2587.	aim [eɪm] — стремиться / цель (ейм)\r
2588.	fact [fækt] — факт (фэкт)\r
2589.	truth [truːθ] — правда (труф)\r
2590.	lie [laɪ] — ложь / врать (лай)\r
2591.	secret [ˈsiːkrət] — секрет (сикрэт)\r
2592.	mystery [ˈmɪstri] — тайна (мистри)\r
2593.	chance [tʃɑːns] — шанс (чанс)\r
2594.	opportunity [ˌɒpəˈtjuːnəti] — возможность (опэтьюнэти)\r
2595.	risk [rɪsk] — риск (риск)\r
2596.	threat [θret] — угроза (фрет)\r
2597.	solution [səˈluːʃn] — решение (сэлюшн)\r
2598.	choice [tʃɔɪs] — выбор (чойс)\r
2599.	option [ˈɒpʃn] — вариант (опшн)\r
2600.	possibility [ˌpɒsəˈbɪləti] — возможность / вероятность (посэбилэти)\r
УРОВЕНЬ B1 (Часть 7: 2601–2700)\r
Блок 1: Погода, природа и геометрия\r
2601.	frost [frɒst] — мороз / иней (фрост)\r
2602.	hail [heɪl] — град (хейл)\r
2603.	heatwave [ˈhiːtweɪv] — период сильной жары (хитвейв)\r
2604.	lightning [ˈlaɪtnɪŋ] — молния (лайтнинъ)\r
2605.	thunder [ˈθʌndə(r)] — гром (гандэ)\r
2606.	sunshine [ˈsʌnʃaɪn] — солнечный свет (саншайн)\r
2607.	shade [ʃeɪd] — тень (от солнца) (шейд)\r
2608.	shadow [ˈʃædəʊ] — тень (контур объекта) (шэдоу)\r
2609.	stream [striːm] — ручей / поток (стрим)\r
2610.	shore [ʃɔː(r)] — берег (моря, озера) (шор)\r
2611.	cliff [klɪf] — утес / скала (клиф)\r
2612.	slope [sləʊp] — склон / уклонение (слоуп)\r
2613.	peak [piːk] — вершина (горы) (пик)\r
2614.	flat surface [flæt ˈsɜːfɪs] — плоская поверхность (флэт сёрфис)\r
2615.	curve [kɜːv] — изгиб / кривая (кёрв)\r
Блок 2: Описание внешности и предметов\r
2616.	pale [peɪl] — бледный (пейл)\r
2617.	tanned [tænd] — загорелый (тэнд)\r
2618.	slim [slɪm] — стройный (слим)\r
2619.	plump [plʌmp] — пухлый (пламп)\r
2620.	overweight [ˌəʊvəˈweɪt] — с избыточным весом (оувэвейт)\r
2621.	wrinkled [ˈrɪŋkld] — морщинистый (ринклд)\r
2622.	bearded [ˈbɪədɪd] — бородатый (биэдид)\r
2623.	bald [bɔːld] — лысый (болд)\r
2624.	dyed [daɪd] — окрашенный (о волосах) (дайд)\r
2625.	curly [ˈkɜːli] — кудрявый (кёрли)\r
2626.	wavy [ˈweɪvi] — волнистый (вейви)\r
2627.	straight [streɪt] — прямой (стрейт)\r
2628.	pointed [ˈpɔɪntɪd] — заостренный (пойнтид)\r
2629.	oval [ˈəʊvl] — овальный (оувл)\r
2630.	square [skweə(r)] — квадратный (сквээ)\r
Блок 3: Здоровье, образ жизни и самочувствие\r
2631.	exhaustion [ɪɡˈzɔːstʃən] — истощение / упадок сил (игзостчэн)\r
2632.	insomnia [ɪnˈsɒmniə] — бессонница (инсомниэ)\r
2633.	indigestion [ˌɪndɪˈdʒestʃən] — несварение (индиджестчэн)\r
2634.	infection [ɪnˈfekʃn] — инфекция (инфекшн)\r
2635.	virus [ˈvaɪrəs] — вирус (вайрэс)\r
2636.	allergy [ˈælədʒi] — аллергия (элэджи)\r
2637.	swelling [ˈswelɪŋ] — отек / припухлость (свелинъ)\r
2638.	bruise [bruːz] — синяк / ушиб (бруз)\r
2639.	sprain [spreɪn] — растяжение связок (спрейн)\r
2640.	fracture [ˈfræktʃə(r)] — перелом (фрэктчэ)\r
2641.	faint [feɪnt] — падать в обморок (фейнт)\r
2642.	sneeze [sniːz] — чихать (сниз)\r
2643.	vomit [ˈvɒmɪt] — тошнить / рвать (вомит)\r
2644.	bleed [bliːd] — кровоточить (блид)\r
2645.	heal [hiːl] — заживать / исцелять (хил)\r
Блок 4: Профессии и занятость\r
2646.	accountant [əˈkaʊntənt] — бухгалтер (экаунтэнт)\r
2647.	architect [ˈɑːkɪtekt] — архитектор (аркитект)\r
2648.	chef [ʃef] — шеф-повар (шеф)\r
2649.	dentist [ˈdentɪst] — стоматолог (дентист)\r
2650.	engineer [ˌendʒɪˈnɪə(r)] — инженер (енджиниэ)\r
2651.	journalist [ˈdʒɜːnəlɪst] — журналист (жёрналист)\r
2652.	mechanic [məˈkænɪk] — механик (мэкэник)\r
2653.	pharmacist [ˈfɑːməsɪst] — фармацевт (фармасист)\r
2654.	photographer [fəˈtɒɡrəfə(r)] — фотограф (фэтографэ)\r
2655.	pilot [ˈpaɪlət] — пилот (пайлэт)\r
2656.	plumber [ˈplʌmə(r)] — сантехник (пламэ)\r
2657.	psychologist [saɪˈkɒlədʒɪst] — психолог (сайколаджист)\r
2658.	receptionist [rɪˈsepʃənɪst] — администратор (рисепшэнист)\r
2659.	surgeon [ˈsɜːdʒən] — хирург (сёрджэн)\r
2660.	veterinarian (vet) [ˌvetərɪˈneəriən] — ветеринар (вэтэринээриэн)\r
Блок 2661–2700: Общественные процессы и право\r
2661.	justice [ˈdʒʌstɪs] — справедливость / правосудие (джастис)\r
2662.	injustice [ɪnˈdʒʌstɪs] — несправедливость (инджастис)\r
2663.	legal [ˈliːɡl] — законный / легальный (лигл)\r
2664.	illegal [ɪˈliːɡl] — незаконный (илигл)\r
2665.	punishment [ˈpʌnɪʃmənt] — наказание (панишмэнт)\r
2666.	guilty [ˈɡɪlti] — виновный (гилти)\r
2667.	innocent [ˈɪnəsnt] — невиновный (инэснт)\r
2668.	suspect [ˈsʌspekt] — подозреваемый (саспект)\r
2669.	investigation [ɪnˌvestɪˈɡeɪʃn] — расследование (инвестигейшн)\r
2670.	proof [pruːf] — доказательство (пруф)\r
2671.	evidence [ˈevɪdəns] — улика / показания (эвидэнс)\r
2672.	trial [ˈtraɪəl] — судебный процесс (трайэл)\r
2673.	judge [dʒʌdʒ] — судья (джадж)\r
2674.	jury [ˈdʒʊəri] — присяжные (джуэри)\r
2675.	verdict [ˈvɜːdɪkt] — вердикт (вёрдикт)\r
2676.	prison [ˈprɪzn] — тюрьма (призн)\r
2677.	cell [sel] — камера (в тюрьме) (сел)\r
2678.	escape [ɪˈskeɪp] — побег / сбегать (искейп)\r
2679.	robbery [ˈrɒbəri] — ограбление (робэри)\r
2680.	burglary [ˈbɜːɡləri] — кража со взломом (бёглэри)\r
2681.	smuggling [ˈsmʌɡlɪŋ] — контрабанда (смаглинъ)\r
2682.	bribe [braɪb] — взятка (брайб)\r
2683.	blackmail [ˈblækmeɪl] — шантаж (блэкмейл)\r
2684.	kidnapping [ˈkɪdnæpɪŋ] — похищение человека (киднэпинъ)\r
2685.	arson [ˈɑːsn] — поджог (арсн)\r
2686.	fraud [frɔːd] — мошенничество (фрод)\r
2687.	forgery [ˈfɔːdʒəri] — подделка (фоджэри)\r
2688.	vandalism [ˈvændəlɪzm] — вандализм (вэндэлизм)\r
2689.	assault [əˈsɔːlt] — нападение (эсолт)\r
2690.	threaten [ˈθretn] — угрожать (фретн)\r
2691.	arrest [əˈrest] — арестовывать (эрест)\r
2692.	charge [tʃɑːdʒ] — предъявлять обвинение (чадж)\r
2693.	sentence [ˈsentəns] — приговор / приговаривать (сентэнс)\r
2694.	confess [kənˈfes] — признаваться (конфес)\r
2695.	deny [dɪˈnaɪ] — отрицать (динай)\r
2696.	defense [dɪˈfens] — защита (дифенс)\r
2697.	prosecution [ˌprɒsɪˈkjuːʃn] — обвинение (сторона в суде) (просикьюшн)\r
2698.	claim [kleɪm] — утверждать / заявление (клейм)\r
2699.	appeal [əˈpiːl] — апелляция / подавать апелляцию (эпил)\r
2700.	release [rɪˈliːs] — освобождать (рилис)\r
УРОВЕНЬ B1 (Часть 8: 2701–2800)\r
Блок 1: Отпуск, бронирование и туры\r
2701.	itinerary [aɪˈtɪnərəri] — маршрут поездки (айтинэрэри)\r
2702.	excursion [ɪkˈskɜːʃn] — экскурсия (экскёршн)\r
2703.	resort [rɪˈzɔːt] — курорт (ризорт)\r
2704.	peak season [piːk ˈsiːzn] — разгар сезона (пик сизн)\r
2705.	off-peak [ˌɒf ˈpiːk] — вне сезона (оф пик)\r
2706.	vacancy [ˈveɪkənsi] — свободный номер / вакансия (вейкэнси)\r
2707.	full board [fʊl bɔːd] — полный пансион (3-разовое питание) (фул борд)\r
2708.	half board [hɑːf bɔːd] — полупансион (хаф борд)\r
2709.	self-catering [ˌself ˈkeɪtərɪŋ] — без питания (самообслуживание) (селф кейтэринъ)\r
2710.	deposit [dɪˈpɒzɪt] — предоплата / залог (дипозит)\r
2711.	cancellation fee [ˌkænsəˈleɪʃn fiː] — штраф за отмену (кэнсэлейшн фи)\r
2712.	complimentary [ˌkɒmplɪˈmentri] — бесплатный / предоставленный в подарок (комплиментри)\r
2713.	amenities [əˈmiːnətiz] — удобства (в отеле) (эминитиз)\r
2714.	shuttle [ˈʃʌtl] — трансфер (шатл)\r
2715.	sightseeing bus [ˈsaɪtsiːɪŋ bʌs] — экскурсионный автобус (сайтсиинъ бас)\r
Блок 2: Покупки, стиль и мерчендайзинг\r
2716.	fitting [ˈfɪtɪŋ] — примерка (фитинъ)\r
2717.	alteration [ˌɔːltəˈreɪʃn] — подгонка одежды (олтэрейшн)\r
2718.	textile [ˈtekstaɪl] — текстиль / ткань (текстайл)\r
2719.	synthetic [sɪnˈθetɪk] — синтетический (синфетик)\r
2720.	waterproof [ˈwɔːtəpruːf] — водонепроницаемый (уотэпруф)\r
2721.	durable [ˈdjʊərəbl] — прочный / долговечный (дьюрэбл)\r
2722.	brand [brænd] — бренд / марка (брэнд)\r
2723.	trend [trend] — тенденция / тренд (тренд)\r
2724.	outfit [ˈaʊtfɪt] — комплект одежды / наряд (аутфит)\r
2725.	accessory [əkˈsesəri] — аксессуар (аксесэри)\r
2726.	footwear [ˈfʊtweə(r)] — обувь (футвээ)\r
2727.	size tag [saɪz tæɡ] — ярлык с размером (сайз тэг)\r
2728.	clearance [ˈklɪərəns] — распродажа (клиэрэнс)\r
2729.	voucher [ˈvaʊtʃə(r)] — ваучер / купон (ваучэ)\r
2730.	purchase [ˈpɜːtʃəs] — покупка / покупать (пёрчэс)\r
Блок 3: Компьютеры, программы и интерфейс\r
2731.	application (app) [ˌæplɪˈkeɪʃn] — приложение (эпликейшн)\r
2732.	database [ˈdeɪtəbeɪs] — база данных (дейтэбейс)\r
2733.	folder [ˈfəʊldə(r)] — папка (фоулдэ)\r
2734.	shortcut [ˈʃɔːtkʌt] — ярлык / горячая клавиша (шорткат)\r
2735.	browser [ˈbraʊzə(r)] — браузер (браузэ)\r
2736.	network [ˈnetwɜːk] — сеть (нетуорк)\r
2737.	storage [ˈstɔːrɪdʒ] — накопитель / память (сторидж)\r
2738.	backup [ˈbækʌp] — резервная копия (бэкап)\r
2739.	security [sɪˈkjʊərəti] — безопасность (сикьюрэти)\r
2740.	virus protection [ˈvaɪrəs prəˈtekʃn] — антивирусная защита (вайрэс прэтекшн)\r
2741.	reboot [ˌriːˈbuːt] — перезагружать (рибут)\r
2742.	install [ɪnˈstɔːl] — устанавливать (инстол)\r
2743.	uninstall [ˌʌnɪnˈstɔːl] — удалять программу (анинстол)\r
2744.	upgrade [ˌʌpˈɡreɪd] — обновлять / улучшать (апгрейд)\r
2745.	crash [kræʃ] — сбой / вылетать (о программе) (крэш)\r
Блок 4: Чувства, абстрактные свойства и состояния\r
2746.	ambition [æmˈbɪʃn] — амбиция / стремление (эмбишн)\r
2747.	confidence [ˈkɒnfɪdəns] — уверенность (конфидэнс)\r
2748.	courage [ˈkʌrɪdʒ] — мужество / смелость (каридж)\r
2749.	creativity [ˌkriːeɪˈtɪvəti] — творческий подход (криэйтивити)\r
2750.	curiosity [ˌkjʊəriˈɒsəti] — любопытство (кьюриосити)\r
2751.	enthusiasm [ɪnˈθjuːziæzm] — энтузиазм (инфьюзиэзм)\r
2752.	flexibility [ˌfleksəˈbɪləti] — гибкость (флексэбилити)\r
2753.	generosity [ˌdʒenəˈrɒsəti] — щедрость (дженэросити)\r
2754.	honesty [ˈɒnəsti] — честность (онэсти)\r
2755.	kindness [ˈkaɪndnəs] — доброта (кайнднэс)\r
2756.	loyalty [ˈlɔɪəlti] — верность / преданность (лойэлти)\r
2757.	patience [ˈpeɪʃns] — терпение (пейшнс)\r
2758.	reliability [rɪˌlaɪəˈbɪləti] — надежность (рилайэбилити)\r
2759.	wisdom [ˈwɪzdəm] — мудрость (уиздэм)\r
2760.	modesty [ˈmɒdɪsti] — скромность (модисти)\r
Блок 2761–2800: Логические связи, мышление и сравнение\r
2761.	analyze [ˈænəlaɪz] — анализировать (энэлайз)\r
2762.	assume [əˈsjuːm] — предполагать (эсьюм)\r
2763.	calculate [ˈkælkjuleɪt] — рассчитывать (кэлькулейт)\r
2764.	conclude [kənˈkluːd] — делать вывод (конклюд)\r
2765.	confirm [kənˈfɜːm] — подтверждать (конфёрм)\r
2766.	convince [kənˈvɪns] — убеждать (конвинс)\r
2767.	define [dɪˈfaɪn] — давать определение (дифайн)\r
2768.	demonstrate [ˈdemənstreɪt] — демонстрировать (демэнстрейт)\r
2769.	estimate [ˈestɪmeɪt] — оценивать (приблизительно) (эстимейт)\r
2770.	evaluate [ɪˈvæljueɪt] — оценивать (качество) (ивэльюэйт)\r
2771.	identify [aɪˈdentɪfaɪ] — идентифицировать (айдентифай)\r
2772.	illustrate [ˈɪləstreɪt] — иллюстрировать / пояснять (илэстрейт)\r
2773.	indicate [ˈɪndɪkeɪt] — указывать (индикейт)\r
2774.	interpret [ɪnˈtɜːprət] — интерпретировать (интёрпрэт)\r
2775.	predict [prɪˈdɪkt] — предсказывать (придикт)\r
2776.	prove [pruːv] — доказывать (прув)\r
2777.	reflect [rɪˈflekt] — отражать / размышлять (рифлект)\r
2778.	summarize [ˈsʌməraɪz] — подводить итог (самэрайз)\r
2779.	verify [ˈverɪfaɪ] — проверять / верифицировать (верифай)\r
2780.	clarify [ˈklærəfaɪ] — прояснять (клэрэфай)\r
2781.	logical [ˈlɒdʒɪkl] — логичный (лоджикл)\r
2782.	rational [ˈræʃnəl] — рациональный (рэшнл)\r
2783.	sensible [ˈsensəbl] — разумный (сэнсэбл)\r
2784.	absurd [əbˈsɜːd] — абсурдный (абсёрд)\r
2785.	complex [ˈkɒmpleks] — сложный / составной (комплекс)\r
2786.	simple [ˈsɪmpl] — простой (симпл)\r
2787.	obvious [ˈɒbviəs] — очевидный (обвиэс)\r
2788.	vague [veɪɡ] — неясный / смутный (вейг)\r
2789.	precise [prɪˈsaɪs] — точный (присайс)\r
2790.	approximate [əˈprɒksɪmət] — приблизительный (эпроксимэт)\r
2791.	relevant [ˈreləvənt] — уместный / имеющий отношение (рэлэвэнт)\r
2792.	irrelevant [ɪˈreləvənt] — неуместный (ирэлэвэнт)\r
2793.	essential [ɪˈsenʃl] — существенный (эсеншл)\r
2794.	secondary [ˈsekəndri] — второстепенный (секандри)\r
2795.	significant [sɪɡˈnɪfɪkənt] — значительный (сигнификэнт)\r
2796.	insignificant [ˌɪnsɪɡˈnɪfɪkənt] — незначительный (инсигнификэнт)\r
2797.	permanent [ˈpɜːmənənt] — постоянный (пёрмэнэнт)\r
2798.	temporary [ˈtemprəri] — временный (тэмпрэри)\r
2799.	constant [ˈkɒnstənt] — постоянный / непрерывный (констэнт)\r
2800.	variable [ˈveəriəbl] — переменный (вээриэбл)\r
УРОВЕНЬ B1 (Часть 9: 2801–2900)\r
Блок 1: Повседневные заботы и домашние дела\r
2801.	chore [tʃɔː(r)] — работа по дому (чор)\r
2802.	laundry [ˈlɔːndri] — стирка / белье (лондри)\r
2803.	ironing [ˈaɪənɪŋ] — глажка (айэнинъ)\r
2804.	dusting [ˈdʌstɪŋ] — вытирание пыли (дастинъ)\r
2805.	vacuuming [ˈvækjʊəmɪŋ] — уборка пылесосом (вэкьюэминъ)\r
2806.	mop [mɒp] — мыть шваброй / швабра (моп)\r
2807.	disinfect [ˌdɪsɪnˈfekt] — дезинфицировать (дизинфект)\r
2808.	stain [steɪn] — пятно (стейн)\r
2809.	bleach [bliːtʃ] — отбеливатель (блич)\r
2810.	detergent [dɪˈtɜːdʒənt] — моющее средство (дитёрджэнт)\r
2811.	sponge [spʌndʒ] — губка (спандж)\r
2812.	broom [bruːm] — метла / веник (брум)\r
2813.	dustpan [ˈdʌstpæn] — совок для мусора (дастпэн)\r
2814.	trash can [ˈtræʃ kæn] — мусорное ведро (трэш кэн)\r
2815.	clogged [klɒɡd] — засорившийся (клогд)\r
Блок 2: Питание, кулинария и диета\r
2816.	nutrition [njuˈtrɪʃn] — питание (ньютришн)\r
2817.	calories [ˈkæləriz] — калории (кэлэриз)\r
2818.	protein [ˈprəʊtiːn] — белок (проутин)\r
2819.	carbohydrate [ˌkɑːbəʊˈhaɪdreɪt] — углевод (карбохайдрейт)\r
2820.	fat [fæt] — жир (фэт)\r
2821.	fiber [ˈfaɪbə(r)] — клетчатка (файбэ)\r
2822.	vitamin [ˈvɪtəmɪn] — витамин (витамин)\r
2823.	mineral [ˈmɪnərəl] — минерал (минэрэл)\r
2824.	balanced diet [ˈbælənst ˈdaɪət] — сбалансированное питание (бэлэнст дайэт)\r
2825.	fasting [ˈfɑːstɪŋ] — голодание / пост (фастинъ)\r
2826.	overeat [ˌəʊvərˈiːt] — переедать (оувэриг)\r
2827.	digest [daɪˈdʒest] — переваривать (дайджест)\r
2828.	flavor [ˈfleɪvə(r)] — вкус / аромат (флейвэ)\r
2829.	aftertaste [ˈɑːftəteɪst] — послевкусие (афтэтейст)\r
2830.	leftovers [ˈleftəʊvəz] — остатки еды (лефтоувэз)\r
Блок 3: СМИ, новости и развлечения\r
2831.	headline [ˈhedlaɪn] — заголовок (хедлайн)\r
2832.	broadcast [ˈbrɔːdkɑːst] — трансляция / вещать (бродкаст)\r
2833.	breaking news [ˈbreɪkɪŋ njuːz] — срочные новости (брейкинъ ньюз)\r
2834.	coverage [ˈkʌvərɪdʒ] — освещение в СМИ (кавэридж)\r
2835.	source [sɔːs] — источник (сорс)\r
2836.	press release [ˈpres rɪliːs] — пресс-релиз (прес рилис)\r
2837.	editor [ˈedɪtə(r)] — редактор (эдитэ)\r
2838.	columnist [ˈkɒləmnɪst] — колумнист (колэмнист)\r
2839.	commercial [kəˈmɜːʃl] — рекламный ролик (комёршл)\r
2840.	billboard [ˈbɪlbɔːd] — рекламный щит (билборд)\r
2841.	channel [ˈtʃænl] — канал (чэнл)\r
2842.	episode [ˈepɪsəʊd] — эпизод / серия (эписоуд)\r
2843.	season [ˈsiːzn] — сезон (сизн)\r
2844.	soundtrack [ˈsaʊndtræk] — саундтрек (саундтрэк)\r
2845.	streamer [ˈstriːmə(r)] — стример (стримэ)\r
Блок 4: Общество, окружающая среда и ресурсы\r
2846.	sustainability [səˌsteɪnəˈbɪləti] — устойчивое развитие / экологичность (сэстейнэбилити)\r
2847.	conservation [ˌkɒnsəˈveɪʃn] — охрана природы (консэрвейшн)\r
2848.	footprint [ˈfʊtprɪnt] — след (экологический) (футпринт)\r
2849.	emissions [iˈmɪʃnz] — выбросы (имишнз)\r
2850.	solar power [ˈsəʊlə ˈpaʊə(r)] — солнечная энергия (соулэ пауэ)\r
2851.	wind turbine [wɪnd ˈtɜːbaɪn] — ветряной генератор (винд тёрбайн)\r
2852.	landfill [ˈlændfɪl] — свалка (лэндфил)\r
2853.	compost [ˈkɒmpɒst] — компост (компост)\r
2854.	extinction [ɪkˈstɪŋkʃn] — вымирание (экстинкшн)\r
2855.	habitat [ˈhæbɪtæt] — среда обитания (хэбитэт)\r
2856.	resource [rɪˈsɔːs] — ресурс (рисорс)\r
2857.	scarcity [ˈskeəsəti] — дефицит / нехватка (скеэсэти)\r
2858.	consumption [kənˈsʌmpʃn] — потребление (консампшн)\r
2859.	preserve [prɪˈzɜːv] — сохранять (призёрв)\r
2860.	damage [ˈdæmɪdʒ] — ущерб (дэмидж)\r
Блок 2861–2900: Действия, изменения и коммуникация\r
2861.	adapt [əˈdæpt] — адаптироваться (эдэпт)\r
2862.	alter [ˈɔːltə(r)] — изменять (олтэ)\r
2863.	expand [ɪkˈspænd] — расширять (экспэнд)\r
2864.	shrink [ʃrɪŋk] — уменьшаться / сокращаться (шринк)\r
2865.	transform [trænsˈfɔːm] — преображать (трэнсформ)\r
2866.	replace [rɪˈpleɪs] — заменять (риплейс)\r
2867.	substitute [ˈsʌbstɪtjuːt] — замещать (сабститьют)\r
2868.	restore [rɪˈstɔː(r)] — восстанавливать (ристор)\r
2869.	maintain [meɪnˈteɪn] — поддерживать (мейнтейн)\r
2870.	sustain [səˈsteɪn] — подпитывать / выдерживать (сэстейн)\r
2871.	negotiate [nɪˈɡəʊʃieɪt] — вести переговоры (нигоушиейт)\r
2872.	persuade [pəˈsweɪd] — убеждать (пэрсвейд)\r
2873.	dissuade [dɪˈsweɪd] — отговаривать (дисвейд)\r
2874.	encourage [ɪnˈkʌrɪdʒ] — поощрять (инкаридж)\r
2875.	discourage [dɪsˈkʌrɪdʒ] — отговаривать / лишать уверенности (дискаридж)\r
2876.	praise [preɪz] — хвалить (прейз)\r
2877.	criticize [ˈkrɪtɪsaɪz] — критиковать (критисайз)\r
2878.	blame [bleɪm] — винить (блейм)\r
2879.	forgive [fəˈɡɪv] — прощать (фэгив)\r
2880.	acknowledge [əkˈnɒlɪdʒ] — признавать (акнолидж)\r
2881.	admit [ədˈmɪt] — признавать (вину) (эдмит)\r
2882.	deny [dɪˈnaɪ] — отрицать (динай)\r
2883.	refuse [rɪˈfjuːz] — отказываться (рифьюз)\r
2884.	accept [əkˈsept] — принимать (аксепт)\r
2885.	reject [rɪˈdʒekt] — отклонять (риджект)\r
2886.	insist [ɪnˈsɪst] — настаивать (инсист)\r
2887.	demand [dɪˈmɑːnd] — требовать (диманд)\r
2888.	request [rɪˈkwest] — запрашивать (риквест)\r
2889.	suggest [səˈdʒest] — предлагать (сэджест)\r
2890.	recommend [ˌrekəˈmend] — рекомендовать (рекэмэнд)\r
2891.	advise [ədˈvaɪz] — советовать (эдвайз)\r
2892.	warn [wɔːn] — предупреждать (уорн)\r
2893.	remind [rɪˈmaɪnd] — напоминать (римайнд)\r
2894.	inform [ɪnˈfɔːm] — информировать (информ)\r
2895.	announce [əˈnaʊns] — объявлять (энаунс)\r
2896.	declare [dɪˈkleə(r)] — заявлять (зиклеэ)\r
2897.	mention [ˈmenʃn] — упоминать (меншн)\r
2898.	emphasize [ˈemfəsaɪz] — подчеркивать / акцентировать (эмфэсайз)\r
2899.	highlight [ˈhaɪlaɪt] — выделять (хайлайт)\r
2900.	stress [stres] — делать акцент (стрес)\r
УРОВЕНЬ B1 (Часть 10: 2901–3000)\r
Блок 1: Связующие слова, вводные выражения и союзы\r
2901.	although [ɔːlˈðəʊ] — хотя / несмотря на то что (олзоу)\r
2902.	despite [dɪˈspaɪt] — несмотря на (диспайт)\r
2903.	however [haʊˈevə(r)] — однако (хауэвэ)\r
2904.	nevertheless [ˌnevəðəˈles] — тем не менее (невэзэлесс)\r
2905.	therefore [ˈðeəfɔː(r)] — поэтому / следовательно (зэфор)\r
2906.	furthermore [ˌfɜːðəˈmɔː(r)] — более того / кроме того (фёзэмор)\r
2907.	in addition [ɪn əˈdɪʃn] — вдобавок / дополнительно (ин эдишн)\r
2908.	otherwise [ˈʌðəwaɪz] — иначе / в противном случае (азэуайз)\r
2909.	whereas [ˌweərˈæz] — в то время как / тогда как (уэрэз)\r
2910.	meanwhile [ˈmiːnwaɪl] — тем временем (минуайл)\r
2911.	eventually [ɪˈventʃuəli] — в конце концов / со временем (ивентчуэли)\r
2912.	consequently [ˈkɒnsɪkwəntli] — как следствие (консиквэнтли)\r
2913.	similarly [ˈsɪmələli] — аналогично / точно так же (симэлэрли)\r
2914.	unless [ənˈles] — если не / пока не (анлес)\r
2915.	provided that [prəˈvaɪdɪd ðæt] — при условии, что (прэвайдид зэт)\r
Блок 2: Фразовые глаголы (Часть 1)\r
2916.	carry out [ˈkæri aʊt] — выполнять / проводить (исследование, план) (кэри аут)\r
2917.	figure out [ˈfɪɡər aʊt] — выяснять / понимать (фигэр аут)\r
2918.	point out [pɔɪnt aʊt] — указывать / обращать внимание (пойнт аут)\r
2919.	find out [faɪnd aʊt] — узнавать / выяснять (файнд аут)\r
2920.	turn out [tɜːn aʊt] — оказываться (тёрн аут)\r
2921.	come across [kʌm əˈkrɒs] — наткнуться / случайно встретить (кам экрос)\r
2922.	run into [rʌn ˈɪntə] — случайно встретить / столкнуться (ран инту)\r
2923.	look into [lʊk ˈɪntə] — расследовать / изучать вопрос (лук инту)\r
2924.	look forward to [lʊk ˈfɔːwəd tu] — ждать с нетерпением (лук форвэд ту)\r
2925.	keep up with [kiːp ʌp wɪð] — поспевать за / быть наравне (кип ап уиз)\r
2926.	catch up with [kætʃ ʌp wɪð] — догнать / нагнать (кэч ап уиз)\r
2927.	get along with [ɡet əˈlɒŋ wɪð] — ладить с кем-то (гетэлоŋ уиз)\r
2928.	put up with [pʊt ʌp wɪð] — мириться с чем-то (пут ап уиз)\r
2929.	come up with [kʌm ʌp wɪð] — придумывать (идею, решение) (кам ап уиз)\r
2930.	cut down on [kʌt daʊn ɒn] — сократить потребление (кат даун он)\r
Блок 3: Фразовые глаголы (Часть 2)\r
2931.	call off [kɔːl ɒf] — отменять (кол оф)\r
2932.	put off [pʊt ɒf] — откладывать (на потом) (пут оф)\r
2933.	take over [teɪk ˈəʊvə(r)] — брать контроль / перенимать (тейк оувэ)\r
2934.	take up [teɪk ʌp] — браться за новое хобби / занимать место (тейк ап)\r
2935.	give up [ɡɪv ʌp] — сдаваться / бросать привычку (гив ап)\r
2936.	give in [ɡɪv ɪn] — уступать / поддаваться (гив ин)\r
2937.	break down [breɪk daʊn] — ломаться (о технике) / выходить из строя (брейк даун)\r
2938.	break out [breɪk aʊt] — вспыхивать (о войне, эпидемии) / вырываться (брейк аут)\r
2939.	bring up [brɪŋ ʌp] — воспитывать детей / поднимать тему (бринъ ап)\r
2940.	turn down [tɜːn daʊn] — отклонять (предложение) / убавлять звук (тёрн даун)\r
2941.	turn up [tɜːn ʌp] — появляться (неожиданно) / прибавлять звук (тёрн ап)\r
2942.	set up [set ʌp] — организовывать / настраивать (сет ап)\r
2943.	set off [set ɒf] — отправляться в путь (сет оф)\r
2944.	work out [wɜːk aʊt] — тренироваться / срабатывать (о плане) (уорк аут)\r
2945.	back up [bæk ʌp] — поддерживать / делать копию (бэк ап)\r
Блок 4: Устойчивые выражения и фразы для дискуссии\r
2946.	in terms of [ɪn tɜːmz əv] — с точки зрения / относительно (ин тёрмз ов)\r
2947.	on the one hand [ɒn ðə wʌn hænd] — с одной стороны (он зэ уан хэнд)\r
2948.	on the other hand [ɒn ði ˈʌðə hænd] — с другой стороны (он зи азэ хэнд)\r
2949.	as far as I know [æz fɑː(r) æz aɪ nəʊ] — насколько мне известно (эз фар эз ай ноу)\r
2950.	from my perspective [frəm maɪ pəˈspektɪv] — с моей точки зрения (фром май пэрспектив)\r
2951.	to sum up [tu sʌm ʌp] — подводя итог (ту сам ап)\r
2952.	for instance [fər ˈɪnstəns] — например (фор инстэнс)\r
2953.	such as [sʌtʃ æz] — такие как (сач эз)\r
2954.	in contrast [ɪn ˈkɒntrɑːst] — в отличие от / наоборот (ин контраст)\r
2955.	as a result [æz ə rɪˈzʌlt] — в результате (эз э ризалт)\r
2956.	due to [djuː tu] — из-за / по причине (дью ту)\r
2957.	owing to [ˈəʊɪŋ tu] — благодаря / из-за (оуинъ ту)\r
2958.	in spite of [ɪn spaɪt əv] — несмотря на (ин спайт ов)\r
2959.	according to [əˈkɔːdɪŋ tu] — согласно / по словам (экординъ ту)\r
2960.	by the way [baɪ ðə weɪ] — кстати (бай зэ вей)\r
Блок 2961–3000: Итоговые абстрактные слова и концепты\r
2961.	aspect [ˈæspekt] — аспект / сторона (эспект)\r
2962.	category [ˈkætəɡəri] — категория (кэтэгори)\r
2963.	concept [ˈkɒnsept] — концепция / понятие (концепт)\r
2964.	context [ˈkɒntekst] — контекст (контекст)\r
2965.	criterion [kraɪˈtɪəriən] — критерий (крайтиэриэн)\r
2966.	dimension [daɪˈmenʃn] — измерение / размер (дайменшн)\r
2967.	element [ˈelɪmənt] — элемент (элимэнт)\r
2968.	factor [ˈfæktə(r)] — фактор (фэктэ)\r
2969.	feature [ˈfiːtʃə(r)] — особенность / черта (фичэ)\r
2970.	impact [ˈɪmpækt] — влияние / воздействие (импэкт)\r
2971.	issue [ˈɪʃuː] — проблема / вопрос (ишу)\r
2972.	method [ˈmeθəd] — метод (мезэд)\r
2973.	objective [əbˈdʒektɪv] — цель / объективный (обджектв)\r
2974.	outcome [ˈaʊtkʌm] — результат / исход (ауткам)\r
2975.	perspective [pəˈspektɪv] — перспектива / взгляд (пэрспектив)\r
2976.	principle [ˈprɪnsəpl] — принцип (принсэпл)\r
2977.	process [ˈprəʊses] — процесс (проусес)\r
2978.	purpose [ˈpɜːpəs] — цель / назначение (пёрпэс)\r
2979.	scope [skəʊp] — размах / охват (скоуп)\r
2980.	section [ˈsekʃn] — раздел / секция (секшн)\r
2981.	source [sɔːs] — источник (сорс)\r
2982.	structure [ˈstrʌktʃə(r)] — структура (страктчэ)\r
2983.	style [staɪl] — стиль (стайл)\r
2984.	theory [ˈθɪəri] — теория (фиэри)\r
2985.	trend [trend] — тренд / тенденция (тренд)\r
2986.	unit [ˈjuːnɪt] — единица / блок (ьюнит)\r
2987.	value [ˈvæljuː] — ценность / значение (вэлью)\r
2988.	variety [vəˈraɪəti] — разнообразие (вэрайэти)\r
2989.	version [ˈvɜːʃn] — версия (вёршн)\r
2990.	viewpoint [ˈvjuːpɔɪnt] — точка зрения (вьюпойнт)\r
2991.	volume [ˈvɒljuːm] — объем / том (волюм)\r
2992.	core [kɔː(r)] — ядро / суть (кор)\r
2993.	framework [ˈfreɪmwɜːk] — структура / основа (фреймуорк)\r
2994.	gap [ɡæp] — пробел / брешь (гэп)\r
2995.	insight [ˈɪnsaɪt] — понимание / озарение (инсайт)\r
2996.	pattern [ˈpætn] — шаблон / закономерность (пэтн)\r
2997.	range [reɪndʒ] — диапазон / ряд (рейндж)\r
2998.	scale [skeɪl] — шкала / масштаб (скейл)\r
2999.	sequence [ˈsiːkwəns] — последовательность (сиквэнс)\r
3000.	target [ˈtɑːɡɪt] — цель / мишень (таргит)\r
УРОВЕНЬ B2 (Часть 1: 3001–3100)\r
Блок 1: Анализ, гипотезы и научный подход\r
3001.	hypothesis [haɪˈpɒθəsɪs] — гипотеза (хайпофэсис)\r
3002.	phenomenon [fəˈnɒmɪnən] — явление / феномен (фэноминэн)\r
3003.	bias [ˈbaɪəs] — предвзятость / уклон (баиэс)\r
3004.	correlation [ˌkɒrəˈleɪʃn] — взаимосвязь / корреляция (корэлейшн)\r
3005.	deviation [ˌdiːviˈeɪʃn] — отклонение (дивиейшн)\r
3006.	empiric [ɪmˈpɪrɪk] — эмпирический / опытный (импирик)\r
3007.	finding [ˈfaɪndɪŋ] — полученный результат / открытие (файндинъ)\r
3008.	implication [ˌɪmplɪˈkeɪʃn] — последствие / скрытый смысл (импликейшн)\r
3009.	variable [ˈveəriəbl] — переменная величина (вээриэбл)\r
3010.	validity [vəˈlɪdəti] — обоснованность / достоверность (вэлидэти)\r
3011.	consistency [kənˈsɪstənsi] — последовательность / системность (консистэнси)\r
3012.	discrepancy [dɪsˈkrepənsi] — расхождение / несоответствие (дискрэпэнси)\r
3013.	paradigm [ˈpærədaɪm] — парадигма / образец (пэрэдайм)\r
3014.	synthesis [ˈsɪnθəsɪs] — синтез / обобщение (синфэсис)\r
3015.	methodology [ˌmeθəˈdɒlədʒi] — методология (мезэдоладжи)\r
Блок 2: Бизнес, управление и производительность\r
3016.	efficiency [ɪˈfɪʃnsi] — эффективность / продуктивность (эфишнси)\r
3017.	productivity [ˌprɒdʌkˈtɪvəti] — производительность (продактивити)\r
3018.	deadline [ˈdedlaɪn] — крайний срок (дедлайн)\r
3019.	outsource [ˈaʊtsɔːs] — привлекать сторонних подрядчиков (аутсорс)\r
3020.	delegation [ˌdelɪˈɡeɪʃn] — делегирование (делигейшн)\r
3021.	workflow [ˈwɜːkfləʊ] — рабочий процесс (уоркфлоу)\r
3022.	turnover [ˈtɜːnəʊvə(r)] — оборот / текучесть кадров (тёрноувэ)\r
3023.	benchmark [ˈbentʃmɑːk] — ориентир / эталон (бенчмарк)\r
3024.	optimization [ˌɒptɪmaɪˈzeɪʃn] — оптимизация (оптимайзейшн)\r
3025.	bottleneck [ˈbɒtlnek] — узкое место / затор (ботлнек)\r
3026.	liability [ˌlaɪəˈbɪləti] — обязательство / ответственность (лайэбилити)\r
3027.	asset [ˈæset] — актив / ценное качество (эсет)\r
3028.	stakeholder [ˈsteɪkhəʊldə(r)] — заинтересованная сторона (стейкхоулдэ)\r
3029.	feasible [ˈfiːzəbl] — осуществимый / реальный (физэбл)\r
3030.	sustainable [səˈsteɪnəbl] — устойчивый / жизнеспособный (сэстейнэбл)\r
Блок 3: Эмоциональные состояния и характеристики характера\r
3031.	ambivalent [æmˈbɪvələnt] — двоякий / противоречивый (эмбивэлэнт)\r
3032.	compassionate [kəmˈpæʃənət] — сочувствующий (компэшэнэт)\r
3033.	cynical [ˈsɪnɪkl] — циничный (синикл)\r
3034.	elated [ɪˈleɪtɪd] — ликующий / восторженный (илейтид)\r
3035.	empathetic [ˌempəˈθetɪk] — эмпатичный (эмпэфетик)\r
3036.	frustrated [frʌˈstreɪtɪd] — разочарованный / обескураженный (фрастрейтид)\r
3037.	indifferent [ɪnˈdɪfrənt] — безразличный (индифрэнт)\r
3038.	meticulous [məˈtɪkjələs] — педантичный / дотошный (мэтикьюлэс)\r
3039.	obstinate [ˈɒbstɪnət] — упрямый / своенравный (обстинэт)\r
3040.	resilient [rɪˈzɪliənt] — устойчивый к стрессу / стойкий (ризилиэнт)\r
3041.	skeptical [ˈskeptɪkl] — скептический (скептикл)\r
3042.	spontaneous [spɒnˈteɪniəs] — спонтанный (спонтейниэс)\r
3043.	vulnerable [ˈvʌlnərəbl] — уязвимый (валнэрэбл)\r
3044.	arrogant [ˈærəɡənt] — высокомерный (эрэгэнт)\r
3045.	versatile [ˈvɜːsətaɪl] — разносторонний / гибкий (вёрсэтайл)\r
Блок 4: Общество, политика и правоведение\r
3046.	advocacy [ˈædvəkəsi] — отстаивание интересов / защита (эдвэкэси)\r
3047.	autonomy [ɔːˈtɒnəmi] — автономия / независимость (отономи)\r
3048.	bureaucracy [bjʊəˈrɒkrəsi] — бюрократия (бьюрокраси)\r
3049.	censorship [ˈsensəʃɪp] — цензура (сенсэшип)\r
3050.	compliance [kəmˈplaɪəns] — соответствие требованиям / соблюдение (компайэнс)\r
3051.	consensus [kənˈsensəs] — согласие / консенсус (консенсэс)\r
3052.	constitution [ˌkɒnstɪˈtjuːʃn] — конституция (конститьюшн)\r
3053.	diversity [daɪˈvɜːsəti] — разнообразие (дайвёрсэти)\r
3054.	equity [ˈekwəti] — справедливость / равенство прав (эквити)\r
3055.	hierarchy [ˈhaɪərɑːki] — иерархия (хайэрарки)\r
3056.	integration [ˌɪntɪˈɡreɪʃn] — интеграция (интигрейшн)\r
3057.	legislation [ˌledʒɪsˈleɪʃn] — законодательство (леджислейшн)\r
3058.	policy [ˈpɒləsi] — политика (стратегия) (полэси)\r
3059.	sanction [ˈsæŋkʃn] — санкция / ограничение (сэнкшн)\r
3060.	sovereignty [ˈsɒvrənti] — суверенитет (соврэнти)\r
Блок 3061–3100: Изменения, динамика и процессы\r
3061.	accelerate [əkˈseləreɪt] — ускорять (акселэрейт)\r
3062.	accumulate [əˈkjuːmjəleɪt] — накапливать (акьюмьюлейт)\r
3063.	allocate [ˈæləkeɪt] — выделять / распределять (элэкейт)\r
3064.	amplify [ˈæmplɪfaɪ] — усиливать (эмплифай)\r
3065.	anticipate [ænˈtɪsɪpeɪt] — предвосхищать / ожидать (энтисипейт)\r
3066.	cultivate [ˈkʌltɪveɪt] — выращивать / развивать (калтивейт)\r
3067.	deteriorate [dɪˈtɪəriəreɪt] — ухудшаться (дитириэрейт)\r
3068.	diminish [dɪˈmɪnɪʃ] — уменьшать / ослаблять (диминиш)\r
3069.	distort [dɪˈstɔːt] — искажать (дисторт)\r
3070.	divert [daɪˈvɜːt] — перенаправлять (дайвёрт)\r
3071.	eliminate [ɪˈlɪmɪneɪt] — устранять / ликвидировать (илиминейт)\r
3072.	enhance [ɪnˈhɑːns] — улучшать / усиливать (инханс)\r
3073.	fluctuate [ˈflʌktʃueɪt] — колебаться / меняться (флактчуэйт)\r
3074.	foster [ˈfɒstə(r)] — способствовать / поощрять (фостэ)\r
3075.	implement [ˈɪmplɪment] — внедрять / реализовывать (имплимент)\r
3076.	inhibit [ɪnˈhɪbɪt] — сдерживать / подавлять (инхибит)\r
3077.	integrate [ˈɪntɪɡreɪt] — объединять / интегрировать (интигрейт)\r
3078.	interfere [ˌɪntəˈfɪə(r)] — вмешиваться / мешать (интэрфиэ)\r
3079.	manifest [ˈmænɪfest] — проявлять / выражать (мэнифест)\r
3080.	modify [ˈmɒdɪfaɪ] — видоизменять (модифай)\r
3081.	negotiate [nɪˈɡəʊʃieɪt] — договариваться (нигоушиейт)\r
3082.	obtain [əbˈteɪn] — получать / добывать (обтейн)\r
3083.	perceive [pəˈsiːv] — воспринимать (пэрсив)\r
3084.	propose [prəˈpəʊz] — предлагать (прэпоуз)\r
3085.	reconcile [ˈrekənsaɪl] — сопоставлять / примирять (рекэнсайл)\r
3086.	refine [rɪˈfaɪn] — оттачивать / дорабатывать (рифайн)\r
3087.	reinforce [ˌriːɪnˈfɔːs] — укреплять / усиливать (риинфорс)\r
3088.	relinquish [rɪˈlɪŋkwɪʃ] — отказываться / передавать (рилинквиш)\r
3089.	resolve [rɪˈzɒlv] — разрешать (проблему) (ризолв)\r
3090.	retain [rɪˈteɪn] — удерживать / сохранять (ритейн)\r
3091.	scrutinize [ˈskruːtənaɪz] — тщательно изучать (скрутэнайз)\r
3092.	stimulate [ˈstɪmjuleɪt] — стимулировать (стимьюлейт)\r
3093.	strive [straɪv] — стремиться (страйв)\r
3094.	suppress [səˈpres] — подавлять (сэпрес)\r
3095.	sustain [səˈsteɪn] — поддерживать / выдерживать (сэстейн)\r
3096.	trigger [ˈtrɪɡə(r)] — провоцировать / запускать (тригэ)\r
3097.	undermine [ˌʌndəˈmaɪn] — подрывать / подкапывать (андэмайн)\r
3098.	validate [ˈvælɪdeɪt] — подтверждать / утверждать (вэлидейт)\r
3099.	verify [ˈverɪfaɪ] — проверять истинность (верифай)\r
3100.	yield [jiːld] — приносить (результат) / уступать (жилд)\r
УРОВЕНЬ B2 (Часть 2: 3101–3200)\r
Блок 1: Оценка, аргументация и суждения\r
3101.	adequate [ˈædɪkwət] — достаточный / соответствующий (эдэквэт)\r
3102.	arbitrary [ˈɑːbɪtrəri] — произвольный / случайный (арбитрэри)\r
3103.	coherent [kəʊˈhɪərənt] — связный / логичный (коухиэрэнт)\r
3104.	compelling [kəmˈpelɪŋ] — убедительный / захватывающий (компелинъ)\r
3105.	comprehensive [ˌkɒmprɪˈhensɪv] — всесторонний / комплексный (комприхенсив)\r
3106.	dubious [ˈdjuːbiəs] — сомнительный (дьюбиэс)\r
3107.	explicit [ɪkˈsplɪsɪt] — явный / точный (эксплисит)\r
3108.	implicit [ɪmˈplɪsɪt] — неявный / подразумеваемый (имплисит)\r
3109.	inevitable [ɪnˈevɪtəbl] — неизбежный (инэвитэбл)\r
3110.	legitimate [lɪˈdʒɪtɪmət] — законный / обоснованный (лиджитимэт)\r
3111.	plausible [ˈplɔːzəbl] — правдоподобный (плозэбл)\r
3112.	profound [prəˈfaʊnd] — глубокий / основательный (прэфаунд)\r
3113.	rigorous [ˈrɪɡərəs] — строгий / тщательный (ригэрэс)\r
3114.	subtle [ˈsʌtl] — тонкий / утонченный (сатл)\r
3115.	superficial [ˌsuːpəˈfɪʃl] — поверхностный (супэрфишл)\r
Блок 2: Творчество, искусство и эстетика\r
3116.	aesthetic [iːsˈθetɪk] — эстетический / эстетика (исфетик)\r
3117.	composition [ˌkɒmpəˈzɪʃn] — композиция (компэзишн)\r
3118.	perspective [pəˈspektɪv] — перспектива / ракурс (пэрспектив)\r
3119.	texture [ˈtekstʃə(r)] — текстура / фактура (текстчэ)\r
3120.	contrast [ˈkɒntrɑːst] — контраст (контраст)\r
3121.	proportion [prəˈpɔːʃn] — пропорция (прэпоршн)\r
3122.	vibrant [ˈvaɪbrənt] — яркий / насыщенный (вайбрэнт)\r
3123.	subdued [səbˈdjuːd] — приглушенный / сдержанный (сэбдьюд)\r
3124.	expressionism [ɪkˈspreʃənɪzm] — экспрессионизм (экспрешэнизм)\r
3125.	impressionism [ɪmˈpreʃənɪzm] — импрессионизм (импрешэнизм)\r
3126.	medium [ˈmiːdiəm] — средство / материал искусства (мидиэм)\r
3127.	palette [ˈpælət] — палитра (пэлэт)\r
3128.	canvas [ˈkænvəs] — холст (кэнвэс)\r
3129.	stroke [strəʊk] — мазок / штрих (строук)\r
3130.	authentic [ɔːˈθentɪk] — подлинный / аутентичный (офентик)\r
Блок 3: Технологии, разработка и инженерия\r
3131.	algorithm [ˈælɡərɪðəm] — алгоритм (элгэризм)\r
3132.	architecture [ˈɑːkɪtektʃə(r)] — архитектура (систем/зданий) (аркитектчэ)\r
3133.	deployment [dɪˈplɔɪmənt] — развертывание / внедрение (диплоймэнт)\r
3134.	environment [ɪnˈvaɪrənmənt] — среда / окружение (инвайрэнмэнт)\r
3135.	framework [ˈfreɪmwɜːk] — фреймворк / каркас (фреймуорк)\r
3136.	interface [ˈɪntəfeɪs] — интерфейс (интэрфейс)\r
3137.	maintenance [ˈmeɪntənəns] — обслуживание / поддержка (мейнэйнэнс)\r
3138.	module [ˈmɒdjuːl] — модуль (модьюл)\r
3139.	parameter [pəˈræmɪtə(r)] — параметр (пэрэмитэ)\r
3140.	protocol [ˈprəʊtəkɒl] — протокол (проутэкол)\r
3141.	redundancy [rɪˈdʌndənsi] — избыточность / дублирование (ридандэнси)\r
3142.	specification [ˌspesɪfɪˈkeɪʃn] — спецификация / ТЗ (спесификейшн)\r
3143.	structure [ˈstrʌktʃə(r)] — структура (страктчэ)\r
3144.	syntax [ˈsɪntæks] — синтаксис (синтэкс)\r
3145.	validation [ˌvælɪˈdeɪʃn] — валидация / проверка (вэлидейшн)\r
Блок 4: Финансы, экономика и инвестиции\r
3146.	acquisition [ˌækwɪˈzɪʃn] — приобретение / поглощение (эквизишн)\r
3147.	allocation [ˌæləˈkeɪʃn] — распределение средств (элэкейшн)\r
3148.	capital [ˈkæpɪtl] — капитал (кэпитл)\r
3149.	commodity [kəˈmɒdəti] — товар / сырье (комэдэти)\r
3150.	equity [ˈekwəti] — собственный капитал / акции (эквити)\r
3151.	expenditure [ɪkˈspendɪtʃə(r)] — расходы / затраты (экспендичэ)\r
3152.	fiscal [ˈfɪskl] — фискальный / финансовый (фискл)\r
3153.	inflation [ɪnˈfleɪʃn] — инфляция (инфлейшн)\r
3154.	investment [ɪnˈvestmənt] — инвестиция (инвестмэнт)\r
3155.	margin [ˈmɑːdʒɪn] — маржа / прибыль (маджин)\r
3156.	revenue [ˈrevənjuː] — выручка / доход (ревэнью)\r
3157.	speculation [ˌspekjuˈleɪʃn] — спекуляция / предположение (спекьюлейшн)\r
3158.	subsidy [ˈsʌbsədi] — субсидия (сабсэди)\r
3159.	transaction [trænˈzækʃn] — транзакция / сделка (трэнзэкшн)\r
3160.	yield [jiːld] — доходность / удой (жилд)\r
Блок 3161–3200: Абстрактные понятия и явления\r
3161.	abundance [əˈbʌndəns] — изобилие (эбандэнс)\r
3162.	adversity [ədˈvɜːsəti] — невзгоды / трудности (эдвёрсэти)\r
3163.	ambiguity [ˌæmbɪˈɡjuːəti] — двусмысленность (эмбигьюити)\r
3164.	coincidence [kəʊˈɪnsɪdəns] — совпадение (коуинсидэнс)\r
3165.	complexity [kəmˈpleksəti] — сложность (комплексэти)\r
3166.	constraint [kənˈstreɪnt] — ограничение (констрейнт)\r
3167.	continuity [ˌkɒntɪˈnjuːəti] — непрерывность (континьюити)\r
3168.	diversity [daɪˈvɜːsəti] — разнообразие (дайвёрсэти)\r
3169.	dominance [ˈdɒmɪnəns] — господство (доминэнс)\r
3170.	equilibrium [ˌiːkwɪˈlɪbriəm] — равновесие (иквилибриэм)\r
3171.	illusion [ɪˈluːʒn] — иллюзия (илюжн)\r
3172.	magnitude [ˈmæɡnɪtjuːd] — величина / масштаб (мэгнитьюд)\r
3173.	notion [ˈnəʊʃn] — понятие / представление (ноушн)\r
3174.	origin [ˈɒrɪdʒɪn] — происхождение (ориджин)\r
3175.	paradox [ˈpærədɒks] — парадокс (пэрэдокс)\r
3176.	precedence [ˈpresɪdəns] — приоритет / первенство (пресидэнс)\r
3177.	probability [ˌprɒbəˈbɪləti] — вероятность (пробэбилити)\r
3178.	proportion [prəˈpɔːʃn] — пропорция (прэпоршн)\r
3179.	relevance [ˈreləvəns] — актуальность (рэлэвэнс)\r
3180.	reluctance [rɪˈlʌktəns] — неохота / нежелание (рилактэнс)\r
3181.	scarcity [ˈskeəsəti] — дефицит (скеэсэти)\r
3182.	significance [sɪɡˈnɪfɪkəns] — значимость (сигнификэнс)\r
3183.	solitude [ˈsɒlətjuːd] — одиночество / уединение (солитьюд)\r
3184.	spectrum [ˈspektrəm] — спектр / диапазон (спектрэм)\r
3185.	stability [stəˈbɪləti] — стабильность (стэбилити)\r
3186.	substance [ˈsʌbstəns] — вещество / суть (сабстэнс)\r
3187.	tendency [ˈtendənsi] — тенденция (тендэнси)\r
3188.	uncertainty [ʌnˈsɜːtnti] — неопределенность (ансёртнти)\r
3189.	utility [juːˈtɪləti] — полезность / утилита (ьютилэти)\r
3190.	validity [vəˈlɪdəti] — валидность / подлинность (вэлидэти)\r
3191.	vulnerability [ˌvʌlnərəˈbɪləti] — уязвимость (валнэрэбилити)\r
3192.	welfare [ˈwelfeə(r)] — благополучие (уэлфээ)\r
3193.	boundary [ˈbaʊndri] — граница (баундри)\r
3194.	dimension [daɪˈmenʃn] — измерение (дайменшн)\r
3195.	threshold [ˈθreʃhəʊld] — порог (фрешхоулд)\r
3196.	transition [trænˈzɪʃn] — переход (трэнзишн)\r
3197.	velocity [vəˈlɒsəti] — скорость (вэлосэти)\r
3198.	volume [ˈvɒljuːm] — объем (волюм)\r
3199.	horizon [həˈraɪzn] — горизонт (хэрайзн)\r
3200.	perspective [pəˈspektɪv] — перспективный взгляд (пэрспектив)\r
УРОВЕНЬ B2 (Часть 3: 3201–3300)\r
Блок 1: Состояние здоровья, медицина и биология\r
3201.	chronic [ˈkrɒnɪk] — хронический (кроник)\r
3202.	acute [əˈkjuːt] — острый (о боли/болезни) (экьют)\r
3203.	diagnosis [ˌdaɪəɡˈnəʊsɪs] — диагноз (дайэгноусис)\r
3204.	epidemic [ˌepɪˈdemɪk] — эпидемия (эпидемик)\r
3205.	immune [ɪˈmjuːn] — иммунный (имьюн)\r
3206.	metabolism [məˈtæbəlɪzm] — обмен веществ (мэтэболизм)\r
3207.	organism [ˈɔːɡənɪzm] — организм (организм)\r
3208.	prescription [prɪˈskrɪpʃn] — рецепт (врача) (прискрипшн)\r
3209.	symptom [ˈsɪmptəm] — симптом (симптом)\r
3210.	therapy [ˈθerəpi] — терапия (фэрэпи)\r
3211.	hereditary [həˈredɪtri] — наследственный (хэредитри)\r
3212.	contagious [kənˈteɪdʒəs] — заразный (контейджес)\r
3213.	deficiency [dɪˈfɪʃnsi] — дефицит / нехватка (дифишнси)\r
3214.	rehabilitation [ˌriːəˌbɪlɪˈteɪʃn] — реабилитация (риэбилитейшн)\r
3215.	remedy [ˈremədi] — средство / лекарство (ремэди)\r
Блок 2: Окружающая среда и ботаника\r
3216.	biodiversity [ˌbaɪəʊdaɪˈvɜːsəti] — биоразнообразие (байэодайвёрсэти)\r
3217.	ecosystem [ˈiːkəʊsɪstəm] — экосистема (икоусистэм)\r
3218.	flora [ˈflɔːrə] — флора (флора)\r
3219.	fauna [ˈfɔːnə] — фауна (фона)\r
3220.	foliage [ˈfəʊliɪdʒ] — листва (фоулиидж)\r
3221.	germination [ˌdʒɜːmɪˈneɪʃn] — прорастание (жёрминейшн)\r
3222.	pesticide [ˈpestɪsaɪd] — пестицид (пестисайд)\r
3223.	photosynthesis [ˌfəʊtəʊˈsɪnθəsɪs] — фотосинтез (фоутоусинфэсис)\r
3224.	soil [sɔɪl] — почва / грунт (сойл)\r
3225.	substrate [ˈsʌbstreɪt] — субстрат (сабстрейт)\r
3226.	species [ˈspiːʃiːz] — вид / виды (спишиз)\r
3227.	vegetation [ˌvedʒəˈteɪʃn] — растительность (веджитейшн)\r
3228.	drainage [ˈdreɪnɪdʒ] — дренаж (дрейнидж)\r
3229.	fertilizer [ˈfɜːtəlaɪzə(r)] — удобрение (фёртилайзэ)\r
3230.	irrigation [ˌɪrɪˈɡeɪʃn] — орошение / полив (иригейшн)\r
Блок 3: Мышление, знание и когнитивные процессы\r
3231.	cognition [kɒɡˈnɪʃn] — познание / когниция (когнишн)\r
3232.	comprehension [ˌkɒmprɪˈhenʃn] — понимание (комприхеншн)\r
3233.	consciousness [ˈkɒnʃəsnəs] — сознание (коншэснэс)\r
3234.	deduction [dɪˈdʌkʃn] — дедукция (дидакшн)\r
3235.	induction [ɪnˈdʌkʃn] — индукция (индакшн)\r
3236.	intellect [ˈɪntəlekt] — интеллект (интэлект)\r
3237.	intuition [ˌɪntjuˈɪʃn] — интуиция (интьюишн)\r
3238.	memory retention [ˈmeməri rɪˈtenʃn] — удержание в памяти (мемэри ритеншн)\r
3239.	perception [pəˈsepʃn] — восприятие (пэрсепшн)\r
3240.	reasoning [ˈriːzənɪŋ] — рассуждение / логика (ризэнинъ)\r
3241.	awareness [əˈweənəs] — осведомленность (эвээнэс)\r
3242.	bias [ˈbaɪəs] — предвзятость (баиэс)\r
3243.	distraction [dɪˈstrækʃn] — отвлечение внимания (дистрэкшн)\r
3244.	illusion [ɪˈluːʒn] — иллюзия (илюжн)\r
3245.	insight [ˈɪnsaɪt] — прозрение / инсайт (инсайт)\r
Блок 4: Коммуникация и риторика\r
3246.	assertion [əˈsɜːʃn] — утверждение (эсёршн)\r
3247.	clarification [ˌklærəfɪˈkeɪʃn] — прояснение (клэрэфикейшн)\r
3248.	contradiction [ˌkɒntrəˈdɪkʃn] — противоречие (контрэдикшн)\r
3249.	discourse [ˈdɪskɔːs] — дискурс / беседа (дискорс)\r
3250.	emphasis [ˈemfəsɪs] — акцент / ударение (эмфэсис)\r
3251.	interlocutor [ˌɪntəˈlɒkjətə(r)] — собеседник (интэрлокьютэ)\r
3252.	metaphor [ˈmetəfə(r)] — метафора (метафэ)\r
3253.	narrative [ˈnærətɪv] — повествование / нарратив (нэрэтив)\r
3254.	persuasion [pəˈsweɪʒn] — убеждение (пэрсвейжн)\r
3255.	rhetoric [ˈretərɪk] — риторика (рэторик)\r
3256.	statement [ˈsteɪtmənt] — заявление (стейтмэнт)\r
3257.	tone [təʊn] — тон (тоун)\r
3258.	ambiguity [ˌæmbɪˈɡjuːəti] — неоднозначность (эмбигьюити)\r
3259.	exaggeration [ɪɡˌzædʒəˈreɪʃn] — преувеличение (игзэджэрейшн)\r
3260.	implication [ˌɪmplɪˈkeɪʃn] — подтекст (импликейшн)\r
Блок 3261–3300: Сложные действия и взаимодействия\r
3261.	advocate [ˈædvəkeɪt] — отстаивать / выступать за (эдвэкейт)\r
3262.	collaborate [kəˈlæbəreɪt] — сотрудничать (кэлабэрейт)\r
3263.	compromise [ˈkɒmprəmaɪz] — идти на компромисс (компрэмайз)\r
3264.	concede [kənˈsiːd] — уступать / признавать (консид)\r
3265.	confront [kənˈfrʌnt] — сталкиваться / противостоять (конфрант)\r
3266.	consolidate [kənˈsɒlɪdeɪt] — укреплять / консолидировать (консолидейт)\r
3267.	contradict [ˌkɒntrəˈdɪkt] — противоречить (контрэдикт)\r
3268.	convey [kənˈveɪ] — передавать (мысль/чувство) (конвей)\r
3269.	coordinate [kəʊˈɔːdɪneɪt] — координировать (коуординэйт)\r
3270.	cultivate [ˈkʌltɪveɪt] — развивать / нарабатывать (калтивейт)\r
3271.	deliberate [dɪˈlɪbəreɪt] — размышлять / совещаться (дилибэрейт)\r
3272.	denounce [dɪˈnaʊns] — осуждать (динаунс)\r
3273.	depict [dɪˈpɪkt] — изображать (дипикт)\r
3274.	derive [dɪˈraɪv] — извлекать / выводить (дирайв)\r
3275.	differentiate [ˌdɪfəˈrenʃieɪt] — разграничивать (дифэреншиейт)\r
3276.	disrupt [dɪsˈrʌpt] — нарушать / подрывать (дисрапт)\r
3277.	disseminate [dɪˈsemɪneɪt] — распространять (информацию) (дисеминэйт)\r
3278.	distinguish [dɪˈstɪŋɡwɪʃ] — различать (дистингуиш)\r
3279.	elaborate [ɪˈlæbəreɪt] — вдаваться в детали (илабэрейт)\r
3280.	endorse [ɪnˈdɔːs] — одобрять / поддерживать (индорс)\r
3281.	enforce [ɪnˈfɔːs] — принудительно применять (инфорс)\r
3282.	exemplify [ɪɡˈzemplɪfaɪ] — служить примером (игземплифай)\r
3283.	facilitate [fəˈsɪlɪteɪt] — облегчать / способствовать (фэсилитейт)\r
3284.	implement [ˈɪmplɪment] — осуществлять (имплимент)\r
3285.	incorporate [ɪnˈkɔːpəreɪt] — включать в состав (инкорпэрейт)\r
3286.	induce [ɪnˈdjuːs] — побуждать / вызывать (индьюс)\r
3287.	initiate [ɪˈnɪʃieɪt] — инициировать (инишиейт)\r
3288.	integrate [ˈɪntɪɡreɪt] — интегрировать (интигрейт)\r
3289.	intervene [ˌɪntəˈviːn] — вмешиваться (интэрвин)\r
3290.	justify [ˈdʒʌstɪfaɪ] — оправдывать (джастифай)\r
3291.	manifest [ˈmænɪfest] — проявлять (мэнифест)\r
3292.	mitigate [ˈmɪtɪɡeɪt] — смягчать (митигейт)\r
3293.	negotiate [nɪˈɡəʊʃieɪt] — вести переговоры (нигоушиейт)\r
3294.	nurture [ˈnɜːtʃə(r)] — взращивать (нёрчэ)\r
3295.	overcome [ˌəʊvəˈkʌm] — преодолевать (оувэкам)\r
3296.	penetrate [ˈpenətreɪt] — проникать (пенэтрейт)\r
3297.	propose [prəˈpəʊz] — предлагать (прэпоуз)\r
3298.	reconcile [ˈrekənsaɪl] — примирять (рекэнсайл)\r
3299.	rectify [ˈrektɪfaɪ] — исправлять (ректифай)\r
3300.	regulate [ˈreɡjuleɪt] — регулировать (регьюлейт)\r
УРОВЕНЬ B2 (Часть 4: 3301–3400)\r
Блок 1: Качества, свойства и состояния\r
3301.	adverse [ˈædvɜːs] — неблагоприятный (эдвёрс)\r
3302.	autonomous [ɔːˈtɒnəməs] — автономный (отономэс)\r
3303.	beneficial [ˌbenɪˈfɪʃl] — полезный (бенифишл)\r
3304.	boundless [ˈbaʊndləs] — безграничный (баундлэс)\r
3305.	catastrophic [ˌkætəˈstrɒfɪk] — катастрофический (кэтэстрофик)\r
3306.	compatible [kəmˈpætəbl] — совместимый (компатэбл)\r
3307.	incompatible [ˌɪnkəmˈpætəbl] — несовместимый (инкомпатэбл)\r
3308.	delicate [ˈdelɪkət] — изящный / хрупкий (дэликэт)\r
3309.	drastic [ˈdræstɪk] — решительный / радикальный (дрэстик)\r
3310.	excessive [ɪkˈsesɪv] — чрезмерный (ексесив)\r
3311.	fundamental [ˌfʌndəˈmentl] — фундаментальный (фандамэнтл)\r
3312.	hostile [ˈhɒstaɪl] — враждебный (хостайл)\r
3313.	immense [ɪˈmens] — огромный / колоссальный (именс)\r
3314.	imperative [ɪmˈperətɪv] — крайний / обязательный (импэрэтив)\r
3315.	inevitable [ɪnˈevɪtəbl] — неизбежный (инэвитэбл)\r
Блок 2: Отношения, роли и социальные связи\r
3316.	ally [ˈælaɪ] — союзник (элай)\r
3317.	adversary [ˈædvəsəri] — противник / оппонент (эдвэсэри)\r
3318.	beneficiary [ˌbenɪˈfɪʃəri] — бенефициар / получатель (бенифишэри)\r
3319.	counterpart [ˈkaʊntəpɑːt] — коллега (с аналогичной должностью) (каунтэпарт)\r
3320.	predecessor [ˈpriːdɪsesə(r)] — предшественник (придисесэ)\r
3321.	successor [səkˈsesə(r)] — преемник (саксесэ)\r
3322.	peer [pɪə(r)] — ровня / коллега (пиэ)\r
3323.	mentor [ˈmentɔː(r)] — наставник (ментор)\r
3324.	protege [ˈprɒtəʒeɪ] — подопечный (протэжей)\r
3325.	companion [kəmˈpænɪən] — спутник / компаньон (компаниэн)\r
3326.	acquaintance [əˈkweɪntəns] — знакомый (эквейнтэнс)\r
3327.	authority [ɔːˈθɒrəti] — авторитет / властный орган (офорэти)\r
3328.	delegate [ˈdelɪɡət] — делегат / представитель (делигэт)\r
3329.	subordinate [səˈbɔːdɪnət] — подчиненный (сэбординэт)\r
3330.	superior [suːˈpɪəriə(r)] — начальник / превосходящий (супиэриэ)\r
Блок 3: Изменения, динамика и результаты\r
3331.	breakthrough [ˈbreɪkθruː] — прорыв (брейкфру)\r
3332.	catalyst [ˈkætəlɪst] — катализатор (кэтэлист)\r
3333.	consequence [ˈkɒnsɪkwəns] — последствие (консиквэнс)\r
3334.	decline [dɪˈklaɪn] — спад / снижение (диклайн)\r
3335.	development [dɪˈveləpmənt] — развитие (дивэлэпмэнт)\r
3336.	evolution [ˌiːvəˈluːʃn] — эволюция (ивэлюшн)\r
3337.	fluctuation [ˌflʌktʃuˈeɪʃn] — колебание (флактчуэйшн)\r
3338.	innovation [ˌɪnəˈveɪʃn] — инновация (инэвейшн)\r
3339.	outcome [ˈaʊtkʌm] — результат (ауткам)\r
3340.	progression [prəˈɡreʃn] — продвижение (прэгрешн)\r
3341.	regression [rɪˈɡreʃn] — регресс (ригрешн)\r
3342.	shift [ʃɪft] — сдвиг / смещение (шифт)\r
3343.	transformation [ˌtrænsfəˈmeɪʃn] — трансформация (трэнсфэрмейшн)\r
3344.	turnaround [ˈtɜːnəraʊnd] — поворот к лучшему (тёрнэраунд)\r
3345.	upheaval [ʌpˈhiːvl] — переворот / сдвиг (апхивл)\r
Блок 4: Устойчивые словосочетания и коллокации B2\r
3346.	bear in mind [beə(r) ɪn maɪnd] — иметь в виду (бээрин майнд)\r
3347.	catch unawares [kætʃ ˌʌnəˈweəz] — застать врасплох (кэч анэвээз)\r
3348.	draw a conclusion [drɔː ə kənˈkluːʒn] — сделать вывод (дро э конклюжн)\r
3349.	gain insight [ɡeɪn ˈɪnsaɪt] — получить понимание (гейн инсайт)\r
3350.	have an impact on [hæv ən ˈɪmpæкт ɒn] — оказывать влияние на (хэв эн импэкт он)\r
3351.	keep track of [kiːp træk əv] — отслеживать (кип трэк ов)\r
3352.	lose sight of [luːz saɪt əv] — упускать из виду (луз сайт ов)\r
3353.	make a contribution [meɪk ə ˌkɒntrɪˈbjuːʃn] — внести вклад (мейк э контрибьюшн)\r
3354.	pose a threat [pəʊz ə θret] — представлять угрозу (поуз э фрет)\r
3355.	raise awareness [reɪz əˈweənəs] — повышать осведомленность (рейз эвээнэс)\r
3356.	reach a compromise [riːtʃ ə ˈkɒmprəmaɪz] — прийти к компромиссу (рич э компрэмайз)\r
3357.	shed light on [ʃed laɪt ɒn] — пролить свет на (шед лайт он)\r
3358.	take into account [teɪk ˈɪntə əˈkaʊnt] — принимать во внимание (тейк инту экаунт)\r
3359.	take precedence [teɪk ˈpresɪdəns] — иметь первостепенное значение (тейк пресидэнс)\r
3360.	undergo changes [ˌʌndəˈɡəʊ tʃeɪndʒɪz] — претерпевать изменения (андэгоу чейнджиз)\r
Блок 3361–3400: Завершающие концепты блока B2\r
3361.	analogy [əˈnælədʒi] — аналогия (энэлэджи)\r
3362.	anomaly [əˈnɒməli] — аномалия (эномэли)\r
3363.	archetype [ˈɑːkɪtaɪp] — архетип (аркитайп)\r
3364.	attribute [ˈætrɪbjuːt] — атрибут / свойство (этрибут)\r
3365.	catalogue [ˈkætəlɒɡ] — каталог (кэтэлог)\r
3366.	chronology [krəˈnɒlədʒi] — хронология (кроноладжи)\r
3367.	classification [ˌklæsɪfɪˈkeɪʃn] — классификация (клэсификейшн)\r
3368.	continuum [kənˈtɪnjuəm] — континуум / непрерывность (континьюэм)\r
3369.	criterion [kraɪˈtɪəriən] — критерий (крайтиэриэн)\r
3370.	equation [ɪˈkweɪʒn] — уравнение / равенство (иквейжн)\r
3371.	essence [ˈesns] — сущность / суть (эснс)\r
3372.	excerpt [ˈeksɜːpt] — отрывок / выдержка (эксёрпт)\r
3373.	exposition [ˌekspəˈzɪʃn] — изложение / экспозиция (экспэзишн)\r
3374.	formula [ˈfɔːmjələ] — формула (формула)\r
3375.	index [ˈɪndeks] — индекс / показатель (индекс)\r
3376.	infrastructure [ˈɪnfrəstrʌktʃə(r)] — инфраструктура (инфрэстрактчэ)\r
3377.	instance [ˈɪnstəns] — пример / случай (инстэнс)\r
3378.	manifesto [ˌmænɪˈfestəʊ] — манифест (мэнифестоу)\r
3379.	norm [nɔːm] — норма (норм)\r
3380.	notation [nəʊˈteɪʃn] — нотация / система обозначений (ноутейшн)\r
3381.	occurrence [əˈkʌrəns] — случай / происшествие (экарэнс)\r
3382.	overview [ˈəʊvəvjuː] — обзор / краткое описание (оувэвью)\r
3383.	parameter [pəˈræmɪtə(r)] — параметр (пэрэмитэ)\r
3384.	premise [ˈpremɪs] — предпосылка / исходное условие (премис)\r
3385.	prospect [ˈprɒspekt] — перспектива / шанс (проспект)\r
3386.	rationale [ˌræʃəˈnɑːl] — логическое обоснование (рэшэнал)\r
3387.	scope [skəʊp] — размах / рамки (скоуп)\r
3388.	sequence [ˈsiːkwəns] — последовательность (сиквэнс)\r
3389.	specification [ˌspesɪfɪˈkeɪʃn] — спецификация (спесификейшн)\r
3390.	standard [ˈstændəd] — стандарт (стэндэд)\r
3391.	statistic [stəˈtɪstɪk] — статистика / показатель (стэтистик)\r
3392.	summary [ˈsʌməri] — сводка / резюме (самэри)\r
3393.	synthesis [ˈsɪnθəsɪs] — синтез (синфэсис)\r
3394.	template [ˈtempleɪt] — шаблон (темплейт)\r
3395.	thesis [ˈθiːsɪs] — тезис / диссертация (фисис)\r
3396.	trajectory [trəˈdʒektəri] — траектория (трэджектэри)\r
3397.	variation [ˌveəriˈeɪʃn] — вариация (вээриейшн)\r
3398.	volume [ˈvɒljuːm] — том / объем (волюм)\r
3399.	threshold [ˈθreʃhəʊld] — порог (фрешхоулд)\r
3400.	benchmark [ˈbentʃmɑːk] — эталонный показатель (бенчмарк)\r
УРОВЕНЬ B2–C1 (Часть 1: 3401–3500)\r
Блок 1: Познание, абстрактное мышление и концепции\r
3401.	abstraction [æbˈstrækʃn] — абстракция (эбстрэкшн)\r
3402.	assertion [əˈsɜːʃn] — утверждение / заявление (эсёршн)\r
3403.	cognition [kɒɡˈnɪʃn] — познание (когнишн)\r
3404.	conception [kənˈsepʃn] — концепция / замысел (консепшн)\r
3405.	deduction [dɪˈdʌkʃn] — дедукция (дидакшн)\r
3406.	doctrine [ˈdɒktrɪn] — доктрина / учение (доктрин)\r
3407.	ideology [ˌaɪdiˈɒlədʒi] — идеология (айдиолоджи)\r
3408.	illusion [ɪˈluːʒn] — иллюзия (илюжн)\r
3409.	induction [ɪnˈdʌkʃn] — индукция (индакшн)\r
3410.	insight [ˈɪnsaɪt] — озарение / глубокое понимание (инсайт)\r
3411.	intuition [ˌɪntjuˈɪʃn] — интуиция (интьюишн)\r
3412.	logic [ˈlɒdʒɪk] — логика (лоджик)\r
3413.	perception [pəˈsepʃn] — восприятие (пэрсепшн)\r
3414.	rationality [ˌræʃəˈnæləti] — рациональность (рэшэналэти)\r
3415.	reasoning [ˈriːzənɪŋ] — рассуждение (ризэнинъ)\r
Блок 2: Динамика процессов и изменения\r
3416.	adaptation [ˌædæpˈteɪʃn] — адаптация (эдэптейшн)\r
3417.	alteration [ˌɔːltəˈreɪʃn] — изменение / переделка (олтэрейшн)\r
3418.	conversion [kənˈvɜːʃn] — преобразование / конверсия (конвёршн)\r
3419.	evolution [ˌiːvəˈluːʃn] — эволюция (ивэлюшн)\r
3420.	expansion [ɪkˈspænʃn] — расширение / экспансия (экспэншн)\r
3421.	fluctuation [ˌflʌktʃuˈeɪʃn] — колебание (флактчуэйшн)\r
3422.	generation [ˌdʒenəˈreɪʃn] — генерация / поколение (дженэрейшн)\r
3423.	integration [ˌɪntɪˈɡreɪʃn] — интеграция (интигрейшн)\r
3424.	modification [ˌmɒdɪfɪˈkeɪʃn] — модификация (модификейшн)\r
3425.	progression [prəˈɡreʃn] — прогресс / продвижение (прэгрешн)\r
3426.	reformation [ˌrefəˈmeɪʃn] — реформирование (рэфэрмейшн)\r
3427.	regression [rɪˈɡreʃn] — регресс (ригрешн)\r
3428.	restructuring [ˌriːˈstrʌktʃərɪŋ] — реструктуризация (ристрактчэринъ)\r
3429.	transformation [ˌtrænsfəˈmeɪʃn] — трансформация (трэнсфэрмейшн)\r
3430.	transition [trænˈzɪʃn] — переход (трэнзишн)\r
Блок 3: Свойства, характеристики и качества\r
3431.	adaptable [əˈdæptəbl] — адаптируемый / гибкий (эдэптэбл)\r
3432.	authentic [ɔːˈθentɪk] — подлинный (офентик)\r
3433.	coherent [kəʊˈhɪərənt] — связный (коухиэрэнт)\r
3434.	complex [ˈkɒmpleks] — сложный / составной (комплекс)\r
3435.	consistent [kənˈsɪstənt] — последовательный (консистэнт)\r
3436.	distinct [dɪˈstɪŋkt] — отчетливый / особый (дистинкт)\r
3437.	dynamic [daɪˈnæmɪk] — динамичный (дайнэмик)\r
3438.	flexible [ˈfleksəbl] — гибкий (флексэбл)\r
3439.	genuine [ˈdʒenjuɪn] — подлинный / искренний (джениуин)\r
3440.	intricate [ˈɪntrɪkət] — запутанный / замысловатый (интрикэт)\r
3441.	precise [prɪˈsaɪs] — точный (присайс)\r
3442.	profound [prəˈfaʊnd] — глубокий (прэфаунд)\r
3443.	rigid [ˈrɪdʒɪd] — жесткий / негибкий (риджид)\r
3444.	subtle [ˈsʌtl] — утонченный / едва уловимый (сатл)\r
3445.	versatile [ˈvɜːsətaɪl] — универсальный (вёрсэтайл)\r
Блок 4: Действия, методы и манипуляции\r
3446.	analyze [ˈænəlaɪz] — анализировать (энэлайз)\r
3447.	assess [əˈses] — оценивать (эсес)\r
3448.	calculate [ˈkælkjuleɪt] — вычислять (кэлькьюлейт)\r
3449.	clarify [ˈklærəfaɪ] — прояснять (клэрэфай)\r
3450.	evaluate [ɪˈvæljueɪt] — оценивать / давать оценку (ивэльюэйт)\r
3451.	examine [ɪɡˈzæmɪn] — исследовать / рассматривать (игзэмин)\r
3452.	identify [aɪˈdentɪfaɪ] — идентифицировать (айдентифай)\r
3453.	illustrate [ˈɪləstreɪt] — иллюстрировать (илэстрейт)\r
3454.	interpret [ɪnˈtɜːprət] — интерпретировать (интёрприт)\r
3455.	investigate [ɪnˈvestɪɡeɪt] — расследовать / изучать (инвестигейт)\r
3456.	measure [ˈmeʒə(r)] — измерять (межэ)\r
3457.	monitor [ˈmɒnɪtə(r)] — отслеживать (монитэ)\r
3458.	outline [ˈaʊtlaɪn] — намечать / обрисовывать (аутлайн)\r
3459.	review [rɪˈvjuː] — рецензировать / рассматривать (ривью)\r
3460.	synthesize [ˈsɪnθəsaɪz] — синтезировать (синфэсайз)\r
Блок 3461–3500: Аргументация, дискуссия и позиция\r
3461.	advocate [ˈædvəkeɪt] — отстаивать / выступать за (эдвэкейт)\r
3462.	affirm [əˈfɜːm] — утверждать / подтверждать (эфёрм)\r
3463.	assert [əˈsɜːt] — утверждать / заявлять (эсёрт)\r
3464.	challenge [ˈtʃælɪndʒ] — подвергать сомнению / бросать вызов (чэлиндж)\r
3465.	claim [kleɪm] — утверждать / претендовать (клейм)\r
3466.	concede [kənˈsiːd] — уступать / признавать (консид)\r
3467.	contend [kənˈtend] — спорить / утверждать (контенд)\r
3468.	contradict [ˌkɒntrəˈdɪkt] — противоречить (контрэдикт)\r
3469.	counter [ˈkaʊntə(r)] — возражать / противостоять (каунтэ)\r
3470.	defend [dɪˈfend] — защищать (дифенд)\r
3471.	demonstrate [ˈdemənstreɪt] — демонстрировать (демэнстрейт)\r
3472.	disprove [ˌdɪsˈpruːv] — опровергать (диспрув)\r
3473.	dispute [dɪˈspjuːt] — оспаривать (диспьют)\r
3474.	emphasize [ˈemfəsaɪz] — подчеркивать (эмфэсайз)\r
3475.	endorse [ɪnˈdɔːs] — одобрять (индорс)\r
3476.	illustrate [ˈɪləstreɪt] — наглядно показывать (илэстрейт)\r
3477.	imply [ɪmˈplaɪ] — подразумевать (имплай)\r
3478.	justify [ˈdʒʌstɪfaɪ] — обосновывать (джастифай)\r
3479.	maintain [meɪnˈteɪn] — утверждать / отстаивать мнение (мейнтейн)\r
3480.	object [əbˈdʒekt] — возражать (обджект)\r
3481.	oppose [əˈpəʊz] — выступать против (эпоуз)\r
3482.	persuade [pəˈsweɪd] — убеждать (пэрсвейд)\r
3483.	propose [prəˈpəʊz] — предлагать (прэпоуз)\r
3484.	prove [pruːv] — доказывать (прув)\r
3485.	question [ˈkwestʃən] — ставить под сомнение (квестчэн)\r
3486.	refute [rɪˈfjuːt] — опровергать (рифьют)\r
3487.	reject [rɪˈdʒekt] — отклонять (риджект)\r
3488.	remark [rɪˈmɑːk] — замечать / комментировать (римарк)\r
3489.	state [steɪt] — заявлять / формулировать (стейт)\r
3490.	stress [stres] — делать акцент (стрес)\r
3491.	suggest [səˈdʒest] — предлагать / намекать (сэджест)\r
3492.	support [səˈpɔːt] — поддерживать (сэпорт)\r
3493.	sustain [səˈsteɪn] — подкреплять аргументами (сэстейн)\r
3494.	testify [ˈtestɪfaɪ] — свидетельствовать (тестифай)\r
3495.	underline [ˌʌndəˈlaɪn] — подчеркивать (андэлайн)\r
3496.	validate [ˈvælɪdeɪt] — подтверждать валидность (вэлидейт)\r
3497.	verify [ˈverɪfaɪ] — проверять (верифай)\r
3498.	vindicate [ˈvɪndɪkeɪt] — оправдывать (виндикейт)\r
3499.	yield [jiːld] — поддаваться аргументам / уступать (жилд)\r
3500.	sum up [sʌm ʌp] — подводить итог (сам ап)\r
УРОВЕНЬ C1 (Часть 2: 3501–3600)\r
Блок 1: Продвинутые термины анализа и исследований\r
3501.	anomaly [əˈnɒməli] — аномалия / отклонение (эномэли)\r
3502.	causality [kɔːˈzæləti] — причинно-следственная связь (козэлэти)\r
3503.	correlation [ˌkɒrəˈleɪʃn] — корреляция (корэлейшн)\r
3504.	criterion [kraɪˈtɪəriən] — критерий (крайтиэриэн)\r
3505.	empirical [ɪmˈpɪrɪkl] — эмпирический (импирикл)\r
3506.	hypothesis [haɪˈpɒθəsɪs] — гипотеза (хайпофэсис)\r
3507.	methodology [ˌmeθəˈdɒlədʒi] — методология (мезэдоладжи)\r
3508.	paradigm [ˈpærədaɪm] — парадигма (пэрэдайм)\r
3509.	qualitative [ˈkwɒlɪtətɪv] — качественный (кволитэтив)\r
3510.	quantitative [ˈkwɒntɪtətɪv] — количественный (квонтитэтив)\r
3511.	variable [ˈveəriəbl] — переменная (вээриэбл)\r
3512.	validity [vəˈlɪdəti] — валидность / достоверность (вэлидэти)\r
3513.	reliability [rɪˌlaɪəˈbɪləti] — надежность (рилайэбилити)\r
3514.	bias [ˈbaɪəs] — смещение / предвзятость (баиэс)\r
3515.	inference [ˈɪnfərəns] — вывод / умозаключение (инфэрэнс)\r
Блок 2: Сложные состояния и эмоциональные нюансы\r
3516.	alienation [ˌeɪliəˈneɪʃn] — отчуждение (эйлиэнейшн)\r
3517.	ambivalence [æmˈbɪvələns] — двойственность чувств (эмбивэлэнс)\r
3518.	apprehension [ˌæprɪˈhenʃn] — тревога / опасение (эприхеншн)\r
3519.	compassion [kəmˈpæʃn] — сострадание (компэшн)\r
3520.	despair [dɪˈspeə(r)] — отчаяние (диспээ)\r
3521.	detachment [dɪˈtætʃmənt] — отстраненность (дитэчмэнт)\r
3522.	empathy [ˈempəθi] — эмпатия (эмпэфи)\r
3523.	euphoria [juːˈfɔːriə] — эйфория (юфориэ)\r
3524.	frustration [frʌˈstreɪʃn] — разочарование / фрустрация (фрастрейшн)\r
3525.	grief [ɡriːf] — горе / скорбь (гриф)\r
3526.	indifference [ɪnˈdɪfrəns] — безразличие (индифрэнкс)\r
3527.	melancholy [ˈmelənkəli] — меланхолия (мелэнкэли)\r
3528.	nostalgia [nɒˈstældʒə] — ностальгия (ностэлджэ)\r
3529.	resentment [rɪˈzentmənt] — негодование / обида (ризентмэнт)\r
3530.	serenity [səˈrenəti] — безмятежность (сэренэти)\r
Блок 3: Управление, стратегия и принятие решений\r
3531.	benchmark [ˈbentʃmɑːk] — эталон / ориентир (бенчмарк)\r
3532.	contingency [kənˈtɪndʒənsi] — непредвиденная обстоятельность (континджэнси)\r
3533.	delegation [ˌdelɪˈɡeɪʃn] — делегирование (делигейшн)\r
3534.	feasibility [ˌfiːzəˈbɪləti] — осуществимость (физэбилити)\r
3535.	implementation [ˌɪmplɪmenˈteɪʃn] — реализация (имплиментейшн)\r
3536.	initiative [ɪˈnɪʃətɪv] — инициатива (инишэтив)\r
3537.	mitigation [ˌmɪtɪˈɡeɪʃn] — смягчение рисков (митигейшн)\r
3538.	optimization [ˌɒptɪmaɪˈzeɪʃn] — оптимизация (оптимайзейшн)\r
3539.	prioritization [praɪˌɒrətaɪˈzeɪʃn] — расстановка приоритетов (прайоритайзейшн)\r
3540.	sustainability [səˌsteɪnəˈbɪləti] — устойчивость / экологичность (сэстейнэбилити)\r
3541.	synergy [ˈsɪnədʒi] — синергия (синэрджи)\r
3542.	tactics [ˈtæktɪks] — тактика (тэктикс)\r
3543.	trajectory [trəˈdʒektəri] — траектория (трэджектэри)\r
3544.	viability [ˌvaɪəˈbɪləti] — жизнеспособность (вайэбилити)\r
3545.	vulnerability [ˌvʌlnərəˈbɪləti] — уязвимость (валнэрэбилити)\r
Блок 4: Профессиональная коммуникация C1\r
3546.	articulate [ɑːˈtɪkjuleɪt] — четко выражать (артикьюлейт)\r
3547.	collaborate [kəˈlæbəreɪt] — сотрудничать (кэлабэрейт)\r
3548.	convey [kənˈveɪ] — доносить (информацию) (конвей)\r
3549.	deliberate [dɪˈlɪbəreɪt] — совещаться / размышлять (дилибэрейт)\r
3550.	disseminate [dɪˈsemɪneɪt] — распространять (дисеминэйт)\r
3551.	elaborate [ɪˈlæbəreɪt] — конкретизировать (илабэрейт)\r
3552.	facilitate [fəˈsɪlɪteɪt] — содействовать (фэсилитейт)\r
3553.	negotiate [nɪˈɡəʊʃieɪt] — вести переговоры (нигоушиейт)\r
3554.	persuade [pəˈsweɪd] — склонять к мнению (пэрсвейд)\r
3555.	reconcile [ˈrekənsaɪl] — согласовывать / примирять (рекэнсайл)\r
3556.	address [əˈdres] — обращаться к проблеме (эдрес)\r
3557.	clarify [ˈklærəfaɪ] — вносить ясность (клэрэфай)\r
3558.	outline [ˈaʊtlaɪn] — излагать вкратце (аутлайн)\r
3559.	summarize [ˈsʌməraɪz] — резюмировать (самэрайз)\r
3560.	synthesize [ˈsɪnθəsaɪz] — обобщать (синфэсайз)\r
Блок 3561–3600: Качества ума и характера\r
3561.	astute [əˈstjuːt] — проницательный (эстьют)\r
3562.	candid [ˈkændɪd] — искренний / откровенный (кэндид)\r
3563.	conscientious [ˌkɒnʃiˈenʃəs] — добросовестный (коншиеншэс)\r
3564.	cynical [ˈsɪnɪkl] — циничный (синикл)\r
3565.	discreet [dɪˈskriːt] — сдержанный / неброский (дискрит)\r
3566.	eloquent [ˈeləkwənt] — красноречивый (элоквэнт)\r
3567.	impartial [ɪmˈpɑːʃl] — беспристрастный (импаршл)\r
3568.	ingenious [ɪnˈdʒiːniəs] — изобретательный (инджиниэс)\r
3569.	insightful [ˈɪnsaɪtfl] — глубокомысленный (инсайтфл)\r
3570.	meticulous [məˈtɪkjələs] — щепетильный (мэтикьюлэс)\r
3571.	objective [əbˈdʒektɪv] — объективный (обджектɪв)\r
3572.	pragmatic [præɡˈmætɪk] — прагматичный (прэгмэтик)\r
3573.	resilient [rɪˈzɪliənt] — стрессоустойчивый (ризилиэнт)\r
3574.	shrewd [ʃruːd] — проницательный / расчетливый (шруд)\r
3575.	tenacious [təˈneɪʃəs] — цепкий / упорный (тэнейшэс)\r
3576.	thorough [ˈθʌrə] — исчерпывающий / тщательный (фарэ)\r
3577.	unbiased [ʌnˈbaɪəst] — непредубежденный (анбаиэст)\r
3578.	versatile [ˈvɜːsətaɪl] — гибкий / эрудированный (вёрсэтайл)\r
3579.	witty [ˈwɪti] — остроумный (вити)\r
3580.	zealous [ˈzeləs] — усердный / рьяный (зэлэс)\r
3581.	ambiguity [ˌæmbɪˈɡjuːəti] — неопределенность (эмбигьюити)\r
3582.	complexity [kəmˈpleksəti] — сложность (комплексэти)\r
3583.	diversity [daɪˈvɜːsəti] — многообразие (дайвёрсэти)\r
3584.	integrity [ɪnˈteɡrəti] — честность / целостность (интегрэти)\r
3585.	lucidity [luːˈsɪdəti] — ясность ума (лусидэти)\r
3586.	objectivity [ˌɒbdʒekˈtɪvəti] — объективность (обджективити)\r
3587.	plausibility [ˌplɔːzəˈbɪləti] — правдоподобие (плозэбилити)\r
3588.	versatility [ˌvɜːsəˈtɪləti] — многогранность (вёрсэтилити)\r
3589.	subtlety [ˈsʌtlti] — тонкость (сатлти)\r
3590.	wisdom [ˈwɪzdəm] — мудрость (виздэм)\r
3591.	acumen [ˈækjumən] — проницательность / хватка (экьюмэн)\r
3592.	credibility [ˌkredəˈbɪləti] — авторитет / достоверность (кредэбилити)\r
3593.	discretion [dɪˈskreʃn] — осмотрительность (дискрешн)\r
3594.	finesse [fɪˈnes] — изящество / мастерство (финес)\r
3595.	ingenuity [ˌɪndʒəˈnjuːəti] — изобретательность (индженьюити)\r
3596.	judgement [ˈdʒʌdʒmənt] — суждение (джаджмэнт)\r
3597.	maturity [məˈtʃʊərəti] — зрелость (мэчуэрэти)\r
3598.	prowess [ˈpraʊəs] — мастерство / умение (прауэс)\r
3599.	prudence [ˈpruːdns] — благоразумие (пруднс)\r
3600.	sophistication [səˌfɪstɪˈkeɪʃn] — утонченность / изысканность (сэфистикейшн)\r
\r
`,H2=[{id:1,word:"Hello",ipa:"həˈləʊ",translation:"привет",phoneticRu:"хэлОу",level:"A1",category:"general",examples:[{en:"Hello, my name is Alex.",ru:"Привет, меня зовут Алекс.",phoneticRu:"хэлОу, май нЭйм из Эликс"}]},{id:2,word:"Weather",ipa:"ˈweðə",translation:"погода",phoneticRu:"уЭзэ",level:"A1",category:"general",examples:[{en:"Nice weather today, isn’t it?",ru:"Хорошая сегодня погода, не правда ли?",phoneticRu:"найс уЭзэ тудЭй, изнт ит"}]},{id:3,word:"Understand",ipa:"ˌʌndəˈstænd",translation:"понимать",phoneticRu:"андэстЭнд",level:"A2",category:"general"},{id:4,word:"Improve",ipa:"ɪmˈpruːv",translation:"улучшать",phoneticRu:"импрУв",level:"B1",category:"general"},{id:5,word:"Issue",ipa:"ˈɪʃuː",translation:"проблема, задача, баг",phoneticRu:"Ишью",level:"A2",category:"it",examples:[{en:"I found an issue in the checkout flow.",ru:"Я нашёл проблему в процессе оплаты.",phoneticRu:"ай фАунд эн Ишью ин зэ чЕкаут флоу"}]},{id:6,word:"Deploy",ipa:"dɪˈplɔɪ",translation:"разворачивать, публиковать код",phoneticRu:"диплОй",level:"B1",category:"it"},{id:7,word:"Requirement",ipa:"rɪˈkwaɪəmənt",translation:"требование",phoneticRu:"риквАйэмэнт",level:"B1",category:"it"},{id:8,word:"Interview",ipa:"ˈɪntəvjuː",translation:"собеседование",phoneticRu:"Интэвью",level:"B2",category:"it"}],x2=d=>d.trim().toLocaleLowerCase("ru-RU"),v2=(d,k)=>{const T=[];let f="",O=k,H="";const G=()=>{f&&T.push({text:f,level:O,block:H}),f=""};for(const j of d.split(/\r?\n/)){const K=j.trim();if(!K)continue;const A=K.match(/(?:УРОВЕНЬ|уровня)\s+(B2|B1|A2|A1|C1)(?:–C1)?\b/i);if(A){G(),O=A[1];continue}const E=K.match(/^Блок(?:\s+[^:]+)?:\s*(.+)$/);if(E){G(),H=E[1];continue}/^\d+\.\s+/.test(K)?(G(),f=K):f&&(f+=` ${K}`)}G();const q=[];for(const j of T){const K=j.text.match(/^\d+\.\s+(.+?)\s+\[([^\]]+)\]\s+—\s+(.+)$/);if(!K)continue;const A=K[3].match(/^(.*)\s+\(([^()]*)\)\s*$/);if(!A)continue;const E=K[1].trim(),_=K[2].trim(),mt=A[1].trim(),_t=A[2].trim(),ct=/tech|code|qa|software|digital|office|work|career|program|testing|debug/i.test(`${E} ${j.block}`)?"it":"general";q.push({id:1e3+q.length,word:E,ipa:_,translation:mt,phoneticRu:_t,level:j.level,category:ct,topic:j.block||"Основное"})}return q},ch=[...v2(uh,"A1"),...v2(sh,"B1")],y2=new Set(H2.map(d=>x2(d.word))),b2=[...H2,...ch.filter(d=>{const k=x2(d.word);return y2.has(k)?!1:(y2.add(k),!0)})],Vi=()=>{const[d,k]=dt.useState(!1);return{speak:(f,O="en-US")=>{if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const H=new SpeechSynthesisUtterance(f);H.lang=O,H.rate=.85,H.onstart=()=>k(!0),H.onend=()=>k(!1),H.onerror=()=>k(!1),window.speechSynthesis.speak(H)},isPlaying:d}},C2=({children:d,tone:k="blue"})=>s.jsx("span",{className:`badge badge-${k}`,children:d}),ne=({variant:d="primary",className:k="",...T})=>s.jsx("button",{className:`button button-${d} ${k}`,...T}),fh=({entry:d})=>{var f;const{speak:k,isPlaying:T}=Vi();return s.jsxs("article",{className:"word-card",children:[s.jsxs("div",{className:"word-top",children:[s.jsx(C2,{tone:d.category==="it"?"dark":"blue",children:d.level}),s.jsxs("div",{className:"word-name",children:[s.jsxs("div",{children:[s.jsx("h3",{children:d.word}),s.jsx(ne,{variant:"soft","aria-label":`Произнести ${d.word}`,onClick:()=>k(d.word),children:s.jsx(sa,{size:17,className:T?"pulse":""})})]}),s.jsxs("span",{children:["[",d.ipa,"]"]})]})]}),s.jsxs("div",{className:"word-translation",children:[s.jsx("strong",{children:d.translation}),s.jsxs("span",{children:["[",d.phoneticRu,"]"]})]}),(f=d.examples)==null?void 0:f.map(O=>s.jsxs("button",{className:"example",onClick:()=>k(O.en),children:[s.jsx("span",{className:"example-dot"}),s.jsxs("span",{children:[s.jsx("b",{children:O.en}),s.jsxs("small",{children:["[",O.phoneticRu,"]"]}),s.jsx("small",{children:O.ru})]}),s.jsx(sa,{size:15})]},O.en))]})},Cc=({eyebrow:d,title:k,action:T})=>s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[d&&s.jsx("span",{className:"eyebrow",children:d}),s.jsx("h2",{children:k})]}),T]}),oh=()=>{const[d,k]=dt.useState(""),[T,f]=dt.useState("all"),[O,H]=dt.useState("all"),[G,q]=dt.useState("all"),[j,K]=dt.useState(0),A=dt.useMemo(()=>b2.filter(M=>`${M.word} ${M.translation}`.toLowerCase().includes(d.toLowerCase())&&(T==="all"||M.level===T)&&(O==="all"||M.category===O)&&(G==="all"||M.topic===G)),[d,T,O,G]),E=dt.useMemo(()=>[...new Set(b2.map(M=>M.topic||"Основное"))].sort((M,It)=>M.localeCompare(It,"ru")),[]),_=A.slice(j*8,j*8+8),mt=_.length?j*8+1:0,_t=M=>{H(M),K(0)},ct=M=>{f(M),K(0)};return s.jsxs("section",{className:"dictionary-panel",id:"dictionary",children:[s.jsx(Cc,{eyebrow:"Блок 02 · Dictionary",title:"Слова, которые остаются",action:s.jsxs("span",{className:"progress-label",children:[A.length," слов найдено"]})}),s.jsxs("div",{className:"search-box",children:[s.jsx(eh,{size:18}),s.jsx("input",{value:d,onChange:M=>{k(M.target.value),K(0)},placeholder:"Найти слово или перевод"})]}),s.jsxs("div",{className:"filter-row",children:[s.jsx("div",{className:"segmented",children:["all","general","it"].map(M=>s.jsx("button",{className:O===M?"active":"",onClick:()=>_t(M),children:M==="all"?"Все":M==="general"?"Разговорный":"IT & работа"},M))}),s.jsx("div",{className:"level-filter",children:["all","A1","A2","B1","B2","C1"].map(M=>s.jsx("button",{className:T===M?"active":"",onClick:()=>ct(M),children:M==="all"?"Все уровни":M},M))}),s.jsxs("select",{className:"topic-filter",value:G,onChange:M=>{q(M.target.value),K(0)},"aria-label":"Выбрать тему",children:[s.jsx("option",{value:"all",children:"Все темы"}),E.map(M=>s.jsx("option",{value:M,children:M},M))]})]}),s.jsxs("div",{className:"dictionary-page-label",children:["Слова ",mt,"–",Math.min(j*8+8,A.length)," из ",A.length]}),s.jsx("div",{className:"dictionary-grid",children:_.map(M=>s.jsx(fh,{entry:M},M.id))}),A.length===0&&s.jsx("div",{className:"empty-state",children:"Слов пока нет. Попробуйте другой запрос."}),A.length>8&&s.jsxs("div",{className:"dictionary-pagination",children:[s.jsxs(ne,{variant:"ghost",disabled:j===0,onClick:()=>K(Math.max(0,j-1)),children:[s.jsx(Z3,{size:16})," Назад"]}),s.jsxs("span",{children:["Порция ",j+1," из ",Math.ceil(A.length/8)]}),s.jsxs(ne,{variant:"soft",disabled:j>=Math.ceil(A.length/8)-1,onClick:()=>K(Math.min(Math.ceil(A.length/8)-1,j+1)),children:["Ещё 8 ",s.jsx(K3,{size:16})]})]})]})},dh=({email:d,onRegister:k,onLogout:T,onClose:f})=>{const[O,H]=dt.useState(d),G=q=>{q.preventDefault(),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(O)&&(k(O),f())};return s.jsx("div",{className:"account-backdrop",role:"presentation",onClick:f,children:s.jsxs("section",{className:"account-panel",role:"dialog","aria-modal":"true","aria-labelledby":"account-title",onClick:q=>q.stopPropagation(),children:[s.jsx("button",{className:"account-close",type:"button",onClick:f,"aria-label":"Закрыть",children:s.jsx(ih,{size:17})}),s.jsx("span",{className:"eyebrow",children:"Ваш профиль"}),s.jsx("h2",{id:"account-title",children:"Сохрани свой прогресс"}),s.jsx("p",{children:"Введи e-mail, чтобы получать один и тот же прогресс на телефоне и компьютере."}),d?s.jsxs(s.Fragment,{children:[s.jsx("strong",{className:"account-email",children:d}),s.jsxs(ne,{variant:"ghost",onClick:T,children:[s.jsx($3,{size:16})," Выйти"]})]}):s.jsxs("form",{onSubmit:G,children:[s.jsx("input",{type:"email",value:O,onChange:q=>H(q.target.value),placeholder:"you@example.com",required:!0}),s.jsxs(ne,{type:"submit",children:[s.jsx(F3,{size:16})," Зарегистрироваться"]})]})]})})},mh=({onContinue:d})=>s.jsxs("section",{className:"hero",children:[s.jsxs("div",{className:"hero-copy",children:[s.jsx("span",{className:"eyebrow",children:"Четверг, 24 сентября · 12 минут сегодня"}),s.jsxs("h1",{children:["Английский, который",s.jsx("br",{}),s.jsx("i",{children:"работает"})," на тебя."]}),s.jsx("p",{children:"Маленькие шаги каждый день. От первых букв до уверенного разговора на IT-собеседовании."}),s.jsxs(ne,{onClick:d,children:["Продолжить обучение ",s.jsx(A2,{size:16,fill:"currentColor"})]})]}),s.jsxs("div",{className:"hero-orbit",children:[s.jsx("div",{className:"orbit-ring ring-one"}),s.jsx("div",{className:"orbit-ring ring-two"}),s.jsxs("div",{className:"hero-note note-one",children:[s.jsx(J3,{size:16}),s.jsxs("span",{children:["Слушай",s.jsx("br",{}),s.jsx("b",{children:"и повторяй"})]})]}),s.jsxs("div",{className:"hero-note note-two",children:[s.jsx(N2,{size:16}),s.jsxs("span",{children:["+30 XP",s.jsx("br",{}),s.jsx("b",{children:"за урок"})]})]}),s.jsxs("div",{className:"orbit-core",children:[s.jsx("span",{children:"01"}),s.jsx("strong",{children:"START"}),s.jsx("small",{children:"твой уровень"})]})]})]}),hh=[{label:"Вопрос",focus:"DO",phrase:"Do you work in IT?",ru:"Ты работаешь в IT?"},{label:"Утверждение",focus:"WORK",phrase:"I work in IT.",ru:"Я работаю в IT."},{label:"Отрицание",focus:"DON'T",phrase:"I don't work in IT.",ru:"Я не работаю в IT."}],ph=()=>{const{speak:d}=Vi();return s.jsxs("div",{className:"matrix",children:[s.jsxs("div",{className:"matrix-heading",children:[s.jsx("span",{children:"Present Simple · work"}),s.jsx("small",{children:"Нажмите на ячейку, чтобы услышать фразу"})]}),s.jsx("div",{className:"matrix-grid",children:hh.map(k=>s.jsxs("button",{className:"matrix-cell",onClick:()=>d(k.phrase),children:[s.jsx("span",{children:k.label}),s.jsxs("strong",{children:[k.phrase.replace(k.focus,"").trim()," ",s.jsx("em",{children:k.focus})]}),s.jsx("small",{children:k.ru}),s.jsx(sa,{size:15})]},k.label))})]})},vh=()=>{const{speak:d}=Vi(),[k,T]=dt.useState(!1),[f,O]=dt.useState(""),H="I found an issue.",G=()=>{const q=window.webkitSpeechRecognition;if(!q){O("Распознавание доступно в Chrome");return}const j=new q;j.lang="en-US",j.onstart=()=>T(!0),j.onend=()=>T(!1),j.onresult=K=>O(K.results[0][0].transcript),j.start()};return s.jsxs("div",{className:"speech-card",children:[s.jsxs("div",{children:[s.jsx("span",{className:"eyebrow",children:"Говорим вслух"}),s.jsx("h3",{children:"Проверим рабочую фразу?"}),s.jsx("p",{children:H}),f&&s.jsxs("small",{className:"speech-result",children:["Вы сказали: ",f]})]}),s.jsxs("div",{className:"speech-actions",children:[s.jsx(ne,{variant:"soft",onClick:()=>d(H),"aria-label":"Прослушать фразу",children:s.jsx(sa,{size:18})}),s.jsxs(ne,{className:k?"listening":"",onClick:G,children:[s.jsx(th,{size:17})," ",k?"Слушаю":"Говорю"]})]})]})},yh=()=>s.jsxs("section",{className:"practice-section",children:[s.jsxs("div",{children:[s.jsx(Cc,{eyebrow:"Практика речи",title:"Сначала услышать, потом сказать"}),s.jsx(ph,{})]}),s.jsx(vh,{})]}),Nc=({icon:d,value:k,label:T,tone:f})=>s.jsxs("div",{className:`stat-card ${f}`,children:[s.jsx("span",{className:"stat-icon",children:d}),s.jsx("strong",{children:k}),s.jsx("span",{children:T})]}),bh=({streak:d,xp:k,lessons:T,total:f})=>s.jsxs("div",{className:"stats",children:[s.jsx(Nc,{icon:s.jsx(w2,{size:18}),value:`${d}`,label:"дня подряд",tone:"stat-coral"}),s.jsx(Nc,{icon:s.jsx(A2,{size:18}),value:`${k}`,label:"опыта собрано",tone:"stat-blue"}),s.jsx(Nc,{icon:s.jsx(N2,{size:18}),value:`${T}/${f}`,label:"уроков пройдено",tone:"stat-gold"})]}),gh=[{label:"Обзор",icon:I3,target:"top"},{label:"Мой путь",icon:ah,target:"roadmap"},{label:"Программа",icon:O2,target:"program"},{label:"Словарь",icon:z2,target:"dictionary"}],kh=({active:d,onNavigate:k})=>s.jsxs("aside",{className:"sidebar",children:[s.jsxs("div",{className:"brand",children:[s.jsx("span",{className:"brand-mark",children:"a"}),s.jsx("span",{children:"arTami"})]}),s.jsxs("div",{className:"profile",children:[s.jsx("div",{className:"avatar",children:"QA"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Привет, Алекс"}),s.jsx("small",{children:"Твой уровень · START"})]})]}),s.jsx("nav",{children:gh.map(({label:T,icon:f,target:O})=>s.jsxs("button",{className:d===T?"active":"",onClick:()=>k(T,O),children:[s.jsx(f,{size:18}),T]},T))}),s.jsxs("div",{className:"sidebar-bottom",children:[s.jsxs("button",{children:[s.jsx(j2,{size:17})," Настройки"]}),s.jsxs("div",{className:"free-note",children:[s.jsx(rh,{size:16}),s.jsxs("span",{children:[s.jsx("b",{children:"Учись в своём темпе"}),s.jsx("small",{children:"Все материалы бесплатны"})]})]})]})]}),Eh=({streak:d,email:k,onAccount:T})=>s.jsxs("header",{className:"topbar",children:[s.jsx("button",{className:"mobile-menu","aria-label":"Открыть меню",children:s.jsx(P3,{size:20})}),s.jsxs("span",{className:"breadcrumb",children:["Путь обучения ",s.jsx("b",{children:"/"})," Обзор"]}),s.jsxs("div",{className:"top-actions",children:[s.jsxs("span",{className:"streak",children:[s.jsx(w2,{size:17,fill:"currentColor"})," ",d," дня"]}),s.jsx("button",{className:"icon-button","aria-label":"Настройки",children:s.jsx(j2,{size:18})}),s.jsx("button",{className:"mini-avatar",type:"button",onClick:T,"aria-label":k?`Профиль ${k}`:"Зарегистрироваться",children:k?k.slice(0,1).toUpperCase():"A"})]})]}),_2=`Шаг 1. Английский алфавит (Alphabet)\r
В английском языке 26 букв (6 гласных и 20 согласных), которые дают 44 звука.\r
	Aa [eɪ] — (эй)\r
	Bb [biː] — (би)\r
	Cc [siː] — (си)\r
	Dd [diː] — (ди)\r
	Ee [iː] — (и)\r
	Ff [ef] — (эф)\r
	Gg [dʒiː] — (джи)\r
	Hh [eɪtʃ] — (эйч)\r
	Ii [aɪ] — (ай)\r
	Jj [dʒeɪ] — (жей)\r
	Kk [keɪ] — (кей)\r
	Ll [el] — (эл)\r
	Mm [em] — (эм)\r
	Nn [en] — (эн)\r
	Oo [əʊ] — (оу)\r
	Pp [piː] — (пи)\r
	Qq [kjuː] — (кью)\r
	Rr [ɑː(r)] — (ар)\r
	Ss [es] — (эс)\r
	Tt [tiː] — (ти)\r
	Uu [juː] — (ю)\r
	Vv [viː] — (ви)\r
	Ww [ˈdʌbl juː] — (дабл-ю)\r
	Xx [eks] — (экс)\r
	Yy [waɪ] — (уай)\r
	Zz [zed] — (зед)\r
Шаг 2. Базовые правила чтения\r
1. Открытый слог (заканчивается на гласную или гласную + немая e на конце)\r
Буква читается так же, как называется в алфавите:\r
	a → make [meɪk] — делать (мейк)\r
	i → like [laɪk] — нравиться (лайк)\r
	o → home [həʊm] — дом (хоум)\r
	u → use [juːz] — использовать (ьюз)\r
2. Закрытый слог (заканчивается на согласную)\r
Гласная дает короткий звук:\r
	a → cat [kæt] — кошка (кэт)\r
	i → big [bɪɡ] — большой (биг)\r
	o → dog [dɒɡ] — собака (дог)\r
	u → cup [kʌp] — чашка (кап)\r
	e → pen [pen] — ручка (пен)\r
3. Главные комбинации букв\r
	th → think [θɪŋk] — думать (финк) / this [ðɪs] — этот (зис)\r
	sh → ship [ʃɪp] — корабль (шип)\r
	ch → chin [tʃɪn] — подбородок (чин)\r
	ee / ea → see [siː] — видеть (си) / tea [tiː] — чай (ти)\r
	oo → book [bʊk] — книга (бук)\r
\r
Шаг 3. Первые отдельные слова и словосочетания\r
Базовые местоимения\r
	I [aɪ] — я (ай)\r
	you [juː] — ты / вы (ю)\r
	we [wiː] — мы (уи)\r
	they [ðeɪ] — они (зей)\r
	he [hiː] — он (хи)\r
	she [ʃiː] — она (ши)\r
	it [ɪt] — оно / это (ит)\r
\r
Базовые прилагательные\r
	big [bɪɡ] — большой (биг)\r
	small [smɔːl] — маленький (смол)\r
	good [ɡʊd] — хороший (гуд)\r
	bad [bæd] — плохой (бэд)\r
	new [njuː] — новый (нью)\r
	old [əʊld] — старый (оулд)\r
Примеры словосочетаний\r
	a big city [ə bɪɡ ˈsɪti] — большой город (э биг сити)\r
	a new car [ə njuː kɑː(r)] — новая машина (э нью кар)\r
	a good friend [ə ɡʊd frend] — хороший друг (э гуд френд)\r
	this old house [ðɪs əʊld haʊs] — этот старый дом (зис оулд хаус)\r
\r
\r
Шаг 4. Фундаментальная таблица времен (Simple)\r
Строим систему времен точно по формату вашего изображения (Вопрос | Утверждение | Отрицание): \r
\r
\r
Время	ВОПРОС	УТВЕРЖДЕНИЕ	ОТРИЦАНИЕ\r
БУДУЩЕЕ\r
(Future Simple)	WILL + I / YOU / WE / THEY / HE / SHE + LOVE? 	I / YOU / WE / THEY / HE / SHE + WILL LOVE	I / YOU / WE / THEY / HE / SHE + WILL NOT (WON'T) LOVE\r
НАСТОЯЩЕЕ (Present Simple)	DO + I / YOU / WE / THEY + LOVE? \r
\r
\r
DOES + HE / SHE + LOVE? 	I / YOU / WE / THEY + LOVE\r
\r
\r
HE / SHE + LOVES	I / YOU / WE / THEY + DON'T LOVE\r
\r
\r
HE / SHE + DOESN'T LOVE\r
ПРОШЕДШЕЕ (Past Simple)	DID + I / YOU / WE / THEY / HE / SHE + LOVE? 	I / YOU / WE / THEY / HE / SHE + LOVED	I / YOU / WE / THEY / HE / SHE + DID NOT (DIDN'T) LOVE\r
\r
\r
Шаг 5. Построение простых предложений\r
В английском языке порядок слов строго фиксирован:\r
"Подлежащее (Кто/Что?)"+"Сказуемое (Что делает?)"+"Дополнение (Кого/Что?)" \r
Примеры:\r
	Утверждение (Настоящее):\r
	I work every day. [aɪ wɜːk ˈevri deɪ] — Я работаю каждый день (ай уорк эври дей).\r
	She loves music. [ʃiː lʌvz ˈmjuːzɪk] — Она любит музыку (ши лавз мьюзик).\r
	Отрицание (Прошедшее):\r
	I didn't work yesterday. [aɪ dɪdnt wɜːk ˈjestədeɪ] — Я не работал вчера (ай диднт уорк естедей).\r
	Вопрос (Будущее):\r
	Will you work tomorrow? [wɪl juː wɜːk təˈmɒrəʊ] — Ты будешь работать завтра? (уил ю уорк томороу).\r
\r
Глагол TO BE (Быть / Находиться / Являться)\r
глагол TO BE (быть, являться, находиться). В английском языке предложение не может существовать без глагола.\r
Если в русском мы можем сказать: «Я дома», «Она красивая», «Он учитель» (без действия), то в английском мы обязаны поставить глагол-связку: «Я ЕСМЬ дома», «Она ЕСТЬ красивая», «Он ЕСТЬ учитель».\r
\r
В отличие от обычных глаголов, to be видоизменяется по лицам.\r
1. Настоящее время (Present Simple of TO BE)\r
	I am [aɪ æm] — я есть (ай эм) → сокращение: I'm [aɪm] (айм)\r
	You are [juː ɑː(r)] — ты / вы есть (ю ар) → You're [jʊə(r)] (юр)\r
	We are [wiː ɑː(r)] — мы есть (уи ар) → We're [wɪə(r)] (уир)\r
	They are [ðeɪ ɑː(r)] — они есть (зей ар) → They're [ðeə(r)] (зеэр)\r
	He is [hiː ɪz] — он есть (хи из) → He's [hiːz] (хиз)\r
	She is [ʃiː ɪz] — она есть (ши из) → She's [ʃiːz] (шиз)\r
	It is [ɪt ɪz] — оно / это есть (ит из) → It's [ɪts] (итс)\r
Построение предложений с TO BE:\r
	Утверждение:\r
	I am a designer. [aɪ æm ə dɪˈzaɪnə(r)] — Я дизайнер (ай эм э дизайнэр).\r
	She is happy. [ʃiː ɪz ˈhæpi] — Она счастлива (ши из хэпи).\r
	Отрицание (добавляем NOT):\r
	I am not tired. [aɪ æm nɒt ˈtaɪəd] — Я не устал (ай эм нот тайэрд).\r
	He is not (isn't) here. [hiː ɪznt hɪə(r)] — Его здесь нет (хи изнт хиэр).\r
	Вопрос (выносим AM / IS / ARE в начало):\r
	Are you ready? [ɑː(r) juː ˈredi] — Ты готов? (ар ю реди).\r
	Is it cold? [ɪz ɪt kəʊld] — Холодно? (из ит коулд).\r
2. Прошедшее и будущее время глагола TO BE\r
	Прошедшее (Past Simple):\r
	was [wɒz] (уоз) — для I, He, She, It\r
	I was at home. [aɪ wɒz æt həʊm] — Я был дома (ай уоз эт хоум).\r
	were [wɜː(r)] (уёр) — для You, We, They\r
	They were busy. [ðeɪ wɜː(r) ˈbɪzi] — Они были заняты (зей уёр бизи).\r
	Будущее (Future Simple):\r
	will be [wɪl biː] (уил би) — для всех лиц\r
	I will be there. [aɪ wɪl biː ðeə(r)] — Я буду там (ай уил би зеэр).\r
Шаг 6. Набор новых базовых слов (Лексика для практики)\r
Выучим важные существительные и прилагательные с транскрипцией:\r
Существительные (Nouns)\r
	home [həʊm] — дом (хоум)\r
	city [ˈsɪti] — город (сити)\r
	friend [frend] — друг (френд)\r
	family [ˈfæməli] — семья (фэмэли)\r
	work [wɜːk] — работа (уорк)\r
	time [taɪm] — время (тайм)\r
	money [ˈmʌni] — деньги (мани)\r
	weather [ˈweðə(r)] — погода (уэзэр)\r
Прилагательные (Adjectives)\r
	ready [ˈredi] — готовый (реди)\r
	busy [ˈbɪzi] — занятой (бизи)\r
	tired [ˈtaɪəd] — уставший (тайэрд)\r
	happy [ˈhæpi] — счастливый (хэпи)\r
	cold [kəʊld] — холодный (коулд)\r
	warm [wɔːm] — теплый (уорм)\r
	late [leɪt] — опоздавший / поздний (лейт)\r
\r
\r
Исправляю и дополняю. Добавил транскрипцию и чтение для термина Conjunction, а также для названий всех остальных частей речи.\r
Тема: Части речи в английском языке (Parts of Speech)\r
Чтобы правильно строить предложения, нужно понимать, из каких «кирпичиков» они состоят. В английском языке 8 основных частей речи:\r
1. Noun [naʊn] — Существительное (Наун)\r
Обозначает предмет, человека, место или идею. Отвечает на вопросы Кто? Что?\r
	cat [kæt] — кошка (кэт)\r
	city [ˈsɪti] — город (сити)\r
	art [ɑːt] — искусство (арт)\r
2. Pronoun [ˈprəʊnaʊn] — Местоимение (Пронаун)\r
Заменяет существительное, чтобы избежать повторов.\r
	I [aɪ] — я (ай)\r
	he [hiː] — он (хи)\r
	they [ðeɪ] — они (зей)\r
3. Verb [vɜːb] — Глагол (Вёрб)\r
Ядро английского предложения. Показывает действие или состояние. Отвечает на вопросы Что делать? Что сделать?\r
	draw [drɔː] — рисовать (дро)\r
	create [kriˈeɪt] — создавать (криэйт)\r
	be [biː] — быть (би)\r
4. Adjective [ˈædʒɪktɪv] — Прилагательное (Эджектив)\r
Описывает свойства предмета или человека. Отвечает на вопросы Какой? Какая? Какое?\r
	bright [braɪt] — яркий (брайт)\r
	beautiful [ˈbjuːtɪfl] — красивый (бьютифл)\r
5. Adverb [ˈædvɜːb] — Наречие (Эдвёрб)\r
Описывает глагол, прилагательное или другое наречие. Отвечает на вопросы Как? Где? Когда?\r
	quickly [ˈkwɪkli] — быстро (квикли)\r
	well [wel] — хорошо (уэл)\r
6. Preposition [ˌprepəˈzɪʃn] — Предлог (Препозишн)\r
Связывает слова между собой в пространстве и времени.\r
	in [ɪn] — в (ин)\r
	on [ɒn] — на (он)\r
	at [æt] — у / в (эт)\r
7. Conjunction [kənˈdʒʌŋkʃn] — Союз (Кэнджанкшн)\r
Соединяет отдельные слова, фразы или части сложного предложения.\r
	and [ænd] — и (энд)\r
	but [bʌt] — но (бат)\r
	because [bɪˈkɒz] — потому что (бикоз)\r
8. Article [ˈɑːtɪkl] — Артикль (Артикл)\r
Служебное слово перед существительным. В русском языке артиклей нет. Они указывают на определенность или неопределенность предмета:\r
	a / an [ə / ən] — неопределенный артикль (любой, один из многих). An ставится перед гласными.\r
	a book [ə bʊk] — (какая-то) книга (э бук)\r
	an apple [ən ˈæpl] — (какое-то) яблоко (эн эпл)\r
	the [ðə / ðɪ] — определенный артикль (конкретный предмет, о котором уже известно собеседникам).\r
	the book [ðə bʊk] — эта конкретная книга (зэ бук)\r
Список слов для запоминания (Vocabulary)\r
Термины темы (Части речи)\r
	noun [naʊn] — существительное (наун)\r
	pronoun [ˈprəʊnaʊn] — местоимение (пронаун)\r
	verb [vɜːb] — глагол (вёрб)\r
	adjective [ˈædʒɪktɪv] — прилагательное (эджектив)\r
	adverb [ˈædvɜːb] — наречие (эдвёрб)\r
	preposition [ˌprepəˈzɪʃn] — предлог (препозишн)\r
	conjunction [kənˈdʒʌŋkʃn] — союз (кэнджанкшн)\r
	article [ˈɑːtɪkl] — артикль (артикл)\r
Практическая лексика\r
	art [ɑːt] — искусство (арт)\r
	picture [ˈpɪktʃə(r)] — картина / изображение (пикчэ)\r
	color [ˈkʌlə(r)] — цвет (калэ)\r
	room [ruːm] — комната (рум)\r
	bright [braɪt] — яркий (брайт)\r
	beautiful [ˈbjuːtɪfl] — красивый (бьютифл)\r
	quickly [ˈkwɪkli] — быстро (квикли)\r
	because [bɪˈkɒz] — потому что (бикоз)\r
\r
\r
Длительные времена (Группа Continuous / Progressive).\r
Если времена Simple передают регулярность, факты или последовательность действий, то времена Continuous описывают процесс, происходящий в конкретный момент времени (прямо сейчас, в определенный момент в прошлом или будущем).\r
Тема: Времена группы Continuous (Present, Past, Future)\r
Формула любого времени Continuous:\r
"Глагол TO BE (в нужном времени)"+"Основной глагол с окончанием -ING" \r
Таблица времен Continuous (в привычном вам формате):\r
Время	ВОПРОС	УТВЕРЖДЕНИЕ	ОТРИЦАНИЕ\r
БУДУЩЕЕ (Future Continuous)	WILL + I/YOU/WE/THEY/HE/SHE + BE WORKING?	I/YOU/WE/THEY/HE/SHE + WILL BE WORKING	I/YOU/WE/THEY/HE/SHE + WILL NOT (WON'T) BE WORKING\r
НАСТОЯЩЕЕ (Present Continuous)	AM + I + WORKING?\r
\r
IS + HE/SHE/IT + WORKING?\r
\r
ARE + YOU/WE/THEY + WORKING?	I + AM WORKING\r
\r
HE/SHE/IT + IS WORKING\r
\r
YOU/WE/THEY + ARE WORKING	I + AM NOT WORKING\r
\r
HE/SHE/IT + IS NOT (ISN'T) WORKING\r
\r
YOU/WE/THEY + ARE NOT (AREN'T) WORKING\r
ПРОШЕДШЕЕ (Past Continuous)	WAS + I/HE/SHE/IT + WORKING?\r
\r
WERE + YOU/WE/THEY + WORKING?	I/HE/SHE/IT + WAS WORKING\r
\r
YOU/WE/THEY + WERE WORKING	I/HE/SHE/IT + WAS NOT (WASN'T) WORKING\r
\r
YOU/WE/THEY + WERE NOT (WEREN'T) WORKING\r
Разбор на примерах:\r
	Present Continuous (Прямо сейчас):\r
	I am drawing now. [aɪ æm drɔːɪŋ naʊ] — Я рисую сейчас (ай эм дроинъ нау).\r
	Is she sleeping at the moment? [ɪz ʃiː sliːpɪŋ æt ðə ˈməʊmənt] — Она спит в данный момент? (из ши слипинъ эт зэ моумэнт).\r
	Past Continuous (В конкретный момент в прошлом):\r
	I was working at 5 PM yesterday. [aɪ wɒz ˈwɜːkɪŋ æt faɪv piː-em ˈjestədeɪ] — Я работал в 5 вечера вчера (ай уоз уоркинъ эт файв пи-эм естедей).\r
	Future Continuous (В конкретный момент в будущем):\r
	They will be playing tomorrow at 3. [ðeɪ wɪl biː ˈpleɪɪŋ təˈmɒrəʊ æt θriː] — Они будут играть завтра в 3 часа (зей уил би плейинъ томороу эт фри).\r
Глаголы состояния (Stative Verbs) — ВАЖНО!\r
Некоторые глаголы НЕ употребляются в Continuous, так как они описывают состояние, а не динамический процесс. С ними используется Simple:\r
	love [lʌv] — любить (лав)\r
	like [laɪk] — нравиться (лайк)\r
	know [nəʊ] — знать (ноу)\r
	want [wɒnt] — хотеть (уонт)\r
	understand [ˌʌndəˈstænd] — понимать (эндэстэнд)\r
Правильно: I want coffee. [aɪ wɒnt ˈkɒfi] — Я хочу кофе (ай уонт кофи).\r
Неправильно: ~~I am wanting coffee.~~\r
Список слов для запоминания (Vocabulary)\r
Маркеры времени (Time Markers for Continuous)\r
	now [naʊ] — сейчас (нау)\r
	at the moment [æt ðə ˈməʊmənt] — в данный момент (эт зэ моумэнт)\r
	still [stɪl] — всё еще (стил)\r
	at 5 o'clock [æt faɪv əˈklɒk] — в 5 часов (эт файв о'клок)\r
Глаголы действия (Action Verbs)\r
	read [riːd] — читать (рид)\r
	write [raɪt] — писать (райт)\r
	listen [ˈlɪsn] — слушать (лисн)\r
	sleep [sliːp] — спать (слип)\r
	play [pleɪ] — играть (плей)\r
	cook [kʊk] — готовить еду (кук)\r
	watch [wɒtʃ] — смотреть / наблюдать (уотч)\r
	run [rʌn] — бегать (ран)\r
Глаголы состояния (Stative Verbs)\r
	understand [ˌʌndəˈstænd] — понимать (эндэстэнд)\r
	remember [rɪˈmembə(r)] — помнить (римембэ)\r
	forget [fəˈɡet] — забывать (фэгет)\r
	prefer [prɪˈfɜː(r)] — предпочитать (прифёр)\r
\r
\r
Завершенные времена (Группа Perfect).\r
Среди всех тем английского языка Perfect часто вызывает больше всего вопросов у русскоязычных студентов. Суть этой группы времён — СВЯЗЬ ДЕЙСТВИЯ С МОМЕНТОМ ВРЕМЕНИ ИЛИ РЕЗУЛЬТАТ. Nam не важно, когда именно произошел факт, нам важен результат прямо сейчас (или к определенному моменту в прошлом/будущем).\r
Тема: Времена группы Perfect (Present, Past, Future)\r
Формула любого времени Perfect:\r
"Вспомогательный глагол HAVE (в нужном времени)"+"3-я форма глагола (V3 / -ed)" \r
	Для правильных глаголов 3-я форма = окончание -ed (work → worked).\r
	Для неправильных глаголов используется третья колонка из таблицы неправильных глаголов (go → gone, see → seen).\r
Таблица времен Perfect (в нашем привычном формате):\r
Время	ВОПРОС	УТВЕРЖДЕНИЕ	ОТРИЦАНИЕ\r
БУДУЩЕЕ (Future Perfect)	WILL + I/YOU/WE/THEY/HE/SHE + HAVE DONE?	I/YOU/WE/THEY/HE/SHE + WILL HAVE DONE	I/YOU/WE/THEY/HE/SHE + WILL NOT (WON'T) HAVE DONE\r
НАСТОЯЩЕЕ (Present Perfect)	HAVE + I/YOU/WE/THEY + DONE?\r
\r
HAS + HE/SHE/IT + DONE?	I/YOU/WE/THEY + HAVE DONE\r
\r
HE/SHE/IT + HAS DONE	I/YOU/WE/THEY + HAVEN'T DONE\r
\r
HE/SHE/IT + HASN'T DONE\r
ПРОШЕДШЕЕ (Past Perfect)	HAD + I/YOU/WE/THEY/HE/SHE + DONE?	I/YOU/WE/THEY/HE/SHE + HAD DONE	I/YOU/WE/THEY/HE/SHE + HAD NOT (HADN'T) DONE\r
Разбор времён на примерах:\r
1. Present Perfect (Результат к данному моменту / Личный опыт)\r
Показывает действие в прошлом, эффект от которого мы видим прямо сейчас.\r
	I have finished my project. [aɪ hæv ˈfɪnɪʃt maɪ ˈprɒdʒekt] — Я закончил свой проект (ай хэв финишт май проект). → Результат: проект готов, я свободен.\r
	She has lost her key. [ʃiː hæz lɒst hɜː kiː] — Она потеряла свой ключ (ши хэз лост хёр ки). → Результат: она не может войти в дом прямо сейчас.\r
2. Past Perfect (Предпрошедшее время — «действие до другого действия в прошлом»)\r
Используется, когда одно действие в прошлом произошло раньше другого действия в прошлом.\r
	When I arrived, they had already left. [wen aɪ əˈraɪvd ðeɪ hæd ɔːlˈredi left] — Когда я приехал, они уже ушли (уэн ай эрайвд зей хэд олреди лефт). → Сначала они ушли, и только потом я приехал.\r
3. Future Perfect (Действие, которое завершится к определенному моменту в будущем)\r
	I will have done this work by 5 PM. [aɪ wɪl hæv dʌn ðɪs wɜːk baɪ faɪv piː-em] — Я сделаю эту работу к 5 часам вечера (ай уил хэв дан зис уорк бай файв пи-эм).\r
Важнейшие неправильные глаголы (Irregular Verbs — Top 15)\r
Для работы с Perfect нужно знать 3-ю форму (V3):\r
	be [biː] (би) — was/were [wɒz / wɜː(r)] — been [biːn] (бин) — быть\r
	do [duː] (ду) — did [dɪd] — done [dʌn] (дан) — делать\r
	go [ɡəʊ] (гоу) — went [went] — gone [ɡɒn] (гон) — идти / ехать\r
	see [siː] (си) — saw [sɔː] — seen [siːn] (син) — видеть\r
	make [meɪk] (мейк) — made [meɪd] — made [meɪd] (мейд) — делать / создавать\r
	take [teɪk] (тейк) — took [tʊk] — taken [ˈteɪkən] (тейкэн) — брать\r
	get [ɡet] (гет) — got [ɡɒt] — got / gotten [ˈɡɒtn] (готн) — получать\r
	give [ɡɪv] (гив) — gave [ɡeɪv] — given [ˈɡɪvn] (гивн) — давать\r
	know [nəʊ] (ноу) — knew [njuː] — known [nəʊn] (ноун) — знать\r
	think [θɪŋk] (финк) — thought [θɔːt] — thought [θɔːt] (фот) — думать\r
	come [kʌm] (кам) — came [keɪm] — come [kʌm] (кам) — приходить\r
	buy [baɪ] (бай) — bought [bɔːt] — bought [bɔːt] (бот) — покупать\r
	write [raɪt] (райт) — wrote [rəʊt] — written [ˈrɪtn] (ритн) — писать\r
	find [faɪnd] (файнд) — found [faʊnd] — found [faʊnd] (фаунд) — находить\r
	leave [liːv] (лив) — left [left] — left [left] (лефт) — уходить / покидать / оставлять\r
Список слов для запоминания (Vocabulary)\r
Маркеры времени Perfect (Time Markers)\r
	already [ɔːlˈredi] — уже (олреди)\r
	yet [jet] — еще / уже (в вопросах и отрицаниях) (йет)\r
	just [dʒʌst] — только что (джаст)\r
	ever [ˈevə(r)] — когда-либо (эвэ)\r
	never [ˈnevə(r)] — никогда (нэвэ)\r
	recently [ˈriːsntli] — недавно (рисэнтли)\r
	by the time [baɪ ðə taɪm] — к тому времени как (бай зэ тайм)\r
	before [bɪˈfɔː(r)] — до / прежде чем (бифор)\r
Существительные темы\r
	result [rɪˈzʌlt] — результат (ризалт)\r
	experience [ɪkˈspɪəriəns] — опыт (экспириэнс)\r
	project [ˈprɒdʒekt] — проект (проект)\r
	goal [ɡəʊl] — цель (гоул)\r
	success [səkˈses] — успех (саксес)\r
\r
Perfect Continuous (Завершенно-длительные времена).\r
Эта группа совмещает в себе смысл Continuous (процесс) и Perfect (результат к определённому моменту или длительность процесса).\r
Времена Perfect Continuous используются, чтобы показать действие, которое началось в прошлом, продолжалось некоторое время и всё ещё длится или только что закончилось с видимым результатом.\r
Тема: Времена группы Perfect Continuous (Present, Past, Future)\r
Формула любого времени Perfect Continuous:\r
"Глагол HAVE (в нужном времени)"+"BEEN"+"Основной глагол с окончанием -ING" \r
Таблица времен Perfect Continuous (в нашем формате):\r
Время	ВОПРОС	УТВЕРЖДЕНИЕ	ОТРИЦАНИЕ\r
БУДУЩЕЕ (Future Perfect Continuous)	WILL + I/YOU/WE/THEY/HE/SHE + HAVE BEEN WORKING?	I/YOU/WE/THEY/HE/SHE + WILL HAVE BEEN WORKING	I/YOU/WE/THEY/HE/SHE + WILL NOT (WON'T) HAVE BEEN WORKING\r
НАСТОЯЩЕЕ (Present Perfect Continuous)	HAVE + I/YOU/WE/THEY + BEEN WORKING?\r
\r
HAS + HE/SHE/IT + BEEN WORKING?	I/YOU/WE/THEY + HAVE BEEN WORKING\r
\r
HE/SHE/IT + HAS BEEN WORKING	I/YOU/WE/THEY + HAVEN'T BEEN WORKING\r
\r
HE/SHE/IT + HASN'T BEEN WORKING\r
ПРОШЕДШЕЕ (Past Perfect Continuous)	HAD + I/YOU/WE/THEY/HE/SHE + BEEN WORKING?	I/YOU/WE/THEY/HE/SHE + HAD BEEN WORKING	I/YOU/WE/THEY/HE/SHE + HAD NOT (HADN'T) BEEN WORKING\r
Разбор времён на примерах:\r
1. Present Perfect Continuous (Процесс, который длится до сих пор или только что завершился)\r
	I have been working for 2 hours. [aɪ hæv biːn ˈwɜːkɪŋ fɔː tuː ˈaʊəz] — Я работаю уже 2 часа (ай хэв бин уоркинъ фор ту ауэрз). → Начал 2 часа назад и всё ещё работаю.\r
	She has been drawing since morning. [ʃiː hæz biːn drɔːɪŋ sɪns ˈmɔːnɪŋ] — Она рисует с самого утра (ши хэз бин дроинъ синс морнинъ).\r
2. Past Perfect Continuous (Процесс, который длился до определённого момента в прошлом)\r
	I had been waiting for an hour before the bus came. [aɪ hæd biːn ˈweɪtɪŋ fɔːr ən ˈaʊə bɪˈfɔː ðə bʌs keɪm] — Я прождал целый час, прежде чем пришёл автобус (ай хэд бин уэйтинъ фор эн ауэр бифор зэ бас кейм).\r
3. Future Perfect Continuous (Процесс, который будет длиться до определённого момента в будущем)\r
	By next month, I will have been living here for 5 years. [baɪ nekst mʌnθ aɪ wɪl hæv biːn ˈlɪvɪŋ hɪə fɔː faɪv jɪəz] — К следующему месяцу исполнится 5 лет, как я здесь живу (бай некст манф ай уил хэв бин ливинъ хиэр фор файв иэрз).\r
Важные предлоги времени для Perfect Continuous\r
Чтобы указать длительность процесса, используются два ключевых слова:\r
	FOR [fɔː(r)] — в течение / на протяжении (указывает период времени):\r
	for 10 minutes [fɔː ten ˈmɪnɪts] — в течение 10 минут (фор тен минитс)\r
	for 3 years [fɔː θriː jɪəz] — на протяжении 3 лет (фор фри иэрз)\r
	SINCE [sɪns] — с / начиная с (указывает точку начала в прошлом):\r
	since Monday [sɪns ˈmʌndeɪ] — с понедельника (синс мандей)\r
	since 2020 [sɪns tuː ˈθaʊznd twenti] — с 2020 года (синс ту фаузенд туенти)\r
Список слов для запоминания (Vocabulary)\r
Маркеры времени (Time Markers)\r
	for [fɔː(r)] — в течение (фор)\r
	since [sɪns] — с / начиная с (синс)\r
	how long [haʊ lɒŋ] — как долго / сколько времени (хау лонг)\r
	all day [ɔːl deɪ] — весь день (ол дей)\r
	all morning [ɔːl ˈmɔːnɪŋ] — всё утро (ол морнинъ)\r
Глаголы длительных процессов (Process Verbs)\r
	wait [weɪt] — ждать (уэйт)\r
	live [lɪv] — жить (лив)\r
	learn [lɜːn] — учить / изучать (лёрн)\r
	teach [tiːtʃ] — преподавать / учить кого-то (тич)\r
	search [sɜːtʃ] — искать (сёрч)\r
	try [traɪ] — пробовать / пытаться (трай)\r
	travel [ˈtrævl] — путешествовать (трэвл)\r
Дополнительные существительные\r
	hour [ˈaʊə(r)] — час (ауэр)\r
	minute [ˈmɪnɪt] — минута (минит)\r
	month [mʌnθ] — месяц (манф)\r
	year [jɪə(r)] — год (иэр)\r
\r
\r
Переходим к важнейшему блоку грамматики уровня A2–B1, без которого невозможно общаться в реальной жизни: Модальные глаголы (Modal Verbs) и Пассивный залог (Passive Voice).\r
Тема 1: Модальные глаголы (Modal Verbs)\r
Модальные глаголы выражают не само действие, а отношение к нему: возможность, необходимость, разрешение или совет.\r
Главные особенности модальных глаголов:\r
	За ними не ставится частица to (кроме ought to / have to).\r
	Они не меняют форму по лицам (нет окончания -s для he/she).\r
	В вопросах и отрицаниях им не нужны вспомогательные глаголы do/does/did.\r
Основные модальные глаголы:\r
1. CAN / COULD — Физическая возможность или умение\r
	can [kæn] — могу / умею (в настоящем) (кэн)\r
	I can draw. [aɪ kæn drɔː] — Я умею рисовать (ай кэн дро).\r
	could [kʊd] — мог / умел (в прошлом) или вежливая просьба (куд)\r
	Could you help me? [kʊd juː help miː] — Могли бы вы мне помочь? (куд ю хэлп ми).\r
2. MUST / HAVE TO — Долг, обязательство, необходимость\r
	must [mʌst] — должен / обязан (жесткое требование, личный долг) (маст)\r
	I must finish this. [aɪ mʌst ˈfɪnɪʃ ðɪs] — Я должен это закончить (ай маст финиш зис).\r
	have to [hæv tuː] — вынужден / принужден (обстоятельствами) (хэв ту)\r
	I have to leave. [aɪ hæv tuː liːv] — Я вынужден уйти (ай хэв ту лив).\r
3. MAY / MIGHT — Разрешение или вероятность\r
	may [meɪ] — можно (официальное разрешение) / возможно (мей)\r
	May I come in? [meɪ aɪ kʌm ɪn] — Можно войти? (мей ай кам ин).\r
	might [maɪt] — может быть / вероятно (низкая вероятность) (майт)\r
	It might rain. [ɪt maɪt reɪn] — Возможно, пойдет дождь (ит майт рейн).\r
4. SHOULD — Совет или рекомендация\r
	should [ʃʊd] — следует / стоит (шуд)\r
	You should rest. [juː ʃʊd rest] — Тебе следует отдохнуть (ю шуд рэст).\r
Тема 2: Пассивный залог (Passive Voice)\r
В активном залоге (Active Voice) подлежащее само выполняет действие:\r
The artist paints a picture. (Художник пишет картину).\r
В пассивном залоге (Passive Voice) действие совершается над подлежащим:\r
The picture is painted. (Картина пишется / написана).\r
Формула пассивного залога:\r
"Глагол TO BE (в нужном времени)"+"3-я форма глагола (V3 / -ed)" \r
Таблица пассивного залога по временам (Simple):\r
Время	Формула	Пример	Перевод\r
Present Simple Passive	am / is / are + V3	The house is built. [ðə haʊs ɪz bɪlt]	Дом строится / построен (зэ хаус из билт)\r
Past Simple Passive	was / were + V3	The house was built. [ðə haʊs wɒz bɪlt]	Дом был построен (зэ хаус уоз билт)\r
Future Simple Passive	will be + V3	The house will be built. [ðə haʊs wɪl biː bɪlt]	Дом будет построен (зэ хаус уил би билт)\r
Если нужно указать, кем совершено действие, используется предлог BY [baɪ] (бай):\r
The picture was painted by the artist. [ðə ˈpɪktʃə wɒz ˈpeɪntɪd baɪ ðə ˈɑːtɪsts] — Картина была написана художником.\r
Список слов для запоминания (Vocabulary)\r
Модальные слова и конструкции\r
	can [kæn] — мочь / уметь (кэн)\r
	could [kʊd] — мог бы / мог (куд)\r
	must [mʌst] — должен / обязан (маст)\r
	have to [hæv tuː] — вынужден (хэв ту)\r
	should [ʃʊd] — следует / стоит (шуд)\r
	may [meɪ] — можно / возможно (мей)\r
	might [maɪt] — может быть / вероятно (майт)\r
Глаголы и существительные для пассивного залога\r
	build [bɪld] — строить (билд) → built [bɪlt] (билт)\r
	create [kriˈeɪt] — создавать (криэйт)\r
	sell [sel] — продавать (сел) → sold [səʊld] (соулд)\r
	buy [baɪ] — покупать (бай) → bought [bɔːt] (бот)\r
	send [send] — отправлять (сенд) → sent [sent] (сент)\r
	rule [ruːl] — правило (рул)\r
	law [lɔː] — закон (ло)\r
	advice [ədˈvaɪs] — совет (эдвайс)\r
\r
Переходим к связующему элементу уровней Intermediate (B1) и Upper-Intermediate (B2) — Условным предложениям (Conditionals) и Косвенной речи (Reported Speech).\r
\r
Эти темы позволяют строить сложные логические цепочки, выражать гипотезы, мечты, сожаления и передавать чужие слова.\r
\r
\r
Тема 1: Условные предложения (Conditionals)\r
Условное предложение состоит из двух частей: условия (содержит союз if — если) и результата. Существует 4 основных типа:\r
\r
\r
1. Zero Conditional (Нулевой тип) — Факты и законы природы\r
Используется для истинных фактов, научных законов и регулярных правил.\r
\r
\r
	Формула: If + Present Simple, Present Simple\r
\r
	Пример:\r
\r
\r
	If you heat ice, it melts. [ɪf juː hiːt aɪs ɪt melts] — Если греть лед, он тает (иф ю хит айс ит мелц).\r
\r
2. First Conditional (Первый тип) — Реальное будущее\r
Реальные, возможные ситуации в будущем.\r
\r
\r
	Формула: If + Present Simple, WILL + Verb\r
\r
	Особенность: В придаточном предложении после if будущее время не ставится, используем Present Simple!\r
\r
	Пример:\r
\r
\r
	If it rains, I will stay at home. [ɪf ɪt reɪnz aɪ wɪl steɪ æt həʊm] — Если пойдет дождь, я останусь дома (иф ит рейнз ай уил стей эт хоум).\r
\r
3. Second Conditional (Второй тип) — Нереальное настоящее / Мечты\r
Нереальные или маловероятные ситуации в настоящем или будущем («Если бы..., то...»).\r
\r
\r
	Формула: If + Past Simple, WOULD + Verb\r
\r
	Особенность: Глагол to be в условии для всех лиц принимает форму were (If I were, If he were).\r
\r
	Пример:\r
\r
\r
	If I had a million dollars, I would buy a house. [ɪf aɪ hæd ə ˈmɪljən ˈdɒləz aɪ wʊd baɪ ə haʊs] — Если бы у меня был миллион долларов, я бы купил дом (иф ай хэд э мильен долэрз ай ууд бай э хаус).\r
\r
4. Third Conditional (Третий тип) — Сожаления о прошлом\r
Ситуации в прошлом, которые уже нельзя изменить.\r
\r
\r
	Формула: If + Past Perfect, WOULD HAVE + V3\r
\r
	Пример:\r
\r
\r
	If I had studied harder, I would have passed the exam. [ɪf aɪ hæd ˈstʌdɪd ˈhɑːdə aɪ wʊd hæv pɑːst ðɪ ɪɡˈzæm] — Если бы я учился усерднее (тогда), я бы сдал экзамен (иф ай хэд стадид хадэ ай ууд хэв паст зи игзэм).\r
\r
Тема 2: Косвенная речь (Reported Speech)\r
Когда мы передаем чьи-то слова в прошлом, в английском языке срабатывает правило согласования времен (Backshift) — все времена сдвигаются на одну ступень назад в прошлое.\r
\r
\r
Правило сдвига времен:\r
Прямая речь (Direct)	Косвенная речь (Reported)\r
Present Simple ("I work")	→ Past Simple (He said he worked)\r
Present Continuous ("I am working")	→ Past Continuous (He said he was working)\r
Past Simple / Present Perfect ("I worked / I have worked")	→ Past Perfect (He said he had worked)\r
Will ("I will work")	→ Would (He said he would work)\r
Изменение указателей времени и места:\r
	today → that day (в тот день)\r
\r
	tomorrow → the next day (на следующий день)\r
	yesterday → the day before (за день до этого)\r
	here → there (там)\r
\r
Список слов для запоминания (Vocabulary)\r
Условные союзы и конструкции\r
	if [ɪf] — если (иф)\r
	unless [ənˈles] — если только не (анлес)\r
	would [wʊd] — бы (частица) (ууд)\r
	in case [ɪn keɪs] — в случае если (ин кейс)\r
Глаголы речи и мысли (Reporting Verbs)\r
	say [seɪ] — сказать / говорить (сей) → said [sed] (сед)\r
	tell [tel] — сказать кому-то / рассказать (тел) → told [təʊld] (тоулд)\r
	ask [ɑːsk] — спрашивать / просить (аск)\r
	explain [ɪkˈspleɪn] — объяснять (эксплейн)\r
	promise [ˈprɒmɪs] — обещать (промис)\r
	suggest [səˈdʒest] — предлагать (саджест)\r
Существительные продвинутого уровня (B1–B2)\r
	condition [kənˈdɪʃn] — условие (кандишн)\r
	decision [dɪˈsɪʒn] — решение (десижн)\r
	opportunity [ˌɒpəˈtjuːnəti] — возможность (опэтьюнити)\r
	future [ˈfjuːtʃə(r)] — будущее (фьючэ)\r
	past [pɑːst] — прошлое (паст)\r
\r
\r
Переходим к продвинутым грамматическим конструкциям уровня B2 (Upper-Intermediate): Complex Object (Сложное дополнение) и Complex Subject (Сложное подлежащее).\r
\r
Эти структуры делают речь естественной, лаконичной и позволяют отказаться от громоздких придаточных предложений вида «Я хочу, чтобы он сделал...».\r
\r
\r
Тема 1: Complex Object (Сложное дополнение)\r
Complex Object — это конструкция, состоящая из существительного или местоимения в косвенном падеже (him, her, them, us) и инфинитива глагола.\r
\r
На русский язык переводится придаточным предложением с союзами «что», «как», «чтобы».\r
\r
"Подлежащее"+"Глагол"+"Местоимение в косв. падеже (him/her/them...)"+"Инфинитив (to + Verb)" \r
Основные группы глаголов:\r
	Желание и просьба (want, would like, expect, ask):\r
\r
\r
	I want you to learn English. [aɪ wɒnt juː tuː lɜːn ˈɪŋɡlɪʃ] — Я хочу, чтобы ты учил английский (ай уонт ю ту лёрн инглиш).\r
\r
	She would like him to come. [ʃiː wʊd laɪk hɪm tuː kʌm] — Она хотела бы, чтобы он пришел (ши ууд лайк хим ту кам).\r
\r
	Восприятие органолептикой (see, hear, watch, feel):\r
\r
\r
Важно: После глаголов чувств частица to не ставится!\r
\r
	I saw her cross the street. [aɪ sɔː hɜː krɒs ðə striːt] — Я видел, как она перешла улицу (ай со хёр крос зэ стрит).\r
\r
	We heard him sing. [wiː hɜːd hɪm sɪŋ] — Мы слышали, как он поет (уи хёрд хим синъ).\r
\r
	Побуждение и разрешение (make — заставлять, let — разрешать):\r
\r
\r
Важно: После make и let частица to также выпадает!\r
\r
	Don't make me wait. [dəʊnt meɪk miː weɪt] — Не заставляй меня ждать (доунт мейк ми уэйт).\r
\r
	Let him go. [let hɪm ɡəʊ] — Разреши ему уйти / Отпусти его (лет хим гоу).\r
\r
Тема 2: Complex Subject (Сложное подлежащее)\r
Complex Subject — это конструкция, в которой подлежащее сочетается с глаголом в пассивном залоге (или глаголом типа seem, appear) и инфинитивом.\r
\r
На русский язык переводится неопределенно-личными предложениями: «Говорят, что...», «Известно, что...», «Кажется, что...».\r
\r
"Подлежащее"+"Глагол состояния / Пассив"+"Инфинитив (to + Verb)" \r
Основные случаи использования:\r
	С глаголами мнения и передачи информации в пассиве (is said, is known, is expected, is reported):\r
\r
\r
	He is said to be a great artist. [hiː ɪz sed tuː biː ə ɡreɪt ˈɑːtɪst] — Говорят, что он великий художник (хи из сэд ту би э грейт артист).\r
\r
	The package is expected to arrive tomorrow. [ðə ˈpækɪdʒ ɪz ɪkˈspektɪd tuː əˈraɪv təˈmɒrəʊ] — Ожидается, что посылка прибудет завтра (зэ пэкидж из экспектид ту эрайв томороу).\r
\r
	С глаголами кажется / оказывается (seem, appear, prove, turn out):\r
\r
\r
	She seems to know everything. [ʃiː siːmz tuː nəʊ ˈevrɪθɪŋ] — Кажется, она знает всё (ши симз ту ноу эврифинг).\r
\r
	The story turned out to be true. [ðə ˈstɔːri tɜːnd aʊt tuː biː truː] — История оказалась правдой (зэ стори тёрнд аут ту би тру).\r
\r
Список слов для запоминания (Vocabulary)\r
Глаголы конструкции Complex Object & Subject\r
	expect [ɪkˈspekt] — ожидать (экспект)\r
	force [fɔːs] — заставлять / принуждать (форс)\r
	let [let] — позволять / разрешать (лет)\r
	seem [siːm] — казаться (сим)\r
	appear [əˈpɪə(r)] — казаться / появляться (эпиэр)\r
	prove [pruːv] — доказывать / оказываться (прув)\r
	turn out [tɜːn aʊt] — оказываться (тёрн аут)\r
	report [rɪˈpɔːt] — сообщать / докладывать (рипорт)\r
\r
Продвинутые существительные и прилагательные (B2)\r
	truth [truːθ] — правда (Труф)\r
	knowledge [ˈnɒlɪdʒ] — знания (нолидж)\r
	skill [skɪl] — навык / умение (скил)\r
	effort [ˈefət] — усилие (эфэрт)\r
	fluent [ˈfluːənt] — беглый (о речи) (флуэнт)\r
	confidence [ˈkɒnfɪdəns] — уверенность (конфидэнс)\r
	successful [səkˈsesfl] — успешный (саксесфул)\r
\r
\r
Переходим к важнейшему пласту английского языка уровня B2 (Upper-Intermediate): Герундий (Gerund), Инфинитив (Infinitive) и Фразовые глаголы (Phrasal Verbs).\r
\r
Именно эти темы делают речь беглой, естественной и выразительной.\r
\r
\r
Тема 1: Герундий и Инфинитив (Gerund vs Infinitive)\r
В английском языке, когда два глагола идут подряд, второй глагол принимает форму либо герундия (глагол + -ing), либо инфинитива (to + глагол).\r
\r
\r
1. Герундий (Verb + -ing)\r
Употребляется после определенных глаголов, предлогов и выражений:\r
\r
\r
	Глаголы предпочтений и чувств: enjoy, like, love, hate, mind, suggest\r
\r
\r
	I enjoy drawing. [aɪ ɪnˈdʒɔɪ ˈdrɔːɪŋ] — Мне нравится рисовать (ай инджой дроинъ).\r
\r
	Would you mind opening the window? [wʊd juː maɪnd ˈəʊpənɪŋ ðə ˈwɪndəʊ] — Вы не против открыть окно? (ууд ю майнд оупэнинъ зэ уиндоу).\r
\r
	После предлогов (about, of, for, in, at, without):\r
\r
\r
	Thank you for coming. [θæŋk juː fɔː ˈkʌmɪŋ] — Спасибо за приход / что пришли (фэнк ю фор каминъ).\r
\r
	She left without saying a word. [ʃiː left wɪˈðaʊt ˈseɪɪŋ ə wɜːd] — Она ушла, не сказав ни слова (ши лефт уизаут сейинъ э уорд).\r
\r
2. Инфинитив (to + Verb)\r
Употребляется после глаголов намерения, решения и планов:\r
\r
\r
	Глаголы планов и решений: want, decide, hope, plan, agree, promise, refuse\r
\r
\r
	I decided to learn English. [aɪ dɪˈsaɪdɪd tuː lɜːn ˈɪŋɡlɪʃ] — Я решил учить английский (ай десайдед ту лёрн инглиш).\r
\r
	They plan to move next year. [ðeɪ plæn tuː muːv nekst jɪə] — Они планируют переехать в следующем году (зей плэн ту мув некст иэр).\r
\r
Тема 2: Фразовые глаголы (Phrasal Verbs)\r
Фразовый глагол — это комбинация [Глагол] + [Предлог / Наречие], значение которой часто кардинально отличается от исходного глагола. Без них невозможно понимать носителей языка и смотреть фильмы.\r
\r
\r
Самые частотные фразовые глаголы (Top 10 B2):\r
	give up [ɡɪv ʌp] — сдаваться / бросать привычку (гив ап)\r
\r
\r
	Never give up. [ˈnevə ɡɪv ʌp] — Никогда не сдавайся (нэвэ гив ап).\r
\r
	find out [faɪnd aʊt] — выяснять / узнавать (файнд аут)\r
\r
\r
	I need to find out the truth. [aɪ niːd tuː faɪnd aʊt ðə truːθ] — Мне нужно узнать правду (ай нид ту файнд аут зэ труф).\r
\r
	look for [lʊk fɔː] — искать (лук фор)\r
\r
\r
	What are you looking for? [wɒt ɑː juː ˈlʊkɪŋ fɔː] — Что ты ищешь? (уот ар ю лукинъ фор).\r
\r
	look forward to [lʊk ˈfɔːwəd tuː] — ждать с нетерпением (лук форуэрд ту)\r
\r
\r
	I'm looking forward to your reply. [aɪm ˈlʊkɪŋ ˈfɔːwəd tuː jɔː rɪˈplaɪ] — С нетерпением жду вашего ответа (айм лукинъ форуэрд ту уор риплай).\r
\r
	carry on [ˈkæri ɒn] — продолжать (кэри он)\r
\r
\r
	Carry on working. [ˈkæri ɒn ˈwɜːkɪŋ] — Продолжайте работать (кэри он уоркинъ).\r
\r
	set up [set ʌp] — настраивать / создавать / организовывать (сет ап)\r
\r
\r
	He set up a new company. [hiː set ʌp ə njuː ˈkʌmpəni] — Он создал новую компанию (хи сет ап э нью кампани).\r
\r
	turn on / turn off [tɜːn ɒn / tɜːn ɒf] — включать / выключать (тёрн он / тёрн оф)\r
\r
	figure out [ˈfɪɡər aʊt] — разбираться / понимать (фигэр аут)\r
\r
\r
	I can't figure out this problem. [aɪ kɑːnt ˈfɪɡər aʊt ðɪs ˈprɒbləm] — Я не могу разобраться с этой проблемой (ай кант фигэр аут зис проблем).\r
\r
	break down [breɪk daʊn] — ломаться (брейк даун)\r
\r
	run out of [rʌn aʊt əv] — заканчиваться (о ресурсах) (ран аут ав)\r
\r
	We ran out of time. [wiː ræn aʊt əv taɪm] — У нас закончилось время (уи рэн аут ав тайм).\r
\r
Список слов для запоминания (Vocabulary)\r
Глаголы герундия и инфинитива\r
	enjoy [ɪnˈdʒɔɪ] — получать удовольствие (инджой)\r
	suggest [səˈdʒest] — предлагать (саджест)\r
	avoid [əˈvɔɪd] — избегать (эвойд)\r
	decide [dɪˈsaɪd] — решать (десайд)\r
	refuse [rɪˈfjuːz] — отказываться (рифьюз)\r
\r
Фразовые глаголы (Phrasal Verbs)\r
	give up [ɡɪv ʌp] — сдаваться (гив ап)\r
	find out [faɪnd aʊt] — узнавать (файнд аут)\r
	look forward to [lʊk ˈfɔːwəd tuː] — ждать с нетерпением (лук форуэрд ту)\r
	figure out [ˈfɪɡər aʊt] — сообразить / понять (фигэр аут)\r
	run out of [rʌn aʊt əv] — исчерпать / закончиться (ран аут ав)\r
\r
Продвинутая лексика темы (B2)\r
	habit [ˈhæbɪt] — привычка (хэбит)\r
	solution [səˈluːʃn] — решение (проблемы) (салюшн)\r
	reply [rɪˈplaɪ] — ответ (риплай)\r
	purpose [ˈpɜːpəs] — цель / намерение (пёрпэс)\r
	advantage [ədˈvɑːntɪdʒ] — преимущество (эдвантидж)\r
\r
\r
Завершаем наш системный курс уровня B2 (Upper-Intermediate).\r
\r
В этой финальной теме мы разберем Идиомы, связующие слова (Linking Words) и сформируем Финальный список слов уровня B2 (Core B2 Vocabulary), который окончательно закроет вашу потребность в беглой и выразительной речи.\r
\r
\r
Тема 1: Связующие слова и вводные конструкции (Linking Words & Discourse Markers)\r
Без логических связок речь выглядит как набор обрывочных фраз. На уровне B2 важно уметь правильно выражать контраст, причины, следствия и последовательность мыслей.\r
\r
\r
1. Добавление информации (Adding Information)\r
	in addition [ɪn əˈdɪʃn] — в дополнение / кроме того (ин эдишн)\r
\r
	moreover [mɔːrˈəʊvə(r)] — более того (мороувэ)\r
\r
	furthermore [ˌfɜːðəˈmɔː(r)] — к тому же / более того (фёзэмор)\r
\r
The course is cheap. Furthermore, it is very effective. [ðə kɔːs ɪz tʃiːp. ˌfɜːðəˈmɔː, ɪt ɪz ˈveri ɪˈfektɪv] — Курс недорогой. К тому же, он очень эффективный (зэ корс из чип. фёзэмор, ит из вери эффектив).\r
\r
2. Контраст и противопоставление (Contrast)\r
	however [haʊˈevə(r)] — однако (хауэвэ)\r
\r
	although / even though [ɔːlˈðəʊ / ˈiːvn ðəʊ] — хотя / даже хотя (олзоу / ивн зоу)\r
\r
	despite / in spite of [dɪˈspaɪt / ɪn spaɪt əv] — несмотря на (диспайт / ин спайт ав)\r
\r
Although it was raining, we went for a walk. [ɔːlˈðəʊ ɪt wɒz ˈreɪnɪŋ, wiː went fɔːr ə wɔːk] — Хотя шел дождь, мы пошли гулять (олзоу ит уоз рейнинъ, уи уэнт фор э уок).\r
\r
3. Причина и следствие (Cause & Effect)\r
	therefore [ˈðeəfɔː(r)] — поэтому / следовательно (зеэфор)\r
\r
	as a result [æz ə rɪˈzʌlt] — в результате (эз э ризалт)\r
\r
	due to [djuː tuː] — из-за / по причине (дью ту)\r
\r
Тема 2: Идиомы и разговорные выражения (Idioms & Expressions)\r
Носители языка постоянно используют идиомы — устойчивые выражения, значение которых нельзя перевести дословно.\r
\r
\r
	piece of cake [piːs əv keɪk] — пара пустяков / проще простого (пис ав кейк)\r
\r
\r
	This exam was a piece of cake. [ðɪs ɪɡˈzæm wɒz ə piːs əv keɪk] — Этот экзамен был проще простого (зис игзэм уоз э пис ав кейк).\r
\r
	break the ice [breɪk ðɪ aɪs] — разрядить обстановку / растопить лед (брейк зи айс)\r
\r
	hit the nail on the head [hɪt ðə neɪl ɒn ðə hed] — попасть прямо в точку (хит зэ нейл он зэ хед)\r
\r
	under the weather [ˈʌndə ðə ˈweðə(r)] — неважно себя чувствовать (эндэ зэ уэзэ)\r
\r
\r
	I'm feeling a bit under the weather today. [aɪm ˈfiːlɪŋ ə bɪt ˈʌndə ðə ˈweðə təˈdeɪ] — Я сегодня неважно себя чувствую (айм филинъ э бит эндэ зэ уэзэ тодей).\r
\r
	cost an arm and a leg [kɒst ən ɑːm ænd ə leɡ] — стоить сумасшедших денег (кост эн арм энд э лег)\r
\r
Финальный список слов уровня B2 (Core B2 Vocabulary)\r
Эти 20 продвинутых слов и терминов завершают базовый словарный запас, необходимый для свободного общения, работы и чтения.\r
\r
\r
Абстрактные понятия и интеллект\r
	environment [ɪnˈvaɪrənmənt] — окружающая среда / обстановка (инвайронмэнт)\r
	opportunity [ˌɒpəˈtjuːnəti] — возможность (опэтьюнити)\r
	development [dɪˈveləpmənt] — развитие (дивелопмэнт)\r
	improvement [ɪmˈpruːvmənt] — улучшение (импрувмэнт)\r
	experience [ɪkˈspɪəriəns] — опыт (экспириэнс)\r
	relationship [rɪˈleɪʃnʃɪp] — отношения / связь (рилейшншип)\r
\r
Аналитика и деятельность\r
	analyze [ˈænəlaɪz] — анализировать (энэлайз)\r
	achieve [əˈtʃiːv] — достигать (эчив)\r
\r
	influence [ˈɪnfluəns] — влиять / влияние (инфлуэнс)\r
	require [rɪˈkwaɪə(r)] — требовать (риквайэр)\r
	manage [ˈmænɪdʒ] — справляться / управлять (мэнидж)\r
	consider [kənˈsɪdə(r)] — рассматривать / считать (кансидэ)\r
\r
Характеристики и качества (Adjectives)\r
	essential [ɪˈsenʃl] — существенный / жизненно важный (эсеншл)\r
	flexible [ˈfleksəbl] — гибкий (флексибл)\r
	efficient [ɪˈfɪʃnt] — эффективный (эфишнт)\r
	appropriate [əˈprəʊpriət] — подходящий / соответствующий (эпроуприэт)\r
	inevitable [ɪnˈevɪtəbl] — неизбежный (инэвитэбл)\r
Вводные союзы\r
	however [haʊˈevə(r)] — однако (хауэвэ)\r
	therefore [ˈðeəfɔː(r)] — поэтому (зеэфор)\r
	although [ɔːlˈðəʊ] — хотя (олзоу)\r
\r
Карта всей пройденной грамматики (От нуля до B2)\r
Вы прошли полный теоретический каркас английского языка:\r
\r
\r
	Фундамент (A0-A1): Алфавит, правила чтения, части речи, артикли, указательные местоимения, глагол to be, система Simple (по схеме). \r
	База общения (A2): Группа Continuous, модальные глаголы (can, must, should), пассивный залог (Passive Voice).\r
	Уверенное владение (B1): Группы Perfect и Perfect Continuous, согласование времен и косвенная речь (Reported Speech), условные предложения (0, 1, 2, 3 Conditionals).\r
	Свободная речь (B2): Сложные конструкции (Complex Object / Subject), герундий и инфинитив, фразовые глаголы, связующие слова и идиомы.\r
\r
Теперь вся теоретическая базовая структура у вас на руках. Чтобы превратить эти знания в беглый разговорный навык, рекомендуем ежедневно отрабатывать конструкции на практике: читать статьи, смотреть видео в оригинале и проговаривать мысли на английском языке!\r
\r
`,Sh=/^(Шаг\s+\d+\..+|Тема:.+|Длительные времена.+|Модальные глаголы.+|Модальные слова.+|Условное предложение.+|Глаголы состояния.+|Глаголы действия.+|Глаголы речи.+|Глаголы конструкции.+|Глаголы герундия.+)/,zh=d=>{const k=[];let T=null;for(const f of d.split(/\r?\n/)){const O=f.trimEnd(),H=O.trim().match(Sh);H?(T&&k.push(T),T={title:H[1].trim(),content:""}):T&&(T.content+=`${O}
`)}return T&&k.push(T),k.filter(f=>f.content.trim())},Th={headers:["Время","Вопрос","Утверждение","Отрицание"],rows:[[`БУДУЩЕЕ
(Future Simple)`,"WILL + I / YOU / WE / THEY / HE / SHE + LOVE?","I / YOU / WE / THEY / HE / SHE + WILL LOVE","I / YOU / WE / THEY / HE / SHE + WILL NOT (WON'T) LOVE"],[`НАСТОЯЩЕЕ
(Present Simple)`,`DO + I / YOU / WE / THEY + LOVE?

DOES + HE / SHE + LOVE?`,`I / YOU / WE / THEY + LOVE

HE / SHE + LOVES`,`I / YOU / WE / THEY + DON'T LOVE

HE / SHE + DOESN'T LOVE`],[`ПРОШЕДШЕЕ
(Past Simple)`,"DID + I / YOU / WE / THEY / HE / SHE + LOVE?","I / YOU / WE / THEY / HE / SHE + LOVED","I / YOU / WE / THEY / HE / SHE + DID NOT (DIDN'T) LOVE"]]},wh={headers:["Время","Вопрос","Утверждение","Отрицание"],rows:[[`БУДУЩЕЕ
(Future Continuous)`,"WILL + I / YOU / WE / THEY / HE / SHE + BE WORKING?","I / YOU / WE / THEY / HE / SHE + WILL BE WORKING","I / YOU / WE / THEY / HE / SHE + WILL NOT (WON'T) BE WORKING"],[`НАСТОЯЩЕЕ
(Present Continuous)`,`AM + I + WORKING?

IS + HE / SHE / IT + WORKING?

ARE + YOU / WE / THEY + WORKING?`,`I + AM WORKING

HE / SHE / IT + IS WORKING

YOU / WE / THEY + ARE WORKING`,`I + AM NOT WORKING

HE / SHE / IT + IS NOT (ISN'T) WORKING

YOU / WE / THEY + ARE NOT (AREN'T) WORKING`],[`ПРОШЕДШЕЕ
(Past Continuous)`,`WAS + I / HE / SHE / IT + WORKING?

WERE + YOU / WE / THEY + WORKING?`,`I / HE / SHE / IT + WAS WORKING

YOU / WE / THEY + WERE WORKING`,`I / HE / SHE / IT + WAS NOT (WASN'T) WORKING

YOU / WE / THEY + WERE NOT (WEREN'T) WORKING`]]},Oh={headers:["Время","Вопрос","Утверждение","Отрицание"],rows:[[`БУДУЩЕЕ
(Future Perfect)`,"WILL + I / YOU / WE / THEY / HE / SHE + HAVE DONE?","I / YOU / WE / THEY / HE / SHE + WILL HAVE DONE","I / YOU / WE / THEY / HE / SHE + WILL NOT (WON'T) HAVE DONE"],[`НАСТОЯЩЕЕ
(Present Perfect)`,`HAVE + I / YOU / WE / THEY + DONE?

HAS + HE / SHE / IT + DONE?`,`I / YOU / WE / THEY + HAVE DONE

HE / SHE / IT + HAS DONE`,`I / YOU / WE / THEY + HAVEN'T DONE

HE / SHE / IT + HASN'T DONE`],[`ПРОШЕДШЕЕ
(Past Perfect)`,"HAD + I / YOU / WE / THEY / HE / SHE + DONE?","I / YOU / WE / THEY / HE / SHE + HAD DONE","I / YOU / WE / THEY / HE / SHE + HAD NOT (HADN'T) DONE"]]},jh={headers:["Время","Вопрос","Утверждение","Отрицание"],rows:[[`БУДУЩЕЕ
(Future Perfect Continuous)`,"WILL + I / YOU / WE / THEY / HE / SHE + HAVE BEEN WORKING?","I / YOU / WE / THEY / HE / SHE + WILL HAVE BEEN WORKING","I / YOU / WE / THEY / HE / SHE + WILL NOT (WON'T) HAVE BEEN WORKING"],[`НАСТОЯЩЕЕ
(Present Perfect Continuous)`,`HAVE + I / YOU / WE / THEY + BEEN WORKING?

HAS + HE / SHE / IT + BEEN WORKING?`,`I / YOU / WE / THEY + HAVE BEEN WORKING

HE / SHE / IT + HAS BEEN WORKING`,`I / YOU / WE / THEY + HAVEN'T BEEN WORKING

HE / SHE / IT + HASN'T BEEN WORKING`],[`ПРОШЕДШЕЕ
(Past Perfect Continuous)`,"HAD + I / YOU / WE / THEY / HE / SHE + BEEN WORKING?","I / YOU / WE / THEY / HE / SHE + HAD BEEN WORKING","I / YOU / WE / THEY / HE / SHE + HAD NOT (HADN'T) BEEN WORKING"]]},Nh={headers:["Время","Формула","Пример","Перевод"],rows:[["Present Simple Passive","am / is / are + V3",`The house is built.
[ðə haʊs ɪz bɪlt]`,`Дом строится / построен
(зэ хаус из билт)`],["Past Simple Passive","was / were + V3",`The house was built.
[ðə haʊs wɒz bɪlt]`,`Дом был построен
(зэ хаус уоз билт)`],["Future Simple Passive","will be + V3",`The house will be built.
[ðə haʊs wɪl biː bɪlt]`,`Дом будет построен
(зэ хаус уил би билт)`]]},Ah={headers:[`Кто?
Subject`,`Кому? Кого?
Object`,`Чей?
Possessive`],rows:[[`I — я
[aɪ] — ай`,`me — мне / меня
[miː] — ми`,`my — мой / моя
[maɪ] — май`],[`you — ты / вы
[juː] — ю`,`you — тебе / вам
[juː] — ю`,`your — твой / ваш
[jɔː(r)] — йор`],[`he — он
[hiː] — хи`,`him — ему / его
[hɪm] — хим`,`his — его
[hɪz] — хиз`],[`she — она
[ʃiː] — ши`,`her — ей / её
[hɜː(r)] — хёр`,`her — её
[hɜː(r)] — хёр`],[`it — оно / предмет
[ɪt] — ит`,`it — ему / его
[ɪt] — ит`,`its — его / её для предметов
[ɪts] — итс`],[`we — мы
[wiː] — уи`,`us — нам / нас
[ʌs] — ас`,`our — наш
[ˈaʊə(r)] — ауэр`],[`they — они
[ðeɪ] — зэй`,`them — им / их
[ðem] — зэм`,`their — их
[ðeə(r)] — зээр`]]},D2=d=>{let k=null,T="";if(d.title.startsWith("Шаг 4."))k=Th,T="Время	ВОПРОС";else if(d.title.includes("Continuous"))k=d.title.includes("Perfect Continuous")?jh:wh,T="Время	ВОПРОС";else if(d.title.includes("Perfect"))k=Oh,T="Время	ВОПРОС";else if(d.content.includes("Таблица пассивного залога по временам"))k=Nh,T="Время	Формула";else if(d.title==="Местоимения")return{table:Ah,before:"",after:d.content};if(!k)return null;const f=d.content.indexOf(T);if(f<0)return{table:k,before:d.content,after:""};const O=d.content.indexOf(`
`,f),G=d.content.slice(O<0?d.content.length:O).search(/\n(?:Разбор|Если нужно указать)/),q=G>=0?O+G:d.content.length;return{table:k,before:d.content.slice(0,f),after:d.content.slice(q)}},M2=({table:d})=>s.jsx("div",{className:"program-table-wrap",children:s.jsxs("table",{className:"program-table",children:[s.jsx("thead",{children:s.jsx("tr",{children:d.headers.map(k=>s.jsx("th",{children:k},k))})}),s.jsx("tbody",{children:d.rows.map(k=>s.jsx("tr",{children:k.map((T,f)=>s.jsx("td",{className:f===0?"table-label":"",children:T},`${k[0]}-${f}`))},k[0]))})]})}),Hh=()=>{const d=dt.useMemo(()=>zh(_2),[]),[k,T]=dt.useState(0);return s.jsxs("section",{className:"program-panel",id:"program",children:[s.jsxs("div",{className:"program-intro",children:[s.jsx("div",{className:"program-icon",children:s.jsx(O2,{size:22})}),s.jsxs("div",{children:[s.jsx("span",{className:"eyebrow",children:"Блок 01 · Full course"}),s.jsx("h1",{children:"Программа обучения"}),s.jsx("p",{children:"Полный курс из файла lesson.txt: чтение, базовая грамматика, времена, части речи, модальные конструкции и условные предложения."})]})]}),s.jsx("div",{className:"program-sections",children:d.map((f,O)=>{const H=k===O,G=D2(f);return s.jsxs("article",{className:`program-section ${H?"open":""}`,children:[s.jsxs("button",{className:"program-section-toggle",type:"button",onClick:()=>T(H?-1:O),"aria-expanded":H,children:[s.jsxs("span",{children:[s.jsxs("small",{children:["Тема ",String(O+1).padStart(2,"0")]}),s.jsx("strong",{children:f.title})]}),s.jsx(T2,{size:18})]}),H&&s.jsx("div",{className:"program-body",children:G?s.jsxs(s.Fragment,{children:[s.jsx("pre",{className:"program-content",children:G.before.trim()}),s.jsx(M2,{table:G.table}),s.jsx("pre",{className:"program-content",children:G.after.trim()})]}):s.jsx("pre",{className:"program-content",children:f.content.trim()})})]},`${f.title}-${O}`)})})]})},xh=({lessons:d,completed:k,onComplete:T})=>{const[f,O]=dt.useState(null),{speak:H,isPlaying:G}=Vi();let q="";return s.jsx("div",{className:"roadmap",children:d.map((j,K)=>{const A=k.includes(j.id),E=K>0&&!k.includes(d[K-1].id),_=f===j.id,mt=j.programContent?D2({title:j.title,content:j.programContent}):null,_t=j.module!==q?s.jsx("h3",{className:"module-heading",children:j.module}):null;return q=j.module,s.jsxs(dt.Fragment,{children:[_t,s.jsxs("article",{className:`lesson-card ${j.accent} ${E?"locked":""} ${_?"expanded":""}`,children:[s.jsx("div",{className:"lesson-number",children:A?s.jsx(p2,{size:16}):String(j.id).padStart(2,"0")}),s.jsxs("div",{className:"lesson-body",children:[s.jsxs("div",{className:"lesson-meta",children:[s.jsx(C2,{tone:j.accent==="coral"?"coral":"blue",children:j.level}),s.jsx("span",{children:j.duration})]}),s.jsx("h3",{children:j.title}),s.jsx("p",{children:j.caption}),s.jsx("div",{className:"stars",children:[0,1,2].map(ct=>s.jsx(lh,{size:14,fill:A&&ct<2?"currentColor":"none"},ct))}),_&&s.jsxs("div",{className:"lesson-detail",children:[j.explanation&&s.jsx("p",{children:j.explanation}),j.formula&&!j.programContent&&s.jsx("strong",{children:j.formula}),j.programContent&&(mt?s.jsxs(s.Fragment,{children:[mt.before.trim()&&s.jsx("pre",{className:"lesson-program-content",children:mt.before.trim()}),s.jsx(M2,{table:mt.table}),mt.after.trim()&&s.jsx("pre",{className:"lesson-program-content",children:mt.after.trim()})]}):s.jsx("pre",{className:"lesson-program-content",children:j.programContent})),j.audioItems&&s.jsxs("div",{className:"lesson-audio-grid",children:[s.jsx("small",{children:"Послушай произношение"}),s.jsx("div",{children:j.audioItems.map(ct=>s.jsxs("button",{className:"lesson-audio-item",type:"button",onClick:()=>H(ct.text),children:[s.jsx("span",{children:ct.label}),s.jsxs("em",{children:["[",ct.phonetic,"]"]}),s.jsx(sa,{size:14,className:G?"pulse":""})]},ct.label))})]}),j.examples.length>0&&s.jsx("div",{className:"lesson-examples",children:j.examples.map(ct=>s.jsxs("div",{children:[s.jsx("span",{children:ct.en}),s.jsx("small",{children:ct.ru})]},ct.en))}),s.jsxs("p",{children:[s.jsx("b",{children:"Практика:"})," ",j.practice]}),s.jsxs("p",{children:[s.jsx("b",{children:"Подсказка:"})," ",j.tip]})]})]}),s.jsxs("div",{className:"lesson-actions",children:[s.jsxs("button",{className:"lesson-expand",type:"button",onClick:()=>O(_?null:j.id),"aria-expanded":_,"aria-label":`${_?"Скрыть":"Открыть"} содержание урока ${j.title}`,children:[s.jsx(z2,{size:16}),s.jsx(T2,{size:15,className:_?"rotated":""})]}),s.jsx(ne,{variant:E?"ghost":A?"soft":"primary",disabled:E,onClick:()=>T(j.id),"aria-label":E?"Урок закрыт":A?"Урок завершён":`Завершить урок ${j.title}`,children:E?s.jsx(W3,{size:16}):A?s.jsx(p2,{size:17}):s.jsx(nh,{size:16,fill:"currentColor"})})]})]})]},j.id)})})},Ch=/^(Шаг\s+\d+\..+|Тема:.+|Длительные времена.+|Модальные глаголы.+|Модальные слова.+|Условное предложение.+|Глаголы состояния.+|Глаголы действия.+|Глаголы речи.+|Глаголы конструкции.+|Глаголы герундия.+)/,g2=["coral","blue","gold","mint","violet"],_h=d=>{const k=[];let T=null;for(const f of d.split(/\r?\n/)){const O=f.trimEnd(),H=O.trim().match(Ch);H?(T&&k.push(T),T={title:H[1].trim(),content:""}):T&&(T.content+=`${O}
`)}return T&&k.push(T),k.filter(f=>f.content.trim())},Dh=d=>/B2|Upper-Intermediate|продвинут/i.test(d)?"B2":/B1|Intermediate|Perfect|условн|Reported/i.test(d)?"B1":/A2|Continuous|модальн|пассив/i.test(d)?"A2":"A1",Mh=d=>d.split(/\r?\n/).map(k=>k.trim()).find(k=>k.length>15)||"Полный конспект темы",Uh=["Суть: фундамент языка — 26 букв (6 гласных и 20 согласных). Главное правило: буквы и звуки в английском не совпадают. Одна буква может читаться по-разному в зависимости от типа слога. Пример: A читается как [æ] в cat (кошка), но как [eɪ] в make (делать).","Суть: чтение гласных зависит от типа слога. Открытый слог заканчивается на гласную или немую e, поэтому гласная читается как в алфавите: make [meɪk], hide [haɪd], go [ɡəʊ]. Закрытый слог заканчивается на согласную, поэтому гласная читается кратко: cat [kæt], pen [pen], sit [sɪt].","Суть: формирование первого словарного запаса из частых существительных, прилагательных и базовых фраз. Базовые конструкции: Good morning / Hello — приветствие; Thank you / Please — вежливость; a big house, a new car — прилагательное стоит перед существительным.","Суть: местоимения заменяют имена и предметы, чтобы избегать повторов. Субъектные: I (я), you (ты/вы), he (он), she (она), it (оно/предмет/животное), we (мы), they (они). Объектные: me (мне/меня), him (ему), her (ей), us (нам), them (им). Пример: She sees me — Она видит меня.","Суть: Simple передаёт регулярные действия, привычки и постоянные факты. Present Simple: V / V-s для he, she, it; do/does в вопросах и отрицаниях. Past Simple: V2 или V-ed; did в вопросах и отрицаниях. Future Simple: will + V. Примеры: I work / She works; Did you work?; I will work.","Суть: английский использует строгий прямой порядок слов. Схема: Кто/что (подлежащее) + что делает (сказуемое) + кого/что (дополнение) + где/когда (обстоятельство). Пример: I bought a phone yesterday — Я купил телефон вчера.","Суть: накопление фундаментального словарного запаса: глаголы движения, предметы быта и описательные прилагательные. Учим слово вместе с транскрипцией, чтением, переводом и короткой фразой, чтобы сразу использовать его в речи.","Суть: предложение строится из 8 частей речи: Noun — существительное (cat, city); Verb — глагол (run, think); Adjective — прилагательное (red, big); Adverb — наречие (quickly, well); Pronoun — местоимение (he, it); Preposition — предлог (in, on, at); Conjunction — союз (and, but); Interjection — междометие (oh, wow).","Суть: Continuous описывает процесс в конкретный момент — сейчас, в определённый момент прошлого или будущего. Главный принцип: действие ещё не завершено в выбранной точке времени.","Суть: общая формула Continuous — to be + V-ing. Present: am/is/are + V-ing — I am reading now. Past: was/were + V-ing — I was reading at 5 PM yesterday. Future: will be + V-ing — I will be reading tomorrow at 5 PM.","Суть: stative verbs описывают чувства, мысли, владение и восприятие, а не физическое действие. Они обычно не употребляются в Continuous, поэтому используется Simple: I know this, а не I am knowing. Основные глаголы: love, hate, know, understand, believe, want, remember, have в значении владения.","Суть: action verbs обозначают физические и динамические действия, у которых есть начало и конец. Они могут употребляться во всех временах, включая Continuous: read, run, cook, build, write. Пример: I am reading now.","Суть: некоторые глаголы могут быть и stative, и action, но с разным смыслом. I think it is good — состояние, моё мнение. I am thinking about the test — действие, я обдумываю это прямо сейчас.","Суть: Perfect описывает действие, завершённое к определённому моменту, когда важен результат. Формула: have / has / had + V3. Present Perfect связан с настоящим: I have lost my key. Past Perfect произошло раньше другого прошлого события: He had left before I came. Future Perfect завершится к моменту в будущем: I will have finished by 5 PM.","Суть: Perfect Continuous описывает процесс, который начался раньше и длится до определённого момента; акцент на продолжительности. Формула: have / has / had + been + V-ing. Пример: I have been working here for 5 years.","Суть: модальные глаголы выражают отношение к действию — возможность, необходимость, разрешение или совет. После большинства модальных глаголов смысловой глагол ставится без to: can swim, must stop, should rest.","Can / Could выражают способность или возможность: I can swim. Must — строгая обязанность: You must stop. Should — совет: You should rest. May / Might — вероятность или вежливое разрешение: It may rain; May I come in?","Суть: conditionals с if состоят из условия и результата. Zero: If + Present, Present — факты. First: If + Present, will + V — реальное будущее. Second: If + Past, would + V — нереальное настоящее или мечта. Third: If + Past Perfect, would have + V3 — сожаление о прошлом.","Суть: reporting verbs передают чужие слова, мысли и косвенную речь. Если главное предложение в прошлом, действует Sequence of Tenses — сдвиг времён назад. Основные глаголы: say [seɪ], tell, explain, agree, deny, suggest. Пример: He said he was tired.","Суть: Complex Object и Complex Subject сокращают предложения. Complex Object: глагол + объект + инфинитив — I expect him to come. Complex Subject: субъект + пассивный глагол + инфинитив — He is expected to arrive.","Суть: выбираем между V-ing и to + V после определённых глаголов. Герундий используется после предлогов и enjoy, finish, avoid, suggest: enjoy reading. Инфинитив используется после want, decide, hope, promise: I decided to learn."],U2=(d,k)=>Uh[k]||(d.includes("Финальная")?"Грамматика курса выстроена от фундамента A0-A1 к свободной речи B2. Закрепляй результат регулярным чтением, слушанием и говорением.":"Изучи ключевое правило, формулу и примеры темы."),Rh=(d,k)=>k.startsWith("Шаг 1")?d.split(/\r?\n/).flatMap(T=>{const f=T.trim().match(/^([A-Z][a-z])\s+\[([^\]]+)\]\s+—\s*\(([^()]*)\)/);return f?[{label:f[1],text:f[1][0],phonetic:f[3]}]:[]}).slice(0,26):k.startsWith("Шаг 2")?[{label:"make",text:"make",phonetic:"мейк"},{label:"hide",text:"hide",phonetic:"хайд"},{label:"go",text:"go",phonetic:"гоу"},{label:"cat",text:"cat",phonetic:"кэт"},{label:"pen",text:"pen",phonetic:"пен"},{label:"sit",text:"sit",phonetic:"сит"},{label:"ship",text:"ship",phonetic:"шип"},{label:"chess",text:"chess",phonetic:"чес"},{label:"this",text:"this",phonetic:"зис"},{label:"think",text:"think",phonetic:"финк"}]:d.split(/\r?\n/).flatMap(T=>{const f=T.trim().match(/^(?:\d+\.\s*)?(.+?)\s+\[([^\]]+)\]\s+—\s*(?:.*?\s+)?\(([^()]*)\)\s*$/);if(!f||f[1].includes(":")||f[1].includes("→")||f[1].includes("/"))return[];const O=f[1].replace(/^[-•]\s*/,"").trim();return[{label:O,text:O,phonetic:f[3]}]}).slice(0,24),k2=_h(_2).map((d,k)=>({id:k+1,title:k===0?"Английский алфавит":d.title,caption:k===0?"Алфавит и звуки":Mh(d.content),level:Dh(`${d.title} ${d.content}`),duration:`${Math.max(12,Math.min(35,Math.round(d.content.length/180)))} мин`,accent:g2[k%g2.length],module:k<6?"Старт · программа":k<11?"Грамматический фундамент":"Продвинутые конструкции",explanation:U2(d.title,k),formula:"Открой карточку, чтобы изучить правило, таблицы, примеры и лексику.",examples:[],practice:"Пройди весь материал темы и проговори примеры вслух.",tip:"Используй кнопки озвучивания рядом со словами, где они доступны.",audioItems:Rh(d.content,d.title),programContent:d.content.trim()})),E2={id:4,title:"Местоимения",caption:"Кто выполняет действие и кому оно адресовано",level:"A1",duration:"18 мин",accent:"blue",module:"Старт · программа",explanation:"Местоимения заменяют существительные и показывают лицо, число и роль слова в предложении.",formula:"I / you / he / she / it / we / they · me / him / her / us / them",examples:[{en:"She helps me. They know us.",ru:"Она помогает мне. Они знают нас."}],practice:"Составь по одному предложению с I, he, she, we и they, затем замени местоимение на object form.",tip:"После глагола используется object form: help me, tell him, invite us.",audioItems:[{label:"I",text:"I",phonetic:"ай"},{label:"you",text:"you",phonetic:"ю"},{label:"he",text:"he",phonetic:"хи"},{label:"she",text:"she",phonetic:"ши"},{label:"it",text:"it",phonetic:"ит"},{label:"we",text:"we",phonetic:"уи"},{label:"they",text:"they",phonetic:"зэй"},{label:"me",text:"me",phonetic:"ми"},{label:"him",text:"him",phonetic:"хим"},{label:"her",text:"her",phonetic:"хёр"},{label:"us",text:"us",phonetic:"ас"},{label:"them",text:"them",phonetic:"зэм"}],programContent:`Личные местоимения (Subject Pronouns)
I [aɪ] — я (ай)
you [juː] — ты / вы (ю)
he [hiː] — он (хи)
she [ʃiː] — она (ши)
it [ɪt] — оно / это (ит)
we [wiː] — мы (уи)
they [ðeɪ] — они (зэй)

Объектные формы (Object Pronouns)
me [miː] — меня / мне (ми)
you [juː] — тебя / вам (ю)
him [hɪm] — его / ему (хим)
her [hɜː(r)] — её / ей (хёр)
us [ʌs] — нас / нам (ас)
them [ðem] — их / им (зэм)

Примеры
She helps me. [ʃiː helps miː] — Она помогает мне (ши хэлпс ми).
They know us. [ðeɪ nəʊ ʌs] — Они знают нас (зэй ноу ас).`},Ac=[...k2.slice(0,3),E2,...k2.slice(3)].map((d,k)=>({...d,id:k+1,explanation:k===3?E2.explanation:U2(d.title,k)})),Bi={xp:120,streak:3,completedLessons:[]},Yh=(d="")=>{const k=`artami-progress:${d||"guest"}`,T="http://localhost:8787",f=()=>{const q=localStorage.getItem(k);if(!q)return Bi;try{return{...Bi,...JSON.parse(q)}}catch{return Bi}},[O,H]=dt.useState(f);return dt.useEffect(()=>H(f()),[d]),dt.useEffect(()=>{localStorage.setItem(k,JSON.stringify(O)),d&&fetch(`${T}/profiles/${encodeURIComponent(d)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}).catch(()=>{})},[O,d]),dt.useEffect(()=>{d&&fetch(`${T}/profiles/${encodeURIComponent(d)}`).then(q=>q.ok?q.json():null).then(q=>{q&&H({...Bi,...q})}).catch(()=>{})},[d]),{progress:O,completeLesson:q=>H(j=>j.completedLessons.includes(q)?j:{...j,xp:j.xp+30,completedLessons:[...j.completedLessons,q]})}},Hc="artami-account",Bh=()=>{const[d,k]=dt.useState(()=>localStorage.getItem(Hc)||"");return dt.useEffect(()=>{d?localStorage.setItem(Hc,d):localStorage.removeItem(Hc)},[d]),{email:d,register:T=>k(T.trim().toLowerCase()),logout:()=>k("")}},Vh=()=>{dt.useEffect(()=>{var k;const d=(k=window.Telegram)==null?void 0:k.WebApp;d==null||d.ready(),d==null||d.expand()},[])};function qh(){Vh();const d=Bh(),{progress:k,completeLesson:T}=Yh(d.email),[f,O]=dt.useState("Обзор"),[H,G]=dt.useState(!1),q=(A,E)=>{var _;O(A),A!=="Словарь"&&((_=document.getElementById(E))==null||_.scrollIntoView({behavior:"smooth"}))},j=f==="Словарь",K=f==="Программа";return s.jsxs("div",{className:"app-shell",id:"top",children:[s.jsx(kh,{active:f,onNavigate:q}),s.jsxs("main",{className:"main-content",children:[s.jsx(Eh,{streak:k.streak,email:d.email,onAccount:()=>G(!0)}),j?s.jsx(oh,{}):K?s.jsx(Hh,{}):s.jsxs(s.Fragment,{children:[s.jsx(mh,{onContinue:()=>q("Мой путь","roadmap")}),s.jsx(bh,{streak:k.streak,xp:k.xp,lessons:k.completedLessons.length,total:Ac.length}),s.jsxs("section",{className:"roadmap-section",id:"roadmap",children:[s.jsx(Cc,{eyebrow:"Блок 01 · Lessons & Practice",title:"Твой маршрут",action:s.jsxs("span",{className:"progress-label",children:[k.completedLessons.length," из ",Ac.length," уроков"]})}),s.jsx(xh,{lessons:Ac,completed:k.completedLessons,onComplete:T})]}),s.jsx(yh,{}),s.jsx("div",{className:"footer-note",children:s.jsx(ne,{variant:"ghost",children:"arTami · учимся говорить о важном"})})]})]}),H&&s.jsx(dh,{email:d.email,onRegister:d.register,onLogout:d.logout,onClose:()=>G(!1)})]})}G3.createRoot(document.getElementById("root")).render(s.jsx(dt.StrictMode,{children:s.jsx(qh,{})}));
