/**
 * Module : Sparrow util tools
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */


/**
 * 创建一个带壳的对象,防止外部修改
 * @param {Object} proto
 */
var createShellObject = function(proto) {
	var exf = function() {}
	exf.prototype = proto;
	return new exf();
};
var execIgnoreError = function(a, b, c) {
	try {
		a.call(b, c);
	} catch(e) {}
};

export {
	createShellObject,
	execIgnoreError
};