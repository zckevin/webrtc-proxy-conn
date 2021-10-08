/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/classCallCheck.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/classCallCheck.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/createClass.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/createClass.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/inherits.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/inherits.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/typeof.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/typeof.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/_ably@1.2.10@ably/browser/static/ably-commonjs.js":
/*!************************************************************************!*\
  !*** ./node_modules/_ably@1.2.10@ably/browser/static/ably-commonjs.js ***!
  \************************************************************************/
/***/ ((module) => {

/*!
 * @license Copyright 2021, Ably
 * 
 * Ably JavaScript Library v1.2.10
 * https://github.com/ably/ably-js
 * 
 * Ably Realtime Messaging
 * https://www.ably.com
 * 
 * Released under the Apache Licence v2.0
 */(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else {}})(window,function(){return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __nested_webpack_require_691__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_691__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__nested_webpack_require_691__.m=modules;/******/ /******/ // expose the module cache
/******/__nested_webpack_require_691__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__nested_webpack_require_691__.d=function(exports,name,getter){/******/if(!__nested_webpack_require_691__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__nested_webpack_require_691__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__nested_webpack_require_691__.t=function(value,mode){/******/if(mode&1)value=__nested_webpack_require_691__(value);/******/if(mode&8)return value;/******/if(mode&4&&typeof value==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__nested_webpack_require_691__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value)__nested_webpack_require_691__.d(ns,key,function(key){return value[key];}.bind(null,key));/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__nested_webpack_require_691__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__nested_webpack_require_691__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__nested_webpack_require_691__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__nested_webpack_require_691__.p="";/******/ /******/ /******/ // Load entry module and return exports
/******/return __nested_webpack_require_691__(__nested_webpack_require_691__.s=50);/******/}(/************************************************************************/ /******/[/* 0 */ /***/function(module,__webpack_exports__,__nested_webpack_require_3835__){"use strict";/* WEBPACK VAR INJECTION */(function(global){/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_3835__(3);var Logger=function(){var consoleLogger,errorLogger;/* Can't just check for console && console.log; fails in IE <=9 */if(typeof Window==='undefined'&&typeof WorkerGlobalScope==='undefined'||/* node */global.console&&global.console.log&&typeof global.console.log.apply==='function'/* sensible browsers */){consoleLogger=function(){console.log.apply(console,arguments);};errorLogger=console.warn?function(){console.warn.apply(console,arguments);}:consoleLogger;}else if(global.console&&global.console.log){/* IE <= 9 with the console open -- console.log does not
		 * inherit from Function, so has no apply method */consoleLogger=errorLogger=function(){Function.prototype.apply.call(console.log,console,arguments);};}else{/* IE <= 9 when dev tools are closed - window.console not even defined */consoleLogger=errorLogger=function(){};}function pad(str,three){return('000'+str).slice(-2-(three||0));}var LOG_NONE=0,LOG_ERROR=1,LOG_MAJOR=2,LOG_MINOR=3,LOG_MICRO=4;var LOG_DEFAULT=LOG_ERROR,LOG_DEBUG=LOG_MICRO;var logLevel=LOG_DEFAULT;function getHandler(logger){return platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].logTimestamps?function(msg){var time=new Date();logger(pad(time.getHours())+':'+pad(time.getMinutes())+':'+pad(time.getSeconds())+'.'+pad(time.getMilliseconds(),true)+' '+msg);}:logger;}var logHandler=getHandler(consoleLogger),logErrorHandler=getHandler(errorLogger);/* public constructor */function Logger(args){}/* public constants */Logger.LOG_NONE=LOG_NONE,Logger.LOG_ERROR=LOG_ERROR,Logger.LOG_MAJOR=LOG_MAJOR,Logger.LOG_MINOR=LOG_MINOR,Logger.LOG_MICRO=LOG_MICRO;Logger.LOG_DEFAULT=LOG_DEFAULT,Logger.LOG_DEBUG=LOG_DEBUG;/* public static functions */Logger.logAction=function(level,action,message){if(Logger.shouldLog(level)){(level===LOG_ERROR?logErrorHandler:logHandler)('Ably: '+action+': '+message);}};Logger.deprecated=function(original,replacement){Logger.deprecatedWithMsg(original,"Please use '"+replacement+"' instead.");};Logger.deprecatedWithMsg=function(funcName,msg){if(Logger.shouldLog(LOG_ERROR)){logErrorHandler("Ably: Deprecation warning - '"+funcName+"' is deprecated and will be removed from a future version. "+msg);}};/* Where a logging operation is expensive, such as serialisation of data, use shouldLog will prevent
	   the object being serialised if the log level will not output the message */Logger.shouldLog=function(level){return level<=logLevel;};Logger.setLog=function(level,handler){if(level!==undefined)logLevel=level;if(handler!==undefined)logHandler=logErrorHandler=handler;};return Logger;}();/* harmony default export */__webpack_exports__["a"]=Logger;/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_3835__(17));/***/},/* 1 */ /***/function(module,__webpack_exports__,__nested_webpack_require_6737__){"use strict";/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_6737__(3);/* harmony import */var _defaults__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_6737__(5);/* harmony import */var platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_6737__(4);var Utils=function(){var msgpack=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].msgpack;function Utils(){}function randomPosn(arrOrStr){return Math.floor(Math.random()*arrOrStr.length);}/*
	 * Add a set of properties to a target object
	 * target: the target object
	 * props:  an object whose enumerable properties are
	 *         added, by reference only
	 */Utils.mixin=function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];if(!source){break;}var hasOwnProperty=source.hasOwnProperty;for(var key in source){if(!hasOwnProperty||hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/*
	 * Add a set of properties to a target object
	 * target: the target object
	 * props:  an object whose enumerable properties are
	 *         added, by reference only
	 */Utils.copy=function(src){return Utils.mixin({},src);};/*
	 * Determine whether or not a given object is
	 * an array.
	 */Utils.isArray=Array.isArray||function(ob){return Object.prototype.toString.call(ob)=='[object Array]';};/*
	 * Ensures that an Array object is always returned
	 * returning the original Array of obj is an Array
	 * else wrapping the obj in a single element Array
	 */Utils.ensureArray=function(obj){if(Utils.isEmptyArg(obj)){return[];}if(Utils.isArray(obj)){return obj;}return[obj];};/* ...Or an Object (in the narrow sense) */Utils.isObject=function(ob){return Object.prototype.toString.call(ob)=='[object Object]';};/*
	 * Determine whether or not an object contains
	 * any enumerable properties.
	 * ob: the object
	 */Utils.isEmpty=function(ob){for(var prop in ob)return false;return true;};Utils.isOnlyPropIn=function(ob,property){for(var prop in ob){if(prop!==property){return false;}}return true;};/*
	 * Determine whether or not an argument to an overloaded function is
	 * undefined (missing) or null.
	 * This method is useful when constructing functions such as (WebIDL terminology):
	 *   off([TreatUndefinedAs=Null] DOMString? event)
	 * as you can then confirm the argument using:
	 *   Utils.isEmptyArg(event)
	 */Utils.isEmptyArg=function(arg){return arg===null||arg===undefined;};/*
	 * Perform a simple shallow clone of an object.
	 * Result is an object irrespective of whether
	 * the input is an object or array. All
	 * enumerable properties are copied.
	 * ob: the object
	 */Utils.shallowClone=function(ob){var result=new Object();for(var prop in ob)result[prop]=ob[prop];return result;};/*
	 * Clone an object by creating a new object with the
	 * given object as its prototype. Optionally
	 * a set of additional own properties can be
	 * supplied to be added to the newly created clone.
	 * ob:            the object to be cloned
	 * ownProperties: optional object with additional
	 *                properties to add
	 */Utils.prototypicalClone=function(ob,ownProperties){function F(){}F.prototype=ob;var result=new F();if(ownProperties)Utils.mixin(result,ownProperties);return result;};/*
	 * Declare a constructor to represent a subclass
	 * of another constructor
	 * If platform has a built-in version we use that from Platform, else we
	 * define here (so can make use of other Utils fns)
	 * See node.js util.inherits
	 */Utils.inherits=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inherits||function(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Utils.prototypicalClone(superCtor.prototype,{constructor:ctor});};/*
	 * Determine whether or not an object has an enumerable
	 * property whose value equals a given value.
	 * ob:  the object
	 * val: the value to find
	 */Utils.containsValue=function(ob,val){for(var i in ob){if(ob[i]==val)return true;}return false;};Utils.intersect=function(arr,ob){return Utils.isArray(ob)?Utils.arrIntersect(arr,ob):Utils.arrIntersectOb(arr,ob);};Utils.arrIntersect=function(arr1,arr2){var result=[];for(var i=0;i<arr1.length;i++){var member=arr1[i];if(Utils.arrIndexOf(arr2,member)!=-1)result.push(member);}return result;};Utils.arrIntersectOb=function(arr,ob){var result=[];for(var i=0;i<arr.length;i++){var member=arr[i];if(member in ob)result.push(member);}return result;};Utils.arrSubtract=function(arr1,arr2){var result=[];for(var i=0;i<arr1.length;i++){var element=arr1[i];if(Utils.arrIndexOf(arr2,element)==-1)result.push(element);}return result;};Utils.arrIndexOf=Array.prototype.indexOf?function(arr,elem,fromIndex){return arr.indexOf(elem,fromIndex);}:function(arr,elem,fromIndex){fromIndex=fromIndex||0;var len=arr.length;for(;fromIndex<len;fromIndex++){if(arr[fromIndex]===elem){return fromIndex;}}return-1;};Utils.arrIn=function(arr,val){return Utils.arrIndexOf(arr,val)!==-1;};Utils.arrDeleteValue=function(arr,val){var idx=Utils.arrIndexOf(arr,val);var res=idx!=-1;if(res)arr.splice(idx,1);return res;};Utils.arrWithoutValue=function(arr,val){var newArr=arr.slice();Utils.arrDeleteValue(newArr,val);return newArr;};/*
	 * Construct an array of the keys of the enumerable
	 * properties of a given object, optionally limited
	 * to only the own properties.
	 * ob:      the object
	 * ownOnly: boolean, get own properties only
	 */Utils.keysArray=function(ob,ownOnly){var result=[];for(var prop in ob){if(ownOnly&&!ob.hasOwnProperty(prop))continue;result.push(prop);}return result;};/*
	 * Construct an array of the values of the enumerable
	 * properties of a given object, optionally limited
	 * to only the own properties.
	 * ob:      the object
	 * ownOnly: boolean, get own properties only
	 */Utils.valuesArray=function(ob,ownOnly){var result=[];for(var prop in ob){if(ownOnly&&!ob.hasOwnProperty(prop))continue;result.push(ob[prop]);}return result;};Utils.forInOwnNonNullProps=function(ob,fn){for(var prop in ob){if(Object.prototype.hasOwnProperty.call(ob,prop)&&ob[prop]){fn(prop);}}};Utils.arrForEach=Array.prototype.forEach?function(arr,fn){arr.forEach(fn);}:function(arr,fn){var len=arr.length;for(var i=0;i<len;i++){fn(arr[i],i,arr);}};/* Useful when the function may mutate the array */Utils.safeArrForEach=function(arr,fn){return Utils.arrForEach(arr.slice(),fn);};Utils.arrMap=Array.prototype.map?function(arr,fn){return arr.map(fn);}:function(arr,fn){var result=[],len=arr.length;for(var i=0;i<len;i++){result.push(fn(arr[i],i,arr));}return result;};Utils.arrFilter=Array.prototype.filter?function(arr,fn){return arr.filter(fn);}:function(arr,fn){var result=[],len=arr.length;for(var i=0;i<len;i++){if(fn(arr[i])){result.push(arr[i]);}}return result;};Utils.arrEvery=Array.prototype.every?function(arr,fn){return arr.every(fn);}:function(arr,fn){var len=arr.length;for(var i=0;i<len;i++){if(!fn(arr[i],i,arr)){return false;};}return true;};Utils.allSame=function(arr,prop){if(arr.length===0){return true;}var first=arr[0][prop];return Utils.arrEvery(arr,function(item){return item[prop]===first;});};Utils.nextTick=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].nextTick;var contentTypes={json:'application/json',jsonp:'application/javascript',xml:'application/xml',html:'text/html',msgpack:'application/x-msgpack'};Utils.defaultGetHeaders=function(format){var accept=contentTypes[format||'json'];return{accept:accept,'X-Ably-Version':_defaults__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].apiVersion,'X-Ably-Lib':_defaults__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].libstring};};Utils.defaultPostHeaders=function(format){var accept,contentType;accept=contentType=contentTypes[format||'json'];return{accept:accept,'content-type':contentType,'X-Ably-Version':_defaults__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].apiVersion,'X-Ably-Lib':_defaults__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].libstring};};Utils.arrPopRandomElement=function(arr){return arr.splice(randomPosn(arr),1)[0];};Utils.toQueryString=function(params){var parts=[];if(params){for(var key in params)parts.push(encodeURIComponent(key)+'='+encodeURIComponent(params[key]));}return parts.length?'?'+parts.join('&'):'';};Utils.parseQueryString=function(query){var match,search=/([^?&=]+)=?([^&]*)/g,result={};while(match=search.exec(query))result[decodeURIComponent(match[1])]=decodeURIComponent(match[2]);return result;};Utils.now=Date.now||function(){/* IE 8 */return new Date().getTime();};Utils.inspect=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inspect;Utils.isErrorInfo=function(err){return err.constructor.name=='ErrorInfo';};Utils.inspectError=function(x){/* redundant, but node vmcontext issue makes instanceof unreliable, and
		 * can't use just constructor test as could be a TypeError constructor etc. */return x&&(Utils.isErrorInfo(x)||x.constructor.name=='Error'||x instanceof Error)?x.toString():Utils.inspect(x);};Utils.inspectBody=function(body){if(platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].isBuffer(body)){return body.toString();}else if(typeof body==='string'){return body;}else{return platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inspect(body);}};/* Data is assumed to be either a string or a buffer. */Utils.dataSizeBytes=function(data){if(platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].isBuffer(data)){return platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].byteLength(data);}if(typeof data==='string'){return platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].stringByteSize(data);}throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: "+typeof data);};Utils.cheapRandStr=function(){return String(Math.random()).substr(2);};/* Takes param the minimum number of bytes of entropy the string must
	 * include, not the length of the string. String length produced is not
	 * guaranteed. */Utils.randomString=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].getRandomValues&&typeof Uint8Array!=='undefined'?function(numBytes){var uIntArr=new Uint8Array(numBytes);platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].getRandomValues(uIntArr);return platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].base64Encode(uIntArr);}:function(numBytes){/* Old browser; fall back to Math.random. Could just use a
			 * CryptoJS version of the above, but want this to still work in nocrypto
			 * versions of the library */var charset=platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].base64CharSet;/* base64 has 33% overhead; round length up */var length=Math.round(numBytes*4/3);var result='';for(var i=0;i<length;i++){result+=charset[randomPosn(charset)];}return result;};Utils.randomHexString=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].getRandomValues&&typeof Uint8Array!=='undefined'?function(numBytes){var uIntArr=new Uint8Array(numBytes);platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].getRandomValues(uIntArr);return platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].hexEncode(uIntArr);}:function(numBytes){var charset=platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].hexCharSet;var length=numBytes*2;var result='';for(var i=0;i<length;i++){result+=charset[randomPosn(charset)];}return result;};/* Pick n elements at random without replacement from an array */Utils.arrChooseN=function(arr,n){var numItems=Math.min(n,arr.length),mutableArr=arr.slice(),result=[];for(var i=0;i<numItems;i++){result.push(Utils.arrPopRandomElement(mutableArr));}return result;};Utils.trim=String.prototype.trim?function(str){return str.trim();}:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');};Utils.promisify=function(ob,fnName,args){return new Promise(function(resolve,reject){ob[fnName].apply(ob,Array.prototype.slice.call(args).concat(function(err,res){err?reject(err):resolve(res);}));});};Utils.decodeBody=function(body,format){return format=='msgpack'?msgpack.decode(body):JSON.parse(String(body));};Utils.encodeBody=function(body,format){return format=='msgpack'?msgpack.encode(body,true):JSON.stringify(body);};Utils.allToLowerCase=function(arr){return Utils.arrMap(arr,function(element){return element&&element.toLowerCase();});};Utils.allToUpperCase=function(arr){return Utils.arrMap(arr,function(element){return element&&element.toUpperCase();});};return Utils;}();/* harmony default export */__webpack_exports__["a"]=Utils;/***/},/* 2 */ /***/function(module,__webpack_exports__,__nested_webpack_require_19227__){"use strict";/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_19227__(1);var ErrorInfo=function(){function ErrorInfo(message,code,statusCode,cause){this.message=message;this.code=code;this.statusCode=statusCode;this.cause=cause;this.href=undefined;}ErrorInfo.prototype.toString=function(){var result='['+this.constructor.name;if(this.message)result+=': '+this.message;if(this.statusCode)result+='; statusCode='+this.statusCode;if(this.code)result+='; code='+this.code;if(this.cause)result+='; cause='+_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inspectError(this.cause);if(this.href&&!(this.message&&this.message.indexOf('help.ably.io')>-1))result+='; see '+this.href+' ';result+=']';return result;};ErrorInfo.fromValues=function(values){var result=_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].mixin(new ErrorInfo(),values);if(values instanceof Error){/* Error.message is not enumerable, so mixin loses the message */result.message=values.message;}if(result.code&&!result.href){result.href='https://help.ably.io/error/'+result.code;}return result;};return ErrorInfo;}();/* harmony default export */__webpack_exports__["a"]=ErrorInfo;/***/},/* 3 */ /***/function(module,__webpack_exports__,__nested_webpack_require_20494__){"use strict";/* WEBPACK VAR INJECTION */(function(global,setImmediate){/* harmony import */var _lib_util_msgpack__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_20494__(24);if(typeof Window==='undefined'&&typeof WorkerGlobalScope==='undefined'){console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");}function allowComet(){/* xhr requests from local files are unreliable in some browsers, such as Chrome 65 and higher -- see eg
	 * https://stackoverflow.com/questions/49256429/chrome-65-unable-to-make-post-requests-from-local-files-to-flask
	 * So if websockets are supported, then just forget about comet transports and use that */var loc=global.location;return!global.WebSocket||!loc||!loc.origin||loc.origin.indexOf("http")>-1;}var userAgent=global.navigator&&global.navigator.userAgent.toString();var currentUrl=global.location&&global.location.href;var Platform={libver:'js-web',logTimestamps:true,userAgent:userAgent,currentUrl:currentUrl,noUpgrade:userAgent&&userAgent.match(/MSIE\s8\.0/),binaryType:'arraybuffer',WebSocket:global.WebSocket||global.MozWebSocket,xhrSupported:global.XMLHttpRequest&&'withCredentials'in new XMLHttpRequest(),jsonpSupported:typeof document!=='undefined',allowComet:allowComet(),streamingSupported:true,useProtocolHeartbeats:true,createHmac:null,msgpack:_lib_util_msgpack__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"],supportsBinary:!!global.TextDecoder,preferBinary:false,ArrayBuffer:global.ArrayBuffer,atob:global.atob,nextTick:typeof setImmediate!=='undefined'?setImmediate:function(f){setTimeout(f,0);},addEventListener:global.addEventListener,inspect:JSON.stringify,stringByteSize:function(str){/* str.length will be an underestimate for non-ascii strings. But if we're
		 * in a browser too old to support TextDecoder, not much we can do. Better
		 * to underestimate, so if we do go over-size, the server will reject the
		 * message */return global.TextDecoder&&new global.TextEncoder().encode(str).length||str.length;},TextEncoder:global.TextEncoder,TextDecoder:global.TextDecoder,Promise:global.Promise,getRandomValues:function(crypto){if(crypto===undefined){return undefined;}return function(arr,callback){crypto.getRandomValues(arr);if(callback){callback(null);}};}(global.crypto||global.msCrypto)// mscrypto for IE11
};/* harmony default export */__webpack_exports__["a"]=Platform;/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_20494__(17),__nested_webpack_require_20494__(42).setImmediate);/***/},/* 4 */ /***/function(module,__webpack_exports__,__nested_webpack_require_23067__){"use strict";/* harmony import */var crypto_js_build_enc_hex__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_23067__(32);/* harmony import */var crypto_js_build_enc_hex__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__nested_webpack_require_23067__.n(crypto_js_build_enc_hex__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var crypto_js_build_enc_utf8__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_23067__(33);/* harmony import */var crypto_js_build_enc_utf8__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__nested_webpack_require_23067__.n(crypto_js_build_enc_utf8__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_23067__(18);/* harmony import */var crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__nested_webpack_require_23067__.n(crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_23067__(10);/* harmony import */var crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__nested_webpack_require_23067__.n(crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_23067__(3);var BufferUtils=function(){var ArrayBuffer=platform__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].ArrayBuffer;var atob=platform__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].atob;var TextEncoder=platform__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].TextEncoder;var TextDecoder=platform__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].TextDecoder;var base64CharSet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';var hexCharSet='0123456789abcdef';function isWordArray(ob){return ob!==null&&ob!==undefined&&ob.sigBytes!==undefined;}function isArrayBuffer(ob){return ob!==null&&ob!==undefined&&ob.constructor===ArrayBuffer;}function isTypedArray(ob){return ArrayBuffer&&ArrayBuffer.isView&&ArrayBuffer.isView(ob);}// https://gist.githubusercontent.com/jonleighton/958841/raw/f200e30dfe95212c0165ccf1ae000ca51e9de803/gistfile1.js
function uint8ViewToBase64(bytes){var base64='';var encodings=base64CharSet;var byteLength=bytes.byteLength;var byteRemainder=byteLength%3;var mainLength=byteLength-byteRemainder;var a,b,c,d;var chunk;// Main loop deals with bytes in chunks of 3
for(var i=0;i<mainLength;i=i+3){// Combine the three bytes into a single integer
chunk=bytes[i]<<16|bytes[i+1]<<8|bytes[i+2];// Use bitmasks to extract 6-bit segments from the triplet
a=(chunk&16515072)>>18;// 16515072 = (2^6 - 1) << 18
b=(chunk&258048)>>12;// 258048   = (2^6 - 1) << 12
c=(chunk&4032)>>6;// 4032     = (2^6 - 1) << 6
d=chunk&63;// 63       = 2^6 - 1
// Convert the raw binary segments to the appropriate ASCII encoding
base64+=encodings[a]+encodings[b]+encodings[c]+encodings[d];}// Deal with the remaining bytes and padding
if(byteRemainder==1){chunk=bytes[mainLength];a=(chunk&252)>>2;// 252 = (2^6 - 1) << 2
// Set the 4 least significant bits to zero
b=(chunk&3)<<4;// 3   = 2^2 - 1
base64+=encodings[a]+encodings[b]+'==';}else if(byteRemainder==2){chunk=bytes[mainLength]<<8|bytes[mainLength+1];a=(chunk&64512)>>10;// 64512 = (2^6 - 1) << 10
b=(chunk&1008)>>4;// 1008  = (2^6 - 1) << 4
// Set the 2 least significant bits to zero
c=(chunk&15)<<2;// 15    = 2^4 - 1
base64+=encodings[a]+encodings[b]+encodings[c]+'=';}return base64;}function base64ToArrayBuffer(base64){var binary_string=atob(base64);var len=binary_string.length;var bytes=new Uint8Array(len);for(var i=0;i<len;i++){var ascii=binary_string.charCodeAt(i);bytes[i]=ascii;}return bytes.buffer;}/* Most BufferUtils methods that return a binary object return an ArrayBuffer
	 * if supported, else a CryptoJS WordArray. The exception is toBuffer, which
	 * returns a Uint8Array (and won't work on browsers too old to support it) */function BufferUtils(){}BufferUtils.base64CharSet=base64CharSet;BufferUtils.hexCharSet=hexCharSet;var isBuffer=BufferUtils.isBuffer=function(buf){return isArrayBuffer(buf)||isWordArray(buf)||isTypedArray(buf);};/* In browsers, returns a Uint8Array */var toBuffer=BufferUtils.toBuffer=function(buf){if(!ArrayBuffer){throw new Error("Can't convert to Buffer: browser does not support the necessary types");}if(isArrayBuffer(buf)){return new Uint8Array(buf);}if(isTypedArray(buf)){return new Uint8Array(buf.buffer);}if(isWordArray(buf)){/* Backported from unreleased CryptoJS
			* https://code.google.com/p/crypto-js/source/browse/branches/3.x/src/lib-typedarrays.js?r=661 */var arrayBuffer=new ArrayBuffer(buf.sigBytes);var uint8View=new Uint8Array(arrayBuffer);for(var i=0;i<buf.sigBytes;i++){uint8View[i]=buf.words[i>>>2]>>>24-i%4*8&0xff;}return uint8View;};throw new Error("BufferUtils.toBuffer expected an arraybuffer, typed array, or CryptoJS wordarray");};BufferUtils.toArrayBuffer=function(buf){if(isArrayBuffer(buf)){return buf;}return toBuffer(buf).buffer;};BufferUtils.toWordArray=function(buf){if(isTypedArray(buf)){buf=buf.buffer;}return isWordArray(buf)?buf:crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_3___default.a.create(buf);};BufferUtils.base64Encode=function(buf){if(isWordArray(buf)){return Object(crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_2__["stringify"])(buf);}return uint8ViewToBase64(toBuffer(buf));};BufferUtils.base64Decode=function(str){if(ArrayBuffer&&atob){return base64ToArrayBuffer(str);}return Object(crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_2__["parse"])(str);};BufferUtils.hexEncode=function(buf){buf=BufferUtils.toWordArray(buf);return Object(crypto_js_build_enc_hex__WEBPACK_IMPORTED_MODULE_0__["stringify"])(buf);};BufferUtils.hexDecode=function(string){var wordArray=Object(crypto_js_build_enc_hex__WEBPACK_IMPORTED_MODULE_0__["parse"])(string);return ArrayBuffer?BufferUtils.toArrayBuffer(wordArray):wordArray;};BufferUtils.utf8Encode=function(string){if(TextEncoder){return new TextEncoder().encode(string).buffer;}return Object(crypto_js_build_enc_utf8__WEBPACK_IMPORTED_MODULE_1__["parse"])(string);};/* For utf8 decoding we apply slightly stricter input validation than to
	 * hexEncode/base64Encode/etc: in those we accept anything that Buffer.from
	 * can take (in particular allowing strings, which are just interpreted as
	 * binary); here we ensure that the input is actually a buffer since trying
	 * to utf8-decode a string to another string is almost certainly a mistake */BufferUtils.utf8Decode=function(buf){if(!isBuffer(buf)){throw new Error("Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray");}if(TextDecoder&&!isWordArray(buf)){return new TextDecoder().decode(buf);}buf=BufferUtils.toWordArray(buf);return Object(crypto_js_build_enc_utf8__WEBPACK_IMPORTED_MODULE_1__["stringify"])(buf);};BufferUtils.bufferCompare=function(buf1,buf2){if(!buf1)return-1;if(!buf2)return 1;buf1=BufferUtils.toWordArray(buf1);buf2=BufferUtils.toWordArray(buf2);buf1.clamp();buf2.clamp();var cmp=buf1.sigBytes-buf2.sigBytes;if(cmp!=0)return cmp;buf1=buf1.words;buf2=buf2.words;for(var i=0;i<buf1.length;i++){cmp=buf1[i]-buf2[i];if(cmp!=0)return cmp;}return 0;};BufferUtils.byteLength=function(buf){if(isArrayBuffer(buf)||isTypedArray(buf)){return buf.byteLength;}else if(isWordArray(buf)){return buf.sigBytes;}};/* Returns ArrayBuffer on browser and Buffer on Node.js */BufferUtils.typedArrayToBuffer=function(typedArray){return typedArray.buffer;};return BufferUtils;}();/* harmony default export */__webpack_exports__["a"]=BufferUtils;/***/},/* 5 */ /***/function(module,__webpack_exports__,__nested_webpack_require_30626__){"use strict";// EXTERNAL MODULE: ./browser/fragments/platform-browser.js
var platform_browser=__nested_webpack_require_30626__(3);// CONCATENATED MODULE: ./browser/lib/util/defaults.js
var Defaults={internetUpUrl:'https://internet-up.ably-realtime.com/is-the-internet-up.txt',jsonpInternetUpUrl:'https://internet-up.ably-realtime.com/is-the-internet-up-0-9.js',/* Order matters here: the base transport is the leftmost one in the
	 * intersection of baseTransportOrder and the transports clientOption that's
	 * supported.  This is not quite the same as the preference order -- e.g.
	 * xhr_polling is preferred to jsonp, but for browsers that support it we want
	 * the base transport to be xhr_polling, not jsonp */defaultTransports:['xhr_polling','xhr_streaming','jsonp','web_socket'],baseTransportOrder:['xhr_polling','xhr_streaming','jsonp','web_socket'],transportPreferenceOrder:['jsonp','xhr_polling','xhr_streaming','web_socket'],upgradeTransports:['xhr_streaming','web_socket']};/* If using IE8, don't attempt to upgrade from xhr_polling to xhr_streaming -
* while it can do streaming, the low max http-connections-per-host limit means
* that the polling transport is crippled during the upgrade process. So just
* leave it at the base transport */if(platform_browser["a"/* default */].noUpgrade){Defaults.upgradeTransports=[];}/* harmony default export */var defaults=Defaults;// EXTERNAL MODULE: ./common/lib/util/utils.js
var utils=__nested_webpack_require_30626__(1);// EXTERNAL MODULE: ./browser/lib/util/bufferutils.js
var bufferutils=__nested_webpack_require_30626__(4);// EXTERNAL MODULE: ./common/lib/util/logger.js
var logger=__nested_webpack_require_30626__(0);// EXTERNAL MODULE: ./common/lib/types/errorinfo.js
var errorinfo=__nested_webpack_require_30626__(2);// CONCATENATED MODULE: ./common/lib/util/defaults.js
defaults.ENVIRONMENT='';defaults.REST_HOST='rest.ably.io';defaults.REALTIME_HOST='realtime.ably.io';defaults.FALLBACK_HOSTS=['A.ably-realtime.com','B.ably-realtime.com','C.ably-realtime.com','D.ably-realtime.com','E.ably-realtime.com'];defaults.PORT=80;defaults.TLS_PORT=443;defaults.TIMEOUTS={/* Documented as options params: */disconnectedRetryTimeout:15000,suspendedRetryTimeout:30000,/* Undocumented, but part of the api and can be used by customers: */httpRequestTimeout:15000,channelRetryTimeout:15000,fallbackRetryTimeout:600000,/* For internal / test use only: */connectionStateTtl:120000,realtimeRequestTimeout:10000,recvTimeout:90000,preferenceConnectTimeout:6000,parallelUpgradeDelay:6000};defaults.httpMaxRetryCount=3;defaults.maxMessageSize=65536;defaults.errorReportingUrl='https://errors.ably.io/api/15/store/';defaults.errorReportingHeaders={"X-Sentry-Auth":"Sentry sentry_version=7, sentry_key=a04e33c8674c451f8a310fbec029acf5, sentry_client=ably-js/0.1","Content-Type":"application/json"};defaults.version='1.2.10';defaults.libstring=platform_browser["a"/* default */].libver+'-'+defaults.version;defaults.apiVersion='1.2';defaults.getHost=function(options,host,ws){if(ws)host=host==options.restHost&&options.realtimeHost||host||options.realtimeHost;else host=host||options.restHost;return host;};defaults.getPort=function(options,tls){return tls||options.tls?options.tlsPort:options.port;};defaults.getHttpScheme=function(options){return options.tls?'https://':'http://';};// construct environment fallback hosts as per RSC15i
defaults.environmentFallbackHosts=function(environment){return[environment+'-a-fallback.ably-realtime.com',environment+'-b-fallback.ably-realtime.com',environment+'-c-fallback.ably-realtime.com',environment+'-d-fallback.ably-realtime.com',environment+'-e-fallback.ably-realtime.com'];};defaults.getFallbackHosts=function(options){var fallbackHosts=options.fallbackHosts,httpMaxRetryCount=typeof options.httpMaxRetryCount!=='undefined'?options.httpMaxRetryCount:defaults.httpMaxRetryCount;return fallbackHosts?utils["a"/* default */].arrChooseN(fallbackHosts,httpMaxRetryCount):[];};defaults.getHosts=function(options){return[options.restHost].concat(defaults.getFallbackHosts(options));};function checkHost(host){if(typeof host!=='string'){throw new errorinfo["a"/* default */]('host must be a string; was a '+typeof host,40000,400);};if(!host.length){throw new errorinfo["a"/* default */]('host must not be zero-length',40000,400);};}defaults.objectifyOptions=function(options){if(typeof options=='string'){return options.indexOf(':')==-1?{token:options}:{key:options};}return options;};defaults.normaliseOptions=function(options){/* Deprecated options */if(options.host){logger["a"/* default */].deprecated('host','restHost');options.restHost=options.host;}if(options.wsHost){logger["a"/* default */].deprecated('wsHost','realtimeHost');options.realtimeHost=options.wsHost;}if(options.queueEvents){logger["a"/* default */].deprecated('queueEvents','queueMessages');options.queueMessages=options.queueEvents;}if(options.fallbackHostsUseDefault){/* fallbackHostsUseDefault and fallbackHosts are mutually exclusive as per TO3k7 */if(options.fallbackHosts){var msg='fallbackHosts and fallbackHostsUseDefault cannot both be set';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Defaults.normaliseOptions',msg);throw new errorinfo["a"/* default */](msg,40000,400);}/* default fallbacks can't be used with custom ports */if(options.port||options.tlsPort){var msg='fallbackHostsUseDefault cannot be set when port or tlsPort are set';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Defaults.normaliseOptions',msg);throw new errorinfo["a"/* default */](msg,40000,400);}/* emit an appropriate deprecation warning */if(options.environment){logger["a"/* default */].deprecatedWithMsg('fallbackHostsUseDefault','There is no longer a need to set this when the environment option is also set since the library will now generate the correct fallback hosts using the environment option.');}else{logger["a"/* default */].deprecated('fallbackHostsUseDefault','fallbackHosts: Ably.Defaults.FALLBACK_HOSTS');}/* use the default fallback hosts as requested */options.fallbackHosts=defaults.FALLBACK_HOSTS;}if(options.recover===true){logger["a"/* default */].deprecated('{recover: true}','{recover: function(lastConnectionDetails, cb) { cb(true); }}');options.recover=function(lastConnectionDetails,cb){cb(true);};}if(typeof options.recover==='function'&&options.closeOnUnload===true){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Defaults.normaliseOptions','closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter');options.recover=null;}if(!('closeOnUnload'in options)){/* Have closeOnUnload default to true unless we have any indication that
		 * the user may want to recover the connection */options.closeOnUnload=!options.recover;}if(options.transports&&utils["a"/* default */].arrIn(options.transports,'xhr')){logger["a"/* default */].deprecated('transports: ["xhr"]','transports: ["xhr_streaming"]');utils["a"/* default */].arrDeleteValue(options.transports,'xhr');options.transports.push('xhr_streaming');}if(!('queueMessages'in options))options.queueMessages=true;/* infer hosts and fallbacks based on the configured environment */var environment=options.environment&&String(options.environment).toLowerCase()||defaults.ENVIRONMENT;var production=!environment||environment==='production';if(!options.fallbackHosts&&!options.restHost&&!options.realtimeHost&&!options.port&&!options.tlsPort){options.fallbackHosts=production?defaults.FALLBACK_HOSTS:defaults.environmentFallbackHosts(environment);}if(!options.realtimeHost){/* prefer setting realtimeHost to restHost as a custom restHost typically indicates
		 * a development environment is being used that can't be inferred by the library */if(options.restHost){logger["a"/* default */].logAction(logger["a"/* default */].LOG_WARN,'Defaults.normaliseOptions','restHost is set to "'+options.restHost+'" but realtimeHost is not set, so setting realtimeHost to "'+options.restHost+'" too. If this is not what you want, please set realtimeHost explicitly.');options.realtimeHost=options.restHost;}else{options.realtimeHost=production?defaults.REALTIME_HOST:environment+'-'+defaults.REALTIME_HOST;}}if(!options.restHost){options.restHost=production?defaults.REST_HOST:environment+'-'+defaults.REST_HOST;}utils["a"/* default */].arrForEach((options.fallbackHosts||[]).concat(options.restHost,options.realtimeHost),checkHost);options.port=options.port||defaults.PORT;options.tlsPort=options.tlsPort||defaults.TLS_PORT;options.maxMessageSize=options.maxMessageSize||defaults.maxMessageSize;if(!('tls'in options))options.tls=true;/* Allow values passed in options to override default timeouts */options.timeouts={};for(var prop in defaults.TIMEOUTS){options.timeouts[prop]=options[prop]||defaults.TIMEOUTS[prop];};if('useBinaryProtocol'in options){options.useBinaryProtocol=platform_browser["a"/* default */].supportsBinary&&options.useBinaryProtocol;}else{options.useBinaryProtocol=platform_browser["a"/* default */].preferBinary;}if(options.clientId){var headers=options.headers=options.headers||{};headers['X-Ably-ClientId']=bufferutils["a"/* default */].base64Encode(bufferutils["a"/* default */].utf8Encode(options.clientId));}if(!('idempotentRestPublishing'in options)){options.idempotentRestPublishing=true;}if(options.promises&&!platform_browser["a"/* default */].Promise){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Defaults.normaliseOptions','{promises: true} was specified, but no Promise constructor found; disabling promises');options.promises=false;}return options;};/* harmony default export */var util_defaults=__webpack_exports__["a"]=defaults;/***/},/* 6 */ /***/function(module,__webpack_exports__,__nested_webpack_require_40369__){"use strict";/* harmony import */var _common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_40369__(1);/* harmony import */var _common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_40369__(5);var Http=function(){var noop=function(){};function Http(){}var now=Date.now||function(){/* IE 8 */return new Date().getTime();};function shouldFallback(err){var statusCode=err.statusCode;/* 400 + no code = a generic xhr onerror. Browser doesn't give us enough
		 * detail to know whether it's fallback-fixable, but it may be (eg if a
		 * network issue), so try just in case */return statusCode===408&&!err.code||statusCode===400&&!err.code||statusCode>=500&&statusCode<=504;}function getHosts(client){/* If we're a connected realtime client, try the endpoint we're connected
		 * to first -- but still have fallbacks, being connected is not an absolute
		 * guarantee that a datacenter has free capacity to service REST requests. */var connection=client.connection,connectionHost=connection&&connection.connectionManager.host;if(connectionHost){return[connectionHost].concat(_common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].getFallbackHosts(client.options));}return _common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].getHosts(client.options);}Http._getHosts=getHosts;Http.methods=['get','delete','post','put','patch'];Http.methodsWithoutBody=['get','delete'];Http.methodsWithBody=_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrSubtract(Http.methods,Http.methodsWithoutBody);/* - Http.get, Http.post, Http.put, ...
	 * Perform an HTTP request for a given path against prime and fallback Ably hosts
	 * @param rest
	 * @param path the full path
	 * @param headers optional hash of headers
	 * [only for methods with body: @param body object or buffer containing request body]
	 * @param params optional hash of params
	 * @param callback (err, response)
	 *
	 * - Http.getUri, Http.postUri, Http.putUri, ...
	 * Perform an HTTP request for a given full URI
	 * @param rest
	 * @param uri the full URI
	 * @param headers optional hash of headers
	 * [only for methods with body: @param body object or buffer containing request body]
	 * @param params optional hash of params
	 * @param callback (err, response)
	 */_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrForEach(Http.methodsWithoutBody,function(method){Http[method]=function(rest,path,headers,params,callback){Http['do'](method,rest,path,headers,null,params,callback);};Http[method+'Uri']=function(rest,uri,headers,params,callback){Http.doUri(method,rest,uri,headers,null,params,callback);};});_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrForEach(Http.methodsWithBody,function(method){Http[method]=function(rest,path,headers,body,params,callback){Http['do'](method,rest,path,headers,body,params,callback);};Http[method+'Uri']=function(rest,uri,headers,body,params,callback){Http.doUri(method,rest,uri,headers,body,params,callback);};});/* Unlike for doUri, the 'rest' param here is mandatory, as it's used to generate the hosts */Http['do']=function(method,rest,path,headers,body,params,callback){callback=callback||noop;var uriFromHost=typeof path=='function'?path:function(host){return rest.baseUri(host)+path;};var binary=headers&&headers.accept!='application/json';var doArgs=arguments;var currentFallback=rest._currentFallback;if(currentFallback){if(currentFallback.validUntil>now()){/* Use stored fallback */Http.Request(method,rest,uriFromHost(currentFallback.host),headers,params,body,function(err){if(err&&shouldFallback(err)){/* unstore the fallback and start from the top with the default sequence */rest._currentFallback=null;Http['do'].apply(Http,doArgs);return;}callback.apply(null,arguments);});return;}else{/* Fallback expired; remove it and fallthrough to normal sequence */rest._currentFallback=null;}}var hosts=getHosts(rest);/* if there is only one host do it */if(hosts.length==1){Http.doUri(method,rest,uriFromHost(hosts[0]),headers,body,params,callback);return;}/* hosts is an array with preferred host plus at least one fallback */var tryAHost=function(candidateHosts,persistOnSuccess){var host=candidateHosts.shift();Http.doUri(method,rest,uriFromHost(host),headers,body,params,function(err){if(err&&shouldFallback(err)&&candidateHosts.length){tryAHost(candidateHosts,true);return;}if(persistOnSuccess){/* RSC15f */rest._currentFallback={host:host,validUntil:now()+rest.options.timeouts.fallbackRetryTimeout};}callback.apply(null,arguments);});};tryAHost(hosts);};Http.doUri=function(method,rest,uri,headers,body,params,callback){Http.Request(method,rest,uri,headers,params,body,callback);};Http.supportsAuthHeaders=false;Http.supportsLinkHeaders=false;return Http;}();/* harmony default export */__webpack_exports__["a"]=Http;/***/},/* 7 */ /***/function(module,__webpack_exports__,__nested_webpack_require_45294__){"use strict";/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_45294__(1);/* harmony import */var _logger__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_45294__(0);/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_45294__(3);var EventEmitter=function(){/* public constructor */function EventEmitter(){this.any=[];this.events={};this.anyOnce=[];this.eventsOnce={};}/* Call the listener, catch any exceptions and log, but continue operation*/function callListener(eventThis,listener,args){try{listener.apply(eventThis,args);}catch(e){_logger__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].logAction(_logger__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].LOG_ERROR,'EventEmitter.emit()','Unexpected listener exception: '+e+'; stack = '+(e&&e.stack));}}/**
	 * Remove listeners that match listener
	 * @param targetListeners is an array of listener arrays or event objects with arrays of listeners
	 * @param listener the listener callback to remove
	 * @param eventFilter (optional) event name instructing the function to only remove listeners for the specified event
	 */function removeListener(targetListeners,listener,eventFilter){var listeners,idx,eventName,targetListenersIndex;for(targetListenersIndex=0;targetListenersIndex<targetListeners.length;targetListenersIndex++){listeners=targetListeners[targetListenersIndex];if(eventFilter){listeners=listeners[eventFilter];}if(_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isArray(listeners)){while((idx=_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrIndexOf(listeners,listener))!==-1){listeners.splice(idx,1);}/* If events object has an event name key with no listeners then
				   remove the key to stop the list growing indefinitely */if(eventFilter&&listeners.length===0){delete targetListeners[targetListenersIndex][eventFilter];}}else if(_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isObject(listeners)){/* events */for(eventName in listeners){if(listeners.hasOwnProperty(eventName)&&_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isArray(listeners[eventName])){removeListener([listeners],listener,eventName);}}}}}/**
	 * Add an event listener
	 * @param event (optional) the name of the event to listen to
	 *        if not supplied, all events trigger a call to the listener
	 * @param listener the listener to be called
	 */EventEmitter.prototype.on=function(event,listener){if(arguments.length==1&&typeof event=='function'){this.any.push(event);}else if(_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isEmptyArg(event)){this.any.push(listener);}else if(_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isArray(event)){var self=this;_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrForEach(event,function(ev){self.on(ev,listener);});}else{var listeners=this.events[event]||(this.events[event]=[]);listeners.push(listener);}};/**
	 * Remove one or more event listeners
	 * @param event (optional) the name of the event whose listener
	 *        is to be removed. If not supplied, the listener is
	 *        treated as an 'any' listener
	 * @param listener (optional) the listener to remove. If not
	 *        supplied, all listeners are removed.
	 */EventEmitter.prototype.off=function(event,listener){if(arguments.length==0||_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isEmptyArg(event)&&_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isEmptyArg(listener)){this.any=[];this.events={};this.anyOnce=[];this.eventsOnce={};return;}if(arguments.length==1){if(typeof event=='function'){/* we take this to be the listener and treat the event as "any" .. */listener=event;event=null;}/* ... or we take event to be the actual event name and listener to be all */}if(listener&&_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isEmptyArg(event)){removeListener([this.any,this.events,this.anyOnce,this.eventsOnce],listener);return;}if(_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isArray(event)){var self=this;_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrForEach(event,function(ev){self.off(ev,listener);});}/* "normal" case where event is an actual event */if(listener){removeListener([this.events,this.eventsOnce],listener,event);}else{delete this.events[event];delete this.eventsOnce[event];}};/**
	 * Get the array of listeners for a given event; excludes once events
	 * @param event (optional) the name of the event, or none for 'any'
	 * @return array of events, or null if none
	 */EventEmitter.prototype.listeners=function(event){if(event){var listeners=this.events[event]||[];if(this.eventsOnce[event])Array.prototype.push.apply(listeners,this.eventsOnce[event]);return listeners.length?listeners:null;}return this.any.length?this.any:null;};/**
	 * Emit an event
	 * @param event the event name
	 * @param args the arguments to pass to the listener
	 */EventEmitter.prototype.emit=function(event/* , args... */){var args=Array.prototype.slice.call(arguments,1);var eventThis={event:event};var listeners=[];if(this.anyOnce.length){Array.prototype.push.apply(listeners,this.anyOnce);this.anyOnce=[];}if(this.any.length){Array.prototype.push.apply(listeners,this.any);}var eventsOnceListeners=this.eventsOnce[event];if(eventsOnceListeners){Array.prototype.push.apply(listeners,eventsOnceListeners);delete this.eventsOnce[event];}var eventsListeners=this.events[event];if(eventsListeners){Array.prototype.push.apply(listeners,eventsListeners);}_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrForEach(listeners,function(listener){callListener(eventThis,listener,args);});};/**
	 * Listen for a single occurrence of an event
	 * @param event the name of the event to listen to
	 * @param listener the listener to be called
	 */EventEmitter.prototype.once=function(event,listener){var argCount=arguments.length,self=this;if((argCount===0||argCount===1&&typeof event!=='function')&&platform__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].Promise){return new platform__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].Promise(function(resolve){self.once(event,resolve);});}if(arguments.length==1&&typeof event=='function'){this.anyOnce.push(event);}else if(_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isEmptyArg(event)){this.anyOnce.push(listener);}else if(_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isArray(event)){throw"Arrays of events can only be used with on(), not once()";}else{var listeners=this.eventsOnce[event]||(this.eventsOnce[event]=[]);listeners.push(listener);}};/**
	 * Private API
	 *
	 * Listen for a single occurrence of a state event and fire immediately if currentState matches targetState
	 * @param targetState the name of the state event to listen to
	 * @param currentState the name of the current state of this object
	 * @param listener the listener to be called
	 */EventEmitter.prototype.whenState=function(targetState,currentState,listener/* ...listenerArgs */){var eventThis={event:targetState},self=this,listenerArgs=Array.prototype.slice.call(arguments,3);if(typeof targetState!=='string'||typeof currentState!=='string'){throw"whenState requires a valid event String argument";}if(typeof listener!=='function'&&platform__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].Promise){return new platform__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].Promise(function(resolve){EventEmitter.prototype.whenState.apply(self,[targetState,currentState,resolve].concat(listenerArgs));});}if(targetState===currentState){callListener(eventThis,listener,listenerArgs);}else{this.once(targetState,listener);}};return EventEmitter;}();/* harmony default export */__webpack_exports__["a"]=EventEmitter;/***/},/* 8 */ /***/function(module,__webpack_exports__,__nested_webpack_require_53000__){"use strict";/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_53000__(1);/* harmony import */var _errorinfo__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_53000__(2);/* harmony import */var _message__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_53000__(9);/* harmony import */var _presencemessage__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_53000__(11);var ProtocolMessage=function(){function ProtocolMessage(){this.action=undefined;this.flags=undefined;this.id=undefined;this.timestamp=undefined;this.count=undefined;this.error=undefined;this.connectionId=undefined;this.connectionKey=undefined;this.connectionSerial=undefined;this.channel=undefined;this.channelSerial=undefined;this.msgSerial=undefined;this.messages=undefined;this.presence=undefined;this.auth=undefined;this.params=undefined;}var actions=ProtocolMessage.Action={'HEARTBEAT':0,'ACK':1,'NACK':2,'CONNECT':3,'CONNECTED':4,'DISCONNECT':5,'DISCONNECTED':6,'CLOSE':7,'CLOSED':8,'ERROR':9,'ATTACH':10,'ATTACHED':11,'DETACH':12,'DETACHED':13,'PRESENCE':14,'MESSAGE':15,'SYNC':16,'AUTH':17};ProtocolMessage.channelModes=['PRESENCE','PUBLISH','SUBSCRIBE','PRESENCE_SUBSCRIBE'];ProtocolMessage.ActionName=[];_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrForEach(_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].keysArray(ProtocolMessage.Action,true),function(name){ProtocolMessage.ActionName[actions[name]]=name;});var flags={/* Channel attach state flags */'HAS_PRESENCE':1<<0,'HAS_BACKLOG':1<<1,'RESUMED':1<<2,'TRANSIENT':1<<4,'ATTACH_RESUME':1<<5,/* Channel mode flags */'PRESENCE':1<<16,'PUBLISH':1<<17,'SUBSCRIBE':1<<18,'PRESENCE_SUBSCRIBE':1<<19};var flagNames=_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].keysArray(flags);flags.MODE_ALL=flags.PRESENCE|flags.PUBLISH|flags.SUBSCRIBE|flags.PRESENCE_SUBSCRIBE;ProtocolMessage.prototype.hasFlag=function(flag){return(this.flags&flags[flag])>0;};ProtocolMessage.prototype.setFlag=function(flag){return this.flags=this.flags|flags[flag];};ProtocolMessage.prototype.getMode=function(){return this.flags&&this.flags&flags.MODE_ALL;};ProtocolMessage.prototype.encodeModesToFlags=function(modes){var self=this;_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrForEach(modes,function(mode){self.setFlag(mode);});};ProtocolMessage.prototype.decodeModesFromFlags=function(){var modes=[],self=this;_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrForEach(ProtocolMessage.channelModes,function(mode){if(self.hasFlag(mode)){modes.push(mode);}});return modes.length>0?modes:undefined;};ProtocolMessage.serialize=_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].encodeBody;ProtocolMessage.deserialize=function(serialized,format){var deserialized=_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].decodeBody(serialized,format);return ProtocolMessage.fromDeserialized(deserialized);};ProtocolMessage.fromDeserialized=function(deserialized){var error=deserialized.error;if(error)deserialized.error=_errorinfo__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].fromValues(error);var messages=deserialized.messages;if(messages)for(var i=0;i<messages.length;i++)messages[i]=_message__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].fromValues(messages[i]);var presence=deserialized.presence;if(presence)for(var i=0;i<presence.length;i++)presence[i]=_presencemessage__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].fromValues(presence[i],true);return _util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].mixin(new ProtocolMessage(),deserialized);};ProtocolMessage.fromValues=function(values){return _util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].mixin(new ProtocolMessage(),values);};function toStringArray(array){var result=[];if(array){for(var i=0;i<array.length;i++){result.push(array[i].toString());}}return'[ '+result.join(', ')+' ]';}var simpleAttributes='id channel channelSerial connectionId connectionKey connectionSerial count msgSerial timestamp'.split(' ');ProtocolMessage.stringify=function(msg){var result='[ProtocolMessage';if(msg.action!==undefined)result+='; action='+ProtocolMessage.ActionName[msg.action]||0;var attribute;for(var attribIndex=0;attribIndex<simpleAttributes.length;attribIndex++){attribute=simpleAttributes[attribIndex];if(msg[attribute]!==undefined)result+='; '+attribute+'='+msg[attribute];}if(msg.messages)result+='; messages='+toStringArray(_message__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].fromValuesArray(msg.messages));if(msg.presence)result+='; presence='+toStringArray(_presencemessage__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].fromValuesArray(msg.presence));if(msg.error)result+='; error='+_errorinfo__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].fromValues(msg.error).toString();if(msg.auth&&msg.auth.accessToken)result+='; token='+msg.auth.accessToken;if(msg.flags)result+='; flags='+_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrFilter(flagNames,function(flag){return msg.hasFlag(flag);}).join(',');if(msg.params){var stringifiedParams='';_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].forInOwnNonNullProps(msg.params,function(prop){if(stringifiedParams.length>0){stringifiedParams+='; ';}stringifiedParams+=prop+'='+msg.params[prop];});if(stringifiedParams.length>0){result+='; params=['+stringifiedParams+']';}}result+=']';return result;};/* Only valid for channel messages */ProtocolMessage.isDuplicate=function(a,b){if(a&&b){if((a.action===actions.MESSAGE||a.action===actions.PRESENCE)&&a.action===b.action&&a.channel===b.channel&&a.id===b.id){if(a.action===actions.PRESENCE){return true;}else if(a.messages.length===b.messages.length){for(var i=0;i<a.messages.length;i++){var aMessage=a.messages[i];var bMessage=b.messages[i];if((aMessage.extras&&aMessage.extras.delta&&aMessage.extras.delta.format)!==(bMessage.extras&&bMessage.extras.delta&&bMessage.extras.delta.format)){return false;}}return true;}}}return false;};return ProtocolMessage;}();/* harmony default export */__webpack_exports__["a"]=ProtocolMessage;/***/},/* 9 */ /***/function(module,__webpack_exports__,__nested_webpack_require_59088__){"use strict";/* harmony import */var platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_59088__(4);/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_59088__(1);/* harmony import */var _util_logger__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_59088__(0);/* harmony import */var platform_crypto__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_59088__(19);/* harmony import */var _errorinfo__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_59088__(2);var Message=function(){function Message(){this.name=undefined;this.id=undefined;this.timestamp=undefined;this.clientId=undefined;this.connectionId=undefined;this.connectionKey=undefined;this.data=undefined;this.encoding=undefined;this.extras=undefined;this.size=undefined;}/**
	 * Overload toJSON() to intercept JSON.stringify()
	 * @return {*}
	 */Message.prototype.toJSON=function(){var result={name:this.name,id:this.id,clientId:this.clientId,connectionId:this.connectionId,connectionKey:this.connectionKey,encoding:this.encoding,extras:this.extras};/* encode data to base64 if present and we're returning real JSON;
		 * although msgpack calls toJSON(), we know it is a stringify()
		 * call if it has a non-empty arguments list */var data=this.data;if(data&&platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isBuffer(data)){if(arguments.length>0){/* stringify call */var encoding=this.encoding;result.encoding=encoding?encoding+'/base64':'base64';data=platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].base64Encode(data);}else{/* Called by msgpack. toBuffer returns a datatype understandable by
				 * that platform's msgpack implementation (Buffer in node, Uint8Array
				 * in browsers) */data=platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].toBuffer(data);}}result.data=data;return result;};Message.prototype.toString=function(){var result='[Message';if(this.name)result+='; name='+this.name;if(this.id)result+='; id='+this.id;if(this.timestamp)result+='; timestamp='+this.timestamp;if(this.clientId)result+='; clientId='+this.clientId;if(this.connectionId)result+='; connectionId='+this.connectionId;if(this.encoding)result+='; encoding='+this.encoding;if(this.extras)result+='; extras ='+JSON.stringify(this.extras);if(this.data){if(typeof this.data=='string')result+='; data='+this.data;else if(platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isBuffer(this.data))result+='; data (buffer)='+platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].base64Encode(this.data);else result+='; data (json)='+JSON.stringify(this.data);}if(this.extras)result+='; extras='+JSON.stringify(this.extras);result+=']';return result;};Message.encrypt=function(msg,options,callback){var data=msg.data,encoding=msg.encoding,cipher=options.channelCipher;encoding=encoding?encoding+'/':'';if(!platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isBuffer(data)){data=platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].utf8Encode(String(data));encoding=encoding+'utf-8/';}cipher.encrypt(data,function(err,data){if(err){callback(err);return;}msg.data=data;msg.encoding=encoding+'cipher+'+cipher.algorithm;callback(null,msg);});};Message.encode=function(msg,options,callback){var data=msg.data,encoding,nativeDataType=typeof data=='string'||platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isBuffer(data)||data===null||data===undefined;if(!nativeDataType){if(_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].isObject(data)||_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].isArray(data)){msg.data=JSON.stringify(data);msg.encoding=(encoding=msg.encoding)?encoding+'/json':'json';}else{throw new _errorinfo__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"]('Data type is unsupported',40013,400);}}if(options!=null&&options.cipher){Message.encrypt(msg,options,callback);}else{callback(null,msg);}};Message.encodeArray=function(messages,options,callback){var processed=0;for(var i=0;i<messages.length;i++){Message.encode(messages[i],options,function(err,msg){if(err){callback(err);return;}processed++;if(processed==messages.length){callback(null,messages);}});}};Message.serialize=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].encodeBody;Message.decode=function(message,context){/* The second argument could be either EncodingDecodingContext that contains ChannelOptions or ChannelOptions */if(!context||!context.channelOptions){var channelOptions=context;context={channelOptions:channelOptions,plugins:{},baseEncodedPreviousPayload:undefined};}var lastPayload=message.data;var encoding=message.encoding;if(encoding){var xforms=encoding.split('/'),lastProcessedEncodingIndex,encodingsToProcess=xforms.length,data=message.data;try{while((lastProcessedEncodingIndex=encodingsToProcess)>0){var match=xforms[--encodingsToProcess].match(/([\-\w]+)(\+([\w\-]+))?/);if(!match)break;var xform=match[1];switch(xform){case'base64':data=platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].base64Decode(String(data));if(lastProcessedEncodingIndex==xforms.length){lastPayload=data;}continue;case'utf-8':data=platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].utf8Decode(data);continue;case'json':data=JSON.parse(data);continue;case'cipher':if(context.channelOptions!=null&&context.channelOptions.cipher){var xformAlgorithm=match[3],cipher=context.channelOptions.channelCipher;/* don't attempt to decrypt unless the cipher params are compatible */if(xformAlgorithm!=cipher.algorithm){throw new Error('Unable to decrypt message with given cipher; incompatible cipher params');}data=cipher.decrypt(data);continue;}else{throw new Error('Unable to decrypt message; not an encrypted channel');}case'vcdiff':if(!context.plugins||!context.plugins.vcdiff){throw new _errorinfo__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"]('Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)',40019,400);}if(typeof Uint8Array==='undefined'){throw new _errorinfo__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"]('Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)',40020,400);}try{var deltaBase=context.baseEncodedPreviousPayload;if(typeof deltaBase==='string'){deltaBase=platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].utf8Encode(deltaBase);}/* vcdiff expects Uint8Arrays, can't copy with ArrayBuffers. (also, if we
								 * don't have a TextDecoder, deltaBase might be a WordArray here, so need
								 * to process it into a buffer anyway) */deltaBase=platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].toBuffer(deltaBase);data=platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].toBuffer(data);data=platform_bufferutils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].typedArrayToBuffer(context.plugins.vcdiff.decode(data,deltaBase));lastPayload=data;}catch(e){throw new _errorinfo__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"]('Vcdiff delta decode failed with '+e,40018,400);}continue;default:throw new Error("Unknown encoding");}break;}}catch(e){throw new _errorinfo__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"]('Error processing the '+xform+' encoding, decoder returned ‘'+e.message+'’',e.code||40013,400);}finally{message.encoding=lastProcessedEncodingIndex<=0?null:xforms.slice(0,lastProcessedEncodingIndex).join('/');message.data=data;}}context.baseEncodedPreviousPayload=lastPayload;};Message.fromResponseBody=function(body,options,format){if(format){body=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].decodeBody(body,format);}for(var i=0;i<body.length;i++){var msg=body[i]=Message.fromValues(body[i]);try{Message.decode(msg,options);}catch(e){_util_logger__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].LOG_ERROR,'Message.fromResponseBody()',e.toString());}}return body;};Message.fromValues=function(values){return _util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].mixin(new Message(),values);};Message.fromValuesArray=function(values){var count=values.length,result=new Array(count);for(var i=0;i<count;i++)result[i]=Message.fromValues(values[i]);return result;};function normalizeCipherOptions(options){if(options&&options.cipher&&!options.cipher.channelCipher){if(!platform_crypto__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"])throw new Error('Encryption not enabled; use ably.encryption.js instead');var cipher=platform_crypto__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].getCipher(options.cipher);options.cipher=cipher.cipherParams;options.channelCipher=cipher.cipher;}}Message.fromEncoded=function(encoded,options){var msg=Message.fromValues(encoded);normalizeCipherOptions(options);/* if decoding fails at any point, catch and return the message decoded to
		 * the fullest extent possible */try{Message.decode(msg,options);}catch(e){_util_logger__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].LOG_ERROR,'Message.fromEncoded()',e.toString());}return msg;};Message.fromEncodedArray=function(encodedArray,options){normalizeCipherOptions(options);return _util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrMap(encodedArray,function(encoded){return Message.fromEncoded(encoded,options);});};function getMessageSize(msg){var size=0;if(msg.name){size+=msg.name.length;}if(msg.clientId){size+=msg.clientId.length;}if(msg.extras){size+=JSON.stringify(msg.extras).length;}if(msg.data){size+=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].dataSizeBytes(msg.data);}return size;};/* This should be called on encode()d (and encrypt()d) Messages (as it
	 * assumes the data is a string or buffer) */Message.getMessagesSize=function(messages){var msg,total=0;for(var i=0;i<messages.length;i++){msg=messages[i];total+=msg.size||(msg.size=getMessageSize(msg));}return total;};return Message;}();/* harmony default export */__webpack_exports__["a"]=Message;/***/},/* 10 */ /***/function(module,exports,__nested_webpack_require_69114__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_69114__(12));}else{}})(this,function(CryptoJS){(function(){// Check if typed arrays are supported
if(typeof ArrayBuffer!='function'){return;}// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;// Reference original init
var superInit=WordArray.init;// Augment WordArray.init to handle typed arrays
var subInit=WordArray.init=function(typedArray){// Convert buffers to uint8
if(typedArray instanceof ArrayBuffer){typedArray=new Uint8Array(typedArray);}// Convert other array views to uint8
if(typedArray instanceof Int8Array||typeof Uint8ClampedArray!=="undefined"&&typedArray instanceof Uint8ClampedArray||typedArray instanceof Int16Array||typedArray instanceof Uint16Array||typedArray instanceof Int32Array||typedArray instanceof Uint32Array||typedArray instanceof Float32Array||typedArray instanceof Float64Array){typedArray=new Uint8Array(typedArray.buffer,typedArray.byteOffset,typedArray.byteLength);}// Handle Uint8Array
if(typedArray instanceof Uint8Array){// Shortcut
var typedArrayByteLength=typedArray.byteLength;// Extract bytes
var words=[];for(var i=0;i<typedArrayByteLength;i++){words[i>>>2]|=typedArray[i]<<24-i%4*8;}// Initialize this word array
superInit.call(this,words,typedArrayByteLength);}else{// Else call normal init
superInit.apply(this,arguments);}};subInit.prototype=WordArray;})();return CryptoJS.lib.WordArray;});/***/},/* 11 */ /***/function(module,__webpack_exports__,__nested_webpack_require_70645__){"use strict";/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_70645__(3);/* harmony import */var _util_logger__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_70645__(0);/* harmony import */var platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_70645__(4);/* harmony import */var _message__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_70645__(9);/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_70645__(1);var PresenceMessage=function(){var msgpack=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].msgpack;function toActionValue(actionString){return _util_utils__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].arrIndexOf(PresenceMessage.Actions,actionString);}function PresenceMessage(){this.action=undefined;this.id=undefined;this.timestamp=undefined;this.clientId=undefined;this.connectionId=undefined;this.data=undefined;this.encoding=undefined;this.size=undefined;}PresenceMessage.Actions=['absent','present','enter','leave','update'];/* Returns whether this presenceMessage is synthesized, i.e. was not actually
	 * sent by the connection (usually means a leave event sent 15s after a
	 * disconnection). This is useful because synthesized messages cannot be
	 * compared for newness by id lexicographically - RTP2b1
	 */PresenceMessage.prototype.isSynthesized=function(){return this.id.substring(this.connectionId.length,0)!==this.connectionId;};/* RTP2b2 */PresenceMessage.prototype.parseId=function(){var parts=this.id.split(':');return{connectionId:parts[0],msgSerial:parseInt(parts[1],10),index:parseInt(parts[2],10)};};/**
	 * Overload toJSON() to intercept JSON.stringify()
	 * @return {*}
	 */PresenceMessage.prototype.toJSON=function(){var result={clientId:this.clientId,/* Convert presence action back to an int for sending to Ably */action:toActionValue(this.action),encoding:this.encoding};/* encode data to base64 if present and we're returning real JSON;
		 * although msgpack calls toJSON(), we know it is a stringify()
		 * call if it has a non-empty arguments list */var data=this.data;if(data&&platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].isBuffer(data)){if(arguments.length>0){/* stringify call */var encoding=this.encoding;result.encoding=encoding?encoding+'/base64':'base64';data=platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].base64Encode(data);}else{/* Called by msgpack. toBuffer returns a datatype understandable by
				 * that platform's msgpack implementation (Buffer in node, Uint8Array
				 * in browsers) */data=platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].toBuffer(data);}}result.data=data;return result;};PresenceMessage.prototype.toString=function(){var result='[PresenceMessage';result+='; action='+this.action;if(this.id)result+='; id='+this.id;if(this.timestamp)result+='; timestamp='+this.timestamp;if(this.clientId)result+='; clientId='+this.clientId;if(this.connectionId)result+='; connectionId='+this.connectionId;if(this.encoding)result+='; encoding='+this.encoding;if(this.data){if(typeof this.data=='string')result+='; data='+this.data;else if(platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].isBuffer(this.data))result+='; data (buffer)='+platform_bufferutils__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].base64Encode(this.data);else result+='; data (json)='+JSON.stringify(this.data);}result+=']';return result;};PresenceMessage.encode=_message__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].encode;PresenceMessage.decode=_message__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].decode;PresenceMessage.fromResponseBody=function(body,options,format){if(format){body=_util_utils__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].decodeBody(body,format);}for(var i=0;i<body.length;i++){var msg=body[i]=PresenceMessage.fromValues(body[i],true);try{PresenceMessage.decode(msg,options);}catch(e){_util_logger__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].LOG_ERROR,'PresenceMessage.fromResponseBody()',e.toString());}}return body;};/* Creates a PresenceMessage from specified values, with a string presence action */PresenceMessage.fromValues=function(values,stringifyAction){if(stringifyAction){values.action=PresenceMessage.Actions[values.action];}return _util_utils__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].mixin(new PresenceMessage(),values);};PresenceMessage.fromValuesArray=function(values){var count=values.length,result=new Array(count);for(var i=0;i<count;i++)result[i]=PresenceMessage.fromValues(values[i]);return result;};PresenceMessage.fromEncoded=function(encoded,options){var msg=PresenceMessage.fromValues(encoded,true);/* if decoding fails at any point, catch and return the message decoded to
		 * the fullest extent possible */try{PresenceMessage.decode(msg,options);}catch(e){_util_logger__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].LOG_ERROR,'PresenceMessage.fromEncoded()',e.toString());}return msg;};PresenceMessage.fromEncodedArray=function(encodedArray,options){return _util_utils__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].arrMap(encodedArray,function(encoded){return PresenceMessage.fromEncoded(encoded,options);});};PresenceMessage.getMessagesSize=_message__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].getMessagesSize;return PresenceMessage;}();/* harmony default export */__webpack_exports__["a"]=PresenceMessage;/***/},/* 12 */ /***/function(module,exports,__nested_webpack_require_76194__){/* WEBPACK VAR INJECTION */(function(global){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory();}else{}})(this,function(){/*globals window, global, require*/ /**
	 * CryptoJS core components.
	 */var CryptoJS=CryptoJS||function(Math,undefined){var crypto;// Native crypto from window (Browser)
if(typeof window!=='undefined'&&window.crypto){crypto=window.crypto;}// Native (experimental IE 11) crypto from window (Browser)
if(!crypto&&typeof window!=='undefined'&&window.msCrypto){crypto=window.msCrypto;}// Native crypto from global (NodeJS)
if(!crypto&&typeof global!=='undefined'&&global.crypto){crypto=global.crypto;}// Native crypto import via require (NodeJS)
if(!crypto&&"function"==='function'){try{crypto=__nested_webpack_require_76194__(45);}catch(err){}}/*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */var cryptoSecureRandomInt=function(){if(crypto){// Use getRandomValues method (Browser)
if(typeof crypto.getRandomValues==='function'){try{return crypto.getRandomValues(new Uint32Array(1))[0];}catch(err){}}// Use randomBytes method (NodeJS)
if(typeof crypto.randomBytes==='function'){try{return crypto.randomBytes(4).readInt32LE();}catch(err){}}}throw new Error('Native crypto module could not be used to get secure random number.');};/*
	     * Local polyfill of Object.create

	     */var create=Object.create||function(){function F(){}return function(obj){var subtype;F.prototype=obj;subtype=new F();F.prototype=null;return subtype;};}();/**
	     * CryptoJS namespace.
	     */var C={};/**
	     * Library namespace.
	     */var C_lib=C.lib={};/**
	     * Base object for prototypal inheritance.
	     */var Base=C_lib.Base=function(){return{/**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */extend:function(overrides){// Spawn
var subtype=create(this);// Augment
if(overrides){subtype.mixIn(overrides);}// Create default initializer
if(!subtype.hasOwnProperty('init')||this.init===subtype.init){subtype.init=function(){subtype.$super.init.apply(this,arguments);};}// Initializer's prototype is the subtype object
subtype.init.prototype=subtype;// Reference supertype
subtype.$super=this;return subtype;},/**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */create:function(){var instance=this.extend();instance.init.apply(instance,arguments);return instance;},/**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */init:function(){},/**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */mixIn:function(properties){for(var propertyName in properties){if(properties.hasOwnProperty(propertyName)){this[propertyName]=properties[propertyName];}}// IE won't copy toString using the loop above
if(properties.hasOwnProperty('toString')){this.toString=properties.toString;}},/**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */clone:function(){return this.init.prototype.extend(this);}};}();/**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */var WordArray=C_lib.WordArray=Base.extend({/**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */init:function(words,sigBytes){words=this.words=words||[];if(sigBytes!=undefined){this.sigBytes=sigBytes;}else{this.sigBytes=words.length*4;}},/**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */toString:function(encoder){return(encoder||Hex).stringify(this);},/**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */concat:function(wordArray){// Shortcuts
var thisWords=this.words;var thatWords=wordArray.words;var thisSigBytes=this.sigBytes;var thatSigBytes=wordArray.sigBytes;// Clamp excess bits
this.clamp();// Concat
if(thisSigBytes%4){// Copy one byte at a time
for(var i=0;i<thatSigBytes;i++){var thatByte=thatWords[i>>>2]>>>24-i%4*8&0xff;thisWords[thisSigBytes+i>>>2]|=thatByte<<24-(thisSigBytes+i)%4*8;}}else{// Copy one word at a time
for(var i=0;i<thatSigBytes;i+=4){thisWords[thisSigBytes+i>>>2]=thatWords[i>>>2];}}this.sigBytes+=thatSigBytes;// Chainable
return this;},/**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */clamp:function(){// Shortcuts
var words=this.words;var sigBytes=this.sigBytes;// Clamp
words[sigBytes>>>2]&=0xffffffff<<32-sigBytes%4*8;words.length=Math.ceil(sigBytes/4);},/**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */clone:function(){var clone=Base.clone.call(this);clone.words=this.words.slice(0);return clone;},/**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */random:function(nBytes){var words=[];for(var i=0;i<nBytes;i+=4){words.push(cryptoSecureRandomInt());}return new WordArray.init(words,nBytes);}});/**
	     * Encoder namespace.
	     */var C_enc=C.enc={};/**
	     * Hex encoding strategy.
	     */var Hex=C_enc.Hex={/**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;// Convert
var hexChars=[];for(var i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&0xff;hexChars.push((bite>>>4).toString(16));hexChars.push((bite&0x0f).toString(16));}return hexChars.join('');},/**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */parse:function(hexStr){// Shortcut
var hexStrLength=hexStr.length;// Convert
var words=[];for(var i=0;i<hexStrLength;i+=2){words[i>>>3]|=parseInt(hexStr.substr(i,2),16)<<24-i%8*4;}return new WordArray.init(words,hexStrLength/2);}};/**
	     * Latin1 encoding strategy.
	     */var Latin1=C_enc.Latin1={/**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;// Convert
var latin1Chars=[];for(var i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&0xff;latin1Chars.push(String.fromCharCode(bite));}return latin1Chars.join('');},/**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */parse:function(latin1Str){// Shortcut
var latin1StrLength=latin1Str.length;// Convert
var words=[];for(var i=0;i<latin1StrLength;i++){words[i>>>2]|=(latin1Str.charCodeAt(i)&0xff)<<24-i%4*8;}return new WordArray.init(words,latin1StrLength);}};/**
	     * UTF-8 encoding strategy.
	     */var Utf8=C_enc.Utf8={/**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */stringify:function(wordArray){try{return decodeURIComponent(escape(Latin1.stringify(wordArray)));}catch(e){throw new Error('Malformed UTF-8 data');}},/**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */parse:function(utf8Str){return Latin1.parse(unescape(encodeURIComponent(utf8Str)));}};/**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */var BufferedBlockAlgorithm=C_lib.BufferedBlockAlgorithm=Base.extend({/**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */reset:function(){// Initial values
this._data=new WordArray.init();this._nDataBytes=0;},/**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */_append:function(data){// Convert string to WordArray, else assume WordArray already
if(typeof data=='string'){data=Utf8.parse(data);}// Append
this._data.concat(data);this._nDataBytes+=data.sigBytes;},/**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */_process:function(doFlush){var processedWords;// Shortcuts
var data=this._data;var dataWords=data.words;var dataSigBytes=data.sigBytes;var blockSize=this.blockSize;var blockSizeBytes=blockSize*4;// Count blocks ready
var nBlocksReady=dataSigBytes/blockSizeBytes;if(doFlush){// Round up to include partial blocks
nBlocksReady=Math.ceil(nBlocksReady);}else{// Round down to include only full blocks,
// less the number of blocks that must remain in the buffer
nBlocksReady=Math.max((nBlocksReady|0)-this._minBufferSize,0);}// Count words ready
var nWordsReady=nBlocksReady*blockSize;// Count bytes ready
var nBytesReady=Math.min(nWordsReady*4,dataSigBytes);// Process blocks
if(nWordsReady){for(var offset=0;offset<nWordsReady;offset+=blockSize){// Perform concrete-algorithm logic
this._doProcessBlock(dataWords,offset);}// Remove processed words
processedWords=dataWords.splice(0,nWordsReady);data.sigBytes-=nBytesReady;}// Return processed words
return new WordArray.init(processedWords,nBytesReady);},/**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */clone:function(){var clone=Base.clone.call(this);clone._data=this._data.clone();return clone;},_minBufferSize:0});/**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */var Hasher=C_lib.Hasher=BufferedBlockAlgorithm.extend({/**
	         * Configuration options.
	         */cfg:Base.extend(),/**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */init:function(cfg){// Apply config defaults
this.cfg=this.cfg.extend(cfg);// Set initial values
this.reset();},/**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */reset:function(){// Reset data buffer
BufferedBlockAlgorithm.reset.call(this);// Perform concrete-hasher logic
this._doReset();},/**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */update:function(messageUpdate){// Append
this._append(messageUpdate);// Update the hash
this._process();// Chainable
return this;},/**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */finalize:function(messageUpdate){// Final message update
if(messageUpdate){this._append(messageUpdate);}// Perform concrete-hasher logic
var hash=this._doFinalize();return hash;},blockSize:512/32,/**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */_createHelper:function(hasher){return function(message,cfg){return new hasher.init(cfg).finalize(message);};},/**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */_createHmacHelper:function(hasher){return function(message,key){return new C_algo.HMAC.init(hasher,key).finalize(message);};}});/**
	     * Algorithm namespace.
	     */var C_algo=C.algo={};return C;}(Math);return CryptoJS;});/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_76194__(17));/***/},/* 13 */ /***/function(module,__webpack_exports__,__nested_webpack_require_94248__){"use strict";/* harmony import */var _types_errorinfo__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_94248__(2);/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_94248__(1);var ConnectionError={disconnected:_types_errorinfo__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({statusCode:400,code:80003,message:'Connection to server temporarily unavailable'}),suspended:_types_errorinfo__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({statusCode:400,code:80002,message:'Connection to server unavailable'}),failed:_types_errorinfo__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({statusCode:400,code:80000,message:'Connection failed or disconnected by server'}),closing:_types_errorinfo__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({statusCode:400,code:80017,message:'Connection closing'}),closed:_types_errorinfo__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({statusCode:400,code:80017,message:'Connection closed'}),unknownConnectionErr:_types_errorinfo__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({statusCode:500,code:50002,message:'Internal connection error'}),unknownChannelErr:_types_errorinfo__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({statusCode:500,code:50001,message:'Internal channel error'})};ConnectionError.isRetriable=function(err){if(!err.statusCode||!err.code||err.statusCode>=500){return true;}var retriable=false;_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].valuesArray(ConnectionError).forEach(function(connErr){if(connErr.code&&connErr.code==err.code){retriable=true;}});return retriable;};/* harmony default export */__webpack_exports__["a"]=ConnectionError;/***/},/* 14 */ /***/function(module,__webpack_exports__,__nested_webpack_require_96021__){"use strict";// EXTERNAL MODULE: ./common/lib/util/logger.js
var logger=__nested_webpack_require_96021__(0);// EXTERNAL MODULE: ./browser/fragments/platform-browser.js
var platform_browser=__nested_webpack_require_96021__(3);// EXTERNAL MODULE: ./common/lib/util/utils.js
var utils=__nested_webpack_require_96021__(1);// EXTERNAL MODULE: ./browser/lib/util/http.js
var http=__nested_webpack_require_96021__(6);// EXTERNAL MODULE: ./common/lib/util/multicaster.js
var multicaster=__nested_webpack_require_96021__(22);// EXTERNAL MODULE: ./browser/lib/util/bufferutils.js
var bufferutils=__nested_webpack_require_96021__(4);// EXTERNAL MODULE: ./common/lib/types/errorinfo.js
var errorinfo=__nested_webpack_require_96021__(2);// CONCATENATED MODULE: ./browser/lib/util/base64.js
/*
 Copyright (c) 2008 Fred Palmer fred.palmer_at_gmail.com

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 */var Base64=function(){function StringBuffer(){this.buffer=[];}StringBuffer.prototype.append=function append(string){this.buffer.push(string);return this;};StringBuffer.prototype.toString=function toString(){return this.buffer.join("");};var Base64={codex:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output=new StringBuffer();var codex=Base64.codex;var enumerator=new Utf8EncodeEnumerator(input);while(enumerator.moveNext()){var chr1=enumerator.current;enumerator.moveNext();var chr2=enumerator.current;enumerator.moveNext();var chr3=enumerator.current;var enc1=chr1>>2;var enc2=(chr1&3)<<4|chr2>>4;var enc3=(chr2&15)<<2|chr3>>6;var enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}output.append(codex.charAt(enc1)+codex.charAt(enc2)+codex.charAt(enc3)+codex.charAt(enc4));}return output.toString();},decode:function(input){var output=new StringBuffer();var enumerator=new Base64DecodeEnumerator(input);while(enumerator.moveNext()){var charCode=enumerator.current;if(charCode<128)output.append(String.fromCharCode(charCode));else if(charCode>191&&charCode<224){enumerator.moveNext();var charCode2=enumerator.current;output.append(String.fromCharCode((charCode&31)<<6|charCode2&63));}else{enumerator.moveNext();var charCode2=enumerator.current;enumerator.moveNext();var charCode3=enumerator.current;output.append(String.fromCharCode((charCode&15)<<12|(charCode2&63)<<6|charCode3&63));}}return output.toString();}};function Utf8EncodeEnumerator(input){this._input=input;this._index=-1;this._buffer=[];}Utf8EncodeEnumerator.prototype={current:Number.NaN,moveNext:function(){if(this._buffer.length>0){this.current=this._buffer.shift();return true;}else if(this._index>=this._input.length-1){this.current=Number.NaN;return false;}else{var charCode=this._input.charCodeAt(++this._index);// "\r\n" -> "\n"
//
if(charCode==13&&this._input.charCodeAt(this._index+1)==10){charCode=10;this._index+=2;}if(charCode<128){this.current=charCode;}else if(charCode>127&&charCode<2048){this.current=charCode>>6|192;this._buffer.push(charCode&63|128);}else{this.current=charCode>>12|224;this._buffer.push(charCode>>6&63|128);this._buffer.push(charCode&63|128);}return true;}}};function Base64DecodeEnumerator(input){this._input=input;this._index=-1;this._buffer=[];}Base64DecodeEnumerator.prototype={current:64,moveNext:function(){if(this._buffer.length>0){this.current=this._buffer.shift();return true;}else if(this._index>=this._input.length-1){this.current=64;return false;}else{var enc1=Base64.codex.indexOf(this._input.charAt(++this._index));var enc2=Base64.codex.indexOf(this._input.charAt(++this._index));var enc3=Base64.codex.indexOf(this._input.charAt(++this._index));var enc4=Base64.codex.indexOf(this._input.charAt(++this._index));var chr1=enc1<<2|enc2>>4;var chr2=(enc2&15)<<4|enc3>>2;var chr3=(enc3&3)<<6|enc4;this.current=chr1;if(enc3!=64)this._buffer.push(chr2);if(enc4!=64)this._buffer.push(chr3);return true;}}};return Base64;}();/* harmony default export */var base64=Base64;// EXTERNAL MODULE: ./node_modules/crypto-js/build/hmac-sha256.js
var hmac_sha256=__nested_webpack_require_96021__(38);var hmac_sha256_default=/*#__PURE__*/__nested_webpack_require_96021__.n(hmac_sha256);// EXTERNAL MODULE: ./node_modules/crypto-js/build/enc-base64.js
var enc_base64=__nested_webpack_require_96021__(18);// CONCATENATED MODULE: ./common/lib/client/auth.js
var auth_Auth=function(){var MAX_TOKEN_LENGTH=Math.pow(2,17);function noop(){}function random(){return('000000'+Math.floor(Math.random()*1E16)).slice(-16);}function normaliseAuthcallbackError(err){/* A client auth callback may give errors in any number of formats; normalise to an errorinfo */if(!utils["a"/* default */].isErrorInfo(err)){return new errorinfo["a"/* default */](utils["a"/* default */].inspectError(err),err.code||40170,err.statusCode||401);}/* network errors will not have an inherent error code */if(!err.code){if(err.statusCode===403){err.code=40300;}else{err.code=40170;/* normalise statusCode to 401 per RSA4e */err.statusCode=401;}}return err;}var hmac,toBase64;if(platform_browser["a"/* default */].createHmac){toBase64=function(str){return Buffer.from(str,'ascii').toString('base64');};hmac=function(text,key){var inst=platform_browser["a"/* default */].createHmac('SHA256',key);inst.update(text);return inst.digest('base64');};}else{toBase64=base64.encode;hmac=function(text,key){return Object(enc_base64["stringify"])(hmac_sha256_default()(text,key));};}function c14n(capability){if(!capability)return'';if(typeof capability=='string')capability=JSON.parse(capability);var c14nCapability={};var keys=utils["a"/* default */].keysArray(capability,true);if(!keys)return'';keys.sort();for(var i=0;i<keys.length;i++){c14nCapability[keys[i]]=capability[keys[i]].sort();}return JSON.stringify(c14nCapability);}function logAndValidateTokenAuthMethod(authOptions){if(authOptions.authCallback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth()','using token auth with authCallback');}else if(authOptions.authUrl){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth()','using token auth with authUrl');}else if(authOptions.key){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth()','using token auth with client-side signing');}else if(authOptions.tokenDetails){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth()','using token auth with supplied token only');}else{var msg='authOptions must include valid authentication parameters';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth()',msg);throw new Error(msg);}}function basicAuthForced(options){return'useTokenAuth'in options&&!options.useTokenAuth;}/* RSA4 */function useTokenAuth(options){return options.useTokenAuth||!basicAuthForced(options)&&(options.authCallback||options.authUrl||options.token||options.tokenDetails);}/* RSA4a */function noWayToRenew(options){return!options.key&&!options.authCallback&&!options.authUrl;}var trId=0;function getTokenRequestId(){return trId++;}function Auth(client,options){this.client=client;this.tokenParams=options.defaultTokenParams||{};/* The id of the current token request if one is in progress, else null */this.currentTokenRequestId=null;this.waitingForTokenRequest=null;if(useTokenAuth(options)){/* Token auth */if(options.key&&!hmac){var msg='client-side token request signing not supported';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth()',msg);throw new Error(msg);}if(noWayToRenew(options)){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth()','Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help');}this._saveTokenOptions(options.defaultTokenParams,options);logAndValidateTokenAuthMethod(this.authOptions);}else{/* Basic auth */if(!options.key){var msg='No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth()',msg);throw new errorinfo["a"/* default */](msg,40160,401);}logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth()','anonymous, using basic auth');this._saveBasicOptions(options);}}/**
	 * Instructs the library to get a token immediately and ensures Token Auth
	 * is used for all future requests, storing the tokenParams and authOptions
	 * given as the new defaults for subsequent use.
	 *
	 * @param tokenParams
	 * an object containing the parameters for the requested token:
	 *
	 * - ttl:        (optional) the requested life of any new token in ms. If none
	 *               is specified a default of 1 hour is provided. The maximum lifetime
	 *               is 24hours; any request exceeeding that lifetime will be rejected
	 *               with an error.
	 *
	 * - capability: (optional) the capability to associate with the access token.
	 *               If none is specified, a token will be requested with all of the
	 *               capabilities of the specified key.
	 *
	 * - clientId:   (optional) a client Id to associate with the token
	 *
	 * - timestamp:  (optional) the time in ms since the epoch. If none is specified,
	 *               the system will be queried for a time value to use.
	 *
	 * @param authOptions
	 * an object containing auth options relevant to token auth:
	 *
	 * - queryTime   (optional) boolean indicating that the Ably system should be
	 *               queried for the current time when none is specified explicitly.
	 *
	 * - tokenDetails: (optional) object: An authenticated TokenDetails object.
	 *
	 * - token:        (optional) string: the `token` property of a tokenDetails object
	 *
	 * - authCallback:  (optional) a JavaScript callback to be called to get auth information.
	 *                  authCallback should be a function of (tokenParams, callback) that calls
	 *                  the callback with (err, result), where result is any of:
	 *                  - a tokenRequest object (ie the result of a rest.auth.createTokenRequest call),
	 *                  - a tokenDetails object (ie the result of a rest.auth.requestToken call),
	 *                  - a token string
	 *
	 * - authUrl:       (optional) a URL to be used to GET or POST a set of token request
	 *                  params, to obtain a signed token request.
	 *
	 * - authHeaders:   (optional) a set of application-specific headers to be added to any request
	 *                  made to the authUrl.
	 *
	 * - authParams:    (optional) a set of application-specific query params to be added to any
	 *                  request made to the authUrl.
	 *
	 *
	 * - requestHeaders (optional, unsupported, for testing only) extra headers to add to the
	 *                  requestToken request
	 *
	 * @param callback (err, tokenDetails)
	 */Auth.prototype.authorize=function(tokenParams,authOptions,callback){/* shuffle and normalise arguments as necessary */if(typeof tokenParams=='function'&&!callback){callback=tokenParams;authOptions=tokenParams=null;}else if(typeof authOptions=='function'&&!callback){callback=authOptions;authOptions=null;}if(!callback){if(this.client.options.promises){return utils["a"/* default */].promisify(this,'authorize',arguments);}callback=noop;}var self=this;/* RSA10a: authorize() call implies token auth. If a key is passed it, we
		 * just check if it doesn't clash and assume we're generating a token from it */if(authOptions&&authOptions.key&&this.authOptions.key!==authOptions.key){throw new errorinfo["a"/* default */]('Unable to update auth options with incompatible key',40102,401);}if(authOptions&&'force'in authOptions){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth.authorize','Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want');/* Emulate the old behaviour: if 'force' was the only member of authOptions,
			 * set it to null so it doesn't overwrite stored. TODO: remove in version 1.0 */if(utils["a"/* default */].isOnlyPropIn(authOptions,'force')){authOptions=null;}}this._forceNewToken(tokenParams,authOptions,function(err,tokenDetails){if(err){if(self.client.connection){/* We interpret RSA4d as including requests made by a client lib to
					 * authenticate triggered by an explicit authorize() or an AUTH received from
					 * ably, not just connect-sequence-triggered token fetches */self.client.connection.connectionManager.actOnErrorFromAuthorize(err);}callback(err);return;}/* RTC8
			 * - When authorize called by an end user and have a realtime connection,
			 * don't call back till new token has taken effect.
			 * - Use self.client.connection as a proxy for (self.client instanceof Realtime),
			 * which doesn't work in node as Realtime isn't part of the vm context for Rest clients */if(self.client.connection){self.client.connection.connectionManager.onAuthUpdated(tokenDetails,callback);}else{callback(null,tokenDetails);}});};Auth.prototype.authorise=function(){logger["a"/* default */].deprecated('Auth.authorise','Auth.authorize');this.authorize.apply(this,arguments);};/* For internal use, eg by connectionManager - useful when want to call back
	 * as soon as we have the new token, rather than waiting for it to take
	 * effect on the connection as #authorize does */Auth.prototype._forceNewToken=function(tokenParams,authOptions,callback){var self=this;/* get rid of current token even if still valid */this.tokenDetails=null;/* _save normalises the tokenParams and authOptions and updates the auth
		 * object. All subsequent operations should use the values on `this`,
		 * not the passed in ones. */this._saveTokenOptions(tokenParams,authOptions);logAndValidateTokenAuthMethod(this.authOptions);this._ensureValidAuthCredentials(true,function(err,tokenDetails){/* RSA10g */delete self.tokenParams.timestamp;delete self.authOptions.queryTime;callback(err,tokenDetails);});};/**
	 * Request an access token
	 * @param authOptions
	 * an object containing the request options:
	 * - key:           the key to use.
	 *
	 * - authCallback:  (optional) a JavaScript callback to be called to get auth information.
	 *                  authCallback should be a function of (tokenParams, callback) that calls
	 *                  the callback with (err, result), where result is any of:
	 *                  - a tokenRequest object (ie the result of a rest.auth.createTokenRequest call),
	 *                  - a tokenDetails object (ie the result of a rest.auth.requestToken call),
	 *                  - a token string
	 *
	 * - authUrl:       (optional) a URL to be used to GET or POST a set of token request
	 *                  params, to obtain a signed token request.
	 *
	 * - authHeaders:   (optional) a set of application-specific headers to be added to any request
	 *                  made to the authUrl.
	 *
	 * - authParams:    (optional) a set of application-specific query params to be added to any
	 *                  request made to the authUrl.
	 *
	 * - queryTime      (optional) boolean indicating that the ably system should be
	 *                  queried for the current time when none is specified explicitly
	 *
	 * - requestHeaders (optional, unsupported, for testing only) extra headers to add to the
	 *                  requestToken request
	 *
	 * @param tokenParams
	 * an object containing the parameters for the requested token:
	 * - ttl:          (optional) the requested life of the token in milliseconds. If none is specified
	 *                  a default of 1 hour is provided. The maximum lifetime is 24hours; any request
	 *                  exceeeding that lifetime will be rejected with an error.
	 *
	 * - capability:    (optional) the capability to associate with the access token.
	 *                  If none is specified, a token will be requested with all of the
	 *                  capabilities of the specified key.
	 *
	 * - clientId:      (optional) a client Id to associate with the token; if not
	 *                  specified, a clientId passed in constructing the Rest interface will be used
	 *
	 * - timestamp:     (optional) the time in ms since the epoch. If none is specified,
	 *                  the system will be queried for a time value to use.
	 *
	 * @param callback (err, tokenDetails)
	 */Auth.prototype.requestToken=function(tokenParams,authOptions,callback){/* shuffle and normalise arguments as necessary */if(typeof tokenParams=='function'&&!callback){callback=tokenParams;authOptions=tokenParams=null;}else if(typeof authOptions=='function'&&!callback){callback=authOptions;authOptions=null;}if(!callback&&this.client.options.promises){return utils["a"/* default */].promisify(this,'requestToken',arguments);}/* RSA8e: if authOptions passed in, they're used instead of stored, don't merge them */authOptions=authOptions||this.authOptions;tokenParams=tokenParams||utils["a"/* default */].copy(this.tokenParams);callback=callback||noop;/* first set up whatever callback will be used to get signed
		 * token requests */var tokenRequestCallback,client=this.client;if(authOptions.authCallback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth.requestToken()','using token auth with authCallback');tokenRequestCallback=authOptions.authCallback;}else if(authOptions.authUrl){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth.requestToken()','using token auth with authUrl');tokenRequestCallback=function(params,cb){var authHeaders=utils["a"/* default */].mixin({accept:'application/json, text/plain'},authOptions.authHeaders),usePost=authOptions.authMethod&&authOptions.authMethod.toLowerCase()==='post';if(!usePost){/* Combine authParams with any qs params given in the authUrl */var queryIdx=authOptions.authUrl.indexOf('?');if(queryIdx>-1){var providedQsParams=utils["a"/* default */].parseQueryString(authOptions.authUrl.slice(queryIdx));authOptions.authUrl=authOptions.authUrl.slice(0,queryIdx);/* In case of conflict, authParams take precedence over qs params in the authUrl */authOptions.authParams=utils["a"/* default */].mixin(providedQsParams,authOptions.authParams);}}/* RSA8c2 */var authParams=utils["a"/* default */].mixin({},authOptions.authParams||{},params);var authUrlRequestCallback=function(err,body,headers,unpacked){var contentType;if(err){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Auth.requestToken().tokenRequestCallback','Received Error: '+utils["a"/* default */].inspectError(err));}else{contentType=headers['content-type'];logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Auth.requestToken().tokenRequestCallback','Received; content-type: '+contentType+'; body: '+utils["a"/* default */].inspectBody(body));}if(err||unpacked)return cb(err,body);if(bufferutils["a"/* default */].isBuffer(body))body=body.toString();if(!contentType){cb(new errorinfo["a"/* default */]('authUrl response is missing a content-type header',40170,401));return;}var json=contentType.indexOf('application/json')>-1,text=contentType.indexOf('text/plain')>-1||contentType.indexOf('application/jwt')>-1;if(!json&&!text){cb(new errorinfo["a"/* default */]('authUrl responded with unacceptable content-type '+contentType+', should be either text/plain, application/jwt or application/json',40170,401));return;}if(json){if(body.length>MAX_TOKEN_LENGTH){cb(new errorinfo["a"/* default */]('authUrl response exceeded max permitted length',40170,401));return;}try{body=JSON.parse(body);}catch(e){cb(new errorinfo["a"/* default */]('Unexpected error processing authURL response; err = '+e.message,40170,401));return;}}cb(null,body,contentType);};logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Auth.requestToken().tokenRequestCallback','Requesting token from '+authOptions.authUrl+'; Params: '+JSON.stringify(authParams)+'; method: '+(usePost?'POST':'GET'));if(usePost){/* send body form-encoded */var headers=authHeaders||{};headers['content-type']='application/x-www-form-urlencoded';var body=utils["a"/* default */].toQueryString(authParams).slice(1);/* slice is to remove the initial '?' */http["a"/* default */].postUri(client,authOptions.authUrl,headers,body,{},authUrlRequestCallback);}else{http["a"/* default */].getUri(client,authOptions.authUrl,authHeaders||{},authParams,authUrlRequestCallback);}};}else if(authOptions.key){var self=this;logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth.requestToken()','using token auth with client-side signing');tokenRequestCallback=function(params,cb){self.createTokenRequest(params,authOptions,cb);};}else{var msg="Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth()','library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help');callback(new errorinfo["a"/* default */](msg,40171,403));return;}/* normalise token params */if('capability'in tokenParams)tokenParams.capability=c14n(tokenParams.capability);var tokenRequest=function(signedTokenParams,tokenCb){var keyName=signedTokenParams.keyName,path='/keys/'+keyName+'/requestToken',tokenUri=function(host){return client.baseUri(host)+path;};var requestHeaders=utils["a"/* default */].defaultPostHeaders();if(authOptions.requestHeaders)utils["a"/* default */].mixin(requestHeaders,authOptions.requestHeaders);logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Auth.requestToken().requestToken','Sending POST to '+path+'; Token params: '+JSON.stringify(signedTokenParams));signedTokenParams=JSON.stringify(signedTokenParams);http["a"/* default */].post(client,tokenUri,requestHeaders,signedTokenParams,null,tokenCb);};var tokenRequestCallbackTimeoutExpired=false,timeoutLength=this.client.options.timeouts.realtimeRequestTimeout,tokenRequestCallbackTimeout=setTimeout(function(){tokenRequestCallbackTimeoutExpired=true;var msg='Token request callback timed out after '+timeoutLength/1000+' seconds';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth.requestToken()',msg);callback(new errorinfo["a"/* default */](msg,40170,401));},timeoutLength);tokenRequestCallback(tokenParams,function(err,tokenRequestOrDetails,contentType){if(tokenRequestCallbackTimeoutExpired)return;clearTimeout(tokenRequestCallbackTimeout);if(err){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth.requestToken()','token request signing call returned error; err = '+utils["a"/* default */].inspectError(err));callback(normaliseAuthcallbackError(err));return;}/* the response from the callback might be a token string, a signed request or a token details */if(typeof tokenRequestOrDetails==='string'){if(tokenRequestOrDetails.length===0){callback(new errorinfo["a"/* default */]('Token string is empty',40170,401));}else if(tokenRequestOrDetails.length>MAX_TOKEN_LENGTH){callback(new errorinfo["a"/* default */]('Token string exceeded max permitted length (was '+tokenRequestOrDetails.length+' bytes)',40170,401));}else if(tokenRequestOrDetails==='undefined'||tokenRequestOrDetails==='null'){/* common failure mode with poorly-implemented authCallbacks */callback(new errorinfo["a"/* default */]('Token string was literal null/undefined',40170,401));}else if(tokenRequestOrDetails[0]==='{'&&!(contentType&&contentType.indexOf('application/jwt')>-1)){callback(new errorinfo["a"/* default */]('Token was double-encoded; make sure you\'re not JSON-encoding an already encoded token request or details',40170,401));}else{callback(null,{token:tokenRequestOrDetails});}return;}if(typeof tokenRequestOrDetails!=='object'){var msg='Expected token request callback to call back with a token string or token request/details object, but got a '+typeof tokenRequestOrDetails;logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth.requestToken()',msg);callback(new errorinfo["a"/* default */](msg,40170,401));return;}var objectSize=JSON.stringify(tokenRequestOrDetails).length;if(objectSize>MAX_TOKEN_LENGTH&&!authOptions.suppressMaxLengthCheck){callback(new errorinfo["a"/* default */]('Token request/details object exceeded max permitted stringified size (was '+objectSize+' bytes)',40170,401));return;}if('issued'in tokenRequestOrDetails){/* a tokenDetails object */callback(null,tokenRequestOrDetails);return;}if(!('keyName'in tokenRequestOrDetails)){var msg='Expected token request callback to call back with a token string, token request object, or token details object';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth.requestToken()',msg);callback(new errorinfo["a"/* default */](msg,40170,401));return;}/* it's a token request, so make the request */tokenRequest(tokenRequestOrDetails,function(err,tokenResponse,headers,unpacked){if(err){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth.requestToken()','token request API call returned error; err = '+utils["a"/* default */].inspectError(err));callback(normaliseAuthcallbackError(err));return;}if(!unpacked)tokenResponse=JSON.parse(tokenResponse);logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth.getToken()','token received');callback(null,tokenResponse);});});};/**
	 * Create and sign a token request based on the given options.
	 * NOTE this can only be used when the key value is available locally.
	 * Otherwise, signed token requests must be obtained from the key
	 * owner (either using the token request callback or url).
	 *
	 * @param authOptions
	 * an object containing the request options:
	 * - key:           the key to use. If not specified, a key passed in constructing
	 *                  the Rest interface will be used
	 *
	 * - queryTime      (optional) boolean indicating that the ably system should be
	 *                  queried for the current time when none is specified explicitly
	 *
	 * - requestHeaders (optional, unsupported, for testing only) extra headers to add to the
	 *                  requestToken request
	 *
	 * @param tokenParams
	 * an object containing the parameters for the requested token:
	 * - ttl:       (optional) the requested life of the token in ms. If none is specified
	 *                  a default of 1 hour is provided. The maximum lifetime is 24hours; any request
	 *                  exceeeding that lifetime will be rejected with an error.
	 *
	 * - capability:    (optional) the capability to associate with the access token.
	 *                  If none is specified, a token will be requested with all of the
	 *                  capabilities of the specified key.
	 *
	 * - clientId:      (optional) a client Id to associate with the token; if not
	 *                  specified, a clientId passed in constructing the Rest interface will be used
	 *
	 * - timestamp:     (optional) the time in ms since the epoch. If none is specified,
	 *                  the system will be queried for a time value to use.
	 *
	 */Auth.prototype.createTokenRequest=function(tokenParams,authOptions,callback){/* shuffle and normalise arguments as necessary */if(typeof tokenParams=='function'&&!callback){callback=tokenParams;authOptions=tokenParams=null;}else if(typeof authOptions=='function'&&!callback){callback=authOptions;authOptions=null;}if(!callback&&this.client.options.promises){return utils["a"/* default */].promisify(this,'createTokenRequest',arguments);}/* RSA9h: if authOptions passed in, they're used instead of stored, don't merge them */authOptions=authOptions||this.authOptions;tokenParams=tokenParams||utils["a"/* default */].copy(this.tokenParams);var key=authOptions.key;if(!key){callback(new errorinfo["a"/* default */]('No key specified',40101,403));return;}var keyParts=key.split(':'),keyName=keyParts[0],keySecret=keyParts[1];if(!keySecret){callback(new errorinfo["a"/* default */]('Invalid key specified',40101,403));return;}if(tokenParams.clientId===''){callback(new errorinfo["a"/* default */]('clientId can’t be an empty string',40012,400));return;}if('capability'in tokenParams){tokenParams.capability=c14n(tokenParams.capability);}var request=utils["a"/* default */].mixin({keyName:keyName},tokenParams),clientId=tokenParams.clientId||'',ttl=tokenParams.ttl||'',capability=tokenParams.capability||'',self=this;(function(authoriseCb){if(request.timestamp){authoriseCb();return;};self.getTimestamp(authOptions&&authOptions.queryTime,function(err,time){if(err){callback(err);return;}request.timestamp=time;authoriseCb();});})(function(){/* nonce */ /* NOTE: there is no expectation that the client
			 * specifies the nonce; this is done by the library
			 * However, this can be overridden by the client
			 * simply for testing purposes. */var nonce=request.nonce||(request.nonce=random()),timestamp=request.timestamp;var signText=request.keyName+'\n'+ttl+'\n'+capability+'\n'+clientId+'\n'+timestamp+'\n'+nonce+'\n';/* mac */ /* NOTE: there is no expectation that the client
			 * specifies the mac; this is done by the library
			 * However, this can be overridden by the client
			 * simply for testing purposes. */request.mac=request.mac||hmac(signText,keySecret);logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth.getTokenRequest()','generated signed request');callback(null,request);});};/**
	 * Get the auth query params to use for a websocket connection,
	 * based on the current auth parameters
	 */Auth.prototype.getAuthParams=function(callback){if(this.method=='basic')callback(null,{key:this.key});else this._ensureValidAuthCredentials(false,function(err,tokenDetails){if(err){callback(err);return;}callback(null,{access_token:tokenDetails.token});});};/**
	 * Get the authorization header to use for a REST or comet request,
	 * based on the current auth parameters
	 */Auth.prototype.getAuthHeaders=function(callback){if(this.method=='basic'){callback(null,{authorization:'Basic '+this.basicKey});}else{this._ensureValidAuthCredentials(false,function(err,tokenDetails){if(err){callback(err);return;}callback(null,{authorization:'Bearer '+toBase64(tokenDetails.token)});});}};/**
	 * Get the current time based on the local clock,
	 * or if the option queryTime is true, return the server time.
	 * The server time offset from the local time is stored so that
	 * only one request to the server to get the time is ever needed
	 */Auth.prototype.getTimestamp=function(queryTime,callback){if(!this.isTimeOffsetSet()&&(queryTime||this.authOptions.queryTime)){this.client.time(callback);}else{callback(null,this.getTimestampUsingOffset());}};Auth.prototype.getTimestampUsingOffset=function(){return utils["a"/* default */].now()+(this.client.serverTimeOffset||0);};Auth.prototype.isTimeOffsetSet=function(){return this.client.serverTimeOffset!==null;};Auth.prototype._saveBasicOptions=function(authOptions){this.method='basic';this.key=authOptions.key;this.basicKey=toBase64(authOptions.key);this.authOptions=authOptions||{};if('clientId'in authOptions){this._userSetClientId(authOptions.clientId);}};Auth.prototype._saveTokenOptions=function(tokenParams,authOptions){this.method='token';if(tokenParams){/* We temporarily persist tokenParams.timestamp in case a new token needs
			 * to be requested, then null it out in the callback of
			 * _ensureValidAuthCredentials for RSA10g compliance */this.tokenParams=tokenParams;}if(authOptions){/* normalise */if(authOptions.token){/* options.token may contain a token string or, for convenience, a TokenDetails */authOptions.tokenDetails=typeof authOptions.token==='string'?{token:authOptions.token}:authOptions.token;}if(authOptions.tokenDetails){this.tokenDetails=authOptions.tokenDetails;}if('clientId'in authOptions){this._userSetClientId(authOptions.clientId);}this.authOptions=authOptions;}};/* @param forceSupersede: force a new token request even if there's one in
	 * progress, making all pending callbacks wait for the new one */Auth.prototype._ensureValidAuthCredentials=function(forceSupersede,callback){var self=this,token=this.tokenDetails;if(token){if(this._tokenClientIdMismatch(token.clientId)){/* 403 to trigger a permanently failed client - RSA15c */callback(new errorinfo["a"/* default */]('Mismatch between clientId in token ('+token.clientId+') and current clientId ('+this.clientId+')',40102,403));return;}/* RSA4b1 -- if we have a server time offset set already, we can
			 * autoremove expired tokens. Else just use the cached token. If it is
			 * expired Ably will tell us and we'll discard it then. */if(!this.isTimeOffsetSet()||!token.expires||token.expires>=this.getTimestampUsingOffset()){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth.getToken()','using cached token; expires = '+token.expires);callback(null,token);return;}/* expired, so remove and fallthrough to getting a new one */logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth.getToken()','deleting expired token');this.tokenDetails=null;}(this.waitingForTokenRequest||(this.waitingForTokenRequest=Object(multicaster["a"/* default */])())).push(callback);if(this.currentTokenRequestId!==null&&!forceSupersede){return;}/* Request a new token */var tokenRequestId=this.currentTokenRequestId=getTokenRequestId();this.requestToken(this.tokenParams,this.authOptions,function(err,tokenResponse){if(self.currentTokenRequestId>tokenRequestId){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Auth._ensureValidAuthCredentials()','Discarding token request response; overtaken by newer one');return;}self.currentTokenRequestId=null;var callbacks=self.waitingForTokenRequest||noop;self.waitingForTokenRequest=null;if(err){callbacks(err);return;}callbacks(null,self.tokenDetails=tokenResponse);});};/* User-set: check types, '*' is disallowed, throw any errors */Auth.prototype._userSetClientId=function(clientId){if(!(typeof clientId==='string'||clientId===null)){throw new errorinfo["a"/* default */]('clientId must be either a string or null',40012,400);}else if(clientId==='*'){throw new errorinfo["a"/* default */]('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)',40012,400);}else{var err=this._uncheckedSetClientId(clientId);if(err)throw err;}};/* Ably-set: no typechecking, '*' is allowed but not set on this.clientId), return errors to the caller */Auth.prototype._uncheckedSetClientId=function(clientId){if(this._tokenClientIdMismatch(clientId)){/* Should never happen in normal circumstances as realtime should
			 * recognise mismatch and return an error */var msg='Unexpected clientId mismatch: client has '+this.clientId+', requested '+clientId;var err=new errorinfo["a"/* default */](msg,40102,401);logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Auth._uncheckedSetClientId()',msg);return err;}else{/* RSA7a4: if options.clientId is provided and is not
			 * null, it overrides defaultTokenParams.clientId */this.clientId=this.tokenParams.clientId=clientId;return null;}};Auth.prototype._tokenClientIdMismatch=function(tokenClientId){return this.clientId&&this.clientId!=='*'&&tokenClientId&&tokenClientId!=='*'&&this.clientId!==tokenClientId;};Auth.isTokenErr=function(error){return error.code&&error.code>=40140&&error.code<40150;};return Auth;}();/* harmony default export */var auth=__webpack_exports__["a"]=auth_Auth;/***/},/* 15 */ /***/function(module,__webpack_exports__,__nested_webpack_require_132835__){"use strict";/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_132835__(1);/* harmony import */var _types_protocolmessage__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_132835__(8);/* harmony import */var _transport_transport__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_132835__(20);/* harmony import */var _util_logger__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_132835__(0);/* harmony import */var _util_defaults__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_132835__(5);/* harmony import */var _connectionerror__WEBPACK_IMPORTED_MODULE_5__=__nested_webpack_require_132835__(13);/* harmony import */var _client_auth__WEBPACK_IMPORTED_MODULE_6__=__nested_webpack_require_132835__(14);/* harmony import */var _types_errorinfo__WEBPACK_IMPORTED_MODULE_7__=__nested_webpack_require_132835__(2);var CometTransport=function(){var REQ_SEND=0,REQ_RECV=1,REQ_RECV_POLL=2,REQ_RECV_STREAM=3;/* TODO: can remove once realtime sends protocol message responses for comet errors */function shouldBeErrorAction(err){var UNRESOLVABLE_ERROR_CODES=[80015,80017,80030];if(err.code){if(_client_auth__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"].isTokenErr(err))return false;if(_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrIn(UNRESOLVABLE_ERROR_CODES,err.code))return true;return err.code>=40000&&err.code<50000;}else{/* Likely a network or transport error of some kind. Certainly not fatal to the connection */return false;}}function protocolMessageFromRawError(err){/* err will be either a legacy (non-protocolmessage) comet error response
		 * (which will have an err.code), or a xhr/network error (which won't). */if(shouldBeErrorAction(err)){return[_types_protocolmessage__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].fromValues({action:_types_protocolmessage__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].Action.ERROR,error:err})];}else{return[_types_protocolmessage__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].fromValues({action:_types_protocolmessage__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].Action.DISCONNECTED,error:err})];}}/*
	 * A base comet transport class
	 */function CometTransport(connectionManager,auth,params){/* binary not supported for comet, so just fall back to default */params.format=undefined;params.heartbeats=true;_transport_transport__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].call(this,connectionManager,auth,params);/* streaming defaults to true */this.stream='stream'in params?params.stream:true;this.sendRequest=null;this.recvRequest=null;this.pendingCallback=null;this.pendingItems=null;}_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inherits(CometTransport,_transport_transport__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"]);CometTransport.REQ_SEND=REQ_SEND;CometTransport.REQ_RECV=REQ_RECV;CometTransport.REQ_RECV_POLL=REQ_RECV_POLL;CometTransport.REQ_RECV_STREAM=REQ_RECV_STREAM;/* public instance methods */CometTransport.prototype.connect=function(){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'CometTransport.connect()','starting');_transport_transport__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].prototype.connect.call(this);var self=this,params=this.params,options=params.options;var host=_util_defaults__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].getHost(options,params.host);var port=_util_defaults__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].getPort(options);var cometScheme=options.tls?'https://':'http://';this.baseUri=cometScheme+host+':'+port+'/comet/';var connectUri=this.baseUri+'connect';_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'CometTransport.connect()','uri: '+connectUri);this.auth.getAuthParams(function(err,authParams){if(err){self.disconnect(err);return;}if(self.isDisposed){return;}self.authParams=authParams;var connectParams=self.params.getConnectParams(authParams);if('stream'in connectParams)self.stream=connectParams.stream;_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'CometTransport.connect()','connectParams:'+_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].toQueryString(connectParams));/* this will be the 'recvRequest' so this connection can stream messages */var preconnected=false,connectRequest=self.recvRequest=self.createRequest(connectUri,null,connectParams,null,self.stream?REQ_RECV_STREAM:REQ_RECV);connectRequest.on('data',function(data){if(!self.recvRequest){/* the transport was disposed before we connected */return;}if(!preconnected){preconnected=true;self.emit('preconnect');}self.onData(data);});connectRequest.on('complete',function(err,_body,headers){if(!self.recvRequest){/* the transport was disposed before we connected */err=err||new _types_errorinfo__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"]('Request cancelled',80003,400);}self.recvRequest=null;/* Connect request may complete without a emitting 'data' event since that is not
				 * emitted for e.g. a non-streamed error response. Still implies preconnect. */if(!preconnected&&!err){preconnected=true;self.emit('preconnect');}self.onActivity();if(err){if(err.code){/* A protocol error received from realtime. TODO: once realtime
						 * consistendly sends errors wrapped in protocol messages, should be
						 * able to remove this */self.onData(protocolMessageFromRawError(err));}else{/* A network/xhr error. Don't bother wrapping in a protocol message,
						 * just disconnect the transport */self.disconnect(err);}return;}_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].nextTick(function(){self.recv();});});connectRequest.exec();});};CometTransport.prototype.requestClose=function(){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'CometTransport.requestClose()');this._requestCloseOrDisconnect(true);};CometTransport.prototype.requestDisconnect=function(){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'CometTransport.requestDisconnect()');this._requestCloseOrDisconnect(false);};CometTransport.prototype._requestCloseOrDisconnect=function(closing){var closeOrDisconnectUri=closing?this.closeUri:this.disconnectUri;if(closeOrDisconnectUri){var self=this,request=this.createRequest(closeOrDisconnectUri,null,this.authParams,null,REQ_SEND);request.on('complete',function(err){if(err){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_ERROR,'CometTransport.request'+(closing?'Close()':'Disconnect()'),'request returned err = '+_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inspectError(err));self.finish('disconnected',err);}});request.exec();}};CometTransport.prototype.dispose=function(){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'CometTransport.dispose()','');if(!this.isDisposed){this.isDisposed=true;if(this.recvRequest){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'CometTransport.dispose()','aborting recv request');this.recvRequest.abort();this.recvRequest=null;}/* In almost all cases the transport will be finished before it's
			 * disposed. Finish here just to make sure. */this.finish('disconnected',_connectionerror__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].disconnected);var self=this;_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].nextTick(function(){self.emit('disposed');});}};CometTransport.prototype.onConnect=function(message){/* if this transport has been disposed whilst awaiting connection, do nothing */if(this.isDisposed){return;}/* the connectionKey in a comet connected response is really
		 * <instId>-<connectionKey> */var connectionStr=message.connectionKey;_transport_transport__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].prototype.onConnect.call(this,message);var baseConnectionUri=this.baseUri+connectionStr;_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MICRO,'CometTransport.onConnect()','baseUri = '+baseConnectionUri+'; connectionKey = '+message.connectionKey);this.sendUri=baseConnectionUri+'/send';this.recvUri=baseConnectionUri+'/recv';this.closeUri=baseConnectionUri+'/close';this.disconnectUri=baseConnectionUri+'/disconnect';};CometTransport.prototype.send=function(message){if(this.sendRequest){/* there is a pending send, so queue this message */this.pendingItems=this.pendingItems||[];this.pendingItems.push(message);return;}/* send this, plus any pending, now */var pendingItems=this.pendingItems||[];pendingItems.push(message);this.pendingItems=null;this.sendItems(pendingItems);};CometTransport.prototype.sendAnyPending=function(){var pendingItems=this.pendingItems;if(!pendingItems){return;}this.pendingItems=null;this.sendItems(pendingItems);};CometTransport.prototype.sendItems=function(items){var self=this,sendRequest=this.sendRequest=self.createRequest(self.sendUri,null,self.authParams,this.encodeRequest(items),REQ_SEND);sendRequest.on('complete',function(err,data){if(err)_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_ERROR,'CometTransport.sendItems()','on complete: err = '+_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inspectError(err));self.sendRequest=null;/* the result of the request, even if a nack, is usually a protocol response
			 * contained in the data. An err is anomolous, and indicates some issue with the
			 * network,transport, or connection */if(err){if(err.code){/* A protocol error received from realtime. TODO: once realtime
					 * consistendly sends errors wrapped in protocol messages, should be
					 * able to remove this */self.onData(protocolMessageFromRawError(err));}else{/* A network/xhr error. Don't bother wrapping in a protocol message,
					 * just disconnect the transport */self.disconnect(err);}return;}if(data){self.onData(data);}if(self.pendingItems){_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].nextTick(function(){/* If there's a new send request by now, any pending items will have
					 * been picked up by that; any new ones added since then will be
					 * picked up after that one completes */if(!self.sendRequest){self.sendAnyPending();}});}});sendRequest.exec();};CometTransport.prototype.recv=function(){/* do nothing if there is an active request, which might be streaming */if(this.recvRequest)return;/* If we're no longer connected, do nothing */if(!this.isConnected)return;var self=this,recvRequest=this.recvRequest=this.createRequest(this.recvUri,null,this.authParams,null,self.stream?REQ_RECV_STREAM:REQ_RECV_POLL);recvRequest.on('data',function(data){self.onData(data);});recvRequest.on('complete',function(err){self.recvRequest=null;/* A request completing must be considered activity, as realtime sends
			 * heartbeats every 15s since a request began, not every 15s absolutely */self.onActivity();if(err){if(err.code){/* A protocol error received from realtime. TODO: once realtime
					 * consistendly sends errors wrapped in protocol messages, should be
					 * able to remove this */self.onData(protocolMessageFromRawError(err));}else{/* A network/xhr error. Don't bother wrapping in a protocol message,
					 * just disconnect the transport */self.disconnect(err);}return;}_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].nextTick(function(){self.recv();});});recvRequest.exec();};CometTransport.prototype.onData=function(responseData){try{var items=this.decodeResponse(responseData);if(items&&items.length)for(var i=0;i<items.length;i++)this.onProtocolMessage(_types_protocolmessage__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].fromDeserialized(items[i]));}catch(e){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_ERROR,'CometTransport.onData()','Unexpected exception handing channel event: '+e.stack);}};CometTransport.prototype.encodeRequest=function(requestItems){return JSON.stringify(requestItems);};CometTransport.prototype.decodeResponse=function(responseData){if(typeof responseData=='string')responseData=JSON.parse(responseData);return responseData;};/* For comet, we could do the auth update by aborting the current recv and
	 * starting a new one with the new token, that'd be sufficient for realtime.
	 * Problem is JSONP - you can't cancel truly abort a recv once started. So
	 * we need to send an AUTH for jsonp. In which case it's simpler to keep all
	 * comet transports the same and do it for all of them. So we send the AUTH
	 * instead, and don't need to abort the recv */CometTransport.prototype.onAuthUpdated=function(tokenDetails){this.authParams={access_token:tokenDetails.token};};return CometTransport;}();/* harmony default export */__webpack_exports__["a"]=CometTransport;/***/},/* 16 */ /***/function(module,__webpack_exports__,__nested_webpack_require_146103__){"use strict";/* WEBPACK VAR INJECTION */(function(global){/* harmony import */var _common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_146103__(1);var WebStorage=function(){var sessionSupported,localSupported,test='ablyjs-storage-test';/* Even just accessing the session/localStorage object can throw a
	 * security exception in some circumstances with some browsers. In
	 * others, calling setItem will throw. So have to check in this
	 * somewhat roundabout way. (If unsupported or no global object,
	 * will throw on accessing a property of undefined) */try{global.sessionStorage.setItem(test,test);global.sessionStorage.removeItem(test);sessionSupported=true;}catch(e){sessionSupported=false;}try{global.localStorage.setItem(test,test);global.localStorage.removeItem(test);localSupported=true;}catch(e){localSupported=false;}function WebStorage(){}function storageInterface(session){return session?global.sessionStorage:global.localStorage;}function set(name,value,ttl,session){var wrappedValue={value:value};if(ttl){wrappedValue.expires=_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].now()+ttl;}return storageInterface(session).setItem(name,JSON.stringify(wrappedValue));}function get(name,session){var rawItem=storageInterface(session).getItem(name);if(!rawItem)return null;var wrappedValue=JSON.parse(rawItem);if(wrappedValue.expires&&wrappedValue.expires<_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].now()){storageInterface(session).removeItem(name);return null;}return wrappedValue.value;}function remove(name,session){return storageInterface(session).removeItem(name);}if(localSupported){WebStorage.set=function(name,value,ttl){return set(name,value,ttl,false);};WebStorage.get=function(name){return get(name,false);};WebStorage.remove=function(name){return remove(name,false);};}if(sessionSupported){WebStorage.setSession=function(name,value,ttl){return set(name,value,ttl,true);};WebStorage.getSession=function(name){return get(name,true);};WebStorage.removeSession=function(name){return remove(name,true);};}return WebStorage;}();/* harmony default export */__webpack_exports__["a"]=WebStorage;/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_146103__(17));/***/},/* 17 */ /***/function(module,exports){var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||new Function("return this")();}catch(e){// This works if the window reference is available
if(typeof window==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/* 18 */ /***/function(module,exports,__nested_webpack_require_148877__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_148877__(12));}else{}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_enc=C.enc;/**
	     * Base64 encoding strategy.
	     */var Base64=C_enc.Base64={/**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;var map='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';// Clamp excess bits
wordArray.clamp();// Convert
var base64Chars=[];for(var i=0;i<sigBytes;i+=3){var byte1=words[i>>>2]>>>24-i%4*8&0xff;var byte2=words[i+1>>>2]>>>24-(i+1)%4*8&0xff;var byte3=words[i+2>>>2]>>>24-(i+2)%4*8&0xff;var triplet=byte1<<16|byte2<<8|byte3;for(var j=0;j<4&&i+j*0.75<sigBytes;j++){base64Chars.push(map.charAt(triplet>>>6*(3-j)&0x3f));}}// Add padding
var paddingChar=map.charAt(64);if(paddingChar){while(base64Chars.length%4){base64Chars.push(paddingChar);}}return base64Chars.join('');},/**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */parse:function(base64Str){// Shortcuts
var base64StrLength=base64Str.length;var map='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var reverseMap=this._reverseMap;if(!reverseMap){reverseMap=this._reverseMap=[];for(var j=0;j<map.length;j++){reverseMap[map.charCodeAt(j)]=j;}}// Ignore padding
var paddingChar=map.charAt(64);if(paddingChar){var paddingIndex=base64Str.indexOf(paddingChar);if(paddingIndex!==-1){base64StrLength=paddingIndex;}}// Convert
return parseLoop(base64Str,base64StrLength,reverseMap);}};function parseLoop(base64Str,base64StrLength,reverseMap){var words=[];var nBytes=0;for(var i=0;i<base64StrLength;i++){if(i%4){var bits1=reverseMap[base64Str.charCodeAt(i-1)]<<i%4*2;var bits2=reverseMap[base64Str.charCodeAt(i)]>>>6-i%4*2;var bitsCombined=bits1|bits2;words[nBytes>>>2]|=bitsCombined<<24-nBytes%4*8;nBytes++;}}return WordArray.create(words,nBytes);}})();return CryptoJS.enc.Base64;});/***/},/* 19 */ /***/function(module,__webpack_exports__,__nested_webpack_require_151582__){"use strict";/* harmony import */var crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_151582__(10);/* harmony import */var crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__nested_webpack_require_151582__.n(crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_151582__(18);/* harmony import */var crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__nested_webpack_require_151582__.n(crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var crypto_js_build__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_151582__(28);/* harmony import */var crypto_js_build__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__nested_webpack_require_151582__.n(crypto_js_build__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_151582__(3);/* harmony import */var _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_151582__(0);/* harmony import */var platform_bufferutils__WEBPACK_IMPORTED_MODULE_5__=__nested_webpack_require_151582__(4);var Crypto=function(){var DEFAULT_ALGORITHM='aes';var DEFAULT_KEYLENGTH=256;// bits
var DEFAULT_MODE='cbc';var DEFAULT_BLOCKLENGTH=16;// bytes
var DEFAULT_BLOCKLENGTH_WORDS=4;// 32-bit words
var UINT32_SUP=0x100000000;var INT32_SUP=0x80000000;/**
	 * Internal: generate an array of secure random words corresponding to the given length of bytes
	 * @param bytes
	 * @param callback
	 */var generateRandom;if(platform__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].getRandomWordArray){generateRandom=platform__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].getRandomWordArray;}else if(typeof Uint32Array!=='undefined'&&platform__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].getRandomValues){var blockRandomArray=new Uint32Array(DEFAULT_BLOCKLENGTH_WORDS);generateRandom=function(bytes,callback){var words=bytes/4,nativeArray=words==DEFAULT_BLOCKLENGTH_WORDS?blockRandomArray:new Uint32Array(words);platform__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].getRandomValues(nativeArray,function(err){callback(err,platform_bufferutils__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].toWordArray(nativeArray));});};}else{generateRandom=function(bytes,callback){_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MAJOR,'Ably.Crypto.generateRandom()','Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()');var words=bytes/4,array=new Array(words);for(var i=0;i<words;i++){/* cryptojs wordarrays use signed ints. When WordArray.create is fed a
				* Uint32Array unsigned are converted to signed automatically, but when
				* fed a normal array they aren't, so need to do so ourselves by
				* subtracting INT32_SUP */array[i]=Math.floor(Math.random()*UINT32_SUP)-INT32_SUP;}callback(null,crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create(array));};}/**
	 * Internal: calculate the padded length of a given plaintext
	 * using PKCS5.
	 * @param plaintextLength
	 * @return
	 */function getPaddedLength(plaintextLength){return plaintextLength+DEFAULT_BLOCKLENGTH&-DEFAULT_BLOCKLENGTH;}/**
	 * Internal: checks that the cipherParams are a valid combination. Currently
	 * just checks that the calculated keyLength is a valid one for aes-cbc
	 */function validateCipherParams(params){if(params.algorithm==='aes'&&params.mode==='cbc'){if(params.keyLength===128||params.keyLength===256){return;}throw new Error('Unsupported key length '+params.keyLength+' for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)');}}function normaliseBase64(string){/* url-safe base64 strings use _ and - instread of / and + */return string.replace('_','/').replace('-','+');}/**
	 * Internal: a block containing zeros
	 */var emptyBlock=crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0,0,0,0]);/**
	 * Internal: obtain the pkcs5 padding string for a given padded length;
	 */var pkcs5Padding=[crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x10101010,0x10101010,0x10101010,0x10101010],16),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x01000000],1),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x02020000],2),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x03030300],3),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x04040404],4),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x05050505,0x05000000],5),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x06060606,0x06060000],6),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x07070707,0x07070700],7),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x08080808,0x08080808],8),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x09090909,0x09090909,0x09000000],9),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0a0a0a0a,0x0a0a0a0a,0x0a0a0000],10),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0b0b0b0b,0x0b0b0b0b,0x0b0b0b00],11),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0c0c0c0c,0x0c0c0c0c,0x0c0c0c0c],12),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0d0d0d0d,0x0d0d0d0d,0x0d0d0d0d,0x0d000000],13),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0e0e0e0e,0x0e0e0e0e,0x0e0e0e0e,0x0e0e0000],14),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0f0f0f0f,0x0f0f0f0f,0x0f0f0f0f,0x0f0f0f0f],15),crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x10101010,0x10101010,0x10101010,0x10101010],16)];/**
	 * Utility classes and interfaces for message payload encryption.
	 *
	 * This class supports AES/CBC/PKCS5 with a default keylength of 128 bits
	 * but supporting other keylengths. Other algorithms and chaining modes are
	 * not supported directly, but supportable by extending/implementing the base
	 * classes and interfaces here.
	 *
	 * Secure random data for creation of Initialization Vectors (IVs) and keys
	 * is obtained from window.crypto.getRandomValues if available, or from
	 * Math.random() if not. Clients who do not want to depend on Math.random()
	 * should polyfill window.crypto.getRandomValues with a library that seeds
	 * a PRNG with real entropy.
	 *
	 * Each message payload is encrypted with an IV in CBC mode, and the IV is
	 * concatenated with the resulting raw ciphertext to construct the "ciphertext"
	 * data passed to the recipient.
	 */function Crypto(){}/**
	 * A class encapsulating the client-specifiable parameters for
	 * the cipher.
	 *
	 * algorithm is the name of the algorithm in the default system provider,
	 * or the lower-cased version of it; eg "aes" or "AES".
	 *
	 * Clients are recommended to not call this directly, but instead to use the
	 * Crypto.getDefaultParams helper, which will fill in any fields not supplied
	 * with default values and validation the result.
	 */function CipherParams(){this.algorithm=null;this.keyLength=null;this.mode=null;this.key=null;}Crypto.CipherParams=CipherParams;/**
	 * Obtain a complete CipherParams instance from the provided params, filling
	 * in any not provided with default values, calculating a keyLength from
	 * the supplied key, and validating the result.
	 * @param params an object containing at a minimum a `key` key with value the
	 * key, as either a binary (ArrayBuffer, Array, WordArray) or a
	 * base64-encoded string. May optionally also contain: algorithm (defaults to
	 * AES), mode (defaults to 'cbc')
	 */Crypto.getDefaultParams=function(params){var key;/* Backward compatibility */if(typeof params==='function'||typeof params==='string'){_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].deprecated('Crypto.getDefaultParams(key, callback)','Crypto.getDefaultParams({key: key})');if(typeof params==='function'){Crypto.generateRandomKey(function(key){params(null,Crypto.getDefaultParams({key:key}));});}else if(typeof arguments[1]==='function'){arguments[1](null,Crypto.getDefaultParams({key:params}));}else{throw new Error('Invalid arguments for Crypto.getDefaultParams');}return;}if(!params.key){throw new Error('Crypto.getDefaultParams: a key is required');}if(typeof params.key==='string'){key=Object(crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_1__["parse"])(normaliseBase64(params.key));}else{key=platform_bufferutils__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].toWordArray(params.key);// Expect key to be an Array, ArrayBuffer, or WordArray at this point
}var cipherParams=new CipherParams();cipherParams.key=key;cipherParams.algorithm=params.algorithm||DEFAULT_ALGORITHM;cipherParams.keyLength=key.words.length*(4*8);cipherParams.mode=params.mode||DEFAULT_MODE;if(params.keyLength&&params.keyLength!==cipherParams.keyLength){throw new Error('Crypto.getDefaultParams: a keyLength of '+params.keyLength+' was specified, but the key actually has length '+cipherParams.keyLength);}validateCipherParams(cipherParams);return cipherParams;};/**
	 * Generate a random encryption key from the supplied keylength (or the
	 * default keyLength if none supplied) as a CryptoJS WordArray
	 * @param keyLength (optional) the required keyLength in bits
	 * @param callback (err, key)
	 */Crypto.generateRandomKey=function(keyLength,callback){if(arguments.length==1&&typeof keyLength=='function'){callback=keyLength;keyLength=undefined;}generateRandom((keyLength||DEFAULT_KEYLENGTH)/8,callback);};/**
	 * Internal; get a ChannelCipher instance based on the given cipherParams
	 * @param params either a CipherParams instance or some subset of its
	 * fields that includes a key
	 */Crypto.getCipher=function(params){var cipherParams=params instanceof CipherParams?params:Crypto.getDefaultParams(params);return{cipherParams:cipherParams,cipher:new CBCCipher(cipherParams,DEFAULT_BLOCKLENGTH_WORDS,params.iv)};};function CBCCipher(params,blockLengthWords,iv){this.algorithm=params.algorithm+'-'+String(params.keyLength)+'-'+params.mode;this.cjsAlgorithm=params.algorithm.toUpperCase().replace(/-\d+$/,'');this.key=platform_bufferutils__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].toWordArray(params.key);if(iv){this.iv=platform_bufferutils__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].toWordArray(iv).clone();}this.blockLengthWords=blockLengthWords;}CBCCipher.prototype.encrypt=function(plaintext,callback){_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MICRO,'CBCCipher.encrypt()','');plaintext=platform_bufferutils__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].toWordArray(plaintext);var plaintextLength=plaintext.sigBytes,paddedLength=getPaddedLength(plaintextLength),self=this;var then=function(){self.getIv(function(err,iv){if(err){callback(err);return;}var cipherOut=self.encryptCipher.process(plaintext.concat(pkcs5Padding[paddedLength-plaintextLength]));var ciphertext=iv.concat(cipherOut);callback(null,ciphertext);});};if(!this.encryptCipher){if(this.iv){this.encryptCipher=crypto_js_build__WEBPACK_IMPORTED_MODULE_2___default.a.algo[this.cjsAlgorithm].createEncryptor(this.key,{iv:this.iv});then();}else{generateRandom(DEFAULT_BLOCKLENGTH,function(err,iv){if(err){callback(err);return;}self.encryptCipher=crypto_js_build__WEBPACK_IMPORTED_MODULE_2___default.a.algo[self.cjsAlgorithm].createEncryptor(self.key,{iv:iv});self.iv=iv;then();});}}else{then();}};CBCCipher.prototype.decrypt=function(ciphertext){_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MICRO,'CBCCipher.decrypt()','');ciphertext=platform_bufferutils__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].toWordArray(ciphertext);var blockLengthWords=this.blockLengthWords,ciphertextWords=ciphertext.words,iv=crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create(ciphertextWords.slice(0,blockLengthWords)),ciphertextBody=crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create(ciphertextWords.slice(blockLengthWords));var decryptCipher=crypto_js_build__WEBPACK_IMPORTED_MODULE_2___default.a.algo[this.cjsAlgorithm].createDecryptor(this.key,{iv:iv});var plaintext=decryptCipher.process(ciphertextBody);var epilogue=decryptCipher.finalize();decryptCipher.reset();if(epilogue&&epilogue.sigBytes)plaintext.concat(epilogue);return plaintext;};CBCCipher.prototype.getIv=function(callback){if(this.iv){var iv=this.iv;this.iv=null;callback(null,iv);return;}/* Since the iv for a new block is the ciphertext of the last, this
		* sets a new iv (= aes(randomBlock XOR lastCipherText)) as well as
		* returning it */var self=this;generateRandom(DEFAULT_BLOCKLENGTH,function(err,randomBlock){if(err){callback(err);return;}callback(null,self.encryptCipher.process(randomBlock));});};return Crypto;}();/* harmony default export */__webpack_exports__["a"]=Crypto;/***/},/* 20 */ /***/function(module,__webpack_exports__,__nested_webpack_require_165071__){"use strict";/* harmony import */var _types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_165071__(8);/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_165071__(1);/* harmony import */var _util_eventemitter__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_165071__(7);/* harmony import */var _util_logger__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_165071__(0);/* harmony import */var _transport_connectionerror__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_165071__(13);/* harmony import */var _types_errorinfo__WEBPACK_IMPORTED_MODULE_5__=__nested_webpack_require_165071__(2);var Transport=function(){var actions=_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].Action;var closeMessage=_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({action:actions.CLOSE});var disconnectMessage=_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({action:actions.DISCONNECT});var noop=function(){};/*
	 * EventEmitter, generates the following events:
	 *
	 * event name       data
	 * closed           error
	 * failed           error
	 * disposed
	 * connected        null error, connectionSerial, connectionId, connectionDetails
	 * sync             connectionSerial, connectionId
	 * event            channel message object
	 */ /* public constructor */function Transport(connectionManager,auth,params){_util_eventemitter__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].call(this);this.connectionManager=connectionManager;connectionManager.registerProposedTransport(this);this.auth=auth;this.params=params;this.timeouts=params.options.timeouts;this.format=params.format;this.isConnected=false;this.isFinished=false;this.isDisposed=false;this.maxIdleInterval=null;this.idleTimer=null;this.lastActivity=null;}_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inherits(Transport,_util_eventemitter__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"]);Transport.prototype.connect=function(){};Transport.prototype.close=function(){if(this.isConnected){this.requestClose();}this.finish('closed',_transport_connectionerror__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].closed);};Transport.prototype.disconnect=function(err){/* Used for network/transport issues that need to result in the transport
		 * being disconnected, but should not affect the connection */if(this.isConnected){this.requestDisconnect();}this.finish('disconnected',err||_transport_connectionerror__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].disconnected);};Transport.prototype.fail=function(err){/* Used for client-side-detected fatal connection issues */if(this.isConnected){this.requestDisconnect();}this.finish('failed',err||_transport_connectionerror__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].failed);};Transport.prototype.finish=function(event,err){if(this.isFinished){return;}this.isFinished=true;this.isConnected=false;this.maxIdleInterval=null;clearTimeout(this.idleTimer);this.idleTimer=null;this.emit(event,err);this.dispose();};Transport.prototype.onProtocolMessage=function(message){if(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].shouldLog(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MICRO)){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MICRO,'Transport.onProtocolMessage()','received on '+this.shortName+': '+_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].stringify(message)+'; connectionId = '+this.connectionManager.connectionId);}this.onActivity();switch(message.action){case actions.HEARTBEAT:_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MICRO,'Transport.onProtocolMessage()',this.shortName+' heartbeat; connectionId = '+this.connectionManager.connectionId);this.emit('heartbeat',message.id);break;case actions.CONNECTED:this.onConnect(message);this.emit('connected',message.error,message.connectionId,message.connectionDetails,message);break;case actions.CLOSED:this.onClose(message);break;case actions.DISCONNECTED:this.onDisconnect(message);break;case actions.ACK:this.emit('ack',message.msgSerial,message.count);break;case actions.NACK:this.emit('nack',message.msgSerial,message.count,message.error);break;case actions.SYNC:if(message.connectionId!==undefined){/* a transport SYNC */this.emit('sync',message.connectionId,message);break;}/* otherwise it's a channel SYNC, so handle it in the channel */this.connectionManager.onChannelMessage(message,this);break;case actions.AUTH:this.auth.authorize(function(err){if(err){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_ERROR,'Transport.onProtocolMessage()','Ably requested re-authentication, but unable to obtain a new token: '+_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inspectError(err));}});break;case actions.ERROR:_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'Transport.onProtocolMessage()','received error action; connectionId = '+this.connectionManager.connectionId+'; err = '+_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inspect(message.error)+(message.channel?', channel: '+message.channel:''));if(message.channel===undefined){this.onFatalError(message);break;}/* otherwise it's a channel-specific error, so handle it in the channel */this.connectionManager.onChannelMessage(message,this);break;default:/* all other actions are channel-specific */this.connectionManager.onChannelMessage(message,this);}};Transport.prototype.onConnect=function(message){this.isConnected=true;var maxPromisedIdle=message.connectionDetails.maxIdleInterval;if(maxPromisedIdle){this.maxIdleInterval=maxPromisedIdle+this.timeouts.realtimeRequestTimeout;this.onActivity();}/* else Realtime declines to guarantee any maximum idle interval - CD2h */};Transport.prototype.onDisconnect=function(message){/* Used for when the server has disconnected the client (usually with a
		 * DISCONNECTED action) */var err=message&&message.error;_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'Transport.onDisconnect()','err = '+_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inspectError(err));this.finish('disconnected',err);};Transport.prototype.onFatalError=function(message){/* On receipt of a fatal connection error, we can assume that the server
		 * will close the connection and the transport, and do not need to request
		 * a disconnection - RTN15i */var err=message&&message.error;_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'Transport.onFatalError()','err = '+_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inspectError(err));this.finish('failed',err);};Transport.prototype.onClose=function(message){var err=message&&message.error;_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'Transport.onClose()','err = '+_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inspectError(err));this.finish('closed',err);};Transport.prototype.requestClose=function(){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'Transport.requestClose()','');this.send(closeMessage);};Transport.prototype.requestDisconnect=function(){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'Transport.requestDisconnect()','');this.send(disconnectMessage);};Transport.prototype.ping=function(id){var msg={action:_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].Action.HEARTBEAT};if(id)msg.id=id;this.send(_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues(msg));};Transport.prototype.dispose=function(){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MINOR,'Transport.dispose()','');this.isDisposed=true;this.off();};Transport.prototype.onActivity=function(){if(!this.maxIdleInterval){return;}this.lastActivity=this.connectionManager.lastActivity=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].now();this.setIdleTimer(this.maxIdleInterval+100);};Transport.prototype.setIdleTimer=function(timeout){var self=this;if(!this.idleTimer){this.idleTimer=setTimeout(function(){self.onIdleTimerExpire();},timeout);}};Transport.prototype.onIdleTimerExpire=function(){this.idleTimer=null;var sinceLast=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].now()-this.lastActivity,timeRemaining=this.maxIdleInterval-sinceLast;if(timeRemaining<=0){var msg='No activity seen from realtime in '+sinceLast+'ms; assuming connection has dropped';_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_ERROR,'Transport.onIdleTimerExpire()',msg);this.disconnect(new _types_errorinfo__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"](msg,80003,408));}else{this.setIdleTimer(timeRemaining+100);}};Transport.prototype.onAuthUpdated=function(){};return Transport;}();/* harmony default export */__webpack_exports__["a"]=Transport;/***/},/* 21 */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";var ConnectionStateChange=function(){/* public constructor */function ConnectionStateChange(previous,current,retryIn,reason){this.previous=previous;this.current=current;if(retryIn)this.retryIn=retryIn;if(reason)this.reason=reason;}return ConnectionStateChange;}();/* harmony default export */__webpack_exports__["a"]=ConnectionStateChange;/***/},/* 22 */ /***/function(module,__webpack_exports__,__nested_webpack_require_175128__){"use strict";/* harmony import */var _logger__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_175128__(0);var Multicaster=function(){function Multicaster(members){members=members||[];var handler=function(){for(var i=0;i<members.length;i++){var member=members[i];if(member){try{member.apply(null,arguments);}catch(e){_logger__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].logAction(_logger__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].LOG_ERROR,'Multicaster multiple callback handler','Unexpected exception: '+e+'; stack = '+e.stack);}}}};handler.push=function(){Array.prototype.push.apply(members,arguments);};return handler;}return Multicaster;}();/* harmony default export */__webpack_exports__["a"]=Multicaster;/***/},/* 23 */ /***/function(module,__webpack_exports__,__nested_webpack_require_175913__){"use strict";/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_175913__(1);/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_175913__(3);/* harmony import */var _util_defaults__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_175913__(5);/* harmony import */var _logger__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_175913__(0);/* harmony import */var platform_http__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_175913__(6);var ErrorReporter=function(){function ErrorReporter(){}var levels=ErrorReporter.levels=['fatal','error','warning','info','debug'];/* (level: typeof ErrorReporter.levels[number], message: string, fingerprint?: string, tags?: {[key: string]: string}): void */ErrorReporter.report=function(level,message,fingerprint,tags){var eventId=_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].randomHexString(16);var event={event_id:eventId,tags:_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].mixin({lib:platform__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].libver},tags),platform:'javascript',level:level,release:_util_defaults__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].version,fingerprint:fingerprint&&[fingerprint],message:message,request:{headers:{'User-Agent':platform__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].userAgent},url:platform__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].currentUrl}};_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MICRO,'ErrorReporter','POSTing to error reporter: '+message);platform_http__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].postUri(null,_util_defaults__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].errorReportingUrl,_util_defaults__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].errorReportingHeaders,JSON.stringify(event),{},function(err,res){_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MICRO,'ErrorReporter','POSTing to error reporter resulted in: '+(err?_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inspectError(err):_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inspectBody(res)));});};return ErrorReporter;}();/* harmony default export */__webpack_exports__["a"]=ErrorReporter;/***/},/* 24 */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";var msgpack=function(){"use strict";var exports={};exports.inspect=inspect;function inspect(buffer){if(buffer===undefined)return"undefined";var view;var type;if(buffer instanceof ArrayBuffer){type="ArrayBuffer";view=new DataView(buffer);}else if(buffer instanceof DataView){type="DataView";view=buffer;}if(!view)return JSON.stringify(buffer);var bytes=[];for(var i=0;i<buffer.byteLength;i++){if(i>20){bytes.push("...");break;}var byte_=view.getUint8(i).toString(16);if(byte_.length===1)byte_="0"+byte_;bytes.push(byte_);}return"<"+type+" "+bytes.join(" ")+">";}// Encode string as utf8 into dataview at offset
exports.utf8Write=utf8Write;function utf8Write(view,offset,string){var byteLength=view.byteLength;for(var i=0,l=string.length;i<l;i++){var codePoint=string.charCodeAt(i);// One byte of UTF-8
if(codePoint<0x80){view.setUint8(offset++,codePoint>>>0&0x7f|0x00);continue;}// Two bytes of UTF-8
if(codePoint<0x800){view.setUint8(offset++,codePoint>>>6&0x1f|0xc0);view.setUint8(offset++,codePoint>>>0&0x3f|0x80);continue;}// Three bytes of UTF-8.
if(codePoint<0x10000){view.setUint8(offset++,codePoint>>>12&0x0f|0xe0);view.setUint8(offset++,codePoint>>>6&0x3f|0x80);view.setUint8(offset++,codePoint>>>0&0x3f|0x80);continue;}// Four bytes of UTF-8
if(codePoint<0x110000){view.setUint8(offset++,codePoint>>>18&0x07|0xf0);view.setUint8(offset++,codePoint>>>12&0x3f|0x80);view.setUint8(offset++,codePoint>>>6&0x3f|0x80);view.setUint8(offset++,codePoint>>>0&0x3f|0x80);continue;}throw new Error("bad codepoint "+codePoint);}}exports.utf8Read=utf8Read;function utf8Read(view,offset,length){var string="";for(var i=offset,end=offset+length;i<end;i++){var byte_=view.getUint8(i);// One byte character
if((byte_&0x80)===0x00){string+=String.fromCharCode(byte_);continue;}// Two byte character
if((byte_&0xe0)===0xc0){string+=String.fromCharCode((byte_&0x0f)<<6|view.getUint8(++i)&0x3f);continue;}// Three byte character
if((byte_&0xf0)===0xe0){string+=String.fromCharCode((byte_&0x0f)<<12|(view.getUint8(++i)&0x3f)<<6|(view.getUint8(++i)&0x3f)<<0);continue;}// Four byte character
if((byte_&0xf8)===0xf0){string+=String.fromCharCode((byte_&0x07)<<18|(view.getUint8(++i)&0x3f)<<12|(view.getUint8(++i)&0x3f)<<6|(view.getUint8(++i)&0x3f)<<0);continue;}throw new Error("Invalid byte "+byte_.toString(16));}return string;}exports.utf8ByteCount=utf8ByteCount;function utf8ByteCount(string){var count=0;for(var i=0,l=string.length;i<l;i++){var codePoint=string.charCodeAt(i);if(codePoint<0x80){count+=1;continue;}if(codePoint<0x800){count+=2;continue;}if(codePoint<0x10000){count+=3;continue;}if(codePoint<0x110000){count+=4;continue;}throw new Error("bad codepoint "+codePoint);}return count;}exports.encode=function(value,sparse){var size=sizeof(value,sparse);if(size==0)return undefined;var buffer=new ArrayBuffer(size);var view=new DataView(buffer);encode(value,view,0,sparse);return buffer;};exports.decode=decode;var SH_L_32=(1<<16)*(1<<16),SH_R_32=1/SH_L_32;function getInt64(view,offset){offset=offset||0;return view.getInt32(offset)*SH_L_32+view.getUint32(offset+4);}function getUint64(view,offset){offset=offset||0;return view.getUint32(offset)*SH_L_32+view.getUint32(offset+4);}function setInt64(view,offset,val){if(val<0x8000000000000000){view.setInt32(offset,Math.floor(val*SH_R_32));view.setInt32(offset+4,val&-1);}else{view.setUint32(offset,0x7fffffff);view.setUint32(offset+4,0x7fffffff);}}function setUint64(view,offset,val){if(val<0x10000000000000000){view.setUint32(offset,Math.floor(val*SH_R_32));view.setInt32(offset+4,val&-1);}else{view.setUint32(offset,0xffffffff);view.setUint32(offset+4,0xffffffff);}}// https://gist.github.com/frsyuki/5432559 - v5 spec
//
// I've used one extension point from `fixext 1` to store `undefined`. On the wire this
// should translate to exactly 0xd40000
//
// +--------+--------+--------+
// |  0xd4  |  0x00  |  0x00  |
// +--------+--------+--------+
//    ^ fixext |        ^ value part unused (fixed to be 0)
//             ^ indicates undefined value
//
function Decoder(view,offset){this.offset=offset||0;this.view=view;}Decoder.prototype.map=function(length){var value={};for(var i=0;i<length;i++){var key=this.parse();value[key]=this.parse();}return value;};Decoder.prototype.bin=Decoder.prototype.buf=function(length){var value=new ArrayBuffer(length);new Uint8Array(value).set(new Uint8Array(this.view.buffer,this.offset,length),0);this.offset+=length;return value;};Decoder.prototype.str=function(length){var value=utf8Read(this.view,this.offset,length);this.offset+=length;return value;};Decoder.prototype.array=function(length){var value=new Array(length);for(var i=0;i<length;i++){value[i]=this.parse();}return value;};Decoder.prototype.ext=function(length){var value={};// Get the type byte
value['type']=this.view.getInt8(this.offset);this.offset++;// Get the data array (length)
value['data']=this.buf(length);this.offset+=length;return value;};Decoder.prototype.parse=function(){var type=this.view.getUint8(this.offset);var value,length;// Positive FixInt - 0xxxxxxx
if((type&0x80)===0x00){this.offset++;return type;}// FixMap - 1000xxxx
if((type&0xf0)===0x80){length=type&0x0f;this.offset++;return this.map(length);}// FixArray - 1001xxxx
if((type&0xf0)===0x90){length=type&0x0f;this.offset++;return this.array(length);}// FixStr - 101xxxxx
if((type&0xe0)===0xa0){length=type&0x1f;this.offset++;return this.str(length);}// Negative FixInt - 111xxxxx
if((type&0xe0)===0xe0){value=this.view.getInt8(this.offset);this.offset++;return value;}switch(type){// nil
case 0xc0:this.offset++;return null;// 0xc1 never used - use for undefined (NON-STANDARD)
case 0xc1:this.offset++;return undefined;// false
case 0xc2:this.offset++;return false;// true
case 0xc3:this.offset++;return true;// bin 8
case 0xc4:length=this.view.getUint8(this.offset+1);this.offset+=2;return this.bin(length);// bin 16
case 0xc5:length=this.view.getUint16(this.offset+1);this.offset+=3;return this.bin(length);// bin 32
case 0xc6:length=this.view.getUint32(this.offset+1);this.offset+=5;return this.bin(length);// ext 8
case 0xc7:length=this.view.getUint8(this.offset+1);this.offset+=2;return this.ext(length);// ext 16
case 0xc8:length=this.view.getUint16(this.offset+1);this.offset+=3;return this.ext(length);// ext 32
case 0xc9:length=this.view.getUint32(this.offset+1);this.offset+=5;return this.ext(length);// float 32
case 0xca:value=this.view.getFloat32(this.offset+1);this.offset+=5;return value;// float 64
case 0xcb:value=this.view.getFloat64(this.offset+1);this.offset+=9;return value;// uint8
case 0xcc:value=this.view.getUint8(this.offset+1);this.offset+=2;return value;// uint 16
case 0xcd:value=this.view.getUint16(this.offset+1);this.offset+=3;return value;// uint 32
case 0xce:value=this.view.getUint32(this.offset+1);this.offset+=5;return value;// uint 64
case 0xcf:value=getUint64(this.view,this.offset+1);this.offset+=9;return value;// int 8
case 0xd0:value=this.view.getInt8(this.offset+1);this.offset+=2;return value;// int 16
case 0xd1:value=this.view.getInt16(this.offset+1);this.offset+=3;return value;// int 32
case 0xd2:value=this.view.getInt32(this.offset+1);this.offset+=5;return value;// int 64
case 0xd3:value=getInt64(this.view,this.offset+1);this.offset+=9;return value;// fixext 1
case 0xd4:length=1;this.offset++;return this.ext(length);// fixext 2
case 0xd5:length=2;this.offset++;return this.ext(length);// fixext 4
case 0xd6:length=4;this.offset++;return this.ext(length);// fixext 8
case 0xd7:length=8;this.offset++;return this.ext(length);// fixext 16
case 0xd8:length=16;this.offset++;return this.ext(length);// str8
case 0xd9:length=this.view.getUint8(this.offset+1);this.offset+=2;return this.str(length);// str 16
case 0xda:length=this.view.getUint16(this.offset+1);this.offset+=3;return this.str(length);// str 32
case 0xdb:length=this.view.getUint32(this.offset+1);this.offset+=5;return this.str(length);// array 16
case 0xdc:length=this.view.getUint16(this.offset+1);this.offset+=3;return this.array(length);// array 32
case 0xdd:length=this.view.getUint32(this.offset+1);this.offset+=5;return this.array(length);// map 16
case 0xde:length=this.view.getUint16(this.offset+1);this.offset+=3;return this.map(length);// map 32
case 0xdf:length=this.view.getUint32(this.offset+1);this.offset+=5;return this.map(length);}throw new Error("Unknown type 0x"+type.toString(16));};function decode(buffer){var view=new DataView(buffer);var decoder=new Decoder(view);var value=decoder.parse();if(decoder.offset!==buffer.byteLength)throw new Error(buffer.byteLength-decoder.offset+" trailing bytes");return value;}function encodeableKeys(value,sparse){var keys=[];// TODO: use Object.keys when we are able to transpile to ES3
for(var key in value){if(!value.hasOwnProperty(key))continue;keys.push(key);}return keys.filter(function(e){var val=value[e],type=typeof val;return(!sparse||val!==undefined&&val!==null)&&('function'!==type||!!val.toJSON);});}function encode(value,view,offset,sparse){var type=typeof value;// Strings Bytes
// There are four string types: fixstr/str8/str16/str32
if(type==="string"){var length=utf8ByteCount(value);// fixstr
if(length<0x20){view.setUint8(offset,length|0xa0);utf8Write(view,offset+1,value);return 1+length;}// str8
if(length<0x100){view.setUint8(offset,0xd9);view.setUint8(offset+1,length);utf8Write(view,offset+2,value);return 2+length;}// str16
if(length<0x10000){view.setUint8(offset,0xda);view.setUint16(offset+1,length);utf8Write(view,offset+3,value);return 3+length;}// str32
if(length<0x100000000){view.setUint8(offset,0xdb);view.setUint32(offset+1,length);utf8Write(view,offset+5,value);return 5+length;}}if(ArrayBuffer.isView&&ArrayBuffer.isView(value)){// extract the arraybuffer and fallthrough
value=value.buffer;}// There are three bin types: bin8/bin16/bin32
if(value instanceof ArrayBuffer){var length=value.byteLength;// bin8
if(length<0x100){view.setUint8(offset,0xc4);view.setUint8(offset+1,length);new Uint8Array(view.buffer).set(new Uint8Array(value),offset+2);return 2+length;}// bin16
if(length<0x10000){view.setUint8(offset,0xc5);view.setUint16(offset+1,length);new Uint8Array(view.buffer).set(new Uint8Array(value),offset+3);return 3+length;}// bin 32
if(length<0x100000000){view.setUint8(offset,0xc6);view.setUint32(offset+1,length);new Uint8Array(view.buffer).set(new Uint8Array(value),offset+5);return 5+length;}}if(type==="number"){// Floating Point
// NOTE: We're always using float64
if(Math.floor(value)!==value){view.setUint8(offset,0xcb);view.setFloat64(offset+1,value);return 9;}// Integers
if(value>=0){// positive fixnum
if(value<0x80){view.setUint8(offset,value);return 1;}// uint 8
if(value<0x100){view.setUint8(offset,0xcc);view.setUint8(offset+1,value);return 2;}// uint 16
if(value<0x10000){view.setUint8(offset,0xcd);view.setUint16(offset+1,value);return 3;}// uint 32
if(value<0x100000000){view.setUint8(offset,0xce);view.setUint32(offset+1,value);return 5;}// uint 64
if(value<0x10000000000000000){view.setUint8(offset,0xcf);setUint64(view,offset+1,value);return 9;}throw new Error("Number too big 0x"+value.toString(16));}// negative fixnum
if(value>=-0x20){view.setInt8(offset,value);return 1;}// int 8
if(value>=-0x80){view.setUint8(offset,0xd0);view.setInt8(offset+1,value);return 2;}// int 16
if(value>=-0x8000){view.setUint8(offset,0xd1);view.setInt16(offset+1,value);return 3;}// int 32
if(value>=-0x80000000){view.setUint8(offset,0xd2);view.setInt32(offset+1,value);return 5;}// int 64
if(value>=-0x8000000000000000){view.setUint8(offset,0xd3);setInt64(view,offset+1,value);return 9;}throw new Error("Number too small -0x"+(-value).toString(16).substr(1));}// undefined - use d4 (NON-STANDARD)
if(type==="undefined"){if(sparse)return 0;view.setUint8(offset,0xd4);view.setUint8(offset+1,0x00);view.setUint8(offset+2,0x00);return 3;}// null
if(value===null){if(sparse)return 0;view.setUint8(offset,0xc0);return 1;}// Boolean
if(type==="boolean"){view.setUint8(offset,value?0xc3:0xc2);return 1;}if('function'===typeof value.toJSON)return encode(value.toJSON(),view,offset,sparse);// Container Types
if(type==="object"){var length,size=0;var isArray=Array.isArray(value);if(isArray){length=value.length;}else{var keys=encodeableKeys(value,sparse);length=keys.length;}var size;if(length<0x10){view.setUint8(offset,length|(isArray?0x90:0x80));size=1;}else if(length<0x10000){view.setUint8(offset,isArray?0xdc:0xde);view.setUint16(offset+1,length);size=3;}else if(length<0x100000000){view.setUint8(offset,isArray?0xdd:0xdf);view.setUint32(offset+1,length);size=5;}if(isArray){for(var i=0;i<length;i++){size+=encode(value[i],view,offset+size,sparse);}}else{for(var i=0;i<length;i++){var key=keys[i];size+=encode(key,view,offset+size);size+=encode(value[key],view,offset+size,sparse);}}return size;}if(type==="function")return 0;throw new Error("Unknown type "+type);}function sizeof(value,sparse){var type=typeof value;// fixstr or str8 or str16 or str32
if(type==="string"){var length=utf8ByteCount(value);if(length<0x20){return 1+length;}if(length<0x100){return 2+length;}if(length<0x10000){return 3+length;}if(length<0x100000000){return 5+length;}}if(ArrayBuffer.isView&&ArrayBuffer.isView(value)){// extract the arraybuffer and fallthrough
value=value.buffer;}// bin8 or bin16 or bin32
if(value instanceof ArrayBuffer){var length=value.byteLength;if(length<0x100){return 2+length;}if(length<0x10000){return 3+length;}if(length<0x100000000){return 5+length;}}if(type==="number"){// Floating Point (32 bits)
// double
if(Math.floor(value)!==value)return 9;// Integers
if(value>=0){// positive fixint
if(value<0x80)return 1;// uint 8
if(value<0x100)return 2;// uint 16
if(value<0x10000)return 3;// uint 32
if(value<0x100000000)return 5;// uint 64
if(value<0x10000000000000000)return 9;// Too big
throw new Error("Number too big 0x"+value.toString(16));}// negative fixint
if(value>=-0x20)return 1;// int 8
if(value>=-0x80)return 2;// int 16
if(value>=-0x8000)return 3;// int 32
if(value>=-0x80000000)return 5;// int 64
if(value>=-0x8000000000000000)return 9;// Too small
throw new Error("Number too small -0x"+value.toString(16).substr(1));}// Boolean
if(type==="boolean")return 1;// undefined, null
if(value===null)return sparse?0:1;if(value===undefined)return sparse?0:3;if('function'===typeof value.toJSON)return sizeof(value.toJSON(),sparse);// Container Types
if(type==="object"){var length,size=0;if(Array.isArray(value)){length=value.length;for(var i=0;i<length;i++){size+=sizeof(value[i],sparse);}}else{var keys=encodeableKeys(value,sparse);length=keys.length;for(var i=0;i<length;i++){var key=keys[i];size+=sizeof(key)+sizeof(value[key],sparse);}}if(length<0x10){return 1+size;}if(length<0x10000){return 3+size;}if(length<0x100000000){return 5+size;}throw new Error("Array or object too long 0x"+length.toString(16));}if(type==="function")return 0;throw new Error("Unknown type "+type);}return exports;}();/* harmony default export */__webpack_exports__["a"]=msgpack;/***/},/* 25 */ /***/function(module,__webpack_exports__,__nested_webpack_require_193268__){"use strict";/* WEBPACK VAR INJECTION */(function(global){/* harmony import */var _types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_193268__(8);/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_193268__(1);/* harmony import */var _protocol__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_193268__(34);/* harmony import */var _util_defaults__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_193268__(5);/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_193268__(3);/* harmony import */var _util_eventemitter__WEBPACK_IMPORTED_MODULE_5__=__nested_webpack_require_193268__(7);/* harmony import */var _messagequeue__WEBPACK_IMPORTED_MODULE_6__=__nested_webpack_require_193268__(26);/* harmony import */var _util_logger__WEBPACK_IMPORTED_MODULE_7__=__nested_webpack_require_193268__(0);/* harmony import */var _client_connectionstatechange__WEBPACK_IMPORTED_MODULE_8__=__nested_webpack_require_193268__(21);/* harmony import */var _transport_connectionerror__WEBPACK_IMPORTED_MODULE_9__=__nested_webpack_require_193268__(13);/* harmony import */var _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__=__nested_webpack_require_193268__(2);/* harmony import */var _client_auth__WEBPACK_IMPORTED_MODULE_11__=__nested_webpack_require_193268__(14);/* harmony import */var platform_http__WEBPACK_IMPORTED_MODULE_12__=__nested_webpack_require_193268__(6);/* harmony import */var _types_message__WEBPACK_IMPORTED_MODULE_13__=__nested_webpack_require_193268__(9);/* harmony import */var _util_multicaster__WEBPACK_IMPORTED_MODULE_14__=__nested_webpack_require_193268__(22);/* harmony import */var _util_errorreporter__WEBPACK_IMPORTED_MODULE_15__=__nested_webpack_require_193268__(23);/* harmony import */var platform_webstorage__WEBPACK_IMPORTED_MODULE_16__=__nested_webpack_require_193268__(16);/* harmony import */var platform_transports__WEBPACK_IMPORTED_MODULE_17__=__nested_webpack_require_193268__(41);/* harmony import */var _websockettransport__WEBPACK_IMPORTED_MODULE_18__=__nested_webpack_require_193268__(40);var ConnectionManager=function(){var haveWebStorage=!!(typeof platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"]!=='undefined'&&platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"].get);var haveSessionStorage=!!(typeof platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"]!=='undefined'&&platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"].getSession);var actions=_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].Action;var PendingMessage=_protocol__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].PendingMessage;var noop=function(){};var transportPreferenceOrder=_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].transportPreferenceOrder;var optimalTransport=transportPreferenceOrder[transportPreferenceOrder.length-1];var transportPreferenceName='ably-transport-preference';var sessionRecoveryName='ably-connection-recovery';function getSessionRecoverData(){return haveSessionStorage&&platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"].getSession(sessionRecoveryName);}function setSessionRecoverData(value){return haveSessionStorage&&platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"].setSession(sessionRecoveryName,value);}function clearSessionRecoverData(){return haveSessionStorage&&platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"].removeSession(sessionRecoveryName);}function betterTransportThan(a,b){return _util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrIndexOf(transportPreferenceOrder,a.shortName)>_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrIndexOf(transportPreferenceOrder,b.shortName);}function TransportParams(options,host,mode,connectionKey){this.options=options;this.host=host;this.mode=mode;this.connectionKey=connectionKey;this.format=options.useBinaryProtocol?'msgpack':'json';this.connectionSerial=undefined;this.timeSerial=undefined;}TransportParams.prototype.getConnectParams=function(authParams){var params=authParams?_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].copy(authParams):{};var options=this.options;switch(this.mode){case'upgrade':params.upgrade=this.connectionKey;break;case'resume':params.resume=this.connectionKey;if(this.timeSerial!==undefined){params.timeSerial=this.timeSerial;}else if(this.connectionSerial!==undefined){params.connectionSerial=this.connectionSerial;}break;case'recover':var match=options.recover.split(':');if(match){params.recover=match[0];var recoverSerial=match[1];if(isNaN(recoverSerial)){params.timeSerial=recoverSerial;}else{params.connectionSerial=recoverSerial;}}break;default:}if(options.clientId!==undefined){params.clientId=options.clientId;}if(options.echoMessages===false){params.echo='false';}if(this.format!==undefined){params.format=this.format;}if(this.stream!==undefined){params.stream=this.stream;}if(this.heartbeats!==undefined){params.heartbeats=this.heartbeats;}params.v=_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].apiVersion;params.lib=_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].libstring;if(options.transportParams!==undefined){_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].mixin(params,options.transportParams);}return params;};TransportParams.prototype.toString=function(){var result='[mode='+this.mode;if(this.host){result+=',host='+this.host;}if(this.connectionKey){result+=',connectionKey='+this.connectionKey;}if(this.connectionSerial!==undefined){result+=',connectionSerial='+this.connectionSerial;}if(this.timeSerial){result+=',timeSerial='+this.timeSerial;}if(this.format){result+=',format='+this.format;}result+=']';return result;};/* public constructor */function ConnectionManager(realtime,options){_util_eventemitter__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].call(this);this.realtime=realtime;this.options=options;var timeouts=options.timeouts;var self=this;/* connectingTimeout: leave preferenceConnectTimeout (~6s) to try the
		 * preference transport, then realtimeRequestTimeout (~10s) to establish
		 * the base transport in case that fails */var connectingTimeout=timeouts.preferenceConnectTimeout+timeouts.realtimeRequestTimeout;this.states={initialized:{state:'initialized',terminal:false,queueEvents:true,sendEvents:false,failState:'disconnected'},connecting:{state:'connecting',terminal:false,queueEvents:true,sendEvents:false,retryDelay:connectingTimeout,failState:'disconnected'},connected:{state:'connected',terminal:false,queueEvents:false,sendEvents:true,failState:'disconnected'},synchronizing:{state:'connected',terminal:false,queueEvents:true,sendEvents:false,forceQueueEvents:true,failState:'disconnected'},disconnected:{state:'disconnected',terminal:false,queueEvents:true,sendEvents:false,retryDelay:timeouts.disconnectedRetryTimeout,failState:'disconnected'},suspended:{state:'suspended',terminal:false,queueEvents:false,sendEvents:false,retryDelay:timeouts.suspendedRetryTimeout,failState:'suspended'},closing:{state:'closing',terminal:false,queueEvents:false,sendEvents:false,retryDelay:timeouts.realtimeRequestTimeout,failState:'closed'},closed:{state:'closed',terminal:true,queueEvents:false,sendEvents:false,failState:'closed'},failed:{state:'failed',terminal:true,queueEvents:false,sendEvents:false,failState:'failed'}};this.state=this.states.initialized;this.errorReason=null;this.queuedMessages=new _messagequeue__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"]();this.msgSerial=0;this.connectionDetails=undefined;this.connectionId=undefined;this.connectionKey=undefined;this.timeSerial=undefined;this.connectionSerial=undefined;this.connectionStateTtl=timeouts.connectionStateTtl;this.maxIdleInterval=null;this.transports=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].intersect(options.transports||_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].defaultTransports,ConnectionManager.supportedTransports);/* baseTransports selects the leftmost transport in the Defaults.baseTransportOrder list
		* that's both requested and supported. Normally this will be xhr_polling;
		* if xhr isn't supported it will be jsonp. If the user has forced a
		* transport, it'll just be that one. */this.baseTransport=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].intersect(_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].baseTransportOrder,this.transports)[0];this.upgradeTransports=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].intersect(this.transports,_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].upgradeTransports);this.transportPreference=null;this.httpHosts=_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].getHosts(options);this.activeProtocol=null;this.proposedTransports=[];this.pendingTransports=[];this.host=null;this.lastAutoReconnectAttempt=null;this.lastActivity=null;this.mostRecentMsg=null;this.forceFallbackHost=false;this.connectCounter=0;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'Realtime.ConnectionManager()','started');_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'Realtime.ConnectionManager()','requested transports = ['+(options.transports||_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].defaultTransports)+']');_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'Realtime.ConnectionManager()','available transports = ['+this.transports+']');_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'Realtime.ConnectionManager()','http hosts = ['+this.httpHosts+']');if(!this.transports.length){var msg='no requested transports available';_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'realtime.ConnectionManager()',msg);throw new Error(msg);}var addEventListener=platform__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].addEventListener;if(addEventListener){/* intercept close event in browser to persist connection id if requested */if(haveSessionStorage&&typeof options.recover==='function'){/* Usually can't use bind as not supported in IE8, but IE doesn't support sessionStorage, so... */addEventListener('beforeunload',this.persistConnection.bind(this));}if(options.closeOnUnload===true){addEventListener('beforeunload',function(){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MAJOR,'Realtime.ConnectionManager()','beforeunload event has triggered the connection to close as closeOnUnload is true');self.requestState({state:'closing'});});}/* Listen for online and offline events */addEventListener('online',function(){if(self.state==self.states.disconnected||self.state==self.states.suspended){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager caught browser ‘online’ event','reattempting connection');self.requestState({state:'connecting'});}});addEventListener('offline',function(){if(self.state==self.states.connected){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager caught browser ‘offline’ event','disconnecting active transport');// Not sufficient to just go to the 'disconnected' state, want to
// force all transports to reattempt the connection. Will immediately
// retry.
self.disconnectAllTransports();}});}}_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inherits(ConnectionManager,_util_eventemitter__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"]);/*********************
	 * transport management
	 *********************/ConnectionManager.supportedTransports={};Object(_websockettransport__WEBPACK_IMPORTED_MODULE_18__[/* default */"a"])(ConnectionManager);_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrForEach(platform_transports__WEBPACK_IMPORTED_MODULE_17__[/* default */"a"],function(initFn){initFn(ConnectionManager);});ConnectionManager.prototype.createTransportParams=function(host,mode){var params=new TransportParams(this.options,host,mode,this.connectionKey);if(this.timeSerial){params.timeSerial=this.timeSerial;}else if(this.connectionSerial!==undefined){params.connectionSerial=this.connectionSerial;}return params;};ConnectionManager.prototype.getTransportParams=function(callback){var self=this;function decideMode(modeCb){if(self.connectionKey){modeCb('resume');return;}if(typeof self.options.recover==='string'){modeCb('recover');return;}var recoverFn=self.options.recover,lastSessionData=getSessionRecoverData();if(lastSessionData&&typeof recoverFn==='function'){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.getTransportParams()','Calling clientOptions-provided recover function with last session data');recoverFn(lastSessionData,function(shouldRecover){if(shouldRecover){self.options.recover=lastSessionData.recoveryKey;modeCb('recover');}else{modeCb('clean');}});return;}modeCb('clean');}decideMode(function(mode){var transportParams=self.createTransportParams(null,mode);if(mode==='recover'){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.getTransportParams()','Transport recovery mode = recover; recoveryKey = '+self.options.recover);var match=self.options.recover.split(':');if(match&&match[2]){self.msgSerial=match[2];}}else{_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.getTransportParams()','Transport params = '+transportParams.toString());}callback(transportParams);});};/**
	 * Attempt to connect using a given transport
	 * @param transportParams
	 * @param candidate, the transport to try
	 * @param callback
	 */ConnectionManager.prototype.tryATransport=function(transportParams,candidate,callback){var self=this,host=transportParams.host;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.tryATransport()','trying '+candidate);ConnectionManager.supportedTransports[candidate].tryConnect(this,this.realtime.auth,transportParams,function(wrappedErr,transport){var state=self.state;if(state==self.states.closing||state==self.states.closed||state==self.states.failed){if(transport){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.tryATransport()','connection '+state.state+' while we were attempting the transport; closing '+transport);transport.close();}callback(true);return;}if(wrappedErr){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.tryATransport()','transport '+candidate+' '+wrappedErr.event+', err: '+wrappedErr.error.toString());/* Comet transport onconnect token errors can be dealt with here.
				* Websocket ones only happen after the transport claims to be viable,
				* so are dealt with as non-onconnect token errors */if(_client_auth__WEBPACK_IMPORTED_MODULE_11__[/* default */"a"].isTokenErr(wrappedErr.error)&&!(self.errorReason&&_client_auth__WEBPACK_IMPORTED_MODULE_11__[/* default */"a"].isTokenErr(self.errorReason))){self.errorReason=wrappedErr.error;/* re-get a token and try again */self.realtime.auth._forceNewToken(null,null,function(err){if(err){self.actOnErrorFromAuthorize(err);return;}self.tryATransport(transportParams,candidate,callback);});}else if(wrappedErr.event==='failed'){/* Error that's fatal to the connection */self.notifyState({state:'failed',error:wrappedErr.error});callback(true);}else if(wrappedErr.event==='disconnected'){if(!_transport_connectionerror__WEBPACK_IMPORTED_MODULE_9__[/* default */"a"].isRetriable(wrappedErr.error)){/* Error received from the server that does not call for trying a fallback host, eg a rate limit */self.notifyState({state:self.states.connecting.failState,error:wrappedErr.error});callback(true);}else{/* Error with that transport only; continue trying other fallback hosts */callback(false);}}return;}_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.tryATransport()','viable transport '+candidate+'; setting pending');self.setTransportPending(transport,transportParams);callback(null,transport);});};/**
	 * Called when a transport is indicated to be viable, and the connectionmanager
	 * expects to activate this transport as soon as it is connected.
	 * @param host
	 * @param transportParams
	 */ConnectionManager.prototype.setTransportPending=function(transport,transportParams){var mode=transportParams.mode;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.setTransportPending()','transport = '+transport+'; mode = '+mode);_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrDeleteValue(this.proposedTransports,transport);this.pendingTransports.push(transport);var self=this;transport.once('connected',function(error,connectionId,connectionDetails,connectionPosition){if(mode=='upgrade'&&self.activeProtocol){/*  if ws and xhrs are connecting in parallel, delay xhrs activation to let ws go ahead */if(transport.shortName!==optimalTransport&&_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrIn(self.getUpgradePossibilities(),optimalTransport)){setTimeout(function(){self.scheduleTransportActivation(error,transport,connectionId,connectionDetails,connectionPosition);},self.options.timeouts.parallelUpgradeDelay);}else{self.scheduleTransportActivation(error,transport,connectionId,connectionDetails,connectionPosition);}}else{self.activateTransport(error,transport,connectionId,connectionDetails,connectionPosition);/* allow connectImpl to start the upgrade process if needed, but allow
				 * other event handlers, including activating the transport, to run first */_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){self.connectImpl(transportParams);});}if(mode==='recover'&&self.options.recover){/* After a successful recovery, we unpersist, as a recovery key cannot
				* be used more than once */self.options.recover=null;self.unpersistConnection();}});transport.on(['disconnected','closed','failed'],function(error){self.deactivateTransport(transport,this.event,error);});this.emit('transport.pending',transport);};/**
	 * Called when an upgrade transport is connected,
	 * to schedule the activation of that transport.
	 * @param error
	 * @param transport
	 * @param connectionId
	 * @param connectionDetails
	 * @param connectedMessage
	 */ConnectionManager.prototype.scheduleTransportActivation=function(error,transport,connectionId,connectionDetails,upgradeConnectionPosition){var self=this,currentTransport=this.activeProtocol&&this.activeProtocol.getTransport(),abandon=function(){transport.disconnect();_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrDeleteValue(self.pendingTransports,transport);};if(this.state!==this.states.connected&&this.state!==this.states.connecting){/* This is most likely to happen for the delayed xhrs, when xhrs and ws are scheduled in parallel*/_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.scheduleTransportActivation()','Current connection state ('+this.state.state+(this.state===this.states.synchronizing?', but with an upgrade already in progress':'')+') is not valid to upgrade in; abandoning upgrade to '+transport.shortName);abandon();return;}if(currentTransport&&!betterTransportThan(transport,currentTransport)){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.scheduleTransportActivation()','Proposed transport '+transport.shortName+' is no better than current active transport '+currentTransport.shortName+' - abandoning upgrade');abandon();return;}_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.scheduleTransportActivation()','Scheduling transport upgrade; transport = '+transport);this.realtime.channels.onceNopending(function(err){var oldProtocol;if(err){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.scheduleTransportActivation()','Unable to activate transport; transport = '+transport+'; err = '+err);return;}if(!transport.isConnected){/* This is only possible if the xhr streaming transport was disconnected during the parallelUpgradeDelay */_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.scheduleTransportActivation()','Proposed transport '+transport.shortName+'is no longer connected; abandoning upgrade');abandon();return;}if(self.state===self.states.connected){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.scheduleTransportActivation()','Currently connected, so temporarily pausing events until the upgrade is complete');self.state=self.states.synchronizing;oldProtocol=self.activeProtocol;}else if(self.state!==self.states.connecting){/* Note: upgrading from the connecting state is valid if the old active
				* transport was deactivated after the upgrade transport first connected;
				* see logic in deactivateTransport */_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.scheduleTransportActivation()','Current connection state ('+self.state.state+(self.state===self.states.synchronizing?', but with an upgrade already in progress':'')+') is not valid to upgrade in; abandoning upgrade to '+transport.shortName);abandon();return;}/* If the connectionId has changed, the upgrade hasn't worked. But as
			* it's still an upgrade, realtime still expects a sync - it just needs to
			* be a sync with the new connection position. (And it
			* needs to be set in the library, which is done by activateTransport). */var connectionReset=connectionId!==self.connectionId,syncPosition=connectionReset?upgradeConnectionPosition:self;if(connectionReset){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.scheduleTransportActivation()','Upgrade resulted in new connectionId; resetting library connection position from '+(self.timeSerial||self.connectionSerial)+' to '+(syncPosition.timeSerial||syncPosition.connectionSerial)+'; upgrade error was '+error);}_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.scheduleTransportActivation()','Syncing transport; transport = '+transport);self.sync(transport,syncPosition,function(syncErr,connectionId,postSyncPosition){/* If there's been some problem with syncing (and the connection hasn't
				 * closed or something in the meantime), we have a problem -- we can't
				 * just fall back on the old transport, as we don't know whether
				 * realtime got the sync -- if it did, the old transport is no longer
				 * valid. To be safe, we disconnect both and start again from scratch. */if(syncErr){if(self.state===self.states.synchronizing){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.scheduleTransportActivation()','Unexpected error attempting to sync transport; transport = '+transport+'; err = '+syncErr);self.disconnectAllTransports();}return;}var finishUpgrade=function(){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.scheduleTransportActivation()','Activating transport; transport = '+transport);self.activateTransport(error,transport,connectionId,connectionDetails,postSyncPosition);/* Restore pre-sync state. If state has changed in the meantime,
					 * don't touch it -- since the websocket transport waits a tick before
					 * disposing itself, it's possible for it to have happily synced
					 * without err while, unknown to it, the connection has closed in the
					 * meantime and the ws transport is scheduled for death */if(self.state===self.states.synchronizing){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.scheduleTransportActivation()','Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = '+transport);self.state=self.states.connected;}else{_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.scheduleTransportActivation()','Pre-upgrade protocol idle, but state is now '+self.state.state+', so leaving unchanged');}if(self.state.sendEvents){self.sendQueuedMessages();}};/* Wait until sync is done and old transport is idle before activating new transport. This
				 * guarantees that messages arrive at realtime in the same order they are sent.
				 *
				 * If a message times out on the old transport, since it's still the active transport the
				 * message will be requeued. deactivateTransport will see the pending transport and notify
				 * the `connecting` state without starting a new connection, so the new transport can take
				 * over once deactivateTransport clears the old protocol's queue.
				 *
				 * If there is no old protocol, that meant that we weren't in the connected state at the
				 * beginning of the sync - likely the base transport died just before the sync. So can just
				 * finish the upgrade. If we're actually in closing/failed rather than connecting, that's
				 * fine, activatetransport will deal with that. */if(oldProtocol){/* Most of the time this will be already true: the new-transport sync will have given
				 * enough time for in-flight messages on the old transport to complete. */oldProtocol.onceIdle(finishUpgrade);}else{finishUpgrade();}});});};/**
	 * Called when a transport is connected, and the connectionmanager decides that
	 * it will now be the active transport. Returns whether or not it activated
	 * the transport (if the connection is closing/closed it will choose not to).
	 * @param transport the transport instance
	 * @param connectionId the id of the new active connection
	 * @param connectionDetails the details of the new active connection
	 * @param connectionPosition the position at the point activation; either {connectionSerial: <serial>} or {timeSerial: <serial>}
	 */ConnectionManager.prototype.activateTransport=function(error,transport,connectionId,connectionDetails,connectionPosition){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.activateTransport()','transport = '+transport);if(error){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.activateTransport()','error = '+error);}if(connectionId){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.activateTransport()','connectionId =  '+connectionId);}if(connectionDetails){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.activateTransport()','connectionDetails =  '+JSON.stringify(connectionDetails));}if(connectionPosition){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.activateTransport()','serial =  '+(connectionPosition.timeSerial||connectionPosition.connectionSerial));}this.persistTransportPreference(transport);/* if the connectionmanager moved to the closing/closed state before this
		 * connection event, then we won't activate this transport */var existingState=this.state,connectedState=this.states.connected.state;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.activateTransport()','current state = '+existingState.state);if(existingState.state==this.states.closing.state||existingState.state==this.states.closed.state||existingState.state==this.states.failed.state){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.activateTransport()','Disconnecting transport and abandoning');transport.disconnect();return false;}/* remove this transport from pending transports */_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrDeleteValue(this.pendingTransports,transport);/* if the transport is not connected (eg because it failed during a
		 * scheduleTransportActivation#onceNoPending wait) then don't activate it */if(!transport.isConnected){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.activateTransport()','Declining to activate transport '+transport+' since it appears to no longer be connected');return false;}/* the given transport is connected; this will immediately
		 * take over as the active transport */var existingActiveProtocol=this.activeProtocol;this.activeProtocol=new _protocol__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"](transport);this.host=transport.params.host;var connectionKey=connectionDetails.connectionKey;if(connectionKey&&this.connectionKey!=connectionKey){this.setConnection(connectionId,connectionDetails,connectionPosition,!!error);}/* Rebroadcast any new connectionDetails from the active transport, which
		 * can come at any time (eg following a reauth), and emit an RTN24 UPDATE
		 * event. (Listener added on nextTick because we're in a transport.on('connected')
		 * callback at the moment; if we add it now we'll be adding it to the end
		 * of the listeners array and it'll be called immediately) */this.onConnectionDetailsUpdate(connectionDetails,transport);var self=this;_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){transport.on('connected',function(connectedErr,_connectionId,connectionDetails){self.onConnectionDetailsUpdate(connectionDetails,transport);self.emit('update',new _client_connectionstatechange__WEBPACK_IMPORTED_MODULE_8__[/* default */"a"](connectedState,connectedState,null,connectedErr));});});/* If previously not connected, notify the state change (including any
		 * error). */if(existingState.state===this.states.connected.state){if(error){/* if upgrading without error, leave any existing errorReason alone */this.errorReason=this.realtime.connection.errorReason=error;/* Only bother emitting an upgrade if there's an error; otherwise it's
				 * just a transport upgrade, so auth details won't have changed */this.emit('update',new _client_connectionstatechange__WEBPACK_IMPORTED_MODULE_8__[/* default */"a"](connectedState,connectedState,null,error));}}else{this.notifyState({state:'connected',error:error});this.errorReason=this.realtime.connection.errorReason=error||null;}/* Send after the connection state update, as Channels hooks into this to
		 * resend attaches on a new transport if necessary */this.emit('transport.active',transport);/* Gracefully terminate existing protocol */if(existingActiveProtocol){if(existingActiveProtocol.messageQueue.count()>0){/* We could just requeue pending messages on the new transport, but
				 * actually this should never happen: transports should only take over
				 * from other active transports when upgrading, and upgrading waits for
				 * the old transport to be idle. So log an error. */_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.activateTransport()','Previous active protocol (for transport '+existingActiveProtocol.transport.shortName+', new one is '+transport.shortName+') finishing with '+existingActiveProtocol.messageQueue.count()+' messages still pending');}if(existingActiveProtocol.transport===transport){var msg='Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = '+transport.shortName+'; stack = '+new Error().stack;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.activateTransport()',msg);_util_errorreporter__WEBPACK_IMPORTED_MODULE_15__[/* default */"a"].report('error',msg,'transport-previously-active');}else{existingActiveProtocol.finish();}}/* Terminate any other pending transport(s), and
		 * abort any not-yet-pending transport attempts */_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].safeArrForEach(this.pendingTransports,function(pendingTransport){if(pendingTransport===transport){var msg='Assumption violated: activating a transport that is still marked as a pending transport; transport = '+transport.shortName+'; stack = '+new Error().stack;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.activateTransport()',msg);_util_errorreporter__WEBPACK_IMPORTED_MODULE_15__[/* default */"a"].report('error',msg,'transport-activating-pending');_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrDeleteValue(self.pendingTransports,transport);}else{pendingTransport.disconnect();}});_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].safeArrForEach(this.proposedTransports,function(proposedTransport){if(proposedTransport===transport){var msg='Assumption violated: activating a transport that is still marked as a proposed transport; transport = '+transport.shortName+'; stack = '+new Error().stack;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.activateTransport()',msg);_util_errorreporter__WEBPACK_IMPORTED_MODULE_15__[/* default */"a"].report('error',msg,'transport-activating-proposed');_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrDeleteValue(self.proposedTransports,transport);}else{proposedTransport.dispose();}});return true;};/**
	 * Called when a transport is no longer the active transport. This can occur
	 * in any transport connection state.
	 * @param transport
	 */ConnectionManager.prototype.deactivateTransport=function(transport,state,error){var currentProtocol=this.activeProtocol,wasActive=currentProtocol&&currentProtocol.getTransport()===transport,wasPending=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrDeleteValue(this.pendingTransports,transport),wasProposed=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrDeleteValue(this.proposedTransports,transport),noTransportsScheduledForActivation=this.noTransportsScheduledForActivation();_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.deactivateTransport()','transport = '+transport);_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.deactivateTransport()','state = '+state+(wasActive?'; was active':wasPending?'; was pending':wasProposed?'; was proposed':'')+(noTransportsScheduledForActivation?'':'; another transport is scheduled for activation'));if(error&&error.message)_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.deactivateTransport()','reason =  '+error.message);if(wasActive){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.deactivateTransport()','Getting, clearing, and requeuing '+this.activeProtocol.messageQueue.count()+' pending messages');this.queuePendingMessages(currentProtocol.getPendingMessages());/* Clear any messages we requeue to allow the protocol to become idle.
			 * In case of an upgrade, this will trigger an immediate activation of
			 * the upgrade transport, so delay a tick so this transport can finish
			 * deactivating */_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){currentProtocol.clearPendingMessages();});this.activeProtocol=this.host=null;clearTimeout(this.channelResumeCheckTimer);}this.emit('transport.inactive',transport);/* this transport state change is a state change for the connectionmanager if
		 * - the transport was the active transport and there are no transports
		 *   which are connected and scheduled for activation, just waiting for the
		 *   active transport to finish what its doing; or
		 * - the transport was the active transport and the error was fatal (so
		 *   unhealable by another transport); or
		 * - there is no active transport, and this is the last remaining
		 *   pending transport (so we were in the connecting state)
		 */if(wasActive&&noTransportsScheduledForActivation||wasActive&&state==='failed'||state==='closed'||currentProtocol===null&&wasPending&&this.pendingTransports.length===0){/* If we're disconnected with a 5xx we need to try fallback hosts
			 * (RTN14d), but (a) due to how the upgrade sequence works, the
			 * host/transport selection sequence only cares about getting to
			 * `preconnect` (eg establishing a websocket) getting a `disconnected`
			 * protocol message afterwards is too late; and (b) host retry only
			 * applies to connectBase unless the stored preference transport doesn't
			 * work. We solve this by unpersisting the transport preference and
			 * setting an instance variable to force fallback hosts to be used (if
			 * any) here. Bit of a kludge, but no real better alternatives without
			 * rewriting the entire thing */if(state==='disconnected'&&error&&error.statusCode>500&&this.httpHosts.length>1){this.unpersistTransportPreference();this.forceFallbackHost=true;/* and try to connect again to try a fallback host without waiting for the usual 15s disconnectedRetryTimeout */this.notifyState({state:state,error:error,retryImmediately:true});return;}/* TODO remove below line once realtime sends token errors as DISCONNECTEDs */var newConnectionState=state==='failed'&&_client_auth__WEBPACK_IMPORTED_MODULE_11__[/* default */"a"].isTokenErr(error)?'disconnected':state;this.notifyState({state:newConnectionState,error:error});return;}if(wasActive&&state==='disconnected'&&this.state!==this.states.synchronizing){/* If we were active but there is another transport scheduled for
			* activation, go into to the connecting state until that transport
			* activates and sets us back to connected. (manually starting the
			* transition timers in case that never happens). (If we were in the
			* synchronizing state, then that's fine, the old transport just got its
			* disconnected before the new one got the sync -- ignore it and keep
			* waiting for the sync. If it fails we have a separate sync timer that
			* will expire). */_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.deactivateTransport()','wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates');this.startSuspendTimer();this.startTransitionTimer(this.states.connecting);this.notifyState({state:'connecting',error:error});}};/* Helper that returns true if there are no transports which are pending,
	* have been connected, and are just waiting for onceNoPending to fire before
	* being activated */ConnectionManager.prototype.noTransportsScheduledForActivation=function(){return _util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].isEmpty(this.pendingTransports)||this.pendingTransports.every(function(transport){return!transport.isConnected;});};/**
	 * Called when activating a new transport, to ensure message delivery
	 * on the new transport synchronises with the messages already received
	 */ConnectionManager.prototype.sync=function(transport,requestedSyncPosition,callback){var timeout=setTimeout(function(){transport.off('sync');callback(new _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__[/* default */"a"]('Timeout waiting for sync response',50000,500));},this.options.timeouts.realtimeRequestTimeout);/* send sync request */var syncMessage=_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({action:actions.SYNC,connectionKey:this.connectionKey});if(requestedSyncPosition.timeSerial){syncMessage.timeSerial=requestedSyncPosition.timeSerial;}else if(requestedSyncPosition.connectionSerial!==undefined){syncMessage.connectionSerial=requestedSyncPosition.connectionSerial;}transport.send(syncMessage);transport.once('sync',function(connectionId,syncPosition){clearTimeout(timeout);callback(null,connectionId,syncPosition);});};ConnectionManager.prototype.setConnection=function(connectionId,connectionDetails,connectionPosition,hasConnectionError){/* if connectionKey changes but connectionId stays the same, then just a
		 * transport change on the same connection. If connectionId changes, we're
		 * on a new connection, with implications for msgSerial and channel state,
		 * and resetting the connectionSerial position */var self=this;/* If no previous connectionId, don't reset the msgSerial as it may have
		 * been set by recover data (unless the recover failed) */var prevConnId=this.connectionid,connIdChanged=prevConnId&&prevConnId!==connectionId,recoverFailure=!prevConnId&&hasConnectionError;if(connIdChanged||recoverFailure){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.setConnection()','Resetting msgSerial');this.msgSerial=0;}/* but do need to reattach channels, for channels that were previously in
		 * the attached state even though the connection mode was 'clean' due to a
		 * freshness check - see https://github.com/ably/ably-js/issues/394 */if(this.connectionId!==connectionId){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.setConnection()','New connectionId; reattaching any attached channels');/* Wait till next tick before reattaching channels, so that connection
			 * state will be updated and so that it will be applied after
			 * Channels#onTransportUpdate, else channels will not have an ATTACHED
			 * sent twice (once from this and once from that). */_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){self.realtime.channels.reattach();});}else if(this.options.checkChannelsOnResume){/* For attached channels, set the attached msg indicator variable to false,
			 * wait 30s, and check we got an attached for each one.
			 * 30s was chosen to be 5s longer than the transport idle timeout expire
			 * time, in an attempt to avoid false positives due to a transport
			 * silently failing immediately after a resume */_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.setConnection()','Same connectionId; checkChannelsOnResume is enabled');clearTimeout(this.channelResumeCheckTimer);this.realtime.channels.resetAttachedMsgIndicators();this.channelResumeCheckTimer=setTimeout(function(){self.realtime.channels.checkAttachedMsgIndicators(connectionId);},30000);}this.realtime.connection.id=this.connectionId=connectionId;this.realtime.connection.key=this.connectionKey=connectionDetails.connectionKey;var forceResetMessageSerial=connIdChanged||!prevConnId;this.setConnectionSerial(connectionPosition,forceResetMessageSerial);};ConnectionManager.prototype.clearConnection=function(){this.realtime.connection.id=this.connectionId=undefined;this.realtime.connection.key=this.connectionKey=undefined;this.clearConnectionSerial();this.msgSerial=0;this.unpersistConnection();};/* force: set the connectionSerial even if it's less than the current
	 * connectionSerial. Used for new connections.
	 * Returns true iff the message was rejected as a duplicate. */ConnectionManager.prototype.setConnectionSerial=function(connectionPosition,force){var timeSerial=connectionPosition.timeSerial,connectionSerial=connectionPosition.connectionSerial;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.setConnectionSerial()','Updating connection serial; serial = '+connectionSerial+'; timeSerial = '+timeSerial+'; force = '+force+'; previous = '+this.connectionSerial);if(timeSerial!==undefined){if(timeSerial<=this.timeSerial&&!force){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.setConnectionSerial()','received message with timeSerial '+timeSerial+', but current timeSerial is '+this.timeSerial+'; assuming message is a duplicate and discarding it');return true;}this.realtime.connection.timeSerial=this.timeSerial=timeSerial;this.setRecoveryKey();return;}if(connectionSerial!==undefined){if(connectionSerial<=this.connectionSerial&&!force){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.setConnectionSerial()','received message with connectionSerial '+connectionSerial+', but current connectionSerial is '+this.connectionSerial+'; assuming message is a duplicate and discarding it');return true;}this.realtime.connection.serial=this.connectionSerial=connectionSerial;this.setRecoveryKey();}};ConnectionManager.prototype.clearConnectionSerial=function(){this.realtime.connection.serial=this.connectionSerial=undefined;this.realtime.connection.timeSerial=this.timeSerial=undefined;this.clearRecoveryKey();};ConnectionManager.prototype.setRecoveryKey=function(){this.realtime.connection.recoveryKey=this.connectionKey+':'+(this.timeSerial||this.connectionSerial)+':'+this.msgSerial;};ConnectionManager.prototype.clearRecoveryKey=function(){this.realtime.connection.recoveryKey=null;};ConnectionManager.prototype.checkConnectionStateFreshness=function(){if(!this.lastActivity||!this.connectionId){return;}var sinceLast=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].now()-this.lastActivity;if(sinceLast>this.connectionStateTtl+this.maxIdleInterval){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.checkConnectionStateFreshness()','Last known activity from realtime was '+sinceLast+'ms ago; discarding connection state');this.clearConnection();this.states.connecting.failState='suspended';this.states.connecting.queueEvents=false;}};/**
	 * Called when the connectionmanager wants to persist transport
	 * state for later recovery. Only applicable in the browser context.
	 */ConnectionManager.prototype.persistConnection=function(){if(haveSessionStorage){var recoveryKey=this.realtime.connection.recoveryKey;if(recoveryKey){setSessionRecoverData({recoveryKey:recoveryKey,disconnectedAt:_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].now(),location:global.location,clientId:this.realtime.auth.clientId},this.connectionStateTtl);}}};/**
	 * Called when the connectionmanager wants to persist transport
	 * state for later recovery. Only applicable in the browser context.
	 */ConnectionManager.prototype.unpersistConnection=function(){clearSessionRecoverData();};/*********************
	 * state management
	 *********************/ConnectionManager.prototype.getError=function(){return this.errorReason||this.getStateError();};ConnectionManager.prototype.getStateError=function(){return _transport_connectionerror__WEBPACK_IMPORTED_MODULE_9__[/* default */"a"][this.state.state];};ConnectionManager.prototype.activeState=function(){return this.state.queueEvents||this.state.sendEvents;};ConnectionManager.prototype.enactStateChange=function(stateChange){var logLevel=stateChange.current==='failed'?_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR:_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MAJOR;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(logLevel,'Connection state',stateChange.current+(stateChange.reason?'; reason: '+stateChange.reason:''));_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.enactStateChange','setting new state: '+stateChange.current+'; reason = '+(stateChange.reason&&stateChange.reason.message));var newState=this.state=this.states[stateChange.current];if(stateChange.reason){this.errorReason=stateChange.reason;this.realtime.connection.errorReason=stateChange.reason;}if(newState.terminal||newState.state==='suspended'){/* suspended is nonterminal, but once in the suspended state, realtime
			 * will have discarded our connection state, so futher connection
			 * attempts should start from scratch */this.clearConnection();}this.emit('connectionstate',stateChange);};/****************************************
	 * ConnectionManager connection lifecycle
	 ****************************************/ConnectionManager.prototype.startTransitionTimer=function(transitionState){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.startTransitionTimer()','transitionState: '+transitionState.state);if(this.transitionTimer){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.startTransitionTimer()','clearing already-running timer');clearTimeout(this.transitionTimer);}var self=this;this.transitionTimer=setTimeout(function(){if(self.transitionTimer){self.transitionTimer=null;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager '+transitionState.state+' timer expired','requesting new state: '+transitionState.failState);self.notifyState({state:transitionState.failState});}},transitionState.retryDelay);};ConnectionManager.prototype.cancelTransitionTimer=function(){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.cancelTransitionTimer()','');if(this.transitionTimer){clearTimeout(this.transitionTimer);this.transitionTimer=null;}};ConnectionManager.prototype.startSuspendTimer=function(){var self=this;if(this.suspendTimer)return;this.suspendTimer=setTimeout(function(){if(self.suspendTimer){self.suspendTimer=null;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager suspend timer expired','requesting new state: suspended');self.states.connecting.failState='suspended';self.states.connecting.queueEvents=false;self.notifyState({state:'suspended'});}},this.connectionStateTtl);};ConnectionManager.prototype.checkSuspendTimer=function(state){if(state!=='disconnected'&&state!=='suspended'&&state!=='connecting')this.cancelSuspendTimer();};ConnectionManager.prototype.cancelSuspendTimer=function(){this.states.connecting.failState='disconnected';this.states.connecting.queueEvents=true;if(this.suspendTimer){clearTimeout(this.suspendTimer);this.suspendTimer=null;}};ConnectionManager.prototype.startRetryTimer=function(interval){var self=this;this.retryTimer=setTimeout(function(){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager retry timer expired','retrying');self.retryTimer=null;self.requestState({state:'connecting'});},interval);};ConnectionManager.prototype.cancelRetryTimer=function(){if(this.retryTimer){clearTimeout(this.retryTimer);this.retryTimer=null;}};ConnectionManager.prototype.notifyState=function(indicated){var state=indicated.state,self=this;/* We retry immediately if:
		 * - something disconnects us while we're connected, or
		 * - a viable (but not yet active) transport fails due to a token error (so
		 *   this.errorReason will be set, and startConnect will do a forced
		 *   authorize). If this.errorReason is already set (to a token error),
		 *   then there has been at least one previous attempt to connect that also
		 *   failed for a token error, so by RTN14b we go to DISCONNECTED and wait
		 *   before trying again */var retryImmediately=state==='disconnected'&&(this.state===this.states.connected||this.state===this.states.synchronizing||indicated.retryImmediately||this.state===this.states.connecting&&indicated.error&&_client_auth__WEBPACK_IMPORTED_MODULE_11__[/* default */"a"].isTokenErr(indicated.error)&&!(this.errorReason&&_client_auth__WEBPACK_IMPORTED_MODULE_11__[/* default */"a"].isTokenErr(this.errorReason)));_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.notifyState()','new state: '+state+(retryImmediately?'; will retry connection immediately':''));/* do nothing if we're already in the indicated state */if(state==this.state.state)return;/* kill timers (possibly excepting suspend timer depending on the notified
		* state), as these are superseded by this notification */this.cancelTransitionTimer();this.cancelRetryTimer();this.checkSuspendTimer(indicated.state);/* do nothing if we're unable to move from the current state */if(this.state.terminal)return;/* process new state */var newState=this.states[indicated.state],change=new _client_connectionstatechange__WEBPACK_IMPORTED_MODULE_8__[/* default */"a"](this.state.state,newState.state,newState.retryDelay,indicated.error||_transport_connectionerror__WEBPACK_IMPORTED_MODULE_9__[/* default */"a"][newState.state]);if(retryImmediately){var autoReconnect=function(){if(self.state===self.states.disconnected){self.lastAutoReconnectAttempt=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].now();self.requestState({state:'connecting'});}};var sinceLast=this.lastAutoReconnectAttempt&&_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].now()-this.lastAutoReconnectAttempt+1;if(sinceLast&&sinceLast<1000){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.notifyState()','Last reconnect attempt was only '+sinceLast+'ms ago, waiting another '+(1000-sinceLast)+'ms before trying again');setTimeout(autoReconnect,1000-sinceLast);}else{_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(autoReconnect);}}else if(state==='disconnected'||state==='suspended'){this.startRetryTimer(newState.retryDelay);}/* If going into disconnect/suspended (and not retrying immediately), or a
			* terminal state, ensure there are no orphaned transports hanging around. */if(state==='disconnected'&&!retryImmediately||state==='suspended'||newState.terminal){/* Wait till the next tick so the connection state change is enacted,
				 * so aborting transports doesn't trigger redundant state changes */_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){self.disconnectAllTransports();});}if(state=='connected'&&!this.activeProtocol){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.notifyState()','Broken invariant: attempted to go into connected state, but there is no active protocol');}/* implement the change and notify */this.enactStateChange(change);if(this.state.sendEvents){this.sendQueuedMessages();}else if(!this.state.queueEvents){this.realtime.channels.propogateConnectionInterruption(state,change.reason);this.failQueuedMessages(change.reason);// RTN7c
}};ConnectionManager.prototype.requestState=function(request){var state=request.state,self=this;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.requestState()','requested state: '+state+'; current state: '+this.state.state);if(state==this.state.state)return;/* silently do nothing */ /* kill running timers, as this request supersedes them */this.cancelTransitionTimer();this.cancelRetryTimer();/* for suspend timer check rather than cancel -- eg requesting a connecting
		* state should not reset the suspend timer */this.checkSuspendTimer(state);if(state=='connecting'&&this.state.state=='connected')return;if(state=='closing'&&this.state.state=='closed')return;var newState=this.states[state],change=new _client_connectionstatechange__WEBPACK_IMPORTED_MODULE_8__[/* default */"a"](this.state.state,newState.state,null,request.error||_transport_connectionerror__WEBPACK_IMPORTED_MODULE_9__[/* default */"a"][newState.state]);this.enactStateChange(change);if(state=='connecting'){_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){self.startConnect();});}if(state=='closing'){this.closeImpl();}};ConnectionManager.prototype.startConnect=function(){if(this.state!==this.states.connecting){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.startConnect()','Must be in connecting state to connect, but was '+this.state.state);return;}var auth=this.realtime.auth,self=this;/* The point of the connectCounter mechanism is to ensure that the
		 * connection procedure can be cancelled. We want disconnectAllTransports
		 * to be able to stop any in-progress connection, even before it gets to
		 * the stage of having a pending (or even a proposed) transport that it can
		 * dispose() of. So we check that it's still current after any async stage,
		 * up until the stage that is synchronous with instantiating a transport */var connectCount=++this.connectCounter;var connect=function(){self.checkConnectionStateFreshness();self.getTransportParams(function(transportParams){if(connectCount!==self.connectCounter){return;}self.connectImpl(transportParams,connectCount);});};_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.startConnect()','starting connection');this.startSuspendTimer();this.startTransitionTimer(this.states.connecting);if(auth.method==='basic'){connect();}else{var authCb=function(err){if(connectCount!==self.connectCounter){return;}if(err){self.actOnErrorFromAuthorize(err);}else{connect();}};if(this.errorReason&&_client_auth__WEBPACK_IMPORTED_MODULE_11__[/* default */"a"].isTokenErr(this.errorReason)){/* Force a refetch of a new token */auth._forceNewToken(null,null,authCb);}else{auth._ensureValidAuthCredentials(false,authCb);}}};/**
	 * There are three stages in connecting:
	 * - preference: if there is a cached transport preference, we try to connect
	 *   on that. If that fails or times out we abort the attempt, remove the
	 *   preference and fall back to base. If it succeeds, we try upgrading it if
	 *   needed (will only be in the case where the preference is xhrs and the
	 *   browser supports ws).
	 * - base: we try to connect with the best transport that we think will
	 *   never fail for this browser (usually this is xhr_polling; for very old
	 *   browsers will be jsonp, for node will be comet). If it doesn't work, we
	 *   try fallback hosts.
	 * - upgrade: given a connected transport, we see if there are any better
	 *   ones, and if so, try to upgrade to them.
	 *
	 * connectImpl works out what stage you're at (which is purely a function of
	 * the current connection state and whether there are any stored preferences),
	 * and dispatches accordingly. After a transport has been set pending,
	 * tryATransport calls connectImpl to see if there's another stage to be done.
	 * */ConnectionManager.prototype.connectImpl=function(transportParams,connectCount){var state=this.state.state;if(state!==this.states.connecting.state&&state!==this.states.connected.state){/* Only keep trying as long as in the 'connecting' state (or 'connected'
			 * for upgrading). Any operation can put us into 'disconnected' to cancel
			 * connection attempts and wait before retrying, or 'failed' to fail. */_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.connectImpl()','Must be in connecting state to connect (or connected to upgrade), but was '+state);}else if(this.pendingTransports.length){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.connectImpl()','Transports '+this.pendingTransports[0].toString()+' currently pending; taking no action');}else if(state==this.states.connected.state){this.upgradeIfNeeded(transportParams);}else if(this.transports.length>1&&this.getTransportPreference()){this.connectPreference(transportParams);}else{this.connectBase(transportParams,connectCount);}};ConnectionManager.prototype.connectPreference=function(transportParams){var preference=this.getTransportPreference(),self=this,preferenceTimeoutExpired=false;if(!_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrIn(this.transports,preference)){this.unpersistTransportPreference();this.connectImpl(transportParams);}_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.connectPreference()','Trying to connect with stored transport preference '+preference);var preferenceTimeout=setTimeout(function(){preferenceTimeoutExpired=true;if(!(self.state.state===self.states.connected.state)){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.connectPreference()','Shortcircuit connection attempt with '+preference+' failed; clearing preference and trying from scratch');/* Abort all connection attempts. (This also disconnects the active
				 * protocol, but none exists if we're not in the connected state) */self.disconnectAllTransports();/* Be quite agressive about clearing the stored preference if ever it doesn't work */self.unpersistTransportPreference();}self.connectImpl(transportParams);},this.options.timeouts.preferenceConnectTimeout);/* For connectPreference, just use the main host. If host fallback is needed, do it in connectBase.
		 * The wstransport it will substitute the httphost for an appropriate wshost */transportParams.host=self.httpHosts[0];self.tryATransport(transportParams,preference,function(fatal,transport){clearTimeout(preferenceTimeout);if(preferenceTimeoutExpired&&transport){/* Viable, but too late - connectImpl() will already be trying
				* connectBase, and we weren't in upgrade mode. Just remove the
				* onconnected listener and get rid of it */transport.off();transport.disconnect();_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrDeleteValue(this.pendingTransports,transport);}else if(!transport&&!fatal){/* Preference failed in a transport-specific way. Try more */self.unpersistTransportPreference();self.connectImpl(transportParams);}/* If suceeded, or failed fatally, nothing to do */});};/**
	 * Try to establish a transport on the base transport (the best transport
	 * such that if it doesn't work, nothing will work) as determined through
	 * static feature detection, checking for network connectivity and trying
	 * fallback hosts if applicable.
	 * @param transportParams
	 */ConnectionManager.prototype.connectBase=function(transportParams,connectCount){var self=this,giveUp=function(err){self.notifyState({state:self.states.connecting.failState,error:err});},candidateHosts=this.httpHosts.slice(),hostAttemptCb=function(fatal,transport){if(connectCount!==self.connectCounter){return;}if(!transport&&!fatal){tryFallbackHosts();}};_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.connectBase()','Trying to connect with base transport '+this.baseTransport);/* first try to establish a connection with the priority host with http transport */var host=candidateHosts.shift();if(!host){giveUp(new _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__[/* default */"a"]('Unable to connect (no available host)',80003,404));return;}transportParams.host=host;/* this is what we'll be doing if the attempt for the main host fails */function tryFallbackHosts(){/* if there aren't any fallback hosts, fail */if(!candidateHosts.length){giveUp(new _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__[/* default */"a"]('Unable to connect (and no more fallback hosts to try)',80003,404));return;}/* before trying any fallback (or any remaining fallback) we decide if
			 * there is a problem with the ably host, or there is a general connectivity
			 * problem */platform_http__WEBPACK_IMPORTED_MODULE_12__[/* default */"a"].checkConnectivity(function(err,connectivity){if(connectCount!==self.connectCounter){return;}/* we know err won't happen but handle it here anyway */if(err){giveUp(err);return;}if(!connectivity){/* the internet isn't reachable, so don't try the fallback hosts */giveUp(new _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__[/* default */"a"]('Unable to connect (network unreachable)',80003,404));return;}/* the network is there, so there's a problem with the main host, or
				 * its dns. Try the fallback hosts. We could try them simultaneously but
				 * that would potentially cause a huge spike in load on the load balancer */transportParams.host=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrPopRandomElement(candidateHosts);self.tryATransport(transportParams,self.baseTransport,hostAttemptCb);});}if(this.forceFallbackHost&&candidateHosts.length){this.forceFallbackHost=false;tryFallbackHosts();return;}this.tryATransport(transportParams,this.baseTransport,hostAttemptCb);};ConnectionManager.prototype.getUpgradePossibilities=function(){/* returns the subset of upgradeTransports to the right of the current
		 * transport in upgradeTransports (if it's in there - if not, currentPosition
		 * will be -1, so return upgradeTransports.slice(0) == upgradeTransports */var current=this.activeProtocol.getTransport().shortName;var currentPosition=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrIndexOf(this.upgradeTransports,current);return this.upgradeTransports.slice(currentPosition+1);};ConnectionManager.prototype.upgradeIfNeeded=function(transportParams){var upgradePossibilities=this.getUpgradePossibilities(),self=this;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.upgradeIfNeeded()','upgrade possibilities: '+_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inspect(upgradePossibilities));if(!upgradePossibilities.length){return;}_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrForEach(upgradePossibilities,function(upgradeTransport){/* Note: the transport may mutate the params, so give each transport a fresh one */var upgradeTransportParams=self.createTransportParams(transportParams.host,'upgrade');self.tryATransport(upgradeTransportParams,upgradeTransport,noop);});};ConnectionManager.prototype.closeImpl=function(){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.closeImpl()','closing connection');this.cancelSuspendTimer();this.startTransitionTimer(this.states.closing);_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].safeArrForEach(this.pendingTransports,function(transport){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.closeImpl()','Closing pending transport: '+transport);if(transport)transport.close();});_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].safeArrForEach(this.proposedTransports,function(transport){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.closeImpl()','Disposing of proposed transport: '+transport);if(transport)transport.dispose();});if(this.activeProtocol){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.closeImpl()','Closing active transport: '+this.activeProtocol.getTransport());this.activeProtocol.getTransport().close();}/* If there was an active transport, this will probably be
		 * preempted by the notifyState call in deactivateTransport */this.notifyState({state:'closed'});};ConnectionManager.prototype.onAuthUpdated=function(tokenDetails,callback){var self=this;switch(this.state.state){case'connected':_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.onAuthUpdated()','Sending AUTH message on active transport');/* If there are any proposed/pending transports (eg an upgrade that
				 * isn't yet scheduled for activation) that hasn't yet started syncing,
				 * just to get rid of them & restart the upgrade with the new token, to
				 * avoid a race condition. (If it has started syncing, the AUTH will be
				 * queued until the upgrade is complete, so everything's fine) */if((this.pendingTransports.length||this.proposedTransports.length)&&self.state!==self.states.synchronizing){this.disconnectAllTransports(/* exceptActive: */true);var transportParams=this.activeProtocol.getTransport().params;_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){if(self.state.state==='connected'){self.upgradeIfNeeded(transportParams);}});}/* Do any transport-specific new-token action */this.activeProtocol.getTransport().onAuthUpdated(tokenDetails);var authMsg=_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].fromValues({action:actions.AUTH,auth:{accessToken:tokenDetails.token}});this.send(authMsg);/* The answer will come back as either a connectiondetails event
				 * (realtime sends a CONNECTED to asknowledge the reauth) or a
				 * statechange to failed */var successListener=function(){self.off(failureListener);callback(null,tokenDetails);};var failureListener=function(stateChange){if(stateChange.current==='failed'){self.off(successListener);self.off(failureListener);callback(stateChange.reason||self.getStateError());}};this.once('connectiondetails',successListener);this.on('connectionstate',failureListener);break;case'connecting':_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.onAuthUpdated()','Aborting current connection attempts in order to start again with the new auth details');this.disconnectAllTransports();/* fallthrough to add statechange listener */default:_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.onAuthUpdated()','Connection state is '+this.state.state+'; waiting until either connected or failed');var listener=function(stateChange){switch(stateChange.current){case'connected':self.off(listener);callback(null,tokenDetails);break;case'failed':case'closed':case'suspended':self.off(listener);callback(stateChange.reason||self.getStateError());break;default:/* ignore till we get either connected or failed */break;}};self.on('connectionstate',listener);if(this.state.state==='connecting'){/* can happen if in the connecting state but no transport was pending
					 * yet, so disconnectAllTransports did not trigger a disconnected state */self.startConnect();}else{self.requestState({state:'connecting'});}}};ConnectionManager.prototype.disconnectAllTransports=function(exceptActive){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.disconnectAllTransports()','Disconnecting all transports'+(exceptActive?' except the active transport':''));/* This will prevent any connection procedure in an async part of one of its early stages from continuing */this.connectCounter++;_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].safeArrForEach(this.pendingTransports,function(transport){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.disconnectAllTransports()','Disconnecting pending transport: '+transport);if(transport)transport.disconnect();});this.pendingTransports=[];_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].safeArrForEach(this.proposedTransports,function(transport){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.disconnectAllTransports()','Disposing of proposed transport: '+transport);if(transport)transport.dispose();});this.proposedTransports=[];if(this.activeProtocol&&!exceptActive){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.disconnectAllTransports()','Disconnecting active transport: '+this.activeProtocol.getTransport());this.activeProtocol.getTransport().disconnect();}/* No need to notify state disconnected; disconnecting the active transport
		 * will have that effect */};/******************
	 * event queueing
	 ******************/ConnectionManager.prototype.send=function(msg,queueEvent,callback){callback=callback||noop;var state=this.state;if(state.sendEvents){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.send()','sending event');this.sendImpl(new PendingMessage(msg,callback));return;}var shouldQueue=queueEvent&&state.queueEvents||state.forceQueueEvents;if(!shouldQueue){var err='rejecting event, queueEvent was '+queueEvent+', state was '+state.state;_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.send()',err);callback(this.errorReason||new _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__[/* default */"a"](err,90000,400));return;}if(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].shouldLog(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO)){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.send()','queueing msg; '+_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].stringify(msg));}this.queue(msg,callback);};ConnectionManager.prototype.sendImpl=function(pendingMessage){var msg=pendingMessage.message;/* If have already attempted to send this, resend with the same msgSerial,
		 * so Ably can dedup if the previous send succeeded */if(pendingMessage.ackRequired&&!pendingMessage.sendAttempted){msg.msgSerial=this.msgSerial++;this.setRecoveryKey();}try{this.activeProtocol.send(pendingMessage);}catch(e){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.sendImpl()','Unexpected exception in transport.send(): '+e.stack);}};function bundleWith(dest,src,maxSize){var action;if(dest.channel!==src.channel){/* RTL6d3 */return false;}if((action=dest.action)!==actions.PRESENCE&&action!==actions.MESSAGE){/* RTL6d - can only bundle messages or presence */return false;}if(action!==src.action){/* RTL6d4 */return false;}var kind=action===actions.PRESENCE?'presence':'messages',proposed=dest[kind].concat(src[kind]),size=_types_message__WEBPACK_IMPORTED_MODULE_13__[/* default */"a"].getMessagesSize(proposed);if(size>maxSize){/* RTL6d1 */return false;}if(!_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].allSame(proposed,'clientId')){/* RTL6d2 */return false;}if(!_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrEvery(proposed,function(msg){return!msg.id;})){/* RTL6d7 */return false;}/* we're good to go! */dest[kind]=proposed;return true;};ConnectionManager.prototype.queue=function(msg,callback){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.queue()','queueing event');var lastQueued=this.queuedMessages.last();var maxSize=this.options.maxMessageSize;/* If have already attempted to send a message, don't merge more messages
		 * into it, as if the previous send actually succeeded and realtime ignores
		 * the dup, they'll be lost */if(lastQueued&&!lastQueued.sendAttempted&&bundleWith(lastQueued.message,msg,maxSize)){if(!lastQueued.merged){lastQueued.callback=Object(_util_multicaster__WEBPACK_IMPORTED_MODULE_14__[/* default */"a"])([lastQueued.callback]);lastQueued.merged=true;}lastQueued.callback.push(callback);}else{this.queuedMessages.push(new PendingMessage(msg,callback));}};ConnectionManager.prototype.sendQueuedMessages=function(){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.sendQueuedMessages()','sending '+this.queuedMessages.count()+' queued messages');var pendingMessage;while(pendingMessage=this.queuedMessages.shift())this.sendImpl(pendingMessage);};ConnectionManager.prototype.queuePendingMessages=function(pendingMessages){if(pendingMessages&&pendingMessages.length){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.queuePendingMessages()','queueing '+pendingMessages.length+' pending messages');this.queuedMessages.prepend(pendingMessages);}};ConnectionManager.prototype.failQueuedMessages=function(err){var numQueued=this.queuedMessages.count();if(numQueued>0){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.failQueuedMessages()','failing '+numQueued+' queued messages, err = '+_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inspectError(err));this.queuedMessages.completeAllMessages(err);}};ConnectionManager.prototype.onChannelMessage=function(message,transport){var onActiveTransport=this.activeProtocol&&transport===this.activeProtocol.getTransport(),onUpgradeTransport=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrIn(this.pendingTransports,transport)&&this.state==this.states.synchronizing,notControlMsg=message.action===actions.MESSAGE||message.action===actions.PRESENCE;/* As the lib now has a period where the upgrade transport is synced but
		 * before it's become active (while waiting for the old one to become
		 * idle), message can validly arrive on it even though it isn't active */if(onActiveTransport||onUpgradeTransport){if(notControlMsg){var suppressed=this.setConnectionSerial(message);if(suppressed){return;}if(_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isDuplicate(message,this.mostRecentMsg)){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.onChannelMessage()','received message with different connectionSerial, but same message id as a previous; discarding; id = '+message.id);return;}this.mostRecentMsg=message;}this.realtime.channels.onChannelMessage(message);}else{// Message came in on a defunct transport. Allow only acks, nacks, & errors for outstanding
// messages,  no new messages (as sync has been sent on new transport so new messages will
// be resent there, or connection has been closed so don't want new messages)
if(_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrIndexOf([actions.ACK,actions.NACK,actions.ERROR],message.action)>-1){this.realtime.channels.onChannelMessage(message);}else{_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'ConnectionManager.onChannelMessage()','received message '+JSON.stringify(message)+'on defunct transport; discarding');}}};ConnectionManager.prototype.ping=function(transport,callback){/* if transport is specified, try that */if(transport){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.ping()','transport = '+transport);var onTimeout=function(){transport.off('heartbeat',onHeartbeat);callback(new _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__[/* default */"a"]('Timeout waiting for heartbeat response',50000,500));};var pingStart=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].now(),id=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].cheapRandStr();var onHeartbeat=function(responseId){if(responseId===id){transport.off('heartbeat',onHeartbeat);clearTimeout(timer);var responseTime=_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].now()-pingStart;callback(null,responseTime);}};var timer=setTimeout(onTimeout,this.options.timeouts.realtimeRequestTimeout);transport.on('heartbeat',onHeartbeat);transport.ping(id);return;}/* if we're not connected, don't attempt */if(this.state.state!=='connected'){callback(new _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__[/* default */"a"]('Unable to ping service; not connected',40000,400));return;}/* no transport was specified, so use the current (connected) one
		 * but ensure that we retry if the transport is superseded before we complete */var completed=false,self=this;var onPingComplete=function(err,responseTime){self.off('transport.active',onTransportActive);if(!completed){completed=true;callback(err,responseTime);}};var onTransportActive=function(){if(!completed){/* ensure that no callback happens for the currently outstanding operation */completed=true;/* repeat but picking up the new transport */_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){self.ping(null,callback);});}};this.on('transport.active',onTransportActive);this.ping(this.activeProtocol.getTransport(),onPingComplete);};ConnectionManager.prototype.abort=function(error){this.activeProtocol.getTransport().fail(error);};ConnectionManager.prototype.registerProposedTransport=function(transport){this.proposedTransports.push(transport);};ConnectionManager.prototype.getTransportPreference=function(){return this.transportPreference||haveWebStorage&&platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"].get(transportPreferenceName);};ConnectionManager.prototype.persistTransportPreference=function(transport){if(_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].arrIn(_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].upgradeTransports,transport.shortName)){this.transportPreference=transport.shortName;if(haveWebStorage){platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"].set(transportPreferenceName,transport.shortName);}}};ConnectionManager.prototype.unpersistTransportPreference=function(){this.transportPreference=null;if(haveWebStorage){platform_webstorage__WEBPACK_IMPORTED_MODULE_16__[/* default */"a"].remove(transportPreferenceName);}};/* This method is only used during connection attempts, so implements RSA4c1,
	 * RSA4c2, and RSA4d. In particular it is not invoked for
	 * serverside-triggered reauths or manual reauths, so RSA4c3 does not apply */ConnectionManager.prototype.actOnErrorFromAuthorize=function(err){if(err.code===40171){/* No way to reauth */this.notifyState({state:'failed',error:err});}else if(err.statusCode===403){var msg='Client configured authentication provider returned 403; failing the connection';_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.actOnErrorFromAuthorize()',msg);this.notifyState({state:'failed',error:new _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__[/* default */"a"](msg,80019,403,err)});}else{var msg='Client configured authentication provider request failed';_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'ConnectionManager.actOnErrorFromAuthorize',msg);this.notifyState({state:this.state.failState,error:new _types_errorinfo__WEBPACK_IMPORTED_MODULE_10__[/* default */"a"](msg,80019,401,err)});}};ConnectionManager.prototype.onConnectionDetailsUpdate=function(connectionDetails,transport){if(!connectionDetails){return;}this.connectionDetails=connectionDetails;if(connectionDetails.maxMessageSize){this.options.maxMessageSize=connectionDetails.maxMessageSize;}var clientId=connectionDetails.clientId;if(clientId){var err=this.realtime.auth._uncheckedSetClientId(clientId);if(err){_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'ConnectionManager.onConnectionDetailsUpdate()',err.message);/* Errors setting the clientId are fatal to the connection */transport.fail(err);return;}}var connectionStateTtl=connectionDetails.connectionStateTtl;if(connectionStateTtl){this.connectionStateTtl=connectionStateTtl;}this.maxIdleInterval=connectionDetails.maxIdleInterval;this.emit('connectiondetails',connectionDetails);};return ConnectionManager;}();/* harmony default export */__webpack_exports__["a"]=ConnectionManager;/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_193268__(17));/***/},/* 26 */ /***/function(module,__webpack_exports__,__nested_webpack_require_281313__){"use strict";/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_281313__(1);/* harmony import */var _util_eventemitter__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_281313__(7);/* harmony import */var _util_logger__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_281313__(0);var MessageQueue=function(){function MessageQueue(){_util_eventemitter__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].call(this);this.messages=[];}_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inherits(MessageQueue,_util_eventemitter__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"]);MessageQueue.prototype.count=function(){return this.messages.length;};MessageQueue.prototype.push=function(message){this.messages.push(message);};MessageQueue.prototype.shift=function(){return this.messages.shift();};MessageQueue.prototype.last=function(){return this.messages[this.messages.length-1];};MessageQueue.prototype.copyAll=function(){return this.messages.slice();};MessageQueue.prototype.append=function(messages){this.messages.push.apply(this.messages,messages);};MessageQueue.prototype.prepend=function(messages){this.messages.unshift.apply(this.messages,messages);};MessageQueue.prototype.completeMessages=function(serial,count,err){_util_logger__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].LOG_MICRO,'MessageQueue.completeMessages()','serial = '+serial+'; count = '+count);err=err||null;var messages=this.messages;var first=messages[0];if(first){var startSerial=first.message.msgSerial;var endSerial=serial+count;/* the serial of the first message that is *not* the subject of this call */if(endSerial>startSerial){var completeMessages=messages.splice(0,endSerial-startSerial);for(var i=0;i<completeMessages.length;i++){completeMessages[i].callback(err);}}if(messages.length==0)this.emit('idle');}};MessageQueue.prototype.completeAllMessages=function(err){this.completeMessages(0,Number.MAX_SAFE_INTEGER||Number.MAX_VALUE,err);};MessageQueue.prototype.clear=function(){_util_logger__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].LOG_MICRO,'MessageQueue.clear()','clearing '+this.messages.length+' messages');this.messages=[];this.emit('idle');};return MessageQueue;}();/* harmony default export */__webpack_exports__["a"]=MessageQueue;/***/},/* 27 */ /***/function(module,__webpack_exports__,__nested_webpack_require_283763__){"use strict";/* WEBPACK VAR INJECTION */(function(global){/* harmony import */var _common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_283763__(1);/* harmony import */var _common_lib_util_eventemitter__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_283763__(7);/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_283763__(3);/* harmony import */var _common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_283763__(2);/* harmony import */var platform_http__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_283763__(6);/* harmony import */var _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_5__=__nested_webpack_require_283763__(0);/* harmony import */var _common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_6__=__nested_webpack_require_283763__(5);/* harmony import */var platform_bufferutils__WEBPACK_IMPORTED_MODULE_7__=__nested_webpack_require_283763__(4);/* harmony import */var _util_domevent__WEBPACK_IMPORTED_MODULE_8__=__nested_webpack_require_283763__(35);var XHRRequest=function(){var noop=function(){};var idCounter=0;var pendingRequests={};var REQ_SEND=0,REQ_RECV=1,REQ_RECV_POLL=2,REQ_RECV_STREAM=3;function clearPendingRequests(){for(var id in pendingRequests)pendingRequests[id].dispose();}var isIE=typeof global!=='undefined'&&global.XDomainRequest;function ieVersion(){var match=navigator.userAgent.toString().match(/MSIE\s([\d.]+)/);return match&&Number(match[1]);}function needJsonEnvelope(){/* IE 10 xhr bug: http://stackoverflow.com/a/16320339 */var version;return isIE&&(version=ieVersion())&&version===10;}function getHeader(xhr,header){return xhr.getResponseHeader&&xhr.getResponseHeader(header);}/* Safari mysteriously returns 'Identity' for transfer-encoding when in fact
	 * it is 'chunked'. So instead, decide that it is chunked when
	 * transfer-encoding is present or content-length is absent.  ('or' because
	 * when using http2 streaming, there's no transfer-encoding header, but can
	 * still deduce streaming from lack of content-length) */function isEncodingChunked(xhr){return xhr.getResponseHeader&&(xhr.getResponseHeader('transfer-encoding')||!xhr.getResponseHeader('content-length'));}function getHeadersAsObject(xhr){var headerPairs=_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].trim(xhr.getAllResponseHeaders()).split('\r\n'),headers={};for(var i=0;i<headerPairs.length;i++){var parts=_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].arrMap(headerPairs[i].split(':'),_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].trim);headers[parts[0].toLowerCase()]=parts[1];}return headers;}function XHRRequest(uri,headers,params,body,requestMode,timeouts,method){_common_lib_util_eventemitter__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].call(this);params=params||{};params.rnd=_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].cheapRandStr();if(needJsonEnvelope()&&!params.envelope)params.envelope='json';this.uri=uri+_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].toQueryString(params);this.headers=headers||{};this.body=body;this.method=method?method.toUpperCase():_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isEmptyArg(body)?'GET':'POST';this.requestMode=requestMode;this.timeouts=timeouts;this.timedOut=false;this.requestComplete=false;pendingRequests[this.id=String(++idCounter)]=this;}_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inherits(XHRRequest,_common_lib_util_eventemitter__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"]);var createRequest=XHRRequest.createRequest=function(uri,headers,params,body,requestMode,timeouts,method){/* XHR requests are used either with the context being a realtime
		 * transport, or with timeouts passed in (for when used by a rest client),
		 * or completely standalone.  Use the appropriate timeouts in each case */timeouts=timeouts||_common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"].TIMEOUTS;return new XHRRequest(uri,headers,_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].copy(params),body,requestMode,timeouts,method);};XHRRequest.prototype.complete=function(err,body,headers,unpacked,statusCode){if(!this.requestComplete){this.requestComplete=true;if(!err&&body){this.emit('data',body);}this.emit('complete',err,body,headers,unpacked,statusCode);this.dispose();}};XHRRequest.prototype.abort=function(){this.dispose();};XHRRequest.prototype.exec=function(){var timeout=this.requestMode==REQ_SEND?this.timeouts.httpRequestTimeout:this.timeouts.recvTimeout,self=this,timer=this.timer=setTimeout(function(){self.timedOut=true;xhr.abort();},timeout),body=this.body,method=this.method,headers=this.headers,xhr=this.xhr=new XMLHttpRequest(),accept=headers['accept'],responseType='text';if(!accept){headers['accept']='application/json';}else if(accept.indexOf('application/x-msgpack')===0){responseType='arraybuffer';}if(body){var contentType=headers['content-type']||(headers['content-type']='application/json');if(contentType.indexOf('application/json')>-1&&typeof body!='string')body=JSON.stringify(body);}xhr.open(method,this.uri,true);xhr.responseType=responseType;if('authorization'in headers){xhr.withCredentials=true;}for(var h in headers)xhr.setRequestHeader(h,headers[h]);var errorHandler=function(errorEvent,message,code,statusCode){var errorMessage=message+' (event type: '+errorEvent.type+')'+(self.xhr.statusText?', current statusText is '+self.xhr.statusText:'');_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].LOG_ERROR,'Request.on'+errorEvent.type+'()',errorMessage);self.complete(new _common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"](errorMessage,code,statusCode));};xhr.onerror=function(errorEvent){errorHandler(errorEvent,'XHR error occurred',null,400);};xhr.onabort=function(errorEvent){if(self.timedOut){errorHandler(errorEvent,'Request aborted due to request timeout expiring',null,408);}else{errorHandler(errorEvent,'Request cancelled',null,400);}};xhr.ontimeout=function(errorEvent){errorHandler(errorEvent,'Request timed out',null,408);};var streaming,statusCode,responseBody,contentType,successResponse,streamPos=0,unpacked=false;function onResponse(){clearTimeout(timer);successResponse=statusCode<400;if(statusCode==204){self.complete(null,null,null,null,statusCode);return;}streaming=self.requestMode==REQ_RECV_STREAM&&successResponse&&isEncodingChunked(xhr);}function onEnd(){try{var contentType=getHeader(xhr,'content-type'),headers,responseBody,/* Be liberal in what we accept; buggy auth servers may respond
					 * without the correct contenttype, but assume they're still
					 * responding with json */json=contentType?contentType.indexOf('application/json')>=0:xhr.responseType=='text';if(json){/* If we requested msgpack but server responded with json, then since
					 * we set the responseType expecting msgpack, the response will be
					 * an ArrayBuffer containing json */responseBody=xhr.responseType==='arraybuffer'?platform_bufferutils__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].utf8Decode(xhr.response):String(xhr.responseText);if(responseBody.length){responseBody=JSON.parse(responseBody);}unpacked=true;}else{responseBody=xhr.response;}if(responseBody.response!==undefined){/* unwrap JSON envelope */statusCode=responseBody.statusCode;successResponse=statusCode<400;headers=responseBody.headers;responseBody=responseBody.response;}else{headers=getHeadersAsObject(xhr);}}catch(e){self.complete(new _common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"]('Malformed response body from server: '+e.message,null,400));return;}/* If response is an array, it's an array of protocol messages -- even if
			 * is contains an error action (hence the nonsuccess statuscode), we can
			 * consider the request to have succeeded, just pass it on to
			 * onProtocolMessage to decide what to do */if(successResponse||_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isArray(responseBody)){self.complete(null,responseBody,headers,unpacked,statusCode);return;}var err=responseBody.error&&_common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].fromValues(responseBody.error);if(!err){err=new _common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"]('Error response received from server: '+statusCode+' body was: '+_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inspect(responseBody),null,statusCode);}self.complete(err,responseBody,headers,unpacked,statusCode);}function onProgress(){responseBody=xhr.responseText;var bodyEnd=responseBody.length-1,idx,chunk;while(streamPos<bodyEnd&&(idx=responseBody.indexOf('\n',streamPos))>-1){chunk=responseBody.slice(streamPos,idx);streamPos=idx+1;onChunk(chunk);}}function onChunk(chunk){try{chunk=JSON.parse(chunk);}catch(e){self.complete(new _common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"]('Malformed response body from server: '+e.message,null,400));return;}self.emit('data',chunk);}function onStreamEnd(){onProgress();self.streamComplete=true;_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].nextTick(function(){self.complete();});}xhr.onreadystatechange=function(){var readyState=xhr.readyState;if(readyState<3)return;if(xhr.status!==0){if(statusCode===undefined){statusCode=xhr.status;/* IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450 */if(statusCode===1223)statusCode=204;onResponse();}if(readyState==3&&streaming){onProgress();}else if(readyState==4){if(streaming)onStreamEnd();else onEnd();}}};xhr.send(body);};XHRRequest.prototype.dispose=function(){var xhr=this.xhr;if(xhr){xhr.onreadystatechange=xhr.onerror=xhr.onabort=xhr.ontimeout=noop;this.xhr=null;var timer=this.timer;if(timer){clearTimeout(timer);this.timer=null;}if(!this.requestComplete)xhr.abort();}delete pendingRequests[this.id];};if(platform__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].xhrSupported){if(typeof _util_domevent__WEBPACK_IMPORTED_MODULE_8__[/* default */"a"]==='object'){_util_domevent__WEBPACK_IMPORTED_MODULE_8__[/* default */"a"].addUnloadListener(clearPendingRequests);}if(typeof platform_http__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"]!=='undefined'){platform_http__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].supportsAuthHeaders=true;platform_http__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].Request=function(method,rest,uri,headers,params,body,callback){var req=createRequest(uri,headers,params,body,REQ_SEND,rest&&rest.options.timeouts,method);req.once('complete',callback);req.exec();return req;};platform_http__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].checkConnectivity=function(callback){var upUrl=_common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"].internetUpUrl;_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].LOG_MICRO,'(XHRRequest)Http.checkConnectivity()','Sending; '+upUrl);platform_http__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].getUri(null,upUrl,null,null,function(err,responseText){var result=!err&&responseText.replace(/\n/,'')=='yes';_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].LOG_MICRO,'(XHRRequest)Http.checkConnectivity()','Result: '+result);callback(null,result);});};}}return XHRRequest;}();/* harmony default export */__webpack_exports__["a"]=XHRRequest;/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_283763__(17));/***/},/* 28 */ /***/function(module,exports,__nested_webpack_require_295435__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_295435__(12),__nested_webpack_require_295435__(10),__nested_webpack_require_295435__(46),__nested_webpack_require_295435__(18),__nested_webpack_require_295435__(37),__nested_webpack_require_295435__(36),__nested_webpack_require_295435__(29),__nested_webpack_require_295435__(30),__nested_webpack_require_295435__(31),__nested_webpack_require_295435__(47),__nested_webpack_require_295435__(48));}else{}})(this,function(CryptoJS){return CryptoJS;});/***/},/* 29 */ /***/function(module,exports,__nested_webpack_require_295896__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_295896__(12));}else{}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var C_enc=C.enc;var Utf8=C_enc.Utf8;var C_algo=C.algo;/**
	     * HMAC algorithm.
	     */var HMAC=C_algo.HMAC=Base.extend({/**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */init:function(hasher,key){// Init hasher
hasher=this._hasher=new hasher.init();// Convert string to WordArray, else assume WordArray already
if(typeof key=='string'){key=Utf8.parse(key);}// Shortcuts
var hasherBlockSize=hasher.blockSize;var hasherBlockSizeBytes=hasherBlockSize*4;// Allow arbitrary length keys
if(key.sigBytes>hasherBlockSizeBytes){key=hasher.finalize(key);}// Clamp excess bits
key.clamp();// Clone key for inner and outer pads
var oKey=this._oKey=key.clone();var iKey=this._iKey=key.clone();// Shortcuts
var oKeyWords=oKey.words;var iKeyWords=iKey.words;// XOR keys with pad constants
for(var i=0;i<hasherBlockSize;i++){oKeyWords[i]^=0x5c5c5c5c;iKeyWords[i]^=0x36363636;}oKey.sigBytes=iKey.sigBytes=hasherBlockSizeBytes;// Set initial values
this.reset();},/**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */reset:function(){// Shortcut
var hasher=this._hasher;// Reset
hasher.reset();hasher.update(this._iKey);},/**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */update:function(messageUpdate){this._hasher.update(messageUpdate);// Chainable
return this;},/**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */finalize:function(messageUpdate){// Shortcut
var hasher=this._hasher;// Compute HMAC
var innerHash=hasher.finalize(messageUpdate);hasher.reset();var hmac=hasher.finalize(this._oKey.clone().concat(innerHash));return hmac;}});})();});/***/},/* 30 */ /***/function(module,exports,__nested_webpack_require_298845__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_298845__(12),__nested_webpack_require_298845__(37),__nested_webpack_require_298845__(29));}else{}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var WordArray=C_lib.WordArray;var C_algo=C.algo;var MD5=C_algo.MD5;/**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */var EvpKDF=C_algo.EvpKDF=Base.extend({/**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */cfg:Base.extend({keySize:128/32,hasher:MD5,iterations:1}),/**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */init:function(cfg){this.cfg=this.cfg.extend(cfg);},/**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */compute:function(password,salt){var block;// Shortcut
var cfg=this.cfg;// Init hasher
var hasher=cfg.hasher.create();// Initial values
var derivedKey=WordArray.create();// Shortcuts
var derivedKeyWords=derivedKey.words;var keySize=cfg.keySize;var iterations=cfg.iterations;// Generate key
while(derivedKeyWords.length<keySize){if(block){hasher.update(block);}block=hasher.update(password).finalize(salt);hasher.reset();// Iterations
for(var i=1;i<iterations;i++){block=hasher.finalize(block);hasher.reset();}derivedKey.concat(block);}derivedKey.sigBytes=keySize*4;return derivedKey;}});/**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */C.EvpKDF=function(password,salt,cfg){return EvpKDF.create(cfg).compute(password,salt);};})();return CryptoJS.EvpKDF;});/***/},/* 31 */ /***/function(module,exports,__nested_webpack_require_301940__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_301940__(12),__nested_webpack_require_301940__(30));}else{}})(this,function(CryptoJS){/**
	 * Cipher core components.
	 */CryptoJS.lib.Cipher||function(undefined){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var WordArray=C_lib.WordArray;var BufferedBlockAlgorithm=C_lib.BufferedBlockAlgorithm;var C_enc=C.enc;var Utf8=C_enc.Utf8;var Base64=C_enc.Base64;var C_algo=C.algo;var EvpKDF=C_algo.EvpKDF;/**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */var Cipher=C_lib.Cipher=BufferedBlockAlgorithm.extend({/**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */cfg:Base.extend(),/**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */createEncryptor:function(key,cfg){return this.create(this._ENC_XFORM_MODE,key,cfg);},/**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */createDecryptor:function(key,cfg){return this.create(this._DEC_XFORM_MODE,key,cfg);},/**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */init:function(xformMode,key,cfg){// Apply config defaults
this.cfg=this.cfg.extend(cfg);// Store transform mode and key
this._xformMode=xformMode;this._key=key;// Set initial values
this.reset();},/**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */reset:function(){// Reset data buffer
BufferedBlockAlgorithm.reset.call(this);// Perform concrete-cipher logic
this._doReset();},/**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */process:function(dataUpdate){// Append
this._append(dataUpdate);// Process available blocks
return this._process();},/**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */finalize:function(dataUpdate){// Final data update
if(dataUpdate){this._append(dataUpdate);}// Perform concrete-cipher logic
var finalProcessedData=this._doFinalize();return finalProcessedData;},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,/**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */_createHelper:function(){function selectCipherStrategy(key){if(typeof key=='string'){return PasswordBasedCipher;}else{return SerializableCipher;}}return function(cipher){return{encrypt:function(message,key,cfg){return selectCipherStrategy(key).encrypt(cipher,message,key,cfg);},decrypt:function(ciphertext,key,cfg){return selectCipherStrategy(key).decrypt(cipher,ciphertext,key,cfg);}};};}()});/**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */var StreamCipher=C_lib.StreamCipher=Cipher.extend({_doFinalize:function(){// Process partial blocks
var finalProcessedBlocks=this._process(!!'flush');return finalProcessedBlocks;},blockSize:1});/**
	     * Mode namespace.
	     */var C_mode=C.mode={};/**
	     * Abstract base block cipher mode template.
	     */var BlockCipherMode=C_lib.BlockCipherMode=Base.extend({/**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */createEncryptor:function(cipher,iv){return this.Encryptor.create(cipher,iv);},/**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */createDecryptor:function(cipher,iv){return this.Decryptor.create(cipher,iv);},/**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */init:function(cipher,iv){this._cipher=cipher;this._iv=iv;}});/**
	     * Cipher Block Chaining mode.
	     */var CBC=C_mode.CBC=function(){/**
	         * Abstract base CBC mode.
	         */var CBC=BlockCipherMode.extend();/**
	         * CBC encryptor.
	         */CBC.Encryptor=CBC.extend({/**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */processBlock:function(words,offset){// Shortcuts
var cipher=this._cipher;var blockSize=cipher.blockSize;// XOR and encrypt
xorBlock.call(this,words,offset,blockSize);cipher.encryptBlock(words,offset);// Remember this block to use with next block
this._prevBlock=words.slice(offset,offset+blockSize);}});/**
	         * CBC decryptor.
	         */CBC.Decryptor=CBC.extend({/**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */processBlock:function(words,offset){// Shortcuts
var cipher=this._cipher;var blockSize=cipher.blockSize;// Remember this block to use with next block
var thisBlock=words.slice(offset,offset+blockSize);// Decrypt and XOR
cipher.decryptBlock(words,offset);xorBlock.call(this,words,offset,blockSize);// This block becomes the previous block
this._prevBlock=thisBlock;}});function xorBlock(words,offset,blockSize){var block;// Shortcut
var iv=this._iv;// Choose mixing block
if(iv){block=iv;// Remove IV for subsequent blocks
this._iv=undefined;}else{block=this._prevBlock;}// XOR blocks
for(var i=0;i<blockSize;i++){words[offset+i]^=block[i];}}return CBC;}();/**
	     * Padding namespace.
	     */var C_pad=C.pad={};/**
	     * PKCS #5/7 padding strategy.
	     */var Pkcs7=C_pad.Pkcs7={/**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */pad:function(data,blockSize){// Shortcut
var blockSizeBytes=blockSize*4;// Count padding bytes
var nPaddingBytes=blockSizeBytes-data.sigBytes%blockSizeBytes;// Create padding word
var paddingWord=nPaddingBytes<<24|nPaddingBytes<<16|nPaddingBytes<<8|nPaddingBytes;// Create padding
var paddingWords=[];for(var i=0;i<nPaddingBytes;i+=4){paddingWords.push(paddingWord);}var padding=WordArray.create(paddingWords,nPaddingBytes);// Add padding
data.concat(padding);},/**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */unpad:function(data){// Get number of padding bytes from last byte
var nPaddingBytes=data.words[data.sigBytes-1>>>2]&0xff;// Remove padding
data.sigBytes-=nPaddingBytes;}};/**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */var BlockCipher=C_lib.BlockCipher=Cipher.extend({/**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */cfg:Cipher.cfg.extend({mode:CBC,padding:Pkcs7}),reset:function(){var modeCreator;// Reset cipher
Cipher.reset.call(this);// Shortcuts
var cfg=this.cfg;var iv=cfg.iv;var mode=cfg.mode;// Reset block mode
if(this._xformMode==this._ENC_XFORM_MODE){modeCreator=mode.createEncryptor;}else/* if (this._xformMode == this._DEC_XFORM_MODE) */{modeCreator=mode.createDecryptor;// Keep at least one block in the buffer for unpadding
this._minBufferSize=1;}if(this._mode&&this._mode.__creator==modeCreator){this._mode.init(this,iv&&iv.words);}else{this._mode=modeCreator.call(mode,this,iv&&iv.words);this._mode.__creator=modeCreator;}},_doProcessBlock:function(words,offset){this._mode.processBlock(words,offset);},_doFinalize:function(){var finalProcessedBlocks;// Shortcut
var padding=this.cfg.padding;// Finalize
if(this._xformMode==this._ENC_XFORM_MODE){// Pad data
padding.pad(this._data,this.blockSize);// Process final blocks
finalProcessedBlocks=this._process(!!'flush');}else/* if (this._xformMode == this._DEC_XFORM_MODE) */{// Process final blocks
finalProcessedBlocks=this._process(!!'flush');// Unpad data
padding.unpad(finalProcessedBlocks);}return finalProcessedBlocks;},blockSize:128/32});/**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */var CipherParams=C_lib.CipherParams=Base.extend({/**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */init:function(cipherParams){this.mixIn(cipherParams);},/**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */toString:function(formatter){return(formatter||this.formatter).stringify(this);}});/**
	     * Format namespace.
	     */var C_format=C.format={};/**
	     * OpenSSL formatting strategy.
	     */var OpenSSLFormatter=C_format.OpenSSL={/**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */stringify:function(cipherParams){var wordArray;// Shortcuts
var ciphertext=cipherParams.ciphertext;var salt=cipherParams.salt;// Format
if(salt){wordArray=WordArray.create([0x53616c74,0x65645f5f]).concat(salt).concat(ciphertext);}else{wordArray=ciphertext;}return wordArray.toString(Base64);},/**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */parse:function(openSSLStr){var salt;// Parse base64
var ciphertext=Base64.parse(openSSLStr);// Shortcut
var ciphertextWords=ciphertext.words;// Test for salt
if(ciphertextWords[0]==0x53616c74&&ciphertextWords[1]==0x65645f5f){// Extract salt
salt=WordArray.create(ciphertextWords.slice(2,4));// Remove salt from ciphertext
ciphertextWords.splice(0,4);ciphertext.sigBytes-=16;}return CipherParams.create({ciphertext:ciphertext,salt:salt});}};/**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */var SerializableCipher=C_lib.SerializableCipher=Base.extend({/**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */cfg:Base.extend({format:OpenSSLFormatter}),/**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */encrypt:function(cipher,message,key,cfg){// Apply config defaults
cfg=this.cfg.extend(cfg);// Encrypt
var encryptor=cipher.createEncryptor(key,cfg);var ciphertext=encryptor.finalize(message);// Shortcut
var cipherCfg=encryptor.cfg;// Create and return serializable cipher params
return CipherParams.create({ciphertext:ciphertext,key:key,iv:cipherCfg.iv,algorithm:cipher,mode:cipherCfg.mode,padding:cipherCfg.padding,blockSize:cipher.blockSize,formatter:cfg.format});},/**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */decrypt:function(cipher,ciphertext,key,cfg){// Apply config defaults
cfg=this.cfg.extend(cfg);// Convert string to CipherParams
ciphertext=this._parse(ciphertext,cfg.format);// Decrypt
var plaintext=cipher.createDecryptor(key,cfg).finalize(ciphertext.ciphertext);return plaintext;},/**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */_parse:function(ciphertext,format){if(typeof ciphertext=='string'){return format.parse(ciphertext,this);}else{return ciphertext;}}});/**
	     * Key derivation function namespace.
	     */var C_kdf=C.kdf={};/**
	     * OpenSSL key derivation function.
	     */var OpenSSLKdf=C_kdf.OpenSSL={/**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */execute:function(password,keySize,ivSize,salt){// Generate random salt
if(!salt){salt=WordArray.random(64/8);}// Derive key and IV
var key=EvpKDF.create({keySize:keySize+ivSize}).compute(password,salt);// Separate key and IV
var iv=WordArray.create(key.words.slice(keySize),ivSize*4);key.sigBytes=keySize*4;// Return params
return CipherParams.create({key:key,iv:iv,salt:salt});}};/**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */var PasswordBasedCipher=C_lib.PasswordBasedCipher=SerializableCipher.extend({/**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */cfg:SerializableCipher.cfg.extend({kdf:OpenSSLKdf}),/**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */encrypt:function(cipher,message,password,cfg){// Apply config defaults
cfg=this.cfg.extend(cfg);// Derive key and other params
var derivedParams=cfg.kdf.execute(password,cipher.keySize,cipher.ivSize);// Add IV to config
cfg.iv=derivedParams.iv;// Encrypt
var ciphertext=SerializableCipher.encrypt.call(this,cipher,message,derivedParams.key,cfg);// Mix in derived params
ciphertext.mixIn(derivedParams);return ciphertext;},/**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */decrypt:function(cipher,ciphertext,password,cfg){// Apply config defaults
cfg=this.cfg.extend(cfg);// Convert string to CipherParams
ciphertext=this._parse(ciphertext,cfg.format);// Derive key and other params
var derivedParams=cfg.kdf.execute(password,cipher.keySize,cipher.ivSize,ciphertext.salt);// Add IV to config
cfg.iv=derivedParams.iv;// Decrypt
var plaintext=SerializableCipher.decrypt.call(this,cipher,ciphertext,derivedParams.key,cfg);return plaintext;}});}();});/***/},/* 32 */ /***/function(module,exports,__nested_webpack_require_325861__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_325861__(12));}else{}})(this,function(CryptoJS){return CryptoJS.enc.Hex;});/***/},/* 33 */ /***/function(module,exports,__nested_webpack_require_326090__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_326090__(12));}else{}})(this,function(CryptoJS){return CryptoJS.enc.Utf8;});/***/},/* 34 */ /***/function(module,__webpack_exports__,__nested_webpack_require_326332__){"use strict";/* harmony import */var _types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_326332__(8);/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_326332__(1);/* harmony import */var _util_eventemitter__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_326332__(7);/* harmony import */var _util_logger__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_326332__(0);/* harmony import */var _messagequeue__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_326332__(26);/* harmony import */var _types_errorinfo__WEBPACK_IMPORTED_MODULE_5__=__nested_webpack_require_326332__(2);var Protocol=function(){var actions=_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].Action;function Protocol(transport){_util_eventemitter__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].call(this);this.transport=transport;this.messageQueue=new _messagequeue__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"]();var self=this;transport.on('ack',function(serial,count){self.onAck(serial,count);});transport.on('nack',function(serial,count,err){self.onNack(serial,count,err);});}_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inherits(Protocol,_util_eventemitter__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"]);Protocol.prototype.onAck=function(serial,count){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MICRO,'Protocol.onAck()','serial = '+serial+'; count = '+count);this.messageQueue.completeMessages(serial,count);};Protocol.prototype.onNack=function(serial,count,err){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_ERROR,'Protocol.onNack()','serial = '+serial+'; count = '+count+'; err = '+_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inspectError(err));if(!err){err=new _types_errorinfo__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"]('Unable to send message; channel not responding',50001,500);}this.messageQueue.completeMessages(serial,count,err);};Protocol.prototype.onceIdle=function(listener){var messageQueue=this.messageQueue;if(messageQueue.count()===0){listener();return;}messageQueue.once('idle',listener);};Protocol.prototype.send=function(pendingMessage){if(pendingMessage.ackRequired){this.messageQueue.push(pendingMessage);}if(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].shouldLog(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MICRO)){_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].LOG_MICRO,'Protocol.send()','sending msg; '+_types_protocolmessage__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].stringify(pendingMessage.message));}pendingMessage.sendAttempted=true;this.transport.send(pendingMessage.message);};Protocol.prototype.getTransport=function(){return this.transport;};Protocol.prototype.getPendingMessages=function(){return this.messageQueue.copyAll();};Protocol.prototype.clearPendingMessages=function(){return this.messageQueue.clear();};Protocol.prototype.finish=function(){var transport=this.transport;this.onceIdle(function(){transport.disconnect();});};function PendingMessage(message,callback){this.message=message;this.callback=callback;this.merged=false;var action=message.action;this.sendAttempted=false;this.ackRequired=action==actions.MESSAGE||action==actions.PRESENCE;}Protocol.PendingMessage=PendingMessage;return Protocol;}();/* harmony default export */__webpack_exports__["a"]=Protocol;/***/},/* 35 */ /***/function(module,__webpack_exports__,__nested_webpack_require_329944__){"use strict";/* WEBPACK VAR INJECTION */(function(global){var DomEvent=function(){function DomEvent(){}DomEvent.addListener=function(target,event,listener){if(target.addEventListener){target.addEventListener(event,listener,false);}else{target.attachEvent('on'+event,function(){listener.apply(target,arguments);});}};DomEvent.removeListener=function(target,event,listener){if(target.removeEventListener){target.removeEventListener(event,listener,false);}else{target.detachEvent('on'+event,function(){listener.apply(target,arguments);});}};DomEvent.addMessageListener=function(target,listener){DomEvent.addListener(target,'message',listener);};DomEvent.removeMessageListener=function(target,listener){DomEvent.removeListener(target,'message',listener);};DomEvent.addUnloadListener=function(listener){DomEvent.addListener(global,'unload',listener);};return DomEvent;}();/* harmony default export */__webpack_exports__["a"]=DomEvent;/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_329944__(17));/***/},/* 36 */ /***/function(module,exports,__nested_webpack_require_331004__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_331004__(12));}else{}})(this,function(CryptoJS){(function(Math){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;// Initialization and round constants tables
var H=[];var K=[];// Compute constants
(function(){function isPrime(n){var sqrtN=Math.sqrt(n);for(var factor=2;factor<=sqrtN;factor++){if(!(n%factor)){return false;}}return true;}function getFractionalBits(n){return(n-(n|0))*0x100000000|0;}var n=2;var nPrime=0;while(nPrime<64){if(isPrime(n)){if(nPrime<8){H[nPrime]=getFractionalBits(Math.pow(n,1/2));}K[nPrime]=getFractionalBits(Math.pow(n,1/3));nPrime++;}n++;}})();// Reusable object
var W=[];/**
	     * SHA-256 hash algorithm.
	     */var SHA256=C_algo.SHA256=Hasher.extend({_doReset:function(){this._hash=new WordArray.init(H.slice(0));},_doProcessBlock:function(M,offset){// Shortcut
var H=this._hash.words;// Working variables
var a=H[0];var b=H[1];var c=H[2];var d=H[3];var e=H[4];var f=H[5];var g=H[6];var h=H[7];// Computation
for(var i=0;i<64;i++){if(i<16){W[i]=M[offset+i]|0;}else{var gamma0x=W[i-15];var gamma0=(gamma0x<<25|gamma0x>>>7)^(gamma0x<<14|gamma0x>>>18)^gamma0x>>>3;var gamma1x=W[i-2];var gamma1=(gamma1x<<15|gamma1x>>>17)^(gamma1x<<13|gamma1x>>>19)^gamma1x>>>10;W[i]=gamma0+W[i-7]+gamma1+W[i-16];}var ch=e&f^~e&g;var maj=a&b^a&c^b&c;var sigma0=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22);var sigma1=(e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25);var t1=h+sigma1+ch+K[i]+W[i];var t2=sigma0+maj;h=g;g=f;f=e;e=d+t1|0;d=c;c=b;b=a;a=t1+t2|0;}// Intermediate hash value
H[0]=H[0]+a|0;H[1]=H[1]+b|0;H[2]=H[2]+c|0;H[3]=H[3]+d|0;H[4]=H[4]+e|0;H[5]=H[5]+f|0;H[6]=H[6]+g|0;H[7]=H[7]+h|0;},_doFinalize:function(){// Shortcuts
var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;// Add padding
dataWords[nBitsLeft>>>5]|=0x80<<24-nBitsLeft%32;dataWords[(nBitsLeft+64>>>9<<4)+14]=Math.floor(nBitsTotal/0x100000000);dataWords[(nBitsLeft+64>>>9<<4)+15]=nBitsTotal;data.sigBytes=dataWords.length*4;// Hash final blocks
this._process();// Return final computed hash
return this._hash;},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone;}});/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */C.SHA256=Hasher._createHelper(SHA256);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */C.HmacSHA256=Hasher._createHmacHelper(SHA256);})(Math);return CryptoJS.SHA256;});/***/},/* 37 */ /***/function(module,exports,__nested_webpack_require_334199__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_334199__(12));}else{}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;// Reusable object
var W=[];/**
	     * SHA-1 hash algorithm.
	     */var SHA1=C_algo.SHA1=Hasher.extend({_doReset:function(){this._hash=new WordArray.init([0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0]);},_doProcessBlock:function(M,offset){// Shortcut
var H=this._hash.words;// Working variables
var a=H[0];var b=H[1];var c=H[2];var d=H[3];var e=H[4];// Computation
for(var i=0;i<80;i++){if(i<16){W[i]=M[offset+i]|0;}else{var n=W[i-3]^W[i-8]^W[i-14]^W[i-16];W[i]=n<<1|n>>>31;}var t=(a<<5|a>>>27)+e+W[i];if(i<20){t+=(b&c|~b&d)+0x5a827999;}else if(i<40){t+=(b^c^d)+0x6ed9eba1;}else if(i<60){t+=(b&c|b&d|c&d)-0x70e44324;}else/* if (i < 80) */{t+=(b^c^d)-0x359d3e2a;}e=d;d=c;c=b<<30|b>>>2;b=a;a=t;}// Intermediate hash value
H[0]=H[0]+a|0;H[1]=H[1]+b|0;H[2]=H[2]+c|0;H[3]=H[3]+d|0;H[4]=H[4]+e|0;},_doFinalize:function(){// Shortcuts
var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;// Add padding
dataWords[nBitsLeft>>>5]|=0x80<<24-nBitsLeft%32;dataWords[(nBitsLeft+64>>>9<<4)+14]=Math.floor(nBitsTotal/0x100000000);dataWords[(nBitsLeft+64>>>9<<4)+15]=nBitsTotal;data.sigBytes=dataWords.length*4;// Hash final blocks
this._process();// Return final computed hash
return this._hash;},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone;}});/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */C.SHA1=Hasher._createHelper(SHA1);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */C.HmacSHA1=Hasher._createHmacHelper(SHA1);})();return CryptoJS.SHA1;});/***/},/* 38 */ /***/function(module,exports,__nested_webpack_require_336681__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_336681__(12),__nested_webpack_require_336681__(36),__nested_webpack_require_336681__(29));}else{}})(this,function(CryptoJS){return CryptoJS.HmacSHA256;});/***/},/* 39 */ /***/function(module,__webpack_exports__,__nested_webpack_require_336973__){"use strict";/* WEBPACK VAR INJECTION */(function(global){/* harmony import */var _common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_336973__(1);/* harmony import */var _common_lib_transport_comettransport__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_336973__(15);/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_336973__(3);/* harmony import */var _common_lib_util_eventemitter__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_336973__(7);/* harmony import */var platform_http__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_336973__(6);/* harmony import */var _common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_5__=__nested_webpack_require_336973__(2);/* harmony import */var _common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_6__=__nested_webpack_require_336973__(5);/* harmony import */var _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_7__=__nested_webpack_require_336973__(0);var JSONPTransport=function(connectionManager){var noop=function(){};/* Can't just use window.Ably, as that won't exist if using the commonjs version. */var _=global._ablyjs_jsonp={};/* express strips out parantheses from the callback!
	 * Kludge to still alow its responses to work, while not keeping the
	 * function form for normal use and not cluttering window.Ably
	 * https://github.com/expressjs/express/blob/5b4d4b4ab1324743534fbcd4709f4e75bb4b4e9d/lib/response.js#L305
	 */_._=function(id){return _['_'+id]||noop;};var idCounter=1;var head=null;var shortName='jsonp';/* public constructor */function JSONPTransport(connectionManager,auth,params){params.stream=false;_common_lib_transport_comettransport__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].call(this,connectionManager,auth,params);this.shortName=shortName;}_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inherits(JSONPTransport,_common_lib_transport_comettransport__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"]);JSONPTransport.isAvailable=function(){return platform__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].jsonpSupported&&platform__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].allowComet;};if(JSONPTransport.isAvailable()){connectionManager.supportedTransports[shortName]=JSONPTransport;}if(platform__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].jsonpSupported){head=document.getElementsByTagName('head')[0];}/* connectivity check; since this has a hard-coded callback id,
	 * we just make sure that we handle concurrent requests (but the
	 * connectionmanager should ensure this doesn't happen anyway */var checksInProgress=null;global.JSONPTransport=JSONPTransport;JSONPTransport.tryConnect=function(connectionManager,auth,params,callback){var transport=new JSONPTransport(connectionManager,auth,params);var errorCb=function(err){callback({event:this.event,error:err});};transport.on(['failed','disconnected'],errorCb);transport.on('preconnect',function(){_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MINOR,'JSONPTransport.tryConnect()','viable transport '+transport);transport.off(['failed','disconnected'],errorCb);callback(null,transport);});transport.connect();};JSONPTransport.prototype.toString=function(){return'JSONPTransport; uri='+this.baseUri+'; isConnected='+this.isConnected;};var createRequest=JSONPTransport.prototype.createRequest=function(uri,headers,params,body,requestMode,timeouts,method){/* JSONP requests are used either with the context being a realtime
		 * transport, or with timeouts passed in (for when used by a rest client),
		 * or completely standalone.  Use the appropriate timeouts in each case */timeouts=this&&this.timeouts||timeouts||_common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"].TIMEOUTS;return new Request(undefined,uri,headers,_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].copy(params),body,requestMode,timeouts,method);};function Request(id,uri,headers,params,body,requestMode,timeouts,method){_common_lib_util_eventemitter__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].call(this);if(id===undefined)id=idCounter++;this.id=id;this.uri=uri;this.params=params||{};this.params.rnd=_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].cheapRandStr();if(headers){/* JSONP doesn't allow headers. Cherry-pick a couple to turn into qs params */if(headers['X-Ably-Version'])this.params.v=headers['X-Ably-Version'];if(headers['X-Ably-Lib'])this.params.lib=headers['X-Ably-Lib'];}this.body=body;this.method=method;this.requestMode=requestMode;this.timeouts=timeouts;this.requestComplete=false;}_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inherits(Request,_common_lib_util_eventemitter__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"]);Request.prototype.exec=function(){var id=this.id,body=this.body,method=this.method,uri=this.uri,params=this.params,self=this;params.callback='_ablyjs_jsonp._('+id+')';params.envelope='jsonp';if(body){params.body=body;}if(method&&method!=='get'){params.method=method;}var script=this.script=document.createElement('script');var src=uri+_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].toQueryString(params);script.src=src;if(script.src.split('/').slice(-1)[0]!==src.split('/').slice(-1)[0]){/* The src has been truncated. Can't abort, but can at least emit an
			 * error so the user knows what's gone wrong. (Can't compare strings
			 * directly as src may have a port, script.src won't) */_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_ERROR,'JSONP Request.exec()','Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param');}script.async=true;script.type='text/javascript';script.charset='UTF-8';script.onerror=function(err){self.complete(new _common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"]('JSONP script error (event: '+_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].inspect(err)+')',null,400));};_['_'+id]=function(message){if(message.statusCode){/* Handle as enveloped jsonp, as all jsonp transport uses should be */var response=message.response;if(message.statusCode==204){self.complete(null,null,null,message.statusCode);}else if(!response){self.complete(new _common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"]('Invalid server response: no envelope detected',null,500));}else if(message.statusCode<400||_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].isArray(response)){/* If response is an array, it's an array of protocol messages -- even if
					 * it contains an error action (hence the nonsuccess statuscode), we can
					 * consider the request to have succeeded, just pass it on to
					 * onProtocolMessage to decide what to do */self.complete(null,response,message.headers,message.statusCode);}else{var err=response.error||new _common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"]('Error response received from server',null,message.statusCode);self.complete(err);}}else{/* Handle as non-enveloped -- as will be eg from a customer's authUrl server */self.complete(null,message);}};var timeout=this.requestMode==_common_lib_transport_comettransport__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].REQ_SEND?this.timeouts.httpRequestTimeout:this.timeouts.recvTimeout;this.timer=setTimeout(function(){self.abort();},timeout);head.insertBefore(script,head.firstChild);};Request.prototype.complete=function(err,body,headers,statusCode){headers=headers||{};if(!this.requestComplete){this.requestComplete=true;var contentType;if(body){contentType=typeof body=='string'?'text/plain':'application/json';headers['content-type']=contentType;this.emit('data',body);}this.emit('complete',err,body,headers,/* unpacked: */true,statusCode);this.dispose();}};Request.prototype.abort=function(){this.dispose();};Request.prototype.dispose=function(){var timer=this.timer;if(timer){clearTimeout(timer);this.timer=null;}var script=this.script;if(script.parentNode)script.parentNode.removeChild(script);delete _[this.id];this.emit('disposed');};if(platform__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].jsonpSupported&&!platform_http__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].Request){platform_http__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].Request=function(method,rest,uri,headers,params,body,callback){var req=createRequest(uri,headers,params,body,_common_lib_transport_comettransport__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].REQ_SEND,rest&&rest.options.timeouts,method);req.once('complete',callback);_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].nextTick(function(){req.exec();});return req;};platform_http__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].checkConnectivity=function(callback){var upUrl=_common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"].jsonpInternetUpUrl;if(checksInProgress){checksInProgress.push(callback);return;}checksInProgress=[callback];_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'(JSONP)Http.checkConnectivity()','Sending; '+upUrl);var req=new Request('isTheInternetUp',upUrl,null,null,null,_common_lib_transport_comettransport__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].REQ_SEND,_common_lib_util_defaults__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"].TIMEOUTS);req.once('complete',function(err,response){var result=!err&&response;_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_7__[/* default */"a"].LOG_MICRO,'(JSONP)Http.checkConnectivity()','Result: '+result);for(var i=0;i<checksInProgress.length;i++)checksInProgress[i](null,result);checksInProgress=null;});_common_lib_util_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].nextTick(function(){req.exec();});};}return JSONPTransport;};/* harmony default export */__webpack_exports__["a"]=JSONPTransport;/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_336973__(17));/***/},/* 40 */ /***/function(module,__webpack_exports__,__nested_webpack_require_347227__){"use strict";/* harmony import */var platform__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_347227__(3);/* harmony import */var _util_utils__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_347227__(1);/* harmony import */var _transport__WEBPACK_IMPORTED_MODULE_2__=__nested_webpack_require_347227__(20);/* harmony import */var _util_defaults__WEBPACK_IMPORTED_MODULE_3__=__nested_webpack_require_347227__(5);/* harmony import */var _util_logger__WEBPACK_IMPORTED_MODULE_4__=__nested_webpack_require_347227__(0);/* harmony import */var _types_protocolmessage__WEBPACK_IMPORTED_MODULE_5__=__nested_webpack_require_347227__(8);/* harmony import */var _types_errorinfo__WEBPACK_IMPORTED_MODULE_6__=__nested_webpack_require_347227__(2);var WebSocketTransport=function(connectionManager){var WebSocket=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].WebSocket;var shortName='web_socket';/* public constructor */function WebSocketTransport(connectionManager,auth,params){this.shortName=shortName;/* If is a browser, can't detect pings, so request protocol heartbeats */params.heartbeats=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].useProtocolHeartbeats;_transport__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].call(this,connectionManager,auth,params);this.wsHost=_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].getHost(params.options,params.host,true);}_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inherits(WebSocketTransport,_transport__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"]);WebSocketTransport.isAvailable=function(){return!!WebSocket;};if(WebSocketTransport.isAvailable())connectionManager.supportedTransports[shortName]=WebSocketTransport;WebSocketTransport.tryConnect=function(connectionManager,auth,params,callback){var transport=new WebSocketTransport(connectionManager,auth,params);var errorCb=function(err){callback({event:this.event,error:err});};transport.on(['failed','disconnected'],errorCb);transport.on('wsopen',function(){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MINOR,'WebSocketTransport.tryConnect()','viable transport '+transport);transport.off(['failed','disconnected'],errorCb);callback(null,transport);});transport.connect();};WebSocketTransport.prototype.createWebSocket=function(uri,connectParams){var paramCount=0;if(connectParams){for(var key in connectParams)uri+=(paramCount++?'&':'?')+key+'='+connectParams[key];}this.uri=uri;return new WebSocket(uri);};WebSocketTransport.prototype.toString=function(){return'WebSocketTransport; uri='+this.uri;};WebSocketTransport.prototype.connect=function(){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MINOR,'WebSocketTransport.connect()','starting');_transport__WEBPACK_IMPORTED_MODULE_2__[/* default */"a"].prototype.connect.call(this);var self=this,params=this.params,options=params.options;var wsScheme=options.tls?'wss://':'ws://';var wsUri=wsScheme+this.wsHost+':'+_util_defaults__WEBPACK_IMPORTED_MODULE_3__[/* default */"a"].getPort(options)+'/';_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MINOR,'WebSocketTransport.connect()','uri: '+wsUri);this.auth.getAuthParams(function(err,authParams){if(self.isDisposed){return;}var paramStr='';for(var param in authParams)paramStr+=' '+param+': '+authParams[param]+';';_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MINOR,'WebSocketTransport.connect()','authParams:'+paramStr+' err: '+err);if(err){self.disconnect(err);return;}var connectParams=params.getConnectParams(authParams);try{var wsConnection=self.wsConnection=self.createWebSocket(wsUri,connectParams);wsConnection.binaryType=platform__WEBPACK_IMPORTED_MODULE_0__[/* default */"a"].binaryType;wsConnection.onopen=function(){self.onWsOpen();};wsConnection.onclose=function(ev){self.onWsClose(ev);};wsConnection.onmessage=function(ev){self.onWsData(ev.data);};wsConnection.onerror=function(ev){self.onWsError(ev);};if(wsConnection.on){/* node; browsers currently don't have a general eventemitter and can't detect
					 * pings. Also, no need to reply with a pong explicitly, ws lib handles that */wsConnection.on('ping',function(){self.onActivity();});}}catch(e){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_ERROR,'WebSocketTransport.connect()','Unexpected exception creating websocket: err = '+(e.stack||e.message));self.disconnect(e);}});};WebSocketTransport.prototype.send=function(message){var wsConnection=this.wsConnection;if(!wsConnection){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_ERROR,'WebSocketTransport.send()','No socket connection');return;}try{wsConnection.send(_types_protocolmessage__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].serialize(message,this.params.format));}catch(e){var msg='Exception from ws connection when trying to send: '+_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].inspectError(e);_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_ERROR,'WebSocketTransport.send()',msg);/* Don't try to request a disconnect, that'll just involve sending data
			 * down the websocket again. Just finish the transport. */this.finish('disconnected',new _types_errorinfo__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"](msg,50000,500));}};WebSocketTransport.prototype.onWsData=function(data){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MICRO,'WebSocketTransport.onWsData()','data received; length = '+data.length+'; type = '+typeof data);try{this.onProtocolMessage(_types_protocolmessage__WEBPACK_IMPORTED_MODULE_5__[/* default */"a"].deserialize(data,this.format));}catch(e){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_ERROR,'WebSocketTransport.onWsData()','Unexpected exception handing channel message: '+e.stack);}};WebSocketTransport.prototype.onWsOpen=function(){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MINOR,'WebSocketTransport.onWsOpen()','opened WebSocket');this.emit('wsopen');};WebSocketTransport.prototype.onWsClose=function(ev){var wasClean,code,reason;if(typeof ev=='object'){/* W3C spec-compatible */wasClean=ev.wasClean;code=ev.code;}else/*if(typeof(ev) == 'number')*/{/* ws in node */code=ev;wasClean=code==1000;}delete this.wsConnection;if(wasClean){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MINOR,'WebSocketTransport.onWsClose()','Cleanly closed WebSocket');var err=new _types_errorinfo__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"]('Websocket closed',80003,400);this.finish('disconnected',err);}else{var msg='Unclean disconnection of WebSocket ; code = '+code,err=new _types_errorinfo__WEBPACK_IMPORTED_MODULE_6__[/* default */"a"](msg,80003,400);_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MINOR,'WebSocketTransport.onWsClose()',msg);this.finish('disconnected',err);}this.emit('disposed');};WebSocketTransport.prototype.onWsError=function(err){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MINOR,'WebSocketTransport.onError()','Error from WebSocket: '+err.message);/* Wait a tick before aborting: if the websocket was connected, this event
		 * will be immediately followed by an onclose event with a close code. Allow
		 * that to close it (so we see the close code) rather than anticipating it */var self=this;_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){self.disconnect(err);});};WebSocketTransport.prototype.dispose=function(){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MINOR,'WebSocketTransport.dispose()','');this.isDisposed=true;var wsConnection=this.wsConnection;if(wsConnection){/* Ignore any messages that come through after dispose() is called but before
			 * websocket is actually closed. (mostly would be harmless, but if it's a
			 * CONNECTED, it'll re-tick isConnected and cause all sorts of havoc) */wsConnection.onmessage=function(){};delete this.wsConnection;/* defer until the next event loop cycle before closing the socket,
			 * giving some implementations the opportunity to send any outstanding close message */_util_utils__WEBPACK_IMPORTED_MODULE_1__[/* default */"a"].nextTick(function(){_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].logAction(_util_logger__WEBPACK_IMPORTED_MODULE_4__[/* default */"a"].LOG_MICRO,'WebSocketTransport.dispose()','closing websocket');wsConnection.close();});}};return WebSocketTransport;};/* harmony default export */__webpack_exports__["a"]=WebSocketTransport;/***/},/* 41 */ /***/function(module,__webpack_exports__,__nested_webpack_require_356623__){"use strict";// EXTERNAL MODULE: ./browser/lib/transport/jsonptransport.js
var jsonptransport=__nested_webpack_require_356623__(39);// EXTERNAL MODULE: ./common/lib/util/utils.js
var utils=__nested_webpack_require_356623__(1);// EXTERNAL MODULE: ./common/lib/util/logger.js
var logger=__nested_webpack_require_356623__(0);// EXTERNAL MODULE: ./browser/fragments/platform-browser.js
var platform_browser=__nested_webpack_require_356623__(3);// EXTERNAL MODULE: ./common/lib/transport/comettransport.js
var comettransport=__nested_webpack_require_356623__(15);// EXTERNAL MODULE: ./browser/lib/transport/xhrrequest.js
var xhrrequest=__nested_webpack_require_356623__(27);// CONCATENATED MODULE: ./browser/lib/transport/xhrpollingtransport.js
var xhrpollingtransport_XHRPollingTransport=function(connectionManager){var shortName='xhr_polling';function XHRPollingTransport(connectionManager,auth,params){params.stream=false;comettransport["a"/* default */].call(this,connectionManager,auth,params);this.shortName=shortName;}utils["a"/* default */].inherits(XHRPollingTransport,comettransport["a"/* default */]);XHRPollingTransport.isAvailable=function(){return platform_browser["a"/* default */].xhrSupported&&platform_browser["a"/* default */].allowComet;};XHRPollingTransport.tryConnect=function(connectionManager,auth,params,callback){var transport=new XHRPollingTransport(connectionManager,auth,params);var errorCb=function(err){callback({event:this.event,error:err});};transport.on(['failed','disconnected'],errorCb);transport.on('preconnect',function(){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'XHRPollingTransport.tryConnect()','viable transport '+transport);transport.off(['failed','disconnected'],errorCb);callback(null,transport);});transport.connect();};XHRPollingTransport.prototype.toString=function(){return'XHRPollingTransport; uri='+this.baseUri+'; isConnected='+this.isConnected;};XHRPollingTransport.prototype.createRequest=function(uri,headers,params,body,requestMode){return xhrrequest["a"/* default */].createRequest(uri,headers,params,body,requestMode,this.timeouts);};if(typeof connectionManager!=='undefined'&&XHRPollingTransport.isAvailable()){connectionManager.supportedTransports[shortName]=XHRPollingTransport;}return XHRPollingTransport;};/* harmony default export */var xhrpollingtransport=xhrpollingtransport_XHRPollingTransport;// CONCATENATED MODULE: ./browser/lib/transport/xhrstreamingtransport.js
var xhrstreamingtransport_XHRStreamingTransport=function(connectionManager){var shortName='xhr_streaming';/* public constructor */function XHRStreamingTransport(connectionManager,auth,params){comettransport["a"/* default */].call(this,connectionManager,auth,params);this.shortName=shortName;}utils["a"/* default */].inherits(XHRStreamingTransport,comettransport["a"/* default */]);XHRStreamingTransport.isAvailable=function(){return platform_browser["a"/* default */].xhrSupported&&platform_browser["a"/* default */].streamingSupported&&platform_browser["a"/* default */].allowComet;};XHRStreamingTransport.tryConnect=function(connectionManager,auth,params,callback){var transport=new XHRStreamingTransport(connectionManager,auth,params);var errorCb=function(err){callback({event:this.event,error:err});};transport.on(['failed','disconnected'],errorCb);transport.on('preconnect',function(){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'XHRStreamingTransport.tryConnect()','viable transport '+transport);transport.off(['failed','disconnected'],errorCb);callback(null,transport);});transport.connect();};XHRStreamingTransport.prototype.toString=function(){return'XHRStreamingTransport; uri='+this.baseUri+'; isConnected='+this.isConnected;};XHRStreamingTransport.prototype.createRequest=function(uri,headers,params,body,requestMode){return xhrrequest["a"/* default */].createRequest(uri,headers,params,body,requestMode,this.timeouts);};if(typeof connectionManager!=='undefined'&&XHRStreamingTransport.isAvailable()){connectionManager.supportedTransports[shortName]=XHRStreamingTransport;}return XHRStreamingTransport;};/* harmony default export */var xhrstreamingtransport=xhrstreamingtransport_XHRStreamingTransport;// CONCATENATED MODULE: ./browser/lib/transport/index.js
/* harmony default export */var lib_transport=__webpack_exports__["a"]=[jsonptransport["a"/* default */],xhrpollingtransport,xhrstreamingtransport];/***/},/* 42 */ /***/function(module,exports,__nested_webpack_require_361008__){/* WEBPACK VAR INJECTION */(function(global){var scope=typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||window;var apply=Function.prototype.apply;// DOM APIs, for completeness
exports.setTimeout=function(){return new Timeout(apply.call(setTimeout,scope,arguments),clearTimeout);};exports.setInterval=function(){return new Timeout(apply.call(setInterval,scope,arguments),clearInterval);};exports.clearTimeout=exports.clearInterval=function(timeout){if(timeout){timeout.close();}};function Timeout(id,clearFn){this._id=id;this._clearFn=clearFn;}Timeout.prototype.unref=Timeout.prototype.ref=function(){};Timeout.prototype.close=function(){this._clearFn.call(scope,this._id);};// Does not start the time, just sets up the members needed.
exports.enroll=function(item,msecs){clearTimeout(item._idleTimeoutId);item._idleTimeout=msecs;};exports.unenroll=function(item){clearTimeout(item._idleTimeoutId);item._idleTimeout=-1;};exports._unrefActive=exports.active=function(item){clearTimeout(item._idleTimeoutId);var msecs=item._idleTimeout;if(msecs>=0){item._idleTimeoutId=setTimeout(function onTimeout(){if(item._onTimeout)item._onTimeout();},msecs);}};// setimmediate attaches itself to the global object
__nested_webpack_require_361008__(43);// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate=typeof self!=="undefined"&&self.setImmediate||typeof global!=="undefined"&&global.setImmediate||this&&this.setImmediate;exports.clearImmediate=typeof self!=="undefined"&&self.clearImmediate||typeof global!=="undefined"&&global.clearImmediate||this&&this.clearImmediate;/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_361008__(17));/***/},/* 43 */ /***/function(module,exports,__nested_webpack_require_362855__){/* WEBPACK VAR INJECTION */(function(global,process){(function(global,undefined){"use strict";if(global.setImmediate){return;}var nextHandle=1;// Spec says greater than zero
var tasksByHandle={};var currentlyRunningATask=false;var doc=global.document;var registerImmediate;function setImmediate(callback){// Callback can either be a function or a string
if(typeof callback!=="function"){callback=new Function(""+callback);}// Copy function arguments
var args=new Array(arguments.length-1);for(var i=0;i<args.length;i++){args[i]=arguments[i+1];}// Store and register the task
var task={callback:callback,args:args};tasksByHandle[nextHandle]=task;registerImmediate(nextHandle);return nextHandle++;}function clearImmediate(handle){delete tasksByHandle[handle];}function run(task){var callback=task.callback;var args=task.args;switch(args.length){case 0:callback();break;case 1:callback(args[0]);break;case 2:callback(args[0],args[1]);break;case 3:callback(args[0],args[1],args[2]);break;default:callback.apply(undefined,args);break;}}function runIfPresent(handle){// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
// So if we're currently running a task, we'll need to delay this invocation.
if(currentlyRunningATask){// Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
// "too much recursion" error.
setTimeout(runIfPresent,0,handle);}else{var task=tasksByHandle[handle];if(task){currentlyRunningATask=true;try{run(task);}finally{clearImmediate(handle);currentlyRunningATask=false;}}}}function installNextTickImplementation(){registerImmediate=function(handle){process.nextTick(function(){runIfPresent(handle);});};}function canUsePostMessage(){// The test against `importScripts` prevents this implementation from being installed inside a web worker,
// where `global.postMessage` means something completely different and can't be used for this purpose.
if(global.postMessage&&!global.importScripts){var postMessageIsAsynchronous=true;var oldOnMessage=global.onmessage;global.onmessage=function(){postMessageIsAsynchronous=false;};global.postMessage("","*");global.onmessage=oldOnMessage;return postMessageIsAsynchronous;}}function installPostMessageImplementation(){// Installs an event handler on `global` for the `message` event: see
// * https://developer.mozilla.org/en/DOM/window.postMessage
// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
var messagePrefix="setImmediate$"+Math.random()+"$";var onGlobalMessage=function(event){if(event.source===global&&typeof event.data==="string"&&event.data.indexOf(messagePrefix)===0){runIfPresent(+event.data.slice(messagePrefix.length));}};if(global.addEventListener){global.addEventListener("message",onGlobalMessage,false);}else{global.attachEvent("onmessage",onGlobalMessage);}registerImmediate=function(handle){global.postMessage(messagePrefix+handle,"*");};}function installMessageChannelImplementation(){var channel=new MessageChannel();channel.port1.onmessage=function(event){var handle=event.data;runIfPresent(handle);};registerImmediate=function(handle){channel.port2.postMessage(handle);};}function installReadyStateChangeImplementation(){var html=doc.documentElement;registerImmediate=function(handle){// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
var script=doc.createElement("script");script.onreadystatechange=function(){runIfPresent(handle);script.onreadystatechange=null;html.removeChild(script);script=null;};html.appendChild(script);};}function installSetTimeoutImplementation(){registerImmediate=function(handle){setTimeout(runIfPresent,0,handle);};}// If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
var attachTo=Object.getPrototypeOf&&Object.getPrototypeOf(global);attachTo=attachTo&&attachTo.setTimeout?attachTo:global;// Don't get fooled by e.g. browserify environments.
if({}.toString.call(global.process)==="[object process]"){// For Node.js before 0.9
installNextTickImplementation();}else if(canUsePostMessage()){// For non-IE10 modern browsers
installPostMessageImplementation();}else if(global.MessageChannel){// For web workers, where supported
installMessageChannelImplementation();}else if(doc&&"onreadystatechange"in doc.createElement("script")){// For IE 6–8
installReadyStateChangeImplementation();}else{// For older browsers
installSetTimeoutImplementation();}attachTo.setImmediate=setImmediate;attachTo.clearImmediate=clearImmediate;})(typeof self==="undefined"?typeof global==="undefined"?this:global:self);/* WEBPACK VAR INJECTION */}).call(this,__nested_webpack_require_362855__(17),__nested_webpack_require_362855__(44));/***/},/* 44 */ /***/function(module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};/***/},/* 45 */ /***/function(module,exports){/***/},/* 46 */ /***/function(module,exports,__nested_webpack_require_372128__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_372128__(12));}else{}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_enc=C.enc;/**
	     * UTF-16 BE encoding strategy.
	     */var Utf16BE=C_enc.Utf16=C_enc.Utf16BE={/**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;// Convert
var utf16Chars=[];for(var i=0;i<sigBytes;i+=2){var codePoint=words[i>>>2]>>>16-i%4*8&0xffff;utf16Chars.push(String.fromCharCode(codePoint));}return utf16Chars.join('');},/**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */parse:function(utf16Str){// Shortcut
var utf16StrLength=utf16Str.length;// Convert
var words=[];for(var i=0;i<utf16StrLength;i++){words[i>>>1]|=utf16Str.charCodeAt(i)<<16-i%2*16;}return WordArray.create(words,utf16StrLength*2);}};/**
	     * UTF-16 LE encoding strategy.
	     */C_enc.Utf16LE={/**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;// Convert
var utf16Chars=[];for(var i=0;i<sigBytes;i+=2){var codePoint=swapEndian(words[i>>>2]>>>16-i%4*8&0xffff);utf16Chars.push(String.fromCharCode(codePoint));}return utf16Chars.join('');},/**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */parse:function(utf16Str){// Shortcut
var utf16StrLength=utf16Str.length;// Convert
var words=[];for(var i=0;i<utf16StrLength;i++){words[i>>>1]|=swapEndian(utf16Str.charCodeAt(i)<<16-i%2*16);}return WordArray.create(words,utf16StrLength*2);}};function swapEndian(word){return word<<8&0xff00ff00|word>>>8&0x00ff00ff;}})();return CryptoJS.enc.Utf16;});/***/},/* 47 */ /***/function(module,exports,__nested_webpack_require_375155__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_375155__(12),__nested_webpack_require_375155__(31));}else{}})(this,function(CryptoJS){(function(undefined){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var CipherParams=C_lib.CipherParams;var C_enc=C.enc;var Hex=C_enc.Hex;var C_format=C.format;var HexFormatter=C_format.Hex={/**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */stringify:function(cipherParams){return cipherParams.ciphertext.toString(Hex);},/**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */parse:function(input){var ciphertext=Hex.parse(input);return CipherParams.create({ciphertext:ciphertext});}};})();return CryptoJS.format.Hex;});/***/},/* 48 */ /***/function(module,exports,__nested_webpack_require_376629__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_376629__(12),__nested_webpack_require_376629__(18),__nested_webpack_require_376629__(49),__nested_webpack_require_376629__(30),__nested_webpack_require_376629__(31));}else{}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var BlockCipher=C_lib.BlockCipher;var C_algo=C.algo;// Lookup tables
var SBOX=[];var INV_SBOX=[];var SUB_MIX_0=[];var SUB_MIX_1=[];var SUB_MIX_2=[];var SUB_MIX_3=[];var INV_SUB_MIX_0=[];var INV_SUB_MIX_1=[];var INV_SUB_MIX_2=[];var INV_SUB_MIX_3=[];// Compute lookup tables
(function(){// Compute double table
var d=[];for(var i=0;i<256;i++){if(i<128){d[i]=i<<1;}else{d[i]=i<<1^0x11b;}}// Walk GF(2^8)
var x=0;var xi=0;for(var i=0;i<256;i++){// Compute sbox
var sx=xi^xi<<1^xi<<2^xi<<3^xi<<4;sx=sx>>>8^sx&0xff^0x63;SBOX[x]=sx;INV_SBOX[sx]=x;// Compute multiplication
var x2=d[x];var x4=d[x2];var x8=d[x4];// Compute sub bytes, mix columns tables
var t=d[sx]*0x101^sx*0x1010100;SUB_MIX_0[x]=t<<24|t>>>8;SUB_MIX_1[x]=t<<16|t>>>16;SUB_MIX_2[x]=t<<8|t>>>24;SUB_MIX_3[x]=t;// Compute inv sub bytes, inv mix columns tables
var t=x8*0x1010101^x4*0x10001^x2*0x101^x*0x1010100;INV_SUB_MIX_0[sx]=t<<24|t>>>8;INV_SUB_MIX_1[sx]=t<<16|t>>>16;INV_SUB_MIX_2[sx]=t<<8|t>>>24;INV_SUB_MIX_3[sx]=t;// Compute next counter
if(!x){x=xi=1;}else{x=x2^d[d[d[x8^x2]]];xi^=d[d[xi]];}}})();// Precomputed Rcon lookup
var RCON=[0x00,0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x1b,0x36];/**
	     * AES block cipher algorithm.
	     */var AES=C_algo.AES=BlockCipher.extend({_doReset:function(){var t;// Skip reset of nRounds has been set before and key did not change
if(this._nRounds&&this._keyPriorReset===this._key){return;}// Shortcuts
var key=this._keyPriorReset=this._key;var keyWords=key.words;var keySize=key.sigBytes/4;// Compute number of rounds
var nRounds=this._nRounds=keySize+6;// Compute number of key schedule rows
var ksRows=(nRounds+1)*4;// Compute key schedule
var keySchedule=this._keySchedule=[];for(var ksRow=0;ksRow<ksRows;ksRow++){if(ksRow<keySize){keySchedule[ksRow]=keyWords[ksRow];}else{t=keySchedule[ksRow-1];if(!(ksRow%keySize)){// Rot word
t=t<<8|t>>>24;// Sub word
t=SBOX[t>>>24]<<24|SBOX[t>>>16&0xff]<<16|SBOX[t>>>8&0xff]<<8|SBOX[t&0xff];// Mix Rcon
t^=RCON[ksRow/keySize|0]<<24;}else if(keySize>6&&ksRow%keySize==4){// Sub word
t=SBOX[t>>>24]<<24|SBOX[t>>>16&0xff]<<16|SBOX[t>>>8&0xff]<<8|SBOX[t&0xff];}keySchedule[ksRow]=keySchedule[ksRow-keySize]^t;}}// Compute inv key schedule
var invKeySchedule=this._invKeySchedule=[];for(var invKsRow=0;invKsRow<ksRows;invKsRow++){var ksRow=ksRows-invKsRow;if(invKsRow%4){var t=keySchedule[ksRow];}else{var t=keySchedule[ksRow-4];}if(invKsRow<4||ksRow<=4){invKeySchedule[invKsRow]=t;}else{invKeySchedule[invKsRow]=INV_SUB_MIX_0[SBOX[t>>>24]]^INV_SUB_MIX_1[SBOX[t>>>16&0xff]]^INV_SUB_MIX_2[SBOX[t>>>8&0xff]]^INV_SUB_MIX_3[SBOX[t&0xff]];}}},encryptBlock:function(M,offset){this._doCryptBlock(M,offset,this._keySchedule,SUB_MIX_0,SUB_MIX_1,SUB_MIX_2,SUB_MIX_3,SBOX);},decryptBlock:function(M,offset){// Swap 2nd and 4th rows
var t=M[offset+1];M[offset+1]=M[offset+3];M[offset+3]=t;this._doCryptBlock(M,offset,this._invKeySchedule,INV_SUB_MIX_0,INV_SUB_MIX_1,INV_SUB_MIX_2,INV_SUB_MIX_3,INV_SBOX);// Inv swap 2nd and 4th rows
var t=M[offset+1];M[offset+1]=M[offset+3];M[offset+3]=t;},_doCryptBlock:function(M,offset,keySchedule,SUB_MIX_0,SUB_MIX_1,SUB_MIX_2,SUB_MIX_3,SBOX){// Shortcut
var nRounds=this._nRounds;// Get input, add round key
var s0=M[offset]^keySchedule[0];var s1=M[offset+1]^keySchedule[1];var s2=M[offset+2]^keySchedule[2];var s3=M[offset+3]^keySchedule[3];// Key schedule row counter
var ksRow=4;// Rounds
for(var round=1;round<nRounds;round++){// Shift rows, sub bytes, mix columns, add round key
var t0=SUB_MIX_0[s0>>>24]^SUB_MIX_1[s1>>>16&0xff]^SUB_MIX_2[s2>>>8&0xff]^SUB_MIX_3[s3&0xff]^keySchedule[ksRow++];var t1=SUB_MIX_0[s1>>>24]^SUB_MIX_1[s2>>>16&0xff]^SUB_MIX_2[s3>>>8&0xff]^SUB_MIX_3[s0&0xff]^keySchedule[ksRow++];var t2=SUB_MIX_0[s2>>>24]^SUB_MIX_1[s3>>>16&0xff]^SUB_MIX_2[s0>>>8&0xff]^SUB_MIX_3[s1&0xff]^keySchedule[ksRow++];var t3=SUB_MIX_0[s3>>>24]^SUB_MIX_1[s0>>>16&0xff]^SUB_MIX_2[s1>>>8&0xff]^SUB_MIX_3[s2&0xff]^keySchedule[ksRow++];// Update state
s0=t0;s1=t1;s2=t2;s3=t3;}// Shift rows, sub bytes, add round key
var t0=(SBOX[s0>>>24]<<24|SBOX[s1>>>16&0xff]<<16|SBOX[s2>>>8&0xff]<<8|SBOX[s3&0xff])^keySchedule[ksRow++];var t1=(SBOX[s1>>>24]<<24|SBOX[s2>>>16&0xff]<<16|SBOX[s3>>>8&0xff]<<8|SBOX[s0&0xff])^keySchedule[ksRow++];var t2=(SBOX[s2>>>24]<<24|SBOX[s3>>>16&0xff]<<16|SBOX[s0>>>8&0xff]<<8|SBOX[s1&0xff])^keySchedule[ksRow++];var t3=(SBOX[s3>>>24]<<24|SBOX[s0>>>16&0xff]<<16|SBOX[s1>>>8&0xff]<<8|SBOX[s2&0xff])^keySchedule[ksRow++];// Set output
M[offset]=t0;M[offset+1]=t1;M[offset+2]=t2;M[offset+3]=t3;},keySize:256/32});/**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */C.AES=BlockCipher._createHelper(AES);})();return CryptoJS.AES;});/***/},/* 49 */ /***/function(module,exports,__nested_webpack_require_381799__){;(function(root,factory){if(true){// CommonJS
module.exports=exports=factory(__nested_webpack_require_381799__(12));}else{}})(this,function(CryptoJS){(function(Math){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;// Constants table
var T=[];// Compute constants
(function(){for(var i=0;i<64;i++){T[i]=Math.abs(Math.sin(i+1))*0x100000000|0;}})();/**
	     * MD5 hash algorithm.
	     */var MD5=C_algo.MD5=Hasher.extend({_doReset:function(){this._hash=new WordArray.init([0x67452301,0xefcdab89,0x98badcfe,0x10325476]);},_doProcessBlock:function(M,offset){// Swap endian
for(var i=0;i<16;i++){// Shortcuts
var offset_i=offset+i;var M_offset_i=M[offset_i];M[offset_i]=(M_offset_i<<8|M_offset_i>>>24)&0x00ff00ff|(M_offset_i<<24|M_offset_i>>>8)&0xff00ff00;}// Shortcuts
var H=this._hash.words;var M_offset_0=M[offset+0];var M_offset_1=M[offset+1];var M_offset_2=M[offset+2];var M_offset_3=M[offset+3];var M_offset_4=M[offset+4];var M_offset_5=M[offset+5];var M_offset_6=M[offset+6];var M_offset_7=M[offset+7];var M_offset_8=M[offset+8];var M_offset_9=M[offset+9];var M_offset_10=M[offset+10];var M_offset_11=M[offset+11];var M_offset_12=M[offset+12];var M_offset_13=M[offset+13];var M_offset_14=M[offset+14];var M_offset_15=M[offset+15];// Working varialbes
var a=H[0];var b=H[1];var c=H[2];var d=H[3];// Computation
a=FF(a,b,c,d,M_offset_0,7,T[0]);d=FF(d,a,b,c,M_offset_1,12,T[1]);c=FF(c,d,a,b,M_offset_2,17,T[2]);b=FF(b,c,d,a,M_offset_3,22,T[3]);a=FF(a,b,c,d,M_offset_4,7,T[4]);d=FF(d,a,b,c,M_offset_5,12,T[5]);c=FF(c,d,a,b,M_offset_6,17,T[6]);b=FF(b,c,d,a,M_offset_7,22,T[7]);a=FF(a,b,c,d,M_offset_8,7,T[8]);d=FF(d,a,b,c,M_offset_9,12,T[9]);c=FF(c,d,a,b,M_offset_10,17,T[10]);b=FF(b,c,d,a,M_offset_11,22,T[11]);a=FF(a,b,c,d,M_offset_12,7,T[12]);d=FF(d,a,b,c,M_offset_13,12,T[13]);c=FF(c,d,a,b,M_offset_14,17,T[14]);b=FF(b,c,d,a,M_offset_15,22,T[15]);a=GG(a,b,c,d,M_offset_1,5,T[16]);d=GG(d,a,b,c,M_offset_6,9,T[17]);c=GG(c,d,a,b,M_offset_11,14,T[18]);b=GG(b,c,d,a,M_offset_0,20,T[19]);a=GG(a,b,c,d,M_offset_5,5,T[20]);d=GG(d,a,b,c,M_offset_10,9,T[21]);c=GG(c,d,a,b,M_offset_15,14,T[22]);b=GG(b,c,d,a,M_offset_4,20,T[23]);a=GG(a,b,c,d,M_offset_9,5,T[24]);d=GG(d,a,b,c,M_offset_14,9,T[25]);c=GG(c,d,a,b,M_offset_3,14,T[26]);b=GG(b,c,d,a,M_offset_8,20,T[27]);a=GG(a,b,c,d,M_offset_13,5,T[28]);d=GG(d,a,b,c,M_offset_2,9,T[29]);c=GG(c,d,a,b,M_offset_7,14,T[30]);b=GG(b,c,d,a,M_offset_12,20,T[31]);a=HH(a,b,c,d,M_offset_5,4,T[32]);d=HH(d,a,b,c,M_offset_8,11,T[33]);c=HH(c,d,a,b,M_offset_11,16,T[34]);b=HH(b,c,d,a,M_offset_14,23,T[35]);a=HH(a,b,c,d,M_offset_1,4,T[36]);d=HH(d,a,b,c,M_offset_4,11,T[37]);c=HH(c,d,a,b,M_offset_7,16,T[38]);b=HH(b,c,d,a,M_offset_10,23,T[39]);a=HH(a,b,c,d,M_offset_13,4,T[40]);d=HH(d,a,b,c,M_offset_0,11,T[41]);c=HH(c,d,a,b,M_offset_3,16,T[42]);b=HH(b,c,d,a,M_offset_6,23,T[43]);a=HH(a,b,c,d,M_offset_9,4,T[44]);d=HH(d,a,b,c,M_offset_12,11,T[45]);c=HH(c,d,a,b,M_offset_15,16,T[46]);b=HH(b,c,d,a,M_offset_2,23,T[47]);a=II(a,b,c,d,M_offset_0,6,T[48]);d=II(d,a,b,c,M_offset_7,10,T[49]);c=II(c,d,a,b,M_offset_14,15,T[50]);b=II(b,c,d,a,M_offset_5,21,T[51]);a=II(a,b,c,d,M_offset_12,6,T[52]);d=II(d,a,b,c,M_offset_3,10,T[53]);c=II(c,d,a,b,M_offset_10,15,T[54]);b=II(b,c,d,a,M_offset_1,21,T[55]);a=II(a,b,c,d,M_offset_8,6,T[56]);d=II(d,a,b,c,M_offset_15,10,T[57]);c=II(c,d,a,b,M_offset_6,15,T[58]);b=II(b,c,d,a,M_offset_13,21,T[59]);a=II(a,b,c,d,M_offset_4,6,T[60]);d=II(d,a,b,c,M_offset_11,10,T[61]);c=II(c,d,a,b,M_offset_2,15,T[62]);b=II(b,c,d,a,M_offset_9,21,T[63]);// Intermediate hash value
H[0]=H[0]+a|0;H[1]=H[1]+b|0;H[2]=H[2]+c|0;H[3]=H[3]+d|0;},_doFinalize:function(){// Shortcuts
var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;// Add padding
dataWords[nBitsLeft>>>5]|=0x80<<24-nBitsLeft%32;var nBitsTotalH=Math.floor(nBitsTotal/0x100000000);var nBitsTotalL=nBitsTotal;dataWords[(nBitsLeft+64>>>9<<4)+15]=(nBitsTotalH<<8|nBitsTotalH>>>24)&0x00ff00ff|(nBitsTotalH<<24|nBitsTotalH>>>8)&0xff00ff00;dataWords[(nBitsLeft+64>>>9<<4)+14]=(nBitsTotalL<<8|nBitsTotalL>>>24)&0x00ff00ff|(nBitsTotalL<<24|nBitsTotalL>>>8)&0xff00ff00;data.sigBytes=(dataWords.length+1)*4;// Hash final blocks
this._process();// Shortcuts
var hash=this._hash;var H=hash.words;// Swap endian
for(var i=0;i<4;i++){// Shortcut
var H_i=H[i];H[i]=(H_i<<8|H_i>>>24)&0x00ff00ff|(H_i<<24|H_i>>>8)&0xff00ff00;}// Return final computed hash
return hash;},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone;}});function FF(a,b,c,d,x,s,t){var n=a+(b&c|~b&d)+x+t;return(n<<s|n>>>32-s)+b;}function GG(a,b,c,d,x,s,t){var n=a+(b&d|c&~d)+x+t;return(n<<s|n>>>32-s)+b;}function HH(a,b,c,d,x,s,t){var n=a+(b^c^d)+x+t;return(n<<s|n>>>32-s)+b;}function II(a,b,c,d,x,s,t){var n=a+(c^(b|~d))+x+t;return(n<<s|n>>>32-s)+b;}/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */C.MD5=Hasher._createHelper(MD5);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */C.HmacMD5=Hasher._createHmacHelper(MD5);})(Math);return CryptoJS.MD5;});/***/},/* 50 */ /***/function(module,__webpack_exports__,__nested_webpack_require_387524__){"use strict";// ESM COMPAT FLAG
__nested_webpack_require_387524__.r(__webpack_exports__);// EXTERNAL MODULE: ./browser/fragments/platform-browser.js
var platform_browser=__nested_webpack_require_387524__(3);// EXTERNAL MODULE: ./common/lib/util/utils.js
var utils=__nested_webpack_require_387524__(1);// EXTERNAL MODULE: ./common/lib/util/logger.js
var logger=__nested_webpack_require_387524__(0);// EXTERNAL MODULE: ./common/lib/util/defaults.js + 1 modules
var defaults=__nested_webpack_require_387524__(5);// EXTERNAL MODULE: ./common/lib/client/auth.js + 1 modules
var auth=__nested_webpack_require_387524__(14);// CONCATENATED MODULE: ./common/lib/types/devicedetails.js
var devicedetails_DeviceDetails=function(){function DeviceDetails(){this.id=undefined;this.deviceSecret=undefined;this.platform=undefined;this.formFactor=undefined;this.clientId=undefined;this.metadata=undefined;this.deviceIdentityToken=undefined;this.push={recipient:undefined,state:undefined,error:undefined};}/**
	 * Overload toJSON() to intercept JSON.stringify()
	 * @return {*}
	 */DeviceDetails.prototype.toJSON=function(){return{id:this.id,deviceSecret:this.deviceSecret,platform:this.platform,formFactor:this.formFactor,clientId:this.clientId,metadata:this.metadata,deviceIdentityToken:this.deviceIdentityToken,push:{recipient:this.push.recipient,state:this.push.state,error:this.push.error}};};DeviceDetails.prototype.toString=function(){var result='[DeviceDetails';if(this.id)result+='; id='+this.id;if(this.platform)result+='; platform='+this.platform;if(this.formFactor)result+='; formFactor='+this.formFactor;if(this.clientId)result+='; clientId='+this.clientId;if(this.metadata)result+='; metadata='+this.metadata;if(this.deviceIdentityToken)result+='; deviceIdentityToken='+JSON.stringify(this.deviceIdentityToken);if(this.push.recipient)result+='; push.recipient='+JSON.stringify(this.push.recipient);if(this.push.state)result+='; push.state='+this.push.state;if(this.push.error)result+='; push.error='+JSON.stringify(this.push.error);if(this.push.metadata)result+='; push.metadata='+this.push.metadata;result+=']';return result;};DeviceDetails.toRequestBody=utils["a"/* default */].encodeBody;DeviceDetails.fromResponseBody=function(body,format){if(format){body=utils["a"/* default */].decodeBody(body,format);}if(utils["a"/* default */].isArray(body)){return DeviceDetails.fromValuesArray(body);}else{return DeviceDetails.fromValues(body);}};DeviceDetails.fromValues=function(values){values.error=values.error&&ErrorInfo.fromValues(values.error);return utils["a"/* default */].mixin(new DeviceDetails(),values);};DeviceDetails.fromValuesArray=function(values){var count=values.length,result=new Array(count);for(var i=0;i<count;i++)result[i]=DeviceDetails.fromValues(values[i]);return result;};return DeviceDetails;}();/* harmony default export */var devicedetails=devicedetails_DeviceDetails;// EXTERNAL MODULE: ./browser/lib/util/http.js
var http=__nested_webpack_require_387524__(6);// EXTERNAL MODULE: ./browser/lib/util/bufferutils.js
var bufferutils=__nested_webpack_require_387524__(4);// CONCATENATED MODULE: ./common/lib/client/resource.js
var resource_Resource=function(){var msgpack=platform_browser["a"/* default */].msgpack;function Resource(){}function withAuthDetails(rest,headers,params,errCallback,opCallback){if(http["a"/* default */].supportsAuthHeaders){rest.auth.getAuthHeaders(function(err,authHeaders){if(err)errCallback(err);else opCallback(utils["a"/* default */].mixin(authHeaders,headers),params);});}else{rest.auth.getAuthParams(function(err,authParams){if(err)errCallback(err);else opCallback(headers,utils["a"/* default */].mixin(authParams,params));});}}function unenvelope(callback,format){return function(err,body,outerHeaders,unpacked,outerStatusCode){if(err&&!body){callback(err);return;}if(!unpacked){try{body=utils["a"/* default */].decodeBody(body,format);}catch(e){callback(e);return;}}if(body.statusCode===undefined){/* Envelope already unwrapped by the transport */callback(err,body,outerHeaders,true,outerStatusCode);return;}var wrappedStatusCode=body.statusCode,response=body.response,wrappedHeaders=body.headers;if(wrappedStatusCode<200||wrappedStatusCode>=300){/* handle wrapped errors */var wrappedErr=response&&response.error||err;if(!wrappedErr){wrappedErr=new Error("Error in unenveloping "+body);wrappedErr.statusCode=wrappedStatusCode;}callback(wrappedErr,response,wrappedHeaders,true,wrappedStatusCode);return;}callback(err,response,wrappedHeaders,true,wrappedStatusCode);};}function paramString(params){var paramPairs=[];if(params){for(var needle in params){paramPairs.push(needle+'='+params[needle]);}}return paramPairs.join('&');}function urlFromPathAndParams(path,params){return path+(params?'?':'')+paramString(params);}function logResponseHandler(callback,method,path,params){return function(err,body,headers,unpacked,statusCode){if(err){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Resource.'+method+'()','Received Error; '+urlFromPathAndParams(path,params)+'; Error: '+utils["a"/* default */].inspectError(err));}else{logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Resource.'+method+'()','Received; '+urlFromPathAndParams(path,params)+'; Headers: '+paramString(headers)+'; StatusCode: '+statusCode+'; Body: '+(bufferutils["a"/* default */].isBuffer(body)?body.toString():body));}if(callback){callback(err,body,headers,unpacked,statusCode);}};}utils["a"/* default */].arrForEach(http["a"/* default */].methodsWithoutBody,function(method){Resource[method]=function(rest,path,origheaders,origparams,envelope,callback){Resource['do'](method,rest,path,null,origheaders,origparams,envelope,callback);};});utils["a"/* default */].arrForEach(http["a"/* default */].methodsWithBody,function(method){Resource[method]=function(rest,path,body,origheaders,origparams,envelope,callback){Resource['do'](method,rest,path,body,origheaders,origparams,envelope,callback);};});Resource['do']=function(method,rest,path,body,origheaders,origparams,envelope,callback){if(logger["a"/* default */].shouldLog(logger["a"/* default */].LOG_MICRO)){callback=logResponseHandler(callback,method,path,origparams);}if(envelope){callback=callback&&unenvelope(callback,envelope);(origparams=origparams||{})['envelope']=envelope;}function doRequest(headers,params){if(logger["a"/* default */].shouldLog(logger["a"/* default */].LOG_MICRO)){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Resource.'+method+'()','Sending; '+urlFromPathAndParams(path,params));}var args=[rest,path,headers,body,params,function(err,res,headers,unpacked,statusCode){if(err&&auth["a"/* default */].isTokenErr(err)){/* token has expired, so get a new one */rest.auth.authorize(null,null,function(err){if(err){callback(err);return;}/* retry ... */withAuthDetails(rest,origheaders,origparams,callback,doRequest);});return;}callback(err,res,headers,unpacked,statusCode);}];if(!body){args.splice(3,1);}if(logger["a"/* default */].shouldLog(logger["a"/* default */].LOG_MICRO)){var decodedBody=body;if((headers['content-type']||'').indexOf('msgpack')>0){try{decodedBody=msgpack.decode(body);}catch(decodeErr){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Resource.'+method+'()','Sending MsgPack Decoding Error: '+utils["a"/* default */].inspectError(decodeErr));}}logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Resource.'+method+'()','Sending; '+urlFromPathAndParams(path,params)+'; Body: '+decodedBody);}http["a"/* default */][method].apply(this,args);}withAuthDetails(rest,origheaders,origparams,callback,doRequest);};return Resource;}();/* harmony default export */var client_resource=resource_Resource;// CONCATENATED MODULE: ./common/lib/client/paginatedresource.js
var paginatedresource_PaginatedResource=function(){function getRelParams(linkUrl){var urlMatch=linkUrl.match(/^\.\/(\w+)\?(.*)$/);return urlMatch&&utils["a"/* default */].parseQueryString(urlMatch[2]);}function parseRelLinks(linkHeader){if(typeof linkHeader=='string')linkHeader=linkHeader.split(',');var relParams={};for(var i=0;i<linkHeader.length;i++){var linkMatch=linkHeader[i].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);if(linkMatch){var params=getRelParams(linkMatch[1]);if(params)relParams[linkMatch[2]]=params;}}return relParams;}function PaginatedResource(rest,path,headers,envelope,bodyHandler,useHttpPaginatedResponse){this.rest=rest;this.path=path;this.headers=headers;this.envelope=envelope;this.bodyHandler=bodyHandler;this.useHttpPaginatedResponse=useHttpPaginatedResponse||false;}utils["a"/* default */].arrForEach(http["a"/* default */].methodsWithoutBody,function(method){PaginatedResource.prototype[method]=function(params,callback){var self=this;client_resource[method](self.rest,self.path,self.headers,params,self.envelope,function(err,body,headers,unpacked,statusCode){self.handlePage(err,body,headers,unpacked,statusCode,callback);});};});utils["a"/* default */].arrForEach(http["a"/* default */].methodsWithBody,function(method){PaginatedResource.prototype[method]=function(params,body,callback){var self=this;client_resource[method](self.rest,self.path,body,self.headers,params,self.envelope,function(err,resbody,headers,unpacked,statusCode){if(callback){self.handlePage(err,resbody,headers,unpacked,statusCode,callback);}});};});function returnErrOnly(err,body,useHPR){/* If using httpPaginatedResponse, errors from Ably are returned as part of
		 * the HPR, only do callback(err) for network errors etc. which don't
		 * return a body and/or have no ably-originated error code (non-numeric
		 * error codes originate from node) */return!(useHPR&&(body||typeof err.code==='number'));}PaginatedResource.prototype.handlePage=function(err,body,headers,unpacked,statusCode,callback){if(err&&returnErrOnly(err,body,this.useHttpPaginatedResponse)){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'PaginatedResource.handlePage()','Unexpected error getting resource: err = '+utils["a"/* default */].inspectError(err));callback(err);return;}var items,linkHeader,relParams;try{items=this.bodyHandler(body,headers,unpacked);}catch(e){/* If we got an error, the failure to parse the body is almost certainly
			 * due to that, so cb with that in preference to the parse error */callback(err||e);return;}if(headers&&(linkHeader=headers['Link']||headers['link'])){relParams=parseRelLinks(linkHeader);}if(this.useHttpPaginatedResponse){callback(null,new HttpPaginatedResponse(this,items,headers,statusCode,relParams,err));}else{callback(null,new PaginatedResult(this,items,relParams));}};function PaginatedResult(resource,items,relParams){this.resource=resource;this.items=items;if(relParams){var self=this;if('first'in relParams){this.first=function(cb){if(!cb&&self.resource.rest.options.promises){return utils["a"/* default */].promisify(self,'first',[]);}self.get(relParams.first,cb);};}if('current'in relParams){this.current=function(cb){if(!cb&&self.resource.rest.options.promises){return utils["a"/* default */].promisify(self,'current',[]);}self.get(relParams.current,cb);};}this.next=function(cb){if(!cb&&self.resource.rest.options.promises){return utils["a"/* default */].promisify(self,'next',[]);}if('next'in relParams){self.get(relParams.next,cb);}else{cb(null,null);}};this.hasNext=function(){return'next'in relParams;};this.isLast=function(){return!this.hasNext();};}}/* We assume that only the initial request can be a POST, and that accessing
	 * the rest of a multipage set of results can always be done with GET */PaginatedResult.prototype.get=function(params,callback){var res=this.resource;client_resource.get(res.rest,res.path,res.headers,params,res.envelope,function(err,body,headers,unpacked,statusCode){res.handlePage(err,body,headers,unpacked,statusCode,callback);});};function HttpPaginatedResponse(resource,items,headers,statusCode,relParams,err){PaginatedResult.call(this,resource,items,relParams);this.statusCode=statusCode;this.success=statusCode<300&&statusCode>=200;this.headers=headers;this.errorCode=err&&err.code;this.errorMessage=err&&err.message;}utils["a"/* default */].inherits(HttpPaginatedResponse,PaginatedResult);return PaginatedResource;}();/* harmony default export */var paginatedresource=paginatedresource_PaginatedResource;// EXTERNAL MODULE: ./common/lib/types/errorinfo.js
var errorinfo=__nested_webpack_require_387524__(2);// CONCATENATED MODULE: ./common/lib/types/pushchannelsubscription.js
var pushchannelsubscription_PushChannelSubscription=function(){function PushChannelSubscription(){this.channel=undefined;this.deviceId=undefined;this.clientId=undefined;}/**
	 * Overload toJSON() to intercept JSON.stringify()
	 * @return {*}
	 */PushChannelSubscription.prototype.toJSON=function(){return{channel:this.channel,deviceId:this.deviceId,clientId:this.clientId};};PushChannelSubscription.prototype.toString=function(){var result='[PushChannelSubscription';if(this.channel)result+='; channel='+this.channel;if(this.deviceId)result+='; deviceId='+this.deviceId;if(this.clientId)result+='; clientId='+this.clientId;result+=']';return result;};PushChannelSubscription.toRequestBody=utils["a"/* default */].encodeBody;PushChannelSubscription.fromResponseBody=function(body,format){if(format){body=utils["a"/* default */].decodeBody(body,format);}if(utils["a"/* default */].isArray(body)){return PushChannelSubscription.fromValuesArray(body);}else{return PushChannelSubscription.fromValues(body);}};PushChannelSubscription.fromValues=function(values){return utils["a"/* default */].mixin(new PushChannelSubscription(),values);};PushChannelSubscription.fromValuesArray=function(values){var count=values.length,result=new Array(count);for(var i=0;i<count;i++)result[i]=PushChannelSubscription.fromValues(values[i]);return result;};return PushChannelSubscription;}();/* harmony default export */var pushchannelsubscription=pushchannelsubscription_PushChannelSubscription;// CONCATENATED MODULE: ./common/lib/client/push.js
var push_Push=function(){var noop=function(){};function Push(rest){this.rest=rest;this.admin=new Admin(rest);}function Admin(rest){this.rest=rest;this.deviceRegistrations=new DeviceRegistrations(rest);this.channelSubscriptions=new ChannelSubscriptions(rest);}Admin.prototype.publish=function(recipient,payload,callback){var rest=this.rest;var format=rest.options.useBinaryProtocol?'msgpack':'json',requestBody=utils["a"/* default */].mixin({recipient:recipient},payload),headers=utils["a"/* default */].defaultPostHeaders(format),params={};if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'publish',arguments);}callback=noop;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);if(rest.options.pushFullWait)utils["a"/* default */].mixin(params,{fullWait:'true'});requestBody=utils["a"/* default */].encodeBody(requestBody,format);client_resource.post(rest,'/push/publish',requestBody,headers,params,false,function(err){callback(err);});};function DeviceRegistrations(rest){this.rest=rest;}DeviceRegistrations.prototype.save=function(device,callback){var rest=this.rest;var format=rest.options.useBinaryProtocol?'msgpack':'json',requestBody=devicedetails.fromValues(device),headers=utils["a"/* default */].defaultPostHeaders(format),params={};if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'save',arguments);}callback=noop;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);if(rest.options.pushFullWait)utils["a"/* default */].mixin(params,{fullWait:'true'});requestBody=utils["a"/* default */].encodeBody(requestBody,format);client_resource.put(rest,'/push/deviceRegistrations/'+encodeURIComponent(device.id),requestBody,headers,params,false,function(err,body,headers,unpacked){callback(err,!err&&devicedetails.fromResponseBody(body,!unpacked&&format));});};DeviceRegistrations.prototype.get=function(deviceIdOrDetails,callback){var rest=this.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',headers=utils["a"/* default */].defaultGetHeaders(format),deviceId=deviceIdOrDetails.id||deviceIdOrDetails;if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'get',arguments);}callback=noop;}if(typeof deviceId!=='string'||!deviceId.length){callback(new errorinfo["a"/* default */]('First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails',40000,400));return;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);client_resource.get(rest,'/push/deviceRegistrations/'+encodeURIComponent(deviceId),headers,{},false,function(err,body,headers,unpacked){callback(err,!err&&devicedetails.fromResponseBody(body,!unpacked&&format));});};DeviceRegistrations.prototype.list=function(params,callback){var rest=this.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',envelope=http["a"/* default */].supportsLinkHeaders?undefined:format,headers=utils["a"/* default */].defaultGetHeaders(format);if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'list',arguments);}callback=noop;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);new paginatedresource(rest,'/push/deviceRegistrations',headers,envelope,function(body,headers,unpacked){return devicedetails.fromResponseBody(body,!unpacked&&format);}).get(params,callback);};DeviceRegistrations.prototype.remove=function(deviceIdOrDetails,callback){var rest=this.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',headers=utils["a"/* default */].defaultGetHeaders(format),params={},deviceId=deviceIdOrDetails.id||deviceIdOrDetails;if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'remove',arguments);}callback=noop;}if(typeof deviceId!=='string'||!deviceId.length){callback(new errorinfo["a"/* default */]('First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails',40000,400));return;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);if(rest.options.pushFullWait)utils["a"/* default */].mixin(params,{fullWait:'true'});client_resource['delete'](rest,'/push/deviceRegistrations/'+encodeURIComponent(deviceId),headers,params,false,function(err){callback(err);});};DeviceRegistrations.prototype.removeWhere=function(params,callback){var rest=this.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',headers=utils["a"/* default */].defaultGetHeaders(format);if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'removeWhere',arguments);}callback=noop;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);if(rest.options.pushFullWait)utils["a"/* default */].mixin(params,{fullWait:'true'});client_resource['delete'](rest,'/push/deviceRegistrations',headers,params,false,function(err){callback(err);});};function ChannelSubscriptions(rest){this.rest=rest;}ChannelSubscriptions.prototype.save=function(subscription,callback){var rest=this.rest;var format=rest.options.useBinaryProtocol?'msgpack':'json',requestBody=pushchannelsubscription.fromValues(subscription),headers=utils["a"/* default */].defaultPostHeaders(format),params={};if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'save',arguments);}callback=noop;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);if(rest.options.pushFullWait)utils["a"/* default */].mixin(params,{fullWait:'true'});requestBody=utils["a"/* default */].encodeBody(requestBody,format);client_resource.post(rest,'/push/channelSubscriptions',requestBody,headers,params,false,function(err,body,headers,unpacked){callback(err,!err&&pushchannelsubscription.fromResponseBody(body,!unpacked&&format));});};ChannelSubscriptions.prototype.list=function(params,callback){var rest=this.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',envelope=http["a"/* default */].supportsLinkHeaders?undefined:format,headers=utils["a"/* default */].defaultGetHeaders(format);if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'list',arguments);}callback=noop;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);new paginatedresource(rest,'/push/channelSubscriptions',headers,envelope,function(body,headers,unpacked){return pushchannelsubscription.fromResponseBody(body,!unpacked&&format);}).get(params,callback);};ChannelSubscriptions.prototype.removeWhere=function(params,callback){var rest=this.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',headers=utils["a"/* default */].defaultGetHeaders(format);if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'removeWhere',arguments);}callback=noop;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);if(rest.options.pushFullWait)utils["a"/* default */].mixin(params,{fullWait:'true'});client_resource['delete'](rest,'/push/channelSubscriptions',headers,params,false,function(err){callback(err);});};/* ChannelSubscriptions have no unique id; removing one is equivalent to removeWhere by its properties */ChannelSubscriptions.prototype.remove=ChannelSubscriptions.prototype.removeWhere;ChannelSubscriptions.prototype.listChannels=function(params,callback){var rest=this.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',envelope=http["a"/* default */].supportsLinkHeaders?undefined:format,headers=utils["a"/* default */].defaultGetHeaders(format);if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'listChannels',arguments);}callback=noop;}if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);if(rest.options.pushFullWait)utils["a"/* default */].mixin(params,{fullWait:'true'});new paginatedresource(rest,'/push/channels',headers,envelope,function(body,headers,unpacked){var f=!unpacked&&format;if(f){body=utils["a"/* default */].decodeBody(body,format);}for(var i=0;i<body.length;i++){body[i]=String(body[i]);}return body;}).get(params,callback);};return Push;}();/* harmony default export */var push=push_Push;// EXTERNAL MODULE: ./common/lib/util/eventemitter.js
var eventemitter=__nested_webpack_require_387524__(7);// EXTERNAL MODULE: ./common/lib/types/presencemessage.js
var presencemessage=__nested_webpack_require_387524__(11);// CONCATENATED MODULE: ./common/lib/client/presence.js
var presence_Presence=function(){function noop(){}function Presence(channel){this.channel=channel;this.basePath=channel.basePath+'/presence';}utils["a"/* default */].inherits(Presence,eventemitter["a"/* default */]);Presence.prototype.get=function(params,callback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Presence.get()','channel = '+this.channel.name);/* params and callback are optional; see if params contains the callback */if(callback===undefined){if(typeof params=='function'){callback=params;params=null;}else{if(this.channel.rest.options.promises){return utils["a"/* default */].promisify(this,'get',arguments);}callback=noop;}}var rest=this.channel.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',envelope=http["a"/* default */].supportsLinkHeaders?undefined:format,headers=utils["a"/* default */].defaultGetHeaders(format);if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);var options=this.channel.channelOptions;new paginatedresource(rest,this.basePath,headers,envelope,function(body,headers,unpacked){return presencemessage["a"/* default */].fromResponseBody(body,options,!unpacked&&format);}).get(params,callback);};Presence.prototype.history=function(params,callback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Presence.history()','channel = '+this.channel.name);this._history(params,callback);};Presence.prototype._history=function(params,callback){/* params and callback are optional; see if params contains the callback */if(callback===undefined){if(typeof params=='function'){callback=params;params=null;}else{if(this.channel.rest.options.promises){return utils["a"/* default */].promisify(this,'_history',arguments);}callback=noop;}}var rest=this.channel.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',envelope=http["a"/* default */].supportsLinkHeaders?undefined:format,headers=utils["a"/* default */].defaultGetHeaders(format),channel=this.channel;if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);var options=this.channel.channelOptions;new paginatedresource(rest,this.basePath+'/history',headers,envelope,function(body,headers,unpacked){return presencemessage["a"/* default */].fromResponseBody(body,options,!unpacked&&format);}).get(params,callback);};return Presence;}();/* harmony default export */var client_presence=presence_Presence;// EXTERNAL MODULE: ./browser/lib/util/crypto.js
var util_crypto=__nested_webpack_require_387524__(19);// EXTERNAL MODULE: ./common/lib/types/message.js
var types_message=__nested_webpack_require_387524__(9);// CONCATENATED MODULE: ./common/lib/client/channel.js
var channel_Channel=function(){function noop(){}var MSG_ID_ENTROPY_BYTES=9;/* public constructor */function Channel(rest,name,channelOptions){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Channel()','started; name = '+name);eventemitter["a"/* default */].call(this);this.rest=rest;this.name=name;this.basePath='/channels/'+encodeURIComponent(name);this.presence=new client_presence(this);this.setOptions(channelOptions);}utils["a"/* default */].inherits(Channel,eventemitter["a"/* default */]);Channel.prototype.setOptions=function(options){this.channelOptions=options=options||{};if(options.cipher){if(!util_crypto["a"/* default */])throw new Error('Encryption not enabled; use ably.encryption.js instead');var cipher=util_crypto["a"/* default */].getCipher(options.cipher);options.cipher=cipher.cipherParams;options.channelCipher=cipher.cipher;}else if('cipher'in options){/* Don't deactivate an existing cipher unless options
			 * has a 'cipher' key that's falsey */options.cipher=null;options.channelCipher=null;}};Channel.prototype.history=function(params,callback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Channel.history()','channel = '+this.name);/* params and callback are optional; see if params contains the callback */if(callback===undefined){if(typeof params=='function'){callback=params;params=null;}else{if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'history',arguments);}callback=noop;}}this._history(params,callback);};Channel.prototype._history=function(params,callback){var rest=this.rest,format=rest.options.useBinaryProtocol?'msgpack':'json',envelope=http["a"/* default */].supportsLinkHeaders?undefined:format,headers=utils["a"/* default */].defaultGetHeaders(format),channel=this;if(rest.options.headers)utils["a"/* default */].mixin(headers,rest.options.headers);var options=this.channelOptions;new paginatedresource(rest,this.basePath+'/messages',headers,envelope,function(body,headers,unpacked){return types_message["a"/* default */].fromResponseBody(body,options,!unpacked&&format);}).get(params,callback);};function allEmptyIds(messages){return utils["a"/* default */].arrEvery(messages,function(message){return!message.id;});}Channel.prototype.publish=function(){var argCount=arguments.length,first=arguments[0],second=arguments[1],callback=arguments[argCount-1],messages,params,self=this;if(typeof callback!=='function'){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'publish',arguments);}callback=noop;}if(typeof first==='string'||first===null){/* (name, data, ...) */messages=[types_message["a"/* default */].fromValues({name:first,data:second})];params=arguments[2];}else if(utils["a"/* default */].isObject(first)){messages=[types_message["a"/* default */].fromValues(first)];params=arguments[1];}else if(utils["a"/* default */].isArray(first)){messages=types_message["a"/* default */].fromValuesArray(first);params=arguments[1];}else{throw new errorinfo["a"/* default */]('The single-argument form of publish() expects a message object or an array of message objects',40013,400);}if(typeof params!=='object'||!params){/* No params supplied (so after-message argument is just the callback or undefined) */params={};}var rest=this.rest,options=rest.options,format=options.useBinaryProtocol?'msgpack':'json',idempotentRestPublishing=rest.options.idempotentRestPublishing,headers=utils["a"/* default */].defaultPostHeaders(format);if(options.headers)utils["a"/* default */].mixin(headers,options.headers);if(idempotentRestPublishing&&allEmptyIds(messages)){var msgIdBase=utils["a"/* default */].randomString(MSG_ID_ENTROPY_BYTES);utils["a"/* default */].arrForEach(messages,function(message,index){message.id=msgIdBase+':'+index.toString();});}types_message["a"/* default */].encodeArray(messages,this.channelOptions,function(err){if(err){callback(err);return;}/* RSL1i */var size=types_message["a"/* default */].getMessagesSize(messages),maxMessageSize=options.maxMessageSize;if(size>maxMessageSize){callback(new errorinfo["a"/* default */]('Maximum size of messages that can be published at once exceeded ( was '+size+' bytes; limit is '+maxMessageSize+' bytes)',40009,400));return;}self._publish(types_message["a"/* default */].serialize(messages,format),headers,params,callback);});};Channel.prototype._publish=function(requestBody,headers,params,callback){client_resource.post(this.rest,this.basePath+'/messages',requestBody,headers,params,false,callback);};return Channel;}();/* harmony default export */var client_channel=channel_Channel;// CONCATENATED MODULE: ./common/lib/types/stats.js
var stats_Stats=function(){function MessageCount(values){this.count=values&&values.count||0;this.data=values&&values.data||0;this.uncompressedData=values&&values.uncompressedData||0;this.failed=values&&values.failed||0;this.refused=values&&values.refused||0;}function MessageCategory(values){var self=this;MessageCount.call(this,values);this.category=undefined;if(values&&values.category){this.category={};utils["a"/* default */].forInOwnNonNullProps(values.category,function(prop){self.category[prop]=new MessageCount(values.category[prop]);});}}function ResourceCount(values){this.peak=values&&values.peak||0;this.min=values&&values.min||0;this.mean=values&&values.mean||0;this.opened=values&&values.opened||0;this.refused=values&&values.refused||0;}function RequestCount(values){this.succeeded=values&&values.succeeded||0;this.failed=values&&values.failed||0;this.refused=values&&values.refused||0;}function ConnectionTypes(values){this.plain=new ResourceCount(values&&values.plain);this.tls=new ResourceCount(values&&values.tls);this.all=new ResourceCount(values&&values.all);}function MessageTypes(values){this.messages=new MessageCategory(values&&values.messages);this.presence=new MessageCategory(values&&values.presence);this.all=new MessageCategory(values&&values.all);}function MessageTraffic(values){this.realtime=new MessageTypes(values&&values.realtime);this.rest=new MessageTypes(values&&values.rest);this.webhook=new MessageTypes(values&&values.webhook);this.sharedQueue=new MessageTypes(values&&values.sharedQueue);this.externalQueue=new MessageTypes(values&&values.externalQueue);this.httpEvent=new MessageTypes(values&&values.httpEvent);this.push=new MessageTypes(values&&values.push);this.all=new MessageTypes(values&&values.all);}function MessageDirections(values){this.all=new MessageTypes(values&&values.all);this.inbound=new MessageTraffic(values&&values.inbound);this.outbound=new MessageTraffic(values&&values.outbound);}function XchgMessages(values){this.all=new MessageTypes(values&&values.all);this.producerPaid=new MessageDirections(values&&values.producerPaid);this.consumerPaid=new MessageDirections(values&&values.consumerPaid);}function PushStats(values){this.messages=values&&values.messages||0;var notifications=values&&values.notifications;this.notifications={invalid:notifications&&notifications.invalid||0,attempted:notifications&&notifications.attempted||0,successful:notifications&&notifications.successful||0,failed:notifications&&notifications.failed||0};this.directPublishes=values&&values.directPublishes||0;}function ProcessedCount(values){this.succeeded=values&&values.succeeded||0;this.skipped=values&&values.skipped||0;this.failed=values&&values.failed||0;}function ProcessedMessages(values){var self=this;this.delta=undefined;if(values&&values.delta){this.delta={};utils["a"/* default */].forInOwnNonNullProps(values.delta,function(prop){self.delta[prop]=new ProcessedCount(values.delta[prop]);});}}function Stats(values){MessageDirections.call(this,values);this.persisted=new MessageTypes(values&&values.persisted);this.connections=new ConnectionTypes(values&&values.connections);this.channels=new ResourceCount(values&&values.channels);this.apiRequests=new RequestCount(values&&values.apiRequests);this.tokenRequests=new RequestCount(values&&values.tokenRequests);this.xchgProducer=new XchgMessages(values&&values.xchgProducer);this.xchgConsumer=new XchgMessages(values&&values.xchgConsumer);this.push=new PushStats(values&&values.pushStats);this.processed=new ProcessedMessages(values&&values.processed);this.inProgress=values&&values.inProgress||undefined;this.unit=values&&values.unit||undefined;this.intervalId=values&&values.intervalId||undefined;}Stats.fromValues=function(values){return new Stats(values);};return Stats;}();/* harmony default export */var stats=stats_Stats;// CONCATENATED MODULE: ./common/lib/client/rest.js
var rest_Rest=function(){var noop=function(){};var msgpack=platform_browser["a"/* default */].msgpack;function Rest(options){if(!(this instanceof Rest)){return new Rest(options);}/* normalise options */if(!options){var msg='no options provided';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Rest()',msg);throw new Error(msg);}options=defaults["a"/* default */].objectifyOptions(options);if(options.log){logger["a"/* default */].setLog(options.log.level,options.log.handler);}logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'Rest()','initialized with clientOptions '+utils["a"/* default */].inspect(options));this.options=defaults["a"/* default */].normaliseOptions(options);/* process options */if(options.key){var keyMatch=options.key.match(/^([^:\s]+):([^:.\s]+)$/);if(!keyMatch){var msg='invalid key parameter';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Rest()',msg);throw new Error(msg);}options.keyName=keyMatch[1];options.keySecret=keyMatch[2];}if('clientId'in options){if(!(typeof options.clientId==='string'||options.clientId===null))throw new errorinfo["a"/* default */]('clientId must be either a string or null',40012,400);else if(options.clientId==='*')throw new errorinfo["a"/* default */]('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})',40012,400);}logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Rest()','started; version = '+defaults["a"/* default */].libstring);this.baseUri=this.authority=function(host){return defaults["a"/* default */].getHttpScheme(options)+host+':'+defaults["a"/* default */].getPort(options,false);};this._currentFallback=null;this.serverTimeOffset=null;this.auth=new auth["a"/* default */](this,options);this.channels=new Channels(this);this.push=new push(this);}Rest.prototype.stats=function(params,callback){/* params and callback are optional; see if params contains the callback */if(callback===undefined){if(typeof params=='function'){callback=params;params=null;}else{if(this.options.promises){return utils["a"/* default */].promisify(this,'stats',arguments);}callback=noop;}}var headers=utils["a"/* default */].defaultGetHeaders(),format=this.options.useBinaryProtocol?'msgpack':'json',envelope=http["a"/* default */].supportsLinkHeaders?undefined:format;if(this.options.headers)utils["a"/* default */].mixin(headers,this.options.headers);new paginatedresource(this,'/stats',headers,envelope,function(body,headers,unpacked){var statsValues=unpacked?body:JSON.parse(body);for(var i=0;i<statsValues.length;i++)statsValues[i]=stats.fromValues(statsValues[i]);return statsValues;}).get(params,callback);};Rest.prototype.time=function(params,callback){/* params and callback are optional; see if params contains the callback */if(callback===undefined){if(typeof params=='function'){callback=params;params=null;}else{if(this.options.promises){return utils["a"/* default */].promisify(this,'time',arguments);}callback=noop;}}var headers=utils["a"/* default */].defaultGetHeaders();if(this.options.headers)utils["a"/* default */].mixin(headers,this.options.headers);var self=this;var timeUri=function(host){return self.authority(host)+'/time';};http["a"/* default */].get(this,timeUri,headers,params,function(err,res,headers,unpacked){if(err){callback(err);return;}if(!unpacked)res=JSON.parse(res);var time=res[0];if(!time){err=new Error('Internal error (unexpected result type from GET /time)');err.statusCode=500;callback(err);return;}/* calculate time offset only once for this device by adding to the prototype */self.serverTimeOffset=time-utils["a"/* default */].now();callback(null,time);});};Rest.prototype.request=function(method,path,params,body,customHeaders,callback){var useBinary=this.options.useBinaryProtocol,encoder=useBinary?msgpack.encode:JSON.stringify,decoder=useBinary?msgpack.decode:JSON.parse,format=useBinary?'msgpack':'json',envelope=http["a"/* default */].supportsLinkHeaders?undefined:format;params=params||{};method=method.toLowerCase();var headers=method=='get'?utils["a"/* default */].defaultGetHeaders(format):utils["a"/* default */].defaultPostHeaders(format);if(callback===undefined){if(this.options.promises){return utils["a"/* default */].promisify(this,'request',[method,path,params,body,customHeaders]);}callback=noop;}if(typeof body!=='string'){body=encoder(body);}if(this.options.headers){utils["a"/* default */].mixin(headers,this.options.headers);}if(customHeaders){utils["a"/* default */].mixin(headers,customHeaders);}var paginatedResource=new paginatedresource(this,path,headers,envelope,function(resbody,headers,unpacked){return utils["a"/* default */].ensureArray(unpacked?resbody:decoder(resbody));},/* useHttpPaginatedResponse: */true);if(!utils["a"/* default */].arrIn(http["a"/* default */].methods,method)){throw new errorinfo["a"/* default */]('Unsupported method '+method,40500,405);}if(utils["a"/* default */].arrIn(http["a"/* default */].methodsWithBody,method)){paginatedResource[method](params,body,callback);}else{paginatedResource[method](params,callback);}};Rest.prototype.setLog=function(logOptions){logger["a"/* default */].setLog(logOptions.level,logOptions.handler);};function Channels(rest){this.rest=rest;this.all={};}Channels.prototype.get=function(name,channelOptions){name=String(name);var channel=this.all[name];if(!channel){this.all[name]=channel=new client_channel(this.rest,name,channelOptions);}else if(channelOptions){channel.setOptions(channelOptions);}return channel;};/* Included to support certain niche use-cases; most users should ignore this.
	 * Please do not use this unless you know what you're doing */Channels.prototype.release=function(name){delete this.all[String(name)];};return Rest;}();rest_Rest.Promise=function(options){options=defaults["a"/* default */].objectifyOptions(options);options.promises=true;return new rest_Rest(options);};rest_Rest.Callbacks=rest_Rest;/* harmony default export */var client_rest=rest_Rest;// EXTERNAL MODULE: ./common/lib/transport/connectionmanager.js
var connectionmanager=__nested_webpack_require_387524__(25);// EXTERNAL MODULE: ./common/lib/client/connectionstatechange.js
var connectionstatechange=__nested_webpack_require_387524__(21);// CONCATENATED MODULE: ./common/lib/client/connection.js
var connection_Connection=function(){function noop(){}/* public constructor */function Connection(ably,options){eventemitter["a"/* default */].call(this);this.ably=ably;this.connectionManager=new connectionmanager["a"/* default */](ably,options);this.state=this.connectionManager.state.state;this.key=undefined;this.id=undefined;this.serial=undefined;this.timeSerial=undefined;this.recoveryKey=undefined;this.errorReason=null;var self=this;this.connectionManager.on('connectionstate',function(stateChange){var state=self.state=stateChange.current;utils["a"/* default */].nextTick(function(){self.emit(state,stateChange);});});this.connectionManager.on('update',function(stateChange){utils["a"/* default */].nextTick(function(){self.emit('update',stateChange);});});}utils["a"/* default */].inherits(Connection,eventemitter["a"/* default */]);Connection.prototype.whenState=function(state,listener){return eventemitter["a"/* default */].prototype.whenState.call(this,state,this.state,listener,new connectionstatechange["a"/* default */](undefined,state));};Connection.prototype.connect=function(){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Connection.connect()','');this.connectionManager.requestState({state:'connecting'});};Connection.prototype.ping=function(callback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Connection.ping()','');if(!callback){if(this.ably.options.promises){return utils["a"/* default */].promisify(this,'ping',arguments);}callback=noop;}this.connectionManager.ping(null,callback);};Connection.prototype.close=function(){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Connection.close()','connectionKey = '+this.key);this.connectionManager.requestState({state:'closing'});};return Connection;}();/* harmony default export */var connection=connection_Connection;// EXTERNAL MODULE: ./common/lib/types/protocolmessage.js
var protocolmessage=__nested_webpack_require_387524__(8);// EXTERNAL MODULE: ./common/lib/transport/connectionerror.js
var connectionerror=__nested_webpack_require_387524__(13);// EXTERNAL MODULE: ./common/lib/util/multicaster.js
var util_multicaster=__nested_webpack_require_387524__(22);// CONCATENATED MODULE: ./common/lib/client/channelstatechange.js
var ChannelStateChange=function(){/* public constructor */function ChannelStateChange(previous,current,resumed,reason){this.previous=previous;this.current=current;if(current==='attached')this.resumed=resumed;if(reason)this.reason=reason;}return ChannelStateChange;}();/* harmony default export */var channelstatechange=ChannelStateChange;// CONCATENATED MODULE: ./common/lib/client/realtimepresence.js
var realtimepresence_RealtimePresence=function(){var noop=function(){};function memberKey(item){return item.clientId+':'+item.connectionId;}function getClientId(realtimePresence){return realtimePresence.channel.realtime.auth.clientId;}function isAnonymousOrWildcard(realtimePresence){var realtime=realtimePresence.channel.realtime;/* If not currently connected, we can't assume that we're an anonymous
		 * client, as realtime may inform us of our clientId in the CONNECTED
		 * message. So assume we're not anonymous and leave it to realtime to
		 * return an error if we are */var clientId=realtime.auth.clientId;return(!clientId||clientId==='*')&&realtime.connection.state==='connected';}/* Callback is called only in the event of an error */function waitAttached(channel,callback,action){switch(channel.state){case'attached':case'suspended':action();break;case'initialized':case'detached':case'detaching':case'attaching':channel.attach(function(err){if(err)callback(err);else action();});break;default:callback(errorinfo["a"/* default */].fromValues(realtimechannel.invalidStateError(channel.state)));}}function RealtimePresence(channel,options){client_presence.call(this,channel);this.syncComplete=false;this.members=new PresenceMap(this);this._myMembers=new PresenceMap(this);this.subscriptions=new eventemitter["a"/* default */]();this.pendingPresence=[];}utils["a"/* default */].inherits(RealtimePresence,client_presence);RealtimePresence.prototype.enter=function(data,callback){if(isAnonymousOrWildcard(this)){throw new errorinfo["a"/* default */]('clientId must be specified to enter a presence channel',40012,400);}return this._enterOrUpdateClient(undefined,data,'enter',callback);};RealtimePresence.prototype.update=function(data,callback){if(isAnonymousOrWildcard(this)){throw new errorinfo["a"/* default */]('clientId must be specified to update presence data',40012,400);}return this._enterOrUpdateClient(undefined,data,'update',callback);};RealtimePresence.prototype.enterClient=function(clientId,data,callback){return this._enterOrUpdateClient(clientId,data,'enter',callback);};RealtimePresence.prototype.updateClient=function(clientId,data,callback){return this._enterOrUpdateClient(clientId,data,'update',callback);};RealtimePresence.prototype._enterOrUpdateClient=function(clientId,data,action,callback){if(!callback){if(typeof data==='function'){callback=data;data=null;}else{if(this.channel.realtime.options.promises){return utils["a"/* default */].promisify(this,'_enterOrUpdateClient',[clientId,data,action]);}callback=noop;}}var channel=this.channel;if(!channel.connectionManager.activeState()){callback(channel.connectionManager.getError());return;}logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimePresence.'+action+'Client()','channel = '+channel.name+', client = '+(clientId||'(implicit) '+getClientId(this)));var presence=presencemessage["a"/* default */].fromValues({action:action,data:data});if(clientId){presence.clientId=clientId;}var self=this;presencemessage["a"/* default */].encode(presence,channel.channelOptions,function(err){if(err){callback(err);return;}switch(channel.state){case'attached':channel.sendPresence(presence,callback);break;case'initialized':case'detached':channel.attach();case'attaching':self.pendingPresence.push({presence:presence,callback:callback});break;default:err=new errorinfo["a"/* default */]('Unable to '+action+' presence channel while in '+channel.state+' state',90001);err.code=90001;callback(err);}});};RealtimePresence.prototype.leave=function(data,callback){if(isAnonymousOrWildcard(this)){throw new errorinfo["a"/* default */]('clientId must have been specified to enter or leave a presence channel',40012,400);}return this.leaveClient(undefined,data,callback);};RealtimePresence.prototype.leaveClient=function(clientId,data,callback){if(!callback){if(typeof data==='function'){callback=data;data=null;}else{if(this.channel.realtime.options.promises){return utils["a"/* default */].promisify(this,'leaveClient',[clientId,data]);}callback=noop;}}var channel=this.channel;if(!channel.connectionManager.activeState()){callback(channel.connectionManager.getError());return;}logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimePresence.leaveClient()','leaving; channel = '+this.channel.name+', client = '+clientId);var presence=presencemessage["a"/* default */].fromValues({action:'leave',data:data});if(clientId){presence.clientId=clientId;}switch(channel.state){case'attached':channel.sendPresence(presence,callback);break;case'attaching':this.pendingPresence.push({presence:presence,callback:callback});break;case'initialized':case'failed':/* we're not attached; therefore we let any entered status
				 * timeout by itself instead of attaching just in order to leave */var err=new errorinfo["a"/* default */]('Unable to leave presence channel (incompatible state)',90001);callback(err);break;default:/* there is no connection; therefore we let
				 * any entered status timeout by itself */callback(connectionerror["a"/* default */].failed);}};RealtimePresence.prototype.get=function()/* params, callback */{var args=Array.prototype.slice.call(arguments);if(args.length==1&&typeof args[0]=='function')args.unshift(null);var params=args[0],callback=args[1],waitForSync=!params||('waitForSync'in params?params.waitForSync:true);if(!callback){if(this.channel.realtime.options.promises){return utils["a"/* default */].promisify(this,'get',args);}callback=noop;}function returnMembers(members){callback(null,params?members.list(params):members.values());}/* Special-case the suspended state: can still get (stale) presence set if waitForSync is false */if(this.channel.state==='suspended'){if(waitForSync){callback(errorinfo["a"/* default */].fromValues({statusCode:400,code:91005,message:'Presence state is out of sync due to channel being in the SUSPENDED state'}));}else{returnMembers(this.members);}return;}var self=this;waitAttached(this.channel,callback,function(){var members=self.members;if(waitForSync){members.waitSync(function(){returnMembers(members);});}else{returnMembers(members);}});};RealtimePresence.prototype.history=function(params,callback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimePresence.history()','channel = '+this.name);/* params and callback are optional; see if params contains the callback */if(callback===undefined){if(typeof params=='function'){callback=params;params=null;}else{if(this.channel.realtime.options.promises){return utils["a"/* default */].promisify(this,'history',arguments);}callback=noop;}}if(params&&params.untilAttach){if(this.channel.state==='attached'){delete params.untilAttach;params.from_serial=this.channel.properties.attachSerial;}else{callback(new errorinfo["a"/* default */]("option untilAttach requires the channel to be attached, was: "+this.channel.state,40000,400));}}client_presence.prototype._history.call(this,params,callback);};RealtimePresence.prototype.setPresence=function(presenceSet,isSync,syncChannelSerial){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimePresence.setPresence()','received presence for '+presenceSet.length+' participants; syncChannelSerial = '+syncChannelSerial);var syncCursor,match,members=this.members,myMembers=this._myMembers,broadcastMessages=[],connId=this.channel.connectionManager.connectionId;if(isSync){this.members.startSync();if(syncChannelSerial&&(match=syncChannelSerial.match(/^[\w\-]+:(.*)$/))){syncCursor=match[1];}}for(var i=0;i<presenceSet.length;i++){var presence=presencemessage["a"/* default */].fromValues(presenceSet[i]);switch(presence.action){case'leave':if(members.remove(presence)){broadcastMessages.push(presence);}if(presence.connectionId===connId&&!presence.isSynthesized()){myMembers.remove(presence);}break;case'enter':case'present':case'update':if(members.put(presence)){broadcastMessages.push(presence);}if(presence.connectionId===connId){myMembers.put(presence);}break;}}/* if this is the last (or only) message in a sequence of sync updates, end the sync */if(isSync&&!syncCursor){members.endSync();/* RTP5c2: re-enter our own members if they haven't shown up in the sync */this._ensureMyMembersPresent();this.channel.setInProgress(realtimechannel.progressOps.sync,false);this.channel.syncChannelSerial=null;}/* broadcast to listeners */for(var i=0;i<broadcastMessages.length;i++){var presence=broadcastMessages[i];this.subscriptions.emit(presence.action,presence);}};RealtimePresence.prototype.onAttached=function(hasPresence){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'RealtimePresence.onAttached()','channel = '+this.channel.name+', hasPresence = '+hasPresence);if(hasPresence){this.members.startSync();}else{this._synthesizeLeaves(this.members.values());this.members.clear();this._ensureMyMembersPresent();}/* NB this must be after the _ensureMyMembersPresent call, which may add items to pendingPresence */var pendingPresence=this.pendingPresence,pendingPresCount=pendingPresence.length;if(pendingPresCount){this.pendingPresence=[];var presenceArray=[];var multicaster=Object(util_multicaster["a"/* default */])();logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimePresence.onAttached','sending '+pendingPresCount+' queued presence messages');for(var i=0;i<pendingPresCount;i++){var event=pendingPresence[i];presenceArray.push(event.presence);multicaster.push(event.callback);}this.channel.sendPresence(presenceArray,multicaster);}};RealtimePresence.prototype.actOnChannelState=function(state,hasPresence,err){switch(state){case'attached':this.onAttached(hasPresence);break;case'detached':case'failed':this._clearMyMembers();this.members.clear();/* falls through */case'suspended':this.failPendingPresence(err);break;}};RealtimePresence.prototype.failPendingPresence=function(err){if(this.pendingPresence.length){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'RealtimeChannel.failPendingPresence','channel; name = '+this.channel.name+', err = '+utils["a"/* default */].inspectError(err));for(var i=0;i<this.pendingPresence.length;i++)try{this.pendingPresence[i].callback(err);}catch(e){}this.pendingPresence=[];}};RealtimePresence.prototype._clearMyMembers=function(){this._myMembers.clear();};RealtimePresence.prototype._ensureMyMembersPresent=function(){var self=this,members=this.members,myMembers=this._myMembers,reenterCb=function(err){if(err){var msg='Presence auto-re-enter failed: '+err.toString();var wrappedErr=new errorinfo["a"/* default */](msg,91004,400);logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'RealtimePresence._ensureMyMembersPresent()',msg);var change=new channelstatechange(self.channel.state,self.channel.state,true,wrappedErr);self.channel.emit('update',change);}};for(var memberKey in myMembers.map){if(!(memberKey in members.map)){var entry=myMembers.map[memberKey];logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimePresence._ensureMyMembersPresent()','Auto-reentering clientId "'+entry.clientId+'" into the presence set');this._enterOrUpdateClient(entry.clientId,entry.data,'enter',reenterCb);delete myMembers.map[memberKey];}}};RealtimePresence.prototype._synthesizeLeaves=function(items){var subscriptions=this.subscriptions;utils["a"/* default */].arrForEach(items,function(item){var presence=presencemessage["a"/* default */].fromValues({action:'leave',connectionId:item.connectionId,clientId:item.clientId,data:item.data,encoding:item.encoding,timestamp:utils["a"/* default */].now()});subscriptions.emit('leave',presence);});};/* Deprecated */RealtimePresence.prototype.on=function(){logger["a"/* default */].deprecated('presence.on','presence.subscribe');this.subscribe.apply(this,arguments);};/* Deprecated */RealtimePresence.prototype.off=function(){logger["a"/* default */].deprecated('presence.off','presence.unsubscribe');this.unsubscribe.apply(this,arguments);};RealtimePresence.prototype.subscribe=function()/* [event], listener, [callback] */{var args=realtimechannel.processListenerArgs(arguments);var event=args[0];var listener=args[1];var callback=args[2];var channel=this.channel;var self=this;if(!callback){if(this.channel.realtime.options.promises){return utils["a"/* default */].promisify(this,'subscribe',[event,listener]);}callback=noop;}if(channel.state==='failed'){callback(errorinfo["a"/* default */].fromValues(realtimechannel.invalidStateError('failed')));return;}this.subscriptions.on(event,listener);channel.attach(callback);};RealtimePresence.prototype.unsubscribe=function()/* [event], listener */{var args=realtimechannel.processListenerArgs(arguments);var event=args[0];var listener=args[1];this.subscriptions.off(event,listener);};function PresenceMap(presence){eventemitter["a"/* default */].call(this);this.presence=presence;this.map={};this.syncInProgress=false;this.residualMembers=null;}utils["a"/* default */].inherits(PresenceMap,eventemitter["a"/* default */]);PresenceMap.prototype.get=function(key){return this.map[key];};PresenceMap.prototype.getClient=function(clientId){var map=this.map,result=[];for(var key in map){var item=map[key];if(item.clientId==clientId&&item.action!='absent')result.push(item);}return result;};PresenceMap.prototype.list=function(params){var map=this.map,clientId=params&&params.clientId,connectionId=params&&params.connectionId,result=[];for(var key in map){var item=map[key];if(item.action==='absent')continue;if(clientId&&clientId!=item.clientId)continue;if(connectionId&&connectionId!=item.connectionId)continue;result.push(item);}return result;};function newerThan(item,existing){/* RTP2b1: if either is synthesised, compare by timestamp */if(item.isSynthesized()||existing.isSynthesized()){return item.timestamp>existing.timestamp;}/* RTP2b2 */var itemOrderings=item.parseId(),existingOrderings=existing.parseId();if(itemOrderings.msgSerial===existingOrderings.msgSerial){return itemOrderings.index>existingOrderings.index;}else{return itemOrderings.msgSerial>existingOrderings.msgSerial;}}PresenceMap.prototype.put=function(item){if(item.action==='enter'||item.action==='update'){item=presencemessage["a"/* default */].fromValues(item);item.action='present';}var map=this.map,key=memberKey(item);/* we've seen this member, so do not remove it at the end of sync */if(this.residualMembers)delete this.residualMembers[key];/* compare the timestamp of the new item with any existing member (or ABSENT witness) */var existingItem=map[key];if(existingItem&&!newerThan(item,existingItem)){return false;}map[key]=item;return true;};PresenceMap.prototype.values=function(){var map=this.map,result=[];for(var key in map){var item=map[key];if(item.action!='absent')result.push(item);}return result;};PresenceMap.prototype.remove=function(item){var map=this.map,key=memberKey(item);var existingItem=map[key];if(existingItem&&!newerThan(item,existingItem)){return false;}/* RTP2f */if(this.syncInProgress){item=presencemessage["a"/* default */].fromValues(item);item.action='absent';map[key]=item;}else{delete map[key];}return true;};PresenceMap.prototype.startSync=function(){var map=this.map,syncInProgress=this.syncInProgress;logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'PresenceMap.startSync()','channel = '+this.presence.channel.name+'; syncInProgress = '+syncInProgress);/* we might be called multiple times while a sync is in progress */if(!this.syncInProgress){this.residualMembers=utils["a"/* default */].copy(map);this.setInProgress(true);}};PresenceMap.prototype.endSync=function(){var map=this.map,syncInProgress=this.syncInProgress;logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'PresenceMap.endSync()','channel = '+this.presence.channel.name+'; syncInProgress = '+syncInProgress);if(syncInProgress){/* we can now strip out the ABSENT members, as we have
			 * received all of the out-of-order sync messages */for(var memberKey in map){var entry=map[memberKey];if(entry.action==='absent'){delete map[memberKey];}}/* any members that were present at the start of the sync,
			 * and have not been seen in sync, can be removed, and leave events emitted */this.presence._synthesizeLeaves(utils["a"/* default */].valuesArray(this.residualMembers));for(var memberKey in this.residualMembers){delete map[memberKey];}this.residualMembers=null;/* finish, notifying any waiters */this.setInProgress(false);}this.emit('sync');};PresenceMap.prototype.waitSync=function(callback){var syncInProgress=this.syncInProgress;logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'PresenceMap.waitSync()','channel = '+this.presence.channel.name+'; syncInProgress = '+syncInProgress);if(!syncInProgress){callback();return;}this.once('sync',callback);};PresenceMap.prototype.clear=function(callback){this.map={};this.setInProgress(false);this.residualMembers=null;};PresenceMap.prototype.setInProgress=function(inProgress){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'PresenceMap.setInProgress()','inProgress = '+inProgress);this.syncInProgress=inProgress;this.presence.syncComplete=!inProgress;};return RealtimePresence;}();/* harmony default export */var realtimepresence=realtimepresence_RealtimePresence;// CONCATENATED MODULE: ./common/lib/client/realtimechannel.js
var realtimechannel_RealtimeChannel=function(){var actions=protocolmessage["a"/* default */].Action;var noop=function(){};var statechangeOp='statechange';var syncOp='sync';/* public constructor */function RealtimeChannel(realtime,name,options){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'RealtimeChannel()','started; name = '+name);client_channel.call(this,realtime,name,options);this.realtime=realtime;this.presence=new realtimepresence(this,realtime.options);this.connectionManager=realtime.connection.connectionManager;this.state='initialized';this.subscriptions=new eventemitter["a"/* default */]();this.syncChannelSerial=undefined;this.properties={attachSerial:undefined};this.setOptions(options);this.errorReason=null;this._requestedFlags=null;this._mode=null;/* Temporary; only used for the checkChannelsOnResume option */this._attachedMsgIndicator=false;this._attachResume=false;this._decodingContext={channelOptions:this.channelOptions,plugins:realtime.options.plugins||{},baseEncodedPreviousPayload:undefined};this._lastPayload={messageId:null,protocolMessageChannelSerial:null,decodeFailureRecoveryInProgress:null};/* Only differences between this and the public event emitter is that this emits an
		 * update event for all ATTACHEDs, whether resumed or not */this._allChannelChanges=new eventemitter["a"/* default */]();}utils["a"/* default */].inherits(RealtimeChannel,client_channel);RealtimeChannel.invalidStateError=function(state){return{statusCode:400,code:90001,message:'Channel operation failed as channel state is '+state};};RealtimeChannel.progressOps={statechange:statechangeOp,sync:syncOp};RealtimeChannel.processListenerArgs=function(args){/* [event], listener, [callback] */args=Array.prototype.slice.call(args);if(typeof args[0]==='function'){args.unshift(null);}if(args[args.length-1]==undefined){args.pop();}return args;};RealtimeChannel.prototype.setOptions=function(options,callback){if(!callback){if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'setOptions',arguments);}callback=function(err){if(err){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'RealtimeChannel.setOptions()','Set options failed: '+err.toString());}};}var err=validateChannelOptions(options);if(err){callback(err);return;}client_channel.prototype.setOptions.call(this,options);if(this._decodingContext)this._decodingContext.channelOptions=this.channelOptions;if(this._shouldReattachToSetOptions(options)){/* This does not just do _attach(true, null, callback) because that would put us
			 * into the 'attaching' state until we receive the new attached, which is
			 * conceptually incorrect: we are still attached, we just have a pending request to
			 * change some channel params. Per RTL17 going into the attaching state would mean
			 * rejecting messages until we have confirmation that the options have changed,
			 * which would unnecessarily lose message continuity. */this.attachImpl();this._allChannelChanges.once(function(stateChange){switch(this.event){case'update':case'attached':callback(null);return;default:callback(stateChange.reason);return;}});}else{callback();}};function validateChannelOptions(options){if(options&&'params'in options&&!utils["a"/* default */].isObject(options.params)){return new errorinfo["a"/* default */]('options.params must be an object',40000,400);}if(options&&'modes'in options){if(!utils["a"/* default */].isArray(options.modes)){return new errorinfo["a"/* default */]('options.modes must be an array',40000,400);}for(var i=0;i<options.modes.length;i++){var currentMode=options.modes[i];if(!currentMode||typeof currentMode!=='string'||!utils["a"/* default */].arrIn(protocolmessage["a"/* default */].channelModes,String.prototype.toUpperCase.call(currentMode))){return new errorinfo["a"/* default */]('Invalid channel mode: '+currentMode,40000,400);}}}}RealtimeChannel.prototype._shouldReattachToSetOptions=function(options){return(this.state==='attached'||this.state==='attaching')&&(options.params||options.modes);};RealtimeChannel.prototype.publish=function(){var argCount=arguments.length,messages=arguments[0],callback=arguments[argCount-1];if(typeof callback!=='function'){if(this.realtime.options.promises){return utils["a"/* default */].promisify(this,'publish',arguments);}callback=noop;++argCount;}if(!this.connectionManager.activeState()){callback(this.connectionManager.getError());return;}if(argCount==2){if(utils["a"/* default */].isObject(messages))messages=[types_message["a"/* default */].fromValues(messages)];else if(utils["a"/* default */].isArray(messages))messages=types_message["a"/* default */].fromValuesArray(messages);else throw new errorinfo["a"/* default */]('The single-argument form of publish() expects a message object or an array of message objects',40013,400);}else{messages=[types_message["a"/* default */].fromValues({name:arguments[0],data:arguments[1]})];}var self=this,maxMessageSize=this.realtime.options.maxMessageSize;types_message["a"/* default */].encodeArray(messages,this.channelOptions,function(err){if(err){callback(err);return;}/* RSL1i */var size=types_message["a"/* default */].getMessagesSize(messages);if(size>maxMessageSize){callback(new errorinfo["a"/* default */]('Maximum size of messages that can be published at once exceeded ( was '+size+' bytes; limit is '+maxMessageSize+' bytes)',40009,400));return;}self._publish(messages,callback);});};RealtimeChannel.prototype._publish=function(messages,callback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimeChannel.publish()','message count = '+messages.length);var state=this.state;switch(state){case'failed':case'suspended':callback(errorinfo["a"/* default */].fromValues(RealtimeChannel.invalidStateError(state)));break;default:logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimeChannel.publish()','sending message; channel state is '+state);var msg=new protocolmessage["a"/* default */]();msg.action=actions.MESSAGE;msg.channel=this.name;msg.messages=messages;this.sendMessage(msg,callback);break;}};RealtimeChannel.prototype.onEvent=function(messages){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimeChannel.onEvent()','received message');var subscriptions=this.subscriptions;for(var i=0;i<messages.length;i++){var message=messages[i];subscriptions.emit(message.name,message);}};RealtimeChannel.prototype.attach=function(flags,callback){if(typeof flags==='function'){callback=flags;flags=null;}if(!callback){if(this.realtime.options.promises){return utils["a"/* default */].promisify(this,'attach',arguments);}callback=function(err){if(err){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MAJOR,'RealtimeChannel.attach()','Channel attach failed: '+err.toString());}};}if(flags){logger["a"/* default */].deprecated('channel.attach() with flags','channel.setOptions() with channelOptions.params');/* If flags requested, always do a re-attach. TODO only do this if
			 * current mode differs from requested mode */this._requestedFlags=flags;}else if(this.state==='attached'){callback();return;}this._attach(false,null,callback);};RealtimeChannel.prototype._attach=function(forceReattach,attachReason,callback){if(!callback){callback=function(err){if(err){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'RealtimeChannel._attach()','Channel attach failed: '+err.toString());}};}var connectionManager=this.connectionManager;if(!connectionManager.activeState()){callback(connectionManager.getError());return;}if(this.state!=='attaching'||forceReattach){this.requestState('attaching',attachReason);}this.once(function(stateChange){switch(this.event){case'attached':callback();break;case'detached':case'suspended':case'failed':callback(stateChange.reason||connectionManager.getError()||new errorinfo["a"/* default */]('Unable to attach; reason unknown; state = '+this.event,90000,500));break;case'detaching':callback(new errorinfo["a"/* default */]('Attach request superseded by a subsequent detach request',90000,409));break;}});};RealtimeChannel.prototype.attachImpl=function(){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimeChannel.attachImpl()','sending ATTACH message');this.setInProgress(statechangeOp,true);var attachMsg=protocolmessage["a"/* default */].fromValues({action:actions.ATTACH,channel:this.name,params:this.channelOptions.params});if(this._requestedFlags){attachMsg.encodeModesToFlags(this._requestedFlags);}else if(this.channelOptions.modes){attachMsg.encodeModesToFlags(utils["a"/* default */].allToUpperCase(this.channelOptions.modes));}if(this._attachResume){attachMsg.setFlag('ATTACH_RESUME');}if(this._lastPayload.decodeFailureRecoveryInProgress){attachMsg.channelSerial=this._lastPayload.protocolMessageChannelSerial;}this.sendMessage(attachMsg,noop);};RealtimeChannel.prototype.detach=function(callback){if(!callback){if(this.realtime.options.promises){return utils["a"/* default */].promisify(this,'detach',arguments);}callback=noop;}var connectionManager=this.connectionManager;if(!connectionManager.activeState()){callback(connectionManager.getError());return;}switch(this.state){case'detached':case'failed':callback();break;default:this.requestState('detaching');case'detaching':this.once(function(stateChange){switch(this.event){case'detached':callback();break;case'attached':case'suspended':case'failed':callback(stateChange.reason||connectionManager.getError()||new errorinfo["a"/* default */]('Unable to detach; reason unknown; state = '+this.event,90000,500));break;case'attaching':callback(new errorinfo["a"/* default */]('Detach request superseded by a subsequent attach request',90000,409));break;}});}};RealtimeChannel.prototype.detachImpl=function(callback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimeChannel.detach()','sending DETACH message');this.setInProgress(statechangeOp,true);var msg=protocolmessage["a"/* default */].fromValues({action:actions.DETACH,channel:this.name});this.sendMessage(msg,callback||noop);};RealtimeChannel.prototype.subscribe=function()/* [event], listener, [callback] */{var args=RealtimeChannel.processListenerArgs(arguments);var event=args[0];var listener=args[1];var callback=args[2];if(!callback){if(this.realtime.options.promises){return utils["a"/* default */].promisify(this,'subscribe',[event,listener]);}callback=noop;}if(this.state==='failed'){callback(errorinfo["a"/* default */].fromValues(RealtimeChannel.invalidStateError('failed')));return;}this.subscriptions.on(event,listener);return this.attach(callback);};RealtimeChannel.prototype.unsubscribe=function()/* [event], listener */{var args=RealtimeChannel.processListenerArgs(arguments);var event=args[0];var listener=args[1];this.subscriptions.off(event,listener);};RealtimeChannel.prototype.sync=function(){/* check preconditions */switch(this.state){case'initialized':case'detaching':case'detached':throw new errorinfo["a"/* default */]("Unable to sync to channel; not attached",40000);default:}var connectionManager=this.connectionManager;if(!connectionManager.activeState()){throw connectionManager.getError();}/* send sync request */var syncMessage=protocolmessage["a"/* default */].fromValues({action:actions.SYNC,channel:this.name});if(this.syncChannelSerial){syncMessage.channelSerial=this.syncChannelSerial;}connectionManager.send(syncMessage);};RealtimeChannel.prototype.sendMessage=function(msg,callback){this.connectionManager.send(msg,this.realtime.options.queueMessages,callback);};RealtimeChannel.prototype.sendPresence=function(presence,callback){var msg=protocolmessage["a"/* default */].fromValues({action:actions.PRESENCE,channel:this.name,presence:utils["a"/* default */].isArray(presence)?presencemessage["a"/* default */].fromValuesArray(presence):[presencemessage["a"/* default */].fromValues(presence)]});this.sendMessage(msg,callback);};RealtimeChannel.prototype.onMessage=function(message){var syncChannelSerial,isSync=false;switch(message.action){case actions.ATTACHED:this._attachedMsgIndicator=true;this.properties.attachSerial=message.channelSerial;this._mode=message.getMode();this.params=message.params||{};var modesFromFlags=message.decodeModesFromFlags();this.modes=modesFromFlags&&utils["a"/* default */].allToLowerCase(modesFromFlags)||undefined;var resumed=message.hasFlag('RESUMED');var hasPresence=message.hasFlag('HAS_PRESENCE');if(this.state==='attached'){/* attached operations to change options set the inprogress mutex, but leave
				 * channel in the attached state */this.setInProgress(statechangeOp,false);if(!resumed){/* On a loss of continuity, the presence set needs to be re-synced */this.presence.onAttached(hasPresence);}var change=new channelstatechange(this.state,this.state,resumed,message.error);this._allChannelChanges.emit('update',change);if(!resumed||this.channelOptions.updateOnAttached){this.emit('update',change);}}else if(this.state==='detaching'){/* RTL5i: re-send DETACH and remain in the 'detaching' state */this.checkPendingState();}else{this.notifyState('attached',message.error,resumed,hasPresence);}break;case actions.DETACHED:var err=message.error?errorinfo["a"/* default */].fromValues(message.error):new errorinfo["a"/* default */]('Channel detached',90001,404);if(this.state==='detaching'){this.notifyState('detached',err);}else if(this.state==='attaching'){/* Only retry immediately if we were previously attached. If we were
				 * attaching, go into suspended, fail messages, and wait a few seconds
				 * before retrying */this.notifyState('suspended',err);}else{this.requestState('attaching',err);}break;case actions.SYNC:/* syncs can have channelSerials, but might not if the sync is one page long */isSync=true;syncChannelSerial=this.syncChannelSerial=message.channelSerial;/* syncs can happen on channels with no presence data as part of connection
			 * resuming, in which case protocol message has no presence property */if(!message.presence)break;case actions.PRESENCE:var presence=message.presence,id=message.id,connectionId=message.connectionId,timestamp=message.timestamp;var options=this.channelOptions;for(var i=0;i<presence.length;i++){try{var presenceMsg=presence[i];presencemessage["a"/* default */].decode(presenceMsg,options);}catch(e){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'RealtimeChannel.onMessage()',e.toString());}if(!presenceMsg.connectionId)presenceMsg.connectionId=connectionId;if(!presenceMsg.timestamp)presenceMsg.timestamp=timestamp;if(!presenceMsg.id)presenceMsg.id=id+':'+i;}this.presence.setPresence(presence,isSync,syncChannelSerial);break;case actions.MESSAGE://RTL17
if(this.state!=='attached'){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MAJOR,'RealtimeChannel.onMessage()','Message "'+message.id+'" skipped as this channel "'+this.name+'" state is not "attached" (state is "'+this.state+'").');return;}var messages=message.messages,firstMessage=messages[0],lastMessage=messages[messages.length-1],id=message.id,connectionId=message.connectionId,timestamp=message.timestamp;if(firstMessage.extras&&firstMessage.extras.delta&&firstMessage.extras.delta.from!==this._lastPayload.messageId){var msg='Delta message decode failure - previous message not available for message "'+message.id+'" on this channel "'+this.name+'".';logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'RealtimeChannel.onMessage()',msg);this._startDecodeFailureRecovery(new errorinfo["a"/* default */](msg,40018,400));break;}for(var i=0;i<messages.length;i++){var msg=messages[i];try{types_message["a"/* default */].decode(msg,this._decodingContext);}catch(e){/* decrypt failed .. the most likely cause is that we have the wrong key */logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'RealtimeChannel.onMessage()',e.toString());switch(e.code){case 40018:/* decode failure */this._startDecodeFailureRecovery(e);return;case 40019:/* No vcdiff plugin passed in - no point recovering, give up */case 40021:/* Browser does not support deltas, similarly no point recovering */this.notifyState('failed',e);return;}}if(!msg.connectionId)msg.connectionId=connectionId;if(!msg.timestamp)msg.timestamp=timestamp;if(!msg.id)msg.id=id+':'+i;}this._lastPayload.messageId=lastMessage.id;this._lastPayload.protocolMessageChannelSerial=message.channelSerial;this.onEvent(messages);break;case actions.ERROR:/* there was a channel-specific error */var err=message.error;if(err&&err.code==80016){/* attach/detach operation attempted on superseded transport handle */this.checkPendingState();}else{this.notifyState('failed',errorinfo["a"/* default */].fromValues(err));}break;default:logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'RealtimeChannel.onMessage()','Fatal protocol error: unrecognised action ('+message.action+')');this.connectionManager.abort(connectionerror["a"/* default */].unknownChannelErr);}};RealtimeChannel.prototype._startDecodeFailureRecovery=function(reason){var self=this;if(!this._lastPayload.decodeFailureRecoveryInProgress){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MAJOR,'RealtimeChannel.onMessage()','Starting decode failure recovery process.');this._lastPayload.decodeFailureRecoveryInProgress=true;this._attach(true,reason,function(){self._lastPayload.decodeFailureRecoveryInProgress=false;});}};RealtimeChannel.prototype.onAttached=function(){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'RealtimeChannel.onAttached','activating channel; name = '+this.name);};RealtimeChannel.prototype.notifyState=function(state,reason,resumed,hasPresence){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimeChannel.notifyState','name = '+this.name+', current state = '+this.state+', notifying state '+state);this.clearStateTimer();if(state===this.state){return;}this.presence.actOnChannelState(state,hasPresence,reason);if(state==='suspended'&&this.connectionManager.state.sendEvents){this.startRetryTimer();}else{this.cancelRetryTimer();}if(reason){this.errorReason=reason;}var change=new channelstatechange(this.state,state,resumed,reason);var logLevel=state==='failed'?logger["a"/* default */].LOG_ERROR:logger["a"/* default */].LOG_MAJOR;logger["a"/* default */].logAction(logLevel,'Channel state for channel "'+this.name+'"',state+(reason?'; reason: '+reason:''));/* Note: we don't set inProgress for pending states until the request is actually in progress */if(state==='attached'){this.onAttached();this.setInProgress(syncOp,hasPresence);this.setInProgress(statechangeOp,false);}else if(state==='detached'||state==='failed'||state==='suspended'){this.setInProgress(statechangeOp,false);this.setInProgress(syncOp,false);}if(state==='attached'){this._attachResume=true;}else if(state==='detaching'||state==='failed'){this._attachResume=false;}this.state=state;this._allChannelChanges.emit(state,change);this.emit(state,change);};RealtimeChannel.prototype.requestState=function(state,reason){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'RealtimeChannel.requestState','name = '+this.name+', state = '+state);this.notifyState(state,reason);/* send the event and await response */this.checkPendingState();};RealtimeChannel.prototype.checkPendingState=function(){/* if can't send events, do nothing */var cmState=this.connectionManager.state;/* Allow attach messages to queue up when synchronizing, since this will be
		 * the state we'll be in when upgrade transport.active triggers a checkpendingstate */if(!(cmState.sendEvents||cmState.forceQueueEvents)){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'RealtimeChannel.checkPendingState','sendEvents is false; state is '+this.connectionManager.state.state);return;}logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'RealtimeChannel.checkPendingState','name = '+this.name+', state = '+this.state);/* Only start the state timer running when actually sending the event */switch(this.state){case'attaching':this.startStateTimerIfNotRunning();this.attachImpl();break;case'detaching':this.startStateTimerIfNotRunning();this.detachImpl();break;case'attached':/* resume any sync operation that was in progress */this.sync();default:break;}};RealtimeChannel.prototype.timeoutPendingState=function(){switch(this.state){case'attaching':var err=new errorinfo["a"/* default */]('Channel attach timed out',90007,408);this.notifyState('suspended',err);break;case'detaching':var err=new errorinfo["a"/* default */]('Channel detach timed out',90007,408);this.notifyState('attached',err);break;default:this.checkPendingState();break;}};RealtimeChannel.prototype.startStateTimerIfNotRunning=function(){var self=this;if(!this.stateTimer){this.stateTimer=setTimeout(function(){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'RealtimeChannel.startStateTimerIfNotRunning','timer expired');self.stateTimer=null;self.timeoutPendingState();},this.realtime.options.timeouts.realtimeRequestTimeout);}};RealtimeChannel.prototype.clearStateTimer=function(){var stateTimer=this.stateTimer;if(stateTimer){clearTimeout(stateTimer);this.stateTimer=null;}};RealtimeChannel.prototype.startRetryTimer=function(){var self=this;if(this.retryTimer)return;this.retryTimer=setTimeout(function(){/* If connection is not connected, just leave in suspended, a reattach
			 * will be triggered once it connects again */if(self.state==='suspended'&&self.connectionManager.state.sendEvents){self.retryTimer=null;logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'RealtimeChannel retry timer expired','attempting a new attach');self.requestState('attaching');}},this.realtime.options.timeouts.channelRetryTimeout);};RealtimeChannel.prototype.cancelRetryTimer=function(){if(this.retryTimer){clearTimeout(this.retryTimer);this.suspendTimer=null;}};RealtimeChannel.prototype.setInProgress=function(operation,value){this.rest.channels.setInProgress(this,operation,value);};RealtimeChannel.prototype.history=function(params,callback){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MICRO,'RealtimeChannel.history()','channel = '+this.name);/* params and callback are optional; see if params contains the callback */if(callback===undefined){if(typeof params=='function'){callback=params;params=null;}else{if(this.rest.options.promises){return utils["a"/* default */].promisify(this,'history',arguments);}callback=noop;}}if(params&&params.untilAttach){if(this.state!=='attached'){callback(new errorinfo["a"/* default */]("option untilAttach requires the channel to be attached",40000,400));return;}if(!this.properties.attachSerial){callback(new errorinfo["a"/* default */]("untilAttach was specified and channel is attached, but attachSerial is not defined",40000,400));return;}delete params.untilAttach;params.from_serial=this.properties.attachSerial;}client_channel.prototype._history.call(this,params,callback);};RealtimeChannel.prototype.whenState=function(state,listener){return eventemitter["a"/* default */].prototype.whenState.call(this,state,this.state,listener);};/* @returns null (if can safely be released) | ErrorInfo (if cannot) */RealtimeChannel.prototype.getReleaseErr=function(){var s=this.state;if(s==='initialized'||s==='detached'||s==='failed'){return null;}return new errorinfo["a"/* default */]('Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was '+s,90001,400);};return RealtimeChannel;}();/* harmony default export */var realtimechannel=realtimechannel_RealtimeChannel;// EXTERNAL MODULE: ./common/lib/util/errorreporter.js
var errorreporter=__nested_webpack_require_387524__(23);// CONCATENATED MODULE: ./common/lib/client/realtime.js
var realtime_Realtime=function(){function Realtime(options){if(!(this instanceof Realtime)){return new Realtime(options);}logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Realtime()','');client_rest.call(this,options);this.connection=new connection(this,this.options);this.channels=new Channels(this);if(options.autoConnect!==false)this.connect();}utils["a"/* default */].inherits(Realtime,client_rest);Realtime.prototype.connect=function(){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Realtime.connect()','');this.connection.connect();};Realtime.prototype.close=function(){logger["a"/* default */].logAction(logger["a"/* default */].LOG_MINOR,'Realtime.close()','');this.connection.close();};function Channels(realtime){eventemitter["a"/* default */].call(this);this.realtime=realtime;this.all={};this.inProgress={};var self=this;realtime.connection.connectionManager.on('transport.active',function(){self.onTransportActive();});}utils["a"/* default */].inherits(Channels,eventemitter["a"/* default */]);Channels.prototype.onChannelMessage=function(msg){var channelName=msg.channel;if(channelName===undefined){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Channels.onChannelMessage()','received event unspecified channel, action = '+msg.action);return;}var channel=this.all[channelName];if(!channel){logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Channels.onChannelMessage()','received event for non-existent channel: '+channelName);return;}channel.onMessage(msg);};/* called when a transport becomes connected; reattempt attach/detach
	 * for channels that are attaching or detaching.
	 * Note that this does not use inProgress as inProgress is only channels which have already made
	* at least one attempt to attach/detach */Channels.prototype.onTransportActive=function(){for(var channelName in this.all){var channel=this.all[channelName];if(channel.state==='attaching'||channel.state==='detaching'){channel.checkPendingState();}else if(channel.state==='suspended'){channel.attach();}}};Channels.prototype.reattach=function(reason){for(var channelId in this.all){var channel=this.all[channelId];/* NB this should not trigger for merely attaching channels, as they will
			 * be reattached anyway through the onTransportActive checkPendingState */if(channel.state==='attached'){channel.requestState('attaching',reason);}}};Channels.prototype.resetAttachedMsgIndicators=function(){for(var channelId in this.all){var channel=this.all[channelId];if(channel.state==='attached'){channel._attachedMsgIndicator=false;}}};Channels.prototype.checkAttachedMsgIndicators=function(connectionId){for(var channelId in this.all){var channel=this.all[channelId];if(channel.state==='attached'&&channel._attachedMsgIndicator===false){var msg='30s after a resume, found channel which has not received an attached; channelId = '+channelId+'; connectionId = '+connectionId;logger["a"/* default */].logAction(logger["a"/* default */].LOG_ERROR,'Channels.checkAttachedMsgIndicators()',msg);errorreporter["a"/* default */].report('error',msg,'channel-no-attached-after-resume');channel.requestState('attaching');};}};/* Connection interruptions (ie when the connection will no longer queue
	 * events) imply connection state changes for any channel which is either
	 * attached, pending, or will attempt to become attached in the future */Channels.prototype.propogateConnectionInterruption=function(connectionState,reason){var connectionStateToChannelState={'closing':'detached','closed':'detached','failed':'failed','suspended':'suspended'};var fromChannelStates=['attaching','attached','detaching','suspended'];var toChannelState=connectionStateToChannelState[connectionState];for(var channelId in this.all){var channel=this.all[channelId];if(utils["a"/* default */].arrIn(fromChannelStates,channel.state)){channel.notifyState(toChannelState,reason);}}};Channels.prototype.get=function(name,channelOptions){name=String(name);var channel=this.all[name];if(!channel){channel=this.all[name]=new realtimechannel(this.realtime,name,channelOptions);}else if(channelOptions){if(channel._shouldReattachToSetOptions(channelOptions)){throw new errorinfo["a"/* default */]("Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.",40000,400);}channel.setOptions(channelOptions);}return channel;};/* Included to support certain niche use-cases; most users should ignore this.
	 * Please do not use this unless you know what you're doing */Channels.prototype.release=function(name){name=String(name);var channel=this.all[name];if(!channel){return;}var releaseErr=channel.getReleaseErr();if(releaseErr){throw releaseErr;}delete this.all[name];delete this.inProgress[name];};/* Records operations currently pending on a transport; used by connectionManager to decide when
	 * it's safe to upgrade. Note that a channel might be in the attaching state without any pending
	 * operations (eg if attached while the connection state is connecting) - such a channel must not
	 * hold up an upgrade, so is not considered inProgress.
	 * Operation is currently one of either 'statechange' or 'sync' */Channels.prototype.setInProgress=function(channel,operation,inProgress){this.inProgress[channel.name]=this.inProgress[channel.name]||{};this.inProgress[channel.name][operation]=inProgress;if(!inProgress&&this.hasNopending()){this.emit('nopending');}};Channels.prototype.onceNopending=function(listener){if(this.hasNopending()){listener();return;}this.once('nopending',listener);};Channels.prototype.hasNopending=function(){return utils["a"/* default */].arrEvery(utils["a"/* default */].valuesArray(this.inProgress,true),function(operations){return!utils["a"/* default */].containsValue(operations,true);});};return Realtime;}();realtime_Realtime.Promise=function(options){options=defaults["a"/* default */].objectifyOptions(options);options.promises=true;return new realtime_Realtime(options);};realtime_Realtime.Callbacks=realtime_Realtime;/* harmony default export */var client_realtime=realtime_Realtime;// EXTERNAL MODULE: ./browser/lib/util/msgpack.js
var util_msgpack=__nested_webpack_require_387524__(24);// CONCATENATED MODULE: ./common/lib/index.js
client_rest.Utils=utils["a"/* default */];client_rest.BufferUtils=bufferutils["a"/* default */];client_rest.Crypto=util_crypto["a"/* default */];client_rest.Defaults=defaults["a"/* default */];client_rest.Http=http["a"/* default */];client_rest.Resource=client_resource;client_rest.Message=types_message["a"/* default */];client_rest.PresenceMessage=presencemessage["a"/* default */];client_realtime.Utils=utils["a"/* default */];client_realtime.BufferUtils=bufferutils["a"/* default */];client_realtime.Crypto=util_crypto["a"/* default */];client_realtime.Defaults=defaults["a"/* default */];client_realtime.Http=http["a"/* default */];client_realtime.Message=types_message["a"/* default */];client_realtime.PresenceMessage=presencemessage["a"/* default */];client_realtime.ProtocolMessage=protocolmessage["a"/* default */];client_realtime.ConnectionManager=connectionmanager["a"/* default */];/* harmony default export */var lib=__webpack_exports__["default"]={Rest:client_rest,Realtime:client_realtime,msgpack:util_msgpack["a"/* default */]};/***/}/******/])["default"]);});

/***/ }),

/***/ "./node_modules/_base64-js@1.5.1@base64-js/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/_base64-js@1.5.1@base64-js/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "./node_modules/_buffer@6.0.3@buffer/index.js":
/*!****************************************************!*\
  !*** ./node_modules/_buffer@6.0.3@buffer/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


const base64 = __webpack_require__(/*! base64-js */ "./node_modules/_base64-js@1.5.1@base64-js/index.js");

const ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/_ieee754@1.2.1@ieee754/index.js");

const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? // eslint-disable-line dot-notation
Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
: null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
  console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}

function typedArraySupport() {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1);
    const proto = {
      foo: function () {
        return 42;
      }
    };
    Object.setPrototypeOf(proto, Uint8Array.prototype);
    Object.setPrototypeOf(arr, proto);
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.buffer;
  }
});
Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.byteOffset;
  }
});

function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  } // Return an augmented `Uint8Array` instance


  const buf = new Uint8Array(length);
  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }

    return allocUnsafe(arg);
  }

  return from(arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

function from(value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value);
  }

  if (value == null) {
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
  }

  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof value === 'number') {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }

  const valueOf = value.valueOf && value.valueOf();

  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length);
  }

  const b = fromObject(value);
  if (b) return b;

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
  }

  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
}; // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148


Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  }
}

function alloc(size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  }

  return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding);
};

function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size);
};

function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding);
  }

  const length = byteLength(string, encoding) | 0;
  let buf = createBuffer(length);
  const actual = buf.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf;
}

function fromArrayLike(array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0;
  const buf = createBuffer(length);

  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }

  return buf;
}

function fromArrayView(arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView);
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
  }

  return fromArrayLike(arrayView);
}

function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }

  let buf;

  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  } // Return an augmented `Uint8Array` instance


  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}

function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0;
    const buf = createBuffer(len);

    if (buf.length === 0) {
      return buf;
    }

    obj.copy(buf, 0, 0, len);
    return buf;
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }

    return fromArrayLike(obj);
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}

function checked(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
};

Buffer.compare = function compare(a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);

  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  }

  if (a === b) return 0;
  let x = a.length;
  let y = b.length;

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  let i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  const buffer = Buffer.allocUnsafe(length);
  let pos = 0;

  for (i = 0; i < list.length; ++i) {
    let buf = list[i];

    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
        buf.copy(buffer, pos);
      } else {
        Uint8Array.prototype.set.call(buffer, buf, pos);
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    } else {
      buf.copy(buffer, pos);
    }

    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
  }

  const len = string.length;
  const mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) return 0; // Use a for loop to avoid recursion

  let loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
        }

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  let loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coercion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  const i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  const len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  const len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  const len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  const length = this.length;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.toLocaleString = Buffer.prototype.toString;

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  let str = '';
  const max = exports.INSPECT_MAX_BYTES;
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
  if (this.length > max) str += ' ... ';
  return '<Buffer ' + str + '>';
};

if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
}

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength);
  }

  if (!Buffer.isBuffer(target)) {
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  let x = thisEnd - thisStart;
  let y = end - start;
  const len = Math.min(x, y);
  const thisCopy = this.slice(thisStart, thisEnd);
  const targetCopy = target.slice(start, end);

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  let indexSize = 1;
  let arrLength = arr.length;
  let valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  let i;

  if (dir) {
    let foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      let found = true;

      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  const remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  }

  const strLen = string.length;

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  let i;

  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0;

    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  const remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  let loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];
  let i = start;

  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


const MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  let res = '';
  let i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  const len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  let out = '';

  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  const bytes = buf.slice(start, end);
  let res = ''; // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)

  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  const len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  const newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

  Object.setPrototypeOf(newBuf, Buffer.prototype);
  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  let val = this[offset];
  let mul = 1;
  let i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  let val = this[offset + --byteLength];
  let mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];

  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
  const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
  return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];

  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
  const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
  return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  let val = this[offset];
  let mul = 1;
  let i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  let i = byteLength;
  let mul = 1;
  let val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];

  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24); // Overflow

  return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];

  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const val = (first << 24) + // Overflow
  this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
  return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
});

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  let mul = 1;
  let i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  let i = byteLength - 1;
  let mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset + 3] = value >>> 24;
  this[offset + 2] = value >>> 16;
  this[offset + 1] = value >>> 8;
  this[offset] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

function wrtBigUInt64LE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(0xffffffff));
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  return offset;
}

function wrtBigUInt64BE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(0xffffffff));
  buf[offset + 7] = lo;
  lo = lo >> 8;
  buf[offset + 6] = lo;
  lo = lo >> 8;
  buf[offset + 5] = lo;
  lo = lo >> 8;
  buf[offset + 4] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
  buf[offset + 3] = hi;
  hi = hi >> 8;
  buf[offset + 2] = hi;
  hi = hi >> 8;
  buf[offset + 1] = hi;
  hi = hi >> 8;
  buf[offset] = hi;
  return offset + 8;
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    const limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  let i = 0;
  let mul = 1;
  let sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    const limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  let i = byteLength - 1;
  let mul = 1;
  let sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  this[offset + 2] = value >>> 16;
  this[offset + 3] = value >>> 24;
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  const len = end - start;

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }

    if (val.length === 1) {
      const code = val.charCodeAt(0);

      if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } else if (typeof val === 'boolean') {
    val = Number(val);
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  let i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
    const len = bytes.length;

    if (len === 0) {
      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
    }

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage


const errors = {};

function E(sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor() {
      super();
      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      }); // Add the error code to the name to include it in the stack trace.

      this.name = `${this.name} [${sym}]`; // Access the stack to generate the error message including the error code
      // from the name.

      this.stack; // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.

      delete this.name;
    }

    get code() {
      return sym;
    }

    set code(value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    }

    toString() {
      return `${this.name} [${sym}]: ${this.message}`;
    }

  };
}

E('ERR_BUFFER_OUT_OF_BOUNDS', function (name) {
  if (name) {
    return `${name} is outside of buffer bounds`;
  }

  return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function (name, actual) {
  return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function (str, range, input) {
  let msg = `The value of "${str}" is out of range.`;
  let received = input;

  if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
    received = addNumericalSeparator(String(input));
  } else if (typeof input === 'bigint') {
    received = String(input);

    if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
      received = addNumericalSeparator(received);
    }

    received += 'n';
  }

  msg += ` It must be ${range}. Received ${received}`;
  return msg;
}, RangeError);

function addNumericalSeparator(val) {
  let res = '';
  let i = val.length;
  const start = val[0] === '-' ? 1 : 0;

  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }

  return `${val.slice(0, i)}${res}`;
} // CHECK FUNCTIONS
// ===============


function checkBounds(buf, offset, byteLength) {
  validateNumber(offset, 'offset');

  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1));
  }
}

function checkIntBI(value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : '';
    let range;

    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`;
    }

    throw new errors.ERR_OUT_OF_RANGE('value', range, value);
  }

  checkBounds(buf, offset, byteLength);
}

function validateNumber(value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
  }
}

function boundsError(value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type);
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
} // HELPER FUNCTIONS
// ================


const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]; // Node strips out invalid characters like \n and \t from the string, base64-js does not

  str = str.trim().replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  const byteArray = [];

  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  let c, hi, lo;
  const byteArray = [];

  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  let i;

  for (i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
} // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166


function isInstance(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}

function numberIsNaN(obj) {
  // For IE11 support
  return obj !== obj; // eslint-disable-line no-self-compare
} // Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219


const hexSliceLookupTable = function () {
  const alphabet = '0123456789abcdef';
  const table = new Array(256);

  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16;

    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j];
    }
  }

  return table;
}(); // Return not function with Error if BigInt not supported


function defineBigIntMethod(fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}

function BufferBigIntNotDefined() {
  throw new Error('BigInt not supported');
}

/***/ }),

/***/ "./node_modules/_debug@4.3.1@debug/src/browser.js":
/*!********************************************************!*\
  !*** ./node_modules/_debug@4.3.1@debug/src/browser.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/_process@0.11.10@process/browser.js");
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

exports.destroy = (() => {
  let warned = false;
  return () => {
    if (!warned) {
      warned = true;
      console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
  };
})();
/**
 * Colors.
 */


exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  const c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  let index = 0;
  let lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, match => {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */


exports.log = console.debug || console.log || (() => {});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  let r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = "MISSING_ENV_VAR".DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/_debug@4.3.1@debug/src/common.js")(exports);
const {
  formatters
} = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};

/***/ }),

/***/ "./node_modules/_debug@4.3.1@debug/src/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/_debug@4.3.1@debug/src/common.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/_ms@2.1.2@ms/index.js");
  createDebug.destroy = destroy;
  Object.keys(env).forEach(key => {
    createDebug[key] = env[key];
  });
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    let hash = 0;

    for (let i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    let prevTime;
    let enableOverride = null;

    function debug(...args) {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      const self = debug; // Set `diff` timestamp

      const curr = Number(new Date());
      const ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      let index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return '%';
        }

        index++;
        const formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          const val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      const logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
      set: v => {
        enableOverride = v;
      }
    }); // Env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    return debug;
  }

  function extend(namespace, delimiter) {
    const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    let i;
    const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    const len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    const namespaces = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)].join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    let i;
    let len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }
  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */


  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;

/***/ }),

/***/ "./node_modules/_err-code@3.0.1@err-code/index.js":
/*!********************************************************!*\
  !*** ./node_modules/_err-code@3.0.1@err-code/index.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";

/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */

/**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */

function assign(obj, props) {
  for (const key in props) {
    Object.defineProperty(obj, key, {
      value: props[key],
      enumerable: true,
      configurable: true
    });
  }

  return obj;
}
/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */


function createError(err, code, props) {
  if (!err || typeof err === 'string') {
    throw new TypeError('Please pass an Error to err-code');
  }

  if (!props) {
    props = {};
  }

  if (typeof code === 'object') {
    props = code;
    code = '';
  }

  if (code) {
    props.code = code;
  }

  try {
    return assign(err, props);
  } catch (_) {
    props.message = err.message;
    props.stack = err.stack;

    const ErrClass = function () {};

    ErrClass.prototype = Object.create(Object.getPrototypeOf(err)); // @ts-ignore

    const output = assign(new ErrClass(), props);
    return output;
  }
}

module.exports = createError;

/***/ }),

/***/ "./node_modules/_events@3.3.0@events/events.js":
/*!*****************************************************!*\
  !*** ./node_modules/_events@3.3.0@events/events.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter;
module.exports.once = once; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }

      resolve([].slice.call(arguments));
    }

    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });

    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }

      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

/***/ }),

/***/ "./node_modules/_get-browser-rtc@1.1.0@get-browser-rtc/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_get-browser-rtc@1.1.0@get-browser-rtc/index.js ***!
  \**********************************************************************/
/***/ ((module) => {

// originally pulled out of simple-peer
module.exports = function getBrowserRTC() {
  if (typeof globalThis === 'undefined') return null;
  var wrtc = {
    RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
    RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
    RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
  };
  if (!wrtc.RTCPeerConnection) return null;
  return wrtc;
};

/***/ }),

/***/ "./node_modules/_ieee754@1.2.1@ieee754/index.js":
/*!******************************************************!*\
  !*** ./node_modules/_ieee754@1.2.1@ieee754/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "./node_modules/_inherits@2.0.4@inherits/inherits_browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_inherits@2.0.4@inherits/inherits_browser.js ***!
  \*******************************************************************/
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function () {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

/***/ }),

/***/ "./node_modules/_ms@2.1.2@ms/index.js":
/*!********************************************!*\
  !*** ./node_modules/_ms@2.1.2@ms/index.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/_process@0.11.10@process/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/_process@0.11.10@process/browser.js ***!
  \**********************************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
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
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
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

  while (len) {
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
}; // v8 likes predictible objects


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

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/_queue-microtask@1.2.3@queue-microtask/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_queue-microtask@1.2.3@queue-microtask/index.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise;
module.exports = typeof queueMicrotask === 'function' ? queueMicrotask.bind(typeof window !== 'undefined' ? window : __webpack_require__.g) // reuse resolved promise, and allocate it lazily
: cb => (promise || (promise = Promise.resolve())).then(cb).catch(err => setTimeout(() => {
  throw err;
}, 0));

/***/ }),

/***/ "./node_modules/_randombytes@2.1.0@randombytes/browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/_randombytes@2.1.0@randombytes/browser.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/_process@0.11.10@process/browser.js");
 // limit of Crypto.getRandomValues()
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues

var MAX_BYTES = 65536; // Node supports requesting up to this number of bytes
// https://github.com/nodejs/node/blob/master/lib/internal/crypto/random.js#L48

var MAX_UINT32 = 4294967295;

function oldBrowser() {
  throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11');
}

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/_safe-buffer@5.2.1@safe-buffer/index.js").Buffer;

var crypto = __webpack_require__.g.crypto || __webpack_require__.g.msCrypto;

if (crypto && crypto.getRandomValues) {
  module.exports = randomBytes;
} else {
  module.exports = oldBrowser;
}

function randomBytes(size, cb) {
  // phantomjs needs to throw
  if (size > MAX_UINT32) throw new RangeError('requested too many random bytes');
  var bytes = Buffer.allocUnsafe(size);

  if (size > 0) {
    // getRandomValues fails on IE if size == 0
    if (size > MAX_BYTES) {
      // this is the max bytes crypto.getRandomValues
      // can do at once see https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
      for (var generated = 0; generated < size; generated += MAX_BYTES) {
        // buffer.slice automatically checks if the end is past the end of
        // the buffer so we don't have to here
        crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
      }
    } else {
      crypto.getRandomValues(bytes);
    }
  }

  if (typeof cb === 'function') {
    return process.nextTick(function () {
      cb(null, bytes);
    });
  }

  return bytes;
}

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/errors-browser.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/errors-browser.js ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError = /*#__PURE__*/function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_duplex.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_duplex.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/_process@0.11.10@process/browser.js");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = __webpack_require__(/*! ./_stream_readable */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_readable.js");

var Writable = __webpack_require__(/*! ./_stream_writable */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_writable.js");

__webpack_require__(/*! inherits */ "./node_modules/_inherits@2.0.4@inherits/inherits_browser.js")(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_passthrough.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_passthrough.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.


module.exports = PassThrough;

var Transform = __webpack_require__(/*! ./_stream_transform */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_transform.js");

__webpack_require__(/*! inherits */ "./node_modules/_inherits@2.0.4@inherits/inherits_browser.js")(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_readable.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_readable.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/_process@0.11.10@process/browser.js");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = __webpack_require__(/*! events */ "./node_modules/_events@3.3.0@events/events.js").EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/


var Buffer = __webpack_require__(/*! buffer */ "./node_modules/_buffer@6.0.3@buffer/index.js").Buffer;

var OurUint8Array = __webpack_require__.g.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = __webpack_require__(/*! util */ "?6583");

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = __webpack_require__(/*! ./internal/streams/buffer_list */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/buffer_list.js");

var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/destroy.js");

var _require = __webpack_require__(/*! ./internal/streams/state */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/state.js"),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(/*! ../errors */ "./node_modules/_readable-stream@3.6.0@readable-stream/errors-browser.js").codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

__webpack_require__(/*! inherits */ "./node_modules/_inherits@2.0.4@inherits/inherits_browser.js")(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_duplex.js");
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/_string_decoder@1.3.0@string_decoder/lib/string_decoder.js").StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_duplex.js");
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/_string_decoder@1.3.0@string_decoder/lib/string_decoder.js").StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = __webpack_require__(/*! ./internal/streams/async_iterator */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/async_iterator.js");
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = __webpack_require__(/*! ./internal/streams/from */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/from-browser.js");
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_transform.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_transform.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


module.exports = Transform;

var _require$codes = __webpack_require__(/*! ../errors */ "./node_modules/_readable-stream@3.6.0@readable-stream/errors-browser.js").codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = __webpack_require__(/*! ./_stream_duplex */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_duplex.js");

__webpack_require__(/*! inherits */ "./node_modules/_inherits@2.0.4@inherits/inherits_browser.js")(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_writable.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_writable.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/_process@0.11.10@process/browser.js");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: __webpack_require__(/*! util-deprecate */ "./node_modules/_util-deprecate@1.0.2@util-deprecate/browser.js")
};
/*</replacement>*/

/*<replacement>*/

var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/


var Buffer = __webpack_require__(/*! buffer */ "./node_modules/_buffer@6.0.3@buffer/index.js").Buffer;

var OurUint8Array = __webpack_require__.g.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/destroy.js");

var _require = __webpack_require__(/*! ./internal/streams/state */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/state.js"),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(/*! ../errors */ "./node_modules/_readable-stream@3.6.0@readable-stream/errors-browser.js").codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

__webpack_require__(/*! inherits */ "./node_modules/_inherits@2.0.4@inherits/inherits_browser.js")(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_duplex.js");
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_duplex.js"); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/async_iterator.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/async_iterator.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/_process@0.11.10@process/browser.js");


var _Object$setPrototypeO;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var finished = __webpack_require__(/*! ./end-of-stream */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/end-of-stream.js");

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this; // if we have detected an error in the meanwhile
    // reject straight away


    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this; // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to


  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/buffer_list.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/buffer_list.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var _require = __webpack_require__(/*! buffer */ "./node_modules/_buffer@6.0.3@buffer/index.js"),
    Buffer = _require.Buffer;

var _require2 = __webpack_require__(/*! util */ "?02c6"),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports = /*#__PURE__*/function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/destroy.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/destroy.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/_process@0.11.10@process/browser.js");
 // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/end-of-stream.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/end-of-stream.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).


var ERR_STREAM_PREMATURE_CLOSE = __webpack_require__(/*! ../../../errors */ "./node_modules/_readable-stream@3.6.0@readable-stream/errors-browser.js").codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/from-browser.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/from-browser.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = function () {
  throw new Error('Readable.from is not available in the browser');
};

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/pipeline.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/pipeline.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).


var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = __webpack_require__(/*! ../../../errors */ "./node_modules/_readable-stream@3.6.0@readable-stream/errors-browser.js").codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = __webpack_require__(/*! ./end-of-stream */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/end-of-stream.js");
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/state.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/state.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ERR_INVALID_OPT_VALUE = __webpack_require__(/*! ../../../errors */ "./node_modules/_readable-stream@3.6.0@readable-stream/errors-browser.js").codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/stream-browser.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/stream-browser.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! events */ "./node_modules/_events@3.3.0@events/events.js").EventEmitter;

/***/ }),

/***/ "./node_modules/_readable-stream@3.6.0@readable-stream/readable-browser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_readable-stream@3.6.0@readable-stream/readable-browser.js ***!
  \*********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(/*! ./lib/_stream_readable.js */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_readable.js");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(/*! ./lib/_stream_writable.js */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_writable.js");
exports.Duplex = __webpack_require__(/*! ./lib/_stream_duplex.js */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_duplex.js");
exports.Transform = __webpack_require__(/*! ./lib/_stream_transform.js */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_transform.js");
exports.PassThrough = __webpack_require__(/*! ./lib/_stream_passthrough.js */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/_stream_passthrough.js");
exports.finished = __webpack_require__(/*! ./lib/internal/streams/end-of-stream.js */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/end-of-stream.js");
exports.pipeline = __webpack_require__(/*! ./lib/internal/streams/pipeline.js */ "./node_modules/_readable-stream@3.6.0@readable-stream/lib/internal/streams/pipeline.js");

/***/ }),

/***/ "./node_modules/_safe-buffer@5.2.1@safe-buffer/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/_safe-buffer@5.2.1@safe-buffer/index.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "./node_modules/_buffer@6.0.3@buffer/index.js");

var Buffer = buffer.Buffer; // alternative to using Object.keys for old browsers

function copyProps(src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}

if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}

function SafeBuffer(arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length);
}

SafeBuffer.prototype = Object.create(Buffer.prototype); // Copy static methods from Buffer

copyProps(Buffer, SafeBuffer);

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number');
  }

  return Buffer(arg, encodingOrOffset, length);
};

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }

  var buf = Buffer(size);

  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }

  return buf;
};

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }

  return Buffer(size);
};

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }

  return buffer.SlowBuffer(size);
};

/***/ }),

/***/ "./node_modules/_simple-peer@9.11.0@simple-peer/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/_simple-peer@9.11.0@simple-peer/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
const debug = __webpack_require__(/*! debug */ "./node_modules/_debug@4.3.1@debug/src/browser.js")('simple-peer');

const getBrowserRTC = __webpack_require__(/*! get-browser-rtc */ "./node_modules/_get-browser-rtc@1.1.0@get-browser-rtc/index.js");

const randombytes = __webpack_require__(/*! randombytes */ "./node_modules/_randombytes@2.1.0@randombytes/browser.js");

const stream = __webpack_require__(/*! readable-stream */ "./node_modules/_readable-stream@3.6.0@readable-stream/readable-browser.js");

const queueMicrotask = __webpack_require__(/*! queue-microtask */ "./node_modules/_queue-microtask@1.2.3@queue-microtask/index.js"); // TODO: remove when Node 10 is not supported


const errCode = __webpack_require__(/*! err-code */ "./node_modules/_err-code@3.0.1@err-code/index.js");

const {
  Buffer
} = __webpack_require__(/*! buffer */ "./node_modules/_buffer@6.0.3@buffer/index.js");

const MAX_BUFFERED_AMOUNT = 64 * 1024;
const ICECOMPLETE_TIMEOUT = 5 * 1000;
const CHANNEL_CLOSING_TIMEOUT = 5 * 1000; // HACK: Filter trickle lines when trickle is disabled #354

function filterTrickle(sdp) {
  return sdp.replace(/a=ice-options:trickle\s\n/g, '');
}

function warn(message) {
  console.warn(message);
}
/**
 * WebRTC peer connection. Same API as node core `net.Socket`, plus a few extra methods.
 * Duplex stream.
 * @param {Object} opts
 */


class Peer extends stream.Duplex {
  constructor(opts) {
    opts = Object.assign({
      allowHalfOpen: false
    }, opts);
    super(opts);
    this._id = randombytes(4).toString('hex').slice(0, 7);

    this._debug('new peer %o', opts);

    this.channelName = opts.initiator ? opts.channelName || randombytes(20).toString('hex') : null;
    this.initiator = opts.initiator || false;
    this.channelConfig = opts.channelConfig || Peer.channelConfig;
    this.channelNegotiated = this.channelConfig.negotiated;
    this.config = Object.assign({}, Peer.config, opts.config);
    this.offerOptions = opts.offerOptions || {};
    this.answerOptions = opts.answerOptions || {};

    this.sdpTransform = opts.sdpTransform || (sdp => sdp);

    this.streams = opts.streams || (opts.stream ? [opts.stream] : []); // support old "stream" option

    this.trickle = opts.trickle !== undefined ? opts.trickle : true;
    this.allowHalfTrickle = opts.allowHalfTrickle !== undefined ? opts.allowHalfTrickle : false;
    this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT;
    this.destroyed = false;
    this.destroying = false;
    this._connected = false;
    this.remoteAddress = undefined;
    this.remoteFamily = undefined;
    this.remotePort = undefined;
    this.localAddress = undefined;
    this.localFamily = undefined;
    this.localPort = undefined;
    this._wrtc = opts.wrtc && typeof opts.wrtc === 'object' ? opts.wrtc : getBrowserRTC();

    if (!this._wrtc) {
      if (typeof window === 'undefined') {
        throw errCode(new Error('No WebRTC support: Specify `opts.wrtc` option in this environment'), 'ERR_WEBRTC_SUPPORT');
      } else {
        throw errCode(new Error('No WebRTC support: Not a supported browser'), 'ERR_WEBRTC_SUPPORT');
      }
    }

    this._pcReady = false;
    this._channelReady = false;
    this._iceComplete = false; // ice candidate trickle done (got null candidate)

    this._iceCompleteTimer = null; // send an offer/answer anyway after some timeout

    this._channel = null;
    this._pendingCandidates = [];
    this._isNegotiating = false; // is this peer waiting for negotiation to complete?

    this._firstNegotiation = true;
    this._batchedNegotiation = false; // batch synchronous negotiations

    this._queuedNegotiation = false; // is there a queued negotiation request?

    this._sendersAwaitingStable = [];
    this._senderMap = new Map();
    this._closingInterval = null;
    this._remoteTracks = [];
    this._remoteStreams = [];
    this._chunk = null;
    this._cb = null;
    this._interval = null;

    try {
      this._pc = new this._wrtc.RTCPeerConnection(this.config);
    } catch (err) {
      this.destroy(errCode(err, 'ERR_PC_CONSTRUCTOR'));
      return;
    } // We prefer feature detection whenever possible, but sometimes that's not
    // possible for certain implementations.


    this._isReactNativeWebrtc = typeof this._pc._peerConnectionId === 'number';

    this._pc.oniceconnectionstatechange = () => {
      this._onIceStateChange();
    };

    this._pc.onicegatheringstatechange = () => {
      this._onIceStateChange();
    };

    this._pc.onconnectionstatechange = () => {
      this._onConnectionStateChange();
    };

    this._pc.onsignalingstatechange = () => {
      this._onSignalingStateChange();
    };

    this._pc.onicecandidate = event => {
      this._onIceCandidate(event);
    }; // HACK: Fix for odd Firefox behavior, see: https://github.com/feross/simple-peer/pull/783


    if (typeof this._pc.peerIdentity === 'object') {
      this._pc.peerIdentity.catch(err => {
        this.destroy(errCode(err, 'ERR_PC_PEER_IDENTITY'));
      });
    } // Other spec events, unused by this implementation:
    // - onconnectionstatechange
    // - onicecandidateerror
    // - onfingerprintfailure
    // - onnegotiationneeded


    if (this.initiator || this.channelNegotiated) {
      this._setupData({
        channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
      });
    } else {
      this._pc.ondatachannel = event => {
        this._setupData(event);
      };
    }

    if (this.streams) {
      this.streams.forEach(stream => {
        this.addStream(stream);
      });
    }

    this._pc.ontrack = event => {
      this._onTrack(event);
    };

    this._debug('initial negotiation');

    this._needsNegotiation();

    this._onFinishBound = () => {
      this._onFinish();
    };

    this.once('finish', this._onFinishBound);
  }

  get bufferSize() {
    return this._channel && this._channel.bufferedAmount || 0;
  } // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
  // https://bugs.chromium.org/p/chromium/issues/detail?id=882743


  get connected() {
    return this._connected && this._channel.readyState === 'open';
  }

  address() {
    return {
      port: this.localPort,
      family: this.localFamily,
      address: this.localAddress
    };
  }

  signal(data) {
    if (this.destroying) return;
    if (this.destroyed) throw errCode(new Error('cannot signal after peer is destroyed'), 'ERR_DESTROYED');

    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (err) {
        data = {};
      }
    }

    this._debug('signal()');

    if (data.renegotiate && this.initiator) {
      this._debug('got request to renegotiate');

      this._needsNegotiation();
    }

    if (data.transceiverRequest && this.initiator) {
      this._debug('got request for transceiver');

      this.addTransceiver(data.transceiverRequest.kind, data.transceiverRequest.init);
    }

    if (data.candidate) {
      if (this._pc.remoteDescription && this._pc.remoteDescription.type) {
        this._addIceCandidate(data.candidate);
      } else {
        this._pendingCandidates.push(data.candidate);
      }
    }

    if (data.sdp) {
      this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(data)).then(() => {
        if (this.destroyed) return;

        this._pendingCandidates.forEach(candidate => {
          this._addIceCandidate(candidate);
        });

        this._pendingCandidates = [];
        if (this._pc.remoteDescription.type === 'offer') this._createAnswer();
      }).catch(err => {
        this.destroy(errCode(err, 'ERR_SET_REMOTE_DESCRIPTION'));
      });
    }

    if (!data.sdp && !data.candidate && !data.renegotiate && !data.transceiverRequest) {
      this.destroy(errCode(new Error('signal() called with invalid signal data'), 'ERR_SIGNALING'));
    }
  }

  _addIceCandidate(candidate) {
    const iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate);

    this._pc.addIceCandidate(iceCandidateObj).catch(err => {
      if (!iceCandidateObj.address || iceCandidateObj.address.endsWith('.local')) {
        warn('Ignoring unsupported ICE candidate.');
      } else {
        this.destroy(errCode(err, 'ERR_ADD_ICE_CANDIDATE'));
      }
    });
  }
  /**
   * Send text/binary data to the remote peer.
   * @param {ArrayBufferView|ArrayBuffer|Buffer|string|Blob} chunk
   */


  send(chunk) {
    if (this.destroying) return;
    if (this.destroyed) throw errCode(new Error('cannot send after peer is destroyed'), 'ERR_DESTROYED');

    this._channel.send(chunk);
  }
  /**
   * Add a Transceiver to the connection.
   * @param {String} kind
   * @param {Object} init
   */


  addTransceiver(kind, init) {
    if (this.destroying) return;
    if (this.destroyed) throw errCode(new Error('cannot addTransceiver after peer is destroyed'), 'ERR_DESTROYED');

    this._debug('addTransceiver()');

    if (this.initiator) {
      try {
        this._pc.addTransceiver(kind, init);

        this._needsNegotiation();
      } catch (err) {
        this.destroy(errCode(err, 'ERR_ADD_TRANSCEIVER'));
      }
    } else {
      this.emit('signal', {
        // request initiator to renegotiate
        type: 'transceiverRequest',
        transceiverRequest: {
          kind,
          init
        }
      });
    }
  }
  /**
   * Add a MediaStream to the connection.
   * @param {MediaStream} stream
   */


  addStream(stream) {
    if (this.destroying) return;
    if (this.destroyed) throw errCode(new Error('cannot addStream after peer is destroyed'), 'ERR_DESTROYED');

    this._debug('addStream()');

    stream.getTracks().forEach(track => {
      this.addTrack(track, stream);
    });
  }
  /**
   * Add a MediaStreamTrack to the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */


  addTrack(track, stream) {
    if (this.destroying) return;
    if (this.destroyed) throw errCode(new Error('cannot addTrack after peer is destroyed'), 'ERR_DESTROYED');

    this._debug('addTrack()');

    const submap = this._senderMap.get(track) || new Map(); // nested Maps map [track, stream] to sender

    let sender = submap.get(stream);

    if (!sender) {
      sender = this._pc.addTrack(track, stream);
      submap.set(stream, sender);

      this._senderMap.set(track, submap);

      this._needsNegotiation();
    } else if (sender.removed) {
      throw errCode(new Error('Track has been removed. You should enable/disable tracks that you want to re-add.'), 'ERR_SENDER_REMOVED');
    } else {
      throw errCode(new Error('Track has already been added to that stream.'), 'ERR_SENDER_ALREADY_ADDED');
    }
  }
  /**
   * Replace a MediaStreamTrack by another in the connection.
   * @param {MediaStreamTrack} oldTrack
   * @param {MediaStreamTrack} newTrack
   * @param {MediaStream} stream
   */


  replaceTrack(oldTrack, newTrack, stream) {
    if (this.destroying) return;
    if (this.destroyed) throw errCode(new Error('cannot replaceTrack after peer is destroyed'), 'ERR_DESTROYED');

    this._debug('replaceTrack()');

    const submap = this._senderMap.get(oldTrack);

    const sender = submap ? submap.get(stream) : null;

    if (!sender) {
      throw errCode(new Error('Cannot replace track that was never added.'), 'ERR_TRACK_NOT_ADDED');
    }

    if (newTrack) this._senderMap.set(newTrack, submap);

    if (sender.replaceTrack != null) {
      sender.replaceTrack(newTrack);
    } else {
      this.destroy(errCode(new Error('replaceTrack is not supported in this browser'), 'ERR_UNSUPPORTED_REPLACETRACK'));
    }
  }
  /**
   * Remove a MediaStreamTrack from the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */


  removeTrack(track, stream) {
    if (this.destroying) return;
    if (this.destroyed) throw errCode(new Error('cannot removeTrack after peer is destroyed'), 'ERR_DESTROYED');

    this._debug('removeSender()');

    const submap = this._senderMap.get(track);

    const sender = submap ? submap.get(stream) : null;

    if (!sender) {
      throw errCode(new Error('Cannot remove track that was never added.'), 'ERR_TRACK_NOT_ADDED');
    }

    try {
      sender.removed = true;

      this._pc.removeTrack(sender);
    } catch (err) {
      if (err.name === 'NS_ERROR_UNEXPECTED') {
        this._sendersAwaitingStable.push(sender); // HACK: Firefox must wait until (signalingState === stable) https://bugzilla.mozilla.org/show_bug.cgi?id=1133874

      } else {
        this.destroy(errCode(err, 'ERR_REMOVE_TRACK'));
      }
    }

    this._needsNegotiation();
  }
  /**
   * Remove a MediaStream from the connection.
   * @param {MediaStream} stream
   */


  removeStream(stream) {
    if (this.destroying) return;
    if (this.destroyed) throw errCode(new Error('cannot removeStream after peer is destroyed'), 'ERR_DESTROYED');

    this._debug('removeSenders()');

    stream.getTracks().forEach(track => {
      this.removeTrack(track, stream);
    });
  }

  _needsNegotiation() {
    this._debug('_needsNegotiation');

    if (this._batchedNegotiation) return; // batch synchronous renegotiations

    this._batchedNegotiation = true;
    queueMicrotask(() => {
      this._batchedNegotiation = false;

      if (this.initiator || !this._firstNegotiation) {
        this._debug('starting batched negotiation');

        this.negotiate();
      } else {
        this._debug('non-initiator initial negotiation request discarded');
      }

      this._firstNegotiation = false;
    });
  }

  negotiate() {
    if (this.destroying) return;
    if (this.destroyed) throw errCode(new Error('cannot negotiate after peer is destroyed'), 'ERR_DESTROYED');

    if (this.initiator) {
      if (this._isNegotiating) {
        this._queuedNegotiation = true;

        this._debug('already negotiating, queueing');
      } else {
        this._debug('start negotiation');

        setTimeout(() => {
          // HACK: Chrome crashes if we immediately call createOffer
          this._createOffer();
        }, 0);
      }
    } else {
      if (this._isNegotiating) {
        this._queuedNegotiation = true;

        this._debug('already negotiating, queueing');
      } else {
        this._debug('requesting negotiation from initiator');

        this.emit('signal', {
          // request initiator to renegotiate
          type: 'renegotiate',
          renegotiate: true
        });
      }
    }

    this._isNegotiating = true;
  } // TODO: Delete this method once readable-stream is updated to contain a default
  // implementation of destroy() that automatically calls _destroy()
  // See: https://github.com/nodejs/readable-stream/issues/283


  destroy(err) {
    this._destroy(err, () => {});
  }

  _destroy(err, cb) {
    if (this.destroyed || this.destroying) return;
    this.destroying = true;

    this._debug('destroying (error: %s)', err && (err.message || err));

    queueMicrotask(() => {
      // allow events concurrent with the call to _destroy() to fire (see #692)
      this.destroyed = true;
      this.destroying = false;

      this._debug('destroy (error: %s)', err && (err.message || err));

      this.readable = this.writable = false;
      if (!this._readableState.ended) this.push(null);
      if (!this._writableState.finished) this.end();
      this._connected = false;
      this._pcReady = false;
      this._channelReady = false;
      this._remoteTracks = null;
      this._remoteStreams = null;
      this._senderMap = null;
      clearInterval(this._closingInterval);
      this._closingInterval = null;
      clearInterval(this._interval);
      this._interval = null;
      this._chunk = null;
      this._cb = null;
      if (this._onFinishBound) this.removeListener('finish', this._onFinishBound);
      this._onFinishBound = null;

      if (this._channel) {
        try {
          this._channel.close();
        } catch (err) {} // allow events concurrent with destruction to be handled


        this._channel.onmessage = null;
        this._channel.onopen = null;
        this._channel.onclose = null;
        this._channel.onerror = null;
      }

      if (this._pc) {
        try {
          this._pc.close();
        } catch (err) {} // allow events concurrent with destruction to be handled


        this._pc.oniceconnectionstatechange = null;
        this._pc.onicegatheringstatechange = null;
        this._pc.onsignalingstatechange = null;
        this._pc.onicecandidate = null;
        this._pc.ontrack = null;
        this._pc.ondatachannel = null;
      }

      this._pc = null;
      this._channel = null;
      if (err) this.emit('error', err);
      this.emit('close');
      cb();
    });
  }

  _setupData(event) {
    if (!event.channel) {
      // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
      // which is invalid behavior. Handle it gracefully.
      // See: https://github.com/feross/simple-peer/issues/163
      return this.destroy(errCode(new Error('Data channel event is missing `channel` property'), 'ERR_DATA_CHANNEL'));
    }

    this._channel = event.channel;
    this._channel.binaryType = 'arraybuffer';

    if (typeof this._channel.bufferedAmountLowThreshold === 'number') {
      this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT;
    }

    this.channelName = this._channel.label;

    this._channel.onmessage = event => {
      this._onChannelMessage(event);
    };

    this._channel.onbufferedamountlow = () => {
      this._onChannelBufferedAmountLow();
    };

    this._channel.onopen = () => {
      this._onChannelOpen();
    };

    this._channel.onclose = () => {
      this._onChannelClose();
    };

    this._channel.onerror = event => {
      const err = event.error instanceof Error ? event.error : new Error(`Datachannel error: ${event.message} ${event.filename}:${event.lineno}:${event.colno}`);
      this.destroy(errCode(err, 'ERR_DATA_CHANNEL'));
    }; // HACK: Chrome will sometimes get stuck in readyState "closing", let's check for this condition
    // https://bugs.chromium.org/p/chromium/issues/detail?id=882743


    let isClosing = false;
    this._closingInterval = setInterval(() => {
      // No "onclosing" event
      if (this._channel && this._channel.readyState === 'closing') {
        if (isClosing) this._onChannelClose(); // closing timed out: equivalent to onclose firing

        isClosing = true;
      } else {
        isClosing = false;
      }
    }, CHANNEL_CLOSING_TIMEOUT);
  }

  _read() {}

  _write(chunk, encoding, cb) {
    if (this.destroyed) return cb(errCode(new Error('cannot write after peer is destroyed'), 'ERR_DATA_CHANNEL'));

    if (this._connected) {
      try {
        this.send(chunk);
      } catch (err) {
        return this.destroy(errCode(err, 'ERR_DATA_CHANNEL'));
      }

      if (this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
        this._debug('start backpressure: bufferedAmount %d', this._channel.bufferedAmount);

        this._cb = cb;
      } else {
        cb(null);
      }
    } else {
      this._debug('write before connect');

      this._chunk = chunk;
      this._cb = cb;
    }
  } // When stream finishes writing, close socket. Half open connections are not
  // supported.


  _onFinish() {
    if (this.destroyed) return; // Wait a bit before destroying so the socket flushes.
    // TODO: is there a more reliable way to accomplish this?

    const destroySoon = () => {
      setTimeout(() => this.destroy(), 1000);
    };

    if (this._connected) {
      destroySoon();
    } else {
      this.once('connect', destroySoon);
    }
  }

  _startIceCompleteTimeout() {
    if (this.destroyed) return;
    if (this._iceCompleteTimer) return;

    this._debug('started iceComplete timeout');

    this._iceCompleteTimer = setTimeout(() => {
      if (!this._iceComplete) {
        this._iceComplete = true;

        this._debug('iceComplete timeout completed');

        this.emit('iceTimeout');
        this.emit('_iceComplete');
      }
    }, this.iceCompleteTimeout);
  }

  _createOffer() {
    if (this.destroyed) return;

    this._pc.createOffer(this.offerOptions).then(offer => {
      if (this.destroyed) return;
      if (!this.trickle && !this.allowHalfTrickle) offer.sdp = filterTrickle(offer.sdp);
      offer.sdp = this.sdpTransform(offer.sdp);

      const sendOffer = () => {
        if (this.destroyed) return;
        const signal = this._pc.localDescription || offer;

        this._debug('signal');

        this.emit('signal', {
          type: signal.type,
          sdp: signal.sdp
        });
      };

      const onSuccess = () => {
        this._debug('createOffer success');

        if (this.destroyed) return;
        if (this.trickle || this._iceComplete) sendOffer();else this.once('_iceComplete', sendOffer); // wait for candidates
      };

      const onError = err => {
        this.destroy(errCode(err, 'ERR_SET_LOCAL_DESCRIPTION'));
      };

      this._pc.setLocalDescription(offer).then(onSuccess).catch(onError);
    }).catch(err => {
      this.destroy(errCode(err, 'ERR_CREATE_OFFER'));
    });
  }

  _requestMissingTransceivers() {
    if (this._pc.getTransceivers) {
      this._pc.getTransceivers().forEach(transceiver => {
        if (!transceiver.mid && transceiver.sender.track && !transceiver.requested) {
          transceiver.requested = true; // HACK: Safari returns negotiated transceivers with a null mid

          this.addTransceiver(transceiver.sender.track.kind);
        }
      });
    }
  }

  _createAnswer() {
    if (this.destroyed) return;

    this._pc.createAnswer(this.answerOptions).then(answer => {
      if (this.destroyed) return;
      if (!this.trickle && !this.allowHalfTrickle) answer.sdp = filterTrickle(answer.sdp);
      answer.sdp = this.sdpTransform(answer.sdp);

      const sendAnswer = () => {
        if (this.destroyed) return;
        const signal = this._pc.localDescription || answer;

        this._debug('signal');

        this.emit('signal', {
          type: signal.type,
          sdp: signal.sdp
        });
        if (!this.initiator) this._requestMissingTransceivers();
      };

      const onSuccess = () => {
        if (this.destroyed) return;
        if (this.trickle || this._iceComplete) sendAnswer();else this.once('_iceComplete', sendAnswer);
      };

      const onError = err => {
        this.destroy(errCode(err, 'ERR_SET_LOCAL_DESCRIPTION'));
      };

      this._pc.setLocalDescription(answer).then(onSuccess).catch(onError);
    }).catch(err => {
      this.destroy(errCode(err, 'ERR_CREATE_ANSWER'));
    });
  }

  _onConnectionStateChange() {
    if (this.destroyed) return;

    if (this._pc.connectionState === 'failed') {
      this.destroy(errCode(new Error('Connection failed.'), 'ERR_CONNECTION_FAILURE'));
    }
  }

  _onIceStateChange() {
    if (this.destroyed) return;
    const iceConnectionState = this._pc.iceConnectionState;
    const iceGatheringState = this._pc.iceGatheringState;

    this._debug('iceStateChange (connection: %s) (gathering: %s)', iceConnectionState, iceGatheringState);

    this.emit('iceStateChange', iceConnectionState, iceGatheringState);

    if (iceConnectionState === 'connected' || iceConnectionState === 'completed') {
      this._pcReady = true;

      this._maybeReady();
    }

    if (iceConnectionState === 'failed') {
      this.destroy(errCode(new Error('Ice connection failed.'), 'ERR_ICE_CONNECTION_FAILURE'));
    }

    if (iceConnectionState === 'closed') {
      this.destroy(errCode(new Error('Ice connection closed.'), 'ERR_ICE_CONNECTION_CLOSED'));
    }
  }

  getStats(cb) {
    // statreports can come with a value array instead of properties
    const flattenValues = report => {
      if (Object.prototype.toString.call(report.values) === '[object Array]') {
        report.values.forEach(value => {
          Object.assign(report, value);
        });
      }

      return report;
    }; // Promise-based getStats() (standard)


    if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) {
      this._pc.getStats().then(res => {
        const reports = [];
        res.forEach(report => {
          reports.push(flattenValues(report));
        });
        cb(null, reports);
      }, err => cb(err)); // Single-parameter callback-based getStats() (non-standard)

    } else if (this._pc.getStats.length > 0) {
      this._pc.getStats(res => {
        // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
        if (this.destroyed) return;
        const reports = [];
        res.result().forEach(result => {
          const report = {};
          result.names().forEach(name => {
            report[name] = result.stat(name);
          });
          report.id = result.id;
          report.type = result.type;
          report.timestamp = result.timestamp;
          reports.push(flattenValues(report));
        });
        cb(null, reports);
      }, err => cb(err)); // Unknown browser, skip getStats() since it's anyone's guess which style of
      // getStats() they implement.

    } else {
      cb(null, []);
    }
  }

  _maybeReady() {
    this._debug('maybeReady pc %s channel %s', this._pcReady, this._channelReady);

    if (this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
    this._connecting = true; // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339

    const findCandidatePair = () => {
      if (this.destroyed) return;
      this.getStats((err, items) => {
        if (this.destroyed) return; // Treat getStats error as non-fatal. It's not essential.

        if (err) items = [];
        const remoteCandidates = {};
        const localCandidates = {};
        const candidatePairs = {};
        let foundSelectedCandidatePair = false;
        items.forEach(item => {
          // TODO: Once all browsers support the hyphenated stats report types, remove
          // the non-hypenated ones
          if (item.type === 'remotecandidate' || item.type === 'remote-candidate') {
            remoteCandidates[item.id] = item;
          }

          if (item.type === 'localcandidate' || item.type === 'local-candidate') {
            localCandidates[item.id] = item;
          }

          if (item.type === 'candidatepair' || item.type === 'candidate-pair') {
            candidatePairs[item.id] = item;
          }
        });

        const setSelectedCandidatePair = selectedCandidatePair => {
          foundSelectedCandidatePair = true;
          let local = localCandidates[selectedCandidatePair.localCandidateId];

          if (local && (local.ip || local.address)) {
            // Spec
            this.localAddress = local.ip || local.address;
            this.localPort = Number(local.port);
          } else if (local && local.ipAddress) {
            // Firefox
            this.localAddress = local.ipAddress;
            this.localPort = Number(local.portNumber);
          } else if (typeof selectedCandidatePair.googLocalAddress === 'string') {
            // TODO: remove this once Chrome 58 is released
            local = selectedCandidatePair.googLocalAddress.split(':');
            this.localAddress = local[0];
            this.localPort = Number(local[1]);
          }

          if (this.localAddress) {
            this.localFamily = this.localAddress.includes(':') ? 'IPv6' : 'IPv4';
          }

          let remote = remoteCandidates[selectedCandidatePair.remoteCandidateId];

          if (remote && (remote.ip || remote.address)) {
            // Spec
            this.remoteAddress = remote.ip || remote.address;
            this.remotePort = Number(remote.port);
          } else if (remote && remote.ipAddress) {
            // Firefox
            this.remoteAddress = remote.ipAddress;
            this.remotePort = Number(remote.portNumber);
          } else if (typeof selectedCandidatePair.googRemoteAddress === 'string') {
            // TODO: remove this once Chrome 58 is released
            remote = selectedCandidatePair.googRemoteAddress.split(':');
            this.remoteAddress = remote[0];
            this.remotePort = Number(remote[1]);
          }

          if (this.remoteAddress) {
            this.remoteFamily = this.remoteAddress.includes(':') ? 'IPv6' : 'IPv4';
          }

          this._debug('connect local: %s:%s remote: %s:%s', this.localAddress, this.localPort, this.remoteAddress, this.remotePort);
        };

        items.forEach(item => {
          // Spec-compliant
          if (item.type === 'transport' && item.selectedCandidatePairId) {
            setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId]);
          } // Old implementations


          if (item.type === 'googCandidatePair' && item.googActiveConnection === 'true' || (item.type === 'candidatepair' || item.type === 'candidate-pair') && item.selected) {
            setSelectedCandidatePair(item);
          }
        }); // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
        // But wait until at least 1 candidate pair is available

        if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
          setTimeout(findCandidatePair, 100);
          return;
        } else {
          this._connecting = false;
          this._connected = true;
        }

        if (this._chunk) {
          try {
            this.send(this._chunk);
          } catch (err) {
            return this.destroy(errCode(err, 'ERR_DATA_CHANNEL'));
          }

          this._chunk = null;

          this._debug('sent chunk from "write before connect"');

          const cb = this._cb;
          this._cb = null;
          cb(null);
        } // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
        // fallback to using setInterval to implement backpressure.


        if (typeof this._channel.bufferedAmountLowThreshold !== 'number') {
          this._interval = setInterval(() => this._onInterval(), 150);
          if (this._interval.unref) this._interval.unref();
        }

        this._debug('connect');

        this.emit('connect');
      });
    };

    findCandidatePair();
  }

  _onInterval() {
    if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
      return;
    }

    this._onChannelBufferedAmountLow();
  }

  _onSignalingStateChange() {
    if (this.destroyed) return;

    if (this._pc.signalingState === 'stable') {
      this._isNegotiating = false; // HACK: Firefox doesn't yet support removing tracks when signalingState !== 'stable'

      this._debug('flushing sender queue', this._sendersAwaitingStable);

      this._sendersAwaitingStable.forEach(sender => {
        this._pc.removeTrack(sender);

        this._queuedNegotiation = true;
      });

      this._sendersAwaitingStable = [];

      if (this._queuedNegotiation) {
        this._debug('flushing negotiation queue');

        this._queuedNegotiation = false;

        this._needsNegotiation(); // negotiate again

      } else {
        this._debug('negotiated');

        this.emit('negotiated');
      }
    }

    this._debug('signalingStateChange %s', this._pc.signalingState);

    this.emit('signalingStateChange', this._pc.signalingState);
  }

  _onIceCandidate(event) {
    if (this.destroyed) return;

    if (event.candidate && this.trickle) {
      this.emit('signal', {
        type: 'candidate',
        candidate: {
          candidate: event.candidate.candidate,
          sdpMLineIndex: event.candidate.sdpMLineIndex,
          sdpMid: event.candidate.sdpMid
        }
      });
    } else if (!event.candidate && !this._iceComplete) {
      this._iceComplete = true;
      this.emit('_iceComplete');
    } // as soon as we've received one valid candidate start timeout


    if (event.candidate) {
      this._startIceCompleteTimeout();
    }
  }

  _onChannelMessage(event) {
    if (this.destroyed) return;
    let data = event.data;
    if (data instanceof ArrayBuffer) data = Buffer.from(data);
    this.push(data);
  }

  _onChannelBufferedAmountLow() {
    if (this.destroyed || !this._cb) return;

    this._debug('ending backpressure: bufferedAmount %d', this._channel.bufferedAmount);

    const cb = this._cb;
    this._cb = null;
    cb(null);
  }

  _onChannelOpen() {
    if (this._connected || this.destroyed) return;

    this._debug('on channel open');

    this._channelReady = true;

    this._maybeReady();
  }

  _onChannelClose() {
    if (this.destroyed) return;

    this._debug('on channel close');

    this.destroy();
  }

  _onTrack(event) {
    if (this.destroyed) return;
    event.streams.forEach(eventStream => {
      this._debug('on track');

      this.emit('track', event.track, eventStream);

      this._remoteTracks.push({
        track: event.track,
        stream: eventStream
      });

      if (this._remoteStreams.some(remoteStream => {
        return remoteStream.id === eventStream.id;
      })) return; // Only fire one 'stream' event, even though there may be multiple tracks per stream

      this._remoteStreams.push(eventStream);

      queueMicrotask(() => {
        this._debug('on stream');

        this.emit('stream', eventStream); // ensure all tracks have been added
      });
    });
  }

  _debug() {
    const args = [].slice.call(arguments);
    args[0] = '[' + this._id + '] ' + args[0];
    debug.apply(null, args);
  }

}

Peer.WEBRTC_SUPPORT = !!getBrowserRTC();
/**
 * Expose peer and data channel config for overriding all Peer
 * instances. Otherwise, just set opts.config or opts.channelConfig
 * when constructing a Peer.
 */

Peer.config = {
  iceServers: [{
    urls: ['stun:stun.l.google.com:19302', 'stun:global.stun.twilio.com:3478']
  }],
  sdpSemantics: 'unified-plan'
};
Peer.channelConfig = {};
module.exports = Peer;

/***/ }),

/***/ "./node_modules/_string_decoder@1.3.0@string_decoder/lib/string_decoder.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_string_decoder@1.3.0@string_decoder/lib/string_decoder.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/_safe-buffer@5.2.1@safe-buffer/index.js").Buffer;
/*</replacement>*/


var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;

  switch (encoding && encoding.toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
    case 'raw':
      return true;

    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;

  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';

      case 'latin1':
      case 'binary':
        return 'latin1';

      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;

      default:
        if (retried) return; // undefined

        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
}

; // Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings

function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);

  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
} // StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.


exports.StringDecoder = StringDecoder;

function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;

  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;

    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;

    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;

    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }

  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;

  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }

  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End; // Returns only complete characters in a Buffer

StringDecoder.prototype.text = utf8Text; // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer

StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }

  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
}; // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.


function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
} // Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.


function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);

  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }

  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);

  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }

  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);

  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }

    return nb;
  }

  return 0;
} // Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.


function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }

  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }

    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
} // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.


function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;

  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }

  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
} // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.


function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
} // For UTF-8, a replacement character is added when ending on a partial
// character.


function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
} // UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.


function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);

    if (r) {
      var c = r.charCodeAt(r.length - 1);

      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }

    return r;
  }

  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
} // For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.


function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';

  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }

  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;

  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }

  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
} // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)


function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ "./node_modules/_util-deprecate@1.0.2@util-deprecate/browser.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_util-deprecate@1.0.2@util-deprecate/browser.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Module exports.
 */
module.exports = deprecate;
/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate(fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
}
/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */


function config(name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!__webpack_require__.g.localStorage) return false;
  } catch (_) {
    return false;
  }

  var val = __webpack_require__.g.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/***/ }),

/***/ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/regex.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/regex.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/rng.js":
/*!***************************************************************!*\
  !*** ./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/rng.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/stringify.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/v4.js":
/*!**************************************************************!*\
  !*** ./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/v4.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/validate.js":
/*!********************************************************************!*\
  !*** ./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/validate.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/assert.js":
/*!***********************!*\
  !*** ./src/assert.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "assertNotReached": () => (/* binding */ assertNotReached),
/* harmony export */   "assertInstanceof": () => (/* binding */ assertInstanceof),
/* harmony export */   "assertString": () => (/* binding */ assertString),
/* harmony export */   "assertNumber": () => (/* binding */ assertNumber),
/* harmony export */   "assertBoolean": () => (/* binding */ assertBoolean)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/typeof.js");

// https://source.chromium.org/chromium/chromium/src/+/main:chromeos/components/camera_app_ui/resources/js/chrome_util.js
// Copyright (c) 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Verify |condition| is truthy and return |condition| if so.
 * @template T
 * @param {T} condition A condition to check for truthiness.  Note that this
 *     may be used to test whether a value is defined or not, and we don't want
 *     to force a cast to Boolean.
 * @param {string=} optMessage A message to show on failure.
 * @return {T} A non-null |condition|.
 * @closurePrimitive {asserts.truthy}
 */
function assert(condition, optMessage) {
  if (!condition) {
    var message = 'Assertion failed';

    if (optMessage) {
      message = message + ': ' + optMessage;
    }

    throw new Error(message);
  }

  return condition;
}
/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *     return document;
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 *
 * @param {string=} optMessage A message to show when this is hit.
 * @closurePrimitive {asserts.fail}
 */

function assertNotReached(optMessage) {
  assert(false, optMessage || 'Unreachable code hit');
} // Disables eslint check for closure compiler constructor type.

/* eslint-disable valid-jsdoc */

/**
 * @param {*} value The value to check.
 * @param {function(new: T, ...?)} type A user-defined constructor.
 * @param {string=} optMessage A message to show when this is hit.
 * @return {T}
 * @template T
 */

function assertInstanceof(value, type, optMessage) {
  // We don't use assert immediately here so that we avoid constructing an error
  // message if we don't have to.
  if (!(value instanceof type)) {
    assertNotReached(optMessage || 'Value ' + value + ' is not a[n] ' + (type.name || (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(type)));
  }

  return value;
}
/* eslint-enable valid-jsdoc */

/**
 * @param {*} value The value to check.
 * @param {string=} optMessage A message to show when this is hit.
 * @return {string}
 */

function assertString(value, optMessage) {
  // We don't use assert immediately here so that we avoid constructing an error
  // message if we don't have to.
  if (typeof value !== 'string') {
    assertNotReached(optMessage || 'Value ' + value + ' is not a string');
  }

  return (
    /** @type {string} */
    value
  );
}
/**
 * @param {*} value The value to check.
 * @param {string=} optMessage A message to show when this is hit.
 * @return {number}
 */

function assertNumber(value, optMessage) {
  // We don't use assert immediately here so that we avoid constructing an error
  // message if we don't have to.
  if (typeof value !== 'number') {
    assertNotReached(optMessage || 'Value ' + value + ' is not a number');
  }

  return (
    /** @type {number} */
    value
  );
}
/**
 * @param {*} value The value to check.
 * @param {string=} optMessage A message to show when this is hit.
 * @return {boolean}
 */

function assertBoolean(value, optMessage) {
  // We don't use assert immediately here so that we avoid constructing an error
  // message if we don't have to.
  if (typeof value !== 'boolean') {
    assertNotReached(optMessage || 'Value ' + value + ' is not a boolean');
  }

  return (
    /** @type {boolean} */
    value
  );
}

/***/ }),

/***/ "./src/protocol.js":
/*!*************************!*\
  !*** ./src/protocol.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ab2str": () => (/* binding */ ab2str),
/* harmony export */   "str2ab": () => (/* binding */ str2ab)
/* harmony export */ });
function ab2str(ab) {
  if (ab.byteLength < 2) {
    return null;
  }

  var dv = new DataView(ab);
  var n = dv.getUint16(0, true);

  if (ab.byteLength < n + 2) {
    return [null, null];
  }

  var s = String.fromCharCode.apply(null, new Uint16Array(ab, 2, n / 2));
  return [s, ab.slice(n + 2)];
}

function str2ab(str) {
  var buf = new ArrayBuffer((str.length + 1) * 2); // 2 bytes for each char

  var bufView = new Uint16Array(buf);

  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i + 1] = str.charCodeAt(i);
  }

  bufView[0] = str.length * 2;
  return buf;
}



/***/ }),

/***/ "./src/signaling/signaling.ably.js":
/*!*****************************************!*\
  !*** ./src/signaling/signaling.ably.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var ably__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ably */ "./node_modules/_ably@1.2.10@ably/browser/static/ably-commonjs.js");
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assert.js */ "./src/assert.js");
/* harmony import */ var _signaling_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signaling.js */ "./src/signaling/signaling.js");
/* harmony import */ var _dotenv_node_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dotenv.node.js */ "?a425");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




 // empty in browser, using webpack plugin dotenv-webpack

var ABLY_CHANNEL_NAME = "sdps";
var DEFAULT_SERVER_PEER_ID = "foobar89";
var CACHED_ABLY_CLIENT = null;

var AblySignaling = /*#__PURE__*/function (_BasicSignaling) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(AblySignaling, _BasicSignaling);

  var _super = _createSuper(AblySignaling);

  function AblySignaling(myId) {
    var _this;

    var peerId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_SERVER_PEER_ID;
    var isClient = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var debug_log = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var use_cached_client = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AblySignaling);

    _this = _super.call(this);
    _this.myId = myId;
    _this.peerId = peerId;

    if (isClient !== true && isClient !== false) {
      (0,_assert_js__WEBPACK_IMPORTED_MODULE_6__.assertNotReached)("invalid isClient arg");
    }

    _this.isClient = isClient;

    if (use_cached_client && CACHED_ABLY_CLIENT) {
      _this.client = CACHED_ABLY_CLIENT;
    } else {
      (0,_assert_js__WEBPACK_IMPORTED_MODULE_6__.assert)("D2xX-g.9jSyoQ:8k0cp8iYpp6hi7L9", "process.env.ABLY_APP_KEY not set");
      _this.client = new ably__WEBPACK_IMPORTED_MODULE_5__.Realtime({
        key: "D2xX-g.9jSyoQ:8k0cp8iYpp6hi7L9",
        clientId: isClient ? "dummyClient" : "proxyServer",
        log: {
          level: debug_log ? 4 : 1
        }
      });
      if (use_cached_client) CACHED_ABLY_CLIENT = _this.client;
    }

    _this.channel = _this.client.channels.get(ABLY_CHANNEL_NAME);

    _this.channel.attach();

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AblySignaling, [{
    key: "getSendMsgName",
    value: function getSendMsgName(peerId) {
      return "sdps:".concat(this.isClient ? "offer" : "answer", ":").concat(peerId);
    }
  }, {
    key: "SendSdp",
    value: function SendSdp(data, peerId) {
      var _this2 = this;

      peerId = peerId || this.peerId;
      (0,_assert_js__WEBPACK_IMPORTED_MODULE_6__.assert)(peerId, "SendSdp no peerId supplied.");
      var wrapper = {
        object: data,
        fromId: this.myId,
        toId: peerId
      };
      return new Promise(function (resolve, reject) {
        _this2.channel.publish(_this2.getSendMsgName(peerId), wrapper, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }, {
    key: "WaitForSdps",
    value: function WaitForSdps(resolve, reject) {
      var _this3 = this;

      var only_once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.channel.subscribe(function (msg) {
        // resolve array instead of object because Leancloud signaling does this.
        if (_this3.isClient) {
          if (msg.name === "sdps:answer:".concat(_this3.myId)) {
            console.log("Ably client recv: ", msg);
            resolve([msg.data]);
          }
        } else {
          if (msg.name.startsWith("sdps:offer:")) {
            console.log("Ably Server recv: ", msg);
            resolve([msg.data]);
          }
        }

        if (only_once) {
          _this3.channel.unsubscribe(ABLY_CHANNEL_NAME);
        }
      });
    }
  }, {
    key: "WaitForSdpsForever",
    value: function WaitForSdpsForever(resolve) {
      this.WaitForSdps(resolve, null, false);
    }
  }, {
    key: "Close",
    value: function Close() {
      this.client.close();
    }
  }]);

  return AblySignaling;
}(_signaling_js__WEBPACK_IMPORTED_MODULE_7__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AblySignaling);

/***/ }),

/***/ "./src/signaling/signaling.js":
/*!************************************!*\
  !*** ./src/signaling/signaling.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/classCallCheck.js");




var BasicSignaling = function BasicSignaling() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, BasicSignaling);

  this.ICE_SERVERS = [{
    credential: "bshu1211",
    urls: "turn:stun.ppzhilian.com",
    username: "bshu"
  } // { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
  ];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicSignaling);

/***/ }),

/***/ "./src/webrtc.js":
/*!***********************!*\
  !*** ./src/webrtc.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSimplePeer": () => (/* binding */ CreateSimplePeer)
/* harmony export */ });
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-peer */ "./node_modules/_simple-peer@9.11.0@simple-peer/index.js");
/* harmony import */ var _wrtc_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrtc.node.js */ "?8ad1");

 // empty in browser, using webpack plugin dotenv-webpack

function CreateSimplePeer(is_initiator, signaling) {
  var SimplePeerConfig = {
    initiator: is_initiator,
    trickle: false,
    config: {
      iceServers: signaling.ICE_SERVERS
    }
  };

  if (_wrtc_node_js__WEBPACK_IMPORTED_MODULE_1__ && Object.keys(_wrtc_node_js__WEBPACK_IMPORTED_MODULE_1__).length !== 0) {
    SimplePeerConfig["wrtc"] = _wrtc_node_js__WEBPACK_IMPORTED_MODULE_1__;
  }

  return new simple_peer__WEBPACK_IMPORTED_MODULE_0__(SimplePeerConfig);
}



/***/ }),

/***/ "?02c6":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6583":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a425":
/*!***********************************!*\
  !*** ../dotenv.node.js (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8ad1":
/*!********************************!*\
  !*** ./wrtc.node.js (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialWebrtcConn": () => (/* binding */ DialWebrtcConn)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/_uuid@8.3.2@uuid/dist/esm-browser/v4.js");
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert.js */ "./src/assert.js");
/* harmony import */ var _protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protocol.js */ "./src/protocol.js");
/* harmony import */ var _webrtc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webrtc.js */ "./src/webrtc.js");
/* harmony import */ var _signaling_signaling_ably_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signaling/signaling.ably.js */ "./src/signaling/signaling.ably.js");


 // import leancloud from "./leancloud.js";




 // LeanCloud signaling is disabled by default
// import LeancloudSignaling from "./signaling/signaling.leancloud.js";
// @addr host:port
// @signaling

function DialWebrtcConn(addr, signaling) {
  (0,_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(addr.length > 0, "invalid addr for Dial()"); // every conn has its unique random id

  var myId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.default)();
  signaling = signaling || new _signaling_signaling_ably_js__WEBPACK_IMPORTED_MODULE_3__.default(myId);
  var headerAb = (0,_protocol_js__WEBPACK_IMPORTED_MODULE_1__.str2ab)(addr);
  var peer = (0,_webrtc_js__WEBPACK_IMPORTED_MODULE_2__.CreateSimplePeer)(true, signaling);
  signaling.WaitForSdps(function (sdps) {
    (0,_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(sdps.length === 1, "Client receives more than one sdp from server");
    peer.signal(sdps[0].object);
  }, function (err) {
    console.error(err);
    peer.destroy();
  });
  peer.once("signal", function (data) {
    console.log("SIGNAL", JSON.stringify(data));
    signaling.SendSdp(data);
  });
  peer.once("connect", function () {
    console.log("webrtc connnected, dial tcp conn:", addr);
    peer.send(headerAb);
  });
  peer.on("close", function () {
    console.log("webrtc close");
  });
  return peer;
}


})();

exports.WebrtcConn = __webpack_exports__;
/******/ })()
;