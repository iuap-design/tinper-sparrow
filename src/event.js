/**
 * Module : Sparrow touch event
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 14:41:17
 */

var on = function(element, eventName, child, listener) {
	if(!element)
		return;
	if(arguments.length < 4) {
		listener = child;
		child = undefined;
	} else {
		var childlistener = function(e) {
			if(!e) {
				return;
			}
			var tmpchildren = element.querySelectorAll(child)
			tmpchildren.forEach(function(node) {
				if(node == e.target) {
					listener.call(e.target, e)
				}
			})
		}
	}
	//capture = capture || false;

	if(!element["uEvent"]) {
		//在dom上添加记录区
		element["uEvent"] = {}
	}
	//判断是否元素上是否用通过on方法填加进去的事件
	if(!element["uEvent"][eventName]) {
		element["uEvent"][eventName] = [child ? childlistener : listener]
		if(u.event && u.event[eventName] && u.event[eventName].setup) {
			u.event[eventName].setup.call(element);
		}
		element["uEvent"][eventName + 'fn'] = function(e) {
			//火狐下有问题修改判断
			if(!e)
				e = typeof event != 'undefined' && event ? event : window.event;
			element["uEvent"][eventName].forEach(function(fn) {
				try {
					e.target = e.target || e.srcElement; //兼容IE8
				} catch(ee) {}
				if(fn)
					fn.call(element, e)
			})
		}
		if(element.addEventListener) { // 用于支持DOM的浏览器
			element.addEventListener(eventName, element["uEvent"][eventName + 'fn']);
		} else if(element.attachEvent) { // 用于IE浏览器
			element.attachEvent("on" + eventName, element["uEvent"][eventName + 'fn']);
		} else { // 用于其它浏览器
			element["on" + eventName] = element["uEvent"][eventName + 'fn']
		}
	} else {
		//如果有就直接往元素的记录区添加事件
		var lis = child ? childlistener : listener;
		var hasLis = false;
		element["uEvent"][eventName].forEach(function(fn) {
			if(fn == lis) {
				hasLis = true;
			}
		});
		if(!hasLis) {
			element["uEvent"][eventName].push(child ? childlistener : listener)
		}
	}

};

var off = function(element, eventName, listener) {
	//删除事件数组
	if(listener) {
		if(element && element["uEvent"] && element["uEvent"][eventName]) {
			element["uEvent"][eventName].forEach(function(fn, i) {
				if(fn == listener) {
					element["uEvent"][eventName].splice(i, 1);
				}
			});
		}
		return;
	}
	var eventfn;
	if(element && element["uEvent"] && element["uEvent"][eventName + 'fn'])
		eventfn = element["uEvent"][eventName + 'fn']
	if(element.removeEventListener) { // 用于支持DOM的浏览器
		element.removeEventListener(eventName, eventfn);
	} else if(element.removeEvent) { // 用于IE浏览器
		element.removeEvent("on" + eventName, eventfn);
	} else { // 用于其它浏览器
		delete element["on" + eventName]
	}
	if(u.event && u.event[eventName] && u.event[eventName].teardown) {
		u.event[eventName].teardown.call(element);
	}

	if(element && element["uEvent"] && element["uEvent"][eventName])
		element["uEvent"][eventName] = undefined
	if(element && element["uEvent"] && element["uEvent"][eventName + 'fn'])
		element["uEvent"][eventName + 'fn'] = undefined

};
var trigger = function(element, eventName) {
	if(element["uEvent"] && element["uEvent"][eventName]) {
		element["uEvent"][eventName + 'fn']()
	}
};

/**
 * 阻止冒泡
 */
var stopEvent = function(e) {
	if(typeof(e) != "undefined") {
		if(e.stopPropagation)
			e.stopPropagation();
		else {
			e.cancelBubble = true;
		}
		//阻止默认浏览器动作(W3C)
		if(e && e.preventDefault)
			e.preventDefault();
		//IE中阻止函数器默认动作的方式
		else
			window.event.returnValue = false;
	}
};

export {
	on,
	off,
	trigger,
	stopEvent
};
