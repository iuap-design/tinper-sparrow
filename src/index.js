/**
 * Module : Sparrow entry index
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 15:39:01
 */

//对外暴露接口用于外部访问
var u = window.u || {};
window.u = u;
//相关依赖导入
import {
	extend
} from './extend';
//import {U_LANGUAGES,U_THEME,U_LOCALE,U_USERCODE} from './enumerables'
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
	stopEvent,
	event
} from './event';
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

//window.U_LANGUAGES = U_LANGUAGES;
//公开接口、属性对外暴露
u.extend = extend;
u.extend(u, {
	setCookie: setCookie,
	getCookie: getCookie
});
u.extend(u, {
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
	each: each
});
u.extend(u, env);

u.extend(u, {
	on: on,
	off: off,
	trigger: trigger,
	stopEvent: stopEvent,
	event: event
});
u.extend(u, {
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
	showPanelByEle: showPanelByEle
});
u.extend(u, {
	Class: Class
});
u.extend(u, {
	core: core
});

console.log(u);