'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.extend = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Module : Sparrow extend
                                                                                                                                                                                                                                                                               * Author : Kvkens(yueming@yonyou.com)
                                                                                                                                                                                                                                                                               * Date	  : 2016-07-27 21:46:50
                                                                                                                                                                                                                                                                               */

var _enumerables = require('./enumerables');

/**
 * 复制对象属性
 *
 * @param {Object}  目标对象
 * @param {config} 源对象
 */
var extend = function extend(object, config) {
	var args = arguments,
	    options;
	if (args.length > 1) {
		for (var len = 1; len < args.length; len++) {
			options = args[len];
			if (object && options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
				var i, j, k;
				for (i in options) {
					object[i] = options[i];
				}
				if (_enumerables.enumerables) {
					for (j = _enumerables.enumerables.length; j--;) {
						k = _enumerables.enumerables[j];
						if (options.hasOwnProperty && options.hasOwnProperty(k)) {
							object[k] = options[k];
						}
					}
				}
			}
		}
	}
	return object;
};

exports.extend = extend;