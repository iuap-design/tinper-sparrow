'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getElementTop = exports.getElementLeft = exports.showPanelByEle = exports.getScroll = exports.getOffset = exports.makeModal = exports.makeDOM = exports.getZIndex = exports.getStyle = exports.wrap = exports.css = exports.closest = exports.toggleClass = exports.hasClass = exports.removeClass = exports.addClass = undefined;

var _event = require('./event');

/**
 * 元素增加指定样式
 * @param value
 * @returns {*}
 */
var addClass = function addClass(element, value) {
	if (element) {
		if (typeof element.classList === 'undefined') {
			if (u._addClass) {
				u._addClass(element, value);
			} else {
				$(element).addClass(value);
			}
		} else {
			element.classList.add(value);
		}
	}

	return this;
};
/**
 * 删除元素上指定样式
 * @param {Object} element
 * @param {Object} value
 */
/**
 * Module : Sparrow dom
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-16 13:59:17
 */
var removeClass = function removeClass(element, value) {
	if (element) {
		if (typeof element.classList === 'undefined') {
			if (u._removeClass) {
				u._removeClass(element, value);
			} else {
				$(element).removeClass(value);
			}
		} else {
			element.classList.remove(value);
		}
	}
	return this;
};
/**
 * 元素上是否存在该类
 * @param {Object} element
 * @param {Object} value
 */
var hasClass = function hasClass(element, value) {
	if (!element) return false;
	if (element.nodeName && (element.nodeName === '#text' || element.nodeName === '#comment')) return false;
	if (typeof element.classList === 'undefined') {
		if (u._hasClass) {
			return u._hasClass(element, value);
		} else {
			return $(element).hasClass(value);
		}

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
var toggleClass = function toggleClass(element, value) {
	if (typeof element.classList === 'undefined') {
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
var closest = function closest(element, selector) {
	var tmp = element;
	while (tmp != null && !hasClass(tmp, selector) && tmp != document.body) {
		tmp = tmp.parentNode;
	}
	if (tmp == document.body) return null;
	return tmp;
};

/**
 * 元素CSS操作
 * @param {Object} element
 * @param {Object} csstext
 * @param {Object} val
 */
var css = function css(element, csstext, val) {
	//TO DO : 实现u.相关方法
	if (csstext instanceof Object) {
		for (var k in csstext) {
			var tmpcss = csstext[k];
			if (["width", "height", "top", "bottom", "left", "right"].indexOf(k) > -1 && isNumber(tmpcss)) {
				tmpcss = tmpcss + "px";
			}
			element.style[k] = tmpcss;
		}
	} else {
		if (arguments.length > 2) {
			element.style[csstext] = val;
		} else {
			return getStyle(element, csstext);
		}
	}
};

var wrap = function wrap(element, parent) {
	var p = makeDOM(parent);
	element.parentNode.insertBefore(p, element);
	p.appendChild(element);
};
var getStyle = function getStyle(element, key) {
	//不要在循环里用
	var allCSS;
	if (window.getComputedStyle) {
		allCSS = window.getComputedStyle(element);
	} else {
		allCSS = element.currentStyle;
	}
	if (allCSS[key] !== undefined) {
		return allCSS[key];
	} else {
		return "";
	}
};
var globalZIndex;
/**
 * 统一zindex值, 不同控件每次显示时都取最大的zindex，防止显示错乱
 */
var getZIndex = function getZIndex() {
	if (!globalZIndex) {
		globalZIndex = 2000;
	}
	return globalZIndex++;
};
var makeDOM = function makeDOM(htmlString) {
	var tempDiv = document.createElement("div");
	tempDiv.innerHTML = htmlString;
	var _dom = tempDiv.children[0];
	return _dom;
};
/**
 * element
 */
var makeModal = function makeModal(element, parEle) {
	var overlayDiv = document.createElement('div');
	$(overlayDiv).addClass('u-overlay');
	overlayDiv.style.zIndex = getZIndex();
	// 如果有父元素则插入到父元素上，没有则添加到body上
	if (parEle && parEle != document.body) {
		addClass(overlayDiv, 'hasPar');
		parEle.appendChild(overlayDiv);
	} else {
		document.body.appendChild(overlayDiv);
	}

	element.style.zIndex = getZIndex();
	(0, _event.on)(overlayDiv, 'click', function (e) {
		(0, _event.stopEvent)(e);
	});
	return overlayDiv;
};

var getOffset = function getOffset(Node, offset) {
	if (!offset) {
		offset = {};
		offset.top = 0;
		offset.left = 0;
	}
	if (Node == document.body) {
		return offset;
	}
	offset.top += Node.offsetTop;
	offset.left += Node.offsetLeft;
	if (Node.offsetParent) return getOffset(Node.offsetParent, offset);else return offset;
};
var getScroll = function getScroll(Node, offset) {
	if (!offset) {
		offset = {};
		offset.top = 0;
		offset.left = 0;
	}
	if (Node == document.body) {
		offset.top += Node.scrollTop || document.documentElement.scrollTop;
		offset.left += Node.scrollLeft || document.documentElement.scrollLeft;
		return offset;
	}
	if (Node.tagName != 'INPUT') {
		offset.top += Node.scrollTop;
		offset.left += Node.scrollLeft;
	}

	if (Node.parentNode) return getScroll(Node.parentNode, offset);else return offset;
};
var showPanelByEle = function showPanelByEle(obj) {
	var ele = obj.ele,
	    panel = obj.panel,
	    position = obj.position,

	// off = u.getOffset(ele),scroll = u.getScroll(ele),
	// offLeft = off.left,offTop = off.top,
	// scrollLeft = scroll.left,scrollTop = scroll.top,
	// eleWidth = ele.offsetWidth,eleHeight = ele.offsetHeight,
	// panelWidth = panel.offsetWidth,panelHeight = panel.offsetHeight,
	bodyWidth = document.body.clientWidth,
	    bodyHeight = document.body.clientHeight,
	    position = position || 'top',

	// left = offLeft - scrollLeft,top = offTop - scrollTop,
	eleRect = obj.ele.getBoundingClientRect(),
	    panelRect = obj.panel.getBoundingClientRect(),
	    eleWidth = eleRect.width || 0,
	    eleHeight = eleRect.height || 0,
	    left = eleRect.left || 0,
	    top = eleRect.top || 0,
	    panelWidth = panelRect.width || 0,
	    panelHeight = panelRect.height || 0,
	    docWidth = document.documentElement.clientWidth,
	    docHeight = document.documentElement.clientHeight;

	// 基准点为Ele的左上角
	// 后续根据需要完善
	if (position == 'left') {
		left = left - panelWidth;
		top = top + (eleHeight - panelHeight) / 2;
	} else if (position == 'right') {
		left = left + eleWidth;
		top = top + (eleHeight - panelHeight) / 2;
	} else if (position == 'top' || position == 'topCenter') {
		left = left + (eleWidth - panelWidth) / 2;
		top = top - panelHeight;
	} else if (position == 'bottom' || position == 'bottomCenter') {
		left = left + (eleWidth - panelWidth) / 2;
		top = top + eleHeight;
	} else if (position == 'bottomLeft') {
		left = left;
		top = top + eleHeight;
	}

	if (left + panelWidth > docWidth) left = docWidth - panelWidth - 10;
	if (left < 0) left = 0;

	if (top + panelHeight > docHeight) {
		top = docHeight - panelHeight - 10;
	}

	if (top < 0) top = 0;
	panel.style.left = left + 'px';
	panel.style.top = top + 'px';
};

var getElementLeft = function getElementLeft(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;
	while (current !== null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	if (document.compatMode == "BackCompat") {
		var elementScrollLeft = document.body.scrollLeft;
	} else {
		var elementScrollLeft = document.documentElement.scrollLeft;
	}
	return actualLeft - elementScrollLeft;
};
var getElementTop = function getElementTop(element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while (current !== null) {
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	if (document.compatMode == "BackCompat") {
		var elementScrollTop = document.body.scrollTop;
	} else {
		var elementScrollTop = document.documentElement.scrollTop;
	}
	return actualTop - elementScrollTop;
};
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.hasClass = hasClass;
exports.toggleClass = toggleClass;
exports.closest = closest;
exports.css = css;
exports.wrap = wrap;
exports.getStyle = getStyle;
exports.getZIndex = getZIndex;
exports.makeDOM = makeDOM;
exports.makeModal = makeModal;
exports.getOffset = getOffset;
exports.getScroll = getScroll;
exports.showPanelByEle = showPanelByEle;
exports.getElementLeft = getElementLeft;
exports.getElementTop = getElementTop;