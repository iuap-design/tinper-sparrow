## 对象判断

### isDate(obj)
* 说明：

  判断传入对象是否为Date对象

* 参数：

  * {Object} obj：必需。需要进行判断的对象。
* 返回值：

  {Boolean}传入对象为Date对象返回true否则返回false
* 用法：
  ​
  	u.isDate(new Date());	 

### isNumber(obj)
* 说明：

  判断传入对象是否为Number对象

* 参数：

  * {Object} obj：必需。需要进行判断的对象。
* 返回值：

  {Boolean}传入对象为Number对象返回true否则返回false
* 用法：
  ​
  	u.isNumber('123');

### isArray(obj)
* 说明：

  判断传入对象是否为数组对象

* 参数：

  * {Object} obj：必需。需要进行判断的对象。
* 返回值：

  {Boolean}传入对象为数组对象返回true否则返回false
* 用法：
  ​
  	u.isArray(['1','2']);


### isEmptyObject(obj)
* 说明：

  判断传入对象是否为空对象

* 参数：

  * {Object} obj：必需。需要进行判断的对象。
* 返回值：

  {Boolean}传入对象为空对象返回true否则返回false
* 用法：
  ​
  	u.isEmptyObject({id:'id'});


### inArray(node,arr)
* 说明：

  判断元素是否在数组中

* 参数：

  * {Object} node：必需。需要进行判断的元素。
  * {Array} arr：必需。需要进行判断的数组。
* 返回值：

  {Boolean}如果数组中存在元素则返回true，否则返回false。
* 用法：
  ​
  	u.inArray('a1',['a2','a3']);
