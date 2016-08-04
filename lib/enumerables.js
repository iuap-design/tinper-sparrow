"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Module : Sparrow extend enum
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

var U_LANGUAGES = "i_languages";
var U_THEME = "u_theme";
var U_LOCALE = "u_locale";
var U_USERCODE = "usercode";

var enumerables = true,
    enumerablesTest = {
	toString: 1
},
    toString = Object.prototype.toString;
for (var i in enumerablesTest) {
	exports.enumerables = enumerables = null;
}
if (enumerables) {
	exports.enumerables = enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'constructor'];
}

exports.enumerables = enumerables;
exports.U_LANGUAGES = U_LANGUAGES;
exports.U_THEME = U_THEME;
exports.U_LOCALE = U_LOCALE;
exports.U_USERCODE = U_USERCODE;