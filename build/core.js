'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.core = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                   * Module : Sparrow core context
                                                                                                                                                                                                                                                   * Author : Kvkens(yueming@yonyou.com)
                                                                                                                                                                                                                                                   * Date	  : 2016-07-28 13:52:19
                                                                                                                                                                                                                                                   */


var _extend = require('./extend');

var _extend2 = _interopRequireDefault(_extend);

var _util = require('./util');

var _cookies = require('./cookies');

var _enumerables = require('./enumerables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var environment = {};
/**
 * client attributes
 */
var clientAttributes = {};

var sessionAttributes = {};

var fn = {};
var maskerMeta = {
	'float': {
		precision: 2
	},
	'datetime': {
		format: 'YYYY-MM-DD HH:mm:ss',
		metaType: 'DateTimeFormatMeta',
		speratorSymbol: '-'
	},
	'time': {
		format: 'HH:mm'
	},
	'date': {
		format: 'YYYY-MM-DD'
	},
	'currency': {
		precision: 2,
		curSymbol: '￥'
	},
	'percent': {}
};
/**
 * 获取环境信息
 * @return {environment}
 */
fn.getEnvironment = function () {
	return (0, _util.createShellObject)(environment);
};

/**
 * 获取客户端参数对象
 * @return {clientAttributes}
 */
fn.getClientAttributes = function () {
	var exf = function exf() {};
	return (0, _util.createShellObject)(clientAttributes);
};

fn.setContextPath = function (contextPath) {
	return environment[IWEB_CONTEXT_PATH] = contextPath;
};
fn.getContextPath = function (contextPath) {
	return environment[IWEB_CONTEXT_PATH];
};
/**
 * 设置客户端参数对象
 * @param {Object} k 对象名称
 * @param {Object} v 对象值(建议使用简单类型)
 */
fn.setClientAttribute = function (k, v) {
	clientAttributes[k] = v;
};
/**
 * 获取会话级参数对象
 * @return {clientAttributes}
 */
fn.getSessionAttributes = function () {
	var exf = function exf() {};
	return (0, _util.createShellObject)(sessionAttributes);
};

/**
 * 设置会话级参数对象
 * @param {Object} k 对象名称
 * @param {Object} v 对象值(建议使用简单类型)
 */
fn.setSessionAttribute = function (k, v) {
	sessionAttributes[k] = v;
	(0, _cookies.setCookie)("ISES_" + k, v);
};

/**
 * 移除客户端参数
 * @param {Object} k 对象名称
 */
fn.removeClientAttribute = function (k) {
	clientAttributes[k] = null;
	execIgnoreError(function () {
		delete clientAttributes[k];
	});
};

/**
 * 获取地区信息编码
 */
fn.getLocale = function () {
	return this.getEnvironment().locale;
};

/**
 * 获取多语信息
 */
fn.getLanguages = function () {
	return this.getEnvironment().languages;
};
/**
 * 收集环境信息(包括客户端参数)
 * @return {Object}
 */
fn.collectEnvironment = function () {
	var _env = this.getEnvironment();
	var _ses = this.getSessionAttributes();

	for (var i in clientAttributes) {
		_ses[i] = clientAttributes[i];
	}
	_env.clientAttributes = _ses;
	return _env;
};

/**
 * 设置数据格式信息
 * @param {String} type
 * @param {Object} meta
 */
fn.setMaskerMeta = function (type, meta) {
	if (typeof type == 'function') {
		getMetaFunc = type;
	} else {
		if (!maskerMeta[type]) maskerMeta[type] = meta;else {
			if ((typeof meta === 'undefined' ? 'undefined' : _typeof(meta)) != 'object') maskerMeta[type] = meta;else for (var key in meta) {
				maskerMeta[type][key] = meta[key];
			}
		}
	}
};
fn.getMaskerMeta = function (type) {
	if (typeof getMetaFunc == 'function') {
		var meta = getMetaFunc.call(this);
		return meta[type];
	} else return (0, _extend2.default)({}, maskerMeta[type]);
};
environment.languages = (0, _cookies.getCookie)(_enumerables.U_LANGUAGES) ? (0, _cookies.getCookie)(_enumerables.U_LANGUAGES).split(',') : navigator.language ? navigator.language : 'zh-CN';
if (environment.languages == 'zh-cn') environment.languages = 'zh-CN';
if (environment.languages == 'en-us') environment.languages = 'en-US';

environment.theme = (0, _cookies.getCookie)(_enumerables.U_THEME);
environment.locale = (0, _cookies.getCookie)(_enumerables.U_LOCALE);
//environment.timezoneOffset = (new Date()).getTimezoneOffset()
environment.usercode = (0, _cookies.getCookie)(_enumerables.U_USERCODE);
//init session attribute
document.cookie.replace(/ISES_(\w*)=([^;]*);?/ig, function (a, b, c) {
	sessionAttributes[b] = c;
});

var Core = function Core() {};
Core.prototype = fn;

var core = new Core();

exports.core = core;