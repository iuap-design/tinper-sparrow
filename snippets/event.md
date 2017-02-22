# 事件绑定

## # on(element,eventName,child,listener)
* 说明：

  为HTML元素绑定事件

* 参数：
  * {HTMLElement} element：必需。需要绑定事件的HTML元素。
  * {String} eventName：必需。绑定事件的事件名称。
  * {String} child：可选。选择器，是否为element的子元素进行事件绑定。
  * {function} listener：必需。触发事件时执行的function。
* 返回值：

  无
* 用法：
  	u.on(window, 'resize', function(){
  		alert('resizeFun')
  	});

## # off(element,eventName,listener)
* 说明：

  为HTML元素取消事件绑定

* 参数：
  * {HTMLElement} element：必需。取消绑定事件的HTML元素。
  * {String} eventName：必需。绑定事件的事件名称。
  * {function} listener：可选。取消绑定的function，如果传入则只取消此function的绑定，对其他function不进行改变。
* 返回值：

  无
* 用法：
  	u.off(window, 'resize');


## # trigger(element,eventName)
* 说明：

  触发HTML元素的事件绑定

* 参数：
  * {HTMLElement} element：必需。触发绑定事件的HTML元素。
  * {String} eventName：必需。触发绑定事件的事件名称。
* 返回值：

  无
* 用法：
  ​	
  	u.trigger(window, 'resize');




## #stopEvent(e)

* 说明：

  阻止事件传播，兼容不同浏览器

* 参数：

  * {Event} e：必需。需要阻止传播的事件。

* 返回值：

  无
* 用法：
  	u.stopEvent(e);	 


