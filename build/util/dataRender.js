'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dateToUTCString = exports.percentRender = exports.timeRender = exports.dateTimeRender = exports.dateRender = exports.integerRender = exports.floatRender = undefined;

var _core = require('../core');

var _formater = require('./formater');

var _masker = require('./masker');

var _dateUtils = require('./dateUtils');

/**
 * Module : Sparrow data display formater
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 15:39:01
 */
var floatRender = function floatRender(value, precision) {
	var trueValue = value;
	if (typeof value === 'undefined' || value === null) return value;
	//value 为 ko对象
	if (typeof value === 'function') trueValue = value();
	var maskerMeta = _core.core.getMaskerMeta('float') || {};
	if (typeof precision === 'number') maskerMeta.precision = precision;
	var formater = new _formater.NumberFormater(maskerMeta.precision);
	var masker = new _masker.NumberMasker(maskerMeta);
	return masker.format(formater.format(trueValue)).value;
};

var integerRender = function integerRender(value) {
	var trueValue = value;
	if (typeof value === 'undefined' || value === null) return value;
	//value 为 ko对象
	if (typeof value === 'function') trueValue = value();
	return trueValue;
};

var _dateRender = function _dateRender(value, format, type) {
	var trueValue = value;
	if (typeof value === 'undefined' || value === null) return value;
	//value 为 ko对象
	if (typeof value === 'function') trueValue = value();
	var maskerMeta = _core.core.getMaskerMeta(type) || {};
	if (typeof format != 'undefined') maskerMeta.format = format;
	var maskerValue = _dateUtils.date.format(trueValue, maskerMeta.format);
	return maskerValue;
};

var dateRender = function dateRender(value, format) {
	return _dateRender(value, format, 'date');
};

var dateTimeRender = function dateTimeRender(value, format) {
	return _dateRender(value, format, 'datetime');
};

var timeRender = function timeRender(value, format) {
	return _dateRender(value, format, 'time');
};

var percentRender = function percentRender(value) {
	var trueValue = value;
	if (typeof value === 'undefined' || value === null) return value;
	//value 为 ko对象
	if (typeof value === 'function') trueValue = value();
	var maskerMeta = _core.core.getMaskerMeta('percent') || {};
	var masker = new _masker.PercentMasker(maskerMeta);
	var maskerValue = masker.format(trueValue);
	return maskerValue && maskerValue.value ? maskerValue.value : '';
};

var dateToUTCString = function dateToUTCString(date) {
	if (!date) return '';
	if (date.indexOf("-") > -1) date = date.replace(/\-/g, "/");
	var utcString = Date.parse(date);
	if (isNaN(utcString)) return "";
	return utcString;
};

exports.floatRender = floatRender;
exports.integerRender = integerRender;
exports.dateRender = dateRender;
exports.dateTimeRender = dateTimeRender;
exports.timeRender = timeRender;
exports.percentRender = percentRender;
exports.dateToUTCString = dateToUTCString;