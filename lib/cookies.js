"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Module : Sparrow cookies
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

var setCookie = function setCookie(sName, sValue, oExpires, sPath, sDomain, bSecure) {
	var sCookie = sName + "=" + encodeURIComponent(sValue);
	if (oExpires) sCookie += "; expires=" + oExpires.toGMTString();
	if (sPath) sCookie += "; path=" + sPath;
	if (sDomain) sCookie += "; domain=" + sDomain;
	if (bSecure) sCookie += "; secure=" + bSecure;
	document.cookie = sCookie;
};

var getCookie = function getCookie(sName) {
	var sRE = "(?:; )?" + sName + "=([^;]*);?";
	var oRE = new RegExp(sRE);

	if (oRE.test(document.cookie)) {
		return decodeURIComponent(RegExp["$1"]);
	} else return null;
};

exports.setCookie = setCookie;
exports.getCookie = getCookie;