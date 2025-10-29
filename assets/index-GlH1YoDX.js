function Dy(a,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in a)){const o=Object.getOwnPropertyDescriptor(i,s);o&&Object.defineProperty(a,s,o.get?o:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function c0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var jf={exports:{}},Ra={},Xf={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function Iy(){if(ug)return et;ug=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,v={};function x(F,O,se){this.props=F,this.context=O,this.refs=v,this.updater=se||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,O){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,O,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function C(){}C.prototype=x.prototype;function P(F,O,se){this.props=F,this.context=O,this.refs=v,this.updater=se||S}var w=P.prototype=new C;w.constructor=P,M(w,x.prototype),w.isPureReactComponent=!0;var E=Array.isArray,A=Object.prototype.hasOwnProperty,k={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function T(F,O,se){var ce,W={},ve=null,Se=null;if(O!=null)for(ce in O.ref!==void 0&&(Se=O.ref),O.key!==void 0&&(ve=""+O.key),O)A.call(O,ce)&&!D.hasOwnProperty(ce)&&(W[ce]=O[ce]);var ye=arguments.length-2;if(ye===1)W.children=se;else if(1<ye){for(var Me=Array(ye),Ne=0;Ne<ye;Ne++)Me[Ne]=arguments[Ne+2];W.children=Me}if(F&&F.defaultProps)for(ce in ye=F.defaultProps,ye)W[ce]===void 0&&(W[ce]=ye[ce]);return{$$typeof:a,type:F,key:ve,ref:Se,props:W,_owner:k.current}}function L(F,O){return{$$typeof:a,type:F.type,key:O,ref:F.ref,props:F.props,_owner:F._owner}}function B(F){return typeof F=="object"&&F!==null&&F.$$typeof===a}function re(F){var O={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(se){return O[se]})}var ne=/\/+/g;function X(F,O){return typeof F=="object"&&F!==null&&F.key!=null?re(""+F.key):O.toString(36)}function j(F,O,se,ce,W){var ve=typeof F;(ve==="undefined"||ve==="boolean")&&(F=null);var Se=!1;if(F===null)Se=!0;else switch(ve){case"string":case"number":Se=!0;break;case"object":switch(F.$$typeof){case a:case e:Se=!0}}if(Se)return Se=F,W=W(Se),F=ce===""?"."+X(Se,0):ce,E(W)?(se="",F!=null&&(se=F.replace(ne,"$&/")+"/"),j(W,O,se,"",function(Ne){return Ne})):W!=null&&(B(W)&&(W=L(W,se+(!W.key||Se&&Se.key===W.key?"":(""+W.key).replace(ne,"$&/")+"/")+F)),O.push(W)),1;if(Se=0,ce=ce===""?".":ce+":",E(F))for(var ye=0;ye<F.length;ye++){ve=F[ye];var Me=ce+X(ve,ye);Se+=j(ve,O,se,Me,W)}else if(Me=_(F),typeof Me=="function")for(F=Me.call(F),ye=0;!(ve=F.next()).done;)ve=ve.value,Me=ce+X(ve,ye++),Se+=j(ve,O,se,Me,W);else if(ve==="object")throw O=String(F),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Se}function te(F,O,se){if(F==null)return F;var ce=[],W=0;return j(F,ce,"","",function(ve){return O.call(se,ve,W++)}),ce}function oe(F){if(F._status===-1){var O=F._result;O=O(),O.then(function(se){(F._status===0||F._status===-1)&&(F._status=1,F._result=se)},function(se){(F._status===0||F._status===-1)&&(F._status=2,F._result=se)}),F._status===-1&&(F._status=0,F._result=O)}if(F._status===1)return F._result.default;throw F._result}var le={current:null},G={transition:null},ie={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:G,ReactCurrentOwner:k};function Y(){throw Error("act(...) is not supported in production builds of React.")}return et.Children={map:te,forEach:function(F,O,se){te(F,function(){O.apply(this,arguments)},se)},count:function(F){var O=0;return te(F,function(){O++}),O},toArray:function(F){return te(F,function(O){return O})||[]},only:function(F){if(!B(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},et.Component=x,et.Fragment=t,et.Profiler=s,et.PureComponent=P,et.StrictMode=i,et.Suspense=d,et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,et.act=Y,et.cloneElement=function(F,O,se){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ce=M({},F.props),W=F.key,ve=F.ref,Se=F._owner;if(O!=null){if(O.ref!==void 0&&(ve=O.ref,Se=k.current),O.key!==void 0&&(W=""+O.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(Me in O)A.call(O,Me)&&!D.hasOwnProperty(Me)&&(ce[Me]=O[Me]===void 0&&ye!==void 0?ye[Me]:O[Me])}var Me=arguments.length-2;if(Me===1)ce.children=se;else if(1<Me){ye=Array(Me);for(var Ne=0;Ne<Me;Ne++)ye[Ne]=arguments[Ne+2];ce.children=ye}return{$$typeof:a,type:F.type,key:W,ref:ve,props:ce,_owner:Se}},et.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:o,_context:F},F.Consumer=F},et.createElement=T,et.createFactory=function(F){var O=T.bind(null,F);return O.type=F,O},et.createRef=function(){return{current:null}},et.forwardRef=function(F){return{$$typeof:c,render:F}},et.isValidElement=B,et.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:oe}},et.memo=function(F,O){return{$$typeof:h,type:F,compare:O===void 0?null:O}},et.startTransition=function(F){var O=G.transition;G.transition={};try{F()}finally{G.transition=O}},et.unstable_act=Y,et.useCallback=function(F,O){return le.current.useCallback(F,O)},et.useContext=function(F){return le.current.useContext(F)},et.useDebugValue=function(){},et.useDeferredValue=function(F){return le.current.useDeferredValue(F)},et.useEffect=function(F,O){return le.current.useEffect(F,O)},et.useId=function(){return le.current.useId()},et.useImperativeHandle=function(F,O,se){return le.current.useImperativeHandle(F,O,se)},et.useInsertionEffect=function(F,O){return le.current.useInsertionEffect(F,O)},et.useLayoutEffect=function(F,O){return le.current.useLayoutEffect(F,O)},et.useMemo=function(F,O){return le.current.useMemo(F,O)},et.useReducer=function(F,O,se){return le.current.useReducer(F,O,se)},et.useRef=function(F){return le.current.useRef(F)},et.useState=function(F){return le.current.useState(F)},et.useSyncExternalStore=function(F,O,se){return le.current.useSyncExternalStore(F,O,se)},et.useTransition=function(){return le.current.useTransition()},et.version="18.3.1",et}var cg;function ch(){return cg||(cg=1,Xf.exports=Iy()),Xf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function ky(){if(fg)return Ra;fg=1;var a=ch(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},_=null,S=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!o.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:_,ref:S,props:g,_owner:s.current}}return Ra.Fragment=t,Ra.jsx=u,Ra.jsxs=u,Ra}var dg;function Ny(){return dg||(dg=1,jf.exports=ky()),jf.exports}var $=Ny(),Te=ch();const f0=c0(Te),Oy=Dy({__proto__:null,default:f0},[Te]);var _u={},qf={exports:{}},Un={},Yf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function zy(){return hg||(hg=1,(function(a){function e(G,ie){var Y=G.length;G.push(ie);e:for(;0<Y;){var F=Y-1>>>1,O=G[F];if(0<s(O,ie))G[F]=ie,G[Y]=O,Y=F;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var ie=G[0],Y=G.pop();if(Y!==ie){G[0]=Y;e:for(var F=0,O=G.length,se=O>>>1;F<se;){var ce=2*(F+1)-1,W=G[ce],ve=ce+1,Se=G[ve];if(0>s(W,Y))ve<O&&0>s(Se,W)?(G[F]=Se,G[ve]=Y,F=ve):(G[F]=W,G[ce]=Y,F=ce);else if(ve<O&&0>s(Se,Y))G[F]=Se,G[ve]=Y,F=ve;else break e}}return ie}function s(G,ie){var Y=G.sortIndex-ie.sortIndex;return Y!==0?Y:G.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();a.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,_=3,S=!1,M=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(G){for(var ie=t(h);ie!==null;){if(ie.callback===null)i(h);else if(ie.startTime<=G)i(h),ie.sortIndex=ie.expirationTime,e(d,ie);else break;ie=t(h)}}function E(G){if(v=!1,w(G),!M)if(t(d)!==null)M=!0,oe(A);else{var ie=t(h);ie!==null&&le(E,ie.startTime-G)}}function A(G,ie){M=!1,v&&(v=!1,C(T),T=-1),S=!0;var Y=_;try{for(w(ie),g=t(d);g!==null&&(!(g.expirationTime>ie)||G&&!re());){var F=g.callback;if(typeof F=="function"){g.callback=null,_=g.priorityLevel;var O=F(g.expirationTime<=ie);ie=a.unstable_now(),typeof O=="function"?g.callback=O:g===t(d)&&i(d),w(ie)}else i(d);g=t(d)}if(g!==null)var se=!0;else{var ce=t(h);ce!==null&&le(E,ce.startTime-ie),se=!1}return se}finally{g=null,_=Y,S=!1}}var k=!1,D=null,T=-1,L=5,B=-1;function re(){return!(a.unstable_now()-B<L)}function ne(){if(D!==null){var G=a.unstable_now();B=G;var ie=!0;try{ie=D(!0,G)}finally{ie?X():(k=!1,D=null)}}else k=!1}var X;if(typeof P=="function")X=function(){P(ne)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,te=j.port2;j.port1.onmessage=ne,X=function(){te.postMessage(null)}}else X=function(){x(ne,0)};function oe(G){D=G,k||(k=!0,X())}function le(G,ie){T=x(function(){G(a.unstable_now())},ie)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(G){G.callback=null},a.unstable_continueExecution=function(){M||S||(M=!0,oe(A))},a.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<G?Math.floor(1e3/G):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_getFirstCallbackNode=function(){return t(d)},a.unstable_next=function(G){switch(_){case 1:case 2:case 3:var ie=3;break;default:ie=_}var Y=_;_=ie;try{return G()}finally{_=Y}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(G,ie){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Y=_;_=G;try{return ie()}finally{_=Y}},a.unstable_scheduleCallback=function(G,ie,Y){var F=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?F+Y:F):Y=F,G){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Y+O,G={id:p++,callback:ie,priorityLevel:G,startTime:Y,expirationTime:O,sortIndex:-1},Y>F?(G.sortIndex=Y,e(h,G),t(d)===null&&G===t(h)&&(v?(C(T),T=-1):v=!0,le(E,Y-F))):(G.sortIndex=O,e(d,G),M||S||(M=!0,oe(A))),G},a.unstable_shouldYield=re,a.unstable_wrapCallback=function(G){var ie=_;return function(){var Y=_;_=ie;try{return G.apply(this,arguments)}finally{_=Y}}}})($f)),$f}var pg;function Fy(){return pg||(pg=1,Yf.exports=zy()),Yf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function Uy(){if(mg)return Un;mg=1;var a=ch(),e=Fy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function _(n){return d.call(g,n)?!0:d.call(p,n)?!1:h.test(n)?g[n]=!0:(p[n]=!0,!1)}function S(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,f){if(r===null||typeof r>"u"||S(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function v(n,r,l,f,m,y,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=y,this.removeEmptyString=b}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new v(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new v(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new v(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new v(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new v(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new v(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new v(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new v(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new v(n,5,!1,n.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(C,P);x[r]=new v(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(C,P);x[r]=new v(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(C,P);x[r]=new v(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new v(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new v(n,1,!1,n.toLowerCase(),null,!0,!0)});function w(n,r,l,f){var m=x.hasOwnProperty(r)?x[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,m,f)&&(l=null),f||m===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var E=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),k=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),re=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),G=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,F;function O(n){if(F===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var se=!1;function ce(n,r){if(!n||se)return"";se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var f=ee}Reflect.construct(n,[],r)}else{try{r.call()}catch(ee){f=ee}n.call(r.prototype)}else{try{throw Error()}catch(ee){f=ee}n()}}catch(ee){if(ee&&f&&typeof ee.stack=="string"){for(var m=ee.stack.split(`
`),y=f.stack.split(`
`),b=m.length-1,z=y.length-1;1<=b&&0<=z&&m[b]!==y[z];)z--;for(;1<=b&&0<=z;b--,z--)if(m[b]!==y[z]){if(b!==1||z!==1)do if(b--,z--,0>z||m[b]!==y[z]){var U=`
`+m[b].replace(" at new "," at ");return n.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",n.displayName)),U}while(1<=b&&0<=z);break}}}finally{se=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?O(n):""}function W(n){switch(n.tag){case 5:return O(n.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return n=ce(n.type,!1),n;case 11:return n=ce(n.type.render,!1),n;case 1:return n=ce(n.type,!0),n;default:return""}}function ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case k:return"Portal";case L:return"Profiler";case T:return"StrictMode";case X:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case re:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case ne:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return r=n.displayName||null,r!==null?r:ve(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return ve(n(r))}catch{}}return null}function Se(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ne(n){var r=Me(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(b){f=""+b,y.call(this,b)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(b){f=""+b},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ke(n){n._valueTracker||(n._valueTracker=Ne(n))}function Qe(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Me(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function jt(n,r){var l=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function In(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=ye(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function an(n,r){r=r.checked,r!=null&&w(n,"checked",r,!1)}function Xt(n,r){an(n,r);var l=ye(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?dt(n,r.type,l):r.hasOwnProperty("defaultValue")&&dt(n,r.type,ye(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function vt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function dt(n,r,l){(r!=="number"||nt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var dn=Array.isArray;function Qt(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+ye(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function N(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function R(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(dn(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:ye(l)}}function fe(n,r){var l=ye(r.value),f=ye(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function we(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Ee(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Ee(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fe,Le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function he(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ge[r]=Ge[n]})});function Xe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ge.hasOwnProperty(n)&&Ge[n]?(""+r).trim():r+"px"}function We(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Xe(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var Be=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(n,r){if(r){if(Be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ht(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ue=null,ge=null,Ce=null;function Ie(n){if(n=ga(n)){if(typeof ue!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Dl(r),ue(n.stateNode,n.type,r))}}function ct(n){ge?Ce?Ce.push(n):Ce=[n]:ge=n}function Ot(){if(ge){var n=ge,r=Ce;if(Ce=ge=null,Ie(n),r)for(n=0;n<r.length;n++)Ie(r[n])}}function Jt(n,r){return n(r)}function Xn(){}var xt=!1;function wn(n,r,l){if(xt)return n(r,l);xt=!0;try{return Jt(n,r,l)}finally{xt=!1,(ge!==null||Ce!==null)&&(Xn(),Ot())}}function hn(n,r){var l=n.stateNode;if(l===null)return null;var f=Dl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Yo=!1;if(c)try{var es={};Object.defineProperty(es,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Yo=!1}function uc(n,r,l,f,m,y,b,z,U){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(l,ee)}catch(me){this.onError(me)}}var I=!1,J=null,ae=!1,K=null,de={onError:function(n){I=!0,J=n}};function Ve(n,r,l,f,m,y,b,z,U){I=!1,J=null,uc.apply(de,arguments)}function $e(n,r,l,f,m,y,b,z,U){if(Ve.apply(this,arguments),I){if(I){var ee=J;I=!1,J=null}else throw Error(t(198));ae||(ae=!0,K=ee)}}function Ye(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ze(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function st(n){if(Ye(n)!==n)throw Error(t(188))}function rt(n){var r=n.alternate;if(!r){if(r=Ye(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return st(m),n;if(y===f)return st(m),r;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=y;else{for(var b=!1,z=m.child;z;){if(z===l){b=!0,l=m,f=y;break}if(z===f){b=!0,f=m,l=y;break}z=z.sibling}if(!b){for(z=y.child;z;){if(z===l){b=!0,l=y,f=m;break}if(z===f){b=!0,f=y,l=m;break}z=z.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function tt(n){return n=rt(n),n!==null?bt(n):null}function bt(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=bt(n);if(r!==null)return r;n=n.sibling}return null}var pn=e.unstable_scheduleCallback,ci=e.unstable_cancelCallback,$i=e.unstable_shouldYield,Dt=e.unstable_requestPaint,Ue=e.unstable_now,$o=e.unstable_getCurrentPriorityLevel,It=e.unstable_ImmediatePriority,Oi=e.unstable_UserBlockingPriority,ts=e.unstable_NormalPriority,ns=e.unstable_LowPriority,Bs=e.unstable_IdlePriority,Ut=null,en=null;function Ko(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ut,n,void 0,(n.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:hl,Zo=Math.log,cc=Math.LN2;function hl(n){return n>>>=0,n===0?32:31-(Zo(n)/cc|0)|0}var pl=64,ml=4194304;function Qo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gl(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,y=n.pingedLanes,b=l&268435455;if(b!==0){var z=b&~m;z!==0?f=Qo(z):(y&=b,y!==0&&(f=Qo(y)))}else b=l&~m,b!==0?f=Qo(b):y!==0&&(f=Qo(y));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,y=r&-r,m>=y||m===16&&(y&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-yt(r),m=1<<l,f|=n[l],r&=~m;return f}function Zv(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qv(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,y=n.pendingLanes;0<y;){var b=31-yt(y),z=1<<b,U=m[b];U===-1?((z&l)===0||(z&f)!==0)&&(m[b]=Zv(z,r)):U<=r&&(n.expiredLanes|=z),y&=~z}}function fc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bh(){var n=pl;return pl<<=1,(pl&4194240)===0&&(pl=64),n}function dc(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Jo(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-yt(r),n[r]=l}function Jv(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-yt(l),y=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~y}}function hc(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-yt(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var ut=0;function Gh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Vh,pc,Wh,Hh,jh,mc=!1,_l=[],gr=null,_r=null,vr=null,ea=new Map,ta=new Map,xr=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xh(n,r){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":ea.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(r.pointerId)}}function na(n,r,l,f,m,y){return n===null||n.nativeEvent!==y?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[m]},r!==null&&(r=ga(r),r!==null&&pc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function tx(n,r,l,f,m){switch(r){case"focusin":return gr=na(gr,n,r,l,f,m),!0;case"dragenter":return _r=na(_r,n,r,l,f,m),!0;case"mouseover":return vr=na(vr,n,r,l,f,m),!0;case"pointerover":var y=m.pointerId;return ea.set(y,na(ea.get(y)||null,n,r,l,f,m)),!0;case"gotpointercapture":return y=m.pointerId,ta.set(y,na(ta.get(y)||null,n,r,l,f,m)),!0}return!1}function qh(n){var r=is(n.target);if(r!==null){var l=Ye(r);if(l!==null){if(r=l.tag,r===13){if(r=Ze(l),r!==null){n.blockedOn=r,jh(n.priority,function(){Wh(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=_c(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Rt=f,l.target.dispatchEvent(f),Rt=null}else return r=ga(l),r!==null&&pc(r),n.blockedOn=l,!1;r.shift()}return!0}function Yh(n,r,l){vl(n)&&l.delete(r)}function nx(){mc=!1,gr!==null&&vl(gr)&&(gr=null),_r!==null&&vl(_r)&&(_r=null),vr!==null&&vl(vr)&&(vr=null),ea.forEach(Yh),ta.forEach(Yh)}function ia(n,r){n.blockedOn===r&&(n.blockedOn=null,mc||(mc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nx)))}function ra(n){function r(m){return ia(m,n)}if(0<_l.length){ia(_l[0],n);for(var l=1;l<_l.length;l++){var f=_l[l];f.blockedOn===n&&(f.blockedOn=null)}}for(gr!==null&&ia(gr,n),_r!==null&&ia(_r,n),vr!==null&&ia(vr,n),ea.forEach(r),ta.forEach(r),l=0;l<xr.length;l++)f=xr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<xr.length&&(l=xr[0],l.blockedOn===null);)qh(l),l.blockedOn===null&&xr.shift()}var Gs=E.ReactCurrentBatchConfig,xl=!0;function ix(n,r,l,f){var m=ut,y=Gs.transition;Gs.transition=null;try{ut=1,gc(n,r,l,f)}finally{ut=m,Gs.transition=y}}function rx(n,r,l,f){var m=ut,y=Gs.transition;Gs.transition=null;try{ut=4,gc(n,r,l,f)}finally{ut=m,Gs.transition=y}}function gc(n,r,l,f){if(xl){var m=_c(n,r,l,f);if(m===null)kc(n,r,f,yl,l),Xh(n,f);else if(tx(m,n,r,l,f))f.stopPropagation();else if(Xh(n,f),r&4&&-1<ex.indexOf(n)){for(;m!==null;){var y=ga(m);if(y!==null&&Vh(y),y=_c(n,r,l,f),y===null&&kc(n,r,f,yl,l),y===m)break;m=y}m!==null&&f.stopPropagation()}else kc(n,r,f,null,l)}}var yl=null;function _c(n,r,l,f){if(yl=null,n=H(f),n=is(n),n!==null)if(r=Ye(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ze(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return yl=n,null}function $h(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($o()){case It:return 1;case Oi:return 4;case ts:case ns:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var yr=null,vc=null,Sl=null;function Kh(){if(Sl)return Sl;var n,r=vc,l=r.length,f,m="value"in yr?yr.value:yr.textContent,y=m.length;for(n=0;n<l&&r[n]===m[n];n++);var b=l-n;for(f=1;f<=b&&r[l-f]===m[y-f];f++);return Sl=m.slice(n,1<f?1-f:void 0)}function Ml(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function wl(){return!0}function Zh(){return!1}function qn(n){function r(l,f,m,y,b){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=y,this.target=b,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(l=n[z],this[z]=l?l(y):y[z]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?wl:Zh,this.isPropagationStopped=Zh,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),r}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=qn(Vs),sa=Y({},Vs,{view:0,detail:0}),sx=qn(sa),yc,Sc,oa,Tl=Y({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oa&&(oa&&n.type==="mousemove"?(yc=n.screenX-oa.screenX,Sc=n.screenY-oa.screenY):Sc=yc=0,oa=n),yc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),Qh=qn(Tl),ox=Y({},Tl,{dataTransfer:0}),ax=qn(ox),lx=Y({},sa,{relatedTarget:0}),Mc=qn(lx),ux=Y({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=qn(ux),fx=Y({},Vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dx=qn(fx),hx=Y({},Vs,{data:0}),Jh=qn(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=gx[n])?!!r[n]:!1}function wc(){return _x}var vx=Y({},sa,{key:function(n){if(n.key){var r=px[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ml(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?mx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(n){return n.type==="keypress"?Ml(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ml(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xx=qn(vx),yx=Y({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=qn(yx),Sx=Y({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),Mx=qn(Sx),wx=Y({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=qn(wx),Ex=Y({},Tl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=qn(Ex),Cx=[9,13,27,32],Tc=c&&"CompositionEvent"in window,aa=null;c&&"documentMode"in document&&(aa=document.documentMode);var Px=c&&"TextEvent"in window&&!aa,tp=c&&(!Tc||aa&&8<aa&&11>=aa),np=" ",ip=!1;function rp(n,r){switch(n){case"keyup":return Cx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ws=!1;function Ax(n,r){switch(n){case"compositionend":return sp(r);case"keypress":return r.which!==32?null:(ip=!0,np);case"textInput":return n=r.data,n===np&&ip?null:n;default:return null}}function Lx(n,r){if(Ws)return n==="compositionend"||!Tc&&rp(n,r)?(n=Kh(),Sl=vc=yr=null,Ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return tp&&r.locale!=="ko"?null:r.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Rx[n.type]:r==="textarea"}function ap(n,r,l,f){ct(f),r=Al(r,"onChange"),0<r.length&&(l=new xc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var la=null,ua=null;function Dx(n){Ep(n,0)}function El(n){var r=Ys(n);if(Qe(r))return n}function Ix(n,r){if(n==="change")return r}var lp=!1;if(c){var Ec;if(c){var bc="oninput"in document;if(!bc){var up=document.createElement("div");up.setAttribute("oninput","return;"),bc=typeof up.oninput=="function"}Ec=bc}else Ec=!1;lp=Ec&&(!document.documentMode||9<document.documentMode)}function cp(){la&&(la.detachEvent("onpropertychange",fp),ua=la=null)}function fp(n){if(n.propertyName==="value"&&El(ua)){var r=[];ap(r,ua,n,H(n)),wn(Dx,r)}}function kx(n,r,l){n==="focusin"?(cp(),la=r,ua=l,la.attachEvent("onpropertychange",fp)):n==="focusout"&&cp()}function Nx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return El(ua)}function Ox(n,r){if(n==="click")return El(r)}function zx(n,r){if(n==="input"||n==="change")return El(r)}function Fx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ei=typeof Object.is=="function"?Object.is:Fx;function ca(n,r){if(Ei(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!Ei(n[m],r[m]))return!1}return!0}function dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hp(n,r){var l=dp(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=dp(l)}}function pp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?pp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function mp(){for(var n=window,r=nt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=nt(n.document)}return r}function Cc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Ux(n){var r=mp(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&pp(l.ownerDocument.documentElement,l)){if(f!==null&&Cc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,y=Math.min(f.start,m);f=f.end===void 0?y:Math.min(f.end,m),!n.extend&&y>f&&(m=f,f=y,y=m),m=hp(l,y);var b=hp(l,f);m&&b&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),y>f?(n.addRange(r),n.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Bx=c&&"documentMode"in document&&11>=document.documentMode,Hs=null,Pc=null,fa=null,Ac=!1;function gp(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ac||Hs==null||Hs!==nt(f)||(f=Hs,"selectionStart"in f&&Cc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),fa&&ca(fa,f)||(fa=f,f=Al(Pc,"onSelect"),0<f.length&&(r=new xc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Hs)))}function bl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var js={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Lc={},_p={};c&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function Cl(n){if(Lc[n])return Lc[n];if(!js[n])return n;var r=js[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in _p)return Lc[n]=r[l];return n}var vp=Cl("animationend"),xp=Cl("animationiteration"),yp=Cl("animationstart"),Sp=Cl("transitionend"),Mp=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,r){Mp.set(n,r),o(r,[n])}for(var Rc=0;Rc<wp.length;Rc++){var Dc=wp[Rc],Gx=Dc.toLowerCase(),Vx=Dc[0].toUpperCase()+Dc.slice(1);Sr(Gx,"on"+Vx)}Sr(vp,"onAnimationEnd"),Sr(xp,"onAnimationIteration"),Sr(yp,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(Sp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Tp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,$e(f,r,void 0,n),n.currentTarget=null}function Ep(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var y=void 0;if(r)for(var b=f.length-1;0<=b;b--){var z=f[b],U=z.instance,ee=z.currentTarget;if(z=z.listener,U!==y&&m.isPropagationStopped())break e;Tp(m,z,ee),y=U}else for(b=0;b<f.length;b++){if(z=f[b],U=z.instance,ee=z.currentTarget,z=z.listener,U!==y&&m.isPropagationStopped())break e;Tp(m,z,ee),y=U}}}if(ae)throw n=K,ae=!1,K=null,n}function St(n,r){var l=r[Bc];l===void 0&&(l=r[Bc]=new Set);var f=n+"__bubble";l.has(f)||(bp(r,n,2,!1),l.add(f))}function Ic(n,r,l){var f=0;r&&(f|=4),bp(l,n,f,r)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function ha(n){if(!n[Pl]){n[Pl]=!0,i.forEach(function(l){l!=="selectionchange"&&(Wx.has(l)||Ic(l,!1,n),Ic(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Pl]||(r[Pl]=!0,Ic("selectionchange",!1,r))}}function bp(n,r,l,f){switch($h(r)){case 1:var m=ix;break;case 4:m=rx;break;default:m=gc}l=m.bind(null,r,l,n),m=void 0,!Yo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function kc(n,r,l,f,m){var y=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var b=f.tag;if(b===3||b===4){var z=f.stateNode.containerInfo;if(z===m||z.nodeType===8&&z.parentNode===m)break;if(b===4)for(b=f.return;b!==null;){var U=b.tag;if((U===3||U===4)&&(U=b.stateNode.containerInfo,U===m||U.nodeType===8&&U.parentNode===m))return;b=b.return}for(;z!==null;){if(b=is(z),b===null)return;if(U=b.tag,U===5||U===6){f=y=b;continue e}z=z.parentNode}}f=f.return}wn(function(){var ee=y,me=H(l),_e=[];e:{var pe=Mp.get(n);if(pe!==void 0){var Ae=xc,De=n;switch(n){case"keypress":if(Ml(l)===0)break e;case"keydown":case"keyup":Ae=xx;break;case"focusin":De="focus",Ae=Mc;break;case"focusout":De="blur",Ae=Mc;break;case"beforeblur":case"afterblur":Ae=Mc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ae=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ae=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ae=Mx;break;case vp:case xp:case yp:Ae=cx;break;case Sp:Ae=Tx;break;case"scroll":Ae=sx;break;case"wheel":Ae=bx;break;case"copy":case"cut":case"paste":Ae=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ae=ep}var ke=(r&4)!==0,zt=!ke&&n==="scroll",q=ke?pe!==null?pe+"Capture":null:pe;ke=[];for(var V=ee,Z;V!==null;){Z=V;var xe=Z.stateNode;if(Z.tag===5&&xe!==null&&(Z=xe,q!==null&&(xe=hn(V,q),xe!=null&&ke.push(pa(V,xe,Z)))),zt)break;V=V.return}0<ke.length&&(pe=new Ae(pe,De,null,l,me),_e.push({event:pe,listeners:ke}))}}if((r&7)===0){e:{if(pe=n==="mouseover"||n==="pointerover",Ae=n==="mouseout"||n==="pointerout",pe&&l!==Rt&&(De=l.relatedTarget||l.fromElement)&&(is(De)||De[Ki]))break e;if((Ae||pe)&&(pe=me.window===me?me:(pe=me.ownerDocument)?pe.defaultView||pe.parentWindow:window,Ae?(De=l.relatedTarget||l.toElement,Ae=ee,De=De?is(De):null,De!==null&&(zt=Ye(De),De!==zt||De.tag!==5&&De.tag!==6)&&(De=null)):(Ae=null,De=ee),Ae!==De)){if(ke=Qh,xe="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(ke=ep,xe="onPointerLeave",q="onPointerEnter",V="pointer"),zt=Ae==null?pe:Ys(Ae),Z=De==null?pe:Ys(De),pe=new ke(xe,V+"leave",Ae,l,me),pe.target=zt,pe.relatedTarget=Z,xe=null,is(me)===ee&&(ke=new ke(q,V+"enter",De,l,me),ke.target=Z,ke.relatedTarget=zt,xe=ke),zt=xe,Ae&&De)t:{for(ke=Ae,q=De,V=0,Z=ke;Z;Z=Xs(Z))V++;for(Z=0,xe=q;xe;xe=Xs(xe))Z++;for(;0<V-Z;)ke=Xs(ke),V--;for(;0<Z-V;)q=Xs(q),Z--;for(;V--;){if(ke===q||q!==null&&ke===q.alternate)break t;ke=Xs(ke),q=Xs(q)}ke=null}else ke=null;Ae!==null&&Cp(_e,pe,Ae,ke,!1),De!==null&&zt!==null&&Cp(_e,zt,De,ke,!0)}}e:{if(pe=ee?Ys(ee):window,Ae=pe.nodeName&&pe.nodeName.toLowerCase(),Ae==="select"||Ae==="input"&&pe.type==="file")var ze=Ix;else if(op(pe))if(lp)ze=zx;else{ze=Nx;var He=kx}else(Ae=pe.nodeName)&&Ae.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(ze=Ox);if(ze&&(ze=ze(n,ee))){ap(_e,ze,l,me);break e}He&&He(n,pe,ee),n==="focusout"&&(He=pe._wrapperState)&&He.controlled&&pe.type==="number"&&dt(pe,"number",pe.value)}switch(He=ee?Ys(ee):window,n){case"focusin":(op(He)||He.contentEditable==="true")&&(Hs=He,Pc=ee,fa=null);break;case"focusout":fa=Pc=Hs=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,gp(_e,l,me);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":gp(_e,l,me)}var je;if(Tc)e:{switch(n){case"compositionstart":var qe="onCompositionStart";break e;case"compositionend":qe="onCompositionEnd";break e;case"compositionupdate":qe="onCompositionUpdate";break e}qe=void 0}else Ws?rp(n,l)&&(qe="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(qe="onCompositionStart");qe&&(tp&&l.locale!=="ko"&&(Ws||qe!=="onCompositionStart"?qe==="onCompositionEnd"&&Ws&&(je=Kh()):(yr=me,vc="value"in yr?yr.value:yr.textContent,Ws=!0)),He=Al(ee,qe),0<He.length&&(qe=new Jh(qe,n,null,l,me),_e.push({event:qe,listeners:He}),je?qe.data=je:(je=sp(l),je!==null&&(qe.data=je)))),(je=Px?Ax(n,l):Lx(n,l))&&(ee=Al(ee,"onBeforeInput"),0<ee.length&&(me=new Jh("onBeforeInput","beforeinput",null,l,me),_e.push({event:me,listeners:ee}),me.data=je))}Ep(_e,r)})}function pa(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Al(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=hn(n,l),y!=null&&f.unshift(pa(n,y,m)),y=hn(n,r),y!=null&&f.push(pa(n,y,m))),n=n.return}return f}function Xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Cp(n,r,l,f,m){for(var y=r._reactName,b=[];l!==null&&l!==f;){var z=l,U=z.alternate,ee=z.stateNode;if(U!==null&&U===f)break;z.tag===5&&ee!==null&&(z=ee,m?(U=hn(l,y),U!=null&&b.unshift(pa(l,U,z))):m||(U=hn(l,y),U!=null&&b.push(pa(l,U,z)))),l=l.return}b.length!==0&&n.push({event:r,listeners:b})}var Hx=/\r\n?/g,jx=/\u0000|\uFFFD/g;function Pp(n){return(typeof n=="string"?n:""+n).replace(Hx,`
`).replace(jx,"")}function Ll(n,r,l){if(r=Pp(r),Pp(n)!==r&&l)throw Error(t(425))}function Rl(){}var Nc=null,Oc=null;function zc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,Xx=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(n){return Ap.resolve(null).then(n).catch(Yx)}:Fc;function Yx(n){setTimeout(function(){throw n})}function Uc(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),ra(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);ra(r)}function Mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Lp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var qs=Math.random().toString(36).slice(2),zi="__reactFiber$"+qs,ma="__reactProps$"+qs,Ki="__reactContainer$"+qs,Bc="__reactEvents$"+qs,$x="__reactListeners$"+qs,Kx="__reactHandles$"+qs;function is(n){var r=n[zi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Ki]||l[zi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Lp(n);n!==null;){if(l=n[zi])return l;n=Lp(n)}return r}n=l,l=n.parentNode}return null}function ga(n){return n=n[zi]||n[Ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Dl(n){return n[ma]||null}var Gc=[],$s=-1;function wr(n){return{current:n}}function Mt(n){0>$s||(n.current=Gc[$s],Gc[$s]=null,$s--)}function gt(n,r){$s++,Gc[$s]=n.current,n.current=r}var Tr={},mn=wr(Tr),kn=wr(!1),rs=Tr;function Ks(n,r){var l=n.type.contextTypes;if(!l)return Tr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=r[y];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function Nn(n){return n=n.childContextTypes,n!=null}function Il(){Mt(kn),Mt(mn)}function Rp(n,r,l){if(mn.current!==Tr)throw Error(t(168));gt(mn,r),gt(kn,l)}function Dp(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,Se(n)||"Unknown",m));return Y({},l,f)}function kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,rs=mn.current,gt(mn,n),gt(kn,kn.current),!0}function Ip(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=Dp(n,r,rs),f.__reactInternalMemoizedMergedChildContext=n,Mt(kn),Mt(mn),gt(mn,n)):Mt(kn),gt(kn,l)}var Zi=null,Nl=!1,Vc=!1;function kp(n){Zi===null?Zi=[n]:Zi.push(n)}function Zx(n){Nl=!0,kp(n)}function Er(){if(!Vc&&Zi!==null){Vc=!0;var n=0,r=ut;try{var l=Zi;for(ut=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}Zi=null,Nl=!1}catch(m){throw Zi!==null&&(Zi=Zi.slice(n+1)),pn(It,Er),m}finally{ut=r,Vc=!1}}return null}var Zs=[],Qs=0,Ol=null,zl=0,fi=[],di=0,ss=null,Qi=1,Ji="";function os(n,r){Zs[Qs++]=zl,Zs[Qs++]=Ol,Ol=n,zl=r}function Np(n,r,l){fi[di++]=Qi,fi[di++]=Ji,fi[di++]=ss,ss=n;var f=Qi;n=Ji;var m=32-yt(f)-1;f&=~(1<<m),l+=1;var y=32-yt(r)+m;if(30<y){var b=m-m%5;y=(f&(1<<b)-1).toString(32),f>>=b,m-=b,Qi=1<<32-yt(r)+m|l<<m|f,Ji=y+n}else Qi=1<<y|l<<m|f,Ji=n}function Wc(n){n.return!==null&&(os(n,1),Np(n,1,0))}function Hc(n){for(;n===Ol;)Ol=Zs[--Qs],Zs[Qs]=null,zl=Zs[--Qs],Zs[Qs]=null;for(;n===ss;)ss=fi[--di],fi[di]=null,Ji=fi[--di],fi[di]=null,Qi=fi[--di],fi[di]=null}var Yn=null,$n=null,Tt=!1,bi=null;function Op(n,r){var l=gi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function zp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Yn=n,$n=Mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Yn=n,$n=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ss!==null?{id:Qi,overflow:Ji}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=gi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Yn=n,$n=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(Tt){var r=$n;if(r){var l=r;if(!zp(n,r)){if(jc(n))throw Error(t(418));r=Mr(l.nextSibling);var f=Yn;r&&zp(n,r)?Op(f,l):(n.flags=n.flags&-4097|2,Tt=!1,Yn=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Tt=!1,Yn=n}}}function Fp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function Fl(n){if(n!==Yn)return!1;if(!Tt)return Fp(n),Tt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!zc(n.type,n.memoizedProps)),r&&(r=$n)){if(jc(n))throw Up(),Error(t(418));for(;r;)Op(n,r),r=Mr(r.nextSibling)}if(Fp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){$n=Mr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}$n=null}}else $n=Yn?Mr(n.stateNode.nextSibling):null;return!0}function Up(){for(var n=$n;n;)n=Mr(n.nextSibling)}function Js(){$n=Yn=null,Tt=!1}function qc(n){bi===null?bi=[n]:bi.push(n)}var Qx=E.ReactCurrentBatchConfig;function _a(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,y=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===y?r.ref:(r=function(b){var z=m.refs;b===null?delete z[y]:z[y]=b},r._stringRef=y,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Ul(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Bp(n){var r=n._init;return r(n._payload)}function Gp(n){function r(q,V){if(n){var Z=q.deletions;Z===null?(q.deletions=[V],q.flags|=16):Z.push(V)}}function l(q,V){if(!n)return null;for(;V!==null;)r(q,V),V=V.sibling;return null}function f(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function m(q,V){return q=Ir(q,V),q.index=0,q.sibling=null,q}function y(q,V,Z){return q.index=Z,n?(Z=q.alternate,Z!==null?(Z=Z.index,Z<V?(q.flags|=2,V):Z):(q.flags|=2,V)):(q.flags|=1048576,V)}function b(q){return n&&q.alternate===null&&(q.flags|=2),q}function z(q,V,Z,xe){return V===null||V.tag!==6?(V=Uf(Z,q.mode,xe),V.return=q,V):(V=m(V,Z),V.return=q,V)}function U(q,V,Z,xe){var ze=Z.type;return ze===D?me(q,V,Z.props.children,xe,Z.key):V!==null&&(V.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===oe&&Bp(ze)===V.type)?(xe=m(V,Z.props),xe.ref=_a(q,V,Z),xe.return=q,xe):(xe=uu(Z.type,Z.key,Z.props,null,q.mode,xe),xe.ref=_a(q,V,Z),xe.return=q,xe)}function ee(q,V,Z,xe){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=Bf(Z,q.mode,xe),V.return=q,V):(V=m(V,Z.children||[]),V.return=q,V)}function me(q,V,Z,xe,ze){return V===null||V.tag!==7?(V=ps(Z,q.mode,xe,ze),V.return=q,V):(V=m(V,Z),V.return=q,V)}function _e(q,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Uf(""+V,q.mode,Z),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case A:return Z=uu(V.type,V.key,V.props,null,q.mode,Z),Z.ref=_a(q,null,V),Z.return=q,Z;case k:return V=Bf(V,q.mode,Z),V.return=q,V;case oe:var xe=V._init;return _e(q,xe(V._payload),Z)}if(dn(V)||ie(V))return V=ps(V,q.mode,Z,null),V.return=q,V;Ul(q,V)}return null}function pe(q,V,Z,xe){var ze=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return ze!==null?null:z(q,V,""+Z,xe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case A:return Z.key===ze?U(q,V,Z,xe):null;case k:return Z.key===ze?ee(q,V,Z,xe):null;case oe:return ze=Z._init,pe(q,V,ze(Z._payload),xe)}if(dn(Z)||ie(Z))return ze!==null?null:me(q,V,Z,xe,null);Ul(q,Z)}return null}function Ae(q,V,Z,xe,ze){if(typeof xe=="string"&&xe!==""||typeof xe=="number")return q=q.get(Z)||null,z(V,q,""+xe,ze);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case A:return q=q.get(xe.key===null?Z:xe.key)||null,U(V,q,xe,ze);case k:return q=q.get(xe.key===null?Z:xe.key)||null,ee(V,q,xe,ze);case oe:var He=xe._init;return Ae(q,V,Z,He(xe._payload),ze)}if(dn(xe)||ie(xe))return q=q.get(Z)||null,me(V,q,xe,ze,null);Ul(V,xe)}return null}function De(q,V,Z,xe){for(var ze=null,He=null,je=V,qe=V=0,rn=null;je!==null&&qe<Z.length;qe++){je.index>qe?(rn=je,je=null):rn=je.sibling;var lt=pe(q,je,Z[qe],xe);if(lt===null){je===null&&(je=rn);break}n&&je&&lt.alternate===null&&r(q,je),V=y(lt,V,qe),He===null?ze=lt:He.sibling=lt,He=lt,je=rn}if(qe===Z.length)return l(q,je),Tt&&os(q,qe),ze;if(je===null){for(;qe<Z.length;qe++)je=_e(q,Z[qe],xe),je!==null&&(V=y(je,V,qe),He===null?ze=je:He.sibling=je,He=je);return Tt&&os(q,qe),ze}for(je=f(q,je);qe<Z.length;qe++)rn=Ae(je,q,qe,Z[qe],xe),rn!==null&&(n&&rn.alternate!==null&&je.delete(rn.key===null?qe:rn.key),V=y(rn,V,qe),He===null?ze=rn:He.sibling=rn,He=rn);return n&&je.forEach(function(kr){return r(q,kr)}),Tt&&os(q,qe),ze}function ke(q,V,Z,xe){var ze=ie(Z);if(typeof ze!="function")throw Error(t(150));if(Z=ze.call(Z),Z==null)throw Error(t(151));for(var He=ze=null,je=V,qe=V=0,rn=null,lt=Z.next();je!==null&&!lt.done;qe++,lt=Z.next()){je.index>qe?(rn=je,je=null):rn=je.sibling;var kr=pe(q,je,lt.value,xe);if(kr===null){je===null&&(je=rn);break}n&&je&&kr.alternate===null&&r(q,je),V=y(kr,V,qe),He===null?ze=kr:He.sibling=kr,He=kr,je=rn}if(lt.done)return l(q,je),Tt&&os(q,qe),ze;if(je===null){for(;!lt.done;qe++,lt=Z.next())lt=_e(q,lt.value,xe),lt!==null&&(V=y(lt,V,qe),He===null?ze=lt:He.sibling=lt,He=lt);return Tt&&os(q,qe),ze}for(je=f(q,je);!lt.done;qe++,lt=Z.next())lt=Ae(je,q,qe,lt.value,xe),lt!==null&&(n&&lt.alternate!==null&&je.delete(lt.key===null?qe:lt.key),V=y(lt,V,qe),He===null?ze=lt:He.sibling=lt,He=lt);return n&&je.forEach(function(Ry){return r(q,Ry)}),Tt&&os(q,qe),ze}function zt(q,V,Z,xe){if(typeof Z=="object"&&Z!==null&&Z.type===D&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case A:e:{for(var ze=Z.key,He=V;He!==null;){if(He.key===ze){if(ze=Z.type,ze===D){if(He.tag===7){l(q,He.sibling),V=m(He,Z.props.children),V.return=q,q=V;break e}}else if(He.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===oe&&Bp(ze)===He.type){l(q,He.sibling),V=m(He,Z.props),V.ref=_a(q,He,Z),V.return=q,q=V;break e}l(q,He);break}else r(q,He);He=He.sibling}Z.type===D?(V=ps(Z.props.children,q.mode,xe,Z.key),V.return=q,q=V):(xe=uu(Z.type,Z.key,Z.props,null,q.mode,xe),xe.ref=_a(q,V,Z),xe.return=q,q=xe)}return b(q);case k:e:{for(He=Z.key;V!==null;){if(V.key===He)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){l(q,V.sibling),V=m(V,Z.children||[]),V.return=q,q=V;break e}else{l(q,V);break}else r(q,V);V=V.sibling}V=Bf(Z,q.mode,xe),V.return=q,q=V}return b(q);case oe:return He=Z._init,zt(q,V,He(Z._payload),xe)}if(dn(Z))return De(q,V,Z,xe);if(ie(Z))return ke(q,V,Z,xe);Ul(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,V!==null&&V.tag===6?(l(q,V.sibling),V=m(V,Z),V.return=q,q=V):(l(q,V),V=Uf(Z,q.mode,xe),V.return=q,q=V),b(q)):l(q,V)}return zt}var eo=Gp(!0),Vp=Gp(!1),Bl=wr(null),Gl=null,to=null,Yc=null;function $c(){Yc=to=Gl=null}function Kc(n){var r=Bl.current;Mt(Bl),n._currentValue=r}function Zc(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function no(n,r){Gl=n,Yc=to=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(On=!0),n.firstContext=null)}function hi(n){var r=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:r,next:null},to===null){if(Gl===null)throw Error(t(308));to=n,Gl.dependencies={lanes:0,firstContext:n}}else to=to.next=n;return r}var as=null;function Qc(n){as===null?as=[n]:as.push(n)}function Wp(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,Qc(r)):(l.next=m.next,m.next=l),r.interleaved=l,er(n,f)}function er(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var br=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function tr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Cr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(at&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,er(n,l)}return m=f.interleaved,m===null?(r.next=r,Qc(f)):(r.next=m.next,m.next=r),f.interleaved=r,er(n,l)}function Vl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,hc(n,l)}}function jp(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=b:y=y.next=b,l=l.next}while(l!==null);y===null?m=y=r:y=y.next=r}else m=y=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Wl(n,r,l,f){var m=n.updateQueue;br=!1;var y=m.firstBaseUpdate,b=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var U=z,ee=U.next;U.next=null,b===null?y=ee:b.next=ee,b=U;var me=n.alternate;me!==null&&(me=me.updateQueue,z=me.lastBaseUpdate,z!==b&&(z===null?me.firstBaseUpdate=ee:z.next=ee,me.lastBaseUpdate=U))}if(y!==null){var _e=m.baseState;b=0,me=ee=U=null,z=y;do{var pe=z.lane,Ae=z.eventTime;if((f&pe)===pe){me!==null&&(me=me.next={eventTime:Ae,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var De=n,ke=z;switch(pe=r,Ae=l,ke.tag){case 1:if(De=ke.payload,typeof De=="function"){_e=De.call(Ae,_e,pe);break e}_e=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=ke.payload,pe=typeof De=="function"?De.call(Ae,_e,pe):De,pe==null)break e;_e=Y({},_e,pe);break e;case 2:br=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,pe=m.effects,pe===null?m.effects=[z]:pe.push(z))}else Ae={eventTime:Ae,lane:pe,tag:z.tag,payload:z.payload,callback:z.callback,next:null},me===null?(ee=me=Ae,U=_e):me=me.next=Ae,b|=pe;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;pe=z,z=pe.next,pe.next=null,m.lastBaseUpdate=pe,m.shared.pending=null}}while(!0);if(me===null&&(U=_e),m.baseState=U,m.firstBaseUpdate=ee,m.lastBaseUpdate=me,r=m.shared.interleaved,r!==null){m=r;do b|=m.lane,m=m.next;while(m!==r)}else y===null&&(m.shared.lanes=0);cs|=b,n.lanes=b,n.memoizedState=_e}}function Xp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var va={},Fi=wr(va),xa=wr(va),ya=wr(va);function ls(n){if(n===va)throw Error(t(174));return n}function ef(n,r){switch(gt(ya,r),gt(xa,n),gt(Fi,va),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Pe(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Pe(r,n)}Mt(Fi),gt(Fi,r)}function io(){Mt(Fi),Mt(xa),Mt(ya)}function qp(n){ls(ya.current);var r=ls(Fi.current),l=Pe(r,n.type);r!==l&&(gt(xa,n),gt(Fi,l))}function tf(n){xa.current===n&&(Mt(Fi),Mt(xa))}var Ct=wr(0);function Hl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var nf=[];function rf(){for(var n=0;n<nf.length;n++)nf[n]._workInProgressVersionPrimary=null;nf.length=0}var jl=E.ReactCurrentDispatcher,sf=E.ReactCurrentBatchConfig,us=0,Pt=null,qt=null,tn=null,Xl=!1,Sa=!1,Ma=0,Jx=0;function gn(){throw Error(t(321))}function of(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ei(n[l],r[l]))return!1;return!0}function af(n,r,l,f,m,y){if(us=y,Pt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,jl.current=n===null||n.memoizedState===null?iy:ry,n=l(f,m),Sa){y=0;do{if(Sa=!1,Ma=0,25<=y)throw Error(t(301));y+=1,tn=qt=null,r.updateQueue=null,jl.current=sy,n=l(f,m)}while(Sa)}if(jl.current=$l,r=qt!==null&&qt.next!==null,us=0,tn=qt=Pt=null,Xl=!1,r)throw Error(t(300));return n}function lf(){var n=Ma!==0;return Ma=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Pt.memoizedState=tn=n:tn=tn.next=n,tn}function pi(){if(qt===null){var n=Pt.alternate;n=n!==null?n.memoizedState:null}else n=qt.next;var r=tn===null?Pt.memoizedState:tn.next;if(r!==null)tn=r,qt=n;else{if(n===null)throw Error(t(310));qt=n,n={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},tn===null?Pt.memoizedState=tn=n:tn=tn.next=n}return tn}function wa(n,r){return typeof r=="function"?r(n):r}function uf(n){var r=pi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=qt,m=f.baseQueue,y=l.pending;if(y!==null){if(m!==null){var b=m.next;m.next=y.next,y.next=b}f.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,f=f.baseState;var z=b=null,U=null,ee=y;do{var me=ee.lane;if((us&me)===me)U!==null&&(U=U.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),f=ee.hasEagerState?ee.eagerState:n(f,ee.action);else{var _e={lane:me,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};U===null?(z=U=_e,b=f):U=U.next=_e,Pt.lanes|=me,cs|=me}ee=ee.next}while(ee!==null&&ee!==y);U===null?b=f:U.next=z,Ei(f,r.memoizedState)||(On=!0),r.memoizedState=f,r.baseState=b,r.baseQueue=U,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do y=m.lane,Pt.lanes|=y,cs|=y,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function cf(n){var r=pi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,y=r.memoizedState;if(m!==null){l.pending=null;var b=m=m.next;do y=n(y,b.action),b=b.next;while(b!==m);Ei(y,r.memoizedState)||(On=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),l.lastRenderedState=y}return[y,f]}function Yp(){}function $p(n,r){var l=Pt,f=pi(),m=r(),y=!Ei(f.memoizedState,m);if(y&&(f.memoizedState=m,On=!0),f=f.queue,ff(Qp.bind(null,l,f,n),[n]),f.getSnapshot!==r||y||tn!==null&&tn.memoizedState.tag&1){if(l.flags|=2048,Ta(9,Zp.bind(null,l,f,m,r),void 0,null),nn===null)throw Error(t(349));(us&30)!==0||Kp(l,r,m)}return m}function Kp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Pt.updateQueue,r===null?(r={lastEffect:null,stores:null},Pt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Zp(n,r,l,f){r.value=l,r.getSnapshot=f,Jp(r)&&em(n)}function Qp(n,r,l){return l(function(){Jp(r)&&em(n)})}function Jp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ei(n,l)}catch{return!0}}function em(n){var r=er(n,1);r!==null&&Li(r,n,1,-1)}function tm(n){var r=Ui();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},r.queue=n,n=n.dispatch=ny.bind(null,Pt,n),[r.memoizedState,n]}function Ta(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Pt.updateQueue,r===null?(r={lastEffect:null,stores:null},Pt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function nm(){return pi().memoizedState}function ql(n,r,l,f){var m=Ui();Pt.flags|=n,m.memoizedState=Ta(1|r,l,void 0,f===void 0?null:f)}function Yl(n,r,l,f){var m=pi();f=f===void 0?null:f;var y=void 0;if(qt!==null){var b=qt.memoizedState;if(y=b.destroy,f!==null&&of(f,b.deps)){m.memoizedState=Ta(r,l,y,f);return}}Pt.flags|=n,m.memoizedState=Ta(1|r,l,y,f)}function im(n,r){return ql(8390656,8,n,r)}function ff(n,r){return Yl(2048,8,n,r)}function rm(n,r){return Yl(4,2,n,r)}function sm(n,r){return Yl(4,4,n,r)}function om(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function am(n,r,l){return l=l!=null?l.concat([n]):null,Yl(4,4,om.bind(null,r,n),l)}function df(){}function lm(n,r){var l=pi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&of(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function um(n,r){var l=pi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&of(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function cm(n,r,l){return(us&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=l):(Ei(l,r)||(l=Bh(),Pt.lanes|=l,cs|=l,n.baseState=!0),r)}function ey(n,r){var l=ut;ut=l!==0&&4>l?l:4,n(!0);var f=sf.transition;sf.transition={};try{n(!1),r()}finally{ut=l,sf.transition=f}}function fm(){return pi().memoizedState}function ty(n,r,l){var f=Rr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},dm(n))hm(r,l);else if(l=Wp(n,r,l,f),l!==null){var m=En();Li(l,n,f,m),pm(l,r,f)}}function ny(n,r,l){var f=Rr(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(dm(n))hm(r,m);else{var y=n.alternate;if(n.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var b=r.lastRenderedState,z=y(b,l);if(m.hasEagerState=!0,m.eagerState=z,Ei(z,b)){var U=r.interleaved;U===null?(m.next=m,Qc(r)):(m.next=U.next,U.next=m),r.interleaved=m;return}}catch{}finally{}l=Wp(n,r,m,f),l!==null&&(m=En(),Li(l,n,f,m),pm(l,r,f))}}function dm(n){var r=n.alternate;return n===Pt||r!==null&&r===Pt}function hm(n,r){Sa=Xl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function pm(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,hc(n,l)}}var $l={readContext:hi,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},iy={readContext:hi,useCallback:function(n,r){return Ui().memoizedState=[n,r===void 0?null:r],n},useContext:hi,useEffect:im,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,ql(4194308,4,om.bind(null,r,n),l)},useLayoutEffect:function(n,r){return ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return ql(4,2,n,r)},useMemo:function(n,r){var l=Ui();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Ui();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=ty.bind(null,Pt,n),[f.memoizedState,n]},useRef:function(n){var r=Ui();return n={current:n},r.memoizedState=n},useState:tm,useDebugValue:df,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=tm(!1),r=n[0];return n=ey.bind(null,n[1]),Ui().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Pt,m=Ui();if(Tt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),nn===null)throw Error(t(349));(us&30)!==0||Kp(f,r,l)}m.memoizedState=l;var y={value:l,getSnapshot:r};return m.queue=y,im(Qp.bind(null,f,y,n),[n]),f.flags|=2048,Ta(9,Zp.bind(null,f,y,l,r),void 0,null),l},useId:function(){var n=Ui(),r=nn.identifierPrefix;if(Tt){var l=Ji,f=Qi;l=(f&~(1<<32-yt(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Ma++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Jx++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},ry={readContext:hi,useCallback:lm,useContext:hi,useEffect:ff,useImperativeHandle:am,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:uf,useRef:nm,useState:function(){return uf(wa)},useDebugValue:df,useDeferredValue:function(n){var r=pi();return cm(r,qt.memoizedState,n)},useTransition:function(){var n=uf(wa)[0],r=pi().memoizedState;return[n,r]},useMutableSource:Yp,useSyncExternalStore:$p,useId:fm,unstable_isNewReconciler:!1},sy={readContext:hi,useCallback:lm,useContext:hi,useEffect:ff,useImperativeHandle:am,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:cf,useRef:nm,useState:function(){return cf(wa)},useDebugValue:df,useDeferredValue:function(n){var r=pi();return qt===null?r.memoizedState=n:cm(r,qt.memoizedState,n)},useTransition:function(){var n=cf(wa)[0],r=pi().memoizedState;return[n,r]},useMutableSource:Yp,useSyncExternalStore:$p,useId:fm,unstable_isNewReconciler:!1};function Ci(n,r){if(n&&n.defaultProps){r=Y({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function hf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:Y({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Kl={isMounted:function(n){return(n=n._reactInternals)?Ye(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=En(),m=Rr(n),y=tr(f,m);y.payload=r,l!=null&&(y.callback=l),r=Cr(n,y,m),r!==null&&(Li(r,n,m,f),Vl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=En(),m=Rr(n),y=tr(f,m);y.tag=1,y.payload=r,l!=null&&(y.callback=l),r=Cr(n,y,m),r!==null&&(Li(r,n,m,f),Vl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=En(),f=Rr(n),m=tr(l,f);m.tag=2,r!=null&&(m.callback=r),r=Cr(n,m,f),r!==null&&(Li(r,n,f,l),Vl(r,n,f))}};function mm(n,r,l,f,m,y,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,y,b):r.prototype&&r.prototype.isPureReactComponent?!ca(l,f)||!ca(m,y):!0}function gm(n,r,l){var f=!1,m=Tr,y=r.contextType;return typeof y=="object"&&y!==null?y=hi(y):(m=Nn(r)?rs:mn.current,f=r.contextTypes,y=(f=f!=null)?Ks(n,m):Tr),r=new r(l,y),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Kl,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=y),r}function _m(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&Kl.enqueueReplaceState(r,r.state,null)}function pf(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Jc(n);var y=r.contextType;typeof y=="object"&&y!==null?m.context=hi(y):(y=Nn(r)?rs:mn.current,m.context=Ks(n,y)),m.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(hf(n,r,y,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Kl.enqueueReplaceState(m,m.state,null),Wl(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,r){try{var l="",f=r;do l+=W(f),f=f.return;while(f);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:n,source:r,stack:m,digest:null}}function mf(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function gf(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var oy=typeof WeakMap=="function"?WeakMap:Map;function vm(n,r,l){l=tr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){iu||(iu=!0,Rf=f),gf(n,r)},l}function xm(n,r,l){l=tr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){gf(n,r)}}var y=n.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){gf(n,r),typeof f!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),l}function ym(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new oy;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=yy.bind(null,n,r,l),r.then(n,n))}function Sm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Mm(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=tr(-1,1),r.tag=2,Cr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var ay=E.ReactCurrentOwner,On=!1;function Tn(n,r,l,f){r.child=n===null?Vp(r,null,l,f):eo(r,n.child,l,f)}function wm(n,r,l,f,m){l=l.render;var y=r.ref;return no(r,m),f=af(n,r,l,f,y,m),l=lf(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,nr(n,r,m)):(Tt&&l&&Wc(r),r.flags|=1,Tn(n,r,f,m),r.child)}function Tm(n,r,l,f,m){if(n===null){var y=l.type;return typeof y=="function"&&!Ff(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=y,Em(n,r,y,f,m)):(n=uu(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(y=n.child,(n.lanes&m)===0){var b=y.memoizedProps;if(l=l.compare,l=l!==null?l:ca,l(b,f)&&n.ref===r.ref)return nr(n,r,m)}return r.flags|=1,n=Ir(y,f),n.ref=r.ref,n.return=r,r.child=n}function Em(n,r,l,f,m){if(n!==null){var y=n.memoizedProps;if(ca(y,f)&&n.ref===r.ref)if(On=!1,r.pendingProps=f=y,(n.lanes&m)!==0)(n.flags&131072)!==0&&(On=!0);else return r.lanes=n.lanes,nr(n,r,m)}return _f(n,r,l,f,m)}function bm(n,r,l){var f=r.pendingProps,m=f.children,y=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(oo,Kn),Kn|=l;else{if((l&1073741824)===0)return n=y!==null?y.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,gt(oo,Kn),Kn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,gt(oo,Kn),Kn|=f}else y!==null?(f=y.baseLanes|l,r.memoizedState=null):f=l,gt(oo,Kn),Kn|=f;return Tn(n,r,m,l),r.child}function Cm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function _f(n,r,l,f,m){var y=Nn(l)?rs:mn.current;return y=Ks(r,y),no(r,m),l=af(n,r,l,f,y,m),f=lf(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,nr(n,r,m)):(Tt&&f&&Wc(r),r.flags|=1,Tn(n,r,l,m),r.child)}function Pm(n,r,l,f,m){if(Nn(l)){var y=!0;kl(r)}else y=!1;if(no(r,m),r.stateNode===null)Ql(n,r),gm(r,l,f),pf(r,l,f,m),f=!0;else if(n===null){var b=r.stateNode,z=r.memoizedProps;b.props=z;var U=b.context,ee=l.contextType;typeof ee=="object"&&ee!==null?ee=hi(ee):(ee=Nn(l)?rs:mn.current,ee=Ks(r,ee));var me=l.getDerivedStateFromProps,_e=typeof me=="function"||typeof b.getSnapshotBeforeUpdate=="function";_e||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==f||U!==ee)&&_m(r,b,f,ee),br=!1;var pe=r.memoizedState;b.state=pe,Wl(r,f,b,m),U=r.memoizedState,z!==f||pe!==U||kn.current||br?(typeof me=="function"&&(hf(r,l,me,f),U=r.memoizedState),(z=br||mm(r,l,z,f,pe,U,ee))?(_e||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=U),b.props=f,b.state=U,b.context=ee,f=z):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{b=r.stateNode,Hp(n,r),z=r.memoizedProps,ee=r.type===r.elementType?z:Ci(r.type,z),b.props=ee,_e=r.pendingProps,pe=b.context,U=l.contextType,typeof U=="object"&&U!==null?U=hi(U):(U=Nn(l)?rs:mn.current,U=Ks(r,U));var Ae=l.getDerivedStateFromProps;(me=typeof Ae=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==_e||pe!==U)&&_m(r,b,f,U),br=!1,pe=r.memoizedState,b.state=pe,Wl(r,f,b,m);var De=r.memoizedState;z!==_e||pe!==De||kn.current||br?(typeof Ae=="function"&&(hf(r,l,Ae,f),De=r.memoizedState),(ee=br||mm(r,l,ee,f,pe,De,U)||!1)?(me||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(f,De,U),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(f,De,U)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||z===n.memoizedProps&&pe===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&pe===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=De),b.props=f,b.state=De,b.context=U,f=ee):(typeof b.componentDidUpdate!="function"||z===n.memoizedProps&&pe===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&pe===n.memoizedState||(r.flags|=1024),f=!1)}return vf(n,r,l,f,y,m)}function vf(n,r,l,f,m,y){Cm(n,r);var b=(r.flags&128)!==0;if(!f&&!b)return m&&Ip(r,l,!1),nr(n,r,y);f=r.stateNode,ay.current=r;var z=b&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&b?(r.child=eo(r,n.child,null,y),r.child=eo(r,null,z,y)):Tn(n,r,z,y),r.memoizedState=f.state,m&&Ip(r,l,!0),r.child}function Am(n){var r=n.stateNode;r.pendingContext?Rp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Rp(n,r.context,!1),ef(n,r.containerInfo)}function Lm(n,r,l,f,m){return Js(),qc(m),r.flags|=256,Tn(n,r,l,f),r.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function yf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Rm(n,r,l){var f=r.pendingProps,m=Ct.current,y=!1,b=(r.flags&128)!==0,z;if((z=b)||(z=n!==null&&n.memoizedState===null?!1:(m&2)!==0),z?(y=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),gt(Ct,m&1),n===null)return Xc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=f.children,n=f.fallback,y?(f=r.mode,y=r.child,b={mode:"hidden",children:b},(f&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=b):y=cu(b,f,0,null),n=ps(n,f,l,null),y.return=r,n.return=r,y.sibling=n,r.child=y,r.child.memoizedState=yf(l),r.memoizedState=xf,n):Sf(r,b));if(m=n.memoizedState,m!==null&&(z=m.dehydrated,z!==null))return ly(n,r,b,f,z,m,l);if(y){y=f.fallback,b=r.mode,m=n.child,z=m.sibling;var U={mode:"hidden",children:f.children};return(b&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=U,r.deletions=null):(f=Ir(m,U),f.subtreeFlags=m.subtreeFlags&14680064),z!==null?y=Ir(z,y):(y=ps(y,b,l,null),y.flags|=2),y.return=r,f.return=r,f.sibling=y,r.child=f,f=y,y=r.child,b=n.child.memoizedState,b=b===null?yf(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},y.memoizedState=b,y.childLanes=n.childLanes&~l,r.memoizedState=xf,f}return y=n.child,n=y.sibling,f=Ir(y,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Sf(n,r){return r=cu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Zl(n,r,l,f){return f!==null&&qc(f),eo(r,n.child,null,l),n=Sf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function ly(n,r,l,f,m,y,b){if(l)return r.flags&256?(r.flags&=-257,f=mf(Error(t(422))),Zl(n,r,b,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(y=f.fallback,m=r.mode,f=cu({mode:"visible",children:f.children},m,0,null),y=ps(y,m,b,null),y.flags|=2,f.return=r,y.return=r,f.sibling=y,r.child=f,(r.mode&1)!==0&&eo(r,n.child,null,b),r.child.memoizedState=yf(b),r.memoizedState=xf,y);if((r.mode&1)===0)return Zl(n,r,b,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var z=f.dgst;return f=z,y=Error(t(419)),f=mf(y,f,void 0),Zl(n,r,b,f)}if(z=(b&n.childLanes)!==0,On||z){if(f=nn,f!==null){switch(b&-b){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|b))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,er(n,m),Li(f,n,m,-1))}return zf(),f=mf(Error(t(421))),Zl(n,r,b,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=Sy.bind(null,n),m._reactRetry=r,null):(n=y.treeContext,$n=Mr(m.nextSibling),Yn=r,Tt=!0,bi=null,n!==null&&(fi[di++]=Qi,fi[di++]=Ji,fi[di++]=ss,Qi=n.id,Ji=n.overflow,ss=r),r=Sf(r,f.children),r.flags|=4096,r)}function Dm(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Zc(n.return,r,l)}function Mf(n,r,l,f,m){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=m)}function Im(n,r,l){var f=r.pendingProps,m=f.revealOrder,y=f.tail;if(Tn(n,r,f.children,l),f=Ct.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dm(n,l,r);else if(n.tag===19)Dm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(gt(Ct,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&Hl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Mf(r,!1,m,l,y);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&Hl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Mf(r,!0,l,null,y);break;case"together":Mf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ql(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function nr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),cs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Ir(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Ir(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function uy(n,r,l){switch(r.tag){case 3:Am(r),Js();break;case 5:qp(r);break;case 1:Nn(r.type)&&kl(r);break;case 4:ef(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;gt(Bl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(gt(Ct,Ct.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Rm(n,r,l):(gt(Ct,Ct.current&1),n=nr(n,r,l),n!==null?n.sibling:null);gt(Ct,Ct.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return Im(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),gt(Ct,Ct.current),f)break;return null;case 22:case 23:return r.lanes=0,bm(n,r,l)}return nr(n,r,l)}var km,wf,Nm,Om;km=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},wf=function(){},Nm=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,ls(Fi.current);var y=null;switch(l){case"input":m=jt(n,m),f=jt(n,f),y=[];break;case"select":m=Y({},m,{value:void 0}),f=Y({},f,{value:void 0}),y=[];break;case"textarea":m=N(n,m),f=N(n,f),y=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Rl)}it(l,f);var b;l=null;for(ee in m)if(!f.hasOwnProperty(ee)&&m.hasOwnProperty(ee)&&m[ee]!=null)if(ee==="style"){var z=m[ee];for(b in z)z.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(s.hasOwnProperty(ee)?y||(y=[]):(y=y||[]).push(ee,null));for(ee in f){var U=f[ee];if(z=m?.[ee],f.hasOwnProperty(ee)&&U!==z&&(U!=null||z!=null))if(ee==="style")if(z){for(b in z)!z.hasOwnProperty(b)||U&&U.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in U)U.hasOwnProperty(b)&&z[b]!==U[b]&&(l||(l={}),l[b]=U[b])}else l||(y||(y=[]),y.push(ee,l)),l=U;else ee==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,z=z?z.__html:void 0,U!=null&&z!==U&&(y=y||[]).push(ee,U)):ee==="children"?typeof U!="string"&&typeof U!="number"||(y=y||[]).push(ee,""+U):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(s.hasOwnProperty(ee)?(U!=null&&ee==="onScroll"&&St("scroll",n),y||z===U||(y=[])):(y=y||[]).push(ee,U))}l&&(y=y||[]).push("style",l);var ee=y;(r.updateQueue=ee)&&(r.flags|=4)}},Om=function(n,r,l,f){l!==f&&(r.flags|=4)};function Ea(n,r){if(!Tt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function _n(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function cy(n,r,l){var f=r.pendingProps;switch(Hc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(r),null;case 1:return Nn(r.type)&&Il(),_n(r),null;case 3:return f=r.stateNode,io(),Mt(kn),Mt(mn),rf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(Fl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,bi!==null&&(kf(bi),bi=null))),wf(n,r),_n(r),null;case 5:tf(r);var m=ls(ya.current);if(l=r.type,n!==null&&r.stateNode!=null)Nm(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return _n(r),null}if(n=ls(Fi.current),Fl(r)){f=r.stateNode,l=r.type;var y=r.memoizedProps;switch(f[zi]=r,f[ma]=y,n=(r.mode&1)!==0,l){case"dialog":St("cancel",f),St("close",f);break;case"iframe":case"object":case"embed":St("load",f);break;case"video":case"audio":for(m=0;m<da.length;m++)St(da[m],f);break;case"source":St("error",f);break;case"img":case"image":case"link":St("error",f),St("load",f);break;case"details":St("toggle",f);break;case"input":In(f,y),St("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},St("invalid",f);break;case"textarea":R(f,y),St("invalid",f)}it(l,y),m=null;for(var b in y)if(y.hasOwnProperty(b)){var z=y[b];b==="children"?typeof z=="string"?f.textContent!==z&&(y.suppressHydrationWarning!==!0&&Ll(f.textContent,z,n),m=["children",z]):typeof z=="number"&&f.textContent!==""+z&&(y.suppressHydrationWarning!==!0&&Ll(f.textContent,z,n),m=["children",""+z]):s.hasOwnProperty(b)&&z!=null&&b==="onScroll"&&St("scroll",f)}switch(l){case"input":Ke(f),vt(f,y,!0);break;case"textarea":Ke(f),we(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=Rl)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{b=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ee(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=b.createElement(l,{is:f.is}):(n=b.createElement(l),l==="select"&&(b=n,f.multiple?b.multiple=!0:f.size&&(b.size=f.size))):n=b.createElementNS(n,l),n[zi]=r,n[ma]=f,km(n,r,!1,!1),r.stateNode=n;e:{switch(b=ht(l,f),l){case"dialog":St("cancel",n),St("close",n),m=f;break;case"iframe":case"object":case"embed":St("load",n),m=f;break;case"video":case"audio":for(m=0;m<da.length;m++)St(da[m],n);m=f;break;case"source":St("error",n),m=f;break;case"img":case"image":case"link":St("error",n),St("load",n),m=f;break;case"details":St("toggle",n),m=f;break;case"input":In(n,f),m=jt(n,f),St("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=Y({},f,{value:void 0}),St("invalid",n);break;case"textarea":R(n,f),m=N(n,f),St("invalid",n);break;default:m=f}it(l,m),z=m;for(y in z)if(z.hasOwnProperty(y)){var U=z[y];y==="style"?We(n,U):y==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&Le(n,U)):y==="children"?typeof U=="string"?(l!=="textarea"||U!=="")&&he(n,U):typeof U=="number"&&he(n,""+U):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?U!=null&&y==="onScroll"&&St("scroll",n):U!=null&&w(n,y,U,b))}switch(l){case"input":Ke(n),vt(n,f,!1);break;case"textarea":Ke(n),we(n);break;case"option":f.value!=null&&n.setAttribute("value",""+ye(f.value));break;case"select":n.multiple=!!f.multiple,y=f.value,y!=null?Qt(n,!!f.multiple,y,!1):f.defaultValue!=null&&Qt(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Rl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _n(r),null;case 6:if(n&&r.stateNode!=null)Om(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=ls(ya.current),ls(Fi.current),Fl(r)){if(f=r.stateNode,l=r.memoizedProps,f[zi]=r,(y=f.nodeValue!==l)&&(n=Yn,n!==null))switch(n.tag){case 3:Ll(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ll(f.nodeValue,l,(n.mode&1)!==0)}y&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[zi]=r,r.stateNode=f}return _n(r),null;case 13:if(Mt(Ct),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Tt&&$n!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Up(),Js(),r.flags|=98560,y=!1;else if(y=Fl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!y)throw Error(t(318));if(y=r.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[zi]=r}else Js(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;_n(r),y=!1}else bi!==null&&(kf(bi),bi=null),y=!0;if(!y)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ct.current&1)!==0?Yt===0&&(Yt=3):zf())),r.updateQueue!==null&&(r.flags|=4),_n(r),null);case 4:return io(),wf(n,r),n===null&&ha(r.stateNode.containerInfo),_n(r),null;case 10:return Kc(r.type._context),_n(r),null;case 17:return Nn(r.type)&&Il(),_n(r),null;case 19:if(Mt(Ct),y=r.memoizedState,y===null)return _n(r),null;if(f=(r.flags&128)!==0,b=y.rendering,b===null)if(f)Ea(y,!1);else{if(Yt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(b=Hl(n),b!==null){for(r.flags|=128,Ea(y,!1),f=b.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)y=l,n=f,y.flags&=14680066,b=y.alternate,b===null?(y.childLanes=0,y.lanes=n,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=b.childLanes,y.lanes=b.lanes,y.child=b.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=b.memoizedProps,y.memoizedState=b.memoizedState,y.updateQueue=b.updateQueue,y.type=b.type,n=b.dependencies,y.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return gt(Ct,Ct.current&1|2),r.child}n=n.sibling}y.tail!==null&&Ue()>ao&&(r.flags|=128,f=!0,Ea(y,!1),r.lanes=4194304)}else{if(!f)if(n=Hl(b),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Ea(y,!0),y.tail===null&&y.tailMode==="hidden"&&!b.alternate&&!Tt)return _n(r),null}else 2*Ue()-y.renderingStartTime>ao&&l!==1073741824&&(r.flags|=128,f=!0,Ea(y,!1),r.lanes=4194304);y.isBackwards?(b.sibling=r.child,r.child=b):(l=y.last,l!==null?l.sibling=b:r.child=b,y.last=b)}return y.tail!==null?(r=y.tail,y.rendering=r,y.tail=r.sibling,y.renderingStartTime=Ue(),r.sibling=null,l=Ct.current,gt(Ct,f?l&1|2:l&1),r):(_n(r),null);case 22:case 23:return Of(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(Kn&1073741824)!==0&&(_n(r),r.subtreeFlags&6&&(r.flags|=8192)):_n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function fy(n,r){switch(Hc(r),r.tag){case 1:return Nn(r.type)&&Il(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return io(),Mt(kn),Mt(mn),rf(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return tf(r),null;case 13:if(Mt(Ct),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Js()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Mt(Ct),null;case 4:return io(),null;case 10:return Kc(r.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var Jl=!1,vn=!1,dy=typeof WeakSet=="function"?WeakSet:Set,Re=null;function so(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){kt(n,r,f)}else l.current=null}function Tf(n,r,l){try{l()}catch(f){kt(n,r,f)}}var zm=!1;function hy(n,r){if(Nc=xl,n=mp(),Cc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var b=0,z=-1,U=-1,ee=0,me=0,_e=n,pe=null;t:for(;;){for(var Ae;_e!==l||m!==0&&_e.nodeType!==3||(z=b+m),_e!==y||f!==0&&_e.nodeType!==3||(U=b+f),_e.nodeType===3&&(b+=_e.nodeValue.length),(Ae=_e.firstChild)!==null;)pe=_e,_e=Ae;for(;;){if(_e===n)break t;if(pe===l&&++ee===m&&(z=b),pe===y&&++me===f&&(U=b),(Ae=_e.nextSibling)!==null)break;_e=pe,pe=_e.parentNode}_e=Ae}l=z===-1||U===-1?null:{start:z,end:U}}else l=null}l=l||{start:0,end:0}}else l=null;for(Oc={focusedElem:n,selectionRange:l},xl=!1,Re=r;Re!==null;)if(r=Re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Re=n;else for(;Re!==null;){r=Re;try{var De=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(De!==null){var ke=De.memoizedProps,zt=De.memoizedState,q=r.stateNode,V=q.getSnapshotBeforeUpdate(r.elementType===r.type?ke:Ci(r.type,ke),zt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(xe){kt(r,r.return,xe)}if(n=r.sibling,n!==null){n.return=r.return,Re=n;break}Re=r.return}return De=zm,zm=!1,De}function ba(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var y=m.destroy;m.destroy=void 0,y!==void 0&&Tf(r,l,y)}m=m.next}while(m!==f)}}function eu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Ef(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Fm(n){var r=n.alternate;r!==null&&(n.alternate=null,Fm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[zi],delete r[ma],delete r[Bc],delete r[$x],delete r[Kx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Um(n){return n.tag===5||n.tag===3||n.tag===4}function Bm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Rl));else if(f!==4&&(n=n.child,n!==null))for(bf(n,r,l),n=n.sibling;n!==null;)bf(n,r,l),n=n.sibling}function Cf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Cf(n,r,l),n=n.sibling;n!==null;)Cf(n,r,l),n=n.sibling}var ln=null,Pi=!1;function Pr(n,r,l){for(l=l.child;l!==null;)Gm(n,r,l),l=l.sibling}function Gm(n,r,l){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ut,l)}catch{}switch(l.tag){case 5:vn||so(l,r);case 6:var f=ln,m=Pi;ln=null,Pr(n,r,l),ln=f,Pi=m,ln!==null&&(Pi?(n=ln,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):ln.removeChild(l.stateNode));break;case 18:ln!==null&&(Pi?(n=ln,l=l.stateNode,n.nodeType===8?Uc(n.parentNode,l):n.nodeType===1&&Uc(n,l),ra(n)):Uc(ln,l.stateNode));break;case 4:f=ln,m=Pi,ln=l.stateNode.containerInfo,Pi=!0,Pr(n,r,l),ln=f,Pi=m;break;case 0:case 11:case 14:case 15:if(!vn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var y=m,b=y.destroy;y=y.tag,b!==void 0&&((y&2)!==0||(y&4)!==0)&&Tf(l,r,b),m=m.next}while(m!==f)}Pr(n,r,l);break;case 1:if(!vn&&(so(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(z){kt(l,r,z)}Pr(n,r,l);break;case 21:Pr(n,r,l);break;case 22:l.mode&1?(vn=(f=vn)||l.memoizedState!==null,Pr(n,r,l),vn=f):Pr(n,r,l);break;default:Pr(n,r,l)}}function Vm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new dy),r.forEach(function(f){var m=My.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Ai(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var y=n,b=r,z=b;e:for(;z!==null;){switch(z.tag){case 5:ln=z.stateNode,Pi=!1;break e;case 3:ln=z.stateNode.containerInfo,Pi=!0;break e;case 4:ln=z.stateNode.containerInfo,Pi=!0;break e}z=z.return}if(ln===null)throw Error(t(160));Gm(y,b,m),ln=null,Pi=!1;var U=m.alternate;U!==null&&(U.return=null),m.return=null}catch(ee){kt(m,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Wm(r,n),r=r.sibling}function Wm(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ai(r,n),Bi(n),f&4){try{ba(3,n,n.return),eu(3,n)}catch(ke){kt(n,n.return,ke)}try{ba(5,n,n.return)}catch(ke){kt(n,n.return,ke)}}break;case 1:Ai(r,n),Bi(n),f&512&&l!==null&&so(l,l.return);break;case 5:if(Ai(r,n),Bi(n),f&512&&l!==null&&so(l,l.return),n.flags&32){var m=n.stateNode;try{he(m,"")}catch(ke){kt(n,n.return,ke)}}if(f&4&&(m=n.stateNode,m!=null)){var y=n.memoizedProps,b=l!==null?l.memoizedProps:y,z=n.type,U=n.updateQueue;if(n.updateQueue=null,U!==null)try{z==="input"&&y.type==="radio"&&y.name!=null&&an(m,y),ht(z,b);var ee=ht(z,y);for(b=0;b<U.length;b+=2){var me=U[b],_e=U[b+1];me==="style"?We(m,_e):me==="dangerouslySetInnerHTML"?Le(m,_e):me==="children"?he(m,_e):w(m,me,_e,ee)}switch(z){case"input":Xt(m,y);break;case"textarea":fe(m,y);break;case"select":var pe=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var Ae=y.value;Ae!=null?Qt(m,!!y.multiple,Ae,!1):pe!==!!y.multiple&&(y.defaultValue!=null?Qt(m,!!y.multiple,y.defaultValue,!0):Qt(m,!!y.multiple,y.multiple?[]:"",!1))}m[ma]=y}catch(ke){kt(n,n.return,ke)}}break;case 6:if(Ai(r,n),Bi(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,y=n.memoizedProps;try{m.nodeValue=y}catch(ke){kt(n,n.return,ke)}}break;case 3:if(Ai(r,n),Bi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ra(r.containerInfo)}catch(ke){kt(n,n.return,ke)}break;case 4:Ai(r,n),Bi(n);break;case 13:Ai(r,n),Bi(n),m=n.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(Lf=Ue())),f&4&&Vm(n);break;case 22:if(me=l!==null&&l.memoizedState!==null,n.mode&1?(vn=(ee=vn)||me,Ai(r,n),vn=ee):Ai(r,n),Bi(n),f&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!me&&(n.mode&1)!==0)for(Re=n,me=n.child;me!==null;){for(_e=Re=me;Re!==null;){switch(pe=Re,Ae=pe.child,pe.tag){case 0:case 11:case 14:case 15:ba(4,pe,pe.return);break;case 1:so(pe,pe.return);var De=pe.stateNode;if(typeof De.componentWillUnmount=="function"){f=pe,l=pe.return;try{r=f,De.props=r.memoizedProps,De.state=r.memoizedState,De.componentWillUnmount()}catch(ke){kt(f,l,ke)}}break;case 5:so(pe,pe.return);break;case 22:if(pe.memoizedState!==null){Xm(_e);continue}}Ae!==null?(Ae.return=pe,Re=Ae):Xm(_e)}me=me.sibling}e:for(me=null,_e=n;;){if(_e.tag===5){if(me===null){me=_e;try{m=_e.stateNode,ee?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(z=_e.stateNode,U=_e.memoizedProps.style,b=U!=null&&U.hasOwnProperty("display")?U.display:null,z.style.display=Xe("display",b))}catch(ke){kt(n,n.return,ke)}}}else if(_e.tag===6){if(me===null)try{_e.stateNode.nodeValue=ee?"":_e.memoizedProps}catch(ke){kt(n,n.return,ke)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===n)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===n)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===n)break e;me===_e&&(me=null),_e=_e.return}me===_e&&(me=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Ai(r,n),Bi(n),f&4&&Vm(n);break;case 21:break;default:Ai(r,n),Bi(n)}}function Bi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Um(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(he(m,""),f.flags&=-33);var y=Bm(n);Cf(n,y,m);break;case 3:case 4:var b=f.stateNode.containerInfo,z=Bm(n);bf(n,z,b);break;default:throw Error(t(161))}}catch(U){kt(n,n.return,U)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function py(n,r,l){Re=n,Hm(n)}function Hm(n,r,l){for(var f=(n.mode&1)!==0;Re!==null;){var m=Re,y=m.child;if(m.tag===22&&f){var b=m.memoizedState!==null||Jl;if(!b){var z=m.alternate,U=z!==null&&z.memoizedState!==null||vn;z=Jl;var ee=vn;if(Jl=b,(vn=U)&&!ee)for(Re=m;Re!==null;)b=Re,U=b.child,b.tag===22&&b.memoizedState!==null?qm(m):U!==null?(U.return=b,Re=U):qm(m);for(;y!==null;)Re=y,Hm(y),y=y.sibling;Re=m,Jl=z,vn=ee}jm(n)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,Re=y):jm(n)}}function jm(n){for(;Re!==null;){var r=Re;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:vn||eu(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!vn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Ci(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=r.updateQueue;y!==null&&Xp(r,y,f);break;case 3:var b=r.updateQueue;if(b!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Xp(r,b,l)}break;case 5:var z=r.stateNode;if(l===null&&r.flags&4){l=z;var U=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&l.focus();break;case"img":U.src&&(l.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var me=ee.memoizedState;if(me!==null){var _e=me.dehydrated;_e!==null&&ra(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||r.flags&512&&Ef(r)}catch(pe){kt(r,r.return,pe)}}if(r===n){Re=null;break}if(l=r.sibling,l!==null){l.return=r.return,Re=l;break}Re=r.return}}function Xm(n){for(;Re!==null;){var r=Re;if(r===n){Re=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Re=l;break}Re=r.return}}function qm(n){for(;Re!==null;){var r=Re;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{eu(4,r)}catch(U){kt(r,l,U)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(U){kt(r,m,U)}}var y=r.return;try{Ef(r)}catch(U){kt(r,y,U)}break;case 5:var b=r.return;try{Ef(r)}catch(U){kt(r,b,U)}}}catch(U){kt(r,r.return,U)}if(r===n){Re=null;break}var z=r.sibling;if(z!==null){z.return=r.return,Re=z;break}Re=r.return}}var my=Math.ceil,tu=E.ReactCurrentDispatcher,Pf=E.ReactCurrentOwner,mi=E.ReactCurrentBatchConfig,at=0,nn=null,Bt=null,un=0,Kn=0,oo=wr(0),Yt=0,Ca=null,cs=0,nu=0,Af=0,Pa=null,zn=null,Lf=0,ao=1/0,ir=null,iu=!1,Rf=null,Ar=null,ru=!1,Lr=null,su=0,Aa=0,Df=null,ou=-1,au=0;function En(){return(at&6)!==0?Ue():ou!==-1?ou:ou=Ue()}function Rr(n){return(n.mode&1)===0?1:(at&2)!==0&&un!==0?un&-un:Qx.transition!==null?(au===0&&(au=Bh()),au):(n=ut,n!==0||(n=window.event,n=n===void 0?16:$h(n.type)),n)}function Li(n,r,l,f){if(50<Aa)throw Aa=0,Df=null,Error(t(185));Jo(n,l,f),((at&2)===0||n!==nn)&&(n===nn&&((at&2)===0&&(nu|=l),Yt===4&&Dr(n,un)),Fn(n,f),l===1&&at===0&&(r.mode&1)===0&&(ao=Ue()+500,Nl&&Er()))}function Fn(n,r){var l=n.callbackNode;Qv(n,r);var f=gl(n,n===nn?un:0);if(f===0)l!==null&&ci(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&ci(l),r===1)n.tag===0?Zx($m.bind(null,n)):kp($m.bind(null,n)),qx(function(){(at&6)===0&&Er()}),l=null;else{switch(Gh(f)){case 1:l=It;break;case 4:l=Oi;break;case 16:l=ts;break;case 536870912:l=Bs;break;default:l=ts}l=ig(l,Ym.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Ym(n,r){if(ou=-1,au=0,(at&6)!==0)throw Error(t(327));var l=n.callbackNode;if(lo()&&n.callbackNode!==l)return null;var f=gl(n,n===nn?un:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=lu(n,f);else{r=f;var m=at;at|=2;var y=Zm();(nn!==n||un!==r)&&(ir=null,ao=Ue()+500,ds(n,r));do try{vy();break}catch(z){Km(n,z)}while(!0);$c(),tu.current=y,at=m,Bt!==null?r=0:(nn=null,un=0,r=Yt)}if(r!==0){if(r===2&&(m=fc(n),m!==0&&(f=m,r=If(n,m))),r===1)throw l=Ca,ds(n,0),Dr(n,f),Fn(n,Ue()),l;if(r===6)Dr(n,f);else{if(m=n.current.alternate,(f&30)===0&&!gy(m)&&(r=lu(n,f),r===2&&(y=fc(n),y!==0&&(f=y,r=If(n,y))),r===1))throw l=Ca,ds(n,0),Dr(n,f),Fn(n,Ue()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:hs(n,zn,ir);break;case 3:if(Dr(n,f),(f&130023424)===f&&(r=Lf+500-Ue(),10<r)){if(gl(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){En(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Fc(hs.bind(null,n,zn,ir),r);break}hs(n,zn,ir);break;case 4:if(Dr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var b=31-yt(f);y=1<<b,b=r[b],b>m&&(m=b),f&=~y}if(f=m,f=Ue()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*my(f/1960))-f,10<f){n.timeoutHandle=Fc(hs.bind(null,n,zn,ir),f);break}hs(n,zn,ir);break;case 5:hs(n,zn,ir);break;default:throw Error(t(329))}}}return Fn(n,Ue()),n.callbackNode===l?Ym.bind(null,n):null}function If(n,r){var l=Pa;return n.current.memoizedState.isDehydrated&&(ds(n,r).flags|=256),n=lu(n,r),n!==2&&(r=zn,zn=l,r!==null&&kf(r)),n}function kf(n){zn===null?zn=n:zn.push.apply(zn,n)}function gy(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],y=m.getSnapshot;m=m.value;try{if(!Ei(y(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Dr(n,r){for(r&=~Af,r&=~nu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-yt(r),f=1<<l;n[l]=-1,r&=~f}}function $m(n){if((at&6)!==0)throw Error(t(327));lo();var r=gl(n,0);if((r&1)===0)return Fn(n,Ue()),null;var l=lu(n,r);if(n.tag!==0&&l===2){var f=fc(n);f!==0&&(r=f,l=If(n,f))}if(l===1)throw l=Ca,ds(n,0),Dr(n,r),Fn(n,Ue()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,hs(n,zn,ir),Fn(n,Ue()),null}function Nf(n,r){var l=at;at|=1;try{return n(r)}finally{at=l,at===0&&(ao=Ue()+500,Nl&&Er())}}function fs(n){Lr!==null&&Lr.tag===0&&(at&6)===0&&lo();var r=at;at|=1;var l=mi.transition,f=ut;try{if(mi.transition=null,ut=1,n)return n()}finally{ut=f,mi.transition=l,at=r,(at&6)===0&&Er()}}function Of(){Kn=oo.current,Mt(oo)}function ds(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Xx(l)),Bt!==null)for(l=Bt.return;l!==null;){var f=l;switch(Hc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Il();break;case 3:io(),Mt(kn),Mt(mn),rf();break;case 5:tf(f);break;case 4:io();break;case 13:Mt(Ct);break;case 19:Mt(Ct);break;case 10:Kc(f.type._context);break;case 22:case 23:Of()}l=l.return}if(nn=n,Bt=n=Ir(n.current,null),un=Kn=r,Yt=0,Ca=null,Af=nu=cs=0,zn=Pa=null,as!==null){for(r=0;r<as.length;r++)if(l=as[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,y=l.pending;if(y!==null){var b=y.next;y.next=m,f.next=b}l.pending=f}as=null}return n}function Km(n,r){do{var l=Bt;try{if($c(),jl.current=$l,Xl){for(var f=Pt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Xl=!1}if(us=0,tn=qt=Pt=null,Sa=!1,Ma=0,Pf.current=null,l===null||l.return===null){Yt=1,Ca=r,Bt=null;break}e:{var y=n,b=l.return,z=l,U=r;if(r=un,z.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var ee=U,me=z,_e=me.tag;if((me.mode&1)===0&&(_e===0||_e===11||_e===15)){var pe=me.alternate;pe?(me.updateQueue=pe.updateQueue,me.memoizedState=pe.memoizedState,me.lanes=pe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Ae=Sm(b);if(Ae!==null){Ae.flags&=-257,Mm(Ae,b,z,y,r),Ae.mode&1&&ym(y,ee,r),r=Ae,U=ee;var De=r.updateQueue;if(De===null){var ke=new Set;ke.add(U),r.updateQueue=ke}else De.add(U);break e}else{if((r&1)===0){ym(y,ee,r),zf();break e}U=Error(t(426))}}else if(Tt&&z.mode&1){var zt=Sm(b);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Mm(zt,b,z,y,r),qc(ro(U,z));break e}}y=U=ro(U,z),Yt!==4&&(Yt=2),Pa===null?Pa=[y]:Pa.push(y),y=b;do{switch(y.tag){case 3:y.flags|=65536,r&=-r,y.lanes|=r;var q=vm(y,U,r);jp(y,q);break e;case 1:z=U;var V=y.type,Z=y.stateNode;if((y.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(Ar===null||!Ar.has(Z)))){y.flags|=65536,r&=-r,y.lanes|=r;var xe=xm(y,z,r);jp(y,xe);break e}}y=y.return}while(y!==null)}Jm(l)}catch(ze){r=ze,Bt===l&&l!==null&&(Bt=l=l.return);continue}break}while(!0)}function Zm(){var n=tu.current;return tu.current=$l,n===null?$l:n}function zf(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),nn===null||(cs&268435455)===0&&(nu&268435455)===0||Dr(nn,un)}function lu(n,r){var l=at;at|=2;var f=Zm();(nn!==n||un!==r)&&(ir=null,ds(n,r));do try{_y();break}catch(m){Km(n,m)}while(!0);if($c(),at=l,tu.current=f,Bt!==null)throw Error(t(261));return nn=null,un=0,Yt}function _y(){for(;Bt!==null;)Qm(Bt)}function vy(){for(;Bt!==null&&!$i();)Qm(Bt)}function Qm(n){var r=ng(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,r===null?Jm(n):Bt=r,Pf.current=null}function Jm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=cy(l,r,Kn),l!==null){Bt=l;return}}else{if(l=fy(l,r),l!==null){l.flags&=32767,Bt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Yt=6,Bt=null;return}}if(r=r.sibling,r!==null){Bt=r;return}Bt=r=n}while(r!==null);Yt===0&&(Yt=5)}function hs(n,r,l){var f=ut,m=mi.transition;try{mi.transition=null,ut=1,xy(n,r,l,f)}finally{mi.transition=m,ut=f}return null}function xy(n,r,l,f){do lo();while(Lr!==null);if((at&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var y=l.lanes|l.childLanes;if(Jv(n,y),n===nn&&(Bt=nn=null,un=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ru||(ru=!0,ig(ts,function(){return lo(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=mi.transition,mi.transition=null;var b=ut;ut=1;var z=at;at|=4,Pf.current=null,hy(n,l),Wm(l,n),Ux(Oc),xl=!!Nc,Oc=Nc=null,n.current=l,py(l),Dt(),at=z,ut=b,mi.transition=y}else n.current=l;if(ru&&(ru=!1,Lr=n,su=m),y=n.pendingLanes,y===0&&(Ar=null),Ko(l.stateNode),Fn(n,Ue()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(iu)throw iu=!1,n=Rf,Rf=null,n;return(su&1)!==0&&n.tag!==0&&lo(),y=n.pendingLanes,(y&1)!==0?n===Df?Aa++:(Aa=0,Df=n):Aa=0,Er(),null}function lo(){if(Lr!==null){var n=Gh(su),r=mi.transition,l=ut;try{if(mi.transition=null,ut=16>n?16:n,Lr===null)var f=!1;else{if(n=Lr,Lr=null,su=0,(at&6)!==0)throw Error(t(331));var m=at;for(at|=4,Re=n.current;Re!==null;){var y=Re,b=y.child;if((Re.flags&16)!==0){var z=y.deletions;if(z!==null){for(var U=0;U<z.length;U++){var ee=z[U];for(Re=ee;Re!==null;){var me=Re;switch(me.tag){case 0:case 11:case 15:ba(8,me,y)}var _e=me.child;if(_e!==null)_e.return=me,Re=_e;else for(;Re!==null;){me=Re;var pe=me.sibling,Ae=me.return;if(Fm(me),me===ee){Re=null;break}if(pe!==null){pe.return=Ae,Re=pe;break}Re=Ae}}}var De=y.alternate;if(De!==null){var ke=De.child;if(ke!==null){De.child=null;do{var zt=ke.sibling;ke.sibling=null,ke=zt}while(ke!==null)}}Re=y}}if((y.subtreeFlags&2064)!==0&&b!==null)b.return=y,Re=b;else e:for(;Re!==null;){if(y=Re,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:ba(9,y,y.return)}var q=y.sibling;if(q!==null){q.return=y.return,Re=q;break e}Re=y.return}}var V=n.current;for(Re=V;Re!==null;){b=Re;var Z=b.child;if((b.subtreeFlags&2064)!==0&&Z!==null)Z.return=b,Re=Z;else e:for(b=V;Re!==null;){if(z=Re,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:eu(9,z)}}catch(ze){kt(z,z.return,ze)}if(z===b){Re=null;break e}var xe=z.sibling;if(xe!==null){xe.return=z.return,Re=xe;break e}Re=z.return}}if(at=m,Er(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ut,n)}catch{}f=!0}return f}finally{ut=l,mi.transition=r}}return!1}function eg(n,r,l){r=ro(l,r),r=vm(n,r,1),n=Cr(n,r,1),r=En(),n!==null&&(Jo(n,1,r),Fn(n,r))}function kt(n,r,l){if(n.tag===3)eg(n,n,l);else for(;r!==null;){if(r.tag===3){eg(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Ar===null||!Ar.has(f))){n=ro(l,n),n=xm(r,n,1),r=Cr(r,n,1),n=En(),r!==null&&(Jo(r,1,n),Fn(r,n));break}}r=r.return}}function yy(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=En(),n.pingedLanes|=n.suspendedLanes&l,nn===n&&(un&l)===l&&(Yt===4||Yt===3&&(un&130023424)===un&&500>Ue()-Lf?ds(n,0):Af|=l),Fn(n,r)}function tg(n,r){r===0&&((n.mode&1)===0?r=1:(r=ml,ml<<=1,(ml&130023424)===0&&(ml=4194304)));var l=En();n=er(n,r),n!==null&&(Jo(n,r,l),Fn(n,l))}function Sy(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),tg(n,l)}function My(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),tg(n,l)}var ng;ng=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||kn.current)On=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return On=!1,uy(n,r,l);On=(n.flags&131072)!==0}else On=!1,Tt&&(r.flags&1048576)!==0&&Np(r,zl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Ql(n,r),n=r.pendingProps;var m=Ks(r,mn.current);no(r,l),m=af(null,r,f,n,m,l);var y=lf();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Nn(f)?(y=!0,kl(r)):y=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Jc(r),m.updater=Kl,r.stateNode=m,m._reactInternals=r,pf(r,f,n,l),r=vf(null,r,f,!0,y,l)):(r.tag=0,Tt&&y&&Wc(r),Tn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(Ql(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=Ty(f),n=Ci(f,n),m){case 0:r=_f(null,r,f,n,l);break e;case 1:r=Pm(null,r,f,n,l);break e;case 11:r=wm(null,r,f,n,l);break e;case 14:r=Tm(null,r,f,Ci(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Ci(f,m),_f(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Ci(f,m),Pm(n,r,f,m,l);case 3:e:{if(Am(r),n===null)throw Error(t(387));f=r.pendingProps,y=r.memoizedState,m=y.element,Hp(n,r),Wl(r,f,null,l);var b=r.memoizedState;if(f=b.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){m=ro(Error(t(423)),r),r=Lm(n,r,f,l,m);break e}else if(f!==m){m=ro(Error(t(424)),r),r=Lm(n,r,f,l,m);break e}else for($n=Mr(r.stateNode.containerInfo.firstChild),Yn=r,Tt=!0,bi=null,l=Vp(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Js(),f===m){r=nr(n,r,l);break e}Tn(n,r,f,l)}r=r.child}return r;case 5:return qp(r),n===null&&Xc(r),f=r.type,m=r.pendingProps,y=n!==null?n.memoizedProps:null,b=m.children,zc(f,m)?b=null:y!==null&&zc(f,y)&&(r.flags|=32),Cm(n,r),Tn(n,r,b,l),r.child;case 6:return n===null&&Xc(r),null;case 13:return Rm(n,r,l);case 4:return ef(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=eo(r,null,f,l):Tn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Ci(f,m),wm(n,r,f,m,l);case 7:return Tn(n,r,r.pendingProps,l),r.child;case 8:return Tn(n,r,r.pendingProps.children,l),r.child;case 12:return Tn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,y=r.memoizedProps,b=m.value,gt(Bl,f._currentValue),f._currentValue=b,y!==null)if(Ei(y.value,b)){if(y.children===m.children&&!kn.current){r=nr(n,r,l);break e}}else for(y=r.child,y!==null&&(y.return=r);y!==null;){var z=y.dependencies;if(z!==null){b=y.child;for(var U=z.firstContext;U!==null;){if(U.context===f){if(y.tag===1){U=tr(-1,l&-l),U.tag=2;var ee=y.updateQueue;if(ee!==null){ee=ee.shared;var me=ee.pending;me===null?U.next=U:(U.next=me.next,me.next=U),ee.pending=U}}y.lanes|=l,U=y.alternate,U!==null&&(U.lanes|=l),Zc(y.return,l,r),z.lanes|=l;break}U=U.next}}else if(y.tag===10)b=y.type===r.type?null:y.child;else if(y.tag===18){if(b=y.return,b===null)throw Error(t(341));b.lanes|=l,z=b.alternate,z!==null&&(z.lanes|=l),Zc(b,l,r),b=y.sibling}else b=y.child;if(b!==null)b.return=y;else for(b=y;b!==null;){if(b===r){b=null;break}if(y=b.sibling,y!==null){y.return=b.return,b=y;break}b=b.return}y=b}Tn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,no(r,l),m=hi(m),f=f(m),r.flags|=1,Tn(n,r,f,l),r.child;case 14:return f=r.type,m=Ci(f,r.pendingProps),m=Ci(f.type,m),Tm(n,r,f,m,l);case 15:return Em(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Ci(f,m),Ql(n,r),r.tag=1,Nn(f)?(n=!0,kl(r)):n=!1,no(r,l),gm(r,f,m),pf(r,f,m,l),vf(null,r,f,!0,n,l);case 19:return Im(n,r,l);case 22:return bm(n,r,l)}throw Error(t(156,r.tag))};function ig(n,r){return pn(n,r)}function wy(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,r,l,f){return new wy(n,r,l,f)}function Ff(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ty(n){if(typeof n=="function")return Ff(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===te)return 14}return 2}function Ir(n,r){var l=n.alternate;return l===null?(l=gi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function uu(n,r,l,f,m,y){var b=2;if(f=n,typeof n=="function")Ff(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case D:return ps(l.children,m,y,r);case T:b=8,m|=8;break;case L:return n=gi(12,l,r,m|2),n.elementType=L,n.lanes=y,n;case X:return n=gi(13,l,r,m),n.elementType=X,n.lanes=y,n;case j:return n=gi(19,l,r,m),n.elementType=j,n.lanes=y,n;case le:return cu(l,m,y,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:b=10;break e;case re:b=9;break e;case ne:b=11;break e;case te:b=14;break e;case oe:b=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=gi(b,l,r,m),r.elementType=n,r.type=f,r.lanes=y,r}function ps(n,r,l,f){return n=gi(7,n,f,r),n.lanes=l,n}function cu(n,r,l,f){return n=gi(22,n,f,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function Uf(n,r,l){return n=gi(6,n,null,r),n.lanes=l,n}function Bf(n,r,l){return r=gi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Ey(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dc(0),this.expirationTimes=dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Gf(n,r,l,f,m,y,b,z,U){return n=new Ey(n,r,l,z,U),r===1?(r=1,y===!0&&(r|=8)):r=0,y=gi(3,null,null,r),n.current=y,y.stateNode=n,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(y),n}function by(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function rg(n){if(!n)return Tr;n=n._reactInternals;e:{if(Ye(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Nn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Nn(l))return Dp(n,l,r)}return r}function sg(n,r,l,f,m,y,b,z,U){return n=Gf(l,f,!0,n,m,y,b,z,U),n.context=rg(null),l=n.current,f=En(),m=Rr(l),y=tr(f,m),y.callback=r??null,Cr(l,y,m),n.current.lanes=m,Jo(n,m,f),Fn(n,f),n}function fu(n,r,l,f){var m=r.current,y=En(),b=Rr(m);return l=rg(l),r.context===null?r.context=l:r.pendingContext=l,r=tr(y,b),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Cr(m,r,b),n!==null&&(Li(n,m,b,y),Vl(n,m,b)),b}function du(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function og(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Vf(n,r){og(n,r),(n=n.alternate)&&og(n,r)}function Cy(){return null}var ag=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wf(n){this._internalRoot=n}hu.prototype.render=Wf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));fu(n,r,null,null)},hu.prototype.unmount=Wf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;fs(function(){fu(null,n,null,null)}),r[Ki]=null}};function hu(n){this._internalRoot=n}hu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Hh();n={blockedOn:null,target:n,priority:r};for(var l=0;l<xr.length&&r!==0&&r<xr[l].priority;l++);xr.splice(l,0,n),l===0&&qh(n)}};function Hf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lg(){}function Py(n,r,l,f,m){if(m){if(typeof f=="function"){var y=f;f=function(){var ee=du(b);y.call(ee)}}var b=sg(r,f,n,0,null,!1,!1,"",lg);return n._reactRootContainer=b,n[Ki]=b.current,ha(n.nodeType===8?n.parentNode:n),fs(),b}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var z=f;f=function(){var ee=du(U);z.call(ee)}}var U=Gf(n,0,!1,null,null,!1,!1,"",lg);return n._reactRootContainer=U,n[Ki]=U.current,ha(n.nodeType===8?n.parentNode:n),fs(function(){fu(r,U,l,f)}),U}function mu(n,r,l,f,m){var y=l._reactRootContainer;if(y){var b=y;if(typeof m=="function"){var z=m;m=function(){var U=du(b);z.call(U)}}fu(r,b,n,m)}else b=Py(l,r,n,m,f);return du(b)}Vh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Qo(r.pendingLanes);l!==0&&(hc(r,l|1),Fn(r,Ue()),(at&6)===0&&(ao=Ue()+500,Er()))}break;case 13:fs(function(){var f=er(n,1);if(f!==null){var m=En();Li(f,n,1,m)}}),Vf(n,1)}},pc=function(n){if(n.tag===13){var r=er(n,134217728);if(r!==null){var l=En();Li(r,n,134217728,l)}Vf(n,134217728)}},Wh=function(n){if(n.tag===13){var r=Rr(n),l=er(n,r);if(l!==null){var f=En();Li(l,n,r,f)}Vf(n,r)}},Hh=function(){return ut},jh=function(n,r){var l=ut;try{return ut=n,r()}finally{ut=l}},ue=function(n,r,l){switch(r){case"input":if(Xt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=Dl(f);if(!m)throw Error(t(90));Qe(f),Xt(f,m)}}}break;case"textarea":fe(n,l);break;case"select":r=l.value,r!=null&&Qt(n,!!l.multiple,r,!1)}},Jt=Nf,Xn=fs;var Ay={usingClientEntryPoint:!1,Events:[ga,Ys,Dl,ct,Ot,Nf]},La={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ly={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=tt(n),n===null?null:n.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||Cy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{Ut=gu.inject(Ly),en=gu}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay,Un.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(r))throw Error(t(200));return by(n,r,null,l)},Un.createRoot=function(n,r){if(!Hf(n))throw Error(t(299));var l=!1,f="",m=ag;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=Gf(n,1,!1,null,null,l,!1,f,m),n[Ki]=r.current,ha(n.nodeType===8?n.parentNode:n),new Wf(r)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=tt(r),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return fs(n)},Un.hydrate=function(n,r,l){if(!pu(r))throw Error(t(200));return mu(null,n,r,!0,l)},Un.hydrateRoot=function(n,r,l){if(!Hf(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,y="",b=ag;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),r=sg(r,null,n,1,l??null,m,!1,y,b),n[Ki]=r.current,ha(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new hu(r)},Un.render=function(n,r,l){if(!pu(r))throw Error(t(200));return mu(null,n,r,!1,l)},Un.unmountComponentAtNode=function(n){if(!pu(n))throw Error(t(40));return n._reactRootContainer?(fs(function(){mu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ki]=null})}),!0):!1},Un.unstable_batchedUpdates=Nf,Un.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!pu(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return mu(n,r,l,!1,f)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var gg;function d0(){if(gg)return qf.exports;gg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),qf.exports=Uy(),qf.exports}var _g;function By(){if(_g)return _u;_g=1;var a=d0();return _u.createRoot=a.createRoot,_u.hydrateRoot=a.hydrateRoot,_u}var Gy=By();const Vy=c0(Gy);d0();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},qa.apply(this,arguments)}var Ur;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Ur||(Ur={}));const vg="popstate";function Wy(a){a===void 0&&(a={});function e(s,o){let{pathname:u="/",search:c="",hash:d=""}=Os(s.location.hash.substr(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Fd("",{pathname:u,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){let u=s.document.querySelector("base"),c="";if(u&&u.getAttribute("href")){let d=s.location.href,h=d.indexOf("#");c=h===-1?d:d.slice(0,h)}return c+"#"+(typeof o=="string"?o:qu(o))}function i(s,o){fh(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return jy(e,t,i,a)}function Ht(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function fh(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hy(){return Math.random().toString(36).substr(2,8)}function xg(a,e){return{usr:a.state,key:a.key,idx:e}}function Fd(a,e,t,i){return t===void 0&&(t=null),qa({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:t,key:e&&e.key||i||Hy()})}function qu(a){let{pathname:e="/",search:t="",hash:i=""}=a;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Os(a){let e={};if(a){let t=a.indexOf("#");t>=0&&(e.hash=a.substr(t),a=a.substr(0,t));let i=a.indexOf("?");i>=0&&(e.search=a.substr(i),a=a.substr(0,i)),a&&(e.pathname=a)}return e}function jy(a,e,t,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:o=!1}=i,u=s.history,c=Ur.Pop,d=null,h=p();h==null&&(h=0,u.replaceState(qa({},u.state,{idx:h}),""));function p(){return(u.state||{idx:null}).idx}function g(){c=Ur.Pop;let x=p(),C=x==null?null:x-h;h=x,d&&d({action:c,location:v.location,delta:C})}function _(x,C){c=Ur.Push;let P=Fd(v.location,x,C);t&&t(P,x),h=p()+1;let w=xg(P,h),E=v.createHref(P);try{u.pushState(w,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;s.location.assign(E)}o&&d&&d({action:c,location:v.location,delta:1})}function S(x,C){c=Ur.Replace;let P=Fd(v.location,x,C);t&&t(P,x),h=p();let w=xg(P,h),E=v.createHref(P);u.replaceState(w,"",E),o&&d&&d({action:c,location:v.location,delta:0})}function M(x){let C=s.location.origin!=="null"?s.location.origin:s.location.href,P=typeof x=="string"?x:qu(x);return P=P.replace(/ $/,"%20"),Ht(C,"No window.location.(origin|href) available to create URL for href: "+P),new URL(P,C)}let v={get action(){return c},get location(){return a(s,u)},listen(x){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(vg,g),d=x,()=>{s.removeEventListener(vg,g),d=null}},createHref(x){return e(s,x)},createURL:M,encodeLocation(x){let C=M(x);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:_,replace:S,go(x){return u.go(x)}};return v}var yg;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(yg||(yg={}));function Xy(a,e,t){return t===void 0&&(t="/"),qy(a,e,t)}function qy(a,e,t,i){let s=typeof e=="string"?Os(e):e,o=dh(s.pathname||"/",t);if(o==null)return null;let u=h0(a);Yy(u);let c=null;for(let d=0;c==null&&d<u.length;++d){let h=oS(o);c=iS(u[d],h)}return c}function h0(a,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let s=(o,u,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};d.relativePath.startsWith("/")&&(Ht(d.relativePath.startsWith(i),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(i.length));let h=jr([i,d.relativePath]),p=t.concat(d);o.children&&o.children.length>0&&(Ht(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),h0(o.children,e,p,h)),!(o.path==null&&!o.index)&&e.push({path:h,score:tS(h,o.index),routesMeta:p})};return a.forEach((o,u)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))s(o,u);else for(let d of p0(o.path))s(o,u,d)}),e}function p0(a){let e=a.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return s?[o,""]:[o];let u=p0(i.join("/")),c=[];return c.push(...u.map(d=>d===""?o:[o,d].join("/"))),s&&c.push(...u),c.map(d=>a.startsWith("/")&&d===""?"/":d)}function Yy(a){a.sort((e,t)=>e.score!==t.score?t.score-e.score:nS(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const $y=/^:[\w-]+$/,Ky=3,Zy=2,Qy=1,Jy=10,eS=-2,Sg=a=>a==="*";function tS(a,e){let t=a.split("/"),i=t.length;return t.some(Sg)&&(i+=eS),e&&(i+=Zy),t.filter(s=>!Sg(s)).reduce((s,o)=>s+($y.test(o)?Ky:o===""?Qy:Jy),i)}function nS(a,e){return a.length===e.length&&a.slice(0,-1).every((i,s)=>i===e[s])?a[a.length-1]-e[e.length-1]:0}function iS(a,e,t){let{routesMeta:i}=a,s={},o="/",u=[];for(let c=0;c<i.length;++c){let d=i[c],h=c===i.length-1,p=o==="/"?e:e.slice(o.length)||"/",g=rS({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},p),_=d.route;if(!g)return null;Object.assign(s,g.params),u.push({params:s,pathname:jr([o,g.pathname]),pathnameBase:cS(jr([o,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(o=jr([o,g.pathnameBase]))}return u}function rS(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[t,i]=sS(a.path,a.caseSensitive,a.end),s=e.match(t);if(!s)return null;let o=s[0],u=o.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:i.reduce((h,p,g)=>{let{paramName:_,isOptional:S}=p;if(_==="*"){let v=c[g]||"";u=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const M=c[g];return S&&!M?h[_]=void 0:h[_]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:u,pattern:a}}function sS(a,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),fh(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let i=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,d)=>(i.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(i.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function oS(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fh(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),a}}function dh(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=a.charAt(t);return i&&i!=="/"?null:a.slice(t)||"/"}function aS(a,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:s=""}=typeof a=="string"?Os(a):a;return{pathname:t?t.startsWith("/")?t:lS(t,e):e,search:fS(i),hash:dS(s)}}function lS(a,e){let t=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Kf(a,e,t,i){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uS(a){return a.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function m0(a,e){let t=uS(a);return e?t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function g0(a,e,t,i){i===void 0&&(i=!1);let s;typeof a=="string"?s=Os(a):(s=qa({},a),Ht(!s.pathname||!s.pathname.includes("?"),Kf("?","pathname","search",s)),Ht(!s.pathname||!s.pathname.includes("#"),Kf("#","pathname","hash",s)),Ht(!s.search||!s.search.includes("#"),Kf("#","search","hash",s)));let o=a===""||s.pathname==="",u=o?"/":s.pathname,c;if(u==null)c=t;else{let g=e.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),g-=1;s.pathname=_.join("/")}c=g>=0?e[g]:"/"}let d=aS(s,c),h=u&&u!=="/"&&u.endsWith("/"),p=(o||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||p)&&(d.pathname+="/"),d}const jr=a=>a.join("/").replace(/\/\/+/g,"/"),cS=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),fS=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,dS=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function hS(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const _0=["post","put","patch","delete"];new Set(_0);const pS=["get",..._0];new Set(pS);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},Ya.apply(this,arguments)}const hh=Te.createContext(null),mS=Te.createContext(null),zs=Te.createContext(null),nc=Te.createContext(null),Fs=Te.createContext({outlet:null,matches:[],isDataRoute:!1}),v0=Te.createContext(null);function gS(a,e){let{relative:t}=e===void 0?{}:e;sl()||Ht(!1);let{basename:i,navigator:s}=Te.useContext(zs),{hash:o,pathname:u,search:c}=y0(a,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:jr([i,u])),s.createHref({pathname:d,search:c,hash:o})}function sl(){return Te.useContext(nc)!=null}function Ho(){return sl()||Ht(!1),Te.useContext(nc).location}function x0(a){Te.useContext(zs).static||Te.useLayoutEffect(a)}function _S(){let{isDataRoute:a}=Te.useContext(Fs);return a?LS():vS()}function vS(){sl()||Ht(!1);let a=Te.useContext(hh),{basename:e,future:t,navigator:i}=Te.useContext(zs),{matches:s}=Te.useContext(Fs),{pathname:o}=Ho(),u=JSON.stringify(m0(s,t.v7_relativeSplatPath)),c=Te.useRef(!1);return x0(()=>{c.current=!0}),Te.useCallback(function(h,p){if(p===void 0&&(p={}),!c.current)return;if(typeof h=="number"){i.go(h);return}let g=g0(h,JSON.parse(u),o,p.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:jr([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,o,a])}function y0(a,e){let{relative:t}=e===void 0?{}:e,{future:i}=Te.useContext(zs),{matches:s}=Te.useContext(Fs),{pathname:o}=Ho(),u=JSON.stringify(m0(s,i.v7_relativeSplatPath));return Te.useMemo(()=>g0(a,JSON.parse(u),o,t==="path"),[a,u,o,t])}function xS(a,e){return yS(a,e)}function yS(a,e,t,i){sl()||Ht(!1);let{navigator:s}=Te.useContext(zs),{matches:o}=Te.useContext(Fs),u=o[o.length-1],c=u?u.params:{};u&&u.pathname;let d=u?u.pathnameBase:"/";u&&u.route;let h=Ho(),p;if(e){var g;let x=typeof e=="string"?Os(e):e;d==="/"||(g=x.pathname)!=null&&g.startsWith(d)||Ht(!1),p=x}else p=h;let _=p.pathname||"/",S=_;if(d!=="/"){let x=d.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(x.length).join("/")}let M=Xy(a,{pathname:S}),v=ES(M&&M.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:jr([d,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?d:jr([d,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,t,i);return e&&v?Te.createElement(nc.Provider,{value:{location:Ya({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Ur.Pop}},v):v}function SS(){let a=AS(),e=hS(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),t=a instanceof Error?a.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Te.createElement(Te.Fragment,null,Te.createElement("h2",null,"Unexpected Application Error!"),Te.createElement("h3",{style:{fontStyle:"italic"}},e),t?Te.createElement("pre",{style:s},t):null,null)}const MS=Te.createElement(SS,null);class wS extends Te.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Te.createElement(Fs.Provider,{value:this.props.routeContext},Te.createElement(v0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function TS(a){let{routeContext:e,match:t,children:i}=a,s=Te.useContext(hh);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),Te.createElement(Fs.Provider,{value:e},i)}function ES(a,e,t,i){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),a==null){var o;if(!t)return null;if(t.errors)a=t.matches;else if((o=i)!=null&&o.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)a=t.matches;else return null}let u=a,c=(s=t)==null?void 0:s.errors;if(c!=null){let p=u.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);p>=0||Ht(!1),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,h=-1;if(t&&i&&i.v7_partialHydration)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:_,errors:S}=t,M=g.route.loader&&_[g.route.id]===void 0&&(!S||S[g.route.id]===void 0);if(g.route.lazy||M){d=!0,h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}return u.reduceRight((p,g,_)=>{let S,M=!1,v=null,x=null;t&&(S=c&&g.route.id?c[g.route.id]:void 0,v=g.route.errorElement||MS,d&&(h<0&&_===0?(RS("route-fallback"),M=!0,x=null):h===_&&(M=!0,x=g.route.hydrateFallbackElement||null)));let C=e.concat(u.slice(0,_+1)),P=()=>{let w;return S?w=v:M?w=x:g.route.Component?w=Te.createElement(g.route.Component,null):g.route.element?w=g.route.element:w=p,Te.createElement(TS,{match:g,routeContext:{outlet:p,matches:C,isDataRoute:t!=null},children:w})};return t&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?Te.createElement(wS,{location:t.location,revalidation:t.revalidation,component:v,error:S,children:P(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):P()},null)}var S0=(function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a})(S0||{}),M0=(function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a})(M0||{});function bS(a){let e=Te.useContext(hh);return e||Ht(!1),e}function CS(a){let e=Te.useContext(mS);return e||Ht(!1),e}function PS(a){let e=Te.useContext(Fs);return e||Ht(!1),e}function w0(a){let e=PS(),t=e.matches[e.matches.length-1];return t.route.id||Ht(!1),t.route.id}function AS(){var a;let e=Te.useContext(v0),t=CS(),i=w0();return e!==void 0?e:(a=t.errors)==null?void 0:a[i]}function LS(){let{router:a}=bS(S0.UseNavigateStable),e=w0(M0.UseNavigateStable),t=Te.useRef(!1);return x0(()=>{t.current=!0}),Te.useCallback(function(s,o){o===void 0&&(o={}),t.current&&(typeof s=="number"?a.navigate(s):a.navigate(s,Ya({fromRouteId:e},o)))},[a,e])}const Mg={};function RS(a,e,t){Mg[a]||(Mg[a]=!0)}function DS(a,e){a?.v7_startTransition,a?.v7_relativeSplatPath}function Vu(a){Ht(!1)}function IS(a){let{basename:e="/",children:t=null,location:i,navigationType:s=Ur.Pop,navigator:o,static:u=!1,future:c}=a;sl()&&Ht(!1);let d=e.replace(/^\/*/,"/"),h=Te.useMemo(()=>({basename:d,navigator:o,static:u,future:Ya({v7_relativeSplatPath:!1},c)}),[d,c,o,u]);typeof i=="string"&&(i=Os(i));let{pathname:p="/",search:g="",hash:_="",state:S=null,key:M="default"}=i,v=Te.useMemo(()=>{let x=dh(p,d);return x==null?null:{location:{pathname:x,search:g,hash:_,state:S,key:M},navigationType:s}},[d,p,g,_,S,M,s]);return v==null?null:Te.createElement(zs.Provider,{value:h},Te.createElement(nc.Provider,{children:t,value:v}))}function kS(a){let{children:e,location:t}=a;return xS(Ud(e),t)}new Promise(()=>{});function Ud(a,e){e===void 0&&(e=[]);let t=[];return Te.Children.forEach(a,(i,s)=>{if(!Te.isValidElement(i))return;let o=[...e,s];if(i.type===Te.Fragment){t.push.apply(t,Ud(i.props.children,o));return}i.type!==Vu&&Ht(!1),!i.props.index||!i.props.children||Ht(!1);let u={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Ud(i.props.children,o)),t.push(u)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bd(){return Bd=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},Bd.apply(this,arguments)}function NS(a,e){if(a==null)return{};var t={},i=Object.keys(a),s,o;for(o=0;o<i.length;o++)s=i[o],!(e.indexOf(s)>=0)&&(t[s]=a[s]);return t}function OS(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function zS(a,e){return a.button===0&&(!e||e==="_self")&&!OS(a)}const FS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],US="6";try{window.__reactRouterVersion=US}catch{}const BS="startTransition",wg=Oy[BS];function GS(a){let{basename:e,children:t,future:i,window:s}=a,o=Te.useRef();o.current==null&&(o.current=Wy({window:s,v5Compat:!0}));let u=o.current,[c,d]=Te.useState({action:u.action,location:u.location}),{v7_startTransition:h}=i||{},p=Te.useCallback(g=>{h&&wg?wg(()=>d(g)):d(g)},[d,h]);return Te.useLayoutEffect(()=>u.listen(p),[u,p]),Te.useEffect(()=>DS(i),[i]),Te.createElement(IS,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:u,future:i})}const VS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,An=Te.forwardRef(function(e,t){let{onClick:i,relative:s,reloadDocument:o,replace:u,state:c,target:d,to:h,preventScrollReset:p,viewTransition:g}=e,_=NS(e,FS),{basename:S}=Te.useContext(zs),M,v=!1;if(typeof h=="string"&&WS.test(h)&&(M=h,VS))try{let w=new URL(window.location.href),E=h.startsWith("//")?new URL(w.protocol+h):new URL(h),A=dh(E.pathname,S);E.origin===w.origin&&A!=null?h=A+E.search+E.hash:v=!0}catch{}let x=gS(h,{relative:s}),C=HS(h,{replace:u,state:c,target:d,preventScrollReset:p,relative:s,viewTransition:g});function P(w){i&&i(w),w.defaultPrevented||C(w)}return Te.createElement("a",Bd({},_,{href:M||x,onClick:v||o?i:P,ref:t,target:d}))});var Tg;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(Tg||(Tg={}));var Eg;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(Eg||(Eg={}));function HS(a,e){let{target:t,replace:i,state:s,preventScrollReset:o,relative:u,viewTransition:c}=e===void 0?{}:e,d=_S(),h=Ho(),p=y0(a,{relative:u});return Te.useCallback(g=>{if(zS(g,t)){g.preventDefault();let _=i!==void 0?i:qu(h)===qu(p);d(a,{replace:_,state:s,preventScrollReset:o,relative:u,viewTransition:c})}},[h,d,p,i,s,t,a,o,u,c])}const T0=Te.createContext(),ol=()=>{const a=Te.useContext(T0);if(!a)throw new Error("useLanguage must be used within a LanguageProvider");return a},jS=({children:a})=>{const[e,t]=Te.useState(()=>localStorage.getItem("nexorasim-language")||"en"),i=()=>{const o=e==="en"?"mm":"en";t(o),localStorage.setItem("nexorasim-language",o)},s=(o,u={})=>u[e]?u[e]:o;return Te.useEffect(()=>{document.documentElement.lang=e},[e]),$.jsx(T0.Provider,{value:{language:e,toggleLanguage:i,t:s},children:a})},E0=[{path:"/",component:"Home",title:"Home",category:"main"},{path:"/about",component:"GenericPage",title:"About Us",category:"main"},{path:"/mission",component:"GenericPage",title:"Our Mission",category:"main"},{path:"/vision",component:"GenericPage",title:"Our Vision",category:"main"},{path:"/network-architecture",component:"GenericPage",title:"Network Architecture",category:"main"},{path:"/esim-basics",component:"GenericPage",title:"eSIM Basics",category:"main"},{path:"/iot-overview",component:"GenericPage",title:"IoT Overview",category:"main"},{path:"/operator-mpt",component:"GenericPage",title:"MPT Integration",category:"main"},{path:"/operator-mytel",component:"GenericPage",title:"MYTEL Integration",category:"main"},{path:"/operator-atom",component:"GenericPage",title:"ATOM Integration",category:"main"},{path:"/operator-u9",component:"GenericPage",title:"U9 Integration",category:"main"},{path:"/features",component:"GenericPage",title:"Features",category:"main"},{path:"/solutions",component:"GenericPage",title:"Solutions",category:"main"},{path:"/enterprise",component:"GenericPage",title:"Enterprise",category:"main"},{path:"/developers",component:"GenericPage",title:"Developers",category:"main"},{path:"/pricing",component:"GenericPage",title:"Pricing",category:"main"},{path:"/contact",component:"GenericPage",title:"Contact",category:"main"},{path:"/faq",component:"GenericPage",title:"FAQ",category:"main"},{path:"/support",component:"GenericPage",title:"Support",category:"main"},{path:"/getting-started",component:"GenericPage",title:"Getting Started",category:"main"},{path:"/platform-overview",component:"GenericPage",title:"Platform Overview",category:"main"},{path:"/technology",component:"GenericPage",title:"Technology",category:"main"},{path:"/security",component:"GenericPage",title:"Security",category:"main"},{path:"/compliance",component:"GenericPage",title:"Compliance",category:"main"},{path:"/integration",component:"GenericPage",title:"Integration",category:"main"},{path:"/monitoring",component:"GenericPage",title:"Monitoring",category:"main"},{path:"/analytics",component:"GenericPage",title:"Analytics",category:"main"},{path:"/dashboard",component:"GenericPage",title:"Dashboard",category:"main"},{path:"/reports",component:"GenericPage",title:"Reports",category:"main"},{path:"/management",component:"GenericPage",title:"Management",category:"main"},{path:"/docs",component:"GenericPage",title:"Documentation",category:"docs"},{path:"/docs/api-overview",component:"GenericPage",title:"API Overview",category:"docs"},{path:"/docs/authentication",component:"GenericPage",title:"Authentication",category:"docs"},{path:"/docs/provisioning",component:"GenericPage",title:"Provisioning",category:"docs"},{path:"/docs/sdk-overview",component:"GenericPage",title:"SDK Overview",category:"docs"},{path:"/docs/sdk-ios",component:"GenericPage",title:"iOS SDK",category:"docs"},{path:"/docs/sdk-android",component:"GenericPage",title:"Android SDK",category:"docs"},{path:"/docs/sdk-linux",component:"GenericPage",title:"Linux SDK",category:"docs"},{path:"/docs/sdk-windows",component:"GenericPage",title:"Windows SDK",category:"docs"},{path:"/docs/error-codes",component:"GenericPage",title:"Error Codes",category:"docs"},{path:"/docs/testing-tools",component:"GenericPage",title:"Testing Tools",category:"docs"},{path:"/docs/best-practices",component:"GenericPage",title:"Best Practices",category:"docs"},{path:"/docs/webhooks",component:"GenericPage",title:"Webhooks",category:"docs"},{path:"/docs/rate-limits",component:"GenericPage",title:"Rate Limits",category:"docs"},{path:"/docs/migration",component:"GenericPage",title:"Migration Guide",category:"docs"},{path:"/docs/backup-restore",component:"GenericPage",title:"Backup & Restore",category:"docs"},{path:"/docs/security-config",component:"GenericPage",title:"Security Configuration",category:"docs"},{path:"/docs/performance",component:"GenericPage",title:"Performance Tuning",category:"docs"},{path:"/docs/monitoring-setup",component:"GenericPage",title:"Monitoring Setup",category:"docs"},{path:"/docs/troubleshooting",component:"GenericPage",title:"Troubleshooting",category:"docs"},{path:"/docs/debugging",component:"GenericPage",title:"Debugging",category:"docs"},{path:"/docs/logging",component:"GenericPage",title:"Logging",category:"docs"},{path:"/docs/deployment",component:"GenericPage",title:"Deployment",category:"docs"},{path:"/docs/configuration",component:"GenericPage",title:"Configuration",category:"docs"},{path:"/docs/database",component:"GenericPage",title:"Database Setup",category:"docs"},{path:"/docs/networking",component:"GenericPage",title:"Networking",category:"docs"},{path:"/docs/load-balancing",component:"GenericPage",title:"Load Balancing",category:"docs"},{path:"/docs/clustering",component:"GenericPage",title:"Clustering",category:"docs"},{path:"/docs/scaling",component:"GenericPage",title:"Scaling",category:"docs"},{path:"/docs/maintenance",component:"GenericPage",title:"Maintenance",category:"docs"},{path:"/docs/updates",component:"GenericPage",title:"Updates",category:"docs"},{path:"/docs/changelog",component:"GenericPage",title:"Changelog",category:"docs"},{path:"/docs/roadmap",component:"GenericPage",title:"Roadmap",category:"docs"},{path:"/docs/reference",component:"GenericPage",title:"API Reference",category:"docs"},{path:"/docs/examples",component:"GenericPage",title:"Code Examples",category:"docs"},{path:"/docs/tutorials",component:"GenericPage",title:"Tutorials",category:"docs"},{path:"/docs/quickstart",component:"GenericPage",title:"Quick Start",category:"docs"},{path:"/docs/advanced",component:"GenericPage",title:"Advanced Topics",category:"docs"},{path:"/docs/integration-guide",component:"GenericPage",title:"Integration Guide",category:"docs"},{path:"/docs/client-libraries",component:"GenericPage",title:"Client Libraries",category:"docs"},{path:"/company",component:"GenericPage",title:"Company",category:"corporate"},{path:"/careers",component:"GenericPage",title:"Careers",category:"corporate"},{path:"/leadership",component:"GenericPage",title:"Leadership",category:"corporate"},{path:"/partnerships",component:"GenericPage",title:"Partnerships",category:"corporate"},{path:"/news",component:"GenericPage",title:"News",category:"corporate"},{path:"/case-studies",component:"GenericPage",title:"Case Studies",category:"corporate"},{path:"/iot-trends",component:"GenericPage",title:"IoT Trends",category:"corporate"},{path:"/whitepapers",component:"GenericPage",title:"Whitepapers",category:"corporate"},{path:"/media",component:"GenericPage",title:"Media",category:"corporate"},{path:"/blog",component:"GenericPage",title:"Blog",category:"corporate"},{path:"/press-releases",component:"GenericPage",title:"Press Releases",category:"corporate"},{path:"/events",component:"GenericPage",title:"Events",category:"corporate"},{path:"/awards",component:"GenericPage",title:"Awards",category:"corporate"},{path:"/testimonials",component:"GenericPage",title:"Testimonials",category:"corporate"},{path:"/community",component:"GenericPage",title:"Community",category:"corporate"},{path:"/investors",component:"GenericPage",title:"Investors",category:"corporate"},{path:"/sustainability",component:"GenericPage",title:"Sustainability",category:"corporate"},{path:"/innovation",component:"GenericPage",title:"Innovation",category:"corporate"},{path:"/research",component:"GenericPage",title:"Research",category:"corporate"},{path:"/publications",component:"GenericPage",title:"Publications",category:"corporate"},{path:"/terms",component:"GenericPage",title:"Terms of Service",category:"legal"},{path:"/privacy",component:"GenericPage",title:"Privacy Policy",category:"legal"},{path:"/accessibility",component:"GenericPage",title:"Accessibility",category:"legal"},{path:"/sla",component:"GenericPage",title:"Service Level Agreement",category:"legal"},{path:"/compliance-center",component:"GenericPage",title:"Compliance Center",category:"legal"},{path:"/security-disclosure",component:"GenericPage",title:"Security Disclosure",category:"legal"},{path:"/feedback",component:"GenericPage",title:"Feedback",category:"legal"},{path:"/sitemap",component:"GenericPage",title:"Sitemap",category:"legal"},{path:"/gdpr",component:"GenericPage",title:"GDPR Compliance",category:"legal"},{path:"/cookies",component:"GenericPage",title:"Cookie Policy",category:"legal"}];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="150",XS=0,bg=1,qS=2,b0=1,YS=2,Ba=3,$r=0,ri=1,Br=2,Xr=0,Po=1,Cg=2,Pg=3,Ag=4,$S=5,To=100,KS=101,ZS=102,Lg=103,Rg=104,QS=200,JS=201,e1=202,t1=203,C0=204,P0=205,n1=206,i1=207,r1=208,s1=209,o1=210,a1=0,l1=1,u1=2,Gd=3,c1=4,f1=5,d1=6,h1=7,A0=0,p1=1,m1=2,hr=0,g1=1,_1=2,v1=3,x1=4,y1=5,L0=300,ko=301,No=302,Vd=303,Wd=304,ic=306,Hd=1e3,ki=1001,jd=1002,Pn=1003,Dg=1004,Zf=1005,xi=1006,S1=1007,$a=1008,Ds=1009,M1=1010,w1=1011,R0=1012,T1=1013,Ts=1014,Es=1015,Ka=1016,E1=1017,b1=1018,Ao=1020,C1=1021,Ni=1023,P1=1024,A1=1025,Cs=1026,Oo=1027,L1=1028,R1=1029,D1=1030,I1=1031,k1=1033,Qf=33776,Jf=33777,ed=33778,td=33779,Ig=35840,kg=35841,Ng=35842,Og=35843,N1=36196,zg=37492,Fg=37496,Ug=37808,Bg=37809,Gg=37810,Vg=37811,Wg=37812,Hg=37813,jg=37814,Xg=37815,qg=37816,Yg=37817,$g=37818,Kg=37819,Zg=37820,Qg=37821,nd=36492,O1=36283,Jg=36284,e_=36285,t_=36286,Is=3e3,wt=3001,z1=3200,F1=3201,U1=0,B1=1,Vi="srgb",Za="srgb-linear",D0="display-p3",id=7680,G1=519,n_=35044,i_="300 es",Xd=1035;class jo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,r_=180/Math.PI;function al(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[a&255]+xn[a>>8&255]+xn[a>>16&255]+xn[a>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function ti(a,e,t){return Math.max(e,Math.min(t,a))}function V1(a,e){return(a%e+e)%e}function sd(a,e,t){return(1-t)*a+t*e}function s_(a){return(a&a-1)===0&&a!==0}function W1(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function vu(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Zn(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*s+e.x,this.y=o*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rn{constructor(){Rn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,s,o,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=d,p[6]=i,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],p=i[4],g=i[7],_=i[2],S=i[5],M=i[8],v=s[0],x=s[3],C=s[6],P=s[1],w=s[4],E=s[7],A=s[2],k=s[5],D=s[8];return o[0]=u*v+c*P+d*A,o[3]=u*x+c*w+d*k,o[6]=u*C+c*E+d*D,o[1]=h*v+p*P+g*A,o[4]=h*x+p*w+g*k,o[7]=h*C+p*E+g*D,o[2]=_*v+S*P+M*A,o[5]=_*x+S*w+M*k,o[8]=_*C+S*E+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-i*o*p+i*c*d+s*o*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,_=c*d-p*o,S=h*o-u*d,M=t*g+i*_+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/M;return e[0]=g*v,e[1]=(s*h-p*i)*v,e[2]=(c*i-s*u)*v,e[3]=_*v,e[4]=(p*t-s*d)*v,e[5]=(s*o-c*t)*v,e[6]=S*v,e[7]=(i*d-h*t)*v,e[8]=(u*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,u,c){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(od.makeScale(e,t)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,t){return this.premultiply(od.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new Rn;function I0(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Yu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class ll{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,u,c){let d=i[s+0],h=i[s+1],p=i[s+2],g=i[s+3];const _=o[u+0],S=o[u+1],M=o[u+2],v=o[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=v;return}if(g!==v||d!==_||h!==S||p!==M){let x=1-c;const C=d*_+h*S+p*M+g*v,P=C>=0?1:-1,w=1-C*C;if(w>Number.EPSILON){const A=Math.sqrt(w),k=Math.atan2(A,C*P);x=Math.sin(x*k)/A,c=Math.sin(c*k)/A}const E=c*P;if(d=d*x+_*E,h=h*x+S*E,p=p*x+M*E,g=g*x+v*E,x===1-c){const A=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=A,h*=A,p*=A,g*=A}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,u){const c=i[s],d=i[s+1],h=i[s+2],p=i[s+3],g=o[u],_=o[u+1],S=o[u+2],M=o[u+3];return e[t]=c*M+p*g+d*S-h*_,e[t+1]=d*M+p*_+h*g-c*S,e[t+2]=h*M+p*S+c*_-d*g,e[t+3]=p*M-c*g-d*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),p=c(s/2),g=c(o/2),_=d(i/2),S=d(s/2),M=d(o/2);switch(u){case"XYZ":this._x=_*p*g+h*S*M,this._y=h*S*g-_*p*M,this._z=h*p*M+_*S*g,this._w=h*p*g-_*S*M;break;case"YXZ":this._x=_*p*g+h*S*M,this._y=h*S*g-_*p*M,this._z=h*p*M-_*S*g,this._w=h*p*g+_*S*M;break;case"ZXY":this._x=_*p*g-h*S*M,this._y=h*S*g+_*p*M,this._z=h*p*M+_*S*g,this._w=h*p*g-_*S*M;break;case"ZYX":this._x=_*p*g-h*S*M,this._y=h*S*g+_*p*M,this._z=h*p*M-_*S*g,this._w=h*p*g+_*S*M;break;case"YZX":this._x=_*p*g+h*S*M,this._y=h*S*g+_*p*M,this._z=h*p*M-_*S*g,this._w=h*p*g-_*S*M;break;case"XZY":this._x=_*p*g-h*S*M,this._y=h*S*g-_*p*M,this._z=h*p*M+_*S*g,this._w=h*p*g+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],_=i+c+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(p-d)*S,this._y=(o-h)*S,this._z=(u-s)*S}else if(i>c&&i>g){const S=2*Math.sqrt(1+i-c-g);this._w=(p-d)/S,this._x=.25*S,this._y=(s+u)/S,this._z=(o+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-i-g);this._w=(o-h)/S,this._x=(s+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+g-i-c);this._w=(u-s)/S,this._x=(o+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ti(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+u*c+s*h-o*d,this._y=s*p+u*d+o*c-i*h,this._z=o*p+u*h+i*d-s*c,this._w=u*p-i*c-s*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=o,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*i+t*this._x,this._y=S*s+t*this._y,this._z=S*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=u*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(o),i*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(o_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(o_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,u=e.y,c=e.z,d=e.w,h=d*t+u*s-c*i,p=d*i+c*t-o*s,g=d*s+o*i-u*t,_=-o*t-u*i-c*s;return this.x=h*d+_*-o+p*-c-g*-u,this.y=p*d+_*-u+g*-o-h*-c,this.z=g*d+_*-c+h*-u-p*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-o*c,this.y=o*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ti(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new Q,o_=new ll;function Lo(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ld(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const H1=new Rn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),j1=new Rn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Gr=new Q;function X1(a){return a.convertSRGBToLinear(),Gr.set(a.r,a.g,a.b).applyMatrix3(j1),a.setRGB(Gr.x,Gr.y,Gr.z)}function q1(a){return Gr.set(a.r,a.g,a.b).applyMatrix3(H1),a.setRGB(Gr.x,Gr.y,Gr.z).convertLinearToSRGB()}const Y1={[Za]:a=>a,[Vi]:a=>a.convertSRGBToLinear(),[D0]:X1},$1={[Za]:a=>a,[Vi]:a=>a.convertLinearToSRGB(),[D0]:q1},bn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Za},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const i=Y1[e],s=$1[t];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let uo;class k0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{uo===void 0&&(uo=Yu("canvas")),uo.width=e.width,uo.height=e.height;const i=uo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=uo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Lo(o[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Lo(t[i]/255)*255):t[i]=Lo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class N0{constructor(e=null){this.isSource=!0,this.uuid=al(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(ud(s[u].image)):o.push(ud(s[u]))}else o=ud(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function ud(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?k0.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K1=0;class si extends jo{constructor(e=si.DEFAULT_IMAGE,t=si.DEFAULT_MAPPING,i=ki,s=ki,o=xi,u=$a,c=Ni,d=Ds,h=si.DEFAULT_ANISOTROPY,p=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=al(),this.name="",this.source=new N0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=L0;si.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,i=0,s=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const d=e.elements,h=d[0],p=d[4],g=d[8],_=d[1],S=d[5],M=d[9],v=d[2],x=d[6],C=d[10];if(Math.abs(p-_)<.01&&Math.abs(g-v)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+v)<.1&&Math.abs(M+x)<.1&&Math.abs(h+S+C-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,E=(S+1)/2,A=(C+1)/2,k=(p+_)/4,D=(g+v)/4,T=(M+x)/4;return w>E&&w>A?w<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(w),s=k/i,o=D/i):E>A?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=k/s,o=T/s):A<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),i=D/o,s=T/o),this.set(i,s,o,t),this}let P=Math.sqrt((x-M)*(x-M)+(g-v)*(g-v)+(_-p)*(_-p));return Math.abs(P)<.001&&(P=1),this.x=(x-M)/P,this.y=(g-v)/P,this.z=(_-p)/P,this.w=Math.acos((h+S+C-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ks extends jo{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new si(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:xi,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new N0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class O0 extends si{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z1 extends si{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,o=-1/0,u=-1/0,c=-1/0;for(let d=0,h=e.length;d<h;d+=3){const p=e[d],g=e[d+1],_=e[d+2];p<t&&(t=p),g<i&&(i=g),_<s&&(s=_),p>o&&(o=p),g>u&&(u=g),_>c&&(c=_)}return this.min.set(t,i,s),this.max.set(o,u,c),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,o=-1/0,u=-1/0,c=-1/0;for(let d=0,h=e.count;d<h;d++){const p=e.getX(d),g=e.getY(d),_=e.getZ(d);p<t&&(t=p),g<i&&(i=g),_<s&&(s=_),p>o&&(o=p),g>u&&(u=g),_>c&&(c=_)}return this.min.set(t,i,s),this.max.set(o,u,c),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ms.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let u=0,c=o.count;u<c;u++)ms.fromBufferAttribute(o,u).applyMatrix4(e.matrixWorld),this.expandByPoint(ms)}else i.boundingBox===null&&i.computeBoundingBox(),cd.copy(i.boundingBox),cd.applyMatrix4(e.matrixWorld),this.union(cd);const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ms),ms.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),xu.subVectors(this.max,Da),co.subVectors(e.a,Da),fo.subVectors(e.b,Da),ho.subVectors(e.c,Da),Nr.subVectors(fo,co),Or.subVectors(ho,fo),gs.subVectors(co,ho);let t=[0,-Nr.z,Nr.y,0,-Or.z,Or.y,0,-gs.z,gs.y,Nr.z,0,-Nr.x,Or.z,0,-Or.x,gs.z,0,-gs.x,-Nr.y,Nr.x,0,-Or.y,Or.x,0,-gs.y,gs.x,0];return!fd(t,co,fo,ho,xu)||(t=[1,0,0,0,1,0,0,0,1],!fd(t,co,fo,ho,xu))?!1:(yu.crossVectors(Nr,Or),t=[yu.x,yu.y,yu.z],fd(t,co,fo,ho,xu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ms).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ms).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ms=new Q,cd=new ul,co=new Q,fo=new Q,ho=new Q,Nr=new Q,Or=new Q,gs=new Q,Da=new Q,xu=new Q,yu=new Q,_s=new Q;function fd(a,e,t,i,s){for(let o=0,u=a.length-3;o<=u;o+=3){_s.fromArray(a,o);const c=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),d=e.dot(_s),h=t.dot(_s),p=i.dot(_s);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const Q1=new ul,Ia=new Q,dd=new Q;class cl{constructor(e=new Q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Q1.setFromPoints(e).getCenter(i);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const t=Ia.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ia,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(dd)),this.expandByPoint(Ia.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new Q,hd=new Q,Su=new Q,zr=new Q,pd=new Q,Mu=new Q,md=new Q;class mh{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hd.copy(e).add(t).multiplyScalar(.5),Su.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(hd);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Su),c=zr.dot(this.direction),d=-zr.dot(Su),h=zr.lengthSq(),p=Math.abs(1-u*u);let g,_,S,M;if(p>0)if(g=u*d-c,_=u*c-d,M=o*p,g>=0)if(_>=-M)if(_<=M){const v=1/p;g*=v,_*=v,S=g*(g+u*_+2*c)+_*(u*g+_+2*d)+h}else _=o,g=Math.max(0,-(u*_+c)),S=-g*g+_*(_+2*d)+h;else _=-o,g=Math.max(0,-(u*_+c)),S=-g*g+_*(_+2*d)+h;else _<=-M?(g=Math.max(0,-(-u*o+c)),_=g>0?-o:Math.min(Math.max(-o,-d),o),S=-g*g+_*(_+2*d)+h):_<=M?(g=0,_=Math.min(Math.max(-o,-d),o),S=_*(_+2*d)+h):(g=Math.max(0,-(u*o+c)),_=g>0?o:Math.min(Math.max(-o,-d),o),S=-g*g+_*(_+2*d)+h);else _=u>0?-o:o,g=Math.max(0,-(u*_+c)),S=-g*g+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(hd).addScaledVector(Su,_),S}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const i=sr.dot(this.direction),s=sr.dot(sr)-i*i,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),p>=0?(o=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),i>u||o>s||((o>i||isNaN(i))&&(i=o),(u<s||isNaN(s))&&(s=u),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,i,s,o){pd.subVectors(t,e),Mu.subVectors(i,e),md.crossVectors(pd,Mu);let u=this.direction.dot(md),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;zr.subVectors(this.origin,e);const d=c*this.direction.dot(Mu.crossVectors(zr,Mu));if(d<0)return null;const h=c*this.direction.dot(pd.cross(zr));if(h<0||d+h>u)return null;const p=-c*zr.dot(md);return p<0?null:this.at(p/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,s,o,u,c,d,h,p,g,_,S,M,v,x){const C=this.elements;return C[0]=e,C[4]=t,C[8]=i,C[12]=s,C[1]=o,C[5]=u,C[9]=c,C[13]=d,C[2]=h,C[6]=p,C[10]=g,C[14]=_,C[3]=S,C[7]=M,C[11]=v,C[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/po.setFromMatrixColumn(e,0).length(),o=1/po.setFromMatrixColumn(e,1).length(),u=1/po.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=u*p,S=u*g,M=c*p,v=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=S+M*h,t[5]=_-v*h,t[9]=-c*d,t[2]=v-_*h,t[6]=M+S*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*p,S=d*g,M=h*p,v=h*g;t[0]=_+v*c,t[4]=M*c-S,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=S*c-M,t[6]=v+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*p,S=d*g,M=h*p,v=h*g;t[0]=_-v*c,t[4]=-u*g,t[8]=M+S*c,t[1]=S+M*c,t[5]=u*p,t[9]=v-_*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*p,S=u*g,M=c*p,v=c*g;t[0]=d*p,t[4]=M*h-S,t[8]=_*h+v,t[1]=d*g,t[5]=v*h+_,t[9]=S*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,S=u*h,M=c*d,v=c*h;t[0]=d*p,t[4]=v-_*g,t[8]=M*g+S,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*g+M,t[10]=_-v*g}else if(e.order==="XZY"){const _=u*d,S=u*h,M=c*d,v=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=_*g+v,t[5]=u*p,t[9]=S*g-M,t[2]=M*g-S,t[6]=c*p,t[10]=v*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J1,e,eM)}lookAt(e,t,i){const s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Fr.crossVectors(i,Qn),Fr.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Fr.crossVectors(i,Qn)),Fr.normalize(),wu.crossVectors(Qn,Fr),s[0]=Fr.x,s[4]=wu.x,s[8]=Qn.x,s[1]=Fr.y,s[5]=wu.y,s[9]=Qn.y,s[2]=Fr.z,s[6]=wu.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],p=i[1],g=i[5],_=i[9],S=i[13],M=i[2],v=i[6],x=i[10],C=i[14],P=i[3],w=i[7],E=i[11],A=i[15],k=s[0],D=s[4],T=s[8],L=s[12],B=s[1],re=s[5],ne=s[9],X=s[13],j=s[2],te=s[6],oe=s[10],le=s[14],G=s[3],ie=s[7],Y=s[11],F=s[15];return o[0]=u*k+c*B+d*j+h*G,o[4]=u*D+c*re+d*te+h*ie,o[8]=u*T+c*ne+d*oe+h*Y,o[12]=u*L+c*X+d*le+h*F,o[1]=p*k+g*B+_*j+S*G,o[5]=p*D+g*re+_*te+S*ie,o[9]=p*T+g*ne+_*oe+S*Y,o[13]=p*L+g*X+_*le+S*F,o[2]=M*k+v*B+x*j+C*G,o[6]=M*D+v*re+x*te+C*ie,o[10]=M*T+v*ne+x*oe+C*Y,o[14]=M*L+v*X+x*le+C*F,o[3]=P*k+w*B+E*j+A*G,o[7]=P*D+w*re+E*te+A*ie,o[11]=P*T+w*ne+E*oe+A*Y,o[15]=P*L+w*X+E*le+A*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],_=e[10],S=e[14],M=e[3],v=e[7],x=e[11],C=e[15];return M*(+o*d*g-s*h*g-o*c*_+i*h*_+s*c*S-i*d*S)+v*(+t*d*S-t*h*_+o*u*_-s*u*S+s*h*p-o*d*p)+x*(+t*h*g-t*c*S-o*u*g+i*u*S+o*c*p-i*h*p)+C*(-s*c*p-t*d*g+t*c*_+s*u*g-i*u*_+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],_=e[10],S=e[11],M=e[12],v=e[13],x=e[14],C=e[15],P=g*x*h-v*_*h+v*d*S-c*x*S-g*d*C+c*_*C,w=M*_*h-p*x*h-M*d*S+u*x*S+p*d*C-u*_*C,E=p*v*h-M*g*h+M*c*S-u*v*S-p*c*C+u*g*C,A=M*g*d-p*v*d-M*c*_+u*v*_+p*c*x-u*g*x,k=t*P+i*w+s*E+o*A;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/k;return e[0]=P*D,e[1]=(v*_*o-g*x*o-v*s*S+i*x*S+g*s*C-i*_*C)*D,e[2]=(c*x*o-v*d*o+v*s*h-i*x*h-c*s*C+i*d*C)*D,e[3]=(g*d*o-c*_*o-g*s*h+i*_*h+c*s*S-i*d*S)*D,e[4]=w*D,e[5]=(p*x*o-M*_*o+M*s*S-t*x*S-p*s*C+t*_*C)*D,e[6]=(M*d*o-u*x*o-M*s*h+t*x*h+u*s*C-t*d*C)*D,e[7]=(u*_*o-p*d*o+p*s*h-t*_*h-u*s*S+t*d*S)*D,e[8]=E*D,e[9]=(M*g*o-p*v*o-M*i*S+t*v*S+p*i*C-t*g*C)*D,e[10]=(u*v*o-M*c*o+M*i*h-t*v*h-u*i*C+t*c*C)*D,e[11]=(p*c*o-u*g*o-p*i*h+t*g*h+u*i*S-t*c*S)*D,e[12]=A*D,e[13]=(p*v*s-M*g*s+M*i*_-t*v*_-p*i*x+t*g*x)*D,e[14]=(M*c*s-u*v*s-M*i*d+t*v*d+u*i*x-t*c*x)*D,e[15]=(u*g*s-p*c*s+p*i*d-t*g*d-u*i*_+t*c*_)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,u=e.x,c=e.y,d=e.z,h=o*u,p=o*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,p*c+i,p*d-s*u,0,h*d-s*c,p*d+s*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,u){return this.set(1,i,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,u=t._y,c=t._z,d=t._w,h=o+o,p=u+u,g=c+c,_=o*h,S=o*p,M=o*g,v=u*p,x=u*g,C=c*g,P=d*h,w=d*p,E=d*g,A=i.x,k=i.y,D=i.z;return s[0]=(1-(v+C))*A,s[1]=(S+E)*A,s[2]=(M-w)*A,s[3]=0,s[4]=(S-E)*k,s[5]=(1-(_+C))*k,s[6]=(x+P)*k,s[7]=0,s[8]=(M+w)*D,s[9]=(x-P)*D,s[10]=(1-(_+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=po.set(s[0],s[1],s[2]).length();const u=po.set(s[4],s[5],s[6]).length(),c=po.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Ri.copy(this);const h=1/o,p=1/u,g=1/c;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=p,Ri.elements[5]*=p,Ri.elements[6]*=p,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,t.setFromRotationMatrix(Ri),i.x=o,i.y=u,i.z=c,this}makePerspective(e,t,i,s,o,u){const c=this.elements,d=2*o/(t-e),h=2*o/(i-s),p=(t+e)/(t-e),g=(i+s)/(i-s),_=-(u+o)/(u-o),S=-2*u*o/(u-o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,o,u){const c=this.elements,d=1/(t-e),h=1/(i-s),p=1/(u-o),g=(t+e)*d,_=(i+s)*h,S=(u+o)*p;return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=-2*p,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const po=new Q,Ri=new $t,J1=new Q(0,0,0),eM=new Q(1,1,1),Fr=new Q,wu=new Q,Qn=new Q,a_=new $t,l_=new ll;class rc{constructor(e=0,t=0,i=0,s=rc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],d=s[1],h=s[5],p=s[9],g=s[2],_=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(ti(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ti(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(ti(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-ti(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(ti(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-ti(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return a_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return l_.setFromEuler(this),this.setFromQuaternion(l_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rc.DEFAULT_ORDER="XYZ";class z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const u_=new Q,mo=new ll,or=new $t,Tu=new Q,ka=new Q,nM=new Q,iM=new ll,c_=new Q(1,0,0),f_=new Q(0,1,0),d_=new Q(0,0,1),rM={type:"added"},h_={type:"removed"};class Dn extends jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new Q,t=new rc,i=new ll,s=new Q(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Rn}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(c_,e)}rotateY(e){return this.rotateOnAxis(f_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,t){return u_.copy(e).applyQuaternion(this.quaternion),this.position.add(u_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c_,e)}translateY(e){return this.translateOnAxis(f_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tu.copy(e):Tu.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(ka,Tu,this.up):or.lookAt(Tu,ka,this.up),this.quaternion.setFromRotationMatrix(or),s&&(or.extractRotation(s.matrixWorld),mo.setFromRotationMatrix(or),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(h_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectsByProperty(e,t);u.length>0&&(i=i.concat(u))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,u=s.length;o<u;o++){const c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(o(e.materials,this.material[d]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(o(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),_=u(e.skeletons),S=u(e.animations),M=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),S.length>0&&(i.animations=S),M.length>0&&(i.nodes=M)}return i.object=s,i;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dn.DEFAULT_UP=new Q(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new Q,ar=new Q,gd=new Q,lr=new Q,go=new Q,_o=new Q,p_=new Q,_d=new Q,vd=new Q,xd=new Q;class fr{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Di.subVectors(e,t),s.cross(Di);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Di.subVectors(s,t),ar.subVectors(i,t),gd.subVectors(e,t);const u=Di.dot(Di),c=Di.dot(ar),d=Di.dot(gd),h=ar.dot(ar),p=ar.dot(gd),g=u*h-c*c;if(g===0)return o.set(-2,-1,-1);const _=1/g,S=(h*d-c*p)*_,M=(u*p-c*d)*_;return o.set(1-S-M,M,S)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,lr),lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getUV(e,t,i,s,o,u,c,d){return this.getBarycoord(e,t,i,s,lr),d.set(0,0),d.addScaledVector(o,lr.x),d.addScaledVector(u,lr.y),d.addScaledVector(c,lr.z),d}static isFrontFacing(e,t,i,s){return Di.subVectors(i,t),ar.subVectors(e,t),Di.cross(ar).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Di.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,o){return fr.getUV(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return fr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let u,c;go.subVectors(s,i),_o.subVectors(o,i),_d.subVectors(e,i);const d=go.dot(_d),h=_o.dot(_d);if(d<=0&&h<=0)return t.copy(i);vd.subVectors(e,s);const p=go.dot(vd),g=_o.dot(vd);if(p>=0&&g<=p)return t.copy(s);const _=d*g-p*h;if(_<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(go,u);xd.subVectors(e,o);const S=go.dot(xd),M=_o.dot(xd);if(M>=0&&S<=M)return t.copy(o);const v=S*h-d*M;if(v<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(i).addScaledVector(_o,c);const x=p*M-S*g;if(x<=0&&g-p>=0&&S-M>=0)return p_.subVectors(o,s),c=(g-p)/(g-p+(S-M)),t.copy(s).addScaledVector(p_,c);const C=1/(x+v+_);return u=v*C,c=_*C,t.copy(i).addScaledVector(go,u).addScaledVector(_o,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let sM=0;class Xo extends jo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Po,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=C0,this.blendDst=P0,this.blendEquation=To,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=id,this.stencilZFail=id,this.stencilZPass=id,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(i.blending=this.blending),this.side!==$r&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const u=[];for(const c in o){const d=o[c];delete d.metadata,u.push(d)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function yd(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class _t{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=bn.workingColorSpace){return this.r=e,this.g=t,this.b=i,bn.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=bn.workingColorSpace){if(e=V1(e,1),t=ti(t,0,1),i=ti(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=yd(u,o,e+1/3),this.g=yd(u,o,e),this.b=yd(u,o,e-1/3)}return bn.toWorkingColorSpace(this,s),this}setStyle(e,t=Vi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,bn.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,bn.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const d=parseFloat(o[1])/360,h=parseFloat(o[2])/100,p=parseFloat(o[3])/100;return i(o[4]),this.setHSL(d,h,p,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,bn.toWorkingColorSpace(this,t),this;if(u===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,bn.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vi){const i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}copyLinearToSRGB(e){return this.r=ld(e.r),this.g=ld(e.g),this.b=ld(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vi){return bn.fromWorkingColorSpace(yn.copy(this),e),ti(yn.r*255,0,255)<<16^ti(yn.g*255,0,255)<<8^ti(yn.b*255,0,255)<<0}getHexString(e=Vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bn.workingColorSpace){bn.fromWorkingColorSpace(yn.copy(this),t);const i=yn.r,s=yn.g,o=yn.b,u=Math.max(i,s,o),c=Math.min(i,s,o);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case i:d=(s-o)/g+(s<o?6:0);break;case s:d=(o-i)/g+2;break;case o:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=bn.workingColorSpace){return bn.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Vi){bn.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,i=yn.g,s=yn.b;return e!==Vi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${s*255|0})`}offsetHSL(e,t,i){return this.getHSL(Ii),Ii.h+=e,Ii.s+=t,Ii.l+=i,this.setHSL(Ii.h,Ii.s,Ii.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Eu);const i=sd(Ii.h,Eu.h,t),s=sd(Ii.s,Eu.s,t),o=sd(Ii.l,Eu.l,t);return this.setHSL(i,s,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new _t;_t.NAMES=F0;class gh extends Xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=A0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new Q,bu=new ft;class oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=n_,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bu.fromBufferAttribute(this,t),bu.applyMatrix3(e),this.setXY(t,bu.x,bu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vu(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vu(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vu(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array),s=Zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),i=Zn(i,this.array),s=Zn(s,this.array),o=Zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==n_&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class U0 extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class B0 extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bn extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let oM=0;const _i=new $t,Sd=new Dn,vo=new Q,Jn=new ul,Na=new ul,sn=new Q;class Ti extends jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?B0:U0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Rn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,i){return _i.makeTranslation(e,t,i),this.applyMatrix4(_i),this}scale(e,t,i){return _i.makeScale(e,t,i),this.applyMatrix4(_i),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Jn.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];Na.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(Jn.min,Na.min),Jn.expandByPoint(sn),sn.addVectors(Jn.max,Na.max),Jn.expandByPoint(sn)):(Jn.expandByPoint(Na.min),Jn.expandByPoint(Na.max))}Jn.getCenter(i);let s=0;for(let o=0,u=e.count;o<u;o++)sn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)sn.fromBufferAttribute(c,h),d&&(vo.fromBufferAttribute(e,h),sn.add(vo)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,o=t.normal.array,u=t.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let B=0;B<c;B++)h[B]=new Q,p[B]=new Q;const g=new Q,_=new Q,S=new Q,M=new ft,v=new ft,x=new ft,C=new Q,P=new Q;function w(B,re,ne){g.fromArray(s,B*3),_.fromArray(s,re*3),S.fromArray(s,ne*3),M.fromArray(u,B*2),v.fromArray(u,re*2),x.fromArray(u,ne*2),_.sub(g),S.sub(g),v.sub(M),x.sub(M);const X=1/(v.x*x.y-x.x*v.y);isFinite(X)&&(C.copy(_).multiplyScalar(x.y).addScaledVector(S,-v.y).multiplyScalar(X),P.copy(S).multiplyScalar(v.x).addScaledVector(_,-x.x).multiplyScalar(X),h[B].add(C),h[re].add(C),h[ne].add(C),p[B].add(P),p[re].add(P),p[ne].add(P))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let B=0,re=E.length;B<re;++B){const ne=E[B],X=ne.start,j=ne.count;for(let te=X,oe=X+j;te<oe;te+=3)w(i[te+0],i[te+1],i[te+2])}const A=new Q,k=new Q,D=new Q,T=new Q;function L(B){D.fromArray(o,B*3),T.copy(D);const re=h[B];A.copy(re),A.sub(D.multiplyScalar(D.dot(re))).normalize(),k.crossVectors(T,re);const X=k.dot(p[B])<0?-1:1;d[B*4]=A.x,d[B*4+1]=A.y,d[B*4+2]=A.z,d[B*4+3]=X}for(let B=0,re=E.length;B<re;++B){const ne=E[B],X=ne.start,j=ne.count;for(let te=X,oe=X+j;te<oe;te+=3)L(i[te+0]),L(i[te+1]),L(i[te+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,S=i.count;_<S;_++)i.setXYZ(_,0,0,0);const s=new Q,o=new Q,u=new Q,c=new Q,d=new Q,h=new Q,p=new Q,g=new Q;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),v=e.getX(_+1),x=e.getX(_+2);s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,v),u.fromBufferAttribute(t,x),p.subVectors(u,o),g.subVectors(s,o),p.cross(g),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,v),h.fromBufferAttribute(i,x),c.add(p),d.add(p),h.add(p),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(v,d.x,d.y,d.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let _=0,S=t.count;_<S;_+=3)s.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,o),g.subVectors(s,o),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,_=new h.constructor(d.length*p);let S=0,M=0;for(let v=0,x=d.length;v<x;v++){c.isInterleavedBufferAttribute?S=d[v]*c.data.stride+c.offset:S=d[v]*p;for(let C=0;C<p;C++)_[M++]=h[S++]}return new oi(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const d=[],h=o[c];for(let p=0,g=h.length;p<g;p++){const _=h[p],S=e(_,i);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,_=h.length;g<_;g++){const S=h[g];p.push(S.toJSON(e.data))}p.length>0&&(s[d]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],g=o[h];for(let _=0,S=g.length;_<S;_++)p.push(g[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m_=new $t,Gi=new mh,Cu=new cl,g_=new Q,Oa=new Q,za=new Q,Fa=new Q,Md=new Q,Pu=new Q,Au=new ft,Lu=new ft,Ru=new ft,wd=new Q,Du=new Q;class dr extends Dn{constructor(e=new Ti,t=new gh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){Pu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=c[d],g=o[d];p!==0&&(Md.fromBufferAttribute(g,e),u?Pu.addScaledVector(Md,p):Pu.addScaledVector(Md.sub(t),p))}t.add(Pu)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Cu.copy(i.boundingSphere),Cu.applyMatrix4(o),Gi.copy(e.ray).recast(e.near),Cu.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Cu,g_)===null||Gi.origin.distanceToSquared(g_)>(e.far-e.near)**2))||(m_.copy(o).invert(),Gi.copy(e.ray).applyMatrix4(m_),i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1))return;let u;const c=i.index,d=i.attributes.position,h=i.attributes.uv,p=i.attributes.uv2,g=i.groups,_=i.drawRange;if(c!==null)if(Array.isArray(s))for(let S=0,M=g.length;S<M;S++){const v=g[S],x=s[v.materialIndex],C=Math.max(v.start,_.start),P=Math.min(c.count,Math.min(v.start+v.count,_.start+_.count));for(let w=C,E=P;w<E;w+=3){const A=c.getX(w),k=c.getX(w+1),D=c.getX(w+2);u=Iu(this,x,e,Gi,h,p,A,k,D),u&&(u.faceIndex=Math.floor(w/3),u.face.materialIndex=v.materialIndex,t.push(u))}}else{const S=Math.max(0,_.start),M=Math.min(c.count,_.start+_.count);for(let v=S,x=M;v<x;v+=3){const C=c.getX(v),P=c.getX(v+1),w=c.getX(v+2);u=Iu(this,s,e,Gi,h,p,C,P,w),u&&(u.faceIndex=Math.floor(v/3),t.push(u))}}else if(d!==void 0)if(Array.isArray(s))for(let S=0,M=g.length;S<M;S++){const v=g[S],x=s[v.materialIndex],C=Math.max(v.start,_.start),P=Math.min(d.count,Math.min(v.start+v.count,_.start+_.count));for(let w=C,E=P;w<E;w+=3){const A=w,k=w+1,D=w+2;u=Iu(this,x,e,Gi,h,p,A,k,D),u&&(u.faceIndex=Math.floor(w/3),u.face.materialIndex=v.materialIndex,t.push(u))}}else{const S=Math.max(0,_.start),M=Math.min(d.count,_.start+_.count);for(let v=S,x=M;v<x;v+=3){const C=v,P=v+1,w=v+2;u=Iu(this,s,e,Gi,h,p,C,P,w),u&&(u.faceIndex=Math.floor(v/3),t.push(u))}}}}function aM(a,e,t,i,s,o,u,c){let d;if(e.side===ri?d=i.intersectTriangle(u,o,s,!0,c):d=i.intersectTriangle(s,o,u,e.side===$r,c),d===null)return null;Du.copy(c),Du.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(Du);return h<t.near||h>t.far?null:{distance:h,point:Du.clone(),object:a}}function Iu(a,e,t,i,s,o,u,c,d){a.getVertexPosition(u,Oa),a.getVertexPosition(c,za),a.getVertexPosition(d,Fa);const h=aM(a,e,t,i,Oa,za,Fa,wd);if(h){s&&(Au.fromBufferAttribute(s,u),Lu.fromBufferAttribute(s,c),Ru.fromBufferAttribute(s,d),h.uv=fr.getUV(wd,Oa,za,Fa,Au,Lu,Ru,new ft)),o&&(Au.fromBufferAttribute(o,u),Lu.fromBufferAttribute(o,c),Ru.fromBufferAttribute(o,d),h.uv2=fr.getUV(wd,Oa,za,Fa,Au,Lu,Ru,new ft));const p={a:u,b:c,c:d,normal:new Q,materialIndex:0};fr.getNormal(Oa,za,Fa,p.normal),h.face=p}return h}class fl extends Ti{constructor(e=1,t=1,i=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],p=[],g=[];let _=0,S=0;M("z","y","x",-1,-1,i,t,e,u,o,0),M("z","y","x",1,-1,i,t,-e,u,o,1),M("x","z","y",1,1,e,i,t,s,u,2),M("x","z","y",1,-1,e,i,-t,s,u,3),M("x","y","z",1,-1,e,t,i,s,o,4),M("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(d),this.setAttribute("position",new Bn(h,3)),this.setAttribute("normal",new Bn(p,3)),this.setAttribute("uv",new Bn(g,2));function M(v,x,C,P,w,E,A,k,D,T,L){const B=E/D,re=A/T,ne=E/2,X=A/2,j=k/2,te=D+1,oe=T+1;let le=0,G=0;const ie=new Q;for(let Y=0;Y<oe;Y++){const F=Y*re-X;for(let O=0;O<te;O++){const se=O*B-ne;ie[v]=se*P,ie[x]=F*w,ie[C]=j,h.push(ie.x,ie.y,ie.z),ie[v]=0,ie[x]=0,ie[C]=k>0?1:-1,p.push(ie.x,ie.y,ie.z),g.push(O/D),g.push(1-Y/T),le+=1}}for(let Y=0;Y<T;Y++)for(let F=0;F<D;F++){const O=_+F+te*Y,se=_+F+te*(Y+1),ce=_+(F+1)+te*(Y+1),W=_+(F+1)+te*Y;d.push(O,se,W),d.push(se,ce,W),G+=6}c.addGroup(S,G,L),S+=G,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Cn(a){const e={};for(let t=0;t<a.length;t++){const i=zo(a[t]);for(const s in i)e[s]=i[s]}return e}function lM(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function G0(a){return a.getRenderTarget()===null&&a.outputEncoding===wt?Vi:Za}const uM={clone:zo,merge:Cn};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kr extends Xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=lM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class V0 extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yi extends V0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=r_*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return r_*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rd*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xo=-90,yo=1;class dM extends Dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new yi(xo,yo,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const o=new yi(xo,yo,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const u=new yi(xo,yo,e,t);u.layers=this.layers,u.up.set(0,0,-1),u.lookAt(0,1,0),this.add(u);const c=new yi(xo,yo,e,t);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(0,-1,0),this.add(c);const d=new yi(xo,yo,e,t);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const h=new yi(xo,yo,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,o,u,c,d,h]=this.children,p=e.getRenderTarget(),g=e.toneMapping,_=e.xr.enabled;e.toneMapping=hr,e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,u),e.setRenderTarget(i,3),e.render(t,c),e.setRenderTarget(i,4),e.render(t,d),i.texture.generateMipmaps=S,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(p),e.toneMapping=g,e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class W0 extends si{constructor(e,t,i,s,o,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:ko,super(e,t,i,s,o,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hM extends ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new W0(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fl(5,5,5),o=new Kr({name:"CubemapFromEquirect",uniforms:zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:Xr});o.uniforms.tEquirect.value=t;const u=new dr(s,o),c=t.minFilter;return t.minFilter===$a&&(t.minFilter=xi),new dM(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(o)}}const Td=new Q,pM=new Q,mM=new Rn;class ys{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Td.subVectors(i,t).cross(pM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Td),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mM.getNormalMatrix(e),s=this.coplanarPoint(Td).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const So=new cl,ku=new Q;class H0{constructor(e=new ys,t=new ys,i=new ys,s=new ys,o=new ys,u=new ys){this.planes=[e,t,i,s,o,u]}set(e,t,i,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],o=i[1],u=i[2],c=i[3],d=i[4],h=i[5],p=i[6],g=i[7],_=i[8],S=i[9],M=i[10],v=i[11],x=i[12],C=i[13],P=i[14],w=i[15];return t[0].setComponents(c-s,g-d,v-_,w-x).normalize(),t[1].setComponents(c+s,g+d,v+_,w+x).normalize(),t[2].setComponents(c+o,g+h,v+S,w+C).normalize(),t[3].setComponents(c-o,g-h,v-S,w-C).normalize(),t[4].setComponents(c-u,g-p,v-M,w-P).normalize(),t[5].setComponents(c+u,g+p,v+M,w+P).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),So.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(So)}intersectsSprite(e){return So.center.set(0,0,0),So.radius=.7071067811865476,So.applyMatrix4(e.matrixWorld),this.intersectsSphere(So)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ku.x=s.normal.x>0?e.max.x:e.min.x,ku.y=s.normal.y>0?e.max.y:e.min.y,ku.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ku)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function j0(){let a=null,e=!1,t=null,i=null;function s(o,u){t(o,u),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function gM(a,e){const t=e.isWebGL2,i=new WeakMap;function s(h,p){const g=h.array,_=h.usage,S=a.createBuffer();a.bindBuffer(p,S),a.bufferData(p,g,_),h.onUploadCallback();let M;if(g instanceof Float32Array)M=5126;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)M=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=5123;else if(g instanceof Int16Array)M=5122;else if(g instanceof Uint32Array)M=5125;else if(g instanceof Int32Array)M=5124;else if(g instanceof Int8Array)M=5120;else if(g instanceof Uint8Array)M=5121;else if(g instanceof Uint8ClampedArray)M=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function o(h,p,g){const _=p.array,S=p.updateRange;a.bindBuffer(g,h),S.count===-1?a.bufferSubData(g,0,_):(t?a.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):a.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(a.deleteBuffer(p.buffer),i.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const _=i.get(h);(!_||_.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=i.get(h);g===void 0?i.set(h,s(h,p)):g.version<h.version&&(o(g.buffer,h,p),g.version=h.version)}return{get:u,remove:c,update:d}}class _h extends Ti{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,p=d+1,g=e/c,_=t/d,S=[],M=[],v=[],x=[];for(let C=0;C<p;C++){const P=C*_-u;for(let w=0;w<h;w++){const E=w*g-o;M.push(E,-P,0),v.push(0,0,1),x.push(w/c),x.push(1-C/d)}}for(let C=0;C<d;C++)for(let P=0;P<c;P++){const w=P+h*C,E=P+h*(C+1),A=P+1+h*(C+1),k=P+1+h*C;S.push(w,E,k),S.push(E,A,k)}this.setIndex(S),this.setAttribute("position",new Bn(M,3)),this.setAttribute("normal",new Bn(v,3)),this.setAttribute("uv",new Bn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.width,e.height,e.widthSegments,e.heightSegments)}}var _M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wM="vec3 transformed = vec3( position );",TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,bM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,zM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ew=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ow=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,dw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_w=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Rw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Uw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$w=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,eT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,aT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,lT=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uT=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cT=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,hT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,pT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ST=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Je={alphamap_fragment:_M,alphamap_pars_fragment:vM,alphatest_fragment:xM,alphatest_pars_fragment:yM,aomap_fragment:SM,aomap_pars_fragment:MM,begin_vertex:wM,beginnormal_vertex:TM,bsdfs:EM,iridescence_fragment:bM,bumpmap_pars_fragment:CM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:RM,color_fragment:DM,color_pars_fragment:IM,color_pars_vertex:kM,color_vertex:NM,common:OM,cube_uv_reflection_fragment:zM,defaultnormal_vertex:FM,displacementmap_pars_vertex:UM,displacementmap_vertex:BM,emissivemap_fragment:GM,emissivemap_pars_fragment:VM,encodings_fragment:WM,encodings_pars_fragment:HM,envmap_fragment:jM,envmap_common_pars_fragment:XM,envmap_pars_fragment:qM,envmap_pars_vertex:YM,envmap_physical_pars_fragment:ow,envmap_vertex:$M,fog_vertex:KM,fog_pars_vertex:ZM,fog_fragment:QM,fog_pars_fragment:JM,gradientmap_pars_fragment:ew,lightmap_fragment:tw,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:rw,lights_pars_begin:sw,lights_toon_fragment:aw,lights_toon_pars_fragment:lw,lights_phong_fragment:uw,lights_phong_pars_fragment:cw,lights_physical_fragment:fw,lights_physical_pars_fragment:dw,lights_fragment_begin:hw,lights_fragment_maps:pw,lights_fragment_end:mw,logdepthbuf_fragment:gw,logdepthbuf_pars_fragment:_w,logdepthbuf_pars_vertex:vw,logdepthbuf_vertex:xw,map_fragment:yw,map_pars_fragment:Sw,map_particle_fragment:Mw,map_particle_pars_fragment:ww,metalnessmap_fragment:Tw,metalnessmap_pars_fragment:Ew,morphcolor_vertex:bw,morphnormal_vertex:Cw,morphtarget_pars_vertex:Pw,morphtarget_vertex:Aw,normal_fragment_begin:Lw,normal_fragment_maps:Rw,normal_pars_fragment:Dw,normal_pars_vertex:Iw,normal_vertex:kw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Ow,clearcoat_normal_fragment_maps:zw,clearcoat_pars_fragment:Fw,iridescence_pars_fragment:Uw,output_fragment:Bw,packing:Gw,premultiplied_alpha_fragment:Vw,project_vertex:Ww,dithering_fragment:Hw,dithering_pars_fragment:jw,roughnessmap_fragment:Xw,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:Yw,shadowmap_pars_vertex:$w,shadowmap_vertex:Kw,shadowmask_pars_fragment:Zw,skinbase_vertex:Qw,skinning_pars_vertex:Jw,skinning_vertex:eT,skinnormal_vertex:tT,specularmap_fragment:nT,specularmap_pars_fragment:iT,tonemapping_fragment:rT,tonemapping_pars_fragment:sT,transmission_fragment:oT,transmission_pars_fragment:aT,uv_pars_fragment:lT,uv_pars_vertex:uT,uv_vertex:cT,uv2_pars_fragment:fT,uv2_pars_vertex:dT,uv2_vertex:hT,worldpos_vertex:pT,background_vert:mT,background_frag:gT,backgroundCube_vert:_T,backgroundCube_frag:vT,cube_vert:xT,cube_frag:yT,depth_vert:ST,depth_frag:MT,distanceRGBA_vert:wT,distanceRGBA_frag:TT,equirect_vert:ET,equirect_frag:bT,linedashed_vert:CT,linedashed_frag:PT,meshbasic_vert:AT,meshbasic_frag:LT,meshlambert_vert:RT,meshlambert_frag:DT,meshmatcap_vert:IT,meshmatcap_frag:kT,meshnormal_vert:NT,meshnormal_frag:OT,meshphong_vert:zT,meshphong_frag:FT,meshphysical_vert:UT,meshphysical_frag:BT,meshtoon_vert:GT,meshtoon_frag:VT,points_vert:WT,points_frag:HT,shadow_vert:jT,shadow_frag:XT,sprite_vert:qT,sprite_frag:YT},be={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rn},uv2Transform:{value:new Rn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rn}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rn}}},Hi={basic:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new _t(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Cn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Cn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new _t(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Cn([be.points,be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Cn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Cn([be.common,be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Cn([be.sprite,be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Rn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Cn([be.common,be.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Cn([be.lights,be.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Hi.physical={uniforms:Cn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ft(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Nu={r:0,b:0,g:0};function $T(a,e,t,i,s,o,u){const c=new _t(0);let d=o===!0?0:1,h,p,g=null,_=0,S=null;function M(x,C){let P=!1,w=C.isScene===!0?C.background:null;w&&w.isTexture&&(w=(C.backgroundBlurriness>0?t:e).get(w));const E=a.xr,A=E.getSession&&E.getSession();A&&A.environmentBlendMode==="additive"&&(w=null),w===null?v(c,d):w&&w.isColor&&(v(w,1),P=!0),(a.autoClear||P)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),w&&(w.isCubeTexture||w.mapping===ic)?(p===void 0&&(p=new dr(new fl(1,1,1),new Kr({name:"BackgroundCubeMaterial",uniforms:zo(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,D,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=w.encoding!==wt,(g!==w||_!==w.version||S!==a.toneMapping)&&(p.material.needsUpdate=!0,g=w,_=w.version,S=a.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new dr(new _h(2,2),new Kr({name:"BackgroundMaterial",uniforms:zo(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=w.encoding!==wt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||_!==w.version||S!==a.toneMapping)&&(h.material.needsUpdate=!0,g=w,_=w.version,S=a.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function v(x,C){x.getRGB(Nu,G0(a)),i.buffers.color.setClear(Nu.r,Nu.g,Nu.b,C,u)}return{getClearColor:function(){return c},setClearColor:function(x,C=1){c.set(x),d=C,v(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,v(c,d)},render:M}}function KT(a,e,t,i){const s=a.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||o!==null,c={},d=x(null);let h=d,p=!1;function g(j,te,oe,le,G){let ie=!1;if(u){const Y=v(le,oe,te);h!==Y&&(h=Y,S(h.object)),ie=C(j,le,oe,G),ie&&P(j,le,oe,G)}else{const Y=te.wireframe===!0;(h.geometry!==le.id||h.program!==oe.id||h.wireframe!==Y)&&(h.geometry=le.id,h.program=oe.id,h.wireframe=Y,ie=!0)}G!==null&&t.update(G,34963),(ie||p)&&(p=!1,T(j,te,oe,le),G!==null&&a.bindBuffer(34963,t.get(G).buffer))}function _(){return i.isWebGL2?a.createVertexArray():o.createVertexArrayOES()}function S(j){return i.isWebGL2?a.bindVertexArray(j):o.bindVertexArrayOES(j)}function M(j){return i.isWebGL2?a.deleteVertexArray(j):o.deleteVertexArrayOES(j)}function v(j,te,oe){const le=oe.wireframe===!0;let G=c[j.id];G===void 0&&(G={},c[j.id]=G);let ie=G[te.id];ie===void 0&&(ie={},G[te.id]=ie);let Y=ie[le];return Y===void 0&&(Y=x(_()),ie[le]=Y),Y}function x(j){const te=[],oe=[],le=[];for(let G=0;G<s;G++)te[G]=0,oe[G]=0,le[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:oe,attributeDivisors:le,object:j,attributes:{},index:null}}function C(j,te,oe,le){const G=h.attributes,ie=te.attributes;let Y=0;const F=oe.getAttributes();for(const O in F)if(F[O].location>=0){const ce=G[O];let W=ie[O];if(W===void 0&&(O==="instanceMatrix"&&j.instanceMatrix&&(W=j.instanceMatrix),O==="instanceColor"&&j.instanceColor&&(W=j.instanceColor)),ce===void 0||ce.attribute!==W||W&&ce.data!==W.data)return!0;Y++}return h.attributesNum!==Y||h.index!==le}function P(j,te,oe,le){const G={},ie=te.attributes;let Y=0;const F=oe.getAttributes();for(const O in F)if(F[O].location>=0){let ce=ie[O];ce===void 0&&(O==="instanceMatrix"&&j.instanceMatrix&&(ce=j.instanceMatrix),O==="instanceColor"&&j.instanceColor&&(ce=j.instanceColor));const W={};W.attribute=ce,ce&&ce.data&&(W.data=ce.data),G[O]=W,Y++}h.attributes=G,h.attributesNum=Y,h.index=le}function w(){const j=h.newAttributes;for(let te=0,oe=j.length;te<oe;te++)j[te]=0}function E(j){A(j,0)}function A(j,te){const oe=h.newAttributes,le=h.enabledAttributes,G=h.attributeDivisors;oe[j]=1,le[j]===0&&(a.enableVertexAttribArray(j),le[j]=1),G[j]!==te&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,te),G[j]=te)}function k(){const j=h.newAttributes,te=h.enabledAttributes;for(let oe=0,le=te.length;oe<le;oe++)te[oe]!==j[oe]&&(a.disableVertexAttribArray(oe),te[oe]=0)}function D(j,te,oe,le,G,ie){i.isWebGL2===!0&&(oe===5124||oe===5125)?a.vertexAttribIPointer(j,te,oe,G,ie):a.vertexAttribPointer(j,te,oe,le,G,ie)}function T(j,te,oe,le){if(i.isWebGL2===!1&&(j.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const G=le.attributes,ie=oe.getAttributes(),Y=te.defaultAttributeValues;for(const F in ie){const O=ie[F];if(O.location>=0){let se=G[F];if(se===void 0&&(F==="instanceMatrix"&&j.instanceMatrix&&(se=j.instanceMatrix),F==="instanceColor"&&j.instanceColor&&(se=j.instanceColor)),se!==void 0){const ce=se.normalized,W=se.itemSize,ve=t.get(se);if(ve===void 0)continue;const Se=ve.buffer,ye=ve.type,Me=ve.bytesPerElement;if(se.isInterleavedBufferAttribute){const Ne=se.data,Ke=Ne.stride,Qe=se.offset;if(Ne.isInstancedInterleavedBuffer){for(let nt=0;nt<O.locationSize;nt++)A(O.location+nt,Ne.meshPerAttribute);j.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let nt=0;nt<O.locationSize;nt++)E(O.location+nt);a.bindBuffer(34962,Se);for(let nt=0;nt<O.locationSize;nt++)D(O.location+nt,W/O.locationSize,ye,ce,Ke*Me,(Qe+W/O.locationSize*nt)*Me)}else{if(se.isInstancedBufferAttribute){for(let Ne=0;Ne<O.locationSize;Ne++)A(O.location+Ne,se.meshPerAttribute);j.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<O.locationSize;Ne++)E(O.location+Ne);a.bindBuffer(34962,Se);for(let Ne=0;Ne<O.locationSize;Ne++)D(O.location+Ne,W/O.locationSize,ye,ce,W*Me,W/O.locationSize*Ne*Me)}}else if(Y!==void 0){const ce=Y[F];if(ce!==void 0)switch(ce.length){case 2:a.vertexAttrib2fv(O.location,ce);break;case 3:a.vertexAttrib3fv(O.location,ce);break;case 4:a.vertexAttrib4fv(O.location,ce);break;default:a.vertexAttrib1fv(O.location,ce)}}}}k()}function L(){ne();for(const j in c){const te=c[j];for(const oe in te){const le=te[oe];for(const G in le)M(le[G].object),delete le[G];delete te[oe]}delete c[j]}}function B(j){if(c[j.id]===void 0)return;const te=c[j.id];for(const oe in te){const le=te[oe];for(const G in le)M(le[G].object),delete le[G];delete te[oe]}delete c[j.id]}function re(j){for(const te in c){const oe=c[te];if(oe[j.id]===void 0)continue;const le=oe[j.id];for(const G in le)M(le[G].object),delete le[G];delete oe[j.id]}}function ne(){X(),p=!0,h!==d&&(h=d,S(h.object))}function X(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:ne,resetDefaultState:X,dispose:L,releaseStatesOfGeometry:B,releaseStatesOfProgram:re,initAttributes:w,enableAttribute:E,disableUnusedAttributes:k}}function ZT(a,e,t,i){const s=i.isWebGL2;let o;function u(h){o=h}function c(h,p){a.drawArrays(o,h,p),t.update(p,o,1)}function d(h,p,g){if(g===0)return;let _,S;if(s)_=a,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](o,h,p,g),t.update(p,o,g)}this.setMode=u,this.render=c,this.renderInstances=d}function QT(a,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){if(D==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let c=t.precision!==void 0?t.precision:"highp";const d=o(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,g=a.getParameter(34930),_=a.getParameter(35660),S=a.getParameter(3379),M=a.getParameter(34076),v=a.getParameter(34921),x=a.getParameter(36347),C=a.getParameter(36348),P=a.getParameter(36349),w=_>0,E=u||e.has("OES_texture_float"),A=w&&E,k=u?a.getParameter(36183):0;return{isWebGL2:u,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:x,maxVaryings:C,maxFragmentUniforms:P,vertexTextures:w,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:k}}function JT(a){const e=this;let t=null,i=0,s=!1,o=!1;const u=new ys,c=new Rn,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||i!==0||s;return s=_,i=g.length,S},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){t=p(g,_,0)},this.setState=function(g,_,S){const M=g.clippingPlanes,v=g.clipIntersection,x=g.clipShadows,C=a.get(g);if(!s||M===null||M.length===0||o&&!x)o?p(null):h();else{const P=o?0:i,w=P*4;let E=C.clippingState||null;d.value=E,E=p(M,_,w,S);for(let A=0;A!==w;++A)E[A]=t[A];C.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,S,M){const v=g!==null?g.length:0;let x=null;if(v!==0){if(x=d.value,M!==!0||x===null){const C=S+v*4,P=_.matrixWorldInverse;c.getNormalMatrix(P),(x===null||x.length<C)&&(x=new Float32Array(C));for(let w=0,E=S;w!==v;++w,E+=4)u.copy(g[w]).applyMatrix4(P,c),u.normal.toArray(x,E),x[E+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function e2(a){let e=new WeakMap;function t(u,c){return c===Vd?u.mapping=ko:c===Wd&&(u.mapping=No),u}function i(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const c=u.mapping;if(c===Vd||c===Wd)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new hM(d.height/2);return h.fromEquirectangularTexture(a,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class t2 extends V0{constructor(e=-1,t=1,i=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Eo=4,__=[.125,.215,.35,.446,.526,.582],ws=20,Ed=new t2,v_=new _t;let bd=null;const Ss=(1+Math.sqrt(5))/2,Mo=1/Ss,x_=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Ss,Mo),new Q(0,Ss,-Mo),new Q(Mo,0,Ss),new Q(-Mo,0,Ss),new Q(Ss,Mo,0),new Q(-Ss,Mo,0)];class y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){bd=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd),e.scissorTest=!1,Ou(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ko||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ka,format:Ni,encoding:Is,depthBuffer:!1},s=S_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n2(o)),this._blurMaterial=i2(o,e,t)}return s}_compileMaterial(e){const t=new dr(this._lodPlanes[0],e);this._renderer.compile(t,Ed)}_sceneToCubeUV(e,t,i,s){const c=new yi(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(v_),p.toneMapping=hr,p.autoClear=!1;const S=new gh({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),M=new dr(new fl,S);let v=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,v=!0):(S.color.copy(v_),v=!0);for(let C=0;C<6;C++){const P=C%3;P===0?(c.up.set(0,d[C],0),c.lookAt(h[C],0,0)):P===1?(c.up.set(0,0,d[C]),c.lookAt(0,h[C],0)):(c.up.set(0,d[C],0),c.lookAt(0,0,h[C]));const w=this._cubeSize;Ou(s,P*w,C>2?w:0,w,w),p.setRenderTarget(s),v&&p.render(M,c),p.render(e,c)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=_,p.autoClear=g,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ko||e.mapping===No;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=w_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M_());const o=s?this._cubemapMaterial:this._equirectMaterial,u=new dr(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;Ou(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Ed)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),u=x_[(s-1)%x_.length];this._blur(e,s-1,s,o,u)}t.autoClear=i}_blur(e,t,i,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",o),this._halfBlur(u,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new dr(this._lodPlanes[s],h),_=h.uniforms,S=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*S):2*Math.PI/(2*ws-1),v=o/M,x=isFinite(o)?1+Math.floor(p*v):ws;x>ws&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ws}`);const C=[];let P=0;for(let D=0;D<ws;++D){const T=D/v,L=Math.exp(-T*T/2);C.push(L),D===0?P+=L:D<x&&(P+=2*L)}for(let D=0;D<C.length;D++)C[D]=C[D]/P;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=C,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:w}=this;_.dTheta.value=M,_.mipInt.value=w-i;const E=this._sizeLods[s],A=3*E*(s>w-Eo?s-w+Eo:0),k=4*(this._cubeSize-E);Ou(t,A,k,3*E,2*E),d.setRenderTarget(t),d.render(g,Ed)}}function n2(a){const e=[],t=[],i=[];let s=a;const o=a-Eo+1+__.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);t.push(c);let d=1/c;u>a-Eo?d=__[u-a+Eo-1]:u===0&&(d=0),i.push(d);const h=1/(c-2),p=-h,g=1+h,_=[p,p,g,p,g,g,p,p,g,g,p,g],S=6,M=6,v=3,x=2,C=1,P=new Float32Array(v*M*S),w=new Float32Array(x*M*S),E=new Float32Array(C*M*S);for(let k=0;k<S;k++){const D=k%3*2/3-1,T=k>2?0:-1,L=[D,T,0,D+2/3,T,0,D+2/3,T+1,0,D,T,0,D+2/3,T+1,0,D,T+1,0];P.set(L,v*M*k),w.set(_,x*M*k);const B=[k,k,k,k,k,k];E.set(B,C*M*k)}const A=new Ti;A.setAttribute("position",new oi(P,v)),A.setAttribute("uv",new oi(w,x)),A.setAttribute("faceIndex",new oi(E,C)),e.push(A),s>Eo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function S_(a,e,t){const i=new ks(a,e,t);return i.texture.mapping=ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ou(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function i2(a,e,t){const i=new Float32Array(ws),s=new Q(0,1,0);return new Kr({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function M_(){return new Kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function w_(){return new Kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r2(a){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const d=c.mapping,h=d===Vd||d===Wd,p=d===ko||d===No;if(h||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return t===null&&(t=new y_(a)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(h&&g&&g.height>0||p&&g&&s(g)){t===null&&(t=new y_(a));const _=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,_),c.addEventListener("dispose",o),_.texture}else return null}}}return c}function s(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function o(c){const d=c.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function s2(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function o2(a,e,t,i){const s={},o=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const S=o.get(_);S&&(e.remove(S),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const M in _)e.update(_[M],34962);const S=g.morphAttributes;for(const M in S){const v=S[M];for(let x=0,C=v.length;x<C;x++)e.update(v[x],34962)}}function h(g){const _=[],S=g.index,M=g.attributes.position;let v=0;if(S!==null){const P=S.array;v=S.version;for(let w=0,E=P.length;w<E;w+=3){const A=P[w+0],k=P[w+1],D=P[w+2];_.push(A,k,k,D,D,A)}}else{const P=M.array;v=M.version;for(let w=0,E=P.length/3-1;w<E;w+=3){const A=w+0,k=w+1,D=w+2;_.push(A,k,k,D,D,A)}}const x=new(I0(_)?B0:U0)(_,1);x.version=v;const C=o.get(g);C&&e.remove(C),o.set(g,x)}function p(g){const _=o.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&h(g)}else h(g);return o.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function a2(a,e,t,i){const s=i.isWebGL2;let o;function u(_){o=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function p(_,S){a.drawElements(o,S,c,_*d),t.update(S,o,1)}function g(_,S,M){if(M===0)return;let v,x;if(s)v=a,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](o,S,c,_*d,M),t.update(S,o,M)}this.setMode=u,this.setIndex=h,this.render=p,this.renderInstances=g}function l2(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case 4:t.triangles+=c*(o/3);break;case 1:t.lines+=c*(o/2);break;case 3:t.lines+=c*(o-1);break;case 2:t.lines+=c*o;break;case 0:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function u2(a,e){return a[0]-e[0]}function c2(a,e){return Math.abs(e[1])-Math.abs(a[1])}function f2(a,e,t){const i={},s=new Float32Array(8),o=new WeakMap,u=new cn,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function d(h,p,g){const _=h.morphTargetInfluences;if(e.isWebGL2===!0){const M=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=M!==void 0?M.length:0;let x=o.get(p);if(x===void 0||x.count!==v){let te=function(){X.dispose(),o.delete(p),p.removeEventListener("dispose",te)};var S=te;x!==void 0&&x.texture.dispose();const w=p.morphAttributes.position!==void 0,E=p.morphAttributes.normal!==void 0,A=p.morphAttributes.color!==void 0,k=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],T=p.morphAttributes.color||[];let L=0;w===!0&&(L=1),E===!0&&(L=2),A===!0&&(L=3);let B=p.attributes.position.count*L,re=1;B>e.maxTextureSize&&(re=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const ne=new Float32Array(B*re*4*v),X=new O0(ne,B,re,v);X.type=Es,X.needsUpdate=!0;const j=L*4;for(let oe=0;oe<v;oe++){const le=k[oe],G=D[oe],ie=T[oe],Y=B*re*4*oe;for(let F=0;F<le.count;F++){const O=F*j;w===!0&&(u.fromBufferAttribute(le,F),ne[Y+O+0]=u.x,ne[Y+O+1]=u.y,ne[Y+O+2]=u.z,ne[Y+O+3]=0),E===!0&&(u.fromBufferAttribute(G,F),ne[Y+O+4]=u.x,ne[Y+O+5]=u.y,ne[Y+O+6]=u.z,ne[Y+O+7]=0),A===!0&&(u.fromBufferAttribute(ie,F),ne[Y+O+8]=u.x,ne[Y+O+9]=u.y,ne[Y+O+10]=u.z,ne[Y+O+11]=ie.itemSize===4?u.w:1)}}x={count:v,texture:X,size:new ft(B,re)},o.set(p,x),p.addEventListener("dispose",te)}let C=0;for(let w=0;w<_.length;w++)C+=_[w];const P=p.morphTargetsRelative?1:1-C;g.getUniforms().setValue(a,"morphTargetBaseInfluence",P),g.getUniforms().setValue(a,"morphTargetInfluences",_),g.getUniforms().setValue(a,"morphTargetsTexture",x.texture,t),g.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}else{const M=_===void 0?0:_.length;let v=i[p.id];if(v===void 0||v.length!==M){v=[];for(let E=0;E<M;E++)v[E]=[E,0];i[p.id]=v}for(let E=0;E<M;E++){const A=v[E];A[0]=E,A[1]=_[E]}v.sort(c2);for(let E=0;E<8;E++)E<M&&v[E][1]?(c[E][0]=v[E][0],c[E][1]=v[E][1]):(c[E][0]=Number.MAX_SAFE_INTEGER,c[E][1]=0);c.sort(u2);const x=p.morphAttributes.position,C=p.morphAttributes.normal;let P=0;for(let E=0;E<8;E++){const A=c[E],k=A[0],D=A[1];k!==Number.MAX_SAFE_INTEGER&&D?(x&&p.getAttribute("morphTarget"+E)!==x[k]&&p.setAttribute("morphTarget"+E,x[k]),C&&p.getAttribute("morphNormal"+E)!==C[k]&&p.setAttribute("morphNormal"+E,C[k]),s[E]=D,P+=D):(x&&p.hasAttribute("morphTarget"+E)===!0&&p.deleteAttribute("morphTarget"+E),C&&p.hasAttribute("morphNormal"+E)===!0&&p.deleteAttribute("morphNormal"+E),s[E]=0)}const w=p.morphTargetsRelative?1:1-P;g.getUniforms().setValue(a,"morphTargetBaseInfluence",w),g.getUniforms().setValue(a,"morphTargetInfluences",s)}}return{update:d}}function d2(a,e,t,i){let s=new WeakMap;function o(d){const h=i.render.frame,p=d.geometry,g=e.get(d,p);return s.get(g)!==h&&(e.update(g),s.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),g}function u(){s=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:u}}const X0=new si,q0=new O0,Y0=new Z1,$0=new W0,T_=[],E_=[],b_=new Float32Array(16),C_=new Float32Array(9),P_=new Float32Array(4);function qo(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=T_[s];if(o===void 0&&(o=new Float32Array(s),T_[s]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,a[u].toArray(o,c)}return o}function Kt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Zt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function sc(a,e){let t=E_[e];t===void 0&&(t=new Int32Array(e),E_[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function h2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function p2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;a.uniform2fv(this.addr,e),Zt(t,e)}}function m2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;a.uniform3fv(this.addr,e),Zt(t,e)}}function g2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;a.uniform4fv(this.addr,e),Zt(t,e)}}function _2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;P_.set(i),a.uniformMatrix2fv(this.addr,!1,P_),Zt(t,i)}}function v2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;C_.set(i),a.uniformMatrix3fv(this.addr,!1,C_),Zt(t,i)}}function x2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;b_.set(i),a.uniformMatrix4fv(this.addr,!1,b_),Zt(t,i)}}function y2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function S2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;a.uniform2iv(this.addr,e),Zt(t,e)}}function M2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;a.uniform3iv(this.addr,e),Zt(t,e)}}function w2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;a.uniform4iv(this.addr,e),Zt(t,e)}}function T2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function E2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;a.uniform2uiv(this.addr,e),Zt(t,e)}}function b2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;a.uniform3uiv(this.addr,e),Zt(t,e)}}function C2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;a.uniform4uiv(this.addr,e),Zt(t,e)}}function P2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||X0,s)}function A2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Y0,s)}function L2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$0,s)}function R2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||q0,s)}function D2(a){switch(a){case 5126:return h2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return _2;case 35675:return v2;case 35676:return x2;case 5124:case 35670:return y2;case 35667:case 35671:return S2;case 35668:case 35672:return M2;case 35669:case 35673:return w2;case 5125:return T2;case 36294:return E2;case 36295:return b2;case 36296:return C2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return R2}}function I2(a,e){a.uniform1fv(this.addr,e)}function k2(a,e){const t=qo(e,this.size,2);a.uniform2fv(this.addr,t)}function N2(a,e){const t=qo(e,this.size,3);a.uniform3fv(this.addr,t)}function O2(a,e){const t=qo(e,this.size,4);a.uniform4fv(this.addr,t)}function z2(a,e){const t=qo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function F2(a,e){const t=qo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function U2(a,e){const t=qo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function B2(a,e){a.uniform1iv(this.addr,e)}function G2(a,e){a.uniform2iv(this.addr,e)}function V2(a,e){a.uniform3iv(this.addr,e)}function W2(a,e){a.uniform4iv(this.addr,e)}function H2(a,e){a.uniform1uiv(this.addr,e)}function j2(a,e){a.uniform2uiv(this.addr,e)}function X2(a,e){a.uniform3uiv(this.addr,e)}function q2(a,e){a.uniform4uiv(this.addr,e)}function Y2(a,e,t){const i=this.cache,s=e.length,o=sc(t,s);Kt(i,o)||(a.uniform1iv(this.addr,o),Zt(i,o));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||X0,o[u])}function $2(a,e,t){const i=this.cache,s=e.length,o=sc(t,s);Kt(i,o)||(a.uniform1iv(this.addr,o),Zt(i,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Y0,o[u])}function K2(a,e,t){const i=this.cache,s=e.length,o=sc(t,s);Kt(i,o)||(a.uniform1iv(this.addr,o),Zt(i,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||$0,o[u])}function Z2(a,e,t){const i=this.cache,s=e.length,o=sc(t,s);Kt(i,o)||(a.uniform1iv(this.addr,o),Zt(i,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||q0,o[u])}function Q2(a){switch(a){case 5126:return I2;case 35664:return k2;case 35665:return N2;case 35666:return O2;case 35674:return z2;case 35675:return F2;case 35676:return U2;case 5124:case 35670:return B2;case 35667:case 35671:return G2;case 35668:case 35672:return V2;case 35669:case 35673:return W2;case 5125:return H2;case 36294:return j2;case 36295:return X2;case 36296:return q2;case 35678:case 36198:case 36298:case 36306:case 35682:return Y2;case 35679:case 36299:case 36307:return $2;case 35680:case 36300:case 36308:case 36293:return K2;case 36289:case 36303:case 36311:case 36292:return Z2}}class J2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=D2(t.type)}}class e3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Q2(t.type)}}class t3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],i)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function A_(a,e){a.seq.push(e),a.map[e.id]=e}function n3(a,e,t){const i=a.name,s=i.length;for(Cd.lastIndex=0;;){const o=Cd.exec(i),u=Cd.lastIndex;let c=o[1];const d=o[2]==="]",h=o[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){A_(t,h===void 0?new J2(c,a,e):new e3(c,a,e));break}else{let g=t.map[c];g===void 0&&(g=new t3(c),A_(t,g)),t=g}}}class Wu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),u=e.getUniformLocation(t,o.name);n3(o,u,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function L_(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let i3=0;function r3(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function s3(a){switch(a){case Is:return["Linear","( value )"];case wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function R_(a,e,t){const i=a.getShaderParameter(e,35713),s=a.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+r3(a.getShaderSource(e),u)}else return s}function o3(a,e){const t=s3(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function a3(a,e){let t;switch(e){case g1:t="Linear";break;case _1:t="Reinhard";break;case v1:t="OptimizedCineon";break;case x1:t="ACESFilmic";break;case y1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function l3(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ga).join(`
`)}function u3(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function c3(a,e){const t={},i=a.getProgramParameter(e,35721);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),u=o.name;let c=1;o.type===35674&&(c=2),o.type===35675&&(c=3),o.type===35676&&(c=4),t[u]={type:o.type,location:a.getAttribLocation(e,u),locationSize:c}}return t}function Ga(a){return a!==""}function D_(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f3=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(a){return a.replace(f3,d3)}function d3(a,e){const t=Je[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return qd(t)}const h3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k_(a){return a.replace(h3,p3)}function p3(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function N_(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m3(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===YS?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Ba&&(e="SHADOWMAP_TYPE_VSM"),e}function g3(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ko:case No:e="ENVMAP_TYPE_CUBE";break;case ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _3(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case No:e="ENVMAP_MODE_REFRACTION";break}return e}function v3(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case A0:e="ENVMAP_BLENDING_MULTIPLY";break;case p1:e="ENVMAP_BLENDING_MIX";break;case m1:e="ENVMAP_BLENDING_ADD";break}return e}function x3(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function y3(a,e,t,i){const s=a.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=m3(t),h=g3(t),p=_3(t),g=v3(t),_=x3(t),S=t.isWebGL2?"":l3(t),M=u3(o),v=s.createProgram();let x,C,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[M].filter(Ga).join(`
`),x.length>0&&(x+=`
`),C=[S,M].filter(Ga).join(`
`),C.length>0&&(C+=`
`)):(x=[N_(t),"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),C=[S,N_(t),"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?Je.tonemapping_pars_fragment:"",t.toneMapping!==hr?a3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.encodings_pars_fragment,o3("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),u=qd(u),u=D_(u,t),u=I_(u,t),c=qd(c),c=D_(c,t),c=I_(c,t),u=k_(u),c=k_(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,C=["#define varying in",t.glslVersion===i_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===i_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const w=P+x+u,E=P+C+c,A=L_(s,35633,w),k=L_(s,35632,E);if(s.attachShader(v,A),s.attachShader(v,k),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v),a.debug.checkShaderErrors){const L=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(A).trim(),re=s.getShaderInfoLog(k).trim();let ne=!0,X=!0;if(s.getProgramParameter(v,35714)===!1){ne=!1;const j=R_(s,A,"vertex"),te=R_(s,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,35715)+`

Program Info Log: `+L+`
`+j+`
`+te)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(B===""||re==="")&&(X=!1);X&&(this.diagnostics={runnable:ne,programLog:L,vertexShader:{log:B,prefix:x},fragmentShader:{log:re,prefix:C}})}s.deleteShader(A),s.deleteShader(k);let D;this.getUniforms=function(){return D===void 0&&(D=new Wu(s,v)),D};let T;return this.getAttributes=function(){return T===void 0&&(T=c3(s,v)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=i3++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=k,this}let S3=0;class M3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new w3(e),t.set(e,i)),i}}class w3{constructor(e){this.id=S3++,this.code=e,this.usedTimes=0}}function T3(a,e,t,i,s,o,u){const c=new z0,d=new M3,h=[],p=s.isWebGL2,g=s.logarithmicDepthBuffer,_=s.vertexTextures;let S=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T,L,B,re,ne){const X=re.fog,j=ne.geometry,te=T.isMeshStandardMaterial?re.environment:null,oe=(T.isMeshStandardMaterial?t:e).get(T.envMap||te),le=oe&&oe.mapping===ic?oe.image.height:null,G=M[T.type];T.precision!==null&&(S=s.getMaxPrecision(T.precision),S!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const ie=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Y=ie!==void 0?ie.length:0;let F=0;j.morphAttributes.position!==void 0&&(F=1),j.morphAttributes.normal!==void 0&&(F=2),j.morphAttributes.color!==void 0&&(F=3);let O,se,ce,W;if(G){const Ke=Hi[G];O=Ke.vertexShader,se=Ke.fragmentShader}else O=T.vertexShader,se=T.fragmentShader,d.update(T),ce=d.getVertexShaderID(T),W=d.getFragmentShaderID(T);const ve=a.getRenderTarget(),Se=T.alphaTest>0,ye=T.clearcoat>0,Me=T.iridescence>0;return{isWebGL2:p,shaderID:G,shaderName:T.type,vertexShader:O,fragmentShader:se,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:W,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:_,outputEncoding:ve===null?a.outputEncoding:ve.isXRRenderTarget===!0?ve.texture.encoding:Is,map:!!T.map,matcap:!!T.matcap,envMap:!!oe,envMapMode:oe&&oe.mapping,envMapCubeUVHeight:le,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===B1,tangentSpaceNormalMap:T.normalMapType===U1,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===wt,clearcoat:ye,clearcoatMap:ye&&!!T.clearcoatMap,clearcoatRoughnessMap:ye&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!T.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!T.iridescenceMap,iridescenceThicknessMap:Me&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===Po,alphaMap:!!T.alphaMap,alphaTest:Se,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!j.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.iridescenceMap||T.iridescenceThicknessMap||T.transmission>0||T.transmissionMap||T.thicknessMap||T.specularIntensityMap||T.specularColorMap||T.sheen>0||T.sheenColorMap||T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!X,useFog:T.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:g,skinning:ne.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:F,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:T.toneMapped?a.toneMapping:hr,useLegacyLights:a.useLegacyLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Br,flipSided:T.side===ri,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function x(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)L.push(B),L.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(C(L,T),P(L,T),L.push(a.outputEncoding)),L.push(T.customProgramCacheKey),L.join()}function C(T,L){T.push(L.precision),T.push(L.outputEncoding),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.combine),T.push(L.vertexUvs),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function P(T,L){c.disableAll(),L.isWebGL2&&c.enable(0),L.supportsVertexTextures&&c.enable(1),L.instancing&&c.enable(2),L.instancingColor&&c.enable(3),L.map&&c.enable(4),L.matcap&&c.enable(5),L.envMap&&c.enable(6),L.lightMap&&c.enable(7),L.aoMap&&c.enable(8),L.emissiveMap&&c.enable(9),L.bumpMap&&c.enable(10),L.normalMap&&c.enable(11),L.objectSpaceNormalMap&&c.enable(12),L.tangentSpaceNormalMap&&c.enable(13),L.clearcoat&&c.enable(14),L.clearcoatMap&&c.enable(15),L.clearcoatRoughnessMap&&c.enable(16),L.clearcoatNormalMap&&c.enable(17),L.iridescence&&c.enable(18),L.iridescenceMap&&c.enable(19),L.iridescenceThicknessMap&&c.enable(20),L.displacementMap&&c.enable(21),L.specularMap&&c.enable(22),L.roughnessMap&&c.enable(23),L.metalnessMap&&c.enable(24),L.gradientMap&&c.enable(25),L.alphaMap&&c.enable(26),L.alphaTest&&c.enable(27),L.vertexColors&&c.enable(28),L.vertexAlphas&&c.enable(29),L.vertexUvs&&c.enable(30),L.vertexTangents&&c.enable(31),L.uvsVertexOnly&&c.enable(32),T.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.skinning&&c.enable(4),L.morphTargets&&c.enable(5),L.morphNormals&&c.enable(6),L.morphColors&&c.enable(7),L.premultipliedAlpha&&c.enable(8),L.shadowMapEnabled&&c.enable(9),L.useLegacyLights&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.specularIntensityMap&&c.enable(15),L.specularColorMap&&c.enable(16),L.transmission&&c.enable(17),L.transmissionMap&&c.enable(18),L.thicknessMap&&c.enable(19),L.sheen&&c.enable(20),L.sheenColorMap&&c.enable(21),L.sheenRoughnessMap&&c.enable(22),L.decodeVideoTexture&&c.enable(23),L.opaque&&c.enable(24),T.push(c.mask)}function w(T){const L=M[T.type];let B;if(L){const re=Hi[L];B=uM.clone(re.uniforms)}else B=T.uniforms;return B}function E(T,L){let B;for(let re=0,ne=h.length;re<ne;re++){const X=h[re];if(X.cacheKey===L){B=X,++B.usedTimes;break}}return B===void 0&&(B=new y3(a,L,T,o),h.push(B)),B}function A(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),T.destroy()}}function k(T){d.remove(T)}function D(){d.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:w,acquireProgram:E,releaseProgram:A,releaseShaderCache:k,programs:h,dispose:D}}function E3(){let a=new WeakMap;function e(o){let u=a.get(o);return u===void 0&&(u={},a.set(o,u)),u}function t(o){a.delete(o)}function i(o,u,c){a.get(o)[u]=c}function s(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function b3(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function O_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function z_(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function u(g,_,S,M,v,x){let C=a[e];return C===void 0?(C={id:g.id,object:g,geometry:_,material:S,groupOrder:M,renderOrder:g.renderOrder,z:v,group:x},a[e]=C):(C.id=g.id,C.object=g,C.geometry=_,C.material=S,C.groupOrder=M,C.renderOrder=g.renderOrder,C.z=v,C.group=x),e++,C}function c(g,_,S,M,v,x){const C=u(g,_,S,M,v,x);S.transmission>0?i.push(C):S.transparent===!0?s.push(C):t.push(C)}function d(g,_,S,M,v,x){const C=u(g,_,S,M,v,x);S.transmission>0?i.unshift(C):S.transparent===!0?s.unshift(C):t.unshift(C)}function h(g,_){t.length>1&&t.sort(g||b3),i.length>1&&i.sort(_||O_),s.length>1&&s.sort(_||O_)}function p(){for(let g=e,_=a.length;g<_;g++){const S=a[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:c,unshift:d,finish:p,sort:h}}function C3(){let a=new WeakMap;function e(i,s){const o=a.get(i);let u;return o===void 0?(u=new z_,a.set(i,[u])):s>=o.length?(u=new z_,o.push(u)):u=o[s],u}function t(){a=new WeakMap}return{get:e,dispose:t}}function P3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new _t};break;case"SpotLight":t={position:new Q,direction:new Q,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[e.id]=t,t}}}function A3(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let L3=0;function R3(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function D3(a,e){const t=new P3,i=A3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)s.probe.push(new Q);const o=new Q,u=new $t,c=new $t;function d(p,g){let _=0,S=0,M=0;for(let re=0;re<9;re++)s.probe[re].set(0,0,0);let v=0,x=0,C=0,P=0,w=0,E=0,A=0,k=0,D=0,T=0;p.sort(R3);const L=g===!0?Math.PI:1;for(let re=0,ne=p.length;re<ne;re++){const X=p[re],j=X.color,te=X.intensity,oe=X.distance,le=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)_+=j.r*te*L,S+=j.g*te*L,M+=j.b*te*L;else if(X.isLightProbe)for(let G=0;G<9;G++)s.probe[G].addScaledVector(X.sh.coefficients[G],te);else if(X.isDirectionalLight){const G=t.get(X);if(G.color.copy(X.color).multiplyScalar(X.intensity*L),X.castShadow){const ie=X.shadow,Y=i.get(X);Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,s.directionalShadow[v]=Y,s.directionalShadowMap[v]=le,s.directionalShadowMatrix[v]=X.shadow.matrix,E++}s.directional[v]=G,v++}else if(X.isSpotLight){const G=t.get(X);G.position.setFromMatrixPosition(X.matrixWorld),G.color.copy(j).multiplyScalar(te*L),G.distance=oe,G.coneCos=Math.cos(X.angle),G.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),G.decay=X.decay,s.spot[C]=G;const ie=X.shadow;if(X.map&&(s.spotLightMap[D]=X.map,D++,ie.updateMatrices(X),X.castShadow&&T++),s.spotLightMatrix[C]=ie.matrix,X.castShadow){const Y=i.get(X);Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,s.spotShadow[C]=Y,s.spotShadowMap[C]=le,k++}C++}else if(X.isRectAreaLight){const G=t.get(X);G.color.copy(j).multiplyScalar(te),G.halfWidth.set(X.width*.5,0,0),G.halfHeight.set(0,X.height*.5,0),s.rectArea[P]=G,P++}else if(X.isPointLight){const G=t.get(X);if(G.color.copy(X.color).multiplyScalar(X.intensity*L),G.distance=X.distance,G.decay=X.decay,X.castShadow){const ie=X.shadow,Y=i.get(X);Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,Y.shadowCameraNear=ie.camera.near,Y.shadowCameraFar=ie.camera.far,s.pointShadow[x]=Y,s.pointShadowMap[x]=le,s.pointShadowMatrix[x]=X.shadow.matrix,A++}s.point[x]=G,x++}else if(X.isHemisphereLight){const G=t.get(X);G.skyColor.copy(X.color).multiplyScalar(te*L),G.groundColor.copy(X.groundColor).multiplyScalar(te*L),s.hemi[w]=G,w++}}P>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=_,s.ambient[1]=S,s.ambient[2]=M;const B=s.hash;(B.directionalLength!==v||B.pointLength!==x||B.spotLength!==C||B.rectAreaLength!==P||B.hemiLength!==w||B.numDirectionalShadows!==E||B.numPointShadows!==A||B.numSpotShadows!==k||B.numSpotMaps!==D)&&(s.directional.length=v,s.spot.length=C,s.rectArea.length=P,s.point.length=x,s.hemi.length=w,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=k,s.spotShadowMap.length=k,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=k+D-T,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=T,B.directionalLength=v,B.pointLength=x,B.spotLength=C,B.rectAreaLength=P,B.hemiLength=w,B.numDirectionalShadows=E,B.numPointShadows=A,B.numSpotShadows=k,B.numSpotMaps=D,s.version=L3++)}function h(p,g){let _=0,S=0,M=0,v=0,x=0;const C=g.matrixWorldInverse;for(let P=0,w=p.length;P<w;P++){const E=p[P];if(E.isDirectionalLight){const A=s.directional[_];A.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(C),_++}else if(E.isSpotLight){const A=s.spot[M];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(C),A.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(C),M++}else if(E.isRectAreaLight){const A=s.rectArea[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(C),c.identity(),u.copy(E.matrixWorld),u.premultiply(C),c.extractRotation(u),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),v++}else if(E.isPointLight){const A=s.point[S];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(C),S++}else if(E.isHemisphereLight){const A=s.hemi[x];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(C),x++}}}return{setup:d,setupView:h,state:s}}function F_(a,e){const t=new D3(a,e),i=[],s=[];function o(){i.length=0,s.length=0}function u(g){i.push(g)}function c(g){s.push(g)}function d(g){t.setup(i,g)}function h(g){t.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:d,setupLightsView:h,pushLight:u,pushShadow:c}}function I3(a,e){let t=new WeakMap;function i(o,u=0){const c=t.get(o);let d;return c===void 0?(d=new F_(a,e),t.set(o,[d])):u>=c.length?(d=new F_(a,e),c.push(d)):d=c[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}class k3 extends Xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N3 extends Xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const O3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function F3(a,e,t){let i=new H0;const s=new ft,o=new ft,u=new cn,c=new k3({depthPacking:F1}),d=new N3,h={},p=t.maxTextureSize,g={[$r]:ri,[ri]:$r,[Br]:Br},_=new Kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:O3,fragmentShader:z3}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new Ti;M.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dr(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0,this.render=function(E,A,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;const D=a.getRenderTarget(),T=a.getActiveCubeFace(),L=a.getActiveMipmapLevel(),B=a.state;B.setBlending(Xr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);for(let re=0,ne=E.length;re<ne;re++){const X=E[re],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const te=j.getFrameExtents();if(s.multiply(te),o.copy(j.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/te.x),s.x=o.x*te.x,j.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/te.y),s.y=o.y*te.y,j.mapSize.y=o.y)),j.map===null){const le=this.type!==Ba?{minFilter:Pn,magFilter:Pn}:{};j.map=new ks(s.x,s.y,le),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}a.setRenderTarget(j.map),a.clear();const oe=j.getViewportCount();for(let le=0;le<oe;le++){const G=j.getViewport(le);u.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),B.viewport(u),j.updateMatrices(X,le),i=j.getFrustum(),w(A,k,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===Ba&&C(j,k),j.needsUpdate=!1}x.needsUpdate=!1,a.setRenderTarget(D,T,L)};function C(E,A){const k=e.update(v);_.defines.VSM_SAMPLES!==E.blurSamples&&(_.defines.VSM_SAMPLES=E.blurSamples,S.defines.VSM_SAMPLES=E.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ks(s.x,s.y)),_.uniforms.shadow_pass.value=E.map.texture,_.uniforms.resolution.value=E.mapSize,_.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(A,null,k,_,v,null),S.uniforms.shadow_pass.value=E.mapPass.texture,S.uniforms.resolution.value=E.mapSize,S.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(A,null,k,S,v,null)}function P(E,A,k,D,T,L){let B=null;const re=k.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(re!==void 0)B=re;else if(B=k.isPointLight===!0?d:c,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const ne=B.uuid,X=A.uuid;let j=h[ne];j===void 0&&(j={},h[ne]=j);let te=j[X];te===void 0&&(te=B.clone(),j[X]=te),B=te}return B.visible=A.visible,B.wireframe=A.wireframe,L===Ba?B.side=A.shadowSide!==null?A.shadowSide:A.side:B.side=A.shadowSide!==null?A.shadowSide:g[A.side],B.alphaMap=A.alphaMap,B.alphaTest=A.alphaTest,B.map=A.map,B.clipShadows=A.clipShadows,B.clippingPlanes=A.clippingPlanes,B.clipIntersection=A.clipIntersection,B.displacementMap=A.displacementMap,B.displacementScale=A.displacementScale,B.displacementBias=A.displacementBias,B.wireframeLinewidth=A.wireframeLinewidth,B.linewidth=A.linewidth,k.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(k.matrixWorld),B.nearDistance=D,B.farDistance=T),B}function w(E,A,k,D,T){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Ba)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld);const re=e.update(E),ne=E.material;if(Array.isArray(ne)){const X=re.groups;for(let j=0,te=X.length;j<te;j++){const oe=X[j],le=ne[oe.materialIndex];if(le&&le.visible){const G=P(E,le,D,k.near,k.far,T);a.renderBufferDirect(k,null,re,G,E,oe)}}}else if(ne.visible){const X=P(E,ne,D,k.near,k.far,T);a.renderBufferDirect(k,null,re,X,E,null)}}const B=E.children;for(let re=0,ne=B.length;re<ne;re++)w(B[re],A,k,D,T)}}function U3(a,e,t){const i=t.isWebGL2;function s(){let H=!1;const ue=new cn;let ge=null;const Ce=new cn(0,0,0,0);return{setMask:function(Ie){ge!==Ie&&!H&&(a.colorMask(Ie,Ie,Ie,Ie),ge=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,ct,Ot,Jt,Xn){Xn===!0&&(Ie*=Jt,ct*=Jt,Ot*=Jt),ue.set(Ie,ct,Ot,Jt),Ce.equals(ue)===!1&&(a.clearColor(Ie,ct,Ot,Jt),Ce.copy(ue))},reset:function(){H=!1,ge=null,Ce.set(-1,0,0,0)}}}function o(){let H=!1,ue=null,ge=null,Ce=null;return{setTest:function(Ie){Ie?Se(2929):ye(2929)},setMask:function(Ie){ue!==Ie&&!H&&(a.depthMask(Ie),ue=Ie)},setFunc:function(Ie){if(ge!==Ie){switch(Ie){case a1:a.depthFunc(512);break;case l1:a.depthFunc(519);break;case u1:a.depthFunc(513);break;case Gd:a.depthFunc(515);break;case c1:a.depthFunc(514);break;case f1:a.depthFunc(518);break;case d1:a.depthFunc(516);break;case h1:a.depthFunc(517);break;default:a.depthFunc(515)}ge=Ie}},setLocked:function(Ie){H=Ie},setClear:function(Ie){Ce!==Ie&&(a.clearDepth(Ie),Ce=Ie)},reset:function(){H=!1,ue=null,ge=null,Ce=null}}}function u(){let H=!1,ue=null,ge=null,Ce=null,Ie=null,ct=null,Ot=null,Jt=null,Xn=null;return{setTest:function(xt){H||(xt?Se(2960):ye(2960))},setMask:function(xt){ue!==xt&&!H&&(a.stencilMask(xt),ue=xt)},setFunc:function(xt,wn,hn){(ge!==xt||Ce!==wn||Ie!==hn)&&(a.stencilFunc(xt,wn,hn),ge=xt,Ce=wn,Ie=hn)},setOp:function(xt,wn,hn){(ct!==xt||Ot!==wn||Jt!==hn)&&(a.stencilOp(xt,wn,hn),ct=xt,Ot=wn,Jt=hn)},setLocked:function(xt){H=xt},setClear:function(xt){Xn!==xt&&(a.clearStencil(xt),Xn=xt)},reset:function(){H=!1,ue=null,ge=null,Ce=null,Ie=null,ct=null,Ot=null,Jt=null,Xn=null}}}const c=new s,d=new o,h=new u,p=new WeakMap,g=new WeakMap;let _={},S={},M=new WeakMap,v=[],x=null,C=!1,P=null,w=null,E=null,A=null,k=null,D=null,T=null,L=!1,B=null,re=null,ne=null,X=null,j=null;const te=a.getParameter(35661);let oe=!1,le=0;const G=a.getParameter(7938);G.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(G)[1]),oe=le>=1):G.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),oe=le>=2);let ie=null,Y={};const F=a.getParameter(3088),O=a.getParameter(2978),se=new cn().fromArray(F),ce=new cn().fromArray(O);function W(H,ue,ge){const Ce=new Uint8Array(4),Ie=a.createTexture();a.bindTexture(H,Ie),a.texParameteri(H,10241,9728),a.texParameteri(H,10240,9728);for(let ct=0;ct<ge;ct++)a.texImage2D(ue+ct,0,6408,1,1,0,6408,5121,Ce);return Ie}const ve={};ve[3553]=W(3553,3553,1),ve[34067]=W(34067,34069,6),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Se(2929),d.setFunc(Gd),an(!1),Xt(bg),Se(2884),jt(Xr);function Se(H){_[H]!==!0&&(a.enable(H),_[H]=!0)}function ye(H){_[H]!==!1&&(a.disable(H),_[H]=!1)}function Me(H,ue){return S[H]!==ue?(a.bindFramebuffer(H,ue),S[H]=ue,i&&(H===36009&&(S[36160]=ue),H===36160&&(S[36009]=ue)),!0):!1}function Ne(H,ue){let ge=v,Ce=!1;if(H)if(ge=M.get(ue),ge===void 0&&(ge=[],M.set(ue,ge)),H.isWebGLMultipleRenderTargets){const Ie=H.texture;if(ge.length!==Ie.length||ge[0]!==36064){for(let ct=0,Ot=Ie.length;ct<Ot;ct++)ge[ct]=36064+ct;ge.length=Ie.length,Ce=!0}}else ge[0]!==36064&&(ge[0]=36064,Ce=!0);else ge[0]!==1029&&(ge[0]=1029,Ce=!0);Ce&&(t.isWebGL2?a.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ke(H){return x!==H?(a.useProgram(H),x=H,!0):!1}const Qe={[To]:32774,[KS]:32778,[ZS]:32779};if(i)Qe[Lg]=32775,Qe[Rg]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(Qe[Lg]=H.MIN_EXT,Qe[Rg]=H.MAX_EXT)}const nt={[QS]:0,[JS]:1,[e1]:768,[C0]:770,[o1]:776,[r1]:774,[n1]:772,[t1]:769,[P0]:771,[s1]:775,[i1]:773};function jt(H,ue,ge,Ce,Ie,ct,Ot,Jt){if(H===Xr){C===!0&&(ye(3042),C=!1);return}if(C===!1&&(Se(3042),C=!0),H!==$S){if(H!==P||Jt!==L){if((w!==To||k!==To)&&(a.blendEquation(32774),w=To,k=To),Jt)switch(H){case Po:a.blendFuncSeparate(1,771,1,771);break;case Cg:a.blendFunc(1,1);break;case Pg:a.blendFuncSeparate(0,769,0,1);break;case Ag:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Po:a.blendFuncSeparate(770,771,1,771);break;case Cg:a.blendFunc(770,1);break;case Pg:a.blendFuncSeparate(0,769,0,1);break;case Ag:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,A=null,D=null,T=null,P=H,L=Jt}return}Ie=Ie||ue,ct=ct||ge,Ot=Ot||Ce,(ue!==w||Ie!==k)&&(a.blendEquationSeparate(Qe[ue],Qe[Ie]),w=ue,k=Ie),(ge!==E||Ce!==A||ct!==D||Ot!==T)&&(a.blendFuncSeparate(nt[ge],nt[Ce],nt[ct],nt[Ot]),E=ge,A=Ce,D=ct,T=Ot),P=H,L=!1}function In(H,ue){H.side===Br?ye(2884):Se(2884);let ge=H.side===ri;ue&&(ge=!ge),an(ge),H.blending===Po&&H.transparent===!1?jt(Xr):jt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ce=H.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),dt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Se(32926):ye(32926)}function an(H){B!==H&&(H?a.frontFace(2304):a.frontFace(2305),B=H)}function Xt(H){H!==XS?(Se(2884),H!==re&&(H===bg?a.cullFace(1029):H===qS?a.cullFace(1028):a.cullFace(1032))):ye(2884),re=H}function vt(H){H!==ne&&(oe&&a.lineWidth(H),ne=H)}function dt(H,ue,ge){H?(Se(32823),(X!==ue||j!==ge)&&(a.polygonOffset(ue,ge),X=ue,j=ge)):ye(32823)}function dn(H){H?Se(3089):ye(3089)}function Qt(H){H===void 0&&(H=33984+te-1),ie!==H&&(a.activeTexture(H),ie=H)}function N(H,ue,ge){ge===void 0&&(ie===null?ge=33984+te-1:ge=ie);let Ce=Y[ge];Ce===void 0&&(Ce={type:void 0,texture:void 0},Y[ge]=Ce),(Ce.type!==H||Ce.texture!==ue)&&(ie!==ge&&(a.activeTexture(ge),ie=ge),a.bindTexture(H,ue||ve[H]),Ce.type=H,Ce.texture=ue)}function R(){const H=Y[ie];H!==void 0&&H.type!==void 0&&(a.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function fe(){try{a.compressedTexImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{a.compressedTexImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{a.texSubImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{a.texSubImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{a.texStorage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{a.texStorage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{a.texImage2D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{a.texImage3D.apply(a,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(H){se.equals(H)===!1&&(a.scissor(H.x,H.y,H.z,H.w),se.copy(H))}function Be(H){ce.equals(H)===!1&&(a.viewport(H.x,H.y,H.z,H.w),ce.copy(H))}function it(H,ue){let ge=g.get(ue);ge===void 0&&(ge=new WeakMap,g.set(ue,ge));let Ce=ge.get(H);Ce===void 0&&(Ce=a.getUniformBlockIndex(ue,H.name),ge.set(H,Ce))}function ht(H,ue){const Ce=g.get(ue).get(H);p.get(ue)!==Ce&&(a.uniformBlockBinding(ue,Ce,H.__bindingPointIndex),p.set(ue,Ce))}function Rt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},ie=null,Y={},S={},M=new WeakMap,v=[],x=null,C=!1,P=null,w=null,E=null,A=null,k=null,D=null,T=null,L=!1,B=null,re=null,ne=null,X=null,j=null,se.set(0,0,a.canvas.width,a.canvas.height),ce.set(0,0,a.canvas.width,a.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Se,disable:ye,bindFramebuffer:Me,drawBuffers:Ne,useProgram:Ke,setBlending:jt,setMaterial:In,setFlipSided:an,setCullFace:Xt,setLineWidth:vt,setPolygonOffset:dt,setScissorTest:dn,activeTexture:Qt,bindTexture:N,unbindTexture:R,compressedTexImage2D:fe,compressedTexImage3D:we,texImage2D:Oe,texImage3D:Xe,updateUBOMapping:it,uniformBlockBinding:ht,texStorage2D:he,texStorage3D:Ge,texSubImage2D:Ee,texSubImage3D:Pe,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Le,scissor:We,viewport:Be,reset:Rt}}function B3(a,e,t,i,s,o,u){const c=s.isWebGL2,d=s.maxTextures,h=s.maxCubemapSize,p=s.maxTextureSize,g=s.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let v;const x=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(N,R){return C?new OffscreenCanvas(N,R):Yu("canvas")}function w(N,R,fe,we){let Ee=1;if((N.width>we||N.height>we)&&(Ee=we/Math.max(N.width,N.height)),Ee<1||R===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Pe=R?W1:Math.floor,Fe=Pe(Ee*N.width),Le=Pe(Ee*N.height);v===void 0&&(v=P(Fe,Le));const he=fe?P(Fe,Le):v;return he.width=Fe,he.height=Le,he.getContext("2d").drawImage(N,0,0,Fe,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Fe+"x"+Le+")."),he}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function E(N){return s_(N.width)&&s_(N.height)}function A(N){return c?!1:N.wrapS!==ki||N.wrapT!==ki||N.minFilter!==Pn&&N.minFilter!==xi}function k(N,R){return N.generateMipmaps&&R&&N.minFilter!==Pn&&N.minFilter!==xi}function D(N){a.generateMipmap(N)}function T(N,R,fe,we,Ee=!1){if(c===!1)return R;if(N!==null){if(a[N]!==void 0)return a[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Pe=R;return R===6403&&(fe===5126&&(Pe=33326),fe===5131&&(Pe=33325),fe===5121&&(Pe=33321)),R===33319&&(fe===5126&&(Pe=33328),fe===5131&&(Pe=33327),fe===5121&&(Pe=33323)),R===6408&&(fe===5126&&(Pe=34836),fe===5131&&(Pe=34842),fe===5121&&(Pe=we===wt&&Ee===!1?35907:32856),fe===32819&&(Pe=32854),fe===32820&&(Pe=32855)),(Pe===33325||Pe===33326||Pe===33327||Pe===33328||Pe===34842||Pe===34836)&&e.get("EXT_color_buffer_float"),Pe}function L(N,R,fe){return k(N,fe)===!0||N.isFramebufferTexture&&N.minFilter!==Pn&&N.minFilter!==xi?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function B(N){return N===Pn||N===Dg||N===Zf?9728:9729}function re(N){const R=N.target;R.removeEventListener("dispose",re),X(R),R.isVideoTexture&&M.delete(R)}function ne(N){const R=N.target;R.removeEventListener("dispose",ne),te(R)}function X(N){const R=i.get(N);if(R.__webglInit===void 0)return;const fe=N.source,we=x.get(fe);if(we){const Ee=we[R.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&j(N),Object.keys(we).length===0&&x.delete(fe)}i.remove(N)}function j(N){const R=i.get(N);a.deleteTexture(R.__webglTexture);const fe=N.source,we=x.get(fe);delete we[R.__cacheKey],u.memory.textures--}function te(N){const R=N.texture,fe=i.get(N),we=i.get(R);if(we.__webglTexture!==void 0&&(a.deleteTexture(we.__webglTexture),u.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++)a.deleteFramebuffer(fe.__webglFramebuffer[Ee]),fe.__webglDepthbuffer&&a.deleteRenderbuffer(fe.__webglDepthbuffer[Ee]);else{if(a.deleteFramebuffer(fe.__webglFramebuffer),fe.__webglDepthbuffer&&a.deleteRenderbuffer(fe.__webglDepthbuffer),fe.__webglMultisampledFramebuffer&&a.deleteFramebuffer(fe.__webglMultisampledFramebuffer),fe.__webglColorRenderbuffer)for(let Ee=0;Ee<fe.__webglColorRenderbuffer.length;Ee++)fe.__webglColorRenderbuffer[Ee]&&a.deleteRenderbuffer(fe.__webglColorRenderbuffer[Ee]);fe.__webglDepthRenderbuffer&&a.deleteRenderbuffer(fe.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Ee=0,Pe=R.length;Ee<Pe;Ee++){const Fe=i.get(R[Ee]);Fe.__webglTexture&&(a.deleteTexture(Fe.__webglTexture),u.memory.textures--),i.remove(R[Ee])}i.remove(R),i.remove(N)}let oe=0;function le(){oe=0}function G(){const N=oe;return N>=d&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+d),oe+=1,N}function ie(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.encoding),R.join()}function Y(N,R){const fe=i.get(N);if(N.isVideoTexture&&dn(N),N.isRenderTargetTexture===!1&&N.version>0&&fe.__version!==N.version){const we=N.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(fe,N,R);return}}t.bindTexture(3553,fe.__webglTexture,33984+R)}function F(N,R){const fe=i.get(N);if(N.version>0&&fe.__version!==N.version){ye(fe,N,R);return}t.bindTexture(35866,fe.__webglTexture,33984+R)}function O(N,R){const fe=i.get(N);if(N.version>0&&fe.__version!==N.version){ye(fe,N,R);return}t.bindTexture(32879,fe.__webglTexture,33984+R)}function se(N,R){const fe=i.get(N);if(N.version>0&&fe.__version!==N.version){Me(fe,N,R);return}t.bindTexture(34067,fe.__webglTexture,33984+R)}const ce={[Hd]:10497,[ki]:33071,[jd]:33648},W={[Pn]:9728,[Dg]:9984,[Zf]:9986,[xi]:9729,[S1]:9985,[$a]:9987};function ve(N,R,fe){if(fe?(a.texParameteri(N,10242,ce[R.wrapS]),a.texParameteri(N,10243,ce[R.wrapT]),(N===32879||N===35866)&&a.texParameteri(N,32882,ce[R.wrapR]),a.texParameteri(N,10240,W[R.magFilter]),a.texParameteri(N,10241,W[R.minFilter])):(a.texParameteri(N,10242,33071),a.texParameteri(N,10243,33071),(N===32879||N===35866)&&a.texParameteri(N,32882,33071),(R.wrapS!==ki||R.wrapT!==ki)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(N,10240,B(R.magFilter)),a.texParameteri(N,10241,B(R.minFilter)),R.minFilter!==Pn&&R.minFilter!==xi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const we=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===Pn||R.minFilter!==Zf&&R.minFilter!==$a||R.type===Es&&e.has("OES_texture_float_linear")===!1||c===!1&&R.type===Ka&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||i.get(R).__currentAnisotropy)&&(a.texParameterf(N,we.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy)}}function Se(N,R){let fe=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",re));const we=R.source;let Ee=x.get(we);Ee===void 0&&(Ee={},x.set(we,Ee));const Pe=ie(R);if(Pe!==N.__cacheKey){Ee[Pe]===void 0&&(Ee[Pe]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,fe=!0),Ee[Pe].usedTimes++;const Fe=Ee[N.__cacheKey];Fe!==void 0&&(Ee[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&j(R)),N.__cacheKey=Pe,N.__webglTexture=Ee[Pe].texture}return fe}function ye(N,R,fe){let we=3553;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(we=35866),R.isData3DTexture&&(we=32879);const Ee=Se(N,R),Pe=R.source;t.bindTexture(we,N.__webglTexture,33984+fe);const Fe=i.get(Pe);if(Pe.version!==Fe.__version||Ee===!0){t.activeTexture(33984+fe),a.pixelStorei(37440,R.flipY),a.pixelStorei(37441,R.premultiplyAlpha),a.pixelStorei(3317,R.unpackAlignment),a.pixelStorei(37443,0);const Le=A(R)&&E(R.image)===!1;let he=w(R.image,Le,!1,p);he=Qt(R,he);const Ge=E(he)||c,Oe=o.convert(R.format,R.encoding);let Xe=o.convert(R.type),We=T(R.internalFormat,Oe,Xe,R.encoding,R.isVideoTexture);ve(we,R,Ge);let Be;const it=R.mipmaps,ht=c&&R.isVideoTexture!==!0,Rt=Fe.__version===void 0||Ee===!0,H=L(R,he,Ge);if(R.isDepthTexture)We=6402,c?R.type===Es?We=36012:R.type===Ts?We=33190:R.type===Ao?We=35056:We=33189:R.type===Es&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Cs&&We===6402&&R.type!==R0&&R.type!==Ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Ts,Xe=o.convert(R.type)),R.format===Oo&&We===6402&&(We=34041,R.type!==Ao&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Ao,Xe=o.convert(R.type))),Rt&&(ht?t.texStorage2D(3553,1,We,he.width,he.height):t.texImage2D(3553,0,We,he.width,he.height,0,Oe,Xe,null));else if(R.isDataTexture)if(it.length>0&&Ge){ht&&Rt&&t.texStorage2D(3553,H,We,it[0].width,it[0].height);for(let ue=0,ge=it.length;ue<ge;ue++)Be=it[ue],ht?t.texSubImage2D(3553,ue,0,0,Be.width,Be.height,Oe,Xe,Be.data):t.texImage2D(3553,ue,We,Be.width,Be.height,0,Oe,Xe,Be.data);R.generateMipmaps=!1}else ht?(Rt&&t.texStorage2D(3553,H,We,he.width,he.height),t.texSubImage2D(3553,0,0,0,he.width,he.height,Oe,Xe,he.data)):t.texImage2D(3553,0,We,he.width,he.height,0,Oe,Xe,he.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ht&&Rt&&t.texStorage3D(35866,H,We,it[0].width,it[0].height,he.depth);for(let ue=0,ge=it.length;ue<ge;ue++)Be=it[ue],R.format!==Ni?Oe!==null?ht?t.compressedTexSubImage3D(35866,ue,0,0,0,Be.width,Be.height,he.depth,Oe,Be.data,0,0):t.compressedTexImage3D(35866,ue,We,Be.width,Be.height,he.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage3D(35866,ue,0,0,0,Be.width,Be.height,he.depth,Oe,Xe,Be.data):t.texImage3D(35866,ue,We,Be.width,Be.height,he.depth,0,Oe,Xe,Be.data)}else{ht&&Rt&&t.texStorage2D(3553,H,We,it[0].width,it[0].height);for(let ue=0,ge=it.length;ue<ge;ue++)Be=it[ue],R.format!==Ni?Oe!==null?ht?t.compressedTexSubImage2D(3553,ue,0,0,Be.width,Be.height,Oe,Be.data):t.compressedTexImage2D(3553,ue,We,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage2D(3553,ue,0,0,Be.width,Be.height,Oe,Xe,Be.data):t.texImage2D(3553,ue,We,Be.width,Be.height,0,Oe,Xe,Be.data)}else if(R.isDataArrayTexture)ht?(Rt&&t.texStorage3D(35866,H,We,he.width,he.height,he.depth),t.texSubImage3D(35866,0,0,0,0,he.width,he.height,he.depth,Oe,Xe,he.data)):t.texImage3D(35866,0,We,he.width,he.height,he.depth,0,Oe,Xe,he.data);else if(R.isData3DTexture)ht?(Rt&&t.texStorage3D(32879,H,We,he.width,he.height,he.depth),t.texSubImage3D(32879,0,0,0,0,he.width,he.height,he.depth,Oe,Xe,he.data)):t.texImage3D(32879,0,We,he.width,he.height,he.depth,0,Oe,Xe,he.data);else if(R.isFramebufferTexture){if(Rt)if(ht)t.texStorage2D(3553,H,We,he.width,he.height);else{let ue=he.width,ge=he.height;for(let Ce=0;Ce<H;Ce++)t.texImage2D(3553,Ce,We,ue,ge,0,Oe,Xe,null),ue>>=1,ge>>=1}}else if(it.length>0&&Ge){ht&&Rt&&t.texStorage2D(3553,H,We,it[0].width,it[0].height);for(let ue=0,ge=it.length;ue<ge;ue++)Be=it[ue],ht?t.texSubImage2D(3553,ue,0,0,Oe,Xe,Be):t.texImage2D(3553,ue,We,Oe,Xe,Be);R.generateMipmaps=!1}else ht?(Rt&&t.texStorage2D(3553,H,We,he.width,he.height),t.texSubImage2D(3553,0,0,0,Oe,Xe,he)):t.texImage2D(3553,0,We,Oe,Xe,he);k(R,Ge)&&D(we),Fe.__version=Pe.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Me(N,R,fe){if(R.image.length!==6)return;const we=Se(N,R),Ee=R.source;t.bindTexture(34067,N.__webglTexture,33984+fe);const Pe=i.get(Ee);if(Ee.version!==Pe.__version||we===!0){t.activeTexture(33984+fe),a.pixelStorei(37440,R.flipY),a.pixelStorei(37441,R.premultiplyAlpha),a.pixelStorei(3317,R.unpackAlignment),a.pixelStorei(37443,0);const Fe=R.isCompressedTexture||R.image[0].isCompressedTexture,Le=R.image[0]&&R.image[0].isDataTexture,he=[];for(let ue=0;ue<6;ue++)!Fe&&!Le?he[ue]=w(R.image[ue],!1,!0,h):he[ue]=Le?R.image[ue].image:R.image[ue],he[ue]=Qt(R,he[ue]);const Ge=he[0],Oe=E(Ge)||c,Xe=o.convert(R.format,R.encoding),We=o.convert(R.type),Be=T(R.internalFormat,Xe,We,R.encoding),it=c&&R.isVideoTexture!==!0,ht=Pe.__version===void 0||we===!0;let Rt=L(R,Ge,Oe);ve(34067,R,Oe);let H;if(Fe){it&&ht&&t.texStorage2D(34067,Rt,Be,Ge.width,Ge.height);for(let ue=0;ue<6;ue++){H=he[ue].mipmaps;for(let ge=0;ge<H.length;ge++){const Ce=H[ge];R.format!==Ni?Xe!==null?it?t.compressedTexSubImage2D(34069+ue,ge,0,0,Ce.width,Ce.height,Xe,Ce.data):t.compressedTexImage2D(34069+ue,ge,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(34069+ue,ge,0,0,Ce.width,Ce.height,Xe,We,Ce.data):t.texImage2D(34069+ue,ge,Be,Ce.width,Ce.height,0,Xe,We,Ce.data)}}}else{H=R.mipmaps,it&&ht&&(H.length>0&&Rt++,t.texStorage2D(34067,Rt,Be,he[0].width,he[0].height));for(let ue=0;ue<6;ue++)if(Le){it?t.texSubImage2D(34069+ue,0,0,0,he[ue].width,he[ue].height,Xe,We,he[ue].data):t.texImage2D(34069+ue,0,Be,he[ue].width,he[ue].height,0,Xe,We,he[ue].data);for(let ge=0;ge<H.length;ge++){const Ie=H[ge].image[ue].image;it?t.texSubImage2D(34069+ue,ge+1,0,0,Ie.width,Ie.height,Xe,We,Ie.data):t.texImage2D(34069+ue,ge+1,Be,Ie.width,Ie.height,0,Xe,We,Ie.data)}}else{it?t.texSubImage2D(34069+ue,0,0,0,Xe,We,he[ue]):t.texImage2D(34069+ue,0,Be,Xe,We,he[ue]);for(let ge=0;ge<H.length;ge++){const Ce=H[ge];it?t.texSubImage2D(34069+ue,ge+1,0,0,Xe,We,Ce.image[ue]):t.texImage2D(34069+ue,ge+1,Be,Xe,We,Ce.image[ue])}}}k(R,Oe)&&D(34067),Pe.__version=Ee.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Ne(N,R,fe,we,Ee){const Pe=o.convert(fe.format,fe.encoding),Fe=o.convert(fe.type),Le=T(fe.internalFormat,Pe,Fe,fe.encoding);i.get(R).__hasExternalTextures||(Ee===32879||Ee===35866?t.texImage3D(Ee,0,Le,R.width,R.height,R.depth,0,Pe,Fe,null):t.texImage2D(Ee,0,Le,R.width,R.height,0,Pe,Fe,null)),t.bindFramebuffer(36160,N),dt(R)?_.framebufferTexture2DMultisampleEXT(36160,we,Ee,i.get(fe).__webglTexture,0,vt(R)):(Ee===3553||Ee>=34069&&Ee<=34074)&&a.framebufferTexture2D(36160,we,Ee,i.get(fe).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ke(N,R,fe){if(a.bindRenderbuffer(36161,N),R.depthBuffer&&!R.stencilBuffer){let we=33189;if(fe||dt(R)){const Ee=R.depthTexture;Ee&&Ee.isDepthTexture&&(Ee.type===Es?we=36012:Ee.type===Ts&&(we=33190));const Pe=vt(R);dt(R)?_.renderbufferStorageMultisampleEXT(36161,Pe,we,R.width,R.height):a.renderbufferStorageMultisample(36161,Pe,we,R.width,R.height)}else a.renderbufferStorage(36161,we,R.width,R.height);a.framebufferRenderbuffer(36160,36096,36161,N)}else if(R.depthBuffer&&R.stencilBuffer){const we=vt(R);fe&&dt(R)===!1?a.renderbufferStorageMultisample(36161,we,35056,R.width,R.height):dt(R)?_.renderbufferStorageMultisampleEXT(36161,we,35056,R.width,R.height):a.renderbufferStorage(36161,34041,R.width,R.height),a.framebufferRenderbuffer(36160,33306,36161,N)}else{const we=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Ee=0;Ee<we.length;Ee++){const Pe=we[Ee],Fe=o.convert(Pe.format,Pe.encoding),Le=o.convert(Pe.type),he=T(Pe.internalFormat,Fe,Le,Pe.encoding),Ge=vt(R);fe&&dt(R)===!1?a.renderbufferStorageMultisample(36161,Ge,he,R.width,R.height):dt(R)?_.renderbufferStorageMultisampleEXT(36161,Ge,he,R.width,R.height):a.renderbufferStorage(36161,he,R.width,R.height)}}a.bindRenderbuffer(36161,null)}function Qe(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Y(R.depthTexture,0);const we=i.get(R.depthTexture).__webglTexture,Ee=vt(R);if(R.depthTexture.format===Cs)dt(R)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,we,0,Ee):a.framebufferTexture2D(36160,36096,3553,we,0);else if(R.depthTexture.format===Oo)dt(R)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,we,0,Ee):a.framebufferTexture2D(36160,33306,3553,we,0);else throw new Error("Unknown depthTexture format")}function nt(N){const R=i.get(N),fe=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");Qe(R.__webglFramebuffer,N)}else if(fe){R.__webglDepthbuffer=[];for(let we=0;we<6;we++)t.bindFramebuffer(36160,R.__webglFramebuffer[we]),R.__webglDepthbuffer[we]=a.createRenderbuffer(),Ke(R.__webglDepthbuffer[we],N,!1)}else t.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=a.createRenderbuffer(),Ke(R.__webglDepthbuffer,N,!1);t.bindFramebuffer(36160,null)}function jt(N,R,fe){const we=i.get(N);R!==void 0&&Ne(we.__webglFramebuffer,N,N.texture,36064,3553),fe!==void 0&&nt(N)}function In(N){const R=N.texture,fe=i.get(N),we=i.get(R);N.addEventListener("dispose",ne),N.isWebGLMultipleRenderTargets!==!0&&(we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture()),we.__version=R.version,u.memory.textures++);const Ee=N.isWebGLCubeRenderTarget===!0,Pe=N.isWebGLMultipleRenderTargets===!0,Fe=E(N)||c;if(Ee){fe.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)fe.__webglFramebuffer[Le]=a.createFramebuffer()}else{if(fe.__webglFramebuffer=a.createFramebuffer(),Pe)if(s.drawBuffers){const Le=N.texture;for(let he=0,Ge=Le.length;he<Ge;he++){const Oe=i.get(Le[he]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=a.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&N.samples>0&&dt(N)===!1){const Le=Pe?R:[R];fe.__webglMultisampledFramebuffer=a.createFramebuffer(),fe.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer);for(let he=0;he<Le.length;he++){const Ge=Le[he];fe.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(36161,fe.__webglColorRenderbuffer[he]);const Oe=o.convert(Ge.format,Ge.encoding),Xe=o.convert(Ge.type),We=T(Ge.internalFormat,Oe,Xe,Ge.encoding,N.isXRRenderTarget===!0),Be=vt(N);a.renderbufferStorageMultisample(36161,Be,We,N.width,N.height),a.framebufferRenderbuffer(36160,36064+he,36161,fe.__webglColorRenderbuffer[he])}a.bindRenderbuffer(36161,null),N.depthBuffer&&(fe.__webglDepthRenderbuffer=a.createRenderbuffer(),Ke(fe.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(36160,null)}}if(Ee){t.bindTexture(34067,we.__webglTexture),ve(34067,R,Fe);for(let Le=0;Le<6;Le++)Ne(fe.__webglFramebuffer[Le],N,R,36064,34069+Le);k(R,Fe)&&D(34067),t.unbindTexture()}else if(Pe){const Le=N.texture;for(let he=0,Ge=Le.length;he<Ge;he++){const Oe=Le[he],Xe=i.get(Oe);t.bindTexture(3553,Xe.__webglTexture),ve(3553,Oe,Fe),Ne(fe.__webglFramebuffer,N,Oe,36064+he,3553),k(Oe,Fe)&&D(3553)}t.unbindTexture()}else{let Le=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(c?Le=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Le,we.__webglTexture),ve(Le,R,Fe),Ne(fe.__webglFramebuffer,N,R,36064,Le),k(R,Fe)&&D(Le),t.unbindTexture()}N.depthBuffer&&nt(N)}function an(N){const R=E(N)||c,fe=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let we=0,Ee=fe.length;we<Ee;we++){const Pe=fe[we];if(k(Pe,R)){const Fe=N.isWebGLCubeRenderTarget?34067:3553,Le=i.get(Pe).__webglTexture;t.bindTexture(Fe,Le),D(Fe),t.unbindTexture()}}}function Xt(N){if(c&&N.samples>0&&dt(N)===!1){const R=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],fe=N.width,we=N.height;let Ee=16384;const Pe=[],Fe=N.stencilBuffer?33306:36096,Le=i.get(N),he=N.isWebGLMultipleRenderTargets===!0;if(he)for(let Ge=0;Ge<R.length;Ge++)t.bindFramebuffer(36160,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Ge,36161,null),t.bindFramebuffer(36160,Le.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Ge,3553,null,0);t.bindFramebuffer(36008,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Le.__webglFramebuffer);for(let Ge=0;Ge<R.length;Ge++){Pe.push(36064+Ge),N.depthBuffer&&Pe.push(Fe);const Oe=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(Oe===!1&&(N.depthBuffer&&(Ee|=256),N.stencilBuffer&&(Ee|=1024)),he&&a.framebufferRenderbuffer(36008,36064,36161,Le.__webglColorRenderbuffer[Ge]),Oe===!0&&(a.invalidateFramebuffer(36008,[Fe]),a.invalidateFramebuffer(36009,[Fe])),he){const Xe=i.get(R[Ge]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Xe,0)}a.blitFramebuffer(0,0,fe,we,0,0,fe,we,Ee,9728),S&&a.invalidateFramebuffer(36008,Pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),he)for(let Ge=0;Ge<R.length;Ge++){t.bindFramebuffer(36160,Le.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Ge,36161,Le.__webglColorRenderbuffer[Ge]);const Oe=i.get(R[Ge]).__webglTexture;t.bindFramebuffer(36160,Le.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Ge,3553,Oe,0)}t.bindFramebuffer(36009,Le.__webglMultisampledFramebuffer)}}function vt(N){return Math.min(g,N.samples)}function dt(N){const R=i.get(N);return c&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function dn(N){const R=u.render.frame;M.get(N)!==R&&(M.set(N,R),N.update())}function Qt(N,R){const fe=N.encoding,we=N.format,Ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Xd||fe!==Is&&(fe===wt?c===!1?e.has("EXT_sRGB")===!0&&we===Ni?(N.format=Xd,N.minFilter=xi,N.generateMipmaps=!1):R=k0.sRGBToLinear(R):(we!==Ni||Ee!==Ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",fe)),R}this.allocateTextureUnit=G,this.resetTextureUnits=le,this.setTexture2D=Y,this.setTexture2DArray=F,this.setTexture3D=O,this.setTextureCube=se,this.rebindTextures=jt,this.setupRenderTarget=In,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=dt}function G3(a,e,t){const i=t.isWebGL2;function s(o,u=null){let c;if(o===Ds)return 5121;if(o===E1)return 32819;if(o===b1)return 32820;if(o===M1)return 5120;if(o===w1)return 5122;if(o===R0)return 5123;if(o===T1)return 5124;if(o===Ts)return 5125;if(o===Es)return 5126;if(o===Ka)return i?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===C1)return 6406;if(o===Ni)return 6408;if(o===P1)return 6409;if(o===A1)return 6410;if(o===Cs)return 6402;if(o===Oo)return 34041;if(o===Xd)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===L1)return 6403;if(o===R1)return 36244;if(o===D1)return 33319;if(o===I1)return 33320;if(o===k1)return 36249;if(o===Qf||o===Jf||o===ed||o===td)if(u===wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===Qf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Jf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ed)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===td)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===Qf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Jf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ed)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===td)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Ig||o===kg||o===Ng||o===Og)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===Ig)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===kg)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Ng)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Og)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===N1)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===zg||o===Fg)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===zg)return u===wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===Fg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Ug||o===Bg||o===Gg||o===Vg||o===Wg||o===Hg||o===jg||o===Xg||o===qg||o===Yg||o===$g||o===Kg||o===Zg||o===Qg)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===Ug)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Bg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Gg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Vg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Wg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Hg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===jg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Xg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===qg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Yg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===$g)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Kg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Zg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Qg)return u===wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===nd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===nd)return u===wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===O1||o===Jg||o===e_||o===t_)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(o===nd)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Jg)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===e_)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===t_)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ao?i?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):a[o]!==void 0?a[o]:null}return{convert:s}}class V3 extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zu extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W3={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,i),C=this._getHandJoint(h,v);x!==null&&(C.matrix.fromArray(x.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.jointRadius=x.radius),C.visible=x!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=p.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&_>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(W3)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class H3 extends si{constructor(e,t,i,s,o,u,c,d,h,p){if(p=p!==void 0?p:Cs,p!==Cs&&p!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Cs&&(i=Ts),i===void 0&&p===Oo&&(i=Ao),super(null,s,o,u,c,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Pn,this.minFilter=d!==void 0?d:Pn,this.flipY=!1,this.generateMipmaps=!1}}class j3 extends jo{constructor(e,t){super();const i=this;let s=null,o=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,_=null,S=null,M=null;const v=t.getContextAttributes();let x=null,C=null;const P=[],w=[],E=new Set,A=new Map,k=new yi;k.layers.enable(1),k.viewport=new cn;const D=new yi;D.layers.enable(2),D.viewport=new cn;const T=[k,D],L=new V3;L.layers.enable(1),L.layers.enable(2);let B=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let se=P[O];return se===void 0&&(se=new Pd,P[O]=se),se.getTargetRaySpace()},this.getControllerGrip=function(O){let se=P[O];return se===void 0&&(se=new Pd,P[O]=se),se.getGripSpace()},this.getHand=function(O){let se=P[O];return se===void 0&&(se=new Pd,P[O]=se),se.getHandSpace()};function ne(O){const se=w.indexOf(O.inputSource);if(se===-1)return;const ce=P[se];ce!==void 0&&ce.dispatchEvent({type:O.type,data:O.inputSource})}function X(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let O=0;O<P.length;O++){const se=w[O];se!==null&&(w[O]=null,P[O].disconnect(se))}B=null,re=null,e.setRenderTarget(x),S=null,_=null,g=null,s=null,C=null,F.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){c=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(O){h=O},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};S=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:S}),C=new ks(S.framebufferWidth,S.framebufferHeight,{format:Ni,type:Ds,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let se=null,ce=null,W=null;v.depth&&(W=v.stencil?35056:33190,se=v.stencil?Oo:Cs,ce=v.stencil?Ao:Ts);const ve={colorFormat:32856,depthFormat:W,scaleFactor:o};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(ve),s.updateRenderState({layers:[_]}),C=new ks(_.textureWidth,_.textureHeight,{format:Ni,type:Ds,depthTexture:new H3(_.textureWidth,_.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Se=e.properties.get(C);Se.__ignoreDepthValues=_.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),F.setContext(s),F.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function j(O){for(let se=0;se<O.removed.length;se++){const ce=O.removed[se],W=w.indexOf(ce);W>=0&&(w[W]=null,P[W].disconnect(ce))}for(let se=0;se<O.added.length;se++){const ce=O.added[se];let W=w.indexOf(ce);if(W===-1){for(let Se=0;Se<P.length;Se++)if(Se>=w.length){w.push(ce),W=Se;break}else if(w[Se]===null){w[Se]=ce,W=Se;break}if(W===-1)break}const ve=P[W];ve&&ve.connect(ce)}}const te=new Q,oe=new Q;function le(O,se,ce){te.setFromMatrixPosition(se.matrixWorld),oe.setFromMatrixPosition(ce.matrixWorld);const W=te.distanceTo(oe),ve=se.projectionMatrix.elements,Se=ce.projectionMatrix.elements,ye=ve[14]/(ve[10]-1),Me=ve[14]/(ve[10]+1),Ne=(ve[9]+1)/ve[5],Ke=(ve[9]-1)/ve[5],Qe=(ve[8]-1)/ve[0],nt=(Se[8]+1)/Se[0],jt=ye*Qe,In=ye*nt,an=W/(-Qe+nt),Xt=an*-Qe;se.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Xt),O.translateZ(an),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const vt=ye+an,dt=Me+an,dn=jt-Xt,Qt=In+(W-Xt),N=Ne*Me/dt*vt,R=Ke*Me/dt*vt;O.projectionMatrix.makePerspective(dn,Qt,N,R,vt,dt)}function G(O,se){se===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(se.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;L.near=D.near=k.near=O.near,L.far=D.far=k.far=O.far,(B!==L.near||re!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,re=L.far);const se=O.parent,ce=L.cameras;G(L,se);for(let ve=0;ve<ce.length;ve++)G(ce[ve],se);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),O.matrix.copy(L.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const W=O.children;for(let ve=0,Se=W.length;ve<Se;ve++)W[ve].updateMatrixWorld(!0);ce.length===2?le(L,k,D):L.projectionMatrix.copy(k.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(O){d=O,_!==null&&(_.fixedFoveation=O),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=O)},this.getPlanes=function(){return E};let ie=null;function Y(O,se){if(p=se.getViewerPose(h||u),M=se,p!==null){const ce=p.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let W=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,W=!0);for(let ve=0;ve<ce.length;ve++){const Se=ce[ve];let ye=null;if(S!==null)ye=S.getViewport(Se);else{const Ne=g.getViewSubImage(_,Se);ye=Ne.viewport,ve===0&&(e.setRenderTargetTextures(C,Ne.colorTexture,_.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(C))}let Me=T[ve];Me===void 0&&(Me=new yi,Me.layers.enable(ve),Me.viewport=new cn,T[ve]=Me),Me.matrix.fromArray(Se.transform.matrix),Me.projectionMatrix.fromArray(Se.projectionMatrix),Me.viewport.set(ye.x,ye.y,ye.width,ye.height),ve===0&&L.matrix.copy(Me.matrix),W===!0&&L.cameras.push(Me)}}for(let ce=0;ce<P.length;ce++){const W=w[ce],ve=P[ce];W!==null&&ve!==void 0&&ve.update(W,se,h||u)}if(ie&&ie(O,se),se.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:se.detectedPlanes});let ce=null;for(const W of E)se.detectedPlanes.has(W)||(ce===null&&(ce=[]),ce.push(W));if(ce!==null)for(const W of ce)E.delete(W),A.delete(W),i.dispatchEvent({type:"planeremoved",data:W});for(const W of se.detectedPlanes)if(!E.has(W))E.add(W),A.set(W,se.lastChangedTime),i.dispatchEvent({type:"planeadded",data:W});else{const ve=A.get(W);W.lastChangedTime>ve&&(A.set(W,W.lastChangedTime),i.dispatchEvent({type:"planechanged",data:W}))}}M=null}const F=new j0;F.setAnimationLoop(Y),this.setAnimationLoop=function(O){ie=O},this.dispose=function(){}}}function X3(a,e){function t(v,x){x.color.getRGB(v.fogColor.value,G0(a)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function i(v,x,C,P,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?s(v,x):x.isMeshToonMaterial?(s(v,x),p(v,x)):x.isMeshPhongMaterial?(s(v,x),h(v,x)):x.isMeshStandardMaterial?(s(v,x),g(v,x),x.isMeshPhysicalMaterial&&_(v,x,w)):x.isMeshMatcapMaterial?(s(v,x),S(v,x)):x.isMeshDepthMaterial?s(v,x):x.isMeshDistanceMaterial?(s(v,x),M(v,x)):x.isMeshNormalMaterial?s(v,x):x.isLineBasicMaterial?(o(v,x),x.isLineDashedMaterial&&u(v,x)):x.isPointsMaterial?c(v,x,C,P):x.isSpriteMaterial?d(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map),x.alphaMap&&(v.alphaMap.value=x.alphaMap),x.bumpMap&&(v.bumpMap.value=x.bumpMap,v.bumpScale.value=x.bumpScale,x.side===ri&&(v.bumpScale.value*=-1)),x.displacementMap&&(v.displacementMap.value=x.displacementMap,v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap),x.normalMap&&(v.normalMap.value=x.normalMap,v.normalScale.value.copy(x.normalScale),x.side===ri&&v.normalScale.value.negate()),x.specularMap&&(v.specularMap.value=x.specularMap),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const C=e.get(x).envMap;if(C&&(v.envMap.value=C,v.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap){v.lightMap.value=x.lightMap;const E=a.useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=x.lightMapIntensity*E}x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity);let P;x.map?P=x.map:x.specularMap?P=x.specularMap:x.displacementMap?P=x.displacementMap:x.normalMap?P=x.normalMap:x.bumpMap?P=x.bumpMap:x.roughnessMap?P=x.roughnessMap:x.metalnessMap?P=x.metalnessMap:x.alphaMap?P=x.alphaMap:x.emissiveMap?P=x.emissiveMap:x.clearcoatMap?P=x.clearcoatMap:x.clearcoatNormalMap?P=x.clearcoatNormalMap:x.clearcoatRoughnessMap?P=x.clearcoatRoughnessMap:x.iridescenceMap?P=x.iridescenceMap:x.iridescenceThicknessMap?P=x.iridescenceThicknessMap:x.specularIntensityMap?P=x.specularIntensityMap:x.specularColorMap?P=x.specularColorMap:x.transmissionMap?P=x.transmissionMap:x.thicknessMap?P=x.thicknessMap:x.sheenColorMap?P=x.sheenColorMap:x.sheenRoughnessMap&&(P=x.sheenRoughnessMap),P!==void 0&&(P.isWebGLRenderTarget&&(P=P.texture),P.matrixAutoUpdate===!0&&P.updateMatrix(),v.uvTransform.value.copy(P.matrix));let w;x.aoMap?w=x.aoMap:x.lightMap&&(w=x.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),v.uv2Transform.value.copy(w.matrix))}function o(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity}function u(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function c(v,x,C,P){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*C,v.scale.value=P*.5,x.map&&(v.map.value=x.map),x.alphaMap&&(v.alphaMap.value=x.alphaMap),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);let w;x.map?w=x.map:x.alphaMap&&(w=x.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),v.uvTransform.value.copy(w.matrix))}function d(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map),x.alphaMap&&(v.alphaMap.value=x.alphaMap),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);let C;x.map?C=x.map:x.alphaMap&&(C=x.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),v.uvTransform.value.copy(C.matrix))}function h(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function p(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function g(v,x){v.roughness.value=x.roughness,v.metalness.value=x.metalness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap),e.get(x).envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function _(v,x,C){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap)),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),v.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===ri&&v.clearcoatNormalScale.value.negate())),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap)),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=C.texture,v.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap)}function S(v,x){x.matcap&&(v.matcap.value=x.matcap)}function M(v,x){v.referencePosition.value.copy(x.referencePosition),v.nearDistance.value=x.nearDistance,v.farDistance.value=x.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function q3(a,e,t,i){let s={},o={},u=[];const c=t.isWebGL2?a.getParameter(35375):0;function d(P,w){const E=w.program;i.uniformBlockBinding(P,E)}function h(P,w){let E=s[P.id];E===void 0&&(M(P),E=p(P),s[P.id]=E,P.addEventListener("dispose",x));const A=w.program;i.updateUBOMapping(P,A);const k=e.render.frame;o[P.id]!==k&&(_(P),o[P.id]=k)}function p(P){const w=g();P.__bindingPointIndex=w;const E=a.createBuffer(),A=P.__size,k=P.usage;return a.bindBuffer(35345,E),a.bufferData(35345,A,k),a.bindBuffer(35345,null),a.bindBufferBase(35345,w,E),E}function g(){for(let P=0;P<c;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const w=s[P.id],E=P.uniforms,A=P.__cache;a.bindBuffer(35345,w);for(let k=0,D=E.length;k<D;k++){const T=E[k];if(S(T,k,A)===!0){const L=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let re=0;for(let ne=0;ne<B.length;ne++){const X=B[ne],j=v(X);typeof X=="number"?(T.__data[0]=X,a.bufferSubData(35345,L+re,T.__data)):X.isMatrix3?(T.__data[0]=X.elements[0],T.__data[1]=X.elements[1],T.__data[2]=X.elements[2],T.__data[3]=X.elements[0],T.__data[4]=X.elements[3],T.__data[5]=X.elements[4],T.__data[6]=X.elements[5],T.__data[7]=X.elements[0],T.__data[8]=X.elements[6],T.__data[9]=X.elements[7],T.__data[10]=X.elements[8],T.__data[11]=X.elements[0]):(X.toArray(T.__data,re),re+=j.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,L,T.__data)}}a.bindBuffer(35345,null)}function S(P,w,E){const A=P.value;if(E[w]===void 0){if(typeof A=="number")E[w]=A;else{const k=Array.isArray(A)?A:[A],D=[];for(let T=0;T<k.length;T++)D.push(k[T].clone());E[w]=D}return!0}else if(typeof A=="number"){if(E[w]!==A)return E[w]=A,!0}else{const k=Array.isArray(E[w])?E[w]:[E[w]],D=Array.isArray(A)?A:[A];for(let T=0;T<k.length;T++){const L=k[T];if(L.equals(D[T])===!1)return L.copy(D[T]),!0}}return!1}function M(P){const w=P.uniforms;let E=0;const A=16;let k=0;for(let D=0,T=w.length;D<T;D++){const L=w[D],B={boundary:0,storage:0},re=Array.isArray(L.value)?L.value:[L.value];for(let ne=0,X=re.length;ne<X;ne++){const j=re[ne],te=v(j);B.boundary+=te.boundary,B.storage+=te.storage}if(L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,D>0){k=E%A;const ne=A-k;k!==0&&ne-B.boundary<0&&(E+=A-k,L.__offset=E)}E+=B.storage}return k=E%A,k>0&&(E+=A-k),P.__size=E,P.__cache={},this}function v(P){const w={boundary:0,storage:0};return typeof P=="number"?(w.boundary=4,w.storage=4):P.isVector2?(w.boundary=8,w.storage=8):P.isVector3||P.isColor?(w.boundary=16,w.storage=12):P.isVector4?(w.boundary=16,w.storage=16):P.isMatrix3?(w.boundary=48,w.storage=48):P.isMatrix4?(w.boundary=64,w.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),w}function x(P){const w=P.target;w.removeEventListener("dispose",x);const E=u.indexOf(w.__bindingPointIndex);u.splice(E,1),a.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function C(){for(const P in s)a.deleteBuffer(s[P]);u=[],s={},o={}}return{bind:d,update:h,dispose:C}}function Y3(){const a=Yu("canvas");return a.style.display="block",a}function xh(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Y3(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,s=a.stencil!==void 0?a.stencil:!0,o=a.antialias!==void 0?a.antialias:!1,u=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,c=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,d=a.powerPreference!==void 0?a.powerPreference:"default",h=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=a.alpha!==void 0?a.alpha:!1;let g=null,_=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Is,this.useLegacyLights=!0,this.toneMapping=hr,this.toneMappingExposure=1;const v=this;let x=!1,C=0,P=0,w=null,E=-1,A=null;const k=new cn,D=new cn;let T=null,L=e.width,B=e.height,re=1,ne=null,X=null;const j=new cn(0,0,L,B),te=new cn(0,0,L,B);let oe=!1;const le=new H0;let G=!1,ie=!1,Y=null;const F=new $t,O=new Q,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return w===null?re:1}let W=t;function ve(I,J){for(let ae=0;ae<I.length;ae++){const K=I[ae],de=e.getContext(K,J);if(de!==null)return de}return null}try{const I={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ph}`),e.addEventListener("webglcontextlost",Xe,!1),e.addEventListener("webglcontextrestored",We,!1),e.addEventListener("webglcontextcreationerror",Be,!1),W===null){const J=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&J.shift(),W=ve(J,I),W===null)throw ve(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Se,ye,Me,Ne,Ke,Qe,nt,jt,In,an,Xt,vt,dt,dn,Qt,N,R,fe,we,Ee,Pe,Fe,Le,he;function Ge(){Se=new s2(W),ye=new QT(W,Se,a),Se.init(ye),Fe=new G3(W,Se,ye),Me=new U3(W,Se,ye),Ne=new l2,Ke=new E3,Qe=new B3(W,Se,Me,Ke,ye,Fe,Ne),nt=new e2(v),jt=new r2(v),In=new gM(W,ye),Le=new KT(W,Se,In,ye),an=new o2(W,In,Ne,Le),Xt=new d2(W,an,In,Ne),we=new f2(W,ye,Qe),N=new JT(Ke),vt=new T3(v,nt,jt,Se,ye,Le,N),dt=new X3(v,Ke),dn=new C3,Qt=new I3(Se,ye),fe=new $T(v,nt,jt,Me,Xt,p,u),R=new F3(v,Xt,ye),he=new q3(W,Ne,ye,Me),Ee=new ZT(W,Se,Ne,ye),Pe=new a2(W,Se,Ne,ye),Ne.programs=vt.programs,v.capabilities=ye,v.extensions=Se,v.properties=Ke,v.renderLists=dn,v.shadowMap=R,v.state=Me,v.info=Ne}Ge();const Oe=new j3(v,W);this.xr=Oe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const I=Se.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Se.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(I){I!==void 0&&(re=I,this.setSize(L,B,!1))},this.getSize=function(I){return I.set(L,B)},this.setSize=function(I,J,ae=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=I,B=J,e.width=Math.floor(I*re),e.height=Math.floor(J*re),ae===!0&&(e.style.width=I+"px",e.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(L*re,B*re).floor()},this.setDrawingBufferSize=function(I,J,ae){L=I,B=J,re=ae,e.width=Math.floor(I*ae),e.height=Math.floor(J*ae),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(k)},this.getViewport=function(I){return I.copy(j)},this.setViewport=function(I,J,ae,K){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,J,ae,K),Me.viewport(k.copy(j).multiplyScalar(re).floor())},this.getScissor=function(I){return I.copy(te)},this.setScissor=function(I,J,ae,K){I.isVector4?te.set(I.x,I.y,I.z,I.w):te.set(I,J,ae,K),Me.scissor(D.copy(te).multiplyScalar(re).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(I){Me.setScissorTest(oe=I)},this.setOpaqueSort=function(I){ne=I},this.setTransparentSort=function(I){X=I},this.getClearColor=function(I){return I.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(I=!0,J=!0,ae=!0){let K=0;I&&(K|=16384),J&&(K|=256),ae&&(K|=1024),W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xe,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",Be,!1),dn.dispose(),Qt.dispose(),Ke.dispose(),nt.dispose(),jt.dispose(),Xt.dispose(),Le.dispose(),he.dispose(),vt.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",ge),Oe.removeEventListener("sessionend",Ce),Y&&(Y.dispose(),Y=null),Ie.stop()};function Xe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const I=Ne.autoReset,J=R.enabled,ae=R.autoUpdate,K=R.needsUpdate,de=R.type;Ge(),Ne.autoReset=I,R.enabled=J,R.autoUpdate=ae,R.needsUpdate=K,R.type=de}function Be(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function it(I){const J=I.target;J.removeEventListener("dispose",it),ht(J)}function ht(I){Rt(I),Ke.remove(I)}function Rt(I){const J=Ke.get(I).programs;J!==void 0&&(J.forEach(function(ae){vt.releaseProgram(ae)}),I.isShaderMaterial&&vt.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,ae,K,de,Ve){J===null&&(J=se);const $e=de.isMesh&&de.matrixWorld.determinant()<0,Ye=Yo(I,J,ae,K,de);Me.setMaterial(K,$e);let Ze=ae.index,st=1;K.wireframe===!0&&(Ze=an.getWireframeAttribute(ae),st=2);const rt=ae.drawRange,tt=ae.attributes.position;let bt=rt.start*st,pn=(rt.start+rt.count)*st;Ve!==null&&(bt=Math.max(bt,Ve.start*st),pn=Math.min(pn,(Ve.start+Ve.count)*st)),Ze!==null?(bt=Math.max(bt,0),pn=Math.min(pn,Ze.count)):tt!=null&&(bt=Math.max(bt,0),pn=Math.min(pn,tt.count));const ci=pn-bt;if(ci<0||ci===1/0)return;Le.setup(de,K,Ye,ae,Ze);let $i,Dt=Ee;if(Ze!==null&&($i=In.get(Ze),Dt=Pe,Dt.setIndex($i)),de.isMesh)K.wireframe===!0?(Me.setLineWidth(K.wireframeLinewidth*ce()),Dt.setMode(1)):Dt.setMode(4);else if(de.isLine){let Ue=K.linewidth;Ue===void 0&&(Ue=1),Me.setLineWidth(Ue*ce()),de.isLineSegments?Dt.setMode(1):de.isLineLoop?Dt.setMode(2):Dt.setMode(3)}else de.isPoints?Dt.setMode(0):de.isSprite&&Dt.setMode(4);if(de.isInstancedMesh)Dt.renderInstances(bt,ci,de.count);else if(ae.isInstancedBufferGeometry){const Ue=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,$o=Math.min(ae.instanceCount,Ue);Dt.renderInstances(bt,ci,$o)}else Dt.render(bt,ci)},this.compile=function(I,J){function ae(K,de,Ve){K.transparent===!0&&K.side===Br&&K.forceSinglePass===!1?(K.side=ri,K.needsUpdate=!0,wn(K,de,Ve),K.side=$r,K.needsUpdate=!0,wn(K,de,Ve),K.side=Br):wn(K,de,Ve)}_=Qt.get(I),_.init(),M.push(_),I.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights(v.useLegacyLights),I.traverse(function(K){const de=K.material;if(de)if(Array.isArray(de))for(let Ve=0;Ve<de.length;Ve++){const $e=de[Ve];ae($e,I,K)}else ae(de,I,K)}),M.pop(),_=null};let H=null;function ue(I){H&&H(I)}function ge(){Ie.stop()}function Ce(){Ie.start()}const Ie=new j0;Ie.setAnimationLoop(ue),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(I){H=I,Oe.setAnimationLoop(I),I===null?Ie.stop():Ie.start()},Oe.addEventListener("sessionstart",ge),Oe.addEventListener("sessionend",Ce),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(J),J=Oe.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,J,w),_=Qt.get(I,M.length),_.init(),M.push(_),F.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),le.setFromProjectionMatrix(F),ie=this.localClippingEnabled,G=N.init(this.clippingPlanes,ie),g=dn.get(I,S.length),g.init(),S.push(g),ct(I,J,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ne,X),G===!0&&N.beginShadows();const ae=_.state.shadowsArray;if(R.render(ae,I,J),G===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(g,I),_.setupLights(v.useLegacyLights),J.isArrayCamera){const K=J.cameras;for(let de=0,Ve=K.length;de<Ve;de++){const $e=K[de];Ot(g,I,$e,$e.viewport)}}else Ot(g,I,J);w!==null&&(Qe.updateMultisampleRenderTarget(w),Qe.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(v,I,J),Le.resetDefaultState(),E=-1,A=null,M.pop(),M.length>0?_=M[M.length-1]:_=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function ct(I,J,ae,K){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)ae=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||le.intersectsSprite(I)){K&&O.setFromMatrixPosition(I.matrixWorld).applyMatrix4(F);const $e=Xt.update(I),Ye=I.material;Ye.visible&&g.push(I,$e,Ye,ae,O.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(I.isSkinnedMesh&&I.skeleton.frame!==Ne.render.frame&&(I.skeleton.update(),I.skeleton.frame=Ne.render.frame),!I.frustumCulled||le.intersectsObject(I))){K&&O.setFromMatrixPosition(I.matrixWorld).applyMatrix4(F);const $e=Xt.update(I),Ye=I.material;if(Array.isArray(Ye)){const Ze=$e.groups;for(let st=0,rt=Ze.length;st<rt;st++){const tt=Ze[st],bt=Ye[tt.materialIndex];bt&&bt.visible&&g.push(I,$e,bt,ae,O.z,tt)}}else Ye.visible&&g.push(I,$e,Ye,ae,O.z,null)}}const Ve=I.children;for(let $e=0,Ye=Ve.length;$e<Ye;$e++)ct(Ve[$e],J,ae,K)}function Ot(I,J,ae,K){const de=I.opaque,Ve=I.transmissive,$e=I.transparent;_.setupLightsView(ae),G===!0&&N.setGlobalState(v.clippingPlanes,ae),Ve.length>0&&Jt(de,J,ae),K&&Me.viewport(k.copy(K)),de.length>0&&Xn(de,J,ae),Ve.length>0&&Xn(Ve,J,ae),$e.length>0&&Xn($e,J,ae),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Jt(I,J,ae){const K=ye.isWebGL2;Y===null&&(Y=new ks(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ka:Ds,minFilter:$a,samples:K&&o===!0?4:0}));const de=v.getRenderTarget();v.setRenderTarget(Y),v.clear();const Ve=v.toneMapping;v.toneMapping=hr,Xn(I,J,ae),v.toneMapping=Ve,Qe.updateMultisampleRenderTarget(Y),Qe.updateRenderTargetMipmap(Y),v.setRenderTarget(de)}function Xn(I,J,ae){const K=J.isScene===!0?J.overrideMaterial:null;for(let de=0,Ve=I.length;de<Ve;de++){const $e=I[de],Ye=$e.object,Ze=$e.geometry,st=K===null?$e.material:K,rt=$e.group;Ye.layers.test(ae.layers)&&xt(Ye,J,ae,Ze,st,rt)}}function xt(I,J,ae,K,de,Ve){I.onBeforeRender(v,J,ae,K,de,Ve),I.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),de.onBeforeRender(v,J,ae,K,I,Ve),de.transparent===!0&&de.side===Br&&de.forceSinglePass===!1?(de.side=ri,de.needsUpdate=!0,v.renderBufferDirect(ae,J,K,de,I,Ve),de.side=$r,de.needsUpdate=!0,v.renderBufferDirect(ae,J,K,de,I,Ve),de.side=Br):v.renderBufferDirect(ae,J,K,de,I,Ve),I.onAfterRender(v,J,ae,K,de,Ve)}function wn(I,J,ae){J.isScene!==!0&&(J=se);const K=Ke.get(I),de=_.state.lights,Ve=_.state.shadowsArray,$e=de.state.version,Ye=vt.getParameters(I,de.state,Ve,J,ae),Ze=vt.getProgramCacheKey(Ye);let st=K.programs;K.environment=I.isMeshStandardMaterial?J.environment:null,K.fog=J.fog,K.envMap=(I.isMeshStandardMaterial?jt:nt).get(I.envMap||K.environment),st===void 0&&(I.addEventListener("dispose",it),st=new Map,K.programs=st);let rt=st.get(Ze);if(rt!==void 0){if(K.currentProgram===rt&&K.lightsStateVersion===$e)return hn(I,Ye),rt}else Ye.uniforms=vt.getUniforms(I),I.onBuild(ae,Ye,v),I.onBeforeCompile(Ye,v),rt=vt.acquireProgram(Ye,Ze),st.set(Ze,rt),K.uniforms=Ye.uniforms;const tt=K.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(tt.clippingPlanes=N.uniform),hn(I,Ye),K.needsLights=uc(I),K.lightsStateVersion=$e,K.needsLights&&(tt.ambientLightColor.value=de.state.ambient,tt.lightProbe.value=de.state.probe,tt.directionalLights.value=de.state.directional,tt.directionalLightShadows.value=de.state.directionalShadow,tt.spotLights.value=de.state.spot,tt.spotLightShadows.value=de.state.spotShadow,tt.rectAreaLights.value=de.state.rectArea,tt.ltc_1.value=de.state.rectAreaLTC1,tt.ltc_2.value=de.state.rectAreaLTC2,tt.pointLights.value=de.state.point,tt.pointLightShadows.value=de.state.pointShadow,tt.hemisphereLights.value=de.state.hemi,tt.directionalShadowMap.value=de.state.directionalShadowMap,tt.directionalShadowMatrix.value=de.state.directionalShadowMatrix,tt.spotShadowMap.value=de.state.spotShadowMap,tt.spotLightMatrix.value=de.state.spotLightMatrix,tt.spotLightMap.value=de.state.spotLightMap,tt.pointShadowMap.value=de.state.pointShadowMap,tt.pointShadowMatrix.value=de.state.pointShadowMatrix);const bt=rt.getUniforms(),pn=Wu.seqWithValue(bt.seq,tt);return K.currentProgram=rt,K.uniformsList=pn,rt}function hn(I,J){const ae=Ke.get(I);ae.outputEncoding=J.outputEncoding,ae.instancing=J.instancing,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function Yo(I,J,ae,K,de){J.isScene!==!0&&(J=se),Qe.resetTextureUnits();const Ve=J.fog,$e=K.isMeshStandardMaterial?J.environment:null,Ye=w===null?v.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Is,Ze=(K.isMeshStandardMaterial?jt:nt).get(K.envMap||$e),st=K.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,rt=!!K.normalMap&&!!ae.attributes.tangent,tt=!!ae.morphAttributes.position,bt=!!ae.morphAttributes.normal,pn=!!ae.morphAttributes.color,ci=K.toneMapped?v.toneMapping:hr,$i=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Dt=$i!==void 0?$i.length:0,Ue=Ke.get(K),$o=_.state.lights;if(G===!0&&(ie===!0||I!==A)){const yt=I===A&&K.id===E;N.setState(K,I,yt)}let It=!1;K.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==$o.state.version||Ue.outputEncoding!==Ye||de.isInstancedMesh&&Ue.instancing===!1||!de.isInstancedMesh&&Ue.instancing===!0||de.isSkinnedMesh&&Ue.skinning===!1||!de.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Ze||K.fog===!0&&Ue.fog!==Ve||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==N.numPlanes||Ue.numIntersection!==N.numIntersection)||Ue.vertexAlphas!==st||Ue.vertexTangents!==rt||Ue.morphTargets!==tt||Ue.morphNormals!==bt||Ue.morphColors!==pn||Ue.toneMapping!==ci||ye.isWebGL2===!0&&Ue.morphTargetsCount!==Dt)&&(It=!0):(It=!0,Ue.__version=K.version);let Oi=Ue.currentProgram;It===!0&&(Oi=wn(K,J,de));let ts=!1,ns=!1,Bs=!1;const Ut=Oi.getUniforms(),en=Ue.uniforms;if(Me.useProgram(Oi.program)&&(ts=!0,ns=!0,Bs=!0),K.id!==E&&(E=K.id,ns=!0),ts||A!==I){if(Ut.setValue(W,"projectionMatrix",I.projectionMatrix),ye.logarithmicDepthBuffer&&Ut.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),A!==I&&(A=I,ns=!0,Bs=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){const yt=Ut.map.cameraPosition;yt!==void 0&&yt.setValue(W,O.setFromMatrixPosition(I.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ut.setValue(W,"isOrthographic",I.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||de.isSkinnedMesh)&&Ut.setValue(W,"viewMatrix",I.matrixWorldInverse)}if(de.isSkinnedMesh){Ut.setOptional(W,de,"bindMatrix"),Ut.setOptional(W,de,"bindMatrixInverse");const yt=de.skeleton;yt&&(ye.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),Ut.setValue(W,"boneTexture",yt.boneTexture,Qe),Ut.setValue(W,"boneTextureSize",yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ko=ae.morphAttributes;if((Ko.position!==void 0||Ko.normal!==void 0||Ko.color!==void 0&&ye.isWebGL2===!0)&&we.update(de,ae,Oi),(ns||Ue.receiveShadow!==de.receiveShadow)&&(Ue.receiveShadow=de.receiveShadow,Ut.setValue(W,"receiveShadow",de.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(en.envMap.value=Ze,en.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),ns&&(Ut.setValue(W,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&es(en,Bs),Ve&&K.fog===!0&&dt.refreshFogUniforms(en,Ve),dt.refreshMaterialUniforms(en,K,re,B,Y),Wu.upload(W,Ue.uniformsList,en,Qe)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Wu.upload(W,Ue.uniformsList,en,Qe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ut.setValue(W,"center",de.center),Ut.setValue(W,"modelViewMatrix",de.modelViewMatrix),Ut.setValue(W,"normalMatrix",de.normalMatrix),Ut.setValue(W,"modelMatrix",de.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const yt=K.uniformsGroups;for(let Zo=0,cc=yt.length;Zo<cc;Zo++)if(ye.isWebGL2){const hl=yt[Zo];he.update(hl,Oi),he.bind(hl,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function es(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function uc(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,J,ae){Ke.get(I.texture).__webglTexture=J,Ke.get(I.depthTexture).__webglTexture=ae;const K=Ke.get(I);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=ae===void 0,K.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,J){const ae=Ke.get(I);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,ae=0){w=I,C=J,P=ae;let K=!0,de=null,Ve=!1,$e=!1;if(I){const Ze=Ke.get(I);Ze.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(36160,null),K=!1):Ze.__webglFramebuffer===void 0?Qe.setupRenderTarget(I):Ze.__hasExternalTextures&&Qe.rebindTextures(I,Ke.get(I.texture).__webglTexture,Ke.get(I.depthTexture).__webglTexture);const st=I.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&($e=!0);const rt=Ke.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(de=rt[J],Ve=!0):ye.isWebGL2&&I.samples>0&&Qe.useMultisampledRTT(I)===!1?de=Ke.get(I).__webglMultisampledFramebuffer:de=rt,k.copy(I.viewport),D.copy(I.scissor),T=I.scissorTest}else k.copy(j).multiplyScalar(re).floor(),D.copy(te).multiplyScalar(re).floor(),T=oe;if(Me.bindFramebuffer(36160,de)&&ye.drawBuffers&&K&&Me.drawBuffers(I,de),Me.viewport(k),Me.scissor(D),Me.setScissorTest(T),Ve){const Ze=Ke.get(I.texture);W.framebufferTexture2D(36160,36064,34069+J,Ze.__webglTexture,ae)}else if($e){const Ze=Ke.get(I.texture),st=J||0;W.framebufferTextureLayer(36160,36064,Ze.__webglTexture,ae||0,st)}E=-1},this.readRenderTargetPixels=function(I,J,ae,K,de,Ve,$e){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Ke.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&$e!==void 0&&(Ye=Ye[$e]),Ye){Me.bindFramebuffer(36160,Ye);try{const Ze=I.texture,st=Ze.format,rt=Ze.type;if(st!==Ni&&Fe.convert(st)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const tt=rt===Ka&&(Se.has("EXT_color_buffer_half_float")||ye.isWebGL2&&Se.has("EXT_color_buffer_float"));if(rt!==Ds&&Fe.convert(rt)!==W.getParameter(35738)&&!(rt===Es&&(ye.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-K&&ae>=0&&ae<=I.height-de&&W.readPixels(J,ae,K,de,Fe.convert(st),Fe.convert(rt),Ve)}finally{const Ze=w!==null?Ke.get(w).__webglFramebuffer:null;Me.bindFramebuffer(36160,Ze)}}},this.copyFramebufferToTexture=function(I,J,ae=0){const K=Math.pow(2,-ae),de=Math.floor(J.image.width*K),Ve=Math.floor(J.image.height*K);Qe.setTexture2D(J,0),W.copyTexSubImage2D(3553,ae,0,0,I.x,I.y,de,Ve),Me.unbindTexture()},this.copyTextureToTexture=function(I,J,ae,K=0){const de=J.image.width,Ve=J.image.height,$e=Fe.convert(ae.format),Ye=Fe.convert(ae.type);Qe.setTexture2D(ae,0),W.pixelStorei(37440,ae.flipY),W.pixelStorei(37441,ae.premultiplyAlpha),W.pixelStorei(3317,ae.unpackAlignment),J.isDataTexture?W.texSubImage2D(3553,K,I.x,I.y,de,Ve,$e,Ye,J.image.data):J.isCompressedTexture?W.compressedTexSubImage2D(3553,K,I.x,I.y,J.mipmaps[0].width,J.mipmaps[0].height,$e,J.mipmaps[0].data):W.texSubImage2D(3553,K,I.x,I.y,$e,Ye,J.image),K===0&&ae.generateMipmaps&&W.generateMipmap(3553),Me.unbindTexture()},this.copyTextureToTexture3D=function(I,J,ae,K,de=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=I.max.x-I.min.x+1,$e=I.max.y-I.min.y+1,Ye=I.max.z-I.min.z+1,Ze=Fe.convert(K.format),st=Fe.convert(K.type);let rt;if(K.isData3DTexture)Qe.setTexture3D(K,0),rt=32879;else if(K.isDataArrayTexture)Qe.setTexture2DArray(K,0),rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,K.flipY),W.pixelStorei(37441,K.premultiplyAlpha),W.pixelStorei(3317,K.unpackAlignment);const tt=W.getParameter(3314),bt=W.getParameter(32878),pn=W.getParameter(3316),ci=W.getParameter(3315),$i=W.getParameter(32877),Dt=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;W.pixelStorei(3314,Dt.width),W.pixelStorei(32878,Dt.height),W.pixelStorei(3316,I.min.x),W.pixelStorei(3315,I.min.y),W.pixelStorei(32877,I.min.z),ae.isDataTexture||ae.isData3DTexture?W.texSubImage3D(rt,de,J.x,J.y,J.z,Ve,$e,Ye,Ze,st,Dt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(rt,de,J.x,J.y,J.z,Ve,$e,Ye,Ze,Dt.data)):W.texSubImage3D(rt,de,J.x,J.y,J.z,Ve,$e,Ye,Ze,st,Dt),W.pixelStorei(3314,tt),W.pixelStorei(32878,bt),W.pixelStorei(3316,pn),W.pixelStorei(3315,ci),W.pixelStorei(32877,$i),de===0&&K.generateMipmaps&&W.generateMipmap(rt),Me.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?Qe.setTextureCube(I,0):I.isData3DTexture?Qe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Qe.setTexture2DArray(I,0):Qe.setTexture2D(I,0),Me.unbindTexture()},this.resetState=function(){C=0,P=0,w=null,Me.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(xh.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class $3 extends xh{}$3.prototype.isWebGL1Renderer=!0;class K3 extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class K0 extends Xo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const U_=new Q,B_=new Q,G_=new $t,Ad=new mh,Fu=new cl;class Z3 extends Dn{constructor(e=new Ti,t=new K0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)U_.fromBufferAttribute(t,s-1),B_.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=U_.distanceTo(B_);e.setAttribute("lineDistance",new Bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fu.copy(i.boundingSphere),Fu.applyMatrix4(s),Fu.radius+=o,e.ray.intersectsSphere(Fu)===!1)return;G_.copy(s).invert(),Ad.copy(e.ray).applyMatrix4(G_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=new Q,p=new Q,g=new Q,_=new Q,S=this.isLineSegments?2:1,M=i.index,x=i.attributes.position;if(M!==null){const C=Math.max(0,u.start),P=Math.min(M.count,u.start+u.count);for(let w=C,E=P-1;w<E;w+=S){const A=M.getX(w),k=M.getX(w+1);if(h.fromBufferAttribute(x,A),p.fromBufferAttribute(x,k),Ad.distanceSqToSegment(h,p,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(_);T<e.near||T>e.far||t.push({distance:T,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const C=Math.max(0,u.start),P=Math.min(x.count,u.start+u.count);for(let w=C,E=P-1;w<E;w+=S){if(h.fromBufferAttribute(x,w),p.fromBufferAttribute(x,w+1),Ad.distanceSqToSegment(h,p,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(_);k<e.near||k>e.far||t.push({distance:k,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}const V_=new Q,W_=new Q;class Q3 extends Z3{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)V_.fromBufferAttribute(t,s),W_.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+V_.distanceTo(W_);e.setAttribute("lineDistance",new Bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class J3 extends Xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const H_=new $t,Yd=new mh,Uu=new cl,Bu=new Q;class eE extends Dn{constructor(e=new Ti,t=new J3){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uu.copy(i.boundingSphere),Uu.applyMatrix4(s),Uu.radius+=o,e.ray.intersectsSphere(Uu)===!1)return;H_.copy(s).invert(),Yd.copy(e.ray).applyMatrix4(H_);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,u.start),S=Math.min(h.count,u.start+u.count);for(let M=_,v=S;M<v;M++){const x=h.getX(M);Bu.fromBufferAttribute(g,x),j_(Bu,x,d,s,e,t,this)}}else{const _=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let M=_,v=S;M<v;M++)Bu.fromBufferAttribute(g,M),j_(Bu,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function j_(a,e,t,i,s,o,u){const c=Yd.distanceSqToPoint(a);if(c<t){const d=new Q;Yd.closestPointToPoint(a,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,object:u})}}class yh extends Ti{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],u=[];c(s),h(i),p(),this.setAttribute("position",new Bn(o,3)),this.setAttribute("normal",new Bn(o.slice(),3)),this.setAttribute("uv",new Bn(u,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function c(P){const w=new Q,E=new Q,A=new Q;for(let k=0;k<t.length;k+=3)S(t[k+0],w),S(t[k+1],E),S(t[k+2],A),d(w,E,A,P)}function d(P,w,E,A){const k=A+1,D=[];for(let T=0;T<=k;T++){D[T]=[];const L=P.clone().lerp(E,T/k),B=w.clone().lerp(E,T/k),re=k-T;for(let ne=0;ne<=re;ne++)ne===0&&T===k?D[T][ne]=L:D[T][ne]=L.clone().lerp(B,ne/re)}for(let T=0;T<k;T++)for(let L=0;L<2*(k-T)-1;L++){const B=Math.floor(L/2);L%2===0?(_(D[T][B+1]),_(D[T+1][B]),_(D[T][B])):(_(D[T][B+1]),_(D[T+1][B+1]),_(D[T+1][B]))}}function h(P){const w=new Q;for(let E=0;E<o.length;E+=3)w.x=o[E+0],w.y=o[E+1],w.z=o[E+2],w.normalize().multiplyScalar(P),o[E+0]=w.x,o[E+1]=w.y,o[E+2]=w.z}function p(){const P=new Q;for(let w=0;w<o.length;w+=3){P.x=o[w+0],P.y=o[w+1],P.z=o[w+2];const E=x(P)/2/Math.PI+.5,A=C(P)/Math.PI+.5;u.push(E,1-A)}M(),g()}function g(){for(let P=0;P<u.length;P+=6){const w=u[P+0],E=u[P+2],A=u[P+4],k=Math.max(w,E,A),D=Math.min(w,E,A);k>.9&&D<.1&&(w<.2&&(u[P+0]+=1),E<.2&&(u[P+2]+=1),A<.2&&(u[P+4]+=1))}}function _(P){o.push(P.x,P.y,P.z)}function S(P,w){const E=P*3;w.x=e[E+0],w.y=e[E+1],w.z=e[E+2]}function M(){const P=new Q,w=new Q,E=new Q,A=new Q,k=new ft,D=new ft,T=new ft;for(let L=0,B=0;L<o.length;L+=9,B+=6){P.set(o[L+0],o[L+1],o[L+2]),w.set(o[L+3],o[L+4],o[L+5]),E.set(o[L+6],o[L+7],o[L+8]),k.set(u[B+0],u[B+1]),D.set(u[B+2],u[B+3]),T.set(u[B+4],u[B+5]),A.copy(P).add(w).add(E).divideScalar(3);const re=x(A);v(k,B+0,P,re),v(D,B+2,w,re),v(T,B+4,E,re)}}function v(P,w,E,A){A<0&&P.x===1&&(u[w]=P.x-1),E.x===0&&E.z===0&&(u[w]=A/2/Math.PI+.5)}function x(P){return Math.atan2(P.z,-P.x)}function C(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.vertices,e.indices,e.radius,e.details)}}class Sh extends yh{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sh(e.radius,e.detail)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);const tE=()=>{const a=Te.useRef(null),e=Te.useRef(null),t=Te.useRef(null),i=Te.useRef(null);return Te.useEffect(()=>{if(!a.current)return;const s=new K3,o=new yi(75,window.innerWidth/window.innerHeight,.1,1e3),u=new xh({alpha:!0,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setClearColor(0,0),a.current.appendChild(u.domElement);const c=200,d=new Ti,h=new Float32Array(c*3),p=new Float32Array(c*3),g=new Float32Array(c);for(let D=0;D<c;D++){h[D*3]=(Math.random()-.5)*20,h[D*3+1]=(Math.random()-.5)*20,h[D*3+2]=(Math.random()-.5)*20;const T=Math.random();T<.4?(p[D*3]=0,p[D*3+1]=.83,p[D*3+2]=1):T<.7?(p[D*3]=0,p[D*3+1]=1,p[D*3+2]=.53):(p[D*3]=1,p[D*3+1]=1,p[D*3+2]=1),g[D]=Math.random()*3+1}d.setAttribute("position",new oi(h,3)),d.setAttribute("color",new oi(p,3)),d.setAttribute("size",new oi(g,1));const _=new Kr({uniforms:{time:{value:0}},vertexShader:`
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z) * (1.0 + sin(time + position.x) * 0.2);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        
        void main() {
          float r = distance(gl_PointCoord, vec2(0.5, 0.5));
          if (r > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.0, 0.5, r);
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,transparent:!0,vertexColors:!0}),S=new eE(d,_);s.add(S);const M=new Ti,v=[],x=[];for(let D=0;D<c;D++)for(let T=D+1;T<c;T++)Math.sqrt(Math.pow(h[D*3]-h[T*3],2)+Math.pow(h[D*3+1]-h[T*3+1],2)+Math.pow(h[D*3+2]-h[T*3+2],2))<5&&Math.random()<.1&&(v.push(h[D*3],h[D*3+1],h[D*3+2]),v.push(h[T*3],h[T*3+1],h[T*3+2]),x.push(0,.83,1,0,.83,1));M.setAttribute("position",new Bn(v,3)),M.setAttribute("color",new Bn(x,3));const C=new K0({vertexColors:!0,transparent:!0,opacity:.3}),P=new Q3(M,C);s.add(P);const w=new Sh(.5),E=new gh({color:54527,transparent:!0,opacity:.6,wireframe:!0});for(let D=0;D<10;D++){const T=new dr(w,E);T.position.set((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15),s.add(T)}o.position.z=10,e.current=s,t.current=u;const A=D=>{_.uniforms.time.value=D*.001,S.rotation.y+=.002,S.rotation.x+=.001,P.rotation.y+=.001,P.rotation.x+=5e-4,s.children.forEach((T,L)=>{T.geometry&&T.geometry.type==="OctahedronGeometry"&&(T.rotation.x+=.01,T.rotation.y+=.01,T.position.y+=Math.sin(D*.001+L)*.01)}),u.render(s,o),i.current=requestAnimationFrame(A)};A(0);const k=()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",k),()=>{window.removeEventListener("resize",k),i.current&&cancelAnimationFrame(i.current),a.current&&u.domElement&&a.current.removeChild(u.domElement),u.dispose()}},[]),$.jsx("div",{ref:a,className:"bg-3d",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1,pointerEvents:"none",opacity:.7}})};function ur(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Z0(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},Mh,fn,Et,Si=1e8,mt=1/Si,$d=Math.PI*2,nE=$d/4,iE=0,Q0=Math.sqrt,rE=Math.cos,sE=Math.sin,on=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},pr=function(e){return typeof e=="number"},wh=function(e){return typeof e>"u"},Yi=function(e){return typeof e=="object"},Gn=function(e){return e!==!1},Th=function(){return typeof window<"u"},Gu=function(e){return Nt(e)||on(e)},J0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,Kd=/(?:-?\.?\d|\.)+/gi,ev=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ld=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tv=/[+-]=-?[.\d]+/,nv=/[^,'"\[\]\s]+/gi,oE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,Wi,Zd,Eh,li={},$u={},iv,rv=function(e){return($u=Uo(e,li))&&jn},bh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qa=function(e,t){return!t&&console.warn(e)},sv=function(e,t){return e&&(li[e]=t)&&$u&&($u[e]=t)||li},Ja=function(){return 0},aE={suppressEvents:!0,isStart:!0,kill:!1},Hu={suppressEvents:!0,kill:!1},lE={suppressEvents:!0},Ch={},qr=[],Qd={},ov,ei={},Rd={},X_=30,ju=[],Ph="",Ah=function(e){var t=e[0],i,s;if(Yi(t)||Nt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=ju.length;s--&&!ju[s].targetTest(t););i=ju[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Lv(e[s],i)))||e.splice(s,1);return e},Ps=function(e){return e._gsap||Ah(Mi(e))[0]._gsap},av=function(e,t,i){return(i=e[t])&&Nt(i)?e[t]():wh(i)&&e.getAttribute&&e.getAttribute(t)||i},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},Ro=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},uE=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Ku=function(){var e=qr.length,t=qr.slice(0),i,s;for(Qd={},qr.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Lh=function(e){return!!(e._initted||e._startAt||e.add)},lv=function(e,t,i,s){qr.length&&!fn&&Ku(),e.render(t,i,!!(fn&&t<0&&Lh(e))),qr.length&&!fn&&Ku()},uv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(nv).length<2?t:on(e)?e.trim():e},cv=function(e){return e},ui=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},cE=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},Uo=function(e,t){for(var i in t)e[i]=t[i];return e},q_=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Yi(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},Zu=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},Ha=function(e){var t=e.parent||At,i=e.keyframes?cE(Mn(e.keyframes)):ui;if(Gn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},fE=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},fv=function(e,t,i,s,o){var u=e[s],c;if(o)for(c=t[o];u&&u[o]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},oc=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var o=t._prev,u=t._next;o?o._next=u:e[i]===t&&(e[i]=u),u?u._prev=o:e[s]===t&&(e[s]=o),t._next=t._prev=t.parent=null},Zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},As=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},dE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jd=function(e,t,i,s){return e._startAt&&(fn?e._startAt.revert(Hu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},hE=function a(e){return!e||e._ts&&a(e.parent)},Y_=function(e){return e._repeat?Bo(e._tTime,e=e.duration()+e._rDelay)*e:0},Bo=function(e,t){var i=Math.floor(e=Wt(e/t));return e&&i===e?i-1:i},Qu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ac=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||mt)||0))},lc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Wt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ac(e),i._dirty||As(i,e)),e},dv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qu(e.rawTime(),t),(!t._dur||dl(0,t.totalDuration(),i)-t._tTime>mt)&&t.render(i,!0)),As(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-mt}},ji=function(e,t,i,s){return t.parent&&Zr(t),t._start=Wt((pr(i)?i:i||e!==At?vi(e,i,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),fv(e,t,"_first","_last",e._sort?"_start":0),eh(t)||(e._recent=t),s||dv(e,t),e._ts<0&&lc(e,e._tTime),e},hv=function(e,t){return(li.ScrollTrigger||bh("scrollTrigger",t))&&li.ScrollTrigger.create(t,e)},pv=function(e,t,i,s,o){if(Dh(e,t,o),!e._initted)return 1;if(!i&&e._pt&&!fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ov!==ni.frame)return qr.push(e),e._lazy=[o,s],1},pE=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},eh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},mE=function(e,t,i,s){var o=e.ratio,u=t<0||!t&&(!e._start&&pE(e)&&!(!e._initted&&eh(e))||(e._ts<0||e._dp._ts<0)&&!eh(e))?0:1,c=e._rDelay,d=0,h,p,g;if(c&&e._repeat&&(d=dl(0,e._tDur,t),p=Bo(d,c),e._yoyo&&p&1&&(u=1-u),p!==Bo(e._tTime,c)&&(o=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==o||fn||s||e._zTime===mt||!t&&e._zTime){if(!e._initted&&pv(e,t,s,i,d))return;for(g=e._zTime,e._zTime=t||(i?mt:0),i||(i=t&&!g),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&Jd(e,t,i,!0),e._onUpdate&&!i&&ii(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&Zr(e,1),!i&&!fn&&(ii(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gE=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Go=function(e,t,i,s){var o=e._repeat,u=Wt(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=o?o<0?1e10:Wt(u*(o+1)+e._rDelay*o):u,c>0&&!s&&lc(e,e._tTime=e._tDur*c),e.parent&&ac(e),i||As(e.parent,e),e},$_=function(e){return e instanceof Ln?As(e):Go(e,e._dur)},_E={_start:0,endTime:Ja,totalDuration:Ja},vi=function a(e,t,i){var s=e.labels,o=e._recent||_E,u=e.duration()>=Si?o.endTime(!1):e._dur,c,d,h;return on(t)&&(isNaN(t)||t in s)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?o:i).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&i&&(d=d/100*(Mn(i)?i[0]:i).totalDuration()),c>1?a(e,t.substr(0,c-1),i)+d:u+d)):t==null?u:+t},ja=function(e,t,i){var s=pr(t[1]),o=(s?2:1)+(e<2?0:1),u=t[o],c,d;if(s&&(u.duration=t[1]),u.parent=i,e){for(c=u,d=i;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=Gn(d.vars.inherit)&&d.parent;u.immediateRender=Gn(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[o-1]}return new Vt(t[0],u,t[o+1])},Jr=function(e,t){return e||e===0?t(e):t},dl=function(e,t,i){return i<e?e:i>t?t:i},Sn=function(e,t){return!on(e)||!(t=oE.exec(e))?"":t[1]},vE=function(e,t,i){return Jr(i,function(s){return dl(e,t,s)})},th=[].slice,mv=function(e,t){return e&&Yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yi(e[0]))&&!e.nodeType&&e!==Wi},xE=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var o;return on(s)&&!t||mv(s,1)?(o=i).push.apply(o,Mi(s)):i.push(s)})||i},Mi=function(e,t,i){return Et&&!t&&Et.selector?Et.selector(e):on(e)&&!i&&(Zd||!Vo())?th.call((t||Eh).querySelectorAll(e),0):Mn(e)?xE(e,i):mv(e)?th.call(e,0):e?[e]:[]},nh=function(e){return e=Mi(e)[0]||Qa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Mi(t,i.querySelectorAll?i:i===e?Qa("Invalid scope")||Eh.createElement("div"):e)}},gv=function(e){return e.sort(function(){return .5-Math.random()})},_v=function(e){if(Nt(e))return e;var t=Yi(e)?e:{each:e},i=Ls(t.ease),s=t.from||0,o=parseFloat(t.base)||0,u={},c=s>0&&s<1,d=isNaN(s)||c,h=t.axis,p=s,g=s;return on(s)?p=g={center:.5,edges:.5,end:1}[s]||0:!c&&d&&(p=s[0],g=s[1]),function(_,S,M){var v=(M||t).length,x=u[v],C,P,w,E,A,k,D,T,L;if(!x){if(L=t.grid==="auto"?0:(t.grid||[1,Si])[1],!L){for(D=-Si;D<(D=M[L++].getBoundingClientRect().left)&&L<v;);L<v&&L--}for(x=u[v]=[],C=d?Math.min(L,v)*p-.5:s%L,P=L===Si?0:d?v*g/L-.5:s/L|0,D=0,T=Si,k=0;k<v;k++)w=k%L-C,E=P-(k/L|0),x[k]=A=h?Math.abs(h==="y"?E:w):Q0(w*w+E*E),A>D&&(D=A),A<T&&(T=A);s==="random"&&gv(x),x.max=D-T,x.min=T,x.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(L>v?v-1:h?h==="y"?v/L:L:Math.max(L,v/L))||0)*(s==="edges"?-1:1),x.b=v<0?o-v:o,x.u=Sn(t.amount||t.each)||0,i=i&&v<0?Cv(i):i}return v=(x[_]-x.min)/x.max||0,Wt(x.b+(i?i(v):v)*x.v)+x.u}},ih=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Wt(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(pr(i)?0:Sn(i))}},vv=function(e,t){var i=Mn(e),s,o;return!i&&Yi(e)&&(s=i=e.radius||Si,e.values?(e=Mi(e.values),(o=!pr(e[0]))&&(s*=s)):e=ih(e.increment)),Jr(t,i?Nt(e)?function(u){return o=e(u),Math.abs(o-u)<=s?o:u}:function(u){for(var c=parseFloat(o?u.x:u),d=parseFloat(o?u.y:0),h=Si,p=0,g=e.length,_,S;g--;)o?(_=e[g].x-c,S=e[g].y-d,_=_*_+S*S):_=Math.abs(e[g]-c),_<h&&(h=_,p=g);return p=!s||h<=s?e[p]:u,o||p===u||pr(u)?p:p+Sn(u)}:ih(e))},xv=function(e,t,i,s){return Jr(Mn(e)?!t:i===!0?!!(i=0):!s,function(){return Mn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},yE=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(o,u){return u(o)},s)}},SE=function(e,t){return function(i){return e(parseFloat(i))+(t||Sn(i))}},ME=function(e,t,i){return Sv(e,t,0,1,i)},yv=function(e,t,i){return Jr(i,function(s){return e[~~t(s)]})},wE=function a(e,t,i){var s=t-e;return Mn(e)?yv(e,a(0,e.length),t):Jr(i,function(o){return(s+(o-e)%s)%s+e})},TE=function a(e,t,i){var s=t-e,o=s*2;return Mn(e)?yv(e,a(0,e.length-1),t):Jr(i,function(u){return u=(o+(u-e)%o)%o||0,e+(u>s?o-u:u)})},el=function(e){for(var t=0,i="",s,o,u,c;~(s=e.indexOf("random(",t));)u=e.indexOf(")",s),c=e.charAt(s+7)==="[",o=e.substr(s+7,u-s-7).match(c?nv:Kd),i+=e.substr(t,s-t)+xv(c?o:+o[0],c?0:+o[1],+o[2]||1e-5),t=u+1;return i+e.substr(t,e.length-t)},Sv=function(e,t,i,s,o){var u=t-e,c=s-i;return Jr(o,function(d){return i+((d-e)/u*c||0)})},EE=function a(e,t,i,s){var o=isNaN(e+t)?0:function(S){return(1-S)*e+S*t};if(!o){var u=on(e),c={},d,h,p,g,_;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(Mn(e)&&!Mn(t)){for(p=[],g=e.length,_=g-2,h=1;h<g;h++)p.push(a(e[h-1],e[h]));g--,o=function(M){M*=g;var v=Math.min(_,~~M);return p[v](M-v)},i=t}else s||(e=Uo(Mn(e)?[]:{},e));if(!p){for(d in t)Rh.call(c,e,d,"get",t[d]);o=function(M){return Nh(M,c)||(u?e.p:e)}}}return Jr(i,o)},K_=function(e,t,i){var s=e.labels,o=Si,u,c,d;for(u in s)c=s[u]-t,c<0==!!i&&c&&o>(c=Math.abs(c))&&(d=u,o=c);return d},ii=function(e,t,i){var s=e.vars,o=s[t],u=Et,c=e._ctx,d,h,p;if(o)return d=s[t+"Params"],h=s.callbackScope||e,i&&qr.length&&Ku(),c&&(Et=c),p=d?o.apply(h,d):o.call(h),Et=u,p},Va=function(e){return Zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fn),e.progress()<1&&ii(e,"onInterrupt"),e},Co,Mv=[],wv=function(e){if(e)if(e=!e.name&&e.default||e,Th()||e.headless){var t=e.name,i=Nt(e),s=t&&!i&&e.init?function(){this._props=[]}:e,o={init:Ja,render:Nh,add:Rh,kill:GE,modifier:BE,rawVars:0},u={targetTest:0,get:0,getSetter:kh,aliases:{},register:0};if(Vo(),e!==s){if(ei[t])return;ui(s,ui(Zu(e,o),u)),Uo(s.prototype,Uo(o,Zu(e,u))),ei[s.prop=t]=s,e.targetTest&&(ju.push(s),Ch[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}sv(t,s),e.register&&e.register(jn,s,Wn)}else Mv.push(e)},pt=255,Wa={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Dd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*pt+.5|0},Tv=function(e,t,i){var s=e?pr(e)?[e>>16,e>>8&pt,e&pt]:0:Wa.black,o,u,c,d,h,p,g,_,S,M;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Wa[e])s=Wa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+o+o+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&pt,s&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(s=M=e.match(Kd),!t)d=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(h+1):p+h-p*h,o=p*2-u,s.length>3&&(s[3]*=1),s[0]=Dd(d+1/3,o,u),s[1]=Dd(d,o,u),s[2]=Dd(d-1/3,o,u);else if(~e.indexOf("="))return s=e.match(ev),i&&s.length<4&&(s[3]=1),s}else s=e.match(Kd)||Wa.transparent;s=s.map(Number)}return t&&!M&&(o=s[0]/pt,u=s[1]/pt,c=s[2]/pt,g=Math.max(o,u,c),_=Math.min(o,u,c),p=(g+_)/2,g===_?d=h=0:(S=g-_,h=p>.5?S/(2-g-_):S/(g+_),d=g===o?(u-c)/S+(u<c?6:0):g===u?(c-o)/S+2:(o-u)/S+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},Ev=function(e){var t=[],i=[],s=-1;return e.split(Yr).forEach(function(o){var u=o.match(bo)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},Z_=function(e,t,i){var s="",o=(e+s).match(Yr),u=t?"hsla(":"rgba(",c=0,d,h,p,g;if(!o)return e;if(o=o.map(function(_){return(_=Tv(_,t,1))&&u+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(p=Ev(e),d=i.c,d.join(s)!==p.c.join(s)))for(h=e.replace(Yr,"1").split(bo),g=h.length-1;c<g;c++)s+=h[c]+(~d.indexOf(c)?o.shift()||u+"0,0,0,0)":(p.length?p:o.length?o:i).shift());if(!h)for(h=e.split(Yr),g=h.length-1;c<g;c++)s+=h[c]+o[c];return s+h[g]},Yr=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Wa)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),bE=/hsl[a]?\(/,bv=function(e){var t=e.join(" "),i;if(Yr.lastIndex=0,Yr.test(t))return i=bE.test(t),e[1]=Z_(e[1],i),e[0]=Z_(e[0],i,Ev(e[1])),!0},tl,ni=(function(){var a=Date.now,e=500,t=33,i=a(),s=i,o=1e3/240,u=o,c=[],d,h,p,g,_,S,M=function v(x){var C=a()-s,P=x===!0,w,E,A,k;if((C>e||C<0)&&(i+=C-t),s+=C,A=s-i,w=A-u,(w>0||P)&&(k=++g.frame,_=A-g.time*1e3,g.time=A=A/1e3,u+=w+(w>=o?4:o-w),E=1),P||(d=h(v)),E)for(S=0;S<c.length;S++)c[S](A,_,k,x)};return g={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(x){return _/(1e3/(x||60))},wake:function(){iv&&(!Zd&&Th()&&(Wi=Zd=window,Eh=Wi.document||{},li.gsap=jn,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(jn.version),rv($u||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),Mv.forEach(wv)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),h=p||function(x){return setTimeout(x,u-g.time*1e3+1|0)},tl=1,M(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),tl=0,h=Ja},lagSmoothing:function(x,C){e=x||1/0,t=Math.min(C||33,e)},fps:function(x){o=1e3/(x||240),u=g.time*1e3+o},add:function(x,C,P){var w=C?function(E,A,k,D){x(E,A,k,D),g.remove(w)}:x;return g.remove(x),c[P?"unshift":"push"](w),Vo(),w},remove:function(x,C){~(C=c.indexOf(x))&&c.splice(C,1)&&S>=C&&S--},_listeners:c},g})(),Vo=function(){return!tl&&ni.wake()},ot={},CE=/^[\d.\-M][\d.\-,\s]/,PE=/["']/g,AE=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],o=1,u=i.length,c,d,h;o<u;o++)d=i[o],c=o!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[s]=isNaN(h)?h.replace(PE,"").trim():+h,s=d.substr(c+1).trim();return t},LE=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},RE=function(e){var t=(e+"").split("("),i=ot[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[AE(t[1])]:LE(e).split(",").map(uv)):ot._CE&&CE.test(e)?ot._CE("",e):i},Cv=function(e){return function(t){return 1-e(1-t)}},Pv=function a(e,t){for(var i=e._first,s;i;)i instanceof Ln?a(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?a(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},Ls=function(e,t){return e&&(Nt(e)?e:ot[e]||RE(e))||t},Us=function(e,t,i,s){i===void 0&&(i=function(d){return 1-t(1-d)}),s===void 0&&(s=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var o={easeIn:t,easeOut:i,easeInOut:s},u;return Vn(e,function(c){ot[c]=li[c]=o,ot[u=c.toLowerCase()]=i;for(var d in o)ot[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=ot[c+"."+d]=o[d]}),o},Av=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Id=function a(e,t,i){var s=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),u=o/$d*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*sE((p-u)*o)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:Av(c);return o=$d/o,d.config=function(h,p){return a(e,h,p)},d},kd=function a(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:Av(i);return s.config=function(o){return a(e,o)},s};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Us(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Us("Elastic",Id("in"),Id("out"),Id());(function(a,e){var t=1/e,i=2*t,s=2.5*t,o=function(c){return c<t?a*c*c:c<i?a*Math.pow(c-1.5/e,2)+.75:c<s?a*(c-=2.25/e)*c+.9375:a*Math.pow(c-2.625/e,2)+.984375};Us("Bounce",function(u){return 1-o(1-u)},o)})(7.5625,2.75);Us("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Us("Circ",function(a){return-(Q0(1-a*a)-1)});Us("Sine",function(a){return a===1?1:-rE(a*nE)+1});Us("Back",kd("in"),kd("out"),kd());ot.SteppedEase=ot.steps=li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),o=t?1:0,u=1-mt;return function(c){return((s*dl(0,u,c)|0)+o)*i}}};Fo.ease=ot["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Ph+=a+","+a+"Params,"});var Lv=function(e,t){this.id=iE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:av,this.set=t?t.getSetter:kh},nl=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Go(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),tl||ni.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Go(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(Vo(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(lc(this,i),!o._dp||o.parent||dv(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===mt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),lv(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Y_(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Y_(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,s):this._repeat?Bo(this._tTime,o)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-mt?0:this._rts;if(this._rts===i)return this;var o=this.parent&&this._ts?Qu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-mt?0:this._rts,this.totalTime(dl(-Math.abs(this._delay),this.totalDuration(),o),s!==!1),ac(this),dE(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==mt&&(this._tTime-=mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ji(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Gn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qu(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=lE);var s=fn;return fn=i,Lh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),fn=s,this},e.globalTime=function(i){for(var s=this,o=arguments.length?i:s.rawTime();s;)o=s._start+o/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):o},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,$_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,$_(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(vi(this,i),Gn(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Gn(s)),this._dur||(this._zTime=-mt),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-mt,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=s&&o<this.endTime(!0)-mt)},e.eventCallback=function(i,s,o){var u=this.vars;return arguments.length>1?(s?(u[i]=s,o&&(u[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this;return new Promise(function(o){var u=Nt(i)?i:cv,c=function(){var h=s.then;s.then=null,Nt(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=h),o(u),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?c():s._prom=c})},e.kill=function(){Va(this)},a})();ui(nl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-mt,_prom:0,_ps:!1,_rts:1});var Ln=(function(a){Z0(e,a);function e(i,s){var o;return i===void 0&&(i={}),o=a.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=Gn(i.sortChildren),At&&ji(i.parent||At,ur(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&hv(ur(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(s,o,u){return ja(0,arguments,this),this},t.from=function(s,o,u){return ja(1,arguments,this),this},t.fromTo=function(s,o,u,c){return ja(2,arguments,this),this},t.set=function(s,o,u){return o.duration=0,o.parent=this,Ha(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Vt(s,o,vi(this,u),1),this},t.call=function(s,o,u){return ji(this,Vt.delayedCall(0,s,o),u)},t.staggerTo=function(s,o,u,c,d,h,p){return u.duration=o,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new Vt(s,u,vi(this,d)),this},t.staggerFrom=function(s,o,u,c,d,h,p){return u.runBackwards=1,Ha(u).immediateRender=Gn(u.immediateRender),this.staggerTo(s,o,u,c,d,h,p)},t.staggerFromTo=function(s,o,u,c,d,h,p,g){return c.startAt=u,Ha(c).immediateRender=Gn(c.immediateRender),this.staggerTo(s,o,c,d,h,p,g)},t.render=function(s,o,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:Wt(s),g=this._zTime<0!=s<0&&(this._initted||!h),_,S,M,v,x,C,P,w,E,A,k,D;if(this!==At&&p>d&&s>=0&&(p=d),p!==this._tTime||u||g){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),_=p,E=this._start,w=this._ts,C=!w,g&&(h||(c=this._zTime),(s||!o)&&(this._zTime=s)),this._repeat){if(k=this._yoyo,x=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(x*100+s,o,u);if(_=Wt(p%x),p===d?(v=this._repeat,_=h):(A=Wt(p/x),v=~~A,v&&v===A&&(_=h,v--),_>h&&(_=h)),A=Bo(this._tTime,x),!c&&this._tTime&&A!==v&&this._tTime-A*x-this._dur<=0&&(A=v),k&&v&1&&(_=h-_,D=1),v!==A&&!this._lock){var T=k&&A&1,L=T===(k&&v&1);if(v<A&&(T=!T),c=T?0:p%h?h:p,this._lock=1,this.render(c||(D?0:Wt(v*x)),o,!h)._lock=0,this._tTime=p,!o&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),c&&c!==this._time||C!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,L&&(this._lock=2,c=T?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!C)return this;Pv(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(P=gE(this,Wt(c),Wt(_)),P&&(p-=_-(_=P._start))),this._tTime=p,this._time=_,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&!o&&!A&&(ii(this,"onStart"),this._tTime!==p))return this;if(_>=c&&s>=0)for(S=this._first;S;){if(M=S._next,(S._act||_>=S._start)&&S._ts&&P!==S){if(S.parent!==this)return this.render(s,o,u);if(S.render(S._ts>0?(_-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(_-S._start)*S._ts,o,u),_!==this._time||!this._ts&&!C){P=0,M&&(p+=this._zTime=-mt);break}}S=M}else{S=this._last;for(var B=s<0?s:_;S;){if(M=S._prev,(S._act||B<=S._end)&&S._ts&&P!==S){if(S.parent!==this)return this.render(s,o,u);if(S.render(S._ts>0?(B-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(B-S._start)*S._ts,o,u||fn&&Lh(S)),_!==this._time||!this._ts&&!C){P=0,M&&(p+=this._zTime=B?-mt:mt);break}}S=M}}if(P&&!o&&(this.pause(),P.render(_>=c?0:-mt)._zTime=_>=c?1:-1,this._ts))return this._start=E,ac(this),this.render(s,o,u);this._onUpdate&&!o&&ii(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(E===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&Zr(this,1),!o&&!(s<0&&!c)&&(p||c||!d)&&(ii(this,p===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,o){var u=this;if(pr(o)||(o=vi(this,o,s)),!(s instanceof nl)){if(Mn(s))return s.forEach(function(c){return u.add(c,o)}),this;if(on(s))return this.addLabel(s,o);if(Nt(s))s=Vt.delayedCall(0,s);else return this}return this!==s?ji(this,s,o):this},t.getChildren=function(s,o,u,c){s===void 0&&(s=!0),o===void 0&&(o=!0),u===void 0&&(u=!0),c===void 0&&(c=-Si);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof Vt?o&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,o,u)))),h=h._next;return d},t.getById=function(s){for(var o=this.getChildren(1,1,1),u=o.length;u--;)if(o[u].vars.id===s)return o[u]},t.remove=function(s){return on(s)?this.removeLabel(s):Nt(s)?this.killTweensOf(s):(s.parent===this&&oc(this,s),s===this._recent&&(this._recent=this._last),As(this))},t.totalTime=function(s,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(ni.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),a.prototype.totalTime.call(this,s,o),this._forcing=0,this):this._tTime},t.addLabel=function(s,o){return this.labels[s]=vi(this,o),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,o,u){var c=Vt.delayedCall(0,o||Ja,u);return c.data="isPause",this._hasPause=1,ji(this,c,vi(this,s))},t.removePause=function(s){var o=this._first;for(s=vi(this,s);o;)o._start===s&&o.data==="isPause"&&Zr(o),o=o._next},t.killTweensOf=function(s,o,u){for(var c=this.getTweensOf(s,u),d=c.length;d--;)Vr!==c[d]&&c[d].kill(s,o);return this},t.getTweensOf=function(s,o){for(var u=[],c=Mi(s),d=this._first,h=pr(o),p;d;)d instanceof Vt?uE(d._targets,c)&&(h?(!Vr||d._initted&&d._ts)&&d.globalTime(0)<=o&&d.globalTime(d.totalDuration())>o:!o||d.isActive())&&u.push(d):(p=d.getTweensOf(c,o)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(s,o){o=o||{};var u=this,c=vi(u,s),d=o,h=d.startAt,p=d.onStart,g=d.onStartParams,_=d.immediateRender,S,M=Vt.to(u,ui({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||mt,onStart:function(){if(u.pause(),!S){var x=o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());M._dur!==x&&Go(M,x,0,1).render(M._time,!0,!0),S=1}p&&p.apply(M,g||[])}},o));return _?M.render(0):M},t.tweenFromTo=function(s,o,u){return this.tweenTo(o,ui({startAt:{time:vi(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),K_(this,vi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),K_(this,vi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+mt)},t.shiftChildren=function(s,o,u){u===void 0&&(u=0);for(var c=this._first,d=this.labels,h;c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(o)for(h in d)d[h]>=u&&(d[h]+=s);return As(this)},t.invalidate=function(s){var o=this._first;for(this._lock=0;o;)o.invalidate(s),o=o._next;return a.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var o=this._first,u;o;)u=o._next,this.remove(o),o=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),As(this)},t.totalDuration=function(s){var o=0,u=this,c=u._last,d=Si,h,p,g;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(g=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,ji(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(o-=p,(!g&&!u._dp||g&&g.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>o&&c._ts&&(o=c._end),c=h;Go(u,u===At&&u._time>o?u._time:o,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(At._ts&&(lv(At,Qu(s,At)),ov=ni.frame),ni.frame>=X_){X_+=ai.autoSleep||120;var o=At._first;if((!o||!o._ts)&&ai.autoSleep&&ni._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||ni.sleep()}}},e})(nl);ui(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var DE=function(e,t,i,s,o,u,c){var d=new Wn(this._pt,e,t,0,1,Ov,null,o),h=0,p=0,g,_,S,M,v,x,C,P;for(d.b=i,d.e=s,i+="",s+="",(C=~s.indexOf("random("))&&(s=el(s)),u&&(P=[i,s],u(P,e,t),i=P[0],s=P[1]),_=i.match(Ld)||[];g=Ld.exec(s);)M=g[0],v=s.substring(h,g.index),S?S=(S+1)%5:v.substr(-5)==="rgba("&&(S=1),M!==_[p++]&&(x=parseFloat(_[p-1])||0,d._pt={_next:d._pt,p:v||p===1?v:",",s:x,c:M.charAt(1)==="="?Ro(x,M)-x:parseFloat(M)-x,m:S&&S<4?Math.round:0},h=Ld.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=c,(tv.test(s)||C)&&(d.e=0),this._pt=d,d},Rh=function(e,t,i,s,o,u,c,d,h,p){Nt(s)&&(s=s(o||0,e,u));var g=e[t],_=i!=="get"?i:Nt(g)?h?e[t.indexOf("set")||!Nt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():g,S=Nt(g)?h?zE:kv:Ih,M;if(on(s)&&(~s.indexOf("random(")&&(s=el(s)),s.charAt(1)==="="&&(M=Ro(_,s)+(Sn(_)||0),(M||M===0)&&(s=M))),!p||_!==s||rh)return!isNaN(_*s)&&s!==""?(M=new Wn(this._pt,e,t,+_||0,s-(_||0),typeof g=="boolean"?UE:Nv,0,S),h&&(M.fp=h),c&&M.modifier(c,this,e),this._pt=M):(!g&&!(t in e)&&bh(t,s),DE.call(this,e,t,_,s,S,d||ai.stringFilter,h))},IE=function(e,t,i,s,o){if(Nt(e)&&(e=Xa(e,o,t,i,s)),!Yi(e)||e.style&&e.nodeType||Mn(e)||J0(e))return on(e)?Xa(e,o,t,i,s):e;var u={},c;for(c in e)u[c]=Xa(e[c],o,t,i,s);return u},Rv=function(e,t,i,s,o,u){var c,d,h,p;if(ei[e]&&(c=new ei[e]).init(o,c.rawVars?t[e]:IE(t[e],s,o,u,i),i,s,u)!==!1&&(i._pt=d=new Wn(i._pt,o,e,0,1,c.render,c,0,c.priority),i!==Co))for(h=i._ptLookup[i._targets.indexOf(o)],p=c._props.length;p--;)h[c._props[p]]=d;return c},Vr,rh,Dh=function a(e,t,i){var s=e.vars,o=s.ease,u=s.startAt,c=s.immediateRender,d=s.lazy,h=s.onUpdate,p=s.runBackwards,g=s.yoyoEase,_=s.keyframes,S=s.autoRevert,M=e._dur,v=e._startAt,x=e._targets,C=e.parent,P=C&&C.data==="nested"?C.vars.targets:x,w=e._overwrite==="auto"&&!Mh,E=e.timeline,A,k,D,T,L,B,re,ne,X,j,te,oe,le;if(E&&(!_||!o)&&(o="none"),e._ease=Ls(o,Fo.ease),e._yEase=g?Cv(Ls(g===!0?o:g,Fo.ease)):0,g&&e._yoyo&&!e._repeat&&(g=e._yEase,e._yEase=e._ease,e._ease=g),e._from=!E&&!!s.runBackwards,!E||_&&!s.stagger){if(ne=x[0]?Ps(x[0]).harness:0,oe=ne&&s[ne.prop],A=Zu(s,Ch),v&&(v._zTime<0&&v.progress(1),t<0&&p&&c&&!S?v.render(-1,!0):v.revert(p&&M?Hu:aE),v._lazy=0),u){if(Zr(e._startAt=Vt.set(x,ui({data:"isStart",overwrite:!1,parent:C,immediateRender:!0,lazy:!v&&Gn(d),startAt:null,delay:0,onUpdate:h&&function(){return ii(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn||!c&&!S)&&e._startAt.revert(Hu),c&&M&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&M&&!v){if(t&&(c=!1),D=ui({overwrite:!1,data:"isFromStart",lazy:c&&!v&&Gn(d),immediateRender:c,stagger:0,parent:C},A),oe&&(D[ne.prop]=oe),Zr(e._startAt=Vt.set(x,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn?e._startAt.revert(Hu):e._startAt.render(-1,!0)),e._zTime=t,!c)a(e._startAt,mt,mt);else if(!t)return}for(e._pt=e._ptCache=0,d=M&&Gn(d)||d&&!M,k=0;k<x.length;k++){if(L=x[k],re=L._gsap||Ah(x)[k]._gsap,e._ptLookup[k]=j={},Qd[re.id]&&qr.length&&Ku(),te=P===x?k:P.indexOf(L),ne&&(X=new ne).init(L,oe||A,e,te,P)!==!1&&(e._pt=T=new Wn(e._pt,L,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(G){j[G]=T}),X.priority&&(B=1)),!ne||oe)for(D in A)ei[D]&&(X=Rv(D,A,e,te,L,P))?X.priority&&(B=1):j[D]=T=Rh.call(e,L,D,"get",A[D],te,P,0,s.stringFilter);e._op&&e._op[k]&&e.kill(L,e._op[k]),w&&e._pt&&(Vr=e,At.killTweensOf(L,j,e.globalTime(t)),le=!e.parent,Vr=0),e._pt&&d&&(Qd[re.id]=1)}B&&zv(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!le,_&&t<=0&&E.render(Si,!0,!0)},kE=function(e,t,i,s,o,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,g,_,S;if(!h)for(h=e._ptCache[t]=[],_=e._ptLookup,S=e._targets.length;S--;){if(p=_[S][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return rh=1,e.vars[t]="+=0",Dh(e,c),rh=0,d?Qa(t+" not eligible for reset"):1;h.push(p)}for(S=h.length;S--;)g=h[S],p=g._pt||g,p.s=(s||s===0)&&!o?s:p.s+(s||0)+u*p.c,p.c=i-p.s,g.e&&(g.e=Ft(i)+Sn(g.e)),g.b&&(g.b=p.s+Sn(g.b))},NE=function(e,t){var i=e[0]?Ps(e[0]).harness:0,s=i&&i.aliases,o,u,c,d;if(!s)return t;o=Uo({},t);for(u in s)if(u in o)for(d=s[u].split(","),c=d.length;c--;)o[d[c]]=o[u];return o},OE=function(e,t,i,s){var o=t.ease||s||"power1.inOut",u,c;if(Mn(t))c=i[e]||(i[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:o})});else for(u in t)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:o})},Xa=function(e,t,i,s,o){return Nt(e)?e.call(t,i,s,o):on(e)&&~e.indexOf("random(")?el(e):e},Dv=Ph+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Iv={};Vn(Dv+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Iv[a]=1});var Vt=(function(a){Z0(e,a);function e(i,s,o,u){var c;typeof s=="number"&&(o.duration=s,s=o,o=null),c=a.call(this,u?s:Ha(s))||this;var d=c.vars,h=d.duration,p=d.delay,g=d.immediateRender,_=d.stagger,S=d.overwrite,M=d.keyframes,v=d.defaults,x=d.scrollTrigger,C=d.yoyoEase,P=s.parent||At,w=(Mn(i)||J0(i)?pr(i[0]):"length"in s)?[i]:Mi(i),E,A,k,D,T,L,B,re;if(c._targets=w.length?Ah(w):Qa("GSAP target "+i+" not found. https://gsap.com",!ai.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=S,M||_||Gu(h)||Gu(p)){if(s=c.vars,E=c.timeline=new Ln({data:"nested",defaults:v||{},targets:P&&P.data==="nested"?P.vars.targets:w}),E.kill(),E.parent=E._dp=ur(c),E._start=0,_||Gu(h)||Gu(p)){if(D=w.length,B=_&&_v(_),Yi(_))for(T in _)~Dv.indexOf(T)&&(re||(re={}),re[T]=_[T]);for(A=0;A<D;A++)k=Zu(s,Iv),k.stagger=0,C&&(k.yoyoEase=C),re&&Uo(k,re),L=w[A],k.duration=+Xa(h,ur(c),A,L,w),k.delay=(+Xa(p,ur(c),A,L,w)||0)-c._delay,!_&&D===1&&k.delay&&(c._delay=p=k.delay,c._start+=p,k.delay=0),E.to(L,k,B?B(A,L,w):0),E._ease=ot.none;E.duration()?h=p=0:c.timeline=0}else if(M){Ha(ui(E.vars.defaults,{ease:"none"})),E._ease=Ls(M.ease||s.ease||"none");var ne=0,X,j,te;if(Mn(M))M.forEach(function(oe){return E.to(w,oe,">")}),E.duration();else{k={};for(T in M)T==="ease"||T==="easeEach"||OE(T,M[T],k,M.easeEach);for(T in k)for(X=k[T].sort(function(oe,le){return oe.t-le.t}),ne=0,A=0;A<X.length;A++)j=X[A],te={ease:j.e,duration:(j.t-(A?X[A-1].t:0))/100*h},te[T]=j.v,E.to(w,te,ne),ne+=te.duration;E.duration()<h&&E.to({},{duration:h-E.duration()})}}h||c.duration(h=E.duration())}else c.timeline=0;return S===!0&&!Mh&&(Vr=ur(c),At.killTweensOf(w),Vr=0),ji(P,ur(c),o),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(g||!h&&!M&&c._start===Wt(P._time)&&Gn(g)&&hE(ur(c))&&P.data!=="nested")&&(c._tTime=-mt,c.render(Math.max(0,-p)||0)),x&&hv(ur(c),x),c}var t=e.prototype;return t.render=function(s,o,u){var c=this._time,d=this._tDur,h=this._dur,p=s<0,g=s>d-mt&&!p?d:s<mt?0:s,_,S,M,v,x,C,P,w,E;if(!h)mE(this,s,o,u);else if(g!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=g,w=this.timeline,this._repeat){if(v=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(v*100+s,o,u);if(_=Wt(g%v),g===d?(M=this._repeat,_=h):(x=Wt(g/v),M=~~x,M&&M===x?(_=h,M--):_>h&&(_=h)),C=this._yoyo&&M&1,C&&(E=this._yEase,_=h-_),x=Bo(this._tTime,v),_===c&&!u&&this._initted&&M===x)return this._tTime=g,this;M!==x&&(w&&this._yEase&&Pv(w,C),this.vars.repeatRefresh&&!C&&!this._lock&&_!==v&&this._initted&&(this._lock=u=1,this.render(Wt(v*M),!0).invalidate()._lock=0))}if(!this._initted){if(pv(this,p?s:_,u,o,g))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&M!==x))return this;if(h!==this._dur)return this.render(s,o,u)}if(this._tTime=g,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=P=(E||this._ease)(_/h),this._from&&(this.ratio=P=1-P),!c&&g&&!o&&!x&&(ii(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(P,S.d),S=S._next;w&&w.render(s<0?s:w._dur*w._ease(_/this._dur),o,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!o&&(p&&Jd(this,s,o,u),ii(this,"onUpdate")),this._repeat&&M!==x&&this.vars.onRepeat&&!o&&this.parent&&ii(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(p&&!this._onUpdate&&Jd(this,s,!0,!0),(s||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Zr(this,1),!o&&!(p&&!c)&&(g||c||C)&&(ii(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),a.prototype.invalidate.call(this,s)},t.resetTo=function(s,o,u,c,d){tl||ni.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Dh(this,h),p=this._ease(h/this._dur),kE(this,s,o,u,c,p,h,d)?this.resetTo(s,o,u,c,1):(lc(this,0),this.parent||fv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,o){if(o===void 0&&(o="all"),!s&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Va(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,o,Vr&&Vr.vars.overwrite!==!0)._first||Va(this),this.parent&&u!==this.timeline.totalDuration()&&Go(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=s?Mi(s):c,h=this._ptLookup,p=this._pt,g,_,S,M,v,x,C;if((!o||o==="all")&&fE(c,d))return o==="all"&&(this._pt=0),Va(this);for(g=this._op=this._op||[],o!=="all"&&(on(o)&&(v={},Vn(o,function(P){return v[P]=1}),o=v),o=NE(c,o)),C=c.length;C--;)if(~d.indexOf(c[C])){_=h[C],o==="all"?(g[C]=o,M=_,S={}):(S=g[C]=g[C]||{},M=o);for(v in M)x=_&&_[v],x&&((!("kill"in x.d)||x.d.kill(v)===!0)&&oc(this,x,"_pt"),delete _[v]),S!=="all"&&(S[v]=1)}return this._initted&&!this._pt&&p&&Va(this),this},e.to=function(s,o){return new e(s,o,arguments[2])},e.from=function(s,o){return ja(1,arguments)},e.delayedCall=function(s,o,u,c){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:o,onReverseComplete:o,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,o,u){return ja(2,arguments)},e.set=function(s,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(s,o)},e.killTweensOf=function(s,o,u){return At.killTweensOf(s,o,u)},e})(nl);ui(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(a){Vt[a]=function(){var e=new Ln,t=th.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Ih=function(e,t,i){return e[t]=i},kv=function(e,t,i){return e[t](i)},zE=function(e,t,i,s){return e[t](s.fp,i)},FE=function(e,t,i){return e.setAttribute(t,i)},kh=function(e,t){return Nt(e[t])?kv:wh(e[t])&&e.setAttribute?FE:Ih},Nv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},UE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ov=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},Nh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},BE=function(e,t,i,s){for(var o=this._pt,u;o;)u=o._next,o.p===s&&o.modifier(e,t,i),o=u},GE=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?oc(this,t,"_pt"):t.dep||(i=1),t=s;return!i},VE=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},zv=function(e){for(var t=e._pt,i,s,o,u;t;){for(i=t._next,s=o;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:o=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=o},Wn=(function(){function a(t,i,s,o,u,c,d,h,p){this.t=i,this.s=o,this.c=u,this.p=s,this.r=c||Nv,this.d=d||this,this.set=h||Ih,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,s,o){this.mSet=this.mSet||this.set,this.set=VE,this.m=i,this.mt=o,this.tween=s},a})();Vn(Ph+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Ch[a]=1});li.TweenMax=li.TweenLite=Vt;li.TimelineLite=li.TimelineMax=Ln;At=new Ln({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ai.stringFilter=bv;var Rs=[],Xu={},WE=[],Q_=0,HE=0,Nd=function(e){return(Xu[e]||WE).map(function(t){return t()})},sh=function(){var e=Date.now(),t=[];e-Q_>2&&(Nd("matchMediaInit"),Rs.forEach(function(i){var s=i.queries,o=i.conditions,u,c,d,h;for(c in s)u=Wi.matchMedia(s[c]).matches,u&&(d=1),u!==o[c]&&(o[c]=u,h=1);h&&(i.revert(),d&&t.push(i))}),Nd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),Q_=e,Nd("matchMedia"))},Fv=(function(){function a(t,i){this.selector=i&&nh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=HE++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,s,o){Nt(i)&&(o=s,s=i,i=Nt);var u=this,c=function(){var h=Et,p=u.selector,g;return h&&h!==u&&h.data.push(u),o&&(u.selector=nh(o)),Et=u,g=s.apply(u,arguments),Nt(g)&&u._r.push(g),Et=h,u.selector=p,u.isReverted=!1,g};return u.last=c,i===Nt?c(u,function(d){return u.add(null,d)}):i?u[i]=c:c},e.ignore=function(i){var s=Et;Et=null,i(this),Et=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof a?i.push.apply(i,s.getTweens()):s instanceof Vt&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var o=this;if(i?(function(){for(var c=o.getTweens(),d=o.data.length,h;d--;)h=o.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,g){return g.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),d=o.data.length;d--;)h=o.data[d],h instanceof Ln?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Vt)&&h.revert&&h.revert(i);o._r.forEach(function(p){return p(i,o)}),o.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=Rs.length;u--;)Rs[u].id===this.id&&Rs.splice(u,1)},e.revert=function(i){this.kill(i||{})},a})(),jE=(function(){function a(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=a.prototype;return e.add=function(i,s,o){Yi(i)||(i={matches:i});var u=new Fv(0,o||this.scope),c=u.conditions={},d,h,p;Et&&!u.selector&&(u.selector=Et.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?p=1:(d=Wi.matchMedia(i[h]),d&&(Rs.indexOf(u)<0&&Rs.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(sh):d.addEventListener("change",sh)));return p&&s(u,function(g){return u.add(null,g)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},a})(),Ju={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return wv(s)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,i,s){on(e)&&(e=Mi(e)[0]);var o=Ps(e||{}).get,u=i?cv:uv;return i==="native"&&(i=""),e&&(t?u((ei[t]&&ei[t].get||o)(e,t,i,s)):function(c,d,h){return u((ei[c]&&ei[c].get||o)(e,c,d,h))})},quickSetter:function(e,t,i){if(e=Mi(e),e.length>1){var s=e.map(function(p){return jn.quickSetter(p,t,i)}),o=s.length;return function(p){for(var g=o;g--;)s[g](p)}}e=e[0]||{};var u=ei[t],c=Ps(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var g=new u;Co._pt=0,g.init(e,i?p+i:p,Co,0,[e]),g.render(1,g),Co._pt&&Nh(1,Co)}:c.set(e,d);return u?h:function(p){return h(e,d,i?p+i:p,c,1)}},quickTo:function(e,t,i){var s,o=jn.to(e,ui((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,p){return o.resetTo(t,d,h,p)};return u.tween=o,u},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ls(e.ease,Fo.ease)),q_(Fo,e||{})},config:function(e){return q_(ai,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,o=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!ei[c]&&!li[c]&&Qa(t+" effect requires "+c+" plugin.")}),Rd[t]=function(c,d,h){return i(Mi(c),ui(d||{},o),h)},u&&(Ln.prototype[t]=function(c,d,h){return this.add(Rd[t](c,Yi(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){ot[e]=Ls(t)},parseEase:function(e,t){return arguments.length?Ls(e,t):ot},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ln(e),s,o;for(i.smoothChildTiming=Gn(e.smoothChildTiming),At.remove(i),i._dp=0,i._time=i._tTime=At._time,s=At._first;s;)o=s._next,(t||!(!s._dur&&s instanceof Vt&&s.vars.onComplete===s._targets[0]))&&ji(i,s,s._start-s._delay),s=o;return ji(At,i,0),i},context:function(e,t){return e?new Fv(e,t):Et},matchMedia:function(e){return new jE(e)},matchMediaRefresh:function(){return Rs.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||sh()},addEventListener:function(e,t){var i=Xu[e]||(Xu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Xu[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:wE,wrapYoyo:TE,distribute:_v,random:xv,snap:vv,normalize:ME,getUnit:Sn,clamp:vE,splitColor:Tv,toArray:Mi,selector:nh,mapRange:Sv,pipe:yE,unitize:SE,interpolate:EE,shuffle:gv},install:rv,effects:Rd,ticker:ni,updateRoot:Ln.updateRoot,plugins:ei,globalTimeline:At,core:{PropTween:Wn,globals:sv,Tween:Vt,Timeline:Ln,Animation:nl,getCache:Ps,_removeLinkedListItem:oc,reverting:function(){return fn},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return Mh=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Ju[a]=Vt[a]});ni.add(Ln.updateRoot);Co=Ju.to({},{duration:0});var XE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},qE=function(e,t){var i=e._targets,s,o,u;for(s in t)for(o=i.length;o--;)u=e._ptLookup[o][s],u&&(u=u.d)&&(u._pt&&(u=XE(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[o],s))},Od=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,o,u){u._onInit=function(c){var d,h;if(on(o)&&(d={},Vn(o,function(p){return d[p]=1}),o=d),t){d={};for(h in o)d[h]=t(o[h]);o=d}qE(c,o)}}}},jn=Ju.registerPlugin({name:"attr",init:function(e,t,i,s,o){var u,c,d;this.tween=i;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],s,o,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)fn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Od("roundProps",ih),Od("modifiers"),Od("snap",vv))||Ju;Vt.version=Ln.version=jn.version="3.13.0";iv=1;Th()&&Vo();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var J_,Wr,Do,Oh,bs,e0,zh,YE=function(){return typeof window<"u"},mr={},Ms=180/Math.PI,Io=Math.PI/180,wo=Math.atan2,t0=1e8,Fh=/([A-Z])/g,$E=/(left|right|width|margin|padding|x)/i,KE=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},oh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},JE=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Uv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Bv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},eb=function(e,t,i){return e.style[t]=i},tb=function(e,t,i){return e.style.setProperty(t,i)},nb=function(e,t,i){return e._gsap[t]=i},ib=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},rb=function(e,t,i,s,o){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(o,u)},sb=function(e,t,i,s,o){var u=e._gsap;u[t]=i,u.renderTransform(o,u)},Lt="transform",Hn=Lt+"Origin",ob=function a(e,t){var i=this,s=this.target,o=s.style,u=s._gsap;if(e in mr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=cr(s,c)}):this.tfm[e]=u.x?u[e]:cr(s,e),e===Hn&&(this.tfm.zOrigin=u.zOrigin);else return Xi.transform.split(",").forEach(function(c){return a.call(i,c,t)});if(this.props.indexOf(Lt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Hn,t,"")),e=Lt}(o||t)&&this.props.push(e,t,o[e])},Gv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ab=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,o,u;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?i[e[o]]=e[o+2]:i.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Fh,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=zh(),(!o||!o.isStart)&&!i[Lt]&&(Gv(i),s.zOrigin&&i[Hn]&&(i[Hn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Vv=function(e,t){var i={target:e,props:[],revert:ab,save:ob};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},Wv,ah=function(e,t){var i=Wr.createElementNS?Wr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wr.createElement(e);return i&&i.style?i:Wr.createElement(e)},wi=function a(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Fh,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&a(e,Wo(t)||t,1)||""},n0="O,Moz,ms,Ms,Webkit".split(","),Wo=function(e,t,i){var s=t||bs,o=s.style,u=5;if(e in o&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(n0[u]+e in o););return u<0?null:(u===3?"ms":u>=0?n0[u]:"")+e},lh=function(){YE()&&window.document&&(J_=window,Wr=J_.document,Do=Wr.documentElement,bs=ah("div")||{style:{}},ah("div"),Lt=Wo(Lt),Hn=Lt+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wv=!!Wo("perspective"),zh=jn.core.reverting,Oh=1)},i0=function(e){var t=e.ownerSVGElement,i=ah("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),o;s.style.display="block",i.appendChild(s),Do.appendChild(i);try{o=s.getBBox()}catch{}return i.removeChild(s),Do.removeChild(i),o},r0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Hv=function(e){var t,i;try{t=e.getBBox()}catch{t=i0(e),i=1}return t&&(t.width||t.height)||i||(t=i0(e)),t&&!t.width&&!t.x&&!t.y?{x:+r0(e,["x","cx","x1"])||0,y:+r0(e,["y","cy","y1"])||0,width:0,height:0}:t},jv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hv(e))},Ns=function(e,t){if(t){var i=e.style,s;t in mr&&t!==Hn&&(t=Lt),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(Fh,"-$1").toLowerCase())):i.removeAttribute(t)}},Hr=function(e,t,i,s,o,u){var c=new Wn(e._pt,t,i,0,1,u?Bv:Uv);return e._pt=c,c.b=s,c.e=o,e._props.push(i),c},s0={deg:1,rad:1,turn:1},lb={grid:1,flex:1},Qr=function a(e,t,i,s){var o=parseFloat(i)||0,u=(i+"").trim().substr((o+"").length)||"px",c=bs.style,d=$E.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),g=100,_=s==="px",S=s==="%",M,v,x,C;if(s===u||!o||s0[s]||s0[u])return o;if(u!=="px"&&!_&&(o=a(e,t,i,"px")),C=e.getCTM&&jv(e),(S||u==="%")&&(mr[t]||~t.indexOf("adius")))return M=C?e.getBBox()[d?"width":"height"]:e[p],Ft(S?o/M*g:o/100*M);if(c[d?"width":"height"]=g+(_?u:s),v=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,C&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Wr||!v.appendChild)&&(v=Wr.body),x=v._gsap,x&&S&&x.width&&d&&x.time===ni.time&&!x.uncache)return Ft(o/x.width*g);if(S&&(t==="height"||t==="width")){var P=e.style[t];e.style[t]=g+s,M=e[p],P?e.style[t]=P:Ns(e,t)}else(S||u==="%")&&!lb[wi(v,"display")]&&(c.position=wi(e,"position")),v===e&&(c.position="static"),v.appendChild(bs),M=bs[p],v.removeChild(bs),c.position="absolute";return d&&S&&(x=Ps(v),x.time=ni.time,x.width=v[p]),Ft(_?M*o/g:M&&o?g/M*o:0)},cr=function(e,t,i,s){var o;return Oh||lh(),t in Xi&&t!=="transform"&&(t=Xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),mr[t]&&t!=="transform"?(o=rl(e,s),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:tc(wi(e,Hn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||s||~(o+"").indexOf("calc("))&&(o=ec[t]&&ec[t](e,t,i)||wi(e,t)||av(e,t)||(t==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?Qr(e,t,o,i)+i:o},ub=function(e,t,i,s){if(!i||i==="none"){var o=Wo(t,e,1),u=o&&wi(e,o,1);u&&u!==i?(t=o,i=u):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var c=new Wn(this._pt,e.style,t,0,1,Ov),d=0,h=0,p,g,_,S,M,v,x,C,P,w,E,A;if(c.b=i,c.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=wi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(v=e.style[t],e.style[t]=s,s=wi(e,t)||s,v?e.style[t]=v:Ns(e,t)),p=[i,s],bv(p),i=p[0],s=p[1],_=i.match(bo)||[],A=s.match(bo)||[],A.length){for(;g=bo.exec(s);)x=g[0],P=s.substring(d,g.index),M?M=(M+1)%5:(P.substr(-5)==="rgba("||P.substr(-5)==="hsla(")&&(M=1),x!==(v=_[h++]||"")&&(S=parseFloat(v)||0,E=v.substr((S+"").length),x.charAt(1)==="="&&(x=Ro(S,x)+E),C=parseFloat(x),w=x.substr((C+"").length),d=bo.lastIndex-w.length,w||(w=w||ai.units[t]||E,d===s.length&&(s+=w,c.e+=w)),E!==w&&(S=Qr(e,t,v,w)||0),c._pt={_next:c._pt,p:P||h===1?P:",",s:S,c:C-S,m:M&&M<4||t==="zIndex"?Math.round:0});c.c=d<s.length?s.substring(d,s.length):""}else c.r=t==="display"&&s==="none"?Bv:Uv;return tv.test(s)&&(c.e=0),this._pt=c,c},o0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cb=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=o0[i]||i,t[1]=o0[s]||s,t.join(" ")},fb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,o=t.u,u=i._gsap,c,d,h;if(o==="all"||o===!0)s.cssText="",d=1;else for(o=o.split(","),h=o.length;--h>-1;)c=o[h],mr[c]&&(d=1,c=c==="transformOrigin"?Hn:Lt),Ns(i,c);d&&(Ns(i,Lt),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",rl(i,1),u.uncache=1,Gv(s)))}},ec={clearProps:function(e,t,i,s,o){if(o.data!=="isFromStart"){var u=e._pt=new Wn(e._pt,t,i,0,0,fb);return u.u=s,u.pr=-10,u.tween=o,e._props.push(i),1}}},il=[1,0,0,1,0,0],Xv={},qv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},a0=function(e){var t=wi(e,Lt);return qv(t)?il:t.substr(7).match(ev).map(Ft)},Uh=function(e,t){var i=e._gsap||Ps(e),s=e.style,o=a0(e),u,c,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,o=[d.a,d.b,d.c,d.d,d.e,d.f],o.join(",")==="1,0,0,1,0,0"?il:o):(o===il&&!e.offsetParent&&e!==Do&&!i.svg&&(d=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,Do.appendChild(e)),o=a0(e),d?s.display=d:Ns(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):Do.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},uh=function(e,t,i,s,o,u){var c=e._gsap,d=o||Uh(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,g=c.xOffset||0,_=c.yOffset||0,S=d[0],M=d[1],v=d[2],x=d[3],C=d[4],P=d[5],w=t.split(" "),E=parseFloat(w[0])||0,A=parseFloat(w[1])||0,k,D,T,L;i?d!==il&&(D=S*x-M*v)&&(T=E*(x/D)+A*(-v/D)+(v*P-x*C)/D,L=E*(-M/D)+A*(S/D)-(S*P-M*C)/D,E=T,A=L):(k=Hv(e),E=k.x+(~w[0].indexOf("%")?E/100*k.width:E),A=k.y+(~(w[1]||w[0]).indexOf("%")?A/100*k.height:A)),s||s!==!1&&c.smooth?(C=E-h,P=A-p,c.xOffset=g+(C*S+P*v)-C,c.yOffset=_+(C*M+P*x)-P):c.xOffset=c.yOffset=0,c.xOrigin=E,c.yOrigin=A,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!i,e.style[Hn]="0px 0px",u&&(Hr(u,c,"xOrigin",h,E),Hr(u,c,"yOrigin",p,A),Hr(u,c,"xOffset",g,c.xOffset),Hr(u,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",E+" "+A)},rl=function(e,t){var i=e._gsap||new Lv(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,o=i.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=wi(e,Hn)||"0",p,g,_,S,M,v,x,C,P,w,E,A,k,D,T,L,B,re,ne,X,j,te,oe,le,G,ie,Y,F,O,se,ce,W;return p=g=_=v=x=C=P=w=E=0,S=M=1,i.svg=!!(e.getCTM&&jv(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[Lt]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Lt]!=="none"?d[Lt]:"")),s.scale=s.rotate=s.translate="none"),D=Uh(e,i.svg),i.svg&&(i.uncache?(G=e.getBBox(),h=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",le=""):le=!t&&e.getAttribute("data-svg-origin"),uh(e,le||h,!!le||i.originIsAbsolute,i.smooth!==!1,D)),A=i.xOrigin||0,k=i.yOrigin||0,D!==il&&(re=D[0],ne=D[1],X=D[2],j=D[3],p=te=D[4],g=oe=D[5],D.length===6?(S=Math.sqrt(re*re+ne*ne),M=Math.sqrt(j*j+X*X),v=re||ne?wo(ne,re)*Ms:0,P=X||j?wo(X,j)*Ms+v:0,P&&(M*=Math.abs(Math.cos(P*Io))),i.svg&&(p-=A-(A*re+k*X),g-=k-(A*ne+k*j))):(W=D[6],se=D[7],Y=D[8],F=D[9],O=D[10],ce=D[11],p=D[12],g=D[13],_=D[14],T=wo(W,O),x=T*Ms,T&&(L=Math.cos(-T),B=Math.sin(-T),le=te*L+Y*B,G=oe*L+F*B,ie=W*L+O*B,Y=te*-B+Y*L,F=oe*-B+F*L,O=W*-B+O*L,ce=se*-B+ce*L,te=le,oe=G,W=ie),T=wo(-X,O),C=T*Ms,T&&(L=Math.cos(-T),B=Math.sin(-T),le=re*L-Y*B,G=ne*L-F*B,ie=X*L-O*B,ce=j*B+ce*L,re=le,ne=G,X=ie),T=wo(ne,re),v=T*Ms,T&&(L=Math.cos(T),B=Math.sin(T),le=re*L+ne*B,G=te*L+oe*B,ne=ne*L-re*B,oe=oe*L-te*B,re=le,te=G),x&&Math.abs(x)+Math.abs(v)>359.9&&(x=v=0,C=180-C),S=Ft(Math.sqrt(re*re+ne*ne+X*X)),M=Ft(Math.sqrt(oe*oe+W*W)),T=wo(te,oe),P=Math.abs(T)>2e-4?T*Ms:0,E=ce?1/(ce<0?-ce:ce):0),i.svg&&(le=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!qv(wi(e,Lt)),le&&e.setAttribute("transform",le))),Math.abs(P)>90&&Math.abs(P)<270&&(o?(S*=-1,P+=v<=0?180:-180,v+=v<=0?180:-180):(M*=-1,P+=P<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=g-((i.yPercent=g&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=_+u,i.scaleX=Ft(S),i.scaleY=Ft(M),i.rotation=Ft(v)+c,i.rotationX=Ft(x)+c,i.rotationY=Ft(C)+c,i.skewX=P+c,i.skewY=w+c,i.transformPerspective=E+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[Hn]=tc(h)),i.xOffset=i.yOffset=0,i.force3D=ai.force3D,i.renderTransform=i.svg?hb:Wv?Yv:db,i.uncache=0,i},tc=function(e){return(e=e.split(" "))[0]+" "+e[1]},zd=function(e,t,i){var s=Sn(t);return Ft(parseFloat(t)+parseFloat(Qr(e,"x",i+"px",s)))+s},db=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Yv(e,t)},vs="0deg",Ua="0px",xs=") ",Yv=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.z,h=i.rotation,p=i.rotationY,g=i.rotationX,_=i.skewX,S=i.skewY,M=i.scaleX,v=i.scaleY,x=i.transformPerspective,C=i.force3D,P=i.target,w=i.zOrigin,E="",A=C==="auto"&&e&&e!==1||C===!0;if(w&&(g!==vs||p!==vs)){var k=parseFloat(p)*Io,D=Math.sin(k),T=Math.cos(k),L;k=parseFloat(g)*Io,L=Math.cos(k),u=zd(P,u,D*L*-w),c=zd(P,c,-Math.sin(k)*-w),d=zd(P,d,T*L*-w+w)}x!==Ua&&(E+="perspective("+x+xs),(s||o)&&(E+="translate("+s+"%, "+o+"%) "),(A||u!==Ua||c!==Ua||d!==Ua)&&(E+=d!==Ua||A?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+xs),h!==vs&&(E+="rotate("+h+xs),p!==vs&&(E+="rotateY("+p+xs),g!==vs&&(E+="rotateX("+g+xs),(_!==vs||S!==vs)&&(E+="skew("+_+", "+S+xs),(M!==1||v!==1)&&(E+="scale("+M+", "+v+xs),P.style[Lt]=E||"translate(0, 0)"},hb=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.rotation,h=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,S=i.target,M=i.xOrigin,v=i.yOrigin,x=i.xOffset,C=i.yOffset,P=i.forceCSS,w=parseFloat(u),E=parseFloat(c),A,k,D,T,L;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=Io,h*=Io,A=Math.cos(d)*g,k=Math.sin(d)*g,D=Math.sin(d-h)*-_,T=Math.cos(d-h)*_,h&&(p*=Io,L=Math.tan(h-p),L=Math.sqrt(1+L*L),D*=L,T*=L,p&&(L=Math.tan(p),L=Math.sqrt(1+L*L),A*=L,k*=L)),A=Ft(A),k=Ft(k),D=Ft(D),T=Ft(T)):(A=g,T=_,k=D=0),(w&&!~(u+"").indexOf("px")||E&&!~(c+"").indexOf("px"))&&(w=Qr(S,"x",u,"px"),E=Qr(S,"y",c,"px")),(M||v||x||C)&&(w=Ft(w+M-(M*A+v*D)+x),E=Ft(E+v-(M*k+v*T)+C)),(s||o)&&(L=S.getBBox(),w=Ft(w+s/100*L.width),E=Ft(E+o/100*L.height)),L="matrix("+A+","+k+","+D+","+T+","+w+","+E+")",S.setAttribute("transform",L),P&&(S.style[Lt]=L)},pb=function(e,t,i,s,o){var u=360,c=on(o),d=parseFloat(o)*(c&&~o.indexOf("rad")?Ms:1),h=d-s,p=s+h+"deg",g,_;return c&&(g=o.split("_")[1],g==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),g==="cw"&&h<0?h=(h+u*t0)%u-~~(h/u)*u:g==="ccw"&&h>0&&(h=(h-u*t0)%u-~~(h/u)*u)),e._pt=_=new Wn(e._pt,t,i,s,h,ZE),_.e=p,_.u="deg",e._props.push(i),_},l0=function(e,t){for(var i in t)e[i]=t[i];return e},mb=function(e,t,i){var s=l0({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,d,h,p,g,_,S,M;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[Lt]=t,c=rl(i,1),Ns(i,Lt),i.setAttribute("transform",h)):(h=getComputedStyle(i)[Lt],u[Lt]=t,c=rl(i,1),u[Lt]=h);for(d in mr)h=s[d],p=c[d],h!==p&&o.indexOf(d)<0&&(S=Sn(h),M=Sn(p),g=S!==M?Qr(i,d,h,M):parseFloat(h),_=parseFloat(p),e._pt=new Wn(e._pt,c,d,g,_-g,oh),e._pt.u=M||0,e._props.push(d));l0(c,s)};Vn("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",s="Bottom",o="Left",u=(e<3?[t,i,s,o]:[t+o,t+i,s+i,s+o]).map(function(c){return e<2?a+c:"border"+c+a});ec[e>1?"border"+a:a]=function(c,d,h,p,g){var _,S;if(arguments.length<4)return _=u.map(function(M){return cr(c,M,h)}),S=_.join(" "),S.split(_[0]).length===5?_[0]:S;_=(p+"").split(" "),S={},u.forEach(function(M,v){return S[M]=_[v]=_[v]||_[(v-1)/2|0]}),c.init(d,S,g)}});var $v={name:"css",register:lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,o){var u=this._props,c=e.style,d=i.vars.startAt,h,p,g,_,S,M,v,x,C,P,w,E,A,k,D,T;Oh||lh(),this.styles=this.styles||Vv(e),T=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(p=t[v],!(ei[v]&&Rv(v,t,i,s,e,o)))){if(S=typeof p,M=ec[v],S==="function"&&(p=p.call(i,s,e,o),S=typeof p),S==="string"&&~p.indexOf("random(")&&(p=el(p)),M)M(this,e,v,p,i)&&(D=1);else if(v.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(v)+"").trim(),p+="",Yr.lastIndex=0,Yr.test(h)||(x=Sn(h),C=Sn(p)),C?x!==C&&(h=Qr(e,v,h,C)+C):x&&(p+=x),this.add(c,"setProperty",h,p,s,o,0,0,v),u.push(v),T.push(v,0,c[v]);else if(S!=="undefined"){if(d&&v in d?(h=typeof d[v]=="function"?d[v].call(i,s,e,o):d[v],on(h)&&~h.indexOf("random(")&&(h=el(h)),Sn(h+"")||h==="auto"||(h+=ai.units[v]||Sn(cr(e,v))||""),(h+"").charAt(1)==="="&&(h=cr(e,v))):h=cr(e,v),_=parseFloat(h),P=S==="string"&&p.charAt(1)==="="&&p.substr(0,2),P&&(p=p.substr(2)),g=parseFloat(p),v in Xi&&(v==="autoAlpha"&&(_===1&&cr(e,"visibility")==="hidden"&&g&&(_=0),T.push("visibility",0,c.visibility),Hr(this,c,"visibility",_?"inherit":"hidden",g?"inherit":"hidden",!g)),v!=="scale"&&v!=="transform"&&(v=Xi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),w=v in mr,w){if(this.styles.save(v),S==="string"&&p.substring(0,6)==="var(--"&&(p=wi(e,p.substring(4,p.indexOf(")"))),g=parseFloat(p)),E||(A=e._gsap,A.renderTransform&&!t.parseTransform||rl(e,t.parseTransform),k=t.smoothOrigin!==!1&&A.smooth,E=this._pt=new Wn(this._pt,c,Lt,0,1,A.renderTransform,A,0,-1),E.dep=1),v==="scale")this._pt=new Wn(this._pt,A,"scaleY",A.scaleY,(P?Ro(A.scaleY,P+g):g)-A.scaleY||0,oh),this._pt.u=0,u.push("scaleY",v),v+="X";else if(v==="transformOrigin"){T.push(Hn,0,c[Hn]),p=cb(p),A.svg?uh(e,p,0,k,0,this):(C=parseFloat(p.split(" ")[2])||0,C!==A.zOrigin&&Hr(this,A,"zOrigin",A.zOrigin,C),Hr(this,c,v,tc(h),tc(p)));continue}else if(v==="svgOrigin"){uh(e,p,1,k,0,this);continue}else if(v in Xv){pb(this,A,v,_,P?Ro(_,P+p):p);continue}else if(v==="smoothOrigin"){Hr(this,A,"smooth",A.smooth,p);continue}else if(v==="force3D"){A[v]=p;continue}else if(v==="transform"){mb(this,p,e);continue}}else v in c||(v=Wo(v)||v);if(w||(g||g===0)&&(_||_===0)&&!KE.test(p)&&v in c)x=(h+"").substr((_+"").length),g||(g=0),C=Sn(p)||(v in ai.units?ai.units[v]:x),x!==C&&(_=Qr(e,v,h,C)),this._pt=new Wn(this._pt,w?A:c,v,_,(P?Ro(_,P+g):g)-_,!w&&(C==="px"||v==="zIndex")&&t.autoRound!==!1?JE:oh),this._pt.u=C||0,x!==C&&C!=="%"&&(this._pt.b=h,this._pt.r=QE);else if(v in c)ub.call(this,e,v,h,P?P+p:p);else if(v in e)this.add(e,v,h||e[v],P?P+p:p,s,o);else if(v!=="parseTransform"){bh(v,p);continue}w||(v in c?T.push(v,0,c[v]):typeof e[v]=="function"?T.push(v,2,e[v]()):T.push(v,1,h||e[v])),u.push(v)}}D&&zv(this)},render:function(e,t){if(t.tween._time||!zh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:cr,aliases:Xi,getSetter:function(e,t,i){var s=Xi[t];return s&&s.indexOf(",")<0&&(t=s),t in mr&&t!==Hn&&(e._gsap.x||cr(e,"x"))?i&&e0===i?t==="scale"?ib:nb:(e0=i||{})&&(t==="scale"?rb:sb):e.style&&!wh(e.style[t])?eb:~t.indexOf("-")?tb:kh(e,t)},core:{_removeProperty:Ns,_getMatrix:Uh}};jn.utils.checkPrefix=Wo;jn.core.getStyleSaver=Vv;(function(a,e,t,i){var s=Vn(a+","+e+","+t,function(o){mr[o]=1});Vn(e,function(o){ai.units[o]="deg",Xv[o]=1}),Xi[s[13]]=a+","+e,Vn(i,function(o){var u=o.split(":");Xi[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){ai.units[a]="px"});jn.registerPlugin($v);var qi=jn.registerPlugin($v)||jn;qi.core.Tween;const gb=()=>{const[a,e]=Te.useState(!1),[t,i]=Te.useState(null),[s,o]=Te.useState(!1),{language:u,toggleLanguage:c}=ol(),d=Ho();Te.useEffect(()=>{const _=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[]),Te.useEffect(()=>{qi.fromTo(".header",{y:-100,opacity:0},{y:0,opacity:1,duration:.8,ease:"power2.out"})},[]);const h=[{path:"/",label:{en:"Home",mm:"ပင်မ"}},{path:"/solutions",label:{en:"Solutions",mm:"ဖြေရှင်းချက်များ"},dropdown:[{path:"/enterprise",label:{en:"Enterprise",mm:"စီးပွားဖြစ်"}},{path:"/iot-overview",label:{en:"IoT Overview",mm:"IoT ခြုံငုံသုံးသပ်ချက်"}},{path:"/esim-basics",label:{en:"eSIM Basics",mm:"eSIM အခြေခံများ"}},{path:"/features",label:{en:"Features",mm:"လုပ်ဆောင်ချက်များ"}}]},{path:"/operators",label:{en:"Operators",mm:"အော်ပရေတာများ"},dropdown:[{path:"/operator-mpt",label:{en:"MPT Integration",mm:"MPT ပေါင်းစည်းမှု"}},{path:"/operator-mytel",label:{en:"MYTEL Integration",mm:"MYTEL ပေါင်းစည်းမှု"}},{path:"/operator-atom",label:{en:"ATOM Integration",mm:"ATOM ပေါင်းစည်းမှု"}},{path:"/operator-u9",label:{en:"U9 Integration",mm:"U9 ပေါင်းစည်းမှု"}}]},{path:"/developers",label:{en:"Developers",mm:"ဖွံ့ဖြိုးတိုးတက်သူများ"},dropdown:[{path:"/docs",label:{en:"Documentation",mm:"မှတ်တမ်းများ"}},{path:"/docs/api-overview",label:{en:"API Reference",mm:"API ကိုးကား"}},{path:"/docs/sdk-overview",label:{en:"SDK Guide",mm:"SDK လမ်းညွှန်"}},{path:"/getting-started",label:{en:"Getting Started",mm:"စတင်အသုံးပြုခြင်း"}}]},{path:"/pricing",label:{en:"Pricing",mm:"စျေးနှုန်း"}},{path:"/support",label:{en:"Support",mm:"ပံ့ပိုးမှု"}}],p=_=>{i(t===_?null:_)},g=()=>{i(null)};return Te.useEffect(()=>(document.addEventListener("click",g),()=>document.removeEventListener("click",g)),[]),$.jsx("header",{className:`header ${a?"scrolled":""}`,children:$.jsxs("div",{className:"container",children:[$.jsxs("div",{className:"header-content",children:[$.jsxs(An,{to:"/",className:"logo",children:[$.jsx("span",{className:"logo-text",children:"NexoraSIM"}),$.jsx("span",{className:"logo-subtitle",children:"Entitlements Server"})]}),$.jsx("nav",{className:"nav desktop-nav",children:h.map((_,S)=>$.jsx("div",{className:"nav-item",onClick:M=>M.stopPropagation(),children:_.dropdown?$.jsxs($.Fragment,{children:[$.jsxs("button",{className:`nav-link dropdown-toggle ${t===S?"active":""}`,onClick:()=>p(S),children:[_.label[u],$.jsx("span",{className:"dropdown-arrow",children:"▼"})]}),t===S&&$.jsx("div",{className:"dropdown-menu glass-panel",children:_.dropdown.map(M=>$.jsx(An,{to:M.path,className:"dropdown-item",onClick:()=>i(null),children:M.label[u]},M.path))})]}):$.jsx(An,{to:_.path,className:`nav-link ${d.pathname===_.path?"active":""}`,children:_.label[u]})},_.path))}),$.jsxs("div",{className:"header-actions",children:[$.jsxs("div",{className:"language-toggle",children:[$.jsx("button",{onClick:c,className:u==="en"?"active":"",children:"EN"}),$.jsx("button",{onClick:c,className:u==="mm"?"active":"",children:"မြန်မာ"})]}),$.jsxs("button",{className:"mobile-menu-toggle",onClick:()=>o(!s),children:[$.jsx("span",{}),$.jsx("span",{}),$.jsx("span",{})]})]})]}),s&&$.jsx("div",{className:"mobile-menu glass-panel",children:h.map((_,S)=>$.jsxs("div",{className:"mobile-menu-item",children:[$.jsx(An,{to:_.path,className:"mobile-menu-link",onClick:()=>o(!1),children:_.label[u]}),_.dropdown&&$.jsx("div",{className:"mobile-submenu",children:_.dropdown.map(M=>$.jsx(An,{to:M.path,className:"mobile-submenu-link",onClick:()=>o(!1),children:M.label[u]},M.path))})]},_.path))})]})})},_b=()=>{const{language:a,t:e}=ol(),i={en:{company:"Company",solutions:"Solutions",developers:"Developers",support:"Support",legal:"Legal",description:"Enterprise-grade eSIM platform for MPT, MYTEL, ATOM, and U9 networks. Powering the future of IoT connectivity.",copyright:"© 2024 NexoraSIM. All rights reserved.",links:{company:[{label:"About Us",path:"/about"},{label:"Careers",path:"/careers"},{label:"Leadership",path:"/leadership"},{label:"News",path:"/news"}],solutions:[{label:"Enterprise",path:"/enterprise"},{label:"IoT Overview",path:"/iot-overview"},{label:"eSIM Basics",path:"/esim-basics"},{label:"Use Cases",path:"/use-cases"}],developers:[{label:"Documentation",path:"/docs"},{label:"API Reference",path:"/docs/api-reference"},{label:"SDK Guide",path:"/docs/sdk"},{label:"Code Samples",path:"/docs/code-samples"}],support:[{label:"Help Center",path:"/support"},{label:"Contact Us",path:"/contact"},{label:"FAQ",path:"/faq"},{label:"Feedback",path:"/feedback"}],legal:[{label:"Terms of Service",path:"/terms"},{label:"Privacy Policy",path:"/privacy"},{label:"Security",path:"/security"},{label:"Compliance",path:"/compliance"}]}},mm:{company:"ကုမ္ပဏီ",solutions:"ဖြေရှင်းချက်များ",developers:"ဖွံ့ဖြိုးတိုးတက်သူများ",support:"ပံ့ပိုးမှု",legal:"ဥပဒေရေးရာ",description:"MPT၊ MYTEL၊ ATOM နှင့် U9 ကွန်ယက်များအတွက် စီးပွားဖြစ်အဆင့် eSIM ပလက်ဖောင်း။ IoT ချိတ်ဆက်မှု၏ အနာဂတ်ကို စွမ်းအားပေးခြင်း။",copyright:"© ၂၀၂၄ NexoraSIM။ မူပိုင်ခွင့်များ လုံးဝ ကြေးမုံသည်။",links:{company:[{label:"ကျွန်ုပ်တို့အကြောင်း",path:"/about"},{label:"အလုပ်အကိုင်များ",path:"/careers"},{label:"ခေါင်းဆောင်မှု",path:"/leadership"},{label:"သတင်းများ",path:"/news"}],solutions:[{label:"စီးပွားဖြစ်",path:"/enterprise"},{label:"IoT ခြုံငုံသုံးသပ်ချက်",path:"/iot-overview"},{label:"eSIM အခြေခံများ",path:"/esim-basics"},{label:"အသုံးပြုမှု ကိစ္စများ",path:"/use-cases"}],developers:[{label:"မှတ်တမ်းများ",path:"/docs"},{label:"API ကိုးကား",path:"/docs/api-reference"},{label:"SDK လမ်းညွှန်",path:"/docs/sdk"},{label:"ကုဒ် နမူနာများ",path:"/docs/code-samples"}],support:[{label:"အကူအညီ ဗဟိုချက်",path:"/support"},{label:"ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ",path:"/contact"},{label:"မေးလေ့ရှိသောမေးခွန်းများ",path:"/faq"},{label:"အကြံပြုချက်များ",path:"/feedback"}],legal:[{label:"ဝန်ဆောင်မှု စည်းကမ်းများ",path:"/terms"},{label:"ကိုယ်ရေးကိုယ်တာ မူဝါဒ",path:"/privacy"},{label:"လုံခြုံရေး",path:"/security"},{label:"လိုက်နာမှု",path:"/compliance"}]}}}[a];return $.jsxs("footer",{className:"footer",children:[$.jsxs("div",{className:"container",children:[$.jsxs("div",{className:"footer-content",children:[$.jsxs("div",{className:"footer-section",children:[$.jsx(An,{to:"/",className:"footer-logo",children:$.jsx("span",{className:"text-gradient",children:"NexoraSIM"})}),$.jsx("p",{className:"footer-description",children:i.description}),$.jsxs("div",{className:"social-links",children:[$.jsx("a",{href:"https://github.com/nexorasim",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:$.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:$.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),$.jsx("a",{href:"https://linkedin.com/company/nexorasim",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:$.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:$.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),$.jsx("a",{href:"https://twitter.com/nexorasim",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:$.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:$.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})})]})]}),$.jsxs("div",{className:"footer-section",children:[$.jsx("h4",{children:i.company}),$.jsx("ul",{className:"footer-links",children:i.links.company.map((s,o)=>$.jsx("li",{children:$.jsx(An,{to:s.path,children:s.label})},o))})]}),$.jsxs("div",{className:"footer-section",children:[$.jsx("h4",{children:i.solutions}),$.jsx("ul",{className:"footer-links",children:i.links.solutions.map((s,o)=>$.jsx("li",{children:$.jsx(An,{to:s.path,children:s.label})},o))})]}),$.jsxs("div",{className:"footer-section",children:[$.jsx("h4",{children:i.developers}),$.jsx("ul",{className:"footer-links",children:i.links.developers.map((s,o)=>$.jsx("li",{children:$.jsx(An,{to:s.path,children:s.label})},o))})]}),$.jsxs("div",{className:"footer-section",children:[$.jsx("h4",{children:i.support}),$.jsx("ul",{className:"footer-links",children:i.links.support.map((s,o)=>$.jsx("li",{children:$.jsx(An,{to:s.path,children:s.label})},o))})]}),$.jsxs("div",{className:"footer-section",children:[$.jsx("h4",{children:i.legal}),$.jsx("ul",{className:"footer-links",children:i.links.legal.map((s,o)=>$.jsx("li",{children:$.jsx(An,{to:s.path,children:s.label})},o))})]})]}),$.jsx("div",{className:"footer-bottom",children:$.jsx("p",{children:i.copyright})})]}),$.jsx("style",{jsx:!0,children:`
        .footer-logo {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold);
          text-decoration: none;
          margin-bottom: var(--spacing-sm);
          display: inline-block;
        }

        .footer-description {
          margin-bottom: var(--spacing-md);
          opacity: 0.8;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: var(--spacing-sm);
        }

        .social-link {
          color: var(--color-pearl);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          opacity: 1;
          color: var(--color-accent);
          transform: translateY(-2px);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: var(--spacing-xs);
        }

        .footer-bottom {
          border-top: 1px solid var(--color-glass-border);
          margin-top: var(--spacing-xl);
          padding-top: var(--spacing-md);
          text-align: center;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `})]})},u0={"/":{title:"NexoraSIM Entitlements Server - Enterprise eSIM Platform Myanmar",description:"Leading enterprise eSIM platform for MPT, MYTEL, ATOM, and U9 networks in Myanmar. Smart IoT connectivity solutions.",keywords:"eSIM Myanmar, IoT platform, MPT eSIM, MYTEL eSIM, enterprise telecommunications"},"/docs/api-overview":{title:"API Documentation - NexoraSIM REST API v2.0",description:"Updated REST API documentation for eSIM provisioning, device management, and real-time analytics. OAuth 2.0 authentication.",keywords:"REST API v2, eSIM provisioning API, OAuth 2.0, device management API, real-time analytics"}},Kv=a=>{const e=u0[a]||u0["/"];document.title=e.title;const t=(i,s)=>{let o=document.querySelector(`meta[name="${i}"]`);o||(o=document.createElement("meta"),o.setAttribute("name",i),document.head.appendChild(o)),o.setAttribute("content",s)};t("description",e.description),t("keywords",e.keywords)},vb=({children:a,title:e,description:t,className:i=""})=>{const{language:s}=ol(),o=Ho(),u=E0.find(h=>h.path===o.pathname),c=e||u?.title?.[s]||u?.title?.en||"NexoraSIM",d=t||`${c} - Enterprise eSIM Platform`;return Te.useEffect(()=>{document.title=`${c} | NexoraSIM Entitlements Server`;let h=document.querySelector('meta[name="description"]');h&&h.setAttribute("content",d),qi.fromTo(".page-content",{opacity:0,y:30},{opacity:1,y:0,duration:.6,ease:"power2.out"}),document.querySelectorAll(".card, .glass-panel").forEach((g,_)=>{qi.fromTo(g,{opacity:0,y:50},{opacity:1,y:0,duration:.6,delay:_*.1,ease:"power2.out",scrollTrigger:{trigger:g,start:"top 80%",toggleActions:"play none none reverse"}})})},[o.pathname,c,d]),$.jsx("div",{className:`page ${i}`,children:$.jsx("div",{className:"page-content",children:a})})},xb=()=>{const{language:a,t:e}=ol();Te.useRef(null),Te.useRef(null);const i={en:{hero:{title:"Next-Generation eSIM Platform",subtitle:"Enterprise-grade entitlements server for MPT, MYTEL, ATOM, and U9 networks",description:"Power your IoT ecosystem with seamless eSIM connectivity, advanced provisioning, and real-time management across Myanmar's leading telecommunications networks.",ctaPrimary:"Get Started",ctaSecondary:"View Documentation"},features:{title:"Platform Capabilities",subtitle:"Comprehensive eSIM management for the connected world",items:[{title:"Multi-Operator Support",description:"Seamless integration with MPT, MYTEL, ATOM, and U9 networks for comprehensive coverage across Myanmar.",icon:""},{title:"Real-time Provisioning",description:"Instant eSIM profile deployment and activation with advanced lifecycle management capabilities.",icon:""},{title:"IoT-Optimized",description:"Purpose-built for IoT devices with bulk operations, automated provisioning, and scalable architecture.",icon:""},{title:"Enterprise Security",description:"Bank-grade security with end-to-end encryption, secure key management, and compliance frameworks.",icon:""},{title:"Developer-Friendly APIs",description:"RESTful APIs with comprehensive documentation, SDKs, and testing tools for rapid integration.",icon:""},{title:"Advanced Analytics",description:"Real-time monitoring, usage analytics, and performance insights with customizable dashboards.",icon:""}]},networks:{title:"Supported Networks",subtitle:"Comprehensive coverage across Myanmar's telecommunications landscape",operators:[{name:"MPT",description:"Myanmar Posts and Telecommunications with nationwide 4G/5G coverage",coverage:"95%",technology:"4G/5G"},{name:"MYTEL",description:"Advanced 5G infrastructure with high-speed connectivity solutions",coverage:"90%",technology:"4G/5G"},{name:"ATOM",description:"IoT-focused connectivity with specialized device optimization",coverage:"85%",technology:"4G/NB-IoT"},{name:"U9",description:"Enterprise connectivity solutions with dedicated bandwidth",coverage:"80%",technology:"4G/LTE-M"}]},cta:{title:"Ready to Transform Your IoT Connectivity?",description:"Join leading enterprises using NexoraSIM for their eSIM management needs.",button:"Start Your Journey"}},mm:{hero:{title:"နောက်ဆုံးပေါ် eSIM ပလက်ဖောင်း",subtitle:"MPT၊ MYTEL၊ ATOM နှင့် U9 ကွန်ယက်များအတွက် စီးပွားဖြစ်အဆင့် entitlements server",description:"မြန်မာနိုင်ငံ၏ ထိပ်တန်း ဆက်သွယ်ရေးကွန်ယက်များတွင် ချောမွေ့သော eSIM ချိတ်ဆက်မှု၊ အဆင့်မြင့် ပံ့ပိုးမှုနှင့် အချိန်နှင့်တပြေးညီ စီမံခန့်ခွဲမှုဖြင့် သင့် IoT ecosystem ကို စွမ်းအားပေးပါ။",ctaPrimary:"စတင်အသုံးပြုရန်",ctaSecondary:"မှတ်တမ်းများ ကြည့်ရန်"},features:{title:"ပလက်ဖောင်း စွမ်းရည်များ",subtitle:"ချိတ်ဆက်ထားသော ကမ္ဘာအတွက် ပြည့်စုံသော eSIM စီမံခန့်ခွဲမှု",items:[{title:"Multi-Operator ပံ့ပိုးမှု",description:"မြန်မာနိုင်ငံတစ်ဝှမ်း ပြည့်စုံသော ဖုံးလွှမ်းမှုအတွက် MPT၊ MYTEL၊ ATOM နှင့် U9 ကွန်ယက်များနှင့် ချောမွေ့သော ပေါင်းစည်းမှု။",icon:""},{title:"အချိန်နှင့်တပြေးညီ ပံ့ပိုးမှု",description:"အဆင့်မြင့် သက်တမ်း စီမံခန့်ခွဲမှု စွမ်းရည်များဖြင့် ချက်ချင်း eSIM ပရိုဖိုင်း အသုံးချမှုနှင့် အသက်သွင်းမှု။",icon:""},{title:"IoT-အကောင်းဆုံးပြုလုပ်ထား",description:"အစုလိုက် လုပ်ဆောင်ချက်များ၊ အလိုအလျောက် ပံ့ပိုးမှုနှင့် ချဲ့ထွင်နိုင်သော ဗိသုကာဖြင့် IoT စက်ကိရိယာများအတွက် ရည်ရွယ်ချက်ဖြင့် တည်ဆောက်ထား။",icon:""},{title:"စီးပွားဖြစ် လုံခြုံရေး",description:"အစမှအဆုံး ကုဒ်ဝှက်မှု၊ လုံခြုံသော key စီမံခန့်ခွဲမှုနှင့် လိုက်နာမှု framework များဖြင့် ဘဏ်အဆင့် လုံခြုံရေး။",icon:""},{title:"Developer-လွယ်ကူသော APIs",description:"လျင်မြန်သော ပေါင်းစည်းမှုအတွက် ပြည့်စုံသော မှတ်တမ်းများ၊ SDKs နှင့် စမ်းသပ်မှု ကိရိယာများပါရှိသော RESTful APIs။",icon:""},{title:"အဆင့်မြင့် ခွဲခြမ်းစိတ်ဖြာမှု",description:"စိတ်ကြိုက်ပြင်ဆင်နိုင်သော dashboard များဖြင့် အချိန်နှင့်တပြေးညီ စောင့်ကြည့်မှု၊ အသုံးပြုမှု ခွဲခြမ်းစိတ်ဖြာမှုနှင့် စွမ်းဆောင်ရည် အမြင်များ။",icon:""}]},networks:{title:"ပံ့ပိုးထားသော ကွန်ယက်များ",subtitle:"မြန်မာနိုင်ငံ၏ ဆက်သွယ်ရေး ရှုခင်းတစ်ဝှမ်းတွင် ပြည့်စုံသော ဖုံးလွှမ်းမှု",operators:[{name:"MPT",description:"နိုင်ငံတဝန်း 4G/5G ဖုံးလွှမ်းမှုရှိသော Myanmar Posts and Telecommunications",coverage:"95%",technology:"4G/5G"},{name:"MYTEL",description:"မြန်နှုန်းမြင့် ချိတ်ဆက်မှု ဖြေရှင်းချက်များပါရှိသော အဆင့်မြင့် 5G အခြေခံအဆောက်အအုံ",coverage:"90%",technology:"4G/5G"},{name:"ATOM",description:"အထူးပြု စက်ကိရိယာ အကောင်းဆုံးပြုလုပ်မှုပါရှိသော IoT-အထူးပြု ချိတ်ဆက်မှု",coverage:"85%",technology:"4G/NB-IoT"},{name:"U9",description:"သီးသန့် bandwidth ပါရှိသော စီးပွားဖြစ် ချိတ်ဆက်မှု ဖြေရှင်းချက်များ",coverage:"80%",technology:"4G/LTE-M"}]},cta:{title:"သင့် IoT ချိတ်ဆက်မှုကို ပြောင်းလဲရန် အဆင်သင့်ဖြစ်ပြီလား?",description:"NexoraSIM ကို ၎င်းတို့၏ eSIM စီမံခန့်ခွဲမှု လိုအပ်ချက်များအတွက် အသုံးပြုနေသော ထိပ်တန်း စီးပွားရေးလုပ်ငန်းများနှင့် ပူးပေါင်းပါ။",button:"သင့်ခရီးစဉ်ကို စတင်ပါ"}}}[a];return Te.useEffect(()=>{Kv("/"),qi.timeline().fromTo(".hero-title",{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power2.out"}).fromTo(".hero-subtitle",{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:"power2.out"},"-=0.5").fromTo(".hero-description",{opacity:0,y:20},{opacity:1,y:0,duration:.6,ease:"power2.out"},"-=0.3").fromTo(".hero-buttons",{opacity:0,y:20},{opacity:1,y:0,duration:.6,ease:"power2.out"},"-=0.2"),qi.fromTo(".feature-card",{opacity:0,y:50,scale:.9},{opacity:1,y:0,scale:1,duration:.6,stagger:.1,ease:"power2.out",scrollTrigger:{trigger:".features-grid",start:"top 80%"}}),qi.fromTo(".network-card",{opacity:0,x:-50},{opacity:1,x:0,duration:.8,stagger:.2,ease:"power2.out",scrollTrigger:{trigger:".networks-grid",start:"top 80%"}})},[]),$.jsxs(vb,{title:i.hero.title,children:[$.jsx("section",{className:"hero",children:$.jsx("div",{className:"container",children:$.jsxs("div",{className:"hero-content",children:[$.jsx("h1",{className:"hero-title text-gradient",children:i.hero.title}),$.jsx("h2",{className:"hero-subtitle",children:i.hero.subtitle}),$.jsx("p",{className:"hero-description",children:i.hero.description}),$.jsxs("div",{className:"hero-buttons",children:[$.jsx(An,{to:"/getting-started",className:"btn btn-primary",children:i.hero.ctaPrimary}),$.jsx(An,{to:"/docs",className:"btn btn-secondary",children:i.hero.ctaSecondary})]})]})})}),$.jsx("section",{className:"features-section",children:$.jsxs("div",{className:"container",children:[$.jsxs("div",{className:"section-header",children:[$.jsx("h2",{className:"text-gradient",children:i.features.title}),$.jsx("p",{className:"section-subtitle",children:i.features.subtitle})]}),$.jsx("div",{className:"features-grid grid grid-3",children:i.features.items.map((s,o)=>$.jsxs("div",{className:"feature-card card",children:[$.jsx("h3",{children:s.title}),$.jsx("p",{children:s.description})]},o))})]})}),$.jsx("section",{className:"networks-section",children:$.jsxs("div",{className:"container",children:[$.jsxs("div",{className:"section-header",children:[$.jsx("h2",{className:"text-gradient",children:i.networks.title}),$.jsx("p",{className:"section-subtitle",children:i.networks.subtitle})]}),$.jsx("div",{className:"networks-grid grid grid-2",children:i.networks.operators.map((s,o)=>$.jsxs("div",{className:"network-card glass-panel",children:[$.jsxs("div",{className:"network-header",children:[$.jsx("h3",{children:s.name}),$.jsxs("div",{className:"network-stats",children:[$.jsx("span",{className:"coverage",children:s.coverage}),$.jsx("span",{className:"technology",children:s.technology})]})]}),$.jsx("p",{children:s.description}),$.jsx(An,{to:`/operators/${s.name.toLowerCase()}`,className:"network-link",children:"Learn More →"})]},o))})]})}),$.jsx("section",{className:"cta-section",children:$.jsx("div",{className:"container",children:$.jsxs("div",{className:"cta-content glass-panel",children:[$.jsx("h2",{className:"text-gradient",children:i.cta.title}),$.jsx("p",{children:i.cta.description}),$.jsx(An,{to:"/contact",className:"btn btn-primary",children:i.cta.button})]})})})]})},yb={home:{en:{title:"NexoraSIM Entitlements Server",subtitle:"Enterprise eSIM Platform for Myanmar's Connected Future",hero:{title:"Powering IoT Connectivity Across Myanmar",description:"Advanced eSIM entitlement server enabling seamless device provisioning and management for MPT, MYTEL, ATOM, and U9 networks.",cta:"Get Started",ctaSecondary:"View Documentation"},features:[{title:"Multi-Operator Support",description:"Seamless integration with all major Myanmar telecom operators including MPT, MYTEL, ATOM, and U9."},{title:"Enterprise-Grade Security",description:"Advanced encryption and authentication protocols ensuring secure eSIM provisioning and management."},{title:"Real-time Analytics",description:"Comprehensive monitoring and analytics dashboard for tracking device connectivity and performance."},{title:"Scalable Architecture",description:"Cloud-native infrastructure designed to handle millions of concurrent eSIM activations."}],stats:[{value:"1M+",label:"eSIMs Provisioned"},{value:"99.9%",label:"Uptime SLA"},{value:"4",label:"Operator Partners"},{value:"50ms",label:"Average Response Time"}]},mm:{title:"NexoraSIM Entitlements Server",subtitle:"မြန်မာနိုင်ငံ၏ ချိတ်ဆက်မှု အနာဂတ်အတွက် စီးပွားဖြစ် eSIM ပလက်ဖောင်း",hero:{title:"မြန်မာနိုင်ငံတစ်ဝှမ်းတွင် IoT ချိတ်ဆက်မှုကို စွမ်းအားပေးခြင်း",description:"MPT၊ MYTEL၊ ATOM နှင့် U9 ကွန်ယက်များအတွက် ချောမွေ့သော စက်ပစ္စည်း ပံ့ပိုးမှုနှင့် စီမံခန့်ခွဲမှုကို ဖြစ်စေသော အဆင့်မြင့် eSIM entitlement server။",cta:"စတင်ပါ",ctaSecondary:"မှတ်တမ်းများကြည့်ရှုပါ"},features:[{title:"Multi-Operator ပံ့ပိုးမှု",description:"MPT၊ MYTEL၊ ATOM နှင့် U9 အပါအဝင် မြန်မာနိုင်ငံ၏ အဓိက တယ်လီကွန်း အော်ပရေတာများနှင့် ချောမွေ့သော ပေါင်းစည်းမှု။"},{title:"စီးပွားဖြစ်အဆင့် လုံခြုံရေး",description:"လုံခြုံသော eSIM ပံ့ပိုးမှုနှင့် စီမံခန့်ခွဲမှုကို သေချာစေသော အဆင့်မြင့် ကုဒ်ဝှက်ခြင်းနှင့် အထောက်အထား ပရိုတိုကောများ။"},{title:"အချိန်နှင့်တပြေးညီ ခွဲခြမ်းစိတ်ဖြာမှု",description:"စက်ပစ္စည်း ချိတ်ဆက်မှုနှင့် စွမ်းဆောင်ရည်ကို ခြေရာခံရန်အတွက် ပြည့်စုံသော စောင့်ကြည့်မှုနှင့် ခွဲခြမ်းစိတ်ဖြာမှု dashboard။"},{title:"တိုးချဲ့နိုင်သော ဗိသုကာ",description:"သန်းပေါင်းများစွာသော တပြိုင်နက် eSIM အသက်ဝင်မှုများကို ကိုင်တွယ်ရန် ဒီဇိုင်းထုတ်ထားသော cloud-native အခြေခံအဆောက်အအုံ။"}],stats:[{value:"1M+",label:"eSIM များ ပံ့ပိုးပြီး"},{value:"99.9%",label:"Uptime SLA"},{value:"4",label:"အော်ပရေတာ လုပ်ဖော်ကိုင်ဖက်များ"},{value:"50ms",label:"ပျမ်းမျှ တုံ့ပြန်မှု အချိန်"}]}},about:{en:{title:"About NexoraSIM",content:`
        <h2>Leading eSIM Innovation in Myanmar</h2>
        <p>NexoraSIM is Myanmar's premier eSIM entitlement server platform, designed to revolutionize how devices connect to cellular networks across the country. Our cutting-edge technology enables seamless provisioning, management, and monitoring of eSIM profiles for IoT devices, smartphones, and enterprise solutions.</p>
        
        <h3>Our Technology</h3>
        <p>Built on cloud-native architecture, our platform supports all major Myanmar telecom operators including MPT, MYTEL, ATOM, and U9. We provide enterprise-grade security, real-time analytics, and scalable infrastructure capable of handling millions of concurrent connections.</p>
        
        <h3>Mission-Critical Reliability</h3>
        <p>With 99.9% uptime SLA and sub-50ms response times, NexoraSIM ensures your connected devices stay online when it matters most. Our redundant infrastructure and advanced monitoring systems provide the reliability your business demands.</p>
      `},mm:{title:"NexoraSIM အကြောင်း",content:`
        <h2>မြန်မာနိုင်ငံတွင် eSIM ဆန်းသစ်တီထွင်မှုကို ဦးဆောင်ခြင်း</h2>
        <p>NexoraSIM သည် မြန်မာနိုင်ငံ၏ ထိပ်တန်း eSIM entitlement server ပလက်ဖောင်းဖြစ်ပြီး၊ နိုင်ငံတစ်ဝှမ်းရှိ cellular ကွန်ယက်များသို့ စက်ပစ္စည်းများ ချိတ်ဆက်ပုံကို တော်လှန်ရန် ဒီဇိုင်းထုတ်ထားသည်။ ကျွန်ုပ်တို့၏ ခေတ်မီနည်းပညာသည် IoT စက်ပစ္စည်းများ၊ စမတ်ဖုန်းများနှင့် စီးပွားဖြစ် ဖြေရှင်းချက်များအတွက် eSIM ပရိုဖိုင်များ၏ ချောမွေ့သော ပံ့ပိုးမှု၊ စီမံခန့်ခွဲမှုနှင့် စောင့်ကြည့်မှုကို ဖြစ်စေသည်။</p>
        
        <h3>ကျွန်ုပ်တို့၏ နည်းပညာ</h3>
        <p>Cloud-native ဗိသုကာပေါ်တွင် တည်ဆောက်ထားသော ကျွန်ုပ်တို့၏ ပလက်ဖောင်းသည် MPT၊ MYTEL၊ ATOM နှင့် U9 အပါအဝင် မြန်မာနိုင်ငံ၏ အဓိက တယ်လီကွန်း အော်ပရေတာများအားလုံးကို ပံ့ပိုးသည်။ ကျွန်ုပ်တို့သည် စီးပွားဖြစ်အဆင့် လုံခြုံရေး၊ အချိန်နှင့်တပြေးညီ ခွဲခြမ်းစိတ်ဖြာမှုနှင့် သန်းပေါင်းများစွာသော တပြိုင်နက် ချိတ်ဆက်မှုများကို ကိုင်တွယ်နိုင်သော တိုးချဲ့နိုင်သော အခြေခံအဆောက်အအုံကို ပံ့ပိုးပါသည်။</p>
        
        <h3>မစ်ရှင်-အရေးကြီး ယုံကြည်စိတ်ချရမှု</h3>
        <p>99.9% uptime SLA နှင့် 50ms အောက် တုံ့ပြန်မှု အချိန်များဖြင့်၊ NexoraSIM သည် အရေးကြီးသော အချိန်များတွင် သင်၏ ချိတ်ဆက်ထားသော စက်ပစ္စည်းများ အွန်လိုင်းတွင် ရှိနေစေရန် သေချာစေသည်။ ကျွန်ုပ်တို့၏ အပိုဆောင်း အခြေခံအဆောက်အအုံနှင့် အဆင့်မြင့် စောင့်ကြည့်မှု စနစ်များသည် သင်၏ လုပ်ငန်းတွင် လိုအပ်သော ယုံကြည်စိတ်ချရမှုကို ပံ့ပိုးပါသည်။</p>
      `}},"esim-basics":{en:{title:"eSIM Technology Fundamentals",content:`
        <h2>Understanding eSIM Technology</h2>
        <p>An embedded SIM (eSIM) is a digital SIM that allows you to activate a cellular plan without having to use a physical SIM card. eSIMs are built into devices and can be programmed remotely, making them ideal for IoT applications and modern connected devices.</p>
        
        <h3>Key Benefits of eSIM</h3>
        <ul>
          <li><strong>Remote Provisioning:</strong> Activate and manage cellular plans over-the-air</li>
          <li><strong>Multiple Profiles:</strong> Store multiple operator profiles on a single device</li>
          <li><strong>Global Connectivity:</strong> Switch between operators without physical SIM swaps</li>
          <li><strong>Enhanced Security:</strong> Tamper-resistant hardware with encrypted profiles</li>
          <li><strong>Space Efficiency:</strong> Smaller form factor enables thinner device designs</li>
        </ul>
        
        <h3>eSIM in IoT Applications</h3>
        <p>For IoT devices, eSIM technology provides unparalleled flexibility and reliability. Devices can automatically switch between operators based on coverage, cost, or performance requirements. This is particularly valuable for applications like:</p>
        <ul>
          <li>Connected vehicles and fleet management</li>
          <li>Industrial IoT sensors and monitoring systems</li>
          <li>Smart city infrastructure</li>
          <li>Healthcare and medical devices</li>
          <li>Agricultural and environmental monitoring</li>
        </ul>
        
        <h3>Technical Architecture</h3>
        <p>eSIM technology is built on GSMA standards including RSP (Remote SIM Provisioning) and eUICC (embedded Universal Integrated Circuit Card). The NexoraSIM platform implements these standards to provide seamless integration with Myanmar's telecom operators.</p>
      `},mm:{title:"eSIM နည်းပညာ အခြေခံများ",content:`
        <h2>eSIM နည်းပညာကို နားလည်ခြင်း</h2>
        <p>Embedded SIM (eSIM) သည် ရုပ်ပိုင်းဆိုင်ရာ SIM ကတ်ကို အသုံးမပြုဘဲ cellular plan ကို အသက်ဝင်စေနိုင်သော ဒစ်ဂျစ်တယ် SIM ဖြစ်သည်။ eSIM များကို စက်ပစ္စည်းများအတွင်း တည်ဆောက်ထားပြီး အဝေးမှ ပရိုဂရမ်လုပ်နိုင်သောကြောင့် IoT အပလီကေးရှင်းများနှင့် ခေတ်မီ ချိတ်ဆက်ထားသော စက်ပစ္စည်းများအတွက် အကောင်းဆုံးဖြစ်သည်။</p>
        
        <h3>eSIM ၏ အဓိက အကျိုးကျေးဇူးများ</h3>
        <ul>
          <li><strong>အဝေးမှ ပံ့ပိုးမှု:</strong> လေကြောင်းမှတစ်ဆင့် cellular plan များကို အသက်ဝင်စေပြီး စီမံခန့်ခွဲခြင်း</li>
          <li><strong>မျိုးစုံ ပရိုဖိုင်းများ:</strong> စက်ပစ္စည်းတစ်ခုတည်းတွင် အော်ပရေတာ ပရိုဖိုင်းများစွာကို သိမ်းဆည်းခြင်း</li>
          <li><strong>ကမ္ဘာ့ ချိတ်ဆက်မှု:</strong> ရုပ်ပိုင်းဆိုင်ရာ SIM လဲလှယ်မှုမရှိဘဲ အော်ပရေတာများကြား ပြောင်းလဲခြင်း</li>
          <li><strong>တိုးမြှင့်ထားသော လုံခြုံရေး:</strong> ကုဒ်ဝှက်ထားသော ပရိုဖိုင်းများဖြင့် ပျက်စီးမှု-ခံနိုင်သော ဟာ့ဒ်ဝဲ</li>
          <li><strong>နေရာ ထိရောက်မှု:</strong> ပိုမိုသေးငယ်သော ပုံစံသည် ပိုမိုပါးလွှာသော စက်ပစ္စည်း ဒီဇိုင်းများကို ဖြစ်စေသည်</li>
        </ul>
        
        <h3>IoT အပလီကေးရှင်းများတွင် eSIM</h3>
        <p>IoT စက်ပစ္စည်းများအတွက်၊ eSIM နည်းပညာသည် မတူညီသော လိုက်လျောညီထွေမှုနှင့် ယုံကြည်စိတ်ချရမှုကို ပံ့ပိုးပါသည်။ စက်ပစ္စည်းများသည် coverage၊ ကုန်ကျစရိတ် သို့မဟုတ် စွမ်းဆောင်ရည် လိုအပ်ချက်များအပေါ် အခြေခံ၍ အော်ပရေတာများကြား အလိုအလျောက် ပြောင်းလဲနိုင်သည်။ ၎င်းသည် အောက်ပါ အပလီကေးရှင်းများအတွက် အထူးတန်ဖိုးရှိသည်-</p>
        <ul>
          <li>ချိတ်ဆက်ထားသော ယာဉ်များနှင့် fleet စီမံခန့်ခွဲမှု</li>
          <li>စက်မှုလုပ်ငန်း IoT sensor များနှင့် စောင့်ကြည့်မှု စနစ်များ</li>
          <li>စမတ်စီးတီး အခြေခံအဆောက်အအုံ</li>
          <li>ကျန်းမာရေးနှင့် ဆေးဘက်ဆိုင်ရာ စက်ပစ္စည်းများ</li>
          <li>စိုက်ပျိုးရေးနှင့် ပတ်ဝန်းကျင် စောင့်ကြည့်မှု</li>
        </ul>
        
        <h3>နည်းပညာ ဗိသုကာ</h3>
        <p>eSIM နည်းပညာသည် RSP (Remote SIM Provisioning) နှင့် eUICC (embedded Universal Integrated Circuit Card) အပါအဝင် GSMA စံနှုန်းများပေါ်တွင် တည်ဆောက်ထားသည်။ NexoraSIM ပလက်ဖောင်းသည် မြန်မာနိုင်ငံ၏ တယ်လီကွန်း အော်ပရေတာများနှင့် ချောမွေ့သော ပေါင်းစည်းမှုကို ပံ့ပိုးရန် ဤစံနှုန်းများကို အကောင်အထည်ဖော်သည်။</p>
      `}},"operator-mpt":{en:{title:"MPT Integration",content:`
        <h2>Myanmar Posts and Telecommunications (MPT) Integration</h2>
        <p>NexoraSIM provides seamless integration with MPT, Myanmar's largest telecommunications operator. Our platform enables efficient eSIM provisioning and management across MPT's extensive network infrastructure.</p>
        
        <h3>Network Coverage</h3>
        <p>MPT offers the most comprehensive network coverage in Myanmar, reaching over 95% of the population. Our integration ensures reliable connectivity across urban and rural areas, making it ideal for nationwide IoT deployments.</p>
        
        <h3>Technical Specifications</h3>
        <ul>
          <li>2G/3G/4G network support</li>
          <li>Real-time provisioning API</li>
          <li>Bulk activation capabilities</li>
          <li>Advanced billing integration</li>
          <li>Network quality monitoring</li>
        </ul>
        
        <h3>Use Cases</h3>
        <p>MPT integration is particularly suitable for:</p>
        <ul>
          <li>Rural IoT deployments</li>
          <li>Agricultural monitoring systems</li>
          <li>Remote infrastructure monitoring</li>
          <li>Emergency communication systems</li>
        </ul>
      `},mm:{title:"MPT ပေါင်းစည်းမှု",content:`
        <h2>Myanmar Posts and Telecommunications (MPT) ပေါင်းစည်းမှု</h2>
        <p>NexoraSIM သည် မြန်မာနိုင်ငံ၏ အကြီးဆုံး တယ်လီကွန်းဆက်သွယ်ရေး အော်ပရေတာဖြစ်သော MPT နှင့် ချောမွေ့သော ပေါင်းစည်းမှုကို ပံ့ပိုးပါသည်။ ကျွန်ုပ်တို့၏ ပလက်ဖောင်းသည် MPT ၏ ကျယ်ပြန့်သော ကွန်ယက် အခြေခံအဆောက်အအုံတစ်ဝှမ်းတွင် ထိရောက်သော eSIM ပံ့ပိုးမှုနှင့် စီမံခန့်ခွဲမှုကို ဖြစ်စေသည်။</p>
        
        <h3>ကွန်ယက် လွှမ်းခြုံမှု</h3>
        <p>MPT သည် မြန်မာနိုင်ငံတွင် အပြည့်အဝဆုံး ကွန်ယက် လွှမ်းခြုံမှုကို ပေးဆောင်ပြီး လူဦးရေ 95% ကျော်ကို ရောက်ရှိသည်။ ကျွန်ုပ်တို့၏ ပေါင်းစည်းမှုသည် မြို့ပြနှင့် ကျေးလက်ဒေသများတွင် ယုံကြည်စိတ်ချရသော ချိတ်ဆက်မှုကို သေချာစေပြီး နိုင်ငံတစ်ဝှမ်း IoT အသုံးချမှုများအတွက် အကောင်းဆုံးဖြစ်စေသည်။</p>
        
        <h3>နည်းပညာ သတ်မှတ်ချက်များ</h3>
        <ul>
          <li>2G/3G/4G ကွန်ယက် ပံ့ပိုးမှု</li>
          <li>အချိန်နှင့်တပြေးညီ ပံ့ပိုးမှု API</li>
          <li>အစုလိုက် အသက်ဝင်မှု စွမ်းရည်များ</li>
          <li>အဆင့်မြင့် ငွေတောင်းခံမှု ပေါင်းစည်းမှု</li>
          <li>ကွန်ယက် အရည်အသွေး စောင့်ကြည့်မှု</li>
        </ul>
        
        <h3>အသုံးပြုမှု ကိစ္စများ</h3>
        <p>MPT ပေါင်းစည်းမှုသည် အောက်ပါတို့အတွက် အထူးသင့်လျော်သည်-</p>
        <ul>
          <li>ကျေးလက် IoT အသုံးချမှုများ</li>
          <li>စိုက်ပျိုးရေး စောင့်ကြည့်မှု စနစ်များ</li>
          <li>အဝေးမှ အခြေခံအဆောက်အအုံ စောင့်ကြည့်မှု</li>
          <li>အရေးပေါ် ဆက်သွယ်ရေး စနစ်များ</li>
        </ul>
      `}},"docs/api-overview":{en:{title:"API Overview",content:`
        <h2>NexoraSIM Entitlement Server API</h2>
        <p>Enterprise-grade eSIM provisioning API for Myanmar telecommunications infrastructure. Supports MPT, MYTEL, ATOM, and U9 operators with comprehensive device management and real-time analytics.</p>
        
        <h3>Base URL</h3>
        <code>https://api.nexorasim.com/v2</code>
        
        <h3>Authentication</h3>
        <p>OAuth 2.0 with API key authentication:</p>
        <pre><code>Authorization: Bearer {access_token}
X-API-Key: {your_api_key}
Content-Type: application/json</code></pre>
        
        <h3>Core Endpoints</h3>
        <h4>eSIM Management</h4>
        <ul>
          <li><strong>POST /v2/esim/provision</strong> - Provision eSIM with operator selection</li>
          <li><strong>GET /v2/esim/{iccid}</strong> - Retrieve comprehensive eSIM details</li>
          <li><strong>PUT /v2/esim/{iccid}/activate</strong> - Activate with network configuration</li>
          <li><strong>PUT /v2/esim/{iccid}/suspend</strong> - Suspend eSIM temporarily</li>
          <li><strong>DELETE /v2/esim/{iccid}</strong> - Permanently deactivate eSIM</li>
          <li><strong>POST /v2/esim/{iccid}/transfer</strong> - Transfer between operators</li>
        </ul>
        
        <h4>Operator Integration</h4>
        <ul>
          <li><strong>GET /v2/operators</strong> - List Myanmar operators</li>
          <li><strong>GET /v2/operators/mpt/coverage</strong> - MPT coverage areas</li>
          <li><strong>GET /v2/operators/mytel/plans</strong> - MYTEL data plans</li>
          <li><strong>GET /v2/operators/atom/status</strong> - ATOM network status</li>
          <li><strong>GET /v2/operators/u9/roaming</strong> - U9 roaming capabilities</li>
        </ul>
        
        <h3>Response Format</h3>
        <pre><code>{
  "success": true,
  "data": {
    "iccid": "89886066000000000001",
    "operator": "MPT",
    "status": "active",
    "profile": {
      "msisdn": "+95912345678",
      "imsi": "414660000000001",
      "network_access": "4G/LTE"
    }
  },
  "message": "eSIM provisioned successfully",
  "timestamp": "2024-01-15T10:30:00Z",
  "request_id": "req_abc123def456"
}</code></pre>
        
        <h3>Rate Limits</h3>
        <ul>
          <li><strong>Standard:</strong> 1,000 requests/hour</li>
          <li><strong>Professional:</strong> 10,000 requests/hour</li>
          <li><strong>Enterprise:</strong> 100,000 requests/hour</li>
        </ul>
      `},mm:{title:"API ခြုံငုံသုံးသပ်ချက်",content:`
        <h2>NexoraSIM Entitlement Server API</h2>
        <p>မြန်မာနိုင်ငံ တယ်လီကွန်းဆက်သွယ်ရေး အခြေခံအဆောက်အအုံအတွက် စီးပွားဖြစ်အဆင့် eSIM ပံ့ပိုးမှု API။ ပြည့်စုံသော စက်ပစ္စည်း စီမံခန့်ခွဲမှုနှင့် အချိန်နှင့်တပြေးညီ ခွဲခြမ်းစိတ်ဖြာမှုဖြင့် MPT၊ MYTEL၊ ATOM နှင့် U9 အော်ပရေတာများကို ပံ့ပိုးသည်။</p>
        
        <h3>အခြေခံ URL</h3>
        <code>https://api.nexorasim.com/v2</code>
        
        <h3>အထောက်အထား</h3>
        <p>API key အထောက်အထားဖြင့် OAuth 2.0-</p>
        <pre><code>Authorization: Bearer {access_token}
X-API-Key: {your_api_key}
Content-Type: application/json</code></pre>
        
        <h3>အဓိက Endpoint များ</h3>
        <h4>eSIM စီမံခန့်ခွဲမှု</h4>
        <ul>
          <li><strong>POST /v2/esim/provision</strong> - အော်ပရေတာ ရွေးချယ်မှုဖြင့် eSIM ပံ့ပိုးခြင်း</li>
          <li><strong>GET /v2/esim/{iccid}</strong> - ပြည့်စုံသော eSIM အသေးစိတ်များ ရယူခြင်း</li>
          <li><strong>PUT /v2/esim/{iccid}/activate</strong> - ကွန်ယက် ပြင်ဆင်မှုဖြင့် အသက်ဝင်စေခြင်း</li>
          <li><strong>PUT /v2/esim/{iccid}/suspend</strong> - eSIM ကို ယာယီ ရပ်ဆိုင်းခြင်း</li>
          <li><strong>DELETE /v2/esim/{iccid}</strong> - eSIM ကို အပြီးအပိုင် ပိတ်ခြင်း</li>
          <li><strong>POST /v2/esim/{iccid}/transfer</strong> - အော်ပရေတာများကြား လွှဲပြောင်းခြင်း</li>
        </ul>
        
        <h4>အော်ပရေတာ ပေါင်းစည်းမှု</h4>
        <ul>
          <li><strong>GET /v2/operators</strong> - မြန်မာ အော်ပရေတာများ စာရင်းပြုစုခြင်း</li>
          <li><strong>GET /v2/operators/mpt/coverage</strong> - MPT လွှမ်းခြုံမှု ဧရိယာများ</li>
          <li><strong>GET /v2/operators/mytel/plans</strong> - MYTEL ဒေတာ အစီအစဉ်များ</li>
          <li><strong>GET /v2/operators/atom/status</strong> - ATOM ကွန်ယက် အခြေအနေ</li>
          <li><strong>GET /v2/operators/u9/roaming</strong> - U9 roaming စွမ်းရည်များ</li>
        </ul>
        
        <h3>တုံ့ပြန်မှု ပုံစံ</h3>
        <pre><code>{
  "success": true,
  "data": {
    "iccid": "89886066000000000001",
    "operator": "MPT",
    "status": "active",
    "profile": {
      "msisdn": "+95912345678",
      "imsi": "414660000000001",
      "network_access": "4G/LTE"
    }
  },
  "message": "eSIM အောင်မြင်စွာ ပံ့ပိုးပြီးပါပြီ",
  "timestamp": "2024-01-15T10:30:00Z",
  "request_id": "req_abc123def456"
}</code></pre>
        
        <h3>နှုန်းထား ကန့်သတ်ချက်များ</h3>
        <ul>
          <li><strong>Standard:</strong> တစ်နာရီလျှင် တောင်းဆိုမှု 1,000 ခု</li>
          <li><strong>Professional:</strong> တစ်နာရီလျှင် တောင်းဆိုမှု 10,000 ခု</li>
          <li><strong>Enterprise:</strong> တစ်နာရီလျှင် တောင်းဆိုမှု 100,000 ခု</li>
        </ul>
      `}}},Sb=({pageKey:a,title:e,category:t})=>{const{language:i}=ol();Te.useEffect(()=>{Kv(`/${a}`),qi.fromTo(".page-content",{opacity:0,y:50},{opacity:1,y:0,duration:.8,ease:"power2.out"}),qi.fromTo(".page-title",{opacity:0,scale:.9},{opacity:1,scale:1,duration:.6,delay:.2,ease:"back.out(1.7)"}),qi.fromTo(".content-section",{opacity:0,x:-30},{opacity:1,x:0,duration:.6,delay:.4,stagger:.1,ease:"power2.out"})},[a]);const s=yb[a]?.[i]||Mb(a,e,i);return $.jsx("div",{className:"container",children:$.jsxs("div",{className:"page-content",children:[$.jsxs("div",{className:"page-header",children:[$.jsxs("div",{className:"breadcrumb",children:[$.jsx("span",{className:"breadcrumb-item",children:"Home"}),t&&$.jsx("span",{className:"breadcrumb-item",children:t}),$.jsx("span",{className:"breadcrumb-item active",children:e})]}),$.jsx("h1",{className:"page-title text-gradient",children:s.title})]}),$.jsxs("div",{className:"content-wrapper",children:[$.jsx("div",{className:"content-body content-section",dangerouslySetInnerHTML:{__html:s.content}}),t==="docs"&&$.jsx("div",{className:"docs-sidebar content-section",children:$.jsxs("div",{className:"glass-panel",children:[$.jsx("h3",{children:"Quick Links"}),$.jsxs("ul",{children:[$.jsx("li",{children:$.jsx("a",{href:"/docs/api-overview",children:"API Overview"})}),$.jsx("li",{children:$.jsx("a",{href:"/docs/authentication",children:"Authentication"})}),$.jsx("li",{children:$.jsx("a",{href:"/docs/sdk-overview",children:"SDK Guide"})}),$.jsx("li",{children:$.jsx("a",{href:"/docs/examples",children:"Code Examples"})})]})]})})]})]})})},Mb=(a,e,t)=>{const i={en:{title:e||"Page Title",content:`
        <h2>Welcome to ${e}</h2>
        <p>This page provides comprehensive information about ${e.toLowerCase()}. Our platform offers cutting-edge solutions for eSIM technology and IoT connectivity across Myanmar.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Advanced eSIM provisioning and management</li>
          <li>Multi-operator support (MPT, MYTEL, ATOM, U9)</li>
          <li>Real-time monitoring and analytics</li>
          <li>Enterprise-grade security</li>
          <li>Scalable cloud infrastructure</li>
        </ul>
        
        <h3>Getting Started</h3>
        <p>To learn more about our services, please visit our <a href="/docs">documentation</a> or <a href="/contact">contact our team</a> for personalized assistance.</p>
      `},mm:{title:e||"စာမျက်နှာ ခေါင်းစဉ်",content:`
        <h2>${e} သို့ ကြိုဆိုပါသည်</h2>
        <p>ဤစာမျက်နှာသည် ${e} အကြောင်း ပြည့်စုံသော အချက်အလက်များကို ပံ့ပိုးပါသည်။ ကျွန်ုပ်တို့၏ ပလက်ဖောင်းသည် မြန်မာနိုင်ငံတစ်ဝှမ်းတွင် eSIM နည်းပညာနှင့် IoT ချိတ်ဆက်မှုအတွက် ခေတ်မီ ဖြေရှင်းချက်များကို ပေးဆောင်ပါသည်။</p>
        
        <h3>အဓိက လုပ်ဆောင်ချက်များ</h3>
        <ul>
          <li>အဆင့်မြင့် eSIM ပံ့ပိုးမှုနှင့် စီမံခန့်ခွဲမှု</li>
          <li>Multi-operator ပံ့ပိုးမှု (MPT, MYTEL, ATOM, U9)</li>
          <li>အချိန်နှင့်တပြေးညီ စောင့်ကြည့်မှုနှင့် ခွဲခြမ်းစိတ်ဖြာမှု</li>
          <li>စီးပွားဖြစ်အဆင့် လုံခြုံရေး</li>
          <li>တိုးချဲ့နိုင်သော cloud အခြေခံအဆောက်အအုံ</li>
        </ul>
        
        <h3>စတင်ခြင်း</h3>
        <p>ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများအကြောင်း ပိုမိုလေ့လာရန်၊ ကျွန်ုပ်တို့၏ <a href="/docs">မှတ်တမ်းများ</a>ကို လည်ပတ်ပါ သို့မဟုတ် ကိုယ်ပိုင်အကူအညီအတွက် <a href="/contact">ကျွန်ုပ်တို့၏ အဖွဲ့</a>ကို ဆက်သွယ်ပါ။</p>
      `}};return i[t]||i.en},wb=()=>$.jsxs("div",{className:"loading",children:[$.jsx("div",{className:"loading-spinner"}),$.jsx("p",{children:"Loading..."})]});function Tb(){return $.jsx(jS,{children:$.jsx(GS,{children:$.jsxs("div",{className:"app",children:[$.jsx(tE,{}),$.jsx(gb,{}),$.jsx("main",{className:"main-content",children:$.jsx(Te.Suspense,{fallback:$.jsx(wb,{}),children:$.jsxs(kS,{children:[$.jsx(Vu,{path:"/",element:$.jsx(xb,{})}),E0.filter(a=>a.path!=="/").map(a=>{const e=a.path.slice(1).replace(/\//g,"/");return $.jsx(Vu,{path:a.path,element:$.jsx(Sb,{pageKey:e,title:a.title,category:a.category})},a.path)}),$.jsx(Vu,{path:"*",element:$.jsx("div",{className:"container",children:$.jsxs("div",{className:"hero",children:[$.jsx("h1",{className:"text-gradient",children:"404 - Page Not Found"}),$.jsx("p",{children:"The page you're looking for doesn't exist."}),$.jsx("a",{href:"/",className:"btn btn-primary",children:"Go Home"})]})})})]})})}),$.jsx(_b,{})]})})})}Vy.createRoot(document.getElementById("root")).render($.jsx(f0.StrictMode,{children:$.jsx(Tb,{})}));
