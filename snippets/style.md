
## 样式

### addClass(element,value)
* 说明：

  为HTML元素添加样式

* 参数：
  * {HTMLElement} element：必需。需要添加样式的HTML元素。
  * {String} value：必需。添加的样式名。
* 返回值：

  无
* 用法：
  ​
  	u.addClass(document.getElementById('id1'), 'add-class');

### removeClass(element,value)
* 说明：

  为HTML元素删除样式

* 参数：
  * {HTMLElement} element：必需。需要删除样式的HTML元素。
  * {String} value：必需。删除的样式名。
* 返回值：

  无
* 用法：
  ​
  	u.removeClass(document.getElementById('id1'), 'add-class');

### hasClass(element,value)
* 说明：

  判断HTML元素是否存在某样式

* 参数：
  * {HTMLElement} element：必需。进行判断的HTML元素。
  * {String} value：必需。进行判断的样式名。
* 返回值：

  {Boolean}存在样式则返回true，不存在样式则返回false
* 用法：
  ​
  	u.hasClass(document.getElementById('id1'), 'add-class');

### toggleClass(element,value)
* 说明：

  判断HTML元素是否存在某样式，存在则删除此样式，否则添加此样式

* 参数：
  * {HTMLElement} element：必需。进行判断的HTML元素。
  * {String} value：必需。进行判断的样式名。
* 返回值：

  {Boolean}执行完方法之后，如果存在样式则返回true，不存在样式则返回false
* 用法：
  ​
  	u.toggleClass(document.getElementById('id1'), 'add-class');

### css(element,csstext,val)
* 说明：

  为HTML元素添加css样式属性。传入2个参数且第二个参数为字符串时获取HTML元素的css样式属性。

* 参数：
  * {HTMLElement} element：必需。进行判断的HTML元素。
  * {String}/{Object} csstext：必需。传入值为String时表示要添加的css属性名称，传入值为Object时表示要添加的css属性名称及属性值组成的Object对象。
  * {String} value：csstext为String时必需。需要添加的css属性值。
* 返回值：

  设置css样式属性时返回值为空。

  获取css样式属性时返回值为对应的css样式属性值。
* 用法：
  ​
  	u.css(document.getElementById('id1'), 'width','200px');	 //设置宽度为200px
  	u.css(document.getElementById('id1'), {width:'500px'}); // 设置宽度为500px
  	u.css(document.getElementById('id1'), 'width'); // 获取宽度
