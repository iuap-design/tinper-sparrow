/**
 * Module : Sparrow dom
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

/**
 * 元素增加指定样式
 * @param value
 * @returns {*}
 */
var addClass = function(element, value) {
	if(typeof element.classList === 'undefined') {
		if(u._addClass)
			u._addClass(element, value);
	} else {
		element.classList.add(value);
	}
	return u;
};
/**
 * 删除元素上指定样式
 * @param {Object} element
 * @param {Object} value
 */
var removeClass = function(element, value) {
	if(typeof element.classList === 'undefined') {
		if(u._removeClass)
			u._removeClass(element, value);
	} else {
		element.classList.remove(value);
	}
	return u;
};
/**
 * 元素上是否存在该类
 * @param {Object} element
 * @param {Object} value
 */
var hasClass = function(element, value) {
	if(!element) return false;
	if(element.nodeName && (element.nodeName === '#text' || element.nodeName === '#comment')) return false;
	if(typeof element.classList === 'undefined') {
		if(u._hasClass)
			return u._hasClass(element, value);
		return false;
	} else {
		return element.classList.contains(value);
	}
};
/**
 * 选择元素类切换
 * @param {Object} element
 * @param {Object} value
 */
var toggleClass = function(element, value) {
	if(typeof element.classList === 'undefined') {
		return u._toggleClass(element, value);
	} else {
		return element.classList.toggle(value);
	}
};

/**
 * 向上查找指定类元素
 * @param {Object} element
 * @param {Object} selector
 */
var closest = function(element, selector) {
	var tmp = element;
	while(tmp != null && !hasClass(tmp, selector) && tmp != document.body) {
		tmp = tmp.parentNode;
	}
	if(tmp == document.body) return null;
	return tmp;
};

/**
 * 元素CSS操作
 * @param {Object} element
 * @param {Object} csstext
 * @param {Object} val
 */
var css = function(element, csstext, val) {//TO DO : 实现u.相关方法
	if(csstext instanceof Object) {
		for(var k in csstext) {
			var tmpcss = csstext[k]
			if(["width", "height", "top", "bottom", "left", "right"].indexOf(k) > -1 && u.isNumber(tmpcss)) {
				tmpcss = tmpcss + "px"
			}
			element.style[k] = tmpcss
		}
	} else {
		if(arguments.length > 2) {
			element.style[csstext] = val
		} else {
			return u.getStyle(element, csstext)
		}
	}

};

export {
	addClass,
	removeClass,
	hasClass,
	toggleClass,
	closest
};