(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(40);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(46);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(19);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(15);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5),
    getRawTag = __webpack_require__(17),
    objectToString = __webpack_require__(18);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(27),
    getValue = __webpack_require__(32);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Author: Geraint Luff and others
Year: 2013

This code is released into the "public domain" by its author(s).  Anybody may use, alter and distribute the code without restriction.  The author makes no guarantees, and takes no liability of any kind for use of this code.

If you find a bug or make an improvement, it would be courteous to let the author know, but it is not compulsory.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2Fkeys
if (!Object.keys) {
  Object.keys = function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !{
      toString: null
    }.propertyIsEnumerable('toString'),
        dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
        dontEnumsLength = dontEnums.length;
    return function (obj) {
      if (_typeof(obj) !== 'object' && typeof obj !== 'function' || obj === null) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [];

      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (var i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }

      return result;
    };
  }();
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create


if (!Object.create) {
  Object.create = function () {
    function F() {}

    return function (o) {
      if (arguments.length !== 1) {
        throw new Error('Object.create implementation only accepts one parameter.');
      }

      F.prototype = o;
      return new F();
    };
  }();
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FisArray


if (!Array.isArray) {
  Array.isArray = function (vArg) {
    return Object.prototype.toString.call(vArg) === "[object Array]";
  };
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FindexOf


if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement
  /*, fromIndex */
  ) {
    if (this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    if (len === 0) {
      return -1;
    }

    var n = 0;

    if (arguments.length > 1) {
      n = Number(arguments[1]);

      if (n !== n) {
        // shortcut for verifying if it's NaN
        n = 0;
      } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    if (n >= len) {
      return -1;
    }

    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

    for (; k < len; k++) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }

    return -1;
  };
} // Grungey Object.isFrozen hack


if (!Object.isFrozen) {
  Object.isFrozen = function (obj) {
    var key = "tv4_test_frozen_key";

    while (obj.hasOwnProperty(key)) {
      key += Math.random();
    }

    try {
      obj[key] = true;
      delete obj[key];
      return false;
    } catch (e) {
      return true;
    }
  };
} // Based on: https://github.com/geraintluff/uri-templates, but with all the de-substitution stuff removed


var uriTemplateGlobalModifiers = {
  "+": true,
  "#": true,
  ".": true,
  "/": true,
  ";": true,
  "?": true,
  "&": true
};
var uriTemplateSuffices = {
  "*": true
};

function notReallyPercentEncode(string) {
  return encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {
    return "%" + doubleEncoded.substring(3);
  });
}

function uriTemplateSubstitution(spec) {
  var modifier = "";

  if (uriTemplateGlobalModifiers[spec.charAt(0)]) {
    modifier = spec.charAt(0);
    spec = spec.substring(1);
  }

  var separator = "";
  var prefix = "";
  var shouldEscape = true;
  var showVariables = false;
  var trimEmptyString = false;

  if (modifier === '+') {
    shouldEscape = false;
  } else if (modifier === ".") {
    prefix = ".";
    separator = ".";
  } else if (modifier === "/") {
    prefix = "/";
    separator = "/";
  } else if (modifier === '#') {
    prefix = "#";
    shouldEscape = false;
  } else if (modifier === ';') {
    prefix = ";";
    separator = ";";
    showVariables = true;
    trimEmptyString = true;
  } else if (modifier === '?') {
    prefix = "?";
    separator = "&";
    showVariables = true;
  } else if (modifier === '&') {
    prefix = "&";
    separator = "&";
    showVariables = true;
  }

  var varNames = [];
  var varList = spec.split(",");
  var varSpecs = [];
  var varSpecMap = {};

  for (var i = 0; i < varList.length; i++) {
    var varName = varList[i];
    var truncate = null;

    if (varName.indexOf(":") !== -1) {
      var parts = varName.split(":");
      varName = parts[0];
      truncate = parseInt(parts[1], 10);
    }

    var suffices = {};

    while (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {
      suffices[varName.charAt(varName.length - 1)] = true;
      varName = varName.substring(0, varName.length - 1);
    }

    var varSpec = {
      truncate: truncate,
      name: varName,
      suffices: suffices
    };
    varSpecs.push(varSpec);
    varSpecMap[varName] = varSpec;
    varNames.push(varName);
  }

  var subFunction = function subFunction(valueFunction) {
    var result = "";
    var startIndex = 0;

    for (var i = 0; i < varSpecs.length; i++) {
      var varSpec = varSpecs[i];
      var value = valueFunction(varSpec.name);

      if (value === null || value === undefined || Array.isArray(value) && value.length === 0 || _typeof(value) === 'object' && Object.keys(value).length === 0) {
        startIndex++;
        continue;
      }

      if (i === startIndex) {
        result += prefix;
      } else {
        result += separator || ",";
      }

      if (Array.isArray(value)) {
        if (showVariables) {
          result += varSpec.name + "=";
        }

        for (var j = 0; j < value.length; j++) {
          if (j > 0) {
            result += varSpec.suffices['*'] ? separator || "," : ",";

            if (varSpec.suffices['*'] && showVariables) {
              result += varSpec.name + "=";
            }
          }

          result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : notReallyPercentEncode(value[j]);
        }
      } else if (_typeof(value) === "object") {
        if (showVariables && !varSpec.suffices['*']) {
          result += varSpec.name + "=";
        }

        var first = true;

        for (var key in value) {
          if (!first) {
            result += varSpec.suffices['*'] ? separator || "," : ",";
          }

          first = false;
          result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : notReallyPercentEncode(key);
          result += varSpec.suffices['*'] ? '=' : ",";
          result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : notReallyPercentEncode(value[key]);
        }
      } else {
        if (showVariables) {
          result += varSpec.name;

          if (!trimEmptyString || value !== "") {
            result += "=";
          }
        }

        if (varSpec.truncate != null) {
          value = value.substring(0, varSpec.truncate);
        }

        result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21") : notReallyPercentEncode(value);
      }
    }

    return result;
  };

  subFunction.varNames = varNames;
  return {
    prefix: prefix,
    substitution: subFunction
  };
}

function UriTemplate(template) {
  if (!(this instanceof UriTemplate)) {
    return new UriTemplate(template);
  }

  var parts = template.split("{");
  var textParts = [parts.shift()];
  var prefixes = [];
  var substitutions = [];
  var varNames = [];

  while (parts.length > 0) {
    var part = parts.shift();
    var spec = part.split("}")[0];
    var remainder = part.substring(spec.length + 1);
    var funcs = uriTemplateSubstitution(spec);
    substitutions.push(funcs.substitution);
    prefixes.push(funcs.prefix);
    textParts.push(remainder);
    varNames = varNames.concat(funcs.substitution.varNames);
  }

  this.fill = function (valueFunction) {
    var result = textParts[0];

    for (var i = 0; i < substitutions.length; i++) {
      var substitution = substitutions[i];
      result += substitution(valueFunction);
      result += textParts[i + 1];
    }

    return result;
  };

  this.varNames = varNames;
  this.template = template;
}

UriTemplate.prototype = {
  toString: function toString() {
    return this.template;
  },
  fillFromObject: function fillFromObject(obj) {
    return this.fill(function (varName) {
      return obj[varName];
    });
  }
};

var ValidatorContext = function ValidatorContext(languages, parent, collectMultiple, errorReporter, checkRecursive, trackUnknownProperties) {
  this.missing = [];
  this.currentFormatValidation = null;
  this.formatValidationQueue = [];
  this.missingMap = {};
  this.formatValidators = parent ? Object.create(parent.formatValidators) : {};
  this.schemas = parent ? Object.create(parent.schemas) : {};
  this.collectMultiple = collectMultiple;
  this.errors = [];
  this.handleError = collectMultiple ? this.collectError : this.returnError;

  if (checkRecursive) {
    this.checkRecursive = true;
    this.scanned = [];
    this.scannedFrozen = [];
    this.scannedFrozenSchemas = [];
    this.scannedFrozenValidationErrors = [];
    this.validatedSchemasKey = 'tv4_validation_id';
    this.validationErrorsKey = 'tv4_validation_errors_id';
  }

  if (trackUnknownProperties) {
    this.trackUnknownProperties = true;
    this.knownPropertyPaths = {};
    this.unknownPropertyPaths = {};
  }

  this.errorReporter = errorReporter || defaultErrorReporter('en', languages);

  if (typeof this.errorReporter === 'string') {
    throw new Error('debug');
  }

  this.definedKeywords = {};

  if (parent) {
    for (var key in parent.definedKeywords) {
      this.definedKeywords[key] = parent.definedKeywords[key].slice(0);
    }
  }
};

ValidatorContext.prototype.getFormatValidationResults = function () {
  var ret = Promise.all(this.formatValidationQueue);
  this.formatValidationQueue.length = 0;
  return ret;
};

ValidatorContext.prototype.defineKeyword = function (keyword, keywordFunction) {
  this.definedKeywords[keyword] = this.definedKeywords[keyword] || [];
  this.definedKeywords[keyword].push(keywordFunction);
};

ValidatorContext.prototype.createError = function (code, messageParams, dataPath, schemaPath, subErrors, data, schema) {
  var error = new ValidationError(code, messageParams, dataPath, schemaPath, subErrors);
  error.message = this.errorReporter(error, data, schema);
  return error;
};

ValidatorContext.prototype.returnError = function (error) {
  return error;
};

ValidatorContext.prototype.collectError = function (error) {
  if (error) {
    this.errors.push(error);
  }

  return null;
};

ValidatorContext.prototype.prefixErrors = function (startIndex, dataPath, schemaPath) {
  for (var i = startIndex; i < this.errors.length; i++) {
    this.errors[i] = this.errors[i].prefixWith(dataPath, schemaPath);
  }

  return this;
};

ValidatorContext.prototype.banUnknownProperties = function (data, schema) {
  for (var unknownPath in this.unknownPropertyPaths) {
    var error = this.createError(ErrorCodes.UNKNOWN_PROPERTY, {
      path: unknownPath
    }, unknownPath, "", null, data, schema);
    var result = this.handleError(error);

    if (result) {
      return result;
    }
  }

  return null;
};

ValidatorContext.prototype.addFormat = function (format, validator) {
  if (typeof validator === 'function') {
    validator = {
      validator: validator
    };
  }

  if (_typeof(format) === 'object') {
    for (var key in format) {
      this.addFormat(key, format[key]);
    }

    return this;
  }

  this.formatValidators[format] = validator;
};

ValidatorContext.prototype.resolveRefs = function (schema, urlHistory) {
  if (schema['$ref'] !== undefined) {
    urlHistory = urlHistory || {};

    if (urlHistory[schema['$ref']]) {
      return this.createError(ErrorCodes.CIRCULAR_REFERENCE, {
        urls: Object.keys(urlHistory).join(', ')
      }, '', '', null, undefined, schema);
    }

    urlHistory[schema['$ref']] = true;
    schema = this.getSchema(schema['$ref'], urlHistory);
  }

  return schema;
};

ValidatorContext.prototype.getSchema = function (url, urlHistory) {
  var schema;

  if (this.schemas[url] !== undefined) {
    schema = this.schemas[url];
    return this.resolveRefs(schema, urlHistory);
  }

  var baseUrl = url;
  var fragment = "";

  if (url.indexOf('#') !== -1) {
    fragment = url.substring(url.indexOf("#") + 1);
    baseUrl = url.substring(0, url.indexOf("#"));
  }

  if (_typeof(this.schemas[baseUrl]) === 'object') {
    schema = this.schemas[baseUrl];
    var pointerPath = decodeURIComponent(fragment);

    if (pointerPath === "") {
      return this.resolveRefs(schema, urlHistory);
    } else if (pointerPath.charAt(0) !== "/") {
      return undefined;
    }

    var parts = pointerPath.split("/").slice(1);

    for (var i = 0; i < parts.length; i++) {
      var component = parts[i].replace(/~1/g, "/").replace(/~0/g, "~");

      if (schema[component] === undefined) {
        schema = undefined;
        break;
      }

      schema = schema[component];
    }

    if (schema !== undefined) {
      return this.resolveRefs(schema, urlHistory);
    }
  }

  if (this.missing[baseUrl] === undefined) {
    this.missing.push(baseUrl);
    this.missing[baseUrl] = baseUrl;
    this.missingMap[baseUrl] = baseUrl;
  }
};

ValidatorContext.prototype.searchSchemas = function (schema, url) {
  if (Array.isArray(schema)) {
    for (var i = 0; i < schema.length; i++) {
      this.searchSchemas(schema[i], url);
    }
  } else if (schema && _typeof(schema) === "object") {
    if (typeof schema.id === "string") {
      if (isTrustedUrl(url, schema.id)) {
        if (this.schemas[schema.id] === undefined) {
          this.schemas[schema.id] = schema;
        }
      }
    }

    for (var key in schema) {
      if (key !== "enum") {
        if (_typeof(schema[key]) === "object") {
          this.searchSchemas(schema[key], url);
        } else if (key === "$ref") {
          var uri = getDocumentUri(schema[key]);

          if (uri && this.schemas[uri] === undefined && this.missingMap[uri] === undefined) {
            this.missingMap[uri] = uri;
          }
        }
      }
    }
  }
};

ValidatorContext.prototype.addSchema = function (url, schema) {
  //overload
  if (typeof url !== 'string' || typeof schema === 'undefined') {
    if (_typeof(url) === 'object' && typeof url.id === 'string') {
      schema = url;
      url = schema.id;
    } else {
      return;
    }
  }

  if (url === getDocumentUri(url) + "#") {
    // Remove empty fragment
    url = getDocumentUri(url);
  }

  this.schemas[url] = schema;
  delete this.missingMap[url];
  normSchema(schema, url);
  this.searchSchemas(schema, url);
};

ValidatorContext.prototype.getSchemaMap = function () {
  var map = {};

  for (var key in this.schemas) {
    map[key] = this.schemas[key];
  }

  return map;
};

ValidatorContext.prototype.getSchemaUris = function (filterRegExp) {
  var list = [];

  for (var key in this.schemas) {
    if (!filterRegExp || filterRegExp.test(key)) {
      list.push(key);
    }
  }

  return list;
};

ValidatorContext.prototype.getMissingUris = function (filterRegExp) {
  var list = [];

  for (var key in this.missingMap) {
    if (!filterRegExp || filterRegExp.test(key)) {
      list.push(key);
    }
  }

  return list;
};

ValidatorContext.prototype.dropSchemas = function () {
  this.schemas = {};
  this.reset();
};

ValidatorContext.prototype.reset = function () {
  this.missing = [];
  this.missingMap = {};
  this.errors = [];
};

ValidatorContext.prototype.validateAll = function (data, schema, dataPathParts, schemaPathParts, dataPointerPath) {
  var _this = this;

  var topLevel;
  schema = this.resolveRefs(schema);

  if (!schema) {
    return null;
  } else if (schema instanceof ValidationError) {
    this.errors.push(schema);
    return schema;
  }

  var startErrorCount = this.errors.length;
  var frozenIndex,
      scannedFrozenSchemaIndex = null,
      scannedSchemasIndex = null;

  if (this.checkRecursive && data && _typeof(data) === 'object') {
    topLevel = !this.scanned.length;

    if (data[this.validatedSchemasKey]) {
      var schemaIndex = data[this.validatedSchemasKey].indexOf(schema);

      if (schemaIndex !== -1) {
        this.errors = this.errors.concat(data[this.validationErrorsKey][schemaIndex]);
        return null;
      }
    }

    if (Object.isFrozen(data)) {
      frozenIndex = this.scannedFrozen.indexOf(data);

      if (frozenIndex !== -1) {
        var frozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].indexOf(schema);

        if (frozenSchemaIndex !== -1) {
          this.errors = this.errors.concat(this.scannedFrozenValidationErrors[frozenIndex][frozenSchemaIndex]);
          return null;
        }
      }
    }

    this.scanned.push(data);

    if (Object.isFrozen(data)) {
      if (frozenIndex === -1) {
        frozenIndex = this.scannedFrozen.length;
        this.scannedFrozen.push(data);
        this.scannedFrozenSchemas.push([]);
      }

      scannedFrozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].length;
      this.scannedFrozenSchemas[frozenIndex][scannedFrozenSchemaIndex] = schema;
      this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = [];
    } else {
      if (!data[this.validatedSchemasKey]) {
        try {
          Object.defineProperty(data, this.validatedSchemasKey, {
            value: [],
            configurable: true
          });
          Object.defineProperty(data, this.validationErrorsKey, {
            value: [],
            configurable: true
          });
        } catch (e) {
          //IE 7/8 workaround
          data[this.validatedSchemasKey] = [];
          data[this.validationErrorsKey] = [];
        }
      }

      scannedSchemasIndex = data[this.validatedSchemasKey].length;
      data[this.validatedSchemasKey][scannedSchemasIndex] = schema;
      data[this.validationErrorsKey][scannedSchemasIndex] = [];
    }
  }

  var errorCount = this.errors.length;
  var error = this.validateBasic(data, schema, dataPointerPath) || this.validateNumeric(data, schema, dataPointerPath) || this.validateString(data, schema, dataPointerPath) || this.validateArray(data, schema, dataPointerPath) || this.validateObject(data, schema, dataPointerPath) || this.validateCombinations(data, schema, dataPointerPath) || this.validateHypermedia(data, schema, dataPointerPath) || this.validateFormat(data, schema, dataPointerPath) || this.validateDefinedKeywords(data, schema, dataPointerPath) || null;

  if (topLevel) {
    while (this.scanned.length) {
      var item = this.scanned.pop();
      delete item[this.validatedSchemasKey];
    }

    this.scannedFrozen = [];
    this.scannedFrozenSchemas = [];
  }

  if (this.currentFormatValidation) {
    var dataPathPartsThis = dataPathParts && dataPathParts.slice() || [];
    var schemaPathPartsThis = schemaPathParts && schemaPathParts.slice() || [];
    this.formatValidationQueue.push(this.currentFormatValidation.then(function (error) {
      if (!error) {
        return;
      }

      var dataPathParts = dataPathPartsThis;
      var schemaPathParts = schemaPathPartsThis;

      while (dataPathParts && dataPathParts.length || schemaPathParts && schemaPathParts.length) {
        var dataPart = dataPathParts && dataPathParts.length ? "" + dataPathParts.pop() : null;
        var schemaPart = schemaPathParts && schemaPathParts.length ? "" + schemaPathParts.pop() : null;

        if (error) {
          error = error.prefixWith(dataPart, schemaPart);
        }

        _this.prefixErrors(errorCount, dataPart, schemaPart);
      }

      return error;
    }));
    this.currentFormatValidation = null;
  }

  if (error || errorCount !== this.errors.length) {
    while (dataPathParts && dataPathParts.length || schemaPathParts && schemaPathParts.length) {
      var dataPart = dataPathParts && dataPathParts.length ? "" + dataPathParts.pop() : null;
      var schemaPart = schemaPathParts && schemaPathParts.length ? "" + schemaPathParts.pop() : null;

      if (error) {
        error = error.prefixWith(dataPart, schemaPart);
      }

      this.prefixErrors(errorCount, dataPart, schemaPart);
    }
  }

  if (scannedFrozenSchemaIndex !== null) {
    this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = this.errors.slice(startErrorCount);
  } else if (scannedSchemasIndex !== null) {
    data[this.validationErrorsKey][scannedSchemasIndex] = this.errors.slice(startErrorCount);
  }

  return this.handleError(error);
};

var asyncValidateFormatCache = {};

ValidatorContext.prototype.validateFormat = function (data, schema) {
  var _this2 = this;

  if (typeof schema.format !== 'string') {
    return null;
  }

  var formatValidator = this.formatValidators[schema.format];

  if (!formatValidator) {
    return null;
  }

  this.currentFormatValidation = new Promise(function (resolve) {
    var handleErrorMessage = function handleErrorMessage(errorMessage) {
      if (typeof errorMessage === 'string' || typeof errorMessage === 'number') {
        resolve(_this2.createError(ErrorCodes.FORMAT_CUSTOM, {
          message: errorMessage
        }, '', '/format', null, data, schema));
      } else if (errorMessage && _typeof(errorMessage) === 'object') {
        resolve(_this2.createError(ErrorCodes.FORMAT_CUSTOM, {
          message: errorMessage.message || "?"
        }, errorMessage.dataPath || '', errorMessage.schemaPath || "/format", null, data, schema));
      } else {
        resolve(null);
      }
    };

    var cache = false;
    cache = formatValidator.cache;
    formatValidator = formatValidator.validator;

    function getErrorMessage(cb) {
      var errorMessage = formatValidator.call(null, data, schema);

      if (errorMessage && errorMessage.then) {
        errorMessage.then(function (errorMessage) {
          cb(errorMessage);
        });
      } else {
        cb(errorMessage);
      }
    }

    if (cache) {
      var cacheKey = "".concat(JSON.stringify(data), "$").concat(JSON.stringify(schema));

      if (asyncValidateFormatCache[cacheKey] === undefined) {
        getErrorMessage(function (errorMessage) {
          asyncValidateFormatCache[cacheKey] = errorMessage;
          handleErrorMessage(errorMessage);
        });
      } else {
        handleErrorMessage(asyncValidateFormatCache[cacheKey]);
      }
    } else {
      getErrorMessage(function (errorMessage) {
        handleErrorMessage(errorMessage);
      });
    }
  });
  return null;
};

ValidatorContext.prototype.validateDefinedKeywords = function (data, schema, dataPointerPath) {
  for (var key in this.definedKeywords) {
    if (typeof schema[key] === 'undefined') {
      continue;
    }

    var validationFunctions = this.definedKeywords[key];

    for (var i = 0; i < validationFunctions.length; i++) {
      var func = validationFunctions[i];
      var result = func(data, schema[key], schema, dataPointerPath);

      if (typeof result === 'string' || typeof result === 'number') {
        return this.createError(ErrorCodes.KEYWORD_CUSTOM, {
          key: key,
          message: result
        }, '', '', null, data, schema).prefixWith(null, key);
      } else if (result && _typeof(result) === 'object') {
        var code = result.code;

        if (typeof code === 'string') {
          if (!ErrorCodes[code]) {
            throw new Error('Undefined error code (use defineError): ' + code);
          }

          code = ErrorCodes[code];
        } else if (typeof code !== 'number') {
          code = ErrorCodes.KEYWORD_CUSTOM;
        }

        var messageParams = _typeof(result.message) === 'object' ? result.message : {
          key: key,
          message: result.message || "?"
        };
        var schemaPath = result.schemaPath || "/" + key.replace(/~/g, '~0').replace(/\//g, '~1');
        return this.createError(code, messageParams, result.dataPath || null, schemaPath, null, data, schema);
      }
    }
  }

  return null;
};

function recursiveCompare(A, B) {
  if (A === B) {
    return true;
  }

  if (A && B && _typeof(A) === "object" && _typeof(B) === "object") {
    if (Array.isArray(A) !== Array.isArray(B)) {
      return false;
    } else if (Array.isArray(A)) {
      if (A.length !== B.length) {
        return false;
      }

      for (var i = 0; i < A.length; i++) {
        if (!recursiveCompare(A[i], B[i])) {
          return false;
        }
      }
    } else {
      var key;

      for (key in A) {
        if (B[key] === undefined && A[key] !== undefined) {
          return false;
        }
      }

      for (key in B) {
        if (A[key] === undefined && B[key] !== undefined) {
          return false;
        }
      }

      for (key in A) {
        if (!recursiveCompare(A[key], B[key])) {
          return false;
        }
      }
    }

    return true;
  }

  return false;
}

ValidatorContext.prototype.validateBasic = function validateBasic(data, schema, dataPointerPath) {
  var error;

  if (error = this.validateType(data, schema, dataPointerPath)) {
    return error.prefixWith(null, "type");
  }

  if (error = this.validateEnum(data, schema, dataPointerPath)) {
    return error.prefixWith(null, "type");
  }

  return null;
};

ValidatorContext.prototype.validateType = function validateType(data, schema) {
  if (schema.type === undefined) {
    return null;
  }

  var dataType = _typeof(data);

  if (data === null) {
    dataType = "null";
  } else if (Array.isArray(data)) {
    dataType = "array";
  }

  var allowedTypes = schema.type;

  if (!Array.isArray(allowedTypes)) {
    allowedTypes = [allowedTypes];
  }

  for (var i = 0; i < allowedTypes.length; i++) {
    var type = allowedTypes[i];

    if (type === dataType || type === "integer" && dataType === "number" && data % 1 === 0) {
      return null;
    }
  }

  return this.createError(ErrorCodes.INVALID_TYPE, {
    type: dataType,
    expected: allowedTypes.join("/")
  }, '', '', null, data, schema);
};

ValidatorContext.prototype.validateEnum = function validateEnum(data, schema) {
  if (schema["enum"] === undefined) {
    return null;
  }

  for (var i = 0; i < schema["enum"].length; i++) {
    var enumVal = schema["enum"][i];

    if (recursiveCompare(data, enumVal)) {
      return null;
    }
  }

  return this.createError(ErrorCodes.ENUM_MISMATCH, {
    value: typeof JSON !== 'undefined' ? JSON.stringify(data) : data
  }, '', '', null, data, schema);
};

ValidatorContext.prototype.validateNumeric = function validateNumeric(data, schema, dataPointerPath) {
  return this.validateMultipleOf(data, schema, dataPointerPath) || this.validateMinMax(data, schema, dataPointerPath) || this.validateNaN(data, schema, dataPointerPath) || null;
};

var CLOSE_ENOUGH_LOW = Math.pow(2, -51);
var CLOSE_ENOUGH_HIGH = 1 - CLOSE_ENOUGH_LOW;

ValidatorContext.prototype.validateMultipleOf = function validateMultipleOf(data, schema) {
  var multipleOf = schema.multipleOf || schema.divisibleBy;

  if (multipleOf === undefined) {
    return null;
  }

  if (typeof data === "number") {
    var remainder = data / multipleOf % 1;

    if (remainder >= CLOSE_ENOUGH_LOW && remainder < CLOSE_ENOUGH_HIGH) {
      return this.createError(ErrorCodes.NUMBER_MULTIPLE_OF, {
        value: data,
        multipleOf: multipleOf
      }, '', '', null, data, schema);
    }
  }

  return null;
};

ValidatorContext.prototype.validateMinMax = function validateMinMax(data, schema) {
  if (typeof data !== "number") {
    return null;
  }

  if (schema.minimum !== undefined) {
    if (data < schema.minimum) {
      return this.createError(ErrorCodes.NUMBER_MINIMUM, {
        value: data,
        minimum: schema.minimum
      }, '', '/minimum', null, data, schema);
    }

    if (schema.exclusiveMinimum && data === schema.minimum) {
      return this.createError(ErrorCodes.NUMBER_MINIMUM_EXCLUSIVE, {
        value: data,
        minimum: schema.minimum
      }, '', '/exclusiveMinimum', null, data, schema);
    }
  }

  if (schema.maximum !== undefined) {
    if (data > schema.maximum) {
      return this.createError(ErrorCodes.NUMBER_MAXIMUM, {
        value: data,
        maximum: schema.maximum
      }, '', '/maximum', null, data, schema);
    }

    if (schema.exclusiveMaximum && data === schema.maximum) {
      return this.createError(ErrorCodes.NUMBER_MAXIMUM_EXCLUSIVE, {
        value: data,
        maximum: schema.maximum
      }, '', '/exclusiveMaximum', null, data, schema);
    }
  }

  return null;
};

ValidatorContext.prototype.validateNaN = function validateNaN(data, schema) {
  if (typeof data !== "number") {
    return null;
  }

  if (isNaN(data) === true || data === Infinity || data === -Infinity) {
    return this.createError(ErrorCodes.NUMBER_NOT_A_NUMBER, {
      value: data
    }, '', '/type', null, data, schema);
  }

  return null;
};

ValidatorContext.prototype.validateString = function validateString(data, schema, dataPointerPath) {
  return this.validateStringLength(data, schema, dataPointerPath) || this.validateStringPattern(data, schema, dataPointerPath) || null;
};

ValidatorContext.prototype.validateStringLength = function validateStringLength(data, schema) {
  if (typeof data !== "string") {
    return null;
  }

  if (schema.minLength !== undefined) {
    if (data.length < schema.minLength) {
      return this.createError(ErrorCodes.STRING_LENGTH_SHORT, {
        length: data.length,
        minimum: schema.minLength
      }, '', '/minLength', null, data, schema);
    }
  }

  if (schema.maxLength !== undefined) {
    if (data.length > schema.maxLength) {
      return this.createError(ErrorCodes.STRING_LENGTH_LONG, {
        length: data.length,
        maximum: schema.maxLength
      }, '', '/maxLength', null, data, schema);
    }
  }

  return null;
};

ValidatorContext.prototype.validateStringPattern = function validateStringPattern(data, schema) {
  if (typeof data !== "string" || typeof schema.pattern !== "string" && !(schema.pattern instanceof RegExp)) {
    return null;
  }

  var regexp;

  if (schema.pattern instanceof RegExp) {
    regexp = schema.pattern;
  } else {
    var body,
        flags = ''; // Check for regular expression literals
    // @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5

    var literal = schema.pattern.match(/^\/(.+)\/([img]*)$/);

    if (literal) {
      body = literal[1];
      flags = literal[2];
    } else {
      body = schema.pattern;
    }

    regexp = new RegExp(body, flags);
  }

  if (!regexp.test(data)) {
    return this.createError(ErrorCodes.STRING_PATTERN, {
      pattern: schema.pattern
    }, '', '/pattern', null, data, schema);
  }

  return null;
};

ValidatorContext.prototype.validateArray = function validateArray(data, schema, dataPointerPath) {
  if (!Array.isArray(data)) {
    return null;
  }

  return this.validateArrayLength(data, schema, dataPointerPath) || this.validateArrayUniqueItems(data, schema, dataPointerPath) || this.validateArrayItems(data, schema, dataPointerPath) || null;
};

ValidatorContext.prototype.validateArrayLength = function validateArrayLength(data, schema) {
  var error;

  if (schema.minItems && schema.minItems === schema.maxItems) {
    if (data.length !== schema.minItems) {
      error = this.createError(ErrorCodes.ARRAY_LENGTH_NOT_MATCH, {
        length: data.length,
        minimum: schema.minItems
      }, '', '/minItems', null, data, schema);

      if (this.handleError(error)) {
        return error;
      }
    }
  }

  if (schema.minItems !== undefined) {
    if (data.length < schema.minItems) {
      error = this.createError(ErrorCodes.ARRAY_LENGTH_SHORT, {
        length: data.length,
        minimum: schema.minItems
      }, '', '/minItems', null, data, schema);

      if (this.handleError(error)) {
        return error;
      }
    }
  }

  if (schema.maxItems !== undefined) {
    if (data.length > schema.maxItems) {
      error = this.createError(ErrorCodes.ARRAY_LENGTH_LONG, {
        length: data.length,
        maximum: schema.maxItems
      }, '', '/maxItems', null, data, schema);

      if (this.handleError(error)) {
        return error;
      }
    }
  }

  return null;
};

ValidatorContext.prototype.validateArrayUniqueItems = function validateArrayUniqueItems(data, schema) {
  if (schema.uniqueItems) {
    for (var i = 0; i < data.length; i++) {
      for (var j = i + 1; j < data.length; j++) {
        if (recursiveCompare(data[i], data[j])) {
          var error = this.createError(ErrorCodes.ARRAY_UNIQUE, {
            match1: i,
            match2: j
          }, '', '/uniqueItems', null, data, schema);

          if (this.handleError(error)) {
            return error;
          }
        }
      }
    }
  }

  return null;
};

ValidatorContext.prototype.validateArrayItems = function validateArrayItems(data, schema, dataPointerPath) {
  if (schema.items === undefined) {
    return null;
  }

  var error, i;

  if (Array.isArray(schema.items)) {
    for (i = 0; i < data.length; i++) {
      if (i < schema.items.length) {
        if (error = this.validateAll(data[i], schema.items[i], [i], ["items", i], dataPointerPath + "/" + i)) {
          return error;
        }
      } else if (schema.additionalItems !== undefined) {
        if (typeof schema.additionalItems === "boolean") {
          if (!schema.additionalItems) {
            error = this.createError(ErrorCodes.ARRAY_ADDITIONAL_ITEMS, {}, '/' + i, '/additionalItems', null, data, schema);

            if (this.handleError(error)) {
              return error;
            }
          }
        } else if (error = this.validateAll(data[i], schema.additionalItems, [i], ["additionalItems"], dataPointerPath + "/" + i)) {
          return error;
        }
      }
    }
  } else {
    for (i = 0; i < data.length; i++) {
      if (error = this.validateAll(data[i], schema.items, [i], ["items"], dataPointerPath + "/" + i)) {
        return error;
      }
    }
  }

  return null;
};

ValidatorContext.prototype.validateObject = function validateObject(data, schema, dataPointerPath) {
  if (_typeof(data) !== "object" || data === null || Array.isArray(data)) {
    return null;
  }

  return this.validateObjectMinMaxProperties(data, schema, dataPointerPath) || this.validateObjectRequiredProperties(data, schema, dataPointerPath) || this.validateObjectProperties(data, schema, dataPointerPath) || this.validateObjectDependencies(data, schema, dataPointerPath) || null;
};

ValidatorContext.prototype.validateObjectMinMaxProperties = function validateObjectMinMaxProperties(data, schema) {
  var keys = Object.keys(data);
  var error;

  if (schema.minProperties !== undefined) {
    if (keys.length < schema.minProperties) {
      error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MINIMUM, {
        propertyCount: keys.length,
        minimum: schema.minProperties
      }, "", "/minProperties", null, data, schema);

      if (this.handleError(error)) {
        return error;
      }
    }
  }

  if (schema.maxProperties !== undefined) {
    if (keys.length > schema.maxProperties) {
      error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MAXIMUM, {
        propertyCount: keys.length,
        maximum: schema.maxProperties
      }, "", "/maxProperties", null, data, schema);

      if (this.handleError(error)) {
        return error;
      }
    }
  }

  return null;
};

ValidatorContext.prototype.validateObjectRequiredProperties = function validateObjectRequiredProperties(data, schema) {
  if (schema.required !== undefined) {
    for (var i = 0; i < schema.required.length; i++) {
      var key = schema.required[i];
      var propertyCondition = schema.properties[key].condition;

      if (propertyCondition) {
        var conditionResult;

        try {
          /*jslint evil: true */
          conditionResult = new Function("model", "rootModel", "parentModel", "return " + propertyCondition + ";")(this.root, this.root, data);
        } catch (e) {
          console.error(e);
        }

        if (!conditionResult) {
          //skip false condition properties
          continue;
        }
      }

      if (data[key] === undefined || data[key] === "" || data[key] === null) {
        var error = this.createError(ErrorCodes.OBJECT_REQUIRED, {
          key: key
        }, "", "/required/" + i, null, data, schema);

        if (this.handleError(error)) {
          return error;
        }
      }
    }
  }

  return null;
};

ValidatorContext.prototype.validateObjectProperties = function validateObjectProperties(data, schema, dataPointerPath) {
  var error;

  for (var key in data) {
    var keyPointerPath = dataPointerPath + "/" + key.replace(/~/g, "~0").replace(/\//g, "~1");
    var foundMatch = false;

    if (schema.properties !== undefined && schema.properties[key] !== undefined) {
      foundMatch = true;

      if (error = this.validateAll(data[key], schema.properties[key], [key], ["properties", key], keyPointerPath)) {
        return error;
      }
    }

    if (schema.patternProperties !== undefined) {
      for (var patternKey in schema.patternProperties) {
        var regexp = new RegExp(patternKey);

        if (regexp.test(key)) {
          foundMatch = true;

          if (error = this.validateAll(data[key], schema.patternProperties[patternKey], [key], ["patternProperties", patternKey], keyPointerPath)) {
            return error;
          }
        }
      }
    }

    if (!foundMatch) {
      if (schema.additionalProperties !== undefined) {
        if (this.trackUnknownProperties) {
          this.knownPropertyPaths[keyPointerPath] = true;
          delete this.unknownPropertyPaths[keyPointerPath];
        }

        if (typeof schema.additionalProperties === "boolean") {
          if (!schema.additionalProperties) {
            error = this.createError(ErrorCodes.OBJECT_ADDITIONAL_PROPERTIES, {
              key: key
            }, "", "/additionalProperties", null, data, schema).prefixWith(key, null);

            if (this.handleError(error)) {
              return error;
            }
          }
        } else {
          if (error = this.validateAll(data[key], schema.additionalProperties, [key], ["additionalProperties"], keyPointerPath)) {
            return error;
          }
        }
      } else if (this.trackUnknownProperties && !this.knownPropertyPaths[keyPointerPath]) {
        this.unknownPropertyPaths[keyPointerPath] = true;
      }
    } else if (this.trackUnknownProperties) {
      this.knownPropertyPaths[keyPointerPath] = true;
      delete this.unknownPropertyPaths[keyPointerPath];
    }
  }

  return null;
};

ValidatorContext.prototype.validateObjectDependencies = function validateObjectDependencies(data, schema, dataPointerPath) {
  var error;

  if (schema.dependencies !== undefined) {
    for (var depKey in schema.dependencies) {
      if (data[depKey] !== undefined) {
        var dep = schema.dependencies[depKey];

        if (typeof dep === "string") {
          if (data[dep] === undefined) {
            error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {
              key: depKey,
              missing: dep
            }, "", "", null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");

            if (this.handleError(error)) {
              return error;
            }
          }
        } else if (Array.isArray(dep)) {
          for (var i = 0; i < dep.length; i++) {
            var requiredKey = dep[i];

            if (data[requiredKey] === undefined) {
              error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {
                key: depKey,
                missing: requiredKey
              }, "", "/" + i, null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");

              if (this.handleError(error)) {
                return error;
              }
            }
          }
        } else {
          if (error = this.validateAll(data, dep, [], ["dependencies", depKey], dataPointerPath)) {
            return error;
          }
        }
      }
    }
  }

  return null;
};

ValidatorContext.prototype.validateCombinations = function validateCombinations(data, schema, dataPointerPath) {
  return this.validateAllOf(data, schema, dataPointerPath) || this.validateAnyOf(data, schema, dataPointerPath) || this.validateOneOf(data, schema, dataPointerPath) || this.validateNot(data, schema, dataPointerPath) || null;
};

ValidatorContext.prototype.validateAllOf = function validateAllOf(data, schema, dataPointerPath) {
  if (schema.allOf === undefined) {
    return null;
  }

  var error;

  for (var i = 0; i < schema.allOf.length; i++) {
    var subSchema = schema.allOf[i];

    if (error = this.validateAll(data, subSchema, [], ["allOf", i], dataPointerPath)) {
      return error;
    }
  }

  return null;
};

ValidatorContext.prototype.validateAnyOf = function validateAnyOf(data, schema, dataPointerPath) {
  if (schema.anyOf === undefined) {
    return null;
  }

  var errors = [];
  var startErrorCount = this.errors.length;
  var oldUnknownPropertyPaths, oldKnownPropertyPaths;

  if (this.trackUnknownProperties) {
    oldUnknownPropertyPaths = this.unknownPropertyPaths;
    oldKnownPropertyPaths = this.knownPropertyPaths;
  }

  var errorAtEnd = true;

  for (var i = 0; i < schema.anyOf.length; i++) {
    if (this.trackUnknownProperties) {
      this.unknownPropertyPaths = {};
      this.knownPropertyPaths = {};
    }

    var subSchema = schema.anyOf[i];
    var errorCount = this.errors.length;
    var error = this.validateAll(data, subSchema, [], ["anyOf", i], dataPointerPath);

    if (error === null && errorCount === this.errors.length) {
      this.errors = this.errors.slice(0, startErrorCount);

      if (this.trackUnknownProperties) {
        for (var knownKey in this.knownPropertyPaths) {
          oldKnownPropertyPaths[knownKey] = true;
          delete oldUnknownPropertyPaths[knownKey];
        }

        for (var unknownKey in this.unknownPropertyPaths) {
          if (!oldKnownPropertyPaths[unknownKey]) {
            oldUnknownPropertyPaths[unknownKey] = true;
          }
        } // We need to continue looping so we catch all the property definitions, but we don't want to return an error


        errorAtEnd = false;
        continue;
      }

      return null;
    }

    if (error) {
      errors.push(error.prefixWith(null, "" + i).prefixWith(null, "anyOf"));
    }
  }

  if (this.trackUnknownProperties) {
    this.unknownPropertyPaths = oldUnknownPropertyPaths;
    this.knownPropertyPaths = oldKnownPropertyPaths;
  }

  if (errorAtEnd) {
    errors = errors.concat(this.errors.slice(startErrorCount));
    this.errors = this.errors.slice(0, startErrorCount);
    return this.createError(ErrorCodes.ANY_OF_MISSING, {}, "", "/anyOf", errors, data, schema);
  }
};

ValidatorContext.prototype.validateOneOf = function validateOneOf(data, schema, dataPointerPath) {
  if (schema.oneOf === undefined) {
    return null;
  }

  var validIndex = null;
  var errors = [];
  var startErrorCount = this.errors.length;
  var oldUnknownPropertyPaths, oldKnownPropertyPaths;

  if (this.trackUnknownProperties) {
    oldUnknownPropertyPaths = this.unknownPropertyPaths;
    oldKnownPropertyPaths = this.knownPropertyPaths;
  }

  for (var i = 0; i < schema.oneOf.length; i++) {
    if (this.trackUnknownProperties) {
      this.unknownPropertyPaths = {};
      this.knownPropertyPaths = {};
    }

    var subSchema = schema.oneOf[i];
    var errorCount = this.errors.length;
    var error = this.validateAll(data, subSchema, [], ["oneOf", i], dataPointerPath);

    if (error === null && errorCount === this.errors.length) {
      if (validIndex === null) {
        validIndex = i;
      } else {
        this.errors = this.errors.slice(0, startErrorCount);
        return this.createError(ErrorCodes.ONE_OF_MULTIPLE, {
          index1: validIndex,
          index2: i
        }, "", "/oneOf", null, data, schema);
      }

      if (this.trackUnknownProperties) {
        for (var knownKey in this.knownPropertyPaths) {
          oldKnownPropertyPaths[knownKey] = true;
          delete oldUnknownPropertyPaths[knownKey];
        }

        for (var unknownKey in this.unknownPropertyPaths) {
          if (!oldKnownPropertyPaths[unknownKey]) {
            oldUnknownPropertyPaths[unknownKey] = true;
          }
        }
      }
    } else if (error) {
      errors.push(error);
    }
  }

  if (this.trackUnknownProperties) {
    this.unknownPropertyPaths = oldUnknownPropertyPaths;
    this.knownPropertyPaths = oldKnownPropertyPaths;
  }

  if (validIndex === null) {
    errors = errors.concat(this.errors.slice(startErrorCount));
    this.errors = this.errors.slice(0, startErrorCount);
    return this.createError(ErrorCodes.ONE_OF_MISSING, {}, "", "/oneOf", errors, data, schema);
  } else {
    this.errors = this.errors.slice(0, startErrorCount);
  }

  return null;
};

ValidatorContext.prototype.validateNot = function validateNot(data, schema, dataPointerPath) {
  if (schema.not === undefined) {
    return null;
  }

  var oldErrorCount = this.errors.length;
  var oldUnknownPropertyPaths, oldKnownPropertyPaths;

  if (this.trackUnknownProperties) {
    oldUnknownPropertyPaths = this.unknownPropertyPaths;
    oldKnownPropertyPaths = this.knownPropertyPaths;
    this.unknownPropertyPaths = {};
    this.knownPropertyPaths = {};
  }

  var error = this.validateAll(data, schema.not, null, null, dataPointerPath);
  var notErrors = this.errors.slice(oldErrorCount);
  this.errors = this.errors.slice(0, oldErrorCount);

  if (this.trackUnknownProperties) {
    this.unknownPropertyPaths = oldUnknownPropertyPaths;
    this.knownPropertyPaths = oldKnownPropertyPaths;
  }

  if (error === null && notErrors.length === 0) {
    return this.createError(ErrorCodes.NOT_PASSED, {}, "", "/not", null, data, schema);
  }

  return null;
};

ValidatorContext.prototype.validateHypermedia = function validateCombinations(data, schema, dataPointerPath) {
  if (!schema.links) {
    return null;
  }

  var error;

  for (var i = 0; i < schema.links.length; i++) {
    var ldo = schema.links[i];

    if (ldo.rel === "describedby") {
      var template = new UriTemplate(ldo.href);
      var allPresent = true;

      for (var j = 0; j < template.varNames.length; j++) {
        if (!(template.varNames[j] in data)) {
          allPresent = false;
          break;
        }
      }

      if (allPresent) {
        var schemaUrl = template.fillFromObject(data);
        var subSchema = {
          "$ref": schemaUrl
        };

        if (error = this.validateAll(data, subSchema, [], ["links", i], dataPointerPath)) {
          return error;
        }
      }
    }
  }
}; // parseURI() and resolveUrl() are from https://gist.github.com/1088850
//   -  released as public domain by author ("Yaffle") - see comments on gist


function parseURI(url) {
  var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/); // authority = '//' + user + ':' + pass '@' + hostname + ':' port

  return m ? {
    href: m[0] || '',
    protocol: m[1] || '',
    authority: m[2] || '',
    host: m[3] || '',
    hostname: m[4] || '',
    port: m[5] || '',
    pathname: m[6] || '',
    search: m[7] || '',
    hash: m[8] || ''
  } : null;
}

function resolveUrl(base, href) {
  // RFC 3986
  function removeDotSegments(input) {
    var output = [];
    input.replace(/^(\.\.?(\/|$))+/, '').replace(/\/(\.(\/|$))+/g, '/').replace(/\/\.\.$/, '/../').replace(/\/?[^\/]*/g, function (p) {
      if (p === '/..') {
        output.pop();
      } else {
        output.push(p);
      }
    });
    return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
  }

  href = parseURI(href || '');
  base = parseURI(base || '');
  return !href || !base ? null : (href.protocol || base.protocol) + (href.protocol || href.authority ? href.authority : base.authority) + removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : href.pathname ? (base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname : base.pathname) + (href.protocol || href.authority || href.pathname ? href.search : href.search || base.search) + href.hash;
}

function getDocumentUri(uri) {
  return uri.split('#')[0];
}

function normSchema(schema, baseUri) {
  if (schema && _typeof(schema) === "object") {
    if (baseUri === undefined) {
      baseUri = schema.id;
    } else if (typeof schema.id === "string") {
      baseUri = resolveUrl(baseUri, schema.id);
      schema.id = baseUri;
    }

    if (Array.isArray(schema)) {
      for (var i = 0; i < schema.length; i++) {
        normSchema(schema[i], baseUri);
      }
    } else {
      if (typeof schema['$ref'] === "string") {
        schema['$ref'] = resolveUrl(baseUri, schema['$ref']);
      }

      for (var key in schema) {
        if (key !== "enum") {
          normSchema(schema[key], baseUri);
        }
      }
    }
  }
}

var get = __webpack_require__(11);

function defaultErrorReporter(language, languages) {
  language = language || 'en';
  var errorMessages = languages[language];
  return function (error, data, schema) {
    var messageTemplate = errorMessages[error.code] || ErrorMessagesDefault[error.code];

    if (typeof messageTemplate !== 'string') {
      return "Unknown error code " + error.code + ": " + JSON.stringify(error.messageParams);
    }

    var messageParams = Object.assign({}, error.params, {
      data: data,
      schema: schema,
      form: schema.form || {},
      // messageTitle is just for message
      title: schema.messageTitle || schema.title
    });

    if (schema.type === "object" && schema.properties && error.params.key) {
      messageParams.schema = schema.properties[error.params.key];
    }

    return messageTemplate.replace(/\{([^{}]*)\}/g, function (whole, varName) {
      var subValue = get(messageParams, varName);

      if (typeof subValue === 'string' || typeof subValue === 'number') {
        return subValue;
      } else {
        return whole;
      }
    });
  };
}

var ErrorCodes = {
  INVALID_TYPE: 0,
  ENUM_MISMATCH: 1,
  ANY_OF_MISSING: 10,
  ONE_OF_MISSING: 11,
  ONE_OF_MULTIPLE: 12,
  NOT_PASSED: 13,
  // Numeric errors
  NUMBER_MULTIPLE_OF: 100,
  NUMBER_MINIMUM: 101,
  NUMBER_MINIMUM_EXCLUSIVE: 102,
  NUMBER_MAXIMUM: 103,
  NUMBER_MAXIMUM_EXCLUSIVE: 104,
  NUMBER_NOT_A_NUMBER: 105,
  // String errors
  STRING_LENGTH_SHORT: 200,
  STRING_LENGTH_LONG: 201,
  STRING_PATTERN: 202,
  // Object errors
  OBJECT_PROPERTIES_MINIMUM: 300,
  OBJECT_PROPERTIES_MAXIMUM: 301,
  OBJECT_REQUIRED: 302,
  OBJECT_ADDITIONAL_PROPERTIES: 303,
  OBJECT_DEPENDENCY_KEY: 304,
  // Array errors
  ARRAY_LENGTH_SHORT: 400,
  ARRAY_LENGTH_LONG: 401,
  ARRAY_UNIQUE: 402,
  ARRAY_ADDITIONAL_ITEMS: 403,
  ARRAY_LENGTH_NOT_MATCH: 404,
  // Custom/user-defined errors
  FORMAT_CUSTOM: 500,
  KEYWORD_CUSTOM: 501,
  // Schema structure
  CIRCULAR_REFERENCE: 600,
  // Non-standard validation options
  UNKNOWN_PROPERTY: 1000
};
var ErrorCodeLookup = {};

for (var key in ErrorCodes) {
  ErrorCodeLookup[ErrorCodes[key]] = key;
}

var ErrorMessagesDefault = {
  INVALID_TYPE: "Invalid type: {type} (expected {expected})",
  ENUM_MISMATCH: "No enum match for: {value}",
  ANY_OF_MISSING: "Data does not match any schemas from \"anyOf\"",
  ONE_OF_MISSING: "Data does not match any schemas from \"oneOf\"",
  ONE_OF_MULTIPLE: "Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",
  NOT_PASSED: "Data matches schema from \"not\"",
  // Numeric errors
  NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
  NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
  NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
  NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
  NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
  NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
  // String errors
  STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
  STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
  STRING_PATTERN: "String does not match pattern: {pattern}",
  // Object errors
  OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
  OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
  OBJECT_REQUIRED: "Missing required property: {key}",
  OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
  OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
  // Array errors
  ARRAY_LENGTH_SHORT: "Array is too short ({data.length}), minimum {schema.minItems}",
  ARRAY_LENGTH_LONG: "Array is too long ({data.length}), maximum {schema.maxItems}",
  ARRAY_LENGTH_NOT_MATCH: "Array length should be {schema.minItems}, current:{data.length}",
  ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
  ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
  // Format errors
  FORMAT_CUSTOM: "Format validation failed ({message})",
  KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
  // Schema structure
  CIRCULAR_REFERENCE: "Circular $refs: {urls}",
  // Non-standard validation options
  UNKNOWN_PROPERTY: "Unknown property (not in schema)"
};

function ValidationError(code, params, dataPath, schemaPath, subErrors) {
  Error.call(this);

  if (code === undefined) {
    throw new Error("No error code supplied: " + schemaPath);
  }

  this.message = '';
  this.params = params;
  this.code = code;
  this.dataPath = dataPath || "";
  this.schemaPath = schemaPath || "";
  this.subErrors = subErrors || null;
  var err = new Error(this.message);
  this.stack = err.stack || err.stacktrace;

  if (!this.stack) {
    try {
      throw err;
    } catch (err) {
      this.stack = err.stack || err.stacktrace;
    }
  }
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
ValidationError.prototype.name = 'ValidationError';

ValidationError.prototype.prefixWith = function (dataPrefix, schemaPrefix) {
  if (dataPrefix !== null) {
    dataPrefix = dataPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
    this.dataPath = "/" + dataPrefix + this.dataPath;
  }

  if (schemaPrefix !== null) {
    schemaPrefix = schemaPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
    this.schemaPath = "/" + schemaPrefix + this.schemaPath;
  }

  if (this.subErrors !== null) {
    for (var i = 0; i < this.subErrors.length; i++) {
      this.subErrors[i].prefixWith(dataPrefix, schemaPrefix);
    }
  }

  return this;
};

function isTrustedUrl(baseUrl, testUrl) {
  if (testUrl.substring(0, baseUrl.length) === baseUrl) {
    var remainder = testUrl.substring(baseUrl.length);

    if (testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/" || remainder.charAt(0) === "#" || remainder.charAt(0) === "?") {
      return true;
    }
  }

  return false;
}

function createApi(language) {
  var languages = {};
  var globalContext = new ValidatorContext(languages);
  var currentLanguage;
  var customErrorReporter;
  var api = {
    setErrorReporter: function setErrorReporter(reporter) {
      if (typeof reporter === 'string') {
        return this.language(reporter);
      }

      customErrorReporter = reporter;
      return true;
    },
    addFormat: function addFormat() {
      globalContext.addFormat.apply(globalContext, arguments);
    },
    language: function language(code) {
      if (!code) {
        return currentLanguage;
      }

      if (!languages[code]) {
        code = code.split('-')[0]; // fall back to base language
      }

      if (languages[code]) {
        currentLanguage = code;
        return code; // so you can tell if fall-back has happened
      }

      return false;
    },
    addLanguage: function addLanguage(code, messageMap) {
      var key;

      for (key in ErrorCodes) {
        if (messageMap[key] && !messageMap[ErrorCodes[key]]) {
          messageMap[ErrorCodes[key]] = messageMap[key];
        }
      }

      var rootCode = code.split('-')[0];

      if (!languages[rootCode]) {
        // use for base language if not yet defined
        languages[code] = messageMap;
        languages[rootCode] = messageMap;
      } else {
        languages[code] = Object.create(languages[rootCode]);

        for (key in messageMap) {
          if (typeof languages[rootCode][key] === 'undefined') {
            languages[rootCode][key] = messageMap[key];
          }

          languages[code][key] = messageMap[key];
        }
      }

      return this;
    },
    freshApi: function freshApi(language) {
      var result = createApi();

      if (language) {
        result.language(language);
      }

      return result;
    },
    validate: function validate(data, schema, checkRecursive, banUnknownProperties) {
      var _this3 = this;

      this.root = data;
      var def = defaultErrorReporter(currentLanguage, languages);
      var errorReporter = customErrorReporter ? function (error, data, schema) {
        return customErrorReporter(error, data, schema) || def(error, data, schema);
      } : def;
      var context = new ValidatorContext(languages, globalContext, false, errorReporter, checkRecursive, banUnknownProperties);

      if (typeof schema === "string") {
        schema = {
          "$ref": schema
        };
      }

      context.addSchema("", schema);
      var error = context.validateAll(data, schema, null, null, "");

      if (!error && banUnknownProperties) {
        error = context.banUnknownProperties(data, schema);
      }

      return new Promise(function (resolve) {
        var handleError = function handleError(error) {
          _this3.error = error;
          _this3.missing = context.missing;
          _this3.valid = error === null || error === undefined;
          resolve(_this3.valid);
        };

        if (!error) {
          context.getFormatValidationResults().then(function (errors) {
            error = errors[0];
            handleError(error);
          });
        } else {
          handleError(error);
        }
      });
    },
    validateResult: function validateResult() {
      var result = {};
      return this.validate.apply(result, arguments).then(function () {
        return result;
      });
    },
    validateMultiple: function validateMultiple(data, schema, checkRecursive, banUnknownProperties) {
      var def = defaultErrorReporter(currentLanguage, languages);
      var errorReporter = customErrorReporter ? function (error, data, schema) {
        return customErrorReporter(error, data, schema) || def(error, data, schema);
      } : def;
      var context = new ValidatorContext(languages, globalContext, true, errorReporter, checkRecursive, banUnknownProperties);

      if (typeof schema === "string") {
        schema = {
          "$ref": schema
        };
      }

      context.addSchema("", schema);
      context.validateAll(data, schema, null, null, "");

      if (banUnknownProperties) {
        context.banUnknownProperties(data, schema);
      }

      return context.getFormatValidationResults().then(function (errors) {
        errors = errors.filter(function (e) {
          return e !== undefined;
        });
        var result = {};
        result.errors = context.errors.concat(errors);
        result.missing = context.missing;
        result.valid = result.errors.length === 0;
        return result;
      });
    },
    addSchema: function addSchema() {
      return globalContext.addSchema.apply(globalContext, arguments);
    },
    getSchema: function getSchema() {
      return globalContext.getSchema.apply(globalContext, arguments);
    },
    getSchemaMap: function getSchemaMap() {
      return globalContext.getSchemaMap.apply(globalContext, arguments);
    },
    getSchemaUris: function getSchemaUris() {
      return globalContext.getSchemaUris.apply(globalContext, arguments);
    },
    getMissingUris: function getMissingUris() {
      return globalContext.getMissingUris.apply(globalContext, arguments);
    },
    dropSchemas: function dropSchemas() {
      globalContext.dropSchemas.apply(globalContext, arguments);
    },
    defineKeyword: function defineKeyword() {
      globalContext.defineKeyword.apply(globalContext, arguments);
    },
    defineError: function defineError(codeName, codeNumber, defaultMessage) {
      if (typeof codeName !== 'string' || !/^[A-Z]+(_[A-Z]+)*$/.test(codeName)) {
        throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');
      }

      if (typeof codeNumber !== 'number' || codeNumber % 1 !== 0 || codeNumber < 10000) {
        throw new Error('Code number must be an integer > 10000');
      }

      if (typeof ErrorCodes[codeName] !== 'undefined') {
        throw new Error('Error already defined: ' + codeName + ' as ' + ErrorCodes[codeName]);
      }

      if (typeof ErrorCodeLookup[codeNumber] !== 'undefined') {
        throw new Error('Error code already used: ' + ErrorCodeLookup[codeNumber] + ' as ' + codeNumber);
      }

      ErrorCodes[codeName] = codeNumber;
      ErrorCodeLookup[codeNumber] = codeName;
      ErrorMessagesDefault[codeName] = ErrorMessagesDefault[codeNumber] = defaultMessage;

      for (var langCode in languages) {
        var language = languages[langCode];

        if (language[codeName]) {
          language[codeNumber] = language[codeNumber] || language[codeName];
        }
      }
    },
    reset: function reset() {
      globalContext.reset();
      this.error = null;
      this.missing = [];
      this.valid = true;
    },
    missing: [],
    error: null,
    valid: true,
    normSchema: normSchema,
    resolveUrl: resolveUrl,
    getDocumentUri: getDocumentUri,
    errorCodes: ErrorCodes,
    languages: languages
  };
  api.language(language || 'en');
  return api;
}

var tv4 = createApi();
tv4.addLanguage('en-gb', ErrorMessagesDefault); //legacy property

tv4.tv4 = tv4;
module.exports = tv4; // used by _header.js to globalise.

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(12);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(13),
    toKey = __webpack_require__(53);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isKey = __webpack_require__(14),
    stringToPath = __webpack_require__(20),
    toString = __webpack_require__(50);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(4);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(21);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(22);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(23);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(24),
    mapCacheDelete = __webpack_require__(45),
    mapCacheGet = __webpack_require__(47),
    mapCacheHas = __webpack_require__(48),
    mapCacheSet = __webpack_require__(49);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(25),
    ListCache = __webpack_require__(37),
    Map = __webpack_require__(44);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(26),
    hashDelete = __webpack_require__(33),
    hashGet = __webpack_require__(34),
    hashHas = __webpack_require__(35),
    hashSet = __webpack_require__(36);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(0);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(28),
    isMasked = __webpack_require__(29),
    isObject = __webpack_require__(9),
    toSource = __webpack_require__(31);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObject = __webpack_require__(9);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(30);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(0);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(0);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(0);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(38),
    listCacheDelete = __webpack_require__(39),
    listCacheGet = __webpack_require__(41),
    listCacheHas = __webpack_require__(42),
    listCacheSet = __webpack_require__(43);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(2);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(2);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(2);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(2);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(51);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5),
    arrayMap = __webpack_require__(52),
    isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(4);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(4);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ })
/******/ ]);
});