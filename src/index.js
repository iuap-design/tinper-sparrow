/**
 * Module : Sparrow entry index
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-04 09:48:36
 */

import {extend} from './extend';
import {
	setCookie,
	getCookie
} from './cookies';
import {
	createShellObject,
	execIgnoreError,
	getFunction,
	getJSObject,
	isDate,
	isNumber,
	isArray,
	isEmptyObject,
	inArray,
	isDomElement,
	each
} from './util';
import {
	env
} from './env';
import {
	on,
	off,
	trigger,
	stopEvent
} from './event';
import{
	event
} from './mobileEvents'
import {
	addClass,
	removeClass,
	hasClass,
	toggleClass,
	closest,
	css,
	wrap,
	getStyle,
	getZIndex,
	makeDOM,
	makeModal,
	getOffset,
	getScroll,
	showPanelByEle
} from './dom';
import {
	Class
} from './class';
import {
	core
} from './core';

import {
	ajax
} from './ajax';

import {
	get,
	post
} from './fetch';

import {
	floatRender,
	integerRender,
	dateRender,
	dateTimeRender,
	timeRender,
	percentRender,
	dateToUTCString
} from './util/dataRender';

import {
	NumberFormater,
	DateFormater
} from './util/formater';

import {
	date
} from './util/dateUtils';
import {
	AddressMasker,
	NumberMasker,
	CurrencyMasker,
	PercentMasker
} from './util/masker'

import {
	hotkeys
} from './util/hotKeys';

import {
	Ripple
} from './util/ripple';

import {
	RSAUtils,
	BigInt,
	BarrettMu,
	twoDigit
} from './util/rsautils';

import {
	trans
} from './util/i18n';


//公开接口、属性对外暴露
let api = {
	ajax: ajax,
	get,
	post,
	extend : extend,
	setCookie: setCookie,
	getCookie: getCookie,
	createShellObject: createShellObject,
	execIgnoreError: execIgnoreError,
	getFunction: getFunction,
	getJSObject: getJSObject,
	isDate: isDate,
	isNumber: isNumber,
	isArray: isArray,
	isEmptyObject: isEmptyObject,
	inArray: inArray,
	isDomElement: isDomElement,
	each: each,
	on: on,
	off: off,
	trigger: trigger,
	stopEvent: stopEvent,
	event: event,
	addClass: addClass,
	removeClass: removeClass,
	hasClass: hasClass,
	toggleClass: toggleClass,
	closest: closest,
	css: css,
	wrap: wrap,
	getStyle: getStyle,
	getZIndex: getZIndex,
	makeDOM: makeDOM,
	makeModal: makeModal,
	getOffset: getOffset,
	getScroll: getScroll,
	showPanelByEle: showPanelByEle,
	Class: Class,
	core: core,
	floatRender: floatRender,
	integerRender: integerRender,
	dateRender: dateRender,
	dateTimeRender: dateTimeRender,
	timeRender: timeRender,
	percentRender: percentRender,
	dateToUTCString: dateToUTCString,
	date: date,
	NumberFormater: NumberFormater,
	DateFormater: DateFormater,
	AddressMasker: AddressMasker,
	NumberMasker: NumberMasker,
	CurrencyMasker: CurrencyMasker,
	PercentMasker: PercentMasker,
	hotkeys: hotkeys,
	Ripple: Ripple,
	RSAUtils: RSAUtils,
	BigInt: BigInt,
	BarrettMu: BarrettMu,
	twoDigit: twoDigit,
	trans: trans,
	
};
extend(api,env);
// export api;
//export default api;
extend(api,window.u || {});

window.u = api;
window.iweb = {}
window.iweb.browser = window.u;
window.sparrow = window.u;
export {
	u,
	sparrow
};
